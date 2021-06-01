import React from 'react';
import styled from 'styled-components';
import { IMenu } from '..';

const Container = styled.div``;

const MobileMenu : React.FC<IMenu> = () => {
  return(
    <Container>
      <div>Top</div>
      <div>Mid</div>
      <div>footer</div>
    </Container>
  );
};

export default MobileMenu;