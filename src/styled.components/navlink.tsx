import styled from "styled-components";
import { getShadeColor } from "../themes/theme.configuration";
import { useContext } from "react";
import { ThemeNameContext } from "../App";
import { text } from "stream/consumers";

interface NavProps {
  isActive?: boolean;
  noBackground?: boolean;
}

const NavLink = styled.a<NavProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 100px;
  text-decoration: none;
  ${({ theme, color, isActive, noBackground }) => {
        
    const themeName = useContext(ThemeNameContext).themeName;
    const isDark = themeName.includes("dark");
    
    let bgColor = ""
    let bgColorHover = ""
    let textColor = ""
    let textColorHover = ""

    switch(true){
      case isActive && isDark: 
        bgColor =  getShadeColor(theme.background, '700')  
        bgColorHover = getShadeColor(theme.background, '700')   
        
        textColor = theme.onbackground 
        textColorHover = theme.onbackground
      break; 
      case isActive && !isDark:
        bgColor = getShadeColor(theme.background, "400")
        bgColorHover = getShadeColor(theme.background, "400")
        
        textColor = getShadeColor(theme.primary, '700')
        textColorHover = getShadeColor(theme.primary, '700')
      break;
      
      case isDark:
        bgColor = getShadeColor(theme.background, '300')
        bgColorHover = getShadeColor(theme.background, '100')
        
        textColor = getShadeColor(theme.onbackground, "700")
        textColorHover = getShadeColor(theme.onbackground, '700')
      break;    
      case noBackground:
        bgColor = 'transparent'
        bgColorHover = 'transparent'
        
        textColor = getShadeColor(theme.primary, "700")
        textColorHover = getShadeColor(theme.primary, '500')
      break;
      default:
        bgColor = getShadeColor(theme.background, '50')
        bgColorHover = getShadeColor(theme.background, '300')
        
        textColor = getShadeColor(theme.onbackground, "500")
        textColorHover = getShadeColor(theme.onbackground, '500')
    }
return `
background-color: ${bgColor};
color: ${textColor};
&:hover{
  background-color:  ${bgColorHover};
  color: ${textColorHover};  
}
`;
  }}
`;
export default NavLink;
