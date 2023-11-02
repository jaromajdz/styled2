import { createContext } from "react";
import { HsvBox } from "../../../styled.components/hsvbox";
import { ColorHue } from "./color.hue";
import { ColorValues } from "./color.values";

export const ColorContext = createContext({
    color: '#FF0000',
    setColor: (cl: string)=>{}
});


const ColorPicker = () =>{
    const [currColor, setCurrColor] = userState('#FF0000');

    const val = {color: currColor, setColor: (cl: string)=>setCurrColor(cl)}
    
    return <div>
       <ColorContext.Provider value={val}>
        <HsvBox/>
        <ColorValues/>
        <ColorHue/>
      </ColorContext.Provider> 
     </div>
}

export default ColorPicker;

function userState(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}
