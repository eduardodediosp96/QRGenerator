import { ChangeEvent, useRef, useState } from 'react';
import styled from '@emotion/styled';

// @Components
import TextInput from '@commonComponents/inputs/TextInput/TextInput';

// @Icons
import { UploadIcon } from '@icons';

// @Styles
import { getEndAdornmentMeasures } from '../InputStyles';

// @Theme
import { Breakpoint } from '@theme/Theme.types';

// @Types
import {
  CommonInputProps,
  TextInputSize,
} from '@commonComponents/inputs/InputTypes';

const DEFAULT_ALLOWED_FILE_TYPES = ['jpg', 'png', 'svg'];
const FileInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledFileInput = styled.input`
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

interface FileInputProps {
  size: TextInputSize;
}

const StyledUploadIcon = styled(UploadIcon)<FileInputProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  width: ${(props) => getEndAdornmentMeasures[props.size]};
  height: ${(props) => getEndAdornmentMeasures[props.size]};
  pointer-events: none;
`;

interface FileInputProperties extends CommonInputProps {
  accept?: readonly string[];
}

const FileInput = ({
  id,
  error,
  ariaDescribedBy,
  accept = DEFAULT_ALLOWED_FILE_TYPES,
  label,
  onChange = () => {},
  size = TextInputSize.MEDIUM,
}: FileInputProperties) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const joinedAcceptTypes = accept.join(',');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    onChange(event);
  };

  const handleTextInputClick = () => {
    fileInputRef?.current?.click();
  };

  const endAdornment = <StyledUploadIcon size={size} />;

  return (
    <FileInputContainer aria-label="File Picker">
      <StyledFileInput
        type="file"
        ref={fileInputRef}
        id="fileInput"
        onChange={handleFileChange}
        accept={joinedAcceptTypes}
      />
      <TextInput
        error={error}
        size={size}
        value={selectedFile?.name ?? ''}
        onClick={handleTextInputClick}
        label={label}
        aria-label="File name"
        id={id}
        onChange={onChange}
        endAdornment={endAdornment}
        aria-describedby={ariaDescribedBy}
        readOnly
      />
    </FileInputContainer>
  );
};

export default FileInput;
