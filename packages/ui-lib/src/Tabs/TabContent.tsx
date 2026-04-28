import type React from 'react';
import { type HTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { type ContextProps, TabContext } from './Tabs';

const Container = styled.div`
`;

interface OwnProps {
  tabId: string;
}

type Props = OwnProps & HTMLAttributes<HTMLDivElement>;

const TabContent: React.FC<Props> = ({ children, tabId, ...props }) => {
  const { selected }: ContextProps = useContext(TabContext);

  return selected === tabId ? <Container {...props}>{children}</Container> : null;
};

export { TabContent };
