import styled from '@emotion/styled';

// @Components
import { getIconMeasures } from '@commonComponents/inputs/InputStyles';
import { TextInputSize } from '@commonComponents/inputs/InputTypes';

export const TextButton = styled.button<{
  size: TextInputSize;
}>`
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding: 0;

  svg {
    width: ${(props) => getIconMeasures[props.size]};
    height: ${(props) => getIconMeasures[props.size]};

    path {
      stroke: ${({ theme }) => theme.palette.contrastAccent};
    }
  }
`;

export const Button = styled.button<{
  variant?: 'primary' | 'secondary';
  size: TextInputSize;
}>`
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.palette.background : theme.palette.accent};
  border: ${({ theme, variant }) =>
    variant === 'secondary'
      ? `solid 1px ${theme.palette.contrastText}`
      : 'none'};
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  position: relative;
  display: flex;

  svg {
    width: ${(props) => getIconMeasures[props.size]};
    height: ${(props) => getIconMeasures[props.size]};
    fill: ${({ theme }) => theme.palette.contrastText};
    transform: translateY(5px);
    margin-right: ${({ theme }) => theme.spacing(0.5)};
  }
`;
