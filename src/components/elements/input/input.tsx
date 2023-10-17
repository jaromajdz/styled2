import {
  useState,
  createRef,
  useEffect,
  InputHTMLAttributes,
  ChangeEvent,
} from "react";
import tw from "twin.macro";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  type: string;
  valid?: boolean;
  getValue?: (value: string) => void;
  getFocus?: (evn: 'focus' | 'blur')=>void
}

const StyledInput = tw.input`
    appearance-none 
    relative 
    z-20 
    focus:outline-none 
    focus:border-secondary-300 
    border-solid 
    border-b-2 
    border-primary-300 
    bg-transparent
    px-1`;

export const Input = (props: InputProps) => {
  const inputRef = createRef<HTMLInputElement>();

  const getInputFsize = () => {
    return parseFloat(
      window
        .getComputedStyle(inputRef.current as Element, null)
        .getPropertyValue("font-size")
    );
  };

  const [focus, setFous] = useState(false);
  const [value, setValue] = useState("");
  const [move, setMove] = useState(false);
  const [size, setSize] = useState(12);
  const [fsize, setFsize] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>(0);

  const handleGetValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    if (props.getValue) {
      props.getValue(e.target.value);
    }
  };

  const handleFocus = () =>{
    if(props.getFocus) props.getFocus('focus')
    setFous(true)
  }

  const handleBlur = () =>{
    if(props.getFocus) props.getFocus('blur')
      setFous(false)
  }

  useEffect(() => {
    setSize(getInputFsize());
  }, []);

  useEffect(() => {
    const computed = inputRef.current?.getBoundingClientRect();
    setFsize(getInputFsize());
    setHeight(computed?.height);
    setMove(focus || value.length ? true : false);
    const size = fsize !== undefined ? fsize : 16;
    setSize(move ? Math.round(size / 2) + 4 : size);
  }, [focus, move]);

  return (
    <div className="flex flex-col">
      <span style={{ height: `${height}px` }} className="relative m-2  mt-3">
        <StyledInput
          ref={inputRef}
          className=""
          placeholder=" "
          
          value={props.value}
          type={props.type}
    
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleGetValue}

        />
        <span
          style={{
            top: `-${move ? size + 6 : 0}px`,
            left: `${move ? -3 : 4}px`,
            fontSize: `${size}px`,
          }}
          className={`absolute z-10 transition-all duration-200`}
        >
          {props.label}
        </span>
      </span>
    </div>
  );
};

export default Input;
