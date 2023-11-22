import '@emotion/react';

import {
  AnimationsType,
  BreakpointsType,
  ColorsType,
  PaletteType,
  ShadowsType,
  ShapesType,
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
    shadows: ShadowsType;
    shapes: ShapesType;
    sizing: SizingType;
    spacing: SpacingType;
    breakpoints: BreakpointsType;
  }
}
