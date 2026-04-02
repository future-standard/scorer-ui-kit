import{j as o}from"./emotion-unitless.esm-y1ruXoeO.js";import{d as e}from"./index-C-6Xbh3D.js";import{c as C}from"./styled-components.browser.esm-CarAhzHj.js";import{al as s}from"./index.modern-CMonYql-.js";import{g as k}from"./index-DQYbOqls.js";import{a as x}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const E={title:"Misc/atoms",component:s,decorators:[]},h=C.div``,t=()=>{const c=k(),r=e.text("Label","Example"),l=e.boolean("No Border",!1),g=e.select("Icon",c,"MetaTags"),m=e.number("Size",14),d=e.select("Tag Size",{Compact:"compact",Default:"default",Undefined:void 0},"default"),u=e.select("Weight",{Light:"light",Regular:"regular",Heavy:"heavy"},"regular"),p=e.text("To Link","/"),T=e.boolean("Use onTagClick",!1),f=x("onTagClick was triggered");return o.jsx(h,{children:o.jsx(s,{label:r,icon:g,size:m,weight:u,linkTo:p,noBorder:l,tagSize:d,onTagClick:T?f:void 0})})};t.__docgenInfo={description:"",methods:[],displayName:"_Tag"};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const tagText = text("Label", "Example");
  const noBorder = boolean('No Border', false);
  const iconName = select("Icon", iconList, 'MetaTags');
  const size = number('Size', 14);
  const tagSize = select('Tag Size', {
    Compact: "compact",
    Default: "default",
    Undefined: undefined
  }, 'default');
  const tagWeight = select("Weight", {
    Light: "light",
    Regular: "regular",
    Heavy: "heavy"
  }, "regular");
  const toValue = text('To Link', '/');
  const useOnClick = boolean('Use onTagClick', false);
  const customClick = action('onTagClick was triggered');
  return <Container>
      <Tag label={tagText} icon={iconName} size={size} weight={tagWeight} linkTo={toValue} noBorder={noBorder} tagSize={tagSize} onTagClick={useOnClick ? customClick : undefined} />
    </Container>;
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const I=["_Tag"];export{t as _Tag,I as __namedExportsOrder,E as default};
