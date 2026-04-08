import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,U as o,bt as s}from"./iframe-D4thBea3.js";import{n as c,r as l}from"./helpers-DihyOS9H.js";var u,d,f,p,m,h,g;e((()=>{a(),n(),u=i(),s(),l(),d=t(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p=r.div`
  margin: 100px;
`,m={title:`Pages/atoms`,component:o,decorators:[]},h=()=>{let e=Object.assign({None:null},c()),t=(0,u.text)(`Title`,`My Page Title`),n=(0,u.select)(`Icon`,e,`Link`),r=(0,u.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`},`mono`),i=(0,u.boolean)(`Area Title Bottom`,!1),a=(0,u.text)(`Area Title`,`Area Title`),s=(0,u.text)(`Area Href`,`#`),l=(0,u.boolean)(`Example with area on Click`,!1),m=f(`Custom onAreaClick was used`);return(0,d.jsx)(p,{children:(0,d.jsx)(o,{title:t,areaTitle:a,areaHref:s,areaTitleBottom:i,iconColor:r,icon:n||void 0,onAreaClick:l?m:void 0})})},h.__docgenInfo={description:``,methods:[],displayName:`_PageTitle`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const iconList = Object.assign({
    None: null
  }, generateIconList());
  const title = text("Title", "My Page Title");
  const icon = select("Icon", iconList, 'Link');
  const iconColor = select("Color", {
    Mono: "mono",
    Dimmed: "dimmed",
    Subtle: "subtle",
    Inverse: "inverse",
    Primary: "primary",
    Danger: "danger"
  }, "mono");
  const areaTitleBottom = boolean("Area Title Bottom", false);
  const areaTitle = text("Area Title", "Area Title");
  const areaHref = text("Area Href", "#");
  const optionalAreaOnclick = boolean('Example with area on Click', false);
  const customClick = action('Custom onAreaClick was used');
  return <Container><PageTitle {...{
      title,
      areaTitle,
      areaHref,
      areaTitleBottom,
      iconColor
    }} icon={icon || undefined} onAreaClick={optionalAreaOnclick ? customClick : undefined} /></Container>;
}`,...h.parameters?.docs?.source}}},g=[`_PageTitle`]}))();export{h as _PageTitle,g as __namedExportsOrder,m as default};