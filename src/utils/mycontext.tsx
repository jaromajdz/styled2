import { useEffect, useState } from "react"

export const useMyContext = (tname?: string) =>{
    const [themeName, setTheme] = useState<string>()

  const   setThemeName = (tname?: string)=>{
        setTheme(tname);
    }

   const getThemeName = () =>{
        return themeName;
   }  

   useEffect(()=>{
    if(tname) setTheme(tname)
   },[])

   return [setThemeName, getThemeName] as const
}