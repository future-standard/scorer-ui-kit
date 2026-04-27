import{a as e,n as t}from"./chunk-BneVvdWh.js";import{H as n,Lt as r,Ot as i,Rt as a,bt as o,jt as s,kt as c,w as l}from"./iframe-Csst3Hft.js";import{n as u,t as d}from"./helpers-Cp6u-tul.js";import{S as f,f as p,h as m,p as h,x as g}from"./data_samples-BPpc5FO9.js";var _,v,y,b,x,S,C,w,T,E,D;t((()=>{_=r(),v=e(a()),o(),c(),u(),m(),y=i(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Filters/molecules/FilterDropdown`,component:l,parameters:{componentSubtitle:`FilterDropdown component with footer controls`}},S=s.div`
  margin: 100px;
  display: inline-block;
`,C=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,w=[{text:`Ramen`,value:0},{text:`Takoyaki`,value:1},{text:`Gyoza`,value:2},{text:`Tempura`,value:3},{text:`Sushi`,value:4},{text:`Natto`,value:5},{text:`Sashimi`,value:6}],T=[{text:`ラーメン`,value:0},{text:`蛸焼き`,value:1},{text:`餃子`,value:2},{text:`天婦羅`,value:3},{text:`すし`,value:4},{text:`納豆`,value:5},{text:`お造り`,value:6}],E=()=>{let e=(0,_.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=d(),r=(0,_.select)(`Icon`,t,Object.keys(t)[0]),i=(0,_.boolean)(`Disabled`,!1),a=(0,_.boolean)(`Has Options Filter`,!0),[o,s]=(0,v.useState)(null),c=b(`Reset clicked`),u=b(`Cancel/Close clicked`),m=b(`Item selected`),x=(0,_.boolean)(`Has Apply`,!0),E=(0,_.boolean)(`Has Reset`,!0),D=(0,v.useCallback)(e=>{m(e),s(e)},[m]),O=(0,v.useCallback)(()=>{c()},[c]),k=(0,v.useCallback)(()=>{u()},[u]);return(0,y.jsx)(C,{children:(0,y.jsxs)(S,{children:[(0,y.jsx)(n,{title:`FilterDropdown with Footer Controls`,introductionText:`This example demonstrates the FilterDropdown component with both Reset and Apply buttons.`}),(0,y.jsx)(l,{buttonIcon:r,buttonText:e===`japanese`?`メニュー`:`Menu`,list:e===`japanese`?T:w,selected:o,disabled:i,hasOptionsFilter:a,searchPlaceholder:e===`japanese`?`メニュー...`:`Menu options...`,searchResultText:e===`japanese`?f:g,optionType:`checkbox`,onSelect:D,onResetCallback:O,onCancelCallback:k,hasReset:E,hasApply:x,resetText:e===`japanese`?`リセット`:`Reset`,cancelText:e===`japanese`?`キャンセル`:`Cancel`,closeText:e===`japanese`?`閉じる`:`Close`,applyText:e===`japanese`?`適用`:`Apply`,descendingText:e===`japanese`?`降順`:`Descending`,ascendingText:e===`japanese`?`昇順`:`Ascending`,emptyResultText:e===`english`?p:h,isListAscending:!0})]})})},E.__docgenInfo={description:``,methods:[],displayName:`DropdownWithApplyAndReset`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const language = select('Language', {
    English: 'english',
    Japanese: 'japanese'
  }, 'japanese');
  const iconList = generateIconList();
  const buttonIcon = select('Icon', iconList, Object.keys(iconList)[0]);
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
        <PageHeader title='FilterDropdown with Footer Controls' introductionText='This example demonstrates the FilterDropdown component with both Reset and Apply buttons.' />

        <FilterDropdown buttonIcon={buttonIcon} buttonText={language === 'japanese' ? 'メニュー' : 'Menu'} list={language === 'japanese' ? foodItemsJap : foodItemsEng} selected={selected} disabled={disabled} hasOptionsFilter={hasOptionsFilter} searchPlaceholder={language === 'japanese' ? 'メニュー...' : 'Menu options...'} searchResultText={language === 'japanese' ? searchTemplateResultJapanese : searchTemplateResultEnglish} optionType='checkbox' onSelect={handleSelect} onResetCallback={handleReset} onCancelCallback={handleCancel} hasReset={hasReset} hasApply={hasApply} resetText={language === 'japanese' ? 'リセット' : 'Reset'} cancelText={language === 'japanese' ? 'キャンセル' : 'Cancel'} closeText={language === 'japanese' ? '閉じる' : 'Close'} applyText={language === 'japanese' ? '適用' : 'Apply'} descendingText={language === 'japanese' ? '降順' : 'Descending'} ascendingText={language === 'japanese' ? '昇順' : 'Ascending'} emptyResultText={language === 'english' ? emptyResultsEnglish : emptyResultsJapanese} isListAscending={true} />
      </Wrapper>
    </Container>;
}`,...E.parameters?.docs?.source}}},D=[`DropdownWithApplyAndReset`]}))();export{E as DropdownWithApplyAndReset,D as __namedExportsOrder,x as default};