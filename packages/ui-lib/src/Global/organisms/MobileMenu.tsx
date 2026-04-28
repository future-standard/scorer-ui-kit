import type React from 'react';
import { useCallback, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getTopLevelPath } from '../../helpers/index';
import { type ContextProps, TabContext } from '../../Tabs/Tabs';
import type { IMenu } from '..';
import ContextItem from '../atoms/ContextItem';
import NavigationItem from '../atoms/NavigationItem';

const Container = styled.div``;

const ItemWrapper = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid var(--dividing-line);
`;

interface IMobileMenu extends IMenu {
  closeId: string;
}

const MobileMenu: React.FC<IMobileMenu> = ({
  content,
  supportUrl,
  supportText = 'Help & Support',
  closeId,
}) => {
  const [focusedContext, setFocusedContext] = useState<number>(0);
  const location = useLocation();
  const { setSelected }: ContextProps = useContext(TabContext);

  /** Manage which context is open.
   * -1 is the value of a sub menu
   * In this mobile version of the menu will close after selecting an option
   * It will not close if the menu has a submenu to allow it to display the options
   */
  const setFocusedContextCb = useCallback(
    (contextKey: number) => {
      if (contextKey === -1 || !content.items[contextKey].submenu) {
        setSelected(closeId);
      }

      if (contextKey === -1) {
        return;
      }

      setFocusedContext(focusedContext !== contextKey ? contextKey : -1);
    },
    [closeId, content.items, focusedContext, setSelected]
  );

  const handleCloseMenu = useCallback(() => {
    setSelected(closeId);
  }, [closeId, setSelected]);

  return (
    <Container>
      {content.items.map((item, key) => {
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: index is also used as data-key and contextKey, and compared against focusedContext — structural meaning. #646.
          <ItemWrapper key={key} data-key={key}>
            <NavigationItem
              mobileMenu
              topLevelPath={getTopLevelPath(location.pathname)}
              contextKey={key}
              menuOpen
              submenuOpen={key === focusedContext}
              onClickCallback={setFocusedContextCb}
              {...{ item, focusedContext }}
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
            title={supportText}
            href={supportUrl}
            menuOpen
            onClickCallback={handleCloseMenu}
          />
        </ItemWrapper>
      )}
    </Container>
  );
};

export default MobileMenu;
