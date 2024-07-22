import React from 'react';
import { IMenu, ITopBar} from '..';
import { Layout, MainContainer, ContentArea, MobileLayout } from '../atoms/Layout';
import MainMenu from '../organisms/MainMenu';
import TopBar from '../molecules/TopBar';
import MobileNavbar from '../organisms/MobileNavbar';
import useBreakpoints from '../../hooks/useBreakpoints';


interface OwnProps {
  maxWidth?: string,
  paddingOverride?: string,
  legacyLayout?: boolean,
  onMenuToggle?: (isMenuOpen: boolean) =>  void
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
  canAlwaysPin,
  paddingOverride,
  maxWidth,
  legacyLayout,
  children,
  onMenuToggle,
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
            defaultMenuOpen,
            canAlwaysPin,
            onMenuToggle,
          }
          }
        />
        <MainContainer>
          <TopBar
            {...{...props}}
          />
          <ContentArea {...{maxWidth, paddingOverride, legacyLayout}}>
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