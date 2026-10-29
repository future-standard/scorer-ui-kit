import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./AlertBar-BmRHVlMr.js";import{n as a,t as o}from"./Button-DBbC_pYz.js";import{n as s,t as c}from"./ButtonWithLoading-BOl70wlJ.js";import{n as l,r as u}from"./Label-mM6ve_8N.js";import{i as d,n as f,r as p,t as m}from"./useModal-fmAkajtp.js";import{n as h,t as g}from"./PasswordField-Eg_9kHRd.js";import{n as _,t as v}from"./TextField-s_E50oSz.js";import{a as y,i as b,o as x}from"./iframe-DkCQ6b6C.js";var S,C,w;function T(){return(T=e((()=>{x(),u(),S=n(),C=y.form`
  ${({$spacing:e})=>e&&b`
      & >  ${l} {
        margin-bottom: ${e};
      }
  `}
`,w=({children:e,spacing:t=`45px;`,action:n,...r})=>(0,S.jsx)(C,{$spacing:t,action:typeof n==`string`?n:void 0,...r,children:e});try{w.displayName=`Form`,w.__docgenInfo={description:``,displayName:`Form`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/Form.tsx`,methods:[],props:{spacing:{defaultValue:{value:`45px;`},declarations:[{fileName:`packages/ui-lib/src/Form/Form.tsx`,name:`OwnProps`}],description:``,name:`spacing`,parent:{fileName:`packages/ui-lib/src/Form/Form.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var E,D,O,k,A,j;function M(){return(M=e((()=>{E=t(),r(),s(),T(),h(),_(),m(),x(),D=n(),O=y.div``,k=y.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--grey-11);
  position:relative;
  margin-bottom: 45px;
`,A=y.div`
  margin-top:30px;
  button{
    width: 100%;
  }
  ${({$margin:e})=>e&&b`margin:${e};`}
  ${({$flex:e})=>e&&b`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,j=()=>{let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(null),[a,o]=(0,E.useState)({username:``,password:``}),s=(0,E.useCallback)(e=>({target:{value:t}})=>{o({...a,[e]:t})},[a]),{setModalOpen:l}=f(),u=(0,E.useCallback)(e=>{if(e.username===`user`&&e.password===`fakepass123`)return!0;throw Error(`The username: ${e.username}  and password provided does not match`)},[]),d=(0,E.useCallback)(async e=>{let n=!1;t(!0),r(null);try{let t=await u(e);console.debug(t,`login`),n=!0}catch(e){e instanceof Error?(console.error(`got error: ${e.message}`),r({message:e.message,type:`error`})):console.warn(e)}return t(!1),n},[u]),p=(0,E.useCallback)(e=>e.username===``?(r({message:`User should not be empty`,type:`error`}),!1):e.password!==``||(r({message:`Password should not be empty`,type:`error`}),!1),[]),m=(0,E.useCallback)(async e=>{e.preventDefault(),p(a)&&await d(a)&&l(!1)},[d,l,a,p]);return(0,D.jsx)(O,{children:(0,D.jsxs)(w,{onSubmit:m,children:[(0,D.jsx)(k,{children:`Sign In To Your Account`}),(0,D.jsx)(v,{fieldState:`default`,required:!0,label:`Username`,onChange:s(`username`),value:a.username,name:`username`,id:`username`}),(0,D.jsx)(g,{fieldState:`default`,required:!0,label:`Password`,onChange:s(`password`),value:a.password,name:`password`,id:`password`}),n&&(0,D.jsx)(i,{type:n.type,message:n.message}),(0,D.jsx)(A,{$flex:`1`,children:(0,D.jsx)(c,{loading:e,type:`submit`,onClick:m,children:`Login`})})]})})};try{j.displayName=`LoginModalExample`,j.__docgenInfo={description:``,displayName:`LoginModalExample`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/storybook/src/stories/Alerts/Modals/LoginModalExample.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,P,F,I,L,R;function z(){return(z=e((()=>{a(),d(),m(),x(),M(),N=n(),P={title:`Alerts/Modals`,components:j,decorator:[]},F=y.div``,I=e=>{let{createModal:t}=f(),n=(0,N.jsx)(j,{});return(0,N.jsx)(o,{design:`secondary`,onClick:()=>{t({customComponent:n})},children:`Form Modal`})},L=()=>(0,N.jsx)(F,{children:(0,N.jsx)(p,{children:(0,N.jsx)(I,{})})}),R=[`_CustomExampleModal`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <LoginModal />
      </ModalProvider>
    </Container>;
}`,...L.parameters?.docs?.source}}}})))()}z();export{L as _CustomExampleModal,R as __namedExportsOrder,P as default};