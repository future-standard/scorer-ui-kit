import { useReducer, useCallback, useLayoutEffect } from 'react';

import useBreakpoints, { IBreakpoints } from './useBreakpoints';

interface IMenuState {
  desktopSize: IBreakpoints
  isMenuPinned: boolean
  isMenuOpen: boolean
  canPin: boolean
}

interface SET_MENU {
  type: 'SET_MENU'
  data: {
    desktopSize: IBreakpoints
    defaultMenuOpen: boolean
    canAlwaysPin?: boolean
  }
}

interface SET_OPEN {
  type: 'SET_OPEN'
}

interface SET_CLOSE {
  type: 'SET_CLOSE'
}

interface TOGGLE_PIN {
  type: 'TOGGLE_PIN'
}

interface PIN_MENU {
  type: 'PIN_MENU'
}

type IMenuActions = SET_MENU | SET_OPEN | SET_CLOSE | TOGGLE_PIN | PIN_MENU


const menuReducer = (state: IMenuState, action: IMenuActions) => {

  switch (action.type) {

    // initial State based in props and desktop size
    case 'SET_MENU': {
      let isMenuOpen = false;
      let isMenuPinned = false;
      let canPin = false;

      if (action.data.canAlwaysPin || (action.data.defaultMenuOpen && action.data.desktopSize === 'xlarge')) {
        canPin = true;
      }

      if (action.data.desktopSize === 'xxlarge' && action.data.canAlwaysPin === false) {
        isMenuOpen = true;
        isMenuPinned = true;
      } else if (action.data.desktopSize === 'xxlarge') {
        isMenuOpen = action.data.defaultMenuOpen;
        isMenuPinned = false;
      }

      return {
        ...state,
        desktopSize: action.data.desktopSize,
        isMenuOpen,
        isMenuPinned,
        canPin,
      };
    }

    // handle autoOpen based on desktop
    case 'SET_OPEN': {
      if (state.isMenuOpen === true) { return state; }
      if (state.desktopSize === 'xxlarge' && !state.canPin) { return state; }

      return {
        ...state,
        isMenuOpen: true
      };
    }

    // handle auto close based on desktop
    case 'SET_CLOSE': {
      if (state.isMenuOpen === false) { return state; }
      if (state.desktopSize === 'xxlarge' && !state.canPin) { return state; }
      if (state.isMenuPinned === true) { return state; }

      return {
        ...state,
        isMenuOpen: false,
      };
    }

    case 'TOGGLE_PIN': {
      if (!state.canPin) { return state; }

      let isMenuOpen = true;

      if (state.isMenuPinned) {
        isMenuOpen = false;
      }

      return {
        ...state,
        isMenuOpen,
        isMenuPinned: !state.isMenuPinned,
      };
    }

    case 'PIN_MENU': {
      return {
        ...state,
        isMenuPinned: true,
        isMenuOpen: true,
        canPin: true,
      };
    }

    default:
      console.error(`Action ${action['type']} not registered.`);
      return state;
  }
};

const menuState: IMenuState = {
  desktopSize: 'large',
  isMenuPinned: false,
  isMenuOpen: false,
  canPin: false
};

const useMenu = (defaultMenuOpen: boolean, canAlwaysPin: boolean) => {

  const { activeScreen } = useBreakpoints();
  const [state, dispatch] = useReducer(menuReducer, menuState);

  const setMenu = useCallback((defaultMenuOpen: boolean, canAlwaysPin: boolean, desktopSize: IBreakpoints,) => {
    dispatch({ type: 'SET_MENU', data: { defaultMenuOpen, desktopSize, canAlwaysPin } });
  }, []);

  const setMenuOpen = useCallback(() => {
    dispatch({ type: 'SET_OPEN' });
  }, []);

  const setMenuClose = useCallback(() => {
    dispatch({ type: 'SET_CLOSE' });
  }, []);

  const togglePinned = useCallback(() => {
    dispatch({ type: 'TOGGLE_PIN' });
  }, []);

  useLayoutEffect(() => {
    setMenu(defaultMenuOpen, canAlwaysPin, activeScreen);
  }, []);

  const pinnedMenu = useCallback(() => {
    dispatch({ type: 'PIN_MENU' });
  }, []);

  return {
    menuState: state,
    setMenuOpen,
    setMenuClose,
    togglePinned,
    pinnedMenu
  };
};

export default useMenu;