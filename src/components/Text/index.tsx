import { ElementType, PolyComponentPropsWithRef } from 'react';
import { Press_Start_2P, Inconsolata, Jersey_10 } from 'next/font/google';
import cn from 'classnames';
import styles from './Text.module.scss';

const inconsolata = Inconsolata({ subsets: ['latin'] });
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: '400' });
const Jersey10 = Jersey_10({ weight: '400' });
const fonts = { pressStart2P, inconsolata, Jersey10 } as const;

export type TextColor = 'primary' | 'secondary' | 'accent' | 'white' | 'black';

export type TextType =
  | 'display'
  | 'heading-lg'
  | 'heading-sm'
  | 'subtitle-lg'
  | 'subtitle-sm'
  | 'paragraph-lg'
  | 'paragraph-sm'
  | 'label'
  | 'title';

export type TextWeight =
  | 'regular'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black';

export type TextProps<T extends ElementType> = PolyComponentPropsWithRef<
  T,
  {
    textType: TextType;
    textWeight?: TextWeight;
    textColor?: TextColor;
    textFont?: keyof typeof fonts;
  }
>;

export default function Text<T extends ElementType = 'span'>({
  textType = 'paragraph-sm',
  textWeight = 'regular',
  textColor = 'black',
  textFont = 'inconsolata',
  as,
  ...props
}: TextProps<T>) {
  const Component = as ?? 'span';

  return (
    <Component
      {...props}
      className={cn(
        styles[`color--${textColor}`],
        styles[`wght--${textWeight}`],
        styles[`type--${textType}`],
        styles.text,
        fonts[textFont].className,
        props.className,
        'tracking-wider',
      )}
    />
  );
}
