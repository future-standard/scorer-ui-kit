import{Gt as e,It as t,Rt as n,W as r,ft as i,wt as a,zt as o}from"./iframe-C28gtL4u.js";import{n as s,t as c}from"./placeholder-Cf6rKdzI.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=l((()=>{u=e(),a(),o(),c(),d=t(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p=`https://future-standard.github.io/scorer-ui-kit/traffic.mp4`,m={title:`Tables/atoms`,component:i,decorators:[]},h=n.div`
  height: 200px;
  width:  800px;
  display: flex;
  justify-content: center;
  align-items: center;
`,g=n.div`
  flex: 0;
  height: 35px;
`,_=()=>{let e=(0,u.boolean)(`Zoom On Hover`,!0),t=(0,u.text)(`Image Src`,s),n=(0,u.text)(`Video Src`,p),a=(0,u.select)(`Media Type`,[`img`,`video`],`video`),o=(0,u.boolean)(`Retry Image`,!1),c=f(`Doing some other action than opening a modal`),l=(0,u.boolean)(`Custom onClickThumnail`,!1);return(0,d.jsx)(h,{children:(0,d.jsx)(r,{children:(0,d.jsx)(g,{children:(0,d.jsx)(i,{onClickThumbnail:l?c:void 0,hoverZoom:e,image:t,mediaUrl:n,mediaType:a,retryImageLoad:o})})})})},_.__docgenInfo={description:``,methods:[],displayName:`_RowThumbnail`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const hoverZoom = boolean('Zoom On Hover', true);
  const image = text('Image Src', photo);
  const mediaUrl = text('Video Src', video);
  const mediaType = select('Media Type', ['img', 'video'], 'video');
  const retryImageLoad = boolean('Retry Image', false);
  const onClickAction = action('Doing some other action than opening a modal');
  const onClickThumbnail = boolean('Custom onClickThumnail', false);

  // Provider should be at main Index level, it's here just for the example
  return <Container>
      <ModalProvider>
        <ContainerInner>
          <TableRowThumbnail onClickThumbnail={onClickThumbnail ? onClickAction : undefined} {...{
          hoverZoom,
          image,
          mediaUrl,
          mediaType,
          retryImageLoad
        }} />
        </ContainerInner>
      </ModalProvider>
    </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_RowThumbnail`]})))()}y();export{_ as _RowThumbnail,v as __namedExportsOrder,m as default};