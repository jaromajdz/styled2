
import { useEffect } from "react";
import "./App.scss";
import NavBar from "./components/navbar/navbar";
import { addThemeSettings, updateStyledTheme } from "./themes/theme.configuration";
import { Container } from "./styled.components/container";
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation, useOutlet } from "react-router-dom";
import { Home } from "./components/home/home";
import { UserAuth } from "./components/userauth/userauth";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "twin.macro";



interface ActiveProps {
  isActive?: boolean;
}

function App() {
  const location = useLocation();
  
  const themes = updateStyledTheme();


  useEffect(() => {
    updateStyledTheme();
    addThemeSettings();
  }, []);

  return (
    <>
     <ThemeProvider theme={themes.light}> 
      <GlobalStyles/>
      <NavBar></NavBar>
      <Container>
       
      
      <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
          
          <Routes location={location}>                     
                <Route path="/" Component={Home}></Route>
                <Route path="/login" Component={UserAuth}></Route>
          
          </Routes>      
          

        </CSSTransition>
        </TransitionGroup>
      
      </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
