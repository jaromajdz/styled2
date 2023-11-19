import styled from "styled-components";
import { ColorT } from "./button";

interface BoxColorT {
    color: string;
    showShadow?: boolean;
}

export const ColorBox =  styled.div<BoxColorT>`
    height: 32px;
    min-width: 30px;
    max-width: 50px;
    background-color: ${({color})=>color};
    box-shadow: ${({showShadow})=>showShadow? `1px 1px 1px #000000` : `none`};
`