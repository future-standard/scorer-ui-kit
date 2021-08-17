import React from 'react';
import styled, { css } from 'styled-components';
import Label from './Label';
import Checkbox from './Checkbox';
import { IInputOptionsType } from '..';

const Container = styled.div<{ disabled: boolean, selected: boolean }>`
  display: flex;

  &:hover {
    cursor: pointer;
    background-color: pink;
    ${({theme}) => theme && css`
      color: ${theme.styles.form.checkbox.checked.hover.backgroundColor};
    `};
  }

`;

const renderOption = (
  optionType: IInputOptionsType,
  selected: boolean,
  disabled: boolean,
) => {
  switch (optionType) {
    case 'radio':
      return <input type='radio' {...{ disabled }} checked={selected} />

    default:
      return <Checkbox {...{ disabled }} checked={selected} />
  }

};

interface IFilterOption {
  id: string
  label: string
  optionType?: IInputOptionsType
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
}

const FilterOption: React.FC<IFilterOption> = ({
  id,
  label,
  optionType = "text",
  selected = false,
  disabled = false,
  onClick = () => { }
}) => {
  return (
    <Container {...{ onClick, disabled, selected}}>
      {(optionType !== 'text') && renderOption(optionType, selected, disabled)}
      <Label htmlFor={id} labelText={label} />
    </Container>
  );
};

export default FilterOption;