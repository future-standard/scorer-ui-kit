import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  ChangeEvent,
  Fragment,
  useRef,
  useEffect,
} from 'react';
import styled, {css} from 'styled-components';
import {IFeedbackColor} from '../../index';
import {
  isInsideRange,
} from '../../helpers';

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

const MarkLabel = styled.span<{leftValue: number; alignment?: IMartAlignment; isCenterAlignedEndNum?: boolean}>`
  position: absolute;
  top: -24px;
  font-size: 10px;
  font-style: italic;
  line-height: normal;
  text-align: center;
  color: hsla(195, 10%, 52%, 0.72);
  left: ${({ leftValue, isCenterAlignedEndNum }) => {
    if (isCenterAlignedEndNum) {
      let baseValue;
      switch (leftValue) {
        case 0:
          baseValue = 2;
          break;
        case 100:
          baseValue = 22;
          break;
        default:
          baseValue = 7;
      }
      return `calc(${leftValue}% + ${baseValue}px)`;
    } else {
      return `calc(${leftValue}% + 7px)`;
    }
  }};
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

const GhostThumb = styled(Thumb)`
  opacity: .5;
`;

const thumbLeftPosition = (value: number, min: number, max: number ) => {
  return valueToPercent(value, min, max);
};

const nearMark = (value: number, marks: ISliderMark[]) : number => {

  let closest = marks.reduce((prev, curr) => {
    return (Math.abs(curr.value - value) < Math.abs(prev.value - value) ? curr : prev);
  });

  return closest.value;
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
};

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
};

// const percentToValue = (percent: number, min: number, max: number) : number => {
//   return (max - min) * percent + min;
// };


const getMarkAlignment = (value: number, min: number, max: number) : IMartAlignment => {
  if(value === min) {
    return 'right';
  }

  if(value === max) {
    return 'left';
  }

  return 'center';
};

const renderMarks = (markList: ISliderMark[], min: number, max: number, listTag: string, isCenterAlignedEndNum?: boolean) => {

  const listOptions : JSX.Element[] = [];
  const marksElements = markList.map(({value, label}, index) => {
    // * first and last should be 0% and 100%
    const left = index === (markList.length - 1) ? 100 : valueToPercent(value, min, max);
    listOptions.push(<option key={`option-${value}`}>{value}</option>);

    return (
      <Fragment key={`mark-${index}`}>
        <Mark
          data-leftvalue={`${left}%`}
          leftValue={left}
        />
        <MarkLabel
          leftValue={left}
          alignment={getMarkAlignment(value, min, max)}
          isCenterAlignedEndNum={isCenterAlignedEndNum}
        >
          {label}
        </MarkLabel>
      </Fragment>
    );
  });

  return (
    <Fragment>
      {marksElements}
      <datalist id={listTag}>
        {listOptions}
      </datalist>
    </Fragment>
  );

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
  onlyMarkSelect?: boolean
  showValue?: boolean
  inputCallback?: (value: number) => void
  onChangeCallback?: (value: number) => void
  isCenterAlignedEndNum?: boolean
}

export type ISlider = ISliderOwnProps & InputHTMLAttributes<HTMLInputElement>;

let ghostThumbValue = 0;

const SliderInput : React.FC<ISlider> = ({
  min,
  max,
  marks,
  defaultValue,
  thumbColor = 'info',
  disabled = false,
  onlyMarkSelect = false,
  inputCallback = () => {},
  onChangeCallback = () => {},
  isCenterAlignedEndNum,
  ...props
}) => {

  const maxValid = getValidMax(max, min);
  const minValid = getValidMin(max, min);
  const initValue = (defaultValue && isInsideRange(defaultValue, minValid, maxValid)) ? defaultValue : minValid;

  const [selectedValue, setSelectedValue] = useState(initValue);
  const [isGhostActive, setIsGhostActive ] = useState(false);

  const thumbValueRef = useRef(thumbLeftPosition(selectedValue, minValid, maxValid));

  if(marks && onlyMarkSelect) {
    const mark = nearMark(selectedValue, marks);
    const ghostVal = thumbLeftPosition(mark, minValid, maxValid);
    ghostThumbValue = ghostVal;
  }


  const handleInputChange =  useCallback((e: ChangeEvent<HTMLInputElement>, lastValue: number) => {
    const val = e.target.value;
    if(val === null) { return; }
    const numericVal = parseInt(val,10);

    thumbValueRef.current = thumbLeftPosition(numericVal, minValid, maxValid);
    const mark = marks ? nearMark(numericVal, marks) : numericVal;
    const prevMark  = marks ? nearMark(lastValue, marks) : numericVal;

    if(onlyMarkSelect && (prevMark !== mark)) {
      onChangeCallback(mark);
    }

    if(!onlyMarkSelect) {
      onChangeCallback(numericVal);
    }

    setSelectedValue(prev => {
      if(numericVal === prev) { return prev; }
      return numericVal;
    });

  },[marks, maxValid, minValid, onChangeCallback, onlyMarkSelect]);


  const handleSelectStart = useCallback(() => {
    setIsGhostActive(true);
  }, []);

  const handleSelectEnd =  useCallback((currentValue: number) => {
    if(onlyMarkSelect) {
      inputCallback(ghostThumbValue);
    } else {
      inputCallback(currentValue);
    }

    if(onlyMarkSelect) {
      thumbValueRef.current = ghostThumbValue;
    }

    setIsGhostActive(false);
  },[inputCallback, onlyMarkSelect]);

  useEffect(() => {
    const initValue = (defaultValue && isInsideRange(defaultValue, minValid, maxValid)) ? defaultValue : minValid;
    thumbValueRef.current = thumbLeftPosition(initValue, minValid, maxValid);
    setSelectedValue(initValue);

  }, [defaultValue, maxValid, minValid]);

  return(
    <SliderWrapper disabled={disabled}>
      <Rail />
      <ThumbWrapper>
        {marks && renderMarks(marks, minValid, maxValid, `sliderList-${minValid}-${maxValid}`, isCenterAlignedEndNum)}
        {isGhostActive && onlyMarkSelect
          ? (
            <GhostThumb
              data-value={selectedValue}
              leftValue={ghostThumbValue}
              data-percentage={ghostThumbValue}
              bgColor={thumbColor}
            />
          )
          : null}
        <Thumb
          data-value={selectedValue}
          leftValue={thumbValueRef.current}
          data-percentage={thumbValueRef.current}
          bgColor={thumbColor}
        />
      </ThumbWrapper>
      <HiddenInput
        {...props}
        type='range'
        disabled={disabled}
        list={`sliderList-${minValid}-${maxValid}`}
        min={minValid}
        max={maxValid}
        value={selectedValue}
        onMouseUp={() => handleSelectEnd(selectedValue)}
        onMouseDown={handleSelectStart}
        onTouchStart={() => handleSelectEnd(selectedValue)}
        onTouchEnd={handleSelectStart}
        onChange={(e) => handleInputChange(e, selectedValue)}
      />
    </SliderWrapper>
  );
};

export default SliderInput;