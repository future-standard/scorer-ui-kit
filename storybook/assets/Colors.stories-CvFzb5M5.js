import{j as e,a as r}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const y={title:"Misc",decorators:[]},g=r.div`
  width: 80%;
  margin: 0 auto;
`,m=r.h2`
  font-family: var(--font-ui);
  color: var(--grey-8);
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
`,h=r.div`
  margin-bottom: 80px;
`,x=r.div`
  display: grid;
  grid-template-columns: repeat(12, calc(100%/12));
  column-gap: 4px;
  row-gap: 4px;
  text-align: center;
`,f=r.div`
  height: 96px;
  border-radius: 4px;

  ${({$color:a})=>a&&`
    background: var(${a});
  `};
`,w=r.div`
  position: absolute;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px 0 2px 0;
  background-color: var(--white-a10);
  color: var(--black-a10);
`,t=()=>{const a=["primary","secondary","grey","info","success","caution","warning","orange","red","green","black","white"],d=["1","2","3","4","5","6","7","8","9","10","11","12"],o=(n,p)=>d.map(u=>{const s=`--${n}-${p?"a":""}${u}`;return e.jsx(f,{$color:s,children:e.jsx(w,{children:s})})});return e.jsx(g,{children:a.map(n=>e.jsxs(h,{children:[e.jsx(m,{children:n}),e.jsxs(x,{children:[o(n),o(n,!0)]})]}))})};t.__docgenInfo={description:"",methods:[],displayName:"_Colors"};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const palette: string[] = ['primary', 'secondary', 'grey', 'info', 'success', 'caution', 'warning', 'orange', 'red', 'green', 'black', 'white'];
  const references: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const generatePalette = (name: string, alpha?: boolean) => {
    return references.map(iteration => {
      const $color = \`--\${name}-\${alpha ? 'a' : ''}\${iteration}\`;
      return <Swatch {...{
        $color
      }}>
          <SwatchName>{$color}</SwatchName>
        </Swatch>;
    });
  };
  return <Container>
    {palette.map(value => {
      return <ColorContainer>
        <Title>{value}</Title>
        <Grid>
          {generatePalette(value)}
          {generatePalette(value, true)}
        </Grid>
      </ColorContainer>;
    })}
  </Container>;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const $=["_Colors"];export{t as _Colors,$ as __namedExportsOrder,y as default};
