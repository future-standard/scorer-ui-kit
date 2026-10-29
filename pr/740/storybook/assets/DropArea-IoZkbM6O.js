import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,o as i}from"./iframe-DkCQ6b6C.js";var a,o,s,c,l;function u(){return(u=e((()=>{a=t(),i(),o=n(),s=r.div`
  ${({$height:e})=>e?`height: ${e}`:null};
  position: relative;
`,c=r.div`
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({$inDropZone:e})=>e?`dashed var(--grey-8) 2px`:null};
`,l=({height:e,text:t,dropCallback:n,...r})=>{let[i,l]=(0,a.useState)(!1),u=(0,a.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),l(!0)},[]),d=(0,a.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),l(!1)},[]),f=(0,a.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),p=(0,a.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer?.files&&n&&n(e.dataTransfer.files),l(!1)},[n]),m=(0,a.useCallback)(e=>{e.preventDefault()},[]);return(0,a.useEffect)(()=>(window.addEventListener(`dragover`,m),window.addEventListener(`drop`,m),()=>{window.removeEventListener(`dragover`,m),window.removeEventListener(`drop`,m)}),[m]),(0,o.jsx)(s,{$height:e,...r,children:(0,o.jsx)(c,{$inDropZone:i,onDragEnter:u,onDragLeave:d,onDrop:p,onDragOver:f,children:t})})};try{l.displayName=`DropArea`,l.__docgenInfo={description:``,displayName:`DropArea`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/DropArea.tsx`,methods:[],props:{height:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/DropArea.tsx`,name:`IDropArea`}],description:``,name:`height`,parent:{fileName:`packages/ui-lib/src/Form/atoms/DropArea.tsx`,name:`IDropArea`},required:!1,tags:{},type:{name:`string`}},text:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/DropArea.tsx`,name:`IDropArea`}],description:``,name:`text`,parent:{fileName:`packages/ui-lib/src/Form/atoms/DropArea.tsx`,name:`IDropArea`},required:!1,tags:{},type:{name:`string`}},dropCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/DropArea.tsx`,name:`IDropArea`}],description:``,name:`dropCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/DropArea.tsx`,name:`IDropArea`},required:!1,tags:{},type:{name:`((newFiles: FileList) => void)`}}},tags:{}}}catch{}})))()}export{u as n,l as t};