import{at as r,d as o,j as n,n as T,a as s}from"./iframe-Dbt4m4Aq.js";import{p as b}from"./placeholder-BcVwUhHh.js";import"./preload-helper-C1FmrZbK.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,x="https://future-standard.github.io/scorer-ui-kit/traffic.mp4",_={title:"Tables/atoms",component:r,decorators:[]},v=s.div`
  height: 200px;
  width:  800px;
  display: flex;
  justify-content: center;
  align-items: center;
`,C=s.div`
  flex: 0;
  height: 35px;
`,e=()=>{const c=o.boolean("Zoom On Hover",!0),l=o.text("Image Src",b),m=o.text("Video Src",x),d=o.select("Media Type",["img","video"],"video"),h=o.boolean("Retry Image",!1),u=g("Doing some other action than opening a modal"),p=o.boolean("Custom onClickThumnail",!1);return n.jsx(v,{children:n.jsx(T,{children:n.jsx(C,{children:n.jsx(r,{onClickThumbnail:p?u:void 0,hoverZoom:c,image:l,mediaUrl:m,mediaType:d,retryImageLoad:h})})})})};e.__docgenInfo={description:"",methods:[],displayName:"_RowThumbnail"};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const k=["_RowThumbnail"];export{e as _RowThumbnail,k as __namedExportsOrder,_ as default};
