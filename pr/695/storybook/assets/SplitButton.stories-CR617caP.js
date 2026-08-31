import{t as e}from"./react-BZJXY1be.js";import{Dt as t,Ft as n,Lt as r,Rt as i,W as a,Wt as o,it as s,wt as c}from"./iframe-DFQHAkQ-.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=l((()=>{u=o(),d=e(),c(),i(),f=n(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Form/Buttons`,component:s,decorators:[]},h=r.div`
`,g=(0,f.jsx)(`h1`,{children:`Main Action Modal`}),_=e=>{let[n,r]=(0,d.useState)(e),{createModal:i}=t(),a=p(`Main pressed, modal opened`),o=p(`日本語の場合はランダム pressed`),c=p(`Save Action pressed`),l=p(`Download pressed`),u=[{id:`a0`,text:`Main Action Open Modal`,icon:`Success`,onClickCallback:()=>{i({customComponent:g,padding:!0,width:`auto`}),a()}},{id:`a1`,text:`日本語の場合はランダム`,onClickCallback:o},{id:`a2`,text:`Save Action`,icon:`Analyse`,hasOnSelectLoading:!0,onClickCallback:c},{id:`a3`,text:`Download Action`,icon:`Download`,onClickCallback:l,disabled:!0}];return(0,d.useEffect)(()=>{r(e)},[e]),(0,f.jsx)(h,{children:(0,f.jsx)(s,{...n,buttonList:u})})},v=()=>{let e=(0,u.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,Custom:`custom`},`primary`),t=(0,u.boolean)(`Disabled`,!1),n=(0,u.select)(`Size`,{Small:`small`,Normal:`normal`,Large:`large`},`normal`);return(0,f.jsx)(a,{children:(0,f.jsx)(_,{mainButtonId:`a0`,design:e,size:n,disabled:t,buttonList:[]})})},v.__docgenInfo={description:``,methods:[],displayName:`_SplitButton`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const buttonDesign = select('Design', {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger',
    Custom: 'custom'
  }, 'primary');
  const buttonDisabled = boolean('Disabled', false);
  const buttonSize = select('Size', {
    Small: 'small',
    Normal: 'normal',
    Large: 'large'
  }, 'normal');
  return <ModalProvider>
      <SplitExampleWithModal mainButtonId={'a0'} design={buttonDesign} size={buttonSize} disabled={buttonDisabled} buttonList={[]} // this is replaced with data in the SplitExample component
    />
    </ModalProvider>;
}`,...v.parameters?.docs?.source}}},y=[`_SplitButton`]})))()}b();export{v as _SplitButton,y as __namedExportsOrder,m as default};