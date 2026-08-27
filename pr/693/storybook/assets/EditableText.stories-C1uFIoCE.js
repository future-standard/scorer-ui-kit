import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ct as n,E as r,Gt as i,It as a,Lt as o,Pt as s,Wt as c}from"./iframe-FLpC4IdY.js";import{n as l,r as u}from"./helpers-BJkmT8eL.js";var d,f,p,m,h,g,_,v,y,b,x;e((()=>{d=c(),f=t(i()),n(),o(),l(),p=s(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Form/Input`,component:r,decorators:[]},g=a.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin: 100px;
  padding: 0 16px;
  border: 1px solid var(--grey-4);
`,_=a(g)`
  max-width: 260px;
`,v=()=>{let[e,t]=(0,f.useState)(`Example Name`),n=(0,d.number)(`Save delay (ms)`,1200),i=(0,d.boolean)(`Commit on click outside`,!1),a=(0,d.boolean)(`Always show the pencil`,!1),o=(0,d.boolean)(`Allow an empty value`,!1),s=(0,d.boolean)(`Disabled`,!1),c=(0,d.text)(`Field width`,`240px`);return(0,p.jsx)(g,{children:(0,p.jsx)(r,{value:e,label:`Space name`,onSave:async e=>{await u(n),t(e),m(`save`)(e)},onCancel:m(`cancel`),onEditingChange:m(`editing-change`),saveOnClickOutside:i,alwaysShowEditIcon:a,allowEmpty:o,fieldWidth:c,disabled:s})})},y=()=>(0,p.jsx)(g,{children:(0,p.jsx)(r,{defaultValue:`Example Name`,label:`Space name`,onSave:m(`save`)})}),b=()=>{let[e,t]=(0,f.useState)(`A space name long enough to run past the end of its row`);return(0,p.jsx)(_,{children:(0,p.jsx)(r,{value:e,label:`Space name`,fieldWidth:`180px`,onSave:e=>t(e)})})},v.__docgenInfo={description:``,methods:[],displayName:`_EditableText`},y.__docgenInfo={description:``,methods:[],displayName:`_EditableTextUncontrolled`},b.__docgenInfo={description:``,methods:[],displayName:`_EditableTextLongValue`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [name, setName] = useState('Example Name');
  const saveDelay = number('Save delay (ms)', 1200);
  const saveOnClickOutside = boolean('Commit on click outside', false);
  const alwaysShowEditIcon = boolean('Always show the pencil', false);
  const allowEmpty = boolean('Allow an empty value', false);
  const isDisabled = boolean('Disabled', false);
  const fieldWidth = text('Field width', '240px');
  const handleSave = async (value: string) => {
    // database wait example
    await sleep(saveDelay);
    setName(value);
    action('save')(value);
  };
  return <Row>
      <EditableText value={name} label='Space name' onSave={handleSave} onCancel={action('cancel')} onEditingChange={action('editing-change')} {...{
      saveOnClickOutside,
      alwaysShowEditIcon,
      allowEmpty,
      fieldWidth
    }} disabled={isDisabled} />
    </Row>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <Row>
    <EditableText defaultValue='Example Name' label='Space name' onSave={action('save')} />
  </Row>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [name, setName] = useState('A space name long enough to run past the end of its row');
  return <NarrowRow>
      <EditableText value={name} label='Space name' fieldWidth='180px' onSave={value => setName(value)} />
    </NarrowRow>;
}`,...b.parameters?.docs?.source}}},x=[`_EditableText`,`_EditableTextUncontrolled`,`_EditableTextLongValue`]}))();export{v as _EditableText,b as _EditableTextLongValue,y as _EditableTextUncontrolled,x as __namedExportsOrder,h as default};