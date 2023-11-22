import { TextInputSize } from '@commonComponents/TextInput/TextInput.d';
import { OptionsFormContainer } from './Home.styles';
import ColorInput from '@commonComponents/ColorInput/ColorInput';
import TextInput from '@commonComponents/TextInput/TextInput';
import FileInput from '@commonComponents/FileInput/FileInput';
import { useState } from 'react';

interface QRForm {
  size: string;
  color: string;
  background: string;
  file: File | undefined;
}

const OptionsForm = () => {
  const [form, setForm] = useState<QRForm>({
    size: '0px',
    color: '',
    background: '',
    file: undefined,
  });

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
      setForm((prevForm) => ({
        ...prevForm,
        [propertyName]:
          propertyName === 'file'
            ? target.files
              ? target.files[0]
              : undefined
            : target.value,
      }));
    };

  return (
    <OptionsFormContainer>
      <TextInput onChange={handleChangeForm('size')}></TextInput>
      <ColorInput onChange={handleChangeForm('color')}></ColorInput>
      <ColorInput onChange={handleChangeForm('background')}></ColorInput>
      <FileInput onChange={handleChangeForm('file')}></FileInput>
      <div>size: {form.size}</div>
      <div>color: {form.color}</div>
      <div>background: {form.background}</div>
      <div>fileName: {form.file?.name || undefined}</div>
    </OptionsFormContainer>
  );
};

export default OptionsForm;
