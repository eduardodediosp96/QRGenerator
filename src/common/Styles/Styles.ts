import styled from '@emotion/styled';

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.palette.background : theme.palette.accent};
  border: ${({ theme, variant }) =>
    variant === 'secondary'
      ? `solid 1px ${theme.palette.contrastText}`
      : 'none'};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing(1)} 0;
  cursor: pointer;
`;
