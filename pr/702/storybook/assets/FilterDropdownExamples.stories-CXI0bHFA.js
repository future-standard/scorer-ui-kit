import{t as e}from"./react-BZJXY1be.js";import{A as t,Ft as n,Lt as r,Rt as i,Wt as a,q as o,wt as s}from"./iframe-DTJIpfwE.js";import{n as c,t as l}from"./helpers-Dou4BzkT.js";import{S as u,f as d,g as f,h as p,m,p as h,x as g}from"./data_samples-DzVyjyFG.js";import{n as _}from"./rolldown-runtime-DkW27tQK.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=_((()=>{v=a(),y=e(),s(),i(),c(),p(),b=n(),{action:x}=__STORYBOOK_MODULE_ACTIONS__,S={title:`Filters/molecules/FilterDropdown`,component:t,decorators:[]},C=r.div``,w=r.div``,T=r.div`
  margin: 100px;
  display: inline-block;
`,E=[{text:`Ramen`,value:0},{text:`Takoyaki`,value:1},{text:`Gyoza`,value:2},{text:`Tempura`,value:3},{text:`Sushi`,value:4},{text:`Natto`,value:5},{text:`Sashimi`,value:6}],D=[{text:`ラーメン`,value:0},{text:`蛸焼き`,value:1},{text:`餃子`,value:2},{text:`天婦羅`,value:3},{text:`すし`,value:4},{text:`納豆`,value:5},{text:`お造り`,value:6}],O=[{text:`Super Spicy`,value:0},{text:`Spicy`,value:1},{text:`Mild`,value:2},{text:`Sweet`,value:3}],k=[{text:`超辛い`,value:0},{text:`辛い`,value:1},{text:`中華い`,value:2},{text:`甘口`,value:3}],A=[{text:`1900`,value:1900},{text:`1910`,value:1920},{text:`1930`,value:1930},{text:`1950`,value:1950},{text:`1960`,value:1960},{text:`1970`,value:1970},{text:`1980`,value:1980},{text:`1990`,value:1990},{text:`2000`,value:2e3},{text:`2010`,value:2010},{text:`2020`,value:2020}],j=[{text:`Card`,value:0},{text:`Cash`,value:1},{text:`IC Card`,value:2}],M=[{text:`カード`,value:0},{text:`現金`,value:1},{text:`IC カード`,value:2}],N=[{text:`Adipiscing`,value:0},{text:`Amet`,value:1},{text:`Consectetur`,value:2},{text:`Dolor sit`,value:3},{text:`Lorem ipsum`,value:4},{text:`Vestibulum`,value:5},{text:`Minim Veniam`,value:6},{text:`Consequat`,value:7},{text:`Fugiat Nulla`,value:8}],P=()=>{let e=l(),n=(0,v.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),r=(0,v.text)(`Text`,`Department`),i=(0,v.select)(`Button Icon`,e,e.MetaCategories),a=(0,v.boolean)(`disable`,!1),s=(0,v.boolean)(`Is Loading`,!1),c=(0,v.select)(`Design type`,{Default:`default`,Basic:`basic`},`default`),p=(0,v.select)(`Option Type`,{text:`text`,checkbox:`checkbox`,radio:`radio`},`checkbox`),_=(0,v.text)(`Loading Text`,`Loading Tags...`),S=(0,v.number)(`Max Displayed Items`,6),P=x(`Currently Selected`),F=x(`Food selected`),I=x(`Spicy level`),L=x(`Payment type`),R=x(`Years`),[z,B]=(0,y.useState)(null),[V,H]=(0,y.useState)(null),[U,W]=(0,y.useState)(n===`english`?{text:`Card`,value:0}:{text:`カード`,value:0}),[G,K]=(0,y.useState)([{text:`1990`,value:1990}]),[q,J]=(0,y.useState)(null),Y=(0,y.useCallback)(e=>{F(e),B(e)},[F]),X=(0,y.useCallback)(e=>{I(e),H(e)},[I]),Z=(0,y.useCallback)(e=>{R(e),K(e)},[R]),Q=(0,y.useCallback)(e=>{L(e),W(e)},[L]),$=(0,y.useCallback)(e=>{P(e),J(e)},[P]);return(0,b.jsxs)(C,{children:[(0,b.jsxs)(T,{children:[(0,b.jsx)(o,{title:`Base Example`,introductionText:`This example doesn't have filter for options.`}),(0,b.jsx)(t,{disabled:a,isLoading:s,buttonText:r,maxDisplayedItems:S,buttonIcon:i,design:c,list:N,onSelect:$,optionType:`checkbox`,selected:q,loadingText:n===`english`?f:m})]},`eje-0`),(0,b.jsxs)(T,{children:[(0,b.jsx)(o,{title:`Data Object`,introductionText:`Array of IFilterList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]`}),(0,b.jsx)(t,{buttonIcon:i,disabled:a,isLoading:s,design:c,loadingText:_,maxDisplayedItems:S,list:n===`english`?E:D,buttonText:n===`english`?`Menu`:`メニュー`,selected:z,optionType:p,onSelect:Y,searchResultText:n===`english`?g:u,searchPlaceholder:n===`english`?`Menu options...`:`メニュー...`,loadingText:n===`english`?f:m,hasOptionsFilter:!0})]},`eje-1`),(0,b.jsx)(w,{}),(0,b.jsxs)(T,{children:[(0,b.jsx)(o,{title:`Text type`,introductionText:`.`}),(0,b.jsx)(t,{buttonIcon:i,disabled:a,isLoading:s,design:c,loadingText:_,maxDisplayedItems:S,list:n===`english`?O:k,buttonText:n===`english`?`Spice level`:`ピリ辛`,selected:V,onSelect:X,optionType:`text`,loadingText:n===`english`?f:m,searchResultText:n===`english`?g:u,searchPlaceholder:n===`english`?`Spice options...`:`ピリ辛...`,hasOptionsFilter:!0})]},`eje-2`),(0,b.jsxs)(T,{children:[(0,b.jsx)(o,{title:`Radio type`,introductionText:`.`}),(0,b.jsx)(t,{buttonIcon:i,disabled:a,isLoading:s,design:c,loadingText:_,maxDisplayedItems:S,list:n===`english`?j:M,buttonText:n===`english`?`Pay Method`:`支払方法`,selected:U,onSelect:Q,optionType:`radio`,loadingText:n===`english`?f:m,searchResultText:n===`english`?g:u,searchPlaceholder:n===`english`?`Pay Methods...`:`支払方法...`,hasOptionsFilter:!0})]},`eje-3`),(0,b.jsxs)(T,{children:[(0,b.jsx)(o,{title:`Checkbox type`,introductionText:`Array of IFilterList with numbers [{text: '1900', value:1910}, {text:'1910', value: 1910}]`}),(0,b.jsx)(t,{buttonIcon:i,disabled:a,isLoading:s,design:c,loadingText:_,maxDisplayedItems:S,buttonText:n===`english`?`Year`:`年`,selected:G,list:A,onSelect:Z,optionType:`checkbox`,loadingText:n===`english`?f:m,searchPlaceholder:n===`english`?`Years...`:`2020...`,searchResultText:n===`english`?g:u,hasOptionsFilter:!0})]},`eje-4`),(0,b.jsxs)(T,{children:[(0,b.jsx)(o,{title:`Empty Example`,introductionText:`Empty list is been sent.`}),(0,b.jsx)(t,{buttonIcon:i,disabled:a,isLoading:s,design:c,loadingText:_,maxDisplayedItems:S,buttonText:n===`english`?`Tags`:`タグー`,selected:G,list:[],onSelect:Z,optionType:`checkbox`,loadingText:n===`english`?f:m,searchPlaceholder:n===`english`?`Filter tags…`:`フィルタータグ...`,searchResultText:n===`english`?g:u,emptyResultText:n===`english`?d:h,hasOptionsFilter:!0})]},`eje-5`)]})},P.__docgenInfo={description:``,methods:[],displayName:`MultipleDropdownExamples`},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const language = select('Language', {
    English: 'english',
    Japanese: 'japanese'
  }, 'japanese');
  const buttonText = text('Text', 'Department');
  const buttonIcon = select('Button Icon', iconList, iconList.MetaCategories);
  const disabled = boolean('disable', false);
  const isLoading = boolean('Is Loading', false);
  const design = select('Design type', {
    Default: 'default',
    Basic: 'basic'
  }, 'default');
  const optionType = select('Option Type', {
    text: 'text',
    checkbox: 'checkbox',
    radio: 'radio'
  }, 'checkbox');
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
        <PageHeader title='Text type' introductionText='.' />
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
        <PageHeader title='Radio type' introductionText='.' />
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
        <PageHeader title='Empty Example' introductionText='Empty list is been sent.' />
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
}`,...P.parameters?.docs?.source}}},F=[`MultipleDropdownExamples`]})))()}I();export{P as MultipleDropdownExamples,F as __namedExportsOrder,S as default};