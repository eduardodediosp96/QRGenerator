// @Common components
import Typography from '@commonComponents/Typography/Typography';

// @Types
import {
  CommonInputProps,
  TextInputSize,
} from '@commonComponents/inputs/InputTypes';

// @Styles
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
  maxLength,
}: CommonInputProps) => {
  const hasValue = !!value?.length;
  return (
    <InputWrapper>
      <TextInputContainer>
        <div onClick={onClick}>
          <TextInputLabel htmlFor={id} hasValue={hasValue} size={size}>
            {label}
          </TextInputLabel>
        </div>
        <StyledTextInput
          maxLength={maxLength}
          onClick={onClick}
          hasValue={hasValue}
          id={id}
          value={value}
          onChange={onChange}
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
