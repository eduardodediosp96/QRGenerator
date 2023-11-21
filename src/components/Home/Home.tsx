// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Styles
import { Button } from '@styles/Styles';

const Home = () => {
  return (
    <div>
      <img src="https://i.imgur.com/8XZQq8P.png" alt="logo" />
      <div>
        <Typography variant="body1">Show more options</Typography>
      </div>
      <Button>Generate QR</Button>
    </div>
  );
};

export default Home;
