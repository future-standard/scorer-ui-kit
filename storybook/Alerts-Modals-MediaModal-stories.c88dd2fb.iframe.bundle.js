"use strict";(self.webpackChunkscorer_ui_kit_storybook=self.webpackChunkscorer_ui_kit_storybook||[]).push([[2365],{"./src/stories/Alerts/Modals/MediaModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_MediaModal:()=>_MediaModal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ui-lib/dist/index.modern.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Alerts/Modals",components:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.Ih,decorator:[]},Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div``,MediaImageModal=_ref=>{let{hasModalLimitsValue,imageSrc,retryLoading}=_ref;const{createModal}=(0,scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.hS)(),mediaImage=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.Ih,{hasModalLimits:hasModalLimitsValue,mediaType:"img",alt:"city",src:imageSrc,retryLoading,minHeight:"300px",minWidth:"300px"}),modalWidth=hasModalLimitsValue?"auto":"60%";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.$n,{design:"secondary",onClick:()=>{createModal({customComponent:mediaImage,padding:!1,width:modalWidth})},children:"Image Modal"})},_MediaModal=()=>{const hasModalLimits=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Has Modal Limits",!0),imageSrc=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Image Src","/images/placeholders/640x480.png"),retryLoading=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Retry Loading",!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.Zn,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MediaImageModal,{hasModalLimitsValue:hasModalLimits,imageSrc,retryLoading})})})},__namedExportsOrder=["_MediaModal"]}}]);