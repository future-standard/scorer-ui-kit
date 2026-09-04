import{Gt as e,It as t,Ot as n,Rt as r,U as i,W as a,c as o,wt as s,zt as c}from"./iframe-C28gtL4u.js";import{n as l,t as u}from"./placeholder-Cf6rKdzI.js";import{n as d}from"./rolldown-runtime-DkW27tQK.js";var f,p,m,h,g,_,v;function y(){return(y=d((()=>{f=e(),s(),c(),u(),p=t(),m={title:`Alerts/Modals`,components:i,decorator:[]},h=r.div``,g=({hasModalLimitsValue:e,imageSrc:t,retryLoading:r})=>{let{createModal:a}=n(),s=(0,p.jsx)(i,{hasModalLimits:e,mediaType:`img`,alt:`city`,src:t,retryLoading:r,minHeight:`300px`,minWidth:`300px`}),c=e?`auto`:`60%`;return(0,p.jsx)(o,{design:`secondary`,onClick:()=>{a({customComponent:s,padding:!1,width:c})},children:`Image Modal`})},_=()=>{let e=(0,f.boolean)(`Has Modal Limits`,!0),t=(0,f.text)(`Image Src`,l),n=(0,f.boolean)(`Retry Loading`,!1);return(0,p.jsx)(h,{children:(0,p.jsx)(a,{children:(0,p.jsx)(g,{hasModalLimitsValue:e,imageSrc:t,retryLoading:n})})})},_.__docgenInfo={description:``,methods:[],displayName:`_MediaModal`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_MediaModal`]})))()}y();export{_ as _MediaModal,v as __namedExportsOrder,m as default};