import React, {useContext} from 'react';
import styled from 'styled-components';
import { TabContext, ContextProps } from '../../Tabs/Tabs';

const Container = styled.div`
  z-index: 3;
  position: relative;
  background-color: hsla(120, 100%, 75%, 0.3);
  min-height: 100vh;
  width: 100%;
`;

const ContentWrapper = styled.div`
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

interface OwnProps {
  closeId: string
}

const MobileNavbarContainer: React.FC<OwnProps> = ({ closeId, children }) => {
  const { selected }: ContextProps = useContext(TabContext);

  return (
    selected === closeId
      ? null
      : (
        <Container>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </Container>
        )
  );
};

export default MobileNavbarContainer;