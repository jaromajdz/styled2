import { Moving } from "../../elements/moving/moving";
import { HsvBox } from "../../../styled.components/hsvbox"
import { useContext, useState } from "react";
import { ColorContext } from "./picker";

export const HSVValueBox = ()=>{
    const {color} = useContext(ColorContext)

    return <>
               <Moving >  
                    <HsvBox color={color}/>
               </Moving>
           
           </>
}