import{a as e,n as t}from"./chunk-BneVvdWh.js";import{A as n,At as r,Ot as i,R as a,Rt as o,W as s,ft as c,jt as l,kt as u,l as d,r as f,s as p,vt as m,xt as h}from"./iframe-YIV3yJSz.js";var g,_,v,y,b,x,S=t((()=>{g=e(o()),m(),u(),_=i(),v=l.div``,y=l.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--grey-11);
  position:relative;
  margin-bottom: 45px;
`,b=l.div`
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
`,x=()=>{let[e,t]=(0,g.useState)(!1),[r,i]=(0,g.useState)(null),[a,o]=(0,g.useState)({username:``,password:``}),l=(0,g.useCallback)(e=>({target:{value:t}})=>{o({...a,[e]:t})},[a]),{setModalOpen:u}=h(),p=(0,g.useCallback)(e=>{if(e.username===`user`&&e.password===`fakepass123`)return!0;throw Error(`The username: ${e.username}  and password provided does not match`)},[]),m=(0,g.useCallback)(async e=>{let n=!1;t(!0),i(null);try{let t=await p(e);console.debug(t,`login`),n=!0}catch(e){e instanceof Error?(console.error(`got error: ${e.message}`),i({message:e.message,type:`error`})):console.warn(e)}return t(!1),n},[p]),x=(0,g.useCallback)(e=>e.username===``?(i({message:`User should not be empty`,type:`error`}),!1):e.password===``?(i({message:`Password should not be empty`,type:`error`}),!1):!0,[]),S=(0,g.useCallback)(async e=>{e.preventDefault(),x(a)&&await m(a)&&u(!1)},[m,u,a,x]);return(0,_.jsx)(v,{children:(0,_.jsxs)(n,{onSubmit:S,children:[(0,_.jsx)(y,{children:`Sign In To Your Account`}),(0,_.jsx)(c,{fieldState:`default`,required:!0,label:`Username`,onChange:l(`username`),value:a.username,name:`username`,id:`username`}),(0,_.jsx)(s,{fieldState:`default`,required:!0,label:`Password`,onChange:l(`password`),value:a.password,name:`password`,id:`password`}),r&&(0,_.jsx)(f,{type:r.type,message:r.message}),(0,_.jsx)(b,{$flex:`1`,children:(0,_.jsx)(d,{loading:e,type:`submit`,onClick:S,children:`Login`})})]})})},x.__docgenInfo={description:``,methods:[],displayName:`LoginModalExample`}})),C,w,T,E,D,O;t((()=>{m(),u(),S(),C=i(),w={title:`Alerts/Modals`,components:x,decorator:[]},T=l.div``,E=e=>{let{createModal:t}=h(),n=(0,C.jsx)(x,{});return(0,C.jsx)(p,{design:`secondary`,onClick:()=>{t({customComponent:n})},children:`Form Modal`})},D=()=>(0,C.jsx)(T,{children:(0,C.jsx)(a,{children:(0,C.jsx)(E,{})})}),D.__docgenInfo={description:``,methods:[],displayName:`_CustomExampleModal`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <LoginModal />
      </ModalProvider>
    </Container>;
}`,...D.parameters?.docs?.source}}},O=[`_CustomExampleModal`]}))();export{D as _CustomExampleModal,O as __namedExportsOrder,w as default};