import{H as p,r as c,d as i,j as a,a as o}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$={title:"Filters/atoms",component:p,decorators:[]},u=[{text:"Grid",value:"grid",icon:"LayoutGrid"},{text:"List",value:"list",icon:"LayoutList"}],n=o.div``,e=o.li``,f=o.div``,b=o.ol`
  margin-top: 20px;
  display: grid;
  ${({$layout:s})=>s==="grid"&&`
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
    ${({$isOnline:s})=>s?`
      color: var(--success);
    `:`
      color: var(--warning);
    `}
  `,r=()=>{const[s,x]=c.useState(0),g=i.boolean("Disabled",!1),S=i.select("Design type",{Default:"default",Basic:"basic"},"basic"),O=i.text("Category Label","Layout"),h=i.object("Options",u),l=L("Button Value: "),j=c.useCallback((y,D)=>{x(y),l(D)},[l]);return a.jsxs(f,{children:[a.jsx(p,{categoryLabel:O,options:h,onToggle:j,disabled:g,design:S,selectedIndex:s}),a.jsxs(b,{$layout:u[s].value,children:[a.jsx(e,{children:a.jsxs(n,{children:["Camera01 - ",a.jsx(t,{$isOnline:!0,children:"Online"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera02 - ",a.jsx(t,{$isOnline:!0,children:"Online"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera03 - ",a.jsx(t,{children:"OffLine"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera04 - ",a.jsx(t,{children:"OffLine"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera05 - ",a.jsx(t,{children:"OffLine"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera06 - ",a.jsx(t,{children:"OffLine"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera07 - ",a.jsx(t,{$isOnline:!0,children:"Online"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera08 - ",a.jsx(t,{$isOnline:!0,children:"Online"})]})}),a.jsx(e,{children:a.jsxs(n,{children:["Camera09 - ",a.jsx(t,{children:"Online"})]})})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"_ToggleButton"};var d,m,C;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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

      <DataGroup $layout={layoutOptions[selectedLayout].value}>
        <Camera>
          <CameraData>
            Camera01 - <StatusSpan $isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera02 - <StatusSpan $isOnline>Online</StatusSpan>
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
            Camera07 - <StatusSpan $isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera08 - <StatusSpan $isOnline>Online</StatusSpan>
          </CameraData>
        </Camera>
        <Camera>
          <CameraData>
            Camera09 - <StatusSpan>Online</StatusSpan>
          </CameraData>
        </Camera>
      </DataGroup>
    </Container>;
}`,...(C=(m=r.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};const v=["_ToggleButton"];export{r as _ToggleButton,v as __namedExportsOrder,$ as default};
