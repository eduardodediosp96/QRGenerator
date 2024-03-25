// @Theme
import { colors, palette } from './Palette';

// @Types
import { ThemeMode } from './Theme.types';

const fontSizes = {
  xsmall: '0.75rem', //12
  small: '0.875rem', // 14
  medium: '1rem', // 16
  standard: '1.063rem', // 17
  large: '1.125rem', // 18
  xlarge: '1.25rem', // 20
  xxlarge: '1.5rem', // 24
  xxxlarge: '1.75rem',
};

// TECH DEBT: Improve typography names
export const getTypography = (themeColor: ThemeMode) => ({
  title: {
    fontSize: fontSizes.xlarge,
    color: palette[themeColor].primary,
  },
  subtitle: {
    fontSize: fontSizes.medium,
    color: palette[themeColor].secondary,
  },
  label: {
    fontSize: fontSizes.small,
    color: colors.primaryBlack,
  },
  contrastLabel: {
    fontSize: fontSizes.small,
    color: palette[themeColor].contrastText,
  },
  accentLabel: {
    fontSize: fontSizes.small,
    color: palette[themeColor].contrastAccent,
  },
  body1: {
    fontSize: fontSizes.xlarge,
    color: palette[themeColor].secondary,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: fontSizes.medium,
    color: palette[themeColor].secondary,
    lineHeight: 1.5,
  },
  body3: {
    fontSize: fontSizes.small,
    color: palette[themeColor].secondary,
    lineHeight: 1.5,
  },
  error: {
    fontSize: fontSizes.small,
    color: colors.error,
  },
  inputLabel: {
    fontSize: fontSizes.xsmall,
    color: palette[themeColor].secondary,
  },
});
