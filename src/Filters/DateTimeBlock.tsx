import React from 'react';
import styled, { css } from 'styled-components';
import {format } from 'date-fns'

import Icon from '../Icons/Icon';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
  `}
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #57b1fa;
  border-bottom: #f1f1f1 1px solid;

`

const Item = styled.div`
  padding: 12px;
  display: flex;
  justify-content: left;
`

const IconWrap = styled.div`
  flex: 0 0 40px;
`
const InputWrap = styled.div`
  flex: 1;
`

const Input = styled.input<{ readOnly? : boolean }>`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}

  font-family: Lato;
  font-size: 14px;
  color: #8ea0b9;
  width: 100%;

  ${({readOnly}) => readOnly && css`
    border: none;
  `}
`

interface IProps {
  title: string
  hasDate: boolean
  hasTime: boolean
  date?: number | Date
  time?: any
  setDateCallback?: any
  setTimeCallback?: any
  allowAfterMidnight?: boolean
}

const DateTimeBlock : React.FC<IProps> = ({ allowAfterMidnight = false, title, hasDate, hasTime, date, time, setTimeCallback, setDateCallback }) => {
  return <Container>
    <Label>{title}</Label>

      {hasDate && <Item>
        <IconWrap>
          <Icon icon={'Left'} color={'dimmed'} size={10} />
        </IconWrap>
        <InputWrap>
          <Input type="text" readOnly={false} value={ format(date || new Date(), "yyyy/MM/dd") } onChange={ ({target}) => setDateCallback() } />
        </InputWrap>

      </Item>}

      {hasTime && <Item>
        <IconWrap>
          <Icon icon={'Left'} color={'dimmed'} size={10} />
        </IconWrap>
        <InputWrap>
          <Input type="number" min="0" max={ allowAfterMidnight ? 24: 23 } value={ clockFormatNumber(time.hours || 0) } onChange={ ({target}) => setTimeCallback( 'hours', parseInt(target.value)) } />
        </InputWrap>
        <InputWrap>
           <Input type="number" min="0" max="59" value={ clockFormatNumber(time.minutes || 0) } onChange={ ({target}) => setTimeCallback( 'minutes', parseInt(target.value)) } />
        </InputWrap>
      </Item>}

  </Container>;
};

/**
 * Puts a 0 in front of single digit digits to keep it 24H format.
 * @param value The hour or minute value
 */
const clockFormatNumber = (value : number) => {
  const valAsString = value.toString();

  return (valAsString.length === 1) ? '0' + value : value;
}

export default DateTimeBlock;