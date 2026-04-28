import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Q as i,R as a,Rt as o,jt as s,kt as c,vt as l,xt as u}from"./iframe-DxcqKzfJ.js";var d,f,p,m,h,g,_,v,y,b;t((()=>{d=n(),f=e(o()),l(),c(),p=r(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Form/Buttons`,component:i,decorators:[]},g=s.div`
`,_=(0,p.jsx)(`h1`,{children:`Main Action Modal`}),v=e=>{let[t,n]=(0,f.useState)(e),{createModal:r}=u(),a=m(`Main pressed, modal opened`),o=m(`日本語の場合はランダム pressed`),s=m(`Save Action pressed`),c=m(`Download pressed`),l=[{id:`a0`,text:`Main Action Open Modal`,icon:`Success`,onClickCallback:()=>{r({customComponent:_,padding:!0,width:`auto`}),a()}},{id:`a1`,text:`日本語の場合はランダム`,onClickCallback:o},{id:`a2`,text:`Save Action`,icon:`Analyse`,hasOnSelectLoading:!0,onClickCallback:s},{id:`a3`,text:`Download Action`,icon:`Download`,onClickCallback:c,disabled:!0}];return(0,f.useEffect)(()=>{n(e)},[e]),(0,p.jsx)(g,{children:(0,p.jsx)(i,{...t,buttonList:l})})},y=()=>{let e=(0,d.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,Custom:`custom`},`primary`),t=(0,d.boolean)(`Disabled`,!1);return(0,p.jsx)(a,{children:(0,p.jsx)(v,{mainButtonId:`a0`,design:e,size:(0,d.select)(`Size`,{Small:`small`,Normal:`normal`,Large:`large`},`normal`),disabled:t,buttonList:[]})})},y.__docgenInfo={description:``,methods:[],displayName:`_SplitButton`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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