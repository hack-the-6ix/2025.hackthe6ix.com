import { CSSProperties, ElementType, PolyComponentPropsWithRef } from 'react';
import cn from 'classnames';
import { Color } from '@/styles';
import { getClipPath } from '@/styles/pixel';
import Flex from '../Flex';
import styles from './CardFrame.module.scss';

export type CardFrameProps<T extends ElementType> = PolyComponentPropsWithRef<
  T,
  {
    borderContentColor?: Color;
    direction: 'horizontal' | 'vertical';
    length: CSSProperties['width'];
    thickness?: CSSProperties['width'];
  }
>;

export default function CardFrame<T extends ElementType = 'div'>({
  borderContentColor = 'framePurple',
  direction = 'vertical',
  length,
  thickness = 28,
  as,
  ...props
}: CardFrameProps<T>) {
  const pixelSize = 4;
  const borderWidth = 1.5;
  const radius = 2;
  const outerClipPath = getClipPath(radius, pixelSize + 2);
  const innerClipPath = getClipPath(
    radius - borderWidth,
    pixelSize,
    borderWidth,
  );

  return (
    <Flex
      {...props}
      className={cn(props.className, styles.card)}
      as={as as 'div'}
      align="center"
      justify="center"
      inline
      style={{
        ...props.style,
        '--card-outer': outerClipPath, // Brown outline
        '--card-inner': innerClipPath, // White content box
        '--card-offset': borderWidth * pixelSize,
        '--background-color1': `var(--frameBorderBrown-200)`,
        '--background-color2': `var(--frameBorderBrown-900)`,
        '--content-color': `var(--${borderContentColor})`,
        position: 'relative', // Main border
        overflow: 'hidden',
        width: direction === 'vertical' ? thickness : length,
        height: direction === 'vertical' ? length : thickness,
        minWidth: direction === 'vertical' ? thickness : length,
        minHeight: direction === 'vertical' ? length : thickness,
      }}
    >
      {/* Outer brown outline */}
      <div className={styles.outline}></div>

      <div className={styles.content}></div>
    </Flex>
  );
}
