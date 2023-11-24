import styled from '@emotion/styled';

export const MainLayout = styled('div')`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.background};
  width: 320px;
  margin: 0;
  padding: 0;
`;

export const MainContainer = styled('div')`
  max-width: 320px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.spacing(1)};
`;
