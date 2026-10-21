import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,r as a,t as o}from"./useModal-d90x0uc7.js";import{n as s,t as c}from"./SplitButton-CczqK5bo.js";import{_ as l,a as u,o as d}from"./iframe-Cw1eIbNi.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{f=l(),p=t(),r(),s(),o(),d(),m=n(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`Form/Buttons`,component:c,decorators:[]},_=u.div`
`,v=(0,m.jsx)(`h1`,{children:`Main Action Modal`}),y=e=>{let[t,n]=(0,p.useState)(e),{createModal:r}=i(),a=h(`Main pressed, modal opened`),o=h(`日本語の場合はランダム pressed`),s=h(`Save Action pressed`),l=h(`Download pressed`),u=[{id:`a0`,text:`Main Action Open Modal`,icon:`Success`,onClickCallback:()=>{r({customComponent:v,padding:!0,width:`auto`}),a()}},{id:`a1`,text:`日本語の場合はランダム`,onClickCallback:o},{id:`a2`,text:`Save Action`,icon:`Analyse`,hasOnSelectLoading:!0,onClickCallback:s},{id:`a3`,text:`Download Action`,icon:`Download`,onClickCallback:l,disabled:!0}];return(0,p.useEffect)(()=>{n(e)},[e]),(0,m.jsx)(_,{children:(0,m.jsx)(c,{...t,buttonList:u})})},b=()=>{let e=(0,f.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,Custom:`custom`},`primary`),t=(0,f.boolean)(`Disabled`,!1),n=(0,f.select)(`Size`,{Small:`small`,Normal:`normal`,Large:`large`},`normal`);return(0,m.jsx)(a,{children:(0,m.jsx)(y,{mainButtonId:`a0`,design:e,size:n,disabled:t,buttonList:[]})})},x=[`_SplitButton`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as _SplitButton,x as __namedExportsOrder,g as default};