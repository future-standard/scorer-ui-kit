import{j as n}from"./emotion-unitless.esm-y1ruXoeO.js";import{a as e}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as i}from"./index-C-6Xbh3D.js";import{r}from"./index-DnkWte70.js";import{E as m,c as C,a as D}from"./index.modern-CLl990BG.js";import{c as M}from"./styled-components.browser.esm-CarAhzHj.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const L={title:"Form/Buttons",component:m,decorators:[]},y=M.div`
`,f=n.jsx("h1",{children:"Main Action Modal"}),h=t=>{const[a,s]=r.useState(t),{createModal:p}=D(),u=e("Main pressed, modal opened"),b=e("日本語の場合はランダム pressed"),S=e("Save Action pressed"),g=e("Download pressed"),x=[{id:"a0",text:"Main Action Open Modal",icon:"Success",onClickCallback:()=>{p({customComponent:f,padding:!0,width:"auto"}),u()}},{id:"a1",text:"日本語の場合はランダム",onClickCallback:b},{id:"a2",text:"Save Action",icon:"Analyse",hasOnSelectLoading:!0,onClickCallback:S},{id:"a3",text:"Download Action",icon:"Download",onClickCallback:g,disabled:!0}];return r.useEffect(()=>{s(t)},[t]),n.jsx(y,{children:n.jsx(m,{...a,buttonList:x})})},o=()=>{const t=i.select("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger",Custom:"custom"},"primary"),a=i.boolean("Disabled",!1),s=i.select("Size",{Small:"small",Normal:"normal",Large:"large"},"normal");return n.jsx(C,{children:n.jsx(h,{mainButtonId:"a0",design:t,size:s,disabled:a,buttonList:[]})})};o.__docgenInfo={description:"",methods:[],displayName:"_SplitButton"};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const buttonDesign = select("Design", {
    Primary: "primary",
    Secondary: "secondary",
    Danger: "danger",
    Custom: "custom"
  }, "primary");
  const buttonDisabled = boolean("Disabled", false);
  const buttonSize = select("Size", {
    Small: "small",
    Normal: "normal",
    Large: "large"
  }, "normal");
  return <ModalProvider>
      <SplitExampleWithModal mainButtonId={"a0"} design={buttonDesign} size={buttonSize} disabled={buttonDisabled} buttonList={[]} // this is replaced with data in the SplitExample component
    />
    </ModalProvider>;
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["_SplitButton"];export{o as _SplitButton,w as __namedExportsOrder,L as default};
