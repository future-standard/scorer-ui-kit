import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,r as a}from"./styled-components.browser.esm-DRoLZq3m.js";import{r as o,t as s}from"./Label-C_93wLsZ.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=t(),r(),l=n(),u=i.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`,d=i.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  user-select: none;

  ${({$isChecked:e,$disabled:t})=>a`
    border-color: var(--input-toggle-unchecked-border-color);

    ${!t&&a`
      &:hover {
        cursor: pointer;
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }
    `};

    ${e&&!t&&a`
      border-color: var(--input-toggle-checked-border-color);
      ${u} {
        background-color: var(--input-toggle-checked-background-color);
      }
    `};

    ${e&&!t&&a`
      &:hover {
        border-color: var(--input-toggle-checked-hover-border-color);
        ${u} {
          background-color: var(--input-toggle-checked-hover-background-color);
        }
      }
    `};

    ${e&&t&&a`
      cursor: not-allowed;
      border-color: var(--input-toggle-checked-disabled-border-color);
      ${u} {
        background-color: var(--input-toggle-checked-disabled-background-color);
      }
    `};

    ${!e&&t&&a`
      cursor: not-allowed;
      border-color: var(--input-toggle-unchecked-disabled-border-color);
      ${u} {
        background-color: var(--input-toggle-unchecked-disabled-background-color);
      }
    `}
  `};
`,f=i.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
  opacity: 0;
`,p=i.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
`,m=({id:e,value:t,name:n,currentChecked:r,disabled:i=!1,required:a,onChangeCallback:o=()=>{}})=>{let s=(0,c.useCallback)(e=>{let t=e.target.value;o(t)},[o]),m=r!==void 0&&r===t;return(0,l.jsxs)(p,{children:[(0,l.jsx)(f,{type:`radio`,id:e,name:n,disabled:i,required:a,value:t,checked:m,onChange:s}),(0,l.jsx)(d,{$isChecked:m,$disabled:i,children:(0,l.jsx)(u,{})})]})};try{m.displayName=`RadioButton`,m.__docgenInfo={description:``,displayName:`RadioButton`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/RadioButton.tsx`,methods:[],props:{currentChecked:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/RadioButton.tsx`,name:`OwnProps`}],description:``,name:`currentChecked`,parent:{fileName:`packages/ui-lib/src/Form/atoms/RadioButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string | number`}},onChangeCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/RadioButton.tsx`,name:`OwnProps`}],description:``,name:`onChangeCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/RadioButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`((value: string | number) => void)`}}},tags:{}}}catch{}})))()}var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{o(),h(),r(),g=n(),{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:v}=__STORYBOOK_MODULE_TEST__,y=i.div`
  margin: 20px 0;
`,b=[`option1`,`option2`,`option3`],x={title:`Form/Input/RadioButton`,component:m,argTypes:{currentChecked:{control:`select`,options:[``,...b]},id:{control:!1,table:{defaultValue:{summary:`one per option`}}},value:{control:!1,table:{defaultValue:{summary:`one per option`}}},required:{control:!1,table:{defaultValue:{summary:`native form validation only`}}}},args:{name:`Example`,currentChecked:``,disabled:!1,onChangeCallback:v()},render:function(e){let[{currentChecked:t},n]=_(),r=t=>{e.onChangeCallback?.(t),n({currentChecked:t})};return(0,g.jsx)(`div`,{children:b.map((n,i)=>(0,g.jsx)(y,{children:(0,g.jsx)(s,{htmlFor:n,labelText:`Option ${i+1}`,direction:`row-reverse`,children:(0,g.jsx)(m,{...e,id:n,value:n,currentChecked:t,onChangeCallback:r})})},n))})}},S={},C=[`Default`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}}})))()}w();export{S as Default,C as __namedExportsOrder,x as default};