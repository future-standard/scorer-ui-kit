import useMediaQuery from "./useMediaQuery";
import {deviceMediaQuery} from '../themes/common';

/**
 * Get a set of boolean representing which breakpoint is activeScreen
 * and which breakpoints are inactiveScreen.
 */

export type IBreakpoints = 'xsmall'
| 'small'
| 'medium'
| 'large'
| 'xlarge'
| 'xxlarge';

interface OwnProps  {
  isXSmall: boolean
  isSmall: boolean
  isMedium: boolean
  isLarge: boolean
  isXLarge: boolean
  isXXLarge: boolean
  activeScreen: IBreakpoints
}

export default function useBreakpoints() {
  const breakpoints : OwnProps= {
    isXSmall: useMediaQuery(deviceMediaQuery.xsmall),
    isSmall: useMediaQuery(deviceMediaQuery.small),
    isMedium: useMediaQuery(deviceMediaQuery.medium),
    isLarge: useMediaQuery(deviceMediaQuery.large),
    isXLarge: useMediaQuery(deviceMediaQuery.xlarge),
    isXXLarge: useMediaQuery(deviceMediaQuery.xxlarge),
    activeScreen: "xsmall"
  };

  if (breakpoints.isXSmall) breakpoints.activeScreen = 'xsmall';
  if (breakpoints.isSmall) breakpoints.activeScreen = 'small';
  if (breakpoints.isMedium) breakpoints.activeScreen = 'medium';
  if (breakpoints.isLarge) breakpoints.activeScreen = 'large';
  if (breakpoints.isXLarge) breakpoints.activeScreen = 'xlarge';
  if (breakpoints.isXXLarge) breakpoints.activeScreen = 'xxlarge';

  return breakpoints;
}