import { useEffect, useState } from 'react';

// @Components
import { QRCode } from 'react-qrcode-logo';
import OptionsForm from './OptionsForm';
import Typography from '@commonComponents/Typography/Typography';

// @Icons
import { ChevronIcon } from '@icons';

// @Styles
import { Button } from '@styles/Styles';
import { HomeContainer, MoreOptionsLabel, QRContainer } from './Home.styles';

// @Types
import { HomeProps } from './Home.types';

// @Utils
import { readFile } from '@utils/utils';

const Home = (qrForm: HomeProps) => {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [fileError, setFileError] = useState('');
  const { qrDetails, setQrDetails } = qrForm;

  const handleShowMoreOptions = () => setShowMoreOptions((prev) => !prev);

  useEffect(() => {
    // Get the current tab url
    chrome.tabs?.query({ active: true, currentWindow: true }, (tabs) => {
      const { url } = tabs[0];
      setCurrentUrl(url || '');
    });
  }, []);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const file = event.target.files?.[0];
      const fileData = await readFile(file, [
        'image/jpeg',
        'image/png',
        'image/svg+xml',
      ]);
      setQrDetails((prevDetails) => ({
        ...prevDetails,
        logoImage: fileData,
      }));
      setFileError('');
    } catch (error) {
      setFileError(
        (error as { message?: string }).message ?? 'Something went wrong',
      );
    }
  };

  return (
    <HomeContainer>
      <QRContainer>
        {/* TODO: Add logo */}
        <QRCode
          value={currentUrl}
          removeQrCodeBehindLogo
          {...qrForm.qrDetails}
        />
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
      {showMoreOptions && (
        <OptionsForm
          handleFileChange={handleFileChange}
          fileError={fileError}
          qrDetails={qrDetails}
          setQrDetails={setQrDetails}
        />
      )}
      <Button>
        <Typography variant="label">Generate QR</Typography>
      </Button>
    </HomeContainer>
  );
};

export default Home;
