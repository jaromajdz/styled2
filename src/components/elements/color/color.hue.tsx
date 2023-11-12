import { useLayoutEffect, useState, createRef, useContext } from "react";
import { StyledRange } from "../../../styled.components/range";
import { ColorContext } from "./picker";

export const ColorHue = ({width}: {width?: number}) => {

  
  const rangeRef = createRef<HTMLInputElement>();

  const { setHue} = useContext(ColorContext);


  const onChangeHandler = (value: string ) => {
    setHue(parseInt(value)/100*360)
  };

  useLayoutEffect(() => {
      onChangeHandler(rangeRef.current?.value || "50")    
  });

  return (
      <>
           <StyledRange width={width} ref={rangeRef} onChange={(e) => onChangeHandler(e.currentTarget.value)} />
      </>
  );
};
