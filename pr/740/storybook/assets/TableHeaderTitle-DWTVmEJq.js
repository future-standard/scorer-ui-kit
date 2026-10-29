import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r,t as i}from"./Icon-CmxkaxYk.js";import{a,i as o,o as s}from"./iframe-BmxEQ5Tp.js";var c,l,u;function d(){return(d=e((()=>{s(),r(),c=t(),l=a.div`
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0 2px;
  user-select: none;
  z-index: 99;

  ${n} {
    position: absolute;
    top: 0px;
    left: -15px;
    display: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    padding: 3px 1px;

    ${({$ascending:e})=>e&&o`
      transform: rotate(180deg);
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      top: 0;
    `}
  }

  ${({$isSortActive:e})=>e&&o`
    &:not(hover) {
      ${n} {
        display: inline-flex;
      }
    }
  `}

  ${({theme:{styles:e},$sortable:t})=>t&&o`

    ${e.tables.header.sortable.default};

    &:hover {
      cursor: pointer;
      ${e.tables.header.sortable.hover};

      ${n} {
        ${e.tables.header.sortable.hover};
        display: inline-flex;
      }
    }
  `}
`,u=({header:e,sortable:t,isSortActive:n,ascending:r,columnId:a,indexKey:o,toggleSort:s})=>{let u=(e,t)=>{s(e,t)};return(0,c.jsxs)(l,{$sortable:t,$isSortActive:n,$ascending:r,onClick:()=>{u(o,a)},children:[t&&(0,c.jsx)(i,{icon:`FilterSorting`,size:14,color:`dimmed`}),e]})};try{u.displayName=`TableHeaderTitle`,u.__docgenInfo={description:``,displayName:`TableHeaderTitle`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,methods:[],props:{isSortActive:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`}],description:``,name:`isSortActive`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`},required:!1,tags:{},type:{name:`boolean`}},header:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`}],description:``,name:`header`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`},required:!0,tags:{},type:{name:`string`}},sortable:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`}],description:``,name:`sortable`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`},required:!1,tags:{},type:{name:`boolean`}},ascending:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`}],description:``,name:`ascending`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`},required:!1,tags:{},type:{name:`boolean`}},columnId:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`}],description:``,name:`columnId`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`},required:!1,tags:{},type:{name:`string`}},indexKey:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`}],description:``,name:`indexKey`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`},required:!0,tags:{},type:{name:`number`}},toggleSort:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`}],description:``,name:`toggleSort`,parent:{fileName:`packages/ui-lib/src/Tables/atoms/TableHeaderTitle.tsx`,name:`IHeaderProps`},required:!0,tags:{},type:{name:`(dataKey: number, columnId?: string | undefined) => void`}}},tags:{}}}catch{}})))()}export{d as n,u as t};