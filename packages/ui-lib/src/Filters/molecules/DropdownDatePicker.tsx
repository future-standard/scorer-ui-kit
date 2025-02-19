import React, { useRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterDropdownContainer from '../atoms/FilterDropdownContainer';
import DatePicker, { DateInterval, IDatePicker } from './DatePicker';
import FilterDropHandler from '../atoms/FilterDropHandler';

const MIN_WIDTH = 470;
const MIN_HEIGHT = 360;

const Container = styled.div``;

interface IMountPicker {
  initialValue: DateInterval | Date | undefined
  isMount: boolean
}

export interface IDropdownDatePicker extends IDatePicker {
  buttonIcon: string
  buttonText: string
  disabled?: boolean
  selected?: DateInterval | Date | null;
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
  selected,
  dateTimeTextUpper,
  dateTimeTextLower,
  timeZoneTitle,
  timeZoneValueTitle,
  lang,
  hasEmptyValue,
  availableRange,
  contentDays,
  onCloseCallback = () => { },
  onUpdateCallback = () => { },
  onToggleCallback = () => { },
  ...props }) => {

  /**
   * This will keep the value of the picker when it updates so on close will send the most fresh value
   * without re-renders.
   */
  const pickerValue = useRef<DateInterval | Date | null>(null);
  const [mountedPicker, setMountedPicker] = useState<IMountPicker>({ initialValue: initialValue, isMount: true });

  const handleUpdateCallback = useCallback((data: DateInterval | Date) => {
    pickerValue.current = data;
    onUpdateCallback(data);
  }, [onUpdateCallback]);

  const handleOnClose = useCallback(() => {
    if (pickerValue.current && (pickerValue.current !== selected)) {
      onCloseCallback(pickerValue.current);
    }
  }, [onCloseCallback, selected]);

  const handleOnToggle = useCallback((isOpen: boolean) => {

    if (pickerValue.current && (pickerValue.current !== selected)) {
      onToggleCallback(pickerValue.current, isOpen);
    }

    /** mounting again and clearing the last value sent from picker */
    if (!isOpen && (pickerValue.current !== null) && (!mountedPicker.isMount)) {
      pickerValue.current = null;
      setMountedPicker({ initialValue: undefined, isMount: true });
    }
  }, [mountedPicker, onToggleCallback, selected]);

  /**
   * Caching the selected null /clear flag for this picker from parent component
   */
  useEffect(() => {
    let canReset = true;

    if (canReset && selected === null && pickerValue.current !== null) {
      setMountedPicker({ initialValue: undefined, isMount: false });
    }
    return () => {
      canReset = false;
    };
  }, [selected]);

  return (
    <Container {...props}>
      <FilterDropHandler
        {...{ buttonIcon, buttonText, disabled }}
        minWidth={MIN_WIDTH}
        minHeight={MIN_HEIGHT}
        onCloseCallback={handleOnClose}
        onToggleOpenCallback={handleOnToggle}
      >
        <FilterDropdownContainer>
          {mountedPicker.isMount && (
            <DatePicker
              {...{
                dateMode,
                timeMode,
                dateTimeTextUpper,
                dateTimeTextLower,
                timeZoneTitle,
                timeZoneValueTitle,
                lang,
                availableRange,
                contentDays,
              }}
              updateCallback={handleUpdateCallback}
              hasEmptyValue
              initialValue={mountedPicker.initialValue}
            />)}
        </FilterDropdownContainer>
      </FilterDropHandler>
    </Container>
  );
};

export default DropdownDatePicker;