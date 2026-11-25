import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r}from"./styled-components.browser.esm-DRoLZq3m.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i=t(),a=r.div`
  max-width: 1600px;
  margin: 0 auto;
`,o=r.h2`
  font-family: var(--font-ui);
  color: var(--grey-8);
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
`,s=r.div`
  container-type: inline-size;
  margin-bottom: 80px;
`,c=r.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 4px;
  text-align: center;

  @container (width < 1124px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @container (width < 560px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & + & {
    margin-top: 4px;
  }
`,l=r.div`
  position: relative;
  height: 96px;
  border-radius: 4px;
  overflow: hidden;

  ${({$color:e})=>e&&`
    background: var(${e});
  `};
`,u=r.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
  line-height: 1.4;
  padding: 2px 3px;
  border-radius: 4px 0 4px 0;
  background-color: var(--white-a10);
  color: var(--black-a10);
`,d=()=>{let e=[`primary`,`secondary`,`grey`,`info`,`success`,`caution`,`warning`,`orange`,`red`,`green`,`black`,`white`],t=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`],n=(e,n)=>t.map(t=>{let r=`--${e}-${n?`a`:``}${t}`;return(0,i.jsx)(l,{$color:r,children:(0,i.jsx)(u,{children:r})},r)});return(0,i.jsx)(a,{children:e.map(e=>(0,i.jsxs)(s,{children:[(0,i.jsx)(o,{children:e}),(0,i.jsx)(c,{children:n(e)}),(0,i.jsx)(c,{children:n(e,!0)})]},e))})},f={title:`Misc/Colors`,tags:[`!autodocs`],render:()=>(0,i.jsx)(d,{})},p={},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Default,m as __namedExportsOrder,f as default};