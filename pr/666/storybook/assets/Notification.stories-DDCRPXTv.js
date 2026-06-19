import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{B as n,Bt as r,Mt as i,St as a,jt as o,kt as s,s as c,vt as l,zt as u}from"./iframe-C59WqszT.js";import{n as d,t as f}from"./helpers-CwEyVb6O.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{p=u(),m=t(r()),l(),i(),d(),h=s(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=o.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,v={title:`Alerts/atoms`,components:a,decorator:[]},y=[{type:`info`,message:`Info — this is notification #1`},{type:`success`,message:`Success — this is notification #2`},{type:`warning`,message:`Warning — this is notification #3`},{type:`error`,message:`Error — this is notification #4`},{type:`neutral`,message:`Neutral — this is notification #5`}],b=e=>{let{sendNotification:t,clearNotifications:n}=a(),[r,i]=(0,m.useState)(e),o=(0,m.useRef)(0);return(0,m.useEffect)(()=>{i(e)},[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{design:`secondary`,size:`small`,onClick:()=>{let e=y[o.current%y.length];o.current+=1,t({...r,...e})},children:`Send notification`}),(0,h.jsx)(c,{onClick:()=>n(),children:`Clear Notifications`})]})},x=()=>{let e=(0,p.boolean)(`Is Pinned`,!1),t=(0,p.select)(`Type`,{Error:`error`,Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`info`),r=(0,p.text)(`Message`,`This is a message example`),i={"":``,...f()},a=(0,p.select)(`Icon`,i,Object.keys(i)[0]),o=(0,p.text)(`Action Text Button`,``),s=g(`Action was clicked`),c=g(`The message was closed by the user`);return(0,h.jsx)(_,{children:(0,h.jsx)(n,{children:(0,h.jsx)(b,{type:t,message:r,icon:a,closeCallback:c,actionTextButton:o,onTextButtonClick:()=>{s(`User clicked on [${o}] button`)},isPinned:e})})})},x.__docgenInfo={description:``,methods:[],displayName:`_Notification`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const isPin = boolean('Is Pinned', false);
  const type = select('Type', {
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
  const icon = select('Icon', iconList, Object.keys(iconList)[0]);
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
}`,...x.parameters?.docs?.source}}},S=[`_Notification`]}))();export{x as _Notification,S as __namedExportsOrder,v as default};