
import { useContext } from "react"
import Input from "../input/input"
import { ColorContext } from "./picker"

export const ColorValues = () =>{
    
    const {color, setColor} = useContext(ColorContext) 
    
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <div style={{width: "70px", height: "30px", backgroundColor: color}} ></div>
            <Input value={color} type="text" getValue={setColor}/>
         </div>
    )
}