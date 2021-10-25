import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import FilterDropdownContainer from '../atoms/FilterDropdownContainer';
import DatePicker, { DateInterval, IDatePicker } from './DatePicker';
import FilterDropHandler from '../atoms/FilterDropHandler';

const MIN_WIDTH = 470;
const MIN_HEIGHT = 360;

const Container = styled.div``;

export interface IDropdownDatePicker extends IDatePicker {
  buttonIcon: string
  buttonText: string
  disabled?: boolean
  onCloseCallback?: (value: DateInterval | Date | null) => void
  onUpdateCallback?: (value: DateInterval | Date | null) => void
  onToggleCallback?: (value: DateInterval | Date | null, isOpen: boolean) => void
}

const DropdownDatePicker: React.FC<IDropdownDatePicker> = ({
  buttonIcon,
  buttonText,
  disabled,
  initialValue,
  dateMode,
  timeMode,
  onCloseCallback = () => { },
  onUpdateCallback = () => { },
  onToggleCallback = () => { },
  ...props }) => {

  const pickerValue = useRef<DateInterval | Date | null>(null);

  const handleUpdateCallback = useCallback((data: DateInterval | Date) => {
    pickerValue.current = data;
    onUpdateCallback(data);
  }, [onUpdateCallback]);

  const handleOnClose = useCallback(() => {
    if (pickerValue.current) {
      onCloseCallback(pickerValue.current);
    }
  }, [onCloseCallback]);

  const handleOnToggle = useCallback((isOpen: boolean) => {
    if (pickerValue.current) {
      onToggleCallback(pickerValue.current, isOpen);
    }
  }, [onToggleCallback]);

  return (
    <Container {...props}>
      <FilterDropHandler
        {...{ buttonIcon, buttonText, disabled }}
        min_width={MIN_WIDTH}
        min_height={MIN_HEIGHT}
        onCloseCallback={handleOnClose}
        onToggleOpenCallback={handleOnToggle}
      >
        <FilterDropdownContainer>
          <DatePicker
            {...{ initialValue, dateMode, timeMode }}
            updateCallback={handleUpdateCallback}
          />
        </FilterDropdownContainer>
      </FilterDropHandler>
    </Container>
  );
};

export default DropdownDatePicker;