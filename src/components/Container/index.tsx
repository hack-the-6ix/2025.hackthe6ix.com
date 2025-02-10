import { ElementType, ReactNode } from 'react';
import cn from 'classnames';
import Flex, { FlexProps } from '../Flex';
import styles from './Container.module.scss';

export type ContainerProps<T extends ElementType> = {
  contentProps?: Omit<FlexProps<'div'>, 'children' | 'ref' | 'as'>;
  fullWidth?: boolean;
  after?: ReactNode;
} & FlexProps<T>;

export default function Container({
  contentProps,
  fullWidth,
  after,
  ...props
}: ContainerProps<ElementType>) {
  return (
    <Flex
      {...props}
      className={cn(styles.container, props.className)}
      as={props.as ?? 'div'}
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
