import styled from '@emotion/styled';
import { Theme, useTheme } from '@emotion/react';

// @Components
import { StyledTextInputProps } from './TextInput/TextInput';

// @Types
import { TextInputSize } from './InputTypes';
import { CssProps } from '@theme/Theme.types';

export const TextInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputLabelCssProps = (
  hasValue: boolean,
  theme: Theme,
): Record<TextInputSize, CssProps> => ({
  [TextInputSize.SMALL]: {
    transform: !hasValue ? 'translateY(0.75rem)' : '',
    top: '0.3rem',
    ...theme.typography[hasValue ? 'inputLabel' : 'body3'],
  },
  [TextInputSize.MEDIUM]: {
    transform: !hasValue ? 'translateY(0.9rem)' : '',
    top: '0.4rem',
    ...theme.typography[hasValue ? 'inputLabel' : 'body2'],
  },
  [TextInputSize.LARGE]: {
    transform: !hasValue ? 'translateY(1.25rem)' : '',
    top: '0.5rem',
    ...theme.typography[hasValue ? 'body3' : 'body1'],
  },
});

export const TextInputLabel = styled.label<{
  hasValue: boolean;
  size: TextInputSize;
}>`
  top: ${({ hasValue, size, theme }) =>
    hasValue && InputLabelCssProps(hasValue, theme)[size].top};
  color: ${({ hasValue, size, theme }) =>
    InputLabelCssProps(hasValue, theme)[size].color};
  position: absolute;
  left: 1.1rem;
  transform: ${({ hasValue, size, theme }) =>
    InputLabelCssProps(hasValue, theme)[size].transform};
  transition: transform 0.2s ease-in-out;
  font-size: ${({ hasValue, size, theme }) =>
    InputLabelCssProps(hasValue, theme)[size].fontSize};
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`;

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

export const getIconMeasures = {
  [TextInputSize.SMALL]: '1.25rem',
  [TextInputSize.MEDIUM]: '1.5rem',
  [TextInputSize.LARGE]: '1.75rem',
};
