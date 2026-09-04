import{Gt as e,It as t,Rt as n,lt as r,pt as i,ut as a,wt as o,zt as s}from"./iframe-C28gtL4u.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m;function h(){return(h=c((()=>{l=e(),o(),s(),u=t(),d={title:`Misc/atoms`,component:a,decorators:[]},f=n.div``,p=()=>{let e=(0,l.text)(`Icon`,`Success`),t=(0,l.text)(`Title`,`New Items`),n=(0,l.text)(`Subtitle`,`Selected 120 of 120`),o=(0,l.boolean)(`Show selected`,!1);return(0,u.jsx)(f,{children:(0,u.jsx)(i,{children:(0,u.jsx)(r,{defaultTabId:o?`exampleTab`:`none`,children:(0,u.jsx)(a,{icon:e,title:t,subtitle:n,tabFor:`exampleTab`})})})})},p.__docgenInfo={description:``,methods:[],displayName:`_TabWithIcon`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const icon = text('Icon', 'Success');
  const title = text('Title', 'New Items');
  const subtitle = text('Subtitle', 'Selected 120 of 120');
  const selected = boolean('Show selected', false);
  return <Container>
      <Tabs>
        <TabList defaultTabId={selected ? 'exampleTab' : 'none'}>
          <TabWithIcon {...{
          icon,
          title,
          subtitle
        }} tabFor='exampleTab' />
        </TabList>
      </Tabs>
    </Container>;
}`,...p.parameters?.docs?.source}}},m=[`_TabWithIcon`]})))()}h();export{p as _TabWithIcon,m as __namedExportsOrder,d as default};