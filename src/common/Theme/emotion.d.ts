import '@emotion/react';

import {
  AnimationsType,
  BreakpointsType,
  PaletteType,
  SizingType,
  SpacingType,
  TypographyType,
} from './Theme.types';

declare module '@emotion/react' {
  export interface Theme {
    animations: AnimationsType;
    typography: TypographyType;
    palette: PaletteType;
    spacing: SpacingType;
    sizing: SizingType;
    breakpoints: BreakpointsType;
  }
}
