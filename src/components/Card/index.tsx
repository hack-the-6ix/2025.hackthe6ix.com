import { ElementType, PolyComponentPropsWithRef } from 'react';
import cn from 'classnames';
import { Color } from '@/styles';
import { getClipPath } from '@/styles/pixel';
import Flex from '../Flex';
import styles from './Card.module.scss';

export type CardProps<T extends ElementType> = PolyComponentPropsWithRef<
  T,
  {
    // For doing the pixel stuff
    pixelSize?: number;
    radius?: number;
    borderWidth?: number;
    borderColor?: Color;
    padding?: number;
    backgroundColor?: string;
  }
>;

export default function Card<T extends ElementType = 'div'>({
  pixelSize = 4,
  borderWidth = 1,
  radius = 1,
  borderColor,
  padding = 4,
  backgroundColor = "#fff",
  children,
  as,
  ...props
}: CardProps<T>) {
  const outerClipPath = getClipPath(radius, pixelSize);
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
        '--card-outer': outerClipPath,
        '--card-inner': innerClipPath,
        '--card-offset': borderWidth * pixelSize + padding,
        backgroundColor: borderColor ? `var(--${borderColor})` : undefined,
      }}
    >
      <div className={styles.content} style={{backgroundColor}}>
        {children}
      </div>
    </Flex>
  );
}
