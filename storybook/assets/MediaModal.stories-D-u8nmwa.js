import{j as a}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as g}from"./styled-components.browser.esm-CarAhzHj.js";import{f as m,c as h,a as u,b as x}from"./index.modern-CMonYql-.js";import{d as s}from"./index-C-6Xbh3D.js";import{p as L}from"./placeholder-BcVwUhHh.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const P={title:"Alerts/Modals",components:m,decorator:[]},f=g.div``,y=({hasModalLimitsValue:e,imageSrc:t,retryLoading:r})=>{const{createModal:c}=u(),l=a.jsx(m,{hasModalLimits:e,mediaType:"img",alt:"city",src:t,retryLoading:r,minHeight:"300px",minWidth:"300px"}),M=e?"auto":"60%",p=()=>{c({customComponent:l,padding:!1,width:M})};return a.jsx(x,{design:"secondary",onClick:p,children:"Image Modal"})},o=()=>{const e=s.boolean("Has Modal Limits",!0),t=s.text("Image Src",L),r=s.boolean("Retry Loading",!1);return a.jsx(f,{children:a.jsx(h,{children:a.jsx(y,{hasModalLimitsValue:e,imageSrc:t,retryLoading:r})})})};o.__docgenInfo={description:"",methods:[],displayName:"_MediaModal"};var i,d,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,...(n=(d=o.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const E=["_MediaModal"];export{o as _MediaModal,E as __namedExportsOrder,P as default};
