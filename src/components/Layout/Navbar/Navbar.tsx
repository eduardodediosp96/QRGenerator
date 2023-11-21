// @Icons
import { MoonIcon, SunIcon } from '@icons';

// @Styles
import { PortfolioNavbar, NavbarSection } from './Navbar.styles';
import Typography from '@commonComponents/Typography/Typography';

type NavbarProps = {
  colorTheme: 'light' | 'dark';
  setColorTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

const Navbar = ({ colorTheme, setColorTheme }: NavbarProps) => {
  const handleChangeTheme = () => {
    setColorTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <PortfolioNavbar>
      <NavbarSection onClick={handleChangeTheme}>
        {colorTheme === 'light' ? <MoonIcon /> : <SunIcon />}
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
