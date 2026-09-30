import{It as e,Rt as t,zt as n}from"./iframe-DFsJFw3v.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=r((()=>{n(),i=e(),a={title:`Misc`,decorators:[]},o=t.div`
  width: 80%;
  margin: 0 auto;
`,s=t.h2`
  font-family: var(--font-ui);
  color: var(--grey-8);
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
`,c=t.div`
  margin-bottom: 80px;
`,l=t.div`
  display: grid;
  grid-template-columns: repeat(12, calc(100%/12));
  column-gap: 4px;
  row-gap: 4px;
  text-align: center;
`,u=t.div`
  height: 96px;
  border-radius: 4px;

  ${({$color:e})=>e&&`
    background: var(${e});
  `};
`,d=t.div`
  position: absolute;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px 0 2px 0;
  background-color: var(--white-a10);
  color: var(--black-a10);
`,f=()=>{let e=[`primary`,`secondary`,`grey`,`info`,`success`,`caution`,`warning`,`orange`,`red`,`green`,`black`,`white`],t=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`],n=(e,n)=>t.map(t=>{let r=`--${e}-${n?`a`:``}${t}`;return(0,i.jsx)(u,{$color:r,children:(0,i.jsx)(d,{children:r})},r)});return(0,i.jsx)(o,{children:e.map(e=>(0,i.jsxs)(c,{children:[(0,i.jsx)(s,{children:e}),(0,i.jsxs)(l,{children:[n(e),n(e,!0)]})]},e))})},f.__docgenInfo={description:``,methods:[],displayName:`_Colors`},p=[`_Colors`]})))()}m();export{f as _Colors,p as __namedExportsOrder,a as default};