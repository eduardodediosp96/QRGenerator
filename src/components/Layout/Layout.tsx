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
import { ThemeMode } from '@theme/Theme.types';

const Layout = () => {
  const [colorTheme, setColorTheme] = useState<ThemeMode>(ThemeMode.DARK);
  const theme = getTheme(colorTheme);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <MainContainer>
          <Navbar colorTheme={colorTheme} setColorTheme={setColorTheme} />
          <Home />
        </MainContainer>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Layout;
