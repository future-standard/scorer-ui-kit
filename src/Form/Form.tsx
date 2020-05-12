import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  border: 1px dotted #f00;
`

interface IProps {

}

const Form : React.FC<IProps> = ({ children }) => {
  return <FormContainer>
    {children}
  </FormContainer>
}

export default Form;