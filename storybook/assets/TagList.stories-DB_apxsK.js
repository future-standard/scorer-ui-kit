import{z as n,d as r,j as e,a as g}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const x={title:"Misc/Molecules",component:n,decorators:[]},c=g.div`
  font-family: ${a=>a.theme.fontFamily.data};
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 300px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`,l=[{label:"Shop A",icon:"MetaCategories"},{label:"Example",icon:"MetaTags",color:"primary"},{label:"Smart",icon:"MetaTags"}],t=()=>{const a=r.object("tagsConfig",l);return e.jsx(c,{children:e.jsx(n,{tagsConfig:a})})};t.__docgenInfo={description:"",methods:[],displayName:"_TagList"};var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const someTags = object("tagsConfig", defaultTags);
  return <Container>
      <TagList tagsConfig={someTags} />
    </Container>;
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const T=["_TagList"];export{t as _TagList,T as __namedExportsOrder,x as default};
