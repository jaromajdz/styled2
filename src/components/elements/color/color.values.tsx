
import { useContext } from "react"
import Input from "../input/input"
import { ColorContext } from "./picker"
import { ColorBox } from "../../../styled.components/colorbox"

export const ColorValues = () =>{
    
    const {outColor, tmpColor, setTmpColor, setEditMode} = useContext(ColorContext) 
    
    const setValue = (val: string) =>{
        setEditMode(true)
        setTmpColor(val)
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <ColorBox color={outColor} showShadow={true}/>
            <Input value={tmpColor} type="text" getValue={setValue}/>
         </div>
    )
}