import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,Mt as r,S as i,gt as a,jt as o,kt as s,vt as c,yt as l,zt as u}from"./iframe-cNP1dtGl.js";import{i as d,n as f,r as ee,t as te}from"./datePicker_sample-GUkEaJ-t.js";import{A as p,C as m,D as h,E as g,O as _,S as v,T as y,_ as ne,a as b,f as x,h as S,i as C,k as w,m as T,n as E,o as D,p as O,s as re,t as k,v as A,w as j,x as M}from"./data_samples-BIGHHJEJ.js";import{a as N,c as P,i as F,n as I,o as L,r as R,s as z,t as B}from"./sample_table_helpers-CDPhRIsN.js";var V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{V=u(),H=t(n()),c(),r(),S(),d(),L(),U=s(),{action:W}=__STORYBOOK_MODULE_ACTIONS__,G={title:`Filters/Organism`,component:`FilterBar`,decorators:[]},K=o.div`
  margin: 20px;
`,q=o.div`
margin: 60px 0 20px 0
`,J=new Date,J.setDate(J.getDate()-5),Y=P(w,`deviceName`,!0),X=(e,t)=>Array.isArray(e)&&e.length>0?e.reduce((e,t)=>t.selected===null?e:t.id===`dropdownForStatus`&&(l(t.selected)||Array.isArray(t.selected))?N(e,t.selected):t.id===`priceFilter`&&l(t.selected)?F(e,t.selected):t.id===`inputForDeviceName`&&l(t.selected)?R(e,t.selected):t.id===`inputForDate`&&l(t.selected)?B(e,t.selected):t.id===`datePickerForRuntime`&&!l(t.selected)&&!Array.isArray(t.selected)?I(e,t.selected):e,t):t,Z=()=>{let e=(0,V.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),[t,n]=(0,H.useState)(Y),[r,o]=(0,H.useState)(z(Y)),[s,c]=(0,H.useState)([]),l=(0,V.boolean)(`Single Filter`,!1),u=(0,V.boolean)(`Has Show More`,!0),d=(0,V.text)(`Results date format`,`yyyy-MM-dd HH:mm`),S=(0,V.boolean)(`Datepicker has Apply`,!0),N=W(`Status Reset was pressed`),F=W(`Status Cancel was pressed`),I=W(`Price Reset was pressed`),L=W(`Price Cancel pressed`),R=(0,H.useCallback)((e,t)=>{let n=[...r],i=n.findIndex(e=>e.id===t);n[i]._checked=e,o(n)},[r]),B=(0,H.useCallback)(e=>{let t=[...r];t.forEach(t=>{t._checked=e}),o(t)},[r]),G=(0,H.useCallback)((e,r)=>{n(P([...t],r,e))},[t]),J=[{id:`inputForDeviceName`,placeholder:e===`english`?`Filter by Device Name...`:`デバイス名前 フィルター`,name:e===`english`?`Device Name`:`デバイス名前`},{id:`inputForDate`,placeholder:e===`english`?`Filter by Date`:`年月日 フィルター`,name:e===`english`?`Date`:`年月日`,canHide:!0,showFieldText:e===`english`?`Show Date Input`:`年月日 みる`}],Z=[{id:`dropdownForStatus`,buttonText:e===`english`?`Status`:`ステータス`,list:e===`english`?h:_,buttonIcon:`Camera`,optionType:`checkbox`,loadingText:e===`english`?`Loading Status ...`:T,searchPlaceholder:e===`english`?`Status...`:`ステータス...`,searchResultText:e===`english`?M:v,emptyResultText:e===`english`?x:O,onResetCallback:N,onCancelCallback:F,hasReset:!0,hasApply:!0,resetText:e===`english`?`Reset`:`リセット`,cancelText:e===`english`?`Cancel`:`キャンセル`,closeText:e===`english`?`Close`:`閉じる`,applyText:e===`english`?`Apply`:`適用`,descendingText:e===`english`?`Descending`:`降順`,ascendingText:e===`english`?`Ascending`:`昇順`,isListAscending:!0,hasOptionsFilter:!0},{id:`priceFilter`,canHide:!0,buttonText:e===`english`?`Cost`:`価格`,list:e===`english`?D:re,buttonIcon:`Usage`,optionType:`radio`,loadingText:e===`english`?`Loading Cost...`:T,searchPlaceholder:e===`english`?`Cost...`:`価格...`,searchResultText:e===`english`?M:v,emptyResultText:e===`english`?x:O,onResetCallback:I,onCancelCallback:L,hasReset:!0,hasApply:!0,resetText:e===`english`?`Reset`:`リセット`,cancelText:e===`english`?`Cancel`:`キャンセル`,closeText:e===`english`?`Close`:`閉じる`,applyText:e===`english`?`Apply`:`適用`,descendingText:e===`english`?`Descending`:`降順`,ascendingText:e===`english`?`Ascending`:`昇順`,isListAscending:!0,hasOptionsFilter:!0}],Q=[{id:`datePickerForRuntime`,dateMode:`interval`,buttonText:e===`english`?`Date Range`:`日付範囲`,buttonIcon:`DateTime`,dateTimeTextUpper:e===`english`?`From`:`から`,dateTimeTextLower:e===`english`?`To`:`まで`,timeZoneTitle:e===`english`?`Timezone`:`時間帯`,cancelText:e===`english`?`Cancel`:`キャンセル`,applyText:e===`english`?`Apply`:`完了`,lang:e===`english`?`en`:`ja`,selected:te,availableRange:ee,contentDays:f,hasApply:S}];(0,V.object)(`Search Filters`,J),(0,V.object)(`DropdownFilters`,Z),(0,V.object)(`DatePickers`,Q);let $=W(`onChangeCallback`),ie=(0,H.useCallback)(t=>{$(t);let r=P(e===`english`?w:p,`deviceName`,!0),i=[...r];t.length===0?(n(r),c([])):(n(X(t,i)),c(t))},[$,e]);return(0,H.useEffect)(()=>{n(X(s,P(e===`english`?w:p,`deviceName`,!0)))},[s,e]),(0,H.useEffect)(()=>{o(z(t))},[t]),(0,U.jsxs)(K,{children:[(0,U.jsx)(i,{singleFilter:l,hasShowMore:u,searchersConfig:J,dropdownsConfig:Z,datePickersConfig:Q,onChangeCallback:ie,totalResults:r.length,showMoreText:e===`english`?y:g,showLessText:e===`english`?m:j,filtersTitle:e===`english`?`Filters`:`フィルター`,resultTextTemplate:e===`english`?ne:A,clearText:e===`english`?k:E,resultsDateFormat:d}),(0,U.jsx)(q,{children:(0,U.jsx)(a,{selectCallback:R,toggleAllCallback:B,rows:r,sortCallback:G,columnConfig:e===`english`?C:b,hasStatus:!0,selectable:!0,hasThumbnail:!0,hasTypeIcon:!0,defaultAscending:!0,hasHeaderGroups:!0})})]})},Z.__docgenInfo={description:`Filter Bar Story Starts`,methods:[],displayName:`_FilterBar`},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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