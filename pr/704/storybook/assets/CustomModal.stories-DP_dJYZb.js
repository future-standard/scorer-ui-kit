import{t as e}from"./react-BZJXY1be.js";import{I as t,It as n,Lt as r,Ot as i,Rt as a,W as o,X as s,c,i as l,u,vt as d,wt as f,zt as p}from"./iframe-C8iM32yd.js";import{n as m}from"./rolldown-runtime-DkW27tQK.js";var h,g,_,v,y,b;function x(){return(x=m((()=>{h=e(),f(),p(),g=n(),_=a.div``,v=a.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--grey-11);
  position:relative;
  margin-bottom: 45px;
`,y=a.div`
  margin-top:30px;
  button{
    width: 100%;
  }
  ${({$margin:e})=>e&&r`margin:${e};`}
  ${({$flex:e})=>e&&r`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,b=()=>{let[e,n]=(0,h.useState)(!1),[r,a]=(0,h.useState)(null),[o,c]=(0,h.useState)({username:``,password:``}),f=(0,h.useCallback)(e=>({target:{value:t}})=>{c({...o,[e]:t})},[o]),{setModalOpen:p}=i(),m=(0,h.useCallback)(e=>{if(e.username===`user`&&e.password===`fakepass123`)return!0;throw Error(`The username: ${e.username}  and password provided does not match`)},[]),b=(0,h.useCallback)(async e=>{let t=!1;n(!0),a(null);try{let n=await m(e);console.debug(n,`login`),t=!0}catch(e){e instanceof Error?(console.error(`got error: ${e.message}`),a({message:e.message,type:`error`})):console.warn(e)}return n(!1),t},[m]),x=(0,h.useCallback)(e=>e.username===``?(a({message:`User should not be empty`,type:`error`}),!1):e.password!==``||(a({message:`Password should not be empty`,type:`error`}),!1),[]),S=(0,h.useCallback)(async e=>{e.preventDefault(),x(o)&&await b(o)&&p(!1)},[b,p,o,x]);return(0,g.jsx)(_,{children:(0,g.jsxs)(t,{onSubmit:S,children:[(0,g.jsx)(v,{children:`Sign In To Your Account`}),(0,g.jsx)(d,{fieldState:`default`,required:!0,label:`Username`,onChange:f(`username`),value:o.username,name:`username`,id:`username`}),(0,g.jsx)(s,{fieldState:`default`,required:!0,label:`Password`,onChange:f(`password`),value:o.password,name:`password`,id:`password`}),r&&(0,g.jsx)(l,{type:r.type,message:r.message}),(0,g.jsx)(y,{$flex:`1`,children:(0,g.jsx)(u,{loading:e,type:`submit`,onClick:S,children:`Login`})})]})})},b.__docgenInfo={description:``,methods:[],displayName:`LoginModalExample`}})))()}var S,C,w,T,E,D;function O(){return(O=m((()=>{f(),p(),x(),S=n(),C={title:`Alerts/Modals`,components:b,decorator:[]},w=a.div``,T=e=>{let{createModal:t}=i(),n=(0,S.jsx)(b,{});return(0,S.jsx)(c,{design:`secondary`,onClick:()=>{t({customComponent:n})},children:`Form Modal`})},E=()=>(0,S.jsx)(w,{children:(0,S.jsx)(o,{children:(0,S.jsx)(T,{})})}),E.__docgenInfo={description:``,methods:[],displayName:`_CustomExampleModal`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <LoginModal />
      </ModalProvider>
    </Container>;
}`,...E.parameters?.docs?.source}}},D=[`_CustomExampleModal`]})))()}O();export{E as _CustomExampleModal,D as __namedExportsOrder,C as default};