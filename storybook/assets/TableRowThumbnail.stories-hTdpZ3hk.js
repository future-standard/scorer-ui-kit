import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{d as o}from"./index-C-6Xbh3D.js";import{c as r}from"./styled-components.browser.esm-CarAhzHj.js";import{p as b}from"./placeholder-BcVwUhHh.js";import{as as s,c as g}from"./index.modern-CMonYql-.js";import{a as T}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const f="https://future-standard.github.io/scorer-ui-kit/traffic.mp4",M={title:"Tables/atoms",component:s,decorators:[]},x=r.div`
  height: 200px;
  width:  800px;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=r.div`
  flex: 0;
  height: 35px;
`,e=()=>{const m=o.boolean("Zoom On Hover",!0),c=o.text("Image Src",b),l=o.text("Video Src",f),d=o.select("Media Type",["img","video"],"video"),p=o.boolean("Retry Image",!1),h=T("Doing some other action than opening a modal"),u=o.boolean("Custom onClickThumnail",!1);return t.jsx(x,{children:t.jsx(g,{children:t.jsx(v,{children:t.jsx(s,{onClickThumbnail:u?h:void 0,hoverZoom:m,image:c,mediaUrl:l,mediaType:d,retryImageLoad:p})})})})};e.__docgenInfo={description:"",methods:[],displayName:"_RowThumbnail"};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const Z=["_RowThumbnail"];export{e as _RowThumbnail,Z as __namedExportsOrder,M as default};
