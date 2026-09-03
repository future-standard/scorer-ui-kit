import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,Rt as r,Wt as i,wt as a,yt as o}from"./iframe-CH2zgN-8.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=s((()=>{c=i(),l=e(),a(),r(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Filters/atoms`,component:o,decorators:[]},p=[{text:`Grid`,value:`grid`,icon:`LayoutGrid`},{text:`List`,value:`list`,icon:`LayoutList`}],m=n.div``,h=n.li``,g=n.div``,_=n.ol`
  margin-top: 20px;
  display: grid;
  ${({$layout:e})=>e===`grid`&&`
      list-style-type: none;
      grid-template-columns: repeat(3, 300px);
      gap: 16px;
        ${h} {
          padding: 100px 20px;
          border: 1px solid var(--grey-9);
          text-align: center;
        }
    `};
`,v=n.span`
    ${({$isOnline:e})=>e?`
      color: var(--success);
    `:`
      color: var(--warning);
    `}
  `,y=()=>{let[e,t]=(0,l.useState)(0),n=(0,c.boolean)(`Disabled`,!1),r=(0,c.select)(`Design type`,{Default:`default`,Basic:`basic`},`basic`),i=(0,c.text)(`Category Label`,`Layout`),a=(0,c.object)(`Options`,p),s=d(`Button Value: `),f=(0,l.useCallback)((e,n)=>{t(e),s(n)},[s]);return(0,u.jsxs)(g,{children:[(0,u.jsx)(o,{categoryLabel:i,options:a,onToggle:f,disabled:n,design:r,selectedIndex:e}),(0,u.jsxs)(_,{$layout:p[e].value,children:[(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera01 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera02 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera03 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera04 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera05 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera06 - `,(0,u.jsx)(v,{children:`OffLine`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera07 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera08 - `,(0,u.jsx)(v,{$isOnline:!0,children:`Online`})]})}),(0,u.jsx)(h,{children:(0,u.jsxs)(m,{children:[`Camera09 - `,(0,u.jsx)(v,{children:`Online`})]})})]})]})},y.__docgenInfo={description:``,methods:[],displayName:`_ToggleButton`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b=[`_ToggleButton`]})))()}x();export{y as _ToggleButton,b as __namedExportsOrder,f as default};