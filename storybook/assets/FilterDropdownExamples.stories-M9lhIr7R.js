import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Et as n,Ft as r,H as i,Lt as a,Pt as o,Rt as s,bt as c,w as l}from"./iframe-DUfvGjia.js";import{n as u,r as d}from"./helpers-BJ1z7gqe.js";import{S as f,f as p,g as m,h,m as g,p as _,x as v}from"./data_samples-BPpc5FO9.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{y=e(s()),r(),b=o(),c(),h(),d(),x=n(),{action:S}=__STORYBOOK_MODULE_ACTIONS__,C={title:`Filters/molecules/FilterDropdown`,component:l,decorators:[]},w=a.div``,T=a.div``,E=a.div`
  margin: 100px;
  display: inline-block;
`,D=[{text:`Ramen`,value:0},{text:`Takoyaki`,value:1},{text:`Gyoza`,value:2},{text:`Tempura`,value:3},{text:`Sushi`,value:4},{text:`Natto`,value:5},{text:`Sashimi`,value:6}],O=[{text:`ラーメン`,value:0},{text:`蛸焼き`,value:1},{text:`餃子`,value:2},{text:`天婦羅`,value:3},{text:`すし`,value:4},{text:`納豆`,value:5},{text:`お造り`,value:6}],k=[{text:`Super Spicy`,value:0},{text:`Spicy`,value:1},{text:`Mild`,value:2},{text:`Sweet`,value:3}],A=[{text:`超辛い`,value:0},{text:`辛い`,value:1},{text:`中華い`,value:2},{text:`甘口`,value:3}],j=[{text:`1900`,value:1900},{text:`1910`,value:1920},{text:`1930`,value:1930},{text:`1950`,value:1950},{text:`1960`,value:1960},{text:`1970`,value:1970},{text:`1980`,value:1980},{text:`1990`,value:1990},{text:`2000`,value:2e3},{text:`2010`,value:2010},{text:`2020`,value:2020}],M=[{text:`Card`,value:0},{text:`Cash`,value:1},{text:`IC Card`,value:2}],N=[{text:`カード`,value:0},{text:`現金`,value:1},{text:`IC カード`,value:2}],P=[{text:`Adipiscing`,value:0},{text:`Amet`,value:1},{text:`Consectetur`,value:2},{text:`Dolor sit`,value:3},{text:`Lorem ipsum`,value:4},{text:`Vestibulum`,value:5},{text:`Minim Veniam`,value:6},{text:`Consequat`,value:7},{text:`Fugiat Nulla`,value:8}],F=()=>{let e=u(),t=(0,b.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),n=(0,b.text)(`Text`,`Department`),r=(0,b.select)(`Button Icon`,e,e.MetaCategories),a=(0,b.boolean)(`disable`,!1),o=(0,b.boolean)(`Is Loading`,!1),s=(0,b.select)(`Design type`,{Default:`default`,Basic:`basic`},`default`),c=(0,b.select)(`Option Type`,{text:`text`,checkbox:`checkbox`,radio:`radio`},`checkbox`),d=(0,b.text)(`Loading Text`,`Loading Tags...`),h=(0,b.number)(`Max Displayed Items`,6),C=S(`Currently Selected`),F=S(`Food selected`),I=S(`Spicy level`),L=S(`Payment type`),R=S(`Years`),[z,B]=(0,y.useState)(null),[V,H]=(0,y.useState)(null),[U,W]=(0,y.useState)(t===`english`?{text:`Card`,value:0}:{text:`カード`,value:0}),[G,K]=(0,y.useState)([{text:`1990`,value:1990}]),[q,J]=(0,y.useState)(null),Y=(0,y.useCallback)(e=>{F(e),B(e)},[F]),X=(0,y.useCallback)(e=>{I(e),H(e)},[I]),Z=(0,y.useCallback)(e=>{R(e),K(e)},[R]),Q=(0,y.useCallback)(e=>{L(e),W(e)},[L]),$=(0,y.useCallback)(e=>{C(e),J(e)},[C]);return(0,x.jsxs)(w,{children:[(0,x.jsxs)(E,{children:[(0,x.jsx)(i,{title:`Base Example`,introductionText:`This example doesn't have filter for options.`}),(0,x.jsx)(l,{disabled:a,isLoading:o,buttonText:n,maxDisplayedItems:h,buttonIcon:r,design:s,list:P,onSelect:$,optionType:`checkbox`,selected:q,loadingText:t===`english`?m:g})]},`eje-0`),(0,x.jsxs)(E,{children:[(0,x.jsx)(i,{title:`Data Object`,introductionText:`Array of IFilterList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]`}),(0,x.jsx)(l,{buttonIcon:r,disabled:a,isLoading:o,design:s,loadingText:d,maxDisplayedItems:h,list:t===`english`?D:O,buttonText:t===`english`?`Menu`:`メニュー`,selected:z,optionType:c,onSelect:Y,searchResultText:t===`english`?v:f,searchPlaceholder:t===`english`?`Menu options...`:`メニュー...`,loadingText:t===`english`?m:g,hasOptionsFilter:!0})]},`eje-1`),(0,x.jsx)(T,{}),(0,x.jsxs)(E,{children:[(0,x.jsx)(i,{title:`Text type`,introductionText:`.`}),(0,x.jsx)(l,{buttonIcon:r,disabled:a,isLoading:o,design:s,loadingText:d,maxDisplayedItems:h,list:t===`english`?k:A,buttonText:t===`english`?`Spice level`:`ピリ辛`,selected:V,onSelect:X,optionType:`text`,loadingText:t===`english`?m:g,searchResultText:t===`english`?v:f,searchPlaceholder:t===`english`?`Spice options...`:`ピリ辛...`,hasOptionsFilter:!0})]},`eje-2`),(0,x.jsxs)(E,{children:[(0,x.jsx)(i,{title:`Radio type`,introductionText:`.`}),(0,x.jsx)(l,{buttonIcon:r,disabled:a,isLoading:o,design:s,loadingText:d,maxDisplayedItems:h,list:t===`english`?M:N,buttonText:t===`english`?`Pay Method`:`支払方法`,selected:U,onSelect:Q,optionType:`radio`,loadingText:t===`english`?m:g,searchResultText:t===`english`?v:f,searchPlaceholder:t===`english`?`Pay Methods...`:`支払方法...`,hasOptionsFilter:!0})]},`eje-3`),(0,x.jsxs)(E,{children:[(0,x.jsx)(i,{title:`Checkbox type`,introductionText:`Array of IFilterList with numbers [{text: '1900', value:1910}, {text:'1910', value: 1910}]`}),(0,x.jsx)(l,{buttonIcon:r,disabled:a,isLoading:o,design:s,loadingText:d,maxDisplayedItems:h,buttonText:t===`english`?`Year`:`年`,selected:G,list:j,onSelect:Z,optionType:`checkbox`,loadingText:t===`english`?m:g,searchPlaceholder:t===`english`?`Years...`:`2020...`,searchResultText:t===`english`?v:f,hasOptionsFilter:!0})]},`eje-4`),(0,x.jsxs)(E,{children:[(0,x.jsx)(i,{title:`Empty Example`,introductionText:`Empty list is been sent.`}),(0,x.jsx)(l,{buttonIcon:r,disabled:a,isLoading:o,design:s,loadingText:d,maxDisplayedItems:h,buttonText:t===`english`?`Tags`:`タグー`,selected:G,list:[],onSelect:Z,optionType:`checkbox`,loadingText:t===`english`?m:g,searchPlaceholder:t===`english`?`Filter tags…`:`フィルタータグ...`,searchResultText:t===`english`?v:f,emptyResultText:t===`english`?p:_,hasOptionsFilter:!0})]},`eje-5`)]})},F.__docgenInfo={description:``,methods:[],displayName:`MultipleDropdownExamples`},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},I=[`MultipleDropdownExamples`]}))();export{F as MultipleDropdownExamples,I as __namedExportsOrder,C as default};