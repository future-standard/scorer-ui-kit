"use strict";(self.webpackChunkscorer_ui_kit_storybook=self.webpackChunkscorer_ui_kit_storybook||[]).push([[8504],{"./src/stories/Pages/PageHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_PageHeader:()=>_PageHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../ui-lib/dist/index.modern.js"),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/helpers/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  margin: 100px;
`,__WEBPACK_DEFAULT_EXPORT__={title:"Pages/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.zY,decorators:[]},defaultTags=[{label:"Shop A",icon:"MetaCategories",linkTo:"/"},{label:"Example",icon:"MetaTags"},{label:"Smart",icon:"MetaTags"},{label:"Shop B",icon:"MetaCategories"},{label:"Example",icon:"MetaTags"},{label:"Smart",icon:"MetaTags"},{label:"Shop C",icon:"MetaCategories"},{label:"Example",icon:"MetaTags"},{label:"Smart",icon:"MetaTags"}],defaultBtn=[{id:"primaryBase0",buttonType:"default",text:"Example Action 1"},{id:"secondaryBase1",buttonType:"default",text:"Example Action 2",design:"secondary"},{id:"buttonWithIcon2",buttonType:"icon-button",text:"Delete Instance",design:"danger",icon:"DevicesScorerEdge"}],_PageHeader=()=>{const iconList=Object.assign({None:null},(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.$G)()),pageTitle=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Page Title","My Page Title"),pageAreaText=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Page Area","Area Name"),pageAreaHref=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Page Area Href","#"),pageIcon=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Icon",iconList,"Link"),pageIconColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Icon Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle",Inverse:"inverse",Primary:"primary",Danger:"danger",Undefined:void 0},void 0),updateDocTitle=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Update Doc Title",!0),noTagsExample=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("No tags Example",!1),areaTitleBottom=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Area Title Bottom",!1),noButtonsExample=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("No Buttons Example",!1),noIconExample=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("No Icon",!1),introductionText=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique."),tagList=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.object)("Tag List",defaultTags),buttonList=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.object)("Buttons Stack",defaultBtn);return updateDocTitle&&console.info("Note: Updating document.title in Storybook has no effect though it should work in projects."),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.zY,{icon:noIconExample?void 0:pageIcon||void 0,iconColor:pageIconColor,introductionText,title:pageTitle,areaTitle:pageAreaText,areaHref:pageAreaHref,updateDocTitle,tagList:noTagsExample?void 0:tagList,rightContent:noButtonsExample?void 0:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.AK,{buttons:buttonList}),areaTitleBottom})})},__namedExportsOrder=["_PageHeader"]},"./src/stories/helpers/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$G:()=>generateIconList,jx:()=>emptyCallbackForStory,yy:()=>sleep});var _future_standard_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@future-standard/icons/dist/index.modern.js");const sleep=delay=>new Promise((resolve=>setTimeout(resolve,delay))),emptyCallbackForStory=fn=>(fn.toString=()=>"() => {}",fn),generateIconList=()=>{let iconList={};for(const key in _future_standard_icons__WEBPACK_IMPORTED_MODULE_0__.v)iconList[key]=key;return iconList}}}]);
//# sourceMappingURL=Pages-PageHeader-stories.2e9e9fd7.iframe.bundle.js.map