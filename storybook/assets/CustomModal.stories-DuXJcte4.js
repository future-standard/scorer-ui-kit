import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as u,s as y}from"./styled-components.browser.esm-CarAhzHj.js";import{r as a}from"./index-DnkWte70.js";import{a as j,F as S,d as E,P as F,A as L,e as _,c as P,b as k}from"./index.modern-CMonYql-.js";import"./index-nkfPnFJx.js";const I=u.div``,$=u.div`
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
  ${({$margin:s})=>s&&y`margin:${s};`}
  ${({$flex:s})=>s&&y`
    flex:${s};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,m=()=>{const[s,c]=a.useState(!1),[l,n]=a.useState(null),[r,w]=a.useState({username:"",password:""}),p=a.useCallback(o=>({target:{value:d}})=>{w({...r,[o]:d})},[r]),{setModalOpen:g}=j(),f=a.useCallback(o=>{if(o.username==="user"&&o.password==="fakepass123")return!0;throw Error(`The username: ${o.username}  and password provided does not match`)},[]),x=a.useCallback(async o=>{let d=!1;c(!0),n(null);try{const t=await f(o);console.debug(t,"login"),d=!0}catch(t){t instanceof Error?(console.error(`got error: ${t.message}`),n({message:t.message,type:"error"})):console.warn(t)}return c(!1),d},[f]),v=o=>o.username===""?(n({message:"User should not be empty",type:"error"}),!1):o.password===""?(n({message:"Password should not be empty",type:"error"}),!1):!0,h=a.useCallback(async o=>{o.preventDefault(),!(!v(r)||!await x(r))&&g(!1)},[x,g,r]);return e.jsx(I,{children:e.jsxs(S,{onSubmit:h,children:[e.jsx($,{children:"Sign In To Your Account"}),e.jsx(E,{fieldState:"default",required:!0,label:"Username",onChange:p("username"),value:r.username,name:"username",id:"username"}),e.jsx(F,{fieldState:"default",required:!0,label:"Password",onChange:p("password"),value:r.password,name:"password",id:"password"}),l&&e.jsx(L,{type:l.type,message:l.message}),e.jsx(A,{$flex:"1",children:e.jsx(_,{loading:s,type:"submit",onClick:h,children:"Login"})})]})})};m.__docgenInfo={description:"",methods:[],displayName:"LoginModalExample"};const z={title:"Alerts/Modals",components:m,decorator:[]},B=u.div``,T=s=>{const{createModal:c}=j(),l=e.jsx(m,{}),n=()=>{c({customComponent:l})};return e.jsx(k,{design:"secondary",onClick:n,children:"Form Modal"})},i=()=>e.jsx(B,{children:e.jsx(P,{children:e.jsx(T,{})})});i.__docgenInfo={description:"",methods:[],displayName:"_CustomExampleModal"};var M,C,b;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <LoginModal />
      </ModalProvider>
    </Container>;
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const D=["_CustomExampleModal"];export{i as _CustomExampleModal,D as __namedExportsOrder,z as default};
