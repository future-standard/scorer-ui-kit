import{d as h,j as t,r as a,a as r}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const g={title:"Misc",decorators:[]},$=r.div`
  padding: 80px;
  background: var(--grey-2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--columnPadding, 16px);
  text-rendering: optimizeLegibility; 
`,i=r.div`
  font-family: ${({$font:o})=>o==="Lato"?"var(--font-data)":"var(--font-ui)"};
  font-weight: ${({$weight:o})=>o};
  font-style: ${({$italic:o})=>o?"italic":"normal"};
  color: var(--grey-12);

  > div {
    display: none;
  }
`,e=()=>{const o=h.select("Font",["Lato","Monorale","Noto Sans (JP)"],"Lato");return t.jsxs($,{children:[o==="Lato"?t.jsxs(a.Fragment,{children:[t.jsx(i,{$font:"Lato",$weight:100,children:"This is Lato Hairline"}),t.jsx(i,{$font:"Lato",$weight:100,$italic:!0,children:"This is Lato Hairline Italic"}),t.jsx(i,{$font:"Lato",$weight:200,children:"This is Lato ExtraLight"}),t.jsx(i,{$font:"Lato",$weight:200,$italic:!0,children:"This is Lato ExtraLight Italic"}),t.jsx(i,{$font:"Lato",$weight:300,children:"This is Lato Light"}),t.jsx(i,{$font:"Lato",$weight:300,$italic:!0,children:"This is Lato Light Italic"}),t.jsx(i,{$font:"Lato",$weight:"normal",children:"This is Lato Regular"}),t.jsx(i,{$font:"Lato",$weight:"normal",$italic:!0,children:"This is Lato Regular Italic"}),t.jsx(i,{$font:"Lato",$weight:500,children:"This is Lato Medium"}),t.jsx(i,{$font:"Lato",$weight:500,$italic:!0,children:"This is Lato Medium Italic"}),t.jsx(i,{$font:"Lato",$weight:600,children:"This is Lato SemiBold"}),t.jsx(i,{$font:"Lato",$weight:600,$italic:!0,children:"This is Lato SemiBold Italic"}),t.jsx(i,{$font:"Lato",$weight:"bold",children:"This is Lato Bold"}),t.jsx(i,{$font:"Lato",$weight:"bold",$italic:!0,children:"This is Lato Bold Italic"}),t.jsx(i,{$font:"Lato",$weight:800,children:"This is Lato ExtraBold"}),t.jsx(i,{$font:"Lato",$weight:800,$italic:!0,children:"This is Lato ExtraBold Italic"}),t.jsx(i,{$font:"Lato",$weight:900,children:"This is Lato Black"}),t.jsx(i,{$font:"Lato",$weight:900,$italic:!0,children:"This is Lato Black Italic"})]}):null,o==="Monorale"?t.jsxs(a.Fragment,{children:[t.jsx(i,{$font:"Monorale",$weight:100,children:"This is Monorale Thin"}),t.jsx(i,{$font:"Monorale",$weight:100,$italic:!0,children:"This is Monorale Thin Italic"}),t.jsx(i,{$font:"Monorale",$weight:200,children:"This is Monorale Extra Light"}),t.jsx(i,{$font:"Monorale",$weight:200,$italic:!0,children:"This is Monorale Extra Light Italic"}),t.jsx(i,{$font:"Monorale",$weight:300,children:"This is Monorale Light"}),t.jsx(i,{$font:"Monorale",$weight:300,$italic:!0,children:"This is Monorale Light Italic"}),t.jsx(i,{$font:"Monorale",$weight:400,children:"This is Monorale"}),t.jsx(i,{$font:"Monorale",$weight:400,$italic:!0,children:"This is Monorale Italic"}),t.jsx(i,{$font:"Monorale",$weight:500,children:"This is Monorale Medium"}),t.jsx(i,{$font:"Monorale",$weight:500,$italic:!0,children:"This is Monorale Medium Italic"}),t.jsx(i,{$font:"Monorale",$weight:600,children:"This is Monorale Semibold"}),t.jsx(i,{$font:"Monorale",$weight:600,$italic:!0,children:"This is Monorale Semibold Italic"}),t.jsx(i,{$font:"Monorale",$weight:"bold",children:"This is Monorale Bold"}),t.jsx(i,{$font:"Monorale",$weight:800,children:"This is Monorale Extra Bold"}),t.jsx(i,{$font:"Monorale",$weight:900,children:"This is Monorale Black"})]}):null,o==="Noto Sans (JP)"?t.jsx(a.Fragment,{children:"Pending."}):null]})};e.__docgenInfo={description:"",methods:[],displayName:"_FontSheet"};var n,l,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const font = select("Font", ['Lato', 'Monorale', 'Noto Sans (JP)'], 'Lato');
  return <Container>
    {font === 'Lato' ? <Fragment>
        <Item $font={'Lato'} $weight={100}>
          This is Lato Hairline
        </Item>

        <Item $font={'Lato'} $weight={100} $italic>
          This is Lato Hairline Italic
        </Item>

        <Item $font={'Lato'} $weight={200}>
          This is Lato ExtraLight
        </Item>

        <Item $font={'Lato'} $weight={200} $italic>
          This is Lato ExtraLight Italic
        </Item>

        <Item $font={'Lato'} $weight={300}>
          This is Lato Light
        </Item>

        <Item $font={'Lato'} $weight={300} $italic>
          This is Lato Light Italic
        </Item>

        <Item $font={'Lato'} $weight={'normal'}>
          This is Lato Regular
        </Item>

        <Item $font={'Lato'} $weight={'normal'} $italic>
          This is Lato Regular Italic
        </Item>

        <Item $font={'Lato'} $weight={500}>
          This is Lato Medium
        </Item>

        <Item $font={'Lato'} $weight={500} $italic>
          This is Lato Medium Italic
        </Item>

        <Item $font={'Lato'} $weight={600}>
          This is Lato SemiBold
        </Item>

        <Item $font={'Lato'} $weight={600} $italic>
          This is Lato SemiBold Italic
        </Item>
        
        <Item $font={'Lato'} $weight={'bold'}>
          This is Lato Bold
        </Item>

        <Item $font={'Lato'} $weight={'bold'} $italic>
          This is Lato Bold Italic
        </Item>
        
        <Item $font={'Lato'} $weight={800}>
          This is Lato ExtraBold
        </Item>

        <Item $font={'Lato'} $weight={800} $italic>
          This is Lato ExtraBold Italic
        </Item>

        <Item $font={'Lato'} $weight={900}>
          This is Lato Black
        </Item>

        <Item $font={'Lato'} $weight={900} $italic>
          This is Lato Black Italic
        </Item>
      </Fragment> : null}

    {font === 'Monorale' ? <Fragment>
        <Item $font={'Monorale'} $weight={100}>
          This is Monorale Thin
        </Item>

        <Item $font={'Monorale'} $weight={100} $italic>
          This is Monorale Thin Italic
        </Item>

        <Item $font={'Monorale'} $weight={200}>
          This is Monorale Extra Light
        </Item>

        <Item $font={'Monorale'} $weight={200} $italic>
          This is Monorale Extra Light Italic
        </Item>

        <Item $font={'Monorale'} $weight={300}>
          This is Monorale Light
        </Item>

        <Item $font={'Monorale'} $weight={300} $italic>
          This is Monorale Light Italic
        </Item>

        <Item $font={'Monorale'} $weight={400}>
          This is Monorale 
        </Item>

        <Item $font={'Monorale'} $weight={400} $italic>
          This is Monorale Italic
        </Item>

        <Item $font={'Monorale'} $weight={500}>
          This is Monorale Medium
        </Item>

        <Item $font={'Monorale'} $weight={500} $italic>
          This is Monorale Medium Italic
        </Item>

        <Item $font={'Monorale'} $weight={600}>
          This is Monorale Semibold
        </Item>

        <Item $font={'Monorale'} $weight={600} $italic>
          This is Monorale Semibold Italic
        </Item>

        <Item $font={'Monorale'} $weight={'bold'}>
          This is Monorale Bold
        </Item>

        <Item $font={'Monorale'} $weight={800}>
          This is Monorale Extra Bold
        </Item>

        <Item $font={'Monorale'} $weight={900}>
          This is Monorale Black
        </Item> 
      </Fragment> : null}

    {font === 'Noto Sans (JP)' ? <Fragment>
        Pending.
      </Fragment> : null}
    
  </Container>;
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const d=["_FontSheet"];export{e as _FontSheet,d as __namedExportsOrder,g as default};
