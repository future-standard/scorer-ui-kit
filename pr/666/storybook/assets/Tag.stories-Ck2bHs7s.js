import{i as e}from"./preload-helper-xPQekRTU.js";import{Mt as t,jt as n,kt as r,lt as i,vt as a,zt as o}from"./iframe-C59WqszT.js";import{n as s,t as c}from"./helpers-CwEyVb6O.js";var l,u,d,f,p,m,h;e((()=>{l=o(),a(),t(),s(),u=r(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Misc/atoms`,component:i,decorators:[]},p=n.div``,m=()=>{let e=c(),t=(0,l.text)(`Label`,`Example`),n=(0,l.boolean)(`No Border`,!1),r=(0,l.select)(`Icon`,e,`MetaTags`),a=(0,l.number)(`Size`,14),o=(0,l.select)(`Tag Size`,{Compact:`compact`,Default:`default`,Undefined:void 0},`default`),s=(0,l.select)(`Weight`,{Light:`light`,Regular:`regular`,Heavy:`heavy`},`regular`),f=(0,l.text)(`To Link`,`/`),m=(0,l.boolean)(`Use onTagClick`,!1),h=d(`onTagClick was triggered`);return(0,u.jsx)(p,{children:(0,u.jsx)(i,{label:t,icon:r,size:a,weight:s,linkTo:f,noBorder:n,tagSize:o,onTagClick:m?h:void 0})})},m.__docgenInfo={description:``,methods:[],displayName:`_Tag`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const tagText = text('Label', 'Example');
  const noBorder = boolean('No Border', false);
  const iconName = select('Icon', iconList, 'MetaTags');
  const size = number('Size', 14);
  const tagSize = select('Tag Size', {
    Compact: 'compact',
    Default: 'default',
    Undefined: undefined
  }, 'default');
  const tagWeight = select('Weight', {
    Light: 'light',
    Regular: 'regular',
    Heavy: 'heavy'
  }, 'regular');
  const toValue = text('To Link', '/');
  const useOnClick = boolean('Use onTagClick', false);
  const customClick = action('onTagClick was triggered');
  return <Container>
      <Tag label={tagText} icon={iconName} size={size} weight={tagWeight} linkTo={toValue} noBorder={noBorder} tagSize={tagSize} onTagClick={useOnClick ? customClick : undefined} />
    </Container>;
}`,...m.parameters?.docs?.source}}},h=[`_Tag`]}))();export{m as _Tag,h as __namedExportsOrder,f as default};