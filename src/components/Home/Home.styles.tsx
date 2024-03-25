import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding: ${({ theme }) =>
    `${theme.spacing(1)} ${theme.spacing(2.5)} ${theme.spacing(
      2,
    )} ${theme.spacing(2.5)}`};
`;

export const QRContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.palette.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.shapes.rounded[1]};

  height: 11rem;
  width: 11rem;

  canvas {
    max-height: 10.75rem;
    max-width: 10.75rem;
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

  &:hover {
    font-weight: 600;
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
`;
