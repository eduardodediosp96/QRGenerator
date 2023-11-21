// @Theme
import { colors, palette } from './Palette';
import { animations } from './Animations';
import { breakpoints } from './Breakpoints';
import { getTypography } from './TypographyVariants';
import { spacing } from './Spacing';
import { sizing } from './Sizing';

// @Types
import { ThemeType } from './Theme.types';

const getTheme = (colorTheme: 'dark' | 'light'): ThemeType => {
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
