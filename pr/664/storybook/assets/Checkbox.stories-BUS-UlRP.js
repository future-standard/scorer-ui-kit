import{i as e}from"./preload-helper-xPQekRTU.js";import{kt as t,p as n,vt as r,zt as i}from"./iframe-Bwz4qBV9.js";var a,o,s,c,l,u;e((()=>{a=i(),r(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Form/atoms`,component:n,decorators:[]},l=()=>{let e=(0,a.boolean)(`Disabled`,!1);return(0,o.jsx)(n,{checked:(0,a.boolean)(`Checked`,!1),disabled:e,onChange:s(`value-changed`)})},l.__docgenInfo={description:``,methods:[],displayName:`_Checkbox`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  // const indeterminate = boolean("Indeterminate", false);
  const disabled = boolean('Disabled', false);
  const checked = boolean('Checked', false);
  const onChange = action('value-changed');
  return <Checkbox {...{
    checked,
    disabled,
    onChange
  }} />;
}`,...l.parameters?.docs?.source}}},u=[`_Checkbox`]}))();export{l as _Checkbox,u as __namedExportsOrder,c as default};