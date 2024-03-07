import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) =>
    `${theme.spacing(1)} ${theme.spacing(3)} ${theme.spacing(
      2,
    )} ${theme.spacing(3)}`};
`;

export const QRContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.palette.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.shapes.rounded[1]};

  height: 11.25rem;
  width: 11.25rem;

  canvas {
    max-height: 11.25rem;
    max-width: 11.25rem;
  }
`;

export const MoreOptionsLabel = styled.div<{ rotate: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
    transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'rotate(0deg)')};

    path {
      stroke: ${({ theme }) => theme.palette.secondary};
    }
  }
`;

export const OptionsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};

  svg {
    height: 18px;
    width: 20px;
    transform: translateY(3px);
    fill: ${({ theme }) => theme.palette.contrastText};
    margin-right: ${({ theme }) => theme.spacing(0.5)};
  }
`;
