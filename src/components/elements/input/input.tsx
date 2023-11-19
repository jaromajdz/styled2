import {
  useState,
  createRef,
  useEffect,
  useLayoutEffect,
  InputHTMLAttributes,
  ChangeEvent,
  useContext
} from "react";
import { StyledInput } from "../../../styled.components/input";
import styles from './input.module.scss';
import { ThemeContext } from "styled-components";
import { getShadeColor } from "../../../themes/theme.configuration";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  type: string;
  valid?: boolean;
  width?: string;
  getValue?: (value: string) => void;
  getFocus?: (evn: 'focus' | 'blur')=>void
}

export const Input = (props: InputProps) => {
  const inputRef = createRef<HTMLInputElement>();

  const getInputFsize = () => {
    return parseFloat(
      window
        .getComputedStyle(inputRef.current as Element, null)
        .getPropertyValue("font-size")
    );
  };

  const themeData = useContext(ThemeContext) || {}

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

  useLayoutEffect(() => {
    const computed = inputRef.current?.getBoundingClientRect();
    setFsize(getInputFsize());
    setHeight(computed?.height);
    setMove(focus || value.length ? true : false);
    const size = fsize !== undefined ? fsize : 16;
    setSize(move ? Math.round(size / 2) + 4 : size);
  }, [focus, move]);

  return (
    <div className={styles.input_wrapper}>
      <span style={{ height: `${height}px` }} className="relative m-2  mt-3">
        <StyledInput
          ref={inputRef}
          className=""
          placeholder=" "
          width={props.width || "250px"}          
          name={props.label}
          title={props.label}
          
          value={props.value}
          type={props.type}
          
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleGetValue}

        />
        <label
          style={{
            top: `-${move ? size + 6 : 0}px`,
            left: `${move ? -3 : 4}px`,
            fontSize: `${size}px`,
            color: `${getShadeColor(themeData.primary, '400')}`
          }}
          className={styles.label}
          htmlFor={props.label}
        >
          {props.label}
        </label>
      </span>
    </div>
  );
};

export default Input;
