export interface QRForm {
  size: number;
  fgColor: string;
  bgColor: string;
  logoImage: string | undefined;
}

export interface OptionsFormProps {
  qrDetails: QRForm;
  setQrDetails: React.Dispatch<React.SetStateAction<QRForm>>;
}
