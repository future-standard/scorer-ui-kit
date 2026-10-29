import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./react-dom-BXgx-GBU.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{i as a,n as o}from"./common-Bnnfb4Bd.js";import{n as s,r as c,t as l}from"./Icon-Bj-W_PAo.js";import{f as u,o as d}from"./helpers-D3bl-wl9.js";import{a as f,i as p,o as m}from"./iframe-DkCQ6b6C.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{h=n(),g=e(r()),m(),o(),c(),_=i(),v=f.div`
  min-height: 50px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  width: 900px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  z-index: 999;

  font-family: var(--font-ui);
  background-color: ${({$type:e})=>`var(--${e})`};
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
  text-decoration: none;
  color: var(--white-1);

  ${({$isVisible:e})=>e&&p`
    transition: transform var(--speed-slow) var(--easing-primary-in-out);
  `}

  ${({$isVisible:e,$isClosing:t})=>e&&!t&&p`
    transform: translate(-50%, 0%);
  `};

  ${s} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,y={error:`Critical`,warning:`BigWarning`,success:`Success`,info:`Information`,neutral:`Information`},b=f.div`
  ${a};
  ${({$selected:e=!1})=>e&&p`
    border-bottom: 5px solid var(--primary-7);
  `}
  &:focus {
    outline: none;
  }

  &:hover {
    opacity: .8;
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`,x=f.button`
  ${a};
  font-family: var(--font-ui);
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
  text-decoration: none;
  color: var(--white-1);
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:hover:enabled {
    opacity: .8;
    transition: transform var(--speed-normal) var(--easing-primary-in-out);
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`,S=f.div`
  padding: 12px 6px 12px 12px;
  line-height: 20px;
  text-align: left;
  flex-grow: 2;
`,C=({id:e,type:t=`info`,message:n,icon:r=``,isPinned:i=!1,actionTextButton:a,closeNow:o=!1,closeCallback:s,onTextButtonClick:c})=>{let[u,d]=(0,h.useState)(!1),[f,p]=(0,h.useState)(!1),[m,C]=(0,h.useState)(!1),[w,T]=(0,h.useState)(!1),E=(0,h.useRef)(void 0),D=(0,h.useRef)({slideUp:f,textClicked:m,onTextButtonClick:c,closeCallback:s});(0,h.useEffect)(()=>{D.current={slideUp:f,textClicked:m,onTextButtonClick:c,closeCallback:s}}),(0,h.useEffect)(()=>{d(!1),p(!1),C(!1)},[]),(0,h.useEffect)(()=>{E.current!==e&&(E.current=e,T(!1));let t=requestAnimationFrame(()=>T(!0));return()=>cancelAnimationFrame(t)},[e]);let O=(0,h.useCallback)(()=>{p(!0)},[]),k=(0,h.useCallback)(async()=>{C(!0),O()},[O]),A=(0,h.useCallback)(()=>{f&&(d(!0),c&&m&&c(),s&&s())},[f,s,c,m]);return(0,h.useEffect)(()=>{if(i)return;let e=setTimeout(()=>O(),7e3);return()=>clearTimeout(e)},[i,O]),(0,h.useEffect)(()=>{o&&O()},[o,O]),(0,h.useEffect)(()=>()=>{let{slideUp:e,textClicked:t,onTextButtonClick:n,closeCallback:r}=D.current;e&&(n&&t&&n(),r&&r())},[]),n&&!u?g.createPortal((0,_.jsxs)(v,{$type:t,$isClosing:f,$isVisible:w,onTransitionEnd:A,children:[(0,_.jsx)(l,{icon:r||y[t],color:`inverse`}),(0,_.jsx)(S,{children:n}),a?(0,_.jsxs)(x,{onClick:()=>k(),children:[a,` `]}):(0,_.jsx)(b,{onClick:()=>O(),children:(0,_.jsx)(l,{icon:`CloseCompact`,color:`inverse`})})]}),document.body):null};try{C.displayName=`Notification`,C.__docgenInfo={description:``,displayName:`Notification`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Alerts/atom/Notification.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Notification.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string`}},type:{defaultValue:{value:`info`},declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Notification.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`enum`,raw:`AlertType`,value:[{value:`"neutral"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},message:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Notification.tsx`,name:`TypeLiteral`}],description:``,name:`message`,required:!0,tags:{},type:{name:`string`}},actionTextButton:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Notification.tsx`,name:`TypeLiteral`}],description:``,name:`actionTextButton`,required:!1,tags:{},type:{name:`string`}},isPinned:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Notification.tsx`,name:`TypeLiteral`}],description:``,name:`isPinned`,required:!1,tags:{},type:{name:`boolean`}},closeNow:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Notification.tsx`,name:`TypeLiteral`}],description:``,name:`closeNow`,required:!1,tags:{},type:{name:`boolean`}},icon:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Notification.tsx`,name:`TypeLiteral`}],description:``,name:`icon`,required:!1,tags:{},type:{name:`string`}},onTextButtonClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Notification.tsx`,name:`TypeLiteral`}],description:``,name:`onTextButtonClick`,required:!1,tags:{},type:{name:`(() => void)`}},closeCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Notification.tsx`,name:`TypeLiteral`}],description:``,name:`closeCallback`,required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var T,E,D,O;function k(){return(k=t((()=>{T=e(n()),w(),d(),E=i(),D=T.createContext({sendNotification:()=>console.debug(`This is the Notification context initialization should not appear, review NotificationProvider`),clearNotifications:()=>console.debug(`This is the context initialization should not appear, review NotificationProvider`)}),O=({children:e})=>{let[t,n]=(0,T.useState)(null),r=(0,T.useRef)([]),i=(0,T.useCallback)(()=>{let e=r.current.shift();if(!e)return;let t=()=>{e.closeCallback&&e.closeCallback(),n(null),i()},a={...e,closeCallback:t};n(a)},[]),a=(0,T.useCallback)(async e=>{let n={message:e.message,type:e.type,id:u()};e.icon&&(n.icon=e.icon),e.actionTextButton&&(n.actionTextButton=e.actionTextButton),e.onTextButtonClick&&(n.onTextButtonClick=e.onTextButtonClick),e.closeCallback&&(n.closeCallback=e.closeCallback),e.isPinned&&(n.isPinned=e.isPinned),r.current.push(n),r.current.length===1&&t===null&&i()},[t,i]),o=(0,T.useCallback)(()=>{r.current.length=0,n(e=>e===null?e:{...e,closeNow:!0})},[]),s=(0,T.useMemo)(()=>({sendNotification:a,clearNotifications:o}),[o,a]);return(0,E.jsxs)(D.Provider,{value:s,children:[t?(0,E.jsx)(C,{...t}):null,e]})};try{D.displayName=`NotificationContext`,D.__docgenInfo={description:``,displayName:`NotificationContext`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/context/NotificationContext.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var A,j;function M(){return(M=t((()=>{A=e(n()),k(),j=()=>A.useContext(D)})))()}export{k as i,j as n,O as r,M as t};