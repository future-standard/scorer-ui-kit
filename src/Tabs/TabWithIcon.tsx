import React from 'react';
import styled from 'styled-components';
import Icon from '../Icons/Icon';

const Container = styled.div``;

interface ITabWithIcon {
  icon: string
}

const TabWithIcon: React.FC<ITabWithIcon> = ({icon}) => {
  return(
    <Container>
      <Icon {...{icon}} />
    </Container>
  );
};

export {TabWithIcon};