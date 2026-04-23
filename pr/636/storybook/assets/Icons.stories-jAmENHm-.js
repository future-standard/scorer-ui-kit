import{n as e}from"./chunk-BneVvdWh.js";import{Dt as t,Et as n,Lt as r,M as i,Ot as a,bt as o,jt as s,kt as c}from"./iframe-DwiLRrks.js";import{n as l,t as u}from"./helpers-B7vqI1hH.js";var d,f,p,m,h,g,_;e((()=>{t(),d=r(),o(),c(),l(),f=a(),p={title:`Misc`,component:i,decorators:[]},m=s.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`,h=s.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`,g=()=>{let e=u(),t=(0,d.boolean)(`Show All`,!1),r=(0,d.boolean)(`For SVG Usage`,!1),a=(0,d.select)(`Name`,e,Object.keys(e)[0]),o=(0,d.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`},`mono`),s=(0,d.select)(`Weight`,{Light:`light`,Regular:`regular`,Heavy:`heavy`,Strong:`strong`},`regular`),c=(0,d.number)(`Size`,24);return(0,f.jsx)(m,{children:t?(0,f.jsx)(h,{children:(e=>Object.keys(n).map(t=>(0,f.jsx)(`div`,{title:t,children:(0,f.jsx)(i,{icon:t,...e})},t)))({color:o,weight:s,size:c,forSvgUsage:r})}):(0,f.jsx)(i,{icon:a,weight:s,color:o,size:c,forSvgUsage:r})})},g.__docgenInfo={description:``,methods:[],displayName:`_Icons`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const showAll = boolean('Show All', false);
  const forSvgUsage = boolean('For SVG Usage', false);
  const icon = select('Name', iconList, Object.keys(iconList)[0]);
  const color = select('Color', {
    Mono: 'mono',
    Dimmed: 'dimmed',
    Subtle: 'subtle',
    Inverse: 'inverse',
    Primary: 'primary',
    Danger: 'danger'
  }, 'mono');
  const weight = select('Weight', {
    Light: 'light',
    Regular: 'regular',
    Heavy: 'heavy',
    Strong: 'strong'
  }, 'regular');
  const size = number('Size', 24);

  /**
   * Generate a grid of all the icons for easy browsing and hovering to find names.
   */
  const generateIconGrid = (props: {
    color: 'mono' | 'dimmed' | 'subtle' | 'inverse' | 'primary' | 'danger';
    weight: 'regular' | 'light' | 'heavy' | 'strong';
    size: number;
  }) => {
    return Object.keys(IconSVGs).map(iconName => <div title={iconName} key={iconName}>
        <Icon icon={iconName} {...props}></Icon>
      </div>);
  };
  return <Container>
      {showAll ? <Grid>{generateIconGrid({
        ...{
          color,
          weight,
          size,
          forSvgUsage
        }
      })}</Grid> : <Icon {...{
      icon,
      weight,
      color,
      size,
      forSvgUsage
    }} />}
    </Container>;
}`,...g.parameters?.docs?.source}}},_=[`_Icons`]}))();export{g as _Icons,_ as __namedExportsOrder,p as default};