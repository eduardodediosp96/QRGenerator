import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// @Types
import { Breakpoint } from '@theme/Theme.types';

export const CardContainer = styled.div<{ noPadding?: boolean }>`
  animation: ${(props) =>
    css`
      ${props.theme.animations.enterCards} 0.8s ease-in-out forwards
    `};
  border: solid 2px ${({ theme }) => theme.palette.primary};
  background-color: ${(props) => props.theme.palette.background};
  display: flex;
  padding: ${({ noPadding, theme }) => !noPadding && theme.spacing(2)};

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    padding: ${({ noPadding, theme }) => !noPadding && theme.spacing(1)};
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
`;

export const Pill = styled.div`
  display: inline-flex;
  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.palette.primary};

  > span {
    margin: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  }
`;
