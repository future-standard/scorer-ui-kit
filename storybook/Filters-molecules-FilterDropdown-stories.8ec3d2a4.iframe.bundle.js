"use strict";(self.webpackChunkscorer_ui_kit_storybook=self.webpackChunkscorer_ui_kit_storybook||[]).push([[7804],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/stories/Filters/molecules/FilterDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_FilterDropdown:()=>_FilterDropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../ui-lib/dist/index.modern.js"),_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/helpers/data_samples.tsx"),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/helpers/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Filters/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.UM,decorators:[]},Content=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.div``,Divider=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.div``,Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.div`
  margin: 100px;
  display: inline-block;
`,englishDataList=[{text:"Ramen",value:0},{text:"Takoyaki",value:1},{text:"Gyoza",value:2},{text:"Tempura",value:3},{text:"Sushi",value:4},{text:"Natto",value:5},{text:"Sashimi",value:6}],japaneseDataList=[{text:"ラーメン",value:0},{text:"蛸焼き",value:1},{text:"餃子",value:2},{text:"天婦羅",value:3},{text:"すし",value:4},{text:"納豆",value:5},{text:"お造り",value:6}],englishTextList=[{text:"Super Spicy",value:0},{text:"Spicy",value:1},{text:"Mild",value:2},{text:"Sweet",value:3}],japaneseTextList=[{text:"超辛い",value:0},{text:"辛い",value:1},{text:"中華い",value:2},{text:"甘口",value:3}],yearList=[{text:"1900",value:1900},{text:"1910",value:1920},{text:"1930",value:1930},{text:"1950",value:1950},{text:"1960",value:1960},{text:"1970",value:1970},{text:"1980",value:1980},{text:"1990",value:1990},{text:"2000",value:2e3},{text:"2010",value:2010},{text:"2020",value:2020}],englishPayList=[{text:"Card",value:0},{text:"Cash",value:1},{text:"IC Card",value:2}],japanesePayList=[{text:"カード",value:0},{text:"現金",value:1},{text:"IC カード",value:2}],baseExample=[{text:"Adipiscing",value:0},{text:"Amet",value:1},{text:"Consectetur",value:2},{text:"Dolor sit",value:3},{text:"Lorem ipsum",value:4},{text:"Vestibulum",value:5},{text:"Minim Veniam",value:6},{text:"Consequat",value:7},{text:"Fugiat Nulla",value:8}],_FilterDropdown=()=>{const iconList=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.$G)(),language=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Language",{English:"english",Japanese:"japanese"},"japanese"),buttonText=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Text","Department"),buttonIcon=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Button Icon",iconList,iconList.MetaCategories),disabled=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disable",!1),isLoading=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Is Loading",!1),design=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Design type",{Default:"default",Basic:"basic"},"default"),optionType=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Option Type",{text:"text",checkbox:"checkbox",radio:"radio"},"checkbox"),loadingText=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Loading Text","Loading Tags..."),maxDisplayedItems=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Max Displayed Items",6),selectedItems=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("Currently Selected"),foodSelection=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("Food selected"),spiceAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("Spicy level"),paymentAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("Payment type"),yearAction=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("Years"),[selectedObj,setSelectedObj]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[textArraySelected,setTextArraySelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[wordSelected,setWordSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("english"===language?{text:"Card",value:0}:{text:"カード",value:0}),[numberSelected,setNumberSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{text:"1990",value:1990}]),[baseSelected,setBaseSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),handleSelectItemType=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newSelection=>{foodSelection(newSelection),setSelectedObj(newSelection)}),[foodSelection]),handleTextListSelect=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newSelection=>{spiceAction(newSelection),setTextArraySelected(newSelection)}),[spiceAction]),handleNumberListSelect=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newSelection=>{yearAction(newSelection),setNumberSelected(newSelection)}),[yearAction]),handleWordSelect=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newSelection=>{paymentAction(newSelection),setWordSelected(newSelection)}),[paymentAction]),handleBaseExample=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newSelection=>{selectedItems(newSelection),setBaseSelected(newSelection)}),[selectedItems]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.zY,{title:"Base Example",introductionText:"This example doesn't have filter for options."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.UM,{disabled,isLoading,buttonText,maxDisplayedItems,buttonIcon,design,list:baseExample,onSelect:handleBaseExample,optionType:"checkbox",selected:baseSelected,loadingText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.ml:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.uu})]},"eje-0"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.zY,{title:"Data Object",introductionText:"Array of IFilterList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.UM,{buttonIcon,disabled,isLoading,design,loadingText,maxDisplayedItems,list:"english"===language?englishDataList:japaneseDataList,buttonText:"english"===language?"Menu":"メニュー",selected:selectedObj,optionType,onSelect:handleSelectItemType,searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.YS:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.h_,searchPlaceholder:"english"===language?"Menu options...":"メニュー...",loadingText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.ml:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.uu,hasOptionsFilter:!0})]},"eje-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Divider,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.zY,{title:"Text type",introductionText:"."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.UM,{buttonIcon,disabled,isLoading,design,loadingText,maxDisplayedItems,list:"english"===language?englishTextList:japaneseTextList,buttonText:"english"===language?"Spice level":"ピリ辛",selected:textArraySelected,onSelect:handleTextListSelect,optionType:"text",loadingText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.ml:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.uu,searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.YS:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.h_,searchPlaceholder:"english"===language?"Spice options...":"ピリ辛...",hasOptionsFilter:!0})]},"eje-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.zY,{title:"Radio type",introductionText:"."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.UM,{buttonIcon,disabled,isLoading,design,loadingText,maxDisplayedItems,list:"english"===language?englishPayList:japanesePayList,buttonText:"english"===language?"Pay Method":"支払方法",selected:wordSelected,onSelect:handleWordSelect,optionType:"radio",loadingText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.ml:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.uu,searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.YS:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.h_,searchPlaceholder:"english"===language?"Pay Methods...":"支払方法...",hasOptionsFilter:!0})]},"eje-3"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.zY,{title:"Checkbox type",introductionText:"Array of IFilterList with numbers [{text: '1900', value:1910}, {text:'1910', value: 1910}]"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.UM,{buttonIcon,disabled,isLoading,design,loadingText,maxDisplayedItems,buttonText:"english"===language?"Year":"年",selected:numberSelected,list:yearList,onSelect:handleNumberListSelect,optionType:"checkbox",loadingText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.ml:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.uu,searchPlaceholder:"english"===language?"Years...":"2020...",searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.YS:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.h_,hasOptionsFilter:!0})]},"eje-4"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.zY,{title:"Empty Example",introductionText:"Empty list is been sent."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.UM,{buttonIcon,disabled,isLoading,design,loadingText,maxDisplayedItems,buttonText:"english"===language?"Tags":"タグー",selected:numberSelected,list:[],onSelect:handleNumberListSelect,optionType:"checkbox",loadingText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.ml:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.uu,searchPlaceholder:"english"===language?"Filter tags…":"フィルタータグ...",searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.YS:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.h_,emptyResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.Km:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_4__.P,hasOptionsFilter:!0})]},"eje-5")]})},__namedExportsOrder=["_FilterDropdown"]},"./src/stories/helpers/data_samples.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$8:()=>costRangeEng,B$:()=>showMoreJp,Dm:()=>showLessEng,Dv:()=>searchPlaceholderJapanese,GK:()=>clearJp,I$:()=>costRangeJap,Km:()=>emptyResultsEnglish,M4:()=>clearEng,N8:()=>tableDataJp,P:()=>emptyResultsJapanese,Qe:()=>deleteFilesTitleEn,XM:()=>statusValuesJp,YS:()=>searchTemplateResultEnglish,d7:()=>columnConfigSample,dz:()=>deleteMessageJp,hT:()=>showMoreEng,h_:()=>searchTemplateResultJapanese,i8:()=>columnActionsSample,iJ:()=>searchPlaceholderEnglish,k8:()=>deleteMessageEn,lf:()=>resultTextTemplateJp,lh:()=>showLessJp,ml:()=>loadingTagsEnglish,pG:()=>columnConfigSampleJp,rg:()=>statusValuesEng,uu:()=>genericLoadingJp,vM:()=>deleteFilesTitleJP,x9:()=>tableData,zG:()=>resultTextTemplateEng});const statusValuesEng=[{text:"OK",value:"good"},{text:"Caution",value:"caution"},{text:"Warning",value:"danger"},{text:"Offline",value:"neutral"}],statusValuesJp=[{text:"OKです。",value:"good"},{text:"注意",value:"caution"},{text:"警告",value:"danger"},{text:"オフライン",value:"neutral"}],costRangeEng=[{text:"Less than 5000",value:5e3},{text:"Less than 10000",value:1e4},{text:"Less than 20000",value:2e4}],costRangeJap=[{text:"以下 5000",value:5e3},{text:"以下 10000",value:1e4},{text:"以下 20000",value:2e4}],tableData=[{id:"device-1",deviceName:"Device Name",deviceLink:"#",status:"good",statusText:"OK",created:new Date,totalTime:"00:10:10",usage:242,usageUnit:"mb",cost:2e4},{id:"device-2",deviceName:"Another Device",deviceLink:"",status:"danger",statusText:"Warning",created:new Date("8/1/21"),totalTime:"00:40:12",usage:2.1,usageUnit:"gb",cost:4e3},{id:"device-3",deviceName:"Old Device",deviceLink:"#",status:"danger",statusText:"Warning",created:new Date("6/22/21"),totalTime:"00:70:00",usage:2.1,usageUnit:"tb",cost:7e3},{id:"device-4",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("5/2/21"),totalTime:"00:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-5",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"caution",statusText:"Caution",created:new Date("4/10/21"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-6",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("2/1/21"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-7",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("12/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-8",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"neutral",statusText:"Offline",created:new Date("8/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-9",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("7/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-10",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",totalTime:"01:30:00",created:new Date("5/1/20"),usage:153,usageUnit:"mb",cost:25e3},{id:"device-11",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("2/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3}],tableDataJp=[{id:"device-1",deviceName:"Device Name",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date,totalTime:"00:10:10",usage:242,usageUnit:"mb",cost:2e4},{id:"device-2",deviceName:"Another Device",deviceLink:"",status:"danger",statusText:"注意事項",created:new Date("8/1/21"),totalTime:"00:40:12",usage:2.1,usageUnit:"gb",cost:4e3},{id:"device-3",deviceName:"Old Device",deviceLink:"#",status:"danger",statusText:"警告",created:new Date("6/22/21"),totalTime:"00:60:00",usage:2.1,usageUnit:"tb",cost:7e3},{id:"device-4",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです",created:new Date("5/2/21"),totalTime:"00:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-5",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"caution",statusText:"注意事項",created:new Date("4/10/21"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-6",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date("2/1/21"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-7",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date("12/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-8",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"neutral",statusText:"オフライン",created:new Date("8/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-9",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date("7/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-10",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",totalTime:"01:10:00",created:new Date("5/1/20"),usage:153,usageUnit:"mb",cost:18e3},{id:"device-11",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date("2/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3}],columnConfigSample=[{columnId:"deviceName",groupTitle:"Device",header:"Device Name",sortable:!0,sortActive:!0,cellStyle:"firstColumn"},{columnId:"status",groupTitle:"Device",header:"Status",sortable:!0,showStatus:!0,cellStyle:"normalImportance"},{columnId:"created",groupTitle:"Device",header:"Created",sortable:!1,cellStyle:"lowImportance",alignment:"center",hasCopyButton:!0},{columnId:"run",groupTitle:"Time",header:"Total Run Time",sortable:!1,cellStyle:"lowImportance",alignment:"left",hasCopyButton:!0},{columnId:"usage",header:"Usage",sortable:!1,cellStyle:"normalImportance",alignment:"right",showUnit:!0},{columnId:"cost",header:"Cost",sortable:!0,cellStyle:"highImportance",alignment:"right",hasCopyButton:!0}],columnConfigSampleJp=[{columnId:"deviceName",groupTitle:"デバイス",header:"デバイス名",sortable:!0,sortActive:!0,cellStyle:"firstColumn"},{columnId:"status",groupTitle:"デバイス",header:"ステータス",sortable:!0,showStatus:!0,cellStyle:"normalImportance"},{columnId:"created",groupTitle:"デバイス",header:"作成時期",sortable:!1,cellStyle:"lowImportance",alignment:"center",hasCopyButton:!0},{columnId:"run",groupTitle:"時間",header:"ランタイム",sortable:!1,cellStyle:"lowImportance",alignment:"left",hasCopyButton:!0},{columnId:"usage",header:"使用",sortable:!1,cellStyle:"normalImportance",alignment:"right",showUnit:!0},{columnId:"cost",header:"価格",sortable:!0,cellStyle:"highImportance",alignment:"right",hasCopyButton:!0}],columnActionsSample=[{columnId:"created",groupTitle:"Device",header:"Created",sortable:!1,cellStyle:"lowImportance",alignment:"left"},{columnId:"run",groupTitle:"Time",header:"Total Run Time",sortable:!1,cellStyle:"lowImportance",alignment:"left"},{columnId:"usage",header:"Usage",sortable:!1,cellStyle:"normalImportance",alignment:"right",showUnit:!0},{columnId:"actions",header:"Actions",sortable:!1,cellStyle:"normalImportance",alignment:"right"}],searchTemplateResultEnglish="Showing [VISIBLE] of [TOTAL]",searchTemplateResultJapanese="[VISIBLE] 〜 [TOTAL]件",searchPlaceholderJapanese="フィルタータグ...",searchPlaceholderEnglish="Filter tags...",loadingTagsEnglish="Loading Tags...",genericLoadingJp="ローディング...",showMoreEng="Show More",showMoreJp="もっと見る",showLessEng="Show less",showLessJp="折りたたむ",resultTextTemplateEng="Showing Results ([TOTAL_RESULTS]):",resultTextTemplateJp="表示結果 ([TOTAL_RESULTS]):",clearEng="CLEAR ALL",clearJp="すべてクリア",deleteFilesTitleEn="Delete selected files",deleteFilesTitleJP="選択したファイルを削除しますか？",deleteMessageEn="Are you sure you wish to delete these files? Once deleted they cannot be recovered.",deleteMessageJp="これらのファイルを本当に削除してよいですか？一度削除すると元に戻せません",emptyResultsEnglish="No tags available.",emptyResultsJapanese="タグは使用できません。"},"./src/stories/helpers/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$G:()=>generateIconList,jx:()=>emptyCallbackForStory,yy:()=>sleep});var _future_standard_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@future-standard/icons/dist/index.modern.js");const sleep=delay=>new Promise((resolve=>setTimeout(resolve,delay))),emptyCallbackForStory=fn=>(fn.toString=()=>"() => {}",fn),generateIconList=()=>{let iconList={};for(const key in _future_standard_icons__WEBPACK_IMPORTED_MODULE_0__.v)iconList[key]=key;return iconList}}}]);
//# sourceMappingURL=Filters-molecules-FilterDropdown-stories.8ec3d2a4.iframe.bundle.js.map