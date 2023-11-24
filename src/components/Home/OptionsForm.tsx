// @Components
import ColorInput from '@commonComponents/inputs/ColorInput/ColorInput';
import TextInput from '@commonComponents/inputs/TextInput/TextInput';
import FileInput from '@commonComponents/inputs/FileInput/FileInput';

// @Styles
import { OptionsFormContainer } from './Home.styles';

// @Types
import { OptionsFormProps, QRForm } from './Home.types';

const OptionsForm = ({
  handleFileChange,
  fileError,
  qrDetails,
  setQrDetails,
}: OptionsFormProps) => {
  const { size, fgColor, bgColor } = qrDetails;

  // TECH DEBT: Fix
  const handleChangeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    const isNumber = /^\d+$/.test(value);
    if (!isNumber && !!value.length) return;
    setQrDetails((prevDetails) => ({
      ...prevDetails,
      size: !!value.length ? Number(value) : undefined,
    }));
  };

  const handleChangeColor =
    (propertyName: keyof QRForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      setQrDetails((prevDetails) => ({
        ...prevDetails,
        [propertyName]: target.value,
      }));
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
        onChange={handleFileChange}
        error={fileError}
      />
    </OptionsFormContainer>
  );
};

export default OptionsForm;
