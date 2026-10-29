import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Icon-BR6KFKcD.js";import{n as a,t as o}from"./Spinner-BMEnEEA1.js";import{n as s,r as c}from"./Label-CfsFF385.js";import{a as l,i as u,o as d}from"./iframe-B9mgqNTy.js";var f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{f=t(),d(),r(),a(),c(),p=n(),m=e=>{switch(e){case 0:return`off`;case 1:return`on`;case 2:return`neutral`;case 3:return`locked`;default:return`off`}},h=l.input`
  display: none;
`,g=l.div`
  border: var(--switch-border-width) solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  width: var(--switch-width);
  height: var(--switch-height);
  border-radius: calc(var(--switch-height) / 2);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(var(--switch-border-width) * -1);
    left: calc(var(--switch-border-width) * -1);
    bottom: calc(var(--switch-border-width) * -1);
    right: calc(var(--switch-border-width) * -1);
    pointer-events: none;
    border-radius: 12px;
    box-shadow:
      0px 2px 2px 0px var(--grey-a4) inset,
      0px -8px 8px 0px var(--grey-a2) inset,
      0px 2px 4px var(--black-a4),
      0px -2px 4px var(--white-a4);
  }
`,_=l.div`
  --offset: calc(((var(--switch-height) - var(--switch-inner-size)) / 2) - var(--switch-border-width));
  --position-off: var(--offset);
  --position-on: calc(var(--switch-width) - var(--switch-inner-size) - (var(--switch-border-width)*2) - var(--offset));
  --position-neutral: calc((var(--switch-width) / 2) - (var(--switch-inner-size) / 2) - var(--offset));
  --position-locked: var(--offset);

  position: absolute;
  top: var(--offset);
  left: ${({$position:e})=>e&&`var(--position-${e})`};

  box-sizing: border-box;
  height: var(--switch-inner-size);
  width: var(--switch-inner-size);
  border-radius: calc(var(--switch-inner-size) / 2);

  background-color: var(--switch-default-off-background);

  box-shadow:
    0px 2px 4px 0px var(--black-a8),
    0px 1px 2px 0px var(--white-a5) inset,
    0px -1px 1px 0px var(--black-a5) inset;
`,v=l.span``,y=l.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`,b=l.div``,x=l(s)`
  user-select: none;
  display: inline-flex;
  gap: 8px;
  align-items: center;

  ${g}{
    ${({$activeTheming:e,$themeState:t})=>u`
      border-color: var(--switch-${t}-${e}-border);
      background-color: var(--switch-${t}-${e}-background);
    `};

    ${({$activeTheming:e})=>e===`locked`&&u`
      background-color: var(--switch-special-locked-background);
      border-color: var(--switch-special-locked-border);
    `};

    ${({$activeTheming:e})=>e===`failure`&&u`
      background-color: var(--switch-special-failure-background);
      border-color: var(--switch-special-failure-border);
    `};

    ${({$activeTheming:e,$loading:t})=>t&&u`
      background-color: var(--switch-default-${e}-background);
      border-color: var(--switch-default-${e}-border);
    `};

  }

  ${_}{
    ${({$activeTheming:e,$themeState:t})=>u`
      background-color: var(--switch-${t}-${e}-inner);
    `};

    transition:
      left var(--speed-fast) var(--easing-primary-in-out),
      border var(--speed-fast) var(--easing-primary-in-out),
      width var(--speed-fast) var(--easing-primary-in-out);

    ${({$activeTheming:e})=>e===`locked`&&u`
      width: calc(100% - var(--switch-border-width));
      background-color: var(--switch-special-locked-inner);
      box-shadow: none;

      ${y} svg {
        transform: translateX(-1px);
      }
    `}

    ${({$activeTheming:e})=>e===`failure`&&u`
      background-color: var(--switch-special-failure-inner);
    `}

    ${({$activeTheming:e,$loading:t})=>t&&u`
      border-color: var(--switch-default-${e}-inner);
      box-shadow: none;
    `};

  }

  &:hover {
    ${_}{
      left: ${({$useIntent:e,$position:t})=>e&&t===0&&`calc(var(--position-off) + var(--switch-intent-offset))`||e&&t===1&&`calc(var(--position-on) - var(--switch-intent-offset))`};
    }
  }
`,S=e=>e==="default"||e===`loading`||e===`locked`||e===`disabled`||e===`failure`,C=({state:e=`default`,leftTheme:t=`off`,rightTheme:n=`on`,labelText:r,onChangeCallback:a,checked:s,defaultChecked:c=!1})=>{let l=s!==void 0,u=l?s:c,d=+!!u,C=u?n:t,[T,E]=(0,f.useState)(c),D=(0,f.useRef)(null),O=(0,f.useRef)(null),[k,A]=(0,f.useState)(d),[j,M]=(0,f.useState)(C),[N,P]=(0,f.useState)(`default`),[F,I]=(0,f.useState)(!1),[L,R]=(0,f.useState)(0),z=(0,f.useCallback)(()=>{l?(A(+!!s),M(s?n:t)):D.current&&(D.current.checked=T,A(+!!T),M(T?n:t))},[s,l,T,t,n]);(0,f.useEffect)(()=>{z()},[z]);let B=(0,f.useCallback)(()=>{l?(A(+!!s),M(s?n:t)):(A(+!!T),M(T?n:t))},[s,l,t,n,T]),V=(0,f.useCallback)(()=>{if(e!==`locked`&&e!==`disabled`){if(l)a?.(!s);else{let e=!T;E(e),a?.(e)}B()}},[l,s,T,a,e,B]),H=(0,f.useCallback)(()=>{k===1?M(n):k===0&&M(t)},[k,n,t]);return(0,f.useEffect)(()=>{H()},[H]),(0,f.useEffect)(()=>{S(e)&&P(w(e))},[e]),(0,f.useEffect)(()=>{e===`locked`?(A(3),M(`locked`)):e===`failure`?(A(2),M(`failure`)):B()},[e,B]),(0,f.useEffect)(()=>{O.current&&R(parseInt(getComputedStyle(O.current).getPropertyValue(`--switch-inner-size`),10))},[]),(0,p.jsxs)(x,{onChange:V,onMouseLeave:()=>I(!1),$activeTheming:j,$loading:e===`loading`,$useIntent:!F&&(e==="default"||e===`failure`),$themeState:N,$position:k,$checked:D.current?.checked,children:[(0,p.jsx)(g,{children:(0,p.jsxs)(_,{$position:m(k),ref:O,children:[e===`failure`?(0,p.jsx)(y,{children:(0,p.jsx)(i,{icon:`Exclamation`,color:`danger`,size:18,weight:`regular`})}):null,e===`locked`?(0,p.jsx)(y,{children:(0,p.jsx)(i,{icon:`Locked`,color:`switch-special-locked-icon`,size:12,weight:`regular`})}):null,e===`loading`&&L>0?(0,p.jsx)(b,{children:(0,p.jsx)(o,{styling:`simple`,custom:{size:L}})}):null]})}),r?(0,p.jsx)(v,{children:r}):null,(0,p.jsx)(h,{ref:D,type:`checkbox`,disabled:e!=="default"&&e!==`failure`,defaultChecked:l?s:c})]})},w=e=>{switch(e){case`locked`:return`default`;case`failure`:return`default`;default:return e}};try{C.displayName=`Switch`,C.__docgenInfo={description:``,displayName:`Switch`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/Switch.tsx`,methods:[],props:{labelText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`}],description:``,name:`labelText`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},leftTheme:{defaultValue:{value:`off`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`}],description:``,name:`leftTheme`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`SwitchThemes`,value:[{value:`"off"`},{value:`"on"`},{value:`"danger"`}]}},rightTheme:{defaultValue:{value:`on`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`}],description:``,name:`rightTheme`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`SwitchThemes`,value:[{value:`"off"`},{value:`"on"`},{value:`"danger"`}]}},state:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`}],description:``,name:`state`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeSwitchState`,value:[{value:`"default"`},{value:`"disabled"`},{value:`"loading"`},{value:`"locked"`},{value:`"failure"`}]}},checked:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`}],description:``,name:`checked`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},defaultChecked:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`}],description:``,name:`defaultChecked`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},onChangeCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`}],description:``,name:`onChangeCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Switch.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((checked: boolean, indeterminate?: boolean) => void)`}}},tags:{}}}catch{}})))()}export{T as n,C as t};