(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/placeholder.8af7ef66.jpg"},1012:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(56),_clientLogger=__webpack_require__(44),_configFilename=__webpack_require__(1043);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1024:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(337).configure)([__webpack_require__(1025),__webpack_require__(1026)],module,!1)}).call(this,__webpack_require__(92)(module))},1025:function(module,exports,__webpack_require__){var map={"./MainMenu.stories.tsx":403,"./TopBar.stories.tsx":404};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1025},1026:function(module,exports,__webpack_require__){var map={"./Alerts/AlertBar.stories.tsx":1027,"./Form/Button.stories.tsx":1028,"./Form/ButtonWithIcons.stories.tsx":1029,"./Form/ButtonWithLoading.stories.tsx":1030,"./Form/Input.stories.tsx":1031,"./Form/PasswordInput.stories.tsx":1032,"./Form/SmallInput.stories.tsx":1033,"./Form/Switch.stories.tsx":1034,"./Global/MainMenu.stories.tsx":403,"./Global/TopBar.stories.tsx":404,"./Indicators/Spinner.stories.tsx":1035,"./Misc/Icons.stories.tsx":1036,"./Pages/IntroductionText.stories.tsx":1037,"./Pages/PageHeader.stories.tsx":1038,"./Pages/PageTitle.stories.tsx":1039,"./Tables/TypeTable.stories.tsx":1040,"./Tables/atoms/TableRowThumbnail.stories.tsx":1041};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1026},1027:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_AlertBar",(function(){return _AlertBar}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Alerts/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.a,decorators:[]};var _AlertBar=function _AlertBar(){var message=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Message","Look Out!"),type=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success"},"error");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.a,{message:message,type:type}))}},1028:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"StandardButton",(function(){return StandardButton}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Buttons",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.b,decorators:[]};var StandardButton=function StandardButton(){var buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Button Text","Example Title"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Small:"small",Normal:"normal",Large:"large"},"normal"),buttonDisabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),buttonOnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("button-click");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.b,{design:buttonDesign,size:buttonSize,onClick:buttonOnClick,disabled:buttonDisabled},buttonText)}},1029:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_WithIcon",(function(){return _WithIcon}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Buttons",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.c,decorators:[]};var _WithIcon=function _WithIcon(){var iconList=generateIconList(),buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Button Text","Example Title"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Small:"small",Normal:"normal",Large:"large"},"normal"),buttonDisabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),buttonIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Icon",iconList,Object.keys(iconList)[0]),buttonIconPosition=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Icon Position",{Left:"left",Right:"right"},"right"),buttonOnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("button-click");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.c,{design:buttonDesign,size:buttonSize,onClick:buttonOnClick,icon:buttonIcon,position:buttonIconPosition,disabled:buttonDisabled},buttonText)},generateIconList=function generateIconList(){var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.f)iconList[_key]=_key;return iconList}},1030:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_WithLoading",(function(){return _WithLoading}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Buttons",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.d,decorators:[]};var _WithLoading=function _WithLoading(){var buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Button Text","Example Title"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Small:"small",Normal:"normal",Large:"large"},"normal"),buttonDisabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),buttonLoading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Loading",!0),buttonLoadingPosition=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Loading Position",{Left:"left",Right:"right"},"right"),buttonOnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("button-click");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.d,{design:buttonDesign,size:buttonSize,onClick:buttonOnClick,loading:buttonLoading,position:buttonLoadingPosition,disabled:buttonDisabled},buttonText)}},1031:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TextInput",(function(){return TextInput}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.q,decorators:[]};var TextInput=function TextInput(){var inputName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Name","my_input"),inputLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","My Input"),inputFeedback=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Feedback","This is a feedback message."),inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),inputState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"disabled");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.q,{name:inputName,label:inputLabel,placeholder:inputPlaceholder,fieldState:inputState,feedbackMessage:inputFeedback}))}},1032:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PasswordInput",(function(){return PasswordInput}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.l,decorators:[]};var PasswordInput=function PasswordInput(){var inputName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Name","my_input"),inputLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","My Input"),inputValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Value","Test"),inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),inputState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"disabled");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.l,{name:inputName,label:inputLabel,defaultValue:inputValue,placeholder:inputPlaceholder,fieldState:inputState}))}},1033:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_SmallInput",(function(){return _SmallInput}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"Form/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.m,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject()),_SmallInput=function _SmallInput(){var inputType=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{Text:"text",Password:"password",Email:"email",Number:"number"},"text"),inputName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Name","my_input"),inputLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","My Input"),inputUnit=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Unit","º"),inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),inputState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"disabled");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.m,{type:inputType,unit:inputUnit,name:inputName,label:inputLabel,placeholder:inputPlaceholder,fieldState:inputState}))}},1034:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Switch",(function(){return _Switch}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Form/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.o,decorators:[]};var _Switch=function _Switch(){var labelText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Label Text","The Label"),state=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("State",{Default:"default",Disabled:"disabled",Locked:"locked",Loading:"loading",Failure:"failure"},"default"),leftTheme=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Left Theme",{Off:"off",On:"on",Danger:"danger"},"off"),rightTheme=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Right Theme",{Off:"off",On:"on",Danger:"danger"},"on"),onChange=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("value-changed");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.o,{state:state,leftTheme:leftTheme,rightTheme:rightTheme,labelText:labelText,onChange:onChange})}},1035:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoadingSpinner",(function(){return LoadingSpinner}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  padding: 12px 24px;\n  width: 100px;\n  border-radius: 3px;\n\n  margin: 15% auto;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n\n  ",";\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"Misc",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.n,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject(),(function(_ref){var theme=_ref.theme,styling=_ref.styling;return theme.colors.form.feedback[function containerBackgroundKey(styling){switch(styling){case"primary":return"processing";case"secondary":return"basic";case"danger":return"invalid";default:return"basic"}}(styling)]})),LoadingSpinner=function LoadingSpinner(){var spinnerSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Small:"small",Medium:"medium",Large:"large",XLarge:"xlarge"},"medium"),spinnerType=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Style",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,{styling:spinnerType},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.n,{size:spinnerSize,styling:spinnerType}))}},1036:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Icons",(function(){return _Icons}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject2(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 50px);\n  column-gap: 24px;\n  row-gap: 24px;\n  text-align: center;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  padding: 12px 24px;\n  width: 100px;\n  border-radius: 3px;\n\n  margin: 15% auto;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"Misc",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.e,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject()),Grid=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject2()),_Icons=function _Icons(){var iconList=function generateIconList(){var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.f)iconList[_key]=_key;return iconList}(),showAll=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show All",!1),iconName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Name",iconList,Object.keys(iconList)[0]),iconColor=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle",Inverse:"inverse",Primary:"primary"},"mono"),iconWeight=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Weight",{Light:"light",Regular:"regular",Heavy:"heavy"},"regular"),iconSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Size",24);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,showAll?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid,null,function generateIconGrid(props){return Object.keys(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.f).map((function(iconName){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{title:iconName,key:iconName},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.e,Object.assign({icon:iconName},props)))}))}({color:iconColor,weight:"regular",size:24}))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.e,{icon:iconName,weight:iconWeight,color:iconColor,size:iconSize}))}},1037:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_IntroductionText",(function(){return _IntroductionText}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Pages/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.g,decorators:[]};var _IntroductionText=function _IntroductionText(){var introductionText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.g,null,introductionText))}},1038:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_PageHeader",(function(){return _PageHeader}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Pages/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.j,decorators:[]};var _PageHeader=function _PageHeader(){var iconList=Object.assign({None:null},generateIconList()),pageTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Page Title","My Page Title"),pageAreaText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Page Area","Area Name"),pageAreaHref=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Page Area Href","#"),pageIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Icon",iconList,void 0),introductionText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.j,{icon:pageIcon,introductionText:introductionText,title:pageTitle,areaTitle:pageAreaText,areaHref:pageAreaHref}))},generateIconList=function generateIconList(){var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.f)iconList[_key]=_key;return iconList}},1039:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_PageTitle",(function(){return _PageTitle}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Pages/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.k,decorators:[]};var _PageTitle=function _PageTitle(){var iconList=Object.assign({None:null},generateIconList()),title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","My Page Title"),icon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Icon",iconList,void 0),areaTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Area Title","Area Title"),areaHref=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Area Href","#");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.k,{title:title,icon:icon,areaTitle:areaTitle,areaHref:areaHref}))},generateIconList=function generateIconList(){var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.f)iconList[_key]=_key;return iconList}},1040:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TypeTable",(function(){return _TypeTable}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(101),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_5__);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Tables/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.s,decorators:[]};var columnConfigSample=[{header:"Device Name",sortable:!0,cellStyle:"firstColumn"},{header:"Created",sortable:!1,cellStyle:"lowImportance",alignment:"center"},{header:"Usage",sortable:!1,cellStyle:"normalImportance",showUnit:!0},{header:"Cost",sortable:!0,cellStyle:"highImportance",alignment:"right",hasCopyButton:!0}],rowDataSample=[{header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,icon:"Zone"},columns:[{text:"Device Name",href:"#"},{text:"Just Now"},{text:"200",unit:"Tb"},{text:"¥20,000"}]},{header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,icon:"Location"},columns:[{text:"Another Device",href:"#"},{text:"1st October 2019"},{text:"200",unit:"Tb"},{text:"¥4,000"}]},{header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,icon:"Location"},columns:[{text:"Old Device",href:"#"},{text:"22nd March 2020"},{text:"200",unit:"Tb"},{text:"¥7,000"}]},{header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,icon:"Location"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"2nd April 2020"},{text:"200",unit:"Tb"},{text:"¥25,000"}]}],_TypeTable=function _TypeTable(){var hasStatus=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has Device Status",!1),hasThumbnail=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has Thumbnail",!1),hasTypeIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has Device Type Icon",!1),selectable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Selectable Rows",!0),columnConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Column Configuration",columnConfigSample),rows=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Row Data",rowDataSample);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.s,{columnConfig:columnConfig,selectable:selectable,rows:rows,hasStatus:hasStatus,hasThumbnail:hasThumbnail,hasTypeIcon:hasTypeIcon}))}},1041:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_RowThumbnail",(function(){return _RowThumbnail}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(101),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4__),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);function _templateObject2(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  flex: 0;\n  height: 35px;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  height: 200px;\n  width:  800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"Tables/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.p,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject()),ContainerInner=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject2()),_RowThumbnail=function _RowThumbnail(){var hoverZoom=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Zoom On Hover",!0),image=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Image Src",_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainerInner,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.p,{hoverZoom:hoverZoom,image:image})))}},1043:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(1),index_modern=__webpack_require__(3),taggedTemplateLiteral=__webpack_require__(8),Lato_Thin=__webpack_require__(410),Lato_Thin_default=__webpack_require__.n(Lato_Thin),Lato_Light=__webpack_require__(411),Lato_Light_default=__webpack_require__.n(Lato_Light),Lato_Regular=__webpack_require__(412),Lato_Regular_default=__webpack_require__.n(Lato_Regular),Lato_Bold=__webpack_require__(413),Lato_Bold_default=__webpack_require__.n(Lato_Bold),Monorale_Thin=__webpack_require__(414),Monorale_Thin_default=__webpack_require__.n(Monorale_Thin),Monorale_ThinItalic=__webpack_require__(415),Monorale_ThinItalic_default=__webpack_require__.n(Monorale_ThinItalic),Monorale_ExtraLight=__webpack_require__(416),Monorale_ExtraLight_default=__webpack_require__.n(Monorale_ExtraLight),Monorale_ExtraLightItalic=__webpack_require__(417),Monorale_ExtraLightItalic_default=__webpack_require__.n(Monorale_ExtraLightItalic),Monorale_Light=__webpack_require__(418),Monorale_Light_default=__webpack_require__.n(Monorale_Light),Monorale_LightItalic=__webpack_require__(419),Monorale_LightItalic_default=__webpack_require__.n(Monorale_LightItalic),Monorale_Regular=__webpack_require__(420),Monorale_Regular_default=__webpack_require__.n(Monorale_Regular),Monorale_Italic=__webpack_require__(421),Monorale_Italic_default=__webpack_require__.n(Monorale_Italic),Monorale_Medium=__webpack_require__(422),Monorale_Medium_default=__webpack_require__.n(Monorale_Medium),Monorale_MediumItalic=__webpack_require__(423),Monorale_MediumItalic_default=__webpack_require__.n(Monorale_MediumItalic),Monorale_SemiBold=__webpack_require__(424),Monorale_SemiBold_default=__webpack_require__.n(Monorale_SemiBold),Monorale_SemiBoldItalic=__webpack_require__(425),Monorale_SemiBoldItalic_default=__webpack_require__.n(Monorale_SemiBoldItalic),Monorale_Bold=__webpack_require__(426),Monorale_Bold_default=__webpack_require__.n(Monorale_Bold),Monorale_BoldItalic=__webpack_require__(427),Monorale_BoldItalic_default=__webpack_require__.n(Monorale_BoldItalic),Monorale_ExtraBold=__webpack_require__(428),Monorale_ExtraBold_default=__webpack_require__.n(Monorale_ExtraBold),Monorale_ExtraBoldItalic=__webpack_require__(429),Monorale_ExtraBoldItalic_default=__webpack_require__.n(Monorale_ExtraBoldItalic),Monorale_Black=__webpack_require__(430),Monorale_Black_default=__webpack_require__.n(Monorale_Black),Monorale_BlackItalic=__webpack_require__(431),Monorale_BlackItalic_default=__webpack_require__.n(Monorale_BlackItalic);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 100;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    font-style: light;\n    font-weight: 300;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    font-style: bold;\n    font-weight: 700;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 100;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 100;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 200;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 200;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 300;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 300;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 400;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 400;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 500;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 500;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 600;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 600;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 700;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 700;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n}\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 800;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 800;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 900;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 900;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var fonts=Object(styled_components_browser_esm.b)(_templateObject(),Lato_Thin_default.a,Lato_Light_default.a,Lato_Regular_default.a,Lato_Bold_default.a,Monorale_Thin_default.a,Monorale_ThinItalic_default.a,Monorale_ExtraLight_default.a,Monorale_ExtraLightItalic_default.a,Monorale_Light_default.a,Monorale_LightItalic_default.a,Monorale_Regular_default.a,Monorale_Italic_default.a,Monorale_Medium_default.a,Monorale_MediumItalic_default.a,Monorale_SemiBold_default.a,Monorale_SemiBoldItalic_default.a,Monorale_Bold_default.a,Monorale_BoldItalic_default.a,Monorale_ExtraBold_default.a,Monorale_ExtraBoldItalic_default.a,Monorale_Black_default.a,Monorale_BlackItalic_default.a),react_router=__webpack_require__(18);function style_templateObject(){var data=Object(taggedTemplateLiteral.a)(['\n  * , body{\n    box-sizing: border-box;\n  }\n  body, html , #root {\n    min-width: 100%;\n    min-height: 100vh;\n    height: 100%;\n    margin: 0;\n  }\n  html {\n    /* background-image: radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png);\n    background-repeat: no-repeat, repeat; */\n  }\n  body {\n    font-family: Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;\n    color: lightgray;\n  }\n\n']);return style_templateObject=function _templateObject(){return data},data}var style=Object(styled_components_browser_esm.b)(style_templateObject()),decorators=[function ThemeDecorator(story){return react_default.a.createElement(styled_components_browser_esm.a,{theme:index_modern.t},react_default.a.createElement(fonts,null),react_default.a.createElement(style,null),story())},function RouterDecorator(story){return react_default.a.createElement(react_router.a,null,story())}]},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AlertBar})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Button})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ButtonWithIcon})),__webpack_require__.d(__webpack_exports__,"d",(function(){return ButtonWithLoading})),__webpack_require__.d(__webpack_exports__,"e",(function(){return Icon})),__webpack_require__.d(__webpack_exports__,"f",(function(){return IconSVGs})),__webpack_require__.d(__webpack_exports__,"g",(function(){return IntroductionText})),__webpack_require__.d(__webpack_exports__,"h",(function(){return Layout})),__webpack_require__.d(__webpack_exports__,"i",(function(){return MainMenu})),__webpack_require__.d(__webpack_exports__,"j",(function(){return PageHeader})),__webpack_require__.d(__webpack_exports__,"k",(function(){return PageTitle})),__webpack_require__.d(__webpack_exports__,"l",(function(){return PasswordField})),__webpack_require__.d(__webpack_exports__,"m",(function(){return SmallInput})),__webpack_require__.d(__webpack_exports__,"n",(function(){return Spinner})),__webpack_require__.d(__webpack_exports__,"o",(function(){return Switch})),__webpack_require__.d(__webpack_exports__,"p",(function(){return TableRowThumbnail})),__webpack_require__.d(__webpack_exports__,"q",(function(){return TextField})),__webpack_require__.d(__webpack_exports__,"r",(function(){return TopBar})),__webpack_require__.d(__webpack_exports__,"s",(function(){return TypeTable})),__webpack_require__.d(__webpack_exports__,"t",(function(){return light}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(115),__webpack_require__(99));__webpack_require__(18),__webpack_require__(405);const fontFamily={ui:"Monorale",data:"Lato"},dimensions={icons:{weights:{light:1,regular:1.5,heavy:2}},form:{button:{small:"30px",normal:"40px",large:"60px"},input:{height:"40px"},switch:{outer:{width:"38px",height:"22px",borderRadius:"11px"},inner:{width:"16px",height:"16px",borderRadius:"8px"},positions:{top:"2px",off:"2px",neutral:"10px",locked:"2px",on:"18px"}}},global:{mainMenu:{width:{open:"280px",closed:"80px"}}}};var light={fontFamily:fontFamily,dimensions:dimensions,typography:{form:{select:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"16px",fontWeight:400,letterSpacing:"0.2px",textDecoration:"none",color:"hsla(210, 7.2%, 51%, 1.000)"}},button:{primary:{default:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},hover:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},active:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},disabled:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},secondary:{default:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"},hover:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"},active:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"},disabled:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"}},danger:{default:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},hover:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},active:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},disabled:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},generic:{large:{textAlign:"center",fontSize:"20px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},small:{textAlign:"left",fontSize:"14px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}}}},viewIntroduction:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},"sideMenu-SubItem":{textAlign:"left",fontSize:"14px",fontWeight:500,lineHeight:"28px",letterSpacing:"0.3111111px",textDecoration:"none",color:"hsla(211, 13.7%, 70%, 1.000)"},"sideMenu-MainItem":{textAlign:"left",fontSize:"18px",fontWeight:500,lineHeight:"28px",letterSpacing:"0.4px",textDecoration:"none",color:"hsla(209, 49%, 90%, 1.000)"},table:{columns:{normalImportance:{textAlign:"right",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},highImportance:{textAlign:"right",fontSize:"14px",fontWeight:800,textDecoration:"none",color:"hsla(196, 9.7%, 55.7%, 1.000)"},firstColumn:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(194, 10.2%, 52%, 1.000)"},lowImportance:{textAlign:"right",fontStyle:"italic",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},unit:{textAlign:"right",fontStyle:"italic",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"}},header:{textAlign:"right",fontSize:"14px",fontWeight:600,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2.4%, 59%, 1.000)"}},global:{mainMenu:{menuItem:{default:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 34.1%, 1.000)"},active:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 34.1%, 1.000)"},hover:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 34.1%, 1.000)"}},subheader:{textAlign:"left",fontSize:"14px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.35px",textDecoration:"none",color:"hsla(0, 0%, 34.1%, 0.400)"},hidePrompt:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 34.1%, 1.000)"},subMenuItem:{default:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 34.1%, 1.000)"},active:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 34.1%, 1.000)"},hover:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 34.1%, 1.000)"}}}}},colors:{generic:{transparent:{}},form:{input:{default:{normal:{backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(120, 1.3%, 85.3%, 1.000)"},focused:{boxShadow:"0px 3px 7px 0px hsla(207, 65.8%, 31%, 0.078)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"}},disabled:{normal:{backgroundColor:"hsla(206, 36.8%, 96.3%, 1.000)",borderColor:"hsla(120, 1.3%, 85.3%, 1.000)"}},subdivision:{backgroundColor:"hsla(120, 1.3%, 85.3%, 1.000)"},required:{focused:{boxShadow:"0px 3px 7px 0px hsla(207, 67.8%, 35.3%, 0.071)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"},normal:{borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"}},valid:{focused:{boxShadow:"0px 3px 5px 0px hsla(120, 76.6%, 15.1%, 0.071)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(120, 35.2%, 71.6%, 1.000)"},normal:{borderColor:"hsla(120, 35.2%, 71.6%, 1.000)"}},invalid:{focused:{boxShadow:"0px 3px 7px 0px hsla(0, 100%, 50%, 0.102)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(0, 78.8%, 70.4%, 1.000)"},normal:{borderColor:"hsla(0, 78.8%, 70.4%, 1.000)"}},processing:{focused:{boxShadow:"0px 3px 7px 0px hsla(195, 67.8%, 35.3%, 0.071)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(195, 79.5%, 71.4%, 1.000)"},normal:{backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(195, 79.5%, 71.4%, 1.000)"}},seperatedValues:{background:{backgroundImage:"linear-gradient(315.00deg, hsla(205, 82.4%, 64.3%, 1.000) 0%, hsla(195, 83.5%, 54.7%, 1.000) 100%)"},hoverHighlight:{backgroundColor:"hsla(195, 84.3%, 67.5%, 1.000)"}}},button:{primary:{default:{backgroundImage:"linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)",textColor:"hsla(0, 0%, 100%, 1.000)"},hover:{backgroundColor:"hsla(207, 88.2%, 60%, 1.000)",textColor:"hsla(0, 0%, 100%, 1.000)"},active:{backgroundColor:"hsla(195, 79.5%, 71.4%, 1.000)",textColor:"hsla(0, 0%, 100%, 1.000)"},loadingSegment:{backgroundColor:"hsla(195, 72.8%, 66.9%, 1.000)"},internalDivider:{backgroundColor:"hsla(200, 87.5%, 71.8%, 1.000)"},disabled:{backgroundImage:"linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)",textColor:"hsla(0, 0%, 100%, 1.000)"}},secondary:{default:{backgroundColor:"hsla(0, 0%, 94.9%, 1.000)",textColor:"hsla(0, 0%, 55.3%, 1.000)"},hover:{backgroundColor:"hsla(206, 10.8%, 87.3%, 1.000)",textColor:"hsla(0, 0%, 55.3%, 1.000)"},active:{backgroundColor:"hsla(204, 18.2%, 78.4%, 1.000)",textColor:"hsla(0, 0%, 55.3%, 1.000)"},disabled:{backgroundColor:"hsla(0, 0%, 97.6%, 1.000)",textColor:"hsla(0, 0%, 55.3%, 1.000)"},loadingSegment:{backgroundColor:"hsla(203, 18.8%, 72.9%, 1.000)"},internalDivider:{backgroundColor:"hsla(0, 4.9%, 88%, 1.000)"}},danger:{default:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 54%, 60.8%, 1.000) 0%, hsla(0, 71.4%, 67.1%, 1.000) 100%)",textColor:"hsla(0, 0%, 100%, 1.000)"},hover:{backgroundColor:"hsla(0, 88.4%, 66.3%, 1.000)",textColor:"hsla(0, 0%, 100%, 1.000)"},active:{backgroundColor:"hsla(5, 75.9%, 69%, 1.000)",textColor:"hsla(0, 0%, 100%, 1.000)"},disabled:{backgroundColor:"hsla(0, 78.7%, 85.3%, 1.000)",textColor:"hsla(0, 0%, 100%, 1.000)"},loadingSegment:{backgroundColor:"hsla(5, 64.2%, 62.7%, 1.000)"},internalDivider:{backgroundColor:"hsla(5, 52%, 55.9%, 1.000)"}}},feedback:{basic:{backgroundColor:"hsla(0, 0%, 98.8%, 1.000)",borderColor:"hsla(120, 1.3%, 85.3%, 1.000)"},"basic(Focused)":{backgroundColor:"hsla(205, 58.9%, 71.4%, 1.000)"},processing:{backgroundColor:"hsla(195, 79.5%, 71.4%, 1.000)"},valid:{backgroundColor:"hsla(120, 35.2%, 71.6%, 1.000)"},invalid:{backgroundColor:"hsla(0, 78.8%, 70.4%, 1.000)"}},switch:{off:{default:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(210, 30%, 96.1%, 1.000) 0%, hsla(203, 41.9%, 93.9%, 1.000) 100%)",borderColor:"hsla(208, 24.6%, 77.6%, 0.651)"},inner:{backgroundImage:"linear-gradient(315.00deg, hsla(205, 82.4%, 64.3%, 1.000) 0%, hsla(195, 83.5%, 54.7%, 1.000) 100%)"}},disabled:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(0, 0%, 100%, 1.000) 0%, hsla(0, 0%, 98.8%, 1.000) 100%)",borderColor:"hsla(208, 22.7%, 85.3%, 0.651)"},inner:{backgroundColor:"hsla(0, 0%, 85.9%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(210, 30%, 96.1%, 1.000) 0%, hsla(203, 41.9%, 93.9%, 1.000) 100%)",borderColor:"hsla(208, 24.6%, 77.6%, 0.651)"}}},on:{default:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(204, 78.4%, 72.7%, 1.000) 0%, hsla(195, 83.2%, 67.3%, 1.000) 100%)",borderColor:"hsla(205, 66.5%, 61.4%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},disabled:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(205, 61.9%, 87.6%, 1.000) 0%, hsla(204, 45.5%, 84.9%, 1.000) 100%)",borderColor:"hsla(205, 89.5%, 85.1%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(315.00deg, hsla(204, 68.3%, 72.7%, 0.647) 0%, hsla(195, 83.2%, 67.3%, 0.655) 100%)",borderColor:"hsla(205, 66.5%, 61.4%, 0.651)"}}},failure:{default:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 68.5%, 67.6%, 1.000) 0%, hsla(0, 69.1%, 65.7%, 1.000) 100%)",borderColor:"hsla(0, 66.5%, 61.4%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 60.6%, 73.1%, 1.000) 0.4%, hsla(0, 57.9%, 73.9%, 1.000) 100%)",borderColor:"hsla(0, 54.2%, 67.5%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}}},danger:{default:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 68%, 66.9%, 1.000) 0%, hsla(20, 81.2%, 64.5%, 1.000) 100%)",borderColor:"hsla(0, 51.2%, 60.6%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 79.5%, 77.1%, 1.000) 0%, hsla(20, 96%, 80.4%, 1.000) 100%)",borderColor:"hsla(0, 62%, 73.1%, 1.000)"}},disabled:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 57%, 81.8%, 1.000) 0%, hsla(19, 100%, 84.9%, 1.000) 100%)",borderColor:"hsla(0, 55.4%, 78%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}}},locked:{default:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(0, 0%, 100%, 1.000) 0%, hsla(0, 0%, 98.8%, 1.000) 100%)",borderColor:"hsla(208, 22.7%, 85.3%, 0.651)"},inner:{backgroundColor:"hsla(0, 0%, 89%, 1.000)"}}}}},global:{mainMenu:{iconBackground:{active:{backgroundColor:"hsla(210, 91.4%, 77.3%, 1.000)"},hover:{backgroundColor:"hsla(204, 94.6%, 92.7%, 1.000)"},default:{backgroundColor:"hsla(0, 0%, 95.3%, 0.000)"}},background:{boxShadow:"5px 0px 10px 0px hsla(205, 16%, 76.7%, 0.102)",backgroundColor:"hsla(0, 0%, 99.6%, 1.000)"},lines:{backgroundColor:"hsla(240, 2%, 90%, 0.851)"},footerBackground:{backgroundColor:"hsla(0, 0%, 99.6%, 0.851)"}}},indicators:{spinner:{danger:{base:{borderColor:"hsla(5, 77.2%, 70.8%, 1.000)"},top:{borderColor:"hsla(0, 0%, 100%, 1.000)"}},secondary:{top:{borderColor:"hsla(0, 0%, 100%, 1.000)"},base:{borderColor:"hsla(202, 15.1%, 79.2%, 1.000)"}},primary:{top:{borderColor:"hsla(0, 0%, 100%, 1.000)"},base:{borderColor:"hsla(195, 89.4%, 81.6%, 1.000)"}},simple:{top:{borderColor:"hsla(0, 0%, 100%, 1.000)"},base:{backgroundColor:"hsla(0, 0%, 100%, 0.000)"}}}},icons:{mono:{backgroundColor:"hsla(0, 0%, 27.1%, 1.000)"},dimmed:{backgroundColor:"hsla(0, 0%, 57.6%, 1.000)"},subtle:{backgroundColor:"hsla(0, 0%, 82.7%, 1.000)"},inverse:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"},primary:{backgroundColor:"hsla(205, 100%, 64.3%, 1.000)"},danger:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 54%, 60.8%, 1.000) 0%, hsla(0, 71.4%, 67.1%, 1.000) 100%)"}},lines:{primary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(205deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(205deg, 45%, 90%, 90%);"},grabHandle:{fill:"hsla(205deg, 45%, 90%, 100%)",stroke:"hsla(205deg, 45%, 100%, 100%)"},grabHandleContrast:{stroke:"hsla(205deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(205deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(235deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(205deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(192deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(205deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(205deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(205deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(205deg, 100%, 15%, 0%)"}},secondary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(120deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(120deg, 45%, 90%, 90%);"},grabHandle:{fill:"hsla(120deg, 45%, 90%, 100%)",stroke:"hsla(120deg, 45%, 100%, 100%)"},grabHandleContrast:{stroke:"hsla(120deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(120deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(150deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(120deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(108deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(120deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(120deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(120deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(120deg, 100%, 15%, 0%)"}},danger:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(0, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(0, 45%, 90%, 90%);"},grabHandle:{fill:"hsla(0, 45%, 90%, 100%)",stroke:"hsla(0, 45%, 100%, 100%)"},grabHandleText:{fill:"hsla(0, 80%, 25%, 100%);"},grabHandleContrast:{stroke:"hsla(0, 80%, 45%, 100%)"},handleBase:{fill:"hsla(30deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(0, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(348deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(0deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(0deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(0, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(0, 100%, 15%, 0%);"}}}},animation:{easing:{primary:{inOut:"cubic-bezier(0.87, 0, 0.13, 1)",out:"cubic-bezier(0.16, 1, 0.3, 1)",in:"cubic-bezier(0.7, 0, 0.84, 0)"}},speed:{fast:"0.175s",normal:"0.35s",slow:"0.7s"}}};var IconSVGs={__proto__:null,BigWarning:function SvgBigWarning(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 16.5a.375.375 0 100 .75.375.375 0 000-.75h0m0-3V6"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M1.28 13.281a1.811 1.811 0 010-2.561l9.44-9.439a1.81 1.81 0 012.56 0l9.44 9.439a1.811 1.811 0 010 2.561l-9.44 9.439a1.812 1.812 0 01-2.56 0l-9.44-9.439z"})))},CloseCompact:function SvgCloseCompact(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M5 18.999l14-14m0 14l-14-14",fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"}))},Close:function SvgClose(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M.75 23.249l22.5-22.5m0 22.5L.75.749",fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"}))},Critical:function SvgCritical(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M10 15.625a.312.312 0 100 .625.312.312 0 000-.625m0-2.5v-6.25"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M11.35 1.467a1.505 1.505 0 00-2.7 0L.754 17.548a1.268 1.268 0 001.138 1.827h16.214a1.268 1.268 0 001.138-1.827L11.351 1.467z"})))},Detection:function SvgDetection(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 00.7 1.02h1.9v3a3 3 0 003 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 00.5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6",fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"}))},Down:function SvgDown(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{fill:"none",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,d:"M23.25 6.311L12.53 17.03a.751.751 0 01-1.06 0L.75 6.311",vectorEffect:"non-scaling-stroke"}))},Exclamation:function SvgExclamation(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 16.5a.375.375 0 100 .75.375.375 0 000-.75h0m0-3V5.25",fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"}))},Information:function SvgInformation(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M11.875 13.75h-.625c-.69 0-1.25-.56-1.25-1.25V9.375a.625.625 0 00-.625-.625H8.75m.938-3.125a.313.313 0 100 .625.313.313 0 000-.625"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:10,cy:10,r:9.375})))},Invalid:function SvgInvalid(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:11.998,cy:12,r:11.25}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M7.498 16.5l8.999-9m.001 9l-9.001-9"})))},Left:function SvgLeft(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{fill:"none",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,d:"M17.25 23.25L6.53 12.53a.751.751 0 010-1.06L17.25.75",vectorEffect:"non-scaling-stroke"}))},Location:function SvgLocation(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,opacity:.653,transform:"translate(.25 .25)",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:9.75,cy:6.094,r:2.438}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M9.75.61a5.484 5.484 0 015.484 5.484c0 2.641-4.17 8.553-5.237 10.024a.306.306 0 01-.494 0C8.435 14.647 4.266 8.735 4.266 6.094A5.483 5.483 0 019.75.609z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M14.608 14.45c2.22.44 3.673 1.173 3.673 2.003 0 1.346-3.818 2.438-8.531 2.438-4.713 0-8.531-1.092-8.531-2.438 0-.829 1.447-1.56 3.656-2.001"})))},Locked:function SvgLocked(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M10 9.75V6a5.25 5.25 0 0110.5 0v3.75"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15 15.75a.375.375 0 100 .75.375.375 0 000-.75"})))},Menu:function SvgMenu(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M2.25 18.003h19.5m-19.5-6h19.5m-19.5-6h19.5",fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"}))},Notifications:function SvgNotifications(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M10 21.75a2.086 2.086 0 004.005 0M12 3V.75M12 3a7.5 7.5 0 017.5 7.5c0 7.046 1.5 8.25 1.5 8.25H3s1.5-1.916 1.5-8.25A7.5 7.5 0 0112 3z",fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"}))},PasswordHide:function SvgPasswordHide(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M2.783 20l18.75-18M8.964 18.051A9.985 9.985 0 0012 18.5c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226A20.568 20.568 0 0019.75 7.88m-5.337-2.598A9.549 9.549 0 0012 5c-4.031-.067-8.2 2.752-10.821 5.635a1.663 1.663 0 000 2.226 20.8 20.8 0 002.6 2.4M8.25 11.75A3.749 3.749 0 0112 8m3.75 3.749A3.75 3.75 0 0112 15.5",fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"}))},PasswordShow:function SvgPasswordShow(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 5.251C7.969 5.183 3.8 8 1.179 10.885a1.663 1.663 0 000 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226C20.2 8 16.031 5.183 12 5.251z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15.75 12a3.75 3.75 0 11-7.5-.002 3.75 3.75 0 017.5.002z"})))},Pinned:function SvgPinned(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M4.949 8.783a1.5 1.5 0 00-.3 2.356l8.213 8.213a1.502 1.502 0 002.356-.3 7.521 7.521 0 00.81-5.54l6.529-4.155a1.501 1.501 0 00.256-2.326L16.97 1.188a1.498 1.498 0 00-2.326.255l-4.155 6.53a7.521 7.521 0 00-5.54.81zm3.804 6.463L.75 23.249",fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"}))},Question:function SvgQuestion(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M9 9a2.999 2.999 0 015.923-.673A3 3 0 0113 11.829a1.5 1.5 0 00-1 1.415v1.006m0 3a.375.375 0 100 .75.375.375 0 000-.75h0"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:12,r:11.25})))},Required:function SvgRequired(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{fill:"none",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,d:"M21 8.953h-3.8l1.9-3.295a1.5 1.5 0 00-.549-2.049l-2.6-1.5a1.5 1.5 0 00-2.049.549L12 5.953l-1.9-3.3a1.5 1.5 0 00-2.049-.549l-2.6 1.5A1.5 1.5 0 004.9 5.658l1.9 3.295H3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3.8l-1.9 3.294c-.2.345-.254.756-.15 1.14.102.386.355.714.701.913l2.6 1.5a1.5 1.5 0 002.049-.549l1.9-3.298 1.9 3.294a1.5 1.5 0 002.049.549l2.6-1.5a1.5 1.5 0 00.549-2.049l-1.9-3.294H21a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5z",vectorEffect:"non-scaling-stroke"}))},Right:function SvgRight(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{fill:"none",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,d:"M6.5.75l10.72 10.72a.751.751 0 010 1.06L6.5 23.25",vectorEffect:"non-scaling-stroke"}))},Search:function SvgSearch(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:9.823,cy:9.823,r:8.823}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M16.062 16.062l6.843 6.844"})))},Success:function SvgSuccess(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6 13.223L8.45 16.7a1.049 1.049 0 001.707.051L18 6.828"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:11.999,r:11.25})))},Temperature:function SvgTemperature(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,transform:"translate(.75 .75)",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M10.656 10.6V2.578a2.062 2.062 0 10-4.125 0V10.6a3.093 3.093 0 104.125 0z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:8.594,cy:12.891,r:1.031}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M8.594 2.578v9.281m4.125-9.281h1.031m-1.031 3.094h1.031m-1.031 3.094h1.031"})))},Unlocked:function SvgUnlocked(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M.75 9.75V6a5.25 5.25 0 1110.5 0v3.75"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15 15.75a.375.375 0 100 .75.375.375 0 000-.75"})))},Up:function SvgUp(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{fill:"none",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,d:"M.75 17.189L11.47 6.47a.751.751 0 011.06 0l10.72 10.719",vectorEffect:"non-scaling-stroke"}))},UserProfile:function SvgUserProfile(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:6,r:5.25}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M2.25 23.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75"})))},Warning:function SvgWarning(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 16.5a.375.375 0 100 .75.375.375 0 000-.75h0m0-3V5.25"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:12,r:11.25})))},Zone:function SvgZone(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,opacity:.653,vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M2.463.922A1.22 1.22 0 00.859 2.078v14.016c0 .482.284.918.724 1.114l4.311 1.828c.289.127.615.139.912.031l5.804-2.31c.281-.103.59-.098.87.014l3.99 1.568a1.217 1.217 0 001.671-1.131V3.594c0-.538-.353-1.013-.869-1.167L13.381.959a1.22 1.22 0 00-.67-.008L6.697 2.644a1.205 1.205 0 01-.706-.02L2.463.923z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M3.297 3.906v11.578l3.047 1.219 6.703-2.437 3.656 1.218V4.516l-3.656-1.219-6.703 1.828z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M3.297 8.277l3.047 1.218 3.047-1.218m2.437-4.648v3.172m-8.531 5.132l3.047 1.114 1.828-.505v3.497m3.656-1.331v-2.88l1.219-.609 3.656 1.219"})))}};let _t;const IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t||(_t=(t=>t)`
  [stroke]{
    stroke: ${0};
  }
`),({theme:theme,color:color})=>theme.colors.icons[color].backgroundColor),Icon=({icon:icon,size:_size=24,weight:_weight="regular",color:_color="mono"})=>{const iconWeight=dimensions.icons.weights[_weight],IconSVG=(key=icon,obj=>obj[key])(IconSVGs);var key;if(icon in IconSVGs&&IconSVG)return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper,{color:_color},IconSVG({size:_size,weight:iconWeight,color:"#666"}));{const capitalizedIconName=icon.charAt(0).toUpperCase()+icon.slice(1),tip=capitalizedIconName in IconSVGs?`Did you mean '${capitalizedIconName}'?`:"";return console.error(`Missing SVG: No SVG found for reference '${icon}'. ${tip}`),null}};let _t$1,_t2,_t3,_$1=t=>t;Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t$1||(_t$1=_$1`
  position:relative;
  display: flex;
  flex-direction: row;
  align-items:center;
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2||(_t2=_$1`
  display: flex;
  flex-direction: column;
`));const resetButtonStyles=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3||(_t3=_$1`
  background-color: transparent;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  user-select: none;
`));let _t$2,_t2$1,_t3$1,_t4,_t5,_t6,_t7,_t8,_$2=t=>t;const IconButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t$2||(_t$2=_$2`
  ${0};
  ${0}
  &:focus {
    outline: none;
  }

  &:hover:enabled {
    opacity: .8;
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`),resetButtonStyles,({selected:_selected=!1})=>_selected&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$1||(_t2$1=_$2`
    border-bottom: 5px solid hsl(207, 80%, 64%);
  `))),Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$1||(_t3$1=_$2`
  height: 50px;
  border-radius: 3px;
  text-shadow: 0 2px 4px hsla(120, 32%, 46%, 0.65);
  font-size: 14px;
  line-height: 1.07;
  letter-spacing: -0.2px;
  color: hsl(0, 0%, 100%);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* margin: 10px; */
  padding: 0 14px;
  font-family: ${0};


  ${0}
`),({theme:theme})=>theme.fontFamily.ui,({type:type})=>{switch(type){case"success":return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4||(_t4=_$2`
          background-color: hsl(136, 50%, 57%);
        `));case"error":return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5||(_t5=_$2`
          background-color: hsl(0, 79%, 70%);
        `));case"warning":return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6||(_t6=_$2`
          background-color: hsl(30, 91%, 61%);
        `));case"info":default:return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7||(_t7=_$2`
          background-color: hsl(205, 77%, 64%);
        `))}}),IconNames={error:"Critical",warning:"BigWarning",success:"Success",info:"Information"},MessageBox=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t8||(_t8=_$2`
  margin-left: 15px;
  flex: 1;
`)),AlertBar=({type:_type="info",message:message})=>{const[dismiss,setDismiss]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setDismiss(!1)},[message]),message&&!dismiss?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container,{type:_type},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:IconNames[_type],color:"inverse"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageBox,null,message),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconButton,{onClick:()=>setDismiss(!0)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"CloseCompact",color:"inverse"}))):null};let _t$3;const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t$3||(_t$3=(t=>t)`
  ${0};
  height: ${0};
  color: ${0};
  font-size: ${0};

  overflow: hidden;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 20px;
  outline: none;

  button + button {
    margin-left: 20px;
  }

  &:hover {
    background: ${0};
  }

  &:active {
    background: ${0};
  }

  &:disabled {
    background: ${0};
  }
`),props=>props.theme.colors.form.button[props.design].default,({size:_size="normal",theme:theme})=>theme.dimensions.form.button[_size],props=>props.theme.colors.form.button[props.design].default.textColor,({size:_size2="normal",theme:theme})=>theme.typography.form.button.generic[_size2].fontSize,props=>props.theme.colors.form.button[props.design].hover.backgroundColor,props=>props.theme.colors.form.button[props.design].active.backgroundColor,props=>props.theme.colors.form.button[props.design].disabled.backgroundColor),Button=({design:_design="primary",size:_size3="normal",children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton,Object.assign({type:"button"},{design:_design,size:_size3},props),children);let _t$4,_t2$2,_t3$2,_t4$1,_t5$1,_t6$1,_t7$1,_$4=t=>t;const TextContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$4||(_t$4=_$4`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 20px;
  ${0}

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$2||(_t2$2=_$4`
    transition: padding ${0} ${0};
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeInOut)),IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$2||(_t3$2=_$4`
  height: inherit;
  flex: 0 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${0}

  svg {
    display:block;
  }
`),({position:position})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$1||(_t4$1=_$4`
    order: ${0};
  `),position&&"left"===position?0:2)),InnerContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$1||(_t5$1=_$4`
  display: flex;
  height: inherit;


  ${0}

`),({position:position})=>position&&"left"===position?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$1||(_t6$1=_$4`
    margin-right: -20px;
  `)):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$1||(_t7$1=_$4`
    margin-left: -20px;
  `))),ButtonWithIcon=({design:design,size:size,onClick:onClick,disabled:disabled,position:position,icon:icon,children:children})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button,Object.assign({disabled:disabled},{design:design,size:size,onClick:onClick,disabled:disabled}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer,null,children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconContainer,Object.assign({},{design:design,position:position}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:icon,size:12}))));let _t$5,_t2$3,_t3$3,_t4$2,_$5=t=>t;const circumference=radius=>6.2832*radius,rotate=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_t2$3||(_t2$3=_$5`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`)),BaseCircle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t3$3||(_t3$3=_$5`
  stroke: ${0};
  fill: none;
`),({theme:theme,styling:styling})=>theme.colors.indicators.spinner[styling].base.borderColor),RotatingCircle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t4$2||(_t4$2=_$5`
  stroke: ${0};
  fill: none;
  stroke-dasharray: ${0};
  stroke-dashoffset: ${0};
  animation:
    ${0} 4s linear infinite,
    ${0} 1s linear infinite;
  stroke-linecap: round;
`),({theme:theme,styling:styling})=>theme.colors.indicators.spinner[styling].top.borderColor,({r:r})=>circumference(r),({r:r})=>6.2832*r/2,({r:r})=>(radius=>{const c=circumference(radius);return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_t$5||(_t$5=_$5`
    0% {
      stroke-dashoffset: -${0};
    }
    50% {
      stroke-dashoffset: -${0};
    }
    100% {
      stroke-dashoffset: -${0};
    }
  `),.85*c,.5*c,.85*c)})(r),rotate),sizeGuide={small:16,medium:24,large:36,xlarge:48},Spinner=({size:_size="medium",styling:_styling="primary"})=>{const sizeVal=sizeGuide[_size],strokeWidth=sizeVal/5.333,circleRadius=sizeVal/2-strokeWidth/2;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{viewBox:`-${sizeVal/2} -${sizeVal/2} ${sizeVal} ${sizeVal}`,width:sizeVal,height:sizeVal,xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseCircle,{cx:"0",cy:"0",r:circleRadius,strokeWidth:strokeWidth,styling:_styling}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RotatingCircle,{cx:"0",cy:"0",r:circleRadius,strokeWidth:strokeWidth,styling:_styling}))};let _t$6,_t2$4,_t3$4,_t4$3,_t5$2,_t6$2,_t7$2,_t8$1,_t9,_$6=t=>t;const TextContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$6||(_t$6=_$6`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  ${0}

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$4||(_t2$4=_$6`
    transition: padding ${0} ${0};
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeInOut)),LoadingContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$4||(_t3$4=_$6`
  height: inherit;
  flex: 0 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;

  ${0}

  svg {
    display:block;
  }
`),({theme:theme,position:position,design:design})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$3||(_t4$3=_$6`
    transition: flex ${0} ${0} ${0}, opacity ${0} ${0};
    order: ${0};
    background: ${0};
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,theme.animation.speed.slow,theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,position&&"left"===position?0:2,theme.colors.form.button[design].loadingSegment.backgroundColor)),InnerContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$2||(_t5$2=_$6`
  display: flex;
  height: inherit;


  ${0}

  ${0}
`),({position:position,loading:loading})=>position&&"left"===position?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$2||(_t6$2=_$6`
  margin-right: ${0};
  `),"true"===loading?"-20px":"0"):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$2||(_t7$2=_$6`
  margin-left: ${0};
  `),"true"===loading?"-20px":"0"),({loading:loading,theme:theme})=>"true"===loading?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$1||(_t8$1=_$6`

    transition: margin ${0} ${0};

    ${0}{
      padding: 0 20px;
    }
    ${0}{
      opacity: 1;
      transition: flex ${0} ${0}, opacity ${0} ${0} ${0};
    }
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,TextContainer$1,LoadingContainer,theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,theme.animation.speed.slow):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9||(_t9=_$6`
    ${0}{
      flex: 0 0 0px;
    }
  `),LoadingContainer)),ButtonWithLoading=({design:_design="primary",size:_size="normal",onClick:onClick,disabled:disabled,position:position,loading:loading,children:children,...rest})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button,Object.assign({disabled:disabled||loading},{design:_design,size:_size,onClick:onClick},rest),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerContainer$1,{loading:loading.toString()},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer$1,null,children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingContainer,Object.assign({},{design:_design,position:position}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner,{size:"small",styling:_design}))));let _t$7,_t2$5,_t3$5,_t4$4,_t5$3,_t6$3,_t7$3,_t8$2,_t9$1,_t10,_t11,_$7=t=>t;const ActionContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$7||(_t$7=_$7`
  position: absolute;
  right: 0;
  top: 0;
`)),InputActionButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button.attrs({type:"button"})(_t2$5||(_t2$5=_$7`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`)),FeedbackContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$5||(_t3$5=_$7`
  /* flex-grow: 0; */
  flex-shrink: 0;
  background-color: hsl(0, 0%, 99%);
  border: 1px solid rgb(217, 218, 217);
  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;
  /* padding: 0 10px 0 0; */

  display:flex;
  justify-content:left;
  align-items:center;

  svg {
    display: block;
    &, path, circle {
      stroke: white;
    }
  }
`)),FeedbackMessage=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$4||(_t4$4=_$7`
  flex: 0 1 400px;
  color: white;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 0 10px 0 0;
`)),FeedbackIcon=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$3||(_t5$3=_$7`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
`)),StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t6$3||(_t6$3=_$7`
  height: 100%;
  min-height: ${0};
  font-family: ${0};

  width: 100%;
  border-radius: 3px;
  border: 1px solid rgb(217, 218, 217);
  padding: 0 15px 0 15px;
  box-sizing: border-box;
  outline: none;

  color: hsl(207, 5%, 57%);
  font-size: 16px;
  font-weight: 400;

  &::placeholder {
    color: hsla(0, 0%, 46%, 0.5);
    font-style: italic;
  }

`),({theme:theme})=>theme.dimensions.form.input.height,({theme:theme})=>theme.fontFamily.data),InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t7$3||(_t7$3=_$7`

  flex: 1;
  position: relative;

  ${0}

`),({hasAction:hasAction})=>hasAction&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$2||(_t8$2=_$7`
    ${0}{
      padding-right: 100px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `),StyledInput)),Container$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t9$1||(_t9$1=_$7`

  --state-icon: ${0};
  --state-icon-color: ${0};

  --state-background-color: ${0};
  --state-border-color: ${0};
  --state-focused-border-color: ${0};
  --state-focused-box-shadow: ${0};

  display: flex;
  position: relative;

  ${0}{

    // icon-color: var(--state-icon-color);
    border-color: var(--state-border-color);

    &:focus {
      border-color: var(--state-focused-border-color);
    }

    ${0}
  }

  ${0} {
    background-image: var(--state-icon);
    border-color: var(--state-border-color);
    background-color: var(--state-background-color);

    ${0}
  }

  &:focus-within ${0} {
    box-shadow: var(--state-focused-box-shadow);
  }

`),props=>{var _props$theme$tmp;return(null===(_props$theme$tmp=props.theme.tmp)||void 0===_props$theme$tmp?void 0:_props$theme$tmp.input.states[props.fieldState].icon)||"TODO!"},props=>{var _props$theme$tmp2;return(null===(_props$theme$tmp2=props.theme.tmp)||void 0===_props$theme$tmp2?void 0:_props$theme$tmp2.input.states[props.fieldState].iconColor)||"#F0F"},({theme:theme,fieldState:fieldState})=>{var _theme$colors$form$fe;return(null===(_theme$colors$form$fe=theme.colors.form.feedback[fieldState])||void 0===_theme$colors$form$fe?void 0:_theme$colors$form$fe.backgroundColor)||theme.colors.form.feedback.basic.backgroundColor},({theme:theme,fieldState:fieldState})=>theme.colors.form.input[fieldState].normal.borderColor,({theme:theme,fieldState:fieldState})=>{var _theme$colors$form$in;return(null===(_theme$colors$form$in=theme.colors.form.input[fieldState].focused)||void 0===_theme$colors$form$in?void 0:_theme$colors$form$in.borderColor)||"none"},({theme:theme,fieldState:fieldState})=>{var _theme$colors$form$in2;return(null===(_theme$colors$form$in2=theme.colors.form.input[fieldState].focused)||void 0===_theme$colors$form$in2?void 0:_theme$colors$form$in2.boxShadow)||"none"},StyledInput,({fieldState:fieldState})=>-1===["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t10||(_t10=_$7`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `)),FeedbackContainer,({fieldState:fieldState})=>-1!==["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11||(_t11=_$7`
      // visibility: hidden;
      display:none;
    `)),InputContainer),Input=({type:_type="text",placeholder:_placeholder="",defaultValue:defaultValue,fieldState:_fieldState="default",feedbackMessage:feedbackMessage,actionCallback:actionCallback,actionIcon:actionIcon,postfix:postfix,...props})=>{const isActionButton=void 0!==actionCallback;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$1,{fieldState:_fieldState||"default"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer,{hasAction:isActionButton},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput,Object.assign({fieldState:_fieldState||"default",type:_type,placeholder:_placeholder,defaultValue:defaultValue},props)),isActionButton?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputActionButton,{onClick:actionCallback},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:actionIcon,color:"primary"}))):null),_fieldState?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeedbackContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeedbackIcon,null,(fieldState=>{switch(fieldState){case"default":case"disabled":break;case"required":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Required"});case"valid":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Success"});case"invalid":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Invalid"});case"processing":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner,{size:"medium",styling:"primary"})}})(_fieldState)),feedbackMessage?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeedbackMessage,null,feedbackMessage):null):null)};let _t$8,_t2$6,_$8=t=>t;const StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.label(_t$8||(_t$8=_$8`
  font-family: ${0};
  display: block;
  color: hsl(207, 5%, 57%);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`),({theme:theme})=>theme.fontFamily.ui),LabelText=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.span(_t2$6||(_t2$6=_$8`
  display: block;
  margin-bottom: 10px;
`)),Label=({htmlFor:htmlFor,labelText:labelText,children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel,Object.assign({htmlFor:htmlFor},props),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabelText,null,labelText),children);let _t$9,_t2$7,_t3$6,_t4$5,_t5$4,_t6$4,_t7$4,_$9=t=>t;const StyledInput$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t$9||(_t$9=_$9`
  height: 100%;
  min-height: 30px; // THEME
  font-family: ${0};

  width: 100%;
  border-radius: 3px;
  border: 1px solid rgb(217, 218, 217);
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  outline: none;

  color: hsl(207, 5%, 57%);
  font-size: 14px; // THEME
  font-weight: 400;

  &::placeholder {
    color: hsla(0, 0%, 46%, 0.5);
    font-style: italic;
  }

  ${0}

`),({theme:theme})=>theme.fontFamily.data,p=>p.padRight&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$7||(_t2$7=_$9`
    padding-right: ${0}px;
  `),p.padRight+17)),InputContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$6||(_t3$6=_$9`

  flex: 1;
  position: relative;

  ${0}

`),({hasAction:hasAction})=>hasAction&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$5||(_t4$5=_$9`
    ${0}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `),StyledInput$1)),UnitKey=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$4||(_t5$4=_$9`
  position: absolute;
  right: 10px;
  bottom: 0;
  top:0;
  font-family: ${0};
  font-size: 12px;
  color: #99a1a3;
  line-height:30px;
`),({theme:theme})=>theme.fontFamily.ui),Container$2=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$4||(_t6$4=_$9`

  --state-icon: ${0};
  --state-icon-color: ${0};

  --state-background-color: ${0};
  --state-border-color: ${0};
  --state-focused-border-color: ${0};
  --state-focused-box-shadow: ${0};

  display: flex;
  position: relative;

  ${0}{

    // icon-color: var(--state-icon-color);
    border-color: var(--state-border-color);

    &:focus {
      border-color: var(--state-focused-border-color);
    }

    ${0}
  }

  &:focus-within ${0} {
    box-shadow: var(--state-focused-box-shadow);
  }

`),props=>{var _props$theme$tmp;return(null===(_props$theme$tmp=props.theme.tmp)||void 0===_props$theme$tmp?void 0:_props$theme$tmp.input.states[props.fieldState].icon)||"TODO!"},props=>{var _props$theme$tmp2;return(null===(_props$theme$tmp2=props.theme.tmp)||void 0===_props$theme$tmp2?void 0:_props$theme$tmp2.input.states[props.fieldState].iconColor)||"#F0F"},({theme:theme,fieldState:fieldState})=>{var _theme$colors$form$fe;return(null===(_theme$colors$form$fe=theme.colors.form.feedback[fieldState])||void 0===_theme$colors$form$fe?void 0:_theme$colors$form$fe.backgroundColor)||theme.colors.form.feedback.basic.backgroundColor},({theme:theme,fieldState:fieldState})=>theme.colors.form.input[fieldState].normal.borderColor,({theme:theme,fieldState:fieldState})=>{var _theme$colors$form$in;return(null===(_theme$colors$form$in=theme.colors.form.input[fieldState].focused)||void 0===_theme$colors$form$in?void 0:_theme$colors$form$in.borderColor)||"none"},({theme:theme,fieldState:fieldState})=>{var _theme$colors$form$in2;return(null===(_theme$colors$form$in2=theme.colors.form.input[fieldState].focused)||void 0===_theme$colors$form$in2?void 0:_theme$colors$form$in2.boxShadow)||"none"},StyledInput$1,({fieldState:fieldState})=>-1===["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$4||(_t7$4=_$9`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `)),InputContainer$1),SmallInput=({unit:unit,label:label,name:name,type:_type="text",placeholder:_placeholder="",defaultValue:defaultValue,fieldState:_fieldState="default",className:className,...props})=>{const unitElement=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[unitElementWidth,setUnitElementWidth]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{unitElement&&unitElement.current&&setUnitElementWidth(unitElement.current.clientWidth||0)},[unitElement,setUnitElementWidth,unit]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$2,{className:className,fieldState:_fieldState||"default"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label,{labelText:label,htmlFor:name||""},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput$1,Object.assign({padRight:unitElementWidth,fieldState:_fieldState||"default",type:_type,placeholder:_placeholder,defaultValue:defaultValue},props)),unit?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnitKey,{ref:unitElement},unit):null)))};let _t$a;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button.attrs({type:"button"})(_t$a||(_t$a=(t=>t)`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
`));let _t$b,_t2$8,_t3$7,_t4$6,_t5$5,_t6$5,_t7$5,_t8$3,_t9$2,_t10$1,_t11$1,_$b=t=>t;var SwitchPosition;!function(SwitchPosition){SwitchPosition[SwitchPosition.Off=0]="Off",SwitchPosition[SwitchPosition.On=1]="On",SwitchPosition[SwitchPosition.Neutral=2]="Neutral",SwitchPosition[SwitchPosition.Locked=3]="Locked"}(SwitchPosition||(SwitchPosition={}));const RealInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t$b||(_t$b=_$b`
  display: none;
`)),SwitchOuter=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$8||(_t2$8=_$b`
  border: 1px solid #DDD;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
`)),getPositionKey=switchPos=>{switch(switchPos){case SwitchPosition.Off:return"off";case SwitchPosition.On:return"on";case SwitchPosition.Neutral:return"neutral";case SwitchPosition.Locked:return"locked";default:return"off"}},SwitchInner=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$7||(_t3$7=_$b`
  position: absolute;
  box-sizing: border-box;
`)),LabelText$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.span(_t4$6||(_t4$6=_$b`
  flex: 1;
  display: flex;

  font-family: ${0};
  display: block;
  color: hsl(207, 5%, 57%);
  font-size: 14px;
  font-weight: 500;
  line-height: ${0};
  margin-left: 10px;
`),({theme:theme})=>theme.fontFamily.ui,p=>p.theme.dimensions.form.switch.outer.height),IconWrapper$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$5||(_t5$5=_$b`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`)),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$5||(_t6$5=_$b`
  margin-top: 1px;
`)),Container$3=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.label(_t7$5||(_t7$5=_$b`
  user-select: none;
  display: flex;

  ${0}{
    ${0}

    ${0}

    ${0}
  }

  ${0}{
    ${0}
  }

  &:hover {
    ${0}{
      left: ${0};
    }
  }
`),SwitchInner,({theme:theme,position:position,themeState:themeState,activeTheming:activeTheming})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$3||(_t8$3=_$b`
      ${0};
      left: ${0};
      top: ${0};
      transition:
        left ${0} ${0},
        border ${0} ${0},
        width ${0} ${0};

      ${0}
    `),theme.dimensions.form.switch.inner,theme.dimensions.form.switch.positions[getPositionKey(position)],theme.dimensions.form.switch.positions.top,theme.animation.speed.normal,theme.animation.easing.primary.out,theme.animation.speed.normal,theme.animation.easing.primary.out,theme.animation.speed.normal,theme.animation.easing.primary.out,theme.colors.form.switch[activeTheming][themeState].inner),p=>"locked"===p.activeTheming&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$2||(_t9$2=_$b`
      width: calc(100% - ${0}px);
    `),2*parseInt(p.theme.dimensions.form.switch.positions.locked)),p=>p.loading&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t10$1||(_t10$1=_$b`
      background: transparent;
      top: 1px;
    `)),SwitchOuter,({theme:theme,activeTheming:activeTheming,themeState:themeState})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$1||(_t11$1=_$b`
      ${0};
      ${0}};
      flex: 0 0 ${0}};
    `),theme.colors.form.switch[activeTheming][themeState].outer,theme.dimensions.form.switch.outer,theme.dimensions.form.switch.outer.width),SwitchInner,p=>p.useIntent&&((left,checked)=>{let offset=checked?-2:2;return(parseInt(left)+offset).toString()+"px"})(p.theme.dimensions.form.switch.positions[getPositionKey(p.position)],p.checked)),Switch=({state:_state="default",leftTheme:_leftTheme="off",rightTheme:_rightTheme="on",labelText:labelText,onChange:onChange})=>{var _inputRef$current3;const initialPosition=SwitchPosition.Off,inputRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[position,setPosition]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialPosition),[activeTheming,setActiveTheming]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(_leftTheme),[switchState,setSwitchState]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)("default"),positionSwitch=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var _inputRef$current,_inputRef$current2;(null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current?void 0:_inputRef$current.checked)?(setPosition(SwitchPosition.On),setActiveTheming(_rightTheme)):(null===(_inputRef$current2=inputRef.current)||void 0===_inputRef$current2?void 0:_inputRef$current2.checked)||(setPosition(SwitchPosition.Off),setActiveTheming(_leftTheme))},[setPosition,setActiveTheming,_leftTheme,_rightTheme,inputRef]),updateThemeChoice=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{position===SwitchPosition.On?setActiveTheming(_rightTheme):position===SwitchPosition.Off&&setActiveTheming(_leftTheme)},[position,_rightTheme,_leftTheme]);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{updateThemeChoice()},[_leftTheme,_rightTheme,updateThemeChoice]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setSwitchState(stateCheck(_state))},[_state,setSwitchState]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{"locked"===_state?(setPosition(SwitchPosition.Locked),setActiveTheming("locked")):"failure"===_state?(setPosition(SwitchPosition.Neutral),setActiveTheming("failure")):positionSwitch()},[_state,setPosition,positionSwitch]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$3,{onChange:e=>{positionSwitch(),onChange&&onChange(e)},activeTheming:activeTheming,loading:"loading"===_state,useIntent:"default"===_state||"failure"===_state,themeState:switchState,position:position,checked:null===(_inputRef$current3=inputRef.current)||void 0===_inputRef$current3?void 0:_inputRef$current3.checked},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitchOuter,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitchInner,null,"failure"===_state?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Exclamation",color:"danger",size:18,weight:"regular"})):null,"locked"===_state?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Locked",color:"dimmed",size:10,weight:"heavy"})):null,"loading"===_state?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpinnerWrapper,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner,{size:"small",styling:"simple"})):null)),labelText?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabelText$1,null,labelText):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RealInput,{ref:inputRef,type:"checkbox",disabled:"default"!==_state&&"failure"!==_state}))},stateCheck=state=>{switch(state){case"locked":case"failure":return"default";default:return state}},PasswordField=({name:name,label:label,fieldState:fieldState,feedbackMessage:feedbackMessage,...props})=>{const[showValue,setShowValue]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[actionIcon,setActionIcon]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)("PasswordHide");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label,{htmlFor:name,labelText:label},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input,Object.assign({type:showValue?"text":"password",actionCallback:()=>{const newValue=!showValue;setShowValue(newValue),setActionIcon(newValue?"PasswordShow":"PasswordHide")},actionIcon:actionIcon},{name:name,fieldState:fieldState,feedbackMessage:feedbackMessage,...props})))},TextField=({name:name,label:label,fieldState:_fieldState="default",feedbackMessage:feedbackMessage,type:_type,...props})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label,{htmlFor:name,labelText:label},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input,Object.assign({type:"text"},{fieldState:_fieldState,feedbackMessage:feedbackMessage,...props})));let _t$c,_t2$9,_$c=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.form(_t$c||(_t$c=_$c`
  ${0}
`),({spacing:spacing})=>spacing&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$9||(_t2$9=_$c`
      & >  ${0} {
        margin-bottom: ${0};
      }
  `),StyledLabel,spacing));let _t$d,_t2$a,_t3$8,_t4$7,_t5$6,_t6$6,_t7$6,_t8$4,_t9$3,_t10$2,_t11$2,_t12,_t13,_t14,_t15,_t16,_t17,_$d=t=>t;const HandleTouchReactionKeyframes=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_t$d||(_t$d=_$d`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(3);
 }

 100% {
   transform: scale(1.75);
 }
`)),HandleMouseReactionKeyframes=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_t2$a||(_t2$a=_$d`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(0);
 }

 100% {
   transform: scale(0.5);
 }
`));styled_components__WEBPACK_IMPORTED_MODULE_1__.d.svg(_t3$8||(_t3$8=_$d`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: ${0};
  appearance: none;
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].handleBase.fill),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t4$7||(_t4$7=_$d`
  fill: none;
  stroke: ${0};
  mask: url(#${0});
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].handleRingLayer.stroke,props=>props.maskID),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$6||(_t5$6=_$d`
  opacity: 0.65;
  cursor: pointer;
  transform: scale(1);

  ${0}

  ${0}

`),props=>props.touchDragging&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$6||(_t6$6=_$d`
    animation: ${0} 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `),HandleTouchReactionKeyframes),props=>props.mouseDragging&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$6||(_t7$6=_$d`
    animation: ${0} 0.25s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `),HandleMouseReactionKeyframes)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t8$4||(_t8$4=_$d`
  mix-blend-mode: multiply;
  fill: ${0};
  stroke: none;
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].handleReactiveFill.fill),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t9$3||(_t9$3=_$d`
  fill: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].handleReactiveRing.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t10$2||(_t10$2=_$d`
  overflow: visible;
  mix-blend-mode: multiply;
  fill: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].handleContrastLayer.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t11$2||(_t11$2=_$d`
    mix-blend-mode: multiply;
    fill: url(#${0});
`),props=>props.fillID),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t12||(_t12=_$d`
  opacity: 0;
  pointer-events: none;
  ${0};

`),props=>props.showIndex&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t13||(_t13=_$d`
    opacity: 1;
  `))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.stop(_t14||(_t14=_$d`
  stop-color: ${0};
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].stopStart.stopColor),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.stop(_t15||(_t15=_$d`
  stop-color: ${0};
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].stopEnd.stopColor),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.text(_t16||(_t16=_$d`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  stroke: ${0};
  text-align: center;

  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;


`),({theme:theme,styling:styling})=>theme.colors.lines[styling].grabHandleText.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t17||(_t17=_$d`

`));let _t$e,_t2$b,_t3$9,_t4$8,_t5$7,_t6$7,_t7$7,_t8$5,_t9$4,_t10$3,_t11$3,_$e=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.line(_t$e||(_t$e=_$e`
  pointer-events: none;
  stroke: ${0};
  mix-blend-mode: multiply;
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].contrastLine.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.line(_t2$b||(_t2$b=_$e`
  pointer-events: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].highlightLine.stroke);const GrabHandle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t3$9||(_t3$9=_$e`
  fill: ${0};
  stroke: ${0};
  opacity: 1;
  transition: opacity 250ms ease;
  cursor: grab;

  ${0};
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].grabHandle.fill,({theme:theme,styling:styling})=>theme.colors.lines[styling].grabHandle.stroke,props=>props.hide&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$8||(_t4$8=_$e`
    pointer-events: none;
    opacity: 0;
  `))),GrabHandleContrast=(styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$7||(_t5$7=_$e`
  opacity: 0;
  pointer-events: none;
  ${0};

`),props=>props.showIndex&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$7||(_t6$7=_$e`
    opacity: 1;
  `))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.text(_t7$7||(_t7$7=_$e`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  fill: ${0};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].grabHandleText.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.text(_t8$5||(_t8$5=_$e`
  text-align: center;
  fill: ${0};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].label.fill),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(GrabHandle)(_t9$4||(_t9$4=_$e`
  fill: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.colors.lines[styling].grabHandleContrast.stroke));styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t10$3||(_t10$3=_$e`

  ${0}, ${0} {
    transition: r 250ms ease;
  }

  ${0};
`),GrabHandle,GrabHandleContrast,props=>props.showIndex&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$3||(_t11$3=_$e`
    ${0}, ${0} {
      pointer-events: none;
      r: ${0};
    }
  `),GrabHandle,GrabHandleContrast,1.75*props.originalRadius)),Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});let _t$f,_t2$c,_t3$a,_t4$9,_$f=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$f||(_t$f=_$f`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */

`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.svg(_t2$c||(_t2$c=_$f`
  touch-action: none;
  user-select: none;
  margin: 0;

  overflow: visible;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: background 250ms ease;
  background: hsla(0deg, 0%, 0%, 0%);

  ${0}

`),props=>props.transculent&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$a||(_t3$a=_$f`
    background: hsla(0deg, 0%, 0%, 35%);
  `))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.img(_t4$9||(_t4$9=_$f`
  object-fit: contain;
  width:  100%;
  height: 100%;
`));let _t$g;const Video=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.video(_t$g||(_t$g=(t=>t)`
  /* width: 800px; */
`));let _t$h,_t2$d,_t3$b,_t4$a,_t5$8,_$h=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$h||(_t$h=_$h`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(({id:_id="1",enabled:enabled,peerAddress:peerAddress,maxConnectionAttempts:_maxConnectionAttempts=30,rtcConfiguration:_rtcConfiguration={},setStatus:_setStatus=(()=>{}),setError:_setError=(()=>{}),autoPlay:_autoPlay=!0,muted:_muted=!0,...props})=>{const[connectionAttempts,setConnectionAttempts]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),videoRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),webSocket=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),peerConnection=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);function handleIncomingError(error){_setError(error),closeWebSocket()}const onServerMessage=({data:_data=""})=>{if("HELLO"===_data)console.debug("Received HELLO"),_setStatus("Registered with server, waiting for offer.");else if(_data.startsWith("ERROR"))console.error("Received "+_data),handleIncomingError(_data);else{let msg;try{msg=JSON.parse(_data)}catch(e){return void(e instanceof SyntaxError?handleIncomingError("Error parsing incoming JSON: "+_data):handleIncomingError("Unknown error parsing response: "+_data))}peerConnection.current||function createCall(msg){if(setConnectionAttempts(0),console.debug("Creating RTCPeerConnection"),!msg.sdp)return void console.debug("WARNING: First message wasn't an SDP message!?");const pc=new RTCPeerConnection(_rtcConfiguration);peerConnection.current=pc,pc.addEventListener("track",onRemoteTrack),pc.addEventListener("icecandidate",({candidate:_candidate=null})=>{_candidate?webSocket.current?webSocket.current.send(JSON.stringify({ice:_candidate})):console.debug("no WS found on peer connection 'icecandidate' event... how?"):console.debug("All local ICE Candidates sent.")}),_setStatus("RTCPeerConnection created, waiting for SDP")}(msg),null!=msg.sdp?(console.debug("Received Remote SDP:"+JSON.stringify(msg.sdp)),(async description=>{if(!peerConnection.current||!webSocket.current)return;try{"offer"===description.type&&"stable"!==peerConnection.current.signalingState?await Promise.all([peerConnection.current.setLocalDescription({type:"rollback"}),peerConnection.current.setRemoteDescription(description)]):(description.sdp&&(description.sdp=description.sdp.replace(/profile-level-id=(640028|64001f|64002a);/,"")),await peerConnection.current.setRemoteDescription(new RTCSessionDescription(description)),_setStatus("Remote Description set"))}catch(error){return console.error("Error:",error),void _setError("Error Setting remote description")}if("offer"!==description.type)return;_setStatus("Creating Answer");try{const answer=await peerConnection.current.createAnswer();console.debug("Got local description: "+JSON.stringify(answer)),await peerConnection.current.setLocalDescription(answer)}catch(error){return console.error("Error:",error.message),void _setError("Error Creating Answer")}const message={sdp:peerConnection.current.localDescription};_setStatus("Sending Local Description");try{await webSocket.current.send(JSON.stringify(message)),_setStatus("Connected")}catch(error){console.error(error.name+": "+error.message),_setError(error.message)}})(msg.sdp)):null!=msg.ice?(console.debug("Received Remote ICE:"+JSON.stringify(msg.ice)),function onIncomingICE(ice){if(!peerConnection.current)return void console.error("peerConnection.current not found onIncomingICE ");const candidate=new RTCIceCandidate(ice);peerConnection.current.addIceCandidate(candidate).catch(_setError)}(msg.ice)):handleIncomingError("Unknown incoming JSON: "+msg)}};function onServerClose(event){console.debug("serverClose"),webSocket.current&&(_setStatus("Disconnected from server"),closePeerConnection(),null!==event&&1e3!==event.code&&enabled&&window.setTimeout(connectToPeer,3e3))}function onServerError(event){console.debug(event),_setError("Unable to connect to server"),closeWebSocket()}function connectToPeer(){if(console.debug("connectToPeer",connectionAttempts),connectionAttempts>=_maxConnectionAttempts)return void _setError("Too many connection attempts, aborting. Refresh page to try again");_setError(null);const peerId=function getPeerId(id){return"WRP_"+id+"_"+Math.floor(8990*Math.random()+10).toString()}(_id);_setStatus("Connecting to server "+peerAddress);const ws=new WebSocket(peerAddress);webSocket.current=ws,ws.addEventListener("open",()=>{const interval=setInterval(()=>{try{ws.send("HELLO "+peerId),clearInterval(interval),_setStatus("Registering with server (sent HELLO) for peer id: "+peerId)}catch(error){console.debug(error)}},3e3)}),ws.addEventListener("error",onServerError),ws.addEventListener("message",onServerMessage),ws.addEventListener("close",onServerClose),setConnectionAttempts(connectionAttempts+1)}function onRemoteTrack(event){videoRef.current&&videoRef.current.srcObject!==event.streams[0]&&(console.debug("Incoming stream"),videoRef.current.srcObject=event.streams[0],_setStatus("Adding Track"))}const closeWebSocket=async()=>{console.debug("closeWebSocket"),await closePeerConnection(),webSocket.current&&(await webSocket.current.close(),webSocket.current=null)},closePeerConnection=async()=>{console.debug("closePeerConnection"),peerConnection.current&&(await peerConnection.current.close(),peerConnection.current=null)};return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(!0===enabled?connectToPeer():webSocket.current&&webSocket.current.close(1e3,"WebRTC Disabled"),()=>{console.debug("cleanup"),closeWebSocket()}),[enabled]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Video,Object.assign({},props,{autoPlay:_autoPlay,muted:_muted,ref:videoRef}))})(_t2$d||(_t2$d=_$h`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$b||(_t3$b=_$h`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.svg(_t4$a||(_t4$a=_$h`
  touch-action: none;
  user-select: none;
  margin: 0;

  overflow: visible;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: background 250ms ease;
  background: hsla(0deg, 0%, 0%, 0%);

  ${0}

`),props=>props.transcalent&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$8||(_t5$8=_$h`
    background: hsla(0deg, 0%, 0%, 35%);
  `)));let _t$i,_t2$e,_t3$c,_t4$b,_t5$9,_t6$8,_$i=t=>t;const Container$6=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$i||(_t$i=_$i`
  position: relative;
`)),IconContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$e||(_t2$e=_$i`
  position: absolute;
  left: -45px;
  bottom: 0;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
  }
`)),Title=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.h1(_t3$c||(_t3$c=_$i`
  ${0}

  font-size: 26px;
  font-weight: 500;
  color: #5b636a;
  margin: 0 0 20px;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$b||(_t4$b=_$i`
    font-family: ${0};
  `),theme.fontFamily.ui)),AreaTitle=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a)(_t5$9||(_t5$9=_$i`
  ${0}
  font-size: 12px;
  font-weight: 500;
  color: #7c8793;
  margin: 0;
  line-height: 12px;
  text-decoration: none;
  position: absolute;
  top: -17px;

  &:hover {
    text-decoration: underline;
  }

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$8||(_t6$8=_$i`
    font-family: ${0};
  `),theme.fontFamily.ui)),PageTitle=({title:title,icon:icon,areaTitle:areaTitle,areaHref:areaHref})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$6,null,areaTitle&&areaHref?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AreaTitle,{to:areaHref},areaTitle):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title,null,title),icon?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconContainer$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,Object.assign({size:24,color:"dimmed"},{icon:icon}))):null);let _t$j,_t2$f,_$j=t=>t;const Container$7=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.p(_t$j||(_t$j=_$j`
  ${0}
  font-size: 14px;
  font-style: italic;
  line-height: 25px;
  color: #8b9196;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$f||(_t2$f=_$j`
    font-family: ${0};
  `),theme.fontFamily.ui)),IntroductionText=({children:children})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$7,null,children);let _t$k;const Container$8=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$k||(_t$k=(t=>t)``)),PageHeader=({title:title,icon:icon,introductionText:introductionText,areaHref:areaHref,areaTitle:areaTitle})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$8,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle,Object.assign({},{title:title,icon:icon,areaHref:areaHref,areaTitle:areaTitle})),introductionText?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IntroductionText,null,introductionText):null);let _t$l,_t2$g,_t3$d,_t4$c,_$l=t=>t;const Container$9=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$l||(_t$l=_$l`
  position: relative;
  height: inherit;
  background: grey;
  border-radius: 3px;
  overflow: hidden;
  width: 40px;
  opacity: 0.65;

  ${0}

  &:hover {
    ${0}
  }

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$g||(_t2$g=_$l`
    transition:
      opacity ${0} ${0},
      transform ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.fast,theme.animation.easing.primary.easeOut),({theme:theme,hoverZoom:hoverZoom})=>theme&&hoverZoom&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$d||(_t3$d=_$l`
      transform: scale(1.5);
      opacity: 1;
      transition: transform ${0} ${0};
    `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut)),Image$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$c||(_t4$c=_$l`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${0});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: ${0};
`),p=>p.image,p=>p.image?"block":"none"),TableRowThumbnail=({hoverZoom:_hoverZoom=!0,image:image})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$9,Object.assign({},{hoverZoom:_hoverZoom}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image$1,Object.assign({},{image:image})));let _t$m;const Container$a=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$m||(_t$m=(t=>t)`
  height: inherit;
  width: 3px;
  border-radius: 3px;
  background: blue;
`)),TypeTableDeviceStatus=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$a,null,"Status");let _t$n,_t2$h,_t3$e,_t4$d,_t5$a,_t6$9,_t7$8,_t8$6,_$n=t=>t;const CellContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$n||(_t$n=_$n`
  display: table-cell;
  height: 35px;
  padding: 6px 0 8px;
  vertical-align: middle;

  font-family: ${0};

  &, a {
    ${0}

    ${0}
  }

  a:hover {
    text-decoration: underline;
  }

`),p=>p.theme.fontFamily.data,({theme:theme,cellStyle:cellStyle})=>cellStyle?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$h||(_t2$h=_$n`
    ${0};
    `),theme.typography.table.columns[cellStyle]):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$e||(_t3$e=_$n`
    ${0};
    `),theme.typography.table.columns.normalImportance),({alignment:alignment})=>alignment?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$d||(_t4$d=_$n`
    text-align: ${0};
    `),alignment):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$a||(_t5$a=_$n`
    text-align: left;
    `))),UnitText=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.span(_t6$9||(_t6$9=_$n`
  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$8||(_t7$8=_$n`
    ${0};
  `),theme.typography.table.columns.unit)),CopyToClipboard=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t8$6||(_t8$6=_$n`

  position: relative;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  outline: none;

  // display: flex;
  // justify-content: center;
  // align-items: center;

  svg {
    display: block;
  }
`)),TypeTableCell=({showUnit:_showUnit=!1,cellStyle:_cellStyle="normalImportance",alignment:_alignment="left",hasCopyButton:hasCopyButton,href:href,children:children})=>{const copyValue=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{console.log("Feature not implemented yet, sorry!")},[]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellContainer,Object.assign({},{cellStyle:_cellStyle,alignment:_alignment}),href?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:href},children):children,_showUnit?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnitText,null,"Mb"):null,hasCopyButton?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CopyToClipboard,{onClick:copyValue},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Invalid",size:16})):null)};let _t$o;const RowContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$o||(_t$o=(t=>t)`
  display: table-row;
`)),TypeTableRow=({selectable:_selectable=!1,hasStatus:hasStatus,hasThumbnail:hasThumbnail,hasTypeIcon:hasTypeIcon,rowData:rowData,columnConfig:columnConfig})=>{var _rowData$header,_rowData$header2;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowContainer,null,_selectable?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox"})):null,hasStatus?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableDeviceStatus,null)):null,hasThumbnail?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableRowThumbnail,{image:null===(_rowData$header=rowData.header)||void 0===_rowData$header?void 0:_rowData$header.image})):null,hasTypeIcon?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:(null===(_rowData$header2=rowData.header)||void 0===_rowData$header2?void 0:_rowData$header2.icon)||"",size:16})):null,rowData.columns.map((cell,key)=>{const{cellStyle:cellStyle,alignment:alignment,showUnit:showUnit,hasCopyButton:hasCopyButton}=columnConfig[key];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,Object.assign({key:key,href:cell.href},{cellStyle:cellStyle,alignment:alignment,showUnit:showUnit,hasCopyButton:hasCopyButton}),cell.text)}))};let _t$p,_t2$i,_t3$f,_t4$e,_t5$b,_t6$a,_t7$9,_$p=t=>t;const Container$b=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$p||(_t$p=_$p`

`)),TableContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$i||(_t2$i=_$p`
  display: table;
  width: 100%;
`)),HeaderRow=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$f||(_t3$f=_$p`
  display: table-row;
  height: 50px;
`)),HeaderItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$e||(_t4$e=_$p`
  display: table-cell;
  height: inherit;

  font-family: ${0};
  ${0}

  ${0}

  ${0}
`),p=>p.theme.fontFamily.ui,p=>p.theme.typography.table.header,p=>p.fixedWidth&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$b||(_t5$b=_$p`
    width: ${0}px;
  `),p.fixedWidth),({alignment:alignment})=>alignment?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$a||(_t6$a=_$p`
    text-align: ${0};
  `),alignment):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$9||(_t7$9=_$p`
    text-align: left;
  `))),TypeTable=({columnConfig:columnConfig,selectable:selectable,rows:rows,hasStatus:_hasStatus=!1,hasThumbnail:_hasThumbnail=!1,hasTypeIcon:_hasTypeIcon=!1})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$b,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderRow,null,selectable?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{fixedWidth:30},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox"})):null,_hasStatus?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{fixedWidth:40}):null,_hasThumbnail?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{fixedWidth:60}):null,_hasTypeIcon?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{fixedWidth:35}):null,columnConfig.map((column,key)=>{const{alignment:alignment,header:header}=column;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{key:key,alignment:alignment},header)})),rows.map((rowData,key)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableRow,Object.assign({key:key},{rowData:rowData,selectable:selectable,columnConfig:columnConfig,hasStatus:_hasStatus,hasThumbnail:_hasThumbnail,hasTypeIcon:_hasTypeIcon})))));Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({state:{},dispatch:()=>{},actions:{}});let _t$q,_t2$j,_t3$g,_t4$f,_t5$c,_$q=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$q||(_t$q=_$q`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$j||(_t2$j=_$q`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$g||(_t3$g=_$q`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$f||(_t4$f=_$q`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$c||(_t5$c=_$q`
`));let _t$r,_t2$k,_t3$h,_t4$g,_t5$d,_t6$b,_$r=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$r||(_t$r=_$r`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$k||(_t2$k=_$r`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$h||(_t3$h=_$r`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$g||(_t4$g=_$r`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$d||(_t5$d=_$r`
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t6$b||(_t6$b=_$r`

`));let _t$s,_t2$l,_t3$i,_t4$h,_t5$e,_$s=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$s||(_t$s=_$s`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$l||(_t2$l=_$s`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$i||(_t3$i=_$s`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$h||(_t4$h=_$s`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$e||(_t5$e=_$s`
`));let _t$t,_t2$m,_t3$j,_t4$i,_t5$f,_$t=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$t||(_t$t=_$t`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$m||(_t2$m=_$t`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$j||(_t3$j=_$t`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$i||(_t4$i=_$t`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$f||(_t5$f=_$t`
`));let _t$u,_t2$n,_t3$k,_t4$j,_t5$g,_$u=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$u||(_t$u=_$u`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$n||(_t2$n=_$u`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$k||(_t3$k=_$u`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$j||(_t4$j=_$u`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$g||(_t5$g=_$u`
`));let _t$v,_t2$o,_t3$l,_t4$k,_t5$h,_$v=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$v||(_t$v=_$v`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$o||(_t2$o=_$v`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$l||(_t3$l=_$v`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$k||(_t4$k=_$v`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$h||(_t5$h=_$v`
`));let _t$w;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$w||(_t$w=(t=>t)`
  user-select: none;
  display: flex;
  flex-direction: column;
`));let _t$x,_t2$p,_t3$m,_t4$l,_$x=t=>t;const Layout=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$x||(_t$x=_$x`
  display: flex;
  flex-direction: row;
  height: 100%;
`));styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$p||(_t2$p=_$x`
  padding: 70px 90px 0 90px;
  flex: 1;
  overflow: auto;
  ${0}
`),({maxWidth:maxWidth})=>maxWidth&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$m||(_t3$m=_$x`
      & > div {
        max-width: ${0};
      }
    `),maxWidth)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$l||(_t4$l=_$x`
  flex: 1;
  display: flex;
  flex-direction: column;
`));let _t$y,_t2$q,_t3$n,_t4$m,_t5$i,_t6$c,_t7$a,_t8$7,_t9$5,_t10$4,_t11$4,_t12$1,_t13$1,_t14$1,_t15$1,_$y=t=>t;const ContextTitle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$y||(_t$y=_$y`
  opacity: 0;

  ${0}

  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$q||(_t2$q=_$y`
    transition: opacity ${0} ${0};
  `),theme.animation.speed.fast,theme.animation.easing.primary.easeInOut),({compact:compact})=>compact&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$n||(_t3$n=_$y`
    font-size:14px;
  `))),ContextIcon=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$m||(_t4$m=_$y`
  ${0};

  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  margin: 0 20px;

  border-radius: 7px;
  display:flex;
  justify-content:center;
  align-items:center;

  svg {
    display: block;
  }

  ${0}

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$i||(_t5$i=_$y`
    ${0};
    transition: background ${0} ${0};
  `),theme.colors.global.mainMenu.iconBackground.default,theme.animation.speed.fast,theme.animation.easing.primary.easeInOut),({compact:compact})=>compact&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$c||(_t6$c=_$y`
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    margin: 0 28px 0 28px;

    svg {
      // width: 16px;
      // height: 16px;
    }
  `))),ContextIndicator=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t7$a||(_t7$a=_$y`
  width: 12px;
  height: 12px;
  flex: 0 0 14px;
  margin: 0 20px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
    height: 12px;
    width: 12px;
  }

  opacity: 0;

  ${0}

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$7||(_t8$7=_$y`
    transition: opacity 0 ${0};
  `),theme.animation.easing.primary.easeInOut)),ContextActionBaseCSS=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$5||(_t9$5=_$y`
  border: none;
  background: none;
  display: flex;
  justify-content:left;
  align-items:center;
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
  outline: none;
  padding: 0;
  text-decoration: none;
`)),ContextActionA=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.a(_t10$4||(_t10$4=_$y`
  ${0}
  ${0}

  ${0}

  &:hover ${0}{
    opacity: 1;
    ${0};
  }
`),ContextActionBaseCSS,({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$4||(_t11$4=_$y`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.menuItem.default),({menuOpen:menuOpen})=>menuOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t12$1||(_t12$1=_$y`
    ${0}{
      opacity: 1;
    }
  `),ContextTitle),ContextIcon,({theme:theme})=>theme.colors.global.mainMenu.iconBackground.hover),ContextActionButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t13$1||(_t13$1=_$y`
  ${0}

  ${0}

  ${0}

  &:hover ${0}{
    opacity: 1;
    ${0};
  }
`),ContextActionBaseCSS,({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t14$1||(_t14$1=_$y`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.menuItem.default),({menuOpen:menuOpen,theme:theme})=>menuOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t15$1||(_t15$1=_$y`
    ${0}{
      opacity: 1;
    }

    ${0}{
      opacity: 1;
      transition: opacity ${0} ${0} ${0};
    }
  `),ContextTitle,ContextIndicator,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,theme.animation.speed.fast),ContextIcon,({theme:theme})=>theme.colors.global.mainMenu.iconBackground.hover),ContextItem=({hasSubmenu:hasSubmenu,submenuOpen:submenuOpen,menuOpen:menuOpen,onClickCallback:onClickCallback,contextKey:contextKey,title:title,href:href,icon:icon,compact:compact,isActive:isActive})=>{const internal=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextIcon,Object.assign({},{compact:compact}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:icon,color:isActive?"inverse":"dimmed",size:20})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextTitle,Object.assign({},{compact:compact}),title),hasSubmenu?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextIndicator,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:submenuOpen?"Up":"Down"})):null);return hasSubmenu?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextActionButton,{menuOpen:menuOpen,onClick:()=>onClickCallback&&onClickCallback(contextKey)},internal):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextActionA,{menuOpen:menuOpen,href:href,onClick:()=>onClickCallback&&onClickCallback(contextKey)},internal)};ContextItem.defaultProps={hasSubmenu:!1,contextKey:-1};let _t$z,_t2$r,_t3$o,_t4$n,_t5$j,_t6$d,_t7$b,_t8$8,_t9$6,_t10$5,_t11$5,_t12$2,_$z=t=>t;const Submenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.ul(_t$z||(_t$z=_$z`
  display: block;
  position: relative;
  margin-left: 40px;
  padding: 0;

`)),SubmenuHeader=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$r||(_t2$r=_$z`
  display: block;
  height: 40px;
  margin-left: 40px;
`)),SubmenuItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.li(_t3$o||(_t3$o=_$z`
  display: block;
  height: 30px;
  padding-left: 40px;
  position: relative;


  &::after {
    display: block;
    content: '';
    background: #ccc;
    height: 1px;
    width: 14px;
    position: absolute;
    left: 0;
    top: 10px;
  }

`)),SubmenuItemTitle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.span(_t4$n||(_t4$n=_$z`
  display: block;
  ${0};

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$j||(_t5$j=_$z`
    font-family: ${0};
    ${0}
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.subheader)),SubmenuItemLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a)(_t6$d||(_t6$d=_$z`
  display: block;
  ${0};

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$b||(_t7$b=_$z`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.subMenuItem.default)),SubmenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t8$8||(_t8$8=_$z`
  ${0};

  position: relative;
  overflow: hidden;

  &::after {
    display: block;
    content: '';
    background: #ccc;
    width: 1px;
    position: absolute;
    left: 40px;
    top: 0;
    bottom: 35px;
  }

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$6||(_t9$6=_$z`
    transition:
      max-height ${0} ${0},
      opacity ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.fast,theme.animation.easing.primary.easeOut)),ContextContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t10$5||(_t10$5=_$z`
  min-height: 70px;
  width: inherit;

  ${0}{
    max-height: 0;
    opacity: 0;
  }
  ${0};

  ${0};

`),SubmenuContainer,({open:open,maxHeight:maxHeight,theme:theme})=>open&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$5||(_t11$5=_$z`
    ${0}{
      transition:
        max-height ${0} ${0},
        opacity ${0} ${0};
      max-height: ${0}px !important;
      opacity: 1;
    }
  `),SubmenuContainer,theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.fast,theme.animation.easing.primary.easeOut,maxHeight),({loading:loading})=>"true"===loading&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t12$2||(_t12$2=_$z`
    ${0}{
      max-height: none !important;
      opacity: 1;
    }
  `),SubmenuContainer)),NavigationItem=({item:item,menuOpen:menuOpen,submenuOpen:submenuOpen,contextKey:contextKey,loading:loading,onClickCallback:onClickCallback,readyCallback:readyCallback})=>{const{icon:icon,title:title,href:href,submenu:submenu}=item,refSubmenu=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[submenuHeight,setSubmenuHeight]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),submenus=generateSubmenus(submenu)||[],hasSubmenu=submenus.length>0;return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{refSubmenu&&refSubmenu.current&&setSubmenuHeight(refSubmenu.current.clientHeight),readyCallback&&readyCallback(contextKey)},[refSubmenu,setSubmenuHeight,readyCallback,contextKey]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextContainer,{open:submenuOpen,loading:loading?"true":"false",maxHeight:submenuHeight},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextItem,Object.assign({},{title:title,href:href,icon:icon,hasSubmenu:hasSubmenu,submenuOpen:submenuOpen,menuOpen:menuOpen,onClickCallback:onClickCallback,contextKey:contextKey})),hasSubmenu?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuContainer,{ref:refSubmenu},submenus):null)},generateSubmenus=submenu=>{if(!submenu)return;let grouping=[],output=[];return grouping.push([]),submenu.forEach((item,key)=>{const{title:title,href:href}=item;href?grouping[grouping.length-1].push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuItem,{key:key},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuItemLink,{to:href},title))):(grouping[grouping.length-1].length>1&&grouping.push([]),grouping[grouping.length-1].push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuHeader,{key:key},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuItemTitle,null,title))))}),grouping.forEach((group,key)=>{output.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Submenu,{key:key},group))}),output};function SvgLogoMark(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:35,height:35},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs",null,Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient",{id:"LogoMark_svg__a",x1:"36.708%",x2:"69.959%",y1:"2.579%",y2:"98.009%"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop",{offset:"0%",stopColor:"#7DB8DB"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop",{offset:"100%",stopColor:"#5CA0D1"}))),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:35,height:35,fill:"url(#LogoMark_svg__a)",rx:5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M14.42 25.12c4.4 0 6.42-3.06 6.42-7.02v-7.3h-3.9v7.3c0 1.84-.68 3.56-2.52 3.56-1.8 0-2.5-1.68-2.5-3.56v-7.3h-3.9v7.3c0 3.76 1.86 7.02 6.4 7.02zM26.98 25V10.8h-3.9V25h3.9z"})))}function SvgLogoText(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:71,height:30},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6.088 12.112c2.336 0 4.128-.976 4.128-3.168 0-2.048-1.472-2.72-3.84-3.248-2.048-.464-2.992-.784-2.992-2 0-1.152.8-1.856 2.56-1.856 1.36 0 2.56.592 3.088 1.184l.672-1.168C8.744 1.072 7.496.56 5.976.56c-2.352 0-4.08 1.184-4.08 3.36 0 1.808 1.2 2.432 3.504 2.992 2.112.512 3.28.896 3.28 2.176 0 1.136-.944 1.728-2.56 1.728-1.728 0-3.28-.8-3.968-1.52l-.688 1.216c1.28 1.04 2.88 1.6 4.624 1.6zm11.941-.016c1.76 0 3.792-.944 4.512-2.64l-1.2-.656c-.656 1.408-2.064 2-3.248 2-2.256 0-3.936-2.128-3.936-4.496 0-2.144 1.36-4.432 3.888-4.432 1.152 0 2.48.48 3.152 1.92l1.136-.736C21.63 1.6 20.125.576 18.11.576c-3.424 0-5.408 2.912-5.408 5.664 0 2.88 2.208 5.856 5.328 5.856zm12.134-.016c3.072 0 5.36-2.72 5.36-5.744 0-2.848-2.144-5.776-5.328-5.776-3.072 0-5.376 2.736-5.376 5.76 0 2.912 2.16 5.76 5.344 5.76zm.016-1.296c-2.352 0-3.904-2.144-3.904-4.464 0-2.208 1.488-4.448 3.904-4.448 2.304 0 3.888 2.128 3.888 4.448 0 2.192-1.472 4.464-3.888 4.464zM40.296 12V7.92h3.008L45.896 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376C47.16 2.48 45.72.64 43.72.64h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM58.413 12v-1.28h-6.272V6.8h5.328V5.6h-5.328V1.92h6.128V.64h-7.568V12h7.712zm4.742 0V7.92h3.008L68.755 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376 0-1.792-1.44-3.632-3.44-3.632h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM4.78 27.05c2.18 0 2.99-1.66 2.99-3.57V19.9h-.7v3.58c0 1.45-.5 2.94-2.3 2.94-1.76 0-2.29-1.45-2.29-2.94V19.9h-.69v3.58c0 1.81.74 3.57 2.99 3.57zm6.193-.05v-7.1h-.7V27h.7zm6.697 0v-2.18L19 23.44 21.71 27h.79l-3.05-3.98 2.9-3.12h-.77l-3.91 4.13v-4.12h-.7V27h.7zm7.263 0v-7.1h-.7V27h.7zm5.124 0v-6.48h2.53v-.62h-5.76v.62h2.53V27h.7z",fill:"#93A5B2"}))}let _t$A,_t2$s,_t3$p,_t4$o,_t5$k,_t6$e,_t7$c,_t8$9,_t9$7,_t10$6,_t11$6,_t12$3,_$A=t=>t;const Logo=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a)(_t$A||(_t$A=_$A`
  height: 50px;
  margin: 0 20px 40px 15px;
  display: flex;
`)),LogoMark=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$s||(_t2$s=_$A`
  height: 50px;
  flex: 0 0 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

`)),LogoType=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$p||(_t3$p=_$A`
  opacity: 0;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`)),SVGObject=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.object(_t4$o||(_t4$o=_$A``)),SVGObjectText=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.object(_t5$k||(_t5$k=_$A`
  max-width: 180px;
`)),NavigationContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$e||(_t6$e=_$A``)),MenuFooter=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t7$c||(_t7$c=_$A`
  ${0};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$9||(_t8$9=_$A`
    ${0}
  `),theme.colors.global.mainMenu.footerBackground)),FooterItemContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t9$7||(_t9$7=_$A`
  min-height: 70px;
`)),Container$j=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t10$6||(_t10$6=_$A`

  ${0}

  box-sizing: border-box;
  height: 100%;
  padding: 20px 0 0 0;
  overflow: hidden;
`),({theme:theme,open:open})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$6||(_t11$6=_$A`
    ${0}
    border-right: 1px solid ${0};
    transition: flex-basis ${0} ${0};
    flex-basis: ${0};

    ${0}{
      transition: opacity ${0} ${0};
      opacity: ${0};
    }
  `),theme.colors.global.mainMenu.background,theme.colors.global.mainMenu.lines.backgroundColor,theme.animation.speed.normal,theme.animation.easing.primary.easeOut,open?theme.dimensions.global.mainMenu.width.open:theme.dimensions.global.mainMenu.width.closed,LogoType,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,open?1:0)),ContainerInner=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t12$3||(_t12$3=_$A`
  width: ${0};
  display: flex;
  flex-direction: column;
  height: 100%;
`),({theme:theme})=>theme.dimensions.global.mainMenu.width.open),MainMenu=({content:content,home:_home="/",logoMark:logoMark,logoText:logoText})=>{const[isMenuOpen,setMenuOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[isMenuPinned,setMenuPinned]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[,setActiveContext]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),[focusedContext,setFocusedContext]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[loading,setLoading]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);let checkedInItems=0;Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setActiveContext(0)},[setActiveContext]);const autoMenuOpen=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{"touch"!==e.pointerType&&setMenuOpen(!0)},[setMenuOpen]),autoMenuClose=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{isMenuPinned||setMenuOpen(!1)},[setMenuOpen,isMenuPinned]),toggleMenuPin=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{"touch"!==e.pointerType&&(isMenuPinned&&setMenuOpen(!isMenuOpen),setMenuPinned(!isMenuPinned))},[isMenuPinned,setMenuPinned,isMenuOpen,setMenuOpen]),setFocusedContextCb=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(contextKey=>{setFocusedContext(focusedContext!==contextKey?contextKey:-1)},[setFocusedContext,focusedContext]),readyCallback=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{checkedInItems++,checkedInItems===content.items.length&&setLoading(!1)},[checkedInItems,content]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$j,{open:isMenuOpen,onPointerEnter:autoMenuOpen,onTouchStart:()=>console.log("touch"),onMouseLeave:autoMenuClose},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerInner,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo,{to:_home},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoMark,null,logoMark?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVGObject,{type:"image/svg+xml",data:logoMark}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgLogoMark,null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoType,null,logoText?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVGObjectText,{type:"image/svg+xml",data:logoText}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgLogoText,null))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationContainer,null,content.items.map((item,key)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationItem,Object.assign({key:key,contextKey:key,menuOpen:isMenuOpen,submenuOpen:key===focusedContext&&isMenuOpen,onClickCallback:setFocusedContextCb},{item:item,loading:loading,focusedContext:focusedContext,readyCallback:readyCallback})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuFooter,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItemContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextItem,{icon:isMenuOpen&&isMenuPinned?"Left":"Menu",title:isMenuPinned?"Keep Open":"Auto-Hide",compact:!0,onClickCallback:toggleMenuPin,menuOpen:isMenuOpen})))))};let _t$B,_t2$t,_t3$q,_t4$p,_t5$l,_t6$f,_t7$d,_t8$a,_t9$8,_t10$7,_t11$7,_t12$4,_t13$2,_t14$2,_t15$2,_t16$1,_t17$1,_t18,_$B=t=>t;const Container$k=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$B||(_t$B=_$B`
  height: 65px;
  width: 100%;
  border-bottom: hsla(0, 0%, 84%, 50%) 1px solid;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 7px 10px 0 hsla(205, 16%, 77%, 0.1);
`)),SearchBar=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$t||(_t2$t=_$B`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;

`)),IconWrapper$2=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$q||(_t3$q=_$B`
  flex: 0 35px;
  width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

`)),SearchInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t4$p||(_t4$p=_$B`
  font-family: ${0};
  flex: 1;
  height: 35px;
  line-height: 35px;
  border: none;
  outline: none;
  font-size: 14px;

  &::placeholder {
    font-style: italic;
    color: hsla(0,0%,57.6%,1.000);
  }
`),({theme:theme})=>theme.fontFamily.data),ButtonArea=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$l||(_t5$l=_$B`
  height: inherit;
  padding-right: 10px;
`)),DrawerToggle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button.attrs({type:"button"})(_t6$f||(_t6$f=_$B`
  width: 60px;
  margin: 0 5px;
  height: inherit;
  background: none;
  border: none;
  border-bottom: 5px solid hsla(0, 0%, 84%, 50%);
  outline: none;
  cursor: pointer;

  ${0};

  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$d||(_t7$d=_$B`
    transition: opacity ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeInOut),({isActive:isActive})=>isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$a||(_t8$a=_$B`
    border-bottom-color: hsla(210, 91.4%, 77.3%, 1.000);
  `))),Drawer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t9$8||(_t9$8=_$B`

  font-family: ${0};

  position: fixed;
  right: -10px;
  top: 74px;
  bottom: 0;
  background: white;
  border-left: hsla(0, 0%, 84%, 50%) 1px solid;
  width: 200px;
  opacity: 0;
  visibility: hidden;
  z-index: 100;

  ${0};


  ${0}
`),({theme:theme})=>theme.fontFamily.ui,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t10$7||(_t10$7=_$B`
    transition:
      opacity ${0} ${0},
      right ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut),({isOpen:isOpen})=>isOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$7||(_t11$7=_$B`
    right: 0;
    opacity: 1;
    visibility: visible;
  `))),DrawerHeader=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.h2(_t12$4||(_t12$4=_$B`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: hsla(0, 0%, 34%, 75%);
  padding: 0;
  margin: 0 0 5px;
`)),CurrentUser=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t13$2||(_t13$2=_$B`
  font-size: 12px;
  font-weight: 500;
  color: hsla(0, 0%, 34%, 75%);
  padding: 20px 20px 15px;
  word-break: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: hsla(0, 0%, 84%, 50%) 1px solid;

`)),UserMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t14$2||(_t14$2=_$B`
  padding: 20px 20px 0;
  border-bottom: hsla(0, 0%, 84%, 50%) 1px solid;

`)),Logout=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t15$2||(_t15$2=_$B`
  padding: 0 20px;
`)),LinkMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.ul(_t16$1||(_t16$1=_$B`
  padding: 0;
  margin: 22px 0 0 0;
  list-style: none;
`)),LinkMenuItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.li(_t17$1||(_t17$1=_$B`
  padding: 0;
  margin: 0 0 21px;

`)),LinkMenuItemA=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.a(_t18||(_t18=_$B`
  font-size: 16px;
  font-weight: 400;
  color: hsl(0, 0%, 34%);
  text-decoration: none;
`)),TopBar=({useNotifications:_useNotifications=!1,logoutLink:_logoutLink="/logout",useSearch:_useSearch=!1,searchPlaceholder:_searchPlaceholder="Search for devices, analysis tasks, etc.",userSubmenu:_userSubmenu=[],loggedInUser:loggedInUser,onLogout:_onLogout=(()=>{})})=>{const[isUserMenuOpen,setUserMenuOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isNotificationsOpen,setNotificationsOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),logoutHandler=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async e=>{e.preventDefault(),await _onLogout(),window.location.assign(_logoutLink)},[_logoutLink,_onLogout]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$k,null,_useSearch?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchBar,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper$2,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Search",size:18,color:"dimmed"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInput,{placeholder:_searchPlaceholder})):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonArea,null,_useNotifications?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerToggle,{isActive:isNotificationsOpen,onClick:()=>{setNotificationsOpen(!isNotificationsOpen),setUserMenuOpen(!1)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Notifications",size:18,color:"dimmed"})):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerToggle,{isActive:isUserMenuOpen,onClick:()=>{setUserMenuOpen(!isUserMenuOpen),setNotificationsOpen(!1)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"UserProfile",size:18,color:"dimmed"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Drawer,{isOpen:isUserMenuOpen},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentUser,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerHeader,null,"Current User"),loggedInUser),_userSubmenu.length>0?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserMenu,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerHeader,null,"Account Options"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenu,null,_userSubmenu.map(({text:text,href:href},index)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenuItem,{key:index},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenuItemA,{href:href},text))))):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logout,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenu,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenuItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenuItemA,{onClick:logoutHandler,href:_logoutLink},"Logout"))))),_useNotifications?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Drawer,{isOpen:isNotificationsOpen},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentUser,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"Feature Pending Development."))):null)};let _t$C,_t2$u,_t3$r,_t4$q,_t5$m,_t6$g,_t7$e,_t8$b,_t9$9,_$C=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$C||(_t$C=_$C`
  width: 286px;
  border-right: 1px solid hsla(0, 0%, 84%, 50%);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$u||(_t2$u=_$C`
  height: 84px;
  color: hsl(205, 7%, 35%);
  border-bottom: 1px solid hsla(0, 0%, 84%, 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 15px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$r||(_t3$r=_$C`
  height: 31px;
  font-family: Monorale;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: 4.5px;
  text-align: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$q||(_t4$q=_$C`
  height: 19px;
  font-family: Monorale;
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 14.11px;
  text-align: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$m||(_t5$m=_$C`
  position: relative;
  border-bottom: 1px solid hsla(0, 0%, 84%, 50%);
  padding: 22px 20px 21px 20px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$g||(_t6$g=_$C`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
  margin-bottom: 18px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t7$e||(_t7$e=_$C`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a)(_t8$b||(_t8$b=_$C`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a)(_t9$9||(_t9$9=_$C`
  position: absolute;
  right: 30px;
  top: 15px;
  /* width: 80px; */
  /* height: 30px; */
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: hsl(0, 0%, 55%);
  border-radius: 3px;
  background-color: hsl(206, 70%, 96%);
  text-decoration: none;
  padding: 7px 20px;
`))},403:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_MainMenu",(function(){return _MainMenu}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(432),_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2__),_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(433),_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2);__webpack_exports__.default={title:"Global",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.i,decorators:[]};var _MainMenu=function _MainMenu(){var logoMark=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Logo Mark SVG",_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2___default.a),logoText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Logo Text SVG",_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3___default.a),menuHomeLink=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Home Link","#"),menuConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("Menu Config",{items:[{icon:"Invalid",title:"Basic Item",href:"#"},{icon:"PasswordShow",title:"With Children",href:"#",submenu:[{title:"Child One",href:"#"},{title:"Child Two",href:"#"},{title:"Child Three",href:"#"}]},{icon:"Success",title:"Grouped Children",href:"#",submenu:[{title:"Subheader"},{title:"Nested Child One",href:"#"},{title:"Nested Child Two",href:"#"},{title:"Nested Child Three",href:"#"},{title:"Subheader Two"},{title:"Nested Child Four",href:"#"},{title:"Nested Child Five",href:"#"}]}]});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.h,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.i,Object.assign({content:menuConfig,home:menuHomeLink},{logoMark:logoMark,logoText:logoText})))}},404:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TopBar",(function(){return _TopBar}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)([""]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Global",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.r,decorators:[]};var _TopBar=function _TopBar(){var loggedInUser=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Logged In User","full.name@example.com"),userSubmenu=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Submenu",[{text:"Accounts",href:"#"},{text:"Billing",href:"#"},{text:"Payments",href:"#"}]),useSearch=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Use Search",!0),useNotifications=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Use Notifications",!0),logoutLink=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Logout Url","#"),searchPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Search Placeholder","Search area names, etc.");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.r,{loggedInUser:loggedInUser,userSubmenu:userSubmenu,useSearch:useSearch,useNotifications:useNotifications,logoutLink:logoutLink,searchPlaceholder:searchPlaceholder}))}},410:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Thin.8a6b4530.ttf"},411:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Light.0f73589a.ttf"},412:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Regular.c5eb5440.ttf"},413:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Bold.2d15decc.ttf"},414:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Thin.ad1820a1.woff"},415:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ThinItalic.70996eb1.woff"},416:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraLight.70e5cc38.woff"},417:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraLightItalic.311e1eef.woff"},418:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Light.86013ad2.woff"},419:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-LightItalic.71ba3bad.woff"},420:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Regular.fbd50651.woff"},421:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Italic.fe48f5fa.woff"},422:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Medium.91605ea0.woff"},423:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-MediumItalic.62d7429d.woff"},424:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-SemiBold.a914a148.woff"},425:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-SemiBoldItalic.62a3bd14.woff"},426:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Bold.62804d53.woff"},427:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-BoldItalic.14f46724.woff"},428:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraBold.33432f37.woff"},429:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraBoldItalic.e652eed8.woff"},430:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Black.d079d5df.woff"},431:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-BlackItalic.fab097e0.woff"},432:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo-mark.75308d30.svg"},433:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo-text.0ffd5079.svg"},434:function(module,exports,__webpack_require__){__webpack_require__(435),__webpack_require__(784),__webpack_require__(785),__webpack_require__(975),__webpack_require__(987),__webpack_require__(990),__webpack_require__(998),__webpack_require__(1012),module.exports=__webpack_require__(1024)},568:function(module,exports){},785:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(337)}},[[434,1,2]]]);
//# sourceMappingURL=main.09eea226f98d427b45e2.bundle.js.map