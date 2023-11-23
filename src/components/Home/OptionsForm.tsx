// @Components
import ColorInput from '@commonComponents/ColorInput/ColorInput';
import TextInput from '@commonComponents/TextInput/TextInput';
import FileInput from '@commonComponents/FileInput/FileInput';

// @Styles
import { OptionsFormContainer } from './Home.styles';

// @Types
import { OptionsFormProps, QRForm } from './Home.types';

const OptionsForm = ({ qrDetails, setQrDetails }: OptionsFormProps) => {
  const { size, fgColor, bgColor } = qrDetails;

  // Handles changes in the form properties based on the input type
  // TECH DEBT: Enhance this mechanism to handle different input types more gracefully
  const handleChangeForm =
    (propertyName: keyof QRForm) =>
    (
      event: React.ChangeEvent<
        | HTMLInputElement
        | HTMLTextAreaElement
        | HTMLSelectElement
        | HTMLInputElement
      >,
    ) => {
      // Extract the input target and handle different input types accordingly
      const target = event.target as HTMLInputElement;
      setQrDetails((prevDetails) => ({
        ...prevDetails,
        [propertyName]:
          propertyName === 'logoImage'
            ? target.files
              ? target.files[0]
              : undefined
            : target.value,
      }));
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
      <FileInput onChange={handleChangeForm('logoImage')}></FileInput>
    </OptionsFormContainer>
  );
};

export default OptionsForm;
