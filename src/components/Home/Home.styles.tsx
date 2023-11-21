import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const QRContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border: ${({ theme }) => `solid 2px ${theme.colors.backgroundBlack}`};
  border-radius: 4px;

  img {
    width: 150px;
    height: 150px;
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
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
`;
