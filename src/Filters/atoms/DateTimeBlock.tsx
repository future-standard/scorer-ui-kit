import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {endOfDay, format,isEqual,min,set } from 'date-fns';

import Icon from '../../Icons/Icon';

const Container = styled.div<{hide:boolean}>`
  display: flex;
  flex-direction: column;

  ${({hide}) => hide && css`
    display: none;
  `}
`;

const Label = styled.label`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
    ${({theme})=> theme.typography.filters.datepicker.metaHeader.default};
  `}
  padding: 12px;
  border-bottom: ${({theme}) => theme.colors.divider} 1px solid;

  // ${({theme})=> theme.typography.filters.datepicker.metaHeader.active};

`;

const Item = styled.div`
  padding: 12px;
  display: flex;
  justify-content: left;
`;

const IconWrap = styled.div`
  flex: 0 0 40px;
  padding-top: 2px;
`;

const InputValue = styled.input<{ readOnly? : boolean, checkTimeValidation?:boolean }>`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}

  ${({theme})=> theme.typography.filters.value};

  width: 100%;
  border: none;
  border: ${({ checkTimeValidation }) => checkTimeValidation ? 'rgb(255,0,0) 1px solid' : 'hsl(0deg 14% 90%) 1px solid'};
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;
  &:focus, &:hover {
    border-color: ${({ checkTimeValidation }) => checkTimeValidation ? 'rgb(255,0,0)' : 'blue'};
  }
`;


const Input = styled.input<{ readOnly? : boolean, checkTimeValidation?:boolean }>`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}

  ${({theme})=> theme.typography.filters.value};

  width: 100%;
  border: none;
  border: ${({ checkTimeValidation }) => checkTimeValidation ? 'rgb(255,0,0) 1px solid' : 'transparent 1px solid'};
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;
  &:focus, &:hover {
    border-color: ${({ checkTimeValidation }) => checkTimeValidation ? 'rgb(255,0,0)' : 'blue'};
  }
`;

const TimeColon = styled.div`
  flex: 0 0 20px;
  text-align: center;
`;  

const InputWrap = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus-within {
    background: ${({theme}) => theme.colors.menu.passive};
    box-shadow: 0px 0px 0px 5px ${({theme}) => theme.colors.menu.passive};

    ${TimeColon}{
      color: ${({theme}) => theme.colors.pureTop};
      text-align: center;
    }
  }
`;

interface IProps {
  title: string
  hasDate: boolean
  hasTime: boolean
  date?: Date
  setDateCallback?: (date: Date) => void
  setTimeCallback?: (date: Date) => void
  allowAfterMidnight?: boolean,
  checkTimeValidation?: boolean,
}

const DateTimeBlock : React.FC<IProps> = ({
  allowAfterMidnight = false,
  title,
  hasDate,
  hasTime,
  checkTimeValidation,
  date = new Date(),
  setDateCallback = ()=>{},
}) => {

  const convertHours = (date.getHours()).toString();
  const convertMinutes = date.getMinutes().toString();
  const [displayHours, setDisplayHours] = useState<string>(convertHours === '0'?'00':convertHours);
  const [displayMinutes, setDisplayMinutes] = useState<string>(convertMinutes === '0'?'00':convertMinutes);

  const setDateHours = useCallback(({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    const isContainsSymbolN = /^[0-1]{0,1}[0-9]{0,1}$|(^2[0-4])$/;
    if (!isContainsSymbolN.test(value)) {
      return;
    }
    setDisplayHours(value);
    setDateCallback(
      min([
        endOfDay(date),
        set(date, {
          hours: Number(value),
          minutes: Number(displayMinutes),
          seconds: 0,
          milliseconds: 0
        })
      ])
    );
  }, [date, displayMinutes, setDateCallback]);

  const setDateMinutes = useCallback(({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    const isContainsSymbolN = /^[0-5]{0,1}[0-9]{0,1}$/;
    if (!isContainsSymbolN.test(value)) {
      return;
    }
    setDisplayMinutes(value);
    setDateCallback(
      min([
        endOfDay(date),
        set(date, {
          hours: displayHours === '24' ? 23 : Number(displayHours),
          minutes: Number(value) % 60,
          seconds: 0,
          milliseconds: 0
        })
      ])
    );
  }, [date, displayHours, setDateCallback]);

  useEffect(()=>{
    if(allowAfterMidnight && isEqual(date, endOfDay(date))){
      setDisplayHours('24');
      setDisplayMinutes('00');
    }
  },[date, allowAfterMidnight]);

  const onBlurInputs = useCallback(() =>{
    if(displayHours === '0' || displayHours === ''){
      setDisplayHours('00');
    }
    if(displayMinutes ==='0' || displayMinutes ===''){
      setDisplayMinutes('00');
    }
  }, [displayHours, displayMinutes]);

  return (
    <Container hide={!hasDate && !hasTime}>
      <Label>{title}</Label>

      {hasDate && (
        <Item>
          <IconWrap>
            <Icon icon='Date' color='dimmed' size={14} weight='light' />
          </IconWrap>
          <InputWrap>
            <Input type='text' readOnly value={format(date, "yyyy/MM/dd")} />
          </InputWrap>
        </Item>
      )}

      {hasTime && (
        <Item>
          <IconWrap>
            <Icon icon='Time' color='dimmed' size={14} weight='light' />
          </IconWrap>
          <InputWrap>
            <InputValue onBlur={onBlurInputs} {...{checkTimeValidation}} name='hours' type='text' value={displayHours} onChange={setDateHours} autoComplete='off' />
            <TimeColon>:</TimeColon>
            <InputValue onBlur={onBlurInputs} {...{checkTimeValidation}} name='minutes' type='text' value={displayMinutes} onChange={setDateMinutes} autoComplete='off' />
          </InputWrap>
        </Item>
      )}
    </Container>
  );
};

export default DateTimeBlock;