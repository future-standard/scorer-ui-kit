import React from 'react';
import styled from 'styled-components';
import { PageHeader, Content, Button, Label, TextField, Tabs, Tab, TabList, TabContent } from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px 200px;
`

const Divider = styled.div`
  height: 1px;
  border-radius: 3px;
  background-color: var(--grey-4);
  margin-left: 0px;
`;

const Tab1Container = styled.div`
  margin-top: 20px;
`

const Tab2Container = styled.div`
  margin-top: 20px;
`

const TabsPage: React.FC = () => {

  return <Container>
    <Content>
      <PageHeader title="Tabs Example" areaTitle="Examples" areaHref={'/'} />
      <Tabs>
        <TabList defaultTabId='tab1'>
          <Tab tabFor='tab1'>Tab 1</Tab>
          <Tab tabFor='tab2'>Tab 2</Tab>
        </TabList>
        <Divider />
        <TabContent tabId='tab1'>
          <Tab1Container>A
            <Label htmlFor='fullname' labelText='Content of tab 1' />
            <TextField fieldState='default' required label='Full Name' name='fullname' id='fullname' />
            <TextField fieldState='default' required label='Department' name='department' id='department'/>
            <Button design='primary' size='small'> Save </Button>
          </Tab1Container>
        </TabContent>
        <TabContent tabId='tab2'>
          <Tab2Container>B
            <Label htmlFor='content2' labelText='Content of tab 2'/>
            <Label htmlFor='lorem' labelText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor.' />
            <Button design='primary' size='small'> OK </Button>
          </Tab2Container>
        </TabContent>
      </Tabs>
    </Content>
  </Container>
};

export default TabsPage;