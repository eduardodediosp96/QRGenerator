// @types
import {
  QRGeneratorStorage,
  StorageCallback,
  TabsArray,
} from './googleServices.types';

export const setStorage = (
  data: QRGeneratorStorage,
  callback?: () => void,
): void => {
  const { storage } = chrome;
  if (!storage) {
    console.log('No storage permissions available.');
    return;
  }

  storage.local?.set(data, () => {
    if (callback) {
      callback();
    }
  });
};

export const getStorage = (
  keys: (keyof QRGeneratorStorage)[],
  callback?: StorageCallback,
): void => {
  const { storage } = chrome;
  if (!storage) {
    console.log('No storage permissions available.');
    return;
  }

  storage.local.get(keys, (result) => {
    if (callback) {
      callback(result as unknown as QRGeneratorStorage);
    }
  });
};

export const getCurrentTabUrl = (callback: (url: string) => void): void => {
  const { tabs } = chrome;
  if (!tabs) {
    console.log('No tabs permissions available.');
    return;
  }

  chrome.tabs.query(
    { active: true, currentWindow: true },
    (tabs: TabsArray) => {
      if (!tabs.length) {
        console.error('Unable to retrieve URL for the current tab.');
        return;
      }

      const { url } = tabs[0];
      callback(url || '');
    },
  );
};
