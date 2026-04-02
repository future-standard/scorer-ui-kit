import{j as a}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as n}from"./index-DnkWte70.js";import{c as g}from"./styled-components.browser.esm-CarAhzHj.js";import{d as t}from"./index-C-6Xbh3D.js";import{a as o}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{p as m,q as F}from"./index.modern-CMonYql-.js";import{g as w}from"./index-DQYbOqls.js";import{e as S,b as I,a as v,s as D}from"./data_samples-CN1iUX41.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const B={title:"Filters/molecules/FilterDropdown",component:m,parameters:{componentSubtitle:"FilterDropdown component with footer controls"}},E=g.div`
  margin: 100px;
  display: inline-block;
`,L=g.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,H=[{text:"Ramen",value:0},{text:"Takoyaki",value:1},{text:"Gyoza",value:2},{text:"Tempura",value:3},{text:"Sushi",value:4},{text:"Natto",value:5},{text:"Sashimi",value:6}],O=[{text:"ラーメン",value:0},{text:"蛸焼き",value:1},{text:"餃子",value:2},{text:"天婦羅",value:3},{text:"すし",value:4},{text:"納豆",value:5},{text:"お造り",value:6}],s=()=>{const e=t.select("Language",{English:"english",Japanese:"japanese"},"japanese"),l=w(),x=t.select("Icon",l,Object.keys(l)[0]),b=t.boolean("Disabled",!1),R=t.boolean("Has Options Filter",!0),[A,j]=n.useState(null),c=o("Reset clicked"),i=o("Cancel/Close clicked"),p=o("Item selected"),y=t.boolean("Has Apply",!0),T=t.boolean("Has Reset",!0),C=n.useCallback(r=>{p(r),j(r)},[p]),k=n.useCallback(()=>{c()},[c]),f=n.useCallback(()=>{i()},[i]);return a.jsx(L,{children:a.jsxs(E,{children:[a.jsx(F,{title:"FilterDropdown with Footer Controls",introductionText:"This example demonstrates the FilterDropdown component with both Reset and Apply buttons."}),a.jsx(m,{buttonIcon:x,buttonText:e==="japanese"?"メニュー":"Menu",list:e==="japanese"?O:H,selected:A,disabled:b,hasOptionsFilter:R,searchPlaceholder:e==="japanese"?"メニュー...":"Menu options...",searchResultText:e==="japanese"?v:D,optionType:"checkbox",onSelect:C,onResetCallback:k,onCancelCallback:f,hasReset:T,hasApply:y,resetText:e==="japanese"?"リセット":"Reset",cancelText:e==="japanese"?"キャンセル":"Cancel",closeText:e==="japanese"?"閉じる":"Close",applyText:e==="japanese"?"適用":"Apply",descendingText:e==="japanese"?"降順":"Descending",ascendingText:e==="japanese"?"昇順":"Ascending",emptyResultText:e==="english"?S:I,isListAscending:!0})]})})};s.__docgenInfo={description:"",methods:[],displayName:"DropdownWithApplyAndReset"};var d,u,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const K=["DropdownWithApplyAndReset"];export{s as DropdownWithApplyAndReset,K as __namedExportsOrder,B as default};
