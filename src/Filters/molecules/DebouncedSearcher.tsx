import debounce from 'lodash.debounce';
import React, { useCallback, useRef, useState } from 'react';
import { ISearchFilter } from '..';
import BasicSearchInput from '../../Misc/atoms/BasicSearchInput';


const DebounceSearcher: React.FC<ISearchFilter> = ({
  onDebouncedChange = () => { },
  ...props
}) => {
  const [typedValue, setTypedValue] = useState('');

  const debounceChange = useRef(debounce(newValue => updateChange(newValue), 600)).current;

  const updateChange = useCallback((newValue: string) => {
    onDebouncedChange(newValue);
  }, [onDebouncedChange]);

  const updateTyped = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    console.log('updating', newValue);
    setTypedValue(newValue);
    debounceChange(newValue);
  }, [debounceChange]);

  return (
    <BasicSearchInput {...props} onChange={updateTyped} value={typedValue} />
  );
};

export default DebounceSearcher;