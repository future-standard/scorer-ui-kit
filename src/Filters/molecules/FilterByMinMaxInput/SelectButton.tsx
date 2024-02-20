import React from 'react';
import styled, { css } from 'styled-components';
import Icon, {IconWrapper} from '../../../Icons/Icon';
import {resetButtonStyles} from '../../../common';

const Button = styled.button<{ expanded: boolean, disabled: boolean, width: string }>`
  ${resetButtonStyles};
  height: 30px;
  display: flex;
  align-items: center;
  color: hsl(0, 0%, 50%);
  background-color: hsl(200, 23%, 97%);
  border: solid 1px hsl(207, 16%, 86%);
  box-shadow: 0 4px 9px 0 hsla(204, 22%, 67%, 0.07);
  width: ${({ width }) => width ? width : '100%'};
  justify-content: space-between;
  padding-left: 3px;
  padding-right: 5px;
  white-space: nowrap;
  font-size: 12px;
  border-radius: 3PX;

  ${({ expanded }) => (expanded && css`
      background-color: #70C4FF;
      color: hsl(0, 0%, 100%);
      svg{
        fill: hsl(0, 0%, 100%);
        stroke: hsl(0, 0%, 100%);
      }
  `)}

  :hover {
    cursor: pointer;
  }

  ${({ theme }) => theme && css`
  font-family: ${theme.fontFamily.ui};
  transition: opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};

  ${IconWrapper} {
    padding: 0 9px;
    display: flex;
    align-items: center;
    [stroke]{
      stroke: ${theme.colors.icons.dimmed};
    }
  }

  &:hover:enabled, &:active:enabled {
    background-color: hsl(205, 100%, 72%);
    border: solid 1px hsl(205, 100%, 72%);
    color: ${theme.colors.icons.inverse};

    ${IconWrapper} {
      [stroke]{
        stroke: ${theme.colors.icons.inverse};
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
`};

${({ theme, expanded }) => expanded && css`
  background-color: hsl(205, 100%, 72%);
  border: solid 1px hsl(205, 100%, 72%);
  color: ${theme.colors.icons.inverse};

  ${IconWrapper} {
    [stroke]{
      stroke: ${theme.colors.icons.inverse};
    }
  }
`};
`;

const ButtonText = styled.span<{ expanded: boolean }>`
  padding-right: 3px;
`;

const IconContainer = styled.div``;

interface ISelectButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  title: string;
  expanded: boolean;
  icon?: string;
  IconProps?: string;
  hideArrow?: boolean;
  width?: string;
}

const SelectButton: React.FC<ISelectButtonProps> = ({ title, expanded = false, onClick, hideArrow = false, width = 'auto', disabled = false, icon }) => {

  return (
    <Button type='button' expanded={expanded} onClick={onClick} width={width} disabled={disabled}>

      {
        icon &&
          <IconContainer>
            <Icon size={12} icon={icon} weight='light'/>
          </IconContainer>
      }

      <ButtonText expanded={expanded}>{title}</ButtonText>
      <Icon size={8} icon={!hideArrow && expanded ? 'Up' : 'Down'} />
    </Button>
  );
};

export default SelectButton;
