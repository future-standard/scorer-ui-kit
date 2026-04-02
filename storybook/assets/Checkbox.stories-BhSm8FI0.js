import{Z as t,d as o,j as l}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Form/atoms",component:t,decorators:[]},e=()=>{const c=o.boolean("Disabled",!1),r=o.boolean("Checked",!1),d=i("value-changed");return l.jsx(t,{checked:r,disabled:c,onChange:d})};e.__docgenInfo={description:"",methods:[],displayName:"_Checkbox"};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  // const indeterminate = boolean("Indeterminate", false);
  const disabled = boolean("Disabled", false);
  const checked = boolean("Checked", false);
  const onChange = action('value-changed');
  return <Checkbox {...{
    checked,
    disabled,
    onChange
  }} />;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const p=["_Checkbox"];export{e as _Checkbox,p as __namedExportsOrder,m as default};
