import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ft as n,H as r,It as i,J as a,Nt as o,P as s,Pt as c,St as l,Tt as u,Wt as d,gt as f,l as p,r as m,s as h}from"./iframe-DB8xyy-s.js";var g,_,v,y,b,x,S=e((()=>{g=t(d()),l(),i(),_=o(),v=n.div``,y=n.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--grey-11);
  position:relative;
  margin-bottom: 45px;
`,b=n.div`
  margin-top:30px;
  button{
    width: 100%;
  }
  ${({$margin:e})=>e&&c`margin:${e};`}
  ${({$flex:e})=>e&&c`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,x=()=>{let[e,t]=(0,g.useState)(!1),[n,r]=(0,g.useState)(null),[i,o]=(0,g.useState)({username:``,password:``}),c=(0,g.useCallback)(e=>({target:{value:t}})=>{o({...i,[e]:t})},[i]),{setModalOpen:l}=u(),d=(0,g.useCallback)(e=>{if(e.username===`user`&&e.password===`fakepass123`)return!0;throw Error(`The username: ${e.username}  and password provided does not match`)},[]),h=(0,g.useCallback)(async e=>{let n=!1;t(!0),r(null);try{let t=await d(e);console.debug(t,`login`),n=!0}catch(e){e instanceof Error?(console.error(`got error: ${e.message}`),r({message:e.message,type:`error`})):console.warn(e)}return t(!1),n},[d]),x=(0,g.useCallback)(e=>e.username===``?(r({message:`User should not be empty`,type:`error`}),!1):e.password===``?(r({message:`Password should not be empty`,type:`error`}),!1):!0,[]),S=(0,g.useCallback)(async e=>{e.preventDefault(),x(i)&&await h(i)&&l(!1)},[h,l,i,x]);return(0,_.jsx)(v,{children:(0,_.jsxs)(s,{onSubmit:S,children:[(0,_.jsx)(y,{children:`Sign In To Your Account`}),(0,_.jsx)(f,{fieldState:`default`,required:!0,label:`Username`,onChange:c(`username`),value:i.username,name:`username`,id:`username`}),(0,_.jsx)(a,{fieldState:`default`,required:!0,label:`Password`,onChange:c(`password`),value:i.password,name:`password`,id:`password`}),n&&(0,_.jsx)(m,{type:n.type,message:n.message}),(0,_.jsx)(b,{$flex:`1`,children:(0,_.jsx)(p,{loading:e,type:`submit`,onClick:S,children:`Login`})})]})})},x.__docgenInfo={description:``,methods:[],displayName:`LoginModalExample`}})),C,w,T,E,D,O;e((()=>{l(),i(),S(),C=o(),w={title:`Alerts/Modals`,components:x,decorator:[]},T=n.div``,E=e=>{let{createModal:t}=u(),n=(0,C.jsx)(x,{});return(0,C.jsx)(h,{design:`secondary`,onClick:()=>{t({customComponent:n})},children:`Form Modal`})},D=()=>(0,C.jsx)(T,{children:(0,C.jsx)(r,{children:(0,C.jsx)(E,{})})}),D.__docgenInfo={description:``,methods:[],displayName:`_CustomExampleModal`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <LoginModal />
      </ModalProvider>
    </Container>;
}`,...D.parameters?.docs?.source}}},O=[`_CustomExampleModal`]}))();export{D as _CustomExampleModal,O as __namedExportsOrder,w as default};