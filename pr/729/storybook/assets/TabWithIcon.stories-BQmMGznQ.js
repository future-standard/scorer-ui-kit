import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,o as r,r as i,t as a}from"./TabList-t-VVbPy6.js";import{n as o,t as s}from"./TabWithIcon-CQ-iZaYe.js";import{_ as c,a as l,o as u}from"./iframe-Cw1eIbNi.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{d=c(),i(),r(),o(),u(),f=t(),p={title:`Misc/atoms`,component:s,decorators:[]},m=l.div``,h=()=>{let e=(0,d.text)(`Icon`,`Success`),t=(0,d.text)(`Title`,`New Items`),r=(0,d.text)(`Subtitle`,`Selected 120 of 120`),i=(0,d.boolean)(`Show selected`,!1);return(0,f.jsx)(m,{children:(0,f.jsx)(n,{children:(0,f.jsx)(a,{defaultTabId:i?`exampleTab`:`none`,children:(0,f.jsx)(s,{icon:e,title:t,subtitle:r,tabFor:`exampleTab`})})})})},g=[`_TabWithIcon`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as _TabWithIcon,g as __namedExportsOrder,p as default};