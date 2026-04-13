import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,bt as o,ct as s,z as c}from"./iframe-Bq-bFTg_.js";import{n as l,t as u}from"./placeholder-DnTErttm.js";var d,f,p,m,h,g,_,v,y;e((()=>{a(),d=i(),n(),u(),o(),f=t(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m=`https://future-standard.github.io/scorer-ui-kit/traffic.mp4`,h={title:`Tables/atoms`,component:s,decorators:[]},g=r.div`
  height: 200px;
  width:  800px;
  display: flex;
  justify-content: center;
  align-items: center;
`,_=r.div`
  flex: 0;
  height: 35px;
`,v=()=>{let e=(0,d.boolean)(`Zoom On Hover`,!0),t=(0,d.text)(`Image Src`,l),n=(0,d.text)(`Video Src`,m),r=(0,d.select)(`Media Type`,[`img`,`video`],`video`),i=(0,d.boolean)(`Retry Image`,!1),a=p(`Doing some other action than opening a modal`);return(0,f.jsx)(g,{children:(0,f.jsx)(c,{children:(0,f.jsx)(_,{children:(0,f.jsx)(s,{onClickThumbnail:(0,d.boolean)(`Custom onClickThumnail`,!1)?a:void 0,hoverZoom:e,image:t,mediaUrl:n,mediaType:r,retryImageLoad:i})})})})},v.__docgenInfo={description:``,methods:[],displayName:`_RowThumbnail`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const hoverZoom = boolean("Zoom On Hover", true);
  const image = text("Image Src", photo);
  const mediaUrl = text("Video Src", video);
  const mediaType = select("Media Type", ['img', 'video'], 'video');
  const retryImageLoad = boolean("Retry Image", false);
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
}`,...v.parameters?.docs?.source}}},y=[`_RowThumbnail`]}))();export{v as _RowThumbnail,y as __namedExportsOrder,h as default};