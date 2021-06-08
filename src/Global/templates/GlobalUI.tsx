import React from 'react';
import { IMenu, ITopBar, IAlertsHistory } from '..';
import { Layout, MainContainer, ContentArea, MobileLayout } from '../atoms/Layout';
import MainMenu from '../organisms/MainMenu';
import TopBar from '../molecules/TopBar';
import MobileNavbar from '../organisms/MobileNavbar';
import useBreakpoints from '../../hooks/useBreakpoints';


interface OwnProps {
  maxWidth?: string,
  paddingOverride?: string,
  alerts?: IAlertsHistory
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
  paddingOverride,
  maxWidth,
  children,
  alerts,
  ...props
}) => {

  const { isLarge } = useBreakpoints();

  return (
    isLarge
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
            {...{...props, alerts}}
          />
          <ContentArea {...{maxWidth, paddingOverride}}>
            {children}
          </ContentArea>
        </MainContainer>
      </Layout>
    )
    : (
      <MobileLayout>
        <MobileNavbar
          {...{
            content,
            home,
            logoMark,
            supportUrl,
            defaultMenuOpen,
            alerts,
            ...props
            }
          }
        />
        <ContentArea>
          {children}
        </ContentArea>
      </MobileLayout>
    )
  );
};

export default GlobalUI;