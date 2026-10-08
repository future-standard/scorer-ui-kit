import{t as e}from"./react-Q1GcV6wX.js";import{Gt as t,It as n,Rt as r,wt as i,yt as a,zt as o}from"./iframe-DlslPBnL.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=s((()=>{c=t(),l=e(),i(),o(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Filters/atoms`,component:a,decorators:[]},p=[{text:`Grid`,value:`grid`,icon:`LayoutGrid`},{text:`List`,value:`list`,icon:`LayoutList`}],m=r.div``,h=r.li``,g=r.div``,_=r.ol`
  margin-top: 20px;
  display: grid;
  ${({$layout:e})=>e===`grid`&&`
      list-style-type: none;
      grid-template-columns: repeat(3, 300px);
      gap: 16px;
        ${h} {
          padding: 100px 20px;
          border: 1px solid var(--grey-9);
          text-align: center;
        }
    `};
`,v=r.span`
    ${({$isOnline:e})=>e?`
      color: var(--success);
    `:`
      color: var(--warning);
    `}
  `,y=()=>{let[e,t]=(0,l.useState)(0),n=(0,c.boolean)(`Disabled`,!1),r=(0,c.select)(`Design type`,{Default:`default`,Basic:`basic`},`basic`),i=(0,c.text)(`Category Label`,`Layout`),o=(0,c.object)(`Options`,p),s=d(`Button Value: `),f=(0,l.useCallback)((e,n)=>{t(e),s(n)},[s]);return(0,u.jsxs)(g,{children:[(0,u.jsx)(a,{categoryLabel:i,options:o,onToggle:f,disabled:n,design:r,selectedIndex:e}),(0,u.jsxs)(_,{$layout:p[e].value,children:[(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera01 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera02 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera03 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera04 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera05 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera06 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera07 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera08 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera09 - `,(0,u.jsx)(v,{children:`Online`})]})})]})]})},y.__docgenInfo={description:``,methods:[],displayName:`_ToggleButton`},b=[`_ToggleButton`]})))()}x();export{y as _ToggleButton,b as __namedExportsOrder,f as default};