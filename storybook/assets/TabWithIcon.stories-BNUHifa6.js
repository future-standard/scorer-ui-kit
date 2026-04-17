import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,at as o,bt as s,lt as c,ot as l}from"./iframe-DUfvGjia.js";var u,d,f,p,m,h;e((()=>{a(),n(),s(),u=i(),d=t(),f={title:`Misc/atoms`,component:l,decorators:[]},p=r.div``,m=()=>{let e=(0,u.text)(`Icon`,`Success`),t=(0,u.text)(`Title`,`New Items`),n=(0,u.text)(`Subtitle`,`Selected 120 of 120`);return(0,d.jsx)(p,{children:(0,d.jsx)(c,{children:(0,d.jsx)(o,{defaultTabId:(0,u.boolean)(`Show selected`,!1)?`exampleTab`:`none`,children:(0,d.jsx)(l,{icon:e,title:t,subtitle:n,tabFor:`exampleTab`})})})})},m.__docgenInfo={description:``,methods:[],displayName:`_TabWithIcon`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h=[`_TabWithIcon`]}))();export{m as _TabWithIcon,h as __namedExportsOrder,f as default};