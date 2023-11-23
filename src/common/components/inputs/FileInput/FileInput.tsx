import { ChangeEvent, useRef, useState } from 'react';
import styled from '@emotion/styled';

// @Components
import {
  CommonInputProps,
  TextInputSize,
} from '@commonComponents/InputTypes.d';
import TextInput from '@commonComponents/inputs/TextInput/TextInput';

// @Icons
import { UploadIcon } from '@icons';

// @Theme
import { Breakpoint } from '@theme/Theme.types';

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

// Tech Debt: https://github.com/eduardodediosp96/QRGenerator/pull/3
const getUploadIconMeasures = {
  [TextInputSize.SMALL]: '0.75rem',
  [TextInputSize.MEDIUM]: '1.5rem',
  [TextInputSize.LARGE]: '1.75rem',
};

interface FileInputProps {
  size: TextInputSize;
}

const StyledUploadIcon = styled(UploadIcon)<FileInputProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  width: ${(props) => getUploadIconMeasures[props.size]};
  height: ${(props) => getUploadIconMeasures[props.size]};
  pointer-events: none;
`;

interface FileInputProperties extends CommonInputProps {
  accept?: readonly string[];
}

const FileInput = ({
  id,
  placeholder,
  ariaDescribedBy,
  accept = DEFAULT_ALLOWED_FILE_TYPES,
  onChange = () => {},
  size = TextInputSize.MEDIUM,
}: FileInputProperties) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // Tech Debt: We should implement error handling for this file input in case the files are loaded incorrectly.
  // const [fileError, setFileError] = useState<string>('');
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
        size={size}
        value={selectedFile?.name ?? ''}
        onClick={handleTextInputClick}
        aria-label="File name"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        aria-describedby={ariaDescribedBy}
        readOnly
      />
      <StyledUploadIcon size={size} />
    </FileInputContainer>
  );
};

export default FileInput;
