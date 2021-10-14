import React from 'react';
import styled from 'styled-components';
import FilterDropdownContainer from '../atoms/FilterDropdownContainer';
import DatePicker, { IDatePicker } from './DatePicker';
import FilterDropHandler from '../atoms/FilterDropHandler';

const MIN_WIDTH = 470;
const MIN_HEIGHT = 360;

const Container = styled.div``;

export interface IDropdownDatePicker extends IDatePicker {
  buttonIcon: string
  buttonText: string
  disabled?: boolean
}

const DropdownDatePicker: React.FC<IDropdownDatePicker> = ({
    buttonIcon,
    buttonText,
    disabled,
    initialValue,
    dateMode,
    timeMode,
    updateCallback,
    ...props }) => {
  return (
    <Container {...props}>
      <FilterDropHandler {...{buttonIcon, buttonText, disabled}} min_width={MIN_WIDTH} min_height={MIN_HEIGHT}>
        <FilterDropdownContainer>
          <DatePicker {...{initialValue, dateMode, timeMode, updateCallback}} />
        </FilterDropdownContainer>
      </FilterDropHandler>
    </Container>
  );
};

export default DropdownDatePicker;