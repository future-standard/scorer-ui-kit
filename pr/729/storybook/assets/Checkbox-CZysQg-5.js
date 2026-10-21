import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./checkmark-DMxx4NiA.js";import{a,i as o,l as s,o as c,u as l}from"./iframe-PEYaYO03.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{u=t(),c(),r(),l(),d=n(),f=a.input`
  display: none;
`,p=a.div`
  cursor: pointer;

  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;

  transition: 
    background-color var(--speed-faster) var(--easing-primary-out),
    border-color var(--speed-faster) var(--easing-primary-out);
`,m=a.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,h=a.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    [stroke]{
      stroke: transparent;
    }
    [fill] {
      fill: ${({$color:e})=>`var(--${e})`};
    }
  }
`,g=a.label`
  display: inline-block;
  user-select: none;
  ${p}{
    border: var(--input-toggle-unchecked-border-color) 2px solid;
  }

  ${({$visualState:e,$disabled:t})=>e===`off`&&o`
    /* Unchecked */
    ${p}{
      background-color: var(--input-toggle-unchecked-background-color);
      border-color: var(--input-toggle-unchecked-border-color);
    }

    /* Unchecked - Hover */
    ${!t&&o`
      &:hover ${p} {
        background-color: var(--input-toggle-unchecked-hover-background-color);
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }`};

    /* Unchecked - Disabled */
    ${t&&o`
      ${p}{
        background-color: var(--input-toggle-unchecked-disabled-background-color);
        border-color: var(--input-toggle-unchecked-disabled-border-color);
        border: var(--grey-6) 2px solid;
        cursor: not-allowed;
      }
    `}
  `}

  ${({$visualState:e,$disabled:t})=>e===`on`&&o`
    /* Checked */
    ${p}{
      background-color: var(--input-toggle-checked-background-color);
      border-color: var(--input-toggle-checked-border-color);
    }
    /* Checked - Hover */
    ${!t&&o`
      &:hover ${p}{
        background-color: var(--input-toggle-checked-hover-background-color);
        border-color: var(--input-toggle-checked-hover-border-color);
      }`};

    /* Checked - Disabled */
    ${t&&o`
      ${p}{
        background-color: var(--input-toggle-checked-disabled-background-color);
        border-color: var(--input-toggle-checked-disabled-border-color);
        cursor: not-allowed;
      }
      ${h}{
        opacity: 0.65;
      }
    `}
  `}

  ${({$visualState:e,$disabled:t})=>e===`indeterminate`&&o`
    ${p}{
      background-color: var(--input-toggle-intermediate-background-color);
      border-color: var(--input-toggle-intermediate-border-color);
    }
    ${!t&&o`
      &:hover ${p}{
        background-color: var(--input-toggle-intermediate-hover-background-color);
        border-color: var(--input-toggle-intermediate-hover-border-color);
      }
    `};
    ${t&&o`
      ${p}{
        background-color: var(--input-toggle-intermediate-disabled-background-color);
        border-color: var(--input-toggle-intermediate-disabled-border-color);
        cursor: not-allowed;
      }
      ${h}{
        opacity: 0.65;
      }
    `}

  `}

`,_=({indeterminate:e=!1,disabled:t,checked:n=!1,onChangeCallback:r})=>{let[a,o]=(0,u.useState)(n),[c,l]=(0,u.useState)(n?`on`:`off`),_=e=>{let t=e.target.checked;o(t),r&&r(t)};(0,u.useEffect)(()=>{l(n?`on`:`off`)},[n]),(0,u.useEffect)(()=>{o(n)},[n]);let v=s.icons.weights.regular;return(0,d.jsxs)(g,{onChange:_,$disabled:t,$visualState:c,children:[(0,d.jsx)(p,{children:(0,d.jsx)(m,{children:c===`on`?(0,d.jsx)(h,{$color:`input-toggle-icon-color`,children:(0,d.jsx)(i,{color:`input-toggle-icon-color`,stroke:`inverse`,size:12,weight:v})}):null})}),(0,d.jsx)(f,{type:`checkbox`,checked:a,readOnly:!0,disabled:t})]})};try{_.displayName=`Checkbox`,_.__docgenInfo={description:``,displayName:`Checkbox`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/Checkbox.tsx`,methods:[],props:{checked:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Checkbox.tsx`,name:`IProps`}],description:``,name:`checked`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Checkbox.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Checkbox.tsx`,name:`IProps`}],description:``,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Checkbox.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},indeterminate:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Checkbox.tsx`,name:`IProps`}],description:``,name:`indeterminate`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Checkbox.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},onChangeCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Checkbox.tsx`,name:`IProps`}],description:``,name:`onChangeCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Checkbox.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((checked: boolean, indeterminate?: boolean) => void)`}}},tags:{}}}catch{}})))()}export{v as n,_ as t};