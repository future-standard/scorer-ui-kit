import{n as e}from"./chunk-BneVvdWh.js";import{Ct as t,Et as n,Ft as r,Lt as i,Pt as a,Rt as o,bt as s,m as c,s as l,z as u}from"./iframe-C0e3YAX7.js";var d,f,p,m,h,g,_,v;e((()=>{o(),r(),d=a(),s(),f=n(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m=i.div``,h={title:`Alerts/Modals`,components:c,decorator:[]},g=({message:e=`Hello`,leftButtonDesign:n,rightButtonDesign:r,title:i=``,leftButtonText:a=`Back`,leftButtonCallback:o=()=>{},rightButtonText:s=`Accept`,rightButtonCallback:u=()=>{}})=>{let{createModal:d}=t(),p=()=>{console.debug(`creatingModal`),d({isCloseEnable:!1,customComponent:m})},m=(0,f.jsx)(c,{title:i,message:e,leftButtonText:a,leftButtonDesign:n,leftButtonCallback:o,rightButtonDesign:r,rightButtonText:s,rightButtonCallback:u});return(0,f.jsx)(l,{design:`secondary`,onClick:p,children:`Open Modal`})},_=()=>(0,f.jsx)(m,{children:(0,f.jsx)(u,{children:(0,f.jsx)(g,{title:(0,d.text)(`Title`,`Modal Title`),message:(0,d.text)(`Message`,`This is an example of some information provided to the customer to confirm an option`),leftButtonText:(0,d.text)(`Left Button Text`,`Back`),leftButtonDesign:(0,d.select)(`Left Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`secondary`),leftButtonCallback:p(`Back button pressed`),rightButtonText:(0,d.text)(`Right Button Text`,`I understand`),rightButtonDesign:(0,d.select)(`Right Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`primary`),rightButtonCallback:p(`Accept button pressed`)})})}),_.__docgenInfo={description:``,methods:[],displayName:`_ConfirmationTemplate`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const title = text("Title", 'Modal Title');
  const msg = text('Message', 'This is an example of some information provided to the customer to confirm an option');
  const leftBtnTxt = text('Left Button Text', 'Back');
  const buttonDesignLeft = select("Left Button Design", {
    Primary: "primary",
    Secondary: "secondary",
    Danger: "danger"
  }, "secondary");
  const leftBtnCallback = action('Back button pressed');
  const RightBtnTxt = text('Right Button Text', 'I understand');
  const buttonDesignRight = select("Right Button Design", {
    Primary: "primary",
    Secondary: "secondary",
    Danger: "danger"
  }, "primary");
  const rightBtnCallback = action('Accept button pressed');

  // Provider should be at main Index level, it's here just for the story example
  return <Container>
    <ModalProvider>
      <ModalExample title={title} message={msg} leftButtonText={leftBtnTxt} leftButtonDesign={buttonDesignLeft} leftButtonCallback={leftBtnCallback} rightButtonText={RightBtnTxt} rightButtonDesign={buttonDesignRight} rightButtonCallback={rightBtnCallback} />
    </ModalProvider>
  </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_ConfirmationTemplate`]}))();export{_ as _ConfirmationTemplate,v as __namedExportsOrder,h as default};