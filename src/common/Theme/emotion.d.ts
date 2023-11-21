import '@emotion/react';

import {
  AnimationsType,
  BreakpointsType,
  ColorsType,
  PaletteType,
  SizingType,
  SpacingType,
  TypographyType,
} from './Theme.types';

declare module '@emotion/react' {
  export interface Theme {
    animations: AnimationsType;
    colors: ColorsType;
    typography: TypographyType;
    palette: PaletteType;
    spacing: SpacingType;
    sizing: SizingType;
    breakpoints: BreakpointsType;
  }
}
