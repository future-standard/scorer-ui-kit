import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,S as a,bt as o,jt as s,kt as c,vt as l,xt as u}from"./iframe-DFLY1_j6.js";import{i as d,n as f,r as p,t as ee}from"./datePicker_sample-BiBuCwHr.js";import{A as m,C as h,D as g,E as _,O as v,S as y,T as te,_ as b,a as x,f as S,h as C,i as ne,k as w,m as T,n as E,o as re,p as D,s as O,t as k,v as A,w as j,x as M}from"./data_samples-BPpc5FO9.js";import{a as N,c as P,i as F,n as I,o as L,r as R,s as z,t as B}from"./sample_table_helpers-Cpln8TQK.js";var V,H,U,W,G,K,q,J,Y,X,Z,Q;t((()=>{V=n(),H=e(i()),o(),c(),C(),d(),L(),U=r(),{action:W}=__STORYBOOK_MODULE_ACTIONS__,G={title:`Filters/Organism`,component:`FilterBar`,decorators:[]},K=s.div`
  margin: 20px;
`,q=s.div`
margin: 60px 0 20px 0
`,J=new Date,J.setDate(J.getDate()-5),Y=P(w,`deviceName`,!0),X=(e,t)=>Array.isArray(e)&&e.length>0?e.reduce((e,t)=>t.selected===null?e:t.id===`dropdownForStatus`&&(u(t.selected)||Array.isArray(t.selected))?N(e,t.selected):t.id===`priceFilter`&&u(t.selected)?F(e,t.selected):t.id===`inputForDeviceName`&&u(t.selected)?R(e,t.selected):t.id===`inputForDate`&&u(t.selected)?B(e,t.selected):t.id===`datePickerForRuntime`&&!u(t.selected)&&!Array.isArray(t.selected)?I(e,t.selected):e,t):t,Z=()=>{let e=(0,V.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),[t,n]=(0,H.useState)(Y),[r,i]=(0,H.useState)(z(Y)),[o,s]=(0,H.useState)([]),c=(0,V.boolean)(`Single Filter`,!1),u=(0,V.boolean)(`Has Show More`,!0),d=(0,V.text)(`Results date format`,`yyyy-MM-dd HH:mm`),C=(0,V.boolean)(`Datepicker has Apply`,!0),N=W(`Status Reset was pressed`),F=W(`Status Cancel was pressed`),I=W(`Price Reset was pressed`),L=W(`Price Cancel pressed`),R=(0,H.useCallback)((e,t)=>{let n=[...r],a=n.findIndex(e=>e.id===t);n[a]._checked=e,i(n)},[r]),B=(0,H.useCallback)(e=>{let t=[...r];t.forEach(t=>{t._checked=e}),i(t)},[r]),G=(0,H.useCallback)((e,r)=>{n(P([...t],r,e))},[t]),J=[{id:`inputForDeviceName`,placeholder:e===`english`?`Filter by Device Name...`:`デバイス名前 フィルター`,name:e===`english`?`Device Name`:`デバイス名前`},{id:`inputForDate`,placeholder:e===`english`?`Filter by Date`:`年月日 フィルター`,name:e===`english`?`Date`:`年月日`,canHide:!0,showFieldText:e===`english`?`Show Date Input`:`年月日 みる`}],Z=[{id:`dropdownForStatus`,buttonText:e===`english`?`Status`:`ステータス`,list:e===`english`?g:v,buttonIcon:`Camera`,optionType:`checkbox`,loadingText:e===`english`?`Loading Status ...`:T,searchPlaceholder:e===`english`?`Status...`:`ステータス...`,searchResultText:e===`english`?M:y,emptyResultText:e===`english`?S:D,onResetCallback:N,onCancelCallback:F,hasReset:!0,hasApply:!0,resetText:e===`english`?`Reset`:`リセット`,cancelText:e===`english`?`Cancel`:`キャンセル`,closeText:e===`english`?`Close`:`閉じる`,applyText:e===`english`?`Apply`:`適用`,descendingText:e===`english`?`Descending`:`降順`,ascendingText:e===`english`?`Ascending`:`昇順`,isListAscending:!0,hasOptionsFilter:!0},{id:`priceFilter`,canHide:!0,buttonText:e===`english`?`Cost`:`価格`,list:e===`english`?re:O,buttonIcon:`Usage`,optionType:`radio`,loadingText:e===`english`?`Loading Cost...`:T,searchPlaceholder:e===`english`?`Cost...`:`価格...`,searchResultText:e===`english`?M:y,emptyResultText:e===`english`?S:D,onResetCallback:I,onCancelCallback:L,hasReset:!0,hasApply:!0,resetText:e===`english`?`Reset`:`リセット`,cancelText:e===`english`?`Cancel`:`キャンセル`,closeText:e===`english`?`Close`:`閉じる`,applyText:e===`english`?`Apply`:`適用`,descendingText:e===`english`?`Descending`:`降順`,ascendingText:e===`english`?`Ascending`:`昇順`,isListAscending:!0,hasOptionsFilter:!0}],Q=[{id:`datePickerForRuntime`,dateMode:`interval`,buttonText:e===`english`?`Date Range`:`日付範囲`,buttonIcon:`DateTime`,dateTimeTextUpper:e===`english`?`From`:`から`,dateTimeTextLower:e===`english`?`To`:`まで`,timeZoneTitle:e===`english`?`Timezone`:`時間帯`,cancelText:e===`english`?`Cancel`:`キャンセル`,applyText:e===`english`?`Apply`:`完了`,lang:e===`english`?`en`:`ja`,selected:ee,availableRange:p,contentDays:f,hasApply:C}];(0,V.object)(`Search Filters`,J),(0,V.object)(`DropdownFilters`,Z),(0,V.object)(`DatePickers`,Q);let $=W(`onChangeCallback`),ie=(0,H.useCallback)(t=>{$(t);let r=P(e===`english`?w:m,`deviceName`,!0),i=[...r];t.length===0?(n(r),s([])):(n(X(t,i)),s(t))},[$,e]);return(0,H.useEffect)(()=>{n(X(o,P(e===`english`?w:m,`deviceName`,!0)))},[o,e]),(0,H.useEffect)(()=>{i(z(t))},[t]),(0,U.jsxs)(K,{children:[(0,U.jsx)(a,{singleFilter:c,hasShowMore:u,searchersConfig:J,dropdownsConfig:Z,datePickersConfig:Q,onChangeCallback:ie,totalResults:r.length,showMoreText:e===`english`?te:_,showLessText:e===`english`?h:j,filtersTitle:e===`english`?`Filters`:`フィルター`,resultTextTemplate:e===`english`?b:A,clearText:e===`english`?k:E,resultsDateFormat:d}),(0,U.jsx)(q,{children:(0,U.jsx)(l,{selectCallback:R,toggleAllCallback:B,rows:r,sortCallback:G,columnConfig:e===`english`?ne:x,hasStatus:!0,selectable:!0,hasThumbnail:!0,hasTypeIcon:!0,defaultAscending:!0,hasHeaderGroups:!0})})]})},Z.__docgenInfo={description:`Filter Bar Story Starts`,methods:[],displayName:`_FilterBar`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const language = select('Language', {
    English: 'english',
    Japanese: 'japanese'
  }, 'japanese');
  const [data, setData] = useState<ITableSampleData[]>(dataInitialState);
  const [rows, setRows] = useState<ITypeTableData>(rowMaker(dataInitialState));
  const [filters, setFilters] = useState<IFilterResult[]>([]);
  /**
   * Story interaction section
   */
  const singleFilter = boolean('Single Filter', false);
  const hasShowMore = boolean('Has Show More', true);
  // valid formats - https://date-fns.org/v2.25.0/docs/format
  const resultsDateFormat = text('Results date format', 'yyyy-MM-dd HH:mm');
  const datePickerHasApply = boolean('Datepicker has Apply', true);
  const handleStatusReset = action('Status Reset was pressed');
  const handleStatusCancel = action('Status Cancel was pressed');
  const handlePriceReset = action('Price Reset was pressed');
  const handlePriceCancel = action('Price Cancel pressed');

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {
    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id);
    newRows[targetRowIndex]._checked = checked;
    setRows(newRows);
  }, [rows]);
  const toggleAllCallback = useCallback((checked: boolean) => {
    const newRows = [...rows];
    newRows.forEach(row => {
      row._checked = checked;
    });
    setRows(newRows);
  }, [rows]);
  const sortCallback = useCallback((ascending: boolean, columnId: string) => {
    const unsortedData: ITableSampleData[] = [...data];
    const validKey = columnId as keyof ITableSampleData;
    const sortedData = sortDataBy(unsortedData, validKey, ascending);
    setData(sortedData);
  }, [data]);
  const searchers: ISearchFilter[] = [{
    id: 'inputForDeviceName',
    placeholder: language === 'english' ? 'Filter by Device Name...' : 'デバイス名前 フィルター',
    name: language === 'english' ? 'Device Name' : 'デバイス名前'
    // selected: {text:'OK', value: 'OK'}
  }, {
    id: 'inputForDate',
    placeholder: language === 'english' ? 'Filter by Date' : '年月日 フィルター',
    name: language === 'english' ? 'Date' : '年月日',
    canHide: true,
    showFieldText: language === 'english' ? 'Show Date Input' : '年月日 みる'
  }];
  const dropdowns: IFilterDropdownConfig[] = [{
    id: 'dropdownForStatus',
    buttonText: language === 'english' ? 'Status' : 'ステータス',
    list: language === 'english' ? statusValuesEng : statusValuesJp,
    buttonIcon: 'Camera',
    optionType: 'checkbox',
    loadingText: language === 'english' ? 'Loading Status ...' : genericLoadingJp,
    searchPlaceholder: language === 'english' ? 'Status...' : 'ステータス...',
    searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
    emptyResultText: language === 'english' ? emptyResultsEnglish : emptyResultsJapanese,
    onResetCallback: handleStatusReset,
    onCancelCallback: handleStatusCancel,
    hasReset: true,
    hasApply: true,
    resetText: language === 'english' ? 'Reset' : 'リセット',
    cancelText: language === 'english' ? 'Cancel' : 'キャンセル',
    closeText: language === 'english' ? 'Close' : '閉じる',
    applyText: language === 'english' ? 'Apply' : '適用',
    descendingText: language === 'english' ? 'Descending' : '降順',
    ascendingText: language === 'english' ? 'Ascending' : '昇順',
    isListAscending: true,
    hasOptionsFilter: true
  }, {
    id: 'priceFilter',
    canHide: true,
    buttonText: language === 'english' ? 'Cost' : '価格',
    list: language === 'english' ? costRangeEng : costRangeJap,
    buttonIcon: 'Usage',
    optionType: 'radio',
    loadingText: language === 'english' ? 'Loading Cost...' : genericLoadingJp,
    searchPlaceholder: language === 'english' ? 'Cost...' : '価格...',
    searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
    emptyResultText: language === 'english' ? emptyResultsEnglish : emptyResultsJapanese,
    onResetCallback: handlePriceReset,
    onCancelCallback: handlePriceCancel,
    hasReset: true,
    hasApply: true,
    resetText: language === 'english' ? 'Reset' : 'リセット',
    cancelText: language === 'english' ? 'Cancel' : 'キャンセル',
    closeText: language === 'english' ? 'Close' : '閉じる',
    applyText: language === 'english' ? 'Apply' : '適用',
    descendingText: language === 'english' ? 'Descending' : '降順',
    ascendingText: language === 'english' ? 'Ascending' : '昇順',
    isListAscending: true,
    hasOptionsFilter: true
  }];
  const datePickers: IFilterDatePicker[] = [{
    id: 'datePickerForRuntime',
    dateMode: 'interval',
    buttonText: language === 'english' ? 'Date Range' : '日付範囲',
    buttonIcon: 'DateTime',
    dateTimeTextUpper: language === 'english' ? 'From' : 'から',
    dateTimeTextLower: language === 'english' ? 'To' : 'まで',
    timeZoneTitle: language === 'english' ? 'Timezone' : '時間帯',
    cancelText: language === 'english' ? 'Cancel' : 'キャンセル',
    applyText: language === 'english' ? 'Apply' : '完了',
    lang: language === 'english' ? 'en' : 'ja',
    selected: InitialSelectedDate,
    availableRange: datesRange,
    contentDays: dataContentDays,
    hasApply: datePickerHasApply
  }];

  /**
   * objects only for display
   */
  const _searchersConfig = object('Search Filters', searchers);
  const _dropdownsConfig = object('DropdownFilters', dropdowns);
  const _datePickersConfig = object('DatePickers', datePickers);
  const filtersValues = action('onChangeCallback');
  const handleFilters = useCallback((currentSelected: IFilterResult[]) => {
    filtersValues(currentSelected);
    const localData = language === 'english' ? sortDataBy(tableData, 'deviceName', true) : sortDataBy(tableDataJp, 'deviceName', true);
    const tempData: ITableSampleData[] = [...localData];
    if (currentSelected.length === 0) {
      setData(localData);
      setFilters([]);
    } else {
      const filteredData = getFilteredData(currentSelected, tempData);
      setData(filteredData);
      setFilters(currentSelected);
    }
  }, [filtersValues, language]);
  useEffect(() => {
    const localizeData = language === 'english' ? sortDataBy(tableData, 'deviceName', true) : sortDataBy(tableDataJp, 'deviceName', true);
    const newData = getFilteredData(filters, localizeData);
    setData(newData);
  }, [filters, language]);
  useEffect(() => {
    setRows(rowMaker(data));
  }, [data]);
  return <Container>
      <FilterBar {...{
      singleFilter,
      hasShowMore
    }} searchersConfig={searchers} dropdownsConfig={dropdowns} datePickersConfig={datePickers} onChangeCallback={handleFilters} totalResults={rows.length} showMoreText={language === 'english' ? showMoreEng : showMoreJp} showLessText={language === 'english' ? showLessEng : showLessJp} filtersTitle={language === 'english' ? 'Filters' : 'フィルター'} resultTextTemplate={language === 'english' ? resultTextTemplateEng : resultTextTemplateJp} clearText={language === 'english' ? clearEng : clearJp} resultsDateFormat={resultsDateFormat} />
      <TypeTableWrapper>
        <TypeTable {...{
        selectCallback,
        toggleAllCallback,
        rows,
        sortCallback
      }} columnConfig={language === 'english' ? columnConfigSample : columnConfigSampleJp} hasStatus selectable hasThumbnail hasTypeIcon defaultAscending hasHeaderGroups />
      </TypeTableWrapper>
    </Container>;
}`,...Z.parameters?.docs?.source},description:{story:`Filter Bar Story Starts`,...Z.parameters?.docs?.description}}},Q=[`_FilterBar`]}))();export{Z as _FilterBar,Q as __namedExportsOrder,G as default};