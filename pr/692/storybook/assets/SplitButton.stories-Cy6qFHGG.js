import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ct as n,Et as r,Gt as i,It as a,Lt as o,Pt as s,U as c,Wt as l,rt as u}from"./iframe-FLpC4IdY.js";var d,f,p,m,h,g,_,v,y,b;e((()=>{d=l(),f=t(i()),n(),o(),p=s(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Form/Buttons`,component:u,decorators:[]},g=a.div`
`,_=(0,p.jsx)(`h1`,{children:`Main Action Modal`}),v=e=>{let[t,n]=(0,f.useState)(e),{createModal:i}=r(),a=m(`Main pressed, modal opened`),o=m(`日本語の場合はランダム pressed`),s=m(`Save Action pressed`),c=m(`Download pressed`),l=[{id:`a0`,text:`Main Action Open Modal`,icon:`Success`,onClickCallback:()=>{i({customComponent:_,padding:!0,width:`auto`}),a()}},{id:`a1`,text:`日本語の場合はランダム`,onClickCallback:o},{id:`a2`,text:`Save Action`,icon:`Analyse`,hasOnSelectLoading:!0,onClickCallback:s},{id:`a3`,text:`Download Action`,icon:`Download`,onClickCallback:c,disabled:!0}];return(0,f.useEffect)(()=>{n(e)},[e]),(0,p.jsx)(g,{children:(0,p.jsx)(u,{...t,buttonList:l})})},y=()=>{let e=(0,d.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,Custom:`custom`},`primary`),t=(0,d.boolean)(`Disabled`,!1);return(0,p.jsx)(c,{children:(0,p.jsx)(v,{mainButtonId:`a0`,design:e,size:(0,d.select)(`Size`,{Small:`small`,Normal:`normal`,Large:`large`},`normal`),disabled:t,buttonList:[]})})},y.__docgenInfo={description:``,methods:[],displayName:`_SplitButton`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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