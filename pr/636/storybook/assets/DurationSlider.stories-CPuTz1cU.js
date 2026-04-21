import{a as e,n as t}from"./chunk-BneVvdWh.js";import{H as n,Lt as r,Ot as i,Rt as a,b as o,bt as s,jt as c,kt as l}from"./iframe-CqsWnfTx.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;t((()=>{u=r(),d=e(a()),s(),l(),f=i(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Form/Input`,component:o,decorators:[]},h=c.div`
  display: flex;
`,g=c.div`
  margin: 20px;
  width: 280px;
`,_=[{value:1,label:`1H`},{value:2,label:`2H`},{value:3,label:`3H`},{value:4,label:`4H`},{value:5,label:`5H`},{value:6,label:`6H`},{value:7,label:`7H`},{value:8,label:`8H`}],v=[{value:3,label:`3s`},{value:360,label:``},{value:720,label:``},{value:1080,label:``},{value:1440,label:``},{value:1800,label:``},{value:2160,label:``},{value:2520,label:``},{value:2880,label:``},{value:3240,label:``},{value:3600,label:`1h`}],y=1800,b=e=>e>=3600?{time:Math.round(e/3600),unit:`hours`}:e>=60?{time:Math.round(e/60),unit:`minutes`}:{time:e,unit:`seconds`},x=(e,t)=>{switch(t){case`seconds`:return{hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:e%60};case`minutes`:return{hours:Math.floor(e/60),minutes:e%60,seconds:0};default:return{hours:e,minutes:0,seconds:0}}},S={hours:{min:1,max:10,marks:[{value:1,label:`1M`},{value:5,label:`5H`},{value:10,label:`10H`}]},minutes:{min:1,max:60,marks:[{value:1,label:`1M`},{value:30,label:`30M`},{value:60,label:`1H`}]},seconds:{min:1,max:3600,marks:[{value:1,label:`1S`},{value:1800,label:`30M`},{value:3600,label:`1H`}]}},C=e=>e===1?``:`s`,w=()=>{let e=(0,u.text)(`Title`,`Duration`),t=(0,u.select)(`Time Unit`,{Seconds:`seconds`,Minutes:`minutes`,Hours:`hours`},`hours`),r=(0,u.boolean)(`Disabled`,!1),i=(0,u.number)(`Max`,8),a=(0,u.number)(`Min`,1),s=(0,u.number)(`Default value`,6),c=p(`Input Callback`),l=(0,u.object)(`Marks`,_),m=e=>{console.debug(`updated value`,e),c(`Returned value: ${e}`,e)},[w,T]=(0,d.useState)({time:30,unit:`minutes`}),E=(0,u.text)(`Title 2`,`Time`),D=(0,u.boolean)(`Disabled 2`,!1),O=(0,u.number)(`Max 2`,3600),k=(0,u.number)(`Min 2`,3),A=(0,u.number)(`Default value 2`,y),j=(0,u.boolean)(`Only Mark Select`,!0),M=(0,u.select)(`Template Example Unit`,{Hours:`hours`,Minutes:`minutes`,Seconds:`seconds`},`seconds`),N=(0,u.text)(`Time Format`,`[H]hrs [M]mins [S]secs`),P=(0,u.boolean)(`Use example [H]hr/s [M]min/s [S]sec/s`,!1),[F,I]=(0,d.useState)(N),L=p(`Input Callback`),R=(0,u.object)(`Marks 2`,v),z=e=>{console.debug(`updated value2`,e),L(`Returned value2: ${e}`,e),T(b(e))},B=(0,d.useCallback)(e=>{if(!P)return;let{hours:t,minutes:n,seconds:r}=x(e,M),i=[`[H]hr${C(t)}`,`[M]min${C(n)}`,`[S]sec${C(r)}`].join(` `);F!==i&&I(i)},[F,M,P]);return(0,f.jsxs)(h,{children:[(0,f.jsxs)(g,{children:[(0,f.jsx)(n,{title:`Simple Example`,introductionText:`Values are controlled by component`}),(0,f.jsx)(o,{max:i,min:a,disabled:r,inputCallback:m,marks:l,defaultValue:s,title:e,timeUnit:t})]}),(0,f.jsxs)(g,{children:[(0,f.jsx)(n,{title:`Mixed Values Example`,introductionText:`Values are controlled from outside`}),(0,f.jsx)(o,{max:O,min:k,disabled:D,inputCallback:z,marks:R,defaultValue:A,controlledValue:w.time,title:E,timeUnit:w.unit,onlyMarkSelect:j})]}),(0,f.jsxs)(g,{children:[(0,f.jsx)(n,{title:`Date Format Example`,introductionText:`Date Format is used`}),(0,f.jsx)(o,{title:`Custom Titles`,timeUnit:M,max:S[M].max,min:S[M].min,timeFormat:P?F:N,defaultValue:S[M].min,marks:S[M].marks,inputCallback:B})]})]})},w.__docgenInfo={description:``,methods:[],displayName:`_DurationSlider`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T=[`_DurationSlider`]}))();export{w as _DurationSlider,T as __namedExportsOrder,m as default};