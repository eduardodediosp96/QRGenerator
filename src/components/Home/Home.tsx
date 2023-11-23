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
import { OptionsFormProps } from './Home.types';

const Home = (qrForm: OptionsFormProps) => {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleShowMoreOptions = () => setShowMoreOptions((prev) => !prev);

  useEffect(() => {
    // Get the current tab url
    chrome.tabs?.query({ active: true, currentWindow: true }, (tabs) => {
      const { url } = tabs[0];
      setCurrentUrl(url || '');
    });
  }, []);

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
      {showMoreOptions && <OptionsForm {...qrForm} />}
      <Button>
        <Typography variant="label">Generate QR</Typography>
      </Button>
    </HomeContainer>
  );
};

export default Home;
