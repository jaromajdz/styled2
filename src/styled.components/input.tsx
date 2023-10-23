import styled from "styled-components";
import { ColorT } from "./button";
import { getShadeColor } from "../themes/theme.configuration";

export interface StyledInputT {
  color?: ColorT;
  width?: string;
}

export const StyledInput = styled.input<StyledInputT>`
  all: unset;
  position: relative;
  width: ${({ width }) => `${width || "150px"}`};
  z-index: 20;
  ${({theme, color})=>{
   const one = getShadeColor(theme[color || 'primary'], '400')
   const two = getShadeColor(theme[color || 'secondary'], '300')
   const line = getShadeColor(theme[color || 'primary'], '300')
   return `
   color: ${one};
  border-bottom: 2px solid ${one};
  &:focus {
    color: ${one}
    outline: none;
    border-bottom: 2px solid ${two};
  }`
  }

  }
  
`;
