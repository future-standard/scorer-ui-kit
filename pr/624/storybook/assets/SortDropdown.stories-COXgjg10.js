import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,Z as a,jt as o,kt as s,vt as c}from"./iframe-XcZ2CoMj.js";var l,u,d,f,p,m,h,g;t((()=>{l=n(),u=e(i()),c(),s(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Filters/molecules`,component:a,decorators:[],parameters:{jsx:{skip:1}}},m=o.div``,h=()=>{let e=(0,l.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,u.useMemo)(()=>[{text:e===`english`?`Name`:`名前`,value:`name`},{text:e===`english`?`Status`:`ステータス`,value:`status`},{text:e===`english`?`Cost`:`価格`,value:`cost`}],[e]),[n,r]=(0,u.useState)({text:t[1].text,value:t[0].value}),[i,o]=(0,u.useState)(!0),s=(0,l.boolean)(`Is Loading`,!1),c=(0,l.select)(`Design type`,{Default:`default`,Basic:`basic`},`basic`);(0,l.object)(`Dropdown list`,t);let p=f(`new sort`),h=(0,u.useCallback)((e,t)=>{r(e),o(t),p({newSort:e,isSortAscending:t})},[p]);return(0,d.jsx)(m,{children:(0,d.jsx)(a,{isSortAscending:i,buttonText:(0,u.useCallback)(()=>{let r=t.find(e=>n.value===e.value);return r?e===`english`?`Sorted by ${r.text}`:`${r.text} で`:e===`english`?`Sorted by ${n.text}`:`${n.text} で`},[t,e,n.text,n.value])(),isLoading:s,design:c,list:t,selected:n,onSelect:h,ascendingText:e===`english`?`Ascending`:`昇順`,descendingText:e===`english`?`Descending`:`降順`})})},h.__docgenInfo={description:``,methods:[],displayName:`_SortDropdown`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const language = select('Language', {
    English: 'english',
    Japanese: 'japanese'
  }, 'japanese');
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
  const _list = object('Dropdown list', dropdownList);
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