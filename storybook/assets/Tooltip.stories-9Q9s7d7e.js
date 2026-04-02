import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{d as a}from"./index-C-6Xbh3D.js";import{r}from"./index-DnkWte70.js";import{g as e,h as y}from"./index.modern-CMonYql-.js";import{g as I}from"./index-DQYbOqls.js";import{c}from"./styled-components.browser.esm-CarAhzHj.js";import"./index-nkfPnFJx.js";const F={title:"Alerts/atoms",component:e,decorators:[]},R=c.div``,s=c.div`
  margin: 20px 0;
`,l=c.span`
  color: var(--primary-11);
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`,p=()=>{const o=a.text("Message","This is the tooltip of the hovering element"),T=a.select("Type",{Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"info"),i=a.boolean("No Icon",!1),v={"":"",...I()},n=a.select("Icon",v,"Information"),w=a.select("Tooltip Position",{TopLeft:"top-left",Top:"top",TopRight:"top-right",BottomLeft:"bottom-left",Bottom:"bottom",BottomRight:"bottom-right",LeftTop:"left-top",Left:"left",LeftBottom:"left-bottom",RightTop:"right-top",Right:"right",RightBottom:"right-bottom"},"top-right"),m=r.useRef(null),h=r.useRef(null),g=r.useRef(null),f=r.useRef(null),u=r.useRef(null);return t.jsxs(R,{children:[t.jsx(y,{title:"Page with tooltips"}),t.jsxs(s,{children:["The tooltip is a common graphical user interface (GUI) element in which, when ",t.jsx(l,{ref:m,children:"hovering over"}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),t.jsxs(s,{children:["The tooltip is a common graphical user interface (GUI) element in which, when ",t.jsx(l,{ref:h,children:"hovering over"}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),t.jsxs(s,{children:["The tooltip is a common graphical user interface (GUI) element in which, when ",t.jsx(l,{ref:g,children:"hovering over"}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),t.jsxs(s,{children:["The tooltip is a common graphical user interface (GUI) element in which, when ",t.jsx(l,{ref:f,children:"hovering over"}),` a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.`]}),t.jsxs(s,{children:["This tooltip ",t.jsx(l,{ref:u,children:"message"})," position is fixed,  you can update it with the property tool position with the knobs bellow ."]}),t.jsx(e,{tooltipFor:m,icon:i?void 0:n,message:o}),t.jsx(e,{tooltipFor:h,icon:i?void 0:n,message:o}),t.jsx(e,{tooltipFor:g,icon:i?void 0:n,message:o}),t.jsx(e,{tooltipFor:f,icon:i?void 0:n,message:o}),t.jsx(e,{tooltipFor:u,maxWidth:"200px",icon:i?void 0:n,type:T,message:o,tooltipPosition:w})]})};p.__docgenInfo={description:"",methods:[],displayName:"_Tooltip"};var d,x,b;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const message = text("Message", "This is the tooltip of the hovering element");
  const type = select("Type", {
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
  const icon = select("Icon", iconList, 'Information');
  const tooltipPosition = select("Tooltip Position", {
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
      <PageTitle title="Page with tooltips" />
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan ref={exampleTriggerA}>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan ref={exampleTriggerB}>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan ref={exampleTriggerC}>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        The tooltip is a common graphical user interface (GUI) element in which, when <HoverSpan ref={exampleTriggerD}>hovering over</HoverSpan> a screen element or component, a text box displays information about that element, such as a description of a button's function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.
      </Content>
      <Content>
        This tooltip <HoverSpan ref={exampleTriggerE}>message</HoverSpan> position is fixed,  you can update it with the property tool position with the knobs bellow .
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
}`,...(b=(x=p.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const P=["_Tooltip"];export{p as _Tooltip,P as __namedExportsOrder,F as default};
