// @Tech Debt: move this interface outside the utils if it's necessary
export interface ProcessedFile {
  name?: string;
  url?: string;
  file?: File | undefined;
}

export const readFile = (
  file: File | undefined,
  allowedFileTypes: string[],
): Promise<ProcessedFile> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('No file provided.'));
      return;
    }

    if (!allowedFileTypes.includes(file.type)) {
      reject(new Error('Invalid file type.'));
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        resolve({
          name: file.name || '',
          url: reader.result as string,
          file: file,
        });
      } else {
        reject(new Error('Failed to read the file.'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Error reading the file.'));
    };

    reader.readAsDataURL(file);
  });
};
