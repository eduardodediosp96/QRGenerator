// @Theme
import { breakpoints } from "./Breakpoints";
import { palette } from "./Palette";

// @Types
import { Breakpoint } from "./Theme.types";

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
  
export const getTypography = (themeColor: 'light' | 'dark') => ({
  title1: {
    fontSize: fontSizes.xxxlarge,
    fontWeight: 700,
    color: palette[themeColor].primary,
    [breakpoints.down(Breakpoint.mobileL)]: {
      fontSize: fontSizes.medium,
    },
  },
  subtitle: {
    fontSize: fontSizes.xxlarge,
    color: palette[themeColor].primary,
    [breakpoints.down(Breakpoint.mobileL)]: {
      fontSize: fontSizes.medium,
    },
  },
  label: {
    fontSize: fontSizes.medium,
    fontWeight: 700,
    color: palette[themeColor].primary,
    [breakpoints.down(Breakpoint.mobileL)]: {
      fontSize: fontSizes.xsmall,
    },
  },
  smallLabel: {
    fontSize: fontSizes.small,
    color: palette[themeColor].secondary,
    [breakpoints.down(Breakpoint.mobileL)]: {
      fontSize: fontSizes.xsmall,
    },
  },
  body1: {
    fontSize: fontSizes.large,
    color: palette[themeColor].secondary,
    lineHeight: 1.5,
    [breakpoints.down(Breakpoint.mobileL)]: {
      fontSize: fontSizes.xsmall,
    },
  },
  body2: {
    fontSize: fontSizes.medium,
    color: palette[themeColor].secondary,
    lineHeight: 1.5,
    [breakpoints.down(Breakpoint.mobileL)]: {
      fontSize: fontSizes.xsmall,
    },
  },
});
