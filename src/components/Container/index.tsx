import {
  ComponentPropsWithRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from 'react';
import cn from 'classnames';
import { Color, getColor } from '@/styles';
import Flex, { FlexProps } from '../Flex';
import styles from './Container.module.scss';

export type ContainerProps<T extends ElementType> = {
  contentProps?: Omit<FlexProps<T>, 'children' | 'ref' | 'as'>;
  backgroundColor?: Color;
  fullWidth?: boolean;
  after?: ReactNode;
} & ComponentPropsWithRef<'div'>;

export default function Container<T extends ElementType = 'div'>({
  backgroundColor,
  contentProps,
  fullWidth,
  after,
  ...props
}: ContainerProps<T>) {
  return (
    <Flex
      {...props}
      style={
        {
          ...props.style,
          '--bg': getColor(backgroundColor),
        } as CSSProperties
      }
      className={cn(styles.container, props.className)}
      justify="center"
    >
      <Flex
        {...contentProps}
        className={cn(
          fullWidth && styles.fullWidth,
          contentProps?.className,
          styles.content,
        )}
      >
        {props.children}
      </Flex>
      {after}
    </Flex>
  );
}
