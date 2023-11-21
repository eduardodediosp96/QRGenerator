// @Types
import { PaletteType } from './Theme.types';

export const colors = {
  backgroundBlack: '#1E1E1E',
  backgroundWhite: '#EBEAF1',
  primaryBlack: '#1D1E20',
  primaryWhite: '#fff',
  secondaryBlack: '#60646C',
  secondaryWhite: '#A1A1AA',
  accents: ['#F4BE00'],
};

export const palette: Record<'light' | 'dark', PaletteType> = {
  dark: {
    background: colors.backgroundBlack,
    contrastBackground: colors.backgroundWhite,
    contrastText: colors.primaryWhite,
    primary: colors.primaryWhite,
    secondary: colors.secondaryWhite,
    disabled: '#b5b3b3',
    accent: colors.accents[0],
  },
  light: {
    background: colors.backgroundWhite,
    contrastBackground: colors.backgroundBlack,
    contrastText: colors.primaryBlack,
    disabled: '#b5b3b3',
    secondary: colors.secondaryBlack,
    primary: colors.primaryBlack,
    accent: colors.accents[0],
  },
};
