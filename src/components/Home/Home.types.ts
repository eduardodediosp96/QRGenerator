export interface QRForm {
  size: number | undefined;
  fgColor: string;
  bgColor: string;
  logoImage: string | undefined;
}

export interface HomeProps {
  qrDetails: QRForm;
  setQrDetails: React.Dispatch<React.SetStateAction<QRForm>>;
}

export interface OptionsFormProps {
  qrDetails: QRForm;
  setQrDetails: React.Dispatch<React.SetStateAction<QRForm>>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileError: string;
}
