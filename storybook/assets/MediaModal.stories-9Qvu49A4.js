import{i as e}from"./preload-helper-xPQekRTU.js";import{Ft as t,H as n,It as r,Nt as i,St as a,Tt as o,Ut as s,V as c,s as l}from"./iframe-CW3QRQX7.js";import{n as u,t as d}from"./placeholder-Bsx_gz26.js";var f,p,m,h,g,_,v;e((()=>{f=s(),a(),r(),d(),p=i(),m={title:`Alerts/Modals`,components:c,decorator:[]},h=t.div``,g=({hasModalLimitsValue:e,imageSrc:t,retryLoading:n})=>{let{createModal:r}=o(),i=(0,p.jsx)(c,{hasModalLimits:e,mediaType:`img`,alt:`city`,src:t,retryLoading:n,minHeight:`300px`,minWidth:`300px`}),a=e?`auto`:`60%`;return(0,p.jsx)(l,{design:`secondary`,onClick:()=>{r({customComponent:i,padding:!1,width:a})},children:`Image Modal`})},_=()=>(0,p.jsx)(h,{children:(0,p.jsx)(n,{children:(0,p.jsx)(g,{hasModalLimitsValue:(0,f.boolean)(`Has Modal Limits`,!0),imageSrc:(0,f.text)(`Image Src`,u),retryLoading:(0,f.boolean)(`Retry Loading`,!1)})})}),_.__docgenInfo={description:``,methods:[],displayName:`_MediaModal`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_MediaModal`]}))();export{_ as _MediaModal,v as __namedExportsOrder,m as default};