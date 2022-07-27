import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import BasicSearchInput, { IBasicSearchInput } from '../atoms/BasicSearchInput';

// Adding default value thinking of query params or other outside initialized value
interface IDebouncedSearcher extends IBasicSearchInput {
  defaultValue?: string;
  onDebouncedChange?: (newValue: string) => void
}

const DebouncedSearcher: React.FC<IDebouncedSearcher> = ({
  onDebouncedChange = () => { },
  defaultValue,
  ...props
}) => {
  const [typedValue, setTypedValue] = useState<string>(defaultValue || '');

  const debounceChange = useRef(debounce(newValue => updateChange(newValue), 600)).current;

  const updateChange = useCallback((newValue: string) => {
    onDebouncedChange(newValue);
  }, [onDebouncedChange]);

  const updateTyped = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setTypedValue(newValue);
    debounceChange(newValue);
  }, [debounceChange]);

  useEffect(() => {
    if (defaultValue) {
      setTypedValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <BasicSearchInput {...props} onChange={updateTyped} value={typedValue} />
  );
};

export default DebouncedSearcher;