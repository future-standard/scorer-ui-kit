import{j as o}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as n}from"./styled-components.browser.esm-CarAhzHj.js";import{k as r}from"./index.modern-CLl990BG.js";import{d as c}from"./index-C-6Xbh3D.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const u={title:"Misc/Molecules",component:r,decorators:[]},m=n.div`
  font-family: ${a=>a.theme.fontFamily.data};
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 300px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`,g=[{label:"Shop A",icon:"MetaCategories"},{label:"Example",icon:"MetaTags",color:"primary"},{label:"Smart",icon:"MetaTags"}],t=()=>{const a=c.object("tagsConfig",g);return o.jsx(m,{children:o.jsx(r,{tagsConfig:a})})};t.__docgenInfo={description:"",methods:[],displayName:"_TagList"};var e,s,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const someTags = object("tagsConfig", defaultTags);
  return <Container>
      <TagList tagsConfig={someTags} />
    </Container>;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["_TagList"];export{t as _TagList,h as __namedExportsOrder,u as default};
