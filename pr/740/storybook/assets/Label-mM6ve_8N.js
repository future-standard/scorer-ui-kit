import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,o as i}from"./iframe-DkCQ6b6C.js";var a,o,s,c;function l(){return(l=e((()=>{i(),a=t(),o=n.span`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;

  ${({$required:e})=>e&&r`
    &::after {
      content: '';
      display: var(--input-required-dot-display);
      height: 8px;
      width: 8px;
      background-color: var(--primary-9);
      border-radius: 4px;
    }
  `}
`,s=n.label`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-weight: 500;

  display: flex;
  gap: 8px;

  ${({$direction:e})=>e&&r`
    flex-direction: ${e};
    ${[`row`,`row-reverse`].includes(e)&&r`
      display: inline-flex;
      
      ${o}{
        align-self: center;
      }
    `}
  `}
`,c=({htmlFor:e,labelText:t,direction:n=`column`,rightAlign:r=!1,required:i=!1,children:c,...l})=>(r&&(console.warn("Deprecation warning: `Label` is deprecating `rightAlign`, please update this to use `direction='row-reverse'` instead."),n=`row-reverse`),(0,a.jsxs)(s,{htmlFor:e,$direction:n,...l,children:[(0,a.jsx)(o,{$required:i,children:t}),c]}));try{s.displayName=`StyledLabel`,s.__docgenInfo={description:``,displayName:`StyledLabel`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/Label.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`void | WebTarget`}},forwardedAs:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`forwardedAs`,required:!1,tags:{},type:{name:`void | WebTarget`}}},tags:{}}}catch{}try{c.displayName=`Label`,c.__docgenInfo={description:``,displayName:`Label`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/Label.tsx`,methods:[],props:{htmlFor:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`LabelHTMLAttributes`}],description:``,name:`htmlFor`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},labelText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`}],description:``,name:`labelText`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}},direction:{defaultValue:{value:`column`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`}],description:``,name:`direction`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeLabelDirection`,value:[{value:`"column"`},{value:`"row"`},{value:`"row-reverse"`}]}},rightAlign:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`}],description:``,name:`rightAlign`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`}],description:``,name:`required`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Label.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{s as n,l as r,c as t};