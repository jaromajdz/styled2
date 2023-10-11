import React from 'react';
import {useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import styled from 'styled-components';
import tw from 'twin.macro';
import NavBar from './components/navbar/navbar';
import { addThemeSettings } from './themes/theme.configuration';

interface ActiveProps {
  isActive?: boolean;
}


const Button = styled.button<ActiveProps>`
  ${tw`p-2 bg-fuchsia-500 hover:bg-amber-500`}
  ${(props)=> props.isActive && tw`bg-indigo-50`}
`

function App() {
  
  useEffect(()=>{
      addThemeSettings();
  },[])
  
  return (
  < >

    <NavBar></NavBar>
      
    
    
  </>
  );
}

export default App;
