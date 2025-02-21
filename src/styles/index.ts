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

const colorTags = [
  'neutral',
  'primary',
  'secondary',
  'blue',
  'success',
  'warning',
  'error',
  'shades',
  'randoms',
] as const;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colorLevels = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
type ColorTags = (typeof colorTags)[number];
type ColorLevels = (typeof colorLevels)[number];
export type Color =
  | `${Exclude<ColorTags, 'shade'>}-${ColorLevels}`
  | `${Extract<ColorTags, 'shade'>}-${0 | 100}`
  | Exclude<ColorTags, 'shade' | 'blue'>
  | 'black'
  | 'white';

export function getSpacing(spacing?: Spacing) {
  if (!spacing) return undefined;
  return `var(--${spacing})`;
}

// Very loose check
export function isColor(color: string): color is Color {
  if (['black', 'white'].includes(color)) return true;
  return colorTags.includes(color.split('-')[0] as ColorTags);
}
