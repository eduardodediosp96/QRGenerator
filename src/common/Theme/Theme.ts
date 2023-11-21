// @Theme
import { colors, palette } from './Palette';
import { animations } from './Animations';
import { breakpoints } from './Breakpoints';
import { getTypography } from './TypographyVariants';
import { spacing } from './Spacing';
import { sizing } from './Sizing';

// @Types
import { ThemeMode, ThemeType } from './Theme.types';

const getTheme = (colorTheme: ThemeMode): ThemeType => {
  return {
    animations,
    breakpoints,
    colors,
    palette: palette[colorTheme],
    sizing,
    spacing,
    typography: getTypography(colorTheme),
  };
};

export default getTheme;
