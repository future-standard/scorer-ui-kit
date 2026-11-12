import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,r as i}from"./styled-components.browser.esm-DRoLZq3m.js";import{n as a,t as o}from"./Button-CVePDF2Y.js";import{n as s,t as c}from"./Spinner-hSZCtfry.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{n(),s(),a(),l=t(),u=r.div`
  display: inline;
`,d=r.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);

  transition: padding var(--speed-slow) var(--easing-primary-in-out);
`,f=r.div`
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

  ${({$position:e})=>i`
    order: ${e&&e===`left`?0:2};
    ${e===`left`?`border-right-width: 1px;`:`border-left-width: 1px;`};
  `}

  svg {
    display:block;
  }
`,p=r.div`
  display: flex;
  flex:1;
  height: inherit;

  ${({$loading:e})=>e?i`

    transition: margin var(--speed-slow) var(--easing-primary-in-out);

    ${f}{
      opacity: 1;
      transition: flex var(--speed-slow) var(--easing-primary-in-out), opacity var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow);
    }
  `:i`
    ${f}{
      flex: 0 0 0px;
    }
  `}
`,m=({design:e=`primary`,size:t=`normal`,shadow:n=!1,onClick:r,disabled:i,position:a,loading:s=!1,children:m,...h})=>(0,l.jsx)(u,{children:(0,l.jsx)(o,{noPadding:!0,disabled:i||s,design:e,size:t,shadow:n,onClick:r,loading:s,...h,children:(0,l.jsxs)(p,{$loading:s,$design:e,$size:t,children:[(0,l.jsx)(d,{children:m}),(0,l.jsx)(f,{$design:e,$position:a,children:(0,l.jsx)(c,{size:t===`xsmall`||t===`small`?`xsmall`:`small`,styling:e})})]})})});try{m.displayName=`ButtonWithLoading`,m.__docgenInfo={description:``,displayName:`ButtonWithLoading`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,methods:[],props:{position:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,name:`IProps`}],description:``,name:`position`,parent:{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`"left" | "right"`,value:[{value:`"left"`},{value:`"right"`}]}},shadow:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,name:`IProps`}],description:``,name:`shadow`,parent:{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithLoading.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`normal`},declarations:[{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`}],description:``,name:`size`,parent:{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeButtonSizes`,value:[{value:`"normal"`},{value:`"large"`},{value:`"small"`},{value:`"xsmall"`}]}},design:{defaultValue:{value:`primary`},declarations:[{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeButtonDesigns`,value:[{value:`"warning"`},{value:`"primary"`},{value:`"secondary"`},{value:`"danger"`},{value:`"text-only"`},{value:`"outline"`}]}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`}],description:``,name:`loading`,parent:{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{h as n,m as t};