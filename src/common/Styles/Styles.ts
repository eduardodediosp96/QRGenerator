import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.accent};
  border: none;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing(1)} 0;
`;
