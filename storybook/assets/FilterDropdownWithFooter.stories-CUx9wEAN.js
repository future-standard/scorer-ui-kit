import{K as g,d as t,r as a,j as n,P as w,a as x}from"./iframe-BQPDKgpJ.js";import{g as S}from"./index-BKA4gAcn.js";import{e as I,b as D,a as f,s as v}from"./data_samples-CN1iUX41.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,N={title:"Filters/molecules/FilterDropdown",component:g,parameters:{componentSubtitle:"FilterDropdown component with footer controls"}},O=x.div`
  margin: 100px;
  display: inline-block;
`,E=x.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,L=[{text:"Ramen",value:0},{text:"Takoyaki",value:1},{text:"Gyoza",value:2},{text:"Tempura",value:3},{text:"Sushi",value:4},{text:"Natto",value:5},{text:"Sashimi",value:6}],_=[{text:"ラーメン",value:0},{text:"蛸焼き",value:1},{text:"餃子",value:2},{text:"天婦羅",value:3},{text:"すし",value:4},{text:"納豆",value:5},{text:"お造り",value:6}],s=()=>{const e=t.select("Language",{English:"english",Japanese:"japanese"},"japanese"),l=S(),m=t.select("Icon",l,Object.keys(l)[0]),b=t.boolean("Disabled",!1),R=t.boolean("Has Options Filter",!0),[A,j]=a.useState(null),c=o("Reset clicked"),i=o("Cancel/Close clicked"),p=o("Item selected"),T=t.boolean("Has Apply",!0),y=t.boolean("Has Reset",!0),C=a.useCallback(r=>{p(r),j(r)},[p]),k=a.useCallback(()=>{c()},[c]),F=a.useCallback(()=>{i()},[i]);return n.jsx(E,{children:n.jsxs(O,{children:[n.jsx(w,{title:"FilterDropdown with Footer Controls",introductionText:"This example demonstrates the FilterDropdown component with both Reset and Apply buttons."}),n.jsx(g,{buttonIcon:m,buttonText:e==="japanese"?"メニュー":"Menu",list:e==="japanese"?_:L,selected:A,disabled:b,hasOptionsFilter:R,searchPlaceholder:e==="japanese"?"メニュー...":"Menu options...",searchResultText:e==="japanese"?f:v,optionType:"checkbox",onSelect:C,onResetCallback:k,onCancelCallback:F,hasReset:y,hasApply:T,resetText:e==="japanese"?"リセット":"Reset",cancelText:e==="japanese"?"キャンセル":"Cancel",closeText:e==="japanese"?"閉じる":"Close",applyText:e==="japanese"?"適用":"Apply",descendingText:e==="japanese"?"降順":"Descending",ascendingText:e==="japanese"?"昇順":"Ascending",emptyResultText:e==="english"?I:D,isListAscending:!0})]})})};s.__docgenInfo={description:"",methods:[],displayName:"DropdownWithApplyAndReset"};var d,u,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const language = select("Language", {
    English: 'english',
    Japanese: "japanese"
  }, "japanese");
  const iconList = generateIconList();
  const buttonIcon = select("Icon", iconList, Object.keys(iconList)[0]);
  const disabled = boolean('Disabled', false);
  const hasOptionsFilter = boolean('Has Options Filter', true);

  // State for selected items
  const [selected, setSelected] = useState<IFilterValue>(null);

  // Action trackers
  const resetAction = action('Reset clicked');
  const cancelAction = action('Cancel/Close clicked');
  const selectAction = action('Item selected');
  const hasApply = boolean('Has Apply', true);
  const hasReset = boolean('Has Reset', true);

  // Handlers for the dropdown
  const handleSelect = useCallback((newSelection: IFilterValue) => {
    selectAction(newSelection);
    setSelected(newSelection);
  }, [selectAction]);
  const handleReset = useCallback(() => {
    resetAction();
  }, [resetAction]);
  const handleCancel = useCallback(() => {
    cancelAction();
  }, [cancelAction]);
  return <Container>
      <Wrapper>
        <PageHeader title="FilterDropdown with Footer Controls" introductionText="This example demonstrates the FilterDropdown component with both Reset and Apply buttons." />

        <FilterDropdown buttonIcon={buttonIcon} buttonText={language === 'japanese' ? 'メニュー' : 'Menu'} list={language === 'japanese' ? foodItemsJap : foodItemsEng} selected={selected} disabled={disabled} hasOptionsFilter={hasOptionsFilter} searchPlaceholder={language === 'japanese' ? 'メニュー...' : 'Menu options...'} searchResultText={language === 'japanese' ? searchTemplateResultJapanese : searchTemplateResultEnglish} optionType="checkbox" onSelect={handleSelect} onResetCallback={handleReset} onCancelCallback={handleCancel} hasReset={hasReset} hasApply={hasApply} resetText={language === 'japanese' ? 'リセット' : 'Reset'} cancelText={language === 'japanese' ? 'キャンセル' : 'Cancel'} closeText={language === 'japanese' ? '閉じる' : 'Close'} applyText={language === 'japanese' ? '適用' : 'Apply'} descendingText={language === 'japanese' ? '降順' : 'Descending'} ascendingText={language === 'japanese' ? '昇順' : 'Ascending'} emptyResultText={language === 'english' ? emptyResultsEnglish : emptyResultsJapanese} isListAscending={true} />
      </Wrapper>
    </Container>;
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const K=["DropdownWithApplyAndReset"];export{s as DropdownWithApplyAndReset,K as __namedExportsOrder,N as default};
