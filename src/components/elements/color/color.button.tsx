import { useContext, useState } from "react";
import { ColorBox } from "../../../styled.components/colorbox";
import ColorPicker, { ColorContext } from "./picker";
import { PopUp } from "../../../styled.components/popup";


const ColorButton = ({ color }: { color: string }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [boxColor, setBoxColor] = useState(color)  

 const showPickerHandler = (reason: string, color: string) =>{
    if(reason==="ok"){
        setBoxColor(color)
    }
    setShowPicker(false)
}


  return (
    <div style={{ position: "relative" }}>
      {showPicker ? (
        <PopUp style={{top: "25px", left: "-16px"}}>
          <ColorPicker color={boxColor}  closeFn={showPickerHandler}/>
        </PopUp>
      ) : null}
      <ColorBox color={boxColor} onClick={() => setShowPicker(true)} />
    </div>
  );
};
export default ColorButton;
