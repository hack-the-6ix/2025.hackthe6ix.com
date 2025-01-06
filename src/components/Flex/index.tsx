import { CSSProperties, ElementType, PolyComponentPropsWithRef } from 'react';
import cn from 'classnames';
import { getSpacing, Spacing } from '@/styles';
import styles from './Flex.module.scss';

export type FlexProps<T extends ElementType> = PolyComponentPropsWithRef<
  T,
  {
    direction?: CSSProperties['flexDirection'];
    justify?: CSSProperties['justifyContent'];
    align?: CSSProperties['alignItems'];
    inline?: boolean;
    wrap?: boolean;
    gap?: Spacing | [Spacing, Spacing];
  }
>;

export default function Flex<T extends ElementType = 'div'>({
  direction,
  justify,
  align,
  inline,
  wrap,
  gap,
  as,
  ...props
}: FlexProps<T>) {
  const Component = as ?? 'div';
  return (
    <Component
      {...props}
      style={
        {
          ...props.style,
          '--flex-gap': [gap].flat().map(getSpacing).join(' '),
        } as CSSProperties
      }
      className={cn(
        inline ? styles.inline : styles.flex,
        styles[`direction--${direction}`],
        styles[`justify--${justify}`],
        styles[`align--${align}`],
        wrap && styles.wrap,
        props.className,
      )}
    />
  );
}
