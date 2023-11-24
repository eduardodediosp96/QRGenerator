// @Types
import {
  CommonInputProps,
  TextInputSize,
} from '@commonComponents/inputs/InputTypes';
import Typography from '@commonComponents/Typography/Typography';
import {
  InputWrapper,
  TextInputContainer,
  TextInputLabel,
  StyledTextInput,
} from '../InputStyles';

export interface StyledTextInputProps {
  hasValue?: boolean;
  size?: TextInputSize;
}

const TextInput = ({
  id,
  error,
  endAdornment,
  label,
  size = TextInputSize.MEDIUM,
  value,
  onBlur,
  onClick,
  onChange,
  onFocus,
  onKeyDown,
  ariaDescribedBy,
  readOnly,
}: CommonInputProps) => {
  const hasValue = !!value?.length;
  return (
    <InputWrapper>
      <TextInputContainer>
        {hasValue && (
          <TextInputLabel htmlFor={id} size={size}>
            <Typography
              variant={size === TextInputSize.LARGE ? 'body3' : 'inputLabel'}
            >
              {label}
            </Typography>
          </TextInputLabel>
        )}
        <StyledTextInput
          hasValue={hasValue}
          id={id}
          placeholder={label}
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
        {endAdornment}
      </TextInputContainer>
      {error && (
        <Typography variant="error" margin="1 0 0 0" as="div">
          {error}
        </Typography>
      )}
    </InputWrapper>
  );
};

export default TextInput;
