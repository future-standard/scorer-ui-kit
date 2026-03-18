import{j as d}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as o}from"./index-DnkWte70.js";import{c as v}from"./styled-components.browser.esm-CarAhzHj.js";import{S}from"./index.modern-CLl990BG.js";import{d as l}from"./index-C-6Xbh3D.js";import{a as L}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const E={title:"Filters/molecules",component:S,decorators:[],parameters:{jsx:{skip:1}}},D=v.div``,a=()=>{const e=l.select("Language",{English:"english",Japanese:"japanese"},"japanese"),t=o.useMemo(()=>[{text:e==="english"?"Name":"名前",value:"name"},{text:e==="english"?"Status":"ステータス",value:"status"},{text:e==="english"?"Cost":"価格",value:"cost"}],[e]),[n,p]=o.useState({text:t[1].text,value:t[0].value}),[x,m]=o.useState(!0),b=l.boolean("Is Loading",!1),f=l.select("Design type",{Default:"default",Basic:"basic"},"basic");l.object("Dropdown list",t);const r=L("new sort"),h=o.useCallback((s,i)=>{p(s),m(i),r({newSort:s,isSortAscending:i})},[r]),w=o.useCallback(()=>{const s=t.find(i=>n.value===i.value);return s?e==="english"?`Sorted by ${s.text}`:`${s.text} で`:e==="english"?`Sorted by ${n.text}`:`${n.text} で`},[t,e,n.text,n.value]);return d.jsx(D,{children:d.jsx(S,{isSortAscending:x,buttonText:w(),isLoading:b,design:f,list:t,selected:n,onSelect:h,ascendingText:e==="english"?"Ascending":"昇順",descendingText:e==="english"?"Descending":"降順"})})};a.__docgenInfo={description:"",methods:[],displayName:"_SortDropdown"};var c,g,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const k=["_SortDropdown"];export{a as _SortDropdown,k as __namedExportsOrder,E as default};
