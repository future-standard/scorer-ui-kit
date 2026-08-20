import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,It as n,Lt as r,Mt as i,Nt as a,Pt as o,Wt as s,kt as c}from"./iframe-BMz55O8f.js";import{n as l,t as u}from"./helpers-D-m195aM.js";var d,f,p,m,h,g,_;e((()=>{a(),d=s(),t(),r(),l(),f=o(),p={title:`Misc`,component:c,decorators:[]},m=n.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`,h=n.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`,g=()=>{let e=u(),t=(0,d.boolean)(`Show All`,!1),n=(0,d.boolean)(`For SVG Usage`,!1),r=(0,d.select)(`Name`,e,Object.keys(e)[0]),a=(0,d.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`},`mono`),o=(0,d.select)(`Weight`,{Light:`light`,Regular:`regular`,Heavy:`heavy`,Strong:`strong`},`regular`),s=(0,d.number)(`Size`,24);return(0,f.jsx)(m,{children:t?(0,f.jsx)(h,{children:(e=>Object.keys(i).map(t=>(0,f.jsx)(`div`,{title:t,children:(0,f.jsx)(c,{icon:t,...e})},t)))({color:a,weight:o,size:s,forSvgUsage:n})}):(0,f.jsx)(c,{icon:r,weight:o,color:a,size:s,forSvgUsage:n})})},g.__docgenInfo={description:``,methods:[],displayName:`_Icons`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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