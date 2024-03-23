import { useState } from 'react';

// @Components
import ColorInput from '@commonComponents/inputs/ColorInput/ColorInput';
import TextInput from '@commonComponents/inputs/TextInput/TextInput';
import FileInput from '@commonComponents/inputs/FileInput/FileInput';

// @Services
import { setStorage } from '@services/google/googleServices';

// @Styles
import { OptionsFormContainer } from './Home.styles';

// @Types
import { OptionsFormProps } from './OptionsForm.types';
import { QRForm } from './Home.types';

// @Utils
import { readFile } from '@utils/utils';

const OptionsForm = ({ qrForm, setQrForm }: OptionsFormProps) => {
  const [fileError, setFileError] = useState('');
  const { size, fgColor, bgColor, logoFile } = qrForm;

  // TECH DEBT: Fix
  const handleChangeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    const isNumber = /^\d+$/.test(value);

    if (!isNumber && !!value.length) {
      return;
    }

    const size = value.length ? Number(value) : undefined;
    setQrForm((prevDetails) => ({
      ...prevDetails,
      size,
    }));

    setStorage({ size });
  };

  const handleChangeColor =
    (propertyName: keyof QRForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;

      setQrForm((prevDetails) => ({
        ...prevDetails,
        [propertyName]: target.value,
      }));

      setStorage({
        [propertyName]: target.value,
      });
    };

  // Tech Debt: we should move the way how we read the file in the utils section
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const file = event.target.files?.[0];
      const logoName = file?.name || '';
      const logoFile = await readFile(file, [
        'image/jpeg',
        'image/png',
        'image/svg+xml',
      ]);

      setQrForm((prevDetails) => ({
        ...prevDetails,
        logoFile,
      }));
      setStorage({
        logoName,
        logoUrl: logoFile?.url,
      });
      setFileError('');
    } catch (error) {
      setFileError(
        (error as { message?: string }).message ?? 'Something went wrong',
      );
    }
  };

  return (
    <OptionsFormContainer>
      <TextInput
        label="Size"
        onChange={handleChangeSize}
        value={size?.toString()}
        maxLength={4}
      />
      <ColorInput
        defaultColor={fgColor}
        label="Color"
        onChange={handleChangeColor('fgColor')}
      />
      <ColorInput
        defaultColor={bgColor}
        label="Background Color"
        onChange={handleChangeColor('bgColor')}
      />
      <FileInput
        label="Logo Image"
        fileName={logoFile?.name || ''}
        onChange={handleFileChange}
        error={fileError}
      />
    </OptionsFormContainer>
  );
};

export default OptionsForm;
