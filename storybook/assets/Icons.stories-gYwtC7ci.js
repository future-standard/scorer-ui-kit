import{At as e,Ft as t,Lt as n,Nt as r,Pt as i,Rt as a,Wt as o,wt as s}from"./iframe-CeL4Hqgv.js";import{n as c,t as l}from"./helpers-ftoKj78T.js";import{n as u}from"./rolldown-runtime-DkW27tQK.js";var d,f,p,m,h,g,_;function v(){return(v=u((()=>{i(),d=o(),s(),a(),c(),f=t(),p={title:`Misc`,component:e,decorators:[]},m=n.div`
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
`,g=()=>{let t=l(),n=(0,d.boolean)(`Show All`,!1),i=(0,d.boolean)(`For SVG Usage`,!1),a=(0,d.select)(`Name`,t,Object.keys(t)[0]),o=(0,d.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`},`mono`),s=(0,d.select)(`Weight`,{Light:`light`,Regular:`regular`,Heavy:`heavy`,Strong:`strong`},`regular`),c=(0,d.number)(`Size`,24);return(0,f.jsx)(m,{children:n?(0,f.jsx)(h,{children:(t=>Object.keys(r).map(n=>(0,f.jsx)(`div`,{title:n,children:(0,f.jsx)(e,{icon:n,...t})},n)))({color:o,weight:s,size:c,forSvgUsage:i})}):(0,f.jsx)(e,{icon:a,weight:s,color:o,size:c,forSvgUsage:i})})},g.__docgenInfo={description:``,methods:[],displayName:`_Icons`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`_Icons`]})))()}v();export{g as _Icons,_ as __namedExportsOrder,p as default};