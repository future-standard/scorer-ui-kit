"use strict";(self.webpackChunkscorer_ui_kit_storybook=self.webpackChunkscorer_ui_kit_storybook||[]).push([[9682],{"./src/stories/Alerts/MixAlerts/MixAlerts.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_MixAlertsExample:()=>_MixAlertsExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MixAlerts_stories});__webpack_require__("../../node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),index_modern=__webpack_require__("../ui-lib/dist/index.modern.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.Ay.button`
  ${index_modern.o6};
  color: var(--grey-9);
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.79;
  color: var(--grey-9);
  display: block;
`,ButtonGroup=styled_components_browser_esm.Ay.div`
text-align: center;
margin-top: 10px;
${StyledButton} {
  margin: 15px auto 0 auto;
}
`,CardCover=styled_components_browser_esm.Ay.div`
  height: 210px;
  border-radius: 5px 5px 0 0;
  position: relative;
  z-index:99;
  background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));
  overflow: hidden;
`,CardTitle=styled_components_browser_esm.Ay.div`
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: var(--grey-11);
`,CardContent=styled_components_browser_esm.Ay.div`
  padding: 30px 40px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  color: var(--grey-10);
  p {
    margin: 1.4rem 0
  }
`,CardModal=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,MixAlerts_CardModalExample=()=>{const{sendNotification}=(0,index_modern.hN)(),{setModalOpen}=(0,index_modern.hS)(),notiInfoSettings={type:"info",message:"You have enabled that requested process"};return(0,jsx_runtime.jsxs)(CardModal,{children:[(0,jsx_runtime.jsx)(CardCover,{}),(0,jsx_runtime.jsxs)(CardContent,{children:[(0,jsx_runtime.jsx)(CardTitle,{children:"Welcome To Modal"}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor."}),(0,jsx_runtime.jsx)("p",{children:"Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit."}),(0,jsx_runtime.jsxs)(ButtonGroup,{children:[(0,jsx_runtime.jsx)(index_modern.$n,{onClick:()=>{sendNotification(notiInfoSettings),setModalOpen(!1)},children:"Enable Now"}),(0,jsx_runtime.jsx)(StyledButton,{onClick:()=>{setModalOpen(!1)},children:"Enable Later"})]})]})]})},Container=styled_components_browser_esm.Ay.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,MixAlerts_stories={title:"Alerts/Mix",components:index_modern.hN,decorator:[]},custom=(0,jsx_runtime.jsx)(MixAlerts_CardModalExample,{}),ModalAndNotification=()=>{const{createModal}=(0,index_modern.hS)();return(0,jsx_runtime.jsx)(index_modern.$n,{design:"secondary",size:"small",onClick:()=>{createModal({isCloseEnable:!1,width:"480px",padding:!1,customComponent:custom})},children:"Open Welcome Modal"})},_MixAlertsExample=()=>(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(index_modern.ph,{children:(0,jsx_runtime.jsx)(index_modern.Zn,{children:(0,jsx_runtime.jsx)(ModalAndNotification,{})})})}),__namedExportsOrder=["_MixAlertsExample"]}}]);
//# sourceMappingURL=Alerts-MixAlerts-MixAlerts-stories.8f06e76e.iframe.bundle.js.map