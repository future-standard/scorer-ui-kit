import{i as e}from"./preload-helper-xPQekRTU.js";import{Mt as t,it as n,jt as r,kt as i,rt as a,st as o,vt as s,zt as c}from"./iframe-cNP1dtGl.js";var l,u,d,f,p,m;e((()=>{l=c(),s(),t(),u=i(),d={title:`Misc/atoms`,component:n,decorators:[]},f=r.div``,p=()=>{let e=(0,l.text)(`Icon`,`Success`),t=(0,l.text)(`Title`,`New Items`),r=(0,l.text)(`Subtitle`,`Selected 120 of 120`);return(0,u.jsx)(f,{children:(0,u.jsx)(o,{children:(0,u.jsx)(a,{defaultTabId:(0,l.boolean)(`Show selected`,!1)?`exampleTab`:`none`,children:(0,u.jsx)(n,{icon:e,title:t,subtitle:r,tabFor:`exampleTab`})})})})},p.__docgenInfo={description:``,methods:[],displayName:`_TabWithIcon`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`_TabWithIcon`]}))();export{p as _TabWithIcon,m as __namedExportsOrder,d as default};