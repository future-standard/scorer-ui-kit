import{Ft as e,Gt as t,It as n,Pt as r,Rt as i,jt as a,wt as o,zt as s}from"./iframe-C28gtL4u.js";import{n as c,t as l}from"./helpers-D7JEnc-e.js";import{n as u}from"./rolldown-runtime-DkW27tQK.js";var d,f,p,m,h,g,_;function v(){return(v=u((()=>{e(),d=t(),o(),s(),c(),f=n(),p={title:`Misc`,component:a,decorators:[]},m=i.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`,h=i.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`,g=()=>{let e=l(),t=(0,d.boolean)(`Show All`,!1),n=(0,d.boolean)(`For SVG Usage`,!1),i=(0,d.select)(`Name`,e,Object.keys(e)[0]),o=(0,d.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`},`mono`),s=(0,d.select)(`Weight`,{Light:`light`,Regular:`regular`,Heavy:`heavy`,Strong:`strong`},`regular`),c=(0,d.number)(`Size`,24);return(0,f.jsx)(m,{children:t?(0,f.jsx)(h,{children:(e=>Object.keys(r).map(t=>(0,f.jsx)(`div`,{title:t,children:(0,f.jsx)(a,{icon:t,...e})},t)))({color:o,weight:s,size:c,forSvgUsage:n})}):(0,f.jsx)(a,{icon:i,weight:s,color:o,size:c,forSvgUsage:n})})},g.__docgenInfo={description:``,methods:[],displayName:`_Icons`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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