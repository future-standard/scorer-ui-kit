import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./Icon-CmxkaxYk.js";import{a as i,o as a}from"./iframe-BmxEQ5Tp.js";var o,s,c,l,u;function d(){return(d=e((()=>{a(),n(),o=t(),s=i.div`
  position: relative;
  display: inline-block;
`,c=i.div`
  position: absolute;
  left: 14px;;
  top: -12px;
  border-radius: 4px;
  height: 14px;
  min-width: 14px;
  padding: 2px;
  font-size: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--speed-slow) var(--easing-primary-in-out);
  background-color: ${({theme:e,$color:t})=>t?e.colors.status[t]:`var(--grey-5)`};
`,l=i.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -6px;
  transition: background-color var(--speed-slow) var(--easing-primary-in-out);
  background-color: ${({theme:e,$color:t})=>t?e.colors.status[t]:`var(--grey-5)`};
`,u=({icon:e,status:t,counter:n,maxCounter:i=999})=>(0,o.jsxs)(s,{children:[t&&n===void 0?(0,o.jsx)(l,{$color:t}):n===void 0?null:(0,o.jsx)(c,{$color:t,children:n>i?`${i}+`:n}),(0,o.jsx)(r,{icon:e,size:18,color:`dimmed`})]});try{u.displayName=`StatusIcon`,u.__docgenInfo={description:``,displayName:`StatusIcon`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Icons/StatusIcon.tsx`,methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Icons/StatusIcon.tsx`,name:`IStatusIcon`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Icons/StatusIcon.tsx`,name:`IStatusIcon`},required:!0,tags:{},type:{name:`string`}},status:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Icons/StatusIcon.tsx`,name:`IStatusIcon`}],description:``,name:`status`,parent:{fileName:`packages/ui-lib/src/Icons/StatusIcon.tsx`,name:`IStatusIcon`},required:!1,tags:{},type:{name:`enum`,raw:`IStatusDot`,value:[{value:`"neutral"`},{value:`"danger"`},{value:`"caution"`},{value:`"good"`},{value:`"highlight"`}]}},counter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Icons/StatusIcon.tsx`,name:`IStatusIcon`}],description:``,name:`counter`,parent:{fileName:`packages/ui-lib/src/Icons/StatusIcon.tsx`,name:`IStatusIcon`},required:!1,tags:{},type:{name:`number`}},maxCounter:{defaultValue:{value:`999`},declarations:[{fileName:`packages/ui-lib/src/Icons/StatusIcon.tsx`,name:`IStatusIcon`}],description:``,name:`maxCounter`,parent:{fileName:`packages/ui-lib/src/Icons/StatusIcon.tsx`,name:`IStatusIcon`},required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}export{d as n,u as t};