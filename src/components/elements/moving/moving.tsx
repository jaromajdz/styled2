
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ColorContext } from "../color/picker";
export const Moving = ({
  children 
}: {
  children?: React.ReactNode
}) => {

  const{color, luminance, saturation, setLuminance, setSaturation} = useContext(ColorContext)


  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  
  const [canMove, setCanMove] = useState(true);
  
  const [leftPosition, setLeftPos] = useState(0);
  const [topPosition, setTopPos] = useState(0);
  
  const [topMax, setTopMax] = useState(0);
  const [leftMax, setLeftMax] = useState(0);

  const outerRef = useRef<HTMLDivElement>(null);

  const moveHandler = (e: React.MouseEvent<Element, MouseEvent>, can =  false) => {
    if (canMove || can) {
      e.stopPropagation()
      const x = e.clientX - leftPosition ;
      const y = e.clientY - topPosition  ;

      const leftPos = x < 0 ? 0 : x > leftMax  ? leftMax : x 
      const topPos = y < 0 ? 0 : y  > topMax  ? topMax : y

      setLeft(leftPos);
      setTop(topPos);
      
      setLuminance((topMax - (e.clientY - topPosition))/ (topMax) * 100)
      setSaturation((e.clientX - leftPosition ) /(leftMax) * 100)
    }
  };

  useEffect(()=>{
    if(!canMove){
     setLeft(leftMax * (saturation/100))
     setTop(topMax -  (topMax * (luminance / 100)))
  }
  },[luminance, saturation])

  useLayoutEffect(() => {
    const elParams = outerRef.current?.getBoundingClientRect();
    setLeftPos((elParams?.left || 0));
    setTopPos((elParams?.top || 0));
    
    //setLeft(elParams?.width || 0)
    //setTop( 0 )

    const mt = elParams?.height? elParams?.height  : 0
    const ml = elParams?.width? elParams?.width :  0

    setTopMax(mt);
    setLeftMax(ml);
    
    setLeft(ml * (saturation / 100))
    setTop(mt -  (mt * (luminance / 100)))
    setCanMove(false)
  }, []);

  useEffect(() => {
       
    const mouseUpHandler = () =>{
      setCanMove(false)
  }

    window.addEventListener("mouseup", mouseUpHandler);

    return () => window.removeEventListener("mouseup", mouseUpHandler);
  }, []);

  

  return (
    
      <div
        ref={outerRef}
        style={{
          position: "relative",
          backgroundColor: "transparent",
          zIndex: "1100",
          cursor: "crosshair",
        }}
        onMouseMove={moveHandler}
        onClick={(e)=>moveHandler(e, true)}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            border: "1px solid white",
            borderColor: `${canMove? 'red' : 'white'}`,
            position: "absolute",
            top: `${top-5}px`,
            left: `${left-5}px`,
            zIndex: "1101",
            padding: "0",
            transition: "all",
            transitionDuration: "100ms"       
             }}
          onMouseDown={() => setCanMove(true)}
        ></div>
        {children}
      </div>
     
   
  );
};
export default Moving;
