import{n as e}from"./chunk-BneVvdWh.js";import{Ct as t,Lt as n,Ot as r,R as i,bt as a,jt as o,kt as s,s as c,z as l}from"./iframe-DPUDVTHl.js";import{n as u,t as d}from"./placeholder-DnTErttm.js";var f,p,m,h,g,_,v;e((()=>{f=n(),a(),s(),d(),p=r(),m={title:`Alerts/Modals`,components:i,decorator:[]},h=o.div``,g=({hasModalLimitsValue:e,imageSrc:n,retryLoading:r})=>{let{createModal:a}=t(),o=(0,p.jsx)(i,{hasModalLimits:e,mediaType:`img`,alt:`city`,src:n,retryLoading:r,minHeight:`300px`,minWidth:`300px`}),s=e?`auto`:`60%`;return(0,p.jsx)(c,{design:`secondary`,onClick:()=>{a({customComponent:o,padding:!1,width:s})},children:`Image Modal`})},_=()=>(0,p.jsx)(h,{children:(0,p.jsx)(l,{children:(0,p.jsx)(g,{hasModalLimitsValue:(0,f.boolean)(`Has Modal Limits`,!0),imageSrc:(0,f.text)(`Image Src`,u),retryLoading:(0,f.boolean)(`Retry Loading`,!1)})})}),_.__docgenInfo={description:``,methods:[],displayName:`_MediaModal`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_MediaModal`]}))();export{_ as _MediaModal,v as __namedExportsOrder,m as default};