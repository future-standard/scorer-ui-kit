import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Ct as n,Lt as r,Ot as i,Rt as a,bt as o,et as s,jt as c,kt as l,z as u}from"./iframe-CqsWnfTx.js";var d,f,p,m,h,g,_,v,y,b;t((()=>{d=r(),f=e(a()),o(),l(),p=i(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Form/Buttons`,component:s,decorators:[]},g=c.div`
`,_=(0,p.jsx)(`h1`,{children:`Main Action Modal`}),v=e=>{let[t,r]=(0,f.useState)(e),{createModal:i}=n(),a=m(`Main pressed, modal opened`),o=m(`日本語の場合はランダム pressed`),c=m(`Save Action pressed`),l=m(`Download pressed`),u=[{id:`a0`,text:`Main Action Open Modal`,icon:`Success`,onClickCallback:()=>{i({customComponent:_,padding:!0,width:`auto`}),a()}},{id:`a1`,text:`日本語の場合はランダム`,onClickCallback:o},{id:`a2`,text:`Save Action`,icon:`Analyse`,hasOnSelectLoading:!0,onClickCallback:c},{id:`a3`,text:`Download Action`,icon:`Download`,onClickCallback:l,disabled:!0}];return(0,f.useEffect)(()=>{r(e)},[e]),(0,p.jsx)(g,{children:(0,p.jsx)(s,{...t,buttonList:u})})},y=()=>{let e=(0,d.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,Custom:`custom`},`primary`),t=(0,d.boolean)(`Disabled`,!1);return(0,p.jsx)(u,{children:(0,p.jsx)(v,{mainButtonId:`a0`,design:e,size:(0,d.select)(`Size`,{Small:`small`,Normal:`normal`,Large:`large`},`normal`),disabled:t,buttonList:[]})})},y.__docgenInfo={description:``,methods:[],displayName:`_SplitButton`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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