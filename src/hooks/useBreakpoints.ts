import useMediaQuery from "./useMediaQuery";
import {deviceSize} from '../themes/common';

/**
 * Get a set of boolean representing which breakpoint is activeScreen
 * and which breakpoints are inactiveScreen.
 */

export type IBreakpoints = 'mobileS'
| 'mobileM'
| 'tabletP'
| 'desktopS'
| 'desktop'
| 'desktopL';

export default function useBreakpoints() {
  const breakpoints = {
    isMobileS: useMediaQuery(deviceSize.mobileS),
    isMobileM: useMediaQuery(deviceSize.mobileM),
    isTabletP: useMediaQuery(deviceSize.tabletP),
    isDesktopS: useMediaQuery(deviceSize.desktopS),
    isDesktop: useMediaQuery(deviceSize.desktop),
    isDesktopL: useMediaQuery(deviceSize.desktopL),
    activeScreen: "mobileS"
  };

  if (breakpoints.isMobileS) breakpoints.activeScreen = 'mobileS';
  if (breakpoints.isMobileM) breakpoints.activeScreen = 'mobileM';
  if (breakpoints.isTabletP) breakpoints.activeScreen = 'tabletP';
  if (breakpoints.isDesktopS) breakpoints.activeScreen = 'desktopS';
  if (breakpoints.isDesktop) breakpoints.activeScreen = 'desktop';
  if (breakpoints.isDesktopL) breakpoints.activeScreen = 'desktopL';

  return breakpoints;
}