import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,bt as o,dt as s}from"./iframe-Bq-bFTg_.js";import{n as c,r as l}from"./helpers-CmedATVk.js";var u,d,f,p,m,h,g;e((()=>{a(),u=i(),n(),o(),l(),d=t(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Misc/atoms`,component:s,decorators:[]},m=r.div``,h=()=>{let e=c(),t=(0,u.text)(`Label`,`Example`),n=(0,u.boolean)(`No Border`,!1),r=(0,u.select)(`Icon`,e,`MetaTags`),i=(0,u.number)(`Size`,14),a=(0,u.select)(`Tag Size`,{Compact:`compact`,Default:`default`,Undefined:void 0},`default`),o=(0,u.select)(`Weight`,{Light:`light`,Regular:`regular`,Heavy:`heavy`},`regular`),l=(0,u.text)(`To Link`,`/`),p=(0,u.boolean)(`Use onTagClick`,!1),h=f(`onTagClick was triggered`);return(0,d.jsx)(m,{children:(0,d.jsx)(s,{label:t,icon:r,size:i,weight:o,linkTo:l,noBorder:n,tagSize:a,onTagClick:p?h:void 0})})},h.__docgenInfo={description:``,methods:[],displayName:`_Tag`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g=[`_Tag`]}))();export{h as _Tag,g as __namedExportsOrder,p as default};