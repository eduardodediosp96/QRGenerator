// @Icons
import { MoonIcon, SunIcon } from '@icons';

// @Styles
import { PortfolioNavbar, NavbarSection } from './Navbar.styles';
import Typography from '@commonComponents/Typography/Typography';

// @Types
import { ThemeMode } from '@theme/Theme.types';
import { setStorage } from '@services/google/googleServices';

type NavbarProps = {
  colorTheme: ThemeMode;
  setColorTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
};

const Navbar = ({ colorTheme, setColorTheme }: NavbarProps) => {
  const handleChangeTheme = () => {
    const getOpposityTheme = (color: ThemeMode) =>
      color === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    setColorTheme(getOpposityTheme);
    setStorage({ theme: getOpposityTheme(colorTheme) });
  };

  return (
    <PortfolioNavbar>
      <NavbarSection onClick={handleChangeTheme}>
        {colorTheme === ThemeMode.LIGHT ? <MoonIcon /> : <SunIcon />}
      </NavbarSection>
      <NavbarSection>
        <Typography variant="title">
          <b>QR</b>Generator
        </Typography>
      </NavbarSection>
    </PortfolioNavbar>
  );
};

export default Navbar;
