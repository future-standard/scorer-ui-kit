import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./useModal-CKRzkb23.js";import{h as i,i as a,k as o}from"./data_samples-D4tf1liw.js";import{n as s,t as c}from"./TypeTable-DMiVAlMr.js";import{n as l,t as u}from"./ContentLayout-DekPy5r8.js";import{c as d,o as f,s as p}from"./sample_table_helpers-CBqoqzAY.js";import{n as m,t as h}from"./PageFrame-BnX2HefH.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{l(),n(),s(),i(),h(),f(),g=t(),{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Tables/molecules/TypeTable`,component:c,tags:[`autodocs`],parameters:{layout:`fullscreen`,pageFrame:{docsHeight:`900px`}},decorators:[e=>(0,g.jsx)(r,{children:(0,g.jsx)(u,{children:(0,g.jsx)(e,{})})}),m],args:{columnConfig:a,rows:p(d([...o],`deviceName`,!0)),selectable:!0,hasStatus:!0,hasThumbnail:!0,hasTypeIcon:!0,hasHeaderGroups:!0,defaultAscending:!0,isLoading:!1,loadingText:`Loading Data...`,emptyTableTitle:``,emptyTableText:``,closeText:`CLOSE`,selectCallback:v(),toggleAllCallback:v(),sortCallback:v()}},b={render:function(e){let[{rows:t=[]},n]=_(),r=(r,i)=>{e.selectCallback?.(r,i),n({rows:t.map(e=>e.id===i?{...e,_checked:r}:e)})},i=r=>{e.toggleAllCallback?.(r),n({rows:t.map(e=>({...e,_checked:r}))})},a=(r,i)=>{e.sortCallback?.(r,i);let a=new Map(t.map(e=>[e.id,e._checked])),s=p(d([...o],i,r));n({rows:s.map(e=>({...e,_checked:a.get(e.id)}))})};return(0,g.jsx)(c,{...e,rows:t,selectCallback:r,toggleAllCallback:i,sortCallback:a})}},x=[`Default`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Default,x as __namedExportsOrder,y as default};