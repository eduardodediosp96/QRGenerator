import { ChangeEvent, useRef } from 'react';
import styled from '@emotion/styled';

// @Components
import TextInput from '@commonComponents/inputs/TextInput/TextInput';

// @Icons
import { TrashIcon, UploadIcon } from '@icons';

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

interface FileInputProperties extends CommonInputProps {
  accept?: readonly string[];
  maxCharacters?: number;
  fileName?: string;
}

const FileInput = ({
  id,
  error,
  ariaDescribedBy,
  accept = DEFAULT_ALLOWED_FILE_TYPES,
  label,
  fileName = '',
  maxCharacters = 20,
  onChange = () => {},
  size = TextInputSize.MEDIUM,
}: FileInputProperties) => {
  const getDisplayName = () => {
    if (fileName.length > maxCharacters) {
      return `${fileName.substring(0, maxCharacters)}...`;
    }
    return fileName;
  };

  const displayName = getDisplayName();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const joinedAcceptTypes = accept.join(', ');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  const handleTextInputClick = () => {
    fileInputRef?.current?.click();
  };

  const endAdornment = (
    <>
      {!!fileName?.length && (
        <TrashIcon
          onClick={() =>
            handleFileChange({
              target: {
                files: null,
              },
            } as ChangeEvent<HTMLInputElement>)
          }
        />
      )}
      <UploadIcon onClick={handleTextInputClick} />
    </>
  );

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
        value={displayName}
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
