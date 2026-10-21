import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Label-_UOZbhk6.js";import{n as a,t as o}from"./SliderInput-B5eX-4o2.js";import{_ as s,a as c,o as l}from"./iframe-Cw1eIbNi.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{u=t(),l(),r(),a(),d=n(),f=c.div``,p=c.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${({$allMarkCentered:e})=>e?`padding: 0;`:`padding: 0 6px;`};
`,m=c(i)`
  font-family: ${({theme:e})=>e.fontFamily.data};
`,h=e=>e<=10?`error`:e>10&&e<=30?`warning`:`success`,g=e=>e<=10?`Critical Level`:e>10&&e<=30?`Warning Level`:`Safe Level`,_=({defaultValue:e=0,inputCallback:t,updateThumbColor:n,updateTitle:r,showValue:a,allMarkCentered:s,...c})=>{let[l,_]=(0,u.useState)(e),v=(0,u.useCallback)(e=>{t&&t(e),_(e)},[t]);return(0,d.jsxs)(f,{children:[(0,d.jsxs)(p,{$allMarkCentered:s,children:[(0,d.jsx)(i,{htmlFor:`percentage-slider`,labelText:r?r(l):g(l)}),a&&(0,d.jsx)(m,{htmlFor:`percentage-slider`,labelText:`${l}%`})]}),(0,d.jsx)(o,{...c,id:`percentage-slider`,max:100,min:0,defaultValue:e,showValue:a,onChangeCallback:v,thumbColor:n?n(l):h(l),allMarkCentered:s})]})};try{_.displayName=`PercentageSlider`,_.__docgenInfo={description:``,displayName:`PercentageSlider`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,methods:[],props:{step:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`step`,parent:{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},required:!1,tags:{},type:{name:`number`}},marks:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`}],description:``,name:`marks`,parent:{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},required:!1,tags:{},type:{name:`ISliderMark[]`}},defaultValue:{defaultValue:{value:`0`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`defaultValue`,parent:{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},required:!1,tags:{},type:{name:`number | (number & readonly string[])`}},value:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`value`,parent:{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},required:!1,tags:{},type:{name:`number | (number & readonly string[])`}},showValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`}],description:``,name:`showValue`,parent:{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},required:!1,tags:{},type:{name:`boolean`}},inputCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`}],description:``,name:`inputCallback`,parent:{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},required:!1,tags:{},type:{name:`((value: number) => void)`}},updateThumbColor:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`}],description:``,name:`updateThumbColor`,parent:{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},required:!1,tags:{},type:{name:`((value: number) => IFeedbackColor)`}},updateTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`}],description:``,name:`updateTitle`,parent:{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},required:!1,tags:{},type:{name:`((value: number) => string)`}},allMarkCentered:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`}],description:``,name:`allMarkCentered`,parent:{fileName:`packages/ui-lib/src/Form/molecules/PercentageSlider.tsx`,name:`IPercentageSliderProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{y=s(),v(),l(),b=n(),{action:x}=__STORYBOOK_MODULE_ACTIONS__,S={title:`Form/Input`,component:_,decorators:[]},C=c.div`
    margin: 20px;
    width: 268px;
`,w=[{value:0,label:`0%`},{value:20},{value:40},{value:60},{value:80},{value:100,label:`100%`}],T=()=>{let e=(0,y.text)(`Title`,`Duration`),t=(0,y.boolean)(`Disabled`,!1),n=(0,y.number)(`Default value`,30),r=(0,y.boolean)(`Custom colors function`,!1),i=(0,y.boolean)(`Custom Title function`,!1),a=x(`Input Callback`),o=(0,y.object)(`Marks`,w),s=(0,y.boolean)(`Show Value`,!0),c=(0,y.boolean)(`Center all mark values`,!1);return(0,b.jsx)(C,{children:(0,b.jsx)(_,{disabled:t,inputCallback:e=>{console.debug(`updated value`,e),a(`Returned value: ${e}`,e)},marks:o,defaultValue:n,title:e,updateThumbColor:r?e=>e<=20?`neutral`:e>20&&e<=80?`info`:`error`:void 0,updateTitle:i?e=>e<=20?`Small sound`:e>20&&e<=80?`Normal sound`:`Dangerous sound`:void 0,showValue:s,allMarkCentered:c})})},E=[`_PercentageSlider`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const title = text('Title', 'Duration');
  const disabled = boolean('Disabled', false);
  const defaultValue = number('Default value', 30);
  const customThumb = boolean('Custom colors function', false);
  const customTitle = boolean('Custom Title function', false);
  const showValue = action('Input Callback');
  const marks = object('Marks', exampleMarks);
  const showTitle = boolean('Show Value', true);
  const allMarkCentered = boolean('Center all mark values', false);

  // const step = number('Step', 1); // still fixing step option
  const handleUpdate = (value: number) => {
    console.debug('updated value', value);
    showValue(\`Returned value: \${value}\`, value);
  };
  const otherColorHandler = (value: number): IFeedbackColor => {
    if (value <= 20) {
      return 'neutral';
    }
    if (value > 20 && value <= 80) {
      return 'info';
    }
    return 'error';
  };
  const otherTitlesHandler = (value: number): string => {
    if (value <= 20) {
      return 'Small sound';
    }
    if (value > 20 && value <= 80) {
      return 'Normal sound';
    }
    return 'Dangerous sound';
  };
  return <Container>
      <PercentageSlider disabled={disabled}
    // step={step}
    inputCallback={handleUpdate} marks={marks} defaultValue={defaultValue} title={title} updateThumbColor={customThumb ? otherColorHandler : undefined} updateTitle={customTitle ? otherTitlesHandler : undefined} showValue={showTitle} allMarkCentered={allMarkCentered} />
    </Container>;
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as _PercentageSlider,E as __namedExportsOrder,S as default};