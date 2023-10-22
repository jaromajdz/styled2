
import { createContext, useContext, useState } from "react";
import "./App.scss";
import NavBar from "./components/navbar/navbar";
import { updateStyledTheme } from "./themes/theme.configuration";
import { Container } from "./styled.components/container";
import { Route, Routes, useLocation, useOutlet } from "react-router-dom";
import { Home } from "./components/home/home";
import { UserAuth } from "./components/userauth/userauth";
import { ThemeContext, ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globla.theme";
import  { ThemesList }  from "./components/themesettings/themesettings";
import { themes } from "./themes/themes.config";
import { useStoreThemeName } from "./themes/theme.store";

export const ThemeNameContext = createContext<{themeName: string, setThemeName: (name: string)=>void}>({
  themeName: "light",
  setThemeName: ()=>0
});

function App() {

  const [ storeThemeName, getTheme] = useStoreThemeName('light')
  const [themeName, setThemeName] =  useState(getTheme())
  const [theme, setTheme] =  useState(updateStyledTheme())
  const value = {themeName: themeName, setThemeName: (name: string)=>{
    setThemeName(name)
    storeThemeName(name)
  }}

  const themeContext = useContext(ThemeContext)


  
  return (
    <>
     <ThemeProvider theme={theme[themeName]}>
      <ThemeNameContext.Provider value={value}>
      <GlobalStyles/>
      <NavBar></NavBar>
      
      <Container>
    
      
          <Routes>                     
                <Route path="/" Component={Home}></Route>
                <Route path="/login" Component={UserAuth}></Route>
                <Route path="/themes" element={<ThemesList themes={themes}/>}></Route>  
          </Routes>      
          
    
      
      </Container>
      </ThemeNameContext.Provider>
      </ThemeProvider>      
    </>
  );
}

export default App;
