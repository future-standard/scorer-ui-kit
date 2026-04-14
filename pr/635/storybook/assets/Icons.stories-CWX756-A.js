import{n as e}from"./chunk-BneVvdWh.js";import{Dt as t,Et as n,Ft as r,Lt as i,M as a,Ot as o,Pt as s,Rt as c,bt as l}from"./iframe-C0e3YAX7.js";import{n as u,r as d}from"./helpers-DxrUs1Vp.js";var f,p,m,h,g,_,v;e((()=>{c(),f=s(),r(),o(),l(),d(),p=n(),m={title:`Misc`,component:a,decorators:[]},h=i.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`,g=i.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`,_=()=>{let e=u(),n=(0,f.boolean)(`Show All`,!1),r=(0,f.boolean)(`For SVG Usage`,!1),i=(0,f.select)(`Name`,e,Object.keys(e)[0]),o=(0,f.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`},`mono`),s=(0,f.select)(`Weight`,{Light:`light`,Regular:`regular`,Heavy:`heavy`,Strong:`strong`},`regular`),c=(0,f.number)(`Size`,24);return(0,p.jsx)(h,{children:n?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(g,{children:(e=>Object.keys(t).map(t=>(0,p.jsx)(`div`,{title:t,children:(0,p.jsx)(a,{icon:t,...e})},t)))({color:o,weight:s,size:c,forSvgUsage:r})})}):(0,p.jsx)(a,{icon:i,weight:s,color:o,size:c,forSvgUsage:r})})},_.__docgenInfo={description:``,methods:[],displayName:`_Icons`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const showAll = boolean("Show All", false);
  const forSvgUsage = boolean("For SVG Usage", false);
  const icon = select("Name", iconList, Object.keys(iconList)[0]);
  const color = select("Color", {
    Mono: "mono",
    Dimmed: "dimmed",
    Subtle: "subtle",
    Inverse: "inverse",
    Primary: "primary",
    Danger: "danger"
  }, "mono");
  const weight = select("Weight", {
    Light: "light",
    Regular: "regular",
    Heavy: "heavy",
    Strong: 'strong'
  }, "regular");
  const size = number("Size", 24);

  /**
   * Generate a grid of all the icons for easy browsing and hovering to find names.
   */
  const generateIconGrid = (props: {
    color: "mono" | "dimmed" | "subtle" | "inverse" | "primary" | "danger";
    weight: "regular" | "light" | "heavy" | "strong";
    size: number;
  }) => {
    return Object.keys(IconSVGs).map(iconName => <div title={iconName} key={iconName}>
        <Icon icon={iconName} {...props}></Icon>
      </div>);
  };
  return <Container>
    {showAll ? <>
      <Grid>{generateIconGrid({
          ...{
            color,
            weight,
            size,
            forSvgUsage
          }
        })}</Grid>
    </> : <Icon {...{
      icon,
      weight,
      color,
      size,
      forSvgUsage
    }} />}

  </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_Icons`]}))();export{_ as _Icons,v as __namedExportsOrder,m as default};