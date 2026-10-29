import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./common-Bnnfb4Bd.js";import{a,i as o,n as s,r as c,t as l}from"./Icon-Bj-W_PAo.js";import{n as u,r as d,t as ee}from"./MediaBox-5ajoUM4p.js";import{n as f,t as te}from"./TagList-IuX_9-eM.js";import{a as p,i as m,o as h}from"./iframe-DkCQ6b6C.js";import{n as ne,t as g}from"./placeholder-Trrcww9-.js";var _,v,y,b,x,S,C,w,re,T;function E(){return(E=e((()=>{h(),r(),c(),d(),_=n(),v=p.div`
  width: 100%;
  height: 170px;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;

  ${u} {
    height: 100%;
    width: 100%;
    text-align: center;
    img, video {
      border-radius: 3px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`,y=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${({$hasPadding:e})=>e&&`
    padding-bottom: 43px
  `}
;

  ${s} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,b=p.div`
  background-color: ${({$color:e})=>e&&`var(--${e})`};
  color: var(--inverse);
  opacity: 0.85;
  height: 46px;
  width: 300px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  padding: 10px;
`,x=p.div`
  ${i};
  max-width: 245px;
  font-size: 10px;
`,S=p.div`
  ${i};
  max-width: 245px;
  font-size: 12px;
`,C=p.div`
  height: 20px;
  width: 20px;
  margin-left: 2px;

  ${s} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`,w=p.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`,re=p.div`
  background-color: ${({$color:e})=>e&&`var(--${e})`};
  height: 3px;
  width: 100%;
`,T=({isEmptyWithIcon:e=!1,status:t=`neutral`,noticeIcon:n,hasNotice:r=!1,noticeMessage:i,noticeTitle:a,emptyIcon:o,...s})=>(0,_.jsxs)(v,{children:[e?(0,_.jsx)(y,{$hasPadding:r,children:(0,_.jsx)(l,{icon:o||`PasswordHide`,color:`dimmed`,size:41})}):(0,_.jsx)(ee,{...s}),r&&(0,_.jsxs)(b,{$color:t,children:[n&&(0,_.jsx)(C,{children:(0,_.jsx)(l,{icon:n,size:20,color:`inverse`})}),(0,_.jsxs)(w,{children:[a&&(0,_.jsx)(S,{children:a}),i&&(0,_.jsx)(x,{children:i})]})]}),(0,_.jsx)(re,{$color:t})]});try{T.displayName=`MediaStream`,T.__docgenInfo={description:``,displayName:`MediaStream`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,methods:[],props:{isEmptyWithIcon:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`}],description:``,name:`isEmptyWithIcon`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`},required:!1,tags:{},type:{name:`boolean`}},emptyIcon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`}],description:``,name:`emptyIcon`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`},required:!1,tags:{},type:{name:`string`}},status:{defaultValue:{value:`neutral`},declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`}],description:``,name:`status`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`},required:!1,tags:{},type:{name:`enum`,raw:`IFeedbackColor`,value:[{value:`"neutral"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},noticeMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`}],description:``,name:`noticeMessage`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`},required:!1,tags:{},type:{name:`string`}},noticeTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`}],description:``,name:`noticeTitle`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`},required:!1,tags:{},type:{name:`string`}},noticeIcon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`}],description:``,name:`noticeIcon`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`},required:!1,tags:{},type:{name:`string`}},hasNotice:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`}],description:``,name:`hasNotice`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/MediaStream.tsx`,name:`IMediaStream`},required:!1,tags:{},type:{name:`boolean`}},src:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`src`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!0,tags:{},type:{name:`string`}},mediaType:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`mediaType`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!0,tags:{},type:{name:`enum`,raw:`IMediaType`,value:[{value:`"img"`},{value:`"video"`}]}},alt:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`alt`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!1,tags:{},type:{name:`string`}},videoOptions:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`videoOptions`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!1,tags:{},type:{name:`VideoHTMLAttributes<HTMLVideoElement>`}},hasModalLimits:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`hasModalLimits`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!1,tags:{},type:{name:`boolean`}},retryLoading:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`retryLoading`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!1,tags:{},type:{name:`boolean`}},retryLimit:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`retryLimit`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!1,tags:{},type:{name:`number`}},minWidth:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`minWidth`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!1,tags:{},type:{name:`string`}},minHeight:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`minHeight`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!1,tags:{},type:{name:`string`}},onError:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`onError`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!1,tags:{},type:{name:`((e: Event) => void)`}},onMediaLoad:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`}],description:``,name:`onMediaLoad`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/MediaBox.tsx`,name:`IMediaModal`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{D=t(),h(),r(),c(),O=n(),k=p.div`
  display: flex;
  height: 60px;
`,A=p.div`
  ${({$hasRightData:e})=>e&&m`
    border-right: var(--grey-6) 1px solid;
    width: 195px;
  `};

  padding: 0 12px 0 12px;
  display: flex;

  ${s} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`,j=p.div`
  padding: 0 12px 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,M=p.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  justify-content: center;
`,N=p.div`
  ${i};
  ${({$hasRightData:e})=>e?`max-width: 140px;`:`max-width: 250px;`}
  ${({$hasMarginBottom:e})=>e&&`margin-bottom: 1px;`};

  color: var(--grey-a10);
  font-size: 10px;
`,P=p.div`
  font-family: var(--font-data);
  ${i};
  ${({$hasRightData:e})=>e?`max-width: 140px;`:`max-width: 250px;`}

  color: var(--grey-11);
  font-size: 16px;
`,F=p.div`
  ${i};
  max-width: 80px;
  color: var(--grey-a10);
  font-size: 10px;
  ${({$hasMarginBottom:e})=>e&&`margin-bottom: 6px;`};
`,I=p.div`
  ${i};
  max-width: 80px;
  color: var(--grey-11);
  font-size: 12px;
`,L=({deviceIcon:e=`Camera`,leftSubTitle:t,leftTitle:n,rightTitle:r,rightSubTitle:i,hideIcon:a=!1})=>{let o=(0,D.useMemo)(()=>!!r||!!i,[i,r]);return(0,O.jsxs)(k,{children:[(0,O.jsxs)(A,{$hasRightData:o,children:[!a&&(0,O.jsx)(l,{icon:e,color:`dimmed`,size:18}),(0,O.jsxs)(M,{children:[n&&(0,O.jsx)(N,{$hasMarginBottom:!!t,$hasRightData:o,children:n}),t&&(0,O.jsx)(P,{$hasRightData:o,children:t})]})]}),o&&(0,O.jsxs)(j,{children:[r&&(0,O.jsx)(F,{$hasMarginBottom:!!i,children:r}),i&&(0,O.jsx)(I,{children:i})]})]})};try{L.displayName=`PanelMetaData`,L.__docgenInfo={description:``,displayName:`PanelMetaData`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,methods:[],props:{deviceIcon:{defaultValue:{value:`Camera`},declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`}],description:``,name:`deviceIcon`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`},required:!1,tags:{},type:{name:`string`}},leftSubTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`}],description:``,name:`leftSubTitle`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`},required:!1,tags:{},type:{name:`string`}},leftTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`}],description:``,name:`leftTitle`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`},required:!1,tags:{},type:{name:`string`}},rightTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`}],description:``,name:`rightTitle`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`},required:!1,tags:{},type:{name:`string`}},rightSubTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`}],description:``,name:`rightSubTitle`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`},required:!1,tags:{},type:{name:`string`}},hideIcon:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`}],description:``,name:`hideIcon`,parent:{fileName:`packages/ui-lib/src/CameraPanels/atoms/PanelMetaData.tsx`,name:`IPanelMetaData`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var z,B,V;function H(){return(H=e((()=>{h(),E(),R(),z=n(),B=p.div`
  width: 300px;
  height: 230px;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 var(--grey-a5);
  background: var(--grey-1);

  ${({$hasOnClick:e})=>e&&`
    cursor: pointer;
    user-select: none;
  `};
`,V=({streamProps:e,panelMetaData:t,customBottom:n,panelOnClick:r,...i})=>(0,z.jsxs)(B,{onClick:r,$hasOnClick:r!==void 0,...i,children:[(0,z.jsx)(T,{...e}),n||t&&(0,z.jsx)(L,{...t})]});try{B.displayName=`CameraPanelWrapper`,B.__docgenInfo={description:``,displayName:`CameraPanelWrapper`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`void | WebTarget`}},forwardedAs:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`forwardedAs`,required:!1,tags:{},type:{name:`void | WebTarget`}}},tags:{}}}catch{}try{V.displayName=`CameraPanel`,V.__docgenInfo={description:``,displayName:`CameraPanel`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,methods:[],props:{streamProps:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,name:`ICameraPanel`}],description:``,name:`streamProps`,parent:{fileName:`packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,name:`ICameraPanel`},required:!0,tags:{},type:{name:`IMediaStream`}},panelMetaData:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,name:`ICameraPanel`}],description:``,name:`panelMetaData`,parent:{fileName:`packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,name:`ICameraPanel`},required:!1,tags:{},type:{name:`IPanelMetaData`}},customBottom:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,name:`ICameraPanel`}],description:``,name:`customBottom`,parent:{fileName:`packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,name:`ICameraPanel`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},panelOnClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,name:`ICameraPanel`}],description:``,name:`panelOnClick`,parent:{fileName:`packages/ui-lib/src/CameraPanels/molecules/CameraPanel.tsx`,name:`ICameraPanel`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var U,W,G;function K(){return(K=e((()=>{h(),H(),U=n(),W=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px 20px;
`,G=({panels:e})=>(0,U.jsx)(W,{children:e.map((e,t)=>(0,U.jsx)(V,{...e},t))});try{G.displayName=`CameraPanels`,G.__docgenInfo={description:``,displayName:`CameraPanels`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/CameraPanels/organisms/CameraPanels.tsx`,methods:[],props:{panels:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/CameraPanels/organisms/CameraPanels.tsx`,name:`ICameraPanels`}],description:``,name:`panels`,parent:{fileName:`packages/ui-lib/src/CameraPanels/organisms/CameraPanels.tsx`,name:`ICameraPanels`},required:!0,tags:{},type:{name:`ICameraPanel[]`}}},tags:{}}}catch{}})))()}var q,J,Y,X,ie,Z,Q,ae,oe,$,se;function ce(){return(ce=e((()=>{a(),K(),H(),f(),h(),g(),q=n(),{fn:J}=__STORYBOOK_MODULE_TEST__,Y=p.div`
  max-width: 1200px;

  ${({$showCustomComponent:e})=>e&&m`
    ${B} {
      height: 250px;
    }
  `};
`,X=p.div`
  padding: 10px;
`,ie=p.div`
  color: var(--grey-10);
  font-size: 14px;
  margin-bottom: 10px;
`,Z=(0,q.jsxs)(X,{children:[(0,q.jsx)(ie,{children:`Custom Component Example`}),(0,q.jsx)(te,{tagsConfig:[{icon:`MetaCategories`,label:`Shop A`,weight:`light`,size:12},{icon:`MetaTags`,label:`Example`,weight:`light`,size:12},{icon:`MetaTags`,label:`Smart`,weight:`light`,size:12}]})]}),Q=[``,...Object.keys(o)],ae=({showCustomComponent:e,isEmptyWithIcon:t,emptyIcon:n,hasNotice:r,status:i,noticeIcon:a,noticeTitle:o,noticeMessage:s,deviceIcon:c,hideIcon:l,leftTitle:u,leftSubTitle:d,rightTitle:ee,rightSubTitle:f,onPanelClick:te,...p})=>{let m={isEmptyWithIcon:t,emptyIcon:n,hasNotice:r,status:i,noticeIcon:a,noticeTitle:o,noticeMessage:s},h={deviceIcon:c,hideIcon:l,leftTitle:u,leftSubTitle:d,rightTitle:ee,rightSubTitle:f},g={streamProps:{...m,src:ne,mediaType:`img`},panelMetaData:h,customBottom:e?Z:void 0,panelOnClick:te},_={streamProps:{...m,src:`https://future-standard.github.io/scorer-ui-kit/traffic.mp4`,mediaType:`video`,videoOptions:{autoPlay:!1,controls:!0}},panelMetaData:h,customBottom:e?Z:void 0},v=Array.from({length:11},(e,t)=>t===1||t===6?_:g);return(0,q.jsx)(Y,{$showCustomComponent:e,children:(0,q.jsx)(G,{...p,panels:v})})},oe={title:`CameraPanels/organisms/CameraPanels`,component:G,tags:[`autodocs`],argTypes:{panels:{control:!1,table:{defaultValue:{summary:`built by the story: 11 panels from the args below`}}},showCustomComponent:{name:`Show custom component example`},status:{control:`select`,options:[`error`,`warning`,`info`,`success`,`neutral`]},noticeIcon:{control:`select`,options:Q},emptyIcon:{control:`select`,options:Q},deviceIcon:{control:`select`,options:Q}},args:{panels:[],showCustomComponent:!1,isEmptyWithIcon:!1,emptyIcon:``,hasNotice:!1,status:`neutral`,noticeIcon:`Information`,noticeTitle:`Initial Stream Pending`,noticeMessage:`Please wait while the first stream is processed.`,deviceIcon:`Camera`,hideIcon:!1,leftTitle:`Location - Zone`,leftSubTitle:`Camera Name`,rightTitle:`Analysis`,rightSubTitle:`PeopleCount`,onPanelClick:J()},render:e=>(0,q.jsx)(ae,{...e})},$={},se=[`Default`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{}`,...$.parameters?.docs?.source}}}})))()}ce();export{$ as Default,se as __namedExportsOrder,oe as default};