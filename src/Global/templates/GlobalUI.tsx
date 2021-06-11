import React from 'react';
import { IMenu, ITopBar, INotificationsHistory } from '..';
import { Layout, MainContainer, ContentArea, MobileLayout } from '../atoms/Layout';
import MainMenu from '../organisms/MainMenu';
import TopBar from '../molecules/TopBar';
import MobileNavbar from '../organisms/MobileNavbar';
import useBreakpoints from '../../hooks/useBreakpoints';


interface OwnProps {
  maxWidth?: string,
  paddingOverride?: string,
  notificationLists?: INotificationsHistory
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
  notificationLists,
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
            {...{...props, notificationLists}}
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
            notificationLists,
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