import { createGlobalStyle } from "styled-components";
import Roboto from '../fonts/roboto/RobotoMono-VariableFont_wght.ttf';
import Lato from '../fonts/lato/Lato-Regular.ttf'
import tinycolor from "tinycolor2";
import { getShadeColor } from "./theme.configuration";


export const GlobalStylesLight = createGlobalStyle`

@font-face {
    font-family: Lato;
    src: url(${Lato}) format('truetype');
    font-weight: 400;
    font-style: normal;-moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;

   /*
     Introduced in IE 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
   -ms-user-select: none;
   user-select: none;
}
body{
    font-family: 'Lato';
    background-color: ${({theme})=>getShadeColor(theme.background, '50')};
    box-sizing: border-box;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}
`

export const GlobalStylesDark = createGlobalStyle`

@font-face {
    font-family: Lato;
    src: url(${Lato}) format('truetype');
    font-weight: 400;
    font-style: normal;
}
body{
    font-family: 'Lato';
    background-color: ${({theme})=>theme.background};
    color: ${({theme})=>theme.onbackground};
    box-sizing: border-box;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    -moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;

   /*
     Introduced in IE 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
   -ms-user-select: none;
   user-select: none;
}`