import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Label from '../atoms/Label';
import { TypeFieldState } from '..';
import { removeAutoFillStyle } from '../../common';

const StyledInput = styled.input<{ fieldState : TypeFieldState }>`
  ${removeAutoFillStyle};

  font-family: var(--font-data);
  line-height: var(--common-height);

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

  &:disabled {
    cursor: not-allowed;
    color: var(--input-color-disabled);
  }
`;

const InputContainer = styled.div<{fieldState : TypeFieldState, hasAction?: boolean}>`
  display: flex;
  height: var(--common-height);
  padding: 0 8px;
  align-items: center;
  gap: 8px;
  position: relative;
  border-radius: 3px;
  
  ${({fieldState}) => css`
    border: 1px solid var(--input-border-${fieldState});
    background: var(--input-background-${fieldState});
    transition: 
      border var(--speed-normal) var(--easing-primary-in),
      background var(--speed-normal) var(--easing-primary-in);
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
  line-height: var(--common-height);
  color: var(--input-color-unit);
`;

const Container = styled.div<{ fieldState: string }>`
  position: relative;

  &:focus-within ${InputContainer} {
    transition: boxShadow var(--speed-fast) var(--easing-primary-in-out);
    box-shadow: 0 3px 3px var(--input-focused-shadow-color);
  }
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
  className,
  ...props
}) => {

 

  return (
    <Container className={className} fieldState={fieldState || 'default'}>
      <Label labelText={label} htmlFor={name || ''}>
        <InputContainer fieldState={fieldState || 'default'}>
          <StyledInput fieldState={fieldState || 'default'} type={type} placeholder={placeholder} defaultValue={defaultValue} {...props} />
          {unit ? <UnitKey>{unit}</UnitKey> : null}
        </InputContainer>
      </Label>

    </Container>
  );

};


export default SmallInput;