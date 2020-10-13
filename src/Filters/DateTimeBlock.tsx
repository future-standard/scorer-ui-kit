import React from 'react';
import styled, { css } from 'styled-components';

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

const Input = styled.input<{ readOnly? : boolean }>`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.data};
  `}
  font-family: Lato;
  font-size: 14px;
  color: #8ea0b9;

  ${({readOnly}) => readOnly && css`
    border: none;
  `}
`

interface IProps {
  title: string
  hasDate: boolean
  hasTime: boolean
}

const DateTimeBlock : React.FC<IProps> = ({ title, hasDate, hasTime }) => {
  return <Container>
    <Label>{title}</Label>

      {hasDate && <Item>
        <IconWrap>
          <Icon icon={'Left'} color={'dimmed'} size={10} />
        </IconWrap>
        <Input type="number" readOnly={false} value="123" />
      </Item>}

      {hasTime && <Item>
        <IconWrap>
          <Icon icon={'Left'} color={'dimmed'} size={10} />
        </IconWrap>
        <Input type="number" readOnly value="10" />
        {/* <Input type="number" readOnly value="20" /> */}
      </Item>}

  </Container>;
};

export default DateTimeBlock;