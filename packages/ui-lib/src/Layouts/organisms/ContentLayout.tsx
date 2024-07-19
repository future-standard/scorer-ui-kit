import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import UtilityHeader from "../molecules/UtilityHeader";
import { IHeaderContent } from "..";
import { Tabs } from '../../Tabs/Tabs';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const HeaderArea = styled.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    24px
    var(--content-layout-padding-right)
    32px
    var(--content-layout-padding-left);
  
`
const TabArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--grey-8);
`

const TabAreaInner = styled.div`
  max-width: var(--max-content-width);
  flex: 1;
  width: 100%;
  padding: 
    0
    var(--content-layout-padding-right)
    0
    var(--content-layout-padding-left);
`
  
const Content = styled.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    var(--content-layout-padding-top)
    var(--content-layout-padding-right)
    var(--content-layout-padding-bottom)
    var(--content-layout-padding-left);
`
const FullWidthContainer = styled.div<{ $contentHeight: number }>`
  min-height: ${({$contentHeight}) => $contentHeight + 'px'};
`
const FullWidthInner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  input {width: 100%;}
`

const FullWidthContentBlock : React.FC = ({children}) => {

  const innerElement = useRef<HTMLDivElement>(null);
  const [ contentHeight, setContentHeight ] = useState<number>(0);

  useEffect(() => {
    console.log(innerElement)
    if(innerElement && innerElement.current){
      setContentHeight(innerElement.current.clientHeight)
    }
  }, [innerElement, children])

  return <FullWidthContainer $contentHeight={contentHeight}>
    <FullWidthInner ref={innerElement}>
      {children}
    </FullWidthInner>
  </FullWidthContainer>
}

interface IContentLayout {
  layout?: 'default' | 'fullscreen' | 'dashboard';
  HeaderContent?: IHeaderContent;
}

const ContentLayout : React.FC<IContentLayout> = ({ layout = 'default', HeaderContent = {}, children }) => {
  const { PageHeaderArea, TabsElementArea, UtilityHeaderOptions } = HeaderContent;
  
  const containerClass = 'content-layout-' + layout;

  return <Container className={containerClass}>
    
    {UtilityHeaderOptions ? 
      <UtilityHeader {...UtilityHeaderOptions} />
    : null }
    
    {PageHeaderArea ? <HeaderArea>
      {PageHeaderArea}
    </HeaderArea> : null }
    
    {TabsElementArea ?
      <Tabs>
        <TabArea>
          <TabAreaInner>
            {TabsElementArea}
          </TabAreaInner>
        </TabArea>
  
        <Content>  
          <FullWidthContentBlock><input /></FullWidthContentBlock>
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