import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,r as a}from"./styled-components.browser.esm-DRoLZq3m.js";import{r as o,t as s}from"./Icon-jcMQaGO-.js";import{n as c,t as l}from"./Spinner-hSZCtfry.js";import{n as u,t as d}from"./TableRowThumbnail-Bw_Sl_w_.js";import{n as f,t as p}from"./Checkbox-DGKbg8p5.js";import{n as m,t as h}from"./useCopyToClipboard-BVF9W5gA.js";import{n as g,t as _}from"./TableHeaderTitle-BWLj7shm.js";var v,y,b,x,S,C;function w(){return(w=e((()=>{r(),h(),o(),v=n(),y=i.button`

  cursor: pointer;
  user-select: none;
  opacity: 0;

  position: absolute;
  right: 0;
  top: 14px;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  outline: none;

  transition: var(--speed-normal) var(--easing-primary-out);

  svg {
    display: block;
  }

  &:hover {
    opacity: 1 !important;
  }

`,b=i.div`
  display: table-cell;
  height: 50px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  font-family: ${e=>e.theme.fontFamily.data};

  &:hover ${y}{
    opacity: 0.5;
  }

  &, a {
    ${({theme:e,$cellStyle:t,$alignment:n})=>t===`firstColumn`?a`
      ${e.typography.table.columnData[t]};
    `:a`
      ${e.typography.table.columnData[t][n]};
    `}
  }

  a:hover {
    text-decoration: underline;
  }

  ${({$hasCopyButton:e})=>e&&a`
    padding-right: 20px;
  `};

  ${({theme:{styles:e},$hideDivider:t})=>!t&&a`
    &::after {
      ${e.tables.rows.divider};
      content: '';
      display: block;
      height: 1px;
      left: 0;
      right: 0;
      width: 100%;
      bottom: 0px;
      position: absolute;
    }
  `}
`,x=i.span`
  ${({theme:e})=>a`
    ${e.typography.table.columnData.unit};
  `}
`,S=i.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  ${({$status:e=`neutral`,theme:{colors:t}})=>a`
    background: ${t.status[e]};
  `}
`,C=({showUnit:e=!1,showStatus:t=!1,status:n,unit:r=``,cellStyle:i=`normalImportance`,alignment:a=`left`,hideDivider:o,isLastRow:c,hasCopyButton:l,href:u,children:d})=>{o=c?!0:o;let{copyToClipboard:f}=m();return(0,v.jsxs)(b,{$cellStyle:i,$alignment:a,$hideDivider:o,$hasCopyButton:l,children:[t?(0,v.jsx)(S,{$status:n}):null,u?(0,v.jsx)(`a`,{href:u,children:d}):d,e?(0,v.jsx)(x,{children:r}):null,l?(0,v.jsx)(y,{onClick:()=>typeof d==`string`&&f(d),children:(0,v.jsx)(s,{icon:`Copy`,size:16})}):null]})};try{C.displayName=`TypeTableCell`,C.__docgenInfo={description:``,displayName:`TypeTableCell`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,methods:[],props:{isLastRow:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`isLastRow`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hideDivider:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`hideDivider`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},cellStyle:{defaultValue:{value:`normalImportance`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`cellStyle`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeCellStyle`,value:[{value:`"firstColumn"`},{value:`"lowImportance"`},{value:`"normalImportance"`},{value:`"highImportance"`}]}},alignment:{defaultValue:{value:`left`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`alignment`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeCellAlignment`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},href:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`href`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},showUnit:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`showUnit`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},showStatus:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`showStatus`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},unit:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`unit`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},status:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`status`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},hasCopyButton:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`hasCopyButton`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var T,E,D;function O(){return(O=e((()=>{r(),T=n(),E=i.div`
  height: 42px;
  width: 4px;
  border-radius: 3px;
  display: block;

  ${({$status:e,theme:{colors:t}})=>a`
    background: ${t.status[e]};
    content:'${e}';
  `}

`,D=({status:e=`neutral`})=>(0,T.jsx)(E,{$status:e});try{D.displayName=`TypeTableDeviceStatus`,D.__docgenInfo={description:``,displayName:`TypeTableDeviceStatus`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/atoms/TypeTableDeviceStatus.tsx`,methods:[],props:{status:{defaultValue:{value:`neutral`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableDeviceStatus.tsx`,name:`IProps`}],description:``,name:`status`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableDeviceStatus.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`IDeviceStatus`,value:[{value:`"neutral"`},{value:`"danger"`},{value:`"caution"`},{value:`"good"`},{value:`"folder"`}]}}},tags:{}}}catch{}})))()}var k,A,ee,j;function M(){return(M=e((()=>{k=t(),r(),f(),o(),u(),w(),O(),A=n(),ee=i.div`
  display: table-row;
  ${({$isEmpty:e})=>e&&a`
    visibility: hidden;
  `};
`,j=({selectable:e=!1,selectCallback:t,hasStatus:n,hasThumbnail:r,hasTypeIcon:i,rowData:a,isLastRow:o,columnConfig:c,closeText:l})=>{let u=(0,k.useCallback)(e=>{t&&t(e,a.id)},[a.id,t]),f=a.columns.length===0;return(0,A.jsxs)(ee,{$isEmpty:f,children:[e?(0,A.jsx)(C,{hideDivider:!0,children:(0,A.jsx)(p,{checked:a._checked,disabled:a.checkboxDisabled,onChangeCallback:u})}):null,n?(0,A.jsx)(C,{hideDivider:!0,children:(0,A.jsx)(D,{status:a.header?.status})}):null,r?(0,A.jsx)(C,{hideDivider:!0,children:(0,A.jsx)(d,{image:a.header?.image,mediaUrl:a.header?.mediaUrl,mediaType:a.header?.mediaType,closeText:l,onClickThumbnail:a.header?.onClickThumbnail})}):null,i?(0,A.jsx)(C,{hideDivider:!0,children:(0,A.jsx)(s,{icon:a.header?.icon||``,color:`dimmed`,weight:`regular`,size:16})}):null,a.columns.map((e,t)=>{let n=c[t];if(n===void 0)return null;let{cellStyle:r,alignment:i,showUnit:a,showStatus:s,hasCopyButton:l}=n,{unit:u,status:d,text:f,customComponent:p}=e;return(0,A.jsx)(C,{href:e.href,cellStyle:r,alignment:i,showUnit:a,showStatus:s,hasCopyButton:l,unit:u,status:d,isLastRow:o,children:p||f},t)})]})};try{j.displayName=`TypeTableRow`,j.__docgenInfo={description:``,displayName:`TypeTableRow`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,methods:[],props:{isLastRow:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`isLastRow`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},selectable:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`selectable`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasStatus:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`hasStatus`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasThumbnail:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`hasThumbnail`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasTypeIcon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`hasTypeIcon`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},columnConfig:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`columnConfig`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`ITableColumnConfig[]`}},rowData:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`rowData`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`IRowData`}},selectCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`selectCallback`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((checked: boolean, id?: string | number) => void)`}},closeText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`closeText`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{N=t(),r(),f(),g(),P=n(),F=i.div`
  display: table-row;
  height: 50px;
`,I=i.div`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${e=>e.theme.fontFamily.ui};

  ${({$hasCopyButton:e})=>e&&a`
    padding-right: 20px;
  `};

  ${({theme:e,$alignment:t,$headerStyle:n})=>t?a`
    ${e.typography.table[n][t]};
  `:a`
    ${e.typography.table[n].left};
  `};

  ${e=>e.$fixedWidth&&a`
    width: ${e.$fixedWidth}px;
  `};

  ${({$minWidth:e})=>e&&a`
    min-width:${e}px;
  `};

  ${({theme:{styles:e},$headerStyle:t,$isSortActive:n})=>t===`subHeader`&&a`
  padding-bottom: 15px;

  &::after {
    ${e.tables.header.divider};
    content: '';
    display: block;
    height: 1px;
    left: ${n?`-15px`:`0`};
    right: 0;
    width: ${n?`calc(100% + 15px)`:`100%`};
    bottom: 0px;
    position: absolute;
  }
`};
`,L=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({$alignment:e})=>e&&a`
      ${e===`right`?`align-items: flex-end`:null};
      ${e===`center`?`align-items: center`:null};
  `};
`,R=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 4px;
`,z=i.div`
  ${({theme:{typography:e}})=>a`
    ${e.tables.groupName};
  `};
  padding-left: 2px;
  padding-right: 8px;
  white-space: nowrap;
`,B=i.div`
  height: 20px;
`,V=i.div`
  ${({theme:{styles:e}})=>a`
    ${e.tables.header.groupLine};
  `};

  height: 1px;
  flex: 1;
  ${({$isLastOfGroup:e})=>e&&a`
    margin-right: 15px;
  `};
`,H=(e,t)=>e.columnId??`column_${t}`,U=(e,t)=>Math.max(e??0,t??0)||void 0,W=(e,t)=>{if(t<0)return null;let n=!0;return t<e.length-1&&(n=e[t].groupTitle!==e[t+1].groupTitle),e[t].groupTitle?t!==0&&e[t-1].groupTitle===e[t].groupTitle?(0,P.jsxs)(N.Fragment,{children:[(0,P.jsx)(B,{}),(0,P.jsx)(V,{$isLastOfGroup:n})]}):(0,P.jsxs)(N.Fragment,{children:[(0,P.jsx)(z,{children:e[t].groupTitle}),(0,P.jsx)(V,{$isLastOfGroup:n})]}):(0,P.jsx)(B,{})},G=({selectable:e,hasStatus:t,hasThumbnail:n,hasTypeIcon:r,allChecked:i,disableAllChecked:a,hasHeaderGroups:o,columnConfig:s,defaultAscending:c,toggleAllCallback:l=()=>{},sortCallback:u=()=>{}})=>{let d=(0,N.useMemo)(()=>{let e=s.findIndex(({sortActive:e})=>e);return e===-1?null:H(s[e],e)},[s]),[f,m]=(0,N.useState)(d),[h,g]=(0,N.useState)(c),[v,y]=(0,N.useState)(!1),[b,x]=(0,N.useState)(d);b!==d&&(x(d),m(d));let[S,C]=(0,N.useState)(c);S!==c&&(C(c),v||g(c));let w=(0,N.useCallback)(e=>{l(e)},[l]),T=(0,N.useCallback)((e,t)=>{let n=s[e];if(n===void 0||!n.sortable)return;let r=H(n,e),i=f===r?!h:h;y(!0),m(r),g(i),u(i,t??r)},[f,h,s,u]);return(0,P.jsxs)(F,{children:[e?(0,P.jsx)(I,{$headerStyle:`header`,$fixedWidth:32,$minWidth:32,children:(0,P.jsx)(p,{checked:i,disabled:a,onChangeCallback:w})}):null,t?(0,P.jsx)(I,{$headerStyle:`header`,$fixedWidth:10,$minWidth:10}):null,n?(0,P.jsx)(I,{$headerStyle:`header`,$fixedWidth:70,$minWidth:70}):null,r?(0,P.jsx)(I,{$headerStyle:`header`,$fixedWidth:35,$minWidth:35}):null,s.map((e,t,n)=>{let{header:r,alignment:i,hasCopyButton:a,columnId:s,sortable:c,width:l,minWidth:u}=e,d=f===H(e,t);return(0,P.jsx)(I,{$alignment:i,$hasCopyButton:a,$fixedWidth:l,$minWidth:U(l,u),$headerStyle:o?`subHeader`:`header`,$isSortActive:d,children:(0,P.jsxs)(L,{$alignment:i,children:[o&&(0,P.jsx)(R,{children:o&&W(n,t)}),(0,P.jsx)(_,{header:r,sortable:c,indexKey:t,columnId:s,isSortActive:d,ascending:h,toggleSort:T})]})},t)})]})};try{G.displayName=`TypeTableHeader`,G.__docgenInfo={description:``,displayName:`TypeTableHeader`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,methods:[],props:{selectable:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`selectable`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!1,tags:{},type:{name:`boolean`}},hasStatus:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`hasStatus`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},hasThumbnail:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`hasThumbnail`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},hasTypeIcon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`hasTypeIcon`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},allChecked:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`allChecked`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},disableAllChecked:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`disableAllChecked`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},hasHeaderGroups:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`hasHeaderGroups`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},columnConfig:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`columnConfig`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`ITableColumnConfig[]`}},defaultAscending:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`defaultAscending`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},toggleAllCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`toggleAllCallback`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!1,tags:{},type:{name:`((checked: boolean) => void)`}},sortCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`sortCallback`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!1,tags:{},type:{name:`((ascending: boolean, columnId: string) => void)`}}},tags:{}}}catch{}})))()}var q,J,Y,X,Z,Q,te,ne,re,$;function ie(){return(ie=e((()=>{q=t(),r(),c(),M(),K(),J=n(),Y=i.div``,X=i.div`
  display: table;
  width: 100%;
  position: relative;
`,Z=i.div`
  color: var(--grey-a11);
`,Q=i.div`
  position: absolute;
  left: 0;
  z-index: 99;
  background-color: var(--grey-2);
  height: calc(100% - 50px);
  opacity: 85%;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${Z} {
    margin-top: 10px;
  }
`,te=i.div`
  position: absolute;
  left: 0;
  z-index: 99;
  padding: 20px;
  width: 100%;
  min-height: 100px;
  text-align: center;
  h3 {
    font-weight: 500;
    color: var(--grey-11);
  }
  color: var(--grey-10);
`,ne=({_checked:e=!1})=>e===!0,re=({checkboxDisabled:e=!1})=>e===!0,$=({columnConfig:e,selectable:t,rows:n=[],closeText:r,hasStatus:i=!1,hasThumbnail:a=!1,hasTypeIcon:o=!1,defaultAscending:s=!1,isLoading:c=!1,loadingText:u=`Loading Data...`,emptyTableTitle:d=``,emptyTableText:f=``,hasHeaderGroups:p=!1,sortCallback:m=()=>{},selectCallback:h=()=>{},toggleAllCallback:g=()=>{}})=>{let _=n??[],[v,y]=(0,q.useState)(!1),[b,x]=(0,q.useState)(!1),S=!c&&(_.length===0||_.length===1&&_[0].columns.length===0),C=d!==``||f!==``;return(0,q.useEffect)(()=>{let e=!1,t=!1;_.every(ne)&&_.length>0&&!S&&(e=!0),(_.some(re)||S||c)&&(t=!0),y(e),x(t)},[S,c,_]),(0,q.useEffect)(()=>{let t=_.findIndex(t=>t.columns.length>e.length);t!==-1&&console.warn(`TypeTable: row ${t} has ${_[t].columns.length} cells but columnConfig has ${e.length} entries. The extra cells are not rendered.`)},[_,e]),(0,J.jsx)(Y,{children:(0,J.jsxs)(X,{children:[(0,J.jsx)(G,{selectable:t,hasStatus:i,hasThumbnail:a,hasTypeIcon:o,defaultAscending:s,allChecked:v,disableAllChecked:b,hasHeaderGroups:p,columnConfig:e,toggleAllCallback:g,sortCallback:m}),c?(0,J.jsxs)(Q,{children:[(0,J.jsx)(l,{size:`large`,styling:`primary`}),(0,J.jsx)(Z,{children:u})]}):null,S&&C?(0,J.jsxs)(te,{children:[(0,J.jsx)(`h3`,{children:d}),(0,J.jsx)(`p`,{children:f})]}):null,_.map((n,s)=>{let c=_.length-1===s;return(0,J.jsx)(j,{rowData:n,isLastRow:c,selectable:t,selectCallback:h,columnConfig:e,hasStatus:i,hasThumbnail:a,hasTypeIcon:o,closeText:r},s)})]})})};try{$.displayName=`TypeTable`,$.__docgenInfo={description:``,displayName:`TypeTable`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,methods:[],props:{columnConfig:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`columnConfig`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`ITableColumnConfig[]`}},rows:{defaultValue:{value:`[]`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`rows`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`ITypeTableData | null`}},selectable:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`selectable`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasStatus:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`hasStatus`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasThumbnail:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`hasThumbnail`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasTypeIcon:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`hasTypeIcon`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},defaultAscending:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`defaultAscending`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`isLoading`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},loadingText:{defaultValue:{value:`Loading Data...`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`loadingText`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},emptyTableTitle:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`emptyTableTitle`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},emptyTableText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`emptyTableText`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},hasHeaderGroups:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`hasHeaderGroups`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},selectCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`selectCallback`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((checked: boolean, id?: string | number) => void)`}},toggleAllCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`toggleAllCallback`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((checked: boolean) => void)`}},sortCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`sortCallback`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((ascending: boolean, columnId: string) => void)`}},closeText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`closeText`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{ie as n,$ as t};