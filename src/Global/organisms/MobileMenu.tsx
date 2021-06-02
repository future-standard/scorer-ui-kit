import React, { useCallback, useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { TabContext, ContextProps } from '../../Tabs/Tabs';

import { IMenu } from '..';
import NavigationItem from '../atoms/NavigationItem';
import ContextItem from '../atoms/ContextItem';
import { getTopLevelPath } from '../../helpers/index';

const Container = styled.div``;

const ItemWrapper = styled.div`
  padding: 14px 0;
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.divider}
  `};
`;

interface IMobileMenu extends IMenu {
  closeId: string
}

const MobileMenu: React.FC<IMobileMenu> = ({
  content,
  supportUrl,
  closeId
}) => {

  const [loading, setLoading] = useState<boolean>(true);
  const [focusedContext, setFocusedContext] = useState<number>(0);
  const location = useLocation();
  let checkedInItems: number = 0;
  const { setSelected }: ContextProps = useContext(TabContext);


  /** Manage which context is open. 
   * -1 is the value of a sub menu
   * In this mobile version of the menu will close after selecting an option
   * It will not close if the menu has a submenu to allow it to display the options
  */
  const setFocusedContextCb = useCallback(contextKey => {
    if((contextKey === -1) || (!content.items[contextKey].submenu) ){
      setSelected(closeId);
    }

    if(contextKey === -1) { return; }

    setFocusedContext(focusedContext !== contextKey ? contextKey : -1);

  }, [closeId, content.items, focusedContext, setSelected]);

  /** Manage the loading cycle. */
  const readyCallback = useCallback(() => {
    // Basic count of menu items (that need to measure height) that have checked in.
    checkedInItems++;
    if (checkedInItems === content.items.length) {
      setLoading(false);
    }
  }, [checkedInItems, content.items.length]);

  const handleCloseMenu = useCallback(() => {
    setSelected(closeId);
  },[closeId, setSelected]);

  return (
    <Container>
      {content.items.map((item, key) => {
        return (
          <ItemWrapper key={key} data-key={key}>
            <NavigationItem
              minHeight={30}
              topLevelPath={getTopLevelPath(location.pathname)}
              contextKey={key}
              menuOpen
              submenuOpen={key === focusedContext}
              onClickCallback={setFocusedContextCb}
              {...{ item, loading, focusedContext, readyCallback }}
            />
          </ItemWrapper>

        );
      })}
      {supportUrl && (
        <ItemWrapper>
          <ContextItem
            compact
            isActive={false}
            icon='Question'
            title='Help &amp; Support'
            href={supportUrl}
            menuOpen
            onClickCallback={handleCloseMenu}
          />
        </ItemWrapper>)}
    </Container>
  );
};

export default MobileMenu;