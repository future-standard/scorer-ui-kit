import{Gt as e,It as t,Rt as n,lt as r,pt as i,ut as a,wt as o,zt as s}from"./iframe-Dnr5f4i3.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m,h;function g(){return(g=c((()=>{l=e(),o(),s(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Misc/atoms`,component:a,decorators:[]},p=n.div``,m=()=>{let e=(0,l.text)(`Icon`,`Success`),t=(0,l.text)(`Title`,`New Items`),n=(0,l.text)(`Subtitle`,`Selected 120 of 120`),o=(0,l.boolean)(`Show selected`,!1),s=d(`tab-click`);return(0,u.jsx)(p,{children:(0,u.jsx)(i,{children:(0,u.jsx)(r,{defaultTabId:o?`exampleTab`:`none`,children:(0,u.jsx)(a,{icon:e,title:t,subtitle:n,tabFor:`exampleTab`,onClick:s})})})})},m.__docgenInfo={description:``,methods:[],displayName:`_TabWithIcon`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const icon = text('Icon', 'Success');
  const title = text('Title', 'New Items');
  const subtitle = text('Subtitle', 'Selected 120 of 120');
  const selected = boolean('Show selected', false);
  const tabOnClick = action('tab-click');
  return <Container>
      <Tabs>
        <TabList defaultTabId={selected ? 'exampleTab' : 'none'}>
          <TabWithIcon {...{
          icon,
          title,
          subtitle
        }} tabFor='exampleTab' onClick={tabOnClick} />
        </TabList>
      </Tabs>
    </Container>;
}`,...m.parameters?.docs?.source}}},h=[`_TabWithIcon`]})))()}g();export{m as _TabWithIcon,h as __namedExportsOrder,f as default};