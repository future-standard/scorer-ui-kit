import{n as e}from"./chunk-BneVvdWh.js";import{Ot as t,jt as n,kt as r}from"./iframe-DiPaNbrM.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{r(),i=t(),a={title:`Misc`,decorators:[]},o=n.div`
  width: 80%;
  margin: 0 auto;
`,s=n.h2`
  font-family: var(--font-ui);
  color: var(--grey-8);
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
`,c=n.div`
  margin-bottom: 80px;
`,l=n.div`
  display: grid;
  grid-template-columns: repeat(12, calc(100%/12));
  column-gap: 4px;
  row-gap: 4px;
  text-align: center;
`,u=n.div`
  height: 96px;
  border-radius: 4px;

  ${({$color:e})=>e&&`
    background: var(${e});
  `};
`,d=n.div`
  position: absolute;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px 0 2px 0;
  background-color: var(--white-a10);
  color: var(--black-a10);
`,f=()=>{let e=[`primary`,`secondary`,`grey`,`info`,`success`,`caution`,`warning`,`orange`,`red`,`green`,`black`,`white`],t=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`],n=(e,n)=>t.map(t=>{let r=`--${e}-${n?`a`:``}${t}`;return(0,i.jsx)(u,{$color:r,children:(0,i.jsx)(d,{children:r})},r)});return(0,i.jsx)(o,{children:e.map(e=>(0,i.jsxs)(c,{children:[(0,i.jsx)(s,{children:e}),(0,i.jsxs)(l,{children:[n(e),n(e,!0)]})]},e))})},f.__docgenInfo={description:``,methods:[],displayName:`_Colors`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const palette: string[] = ['primary', 'secondary', 'grey', 'info', 'success', 'caution', 'warning', 'orange', 'red', 'green', 'black', 'white'];
  const references: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const generatePalette = (name: string, alpha?: boolean) => {
    return references.map(iteration => {
      const $color = \`--\${name}-\${alpha ? 'a' : ''}\${iteration}\`;
      return <Swatch key={$color} {...{
        $color
      }}>
          <SwatchName>{$color}</SwatchName>
        </Swatch>;
    });
  };
  return <Container>
      {palette.map(value => {
      return <ColorContainer key={value}>
            <Title>{value}</Title>
            <Grid>
              {generatePalette(value)}
              {generatePalette(value, true)}
            </Grid>
          </ColorContainer>;
    })}
    </Container>;
}`,...f.parameters?.docs?.source}}},p=[`_Colors`]}))();export{f as _Colors,p as __namedExportsOrder,a as default};