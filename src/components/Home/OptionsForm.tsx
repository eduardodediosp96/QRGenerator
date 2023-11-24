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

  return (
    <OptionsFormContainer>
      <TextInput
        label="Size"
        onChange={handleChangeForm('size')}
        value={size.toString()}
      />
      <ColorInput
        defaultColor={fgColor}
        label="Color"
        onChange={handleChangeForm('fgColor')}
      />
      <ColorInput
        defaultColor={bgColor}
        label="Background Color"
        onChange={handleChangeForm('bgColor')}
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
