import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Pt as n,Rt as r,bt as i,rt as a}from"./iframe-C0e3YAX7.js";var o,s,c,l,u,d;e((()=>{r(),o=n(),i(),s=t(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Form/atoms`,component:a},u=()=>{let e=(0,o.text)(`Label Text`,`The Label`),t=(0,o.select)(`State`,{Default:`default`,Disabled:`disabled`,Locked:`locked`,Loading:`loading`,Failure:`failure`},`default`),n=(0,o.select)(`Left Theme`,{Off:`off`,On:`on`,Danger:`danger`},`off`),r=(0,o.select)(`Right Theme`,{Off:`off`,On:`on`,Danger:`danger`},`on`),i=(0,o.select)(`Checked`,{Undefined:void 0,True:!0,False:!1},void 0),l=(0,o.boolean)(`defaultChecked`,!0),u=c(`value-changed`);return(0,s.jsx)(a,{state:t,leftTheme:n,rightTheme:r,labelText:e,checked:i,defaultChecked:i===void 0?l:void 0,onChangeCallback:u})},u.__docgenInfo={description:``,methods:[],displayName:`_Switch`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d=[`_Switch`]}))();export{u as _Switch,d as __namedExportsOrder,l as default};