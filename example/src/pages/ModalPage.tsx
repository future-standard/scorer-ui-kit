import React from 'react';
import styled from 'styled-components';
import { Button } from 'scorer-ui-kit';
import { stripLeadingSlash } from 'history/PathUtils';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;


//const {setIsOpen, updateCloseText, closeCallback, updateContent} = useModal();

const ModalPage : React.FC = ({}) => {


  return(
    <Container>
        <Button
          design='secondary'
          >Empty Modal
        </Button>
        <Button
          design='secondary'
          >Template Modal
        </Button>
        <Button
          design='secondary'
          >Custom Modal
        </Button>
    </Container>
  );
}

export default ModalPage;