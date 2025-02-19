"use strict";(self.webpackChunkscorer_ui_kit_storybook=self.webpackChunkscorer_ui_kit_storybook||[]).push([[5937],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/stories/Misc/atoms/BasicSearchInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_BasicSearchInput:()=>_BasicSearchInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ui-lib/dist/index.modern.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/helpers/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Misc/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.lF,decorators:[],parameters:{jsx:{skip:1}}},Container=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  margin: 20px;
`,_BasicSearchInput=()=>{const inputPlaceholder=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Placeholder","Search by name..."),textValue=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("Search value"),hasBorder=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Has border",!0),noBackground=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("No Background",!0),color=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle"},"subtle"),iconSize=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Icon size",12),disabled=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{const{value}=e.target;textValue(value)}),[textValue]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.lF,{placeholder:inputPlaceholder,onChange:(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.jx)(handleChange),hasBorder,noBackground,color,iconSize,disabled})})},__namedExportsOrder=["_BasicSearchInput"]},"./src/stories/helpers/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$G:()=>generateIconList,jx:()=>emptyCallbackForStory,yy:()=>sleep});var _future_standard_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@future-standard/icons/dist/index.modern.js");const sleep=delay=>new Promise((resolve=>setTimeout(resolve,delay))),emptyCallbackForStory=fn=>(fn.toString=()=>"() => {}",fn),generateIconList=()=>{let iconList={};for(const key in _future_standard_icons__WEBPACK_IMPORTED_MODULE_0__.v)iconList[key]=key;return iconList}}}]);
//# sourceMappingURL=Misc-atoms-BasicSearchInput-stories.cde91d8a.iframe.bundle.js.map