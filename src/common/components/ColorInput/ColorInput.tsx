import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Breakpoint } from '@theme/Theme.types';
import TextInput from '@commonComponents/TextInput/TextInput';
import { CommonInputProps, TextInputSize } from '@commonComponents/commonTypes';

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

const getColorBoxMeasures = () => ({
  [TextInputSize.SMALL]: '0.75rem',
  [TextInputSize.MEDIUM]: '1.5rem',
  [TextInputSize.LARGE]: '1.75rem',
});

const ColorBox = styled.div<ColorBoxProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  width: ${(props) => getColorBoxMeasures()[props.size]};
  height: ${(props) => getColorBoxMeasures()[props.size]};
  background-color: ${(props) => props.color};
  pointer-events: none;
`;

interface ColorPickerProperties extends CommonInputProps {
  defaultColor?: string;
}

const ColorPicker = ({
  id,
  placeholder,
  ariaDescribedBy,
  defaultColor = '#ffffff',
  size = TextInputSize.MEDIUM,
  onChange = () => {},
}: ColorPickerProperties) => {
  const [color, setColor] = useState<string>(defaultColor);
  const [colorInputOpen, setColorInputOpen] = useState<boolean>(false);
  const colorInputRef = useRef<HTMLInputElement>(null);

  const handleTextInputClick = () => {
    // Give focus to the color component since our goal is to open the palette instead of interacting with the text input directly
    colorInputRef?.current?.click();
    // Set setColor to true to simulate the real action with a native color input, where each click serves to trigger the palette
    setColorInputOpen(true);
  };

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

  return (
    <ColorPickerContainer aria-label="Color Picker">
      <ColorInput
        type="color"
        value={color}
        onChange={handleColorChange}
        ref={colorInputRef}
        aria-label="Select color"
      />
      <TextInput
        id={id}
        size={size}
        value={color}
        onClick={handleTextInputClick}
        onKeyDown={handleTextInputKeydown}
        aria-label="Color value"
        readOnly
        placeholder={placeholder}
        onChange={onChange}
        aria-describedby={ariaDescribedBy}
      />
      <ColorBox
        color={color}
        size={size}
        aria-label="Preview of the selected color"
      />
    </ColorPickerContainer>
  );
};

export default ColorPicker;
