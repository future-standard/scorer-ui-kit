import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Button-BOHTTzl1.js";import{r as i,t as a}from"./MediaBox-YM03rW1Y.js";import{i as o,n as s,r as c,t as l}from"./useModal-d90x0uc7.js";import{_ as u,a as d,o as f}from"./iframe-Cw1eIbNi.js";import{n as p,t as m}from"./placeholder-Trrcww9-.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{h=u(),n(),i(),o(),l(),f(),m(),g=t(),_={title:`Alerts/Modals`,components:a,decorator:[]},v=d.div``,y=({hasModalLimitsValue:e,imageSrc:t,retryLoading:n})=>{let{createModal:i}=s(),o=(0,g.jsx)(a,{hasModalLimits:e,mediaType:`img`,alt:`city`,src:t,retryLoading:n,minHeight:`300px`,minWidth:`300px`}),c=e?`auto`:`60%`;return(0,g.jsx)(r,{design:`secondary`,onClick:()=>{i({customComponent:o,padding:!1,width:c})},children:`Image Modal`})},b=()=>{let e=(0,h.boolean)(`Has Modal Limits`,!0),t=(0,h.text)(`Image Src`,p),n=(0,h.boolean)(`Retry Loading`,!1);return(0,g.jsx)(v,{children:(0,g.jsx)(c,{children:(0,g.jsx)(y,{hasModalLimitsValue:e,imageSrc:t,retryLoading:n})})})},x=[`_MediaModal`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', PlaceholderImage);
  const retryLoading = boolean('Retry Loading', false);
  return <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading} />
      </ModalProvider>
    </Container>;
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as _MediaModal,x as __namedExportsOrder,_ as default};