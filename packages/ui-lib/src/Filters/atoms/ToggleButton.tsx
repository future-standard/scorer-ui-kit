import React, { useCallback } from 'react';
import { IToggleOption } from '../FilterTypes';
import FilterButton from './FilterButton';
import { FilterButtonDesign } from '../FilterTypes';

type IToggleButton = {
  options: IToggleOption[]
  categoryLabel: String
  selectedIndex: number
  design?: FilterButtonDesign
  onToggle: (index: number, value: string | number) => void
}

const ToggleButton: React.FC<IToggleButton> = ({ options, categoryLabel, selectedIndex, design = 'basic', onToggle, ...props }) => {

  const onToggleCallback = useCallback((currentIndex: number) => {
    const selected = currentIndex === 1 ? 0 : 1;
    onToggle(selected, options[selected].value);

  }, [onToggle, options]);

  if (selectedIndex !== 0 && selectedIndex !== 1) return null;

  return (
    <FilterButton icon={options[selectedIndex].icon} onClick={() => onToggleCallback(selectedIndex)} {...{design}} {...props}>
      { categoryLabel && `${categoryLabel} : `}
      {`${options[selectedIndex].text}`}
    </FilterButton>
  );
};

export default ToggleButton;