import React, {InputHTMLAttributes, useState, useCallback} from 'react';
import styled from 'styled-components';
import SliderInput, {ISliderMark} from '../atoms/SliderInput';
import {IFeedbackColor} from '../../index';
import Label from '../atoms/Label';


const Container = styled.div``;
const Headers = styled.div<{allMarkCentered?:boolean}>`
  font-size: 14px;
  color: hsl(207, 5%, 57%);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${({allMarkCentered}) => allMarkCentered ?
      `padding: 0;`
    :
      `padding: 0 6px;`
  };
`;

const ValueTitle = styled(Label)`
  font-family: ${({ theme }) => theme.fontFamily.data};
`;

const getThumbColor = (value: number) : IFeedbackColor =>  {
  if(value <= 10) {
    return 'error';
  }

  if((value > 10) && (value <= 30)) {
    return 'warning';
  }

  return 'success';
};

const getTitleLevel = (value: number) : string => {
  if(value <= 10) {
    return 'Critical Level';
  }

  if((value > 10) && (value <= 30)) {
    return 'Warning Level';
  }

  return 'Safe Level';
};


interface IPercentageSliderProps {
  step?: number
  marks?: ISliderMark[]
  defaultValue?: number
  value?: number
  showValue?: boolean
  inputCallback?: (value: number) => void
  updateThumbColor?:  (value: number) => IFeedbackColor
  updateTitle?: (value: number) => string
  allMarkCentered?: boolean
}

type IPercentageSlider = IPercentageSliderProps & InputHTMLAttributes<HTMLInputElement>;

const PercentageSlider: React.FC<IPercentageSlider> = (
  {
    defaultValue=0,
    // title='',
    inputCallback,
    updateThumbColor,
    updateTitle,
    showValue,
    allMarkCentered,
    ...props
  }
  ) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelectedValue = useCallback((value: number) => {
    if(inputCallback) {
      inputCallback(value);
    }
    setSelectedValue(value);
  },[inputCallback]);

  return(
    <Container>
      <Headers allMarkCentered={allMarkCentered}>
        <Label
          htmlFor='percentage-slider'
          labelText={updateTitle ? updateTitle(selectedValue) : getTitleLevel(selectedValue)}
        />
        {showValue && <ValueTitle htmlFor='percentage-slider' labelText={`${selectedValue}%`} />}
      </Headers>
      <SliderInput
        {...props}
        id='percentage-slider'
        max={100}
        min={0}
        defaultValue={defaultValue}
        showValue={showValue}
        onChangeCallback={handleSelectedValue}
        thumbColor={
            updateThumbColor
            ? updateThumbColor(selectedValue)
            : getThumbColor(selectedValue)
          }
        allMarkCentered={allMarkCentered}
      />
    </Container>
  );
};

export default PercentageSlider;