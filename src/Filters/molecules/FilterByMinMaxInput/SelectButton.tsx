import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../../Icons/Icon';

type SelectType = 'primary' | 'toolbar';

const Button = styled.button<{ expanded: boolean, selectType: SelectType, isLoading: boolean, disabled: boolean, width: string, paddingRight?: string }>`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  height: 30px;
  display: flex;
  align-items: center;
  color: hsl(208, 8%, 39%);
  border: 1px solid rgb(217,218,217);
  width: ${({ width }) => width ? width : 'auto'};
  justify-content: space-between;
  padding-left: 3px;
  padding-right: ${({ paddingRight }) => paddingRight ? paddingRight : '10px'};
  white-space: nowrap;
  outline: none;
  color: hsl(0, 0%, 50%);
  font-size: 16px;
  background-color: #F6F8F9;
  border-radius: '0px 3px 3px 0px';
  ${({ expanded }) => (expanded && css`
      background-color: #70C4FF;
      color: hsl(0, 0%, 100%);
      svg{
        fill: hsl(0, 0%, 100%);
        stroke: hsl(0, 0%, 100%);
      }
  `)}
  ${({ selectType }) => (selectType === 'primary') && css`
    font-family: ${({ theme }) => theme.fontFamily.data};
    height: 35px;
    line-height: 0.94;
    color: hsl(207, 5%, 57%);
    background-color: #F6F8F9;
    border-radius: 3px;
    border: solid 1px hsl(120, 1%, 85%);
    svg{
      fill: hsla(205, 60%, 57%, 0.65);
      stroke: hsla(205, 60%, 57%, 0.65);
    }
  `}
  ${({ selectType, disabled }) => (selectType === 'primary' && disabled) && css`
      color: hsla(0, 0%, 46%, 0.5);
      font-style: italic;
  `}

  :hover {
    cursor: pointer;
  }

  ${({ isLoading }) => isLoading && css`
      border-top-right-radius: none;
      border-bottom-right-radius: none;
      border-right: none;
  `};
`;

const ButtonText = styled.span<{ expanded: boolean }>`
  margin-left: 10px;
  margin-right: 17px;
  color: ${({ expanded }) => expanded ? 'hsl(0, 0%, 100%);' : 'hsl(0, 0%, 50%);'};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.data};
`;

const IconWrapper = styled.div`
  margin: 5px 0 0 10px;
`;

interface ISelectButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  title: string;
  expanded: boolean;
  icon?: string;
  IconProps?: string;
  hideArrow?: boolean;
  selectType?: SelectType;
  width?: string;
  isLoading?: boolean;
  disabled?: boolean;
  paddingRight?: string;
}

const SelectButton: React.FC<ISelectButtonProps> = ({ title, expanded = false, onClick, hideArrow = false, selectType = 'toolbar', width = 'auto', isLoading = false, disabled = false, icon, paddingRight }) => {

  return (
    <Button type='button' expanded={expanded} onClick={onClick} selectType={selectType} width={width} isLoading={isLoading} disabled={disabled} paddingRight={paddingRight}>

      {
        icon &&
          <IconWrapper>
            <Icon size={17} color={expanded ? 'inverse' : 'dimmed'} icon={icon} />
          </IconWrapper>
      }

      <ButtonText expanded={expanded}>{title}</ButtonText>
      <Icon size={9} color={!hideArrow && expanded ? 'inverse' : 'dimmed'} icon={!hideArrow && expanded ? 'Up' : 'Down'} />
    </Button>
  );
};

export default SelectButton;
