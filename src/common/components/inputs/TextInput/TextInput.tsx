import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

// @Types
import {
  CommonInputProps,
  TextInputSize,
} from '@commonComponents/inputs/InputTypes';
import { CssProps } from '@theme/Theme.types';

// Tech Debt: https://github.com/eduardodediosp96/QRGenerator/pull/3
const TextInputSizeCssProps = (
  theme: Theme,
): Record<TextInputSize, CssProps> => ({
  [TextInputSize.SMALL]: {
    height: '2rem',
    padding: theme.spacing(1.5),
    ...theme.typography['body2'],
  },
  [TextInputSize.MEDIUM]: {
    height: '3rem',
    padding: theme.spacing(2),
    ...theme.typography['body2'],
  },
  [TextInputSize.LARGE]: {
    height: '4rem',
    padding: theme.spacing(3),
    ...theme.typography['body1'],
  },
});

export interface StyledTextInputProps {
  size?: TextInputSize;
}

const TextInputStyle = ({
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
    ...TextInputSizeCssProps(theme)[size],
  };
};

const StyledTextInput = styled('input')(TextInputStyle);

const TextInput = ({
  id,
  label,
  placeholder,
  size,
  value,
  onBlur,
  onClick,
  onChange,
  onFocus,
  onKeyDown,
  ariaDescribedBy,
  readOnly,
}: CommonInputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledTextInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        readOnly={readOnly}
        aria-describedby={ariaDescribedBy}
        size={size}
      />
    </>
  );
};

export default TextInput;
