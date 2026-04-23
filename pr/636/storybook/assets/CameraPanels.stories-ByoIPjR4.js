import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Lt as r,Ot as i,Rt as a,bt as o,d as s,f as c,ft as l,jt as u,kt as d}from"./iframe-DFLY1_j6.js";import{n as f,t as p}from"./placeholder-DnTErttm.js";import{n as m,t as h}from"./helpers-CR9IU7b_.js";var g,_,v,y,b,x,S,C,w;t((()=>{g=r(),_=e(a()),o(),d(),p(),m(),v=i(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`CameraPanels/organisms`,component:c,decorators:[]},x=u.div`
  max-width: 1200px;

  ${({$showCustomComponent:e})=>e&&n`
    ${s} {
      height: 250px;
    }
  `};
`,S=(0,v.jsxs)(u.div`
  padding: 10px;
`,{children:[(0,v.jsx)(u.div`
  color: var(--grey-10);
  font-size: 14px;
  margin-bottom: 10px;
`,{children:`Custom Component Example`}),(0,v.jsx)(l,{tagsConfig:[{icon:`MetaCategories`,label:`Shop A`,weight:`light`,size:12},{icon:`MetaTags`,label:`Example`,weight:`light`,size:12},{icon:`MetaTags`,label:`Smart`,weight:`light`,size:12}]})]}),C=()=>{let e={"":``,...h()},t=(0,g.boolean)(`Show Custom Component Example`,!1),n=(0,g.select)(`Type`,{Error:`error`,Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`neutral`),r=(0,g.select)(`Status Icon`,e,`Information`),i=(0,g.boolean)(`Has Notice`,!1),a=(0,g.text)(`Notice Message`,`Please wait while the first stream is processed.`),o=(0,g.text)(`Notice Title`,`Initial Stream Pending`),s=(0,g.boolean)(`Has Empty Stream with Icon`,!1),l=(0,g.select)(`Empty stream icon`,e,``),u=(0,g.select)(`Device Icon`,e,`Camera`),d=(0,g.boolean)(`Hide Panel Data Icon`,!1),p=(0,g.text)(`Left Title`,`Location - Zone`),m=(0,g.text)(`Left SubTitle`,`Camera Name`),b=(0,g.text)(`Right Title`,`Analysis`),C=(0,g.text)(`Right Subtitle`,`PeopleCount`),w=y(`Changing to camera page`),T=(0,_.useMemo)(()=>({streamProps:{src:f,mediaType:`img`,isEmptyWithIcon:s,noticeTitle:o,noticeMessage:a,status:n,noticeIcon:r,hasNotice:i,emptyIcon:l},panelMetaData:{deviceIcon:u,leftSubTitle:m,leftTitle:p,rightTitle:b,rightSubTitle:C,hideIcon:d},customBottom:t?S:void 0,panelOnClick:()=>{w()}}),[s,o,a,n,r,i,l,u,m,p,b,C,d,t,w]),E=(0,_.useMemo)(()=>({streamProps:{src:`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,mediaType:`video`,videoOptions:{autoPlay:!1,controls:!0},isEmptyWithIcon:s,noticeTitle:o,noticeMessage:a,status:n,noticeIcon:r,hasNotice:i,emptyIcon:l},panelMetaData:{deviceIcon:u,leftSubTitle:m,leftTitle:p,rightTitle:b,rightSubTitle:C,hideIcon:d},customBottom:t?S:void 0}),[s,o,a,n,r,i,l,u,m,p,b,C,d,t]);return(0,v.jsx)(x,{$showCustomComponent:t,children:(0,v.jsx)(c,{panels:(0,_.useMemo)(()=>[T,E,T,E,T,E,T,E,T,E,T],[T,E])})})},C.__docgenInfo={description:``,methods:[],displayName:`_CameraPanels`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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