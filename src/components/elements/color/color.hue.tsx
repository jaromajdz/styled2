import { useLayoutEffect, useState, createRef, useContext } from "react";
import { StyledRange } from "../../../styled.components/range";
import tinycolor from "tinycolor2";
import { ColorBox } from "../../../styled.components/colorbox";
import { ColorValues } from "./color.values";
import { ColorContext } from "./picker";

export const ColorHue = () => {

  const [rangeWidt, setRangeWith] = useState(0);
  const rangeRef = createRef<HTMLInputElement>();

  const {color, setColor} = useContext(ColorContext);


  const onChangeHandler = (value: string ) => {
    
    setColor(
      tinycolor("#FF0000")
        .spin( (parseInt(value)/100) * 360)
        .toString()
    );
  };

  useLayoutEffect(() => {
    setRangeWith(rangeRef.current?.getBoundingClientRect().width || 100)
    onChangeHandler(rangeRef.current?.value || "50")    
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ColorValues/>
      <StyledRange ref={rangeRef} onChange={(e) => onChangeHandler(e.currentTarget.value)} />
    </div>
  );
};
