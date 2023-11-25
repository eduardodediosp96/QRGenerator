// @Components
import ColorInput from '@commonComponents/inputs/ColorInput/ColorInput';
import TextInput from '@commonComponents/inputs/TextInput/TextInput';
import FileInput from '@commonComponents/inputs/FileInput/FileInput';

// @Styles
import { OptionsFormContainer } from './Home.styles';

// @Types
import { QRForm } from './Home.types';
import { readFile } from '@utils/utils';
import { useState } from 'react';
import { setStorage } from '@services/google/googleServices';
import { OptionsFormProps } from './OptionsForm.types';

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

      if (!logoFile) {
        return;
      }

      setQrForm((prevDetails) => ({
        ...prevDetails,
        logoFile,
      }));
      setStorage({
        logoName,
        logoUrl: logoFile.url,
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
