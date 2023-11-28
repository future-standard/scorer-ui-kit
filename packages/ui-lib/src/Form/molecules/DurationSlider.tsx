import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {ITimeUnit} from '../../index';
import SliderInput, {ISlider} from '../atoms/SliderInput';
import {getShortTextTimeUnit, isTimeUnit} from '../../helpers';
import Label from '../atoms/Label';


/**
 * This component relies in the slider for validations
 * Since the theme of this component is time unit values
 * Marks could also be handle by it.
 * Providing quantity of marks and generating the marks array based with unit
 */

const Container = styled.div``;
const Headers = styled.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 6px;
`;

const ValueLabel = styled(Label)`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  margin-bottom: 0;
`;

const Unit = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.data};
  color: var(--grey-a11);
  font-style: italic;
  font-size: 12px;
  line-height: 1.5;
`;

const ValueTitle = styled.div`
  display: flex;
`;

interface IDurationSliderProps {
  title: string
  timeUnit: ITimeUnit | string
  controlledValue?: number
}

type IDurationSlider = IDurationSliderProps & ISlider;

const DurationSlider: React.FC<IDurationSlider> = (
  {
    max,
    min,
    defaultValue=0,
    title='',
    timeUnit,
    controlledValue,
    inputCallback,
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

  const labelValue = controlledValue ? controlledValue : selectedValue;
  const unit = isTimeUnit(timeUnit) ? getShortTextTimeUnit(labelValue, timeUnit) : timeUnit;

  return(
    <Container>
      <Headers>
        <Label htmlFor='duration-slider' labelText={title} />
        <ValueTitle>
          <ValueLabel htmlFor='duration-slider' labelText={`${labelValue}`} />
          <Unit>{unit}</Unit>
        </ValueTitle>
      </Headers>
      <SliderInput
        {
          ...props}
        id='duration-slider'
        max={max}
        min={min}
        defaultValue={defaultValue}
        onChangeCallback={handleSelectedValue}
      />
    </Container>
  );
};

export default DurationSlider;