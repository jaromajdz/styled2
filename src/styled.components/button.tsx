import styled from "styled-components"
import tw from 'twin.macro';
import tinycolor from "tinycolor2";

export type ColorT = 'primary' | 'secondary' | 'accent' | 'foreground' | 'background'

interface ButtonProps {
    width?: number;
    color?: ColorT;
    textColor?: ColorT;
}

export const Button = styled.button<ButtonProps>`
    all: unset;
    text-align: center;
    padding: 8px;
    width: ${({width})=>(`${width? width : '100' }px`)};
    background-color: ${({theme, color})=>theme[color? color : 'primary']['300']};
    ${({theme, color})=>{
    const thisColor = theme[color? color : 'primary']['300']; 
    const textColor = 'foreground'? 'white' : thisColor
    return `
    color: ${theme.secondary['00']};
    &:hover:not([disabled]){
        background-color: ${tinycolor(thisColor).darken(10).toString()};
        color: ${tinycolor(thisColor).lighten(60).toString()};
    }
    &:disabled{
        background-color: ${tinycolor(thisColor).lighten(10).toString()}; 
        color: ${tinycolor(thisColor).lighten(30).toString()} ;
        cursor: not-allowed;
    }`}
    
    }
    
`