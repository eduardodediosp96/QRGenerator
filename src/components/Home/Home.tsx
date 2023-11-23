import { useState } from 'react';

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
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleShowMoreOptions = () => setShowMoreOptions((prev) => !prev);

  const { size, fgColor, bgColor } = qrForm.qrDetails;

  return (
    <HomeContainer>
      <QRContainer>
        {/* TODO: Add logo */}
        <QRCode
          value="https://github.com/gcoro/react-qrcode-logo"
          size={size}
          fgColor={fgColor}
          bgColor={bgColor}
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
