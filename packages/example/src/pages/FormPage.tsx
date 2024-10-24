import React from 'react';
import styled from 'styled-components';
import { Form, TextField, PasswordField, PageHeader } from 'scorer-ui-kit';

const Container = styled.div`
    margin: 100px 200px;
`

const FormPage : React.FC = () => {
  return <Container>
    <PageHeader title={"Input State Examples"} areaTitle={'Forms'} areaHref={'/'} />
    <Form>
      <TextField name={'my_field'} label={'Basic'} placeholder={'Placeholder...'} fieldState={ 'default' } showFeedback={true} />
      <TextField name={'my_field'} label={'Required'} placeholder={''} fieldState={ 'required' } showFeedback={true} />
      <TextField name={'my_field'} label={'Loading'} placeholder={''} fieldState={ 'processing' } showFeedback={true} />
      <TextField name={'my_field'} label={'Valid'} placeholder={''} fieldState={ 'valid' } showFeedback={true} />
      <TextField name={'my_field'} label={'Error'} placeholder={''} fieldState={ 'invalid' } showFeedback={true} />
      <TextField name={'my_field'} label={'Error'} placeholder={''} fieldState={ 'invalid' } showFeedback={true} feedbackMessage={'Error: Oh noes!!!'}/>
      <PasswordField name={'my_field'} label={'My Field'} placeholder={''} fieldState={ 'default' } showFeedback={true} />
    </Form>
  </Container>
};

export default FormPage;