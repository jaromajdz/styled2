import styled from "styled-components"
import tw from 'twin.macro';

type ColorT = 'primary' | 'secondary' | 'accent' | 'foreground' | 'background'

interface ButtonProps {
    width?: number;
    color?: ColorT;
}

export const Button = styled.button<ButtonProps>`
${tw`p-2 bg-primary-300 w-[100%]  hover:bg-primary-500 hover:text-secondary-50 shadow-md hover:shadow-sm mx-auto`}
${(props)=>props.color==="secondary" && tw`bg-secondary-300 hover:bg-secondary-500 hover:text-secondary-50` }
${(props)=> props.width? `width: ${props.width.toString()}px` : "" }
`