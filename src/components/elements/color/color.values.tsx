
import { useContext } from "react"
import Input from "../input/input"
import { ColorContext } from "./picker"
import { ColorBox } from "../../../styled.components/colorbox"

export const ColorValues = () =>{
    
    const {outColor, color, setColor} = useContext(ColorContext) 
    
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <ColorBox color={outColor}/>
            
            <Input value={outColor} type="text" getValue={setColor}/>
         </div>
    )
}