import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,R as a,Rt as o,m as s,s as c,vt as l,xt as u}from"./iframe-BHdSP_o9.js";var d,f,p,m,h,g,_,v;e((()=>{o(),n(),d=i(),l(),f=t(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m=r.div``,h={title:`Alerts/Modals`,components:s,decorator:[]},g=({message:e=`Hello`,leftButtonDesign:t,rightButtonDesign:n,title:r=``,leftButtonText:i=`Back`,leftButtonCallback:a=()=>{},rightButtonText:o=`Accept`,rightButtonCallback:l=()=>{}})=>{let{createModal:d}=u(),p=()=>{console.debug(`creatingModal`),d({isCloseEnable:!1,customComponent:m})},m=(0,f.jsx)(s,{title:r,message:e,leftButtonText:i,leftButtonDesign:t,leftButtonCallback:a,rightButtonDesign:n,rightButtonText:o,rightButtonCallback:l});return(0,f.jsx)(c,{design:`secondary`,onClick:p,children:`Open Modal`})},_=()=>(0,f.jsx)(m,{children:(0,f.jsx)(a,{children:(0,f.jsx)(g,{title:(0,d.text)(`Title`,`Modal Title`),message:(0,d.text)(`Message`,`This is an example of some information provided to the customer to confirm an option`),leftButtonText:(0,d.text)(`Left Button Text`,`Back`),leftButtonDesign:(0,d.select)(`Left Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`secondary`),leftButtonCallback:p(`Back button pressed`),rightButtonText:(0,d.text)(`Right Button Text`,`I understand`),rightButtonDesign:(0,d.select)(`Right Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`primary`),rightButtonCallback:p(`Accept button pressed`)})})}),_.__docgenInfo={description:``,methods:[],displayName:`_ConfirmationTemplate`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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