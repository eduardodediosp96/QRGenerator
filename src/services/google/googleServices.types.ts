import { QRForm } from '@components/Home/Home.types';
import { ThemeMode } from '@theme/Theme.types';

interface Tab {
  active: boolean;
  audible?: boolean;
  autoDiscardable?: boolean;
  discarded?: boolean;
  favIconUrl?: string;
  height?: number;
  highlighted?: boolean;
  id?: number;
  incognito?: boolean;
  index?: number;
  mutedInfo?: chrome.tabs.MutedInfo;
  openerTabId?: number;
  pinned?: boolean;
  selected?: boolean;
  status?: string;
  title?: string;
  url?: string;
  width?: number;
  windowId?: number;
}

export type QRGeneratorStorage = Partial<Omit<QRForm, 'logoFile'>> & {
  logoUrl?: string;
  logoName?: string;
  theme?: ThemeMode;
};

export type TabsArray = Tab[];
export type StorageCallback = (result: QRGeneratorStorage) => void;
