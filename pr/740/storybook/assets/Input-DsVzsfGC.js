import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r}from"./common-BPRGr8Pd.js";import{n as i,r as a,t as o}from"./Icon-CmxkaxYk.js";import{n as s,t as c}from"./Spinner-CLXh3KtQ.js";import{a as l,i as u,o as d}from"./iframe-BmxEQ5Tp.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{d(),n(),a(),s(),f=t(),p=l.div`
  position: absolute;
  right: 0;
  top: 0;
`,m=l.button.attrs({type:`button`})`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  outline: none;
`,h=l.div`
  flex-shrink: 0;

  background-color: transparent;
  border: 1px solid transparent;

  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`,g=l.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;

  font-weight: 500;
  color: var(--white-1);
`,_=l.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;

  ${i} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,v=l.input`
  ${r};

  ${({$fieldState:e})=>u`
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
`,y=l.div`

  flex: 1;
  position: relative;

  ${({$hasAction:e})=>e&&u`
    ${v}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`,b=l.div`
  ${({$fieldState:e,$showFeedback:t})=>u`

    display: flex;
    position: relative;
    flex-direction: row;

    ${v}{

      &:disabled {
        cursor: not-allowed;
      }

      ${[`default`,`disabled`].indexOf(e)===-1&&t&&u`
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      `};

    }

    ${h} {
      ${[`default`,`disabled`].indexOf(e)!==-1&&u`
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

`,x=({type:e=`text`,placeholder:t=``,defaultValue:n,fieldState:r=`default`,showFeedback:i=!1,feedbackMessage:a,actionCallback:s,actionIcon:l,postfix:u,children:d,formAction:x,...S})=>{let C=s!==void 0,w=e=>{switch(e){case`default`:break;case`disabled`:break;case`required`:return(0,f.jsx)(o,{icon:`Required`,size:16});case`valid`:return(0,f.jsx)(o,{icon:`Success`,size:16});case`invalid`:return(0,f.jsx)(o,{icon:`Invalid`,size:16});case`processing`:return(0,f.jsx)(c,{size:`medium`,styling:`primary`})}};return(0,f.jsxs)(b,{$fieldState:r||`default`,$showFeedback:i,children:[(0,f.jsxs)(y,{$hasAction:C,children:[(0,f.jsx)(v,{$fieldState:r||`default`,disabled:r===`disabled`||r===`processing`,type:e,placeholder:t,defaultValue:n,...S}),C?(0,f.jsx)(p,{children:(0,f.jsx)(m,{onClick:s,children:(0,f.jsx)(o,{icon:l||`NoIcon`,color:`primary`})})}):null]}),r&&i?(0,f.jsxs)(h,{children:[(0,f.jsx)(_,{children:w(r)}),a?(0,f.jsx)(g,{children:a}):null]}):null]})};try{x.displayName=`Input`,x.__docgenInfo={description:``,displayName:`Input`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/Input.tsx`,methods:[],props:{fieldState:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`fieldState`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeFieldState`,value:[{value:`"default"`},{value:`"disabled"`},{value:`"required"`},{value:`"valid"`},{value:`"invalid"`},{value:`"processing"`}]}},showFeedback:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`showFeedback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},feedbackMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`feedbackMessage`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},actionCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`actionCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`(() => void)`}},actionIcon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`actionIcon`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},postfix:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`}],description:``,name:`postfix`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Input.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{S as n,x as t};