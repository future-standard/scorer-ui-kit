import React, { useContext, HTMLAttributes, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { TabContext, ContextProps } from '../Tabs';

const TabComponent = styled.div`
  margin-right: 39px;
  display: flex;
  align-items: center;
`;

const TabLabel = styled.label<{ active: boolean }>`
  height: 40px;
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
  `}
  font-size: 15px;
  font-weight: ${({ active }) => active ? '600' : '500'};
  letter-spacing: 0.09px;
  color: ${({ active }) => active ? '#0097ce' : '#787878'};
  cursor: pointer;
  border-bottom: ${({ active }) => active ? '2px solid #0097ce' : '2px solid transparent'};
  padding-top: 6px;
  padding-bottom: 14px;
  flex-shrink: 0;
`;

interface OwnProps {
  tabFor: string
}

type Props = OwnProps & HTMLAttributes<HTMLDivElement>

const Tab: React.FC<Props> = ({ children, tabFor, ...props }) => {
  const { selected, setSelected }: ContextProps = useContext(TabContext);

  const onChangeTab = useCallback((tabId: string) => {
    setSelected(tabId);
  }, [setSelected]);

  return (
    <TabComponent {...props} onClick={() => onChangeTab(tabFor)}>
      <TabLabel active={selected === tabFor}>
        {children}
      </TabLabel>
    </TabComponent>
  );
};

export { Tab };