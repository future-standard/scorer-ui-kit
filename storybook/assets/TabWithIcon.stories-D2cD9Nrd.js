import{ak as c,d as e,j as s,al as b,T,a as m}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const I={title:"Misc/atoms",component:c,decorators:[]},x=m.div``,t=()=>{const i=e.text("Icon","Success"),r=e.text("Title","New Items"),l=e.text("Subtitle","Selected 120 of 120"),d=e.boolean("Show selected",!1);return s.jsx(x,{children:s.jsx(b,{children:s.jsx(T,{defaultTabId:d?"exampleTab":"none",children:s.jsx(c,{icon:i,title:r,subtitle:l,tabFor:"exampleTab"})})})})};t.__docgenInfo={description:"",methods:[],displayName:"_TabWithIcon"};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const h=["_TabWithIcon"];export{t as _TabWithIcon,h as __namedExportsOrder,I as default};
