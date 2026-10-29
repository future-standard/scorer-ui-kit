import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./FilterDropdown-ju9QNK71.js";import{S as a,f as o,h as s,p as c,x as l}from"./data_samples-D4tf1liw.js";import{n as u,t as d}from"./PageHeader-De-EQRij.js";import{_ as f,a as p,o as m}from"./iframe-DkCQ6b6C.js";import{n as h,t as g}from"./helpers-BF6FOJxl.js";var _,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{_=f(),v=t(),r(),u(),m(),h(),s(),y=n(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Filters/molecules/FilterDropdown`,component:i,parameters:{componentSubtitle:`FilterDropdown component with footer controls`}},S=p.div`
  margin: 100px;
  display: inline-block;
`,C=p.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,w=[{text:`Ramen`,value:0},{text:`Takoyaki`,value:1},{text:`Gyoza`,value:2},{text:`Tempura`,value:3},{text:`Sushi`,value:4},{text:`Natto`,value:5},{text:`Sashimi`,value:6}],T=[{text:`ラーメン`,value:0},{text:`蛸焼き`,value:1},{text:`餃子`,value:2},{text:`天婦羅`,value:3},{text:`すし`,value:4},{text:`納豆`,value:5},{text:`お造り`,value:6}],E=()=>{let e=(0,_.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=g(),n=(0,_.select)(`Icon`,t,Object.keys(t)[0]),r=(0,_.boolean)(`Disabled`,!1),s=(0,_.boolean)(`Has Options Filter`,!0),[u,f]=(0,v.useState)(null),p=b(`Reset clicked`),m=b(`Cancel/Close clicked`),h=b(`Item selected`),x=(0,_.boolean)(`Has Apply`,!0),E=(0,_.boolean)(`Has Reset`,!0),D=(0,v.useCallback)(e=>{h(e),f(e)},[h]),O=(0,v.useCallback)(()=>{p()},[p]),k=(0,v.useCallback)(()=>{m()},[m]);return(0,y.jsx)(C,{children:(0,y.jsxs)(S,{children:[(0,y.jsx)(d,{title:`FilterDropdown with Footer Controls`,introductionText:`This example demonstrates the FilterDropdown component with both Reset and Apply buttons.`}),(0,y.jsx)(i,{buttonIcon:n,buttonText:e===`japanese`?`メニュー`:`Menu`,list:e===`japanese`?T:w,selected:u,disabled:r,hasOptionsFilter:s,searchPlaceholder:e===`japanese`?`メニュー...`:`Menu options...`,searchResultText:e===`japanese`?a:l,optionType:`checkbox`,onSelect:D,onResetCallback:O,onCancelCallback:k,hasReset:E,hasApply:x,resetText:e===`japanese`?`リセット`:`Reset`,cancelText:e===`japanese`?`キャンセル`:`Cancel`,closeText:e===`japanese`?`閉じる`:`Close`,applyText:e===`japanese`?`適用`:`Apply`,descendingText:e===`japanese`?`降順`:`Descending`,ascendingText:e===`japanese`?`昇順`:`Ascending`,emptyResultText:e===`english`?o:c,isListAscending:!0})]})})},D=[`DropdownWithApplyAndReset`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}}})))()}O();export{E as DropdownWithApplyAndReset,D as __namedExportsOrder,x as default};