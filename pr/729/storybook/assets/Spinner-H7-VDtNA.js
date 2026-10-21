import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,n as r,o as i}from"./iframe-Cw1eIbNi.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{i(),a=t(),o=e=>2*Math.PI*e,s=e=>{let t=o(e);return r`
    0% {
      stroke-dashoffset: -${t*.85};
    }
    50% {
      stroke-dashoffset: -${t*.5};
    }
    100% {
      stroke-dashoffset: -${t*.85};
    }
  `},c=r`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,l=n.circle`
  stroke: ${({$styling:e,$customColor:t})=>t||`var(--spinner-${e}-base, var(--grey-a8))`};
  fill: none;
`,u=n.circle`
  stroke: ${({$styling:e,$customColor:t})=>t||`var(--spinner-${e}-top, var(--white-1))`};
  fill: none;
  stroke-dasharray: ${({r:e})=>o(e)};
  stroke-dashoffset: ${({r:e})=>2*Math.PI*e/2};
  animation:
    ${({r:e})=>s(e)} 4s linear infinite,
    ${c} 1s linear infinite;
  stroke-linecap: round;
`,d=e=>e===`primary`||e===`secondary`||e===`warning`?e:e===`danger`?(console.warn("Button.tsx - Warning, the design prop value `danger` is being deprecated. Use `warning` instead."),`danger`):`simple`,f={xsmall:12,small:16,medium:24,large:36,xlarge:48},p=({size:e=`medium`,styling:t=`primary`,custom:n={}})=>{let{baseColor:r,topColor:i}=n,o=n?.size?n.size:f[e],s=o/5.333,c=o/2-s/2;return(0,a.jsxs)(`svg`,{viewBox:`-${o/2} -${o/2} ${o} ${o}`,width:o,height:o,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Loading`,children:[(0,a.jsx)(l,{cx:`0`,cy:`0`,r:c,strokeWidth:s,$styling:d(t),$customColor:r}),(0,a.jsx)(u,{cx:`0`,cy:`0`,r:c,strokeWidth:s,$styling:d(t),$customColor:i})]})};try{d.displayName=`getButtonDesign`,d.__docgenInfo={description:``,displayName:`getButtonDesign`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Indicators/Spinner.tsx`,methods:[],props:{},tags:{}}}catch{}try{p.displayName=`Spinner`,p.__docgenInfo={description:``,displayName:`Spinner`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Indicators/Spinner.tsx`,methods:[],props:{size:{defaultValue:{value:`medium`},declarations:[{fileName:`packages/ui-lib/src/Indicators/Spinner.tsx`,name:`IProps`}],description:``,name:`size`,parent:{fileName:`packages/ui-lib/src/Indicators/Spinner.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`enum`,raw:`SpinnerSize`,value:[{value:`"medium"`},{value:`"large"`},{value:`"small"`},{value:`"xsmall"`},{value:`"xlarge"`}]}},styling:{defaultValue:{value:`primary`},declarations:[{fileName:`packages/ui-lib/src/Indicators/Spinner.tsx`,name:`IProps`}],description:``,name:`styling`,parent:{fileName:`packages/ui-lib/src/Indicators/Spinner.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},custom:{defaultValue:{value:`{}`},declarations:[{fileName:`packages/ui-lib/src/Indicators/Spinner.tsx`,name:`IProps`}],description:``,name:`custom`,parent:{fileName:`packages/ui-lib/src/Indicators/Spinner.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`ICustomSpinner`}}},tags:{}}}catch{}})))()}export{m as n,p as t};