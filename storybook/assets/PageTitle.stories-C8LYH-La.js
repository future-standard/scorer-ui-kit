import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as f}from"./styled-components.browser.esm-D8a0uvnT.js";import{d as e}from"./index-BtgrC99a.js";import{h as r}from"./index.modern-BCxVMgPd.js";import{g as C}from"./index-CTv9zpMR.js";import{a as x}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-Dh2lLoQQ.js";import"./iframe-CQb0CZlC.js";import"./index-Dz_aA26r.js";import"./v4-CtRu48qb.js";const A=f.div`
  margin: 100px;
`,h={title:"Pages/atoms",component:r,decorators:[]},o=()=>{const s=Object.assign({None:null},C()),c=e.text("Title","My Page Title"),l=e.select("Icon",s,"Link"),m=e.select("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle",Inverse:"inverse",Primary:"primary",Danger:"danger"},"mono"),d=e.boolean("Area Title Bottom",!1),p=e.text("Area Title","Area Title"),u=e.text("Area Href","#"),T=e.boolean("Example with area on Click",!1),g=x("Custom onAreaClick was used");return t.jsx(A,{children:t.jsx(r,{title:c,areaTitle:p,areaHref:u,areaTitleBottom:d,iconColor:m,icon:l||void 0,onAreaClick:T?g:void 0})})};o.__docgenInfo={description:"",methods:[],displayName:"_PageTitle"};var a,i,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const B=["_PageTitle"];export{o as _PageTitle,B as __namedExportsOrder,h as default};
