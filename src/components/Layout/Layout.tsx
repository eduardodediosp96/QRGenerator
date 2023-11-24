import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';

// @Components
import Home from '@components/Home/Home';
import Navbar from './Navbar/Navbar';

// @Styles
import { MainContainer, MainLayout } from '../Layout/Layout.styles';

// @Theme
import getTheme from '@theme/Theme';

// @Types
import { QRForm } from '@components/Home/Home.types';
import { ThemeMode } from '@theme/Theme.types';

const defaultQrDetails: QRForm = {
  size: 200,
  fgColor: '#000',
  bgColor: '#fff',
  logoImage: undefined,
};

const Layout = () => {
  const [colorTheme, setColorTheme] = useState<ThemeMode>(ThemeMode.DARK);
  const [qrDetails, setQrDetails] = useState<QRForm>(defaultQrDetails);
  const theme = getTheme(colorTheme);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <MainContainer>
          <Navbar colorTheme={colorTheme} setColorTheme={setColorTheme} />
          <Home qrDetails={qrDetails} setQrDetails={setQrDetails} />
        </MainContainer>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Layout;
