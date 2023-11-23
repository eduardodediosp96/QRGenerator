export interface QRForm {
  size: number;
  fgColor: string;
  bgColor: string;
  logoImage: File | undefined;
}

export interface OptionsFormProps {
  qrDetails: QRForm;
  setQrDetails: React.Dispatch<React.SetStateAction<QRForm>>;
}
