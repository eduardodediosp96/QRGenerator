import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const QRContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.palette.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  height: 200px;
  width: 200px;

  canvas {
    max-height: 200px;
    max-width: 200px;
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
