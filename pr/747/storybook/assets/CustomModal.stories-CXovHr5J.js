import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,r as a}from"./styled-components.browser.esm-DRoLZq3m.js";import{n as o,t as s}from"./AlertBar-BVzYcJYY.js";import{n as c,t as l}from"./Button-CVePDF2Y.js";import{n as u,t as d}from"./ButtonWithLoading-W8oHVGwg.js";import{n as f,r as p}from"./Label-C_93wLsZ.js";import{n as m,t as h}from"./useModal-DVdiqdN1.js";import{n as g,t as _}from"./PasswordField-B7D3AWYE.js";import{n as v,t as y}from"./TextField-DlugrMBI.js";var b,x,S;function C(){return(C=e((()=>{r(),p(),b=n(),x=i.form`
  ${({$spacing:e})=>e&&a`
      & >  ${f} {
        margin-bottom: ${e};
      }
  `}
`,S=({children:e,spacing:t=`45px;`,action:n,...r})=>(0,b.jsx)(x,{$spacing:t,action:typeof n==`string`?n:void 0,...r,children:e});try{S.displayName=`Form`,S.__docgenInfo={description:``,displayName:`Form`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/Form.tsx`,methods:[],props:{spacing:{defaultValue:{value:`45px;`},declarations:[{fileName:`packages/ui-lib/src/Form/Form.tsx`,name:`OwnProps`}],description:``,name:`spacing`,parent:{fileName:`packages/ui-lib/src/Form/Form.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var w,T,E,D,O,k;function A(){return(A=e((()=>{w=t(),o(),u(),C(),g(),v(),h(),r(),T=n(),E=i.div``,D=i.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: var(--grey-11);
  position:relative;
  margin-bottom: 45px;
`,O=i.div`
  margin-top:30px;
  button{
    width: 100%;
  }
  ${({$margin:e})=>e&&a`margin:${e};`}
  ${({$flex:e})=>e&&a`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,k=()=>{let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(null),[i,a]=(0,w.useState)({username:``,password:``}),o=(0,w.useCallback)(e=>({target:{value:t}})=>{a({...i,[e]:t})},[i]),{setModalOpen:c}=m(),l=(0,w.useCallback)(e=>{if(e.username===`user`&&e.password===`fakepass123`)return!0;throw Error(`The username: ${e.username}  and password provided does not match`)},[]),u=(0,w.useCallback)(async e=>{let n=!1;t(!0),r(null);try{let t=await l(e);console.debug(t,`login`),n=!0}catch(e){e instanceof Error?(console.error(`got error: ${e.message}`),r({message:e.message,type:`error`})):console.warn(e)}return t(!1),n},[l]),f=(0,w.useCallback)(e=>e.username===``?(r({message:`User should not be empty`,type:`error`}),!1):e.password!==``||(r({message:`Password should not be empty`,type:`error`}),!1),[]),p=(0,w.useCallback)(async e=>{e.preventDefault(),f(i)&&await u(i)&&c(!1)},[u,c,i,f]);return(0,T.jsx)(E,{children:(0,T.jsxs)(S,{onSubmit:p,children:[(0,T.jsx)(D,{children:`Sign In To Your Account`}),(0,T.jsx)(y,{fieldState:`default`,required:!0,label:`Username`,onChange:o(`username`),value:i.username,name:`username`,id:`username`}),(0,T.jsx)(_,{fieldState:`default`,required:!0,label:`Password`,onChange:o(`password`),value:i.password,name:`password`,id:`password`}),n&&(0,T.jsx)(s,{type:n.type,message:n.message}),(0,T.jsx)(O,{$flex:`1`,children:(0,T.jsx)(d,{loading:e,type:`submit`,onClick:p,children:`Login`})})]})})};try{k.displayName=`LoginModalExample`,k.__docgenInfo={description:``,displayName:`LoginModalExample`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/storybook/src/stories/Alerts/Modals/LoginModalExample.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N,P,F;function I(){return(I=e((()=>{c(),h(),A(),j=n(),M=()=>{let{createModal:e}=m();return(0,j.jsx)(l,{design:`secondary`,onClick:()=>{e({customComponent:(0,j.jsx)(k,{})})},children:`Form Modal`})},N={title:`Alerts/Modals/CustomModal`,parameters:{docs:{description:{component:'A form inside a modal opened through the useModal() hook: the button calls `createModal({ customComponent })` with the `LoginModalExample` component. The example component (LoginModalExample.tsx next to this story) validates the form and closes the modal itself with `setModalOpen(false)` from the same hook; it only accepts the username "user" with the password "fakepass123".'}}},render:()=>(0,j.jsx)(M,{})},P={},F=[`Default`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{}`,...P.parameters?.docs?.source}}}})))()}I();export{P as Default,F as __namedExportsOrder,N as default};