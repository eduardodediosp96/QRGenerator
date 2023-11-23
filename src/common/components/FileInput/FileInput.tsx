import { ChangeEvent, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Breakpoint } from '@theme/Theme.types';
import TextInput from '@commonComponents/TextInput/TextInput';
import { UploadIcon } from '@icons';
import { CommonInputProps, TextInputSize } from '@commonComponents/commonTypes';
import Typography from '@commonComponents/Typography/Typography';

const DEFAULT_ALLOWED_FILE_TYPES = ['jpg', 'png', 'svg', 'pdf'];

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

const getColorBoxMeasures = () => ({
  [TextInputSize.SMALL]: '0.75rem',
  [TextInputSize.MEDIUM]: '1.5rem',
  [TextInputSize.LARGE]: '1.75rem',
});

interface FileInputProps {
  size: TextInputSize;
}

const StyledUploadIcon = styled(UploadIcon)<FileInputProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  width: ${(props) => getColorBoxMeasures()[props.size]};
  height: ${(props) => getColorBoxMeasures()[props.size]};
  pointer-events: none;
`;

interface ColorPickerProperties extends CommonInputProps {
  accept?: readonly string[];
  size?: TextInputSize;
}

const FileInput = ({
  id,
  placeholder,
  ariaDescribedBy,
  accept = DEFAULT_ALLOWED_FILE_TYPES,
  error,
  onChange = () => {},
  size = TextInputSize.MEDIUM,
}: ColorPickerProperties) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  //   const [fileError, setFileError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const joinedAcceptTypes = accept.join(',');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // Check if a file is selected
    if (!file) {
      setSelectedFile(null);
      //   setFileError('Please select a file.');
      return;
    }

    // Set selected file
    setSelectedFile(file);
    // setFileError('');
    onChange(event);
  };

  const handleTextInputClick = () => {
    fileInputRef?.current?.click();
  };

  return (
    <div>
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
      {error && (
        <Typography variant="error" margin="1 0" as="div">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default FileInput;
