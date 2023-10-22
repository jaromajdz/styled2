import styled from "styled-components";
import tw from "twin.macro";


export const Card = styled.div`
   display: flex;
   flex-direction: column;
   box-shadow: 0px 0px 12px -8px rgba(66, 68, 90, 1);
   //min-height: 300px;
   min-width: 500px;
`

export interface CardHeaderT{
   background?: string
}

export const CardHeader = styled.div<CardHeaderT>`
   display: flex;
   justify-content: start;
   background-color: ${({theme, background})=>background? background : theme.background['100']};
   h1{
      padding: 8px 16px;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
   }
   `
