import{a4 as i,d as e,r as d,j as n,P as p,a as S}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const{action:V}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Form/Input",component:i,decorators:[]},L=S.div`
  display: flex;
`,b=S.div`
  margin: 20px;
  width: 280px;
`,Y=[{value:1,label:"1H"},{value:2,label:"2H"},{value:3,label:"3H"},{value:4,label:"4H"},{value:5,label:"5H"},{value:6,label:"6H"},{value:7,label:"7H"},{value:8,label:"8H"}],q=[{value:3,label:"3s"},{value:360,label:""},{value:720,label:""},{value:1080,label:""},{value:1440,label:""},{value:1800,label:""},{value:2160,label:""},{value:2520,label:""},{value:2880,label:""},{value:3240,label:""},{value:3600,label:"1h"}],z=1800,G=t=>t>=3600?{time:Math.round(t/3600),unit:"hours"}:t>=60?{time:Math.round(t/60),unit:"minutes"}:{time:t,unit:"seconds"},J=(t,u)=>{switch(u){case"seconds":return{hours:Math.floor(t/3600),minutes:Math.floor(t%3600/60),seconds:t%60};case"minutes":return{hours:Math.floor(t/60),minutes:t%60,seconds:0};default:return{hours:t,minutes:0,seconds:0}}},o={hours:{min:1,max:10,marks:[{value:1,label:"1M"},{value:5,label:"5H"},{value:10,label:"10H"}]},minutes:{min:1,max:60,marks:[{value:1,label:"1M"},{value:30,label:"30M"},{value:60,label:"1H"}]},seconds:{min:1,max:3600,marks:[{value:1,label:"1S"},{value:1800,label:"30M"},{value:3600,label:"1H"}]}},x=t=>t!==1?"s":"",s=()=>{const t=e.text("Title","Duration"),u=e.select("Time Unit",{Seconds:"seconds",Minutes:"minutes",Hours:"hours"},"hours"),D=e.boolean("Disabled",!1),U=e.number("Max",8),H=e.number("Min",1),T=e.number("Default value",6),y=V("Input Callback"),g=e.object("Marks",Y),j=a=>{console.log("updated value",a),y(`Returned value: ${a}`,a)},[h,C]=d.useState({time:30,unit:"minutes"}),w=e.text("Title 2","Time"),E=e.boolean("Disabled 2",!1),_=e.number("Max 2",3600),W=e.number("Min 2",3),$=e.number("Default value 2",z),P=e.boolean("Only Mark Select",!0),l=e.select("Template Example Unit",{Hours:"hours",Minutes:"minutes",Seconds:"seconds"},"seconds"),f=e.text("Time Format","[H]hrs [M]mins [S]secs"),r=e.boolean("Use example [H]hr/s [M]min/s [S]sec/s",!1),[m,I]=d.useState(f),O=V("Input Callback"),R=e.object("Marks 2",q),A=a=>{console.log("updated value2",a),O(`Returned value2: ${a}`,a);const c=G(a);C(c)},N=d.useCallback(a=>{if(!r)return;const{hours:c,minutes:B,seconds:K}=J(a,l),M=[`[H]hr${x(c)}`,`[M]min${x(B)}`,`[S]sec${x(K)}`].join(" ");m!==M&&I(M)},[m,l,r]);return n.jsxs(L,{children:[n.jsxs(b,{children:[n.jsx(p,{title:"Simple Example",introductionText:"Values are controlled by component"}),n.jsx(i,{max:U,min:H,disabled:D,inputCallback:j,marks:g,defaultValue:T,title:t,timeUnit:u})]}),n.jsxs(b,{children:[n.jsx(p,{title:"Mixed Values Example",introductionText:"Values are controlled from outside"}),n.jsx(i,{max:_,min:W,disabled:E,inputCallback:A,marks:R,defaultValue:$,controlledValue:h.time,title:w,timeUnit:h.unit,onlyMarkSelect:P})]}),n.jsxs(b,{children:[n.jsx(p,{title:"Date Format Example",introductionText:"Date Format is used"}),n.jsx(i,{title:"Custom Titles",timeUnit:l,max:o[l].max,min:o[l].min,timeFormat:r?m:f,defaultValue:o[l].min,marks:o[l].marks,inputCallback:N})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"_DurationSlider"};var v,F,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const title = text('Title', 'Duration');
  const durationUnit = select("Time Unit", {
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
    console.log('updated value', value);
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
    console.log('updated value2', value);
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
}`,...(k=(F=s.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const ee=["_DurationSlider"];export{s as _DurationSlider,ee as __namedExportsOrder,Z as default};
