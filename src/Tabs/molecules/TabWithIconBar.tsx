import React from 'react';
import styled from 'styled-components';
import {TabWithIcon} from '../atoms/TabWithIcon';

const Container = styled.div``;


interface ITabWithIconBar {

}

const TabWithIconBar : React.FC<ITabWithIconBar> = () => {
  return(
    <Container>
      <TabWithIcon tabFor='Example1' icon='MetaTags' title='Title Example' subtitle='Subtitle Example' />
    </Container>
  );
};

export default TabWithIconBar;