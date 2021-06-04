import React from 'react';
import { IMenu } from '..';
import { Layout, MainContainer, ContentArea } from '../atoms/Layout';
import MainMenu from '../organisms/MainMenu';
import TopBar, { ITopBar } from '../molecules/TopBar';


interface OwnProps {
  maxWidth?: string,
  paddingOverride?: string,
}

type INavigation = OwnProps & IMenu & ITopBar;

const GlobalUI: React.FC<INavigation> = ({
  content,
  home,
  openWidth,
  logoMark,
  logoText,
  supportUrl,
  defaultMenuOpen,
  children,
  paddingOverride,
  maxWidth,
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
        <ContentArea {...{maxWidth, paddingOverride}}>
          {children}
        </ContentArea>
      </MainContainer>
    </Layout>
  );
};

export default GlobalUI;