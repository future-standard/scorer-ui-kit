import{n as e}from"./chunk-BneVvdWh.js";import{Ct as t,Et as n,Ft as r,Lt as i,Pt as a,R as o,Rt as s,bt as c,s as l,z as u}from"./iframe-Ctt8ZGpV.js";import{n as d,t as f}from"./placeholder-DnTErttm.js";var p,m,h,g,_,v,y;e((()=>{s(),r(),c(),p=a(),f(),m=n(),h={title:`Alerts/Modals`,components:o,decorator:[]},g=i.div``,_=({hasModalLimitsValue:e,imageSrc:n,retryLoading:r})=>{let{createModal:i}=t(),a=(0,m.jsx)(o,{hasModalLimits:e,mediaType:`img`,alt:`city`,src:n,retryLoading:r,minHeight:`300px`,minWidth:`300px`}),s=e?`auto`:`60%`;return(0,m.jsx)(l,{design:`secondary`,onClick:()=>{i({customComponent:a,padding:!1,width:s})},children:`Image Modal`})},v=()=>(0,m.jsx)(g,{children:(0,m.jsx)(u,{children:(0,m.jsx)(_,{hasModalLimitsValue:(0,p.boolean)(`Has Modal Limits`,!0),imageSrc:(0,p.text)(`Image Src`,d),retryLoading:(0,p.boolean)(`Retry Loading`,!1)})})}),v.__docgenInfo={description:``,methods:[],displayName:`_MediaModal`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,...v.parameters?.docs?.source}}},y=[`_MediaModal`]}))();export{v as _MediaModal,y as __namedExportsOrder,h as default};