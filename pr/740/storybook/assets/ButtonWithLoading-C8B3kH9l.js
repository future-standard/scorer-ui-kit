import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Button-q266cx_-.js";import{n as i,t as a}from"./Spinner-CLXh3KtQ.js";import{a as o,i as s,o as c}from"./iframe-BmxEQ5Tp.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{c(),i(),n(),l=t(),u=o.div`
  display: inline;
`,d=o.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);

  transition: padding var(--speed-slow) var(--easing-primary-in-out);
`,f=o.div`
  height: inherit;
  flex: 0 0 calc((var(--button-h-padding) * 2) + var(--button-icon-size));
  width: calc((var(--button-h-padding) * 2) + var(--button-icon-size));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  border: 0px solid var(--button-loading-area-divider-color);
  background-color: var(--button-loading-area-background-color);

  transition:
    flex var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow),
    opacity var(--speed-slow) var(--easing-primary-in-out);

  ${({$position:e})=>s`
    order: ${e&&e===`left`?0:2};
    ${e===`left`?`border-right-width: 1px;`:`border-left-width: 1px;`};
  `}

  svg {
    display:block;
  }
`,p=o.div`
  display: flex;
  flex:1;
  height: inherit;

  ${({$loading:e})=>e?s`

    transition: margin var(--speed-slow) var(--easing-primary-in-out);

    ${f}{
      opacity: 1;
      transition: flex var(--speed-slow) var(--easing-primary-in-out), opacity var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow);
    }
  `:s`
    ${f}{
      flex: 0 0 0px;
    }
  `}
`,m=({design:e=`primary`,size:t=`normal`,shadow:n=!1,onClick:i,disabled:o,position:s,loading:c=!1,children:m,...h})=>(0,l.jsx)(u,{children:(0,l.jsx)(r,{noPadding:!0,disabled:o||c,design:e,size:t,shadow:n,onClick:i,loading:c,...h,children:(0,l.jsxs)(p,{$loading:c,$design:e,$size:t,children:[(0,l.jsx)(d,{children:m}),(0,l.jsx)(f,{$design:e,$position:s,children:(0,l.jsx)(a,{size:t===`xsmall`||t===`small`?`xsmall`:`small`,styling:e})})]})})});try{m.displayName=`ButtonWithLoading`,m.__docgenInfo={description:``,displayName:`ButtonWithLoading`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,methods:[],props:{position:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,name:`IProps`}],description:``,name:`position`,parent:{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`"left" | "right"`,value:[{value:`"left"`},{value:`"right"`}]}},shadow:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,name:`IProps`}],description:``,name:`shadow`,parent:{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`normal`},declarations:[{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`}],description:``,name:`size`,parent:{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeButtonSizes`,value:[{value:`"normal"`},{value:`"large"`},{value:`"small"`},{value:`"xsmall"`}]}},design:{defaultValue:{value:`primary`},declarations:[{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeButtonDesigns`,value:[{value:`"warning"`},{value:`"primary"`},{value:`"secondary"`},{value:`"danger"`},{value:`"text-only"`},{value:`"outline"`}]}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`}],description:``,name:`loading`,parent:{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{h as n,m as t};