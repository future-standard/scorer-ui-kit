import React from 'react';
import styled from 'styled-components';
import {
  ButtonWithIcon
} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

const CustomIconPage : React.FC = () => {


  return(
    <Container>
      <ButtonWithIcon icon='CustomAdd'>Custom Icon</ButtonWithIcon>
      <ButtonWithIcon icon='Add'>Normal</ButtonWithIcon>

    </Container>
  );
}

export default CustomIconPage;