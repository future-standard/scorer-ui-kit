import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./react-dom-BXgx-GBU.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o,t as s}from"./Icon-BR6KFKcD.js";import{n as c,t as l}from"./PageTitle-BI58i6k7.js";import{_ as u,a as d,i as f,o as p}from"./iframe-B9mgqNTy.js";import{n as m,t as h}from"./helpers-DheDLI4G.js";var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=t((()=>{g=n(),_=e(r()),p(),o(),v=i(),y=8,b=16,x=d.div`
  content:'';
  display:block;
  width:0;
  height:0;
  border-left: ${y}px solid transparent;
  border-right: ${y}px solid transparent;
  border-bottom: ${y}px solid ${({$type:e})=>`var(--tooltip-${e}-arrow)`};
`,S=d.div`
  position: absolute;
  display: flex;
  ${({$maxWidth:e})=>e&&f` max-width: ${e}`};
  ${({$directionStyle:e})=>e&&f`${e}`};
`,C=d.div`
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

  ${a} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,w=(e,t)=>{let{left:n,top:r,width:i,height:a}=t,o=r+window.scrollY,s=n+window.scrollX;switch(e){case`bottom-right`:return`
              flex-direction: column;
              top: ${o+a}px;
              left: ${s-y-b+i/2}px;
              ${x} {
                margin-left: ${b}px;
              }
            `;case`bottom-left`:return`
              flex-direction: column;
              align-items: end;
              top: ${o+a}px;
              left: ${s+y+b+i/2}px;
              transform: translateX(-100%);
              ${x} {
                margin-right: ${b}px;
              }
            `;case`right-bottom`:return`
              flex-direction: row;
              top: ${o-y/2-b+a/2}px;
              left: ${s+i}px;
              ${x} {
                transform: rotate(-90deg);
                margin-right: -${y/2}px;
                margin-top: ${b}px;
              }
            `;case`right`:return`
              flex-direction: row;
              align-items: center;
              top: ${o+a/2}px;
              left: ${s+i}px;
              transform: translateY(-50%);
              ${x} {
                transform: rotate(-90deg);
                margin-right: -${y/2}px;
              }
            `;case`right-top`:return`
              flex-direction: row;
              align-items: end;
              top: ${o+y/2+b+a/2}px;
              left: ${s+i}px;
              transform: translateY(-100%);
              ${x} {
                transform: rotate(-90deg);
                margin-right: -${y/2}px;
                margin-bottom: ${b}px;
              }
            `;case`left-bottom`:return`
              flex-direction: row-reverse;
              top: ${o-y/2-b+a/2}px;
              left: ${s}px;
              transform: translateX(-100%);
              ${x} {
                transform: rotate(90deg);
                margin-left: -${y/2}px;
                margin-top: ${b}px;
              }
            `;case`left`:return`
              flex-direction: row-reverse;
              align-items: center;
              top: ${o+a/2}px;
              left: ${s}px;
              transform: translate(-100%, -50%);
              ${x} {
                transform: rotate(90deg);
                margin-left: -${y/2}px;
              }
            `;case`left-top`:return`
              flex-direction: row-reverse;
              align-items: end;
              top: ${o+y/2+b+a/2}px;
              left: ${s}px;
              transform: translate(-100%, -100%);
              ${x} {
                transform: rotate(90deg);
                margin-left: -${y/2}px;
                margin-bottom: ${b}px;
              }
            `;case`top-right`:return`
              flex-direction: column-reverse;
              top: ${o}px;
              left: ${s-y-b+i/2}px;
              transform: translateY(-100%);
              ${x} {
                transform: rotate(180deg);
                margin-left: ${b}px;
              }
            `;case`top`:return`
              flex-direction: column-reverse;
              align-items: center;
              top: ${o}px;
              left: ${s+i/2}px;
              transform: translate(-50%, -100%);
              ${x} {
                transform: rotate(180deg);
              }
            `;case`top-left`:return`
              flex-direction: column-reverse;
              align-items: end;
              top: ${o}px;
              left: ${s+y+b+i/2}px;
              transform: translate(-100%, -100%);
              ${x} {
                transform: rotate(180deg);
                margin-right: ${b}px;
              }
            `;default:return`
            flex-direction: column;
            top: ${o+a}px;
            left: ${s+i/2}px;
            transform: translateX(-50%);
            align-items: center;
          `}},T=(e,t,n)=>{let r=e.left+(t||0)+30>window.innerWidth,i=e.bottom+(n||0)>window.innerHeight,a=e.left-(t||0)<0,o=e.top-(n||0)<0;return o&&r&&i?`left`:o&&a&&i?`right`:o&&a?`bottom-right`:o&&r?`bottom-left`:i&&a?`top-right`:i&&r?`top-left`:a?`right`:r?`left`:i?`top`:`bottom`},E=({icon:e,message:t,type:n,tooltipFor:r,tooltipPosition:i,maxWidth:a})=>{let[o,c]=(0,g.useState)(null),[l,u]=(0,g.useState)(!1),[d,f]=(0,g.useState)(`top`),p=(0,g.useRef)(null),m=(0,g.useCallback)(()=>{if(r?.current){let e=r.current.getBoundingClientRect();c(e),u(!0),f(T(e,r.current.offsetWidth,r.current.offsetHeight))}},[r]),h=(0,g.useCallback)(()=>{u(!1)},[]),y=(0,g.useCallback)(()=>{if(r?.current){let e=r.current.getBoundingClientRect();c(e)}},[r]);return(0,g.useEffect)(()=>{let e=null;return r?.current&&(e=r.current,r.current.addEventListener(`mouseover`,m),r.current.addEventListener(`mouseout`,h),y()),()=>{e&&(e.removeEventListener(`mouseover`,m),e.removeEventListener(`mouseout`,h))}},[h,m,r,y]),!l||!o?null:_.createPortal((0,v.jsxs)(S,{ref:p,$maxWidth:a,$directionStyle:w(i||d,o),children:[(0,v.jsx)(x,{$type:n||`neutral`}),(0,v.jsxs)(C,{$type:n||`neutral`,children:[e&&(0,v.jsx)(s,{icon:e,size:16,color:`white-a12`}),t]})]}),document.body)};try{E.displayName=`Tooltip`,E.__docgenInfo={description:``,displayName:`Tooltip`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,methods:[],props:{message:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`message`,required:!0,tags:{},type:{name:`string`}},tooltipFor:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`tooltipFor`,required:!0,tags:{},type:{name:`RefObject<HTMLElement | null>`}},icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`icon`,required:!1,tags:{},type:{name:`string`}},type:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!1,tags:{},type:{name:`enum`,raw:`ITooltipType`,value:[{value:`"neutral"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},tooltipPosition:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`tooltipPosition`,required:!1,tags:{},type:{name:`enum`,raw:`ITooltipPosition`,value:[{value:`"left"`},{value:`"right"`},{value:`"bottom"`},{value:`"top"`},{value:`"top-left"`},{value:`"top-right"`},{value:`"bottom-left"`},{value:`"bottom-right"`},{value:`"left-top"`},{value:`"left-bottom"`},{value:`"right-top"`},{value:`"right-bottom"`}]}},maxWidth:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/Tooltip.tsx`,name:`TypeLiteral`}],description:``,name:`maxWidth`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{O=u(),k=n(),c(),D(),p(),m(),A=i(),j={title:`Alerts/atoms`,component:E,decorators:[]},M=d.div``,N=d.div`
  margin: 20px 0;
`,P=d.span`
  color: var(--primary-11);
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`,F=()=>{let e=(0,O.text)(`Message`,`This is the tooltip of the hovering element`),t=(0,O.select)(`Type`,{Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`info`),n=(0,O.boolean)(`No Icon`,!1),r={"":``,...h()},i=(0,O.select)(`Icon`,r,`Information`),a=(0,O.select)(`Tooltip Position`,{TopLeft:`top-left`,Top:`top`,TopRight:`top-right`,BottomLeft:`bottom-left`,Bottom:`bottom`,BottomRight:`bottom-right`,LeftTop:`left-top`,Left:`left`,LeftBottom:`left-bottom`,RightTop:`right-top`,Right:`right`,RightBottom:`right-bottom`},`top-right`),o=(0,k.useRef)(null),s=(0,k.useRef)(null),c=(0,k.useRef)(null),u=(0,k.useRef)(null),d=(0,k.useRef)(null);return(0,A.jsxs)(M,{children:[(0,A.jsx)(l,{title:`Page with tooltips`}),(0,A.jsxs)(N,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,A.jsx)(P,{ref:o,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,A.jsxs)(N,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,A.jsx)(P,{ref:s,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,A.jsxs)(N,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,A.jsx)(P,{ref:c,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,A.jsxs)(N,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,A.jsx)(P,{ref:u,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,A.jsxs)(N,{children:[`This tooltip `,(0,A.jsx)(P,{ref:d,children:`message`}),` position is fixed, you can update it with the property tool position with the knobs bellow .`]}),(0,A.jsx)(E,{tooltipFor:o,icon:n?void 0:i,message:e}),(0,A.jsx)(E,{tooltipFor:s,icon:n?void 0:i,message:e}),(0,A.jsx)(E,{tooltipFor:c,icon:n?void 0:i,message:e}),(0,A.jsx)(E,{tooltipFor:u,icon:n?void 0:i,message:e}),(0,A.jsx)(E,{tooltipFor:d,maxWidth:`200px`,icon:n?void 0:i,type:t,message:e,tooltipPosition:a})]})},I=[`_Tooltip`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const message = text('Message', 'This is the tooltip of the hovering element');
  const type = select('Type', {
    Warning: 'warning',
    Info: 'info',
    Success: 'success',
    Neutral: 'neutral'
  }, 'info');
  const noIcon = boolean('No Icon', false);
  const iconList = {
    '': '',
    ...generateIconList()
  };
  const icon = select('Icon', iconList, 'Information');
  const tooltipPosition = select('Tooltip Position', {
    TopLeft: 'top-left',
    Top: 'top',
    TopRight: 'top-right',
    BottomLeft: 'bottom-left',
    Bottom: 'bottom',
    BottomRight: 'bottom-right',
    LeftTop: 'left-top',
    Left: 'left',
    LeftBottom: 'left-bottom',
    RightTop: 'right-top',
    Right: 'right',
    RightBottom: 'right-bottom'
  }, 'top-right');
  const exampleTriggerA = useRef<HTMLSpanElement>(null);
  const exampleTriggerB = useRef<HTMLSpanElement>(null);
  const exampleTriggerC = useRef<HTMLSpanElement>(null);
  const exampleTriggerD = useRef<HTMLSpanElement>(null);
  const exampleTriggerE = useRef<HTMLSpanElement>(null);
  return <Container>
      <PageTitle title='Page with tooltips' />
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when{' '}
        <HoverSpan ref={exampleTriggerA}>hovering over</HoverSpan> a screen element or component, a
        text box displays information about that element, such as a description of a button's
        function, what an abbreviation stands for, or the exact absolute time stamp over a relative
        time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when{' '}
        <HoverSpan ref={exampleTriggerB}>hovering over</HoverSpan> a screen element or component, a
        text box displays information about that element, such as a description of a button's
        function, what an abbreviation stands for, or the exact absolute time stamp over a relative
        time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when{' '}
        <HoverSpan ref={exampleTriggerC}>hovering over</HoverSpan> a screen element or component, a
        text box displays information about that element, such as a description of a button's
        function, what an abbreviation stands for, or the exact absolute time stamp over a relative
        time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when{' '}
        <HoverSpan ref={exampleTriggerD}>hovering over</HoverSpan> a screen element or component, a
        text box displays information about that element, such as a description of a button's
        function, what an abbreviation stands for, or the exact absolute time stamp over a relative
        time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        This tooltip <HoverSpan ref={exampleTriggerE}>message</HoverSpan> position is fixed, you can
        update it with the property tool position with the knobs bellow .
      </Content>
      <Tooltip tooltipFor={exampleTriggerA} icon={noIcon ? undefined : icon} {...{
      message
    }} />
      <Tooltip tooltipFor={exampleTriggerB} icon={noIcon ? undefined : icon} {...{
      message
    }} />
      <Tooltip tooltipFor={exampleTriggerC} icon={noIcon ? undefined : icon} {...{
      message
    }} />
      <Tooltip tooltipFor={exampleTriggerD} icon={noIcon ? undefined : icon} {...{
      message
    }} />
      <Tooltip tooltipFor={exampleTriggerE} maxWidth='200px' icon={noIcon ? undefined : icon} {...{
      type,
      message,
      tooltipPosition
    }} />
    </Container>;
}`,...F.parameters?.docs?.source}}}})))()}L();export{F as _Tooltip,I as __namedExportsOrder,j as default};