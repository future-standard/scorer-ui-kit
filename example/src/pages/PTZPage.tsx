import React, { useContext, useState, useCallback } from 'react';
import { Controls, PTZContext, Sidebar, SidebarHeading, AlertBar, Form, ButtonWithLoading, TextField, PasswordField, BackLink, Layout, Logo, SidebarBox } from 'scorer-ui-kit';
import styled from 'styled-components';


interface DeviceConnectionInfo {
  host: string ,
  username: string,
  password: string
}

const Content = styled.div`
  flex: 1;
  padding: 70px 70px 0 70px;
  overflow-y: scroll;
  form {
    max-width: 600px;
  }
`
const Img = styled.img`
  width: 100%;
`
interface Props {
}
const PTZ: React.FC<Props> = () => {

  const {state: {image, connection, errorMessage, loading}, actions:{connect}} = useContext(PTZContext);

  const [formData, setFormData] = useState<DeviceConnectionInfo>({
    host: '',
    username: '',
    password: ''
  });

  const onChange = useCallback(({ target }: React.FormEvent<HTMLFormElement>) => {
    //@ts-ignore;
    setFormData({ ...formData, [target.id]: target.value })
  },[formData]);

  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    connect(formData);
  },[connect, formData]);

  return (
    <Layout>
      <Sidebar>
        <Logo logoTextTop={'SCORER'} logoTextBottom={'UI Kit'} />
        <SidebarBox>
          <BackLink to="/" >Back</BackLink>
          <SidebarHeading>Camera Controls</SidebarHeading>
        </SidebarBox>
        {connection === 'connected' && <Controls debug={true} ></Controls>}
      </Sidebar>
      <Content>
        { errorMessage && <AlertBar message={errorMessage} type='error' ></AlertBar> }
        {
          connection === 'connected'
          ?
            <Img src={image||''} alt='PTZ Camera' />
          :
            <Form onChange={onChange} onSubmit={onSubmit}>
              <TextField required label='PTZ Camera Hostname' fieldState='default' name='host' id='host' value={formData.host} />
              <TextField required label='Username' fieldState='default' name='username' id='username' value={formData.username} />
              <PasswordField required label='Password' fieldState='default' name='password' id='password' value={formData.password} />
              <ButtonWithLoading loading={loading} type='submit' >Connect</ButtonWithLoading>
            </Form>
        }
      </Content>
    </Layout>
  );
}

export default PTZ;
