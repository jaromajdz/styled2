import { createGlobalStyle } from "styled-components";
import Roboto from '../fonts/roboto/RobotoMono-VariableFont_wght.ttf';
import Lato from '../fonts/lato/Lato-Regular.ttf'

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: Lato;
    src: url(${Lato}) format('truetype');
    font-weight: 400;
    font-style: normal;
}
body{
    font-family: 'Lato';
    background-color: ${({theme})=>theme.background['50']};
    box-sizing: border-box;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}
`