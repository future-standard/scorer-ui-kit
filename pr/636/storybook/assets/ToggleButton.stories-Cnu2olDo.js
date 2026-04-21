import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,bt as a,ht as o,jt as s,kt as c}from"./iframe-CkXAfiVb.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;t((()=>{l=n(),u=e(i()),a(),c(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Filters/atoms`,component:o,decorators:[]},m=[{text:`Grid`,value:`grid`,icon:`LayoutGrid`},{text:`List`,value:`list`,icon:`LayoutList`}],h=s.div``,g=s.li``,_=s.div``,v=s.ol`
  margin-top: 20px;
  display: grid;
  ${({$layout:e})=>e===`grid`&&`
      list-style-type: none;
      grid-template-columns: repeat(3, 300px);
      gap: 16px;
        ${g} {
          padding: 100px 20px;
          border: 1px solid var(--grey-9);
          text-align: center;
        }
    `};
`,y=s.span`
    ${({$isOnline:e})=>e?`
      color: var(--success);
    `:`
      color: var(--warning);
    `}
  `,b=()=>{let[e,t]=(0,u.useState)(0),n=(0,l.boolean)(`Disabled`,!1),r=(0,l.select)(`Design type`,{Default:`default`,Basic:`basic`},`basic`),i=(0,l.text)(`Category Label`,`Layout`),a=(0,l.object)(`Options`,m),s=f(`Button Value: `);return(0,d.jsxs)(_,{children:[(0,d.jsx)(o,{categoryLabel:i,options:a,onToggle:(0,u.useCallback)((e,n)=>{t(e),s(n)},[s]),disabled:n,design:r,selectedIndex:e}),(0,d.jsxs)(v,{$layout:m[e].value,children:[(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[`Camera01 - `,(0,d.jsx)(y,{$isOnline:!0,children:`Online`})]})}),(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[`Camera02 - `,(0,d.jsx)(y,{$isOnline:!0,children:`Online`})]})}),(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[`Camera03 - `,(0,d.jsx)(y,{children:`OffLine`})]})}),(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[`Camera04 - `,(0,d.jsx)(y,{children:`OffLine`})]})}),(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[`Camera05 - `,(0,d.jsx)(y,{children:`OffLine`})]})}),(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[`Camera06 - `,(0,d.jsx)(y,{children:`OffLine`})]})}),(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[`Camera07 - `,(0,d.jsx)(y,{$isOnline:!0,children:`Online`})]})}),(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[`Camera08 - `,(0,d.jsx)(y,{$isOnline:!0,children:`Online`})]})}),(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[`Camera09 - `,(0,d.jsx)(y,{children:`Online`})]})})]})]})},b.__docgenInfo={description:``,methods:[],displayName:`_ToggleButton`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`_ToggleButton`]}))();export{b as _ToggleButton,x as __namedExportsOrder,p as default};