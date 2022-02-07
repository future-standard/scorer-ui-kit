import React, { FC } from 'react';
import styled from 'styled-components';
import { Icon } from '../..';

const Container = styled.div`
  padding: 16px 10px 14px 23px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  align-items: center;
  cursor: pointer;
  svg {
    margin-top: 7px;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  align-items: flex-start;
`;

const Title = styled.div`
  opacity: 0.76;
  font-family: ${({ theme }) => theme.fontFamily.ui};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.34px;
  color: #575757;
`;

const SelectedValue = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: rgba(87, 87, 87, 0.5);
  padding-top: 2px;
`;

interface IDrawerBottomMenu {
  icon: string,
  title: string,
  selectedValue: string,
  onClickCallback?: () => void 
}

const DrawerBottomMenu: FC<IDrawerBottomMenu> = ({ icon = 'Settings', title, selectedValue, onClickCallback = () => {} }) => {

  return (
    <Container onClick={onClickCallback}>
      <Icon icon={icon} size={18} color='dimmed' />

      <ColumnContainer>
        <Title>{title}</Title>
        <SelectedValue>{selectedValue}</SelectedValue>
      </ColumnContainer>

    </Container>
  );
};

export default DrawerBottomMenu;
