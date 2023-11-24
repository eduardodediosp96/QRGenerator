import styled from '@emotion/styled';
import { CssProps } from '@theme/Theme.types';
import { Theme, useTheme } from '@emotion/react';
import { StyledTextInputProps } from './TextInput/TextInput';

// @Types
import { TextInputSize } from './InputTypes';

export const TextInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TextInputLabel = styled.label<{ size: TextInputSize }>`
  position: absolute;
  top: ${({ size }) => (size === TextInputSize.LARGE ? '0.5rem' : '0.2rem')};
  left: 0.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`;

export const getEndAdornmentStyles = (size: TextInputSize, color?: string) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '1rem',
  width: getEndAdornmentMeasures[size],
  height: getEndAdornmentMeasures[size],
  backgroundColor: !!color ? color : 'auto',
  pointerEvents: 'none',
});

// Tech Debt: https://github.com/eduardodediosp96/QRGenerator/pull/3
export const TextInputSizeCssProps = (
  hasValue: boolean,
  theme: Theme,
): Record<TextInputSize, CssProps> => ({
  [TextInputSize.SMALL]: {
    height: '2.6rem',
    padding: theme.spacing(2),
    paddingTop: hasValue ? theme.spacing(3.5) : theme.spacing(2),
    paddingBottom: hasValue ? theme.spacing(1.3) : theme.spacing(2),
    ...theme.typography['body3'],
  },
  [TextInputSize.MEDIUM]: {
    height: '3rem',
    padding: theme.spacing(2),
    paddingTop: hasValue ? theme.spacing(4) : theme.spacing(2),
    ...theme.typography['body2'],
  },
  [TextInputSize.LARGE]: {
    height: '4rem',
    padding: theme.spacing(2),
    paddingTop: hasValue ? theme.spacing(4.5) : theme.spacing(2),
    ...theme.typography['body1'],
  },
});

export const TextInputStyle = ({
  hasValue = false,
  size = TextInputSize.MEDIUM,
}: StyledTextInputProps) => {
  const theme = useTheme();
  return {
    width: '100%',
    border: `1px solid ${theme.palette.contrastBackground}`,
    background: theme.palette.background,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shapes.rounded[1],
    cursor: 'pointer',
    ...TextInputSizeCssProps(hasValue, theme)[size],
  };
};

export const StyledTextInput = styled('input')(TextInputStyle);

export const getEndAdornmentMeasures = {
  [TextInputSize.SMALL]: '0.75rem',
  [TextInputSize.MEDIUM]: '1.5rem',
  [TextInputSize.LARGE]: '1.75rem',
};