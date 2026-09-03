import{t as e}from"./react-BZJXY1be.js";import{Dt as t,Ft as n,Lt as r,Rt as i,W as a,Wt as o,c as s,wt as c}from"./iframe-CH2zgN-8.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=l((()=>{u=o(),d=e(),c(),i(),f=n(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Alerts/Modals`,components:a,decorator:[]},h=r.div``,g=e=>{let[n,r]=(0,d.useState)(e),{createModal:i}=t();return(0,d.useEffect)(()=>{r(e)},[e]),(0,f.jsx)(s,{design:`secondary`,onClick:()=>{i({...n})},children:`Base Modal`})},_=(0,f.jsx)(`h1`,{children:`Hello!`}),v=()=>{let e=(0,u.text)(`Close text`,`Close`),t=(0,u.boolean)(`Is Close Enabled`,!0),n=(0,u.boolean)(`Padding`,!0),r=p(`Modal dismissed`),i=(0,u.boolean)(`Show Custom Component`,!1);return(0,f.jsx)(h,{children:(0,f.jsx)(a,{children:(0,f.jsx)(g,{closeText:e,isCloseEnable:t,padding:n,dismissCallback:r,customComponent:i?_:void 0})})})},v.__docgenInfo={description:``,methods:[],displayName:`_BaseModal`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`_BaseModal`]})))()}b();export{v as _BaseModal,y as __namedExportsOrder,m as default};