import{Z as n,d as o,j as i}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,p={title:"Form/atoms",component:n,decorators:[]},e=()=>{const c=o.boolean("Disabled",!1),r=o.boolean("Checked",!1),d=l("value-changed");return i.jsx(n,{checked:r,disabled:c,onChange:d})};e.__docgenInfo={description:"",methods:[],displayName:"_Checkbox"};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  // const indeterminate = boolean("Indeterminate", false);
  const disabled = boolean("Disabled", false);
  const checked = boolean("Checked", false);
  const onChange = action('value-changed');
  return <Checkbox {...{
    checked,
    disabled,
    onChange
  }} />;
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const _=["_Checkbox"];export{e as _Checkbox,_ as __namedExportsOrder,p as default};
