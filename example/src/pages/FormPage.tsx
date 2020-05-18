import React from 'react';
import styled from 'styled-components';
import { Form, TextField, PasswordField } from 'scorer-ui-kit';

const Container = styled.div`
    margin: 100px auto;
`

const FormPage : React.FC = () => {
  return <Container>
    <Form>
      <TextField name={'my_field'} label={'My Field'} fieldState={ 'required' } />
      <PasswordField name={'my_field'} label={'My Field'} />
    </Form>
  </Container>
};

export default FormPage;