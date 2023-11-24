export const readFile = (
  file: File | undefined,
  allowedFileTypes: string[],
): Promise<string> => {
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
        resolve(reader.result as string);
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
