import { ProcessedFile } from '@utils/utils';

export interface QRForm {
  size: number | undefined;
  fgColor: string;
  bgColor: string;
  logoFile: ProcessedFile;
}

export type QRCodeOptions = Omit<QRForm, 'logoFile'> & {
  value: string;
  logoImage?: string;
  removeQrCodeBehindLogo: boolean;
};
