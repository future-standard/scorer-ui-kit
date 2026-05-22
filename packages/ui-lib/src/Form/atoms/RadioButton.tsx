import type React from 'react';
import { type InputHTMLAttributes, useCallback } from 'react';
import styled, { css } from 'styled-components';

const InnerRadio = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`;

const OuterRadio = styled.div<{ $isChecked: boolean; $disabled: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  pointer-events: none;
  user-select: none;

  ${({ $isChecked, $disabled }) => css`
    border-color: var(--input-toggle-unchecked-border-color);

    ${
      $isChecked &&
      !$disabled &&
      css`
      border-color: var(--input-toggle-checked-border-color);
      ${InnerRadio} {
        background-color: var(--input-toggle-checked-background-color);
      }
    `
    };

    ${
      $isChecked &&
      $disabled &&
      css`
      border-color: var(--input-toggle-checked-disabled-border-color);
      ${InnerRadio} {
        background-color: var(--input-toggle-checked-disabled-background-color);
      }
    `
    };

    ${
      !$isChecked &&
      $disabled &&
      css`
      border-color: var(--input-toggle-unchecked-disabled-border-color);
      ${InnerRadio} {
        background-color: var(--input-toggle-unchecked-disabled-background-color);
      }
    `
    }
  `};
`;

const HiddenInput = styled.input`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 1;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) + ${OuterRadio} {
    border-color: var(--input-toggle-unchecked-hover-border-color);
  }

  &:checked:hover:not(:disabled) + ${OuterRadio} {
    border-color: var(--input-toggle-checked-hover-border-color);

    ${InnerRadio} {
      background-color: var(--input-toggle-checked-hover-background-color);
    }
  }
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
  currentChecked?: number | string;
  onChangeCallback?: (value: number | string) => void;
}

type IRadioButton = OwnProps & InputHTMLAttributes<HTMLInputElement>;

const RadioButton: React.FC<IRadioButton> = ({
  id,
  value,
  name,
  currentChecked,
  disabled = false,
  required,
  onChangeCallback = () => {},
  onBlur,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const checkedValue = e.target.value;
      onChangeCallback(checkedValue);
    },
    [onChangeCallback]
  );

  const isChecked = currentChecked !== undefined ? currentChecked === value : false;

  return (
    <Container>
      <HiddenInput
        type='radio'
        {...{ id, name, disabled, required, value }}
        checked={isChecked}
        onChange={handleChange}
        onBlur={onBlur}
      />
      <OuterRadio $isChecked={isChecked} $disabled={disabled}>
        <InnerRadio />
      </OuterRadio>
    </Container>
  );
};

export default RadioButton;
