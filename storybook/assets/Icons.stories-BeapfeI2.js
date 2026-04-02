import{ah as t,d as o,j as e,a as p,a2 as v}from"./iframe-BQPDKgpJ.js";import{g as b}from"./index-BKA4gAcn.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const L={title:"Misc",component:t,decorators:[]},f=p.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`,I=p.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`,r=()=>{const s=b(),u=o.boolean("Show All",!1),i=o.boolean("For SVG Usage",!1),h=o.select("Name",s,Object.keys(s)[0]),a=o.select("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle",Inverse:"inverse",Primary:"primary",Danger:"danger"},"mono"),c=o.select("Weight",{Light:"light",Regular:"regular",Heavy:"heavy",Strong:"strong"},"regular"),l=o.number("Size",24),x=y=>Object.keys(v).map(n=>e.jsx("div",{title:n,children:e.jsx(t,{icon:n,...y})},n));return e.jsx(f,{children:u?e.jsx(e.Fragment,{children:e.jsx(I,{children:x({color:a,weight:c,size:l,forSvgUsage:i})})}):e.jsx(t,{icon:h,weight:c,color:a,size:l,forSvgUsage:i})})};r.__docgenInfo={description:"",methods:[],displayName:"_Icons"};var g,m,d;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const _=["_Icons"];export{r as _Icons,_ as __namedExportsOrder,L as default};
