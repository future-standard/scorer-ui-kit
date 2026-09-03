import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,Rt as r,T as i,Wt as a,q as o,wt as s}from"./iframe-CH2zgN-8.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=c((()=>{l=a(),u=e(),s(),r(),d=t(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Form/Input`,component:i,decorators:[]},m=n.div`
  display: flex;
`,h=n.div`
  margin: 20px;
  width: 280px;
`,g=[{value:1,label:`1H`},{value:2,label:`2H`},{value:3,label:`3H`},{value:4,label:`4H`},{value:5,label:`5H`},{value:6,label:`6H`},{value:7,label:`7H`},{value:8,label:`8H`}],_=[{value:3,label:`3s`},{value:360,label:``},{value:720,label:``},{value:1080,label:``},{value:1440,label:``},{value:1800,label:``},{value:2160,label:``},{value:2520,label:``},{value:2880,label:``},{value:3240,label:``},{value:3600,label:`1h`}],v=1800,y=e=>e>=3600?{time:Math.round(e/3600),unit:`hours`}:e>=60?{time:Math.round(e/60),unit:`minutes`}:{time:e,unit:`seconds`},b=(e,t)=>{switch(t){case`seconds`:return{hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:e%60};case`minutes`:return{hours:Math.floor(e/60),minutes:e%60,seconds:0};default:return{hours:e,minutes:0,seconds:0}}},x={hours:{min:1,max:10,marks:[{value:1,label:`1M`},{value:5,label:`5H`},{value:10,label:`10H`}]},minutes:{min:1,max:60,marks:[{value:1,label:`1M`},{value:30,label:`30M`},{value:60,label:`1H`}]},seconds:{min:1,max:3600,marks:[{value:1,label:`1S`},{value:1800,label:`30M`},{value:3600,label:`1H`}]}},S=e=>e===1?``:`s`,C=()=>{let e=(0,l.text)(`Title`,`Duration`),t=(0,l.select)(`Time Unit`,{Seconds:`seconds`,Minutes:`minutes`,Hours:`hours`},`hours`),n=(0,l.boolean)(`Disabled`,!1),r=(0,l.number)(`Max`,8),a=(0,l.number)(`Min`,1),s=(0,l.number)(`Default value`,6),c=f(`Input Callback`),p=(0,l.object)(`Marks`,g),C=e=>{console.debug(`updated value`,e),c(`Returned value: ${e}`,e)},[w,T]=(0,u.useState)({time:30,unit:`minutes`}),E=(0,l.text)(`Title 2`,`Time`),D=(0,l.boolean)(`Disabled 2`,!1),O=(0,l.number)(`Max 2`,3600),k=(0,l.number)(`Min 2`,3),A=(0,l.number)(`Default value 2`,v),j=(0,l.boolean)(`Only Mark Select`,!0),M=(0,l.select)(`Template Example Unit`,{Hours:`hours`,Minutes:`minutes`,Seconds:`seconds`},`seconds`),N=(0,l.text)(`Time Format`,`[H]hrs [M]mins [S]secs`),P=(0,l.boolean)(`Use example [H]hr/s [M]min/s [S]sec/s`,!1),[F,I]=(0,u.useState)(N),L=f(`Input Callback`),R=(0,l.object)(`Marks 2`,_),z=e=>{console.debug(`updated value2`,e),L(`Returned value2: ${e}`,e);let t=y(e);T(t)},B=(0,u.useCallback)(e=>{if(!P)return;let{hours:t,minutes:n,seconds:r}=b(e,M),i=[`[H]hr${S(t)}`,`[M]min${S(n)}`,`[S]sec${S(r)}`].join(` `);F!==i&&I(i)},[F,M,P]);return(0,d.jsxs)(m,{children:[(0,d.jsxs)(h,{children:[(0,d.jsx)(o,{title:`Simple Example`,introductionText:`Values are controlled by component`}),(0,d.jsx)(i,{max:r,min:a,disabled:n,inputCallback:C,marks:p,defaultValue:s,title:e,timeUnit:t})]}),(0,d.jsxs)(h,{children:[(0,d.jsx)(o,{title:`Mixed Values Example`,introductionText:`Values are controlled from outside`}),(0,d.jsx)(i,{max:O,min:k,disabled:D,inputCallback:z,marks:R,defaultValue:A,controlledValue:w.time,title:E,timeUnit:w.unit,onlyMarkSelect:j})]}),(0,d.jsxs)(h,{children:[(0,d.jsx)(o,{title:`Date Format Example`,introductionText:`Date Format is used`}),(0,d.jsx)(i,{title:`Custom Titles`,timeUnit:M,max:x[M].max,min:x[M].min,timeFormat:P?F:N,defaultValue:x[M].min,marks:x[M].marks,inputCallback:B})]})]})},C.__docgenInfo={description:``,methods:[],displayName:`_DurationSlider`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w=[`_DurationSlider`]})))()}T();export{C as _DurationSlider,w as __namedExportsOrder,p as default};