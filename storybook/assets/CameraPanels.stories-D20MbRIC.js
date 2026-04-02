import{y as M,d as e,r as P,j as i,z as N,D as L,t as B,a as x}from"./iframe-Dbt4m4Aq.js";import{g as _}from"./index-BfWBpCCZ.js";import{p as D}from"./placeholder-BcVwUhHh.js";import"./preload-helper-C1FmrZbK.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,A={title:"CameraPanels/organisms",component:M,decorators:[]},R=x.div`
  max-width: 1200px;

  ${({$showCustomComponent:o})=>o&&B`
    ${L} {
      height: 250px;
    }
  `};
`,W=x.div`
  padding: 10px;
`,V=x.div`
  color: var(--grey-10);
  font-size: 14px;
  margin-bottom: 10px;
`,S=i.jsxs(W,{children:[i.jsx(V,{children:"Custom Component Example"}),i.jsx(N,{tagsConfig:[{icon:"MetaCategories",label:"Shop A",weight:"light",size:12},{icon:"MetaTags",label:"Example",weight:"light",size:12},{icon:"MetaTags",label:"Smart",weight:"light",size:12}]})]}),a=()=>{const o={"":"",..._()},s=e.boolean("Show Custom Component Example",!1),c=e.select("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"neutral"),l=e.select("Status Icon",o,"Information"),m=e.boolean("Has Notice",!1),r=e.text("Notice Message","Please wait while the first stream is processed."),p=e.text("Notice Title","Initial Stream Pending"),g=e.boolean("Has Empty Stream with Icon",!1),u=e.select("Empty stream icon",o,""),h=e.select("Device Icon",o,"Camera"),d=e.boolean("Hide Panel Data Icon",!1),I=e.text("Left Title","Location - Zone"),C=e.text("Left SubTitle","Camera Name"),T=e.text("Right Title","Analysis"),f=e.text("Right Subtitle","PeopleCount"),y=O("Changing to camera page"),t=P.useMemo(()=>({streamProps:{src:D,mediaType:"img",isEmptyWithIcon:g,noticeTitle:p,noticeMessage:r,status:c,noticeIcon:l,hasNotice:m,emptyIcon:u},panelMetaData:{deviceIcon:h,leftSubTitle:C,leftTitle:I,rightTitle:T,rightSubTitle:f,hideIcon:d},customBottom:s?S:void 0,panelOnClick:()=>{y()}}),[g,p,r,c,l,m,u,h,C,I,T,f,d,s,y]),n=P.useMemo(()=>({streamProps:{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",mediaType:"video",videoOptions:{autoPlay:!1,controls:!0},isEmptyWithIcon:g,noticeTitle:p,noticeMessage:r,status:c,noticeIcon:l,hasNotice:m,emptyIcon:u},panelMetaData:{deviceIcon:h,leftSubTitle:C,leftTitle:I,rightTitle:T,rightSubTitle:f,hideIcon:d},customBottom:s?S:void 0}),[g,p,r,c,l,m,u,h,C,I,T,f,d,s]),E=P.useMemo(()=>[t,n,t,n,t,n,t,n,t,n,t],[t,n]);return i.jsx(R,{$showCustomComponent:s,children:i.jsx(M,{panels:E})})};a.__docgenInfo={description:"",methods:[],displayName:"_CameraPanels"};var b,w,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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
  return <Container $showCustomComponent={showCustomComponent}>
      <CameraPanels panels={panelConfig} />
    </Container>;
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const $=["_CameraPanels"];export{a as _CameraPanels,$ as __namedExportsOrder,A as default};
