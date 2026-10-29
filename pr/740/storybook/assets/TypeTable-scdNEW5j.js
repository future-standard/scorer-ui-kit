import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Icon-Bj-W_PAo.js";import{n as a,t as o}from"./Spinner-CeNS2_He.js";import{n as s,t as c}from"./TableRowThumbnail-BEcggtFS.js";import{n as l,t as u}from"./Checkbox-DWjSRSaq.js";import{n as d,t as f}from"./useCopyToClipboard-BVF9W5gA.js";import{n as p,t as m}from"./TableHeaderTitle--NyFxPpt.js";import{a as h,i as g,o as _}from"./iframe-DkCQ6b6C.js";var v,y,b,x,S,C;function w(){return(w=e((()=>{_(),f(),r(),v=n(),y=h.button`

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

`,b=h.div`
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
    ${({theme:e,$cellStyle:t,$alignment:n})=>t===`firstColumn`?g`
      ${e.typography.table.columnData[t]};
    `:g`
      ${e.typography.table.columnData[t][n]};
    `}
  }

  a:hover {
    text-decoration: underline;
  }

  ${({$hasCopyButton:e})=>e&&g`
    padding-right: 20px;
  `};

  ${({theme:{styles:e},$hideDivider:t})=>!t&&g`
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
`,x=h.span`
  ${({theme:e})=>g`
    ${e.typography.table.columnData.unit};
  `}
`,S=h.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  ${({$status:e=`neutral`,theme:{colors:t}})=>g`
    background: ${t.status[e]};
  `}
`,C=({showUnit:e=!1,showStatus:t=!1,status:n,unit:r=``,cellStyle:a=`normalImportance`,alignment:o=`left`,hideDivider:s,isLastRow:c,hasCopyButton:l,href:u,children:f})=>{s=c?!0:s;let{copyToClipboard:p}=d();return(0,v.jsxs)(b,{$cellStyle:a,$alignment:o,$hideDivider:s,$hasCopyButton:l,children:[t?(0,v.jsx)(S,{$status:n}):null,u?(0,v.jsx)(`a`,{href:u,children:f}):f,e?(0,v.jsx)(x,{children:r}):null,l?(0,v.jsx)(y,{onClick:()=>typeof f==`string`&&p(f),children:(0,v.jsx)(i,{icon:`Copy`,size:16})}):null]})};try{C.displayName=`TypeTableCell`,C.__docgenInfo={description:``,displayName:`TypeTableCell`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,methods:[],props:{isLastRow:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`isLastRow`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hideDivider:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`hideDivider`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},cellStyle:{defaultValue:{value:`normalImportance`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`cellStyle`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeCellStyle`,value:[{value:`"firstColumn"`},{value:`"lowImportance"`},{value:`"normalImportance"`},{value:`"highImportance"`}]}},alignment:{defaultValue:{value:`left`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`alignment`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeCellAlignment`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},href:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`href`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},showUnit:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`showUnit`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},showStatus:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`showStatus`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},unit:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`unit`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},status:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`status`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},hasCopyButton:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`}],description:``,name:`hasCopyButton`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableCell.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var T,E,D;function O(){return(O=e((()=>{_(),T=n(),E=h.div`
  height: 42px;
  width: 4px;
  border-radius: 3px;
  display: block;

  ${({$status:e,theme:{colors:t}})=>g`
    background: ${t.status[e]};
    content:'${e}';
  `}

`,D=({status:e=`neutral`})=>(0,T.jsx)(E,{$status:e});try{D.displayName=`TypeTableDeviceStatus`,D.__docgenInfo={description:``,displayName:`TypeTableDeviceStatus`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/atoms/TypeTableDeviceStatus.tsx`,methods:[],props:{status:{defaultValue:{value:`neutral`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableDeviceStatus.tsx`,name:`IProps`}],description:``,name:`status`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableDeviceStatus.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`IDeviceStatus`,value:[{value:`"neutral"`},{value:`"danger"`},{value:`"caution"`},{value:`"good"`},{value:`"folder"`}]}}},tags:{}}}catch{}})))()}var k,A,j,M;function N(){return(N=e((()=>{k=t(),_(),l(),r(),s(),w(),O(),A=n(),j=h.div`
  display: table-row;
  ${({$isEmpty:e})=>e&&g`
    visibility: hidden;
  `};
`,M=({selectable:e=!1,selectCallback:t,hasStatus:n,hasThumbnail:r,hasTypeIcon:a,rowData:o,isLastRow:s,columnConfig:l,closeText:d})=>{let f=(0,k.useCallback)(e=>{t&&t(e,o.id)},[o.id,t]),p=o.columns.length===0;return(0,A.jsxs)(j,{$isEmpty:p,children:[e?(0,A.jsx)(C,{hideDivider:!0,children:(0,A.jsx)(u,{checked:o._checked,disabled:o.checkboxDisabled,onChangeCallback:f})}):null,n?(0,A.jsx)(C,{hideDivider:!0,children:(0,A.jsx)(D,{status:o.header?.status})}):null,r?(0,A.jsx)(C,{hideDivider:!0,children:(0,A.jsx)(c,{image:o.header?.image,mediaUrl:o.header?.mediaUrl,mediaType:o.header?.mediaType,closeText:d,onClickThumbnail:o.header?.onClickThumbnail})}):null,a?(0,A.jsx)(C,{hideDivider:!0,children:(0,A.jsx)(i,{icon:o.header?.icon||``,color:`dimmed`,weight:`regular`,size:16})}):null,o.columns.map((e,t)=>{let n=l[t];if(n===void 0)return null;let{cellStyle:r,alignment:i,showUnit:a,showStatus:o,hasCopyButton:c}=n,{unit:u,status:d,text:f,customComponent:p}=e;return(0,A.jsx)(C,{href:e.href,cellStyle:r,alignment:i,showUnit:a,showStatus:o,hasCopyButton:c,unit:u,status:d,isLastRow:s,children:p||f},t)})]})};try{M.displayName=`TypeTableRow`,M.__docgenInfo={description:``,displayName:`TypeTableRow`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,methods:[],props:{isLastRow:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`isLastRow`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},selectable:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`selectable`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasStatus:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`hasStatus`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasThumbnail:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`hasThumbnail`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasTypeIcon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`hasTypeIcon`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},columnConfig:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`columnConfig`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`ITableColumnConfig[]`}},rowData:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`rowData`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`IRowData`}},selectCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`selectCallback`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((checked: boolean, id?: string | number) => void)`}},closeText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`}],description:``,name:`closeText`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TypeTableRow.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{P=t(),_(),l(),p(),F=n(),I=h.div`
  display: table-row;
  height: 50px;
`,L=h.div`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${e=>e.theme.fontFamily.ui};

  ${({$hasCopyButton:e})=>e&&g`
    padding-right: 20px;
  `};

  ${({theme:e,$alignment:t,$headerStyle:n})=>t?g`
    ${e.typography.table[n][t]};
  `:g`
    ${e.typography.table[n].left};
  `};

  ${e=>e.$fixedWidth&&g`
    width: ${e.$fixedWidth}px;
  `};

  ${({$minWidth:e})=>e&&g`
    min-width:${e}px;
  `};

  ${({theme:{styles:e},$headerStyle:t,$isSortActive:n})=>t===`subHeader`&&g`
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
`,R=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({$alignment:e})=>e&&g`
      ${e===`right`?`align-items: flex-end`:null};
      ${e===`center`?`align-items: center`:null};
  `};
`,z=h.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 4px;
`,B=h.div`
  ${({theme:{typography:e}})=>g`
    ${e.tables.groupName};
  `};
  padding-left: 2px;
  padding-right: 8px;
  white-space: nowrap;
`,V=h.div`
  height: 20px;
`,H=h.div`
  ${({theme:{styles:e}})=>g`
    ${e.tables.header.groupLine};
  `};

  height: 1px;
  flex: 1;
  ${({$isLastOfGroup:e})=>e&&g`
    margin-right: 15px;
  `};
`,U=(e,t)=>e.columnId??`column_${t}`,W=(e,t)=>Math.max(e??0,t??0)||void 0,G=(e,t)=>{if(t<0)return null;let n=!0;return t<e.length-1&&(n=e[t].groupTitle!==e[t+1].groupTitle),e[t].groupTitle?t!==0&&e[t-1].groupTitle===e[t].groupTitle?(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(V,{}),(0,F.jsx)(H,{$isLastOfGroup:n})]}):(0,F.jsxs)(P.Fragment,{children:[(0,F.jsx)(B,{children:e[t].groupTitle}),(0,F.jsx)(H,{$isLastOfGroup:n})]}):(0,F.jsx)(V,{})},K=({selectable:e,hasStatus:t,hasThumbnail:n,hasTypeIcon:r,allChecked:i,disableAllChecked:a,hasHeaderGroups:o,columnConfig:s,defaultAscending:c,toggleAllCallback:l=()=>{},sortCallback:d=()=>{}})=>{let f=(0,P.useMemo)(()=>{let e=s.findIndex(({sortActive:e})=>e);return e===-1?null:U(s[e],e)},[s]),[p,h]=(0,P.useState)(f),[g,_]=(0,P.useState)(c),[v,y]=(0,P.useState)(!1),[b,x]=(0,P.useState)(f);b!==f&&(x(f),h(f));let[S,C]=(0,P.useState)(c);S!==c&&(C(c),v||_(c));let w=(0,P.useCallback)(e=>{l(e)},[l]),T=(0,P.useCallback)((e,t)=>{let n=s[e];if(n===void 0||!n.sortable)return;let r=U(n,e),i=p===r?!g:g;y(!0),h(r),_(i),d(i,t??r)},[p,g,s,d]);return(0,F.jsxs)(I,{children:[e?(0,F.jsx)(L,{$headerStyle:`header`,$fixedWidth:32,$minWidth:32,children:(0,F.jsx)(u,{checked:i,disabled:a,onChangeCallback:w})}):null,t?(0,F.jsx)(L,{$headerStyle:`header`,$fixedWidth:10,$minWidth:10}):null,n?(0,F.jsx)(L,{$headerStyle:`header`,$fixedWidth:70,$minWidth:70}):null,r?(0,F.jsx)(L,{$headerStyle:`header`,$fixedWidth:35,$minWidth:35}):null,s.map((e,t,n)=>{let{header:r,alignment:i,hasCopyButton:a,columnId:s,sortable:c,width:l,minWidth:u}=e,d=p===U(e,t);return(0,F.jsx)(L,{$alignment:i,$hasCopyButton:a,$fixedWidth:l,$minWidth:W(l,u),$headerStyle:o?`subHeader`:`header`,$isSortActive:d,children:(0,F.jsxs)(R,{$alignment:i,children:[o&&(0,F.jsx)(z,{children:o&&G(n,t)}),(0,F.jsx)(m,{header:r,sortable:c,indexKey:t,columnId:s,isSortActive:d,ascending:g,toggleSort:T})]})},t)})]})};try{K.displayName=`TypeTableHeader`,K.__docgenInfo={description:``,displayName:`TypeTableHeader`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,methods:[],props:{selectable:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`selectable`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!1,tags:{},type:{name:`boolean`}},hasStatus:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`hasStatus`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},hasThumbnail:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`hasThumbnail`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},hasTypeIcon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`hasTypeIcon`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},allChecked:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`allChecked`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},disableAllChecked:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`disableAllChecked`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},hasHeaderGroups:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`hasHeaderGroups`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},columnConfig:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`columnConfig`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`ITableColumnConfig[]`}},defaultAscending:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`defaultAscending`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!0,tags:{},type:{name:`boolean`}},toggleAllCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`toggleAllCallback`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!1,tags:{},type:{name:`((checked: boolean) => void)`}},sortCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`}],description:``,name:`sortCallback`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/TypeTableHeader.tsx`,name:`ITableHeader`},required:!1,tags:{},type:{name:`((ascending: boolean, columnId: string) => void)`}}},tags:{}}}catch{}})))()}var J,Y,X,Z,Q,ee,te,ne,re,$;function ie(){return(ie=e((()=>{J=t(),_(),a(),N(),q(),Y=n(),X=h.div``,Z=h.div`
  display: table;
  width: 100%;
  position: relative;
`,Q=h.div`
  color: var(--grey-a11);
`,ee=h.div`
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

  ${Q} {
    margin-top: 10px;
  }
`,te=h.div`
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
`,ne=({_checked:e=!1})=>e===!0,re=({checkboxDisabled:e=!1})=>e===!0,$=({columnConfig:e,selectable:t,rows:n=[],closeText:r,hasStatus:i=!1,hasThumbnail:a=!1,hasTypeIcon:s=!1,defaultAscending:c=!1,isLoading:l=!1,loadingText:u=`Loading Data...`,emptyTableTitle:d=``,emptyTableText:f=``,hasHeaderGroups:p=!1,sortCallback:m=()=>{},selectCallback:h=()=>{},toggleAllCallback:g=()=>{}})=>{let _=n??[],[v,y]=(0,J.useState)(!1),[b,x]=(0,J.useState)(!1),S=!l&&(_.length===0||_.length===1&&_[0].columns.length===0),C=d!==``||f!==``;return(0,J.useEffect)(()=>{let e=!1,t=!1;_.every(ne)&&_.length>0&&!S&&(e=!0),(_.some(re)||S||l)&&(t=!0),y(e),x(t)},[S,l,_]),(0,J.useEffect)(()=>{let t=_.findIndex(t=>t.columns.length>e.length);t!==-1&&console.warn(`TypeTable: row ${t} has ${_[t].columns.length} cells but columnConfig has ${e.length} entries. The extra cells are not rendered.`)},[_,e]),(0,Y.jsx)(X,{children:(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(K,{selectable:t,hasStatus:i,hasThumbnail:a,hasTypeIcon:s,defaultAscending:c,allChecked:v,disableAllChecked:b,hasHeaderGroups:p,columnConfig:e,toggleAllCallback:g,sortCallback:m}),l?(0,Y.jsxs)(ee,{children:[(0,Y.jsx)(o,{size:`large`,styling:`primary`}),(0,Y.jsx)(Q,{children:u})]}):null,S&&C?(0,Y.jsxs)(te,{children:[(0,Y.jsx)(`h3`,{children:d}),(0,Y.jsx)(`p`,{children:f})]}):null,_.map((n,o)=>{let c=_.length-1===o;return(0,Y.jsx)(M,{rowData:n,isLastRow:c,selectable:t,selectCallback:h,columnConfig:e,hasStatus:i,hasThumbnail:a,hasTypeIcon:s,closeText:r},o)})]})})};try{$.displayName=`TypeTable`,$.__docgenInfo={description:``,displayName:`TypeTable`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,methods:[],props:{columnConfig:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`columnConfig`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`ITableColumnConfig[]`}},rows:{defaultValue:{value:`[]`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`rows`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`ITypeTableData | null`}},selectable:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`selectable`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasStatus:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`hasStatus`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasThumbnail:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`hasThumbnail`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hasTypeIcon:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`hasTypeIcon`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},defaultAscending:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`defaultAscending`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`isLoading`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},loadingText:{defaultValue:{value:`Loading Data...`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`loadingText`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},emptyTableTitle:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`emptyTableTitle`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},emptyTableText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`emptyTableText`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},hasHeaderGroups:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`hasHeaderGroups`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},selectCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`selectCallback`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((checked: boolean, id?: string | number) => void)`}},toggleAllCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`toggleAllCallback`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((checked: boolean) => void)`}},sortCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`sortCallback`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((ascending: boolean, columnId: string) => void)`}},closeText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`}],description:``,name:`closeText`,parent:{fileName:`packages/ui-lib/src/Tables/organisms/TypeTable.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{ie as n,$ as t};