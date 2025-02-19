"use strict";(self.webpackChunkscorer_ui_kit_storybook=self.webpackChunkscorer_ui_kit_storybook||[]).push([[9948],{"./src/stories/Alerts/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Tooltip:()=>_Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../ui-lib/dist/index.modern.js"),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/helpers/index.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Alerts/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.m_,decorators:[]},Container=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div``,Content=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  margin: 20px 0;
`,HoverSpan=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.span`
  color: var(--primary-11);
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`,_Tooltip=()=>{const message=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.text)("Message","This is the tooltip of the hovering element"),type=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.select)("Type",{Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"info"),noIcon=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.boolean)("No Icon",!1),iconList={"":"",...(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.$G)()},icon=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.select)("Icon",iconList,"Information"),tooltipPosition=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.select)("Tooltip Position",{TopLeft:"top-left",Top:"top",TopRight:"top-right",BottomLeft:"bottom-left",Bottom:"bottom",BottomRight:"bottom-right",LeftTop:"left-top",Left:"left",LeftBottom:"left-bottom",RightTop:"right-top",Right:"right",RightBottom:"right-bottom"},"top-right"),exampleTriggerA=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),exampleTriggerB=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),exampleTriggerC=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),exampleTriggerD=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),exampleTriggerE=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.sT,{title:"Page with tooltips"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Content,{children:["The tooltip is a common graphical user interface (GUI) element in which, when ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HoverSpan,{ref:exampleTriggerA,children:"hovering over"}),' a screen element or component, a text box displays information about that element, such as a description of a button\'s function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Content,{children:["The tooltip is a common graphical user interface (GUI) element in which, when ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HoverSpan,{ref:exampleTriggerB,children:"hovering over"}),' a screen element or component, a text box displays information about that element, such as a description of a button\'s function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Content,{children:["The tooltip is a common graphical user interface (GUI) element in which, when ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HoverSpan,{ref:exampleTriggerC,children:"hovering over"}),' a screen element or component, a text box displays information about that element, such as a description of a button\'s function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Content,{children:["The tooltip is a common graphical user interface (GUI) element in which, when ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HoverSpan,{ref:exampleTriggerD,children:"hovering over"}),' a screen element or component, a text box displays information about that element, such as a description of a button\'s function, what an abbreviation stands for, or the exact absolute time stamp over a relative time ("… ago"). In this paragraph the tooltip will be display in a dynamic position.']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Content,{children:["This tooltip ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HoverSpan,{ref:exampleTriggerE,children:"message"})," position is fixed,  you can update it with the property tool position with the knobs bellow ."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.m_,{tooltipFor:exampleTriggerA,icon:noIcon?void 0:icon,message}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.m_,{tooltipFor:exampleTriggerB,icon:noIcon?void 0:icon,message}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.m_,{tooltipFor:exampleTriggerC,icon:noIcon?void 0:icon,message}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.m_,{tooltipFor:exampleTriggerD,icon:noIcon?void 0:icon,message}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.m_,{tooltipFor:exampleTriggerE,maxWidth:"200px",icon:noIcon?void 0:icon,type,message,tooltipPosition})]})},__namedExportsOrder=["_Tooltip"]},"./src/stories/helpers/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$G:()=>generateIconList,jx:()=>emptyCallbackForStory,yy:()=>sleep});var _future_standard_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@future-standard/icons/dist/index.modern.js");const sleep=delay=>new Promise((resolve=>setTimeout(resolve,delay))),emptyCallbackForStory=fn=>(fn.toString=()=>"() => {}",fn),generateIconList=()=>{let iconList={};for(const key in _future_standard_icons__WEBPACK_IMPORTED_MODULE_0__.v)iconList[key]=key;return iconList}}}]);
//# sourceMappingURL=Alerts-Tooltip-stories.6fc7c0c4.iframe.bundle.js.map