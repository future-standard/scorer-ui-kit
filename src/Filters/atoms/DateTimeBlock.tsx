import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {endOfDay, format,isEqual,min,set } from 'date-fns';

import Icon from '../../Icons/Icon';
import { getFormattedTime } from '../../helpers';

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


const Input = styled.input<{ readOnly? : boolean, isTimeRangeValid: boolean, isTimeInput?: boolean }>`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}

  ${({theme})=> theme.typography.filters.value};

  width: 100%;
  border: ${({ isTimeInput }) => isTimeInput ?
    ({ isTimeRangeValid }) => isTimeRangeValid ? 'hsl(0 14% 90%) 1px solid' : 'rgb(255,0,0) 1px solid'
    : 'transparent 1px solid'
  };
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;
  &:focus, &:hover {
    border-color: ${({ isTimeInput }) => isTimeInput ?
      ({ isTimeRangeValid }) => isTimeRangeValid ? 'hsl(0 14% 90%) 1px solid' : 'rgb(255,0,0) 1px solid'
      : 'transparent 1px solid'
    };
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
  isTimeRangeValid?: boolean,
}

const DateTimeBlock : React.FC<IProps> = ({
  allowAfterMidnight = false,
  title,
  hasDate,
  hasTime,
  isTimeRangeValid = true,
  date = new Date(),
  setDateCallback = ()=>{},
}) => {

  const convertHours = (date?.getHours()).toString();
  const convertMinutes = (date?.getMinutes()).toString();
  const [displayHours, setDisplayHours] = useState<string>(getFormattedTime(convertHours));
  const [displayMinutes, setDisplayMinutes] = useState<string>(getFormattedTime(convertMinutes));

  const setDateHours = useCallback(({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    const hourRegex  = /^[0-1]{0,1}[0-9]{0,1}$|(^2[0-4])$/;
    if (!hourRegex.test(value)) {
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
    const minuteRegex = /^[0-5]{0,1}[0-9]{0,1}$/;
    if (!minuteRegex.test(value)) {
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

  const onBlurInputs = useCallback((time: string, timeType:string) =>{
    const convertedValue = getFormattedTime(time);
    if(timeType === 'mins'){
      setDisplayMinutes(convertedValue);
    }else {
      setDisplayHours(convertedValue);
    }
  }, []);

  return (
    <Container hide={!hasDate && !hasTime}>
      <Label>{title}</Label>

      {hasDate && (
        <Item>
          <IconWrap>
            <Icon icon='Date' color='dimmed' size={14} weight='light' />
          </IconWrap>
          <InputWrap>
            <Input type='text' readOnly value={format(date, "yyyy/MM/dd")} {...{isTimeRangeValid}} />
          </InputWrap>
        </Item>
      )}

      {hasTime && (
        <Item>
          <IconWrap>
            <Icon icon='Time' color='dimmed' size={14} weight='light' />
          </IconWrap>
          <InputWrap>
            <Input onBlur={()=>onBlurInputs(displayHours, 'hours')} {...{isTimeRangeValid}} name='hours' type='number' value={displayHours} onChange={setDateHours} autoComplete='off' isTimeInput />
            <TimeColon>:</TimeColon>
            <Input onBlur={()=>onBlurInputs(displayMinutes, 'mins')} {...{isTimeRangeValid}} name='minutes' type='number' value={displayMinutes} onChange={setDateMinutes} autoComplete='off' isTimeInput />
          </InputWrap>
        </Item>
      )}
    </Container>
  );
};

export default DateTimeBlock;