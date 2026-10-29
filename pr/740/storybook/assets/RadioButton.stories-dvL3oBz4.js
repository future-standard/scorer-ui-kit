import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Label-mM6ve_8N.js";import{_ as a,a as o,i as s,o as c}from"./iframe-DkCQ6b6C.js";var l,u,d,f,p,m,h;function g(){return(g=e((()=>{l=t(),c(),u=n(),d=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`,f=o.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  user-select: none;

  ${({$isChecked:e,$disabled:t})=>s`
    border-color: var(--input-toggle-unchecked-border-color);

    ${!t&&s`
      &:hover {
        cursor: pointer;
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }
    `};

    ${e&&!t&&s`
      border-color: var(--input-toggle-checked-border-color);
      ${d} {
        background-color: var(--input-toggle-checked-background-color);
      }
    `};

    ${e&&!t&&s`
      &:hover {
        border-color: var(--input-toggle-checked-hover-border-color);
        ${d} {
          background-color: var(--input-toggle-checked-hover-background-color);
        }
      }
    `};

    ${e&&t&&s`
      cursor: not-allowed;
      border-color: var(--input-toggle-checked-disabled-border-color);
      ${d} {
        background-color: var(--input-toggle-checked-disabled-background-color);
      }
    `};

    ${!e&&t&&s`
      cursor: not-allowed;
      border-color: var(--input-toggle-unchecked-disabled-border-color);
      ${d} {
        background-color: var(--input-toggle-unchecked-disabled-background-color);
      }
    `}
  `};
`,p=o.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
  opacity: 0;
`,m=o.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
`,h=({id:e,value:t,name:n,currentChecked:r,disabled:i=!1,required:a,onChangeCallback:o=()=>{}})=>{let s=(0,l.useCallback)(e=>{let t=e.target.value;o(t)},[o]),c=r!==void 0&&r===t;return(0,u.jsxs)(m,{children:[(0,u.jsx)(p,{type:`radio`,id:e,name:n,disabled:i,required:a,value:t,checked:c,onChange:s}),(0,u.jsx)(f,{$isChecked:c,$disabled:i,children:(0,u.jsx)(d,{})})]})};try{h.displayName=`RadioButton`,h.__docgenInfo={description:``,displayName:`RadioButton`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/RadioButton.tsx`,methods:[],props:{currentChecked:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/RadioButton.tsx`,name:`OwnProps`}],description:``,name:`currentChecked`,parent:{fileName:`packages/ui-lib/src/Form/atoms/RadioButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string | number`}},onChangeCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/RadioButton.tsx`,name:`OwnProps`}],description:``,name:`onChangeCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/RadioButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`((value: string | number) => void)`}}},tags:{}}}catch{}})))()}var _,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{_=a(),v=t(),r(),g(),c(),y=n(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Form/Input`,component:h,decorators:[]},S=o.div``,C=o.div`
  margin: 20px 0;
`,w=()=>{let e=(0,_.boolean)(`Disabled`,!1),t=b(`value-changed`),n=(0,_.text)(`Name`,`Example`),[r,a]=(0,v.useState)(),o=e=>{t(e),a(e)};return(0,y.jsxs)(S,{children:[(0,y.jsx)(C,{children:(0,y.jsx)(i,{htmlFor:`option1`,labelText:`Option 1`,direction:`row-reverse`,children:(0,y.jsx)(h,{name:n,disabled:e,currentChecked:r,id:`option1`,value:`option1`,onChangeCallback:o})})}),(0,y.jsx)(C,{children:(0,y.jsx)(i,{htmlFor:`option2`,labelText:`Option 2`,direction:`row-reverse`,children:(0,y.jsx)(h,{name:n,disabled:e,currentChecked:r,id:`option2`,value:`option2`,onChangeCallback:o})})}),(0,y.jsx)(C,{children:(0,y.jsx)(i,{htmlFor:`option3`,labelText:`Option 3`,direction:`row-reverse`,children:(0,y.jsx)(h,{name:n,disabled:e,currentChecked:r,id:`option3`,value:`option3`,onChangeCallback:o})})})]})},T=[`_RadioButton`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const disabled = boolean('Disabled', false);
  const selection = action('value-changed');
  const name = text('Name', 'Example');
  const [currentChecked, setCurrentCheck] = useState<string | number>();
  const handleChange = (value: string | number) => {
    selection(value);
    setCurrentCheck(value);
  };
  return <Container>
      <OptionsWrapper>
        <Label htmlFor={'option1'} labelText={'Option 1'} direction='row-reverse'>
          <RadioButton {...{
          name,
          disabled,
          currentChecked
        }} id={'option1'} value='option1' onChangeCallback={handleChange} />
        </Label>
      </OptionsWrapper>
      <OptionsWrapper>
        <Label htmlFor={'option2'} labelText={'Option 2'} direction='row-reverse'>
          <RadioButton {...{
          name,
          disabled,
          currentChecked
        }} id={'option2'} value='option2' onChangeCallback={handleChange} />
        </Label>
      </OptionsWrapper>
      <OptionsWrapper>
        <Label htmlFor={'option3'} labelText={'Option 3'} direction='row-reverse'>
          <RadioButton {...{
          name,
          disabled,
          currentChecked
        }} id={'option3'} value='option3' onChangeCallback={handleChange} />
        </Label>
      </OptionsWrapper>
    </Container>;
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as _RadioButton,T as __namedExportsOrder,x as default};