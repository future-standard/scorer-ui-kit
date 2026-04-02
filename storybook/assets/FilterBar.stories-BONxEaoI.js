import{d as i,r as o,j as T,W as X,f as $,S as h,a as _}from"./iframe-BQPDKgpJ.js";import{e as f,b as k,s as S,a as F,g as A,o as ee,p as ae,q as te,t as se,k as ne,m as le,r as oe,n as ie,f as re,h as ce,i as ge,j as de,u as he,v as pe,w as D,x as I}from"./data_samples-CN1iUX41.js";import{r as v,s as c,f as ue,a as Te,b as me,c as De,d as be}from"./sample_table_helpers-CCJBIzXE.js";import{a as ye,d as xe,I as we}from"./datePicker_sample-C5PvquPq.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";import"./placeholder-BcVwUhHh.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,Pe={title:"Filters/Organism",component:"FilterBar",decorators:[]},Ce=_.div`
  margin: 20px;
`,Re=_.div`
margin: 60px 0 20px 0
`,P=new Date;P.setDate(P.getDate()-5);const E=c(D,"deviceName",!0),J=(e,r)=>Array.isArray(e)&&e.length>0?e.reduce((t,a)=>a.selected===null?t:a.id==="dropdownForStatus"&&(h(a.selected)||Array.isArray(a.selected))?ue(t,a.selected):a.id==="priceFilter"&&h(a.selected)?Te(t,a.selected):a.id==="inputForDeviceName"&&h(a.selected)?me(t,a.selected):a.id==="inputForDate"&&h(a.selected)?De(t,a.selected):a.id==="datePickerForRuntime"&&!h(a.selected)&&!Array.isArray(a.selected)?be(t,a.selected):t,r):r,g=()=>{const e=i.select("Language",{English:"english",Japanese:"japanese"},"japanese"),[r,d]=o.useState(E),[t,a]=o.useState(v(E)),[b,y]=o.useState([]),H=i.boolean("Single Filter",!1),O=i.boolean("Has Show More",!0),V=i.text("Results date format","yyyy-MM-dd HH:mm"),K=i.boolean("Datepicker has Apply",!0),z=p("Status Reset was pressed"),U=p("Status Cancel was pressed"),W=p("Price Reset was pressed"),G=p("Price Cancel pressed"),Z=o.useCallback((s,n)=>{const l=[...t],u=l.findIndex(m=>m.id===n);l[u]._checked=s,a(l)},[t,a]),q=o.useCallback(s=>{const n=[...t];n.forEach(l=>{l._checked=s}),a(n)},[t,a]),Y=o.useCallback((s,n)=>{const l=[...r],m=c(l,n,s);d(m)},[r]),x=[{id:"inputForDeviceName",placeholder:e==="english"?"Filter by Device Name...":"デバイス名前 フィルター",name:e==="english"?"Device Name":"デバイス名前"},{id:"inputForDate",placeholder:e==="english"?"Filter by Date":"年月日 フィルター",name:e==="english"?"Date":"年月日",canHide:!0,showFieldText:e==="english"?"Show Date Input":"年月日 みる"}],w=[{id:"dropdownForStatus",buttonText:e==="english"?"Status":"ステータス",list:e==="english"?ee:ae,buttonIcon:"Camera",optionType:"checkbox",loadingText:e==="english"?"Loading Status ...":A,searchPlaceholder:e==="english"?"Status...":"ステータス...",searchResultText:e==="english"?S:F,emptyResultText:e==="english"?f:k,onResetCallback:z,onCancelCallback:U,hasReset:!0,hasApply:!0,resetText:e==="english"?"Reset":"リセット",cancelText:e==="english"?"Cancel":"キャンセル",closeText:e==="english"?"Close":"閉じる",applyText:e==="english"?"Apply":"適用",descendingText:e==="english"?"Descending":"降順",ascendingText:e==="english"?"Ascending":"昇順",isListAscending:!0,hasOptionsFilter:!0},{id:"priceFilter",canHide:!0,buttonText:e==="english"?"Cost":"価格",list:e==="english"?te:se,buttonIcon:"Usage",optionType:"radio",loadingText:e==="english"?"Loading Cost...":A,searchPlaceholder:e==="english"?"Cost...":"価格...",searchResultText:e==="english"?S:F,emptyResultText:e==="english"?f:k,onResetCallback:W,onCancelCallback:G,hasReset:!0,hasApply:!0,resetText:e==="english"?"Reset":"リセット",cancelText:e==="english"?"Cancel":"キャンセル",closeText:e==="english"?"Close":"閉じる",applyText:e==="english"?"Apply":"適用",descendingText:e==="english"?"Descending":"降順",ascendingText:e==="english"?"Ascending":"昇順",isListAscending:!0,hasOptionsFilter:!0}],C=[{id:"datePickerForRuntime",dateMode:"interval",buttonText:e==="english"?"Date Range":"日付範囲",buttonIcon:"DateTime",dateTimeTextUpper:e==="english"?"From":"から",dateTimeTextLower:e==="english"?"To":"まで",timeZoneTitle:e==="english"?"Timezone":"時間帯",cancelText:e==="english"?"Cancel":"キャンセル",applyText:e==="english"?"Apply":"完了",lang:e==="english"?"en":"ja",selected:we,availableRange:xe,contentDays:ye,hasApply:K}];i.object("Search Filters",x),i.object("DropdownFilters",w),i.object("DatePickers",C);const R=p("onChangeCallback"),Q=o.useCallback(s=>{R(s);const n=e==="english"?c(D,"deviceName",!0):c(I,"deviceName",!0),l=[...n];if(s.length===0)d(n),y([]);else{const u=J(s,l);d(u),y(s)}},[R,e]);return o.useEffect(()=>{const s=e==="english"?c(D,"deviceName",!0):c(I,"deviceName",!0),n=J(b,s);d(n)},[b,e]),o.useEffect(()=>{a(v(r))},[r]),T.jsxs(Ce,{children:[T.jsx(X,{singleFilter:H,hasShowMore:O,searchersConfig:x,dropdownsConfig:w,datePickersConfig:C,onChangeCallback:Q,totalResults:t.length,showMoreText:e==="english"?ge:de,showLessText:e==="english"?re:ce,filtersTitle:e==="english"?"Filters":"フィルター",resultTextTemplate:e==="english"?oe:ie,clearText:e==="english"?ne:le,resultsDateFormat:V}),T.jsx(Re,{children:T.jsx($,{selectCallback:Z,toggleAllCallback:q,rows:t,sortCallback:Y,columnConfig:e==="english"?he:pe,hasStatus:!0,selectable:!0,hasThumbnail:!0,hasTypeIcon:!0,defaultAscending:!0,hasHeaderGroups:!0})})]})};g.__docgenInfo={description:"Filter Bar Story Starts",methods:[],displayName:"_FilterBar"};var L,B,M,j,N;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const language = select("Language", {
    English: 'english',
    Japanese: "japanese"
  }, "japanese");
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
  const handleStatusReset = action("Status Reset was pressed");
  const handleStatusCancel = action("Status Cancel was pressed");
  const handlePriceReset = action("Price Reset was pressed");
  const handlePriceCancel = action("Price Cancel pressed");

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {
    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id);
    newRows[targetRowIndex]._checked = checked;
    setRows(newRows);
  }, [rows, setRows]);
  const toggleAllCallback = useCallback((checked: boolean) => {
    const newRows = [...rows];
    newRows.forEach(row => {
      row._checked = checked;
    });
    setRows(newRows);
  }, [rows, setRows]);
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const searchersConfig = object('Search Filters', searchers);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dropdownsConfig = object('DropdownFilters', dropdowns);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const datePickersConfig = object('DatePickers', datePickers);
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
}`,...(M=(B=g.parameters)==null?void 0:B.docs)==null?void 0:M.source},description:{story:"Filter Bar Story Starts",...(N=(j=g.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};const Ee=["_FilterBar"];export{g as _FilterBar,Ee as __namedExportsOrder,Pe as default};
