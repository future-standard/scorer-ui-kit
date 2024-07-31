import React, { useContext, HTMLAttributes, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { TabContext, ContextProps } from '../Tabs';

const TabComponent = styled.div`
  margin-right: 39px;
  display: flex;
  align-items: center;
  line-height: 20px;
`;

const TabLabel = styled.label<{ active: boolean }>`
  height: 40px;
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
  `}
  font-size: 15px;
  font-weight: ${({ active }) => active ? '600' : '500'};
  letter-spacing: 0.09px;
  color: ${({ active }) => active ? 'var(--primary-11)' : 'var(--grey-11)'};
  cursor: pointer;
  border-bottom: ${({ active }) => active ? '2px solid var(--primary-11)' : '2px solid transparent'};
  padding-top: 6px;
  padding-bottom: 14px;
  flex-shrink: 0;
  user-select: none;
`;

interface OwnProps {
  tabFor: string
}

type Props = OwnProps & HTMLAttributes<HTMLDivElement>

const Tab: React.FC<Props> = ({ children, tabFor, onClick, ...props }) => {
  const { selected, setSelected }: ContextProps = useContext(TabContext);

  const onChangeTab = useCallback((event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick && onClick(event);
    setSelected(tabFor);
  }, [onClick, setSelected, tabFor]);

  return (
    <TabComponent {...props} onClick={onChangeTab}>
      <TabLabel active={selected === tabFor}>
        {children}
      </TabLabel>
    </TabComponent>
  );
};

export { Tab };