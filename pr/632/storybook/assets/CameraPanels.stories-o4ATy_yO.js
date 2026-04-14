import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Et as n,Ft as r,It as i,Lt as a,Pt as o,Rt as s,bt as c,d as l,f as u,ft as d}from"./iframe-C0e3YAX7.js";import{n as f,t as p}from"./placeholder-DnTErttm.js";import{n as m,r as h}from"./helpers-DxrUs1Vp.js";var g,_,v,y,b,x,S,C,w;t((()=>{g=e(s()),r(),c(),_=o(),h(),p(),v=n(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`CameraPanels/organisms`,component:u,decorators:[]},x=a.div`
  max-width: 1200px;

  ${({$showCustomComponent:e})=>e&&i`
    ${l} {
      height: 250px;
    }
  `};
`,S=(0,v.jsxs)(a.div`
  padding: 10px;
`,{children:[(0,v.jsx)(a.div`
  color: var(--grey-10);
  font-size: 14px;
  margin-bottom: 10px;
`,{children:`Custom Component Example`}),(0,v.jsx)(d,{tagsConfig:[{icon:`MetaCategories`,label:`Shop A`,weight:`light`,size:12},{icon:`MetaTags`,label:`Example`,weight:`light`,size:12},{icon:`MetaTags`,label:`Smart`,weight:`light`,size:12}]})]}),C=()=>{let e={"":``,...m()},t=(0,_.boolean)(`Show Custom Component Example`,!1),n=(0,_.select)(`Type`,{Error:`error`,Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`neutral`),r=(0,_.select)(`Status Icon`,e,`Information`),i=(0,_.boolean)(`Has Notice`,!1),a=(0,_.text)(`Notice Message`,`Please wait while the first stream is processed.`),o=(0,_.text)(`Notice Title`,`Initial Stream Pending`),s=(0,_.boolean)(`Has Empty Stream with Icon`,!1),c=(0,_.select)(`Empty stream icon`,e,``),l=(0,_.select)(`Device Icon`,e,`Camera`),d=(0,_.boolean)(`Hide Panel Data Icon`,!1),p=(0,_.text)(`Left Title`,`Location - Zone`),h=(0,_.text)(`Left SubTitle`,`Camera Name`),b=(0,_.text)(`Right Title`,`Analysis`),C=(0,_.text)(`Right Subtitle`,`PeopleCount`),w=y(`Changing to camera page`),T=(0,g.useMemo)(()=>({streamProps:{src:f,mediaType:`img`,isEmptyWithIcon:s,noticeTitle:o,noticeMessage:a,status:n,noticeIcon:r,hasNotice:i,emptyIcon:c},panelMetaData:{deviceIcon:l,leftSubTitle:h,leftTitle:p,rightTitle:b,rightSubTitle:C,hideIcon:d},customBottom:t?S:void 0,panelOnClick:()=>{w()}}),[s,o,a,n,r,i,c,l,h,p,b,C,d,t,w]),E=(0,g.useMemo)(()=>({streamProps:{src:`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,mediaType:`video`,videoOptions:{autoPlay:!1,controls:!0},isEmptyWithIcon:s,noticeTitle:o,noticeMessage:a,status:n,noticeIcon:r,hasNotice:i,emptyIcon:c},panelMetaData:{deviceIcon:l,leftSubTitle:h,leftTitle:p,rightTitle:b,rightSubTitle:C,hideIcon:d},customBottom:t?S:void 0}),[s,o,a,n,r,i,c,l,h,p,b,C,d,t]);return(0,v.jsx)(x,{$showCustomComponent:t,children:(0,v.jsx)(u,{panels:(0,g.useMemo)(()=>[T,E,T,E,T,E,T,E,T,E,T],[T,E])})})},C.__docgenInfo={description:``,methods:[],displayName:`_CameraPanels`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w=[`_CameraPanels`]}))();export{C as _CameraPanels,w as __namedExportsOrder,b as default};