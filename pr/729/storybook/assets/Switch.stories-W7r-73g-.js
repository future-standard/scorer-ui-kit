import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Switch-qgTedwEQ.js";import{_ as i}from"./iframe-PEYaYO03.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{a=i(),n(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Form/atoms`,component:r},l=()=>{let e=(0,a.text)(`Label Text`,`The Label`),t=(0,a.select)(`State`,{Default:`default`,Disabled:`disabled`,Locked:`locked`,Loading:`loading`,Failure:`failure`},`default`),n=(0,a.select)(`Left Theme`,{Off:`off`,On:`on`,Danger:`danger`},`off`),i=(0,a.select)(`Right Theme`,{Off:`off`,On:`on`,Danger:`danger`},`on`),c=(0,a.select)(`Checked`,{Undefined:void 0,True:!0,False:!1},void 0),l=(0,a.boolean)(`defaultChecked`,!0),u=s(`value-changed`);return(0,o.jsx)(r,{state:t,leftTheme:n,rightTheme:i,labelText:e,checked:c,defaultChecked:c===void 0?l:void 0,onChangeCallback:u})},u=[`_Switch`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const labelText = text('Label Text', 'The Label');
  const state = select('State', {
    Default: 'default',
    Disabled: 'disabled',
    Locked: 'locked',
    Loading: 'loading',
    Failure: 'failure'
  }, 'default');
  const leftTheme = select('Left Theme', {
    Off: 'off',
    On: 'on',
    Danger: 'danger'
  }, 'off');
  const rightTheme = select('Right Theme', {
    Off: 'off',
    On: 'on',
    Danger: 'danger'
  }, 'on');
  const checked = select('Checked', {
    Undefined: undefined,
    True: true,
    False: false
  }, undefined);
  const defaultChecked = boolean('defaultChecked', true);
  const onChangeCallback = action('value-changed');
  return <Switch state={state} leftTheme={leftTheme} rightTheme={rightTheme} labelText={labelText} checked={checked} defaultChecked={checked === undefined ? defaultChecked : undefined} onChangeCallback={onChangeCallback} />;
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as _Switch,u as __namedExportsOrder,c as default};