"use strict";(self.webpackChunkscorer_ui_kit_storybook=self.webpackChunkscorer_ui_kit_storybook||[]).push([[5598],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/stories/Tables/atoms/TableRowThumbnail.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_RowThumbnail:()=>_RowThumbnail,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/assets/placeholder.jpg"),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../ui-lib/dist/index.modern.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Tables/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.VT,decorators:[]},Container=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  height: 200px;
  width:  800px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ContainerInner=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  flex: 0;
  height: 35px;
`,_RowThumbnail=()=>{const hoverZoom=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Zoom On Hover",!0),image=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Image Src",_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_2__),mediaUrl=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Video Src","https://future-standard.github.io/scorer-ui-kit/traffic.mp4"),mediaType=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Media Type",["img","video"],"video"),retryImageLoad=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Retry Image",!1),onClickAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.XI)("Doing some other action than opening a modal"),onClickThumbnail=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Custom onClickThumnail",!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.Zn,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ContainerInner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.VT,{onClickThumbnail:onClickThumbnail?onClickAction:void 0,hoverZoom,image,mediaUrl,mediaType,retryImageLoad})})})})},__namedExportsOrder=["_RowThumbnail"]},"./src/stories/assets/placeholder.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"535c5e79a016fae2bb59.jpg"}}]);
//# sourceMappingURL=Tables-atoms-TableRowThumbnail-stories.9a7586ee.iframe.bundle.js.map