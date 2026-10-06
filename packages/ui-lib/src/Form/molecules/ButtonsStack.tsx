import type React from 'react';
import styled from 'styled-components';
import type { IButtonProps } from '..';
import Button from '../atoms/Button';
import ButtonWithIcon from '../atoms/ButtonWithIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  button {
    text-wrap: nowrap;
  }
`;

export type IButtonType = 'default' | 'icon-button';

export interface IButtonStack extends IButtonProps {
  id?: string;
  buttonType?: IButtonType;
  icon?: string;
  iconPosition?: 'left' | 'right';
  text: string;
}

export interface IButtonsStack {
  buttons: IButtonStack[];
}

const ButtonsStack: React.FC<IButtonsStack> = ({ buttons }) => {
  return (
    <Container>
      {buttons.map(({ id, buttonType, icon, text, iconPosition, size, ...buttonProps }, index) => {
        if (buttonType === 'icon-button')
          return (
            <ButtonWithIcon
              key={id || `button-stack-${index}`}
              size={size || 'small'}
              icon={icon || ''}
              position={iconPosition}
              isFullWidth
              {...buttonProps}
            >
              {text}
            </ButtonWithIcon>
          );

        return (
          <Button key={id || `button-stack-${index}`} size={size || 'small'} {...buttonProps}>
            {text}
          </Button>
        );
      })}
    </Container>
  );
};

export default ButtonsStack;
