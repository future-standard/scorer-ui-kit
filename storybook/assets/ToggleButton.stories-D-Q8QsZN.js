import{j as a}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as c}from"./index-DnkWte70.js";import{n as C}from"./index.modern-CLl990BG.js";import{d as i}from"./index-C-6Xbh3D.js";import{a as D}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{c as o}from"./styled-components.browser.esm-CarAhzHj.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const I={title:"Filters/atoms",component:C,decorators:[]},m=[{text:"Grid",value:"grid",icon:"LayoutGrid"},{text:"List",value:"list",icon:"LayoutList"}],n=o.div``,e=o.li``,L=o.div``,b=o.ol`
  margin-top: 20px;
  display: grid;
  ${({layout:s})=>s==="grid"&&`
      list-style-type: none;
      grid-template-columns: repeat(3, 300px);
      gap: 16px;
        ${e} {
          padding: 100px 20px;
          border: 1px solid var(--grey-9);
          text-align: center;
        }
    `};
`,t=o.span`
    ${({isOnline:s})=>s?`
      color: var(--success);
    `:`
      color: var(--warning);
    `}
  `,r=()=>{const[s,x]=c.useState(0),g=i.boolean("Disabled",!1),S=i.select("Design type",{Default:"default",Basic:"basic"},"basic"),h=i.text("Category Label","Layout"),j=i.object("Options",m),l=D("Button Value: "),O=c.useCallback((f,y)=>{x(f),l(y)},[l]);return a.jsxs(L,{children:[a.jsx(C,{categoryLabel:h,options:j,onToggle:O,disabled:g,design:S,selectedIndex:s}),a.jsxs(b,{layout:m[s].value,children:[a.jsx(e,{children:a.jsxs(n,{children:["Camera01 - ",a.jsx(t,{isOnline:!0,children:"Online"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera02 - ",a.jsx(t,{isOnline:!0,children:"Online"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera03 - ",a.jsx(t,{children:"OffLine"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera04 - ",a.jsx(t,{children:"OffLine"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera05 - ",a.jsx(t,{children:"OffLine"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera06 - ",a.jsx(t,{children:"OffLine"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera07 - ",a.jsx(t,{isOnline:!0,children:"Online"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera08 - ",a.jsx(t,{isOnline:!0,children:"Online"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera09 - ",a.jsx(t,{children:"Online"})]})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"_ToggleButton"};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [selectedLayout, setSelectedLayout] = useState(0);
  const disabled = boolean('Disabled', false);
  const design = select('Design type', {
    Default: 'default',
    Basic: 'basic'
  }, 'basic');
  const categoryLabel = text('Category Label', 'Layout');
  const options = object('Options', layoutOptions);
  const showToggleValue = action('Button Value: ');
  const onToggle = useCallback((index: number, value: string | number) => {
    setSelectedLayout(index);
    showToggleValue(value);
  }, [showToggleValue]);
  return <Container>
      <ToggleButton {...{
      categoryLabel,
      options,
      onToggle,
      disabled,
      design,
      selectedIndex: selectedLayout
    }} />

      <DataGroup layout={layoutOptions[selectedLayout].value}>
        <Camera>
          <CameraData>
            Camera01 - <StatusSpan isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera02 - <StatusSpan isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera03 - <StatusSpan>OffLine</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera04 - <StatusSpan>OffLine</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera05 - <StatusSpan>OffLine</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera06 - <StatusSpan>OffLine</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera07 - <StatusSpan isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera08 - <StatusSpan isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera09 - <StatusSpan>Online</StatusSpan>
          </CameraData>
        </Camera>
      </DataGroup>
    </Container>;
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const $=["_ToggleButton"];export{r as _ToggleButton,$ as __namedExportsOrder,I as default};
