import { createContext, useEffect, useState } from "react";
import { HsvBox } from "../../../styled.components/hsvbox";
import { ColorHue } from "./color.hue";
import { ColorValues } from "./color.values";
import { HSVValueBox } from "./color.hsv";
import tinycolor from "tinycolor2";

export const ColorContext = createContext({
  color: "#FF0000",
  outColor: "#FF0000",
  saturation: 100 as number,
  luminance: 100 as number,
  hue: 180,
  setColor: (cl: string) => {},
  setLuminance: (lm: number)=>{},
  setSaturation: (st: number)=>{},
  setHue: (hue: number)=>{}  
});

const ColorPicker = () => {
  const [currColor, setCurrColor] = useState("#FF0000");
  const [outColor, setOutColor] = useState("#FF0000");
  const [saturation, setSaturation] = useState(100)
  const [luminance, setLuminance]= useState(100)  
  const [hue, setHue] = useState(180)  

  const val = {
    color: currColor,
    outColor: outColor,
    setColor: (cl: string) => setCurrColor(cl),
    setLuminance: (lm: number)=>setLuminance(lm),
    setSaturation: (st: number)=>setSaturation(st),
    setHue: (hue: number)=>setHue(hue),
    saturation: saturation,
    luminance: luminance,
    hue: hue,
};

  useEffect(()=>{
    setCurrColor( 
            tinycolor("#FF0000")
            .spin(hue)
            .toString()
          );
          const s = Math.round(saturation)
          const v = Math.round(luminance)       
          console.log(s, v)
          setOutColor(`#${new tinycolor({h: hue, s: s===1? s+1 : s, v: v}).toHex().toString()}`) 
     }, [hue, luminance, saturation] )


  return (
    <div>
      <ColorContext.Provider value={val}>
        <HSVValueBox />
        <ColorValues />
        <ColorHue />
      </ColorContext.Provider>
    </div>
  );
};

export default ColorPicker;
