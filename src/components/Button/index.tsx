import { ElementType, PolyComponentPropsWithRef } from 'react';
import cn from 'classnames';
import { Color } from '@/styles';
import { getClipPath } from '@/styles/pixel';
import Flex from '../Flex';
import styles from './Button.module.scss';

export type ButtonProps<T extends ElementType> = PolyComponentPropsWithRef<
  T,
  {
    // For doing the pixel stuff
    pixelSize?: number;
    radius?: number;
    borderWidth?: number;
    borderColor?: Color;
    contentColor?: Color;
    buttonPadding?: number;
  }
>;

export default function Button<T extends ElementType = 'div'>({
  pixelSize = 4,
  borderWidth = 1,
  radius = 1,
  borderColor,
  contentColor,
  buttonPadding = 0,
  children,
  as,
  ...props
}: ButtonProps<T>) {
  const level = 500;
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
        '--button-outer': outerClipPath,
        '--button-inner': innerClipPath,
        '--button-offset': borderWidth * pixelSize + buttonPadding,
        '--content-color': `var(--${contentColor}-${level})`,
        '--content-color-hover': `var(--${contentColor}-${level + 100})`,
        '--content-color-active': `var(--${contentColor}-${level + 200})`,

        backgroundColor: borderColor ? `var(--${borderColor})` : undefined,
      }}
    >
      <button className={styles.content}>{children}</button>
    </Flex>
  );
}
