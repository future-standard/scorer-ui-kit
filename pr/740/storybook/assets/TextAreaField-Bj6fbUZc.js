import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./Icon-Bj-W_PAo.js";import{n as i,t as a}from"./Spinner-CeNS2_He.js";import{r as o,t as s}from"./Label-mM6ve_8N.js";import{n as c,t as l}from"./useRequiredDot-hm2kM5Xs.js";import{a as u,i as d,o as f}from"./iframe-DkCQ6b6C.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{f(),n(),i(),p=t(),m=u.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding-top: 2px;
`,h=u.textarea`

  ${({$fieldState:e})=>d`
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
`,g=u.div`
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
`,_=u.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;
  font-weight: 500;
  color: var(--white-1);
`,v=u.div`
  ${({$fieldState:e,$showFeedback:t})=>d`
    display: flex;
    position: relative;
    flex-direction: column;

    ${h}{
      ${[`default`,`disabled`].indexOf(e)===-1&&t&&d`
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

      ${[`default`,`disabled`].indexOf(e)!==-1&&d`
        display:none;
      `}
    }

    &:focus-within ${g} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
    }

  `};
`,y=({placeholder:e=``,fieldState:t=`default`,showFeedback:n=!1,feedbackMessage:i,children:o,...s})=>{let c=e=>{switch(e){case`default`:break;case`disabled`:break;case`required`:return(0,p.jsx)(r,{icon:`Required`,size:20,color:`white`});case`valid`:return(0,p.jsx)(r,{icon:`Success`,size:20,color:`white`});case`invalid`:return(0,p.jsx)(r,{icon:`Invalid`,size:20,color:`white`});case`processing`:return(0,p.jsx)(a,{size:`medium`,styling:`primary`})}};return(0,p.jsxs)(v,{$fieldState:t||`default`,$showFeedback:n,children:[(0,p.jsx)(h,{$fieldState:t||`default`,placeholder:e,disabled:t===`disabled`||t===`processing`,...s,children:o}),n&&t&&(0,p.jsxs)(g,{children:[(0,p.jsx)(m,{children:c(t)}),(0,p.jsx)(_,{children:i})]})]})};try{y.displayName=`TextArea`,y.__docgenInfo={description:``,displayName:`TextArea`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/TextArea.tsx`,methods:[],props:{fieldState:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`}],description:``,name:`fieldState`,parent:{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeFieldState`,value:[{value:`"default"`},{value:`"disabled"`},{value:`"required"`},{value:`"valid"`},{value:`"invalid"`},{value:`"processing"`}]}},showFeedback:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`}],description:``,name:`showFeedback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},feedbackMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`}],description:``,name:`feedbackMessage`,parent:{fileName:`packages/ui-lib/src/Form/atoms/TextArea.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var x,S;function C(){return(C=e((()=>{o(),b(),l(),x=t(),S=({name:e,label:t,fieldState:n=`default`,feedbackMessage:r,required:i=!1,alwaysShowRequiredDot:a,value:o,defaultValue:l,onChange:u,children:d,...f})=>{let{showRequiredDot:p,onChange:m}=c({required:i,alwaysShowRequiredDot:a,value:o,defaultValue:l,onChange:u});return(0,x.jsx)(s,{htmlFor:e,labelText:t,required:p,children:(0,x.jsx)(y,{fieldState:n,feedbackMessage:r,name:e,required:i,...f,value:o,defaultValue:l,onChange:m})})};try{S.displayName=`TextAreaField`,S.__docgenInfo={description:``,displayName:`TextAreaField`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`TextareaHTMLAttributes`}],description:``,name:`name`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}},fieldState:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`fieldState`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeFieldState`,value:[{value:`"default"`},{value:`"disabled"`},{value:`"required"`},{value:`"valid"`},{value:`"invalid"`},{value:`"processing"`}]}},showFeedback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`showFeedback`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},feedbackMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`feedbackMessage`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},alwaysShowRequiredDot:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`}],description:``,name:`alwaysShowRequiredDot`,parent:{fileName:`packages/ui-lib/src/Form/molecules/TextAreaField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{C as n,S as t};