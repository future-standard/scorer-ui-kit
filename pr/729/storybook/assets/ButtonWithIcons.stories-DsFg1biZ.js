import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{a as n,i as r}from"./styled-components.browser.esm-DC6b-34H.js";import{a as i,i as a}from"./Icon-CS5NLN5P.js";import{n as o,t as s}from"./ButtonWithIcon-CmguFmA5.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),o(),n(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=r.div`
  width: ${({$width:e})=>e}px;
  box-sizing: border-box;
  padding: 24px 16px;
  border: 1px solid var(--grey-6);
  border-radius: 3px;
  background-color: var(--grey-2);
  display: flex;
  flex-direction: column;
  gap: 8px;
`,d=r.h2`
  margin: 0 0 16px;
  font-family: var(--font-ui);
  font-size: 18px;
  font-weight: 500;
  color: var(--grey-12);
`,f=[{id:`save`,icon:`Success`,design:`primary`,label:`Save changes`},{id:`discard`,icon:`Warning`,design:`warning`,label:`Discard changes`},{id:`cancel`,icon:`Invalid`,design:`secondary`,label:`Cancel`}],p={title:`Form/Buttons/ButtonWithIcon`,component:s,argTypes:{children:{name:`Button text`,control:`text`},design:{control:`select`},size:{control:`select`},icon:{control:`select`,options:Object.keys(a)},position:{control:`select`},weight:{control:`select`}},args:{children:`Example Title`,design:`primary`,size:`normal`,icon:`ActionPause`,position:`right`,weight:`regular`,disabled:!1,loading:!1,shadow:!1,isFullWidth:!1,onClick:l()},render:({containerWidth:e,panelTitle:t,buttons:n,...r})=>(0,c.jsx)(s,{...r})},m={},h={argTypes:{containerWidth:{name:`Container width`},panelTitle:{name:`Panel title`},buttons:{name:`Buttons`},children:{name:`Button text`,control:!1,table:{defaultValue:{summary:`label of each button`}}},design:{control:!1,table:{defaultValue:{summary:`design of each button`}}},icon:{control:!1,table:{defaultValue:{summary:`icon of each button`}}}},args:{isFullWidth:!0,position:`left`,containerWidth:320,panelTitle:`Save current work`,buttons:f},render:({containerWidth:e=320,panelTitle:t,buttons:n=f,children:r,design:i,icon:a,...o})=>(0,c.jsxs)(u,{$width:e,children:[(0,c.jsx)(d,{children:t}),n.map(({id:e,icon:t,design:n,label:r})=>(0,c.jsx)(s,{...o,icon:t,design:n,children:r},e))]})},g=[`Default`,`FullWidth`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  argTypes: {
    containerWidth: {
      name: 'Container width'
    },
    panelTitle: {
      name: 'Panel title'
    },
    buttons: {
      name: 'Buttons'
    },
    children: {
      name: 'Button text',
      control: false,
      table: {
        defaultValue: {
          summary: 'label of each button'
        }
      }
    },
    design: {
      control: false,
      table: {
        defaultValue: {
          summary: 'design of each button'
        }
      }
    },
    icon: {
      control: false,
      table: {
        defaultValue: {
          summary: 'icon of each button'
        }
      }
    }
  },
  args: {
    isFullWidth: true,
    position: 'left',
    containerWidth: 320,
    panelTitle: 'Save current work',
    buttons: panelButtons
  },
  render: ({
    containerWidth = 320,
    panelTitle,
    buttons = panelButtons,
    children: _children,
    design: _design,
    icon: _icon,
    ...args
  }) => <Panel $width={containerWidth}>
      <PanelTitle>{panelTitle}</PanelTitle>
      {buttons.map(({
      id,
      icon,
      design,
      label
    }) => <ButtonWithIcon key={id} {...args} icon={icon} design={design}>
          {label}
        </ButtonWithIcon>)}
    </Panel>
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Default,h as FullWidth,g as __namedExportsOrder,p as default};