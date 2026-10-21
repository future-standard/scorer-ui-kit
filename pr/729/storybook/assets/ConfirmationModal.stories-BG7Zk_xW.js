import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Button-CxOl84dr.js";import{i,n as a,r as o,t as s}from"./useModal-CyLtzX7q.js";import{n as c,t as l}from"./ConfirmationModal-De4skPZ7.js";import{_ as u,a as d,o as f}from"./iframe-PEYaYO03.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{p=u(),n(),c(),i(),s(),f(),m=t(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g=d.div``,_={title:`Alerts/Modals`,components:l,decorator:[]},v=({message:e=`Hello`,leftButtonDesign:t,rightButtonDesign:n,title:i=``,leftButtonText:o=`Back`,leftButtonCallback:s=()=>{},rightButtonText:c=`Accept`,rightButtonCallback:u=()=>{}})=>{let{createModal:d}=a(),f=()=>{console.debug(`creatingModal`),d({isCloseEnable:!1,customComponent:p})},p=(0,m.jsx)(l,{title:i,message:e,leftButtonText:o,leftButtonDesign:t,leftButtonCallback:s,rightButtonDesign:n,rightButtonText:c,rightButtonCallback:u});return(0,m.jsx)(r,{design:`secondary`,onClick:f,children:`Open Modal`})},y=()=>{let e=(0,p.text)(`Title`,`Modal Title`),t=(0,p.text)(`Message`,`This is an example of some information provided to the customer to confirm an option`),n=(0,p.text)(`Left Button Text`,`Back`),r=(0,p.select)(`Left Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`secondary`),i=h(`Back button pressed`),a=(0,p.text)(`Right Button Text`,`I understand`),s=(0,p.select)(`Right Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`primary`),c=h(`Accept button pressed`);return(0,m.jsx)(g,{children:(0,m.jsx)(o,{children:(0,m.jsx)(v,{title:e,message:t,leftButtonText:n,leftButtonDesign:r,leftButtonCallback:i,rightButtonText:a,rightButtonDesign:s,rightButtonCallback:c})})})},b=[`_ConfirmationTemplate`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const title = text('Title', 'Modal Title');
  const msg = text('Message', 'This is an example of some information provided to the customer to confirm an option');
  const leftBtnTxt = text('Left Button Text', 'Back');
  const buttonDesignLeft = select('Left Button Design', {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger'
  }, 'secondary');
  const leftBtnCallback = action('Back button pressed');
  const RightBtnTxt = text('Right Button Text', 'I understand');
  const buttonDesignRight = select('Right Button Design', {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger'
  }, 'primary');
  const rightBtnCallback = action('Accept button pressed');

  // Provider should be at main Index level, it's here just for the story example
  return <Container>
      <ModalProvider>
        <ModalExample title={title} message={msg} leftButtonText={leftBtnTxt} leftButtonDesign={buttonDesignLeft} leftButtonCallback={leftBtnCallback} rightButtonText={RightBtnTxt} rightButtonDesign={buttonDesignRight} rightButtonCallback={rightBtnCallback} />
      </ModalProvider>
    </Container>;
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as _ConfirmationTemplate,b as __namedExportsOrder,_ as default};