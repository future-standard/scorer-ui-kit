import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{h as n,i as r,k as i}from"./data_samples-BqOz8vd7.js";import{n as a,t as o}from"./TypeTable-DtHr8Qq3.js";import{n as s,t as c}from"./ContentLayout-DwEkWMuk.js";import{c as l,o as u,s as d}from"./sample_table_helpers-fw1jO_BP.js";import{n as f,t as p}from"./PageFrame-DK7h1Wh1.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{s(),a(),n(),p(),u(),m=t(),{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:g}=__STORYBOOK_MODULE_TEST__,_=/^[A-Z][a-z]{2} [A-Z][a-z]{2} \d{2} \d{4}$/,v={title:`Tables/molecules/TypeTable`,component:o,parameters:{layout:`fullscreen`,pageFrame:{docsHeight:`900px`}},decorators:[e=>(0,m.jsx)(c,{children:(0,m.jsx)(e,{})}),f],args:{columnConfig:r,rows:d(l([...i],`deviceName`,!0)),selectable:!0,hasStatus:!0,hasThumbnail:!0,hasTypeIcon:!0,hasHeaderGroups:!0,defaultAscending:!0,isLoading:!1,loadingText:`Loading Data...`,emptyTableTitle:``,emptyTableText:``,closeText:`CLOSE`,selectCallback:g(),toggleAllCallback:g(),sortCallback:g()}},y={render:function(e){let[{rows:t=[]},n]=h(),r=(r,i)=>{e.selectCallback?.(r,i),n({rows:t.map(e=>e.id===i?{...e,_checked:r}:e)})},i=r=>{e.toggleAllCallback?.(r),n({rows:t.map(e=>({...e,_checked:r}))})},a=(r,i)=>{e.sortCallback?.(r,i);let a=e.columnConfig.findIndex(e=>e.columnId===i),o=a===-1&&i.startsWith(`column_`)?Number(i.slice(7)):a,s=[...t].sort((e,t)=>{let n=e.columns[o]?.text??``,i=t.columns[o]?.text??``,a=_.test(n)&&_.test(i)?Date.parse(n)-Date.parse(i):n.localeCompare(i,void 0,{numeric:!0});return r?a:-a});n({rows:s})};return(0,m.jsx)(o,{...e,rows:t,selectCallback:r,toggleAllCallback:i,sortCallback:a})}},b=[`Default`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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

    // Sorts the current rows, not the sample data, so edits made in the rows control survive.
    const sortCallback = (ascending: boolean, columnId: string) => {
      args.sortCallback?.(ascending, columnId);
      // A column without a columnId reports its position as column_N.
      const configIndex = args.columnConfig.findIndex(column => column.columnId === columnId);
      const index = configIndex === -1 && columnId.startsWith('column_') ? Number(columnId.slice('column_'.length)) : configIndex;
      const sorted = [...rows].sort((rowA, rowB) => {
        const textA = rowA.columns[index]?.text ?? '';
        const textB = rowB.columns[index]?.text ?? '';
        // Only toDateString output counts as a date: Date.parse also accepts '242' or 'Camera 3',
        // and the Created column would otherwise sort by weekday name.
        const order = DATE_TEXT.test(textA) && DATE_TEXT.test(textB) ? Date.parse(textA) - Date.parse(textB) : textA.localeCompare(textB, undefined, {
          numeric: true
        });
        return ascending ? order : -order;
      });
      updateArgs({
        rows: sorted
      });
    };
    return <TypeTable {...args} rows={rows} selectCallback={selectCallback} toggleAllCallback={toggleAllCallback} sortCallback={sortCallback} />;
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Default,b as __namedExportsOrder,v as default};