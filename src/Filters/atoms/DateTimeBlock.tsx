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

const Input = styled.input<{ readOnly? : boolean }>`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}

  ${({theme})=> theme.typography.filters.value};

  width: 100%;
  border: none;
  border: transparent 1px solid;
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;

  &:focus, &:hover {
    border-color: blue;
  }

  ${({readOnly}) => readOnly && css`
    border-color: transparent;
  `}
`;

const TimeColon = styled.div`
  flex: 0 0 20px;
`;

const InputWrap = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus-within {

    background: ${({theme}) => theme.colors.menu.passive};
    box-shadow: 0px 0px 0px 5px ${({theme}) => theme.colors.menu.passive};

    ${Input} {
      border-color: ${({theme}) => theme.colors.divider};
    }

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
}

const DateTimeBlock : React.FC<IProps> = ({
  allowAfterMidnight = false,
  title,
  hasDate,
  hasTime,
  date = new Date(),
  setDateCallback = ()=>{},
}) => {


  const [displayHours, setDisplayHours] = useState<string>(format(date, "mm"));
  const [displayMinutes, setDisplayMinutes] = useState<string>(format(date,'HH'));

  const setDateHours = useCallback(({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
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
    } else {
      setDisplayMinutes(format(date, 'mm'));
      setDisplayHours(format(date,'HH'));
    }
  },[date, allowAfterMidnight]);

  return (
    <Container hide={!hasDate && !hasTime}>
      <Label>{title}</Label>

      {hasDate && (
        <Item>
          <IconWrap>
            <Icon icon='Date' color='dimmed' size={14} weight='regular' />
          </IconWrap>
          <InputWrap>
            <Input type='text' readOnly value={format(date, "yyyy/MM/dd")} />
          </InputWrap>
        </Item>
      )}

      {hasTime && (
        <Item>
          <IconWrap>
            <Icon icon='Time' color='dimmed' size={14} weight='regular' />
          </IconWrap>
          <InputWrap>
            <Input name='hours' type='number' min='0' max={allowAfterMidnight ? 24: 23} value={displayHours} onChange={setDateHours} />
            <TimeColon>:</TimeColon>
            <Input name='minutes' type='number' min='0' max='59' value={displayMinutes} onChange={setDateMinutes} />
          </InputWrap>
        </Item>
      )}

    </Container>
  );
};



export default DateTimeBlock;

