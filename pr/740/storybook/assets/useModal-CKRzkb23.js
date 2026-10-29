import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./react-dom-BXgx-GBU.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{i as a,n as o}from"./common-yMuJssaz.js";import{n as s,r as c,t as l}from"./Icon-BR6KFKcD.js";import{n as u,t as d}from"./useClickOutside-gjKn5OLT.js";import{a as f,i as p,o as m}from"./iframe-B9mgqNTy.js";var h,g,_,v,y,b,x;function S(){return(S=t((()=>{h=n(),g=e(r()),m(),o(),d(),c(),_=i(),v=f.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-3);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  z-index: 999;
  font-family: var(--font-ui);
  background-color: var(--grey-a3);
`,y=f.button`
  ${a};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -30px;
  color: var(--mono);
  font-size: 14px;
  font-weight: 500;

  ${s} {
    display: flex;
    margin-left: 12px;
  }
  ${({$selected:e=!1})=>e&&p`
    border-bottom: 5px solid var(--primary-7);
  `}
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
`,b=f.div`
  position: relative;
  margin: ${({$isCloseEnable:e})=>e?`27px 0 0`:`0`};
  z-index: 9999;
  width: ${({$width:e})=>e||`580px`};
  padding: ${({$padding:e})=>e?`30px 40px`:`0`};
  border-radius: 5px;
  box-shadow: 0px 10px 15px 0px var(--primary-a1);
  background-color: var(--grey-1);
  border: var(--grey-6) 1px solid;
`,x=({isOpen:e=!1,isCloseEnable:t=!0,closeText:n=``,width:r=``,padding:i=!0,customComponent:a,onDismiss:o,dismissCallback:s})=>{let c=(0,h.useRef)(null);u(c,()=>{t&&(s&&s(),d())});let d=(0,h.useCallback)(()=>{s&&s(),o()},[o,s]);return e?g.createPortal((0,_.jsx)(v,{children:(0,_.jsxs)(b,{ref:c,$width:r,$padding:i,$isCloseEnable:t,children:[t?(0,_.jsxs)(y,{onClick:()=>d(),children:[n||`CLOSE`,(0,_.jsx)(l,{icon:`CloseCompact`,size:15,color:`grey-12`,weight:`regular`})]}):null,a]})}),document.body):null};try{x.displayName=`Modal`,x.__docgenInfo={description:``,displayName:`Modal`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Modals/Modal.tsx`,methods:[],props:{isOpen:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`}],description:``,name:`isOpen`,parent:{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`},required:!1,tags:{},type:{name:`boolean`}},isCloseEnable:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`}],description:``,name:`isCloseEnable`,parent:{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`},required:!1,tags:{},type:{name:`boolean`}},closeText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`}],description:``,name:`closeText`,parent:{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`},required:!1,tags:{},type:{name:`string`}},width:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`}],description:``,name:`width`,parent:{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`},required:!1,tags:{},type:{name:`string`}},padding:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`}],description:``,name:`padding`,parent:{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`},required:!1,tags:{},type:{name:`boolean`}},customComponent:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`}],description:``,name:`customComponent`,parent:{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},onDismiss:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`}],description:``,name:`onDismiss`,parent:{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`},required:!0,tags:{},type:{name:`() => void`}},dismissCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`}],description:``,name:`dismissCallback`,parent:{fileName:`packages/ui-lib/src/Modals/Modal.tsx`,name:`IModalProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var C,w,T,E,D;function O(){return(O=t((()=>{C=e(n()),S(),w=i(),T={modalProps:{isOpen:!1,onDismiss:()=>null},setModalProps:e=>{console.debug(e)}},E=C.createContext(T),D=({children:e})=>{let[t,n]=(0,C.useState)(T.modalProps);return(0,w.jsxs)(E.Provider,{value:{modalProps:t,setModalProps:e=>{n(e)}},children:[(0,w.jsx)(x,{...t}),e]})};try{E.displayName=`ModalContext`,E.__docgenInfo={description:``,displayName:`ModalContext`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/context/ModalContext.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var k,A;function j(){return(j=t((()=>{k=n(),O(),A=()=>{let{modalProps:e,setModalProps:t}=(0,k.useContext)(E),n=(0,k.useCallback)(n=>{if(n===void 0)return;let r={...e,isOpen:n};t(r)},[e,t]),r=(0,k.useCallback)(()=>{n(!1)},[n]);return{createModal:(0,k.useCallback)(e=>{e||t({isOpen:!0,onDismiss:r});let n={isOpen:!0,closeText:e?.closeText,isCloseEnable:e?.isCloseEnable,width:e?.width,padding:e?.padding,dismissCallback:e?.dismissCallback,customComponent:e?.customComponent,onDismiss:r};t(n)},[r,t]),isModalOpen:e.isOpen,setModalOpen:n}}})))()}export{O as i,A as n,D as r,j as t};