import React from 'react';
import { IMenu } from '..';
import { Layout, MainContainer, ContentArea } from '../atoms/Layout';
import MainMenu from '../organisms/MainMenu';
import TopBar, { ITopBar } from '../molecules/TopBar';

type INavigation = IMenu & ITopBar;

const GlobalUI: React.FC<INavigation> = ({
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
        <ContentArea>
          {children}
        </ContentArea>
      </MainContainer>
    </Layout>
  );
};

export default GlobalUI;