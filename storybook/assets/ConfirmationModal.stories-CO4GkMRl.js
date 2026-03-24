import{j as o}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as y}from"./styled-components.browser.esm-CarAhzHj.js";import{d as t}from"./index-C-6Xbh3D.js";import{a as m}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{C as f,c as b,a as C,b as T}from"./index.modern-B3hCc7YS.js";import"./index-DnkWte70.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const D=y.div``,S={title:"Alerts/Modals",components:f,decorator:[]},M=({message:n="Hello",leftButtonDesign:a,rightButtonDesign:r,title:s="",leftButtonText:i="Back",leftButtonCallback:c=()=>{},rightButtonText:l="Accept",rightButtonCallback:d=()=>{}})=>{const{createModal:x}=C(),B=()=>{console.log("creatingModal"),x({isCloseEnable:!1,customComponent:h})},h=o.jsx(f,{title:s,message:n,leftButtonText:i,leftButtonDesign:a,leftButtonCallback:c,rightButtonDesign:r,rightButtonText:l,rightButtonCallback:d});return o.jsx(T,{design:"secondary",onClick:B,children:"Open Modal"})},e=()=>{const n=t.text("Title","Modal Title"),a=t.text("Message","This is an example of some information provided to the customer to confirm an option"),r=t.text("Left Button Text","Back"),s=t.select("Left Button Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"secondary"),i=m("Back button pressed"),c=t.text("Right Button Text","I understand"),l=t.select("Right Button Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),d=m("Accept button pressed");return o.jsx(D,{children:o.jsx(b,{children:o.jsx(M,{title:n,message:a,leftButtonText:r,leftButtonDesign:s,leftButtonCallback:i,rightButtonText:c,rightButtonDesign:l,rightButtonCallback:d})})})};e.__docgenInfo={description:"",methods:[],displayName:"_ConfirmationTemplate"};var g,p,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const A=["_ConfirmationTemplate"];export{e as _ConfirmationTemplate,A as __namedExportsOrder,S as default};
