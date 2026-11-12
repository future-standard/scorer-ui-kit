import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{h as n,i as r,k as i}from"./data_samples-D4tf1liw.js";import{n as a,t as o}from"./TypeTable-Cm72YIdS.js";import{n as s,t as c}from"./ContentLayout-DVSFqfzx.js";import{c as l,o as u,s as d}from"./sample_table_helpers-CBqoqzAY.js";import{n as f,t as p}from"./PageFrame-DYm10C9-.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{s(),a(),n(),p(),u(),m=t(),{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Tables/molecules/TypeTable`,component:o,parameters:{layout:`fullscreen`,pageFrame:{docsHeight:`900px`}},decorators:[e=>(0,m.jsx)(c,{children:(0,m.jsx)(e,{})}),f],args:{columnConfig:r,rows:d(l([...i],`deviceName`,!0)),selectable:!0,hasStatus:!0,hasThumbnail:!0,hasTypeIcon:!0,hasHeaderGroups:!0,defaultAscending:!0,isLoading:!1,loadingText:`Loading Data...`,emptyTableTitle:``,emptyTableText:``,closeText:`CLOSE`,selectCallback:g(),toggleAllCallback:g(),sortCallback:g()}},v={render:function(e){let[{rows:t=[]},n]=h(),r=(r,i)=>{e.selectCallback?.(r,i),n({rows:t.map(e=>e.id===i?{...e,_checked:r}:e)})},a=r=>{e.toggleAllCallback?.(r),n({rows:t.map(e=>({...e,_checked:r}))})},s=(r,a)=>{e.sortCallback?.(r,a);let o=new Map(t.map(e=>[e.id,e._checked])),s=d(l([...i],a,r));n({rows:s.map(e=>({...e,_checked:o.get(e.id)}))})};return(0,m.jsx)(o,{...e,rows:t,selectCallback:r,toggleAllCallback:a,sortCallback:s})}},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [{
      rows = []
    }, updateArgs] = useArgs<{
      rows: ITypeTableData;
    }>();
    const selectCallback = (checked: boolean, id?: string | number) => {
      args.selectCallback?.(checked, id);
      updateArgs({
        rows: rows.map(row => row.id === id ? {
          ...row,
          _checked: checked
        } : row)
      });
    };
    const toggleAllCallback = (checked: boolean) => {
      args.toggleAllCallback?.(checked);
      updateArgs({
        rows: rows.map(row => ({
          ...row,
          _checked: checked
        }))
      });
    };
    const sortCallback = (ascending: boolean, columnId: string) => {
      args.sortCallback?.(ascending, columnId);
      const checkedById = new Map(rows.map(row => [row.id, row._checked]));
      const sorted = rowMaker(sortDataBy([...tableData], columnId as keyof ITableSampleData, ascending));
      updateArgs({
        rows: sorted.map(row => ({
          ...row,
          _checked: checkedById.get(row.id)
        }))
      });
    };
    return <TypeTable {...args} rows={rows} selectCallback={selectCallback} toggleAllCallback={toggleAllCallback} sortCallback={sortCallback} />;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Default,y as __namedExportsOrder,_ as default};