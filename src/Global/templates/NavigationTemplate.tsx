import React from 'react';
import { IMenu } from '..';
import { Layout, MainContainer, Content2, MobileLayout } from '../atoms/Layout';
import MainMenu from '../organisms/MainMenu';
import TopBar, { ITopBar } from '../molecules/TopBar';
import MobileNavbar from '../molecules/MobileNavbar';
import useBreakpoints from '../../hooks/useBreakpoints';

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

  const { isDesktopS } = useBreakpoints(); 

  return (
    isDesktopS 
    ? (
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
          <Content2>
            {children}
          </Content2>
        </MainContainer>
      </Layout>
    )
    : (
      <MobileLayout>
        <MobileNavbar
          {...{
            content,
            home,
            openWidth,
            logoMark,
            logoText,
            supportUrl,
            defaultMenuOpen}
          }
        />
        {children}
      </MobileLayout>
    )
  );
};

export default NavigationTemplate;