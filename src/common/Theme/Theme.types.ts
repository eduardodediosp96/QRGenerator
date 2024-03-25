export type PaletteType = {
  background: string;
  contrastBackground: string;
  contrastText: string;
  disabled: string;
  primary: string;
  accent: string;
  secondary: string;
  contrastAccent: string;
};

export type SizingType = {
  navbar: string;
  navbarMobile: string;
  footer: string;
  footerMobile: string;
};

export type TypographyType = {
  [key: string]: {
    fontSize: string;
    fontWeight?: number;
  };
};

export type SpacingType = (value: number) => string;

export type CssProps = Record<string, string | number>;

export enum Breakpoint {
  mobileS = 'mobileS',
  mobileL = 'mobileL',
  tabletS = 'tabletS',
  tablet = 'tablet',
  laptopS = 'laptopS',
  laptopXL = 'laptopXL',
}

export type BreakpointsType = {
  values: Record<Breakpoint, number>;
  up: (breakpoint: Breakpoint) => string;
  down: (breakpoint: Breakpoint) => string;
  between: (start: Breakpoint, end: Breakpoint) => string;
};

export type ShapeType = Record<number | string, string>;
export type ShadowsType = Record<number | string, string>;
export type ShapesType = Record<string, ShapeType>;

export type AnimationsType = {
  enterCards: string;
  hoverCard: string;
};

export type ColorsType = {
  backgroundBlack: string;
  backgroundWhite: string;
  primaryBlack: string;
  primaryWhite: string;
  secondaryBlack: string;
  secondaryWhite: string;
  accents: string[];
};

export type ThemeType = {
  animations: AnimationsType;
  colors: ColorsType;
  breakpoints: BreakpointsType;
  palette: PaletteType;
  typography: TypographyType;
  shadows: ShadowsType;
  shapes: ShapesType;
  sizing: SizingType;
  spacing: SpacingType;
};

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}
