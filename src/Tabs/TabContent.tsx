import React, { useContext, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { TabContext, ContextProps } from './Tabs';

const Container = styled.div`
`;

interface OwnProps {
  tabId: string
}

type Props = OwnProps & HTMLAttributes<HTMLDivElement>

const TabContent: React.FC<Props> = ({ children, tabId}) => {
  const { selected }: ContextProps = useContext(TabContext);

  return (
    selected === tabId ?
      <Container>
        {children}
      </Container> :
      null
  );
};

export { TabContent };