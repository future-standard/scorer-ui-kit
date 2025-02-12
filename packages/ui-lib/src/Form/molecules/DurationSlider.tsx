import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ITimeUnit } from '../../index';
import SliderInput, { ISlider } from '../atoms/SliderInput';
import { getShortTextTimeUnit, isTimeUnit } from '../../helpers';
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
  font-family: var(--font-ui);
  margin-bottom: 0;
`;

const unitStyle = css`
  font-family: var(--font-data);
  color: var(--grey-a11);
  font-style: italic;
  font-size: 12px;
  line-height: 1.5;
`;

const Unit = styled.div`
  ${unitStyle};
`;

const ValueTitle = styled.div`
  display: flex;
`;

const TitleTemplate = styled.div`
  display: flex;
  align-items: center;
  ${unitStyle};
  span {
    font-style: normal;
  }
`;

const getTimeValues = (value: number, unit: ITimeUnit) => {
  switch (unit) {
    case 'seconds':
      return {
        hours: Math.floor(value / 3600),
        minutes: Math.floor((value % 3600) / 60),
        seconds: value % 60
      };
    case 'minutes':
      return {
        hours: Math.floor(value / 60),
        minutes: value % 60,
        seconds: 0
      };
    default:
      return {
        hours: value,
        minutes: 0,
        seconds: 0
      };
  }
};

const getValueTitle = (value: number, timeUnit: ITimeUnit | string, timeFormat?: string) => {
  // Handle default case
  if (!timeFormat || !isTimeUnit(timeUnit)) {
    const unit = isTimeUnit(timeUnit) ? getShortTextTimeUnit(value, timeUnit) : timeUnit;
    return (
      <ValueTitle>
        <ValueLabel htmlFor='duration-slider' labelText={`${value}`} />
        <Unit>{unit}</Unit>
      </ValueTitle>
    );
  }

  const timeValues = getTimeValues(value, timeUnit as ITimeUnit);

  const updatedTitle = timeFormat
    .split(/(\[H+\]|\[M+\]|\[S+\])/)
    .map((part, index) => {
      switch (part) {
        case '[HH]':
          return <span key={index}>{timeValues.hours.toString().padStart(2, '0')}</span>;
        case '[H]':
          return <span key={index}>{timeValues.hours}</span>;
        case '[MM]':
          return <span key={index}>{timeValues.minutes.toString().padStart(2, '0')}</span>;
        case '[M]':
          return <span key={index}>{timeValues.minutes}</span>;
        case '[SS]':
          return <span key={index}>{timeValues.seconds.toString().padStart(2, '0')}</span>;
        case '[S]':
          return <span key={index}>{timeValues.seconds}</span>;
        default: {
          const preserveSpacesInPart = part.replace(/\s+/g, '\u00A0');
          return preserveSpacesInPart;
        }
      }
    });

  return (
    <ValueTitle>
      <TitleTemplate>{updatedTitle}</TitleTemplate>
    </ValueTitle>
  );
};

interface IDurationSliderProps {
  title: string
  timeUnit: ITimeUnit | string
  controlledValue?: number
  timeFormat?: string // [H]Hours [M]Minutes [S]Seconds -> 4Hours 10Minutes 30Seconds // [HH]時 [MM]分 [SS]秒 -> 4時 10分 30秒
}

type IDurationSlider = IDurationSliderProps & ISlider;

const DurationSlider: React.FC<IDurationSlider> = (
  {
    max,
    min,
    defaultValue = 0,
    title = '',
    timeUnit,
    controlledValue,
    inputCallback,
    timeFormat,
    ...props
  }
) => {

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelectedValue = useCallback((value: number) => {
    if (inputCallback) {
      inputCallback(value);
    }
    setSelectedValue(value);
  }, [inputCallback]);

  const labelValue = controlledValue ? controlledValue : selectedValue;

  return (
    <Container>
      <Headers>
        <Label htmlFor='duration-slider' labelText={title} />
        {getValueTitle(labelValue, timeUnit, timeFormat)}
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