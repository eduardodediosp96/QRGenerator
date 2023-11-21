import { keyframes } from "@emotion/react";
import styled from '@emotion/styled';

// @Types
import { Breakpoint } from '@theme/Theme.types';

const animateMoon = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const rotateSun = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const PortfolioNavbar = styled('nav')`
  background-color: ${(props) => props.theme.palette.background};
  height: ${(props) => props.theme.sizing.navbar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    height: ${(props) => props.theme.sizing.navbarMobile};
  }
`;

export const NavbarSection = styled('div')`
  display: flex;
  align-items: center;
  display: flex;
  gap: ${(props) => props.theme.spacing(4)};

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    gap: ${(props) => props.theme.spacing(1)};
  }

  svg {
    height: 30px;
    width: 30px;
    cursor: pointer;
    :hover {
      &.sun-icon {
        animation: ${rotateSun} 1.5s linear infinite;
      }
      .moon-star1 {
        animation: ${animateMoon} 1s linear infinite;
      }
      .moon-star2 {
        animation: ${animateMoon} 1s linear infinite reverse;
      }
    }

    ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
      height: 24px;
      width: 24px;
    }
  }
`;
