import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {endOfDay, format,isEqual,min,set } from 'date-fns';
import {isNotNumber} from '../../helpers/index';
import Icon from '../../Icons/Icon';

const Container = styled.div<{hide:boolean}>`
  display: flex;
  flex-direction: column;

  ${({hide}) => hide && css`
    display: none;
  `}
`;

const Label = styled.label`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: var(--primary-10);
  padding: 12px;
  border-bottom: var(--grey-6) 1px solid;
`;

const Item = styled.div`
  padding: 12px;
  display: flex;
  justify-content: left;
`;

const IconWrap = styled.div`
  flex: 0 0 32px;
  align-items: center;
  display: flex;
  padding-top: 1px;
`;

const Input = styled.input<{ readOnly? : boolean, isTimeRangeValid: boolean, isTimeInput?: boolean }>`
  font-family: var(--font-data);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: var(--grey-12);
  background-color: transparent;

  width: 100%;
  border: ${({ isTimeInput }) => isTimeInput ?
    ({ isTimeRangeValid }) => isTimeRangeValid ? 'transparent 1px solid' : 'var(--warning-a9) 1px solid'
    : 'transparent 1px solid'
  };
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;

  &:focus, &:hover {

    border-color: ${({ isTimeInput }) => isTimeInput ?
      ({ isTimeRangeValid }) => isTimeRangeValid ? 'transparent' : 'var(--warning-a9)'
      : 'transparent'
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
    background: var(--primary-9);
    box-shadow: 0px 0px 0px 5px var(--primary-9);    
    ${Input}{
      color: var(--white-1);
      border-color: transparent;
    }

    ${TimeColon}{
      color: var(--white-1);
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

  /**
   *
   * Description of the rules can be found int https://docs.google.com/spreadsheets/d/1POe9uZxKXtLhQFF6DIV-RclUp7T7oXgSeSLlbYmE38g/edit?usp=sharing
   */
  const validHourMin = (textHour: string, textMin: string, hasDate: boolean, allowAfterMidnight?: boolean): {newHour: number, newMin: number}   => {

    const intHour =  Number(textHour.slice(-2));
    const intMin =  Number(textMin.slice(-2));

    const newHour = intHour > 24 ? Number(textHour.slice(-1)) : intHour;
    const newMin = intMin > 60 ? Number(textMin.slice(-1)) : intMin;

    //Rule 8
    if(newHour >= 24 && newMin !== -1 && allowAfterMidnight ) {
      return { newHour: 24, newMin: 0};
    }

    // Rule 7
    if(newHour === 0 && newMin === 0 && allowAfterMidnight && !hasDate) {
      return {newHour: 0, newMin: 1};
    }

    // Rule 6
    if(newHour === 23 && newMin === 60 && !allowAfterMidnight) {
      return { newHour:23, newMin: 59};
    }

    // Rule 5
    if(newHour >= 24 && !allowAfterMidnight) {
      return {newHour: 23, newMin};
    }

    // Rule 4
    if(newMin === 60) {
      return { newHour: newHour + 1, newMin: 0};
    }

    // Rule 3
    if(newHour > 0 && newMin === -1){
      return { newHour: newHour -1, newMin: 59};
    }

    // Rule 2
    if(newHour === 0 && newMin === -1) {
      return { newHour, newMin:0};
    }

    // Rule 1
    if(newHour === -1) {
      return {newHour: 0, newMin};
    }

    return { newHour, newMin };
  };


  const [displayHours, setDisplayHours] = useState<string>(format(date, "mm"));
  const [displayMinutes, setDisplayMinutes] = useState<string>(format(date,'HH'));

  const setDateHours = useCallback(({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {

    if(isNotNumber(value)) {
      return;
    }

    const {newHour, newMin} = validHourMin(value, displayMinutes, hasDate, allowAfterMidnight);

    setDateCallback(
      min([
        endOfDay(date),
        set(date, {
          hours: newHour,
          minutes: newMin,
          seconds: 0,
          milliseconds: 0
        })
      ])
    );
  }, [allowAfterMidnight, date, displayMinutes, hasDate, setDateCallback]);

  const setDateMinutes = useCallback(({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {

    if(isNotNumber(value)) {
      return;
    }

    const {newHour, newMin} = validHourMin(displayHours, value, hasDate, allowAfterMidnight);

    setDateCallback(
      min([
        endOfDay(date),
        set(date, {
          hours: newHour,
          minutes: newMin,
          seconds: 0,
          milliseconds: 0
        })
      ])
    );
  }, [allowAfterMidnight, date, displayHours, hasDate, setDateCallback]);

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
            <Input name='hours' type='number' min='-1' max={allowAfterMidnight ? 24: 23} value={displayHours} onChange={setDateHours} {...{isTimeRangeValid}} autoComplete='off' isTimeInput />
            <TimeColon>:</TimeColon>
            <Input name='minutes' type='number' min='-1' max='60' value={displayMinutes} onChange={setDateMinutes} {...{isTimeRangeValid}} autoComplete='off' isTimeInput />
          </InputWrap>
        </Item>
      )}
    </Container>
  );
};

export default DateTimeBlock;