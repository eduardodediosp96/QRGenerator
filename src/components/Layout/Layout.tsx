import { useEffect, useState } from 'react';
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
import { QRGeneratorStorage } from '@services/google/googleServices.types';
import { getStorage, setStorage } from '@services/google/googleServices';

const DEFAULT_THEME = ThemeMode.DARK;
const Layout = () => {
  const [colorTheme, setColorTheme] = useState<ThemeMode>(DEFAULT_THEME);
  const setDataFromStorage = (result: QRGeneratorStorage) => {
    const { theme } = result;
    const currentTheme = theme ?? colorTheme;
    setColorTheme(currentTheme);
    setStorage({ theme: currentTheme });
  };

  useEffect(() => {
    getStorage(['theme'], setDataFromStorage);
  }, []);

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
