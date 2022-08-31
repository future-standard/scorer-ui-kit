import useMediaQuery from "./useMediaQuery";
import {deviceMediaQuery} from '../themes/common';

/**
 * Get a set of boolean representing which breakpoint is activeScreen
 * and which breakpoints are inactiveScreen.
 */

export type IBreakpoints = 'small'
| 'medium'
| 'large'
| 'xlarge'
| 'xxlarge';

interface OwnProps  {
  isSmall: boolean
  isMedium: boolean
  isLarge: boolean
  isXLarge: boolean
  isXXLarge: boolean
  activeScreen: IBreakpoints
}

export default function useBreakpoints() {
  const breakpoints : OwnProps= {
    isSmall: useMediaQuery(deviceMediaQuery.small),
    isMedium: useMediaQuery(deviceMediaQuery.medium),
    isLarge: useMediaQuery(deviceMediaQuery.large),
    isXLarge: useMediaQuery(deviceMediaQuery.xlarge),
    isXXLarge: useMediaQuery(deviceMediaQuery.xxlarge),
    activeScreen: "small"
  };

  if (breakpoints.isSmall) breakpoints.activeScreen = 'small';
  if (breakpoints.isMedium) breakpoints.activeScreen = 'medium';
  if (breakpoints.isLarge) breakpoints.activeScreen = 'large';
  if (breakpoints.isXLarge) breakpoints.activeScreen = 'xlarge';
  if (breakpoints.isXXLarge) breakpoints.activeScreen = 'xxlarge';

  return breakpoints;
}