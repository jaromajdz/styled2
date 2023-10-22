import styled from "styled-components"
import tw from 'twin.macro';
import tinycolor from "tinycolor2";

export type ColorT = 'primary' | 'secondary' | 'accent' | 'foreground' | 'background'

interface ButtonProps {
    width?: number;
    color?: ColorT;
    textColor?: ColorT;
}

export const ButtonColors = (theme: {[key: string]: {[key: string]: string}}, color = "primary") =>{
    const btn = {
        'primary': {
            background: theme.primary['400'],
            text: theme.background['50']
        }, 
        'secondary': {
            background: theme.secondary['400'],
            text: theme.accent['50']
        },
        'background': {
            background: theme.background['400'],
            text: theme.foreground['100']
        },
        'foreground': {
            background: theme.foreground['400'],
            text: theme.background['100']
        },
        'accent': {
            background: theme.accent['400'],
            text: theme.background['100']
        },
    }[color]
    return btn
} 

export const Button = styled.button<ButtonProps>`
    all: unset;
    text-decoration: none;
    text-align: center;
    padding: 8px;
    width: ${({width})=>(`${width? width : '100' }px`)};
    ${({theme, color})=>{
    
    const btnColor = ButtonColors(theme, color)

    return `
    background-color: ${btnColor?.background};
    color: ${btnColor?.text};
    &:hover:not([disabled]){
        background-color: ${tinycolor(btnColor?.background).darken(10).toString()};
        color: ${tinycolor(btnColor?.text).lighten(60).toString()};
    }
    &:disabled{
        background-color: ${tinycolor(btnColor?.background).lighten(20).toString()}; 
        color: ${tinycolor(btnColor?.text).lighten(30).toString()} ;
        cursor: not-allowed;
    }`}
    
    }
    
`