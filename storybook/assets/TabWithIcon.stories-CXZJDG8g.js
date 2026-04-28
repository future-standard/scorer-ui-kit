import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,it as r,jt as i,kt as a,rt as o,st as s,vt as c}from"./iframe-YIV3yJSz.js";var l,u,d,f,p,m;e((()=>{l=t(),c(),a(),u=n(),d={title:`Misc/atoms`,component:r,decorators:[]},f=i.div``,p=()=>{let e=(0,l.text)(`Icon`,`Success`),t=(0,l.text)(`Title`,`New Items`),n=(0,l.text)(`Subtitle`,`Selected 120 of 120`);return(0,u.jsx)(f,{children:(0,u.jsx)(s,{children:(0,u.jsx)(o,{defaultTabId:(0,l.boolean)(`Show selected`,!1)?`exampleTab`:`none`,children:(0,u.jsx)(r,{icon:e,title:t,subtitle:n,tabFor:`exampleTab`})})})})},p.__docgenInfo={description:``,methods:[],displayName:`_TabWithIcon`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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