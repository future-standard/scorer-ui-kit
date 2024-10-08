import React, { useCallback, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const InnerRadio = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`;

const OuterRadio = styled.div<{ isChecked: boolean, disabled: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  user-select: none;

  ${({ theme: { styles }, isChecked, disabled }) => styles && css`
    border-color: var(--input-selection-control-default);

    ${!disabled && css`
      &:hover {
        cursor: pointer;
        border-color: var(--input-selection-control-selected);
      }
    `};

    ${isChecked && !disabled && css`
      border-color: var(--input-selection-control-selected);
      ${InnerRadio} {
        background-color: var(--input-selection-control-selected);
      }
    `};

    ${isChecked && !disabled && css`
      &:hover {
        border-color: var(--input-selection-control-selected);
        ${InnerRadio} {
          background-color: var(--input-selection-control-selected);
        }
      }
    `};

    ${isChecked && disabled && css`
      cursor: not-allowed;
      border-color: var(--input-selection-control-selected-disabled);
      ${InnerRadio} {
        background-color: var(--input-selection-control-selected-disabled);
      }
    `};

    ${!isChecked && disabled && css`
      cursor: not-allowed;
      border-color: var(--grey-6);
    `}
  `};
`;

const HiddenInput = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
  opacity: 0;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
`;

interface OwnProps {
  currentChecked?: number | string
  onChangeCallback?: (value: number | string) => void
}

type IRadioButton = OwnProps & InputHTMLAttributes<HTMLInputElement>

const RadioButton: React.FC<IRadioButton> = ({
  id,
  value,
  name,
  currentChecked,
  disabled = false,
  required,
  onChangeCallback = () => { },
}) => {

  const handleChange = useCallback((e) => {
    const checkedValue = e.target.value;
    onChangeCallback(checkedValue);
  }, [onChangeCallback]);

  const isChecked = (currentChecked !== undefined) ? (currentChecked === value) : false;

  return (
    <Container>
      <HiddenInput
        type='radio'
        {...{ id, name, disabled, required, value }}
        checked={isChecked}
        onChange={handleChange}
      />
      <OuterRadio {...{ isChecked, disabled }}>
        <InnerRadio />
      </OuterRadio>
    </Container>
  );
};

export default RadioButton;