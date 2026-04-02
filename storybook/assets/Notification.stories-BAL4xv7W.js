import{i as N,d as o,j as t,N as y,a as k,r as d,l as u}from"./iframe-Dbt4m4Aq.js";import{g as I}from"./index-BfWBpCCZ.js";import"./preload-helper-C1FmrZbK.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,_=k.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,b={title:"Alerts/atoms",components:N,decorator:[]},p=[{type:"info",message:"Info — this is notification #1"},{type:"success",message:"Success — this is notification #2"},{type:"warning",message:"Warning — this is notification #3"},{type:"error",message:"Error — this is notification #4"},{type:"neutral",message:"Neutral — this is notification #5"}],A=e=>{const{sendNotification:c,clearNotifications:a}=N(),[i,r]=d.useState(e),n=d.useRef(0);d.useEffect(()=>{r(e)},[e]);const l=()=>{const x=p[n.current%p.length];n.current+=1,c({...i,...x})};return t.jsxs(t.Fragment,{children:[t.jsx(u,{design:"secondary",size:"small",onClick:l,children:"Send notification"}),t.jsx(u,{onClick:()=>a(),children:"Clear Notifications"})]})},s=()=>{const e=o.boolean("Is Pinned",!1),c=o.select("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"info"),a=o.text("Message","This is a message example"),i={"":"",...I()},r=o.select("Icon",i,Object.keys(i)[0]),n=o.text("Action Text Button",""),l=f("Action was clicked"),x=f("The message was closed by the user"),h=()=>{const C=`User clicked on [${n}] button`;l(C)};return t.jsx(_,{children:t.jsx(y,{children:t.jsx(A,{type:c,message:a,icon:r,closeCallback:x,actionTextButton:n,onTextButtonClick:h,isPinned:e})})})};s.__docgenInfo={description:"",methods:[],displayName:"_Notification"};var m,g,T;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const j=["_Notification"];export{s as _Notification,j as __namedExportsOrder,b as default};
