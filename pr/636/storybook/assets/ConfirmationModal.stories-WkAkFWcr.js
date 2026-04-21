import{n as e}from"./chunk-BneVvdWh.js";import{Ct as t,Lt as n,Ot as r,bt as i,jt as a,kt as o,m as s,s as c,z as l}from"./iframe-Du_t-W6m.js";var u,d,f,p,m,h,g,_;e((()=>{u=n(),i(),o(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p=a.div``,m={title:`Alerts/Modals`,components:s,decorator:[]},h=({message:e=`Hello`,leftButtonDesign:n,rightButtonDesign:r,title:i=``,leftButtonText:a=`Back`,leftButtonCallback:o=()=>{},rightButtonText:l=`Accept`,rightButtonCallback:u=()=>{}})=>{let{createModal:f}=t(),p=()=>{console.debug(`creatingModal`),f({isCloseEnable:!1,customComponent:m})},m=(0,d.jsx)(s,{title:i,message:e,leftButtonText:a,leftButtonDesign:n,leftButtonCallback:o,rightButtonDesign:r,rightButtonText:l,rightButtonCallback:u});return(0,d.jsx)(c,{design:`secondary`,onClick:p,children:`Open Modal`})},g=()=>(0,d.jsx)(p,{children:(0,d.jsx)(l,{children:(0,d.jsx)(h,{title:(0,u.text)(`Title`,`Modal Title`),message:(0,u.text)(`Message`,`This is an example of some information provided to the customer to confirm an option`),leftButtonText:(0,u.text)(`Left Button Text`,`Back`),leftButtonDesign:(0,u.select)(`Left Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`secondary`),leftButtonCallback:f(`Back button pressed`),rightButtonText:(0,u.text)(`Right Button Text`,`I understand`),rightButtonDesign:(0,u.select)(`Right Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`primary`),rightButtonCallback:f(`Accept button pressed`)})})}),g.__docgenInfo={description:``,methods:[],displayName:`_ConfirmationTemplate`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`_ConfirmationTemplate`]}))();export{g as _ConfirmationTemplate,_ as __namedExportsOrder,m as default};