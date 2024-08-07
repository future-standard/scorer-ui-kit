import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Container = styled.div`
    margin: 100px 200px;
`

const LinksPage : React.FC = () => {
  return <Container>
    <div><Link to={`/line`}>Line</Link></div>
    <div><Link to={`/linertc`}>Line WebRTC</Link></div>
    <div><Link to={`/linevideo`}>Line Video</Link></div>
    <div><Link to={`/forms`}>Forms</Link></div>
    <div><Link to={`/table`}>Table Example</Link></div>
    <div><Link to={`/customdrawer`}>Custom User Drawer</Link></div>
    <div><Link to={`/ptz`}>PTZ</Link></div>
    <div><Link to={`/login`}>Login</Link></div>
    <div><Link to={`/tabs`}>Tabs Example</Link></div>
    <div><Link to='/globalUI'>Global UI</Link></div>
    <div><Link to={`/customalert`}>Component Theme Override Example</Link></div>
    <div><Link to='/layouts'>Layout</Link></div>
    <div><Link to='/split-layouts'>Split Layout</Link></div>
    <div><a href='/scorer-ui-kit/storybook'>Storybook</a></div>
    <div>---</div>
    <div><Link to='/globalUI'>Global UI (Deprecated)</Link></div>
  </Container>
};

export default LinksPage;
