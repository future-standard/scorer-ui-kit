import{t as e}from"./react-BZJXY1be.js";import{A as t,Ft as n,Lt as r,Rt as i,Wt as a,q as o,wt as s}from"./iframe-CeL4Hqgv.js";import{n as c,t as l}from"./helpers-ftoKj78T.js";import{S as u,f as d,h as f,p,x as m}from"./data_samples-DzVyjyFG.js";import{n as h}from"./rolldown-runtime-DkW27tQK.js";var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=h((()=>{g=a(),_=e(),s(),i(),c(),f(),v=n(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`Filters/molecules/FilterDropdown`,component:t,parameters:{componentSubtitle:`FilterDropdown component with footer controls`}},x=r.div`
  margin: 100px;
  display: inline-block;
`,S=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,C=[{text:`Ramen`,value:0},{text:`Takoyaki`,value:1},{text:`Gyoza`,value:2},{text:`Tempura`,value:3},{text:`Sushi`,value:4},{text:`Natto`,value:5},{text:`Sashimi`,value:6}],w=[{text:`ラーメン`,value:0},{text:`蛸焼き`,value:1},{text:`餃子`,value:2},{text:`天婦羅`,value:3},{text:`すし`,value:4},{text:`納豆`,value:5},{text:`お造り`,value:6}],T=()=>{let e=(0,g.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),n=l(),r=(0,g.select)(`Icon`,n,Object.keys(n)[0]),i=(0,g.boolean)(`Disabled`,!1),a=(0,g.boolean)(`Has Options Filter`,!0),[s,c]=(0,_.useState)(null),f=y(`Reset clicked`),h=y(`Cancel/Close clicked`),b=y(`Item selected`),T=(0,g.boolean)(`Has Apply`,!0),E=(0,g.boolean)(`Has Reset`,!0),D=(0,_.useCallback)(e=>{b(e),c(e)},[b]),O=(0,_.useCallback)(()=>{f()},[f]),k=(0,_.useCallback)(()=>{h()},[h]);return(0,v.jsx)(S,{children:(0,v.jsxs)(x,{children:[(0,v.jsx)(o,{title:`FilterDropdown with Footer Controls`,introductionText:`This example demonstrates the FilterDropdown component with both Reset and Apply buttons.`}),(0,v.jsx)(t,{buttonIcon:r,buttonText:e===`japanese`?`メニュー`:`Menu`,list:e===`japanese`?w:C,selected:s,disabled:i,hasOptionsFilter:a,searchPlaceholder:e===`japanese`?`メニュー...`:`Menu options...`,searchResultText:e===`japanese`?u:m,optionType:`checkbox`,onSelect:D,onResetCallback:O,onCancelCallback:k,hasReset:E,hasApply:T,resetText:e===`japanese`?`リセット`:`Reset`,cancelText:e===`japanese`?`キャンセル`:`Cancel`,closeText:e===`japanese`?`閉じる`:`Close`,applyText:e===`japanese`?`適用`:`Apply`,descendingText:e===`japanese`?`降順`:`Descending`,ascendingText:e===`japanese`?`昇順`:`Ascending`,emptyResultText:e===`english`?d:p,isListAscending:!0})]})})},T.__docgenInfo={description:``,methods:[],displayName:`DropdownWithApplyAndReset`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E=[`DropdownWithApplyAndReset`]})))()}D();export{T as DropdownWithApplyAndReset,E as __namedExportsOrder,b as default};