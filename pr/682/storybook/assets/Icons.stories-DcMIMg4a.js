import{i as e}from"./preload-helper-xPQekRTU.js";import{Ft as t,It as n,Mt as r,Nt as i,Ot as a,St as o,Ut as s,jt as c}from"./iframe-DB8xyy-s.js";import{n as l,t as u}from"./helpers-B9rKBlsV.js";var d,f,p,m,h,g,_;e((()=>{r(),d=s(),o(),n(),l(),f=i(),p={title:`Misc`,component:a,decorators:[]},m=t.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`,h=t.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`,g=()=>{let e=u(),t=(0,d.boolean)(`Show All`,!1),n=(0,d.boolean)(`For SVG Usage`,!1),r=(0,d.select)(`Name`,e,Object.keys(e)[0]),i=(0,d.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`},`mono`),o=(0,d.select)(`Weight`,{Light:`light`,Regular:`regular`,Heavy:`heavy`,Strong:`strong`},`regular`),s=(0,d.number)(`Size`,24);return(0,f.jsx)(m,{children:t?(0,f.jsx)(h,{children:(e=>Object.keys(c).map(t=>(0,f.jsx)(`div`,{title:t,children:(0,f.jsx)(a,{icon:t,...e})},t)))({color:i,weight:o,size:s,forSvgUsage:n})}):(0,f.jsx)(a,{icon:r,weight:o,color:i,size:s,forSvgUsage:n})})},g.__docgenInfo={description:``,methods:[],displayName:`_Icons`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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