import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Rt as i}from"./iframe-BHdSP_o9.js";var a,o,s,c,l,u,d,f,p,m;e((()=>{i(),n(),a=t(),o={title:`Misc`,decorators:[]},s=r.div`
  width: 80%;
  margin: 0 auto;
`,c=r.h2`
  font-family: var(--font-ui);
  color: var(--grey-8);
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
`,l=r.div`
  margin-bottom: 80px;
`,u=r.div`
  display: grid;
  grid-template-columns: repeat(12, calc(100%/12));
  column-gap: 4px;
  row-gap: 4px;
  text-align: center;
`,d=r.div`
  height: 96px;
  border-radius: 4px;

  ${({$color:e})=>e&&`
    background: var(${e});
  `};
`,f=r.div`
  position: absolute;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px 0 2px 0;
  background-color: var(--white-a10);
  color: var(--black-a10);
`,p=()=>{let e=[`primary`,`secondary`,`grey`,`info`,`success`,`caution`,`warning`,`orange`,`red`,`green`,`black`,`white`],t=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`],n=(e,n)=>t.map(t=>{let r=`--${e}-${n?`a`:``}${t}`;return(0,a.jsx)(d,{$color:r,children:(0,a.jsx)(f,{children:r})})});return(0,a.jsx)(s,{children:e.map(e=>(0,a.jsxs)(l,{children:[(0,a.jsx)(c,{children:e}),(0,a.jsxs)(u,{children:[n(e),n(e,!0)]})]}))})},p.__docgenInfo={description:``,methods:[],displayName:`_Colors`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`_Colors`]}))();export{p as _Colors,m as __namedExportsOrder,o as default};