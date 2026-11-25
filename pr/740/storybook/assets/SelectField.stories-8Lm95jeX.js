import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r}from"./styled-components.browser.esm-DRoLZq3m.js";import{a as i,i as a}from"./Icon-jcMQaGO-.js";import{n as o,r as s,t as c}from"./SelectField-Du-qetJ0.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{i(),s(),n(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=r.div`
  margin: 20px;
`,f=r.div`
  ${o} {
    width: ${({$width:e})=>e};
  }
`,p=[`option1`,`option2`,`option3`,`option4`],m=[1,5,10,15,20],h={title:`Form/atoms/SelectField`,component:c,decorators:[e=>(0,l.jsx)(d,{children:(0,l.jsx)(e,{})})],argTypes:{fieldState:{control:`select`},icon:{control:`select`,options:[``,...Object.keys(a)]},defaultValue:{control:`select`,options:[``,...p]},children:{table:{disable:!0}}},args:{isCompact:!1,disabled:!1,required:!1,alwaysShowRequiredDot:!1,fieldState:`default`,icon:``,placeholder:`Choose an option...`,defaultValue:``,label:{htmlFor:`free_select`,text:`Field Label`},changeCallback:u(),children:p.map((e,t)=>(0,l.jsxs)(`option`,{value:e,children:[`Example Option `,t+1]},e))},render:({fixedWidth:e,...t})=>(0,l.jsx)(c,{...t},String(t.defaultValue))},g={},_={argTypes:{defaultValue:{control:`select`,options:m},fixedWidth:{control:`text`}},args:{fixedWidth:`80px`,label:{htmlFor:`fix_select`,text:`Page`,direction:`row`},defaultValue:1,children:m.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))},render:({fixedWidth:e=`80px`,...t})=>(0,l.jsx)(f,{$width:e,children:(0,l.jsx)(c,{...t},String(t.defaultValue))})},v={args:{icon:`Information`}},y=[`Default`,`FixedWidth`,`WithIcon`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  argTypes: {
    defaultValue: {
      control: 'select',
      options: pageOptions
    },
    fixedWidth: {
      control: 'text'
    }
  },
  args: {
    fixedWidth: '80px',
    label: {
      htmlFor: 'fix_select',
      text: 'Page',
      direction: 'row'
    },
    defaultValue: 1,
    children: pageOptions.map(value => <option key={value} value={value}>
        {value}
      </option>)
  },
  render: ({
    fixedWidth = '80px',
    ...args
  }) => <FixedSelect $width={fixedWidth}>
      <SelectField key={String(args.defaultValue)} {...args} />
    </FixedSelect>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'Information'
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{g as Default,_ as FixedWidth,v as WithIcon,y as __namedExportsOrder,h as default};