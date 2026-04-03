import{z as n,d as r,j as e,a as g}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const m={title:"Misc/Molecules",component:n,decorators:[]},c=g.div`
  font-family: ${t=>t.theme.fontFamily.data};
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 300px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`,l=[{label:"Shop A",icon:"MetaCategories"},{label:"Example",icon:"MetaTags",color:"primary"},{label:"Smart",icon:"MetaTags"}],a=()=>{const t=r.object("tagsConfig",l);return e.jsx(c,{children:e.jsx(n,{tagsConfig:t})})};a.__docgenInfo={description:"",methods:[],displayName:"_TagList"};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const someTags = object("tagsConfig", defaultTags);
  return <Container>
      <TagList tagsConfig={someTags} />
    </Container>;
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const x=["_TagList"];export{a as _TagList,x as __namedExportsOrder,m as default};
