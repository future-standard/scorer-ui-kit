(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1025:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(61),_clientLogger=__webpack_require__(49),_configFilename=__webpack_require__(1058);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1037:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(348).configure)([__webpack_require__(1038),__webpack_require__(1039)],module,!1)}).call(this,__webpack_require__(97)(module))},1038:function(module,exports,__webpack_require__){var map={"./MainMenu.stories.tsx":414,"./TopBar.stories.tsx":415};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1038},1039:function(module,exports,__webpack_require__){var map={"./Alerts/AlertBar.stories.tsx":1040,"./Form/Button.stories.tsx":1041,"./Form/ButtonWithIcons.stories.tsx":1042,"./Form/ButtonWithLoading.stories.tsx":1043,"./Form/Checkbox.stories.tsx":1044,"./Form/Input.stories.tsx":1045,"./Form/PasswordInput.stories.tsx":1046,"./Form/SmallInput.stories.tsx":1047,"./Form/Switch.stories.tsx":1048,"./Global/MainMenu.stories.tsx":414,"./Global/TopBar.stories.tsx":415,"./In Development/DatePicker.stories.tsx":1049,"./Indicators/Spinner.stories.tsx":1050,"./Misc/Icons.stories.tsx":1051,"./Pages/IntroductionText.stories.tsx":1052,"./Pages/PageHeader.stories.tsx":1053,"./Pages/PageTitle.stories.tsx":1054,"./Tables/TypeTable.stories.tsx":1055,"./Tables/atoms/TableRowThumbnail.stories.tsx":1056};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1039},1040:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_AlertBar",(function(){return _AlertBar}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Alerts/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.a,decorators:[]};var _AlertBar=()=>{var message=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Message","Look Out!"),type=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"error");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.a,{message:message,type:type}))}},1041:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"StandardButton",(function(){return StandardButton}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"Form/Buttons",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.b,decorators:[]};var StandardButton=()=>{var buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Button Text","Example Title"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Small:"small",Normal:"normal",Large:"large"},"normal"),buttonDisabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),buttonOnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("button-click");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.b,{design:buttonDesign,size:buttonSize,onClick:buttonOnClick,disabled:buttonDisabled},buttonText)}},1042:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_WithIcon",(function(){return _WithIcon}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"Form/Buttons",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.c,decorators:[]};var _WithIcon=()=>{var iconList=generateIconList(),buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Button Text","Example Title"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Small:"small",Normal:"normal",Large:"large"},"normal"),buttonDisabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),buttonIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Icon",iconList,Object.keys(iconList)[0]),buttonIconPosition=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Icon Position",{Left:"left",Right:"right"},"right"),buttonOnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("button-click");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.c,{design:buttonDesign,size:buttonSize,onClick:buttonOnClick,icon:buttonIcon,position:buttonIconPosition,disabled:buttonDisabled},buttonText)},generateIconList=()=>{var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.i)iconList[_key]=_key;return iconList}},1043:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_WithLoading",(function(){return _WithLoading}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"Form/Buttons",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.d,decorators:[]};var _WithLoading=()=>{var buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Button Text","Example Title"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Small:"small",Normal:"normal",Large:"large"},"normal"),buttonDisabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),buttonLoading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Loading",!0),buttonLoadingPosition=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Loading Position",{Left:"left",Right:"right"},"right"),buttonOnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("button-click");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.d,{design:buttonDesign,size:buttonSize,onClick:buttonOnClick,loading:buttonLoading,position:buttonLoadingPosition,disabled:buttonDisabled},buttonText)}},1044:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Checkbox",(function(){return _Checkbox}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"Form/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.e,decorators:[]};var _Checkbox=()=>{var disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Checked",!1),onChange=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("value-changed");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.e,{checked:checked,disabled:disabled,onChange:onChange})}},1045:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TextInput",(function(){return TextInput}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.t,decorators:[]};var TextInput=()=>{var inputName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Name","my_input"),inputLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","My Input"),inputFeedback=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Feedback","This is a feedback message."),inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),inputState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.t,{name:inputName,label:inputLabel,placeholder:inputPlaceholder,fieldState:inputState,feedbackMessage:inputFeedback}))}},1046:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PasswordInput",(function(){return PasswordInput}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.o,decorators:[]};var PasswordInput=()=>{var inputName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Name","my_input"),inputLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","My Input"),inputValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Value","Test"),inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),inputState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.o,{name:inputName,label:inputLabel,defaultValue:inputValue,placeholder:inputPlaceholder,fieldState:inputState}))}},1047:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_SmallInput",(function(){return _SmallInput}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"Form/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.p,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject()),_SmallInput=()=>{var inputType=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{Text:"text",Password:"password",Email:"email",Number:"number"},"text"),inputName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Name","my_input"),inputLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","My Input"),inputUnit=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Unit","º"),inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),inputState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.p,{type:inputType,unit:inputUnit,name:inputName,label:inputLabel,placeholder:inputPlaceholder,fieldState:inputState}))}},1048:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Switch",(function(){return _Switch}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);__webpack_exports__.default={title:"Form/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.r,decorators:[]};var _Switch=()=>{var labelText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Label Text","The Label"),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Default Checked",!0),state=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("State",{Default:"default",Disabled:"disabled",Locked:"locked",Loading:"loading",Failure:"failure"},"default"),leftTheme=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Left Theme",{Off:"off",On:"on",Danger:"danger"},"off"),rightTheme=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Right Theme",{Off:"off",On:"on",Danger:"danger"},"on"),onChangeCallback=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("value-changed");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.r,{state:state,leftTheme:leftTheme,rightTheme:rightTheme,labelText:labelText,checked:checked,onChangeCallback:onChangeCallback})}},1049:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_DatePicker",(function(){return _DatePicker}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(46),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Filters/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.f,decorators:[]};var _DatePicker=()=>{var dateMode=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Date Mode",{single:"single",interval:"interval"},"interval"),timeMode=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Time Mode",{off:"off",single:"single",interval:"interval"},"interval"),updateCallback=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Date / Time Updated");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.g,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.f,{timeMode:timeMode,dateMode:dateMode,updateCallback:updateCallback})))}},1050:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoadingSpinner",(function(){return LoadingSpinner}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  padding: 12px 24px;\n  width: 100px;\n  border-radius: 3px;\n\n  margin: 15% auto;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n\n  ",";\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"Misc",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.q,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject(),({theme:theme,styling:styling})=>theme.styles.feedbackBar[(styling=>{switch(styling){case"primary":return"info";case"secondary":return"neutral";case"danger":return"error";default:return"neutral"}})(styling)]),LoadingSpinner=()=>{var spinnerSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Small:"small",Medium:"medium",Large:"large",XLarge:"xlarge"},"medium"),spinnerType=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Style",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,{styling:spinnerType},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.q,{size:spinnerSize,styling:spinnerType}))}},1051:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Icons",(function(){return _Icons}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject2(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 50px);\n  column-gap: 24px;\n  row-gap: 24px;\n  text-align: center;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  padding: 12px 24px;\n  width: 100px;\n  border-radius: 3px;\n\n  margin: 15% auto;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"Misc",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.h,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject()),Grid=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject2()),_Icons=()=>{var props,iconList=(()=>{var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.i)iconList[_key]=_key;return iconList})(),showAll=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show All",!1),iconName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Name",iconList,Object.keys(iconList)[0]),iconColor=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle",Inverse:"inverse",Primary:"primary"},"mono"),iconWeight=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Weight",{Light:"light",Regular:"regular",Heavy:"heavy"},"regular"),iconSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Size",24);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,showAll?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid,null,(props={color:iconColor,weight:"regular",size:24},Object.keys(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.i).map(iconName=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{title:iconName,key:iconName},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.h,Object.assign({icon:iconName},props))))))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.h,{icon:iconName,weight:iconWeight,color:iconColor,size:iconSize}))}},1052:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_IntroductionText",(function(){return _IntroductionText}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Pages/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.j,decorators:[]};var _IntroductionText=()=>{var introductionText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.j,null,introductionText))}},1053:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_PageHeader",(function(){return _PageHeader}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Pages/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.m,decorators:[]};var _PageHeader=()=>{var iconList=Object.assign({None:null},generateIconList()),pageTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Page Title","My Page Title"),pageAreaText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Page Area","Area Name"),pageAreaHref=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Page Area Href","#"),pageIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Icon",iconList,void 0),introductionText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique."),updateDocTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Update Doc Title",!0);return updateDocTitle&&console.info("Note: Updating document.title in Storybook has no effect though it should work in projects."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.m,{icon:pageIcon,introductionText:introductionText,title:pageTitle,areaTitle:pageAreaText,areaHref:pageAreaHref,updateDocTitle:updateDocTitle}))},generateIconList=()=>{var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.i)iconList[_key]=_key;return iconList}},1054:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_PageTitle",(function(){return _PageTitle}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Pages/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.n,decorators:[]};var _PageTitle=()=>{var iconList=Object.assign({None:null},generateIconList()),title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","My Page Title"),icon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Icon",iconList,void 0),areaTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Area Title","Area Title"),areaHref=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Area Href","#");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.n,{title:title,icon:icon,areaTitle:areaTitle,areaHref:areaHref}))},generateIconList=()=>{var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.i)iconList[_key]=_key;return iconList}},1055:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TypeTable",(function(){return _TypeTable}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(445),_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(47),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6__);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  padding: 100px;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject());__webpack_exports__.default={title:"Tables/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.v,decorators:[]};var columnConfigSample=[{header:"Device Name",sortable:!0,cellStyle:"firstColumn"},{header:"Status",sortable:!0,showStatus:!0,cellStyle:"normalImportance"},{header:"Created",sortable:!1,cellStyle:"lowImportance",alignment:"center",hasCopyButton:!0},{header:"Usage",sortable:!1,cellStyle:"normalImportance",alignment:"right",showUnit:!0},{header:"Cost",sortable:!0,cellStyle:"highImportance",alignment:"right",hasCopyButton:!0}],initialRows=[{id:"device-1",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Zone",status:"neutral"},columns:[{text:"Device Name",href:"#"},{text:"OK",status:"good"},{text:"Just Now"},{text:"242",unit:"mb"},{text:"¥20,000"}]},{id:"device-2",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"good"},columns:[{text:"Another Device",href:"#"},{text:"Warning",status:"danger"},{text:"1st October 2019"},{text:"2.1",unit:"gb"},{text:"¥4,000"}]},{id:"device-3",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"good"},columns:[{text:"Old Device",href:"#"},{text:"Warning",status:"danger"},{text:"22nd March 2020"},{text:"2.1",unit:"tb"},{text:"¥7,000"}]},{id:"device-4",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"danger"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"OK",status:"good"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"}]},{id:"device-5",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"danger"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"Caution",status:"caution"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"}]},{id:"device-6",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"danger"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"OK",status:"good"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"}]},{id:"device-7",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"danger"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"OK",status:"good"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"}]},{id:"device-8",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"danger"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"Offline",status:"neutral"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"}]},{id:"device-9",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"danger"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"OK",status:"good"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"}]},{id:"device-10",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"danger"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"OK",status:"good"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"}]},{id:"device-4",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,icon:"Location",status:"danger"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"OK",status:"good"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"}]}],_TypeTable=()=>{var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialRows),_useState2=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),rows=_useState2[0],setRows=_useState2[1],hasStatus=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Has Device Status",!0),hasThumbnail=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Has Thumbnail",!0),hasTypeIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Has Device Type Icon",!0),selectable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Selectable Rows",!0),columnConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("Column Configuration",columnConfigSample),customRowData=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("Row Data",rows),selectCallback=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((checked,id)=>{var newRows=[...rows],targetRowIndex=newRows.findIndex(row=>row.id===id);newRows[targetRowIndex]._checked=checked,setRows(newRows)},[rows,setRows]),toggleAllCallback=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(checked=>{var newRows=[...rows];newRows.forEach(row=>{row._checked=checked}),setRows(newRows)},[rows,setRows]);return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{setRows(customRowData)},[customRowData]),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.v,{columnConfig:columnConfig,selectable:selectable,selectCallback:selectCallback,toggleAllCallback:toggleAllCallback,rows:rows,hasStatus:hasStatus,hasThumbnail:hasThumbnail,hasTypeIcon:hasTypeIcon}))}},1056:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_RowThumbnail",(function(){return _RowThumbnail}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(47),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4__),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5);function _templateObject2(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  flex: 0;\n  height: 35px;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  height: 200px;\n  width:  800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_exports__.default={title:"Tables/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.s,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject()),ContainerInner=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject2()),_RowThumbnail=()=>{var hoverZoom=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Zoom On Hover",!0),image=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Image Src",_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainerInner,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.s,{hoverZoom:hoverZoom,image:image})))}},1058:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(1),index_modern=__webpack_require__(5),taggedTemplateLiteral=__webpack_require__(10),Lato_Thin=__webpack_require__(421),Lato_Thin_default=__webpack_require__.n(Lato_Thin),Lato_Light=__webpack_require__(422),Lato_Light_default=__webpack_require__.n(Lato_Light),Lato_Regular=__webpack_require__(423),Lato_Regular_default=__webpack_require__.n(Lato_Regular),Lato_Bold=__webpack_require__(424),Lato_Bold_default=__webpack_require__.n(Lato_Bold),Monorale_Thin=__webpack_require__(425),Monorale_Thin_default=__webpack_require__.n(Monorale_Thin),Monorale_ThinItalic=__webpack_require__(426),Monorale_ThinItalic_default=__webpack_require__.n(Monorale_ThinItalic),Monorale_ExtraLight=__webpack_require__(427),Monorale_ExtraLight_default=__webpack_require__.n(Monorale_ExtraLight),Monorale_ExtraLightItalic=__webpack_require__(428),Monorale_ExtraLightItalic_default=__webpack_require__.n(Monorale_ExtraLightItalic),Monorale_Light=__webpack_require__(429),Monorale_Light_default=__webpack_require__.n(Monorale_Light),Monorale_LightItalic=__webpack_require__(430),Monorale_LightItalic_default=__webpack_require__.n(Monorale_LightItalic),Monorale_Regular=__webpack_require__(431),Monorale_Regular_default=__webpack_require__.n(Monorale_Regular),Monorale_Italic=__webpack_require__(432),Monorale_Italic_default=__webpack_require__.n(Monorale_Italic),Monorale_Medium=__webpack_require__(433),Monorale_Medium_default=__webpack_require__.n(Monorale_Medium),Monorale_MediumItalic=__webpack_require__(434),Monorale_MediumItalic_default=__webpack_require__.n(Monorale_MediumItalic),Monorale_SemiBold=__webpack_require__(435),Monorale_SemiBold_default=__webpack_require__.n(Monorale_SemiBold),Monorale_SemiBoldItalic=__webpack_require__(436),Monorale_SemiBoldItalic_default=__webpack_require__.n(Monorale_SemiBoldItalic),Monorale_Bold=__webpack_require__(437),Monorale_Bold_default=__webpack_require__.n(Monorale_Bold),Monorale_BoldItalic=__webpack_require__(438),Monorale_BoldItalic_default=__webpack_require__.n(Monorale_BoldItalic),Monorale_ExtraBold=__webpack_require__(439),Monorale_ExtraBold_default=__webpack_require__.n(Monorale_ExtraBold),Monorale_ExtraBoldItalic=__webpack_require__(440),Monorale_ExtraBoldItalic_default=__webpack_require__.n(Monorale_ExtraBoldItalic),Monorale_Black=__webpack_require__(441),Monorale_Black_default=__webpack_require__.n(Monorale_Black),Monorale_BlackItalic=__webpack_require__(442),Monorale_BlackItalic_default=__webpack_require__.n(Monorale_BlackItalic);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 100;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    font-style: light;\n    font-weight: 300;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    font-style: bold;\n    font-weight: 700;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 100;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 100;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 200;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 200;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 300;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 300;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 400;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 400;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 500;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 500;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 600;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 600;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 700;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 700;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n}\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 800;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 800;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 900;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 900;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var fonts=Object(styled_components_browser_esm.b)(_templateObject(),Lato_Thin_default.a,Lato_Light_default.a,Lato_Regular_default.a,Lato_Bold_default.a,Monorale_Thin_default.a,Monorale_ThinItalic_default.a,Monorale_ExtraLight_default.a,Monorale_ExtraLightItalic_default.a,Monorale_Light_default.a,Monorale_LightItalic_default.a,Monorale_Regular_default.a,Monorale_Italic_default.a,Monorale_Medium_default.a,Monorale_MediumItalic_default.a,Monorale_SemiBold_default.a,Monorale_SemiBoldItalic_default.a,Monorale_Bold_default.a,Monorale_BoldItalic_default.a,Monorale_ExtraBold_default.a,Monorale_ExtraBoldItalic_default.a,Monorale_Black_default.a,Monorale_BlackItalic_default.a),react_router=__webpack_require__(21);function style_templateObject(){var data=Object(taggedTemplateLiteral.a)(['\n  * , body{\n    box-sizing: border-box;\n  }\n  body, html , #root {\n    min-width: 100%;\n    min-height: 100vh;\n    height: 100%;\n    margin: 0;\n  }\n  html {\n    /* background-image: radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png);\n    background-repeat: no-repeat, repeat; */\n  }\n  body {\n    font-family: Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;\n    color: lightgray;\n  }\n\n']);return style_templateObject=function _templateObject(){return data},data}var style=Object(styled_components_browser_esm.b)(style_templateObject()),decorators=[story=>react_default.a.createElement(styled_components_browser_esm.a,{theme:index_modern.w},react_default.a.createElement(fonts,null),react_default.a.createElement(style,null),story()),story=>react_default.a.createElement(react_router.a,null,story())]},414:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_MainMenu",(function(){return _MainMenu}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(443),_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2__),_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(444),_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2);__webpack_exports__.default={title:"Global",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.l,decorators:[]};var _MainMenu=()=>{var logoMark=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Logo Mark SVG",_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2___default.a),logoText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Logo Text SVG",_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3___default.a),supportUrl=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Support Url","#"),menuHomeLink=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Home Link","#"),menuConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("Menu Config",{items:[{icon:"Invalid",title:"Basic Item",href:"#"},{icon:"PasswordShow",title:"With Children",href:"/",submenu:[{title:"Child One",href:"/"},{title:"Child Two",href:"#"},{title:"Child Three",href:"#"}]},{icon:"Success",title:"Grouped Children",href:"#",submenu:[{title:"Subheader"},{title:"Nested Child One",href:"#"},{title:"Nested Child Two",href:"#"},{title:"Nested Child Three",href:"#"},{title:"Subheader Two"},{title:"Nested Child Four",href:"#"},{title:"Nested Child Five",href:"#"}]}]});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.k,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.l,Object.assign({content:menuConfig,home:menuHomeLink},{logoMark:logoMark,logoText:logoText,supportUrl:supportUrl})))}},415:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TopBar",(function(){return _TopBar}));var _home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5);function _templateObject(){var data=Object(_home_joshlipps_code_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject());__webpack_exports__.default={title:"Global",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.u,decorators:[]};var _TopBar=()=>{var loggedInUser=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Logged In User","full.name@example.com"),userSubmenu=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Submenu",[{text:"Accounts",href:"#"},{text:"Billing",href:"#"},{text:"Payments",href:"#"}]),useSearch=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Use Search",!0),useNotifications=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Use Notifications",!0),showLanguage=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show Language",!0),logoutLink=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Logout Url","#"),searchPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Search Placeholder","Search area names, etc.");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.u,{loggedInUser:loggedInUser,userSubmenu:userSubmenu,useSearch:useSearch,useNotifications:useNotifications,logoutLink:logoutLink,searchPlaceholder:searchPlaceholder,showLanguage:showLanguage}))}},421:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Thin.8a6b4530.ttf"},422:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Light.0f73589a.ttf"},423:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Regular.c5eb5440.ttf"},424:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Bold.2d15decc.ttf"},425:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Thin.ad1820a1.woff"},426:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ThinItalic.70996eb1.woff"},427:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraLight.70e5cc38.woff"},428:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraLightItalic.311e1eef.woff"},429:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Light.86013ad2.woff"},430:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-LightItalic.71ba3bad.woff"},431:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Regular.fbd50651.woff"},432:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Italic.fe48f5fa.woff"},433:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Medium.91605ea0.woff"},434:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-MediumItalic.62d7429d.woff"},435:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-SemiBold.a914a148.woff"},436:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-SemiBoldItalic.62a3bd14.woff"},437:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Bold.62804d53.woff"},438:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-BoldItalic.14f46724.woff"},439:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraBold.33432f37.woff"},440:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraBoldItalic.e652eed8.woff"},441:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Black.d079d5df.woff"},442:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-BlackItalic.fab097e0.woff"},443:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo-mark.75308d30.svg"},444:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo-text.0ffd5079.svg"},447:function(module,exports,__webpack_require__){__webpack_require__(448),__webpack_require__(797),__webpack_require__(798),__webpack_require__(988),__webpack_require__(1e3),__webpack_require__(1003),__webpack_require__(1011),__webpack_require__(1025),module.exports=__webpack_require__(1037)},47:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/placeholder.8af7ef66.jpg"},5:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AlertBar})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Button})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ButtonWithIcon})),__webpack_require__.d(__webpack_exports__,"d",(function(){return ButtonWithLoading})),__webpack_require__.d(__webpack_exports__,"e",(function(){return Checkbox})),__webpack_require__.d(__webpack_exports__,"f",(function(){return DatePicker})),__webpack_require__.d(__webpack_exports__,"g",(function(){return FilterDropdownContainer})),__webpack_require__.d(__webpack_exports__,"h",(function(){return Icon})),__webpack_require__.d(__webpack_exports__,"i",(function(){return IconSVGs})),__webpack_require__.d(__webpack_exports__,"j",(function(){return IntroductionText})),__webpack_require__.d(__webpack_exports__,"k",(function(){return Layout})),__webpack_require__.d(__webpack_exports__,"l",(function(){return MainMenu})),__webpack_require__.d(__webpack_exports__,"m",(function(){return PageHeader})),__webpack_require__.d(__webpack_exports__,"n",(function(){return PageTitle})),__webpack_require__.d(__webpack_exports__,"o",(function(){return PasswordField})),__webpack_require__.d(__webpack_exports__,"p",(function(){return SmallInput})),__webpack_require__.d(__webpack_exports__,"q",(function(){return Spinner})),__webpack_require__.d(__webpack_exports__,"r",(function(){return Switch})),__webpack_require__.d(__webpack_exports__,"s",(function(){return TableRowThumbnail})),__webpack_require__.d(__webpack_exports__,"t",(function(){return TextField})),__webpack_require__.d(__webpack_exports__,"u",(function(){return TopBar})),__webpack_require__.d(__webpack_exports__,"v",(function(){return TypeTable})),__webpack_require__.d(__webpack_exports__,"w",(function(){return light}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),date_fns__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(121),date_fns__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1068),date_fns__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1059),date_fns__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1060),date_fns__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(446),date_fns__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(122),date_fns__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(120),date_fns__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1061),date_fns__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1062),date_fns__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1063),date_fns__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1064),date_fns__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1067),date_fns__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(1065),date_fns__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(151),date_fns__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(104),date_fns__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(1066),react_router_dom__WEBPACK_IMPORTED_MODULE_19__=(__webpack_require__(89),__webpack_require__(105)),react_router_dom__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(21);__webpack_require__(416);const fontFamily={ui:"Monorale",data:"Lato"},dimensions={icons:{weights:{light:1,regular:1.5,heavy:2}},form:{button:{small:"30px",normal:"40px",large:"60px"},input:{height:"40px"},switch:{outer:{width:"38px",height:"22px",borderRadius:"11px"},inner:{width:"16px",height:"16px",borderRadius:"8px"},positions:{top:"2px",off:"2px",neutral:"10px",locked:"2px",on:"18px"}}},global:{mainMenu:{width:{open:"280px",closed:"80px"}}}};var light={fontFamily:fontFamily,dimensions:dimensions,typography:{pageHeader:{mainTitle:{textAlign:"left",fontSize:"26px",fontWeight:600,textDecoration:"none",color:"hsla(208, 7.7%, 38.2%, 1.000)"},introduction:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},areaTitle:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"}},form:{input:{placeholder:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"16px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 0.502)"},compact:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 0.502)"}},value:{normal:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},compact:{textAlign:"left",fontSize:"14px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"}},label:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"}},label:{default:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"},disabled:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 0.651)"},failure:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"hsla(0, 67.9%, 67.1%, 1.000)"},meta:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 56.1%, 1.000)"},"meta(Selected)":{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(207, 94.2%, 66.1%, 1.000)"}},labelInformation:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},tip:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"hsla(205, 59.7%, 71.8%, 1.000)"},select:{option:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},selectedValue:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"hsla(0, 0%, 17.6%, 1.000)"},"option(Hover)":{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"hsla(207, 41.2%, 53.3%, 1.000)"}},feedback:{message:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"20px",textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},button:{primary:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},small:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},secondary:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"},small:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"}},danger:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},small:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}}}},content:{"section-H2":{textAlign:"left",fontSize:"20px",fontWeight:400,textDecoration:"none",color:"hsla(208, 7.7%, 38.2%, 1.000)"},sectionH3:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"hsla(208, 7.7%, 38.2%, 1.000)"},actionParagraph:{textAlign:"left",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},hyperlink:{hover:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"hsla(195, 98.3%, 45.1%, 1.000)"},base:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"hsla(205, 62.3%, 55.3%, 1.000)"}}},feedbackBar:{message:{textAlign:"left",fontSize:"14px",fontWeight:400,lineHeight:"15px",letterSpacing:"-0.2px",textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},searchBar:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 0.647)"},value:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"}},meta:{tagList:{emptyStates:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"},small:{textAlign:"left",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"}},item:{normal:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(200, 3%, 38.8%, 1.000)"},small:{textAlign:"left",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"hsla(200, 3%, 38.8%, 1.000)"}}}},table:{columnData:{normalImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},left:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},center:{textAlign:"center",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"}},highImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"hsla(196, 9.7%, 55.7%, 1.000)"},center:{textAlign:"center",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"hsla(196, 9.7%, 55.7%, 1.000)"},left:{textAlign:"left",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"hsla(196, 9.7%, 55.7%, 1.000)"}},firstColumn:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(194, 10.2%, 52%, 1.000)"},lowImportance:{right:{textAlign:"right",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},center:{textAlign:"center",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},left:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"}},unit:{textAlign:"right",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"}},header:{center:{textAlign:"center",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2.4%, 59%, 1.000)"},left:{textAlign:"left",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2.4%, 59%, 1.000)"},right:{textAlign:"right",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2.4%, 59%, 1.000)"}}},global:{mainMenu:{menuItem:{default:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.847)"},active:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.851)"},hover:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.851)"}},subheader:{textAlign:"left",fontSize:"14px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.35px",textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.902)"},hidePrompt:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 1.000)"},subItem:{default:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.647)"},active:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(214, 14.4%, 46.3%, 1.000)"},hover:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(214, 14.4%, 46.3%, 1.000)"}},identity:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 34.1%, 0.749)"}},topBar:{search:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 65.5%, 1.000)"},value:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.9%, 1.000)"}}}},filters:{datepicker:{metaHeader:{default:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 56.1%, 1.000)"},active:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(207, 94.2%, 66.1%, 1.000)"}},calendar:{active:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},otherMonth:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(206, 6.3%, 49.4%, 0.502)"},default:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"},header:{textAlign:"center",fontSize:"12px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 82%, 1.000)"}},monthLink:{default:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"hsla(0, 0%, 75.7%, 1.000)"},hover:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},focusedMonth:{textAlign:"center",fontSize:"20px",fontWeight:400,lineHeight:"20px",letterSpacing:"0.5px",textDecoration:"none",color:"hsla(215, 23.5%, 64.1%, 1.000)"},focusedYear:{textAlign:"center",fontSize:"10px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.3333333px",textDecoration:"none",color:"hsla(215, 23.5%, 64.1%, 1.000)"}},value:{textAlign:"left",fontSize:"14px",fontWeight:500,letterSpacing:"0.2px",textDecoration:"none",color:"hsla(0, 0%, 56.1%, 1.000)"},subOption:{label:{textAlign:"left",fontSize:"12px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"},value:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"hsla(202, 6.2%, 74.5%, 1.000)"}},presetAction:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"hsla(202, 6.2%, 74.5%, 1.000)"}}},colors:{pureBase:"hsla(0, 0%, 100%, 1.000)",pureTop:"hsla(0, 0%, 0%, 1.000)",divider:"hsla(0, 0%, 93.3%, 1.000)",icons:{inverse:"hsla(0, 0%, 100%, 1.000)",mono:"hsla(0, 0%, 25.1%, 1.000)",dimmed:"hsla(0, 0%, 65.1%, 1.000)",subtle:"hsla(0, 0%, 85.1%, 1.000)",primary:"hsla(205, 100%, 65.1%, 1.000)",danger:"hsla(0, 100%, 70%, 1.000)"},menu:{active:"hsla(215, 100%, 75.1%, 1.000)",hover:"hsla(200, 77.8%, 77.1%, 1.000)",default:"hsla(200, 77.8%, 77.1%, 0.000)",indicator:"hsla(240, 1.2%, 84.1%, 0.502)",passive:"hsla(215, 100%, 75.1%, 0.149)"},feedback:{error:"hsla(0, 78.8%, 70.4%, 1.000)",info:"hsla(205, 77.4%, 63.5%, 1.000)",neutral:"hsla(205, 22.1%, 66.3%, 1.000)",success:"hsla(136, 49.5%, 57.3%, 1.000)",warning:"hsla(30, 91%, 61%, 1.000)"},status:{caution:"hsla(57, 57.7%, 62.9%, 1.000)",danger:"hsla(0, 63.5%, 64.5%, 1.000)",folder:"hsla(207, 95.3%, 66.5%, 1.000)",good:"hsla(126, 48.1%, 68.2%, 1.000)",neutral:"hsla(0, 0%, 91.8%, 1.000)"}},styles:{generic:{transparent:{}},filterBar:{divider:{backgroundColor:"hsla(0, 0%, 89.4%, 1.000)"}},form:{input:{default:{normal:{backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(120, 1.3%, 85.3%, 1.000)"},focused:{boxShadow:"0px 3px 7px 0px hsla(207, 65.8%, 31%, 0.078)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"}},disabled:{normal:{backgroundColor:"hsla(206, 36.8%, 96.3%, 1.000)",borderColor:"hsla(120, 1.3%, 85.3%, 1.000)"}},subdivision:{backgroundColor:"hsla(120, 1.3%, 85.3%, 1.000)"},required:{focused:{boxShadow:"0px 3px 7px 0px hsla(207, 67.8%, 35.3%, 0.071)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"},normal:{borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"}},valid:{focused:{boxShadow:"0px 3px 5px 0px hsla(120, 76.6%, 15.1%, 0.071)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(120, 35.2%, 71.6%, 1.000)"},normal:{borderColor:"hsla(120, 35.2%, 71.6%, 1.000)"}},invalid:{focused:{boxShadow:"0px 3px 7px 0px hsla(0, 100%, 50%, 0.102)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(0, 78.8%, 70.4%, 1.000)"},normal:{borderColor:"hsla(0, 78.8%, 70.4%, 1.000)"}},processing:{focused:{boxShadow:"0px 3px 7px 0px hsla(195, 67.8%, 35.3%, 0.071)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(195, 79.5%, 71.4%, 1.000)"},normal:{backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(195, 79.5%, 71.4%, 1.000)"}},seperatedValues:{background:{backgroundImage:"linear-gradient(315.00deg, hsla(205, 82.4%, 64.3%, 1.000) 0%, hsla(195, 83.5%, 54.7%, 1.000) 100%)"},hoverHighlight:{backgroundColor:"hsla(195, 84.3%, 67.5%, 1.000)"}}},button:{primary:{default:{backgroundImage:"linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"},hover:{backgroundColor:"hsla(207, 88.2%, 60%, 1.000)"},active:{backgroundColor:"hsla(195, 79.5%, 71.4%, 1.000)"},divider:{backgroundColor:"hsla(202, 70.4%, 62.9%, 1.000)"},disabled:{backgroundImage:"linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"},actionArea:{backgroundImage:"linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"}},secondary:{default:{backgroundColor:"hsla(0, 0%, 94.9%, 1.000)"},hover:{backgroundColor:"hsla(0, 0%, 85.9%, 1.000)"},active:{backgroundColor:"hsla(204, 18.2%, 78.4%, 1.000)"},disabled:{backgroundColor:"hsla(0, 0%, 97.3%, 1.000)"},divider:{backgroundColor:"hsla(204, 18.2%, 78.4%, 0.302)"},actionArea:{backgroundColor:"hsla(0, 0%, 94.9%, 0.302)"}},danger:{default:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 54%, 60.8%, 1.000) 0%, hsla(0, 71.4%, 67.1%, 1.000) 100%)"},hover:{backgroundColor:"hsla(0, 88.4%, 66.3%, 1.000)"},active:{backgroundColor:"hsla(0, 78.8%, 70.4%, 1.000)"},disabled:{backgroundColor:"hsla(0, 78.7%, 85.3%, 1.000)"},divider:{backgroundColor:"hsla(0, 62.1%, 61.8%, 1.000)"},actionArea:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 54%, 60.8%, 1.000) 0%, hsla(0, 71.4%, 67.1%, 1.000) 100%)"}}},switch:{off:{default:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(210, 30%, 96.1%, 1.000) 0%, hsla(203, 41.9%, 93.9%, 1.000) 100%)",borderColor:"hsla(208, 24.6%, 77.6%, 0.651)"},inner:{backgroundImage:"linear-gradient(315.00deg, hsla(205, 82.4%, 64.3%, 1.000) 0%, hsla(195, 83.5%, 54.7%, 1.000) 100%)"}},disabled:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(0, 0%, 100%, 1.000) 0%, hsla(0, 0%, 98.8%, 1.000) 100%)",borderColor:"hsla(208, 22.7%, 85.3%, 0.651)"},inner:{backgroundColor:"hsla(120, 1.3%, 85.3%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(210, 30%, 96.1%, 1.000) 0%, hsla(203, 41.9%, 93.9%, 1.000) 100%)",borderColor:"hsla(208, 24.6%, 77.6%, 0.651)"}}},on:{default:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(204, 78.4%, 72.7%, 1.000) 0%, hsla(195, 83.2%, 67.3%, 1.000) 100%)",borderColor:"hsla(205, 66.5%, 61.4%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},disabled:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(205, 61.9%, 87.6%, 1.000) 0%, hsla(204, 45.5%, 84.9%, 1.000) 100%)",borderColor:"hsla(205, 89.5%, 85.1%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(315.00deg, hsla(204, 68.3%, 72.7%, 0.647) 0%, hsla(195, 83.2%, 67.3%, 0.655) 100%)",borderColor:"hsla(205, 66.5%, 61.4%, 0.651)"}}},failure:{default:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 68.5%, 67.6%, 1.000) 0%, hsla(0, 69.1%, 65.7%, 1.000) 100%)",borderColor:"hsla(0, 66.5%, 61.4%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 60.6%, 73.1%, 1.000) 0.4%, hsla(0, 57.9%, 73.9%, 1.000) 100%)",borderColor:"hsla(0, 54.2%, 67.5%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}}},danger:{default:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 68%, 66.9%, 1.000) 0%, hsla(20, 81.2%, 64.5%, 1.000) 100%)",borderColor:"hsla(0, 51.2%, 60.6%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 79.5%, 77.1%, 1.000) 0%, hsla(20, 96%, 80.4%, 1.000) 100%)",borderColor:"hsla(0, 62%, 73.1%, 1.000)"}},disabled:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 57%, 81.8%, 1.000) 0%, hsla(19, 100%, 84.9%, 1.000) 100%)",borderColor:"hsla(0, 78.7%, 85.3%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}}},locked:{default:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(0, 0%, 100%, 1.000) 0%, hsla(0, 0%, 98.8%, 1.000) 100%)",borderColor:"hsla(208, 22.7%, 85.3%, 0.651)"},inner:{backgroundColor:"hsla(0, 0%, 89.4%, 1.000)"}}}},checkbox:{unchecked:{disabled:{backgroundColor:"hsla(0, 0%, 98.8%, 1.000)",borderColor:"hsla(210, 20%, 90.2%, 1.000)"},default:{borderColor:"hsla(208, 24.6%, 77.6%, 1.000)"},hover:{borderColor:"hsla(195, 94.2%, 66.1%, 1.000)"}},checked:{disabled:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(210, 20%, 90.2%, 1.000)"},default:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(207, 95.3%, 66.5%, 1.000)"},hover:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(195, 95.3%, 66.5%, 1.000)"}},indeterminate:{hover:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(195, 85.4%, 73.1%, 1.000)"},default:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(205, 89.5%, 77.6%, 1.000)"}}}},global:{mainMenu:{iconBackground:{active:{backgroundColor:"hsla(215, 100%, 75.1%, 1.000)"},hover:{backgroundColor:"hsla(200, 77.8%, 77.1%, 1.000)"},default:{backgroundColor:"hsla(200, 77.8%, 77.1%, 0.000)"}},background:{boxShadow:"5px 0px 10px 0px hsla(205, 16%, 76.7%, 0.102)",backgroundColor:"hsla(0, 0%, 99.6%, 1.000)"},lines:{backgroundColor:"hsla(0, 0%, 93.3%, 1.000)"},footerBackground:{backgroundColor:"hsla(0, 0%, 99.6%, 0.851)"}},background:{backgroundImage:"linear-gradient(180.00deg, hsla(210, 20%, 98%, 1.000) 0%, hsla(210, 20%, 96.1%, 1.000) 100%)"}},indicators:{spinner:{danger:{base:{borderColor:"hsla(0, 78.8%, 70.4%, 1.000)"},top:{borderColor:"hsla(0, 0%, 100%, 1.000)"}},secondary:{top:{borderColor:"hsla(0, 0%, 100%, 1.000)"},base:{borderColor:"hsla(0, 0%, 75.7%, 1.000)"}},primary:{top:{borderColor:"hsla(0, 0%, 100%, 1.000)"},base:{borderColor:"hsla(195, 89.4%, 81.6%, 1.000)"}},simple:{top:{borderColor:"hsla(0, 0%, 100%, 1.000)"},base:{borderColor:"hsla(0, 0%, 76.9%, 0.329)"}}}},filters:{dropdownContainer:{background:{boxShadow:"0px 5px 25px 0px hsla(210, 66.9%, 46.3%, 0.122)",backgroundColor:"hsla(0, 0%, 100%, 1.000)"},topBorder:{backgroundColor:"hsla(205, 100%, 72%, 1.000)"}}},general:{divider:{backgroundColor:"hsla(0, 0%, 93.3%, 1.000)"}},feedbackBar:{neutral:{backgroundColor:"hsla(205, 22.1%, 66.3%, 1.000)"},error:{backgroundColor:"hsla(0, 78.8%, 70.4%, 1.000)"},info:{backgroundColor:"hsla(205, 77.4%, 63.5%, 1.000)"},success:{backgroundColor:"hsla(136, 49.5%, 57.3%, 1.000)"},warning:{backgroundColor:"hsla(30, 91%, 61%, 1.000)"}}},animation:{easing:{primary:{inOut:"cubic-bezier(0.87, 0, 0.13, 1)",out:"cubic-bezier(0.16, 1, 0.3, 1)",in:"cubic-bezier(0.7, 0, 0.84, 0)"}},speed:{fast:"0.175s",normal:"0.35s",slow:"0.7s"}},custom:{lines:{primary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(205deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(205deg, 45%, 90%, 90%);"},grabHandle:{fill:"hsla(205deg, 45%, 90%, 100%)",stroke:"hsla(205deg, 45%, 100%, 100%)"},point:{fill:"hsla(205deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(205deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(205deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(235deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(205deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(192deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(205deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(205deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(205deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(205deg, 100%, 15%, 0%)"}},secondary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(120deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(120deg, 45%, 90%, 90%);"},grabHandle:{fill:"hsla(120deg, 45%, 90%, 100%)",stroke:"hsla(120deg, 45%, 100%, 100%)"},point:{fill:"hsla(120deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(120deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(120deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(150deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(120deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(108deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(120deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(120deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(120deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(120deg, 100%, 15%, 0%)"}},danger:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(0, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(0, 45%, 90%, 90%);"},grabHandle:{fill:"hsla(0, 45%, 90%, 100%)",stroke:"hsla(0, 45%, 100%, 100%)"},point:{fill:"hsla(0, 45%, 90%, 100%)"},grabHandleText:{fill:"hsla(0, 80%, 25%, 100%);"},grabHandleContrast:{stroke:"hsla(0, 80%, 45%, 100%)"},handleBase:{fill:"hsla(30deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(0, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(348deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(0deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(0deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(0, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(0, 100%, 15%, 0%);"}}}}};var IconSVGs={__proto__:null,Add:function SvgAdd(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 7.5v9M7.5 12h9"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:12,r:11.25})))},Analyse:function SvgAnalyse(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6.726.75h10.5M15.726 8.25V.75h-7.5v7.5L1.489 18.615A3 3 0 004 23.25h15.948a3 3 0 002.515-4.635L15.726 8.25zM5.301 12.75h13.35M14.226 17.25h3M15.726 15.75v3M6.726 19.125c.207 0 .374.168.374.375M6.351 19.5c0-.207.168-.375.375-.375M6.726 19.875a.375.375 0 01-.375-.375M7.1 19.5a.375.375 0 01-.375.375M9.726 16.125c.207 0 .375.168.375.375M9.351 16.5c0-.207.168-.375.375-.375M9.726 16.875a.375.375 0 01-.375-.375M10.1 16.5a.375.375 0 01-.375.375M15.726 3.75h-3M15.726 6.75h-3"})))},Back:function SvgBack(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M7.501 11.997h9m-5.25 3.75l-3.75-3.75 3.75-3.75"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12.001,cy:11.997,r:10.5})))},BigWarning:function SvgBigWarning(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 16.5a.375.375 0 100 .75.375.375 0 000-.75h0m0-3V6"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M1.28 13.281a1.811 1.811 0 010-2.561l9.44-9.439a1.81 1.81 0 012.56 0l9.44 9.439a1.811 1.811 0 010 2.561l-9.44 9.439a1.812 1.812 0 01-2.56 0l-9.44-9.439z"})))},Camera:function SvgCamera(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M8.25 12v3.333a2.848 2.848 0 01-3 2.667H.75m0-2.25v3.75M15 9H1.5a.75.75 0 01-.75-.75V4.5A4.5 4.5 0 015.25 0h16.5a1.5 1.5 0 011.5 1.5v1.275c0 .593-.35 1.13-.891 1.371L16.5 6.751V7.5A1.5 1.5 0 0115 9z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M20.25 5.084V10.5a1.5 1.5 0 01-1.5 1.5H5.25a3 3 0 01-3-3h0m21-2.25v3"})))},ClearField:function SvgClearField(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:11.998,cy:12,r:11.25}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M7.498 16.5l8.999-9M16.498 16.5l-9.001-9"})))},CloseCompact:function SvgCloseCompact(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M5 18.999l14-14M19 18.999l-14-14"})))},Close:function SvgClose(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M.75 23.249l22.5-22.5M23.25 23.249L.75.749"})))},Copy:function SvgCopy(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M4.5 17.5A1.5 1.5 0 013 16V2.5A1.5 1.5 0 014.5 1H15a1.5 1.5 0 011.5 1.5"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{x:8,y:6,width:13.5,height:16.5,rx:1.5})))},Critical:function SvgCritical(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 18.75a.375.375 0 100 .75.375.375 0 000-.75h0m0-3v-7.5"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M13.621 1.76a1.806 1.806 0 00-3.242 0L.906 21.058a1.52 1.52 0 001.366 2.192h19.456a1.52 1.52 0 001.366-2.192L13.621 1.76z"})))},Crop:function SvgCrop(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M21.75 19.125h1.5M5.25 1.875v17.25h13.5M2.25 5.625H.75M14.25 5.625h-9M18.75 22.875v-13.5M5.25 19.125l2.121-2.121M9.493 14.882l2.121-2.121M13.735 10.64l2.122-2.122M17.978 6.397l2.121-2.121M22.221 2.154l1.029-1.029"})))},DataRetention:function SvgDataRetention(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:17.25,cy:17.25,r:6}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M19.902 17.25H17.25v-2.651m5.229-6.357a4.867 4.867 0 00-6.868-1.377 7.5 7.5 0 00-8.3-6.057 7.5 7.5 0 00.938 14.941"})))},DateTime:function SvgDateTime(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5M.75 6.75h16.5m-12-3v-3m7.5 3v-3"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:17.25,cy:17.25,r:6}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M19.902 17.25H17.25v-2.651"})))},Date:function SvgDate(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{x:.752,y:3.75,width:22.5,height:19.5,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M.752 9.75h22.5M6.752 6V.75M17.252 6V.75"})))},Delete:function SvgDelete(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M17.25 21H6.75a1.5 1.5 0 01-1.5-1.5V6h13.5v13.5a1.5 1.5 0 01-1.5 1.5zM9.75 16.5v-6M14.25 16.5v-6M2.25 6h19.5M14.25 3h-4.5a1.5 1.5 0 00-1.5 1.5V6h7.5V4.5a1.5 1.5 0 00-1.5-1.5z"})))},Detection:function SvgDetection(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 00.7 1.02h1.9v3a3 3 0 003 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 00.5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6",fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,vectorEffect:"non-scaling-stroke"}))},DevicesFolder:function SvgDevicesFolder(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M20.25 11.75v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v16.3a1.7 1.7 0 003.336.438l2.351-9.657a1.5 1.5 0 011.442-1.081H21.75a1.5 1.5 0 011.45 1.886l-2.2 9a1.5 1.5 0 01-1.45 1.114H2.447",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},DevicesLiveEndpoint:function SvgDevicesLiveEndpoint(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6.75 21.368h10.5m-7.312-6.75l-1.688 6.75m5.813-6.75l1.687 6.75m7.5-12.75a6 6 0 01-6 6H6.75a6 6 0 110-12h10.5c1.591 0 3.117.632 4.243 1.757a6.003 6.003 0 011.757 4.243z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:8.618,r:3})))},DevicesScorerCamera:function SvgDevicesScorerCamera(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M17.25 22.424c.207 0 .375.168.375.375m-.75.001c0-.207.168-.375.375-.375m0 .749a.375.375 0 01-.375-.375m.75.001a.375.375 0 01-.375.375m6-7.552a9.54 9.54 0 00-12 0m2.5 3.615a5.568 5.568 0 017 0M17.25 3.75l-16.5 3v-3a3 3 0 013-3h13.786a.75.75 0 01.671 1.085L17.25 3.75z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15.75 4.023V7.5a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 012.25 7.5V6.477m4.5 3.273v1.5a3 3 0 01-3 3h-3m0-1.5v3m18-10.5v3"})))},DevicesScorerEdge:function SvgDevicesScorerEdge(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M1.25.75h11a.5.5 0 01.5.5v3a1 1 0 01-1 1h-10a1 1 0 01-1-1v-3a.5.5 0 01.5-.5zm5.5 7.125c.207 0 .375.168.375.375m-.75 0c0-.207.168-.375.375-.375m0 .75a.375.375 0 01-.375-.375m.75 0a.375.375 0 01-.375.375m-4.5 5.625v3m0 3v1.5a1.5 1.5 0 001.5 1.5h1.5m3 0h3"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:7.5,height:12,x:15.75,y:11.25,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M19.5 19.875h0m.375.375a.375.375 0 00-.375-.375m0 .75a.375.375 0 00.375-.375m-.75 0c0 .207.168.375.375.375m0-.75a.375.375 0 00-.375.375M17.379 7.629a3 3 0 014.242 0M16.5 4.451a6.768 6.768 0 016 0m-20.486.78a5.25 5.25 0 109.472 0"})))},Down:function SvgDown(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M23.25 6.311L12.53 17.03a.751.751 0 01-1.06 0L.75 6.311",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},DownloadVideo:function SvgDownloadVideo(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:17.25,cy:17.25,r:6}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M17.25 14.25v6M17.25 20.25L15 18M17.25 20.25L19.5 18M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6.241 12.678a.685.685 0 01-.991-.613v-4.63a.685.685 0 01.991-.613l4.631 2.316a.684.684 0 010 1.224l-4.631 2.316z"})))},Download:function SvgDownload(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M5.251 11.25L12 18l6.75-6.75H15V4.5a.75.75 0 00-.75-.75h-4.5A.75.75 0 009 4.5v6.75H5.251zm18 8.25v3a1.5 1.5 0 01-1.5 1.5h-19.5a1.5 1.5 0 01-1.5-1.5v-3",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},Edit:function SvgEdit(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M22.19 1.81a3.637 3.637 0 00-5.17.035l-14.5 14.5L.75 23.25l6.905-1.771 14.5-14.5a3.636 3.636 0 00.035-5.169zm-5.584.45l5.134 5.134m-19.219 8.95l5.139 5.13",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},Exclamation:function SvgExclamation(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 16.5a.375.375 0 100 .75.375.375 0 000-.75h0m0-3V5.25",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},FeatureLineUi:function SvgFeatureLineUi(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M3.75 17.25a3 3 0 110 6 3 3 0 010-6zM20 1a3 3 0 110 6 3 3 0 010-6zm-2.53 5.53L6.53 17.47",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},FeaturePtz:function SvgFeaturePtz(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 .75v22.5M9 3.75l3-3 3 3m-6 16.5l3 3 3-3M23.25 12H.75m19.5-3l3 3-3 3M3.75 9l-3 3 3 3",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},Fever:function SvgFever(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 00.7 1.02h1.9v3a3 3 0 003 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 00.5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},FilterAscending:function SvgFilterAscending(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M8.25 23.248V.748m-4.5 18l4.5 4.5 4.5-4.5m3-4.5h3.6a.899.899 0 01.836 1.234l-4.372 6.531a.9.9 0 00.836 1.235h3.6m0-13.5V3a2.25 2.25 0 10-4.5 0v6.75m0-3.002h4.5",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},FilterDescending:function SvgFilterDescending(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M8.25 23.248V.748M3.75 4.5L8.25 0l4.5 4.5M15.75.248h3.6a.899.899 0 01.836 1.234l-4.372 6.531a.9.9 0 00.836 1.235h3.6m0 14.5V17a2.25 2.25 0 10-4.5 0v6.75m0-3.002h4.5"})))},FilterSorting:function SvgFilterSorting(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M7 12h10m-7 5h4M5 7h14",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},Forward:function SvgForward(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M16.499 11.997h-9M12.749 15.747l3.75-3.75-3.75-3.75"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:11.999,cy:11.997,r:10.5,transform:"matrix(-1 0 0 1 23.998 0)"})))},Home:function SvgHome(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M3.754 13.923v8.25h6v-6a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v6h6v-8.25M.754 12.423l10.19-10.189a1.5 1.5 0 012.121 0l10.189 10.189M16.504 5.673v-1.5h3.75v5.25"})))},Information:function SvgInformation(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M14.25 16.5h-.75A1.5 1.5 0 0112 15v-3.75a.75.75 0 00-.75-.75h-.75m1.125-3.75a.375.375 0 100 .75.375.375 0 000-.75h0"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:12,r:11.25})))},Invalid:function SvgInvalid(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:11.998,cy:12,r:11.25}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M7.498 16.5l8.999-9m.001 9l-9.001-9"})))},Language:function SvgLanguage(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M9.735 23.023a11.251 11.251 0 1113.418-12.511M9.289 22.922C7.768 20.689 6.75 16.634 6.75 12S7.768 3.312 9.289 1.079M.775 11.251H12.75M2.999 5.251H21M2.048 17.251H10.5M14.711 1.079a16.184 16.184 0 012.2 6.42"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:18,cy:13.126,r:2.625}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M18 16.5a5.25 5.25 0 00-5.25 5.25v1.5h10.5v-1.5A5.249 5.249 0 0018 16.5h0z"})))},LayoutGrid:function SvgLayoutGrid(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:4.5,height:4.5,x:.75,y:.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:4.5,height:4.5,x:9.75,y:.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:4.5,height:4.5,x:18.75,y:.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:4.5,height:4.5,x:.75,y:9.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:4.5,height:4.5,x:9.75,y:9.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:4.5,height:4.5,x:18.75,y:9.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:4.5,height:4.5,x:.75,y:18.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:4.5,height:4.5,x:9.75,y:18.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:4.5,height:4.5,x:18.75,y:18.747,rx:1.5})))},LayoutList:function SvgLayoutList(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:22.5,height:4.5,x:.75,y:.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:22.5,height:4.5,x:.75,y:9.747,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:22.5,height:4.5,x:.75,y:18.747,rx:1.5})))},Left:function SvgLeft(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M17.25 23.25L6.53 12.53a.751.751 0 010-1.06L17.25.75",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},Location:function SvgLocation(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:7.5,r:3}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 .75a6.75 6.75 0 016.75 6.75c0 3.251-5.132 10.527-6.446 12.337a.377.377 0 01-.608 0C10.382 18.027 5.25 10.751 5.25 7.5A6.75 6.75 0 0112 .75z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M17.979 17.784c2.732.541 4.521 1.444 4.521 2.466 0 1.657-4.7 3-10.5 3s-10.5-1.343-10.5-3c0-1.02 1.781-1.921 4.5-2.463"})))},Locked:function SvgLocked(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M10 9.75V6a5.25 5.25 0 1110.5 0v3.75"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15 15.75a.375.375 0 100 .75.375.375 0 000-.75h0"})))},Menu:function SvgMenu(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5"})))},MetaCategories:function SvgMetaCategories(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:5.25,cy:5.255,r:4.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:5.25,cy:18.755,r:4.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:18.75,cy:5.255,r:4.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:18.75,cy:18.755,r:4.5})))},MetaEnabledState:function SvgMetaEnabledState(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M18.376 10.5H5.626A4.888 4.888 0 01.751 5.625h0A4.889 4.889 0 015.626.75h12.75a4.89 4.89 0 014.875 4.875h0a4.889 4.889 0 01-4.875 4.875zM18.376 23.25H5.626a4.888 4.888 0 01-4.875-4.875h0A4.889 4.889 0 015.626 13.5h12.75a4.89 4.89 0 014.875 4.875h0a4.889 4.889 0 01-4.875 4.875h0z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:5.626,cy:5.625,r:1.875}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:18.376,cy:18.375,r:1.875})))},MetaTags:function SvgMetaTags(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M1.061 2.56v6.257a3 3 0 00.878 2.121L13.5 22.5a1.5 1.5 0 002.121 0l6.879-6.88a1.5 1.5 0 000-2.121L10.939 1.938a3 3 0 00-2.121-.878H2.561a1.5 1.5 0 00-1.5 1.5z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:6.311,cy:6.31,r:1.5})))},MonitoringProfile:function SvgMonitoringProfile(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:17.25,cy:16.5,r:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M18.524 10.7l.442 1.452c.15.5.664.799 1.174.681l1.472-.341a1.338 1.338 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.219l-1.472-.342a1 1 0 00-1.174.681l-.442 1.448a1.33 1.33 0 01-2.548 0l-.442-1.453a1 1 0 00-1.174-.681l-1.472.342a1.34 1.34 0 01-1.275-2.219l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.34 1.34 0 011.275-2.218l1.472.341a.992.992 0 001.174-.681l.442-1.452a1.33 1.33 0 012.548.005zM8.25 14.25a4.5 4.5 0 114.25-5.978"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M9.75 9.75h-1.5v-1.5"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871c.281.281.44.663.439 1.061V6.75"})))},NoIcon:function SvgNoIcon(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props))},Notifications:function SvgNotifications(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M10 21.75a2.087 2.087 0 004.005 0M12 3V.75M12 3a7.5 7.5 0 017.5 7.5c0 7.046 1.5 8.25 1.5 8.25H3s1.5-1.916 1.5-8.25A7.5 7.5 0 0112 3z"})))},PasswordHide:function SvgPasswordHide(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M2.783 20l18.75-18M8.964 18.051A9.985 9.985 0 0012 18.5c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226A20.568 20.568 0 0019.75 7.88M14.413 5.282A9.549 9.549 0 0012 5c-4.031-.067-8.2 2.752-10.821 5.635a1.663 1.663 0 000 2.226 20.8 20.8 0 002.6 2.4M8.25 11.75A3.749 3.749 0 0112 8"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15.75 11.749h0A3.75 3.75 0 0112 15.5"})))},PasswordShow:function SvgPasswordShow(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 5.251C7.969 5.183 3.8 8 1.179 10.885a1.663 1.663 0 000 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226C20.2 8 16.031 5.183 12 5.251z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15.75 12a3.75 3.75 0 11-7.5-.002 3.75 3.75 0 017.5.002h0z"})))},Pinned:function SvgPinned(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M4.949 8.783a1.5 1.5 0 00-.3 2.356l8.213 8.213a1.5 1.5 0 002.356-.3 7.522 7.522 0 00.81-5.54l6.529-4.155a1.5 1.5 0 00.256-2.326L16.97 1.188a1.5 1.5 0 00-2.326.255l-4.155 6.53a7.522 7.522 0 00-5.54.81zM8.753 15.246L.75 23.249"})))},Question:function SvgQuestion(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M9 9a2.999 2.999 0 015.923-.673A3 3 0 0113 11.829a1.5 1.5 0 00-1 1.415v1.006m0 3a.375.375 0 100 .75.375.375 0 000-.75h0"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:12,r:11.25})))},RecognitionPhoto:function SvgRecognitionPhoto(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:19.5,height:22.5,x:2.25,y:.75,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:9.083,r:4.11}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M18.75 19.027a7.63 7.63 0 00-13.5 0"})))},RecognitionProfile:function SvgRecognitionProfile(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M5.25 22.5a6.75 6.75 0 1113.5 0H5.25zM8.458 8.043a6.859 6.859 0 007.612 1.532"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:10.125,r:4.125}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M.75 5.249V3a1.5 1.5 0 011.5-1.5H4.5m0 13.5H2.25a1.5 1.5 0 01-1.5-1.5v-2.25m22.5 0v2.25a1.5 1.5 0 01-1.5 1.5H19.5m0-13.5h2.25a1.5 1.5 0 011.5 1.5v2.25"})))},Required:function SvgRequired(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M21 8.953h-3.8l1.9-3.295a1.5 1.5 0 00-.549-2.049l-2.6-1.5a1.5 1.5 0 00-2.049.549L12 5.953l-1.9-3.3a1.5 1.5 0 00-2.049-.549l-2.6 1.5A1.5 1.5 0 004.9 5.658l1.9 3.295H3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3.8l-1.9 3.294c-.2.345-.254.756-.15 1.14.102.386.355.714.701.913l2.6 1.5a1.5 1.5 0 002.049-.549l1.9-3.298 1.9 3.294a1.5 1.5 0 002.049.549l2.6-1.5a1.5 1.5 0 00.549-2.049l-1.9-3.294H21a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5z",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},RetryJob:function SvgRetryJob(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.74.733M8.25 14.25a4.5 4.5 0 114.25-5.978"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M9.75 9.75h-1.5v-1.5"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V7.5"})))},Right:function SvgRight(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6.5.75l10.72 10.72a.751.751 0 010 1.06L6.5 23.25",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},Search:function SvgSearch(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:9.823,cy:9.823,r:8.823}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M16.062 16.062l6.843 6.844"})))},Success:function SvgSuccess(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6 13.223L8.45 16.7a1.049 1.049 0 001.707.051L18 6.828"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:11.999,r:11.25})))},SwitchAccount:function SvgSwitchAccount(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M.75 14.248h20.689a.751.751 0 01.531 1.281L18 19.5M6 4.5L2.03 8.468a.75.75 0 00.531 1.28H23.25"})))},TemperatureAmbient:function SvgTemperatureAmbient(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M8.25 15.418V3.75a3 3 0 10-6 0v11.668a4.493 4.493 0 107.5 3.332 4.47 4.47 0 00-1.5-3.332h0zm-3-10.168v12"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:5.25,cy:18.75,r:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:15,cy:11.25,r:3.75}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15.75 4.5V3m4.023 3.477l1.061-1.061m.916 5.834h1.5m-3.477 4.773l1.061 1.061M15.75 18v1.5"})))},TemperatureHigh:function SvgTemperatureHigh(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15.5 15.418V3.75a3 3 0 10-6 0v11.668a4.501 4.501 0 106 0z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12.5,cy:18.75,r:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12.5 12.75v4.5m6-4.5H20"})))},TemperatureLow:function SvgTemperatureLow(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15.5 15.418V3.75a3 3 0 10-6 0v11.668a4.501 4.501 0 106 0z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12.5,cy:18.75,r:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12.5 3.75v13.5m6-13.5H20m-1.5 4.5H20m-1.5 4.5H20"})))},TemperatureNormal:function SvgTemperatureNormal(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15.5 15.418V3.75a3 3 0 10-6 0v11.668a4.501 4.501 0 106 0z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12.5,cy:18.75,r:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12.5 8.25v9m6-9H20m-1.5 4.5H20"})))},Temperature:function SvgTemperature(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 18 18"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:props.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:props.weight,transform:"translate(.75 .75)",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M10.656 10.6V2.578a2.062 2.062 0 10-4.125 0V10.6a3.093 3.093 0 104.125 0z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:8.594,cy:12.891,r:1.031}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M8.594 2.578v9.281m4.125-9.281h1.031m-1.031 3.094h1.031m-1.031 3.094h1.031"})))},Time:function SvgTime(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:12,r:10.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 12V8.25M12 12l4.687 4.688"})))},Unlocked:function SvgUnlocked(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M.75 9.75V6a5.25 5.25 0 1110.5 0v3.75"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M15 15.75a.375.375 0 100 .75.375.375 0 000-.75h0"})))},Up:function SvgUp(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M.75 17.189L11.47 6.47a.751.751 0 011.06 0l10.72 10.719",stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}))},UserProfile:function SvgUserProfile(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:6,r:5.25}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M2.25 23.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75"})))},ViewSettings:function SvgViewSettings(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M7.281 9.376a1.308 1.308 0 001.939 0l.627-.7a1.306 1.306 0 012.273.942l-.047.934a1.3 1.3 0 001.371 1.371l.934-.047a1.305 1.305 0 01.941 2.273l-.694.627a1.306 1.306 0 000 1.939l.694.627a1.305 1.305 0 01-.941 2.273l-.934-.047a1.305 1.305 0 00-1.371 1.371l.047.934a1.306 1.306 0 01-2.273.942l-.627-.7a1.308 1.308 0 00-1.939 0l-.627.7a1.306 1.306 0 01-2.273-.942l.047-.934a1.307 1.307 0 00-1.371-1.371l-.934.047a1.306 1.306 0 01-.942-2.273l.695-.627a1.308 1.308 0 000-1.939l-.695-.627a1.306 1.306 0 01.942-2.273l.934.047a1.305 1.305 0 001.371-1.371l-.047-.934a1.306 1.306 0 012.273-.942l.627.7z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:8.25,cy:15.751,r:1.875}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M18.638 5a.375.375 0 100 .75.375.375 0 000-.75h0"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M21.194 1.848a.75.75 0 01.971.971l-.5 1.286a.749.749 0 00.229.856l1.075.864a.75.75 0 01-.355 1.326l-1.363.211a.749.749 0 00-.627.626l-.211 1.364a.75.75 0 01-1.326.355l-.864-1.075a.751.751 0 00-.856-.23l-1.286.5a.75.75 0 01-.971-.971l.5-1.286a.749.749 0 00-.229-.856l-1.075-.865a.749.749 0 01.355-1.324l1.363-.211a.751.751 0 00.627-.627l.211-1.362a.749.749 0 011.325-.355l.865 1.075a.75.75 0 00.856.229l1.286-.501z"})))},Warning:function SvgWarning(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M12 16.5a.375.375 0 100 .75.375.375 0 000-.75h0m0-3V5.25"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle",{cx:12,cy:12,r:11.25})))},Zone:function SvgZone(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{stroke:props.color,strokeWidth:props.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M2.724.827A1.5 1.5 0 00.75 2.25V19.5c0 .593.35 1.13.891 1.371l5.306 2.25c.355.157.757.171 1.122.039l7.143-2.844a1.5 1.5 0 011.07.017l4.911 1.93a1.501 1.501 0 002.057-1.392V4.116c0-.663-.434-1.247-1.069-1.437L16.161.873a1.502 1.502 0 00-.825-.01l-7.4 2.084c-.286.078-.588.07-.869-.024L2.724.827z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M3.75 4.5v14.25l3.75 1.5 8.25-3 4.5 1.5V5.25l-4.5-1.5L7.5 6z"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M3.75 9.879l3.75 1.5 3.75-1.5m3-5.72v3.904m-10.5 6.316L7.5 15.75l2.25-.621v4.303m4.5-1.637V14.25l1.5-.75 4.5 1.5"})))}};let _t;const IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t||(_t=(t=>t)`
[stroke]{
  stroke: ${0};
}
`),({theme:theme,color:color})=>theme.colors.icons[color]),Icon=({icon:icon,size:_size=24,weight:_weight="regular",color:_color="mono"})=>{const iconWeight=dimensions.icons.weights[_weight],IconSVG=(key=icon,obj=>obj[key])(IconSVGs);var key;if(icon in IconSVGs&&IconSVG)return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper,{color:_color},IconSVG({size:_size,weight:iconWeight,color:"#666"}));{const capitalizedIconName=icon.charAt(0).toUpperCase()+icon.slice(1),tip=capitalizedIconName in IconSVGs?`Did you mean '${capitalizedIconName}'?`:"";return console.error(`Missing SVG: No SVG found for reference '${icon}'. ${tip}`),null}};let _t$1,_t2,_t3,_$1=t=>t;Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t$1||(_t$1=_$1`
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
`));let _t$2,_t2$1,_t3$1,_t4,_$2=t=>t;const IconButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t$2||(_t$2=_$2`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 14px;

  font-family: ${0};
  ${0};
  ${0};

`),({theme:theme})=>theme.fontFamily.ui,({type:type,theme:theme})=>theme.styles.feedbackBar[type],({theme:theme})=>theme.typography.feedbackBar.message),IconNames={error:"Critical",warning:"BigWarning",success:"Success",info:"Information",neutral:"Information"},MessageBox=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4||(_t4=_$2`
  margin-left: 15px;
  flex: 1;
`)),AlertBar=({type:_type="info",message:message})=>{const[dismiss,setDismiss]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setDismiss(!1)},[message]),message&&!dismiss?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container,{type:_type},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:IconNames[_type],color:"inverse"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageBox,null,message),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconButton,{onClick:()=>setDismiss(!0)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"CloseCompact",color:"inverse"}))):null};let _t$3,_t2$2,_$3=t=>t;const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t$3||(_t$3=_$3`
  ${0};

  overflow: hidden;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 20px;
  outline: none;

  button + button {
    margin-left: 20px;
  }

`),({theme:theme,design:design,size:size})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$2||(_t2$2=_$3`

    ${0};
    height: ${0};

    ${0};
    font-family: ${0};

    // No transition at this time as we're using a gradient in the default view. Requires work to make smooth.
    // transition: background ${0} ${0};

    &:hover {
      background: ${0};
    }

    &:active {
      background: ${0};
    }

    &:disabled {
      background: ${0};
    }

  `),theme.styles.form.button[design].default,theme.dimensions.form.button[size],theme.typography.form.button[design][size],theme.fontFamily.ui,theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.styles.form.button[design].hover.backgroundColor,theme.styles.form.button[design].active.backgroundColor,theme.styles.form.button[design].disabled.backgroundColor)),Button=({design:_design="primary",size:_size="normal",children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton,Object.assign({type:"button"},{design:_design,size:_size},props),children);let _t$4,_t2$3,_t3$2,_t4$1,_t5,_t6,_t7,_$4=t=>t;const TextContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$4||(_t$4=_$4`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 20px;
  ${0}

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$3||(_t2$3=_$4`
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
  `),position&&"left"===position?0:2)),InnerContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5||(_t5=_$4`
  display: flex;
  height: inherit;


  ${0}

`),({position:position})=>position&&"left"===position?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6||(_t6=_$4`
    margin-right: -20px;
  `)):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7||(_t7=_$4`
    margin-left: -20px;
  `))),ButtonWithIcon=({design:design,size:size,onClick:onClick,disabled:disabled,position:position,icon:icon,children:children})=>{const iconSize="large"===size?20:16,iconColor="secondary"===design?"dimmed":"inverse";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button,Object.assign({disabled:disabled},{design:design,size:size,onClick:onClick,disabled:disabled}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer,null,children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconContainer,Object.assign({},{design:design,position:position}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:icon,size:iconSize,color:iconColor,weight:"heavy"}))))};let _t$5,_t2$4,_t3$3,_t4$2,_$5=t=>t;const circumference=radius=>6.2832*radius,rotate=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_t2$4||(_t2$4=_$5`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`)),BaseCircle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t3$3||(_t3$3=_$5`
  stroke: ${0};
  fill: none;
`),({theme:theme,styling:styling})=>theme.styles.indicators.spinner[styling].base.borderColor),RotatingCircle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t4$2||(_t4$2=_$5`
  stroke: ${0};
  fill: none;
  stroke-dasharray: ${0};
  stroke-dashoffset: ${0};
  animation:
    ${0} 4s linear infinite,
    ${0} 1s linear infinite;
  stroke-linecap: round;
`),({theme:theme,styling:styling})=>theme.styles.indicators.spinner[styling].top.borderColor,({r:r})=>circumference(r),({r:r})=>6.2832*r/2,({r:r})=>(radius=>{const c=circumference(radius);return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_t$5||(_t$5=_$5`
    0% {
      stroke-dashoffset: -${0};
    }
    50% {
      stroke-dashoffset: -${0};
    }
    100% {
      stroke-dashoffset: -${0};
    }
  `),.85*c,.5*c,.85*c)})(r),rotate),sizeGuide={small:16,medium:24,large:36,xlarge:48},Spinner=({size:_size="medium",styling:_styling="primary"})=>{const sizeVal=sizeGuide[_size],strokeWidth=sizeVal/5.333,circleRadius=sizeVal/2-strokeWidth/2;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{viewBox:`-${sizeVal/2} -${sizeVal/2} ${sizeVal} ${sizeVal}`,width:sizeVal,height:sizeVal,xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseCircle,{cx:"0",cy:"0",r:circleRadius,strokeWidth:strokeWidth,styling:_styling}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RotatingCircle,{cx:"0",cy:"0",r:circleRadius,strokeWidth:strokeWidth,styling:_styling}))};let _t$6,_t2$5,_t3$4,_t4$3,_t5$1,_t6$1,_t7$1,_t8,_t9,_$6=t=>t;const TextContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$6||(_t$6=_$6`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  ${0}

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$5||(_t2$5=_$6`
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
    transition:
      flex ${0} ${0} ${0},
      opacity ${0} ${0};

    order: ${0};
    background: ${0};
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,theme.animation.speed.slow,theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,position&&"left"===position?0:2,theme.styles.form.button[design].actionArea)),InnerContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$1||(_t5$1=_$6`
  display: flex;
  height: inherit;


  ${0}

  ${0}
`),({position:position,loading:loading})=>position&&"left"===position?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$1||(_t6$1=_$6`
  margin-right: ${0};
  `),"true"===loading?"-20px":"0"):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$1||(_t7$1=_$6`
  margin-left: ${0};
  `),"true"===loading?"-20px":"0"),({loading:loading,theme:theme})=>"true"===loading?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8||(_t8=_$6`

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
  `),LoadingContainer)),ButtonWithLoading=({design:_design="primary",size:_size="normal",onClick:onClick,disabled:disabled,position:position,loading:loading,children:children,...rest})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button,Object.assign({disabled:disabled||loading},{design:_design,size:_size,onClick:onClick},rest),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerContainer$1,{loading:loading.toString()},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer$1,null,children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingContainer,Object.assign({},{design:_design,position:position}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner,{size:"small",styling:_design}))));let _t$7,_t2$6,_t3$5,_t4$4,_t5$2,_t6$2,_t7$2,_t8$1,_t9$1,_t10,_t11,_t12,_t13,_t14,_$7=t=>t;const ActionContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$7||(_t$7=_$7`
  position: absolute;
  right: 0;
  top: 0;
`)),InputActionButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button.attrs({type:"button"})(_t2$6||(_t2$6=_$7`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`)),FeedbackContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$5||(_t3$5=_$7`
  flex-shrink: 0;

  background-color: transparent;
  ${0};

  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$4||(_t4$4=_$7`
    border: 1px solid ${0};
  `),theme.styles.form.input.default.normal.borderColor)),FeedbackMessage=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$2||(_t5$2=_$7`
  flex: 0 1 400px;
  padding: 0 10px 0 0;

  ${0};
`),({theme:theme})=>theme.typography.form.feedback.message),FeedbackIcon=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$2||(_t6$2=_$7`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
`)),StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t7$2||(_t7$2=_$7`
  ${0};

  height: 100%;
  width: 100%;
  border-radius: 3px;

  padding: 0 15px 0 15px;
  box-sizing: border-box;
  outline: none;

  ${0};
`),({theme:theme,fieldState:fieldState})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$1||(_t8$1=_$7`
    min-height: ${0};
    font-family: ${0};
    border: 1px solid ${0};
  `),theme.dimensions.form.input.height,theme.fontFamily.data,theme.styles.form.input[fieldState].normal.borderColor),({theme:{typography:typography}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$1||(_t9$1=_$7`
    ${0};
    &::placeholder {
      ${0};
    }
  `),typography.form.input.value.normal,typography.form.input.placeholder.normal)),InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t10||(_t10=_$7`

  flex: 1;
  position: relative;

  ${0}

`),({hasAction:hasAction})=>hasAction&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11||(_t11=_$7`
    ${0}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `),StyledInput)),Container$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t12||(_t12=_$7`
  display: flex;
  position: relative;

  ${0}{
    ${0};

    &:focus {}

    ${0}
  }

  ${0} {
    background: ${0};
    border-color: ${0};

    ${0}
  }

  &:focus-within ${0} {
    ${0};
  }

`),StyledInput,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].normal,({fieldState:fieldState})=>-1===["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t13||(_t13=_$7`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `)),FeedbackContainer,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].normal.borderColor,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].normal.borderColor,({fieldState:fieldState})=>-1!==["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t14||(_t14=_$7`
      display:none;
    `)),InputContainer,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].focused),Input=({type:_type="text",placeholder:_placeholder="",defaultValue:defaultValue,fieldState:_fieldState="default",feedbackMessage:feedbackMessage,actionCallback:actionCallback,actionIcon:actionIcon,postfix:postfix,...props})=>{const isActionButton=void 0!==actionCallback;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$1,{fieldState:_fieldState||"default"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer,{hasAction:isActionButton},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput,Object.assign({fieldState:_fieldState||"default",disabled:"disabled"===_fieldState||"processing"===_fieldState,type:_type,placeholder:_placeholder,defaultValue:defaultValue},props)),isActionButton?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputActionButton,{onClick:actionCallback},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:actionIcon,color:"primary"}))):null),_fieldState?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeedbackContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeedbackIcon,null,(fieldState=>{switch(fieldState){case"default":case"disabled":break;case"required":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Required",size:20,color:"inverse"});case"valid":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Success",size:20,color:"inverse"});case"invalid":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Invalid",size:20,color:"inverse"});case"processing":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner,{size:"medium",styling:"primary"})}})(_fieldState)),feedbackMessage?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeedbackMessage,null,feedbackMessage):null):null)};let _t$8,_t2$7,_$8=t=>t;const StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.label(_t$8||(_t$8=_$8`
  font-family: ${0};
  display: block;
  color: hsl(207, 5%, 57%);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`),({theme:theme})=>theme.fontFamily.ui),LabelText=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.span(_t2$7||(_t2$7=_$8`
  display: block;
  margin-bottom: 10px;
`)),Label=({htmlFor:htmlFor,labelText:labelText,children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLabel,Object.assign({htmlFor:htmlFor},props),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabelText,null,labelText),children);let _t$9,_t2$8,_t3$6,_t4$5,_t5$3,_t6$3,_t7$3,_t8$2,_t9$2,_$9=t=>t;const StyledInput$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t$9||(_t$9=_$9`
  ${0};

  height: 100%;
  width: 100%;
  border-radius: 3px;

  padding: 0 22px 0 10px;
  box-sizing: border-box;
  outline: none;

  ${0};

  ${0}

`),({theme:theme,fieldState:fieldState})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$8||(_t2$8=_$9`
    min-height: 30px;
    font-family: ${0};
    border: 1px solid ${0};
  `),theme.fontFamily.data,theme.styles.form.input[fieldState].normal.borderColor),({theme:{typography:typography}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$6||(_t3$6=_$9`
    ${0};
    &::placeholder {
      ${0};
    }
  `),typography.form.input.value.compact,typography.form.input.placeholder.compact),p=>p.padRight&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$5||(_t4$5=_$9`
    padding-right: ${0}px;
  `),p.padRight+17)),InputContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$3||(_t5$3=_$9`

  flex: 1;
  position: relative;

  ${0}

`),({hasAction:hasAction})=>hasAction&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$3||(_t6$3=_$9`
    ${0}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `),StyledInput$1)),UnitKey=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t7$3||(_t7$3=_$9`
  position: absolute;
  right: 10px;
  bottom: 0;
  top:0;
  font-family: ${0};
  font-size: 12px;
  color: #99a1a3;
  line-height:30px;
`),({theme:theme})=>theme.fontFamily.ui),Container$2=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t8$2||(_t8$2=_$9`

  display: flex;
  position: relative;

  ${0}{
    ${0};

    &:focus {}

    ${0}
  }

  &:focus-within ${0} {
    border-color: ${0};
  }

`),StyledInput$1,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].compact,({fieldState:fieldState})=>-1===["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$2||(_t9$2=_$9`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `)),InputContainer$1,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].focused.borderColor),SmallInput=({unit:unit,label:label,name:name,type:_type="text",placeholder:_placeholder="",defaultValue:defaultValue,fieldState:_fieldState="default",className:className,...props})=>{const unitElement=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[unitElementWidth,setUnitElementWidth]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{unitElement&&unitElement.current&&setUnitElementWidth(unitElement.current.clientWidth||0)},[unitElement,setUnitElementWidth,unit]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$2,{className:className,fieldState:_fieldState||"default"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label,{labelText:label,htmlFor:name||""},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputContainer$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput$1,Object.assign({padRight:unitElementWidth,fieldState:_fieldState||"default",type:_type,placeholder:_placeholder,defaultValue:defaultValue},props)),unit?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnitKey,{ref:unitElement},unit):null)))};let _t$a;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button.attrs({type:"button"})(_t$a||(_t$a=(t=>t)`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
`));let _t$b,_t2$9,_t3$7,_t4$6,_t5$4,_t6$4,_t7$4,_t8$3,_t9$3,_t10$1,_t11$1,_$b=t=>t;var SwitchPosition;!function(SwitchPosition){SwitchPosition[SwitchPosition.Off=0]="Off",SwitchPosition[SwitchPosition.On=1]="On",SwitchPosition[SwitchPosition.Neutral=2]="Neutral",SwitchPosition[SwitchPosition.Locked=3]="Locked"}(SwitchPosition||(SwitchPosition={}));const RealInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t$b||(_t$b=_$b`
  display: none;
`)),SwitchOuter=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$9||(_t2$9=_$b`
  border: 1px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
`)),getPositionKey=switchPos=>{switch(switchPos){case SwitchPosition.Off:return"off";case SwitchPosition.On:return"on";case SwitchPosition.Neutral:return"neutral";case SwitchPosition.Locked:return"locked";default:return"off"}},SwitchInner=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$7||(_t3$7=_$b`
  position: absolute;
  box-sizing: border-box;
`)),LabelText$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.span(_t4$6||(_t4$6=_$b`
  font-family: ${0};

  flex: 1;
  margin-left: 10px;
  display: block;

  line-height: ${0};

  ${0};
`),({theme:theme})=>theme.fontFamily.ui,p=>p.theme.dimensions.form.switch.outer.height,p=>p.theme.typography.form.input.label),IconWrapper$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$4||(_t5$4=_$b`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`)),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$4||(_t6$4=_$b`
  margin-top: 1px;
`)),Container$3=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.label(_t7$4||(_t7$4=_$b`
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
    `),theme.dimensions.form.switch.inner,theme.dimensions.form.switch.positions[getPositionKey(position)],theme.dimensions.form.switch.positions.top,theme.animation.speed.normal,theme.animation.easing.primary.out,theme.animation.speed.normal,theme.animation.easing.primary.out,theme.animation.speed.normal,theme.animation.easing.primary.out,theme.styles.form.switch[activeTheming][themeState].inner),p=>"locked"===p.activeTheming&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$3||(_t9$3=_$b`
      width: calc(100% - ${0}px);
    `),2*parseInt(p.theme.dimensions.form.switch.positions.locked)),p=>p.loading&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t10$1||(_t10$1=_$b`
      background: transparent;
      top: 1px;
    `)),SwitchOuter,({theme:theme,activeTheming:activeTheming,themeState:themeState})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$1||(_t11$1=_$b`
      ${0};
      ${0}};
      flex: 0 0 ${0}};
    `),theme.styles.form.switch[activeTheming][themeState].outer,theme.dimensions.form.switch.outer,theme.dimensions.form.switch.outer.width),SwitchInner,p=>p.useIntent&&((left,checked)=>{let offset=checked?-2:2;return(parseInt(left)+offset).toString()+"px"})(p.theme.dimensions.form.switch.positions[getPositionKey(p.position)],p.checked)),Switch=({state:_state="default",leftTheme:_leftTheme="off",rightTheme:_rightTheme="on",labelText:labelText,onChangeCallback:onChangeCallback,checked:_checked=!1})=>{var _inputRef$current4;const inputRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[position,setPosition]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(_checked?SwitchPosition.On:SwitchPosition.Off),[activeTheming,setActiveTheming]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(_leftTheme),[switchState,setSwitchState]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)("default"),positionSwitch=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var _inputRef$current,_inputRef$current2;(null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current?void 0:_inputRef$current.checked)?(setPosition(SwitchPosition.On),setActiveTheming(_rightTheme)):(null===(_inputRef$current2=inputRef.current)||void 0===_inputRef$current2?void 0:_inputRef$current2.checked)||(setPosition(SwitchPosition.Off),setActiveTheming(_leftTheme))},[setPosition,setActiveTheming,_leftTheme,_rightTheme,inputRef]),updateThemeChoice=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{position===SwitchPosition.On?setActiveTheming(_rightTheme):position===SwitchPosition.Off&&setActiveTheming(_leftTheme)},[position,_rightTheme,_leftTheme]);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{updateThemeChoice()},[_leftTheme,_rightTheme,updateThemeChoice]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setSwitchState(stateCheck(_state))},[_state,setSwitchState]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{"locked"===_state?(setPosition(SwitchPosition.Locked),setActiveTheming("locked")):"failure"===_state?(setPosition(SwitchPosition.Neutral),setActiveTheming("failure")):positionSwitch()},[_state,setPosition,positionSwitch]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$3,{onChange:e=>{var _inputRef$current3;(positionSwitch(),onChangeCallback)&&onChangeCallback((null===(_inputRef$current3=inputRef.current)||void 0===_inputRef$current3?void 0:_inputRef$current3.checked)||!1)},activeTheming:activeTheming,loading:"loading"===_state,useIntent:"default"===_state||"failure"===_state,themeState:switchState,position:position,checked:null===(_inputRef$current4=inputRef.current)||void 0===_inputRef$current4?void 0:_inputRef$current4.checked},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitchOuter,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitchInner,null,"failure"===_state?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Exclamation",color:"danger",size:18,weight:"regular"})):null,"locked"===_state?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Locked",color:"dimmed",size:10,weight:"heavy"})):null,"loading"===_state?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpinnerWrapper,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spinner,{size:"small",styling:"simple"})):null)),labelText?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabelText$1,null,labelText):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RealInput,{ref:inputRef,type:"checkbox",disabled:"default"!==_state&&"failure"!==_state,defaultChecked:_checked}))},stateCheck=state=>{switch(state){case"locked":case"failure":return"default";default:return state}};let _t$c,_t2$a,_t3$8,_t4$7,_t5$5,_t6$5,_t7$5,_t8$4,_t9$4,_t10$2,_$c=t=>t;var CheckboxState;!function(CheckboxState){CheckboxState.Off="off",CheckboxState.On="on",CheckboxState.Indeterminate="indeterminate"}(CheckboxState||(CheckboxState={}));const RealInput$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t$c||(_t$c=_$c`
  display: none;
`)),CheckboxOuter=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$a||(_t2$a=_$c`
  cursor: pointer;

  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
`)),CheckboxInner=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$8||(_t3$8=_$c`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`)),IconWrapper$2=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$7||(_t4$7=_$c`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`)),Container$4=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.label(_t5$5||(_t5$5=_$c`
  user-select: none;


  ${0}

  ${0}

  ${0}

`),({visualState:visualState,disabled:disabled,theme:{styles:styles}})=>visualState===CheckboxState.Off&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$5||(_t6$5=_$c`
    ${0}{
      ${0};
    }

    &:hover ${0} {
      ${0};
    }

    ${0}
  `),CheckboxOuter,styles.form.checkbox.unchecked.default,CheckboxOuter,styles.form.checkbox.unchecked.hover,disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$5||(_t7$5=_$c`
      ${0}{
        ${0};
      }
    `),CheckboxOuter,styles.form.checkbox.unchecked.disabled)),({visualState:visualState,disabled:disabled,theme:{styles:styles}})=>visualState===CheckboxState.On&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$4||(_t8$4=_$c`
    ${0}{
      ${0};
      border: none;
    }

    &:hover ${0}{
      ${0};
      border: none;
    }

    ${0}
  `),CheckboxOuter,styles.form.checkbox.checked.default,CheckboxOuter,styles.form.checkbox.checked.hover,disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$4||(_t9$4=_$c`
      ${0}{
        ${0};
      }
    `),CheckboxOuter,styles.form.checkbox.checked.disabled)),({visualState:visualState,theme:{styles:styles}})=>visualState===CheckboxState.Indeterminate&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t10$2||(_t10$2=_$c`
    ${0}{
      ${0};
    }

    &:hover ${0}{
      ${0};
    }



  `),CheckboxOuter,styles.form.checkbox.indeterminate.default,CheckboxOuter,styles.form.checkbox.indeterminate.hover)),Checkbox=({indeterminate:_indeterminate=!1,disabled:disabled,checked:_checked=!1,onChangeCallback:onChangeCallback})=>{const[isChecked,setIsChecked]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(_checked),[visualState,setVisualState]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(_checked?CheckboxState.On:CheckboxState.Off);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let state=_checked?CheckboxState.On:CheckboxState.Off;setVisualState(state)},[isChecked,setVisualState]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setIsChecked(_checked)},[_checked,setIsChecked]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$4,Object.assign({onChange:e=>{const checked=e.target.checked;setIsChecked(checked),onChangeCallback&&onChangeCallback(checked)}},{indeterminate:_indeterminate,disabled:disabled,visualState:visualState}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckboxOuter,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckboxInner,null,visualState===CheckboxState.On?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper$2,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"CloseCompact",color:"inverse",size:18,weight:"regular"})):null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RealInput$1,Object.assign({type:"checkbox",checked:isChecked,readOnly:!0},{disabled:disabled}))," ")},PasswordField=({name:name,label:label,fieldState:fieldState,feedbackMessage:feedbackMessage,...props})=>{const[showValue,setShowValue]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[actionIcon,setActionIcon]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)("PasswordHide");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label,{htmlFor:name,labelText:label},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input,Object.assign({type:showValue?"text":"password",actionCallback:()=>{const newValue=!showValue;setShowValue(newValue),setActionIcon(newValue?"PasswordShow":"PasswordHide")},actionIcon:actionIcon},{name:name,fieldState:fieldState,feedbackMessage:feedbackMessage,...props})))},TextField=({name:name,label:label,fieldState:_fieldState="default",feedbackMessage:feedbackMessage,type:_type,...props})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label,{htmlFor:name,labelText:label},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input,Object.assign({type:"text"},{fieldState:_fieldState,feedbackMessage:feedbackMessage,...props})));let _t$d,_t2$b,_$d=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.form(_t$d||(_t$d=_$d`
  ${0}
`),({spacing:spacing})=>spacing&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$b||(_t2$b=_$d`
      & >  ${0} {
        margin-bottom: ${0};
      }
  `),StyledLabel,spacing));let _t$e,_t2$c,_t3$9,_t4$8,_t5$6,_t6$6,_t7$6,_t8$5,_t9$5,_t10$3,_t11$2,_$e=t=>t;const Container$5=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$e||(_t$e=_$e`
  display: flex;
  flex-direction: column;

  ${0}
`),({hide:hide})=>hide&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$c||(_t2$c=_$e`
    display: none;
  `))),Label$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.label(_t3$9||(_t3$9=_$e`
  ${0}
  padding: 12px;
  border-bottom: ${0} 1px solid;

  // ${0};

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$8||(_t4$8=_$e`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,({theme:theme})=>theme.typography.filters.datepicker.metaHeader.default),({theme:theme})=>theme.colors.divider,({theme:theme})=>theme.typography.filters.datepicker.metaHeader.active),Item=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$6||(_t5$6=_$e`
  padding: 12px;
  display: flex;
  justify-content: left;
`)),IconWrap=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$6||(_t6$6=_$e`
  flex: 0 0 40px;
`)),Input$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t7$6||(_t7$6=_$e`
  ${0}

  ${0};

  width: 100%;
  border: none;
  border: transparent 1px solid;
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;

  &:focus, &:hover {
    border-color: blue;
  }

  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$5||(_t8$5=_$e`
    font-family: ${0};
  `),theme.fontFamily.data),({theme:theme})=>theme.typography.filters.value,({readOnly:readOnly})=>readOnly&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$5||(_t9$5=_$e`
    border-color: transparent;
  `))),TimeColon=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t10$3||(_t10$3=_$e`
  flex: 0 0 20px;
`)),InputWrap=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t11$2||(_t11$2=_$e`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus-within {

    background: ${0};
    box-shadow: 0px 0px 0px 5px ${0};

    ${0} {
      border-color: ${0};
    }

    ${0}{
      color: ${0};
      text-align: center;
    }
  }
`),({theme:theme})=>theme.colors.menu.passive,({theme:theme})=>theme.colors.menu.passive,Input$1,({theme:theme})=>theme.colors.divider,TimeColon,({theme:theme})=>theme.colors.pureTop),DateTimeBlock=({allowAfterMidnight:_allowAfterMidnight=!1,title:title,hasDate:hasDate,hasTime:hasTime,date:date,time:time,setTimeCallback:setTimeCallback,setDateCallback:setDateCallback})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$5,{hide:!hasDate&&!hasTime},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label$1,null,title),hasDate&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrap,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Left",color:"dimmed",size:10})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrap,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input$1,{type:"text",readOnly:!0,value:Object(date_fns__WEBPACK_IMPORTED_MODULE_2__.a)(date||new Date,"yyyy/MM/dd"),onChange:({target:target})=>setDateCallback()}))),hasTime&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrap,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Left",color:"dimmed",size:10})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrap,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input$1,{type:"number",min:"0",max:_allowAfterMidnight?24:23,value:clockFormatNumber(time.hours||0),onChange:({target:target})=>setTimeCallback("hours",parseInt(target.value))}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeColon,null,":"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input$1,{type:"number",min:"0",max:"59",value:clockFormatNumber(time.minutes||0),onChange:({target:target})=>setTimeCallback("minutes",parseInt(target.value))})))),clockFormatNumber=value=>1===value.toString().length?"0"+value:value;let _t$f,_t2$d,_t3$a,_t4$9,_t5$7,_t6$7,_t7$7,_t8$6,_t9$6,_t10$4,_t11$3,_t12$1,_t13$1,_t14$1,_t15,_t16,_t17,_t18,_t19,_t20,_t21,_t22,_t23,_t24,_t25,_t26,_t27,_$f=t=>t;const Container$6=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$f||(_t$f=_$f`
  display: flex;
`)),DateTimeArea=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$d||(_t2$d=_$f`
  border-right: ${0} 1px solid;
  width: 170px;
  display: flex;
  flex-direction: column;

`),({theme:theme})=>theme.colors.divider),TimeZoneOption=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$a||(_t3$a=_$f`
  border-top: ${0} 1px solid;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`),({theme:theme})=>theme.colors.divider),TimeZoneLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$9||(_t4$9=_$f`
  ${0}

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$7||(_t5$7=_$f`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.filters.subOption.label)),TimeZoneValue=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$7||(_t6$7=_$f`
  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$7||(_t7$7=_$f`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.data,theme.typography.filters.subOption.value)),CalendarArea=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t8$6||(_t8$6=_$f`
  user-select: none;
`)),CalendarHeader=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t9$6||(_t9$6=_$f`
  display: flex;
  height: 70px;
  border-bottom: ${0} 1px solid;
  text-align: center;
`),({theme:theme})=>theme.colors.divider),CurrentMonth=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t10$4||(_t10$4=_$f`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  ${0};
  span {
    display: block;
    flex: 0;
    ${0};
  }
`),({theme:theme})=>theme.typography.filters.datepicker.focusedMonth,({theme:theme})=>theme.typography.filters.datepicker.focusedYear),IconWrap$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t11$3||(_t11$3=_$f``)),PaginateMonth=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t12$1||(_t12$1=_$f`
  cursor: pointer;
  flex: 0 0 90px;

  border: none;
  background: transparent;
  outline: none;

  ${0};

  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background: transparent;
    ${0};

    ${0}{
      [stroke]{
        stroke: ${0};
      }
    }
  }

`),({theme:theme})=>theme.typography.filters.datepicker.monthLink.default,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t13$1||(_t13$1=_$f`
      background: ${0};
      ${0}
    `),theme.colors.menu.active,theme.typography.filters.datepicker.monthLink.hover),IconWrap$1,({theme:theme})=>theme.colors.pureBase),CalBody=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t14$1||(_t14$1=_$f`
  padding: 5px 0;
`)),CalRow=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t15||(_t15=_$f`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  height: 40px;
  box-sizing: border-box;

  padding: 0 10px;
`)),CalHRow=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(CalRow)(_t16||(_t16=_$f`
  border-bottom: ${0} 1px solid;
`),({theme:theme})=>theme.colors.divider),CalCell=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t17||(_t17=_$f`

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  ${0};

  ${0}

`),({theme:theme})=>theme.typography.filters.datepicker.calendar.default,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t18||(_t18=_$f`
    font-family: ${0};
  `),theme.fontFamily.data)),CalHCell=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(CalCell)(_t19||(_t19=_$f`
  ${0};
`),({theme:theme})=>theme.typography.filters.datepicker.calendar.header),CalCellB=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(CalCell)(_t20||(_t20=_$f`
  cursor: pointer;
  position: relative;

  ${0}

  ${0}

  ${0}

  ${0}

  ${0}

  ${0}

  ${0}

`),({thisMonth:thisMonth})=>!thisMonth&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t21||(_t21=_$f`
    ${0};
  `),({theme:theme})=>theme.typography.filters.datepicker.calendar.otherMonth),({isToday:isToday})=>isToday&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t22||(_t22=_$f`
    border: 2px solid ${0};
  `),({theme:theme})=>theme.colors.menu.passive),({state:state,theme:theme})=>("single"===state||"start"===state||"end"===state)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t23||(_t23=_$f`
    background: ${0};
    ${0};
  `),theme.colors.menu.active,theme.typography.filters.datepicker.calendar.active),({state:state})=>"start"===state&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t24||(_t24=_$f`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `)),({state:state})=>"end"===state&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t25||(_t25=_$f`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `)),({state:state})=>"insideHover"===state&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t26||(_t26=_$f`
    background: ${0} !important;
  `),({theme:theme})=>theme.colors.divider),({state:state})=>"inside"===state&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t27||(_t27=_$f`
    background: ${0};
    border-radius: 0;
    opacity: 1;

    &:nth-child(7n+1), &:nth-child(7n){
      &::after {
        background: ${0};
        display: block;
        content: '';
        position: absolute;
        left: -10px;
        width: 10px;
        top: 0;
        height: 40px;
      }
    }

    &:nth-child(7n)::after {
      left: auto;
      right: -10px;
    }
  `),({theme:theme})=>theme.colors.menu.passive,({theme:theme})=>theme.colors.menu.passive)),DayGuide=["S","M","T","W","T","F","S"],DatePicker=props=>{const{updateCallback:updateCallback}=props,now=new Date,defaultTimeRange={start:{hours:0,minutes:0,seconds:0,milliseconds:0},end:{hours:24,minutes:0,seconds:0,milliseconds:0}},[focusedMonth,setFocusedMonth]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(now),[hoverDay,setHoverDay]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[selectedRange,setSelectedRange]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(singleDayToInterval(now)),[timeRange,setTimeRange]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultTimeRange),[targetedDate,setTargetedDate]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)("start"),[dateMode,setDateMode]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)("interval"),[timeMode,setTimeMode]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.timeMode),weeksOfMonth=Object(date_fns__WEBPACK_IMPORTED_MODULE_3__.a)({start:Object(date_fns__WEBPACK_IMPORTED_MODULE_4__.a)(focusedMonth),end:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(focusedMonth)});Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setTimeRange(defaultTimeRange)},[timeMode,setTimeRange]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setTimeMode(props.timeMode),setDateMode(props.dateMode)},[props,setTimeMode,setDateMode]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{updateCallback(selectedRange)},[selectedRange,updateCallback]);const onCellClick=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(day=>{"single"===dateMode?setSelectedRange(singleDayToInterval(day)):"end"===targetedDate&&Object(date_fns__WEBPACK_IMPORTED_MODULE_6__.a)(day,selectedRange.start)?(setSelectedRange({start:Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(selectedRange.start,timeRules(timeRange.start)),end:Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(day,timeRules(timeRange.end))}),setTargetedDate("done")):"start"!==targetedDate&&"end"!==targetedDate&&"done"!==targetedDate||(setSelectedRange({start:Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(day,timeRules(timeRange.start)),end:Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(day,timeRules(timeRange.end))}),setTargetedDate("end"))},[timeRange,selectedRange,setSelectedRange,targetedDate,setTargetedDate,date_fns__WEBPACK_IMPORTED_MODULE_6__.a,singleDayToInterval]),updateTimeInDate=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((target,unit,value)=>{const{start:start,end:end}=timeRange,originalValue=timeRange[target][unit];"start"===target?start[unit]=value:end[unit]=value,end.minutes=24===end.hours&&end.minutes>0?0:end.minutes,timeLaterOrSame(start,end)&&("start"===target?start[unit]=originalValue:end[unit]=originalValue),setTimeRange({start:start,end:end}),setSelectedRange({start:Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(selectedRange.start,timeRules(start)),end:Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(selectedRange.end,timeRules(end))})},[selectedRange,setSelectedRange,setTimeRange]),updateStartTime=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((unit,value)=>{updateTimeInDate("start",unit,value)},[updateTimeInDate]),updateEndTime=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((unit,value)=>{updateTimeInDate("end",unit,value)},[updateTimeInDate]),updateStartDate=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{},[]),updateEndDate=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{},[]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$6,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateTimeArea,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateTimeBlock,{title:"From",hasDate:!0,hasTime:"off"!=timeMode,date:selectedRange.start,time:timeRange.start,setTimeCallback:updateStartTime,setDateCallback:updateStartDate}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateTimeBlock,{title:"To",hasDate:"interval"==dateMode,hasTime:"interval"==timeMode,date:selectedRange.end,time:timeRange.end,allowAfterMidnight:!0,setTimeCallback:updateEndTime,setDateCallback:updateEndDate}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeZoneOption,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeZoneLabel,null,"Timezone"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeZoneValue,null,"JST"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarArea,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarHeader,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaginateMonth,{onClick:()=>setFocusedMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__.a)(focusedMonth,-1))},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrap$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Left",color:"dimmed",size:10})),Object(date_fns__WEBPACK_IMPORTED_MODULE_2__.a)(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__.a)(focusedMonth,-1),"MMM")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentMonth,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,Object(date_fns__WEBPACK_IMPORTED_MODULE_2__.a)(focusedMonth,"yyyy")),Object(date_fns__WEBPACK_IMPORTED_MODULE_2__.a)(focusedMonth,"MMMM")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaginateMonth,{onClick:()=>setFocusedMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__.a)(focusedMonth,1))},Object(date_fns__WEBPACK_IMPORTED_MODULE_2__.a)(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__.a)(focusedMonth,1),"MMM"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrap$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Right",color:"dimmed",size:10})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalHRow,null,DayGuide.map((day,index)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalHCell,{key:index},day))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalBody,null,weeksOfMonth.map((week,index)=>{const days=Object(date_fns__WEBPACK_IMPORTED_MODULE_9__.a)({start:week,end:Object(date_fns__WEBPACK_IMPORTED_MODULE_10__.a)(week)});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalRow,{key:index},days.map((day,index)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalCellB,{key:index,onClick:()=>onCellClick(day),onMouseEnter:()=>setHoverDay(day),onMouseLeave:()=>setHoverDay(null),state:cellState(day,selectedRange),thisMonth:Object(date_fns__WEBPACK_IMPORTED_MODULE_11__.a)(day,focusedMonth),isToday:Object(date_fns__WEBPACK_IMPORTED_MODULE_12__.a)(day)},Object(date_fns__WEBPACK_IMPORTED_MODULE_2__.a)(day,"d"))))}))))},cellState=(day,interval,hoverDate)=>{let state="off";const singleDayRange=0===Object(date_fns__WEBPACK_IMPORTED_MODULE_13__.a)(interval).days;return(Object(date_fns__WEBPACK_IMPORTED_MODULE_14__.a)(day,interval)||Object(date_fns__WEBPACK_IMPORTED_MODULE_15__.a)(interval.start,day))&&(state=singleDayRange?"single":Object(date_fns__WEBPACK_IMPORTED_MODULE_15__.a)(interval.start,day)?"start":Object(date_fns__WEBPACK_IMPORTED_MODULE_15__.a)(interval.end,day)?"end":"inside"),state},singleDayToInterval=day=>({start:Object(date_fns__WEBPACK_IMPORTED_MODULE_16__.a)(day),end:Object(date_fns__WEBPACK_IMPORTED_MODULE_17__.a)(day)}),timeLaterOrSame=(startTime,endTime)=>3600*startTime.hours+60*startTime.minutes+startTime.seconds>=3600*endTime.hours+60*endTime.minutes+endTime.seconds,timeRules=time=>({hours:24===time.hours?23:time.hours,minutes:24===time.hours?59:time.minutes,seconds:24===time.hours?59:0,milliseconds:24===time.hours?999:0});let _t$g,_t2$e,_$g=t=>t;const Container$7=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$g||(_t$g=_$g`

  ${0};

  border-radius: 3px;
  position: relative;
  display: inline-flex;
  overflow: hidden;
  padding-top: 5px;

  &::before {
    ${0};
    content: '';

    display: block;
    height: 5px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
  }

`),({theme:theme})=>theme.styles.filters.dropdownContainer.background,({theme:theme})=>theme.styles.filters.dropdownContainer.topBorder),Inner=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$e||(_t2$e=_$g`
  display: inline-flex;
  flex-direction: row;
`)),FilterDropdownContainer=({height:height,children:children})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$7,Object.assign({},height),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner,null,children));let _t$h,_t2$f,_t3$b,_t4$a,_t5$8,_t6$8,_t7$8,_t8$7,_t9$7,_t10$5,_t11$4,_t12$2,_t13$2,_t14$2,_t15$1,_t16$1,_t17$1,_$h=t=>t;const HandleTouchReactionKeyframes=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_t$h||(_t$h=_$h`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(3);
 }

 100% {
   transform: scale(1.75);
 }
`)),HandleMouseReactionKeyframes=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.e)(_t2$f||(_t2$f=_$h`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(0);
 }

 100% {
   transform: scale(0.5);
 }
`));styled_components__WEBPACK_IMPORTED_MODULE_1__.d.svg(_t3$b||(_t3$b=_$h`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: ${0};
  appearance: none;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleBase.fill),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t4$a||(_t4$a=_$h`
  fill: none;
  stroke: ${0};
  mask: url(#${0});
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleRingLayer.stroke,props=>props.maskID),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$8||(_t5$8=_$h`
  opacity: 0.65;
  cursor: pointer;
  transform: scale(1);

  ${0}

  ${0}

`),props=>props.touchDragging&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$8||(_t6$8=_$h`
    animation: ${0} 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `),HandleTouchReactionKeyframes),props=>props.mouseDragging&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$8||(_t7$8=_$h`
    animation: ${0} 0.25s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `),HandleMouseReactionKeyframes)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t8$7||(_t8$7=_$h`
  mix-blend-mode: multiply;
  fill: ${0};
  stroke: none;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleReactiveFill.fill),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t9$7||(_t9$7=_$h`
  fill: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleReactiveRing.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t10$5||(_t10$5=_$h`
  overflow: visible;
  mix-blend-mode: multiply;
  fill: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleContrastLayer.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t11$4||(_t11$4=_$h`
    mix-blend-mode: multiply;
    fill: url(#${0});
`),props=>props.fillID),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t12$2||(_t12$2=_$h`
  opacity: 0;
  pointer-events: none;
  ${0};

`),props=>props.showIndex&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t13$2||(_t13$2=_$h`
    opacity: 1;
  `))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.stop(_t14$2||(_t14$2=_$h`
  stop-color: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].stopStart.stopColor),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.stop(_t15$1||(_t15$1=_$h`
  stop-color: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].stopEnd.stopColor),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.text(_t16$1||(_t16$1=_$h`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  stroke: ${0};
  text-align: center;

  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;


`),({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandleText.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t17$1||(_t17$1=_$h`

`));let _t$i,_t2$g,_t3$c,_t4$b,_t5$9,_t6$9,_t7$9,_t8$8,_t9$8,_t10$6,_t11$5,_$i=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.line(_t$i||(_t$i=_$i`
  pointer-events: none;
  stroke: ${0};
  mix-blend-mode: multiply;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].contrastLine.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.line(_t2$g||(_t2$g=_$i`
  pointer-events: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].highlightLine.stroke);const GrabHandle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t3$c||(_t3$c=_$i`
  fill: ${0};
  stroke: ${0};
  opacity: 1;
  transition: opacity 250ms ease;
  cursor: grab;

  ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandle.fill,({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandle.stroke,props=>props.hide&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$b||(_t4$b=_$i`
    pointer-events: none;
    opacity: 0;
  `))),GrabHandleContrast=(styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$9||(_t5$9=_$i`
  opacity: 0;
  pointer-events: none;
  ${0};

`),props=>props.showIndex&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$9||(_t6$9=_$i`
    opacity: 1;
  `))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.text(_t7$9||(_t7$9=_$i`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  fill: ${0};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandleText.stroke),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.text(_t8$8||(_t8$8=_$i`
  text-align: center;
  fill: ${0};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].label.fill),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(GrabHandle)(_t9$8||(_t9$8=_$i`
  fill: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandleContrast.stroke));styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t10$6||(_t10$6=_$i`

  ${0}, ${0} {
    transition: r 250ms ease;
  }

  ${0};
`),GrabHandle,GrabHandleContrast,props=>props.showIndex&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$5||(_t11$5=_$i`
    ${0}, ${0} {
      pointer-events: none;
      r: ${0};
    }
  `),GrabHandle,GrabHandleContrast,1.75*props.originalRadius)),Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});let _t$j;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.circle(_t$j||(_t$j=(t=>t)`
  fill: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].point.fill);let _t$k,_t2$h,_t3$d,_t4$c,_$k=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$k||(_t$k=_$k`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */

`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.svg(_t2$h||(_t2$h=_$k`
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

`),props=>props.transculent&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$d||(_t3$d=_$k`
    background: hsla(0deg, 0%, 0%, 35%);
  `))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.img(_t4$c||(_t4$c=_$k`
  object-fit: contain;
  width:  100%;
  height: 100%;
`));let _t$l;const Video=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.video(_t$l||(_t$l=(t=>t)`
  /* width: 800px; */
`));let _t$m,_t2$i,_t3$e,_t4$d,_t5$a,_$m=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$m||(_t$m=_$m`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(({id:_id="1",enabled:enabled,peerAddress:peerAddress,maxConnectionAttempts:_maxConnectionAttempts=30,rtcConfiguration:_rtcConfiguration={},setStatus:_setStatus=(()=>{}),setError:_setError=(()=>{}),autoPlay:_autoPlay=!0,muted:_muted=!0,...props})=>{const[connectionAttempts,setConnectionAttempts]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),videoRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),webSocket=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),peerConnection=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);function handleIncomingError(error){_setError(error),closeWebSocket()}const onServerMessage=({data:_data=""})=>{if("HELLO"===_data)console.debug("Received HELLO"),_setStatus("Registered with server, waiting for offer.");else if(_data.startsWith("ERROR"))console.error("Received "+_data),handleIncomingError(_data);else{let msg;try{msg=JSON.parse(_data)}catch(e){return void(e instanceof SyntaxError?handleIncomingError("Error parsing incoming JSON: "+_data):handleIncomingError("Unknown error parsing response: "+_data))}peerConnection.current||function createCall(msg){if(setConnectionAttempts(0),console.debug("Creating RTCPeerConnection"),!msg.sdp)return void console.debug("WARNING: First message wasn't an SDP message!?");const pc=new RTCPeerConnection(_rtcConfiguration);peerConnection.current=pc,pc.addEventListener("track",onRemoteTrack),pc.addEventListener("icecandidate",({candidate:_candidate=null})=>{_candidate?webSocket.current?webSocket.current.send(JSON.stringify({ice:_candidate})):console.debug("no WS found on peer connection 'icecandidate' event... how?"):console.debug("All local ICE Candidates sent.")}),_setStatus("RTCPeerConnection created, waiting for SDP")}(msg),null!=msg.sdp?(console.debug("Received Remote SDP:"+JSON.stringify(msg.sdp)),(async description=>{if(!peerConnection.current||!webSocket.current)return;try{"offer"===description.type&&"stable"!==peerConnection.current.signalingState?await Promise.all([peerConnection.current.setLocalDescription({type:"rollback"}),peerConnection.current.setRemoteDescription(description)]):(description.sdp&&(description.sdp=description.sdp.replace(/profile-level-id=(640028|64001f|64002a);/,"")),await peerConnection.current.setRemoteDescription(new RTCSessionDescription(description)),_setStatus("Remote Description set"))}catch(error){return console.error("Error:",error),void _setError("Error Setting remote description")}if("offer"!==description.type)return;_setStatus("Creating Answer");try{const answer=await peerConnection.current.createAnswer();console.debug("Got local description: "+JSON.stringify(answer)),await peerConnection.current.setLocalDescription(answer)}catch(error){return console.error("Error:",error.message),void _setError("Error Creating Answer")}const message={sdp:peerConnection.current.localDescription};_setStatus("Sending Local Description");try{await webSocket.current.send(JSON.stringify(message)),_setStatus("Connected")}catch(error){console.error(error.name+": "+error.message),_setError(error.message)}})(msg.sdp)):null!=msg.ice?(console.debug("Received Remote ICE:"+JSON.stringify(msg.ice)),function onIncomingICE(ice){if(!peerConnection.current)return void console.error("peerConnection.current not found onIncomingICE ");const candidate=new RTCIceCandidate(ice);peerConnection.current.addIceCandidate(candidate).catch(_setError)}(msg.ice)):handleIncomingError("Unknown incoming JSON: "+msg)}};function onServerClose(event){console.debug("serverClose"),webSocket.current&&(_setStatus("Disconnected from server"),closePeerConnection(),null!==event&&1e3!==event.code&&enabled&&window.setTimeout(connectToPeer,3e3))}function onServerError(event){console.debug(event),_setError("Unable to connect to server"),closeWebSocket()}function connectToPeer(){if(console.debug("connectToPeer",connectionAttempts),connectionAttempts>=_maxConnectionAttempts)return void _setError("Too many connection attempts, aborting. Refresh page to try again");_setError(null);const peerId=function getPeerId(id){return"WRP_"+id+"_"+Math.floor(8990*Math.random()+10).toString()}(_id);_setStatus("Connecting to server "+peerAddress);const ws=new WebSocket(peerAddress);webSocket.current=ws,ws.addEventListener("open",()=>{const interval=setInterval(()=>{try{ws.send("HELLO "+peerId),clearInterval(interval),_setStatus("Registering with server (sent HELLO) for peer id: "+peerId)}catch(error){console.debug(error)}},3e3)}),ws.addEventListener("error",onServerError),ws.addEventListener("message",onServerMessage),ws.addEventListener("close",onServerClose),setConnectionAttempts(connectionAttempts+1)}function onRemoteTrack(event){videoRef.current&&videoRef.current.srcObject!==event.streams[0]&&(console.debug("Incoming stream"),videoRef.current.srcObject=event.streams[0],_setStatus("Adding Track"))}const closeWebSocket=async()=>{console.debug("closeWebSocket"),await closePeerConnection(),webSocket.current&&(await webSocket.current.close(),webSocket.current=null)},closePeerConnection=async()=>{console.debug("closePeerConnection"),peerConnection.current&&(await peerConnection.current.close(),peerConnection.current=null)};return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(!0===enabled?connectToPeer():webSocket.current&&webSocket.current.close(1e3,"WebRTC Disabled"),()=>{console.debug("cleanup"),closeWebSocket()}),[enabled]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Video,Object.assign({},props,{autoPlay:_autoPlay,muted:_muted,ref:videoRef}))})(_t2$i||(_t2$i=_$m`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$e||(_t3$e=_$m`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.svg(_t4$d||(_t4$d=_$m`
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

`),props=>props.transcalent&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$a||(_t5$a=_$m`
    background: hsla(0deg, 0%, 0%, 35%);
  `)));const makeTitle=(parts,delimiter="|")=>{let title="";return delimiter=" "+delimiter+" ",parts.forEach((part,key)=>{title+=part,parts.length-1!==key&&(title+=delimiter)}),title};let _t$n,_t2$j,_t3$f,_t4$e,_t5$b,_t6$a,_$n=t=>t;const Container$a=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$n||(_t$n=_$n`
  position: relative;
`)),IconContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$j||(_t2$j=_$n`
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
`)),Title=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.h1(_t3$f||(_t3$f=_$n`
  ${0}
  margin: 0 0 20px;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$e||(_t4$e=_$n`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.pageHeader.mainTitle)),AreaTitle=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.a)(_t5$b||(_t5$b=_$n`
  ${0}
  margin: 0;
  position: absolute;
  top: -18px;

  &:hover {
    text-decoration: underline;
  }

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$a||(_t6$a=_$n`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.pageHeader.areaTitle)),PageTitle=({title:title,icon:icon,areaTitle:areaTitle,areaHref:areaHref,updateDocTitle:_updateDocTitle=!0})=>(_updateDocTitle&&((title,area,delimiter)=>{const[baseTitle]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(document.title);Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{document.title=makeTitle([...title?[title]:[],...area?[area]:[],baseTitle],delimiter)},[title,area])})(title,areaTitle||""),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$a,null,areaTitle&&areaHref?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AreaTitle,{to:areaHref},areaTitle):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title,null,title),icon?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconContainer$1,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,Object.assign({size:24,color:"dimmed"},{icon:icon}))):null));let _t$o,_t2$k,_$o=t=>t;const Container$b=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.p(_t$o||(_t$o=_$o`
  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$k||(_t2$k=_$o`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.pageHeader.introduction)),IntroductionText=({children:children})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$b,null,children);let _t$p;const Container$c=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$p||(_t$p=(t=>t)``)),PageHeader=({title:title,icon:icon,introductionText:introductionText,areaHref:areaHref,areaTitle:areaTitle,updateDocTitle:_updateDocTitle=!0})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$c,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle,Object.assign({},{title:title,icon:icon,areaHref:areaHref,areaTitle:areaTitle,updateDocTitle:_updateDocTitle})),introductionText?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IntroductionText,null,introductionText):null);let _t$q,_t2$l,_t3$g,_t4$f,_t5$c,_$q=t=>t;const Container$d=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$q||(_t$q=_$q`
  position: relative;
  height: inherit;
  background: grey;
  border-radius: 3px;
  overflow: hidden;
  width: 55px;
  height: auto;
  opacity: 0.65;
  margin-right: 10px;

  &::after {
    content: '';
    display: block;
    padding-bottom: 75%;
    ${0}
  }

  ${0}

  &:hover {
    ${0}
  }

`),({aspect:aspect})=>"16:9"===aspect&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$l||(_t2$l=_$q`
      padding-left: 56.25%;
    `)),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$g||(_t3$g=_$q`
    transition:
      opacity ${0} ${0},
      transform ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.fast,theme.animation.easing.primary.easeOut),({theme:theme,hoverZoom:hoverZoom})=>theme&&hoverZoom&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$f||(_t4$f=_$q`
      transform: scale(1.5);
      opacity: 1;
      transition: transform ${0} ${0};
    `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut)),Image$1=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$c||(_t5$c=_$q`
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
`),p=>p.image,p=>p.image?"block":"none"),TableRowThumbnail=({hoverZoom:_hoverZoom=!0,image:image})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$d,Object.assign({},{hoverZoom:_hoverZoom},{aspect:"16:9"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image$1,Object.assign({},{image:image})));let _t$r,_t2$m,_$r=t=>t;const Container$e=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$r||(_t$r=_$r`
  height: 42px;
  width: 4px;
  border-radius: 3px;
  display: block;

  ${0}

`),({status:status,theme:{colors:colors}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$m||(_t2$m=_$r`
    background: ${0};
    content:'${0}';
  `),colors.status[status],status)),TypeTableDeviceStatus=({status:_status="neutral"})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$e,{status:_status}),useCopyToClipboard=text=>copyToClipboard(text),copyToClipboard=str=>{const el=document.createElement("textarea");el.value=str,el.setAttribute("readonly",""),el.style.position="absolute",el.style.left="-9999px",document.body.appendChild(el);const selection=document.getSelection();if(selection){const selected=selection.rangeCount>0&&selection.getRangeAt(0);el.select();const success=document.execCommand("copy");return document.body.removeChild(el),selected&&(selection.removeAllRanges(),selection.addRange(selected)),success}return!1};let _t$s,_t2$n,_t3$h,_t4$g,_t5$d,_t6$b,_t7$a,_t8$9,_t9$9,_t10$7,_t11$6,_$s=t=>t;const CopyToClipboard=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t$s||(_t$s=_$s`

  cursor: pointer;
  opacity: 0;

  position: absolute;
  right: 0;
  top: 14px;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  outline: none;

  ${0}

  svg {
    display: block;
  }

  &:hover {
    opacity: 1 !important;
  }

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$n||(_t2$n=_$s`
    transition: ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.easeOut)),CellContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$h||(_t3$h=_$s`
  display: table-cell;
  height: 50px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  font-family: ${0};

  &:hover ${0}{
    opacity: 0.5;
  }

  &, a {
    ${0}
  }

  a:hover {
    text-decoration: underline;
  }

  ${0};

  ${0}
`),p=>p.theme.fontFamily.data,CopyToClipboard,({theme:theme,cellStyle:cellStyle,alignment:alignment})=>"firstColumn"===cellStyle?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$g||(_t4$g=_$s`
      ${0};
    `),theme.typography.table.columnData[cellStyle]):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$d||(_t5$d=_$s`
      ${0};
    `),theme.typography.table.columnData[cellStyle][alignment]),({hasCopyButton:hasCopyButton})=>hasCopyButton&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$b||(_t6$b=_$s`
    padding-right: 20px;
  `)),({hideDivider:hideDivider})=>!hideDivider&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$a||(_t7$a=_$s`
    &::after {
      content: '';
      display: block;
      height: 1px;
      background: #afa9a9;
      opacity: 0.25;
      left: 0;
      right: 0;
      width: 100%;
      bottom: 0px;
      position: absolute;
    }
  `))),UnitText=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.span(_t8$9||(_t8$9=_$s`
  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$9||(_t9$9=_$s`
    ${0};
  `),theme.typography.table.columnData.unit)),StatusBlip=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t10$7||(_t10$7=_$s`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  ${0}
`),({status:_status="neutral",theme:{colors:colors}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$6||(_t11$6=_$s`
    background: ${0};
  `),colors.status[_status])),TypeTableCell=({showUnit:_showUnit=!1,showStatus:_showStatus=!1,status:status,unit:_unit="",cellStyle:_cellStyle="normalImportance",alignment:_alignment="left",hideDivider:hideDivider,isLastRow:isLastRow,hasCopyButton:hasCopyButton,href:href,children:children})=>{hideDivider=!!isLastRow||hideDivider;const copyValue=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(copyText=>{useCopyToClipboard(copyText)},[useCopyToClipboard]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CellContainer,Object.assign({},{cellStyle:_cellStyle,alignment:_alignment,hideDivider:hideDivider,hasCopyButton:hasCopyButton}),_showStatus?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StatusBlip,Object.assign({},{status:status})):null,href?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:href},children):children,_showUnit?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnitText,null,_unit):null,hasCopyButton?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CopyToClipboard,{onClick:()=>"string"==typeof children&&copyValue(children)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Copy",size:16})):null)};let _t$t;const RowContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$t||(_t$t=(t=>t)`
  display: table-row;
`)),TypeTableRow=({selectable:_selectable=!1,selectCallback:selectCallback,hasStatus:hasStatus,hasThumbnail:hasThumbnail,hasTypeIcon:hasTypeIcon,rowData:rowData,isLastRow:isLastRow,columnConfig:columnConfig})=>{var _rowData$header,_rowData$header2,_rowData$header3;const wrappedSelectCallback=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(checked=>{selectCallback&&selectCallback(checked,rowData.id)},[]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RowContainer,null,_selectable?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,{hideDivider:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox,{checked:rowData._checked,onChangeCallback:wrappedSelectCallback})):null,hasStatus?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,{hideDivider:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableDeviceStatus,{status:null===(_rowData$header=rowData.header)||void 0===_rowData$header?void 0:_rowData$header.status})):null,hasThumbnail?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,{hideDivider:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableRowThumbnail,{image:null===(_rowData$header2=rowData.header)||void 0===_rowData$header2?void 0:_rowData$header2.image})):null,hasTypeIcon?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,{hideDivider:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:(null===(_rowData$header3=rowData.header)||void 0===_rowData$header3?void 0:_rowData$header3.icon)||"",size:16})):null,rowData.columns.map((cell,key)=>{const{cellStyle:cellStyle,alignment:alignment,showUnit:showUnit,showStatus:showStatus,hasCopyButton:hasCopyButton}=columnConfig[key],{unit:unit,status:status,text:text}=cell;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableCell,Object.assign({key:key,href:cell.href},{cellStyle:cellStyle,alignment:alignment,showUnit:showUnit,showStatus:showStatus,hasCopyButton:hasCopyButton,unit:unit,status:status,isLastRow:isLastRow}),text)}))};let _t$u,_t2$o,_t3$i,_t4$h,_t5$e,_t6$c,_t7$b,_t8$a,_$u=t=>t;const Container$f=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$u||(_t$u=_$u`

`)),TableContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$o||(_t2$o=_$u`
  display: table;
  width: 100%;
`)),HeaderRow=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$i||(_t3$i=_$u`
  display: table-row;
  height: 50px;
`)),HeaderItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$h||(_t4$h=_$u`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;

  font-family: ${0};

  ${0};

  ${0}

  ${0}

`),p=>p.theme.fontFamily.ui,({hasCopyButton:hasCopyButton})=>hasCopyButton&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$e||(_t5$e=_$u`
    padding-right: 20px;
  `)),({theme:theme,alignment:alignment})=>alignment?Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$c||(_t6$c=_$u`
    ${0};
  `),theme.typography.table.header[alignment]):Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$b||(_t7$b=_$u`
    ${0};
  `),theme.typography.table.header.left),p=>p.fixedWidth&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$a||(_t8$a=_$u`
    width: ${0}px;
  `),p.fixedWidth)),TypeTable=({columnConfig:columnConfig,selectable:selectable,selectCallback:selectCallback,toggleAllCallback:toggleAllCallback,rows:rows,hasStatus:_hasStatus=!1,hasThumbnail:_hasThumbnail=!1,hasTypeIcon:_hasTypeIcon=!1})=>{const toggleAllCallbackWrapper=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(checked=>{toggleAllCallback&&toggleAllCallback(checked)},[]),isChecked=currentValue=>!0===currentValue._checked,allChecked=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>rows.every(isChecked),[rows]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$f,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderRow,null,selectable?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{fixedWidth:30},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Checkbox,{checked:allChecked(),onChangeCallback:toggleAllCallbackWrapper})):null,_hasStatus?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{fixedWidth:10}):null,_hasThumbnail?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{fixedWidth:70}):null,_hasTypeIcon?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{fixedWidth:35}):null,columnConfig.map((column,key)=>{const{alignment:alignment,header:header,hasCopyButton:hasCopyButton}=column;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderItem,{key:key,alignment:alignment,hasCopyButton:hasCopyButton},header)})),rows.map((rowData,key)=>{const isLastRow=rows.length-1===key;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TypeTableRow,Object.assign({key:key},{rowData:rowData,isLastRow:isLastRow,selectable:selectable,selectCallback:selectCallback,columnConfig:columnConfig,hasStatus:_hasStatus,hasThumbnail:_hasThumbnail,hasTypeIcon:_hasTypeIcon}))})))};Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({state:{},dispatch:()=>{},actions:{}});let _t$v,_t2$p,_t3$j,_t4$i,_t5$f,_$v=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$v||(_t$v=_$v`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$p||(_t2$p=_$v`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$j||(_t3$j=_$v`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$i||(_t4$i=_$v`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$f||(_t5$f=_$v`
`));let _t$w,_t2$q,_t3$k,_t4$j,_t5$g,_t6$d,_$w=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$w||(_t$w=_$w`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$q||(_t2$q=_$w`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$k||(_t3$k=_$w`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$j||(_t4$j=_$w`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$g||(_t5$g=_$w`
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t6$d||(_t6$d=_$w`

`));let _t$x,_t2$r,_t3$l,_t4$k,_t5$h,_$x=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$x||(_t$x=_$x`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$r||(_t2$r=_$x`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$l||(_t3$l=_$x`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$k||(_t4$k=_$x`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$h||(_t5$h=_$x`
`));let _t$y,_t2$s,_t3$m,_t4$l,_t5$i,_$y=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$y||(_t$y=_$y`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$s||(_t2$s=_$y`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$m||(_t3$m=_$y`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$l||(_t4$l=_$y`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$i||(_t5$i=_$y`
`));let _t$z,_t2$t,_t3$n,_t4$m,_t5$j,_$z=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$z||(_t$z=_$z`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$t||(_t2$t=_$z`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$n||(_t3$n=_$z`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$m||(_t4$m=_$z`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$j||(_t5$j=_$z`
`));let _t$A,_t2$u,_t3$o,_t4$n,_t5$k,_$A=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t$A||(_t$A=_$A`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$u||(_t2$u=_$A`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t3$o||(_t3$o=_$A`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$n||(_t4$n=_$A`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.g(_t5$k||(_t5$k=_$A`
`));let _t$B;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$B||(_t$B=(t=>t)`
  user-select: none;
  display: flex;
  flex-direction: column;
`));let _t$C,_t2$v,_t3$p,_t4$o,_$C=t=>t;const Layout=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$C||(_t$C=_$C`
  display: flex;
  flex-direction: row;
  height: 100%;
`));styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$v||(_t2$v=_$C`
  padding: ${0};
  flex: 1;
  overflow: auto;

  & > div {
    max-width: 1400px;
  }

  ${0}
`),({padBottom:_padBottom=!0})=>_padBottom?"70px 90px":"70px 90px 0",({maxWidth:maxWidth})=>maxWidth&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$p||(_t3$p=_$C`
      & > div {
        max-width: ${0};
      }
    `),maxWidth)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$o||(_t4$o=_$C`
  flex: 1;
  display: flex;
  flex-direction: column;
`));let _t$D,_t2$w,_t3$q,_t4$p,_t5$l,_t6$e,_t7$c,_t8$b,_t9$a,_t10$8,_t11$7,_t12$3,_t13$3,_t14$3,_t15$2,_t16$2,_t17$2,_$D=t=>t;const ContextTitle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$D||(_t$D=_$D`
  opacity: 0;

  ${0}

  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$w||(_t2$w=_$D`
    transition: opacity ${0} ${0};
  `),theme.animation.speed.fast,theme.animation.easing.primary.easeInOut),({compact:compact})=>compact&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$q||(_t3$q=_$D`
    font-size:14px;
  `))),ContextIcon=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$p||(_t4$p=_$D`
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
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t5$l||(_t5$l=_$D`
    ${0};
    transition: background ${0} ${0};
  `),theme.styles.global.mainMenu.iconBackground.default,theme.animation.speed.fast,theme.animation.easing.primary.easeInOut),({compact:compact})=>compact&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t6$e||(_t6$e=_$D`
    // width: 24px;
    // height: 24px;
    // flex: 0 0 24px;
    // margin: 0 28px 0 28px;
  `))),ContextIndicator=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t7$c||(_t7$c=_$D`
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

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$b||(_t8$b=_$D`
    transition: opacity 0 ${0};
  `),theme.animation.easing.primary.easeInOut)),ContextActionBaseCSS=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$a||(_t9$a=_$D`
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
`)),ContextActionA=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.a(_t10$8||(_t10$8=_$D`
  ${0}
  ${0}

  ${0}

  &:hover ${0}{
    opacity: 1;
    ${0};
    ${0}{
      [stroke]{
        stroke: ${0};
      }
    }
  }

  ${0}
`),ContextActionBaseCSS,({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$7||(_t11$7=_$D`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.menuItem.default),({menuOpen:menuOpen})=>menuOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t12$3||(_t12$3=_$D`
    ${0}{
      opacity: 1;
    }
  `),ContextTitle),ContextIcon,({theme:theme})=>theme.styles.global.mainMenu.iconBackground.hover,IconWrapper,({theme:theme})=>theme.colors.icons.inverse,({isActive:isActive})=>isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t13$3||(_t13$3=_$D`
    ${0},
    &:hover ${0}{
      ${0};
    }
  `),ContextIcon,ContextIcon,({theme:theme})=>theme.styles.global.mainMenu.iconBackground.active)),ContextActionButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t14$3||(_t14$3=_$D`
  ${0}

  ${0}

  ${0}

  &:hover ${0}{
    opacity: 1;
    ${0};
    ${0}{
      [stroke]{
        stroke: ${0};
      }
    }
  }

  ${0}

`),ContextActionBaseCSS,({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t15$2||(_t15$2=_$D`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.menuItem.default),({menuOpen:menuOpen,theme:theme})=>menuOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t16$2||(_t16$2=_$D`
    ${0}{
      opacity: 1;
    }

    ${0}{
      opacity: 1;
      transition: opacity ${0} ${0} ${0};
    }
  `),ContextTitle,ContextIndicator,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,theme.animation.speed.fast),ContextIcon,({theme:theme})=>theme.styles.global.mainMenu.iconBackground.hover,IconWrapper,({theme:theme})=>theme.colors.icons.inverse,({isActive:isActive})=>isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t17$2||(_t17$2=_$D`
    ${0},
    &:hover ${0}{
      ${0};
    }
  `),ContextIcon,ContextIcon,({theme:theme})=>theme.styles.global.mainMenu.iconBackground.active)),ContextItem=({hasSubmenu:_hasSubmenu=!1,contextKey:_contextKey=-1,submenuOpen:submenuOpen,menuOpen:menuOpen,onClickCallback:onClickCallback,title:title,href:href,icon:icon,compact:compact,isActive:isActive})=>{const internal=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextIcon,Object.assign({},{compact:compact}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:icon,color:isActive?"inverse":"dimmed",size:20})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextTitle,Object.assign({},{compact:compact}),title),_hasSubmenu?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextIndicator,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:submenuOpen?"Up":"Down",color:"dimmed"})):null);return _hasSubmenu?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextActionButton,{menuOpen:menuOpen,isActive:isActive,onClick:()=>onClickCallback&&onClickCallback(_contextKey)},internal):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextActionA,{menuOpen:menuOpen,href:href,isActive:isActive,onClick:()=>onClickCallback&&onClickCallback(_contextKey)},internal)};let _t$E,_t2$x,_t3$r,_t4$q,_t5$m,_t6$f,_t7$d,_t8$c,_t9$b,_t10$9,_t11$8,_t12$4,_t13$4,_$E=t=>t;const Submenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.ul(_t$E||(_t$E=_$E`
  display: block;
  position: relative;
  margin-left: 40px;
  padding: 0;

`)),SubmenuHeader=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$x||(_t2$x=_$E`
  display: block;
  height: 40px;
  margin-left: 40px;
`)),SubmenuItemTitle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.span(_t3$r||(_t3$r=_$E`
  display: block;
  ${0};

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t4$q||(_t4$q=_$E`
    font-family: ${0};
    ${0}
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.subheader)),SubmenuItemLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.a)(_t5$m||(_t5$m=_$E`
  display: block;

`)),SubmenuItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.li(_t6$f||(_t6$f=_$E`
  display: block;
  height: 30px;
  padding-left: 40px;
  position: relative;

  &::after {
    display: block;
    content: '';
    height: 1px;
    width: 14px;
    position: absolute;
    left: 0;
    top: 10px;
    background: ${0};
  }

  ${0}{

    ${0};



  }
`),({theme:{colors:colors}})=>colors.divider,SubmenuItemLink,({theme:theme,isActive:isActive})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t7$d||(_t7$d=_$E`
      font-family: ${0};
      ${0};

      &:hover {
        ${0};
      }

      ${0}

    `),theme.fontFamily.ui,theme.typography.global.mainMenu.subItem.default,theme.typography.global.mainMenu.subItem.hover,isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$c||(_t8$c=_$E`
        &, &:hover {
          ${0};
        }
      `),theme.typography.global.mainMenu.subItem.active))),SubmenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t9$b||(_t9$b=_$E`
  ${0};

  position: relative;
  overflow: hidden;

  &::after {
    display: block;
    content: '';
    width: 1px;
    position: absolute;
    left: 40px;
    top: 0;
    bottom: 35px;
    background: ${0};
  }

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t10$9||(_t10$9=_$E`
    transition:
      max-height ${0} ${0},
      opacity ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.fast,theme.animation.easing.primary.easeOut),({theme:{colors:colors}})=>colors.divider),ContextContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t11$8||(_t11$8=_$E`
  min-height: 70px;
  width: inherit;

  ${0}{
    max-height: 0;
    opacity: 0;
  }
  ${0};

  ${0};

`),SubmenuContainer,({open:open,maxHeight:maxHeight,theme:theme})=>open&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t12$4||(_t12$4=_$E`
    ${0}{
      transition:
        max-height ${0} ${0},
        opacity ${0} ${0};
      max-height: ${0}px !important;
      opacity: 1;
    }
  `),SubmenuContainer,theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.fast,theme.animation.easing.primary.easeOut,maxHeight),({loading:loading})=>"true"===loading&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t13$4||(_t13$4=_$E`
    ${0}{
      max-height: none !important;
      opacity: 1;
    }
  `),SubmenuContainer)),NavigationItem=({item:item,menuOpen:menuOpen,submenuOpen:submenuOpen,contextKey:contextKey,loading:loading,topLevelPath:topLevelPath,onClickCallback:onClickCallback,readyCallback:readyCallback})=>{const{icon:icon,title:title,href:href,submenu:submenu}=item,isActive=topLevelPath===href,refSubmenu=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[submenuHeight,setSubmenuHeight]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),submenus=generateSubmenus(submenu)||[],hasSubmenu=submenus.length>0;return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{refSubmenu&&refSubmenu.current&&setSubmenuHeight(refSubmenu.current.clientHeight),readyCallback&&readyCallback(contextKey)},[refSubmenu,setSubmenuHeight,readyCallback,contextKey]),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextContainer,{open:submenuOpen,loading:loading?"true":"false",maxHeight:submenuHeight},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextItem,Object.assign({},{title:title,href:href,isActive:isActive,icon:icon,hasSubmenu:hasSubmenu,submenuOpen:submenuOpen,menuOpen:menuOpen,onClickCallback:onClickCallback,contextKey:contextKey})),hasSubmenu?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuContainer,{ref:refSubmenu},submenus):null)},generateSubmenus=submenu=>{if(!submenu)return;let grouping=[],output=[];return grouping.push([]),submenu.forEach((item,key)=>{const{title:title,href:href}=item;href?grouping[grouping.length-1].push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuItem,{key:key,isActive:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuItemLink,{to:href},title))):(grouping[grouping.length-1].length>1&&grouping.push([]),grouping[grouping.length-1].push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuHeader,{key:key},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubmenuItemTitle,null,title))))}),grouping.forEach((group,key)=>{output.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Submenu,{key:key},group))}),output};function SvgLogoMark(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:35,height:35},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs",null,Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient",{id:"LogoMark_svg__a",x1:"36.708%",x2:"69.959%",y1:"2.579%",y2:"98.009%"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop",{offset:"0%",stopColor:"#7DB8DB"}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop",{offset:"100%",stopColor:"#5CA0D1"}))),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g",{fill:"none",fillRule:"evenodd"},Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect",{width:35,height:35,fill:"url(#LogoMark_svg__a)",rx:5}),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M14.42 25.12c4.4 0 6.42-3.06 6.42-7.02v-7.3h-3.9v7.3c0 1.84-.68 3.56-2.52 3.56-1.8 0-2.5-1.68-2.5-3.56v-7.3h-3.9v7.3c0 3.76 1.86 7.02 6.4 7.02zM26.98 25V10.8h-3.9V25h3.9z"})))}function SvgLogoText(props){return Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:71,height:30},props),Object(react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M6.088 12.112c2.336 0 4.128-.976 4.128-3.168 0-2.048-1.472-2.72-3.84-3.248-2.048-.464-2.992-.784-2.992-2 0-1.152.8-1.856 2.56-1.856 1.36 0 2.56.592 3.088 1.184l.672-1.168C8.744 1.072 7.496.56 5.976.56c-2.352 0-4.08 1.184-4.08 3.36 0 1.808 1.2 2.432 3.504 2.992 2.112.512 3.28.896 3.28 2.176 0 1.136-.944 1.728-2.56 1.728-1.728 0-3.28-.8-3.968-1.52l-.688 1.216c1.28 1.04 2.88 1.6 4.624 1.6zm11.941-.016c1.76 0 3.792-.944 4.512-2.64l-1.2-.656c-.656 1.408-2.064 2-3.248 2-2.256 0-3.936-2.128-3.936-4.496 0-2.144 1.36-4.432 3.888-4.432 1.152 0 2.48.48 3.152 1.92l1.136-.736C21.63 1.6 20.125.576 18.11.576c-3.424 0-5.408 2.912-5.408 5.664 0 2.88 2.208 5.856 5.328 5.856zm12.134-.016c3.072 0 5.36-2.72 5.36-5.744 0-2.848-2.144-5.776-5.328-5.776-3.072 0-5.376 2.736-5.376 5.76 0 2.912 2.16 5.76 5.344 5.76zm.016-1.296c-2.352 0-3.904-2.144-3.904-4.464 0-2.208 1.488-4.448 3.904-4.448 2.304 0 3.888 2.128 3.888 4.448 0 2.192-1.472 4.464-3.888 4.464zM40.296 12V7.92h3.008L45.896 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376C47.16 2.48 45.72.64 43.72.64h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM58.413 12v-1.28h-6.272V6.8h5.328V5.6h-5.328V1.92h6.128V.64h-7.568V12h7.712zm4.742 0V7.92h3.008L68.755 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376 0-1.792-1.44-3.632-3.44-3.632h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM4.78 27.05c2.18 0 2.99-1.66 2.99-3.57V19.9h-.7v3.58c0 1.45-.5 2.94-2.3 2.94-1.76 0-2.29-1.45-2.29-2.94V19.9h-.69v3.58c0 1.81.74 3.57 2.99 3.57zm6.193-.05v-7.1h-.7V27h.7zm6.697 0v-2.18L19 23.44 21.71 27h.79l-3.05-3.98 2.9-3.12h-.77l-3.91 4.13v-4.12h-.7V27h.7zm7.263 0v-7.1h-.7V27h.7zm5.124 0v-6.48h2.53v-.62h-5.76v.62h2.53V27h.7z",fill:"#93A5B2"}))}let _t$F,_t2$y,_t3$s,_t4$r,_t5$n,_t6$g,_t7$e,_t8$d,_t9$c,_t10$a,_t11$9,_t12$5,_$F=t=>t;const Logo=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.a)(_t$F||(_t$F=_$F`
  height: 50px;
  margin: 0 20px 55px 15px;
  display: flex;

  object {
    pointer-events: none;
  }
`)),LogoMark=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$y||(_t2$y=_$F`
  height: 50px;
  flex: 0 0 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

`)),LogoType=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$s||(_t3$s=_$F`
  opacity: 0;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`)),SVGObject=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.object(_t4$r||(_t4$r=_$F``)),SVGObjectText=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.object(_t5$n||(_t5$n=_$F`
  max-width: 180px;
`)),NavigationContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$g||(_t6$g=_$F``)),MenuFooter=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t7$e||(_t7$e=_$F`
  ${0};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$d||(_t8$d=_$F`
    ${0}
  `),theme.styles.global.mainMenu.footerBackground)),FooterItemContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t9$c||(_t9$c=_$F`
  min-height: 70px;
`)),Container$n=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t10$a||(_t10$a=_$F`

  ${0}

  box-sizing: border-box;
  height: 100%;
  padding: 20px 0 0 0;
  overflow: hidden;
`),({theme:theme,open:open})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$9||(_t11$9=_$F`
    ${0}

    border-right: 1px solid ${0};
    transition: flex-basis ${0} ${0};
    flex-basis: ${0};

    ${0}{
      transition: opacity ${0} ${0};
      opacity: ${0};
    }
  `),theme.styles.global.mainMenu.background,theme.styles.global.mainMenu.lines.backgroundColor,theme.animation.speed.normal,theme.animation.easing.primary.easeOut,open?theme.dimensions.global.mainMenu.width.open:theme.dimensions.global.mainMenu.width.closed,LogoType,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,open?1:0)),ContainerInner=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t12$5||(_t12$5=_$F`
  width: ${0};
  display: flex;
  flex-direction: column;
  height: 100%;
`),({theme:theme})=>theme.dimensions.global.mainMenu.width.open),MainMenu=({content:content,home:_home="/",logoMark:logoMark,logoText:logoText,supportUrl:supportUrl})=>{const[isMenuOpen,setMenuOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[isMenuPinned,setMenuPinned]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),[focusedContext,setFocusedContext]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[loading,setLoading]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),location=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.f)();let checkedInItems=0;const autoMenuOpen=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{"touch"!==e.pointerType&&setMenuOpen(!0)},[setMenuOpen]),autoMenuClose=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{isMenuPinned||setMenuOpen(!1)},[setMenuOpen,isMenuPinned]),toggleMenuPin=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{"touch"!==e.pointerType&&(isMenuPinned&&setMenuOpen(!isMenuOpen),setMenuPinned(!isMenuPinned))},[isMenuPinned,setMenuPinned,isMenuOpen,setMenuOpen]),setFocusedContextCb=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(contextKey=>{setFocusedContext(focusedContext!==contextKey?contextKey:-1)},[setFocusedContext,focusedContext]),readyCallback=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{checkedInItems++,checkedInItems===content.items.length&&setLoading(!1)},[checkedInItems,content]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$n,{open:isMenuOpen,onPointerEnter:autoMenuOpen,onTouchStart:()=>console.log("touch"),onMouseLeave:autoMenuClose},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerInner,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo,{to:_home},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoMark,null,logoMark?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVGObject,{type:"image/svg+xml",data:logoMark}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgLogoMark,null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoType,null,logoText?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVGObjectText,{type:"image/svg+xml",data:logoText}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgLogoText,null))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationContainer,null,content.items.map((item,key)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationItem,Object.assign({topLevelPath:getTopLevelPath(location.pathname),key:key,contextKey:key,menuOpen:isMenuOpen,submenuOpen:key===focusedContext&&isMenuOpen,onClickCallback:setFocusedContextCb},{item:item,loading:loading,focusedContext:focusedContext,readyCallback:readyCallback})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuFooter,null,supportUrl&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItemContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextItem,{compact:!0,isActive:!1,icon:"Question",title:"Help & Support",href:supportUrl,menuOpen:isMenuOpen})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterItemContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextItem,{compact:!0,isActive:!1,icon:isMenuOpen&&isMenuPinned?"Left":"Menu",title:isMenuPinned?"Keep Open":"Auto-Hide",onClickCallback:toggleMenuPin,menuOpen:isMenuOpen})))))},getTopLevelPath=pathname=>{const parts=pathname.split("/").filter(String);return parts.length>0?"/"+parts[0]:"/"};let _t$G,_t2$z,_t3$t,_t4$s,_t5$o,_t6$h,_t7$f,_t8$e,_t9$d,_t10$b,_t11$a,_t12$6,_t13$5,_t14$4,_t15$3,_t16$3,_t17$3,_t18$1,_t19$1,_t20$1,_t21$1,_t22$1,_t23$1,_t24$1,_t25$1,_$G=t=>t;const Container$o=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$G||(_t$G=_$G`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${0}

`),({theme:{colors:colors}})=>colors&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t2$z||(_t2$z=_$G`
    border-bottom: ${0} 1px solid;
    box-shadow: 5px 7px 10px 0 hsla(205, 16%, 77%, 0.1);
  `),colors.divider)),SearchBar=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$t||(_t3$t=_$G`
  margin-left: 25px;
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;

`)),IconWrapper$3=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$s||(_t4$s=_$G`
  flex: 0 40px;
  width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`)),SearchInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.input(_t5$o||(_t5$o=_$G`
  font-family: ${0};
  flex: 1;
  height: 35px;
  line-height: 35px;
  border: none;
  outline: none;

  ${0};

  &::placeholder {
    font-style: italic;
    ${0};
  }
`),({theme:theme})=>theme.fontFamily.data,({theme:{typography:typography}})=>typography.global.topBar.search.value,({theme:{typography:typography}})=>typography.global.topBar.search.placeholder),ButtonArea=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$h||(_t6$h=_$G`
  height: inherit;
  padding-right: 10px;
`)),DrawerToggle=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button.attrs({type:"button"})(_t7$f||(_t7$f=_$G`
  width: 60px;
  margin: 0 5px;
  height: inherit;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  ${0};

  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t8$e||(_t8$e=_$G`
    border-bottom: 5px solid ${0};

    &:hover {
      border-bottom-color: ${0};
    }

    transition: border ${0} ${0};

  `),theme.colors.menu.indicator,theme.colors.menu.hover,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut),({isActive:isActive,theme:theme})=>isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t9$d||(_t9$d=_$G`
    &, &:hover {
      border-bottom-color: ${0};
    }
  `),theme.colors.menu.active)),Drawer=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t10$b||(_t10$b=_$G`

  font-family: ${0};

  position: fixed;
  right: -10px;
  top: 65px;
  bottom: 0;
  background: ${0};
  border-left: ${0} 1px solid;
  width: 200px;
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${0};


  ${0}
`),({theme:theme})=>theme.fontFamily.ui,({theme:theme})=>theme.styles.global.mainMenu.background,({theme:{colors:colors}})=>colors.divider,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t11$a||(_t11$a=_$G`
    transition:
      opacity ${0} ${0},
      right ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut),({isOpen:isOpen})=>isOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t12$6||(_t12$6=_$G`
    right: 0;
    opacity: 1;
    visibility: visible;
  `))),DrawerTop=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t13$5||(_t13$5=_$G`

`)),DrawerBottom=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t14$4||(_t14$4=_$G`

`)),DrawerHeader=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.h2(_t15$3||(_t15$3=_$G`
  ${0};
  padding: 0;
  margin: 0 0 5px;
`),({theme:theme})=>theme.typography.global.mainMenu.subheader),CurrentUser=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t16$3||(_t16$3=_$G`
  padding: 20px 20px 15px;
  word-break: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: ${0} 1px solid;
  ${0};
`),({theme:{colors:colors}})=>colors.divider,({theme:theme})=>theme.typography.global.mainMenu.identity),UserMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t17$3||(_t17$3=_$G`
  padding: 20px 20px 0;
  border-bottom: ${0} 1px solid;
`),({theme:{colors:colors}})=>colors.divider),Logout=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t18$1||(_t18$1=_$G`
  padding: 0 20px;
`)),LinkMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.ul(_t19$1||(_t19$1=_$G`
  padding: 0;
  margin: 22px 0 0 0;
  list-style: none;
`)),LinkMenuItem=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.li(_t20$1||(_t20$1=_$G`
  padding: 0;
  margin: 0 0 21px;

`)),LinkMenuItemA=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.a(_t21$1||(_t21$1=_$G`
  ${0};

  ${0};






`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t22$1||(_t22$1=_$G`
    ${0};

    &:hover {
      ${0};
    }

  `),theme.typography.global.mainMenu.subItem.default,theme.typography.global.mainMenu.subItem.hover),({theme:theme,isActive:isActive})=>isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t23$1||(_t23$1=_$G`
    &, &:hover {
      ${0};
    }
  `),theme.typography.global.mainMenu.subItem.active)),LanguageMenu=styled_components__WEBPACK_IMPORTED_MODULE_1__.d.button(_t24$1||(_t24$1=_$G`
  ${0};

  font-family: ${0};
  margin-top: auto;
  display: flex;
  flex-direction: row;

  border-top: ${0} 1px solid;
  ${0};

  padding: 20px 10px 15px;
  align-items: center;
  width: 100%;


`),resetButtonStyles,({theme:theme})=>theme.fontFamily.ui,({theme:{colors:colors}})=>colors.divider,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t25$1||(_t25$1=_$G`
    ${0};
    &:hover { ${0}; }
    &:active { ${0}; }
  `),theme.typography.global.mainMenu.subItem.default,theme.typography.global.mainMenu.subItem.hover,theme.typography.global.mainMenu.subItem.active)),TopBar=({useNotifications:_useNotifications=!1,logoutLink:_logoutLink="/logout",useSearch:_useSearch=!1,searchPlaceholder:_searchPlaceholder="Search for devices, analysis tasks, etc.",userSubmenu:_userSubmenu=[],userDrawerBespoke:userDrawerBespoke,loggedInUser:loggedInUser,onLogout:_onLogout=(()=>{}),showLanguage:_showLanguage=!1,onLanguageToggle:_onLanguageToggle=(()=>{})})=>{const[isUserMenuOpen,setUserMenuOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isNotificationsOpen,setNotificationsOpen]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),logoutHandler=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async e=>{e.preventDefault(),await _onLogout(),window.location.assign(_logoutLink)},[_logoutLink,_onLogout]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container$o,null,_useSearch?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchBar,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper$3,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Search",size:18,color:"dimmed"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchInput,{placeholder:_searchPlaceholder})):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonArea,null,_useNotifications?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerToggle,{isActive:isNotificationsOpen,onClick:()=>{setNotificationsOpen(!isNotificationsOpen),setUserMenuOpen(!1)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Notifications",size:18,color:"dimmed"})):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerToggle,{isActive:isUserMenuOpen,onClick:()=>{setUserMenuOpen(!isUserMenuOpen),setNotificationsOpen(!1)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"UserProfile",size:18,color:"dimmed"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Drawer,{isOpen:isUserMenuOpen},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerTop,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentUser,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerHeader,null,"Current User"),loggedInUser),_userSubmenu.length>0?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserMenu,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerHeader,null,"Account Options"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenu,null,_userSubmenu.map(({text:text,href:href},index)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenuItem,{key:index},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenuItemA,{href:href},text))))):null,userDrawerBespoke||null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logout,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenu,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenuItem,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkMenuItemA,{onClick:logoutHandler,href:_logoutLink},"Logout"))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerBottom,null,_showLanguage&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LanguageMenu,{onClick:_onLanguageToggle},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper$3,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon,{icon:"Language",size:18,color:"dimmed"})),"Language / 言語"))),_useNotifications?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Drawer,{isOpen:isNotificationsOpen},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentUser,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"Feature Pending Development."))):null)};let _t$H,_t2$A,_t3$u,_t4$t,_t5$p,_t6$i,_t7$g,_t8$f,_t9$e,_$H=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$H||(_t$H=_$H`
  width: 286px;
  border-right: 1px solid hsla(0, 0%, 84%, 50%);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t2$A||(_t2$A=_$H`
  height: 84px;
  color: hsl(205, 7%, 35%);
  border-bottom: 1px solid hsla(0, 0%, 84%, 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 15px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t3$u||(_t3$u=_$H`
  height: 31px;
  font-family: Monorale;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: 4.5px;
  text-align: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t4$t||(_t4$t=_$H`
  height: 19px;
  font-family: Monorale;
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 14.11px;
  text-align: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t5$p||(_t5$p=_$H`
  position: relative;
  border-bottom: 1px solid hsla(0, 0%, 84%, 50%);
  padding: 22px 20px 21px 20px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t6$i||(_t6$i=_$H`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
  margin-bottom: 18px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t7$g||(_t7$g=_$H`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.a)(_t8$f||(_t8$f=_$H`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.a)(_t9$e||(_t9$e=_$H`
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
`)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({selected:"",setSelected:()=>{}});let _t$I;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$I||(_t$I=(t=>t)`
  display: flex;
  flex-direction: row;
`));let _t$J,_t2$B,_t3$v,_$J=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$J||(_t$J=_$J`
  margin-right: 39px;
  display: flex; 
  align-items: center;  
`)),styled_components__WEBPACK_IMPORTED_MODULE_1__.d.label(_t2$B||(_t2$B=_$J`
  height: 40px;
  ${0}
  font-size: 15px;
  font-weight: ${0};
  letter-spacing: 0.09px;
  color: ${0};
  cursor: pointer;
  border-bottom: ${0};
  padding-top: 6px;
  padding-bottom: 14px;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_t3$v||(_t3$v=_$J`
    font-family: ${0};
  `),theme.fontFamily.ui),({active:active})=>active?"600":"500",({active:active})=>active?"#0097ce":"#787878",({active:active})=>active?"2px solid #0097ce":"2px solid transparent");let _t$K;styled_components__WEBPACK_IMPORTED_MODULE_1__.d.div(_t$K||(_t$K=(t=>t)`
`))},581:function(module,exports){},798:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(348)}},[[447,1,2]]]);
//# sourceMappingURL=main.e525cf169e124baf2009.bundle.js.map