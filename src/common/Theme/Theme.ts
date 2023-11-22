// @Theme
import { colors, palette } from './Palette';
import { animations } from './Animations';
import { breakpoints } from './Breakpoints';
import { getTypography } from './TypographyVariants';
import { shadows } from './Shadows';
import { shapes } from './Shapes';
import { sizing } from './Sizing';
import { spacing } from './Spacing';

// @Types
import { ThemeMode, ThemeType } from './Theme.types';

const getTheme = (colorTheme: ThemeMode): ThemeType => {
  return {
    animations,
    breakpoints,
    colors,
    palette: palette[colorTheme],
    shadows,
    shapes,
    sizing,
    spacing,
    typography: getTypography(colorTheme),
  };
};

export default getTheme;
