import React, { InputHTMLAttributes, useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import Label from '../atoms/Label';
import { TypeFieldState } from '..';



const StyledInput = styled.input<{ fieldState : TypeFieldState, padRight?: number }>`
  height: 100%;
  min-height: 30px; // THEME
  font-family: ${({ theme }) => theme.fontFamily.data };

  width: 100%;
  border-radius: 3px;
  border: 1px solid rgb(217, 218, 217);
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  outline: none;

  color: hsl(207, 5%, 57%);
  font-size: 14px; // THEME
  font-weight: 400;

  &::placeholder {
    color: hsla(0, 0%, 46%, 0.5);
    font-style: italic;
  }

  ${p => p.padRight  && css`
    padding-right: ${p.padRight + 17}px;
  `}

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
  right: 10px;
  bottom: 0;
  top:0;
  font-family: ${({ theme }) => theme.fontFamily.ui };
  font-size: 12px;
  color: #99a1a3;
  line-height:30px;
`;

const Container = styled.div<{ fieldState: string }>`

  --state-icon: ${(props) => props.theme.tmp?.input.states[props.fieldState].icon || 'TODO!'};
  --state-icon-color: ${(props) => props.theme.tmp?.input.states[props.fieldState].iconColor || '#F0F'};

  --state-background-color: ${({ theme, fieldState }) => theme.colors.form.feedback[fieldState]?.backgroundColor || theme.colors.form.feedback.basic.backgroundColor};
  --state-border-color: ${({ theme, fieldState }) => theme.colors.form.input[fieldState].normal.borderColor};
  --state-focused-border-color: ${({ theme, fieldState }) => theme.colors.form.input[fieldState].focused?.borderColor || 'none'};
  --state-focused-box-shadow: ${({ theme, fieldState }) => theme.colors.form.input[fieldState].focused?.boxShadow || 'none'};

  display: flex;
  position: relative;

  ${StyledInput}{

    // icon-color: var(--state-icon-color);
    border-color: var(--state-border-color);

    &:focus {
      border-color: var(--state-focused-border-color);
    }

    ${({ fieldState }) => ['default', 'disabled'].indexOf(fieldState) === -1 && css`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `}
  }

  &:focus-within ${InputContainer} {
    box-shadow: var(--state-focused-box-shadow);
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