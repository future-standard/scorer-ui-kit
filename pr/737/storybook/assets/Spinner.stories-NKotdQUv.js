import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Gt as t,It as n,Mt as r,Rt as i,wt as a,zt as o}from"./iframe-mW3aXh7X.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=t(),a(),o(),c=n(),l={title:`Misc`,component:r,decorators:[]},u=i.div`
  border-radius: 3px;
  height: calc(100vh - 2rem);
  display: flex;
  justify-content:center;
  align-items:center;
  ${({$styling:e})=>`background-color: var(--${e}-9)`};
`,d=()=>{let e=(0,s.select)(`Size`,{Small:`small`,Medium:`medium`,Large:`large`,XLarge:`xlarge`},`medium`),t=(0,s.select)(`Style`,{Primary:`primary`,Secondary:`grey`,Warning:`warning`},`primary`),n=(0,s.number)(`Custom Size`,0),i=(0,s.text)(`Custom Base Color`,``),a=(0,s.text)(`Custom Top Color`,``),o=i===``?void 0:i,l=a===``?void 0:a;return o=i.indexOf(`(`)!==-1&&i.indexOf(`)`)===-1?`${i})`:i,l=a.indexOf(`(`)!==-1&&a.indexOf(`)`)===-1?`${a})`:a,(0,c.jsx)(u,{$styling:t,children:(0,c.jsx)(r,{size:e,styling:t,custom:{size:n,baseColor:o,topColor:l}})})},d.__docgenInfo={description:``,methods:[],displayName:`LoadingSpinner`},f=[`LoadingSpinner`]})))()}p();export{d as LoadingSpinner,f as __namedExportsOrder,l as default};