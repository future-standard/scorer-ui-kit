import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./react-dom-BXgx-GBU.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{a,i as o,n as s,r as c,t as l}from"./Icon-W-FFwI7F.js";import{n as u,t as d}from"./PageTitle-DmLmZfaP.js";import{a as f,i as p,o as m}from"./iframe-D4JXfpgr.js";var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{h=n(),g=e(r()),m(),c(),_=i(),v=8,y=16,b=f.div`
  content:'';
  display:block;
  width:0;
  height:0;
  border-left: ${v}px solid transparent;
  border-right: ${v}px solid transparent;
  border-bottom: ${v}px solid ${({$type:e})=>`var(--tooltip-${e}-arrow)`};
`,x=f.div`
  position: absolute;
  display: flex;
  ${({$maxWidth:e})=>e&&p` max-width: ${e}`};
  ${({$directionStyle:e})=>e&&p`${e}`};
`,S=f.div`
  background-color: ${({$type:e})=>`var(--tooltip-${e})`};
  border-radius: 3px;
  border: 1px solid ${({$type:e})=>`var(--tooltip-${e}-border)`};
  box-shadow: 0px 2px var(--input-focused-blur, 3px) 0px rgba(0, 16, 64, 0.06);
  backdrop-filter: blur(2px);
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: var(--white-a12);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;

  ${s} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,C=(e,t)=>{let{left:n,top:r,width:i,height:a}=t,o=r+window.scrollY,s=n+window.scrollX;switch(e){case`bottom-right`:return`
              flex-direction: column;
              top: ${o+a}px;
              left: ${s-v-y+i/2}px;
              ${b} {
                margin-left: ${y}px;
              }
            `;case`bottom-left`:return`
              flex-direction: column;
              align-items: end;
              top: ${o+a}px;
              left: ${s+v+y+i/2}px;
              transform: translateX(-100%);
              ${b} {
                margin-right: ${y}px;
              }
            `;case`right-bottom`:return`
              flex-direction: row;
              top: ${o-v/2-y+a/2}px;
              left: ${s+i}px;
              ${b} {
                transform: rotate(-90deg);
                margin-right: -${v/2}px;
                margin-top: ${y}px;
              }
            `;case`right`:return`
              flex-direction: row;
              align-items: center;
              top: ${o+a/2}px;
              left: ${s+i}px;
              transform: translateY(-50%);
              ${b} {
                transform: rotate(-90deg);
                margin-right: -${v/2}px;
              }
            `;case`right-top`:return`
              flex-direction: row;
              align-items: end;
              top: ${o+v/2+y+a/2}px;
              left: ${s+i}px;
              transform: translateY(-100%);
              ${b} {
                transform: rotate(-90deg);
                margin-right: -${v/2}px;
                margin-bottom: ${y}px;
              }
            `;case`left-bottom`:return`
              flex-direction: row-reverse;
              top: ${o-v/2-y+a/2}px;
              left: ${s}px;
              transform: translateX(-100%);
              ${b} {
                transform: rotate(90deg);
                margin-left: -${v/2}px;
                margin-top: ${y}px;
              }
            `;case`left`:return`
              flex-direction: row-reverse;
              align-items: center;
              top: ${o+a/2}px;
              left: ${s}px;
              transform: translate(-100%, -50%);
              ${b} {
                transform: rotate(90deg);
                margin-left: -${v/2}px;
              }
            `;case`left-top`:return`
              flex-direction: row-reverse;
              align-items: end;
              top: ${o+v/2+y+a/2}px;
              left: ${s}px;
              transform: translate(-100%, -100%);
              ${b} {
                transform: rotate(90deg);
                margin-left: -${v/2}px;
                margin-bottom: ${y}px;
              }
            `;case`top-right`:return`
              flex-direction: column-reverse;
              top: ${o}px;
              left: ${s-v-y+i/2}px;
              transform: translateY(-100%);
              ${b} {
                transform: rotate(180deg);
                margin-left: ${y}px;
              }
            `;case`top`:return`
              flex-direction: column-reverse;
              align-items: center;
              top: ${o}px;
              left: ${s+i/2}px;
              transform: translate(-50%, -100%);
              ${b} {
                transform: rotate(180deg);
              }
            `;case`top-left`:return`
              flex-direction: column-reverse;
              align-items: end;
              top: ${o}px;
              left: ${s+v+y+i/2}px;
              transform: translate(-100%, -100%);
              ${b} {
                transform: rotate(180deg);
                margin-right: ${y}px;
              }
            `;default:return`
            flex-direction: column;
            top: ${o+a}px;
            left: ${s+i/2}px;
            transform: translateX(-50%);
            align-items: center;
          `}},w=(e,t,n)=>{let r=e.left+(t||0)+30>window.innerWidth,i=e.bottom+(n||0)>window.innerHeight,a=e.left-(t||0)<0,o=e.top-(n||0)<0;return o&&r&&i?`left`:o&&a&&i?`right`:o&&a?`bottom-right`:o&&r?`bottom-left`:i&&a?`top-right`:i&&r?`top-left`:a?`right`:r?`left`:i?`top`:`bottom`},T=({icon:e,message:t,type:n,tooltipFor:r,tooltipPosition:i,maxWidth:a})=>{let[o,s]=(0,h.useState)(null),[c,u]=(0,h.useState)(!1),[d,f]=(0,h.useState)(`top`),p=(0,h.useRef)(null),m=(0,h.useCallback)(()=>{if(r?.current){let e=r.current.getBoundingClientRect();s(e),u(!0),f(w(e,r.current.offsetWidth,r.current.offsetHeight))}},[r]),v=(0,h.useCallback)(()=>{u(!1)},[]),y=(0,h.useCallback)(()=>{if(r?.current){let e=r.current.getBoundingClientRect();s(e)}},[r]);return(0,h.useEffect)(()=>{let e=null;return r?.current&&(e=r.current,r.current.addEventListener(`mouseover`,m),r.current.addEventListener(`mouseout`,v),y()),()=>{e&&(e.removeEventListener(`mouseover`,m),e.removeEventListener(`mouseout`,v))}},[v,m,r,y]),!c||!o?null:g.createPortal((0,_.jsxs)(x,{ref:p,$maxWidth:a,$directionStyle:C(i||d,o),children:[(0,_.jsx)(b,{$type:n||`neutral`}),(0,_.jsxs)(S,{$type:n||`neutral`,children:[e&&(0,_.jsx)(l,{icon:e,size:16,color:`white-a12`}),t]})]}),document.body)};try{T.displayName=`Tooltip`,T.__docgenInfo={description:``,displayName:`Tooltip`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,methods:[],props:{message:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`message`,required:!0,tags:{},type:{name:`string`}},tooltipFor:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`tooltipFor`,required:!0,tags:{},type:{name:`RefObject<HTMLElement | null>`}},icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`icon`,required:!1,tags:{},type:{name:`string`}},type:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`enum`,raw:`ITooltipType`,value:[{value:`"neutral"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},tooltipPosition:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`tooltipPosition`,required:!1,tags:{},type:{name:`enum`,raw:`ITooltipPosition`,value:[{value:`"left"`},{value:`"right"`},{value:`"bottom"`},{value:`"top"`},{value:`"top-left"`},{value:`"top-right"`},{value:`"bottom-left"`},{value:`"bottom-right"`},{value:`"left-top"`},{value:`"left-bottom"`},{value:`"right-top"`},{value:`"right-bottom"`}]}},maxWidth:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`maxWidth`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{a(),D=n(),u(),E(),m(),O=i(),k=f.div`
  margin: 20px 0;
`,A=f.span`
  color: var(--primary-11);
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`,j=`a screen element or component, a text box displays information about that
element, such as a description of a button's function, what an abbreviation stands for, or the
exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be
display in a dynamic position.`,M=({icon:e,message:t,tooltipFor:n,...r})=>{let i=(0,D.useRef)(null),a=(0,D.useRef)(null),o=(0,D.useRef)(null),s=(0,D.useRef)(null),c=(0,D.useRef)(null),l=[i,a,o,s],u=e||void 0;return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(d,{title:`Page with tooltips`}),l.map((e,t)=>(0,O.jsxs)(k,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,O.jsx)(A,{ref:e,children:`hovering over`}),` `,j]},[`A`,`B`,`C`,`D`][t])),(0,O.jsxs)(k,{children:[`This tooltip `,(0,O.jsx)(A,{ref:c,children:`message`}),` position is fixed, you can update it with the Tooltip position control below.`]}),l.map((e,n)=>(0,O.jsx)(T,{tooltipFor:e,icon:u,message:t},[`A`,`B`,`C`,`D`][n])),(0,O.jsx)(T,{...r,tooltipFor:c,icon:u,message:t})]})},N={title:`Alerts/atoms/Tooltip`,component:T,tags:[`autodocs`],argTypes:{type:{control:`select`},icon:{control:`select`,options:[``,...Object.keys(o)]},tooltipPosition:{control:`select`},tooltipFor:{control:!1,table:{defaultValue:{summary:`refs built by the story`}}}},args:{message:`This is the tooltip of the hovering element`,type:`info`,icon:`Information`,tooltipPosition:`top-right`,maxWidth:`200px`,tooltipFor:{current:null}},render:e=>(0,O.jsx)(M,{...e})},P={},F=[`Default`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{}`,...P.parameters?.docs?.source}}}})))()}I();export{P as Default,F as __namedExportsOrder,N as default};