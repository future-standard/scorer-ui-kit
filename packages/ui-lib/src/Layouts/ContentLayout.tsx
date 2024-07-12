import React from "react";
import styled from "styled-components";
import UtilityHeader from "./UtilityHeader";

const Container = styled.div``
  
const HeaderArea = styled.div``
const TabArea = styled.div``
  
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
  // Headder?: React.ReactNode;
}

const ContentLayout : React.FC<IContentLayout> = ({ layout = 'default' }) => {

  const containerClass = 'content-layout-' + layout;

  return <Container className={containerClass}>
    <UtilityHeader breadcrumbs={[{text:'One', href:'#1'},{text:'Two', href:'#2'},{text:'Three', href:'#3'},{text:'Four', href:'#4'},{text:'Five', href:'#5'}]} />
    {/* {Headder ? <HeaderArea>
      {Headder}
    </HeaderArea> : null } */}
    <TabArea>
      Tabs - This should be a variation of a full width container. Just happens this is for tabs but it could be re-used elsewhere.
    </TabArea>
    <Content>
      Content hereas
    </Content>
  </Container>
}

export default ContentLayout;