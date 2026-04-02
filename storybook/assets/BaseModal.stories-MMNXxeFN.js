import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as l}from"./index-DnkWte70.js";import{c as u}from"./styled-components.browser.esm-CarAhzHj.js";import{d as t}from"./index-C-6Xbh3D.js";import{a as C}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{c as p,a as x,b as M}from"./index.modern-CMonYql-.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const y={title:"Alerts/Modals",components:p,decorator:[]},b=u.div``,E=o=>{const[n,a]=l.useState(o),{createModal:r}=x(),d=()=>{r({...n})};return l.useEffect(()=>{a(o)},[o]),e.jsx(M,{design:"secondary",onClick:d,children:"Base Modal"})},f=e.jsx("h1",{children:"Hello!"}),s=()=>{const o=t.text("Close text","Close"),n=t.boolean("Is Close Enabled",!0),a=t.boolean("Padding",!0),r=C("Modal dismissed"),d=t.boolean("Show Custom Component",!1);return e.jsx(b,{children:e.jsx(p,{children:e.jsx(E,{closeText:o,isCloseEnable:n,padding:a,dismissCallback:r,customComponent:d?f:void 0})})})};s.__docgenInfo={description:"",methods:[],displayName:"_BaseModal"};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const closeTxt = text('Close text', 'Close');
  const isCloseEnable = boolean('Is Close Enabled', true);
  const padding = boolean('Padding', true);
  const dismissAction = action('Modal dismissed');
  const showCustom = boolean('Show Custom Component', false);

  // Provider should be at main Index level, it's here just for the example
  return <Container>
      <ModalProvider>
        <EmptyModal closeText={closeTxt} isCloseEnable={isCloseEnable} padding={padding} dismissCallback={dismissAction} customComponent={showCustom ? customComponentExample : undefined} />
      </ModalProvider>
    </Container>;
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const I=["_BaseModal"];export{s as _BaseModal,I as __namedExportsOrder,y as default};
