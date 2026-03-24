import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as l}from"./index-Dh2lLoQQ.js";import{c as b}from"./styled-components.browser.esm-D8a0uvnT.js";import{d as s}from"./index-BtgrC99a.js";import{a as m}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{p as n,q as u}from"./index.modern-BCxVMgPd.js";import{l as g,g as p,s as T,a as y,e as G,b as K}from"./data_samples-CN1iUX41.js";import{g as Q}from"./index-CTv9zpMR.js";import"./iframe-CQb0CZlC.js";import"./v4-CtRu48qb.js";import"./index-Dz_aA26r.js";const Te={title:"Filters/molecules/FilterDropdown",component:n,decorators:[]},U=b.div``,X=b.div``,x=b.div`
  margin: 100px;
  display: inline-block;
`,Z=[{text:"Ramen",value:0},{text:"Takoyaki",value:1},{text:"Gyoza",value:2},{text:"Tempura",value:3},{text:"Sushi",value:4},{text:"Natto",value:5},{text:"Sashimi",value:6}],$=[{text:"ラーメン",value:0},{text:"蛸焼き",value:1},{text:"餃子",value:2},{text:"天婦羅",value:3},{text:"すし",value:4},{text:"納豆",value:5},{text:"お造り",value:6}],ee=[{text:"Super Spicy",value:0},{text:"Spicy",value:1},{text:"Mild",value:2},{text:"Sweet",value:3}],te=[{text:"超辛い",value:0},{text:"辛い",value:1},{text:"中華い",value:2},{text:"甘口",value:3}],ae=[{text:"1900",value:1900},{text:"1910",value:1920},{text:"1930",value:1930},{text:"1950",value:1950},{text:"1960",value:1960},{text:"1970",value:1970},{text:"1980",value:1980},{text:"1990",value:1990},{text:"2000",value:2e3},{text:"2010",value:2010},{text:"2020",value:2020}],le=[{text:"Card",value:0},{text:"Cash",value:1},{text:"IC Card",value:2}],se=[{text:"カード",value:0},{text:"現金",value:1},{text:"IC カード",value:2}],ne=[{text:"Adipiscing",value:0},{text:"Amet",value:1},{text:"Consectetur",value:2},{text:"Dolor sit",value:3},{text:"Lorem ipsum",value:4},{text:"Vestibulum",value:5},{text:"Minim Veniam",value:6},{text:"Consequat",value:7},{text:"Fugiat Nulla",value:8}],S=()=>{const v=Q(),e=s.select("Language",{English:"english",Japanese:"japanese"},"japanese"),C=s.text("Text","Department"),i=s.select("Button Icon",v,v.MetaCategories),o=s.boolean("disable",!1),c=s.boolean("Is Loading",!1),r=s.select("Design type",{Default:"default",Basic:"basic"},"default"),P=s.select("Option Type",{text:"text",checkbox:"checkbox",radio:"radio"},"checkbox"),h=s.text("Loading Text","Loading Tags..."),d=s.number("Max Displayed Items",6),L=m("Currently Selected"),j=m("Food selected"),I=m("Spicy level"),F=m("Payment type"),D=m("Years"),[O,A]=l.useState(null),[W,J]=l.useState(null),[M,B]=l.useState(e==="english"?{text:"Card",value:0}:{text:"カード",value:0}),[E,V]=l.useState([{text:"1990",value:1990}]),[N,H]=l.useState(null),Y=l.useCallback(a=>{j(a),A(a)},[j]),_=l.useCallback(a=>{I(a),J(a)},[I]),k=l.useCallback(a=>{D(a),V(a)},[D]),q=l.useCallback(a=>{F(a),B(a)},[F]),z=l.useCallback(a=>{L(a),H(a)},[L]);return t.jsxs(U,{children:[t.jsxs(x,{children:[t.jsx(u,{title:"Base Example",introductionText:"This example doesn't have filter for options."}),t.jsx(n,{disabled:o,isLoading:c,buttonText:C,maxDisplayedItems:d,buttonIcon:i,design:r,list:ne,onSelect:z,optionType:"checkbox",selected:N,loadingText:e==="english"?g:p})]},"eje-0"),t.jsxs(x,{children:[t.jsx(u,{title:"Data Object",introductionText:"Array of IFilterList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]"}),t.jsx(n,{buttonIcon:i,disabled:o,isLoading:c,design:r,loadingText:h,maxDisplayedItems:d,list:e==="english"?Z:$,buttonText:e==="english"?"Menu":"メニュー",selected:O,optionType:P,onSelect:Y,searchResultText:e==="english"?T:y,searchPlaceholder:e==="english"?"Menu options...":"メニュー...",loadingText:e==="english"?g:p,hasOptionsFilter:!0})]},"eje-1"),t.jsx(X,{}),t.jsxs(x,{children:[t.jsx(u,{title:"Text type",introductionText:"."}),t.jsx(n,{buttonIcon:i,disabled:o,isLoading:c,design:r,loadingText:h,maxDisplayedItems:d,list:e==="english"?ee:te,buttonText:e==="english"?"Spice level":"ピリ辛",selected:W,onSelect:_,optionType:"text",loadingText:e==="english"?g:p,searchResultText:e==="english"?T:y,searchPlaceholder:e==="english"?"Spice options...":"ピリ辛...",hasOptionsFilter:!0})]},"eje-2"),t.jsxs(x,{children:[t.jsx(u,{title:"Radio type",introductionText:"."}),t.jsx(n,{buttonIcon:i,disabled:o,isLoading:c,design:r,loadingText:h,maxDisplayedItems:d,list:e==="english"?le:se,buttonText:e==="english"?"Pay Method":"支払方法",selected:M,onSelect:q,optionType:"radio",loadingText:e==="english"?g:p,searchResultText:e==="english"?T:y,searchPlaceholder:e==="english"?"Pay Methods...":"支払方法...",hasOptionsFilter:!0})]},"eje-3"),t.jsxs(x,{children:[t.jsx(u,{title:"Checkbox type",introductionText:"Array of IFilterList with numbers [{text: '1900', value:1910}, {text:'1910', value: 1910}]"}),t.jsx(n,{buttonIcon:i,disabled:o,isLoading:c,design:r,loadingText:h,maxDisplayedItems:d,buttonText:e==="english"?"Year":"年",selected:E,list:ae,onSelect:k,optionType:"checkbox",loadingText:e==="english"?g:p,searchPlaceholder:e==="english"?"Years...":"2020...",searchResultText:e==="english"?T:y,hasOptionsFilter:!0})]},"eje-4"),t.jsxs(x,{children:[t.jsx(u,{title:"Empty Example",introductionText:"Empty list is been sent."}),t.jsx(n,{buttonIcon:i,disabled:o,isLoading:c,design:r,loadingText:h,maxDisplayedItems:d,buttonText:e==="english"?"Tags":"タグー",selected:E,list:[],onSelect:k,optionType:"checkbox",loadingText:e==="english"?g:p,searchPlaceholder:e==="english"?"Filter tags…":"フィルタータグ...",searchResultText:e==="english"?T:y,emptyResultText:e==="english"?G:K,hasOptionsFilter:!0})]},"eje-5")]})};S.__docgenInfo={description:"",methods:[],displayName:"MultipleDropdownExamples"};var w,R,f;S.parameters={...S.parameters,docs:{...(w=S.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const language = select("Language", {
    English: 'english',
    Japanese: "japanese"
  }, "japanese");
  const buttonText = text('Text', 'Department');
  const buttonIcon = select("Button Icon", iconList, iconList['MetaCategories']);
  const disabled = boolean('disable', false);
  const isLoading = boolean('Is Loading', false);
  const design = select('Design type', {
    Default: 'default',
    Basic: 'basic'
  }, 'default');
  const optionType = select("Option Type", {
    text: "text",
    checkbox: "checkbox",
    radio: "radio"
  }, "checkbox");
  const loadingText = text('Loading Text', 'Loading Tags...');
  const maxDisplayedItems = number('Max Displayed Items', 6);
  const selectedItems = action('Currently Selected');
  const foodSelection = action('Food selected');
  const spiceAction = action('Spicy level');
  const paymentAction = action('Payment type');
  const yearAction = action('Years');
  const [selectedObj, setSelectedObj] = useState<IFilterValue>(null); // this could also start with values [{ text: 'Ramen', value: 0 }]
  const [textArraySelected, setTextArraySelected] = useState<IFilterValue>(null); // this could also start with values ['Spicy','Sweet']
  const [wordSelected, setWordSelected] = useState<IFilterValue>(language === 'english' ? {
    text: 'Card',
    value: 0
  } : {
    text: 'カード',
    value: 0
  }); // this could also start with value 'Card' or null
  const [numberSelected, setNumberSelected] = useState<IFilterValue>([{
    text: '1990',
    value: 1990
  }]); // this could also start with value 1990 or null
  const [baseSelected, setBaseSelected] = useState<IFilterValue>(null);
  const handleSelectItemType = useCallback((newSelection: IFilterValue) => {
    foodSelection(newSelection);
    setSelectedObj(newSelection);
  }, [foodSelection]);
  const handleTextListSelect = useCallback((newSelection: IFilterValue) => {
    spiceAction(newSelection);
    setTextArraySelected(newSelection);
  }, [spiceAction]);
  const handleNumberListSelect = useCallback((newSelection: IFilterValue) => {
    yearAction(newSelection);
    setNumberSelected(newSelection);
  }, [yearAction]);
  const handleWordSelect = useCallback((newSelection: IFilterValue) => {
    paymentAction(newSelection);
    setWordSelected(newSelection);
  }, [paymentAction]);
  const handleBaseExample = useCallback((newSelection: IFilterValue) => {
    selectedItems(newSelection);
    setBaseSelected(newSelection);
  }, [selectedItems]);
  return <Content>
    <Wrapper key='eje-0'>
      <PageHeader title='Base Example' introductionText="This example doesn't have filter for options." />
      <FilterDropdown {...{
        disabled,
        isLoading,
        buttonText,
        maxDisplayedItems,
        buttonIcon,
        design
      }} list={baseExample} onSelect={handleBaseExample} optionType='checkbox' selected={baseSelected} loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp} />
    </Wrapper>
    <Wrapper key='eje-1'>
      <PageHeader title='Data Object' introductionText="Array of IFilterList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]" />
      <FilterDropdown {...{
        buttonIcon,
        disabled,
        isLoading,
        design,
        loadingText,
        maxDisplayedItems
      }} list={language === 'english' ? englishDataList : japaneseDataList} buttonText={language === 'english' ? 'Menu' : 'メニュー'} selected={selectedObj} optionType={optionType} onSelect={handleSelectItemType} searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese} searchPlaceholder={language === 'english' ? 'Menu options...' : 'メニュー...'} loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp} hasOptionsFilter />
    </Wrapper>
    <Divider />
    <Wrapper key='eje-2'>
      <PageHeader title='Text type' introductionText="." />
      <FilterDropdown {...{
        buttonIcon,
        disabled,
        isLoading,
        design,
        loadingText,
        maxDisplayedItems
      }} list={language === 'english' ? englishTextList : japaneseTextList} buttonText={language === 'english' ? 'Spice level' : 'ピリ辛'} selected={textArraySelected} onSelect={handleTextListSelect} optionType='text' loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp} searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese} searchPlaceholder={language === 'english' ? 'Spice options...' : 'ピリ辛...'} hasOptionsFilter />
    </Wrapper>
    <Wrapper key='eje-3'>
      <PageHeader title='Radio type' introductionText="." />
      <FilterDropdown {...{
        buttonIcon,
        disabled,
        isLoading,
        design,
        loadingText,
        maxDisplayedItems
      }} list={language === 'english' ? englishPayList : japanesePayList} buttonText={language === 'english' ? 'Pay Method' : '支払方法'} selected={wordSelected} onSelect={handleWordSelect} optionType='radio' loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp} searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese} searchPlaceholder={language === 'english' ? 'Pay Methods...' : '支払方法...'} hasOptionsFilter />
    </Wrapper>
    <Wrapper key='eje-4'>
      <PageHeader title='Checkbox type' introductionText="Array of IFilterList with numbers [{text: '1900', value:1910}, {text:'1910', value: 1910}]" />
      <FilterDropdown {...{
        buttonIcon,
        disabled,
        isLoading,
        design,
        loadingText,
        maxDisplayedItems
      }} buttonText={language === 'english' ? 'Year' : '年'} selected={numberSelected} list={yearList} onSelect={handleNumberListSelect} optionType='checkbox' loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp} searchPlaceholder={language === 'english' ? 'Years...' : '2020...'} searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese} hasOptionsFilter />
    </Wrapper>
    <Wrapper key='eje-5'>
      <PageHeader title='Empty Example' introductionText="Empty list is been sent." />
      <FilterDropdown {...{
        buttonIcon,
        disabled,
        isLoading,
        design,
        loadingText,
        maxDisplayedItems
      }} buttonText={language === 'english' ? 'Tags' : 'タグー'} selected={numberSelected} list={[]} onSelect={handleNumberListSelect} optionType='checkbox' loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp} searchPlaceholder={language === 'english' ? 'Filter tags…' : 'フィルタータグ...'} searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese} emptyResultText={language === 'english' ? emptyResultsEnglish : emptyResultsJapanese} hasOptionsFilter />
    </Wrapper>
  </Content>;
}`,...(f=(R=S.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const ye=["MultipleDropdownExamples"];export{S as MultipleDropdownExamples,ye as __namedExportsOrder,Te as default};
