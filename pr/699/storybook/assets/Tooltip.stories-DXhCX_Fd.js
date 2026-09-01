import{t as e}from"./react-BZJXY1be.js";import{Ft as t,J as n,Lt as r,Rt as i,Wt as a,bt as o,wt as s}from"./iframe-C-UcmyvH.js";import{n as c,t as l}from"./helpers-Cktaogyc.js";import{n as u}from"./rolldown-runtime-DkW27tQK.js";var d,f,p,m,h,g,_,v,y;function b(){return(b=u((()=>{d=a(),f=e(),s(),i(),c(),p=t(),m={title:`Alerts/atoms`,component:o,decorators:[]},h=r.div``,g=r.div`
  margin: 20px 0;
`,_=r.span`
  color: var(--primary-11);
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`,v=()=>{let e=(0,d.text)(`Message`,`This is the tooltip of the hovering element`),t=(0,d.select)(`Type`,{Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`info`),r=(0,d.boolean)(`No Icon`,!1),i={"":``,...l()},a=(0,d.select)(`Icon`,i,`Information`),s=(0,d.select)(`Tooltip Position`,{TopLeft:`top-left`,Top:`top`,TopRight:`top-right`,BottomLeft:`bottom-left`,Bottom:`bottom`,BottomRight:`bottom-right`,LeftTop:`left-top`,Left:`left`,LeftBottom:`left-bottom`,RightTop:`right-top`,Right:`right`,RightBottom:`right-bottom`},`top-right`),c=(0,f.useRef)(null),u=(0,f.useRef)(null),m=(0,f.useRef)(null),v=(0,f.useRef)(null),y=(0,f.useRef)(null);return(0,p.jsxs)(h,{children:[(0,p.jsx)(n,{title:`Page with tooltips`}),(0,p.jsxs)(g,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,p.jsx)(_,{ref:c,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,p.jsxs)(g,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,p.jsx)(_,{ref:u,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,p.jsxs)(g,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,p.jsx)(_,{ref:m,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,p.jsxs)(g,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,p.jsx)(_,{ref:v,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,p.jsxs)(g,{children:[`This tooltip `,(0,p.jsx)(_,{ref:y,children:`message`}),` position is fixed, you can update it with the property tool position with the knobs bellow .`]}),(0,p.jsx)(o,{tooltipFor:c,icon:r?void 0:a,message:e}),(0,p.jsx)(o,{tooltipFor:u,icon:r?void 0:a,message:e}),(0,p.jsx)(o,{tooltipFor:m,icon:r?void 0:a,message:e}),(0,p.jsx)(o,{tooltipFor:v,icon:r?void 0:a,message:e}),(0,p.jsx)(o,{tooltipFor:y,maxWidth:`200px`,icon:r?void 0:a,type:t,message:e,tooltipPosition:s})]})},v.__docgenInfo={description:``,methods:[],displayName:`_Tooltip`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const message = text('Message', 'This is the tooltip of the hovering element');
  const type = select('Type', {
    Warning: 'warning',
    Info: 'info',
    Success: 'success',
    Neutral: 'neutral'
  }, 'info');
  const noIcon = boolean('No Icon', false);
  const iconList = {
    '': '',
    ...generateIconList()
  };
  const icon = select('Icon', iconList, 'Information');
  const tooltipPosition = select('Tooltip Position', {
    TopLeft: 'top-left',
    Top: 'top',
    TopRight: 'top-right',
    BottomLeft: 'bottom-left',
    Bottom: 'bottom',
    BottomRight: 'bottom-right',
    LeftTop: 'left-top',
    Left: 'left',
    LeftBottom: 'left-bottom',
    RightTop: 'right-top',
    Right: 'right',
    RightBottom: 'right-bottom'
  }, 'top-right');
  const exampleTriggerA = useRef<HTMLSpanElement>(null);
  const exampleTriggerB = useRef<HTMLSpanElement>(null);
  const exampleTriggerC = useRef<HTMLSpanElement>(null);
  const exampleTriggerD = useRef<HTMLSpanElement>(null);
  const exampleTriggerE = useRef<HTMLSpanElement>(null);
  return <Container>
      <PageTitle title='Page with tooltips' />
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when{' '}
        <HoverSpan ref={exampleTriggerA}>hovering over</HoverSpan> a screen element or component, a
        text box displays information about that element, such as a description of a button's
        function, what an abbreviation stands for, or the exact absolute time stamp over a relative
        time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when{' '}
        <HoverSpan ref={exampleTriggerB}>hovering over</HoverSpan> a screen element or component, a
        text box displays information about that element, such as a description of a button's
        function, what an abbreviation stands for, or the exact absolute time stamp over a relative
        time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when{' '}
        <HoverSpan ref={exampleTriggerC}>hovering over</HoverSpan> a screen element or component, a
        text box displays information about that element, such as a description of a button's
        function, what an abbreviation stands for, or the exact absolute time stamp over a relative
        time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when{' '}
        <HoverSpan ref={exampleTriggerD}>hovering over</HoverSpan> a screen element or component, a
        text box displays information about that element, such as a description of a button's
        function, what an abbreviation stands for, or the exact absolute time stamp over a relative
        time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        This tooltip <HoverSpan ref={exampleTriggerE}>message</HoverSpan> position is fixed, you can
        update it with the property tool position with the knobs bellow .
      </Content>
      <Tooltip tooltipFor={exampleTriggerA} icon={noIcon ? undefined : icon} {...{
      message
    }} />
      <Tooltip tooltipFor={exampleTriggerB} icon={noIcon ? undefined : icon} {...{
      message
    }} />
      <Tooltip tooltipFor={exampleTriggerC} icon={noIcon ? undefined : icon} {...{
      message
    }} />
      <Tooltip tooltipFor={exampleTriggerD} icon={noIcon ? undefined : icon} {...{
      message
    }} />
      <Tooltip tooltipFor={exampleTriggerE} maxWidth='200px' icon={noIcon ? undefined : icon} {...{
      type,
      message,
      tooltipPosition
    }} />
    </Container>;
}`,...v.parameters?.docs?.source}}},y=[`_Tooltip`]})))()}b();export{v as _Tooltip,y as __namedExportsOrder,m as default};