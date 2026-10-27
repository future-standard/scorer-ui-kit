import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Gt as t,It as n,Kt as r,Rt as i,wt as a,yt as o,zt as s}from"./iframe-mW3aXh7X.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{c=t(),l=r(),a(),s(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Filters/atoms`,component:o,decorators:[]},p=[{text:`Grid`,value:`grid`,icon:`LayoutGrid`},{text:`List`,value:`list`,icon:`LayoutList`}],m=i.div``,h=i.li``,g=i.div``,_=i.ol`
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
`,v=i.span`
    ${({$isOnline:e})=>e?`
      color: var(--success);
    `:`
      color: var(--warning);
    `}
  `,y=()=>{let[e,t]=(0,l.useState)(0),n=(0,c.boolean)(`Disabled`,!1),r=(0,c.select)(`Design type`,{Default:`default`,Basic:`basic`},`basic`),i=(0,c.text)(`Category Label`,`Layout`),a=(0,c.object)(`Options`,p),s=d(`Button Value: `),f=(0,l.useCallback)((e,n)=>{t(e),s(n)},[s]);return(0,u.jsxs)(g,{children:[(0,u.jsx)(o,{categoryLabel:i,options:a,onToggle:f,disabled:n,design:r,selectedIndex:e}),(0,u.jsxs)(_,{$layout:p[e].value,children:[(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera01 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera02 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera03 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera04 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera05 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera06 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera07 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera08 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera09 - `,(0,u.jsx)(v,{children:`Online`})]})})]})]})},y.__docgenInfo={description:``,methods:[],displayName:`_ToggleButton`},b=[`_ToggleButton`]})))()}x();export{y as _ToggleButton,b as __namedExportsOrder,f as default};