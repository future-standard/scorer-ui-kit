import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as u,s as y}from"./styled-components.browser.esm-CarAhzHj.js";import{r as a}from"./index-DnkWte70.js";import{a as w,F as S,d as E,P as F,A as L,e as _,c as P,b as k}from"./index.modern-B3hCc7YS.js";import"./index-nkfPnFJx.js";const $=u.div``,I=u.div`
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
  ${({margin:s})=>s&&y`margin:${s};`}
  ${({flex:s})=>s&&y`
    flex:${s};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,m=()=>{const[s,c]=a.useState(!1),[l,n]=a.useState(null),[t,b]=a.useState({username:"",password:""}),p=a.useCallback(o=>({target:{value:i}})=>{b({...t,[o]:i})},[t]),{setModalOpen:g}=w(),f=a.useCallback(o=>{if(o.username==="user"&&o.password==="fakepass123")return!0;throw Error(`The username: ${o.username}  and password provided does not match`)},[]),x=a.useCallback(async o=>{let i=!1;c(!0),n(null);try{const r=await f(o);console.log(r,"login"),i=!0}catch(r){r instanceof Error?(console.log(`got error: ${r.message}`),n({message:r.message,type:"error"})):console.warn(r)}return c(!1),i},[f]),v=o=>o.username===""?(n({message:"User should not be empty",type:"error"}),!1):o.password===""?(n({message:"Password should not be empty",type:"error"}),!1):!0,h=a.useCallback(async o=>{o.preventDefault(),!(!v(t)||!await x(t))&&g(!1)},[x,g,t]);return e.jsx($,{children:e.jsxs(S,{onSubmit:h,children:[e.jsx(I,{children:"Sign In To Your Account"}),e.jsx(E,{fieldState:"default",required:!0,label:"Username",onChange:p("username"),value:t.username,name:"username",id:"username"}),e.jsx(F,{fieldState:"default",required:!0,label:"Password",onChange:p("password"),value:t.password,name:"password",id:"password"}),l&&e.jsx(L,{type:l.type,message:l.message}),e.jsx(A,{flex:"1",children:e.jsx(_,{loading:s,type:"submit",onClick:h,children:"Login"})})]})})};m.__docgenInfo={description:"",methods:[],displayName:"LoginModalExample"};const z={title:"Alerts/Modals",components:m,decorator:[]},B=u.div``,T=s=>{const{createModal:c}=w(),l=e.jsx(m,{}),n=()=>{c({customComponent:l})};return e.jsx(k,{design:"secondary",onClick:n,children:"Form Modal"})},d=()=>e.jsx(B,{children:e.jsx(P,{children:e.jsx(T,{})})});d.__docgenInfo={description:"",methods:[],displayName:"_CustomExampleModal"};var M,C,j;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <LoginModal />
      </ModalProvider>
    </Container>;
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const D=["_CustomExampleModal"];export{d as _CustomExampleModal,D as __namedExportsOrder,z as default};
