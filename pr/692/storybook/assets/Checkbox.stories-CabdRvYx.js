import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,Pt as n,Wt as r,p as i}from"./iframe-FLpC4IdY.js";var a,o,s,c,l,u;e((()=>{a=r(),t(),o=n(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Form/atoms`,component:i,decorators:[]},l=()=>{let e=(0,a.boolean)(`Disabled`,!1);return(0,o.jsx)(i,{checked:(0,a.boolean)(`Checked`,!1),disabled:e,onChange:s(`value-changed`)})},l.__docgenInfo={description:``,methods:[],displayName:`_Checkbox`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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