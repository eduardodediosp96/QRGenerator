// @Icons
import { MoonIcon, SunIcon } from '@icons';

// @Styles
import { PortfolioNavbar, NavbarSection } from './Navbar.styles';
import Typography from '@commonComponents/Typography/Typography';

// @Types
import { ThemeMode } from '@theme/Theme.types';

type NavbarProps = {
  colorTheme: ThemeMode;
  setColorTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
};

const Navbar = ({ colorTheme, setColorTheme }: NavbarProps) => {
  const handleChangeTheme = () => {
    setColorTheme((prev) => (prev === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT));
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
