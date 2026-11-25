import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,r as i}from"./styled-components.browser.esm-DRoLZq3m.js";import{r as a,t as o}from"./Icon-jcMQaGO-.js";import{n as s,t as c}from"./Spinner-hSZCtfry.js";import{r as l,t as u}from"./Label-C_93wLsZ.js";import{n as d,t as f}from"./useRequiredDot-hm2kM5Xs.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),a(),s(),p=t(),m=r.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding-top: 2px;
`,h=r.textarea`

  ${({$fieldState:e})=>i`
    font-family: var(--font-data);
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${e}-shadow-color, transparent);
  `};

  padding: 8px 15px;
  box-sizing: border-box;
  outline: none;
  height: 100%;
  width: 100%;
  border-radius: 3px;


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
`,g=r.div`
  flex-shrink: 0;
  padding: 8px 0;
  background-color: transparent;
  border: 1px solid transparent;

  border-left: none;
  border-radius: 0 0 3px 3px;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`,_=r.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;
  font-weight: 500;
  color: var(--white-1);
`,v=r.div`
  ${({$fieldState:e,$showFeedback:t})=>i`
    display: flex;
    position: relative;
    flex-direction: column;

    ${h}{
      ${[`default`,`disabled`].indexOf(e)===-1&&t&&i`
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      `};

      &:disabled {
        cursor: not-allowed;
      }

      &:focus {
        box-shadow: var(--input-focused-box-shadow-x) var(--input-focused-box-shadow-y) var(--input-focused-box-shadow-blur) var(--input-focused-box-shadow-spread) var(--input-${e}-focused-shadow-color);
      }
    }

    ${g} {
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);

      ${[`default`,`disabled`].indexOf(e)!==-1&&i`
        display:none;
      `}
    }

    &:focus-within ${g} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
    }

  `};
`,y=({placeholder:e=``,fieldState:t=`default`,showFeedback:n=!1,feedbackMessage:r,children:i,...a})=>{let s=e=>{switch(e){case`default`:break;case`disabled`:break;case`required`:return(0,p.jsx)(o,{icon:`Required`,size:20,color:`white`});case`valid`:return(0,p.jsx)(o,{icon:`Success`,size:20,color:`white`});case`invalid`:return(0,p.jsx)(o,{icon:`Invalid`,size:20,color:`white`});case`processing`:return(0,p.jsx)(c,{size:`medium`,styling:`primary`})}};return(0,p.jsxs)(v,{$fieldState:t||`default`,$showFeedback:n,children:[(0,p.jsx)(h,{$fieldState:t||`default`,placeholder:e,disabled:t===`disabled`||t===`processing`,...a,children:i}),n&&t&&(0,p.jsxs)(g,{children:[(0,p.jsx)(m,{children:s(t)}),(0,p.jsx)(_,{children:r})]})]})};try{y.displayName=`TextArea`,y.__docgenInfo={description:``,displayName:`TextArea`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/TextArea.tsx`,methods:[],props:{fieldState:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`}],description:``,name:`fieldState`,parent:{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeFieldState`,value:[{value:`"default"`},{value:`"disabled"`},{value:`"required"`},{value:`"valid"`},{value:`"invalid"`},{value:`"processing"`}]}},showFeedback:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`}],description:``,name:`showFeedback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},feedbackMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`}],description:``,name:`feedbackMessage`,parent:{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var x,S;function C(){return(C=e((()=>{l(),b(),f(),x=t(),S=({name:e,label:t,fieldState:n=`default`,feedbackMessage:r,required:i=!1,alwaysShowRequiredDot:a,value:o,defaultValue:s,onChange:c,children:l,...f})=>{let{showRequiredDot:p,onChange:m}=d({required:i,alwaysShowRequiredDot:a,value:o,defaultValue:s,onChange:c});return(0,x.jsx)(u,{htmlFor:e,labelText:t,required:p,children:(0,x.jsx)(y,{fieldState:n,feedbackMessage:r,name:e,required:i,...f,value:o,defaultValue:s,onChange:m})})};try{S.displayName=`TextAreaField`,S.__docgenInfo={description:``,displayName:`TextAreaField`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`name`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}},fieldState:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`fieldState`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeFieldState`,value:[{value:`"default"`},{value:`"disabled"`},{value:`"required"`},{value:`"valid"`},{value:`"invalid"`},{value:`"processing"`}]}},showFeedback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`showFeedback`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},feedbackMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`feedbackMessage`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},alwaysShowRequiredDot:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`alwaysShowRequiredDot`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{C as n,S as t};