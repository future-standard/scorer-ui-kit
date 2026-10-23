import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{I as t,It as n,Kt as r,Lt as i,Ot as a,Rt as o,W as s,X as c,c as l,i as u,u as d,vt as f,wt as p,zt as m}from"./iframe-BclkYTZO.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{h=r(),p(),m(),g=n(),_=o.div``,v=o.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--grey-11);
  position:relative;
  margin-bottom: 45px;
`,y=o.div`
  margin-top:30px;
  button{
    width: 100%;
  }
  ${({$margin:e})=>e&&i`margin:${e};`}
  ${({$flex:e})=>e&&i`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,b=()=>{let[e,n]=(0,h.useState)(!1),[r,i]=(0,h.useState)(null),[o,s]=(0,h.useState)({username:``,password:``}),l=(0,h.useCallback)(e=>({target:{value:t}})=>{s({...o,[e]:t})},[o]),{setModalOpen:p}=a(),m=(0,h.useCallback)(e=>{if(e.username===`user`&&e.password===`fakepass123`)return!0;throw Error(`The username: ${e.username}  and password provided does not match`)},[]),b=(0,h.useCallback)(async e=>{let t=!1;n(!0),i(null);try{let n=await m(e);console.debug(n,`login`),t=!0}catch(e){e instanceof Error?(console.error(`got error: ${e.message}`),i({message:e.message,type:`error`})):console.warn(e)}return n(!1),t},[m]),x=(0,h.useCallback)(e=>e.username===``?(i({message:`User should not be empty`,type:`error`}),!1):e.password!==``||(i({message:`Password should not be empty`,type:`error`}),!1),[]),S=(0,h.useCallback)(async e=>{e.preventDefault(),x(o)&&await b(o)&&p(!1)},[b,p,o,x]);return(0,g.jsx)(_,{children:(0,g.jsxs)(t,{onSubmit:S,children:[(0,g.jsx)(v,{children:`Sign In To Your Account`}),(0,g.jsx)(f,{fieldState:`default`,required:!0,label:`Username`,onChange:l(`username`),value:o.username,name:`username`,id:`username`}),(0,g.jsx)(c,{fieldState:`default`,required:!0,label:`Password`,onChange:l(`password`),value:o.password,name:`password`,id:`password`}),r&&(0,g.jsx)(u,{type:r.type,message:r.message}),(0,g.jsx)(y,{$flex:`1`,children:(0,g.jsx)(d,{loading:e,type:`submit`,onClick:S,children:`Login`})})]})})},b.__docgenInfo={description:``,methods:[],displayName:`LoginModalExample`}})))()}var S,C,w,T,E,D;function O(){return(O=e((()=>{p(),m(),x(),S=n(),C={title:`Alerts/Modals`,components:b,decorator:[]},w=o.div``,T=e=>{let{createModal:t}=a(),n=(0,S.jsx)(b,{});return(0,S.jsx)(l,{design:`secondary`,onClick:()=>{t({customComponent:n})},children:`Form Modal`})},E=()=>(0,S.jsx)(w,{children:(0,S.jsx)(s,{children:(0,S.jsx)(T,{})})}),E.__docgenInfo={description:``,methods:[],displayName:`_CustomExampleModal`},D=[`_CustomExampleModal`]})))()}O();export{E as _CustomExampleModal,D as __namedExportsOrder,C as default};