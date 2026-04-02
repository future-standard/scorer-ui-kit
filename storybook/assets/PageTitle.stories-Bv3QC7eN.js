import{x as r,d as e,j as t,a as C}from"./iframe-Dbt4m4Aq.js";import{g as x}from"./index-BfWBpCCZ.js";import"./preload-helper-C1FmrZbK.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,f=C.div`
  margin: 100px;
`,P={title:"Pages/atoms",component:r,decorators:[]},o=()=>{const s=Object.assign({None:null},x()),c=e.text("Title","My Page Title"),l=e.select("Icon",s,"Link"),m=e.select("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle",Inverse:"inverse",Primary:"primary",Danger:"danger"},"mono"),d=e.boolean("Area Title Bottom",!1),T=e.text("Area Title","Area Title"),u=e.text("Area Href","#"),p=e.boolean("Example with area on Click",!1),g=A("Custom onAreaClick was used");return t.jsx(f,{children:t.jsx(r,{title:c,areaTitle:T,areaHref:u,areaTitleBottom:d,iconColor:m,icon:l||void 0,onAreaClick:p?g:void 0})})};o.__docgenInfo={description:"",methods:[],displayName:"_PageTitle"};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["_PageTitle"];export{o as _PageTitle,b as __namedExportsOrder,P as default};
