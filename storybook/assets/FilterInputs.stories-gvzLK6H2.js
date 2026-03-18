import{j as m}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as a}from"./index-DnkWte70.js";import{c as P}from"./styled-components.browser.esm-CarAhzHj.js";import{d as S}from"./index-C-6Xbh3D.js";import{a as _}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{s as Z,t as z,v as f}from"./index.modern-CLl990BG.js";import{s as L,a as R,c as G,d as q,l as M,g as j,f as B,h as K,i as Q,j as U,k as W,m as X,r as Y,n as $}from"./data_samples-CN1iUX41.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const me={title:"Filters/molecules",component:"FilterInputs",decorators:[]},ee=P.div``,te=[{text:"Adipiscing",value:"Adipiscing"},{text:"Amet",value:"Amet"},{text:"Consectetur",value:"Consectetur"},{text:"Dolor sit",value:"Dolor sit"},{text:"Lorem ipsum",value:"Lorem ipsum"},{text:"Vestibulum",value:"Vestibulum"}],le=[{text:"Ramen",value:0},{text:"Takoyaki",value:1},{text:"Gyoza",value:2},{text:"Tempura",value:3},{text:"Sushi",value:4}],ae=[{text:"ラーメン",value:0},{text:"蛸焼き",value:1},{text:"餃子",value:2},{text:"天婦羅",value:3},{text:"すし",value:4}],se=(e,n)=>{const o=[];return n.forEach(t=>{if(t.value!==""&&(typeof t.value=="string"||typeof t.value=="number")){const s=typeof t.value=="number"?t.value.toString():t.value;o.push({filterId:t.id,item:{text:s,value:s},filterName:t.name,type:"search"})}}),e.forEach(t=>{if(t.selected!==null){if(f(t.selected)){o.push({filterId:t.id,item:t.selected,icon:t.buttonIcon,type:"dropdown"});return}Array.isArray(t.selected)&&t.selected.forEach(s=>{o.push({filterId:t.id,item:s,icon:t.buttonIcon,type:"dropdown"})})}}),o},ne=(e,n)=>f(e)&&f(n)?n.value!==e.value:!0,h=()=>{const e=S.select("Language",{English:"english",Japanese:"japanese"},"japanese"),n=S.boolean("Has ShowMore",!0),o=S.number("Total Results",6),t=_("food selection"),[s,x]=a.useState(null),[F,T]=a.useState(null),[v,b]=a.useState(""),[y,I]=a.useState(""),[E,C]=a.useState(""),w=a.useCallback(l=>{t(l),x(l)},[t]),V=a.useCallback(l=>{T(l)},[]),r=a.useCallback((l,i)=>{const u=l===null?"":l;i==="search1"&&b(u),i==="search2"&&I(u),i==="search3"&&C(u)},[]),g=a.useMemo(()=>[{id:"category1",buttonText:"Department",buttonIcon:"MetaCategories",list:te,loadingText:e==="english"?M:j,searchPlaceholder:e==="english"?G:q,searchResultText:e==="english"?L:R,onSelect:V,selected:F},{id:"food",canHide:!0,buttonText:e==="english"?"Menu":"メニュー",buttonIcon:"Zone",list:e==="english"?le:ae,loadingText:e==="english"?M:j,searchPlaceholder:e==="english"?"Menu options...":"メニュー...",searchResultText:e==="english"?L:R,optionType:"checkbox",onSelect:w,selected:s}],[F,V,w,e,s]),p=a.useMemo(()=>[{id:"search1",placeholder:e==="english"?"Filter by name...":"名前 フィルター",value:v,name:e==="english"?"Name filter":"名前 フィルター",onChange:l=>{r(l.target.value,"search1")}},{id:"search2",placeholder:e==="english"?"Filter by food":"食べ物 フィルター",canHide:!0,showFieldText:"Search by food",value:y,name:e==="english"?"Menu filter":"メニュー  フィルター",onChange:l=>{r(l.target.value,"search2")}},{id:"search3",placeholder:"Search by Item Id",showFieldText:"Search Example String Field",value:E,name:"Example",onChange:l=>{r(l.target.value,"search3")}}],[E,y,r,e,v]),A=se(g,p),H=a.useCallback(()=>{x(null),T(null),b(""),I(""),C("")},[]),O=a.useCallback((l,i,u)=>{if(i==="dropdown"){const c=g.find(d=>d.id===l);if(c&&c.onSelect){const d=Array.isArray(c.selected)?c.selected.filter(N=>ne(N,u)):null;c.onSelect(d)}}i==="search"&&p.find(d=>d.id===l)&&r("",l)},[g,r,p]);return m.jsxs(ee,{children:[m.jsx(Z,{searchFilters:p,dropdownFilters:g,hasShowMore:n,showMoreText:e==="english"?Q:U,showLessText:e==="english"?B:K}),m.jsx(z,{labelLists:A,totalResults:o,onClearAll:H,onRemoveFilter:O,resultTextTemplate:e==="english"?Y:$,clearText:e==="english"?W:X})]})};h.__docgenInfo={description:"",methods:[],displayName:"_FilterInputs"};var J,k,D;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const language = select("Language", {
    English: 'english',
    Japanese: "japanese"
  }, "japanese");
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
      if (foundFilter && foundFilter.onSelect) {
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
}`,...(D=(k=h.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const Se=["_FilterInputs"];export{h as _FilterInputs,Se as __namedExportsOrder,me as default};
