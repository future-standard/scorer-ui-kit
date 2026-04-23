import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,bt as r,ct as i,jt as a,kt as o,z as s}from"./iframe-BrOiogMm.js";import{n as c,t as l}from"./placeholder-DnTErttm.js";var u,d,f,p,m,h,g,_,v;e((()=>{u=t(),r(),o(),l(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p=`https://future-standard.github.io/scorer-ui-kit/traffic.mp4`,m={title:`Tables/atoms`,component:i,decorators:[]},h=a.div`
  height: 200px;
  width:  800px;
  display: flex;
  justify-content: center;
  align-items: center;
`,g=a.div`
  flex: 0;
  height: 35px;
`,_=()=>{let e=(0,u.boolean)(`Zoom On Hover`,!0),t=(0,u.text)(`Image Src`,c),n=(0,u.text)(`Video Src`,p),r=(0,u.select)(`Media Type`,[`img`,`video`],`video`),a=(0,u.boolean)(`Retry Image`,!1),o=f(`Doing some other action than opening a modal`);return(0,d.jsx)(h,{children:(0,d.jsx)(s,{children:(0,d.jsx)(g,{children:(0,d.jsx)(i,{onClickThumbnail:(0,u.boolean)(`Custom onClickThumnail`,!1)?o:void 0,hoverZoom:e,image:t,mediaUrl:n,mediaType:r,retryImageLoad:a})})})})},_.__docgenInfo={description:``,methods:[],displayName:`_RowThumbnail`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v=[`_RowThumbnail`]}))();export{_ as _RowThumbnail,v as __namedExportsOrder,m as default};