// @Types
import { PaletteType, ThemeMode } from './Theme.types';

export const colors = {
  backgroundBlack: '#101418',
  backgroundWhite: '#f7f7f7',
  primaryBlack: '#1D1E20',
  primaryWhite: '#fff',
  secondaryBlack: '#60646C',
  secondaryWhite: '#A1A1AA',
  accents: ['#F4BE00'],
  error: '#CB2024',
};

export const palette: Record<ThemeMode, PaletteType> = {
  dark: {
    background: colors.backgroundBlack,
    contrastBackground: colors.backgroundWhite,
    contrastText: colors.primaryWhite,
    primary: colors.primaryWhite,
    secondary: colors.secondaryWhite,
    disabled: '#b5b3b3',
    accent: colors.accents[0],
    contrastAccent: colors.accents[0],
  },
  light: {
    background: colors.backgroundWhite,
    contrastBackground: colors.backgroundBlack,
    contrastText: colors.primaryBlack,
    disabled: '#b5b3b3',
    secondary: colors.secondaryBlack,
    primary: colors.primaryBlack,
    accent: colors.accents[0],
    contrastAccent: colors.primaryBlack,
  },
};
