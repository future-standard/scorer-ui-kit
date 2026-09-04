import{Ft as e,Lt as t,Rt as n,Wt as r,lt as i,pt as a,ut as o,wt as s}from"./iframe-DTJIpfwE.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m;function h(){return(h=c((()=>{l=r(),s(),n(),u=e(),d={title:`Misc/atoms`,component:o,decorators:[]},f=t.div``,p=()=>{let e=(0,l.text)(`Icon`,`Success`),t=(0,l.text)(`Title`,`New Items`),n=(0,l.text)(`Subtitle`,`Selected 120 of 120`),r=(0,l.boolean)(`Show selected`,!1);return(0,u.jsx)(f,{children:(0,u.jsx)(a,{children:(0,u.jsx)(i,{defaultTabId:r?`exampleTab`:`none`,children:(0,u.jsx)(o,{icon:e,title:t,subtitle:n,tabFor:`exampleTab`})})})})},p.__docgenInfo={description:``,methods:[],displayName:`_TabWithIcon`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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