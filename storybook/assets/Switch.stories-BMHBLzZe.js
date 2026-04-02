import{ac as d,d as e,j as u}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,k={title:"Form/atoms",component:d},t=()=>{const l=e.text("Label Text","The Label"),s=e.select("State",{Default:"default",Disabled:"disabled",Locked:"locked",Loading:"loading",Failure:"failure"},"default"),f=e.select("Left Theme",{Off:"off",On:"on",Danger:"danger"},"off"),r=e.select("Right Theme",{Off:"off",On:"on",Danger:"danger"},"on"),a=e.select("Checked",{Undefined:void 0,True:!0,False:!1},void 0),h=e.boolean("defaultChecked",!0),i=g("value-changed");return u.jsx(d,{state:s,leftTheme:f,rightTheme:r,labelText:l,checked:a,defaultChecked:a===void 0?h:void 0,onChangeCallback:i})};t.__docgenInfo={description:"",methods:[],displayName:"_Switch"};var n,o,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const labelText = text("Label Text", "The Label");
  const state = select("State", {
    Default: "default",
    Disabled: "disabled",
    Locked: "locked",
    Loading: "loading",
    Failure: "failure"
  }, "default");
  const leftTheme = select("Left Theme", {
    Off: "off",
    On: "on",
    Danger: "danger"
  }, "off");
  const rightTheme = select("Right Theme", {
    Off: "off",
    On: "on",
    Danger: "danger"
  }, "on");
  const checked = select('Checked', {
    Undefined: undefined,
    True: true,
    False: false
  }, undefined);
  const defaultChecked = boolean('defaultChecked', true);
  const onChangeCallback = action('value-changed');
  return <Switch state={state} leftTheme={leftTheme} rightTheme={rightTheme} labelText={labelText} checked={checked} defaultChecked={checked === undefined ? defaultChecked : undefined} onChangeCallback={onChangeCallback} />;
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const b=["_Switch"];export{t as _Switch,b as __namedExportsOrder,k as default};
