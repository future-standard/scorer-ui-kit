import{t as e}from"./react-BZJXY1be.js";import{D as t,Gt as n,It as r,Rt as i,wt as a,zt as o}from"./iframe-C8iM32yd.js";import{n as s,r as c}from"./helpers-Cvr4c3Xq.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=l((()=>{u=n(),d=e(),a(),o(),s(),f=r(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Form/Input`,component:t,decorators:[]},h=i.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin: 100px;
  padding: 0 16px;
  border: 1px solid var(--grey-4);
`,g=i(h)`
  max-width: 260px;
`,_=()=>{let[e,n]=(0,d.useState)(`Example Name`),r=(0,u.number)(`Save delay (ms)`,1200),i=(0,u.boolean)(`Commit on click outside`,!1),a=(0,u.boolean)(`Always show the pencil`,!1),o=(0,u.boolean)(`Allow an empty value`,!1),s=(0,u.boolean)(`Disabled`,!1),l=(0,u.text)(`Field width`,`240px`);return(0,f.jsx)(h,{children:(0,f.jsx)(t,{value:e,label:`Space name`,onSave:async e=>{await c(r),n(e),p(`save`)(e)},onCancel:p(`cancel`),onEditingChange:p(`editing-change`),saveOnClickOutside:i,alwaysShowEditIcon:a,allowEmpty:o,fieldWidth:l,disabled:s})})},v=()=>(0,f.jsx)(h,{children:(0,f.jsx)(t,{defaultValue:`Example Name`,label:`Space name`,onSave:p(`save`)})}),y=()=>{let[e,n]=(0,d.useState)(`A space name long enough to run past the end of its row`);return(0,f.jsx)(g,{children:(0,f.jsx)(t,{value:e,label:`Space name`,fieldWidth:`180px`,onSave:e=>n(e)})})},_.__docgenInfo={description:``,methods:[],displayName:`_EditableText`},v.__docgenInfo={description:``,methods:[],displayName:`_EditableTextUncontrolled`},y.__docgenInfo={description:``,methods:[],displayName:`_EditableTextLongValue`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <Row>
    <EditableText defaultValue='Example Name' label='Space name' onSave={action('save')} />
  </Row>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [name, setName] = useState('A space name long enough to run past the end of its row');
  return <NarrowRow>
      <EditableText value={name} label='Space name' fieldWidth='180px' onSave={value => setName(value)} />
    </NarrowRow>;
}`,...y.parameters?.docs?.source}}},b=[`_EditableText`,`_EditableTextUncontrolled`,`_EditableTextLongValue`]})))()}x();export{_ as _EditableText,y as _EditableTextLongValue,v as _EditableTextUncontrolled,b as __namedExportsOrder,m as default};