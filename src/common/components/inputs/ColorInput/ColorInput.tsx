import { useRef, useState } from 'react';
import styled from '@emotion/styled';

// @Components
import TextInput from '@commonComponents/inputs/TextInput/TextInput';

// @Styles
import { getIconMeasures } from '../InputStyles';

// @Theme
import { Breakpoint } from '@theme/Theme.types';

// @Types
import {
  CommonInputProps,
  TextInputSize,
} from '@commonComponents/inputs/InputTypes';

const ALLOWED_KEYS = ['Enter', 'Escape'];

interface ColorBoxProps {
  color: string;
  size: TextInputSize;
}

const ColorPickerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// Tech Debt: https://github.com/eduardodediosp96/QRGenerator/pull/3
const ColorInput = styled.input`
  position: absolute;
  appearance: none;
  visibility: hidden;
  top: 2.5rem;
  right: 11rem;

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    top: 2rem;
    right: unset;
    left: 0.3rem;
  }
`;

const ColorBox = styled.div<ColorBoxProps>`
  width: ${(props) => getIconMeasures[props.size]};
  height: ${(props) => getIconMeasures[props.size]};
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

interface ColorPickerProperties extends CommonInputProps {
  color: string;
  defaultColor?: string;
  setColor: (color: string) => void;
}

const ColorPicker = ({
  ariaDescribedBy,
  color,
  defaultColor = '#fff',
  error,
  id,
  label,
  onChange = () => {},
  setColor,
  size = TextInputSize.MEDIUM,
}: ColorPickerProperties) => {
  const [colorInputOpen, setColorInputOpen] = useState<boolean>(false);
  const colorInputRef = useRef<HTMLInputElement>(null);

  const currentColor = color || defaultColor;

  const handleTextInputClick = () => {
    if (!colorInputOpen) {
      // Give focus to the color component since our goal is to open the palette instead of interacting with the text input directly
      colorInputRef?.current?.click();
      // Set setColor to true to simulate the real action with a native color input, where each click serves to trigger the palette
      setColorInputOpen(true);
    } else {
      colorInputRef?.current?.blur();
      // Set setColor to true to simulate the real action with a native color input, where each click serves to trigger the palette
      setColorInputOpen(false);
    }
  };

  // Tech Debt: This function is likely duplicated in various other input components. Consider refactoring it as a shared utility function,
  // such as 'handleTextInputKeydown', and reuse it across components like ColorInput.
  const handleTextInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key || undefined;
    if (!key || !ALLOWED_KEYS.includes(key)) {
      return;
    }

    if (key === 'Enter') {
      colorInputRef?.current?.click();
      // Toggle setColor to simulate opening and closing the palette; this behavior is only present when using the keyboard
      setColorInputOpen(!colorInputOpen);
    }

    if (key === 'Escape' && colorInputOpen) {
      // Set setColor to false to simulate closing the palette, but only if our React component considers it open
      setColorInputOpen(false);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    onChange?.(e);
  };

  const endAdornment = (
    <ColorBox
      onClick={handleTextInputClick}
      color={currentColor}
      size={size}
      aria-label="Preview of the selected color"
    />
  );

  return (
    <ColorPickerContainer aria-label="Color Picker">
      <ColorInput
        type="color"
        value={currentColor}
        onChange={handleColorChange}
        ref={colorInputRef}
        aria-label="Select color"
      />
      <TextInput
        id={id}
        error={error}
        endAdornment={endAdornment}
        label={label}
        size={size}
        value={currentColor}
        onClick={handleTextInputClick}
        onKeyDown={handleTextInputKeydown}
        aria-label="Color value"
        readOnly
        onChange={onChange}
        aria-describedby={ariaDescribedBy}
      />
    </ColorPickerContainer>
  );
};

export default ColorPicker;
