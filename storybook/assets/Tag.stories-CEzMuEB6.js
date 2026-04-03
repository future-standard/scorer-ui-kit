import{am as i,d as e,j as o,a as C}from"./iframe-B-FWgcWl.js";import{g as k}from"./index-K08NWMu6.js";import"./preload-helper-C1FmrZbK.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,S={title:"Misc/atoms",component:i,decorators:[]},h=C.div``,t=()=>{const c=k(),r=e.text("Label","Example"),l=e.boolean("No Border",!1),g=e.select("Icon",c,"MetaTags"),d=e.number("Size",14),u=e.select("Tag Size",{Compact:"compact",Default:"default",Undefined:void 0},"default"),m=e.select("Weight",{Light:"light",Regular:"regular",Heavy:"heavy"},"regular"),T=e.text("To Link","/"),p=e.boolean("Use onTagClick",!1),f=x("onTagClick was triggered");return o.jsx(h,{children:o.jsx(i,{label:r,icon:g,size:d,weight:m,linkTo:T,noBorder:l,tagSize:u,onTagClick:p?f:void 0})})};t.__docgenInfo={description:"",methods:[],displayName:"_Tag"};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["_Tag"];export{t as _Tag,b as __namedExportsOrder,S as default};
