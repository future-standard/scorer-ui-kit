import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';
import { IInputOptionsType, TypeButtonSizes } from '..';

const StyledCheckbox = styled(Checkbox)``;

const StyledLabel = styled.label<{ buttonSize: TypeButtonSizes }>`
  font-family: ${({ theme }) => theme.fontFamily.data};
  display: block;
  color: hsl(0, 0%, 56%);
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
  user-select: none;
  pointer-events: none;

  ${({ buttonSize }) => buttonSize && css`
    ${buttonSize === 'xsmall' && css`
      font-size: 12px;
      margin-left: 10px;
    `};

    ${buttonSize === 'normal' && css`
      font-size: 16px;
      margin-left: 17px;
    `};

    ${buttonSize === 'large' && css`
      font-size: 18px;
      margin-left: 20px;
    `};
  `};
`;

const Container = styled.div<{ disabled: boolean, selected: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  ${({ theme, selected }) => theme && css`

    &:hover {
      cursor: pointer;
      color: pink;
      ${StyledLabel} {
        color: ${theme.styles.form.checkbox.checked.hover.backgroundColor};
      }
    }

    ${selected && css`
      ${StyledLabel} {
        color: ${theme.styles.form.checkbox.checked.default.backgroundColor};
      }
    `};

  `};
`;

const renderOption = (
  id: string,
  optionType: IInputOptionsType,
  selected: boolean,
  disabled: boolean,
  value: string | number,
  parentHover: boolean
) => {
  switch (optionType) {
    case 'radio':
      return <RadioButton {...{ id, disabled, value, parentHover }} currentChecked={selected ? value : undefined} />;

    default:
      return <StyledCheckbox {...{ id, disabled, parentHover }} checked={selected} />;
  }

};

interface IFilterOption {
  id: string
  label: string
  value: string |number
  optionType?: IInputOptionsType
  buttonSize?: TypeButtonSizes
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
}

const FilterOption: React.FC<IFilterOption> = ({
  id,
  label,
  value,
  optionType = "text",
  selected = false,
  disabled = false,
  buttonSize = 'small',
  onClick = () => { },
  ...props
}) => {

  const [parentHover, setParentHover] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setParentHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setParentHover(false);
  }, []);

  return (

    <Container
      {...{ onClick, disabled, selected, id }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {(optionType !== 'text') && renderOption(id, optionType, selected, disabled, value, parentHover)}
      <StyledLabel htmlFor={id} {...{ buttonSize }}>{label}</StyledLabel>
    </Container>
  );
};

export default FilterOption;