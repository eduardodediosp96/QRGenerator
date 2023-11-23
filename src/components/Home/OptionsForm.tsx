import { useState } from 'react';

// @Components
import ColorInput from '@commonComponents/inputs/ColorInput/ColorInput';
import TextInput from '@commonComponents/inputs/TextInput/TextInput';
import FileInput from '@commonComponents/inputs/FileInput/FileInput';

// @Styles
import { OptionsFormContainer } from './Home.styles';

// @Types
import { OptionsFormProps, QRForm } from './Home.types';

// @Utils
import { readFile } from '@utils/utils';

const OptionsForm = ({ qrDetails, setQrDetails }: OptionsFormProps) => {
  const { size, fgColor, bgColor } = qrDetails;
  const [fileError, setFileError] = useState<string>('');

  // Handles changes in the form properties based on the input type
  // Tech Debt: Enhance this mechanism to handle different input types more gracefully
  const handleChangeForm =
    (propertyName: keyof QRForm) =>
    (
      event: React.ChangeEvent<
        HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
      >,
    ) => {
      // Extract the input target and handle different input types accordingly
      const target = event.target as HTMLInputElement;
      setQrDetails((prevDetails) => ({
        ...prevDetails,
        [propertyName]: target.value,
      }));
    };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const file = event.target.files?.[0];
      const fileData = await readFile(file);
      setQrDetails((prevDetails) => ({
        ...prevDetails,
        logoImage: fileData,
      }));
    } catch (error) {
      setFileError(
        (error as { message?: string }).message ?? 'Something went wrong',
      );
    }
  };

  return (
    <OptionsFormContainer>
      <TextInput
        onChange={handleChangeForm('size')}
        value={size.toString()}
      ></TextInput>
      <ColorInput
        onChange={handleChangeForm('fgColor')}
        value={fgColor}
      ></ColorInput>
      <ColorInput
        onChange={handleChangeForm('bgColor')}
        value={bgColor}
      ></ColorInput>
      <FileInput onChange={handleFileChange} error={fileError}></FileInput>
    </OptionsFormContainer>
  );
};

export default OptionsForm;
