import{a as e,n as t}from"./chunk-BneVvdWh.js";import{A as n,Ct as r,Et as i,Ft as a,G as o,It as s,Lt as c,Rt as l,bt as u,l as d,mt as f,r as p,s as m,z as h}from"./iframe-Ctt8ZGpV.js";var g,_,v,y,b,x,S=t((()=>{g=e(l()),a(),u(),_=i(),v=c.div``,y=c.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--grey-11);
  position:relative;
  margin-bottom: 45px;
`,b=c.div`
  margin-top:30px;
  button{
    width: 100%;
  }
  ${({$margin:e})=>e&&s`margin:${e};`}
  ${({$flex:e})=>e&&s`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,x=()=>{let[e,t]=(0,g.useState)(!1),[i,a]=(0,g.useState)(null),[s,c]=(0,g.useState)({username:``,password:``}),l=(0,g.useCallback)(e=>({target:{value:t}})=>{c({...s,[e]:t})},[s]),{setModalOpen:u}=r(),m=(0,g.useCallback)(e=>{if(e.username===`user`&&e.password===`fakepass123`)return!0;throw Error(`The username: ${e.username}  and password provided does not match`)},[]),h=(0,g.useCallback)(async e=>{let n=!1;t(!0),a(null);try{let t=await m(e);console.debug(t,`login`),n=!0}catch(e){e instanceof Error?(console.error(`got error: ${e.message}`),a({message:e.message,type:`error`})):console.warn(e)}return t(!1),n},[m]),x=e=>e.username===``?(a({message:`User should not be empty`,type:`error`}),!1):e.password===``?(a({message:`Password should not be empty`,type:`error`}),!1):!0,S=(0,g.useCallback)(async e=>{e.preventDefault(),x(s)&&await h(s)&&u(!1)},[h,u,s]);return(0,_.jsx)(v,{children:(0,_.jsxs)(n,{onSubmit:S,children:[(0,_.jsx)(y,{children:`Sign In To Your Account`}),(0,_.jsx)(f,{fieldState:`default`,required:!0,label:`Username`,onChange:l(`username`),value:s.username,name:`username`,id:`username`}),(0,_.jsx)(o,{fieldState:`default`,required:!0,label:`Password`,onChange:l(`password`),value:s.password,name:`password`,id:`password`}),i&&(0,_.jsx)(p,{type:i.type,message:i.message}),(0,_.jsx)(b,{$flex:`1`,children:(0,_.jsx)(d,{loading:e,type:`submit`,onClick:S,children:`Login`})})]})})},x.__docgenInfo={description:``,methods:[],displayName:`LoginModalExample`}})),C,w,T,E,D,O;t((()=>{l(),a(),S(),u(),C=i(),w={title:`Alerts/Modals`,components:x,decorator:[]},T=c.div``,E=e=>{let{createModal:t}=r(),n=(0,C.jsx)(x,{});return(0,C.jsx)(m,{design:`secondary`,onClick:()=>{t({customComponent:n})},children:`Form Modal`})},D=()=>(0,C.jsx)(T,{children:(0,C.jsx)(h,{children:(0,C.jsx)(E,{})})}),D.__docgenInfo={description:``,methods:[],displayName:`_CustomExampleModal`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <LoginModal />
      </ModalProvider>
    </Container>;
}`,...D.parameters?.docs?.source}}},O=[`_CustomExampleModal`]}))();export{D as _CustomExampleModal,O as __namedExportsOrder,w as default};