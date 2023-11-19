import styled from "styled-components"
import { getShadeColor } from "../themes/theme.configuration";

export enum sideEnum {
    "topLeft" ="tl",
    "topRight" ="tr",
    "bottomRight" = "br",
    "bottomLeft" = "bl",
    "leftTop" = "lt",
    "leftBottom" = "lb",
    "rightTop" = "rt",
    "rightBottom" = "rb"
}

export interface PopUpT {
    width?: number;
    height?: number;
    side?: sideEnum;
}


const setSide =(side: string | undefined)=>{
    const position = {
        [sideEnum.topLeft]: `top: -8px; left: 32px;`,    
        [sideEnum.bottomLeft]: `bottom: -8px; left: 32px;`,
        [sideEnum.topRight]: `top: -8px; right: 32px;`,
        [sideEnum.bottomRight]: `bottom: -8px; right: 32px;`,
        [sideEnum.leftTop]: `left: -8px; top: 32px;`,
        [sideEnum.leftBottom]: `left: -8; bottom: 32px;`,
        [sideEnum.rightTop]: `right: -8px; top: 32px;`,
        [sideEnum.rightBottom]: `right: -8px; bottom: 32px;`
    }[side || "tl"]
       
 
 return `${position}`
}


export const PopUp =  styled.div<PopUpT>`
position: absolute;
z-index: 1000;
width:${({width})=>(width || 300)}px;
height: ${({height})=>(height || 300)}px ;
box-shadow: 4px 4px 24px -14px rgba(66, 68, 90, 1);
border-radius: 5px;
background-color: ${({theme})=>getShadeColor(theme.background, "100")};
padding: 10px;
box-sizing: border-box;

&:after {
    content: '';
    display: block;
    position: absolute;
    transform: rotate(45deg);
    width: 16px;
    height: 16px;
    ${({side})=>setSide(side)}
    z-index: 999;
    background-color: ${({theme})=>getShadeColor(theme.background, "100")};
    box-shadow: 4px 4px 24px -14px rgba(66, 68, 90, 1);
}
&:befor {
    content: '';
    display: block;
    position: absolute;
    transform: rotate(45deg);
    width: 16px;
    height: 16px;
    ${({side})=>setSide(side)}
    z-index: 1000;
    background-color: ${({theme})=>getShadeColor(theme.background, "100")};
    box-shadow: 4px 4px 24px -14px rgba(66, 68, 90, 1);
}
`
