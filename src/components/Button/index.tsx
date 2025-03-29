import { ElementType, PolyComponentPropsWithRef } from 'react';
import cn from 'classnames';
import { Color } from '@/styles';
import Card from '../Card';
import styles from './Button.module.scss';

export type ButtonProps<T extends ElementType> = PolyComponentPropsWithRef<
  T,
  {
    pixelSize?: number;
    radius?: number;
    borderWidth?: number;
    borderColor?: Color;
    contentColor?: Color;
    buttonPadding?: number;
    backgroundColor?: string;
    buttonDarker?: boolean;

  }
>;

export default function Button<T extends ElementType = 'button'>({
  pixelSize = 4,
  radius = 1,
  borderWidth = 1,
  borderColor,
  contentColor,
  buttonPadding = 0,
  children,
  buttonDarker,
  as,
  ...props
}: ButtonProps<T>) {
  const level = buttonDarker ? 700 : 500;
  return (
    <Card
      {...props}
      className={cn(props.className, styles.content)}
      as={as as 'button'}
      pixelSize={pixelSize as number}
      borderWidth={borderWidth as number}
      radius={radius as number}
      borderColor={borderColor as Color}
      padding={buttonPadding as number}
      backgroundColor={'#ffffff00'}
      style={{
        ...props.style,
        '--content-color': `var(--${contentColor}-${level})`,
        '--content-color-hover': `var(--${contentColor}-${level + 100})`,
        '--content-color-active': `var(--${contentColor}-${level + 200})`,
      }}
    >
      <div>{children}</div>
    </Card>
  );
}
