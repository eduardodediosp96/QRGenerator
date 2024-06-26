import { useEffect, useState } from 'react';

// @Components
import { QRCode } from 'react-qrcode-logo';
import OptionsForm from './OptionsForm';
import Typography from '@commonComponents/Typography/Typography';

// @Icons
import { ChevronIcon, CopyIcon, DownloadIcon, ResetIcon } from '@icons';

// @Services
import {
  getCurrentTabUrl,
  getStorage,
  setStorage,
} from '@services/google/googleServices';

// @Styles
import { Button, TextButton } from '@styles/Styles';
import {
  ButtonsContainer,
  HomeContainer,
  MoreOptionsLabel,
  QRContainer,
} from './Home.styles';

// @Types
import { TextInputSize } from '@commonComponents/inputs/InputTypes';
import { QRCodeOptions, QRForm } from './Home.types';
import { QRGeneratorStorage } from '@services/google/googleServices.types';

const defaultQrForm: QRForm = {
  size: 200,
  fgColor: '#000',
  bgColor: '#fff',
  logoFile: {},
};

const Home = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [qrForm, setQrForm] = useState<QRForm>(defaultQrForm);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getCurrentTabUrl((url) => setCurrentUrl(url || ''));
    getStorage(
      ['size', 'fgColor', 'bgColor', 'logoUrl', 'logoName'],
      setDataFromStorageToForm,
    );
  }, []);

  const handleShowMoreOptions = () => setShowMoreOptions((prev) => !prev);

  // We use document.getElementById instead of useRef because the library doesn't allow direct referencing
  const getCanvas = (): HTMLCanvasElement | null =>
    document.getElementById('qr-code') as HTMLCanvasElement;

  const setDataFromStorageToForm = (result: QRGeneratorStorage) => {
    const { logoUrl: url, logoName: name, ...resultProps } = result;
    const qrFormFromStorage = {
      ...qrForm,
      ...resultProps,
      logoFile: { url, name },
    };
    setQrForm(qrFormFromStorage);
  };

  const downloadCode = () => {
    const canvas = getCanvas();
    if (canvas) {
      const pngUrl: string = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');

      const downloadLink: HTMLAnchorElement = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `site-qr.png`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const copyToClipboard = () => {
    const canvas = getCanvas();
    if (canvas) {
      const img = new Image();
      const pngUrl: string = canvas.toDataURL('image/png');
      img.src = pngUrl;

      // Once the image is loaded, copy it to the clipboard
      img.onload = () => {
        fetch(pngUrl)
          .then((response) => response.blob())
          .then((blob) => new ClipboardItem({ 'image/png': blob }))
          .then((clipboardItem) => navigator.clipboard.write([clipboardItem]))
          .then(() => {
            setMessage('QR copied to clipboard!');
          })
          .catch(() => {
            setMessage('Error. Try again.');
          })
          .finally(() => {
            // Clear message after 3 seconds
            setTimeout(() => setMessage(''), 3000);
          });
      };
    }
  };

  const getQRCodeOptions = (): QRCodeOptions => {
    const { logoFile, ...formOptionsProps } = qrForm;
    const logoImage = logoFile?.url;

    return {
      ...formOptionsProps,
      logoImage,
      value: currentUrl,
      removeQrCodeBehindLogo: true,
    };
  };

  const handleReset = () => {
    setStorage({ ...defaultQrForm, logoName: '', logoUrl: '' });
    setQrForm(defaultQrForm);
  };

  return (
    <HomeContainer>
      <Typography variant="inputLabel" margin="0">
        {`${currentUrl.substring(0, 30)}...`}
      </Typography>
      <QRContainer>
        <QRCode id="qr-code" {...getQRCodeOptions()} />
      </QRContainer>
      <MoreOptionsLabel
        rotate={!showMoreOptions}
        onClick={handleShowMoreOptions}
      >
        <Typography variant="body3" margin="0">
          {showMoreOptions ? 'Hide options' : 'Show more options'}
        </Typography>
        <ChevronIcon />
      </MoreOptionsLabel>
      {showMoreOptions && <OptionsForm qrForm={qrForm} setQrForm={setQrForm} />}
      <ButtonsContainer>
        <Button onClick={downloadCode} size={TextInputSize.SMALL}>
          <Typography variant="label">Download</Typography>
          <DownloadIcon />
        </Button>
        <Button
          onClick={copyToClipboard}
          variant="secondary"
          size={TextInputSize.SMALL}
        >
          <Typography variant="contrastLabel">Copy</Typography>
          <CopyIcon />
        </Button>
        <TextButton onClick={handleReset} size={TextInputSize.SMALL}>
          <Typography variant="label" accent>
            Reset
          </Typography>
          <ResetIcon />
        </TextButton>
      </ButtonsContainer>
      {message && (
        <Typography variant="body3" margin="0 0 1 0">
          {message}
        </Typography>
      )}
    </HomeContainer>
  );
};

export default Home;
