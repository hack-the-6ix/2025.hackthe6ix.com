export type Spacing =
  | '2x-sm'
  | 'x-sm'
  | 'sm'
  | 'm'
  | 'big'
  | 'x-big'
  | '2x-big'
  | '3x-big'
  | '4x-big'
  | 'lg'
  | 'x-lg'
  | '2x-lg'
  | '3x-lg'
  | 'huge'
  | 'x-huge';

export type Color = string;

export function getSpacing(spacing?: Spacing) {
  if (!spacing) return undefined;
  return `var(--${spacing})`;
}

export function getColor(color?: Color) {
  if (!color) return undefined;
  return `var(--${color})`;
}
