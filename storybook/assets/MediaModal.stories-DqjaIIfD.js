import{v as l,d as r,j as o,n as p,a as u,k as h,l as x}from"./iframe-BQPDKgpJ.js";import{p as L}from"./placeholder-BcVwUhHh.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const v={title:"Alerts/Modals",components:l,decorator:[]},y=u.div``,I=({hasModalLimitsValue:e,imageSrc:t,retryLoading:s})=>{const{createModal:m}=h(),c=o.jsx(l,{hasModalLimits:e,mediaType:"img",alt:"city",src:t,retryLoading:s,minHeight:"300px",minWidth:"300px"}),M=e?"auto":"60%",g=()=>{m({customComponent:c,padding:!1,width:M})};return o.jsx(x,{design:"secondary",onClick:g,children:"Image Modal"})},a=()=>{const e=r.boolean("Has Modal Limits",!0),t=r.text("Image Src",L),s=r.boolean("Retry Loading",!1);return o.jsx(y,{children:o.jsx(p,{children:o.jsx(I,{hasModalLimitsValue:e,imageSrc:t,retryLoading:s})})})};a.__docgenInfo={description:"",methods:[],displayName:"_MediaModal"};var i,d,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const C=["_MediaModal"];export{a as _MediaModal,C as __namedExportsOrder,v as default};
