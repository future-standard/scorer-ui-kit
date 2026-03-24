import{j as o}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as n}from"./styled-components.browser.esm-D8a0uvnT.js";import{k as r}from"./index.modern-BCxVMgPd.js";import{d as m}from"./index-BtgrC99a.js";import"./index-Dh2lLoQQ.js";import"./index-Dz_aA26r.js";import"./iframe-CQb0CZlC.js";const h={title:"Misc/Molecules",component:r,decorators:[]},c=n.div`
  font-family: ${a=>a.theme.fontFamily.data};
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 300px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`,g=[{label:"Shop A",icon:"MetaCategories"},{label:"Example",icon:"MetaTags",color:"primary"},{label:"Smart",icon:"MetaTags"}],t=()=>{const a=m.object("tagsConfig",g);return o.jsx(c,{children:o.jsx(r,{tagsConfig:a})})};t.__docgenInfo={description:"",methods:[],displayName:"_TagList"};var e,s,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const someTags = object("tagsConfig", defaultTags);
  return <Container>
      <TagList tagsConfig={someTags} />
    </Container>;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const C=["_TagList"];export{t as _TagList,C as __namedExportsOrder,h as default};
