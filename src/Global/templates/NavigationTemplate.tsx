import React from 'react';
import styled from 'styled-components';
import { IMenu } from '..';
import { Layout } from '../atoms/Layout';
import MainMenu from '../MainMenu';
import TopBar, { ITopBar } from '../TopBar';

const Container = styled.div``;

type INavigation = IMenu & ITopBar;

const NavigationTemplate: React.FC<INavigation> = ({
  content, onLogout, onLanguageToggle, loggedInUser
}) => {
  return (
    <Container>
      <Layout>
        <MainMenu content={content} />
        <TopBar
          onLogout={onLogout}
          onLanguageToggle={onLanguageToggle}
          loggedInUser={loggedInUser}
        />
      </Layout>
    </Container>
  );
};

export default NavigationTemplate;