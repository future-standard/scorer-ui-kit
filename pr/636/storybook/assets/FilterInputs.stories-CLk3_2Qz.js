import{a as e,n as t}from"./chunk-BneVvdWh.js";import{E as n,Lt as r,O as i,Ot as a,Rt as o,bt as s,jt as c,kt as l,xt as u}from"./iframe-CqsWnfTx.js";import{C as d,E as f,S as p,T as m,_ as h,b as g,g as _,h as v,m as y,n as b,t as x,v as S,w as C,x as w,y as T}from"./data_samples-BPpc5FO9.js";var E,D,O,k,A,j,M,N,P,F,I,L,R;t((()=>{E=r(),D=e(o()),s(),l(),v(),O=a(),{action:k}=__STORYBOOK_MODULE_ACTIONS__,A={title:`Filters/molecules`,component:`FilterInputs`,decorators:[]},j=c.div``,M=[{text:`Adipiscing`,value:`Adipiscing`},{text:`Amet`,value:`Amet`},{text:`Consectetur`,value:`Consectetur`},{text:`Dolor sit`,value:`Dolor sit`},{text:`Lorem ipsum`,value:`Lorem ipsum`},{text:`Vestibulum`,value:`Vestibulum`}],N=[{text:`Ramen`,value:0},{text:`Takoyaki`,value:1},{text:`Gyoza`,value:2},{text:`Tempura`,value:3},{text:`Sushi`,value:4}],P=[{text:`ラーメン`,value:0},{text:`蛸焼き`,value:1},{text:`餃子`,value:2},{text:`天婦羅`,value:3},{text:`すし`,value:4}],F=(e,t)=>{let n=[];return t.forEach(e=>{if(e.value!==``&&(typeof e.value==`string`||typeof e.value==`number`)){let t=typeof e.value==`number`?e.value.toString():e.value;n.push({filterId:e.id,item:{text:t,value:t},filterName:e.name,type:`search`})}}),e.forEach(e=>{if(e.selected!==null){if(u(e.selected)){n.push({filterId:e.id,item:e.selected,icon:e.buttonIcon,type:`dropdown`});return}Array.isArray(e.selected)&&e.selected.forEach(t=>{n.push({filterId:e.id,item:t,icon:e.buttonIcon,type:`dropdown`})})}}),n},I=(e,t)=>u(e)&&u(t)?t.value!==e.value:!0,L=()=>{let e=(0,E.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,E.boolean)(`Has ShowMore`,!0),r=(0,E.number)(`Total Results`,6),a=k(`food selection`),[o,s]=(0,D.useState)(null),[c,l]=(0,D.useState)(null),[u,v]=(0,D.useState)(``),[A,L]=(0,D.useState)(``),[R,z]=(0,D.useState)(``),B=(0,D.useCallback)(e=>{a(e),s(e)},[a]),V=(0,D.useCallback)(e=>{l(e)},[]),H=(0,D.useCallback)((e,t)=>{let n=e===null?``:e;t===`search1`&&v(n),t===`search2`&&L(n),t===`search3`&&z(n)},[]),U=(0,D.useMemo)(()=>[{id:`category1`,buttonText:`Department`,buttonIcon:`MetaCategories`,list:M,loadingText:e===`english`?_:y,searchPlaceholder:e===`english`?T:g,searchResultText:e===`english`?w:p,onSelect:V,selected:c},{id:`food`,canHide:!0,buttonText:e===`english`?`Menu`:`メニュー`,buttonIcon:`Zone`,list:e===`english`?N:P,loadingText:e===`english`?_:y,searchPlaceholder:e===`english`?`Menu options...`:`メニュー...`,searchResultText:e===`english`?w:p,optionType:`checkbox`,onSelect:B,selected:o}],[c,V,B,e,o]),W=(0,D.useMemo)(()=>[{id:`search1`,placeholder:e===`english`?`Filter by name...`:`名前 フィルター`,value:u,name:e===`english`?`Name filter`:`名前 フィルター`,onChange:e=>{H(e.target.value,`search1`)}},{id:`search2`,placeholder:e===`english`?`Filter by food`:`食べ物 フィルター`,canHide:!0,showFieldText:`Search by food`,value:A,name:e===`english`?`Menu filter`:`メニュー  フィルター`,onChange:e=>{H(e.target.value,`search2`)}},{id:`search3`,placeholder:`Search by Item Id`,showFieldText:`Search Example String Field`,value:R,name:`Example`,onChange:e=>{H(e.target.value,`search3`)}}],[R,A,H,e,u]),G=F(U,W),K=(0,D.useCallback)(()=>{s(null),l(null),v(``),L(``),z(``)},[]),q=(0,D.useCallback)((e,t,n)=>{if(t===`dropdown`){let t=U.find(t=>t.id===e);if(t?.onSelect){let e=Array.isArray(t.selected)?t.selected.filter(e=>I(e,n)):null;t.onSelect(e)}}t===`search`&&W.find(t=>t.id===e)&&H(``,e)},[U,H,W]);return(0,O.jsxs)(j,{children:[(0,O.jsx)(n,{searchFilters:W,dropdownFilters:U,hasShowMore:t,showMoreText:e===`english`?m:f,showLessText:e===`english`?d:C}),(0,O.jsx)(i,{labelLists:G,totalResults:r,onClearAll:K,onRemoveFilter:q,resultTextTemplate:e===`english`?h:S,clearText:e===`english`?x:b})]})},L.__docgenInfo={description:``,methods:[],displayName:`_FilterInputs`},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const language = select('Language', {
    English: 'english',
    Japanese: 'japanese'
  }, 'japanese');
  const hasShowMore = boolean('Has ShowMore', true);
  const totalResults = number('Total Results', 6);
  const foodValue = action('food selection');
  const [selectedObj, setSelectedObj] = useState<IFilterValue>(null); // this could also start with values [{ text: 'Ramen', value: 0 }]
  const [categorySelected, setCategorySelected] = useState<IFilterValue>(null);
  const [nameVal, setNameVal] = useState('');
  const [foodSelected, setFoodSelected] = useState('');
  const [exampleSearch, setExampleSearch] = useState('');
  const handleSelectItemType = useCallback((newSelection: IFilterValue) => {
    foodValue(newSelection);
    setSelectedObj(newSelection);
  }, [foodValue]);
  const handleCategorySelected = useCallback((newSelection: IFilterValue) => {
    setCategorySelected(newSelection);
  }, []);
  const handleSearcher = useCallback((newValue: string | null, id: string) => {
    const validValue = newValue === null ? '' : newValue;
    if ('search1' === id) {
      setNameVal(validValue);
    }
    if ('search2' === id) {
      setFoodSelected(validValue);
    }
    if ('search3' === id) {
      setExampleSearch(validValue);
    }
  }, []);
  const dropdownFilters: IFilterDropdownExt[] = useMemo(() => [{
    id: 'category1',
    buttonText: 'Department',
    buttonIcon: 'MetaCategories',
    list: depList,
    loadingText: language === 'english' ? loadingTagsEnglish : genericLoadingJp,
    searchPlaceholder: language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese,
    searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
    onSelect: handleCategorySelected,
    selected: categorySelected
  }, {
    id: 'food',
    canHide: true,
    buttonText: language === 'english' ? 'Menu' : 'メニュー',
    buttonIcon: 'Zone',
    list: language === 'english' ? englishDataList : japaneseDataList,
    loadingText: language === 'english' ? loadingTagsEnglish : genericLoadingJp,
    searchPlaceholder: language === 'english' ? 'Menu options...' : 'メニュー...',
    searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
    optionType: 'checkbox',
    onSelect: handleSelectItemType,
    selected: selectedObj
  }], [categorySelected, handleCategorySelected, handleSelectItemType, language, selectedObj]);
  const searchFilters: ISearchFilter[] = useMemo(() => [{
    id: 'search1',
    placeholder: language === 'english' ? 'Filter by name...' : '名前 フィルター',
    value: nameVal,
    name: language === 'english' ? 'Name filter' : '名前 フィルター',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleSearcher(e.target.value, 'search1');
    }
  }, {
    id: 'search2',
    placeholder: language === 'english' ? 'Filter by food' : '食べ物 フィルター',
    canHide: true,
    showFieldText: 'Search by food',
    value: foodSelected,
    name: language === 'english' ? 'Menu filter' : 'メニュー  フィルター',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleSearcher(e.target.value, 'search2');
    }
  }, {
    id: 'search3',
    placeholder: 'Search by Item Id',
    showFieldText: 'Search Example String Field',
    value: exampleSearch,
    name: 'Example',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleSearcher(e.target.value, 'search3');
    }
  }], [exampleSearch, foodSelected, handleSearcher, language, nameVal]);
  const labelLists = generateResultsLabelData(dropdownFilters, searchFilters);
  const onClearAll = useCallback(() => {
    setSelectedObj(null);
    setCategorySelected(null);
    setNameVal('');
    setFoodSelected('');
    setExampleSearch('');
  }, []);
  const onRemoveFilter = useCallback((filterId: string, type: IFilterType, item: IFilterItem | Date | IDateInterval) => {
    if (type === 'dropdown') {
      const foundFilter = dropdownFilters.find(dropdown => dropdown.id === filterId);
      if (foundFilter?.onSelect) {
        const newSelected: IFilterValue = Array.isArray(foundFilter.selected) ? foundFilter.selected.filter((currentItem: IFilterItem) => isDifferentValue(currentItem, item)) : null;
        foundFilter.onSelect(newSelected);
      }
    }
    if (type === 'search') {
      const foundFilter = searchFilters.find(searcher => searcher.id === filterId);
      if (foundFilter) {
        handleSearcher('', filterId);
      }
    }
  }, [dropdownFilters, handleSearcher, searchFilters]);
  return <Container>
      <FilterInputs {...{
      searchFilters,
      dropdownFilters,
      hasShowMore
    }} showMoreText={language === 'english' ? showMoreEng : showMoreJp} showLessText={language === 'english' ? showLessEng : showLessJp} />
      <FiltersResults {...{
      labelLists,
      totalResults,
      onClearAll,
      onRemoveFilter
    }} resultTextTemplate={language === 'english' ? resultTextTemplateEng : resultTextTemplateJp} clearText={language === 'english' ? clearEng : clearJp} />
    </Container>;
}`,...L.parameters?.docs?.source}}},R=[`_FilterInputs`]}))();export{L as _FilterInputs,R as __namedExportsOrder,A as default};