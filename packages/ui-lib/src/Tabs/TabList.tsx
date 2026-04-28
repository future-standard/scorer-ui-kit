import type React from 'react';
import { type HTMLAttributes, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { type ContextProps, TabContext } from './Tabs';

export const TabListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface OwnProps {
  defaultTabId: string;
}

type Props = OwnProps & HTMLAttributes<HTMLDivElement>;

const TabList: React.FC<Props> = ({ children, defaultTabId }) => {
  const { setSelected }: ContextProps = useContext(TabContext);

  useEffect(() => {
    setSelected(defaultTabId);
  }, [defaultTabId, setSelected]);

  return <TabListWrapper>{children}</TabListWrapper>;
};

export { TabList };
