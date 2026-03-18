import React, {useContext} from 'react';
import styled from 'styled-components';
import { TabContext, ContextProps } from '../../Tabs/Tabs';

import { MOBILE_NAVBAR_HEIGHT, MOBILE_CLOSE_HEIGHT } from '../atoms/Layout';

//
// Containers height is full height but header and close button
//

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - ${MOBILE_NAVBAR_HEIGHT + MOBILE_CLOSE_HEIGHT }px);
  width: 100%;
  overflow-y: scroll;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

interface OwnProps {
  closeId: string;
  children?: React.ReactNode;
}

const MobileNavbarContent: React.FC<OwnProps> = ({ closeId, children }) => {
  const { selected }: ContextProps = useContext(TabContext);

  return (
    selected === closeId
      ? null
      : (
        <Container>
          <ContentWrapper>
            <>{children}</>
          </ContentWrapper>
        </Container>
        )
  );
};

export default MobileNavbarContent;