import styled from "styled-components";
import { ColorT } from "./button";

interface BoxColorT {
    color: string;
}

export const ColorBox =  styled.div<BoxColorT>`
    height: 32px;
    width: 50px;
    background-color: ${({color})=>color};
`