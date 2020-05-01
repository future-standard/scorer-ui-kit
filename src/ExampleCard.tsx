import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{useShadow?: boolean}>`
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.colors.exampleCard.backgroundColor};
  color: ${props => props.theme.colors.exampleCard.color};
  border: 2px solid ${props => props.theme.colors.exampleCard.borderColor};
  border-radius: 5px;
  padding: 15px 20px;
  width: 200px;

  ${props => props.useShadow && css`
    box-shadow: 0 5px 10px ${props => props.theme.colors.exampleCard.shadowColor};
  `}

`

const CardTitle = styled.h1`
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 500;
`

const CardBody = styled.div`
  font-size: 14px;
  line-height: 20px;
`

interface IProps {
  title: string,
  useShadow: boolean
}

export const ExampleCard : React.FC<IProps> = ({title, useShadow, children}) => {
  return <Container useShadow={ useShadow }>
    <CardTitle>{title}</CardTitle>
    <CardBody>{children}</CardBody>
  </Container>
}