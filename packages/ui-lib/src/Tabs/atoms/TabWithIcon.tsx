import React, { useContext, useCallback } from 'react';
import { TabContext, ContextProps } from '../Tabs';
import styled, { css } from 'styled-components';
import Icon, { IconWrapper } from '../../Icons/Icon';

const Container = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 22px;
  padding-bottom: 7px;
  height: 60px;
  cursor: pointer;

  ${({ active }) => active ? css`
    border-bottom: 3px solid var(--primary-11);
    `
    : css`
    border-bottom: 3px solid transparent;
  `};
  ${IconWrapper} {
    margin-left: 2px;
    flex-shrink: 0;
  }
`;

const Title = styled.div<{ active: boolean }>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.ui};
  letter-spacing: 0.09px;
  font-weight: 500;
  color: ${({ active }) => active ? 'var(--primary-11)' : 'var(--grey-11)'};
  margin-bottom: 5px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


const SubTitle = styled.div`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.data};
  font-style: italic;
  color: var(--grey-a10);
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TextGroup = styled.div`
  margin-left: 12px;
  margin-right: 20px;
`;

export interface ITabWithIcon {
  icon: string
  title: string
  subtitle?: string
  tabFor: string
}

const TabWithIcon: React.FC<ITabWithIcon> = ({ icon, title, subtitle, tabFor, ...props }) => {

  const { selected, setSelected }: ContextProps = useContext(TabContext);

  const onChangeTab = useCallback((tabId: string) => {
    setSelected(tabId);
  }, [setSelected]);

  const active = selected === tabFor;

  return (
    <Container {...{ active }} {...props} onClick={() => onChangeTab(tabFor)}>
      <Icon {...{ icon }} weight='regular' size={15} color={active ? 'primary' : 'dimmed'} />
      <TextGroup>
        <Title {...{ active }}>{title}</Title>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </TextGroup>
    </Container>
  );
};

export { TabWithIcon };