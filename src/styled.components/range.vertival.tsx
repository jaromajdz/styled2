import styled from "styled-components";
export const StyledRangeVertical = styled.input.attrs({
    type: "range", orient: "vertical"
})`
--range-height: 16px; 
--range-bg: #3071af; 
--range-bg-focus: #043869;
--range-bg-image: linear-gradient(
    to right,
    #ff0000,
    #ffff00,
    #00ff00,
    #00ffff,
    #0000ff,
    #ff00ff,
    #ff0000
  );
  --range-thumb-bg: transparent; 
  --range-thumb-border: none;//1px solid #000000;
  --range-shadow: none;//1px 1px 1px #000000, 0px 0px 1px #0d0d0d;  
  appearance: slider-vertical;
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;

&:focus {
  outline: none;
}

&::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--range-height);
    cursor: pointer;
    box-shadow: var(--range-shadow);
    background: var(--range-bg);
    background-image: var(--range-bg-image);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

 &:focus::-webkit-slider-runnable-track {
  background-image: var(--range-bg-image);
}


&::-webkit-slider-thumb {
  box-shadow: var(--range-thumb-shadow);
  border: var(--range-thumb-border);
  height: 24px;
  width: 10px;
  border-radius: 0;
  background: var(--range-thumb-bg);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px;
}

&::-moz-range-track {
  width: 100%;
  height: var(--range-height);
  cursor: pointer;
  box-shadow: var(--range-shadow);
  background: var(--range-bg);
  background-image: var(--range-bg-image);
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

&::-moz-range-thumb {
  box-shadow: var(--range-thumb-shadow);
  border: var(--range-thumb-border);
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: var(--range-thumb-bg);
  cursor: pointer;
}

&::-ms-track {
  width: 100%;
  height: var(--range-height);
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
&::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: var(--range-shadow);
}
&:focus::-ms-fill-lower {
  background: #3071a9;
}
&::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: var(--range-shadow);
}

&::-ms-thumb {
  box-shadow: var(--range-thumb-shadow);
  border: var(--range-thumb-border);
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: var(--range-thumb-bg);
  cursor: pointer;
}


&:focus::-ms-fill-upper {
  background: #367ebd;
  background-image: var(--range-bg-image);
}
`