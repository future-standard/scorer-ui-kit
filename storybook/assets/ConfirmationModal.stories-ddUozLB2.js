import{o as B,d as t,j as n,n as T,a as y,k as b,l as C}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,D=y.div``,R={title:"Alerts/Modals",components:B,decorator:[]},M=({message:o="Hello",leftButtonDesign:a,rightButtonDesign:s,title:r="",leftButtonText:i="Back",leftButtonCallback:l=()=>{},rightButtonText:c="Accept",rightButtonCallback:d=()=>{}})=>{const{createModal:x}=b(),f=()=>{console.debug("creatingModal"),x({isCloseEnable:!1,customComponent:h})},h=n.jsx(B,{title:r,message:o,leftButtonText:i,leftButtonDesign:a,leftButtonCallback:l,rightButtonDesign:s,rightButtonText:c,rightButtonCallback:d});return n.jsx(C,{design:"secondary",onClick:f,children:"Open Modal"})},e=()=>{const o=t.text("Title","Modal Title"),a=t.text("Message","This is an example of some information provided to the customer to confirm an option"),s=t.text("Left Button Text","Back"),r=t.select("Left Button Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"secondary"),i=g("Back button pressed"),l=t.text("Right Button Text","I understand"),c=t.select("Right Button Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),d=g("Accept button pressed");return n.jsx(D,{children:n.jsx(T,{children:n.jsx(M,{title:o,message:a,leftButtonText:s,leftButtonDesign:r,leftButtonCallback:i,rightButtonText:l,rightButtonDesign:c,rightButtonCallback:d})})})};e.__docgenInfo={description:"",methods:[],displayName:"_ConfirmationTemplate"};var m,u,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const P=["_ConfirmationTemplate"];export{e as _ConfirmationTemplate,P as __namedExportsOrder,R as default};
