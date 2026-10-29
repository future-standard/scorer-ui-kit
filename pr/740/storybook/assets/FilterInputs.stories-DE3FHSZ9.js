import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{C as r,E as i,M as a,S as o,T as s,_ as c,b as l,g as u,h as d,j as f,m as p,n as m,t as h,v as g,w as _,x as v,y}from"./data_samples-D4tf1liw.js";import{i as b,n as x,r as S,t as C}from"./FiltersResults-BJa5Zky-.js";import{_ as w,a as T,o as E}from"./iframe-B9mgqNTy.js";var D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{D=w(),O=t(),b(),x(),f(),E(),d(),k=n(),{action:A}=__STORYBOOK_MODULE_ACTIONS__,j={title:`Filters/molecules`,component:`FilterInputs`,decorators:[]},M=T.div``,N=[{text:`Adipiscing`,value:`Adipiscing`},{text:`Amet`,value:`Amet`},{text:`Consectetur`,value:`Consectetur`},{text:`Dolor sit`,value:`Dolor sit`},{text:`Lorem ipsum`,value:`Lorem ipsum`},{text:`Vestibulum`,value:`Vestibulum`}],P=[{text:`Ramen`,value:0},{text:`Takoyaki`,value:1},{text:`Gyoza`,value:2},{text:`Tempura`,value:3},{text:`Sushi`,value:4}],F=[{text:`ラーメン`,value:0},{text:`蛸焼き`,value:1},{text:`餃子`,value:2},{text:`天婦羅`,value:3},{text:`すし`,value:4}],I=(e,t)=>{let n=[];return t.forEach(e=>{if(e.value!==``&&(typeof e.value==`string`||typeof e.value==`number`)){let t=typeof e.value==`number`?e.value.toString():e.value;n.push({filterId:e.id,item:{text:t,value:t},filterName:e.name,type:`search`})}}),e.forEach(e=>{if(e.selected!==null){if(a(e.selected)){n.push({filterId:e.id,item:e.selected,icon:e.buttonIcon,type:`dropdown`});return}Array.isArray(e.selected)&&e.selected.forEach(t=>{n.push({filterId:e.id,item:t,icon:e.buttonIcon,type:`dropdown`})})}}),n},L=(e,t)=>a(e)&&a(t)?t.value!==e.value:!0,R=()=>{let e=(0,D.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,D.boolean)(`Has ShowMore`,!0),n=(0,D.number)(`Total Results`,6),a=A(`food selection`),[d,f]=(0,O.useState)(null),[b,x]=(0,O.useState)(null),[w,T]=(0,O.useState)(``),[E,j]=(0,O.useState)(``),[R,z]=(0,O.useState)(``),B=(0,O.useCallback)(e=>{a(e),f(e)},[a]),V=(0,O.useCallback)(e=>{x(e)},[]),H=(0,O.useCallback)((e,t)=>{let n=e===null?``:e;t===`search1`&&T(n),t===`search2`&&j(n),t===`search3`&&z(n)},[]),U=(0,O.useMemo)(()=>[{id:`category1`,buttonText:`Department`,buttonIcon:`MetaCategories`,list:N,loadingText:e===`english`?u:p,searchPlaceholder:e===`english`?y:l,searchResultText:e===`english`?v:o,onSelect:V,selected:b},{id:`food`,canHide:!0,buttonText:e===`english`?`Menu`:`メニュー`,buttonIcon:`Zone`,list:e===`english`?P:F,loadingText:e===`english`?u:p,searchPlaceholder:e===`english`?`Menu options...`:`メニュー...`,searchResultText:e===`english`?v:o,optionType:`checkbox`,onSelect:B,selected:d}],[b,V,B,e,d]),W=(0,O.useMemo)(()=>[{id:`search1`,placeholder:e===`english`?`Filter by name...`:`名前 フィルター`,value:w,name:e===`english`?`Name filter`:`名前 フィルター`,onChange:e=>{H(e.target.value,`search1`)}},{id:`search2`,placeholder:e===`english`?`Filter by food`:`食べ物 フィルター`,canHide:!0,showFieldText:`Search by food`,value:E,name:e===`english`?`Menu filter`:`メニュー  フィルター`,onChange:e=>{H(e.target.value,`search2`)}},{id:`search3`,placeholder:`Search by Item Id`,showFieldText:`Search Example String Field`,value:R,name:`Example`,onChange:e=>{H(e.target.value,`search3`)}}],[R,E,H,e,w]),G=I(U,W),K=(0,O.useCallback)(()=>{f(null),x(null),T(``),j(``),z(``)},[]),q=(0,O.useCallback)((e,t,n)=>{if(t===`dropdown`){let t=U.find(t=>t.id===e);if(t?.onSelect){let e=Array.isArray(t.selected)?t.selected.filter(e=>L(e,n)):null;t.onSelect(e)}}t===`search`&&W.find(t=>t.id===e)&&H(``,e)},[U,H,W]);return(0,k.jsxs)(M,{children:[(0,k.jsx)(S,{searchFilters:W,dropdownFilters:U,hasShowMore:t,showMoreText:e===`english`?s:i,showLessText:e===`english`?r:_}),(0,k.jsx)(C,{labelLists:G,totalResults:n,onClearAll:K,onRemoveFilter:q,resultTextTemplate:e===`english`?c:g,clearText:e===`english`?h:m})]})},z=[`_FilterInputs`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}}})))()}B();export{R as _FilterInputs,z as __namedExportsOrder,j as default};