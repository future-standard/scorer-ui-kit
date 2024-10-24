import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FilenameTag } from '../components/ExamplesFilename';

const Container = styled.div`
  margin: 0 auto;
  padding: 100px 100px;
  max-width: 1024px;
  box-sizing: content-box;
`

const Section = styled.section`
  display: block;
  margin-bottom: 64px;
`;

const Header = styled.h1`
  font-family: var(--font-ui);
  font-weight: 200;
  color: var(--grey-10);
  padding: 0;
  margin: 0 0 36px;
`;

const Subheader = styled.h2`
  font-family: var(--font-ui);
  font-weight: 300;
  color: var(--grey-12);
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  align-items: stretch;
`;

const Item = styled.div`
  height: 100%;
  
  a {
    height: 100%;
    line-height: 20px;
    padding: 20px;
    background: var(--grey-1);
    display: block;
    text-decoration: none;
    border-radius: 3px;
    box-shadow: 0 4px 8px var(--black-a6);
    border: 1px solid var(--grey-4);

    &:hover {
      background: var(--grey2);
      border: 1px solid var(--primary-8);
    }
  }
`;

const Title = styled.div`
  display: block;
  font-family: var(--font-ui);
  letter-spacing: 0.4px;
  font-size: 14px;
  color: var(--grey-12);
  font-weight: 500;
`;

const Description = styled.div`
  font-family: var(--font-data);
  font-weight: 300;
  font-size: 14px;
  color: var(--grey-11);
`;


const LinksPage : React.FC = () => {
  return <Container>
    <Header>SCORER UI Kit</Header>

    {/* Only show Storybook link when not not on Localhost (where this link won't work). Used mostly for Github Pages. */}
    {window.location.hostname !== 'localhost' ?
      <Section>
        <Subheader>Key Resources</Subheader>
        <List>
          <Item>
            <a href='/scorer-ui-kit/storybook'>
              <Title>Storybook</Title>
              <Description>All the key components of the SCORER UI Kit, previewable along with options using Storybook.</Description>
            </a>
          </Item>
        </List>
      </Section>
    : null }

    <Section>
      <Subheader>Examples</Subheader>
      <List>
        <Item>
          <Link to='/layouts'>
            <Title>Global UI - Layout</Title>
            <Description>A basic implementation example of the page Layout component.</Description>
            <FilenameTag>Layouts.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to='/split-layouts'>
            <Title>Split Layout</Title>
            <Description>A page layout with the drag-to-resize layout component.</Description>
            <FilenameTag>SplitLayout.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/customdrawer`}>
            <Title>Custom User Drawer</Title>
            <Description>Shows how to add custom injected section to the user drawer.</Description>
            <FilenameTag>CustomUserDrawerPage.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/tabs`}>
            <Title>Tabs Example</Title>
            <Description>A simple implementation of tabs.</Description>
            <FilenameTag>TabsPage.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/table`}>
            <Title>Table Example</Title>
            <Description>A TypeTable implementation with examples on setup and how to use selections.</Description>
            <FilenameTag>TablePage.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/line`}>
            <Title>Line</Title>
            <Description>The line tool used commonly for setting up of areas of interest used in system configurations.</Description>
            <FilenameTag>LinePage.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/linertc`}>
            <Title>Line WebRTC</Title>
            <Description>A variation of the Line tool using a WebRTC video background instead of a static image.</Description>
            <FilenameTag>LineRTCPage.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/linevideo`}>
            <Title>Line Video</Title>
            <Description>A variation of the Line tool using a video background instead of a static image.</Description>
            <FilenameTag>LineVideoPage.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/forms`}>
            <Title>Forms</Title>
            <Description>Form inputs and state examples.</Description>
            <FilenameTag>FormPage.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/ptz`}>
            <Title>PTZ</Title>
            <Description>An example of a working PTZ control. Requires a PTZ camera login.</Description>
            <FilenameTag>PTZPage.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/login`}>
            <Title>Login</Title>
            <Description>A code sample of our commonly used login view.</Description>
            <FilenameTag>Login.tsx</FilenameTag>
          </Link>
        </Item>
        <Item>
          <Link to={`/customalert`}>
            <Title>Component Theme Override Example</Title>
            <Description>Override CSS based theme for components.</Description>
            <FilenameTag>CustomAlertsPage.tsx</FilenameTag>
          </Link>
        </Item>
      </List>
    </Section>

    <Section>
      <Subheader>Deprecated</Subheader>
      <List>
        <Item>
          <Link to='/globalUI'>
            <Title>Global UI (Deprecated)</Title>
            <Description>The legacy implementation used for page layouts.</Description>
            <FilenameTag>GlobalUIPage.tsx</FilenameTag>
          </Link>
        </Item>
      </List>
    </Section>

  </Container>
};

export default LinksPage;
