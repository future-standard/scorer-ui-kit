import React, { Children } from "react";
import styled, { css } from "styled-components";
import UtilityHeader from "../molecules/UtilityHeader";
import { IHeaderContent } from "..";
import {Tabs} from '../../Tabs/Tabs';



const breakToFullWidth = css`
  // Declared seperately as it breaks styled components otherwise.
  margin-left: calc(var(--content-layout-padding-left) * -1);
  margin-right: calc(var(--content-layout-padding-right) * -1);
`

const Container = styled.div``

const FullWidthSubcontainer = styled.div`
  ${breakToFullWidth};
` 
const HeaderArea = styled.div`
  padding: 
    24px
    var(--content-layout-padding-right)
    32px
    var(--content-layout-padding-left);
`
const TabArea = styled.div`
  padding: 
    0
    var(--content-layout-padding-right)
    0
    var(--content-layout-padding-left);

  border-bottom: 1px solid var(--grey-8);
`
const TabAreaInner = styled.div`

`
  
const Content = styled.div`
  padding: 
    var(--content-layout-padding-top)
    var(--content-layout-padding-right)
    var(--content-layout-padding-bottom)
    var(--content-layout-padding-left);
  /* var(--utility-header-padding-top); */
`

interface IContentLayout {
  layout?: 'default' | 'fullscreen' | 'dashboard';
  HeaderContent?: IHeaderContent;
}

const ContentLayout : React.FC<IContentLayout> = ({ layout = 'default', HeaderContent = {}, children }) => {
  const { PageHeader, TabsElement } = HeaderContent;
  const containerClass = 'content-layout-' + layout;

  return <Container className={containerClass}>
    
    <UtilityHeader 
      $iconInGutter={ layout === 'default' }
      breadcrumbs={[{text:'One', href:'#1'},{text:'Two', href:'#2'},{text:'Three', href:'#3'},{text:'Four', href:'#4'},{text:'Five', href:'#5'}]} 
      backLink="/"
      showShareLink={true}
      shareLink="https://example.com/" />
    
    {PageHeader ? <HeaderArea>
      {PageHeader}
    </HeaderArea> : null }
    
    {TabsElement ?
      <Tabs>
        <TabArea>
          <TabAreaInner>
            {TabsElement}
          </TabAreaInner>
        </TabArea>
  
        <Content>  
          {children}
        </Content>
      </Tabs> 
    : 
      <Content>
        {children}
      </Content> 
    }

  </Container>
}

export default ContentLayout;