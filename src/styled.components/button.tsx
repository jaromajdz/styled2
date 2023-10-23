import {useContext} from 'react';
import styled from "styled-components"
import tinycolor from "tinycolor2";
import { ThemeNameContext } from "../App";

export type ColorT = 'primary' | 'secondary' | 'accent' | 'onprimary' | 'onsecondary' |'onaccent' | 'background' | 'onbackground'

interface ButtonProps {
    width?: number;
    color?: ColorT;
    textColor?: ColorT;
}
export const Button = styled.button<ButtonProps>`
    all: unset;
    text-decoration: none;
    text-align: center;
    padding: 8px;
    width: ${({width})=>(`${width? width : '100' }px`)};
    ${({theme, color})=>{
    const isDark = useContext(ThemeNameContext).themeName.includes('dark')    
    const clr = color || 'primary'
    const clrc = 'onaccent' //color? 'on' + color : "onprimary"
    return `
    background-color: ${theme[clr]};
    color: ${theme[clrc]};
    &:hover:not([disabled]){
        background-color:  ${isDark? tinycolor(theme[clr]).darken(10).toString()  : tinycolor(theme[clr]).lighten(20).toString()};
        color: ${tinycolor(theme[clrc]).lighten(45).toString()};
    }
    &:disabled{
        background-color: ${isDark? tinycolor(theme[clr]).darken(30).toString() : tinycolor(theme[clr]).lighten(30).toString()}; 
        color: ${isDark? tinycolor(theme[clrc]).desaturate(50).darken(50).toString(): tinycolor(theme[clrc]).desaturate(50).lighten(50).toString()} ;
        cursor: not-allowed;
    }`}
    
    }
    
`