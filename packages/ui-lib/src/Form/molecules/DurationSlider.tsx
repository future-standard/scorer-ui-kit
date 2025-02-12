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

const getValueTitle = (value: number, timeUnit: ITimeUnit | string, valueTitleTemplate?: string) => {
  // Handle default case
  if (!valueTitleTemplate || !isTimeUnit(timeUnit)) {
    const unit = isTimeUnit(timeUnit) ? getShortTextTimeUnit(value, timeUnit) : timeUnit;
    return (
      <ValueTitle>
        <ValueLabel htmlFor='duration-slider' labelText={`${value}`} />
        <Unit>{unit}</Unit>
      </ValueTitle>
    );
  }

  const timeValues = getTimeValues(value, timeUnit as ITimeUnit);

  const updatedTitle = valueTitleTemplate
    .split(/(\[HR\]|\[MIN\]|\[SEC\])/)
    .map((part, index) => {
      switch (part) {
        case '[HR]':
          return <span key={index}>{timeValues.hours}</span>;
        case '[MIN]':
          return <span key={index}>{timeValues.minutes}</span>;
        case '[SEC]':
          return <span key={index}>{timeValues.seconds}</span>;
        default: {
          // Preserve whitespace by using a non-breaking space for empty strings
          const keepSpaceInPart = part.replace(' ', '\u00A0');
          return keepSpaceInPart;
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
  valueTitleTemplate?: string // [HR] [MIN] [SEC] -> [12]Hours [30]Minutes [15]Seconds OR 12:30:15
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
    valueTitleTemplate,
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
        {getValueTitle(labelValue, timeUnit, valueTitleTemplate)}
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