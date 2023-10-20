
import { useEffect, useState } from "react";
import "./App.scss";
import NavBar from "./components/navbar/navbar";
import { addThemeSettings, updateStyledTheme } from "./themes/theme.configuration";
import { Container } from "./styled.components/container";
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation, useOutlet } from "react-router-dom";
import { Home } from "./components/home/home";
import { UserAuth } from "./components/userauth/userauth";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globla.theme";
import { ThemeT } from "./themes/theme.types";




interface ActiveProps {
  isActive?: boolean;
}

function App() {
  const location = useLocation();
  const [theme, setTheme] =  useState(updateStyledTheme())

  useEffect(() => {
    addThemeSettings();
  }, []);

  return (
    <>
     <ThemeProvider theme={theme.light}>
      <GlobalStyles/>
      <NavBar></NavBar>
      <Container>
       
      
          <Routes location={location}>                     
                <Route path="/" Component={Home}></Route>
                <Route path="/login" Component={UserAuth}></Route>
          
          </Routes>      
          

        
      
      </Container>
      </ThemeProvider>      
    </>
  );
}

export default App;
