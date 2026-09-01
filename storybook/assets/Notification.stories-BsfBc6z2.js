import{t as e}from"./react-BZJXY1be.js";import{Ft as t,K as n,Lt as r,Ot as i,Rt as a,Wt as o,c as s,wt as c}from"./iframe-C-UcmyvH.js";import{n as l,t as u}from"./helpers-Cktaogyc.js";import{n as d}from"./rolldown-runtime-DkW27tQK.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=d((()=>{f=o(),p=e(),c(),a(),l(),m=t(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g=r.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,_={title:`Alerts/atoms`,components:i,decorator:[]},v=[{type:`info`,message:`Info — this is notification #1`},{type:`success`,message:`Success — this is notification #2`},{type:`warning`,message:`Warning — this is notification #3`},{type:`error`,message:`Error — this is notification #4`},{type:`neutral`,message:`Neutral — this is notification #5`}],y=e=>{let{sendNotification:t,clearNotifications:n}=i(),[r,a]=(0,p.useState)(e),o=(0,p.useRef)(0);return(0,p.useEffect)(()=>{a(e)},[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{design:`secondary`,size:`small`,onClick:()=>{let e=v[o.current%v.length];o.current+=1,t({...r,...e})},children:`Send notification`}),(0,m.jsx)(s,{onClick:()=>n(),children:`Clear Notifications`})]})},b=()=>{let e=(0,f.boolean)(`Is Pinned`,!1),t=(0,f.select)(`Type`,{Error:`error`,Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`info`),r=(0,f.text)(`Message`,`This is a message example`),i={"":``,...u()},a=(0,f.select)(`Icon`,i,Object.keys(i)[0]),o=(0,f.text)(`Action Text Button`,``),s=h(`Action was clicked`),c=h(`The message was closed by the user`);return(0,m.jsx)(g,{children:(0,m.jsx)(n,{children:(0,m.jsx)(y,{type:t,message:r,icon:a,closeCallback:c,actionTextButton:o,onTextButtonClick:()=>{let e=`User clicked on [${o}] button`;s(e)},isPinned:e})})})},b.__docgenInfo={description:``,methods:[],displayName:`_Notification`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`_Notification`]})))()}S();export{b as _Notification,x as __namedExportsOrder,_ as default};