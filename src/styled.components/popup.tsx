import styled from "styled-components"

export interface PopUpT {
    width?: number;
    height?: number;
    side?: string;
}

export const PopUp =  styled.div<PopUpT>`
position: absolute;
z-index: 1000;
width:${({width})=>(width || 300)}px;
height: ${({height})=>(height || 300)}px ;
box-shadow: 4px 4px 24px -14px rgba(66, 68, 90, 1);
border-radius: 5px;
background-color: ${({theme})=>theme.background};
&:after {
    content: '';
    display: block;
    position: absolute;
    transform: rotate(45deg);
    width: 16px;
    height: 16px;
    top: -8px;
    left: 32px;
    z-index: 999;
    background-color: ${({theme})=>theme.background};
    box-shadow: 4px 4px 24px -14px rgba(66, 68, 90, 1);
}
&:befor {
    content: '';
    display: block;
    position: absolute;
    transform: rotate(45deg);
    width: 16px;
    height: 16px;
    top: -8px;
    left: 32px;
    z-index: 1000;
    background-color: ${({theme})=>theme.background};
    box-shadow: 4px 4px 24px -14px rgba(66, 68, 90, 1);
}
`
