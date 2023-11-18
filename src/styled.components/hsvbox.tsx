import styled from 'styled-components';

export interface HsvColorT{
    color?: string; //hex
}

export const HsvBox = styled.div.attrs(({color})=>({
    style: {
        backgroundColor: `${color}`
    }
}))`
position: relative;
z-index: 0;
width: 100%;
height: 150px;
background-image:  linear-gradient(transparent, black),
    linear-gradient(to right, white, transparent);
cursor: crosshair;   
box-shadow: 1px 1px 1px #000000; ;
`

export const Component = styled.div.attrs(({color}) => ({
    style: {
      background: `${color}`,
    },
  }))`width: 100%;`