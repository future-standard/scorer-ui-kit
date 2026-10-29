import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./IconButton-oZq2OexB.js";import{a as i,i as a,o}from"./iframe-DkCQ6b6C.js";var s,c,l,u;function d(){return(d=e((()=>{o(),n(),s=t(),c=i(r)``,l=i.div`
  display: flex;
  ${c} {
    margin-left: 15px;
  }
  ${c}:first-child {
    margin-left: 0px;
  }

  ${({$alignment:e})=>e===`left`&&a`
    justify-content: flex-start;
  `};

  ${({$alignment:e})=>e===`center`&&a`
    justify-content: center;
  `};

  ${({$alignment:e})=>e===`right`&&a`
    justify-content: flex-end;
  `};
`,u=({buttonsConfig:e,alignment:t=`right`})=>(0,s.jsx)(l,{$alignment:t,children:e.map(e=>{let{icon:t,size:n,weight:r,color:i,hoverColor:a,onClick:o}=e;return(0,s.jsx)(c,{icon:t,size:n,weight:r,color:i,hoverColor:a,onClick:o},`${t}-${n}`)})});try{u.displayName=`ActionButtons`,u.__docgenInfo={description:``,displayName:`ActionButtons`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/molecules/ActionButtons.tsx`,methods:[],props:{buttonsConfig:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/ActionButtons.tsx`,name:`TypeLiteral`}],description:``,name:`buttonsConfig`,required:!0,tags:{},type:{name:`IconButtonData[]`}},alignment:{defaultValue:{value:`right`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/ActionButtons.tsx`,name:`TypeLiteral`}],description:``,name:`alignment`,required:!1,tags:{},type:{name:`enum`,raw:`IAlignmentOptions`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}}},tags:{}}}catch{}})))()}export{d as n,u as t};