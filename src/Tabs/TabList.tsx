import React, { useContext, useEffect, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { TabContext, ContextProps } from './Tabs';

const TabListComponent = styled.div`
  display: flex;
  flex-direction: row;
`;

interface OwnProps {
  defaultTabId: string
}

type Props = OwnProps & HTMLAttributes<HTMLDivElement>

const TabList: React.FC<Props> = ({ children, defaultTabId}) => {
  const { setSelected }: ContextProps = useContext(TabContext);

  useEffect(() => {
    setSelected(defaultTabId);
  }, [defaultTabId, setSelected]);

  return (
    <TabListComponent>
      {children}
    </TabListComponent>
  );
};

export { TabList };