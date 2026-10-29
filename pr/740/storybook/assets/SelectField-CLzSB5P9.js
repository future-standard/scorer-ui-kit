import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Icon-Bj-W_PAo.js";import{r as a,t as o}from"./Label-mM6ve_8N.js";import{n as s,t as c}from"./useRequiredDot-hm2kM5Xs.js";import{a as l,i as u,o as d}from"./iframe-DkCQ6b6C.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{f=t(),d(),r(),c(),a(),p=n(),m=l.div`
  position: relative;
  display: flex;
  width: 100%;
`,h=l.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  right: ${({$isCompact:e})=>e?`14px`:`16px`};
  pointer-events: none;
`,g=l.div`
  position: absolute;
  left: ${({$isCompact:e})=>e?`10px`:`12px`};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`,_=l.select`
  box-sizing: border-box;
  outline: none;
  border-radius: 3px;
  appearance: none;
  font-family: var(--font-data);
  height: var(--input-height);
  width: 100%;
  border-radius: 3px;
  color: var(--input-color-default);
  font-size: 14px;
  cursor: pointer;

  transition:
    border var(--speed-fast) var(--easing-primary-out),
    background-color var(--speed-fast) var(--easing-primary-out),
    box-shadow var(--speed-fast) var(--easing-primary-out);

  ${({$fieldState:e})=>u`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${e}-shadow-color, transparent);
  `};


  ${({$isCompact:e,$withIcon:t})=>e?u`
    height: var(--input-compact-height);
    padding: 0 16px 1px ${t?`30px`:`8px`};

    ${h}{
      right: 14px;
    }
  `:u`
    height: var(--input-height);
    padding: 0 16px 1px ${t?`36px`:`12px`};
  `};

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
    color: var(--input-disabled-color-default);
    border: 1px solid var(--input-disabled-border-color);
    background: var(--input-disabled-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-disabled-shadow-color, transparent);
  }

  &::-ms-expand {
    display: none;
  }
`,v=l.div`

  ${({$activePlaceholder:e})=>e&&u`
    ${_} {
      font-family: var(--font-data);
      color: var(--input-color-placeholder);
      font-style: italic;
      &:lang(ja) {
        font-style: normal;
      }
      font-weight: 400;
    }
  `};

`,y=({fieldState:e=`default`,placeholder:t,label:n,icon:r,isCompact:a,value:c,defaultValue:l,onChange:u,required:d,alwaysShowRequiredDot:y,changeCallback:b=()=>{},children:x,...S})=>{n?.isSameRow&&console.warn("Deprecation warning: `SelectField` is deprecating `label.isSameRow`, please update this to use `label.direction` set to `row`.");let{hasValue:C,showRequiredDot:w,onChange:T}=s({required:d,alwaysShowRequiredDot:y,value:c,defaultValue:l,onChange:u}),E=e=>{T?.(e),b(e.target.value)},D=(0,f.useCallback)(()=>S.disabled||e===`disabled`?`input-disabled-lead-icon`:`input-lead-icon`,[e,S.disabled]),O=n=>(0,p.jsxs)(m,{children:[r&&(0,p.jsx)(g,{$isCompact:a,children:(0,p.jsx)(i,{icon:r,color:D(),size:12,weight:`regular`})}),(0,p.jsxs)(_,{$withIcon:!!r,id:n,$fieldState:e,$isCompact:a,...S,required:d,value:c,...c===void 0?{defaultValue:l??``}:{},onChange:E,children:[!l&&(0,p.jsx)(`option`,{value:``,disabled:!0,hidden:!0,children:t}),x]}),(0,p.jsx)(h,{$isCompact:a,children:(0,p.jsx)(i,{icon:`Down`,color:D(),weight:`regular`,size:a?8:10})})]});return(0,p.jsx)(v,{$isCompact:a,$activePlaceholder:!!t&&!C,children:n?(0,p.jsx)(o,{htmlFor:n.htmlFor,labelText:n.text,direction:n.isSameRow?`row`:n.direction,required:w,children:O(n.htmlFor)}):O()})};try{m.displayName=`SelectWrapper`,m.__docgenInfo={description:``,displayName:`SelectWrapper`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/SelectField.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`void | WebTarget`}},forwardedAs:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`forwardedAs`,required:!1,tags:{},type:{name:`void | WebTarget`}}},tags:{}}}catch{}try{y.displayName=`SelectField`,y.__docgenInfo={description:``,displayName:`SelectField`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/SelectField.tsx`,methods:[],props:{fieldState:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`}],description:``,name:`fieldState`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeFieldState`,value:[{value:`"default"`},{value:`"disabled"`},{value:`"required"`},{value:`"valid"`},{value:`"invalid"`},{value:`"processing"`}]}},label:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`ILabel`}},isCompact:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`}],description:``,name:`isCompact`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},placeholder:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`}],description:``,name:`placeholder`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},changeCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`}],description:``,name:`changeCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`((value: string) => void)`}},alwaysShowRequiredDot:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`}],description:``,name:`alwaysShowRequiredDot`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SelectField.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{m as n,b as r,y as t};