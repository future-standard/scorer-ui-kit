import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as b}from"./styled-components.browser.esm-CarAhzHj.js";import{aj as c,ak as m,a3 as p}from"./index.modern-CLl990BG.js";import{d as o}from"./index-C-6Xbh3D.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const j={title:"Misc/atoms",component:c,decorators:[]},T=b.div``,t=()=>{const i=o.text("Icon","Success"),r=o.text("Title","New Items"),l=o.text("Subtitle","Selected 120 of 120"),d=o.boolean("Show selected",!1);return e.jsx(T,{children:e.jsx(m,{children:e.jsx(p,{defaultTabId:d?"exampleTab":"none",children:e.jsx(c,{icon:i,title:r,subtitle:l,tabFor:"exampleTab"})})})})};t.__docgenInfo={description:"",methods:[],displayName:"_TabWithIcon"};var s,n,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const _=["_TabWithIcon"];export{t as _TabWithIcon,_ as __namedExportsOrder,j as default};
