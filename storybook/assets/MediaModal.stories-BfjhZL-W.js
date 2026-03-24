import{j as a}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as g}from"./styled-components.browser.esm-D8a0uvnT.js";import{f as m,c as x,a as h,b as u}from"./index.modern-BCxVMgPd.js";import{d as s}from"./index-BtgrC99a.js";import"./index-Dh2lLoQQ.js";import"./index-Dz_aA26r.js";import"./iframe-CQb0CZlC.js";const v={title:"Alerts/Modals",components:m,decorator:[]},L=g.div``,y=({hasModalLimitsValue:e,imageSrc:t,retryLoading:r})=>{const{createModal:c}=h(),l=a.jsx(m,{hasModalLimits:e,mediaType:"img",alt:"city",src:t,retryLoading:r,minHeight:"300px",minWidth:"300px"}),p=e?"auto":"60%",M=()=>{c({customComponent:l,padding:!1,width:p})};return a.jsx(u,{design:"secondary",onClick:M,children:"Image Modal"})},o=()=>{const e=s.boolean("Has Modal Limits",!0),t=s.text("Image Src","/images/placeholders/640x480.png"),r=s.boolean("Retry Loading",!1);return a.jsx(L,{children:a.jsx(x,{children:a.jsx(y,{hasModalLimitsValue:e,imageSrc:t,retryLoading:r})})})};o.__docgenInfo={description:"",methods:[],displayName:"_MediaModal"};var i,d,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', '/images/placeholders/640x480.png');
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,...(n=(d=o.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const E=["_MediaModal"];export{o as _MediaModal,E as __namedExportsOrder,v as default};
