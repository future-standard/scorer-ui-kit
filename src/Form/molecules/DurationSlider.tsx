import React, {useState} from 'react';
import styled from 'styled-components';
import {ITimeUnit} from '../../index';
import SliderInput, {ISlider} from '../atoms/SliderInput';
import {getTextTimeUnit} from '../../helpers';


/**
 * This component relies in the slider for validations
 * Since the theme of this component is time unit values
 * Marks could also be handle by it.
 * Providing quantity of marks and generating the marks array based with unit
 */

const Container = styled.div``;
const Headers = styled.div`
  font-size: 14px;
  color: hsl(207, 5%, 57%);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 6px;
`;

const MainTitle = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
`;

const ValueTitle = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.data};
`;

interface IDurationSliderProps {
  title: string
  timeUnit: ITimeUnit
}

type IDurationSlider = IDurationSliderProps & ISlider;

const DurationSlider: React.FC<IDurationSlider> = (
  {
    max,
    min,
    defaultValue=0,
    title='',
    timeUnit,
    inputCallback,
    ...props
  }
  ) => {

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelectedValue = (value: number) => {
    if(inputCallback) {
      inputCallback(selectedValue);
    }
    setSelectedValue(value);
  };

  return(
    <Container>
      <Headers>
        <MainTitle>{title}</MainTitle>
        <ValueTitle>{getTextTimeUnit(selectedValue, timeUnit)}</ValueTitle>
      </Headers>
      <SliderInput
        {
          ...props}
        max={max}
        min={min}
        defaultValue={defaultValue}
        inputCallback={(value) => handleSelectedValue(value)}
      />
    </Container>
  );
};

export default DurationSlider;