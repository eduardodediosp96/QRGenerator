import styled from '@emotion/styled';

// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Types
import { Breakpoint } from '@theme/Theme.types';
import { CardContainer } from '@styles/Styles';

export const ProjectsContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ProjectTitle = styled(Typography)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px; /* Initial border thickness */
    bottom: -0.5rem;
    background-color: ${(props) => props.theme.palette.accent};
    width: 100%;
  }
`;

export const ProjectCard = styled(CardContainer)<{ reverse?: boolean }>`
  opacity: 0;
  flex-direction: column;
  text-align: center;
  align-items: center;
  display: flex;

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    flex-direction: column;
  }
`;

export const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  max-width: 100%;
`;
