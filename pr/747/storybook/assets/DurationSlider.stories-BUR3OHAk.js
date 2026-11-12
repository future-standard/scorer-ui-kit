import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,r as a}from"./styled-components.browser.esm-DRoLZq3m.js";import{r as o,t as s}from"./Label-C_93wLsZ.js";import{n as c,t as l}from"./SliderInput-CLtcB7eQ.js";import{d as u,h as d,l as f}from"./iframe-C82YJEyw.js";var p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{p=t(),r(),u(),o(),c(),m=n(),h=i.div``,g=i.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 6px;
`,_=i(s)`
  font-family: var(--font-ui);
  margin-bottom: 0;
`,v=a`
  font-family: var(--font-data);
  color: var(--grey-a11);
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  font-size: 12px;
  line-height: 1.5;
`,y=i.div`
  ${v};
`,b=i.div`
  display: flex;
`,x=i.div`
  display: flex;
  align-items: center;
  ${v};
  span {
    font-style: normal;
  }
`,S=(e,t)=>{switch(t){case`seconds`:return{hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:e%60};case`minutes`:return{hours:Math.floor(e/60),minutes:e%60,seconds:0};default:return{hours:e,minutes:0,seconds:0}}},C=(e,t,n)=>{if(!n||!d(t)){let n=d(t)?f(e,t):t;return(0,m.jsxs)(b,{children:[(0,m.jsx)(_,{htmlFor:`duration-slider`,labelText:`${e}`}),(0,m.jsx)(y,{children:n})]})}let r=S(e,t),i=n.split(/(\[H+\]|\[M+\]|\[S+\])/).map((e,t)=>{switch(e){case`[HH]`:return(0,m.jsx)(`span`,{children:r.hours.toString().padStart(2,`0`)},t);case`[H]`:return(0,m.jsx)(`span`,{children:r.hours},t);case`[MM]`:return(0,m.jsx)(`span`,{children:r.minutes.toString().padStart(2,`0`)},t);case`[M]`:return(0,m.jsx)(`span`,{children:r.minutes},t);case`[SS]`:return(0,m.jsx)(`span`,{children:r.seconds.toString().padStart(2,`0`)},t);case`[S]`:return(0,m.jsx)(`span`,{children:r.seconds},t);default:return e.replace(/\s+/g,`\xA0`)}});return(0,m.jsx)(b,{children:(0,m.jsx)(x,{children:i})})},w=({max:e,min:t,defaultValue:n=0,title:r=``,timeUnit:i,controlledValue:a,inputCallback:o,timeFormat:c,...u})=>{let[d,f]=(0,p.useState)(n),_=(0,p.useCallback)(e=>{o&&o(e),f(e)},[o]);return(0,m.jsxs)(h,{children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(s,{htmlFor:`duration-slider`,labelText:r}),C(a||d,i,c)]}),(0,m.jsx)(l,{...u,id:`duration-slider`,max:e,min:t,defaultValue:n,onChangeCallback:_})]})};try{w.displayName=`DurationSlider`,w.__docgenInfo={description:``,displayName:`DurationSlider`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,methods:[],props:{title:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},required:!1,tags:{},type:{name:`string`}},timeUnit:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`}],description:``,name:`timeUnit`,parent:{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},required:!0,tags:{},type:{name:`string`}},controlledValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`}],description:``,name:`controlledValue`,parent:{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},required:!1,tags:{},type:{name:`number`}},timeFormat:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`}],description:``,name:`timeFormat`,parent:{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},required:!1,tags:{},type:{name:`string`}},min:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`min`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number`}},max:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`max`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number`}},step:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`step`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number`}},marks:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`marks`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`ISliderMark[]`}},defaultValue:{defaultValue:{value:`0`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`defaultValue`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number | (number & readonly string[])`}},value:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`value`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number | (number & readonly string[])`}},thumbColor:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`thumbColor`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`IFeedbackColor`,value:[{value:`"neutral"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},onlyMarkSelect:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`onlyMarkSelect`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`boolean`}},showValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`showValue`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`boolean`}},inputCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`inputCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`((value: number) => void)`}},onChangeCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`onChangeCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`((value: number) => void)`}},allMarkCentered:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`allMarkCentered`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{E=t(),T(),r(),D=n(),{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:k}=__STORYBOOK_MODULE_TEST__,A=i.div`
  width: 280px;
`,j=[1,2,3,4,5,6,7,8].map(e=>({value:e,label:`${e}H`})),M=[{value:3,label:`3s`},...[360,720,1080,1440,1800,2160,2520,2880,3240].map(e=>({value:e,label:``})),{value:3600,label:`1h`}],N={hours:{min:1,max:10,marks:[{value:1,label:`1H`},{value:5,label:`5H`},{value:10,label:`10H`}]},minutes:{min:1,max:60,marks:[{value:1,label:`1M`},{value:30,label:`30M`},{value:60,label:`1H`}]},seconds:{min:1,max:3600,marks:[{value:1,label:`1S`},{value:1800,label:`30M`},{value:3600,label:`1H`}]}},P=e=>e>=3600?{time:Math.round(e/3600),unit:`hours`}:e>=60?{time:Math.round(e/60),unit:`minutes`}:{time:e,unit:`seconds`},F=(e,t)=>{switch(t){case`seconds`:return{hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:e%60};case`minutes`:return{hours:Math.floor(e/60),minutes:e%60,seconds:0};default:return{hours:e,minutes:0,seconds:0}}},I=e=>e===1?``:`s`,L=e=>e in N,R=({useDynamicFormat:e,...t})=>{let[n,r]=(0,E.useState)(t.timeFormat),i=L(t.timeUnit)?N[t.timeUnit]:void 0,a=n=>{if(t.inputCallback?.(n),!e)return;let{hours:i,minutes:a,seconds:o}=F(n,t.timeUnit);r([`[H]hr${I(i)}`,`[M]min${I(a)}`,`[S]sec${I(o)}`].join(` `))};return(0,D.jsx)(w,{...t,...i,defaultValue:i?.min??t.defaultValue,timeFormat:e?n:t.timeFormat,inputCallback:a},t.timeUnit)},z={title:`Form/Input/DurationSlider`,component:w,decorators:[e=>(0,D.jsx)(A,{children:(0,D.jsx)(e,{})})],argTypes:{timeUnit:{control:`select`,options:[`seconds`,`minutes`,`hours`]},thumbColor:{control:`select`},defaultValue:{control:`number`},controlledValue:{control:!1,table:{defaultValue:{summary:`uncontrolled`}}},timeFormat:{control:!1,table:{defaultValue:{summary:`unset`}}},useDynamicFormat:{control:!1,table:{disable:!0}},step:{control:!1,table:{defaultValue:{summary:`unset`}}},value:{control:!1,table:{defaultValue:{summary:`uncontrolled`}}},onChangeCallback:{control:!1,table:{defaultValue:{summary:`replaced by the component`}}}},args:{title:`Duration`,timeUnit:`hours`,min:1,max:8,defaultValue:6,marks:j,thumbColor:`info`,disabled:!1,onlyMarkSelect:!1,showValue:!1,allMarkCentered:!1,useDynamicFormat:!1,inputCallback:k()},render:({useDynamicFormat:e,...t})=>(0,D.jsx)(w,{...t},String(t.defaultValue))},B={},V={argTypes:{controlledValue:{control:`number`}},args:{title:`Time`,timeUnit:`minutes`,min:3,max:3600,defaultValue:1800,controlledValue:30,marks:M,onlyMarkSelect:!0},render:function({useDynamicFormat:e,...t}){let[{controlledValue:n,timeUnit:r},i]=O(),a=e=>{t.inputCallback?.(e);let n=P(e);i({controlledValue:n.time,timeUnit:n.unit})};return(0,D.jsx)(w,{...t,controlledValue:n,timeUnit:r,inputCallback:a},String(t.defaultValue))}},H={argTypes:{timeFormat:{control:`text`},useDynamicFormat:{name:`Use example [H]hr/s [M]min/s [S]sec/s`,control:`boolean`,table:{disable:!1}},min:{control:!1,table:{defaultValue:{summary:`from the unit`}}},max:{control:!1,table:{defaultValue:{summary:`from the unit`}}},marks:{control:!1,table:{defaultValue:{summary:`from the unit`}}},defaultValue:{control:!1,table:{defaultValue:{summary:`min of the unit`}}}},args:{title:`Custom Titles`,timeUnit:`seconds`,timeFormat:`[H]hrs [M]mins [S]secs`,useDynamicFormat:!1,...N.seconds,defaultValue:N.seconds.min},render:e=>(0,D.jsx)(R,{...e})},U=[`Default`,`ControlledValue`,`TimeFormat`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  argTypes: {
    controlledValue: {
      control: 'number'
    }
  },
  args: {
    title: 'Time',
    timeUnit: 'minutes',
    min: 3,
    max: 3600,
    defaultValue: 1800,
    controlledValue: 30,
    marks: secondMarks,
    onlyMarkSelect: true
  },
  render: function Render({
    useDynamicFormat: _dynamic,
    ...args
  }) {
    const [{
      controlledValue,
      timeUnit
    }, updateArgs] = useArgs<Args>();
    const inputCallback = (value: number) => {
      args.inputCallback?.(value);
      const next = secToMinAndHours(value);
      updateArgs({
        controlledValue: next.time,
        timeUnit: next.unit
      });
    };
    return <DurationSlider key={String(args.defaultValue)} {...args} controlledValue={controlledValue} timeUnit={timeUnit} inputCallback={inputCallback} />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  argTypes: {
    timeFormat: {
      control: 'text'
    },
    useDynamicFormat: {
      name: 'Use example [H]hr/s [M]min/s [S]sec/s',
      control: 'boolean',
      table: {
        disable: false
      }
    },
    min: {
      control: false,
      table: {
        defaultValue: {
          summary: 'from the unit'
        }
      }
    },
    max: {
      control: false,
      table: {
        defaultValue: {
          summary: 'from the unit'
        }
      }
    },
    marks: {
      control: false,
      table: {
        defaultValue: {
          summary: 'from the unit'
        }
      }
    },
    defaultValue: {
      control: false,
      table: {
        defaultValue: {
          summary: 'min of the unit'
        }
      }
    }
  },
  args: {
    title: 'Custom Titles',
    timeUnit: 'seconds',
    timeFormat: '[H]hrs [M]mins [S]secs',
    useDynamicFormat: false,
    ...timeFormatData.seconds,
    defaultValue: timeFormatData.seconds.min
  },
  render: args => <DynamicFormatSlider {...args} />
}`,...H.parameters?.docs?.source}}}})))()}W();export{V as ControlledValue,B as Default,H as TimeFormat,U as __namedExportsOrder,z as default};