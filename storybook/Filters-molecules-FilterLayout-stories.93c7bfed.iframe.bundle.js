"use strict";(self.webpackChunkscorer_ui_kit_storybook=self.webpackChunkscorer_ui_kit_storybook||[]).push([[1309],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/stories/Filters/molecules/FilterLayout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_FilterLayout:()=>_FilterLayout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ui-lib/dist/index.modern.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Filters/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.j9,decorators:[]},Container=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div``,_FilterLayout=()=>{const language=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Language",{English:"english",Japanese:"japanese"},"japanese"),hasPageSettings=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Has Page Settings",!0),handleLayout=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("layout-button-click"),handlePageSizeChange=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("page-size"),[pageSize,setPageSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),onSizePerPageChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((size=>{setPageSize(size)}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.j9,{onPageSizeChange:size=>{handlePageSizeChange(size),onSizePerPageChange(size)},pageSizeOptions:[10,20,50,100],defaultPageSize:pageSize,getLayout:handleLayout,layoutText:"english"===language?"Layout":"レイアウト",pageSizeText:"english"===language?"Items Per Page":"１ページのアイテム数",contentArray:[{icon:"LayoutGrid",id:"grid",tooltipText:"Grid View"},{icon:"LayoutList",id:"list",tooltipText:"List View"}],hasPageSettings})})},__namedExportsOrder=["_FilterLayout"]}}]);