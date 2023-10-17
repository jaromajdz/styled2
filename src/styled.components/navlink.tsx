import styled from 'styled-components';
import tw from 'twin.macro';

interface NavProps {
    isActive?: boolean;
    noBackground?: boolean;
}

const NavLink  = styled.a<NavProps>`
${tw`flex  items-center justify-center min-w-[70px] h-full md:min-w-[140px]  hover:bg-secondary-500 hover:text-background-100 text-foreground-500`}
${(props)=> !props.noBackground && tw`bg-background-100`}
${(props)=> props.isActive && tw`bg-foreground-400 hover:bg-foreground-400 text-background-100`}
`
export default NavLink;