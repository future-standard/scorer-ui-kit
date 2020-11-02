import React, { InputHTMLAttributes, useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import Label from '../atoms/Label';
import { TypeFieldState } from '..';



const StyledInput = styled.input<{ fieldState : TypeFieldState, padRight?: number }>`
  ${({theme, fieldState}) => css`
    min-height: 30px;
    font-family: ${theme.fontFamily.data};
    border: 1px solid ${theme.styles.form.input[fieldState].normal.borderColor};
  `};

  height: 100%;
  width: 100%;
  border-radius: 3px;

  padding: 0 22px 0 10px;
  box-sizing: border-box;
  outline: none;

  ${({theme: {typography}}) => css`
    ${typography.form.input.value.compact};
    &::placeholder {
      ${typography.form.input.placeholder.compact};
    }
  `};

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

  display: flex;
  position: relative;

  ${StyledInput}{
    ${({theme, fieldState}) => theme.styles.form.input[fieldState].compact};

    &:focus {}

    ${({ fieldState }) => ['default', 'disabled'].indexOf(fieldState) === -1 && css`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `}
  }

  &:focus-within ${InputContainer} {
    border-color: ${({theme, fieldState}) => theme.styles.form.input[fieldState].focused.borderColor};
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