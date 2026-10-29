import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,C as i,D as a,E as o,M as s,O as c,S as l,T as u,_ as d,a as f,f as p,h as m,i as h,j as g,k as _,m as v,n as ee,o as y,p as b,s as te,t as ne,v as re,w as ie,x}from"./data_samples-D4tf1liw.js";import{n as S,t as C}from"./FilterBar-BoHjM6Ux.js";import{n as w,t as T}from"./TypeTable-DMiVAlMr.js";import{_ as E,a as D,o as O}from"./iframe-B9mgqNTy.js";import{i as k,n as A,r as j,t as M}from"./datePicker_sample-0Nw9EzmV.js";import{a as N,c as P,i as F,n as I,o as L,r as R,s as z,t as B}from"./sample_table_helpers-CBqoqzAY.js";var V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{V=E(),H=t(),S(),g(),w(),O(),m(),k(),L(),U=n(),{action:W}=__STORYBOOK_MODULE_ACTIONS__,G={title:`Filters/Organism`,component:`FilterBar`,decorators:[]},K=D.div`
  margin: 20px;
`,q=D.div`
margin: 60px 0 20px 0
`,J=new Date,J.setDate(J.getDate()-5),Y=P(_,`deviceName`,!0),X=(e,t)=>Array.isArray(e)&&e.length>0?e.reduce((e,t)=>t.selected===null?e:t.id===`dropdownForStatus`&&(s(t.selected)||Array.isArray(t.selected))?N(e,t.selected):t.id===`priceFilter`&&s(t.selected)?F(e,t.selected):t.id===`inputForDeviceName`&&s(t.selected)?R(e,t.selected):t.id===`inputForDate`&&s(t.selected)?B(e,t.selected):t.id===`datePickerForRuntime`&&!s(t.selected)&&!Array.isArray(t.selected)?I(e,t.selected):e,t):t,Z=()=>{let e=(0,V.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),[t,n]=(0,H.useState)(Y),[s,m]=(0,H.useState)(z(Y)),[g,S]=(0,H.useState)([]),w=(0,V.boolean)(`Single Filter`,!1),E=(0,V.boolean)(`Has Show More`,!0),D=(0,V.text)(`Results date format`,`yyyy-MM-dd HH:mm`),O=(0,V.boolean)(`Datepicker has Apply`,!0),k=W(`Status Reset was pressed`),N=W(`Status Cancel was pressed`),F=W(`Price Reset was pressed`),I=W(`Price Cancel pressed`),L=(0,H.useCallback)((e,t)=>{let n=[...s],r=n.findIndex(e=>e.id===t);n[r]._checked=e,m(n)},[s]),R=(0,H.useCallback)(e=>{let t=[...s];t.forEach(t=>{t._checked=e}),m(t)},[s]),B=(0,H.useCallback)((e,r)=>{let i=[...t],a=P(i,r,e);n(a)},[t]),G=[{id:`inputForDeviceName`,placeholder:e===`english`?`Filter by Device Name...`:`デバイス名前 フィルター`,name:e===`english`?`Device Name`:`デバイス名前`},{id:`inputForDate`,placeholder:e===`english`?`Filter by Date`:`年月日 フィルター`,name:e===`english`?`Date`:`年月日`,canHide:!0,showFieldText:e===`english`?`Show Date Input`:`年月日 みる`}],J=[{id:`dropdownForStatus`,buttonText:e===`english`?`Status`:`ステータス`,list:e===`english`?a:c,buttonIcon:`Camera`,optionType:`checkbox`,loadingText:e===`english`?`Loading Status ...`:v,searchPlaceholder:e===`english`?`Status...`:`ステータス...`,searchResultText:e===`english`?x:l,emptyResultText:e===`english`?p:b,onResetCallback:k,onCancelCallback:N,hasReset:!0,hasApply:!0,resetText:e===`english`?`Reset`:`リセット`,cancelText:e===`english`?`Cancel`:`キャンセル`,closeText:e===`english`?`Close`:`閉じる`,applyText:e===`english`?`Apply`:`適用`,descendingText:e===`english`?`Descending`:`降順`,ascendingText:e===`english`?`Ascending`:`昇順`,isListAscending:!0,hasOptionsFilter:!0},{id:`priceFilter`,canHide:!0,buttonText:e===`english`?`Cost`:`価格`,list:e===`english`?y:te,buttonIcon:`Usage`,optionType:`radio`,loadingText:e===`english`?`Loading Cost...`:v,searchPlaceholder:e===`english`?`Cost...`:`価格...`,searchResultText:e===`english`?x:l,emptyResultText:e===`english`?p:b,onResetCallback:F,onCancelCallback:I,hasReset:!0,hasApply:!0,resetText:e===`english`?`Reset`:`リセット`,cancelText:e===`english`?`Cancel`:`キャンセル`,closeText:e===`english`?`Close`:`閉じる`,applyText:e===`english`?`Apply`:`適用`,descendingText:e===`english`?`Descending`:`降順`,ascendingText:e===`english`?`Ascending`:`昇順`,isListAscending:!0,hasOptionsFilter:!0}],Z=[{id:`datePickerForRuntime`,dateMode:`interval`,buttonText:e===`english`?`Date Range`:`日付範囲`,buttonIcon:`DateTime`,dateTimeTextUpper:e===`english`?`From`:`から`,dateTimeTextLower:e===`english`?`To`:`まで`,timeZoneTitle:e===`english`?`Timezone`:`時間帯`,cancelText:e===`english`?`Cancel`:`キャンセル`,applyText:e===`english`?`Apply`:`完了`,lang:e===`english`?`en`:`ja`,selected:M,availableRange:j,contentDays:A,hasApply:O}];(0,V.object)(`Search Filters`,G),(0,V.object)(`DropdownFilters`,J),(0,V.object)(`DatePickers`,Z);let Q=W(`onChangeCallback`),$=(0,H.useCallback)(t=>{Q(t);let i=P(e===`english`?_:r,`deviceName`,!0),a=[...i];if(t.length===0)n(i),S([]);else{let e=X(t,a);n(e),S(t)}},[Q,e]);return(0,H.useEffect)(()=>{let t=P(e===`english`?_:r,`deviceName`,!0),i=X(g,t);n(i)},[g,e]),(0,H.useEffect)(()=>{m(z(t))},[t]),(0,U.jsxs)(K,{children:[(0,U.jsx)(C,{singleFilter:w,hasShowMore:E,searchersConfig:G,dropdownsConfig:J,datePickersConfig:Z,onChangeCallback:$,totalResults:s.length,showMoreText:e===`english`?u:o,showLessText:e===`english`?i:ie,filtersTitle:e===`english`?`Filters`:`フィルター`,resultTextTemplate:e===`english`?d:re,clearText:e===`english`?ne:ee,resultsDateFormat:D}),(0,U.jsx)(q,{children:(0,U.jsx)(T,{selectCallback:L,toggleAllCallback:R,rows:s,sortCallback:B,columnConfig:e===`english`?h:f,hasStatus:!0,selectable:!0,hasThumbnail:!0,hasTypeIcon:!0,defaultAscending:!0,hasHeaderGroups:!0})})]})},Q=[`_FilterBar`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source},description:{story:`Filter Bar Story Starts`,...Z.parameters?.docs?.description}}}})))()}$();export{Z as _FilterBar,Q as __namedExportsOrder,G as default};