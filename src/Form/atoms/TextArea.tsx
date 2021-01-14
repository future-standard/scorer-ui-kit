import React from 'react'
import styled from  'styled-components';

const Container =  styled.div``;

const StyledTextarea = styled.textarea``;

interface IProps {
}


const TextArea : React.FC<IProps> = ({children}) => {
  return (
    <Container>
      <StyledTextarea>{children}</StyledTextarea>
    </Container>
  );
}

export default TextArea;