import React, { InputHTMLAttributes, useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import Label from '../atoms/Label';
import { TypeFieldState } from '..';
import { removeAutoFillStyle } from '../../common';

const StyledInput = styled.input<{ fieldState : TypeFieldState, padRight?: number }>`
  ${removeAutoFillStyle};

  font-family: var(--font-data);
  height: var(--common-height);
  font-size: 14px;
  color: var(--input-color-default);
  width: 100%;
  border-radius: 3px;
  padding: 0 8px;

  box-sizing: border-box;
  outline: none;
  
  ${({fieldState}) => css`
    border: 1px solid var(--input-border-${fieldState});
    background: var(--input-background-${fieldState});
  `};
  
  &::placeholder {
    color: var(--input-color-placeholder);
    font-style: italic;
  }

  ${p => p.padRight && css`
    padding-right: ${p.padRight + 17}px;
  `}

  &:disabled {
    cursor: not-allowed;
    color: var(--input-color-disabled);
  }
`;

const InputContainer = styled.div<{hasAction?: boolean}>`

  flex: 1;
  position: relative;

  ${({ hasAction }) => hasAction && css`
    ${StyledInput}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`;

const UnitKey = styled.div`
  position: absolute;
  right: 8px;
  bottom: 7px;
  font-family: var(--font-ui);
  font-size: 12px;
  color: var(--input-color-unit);
`;

const Container = styled.div<{ fieldState: string }>`
  position: relative;

  &:focus-within ${InputContainer} {
   
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

  const unitElement = useRef<HTMLDivElement>(null);
  const [unitElementWidth, setUnitElementWidth] = useState<number>(0);

  useEffect(() => {
    if(unitElement && unitElement.current){
      setUnitElementWidth(unitElement.current.clientWidth || 0);
    }
  }, [unitElement, setUnitElementWidth, unit]);

  return (
    <Container className={className} fieldState={fieldState || 'default'}>
      <Label labelText={label} htmlFor={name || ''}>
        <InputContainer>
          <StyledInput padRight={unitElementWidth} fieldState={fieldState || 'default'} type={type} placeholder={placeholder} defaultValue={defaultValue} {...props} />
          {unit ? <UnitKey ref={unitElement}>{unit}</UnitKey> : null}
        </InputContainer>
      </Label>

    </Container>
  );

};


export default SmallInput;