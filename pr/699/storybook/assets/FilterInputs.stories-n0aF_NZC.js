import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,M as r,P as i,Rt as a,Tt as o,Wt as s,wt as c}from"./iframe-C-UcmyvH.js";import{C as l,E as u,S as d,T as f,_ as p,b as m,g as h,h as g,m as _,n as v,t as y,v as b,w as x,x as S,y as C}from"./data_samples-DzVyjyFG.js";import{n as w}from"./rolldown-runtime-DkW27tQK.js";var T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=w((()=>{T=s(),E=e(),c(),a(),g(),D=t(),{action:O}=__STORYBOOK_MODULE_ACTIONS__,k={title:`Filters/molecules`,component:`FilterInputs`,decorators:[]},A=n.div``,j=[{text:`Adipiscing`,value:`Adipiscing`},{text:`Amet`,value:`Amet`},{text:`Consectetur`,value:`Consectetur`},{text:`Dolor sit`,value:`Dolor sit`},{text:`Lorem ipsum`,value:`Lorem ipsum`},{text:`Vestibulum`,value:`Vestibulum`}],M=[{text:`Ramen`,value:0},{text:`Takoyaki`,value:1},{text:`Gyoza`,value:2},{text:`Tempura`,value:3},{text:`Sushi`,value:4}],N=[{text:`ラーメン`,value:0},{text:`蛸焼き`,value:1},{text:`餃子`,value:2},{text:`天婦羅`,value:3},{text:`すし`,value:4}],P=(e,t)=>{let n=[];return t.forEach(e=>{if(e.value!==``&&(typeof e.value==`string`||typeof e.value==`number`)){let t=typeof e.value==`number`?e.value.toString():e.value;n.push({filterId:e.id,item:{text:t,value:t},filterName:e.name,type:`search`})}}),e.forEach(e=>{if(e.selected!==null){if(o(e.selected)){n.push({filterId:e.id,item:e.selected,icon:e.buttonIcon,type:`dropdown`});return}Array.isArray(e.selected)&&e.selected.forEach(t=>{n.push({filterId:e.id,item:t,icon:e.buttonIcon,type:`dropdown`})})}}),n},F=(e,t)=>o(e)&&o(t)?t.value!==e.value:!0,I=()=>{let e=(0,T.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,T.boolean)(`Has ShowMore`,!0),n=(0,T.number)(`Total Results`,6),a=O(`food selection`),[o,s]=(0,E.useState)(null),[c,g]=(0,E.useState)(null),[w,k]=(0,E.useState)(``),[I,L]=(0,E.useState)(``),[R,z]=(0,E.useState)(``),B=(0,E.useCallback)(e=>{a(e),s(e)},[a]),V=(0,E.useCallback)(e=>{g(e)},[]),H=(0,E.useCallback)((e,t)=>{let n=e===null?``:e;t===`search1`&&k(n),t===`search2`&&L(n),t===`search3`&&z(n)},[]),U=(0,E.useMemo)(()=>[{id:`category1`,buttonText:`Department`,buttonIcon:`MetaCategories`,list:j,loadingText:e===`english`?h:_,searchPlaceholder:e===`english`?C:m,searchResultText:e===`english`?S:d,onSelect:V,selected:c},{id:`food`,canHide:!0,buttonText:e===`english`?`Menu`:`メニュー`,buttonIcon:`Zone`,list:e===`english`?M:N,loadingText:e===`english`?h:_,searchPlaceholder:e===`english`?`Menu options...`:`メニュー...`,searchResultText:e===`english`?S:d,optionType:`checkbox`,onSelect:B,selected:o}],[c,V,B,e,o]),W=(0,E.useMemo)(()=>[{id:`search1`,placeholder:e===`english`?`Filter by name...`:`名前 フィルター`,value:w,name:e===`english`?`Name filter`:`名前 フィルター`,onChange:e=>{H(e.target.value,`search1`)}},{id:`search2`,placeholder:e===`english`?`Filter by food`:`食べ物 フィルター`,canHide:!0,showFieldText:`Search by food`,value:I,name:e===`english`?`Menu filter`:`メニュー  フィルター`,onChange:e=>{H(e.target.value,`search2`)}},{id:`search3`,placeholder:`Search by Item Id`,showFieldText:`Search Example String Field`,value:R,name:`Example`,onChange:e=>{H(e.target.value,`search3`)}}],[R,I,H,e,w]),G=P(U,W),K=(0,E.useCallback)(()=>{s(null),g(null),k(``),L(``),z(``)},[]),q=(0,E.useCallback)((e,t,n)=>{if(t===`dropdown`){let t=U.find(t=>t.id===e);if(t?.onSelect){let e=Array.isArray(t.selected)?t.selected.filter(e=>F(e,n)):null;t.onSelect(e)}}t===`search`&&W.find(t=>t.id===e)&&H(``,e)},[U,H,W]);return(0,D.jsxs)(A,{children:[(0,D.jsx)(r,{searchFilters:W,dropdownFilters:U,hasShowMore:t,showMoreText:e===`english`?f:u,showLessText:e===`english`?l:x}),(0,D.jsx)(i,{labelLists:G,totalResults:n,onClearAll:K,onRemoveFilter:q,resultTextTemplate:e===`english`?p:b,clearText:e===`english`?y:v})]})},I.__docgenInfo={description:``,methods:[],displayName:`_FilterInputs`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L=[`_FilterInputs`]})))()}R();export{I as _FilterInputs,L as __namedExportsOrder,k as default};