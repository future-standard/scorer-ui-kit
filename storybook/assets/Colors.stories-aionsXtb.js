import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as r}from"./styled-components.browser.esm-D8a0uvnT.js";import"./index-Dh2lLoQQ.js";const $={title:"Misc",decorators:[]},g=r.div`
  width: 80%;
  margin: 0 auto;
`,u=r.h2`
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

  ${({$color:o})=>o&&`
    background: var(${o});
  `};
`,w=r.div`
  position: absolute;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px 0 2px 0;
  background-color: var(--white-a10);
  color: var(--black-a10);
`,t=()=>{const o=["primary","secondary","grey","info","success","caution","warning","orange","red","green","black","white"],d=["1","2","3","4","5","6","7","8","9","10","11","12"],a=(n,p)=>d.map(m=>{const i=`--${n}-${p?"a":""}${m}`;return e.jsx(f,{$color:i,children:e.jsx(w,{children:i})})});return e.jsx(g,{children:o.map(n=>e.jsxs(h,{children:[e.jsx(u,{children:n}),e.jsxs(x,{children:[a(n),a(n,!0)]})]}))})};t.__docgenInfo={description:"",methods:[],displayName:"_Colors"};var s,c,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const b=["_Colors"];export{t as _Colors,b as __namedExportsOrder,$ as default};
