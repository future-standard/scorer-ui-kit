import{n as p,d as t,j as e,a as u,r,k as C,l as x}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,j={title:"Alerts/Modals",components:p,decorator:[]},E=u.div``,b=o=>{const[n,a]=r.useState(o),{createModal:d}=C(),l=()=>{d({...n})};return r.useEffect(()=>{a(o)},[o]),e.jsx(x,{design:"secondary",onClick:l,children:"Base Modal"})},h=e.jsx("h1",{children:"Hello!"}),s=()=>{const o=t.text("Close text","Close"),n=t.boolean("Is Close Enabled",!0),a=t.boolean("Padding",!0),d=M("Modal dismissed"),l=t.boolean("Show Custom Component",!1);return e.jsx(E,{children:e.jsx(p,{children:e.jsx(b,{closeText:o,isCloseEnable:n,padding:a,dismissCallback:d,customComponent:l?h:void 0})})})};s.__docgenInfo={description:"",methods:[],displayName:"_BaseModal"};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["_BaseModal"];export{s as _BaseModal,P as __namedExportsOrder,j as default};
