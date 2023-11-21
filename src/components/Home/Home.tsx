import { useState } from 'react';

// @Components
import OptionsForm from './OptionsForm';
import Typography from '@commonComponents/Typography/Typography';

// @Icons
import { ChevronIcon } from '@icons';

// @Styles
import { Button } from '@styles/Styles';
import { HomeContainer, MoreOptionsLabel, QRContainer } from './Home.styles';

// TODO: DELETE
import QRImage from '@images/qr.png';

const Home = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleShowMoreOptions = () => setShowMoreOptions((prev) => !prev);

  return (
    <HomeContainer>
      <QRContainer>
        <img src={QRImage} alt="QR" />
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
      {showMoreOptions && <OptionsForm />}
      <Button>
        <Typography variant="label">Generate QR</Typography>
      </Button>
    </HomeContainer>
  );
};

export default Home;
