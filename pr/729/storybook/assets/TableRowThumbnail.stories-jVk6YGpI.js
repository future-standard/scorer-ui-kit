import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./TableRowThumbnail-BOZ36o_D.js";import{i,r as a}from"./useModal-CyLtzX7q.js";import{_ as o,a as s,o as c}from"./iframe-PEYaYO03.js";import{n as l,t as u}from"./placeholder-Trrcww9-.js";var d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{d=o(),i(),n(),c(),u(),f=t(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m=`https://future-standard.github.io/scorer-ui-kit/traffic.mp4`,h={title:`Tables/atoms`,component:r,decorators:[]},g=s.div`
  height: 200px;
  width:  800px;
  display: flex;
  justify-content: center;
  align-items: center;
`,_=s.div`
  flex: 0;
  height: 35px;
`,v=()=>{let e=(0,d.boolean)(`Zoom On Hover`,!0),t=(0,d.text)(`Image Src`,l),n=(0,d.text)(`Video Src`,m),i=(0,d.select)(`Media Type`,[`img`,`video`],`video`),o=(0,d.boolean)(`Retry Image`,!1),s=p(`Doing some other action than opening a modal`),c=(0,d.boolean)(`Custom onClickThumnail`,!1);return(0,f.jsx)(g,{children:(0,f.jsx)(a,{children:(0,f.jsx)(_,{children:(0,f.jsx)(r,{onClickThumbnail:c?s:void 0,hoverZoom:e,image:t,mediaUrl:n,mediaType:i,retryImageLoad:o})})})})},y=[`_RowThumbnail`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as _RowThumbnail,y as __namedExportsOrder,h as default};