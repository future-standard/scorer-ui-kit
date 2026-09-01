import{Dt as e,Ft as t,Lt as n,Rt as r,W as i,Wt as a,c as o,wt as s,y as c}from"./iframe-C-UcmyvH.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_;function v(){return(v=l((()=>{u=a(),s(),r(),d=t(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p=n.div``,m={title:`Alerts/Modals`,components:c,decorator:[]},h=({message:t=`Hello`,leftButtonDesign:n,rightButtonDesign:r,title:i=``,leftButtonText:a=`Back`,leftButtonCallback:s=()=>{},rightButtonText:l=`Accept`,rightButtonCallback:u=()=>{}})=>{let{createModal:f}=e(),p=()=>{console.debug(`creatingModal`),f({isCloseEnable:!1,customComponent:m})},m=(0,d.jsx)(c,{title:i,message:t,leftButtonText:a,leftButtonDesign:n,leftButtonCallback:s,rightButtonDesign:r,rightButtonText:l,rightButtonCallback:u});return(0,d.jsx)(o,{design:`secondary`,onClick:p,children:`Open Modal`})},g=()=>{let e=(0,u.text)(`Title`,`Modal Title`),t=(0,u.text)(`Message`,`This is an example of some information provided to the customer to confirm an option`),n=(0,u.text)(`Left Button Text`,`Back`),r=(0,u.select)(`Left Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`secondary`),a=f(`Back button pressed`),o=(0,u.text)(`Right Button Text`,`I understand`),s=(0,u.select)(`Right Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`primary`),c=f(`Accept button pressed`);return(0,d.jsx)(p,{children:(0,d.jsx)(i,{children:(0,d.jsx)(h,{title:e,message:t,leftButtonText:n,leftButtonDesign:r,leftButtonCallback:a,rightButtonText:o,rightButtonDesign:s,rightButtonCallback:c})})})},g.__docgenInfo={description:``,methods:[],displayName:`_ConfirmationTemplate`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const title = text('Title', 'Modal Title');
  const msg = text('Message', 'This is an example of some information provided to the customer to confirm an option');
  const leftBtnTxt = text('Left Button Text', 'Back');
  const buttonDesignLeft = select('Left Button Design', {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger'
  }, 'secondary');
  const leftBtnCallback = action('Back button pressed');
  const RightBtnTxt = text('Right Button Text', 'I understand');
  const buttonDesignRight = select('Right Button Design', {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger'
  }, 'primary');
  const rightBtnCallback = action('Accept button pressed');

  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <ModalExample title={title} message={msg} leftButtonText={leftBtnTxt} leftButtonDesign={buttonDesignLeft} leftButtonCallback={leftBtnCallback} rightButtonText={RightBtnTxt} rightButtonDesign={buttonDesignRight} rightButtonCallback={rightBtnCallback} />
      </ModalProvider>
    </Container>;
}`,...g.parameters?.docs?.source}}},_=[`_ConfirmationTemplate`]})))()}v();export{g as _ConfirmationTemplate,_ as __namedExportsOrder,m as default};