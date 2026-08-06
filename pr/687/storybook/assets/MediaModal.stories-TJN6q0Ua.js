import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,Et as n,H as r,It as i,Lt as a,Pt as o,U as s,Wt as c,s as l}from"./iframe-BMz55O8f.js";import{n as u,t as d}from"./placeholder-Bsx_gz26.js";var f,p,m,h,g,_,v;e((()=>{f=c(),t(),a(),d(),p=o(),m={title:`Alerts/Modals`,components:r,decorator:[]},h=i.div``,g=({hasModalLimitsValue:e,imageSrc:t,retryLoading:i})=>{let{createModal:a}=n(),o=(0,p.jsx)(r,{hasModalLimits:e,mediaType:`img`,alt:`city`,src:t,retryLoading:i,minHeight:`300px`,minWidth:`300px`}),s=e?`auto`:`60%`;return(0,p.jsx)(l,{design:`secondary`,onClick:()=>{a({customComponent:o,padding:!1,width:s})},children:`Image Modal`})},_=()=>(0,p.jsx)(h,{children:(0,p.jsx)(s,{children:(0,p.jsx)(g,{hasModalLimitsValue:(0,f.boolean)(`Has Modal Limits`,!0),imageSrc:(0,f.text)(`Image Src`,u),retryLoading:(0,f.boolean)(`Retry Loading`,!1)})})}),_.__docgenInfo={description:``,methods:[],displayName:`_MediaModal`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_MediaModal`]}))();export{_ as _MediaModal,v as __namedExportsOrder,m as default};