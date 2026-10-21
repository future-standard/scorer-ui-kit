import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./FilterButton-BdSEWV5J.js";import{_ as a,a as o,o as s}from"./iframe-PEYaYO03.js";var c,l,u;function d(){return(d=e((()=>{c=t(),r(),l=n(),u=({options:e,categoryLabel:t,selectedIndex:n,design:r=`basic`,onToggle:a,...o})=>{let s=(0,c.useCallback)(t=>{let n=t===1?0:1;a(n,e[n].value)},[a,e]);return n!==0&&n!==1?null:(0,l.jsxs)(i,{icon:e[n].icon,onClick:()=>s(n),design:r,...o,children:[t&&`${t}: `,`${e[n].text}`]})};try{u.displayName=`ToggleButton`,u.__docgenInfo={description:``,displayName:`ToggleButton`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,methods:[],props:{options:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`options`,required:!0,tags:{},type:{name:`IToggleOption[]`}},categoryLabel:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`categoryLabel`,required:!0,tags:{},type:{name:`string`}},selectedIndex:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`selectedIndex`,required:!0,tags:{},type:{name:`number`}},design:{defaultValue:{value:`basic`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`design`,required:!1,tags:{},type:{name:`enum`,raw:`FilterButtonDesign`,value:[{value:`"default"`},{value:`"basic"`}]}},onToggle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`onToggle`,required:!0,tags:{},type:{name:`(index: number, value: string | number) => void`}}},tags:{}}}catch{}})))()}var f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{f=a(),p=t(),d(),s(),m=n(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`Filters/atoms`,component:u,decorators:[]},_=[{text:`Grid`,value:`grid`,icon:`LayoutGrid`},{text:`List`,value:`list`,icon:`LayoutList`}],v=o.div``,y=o.li``,b=o.div``,x=o.ol`
  margin-top: 20px;
  display: grid;
  ${({$layout:e})=>e===`grid`&&`
      list-style-type: none;
      grid-template-columns: repeat(3, 300px);
      gap: 16px;
        ${y} {
          padding: 100px 20px;
          border: 1px solid var(--grey-9);
          text-align: center;
        }
    `};
`,S=o.span`
    ${({$isOnline:e})=>e?`
      color: var(--success);
    `:`
      color: var(--warning);
    `}
  `,C=()=>{let[e,t]=(0,p.useState)(0),n=(0,f.boolean)(`Disabled`,!1),r=(0,f.select)(`Design type`,{Default:`default`,Basic:`basic`},`basic`),i=(0,f.text)(`Category Label`,`Layout`),a=(0,f.object)(`Options`,_),o=h(`Button Value: `),s=(0,p.useCallback)((e,n)=>{t(e),o(n)},[o]);return(0,m.jsxs)(b,{children:[(0,m.jsx)(u,{categoryLabel:i,options:a,onToggle:s,disabled:n,design:r,selectedIndex:e}),(0,m.jsxs)(x,{$layout:_[e].value,children:[(0,m.jsx)(y,{children:(0,m.jsxs)(v,{children:[`Camera01 - `,(0,m.jsx)(S,{$isOnline:!0,children:`Online`})]})}),(0,m.jsx)(y,{children:(0,m.jsxs)(v,{children:[`Camera02 - `,(0,m.jsx)(S,{$isOnline:!0,children:`Online`})]})}),(0,m.jsx)(y,{children:(0,m.jsxs)(v,{children:[`Camera03 - `,(0,m.jsx)(S,{children:`OffLine`})]})}),(0,m.jsx)(y,{children:(0,m.jsxs)(v,{children:[`Camera04 - `,(0,m.jsx)(S,{children:`OffLine`})]})}),(0,m.jsx)(y,{children:(0,m.jsxs)(v,{children:[`Camera05 - `,(0,m.jsx)(S,{children:`OffLine`})]})}),(0,m.jsx)(y,{children:(0,m.jsxs)(v,{children:[`Camera06 - `,(0,m.jsx)(S,{children:`OffLine`})]})}),(0,m.jsx)(y,{children:(0,m.jsxs)(v,{children:[`Camera07 - `,(0,m.jsx)(S,{$isOnline:!0,children:`Online`})]})}),(0,m.jsx)(y,{children:(0,m.jsxs)(v,{children:[`Camera08 - `,(0,m.jsx)(S,{$isOnline:!0,children:`Online`})]})}),(0,m.jsx)(y,{children:(0,m.jsxs)(v,{children:[`Camera09 - `,(0,m.jsx)(S,{children:`Online`})]})})]})]})},w=[`_ToggleButton`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as _ToggleButton,w as __namedExportsOrder,g as default};