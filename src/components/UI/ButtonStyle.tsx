import styled, { CSSProperties } from 'styled-components';

export const DefaultButtonStyle = styled.button<{
  styleOverrides?: CSSProperties;
}>`
  position: relative;
  display: block;
  width: 120px;
  height: 50px;
  border-radius: 12px;
  font-size: 25px;
  color: yellow;
  background-color: gray;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;
