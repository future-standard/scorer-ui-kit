import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.theme.colors.button.backgroundColor};
    color: ${props => props.theme.colors.button.color};
    border: 2px solid ${props => props.theme.colors.button.borderColor};
    text-transform: uppercase;
    border-radius: 5px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
`

interface IProps {
    onClick: any
  }

export const ThemedButton : React.FC<IProps> = ({onClick, children}) => {
    return <Button onClick={onClick}>
        {children}
    </Button>
}