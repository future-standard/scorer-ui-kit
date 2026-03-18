import{j as o}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as p}from"./styled-components.browser.esm-CarAhzHj.js";import{f as m,c as x,a as h,b as u}from"./index.modern-CLl990BG.js";import{d as s}from"./index-C-6Xbh3D.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const C={title:"Alerts/Modals",components:m,decorator:[]},L=p.div``,y=({hasModalLimitsValue:e,imageSrc:t,retryLoading:r})=>{const{createModal:c}=h(),l=o.jsx(m,{hasModalLimits:e,mediaType:"img",alt:"city",src:t,retryLoading:r,minHeight:"300px",minWidth:"300px"}),M=e?"auto":"60%",g=()=>{c({customComponent:l,padding:!1,width:M})};return o.jsx(u,{design:"secondary",onClick:g,children:"Image Modal"})},a=()=>{const e=s.boolean("Has Modal Limits",!0),t=s.text("Image Src","/images/placeholders/640x480.png"),r=s.boolean("Retry Loading",!1);return o.jsx(L,{children:o.jsx(x,{children:o.jsx(y,{hasModalLimitsValue:e,imageSrc:t,retryLoading:r})})})};a.__docgenInfo={description:"",methods:[],displayName:"_MediaModal"};var i,d,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', '/images/placeholders/640x480.png');
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const v=["_MediaModal"];export{a as _MediaModal,v as __namedExportsOrder,C as default};
