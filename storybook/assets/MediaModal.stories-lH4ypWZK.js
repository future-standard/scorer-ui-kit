import{Dt as e,Ft as t,Lt as n,Rt as r,U as i,W as a,Wt as o,c as s,wt as c}from"./iframe-C-UcmyvH.js";import{n as l,t as u}from"./placeholder-Cf6rKdzI.js";import{n as d}from"./rolldown-runtime-DkW27tQK.js";var f,p,m,h,g,_,v;function y(){return(y=d((()=>{f=o(),c(),r(),u(),p=t(),m={title:`Alerts/Modals`,components:i,decorator:[]},h=n.div``,g=({hasModalLimitsValue:t,imageSrc:n,retryLoading:r})=>{let{createModal:a}=e(),o=(0,p.jsx)(i,{hasModalLimits:t,mediaType:`img`,alt:`city`,src:n,retryLoading:r,minHeight:`300px`,minWidth:`300px`}),c=t?`auto`:`60%`;return(0,p.jsx)(s,{design:`secondary`,onClick:()=>{a({customComponent:o,padding:!1,width:c})},children:`Image Modal`})},_=()=>{let e=(0,f.boolean)(`Has Modal Limits`,!0),t=(0,f.text)(`Image Src`,l),n=(0,f.boolean)(`Retry Loading`,!1);return(0,p.jsx)(h,{children:(0,p.jsx)(a,{children:(0,p.jsx)(g,{hasModalLimitsValue:e,imageSrc:t,retryLoading:n})})})},_.__docgenInfo={description:``,methods:[],displayName:`_MediaModal`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_MediaModal`]})))()}y();export{_ as _MediaModal,v as __namedExportsOrder,m as default};