
import { useEffect } from "react";
import "./App.scss";
import NavBar from "./components/navbar/navbar";
import { addThemeSettings } from "./themes/theme.configuration";
import { Container } from "./styled.components/container";
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation, useOutlet } from "react-router-dom";
import { Home } from "./components/home/home";
import { UserAuth } from "./components/userauth/userauth";



interface ActiveProps {
  isActive?: boolean;
}

function App() {
  const location = useLocation();



  useEffect(() => {
    addThemeSettings();
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
