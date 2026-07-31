import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ft as n,H as r,It as i,Nt as a,St as o,Tt as s,Ut as c,Wt as l,nt as u}from"./iframe-CW3QRQX7.js";var d,f,p,m,h,g,_,v,y,b;e((()=>{d=c(),f=t(l()),o(),i(),p=a(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Form/Buttons`,component:u,decorators:[]},g=n.div`
`,_=(0,p.jsx)(`h1`,{children:`Main Action Modal`}),v=e=>{let[t,n]=(0,f.useState)(e),{createModal:r}=s(),i=m(`Main pressed, modal opened`),a=m(`日本語の場合はランダム pressed`),o=m(`Save Action pressed`),c=m(`Download pressed`),l=[{id:`a0`,text:`Main Action Open Modal`,icon:`Success`,onClickCallback:()=>{r({customComponent:_,padding:!0,width:`auto`}),i()}},{id:`a1`,text:`日本語の場合はランダム`,onClickCallback:a},{id:`a2`,text:`Save Action`,icon:`Analyse`,hasOnSelectLoading:!0,onClickCallback:o},{id:`a3`,text:`Download Action`,icon:`Download`,onClickCallback:c,disabled:!0}];return(0,f.useEffect)(()=>{n(e)},[e]),(0,p.jsx)(g,{children:(0,p.jsx)(u,{...t,buttonList:l})})},y=()=>{let e=(0,d.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,Custom:`custom`},`primary`),t=(0,d.boolean)(`Disabled`,!1);return(0,p.jsx)(r,{children:(0,p.jsx)(v,{mainButtonId:`a0`,design:e,size:(0,d.select)(`Size`,{Small:`small`,Normal:`normal`,Large:`large`},`normal`),disabled:t,buttonList:[]})})},y.__docgenInfo={description:``,methods:[],displayName:`_SplitButton`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b=[`_SplitButton`]}))();export{y as _SplitButton,b as __namedExportsOrder,h as default};