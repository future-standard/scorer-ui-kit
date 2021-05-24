import React from 'react';
import { IMenu } from '..';
import { Layout, MainContainer } from '../atoms/Layout';
import MainMenu from '../MainMenu';
import TopBar, { ITopBar } from '../TopBar';

type INavigation = IMenu & ITopBar;

const NavigationTemplate: React.FC<INavigation> = ({
  content,
  home,
  openWidth,
  logoMark,
  logoText,
  supportUrl,
  defaultMenuOpen,
  children,
  ...props
}) => {

  return (
    <Layout>
      <MainMenu {...{
          content,
          home,
          openWidth,
          logoMark,
          logoText,
          supportUrl,
          defaultMenuOpen}
        }
      />
      <MainContainer>
        <TopBar
          {...{...props}}
        />
        {children}
      </MainContainer>

    </Layout>
  );
};

export default NavigationTemplate;