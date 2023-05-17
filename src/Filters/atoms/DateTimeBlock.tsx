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

const InputValue = styled.input<{ readOnly? : boolean, allowManualTimeChange?:boolean }>`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}

  ${({theme})=> theme.typography.filters.value};

  width: 100%;
  border: none;
  border: ${({ allowManualTimeChange }) => allowManualTimeChange ? 'rgb(255,0,0) 1px solid' : 'hsl(0deg 14% 90%) 1px solid'};
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;
  &:focus, &:hover {
    border-color: ${({ allowManualTimeChange }) => allowManualTimeChange ? 'rgb(255,0,0)' : 'blue'};
  }
`;


const Input = styled.input<{ readOnly? : boolean, allowManualTimeChange?:boolean }>`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}

  ${({theme})=> theme.typography.filters.value};

  width: 100%;
  border: none;
  border: ${({ allowManualTimeChange }) => allowManualTimeChange ? 'rgb(255,0,0) 1px solid' : 'transparent 1px solid'};
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;
  &:focus, &:hover {
    border-color: ${({ allowManualTimeChange }) => allowManualTimeChange ? 'rgb(255,0,0)' : 'blue'};
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
  allowManualTimeChange?: boolean,
}

const DateTimeBlock : React.FC<IProps> = ({
  allowAfterMidnight = false,
  title,
  hasDate,
  hasTime,
  allowManualTimeChange,
  date = new Date(),
  setDateCallback = ()=>{},
}) => {

  const convertHours = (date?.getHours()).toString();
  const convertMinutes = (date?.getMinutes()).toString();
  const [displayHours, setDisplayHours] = useState<string>(getFormattedTime(convertHours));
  const [displayMinutes, setDisplayMinutes] = useState<string>(getFormattedTime(convertMinutes));
  const [isKeyboardEvent, setIsKeyboardEvent] = useState(false);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    const key = event.key;
    // const hourRegex  = /^[0-1]{0,1}[1-9]{0,1}$|(^2[0-3])$/;
    // if (!hourRegex.test(value)) {
    //   return;
    // }
    if (key === "ArrowUp") {
      setIsKeyboardEvent(false);
      // event.preventDefault();
      // let hours = parseInt(value);
      // setDisplayHours((hours + 1).toString().padStart(2, '0'));
    } else if (key === "ArrowDown") {
      setIsKeyboardEvent(false);
      // event.preventDefault();
      // let hours = parseInt(value);
      // setDisplayHours((hours - 1).toString().padStart(2, '0'));
    } else {
      console.log('else');
      setIsKeyboardEvent(true);
    }
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
  },[]);

  const setDateHours = useCallback(({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    console.log('2', isKeyboardEvent);
    const hourRegex  = /^[0-1]{0,1}[0-9]{0,1}$|(^2[0-4])$/;
    if (!hourRegex.test(value)) {
      return;
    }
    isKeyboardEvent ? setDisplayHours(value) : setDisplayHours(value.padStart(2, '0'));
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
    setIsKeyboardEvent(false);
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
            <InputValue onKeyDown={(e) => handleKeyDown(e)} onBlur={()=>onBlurInputs(displayHours, 'hours')} {...{allowManualTimeChange}} name='hours' type='number' value={displayHours} autoComplete='off' onChange={(e) => setDateHours(e)}/>
            <TimeColon>:</TimeColon>
            <InputValue onBlur={()=>onBlurInputs(displayMinutes, 'mins')} {...{allowManualTimeChange}} name='minutes' type='number' value={displayMinutes} onChange={setDateMinutes} autoComplete='off' />
          </InputWrap>
        </Item>
      )}
    </Container>
  );
};

export default DateTimeBlock;