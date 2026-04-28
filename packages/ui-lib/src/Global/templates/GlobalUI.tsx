import type React from 'react';
import useBreakpoints from '../../hooks/useBreakpoints';
import type { IMenu, ITopBar } from '..';
import { ContentArea, Layout, MainContainer, MobileLayout } from '../atoms/Layout';
import TopBar from '../molecules/TopBar';
import MainMenu from '../organisms/MainMenu';
import MobileNavbar from '../organisms/MobileNavbar';

interface OwnProps {
  maxWidth?: string;
  paddingOverride?: string;
  legacyLayout?: boolean;
  onMenuToggle?: (isMenuOpen: boolean) => void;
  children?: React.ReactNode;
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
  keepOpenText,
  autoHideText,
  supportText,
  onMenuToggle,
  ...props
}) => {
  const { isLarge } = useBreakpoints();

  return isLarge ? (
    <Layout>
      <MainMenu
        {...{
          content,
          home,
          openWidth,
          logoMark,
          logoText,
          supportUrl,
          defaultMenuOpen,
          canAlwaysPin,
          onMenuToggle,
          keepOpenText,
          autoHideText,
          supportText,
        }}
      />
      <MainContainer>
        <TopBar {...{ ...props }} />
        <ContentArea
          $maxWidth={maxWidth}
          $paddingOverride={paddingOverride}
          $legacyLayout={legacyLayout}
        >
          {children}
        </ContentArea>
      </MainContainer>
    </Layout>
  ) : (
    <MobileLayout>
      <MobileNavbar
        {...{
          content,
          home,
          logoMark,
          supportUrl,
          defaultMenuOpen,
          supportText,
          ...props,
        }}
      />
      <ContentArea>{children}</ContentArea>
    </MobileLayout>
  );
};

export default GlobalUI;
