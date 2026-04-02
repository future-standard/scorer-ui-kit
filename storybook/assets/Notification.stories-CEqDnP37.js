import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as l}from"./index-DnkWte70.js";import{c as h}from"./styled-components.browser.esm-CarAhzHj.js";import{d as e}from"./index-C-6Xbh3D.js";import{a as x}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{u,N as k,b as m}from"./index.modern-CMonYql-.js";import{g as y}from"./index-DQYbOqls.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const b=h.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,v={title:"Alerts/atoms",components:u,decorator:[]},j=o=>{const{sendNotification:i,clearNotifications:c}=u(),[s,a]=l.useState(o);return l.useEffect(()=>{a(o)},[o]),t.jsxs(t.Fragment,{children:[t.jsx(m,{design:"secondary",size:"small",onClick:()=>{i(s)},children:"Send notification"}),t.jsx(m,{onClick:()=>c(),children:"Clear Notifications"})]})},n=()=>{const o=e.boolean("Is Pinned",!1),i=e.select("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"info"),c=e.text("Message","This is a message example"),s={"":"",...y()},a=e.select("Icon",s,Object.keys(s)[0]),r=e.text("Action Text Button",""),g=x("Action was clicked"),T=x("The message was closed by the user"),C=()=>{const N=`User clicked on [${r}] button`;g(N)};return t.jsx(b,{children:t.jsx(k,{children:t.jsx(j,{type:i,message:c,icon:a,closeCallback:T,actionTextButton:r,onTextButtonClick:C,isPinned:o})})})};n.__docgenInfo={description:"",methods:[],displayName:"_Notification"};var d,p,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const isPin = boolean('Is Pinned', false);
  const type = select("Type", {
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Success: 'success',
    Neutral: 'neutral'
  }, 'info');
  const msg = text('Message', 'This is a message example');
  const iconList = {
    '': '',
    ...generateIconList()
  };
  const icon = select("Icon", iconList, Object.keys(iconList)[0]);
  const actionText = text('Action Text Button', '');
  const onTextBtnClick = action('Action was clicked');
  const closeCall = action('The message was closed by the user');
  const handleActionTextCall = () => {
    const text = \`User clicked on [\${actionText}] button\`;
    onTextBtnClick(text);
  };
  return <Container>
      <NotificationProvider>
        <NotificationExample type={type} message={msg} icon={icon} closeCallback={closeCall} actionTextButton={actionText} onTextButtonClick={handleActionTextCall} isPinned={isPin} />
      </NotificationProvider>
    </Container>;
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const O=["_Notification"];export{n as _Notification,O as __namedExportsOrder,v as default};
