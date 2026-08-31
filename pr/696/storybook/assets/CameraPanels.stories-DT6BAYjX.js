import{t as e}from"./react-BZJXY1be.js";import{Ft as t,It as n,Lt as r,Rt as i,Wt as a,f as o,gt as s,p as c,wt as l}from"./iframe-DFQHAkQ-.js";import{n as u,t as d}from"./placeholder-Cf6rKdzI.js";import{n as f,t as p}from"./helpers-CXAXeTVq.js";import{n as m}from"./rolldown-runtime-DkW27tQK.js";var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=m((()=>{h=a(),g=e(),l(),i(),d(),f(),_=t(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,y={title:`CameraPanels/organisms`,component:c,decorators:[]},b=r.div`
  max-width: 1200px;

  ${({$showCustomComponent:e})=>e&&n`
    ${o} {
      height: 250px;
    }
  `};
`,x=r.div`
  padding: 10px;
`,S=r.div`
  color: var(--grey-10);
  font-size: 14px;
  margin-bottom: 10px;
`,C=(0,_.jsxs)(x,{children:[(0,_.jsx)(S,{children:`Custom Component Example`}),(0,_.jsx)(s,{tagsConfig:[{icon:`MetaCategories`,label:`Shop A`,weight:`light`,size:12},{icon:`MetaTags`,label:`Example`,weight:`light`,size:12},{icon:`MetaTags`,label:`Smart`,weight:`light`,size:12}]})]}),w=()=>{let e={"":``,...p()},t=(0,h.boolean)(`Show Custom Component Example`,!1),n=(0,h.select)(`Type`,{Error:`error`,Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`neutral`),r=(0,h.select)(`Status Icon`,e,`Information`),i=(0,h.boolean)(`Has Notice`,!1),a=(0,h.text)(`Notice Message`,`Please wait while the first stream is processed.`),o=(0,h.text)(`Notice Title`,`Initial Stream Pending`),s=(0,h.boolean)(`Has Empty Stream with Icon`,!1),l=(0,h.select)(`Empty stream icon`,e,``),d=(0,h.select)(`Device Icon`,e,`Camera`),f=(0,h.boolean)(`Hide Panel Data Icon`,!1),m=(0,h.text)(`Left Title`,`Location - Zone`),y=(0,h.text)(`Left SubTitle`,`Camera Name`),x=(0,h.text)(`Right Title`,`Analysis`),S=(0,h.text)(`Right Subtitle`,`PeopleCount`),w=v(`Changing to camera page`),T=(0,g.useMemo)(()=>({streamProps:{src:u,mediaType:`img`,isEmptyWithIcon:s,noticeTitle:o,noticeMessage:a,status:n,noticeIcon:r,hasNotice:i,emptyIcon:l},panelMetaData:{deviceIcon:d,leftSubTitle:y,leftTitle:m,rightTitle:x,rightSubTitle:S,hideIcon:f},customBottom:t?C:void 0,panelOnClick:()=>{w()}}),[s,o,a,n,r,i,l,d,y,m,x,S,f,t,w]),E=(0,g.useMemo)(()=>({streamProps:{src:`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,mediaType:`video`,videoOptions:{autoPlay:!1,controls:!0},isEmptyWithIcon:s,noticeTitle:o,noticeMessage:a,status:n,noticeIcon:r,hasNotice:i,emptyIcon:l},panelMetaData:{deviceIcon:d,leftSubTitle:y,leftTitle:m,rightTitle:x,rightSubTitle:S,hideIcon:f},customBottom:t?C:void 0}),[s,o,a,n,r,i,l,d,y,m,x,S,f,t]),D=(0,g.useMemo)(()=>[T,E,T,E,T,E,T,E,T,E,T],[T,E]);return(0,_.jsx)(b,{$showCustomComponent:t,children:(0,_.jsx)(c,{panels:D})})},w.__docgenInfo={description:``,methods:[],displayName:`_CameraPanels`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T=[`_CameraPanels`]})))()}E();export{w as _CameraPanels,T as __namedExportsOrder,y as default};