import React, {InputHTMLAttributes, useState, useCallback, ChangeEvent} from 'react';
import styled from 'styled-components';

const ThumbDiameter = 16;

const SliderWrapper = styled.div`
  position: relative;
`;

const HiddenInput = styled.input`
  width: 100%;
  margin: 0;
  padding:0;
  opacity: .2;
  z-index: 99;
`;

const Mark = styled.span`
  width: 1px;
  height: 9px;
  opacity: 0.25;
  background-color: hsl(205, 77%, 64%);
`;

const Rail = styled.div`
  position: absolute;
  left: 0;
  top: 12px;
  width: 100%;
  height: 2px;
  border-radius: 11px;
  background: red
`;
// background-image: linear-gradient(to bottom, hsl(210, 30%, 96%), hsl(203, 42%, 94%) 98%);

const ThumbWrapper = styled.div`
  position: relative;
  margin-right: 16px;
  left: 0;
  top: 12px;
  width: calc(100% - ${ThumbDiameter}px);
  height: 2px;
`;
const Thumb = styled.span<{leftValue: number}>`
  width: ${ThumbDiameter}px;
  height: ${ThumbDiameter}px;
  border-radius: 8px;
  background-color: hsl(43, 100%, 50%);
  position: absolute;
  top: -7.5px;
  left: ${({leftValue}) => `${leftValue}%`};
`;


const clamp = (value: number, min: number, max: number) =>{
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}

/**
 * Max needs to be bigger than Min
 * if Min is not available and Max is positive default is 0
 * if Min is not available Max is negative min will be reduce by 1
 */
const validMin = (max: number, min?: number) : number => {
  
  if(!min) {
    if(max > 0) {
      return 0;
    }else {
      return max - 1 ;
    }
  }

  return min;
}

function valueToPercent(value: number, min: number, max: number) {
  return Math.round(((value - min) * 100) / (max - min));
}

const percentToValue = (percent: number, min: number, max: number) => {
  return (max - min) * percent + min;
}

export type IFeedbackColor = 'error'|'warning'|'info'|'success'|'neutral';

interface IMark {
  label?: string
  value: number
}

interface OwnProps {
  min?: number
  max: number
  step?: number
  marks?: boolean | IMark[]
  defaultValue?: number
  value?: number
  staticBallColor?: IFeedbackColor 
  inputCallback?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type ISlider = OwnProps & InputHTMLAttributes<HTMLInputElement>;

const SliderInput : React.FC<ISlider> = ({
  min,
  max,
  inputCallback,
  ...props
}) => {


  const [selectedValue, setSelectedValue] = useState(max);

  const minValid = validMin(max, min);

  const handleInputChange =  useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const numericVal = parseInt(val,10);

    if(inputCallback) {
      inputCallback(e);
    }
    setSelectedValue(numericVal);
  },[]);

  const thumbLeftPostion = useCallback((value: number) => {
      return valueToPercent(value, minValid, max);
  },[]);

  return(
    <SliderWrapper>
      <Rail>
      </Rail>
      <ThumbWrapper>
        <Thumb
            data-value={selectedValue}
            leftValue={thumbLeftPostion(selectedValue)}
            data-percentage={thumbLeftPostion(selectedValue)}
          />
      </ThumbWrapper>
      <HiddenInput
        type="range" {...props}
        value={selectedValue}
        onChange={(e : ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
      />
    </SliderWrapper>
  );
};

export default SliderInput;