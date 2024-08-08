import React from 'react';
import styled from 'styled-components';
import ButtonWithIcon from '../atoms/ButtonWithIcon';
import Button from '../atoms/Button';
import { IButtonProps } from '..';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  button {
    text-wrap: nowrap;
  }
`;

export type IButtonType = 'default' | 'icon-button'

export interface IButtonStack extends IButtonProps {
  id: string
  buttonType?: IButtonType
  icon?: string
  iconPosition?: 'left' | 'right'
  text: string
}

export interface IButtonsStack {
  buttons : IButtonStack[]
}

const ButtonsStack : React.FC<IButtonsStack>= ({buttons}) => {
  return(
    <Container>
      {buttons.map(({buttonType, icon, text, iconPosition, ...buttonProps}) => {

        if(buttonType === 'icon-button')
          return <ButtonWithIcon icon={icon || ''} position={iconPosition} {...buttonProps} >{text}</ButtonWithIcon>;

        return <Button {...buttonProps} >{text}</Button>;

      })}
    </Container>
  );
};

export default ButtonsStack;