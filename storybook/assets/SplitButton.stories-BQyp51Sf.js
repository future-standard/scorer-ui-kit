import{Y as u,d as i,j as o,n as C,r as l,k as D,a as M}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,E={title:"Form/Buttons",component:u,decorators:[]},k=M.div`
`,y=o.jsx("h1",{children:"Main Action Modal"}),_=t=>{const[a,s]=l.useState(t),{createModal:m}=D(),p=e("Main pressed, modal opened"),b=e("日本語の場合はランダム pressed"),S=e("Save Action pressed"),g=e("Download pressed"),x=[{id:"a0",text:"Main Action Open Modal",icon:"Success",onClickCallback:()=>{m({customComponent:y,padding:!0,width:"auto"}),p()}},{id:"a1",text:"日本語の場合はランダム",onClickCallback:b},{id:"a2",text:"Save Action",icon:"Analyse",hasOnSelectLoading:!0,onClickCallback:S},{id:"a3",text:"Download Action",icon:"Download",onClickCallback:g,disabled:!0}];return l.useEffect(()=>{s(t)},[t]),o.jsx(k,{children:o.jsx(u,{...a,buttonList:x})})},n=()=>{const t=i.select("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger",Custom:"custom"},"primary"),a=i.boolean("Disabled",!1),s=i.select("Size",{Small:"small",Normal:"normal",Large:"large"},"normal");return o.jsx(C,{children:o.jsx(_,{mainButtonId:"a0",design:t,size:s,disabled:a,buttonList:[]})})};n.__docgenInfo={description:"",methods:[],displayName:"_SplitButton"};var r,c,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const O=["_SplitButton"];export{n as _SplitButton,O as __namedExportsOrder,E as default};
