import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  ChangeEvent,
  Fragment,
} from 'react';
import styled, {css} from 'styled-components';
import {IFeedbackColor} from '../../index';
import {isInsideRange} from '../../helpers';

/**
 * TODO to support all input range features
 * Currently you can pass this values but to be visually correct the needs to work around the current implementation.
 * Step
 * Vertical usage
 */

const ThumbDiameter = 16;

const SliderWrapper = styled.div<{disabled: boolean}>`
  font-family: ${({ theme }) => theme.fontFamily.data};
  position: relative;
  height: 30px;
  margin-top: 20px;
  ${({disabled}) => disabled && css`
    opacity: .5;
  `};
`;

const HiddenInput = styled.input<{disabled:boolean}>`
  width: 100%;
  margin: 0;
  padding:0;
  opacity: .001;
  z-index: 99;
  cursor: ${({disabled}) => disabled ? `not-allowed` : `pointer`};
`;

const Rail = styled.div`
  position: absolute;
  left: ${ThumbDiameter/2}px;
  top: 10px;
  width: calc(100% - ${ThumbDiameter}px);
  height: 2px;
  border-radius: 11px;
  background-image: linear-gradient(to bottom, hsl(210, 30%, 96%), hsl(203, 42%, 94%) 98%);
`;

const Mark = styled.span<{leftValue: number}>`
  position: absolute;
  top: -3px;
  left: ${({leftValue}) => `calc(${leftValue}% + 7px)`};
  width: 1px;
  height: 9px;
  opacity: 0.25;
  background-color: hsl(205, 77%, 64%);
`;

const MarkLabel = styled.span<{leftValue: number, alignment?: IMartAlignment,}>`
  position: absolute;
  top: -24px;
  left: ${({leftValue}) => `calc(${leftValue}% + 7px)`};

  font-size: 10px;
  font-style: italic;
  line-height: normal;
  text-align: center;
  color: hsla(195, 10%, 52%, 0.72);

  ${({alignment}) => (alignment === 'center') && css`transform: translateX(-50%);;`}
  ${({alignment}) => (alignment === 'right') && css`transform: translateX(5%);`}
  ${({alignment}) => (alignment === 'left') && css`transform: translateX(-95%);`}
`;

const ThumbWrapper = styled.div`
  position: relative;
  margin-right: 16px;
  left: 0;
  top: 10px;
  width: calc(100% - ${ThumbDiameter}px);
  height: 2px;
`;

const Thumb = styled.span<{leftValue: number, bgColor: IFeedbackColor }>`
  width: ${ThumbDiameter}px;
  height: ${ThumbDiameter}px;
  border-radius: 8px;
  background-color: ${({theme, bgColor}) => theme.colors.feedback[bgColor]};
  position: absolute;
  top: -7.5px;
  left: ${({leftValue}) => `${leftValue}%`};
`;

const GhostTumb = styled(Thumb)`
  opacity: .5;
`;

const thumbLeftPostion = (value: number, min: number, max: number ) => {
  return valueToPercent(value, min, max);
};

/**
 * Rules for a getValidMin
 * Max needs to be bigger than Min
 * if Min is not available and Max is positive default is 0
 * if Min is not available Max is negative min will be reduce by 1
 */
const getValidMin = (max: number, min?: number) : number => {

  if((!max) && (!min)) {
    return 0;
  }
  
  if(!min) {
    if(max > 0) {
      return 0;
    }else {
      return max - 1 ;
    }
  }
  return min;
}

/**
 * 
 * Max is required but null because it cans o.O
 * if Max is less value than min fix to one more than min
 */
const getValidMax = (max: number, min?: number) : number => {
  if((max === null) && (!min)) {
    return 100;
  }

  if(min && (min > max) ) {
     return min + 1;
  }

  return max;
};

const  valueToPercent = (value: number, min: number, max: number) : number => {
  return Math.round(((value - min) * 100) / (max - min));
}

const percentToValue = (percent: number, min: number, max: number) : number => {
  return (max - min) * percent + min;
}


const getMarkAlignment = (value: number, min: number, max: number) : IMartAlignment => {
  if(value === min) {
    return 'right';
  }

  if(value === max) {
    return 'left';
  }

  return 'center';
}

const renderMarks = (markList: ISliderMark[], min: number, max: number, listTag: string) => {

  const listOptions : JSX.Element[] = []; 
  const marksElements = markList.map(({value, label}, index) => {
    // * first and last should be 0% and 100%
    const left = index === (markList.length - 1) ? 100 : valueToPercent(value, min, max);
    listOptions.push(<option key={`option-${value}`}>{value}</option>);

    return <Fragment key={`mark-${index}`}>
            <Mark
              data-leftvalue={`${left}%`}
              leftValue={left}
            />
            <MarkLabel
              leftValue={left}
              alignment={getMarkAlignment(value, min, max)}
            >
              {label}
            </MarkLabel>
          </Fragment>
  })

  return <Fragment>
      {marksElements}
        <datalist id={listTag}>
          {listOptions}
        </datalist>
  </Fragment>

};

export type IMartAlignment = 'left' | 'center' | 'right';

export interface ISliderMark {
  value: number
  label?: string
}

interface ISliderOwnProps {
  min?: number
  max: number
  step?: number
  marks?: ISliderMark[]
  defaultValue?: number
  value?: number
  thumbColor?: IFeedbackColor 
  inputCallback?: (value: number) => void
}

export type ISlider = ISliderOwnProps & InputHTMLAttributes<HTMLInputElement>;

const SliderInput : React.FC<ISlider> = ({
  min,
  max,
  marks,
  defaultValue,
  thumbColor = 'info',
  disabled = false,
  inputCallback,
  ...props
}) => {

  const maxValid = getValidMax(max, min);
  const minValid = getValidMin(max, min);
  const initValue = (defaultValue && isInsideRange(defaultValue, minValid, maxValid)) ? defaultValue : minValid;

  const [selectedValue, setSelectedValue] = useState(initValue);
  const [thumbValue, setThumbValue] = useState(thumbLeftPostion(selectedValue, minValid, maxValid));
  const [ghostThumbValue, setGhostThumbValue] = useState(thumbLeftPostion(selectedValue, minValid, maxValid));


  const handleInputChange =  useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const numericVal = parseInt(val,10);
    setSelectedValue(numericVal);
    setGhostThumbValue(thumbLeftPostion(numericVal, minValid, maxValid));
  },[min, maxValid, minValid]);

  const handleMouseUp =  useCallback((e) => {
    if(inputCallback) {
      inputCallback(selectedValue);
    }
    setThumbValue(thumbLeftPostion(selectedValue, minValid, maxValid));
  },[selectedValue]);

  return(
    <SliderWrapper disabled={disabled}>
      <Rail/>
      <ThumbWrapper>
        {marks && renderMarks(marks, minValid, maxValid, `sliderList-${minValid}-${maxValid}`)}
        <GhostTumb
            data-value={selectedValue}
            leftValue={ghostThumbValue}
            data-percentage={ghostThumbValue}
            bgColor={thumbColor}
          />
        <Thumb
            data-value={selectedValue}
            leftValue={thumbValue}
            data-percentage={thumbValue}
            bgColor={thumbColor}
        />
      </ThumbWrapper>
      <HiddenInput
        {...props}
        type="range"
        disabled={disabled}
        list={`sliderList-${minValid}-${maxValid}`}
        min={minValid}
        max={maxValid}
        value={selectedValue}
        onMouseUp = {(e) => {handleMouseUp(e)}}
        onChange={(e : ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
      />
    </SliderWrapper>
  );
};

export default SliderInput;