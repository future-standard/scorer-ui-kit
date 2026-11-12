import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,r as i}from"./styled-components.browser.esm-DRoLZq3m.js";import{n as a,r as o}from"./common-CUVz1sPu.js";import{r as s,t as c}from"./Label-C_93wLsZ.js";import{n as l,t as u}from"./useRequiredDot-hm2kM5Xs.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),s(),u(),d=t(),f=r.input`
  ${o};

  font-family: var(--font-data);
  line-height: var(--input-compact-height);

  font-size: 14px;
  flex: 1;
  color: var(--input-color-default);
  width: 100%;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: var(--input-color-placeholder);
    font-style: italic;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };

  &:disabled {
    cursor: not-allowed;
    color: var(--input-color-disabled);
  }
`,p=r.div`
  display: flex;
  height: var(--input-compact-height);
  padding: 0 8px;
  align-items: center;
  gap: 8px;
  position: relative;
  border-radius: 3px;

  ${({$fieldState:e})=>i`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    transition:
      border var(--speed-normal) var(--easing-primary-out),
      background-color var(--speed-normal) var(--easing-primary-out);
  `};

  ${({$hasAction:e})=>e&&i`
    ${f}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`,m=r.div`
  flex: 0 1;
  font-size: 12px;
  font-family: var(--font-ui);
  color: var(--input-color-unit);
  margin-top: 1px;
  white-space: nowrap;
`,h=r.div`
  position: relative;

  ${({$fieldState:e})=>e&&i`
    &:focus-within ${p} {
      transition: boxShadow var(--speed-fast) var(--easing-primary-in-out);
      box-shadow: 0 3px 3px var(--input-${e}-focused-shadow-color, var(--input-${e}-shadow-color));
    }
  `};
`,g=({unit:e,label:t,name:n,type:r=`text`,placeholder:i=``,value:a,defaultValue:o,onChange:s,fieldState:u=`default`,required:g=!1,alwaysShowRequiredDot:_,className:v,children:y,formAction:b,...x})=>{let{showRequiredDot:S,onChange:C}=l({required:g,alwaysShowRequiredDot:_,value:a,defaultValue:o,onChange:s});return(0,d.jsx)(h,{className:v,$fieldState:u||`default`,children:(0,d.jsx)(c,{labelText:t,htmlFor:n||``,required:S,children:(0,d.jsxs)(p,{$fieldState:u||`default`,children:[(0,d.jsx)(f,{$fieldState:u||`default`,type:r,placeholder:i,...x,value:a,defaultValue:o,onChange:C}),e?(0,d.jsx)(m,{children:e}):null]})})})};try{g.displayName=`SmallInput`,g.__docgenInfo={description:``,displayName:`SmallInput`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/SmallInput.tsx`,methods:[],props:{fieldState:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SmallInput.tsx`,name:`OwnProps`}],description:``,name:`fieldState`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SmallInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeFieldState`,value:[{value:`"default"`},{value:`"disabled"`},{value:`"required"`},{value:`"valid"`},{value:`"invalid"`},{value:`"processing"`}]}},label:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SmallInput.tsx`,name:`OwnProps`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SmallInput.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}},unit:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SmallInput.tsx`,name:`OwnProps`}],description:``,name:`unit`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SmallInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},alwaysShowRequiredDot:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SmallInput.tsx`,name:`OwnProps`}],description:``,name:`alwaysShowRequiredDot`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SmallInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{_ as n,g as t};