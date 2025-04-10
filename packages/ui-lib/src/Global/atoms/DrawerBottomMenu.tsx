import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from '../../Icons/Icon';

const Container = styled.div`
  padding: 16px 10px 14px 23px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid var(--dividing-line);
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
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.34px;
  color: var(--grey-11);
`;

const SubTitle = styled.div`
  font-family: var(--font-ui);
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  padding-top: 2px;
  opacity: 0.5;
`;

interface IDrawerBottomMenu {
  icon: string,
  title: string,
  subTitle: string,
  onClickCallback?: () => void
}

const DrawerBottomMenu: FC<IDrawerBottomMenu> = ({ icon = 'Settings', title, subTitle, onClickCallback = () => {} }) => {

  return (
    <Container onClick={onClickCallback}>
      <Icon icon={icon} size={18} color='dimmed' />

      <ColumnContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </ColumnContainer>

    </Container>
  );
};

export default DrawerBottomMenu;
