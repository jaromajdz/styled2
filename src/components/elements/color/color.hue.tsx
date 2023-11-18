import {
  useLayoutEffect,
  useState,
  createRef,
  useContext,
  useEffect,
} from "react";
import { StyledRange } from "../../../styled.components/range";
import { ColorContext } from "./picker";

export const ColorHue = ({ width }: { width?: number }) => {
  const rangeRef = createRef<HTMLInputElement>();

  const handleRef = (elem: HTMLInputElement) =>{
    setRef(elem)
  }

  const { setHue, hue, setEditMode } = useContext(ColorContext);

  const [edit, setEdit] = useState(false)
  const [ref, setRef] = useState<HTMLInputElement>()

  const onChangeHandler = (value: string) => {
    setHue((parseInt(value) / 100) * 360);
  };

  useEffect(()=>{
    if(!edit && ref){
       ref.value =  ((hue/360) * 100).toString()
    }
  },[hue])

  useLayoutEffect(() => {
    if(ref) onChangeHandler(ref.value || "50");
  }, []);

  return (
    <>
      <StyledRange
        width={width}
        ref={handleRef}
        onMouseDown={()=>setEdit(true)}
        onMouseUp={()=>setEdit(false)}
        onChange={(e) => onChangeHandler(e.currentTarget.value)}
      />
    </>
  );
};
