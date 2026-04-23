import type React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import { type ITabWithIcon, TabWithIcon } from '../atoms/TabWithIcon';
import { TabContent } from '../TabContent';
import { TabList } from '../TabList';
import { Tabs } from '../Tabs';

const Container = styled.div``;

const TabListWrapper = styled.div<{ $paddingLeft?: string }>`
  padding-top: 10px;
  padding-left: ${({ $paddingLeft }) => ($paddingLeft ? $paddingLeft : '87px')};
  box-shadow: 0 -5px 5px 0 var(--black-a1);
  border-bottom: 1px solid var(--grey-6);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`;

export interface ITabIcon extends ITabWithIcon {
  customComponent?: ReactElement;
}

export interface ITabsWithIconBar {
  defaultTabId: string;
  tabList: ITabIcon[];
  paddingLeft?: string;
}

const TabsWithIconBar: React.FC<ITabsWithIconBar> = ({ defaultTabId, tabList, paddingLeft }) => {
  return (
    <Container>
      <Tabs>
        <TabListWrapper $paddingLeft={paddingLeft}>
          <TabList {...{ defaultTabId }}>
            {tabList.map(({ icon, title, subtitle, tabFor }) => {
              return (
                <TabWithIcon key={`tabWithIcon-${tabFor}`} {...{ icon, title, subtitle, tabFor }} />
              );
            })}
          </TabList>
        </TabListWrapper>

        {tabList.map(({ tabFor, customComponent }) => {
          return (
            <TabContent key={`TabContent-${tabFor}`} tabId={tabFor}>
              {customComponent}
            </TabContent>
          );
        })}
      </Tabs>
    </Container>
  );
};

export { TabsWithIconBar };
