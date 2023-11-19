
import { Moving } from "../../elements/moving/moving";
import { HsvBox } from "../../../styled.components/hsvbox"
import { useContext, useEffect, useState, memo } from "react";
import { ColorContext } from "./picker";

export const HsvBoxMem = memo(({color}: {color: string})=>{
    return <><HsvBox color={color}/></>
})

export const HSVValueBox = ()=>{
    
    const {color} = useContext(ColorContext)

    return <>
               <Moving >  
                    <HsvBoxMem color={color}/>
               </Moving>
           
           </>
}