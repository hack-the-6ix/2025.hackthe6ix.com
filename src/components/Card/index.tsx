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
    borderLeftColor?: Color;
    borderRightColor?: Color;
    borderTopColor?: Color;
    borderBottomColor?: Color;
    onHover?: string;
  }
>;

export default function Card<T extends ElementType = 'div'>({
  pixelSize = 4,
  borderWidth = 1,
  radius = 1,
  borderColor,
  padding = 4,
  backgroundColor = '#fff',
  borderLeftColor,
  borderRightColor,
  borderTopColor,
  borderBottomColor,
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
      <div
        className={cn(props.className, styles.content)}
        style={{ '--card-inner-color': backgroundColor } as React.CSSProperties}
      >
        <div
          className={styles.borderTop}
          style={{
            backgroundColor:
              borderTopColor ? `var(--${borderTopColor})` : undefined,
          }}
        />
        <div
          className={styles.borderRight}
          style={{
            backgroundColor:
              borderRightColor ? `var(--${borderRightColor})` : undefined,
          }}
        />
        <div
          className={styles.borderBottom}
          style={{
            backgroundColor:
              borderBottomColor ? `var(--${borderBottomColor})` : undefined,
          }}
        />
        <div
          className={styles.borderLeft}
          style={{
            backgroundColor:
              borderLeftColor ? `var(--${borderLeftColor})` : undefined,
          }}
        />
        <div
          className={styles.content}
          style={
            { '--card-inner-color': backgroundColor } as React.CSSProperties
          }
        >
          {children}
        </div>
      </div>
    </Flex>
  );
}
