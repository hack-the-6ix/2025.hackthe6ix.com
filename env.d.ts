import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from 'react';

declare module 'react' {
  export type MergeProps<A, B> = Omit<A, keyof B> & B;

  export type PolyComponentPropsWithoutRef<
    T extends ElementType,
    Props,
  > = MergeProps<MergeProps<ComponentPropsWithoutRef<T>, Props>, { as?: T }>;

  export type PolyComponentPropsWithRef<
    T extends ElementType,
    Props,
  > = MergeProps<MergeProps<ComponentPropsWithRef<T>, Props>, { as?: T }>;
}
