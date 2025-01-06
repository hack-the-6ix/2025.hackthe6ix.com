import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from 'react';

declare module 'react' {
  export type PolyComponentPropsWithoutRef<T extends ElementType, Props> = Omit<
    ComponentPropsWithoutRef<T>,
    keyof Props
  > &
    Props & {
      as?: T;
    };

  export type PolyComponentPropsWithRef<T extends ElementType, Props> = Omit<
    ComponentPropsWithRef<T>,
    keyof Props
  > &
    Props & {
      as?: T;
    };
}
