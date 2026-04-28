import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,L as r,Lt as i,Pt as a,R as o,Rt as s,s as c,vt as l,xt as u}from"./iframe-BHdSP_o9.js";import{n as d,t as f}from"./placeholder-DnTErttm.js";var p,m,h,g,_,v,y;e((()=>{s(),n(),l(),p=a(),f(),m=t(),h={title:`Alerts/Modals`,components:r,decorator:[]},g=i.div``,_=({hasModalLimitsValue:e,imageSrc:t,retryLoading:n})=>{let{createModal:i}=u(),a=(0,m.jsx)(r,{hasModalLimits:e,mediaType:`img`,alt:`city`,src:t,retryLoading:n,minHeight:`300px`,minWidth:`300px`}),o=e?`auto`:`60%`;return(0,m.jsx)(c,{design:`secondary`,onClick:()=>{i({customComponent:a,padding:!1,width:o})},children:`Image Modal`})},v=()=>(0,m.jsx)(g,{children:(0,m.jsx)(o,{children:(0,m.jsx)(_,{hasModalLimitsValue:(0,p.boolean)(`Has Modal Limits`,!0),imageSrc:(0,p.text)(`Image Src`,d),retryLoading:(0,p.boolean)(`Retry Loading`,!1)})})}),v.__docgenInfo={description:``,methods:[],displayName:`_MediaModal`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,...v.parameters?.docs?.source}}},y=[`_MediaModal`]}))();export{v as _MediaModal,y as __namedExportsOrder,h as default};