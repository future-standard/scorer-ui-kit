import{n as e}from"./chunk-BneVvdWh.js";import{H as t,Lt as n,Ot as r,jt as i,kt as a,vt as o}from"./iframe-XcZ2CoMj.js";import{n as s,t as c}from"./helpers-B7ONJqAP.js";var l,u,d,f,p,m,h;e((()=>{l=n(),o(),a(),s(),u=r(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f=i.div`
  margin: 100px;
`,p={title:`Pages/atoms`,component:t,decorators:[]},m=()=>{let e=Object.assign({None:null},c()),n=(0,l.text)(`Title`,`My Page Title`),r=(0,l.select)(`Icon`,e,`Link`),i=(0,l.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`},`mono`),a=(0,l.boolean)(`Area Title Bottom`,!1),o=(0,l.text)(`Area Title`,`Area Title`),s=(0,l.text)(`Area Href`,`#`),p=(0,l.boolean)(`Example with area on Click`,!1),m=d(`Custom onAreaClick was used`);return(0,u.jsx)(f,{children:(0,u.jsx)(t,{title:n,areaTitle:o,areaHref:s,areaTitleBottom:a,iconColor:i,icon:r||void 0,onAreaClick:p?m:void 0})})},m.__docgenInfo={description:``,methods:[],displayName:`_PageTitle`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const iconList = Object.assign({
    None: null
  }, generateIconList());
  const title = text('Title', 'My Page Title');
  const icon = select('Icon', iconList, 'Link');
  const iconColor = select('Color', {
    Mono: 'mono',
    Dimmed: 'dimmed',
    Subtle: 'subtle',
    Inverse: 'inverse',
    Primary: 'primary',
    Danger: 'danger'
  }, 'mono');
  const areaTitleBottom = boolean('Area Title Bottom', false);
  const areaTitle = text('Area Title', 'Area Title');
  const areaHref = text('Area Href', '#');
  const optionalAreaOnclick = boolean('Example with area on Click', false);
  const customClick = action('Custom onAreaClick was used');
  return <Container>
      <PageTitle {...{
      title,
      areaTitle,
      areaHref,
      areaTitleBottom,
      iconColor
    }} icon={icon || undefined} onAreaClick={optionalAreaOnclick ? customClick : undefined} />
    </Container>;
}`,...m.parameters?.docs?.source}}},h=[`_PageTitle`]}))();export{m as _PageTitle,h as __namedExportsOrder,p as default};