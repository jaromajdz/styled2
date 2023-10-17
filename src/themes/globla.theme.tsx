import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    background-color: ${({theme})=>theme.background['100']};
`