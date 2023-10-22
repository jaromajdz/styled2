import styled from "styled-components";
import { ColorT } from "./button";

export interface StyledInputT {
  color?: ColorT;
  width?: string;
}

export const StyledInput = styled.input<StyledInputT>`
  all: unset;
  position: relative;
  width: ${({ width }) => `${width || "150px"}`};
  z-index: 20;
  color: ${({ theme, color }) => theme[color || "primary"]["300"]};
  border-bottom: 2px solid
    ${({ theme, color }) => theme[color || "primary"]["300"]};
  &:focus {
    outline: none;
    border-bottom: 2px solid
      ${({ theme, color }) => theme[color || "accent"]["300"]};
  }
`;
