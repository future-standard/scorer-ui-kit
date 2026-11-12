import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,r as i}from"./styled-components.browser.esm-DRoLZq3m.js";import{n as a,r as o}from"./common-CUVz1sPu.js";import{n as s,r as c,t as l}from"./Icon-jcMQaGO-.js";import{n as u,t as d}from"./Spinner-hSZCtfry.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),a(),c(),u(),f=t(),p=r.div`
  position: absolute;
  right: 0;
  top: 0;
`,m=r.button.attrs({type:`button`})`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  outline: none;
`,h=r.div`
  flex-shrink: 0;

  background-color: transparent;
  border: 1px solid transparent;

  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`,g=r.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;

  font-weight: 500;
  color: var(--white-1);
`,_=r.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;

  ${s} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,v=r.input`
  ${o};

  ${({$fieldState:e})=>i`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${e}-shadow-color, transparent);
  `};

  font-family: var(--font-data);

  height: var(--input-height);
  width: 100%;
  border-radius: 3px;

  padding: 0 15px 0 15px;
  box-sizing: border-box;
  outline: none;

  color: var(--input-color-default);
  font-size: 14px;

  transition:
    border var(--speed-fast) var(--easing-primary-out),
    background-color var(--speed-fast) var(--easing-primary-out),
    box-shadow var(--speed-fast) var(--easing-primary-out);

  &::placeholder {
    font-family: var(--font-data);
    color: var(--input-color-placeholder);
    font-style: italic;
    font-weight: 400;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };
`,y=r.div`

  flex: 1;
  position: relative;

  ${({$hasAction:e})=>e&&i`
    ${v}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`,b=r.div`
  ${({$fieldState:e,$showFeedback:t})=>i`

    display: flex;
    position: relative;
    flex-direction: row;

    ${v}{

      &:disabled {
        cursor: not-allowed;
      }

      ${[`default`,`disabled`].indexOf(e)===-1&&t&&i`
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      `};

    }

    ${h} {
      ${[`default`,`disabled`].indexOf(e)!==-1&&i`
        display: none;
      `};
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);
    }

    &:focus-within ${v} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
      box-shadow: var(--input-focused-box-shadow-x) var(--input-focused-box-shadow-y) var(--input-focused-box-shadow-blur) var(--input-focused-box-shadow-spread) var(--input-${e}-focused-shadow-color);
    }
  `}

`,x=({type:e=`text`,placeholder:t=``,defaultValue:n,fieldState:r=`default`,showFeedback:i=!1,feedbackMessage:a,actionCallback:o,actionIcon:s,postfix:c,children:u,formAction:x,...S})=>{let C=o!==void 0,w=e=>{switch(e){case`default`:break;case`disabled`:break;case`required`:return(0,f.jsx)(l,{icon:`Required`,size:16});case`valid`:return(0,f.jsx)(l,{icon:`Success`,size:16});case`invalid`:return(0,f.jsx)(l,{icon:`Invalid`,size:16});case`processing`:return(0,f.jsx)(d,{size:`medium`,styling:`primary`})}};return(0,f.jsxs)(b,{$fieldState:r||`default`,$showFeedback:i,children:[(0,f.jsxs)(y,{$hasAction:C,children:[(0,f.jsx)(v,{$fieldState:r||`default`,disabled:r===`disabled`||r===`processing`,type:e,placeholder:t,defaultValue:n,...S}),C?(0,f.jsx)(p,{children:(0,f.jsx)(m,{onClick:o,children:(0,f.jsx)(l,{icon:s||`NoIcon`,color:`primary`})})}):null]}),r&&i?(0,f.jsxs)(h,{children:[(0,f.jsx)(_,{children:w(r)}),a?(0,f.jsx)(g,{children:a}):null]}):null]})};try{x.displayName=`Input`,x.__docgenInfo={description:``,displayName:`Input`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/Input.tsx`,methods:[],props:{fieldState:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`fieldState`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeFieldState`,value:[{value:`"default"`},{value:`"disabled"`},{value:`"required"`},{value:`"valid"`},{value:`"invalid"`},{value:`"processing"`}]}},showFeedback:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`showFeedback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},feedbackMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`feedbackMessage`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},actionCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`actionCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`(() => void)`}},actionIcon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`actionIcon`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},postfix:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`postfix`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{S as n,x as t};