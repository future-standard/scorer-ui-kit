import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-BOHTTzl1.js";import{i as a,n as o,r as s,t as c}from"./useModal-d90x0uc7.js";import{_ as l,a as u,o as d}from"./iframe-Cw1eIbNi.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{f=l(),p=t(),r(),a(),c(),d(),m=n(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`Alerts/Modals`,components:s,decorator:[]},_=u.div``,v=e=>{let[t,n]=(0,p.useState)(e),{createModal:r}=o();return(0,p.useEffect)(()=>{n(e)},[e]),(0,m.jsx)(i,{design:`secondary`,onClick:()=>{r({...t})},children:`Base Modal`})},y=(0,m.jsx)(`h1`,{children:`Hello!`}),b=()=>{let e=(0,f.text)(`Close text`,`Close`),t=(0,f.boolean)(`Is Close Enabled`,!0),n=(0,f.boolean)(`Padding`,!0),r=h(`Modal dismissed`),i=(0,f.boolean)(`Show Custom Component`,!1);return(0,m.jsx)(_,{children:(0,m.jsx)(s,{children:(0,m.jsx)(v,{closeText:e,isCloseEnable:t,padding:n,dismissCallback:r,customComponent:i?y:void 0})})})},x=[`_BaseModal`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as _BaseModal,x as __namedExportsOrder,g as default};