import{i as e}from"./preload-helper-xPQekRTU.js";import{L as t,Mt as n,R as r,jt as i,kt as a,s as o,vt as s,xt as c,zt as l}from"./iframe-cNP1dtGl.js";import{n as u,t as d}from"./placeholder-Bsx_gz26.js";var f,p,m,h,g,_,v;e((()=>{f=l(),s(),n(),d(),p=a(),m={title:`Alerts/Modals`,components:t,decorator:[]},h=i.div``,g=({hasModalLimitsValue:e,imageSrc:n,retryLoading:r})=>{let{createModal:i}=c(),a=(0,p.jsx)(t,{hasModalLimits:e,mediaType:`img`,alt:`city`,src:n,retryLoading:r,minHeight:`300px`,minWidth:`300px`}),s=e?`auto`:`60%`;return(0,p.jsx)(o,{design:`secondary`,onClick:()=>{i({customComponent:a,padding:!1,width:s})},children:`Image Modal`})},_=()=>(0,p.jsx)(h,{children:(0,p.jsx)(r,{children:(0,p.jsx)(g,{hasModalLimitsValue:(0,f.boolean)(`Has Modal Limits`,!0),imageSrc:(0,f.text)(`Image Src`,u),retryLoading:(0,f.boolean)(`Retry Loading`,!1)})})}),_.__docgenInfo={description:``,methods:[],displayName:`_MediaModal`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_MediaModal`]}))();export{_ as _MediaModal,v as __namedExportsOrder,m as default};