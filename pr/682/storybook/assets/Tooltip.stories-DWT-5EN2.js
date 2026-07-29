import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ft as n,It as r,K as i,Nt as a,St as o,Ut as s,Wt as c,vt as l}from"./iframe-DB8xyy-s.js";import{n as u,t as d}from"./helpers-B9rKBlsV.js";var f,p,m,h,g,_,v,y,b;e((()=>{f=s(),p=t(c()),o(),r(),u(),m=a(),h={title:`Alerts/atoms`,component:l,decorators:[]},g=n.div``,_=n.div`
  margin: 20px 0;
`,v=n.span`
  color: var(--primary-11);
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`,y=()=>{let e=(0,f.text)(`Message`,`This is the tooltip of the hovering element`),t=(0,f.select)(`Type`,{Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`info`),n=(0,f.boolean)(`No Icon`,!1),r=(0,f.select)(`Icon`,{"":``,...d()},`Information`),a=(0,f.select)(`Tooltip Position`,{TopLeft:`top-left`,Top:`top`,TopRight:`top-right`,BottomLeft:`bottom-left`,Bottom:`bottom`,BottomRight:`bottom-right`,LeftTop:`left-top`,Left:`left`,LeftBottom:`left-bottom`,RightTop:`right-top`,Right:`right`,RightBottom:`right-bottom`},`top-right`),o=(0,p.useRef)(null),s=(0,p.useRef)(null),c=(0,p.useRef)(null),u=(0,p.useRef)(null),h=(0,p.useRef)(null);return(0,m.jsxs)(g,{children:[(0,m.jsx)(i,{title:`Page with tooltips`}),(0,m.jsxs)(_,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,m.jsx)(v,{ref:o,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,m.jsxs)(_,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,m.jsx)(v,{ref:s,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,m.jsxs)(_,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,m.jsx)(v,{ref:c,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,m.jsxs)(_,{children:[`The tooltip is a common graphical user interface (GUI) element in which, when`,` `,(0,m.jsx)(v,{ref:u,children:`hovering over`}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),(0,m.jsxs)(_,{children:[`This tooltip `,(0,m.jsx)(v,{ref:h,children:`message`}),` position is fixed, you can update it with the property tool position with the knobs bellow .`]}),(0,m.jsx)(l,{tooltipFor:o,icon:n?void 0:r,message:e}),(0,m.jsx)(l,{tooltipFor:s,icon:n?void 0:r,message:e}),(0,m.jsx)(l,{tooltipFor:c,icon:n?void 0:r,message:e}),(0,m.jsx)(l,{tooltipFor:u,icon:n?void 0:r,message:e}),(0,m.jsx)(l,{tooltipFor:h,maxWidth:`200px`,icon:n?void 0:r,type:t,message:e,tooltipPosition:a})]})},y.__docgenInfo={description:``,methods:[],displayName:`_Tooltip`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b=[`_Tooltip`]}))();export{y as _Tooltip,b as __namedExportsOrder,h as default};