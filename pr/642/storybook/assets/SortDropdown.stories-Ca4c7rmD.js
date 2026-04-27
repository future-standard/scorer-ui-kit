import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Et as n,Ft as r,Lt as i,Pt as a,Rt as o,Z as s,vt as c}from"./iframe-BHdSP_o9.js";var l,u,d,f,p,m,h,g;t((()=>{l=e(o()),r(),c(),u=a(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Filters/molecules`,component:s,decorators:[],parameters:{jsx:{skip:1}}},m=i.div``,h=()=>{let e=(0,u.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,l.useMemo)(()=>[{text:e===`english`?`Name`:`名前`,value:`name`},{text:e===`english`?`Status`:`ステータス`,value:`status`},{text:e===`english`?`Cost`:`価格`,value:`cost`}],[e]),[n,r]=(0,l.useState)({text:t[1].text,value:t[0].value}),[i,a]=(0,l.useState)(!0),o=(0,u.boolean)(`Is Loading`,!1),c=(0,u.select)(`Design type`,{Default:`default`,Basic:`basic`},`basic`);(0,u.object)(`Dropdown list`,t);let p=f(`new sort`),h=(0,l.useCallback)((e,t)=>{r(e),a(t),p({newSort:e,isSortAscending:t})},[p]);return(0,d.jsx)(m,{children:(0,d.jsx)(s,{isSortAscending:i,buttonText:(0,l.useCallback)(()=>{let r=t.find(e=>n.value===e.value);return r?e===`english`?`Sorted by ${r.text}`:`${r.text} で`:e===`english`?`Sorted by ${n.text}`:`${n.text} で`},[t,e,n.text,n.value])(),isLoading:o,design:c,list:t,selected:n,onSelect:h,ascendingText:e===`english`?`Ascending`:`昇順`,descendingText:e===`english`?`Descending`:`降順`})})},h.__docgenInfo={description:``,methods:[],displayName:`_SortDropdown`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const language = select("Language", {
    English: 'english',
    Japanese: "japanese"
  }, "japanese");
  const dropdownList: IFilterItem[] = useMemo(() => [{
    text: language === 'english' ? 'Name' : '名前',
    value: 'name'
  }, {
    text: language === 'english' ? 'Status' : 'ステータス',
    value: 'status'
  }, {
    text: language === 'english' ? 'Cost' : '価格',
    value: 'cost'
  }], [language]);
  const [sortSelected, setSortSelected] = useState<IFilterItem>({
    text: dropdownList[1].text,
    value: dropdownList[0].value
  });
  const [isAscending, setIsAScending] = useState<boolean>(true);
  const isLoading = boolean('Is Loading', false);
  const design = select('Design type', {
    Default: 'default',
    Basic: 'basic'
  }, 'basic');
  // const buttonText = text('Button Text', \`Sorted by \${dropdownList[0].text}\`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const list = object('Dropdown list', dropdownList);
  const lastSelection = action('new sort');
  const handleSelections = useCallback((newSort: IFilterItem, isSortAscending: boolean) => {
    setSortSelected(newSort);
    setIsAScending(isSortAscending);
    lastSelection({
      newSort,
      isSortAscending
    });
  }, [lastSelection]);
  const getSortedTranslation = useCallback(() => {
    const found = dropdownList.find(item => sortSelected.value === item.value);
    if (found) {
      return language === 'english' ? \`Sorted by \${found.text}\` : \`\${found.text} で\`;
    }
    return language === 'english' ? \`Sorted by \${sortSelected.text}\` : \`\${sortSelected.text} で\`;
  }, [dropdownList, language, sortSelected.text, sortSelected.value]);
  return <Container>
      <SortDropdown {...{
      isSortAscending: isAscending,
      buttonText: getSortedTranslation(),
      isLoading,
      design,
      list: dropdownList,
      selected: sortSelected,
      onSelect: handleSelections,
      ascendingText: language === 'english' ? 'Ascending' : '昇順',
      descendingText: language === 'english' ? 'Descending' : '降順'
    }} />
    </Container>;
}`,...h.parameters?.docs?.source}}},g=[`_SortDropdown`]}))();export{h as _SortDropdown,g as __namedExportsOrder,p as default};