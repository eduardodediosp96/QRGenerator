import { QRForm } from './Home.types';

export interface OptionsFormProps {
  qrForm: QRForm;
  setQrForm: React.Dispatch<React.SetStateAction<QRForm>>;
}
