import React, { useRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterDropdownContainer from '../atoms/FilterDropdownContainer';
import DatePicker, { DateInterval, IDatePicker } from './DatePicker';
import FilterDropHandler, { FilterDropHandlerRef } from '../atoms/FilterDropHandler';

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
  onCancelCallback?: () => void
  onApplyCallback?:  (data: DateInterval | Date) => void
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
  cancelText = 'Cancel',
  applyText = 'Apply',
  hasApply = true,
  onCloseCallback = () => { },
  onUpdateCallback = () => { },
  onToggleCallback = () => { },
  onCancelCallback = () => { },
  onApplyCallback = () => { },
  ...props }) => {

  /**
   * This will keep the value of the picker when it updates so on close will send the most fresh value
   * without re-renders.
   */
  const pickerValue = useRef<DateInterval | Date | null>(null);
  const [mountedPicker, setMountedPicker] = useState<IMountPicker>({ initialValue: initialValue, isMount: true });

  const DropdownHandlerRef = useRef<FilterDropHandlerRef>(null);
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

    if (!hasApply && pickerValue.current && (pickerValue.current !== selected)) {
      onToggleCallback(pickerValue.current, isOpen);
    }

    /** Verify if the picker needs to be mounted again to force initialValue set in Datepicker Component */
    if (isOpen && (!mountedPicker.isMount)) {
      console.log('Toggle mount functionality was triggered');
      setMountedPicker((prev) => {
        return { ...prev, isMount: true };
      });
    }
  }, [hasApply, mountedPicker.isMount, onToggleCallback, selected]);

  const handleOnCancel = useCallback(() => {
    if (pickerValue.current && (pickerValue.current !== selected)) {
      pickerValue.current = selected === undefined ? null : selected;
      const validInitialValue = selected === null ? undefined : selected;
      setMountedPicker({ initialValue: validInitialValue, isMount: false });
    }
    onCancelCallback();
    DropdownHandlerRef.current?.cancelClose();
  }, [onCancelCallback, selected]);


  const handleOnApply = useCallback(() => {

    if (pickerValue.current && (pickerValue.current !== selected)) {
      onApplyCallback(pickerValue.current);
    }
    DropdownHandlerRef.current?.cancelClose();
  },[onApplyCallback, selected]);

  /**
   * Caching the selected null /clear flag for this picker from parent component
   */
  useEffect(() => {
    let canUnmount = true;

    if (canUnmount && selected === null && pickerValue.current !== null) {
      pickerValue.current = selected;
      setMountedPicker({ initialValue: undefined, isMount: false });
    }
    return () => {
      canUnmount = false;
    };
  }, [selected]);

  return (
    <Container {...props}>
      <FilterDropHandler
        ref={DropdownHandlerRef}
        minWidth={MIN_WIDTH}
        minHeight={MIN_HEIGHT}
        onCloseCallback={handleOnClose}
        onToggleOpenCallback={handleOnToggle}
        noCloseOnClickOutside={hasApply}
        {...{ buttonIcon, buttonText, disabled }}
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
                cancelText,
                applyText,
                hasApply,
              }}
              updateCallback={handleUpdateCallback}
              cancelCallback={handleOnCancel}
              applyCallback={handleOnApply}
              hasEmptyValue
              initialValue={mountedPicker.initialValue}
            />)}
        </FilterDropdownContainer>
      </FilterDropHandler>
    </Container>
  );
};

export default DropdownDatePicker;