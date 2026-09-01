import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,O as r,Rt as i,St as a,Tt as o,Wt as s,wt as c}from"./iframe-C0XmBt3X.js";import{i as l,n as u,r as d,t as f}from"./datePicker_sample-0Nw9EzmV.js";import{A as p,C as m,D as h,E as g,O as _,S as v,T as ee,_ as te,a as ne,f as y,h as b,i as x,k as S,m as C,n as w,o as T,p as E,s as D,t as O,v as k,w as re,x as A}from"./data_samples-DzVyjyFG.js";import{a as j,c as M,i as N,n as P,o as F,r as I,s as L,t as R}from"./sample_table_helpers-2E2H5ccK.js";import{n as z}from"./rolldown-runtime-DkW27tQK.js";var B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=z((()=>{B=s(),V=e(),c(),i(),b(),l(),F(),H=t(),{action:U}=__STORYBOOK_MODULE_ACTIONS__,W={title:`Filters/Organism`,component:`FilterBar`,decorators:[]},G=n.div`
  margin: 20px;
`,K=n.div`
margin: 60px 0 20px 0
`,q=new Date,q.setDate(q.getDate()-5),J=M(S,`deviceName`,!0),Y=(e,t)=>Array.isArray(e)&&e.length>0?e.reduce((e,t)=>t.selected===null?e:t.id===`dropdownForStatus`&&(o(t.selected)||Array.isArray(t.selected))?j(e,t.selected):t.id===`priceFilter`&&o(t.selected)?N(e,t.selected):t.id===`inputForDeviceName`&&o(t.selected)?I(e,t.selected):t.id===`inputForDate`&&o(t.selected)?R(e,t.selected):t.id===`datePickerForRuntime`&&!o(t.selected)&&!Array.isArray(t.selected)?P(e,t.selected):e,t):t,X=()=>{let e=(0,B.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),[t,n]=(0,V.useState)(J),[i,o]=(0,V.useState)(L(J)),[s,c]=(0,V.useState)([]),l=(0,B.boolean)(`Single Filter`,!1),b=(0,B.boolean)(`Has Show More`,!0),j=(0,B.text)(`Results date format`,`yyyy-MM-dd HH:mm`),N=(0,B.boolean)(`Datepicker has Apply`,!0),P=U(`Status Reset was pressed`),F=U(`Status Cancel was pressed`),I=U(`Price Reset was pressed`),R=U(`Price Cancel pressed`),z=(0,V.useCallback)((e,t)=>{let n=[...i],r=n.findIndex(e=>e.id===t);n[r]._checked=e,o(n)},[i]),W=(0,V.useCallback)(e=>{let t=[...i];t.forEach(t=>{t._checked=e}),o(t)},[i]),q=(0,V.useCallback)((e,r)=>{let i=[...t],a=M(i,r,e);n(a)},[t]),X=[{id:`inputForDeviceName`,placeholder:e===`english`?`Filter by Device Name...`:`デバイス名前 フィルター`,name:e===`english`?`Device Name`:`デバイス名前`},{id:`inputForDate`,placeholder:e===`english`?`Filter by Date`:`年月日 フィルター`,name:e===`english`?`Date`:`年月日`,canHide:!0,showFieldText:e===`english`?`Show Date Input`:`年月日 みる`}],Z=[{id:`dropdownForStatus`,buttonText:e===`english`?`Status`:`ステータス`,list:e===`english`?h:_,buttonIcon:`Camera`,optionType:`checkbox`,loadingText:e===`english`?`Loading Status ...`:C,searchPlaceholder:e===`english`?`Status...`:`ステータス...`,searchResultText:e===`english`?A:v,emptyResultText:e===`english`?y:E,onResetCallback:P,onCancelCallback:F,hasReset:!0,hasApply:!0,resetText:e===`english`?`Reset`:`リセット`,cancelText:e===`english`?`Cancel`:`キャンセル`,closeText:e===`english`?`Close`:`閉じる`,applyText:e===`english`?`Apply`:`適用`,descendingText:e===`english`?`Descending`:`降順`,ascendingText:e===`english`?`Ascending`:`昇順`,isListAscending:!0,hasOptionsFilter:!0},{id:`priceFilter`,canHide:!0,buttonText:e===`english`?`Cost`:`価格`,list:e===`english`?T:D,buttonIcon:`Usage`,optionType:`radio`,loadingText:e===`english`?`Loading Cost...`:C,searchPlaceholder:e===`english`?`Cost...`:`価格...`,searchResultText:e===`english`?A:v,emptyResultText:e===`english`?y:E,onResetCallback:I,onCancelCallback:R,hasReset:!0,hasApply:!0,resetText:e===`english`?`Reset`:`リセット`,cancelText:e===`english`?`Cancel`:`キャンセル`,closeText:e===`english`?`Close`:`閉じる`,applyText:e===`english`?`Apply`:`適用`,descendingText:e===`english`?`Descending`:`降順`,ascendingText:e===`english`?`Ascending`:`昇順`,isListAscending:!0,hasOptionsFilter:!0}],Q=[{id:`datePickerForRuntime`,dateMode:`interval`,buttonText:e===`english`?`Date Range`:`日付範囲`,buttonIcon:`DateTime`,dateTimeTextUpper:e===`english`?`From`:`から`,dateTimeTextLower:e===`english`?`To`:`まで`,timeZoneTitle:e===`english`?`Timezone`:`時間帯`,cancelText:e===`english`?`Cancel`:`キャンセル`,applyText:e===`english`?`Apply`:`完了`,lang:e===`english`?`en`:`ja`,selected:f,availableRange:d,contentDays:u,hasApply:N}];(0,B.object)(`Search Filters`,X),(0,B.object)(`DropdownFilters`,Z),(0,B.object)(`DatePickers`,Q);let $=U(`onChangeCallback`),ie=(0,V.useCallback)(t=>{$(t);let r=M(e===`english`?S:p,`deviceName`,!0),i=[...r];if(t.length===0)n(r),c([]);else{let e=Y(t,i);n(e),c(t)}},[$,e]);return(0,V.useEffect)(()=>{let t=M(e===`english`?S:p,`deviceName`,!0),r=Y(s,t);n(r)},[s,e]),(0,V.useEffect)(()=>{o(L(t))},[t]),(0,H.jsxs)(G,{children:[(0,H.jsx)(r,{singleFilter:l,hasShowMore:b,searchersConfig:X,dropdownsConfig:Z,datePickersConfig:Q,onChangeCallback:ie,totalResults:i.length,showMoreText:e===`english`?ee:g,showLessText:e===`english`?m:re,filtersTitle:e===`english`?`Filters`:`フィルター`,resultTextTemplate:e===`english`?te:k,clearText:e===`english`?O:w,resultsDateFormat:j}),(0,H.jsx)(K,{children:(0,H.jsx)(a,{selectCallback:z,toggleAllCallback:W,rows:i,sortCallback:q,columnConfig:e===`english`?x:ne,hasStatus:!0,selectable:!0,hasThumbnail:!0,hasTypeIcon:!0,defaultAscending:!0,hasHeaderGroups:!0})})]})},X.__docgenInfo={description:`Filter Bar Story Starts`,methods:[],displayName:`_FilterBar`},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source},description:{story:`Filter Bar Story Starts`,...X.parameters?.docs?.description}}},Z=[`_FilterBar`]})))()}Q();export{X as _FilterBar,Z as __namedExportsOrder,W as default};