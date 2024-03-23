import { ProcessedFile } from '@utils/utils';

export interface QRForm {
  size: number | undefined;
  fgColor: string;
  bgColor: string;
  logoFile: ProcessedFile | null;
}

// QRCode is a type created to handle QR Code Component from react-qrcode-logo
export type QRCodeOptions = Omit<QRForm, 'logoFile'> & {
  value: string;
  logoImage?: string;
  removeQrCodeBehindLogo: boolean;
};
