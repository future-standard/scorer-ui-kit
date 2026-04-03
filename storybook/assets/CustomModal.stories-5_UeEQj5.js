import{r as n,k as w,j as e,F as S,p as E,q as F,A as L,s as _,a as u,t as y,n as k,l as P}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const I=u.div``,$=u.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--grey-11);
  position:relative;
  margin-bottom: 45px;
`,A=u.div`
  margin-top:30px;
  button{
    width: 100%;
  }
  ${({$margin:o})=>o&&y`margin:${o};`}
  ${({$flex:o})=>o&&y`
    flex:${o};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,m=()=>{const[o,c]=n.useState(!1),[l,a]=n.useState(null),[t,b]=n.useState({username:"",password:""}),p=n.useCallback(s=>({target:{value:d}})=>{b({...t,[s]:d})},[t]),{setModalOpen:g}=w(),x=n.useCallback(s=>{if(s.username==="user"&&s.password==="fakepass123")return!0;throw Error(`The username: ${s.username}  and password provided does not match`)},[]),f=n.useCallback(async s=>{let d=!1;c(!0),a(null);try{const r=await x(s);console.debug(r,"login"),d=!0}catch(r){r instanceof Error?(console.error(`got error: ${r.message}`),a({message:r.message,type:"error"})):console.warn(r)}return c(!1),d},[x]),v=s=>s.username===""?(a({message:"User should not be empty",type:"error"}),!1):s.password===""?(a({message:"Password should not be empty",type:"error"}),!1):!0,h=n.useCallback(async s=>{s.preventDefault(),!(!v(t)||!await f(t))&&g(!1)},[f,g,t]);return e.jsx(I,{children:e.jsxs(S,{onSubmit:h,children:[e.jsx($,{children:"Sign In To Your Account"}),e.jsx(E,{fieldState:"default",required:!0,label:"Username",onChange:p("username"),value:t.username,name:"username",id:"username"}),e.jsx(F,{fieldState:"default",required:!0,label:"Password",onChange:p("password"),value:t.password,name:"password",id:"password"}),l&&e.jsx(L,{type:l.type,message:l.message}),e.jsx(A,{$flex:"1",children:e.jsx(_,{loading:o,type:"submit",onClick:h,children:"Login"})})]})})};m.__docgenInfo={description:"",methods:[],displayName:"LoginModalExample"};const O={title:"Alerts/Modals",components:m,decorator:[]},B=u.div``,T=o=>{const{createModal:c}=w(),l=e.jsx(m,{}),a=()=>{c({customComponent:l})};return e.jsx(P,{design:"secondary",onClick:a,children:"Form Modal"})},i=()=>e.jsx(B,{children:e.jsx(k,{children:e.jsx(T,{})})});i.__docgenInfo={description:"",methods:[],displayName:"_CustomExampleModal"};var M,C,j;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <LoginModal />
      </ModalProvider>
    </Container>;
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const U=["_CustomExampleModal"];export{i as _CustomExampleModal,U as __namedExportsOrder,O as default};
