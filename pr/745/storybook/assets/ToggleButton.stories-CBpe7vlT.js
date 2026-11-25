import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i}from"./styled-components.browser.esm-DRoLZq3m.js";import{n as a,t as o}from"./FilterButton-C-m-EWIN.js";var s,c,l;function u(){return(u=e((()=>{s=t(),a(),c=n(),l=({options:e,categoryLabel:t,selectedIndex:n,design:r=`basic`,onToggle:i,...a})=>{let l=(0,s.useCallback)(t=>{let n=t===1?0:1;i(n,e[n].value)},[i,e]);return n!==0&&n!==1?null:(0,c.jsxs)(o,{icon:e[n].icon,onClick:()=>l(n),design:r,...a,children:[t&&`${t}: `,`${e[n].text}`]})};try{l.displayName=`ToggleButton`,l.__docgenInfo={description:``,displayName:`ToggleButton`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,methods:[],props:{options:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`options`,required:!0,tags:{},type:{name:`IToggleOption[]`}},categoryLabel:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`categoryLabel`,required:!0,tags:{},type:{name:`string`}},selectedIndex:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`selectedIndex`,required:!0,tags:{},type:{name:`number`}},design:{defaultValue:{value:`basic`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`design`,required:!1,tags:{},type:{name:`enum`,raw:`FilterButtonDesign`,value:[{value:`"default"`},{value:`"basic"`}]}},onToggle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/ToggleButton.tsx`,name:`TypeLiteral`}],description:``,name:`onToggle`,required:!0,tags:{},type:{name:`(index: number, value: string | number) => void`}}},tags:{}}}catch{}})))()}var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{u(),r(),d=n(),{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:p}=__STORYBOOK_MODULE_TEST__,m=[{text:`Grid`,value:`grid`,icon:`LayoutGrid`},{text:`List`,value:`list`,icon:`LayoutList`}],h=i.div``,g=i.li``,_=i.ol`
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
`,v=i.span`
    ${({$isOnline:e})=>e?`
      color: var(--success);
    `:`
      color: var(--warning);
    `}
  `,y=[{name:`Camera01`,online:!0},{name:`Camera02`,online:!0},{name:`Camera03`,online:!1},{name:`Camera04`,online:!1},{name:`Camera05`,online:!1},{name:`Camera06`,online:!1},{name:`Camera07`,online:!0},{name:`Camera08`,online:!0},{name:`Camera09`,online:!1}],b={title:`Filters/atoms/ToggleButton`,component:l,argTypes:{design:{control:`select`},selectedIndex:{control:`select`,options:[0,1]}},args:{categoryLabel:`Layout`,options:m,selectedIndex:0,design:`basic`,disabled:!1,onToggle:p()}},x={render:function(e){let[{selectedIndex:t},n]=f(),r=(t,r)=>{e.onToggle(t,r),n({selectedIndex:t})};return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(l,{...e,selectedIndex:t,onToggle:r}),(0,d.jsx)(_,{$layout:String(e.options[t]?.value),children:y.map(({name:e,online:t})=>(0,d.jsx)(g,{children:(0,d.jsxs)(h,{children:[e,` - `,(0,d.jsx)(v,{$isOnline:t,children:t?`Online`:`OffLine`})]})},e))})]})}},S=[`Default`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [{
      selectedIndex
    }, updateArgs] = useArgs<Args>();
    const onToggle = (index: number, value: string | number) => {
      args.onToggle(index, value);
      updateArgs({
        selectedIndex: index
      });
    };
    return <div>
        <ToggleButton {...args} selectedIndex={selectedIndex} onToggle={onToggle} />
        <DataGroup $layout={String(args.options[selectedIndex]?.value)}>
          {CAMERAS.map(({
          name,
          online
        }) => <Camera key={name}>
              <CameraData>
                {name} - <StatusSpan $isOnline={online}>{online ? 'Online' : 'OffLine'}</StatusSpan>
              </CameraData>
            </Camera>)}
        </DataGroup>
      </div>;
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Default,S as __namedExportsOrder,b as default};