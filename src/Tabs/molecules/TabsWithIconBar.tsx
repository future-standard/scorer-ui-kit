import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Tabs, TabList, TabContent } from '..';
import { TabWithIcon, ITabWithIcon } from '../atoms/TabWithIcon';

const Container = styled.div``;

const TabListWrapper = styled.div<{ paddingOverride?: string }>`
  padding: ${({ paddingOverride }) => paddingOverride ? paddingOverride : '10px 0 0 87px'};
  box-shadow: 0 -5px 5px 0 hsla(0, 0%, 0%, 0.01);
  border-bottom: 1px solid hsl(0, 0%, 89%);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`;

export interface ITabIcon extends ITabWithIcon {
  customComponent?: ReactElement
}

export interface ITabsWithIconBar {
  defaultTabId: string
  tabList: ITabIcon[]
  paddingOverride?: string
}

const TabsWithIconBar: React.FC<ITabsWithIconBar> = ({ defaultTabId, tabList, paddingOverride }) => {

  return (
    <Container>
      <Tabs>
        <TabListWrapper {...{ paddingOverride }}>
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
            <TabContent key={`TabContent-${tabFor}`} tabId={tabFor}>{customComponent}</TabContent>
          );
        }
        )}
      </Tabs>
    </Container>
  );
};

export { TabsWithIconBar };