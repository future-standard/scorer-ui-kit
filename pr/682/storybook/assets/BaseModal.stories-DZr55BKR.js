import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ft as n,H as r,It as i,Nt as a,St as o,Tt as s,Ut as c,Wt as l,s as u}from"./iframe-DB8xyy-s.js";var d,f,p,m,h,g,_,v,y,b;e((()=>{d=c(),f=t(l()),o(),i(),p=a(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Alerts/Modals`,components:r,decorator:[]},g=n.div``,_=e=>{let[t,n]=(0,f.useState)(e),{createModal:r}=s();return(0,f.useEffect)(()=>{n(e)},[e]),(0,p.jsx)(u,{design:`secondary`,onClick:()=>{r({...t})},children:`Base Modal`})},v=(0,p.jsx)(`h1`,{children:`Hello!`}),y=()=>(0,p.jsx)(g,{children:(0,p.jsx)(r,{children:(0,p.jsx)(_,{closeText:(0,d.text)(`Close text`,`Close`),isCloseEnable:(0,d.boolean)(`Is Close Enabled`,!0),padding:(0,d.boolean)(`Padding`,!0),dismissCallback:m(`Modal dismissed`),customComponent:(0,d.boolean)(`Show Custom Component`,!1)?v:void 0})})}),y.__docgenInfo={description:``,methods:[],displayName:`_BaseModal`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b=[`_BaseModal`]}))();export{y as _BaseModal,b as __namedExportsOrder,h as default};