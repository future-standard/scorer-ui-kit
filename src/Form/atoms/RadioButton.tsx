import React, { useState, useCallback, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const InnerRadio = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`;

const OuterRadio = styled.label<{ isChecked: boolean, disabled: boolean, parentHover?: boolean }>`
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

  ${({ theme, isChecked, disabled, parentHover }) => theme && css`
    border-color: ${theme.styles.form.checkbox.unchecked.default.borderColor};

    ${!disabled && css`
      &:hover {
        cursor: pointer;
        border-color: ${theme.styles.form.checkbox.unchecked.hover.borderColor};
      }
    `};

    ${!disabled && (parentHover !== undefined) && parentHover && css`
      cursor: pointer;
      border-color: ${theme.styles.form.checkbox.unchecked.hover.borderColor};
    `};

    ${isChecked && !disabled && css`
      border-color: ${theme.styles.form.checkbox.checked.default.backgroundColor};
      ${InnerRadio} {
        background-color: ${theme.styles.form.checkbox.checked.default.backgroundColor};
      }
    `};

    ${isChecked && !disabled && css`
      &:hover {
        border-color: ${theme.styles.form.checkbox.checked.hover.backgroundColor};
        ${InnerRadio} {
          background-color: ${theme.styles.form.checkbox.checked.hover.backgroundColor};
        }
      }
    `};

    ${isChecked && !disabled && (parentHover !== undefined) && parentHover && css`
      border-color: ${theme.styles.form.checkbox.checked.hover.backgroundColor};
      ${InnerRadio} {
        background-color: ${theme.styles.form.checkbox.checked.hover.backgroundColor};
      }

    `};

    ${isChecked && disabled && css`
      cursor: not-allowed;
      border-color: ${theme.styles.form.checkbox.checked.disabled.backgroundColor};
      ${InnerRadio} {
        background-color: ${theme.styles.form.checkbox.checked.disabled.backgroundColor};
      }
    `};

    ${!isChecked && disabled && css`
      cursor: not-allowed;
      border-color: ${theme.styles.form.checkbox.unchecked.disabled.borderColor};
      ${InnerRadio} {
        background-color: ${theme.styles.form.checkbox.unchecked.disabled.backgroundColor};
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
  parentHover?: boolean
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
  parentHover,
  onChangeCallback = () => { },
}) => {

  const handleChange = useCallback((e) => {
    const checkedValue = e.target.value;
    onChangeCallback(checkedValue);
  }, []);

  const isChecked = (currentChecked !== undefined) ? (currentChecked == value) : false;

  return (
    <Container>
      <HiddenInput
        type='radio'
        {...{ id, name, disabled, required, value }}
        checked={isChecked}
        onChange={handleChange}
      />
      <OuterRadio {...{ isChecked, disabled, parentHover }} htmlFor={id}>
        <InnerRadio />
      </OuterRadio>
    </Container>
  );
};

export default RadioButton;