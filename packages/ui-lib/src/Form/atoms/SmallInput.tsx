import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Label from '../atoms/Label';
import { TypeFieldState } from '..';
import { removeAutoFillStyle } from '../../common';

const StyledInput = styled.input<{ fieldState : TypeFieldState }>`
  ${removeAutoFillStyle};

  font-family: var(--font-data);
  line-height: var(--input-compact-height);

  font-size: 14px;
  flex: 1;
  color: var(--input-color-default);
  width: 100%;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: var(--input-color-placeholder);
    font-style: italic;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };

  &:disabled {
    cursor: not-allowed;
    color: var(--input-color-disabled);
  }
`;

const InputContainer = styled.div<{fieldState : TypeFieldState, hasAction?: boolean}>`
  display: flex;
  height: var(--input-compact-height);
  padding: 0 8px;
  align-items: center;
  gap: 8px;
  position: relative;
  border-radius: 3px;

  ${({fieldState}) => css`
    border: 1px solid var(--input-${fieldState}-border-color);
    background: var(--input-${fieldState}-background-color);
    transition:
      border var(--speed-normal) var(--easing-primary-out),
      background-color var(--speed-normal) var(--easing-primary-out);
  `};

  ${({ hasAction }) => hasAction && css`
    ${StyledInput}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`;

const UnitKey = styled.div`
  flex: 0 1;
  font-size: 12px;
  font-family: var(--font-ui);
  color: var(--input-color-unit);
  margin-top: 1px;
  white-space: nowrap;
`;

const Container = styled.div<{ fieldState: string }>`
  position: relative;

  ${({fieldState}) => fieldState && css`
    &:focus-within ${InputContainer} {
      transition: boxShadow var(--speed-fast) var(--easing-primary-in-out);
      box-shadow: 0 3px 3px var(--input-${fieldState}-focused-shadow-color, var(--input-${fieldState}-shadow-color));
    }
  `};
`;

interface OwnProps {
  fieldState?: TypeFieldState;
  label: string
  unit?: string
}

type Props = OwnProps & InputHTMLAttributes<HTMLInputElement>

const SmallInput : React.FC<Props> = ({
  unit,
  label,
  name,
  type = 'text',
  placeholder = '',
  defaultValue,
  fieldState = 'default',
  required = false,
  className,
  ...props
}) => {



  return (
    <Container className={className} fieldState={fieldState || 'default'}>
      <Label labelText={label} htmlFor={name || ''} {...{required}}>
        <InputContainer fieldState={fieldState || 'default'}>
          <StyledInput fieldState={fieldState || 'default'} type={type} placeholder={placeholder} defaultValue={defaultValue} {...props} />
          {unit ? <UnitKey>{unit}</UnitKey> : null}
        </InputContainer>
      </Label>

    </Container>
  );

};


export default SmallInput;