import { useEffect, useState } from 'react';

// @Components
import { QRCode } from 'react-qrcode-logo';
import OptionsForm from './OptionsForm';
import Typography from '@commonComponents/Typography/Typography';

// @Icons
import { ChevronIcon } from '@icons';

// @Services
import { getCurrentTabUrl, getStorage } from '@services/google/googleServices';

// @Styles
import { Button } from '@styles/Styles';
import { HomeContainer, MoreOptionsLabel, QRContainer } from './Home.styles';

// @Types
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

  const handleShowMoreOptions = () => setShowMoreOptions((prev) => !prev);

  const setDataFromStorageToForm = (result: QRGeneratorStorage) => {
    const { logoUrl: url, logoName: name, ...resultProps } = result;
    const qrFormFromStorage = {
      ...qrForm,
      ...resultProps,
      logoFile: { url, name },
    };
    setQrForm(qrFormFromStorage);
  };

  useEffect(() => {
    getCurrentTabUrl((url) => setCurrentUrl(url || ''));
    getStorage(
      ['size', 'fgColor', 'bgColor', 'logoUrl', 'logoName'],
      setDataFromStorageToForm,
    );
  }, []);

  const getQRCodeOptions = (): QRCodeOptions => {
    const {
      logoFile: { url: logoImage },
      ...formOptionsProps
    } = qrForm;

    return {
      ...formOptionsProps,
      logoImage,
      value: currentUrl,
      removeQrCodeBehindLogo: true,
    };
  };

  return (
    <HomeContainer>
      <QRContainer>
        <QRCode {...getQRCodeOptions()} />
      </QRContainer>
      <MoreOptionsLabel
        rotate={!showMoreOptions}
        onClick={handleShowMoreOptions}
      >
        <Typography variant="subtitle" margin="0">
          {showMoreOptions ? 'Hide options' : 'Show more options'}
        </Typography>
        <ChevronIcon />
      </MoreOptionsLabel>
      {showMoreOptions && <OptionsForm qrForm={qrForm} setQrForm={setQrForm} />}
      <Button>
        <Typography variant="label">Generate QR</Typography>
      </Button>
    </HomeContainer>
  );
};

export default Home;
