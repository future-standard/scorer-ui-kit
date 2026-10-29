import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Label-CfsFF385.js";import{i as a,o,u as s}from"./helpers-D3bl-wl9.js";import{n as c,t as l}from"./SliderInput-BBfzjLdm.js";import{n as u,t as d}from"./PageHeader-SFbyeX5V.js";import{_ as f,a as p,i as m,o as h}from"./iframe-B9mgqNTy.js";var g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{g=t(),h(),o(),r(),c(),_=n(),v=p.div``,y=p.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 6px;
`,b=p(i)`
  font-family: var(--font-ui);
  margin-bottom: 0;
`,x=m`
  font-family: var(--font-data);
  color: var(--grey-a11);
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  font-size: 12px;
  line-height: 1.5;
`,S=p.div`
  ${x};
`,C=p.div`
  display: flex;
`,w=p.div`
  display: flex;
  align-items: center;
  ${x};
  span {
    font-style: normal;
  }
`,T=(e,t)=>{switch(t){case`seconds`:return{hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:e%60};case`minutes`:return{hours:Math.floor(e/60),minutes:e%60,seconds:0};default:return{hours:e,minutes:0,seconds:0}}},E=(e,t,n)=>{if(!n||!s(t)){let n=s(t)?a(e,t):t;return(0,_.jsxs)(C,{children:[(0,_.jsx)(b,{htmlFor:`duration-slider`,labelText:`${e}`}),(0,_.jsx)(S,{children:n})]})}let r=T(e,t),i=n.split(/(\[H+\]|\[M+\]|\[S+\])/).map((e,t)=>{switch(e){case`[HH]`:return(0,_.jsx)(`span`,{children:r.hours.toString().padStart(2,`0`)},t);case`[H]`:return(0,_.jsx)(`span`,{children:r.hours},t);case`[MM]`:return(0,_.jsx)(`span`,{children:r.minutes.toString().padStart(2,`0`)},t);case`[M]`:return(0,_.jsx)(`span`,{children:r.minutes},t);case`[SS]`:return(0,_.jsx)(`span`,{children:r.seconds.toString().padStart(2,`0`)},t);case`[S]`:return(0,_.jsx)(`span`,{children:r.seconds},t);default:return e.replace(/\s+/g,`\xA0`)}});return(0,_.jsx)(C,{children:(0,_.jsx)(w,{children:i})})},D=({max:e,min:t,defaultValue:n=0,title:r=``,timeUnit:a,controlledValue:o,inputCallback:s,timeFormat:c,...u})=>{let[d,f]=(0,g.useState)(n),p=(0,g.useCallback)(e=>{s&&s(e),f(e)},[s]);return(0,_.jsxs)(v,{children:[(0,_.jsxs)(y,{children:[(0,_.jsx)(i,{htmlFor:`duration-slider`,labelText:r}),E(o||d,a,c)]}),(0,_.jsx)(l,{...u,id:`duration-slider`,max:e,min:t,defaultValue:n,onChangeCallback:p})]})};try{D.displayName=`DurationSlider`,D.__docgenInfo={description:``,displayName:`DurationSlider`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,methods:[],props:{title:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},required:!1,tags:{},type:{name:`string`}},timeUnit:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`}],description:``,name:`timeUnit`,parent:{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},required:!0,tags:{},type:{name:`string`}},controlledValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`}],description:``,name:`controlledValue`,parent:{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},required:!1,tags:{},type:{name:`number`}},timeFormat:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`}],description:``,name:`timeFormat`,parent:{fileName:`packages/ui-lib/src/Form/molecules/DurationSlider.tsx`,name:`IDurationSliderProps`},required:!1,tags:{},type:{name:`string`}},min:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`min`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number`}},max:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`max`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number`}},step:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`step`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number`}},marks:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`marks`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`ISliderMark[]`}},defaultValue:{defaultValue:{value:`0`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`defaultValue`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number | (number & readonly string[])`}},value:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`value`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`number | (number & readonly string[])`}},thumbColor:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`thumbColor`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`IFeedbackColor`,value:[{value:`"neutral"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},onlyMarkSelect:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`onlyMarkSelect`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`boolean`}},showValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`showValue`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`boolean`}},inputCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`inputCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`((value: number) => void)`}},onChangeCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`onChangeCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`((value: number) => void)`}},allMarkCentered:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`}],description:``,name:`allMarkCentered`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SliderInput.tsx`,name:`ISliderOwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{k=f(),A=t(),O(),u(),h(),j=n(),{action:M}=__STORYBOOK_MODULE_ACTIONS__,N={title:`Form/Input`,component:D,decorators:[]},P=p.div`
  display: flex;
`,F=p.div`
  margin: 20px;
  width: 280px;
`,I=[{value:1,label:`1H`},{value:2,label:`2H`},{value:3,label:`3H`},{value:4,label:`4H`},{value:5,label:`5H`},{value:6,label:`6H`},{value:7,label:`7H`},{value:8,label:`8H`}],L=[{value:3,label:`3s`},{value:360,label:``},{value:720,label:``},{value:1080,label:``},{value:1440,label:``},{value:1800,label:``},{value:2160,label:``},{value:2520,label:``},{value:2880,label:``},{value:3240,label:``},{value:3600,label:`1h`}],R=1800,z=e=>e>=3600?{time:Math.round(e/3600),unit:`hours`}:e>=60?{time:Math.round(e/60),unit:`minutes`}:{time:e,unit:`seconds`},B=(e,t)=>{switch(t){case`seconds`:return{hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:e%60};case`minutes`:return{hours:Math.floor(e/60),minutes:e%60,seconds:0};default:return{hours:e,minutes:0,seconds:0}}},V={hours:{min:1,max:10,marks:[{value:1,label:`1M`},{value:5,label:`5H`},{value:10,label:`10H`}]},minutes:{min:1,max:60,marks:[{value:1,label:`1M`},{value:30,label:`30M`},{value:60,label:`1H`}]},seconds:{min:1,max:3600,marks:[{value:1,label:`1S`},{value:1800,label:`30M`},{value:3600,label:`1H`}]}},H=e=>e===1?``:`s`,U=()=>{let e=(0,k.text)(`Title`,`Duration`),t=(0,k.select)(`Time Unit`,{Seconds:`seconds`,Minutes:`minutes`,Hours:`hours`},`hours`),n=(0,k.boolean)(`Disabled`,!1),r=(0,k.number)(`Max`,8),i=(0,k.number)(`Min`,1),a=(0,k.number)(`Default value`,6),o=M(`Input Callback`),s=(0,k.object)(`Marks`,I),c=e=>{console.debug(`updated value`,e),o(`Returned value: ${e}`,e)},[l,u]=(0,A.useState)({time:30,unit:`minutes`}),f=(0,k.text)(`Title 2`,`Time`),p=(0,k.boolean)(`Disabled 2`,!1),m=(0,k.number)(`Max 2`,3600),h=(0,k.number)(`Min 2`,3),g=(0,k.number)(`Default value 2`,R),_=(0,k.boolean)(`Only Mark Select`,!0),v=(0,k.select)(`Template Example Unit`,{Hours:`hours`,Minutes:`minutes`,Seconds:`seconds`},`seconds`),y=(0,k.text)(`Time Format`,`[H]hrs [M]mins [S]secs`),b=(0,k.boolean)(`Use example [H]hr/s [M]min/s [S]sec/s`,!1),[x,S]=(0,A.useState)(y),C=M(`Input Callback`),w=(0,k.object)(`Marks 2`,L),T=e=>{console.debug(`updated value2`,e),C(`Returned value2: ${e}`,e);let t=z(e);u(t)},E=(0,A.useCallback)(e=>{if(!b)return;let{hours:t,minutes:n,seconds:r}=B(e,v),i=[`[H]hr${H(t)}`,`[M]min${H(n)}`,`[S]sec${H(r)}`].join(` `);x!==i&&S(i)},[x,v,b]);return(0,j.jsxs)(P,{children:[(0,j.jsxs)(F,{children:[(0,j.jsx)(d,{title:`Simple Example`,introductionText:`Values are controlled by component`}),(0,j.jsx)(D,{max:r,min:i,disabled:n,inputCallback:c,marks:s,defaultValue:a,title:e,timeUnit:t})]}),(0,j.jsxs)(F,{children:[(0,j.jsx)(d,{title:`Mixed Values Example`,introductionText:`Values are controlled from outside`}),(0,j.jsx)(D,{max:m,min:h,disabled:p,inputCallback:T,marks:w,defaultValue:g,controlledValue:l.time,title:f,timeUnit:l.unit,onlyMarkSelect:_})]}),(0,j.jsxs)(F,{children:[(0,j.jsx)(d,{title:`Date Format Example`,introductionText:`Date Format is used`}),(0,j.jsx)(D,{title:`Custom Titles`,timeUnit:v,max:V[v].max,min:V[v].min,timeFormat:b?x:y,defaultValue:V[v].min,marks:V[v].marks,inputCallback:E})]})]})},W=[`_DurationSlider`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const title = text('Title', 'Duration');
  const durationUnit = select('Time Unit', {
    Seconds: 'seconds',
    Minutes: 'minutes',
    Hours: 'hours'
  }, 'hours');
  const disabled = boolean('Disabled', false);
  const maxValue = number('Max', 8);
  const minValue = number('Min', 1);
  const defaultValue = number('Default value', 6);
  const showValue = action('Input Callback');
  const marks = object('Marks', exampleMarks);
  // const step = number('Step', 1); // still fixing step option
  const handleUpdate = (value: number) => {
    console.debug('updated value', value);
    showValue(\`Returned value: \${value}\`, value);
  };
  const [value2, setValue2] = useState<ITimeValue>({
    time: 30,
    unit: 'minutes'
  });
  const title2 = text('Title 2', 'Time');
  const disabled2 = boolean('Disabled 2', false);
  const maxValue2 = number('Max 2', 3600);
  const minValue2 = number('Min 2', 3);
  const defaultValue2 = number('Default value 2', defaultMixValue);
  const onlyMarkSelect = boolean('Only Mark Select', true);
  const timeFormatUnit = select('Template Example Unit', {
    Hours: 'hours',
    Minutes: 'minutes',
    Seconds: 'seconds'
  }, 'seconds');
  const timeFormat = text('Time Format', '[H]hrs [M]mins [S]secs');
  const useDynamicFormat = boolean('Use example [H]hr/s [M]min/s [S]sec/s', false);
  const [dynamicFormat, setDynamicFormat] = useState(timeFormat);
  const showValue2 = action('Input Callback');
  const marks2 = object('Marks 2', exampleMarks2);
  // const step = number('Step', 1); // still fixing step option
  const handleUpdate2 = (value: number) => {
    console.debug('updated value2', value);
    showValue2(\`Returned value2: \${value}\`, value);
    const newValue = secToMinAndHours(value);
    setValue2(newValue);
  };
  const handleUpdateWithFormat = useCallback((value: number) => {
    if (!useDynamicFormat) {
      return;
    }
    const {
      hours,
      minutes,
      seconds
    } = getTimeValues(value, timeFormatUnit);
    const newFormat = [\`[H]hr\${getPluralSuffix(hours)}\`, \`[M]min\${getPluralSuffix(minutes)}\`, \`[S]sec\${getPluralSuffix(seconds)}\`].join(' ');
    if (dynamicFormat !== newFormat) {
      setDynamicFormat(newFormat);
    }
  }, [dynamicFormat, timeFormatUnit, useDynamicFormat]);
  return <Container>
      <Wrapper>
        <PageHeader title='Simple Example' introductionText='Values are controlled by component' />
        <DurationSlider max={maxValue} min={minValue} disabled={disabled}
      // step={step}
      inputCallback={handleUpdate} marks={marks} defaultValue={defaultValue} title={title} timeUnit={durationUnit} />
      </Wrapper>
      <Wrapper>
        <PageHeader title='Mixed Values Example' introductionText='Values are controlled from outside' />
        <DurationSlider max={maxValue2} min={minValue2} disabled={disabled2}
      // step={step}
      inputCallback={handleUpdate2} marks={marks2} defaultValue={defaultValue2} controlledValue={value2.time} title={title2} timeUnit={value2.unit} onlyMarkSelect={onlyMarkSelect} />
      </Wrapper>
      <Wrapper>
        <PageHeader title='Date Format Example' introductionText='Date Format is used' />
        <DurationSlider title={'Custom Titles'} timeUnit={timeFormatUnit} max={timeFormatData[timeFormatUnit].max} min={timeFormatData[timeFormatUnit].min} timeFormat={useDynamicFormat ? dynamicFormat : timeFormat} defaultValue={timeFormatData[timeFormatUnit].min} marks={timeFormatData[timeFormatUnit].marks} inputCallback={handleUpdateWithFormat} />
      </Wrapper>
    </Container>;
}`,...U.parameters?.docs?.source}}}})))()}G();export{U as _DurationSlider,W as __namedExportsOrder,N as default};