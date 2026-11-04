import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r}from"./Icon-W-FFwI7F.js";import{n as i,t as a}from"./EditableText-CEp9zBQ1.js";import{a as o,o as s}from"./iframe-D4JXfpgr.js";import{n as c,r as l}from"./helpers-Cf3RArJz.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),s(),c(),u=t(),{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:f}=__STORYBOOK_MODULE_TEST__,p=o.div`
  display: flex;
  align-items: center;
  height: 32px;
  max-width: ${({$maxWidth:e})=>e||`none`};
  padding: 0 16px;
  border: 1px solid var(--grey-4);
`,m={title:`Form/Input/EditableText`,component:a,tags:[`autodocs`],argTypes:{saveDelay:{name:`Save delay (ms)`},rowMaxWidth:{name:`Row max width (demo band)`},editIcon:{control:`select`,options:Object.keys(r)},defaultValue:{control:!1,table:{defaultValue:{summary:`uncontrolled only`}}}},args:{saveDelay:1200,rowMaxWidth:``,value:`Example Name`,label:`Space name`,saveOnClickOutside:!1,allowEmpty:!1,fieldWidth:`240px`,editIcon:`Edit`,alwaysShowEditIcon:!1,editText:`Edit`,saveText:`Save`,savingText:`Saving`,cancelText:`Cancel`,disabled:!1,onSave:f(),onCancel:f(),onEditingChange:f()},render:function({saveDelay:e,rowMaxWidth:t,...n}){let[{value:r},i]=d(),o=async t=>{await l(e),await n.onSave?.(t),i({value:t})};return(0,u.jsx)(p,{$maxWidth:t,children:(0,u.jsx)(a,{...n,value:r,onSave:o})})}},h={},g={argTypes:{value:{control:!1,table:{defaultValue:{summary:`uncontrolled`}}},defaultValue:{control:`text`}},args:{defaultValue:`Example Name`},render:({saveDelay:e,rowMaxWidth:t,value:n,...r})=>{let i=async t=>{await l(e),await r.onSave?.(t)};return(0,u.jsx)(p,{$maxWidth:t,children:(0,u.jsx)(a,{...r,onSave:i},r.defaultValue)})}},_={args:{value:`A space name long enough to run past the end of its row`,fieldWidth:`180px`,rowMaxWidth:`260px`}},v=[`Default`,`Uncontrolled`,`LongValue`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  argTypes: {
    value: {
      control: false,
      table: {
        defaultValue: {
          summary: 'uncontrolled'
        }
      }
    },
    defaultValue: {
      control: 'text'
    }
  },
  args: {
    defaultValue: 'Example Name'
  },
  render: ({
    saveDelay,
    rowMaxWidth,
    value: _value,
    ...args
  }) => {
    const onSave = async (next: string) => {
      await sleep(saveDelay);
      await args.onSave?.(next);
    };
    return <Row $maxWidth={rowMaxWidth}>
        <EditableText key={args.defaultValue} {...args} onSave={onSave} />
      </Row>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'A space name long enough to run past the end of its row',
    fieldWidth: '180px',
    rowMaxWidth: '260px'
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as Default,_ as LongValue,g as Uncontrolled,v as __namedExportsOrder,m as default};