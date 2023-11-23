import { ChangeEvent, FocusEvent, MouseEvent, KeyboardEvent } from 'react';

// Tech Debt:https://github.com/eduardodediosp96/QRGenerator/pull/3
export enum TextInputSize {
  SMALL,
  MEDIUM,
  LARGE,
}

export interface CommonInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  ariaDescribedBy?: string;
  size?: TextInputSize;
  readOnly?: boolean;
  error?: string;
}
