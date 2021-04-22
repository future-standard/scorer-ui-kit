import React, {InputHTMLAttributes, useState, useCallback} from 'react';
import styled from 'styled-components';
import SliderInput, {ISliderMark} from '../atoms/SliderInput';
import {IFeedbackColor} from '../../index';


const Container = styled.div``;
const Headers = styled.div`
  font-size: 14px;
  color: hsl(207, 5%, 57%);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 6px;
`;
const MainTitle = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
`;
const ValueTitle = styled.div`
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
  inputCallback?: (value: number) => void
  updateThumbColor?:  (value: number) => IFeedbackColor
  updateTitle?: (value: number) => string
}

type IPercentageSlider = IPercentageSliderProps & InputHTMLAttributes<HTMLInputElement>;

const PercentageSlider: React.FC<IPercentageSlider> = (
  {
    defaultValue=0,
    // title='',
    inputCallback,
    updateThumbColor,
    updateTitle,
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
      <Headers>
        <MainTitle>
          {
            updateTitle
            ? updateTitle(selectedValue)
            : getTitleLevel(selectedValue)
          }
        </MainTitle>
        <ValueTitle>{`${selectedValue}%`}</ValueTitle>
      </Headers>
      <SliderInput
        {...props}
        max={100}
        min={0}
        defaultValue={defaultValue}
        inputCallback={(value) => handleSelectedValue(value)}
        thumbColor={
            updateThumbColor
            ? updateThumbColor(selectedValue)
            : getThumbColor(selectedValue)
          }
      />
    </Container>
  );
};

export default PercentageSlider;