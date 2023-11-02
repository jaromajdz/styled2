
import { createContext, useContext, useState } from "react";
import "./App.scss";
import NavBar from "./components/navbar/navbar";
import { Container } from "./styled.components/container";
import { Route, Routes} from "react-router-dom";
import { Home } from "./components/home/home";
import { UserAuth } from "./components/userauth/userauth";
import { ThemeContext, ThemeProvider } from "styled-components";
import { GlobalStylesDark,  GlobalStylesLight } from "./themes/globla.theme";
import  { ThemesList }  from "./components/themesettings/themesettings";
import { themes2 } from "./themes/themes.config";
import { useStoreThemeName } from "./themes/theme.store";
import { ThemeColorT } from "./themes/theme.types";
import Moving from "./components/elements/moving/moving";
import { StyledRange } from "./styled.components/range";
import { HsvBox } from "./styled.components/hsvbox";
import { Hub } from "@styled-icons/material";
import { ColorHue } from "./components/elements/color/color.hue";

export const ThemeNameContext = createContext<{themeName: string, setThemeName: (name: string)=>void}>({
  themeName: "light",
  setThemeName: ()=>0
});

function App() {

  const [ storeThemeName, getTheme] = useStoreThemeName('light')
  const [themeName, setThemeName] =  useState(getTheme())
  const [theme, setTheme] =  useState(themes2)
  const value = {themeName: themeName, setThemeName: (name: string)=>{
    setThemeName(name)
    storeThemeName(name)
  }}

  const themeContext = useContext(ThemeContext)


  
  return (
    <>
     <ThemeProvider theme={theme[themeName]}>
      <ThemeNameContext.Provider value={value}>
      {themeName.includes('dark')? <GlobalStylesDark/> : <GlobalStylesLight/>}
      <NavBar></NavBar>
      <Container>
      <HsvBox/>
      <ColorHue/>
      
          <Routes>                     
                <Route path="/" Component={Home}></Route>
                <Route path="/login" Component={UserAuth}></Route>
                <Route path="/themes" element={<ThemesList themes={themes2}/>}></Route>  
          </Routes>      
          
    
      
      </Container>
      </ThemeNameContext.Provider>
      </ThemeProvider>      
    </>
  );
}

export default App;
