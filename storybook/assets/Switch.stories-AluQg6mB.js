import{j as u}from"./emotion-unitless.esm-y1ruXoeO.js";import{a as m}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as e}from"./index-C-6Xbh3D.js";import{$ as c}from"./index.modern-B3hCc7YS.js";import"./v4-CtRu48qb.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const L={title:"Form/atoms",component:c},t=()=>{const l=e.text("Label Text","The Label"),s=e.select("State",{Default:"default",Disabled:"disabled",Locked:"locked",Loading:"loading",Failure:"failure"},"default"),r=e.select("Left Theme",{Off:"off",On:"on",Danger:"danger"},"off"),f=e.select("Right Theme",{Off:"off",On:"on",Danger:"danger"},"on"),a=e.select("Checked",{Undefined:void 0,True:!0,False:!1},void 0),i=e.boolean("defaultChecked",!0),h=m("value-changed");return u.jsx(c,{state:s,leftTheme:r,rightTheme:f,labelText:l,checked:a,defaultChecked:a===void 0?i:void 0,onChangeCallback:h})};t.__docgenInfo={description:"",methods:[],displayName:"_Switch"};var o,n,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const S=["_Switch"];export{t as _Switch,S as __namedExportsOrder,L as default};
