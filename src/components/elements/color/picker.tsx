import { createContext, useEffect, useState } from "react";
import { HsvBox } from "../../../styled.components/hsvbox";
import { ColorHue } from "./color.hue";
import { ColorValues } from "./color.values";
import { HSVValueBox } from "./color.hsv";
import tinycolor from "tinycolor2";

export const ColorContext = createContext({
  color: "#FF0000",
  tmpColor: "#FF0000",
  outColor: "#FF0000",
  saturation: 100 as number,
  luminance: 100 as number,
  hue: 180,
  editMode: false,
  setEditMode: (edit: boolean) => {},
  setColor: (cl: string) => {},
  setTmpColor: (cl: string) => {},
  setLuminance: (lm: number) => {},
  setSaturation: (st: number) => {},
  setHue: (hue: number) => {},
});

const ColorPicker = () => {
  const [currColor, setCurrColor] = useState("#FF0000");
  const [tmpColor, setTmpColor] = useState("#FF0000");
  const [outColor, setOutColor] = useState("#FF0000");
  const [saturation, setSaturation] = useState(100);
  const [luminance, setLuminance] = useState(100);
  const [hue, setHue] = useState(180);
  const [editMode, setEditMode] = useState(false);

  const val = {
    tmpColor: tmpColor,
    color: currColor,
    outColor: outColor,
    editMode: editMode,
    setEditMode: (ed: boolean) => setEditMode(ed),
    setTmpColor: (cl: string) => setTmpColor(cl),
    setColor: (cl: string) => setCurrColor(cl),
    setLuminance: (lm: number) => changeLuminance(lm),
    setSaturation: (st: number) => changeSaturation(st),
    setHue: (hue: number) => changeHue(hue),
    saturation: saturation,
    luminance: luminance,
    hue: hue,
  };

  const changeLuminance = (lm: number) => {
    setEditMode(false);
    setLuminance(lm);
  };

  const changeSaturation = (lm: number) => {
    setEditMode(false);
    setSaturation(lm);
  };

  const changeHue = (h: number) => {
    setEditMode(false);
    setHue(h);
  };
  
  useEffect(()=>{
    if(editMode){
      const cl = tinycolor(tmpColor).toHsv()
      setCurrColor( 
        tinycolor("#FF0000")
        .spin(cl.h)
        .toString()
      );
     console.log('spin', cl.h)
     setLuminance(cl.v * 100)
     setSaturation(cl.s * 100) 
     setHue(cl.h)
     setOutColor(tinycolor(tmpColor).toString())   
    }
    
      
  },[tmpColor])
  

  useEffect(() => {
    if (!editMode) {
      setCurrColor(tinycolor("#FF0000").spin(hue).toString());
      const cl = `#${new tinycolor({ h: hue, s: saturation === 1 ? saturation + 1 : saturation, v: luminance })
      .toHex()
      .toString()}`
      setTmpColor(cl)
      setOutColor(cl)
    }
  }, [hue]);

  useEffect(() => {
    if (!editMode) {
      const s = Math.round(saturation);
      const v = Math.round(luminance);
      const cl = `#${new tinycolor({ h: hue, s: s === 1 ? s + 1 : s, v: v })
        .toHex()
        .toString()}`;
      setOutColor(cl);
      setTmpColor(cl);
    }
  }, [luminance, saturation]);

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
