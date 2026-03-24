import{j as i}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as P}from"./index-DnkWte70.js";import{s as N,c as x}from"./styled-components.browser.esm-CarAhzHj.js";import{j as M,k as L,l as B}from"./index.modern-B3hCc7YS.js";import{d as e}from"./index-C-6Xbh3D.js";import{g as W}from"./index-DgAbGzsN.js";import{p as R}from"./placeholder-BcVwUhHh.js";import{a as j}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const J={title:"CameraPanels/organisms",component:M,decorators:[]},D=x.div`
  max-width: 1200px;

  ${({showCustomComponent:o})=>o&&N`
    ${B} {
      height: 250px;
    }
  `};
`,V=x.div`
  padding: 10px;
`,k=x.div`
  color: var(--grey-10);
  font-size: 14px;
  margin-bottom: 10px;
`,b=i.jsxs(V,{children:[i.jsx(k,{children:"Custom Component Example"}),i.jsx(L,{tagsConfig:[{icon:"MetaCategories",label:"Shop A",weight:"light",size:12},{icon:"MetaTags",label:"Example",weight:"light",size:12},{icon:"MetaTags",label:"Smart",weight:"light",size:12}]})]}),s=()=>{const o={"":"",...W()},a=e.boolean("Show Custom Component Example",!1),c=e.select("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"neutral"),l=e.select("Status Icon",o,"Information"),r=e.boolean("Has Notice",!1),m=e.text("Notice Message","Please wait while the first stream is processed."),p=e.text("Notice Title","Initial Stream Pending"),g=e.boolean("Has Empty Stream with Icon",!1),u=e.select("Empty stream icon",o,""),h=e.select("Device Icon",o,"Camera"),d=e.boolean("Hide Panel Data Icon",!1),I=e.text("Left Title","Location - Zone"),f=e.text("Left SubTitle","Camera Name"),C=e.text("Right Title","Analysis"),T=e.text("Right Subtitle","PeopleCount"),y=j("Changing to camera page"),t=P.useMemo(()=>({streamProps:{src:R,mediaType:"img",isEmptyWithIcon:g,noticeTitle:p,noticeMessage:m,status:c,noticeIcon:l,hasNotice:r,emptyIcon:u},panelMetaData:{deviceIcon:h,leftSubTitle:f,leftTitle:I,rightTitle:C,rightSubTitle:T,hideIcon:d},customBottom:a?b:void 0,panelOnClick:()=>{y()}}),[g,p,m,c,l,r,u,h,f,I,C,T,d,a,y]),n=P.useMemo(()=>({streamProps:{src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",mediaType:"video",videoOptions:{autoPlay:!1,controls:!0},isEmptyWithIcon:g,noticeTitle:p,noticeMessage:m,status:c,noticeIcon:l,hasNotice:r,emptyIcon:u},panelMetaData:{deviceIcon:h,leftSubTitle:f,leftTitle:I,rightTitle:C,rightSubTitle:T,hideIcon:d},customBottom:a?b:void 0}),[g,p,m,c,l,r,u,h,f,I,C,T,d,a]),E=P.useMemo(()=>[t,n,t,n,t,n,t,n,t,n,t],[t,n]);return i.jsx(D,{showCustomComponent:a,children:i.jsx(M,{panels:E})})};s.__docgenInfo={description:"",methods:[],displayName:"_CameraPanels"};var S,v,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const iconList = {
    '': '',
    ...generateIconList()
  };
  const showCustomComponent = boolean('Show Custom Component Example', false);
  const status = select('Type', {
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Success: 'success',
    Neutral: 'neutral'
  }, 'neutral');
  const noticeIcon = select('Status Icon', iconList, 'Information');
  const hasNotice = boolean('Has Notice', false);
  const noticeMessage = text('Notice Message', 'Please wait while the first stream is processed.');
  const noticeTitle = text('Notice Title', 'Initial Stream Pending');
  const isEmptyWithIcon = boolean('Has Empty Stream with Icon', false);
  const emptyIcon = select('Empty stream icon', iconList, '');
  const deviceIcon = select('Device Icon', iconList, 'Camera');
  const hideIcon = boolean('Hide Panel Data Icon', false);
  const leftTitle = text('Left Title', \`Location - Zone\`);
  const leftSubTitle = text('Left SubTitle', 'Camera Name');
  const rightTitle = text('Right Title', 'Analysis');
  const rightSubTitle = text('Right Subtitle', 'PeopleCount');
  const reRouting = action('Changing to camera page');
  const ImagePanel: ICameraPanel = useMemo(() => ({
    streamProps: {
      src: Photo,
      mediaType: 'img',
      isEmptyWithIcon,
      noticeTitle,
      noticeMessage,
      status,
      noticeIcon,
      hasNotice,
      emptyIcon
    },
    panelMetaData: {
      deviceIcon,
      leftSubTitle,
      leftTitle,
      rightTitle,
      rightSubTitle,
      hideIcon
    },
    customBottom: showCustomComponent ? customBottom : undefined,
    panelOnClick: () => {
      reRouting();
    }
  }), [isEmptyWithIcon, noticeTitle, noticeMessage, status, noticeIcon, hasNotice, emptyIcon, deviceIcon, leftSubTitle, leftTitle, rightTitle, rightSubTitle, hideIcon, showCustomComponent, reRouting]);
  const VideoPanel: ICameraPanel = useMemo(() => ({
    streamProps: {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      mediaType: 'video',
      videoOptions: {
        autoPlay: false,
        controls: true
      },
      isEmptyWithIcon,
      noticeTitle,
      noticeMessage,
      status,
      noticeIcon,
      hasNotice,
      emptyIcon
    },
    panelMetaData: {
      deviceIcon,
      leftSubTitle,
      leftTitle,
      rightTitle,
      rightSubTitle,
      hideIcon
    },
    customBottom: showCustomComponent ? customBottom : undefined
  }), [isEmptyWithIcon, noticeTitle, noticeMessage, status, noticeIcon, hasNotice, emptyIcon, deviceIcon, leftSubTitle, leftTitle, rightTitle, rightSubTitle, hideIcon, showCustomComponent]);
  const panelConfig: ICameraPanel[] = useMemo(() => [ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel], [ImagePanel, VideoPanel]);
  return <Container {...{
    showCustomComponent
  }}>
      <CameraPanels panels={panelConfig} />
    </Container>;
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const K=["_CameraPanels"];export{s as _CameraPanels,K as __namedExportsOrder,J as default};
