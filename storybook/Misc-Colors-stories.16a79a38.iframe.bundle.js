"use strict";(self.webpackChunkscorer_ui_kit_storybook=self.webpackChunkscorer_ui_kit_storybook||[]).push([[9840],{"./src/stories/Misc/Colors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Colors:()=>_Colors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  width: 80%;
  margin: 0 auto;
`,Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.h2`
  font-family: var(--font-ui);
  color: var(--grey-8);
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 400;
`,ColorContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  margin-bottom: 80px;
`,Grid=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  display: grid;
  grid-template-columns: repeat(12, calc(100%/12));
  column-gap: 4px;
  row-gap: 4px;
  text-align: center;
`,Swatch=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  height: 96px;
  border-radius: 4px;

  ${_ref=>{let{$color}=_ref;return $color&&`\n    background: var(${$color});\n  `}};
`,SwatchName=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
  position: absolute;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px 0 2px 0;
  background-color: var(--white-a10);
  color: var(--black-a10);
`,_Colors=()=>{const references=["1","2","3","4","5","6","7","8","9","10","11","12"],generatePalette=(name,alpha)=>references.map((iteration=>{const $color=`--${name}-${alpha?"a":""}${iteration}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Swatch,{$color,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SwatchName,{children:$color})})}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container,{children:["primary","secondary","grey","info","success","caution","warning","orange","red","green","black","white"].map((value=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ColorContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Title,{children:value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Grid,{children:[generatePalette(value),generatePalette(value,!0)]})]})))})},__WEBPACK_DEFAULT_EXPORT__={title:"Misc",decorators:[]},__namedExportsOrder=["_Colors"]}}]);
//# sourceMappingURL=Misc-Colors-stories.16a79a38.iframe.bundle.js.map