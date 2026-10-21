import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{c as r,o as i}from"./helpers-D3bl-wl9.js";import{a,i as o,o as s}from"./iframe-PEYaYO03.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{c=t(),s(),i(),l=n(),u=16,d=a.div`
  font-family: ${({theme:e})=>e.fontFamily.data};
  position: relative;
  height: 30px;
  margin-top: 20px;
  ${({$disabled:e})=>e&&o`
    opacity: .5;
  `};
`,f=a.input`
  width: 100%;
  margin: 0;
  padding:0;
  opacity: .001;
  z-index: 99;
  cursor: ${({disabled:e})=>e?`not-allowed`:`pointer`};
`,p=a.div`
  position: absolute;
  left: ${u/2}px;
  top: 10px;
  width: calc(100% - ${u}px);
  height: 2px;
  border-radius: 11px;
  background-image: linear-gradient(to bottom, var(--grey-10), var(--primary-10) 98%);
`,m=a.span`
  position: absolute;
  top: -3px;
  left: ${({$leftValue:e})=>`calc(${e}% + 7px)`};
  width: 1px;
  height: 9px;
  opacity: 0.25;
  background-color: var(--primary-11);
`,h=a.span`
  position: absolute;
  top: -24px;
  left: ${({$leftValue:e})=>`calc(${e}% + 7px)`};

  font-size: 10px;
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  line-height: normal;
  text-align: center;
  color: var(--grey-a11);

  ${({$alignment:e})=>e===`center`&&o`transform: translateX(-50%);;`}
  ${({$alignment:e})=>e===`right`&&o`transform: translateX(5%);`}
  ${({$alignment:e})=>e===`left`&&o`transform: translateX(-95%);`}
`,g=a.div`
  position: relative;
  margin-right: 16px;
  left: 0;
  top: 10px;
  width: calc(100% - ${u}px);
  height: 2px;
`,_=a.span`
  width: ${u}px;
  height: ${u}px;
  border-radius: 8px;
  background-color: ${({theme:e,$bgColor:t})=>e.colors.feedback[t]};
  position: absolute;
  top: -7.5px;
  left: ${({$leftValue:e})=>`${e}%`};
`,v=a(_)`
  opacity: .5;
`,y=(e,t,n)=>C(e,t,n),b=(e,t)=>t.reduce((t,n)=>Math.abs(n.value-e)<Math.abs(t.value-e)?n:t).value,x=(e,t)=>!e&&!t?0:t||(e>0?0:e-1),S=(e,t)=>e===null&&!t?100:t&&t>e?t+1:e,C=(e,t,n)=>Math.round((e-t)*100/(n-t)),w=(e,t,n)=>e===t?`right`:e===n?`left`:`center`,T=(e,t,n,r,i)=>{let a=[],o=e.map(({value:r,label:o},s)=>{let u=s===e.length-1?100:C(r,t,n);return a.push((0,l.jsx)(`option`,{children:r},`option-${r}`)),(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(m,{"data-leftvalue":`${u}%`,$leftValue:u}),(0,l.jsx)(h,{$leftValue:u,$alignment:i?`center`:w(r,t,n),children:o})]},`mark-${r}`)});return(0,l.jsxs)(c.Fragment,{children:[o,(0,l.jsx)(`datalist`,{id:r,children:a})]})},E=0,D=({min:e,max:t,marks:n,defaultValue:i,thumbColor:a=`info`,disabled:o=!1,onlyMarkSelect:s=!1,inputCallback:u=()=>{},onChangeCallback:m=()=>{},allMarkCentered:h=!1,showValue:C,children:w,formAction:D,...O})=>{let k=S(t,e),A=x(t,e),j=i&&r(i,A,k)?i:A,[M,N]=(0,c.useState)(j),[P,F]=(0,c.useState)(!1),I=(0,c.useRef)(y(M,A,k));if(n&&s){let e=b(M,n);E=y(e,A,k)}let L=(0,c.useCallback)((e,t)=>{let r=e.target.value;if(r===null)return;let i=parseInt(r,10);I.current=y(i,A,k);let a=n?b(i,n):i,o=n?b(t,n):i;s&&o!==a&&m(a),s||m(i),N(e=>i===e?e:i)},[n,k,A,m,s]),R=(0,c.useCallback)(()=>{F(!0)},[]),z=(0,c.useCallback)(e=>{u(s?E:e),s&&(I.current=E),F(!1)},[u,s]);return(0,c.useEffect)(()=>{let e=i&&r(i,A,k)?i:A;I.current=y(e,A,k),N(e)},[i,k,A]),(0,l.jsxs)(d,{$disabled:o,children:[(0,l.jsx)(p,{}),(0,l.jsxs)(g,{children:[n&&T(n,A,k,`sliderList-${A}-${k}`,h),P&&s?(0,l.jsx)(v,{"data-value":M,$leftValue:E,"data-percentage":E,$bgColor:a}):null,(0,l.jsx)(_,{"data-value":M,$leftValue:I.current,"data-percentage":I.current,$bgColor:a})]}),(0,l.jsx)(f,{...O,type:`range`,disabled:o,list:`sliderList-${A}-${k}`,min:A,max:k,value:M,onMouseUp:()=>z(M),onMouseDown:R,onTouchStart:()=>z(M),onTouchEnd:R,onChange:e=>L(e,M)})]})};try{D.displayName=`SliderInput`,D.__docgenInfo={description:``,displayName:`SliderInput`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/SliderInput.tsx`,methods:[],props:{min:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`min`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number`}},max:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`max`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number`}},step:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`step`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number`}},marks:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`marks`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`ISliderMark[]`}},defaultValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`defaultValue`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number | (number & readonly string[])`}},value:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`value`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number | (number & readonly string[])`}},thumbColor:{defaultValue:{value:`info`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`thumbColor`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`IFeedbackColor`,value:[{value:`"neutral"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},onlyMarkSelect:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`onlyMarkSelect`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`boolean`}},showValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`showValue`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`boolean`}},inputCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`inputCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`((value: number) => void)`}},onChangeCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`onChangeCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`((value: number) => void)`}},allMarkCentered:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`allMarkCentered`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{O as n,D as t};