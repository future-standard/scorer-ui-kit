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

  ${({ isChecked, disabled }) => css`
    border-color: var(--input-toggle-unchecked-border-color);

    ${!disabled && css`
      &:hover {
        cursor: pointer;
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }
    `};

    ${isChecked && !disabled && css`
      border-color: var(--input-toggle-checked-border-color);
      ${InnerRadio} {
        background-color: var(--input-toggle-checked-background-color);
      }
    `};

    ${isChecked && !disabled && css`
      &:hover {
        border-color: var(--input-toggle-checked-hover-border-color);
        ${InnerRadio} {
          background-color: var(--input-toggle-checked-hover-background-color);
        }
      }
    `};

    ${isChecked && disabled && css`
      cursor: not-allowed;
      border-color: var(--input-toggle-checked-disabled-border-color);
      ${InnerRadio} {
        background-color: var(--input-toggle-checked-disabled-background-color);
      }
    `};

    ${!isChecked && disabled && css`
      cursor: not-allowed;
      border-color: var(--input-toggle-unchecked-disabled-border-color);
      ${InnerRadio} {
        background-color: var(--input-toggle-unchecked-disabled-background-color);
      }
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