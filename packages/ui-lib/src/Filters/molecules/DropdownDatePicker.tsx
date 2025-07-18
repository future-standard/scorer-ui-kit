import React, { useRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterDropdownContainer from '../atoms/FilterDropdownContainer';
import DatePicker from './DatePicker';
import FilterDropHandler, { FilterDropHandlerRef } from '../atoms/FilterDropHandler';
import { areDatesEqual } from '../../helpers';
import { IDateInterval, IDatePicker } from '..';

const MIN_WIDTH = 470;
const MIN_HEIGHT = 360;

const Container = styled.div``;

interface IMountPicker {
  initialValue: IDateInterval | Date | undefined
  isMount: boolean
}

export interface IDropdownDatePicker extends IDatePicker {
  buttonIcon: string
  buttonText: string
  disabled?: boolean
  selected?: IDateInterval | Date | null;
  onCloseCallback?: (value: IDateInterval | Date | null) => void
  onUpdateCallback?: (value: IDateInterval | Date | null) => void
  onToggleCallback?: (value: IDateInterval | Date | null, isOpen: boolean) => void
  onCancelCallback?: () => void
  onApplyCallback?:  (data: IDateInterval | Date) => void
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
  const pickerValue = useRef<IDateInterval | Date | null>(null);
  const [mountedPicker, setMountedPicker] = useState<IMountPicker>({ initialValue: initialValue, isMount: true });
  const [disableApply, setDisableApply] = useState(false);

  const DropdownHandlerRef = useRef<FilterDropHandlerRef>(null);
  const handleUpdateCallback = useCallback((data: IDateInterval | Date) => {
    pickerValue.current = data;
    onUpdateCallback(data);
    setDisableApply(areDatesEqual(selected, data));
  }, [onUpdateCallback, selected]);

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
    DropdownHandlerRef.current?.imperativeClose();
  }, [onCancelCallback, selected]);


  const handleOnApply = useCallback(() => {
    if (pickerValue.current && (pickerValue.current !== selected)) {
      onApplyCallback(pickerValue.current);
    }
    DropdownHandlerRef.current?.imperativeClose();
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
              disableApply={disableApply}
            />)}
        </FilterDropdownContainer>
      </FilterDropHandler>
    </Container>
  );
};

export default DropdownDatePicker;