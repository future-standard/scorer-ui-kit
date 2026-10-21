import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i}from"./common-FBJPsqkW.js";import{n as a,r as o,t as s}from"./Icon-BaYDX9Su.js";import{n as c,t as l}from"./FilterDropdownContainer-DuS0O8xn.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./LoadingBox-PSEzicFi.js";import{_ as g,a as _,i as v,o as y}from"./iframe-PEYaYO03.js";var b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{b=t(),y(),i(),p(),o(),c(),d(),f(),x=n(),S=_.div`
  display: inline-block;
  position: relative;
`,C=_(u)`
  letter-spacing: 0.2px;
`,w=_.div`
  padding: 8px 0;
  ${C} {
    height: 40px;
    padding: 16px;
  }
`,T=_.div`
  font-family: var(--font-ui);
  display: flex;
  border-top: var(--grey-6) 1px solid;
  margin-top: 5px;

  button:first-child {
    border-right: var(--grey-6) 1px solid;
  }
`,E=_.button`
  ${r};
  width: 100%;
  display: flex;
  align-items: center;
  font-family: var(--font-data);
  color: var(--grey-12);
  font-size: 14px;
  height: 40px;
  padding: 0 16px;
  gap: 12px;

  ${({$isSelected:e})=>v`

    ${a} {
      display: flex;
      align-items: center;
      [stroke]{
        stroke: var(--grey-11);
      }
    }

    &:hover {
      ${a} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    }

    ${e&&v`
      ${a} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    `}

  `}
`,D=({buttonText:e,disabled:t,list:n,isLoading:r,loadingText:i,isSortAscending:a=!0,selected:o,descendingText:c=`Descending`,ascendingText:d=`Ascending`,design:f=`basic`,onSelect:p,...g})=>{let _=(0,b.useCallback)(e=>{e.value!==o.value&&p(e,a)},[a,p,o.value]),v=(0,b.useCallback)(e=>{a!==e&&p(o,e)},[a,p,o]);return(0,x.jsx)(S,{...g,children:(0,x.jsx)(m,{buttonText:e,disabled:t,isSortAscending:a,design:f,buttonIcon:`FilterSorting`,children:(0,x.jsxs)(l,{children:[r||n.length===0?(0,x.jsx)(h,{loadingText:i}):(0,x.jsx)(w,{children:n.map(e=>(0,x.jsx)(C,{title:e.text,optionType:`radio`,selected:o.value===e.value,onClick:()=>_(e)},String(e.value)))}),(0,x.jsxs)(T,{children:[(0,x.jsxs)(E,{$isSelected:a,onClick:()=>v(!0),children:[(0,x.jsx)(s,{icon:`FilterAscending`,size:16,weight:`light`}),(0,x.jsx)(u,{selected:a,title:d})]}),(0,x.jsxs)(E,{$isSelected:!a,onClick:()=>v(!1),children:[(0,x.jsx)(s,{icon:`FilterDescending`,size:16,weight:`light`}),(0,x.jsx)(u,{selected:!a,title:c})]})]})]})})})};try{D.displayName=`SortDropdown`,D.__docgenInfo={description:``,displayName:`SortDropdown`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,methods:[],props:{buttonText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`buttonText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!0,tags:{},type:{name:`string`}},list:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`list`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!0,tags:{},type:{name:`IFilterItem[]`}},disabled:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!1,tags:{},type:{name:`boolean`}},isLoading:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`isLoading`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!1,tags:{},type:{name:`boolean`}},loadingText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`loadingText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!1,tags:{},type:{name:`string`}},ascendingText:{defaultValue:{value:`Ascending`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`ascendingText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!1,tags:{},type:{name:`string`}},descendingText:{defaultValue:{value:`Descending`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`descendingText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!1,tags:{},type:{name:`string`}},isSortAscending:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`isSortAscending`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!1,tags:{},type:{name:`boolean`}},selected:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`selected`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!0,tags:{},type:{name:`IFilterItem`}},design:{defaultValue:{value:`basic`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!1,tags:{},type:{name:`enum`,raw:`FilterButtonDesign`,value:[{value:`"default"`},{value:`"basic"`}]}},onSelect:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`}],description:``,name:`onSelect`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/SortDropdown.tsx`,name:`ISortDropdown`},required:!0,tags:{},type:{name:`(newSort: IFilterItem, isSortAscending: boolean) => void`}}},tags:{}}}catch{}})))()}var k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{k=g(),A=t(),O(),y(),j=n(),{action:M}=__STORYBOOK_MODULE_ACTIONS__,N={title:`Filters/molecules`,component:D,decorators:[],parameters:{jsx:{skip:1}}},P=_.div``,F=()=>{let e=(0,k.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,A.useMemo)(()=>[{text:e===`english`?`Name`:`名前`,value:`name`},{text:e===`english`?`Status`:`ステータス`,value:`status`},{text:e===`english`?`Cost`:`価格`,value:`cost`}],[e]),[n,r]=(0,A.useState)({text:t[1].text,value:t[0].value}),[i,a]=(0,A.useState)(!0),o=(0,k.boolean)(`Is Loading`,!1),s=(0,k.select)(`Design type`,{Default:`default`,Basic:`basic`},`basic`);(0,k.object)(`Dropdown list`,t);let c=M(`new sort`),l=(0,A.useCallback)((e,t)=>{r(e),a(t),c({newSort:e,isSortAscending:t})},[c]),u=(0,A.useCallback)(()=>{let r=t.find(e=>n.value===e.value);return r?e===`english`?`Sorted by ${r.text}`:`${r.text} で`:e===`english`?`Sorted by ${n.text}`:`${n.text} で`},[t,e,n.text,n.value]);return(0,j.jsx)(P,{children:(0,j.jsx)(D,{isSortAscending:i,buttonText:u(),isLoading:o,design:s,list:t,selected:n,onSelect:l,ascendingText:e===`english`?`Ascending`:`昇順`,descendingText:e===`english`?`Descending`:`降順`})})},I=[`_SortDropdown`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}}})))()}L();export{F as _SortDropdown,I as __namedExportsOrder,N as default};