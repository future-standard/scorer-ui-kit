import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {format, parse } from 'date-fns';

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
  default?: number|Date;
  displayFormat?: string;
  setDateCallback?: (date:Date) => void
  setTimeCallback?: (time:Date) => void
  allowAfterMidnight?: boolean
}

const DateTimeBlock : React.FC<IProps> = ({
  allowAfterMidnight = false,
  title,
  hasDate,
  hasTime,
  default = new Date(),
  displayFormat = 'yyyy/MM/dd',
  setTimeCallback = () => {},
  setDateCallback = () => {}
}) => {
  const [date, setDate] = useState<Date>(default);

  return <Container hide={!hasDate && !hasTime}>
    <Label>{title}</Label>

    {
      hasDate &&
        <Item>
          <IconWrap>
            <Icon icon='Date' color='dimmed' size={14} weight='regular' />
          </IconWrap>
          <InputWrap>
            <Input type='text' readOnly value={format(date, displayFormat)} onChange={({target:{value}}) => setDateCallback(parse(value,format))} />
          </InputWrap>

        </Item>
    }

    {
      hasTime &&
        <Item>
          <IconWrap>
            <Icon icon='Time' color='dimmed' size={14} weight='regular' />
          </IconWrap>
          <InputWrap>
            <Input type='number' min='0' max={allowAfterMidnight ? 24: 23} value={} onChange={({target}) => setTimeCallback( 'hours', parseInt(target.value))} />
            <TimeColon>:</TimeColon>
            <Input type='number' min='0' max='59' value={clockFormatNumber(time.minutes || 0)} onChange={({target}) => setTimeCallback( 'minutes', parseInt(target.value))} />
          </InputWrap>
        </Item>
      }

  </Container>;
};