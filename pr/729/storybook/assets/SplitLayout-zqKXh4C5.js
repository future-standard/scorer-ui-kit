import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,o as a}from"./iframe-Cw1eIbNi.js";function o(e,t){let[n,r]=(0,s.useState)(()=>{if(typeof window>`u`)return t;try{let n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.warn(`[useLocalStorage] Failed to parse key "${e}" from localStorage, using initial value:`,n),t}});return[n,(0,s.useCallback)(t=>{try{r(n=>{let r=t instanceof Function?t(n):t;return typeof window<`u`&&window.localStorage.setItem(e,JSON.stringify(r)),r})}catch(t){console.error(`[useLocalStorage] Failed to write key "${e}" to localStorage:`,t)}},[e])]}var s;function c(){return(c=e((()=>{s=t()})))()}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a(),l=n(),u=r.div`
  display: flex;
  flex: 0 0 200px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,d=r.div`
  background: var(--grey-10);
  flex: 1;
`,f=r.div`
  flex: 0 0 20px;
  display: flex;
  align-items: center;
  svg {
    path {
      stroke: var(--grey-11);
    }
  }
`,p=r.svg`
  transform: ${({$layout:e})=>e===`horizontal`?`rotate(0deg)`:`rotate(90deg)`};
`,m=r.svg`
  transform: rotate(0deg);
  ${({$direction:e})=>{switch(e){case`up`:return`transform: rotate(-90deg);`;case`down`:return`transform: rotate(90deg);`;case`left`:return`transform: rotate(180deg);`;default:return`transform: rotate(0deg);`}}};
`,h=r.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({$layout:e})=>e===`horizontal`?i`
    width: 16px;
    flex-direction: column;
    ${u}{
      flex-direction: column;
    }

    ${d}{
      width: 1px;
    }

  `:i`
      height: 16px;
      flex-direction: row;
      ${u}{
        flex-direction: row;
      }
      ${d}{
        height: 1px;
      }
  `}
`,g=({state:e=`default`,layout:t=`horizontal`,arrowDirection:n})=>(0,l.jsx)(h,{$layout:t,children:(0,l.jsxs)(u,{children:[(0,l.jsx)(d,{}),(0,l.jsx)(f,{children:e==="default"?(0,l.jsxs)(p,{$layout:t,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,l.jsx)(`path`,{d:`M13 14.875V5.125`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,l.jsx)(`path`,{d:`M10 14.875V5.125`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,l.jsx)(`path`,{d:`M7 14.875L7 5.125`,strokeLinecap:`round`,strokeLinejoin:`round`})]}):(0,l.jsx)(m,{$direction:n,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,l.jsx)(`path`,{d:`M7.25 4.375L12.61 9.735C12.6803 9.80525 12.7199 9.90058 12.7199 10C12.7199 10.0994 12.6803 10.1948 12.61 10.265L7.25 15.625`,stroke:`#9BA1A6`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,l.jsx)(d,{})]})});try{g.displayName=`ResizeLine`,g.__docgenInfo={description:``,displayName:`ResizeLine`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/atoms/ResizeLine.tsx`,methods:[],props:{state:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Layouts/atoms/ResizeLine.tsx`,name:`IResizeLineProps`}],description:``,name:`state`,parent:{fileName:`packages/ui-lib/src/Layouts/atoms/ResizeLine.tsx`,name:`IResizeLineProps`},required:!1,tags:{},type:{name:`enum`,raw:`"default" | "arrow"`,value:[{value:`"default"`},{value:`"arrow"`}]}},layout:{defaultValue:{value:`horizontal`},declarations:[{fileName:`packages/ui-lib/src/Layouts/atoms/ResizeLine.tsx`,name:`IResizeLineProps`}],description:``,name:`layout`,parent:{fileName:`packages/ui-lib/src/Layouts/atoms/ResizeLine.tsx`,name:`IResizeLineProps`},required:!1,tags:{},type:{name:`enum`,raw:`TResizeLineLayouts`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},arrowDirection:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/atoms/ResizeLine.tsx`,name:`IResizeLineProps`}],description:``,name:`arrowDirection`,parent:{fileName:`packages/ui-lib/src/Layouts/atoms/ResizeLine.tsx`,name:`IResizeLineProps`},required:!1,tags:{},type:{name:`enum`,raw:`TResizeLineDirection`,value:[{value:`"left"`},{value:`"right"`},{value:`"up"`},{value:`"down"`}]}}},tags:{}}}catch{}})))()}var v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{v=t(),a(),c(),_(),y=n(),b=r.div`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  left: 20px;
  background: #ededed99;
  border: grey 1px solid;
  padding: 20px;
  line-height: 20px;
  font-size: 12px;
  div {
    display: block;
  }
  span {
    display: inline-block;
    width: 130px;
    font-weight: 600;
  }
`,x=r.div`
  display: flex;
  position: relative;
  flex: 1;

  ${({$layout:e,$minDimension:t})=>e===`vertical`?i`
    ${t?`min-height: ${t}px;`:null};
  `:i`
    ${t?`min-width: ${t}px;`:null};
  `}
`,S=r.div`
  display: flex;
  flex: 1;
  height: 100%;
  transition: opacity 0.2s cubic-bezier(0.85, 0, 0.15, 1);
`,C=r.div`
  display: flex;
  position: relative;
  flex: 0 0 ${({$defaultSize:e})=>e}px;
  display: ${({$collapseState:e})=>e===`collapsed`?`none`:`block`};
  transition:
    min-width 0.65s cubic-bezier(0, 0.55, 0.45, 1),
    min-height 0.65s cubic-bezier(0, 0.55, 0.45, 1);

  ${({$layout:e,$maxDimension:t,$minDimension:n})=>e===`vertical`?i`
    ${n?`min-height: ${n}px;`:`0`};
    ${t?`max-height: ${t}px;`:`none`};
    ${S}{
      min-height: ${n}px;
    }
  `:i`
    ${n?`min-width: ${n}px;`:`0`};
    ${t?`max-width: ${t}px;`:`none`};
    ${S}{
      min-width: ${n}px;
    }
  `}


  ${({$layout:e,$collapseState:t,$minDimension:n})=>t===`collapsing`?i`
      transition: none;
      ${e===`horizontal`?`min-width: 0`:`min-height: 0`};
      ${S}{
        flex: 0 0 ${n}px;
        min-width: ${n}px;
        opacity: 0.5;
      }
    `:null}

    ${({$collapseState:e})=>e===`collapsed`?i`
      ${S}{
        display: none;
      }
    `:null}

    ${({$layout:e,$collapseState:t,$minDimension:n})=>t===`peeking`?i`
      ${e===`horizontal`?`min-width: 0`:`min-height: 0`};
      ${S}{
        min-width: ${n}px;
        opacity: 0.5;
      }
    `:null}

    ${({$layout:e,$collapseState:t,$minDimension:n})=>t===`opening`?i`
    ${e===`horizontal`?`min-width: 0`:`min-height: 0`};

    ${S}{
      min-width: ${n}px;
    }
    `:null}
`,w=r.div`
  flex: 0 0 ${({$size:e})=>e}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: col-resize;

  > div {
    transition: opacity 0.15s cubic-bezier(0.45, 0, 0.55, 1);
  }

  &:hover > div {
    opacity: 1;
  }

  ${({$fauxHover:e})=>e===`false`?i`
    > div {
      opacity: 0.6;
    }
  `:i`
    > div {
      opacity: 1;
    }
  `}

`,T=r.section`
  box-sizing: border-box;
  display: flex;
  flex:1;
  flex-direction: row;
  overflow: hidden;

  transition: opacity 0.25s cubic-bezier(0.45, 0, 0.55, 1);
  opacity: 0;

  ${({$initialised:e})=>e===`true`?i`
    opacity: 1;
  `:null}

  ${({$layout:e})=>e===`vertical`?i`
    flex-direction: column;
    ${x}{}
    ${w}{
      cursor: row-resize;
    }
  `:null}

  ${({$reverse:e})=>e===`true`?i`
    ${x}{ order: 2; }
    ${w}{ order: 1; }
  `:null}
`,E=({mainArea:e,sideArea:t,layout:n=`horizontal`,reverse:r,dividerSize:i=16,persist:a=!1,persistenceKey:s=`resizable_ui`,showDebug:c,ref:l})=>{let u=`resizable_layout_`+s,d=t.defaultSize||350,f=t.minSize||0,p=t.maxSize,m=e.minSize,[h,_]=(0,v.useState)(!1),[E,O]=(0,v.useState)(),[k,A]=(0,v.useState)(),[j,M]=(0,v.useState)(),[N,P]=(0,v.useState)(t.defaultCollapsed?`collapsed`:`open`),[F,I]=(0,v.useState)(d),[L,R]=(0,v.useState)(d),[z,B]=(0,v.useState)(d),V=(0,v.useRef)(null),H=(0,v.useRef)(null),[U,W]=o(`${u}_size`,null),[G,K]=o(`${u}_state`,null),[q,J]=o(`${u}_quick_open_size`,null);(0,v.useEffect)(()=>{h||(a&&(U&&I(U),G&&P(G),q&&B(q)),_(!0))},[h,a,G,U,q]),(0,v.useEffect)(()=>{h&&t.onSideAreaStateChange&&t.onSideAreaStateChange(N)},[h,t,N]),(0,v.useImperativeHandle)(l,()=>({open:()=>{Z()},close:()=>{X()},reset:()=>{Y()}}));let Y=(0,v.useCallback)(()=>{I(d),P(`open`),W(null),K(null)},[d,W,K]),X=(0,v.useCallback)(()=>{P(`collapsed`),I(1),R(1),a&&(W(1),K(`collapsed`),J(L))},[L,a,W,K,J]),Z=(0,v.useCallback)(()=>{P(`open`);let e;e=F>1&&H.current?n===`horizontal`?H.current.clientWidth:H.current.clientHeight:z,R(e),I(e),a&&(W(Math.round(F)),K(`open`))},[a,K,W,z,F,n]),Q=(0,v.useCallback)(()=>{N===`collapsing`&&F<f-50?X():(R(Math.round(F)),B(Math.round(F)),Z()),M(!1)},[X,Z,f,F,N]),ee=(0,v.useCallback)(e=>{e.preventDefault();let{clientX:t,clientY:n}=e;R(N===`collapsed`?F:D(F,f,p)),O({x:t,y:n}),A({x:0,y:0}),M(!0)},[F,p,f,N]),te=()=>{j&&Q()},ne=(0,v.useCallback)(e=>{let{clientX:a,clientY:o}=e,s,c=N;if(j&&E&&L){if(A({x:E.x-a,y:E.y-o}),n===`horizontal`){let e=(V.current?.clientWidth??0)-i-(m||0);s=D(r?L-(E.x-a):L+(E.x-a),null,e)}else{let e=(V.current?.clientHeight??0)-i-(m||0);s=D(r?L-(E.y-o):L+(E.y-o),null,e)}if(t.collapsable){let e=s<f-50;N===`open`&&e||N===`opening`&&e?c=`collapsing`:N===`collapsing`&&!e?c=`open`:N===`collapsed`?c=`peeking`:N===`peeking`&&!e&&(c=`opening`)}I(s),P(c)}},[j,E,L,N,n,i,m,f,r,t.collapsable]),$=(0,v.useCallback)(()=>{j&&Q()},[j,Q]);(0,v.useEffect)(()=>(document.addEventListener(`mouseleave`,$),()=>{document.removeEventListener(`mouseleave`,$)}),[$]);let re=()=>N===`collapsed`||N===`peeking`?n===`horizontal`?r?`right`:`left`:r?`down`:`up`:n===`horizontal`?r?`left`:`right`:r?`up`:`down`,ie=()=>N===`collapsed`||N===`peeking`||N===`collapsing`?`arrow`:`default`,ae=(0,y.jsxs)(b,{children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{children:`State:`}),` `,N]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{children:`Position:`}),` `,E?.x,`, `,E?.y]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{children:`Difference:`}),` `,k?.x,`, `,k?.y]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{children:`sideAreaStartBasis:`}),` `,L]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{children:`sideAreaBasis:`}),` `,F]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{children:`lastOpenSize:`}),` `,z]})]});return(0,y.jsxs)(T,{ref:V,onPointerMove:ne,onPointerUp:te,$initialised:h?`true`:`false`,$layout:n,$reverse:r?`true`:`false`,children:[(0,y.jsx)(x,{$layout:n,$minDimension:m,children:e.content}),(0,y.jsx)(w,{onPointerDown:ee,onDoubleClick:Y,$size:i,$fauxHover:j?`true`:`false`,children:(0,y.jsx)(g,{state:ie(),layout:n,arrowDirection:re()})}),(0,y.jsx)(C,{ref:H,style:{flexBasis:`${F}px`},$defaultSize:d,$minDimension:f,$maxDimension:p,$layout:n,$collapseState:N,children:(0,y.jsx)(S,{children:t.content})}),c?ae:null]})},D=(e,t,n)=>{let r=e;return r=n&&r>n?n:r,r=t&&r<t?t:r,r};try{E.displayName=`SplitLayout`,E.__docgenInfo={description:``,displayName:`SplitLayout`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/molecules/SplitLayout.tsx`,methods:[],props:{layout:{defaultValue:{value:`horizontal`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`}],description:``,name:`layout`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`},required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},reverse:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`}],description:``,name:`reverse`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`},required:!1,tags:{},type:{name:`boolean`}},dividerSize:{defaultValue:{value:`16`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`}],description:``,name:`dividerSize`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`},required:!1,tags:{},type:{name:`number`}},mainArea:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`}],description:``,name:`mainArea`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`},required:!0,tags:{},type:{name:`IMainArea`}},sideArea:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`}],description:``,name:`sideArea`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`},required:!0,tags:{},type:{name:`ISideArea`}},persist:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`}],description:``,name:`persist`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`},required:!1,tags:{},type:{name:`boolean`}},persistenceKey:{defaultValue:{value:`resizable_ui`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`}],description:``,name:`persistenceKey`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`},required:!1,tags:{},type:{name:`string`}},showDebug:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`}],description:``,name:`showDebug`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`},required:!1,tags:{},type:{name:`boolean`}},ref:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`}],description:``,name:`ref`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`ISplitLayoutProps`},required:!1,tags:{},type:{name:`Ref<ISplitLayoutHandles>`}}},tags:{}}}catch{}})))()}export{O as n,E as t};