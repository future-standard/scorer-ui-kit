(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1188:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(297).configure)([__webpack_require__(1189),__webpack_require__(1190)],module,!1)}).call(this,__webpack_require__(106)(module))},1189:function(module,exports,__webpack_require__){var map={"./GlobalUI.stories.tsx":533,"./MainMenu.stories.tsx":534,"./TopBar.stories.tsx":535};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1189},1190:function(module,exports,__webpack_require__){var map={"./Alerts/AlertBar.stories.tsx":1191,"./Alerts/MixAlerts/MixAlerts.stories.tsx":1245,"./Alerts/Modals/BaseModal.stories.tsx":1192,"./Alerts/Modals/ConfirmationModal.stories.tsx":1193,"./Alerts/Modals/CustomModal.stories.tsx":1246,"./Alerts/Modals/MediaModal.stories.tsx":1194,"./Alerts/Notification.stories.tsx":1195,"./Filters/atoms/FilterButton.stories.tsx":1196,"./Filters/molecules/DatePicker.stories.tsx":1197,"./Filters/molecules/FilterDropdown.stories.tsx":1198,"./Filters/molecules/FilterInputs.stories.tsx":1199,"./Filters/molecules/SortDropdown.stories.tsx":1200,"./Filters/organisms/FilterBar.stories.tsx":1201,"./Form/Buttons/Button.stories.tsx":1202,"./Form/Buttons/ButtonWithIcons.stories.tsx":1203,"./Form/Buttons/ButtonWithLoading.stories.tsx":1204,"./Form/Checkbox.stories.tsx":1205,"./Form/FileManagement/AreaUploadManager.stories.tsx":1206,"./Form/FileManagement/AvatarUploader.stories.tsx":1207,"./Form/FileManagement/CropTool.stories.tsx":1208,"./Form/FileManagement/DropArea.stories.tsx":1209,"./Form/FileManagement/InputFileButton.stories.tsx":1210,"./Form/Input/DurationSlider.stories.tsx":1211,"./Form/Input/Input.stories.tsx":1212,"./Form/Input/PasswordInput.stories.tsx":1213,"./Form/Input/PercentageSlider.stories.tsx":1214,"./Form/Input/RadioButton.stories.tsx":1215,"./Form/Input/SliderInput.stories.tsx":1216,"./Form/Input/SmallInput.stories.tsx":1217,"./Form/Input/TextAreaField.stories.tsx":1218,"./Form/SelectField.stories.tsx":1219,"./Form/Switch.stories.tsx":1220,"./Global/GlobalUI.stories.tsx":533,"./Global/MainMenu.stories.tsx":534,"./Global/TopBar.stories.tsx":535,"./Indicators/Spinner.stories.tsx":1221,"./Misc/Icons.stories.tsx":1222,"./Misc/StatusIcon.stories.tsx":1223,"./Misc/atoms/BasicSearchInput.stories.tsx":1224,"./Misc/atoms/TabWithIcon.stories.tsx":1225,"./Misc/atoms/Tag.stories.tsx":1226,"./Misc/molecules/DebouncedSearcher.stories.tsx":1227,"./Misc/molecules/TabsWithIconBar.stories.tsx":1228,"./Misc/molecules/TagList.stories.tsx":1229,"./Pages/IntroductionText.stories.tsx":1230,"./Pages/PageHeader.stories.tsx":1231,"./Pages/PageTitle.stories.tsx":1232,"./Tables/atoms/EditableCell.stories.tsx":1233,"./Tables/atoms/TableHeaderTitle.stories.tsx":1234,"./Tables/atoms/TableRowThumbnail.stories.tsx":1235,"./Tables/molecules/ActionsTable.stories.tsx":1236,"./Tables/molecules/EditableTable.stories.tsx":1237,"./Tables/molecules/LoadingTable.stories.tsx":1238,"./Tables/molecules/TypeTable.stories.tsx":1239};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1190},1191:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_AlertBar",(function(){return _AlertBar}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"])));__webpack_exports__.default={title:"Alerts/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.b,decorators:[]};var _AlertBar=function _AlertBar(){var message=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Message","Look Out!"),type=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"error");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.b,{message:message,type:type}))};_AlertBar.__docgenInfo={description:"",methods:[],displayName:"_AlertBar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alerts/AlertBar.stories.tsx"]={name:"_AlertBar",docgenInfo:_AlertBar.__docgenInfo,path:"src/stories/Alerts/AlertBar.stories.tsx"})},1192:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_BaseModal",(function(){return _BaseModal}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(120),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3);__webpack_exports__.default={title:"Alerts/Modals",components:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.G,decorator:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)([""]))),EmptyModal=function EmptyModal(modal){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(modal),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),modalProps=_useState2[0],setModalProps=_useState2[1],createModal=Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.nb)().createModal;return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){setModalProps(modal)}),[modal]),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.f,{design:"secondary",onClick:function openImageModal(){createModal(Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},modalProps))}},"Base Modal")},customComponentExample=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1",null,"Hello!"),_BaseModal=function _BaseModal(){var closeTxt=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Close text","Close"),isCloseEnable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Is Close Enabled",!0),padding=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Padding",!0),dismissAction=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action)("Modal dismissed"),showCustom=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Show Custom Component",!1);return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.G,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(EmptyModal,{closeText:closeTxt,isCloseEnable:isCloseEnable,padding:padding,dismissCallback:dismissAction,customComponent:showCustom?customComponentExample:void 0})))};_BaseModal.__docgenInfo={description:"",methods:[],displayName:"_BaseModal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alerts/Modals/BaseModal.stories.tsx"]={name:"_BaseModal",docgenInfo:_BaseModal.__docgenInfo,path:"src/stories/Alerts/Modals/BaseModal.stories.tsx"})},1193:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_ConfirmationTemplate",(function(){return _ConfirmationTemplate}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)([""])));__webpack_exports__.default={title:"Alerts/Modals",components:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.j,decorator:[]};var ModalExample=function ModalExample(_ref){var _ref$message=_ref.message,message=void 0===_ref$message?"Hello":_ref$message,leftButtonDesign=_ref.leftButtonDesign,rightButtonDesign=_ref.rightButtonDesign,_ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,_ref$leftButtonText=_ref.leftButtonText,leftButtonText=void 0===_ref$leftButtonText?"Back":_ref$leftButtonText,_ref$leftButtonCallba=_ref.leftButtonCallback,leftButtonCallback=void 0===_ref$leftButtonCallba?function(){}:_ref$leftButtonCallba,_ref$rightButtonText=_ref.rightButtonText,rightButtonText=void 0===_ref$rightButtonText?"Accept":_ref$rightButtonText,_ref$rightButtonCallb=_ref.rightButtonCallback,rightButtonCallback=void 0===_ref$rightButtonCallb?function(){}:_ref$rightButtonCallb,createModal=Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.nb)().createModal,addPersonModal=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.j,{title:title,message:message,leftButtonText:leftButtonText,leftButtonDesign:leftButtonDesign,leftButtonCallback:leftButtonCallback,rightButtonDesign:rightButtonDesign,rightButtonText:rightButtonText,rightButtonCallback:rightButtonCallback});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.f,{design:"secondary",onClick:function openConfirmationModal(){console.log("creatingModal"),createModal({isCloseEnable:!1,customComponent:addPersonModal})}},"Open Modal")},_ConfirmationTemplate=function _ConfirmationTemplate(){var title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","Modal Title"),msg=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Message","This is an example of some information provided to the customer to confirm an option"),leftBtnTxt=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Left Button Text","Back"),buttonDesignLeft=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Left Button Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"secondary"),leftBtnCallback=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Back button pressed"),RightBtnTxt=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Right Button Text","I understand"),buttonDesignRight=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Right Button Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),rightBtnCallback=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Accept button pressed");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.G,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalExample,{title:title,message:msg,leftButtonText:leftBtnTxt,leftButtonDesign:buttonDesignLeft,leftButtonCallback:leftBtnCallback,rightButtonText:RightBtnTxt,rightButtonDesign:buttonDesignRight,rightButtonCallback:rightBtnCallback})))};_ConfirmationTemplate.__docgenInfo={description:"",methods:[],displayName:"_ConfirmationTemplate"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alerts/Modals/ConfirmationModal.stories.tsx"]={name:"_ConfirmationTemplate",docgenInfo:_ConfirmationTemplate.__docgenInfo,path:"src/stories/Alerts/Modals/ConfirmationModal.stories.tsx"})},1194:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_MediaModal",(function(){return _MediaModal}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2);__webpack_exports__.default={title:"Alerts/Modals",components:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.F,decorator:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)([""]))),MediaImageModal=function MediaImageModal(_ref){var hasModalLimitsValue=_ref.hasModalLimitsValue,createModal=Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.nb)().createModal,mediaImage=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.F,{hasModalLimits:hasModalLimitsValue,mediaType:"img",alt:"city",src:"https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw"}),modalWidth=hasModalLimitsValue?"auto":"60%";return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.f,{design:"secondary",onClick:function openImageModal(){createModal({customComponent:mediaImage,padding:!1,width:modalWidth})}},"Image Modal")},_MediaModal=function _MediaModal(){var hasModalLimits=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Has Modal Limits",!0);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.G,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MediaImageModal,{hasModalLimitsValue:hasModalLimits})))};_MediaModal.__docgenInfo={description:"",methods:[],displayName:"_MediaModal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alerts/Modals/MediaModal.stories.tsx"]={name:"_MediaModal",docgenInfo:_MediaModal.__docgenInfo,path:"src/stories/Alerts/Modals/MediaModal.stories.tsx"})},1195:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Notification",(function(){return _Notification}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  margin: 100px 20px 20px 20px;\n  display: grid;\n  grid-template-columns: 200px;\n  row-gap: 15px;\n"])));__webpack_exports__.default={title:"Alerts/atoms",components:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.ob,decorator:[]};var NotificationExample=function NotificationExample(notiSettings){var sendNotification=Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.ob)().sendNotification,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(notiSettings),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),notificationSettings=_useState2[0],setNotificationSettings=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){setNotificationSettings(notiSettings)}),[notiSettings]),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.f,{design:"secondary",size:"small",onClick:function onClick(){sendNotification(notificationSettings)}},"Send notification")},_Notification=function _Notification(){var isPin=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Is Pinned",!1),type=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"info"),msg=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Message","This is a message example"),actionText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Action Text Button",""),onTextBtnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("Action was clicked"),closeCall=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("The message was closed by the user");return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.I,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NotificationExample,{type:type,message:msg,closeCallback:closeCall,actionTextButton:actionText,onTextButtonClick:function handleActionTextCall(){var text="User clicked on [".concat(actionText,"] button");onTextBtnClick(text)},isPinned:isPin})))};_Notification.__docgenInfo={description:"",methods:[],displayName:"_Notification"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alerts/Notification.stories.tsx"]={name:"_Notification",docgenInfo:_Notification.__docgenInfo,path:"src/stories/Alerts/Notification.stories.tsx"})},1196:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_FilterButton",(function(){return _FilterButton}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_future_standard_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(121),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1);__webpack_exports__.default={title:"Filters/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.r,decorators:[]};var Content=styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)([""]))),_FilterButton=function _FilterButton(){var iconList=function generateIconList(){var iconList={};for(var _key in _future_standard_icons__WEBPACK_IMPORTED_MODULE_2__.a)iconList[_key]=_key;return iconList}(),buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Text","Search Example String Field"),iconName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Icon",iconList,Object.keys(iconList)[0]),hasFlipArrow=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has Flip Arrow",!1),isOpen=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("is Open",!1),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("disable",!1);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.r,{icon:iconName,hasFlipArrow:hasFlipArrow,isOpen:isOpen,disabled:disabled},buttonText))};_FilterButton.__docgenInfo={description:"",methods:[],displayName:"_FilterButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Filters/atoms/FilterButton.stories.tsx"]={name:"_FilterButton",docgenInfo:_FilterButton.__docgenInfo,path:"src/stories/Filters/atoms/FilterButton.stories.tsx"})},1197:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_DatePicker",(function(){return _DatePicker}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 20px;\n"])));__webpack_exports__.default={title:"Filters/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.l,decorators:[],parameters:{jsx:{skip:1}}};var exampleCallback=function exampleCallback(fn){return fn.toString=function(){return"   updateCallback: (data: DateInterval | Date) => {}"},fn},_DatePicker=function _DatePicker(){var language=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Language",{English:"en",Japanese:"ja"},"ja"),dateMode=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Date Mode",{single:"single",interval:"interval"},"interval"),timeMode=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Time Mode",{off:"off",single:"single",interval:"interval"},"interval"),dateTimeTextUpper=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Date Time Text Upper","From"),dateTimeTextLower=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Date Time Text Lower","To"),timeZoneTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Time Zone Title","Timezone"),timeZoneValueTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Time Zone Value","JST"),updateCallback=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Date / Time Updated");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.t,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.l,{timeMode:timeMode,dateMode:dateMode,timeZoneValueTitle:timeZoneValueTitle,updateCallback:exampleCallback(updateCallback),dateTimeTextUpper:"ja"===language?"から":dateTimeTextUpper,dateTimeTextLower:"ja"===language?"まで":dateTimeTextLower,timeZoneTitle:"ja"===language?"時間帯":timeZoneTitle,lang:language})))};_DatePicker.__docgenInfo={description:"",methods:[],displayName:"_DatePicker"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Filters/molecules/DatePicker.stories.tsx"]={name:"_DatePicker",docgenInfo:_DatePicker.__docgenInfo,path:"src/stories/Filters/molecules/DatePicker.stories.tsx"})},1198:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_FilterDropdown",(function(){return _FilterDropdown}));var _templateObject,_templateObject2,_templateObject3,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_future_standard_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(121),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3),_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(12);__webpack_exports__.default={title:"Filters/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.s,decorators:[]};var Content=styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)([""]))),Divider=styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)([""]))),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div(_templateObject3||(_templateObject3=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  margin: 100px;\n  display: inline-block;\n"]))),englishDataList=[{text:"Ramen",value:0},{text:"Takoyaki",value:1},{text:"Gyoza",value:2},{text:"Tempura",value:3},{text:"Sushi",value:4}],japaneseDataList=[{text:"ラーメン",value:0},{text:"蛸焼き",value:1},{text:"餃子",value:2},{text:"天婦羅",value:3},{text:"すし",value:4}],englishTextList=[{text:"Super Spicy",value:0},{text:"Spicy",value:1},{text:"Mild",value:2},{text:"Sweet",value:3}],japaneseTextList=[{text:"超辛い",value:0},{text:"辛い",value:1},{text:"中華い",value:2},{text:"甘口",value:3}],yearList=[{text:"1900",value:1900},{text:"1910",value:1920},{text:"1930",value:1930},{text:"1950",value:1950},{text:"1960",value:1960},{text:"1970",value:1970},{text:"1980",value:1980},{text:"1990",value:1990},{text:"2000",value:2e3},{text:"2010",value:2010},{text:"2020",value:2020}],englishPayList=[{text:"Card",value:0},{text:"Cash",value:1},{text:"IC Card",value:2}],japanesePayList=[{text:"カード",value:0},{text:"現金",value:1},{text:"IC カード",value:2}],baseExample=[{text:"Adipiscing",value:0},{text:"Amet",value:1},{text:"Consectetur",value:2},{text:"Dolor sit",value:3},{text:"Lorem ipsum",value:4},{text:"Vestibulum",value:5}],_FilterDropdown=function _FilterDropdown(){var _React$createElement,_React$createElement2,_React$createElement3,_React$createElement4,iconList=function generateIconList(){var iconList={};for(var _key in _future_standard_icons__WEBPACK_IMPORTED_MODULE_4__.a)iconList[_key]=_key;return iconList}(),language=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.select)("Language",{English:"english",Japanese:"japanese"},"japanese"),buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.text)("Text","Department"),buttonIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.select)("Button Icon",iconList,iconList.MetaCategories),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.boolean)("disable",!1),isLoading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.boolean)("Is Loading",!1),optionType=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.select)("Option Type",{text:"text",checkbox:"checkbox",radio:"radio"},"checkbox"),loadingText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.text)("Loading Text","Loading Tags..."),maxDisplayedItems=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.number)("Max Displayed Items",6),selectedItems=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_7__.action)("Currently Selected"),foodSelection=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_7__.action)("Food selected"),spiceAction=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_7__.action)("Spicy level"),paymentAction=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_7__.action)("Payment type"),yearAction=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_7__.action)("Years"),_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),selectedObj=_useState2[0],setSelectedObj=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),_useState4=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),textArraySelected=_useState4[0],setTextArraySelected=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)("english"===language?{text:"Card",value:0}:{text:"カード",value:0}),_useState6=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),wordSelected=_useState6[0],setWordSelected=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([{text:"1990",value:1990}]),_useState8=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),numberSelected=_useState8[0],setNumberSelected=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),_useState10=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState9,2),baseSelected=_useState10[0],setBaseSelected=_useState10[1],handleSelectItemType=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(newSelection){foodSelection(newSelection),setSelectedObj(newSelection)}),[foodSelection]),handleTextListSelect=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(newSelection){spiceAction(newSelection),setTextArraySelected(newSelection)}),[spiceAction]),handleNumberListSelect=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(newSelection){yearAction(newSelection),setNumberSelected(newSelection)}),[yearAction]),handleWordSelect=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(newSelection){paymentAction(newSelection),setWordSelected(newSelection)}),[paymentAction]),handleBaseExample=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(newSelection){selectedItems(newSelection),setBaseSelected(newSelection)}),[selectedItems]);return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Content,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wrapper,{key:"eje-0"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.J,{title:"Base Example",introductionText:"This example doesn't have filter for options."}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.s,{disabled:disabled,isLoading:isLoading,buttonText:buttonText,maxDisplayedItems:maxDisplayedItems,buttonIcon:buttonIcon,list:baseExample,onSelect:handleBaseExample,optionType:"checkbox",selected:baseSelected,loadingText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.h:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.g})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wrapper,{key:"eje-1"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.J,{title:"Data Object",introductionText:"Array of IFilterList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.s,(_React$createElement={buttonIcon:buttonIcon,disabled:disabled,isLoading:isLoading,loadingText:loadingText,maxDisplayedItems:maxDisplayedItems,list:"english"===language?englishDataList:japaneseDataList,buttonText:"english"===language?"Menu":"メニュー",selected:selectedObj,optionType:optionType,onSelect:handleSelectItemType,searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.m:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.n,searchPlaceholder:"english"===language?"Menu options...":"メニュー..."},Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement,"loadingText","english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.h:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.g),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement,"hasOptionsFilter",!0),_React$createElement))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Divider,null),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wrapper,{key:"eje-2"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.J,{title:"Text type",introductionText:"."}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.s,(_React$createElement2={buttonIcon:buttonIcon,disabled:disabled,isLoading:isLoading,loadingText:loadingText,maxDisplayedItems:maxDisplayedItems,list:"english"===language?englishTextList:japaneseTextList,buttonText:"english"===language?"Spice level":"ピリ辛",selected:textArraySelected,onSelect:handleTextListSelect,optionType:"text"},Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement2,"loadingText","english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.h:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.g),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement2,"searchResultText","english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.m:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.n),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement2,"searchPlaceholder","english"===language?"Spice options...":"ピリ辛..."),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement2,"hasOptionsFilter",!0),_React$createElement2))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wrapper,{key:"eje-3"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.J,{title:"Radio type",introductionText:"."}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.s,(_React$createElement3={buttonIcon:buttonIcon,disabled:disabled,isLoading:isLoading,loadingText:loadingText,maxDisplayedItems:maxDisplayedItems,list:"english"===language?englishPayList:japanesePayList,buttonText:"english"===language?"Pay Method":"支払方法",selected:wordSelected,onSelect:handleWordSelect,optionType:"radio"},Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement3,"loadingText","english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.h:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.g),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement3,"searchResultText","english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.m:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.n),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement3,"searchPlaceholder","english"===language?"Pay Methods...":"支払方法..."),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement3,"hasOptionsFilter",!0),_React$createElement3))),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wrapper,{key:"eje-4"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.J,{title:"Checkbox type",introductionText:"Array of IFilterList with numbers [{text: '1900', value:1910}, {text:'1910', value: 1910}]"}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.s,(_React$createElement4={buttonIcon:buttonIcon,disabled:disabled,isLoading:isLoading,loadingText:loadingText,maxDisplayedItems:maxDisplayedItems,buttonText:"english"===language?"Year":"年",selected:numberSelected,list:yearList,onSelect:handleNumberListSelect,optionType:"checkbox"},Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement4,"loadingText","english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.h:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.g),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement4,"searchPlaceholder","english"===language?"Years...":"2020..."),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement4,"searchResultText","english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.m:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_9__.n),Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_React$createElement4,"hasOptionsFilter",!0),_React$createElement4))))};_FilterDropdown.__docgenInfo={description:"",methods:[],displayName:"_FilterDropdown"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Filters/molecules/FilterDropdown.stories.tsx"]={name:"_FilterDropdown",docgenInfo:_FilterDropdown.__docgenInfo,path:"src/stories/Filters/molecules/FilterDropdown.stories.tsx"})},1199:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_FilterInputs",(function(){return _FilterInputs}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12);__webpack_exports__.default={title:"Filters/molecules",component:"FilterInputs",decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)([""]))),depList=[{text:"Adipiscing",value:"Adipiscing"},{text:"Amet",value:"Amet"},{text:"Consectetur",value:"Consectetur"},{text:"Dolor sit",value:"Dolor sit"},{text:"Lorem ipsum",value:"Lorem ipsum"},{text:"Vestibulum",value:"Vestibulum"}],englishDataList=[{text:"Ramen",value:0},{text:"Takoyaki",value:1},{text:"Gyoza",value:2},{text:"Tempura",value:3},{text:"Sushi",value:4}],japaneseDataList=[{text:"ラーメン",value:0},{text:"蛸焼き",value:1},{text:"餃子",value:2},{text:"天婦羅",value:3},{text:"すし",value:4}],_FilterInputs=function _FilterInputs(){var language=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Language",{English:"english",Japanese:"japanese"},"japanese"),hasShowMore=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Has ShowMore",!0),totalResults=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.number)("Total Results",6),foodValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("food selection"),_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),selectedObj=_useState2[0],setSelectedObj=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState4=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),categorySelected=_useState4[0],setCategorySelected=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState6=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),nameVal=_useState6[0],setNameVal=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState8=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),foodSelected=_useState8[0],setFoodSelected=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState10=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState9,2),exampleSearch=_useState10[0],setExampleSearch=_useState10[1],handleSelectItemType=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(newSelection){foodValue(newSelection),setSelectedObj(newSelection)}),[foodValue]),handleCategorySelected=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(newSelection){setCategorySelected(newSelection)}),[]),handleSearcher=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(newValue,id){var validValue=null===newValue?"":newValue;"search1"===id&&setNameVal(validValue),"search2"===id&&setFoodSelected(validValue),"search3"===id&&setExampleSearch(validValue)}),[]),dropdownFilters=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){return[{id:"category1",buttonText:"Department",buttonIcon:"MetaCategories",list:depList,loadingText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.h:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.g,searchPlaceholder:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.k:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.l,searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.m:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.n,onSelect:handleCategorySelected,selected:categorySelected},{id:"food",canHide:!0,buttonText:"english"===language?"Menu":"メニュー",buttonIcon:"Zone",list:"english"===language?englishDataList:japaneseDataList,loadingText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.h:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.g,searchPlaceholder:"english"===language?"Menu options...":"メニュー...",searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.m:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.n,optionType:"checkbox",onSelect:handleSelectItemType,selected:selectedObj}]}),[categorySelected,handleCategorySelected,handleSelectItemType,language,selectedObj]),searchFilters=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){return[{id:"search1",placeholder:"english"===language?"Filter by name...":"名前 フィルター",value:nameVal,name:"english"===language?"Name filter":"名前 フィルター",onChange:function onChange(e){handleSearcher(e.target.value,"search1")}},{id:"search2",placeholder:"english"===language?"Filter by food":"食べ物 フィルター",canHide:!0,showFieldText:"Search by food",value:foodSelected,name:"english"===language?"Menu filter":"メニュー  フィルター",onChange:function onChange(e){handleSearcher(e.target.value,"search2")}},{id:"search3",placeholder:"Search by Item Id",showFieldText:"Search Example String Field",value:exampleSearch,name:"Example",onChange:function onChange(e){handleSearcher(e.target.value,"search3")}}]}),[exampleSearch,foodSelected,handleSearcher,language,nameVal]),labelLists=function generateResultsLabelData(dropdownFilters,searchFilters){var labelLists=[];return searchFilters.forEach((function(searcher){if(""!==searcher.value&&("string"==typeof searcher.value||"number"==typeof searcher.value)){var textValue="number"==typeof searcher.value?searcher.value.toString():searcher.value;labelLists.push({filterId:searcher.id,item:{text:textValue,value:textValue},filterName:searcher.name,type:"search"})}})),dropdownFilters.forEach((function(dropdown){null!==dropdown.selected&&(Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.jb)(dropdown.selected)?labelLists.push({filterId:dropdown.id,item:dropdown.selected,icon:dropdown.buttonIcon,type:"dropdown"}):Array.isArray(dropdown.selected)&&dropdown.selected.forEach((function(item){labelLists.push({filterId:dropdown.id,item:item,icon:dropdown.buttonIcon,type:"dropdown"})})))})),labelLists}(dropdownFilters,searchFilters),onClearAll=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){setSelectedObj(null),setCategorySelected(null),setNameVal(""),setFoodSelected(""),setExampleSearch("")}),[]),onRemoveFilter=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(filterId,type,item){if("dropdown"===type){var foundFilter=dropdownFilters.find((function(dropdown){return dropdown.id===filterId}));if(foundFilter&&foundFilter.onSelect){var newSelected=Array.isArray(foundFilter.selected)?foundFilter.selected.filter((function(currentItem){return function isDifferentValue(item,compareItem){return!Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.jb)(item)||!Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.jb)(compareItem)||compareItem.value!==item.value}(currentItem,item)})):null;foundFilter.onSelect(newSelected)}}"search"===type&&(searchFilters.find((function(searcher){return searcher.id===filterId}))&&handleSearcher("",filterId))}),[dropdownFilters,handleSearcher,searchFilters]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.u,{searchFilters:searchFilters,dropdownFilters:dropdownFilters,hasShowMore:hasShowMore,showMoreText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.q:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.r,showLessText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.o:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.p}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.v,{labelLists:labelLists,totalResults:totalResults,onClearAll:onClearAll,onRemoveFilter:onRemoveFilter,resultTextTemplate:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.i:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.j,clearText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.a:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.b}))};_FilterInputs.__docgenInfo={description:"",methods:[],displayName:"_FilterInputs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Filters/molecules/FilterInputs.stories.tsx"]={name:"_FilterInputs",docgenInfo:_FilterInputs.__docgenInfo,path:"src/stories/Filters/molecules/FilterInputs.stories.tsx"})},12:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"u",(function(){return tableData})),__webpack_require__.d(__webpack_exports__,"v",(function(){return tableDataJp})),__webpack_require__.d(__webpack_exports__,"c",(function(){return columnConfigSample})),__webpack_require__.d(__webpack_exports__,"d",(function(){return columnConfigSampleJp})),__webpack_require__.d(__webpack_exports__,"s",(function(){return statusValuesEng})),__webpack_require__.d(__webpack_exports__,"t",(function(){return statusValuesJp})),__webpack_require__.d(__webpack_exports__,"e",(function(){return costRangeEng})),__webpack_require__.d(__webpack_exports__,"f",(function(){return costRangeJap})),__webpack_require__.d(__webpack_exports__,"m",(function(){return searchTemplateResultEnglish})),__webpack_require__.d(__webpack_exports__,"n",(function(){return searchTemplateResultJapanese})),__webpack_require__.d(__webpack_exports__,"l",(function(){return searchPlaceholderJapanese})),__webpack_require__.d(__webpack_exports__,"k",(function(){return searchPlaceholderEnglish})),__webpack_require__.d(__webpack_exports__,"h",(function(){return loadingTagsEnglish})),__webpack_require__.d(__webpack_exports__,"g",(function(){return genericLoadingJp})),__webpack_require__.d(__webpack_exports__,"q",(function(){return showMoreEng})),__webpack_require__.d(__webpack_exports__,"r",(function(){return showMoreJp})),__webpack_require__.d(__webpack_exports__,"o",(function(){return showLessEng})),__webpack_require__.d(__webpack_exports__,"p",(function(){return showLessJp})),__webpack_require__.d(__webpack_exports__,"i",(function(){return resultTextTemplateEng})),__webpack_require__.d(__webpack_exports__,"j",(function(){return resultTextTemplateJp})),__webpack_require__.d(__webpack_exports__,"a",(function(){return clearEng})),__webpack_require__.d(__webpack_exports__,"b",(function(){return clearJp}));var statusValuesEng=[{text:"OK",value:"good"},{text:"Caution",value:"caution"},{text:"Warning",value:"danger"},{text:"Offline",value:"neutral"}],statusValuesJp=[{text:"OKです。",value:"good"},{text:"注意",value:"caution"},{text:"警告",value:"danger"},{text:"オフライン",value:"neutral"}],costRangeEng=[{text:"Less than 5000",value:5e3},{text:"Less than 10000",value:1e4},{text:"Less than 20000",value:2e4}],costRangeJap=[{text:"以下 5000",value:5e3},{text:"以下 10000",value:1e4},{text:"以下 20000",value:2e4}],tableData=[{id:"device-1",deviceName:"Device Name",deviceLink:"#",status:"good",statusText:"OK",created:new Date,totalTime:"00:10:10",usage:242,usageUnit:"mb",cost:2e4},{id:"device-2",deviceName:"Another Device",deviceLink:"",status:"danger",statusText:"Warning",created:new Date("8/1/21"),totalTime:"00:40:12",usage:2.1,usageUnit:"gb",cost:4e3},{id:"device-3",deviceName:"Old Device",deviceLink:"#",status:"danger",statusText:"Warning",created:new Date("6/22/21"),totalTime:"00:70:00",usage:2.1,usageUnit:"tb",cost:7e3},{id:"device-4",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("5/2/21"),totalTime:"00:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-5",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"caution",statusText:"Caution",created:new Date("4/10/21"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-6",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("2/1/21"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-7",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("12/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-8",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"neutral",statusText:"Offline",created:new Date("8/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-9",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("7/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-10",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",totalTime:"01:30:00",created:new Date("5/1/20"),usage:153,usageUnit:"mb",cost:25e3},{id:"device-11",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OK",created:new Date("2/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3}],tableDataJp=[{id:"device-1",deviceName:"Device Name",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date,totalTime:"00:10:10",usage:242,usageUnit:"mb",cost:2e4},{id:"device-2",deviceName:"Another Device",deviceLink:"",status:"danger",statusText:"注意事項",created:new Date("8/1/21"),totalTime:"00:40:12",usage:2.1,usageUnit:"gb",cost:4e3},{id:"device-3",deviceName:"Old Device",deviceLink:"#",status:"danger",statusText:"警告",created:new Date("6/22/21"),totalTime:"00:60:00",usage:2.1,usageUnit:"tb",cost:7e3},{id:"device-4",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです",created:new Date("5/2/21"),totalTime:"00:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-5",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"caution",statusText:"注意事項",created:new Date("4/10/21"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-6",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date("2/1/21"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-7",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date("12/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-8",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"neutral",statusText:"オフライン",created:new Date("8/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-9",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date("7/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3},{id:"device-10",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",totalTime:"01:10:00",created:new Date("5/1/20"),usage:153,usageUnit:"mb",cost:18e3},{id:"device-11",deviceName:"Magic Edge Cloud",deviceLink:"#",status:"good",statusText:"OKです。",created:new Date("2/1/20"),totalTime:"01:30:00",usage:153,usageUnit:"mb",cost:25e3}],columnConfigSample=[{columnId:"deviceName",groupTitle:"Device",header:"Device Name",sortable:!0,sortActive:!0,cellStyle:"firstColumn"},{columnId:"status",groupTitle:"Device",header:"Status",sortable:!0,showStatus:!0,cellStyle:"normalImportance"},{columnId:"created",groupTitle:"Device",header:"Created",sortable:!1,cellStyle:"lowImportance",alignment:"center",hasCopyButton:!0},{columnId:"run",groupTitle:"Time",header:"Total Run Time",sortable:!1,cellStyle:"lowImportance",alignment:"left",hasCopyButton:!0},{columnId:"usage",header:"Usage",sortable:!1,cellStyle:"normalImportance",alignment:"right",showUnit:!0},{columnId:"cost",header:"Cost",sortable:!0,cellStyle:"highImportance",alignment:"right",hasCopyButton:!0}],columnConfigSampleJp=[{columnId:"deviceName",groupTitle:"デバイス",header:"デバイス名",sortable:!0,sortActive:!0,cellStyle:"firstColumn"},{columnId:"status",groupTitle:"デバイス",header:"ステータス",sortable:!0,showStatus:!0,cellStyle:"normalImportance"},{columnId:"created",groupTitle:"デバイス",header:"作成時期",sortable:!1,cellStyle:"lowImportance",alignment:"center",hasCopyButton:!0},{columnId:"run",groupTitle:"時間",header:"ランタイム",sortable:!1,cellStyle:"lowImportance",alignment:"left",hasCopyButton:!0},{columnId:"usage",header:"使用",sortable:!1,cellStyle:"normalImportance",alignment:"right",showUnit:!0},{columnId:"cost",header:"価格",sortable:!0,cellStyle:"highImportance",alignment:"right",hasCopyButton:!0}],searchTemplateResultEnglish="Showing [VISIBLE] of [TOTAL]",searchTemplateResultJapanese="[VISIBLE] 〜 [TOTAL]件",searchPlaceholderJapanese="フィルタータグ...",searchPlaceholderEnglish="Filter tags...",loadingTagsEnglish="Loading Tags...",genericLoadingJp="ローディング...",showMoreEng="Show More",showMoreJp="もっと見る",showLessEng="Show less",showLessJp="折りたたむ",resultTextTemplateEng="Showing Results ([TOTAL_RESULTS]):",resultTextTemplateJp="表示結果 ([TOTAL_RESULTS]):",clearEng="CLEAR ALL",clearJp="すべてクリア"},1200:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_SortDropdown",(function(){return _SortDropdown}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11);__webpack_exports__.default={title:"Filters/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.S,decorators:[],parameters:{jsx:{skip:1}}};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)([""]))),_SortDropdown=function _SortDropdown(){var language=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.select)("Language",{English:"english",Japanese:"japanese"},"japanese"),dropdownList=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){return[{text:"english"===language?"Name":"名前",value:"name"},{text:"english"===language?"Status":"ステータス",value:"status"},{text:"english"===language?"Cost":"価格",value:"cost"}]}),[language]),_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)({text:dropdownList[1].text,value:dropdownList[0].value}),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),sortSelected=_useState2[0],setSortSelected=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState4=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),isAscending=_useState4[0],setIsAScending=_useState4[1],isLoading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Is Loading",!1),lastSelection=(Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.object)("Dropdown list",dropdownList),Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action)("new sort")),handleSelections=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(newSort,isSortAscending){setSortSelected(newSort),setIsAScending(isSortAscending),lastSelection({newSort:newSort,isSortAscending:isSortAscending})}),[lastSelection]),getSortedTranslation=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){var found=dropdownList.find((function(item){return sortSelected.value===item.value}));return found?"english"===language?"Sorted by ".concat(found.text):"".concat(found.text," で"):"english"===language?"Sorted by ".concat(sortSelected.text):"".concat(sortSelected.text," で")}),[dropdownList,language,sortSelected.text,sortSelected.value]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.S,{isSortAscending:isAscending,buttonText:getSortedTranslation(),isLoading:isLoading,list:dropdownList,selected:sortSelected,onSelect:handleSelections,ascendingText:"english"===language?"Ascending":"昇順",descendingText:"english"===language?"Descending":"降順"}))};_SortDropdown.__docgenInfo={description:"",methods:[],displayName:"_SortDropdown"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Filters/molecules/SortDropdown.stories.tsx"]={name:"_SortDropdown",docgenInfo:_SortDropdown.__docgenInfo,path:"src/stories/Filters/molecules/SortDropdown.stories.tsx"})},1201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_FilterBar",(function(){return _FilterBar}));var _templateObject,_templateObject2,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3),_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(12),_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(57);__webpack_exports__.default={title:"Filters/Organism",component:"FilterBar",decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  margin: 20px;\n"]))),TypeTableWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\nmargin: 60px 0 20px 0\n"]))),before=(new Date,new Date);before.setDate(before.getDate()-5);var dataInitialState=Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.g)(_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.u,"deviceName",!0),getFilteredData=function getFilteredData(currentSelected,data){return Array.isArray(currentSelected)&&currentSelected.length>0?currentSelected.reduce((function(accumulator,currentFilter){return null===currentFilter.selected?accumulator:"dropdownForStatus"===currentFilter.id&&(Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.jb)(currentFilter.selected)||Array.isArray(currentFilter.selected))?Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.e)(accumulator,currentFilter.selected):"priceFilter"===currentFilter.id&&Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.jb)(currentFilter.selected)?Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.d)(accumulator,currentFilter.selected):"inputForDeviceName"===currentFilter.id&&Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.jb)(currentFilter.selected)?Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.c)(accumulator,currentFilter.selected):"inputForDate"===currentFilter.id&&Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.jb)(currentFilter.selected)?Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.a)(accumulator,currentFilter.selected):"datePickerForRuntime"!==currentFilter.id||Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.jb)(currentFilter.selected)||Array.isArray(currentFilter.selected)?accumulator:Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.b)(accumulator,currentFilter.selected)}),data):data},_FilterBar=function _FilterBar(){var language=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.select)("Language",{English:"english",Japanese:"japanese"},"japanese"),_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(dataInitialState),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),data=_useState2[0],setData=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.f)(dataInitialState)),_useState4=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),rows=_useState4[0],setRows=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),_useState6=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),filters=_useState6[0],setFilters=_useState6[1],singleFilter=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Single Filter",!1),hasShowMore=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Has Show More",!0),resultsDateFormat=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Results date format","yyyy-MM-dd"),selectCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(checked,id){var newRows=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(rows),targetRowIndex=newRows.findIndex((function(row){return row.id===id}));newRows[targetRowIndex]._checked=checked,setRows(newRows)}),[rows,setRows]),toggleAllCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(checked){var newRows=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(rows);newRows.forEach((function(row){row._checked=checked})),setRows(newRows)}),[rows,setRows]),sortCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(ascending,columnId){var unsortedData=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(data),validKey=columnId,sortedData=Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.g)(unsortedData,validKey,ascending);setData(sortedData)}),[data]),searchers=[{id:"inputForDeviceName",placeholder:"english"===language?"Filter by Device Name...":"デバイス名前 フィルター",name:"english"===language?"Device Name":"デバイス名前"},{id:"inputForDate",placeholder:"english"===language?"Filter by Date":"年月日 フィルター",name:"english"===language?"Date":"年月日",canHide:!0,showFieldText:"english"===language?"Show Date Input":"年月日 みる"}],dropdowns=[{id:"dropdownForStatus",buttonText:"english"===language?"Status":"ステータス",list:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.s:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.t,buttonIcon:"Camera",optionType:"checkbox",loadingText:"english"===language?"Loading Status ...":_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.g,searchPlaceholder:"english"===language?"Status...":"ステータス...",searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.m:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.n},{id:"priceFilter",canHide:!0,buttonText:"english"===language?"Cost":"価格",list:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.e:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.f,buttonIcon:"Usage",optionType:"radio",loadingText:"english"===language?"Loading Cost...":_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.g,searchPlaceholder:"english"===language?"Cost...":"価格...",searchResultText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.m:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.n}],datePickers=[{id:"datePickerForRuntime",dateMode:"interval",timeMode:"off",buttonText:"english"===language?"Date Range":"日付範囲",buttonIcon:"DateTime",dateTimeTextUpper:"english"===language?"From":"から",dateTimeTextLower:"english"===language?"To":"まで",timeZoneTitle:"english"===language?"Timezone":"時間帯",lang:"english"===language?"en":"ja"}],filtersValues=(Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.object)("Search Filters",searchers),Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.object)("DropdownFilters",dropdowns),Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.object)("DatePickers",datePickers),Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action)("onChangeCallback")),handleFilters=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(currentSelected){filtersValues(currentSelected);var localData="english"===language?Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.g)(_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.u,"deviceName",!0):Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.g)(_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.v,"deviceName",!0),tempData=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(localData);if(0===currentSelected.length)setData(localData),setFilters([]);else{var filteredData=getFilteredData(currentSelected,tempData);setData(filteredData),setFilters(currentSelected)}}),[filtersValues,language]);return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){var localizeData="english"===language?Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.g)(_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.u,"deviceName",!0):Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.g)(_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.v,"deviceName",!0),newData=getFilteredData(filters,localizeData);setData(newData)}),[filters,language]),Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){setRows(Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_9__.f)(data))}),[data]),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.q,{singleFilter:singleFilter,hasShowMore:hasShowMore,searchersConfig:searchers,dropdownsConfig:dropdowns,datePickersConfig:datePickers,onChangeCallback:handleFilters,totalResults:rows.length,showMoreText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.q:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.r,showLessText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.o:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.p,filtersTitle:"english"===language?"Filters":"フィルター",resultTextTemplate:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.i:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.j,clearText:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.a:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.b,resultsDateFormat:resultsDateFormat}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TypeTableWrapper,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.hb,{selectCallback:selectCallback,toggleAllCallback:toggleAllCallback,rows:rows,sortCallback:sortCallback,columnConfig:"english"===language?_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.c:_helpers_data_samples__WEBPACK_IMPORTED_MODULE_8__.d,hasStatus:!0,selectable:!0,hasThumbnail:!0,hasTypeIcon:!0,defaultAscending:!0,hasHeaderGroups:!0})))};_FilterBar.__docgenInfo={description:"Filter Bar Story Starts",methods:[],displayName:"_FilterBar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Filters/organisms/FilterBar.stories.tsx"]={name:"_FilterBar",docgenInfo:_FilterBar.__docgenInfo,path:"src/stories/Filters/organisms/FilterBar.stories.tsx"})},1202:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"StandardButton",(function(){return StandardButton}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Buttons",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.f,decorators:[]};var StandardButton=function StandardButton(){var buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Button Text","Example Title"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Xsmall:"xsmall",Small:"small",Normal:"normal",Large:"large"},"normal"),buttonDisabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),buttonOnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("button-click");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.f,{design:buttonDesign,size:buttonSize,onClick:buttonOnClick,disabled:buttonDisabled},buttonText)};StandardButton.__docgenInfo={description:"",methods:[],displayName:"StandardButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Buttons/Button.stories.tsx"]={name:"StandardButton",docgenInfo:StandardButton.__docgenInfo,path:"src/stories/Form/Buttons/Button.stories.tsx"})},1203:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_WithIcon",(function(){return _WithIcon}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Buttons",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.g,decorators:[]};var _WithIcon=function _WithIcon(){var iconList=generateIconList(),buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Button Text","Example Title"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Xsmall:"xsmall",Small:"small",Normal:"normal",Large:"large"},"normal"),buttonDisabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),buttonIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Icon",iconList,Object.keys(iconList)[0]),buttonIconPosition=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Icon Position",{Left:"left",Right:"right"},"right"),buttonOnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("button-click");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.g,{design:buttonDesign,size:buttonSize,onClick:buttonOnClick,icon:buttonIcon,position:buttonIconPosition,disabled:buttonDisabled},buttonText)},generateIconList=function generateIconList(){var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.z)iconList[_key]=_key;return iconList};_WithIcon.__docgenInfo={description:"",methods:[],displayName:"_WithIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Buttons/ButtonWithIcons.stories.tsx"]={name:"_WithIcon",docgenInfo:_WithIcon.__docgenInfo,path:"src/stories/Form/Buttons/ButtonWithIcons.stories.tsx"})},1204:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_WithLoading",(function(){return _WithLoading}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Buttons",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.h,decorators:[]};var _WithLoading=function _WithLoading(){var buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Button Text","Example Title"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Xsmall:"xsmall",Small:"small",Normal:"normal",Large:"large"},"normal"),buttonDisabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),buttonLoading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Loading",!0),buttonLoadingPosition=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Loading Position",{Left:"left",Right:"right"},"right"),buttonOnClick=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("button-click");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.h,{design:buttonDesign,size:buttonSize,onClick:buttonOnClick,loading:buttonLoading,position:buttonLoadingPosition,disabled:buttonDisabled},buttonText)};_WithLoading.__docgenInfo={description:"",methods:[],displayName:"_WithLoading"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Buttons/ButtonWithLoading.stories.tsx"]={name:"_WithLoading",docgenInfo:_WithLoading.__docgenInfo,path:"src/stories/Form/Buttons/ButtonWithLoading.stories.tsx"})},1205:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Checkbox",(function(){return _Checkbox}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Form/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.i,decorators:[]};var _Checkbox=function _Checkbox(){var disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Checked",!1),onChange=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("value-changed");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.i,{checked:checked,disabled:disabled,onChange:onChange})};_Checkbox.__docgenInfo={description:"",methods:[],displayName:"_Checkbox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Checkbox.stories.tsx"]={name:"_Checkbox",docgenInfo:_Checkbox.__docgenInfo,path:"src/stories/Form/Checkbox.stories.tsx"})},1206:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_AreaUploadManager",(function(){return _AreaUploadManager}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11);__webpack_exports__.default={title:"Form/File Management",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.c,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 20px\n"]))),defaultIcons=["MonitoringProfile","RetryJob"],fileTypes=["image/jpeg","image/png","text/csv"],_AreaUploadManager=function _AreaUploadManager(){var showCustomComponent=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Show Custom Component",!1),title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Title","Select Files"),selectFilesText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Select Files Text","Select Files"),description=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Description","To begin, drop your CSV and Images files here to continue or click Select Files below."),addMoreFilesText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Add More Files Text","Add More files"),fileIcons=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("File Icons",defaultIcons),showValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("Input Callback"),allowedFileTypes=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("allowedFileTypes",fileTypes);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.c,{selectFilesText:selectFilesText,title:title,fileIcons:fileIcons,description:description,allowedFileTypes:allowedFileTypes,addMoreFilesText:addMoreFilesText,onChangeCallback:function inputCallback(goodFiles,rejectedFiles){console.log("good Files",goodFiles),console.log("rejected",rejectedFiles),showValue({goodFiles:goodFiles,rejectedFiles:rejectedFiles})},customComponent:showCustomComponent?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.J,{title:"CustomComponent Example",introductionText:"This is a page header component that was sent as an example of a custom component. Select multiple files"}):void 0}))};_AreaUploadManager.__docgenInfo={description:"",methods:[],displayName:"_AreaUploadManager"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/FileManagement/AreaUploadManager.stories.tsx"]={name:"_AreaUploadManager",docgenInfo:_AreaUploadManager.__docgenInfo,path:"src/stories/Form/FileManagement/AreaUploadManager.stories.tsx"})},1207:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_AvatarUploader",(function(){return _AvatarUploader}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)([""])));__webpack_exports__.default={title:"Form/File Management",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.d,decorators:[]};var _AvatarUploader=function _AvatarUploader(){var title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Uploader Title","Photograph"),photoText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Photo Text","Drop Photo"),buttonText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Button Text","Select File"),buttonTextReplace=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Button Text Replace","Replace Photo"),uploaderCropText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Uploader Crop Text","Crop Image"),cropToolTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("CropTool Title","Crop utility"),cropToolCancelTxt=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("CropTool Cancel Text","Cancel"),cropToolConfirmTxt=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("CropTool Confirm Text","Crop and Save"),deletePhotoText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Delete Photo Text","Remove"),baseImg=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Current Image",!1),hasCrop=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Has Crop",!0),showValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Update Callback"),errorValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("On Error"),onRemoveValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("On Remove");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.d,{onAvatarUpdate:function uploadReady(imgFile){console.log("file",imgFile),showValue(imgFile.name)},currentImg:baseImg?"http://placekitten.com/g/200/300":"",title:title,photoText:photoText,buttonText:buttonText,buttonTextReplace:buttonTextReplace,onError:function onError(msg){console.log(msg),errorValue(msg)},onRemove:function onRemove(){onRemoveValue("The user has deleted Avatar image")},uploaderCropText:uploaderCropText,hasCrop:hasCrop,cropToolTitle:cropToolTitle,cropToolCancelTxt:cropToolCancelTxt,cropToolConfirmTxt:cropToolConfirmTxt,deletePhotoText:deletePhotoText}))};_AvatarUploader.__docgenInfo={description:"",methods:[],displayName:"_AvatarUploader"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/FileManagement/AvatarUploader.stories.tsx"]={name:"_AvatarUploader",docgenInfo:_AvatarUploader.__docgenInfo,path:"src/stories/Form/FileManagement/AvatarUploader.stories.tsx"})},1208:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_CropTool",(function(){return _CropTool}));var _templateObject,_templateObject2,_templateObject3,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(45),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7__),Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n    margin: 20px;\n"]))),CropResult=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.img(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n"]))),NewImageArea=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject3||(_templateObject3=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)([""])));__webpack_exports__.default={title:"Form/File Management",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.k,decorators:[],escapeHTML:!1};var _CropTool=function _CropTool(){var isResizable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.boolean)("Is Resizable",!0),_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),cropImg=_useState2[0],setCropImg=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState4=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),isCropping=_useState4[0],setIsCropping=_useState4[1],title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.text)("Title","Crop Image"),cancelBtnTxt=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.text)("Cancel Button Text","Cancel"),cropBtnTxt=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.text)("Crop Button Text","Crop and Save"),canvasHeight=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.number)("Canvas Height",400),canvasWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.number)("Canvas Width",450),cropHeight=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.number)("Crop Height",300),cropWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.number)("Crop Width",300),aspectRatio=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__.number)("Aspect Ratio",0),errorValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("Error");return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container,null,isCropping?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.k,{key:"".concat(isResizable," - ").concat(canvasHeight," - ").concat(canvasWidth," - ").concat(cropHeight," - ").concat(cropWidth," - ").concat(aspectRatio),imgUrl:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,title:title,onCrop:function onCrop(newImgUrl){setCropImg(newImgUrl),setIsCropping(!1)},onClose:function onClose(){setIsCropping(!1)},cancelBtnTxt:cancelBtnTxt,cropBtnTxt:cropBtnTxt,isResizable:isResizable,canvasHeight:canvasHeight,canvasWidth:canvasWidth,cropHeight:cropHeight,cropWidth:cropWidth,onError:function onError(msg){console.log(msg),errorValue(msg)},aspectRatio:aspectRatio}):null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NewImageArea,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3",null,"Cropped Area"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CropResult,{src:cropImg})))};_CropTool.__docgenInfo={description:"",methods:[],displayName:"_CropTool"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/FileManagement/CropTool.stories.tsx"]={name:"_CropTool",docgenInfo:_CropTool.__docgenInfo,path:"src/stories/Form/FileManagement/CropTool.stories.tsx"})},1209:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_DropArea",(function(){return _DropArea}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  max-width: 500px;\n"])));__webpack_exports__.default={title:"Form/File Management",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.n,decorators:[]};var _DropArea=function _DropArea(){var textVal=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Text","Drop a file"),heightVal=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Height","300px"),showValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Input Callback");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.n,{height:heightVal,text:textVal,dropCallback:function myCallback(newFiles){console.log("file",newFiles),1===newFiles.length?showValue(newFiles[0].name):showValue(newFiles)}}))};_DropArea.__docgenInfo={description:"",methods:[],displayName:"_DropArea"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/FileManagement/DropArea.stories.tsx"]={name:"_DropArea",docgenInfo:_DropArea.__docgenInfo,path:"src/stories/Form/FileManagement/DropArea.stories.tsx"})},1210:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_InputFileButton",(function(){return _InputFileButton}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n"])));__webpack_exports__.default={title:"Form/File Management",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.A,decorators:[]};var _InputFileButton=function _InputFileButton(){var multiple=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Multiple",!1),textVal=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Text","Select a File"),buttonDesign=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.select)("Button Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),buttonSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.select)("Button Size",{Small:"small",Normal:"normal",Large:"large"},"normal"),showValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Input Callback");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.A,{text:textVal,buttonDesign:buttonDesign,buttonSize:buttonSize,multiple:multiple,inputCallback:function inputCallback(newFiles){console.log("file",newFiles),1===newFiles.length?showValue(newFiles[0].name):showValue(newFiles)}}))};_InputFileButton.__docgenInfo={description:"",methods:[],displayName:"_InputFileButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/FileManagement/InputFileButton.stories.tsx"]={name:"_InputFileButton",docgenInfo:_InputFileButton.__docgenInfo,path:"src/stories/Form/FileManagement/InputFileButton.stories.tsx"})},1211:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_DurationSlider",(function(){return _DurationSlider}));var _templateObject,_templateObject2,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.o,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  display: flex;\n"]))),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__.d.div(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  margin: 20px;\n  width: 280px;\n"]))),exampleMarks=[{value:1,label:"1H"},{value:2,label:"2H"},{value:3,label:"3H"},{value:4,label:"4H"},{value:5,label:"5H"},{value:6,label:"6H"},{value:7,label:"7H"},{value:8,label:"8H"}],exampleMarks2=[{value:3,label:"3s"},{value:360,label:""},{value:720,label:""},{value:1080,label:""},{value:1440,label:""},{value:1800,label:""},{value:2160,label:""},{value:2520,label:""},{value:2880,label:""},{value:3240,label:""},{value:3600,label:"1h"}],_DurationSlider=function _DurationSlider(){var title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","Duration"),durationUnit=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Time Unit",{Seconds:"seconds",Minutes:"minutes",Hours:"hours"},"hours"),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Disabled",!1),maxValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Max",8),minValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Min",1),defaultValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Default value",6),showValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Input Callback"),marks=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Marks",exampleMarks),_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)({time:30,unit:"minutes"}),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),value2=_useState2[0],setValue2=_useState2[1],title2=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title 2","Time"),disabled2=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Disabled 2",!1),maxValue2=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Max 2",3600),minValue2=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Min 2",3),defaultValue2=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Default value 2",1800),onlyMarkSelect=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Only Mark Select",!0),showValue2=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Input Callback"),marks2=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Marks 2",exampleMarks2);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.J,{title:"Simple example",introductionText:"Values are controlled by component"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.o,{max:maxValue,min:minValue,disabled:disabled,inputCallback:function handleUpdate(value){console.log("updated value",value),showValue("Returned value: ".concat(value),value)},marks:marks,defaultValue:defaultValue,title:title,timeUnit:durationUnit})),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.J,{title:"Mixed values example",introductionText:"Values are controlled from outside"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.o,{max:maxValue2,min:minValue2,disabled:disabled2,inputCallback:function handleUpdate2(value){console.log("updated value2",value),showValue2("Returned value2: ".concat(value),value);var newValue=function secToMinAndHours(seconds){return seconds>=3600?{time:Math.round(seconds/3600),unit:"hours"}:seconds>=60?{time:Math.round(seconds/60),unit:"minutes"}:{time:seconds,unit:"seconds"}}(value);setValue2(newValue)},marks:marks2,defaultValue:defaultValue2,controlledValue:value2.time,title:title2,timeUnit:value2.unit,onlyMarkSelect:onlyMarkSelect})))};_DurationSlider.__docgenInfo={description:"",methods:[],displayName:"_DurationSlider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Input/DurationSlider.stories.tsx"]={name:"_DurationSlider",docgenInfo:_DurationSlider.__docgenInfo,path:"src/stories/Form/Input/DurationSlider.stories.tsx"})},1212:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TextInput",(function(){return TextInput}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n"])));__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.fb,decorators:[]};var TextInput=function TextInput(){var inputName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Name","my_input"),inputLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","My Input"),inputFeedback=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Feedback","This is a feedback message."),inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),inputState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.fb,{name:inputName,label:inputLabel,placeholder:inputPlaceholder,fieldState:inputState,feedbackMessage:inputFeedback}))};TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Input/Input.stories.tsx"]={name:"TextInput",docgenInfo:TextInput.__docgenInfo,path:"src/stories/Form/Input/Input.stories.tsx"})},1213:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PasswordInput",(function(){return PasswordInput}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n"])));__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.L,decorators:[]};var PasswordInput=function PasswordInput(){var inputName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Name","my_input"),inputLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","My Input"),inputValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Value","Test"),inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),inputState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.L,{name:inputName,label:inputLabel,defaultValue:inputValue,placeholder:inputPlaceholder,fieldState:inputState}))};PasswordInput.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Input/PasswordInput.stories.tsx"]={name:"PasswordInput",docgenInfo:PasswordInput.__docgenInfo,path:"src/stories/Form/Input/PasswordInput.stories.tsx"})},1214:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_PercentageSlider",(function(){return _PercentageSlider}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.M,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n    width: 268px;\n"]))),exampleMarks=[{value:0,label:"0%"},{value:20},{value:40},{value:60},{value:80},{value:100,label:"100%"}],_PercentageSlider=function _PercentageSlider(){var title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Title","Duration"),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),defaultValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Default value",30),customThumb=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Custom colors function",!1),customTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Custom Title function",!1),showValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Input Callback"),marks=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Marks",exampleMarks);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.M,{disabled:disabled,inputCallback:function handleUpdate(value){console.log("updated value",value),showValue("Returned value: ".concat(value),value)},marks:marks,defaultValue:defaultValue,title:title,updateThumbColor:customThumb?function otherColorHandler(value){return value<=20?"neutral":value>20&&value<=80?"info":"error"}:void 0,updateTitle:customTitle?function otherTitlesHandler(value){return value<=20?"Small sound":value>20&&value<=80?"Normal sound":"Dangerous sound"}:void 0}))};_PercentageSlider.__docgenInfo={description:"",methods:[],displayName:"_PercentageSlider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Input/PercentageSlider.stories.tsx"]={name:"_PercentageSlider",docgenInfo:_PercentageSlider.__docgenInfo,path:"src/stories/Form/Input/PercentageSlider.stories.tsx"})},1215:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_RadioButton",(function(){return _RadioButton}));var _templateObject,_templateObject2,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.N,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)([""]))),OptionsWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  margin: 20px 0;\n"]))),_RadioButton=function _RadioButton(){var disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Disabled",!1),selection=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("value-changed"),name=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("Name","Example"),_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),currentChecked=_useState2[0],setCurrentCheck=_useState2[1],handleChange=function handleChange(value){selection(value),setCurrentCheck(value)};return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OptionsWrapper,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.C,{htmlFor:"option1",labelText:"Option 1",rightAlign:!0},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.N,{name:name,disabled:disabled,currentChecked:currentChecked,id:"option1",value:"option1",onChangeCallback:handleChange}))),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OptionsWrapper,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.C,{htmlFor:"option2",labelText:"Option 2",rightAlign:!0},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.N,{name:name,disabled:disabled,currentChecked:currentChecked,id:"option2",value:"option2",onChangeCallback:handleChange}))),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OptionsWrapper,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.C,{htmlFor:"option3",labelText:"Option 3",rightAlign:!0},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.N,{name:name,disabled:disabled,currentChecked:currentChecked,id:"option3",value:"option3",onChangeCallback:handleChange}))))};_RadioButton.__docgenInfo={description:"",methods:[],displayName:"_RadioButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Input/RadioButton.stories.tsx"]={name:"_RadioButton",docgenInfo:_RadioButton.__docgenInfo,path:"src/stories/Form/Input/RadioButton.stories.tsx"})},1216:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_SliderInput",(function(){return _SliderInput}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.Q,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 20px;\n    width: 268px;\n"]))),exampleMarks=[{value:1,label:"1H"},{value:2,label:"2H"},{value:3,label:"3H"},{value:4,label:"4H"},{value:5,label:"5H"},{value:6,label:"6H"},{value:7,label:"7H"},{value:8,label:"8H"}],_SliderInput=function _SliderInput(){var disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1),maxValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Max",8),minValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Min",1),defaultValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Default value",6),showValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Input Callback"),marks=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Marks",exampleMarks);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.Q,{max:maxValue,min:minValue,disabled:disabled,inputCallback:function handleUpdate(value){console.log("updated value",value),showValue("Returned value: ".concat(value),value)},marks:marks,defaultValue:defaultValue}))};_SliderInput.__docgenInfo={description:"",methods:[],displayName:"_SliderInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Input/SliderInput.stories.tsx"]={name:"_SliderInput",docgenInfo:_SliderInput.__docgenInfo,path:"src/stories/Form/Input/SliderInput.stories.tsx"})},1217:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_SmallInput",(function(){return _SmallInput}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.R,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin: 100px;\n"]))),_SmallInput=function _SmallInput(){var inputType=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{Text:"text",Password:"password",Email:"email",Number:"number"},"text"),inputName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Input Name","my_input"),inputLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","My Input"),inputUnit=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Unit","º"),inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),inputState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.R,{type:inputType,unit:inputUnit,name:inputName,label:inputLabel,placeholder:inputPlaceholder,fieldState:inputState,disabled:"disabled"===inputState}))};_SmallInput.__docgenInfo={description:"",methods:[],displayName:"_SmallInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Input/SmallInput.stories.tsx"]={name:"_SmallInput",docgenInfo:_SmallInput.__docgenInfo,path:"src/stories/Form/Input/SmallInput.stories.tsx"})},1218:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TextAreaField",(function(){return _TextAreaField}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 20px;\n"])));__webpack_exports__.default={title:"Form/Input",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.eb,decorators:[]};var _TextAreaField=function _TextAreaField(){var fieldName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Textarea Name","example_texarea"),fieldLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Label","Textarea Example"),fieldFeedback=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Feedback","This is a feedback message."),fieldPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder","Placeholder..."),currentState=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.eb,{name:fieldName,label:fieldLabel,placeholder:fieldPlaceholder,feedbackMessage:fieldFeedback,fieldState:currentState}))};_TextAreaField.__docgenInfo={description:"",methods:[],displayName:"_TextAreaField"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Input/TextAreaField.stories.tsx"]={name:"_TextAreaField",docgenInfo:_TextAreaField.__docgenInfo,path:"src/stories/Form/Input/TextAreaField.stories.tsx"})},1219:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_SelectField",(function(){return _SelectField}));var _templateObject,_templateObject2,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);__webpack_exports__.default={title:"Form/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.O,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 20px;\n"]))),FixedSelect=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  "," {\n    width: ",";\n  }\n"])),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.P,(function(_ref){var width=_ref.width;return width||"60px"})),_SelectField=function _SelectField(){var isCompact=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("isCompact",!1),placeholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Placeholder free width","Choose an option..."),defaultValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Default Value free width","option3"),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Disabled",!1),freeSelectValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Free select value"),fixedSelectValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Free select value"),selectWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Fix width","60px"),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Free Select Label",{htmlFor:"free_select",text:"Field Label"}),fixLabel=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Fix Select Label",{htmlFor:"fix_select",text:"Page",isSameRow:!0});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.J,{title:"Select free width"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.O,{isCompact:isCompact,placeholder:placeholder,label:label,selectWidth:selectWidth,disabled:disabled,defaultValue:defaultValue,changeCallback:function freeOnChange(value){freeSelectValue(value)}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:"option1"},"Example Option 1"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:"option2"},"Example Option 2"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:"option3"},"Example Option 3"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:"option4"},"Example Option 4")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.J,{title:"Select fixed width"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FixedSelect,{width:selectWidth},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.O,{isCompact:isCompact,disabled:disabled,label:fixLabel,defaultValue:1,changeCallback:function fixSelectOnChange(value){fixedSelectValue(value)}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:1},"1"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:5},"5"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:10},"10"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:15},"15"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:20},"20"))))};_SelectField.__docgenInfo={description:"",methods:[],displayName:"_SelectField"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/SelectField.stories.tsx"]={name:"_SelectField",docgenInfo:_SelectField.__docgenInfo,path:"src/stories/Form/SelectField.stories.tsx"})},1220:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Switch",(function(){return _Switch}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Form/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.V,decorators:[]};var _Switch=function _Switch(){var labelText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Label Text","The Label"),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Default Checked",!0),state=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("State",{Default:"default",Disabled:"disabled",Locked:"locked",Loading:"loading",Failure:"failure"},"default"),leftTheme=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Left Theme",{Off:"off",On:"on",Danger:"danger"},"off"),rightTheme=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Right Theme",{Off:"off",On:"on",Danger:"danger"},"on"),onChangeCallback=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("value-changed");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.V,{state:state,leftTheme:leftTheme,rightTheme:rightTheme,labelText:labelText,checked:checked,onChangeCallback:onChangeCallback})};_Switch.__docgenInfo={description:"",methods:[],displayName:"_Switch"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Form/Switch.stories.tsx"]={name:"_Switch",docgenInfo:_Switch.__docgenInfo,path:"src/stories/Form/Switch.stories.tsx"})},1221:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoadingSpinner",(function(){return LoadingSpinner}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);__webpack_exports__.default={title:"Misc",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.T,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  padding: 12px 24px;\n  width: 100px;\n  border-radius: 3px;\n\n  margin: 15% auto;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n\n  ",";\n"])),(function(_ref){var theme=_ref.theme,styling=_ref.styling;return theme.styles.feedbackBar[function containerBackgroundKey(styling){switch(styling){case"primary":return"info";case"secondary":return"neutral";case"danger":return"error";default:return"neutral"}}(styling)]})),LoadingSpinner=function LoadingSpinner(){var spinnerSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Size",{Small:"small",Medium:"medium",Large:"large",XLarge:"xlarge"},"medium"),spinnerType=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Style",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,{styling:spinnerType},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.T,{size:spinnerSize,styling:spinnerType}))};LoadingSpinner.__docgenInfo={description:"",methods:[],displayName:"LoadingSpinner"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Indicators/Spinner.stories.tsx"]={name:"LoadingSpinner",docgenInfo:LoadingSpinner.__docgenInfo,path:"src/stories/Indicators/Spinner.stories.tsx"})},1222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Icons",(function(){return _Icons}));var _templateObject,_templateObject2,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(120),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_future_standard_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(121);__webpack_exports__.default={title:"Misc",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.y,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  padding: 12px 24px;\n  width: 100px;\n  border-radius: 3px;\n\n  margin: 15% auto;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n\n"]))),Grid=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 50px);\n  column-gap: 24px;\n  row-gap: 24px;\n  text-align: center;\n"]))),_Icons=function _Icons(){var iconList=function generateIconList(){var iconList={};for(var _key in _future_standard_icons__WEBPACK_IMPORTED_MODULE_6__.a)iconList[_key]=_key;return iconList}(),showAll=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show All",!1),forSvgUsage=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("For SVG Usage",!1),icon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Name",iconList,Object.keys(iconList)[0]),color=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle",Inverse:"inverse",Primary:"primary",Danger:"danger"},"mono"),weight=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Weight",{Light:"light",Regular:"regular",Heavy:"heavy",Strong:"strong"},"regular"),size=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Size",24);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container,null,showAll?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Grid,null,function generateIconGrid(props){return Object.keys(_future_standard_icons__WEBPACK_IMPORTED_MODULE_6__.a).map((function(iconName){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{title:iconName,key:iconName},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.y,Object.assign({icon:iconName},props)))}))}(Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},{color:color,weight:weight,size:size,forSvgUsage:forSvgUsage})))):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.y,{icon:icon,weight:weight,color:color,size:size,forSvgUsage:forSvgUsage}))};_Icons.__docgenInfo={description:"",methods:[],displayName:"_Icons"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Misc/Icons.stories.tsx"]={name:"_Icons",docgenInfo:_Icons.__docgenInfo,path:"src/stories/Misc/Icons.stories.tsx"})},1223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Status_Icon",(function(){return _Status_Icon}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_future_standard_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(121);__webpack_exports__.default={title:"Misc",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.U,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 20px;\n"]))),_Status_Icon=function _Status_Icon(){var iconList=function generateIconList(){var iconList={};for(var _key in _future_standard_icons__WEBPACK_IMPORTED_MODULE_5__.a)iconList[_key]=_key;return iconList}(),icon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Name",iconList,Object.keys(iconList)[0]),counter=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Counter",5),status=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Status",{Caution:"caution",Danger:"danger",Good:"good",Neutral:"neutral",Highlight:"highlight"},"danger"),undefineCounter=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show empty counter",!1);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.U,{icon:icon,status:status,counter:undefineCounter?void 0:counter}))};_Status_Icon.__docgenInfo={description:"",methods:[],displayName:"_Status_Icon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Misc/StatusIcon.stories.tsx"]={name:"_Status_Icon",docgenInfo:_Status_Icon.__docgenInfo,path:"src/stories/Misc/StatusIcon.stories.tsx"})},1224:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_BasicSearchInput",(function(){return _BasicSearchInput}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),_helpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(89);__webpack_exports__.default={title:"Misc/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.e,decorators:[],parameters:{jsx:{skip:1}}};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 20px;\n"]))),_BasicSearchInput=function _BasicSearchInput(){var inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Placeholder","Search by name..."),textValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("Search value"),hasBorder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Has border",!0),color=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle"},"subtle"),iconSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.number)("Icon size",12),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled",!1),handleChange=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(e){var value=e.target.value;textValue(value)}),[textValue]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.e,{placeholder:inputPlaceholder,onChange:Object(_helpers__WEBPACK_IMPORTED_MODULE_6__.a)(handleChange),hasBorder:hasBorder,color:color,iconSize:iconSize,disabled:disabled}))};_BasicSearchInput.__docgenInfo={description:"",methods:[],displayName:"_BasicSearchInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Misc/atoms/BasicSearchInput.stories.tsx"]={name:"_BasicSearchInput",docgenInfo:_BasicSearchInput.__docgenInfo,path:"src/stories/Misc/atoms/BasicSearchInput.stories.tsx"})},1225:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TabWithIcon",(function(){return _TabWithIcon}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2);__webpack_exports__.default={title:"Misc/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.X,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)([""]))),_TabWithIcon=function _TabWithIcon(){var icon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Icon","Success"),title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Title","New Items"),subtitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Subtitle","Selected 120 of 120"),selected=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Show selected",!1);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.ab,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.W,{defaultTabId:selected?"exampleTab":"none"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.X,{icon:icon,title:title,subtitle:subtitle,tabFor:"exampleTab"}))))};_TabWithIcon.__docgenInfo={description:"",methods:[],displayName:"_TabWithIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Misc/atoms/TabWithIcon.stories.tsx"]={name:"_TabWithIcon",docgenInfo:_TabWithIcon.__docgenInfo,path:"src/stories/Misc/atoms/TabWithIcon.stories.tsx"})},1226:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Tag",(function(){return _Tag}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3);__webpack_exports__.default={title:"Misc/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.cb,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)([""]))),_Tag=function _Tag(){var iconList=function generateIconList(){var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.z)iconList[_key]=_key;return iconList}(),tagText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Label","Example"),iconName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Icon",iconList,"MetaTags"),size=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Size",14),tagWeight=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Weight",{Light:"light",Regular:"regular",Heavy:"heavy"},"regular"),toValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("To Link","/");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.cb,{label:tagText,icon:iconName,size:size,weight:tagWeight,linkTo:toValue}))};_Tag.__docgenInfo={description:"",methods:[],displayName:"_Tag"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Misc/atoms/Tag.stories.tsx"]={name:"_Tag",docgenInfo:_Tag.__docgenInfo,path:"src/stories/Misc/atoms/Tag.stories.tsx"})},1227:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_DebouncedSearcher",(function(){return _DebouncedSearcher}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),_helpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(89);__webpack_exports__.default={title:"Misc/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.m,decorators:[],parameters:{jsx:{skip:1}}};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 20px;\n"]))),_DebouncedSearcher=function _DebouncedSearcher(){var inputPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Placeholder","Search by name..."),textValue=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("Search value"),hasBorder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Has border",!0),color=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle"},"subtle"),iconSize=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.number)("Icon size",12),disabled=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled",!1),defaultValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Default Value",""),handleChange=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(debounceInput){textValue(debounceInput)}),[textValue]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.m,{placeholder:inputPlaceholder,onDebouncedChange:Object(_helpers__WEBPACK_IMPORTED_MODULE_6__.a)(handleChange),hasBorder:hasBorder,color:color,iconSize:iconSize,disabled:disabled,defaultValue:defaultValue}))};_DebouncedSearcher.__docgenInfo={description:"",methods:[],displayName:"_DebouncedSearcher"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Misc/molecules/DebouncedSearcher.stories.tsx"]={name:"_DebouncedSearcher",docgenInfo:_DebouncedSearcher.__docgenInfo,path:"src/stories/Misc/molecules/DebouncedSearcher.stories.tsx"})},1228:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TabWithIconBar",(function(){return _TabWithIconBar}));var _templateObject,_templateObject2,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2);__webpack_exports__.default={title:"Misc/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.bb,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 30px 0;\n"]))),LayoutWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  padding: "," ;\n"])),"30px 30px 30px ".concat("87px")),list=[{icon:"Success",title:"New People",subtitle:"Selected 120 of 120",tabFor:"example1",customComponent:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LayoutWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.J,{title:"Success people",introductionText:"This is an example of a page shown by a selected tab"}))},{icon:"RecognitionPhoto",title:"Updates To People",subtitle:"Selected 0 of 4",tabFor:"example2",customComponent:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LayoutWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.J,{title:"Updates to people",introductionText:"This is an example of a page shown by a selected tab"}))},{icon:"BigWarning",title:"Missing Images",subtitle:"4 entries w/out images",tabFor:"example3",customComponent:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LayoutWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.J,{title:"Missing images",introductionText:"This is an example of a page shown by a selected tab"}))},{icon:"Warning",title:"Errors",subtitle:"6 entries with errors",tabFor:"example4",customComponent:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LayoutWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.J,{title:"Errors",introductionText:"This is an example of a page shown by a selected tab"}))}],_TabWithIconBar=function _TabWithIconBar(){var defaultTabId=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Default Tab Id","example1"),paddingLeft=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Padding Left Override","87px"),tabList=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("TabList",list);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.bb,{defaultTabId:defaultTabId,tabList:tabList,paddingLeft:paddingLeft}))};_TabWithIconBar.__docgenInfo={description:"",methods:[],displayName:"_TabWithIconBar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Misc/molecules/TabsWithIconBar.stories.tsx"]={name:"_TabWithIconBar",docgenInfo:_TabWithIconBar.__docgenInfo,path:"src/stories/Misc/molecules/TabsWithIconBar.stories.tsx"})},1229:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TagList",(function(){return _TagList}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2);__webpack_exports__.default={title:"Misc/Molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.db,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  font-family: ",";\n  margin: 100px;\n  display: table-cell;\n  height: 50px;\n  width: 300px;\n  vertical-align: middle;\n  position: relative;\n  line-height: 30px;\n  padding: 0 2px;\n"])),(function(p){return p.theme.fontFamily.data})),defaultTags=[{label:"Shop A",icon:"MetaCategories"},{label:"Example",icon:"MetaTags",color:"primary"},{label:"Smart",icon:"MetaTags"}],_TagList=function _TagList(){var someTags=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("tagsConfig",defaultTags);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_3__.db,{tagsConfig:someTags}))};_TagList.__docgenInfo={description:"",methods:[],displayName:"_TagList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Misc/molecules/TagList.stories.tsx"]={name:"_TagList",docgenInfo:_TagList.__docgenInfo,path:"src/stories/Misc/molecules/TagList.stories.tsx"})},1230:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_IntroductionText",(function(){return _IntroductionText}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"])));__webpack_exports__.default={title:"Pages/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.B,decorators:[]};var _IntroductionText=function _IntroductionText(){var introductionText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.B,null,introductionText))};_IntroductionText.__docgenInfo={description:"",methods:[],displayName:"_IntroductionText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Pages/IntroductionText.stories.tsx"]={name:"_IntroductionText",docgenInfo:_IntroductionText.__docgenInfo,path:"src/stories/Pages/IntroductionText.stories.tsx"})},1231:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_PageHeader",(function(){return _PageHeader}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"])));__webpack_exports__.default={title:"Pages/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.J,decorators:[]};var _PageHeader=function _PageHeader(){var iconList=Object.assign({None:null},generateIconList()),pageTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Page Title","My Page Title"),pageAreaText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Page Area","Area Name"),pageAreaHref=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Page Area Href","#"),pageIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Icon",iconList,void 0),introductionText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique."),updateDocTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Update Doc Title",!0);return updateDocTitle&&console.info("Note: Updating document.title in Storybook has no effect though it should work in projects."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.J,{icon:pageIcon,introductionText:introductionText,title:pageTitle,areaTitle:pageAreaText,areaHref:pageAreaHref,updateDocTitle:updateDocTitle}))},generateIconList=function generateIconList(){var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.z)iconList[_key]=_key;return iconList};_PageHeader.__docgenInfo={description:"",methods:[],displayName:"_PageHeader"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Pages/PageHeader.stories.tsx"]={name:"_PageHeader",docgenInfo:_PageHeader.__docgenInfo,path:"src/stories/Pages/PageHeader.stories.tsx"})},1232:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_PageTitle",(function(){return _PageTitle}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 100px;\n"])));__webpack_exports__.default={title:"Pages/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.K,decorators:[]};var _PageTitle=function _PageTitle(){var iconList=Object.assign({None:null},generateIconList()),title=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","My Page Title"),icon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Icon",iconList,void 0),areaTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Area Title","Area Title"),areaHref=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Area Href","#");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.K,{title:title,icon:icon,areaTitle:areaTitle,areaHref:areaHref}))},generateIconList=function generateIconList(){var iconList={};for(var _key in scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.z)iconList[_key]=_key;return iconList};_PageTitle.__docgenInfo={description:"",methods:[],displayName:"_PageTitle"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Pages/PageTitle.stories.tsx"]={name:"_PageTitle",docgenInfo:_PageTitle.__docgenInfo,path:"src/stories/Pages/PageTitle.stories.tsx"})},1233:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_EditCell",(function(){return _EditCell}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(103),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(120),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(149),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(89);__webpack_exports__.default={title:"Tables/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.p,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.a)(["\n  font-family: ",";\n  ",";\n  margin: 100px;\n  display: table-cell;\n  height: 50px;\n  width: 150px;\n  vertical-align: middle;\n  position: relative;\n  line-height: 30px;\n  padding: 0 2px;\n"])),(function(p){return p.theme.fontFamily.data}),(function(p){return p.theme.typography.table.columnData.normalImportance})),defaultVal={id:"id-1",cameraName:"Camera1"},_EditCell=function _EditCell(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(defaultVal),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_useState,2),cameraData=_useState2[0],setCameraData=_useState2[1],alignment=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__.select)("Alignment",{Left:"left",Center:"center",Right:"right"},"left"),toValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__.text)("ToLink","/"),updateCameraName=function(){var _ref=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(value,rowKey){var updatedCell;return _Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if("id-1"!==rowKey){_context.next=6;break}return(updatedCell=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},cameraData)).cameraName=value,_context.next=5,Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.b)(2e3);case 5:setCameraData(updatedCell);case 6:case"end":return _context.stop()}}),_callee)})));return function updateCameraName(_x,_x2){return _ref.apply(this,arguments)}}();return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.p,{defaultValue:cameraData.cameraName,rowKey:cameraData.id,saveCallback:updateCameraName,alignment:alignment,toLink:toValue}))};_EditCell.__docgenInfo={description:"",methods:[],displayName:"_EditCell"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tables/atoms/EditableCell.stories.tsx"]={name:"_EditCell",docgenInfo:_EditCell.__docgenInfo,path:"src/stories/Tables/atoms/EditableCell.stories.tsx"})},1234:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TableHeaderTitle",(function(){return _TableHeaderTitle}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);__webpack_exports__.default={title:"Tables/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.Y,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  font-family: ",";\n  display: table-cell;\n  height: inherit;\n  vertical-align:top;\n  line-height: 20px;\n  position: relative;\n  margin: 100px;\n"])),(function(p){return p.theme.fontFamily.data})),_TableHeaderTitle=function _TableHeaderTitle(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),toggleSort=_useState2[0],setToggleSort=_useState2[1],isSortActive=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("isSortActive",!0),sortable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("sortable",toggleSort),asc=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("ascending",toggleSort),header=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("header","Device Name");Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){setToggleSort(asc)}),[asc]);var sortHandler=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(indexKey){console.log("arriving",toggleSort),setToggleSort((function(prev){return!prev}))}),[toggleSort]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.Y,{sortable:sortable,isSortActive:isSortActive,ascending:toggleSort,columnId:"firstColumn",indexKey:1,header:header,toggleSort:sortHandler}))};_TableHeaderTitle.__docgenInfo={description:"",methods:[],displayName:"_TableHeaderTitle"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tables/atoms/TableHeaderTitle.stories.tsx"]={name:"_TableHeaderTitle",docgenInfo:_TableHeaderTitle.__docgenInfo,path:"src/stories/Tables/atoms/TableHeaderTitle.stories.tsx"})},1235:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_RowThumbnail",(function(){return _RowThumbnail}));var _templateObject,_templateObject2,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(45),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4__),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3);__webpack_exports__.default={title:"Tables/atoms",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.Z,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  height: 200px;\n  width:  800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ContainerInner=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  flex: 0;\n  height: 35px;\n"]))),_RowThumbnail=function _RowThumbnail(){var hoverZoom=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Zoom On Hover",!0),image=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Image Src",_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainerInner,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_5__.Z,{hoverZoom:hoverZoom,image:image})))};_RowThumbnail.__docgenInfo={description:"",methods:[],displayName:"_RowThumbnail"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tables/atoms/TableRowThumbnail.stories.tsx"]={name:"_RowThumbnail",docgenInfo:_RowThumbnail.__docgenInfo,path:"src/stories/Tables/atoms/TableRowThumbnail.stories.tsx"})},1236:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ActionsTable",(function(){return ActionsTable}));var _templateObject,_templateObject2,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(45),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8__),Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  padding: 100px;\n"]))),TimeText=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject2||(_templateObject2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  font-size: 12px;\n  span {\n    font-style: italic;\n  }\n"])));__webpack_exports__.default={title:"Tables/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.hb,decorators:[]};var columnConfigSample=[{header:"Analysed Range",sortable:!1,cellStyle:"normalImportance"},{header:"Job Created At",sortable:!1,cellStyle:"normalImportance"},{header:"Run Time",sortable:!1,cellStyle:"normalImportance"},{header:"Status",sortable:!1,cellStyle:"normalImportance"},{header:"Actions",sortable:!1,cellStyle:"normalImportance"}],onDelete=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action)("Deleting.."),onDownloadVideo=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action)("Downloading video.."),onDownloadLogs=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action)("Downloading logs"),onRetry=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action)("Retry"),onConfig=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action)("Going to config page"),generateConfigButtons=function generateConfigButtons(rowId){return[{icon:"RetryJob",onClick:function onClick(){!function handleRetry(deviceId){console.log("Retrying job for device:  ".concat(deviceId)),onRetry()}(rowId)}},{icon:"Delete",onClick:function onClick(){!function handleDelete(deviceId){console.log("Running deleting job log for device:  ".concat(deviceId)),onDelete()}(rowId)}},{icon:"DownloadVideo",onClick:function onClick(){!function handleDownloadVideo(deviceId){console.log("Download video of device:  ".concat(deviceId)),onDownloadVideo()}(rowId)}},{icon:"Download",onClick:function onClick(){!function handleDownloadLogs(deviceId){console.log("Dowload job log for device:  ".concat(deviceId)),onDownloadLogs()}(rowId)}},{icon:"ViewSettings",onClick:function onClick(){!function handleConfigJob(deviceId){console.log("Config analysis job for device:  ".concat(deviceId)),onConfig()}(rowId)}}]},generateTimeRows=function generateTimeRows(initTime,endTime){return[react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TimeText,null,"".concat(initTime," ").concat(String.fromCharCode(160)," →")),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TimeText,null,endTime,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",null," JST"))]},initialRows=[{id:"row1",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,mediaUrl:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,mediaType:"img"},columns:[{customComponent:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.H,{contentArray:generateTimeRows("2020/06/11 - 16:00","2020/06/11 - 21:30")})},{customComponent:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{style:{fontStyle:"italic"}},"Just Now")},{text:"00:00:12"},{text:"Complete"},{customComponent:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.a,{buttonsConfig:generateConfigButtons("device1")})}]},{id:"row2",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,mediaUrl:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,mediaType:"img"},columns:[{customComponent:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.H,{contentArray:generateTimeRows("2020/06/11 - 13:00","2020/06/11 - 17:30")})},{text:"2020/06/11 - 17:30"},{text:"00:00:12"},{text:"Complete"},{customComponent:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.a,{buttonsConfig:generateConfigButtons("device2")})}]},{id:"row3",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,mediaUrl:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,mediaType:"img"},columns:[{customComponent:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.H,{contentArray:generateTimeRows("2020/05/10 - 10:00","2020/05/10 - 12:30")})},{text:"2020/05/10 - 12:30"},{text:"00:00:12"},{text:"Complete"},{customComponent:react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.a,{buttonsConfig:generateConfigButtons("device2")})}]}],ActionsTable=function ActionsTable(){var hasThumbnail=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Has Thumbnail",!0),selectable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Selectable Rows",!0),columnConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.object)("Column Configuration",columnConfigSample),_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialRows),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),rows=_useState2[0],setRows=_useState2[1],toggleAllCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(checked){var newRows=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(rows);newRows.forEach((function(row){row._checked=checked})),setRows(newRows)}),[rows,setRows]),selectCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(checked,id){var newRows=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(rows),targetRowIndex=newRows.findIndex((function(row){return row.id===id}));newRows[targetRowIndex]._checked=checked,setRows(newRows)}),[rows,setRows]);return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.G,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_7__.hb,{columnConfig:columnConfig,rows:rows,selectable:selectable,selectCallback:selectCallback,toggleAllCallback:toggleAllCallback,hasThumbnail:hasThumbnail})))};ActionsTable.__docgenInfo={description:"",methods:[],displayName:"ActionsTable"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tables/molecules/ActionsTable.stories.tsx"]={name:"ActionsTable",docgenInfo:ActionsTable.__docgenInfo,path:"src/stories/Tables/molecules/ActionsTable.stories.tsx"})},1237:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_EditableTable",(function(){return _EditableTable}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(103),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(62),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(149),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(45),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_9__),_helpers__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(89);__webpack_exports__.default={title:"Tables/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.hb,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.a)(["\n  padding: 100px;\n"]))),columnConfigSample=[{header:"Job Number",sortable:!1,cellStyle:"firstColumn"},{header:"Camera Name",sortable:!1,cellStyle:"normalImportance",alignment:"left"},{header:"When",sortable:!1,cellStyle:"normalImportance",alignment:"center"},{header:"Status",sortable:!1,cellStyle:"normalImportance",showStatus:!0},{header:"Temperature",sortable:!1,cellStyle:"normalImportance",showStatus:!0}],sampleData=[{id:"device-1",jobName:"capture123",cameraName:"Camera1",jobTime:"Just Now",status:"good",statusText:"OK",temperature:"38.2ºC"},{id:"device-2",jobName:"capture234",cameraName:"Camera2",jobTime:"Just Now",status:"good",statusText:"OK",temperature:"38.2ºC"},{id:"device-3",jobName:"capture345",cameraName:"Camera3",jobTime:"3 mins ago",status:"danger",statusText:"Warning",temperature:"38.2ºC"},{id:"device-4",jobName:"capture456",cameraName:"Camera4",jobTime:"12 mins ago",status:"danger",statusText:"Warning",temperature:"38.2ºC"}],_EditableTable=function _EditableTable(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(sampleData),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_useState,2),data=_useState2[0],setData=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),_useState4=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_useState3,2),rows=_useState4[0],setRows=_useState4[1],columnConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__.object)("ColumConfig",columnConfigSample),updateCameraName=Object(react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(){var _ref=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(name,rowKey){var updatedData,updatedRow;return _Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(updatedData=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(data),!((updatedRow=updatedData.find((function(_ref2){return _ref2.id===rowKey})))&&name.length>0)){_context.next=7;break}return updatedRow.cameraName=name,_context.next=6,Object(_helpers__WEBPACK_IMPORTED_MODULE_10__.b)(3e3);case 6:setData(updatedData);case 7:case"end":return _context.stop()}}),_callee)})));return function(_x,_x2){return _ref.apply(this,arguments)}}(),[data]),buildDataRows=Object(react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((function(data){return data.map((function(_ref3){var id=_ref3.id,jobName=_ref3.jobName,cameraName=_ref3.cameraName,jobTime=_ref3.jobTime,status=_ref3.status,statusText=_ref3.statusText,temperature=_ref3.temperature;return{id:id,header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,mediaUrl:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,mediaType:"img"},columns:[{text:jobName},{customComponent:react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.p,{alignment:"left",defaultValue:cameraName,rowKey:id,saveCallback:updateCameraName,toLink:"/"})},{text:jobTime},{text:statusText,status:status},{text:temperature}]}}))}),[updateCameraName]);return Object(react__WEBPACK_IMPORTED_MODULE_5__.useEffect)((function(){var dataRows=buildDataRows(data);return setRows(dataRows),function(){setRows([])}}),[data,buildDataRows]),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.G,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_8__.hb,{columnConfig:columnConfig,rows:rows,hasThumbnail:!0})))};_EditableTable.__docgenInfo={description:"",methods:[],displayName:"_EditableTable"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tables/molecules/EditableTable.stories.tsx"]={name:"_EditableTable",docgenInfo:_EditableTable.__docgenInfo,path:"src/stories/Tables/molecules/EditableTable.stories.tsx"})},1238:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_LoadingTable",(function(){return _LoadingTable}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(45),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7__);__webpack_exports__.default={title:"Tables/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.hb,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  padding: 100px;\n"]))),columnConfigSample=[{header:"When",groupTitle:"Time",sortable:!1,cellStyle:"normalImportance",minWidth:200},{header:"Status",groupTitle:"Metadata",sortable:!1,cellStyle:"normalImportance",showStatus:!0,minWidth:200},{header:"The Highest Temperature Recorded",groupTitle:"Metadata",sortable:!1,cellStyle:"normalImportance",minWidth:200}],initialRows=[{columns:[]}],dataRows=[{id:"device-1",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7___default.a},columns:[{text:"JustNow"},{text:"OK",status:"good"},{text:"38.2ºC"}]},{id:"device-2",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7___default.a},columns:[{text:"3 mins ago"},{text:"Warning",status:"danger"},{text:"38.2ºC"}]},{id:"device-3",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7___default.a},columns:[{text:"12 mins ago"},{text:"OK",status:"good"},{text:"38.2ºC"}]},{id:"device-4",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7___default.a},columns:[{text:"1 hour ago"},{text:"OK",status:"good"},{text:"38.2ºC"}]}],_LoadingTable=function _LoadingTable(){var isLoading=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("IsLoading",!0),emptyTable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Show Empty Table",!0),emptyTableTitle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("emptyTableTitle","No Data Available"),emptyTableText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("emptyTableText","There is currently no data"),loadingText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.text)("loadingText","Loading Data.."),selectable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Selectable Rows",!0),hasGroups=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Has Header Groups",!0),columnConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.object)("Column Configuration",columnConfigSample),_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialRows),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),rows=_useState2[0],setRows=_useState2[1],toggleAllCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(checked){var newRows=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(rows);newRows.forEach((function(row){row._checked=checked})),setRows(newRows)}),[rows,setRows]),selectCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(checked,id){var newRows=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(rows),targetRowIndex=newRows.findIndex((function(row){return row.id===id}));newRows[targetRowIndex]._checked=checked,setRows(newRows)}),[rows,setRows]);return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){return setRows(emptyTable?initialRows:dataRows),function(){setRows(initialRows)}}),[emptyTable]),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.hb,{hasHeaderGroups:hasGroups,columnConfig:columnConfig,rows:rows,toggleAllCallback:toggleAllCallback,selectable:selectable,selectCallback:selectCallback,isLoading:isLoading,loadingText:loadingText,hasThumbnail:!0,emptyTableTitle:emptyTableTitle,emptyTableText:emptyTableText}))};_LoadingTable.__docgenInfo={description:"",methods:[],displayName:"_LoadingTable"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tables/molecules/LoadingTable.stories.tsx"]={name:"_LoadingTable",docgenInfo:_LoadingTable.__docgenInfo,path:"src/stories/Tables/molecules/LoadingTable.stories.tsx"})},1239:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TypeTable",(function(){return _TypeTable}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12),_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(57),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(89),Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.a)(["\n  padding: 100px;\n"])));__webpack_exports__.default={title:"Tables/molecules",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.hb,decorators:[],parameters:{jsx:{skip:2}}};var defaultData=_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.u,sortedByDeviceData=Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_8__.g)(defaultData,"deviceName",!0),_TypeTable=function _TypeTable(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(sortedByDeviceData),_useState2=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),data=_useState2[0],setData=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_8__.f)(sortedByDeviceData)),_useState4=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),rows=_useState4[0],setRows=_useState4[1],hasStatus=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Has Device Status",!0),hasThumbnail=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Has Thumbnail",!0),hasTypeIcon=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Has Device Type Icon",!0),hasHeaderGroups=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Has Header Groups",!0),selectable=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Selectable Rows",!0),columnConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.object)("Column Configuration",_helpers_data_samples__WEBPACK_IMPORTED_MODULE_7__.c),selectCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(checked,id){var newRows=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(rows),targetRowIndex=newRows.findIndex((function(row){return row.id===id}));newRows[targetRowIndex]._checked=checked,setRows(newRows)}),[rows,setRows]),toggleAllCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(checked){var newRows=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(rows);newRows.forEach((function(row){row._checked=checked})),setRows(newRows)}),[rows,setRows]),sortCallback=Object(react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((function(ascending,columnId){var unsortedData=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(data),validKey=columnId,sortedData=Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_8__.g)(unsortedData,validKey,ascending);setData(sortedData)}),[data]);return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){setRows(Object(_helpers_sample_table_helpers__WEBPACK_IMPORTED_MODULE_8__.f)(data))}),[data]),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.G,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_6__.hb,{columnConfig:columnConfig,selectable:selectable,rows:rows,hasStatus:hasStatus,hasThumbnail:hasThumbnail,hasTypeIcon:hasTypeIcon,defaultAscending:!0,hasHeaderGroups:hasHeaderGroups,selectCallback:Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.a)(selectCallback),toggleAllCallback:Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.a)(toggleAllCallback),sortCallback:Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.a)(sortCallback)})))};_TypeTable.__docgenInfo={description:"",methods:[],displayName:"_TypeTable"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Tables/molecules/TypeTable.stories.tsx"]={name:"_TypeTable",docgenInfo:_TypeTable.__docgenInfo,path:"src/stories/Tables/molecules/TypeTable.stories.tsx"})},1244:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators}));var _templateObject,style_templateObject,react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(540),styled_components_browser_esm=__webpack_require__(1),index_modern=__webpack_require__(3),taggedTemplateLiteral=__webpack_require__(4),Lato_Thin=__webpack_require__(555),Lato_Thin_default=__webpack_require__.n(Lato_Thin),Lato_Light=__webpack_require__(556),Lato_Light_default=__webpack_require__.n(Lato_Light),Lato_Regular=__webpack_require__(557),Lato_Regular_default=__webpack_require__.n(Lato_Regular),Lato_Bold=__webpack_require__(558),Lato_Bold_default=__webpack_require__.n(Lato_Bold),Monorale_Thin=__webpack_require__(559),Monorale_Thin_default=__webpack_require__.n(Monorale_Thin),Monorale_ThinItalic=__webpack_require__(560),Monorale_ThinItalic_default=__webpack_require__.n(Monorale_ThinItalic),Monorale_ExtraLight=__webpack_require__(561),Monorale_ExtraLight_default=__webpack_require__.n(Monorale_ExtraLight),Monorale_ExtraLightItalic=__webpack_require__(562),Monorale_ExtraLightItalic_default=__webpack_require__.n(Monorale_ExtraLightItalic),Monorale_Light=__webpack_require__(563),Monorale_Light_default=__webpack_require__.n(Monorale_Light),Monorale_LightItalic=__webpack_require__(564),Monorale_LightItalic_default=__webpack_require__.n(Monorale_LightItalic),Monorale_Regular=__webpack_require__(565),Monorale_Regular_default=__webpack_require__.n(Monorale_Regular),Monorale_Italic=__webpack_require__(566),Monorale_Italic_default=__webpack_require__.n(Monorale_Italic),Monorale_Medium=__webpack_require__(567),Monorale_Medium_default=__webpack_require__.n(Monorale_Medium),Monorale_MediumItalic=__webpack_require__(568),Monorale_MediumItalic_default=__webpack_require__.n(Monorale_MediumItalic),Monorale_SemiBold=__webpack_require__(569),Monorale_SemiBold_default=__webpack_require__.n(Monorale_SemiBold),Monorale_SemiBoldItalic=__webpack_require__(570),Monorale_SemiBoldItalic_default=__webpack_require__.n(Monorale_SemiBoldItalic),Monorale_Bold=__webpack_require__(571),Monorale_Bold_default=__webpack_require__.n(Monorale_Bold),Monorale_BoldItalic=__webpack_require__(572),Monorale_BoldItalic_default=__webpack_require__.n(Monorale_BoldItalic),Monorale_ExtraBold=__webpack_require__(573),Monorale_ExtraBold_default=__webpack_require__.n(Monorale_ExtraBold),Monorale_ExtraBoldItalic=__webpack_require__(574),Monorale_ExtraBoldItalic_default=__webpack_require__.n(Monorale_ExtraBoldItalic),Monorale_Black=__webpack_require__(575),Monorale_Black_default=__webpack_require__.n(Monorale_Black),Monorale_BlackItalic=__webpack_require__(576),Monorale_BlackItalic_default=__webpack_require__.n(Monorale_BlackItalic),fonts=Object(styled_components_browser_esm.b)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 100;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    font-style: light;\n    font-weight: 300;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    font-style: normal;\n    font-weight: 400;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: 'Lato';\n    font-style: bold;\n    font-weight: 700;\n    src: url(",") format('truetype');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 100;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 100;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 200;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 200;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 300;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 300;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 400;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 400;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 500;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 500;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 600;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 600;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 700;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 700;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n}\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 800;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 800;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 900;\n    font-style: normal;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n\n  @font-face {\n    font-family: Monorale;\n    font-weight: 900;\n    font-style: italic;\n    src: url(",") format('woff');\n    font-display: fallback;\n  }\n"])),Lato_Thin_default.a,Lato_Light_default.a,Lato_Regular_default.a,Lato_Bold_default.a,Monorale_Thin_default.a,Monorale_ThinItalic_default.a,Monorale_ExtraLight_default.a,Monorale_ExtraLightItalic_default.a,Monorale_Light_default.a,Monorale_LightItalic_default.a,Monorale_Regular_default.a,Monorale_Italic_default.a,Monorale_Medium_default.a,Monorale_MediumItalic_default.a,Monorale_SemiBold_default.a,Monorale_SemiBoldItalic_default.a,Monorale_Bold_default.a,Monorale_BoldItalic_default.a,Monorale_ExtraBold_default.a,Monorale_ExtraBoldItalic_default.a,Monorale_Black_default.a,Monorale_BlackItalic_default.a),react_router=__webpack_require__(33),style=Object(styled_components_browser_esm.b)(style_templateObject||(style_templateObject=Object(taggedTemplateLiteral.a)(['\n  * , body{\n    box-sizing: border-box;\n  }\n  body, html , #root {\n    min-width: 100%;\n    min-height: 100vh;\n    height: 100%;\n    margin: 0;\n  }\n  html {\n    /* background-image: radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png);\n    background-repeat: no-repeat, repeat; */\n  }\n  body {\n    font-family: Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;\n    color: lightgray;\n  }\n\n'])));(0,__webpack_require__(297).addDecorator)(__webpack_require__(1179).jsxDecorator);var decorators=[function ThemeDecorator(story){return react_default.a.createElement(styled_components_browser_esm.a,{theme:Object(dist.useDarkMode)()?Object(index_modern.mb)(index_modern.ib,index_modern.kb):index_modern.kb},react_default.a.createElement(fonts,null),react_default.a.createElement(style,null),story())},function RouterDecorator(story){return react_default.a.createElement(react_router.a,{initialEntries:["/welcome"],initialIndex:1},story())}]},1245:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_MixAlertsExample",(function(){return MixAlerts_stories_MixAlertsExample}));var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,taggedTemplateLiteral=__webpack_require__(4),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(1),index_modern=__webpack_require__(3),StyledButton=styled_components_browser_esm.d.button(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  ",";\n  color: hsl(0, 0%, 65%);\n  font-size: 14px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: italic;\n  line-height: 1.79;\n  color: hsl(0, 0%, 65%);\n  display: block;\n"])),index_modern.lb),ButtonGroup=styled_components_browser_esm.d.div(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)(["\ntext-align: center;\nmargin-top: 10px;\n"," {\n  margin: 15px auto 0 auto;\n}\n"])),StyledButton),CardCover=styled_components_browser_esm.d.div(_templateObject3||(_templateObject3=Object(taggedTemplateLiteral.a)(["\n  height: 210px;\n  border-radius: 5px 5px 0 0;\n  position: relative;\n  z-index:99;\n  background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));\n  overflow: hidden;\n"]))),CardTitle=styled_components_browser_esm.d.div(_templateObject4||(_templateObject4=Object(taggedTemplateLiteral.a)(["\nfont-size: 20px;\nfont-weight: 500;\nfont-stretch: normal;\nfont-style: normal;\nline-height: normal;\nletter-spacing: normal;\ncolor: hsl(210, 6%, 47%);\n"]))),CardContent=styled_components_browser_esm.d.div(_templateObject5||(_templateObject5=Object(taggedTemplateLiteral.a)(["\n  padding: 30px 40px;\n  font-size: 14px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.79;\n  letter-spacing: normal;\n  color: hsl(200, 1%, 49%);\n  p {\n    margin: 1.4rem 0\n  }\n"]))),CardModal=styled_components_browser_esm.d.div(_templateObject6||(_templateObject6=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),CardModalExample_CardModalExample=function CardModalExample(){var sendNotification=Object(index_modern.ob)().sendNotification,setModalOpen=Object(index_modern.nb)().setModalOpen,notiInfoSettings={type:"info",message:"You have enabled that requested process"};return react_default.a.createElement(CardModal,null,react_default.a.createElement(CardCover,null),react_default.a.createElement(CardContent,null,react_default.a.createElement(CardTitle,null,"Welcome To Modal"),react_default.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor."),react_default.a.createElement("p",null,"Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit."),react_default.a.createElement(ButtonGroup,null,react_default.a.createElement(index_modern.f,{onClick:function onClick(){sendNotification(notiInfoSettings),setModalOpen(!1)}},"Enable Now"),react_default.a.createElement(StyledButton,{onClick:function onClick(){setModalOpen(!1)}},"Enable Later"))))};CardModalExample_CardModalExample.__docgenInfo={description:"",methods:[],displayName:"CardModalExample"};var MixAlerts_stories_templateObject,MixAlerts_CardModalExample=CardModalExample_CardModalExample;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alerts/MixAlerts/CardModalExample.tsx"]={name:"CardModalExample",docgenInfo:CardModalExample_CardModalExample.__docgenInfo,path:"src/stories/Alerts/MixAlerts/CardModalExample.tsx"});var Container=styled_components_browser_esm.d.div(MixAlerts_stories_templateObject||(MixAlerts_stories_templateObject=Object(taggedTemplateLiteral.a)(["\n  margin: 100px 20px 20px 20px;\n  display: grid;\n  grid-template-columns: 200px;\n  row-gap: 15px;\n"]))),custom=(__webpack_exports__.default={title:"Alerts/Mix",components:index_modern.ob,decorator:[]},react_default.a.createElement(MixAlerts_CardModalExample,null)),MixAlerts_stories_ModalAndNotification=function ModalAndNotification(){var createModal=Object(index_modern.nb)().createModal;return react_default.a.createElement(index_modern.f,{design:"secondary",size:"small",onClick:function onClick(){!function createCustomModal(){createModal({isCloseEnable:!1,width:"480px",padding:!1,customComponent:custom})}()}},"Open Welcome Modal")},MixAlerts_stories_MixAlertsExample=function _MixAlertsExample(){return react_default.a.createElement(Container,null,react_default.a.createElement(index_modern.I,null,react_default.a.createElement(index_modern.G,null,react_default.a.createElement(MixAlerts_stories_ModalAndNotification,null))))};MixAlerts_stories_MixAlertsExample.__docgenInfo={description:"",methods:[],displayName:"_MixAlertsExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alerts/MixAlerts/MixAlerts.stories.tsx"]={name:"_MixAlertsExample",docgenInfo:MixAlerts_stories_MixAlertsExample.__docgenInfo,path:"src/stories/Alerts/MixAlerts/MixAlerts.stories.tsx"})},1246:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_CustomExampleModal",(function(){return CustomModal_stories_CustomExampleModal}));var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,taggedTemplateLiteral=__webpack_require__(4),react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(1),regenerator=__webpack_require__(103),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__(149),defineProperty=__webpack_require__(56),objectSpread2=__webpack_require__(120),slicedToArray=__webpack_require__(30),index_modern=__webpack_require__(3),Container=styled_components_browser_esm.d.div(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)([""]))),Title=styled_components_browser_esm.d.div(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)(["\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n  color: hsl(208, 8%, 38%);\n  position:relative;\n  margin-bottom: 45px;\n"]))),Box=styled_components_browser_esm.d.div(_templateObject3||(_templateObject3=Object(taggedTemplateLiteral.a)(["\n  margin-top:30px;\n  button{\n    width: 100%;\n  }\n  ","\n  ","\n"])),(function(_ref){var margin=_ref.margin;return margin&&Object(styled_components_browser_esm.c)(_templateObject4||(_templateObject4=Object(taggedTemplateLiteral.a)(["margin:",";"])),margin)}),(function(_ref2){var flex=_ref2.flex;return flex&&Object(styled_components_browser_esm.c)(_templateObject5||(_templateObject5=Object(taggedTemplateLiteral.a)(["\n    flex:",";\n    justify-content: flex-end;\n    display: flex;\n    flex-direction: column;\n  "])),flex)})),LoginModalExample_LoginModalExample=function LoginModalExample(){var _useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),loading=_useState2[0],setLoading=_useState2[1],_useState3=Object(react.useState)(null),_useState4=Object(slicedToArray.a)(_useState3,2),alert=_useState4[0],setAlert=_useState4[1],_useState5=Object(react.useState)({username:"",password:""}),_useState6=Object(slicedToArray.a)(_useState5,2),form=_useState6[0],setForm=_useState6[1],onFieldChange=Object(react.useCallback)((function(key){return function(_ref3){var value=_ref3.target.value;setForm(Object(objectSpread2.a)(Object(objectSpread2.a)({},form),{},Object(defineProperty.a)({},key,value)))}}),[form]),setModalOpen=Object(index_modern.nb)().setModalOpen,onLogin=Object(react.useCallback)((function(params){if("user"===params.username&&"fakepass123"===params.password)return!0;throw Error("The username: ".concat(params.username,"  and password provided does not match"))}),[]),onSubmit=Object(react.useCallback)(function(){var _ref4=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(params){var isSuccess,response;return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return isSuccess=!1,setLoading(!0),setAlert(null),_context.prev=3,_context.next=6,onLogin(params);case 6:response=_context.sent,console.log(response,"login"),isSuccess=!0,_context.next=15;break;case 11:_context.prev=11,_context.t0=_context.catch(3),console.log("got error: ".concat(_context.t0.message)),setAlert({message:_context.t0.message,type:"error"});case 15:return setLoading(!1),_context.abrupt("return",isSuccess);case 17:case"end":return _context.stop()}}),_callee,null,[[3,11]])})));return function(_x){return _ref4.apply(this,arguments)}}(),[onLogin]),validateFields=function validateFields(params){return""===params.username?(setAlert({message:"User should not be empty",type:"error"}),!1):""!==params.password||(setAlert({message:"Password should not be empty",type:"error"}),!1)},handleModalSubmit=Object(react.useCallback)(function(){var _ref5=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee2(e){return regenerator_default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(e.preventDefault(),validateFields(form)){_context2.next=4;break}return _context2.abrupt("return");case 4:return _context2.next=6,onSubmit(form);case 6:if(_context2.sent){_context2.next=9;break}return _context2.abrupt("return");case 9:setModalOpen(!1);case 10:case"end":return _context2.stop()}}),_callee2)})));return function(_x2){return _ref5.apply(this,arguments)}}(),[onSubmit,setModalOpen,form]);return react_default.a.createElement(Container,null,react_default.a.createElement(index_modern.w,{onSubmit:handleModalSubmit},react_default.a.createElement(Title,null,"Sign In To Your Account"),react_default.a.createElement(index_modern.fb,{fieldState:"default",required:!0,label:"Username",onChange:onFieldChange("username"),value:form.username,name:"username"}),react_default.a.createElement(index_modern.L,{fieldState:"default",required:!0,label:"Password",onChange:onFieldChange("password"),value:form.password,name:"password"}),alert&&react_default.a.createElement(index_modern.b,{type:alert.type,message:alert.message}),react_default.a.createElement(Box,{flex:"1"},react_default.a.createElement(index_modern.h,{loading:loading,type:"submit",onClick:handleModalSubmit},"Login"))))};LoginModalExample_LoginModalExample.__docgenInfo={description:"",methods:[],displayName:"LoginModalExample"};var CustomModal_stories_templateObject,Modals_LoginModalExample=LoginModalExample_LoginModalExample;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alerts/Modals/LoginModalExample.tsx"]={name:"LoginModalExample",docgenInfo:LoginModalExample_LoginModalExample.__docgenInfo,path:"src/stories/Alerts/Modals/LoginModalExample.tsx"});__webpack_exports__.default={title:"Alerts/Modals",components:Modals_LoginModalExample,decorator:[]};var CustomModal_stories_Container=styled_components_browser_esm.d.div(CustomModal_stories_templateObject||(CustomModal_stories_templateObject=Object(taggedTemplateLiteral.a)([""]))),CustomModal_stories_LoginModal=function LoginModal(modal){var createModal=Object(index_modern.nb)().createModal,FormModal=react_default.a.createElement(Modals_LoginModalExample,null);return react_default.a.createElement(index_modern.f,{design:"secondary",onClick:function openLoginModal(){createModal({customComponent:FormModal})}},"Form Modal")},CustomModal_stories_CustomExampleModal=function _CustomExampleModal(){return react_default.a.createElement(CustomModal_stories_Container,null,react_default.a.createElement(index_modern.G,null,react_default.a.createElement(CustomModal_stories_LoginModal,null)))};CustomModal_stories_CustomExampleModal.__docgenInfo={description:"",methods:[],displayName:"_CustomExampleModal"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Alerts/Modals/CustomModal.stories.tsx"]={name:"_CustomExampleModal",docgenInfo:CustomModal_stories_CustomExampleModal.__docgenInfo,path:"src/stories/Alerts/Modals/CustomModal.stories.tsx"})},264:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo-mark.75308d30.svg"},265:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo-text.0ffd5079.svg"},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ActionButtons})),__webpack_require__.d(__webpack_exports__,"b",(function(){return AlertBar})),__webpack_require__.d(__webpack_exports__,"c",(function(){return AreaUploadManager})),__webpack_require__.d(__webpack_exports__,"d",(function(){return AvatarUploader})),__webpack_require__.d(__webpack_exports__,"e",(function(){return BasicSearchInput})),__webpack_require__.d(__webpack_exports__,"f",(function(){return Button})),__webpack_require__.d(__webpack_exports__,"g",(function(){return ButtonWithIcon})),__webpack_require__.d(__webpack_exports__,"h",(function(){return ButtonWithLoading})),__webpack_require__.d(__webpack_exports__,"i",(function(){return Checkbox})),__webpack_require__.d(__webpack_exports__,"j",(function(){return ConfirmationModal})),__webpack_require__.d(__webpack_exports__,"k",(function(){return CropTool})),__webpack_require__.d(__webpack_exports__,"l",(function(){return DatePicker})),__webpack_require__.d(__webpack_exports__,"m",(function(){return DebouncedSearcher})),__webpack_require__.d(__webpack_exports__,"n",(function(){return DropArea})),__webpack_require__.d(__webpack_exports__,"o",(function(){return DurationSlider})),__webpack_require__.d(__webpack_exports__,"p",(function(){return EditCell})),__webpack_require__.d(__webpack_exports__,"q",(function(){return FilterBar})),__webpack_require__.d(__webpack_exports__,"r",(function(){return FilterButton})),__webpack_require__.d(__webpack_exports__,"s",(function(){return FilterDropdown})),__webpack_require__.d(__webpack_exports__,"t",(function(){return FilterDropdownContainer})),__webpack_require__.d(__webpack_exports__,"u",(function(){return FilterInputs})),__webpack_require__.d(__webpack_exports__,"v",(function(){return FiltersResults})),__webpack_require__.d(__webpack_exports__,"w",(function(){return Form})),__webpack_require__.d(__webpack_exports__,"x",(function(){return GlobalUI})),__webpack_require__.d(__webpack_exports__,"y",(function(){return Icon})),__webpack_require__.d(__webpack_exports__,"A",(function(){return InputFileButton})),__webpack_require__.d(__webpack_exports__,"B",(function(){return IntroductionText})),__webpack_require__.d(__webpack_exports__,"C",(function(){return Label})),__webpack_require__.d(__webpack_exports__,"D",(function(){return Layout})),__webpack_require__.d(__webpack_exports__,"E",(function(){return MainMenu})),__webpack_require__.d(__webpack_exports__,"F",(function(){return MediaBox})),__webpack_require__.d(__webpack_exports__,"G",(function(){return ModalProvider})),__webpack_require__.d(__webpack_exports__,"H",(function(){return MultilineContent})),__webpack_require__.d(__webpack_exports__,"I",(function(){return NotificationProvider})),__webpack_require__.d(__webpack_exports__,"J",(function(){return PageHeader})),__webpack_require__.d(__webpack_exports__,"K",(function(){return PageTitle})),__webpack_require__.d(__webpack_exports__,"L",(function(){return PasswordField})),__webpack_require__.d(__webpack_exports__,"M",(function(){return PercentageSlider})),__webpack_require__.d(__webpack_exports__,"N",(function(){return RadioButton})),__webpack_require__.d(__webpack_exports__,"O",(function(){return SelectField})),__webpack_require__.d(__webpack_exports__,"P",(function(){return SelectWrapper})),__webpack_require__.d(__webpack_exports__,"Q",(function(){return SliderInput})),__webpack_require__.d(__webpack_exports__,"R",(function(){return SmallInput})),__webpack_require__.d(__webpack_exports__,"S",(function(){return SortDropdown})),__webpack_require__.d(__webpack_exports__,"T",(function(){return Spinner})),__webpack_require__.d(__webpack_exports__,"U",(function(){return StatusIcon})),__webpack_require__.d(__webpack_exports__,"V",(function(){return Switch})),__webpack_require__.d(__webpack_exports__,"W",(function(){return TabList})),__webpack_require__.d(__webpack_exports__,"X",(function(){return TabWithIcon})),__webpack_require__.d(__webpack_exports__,"Y",(function(){return TableHeaderTitle})),__webpack_require__.d(__webpack_exports__,"Z",(function(){return TableRowThumbnail})),__webpack_require__.d(__webpack_exports__,"ab",(function(){return Tabs})),__webpack_require__.d(__webpack_exports__,"bb",(function(){return TabsWithIconBar})),__webpack_require__.d(__webpack_exports__,"cb",(function(){return Tag})),__webpack_require__.d(__webpack_exports__,"db",(function(){return TagList})),__webpack_require__.d(__webpack_exports__,"eb",(function(){return TextAreaField})),__webpack_require__.d(__webpack_exports__,"fb",(function(){return TextField})),__webpack_require__.d(__webpack_exports__,"gb",(function(){return TopBar})),__webpack_require__.d(__webpack_exports__,"hb",(function(){return TypeTable})),__webpack_require__.d(__webpack_exports__,"ib",(function(){return dark})),__webpack_require__.d(__webpack_exports__,"jb",(function(){return isFilterItem})),__webpack_require__.d(__webpack_exports__,"kb",(function(){return light})),__webpack_require__.d(__webpack_exports__,"lb",(function(){return resetButtonStyles})),__webpack_require__.d(__webpack_exports__,"mb",(function(){return themeFallbackHelper})),__webpack_require__.d(__webpack_exports__,"nb",(function(){return useModal})),__webpack_require__.d(__webpack_exports__,"ob",(function(){return useNotification}));var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(549),lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_future_standard_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(258);__webpack_require__.d(__webpack_exports__,"z",(function(){return _future_standard_icons__WEBPACK_IMPORTED_MODULE_3__.a}));var react_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(110),react_dom__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__),date_fns__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(63),date_fns__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(577),date_fns__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(172),date_fns__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(267),date_fns__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1248),date_fns__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(122),date_fns__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1256),date_fns__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1249),date_fns__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(371),date_fns__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(375),date_fns__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(578),date_fns__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(133),date_fns__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(1250),date_fns__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(1251),date_fns__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(1252),date_fns__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(1253),date_fns__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(1255),date_fns__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(1254),date_fns__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(208),date_fns_locale__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(376),date_fns_locale__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(209),lodash_isequal__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(550),lodash_isequal__WEBPACK_IMPORTED_MODULE_26___default=__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_26__),lodash_debounce__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__(370),lodash_debounce__WEBPACK_IMPORTED_MODULE_27___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_27__),react_router_dom__WEBPACK_IMPORTED_MODULE_29__=(__webpack_require__(134),__webpack_require__(80)),react_router_dom__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__(33);__webpack_require__(551);const fontFamily={ui:'Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;',data:'Lato, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;'},dimensions={icons:{weights:{light:1,regular:1.5,heavy:3,strong:5}},form:{button:{xsmall:{height:"20px",padding:"0 10px",iconSize:12},small:{height:"30px",padding:"0 20px",iconSize:14},normal:{height:"40px",padding:"0 20px",iconSize:16},large:{height:"60px",padding:"0 20px",iconSize:20}},input:{height:"40px"},switch:{outer:{width:"38px",height:"22px",borderRadius:"11px"},inner:{width:"16px",height:"16px",borderRadius:"8px"},positions:{top:"2px",off:"2px",neutral:"10px",locked:"2px",on:"18px"}}},global:{mainMenu:{width:{open:"280px",closed:"80px"}}}},animation={easing:{primary:{inOut:"cubic-bezier(0.87, 0, 0.13, 1)",out:"cubic-bezier(0.16, 1, 0.3, 1)",in:"cubic-bezier(0.7, 0, 0.84, 0)"}},speed:{fast:"0.175s",normal:"0.35s",slow:"0.7s",slower:"1.4s",slowest:"2.8s"}},deviceSize={small:0,medium:768,large:1024,xlarge:1280,xxlarge:1400},deviceMediaQuery={small:`(min-width: ${deviceSize.small}px)`,medium:`(min-width: ${deviceSize.medium}px)`,large:`(min-width: ${deviceSize.large}px)`,xlarge:`(min-width: ${deviceSize.xlarge}px)`,xxlarge:`(min-width: ${deviceSize.xxlarge}px)`};var light={fontFamily:fontFamily,dimensions:dimensions,typography:{pageHeader:{mainTitle:{textAlign:"left",fontSize:"26px",fontWeight:600,textDecoration:"none",color:"hsla(208, 7.7%, 38.2%, 1.000)"},introduction:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},areaTitle:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"}},form:{input:{placeholder:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"16px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 0.502)"},compact:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 0.502)"}},value:{normal:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},compact:{textAlign:"left",fontSize:"14px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"}},label:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"}},label:{default:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"},disabled:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 0.651)"},failure:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"hsla(0, 67.9%, 67.1%, 1.000)"},meta:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 56.1%, 1.000)"},"meta(Selected)":{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(207, 94.2%, 66.1%, 1.000)"}},labelInformation:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},tip:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"hsla(205, 59.7%, 71.8%, 1.000)"},select:{option:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},selectedValue:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"hsla(0, 0%, 17.6%, 1.000)"},"option(Hover)":{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"hsla(207, 41.2%, 53.3%, 1.000)"}},feedback:{message:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"20px",textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},button:{primary:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},secondary:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 55.3%, 1.000)"}},danger:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}}}},content:{"section-H2":{textAlign:"left",fontSize:"20px",fontWeight:400,textDecoration:"none",color:"hsla(208, 7.7%, 38.2%, 1.000)"},sectionH3:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"hsla(208, 7.7%, 38.2%, 1.000)"},actionParagraph:{textAlign:"left",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"},hyperlink:{hover:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"hsla(195, 98.3%, 45.1%, 1.000)"},base:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"hsla(205, 62.3%, 55.3%, 1.000)"}}},feedbackBar:{message:{textAlign:"left",fontSize:"14px",fontWeight:400,lineHeight:"15px",letterSpacing:"-0.2px",textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},searchBar:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 0.647)"},value:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(207, 5%, 56.7%, 1.000)"}},meta:{tagList:{emptyStates:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"},small:{textAlign:"left",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"}},item:{normal:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(200, 3%, 38.8%, 1.000)"},small:{textAlign:"left",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"hsla(200, 3%, 38.8%, 1.000)"}}}},table:{columnData:{normalImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},left:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},center:{textAlign:"center",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"}},highImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"hsla(196, 9.7%, 55.7%, 1.000)"},center:{textAlign:"center",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"hsla(196, 9.7%, 55.7%, 1.000)"},left:{textAlign:"left",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"hsla(196, 9.7%, 55.7%, 1.000)"}},firstColumn:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(194, 10.2%, 52%, 1.000)"},lowImportance:{right:{textAlign:"right",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},center:{textAlign:"center",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"},left:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"}},unit:{textAlign:"right",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"hsla(195, 9.8%, 51.8%, 0.722)"}},header:{center:{textAlign:"center",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2.4%, 59%, 1.000)"},left:{textAlign:"left",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2.4%, 59%, 1.000)"},right:{textAlign:"right",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2.4%, 59%, 1.000)"}},subHeader:{center:{textAlign:"center",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2%, 59%, 1.000)"},left:{textAlign:"left",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2%, 59%, 1.000)"},right:{textAlign:"right",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"hsla(204, 2%, 59%, 1.000)"}}},global:{mainMenu:{menuItem:{default:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.847)"},active:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.851)"},hover:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.851)"}},subheader:{textAlign:"left",fontSize:"14px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.35px",textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.902)"},hidePrompt:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 1.000)"},subItem:{default:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.5%, 0.647)"},active:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(214, 14.4%, 46.3%, 1.000)"},hover:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(214, 14.4%, 46.3%, 1.000)"}},identity:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 34.1%, 0.749)"}},topBar:{search:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 65.5%, 1.000)"},value:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 34.9%, 1.000)"}}}},filters:{datepicker:{metaHeader:{default:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 56.1%, 1.000)"},active:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"hsla(207, 94.2%, 66.1%, 1.000)"}},calendar:{active:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"},otherMonth:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(206, 6.3%, 49.4%, 0.502)"},default:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"},header:{textAlign:"center",fontSize:"12px",fontWeight:700,textDecoration:"none",color:"hsla(0, 0%, 82%, 1.000)"}},monthLink:{default:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"hsla(0, 0%, 75.7%, 1.000)"},hover:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"hsla(0, 0%, 100%, 1.000)"}},focusedMonth:{textAlign:"center",fontSize:"20px",fontWeight:400,lineHeight:"20px",letterSpacing:"0.5px",textDecoration:"none",color:"hsla(215, 23.5%, 64.1%, 1.000)"},focusedYear:{textAlign:"center",fontSize:"10px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.3333333px",textDecoration:"none",color:"hsla(215, 23.5%, 64.1%, 1.000)"}},value:{textAlign:"left",fontSize:"14px",fontWeight:500,letterSpacing:"0.2px",textDecoration:"none",color:"hsla(0, 0%, 56.1%, 1.000)"},subOption:{label:{textAlign:"left",fontSize:"12px",fontWeight:300,textDecoration:"none",color:"hsla(0, 0%, 46.3%, 1.000)"},value:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"hsla(202, 6.2%, 74.5%, 1.000)"}},presetAction:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"hsla(202, 6.2%, 74.5%, 1.000)"}}},colors:{pureBase:"hsla(0, 0%, 100%, 1.000)",pureTop:"hsla(0, 0%, 0%, 1.000)",divider:"hsla(0, 0%, 93.3%, 1.000)",icons:{inverse:"hsla(0, 0%, 100%, 1.000)",mono:"hsla(0, 0%, 25.1%, 1.000)",dimmed:"hsla(0, 0%, 65.1%, 1.000)",subtle:"hsla(0, 0%, 85.1%, 1.000)",primary:"hsla(205, 100%, 65.1%, 1.000)",danger:"hsla(0, 100%, 70%, 1.000)"},menu:{active:"hsla(215, 100%, 75.1%, 1.000)",hover:"hsla(200, 77.8%, 77.1%, 1.000)",default:"hsla(200, 77.8%, 77.1%, 0.000)",indicator:"hsla(240, 1.2%, 84.1%, 0.502)",passive:"hsla(215, 100%, 75.1%, 0.149)"},feedback:{error:"hsla(0, 78.8%, 70.4%, 1.000)",info:"hsla(205, 77.4%, 63.5%, 1.000)",neutral:"hsla(205, 22.1%, 66.3%, 1.000)",success:"hsla(136, 49.5%, 57.3%, 1.000)",warning:"hsla(30, 91%, 61%, 1.000)"},status:{caution:"hsla(57, 57.7%, 62.9%, 1.000)",danger:"hsla(0, 63.5%, 64.5%, 1.000)",folder:"hsla(207, 95.3%, 66.5%, 1.000)",good:"hsla(126, 48.1%, 68.2%, 1.000)",neutral:"hsla(0, 0%, 91.8%, 1.000)",highlight:"hsla(207, 95.3%, 66.5%, 1.000)"}},styles:{generic:{transparent:{}},filterBar:{divider:{backgroundColor:"hsla(0, 0%, 89.4%, 1.000)"}},form:{input:{default:{normal:{backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(120, 1.3%, 85.3%, 1.000)"},focused:{boxShadow:"0px 3px 7px 0px hsla(207, 65.8%, 31%, 0.078)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"}},disabled:{normal:{backgroundColor:"hsla(206, 36.8%, 96.3%, 1.000)",borderColor:"hsla(120, 1.3%, 85.3%, 1.000)"},focused:{boxShadow:"0px 3px 7px 0px hsla(207, 65.8%, 31%, 0.078)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"}},subdivision:{backgroundColor:"hsla(120, 1.3%, 85.3%, 1.000)"},required:{focused:{boxShadow:"0px 3px 7px 0px hsla(207, 67.8%, 35.3%, 0.071)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"},normal:{borderColor:"hsla(205, 58.9%, 71.4%, 1.000)"}},valid:{focused:{boxShadow:"0px 3px 5px 0px hsla(120, 76.6%, 15.1%, 0.071)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(120, 35.2%, 71.6%, 1.000)"},normal:{borderColor:"hsla(120, 35.2%, 71.6%, 1.000)"}},invalid:{focused:{boxShadow:"0px 3px 7px 0px hsla(0, 100%, 50%, 0.102)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(0, 78.8%, 70.4%, 1.000)"},normal:{borderColor:"hsla(0, 78.8%, 70.4%, 1.000)"}},processing:{focused:{boxShadow:"0px 3px 7px 0px hsla(195, 67.8%, 35.3%, 0.071)",backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(195, 79.5%, 71.4%, 1.000)"},normal:{backgroundColor:"hsla(0, 0%, 100%, 1.000)",borderColor:"hsla(195, 79.5%, 71.4%, 1.000)"}},seperatedValues:{background:{backgroundImage:"linear-gradient(315.00deg, hsla(205, 82.4%, 64.3%, 1.000) 0%, hsla(195, 83.5%, 54.7%, 1.000) 100%)"},hoverHighlight:{backgroundColor:"hsla(195, 84.3%, 67.5%, 1.000)"}}},button:{primary:{default:{backgroundImage:"linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"},hover:{backgroundColor:"hsla(207, 88.2%, 60%, 1.000)"},active:{backgroundColor:"hsla(195, 79.5%, 71.4%, 1.000)"},divider:{backgroundColor:"hsla(202, 70.4%, 62.9%, 1.000)"},disabled:{backgroundImage:"linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"},actionArea:{backgroundImage:"linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"}},secondary:{default:{backgroundColor:"hsla(0, 0%, 94.9%, 1.000)"},hover:{backgroundColor:"hsla(0, 0%, 85.9%, 1.000)"},active:{backgroundColor:"hsla(204, 18.2%, 78.4%, 1.000)"},disabled:{backgroundColor:"hsla(0, 0%, 97.3%, 1.000)"},divider:{backgroundColor:"hsla(204, 18.2%, 78.4%, 0.302)"},actionArea:{backgroundColor:"hsla(0, 0%, 94.9%, 0.302)"}},danger:{default:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 54%, 60.8%, 1.000) 0%, hsla(0, 71.4%, 67.1%, 1.000) 100%)"},hover:{backgroundColor:"hsla(0, 88.4%, 66.3%, 1.000)"},active:{backgroundColor:"hsla(0, 78.8%, 70.4%, 1.000)"},disabled:{backgroundColor:"hsla(0, 78.7%, 85.3%, 1.000)"},divider:{backgroundColor:"hsla(0, 62.1%, 61.8%, 1.000)"},actionArea:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 54%, 60.8%, 1.000) 0%, hsla(0, 71.4%, 67.1%, 1.000) 100%)"}}},switch:{off:{default:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(210, 30%, 96.1%, 1.000) 0%, hsla(203, 41.9%, 93.9%, 1.000) 100%)",borderColor:"hsla(208, 24.6%, 77.6%, 0.651)"},inner:{backgroundImage:"linear-gradient(315.00deg, hsla(205, 82.4%, 64.3%, 1.000) 0%, hsla(195, 83.5%, 54.7%, 1.000) 100%)"}},disabled:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(0, 0%, 100%, 1.000) 0%, hsla(0, 0%, 98.8%, 1.000) 100%)",borderColor:"hsla(208, 22.7%, 85.3%, 0.651)"},inner:{backgroundColor:"hsla(120, 1.3%, 85.3%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(210, 30%, 96.1%, 1.000) 0%, hsla(203, 41.9%, 93.9%, 1.000) 100%)",borderColor:"hsla(208, 24.6%, 77.6%, 0.651)"}}},on:{default:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(204, 78.4%, 72.7%, 1.000) 0%, hsla(195, 83.2%, 67.3%, 1.000) 100%)",borderColor:"hsla(205, 66.5%, 61.4%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},disabled:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(205, 61.9%, 87.6%, 1.000) 0%, hsla(204, 45.5%, 84.9%, 1.000) 100%)",borderColor:"hsla(205, 89.5%, 85.1%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(315.00deg, hsla(204, 68.3%, 72.7%, 0.647) 0%, hsla(195, 83.2%, 67.3%, 0.655) 100%)",borderColor:"hsla(205, 66.5%, 61.4%, 0.651)"}}},failure:{default:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 68.5%, 67.6%, 1.000) 0%, hsla(0, 69.1%, 65.7%, 1.000) 100%)",borderColor:"hsla(0, 66.5%, 61.4%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 60.6%, 73.1%, 1.000) 0.4%, hsla(0, 57.9%, 73.9%, 1.000) 100%)",borderColor:"hsla(0, 54.2%, 67.5%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}}},danger:{default:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 68%, 66.9%, 1.000) 0%, hsla(20, 81.2%, 64.5%, 1.000) 100%)",borderColor:"hsla(0, 51.2%, 60.6%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}},loading:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 79.5%, 77.1%, 1.000) 0%, hsla(20, 96%, 80.4%, 1.000) 100%)",borderColor:"hsla(0, 62%, 73.1%, 1.000)"}},disabled:{outer:{backgroundImage:"linear-gradient(317.51deg, hsla(0, 57%, 81.8%, 1.000) 0%, hsla(19, 100%, 84.9%, 1.000) 100%)",borderColor:"hsla(0, 78.7%, 85.3%, 1.000)"},inner:{backgroundColor:"hsla(0, 0%, 100%, 1.000)"}}},locked:{default:{outer:{backgroundImage:"linear-gradient(180.00deg, hsla(0, 0%, 100%, 1.000) 0%, hsla(0, 0%, 98.8%, 1.000) 100%)",borderColor:"hsla(208, 22.7%, 85.3%, 0.651)"},inner:{backgroundColor:"hsla(0, 0%, 89.4%, 1.000)"}}}},checkbox:{unchecked:{disabled:{backgroundColor:"hsla(0, 0%, 98.8%, 1.000)",borderColor:"hsla(210, 20%, 90.2%, 1.000)"},default:{borderColor:"hsla(208, 24.6%, 77.6%, 1.000)"},hover:{borderColor:"hsla(195, 94.2%, 66.1%, 1.000)"}},checked:{disabled:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(210, 20%, 90.2%, 1.000)"},default:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(207, 95.3%, 66.5%, 1.000)"},hover:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(195, 95.3%, 66.5%, 1.000)"}},indeterminate:{hover:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(195, 85.4%, 73.1%, 1.000)"},default:{boxShadow:"inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",backgroundColor:"hsla(205, 89.5%, 77.6%, 1.000)"}}}},global:{mainMenu:{iconBackground:{active:{backgroundColor:"hsla(215, 100%, 75.1%, 1.000)"},hover:{backgroundColor:"hsla(200, 77.8%, 77.1%, 1.000)"},default:{backgroundColor:"hsla(200, 77.8%, 77.1%, 0.000)"}},background:{boxShadow:"5px 0px 10px 0px hsla(205, 16%, 76.7%, 0.102)",backgroundColor:"hsla(0, 0%, 99.6%, 1.000)"},lines:{backgroundColor:"hsla(0, 0%, 93.3%, 1.000)"},footerBackground:{backgroundColor:"hsla(0, 0%, 99.6%, 0.851)"}},background:{backgroundImage:"linear-gradient(180.00deg, hsla(210, 20%, 98%, 1.000) 0%, hsla(210, 20%, 96.1%, 1.000) 100%)"}},indicators:{spinner:{danger:{base:{borderColor:"hsla(0, 78.8%, 70.4%, 1.000)"},top:{borderColor:"hsla(0, 0%, 100%, 1.000)"}},secondary:{top:{borderColor:"hsla(0, 0%, 100%, 1.000)"},base:{borderColor:"hsla(0, 0%, 75.7%, 1.000)"}},primary:{top:{borderColor:"hsla(0, 0%, 100%, 1.000)"},base:{borderColor:"hsla(195, 89.4%, 81.6%, 1.000)"}},simple:{top:{borderColor:"hsla(0, 0%, 100%, 1.000)"},base:{borderColor:"hsla(0, 0%, 76.9%, 0.329)"}}}},filters:{dropdownContainer:{background:{boxShadow:"0px 5px 25px 0px hsla(210, 66.9%, 46.3%, 0.122)",backgroundColor:"hsla(0, 0%, 100%, 1.000)"},topBorder:{backgroundColor:"hsla(205, 100%, 72%, 1.000)"}}},general:{divider:{backgroundColor:"hsla(0, 0%, 93.3%, 1.000)"}},feedbackBar:{neutral:{backgroundColor:"hsla(205, 22.1%, 66.3%, 1.000)"},error:{backgroundColor:"hsla(0, 78.8%, 70.4%, 1.000)"},info:{backgroundColor:"hsla(205, 77.4%, 63.5%, 1.000)"},success:{backgroundColor:"hsla(136, 49.5%, 57.3%, 1.000)"},warning:{backgroundColor:"hsla(30, 91%, 61%, 1.000)"}}},animation:animation,custom:{lines:{primary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(205deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(205deg, 45%, 90%, 90%);"},grabHandle:{fill:"hsla(205deg, 45%, 90%, 100%)",stroke:"hsla(205deg, 45%, 100%, 100%)"},point:{fill:"hsla(205deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(205deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(205deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(235deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(205deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(192deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(205deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(205deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(205deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(205deg, 100%, 15%, 0%)"}},secondary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(120deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(120deg, 45%, 90%, 90%);"},grabHandle:{fill:"hsla(120deg, 45%, 90%, 100%)",stroke:"hsla(120deg, 45%, 100%, 100%)"},point:{fill:"hsla(120deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(120deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(120deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(150deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(120deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(108deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(120deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(120deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(120deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(120deg, 100%, 15%, 0%)"}},danger:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(0, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(0, 45%, 90%, 90%);"},grabHandle:{fill:"hsla(0, 45%, 90%, 100%)",stroke:"hsla(0, 45%, 100%, 100%)"},point:{fill:"hsla(0, 45%, 90%, 100%)"},grabHandleText:{fill:"hsla(0, 80%, 25%, 100%);"},grabHandleContrast:{stroke:"hsla(0, 80%, 45%, 100%)"},handleBase:{fill:"hsla(30deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(0, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(348deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(0deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(0deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(0, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(0, 100%, 15%, 0%);"}}}},deviceSize:deviceSize,deviceMediaQuery:deviceMediaQuery};var dark={fontFamily:fontFamily,dimensions:dimensions,colors:{},tmp:{input:{states:{default:{icon:"",iconColor:"#000",borderColor:"hsl(120, 1%, 85%)",backgroundColor:"hsl(0, 0%, 99%)"},required:{icon:"",iconColor:"hsl(0, 0%, 100%)",borderColor:"hsl(205, 59%, 71%)",backgroundColor:"hsl(205, 59%, 71%)"},loading:{icon:"",iconColor:"#000",borderColor:"hsl(195, 79%, 71%)",backgroundColor:"hsl(195, 79%, 71%)"},valid:{icon:"",iconColor:"#000",borderColor:"hsl(120, 35%, 72%)",backgroundColor:"hsl(120, 35%, 72%)"},error:{icon:"",iconColor:"#000",borderColor:"hsl(0, 79%, 70%)",backgroundColor:"hsl(0, 79%, 70%)"}}},body:{backgroundColor:"#f00",backgroundImage:"radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png)"},fontFamily:"Helvetica, Arial, sans-serif",colors:{button:{backgroundColor:"#666666",color:"#efefef",borderColor:"#efefef"},exampleCard:{backgroundColor:"#666666",color:"hsla(205, 15%, 95%, 100%)",borderColor:"hsla(205, 90%, 65%, 100%)",shadowColor:"hsla(205, 90%, 65%, 15%)"}}},styles:{form:{button:{primary:{default:{backgroundImage:"linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"}}}}},animation:animation,deviceSize:deviceSize,deviceMediaQuery:deviceMediaQuery};function themeFallbackHelper(theme,themeFallback){return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({},theme,themeFallback)}let _t,_t2,_t3,_=t=>t;const wrapperCss=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t||(_t=_`
  svg {
    overflow: visible;
    vector-effect: non-scaling-stroke;

    line, path, circle, ellipse, foreignObject, polygon, polyline, rect, text, textPath, tspan {
      vector-effect: non-scaling-stroke;
    }
  }
`)),IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2||(_t2=_`
  ${0};
`),wrapperCss),IconWrapperForSVG=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t3||(_t3=_`
  ${0};
`),wrapperCss),Icon=({icon:icon,size:_size=24,weight:_weight="regular",color:_color="mono",forSvgUsage:_forSvgUsage=!1})=>{const theme=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.f)(),iconWeight=dimensions.icons.weights[_weight],IconSVG=_future_standard_icons__WEBPACK_IMPORTED_MODULE_3__.a[icon];return null!=IconSVG?_forSvgUsage?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapperForSVG,null,IconSVG({size:_size,weight:iconWeight,color:theme.colors.icons[_color]})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapper,null,IconSVG({size:_size,weight:iconWeight,color:theme.colors.icons[_color]})):null};let _t$1,_t2$1,_t3$1,_$1=t=>t;Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t$1||(_t$1=_$1`
  position:relative;
  display: flex;
  flex-direction: row;
  align-items:center;
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$1||(_t2$1=_$1`
  display: flex;
  flex-direction: column;
`));const resetButtonStyles=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$1||(_t3$1=_$1`
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  user-select: none;
`));let _t$2,_t2$2,_t3$2,_t4,_$2=t=>t;const IconButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t$2||(_t$2=_$2`
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
`),resetButtonStyles,({selected:_selected=!1})=>_selected&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$2||(_t2$2=_$2`
    border-bottom: 5px solid hsl(207, 80%, 64%);
  `))),AlertWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$2||(_t3$2=_$2`
  min-height: 50px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 14px;

  font-family: ${0};
  ${0};
  ${0};

`),({theme:theme})=>theme.fontFamily.ui,({type:type,theme:theme})=>theme.styles.feedbackBar[type],({theme:theme})=>theme.typography.feedbackBar.message),IconNames={error:"Critical",warning:"BigWarning",success:"Success",info:"Information",neutral:"Information"},MessageBox=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4||(_t4=_$2`
  margin: 5px 0px 5px 15px;
  flex: 1;
`)),AlertBar=({type:_type="info",message:message})=>{const[dismiss,setDismiss]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setDismiss(!1)},[message]),message&&!dismiss?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AlertWrapper,{type:_type},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:IconNames[_type],color:"inverse"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MessageBox,null,message),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton,{onClick:()=>setDismiss(!0)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"CloseCompact",color:"inverse"}))):null};let _t$3,_t2$3,_t3$3,_t4$1,_t5,_t6,_t7,_t8,_t9,_t10,_$3=t=>t;const initAnimation=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.e)(_t$3||(_t$3=_$3`
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
`)),closeAnimation=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.e)(_t2$3||(_t2$3=_$3`
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, -100%);
  }
`)),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$3||(_t3$3=_$3`
  min-height: 50px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  width: 900px; 
  position: fixed;  
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  font-family: ${0};
  ${0};
  ${0};

  ${0};

  ${0};
`),({theme:theme})=>theme.fontFamily.ui,({type:type,theme:theme})=>theme.styles.feedbackBar[type],({theme:theme})=>theme.typography.feedbackBar.message,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$1||(_t4$1=_$3`
    animation: ${0} ${0} ${0};
    `),initAnimation,theme.animation.speed.slow,theme.animation.easing.primary.easeInOut),({theme:theme,isClosing:isClosing})=>isClosing&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5||(_t5=_$3`
    animation: ${0} ${0} ${0};
    `),closeAnimation,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut)),IconNames$1={error:"Critical",warning:"BigWarning",success:"Success",info:"Information",neutral:"Information"},IconButton$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6||(_t6=_$3`
  ${0};
  ${0}
  &:focus {
    outline: none;
  }
 
  &:hover {
    opacity: .8;
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`),resetButtonStyles,({selected:_selected=!1})=>_selected&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7||(_t7=_$3`
    border-bottom: 5px solid hsl(207, 80%, 64%);
  `))),TextButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t8||(_t8=_$3`
  ${0};
  font-family: ${0};
  ${0};
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:hover:enabled {
    ${0}
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`),resetButtonStyles,({theme:theme})=>theme.fontFamily.ui,({theme:theme})=>theme.typography.feedbackBar.message,({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9||(_t9=_$3`
      opacity: .8;
      transition: transform ${0} ${0};
    `),theme.animation.speed.normal,theme.animation.easing.primary.inOut)),MainMessage=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10||(_t10=_$3`
  padding: 12px 6px 12px 12px;
  line-height: 20px;
  text-align: left;
  flex-grow: 2;
`)),Notification=({type:_type="info",message:message,isPinned:_isPinned=!1,actionTextButton:actionTextButton,closeCallback:closeCallback,onTextButtonClick:onTextButtonClick})=>{const[dismiss,setDismiss]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[slideUp,setSlideUp]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[textClicked,setTextClicked]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setDismiss(!1),setSlideUp(!1),setTextClicked(!1)},[message]);const handleDismiss=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setSlideUp(!0)},[]),handleTextClick=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async()=>{setTextClicked(!0),handleDismiss()},[handleDismiss]),animationEnded=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{slideUp&&(setDismiss(!0),onTextButtonClick&&textClicked&&onTextButtonClick(),closeCallback&&closeCallback())},[slideUp,closeCallback,onTextButtonClick,textClicked]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let mounted=!0;return _isPinned||setTimeout(()=>{mounted&&handleDismiss()},7e3),()=>{mounted=!1}},[_isPinned,message,handleDismiss]),message&&!dismiss?react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,{type:_type,isClosing:slideUp,onAnimationEnd:animationEnded},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:IconNames$1[_type],color:"inverse"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainMessage,null,message),actionTextButton?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextButton,{onClick:()=>handleTextClick()},actionTextButton," "):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton$1,{onClick:()=>handleDismiss()},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"CloseCompact",color:"inverse"}))),document.body):null};let _t$4,_t2$4,_$4=t=>t;const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t$4||(_t$4=_$4`
  ${0};

  overflow: hidden;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  outline: none;

  button + button {
    margin-left: 20px;
  }

`),({theme:theme,design:design,size:size})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$4||(_t2$4=_$4`

    ${0};
    height: ${0};
    padding: ${0};

    ${0};
    font-family: ${0};

    // No transition at this time as we're using a gradient in the default view. Requires work to make smooth.
    // transition: background ${0} ${0};

    transition: opacity ${0} ${0};

    &:hover:enabled {
      background: ${0};
    }

    &:active:enabled {
      background: ${0};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 50%;
      background: ${0};
    }

  `),theme.styles.form.button[design].default,theme.dimensions.form.button[size].height,theme.dimensions.form.button[size].padding,theme.typography.form.button[design][size],theme.fontFamily.ui,theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.styles.form.button[design].hover.backgroundColor,theme.styles.form.button[design].active.backgroundColor,theme.styles.form.button[design].disabled.backgroundColor)),Button=({design:_design="primary",size:_size="normal",children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton,Object.assign({type:"button"},{design:_design,size:_size},props),children);let _t$5,_t2$5,_t3$4,_t4$2,_t5$1,_t6$1,_t7$1,_$5=t=>t;const TextContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$5||(_t$5=_$5`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  ${0}

  ${0}
`),({position:position,size:size})=>position&&"left"===position?Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$5||(_t2$5=_$5`
    padding-left: ${0};
  `),"xsmall"===size?"10px":"20px"):Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$4||(_t3$4=_$5`
    padding-right: ${0};
  `),"xsmall"===size?"10px":"20px"),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$2||(_t4$2=_$5`
    transition: padding ${0} ${0};
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeInOut)),IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$1||(_t5$1=_$5`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;

  ${0}

  svg {
    display:block;
  }
`),({position:position})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$1||(_t6$1=_$5`
    order: ${0};
  `),position&&"left"===position?0:2)),InnerContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$1||(_t7$1=_$5`
  display: flex;
  height: inherit;
`)),ButtonWithIcon=({design:design,size:_size="normal",onClick:onClick,disabled:disabled,position:position,icon:icon,children:children,...props})=>{const iconSize=dimensions.form.button[_size].iconSize,iconColor="secondary"===design?"dimmed":"inverse";return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button,Object.assign({},{design:design,size:_size,onClick:onClick,disabled:disabled},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerContainer,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer,Object.assign({},{size:_size,position:position}),children),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconContainer,Object.assign({},{position:position}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:icon,size:iconSize,color:iconColor,weight:"regular"}))))};let _t$6,_t2$6,_t3$5,_t4$3,_$6=t=>t;const circumference=radius=>6.2832*radius,rotate=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.e)(_t2$6||(_t2$6=_$6`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`)),BaseCircle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t3$5||(_t3$5=_$6`
  stroke: ${0};
  fill: none;
`),({theme:theme,styling:styling})=>theme.styles.indicators.spinner[styling].base.borderColor),RotatingCircle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t4$3||(_t4$3=_$6`
  stroke: ${0};
  fill: none;
  stroke-dasharray: ${0};
  stroke-dashoffset: ${0};
  animation:
    ${0} 4s linear infinite,
    ${0} 1s linear infinite;
  stroke-linecap: round;
`),({theme:theme,styling:styling})=>theme.styles.indicators.spinner[styling].top.borderColor,({r:r})=>circumference(r),({r:r})=>6.2832*r/2,({r:r})=>(radius=>{const c=circumference(radius);return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.e)(_t$6||(_t$6=_$6`
    0% {
      stroke-dashoffset: -${0};
    }
    50% {
      stroke-dashoffset: -${0};
    }
    100% {
      stroke-dashoffset: -${0};
    }
  `),.85*c,.5*c,.85*c)})(r),rotate),sizeGuide={xsmall:12,small:16,medium:24,large:36,xlarge:48},Spinner=({size:_size="medium",styling:_styling="primary"})=>{const sizeVal=sizeGuide[_size],strokeWidth=sizeVal/5.333,circleRadius=sizeVal/2-strokeWidth/2;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{viewBox:`-${sizeVal/2} -${sizeVal/2} ${sizeVal} ${sizeVal}`,width:sizeVal,height:sizeVal,xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BaseCircle,{cx:"0",cy:"0",r:circleRadius,strokeWidth:strokeWidth,styling:_styling}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RotatingCircle,{cx:"0",cy:"0",r:circleRadius,strokeWidth:strokeWidth,styling:_styling}))};let _t$7,_t2$7,_t3$6,_t4$4,_t5$2,_t6$2,_t7$2,_t8$1,_t9$1,_t10$1,_t11,_$7=t=>t;const LoadingButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(Button)(_t$7||(_t$7=_$7`
  ${0};
`),({$loading:$loading,theme:theme})=>$loading&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$7||(_t2$7=_$7`
    cursor: wait;
    background: ${0};
    padding: 0 20px;
    &:disabled {
      opacity: 1;
    }
  `),theme.styles.form.button.primary.active)),TextContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$6||(_t3$6=_$7`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  ${0}

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$4||(_t4$4=_$7`
    transition: padding ${0} ${0};
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeInOut)),LoadingContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$2||(_t5$2=_$7`
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
`),({theme:theme,position:position})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$2||(_t6$2=_$7`
    transition:
      flex ${0} ${0} ${0},
      opacity ${0} ${0};

    order: ${0};
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,theme.animation.speed.slow,theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,position&&"left"===position?0:2)),InnerContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$2||(_t7$2=_$7`
  display: flex;
  height: inherit;


  ${0}

  ${0}
`),({position:position,$loading:$loading})=>position&&"left"===position?Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$1||(_t8$1=_$7`
    margin-right: ${0};
  `),$loading?"-20px":"0"):Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$1||(_t9$1=_$7`
    margin-left: ${0};
  `),$loading?"-20px":"0"),({$loading:$loading,theme:theme,design:design,size:size})=>$loading?Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$1||(_t10$1=_$7`

    // TODO: Fix transition animation so the below line doesn't look awful when transitioning - L
    // ${0};

    transition: margin ${0} ${0};

    ${0}{
      padding: ${0};
    }
    ${0}{
      opacity: 1;
      transition: flex ${0} ${0}, opacity ${0} ${0} ${0};
      ${0};
    }
  `),theme.styles.form.button[design].active,theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,TextContainer$1,theme.dimensions.form.button[size].padding,LoadingContainer,theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,theme.animation.speed.slow,theme.animation.easing.primary.easeInOut,theme.animation.speed.slow,theme.styles.form.button[design].actionArea):Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t11||(_t11=_$7`
    ${0}{
      flex: 0 0 0px;
    }
  `),LoadingContainer)),ButtonWithLoading=({design:_design="primary",size:_size="normal",onClick:onClick,disabled:disabled,position:position,loading:loading,children:children,...rest})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingButton,Object.assign({disabled:disabled||loading,$loading:loading},{design:_design,size:_size,onClick:onClick},rest),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerContainer$1,Object.assign({$loading:loading},{design:_design,size:_size}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer$1,null,children),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingContainer,Object.assign({},{design:_design,position:position}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spinner,{size:"xsmall"===_size?"xsmall":"small",styling:_design}))));let _t$8;const StyledButton$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t$8||(_t$8=(t=>t)`
  ${0};
  [stroke]{
    stroke: ${0};
  }
  &:hover {
    ${0} {
      [stroke]{
        stroke: ${0};
      }
    }
  }
`),resetButtonStyles,({theme:theme,color:color})=>theme.colors.icons[color],IconWrapper,({theme:theme,hoverColor:hoverColor})=>theme.colors.icons[hoverColor]),IconButton$2=({icon:icon,size:_size=20,weight:_weight="regular",color:_color="dimmed",hoverColor:_hoverColor="mono",...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton$1,Object.assign({type:"button",color:_color,hoverColor:_hoverColor},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:icon,size:_size,weight:_weight}));let _t$9,_t2$8,_$9=t=>t;const StyledIconButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(IconButton$2)(_t$9||(_t$9=_$9``)),Container$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$8||(_t2$8=_$9`
  display: flex;
  ${0} {
    margin-left: 15px;
  }
  ${0}:first-child {
    margin-left: 0px;
  }
`),StyledIconButton,StyledIconButton),ActionButtons=({buttonsConfig:buttonsConfig})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$1,null,buttonsConfig.map(btn=>{const{icon:icon,size:size,weight:weight,color:color,hoverColor:hoverColor,onClick:onClick}=btn;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIconButton,{key:`${icon}-${size}`,icon:icon,size:size,weight:weight,color:color,hoverColor:hoverColor,onClick:onClick})}));let _t$a,_t2$9,_t3$7,_t4$5,_t5$3,_t6$3,_t7$3,_t8$2,_t9$2,_t10$2,_t11$1,_t12,_t13,_t14,_$a=t=>t;const ActionContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$a||(_t$a=_$a`
  position: absolute;
  right: 0;
  top: 0;
`)),InputActionButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button.attrs({type:"button"})(_t2$9||(_t2$9=_$a`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`)),FeedbackContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$7||(_t3$7=_$a`
  flex-shrink: 0;

  background-color: transparent;
  ${0};

  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$5||(_t4$5=_$a`
    border: 1px solid ${0};
  `),theme.styles.form.input.default.normal.borderColor)),FeedbackMessage=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$3||(_t5$3=_$a`
  flex: 0 1 400px;
  padding: 0 10px 0 0;

  ${0};
`),({theme:theme})=>theme.typography.form.feedback.message),FeedbackIcon=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$3||(_t6$3=_$a`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
`)),StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t7$3||(_t7$3=_$a`
  ${0};

  height: 100%;
  width: 100%;
  border-radius: 3px;

  padding: 0 15px 0 15px;
  box-sizing: border-box;
  outline: none;

  ${0};
`),({theme:theme,fieldState:fieldState})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$2||(_t8$2=_$a`
    min-height: ${0};
    font-family: ${0};
    border: 1px solid ${0};
  `),theme.dimensions.form.input.height,theme.fontFamily.data,theme.styles.form.input[fieldState].normal.borderColor),({theme:{typography:typography}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$2||(_t9$2=_$a`
    ${0};
    &::placeholder {
      ${0};
    }
  `),typography.form.input.value.normal,typography.form.input.placeholder.normal)),InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10$2||(_t10$2=_$a`

  flex: 1;
  position: relative;

  ${0}

`),({hasAction:hasAction})=>hasAction&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t11$1||(_t11$1=_$a`
    ${0}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `),StyledInput)),Container$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t12||(_t12=_$a`
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

`),StyledInput,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].normal,({fieldState:fieldState})=>-1===["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t13||(_t13=_$a`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `)),FeedbackContainer,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].normal.borderColor,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].normal.borderColor,({fieldState:fieldState})=>-1!==["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t14||(_t14=_$a`
      display:none;
    `)),InputContainer,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].focused),Input=({type:_type="text",placeholder:_placeholder="",defaultValue:defaultValue,fieldState:_fieldState="default",feedbackMessage:feedbackMessage,actionCallback:actionCallback,actionIcon:actionIcon,postfix:postfix,...props})=>{const isActionButton=void 0!==actionCallback;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$2,{fieldState:_fieldState||"default"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputContainer,{hasAction:isActionButton},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput,Object.assign({fieldState:_fieldState||"default",disabled:"disabled"===_fieldState||"processing"===_fieldState,type:_type,placeholder:_placeholder,defaultValue:defaultValue},props)),isActionButton?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionContainer,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputActionButton,{onClick:actionCallback},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:actionIcon||"NoIcon",color:"primary"}))):null),_fieldState?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeedbackContainer,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeedbackIcon,null,(fieldState=>{switch(fieldState){case"default":case"disabled":break;case"required":return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Required",size:20,color:"inverse"});case"valid":return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Success",size:20,color:"inverse"});case"invalid":return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Invalid",size:20,color:"inverse"});case"processing":return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spinner,{size:"medium",styling:"primary"})}})(_fieldState)),feedbackMessage?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeedbackMessage,null,feedbackMessage):null):null)};let _t$b,_t2$a,_$b=t=>t;const StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.label(_t$b||(_t$b=_$b`
  font-family: ${0};
  color: hsl(207, 5%, 57%);
  font-size: 14px;
  font-weight: 500;
  ${0};
`),({theme:theme})=>theme.fontFamily.ui,({rightAlign:rightAlign})=>rightAlign?"\n        display: flex;\n        align-items: center;\n        flex-direction: row-reverse;\n        justify-content: left;\n      ":"\n        display: block;\n        margin-bottom: 20px;\n      "),LabelText=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.span(_t2$a||(_t2$a=_$b`
  display: block;
  ${0}
`),({rightAlign:rightAlign})=>rightAlign?"\n        margin-left: 12px;\n        ":"\n        margin-bottom: 10px;\n      "),Label=({htmlFor:htmlFor,labelText:labelText,rightAlign:_rightAlign=!1,children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLabel,Object.assign({},{htmlFor:htmlFor,rightAlign:_rightAlign},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelText,Object.assign({},{rightAlign:_rightAlign}),labelText),children);let _t$c,_t2$b,_t3$8,_t4$6,_t5$4,_t6$4,_t7$4,_t8$3,_t9$3,_$c=t=>t;const StyledInput$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t$c||(_t$c=_$c`
  ${0};

  height: 100%;
  width: 100%;
  border-radius: 3px;

  padding: 0 22px 0 10px;
  box-sizing: border-box;
  outline: none;

  ${0};

  ${0}

  &:disabled {
    cursor: not-allowed;
  }
`),({theme:theme,fieldState:fieldState})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$b||(_t2$b=_$c`
    min-height: 30px;
    font-family: ${0};
    border: 1px solid ${0};
  `),theme.fontFamily.data,theme.styles.form.input[fieldState].normal.borderColor),({theme:{typography:typography}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$8||(_t3$8=_$c`
    ${0};
    &::placeholder {
      ${0};
    }
  `),typography.form.input.value.compact,typography.form.input.placeholder.compact),p=>p.padRight&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$6||(_t4$6=_$c`
    padding-right: ${0}px;
  `),p.padRight+17)),InputContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$4||(_t5$4=_$c`

  flex: 1;
  position: relative;

  ${0}

`),({hasAction:hasAction})=>hasAction&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$4||(_t6$4=_$c`
    ${0}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `),StyledInput$1)),UnitKey=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$4||(_t7$4=_$c`
  position: absolute;
  right: 10px;
  bottom: 0;
  top:0;
  font-family: ${0};
  font-size: 12px;
  color: #99a1a3;
  line-height:30px;
`),({theme:theme})=>theme.fontFamily.ui),Container$3=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$3||(_t8$3=_$c`

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

`),StyledInput$1,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].compact,({fieldState:fieldState})=>-1===["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$3||(_t9$3=_$c`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `)),InputContainer$1,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].focused.borderColor),SmallInput=({unit:unit,label:label,name:name,type:_type="text",placeholder:_placeholder="",defaultValue:defaultValue,fieldState:_fieldState="default",className:className,...props})=>{const unitElement=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[unitElementWidth,setUnitElementWidth]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{unitElement&&unitElement.current&&setUnitElementWidth(unitElement.current.clientWidth||0)},[unitElement,setUnitElementWidth,unit]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$3,{className:className,fieldState:_fieldState||"default"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label,{labelText:label,htmlFor:name||""},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputContainer$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput$1,Object.assign({padRight:unitElementWidth,fieldState:_fieldState||"default",type:_type,placeholder:_placeholder,defaultValue:defaultValue},props)),unit?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UnitKey,{ref:unitElement},unit):null)))};let _t$d,_t2$c,_t3$9,_t4$7,_t5$5,_t6$5,_t7$5,_t8$4,_t9$4,_t10$3,_t11$2,_$d=t=>t;var SwitchPosition;!function(SwitchPosition){SwitchPosition[SwitchPosition.Off=0]="Off",SwitchPosition[SwitchPosition.On=1]="On",SwitchPosition[SwitchPosition.Neutral=2]="Neutral",SwitchPosition[SwitchPosition.Locked=3]="Locked"}(SwitchPosition||(SwitchPosition={}));const RealInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t$d||(_t$d=_$d`
  display: none;
`)),SwitchOuter=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$c||(_t2$c=_$d`
  border: 1px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
`)),getPositionKey=switchPos=>{switch(switchPos){case SwitchPosition.Off:return"off";case SwitchPosition.On:return"on";case SwitchPosition.Neutral:return"neutral";case SwitchPosition.Locked:return"locked";default:return"off"}},SwitchInner=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$9||(_t3$9=_$d`
  position: absolute;
  box-sizing: border-box;
`)),LabelText$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.span(_t4$7||(_t4$7=_$d`
  font-family: ${0};

  flex: 1;
  margin-left: 10px;
  display: block;

  line-height: ${0};

  ${0};
`),({theme:theme})=>theme.fontFamily.ui,p=>p.theme.dimensions.form.switch.outer.height,p=>p.theme.typography.form.input.label),IconWrapper$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$5||(_t5$5=_$d`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`)),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$5||(_t6$5=_$d`
  margin-top: 1px;
`)),Container$4=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.label(_t7$5||(_t7$5=_$d`
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
`),SwitchInner,({theme:theme,position:position,themeState:themeState,activeTheming:activeTheming})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$4||(_t8$4=_$d`
      ${0};
      left: ${0};
      top: ${0};
      transition:
        left ${0} ${0},
        border ${0} ${0},
        width ${0} ${0};

      ${0}
    `),theme.dimensions.form.switch.inner,theme.dimensions.form.switch.positions[getPositionKey(position)],theme.dimensions.form.switch.positions.top,theme.animation.speed.normal,theme.animation.easing.primary.out,theme.animation.speed.normal,theme.animation.easing.primary.out,theme.animation.speed.normal,theme.animation.easing.primary.out,theme.styles.form.switch[activeTheming][themeState].inner),p=>"locked"===p.activeTheming&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$4||(_t9$4=_$d`
      width: calc(100% - ${0}px);
    `),2*parseInt(p.theme.dimensions.form.switch.positions.locked)),p=>p.$loading&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$3||(_t10$3=_$d`
      background: transparent;
      top: 1px;
    `)),SwitchOuter,({theme:theme,activeTheming:activeTheming,themeState:themeState})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t11$2||(_t11$2=_$d`
      ${0};
      ${0}};
      flex: 0 0 ${0}};
    `),theme.styles.form.switch[activeTheming][themeState].outer,theme.dimensions.form.switch.outer,theme.dimensions.form.switch.outer.width),SwitchInner,p=>p.useIntent&&((left,checked)=>{let offset=checked?-2:2;return(parseInt(left)+offset).toString()+"px"})(p.theme.dimensions.form.switch.positions[getPositionKey(p.position)],p.checked)),Switch=({state:_state="default",leftTheme:_leftTheme="off",rightTheme:_rightTheme="on",labelText:labelText,onChangeCallback:onChangeCallback,checked:_checked=!1})=>{var _inputRef$current4;const inputRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[position,setPosition]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_checked?SwitchPosition.On:SwitchPosition.Off),[activeTheming,setActiveTheming]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_leftTheme),[switchState,setSwitchState]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("default");Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setPosition(_checked?SwitchPosition.On:SwitchPosition.Off),inputRef.current&&(inputRef.current.checked=_checked)},[_checked]);const positionSwitch=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{var _inputRef$current,_inputRef$current2;null!==(_inputRef$current=inputRef.current)&&void 0!==_inputRef$current&&_inputRef$current.checked?(setPosition(SwitchPosition.On),setActiveTheming(_rightTheme)):null!==(_inputRef$current2=inputRef.current)&&void 0!==_inputRef$current2&&_inputRef$current2.checked||(setPosition(SwitchPosition.Off),setActiveTheming(_leftTheme))},[setPosition,setActiveTheming,_leftTheme,_rightTheme,inputRef]),updateThemeChoice=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{position===SwitchPosition.On?setActiveTheming(_rightTheme):position===SwitchPosition.Off&&setActiveTheming(_leftTheme)},[position,_rightTheme,_leftTheme]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{updateThemeChoice()},[_leftTheme,_rightTheme,updateThemeChoice]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setSwitchState(stateCheck(_state))},[_state,setSwitchState]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{"locked"===_state?(setPosition(SwitchPosition.Locked),setActiveTheming("locked")):"failure"===_state?(setPosition(SwitchPosition.Neutral),setActiveTheming("failure")):positionSwitch()},[_state,setPosition,positionSwitch]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$4,{onChange:()=>{var _inputRef$current3;(positionSwitch(),onChangeCallback)&&onChangeCallback((null===(_inputRef$current3=inputRef.current)||void 0===_inputRef$current3?void 0:_inputRef$current3.checked)||!1)},activeTheming:activeTheming,$loading:"loading"===_state,useIntent:"default"===_state||"failure"===_state,themeState:switchState,position:position,checked:null===(_inputRef$current4=inputRef.current)||void 0===_inputRef$current4?void 0:_inputRef$current4.checked},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SwitchOuter,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SwitchInner,null,"failure"===_state?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapper$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Exclamation",color:"danger",size:18,weight:"regular"})):null,"locked"===_state?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapper$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Locked",color:"dimmed",size:10,weight:"light"})):null,"loading"===_state?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SpinnerWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spinner,{size:"small",styling:"simple"})):null)),labelText?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelText$1,null,labelText):null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealInput,{ref:inputRef,type:"checkbox",disabled:"default"!==_state&&"failure"!==_state,defaultChecked:_checked}))},stateCheck=state=>{switch(state){case"locked":case"failure":return"default";default:return state}};function SvgLogoMark(props){return Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",Object.assign({width:35,height:35},props),Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("defs",null,Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("linearGradient",{id:"LogoMark_svg__a",x1:"36.708%",x2:"69.959%",y1:"2.579%",y2:"98.009%"},Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("stop",{offset:"0%",stopColor:"#7DB8DB"}),Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("stop",{offset:"100%",stopColor:"#5CA0D1"}))),Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",{fill:"none",fillRule:"evenodd"},Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect",{width:35,height:35,fill:"url(#LogoMark_svg__a)",rx:5}),Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M14.42 25.12c4.4 0 6.42-3.06 6.42-7.02v-7.3h-3.9v7.3c0 1.84-.68 3.56-2.52 3.56-1.8 0-2.5-1.68-2.5-3.56v-7.3h-3.9v7.3c0 3.76 1.86 7.02 6.4 7.02zM26.98 25V10.8h-3.9V25h3.9z"})))}function SvgLogoText(props){return Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",Object.assign({width:71,height:30},props),Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",{d:"M6.088 12.112c2.336 0 4.128-.976 4.128-3.168 0-2.048-1.472-2.72-3.84-3.248-2.048-.464-2.992-.784-2.992-2 0-1.152.8-1.856 2.56-1.856 1.36 0 2.56.592 3.088 1.184l.672-1.168C8.744 1.072 7.496.56 5.976.56c-2.352 0-4.08 1.184-4.08 3.36 0 1.808 1.2 2.432 3.504 2.992 2.112.512 3.28.896 3.28 2.176 0 1.136-.944 1.728-2.56 1.728-1.728 0-3.28-.8-3.968-1.52l-.688 1.216c1.28 1.04 2.88 1.6 4.624 1.6zm11.941-.016c1.76 0 3.792-.944 4.512-2.64l-1.2-.656c-.656 1.408-2.064 2-3.248 2-2.256 0-3.936-2.128-3.936-4.496 0-2.144 1.36-4.432 3.888-4.432 1.152 0 2.48.48 3.152 1.92l1.136-.736C21.63 1.6 20.125.576 18.11.576c-3.424 0-5.408 2.912-5.408 5.664 0 2.88 2.208 5.856 5.328 5.856zm12.134-.016c3.072 0 5.36-2.72 5.36-5.744 0-2.848-2.144-5.776-5.328-5.776-3.072 0-5.376 2.736-5.376 5.76 0 2.912 2.16 5.76 5.344 5.76zm.016-1.296c-2.352 0-3.904-2.144-3.904-4.464 0-2.208 1.488-4.448 3.904-4.448 2.304 0 3.888 2.128 3.888 4.448 0 2.192-1.472 4.464-3.888 4.464zM40.296 12V7.92h3.008L45.896 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376C47.16 2.48 45.72.64 43.72.64h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM58.413 12v-1.28h-6.272V6.8h5.328V5.6h-5.328V1.92h6.128V.64h-7.568V12h7.712zm4.742 0V7.92h3.008L68.755 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376 0-1.792-1.44-3.632-3.44-3.632h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM4.78 27.05c2.18 0 2.99-1.66 2.99-3.57V19.9h-.7v3.58c0 1.45-.5 2.94-2.3 2.94-1.76 0-2.29-1.45-2.29-2.94V19.9h-.69v3.58c0 1.81.74 3.57 2.99 3.57zm6.193-.05v-7.1h-.7V27h.7zm6.697 0v-2.18L19 23.44 21.71 27h.79l-3.05-3.98 2.9-3.12h-.77l-3.91 4.13v-4.12h-.7V27h.7zm7.263 0v-7.1h-.7V27h.7zm5.124 0v-6.48h2.53v-.62h-5.76v.62h2.53V27h.7z",fill:"#93A5B2"}))}function SvgAvatarPlaceholder(props){return Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",Object.assign({width:48,height:48},props,{viewBox:"0 0 48 48"}),Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",{fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",{stroke:"#C1C1C1",strokeWidth:"1.5"},Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",null,Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",null,Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",{transform:"translate(-789 -294) translate(772 277) translate(10.25 10.25) translate(7.688 7.688)"},Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect",{width:"37.477",height:"43.242",x:"4.324",y:"1.441",rx:"1.5"}),Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle",{cx:"23.063",cy:"17.456",r:"7.899"}),Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",{d:"M36.035 36.568c-2.537-4.814-7.53-7.828-12.972-7.828-5.442 0-10.436 3.014-12.973 7.828"})))))))}function CheckMark(props){return Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",Object.assign({width:props.size,height:props.size,viewBox:"0 0 24 24"},props),Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",{d:"M23.848 5.132l-2.967-2.976a.531.531 0 0 0-.753 0L7.595 14.697a.531.531 0 0 1-.752 0l-2.968-2.975a.531.531 0 0 0-.752 0L.156 14.697a.531.531 0 0 0 0 .752l6.687 6.688a.531.531 0 0 0 .752 0L23.848 5.876a.531.531 0 0 0 0-.744z",fill:"none",fillRule:"evenodd",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}))}let _t$e,_t2$d,_t3$a,_t4$8,_t5$6,_t6$6,_t7$6,_t8$5,_t9$5,_t10$4,_t11$3,_t12$1,_t13$1,_$e=t=>t;var CheckboxState;!function(CheckboxState){CheckboxState.Off="off",CheckboxState.On="on",CheckboxState.Indeterminate="indeterminate"}(CheckboxState||(CheckboxState={}));const RealInput$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t$e||(_t$e=_$e`
  display: none;
`)),CheckboxOuter=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$d||(_t2$d=_$e`
  cursor: pointer;

  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
`)),CheckboxInner=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$a||(_t3$a=_$e`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`)),IconWrapper$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$8||(_t4$8=_$e`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    [stroke]{
      stroke: transparent;
    }
    [fill] {
      fill: ${0};
    }
  }
`),({theme:theme,color:color})=>theme.colors.icons[color]),Container$5=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.label(_t5$6||(_t5$6=_$e`
  user-select: none;


  ${0}

  ${0}

  ${0}

`),({visualState:visualState,disabled:disabled,theme:{styles:styles}})=>visualState===CheckboxState.Off&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$6||(_t6$6=_$e`
    ${0}{
      ${0};
    }

    ${0};

    ${0}
  `),CheckboxOuter,styles.form.checkbox.unchecked.default,!disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$6||(_t7$6=_$e`
      &:hover ${0} {
        ${0};
      }`),CheckboxOuter,styles.form.checkbox.unchecked.hover),disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$5||(_t8$5=_$e`
      ${0}{
        ${0};
        cursor: not-allowed;
      }
    `),CheckboxOuter,styles.form.checkbox.unchecked.disabled)),({visualState:visualState,disabled:disabled,theme:{styles:styles}})=>visualState===CheckboxState.On&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$5||(_t9$5=_$e`
    ${0}{
      ${0};
      border: none;
    }
    ${0};

    ${0}
  `),CheckboxOuter,styles.form.checkbox.checked.default,!disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$4||(_t10$4=_$e`
      &:hover ${0}{
        ${0};
        border: none;
      }`),CheckboxOuter,styles.form.checkbox.checked.hover),disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t11$3||(_t11$3=_$e`
      ${0}{
        ${0};
        cursor: not-allowed;
      }
    `),CheckboxOuter,styles.form.checkbox.checked.disabled)),({visualState:visualState,disabled:disabled,theme:{styles:styles}})=>visualState===CheckboxState.Indeterminate&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t12$1||(_t12$1=_$e`
    ${0}{
      ${0};
    }
    ${0};

  `),CheckboxOuter,styles.form.checkbox.indeterminate.default,!disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t13$1||(_t13$1=_$e`
      &:hover ${0}{
        ${0};
      }
    `),CheckboxOuter,styles.form.checkbox.indeterminate.hover))),Checkbox=({indeterminate:_indeterminate=!1,disabled:disabled,checked:_checked=!1,onChangeCallback:onChangeCallback})=>{const[isChecked,setIsChecked]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_checked),[visualState,setVisualState]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_checked?CheckboxState.On:CheckboxState.Off);Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let state=_checked?CheckboxState.On:CheckboxState.Off;setVisualState(state)},[_checked,isChecked,setVisualState]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setIsChecked(_checked)},[_checked,setIsChecked]);const iconWeight=dimensions.icons.weights.regular;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$5,Object.assign({onChange:e=>{const checked=e.target.checked;setIsChecked(checked),onChangeCallback&&onChangeCallback(checked)}},{indeterminate:_indeterminate,disabled:disabled,visualState:visualState}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckboxOuter,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckboxInner,null,visualState===CheckboxState.On?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapper$2,{color:"inverse"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckMark,{color:"inverse",stroke:"inverse",size:12,weight:iconWeight})):null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealInput$1,Object.assign({type:"checkbox",checked:isChecked,readOnly:!0},{disabled:disabled}))," ")};let _t$f,_t2$e,_t3$b,_t4$9,_t5$7,_t6$7,_t7$7,_t8$6,_t9$6,_t10$5,_$f=t=>t;const InnerRadio=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$f||(_t$f=_$f`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`)),OuterRadio=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$e||(_t2$e=_$f`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  user-select: none;

  ${0};
`),({theme:{styles:styles},isChecked:isChecked,disabled:disabled})=>styles&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$b||(_t3$b=_$f`
    border-color: ${0};

    ${0};

    ${0};

    ${0};

    ${0};

    ${0}
  `),styles.form.checkbox.unchecked.default.borderColor,!disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$9||(_t4$9=_$f`
      &:hover {
        cursor: pointer;
        border-color: ${0};
      }
    `),styles.form.checkbox.unchecked.hover.borderColor),isChecked&&!disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$7||(_t5$7=_$f`
      border-color: ${0};
      ${0} {
        background-color: ${0};
      }
    `),styles.form.checkbox.checked.default.backgroundColor,InnerRadio,styles.form.checkbox.checked.default.backgroundColor),isChecked&&!disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$7||(_t6$7=_$f`
      &:hover {
        border-color: ${0};
        ${0} {
          background-color: ${0};
        }
      }
    `),styles.form.checkbox.checked.hover.backgroundColor,InnerRadio,styles.form.checkbox.checked.hover.backgroundColor),isChecked&&disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$7||(_t7$7=_$f`
      cursor: not-allowed;
      border-color: ${0};
      ${0} {
        background-color: ${0};
      }
    `),styles.form.checkbox.checked.disabled.backgroundColor,InnerRadio,styles.form.checkbox.checked.disabled.backgroundColor),!isChecked&&disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$6||(_t8$6=_$f`
      cursor: not-allowed;
      border-color: ${0};
      ${0} {
        background-color: ${0};
      }
    `),styles.form.checkbox.unchecked.disabled.borderColor,InnerRadio,styles.form.checkbox.unchecked.disabled.backgroundColor))),HiddenInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t9$6||(_t9$6=_$f`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
  opacity: 0;
`)),Container$6=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10$5||(_t10$5=_$f`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
`)),RadioButton=({id:id,value:value,name:name,currentChecked:currentChecked,disabled:_disabled=!1,required:required,onChangeCallback:_onChangeCallback=(()=>{})})=>{const handleChange=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{const checkedValue=e.target.value;_onChangeCallback(checkedValue)},[_onChangeCallback]),isChecked=void 0!==currentChecked&&currentChecked===value;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$6,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HiddenInput,Object.assign({type:"radio"},{id:id,name:name,disabled:_disabled,required:required,value:value},{checked:isChecked,onChange:handleChange})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OuterRadio,Object.assign({},{isChecked:isChecked,disabled:_disabled}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerRadio,null)))};let _t$g,_t2$f,_t3$c,_t4$a,_t5$8,_t6$8,_t7$8,_t8$7,_t9$7,_t10$6,_$g=t=>t;const FeedbackIcon$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$g||(_t$g=_$g`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding-top: 2px;
`)),StyledTextArea=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.textarea(_t2$f||(_t2$f=_$g`

${0};

  padding: 8px 15px;
  box-sizing: border-box;
  outline: none;
  height: 100%;
  width: 100%;
  border-radius: 3px;

  ${0};
`),({theme:theme,fieldState:fieldState})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$c||(_t3$c=_$g`
  font-family: ${0};
  border: 1px solid ${0};
`),theme.fontFamily.data,theme.styles.form.input[fieldState].normal.borderColor),({theme:{typography:typography}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$a||(_t4$a=_$g`
  ${0};
  &::placeholder {
    ${0};
  }
`),typography.form.input.value.normal,typography.form.input.placeholder.normal)),FeedbackContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$8||(_t5$8=_$g`
  flex-shrink: 0;
  padding: 8px 0;
  background-color: transparent;
  ${0};

  border-left: none;
  border-radius: 0 0 3px 3px;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$8||(_t6$8=_$g`
    border: 1px solid ${0};
  `),theme.styles.form.input.default.normal.borderColor)),FeedbackMessage$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$8||(_t7$8=_$g`
  flex: 0 1 400px;
  padding: 0 10px 0 0;
  ${0};
`),({theme:theme})=>theme.typography.form.feedback.message),Container$7=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$7||(_t8$7=_$g`
  display: flex;
  position: relative;
  flex-direction: column;
  ${0}{
    ${0};

    &:focus {
      box-shadow: 0px 3px 7px 0px hsla(207, 65.8%, 31%, 0.078);
    }

    ${0}
  }

  ${0} {
    background: ${0};
    border-color: ${0};

    ${0}
  }

  &:focus-within ${0} {
    ${0};

    ${0};

    ${0};
  }

`),StyledTextArea,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].normal,({fieldState:fieldState})=>-1===["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$7||(_t9$7=_$g`
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    `)),FeedbackContainer$1,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].normal.borderColor,({theme:theme,fieldState:fieldState})=>theme.styles.form.input[fieldState].normal.borderColor,({fieldState:fieldState})=>-1!==["default","disabled"].indexOf(fieldState)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$6||(_t10$6=_$g`
      display:none;
    `)),FeedbackContainer$1,({fieldState:fieldState})=>"required"===fieldState?"\n      box-shadow: 0px 3px 7px 0px hsla(207, 67.8%, 35.3%, 0.071);\n    ":null,({fieldState:fieldState})=>"valid"===fieldState?"\n      box-shadow: 0px 3px 5px 0px hsla(120, 76.6%, 15.1%, 0.071);\n    ":null,({fieldState:fieldState})=>"invalid"===fieldState?"\n      box-shadow: 0px 3px 7px 0px hsla(0, 100%, 50%, 0.102);\n    ":null),TextArea=({placeholder:_placeholder="",fieldState:_fieldState="default",feedbackMessage:feedbackMessage,children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$7,{fieldState:_fieldState||"default"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTextArea,Object.assign({fieldState:_fieldState||"default",placeholder:_placeholder,disabled:"disabled"===_fieldState||"processing"===_fieldState},props),children),_fieldState&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeedbackContainer$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeedbackIcon$1,null,(fieldState=>{switch(fieldState){case"default":case"disabled":break;case"required":return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Required",size:20,color:"inverse"});case"valid":return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Success",size:20,color:"inverse"});case"invalid":return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Invalid",size:20,color:"inverse"});case"processing":return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spinner,{size:"medium",styling:"primary"})}})(_fieldState)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FeedbackMessage$1,null,feedbackMessage)));let _t$h,_t2$g,_t3$d,_t4$b,_t5$9,_t6$9,_t7$9,_t8$8,_t9$8,_t10$7,_t11$4,_$h=t=>t;const SelectWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$h||(_t$h=_$h`
  position: relative;
  display: flex;
  width: 100%;

  ${0} {
    position: absolute;
    top: calc(50% - 7px);
    right: 10px;
    pointer-events: none;
  }
`),IconWrapper),StyledSelect=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.select(_t2$g||(_t2$g=_$h`
  box-sizing: border-box;
  outline: none;
  border-radius: 3px;
  height: 40px;
  padding: 0 25px 0 15px;
  appearance: none;
  line-height: 1.56;
  width: 100%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &::-ms-expand {
    display: none;
  }
`)),Container$8=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$d||(_t3$d=_$h`

${0}

${0};

  ${0} {
    ${0};

    ${0};

    ${0};

    ${0};

    option {
      font-style: normal;
      ${0};

      ${0};
    }
    font-weight: 400;
  }
`),({isCompact:isCompact})=>isCompact&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$b||(_t4$b=_$h`
  ${0} {
      span {
        margin-bottom: 6px;
      }
    }
  `),StyledLabel),({isLabelSameRow:isLabelSameRow})=>isLabelSameRow&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$9||(_t5$9=_$h`
  ${0} {
    display: flex;
    align-items: center;
    span {
      margin: 0 10px 0 0;
    }
  }
`),StyledLabel),StyledSelect,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$9||(_t6$9=_$h`
      border: 1px solid ${0};
      font-family: ${0};
      ${0};
    `),theme.styles.form.input.default.normal.borderColor,theme.fontFamily.data,theme.typography.form.input.value.normal),({theme:{typography:typography},isCompact:isCompact})=>isCompact&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$9||(_t7$9=_$h`
      height: 30px;
      padding: 0 25px 0 10px;
      ${0};
    `),typography.form.input.value.compact),({theme:theme,activePlaceholder:activePlaceholder})=>activePlaceholder&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$8||(_t8$8=_$h`
      ${0};
    `),theme.typography.form.input.placeholder.normal),({theme:theme,isCompact:isCompact,activePlaceholder:activePlaceholder})=>isCompact&&activePlaceholder&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$8||(_t9$8=_$h`
      ${0};
    `),theme.typography.form.input.placeholder.compact),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$7||(_t10$7=_$h`
        ${0};
      `),theme.typography.form.input.value.normal),({theme:{typography:typography},isCompact:isCompact})=>isCompact&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t11$4||(_t11$4=_$h`
        ${0};
      `),typography.form.input.value.compact)),SelectField=({placeholder:placeholder,label:label,isCompact:isCompact,defaultValue:defaultValue,changeCallback:_changeCallback=(()=>{}),children:children,...props})=>{const[activePlaceholder,setPlaceholderStatus]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!defaultValue),handleOnChange=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{const{value:value}=e.target;setPlaceholderStatus(prev=>!prev&&prev),_changeCallback(value)},[_changeCallback]),renderSelect=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(htmlFor=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSelect,Object.assign({id:htmlFor},props,{defaultValue:defaultValue||"",onChange:handleOnChange}),!defaultValue&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{value:"",disabled:!0,hidden:!0},placeholder),children),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Down",color:"dimmed",size:11})),[children,defaultValue,handleOnChange,placeholder,props]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$8,Object.assign({},{isCompact:isCompact,activePlaceholder:activePlaceholder},{isLabelSameRow:null==label?void 0:label.isSameRow}),label?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label,{htmlFor:label.htmlFor,labelText:label.text},renderSelect(label.htmlFor)):renderSelect())},isInsideRange=(value,min,max)=>!(value<min)&&!(value>max),clamp=(value,minValue,maxValue)=>Math.min(Math.max(value,minValue),maxValue),getTopLevelPath=pathname=>{const parts=pathname.split("/").filter(String);return parts.length>0?"/"+parts[0]:"/"};let _t$i,_t2$h,_t3$e,_t4$c,_t5$a,_t6$a,_t7$a,_t8$9,_t9$9,_t10$8,_t11$5,_t12$2,_$i=t=>t;const SliderWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$i||(_t$i=_$i`
  font-family: ${0};
  position: relative;
  height: 30px;
  margin-top: 20px;
  ${0};
`),({theme:theme})=>theme.fontFamily.data,({disabled:disabled})=>disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$h||(_t2$h=_$i`
    opacity: .5;
  `))),HiddenInput$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t3$e||(_t3$e=_$i`
  width: 100%;
  margin: 0;
  padding:0;
  opacity: .001;
  z-index: 99;
  cursor: ${0};
`),({disabled:disabled})=>disabled?"not-allowed":"pointer"),Rail=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$c||(_t4$c=_$i`
  position: absolute;
  left: ${0}px;
  top: 10px;
  width: calc(100% - ${0}px);
  height: 2px;
  border-radius: 11px;
  background-image: linear-gradient(to bottom, hsl(210, 30%, 96%), hsl(203, 42%, 94%) 98%);
`),8,16),Mark=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.span(_t5$a||(_t5$a=_$i`
  position: absolute;
  top: -3px;
  left: ${0};
  width: 1px;
  height: 9px;
  opacity: 0.25;
  background-color: hsl(205, 77%, 64%);
`),({leftValue:leftValue})=>`calc(${leftValue}% + 7px)`),MarkLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.span(_t6$a||(_t6$a=_$i`
  position: absolute;
  top: -24px;
  left: ${0};

  font-size: 10px;
  font-style: italic;
  line-height: normal;
  text-align: center;
  color: hsla(195, 10%, 52%, 0.72);

  ${0}
  ${0}
  ${0}
`),({leftValue:leftValue})=>`calc(${leftValue}% + 7px)`,({alignment:alignment})=>"center"===alignment&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$a||(_t7$a=_$i`transform: translateX(-50%);;`)),({alignment:alignment})=>"right"===alignment&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$9||(_t8$9=_$i`transform: translateX(5%);`)),({alignment:alignment})=>"left"===alignment&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$9||(_t9$9=_$i`transform: translateX(-95%);`))),ThumbWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10$8||(_t10$8=_$i`
  position: relative;
  margin-right: 16px;
  left: 0;
  top: 10px;
  width: calc(100% - ${0}px);
  height: 2px;
`),16),Thumb=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.span(_t11$5||(_t11$5=_$i`
  width: ${0}px;
  height: ${0}px;
  border-radius: 8px;
  background-color: ${0};
  position: absolute;
  top: -7.5px;
  left: ${0};
`),16,16,({theme:theme,bgColor:bgColor})=>theme.colors.feedback[bgColor],({leftValue:leftValue})=>leftValue+"%"),GhostThumb=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(Thumb)(_t12$2||(_t12$2=_$i`
  opacity: .5;
`)),thumbLeftPosition=(value,min,max)=>valueToPercent(value,min,max),nearMark=(value,marks)=>marks.reduce((prev,curr)=>Math.abs(curr.value-value)<Math.abs(prev.value-value)?curr:prev).value,valueToPercent=(value,min,max)=>Math.round(100*(value-min)/(max-min)),getMarkAlignment=(value,min,max)=>value===min?"right":value===max?"left":"center";let ghostThumbValue=0;const SliderInput=({min:min,max:max,marks:marks,defaultValue:defaultValue,thumbColor:_thumbColor="info",disabled:_disabled=!1,onlyMarkSelect:_onlyMarkSelect=!1,inputCallback:_inputCallback=(()=>{}),onChangeCallback:_onChangeCallback=(()=>{}),...props})=>{const maxValid=((max,min)=>null!==max||min?min&&min>max?min+1:max:100)(max,min),minValid=((max,min)=>max||min?min||(max>0?0:max-1):0)(max,min),initValue=defaultValue&&isInsideRange(defaultValue,minValid,maxValid)?defaultValue:minValid,[selectedValue,setSelectedValue]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(initValue),[isGhostActive,setIsGhostActive]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),thumbValueRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(thumbLeftPosition(selectedValue,minValid,maxValid));if(marks&&_onlyMarkSelect){const mark=nearMark(selectedValue,marks),ghostVal=thumbLeftPosition(mark,minValid,maxValid);ghostThumbValue=ghostVal}const handleInputChange=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e,lastValue)=>{const val=e.target.value;if(null===val)return;const numericVal=parseInt(val,10);thumbValueRef.current=thumbLeftPosition(numericVal,minValid,maxValid);const mark=marks?nearMark(numericVal,marks):numericVal,prevMark=marks?nearMark(lastValue,marks):numericVal;_onlyMarkSelect&&prevMark!==mark&&_onChangeCallback(mark),_onlyMarkSelect||_onChangeCallback(numericVal),setSelectedValue(prev=>numericVal===prev?prev:numericVal)},[marks,maxValid,minValid,_onChangeCallback,_onlyMarkSelect]),handleSelectStart=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setIsGhostActive(!0)},[]),handleSelectEnd=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(currentValue=>{_inputCallback(_onlyMarkSelect?ghostThumbValue:currentValue),_onlyMarkSelect&&(thumbValueRef.current=ghostThumbValue),setIsGhostActive(!1)},[_inputCallback,_onlyMarkSelect]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{const initValue=defaultValue&&isInsideRange(defaultValue,minValid,maxValid)?defaultValue:minValid;thumbValueRef.current=thumbLeftPosition(initValue,minValid,maxValid),setSelectedValue(initValue)},[defaultValue,maxValid,minValid]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SliderWrapper,{disabled:_disabled},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Rail,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThumbWrapper,null,marks&&((markList,min,max,listTag)=>{const listOptions=[],marksElements=markList.map(({value:value,label:label},index)=>{const left=index===markList.length-1?100:valueToPercent(value,min,max);return listOptions.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{key:"option-"+value},value)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{key:"mark-"+index},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Mark,{"data-leftvalue":left+"%",leftValue:left}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarkLabel,{leftValue:left,alignment:getMarkAlignment(value,min,max)},label))});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,marksElements,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("datalist",{id:listTag},listOptions))})(marks,minValid,maxValid,`sliderList-${minValid}-${maxValid}`),isGhostActive&&_onlyMarkSelect?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GhostThumb,{"data-value":selectedValue,leftValue:ghostThumbValue,"data-percentage":ghostThumbValue,bgColor:_thumbColor}):null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Thumb,{"data-value":selectedValue,leftValue:thumbValueRef.current,"data-percentage":thumbValueRef.current,bgColor:_thumbColor})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HiddenInput$1,Object.assign({},props,{type:"range",disabled:_disabled,list:`sliderList-${minValid}-${maxValid}`,min:minValid,max:maxValid,value:selectedValue,onMouseUp:()=>handleSelectEnd(selectedValue),onMouseDown:handleSelectStart,onTouchStart:()=>handleSelectEnd(selectedValue),onTouchEnd:handleSelectStart,onChange:e=>handleInputChange(e,selectedValue)})))};let _t$j,_t2$i,_t3$f,_$j=t=>t;const Container$9=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$j||(_t$j=_$j``)),HiddenInput$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t2$i||(_t2$i=_$j`
  display: none;
`)),StyledButton$2=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(Button)(_t3$f||(_t3$f=_$j`
  text-align: center;
`)),InputFileButton=({text:text,buttonDesign:buttonDesign,buttonSize:buttonSize,inputCallback:inputCallback,...props})=>{let fileInputRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);const handleFile=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async e=>{if(!(e.target.files&&e.target.files.length>0))return;const newFiles=e.target.files;inputCallback&&inputCallback(newFiles),e.target.value=""},[inputCallback]),forwardClick=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{fileInputRef.current&&fileInputRef.current.click()},[]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$9,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HiddenInput$2,Object.assign({},props,{ref:fileInputRef,type:"file",onChange:handleFile})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton$2,{onClick:forwardClick,design:buttonDesign,size:buttonSize},text))};let _t$k,_t2$j,_t3$g,_t4$d,_t5$b,_$k=t=>t;const Container$a=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$k||(_t$k=_$k``)),Headers=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$j||(_t2$j=_$k`
  font-size: 14px;
  color: hsl(207, 5%, 57%);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 6px;
`)),ValueLabel=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(Label)(_t3$g||(_t3$g=_$k`
  font-family: ${0};
  margin-bottom: 0;
`),({theme:theme})=>theme.fontFamily.ui),Unit=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$d||(_t4$d=_$k`
  font-family: ${0};
  color: hsla(195, 10%, 52%, 0.72);
  font-style: italic;
  font-size: 12px;
  line-height: 1.5;
`),({theme:theme})=>theme.fontFamily.data),ValueTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$b||(_t5$b=_$k`
  display: flex;
`)),DurationSlider=({max:max,min:min,defaultValue:_defaultValue=0,title:_title="",timeUnit:timeUnit,controlledValue:controlledValue,inputCallback:inputCallback,...props})=>{const[selectedValue,setSelectedValue]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_defaultValue),handleSelectedValue=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value=>{inputCallback&&inputCallback(value),setSelectedValue(value)},[inputCallback]),labelValue=controlledValue||selectedValue,unit=(value=>{switch(value){case"seconds":case"minutes":case"hours":return!0;default:return!1}})(timeUnit)?((value,unit)=>{switch(unit){case"seconds":return value<2?"sec":"secs";case"minutes":return value<2?"min":"mins";default:return value<2?"hr":"hrs"}})(labelValue,timeUnit):timeUnit;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Headers,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label,{htmlFor:"duration-slider",labelText:_title}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ValueTitle,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ValueLabel,{htmlFor:"duration-slider",labelText:""+labelValue}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Unit,null,unit))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SliderInput,Object.assign({},props,{id:"duration-slider",max:max,min:min,defaultValue:_defaultValue,onChangeCallback:handleSelectedValue})))};let _t$l,_t2$k,_t3$h,_$l=t=>t;const Container$b=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$l||(_t$l=_$l``)),Headers$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$k||(_t2$k=_$l`
  font-size: 14px;
  color: hsl(207, 5%, 57%);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 6px;
`)),ValueTitle$1=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(Label)(_t3$h||(_t3$h=_$l`
  font-family: ${0};
`),({theme:theme})=>theme.fontFamily.data),getThumbColor=value=>value<=10?"error":value>10&&value<=30?"warning":"success",PercentageSlider=({defaultValue:_defaultValue=0,inputCallback:inputCallback,updateThumbColor:updateThumbColor,updateTitle:updateTitle,...props})=>{const[selectedValue,setSelectedValue]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_defaultValue),handleSelectedValue=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value=>{inputCallback&&inputCallback(value),setSelectedValue(value)},[inputCallback]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$b,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Headers$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label,{htmlFor:"percentage-slider",labelText:updateTitle?updateTitle(selectedValue):(value=selectedValue,value<=10?"Critical Level":value>10&&value<=30?"Warning Level":"Safe Level")}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ValueTitle$1,{htmlFor:"percentage-slider",labelText:selectedValue+"%"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SliderInput,Object.assign({},props,{id:"percentage-slider",max:100,min:0,defaultValue:_defaultValue,onChangeCallback:handleSelectedValue,thumbColor:updateThumbColor?updateThumbColor(selectedValue):getThumbColor(selectedValue)})));var value},PasswordField=({name:name,label:label,fieldState:fieldState,feedbackMessage:feedbackMessage,...props})=>{const[showValue,setShowValue]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[actionIcon,setActionIcon]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("PasswordHide");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label,{htmlFor:name,labelText:label},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input,Object.assign({type:showValue?"text":"password",actionCallback:()=>{const newValue=!showValue;setShowValue(newValue),setActionIcon(newValue?"PasswordShow":"PasswordHide")},actionIcon:actionIcon},{name:name,fieldState:fieldState,feedbackMessage:feedbackMessage,...props})))},TextField=({name:name,label:label,fieldState:_fieldState="default",feedbackMessage:feedbackMessage,type:_type,...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label,{htmlFor:name,labelText:label},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input,Object.assign({type:"text"},{fieldState:_fieldState,feedbackMessage:feedbackMessage,name:name,...props}))),TextAreaField=({name:name,label:label,fieldState:_fieldState="default",feedbackMessage:feedbackMessage,children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label,{htmlFor:name,labelText:label},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextArea,Object.assign({},{fieldState:_fieldState,feedbackMessage:feedbackMessage,name:name,...props})));let _t$m,_t2$l,_$m=t=>t;const Container$c=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$m||(_t$m=_$m`
  ${0};
  position: relative;
`),({height:height})=>height?"height: "+height:null),DragAndDrop=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$l||(_t2$l=_$m`
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${0};
`),({inDropZone:inDropZone})=>inDropZone?"dashed #afa9a9 2px":null),DropArea=({height:height,text:text,dropCallback:dropCallback,...props})=>{const[inDropZone,setInDropZone]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),onDragEnter=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),setInDropZone(!0)},[]),onDragLeave=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),setInDropZone(!1)},[]),onDragOver=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),onDrop=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{var _e$dataTransfer;e.preventDefault(),e.stopPropagation(),null!==(_e$dataTransfer=e.dataTransfer)&&void 0!==_e$dataTransfer&&_e$dataTransfer.files&&dropCallback&&dropCallback(e.dataTransfer.files),setInDropZone(!1)},[dropCallback]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$c,Object.assign({},{height:height},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DragAndDrop,Object.assign({},{inDropZone:inDropZone,onDragEnter:onDragEnter,onDragLeave:onDragLeave,onDrop:onDrop,onDragOver:onDragOver}),text))},areDimensionsDiff=(oldDimensions,newValues)=>{let isDifferent=!1;return oldDimensions.cropLeft!==newValues.left&&(isDifferent=!0),oldDimensions.cropTop!==newValues.top&&(isDifferent=!0),oldDimensions.cropHeight!==newValues.height&&(isDifferent=!0),oldDimensions.cropWidth!==newValues.width&&(isDifferent=!0),isDifferent};let _t$n,_t2$m,_t3$i,_t4$e,_t5$c,_t6$b,_t7$b,_t8$a,_t9$a,_t10$9,_t11$6,_t12$3,_t13$2,_t14$1,_t15,_t16,_t17,_t18,_t19,_t20,_t21,_t22,_$n=t=>t;const CropLineStyle=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t$n||(_t$n=_$n`
  position: absolute;
  display: block;
  opacity: 0.1;
`)),TopLine=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$m||(_t2$m=_$n`
  ${0};
  cursor: n-resize;
  width: 100%;
  height: 5px;
  left: 0;
  top: -3px;
`),CropLineStyle),RightLine=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$i||(_t3$i=_$n`
  ${0};
  cursor: e-resize;
  right: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`),CropLineStyle),BottomLine=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$e||(_t4$e=_$n`
  ${0}
  cursor: s-resize;
  bottom: -3px;
  height: 5px;
  width: 100%;
  left: 0;
`),CropLineStyle),LeftLine=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$c||(_t5$c=_$n`
  ${0};
  cursor: w-resize;
  left: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`),CropLineStyle),resizeSquaresCss=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$b||(_t6$b=_$n`
  position: absolute;
  width: 10px;
  height: 10px;
  border: solid 1px hsl(0, 1%, 28%);
  background-color: hsl(0, 0%, 100%);
`)),PointN=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$b||(_t7$b=_$n`
  ${0};
  top: -5px;
  margin-left: -5px;
  left: 50%;
  ${0};
`),resizeSquaresCss,({isResizable:isResizable})=>isResizable&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$a||(_t8$a=_$n`
    cursor: n-resize;
  `))),PointNW=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t9$a||(_t9$a=_$n`
  ${0};
  top: -5px;
  left: -5px;
  ${0};
`),resizeSquaresCss,({isResizable:isResizable})=>isResizable&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$9||(_t10$9=_$n`
    cursor: nw-resize;
  `))),PointNE=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t11$6||(_t11$6=_$n`
  ${0};
  top: -5px;
  right: -5px;
  ${0};
`),resizeSquaresCss,({isResizable:isResizable})=>isResizable&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t12$3||(_t12$3=_$n`
    cursor: ne-resize;
  `))),PointE=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t13$2||(_t13$2=_$n`
  ${0};
    margin-top: -5px;
    top: 50%;
    right: -5px;
  ${0};
`),resizeSquaresCss,({isResizable:isResizable})=>isResizable&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t14$1||(_t14$1=_$n`
    cursor: e-resize;
  `))),PointSE=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t15||(_t15=_$n`
  ${0};
  bottom: -5px;
  right: -5px;
  ${0};
`),resizeSquaresCss,({isResizable:isResizable})=>isResizable&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t16||(_t16=_$n`
    cursor: se-resize;
  `))),PointS=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t17||(_t17=_$n`
  ${0};
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  ${0};
`),resizeSquaresCss,({isResizable:isResizable})=>isResizable&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t18||(_t18=_$n`
    cursor: s-resize;
  `))),PointSW=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t19||(_t19=_$n`
  ${0};
  bottom: -5px;
  left: -5px;
  ${0};
`),resizeSquaresCss,({isResizable:isResizable})=>isResizable&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t20||(_t20=_$n`
    cursor: sw-resize;
  `))),PointW=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t21||(_t21=_$n`
  ${0};
  margin-top: -5px;
  top: 50%;
  left: -5px;
  ${0};
`),resizeSquaresCss,({isResizable:isResizable})=>isResizable&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t22||(_t22=_$n`
    cursor: w-resize;
  `))),CropArea=({isResizable:isResizable,hasAspectRatio:hasAspectRatio})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,isResizable&&!hasAspectRatio?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopLine,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RightLine,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomLine,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeftLine,null)):null,hasAspectRatio?null:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PointN,Object.assign({"data-point":"cursor-n"},{isResizable:isResizable})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PointE,Object.assign({"data-point":"cursor-e"},{isResizable:isResizable})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PointS,Object.assign({"data-point":"cursor-s"},{isResizable:isResizable})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PointW,Object.assign({"data-point":"cursor-w"},{isResizable:isResizable}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PointNW,Object.assign({"data-point":"cursor-nw"},{isResizable:isResizable})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PointNE,Object.assign({"data-point":"cursor-ne"},{isResizable:isResizable})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PointSE,Object.assign({"data-point":"cursor-se"},{isResizable:isResizable})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PointSW,Object.assign({"data-point":"cursor-sw"},{isResizable:isResizable})));let _t$o,_t2$n,_t3$j,_t4$f,_t5$d,_t6$c,_t7$c,_t8$b,_t9$b,_$o=t=>t;const Container$d=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$o||(_t$o=_$o`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(202, 33%, 95%, 0.51);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  font-family: ${0};
  z-index: 999;
`),({theme:theme})=>theme.fontFamily.ui),InnerContainer$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$n||(_t2$n=_$o`
    position: relative;
  z-index: 99;
`)),ToolHeader=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$j||(_t3$j=_$o`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
`)),TextGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$f||(_t4$f=_$o`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: hsl(210, 6%, 47%);
  ${0} {
    display: flex;
    align-items: center;
    margin-right: 14px;
  }
`),IconWrapper),ButtonsGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$d||(_t5$d=_$o`
  button + button {
    margin-left: 10px;
  }
`)),PreviewArea=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$c||(_t6$c=_$o`
  position: relative;
  overflow: hidden;
  height: ${0};
  width: ${0};
  border-radius: 5px;
  background-color: hsla(202, 33%, 95%, 0.8);
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.8) 35px, rgba(255,255,255,.8) 70px);
`),({canvasHeight:canvasHeight})=>canvasHeight?canvasHeight+"px":"462px",({canvasWidth:canvasWidth})=>canvasWidth?canvasWidth+"px":"485px"),HiddenImage=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.img(_t7$c||(_t7$c=_$o`
  display: none;
`)),SelectedArea=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$b||(_t8$b=_$o`
  position: absolute;
  border: dashed 1px hsl(0, 0%, 24%);
  box-shadow: 0 0 0 9999em hsla(0, 0%, 32%, 0.75);
  ${0};
  cursor: move;
`),({cropLeft:cropLeft,cropTop:cropTop,cropWidth:cropWidth,cropHeight:cropHeight})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$b||(_t9$b=_$o`
    top: ${0}px;
    left: ${0}px;
    width: ${0}px;
    height: ${0}px;
  `),cropTop,cropLeft,cropWidth,cropHeight)),viewDimensions={cropLeft:0,cropTop:0,cropWidth:350,cropHeight:300,mouseStartX:0,mouseStartY:0,imgLeft:0,imgTop:0,imgWidth:400,imgHeight:400,cursorStart:"default",isResizing:!1},CropTool=({title:_title="Crop Image",cancelBtnTxt:_cancelBtnTxt="Cancel",cropBtnTxt:_cropBtnTxt="Crop & Save",isResizable:_isResizable=!0,cropHeight:_cropHeight=300,cropWidth:_cropWidth=350,canvasHeight:_canvasHeight=400,canvasWidth:_canvasWidth=450,aspectRatio:aspectRatio,imgUrl:imgUrl,onCrop:onCrop,onClose:_onClose=(()=>{}),onError:_onError=(()=>{})})=>{const[isLoading,setIsLoading]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[_loadDimensions,setLoadDimensions]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(viewDimensions),canvasRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),imgRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),cropRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),drawImgOnCanvas=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{if(!canvasRef||!imgRef)return;const newImage=imgRef.current;if(!newImage)return void _onError("error loading image");const canvas=canvasRef.current;if(!canvas)return void _onError("error loading canvas");const ctx=canvas.getContext("2d");if(!ctx)return void _onError("error drawing image");const newImgDraw=((img,canvasHeight,canvasWidth)=>{const scale=Math.min(canvasWidth/img.naturalWidth,canvasHeight/img.naturalHeight),width=Math.floor(img.naturalWidth*scale),height=Math.floor(img.naturalHeight*scale),top=0+Math.floor((canvasHeight-height)/2);return{left:0+Math.floor((canvasWidth-width)/2),top:top,width:width,height:height}})(newImage,_canvasHeight,_canvasWidth);null==ctx||ctx.drawImage(newImage,newImgDraw.left,newImgDraw.top,newImgDraw.width,newImgDraw.height);const newCrop=((cropWidth,cropHeight,canvasWidth,canvasHeight,imgWidth,imgHeight,aspectRatio)=>{let height,width;const aspect=aspectRatio||1,minWidth=Math.min(cropWidth,canvasWidth,imgWidth),minHeight=Math.min(cropHeight,canvasHeight,imgHeight);minWidth>minHeight*aspect?(width=Math.floor(minHeight*aspect),height=minHeight):(width=minWidth,height=Math.floor(minWidth/aspect));const top=0+Math.floor(canvasHeight/2-height/2);return{left:0+Math.floor(canvasWidth/2-width/2),top:top,width:width,height:height}})(_cropWidth,_cropHeight,_canvasWidth,_canvasHeight,newImgDraw.width,newImgDraw.height,aspectRatio);setLoadDimensions(prevState=>({...prevState,cropLeft:newCrop.left,cropTop:newCrop.top,cropWidth:newCrop.width,cropHeight:newCrop.height,imgLeft:newImgDraw.left,imgTop:newImgDraw.top,imgWidth:newImgDraw.width,imgHeight:newImgDraw.height})),viewDimensions.cropLeft=newCrop.left,viewDimensions.cropTop=newCrop.top,viewDimensions.cropWidth=newCrop.width,viewDimensions.cropHeight=newCrop.height,viewDimensions.imgLeft=newImgDraw.left,viewDimensions.imgTop=newImgDraw.top,viewDimensions.imgWidth=newImgDraw.width,viewDimensions.imgHeight=newImgDraw.height,viewDimensions.cursorStart="default",viewDimensions.isResizing=!1,setIsLoading(!1)},[aspectRatio,_canvasHeight,_canvasWidth,_cropHeight,_cropWidth,_onError]),handleCrop=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async cropArea=>{if(setIsLoading(!0),!canvasRef||!canvasRef.current||!imgRef)return;const newImage=imgRef.current;if(!newImage)return;const canvas=canvasRef.current;if(!canvas)return;const ctx=canvas.getContext("2d"),cropImageData=null==ctx?void 0:ctx.getImageData(cropArea.left,cropArea.top,cropArea.width,cropArea.height);if(!cropImageData)return;const canvasCropped=document.createElement("canvas"),cropContext=canvasCropped.getContext("2d");canvasCropped.width=cropArea.width,canvasCropped.height=cropArea.height,null==cropContext||cropContext.putImageData(cropImageData,0,0);const imgType=(img=>{const dataType=img.src.substr(0,20);return dataType.includes("data")?dataType.split("/")[1].split(";")[0]:"image/jpeg"})(newImage),newImgUrl=canvasCropped.toDataURL(imgType);onCrop&&onCrop(newImgUrl,imgType)},[onCrop]),handleMouseDown=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{var _cropRef$current;if(e.preventDefault(),e.stopPropagation(),!cropRef)return;if(!(e=>{let mouseButton;return mouseButton=void 0!==typeof e.buttons?e.buttons:void 0!==typeof e.button?e.button:e.which,1===mouseButton})(e))return;const rect=null===(_cropRef$current=cropRef.current)||void 0===_cropRef$current?void 0:_cropRef$current.getBoundingClientRect();if(!rect)return;const{left:left,top:top,width:width,height:height}=rect,[posX,posY]=[e.clientX,e.clientY];let newCursorStyle;newCursorStyle=_isResizable?((left,top,width,height,clientX,clientY)=>{let cursorStyle="default";return cursorStyle=clientY-top<5?width-(clientX-left)<5?"ne-resize":clientX-left<5?"nw-resize":"n-resize":height-(clientY-top)<5?width-(clientX-left)<5?"se-resize":clientX-left<5?"sw-resize":"s-resize":width-(clientX-left)<5?"e-resize":clientX-left<5?"w-resize":"move",cursorStyle})(left,top,width,height,posX,posY):"move",viewDimensions.mouseStartX=posX,viewDimensions.mouseStartY=posY,viewDimensions.cursorStart=newCursorStyle,viewDimensions.isResizing=!0},[_isResizable]),handleMouseUp=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),viewDimensions.isResizing&&(viewDimensions.isResizing=!1)},[]),updateSelect=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((left,top,width,height)=>{cropRef.current&&(cropRef.current.style.left=left+"px",cropRef.current.style.top=top+"px",cropRef.current.style.width=width+"px",cropRef.current.style.height=height+"px")},[]),handleMouseMove=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{var _cropRef$current2;if(e.preventDefault(),e.stopPropagation(),!cropRef)return;if(!viewDimensions.isResizing)return;if(!(null===(_cropRef$current2=cropRef.current)||void 0===_cropRef$current2?void 0:_cropRef$current2.getBoundingClientRect()))return;const[posX,posY]=[e.clientX,e.clientY],newDimensions=aspectRatio?((oldSelection,newX,newY,aspectRatio)=>{const aspect=aspectRatio||1;let[updatedLeft,updatedTop,updatedWidth,updatedHeight]=[oldSelection.cropLeft,oldSelection.cropTop,oldSelection.cropWidth,oldSelection.cropHeight];const diffX=newX-oldSelection.mouseStartX,diffY=newY-oldSelection.mouseStartY;switch(oldSelection.cursorStart){case"ne-resize":updatedTop=oldSelection.cropTop+diffY,updatedHeight=oldSelection.cropHeight-diffY,updatedWidth=Math.floor(updatedHeight*aspect);break;case"nw-resize":updatedTop=oldSelection.cropTop+diffY,updatedLeft=oldSelection.cropLeft+diffY*aspect,updatedHeight=oldSelection.cropHeight-diffY,updatedWidth=Math.floor(updatedHeight*aspect);break;case"se-resize":updatedHeight=oldSelection.cropHeight+diffY,updatedWidth=Math.floor(updatedHeight*aspect);break;case"sw-resize":updatedLeft=oldSelection.cropLeft+diffX,updatedWidth=oldSelection.cropWidth-diffX,updatedHeight=Math.floor(updatedWidth/aspect);break;case"move":updatedTop=oldSelection.cropTop+diffY,updatedLeft=oldSelection.cropLeft+diffX}const imgBoundLeft=clamp(updatedLeft,oldSelection.imgLeft,oldSelection.imgWidth-oldSelection.cropWidth+oldSelection.imgLeft),imgBoundTop=clamp(updatedTop,oldSelection.imgTop,oldSelection.imgHeight-oldSelection.cropHeight+oldSelection.imgTop),imgBoundWidth=clamp(updatedWidth,0,oldSelection.imgWidth),imgBoundHeight=clamp(updatedHeight,0,oldSelection.imgHeight);let left=imgBoundLeft,top=imgBoundTop,width=imgBoundWidth,height=imgBoundHeight;"move"!==oldSelection.cursorStart&&imgBoundWidth===oldSelection.imgWidth&&(height=oldSelection.cropHeight,top=oldSelection.cropTop),"move"!==oldSelection.cursorStart&&imgBoundHeight===oldSelection.imgHeight&&(width=oldSelection.cropWidth,left=oldSelection.cropLeft);return{left:left,top:top,width:width,height:height,isUpdateRequired:areDimensionsDiff(oldSelection,{left:left,top:top,height:height,width:width})}})(viewDimensions,posX,posY,aspectRatio):((oldSelection,newX,newY)=>{let[updatedLeft,updatedTop,updatedWidth,updatedHeight]=[oldSelection.cropLeft,oldSelection.cropTop,oldSelection.cropWidth,oldSelection.cropHeight];const diffX=newX-oldSelection.mouseStartX,diffY=newY-oldSelection.mouseStartY;switch(oldSelection.cursorStart){case"ne-resize":updatedTop=oldSelection.cropTop+diffY,updatedHeight=oldSelection.cropHeight-diffY,updatedWidth=oldSelection.cropWidth+diffX;break;case"nw-resize":updatedTop=oldSelection.cropTop+diffY,updatedLeft=oldSelection.cropLeft+diffX,updatedHeight=oldSelection.cropHeight-diffY,updatedWidth=oldSelection.cropWidth-diffX;break;case"n-resize":updatedTop=oldSelection.cropTop+diffY,updatedHeight=oldSelection.cropHeight-diffY;break;case"se-resize":updatedHeight=oldSelection.cropHeight+diffY,updatedWidth=oldSelection.cropWidth+diffX;break;case"sw-resize":updatedLeft=oldSelection.cropLeft+diffX,updatedHeight=oldSelection.cropHeight+diffY,updatedWidth=oldSelection.cropWidth-diffX;break;case"s-resize":updatedHeight=oldSelection.cropHeight+diffY;break;case"e-resize":updatedWidth=oldSelection.cropWidth+diffX;break;case"w-resize":updatedLeft=oldSelection.cropLeft+diffX,updatedWidth=oldSelection.cropWidth-diffX;break;case"move":updatedTop=oldSelection.cropTop+diffY,updatedLeft=oldSelection.cropLeft+diffX}const width=clamp(updatedWidth,0,oldSelection.imgWidth),height=clamp(updatedHeight,0,oldSelection.imgHeight),left=clamp(updatedLeft,oldSelection.imgLeft,oldSelection.imgWidth-oldSelection.cropWidth+oldSelection.imgLeft),top=clamp(updatedTop,oldSelection.imgTop,oldSelection.imgHeight-oldSelection.cropHeight+oldSelection.imgTop);return{left:left,top:top,width:width,height:height,isUpdateRequired:areDimensionsDiff(oldSelection,{left:left,top:top,height:height,width:width})}})(viewDimensions,posX,posY);newDimensions.isUpdateRequired&&(viewDimensions.cropTop=newDimensions.top,viewDimensions.cropLeft=newDimensions.left,viewDimensions.cropWidth=newDimensions.width,viewDimensions.cropHeight=newDimensions.height,viewDimensions.mouseStartX=posX,viewDimensions.mouseStartY=posY,updateSelect(viewDimensions.cropLeft,viewDimensions.cropTop,viewDimensions.cropWidth,viewDimensions.cropHeight))},[aspectRatio,updateSelect]),handleOnMouseLeave=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),viewDimensions.isResizing&&(viewDimensions.isResizing=!1)},[]);return react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$d,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerContainer$2,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToolHeader,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextGroup,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Crop",size:20,color:"dimmed"}),_title),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonsGroup,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button,{design:"secondary",size:"small",onClick:_onClose},_cancelBtnTxt),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWithLoading,{loading:isLoading,size:"small",onClick:()=>handleCrop({left:viewDimensions.cropLeft,top:viewDimensions.cropTop,width:viewDimensions.cropWidth,height:viewDimensions.cropHeight})}," ",_cropBtnTxt))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PreviewArea,{canvasHeight:_canvasHeight,canvasWidth:_canvasWidth,onMouseUp:handleMouseUp,onMouseMove:handleMouseMove,onMouseLeave:handleOnMouseLeave},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HiddenImage,{ref:imgRef,src:imgUrl,onLoad:drawImgOnCanvas,crossOrigin:"anonymous"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas",{ref:canvasRef,width:_canvasWidth+"px",height:_canvasHeight+"px"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectedArea,Object.assign({ref:cropRef,onMouseDown:handleMouseDown},{cropLeft:viewDimensions.cropLeft,cropTop:viewDimensions.cropTop,cropWidth:viewDimensions.cropWidth,cropHeight:viewDimensions.cropHeight,isResizing:viewDimensions.isResizing}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CropArea,Object.assign({},{isResizable:_isResizable},{hasAspectRatio:!!aspectRatio})))))),document.body)};let _t$p,_t2$o,_t3$k,_t4$g,_t5$e,_t6$d,_t7$d,_t8$c,_t9$c,_$p=t=>t;const ratio=Math.round(95)/100,Container$e=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$p||(_t$p=_$p`
  position: relative;
  width: ${0};
  ${0}
  button {
    width: 100%;
  }
`),"142px",({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$o||(_t2$o=_$p`
    font-family: ${0};
  `),theme.fontFamily.ui)),PreviewImageGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$k||(_t3$k=_$p`
  position: relative;
  margin-bottom: 17px;
  height: ${0};
  width: ${0};
`),"150px","142px"),PhotoContainerStyle=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$g||(_t4$g=_$p`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: hsl(0, 0%, 90%);
`)),PreviewImage=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.img(_t5$e||(_t5$e=_$p`
  ${0}
  object-fit: cover;
`),PhotoContainerStyle),PlaceholderText=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$d||(_t6$d=_$p`
  color: hsl(207, 5%, 57%);
  font-size: 14px;
`)),NoPhoto=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$d||(_t7$d=_$p`
  ${0}
  padding-top: 15px;
  ${0} {
    margin-top: 18px;
  }
`),PhotoContainerStyle,PlaceholderText),StyledInputFileButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(InputFileButton)(_t8$c||(_t8$c=_$p`
  width: 100%;
`)),ButtonsWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t9$c||(_t9$c=_$p`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 10px;
  }

`)),AvatarUploader=({title:_title="Photograph",photoText:_photoText="Drop Photo",buttonText:_buttonText="Select File",buttonTextReplace:_buttonTextReplace="Replace Photo",uploaderCropText:_uploaderCropText="Crop Image",deletePhotoText:_deletePhotoText="Remove",cropToolTitle:cropToolTitle,cropToolCancelTxt:cropToolCancelTxt,cropToolConfirmTxt:cropToolConfirmTxt,currentImg:currentImg,hasCrop:_hasCrop=!0,onAvatarUpdate:_onAvatarUpdate=(()=>{}),onError:_onError=(()=>{}),onRemove:_onRemove=(()=>{})})=>{const[avatarImg,setAvatarImg]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentImg),[cropImg,setCropImg]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[isCropOpen,setIsCropOpen]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),handleCrop=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async(newFileUrl,fileType)=>{setAvatarImg(newFileUrl);let newFile=await fetch(newFileUrl).then(r=>r.blob()).then(blobFile=>new File([blobFile],"newAvatar",{type:fileType}));_onAvatarUpdate(newFile),setIsCropOpen(!1)},[_onAvatarUpdate]),handleCropClose=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setIsCropOpen(!1),setCropImg(""),URL.revokeObjectURL(cropImg)},[cropImg]),handleFileUpload=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newFiles=>{if(1===newFiles.length){if(!(file=newFiles[0])||!["image/jpeg","image/png"].includes(file.type))return void _onError("Please upload only jpeg and png file");const prevImg=URL.createObjectURL(newFiles[0]);_hasCrop?(setCropImg(prevImg),setIsCropOpen(!0)):(_onAvatarUpdate(newFiles[0]),setAvatarImg(prevImg))}else _onError("Drop only one file");var file},[_hasCrop,_onError,_onAvatarUpdate]),handleEdit=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(fileUrl=>{setCropImg(fileUrl),setIsCropOpen(!0)},[]);Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>(setAvatarImg(currentImg),()=>{setAvatarImg("")}),[currentImg]);const handleRemove=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setAvatarImg(""),_onRemove()},[_onRemove]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$e,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label,{labelText:_title,htmlFor:"avatar-upload"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PreviewImageGroup,null,avatarImg?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PreviewImage,{src:avatarImg,alt:"avatar image",crossOrigin:"anonymous"}):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NoPhoto,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgAvatarPlaceholder,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlaceholderText,null,_photoText)),(currentImg&&!_hasCrop||!currentImg)&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropArea,{height:"150px",dropCallback:handleFileUpload})),avatarImg?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonsWrapper,null,_hasCrop?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWithIcon,{icon:"Crop",design:"secondary",position:"left",size:"small",onClick:()=>handleEdit(avatarImg)},_uploaderCropText):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInputFileButton,{id:"avatar-upload",text:_buttonTextReplace,buttonSize:"small",buttonDesign:"secondary",accept:"image/*",inputCallback:handleFileUpload}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWithIcon,{icon:"Delete",design:"secondary",position:"left",size:"small",onClick:handleRemove},_deletePhotoText)):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInputFileButton,{id:"avatar-upload",text:_buttonText,buttonSize:"small",accept:"image/*",inputCallback:handleFileUpload}),isCropOpen&&_hasCrop?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CropTool,{imgUrl:cropImg,onCrop:handleCrop,onClose:handleCropClose,onError:_onError,canvasHeight:490,canvasWidth:460,cropHeight:475,cropWidth:500,aspectRatio:ratio,title:cropToolTitle,cancelBtnTxt:cropToolCancelTxt,cropBtnTxt:cropToolConfirmTxt,isResizable:!0}):null)};let _t$q,_t2$p,_t3$l,_$q=t=>t;const Container$f=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$q||(_t$q=_$q`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  ${0} {
    display: flex;
    align-items: center;
  }
`),IconWrapper),PlusIcon=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(Icon)(_t2$p||(_t2$p=_$q``)),PlusIconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$l||(_t3$l=_$q`
  margin: 0 30px;
  ${0}{
    transform: rotate(45deg);
    [stroke]{
      stroke: hsl(205, 22%, 66%);
    }
  }
`),IconWrapper),BigIconsSummary=({icons:icons,color:_color="dimmed",size:_size=72,weight:_weight="light",...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$f,Object.assign({},props),icons.map((icon,index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{key:`type-upload-${icon}}`},0!==index&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlusIconWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlusIcon,{icon:"CloseCompact",size:22})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,Object.assign({icon:icon},{color:_color,size:_size,weight:_weight})))));let _t$r,_t2$q,_t3$m,_t4$h,_t5$f,_t6$e,_$r=t=>t;const Container$g=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$r||(_t$r=_$r`
  font-family: ${0};
`),({theme:theme})=>theme.fontFamily.ui),StyledDropArea=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(DropArea)(_t2$q||(_t2$q=_$r`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`)),InputButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$m||(_t3$m=_$r`
  z-index: 99;
  margin-top: 20px;
`)),FilesUploadGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$h||(_t4$h=_$r`
  padding: ${0};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: hsl(204, 15%, 94%);
  position: relative;
`),({hasFiles:hasFiles})=>hasFiles?"26px 0 20px 0":"65px 0 42px 0"),Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$f||(_t5$f=_$r`
  color: hsl(208, 8%, 38%);
  font-size: 20px;
`)),Description=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$e||(_t6$e=_$r`
  font-size: 14px;
  line-height: 2.14;
  text-align: center;
  color: hsl(207, 5%, 57%);
  margin-top: 10px;
  max-width: 386px;
`)),AreaUploadManager=({title:_title="Select Files",description:description,fileIcons:fileIcons,selectFilesText:_selectFilesText="Select Files",addMoreFilesText:_addMoreFilesText="Add More Files",allowedFileTypes:allowedFileTypes,customComponent:customComponent,onChangeCallback:_onChangeCallback=(()=>{})})=>{const[files,setFiles]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),handleFiles=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newFiles=>{if(console.log("files received",newFiles),null===newFiles)return;const{goodFiles:goodFiles,rejectedFiles:rejectedFiles}=((newFiles,files,allowedFileTypes)=>{const newFilesTransfer=new DataTransfer,rejectedFilesTransfer=new DataTransfer;for(let index=0;index<newFiles.length;index++){void 0===allowedFileTypes||0===allowedFileTypes.length||allowedFileTypes.includes(newFiles[index].type)?newFilesTransfer.items.add(newFiles[index]):rejectedFilesTransfer.items.add(newFiles[index])}if(null===files){return{goodFiles:newFilesTransfer.files,rejectedFiles:rejectedFilesTransfer.files}}const updatedFilesTransfer=new DataTransfer,fileNamesSet=new Set;for(let index=0;index<files.length;index++){updatedFilesTransfer.items.add(files[index]);const name=files[index].name;fileNamesSet.add(name)}for(let index=0;index<newFilesTransfer.files.length;index++){const isAlready=fileNamesSet.has(newFilesTransfer.files[index].name),isCorrectType=void 0===allowedFileTypes||0===allowedFileTypes.length||allowedFileTypes.includes(newFiles[index].type);isAlready||!isCorrectType?rejectedFilesTransfer.items.add(newFiles[index]):updatedFilesTransfer.items.add(newFilesTransfer.files[index])}return{goodFiles:updatedFilesTransfer.files,rejectedFiles:rejectedFilesTransfer.files}})(newFiles,files,allowedFileTypes);setFiles(goodFiles),_onChangeCallback(goodFiles,rejectedFiles)},[files,allowedFileTypes,_onChangeCallback]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$g,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilesUploadGroup,{hasFiles:null!==files},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDropArea,{dropCallback:handleFiles}),customComponent||react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,fileIcons&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BigIconsSummary,{icons:fileIcons}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title,null,_title),null===files&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Description,null,description)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputButtonWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputFileButton,{buttonSize:"small",text:null!==files?_addMoreFilesText:_selectFilesText,inputCallback:handleFiles,multiple:!0,buttonDesign:null!==files?"secondary":"primary"}))))};let _t$s,_t2$r,_$s=t=>t;const FormContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.form(_t$s||(_t$s=_$s`
  ${0}
`),({spacing:spacing})=>spacing&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$r||(_t2$r=_$s`
      & >  ${0} {
        margin-bottom: ${0};
      }
  `),StyledLabel,spacing)),Form=({children:children,spacing:_spacing="45px;",...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormContainer,Object.assign({spacing:_spacing},props),children);let _t$t,_t2$s,_t3$n,_t4$i,_t5$g,_t6$f,_t7$e,_t8$d,_t9$d,_t10$a,_t11$7,_$t=t=>t;const Container$h=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$t||(_t$t=_$t`
  display: flex;
  flex-direction: column;

  ${0}
`),({hide:hide})=>hide&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$s||(_t2$s=_$t`
    display: none;
  `))),Label$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.label(_t3$n||(_t3$n=_$t`
  ${0}
  padding: 12px;
  border-bottom: ${0} 1px solid;

  // ${0};

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$i||(_t4$i=_$t`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,({theme:theme})=>theme.typography.filters.datepicker.metaHeader.default),({theme:theme})=>theme.colors.divider,({theme:theme})=>theme.typography.filters.datepicker.metaHeader.active),Item=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$g||(_t5$g=_$t`
  padding: 12px;
  display: flex;
  justify-content: left;
`)),IconWrap=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$f||(_t6$f=_$t`
  flex: 0 0 40px;
  padding-top: 2px;
`)),Input$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t7$e||(_t7$e=_$t`
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
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$d||(_t8$d=_$t`
    font-family: ${0};
  `),theme.fontFamily.data),({theme:theme})=>theme.typography.filters.value,({readOnly:readOnly})=>readOnly&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$d||(_t9$d=_$t`
    border-color: transparent;
  `))),TimeColon=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10$a||(_t10$a=_$t`
  flex: 0 0 20px;
`)),InputWrap=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t11$7||(_t11$7=_$t`
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
`),({theme:theme})=>theme.colors.menu.passive,({theme:theme})=>theme.colors.menu.passive,Input$1,({theme:theme})=>theme.colors.divider,TimeColon,({theme:theme})=>theme.colors.pureTop),DateTimeBlock=({allowAfterMidnight:_allowAfterMidnight=!1,title:title,hasDate:hasDate,hasTime:hasTime,date:_date=new Date,setDateCallback:_setDateCallback=(()=>{})})=>{const[displayHours,setDisplayHours]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(_date,"mm")),[displayMinutes,setDisplayMinutes]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(_date,"HH")),setDateHours=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({target:{value:value}})=>{_setDateCallback(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__.a)([Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(_date),Object(date_fns__WEBPACK_IMPORTED_MODULE_8__.a)(_date,{hours:Number(value),minutes:Number(displayMinutes),seconds:0,milliseconds:0})]))},[_date,displayMinutes,_setDateCallback]),setDateMinutes=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({target:{value:value}})=>{_setDateCallback(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__.a)([Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(_date),Object(date_fns__WEBPACK_IMPORTED_MODULE_8__.a)(_date,{hours:"24"===displayHours?23:Number(displayHours),minutes:Number(value)%60,seconds:0,milliseconds:0})]))},[_date,displayHours,_setDateCallback]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{_allowAfterMidnight&&Object(date_fns__WEBPACK_IMPORTED_MODULE_9__.a)(_date,Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(_date))?(setDisplayHours("24"),setDisplayMinutes("00")):(setDisplayMinutes(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(_date,"mm")),setDisplayHours(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(_date,"HH")))},[_date,_allowAfterMidnight]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$h,{hide:!hasDate&&!hasTime},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label$1,null,title),hasDate&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrap,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Date",color:"dimmed",size:14,weight:"light"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrap,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input$1,{type:"text",readOnly:!0,value:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(_date,"yyyy/MM/dd")}))),hasTime&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrap,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Time",color:"dimmed",size:14,weight:"light"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrap,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input$1,{name:"hours",type:"number",min:"0",max:_allowAfterMidnight?24:23,value:displayHours,onChange:setDateHours}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeColon,null,":"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input$1,{name:"minutes",type:"number",min:"0",max:"59",value:displayMinutes,onChange:setDateMinutes}))))};let _t$u,_t2$t,_t3$o,_t4$j,_t5$h,_t6$g,_t7$f,_t8$e,_t9$e,_t10$b,_t11$8,_t12$4,_t13$3,_t14$2,_t15$1,_t16$1,_t17$1,_t18$1,_t19$1,_t20$1,_t21$1,_t22$1,_t23,_t24,_t25,_t26,_t27,_$u=t=>t;const initializeInterval=day=>({start:Object(date_fns__WEBPACK_IMPORTED_MODULE_8__.a)(day,{seconds:0,milliseconds:0}),end:Object(date_fns__WEBPACK_IMPORTED_MODULE_7__.a)(day)}),TODAY=new Date,TODAY_INTERVAL=initializeInterval(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__.a)(new Date)),Container$i=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$u||(_t$u=_$u`
  display: flex;
`)),DateTimeArea=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$t||(_t2$t=_$u`
  border-right: ${0} 1px solid;
  width: 170px;
  display: flex;
  flex-direction: column;
`),({theme:theme})=>theme.colors.divider),TimeZoneOption=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$o||(_t3$o=_$u`
  border-top: ${0} 1px solid;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`),({theme:theme})=>theme.colors.divider),TimeZoneLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$j||(_t4$j=_$u`
  ${0}

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$h||(_t5$h=_$u`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.filters.subOption.label)),TimeZoneValue=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$g||(_t6$g=_$u`
  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$f||(_t7$f=_$u`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.data,theme.typography.filters.subOption.value)),CalendarArea=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$e||(_t8$e=_$u`
  user-select: none;
`)),CalendarHeader=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t9$e||(_t9$e=_$u`
  display: flex;
  height: 70px;
  border-bottom: ${0} 1px solid;
  text-align: center;
`),({theme:theme})=>theme.colors.divider),CurrentMonth=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10$b||(_t10$b=_$u`
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
`),({theme:theme})=>theme.typography.filters.datepicker.focusedMonth,({theme:theme})=>theme.typography.filters.datepicker.focusedYear),IconWrap$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t11$8||(_t11$8=_$u``)),PaginateMonth=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t12$4||(_t12$4=_$u`
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

`),({theme:theme})=>theme.typography.filters.datepicker.monthLink.default,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t13$3||(_t13$3=_$u`
      background: ${0};
      ${0}
    `),theme.colors.menu.active,theme.typography.filters.datepicker.monthLink.hover),IconWrap$1,({theme:theme})=>theme.colors.pureBase),CalBody=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t14$2||(_t14$2=_$u`
  padding: 5px 0;
`)),CalRow=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t15$1||(_t15$1=_$u`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  height: 40px;
  box-sizing: border-box;

  padding: 0 10px;
`)),CalHRow=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(CalRow)(_t16$1||(_t16$1=_$u`
  border-bottom: ${0} 1px solid;
`),({theme:theme})=>theme.colors.divider),CalCell=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t17$1||(_t17$1=_$u`

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  ${0};

  ${0}

`),({theme:theme})=>theme.typography.filters.datepicker.calendar.default,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t18$1||(_t18$1=_$u`
    font-family: ${0};
  `),theme.fontFamily.data)),CalHCell=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(CalCell)(_t19$1||(_t19$1=_$u`
  ${0};
`),({theme:theme})=>theme.typography.filters.datepicker.calendar.header),CalCellB=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(CalCell)(_t20$1||(_t20$1=_$u`
  cursor: pointer;
  position: relative;

  ${0}

  ${0}

  ${0}

  ${0}

  ${0}

  ${0}

  ${0}

`),({thisMonth:thisMonth})=>!thisMonth&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t21$1||(_t21$1=_$u`
    ${0};
  `),({theme:theme})=>theme.typography.filters.datepicker.calendar.otherMonth),({isToday:isToday})=>isToday&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t22$1||(_t22$1=_$u`
    border: 2px solid ${0};
  `),({theme:theme})=>theme.colors.menu.passive),({state:state,theme:theme})=>("single"===state||"start"===state||"end"===state)&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t23||(_t23=_$u`
    background: ${0};
    ${0};
  `),theme.colors.menu.active,theme.typography.filters.datepicker.calendar.active),({state:state})=>"start"===state&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t24||(_t24=_$u`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `)),({state:state})=>"end"===state&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t25||(_t25=_$u`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `)),({state:state})=>"insideHover"===state&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t26||(_t26=_$u`
    background: ${0} !important;
  `),({theme:theme})=>theme.colors.divider),({state:state})=>"inside"===state&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t27||(_t27=_$u`
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
  `),({theme:theme})=>theme.colors.menu.passive,({theme:theme})=>theme.colors.menu.passive)),enDayGuide=["S","M","T","W","T","F","S"],jpDayGuide=["日","月","火","水","木","金","土"],isDateInterval=value=>null!=value&&(null!==value.start&&void 0!==value.start&&(null!==value.end&&void 0!==value.end&&(value.start instanceof Date&&value.end instanceof Date))),DatePicker=({dateMode:_dateMode="interval",timeMode:_timeMode="interval",dateTimeTextUpper:_dateTimeTextUpper="From",dateTimeTextLower:_dateTimeTextLower="To",timeZoneTitle:_timeZoneTitle="Timezone",timeZoneValueTitle:_timeZoneValueTitle="JST",hasEmptyValue:_hasEmptyValue=!1,updateCallback:_updateCallback=(()=>{}),initialValue:initialValue,lang:_lang="en"})=>{const[selectedRange,setSelectedRange]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(getInitialValue(_hasEmptyValue,initialValue)),[focusedMonth,setFocusedMonth]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(null===selectedRange?TODAY:selectedRange.start),[targetedDate,setTargetedDate]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("start"),[weeksOfMonth,setWeeksOfMonth]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),isInitialMount=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0),dayGuide="ja"===_lang?jpDayGuide:enDayGuide;Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(isInitialMount.current)isInitialMount.current=!1;else{const now=new Date;setSelectedRange(initializeInterval(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__.a)(now))),setFocusedMonth(now)}},[_dateMode,_timeMode]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setWeeksOfMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_11__.a)({start:Object(date_fns__WEBPACK_IMPORTED_MODULE_12__.a)(focusedMonth),end:Object(date_fns__WEBPACK_IMPORTED_MODULE_13__.a)(focusedMonth)}))},[focusedMonth]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{null!==selectedRange&&_updateCallback("interval"===_dateMode||"interval"===_timeMode?selectedRange:selectedRange.start)},[_dateMode,selectedRange,_timeMode,_updateCallback]);const onCellClick=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(day=>{const validRange=selectedRange||TODAY_INTERVAL;if("single"===_dateMode){const start=updateDay(validRange.start,day),end=updateDay(validRange.end,day);setSelectedRange({start:start,end:end})}else if("end"===targetedDate&&Object(date_fns__WEBPACK_IMPORTED_MODULE_14__.a)(day,validRange.start)){const end=updateDay(validRange.end,day);setSelectedRange({...validRange,end:end}),setTargetedDate("done")}else if("start"===targetedDate||"end"===targetedDate||"done"===targetedDate){const start=updateDay(validRange.start,day),end=updateDay(validRange.end,day);setSelectedRange({start:start,end:end}),setTargetedDate("end")}},[_dateMode,selectedRange,targetedDate]),updateStartDate=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(start=>{const{end:end}=selectedRange||TODAY_INTERVAL;Object(date_fns__WEBPACK_IMPORTED_MODULE_14__.a)(Object(date_fns__WEBPACK_IMPORTED_MODULE_15__.a)(start,{minutes:1}),end)||setSelectedRange({start:start,end:end})},[selectedRange]),updateEndDate=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(end=>{const{start:start}=selectedRange||TODAY_INTERVAL;Object(date_fns__WEBPACK_IMPORTED_MODULE_14__.a)(Object(date_fns__WEBPACK_IMPORTED_MODULE_15__.a)(start,{minutes:1}),end)||setSelectedRange({start:start,end:end})},[selectedRange]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$i,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateTimeArea,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateTimeBlock,{title:_dateTimeTextUpper,hasDate:!0,hasTime:"off"!==_timeMode,date:selectedRange?selectedRange.start:TODAY_INTERVAL.start,setDateCallback:updateStartDate}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateTimeBlock,{title:_dateTimeTextLower,hasDate:"interval"===_dateMode,hasTime:"interval"===_timeMode,date:selectedRange?selectedRange.end:TODAY_INTERVAL.end,allowAfterMidnight:!0,setDateCallback:updateEndDate}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeZoneOption,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeZoneLabel,null,_timeZoneTitle),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeZoneValue,null,_timeZoneValueTitle))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalendarArea,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalendarHeader,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateMonth,{type:"button",onClick:()=>setFocusedMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_16__.a)(focusedMonth,-1))},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrap$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Left",color:"dimmed",size:10})),Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(Object(date_fns__WEBPACK_IMPORTED_MODULE_16__.a)(focusedMonth,-1),"MMM",{locale:"ja"===_lang?date_fns_locale__WEBPACK_IMPORTED_MODULE_24__.a:date_fns_locale__WEBPACK_IMPORTED_MODULE_25__.a})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CurrentMonth,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(focusedMonth,"yyyy")),Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(focusedMonth,"MMMM",{locale:"ja"===_lang?date_fns_locale__WEBPACK_IMPORTED_MODULE_24__.a:date_fns_locale__WEBPACK_IMPORTED_MODULE_25__.a})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateMonth,{type:"button",onClick:()=>setFocusedMonth(Object(date_fns__WEBPACK_IMPORTED_MODULE_16__.a)(focusedMonth,1))},Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(Object(date_fns__WEBPACK_IMPORTED_MODULE_16__.a)(focusedMonth,1),"MMM",{locale:"ja"===_lang?date_fns_locale__WEBPACK_IMPORTED_MODULE_24__.a:date_fns_locale__WEBPACK_IMPORTED_MODULE_25__.a}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrap$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Right",color:"dimmed",size:10})))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalHRow,null,dayGuide.map((day,index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalHCell,{key:index},day))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalBody,null,weeksOfMonth.map((week,index)=>{const days=Object(date_fns__WEBPACK_IMPORTED_MODULE_17__.a)({start:week,end:Object(date_fns__WEBPACK_IMPORTED_MODULE_18__.a)(week)});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalRow,{key:index},days.map((day,index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalCellB,{key:index,onClick:()=>onCellClick(day),state:cellState(day,selectedRange),thisMonth:Object(date_fns__WEBPACK_IMPORTED_MODULE_19__.a)(day,focusedMonth),isToday:Object(date_fns__WEBPACK_IMPORTED_MODULE_20__.a)(day)},Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(day,"d"))))}))))},cellState=(day,interval,_hoverDate)=>{let state="off",isInsideInterval=!1;if(null===interval)return state;const singleDayRange=0===Object(date_fns__WEBPACK_IMPORTED_MODULE_21__.a)(interval).days;try{isInsideInterval=Object(date_fns__WEBPACK_IMPORTED_MODULE_22__.a)(day,interval)}catch(error){isInsideInterval=!1,console.log("wrong interval in datepicker",error)}return(isInsideInterval||Object(date_fns__WEBPACK_IMPORTED_MODULE_23__.a)(interval.start,day))&&(state=singleDayRange?"single":Object(date_fns__WEBPACK_IMPORTED_MODULE_23__.a)(interval.start,day)?"start":Object(date_fns__WEBPACK_IMPORTED_MODULE_23__.a)(interval.end,day)?"end":"inside"),state},updateDay=(date,target)=>Object(date_fns__WEBPACK_IMPORTED_MODULE_8__.a)(target,{hours:date.getHours(),minutes:date.getMinutes(),seconds:date.getSeconds(),milliseconds:date.getMilliseconds()}),getInitialValue=(hasEmptyValue,initialValue)=>{if(hasEmptyValue&&void 0===initialValue)return null;const validInitial=initialValue||initializeInterval(Object(date_fns__WEBPACK_IMPORTED_MODULE_10__.a)(new Date));return validInitial instanceof Date?initializeInterval(validInitial):validInitial};let _t$v,_t2$u,_$v=t=>t;const Container$j=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$v||(_t$v=_$v`

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

`),({theme:theme})=>theme.styles.filters.dropdownContainer.background,({theme:theme})=>theme.styles.filters.dropdownContainer.topBorder),Inner=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$u||(_t2$u=_$v`
  display: inline-flex;
  flex-direction: row;
`)),FilterDropdownContainer=({children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$j,Object.assign({},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inner,null,children));let _t$w,_t2$v,_t3$p,_t4$k,_t5$i,_t6$h,_t7$g,_$w=t=>t;const FlipWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$w||(_t$w=_$w`
  ${0};
`),({isSortAscending:isSortAscending})=>isSortAscending&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$v||(_t2$v=_$w`
      transform: scaleY(-1);
  `))),StyledButton$3=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t3$p||(_t3$p=_$w`
  ${0};
  background-color: hsl(200, 23%, 97%);
  border-radius: 3px;
  border: solid 1px hsl(207, 16%, 86%);
  box-shadow: 0 4px 9px 0 hsla(204, 22%, 67%, 0.07);
  color: hsl(0, 0%, 50%);
  height: 30px;
  font-size: 12px;

  ${0};

  ${0};
`),resetButtonStyles,({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$k||(_t4$k=_$w`
    font-family: ${0};
    transition: opacity ${0} ${0};

    ${0} {
      padding: 0 9px;
      display: flex;
      align-items: center;
      [stroke]{
        stroke: ${0};
      }
    }

    &:hover:enabled, &:active:enabled {
      background-color: hsl(205, 100%, 72%);
      border: solid 1px hsl(205, 100%, 72%);
      color: ${0};

      ${0} {
        [stroke]{
          stroke: ${0};
        }
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 50%;
    }
`),theme.fontFamily.ui,theme.animation.speed.normal,theme.animation.easing.primary.easeOut,IconWrapper,theme.colors.icons.dimmed,theme.colors.icons.inverse,IconWrapper,theme.colors.icons.inverse),({theme:theme,isOpen:isOpen,hasFlipArrow:hasFlipArrow})=>isOpen&&hasFlipArrow&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$i||(_t5$i=_$w`
    background-color: hsl(205, 100%, 72%);
    border: solid 1px hsl(205, 100%, 72%);
    color: ${0};

    ${0} {
      [stroke]{
        stroke: ${0};
      }
    }
  `),theme.colors.icons.inverse,IconWrapper,theme.colors.icons.inverse)),InnerContainer$3=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$h||(_t6$h=_$w`
    display: flex;
    align-items: center;
`)),ButtonText=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$g||(_t7$g=_$w`
  padding-right: ${0};
`),({hasFlipArrow:hasFlipArrow})=>hasFlipArrow?"3px":"20px"),FilterButton=({icon:icon,hasFlipArrow:_hasFlipArrow=!1,isSortAscending:_isSortAscending=!1,isOpen:isOpen,children:children,...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton$3,Object.assign({type:"button"},props,{isOpen:isOpen,hasFlipArrow:_hasFlipArrow}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerContainer$3,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FlipWrapper,Object.assign({},{isSortAscending:_isSortAscending}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:icon,size:12,weight:"light"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonText,Object.assign({},{hasFlipArrow:_hasFlipArrow}),children),_hasFlipArrow&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:isOpen?"Up":"Down",size:8})));let _t$x,_t2$w,_t3$q,_t4$l,_t5$j,_t6$i,_t7$h,_t8$f,_t9$f,_t10$c,_$x=t=>t;const Title$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$x||(_t$x=_$x`
  font-family: ${0};
  display: block;
  color: hsl(0, 0%, 56%);
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
  user-select: none;
  pointer-events: none;
`),({theme:theme})=>theme.fontFamily.data),FakeCheckbox=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$w||(_t2$w=_$x`
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
`)),FakeCheckboxInner=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$q||(_t3$q=_$x`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`)),CheckMarkWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$l||(_t4$l=_$x`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    [stroke]{
      stroke: transparent;
    }
    [fill] {
      fill: ${0};
    }
  }
`),({theme:theme})=>theme.colors.icons.inverse),FakeRadioButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$j||(_t5$j=_$x`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
`)),FakeInnerRadio=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$i||(_t6$i=_$x`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`)),Container$k=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$h||(_t7$h=_$x`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  ${0};
`),({theme:{styles:styles},selected:selected,disabled:disabled})=>styles&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$f||(_t8$f=_$x`
    ${0}, ${0} {
      ${0};
    }

    &:hover {
      cursor: pointer;
      ${0} {
        color: ${0};
      }

      ${0} {
        ${0};
      }

      ${0} {
        border-color: ${0};
      }
    }

    ${0};

    ${0};
  `),FakeCheckbox,FakeRadioButton,styles.form.checkbox.unchecked.default,Title$1,styles.form.checkbox.checked.hover.backgroundColor,FakeCheckbox,styles.form.checkbox.unchecked.hover,FakeRadioButton,styles.form.checkbox.unchecked.hover.borderColor,selected&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$f||(_t9$f=_$x`
      ${0} {
        color: ${0};
      }
      ${0} {
        ${0};
        border: none;
      }

      ${0} {
        border-color: ${0};
        ${0} {
          background-color: ${0};
        }
      }

      &:hover {
        ${0}{
          ${0};
        }

        ${0} {
          border-color: ${0};
          ${0} {
            background-color: ${0};
          }
        }
      }
    `),Title$1,styles.form.checkbox.checked.default.backgroundColor,FakeCheckbox,styles.form.checkbox.checked.default,FakeRadioButton,styles.form.checkbox.checked.default.backgroundColor,FakeInnerRadio,styles.form.checkbox.checked.default.backgroundColor,FakeCheckbox,styles.form.checkbox.checked.hover,FakeRadioButton,styles.form.checkbox.checked.hover.backgroundColor,FakeInnerRadio,styles.form.checkbox.checked.hover.backgroundColor),disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$c||(_t10$c=_$x`
      cursor: not-allowed;
    `)))),FilterOption=({title:title,value:value,optionType:_optionType="text",selected:_selected=!1,disabled:_disabled=!1,onClick:_onClick=(()=>{}),...props})=>{const iconWeight=dimensions.icons.weights.regular;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$k,Object.assign({},{onClick:_onClick,disabled:_disabled,selected:_selected},props),"checkbox"===_optionType&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FakeCheckbox,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FakeCheckboxInner,null,_selected&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckMarkWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckMark,{color:"inverse",stroke:"inverse",size:12,weight:iconWeight})))),"radio"===_optionType&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FakeRadioButton,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FakeInnerRadio,null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title$1,null,title))};let _t$y,_t2$x,_t3$r,_t4$m,_t5$k,_t6$j,_t7$i,_t8$g,_$y=t=>t;const Container$l=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$y||(_t$y=_$y`
  ${0};

  ${0} {
    flex-shrink: 0;
    display: flex;
  }

  height: 30px;
  padding: 0 0 0 8px;
  align-items: center;
  display: flex;
  border-radius: 3px;
`),({theme:theme,hasBorder:hasBorder,disabled:disabled,noBackground:noBackground,width:width})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$x||(_t2$x=_$y`
    ${0};

    ${0};

    ${0};

    background-color: ${0};
  `),hasBorder&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$r||(_t3$r=_$y`
      border: 1px solid ${0};
      box-shadow: 0 4px 9px 0 hsla(205, 35%, 68%, 0.07);
    `),theme.styles.form.input.default.normal.borderColor),disabled&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$m||(_t4$m=_$y`
      opacity: 50%;
      cursor: not-allowed;
      `)),width&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$k||(_t5$k=_$y`
      width: ${0};
    `),width),noBackground?"transparent":"hsla(0, 0%, 100%, 1.000)"),IconWrapper),CrossButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t6$j||(_t6$j=_$y`
  ${0};
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  width: 26px;

  ${0} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`),resetButtonStyles,IconWrapper),StyledInput$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t7$i||(_t7$i=_$y`
  ${0};

  &:disabled {
    cursor: not-allowed;
  }

  font-size: 12px;
  border: none;
  height: 100%;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  margin-left: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`),({theme:theme,color:color})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$g||(_t8$g=_$y`
    font-family: ${0};
    ${0};
    &::placeholder {
      ${0};
      color: ${0};
      font-size: 12px;
    }
  `),theme.fontFamily.ui,theme.typography.form.input.value.compact,theme.typography.form.input.placeholder.compact,theme.colors.icons[color])),BasicSearchInput=({color:_color="subtle",hasBorder:_hasBorder=!0,iconSize:_iconSize=12,disabled:_disabled=!1,noBackground:_noBackground=!1,hasCrossButton:_hasCrossButton=!1,onCrossClick:_onCrossClick=(()=>{}),width:width,...props})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$l,Object.assign({},{hasBorder:_hasBorder,disabled:_disabled,noBackground:_noBackground,width:width}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,Object.assign({},{color:_color},{icon:"Search",weight:"regular",size:_iconSize})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput$2,Object.assign({},{color:_color,disabled:_disabled},props)),_hasCrossButton&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CrossButton,{onClick:_onCrossClick}," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"CloseCompact",color:"dimmed",size:12}))),isFilterItem=item=>null!=item&&(void 0!==item.value&&null!==item.value&&(null!==item.text&&(("number"==typeof item.value||"string"==typeof item.value)&&"string"==typeof item.text)));function useClickOutside(elRef,elCallback){const callbackRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(elCallback);callbackRef.current=elCallback,Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{const handleClickOutside=eve=>{var _elRef$current;null!=elRef&&null!==(_elRef$current=elRef.current)&&void 0!==_elRef$current&&_elRef$current.contains(eve.target)||callbackRef.current(eve)};return document.addEventListener("click",handleClickOutside,!0),()=>{document.removeEventListener("click",handleClickOutside,!0)}},[elCallback,elRef])}let _t$z,_t2$y,_t3$s,_t4$n,_$z=t=>t;const Container$m=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$z||(_t$z=_$z`
  position: relative;
`)),ButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$y||(_t2$y=_$z`
  display: inline-block;
`)),ContentBox=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$s||(_t3$s=_$z`
  z-index: 100;
  min-width: ${0}px;
  position: absolute;

  ${0};
`),({minWidth:minWidth})=>minWidth,({openState:openState,disabled:disabled})=>openState&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$n||(_t4$n=_$z`
    display: ${0};
    display: ${0};

    ${0};

    ${0};

    ${0};

    ${0};

  `),openState.isOpen?"inline-block":"none",disabled&&"none","bottom-right"===openState.position&&"\n      bottom: 0;\n      left: 0;\n      transform: translateY(calc(100% + 5px ));\n    ","bottom-left"===openState.position&&"\n      bottom: 0;\n      right: 0;\n      transform: translateY(calc(100% + 5px ));\n    ","top-left"===openState.position&&"\n      top: 0;\n      right: 0;\n      transform: translateY(calc( -100% - 5px ));\n    ","top-right"===openState.position&&"\n      top: 0;\n      left: 0;\n      transform: translateY(calc( -100% - 5px ));\n    ")),FilterDropHandler=({buttonIcon:buttonIcon,buttonText:buttonText,disabled:_disabled=!1,minWidth:_minWidth=270,minHeight:_minHeight=190,isSortAscending:isSortAscending,children:children,onToggleOpenCallback:_onToggleOpenCallback=(()=>{}),onCloseCallback:_onCloseCallback=(()=>{}),...props})=>{const[openState,setOpenState]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)({isOpen:!1,position:"bottom-right"}),buttonWrapperRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),mainRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);useClickOutside(mainRef,Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{openState.isOpen&&_onCloseCallback(),setOpenState(prev=>({...prev,isOpen:!1}))},[_onCloseCallback,openState.isOpen]));const handleToggleOpen=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((minWidth,minHeight)=>{if(!buttonWrapperRef.current)return;const buttonRect=buttonWrapperRef.current.getBoundingClientRect();if(!buttonRect)return;const position=((buttonRect,minWidth,minHeight)=>{let position="bottom-right";const openLeft=buttonRect.left+minWidth>window.innerWidth,openTop=buttonRect.bottom+minHeight>window.innerHeight,spaceTop=buttonRect.bottom>minHeight;return openLeft&&openTop&&spaceTop&&(position="top-left"),openTop&&!openLeft&&spaceTop&&(position="top-right"),!openTop&&openLeft&&(position="bottom-left"),position})(buttonRect,minWidth,minHeight);_onToggleOpenCallback(openState.isOpen),setOpenState(prev=>{const isOpen=!prev.isOpen;return{...prev,isOpen:isOpen,position:position}})},[_onToggleOpenCallback,openState.isOpen]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$m,Object.assign({ref:mainRef},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWrapper,{ref:buttonWrapperRef},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterButton,Object.assign({icon:buttonIcon,isOpen:openState.isOpen,onClick:()=>handleToggleOpen(_minWidth,_minHeight)},{disabled:_disabled,isSortAscending:isSortAscending},{hasFlipArrow:!0}),buttonText)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBox,Object.assign({},{openState:openState,disabled:_disabled,minWidth:_minWidth}),children))};let _t$A,_t2$z,_t3$t,_$A=t=>t;const Container$n=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$A||(_t$A=_$A`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 146px;
  border-top: 1px solid hsl(0, 0%, 91%);
`)),LoadingText=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$z||(_t2$z=_$A`
  ${0}
  color: hsl(0, 0%, 55%);
  font-size: 12px;
  font-style: italic;
  padding: 15px 0;
`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$t||(_t3$t=_$A`
    font-family: ${0};
  `),theme.fontFamily.data)),LoadingBox=({loadingText:loadingText})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$n,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spinner,{size:"large",styling:"primary"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingText,null,loadingText));let _t$B,_t2$A,_t3$u,_t4$o,_t5$l,_t6$k,_t7$j,_t8$h,_$B=t=>t;const Container$o=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$B||(_t$B=_$B`
  display: inline-block;
  position: relative;
`)),TopLine$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$A||(_t2$A=_$B`
  ${0};
  height: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`),({theme:theme})=>theme.styles.filters.dropdownContainer.topBorder),InnerBox=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$u||(_t3$u=_$B`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 4px 9px 0 hsla(204, 22%, 67%, 0.07);
  border-right: solid 1px hsl(207, 16%, 86%);
  border-bottom: solid 1px hsl(207, 16%, 86%);
  border-left: solid 1px hsl(207, 16%, 86%);
  background-color: hsl(200, 23%, 97%);
`)),StyledFilterOption=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(FilterOption)(_t4$o||(_t4$o=_$B`
  letter-spacing: 0.2px;
`)),OptionList=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$l||(_t5$l=_$B`
  ${0} {
    height: 35px;
    padding-left: 10px;
  }
`),StyledFilterOption),ResultsContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$k||(_t6$k=_$B`
  border-top: 1px solid hsl(0, 0%, 91%);
  padding-bottom: 8px;
`)),ResultCounter=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$j||(_t7$j=_$B`
  opacity: 0.75;
  font-family: ${0};
  color: hsl(0, 0%, 55%);
  font-size: 12px;
  font-style: italic;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 9px;
  height: 30px;
  margin-bottom: 6px;
  border-bottom: 1px solid hsl(0, 0%, 91%);
`),({theme:theme})=>theme.fontFamily.data),SearchWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$h||(_t8$h=_$B`
  height: 41px;
  display: flex;
  align-items: center;
`)),isValueSelected=(item,selected)=>{let isItemSelected=!1;return Array.isArray(selected)?selected.forEach(element=>{element.value===item.value&&(isItemSelected=!0)}):isFilterItem(selected)&&(isItemSelected=item.value===selected.value),isItemSelected},getVisibleList=(list,maxItems,selected)=>{if(list.length<=maxItems)return list;if(null===selected)return list.slice(0,maxItems);if(isFilterItem(selected)){const index=list.findIndex(item=>item.value===selected.value);if(-1!==index)return list.slice(0,maxItems);if(-1!==index&&index<maxItems)return list.slice(0,maxItems);const newList=list.slice(0,maxItems-1);return newList.push(selected),newList}if(Array.isArray(selected)){if(selected.length>maxItems)return selected.slice(0,maxItems);if(selected.length===maxItems)return selected;const selectedIndexList=[];selected.forEach(element=>{const index=list.findIndex(item=>item.value===element.value);-1!==index&&selectedIndexList.push(index)}),selectedIndexList.sort((function(a,b){return a-b}));let selectedIndex=0,visibleListAvailability=maxItems-selected.length;const newList=[];for(let listIndex=0;listIndex<list.length&&(selectedIndex<selectedIndexList.length&&listIndex===selectedIndexList[selectedIndex]?selectedIndex++:visibleListAvailability--,newList.push(list[listIndex]),0!==visibleListAvailability);listIndex++);if(newList.length<maxItems&&selectedIndex<selectedIndexList.length)for(;selectedIndex<selectedIndexList.length;selectedIndex++)newList.push(list[selectedIndexList[selectedIndex]]);return newList}return list.slice(0,maxItems-1)},FilterDropdown=({buttonIcon:buttonIcon,buttonText:buttonText,list:list,selected:_selected=null,disabled:_disabled=!1,isLoading:_isLoading=!1,loadingText:loadingText,optionType:_optionType="text",hasOptionsFilter:hasOptionsFilter,searchPlaceholder:searchPlaceholder,maxDisplayedItems:_maxDisplayedItems=5,searchResultText:_searchResultText="Showing [VISIBLE] of [TOTAL]",onSelect:_onSelect=(()=>{}),...props})=>{const[visibleList,setVisibleList]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(getVisibleList(list,_maxDisplayedItems,_selected)),[searchText,setSearchText]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),handleClose=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setSearchText(""),setVisibleList(getVisibleList(list,_maxDisplayedItems,_selected))},[list,_maxDisplayedItems,_selected]),handleToggleOpen=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setSearchText(""),setVisibleList(getVisibleList(list,_maxDisplayedItems,_selected))},[list,_maxDisplayedItems,_selected]),handleSelection=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item=>{const newSelected=((item,selected,optionType)=>{let isItemSelected=!1;if("checkbox"===optionType){const validSelected=Array.isArray(selected)?selected:isFilterItem(selected)?[selected]:[],newSelected=[];return validSelected.forEach(element=>{item.value===element.value?isItemSelected=!0:newSelected.push(element)}),isItemSelected||newSelected.push(item),0===newSelected.length?null:newSelected}return item})(item,_selected,_optionType);_onSelect(newSelected)},[_selected,_optionType,_onSelect]),handleInputFilter=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{const{value:value}=e.target;if(setSearchText(value),""===value)return void setVisibleList(getVisibleList(list,_maxDisplayedItems,_selected));const newValue="number"==typeof value?value.toString(10):value,newList=((list,newValue)=>list.filter(element=>element.text.toLowerCase().includes(newValue.toLowerCase())))(list,newValue);setVisibleList(getVisibleList(newList,_maxDisplayedItems,null))},[list,_maxDisplayedItems,_selected]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let isActive=!0;return isActive&&(setSearchText(""),setVisibleList(getVisibleList(list,_maxDisplayedItems,_selected))),()=>{isActive=!1}},[list,_maxDisplayedItems,_selected]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$o,Object.assign({},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterDropHandler,Object.assign({},{buttonIcon:buttonIcon,buttonText:buttonText,disabled:_disabled},{onCloseCallback:handleClose,onToggleOpenCallback:handleToggleOpen}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopLine$1,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerBox,null,hasOptionsFilter&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BasicSearchInput,{type:"text",hasBorder:!1,placeholder:searchPlaceholder,color:"dimmed",iconSize:12,value:searchText,onChange:handleInputFilter,noBackground:!0})),_isLoading||!list?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingBox,Object.assign({},{loadingText:loadingText})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ResultsContainer,null,hasOptionsFilter&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ResultCounter,null,(template=_searchResultText,visible=visibleList.length,total=list.length,template.replace("[TOTAL]",""+total).replace("[VISIBLE]",""+visible))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionList,null,visibleList.length>0&&visibleList.map((item,index)=>{const value=item.value,text=item.text;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFilterOption,Object.assign({key:index,title:text,onClick:()=>handleSelection(item),selected:isValueSelected(item,_selected)},{optionType:_optionType,value:value}))}))))));var template,visible,total};let _t$C,_t2$B,_t3$v,_t4$p,_t5$m,_t6$l,_t7$k,_t8$i,_t9$g,_$C=t=>t;const Container$p=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$C||(_t$C=_$C`
  display: inline-block;
  position: relative;
`)),TopLine$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$B||(_t2$B=_$C`
  ${0};
  height: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`),({theme:theme})=>theme.styles.filters.dropdownContainer.topBorder),InnerBox$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$v||(_t3$v=_$C`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 4px 9px 0 hsla(204, 22%, 67%, 0.07);
  border: solid 1px hsl(207, 16%, 86%);
  border-top: unset;
  background-color: hsl(200, 23%, 97%);
`)),StyledFilterOption$1=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(FilterOption)(_t4$p||(_t4$p=_$C`
  letter-spacing: 0.2px;
`)),OptionList$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$m||(_t5$m=_$C`
  ${0} {
    height: 35px;
    padding-left: 10px;
  }
`),StyledFilterOption$1),OrderGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$l||(_t6$l=_$C`
  display: flex;
  border-top: ${0} 1px solid;
  margin-top: 5px;
  button:first-child {
    border-right: ${0} 1px solid;
  }
`),({theme:{colors:colors}})=>colors.divider,({theme:{colors:colors}})=>colors.divider),OrderButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t7$k||(_t7$k=_$C`
  ${0};
  width: 100%;
  display: flex;
  align-items: center;
  font-family: ${0};
  color: hsl(0, 0%, 56%);
  font-size: 14px;
  height: 35px;
  ${0}
`),resetButtonStyles,({theme:theme})=>theme.fontFamily.data,({theme:theme,isSelected:isSelected})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$i||(_t8$i=_$C`

  ${0} {
    margin-left: 10px;
    display: flex;
    align-items: center;
    [stroke]{
        stroke: ${0};
      }
    }

  &:hover {
    ${0} {
      [stroke]{
        stroke: ${0};
        }
      }
    }

  ${0}
  `),IconWrapper,theme.colors.icons.dimmed,IconWrapper,theme.styles.form.checkbox.checked.hover.backgroundColor,isSelected&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$g||(_t9$g=_$C`
    ${0} {
      [stroke]{
        stroke: ${0};
        }
      }
    `),IconWrapper,theme.styles.form.checkbox.checked.default.backgroundColor))),SortDropdown=({buttonText:buttonText,disabled:disabled,list:list,isLoading:isLoading,loadingText:loadingText,isSortAscending:_isSortAscending=!0,selected:selected,descendingText:_descendingText="Descending",ascendingText:_ascendingText="Ascending",onSelect:onSelect,...props})=>{const handleSortSelect=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue=>{newValue.value!==selected.value&&onSelect(newValue,_isSortAscending)},[_isSortAscending,onSelect,selected.value]),handleOrderSelect=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(isAscending=>{_isSortAscending!==isAscending&&onSelect(selected,isAscending)},[_isSortAscending,onSelect,selected]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$p,Object.assign({},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterDropHandler,Object.assign({},{buttonText:buttonText,disabled:disabled,isSortAscending:_isSortAscending},{buttonIcon:"FilterSorting"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopLine$2,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerBox$1,null,isLoading||0===list.length?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingBox,Object.assign({},{loadingText:loadingText})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionList$1,null,list.map((item,index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFilterOption$1,{key:index,title:item.text,optionType:"radio",selected:selected.value===item.value,onClick:()=>handleSortSelect(item)}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OrderGroup,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OrderButton,{isSelected:_isSortAscending,onClick:()=>handleOrderSelect(!0)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"FilterAscending",size:16,weight:"light"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterOption,{selected:_isSortAscending,title:_ascendingText})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OrderButton,{isSelected:!_isSortAscending,onClick:()=>handleOrderSelect(!1)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"FilterDescending",size:16,weight:"light"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterOption,{selected:!_isSortAscending,title:_descendingText}))))))};let _t$D;const Container$q=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$D||(_t$D=(t=>t)``));let _t$E,_t2$C,_t3$w,_t4$q,_t5$n,_t6$m,_t7$l,_t8$j,_$E=t=>t;const fadeInAnimation=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.e)(_t$E||(_t$E=_$E`
  0% {
    width: 50%;
    opacity: .5;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 100%;
  }
`)),SearchInputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$C||(_t2$C=_$E`
  background-color: hsl(0, 0%, 100%);
  border-radius: 3px;
  flex: 1 1 200px;
  max-width: 320px;
`)),CloseSearchInputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$w||(_t3$w=_$E`
  ${0};
`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$q||(_t4$q=_$E`
    animation: ${0} ${0} ${0};
  `),fadeInAnimation,theme.animation.speed.slow,theme.animation.easing.primary.inOut)),StyledFilterButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(FilterButton)(_t5$n||(_t5$n=_$E``)),StyledDropdown=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(FilterDropdown)(_t6$m||(_t6$m=_$E``)),StyledDropdownDatePicker=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(({buttonIcon:buttonIcon,buttonText:buttonText,disabled:disabled,initialValue:initialValue,dateMode:dateMode,timeMode:timeMode,selected:selected,dateTimeTextUpper:dateTimeTextUpper,dateTimeTextLower:dateTimeTextLower,timeZoneTitle:timeZoneTitle,timeZoneValueTitle:timeZoneValueTitle,lang:lang,onCloseCallback:_onCloseCallback=(()=>{}),onUpdateCallback:_onUpdateCallback=(()=>{}),onToggleCallback:_onToggleCallback=(()=>{}),...props})=>{const pickerValue=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[mountedPicker,setMountedPicker]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)({initialValue:initialValue,isMount:!0}),handleUpdateCallback=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(data=>{pickerValue.current=data,_onUpdateCallback(data)},[_onUpdateCallback]),handleOnClose=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{pickerValue.current&&pickerValue.current!==selected&&_onCloseCallback(pickerValue.current)},[_onCloseCallback,selected]),handleOnToggle=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(isOpen=>{pickerValue.current&&pickerValue.current!==selected&&_onToggleCallback(pickerValue.current,isOpen),isOpen||null===pickerValue.current||mountedPicker.isMount||(pickerValue.current=null,setMountedPicker({initialValue:void 0,isMount:!0}))},[mountedPicker,_onToggleCallback,selected]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let canReset=!0;return canReset&&null===selected&&null!==pickerValue.current&&setMountedPicker({initialValue:void 0,isMount:!1}),()=>{canReset=!1}},[selected]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$q,Object.assign({},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterDropHandler,Object.assign({},{buttonIcon:buttonIcon,buttonText:buttonText,disabled:disabled},{minWidth:470,minHeight:360,onCloseCallback:handleOnClose,onToggleOpenCallback:handleOnToggle}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterDropdownContainer,null,mountedPicker.isMount&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DatePicker,Object.assign({},{dateMode:dateMode,timeMode:timeMode,dateTimeTextUpper:dateTimeTextUpper,dateTimeTextLower:dateTimeTextLower,timeZoneTitle:timeZoneTitle,timeZoneValueTitle:timeZoneValueTitle,lang:lang},{updateCallback:handleUpdateCallback,hasEmptyValue:!0,initialValue:mountedPicker.initialValue})))))})(_t7$l||(_t7$l=_$E``)),Container$r=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$j||(_t8$j=_$E`
  display: flex;
  flex-wrap: wrap;
  ${0}, ${0}, ${0}, ${0} {
    margin: 0 5px 10px 0;
  }
`),SearchInputWrapper,StyledDropdown,StyledFilterButton,StyledDropdownDatePicker),FilterInputs=({hasShowMore:_hasShowMore=!1,searchFilters:_searchFilters=[],datePickerFilters:_datePickerFilters=[],dropdownFilters:_dropdownFilters=[],showMoreText:_showMoreText="Show More",showLessText:_showLessText="Show Less",...props})=>{const[visibleSearchInputs,setVisibleSearchInputs]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)((searchFilters=>{const currentVisible=[];return searchFilters.forEach(element=>{element.canHide||currentVisible.push(element.id)}),currentVisible})(_searchFilters)),[showMoreDropdowns,setShowMoreDropdowns]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!_hasShowMore),toggleShowMore=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setShowMoreDropdowns(prev=>!prev)},[]),handleVisibleSearch=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(searchId=>{if(visibleSearchInputs.includes(searchId)){const newVisible=visibleSearchInputs.filter(id=>searchId!==id);setVisibleSearchInputs(newVisible)}else{const newVisible=[...visibleSearchInputs,searchId];setVisibleSearchInputs(newVisible)}},[visibleSearchInputs]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$r,Object.assign({},{props:props}),((searchFilters,visibleSearchInputs,handleVisibleSearch)=>searchFilters.map(searchInput=>visibleSearchInputs.includes(searchInput.id)?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchInputWrapper,{key:"searchFilter-id-"+searchInput.id},searchInput.canHide?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CloseSearchInputWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BasicSearchInput,Object.assign({},searchInput,{hasCrossButton:!0,onCrossClick:()=>handleVisibleSearch(searchInput.id)}))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BasicSearchInput,Object.assign({},searchInput))):null))(_searchFilters,visibleSearchInputs,handleVisibleSearch),_datePickerFilters.map(datePicker=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDropdownDatePicker,Object.assign({key:"datePicker-filter-"+datePicker.id},{...datePicker}))),((dropdownFilters,showMoreDropdowns,hasShowMore)=>dropdownFilters.map(dropdown=>!dropdown.canHide||!showMoreDropdowns||dropdown.canHide&&!hasShowMore?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDropdown,Object.assign({key:"dropdownFilter-id-"+dropdown.id},dropdown)):null))(_dropdownFilters,showMoreDropdowns,_hasShowMore),(!_hasShowMore||!showMoreDropdowns)&&((searchFilters,visibleSearchInputs,handleVisibleSearch)=>searchFilters.map(element=>{if(element.canHide&&!visibleSearchInputs.includes(element.id)){const searchId=element.id;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFilterButton,{key:"search-button-id-"+element.id,icon:"Add",onClick:()=>handleVisibleSearch(searchId)},element.showFieldText)}return null}))(_searchFilters,visibleSearchInputs,handleVisibleSearch),_hasShowMore&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterButton,{icon:"FilterEllipsis",onClick:toggleShowMore},showMoreDropdowns?_showMoreText:_showLessText))};let _t$F,_t2$D,_t3$x,_t4$r,_t5$o,_t6$n,_t7$m,_t8$k,_$F=t=>t;const Container$s=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$F||(_t$F=_$F`
  display: flex;
  align-items: center;
  font-size: 12px;
  min-height: 22px;
`)),ResultsTextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$D||(_t2$D=_$F`
  font-family: ${0};
  color: hsl(207, 5%, 57%);
`),({theme:theme})=>theme.fontFamily.ui),FilterLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$x||(_t3$x=_$F`
  height: 18px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 11px 0 8px;
  margin: 0 0 3px 3px;
  color: hsl(207, 5%, 57%);

  ${0};

  ${0} {
    display: flex;
    align-items: center;
  }
  border-right: 1px solid hsla(0, 0%, 13%, 0.16);
`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$r||(_t4$r=_$F`
    font-family: ${0};
  `),theme.fontFamily.data),IconWrapper),FilterLabelText=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$o||(_t5$o=_$F`
  padding: ${0};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
`),({hasIcon:hasIcon})=>hasIcon?"0 15px 0 9px":"0 15px 0 0"),ClearTextButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t6$n||(_t6$n=_$F`
  ${0};
  font-family: ${0};
  color: hsl(216, 4%, 77%);
  margin-left: 11px;
  font-size: 12px;
`),resetButtonStyles,({theme:theme})=>theme.fontFamily.data),RemoveButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t7$m||(_t7$m=_$F`
  ${0};
`),resetButtonStyles),FilterLabelsGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$k||(_t8$k=_$F`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
`)),renderLabel=(item,resultsDateFormat,icon,filterName)=>{let textLabel="";const isDateFormatValid=(resultsDateFormat=>{let isFormatValid=!1;if(""!==resultsDateFormat)try{const tryDate=new Date;Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(tryDate,resultsDateFormat),isFormatValid=!0}catch(error){isFormatValid=!1}return isFormatValid})(resultsDateFormat);return filterName&&isFilterItem(item)?textLabel=`${filterName}: ${item.text}`:filterName&&item instanceof Date?textLabel=isDateFormatValid?`${filterName}: ${Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(item,resultsDateFormat)}`:`${filterName}: ${item.toDateString()}`:filterName&&isDateInterval(item)?textLabel=isDateFormatValid?`${filterName}: ${Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(item.start,resultsDateFormat)} - ${Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(item.end,resultsDateFormat)}`:`${filterName}: ${item.start.toDateString()} - ${item.end.toDateString()}`:!filterName&&isFilterItem(item)?textLabel=item.text:!filterName&&item instanceof Date?textLabel=isDateFormatValid?Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(item,resultsDateFormat):item.toDateString():!filterName&&isDateInterval(item)&&(textLabel=isDateFormatValid?`${Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(item.start,resultsDateFormat)} - ${Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(item.end,resultsDateFormat)}`:`${item.start.toDateString()} - ${item.end.toDateString()}`),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterLabelText,{hasIcon:!!icon},textLabel)},FiltersResults=({labelLists:labelLists,totalResults:totalResults,resultTextTemplate:_resultTextTemplate="Showing Results ([TOTAL_RESULTS]):",clearText:_clearText="CLEAR ALL",resultsDateFormat:_resultsDateFormat="",onRemoveFilter:_onRemoveFilter=(()=>{}),onClearAll:_onClearAll=(()=>{}),...props})=>{return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$s,Object.assign({},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ResultsTextWrapper,null,(total=totalResults,_resultTextTemplate.replace("[TOTAL_RESULTS]",""+total))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterLabelsGroup,null,labelLists.map(({icon:icon,item:item,filterName:filterName,filterId:filterId,type:type},index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterLabel,{key:"Filter-Label-id-"+index},icon&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:icon,color:"dimmed",size:10,weight:"light"}),renderLabel(item,_resultsDateFormat,icon,filterName),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RemoveButton,{onClick:()=>_onRemoveFilter(filterId,type,item)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"CloseCompact",color:"dimmed",size:10,weight:"light"})))),labelLists.length>0&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClearTextButton,{onClick:_onClearAll},_clearText)));var total};let _t$G,_t2$E,_t3$y,_$G=t=>t;const Title$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$G||(_t$G=_$G`
  font-family: ${0};
  color: hsl(207, 5%, 57%);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`),({theme:theme})=>theme.fontFamily.ui),StyledFilterResults=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(FiltersResults)(_t2$E||(_t2$E=_$G``)),Container$t=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$y||(_t3$y=_$G`
  ${0} {
    margin-top: 29px;
  }
`),StyledFilterResults),getDisableValue=(filtersValues,singleFilter,filter)=>{let disabled=!1;if(filter.disabled)disabled=filter.disabled;else if(singleFilter){const notNullValues=filtersValues.filter(filter=>null!==filter.selected);notNullValues&&(disabled=notNullValues.length>1||notNullValues[0]&&notNullValues[0].id!==filter.id)}return disabled},createDropdownFilters=(dropdownsConfig,filtersValues,singleFilter,handleDropdownsSelected)=>{const dropdownFilters=[];return dropdownsConfig.forEach(dropdown=>{const filter=filtersValues.find(filter=>filter.id===dropdown.id);if(filter){const selected=Array.isArray(filter.selected)||isFilterItem(filter.selected)?filter.selected:null,onSelect=newSelection=>{handleDropdownsSelected(newSelection,filter.id)};let disabled=getDisableValue(filtersValues,singleFilter,dropdown);const newDropdown={...dropdown,selected:selected,disabled:disabled,onSelect:onSelect};dropdownFilters.push(newDropdown)}}),dropdownFilters},createSearchers=(searchersConfig,filtersValues,singleFilter,handleSearchers)=>{const searchersFilters=[];return searchersConfig.forEach(searcher=>{const filter=filtersValues.find(filter=>filter.id===searcher.id);if(filter&&!Array.isArray(filter.selected)){const value=null!==filter.selected&&isFilterItem(filter.selected)?filter.selected.text:"",onChange=e=>{const newValue=e.currentTarget.value;handleSearchers(newValue,filter.id)};let disabled=getDisableValue(filtersValues,singleFilter,searcher);const newSearcher={...searcher,value:value,disabled:disabled,onChange:onChange};searchersFilters.push(newSearcher)}}),searchersFilters},createDatePickers=(datePickersConfig,filtersValues,singleFilter,handleDatePickers)=>{const datePickersFilters=[];return datePickersConfig.forEach(datePicker=>{const disabled=getDisableValue(filtersValues,singleFilter,datePicker),foundPicker=filtersValues.find(filter=>filter.id===datePicker.id);let validInitialValue=void 0;datePicker.selected?validInitialValue=datePicker.selected:datePicker.initialValue&&(validInitialValue=datePicker.initialValue);const newPicker={...datePicker,onCloseCallback:value=>{handleDatePickers(value,datePicker.id)},onToggleCallback:(value,isOpen)=>{isOpen&&handleDatePickers(value,datePicker.id)},disabled:disabled,selected:foundPicker&&(foundPicker.selected instanceof Date||isDateInterval(foundPicker.selected))?foundPicker.selected:null,initialValue:validInitialValue};datePickersFilters.push(newPicker)}),datePickersFilters},createLabelResults=(searchersConfig,dropdownsConfig,datePickersConfig,filtersValues)=>{const labelLists=[];return searchersConfig.forEach(searcher=>{const foundSearcher=filtersValues.find(element=>element.id===searcher.id);if(foundSearcher&&isFilterItem(foundSearcher.selected)){const newLabel={filterId:foundSearcher.id,item:foundSearcher.selected,filterName:searcher.name,type:foundSearcher.type};labelLists.push(newLabel)}}),dropdownsConfig.forEach(dropdown=>{const foundDropdown=filtersValues.find(element=>element.id===dropdown.id);if(foundDropdown&&null!==foundDropdown.selected)if(Array.isArray(foundDropdown.selected))foundDropdown.selected.forEach(dropdownLabelVal=>{const newLabel={filterId:foundDropdown.id,item:dropdownLabelVal,icon:dropdown.buttonIcon,filterName:dropdown.name,type:foundDropdown.type};labelLists.push(newLabel)});else if(isFilterItem(foundDropdown.selected)){const newLabel={filterId:foundDropdown.id,item:foundDropdown.selected,icon:dropdown.buttonIcon,filterName:dropdown.name,type:foundDropdown.type};labelLists.push(newLabel)}}),datePickersConfig.forEach(datePicker=>{const foundPicker=filtersValues.find(element=>element.id===datePicker.id);if(foundPicker&&null!==foundPicker.selected&&!Array.isArray(foundPicker.selected)&&!isFilterItem(foundPicker.selected)){const newLabel={filterId:foundPicker.id,item:foundPicker.selected,icon:"Date",filterName:datePicker.name,type:foundPicker.type};labelLists.push(newLabel)}}),labelLists},FilterBar=({filtersTitle:_filtersTitle="Filters:",hasShowMore:hasShowMore,searchersConfig:_searchersConfig=[],dropdownsConfig:_dropdownsConfig=[],datePickersConfig:_datePickersConfig=[],showMoreText:showMoreText,showLessText:showLessText,resultTextTemplate:resultTextTemplate,clearText:clearText,totalResults:totalResults,singleFilter:_singleFilter=!1,resultsDateFormat:resultsDateFormat,onChangeCallback:_onChangeCallback=(()=>{}),...props})=>{const[filtersValues,setFiltersValues]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(((searchersConfig,dropdownsConfig,datePickersConfig)=>{const newFilters=[];return searchersConfig.forEach(({id:id,value:value,selected:selected})=>{let validatedSelected=null;"number"==typeof value?validatedSelected={text:value.toString(),value:value}:"string"===value?validatedSelected={text:value,value:value}:isFilterItem(selected)&&(validatedSelected=selected);const initialSearch={id:id,type:"search",selected:validatedSelected};newFilters.push(initialSearch)}),dropdownsConfig.forEach(({id:id,selected:selected})=>{const initialDropdown={id:id,type:"dropdown",selected:isFilterItem(selected)||Array.isArray(selected)?selected:null};newFilters.push(initialDropdown)}),datePickersConfig.forEach(({id:id,initialValue:initialValue,selected:selected})=>{let validSelected=null;initialValue?validSelected=initialValue:selected&&(validSelected=selected),newFilters.push({id:id,type:"datepicker",selected:validSelected})}),newFilters})(_searchersConfig,_dropdownsConfig,_datePickersConfig)),dropdownsConfigRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(_dropdownsConfig);dropdownsConfigRef.current&&!lodash_isequal__WEBPACK_IMPORTED_MODULE_26___default()(dropdownsConfigRef.current,_dropdownsConfig)&&(dropdownsConfigRef.current=_dropdownsConfig);const debounceSearcher=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(lodash_debounce__WEBPACK_IMPORTED_MODULE_27___default()(updatedFilters=>handleChange(updatedFilters),600)).current,handleChange=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValues=>{const notNullValues=newValues.filter(filter=>null!==filter.selected);_onChangeCallback(notNullValues)},[_onChangeCallback]),handleDropdownsSelected=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newValue,filterId)=>{setFiltersValues(prev=>{const updatedFilters=[...prev],foundFilter=updatedFilters.find(filter=>filter.id===filterId);return foundFilter&&foundFilter.selected!==newValue?(foundFilter.selected=newValue,handleChange(updatedFilters),updatedFilters):prev})},[handleChange]),handleSearchers=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newValue,filterId)=>{const updatedFilters=[...filtersValues],foundFilter=updatedFilters.find(filter=>filter.id===filterId);foundFilter&&(foundFilter.selected=""===newValue?null:{text:newValue,value:newValue}),debounceSearcher(updatedFilters),setFiltersValues(updatedFilters)},[debounceSearcher,filtersValues]),handleOnClear=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{const updatedFilters=[...filtersValues];updatedFilters.forEach(filterElement=>{null!==filterElement.selected&&(filterElement.selected=null)}),handleChange(updatedFilters),setFiltersValues(updatedFilters)},[filtersValues,handleChange]),handleOnRemoveFilter=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((filterId,type,item)=>{setFiltersValues(prev=>{const updatedFilters=[...prev],foundFilter=updatedFilters.find(filterElement=>filterElement.id===filterId);if(!foundFilter)return prev;if(Array.isArray(foundFilter.selected)&&"dropdown"===type){const selectedFiltered=foundFilter.selected.filter(oldItem=>!isFilterItem(oldItem)||!isFilterItem(item)||oldItem.value!==item.value);foundFilter.selected=0===selectedFiltered.length?null:selectedFiltered}else foundFilter.selected=null;return handleChange(updatedFilters),updatedFilters})},[handleChange]),handleDatePickers=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((selection,filterId)=>{const updatedDatePickers=[...filtersValues],foundFilter=updatedDatePickers.find(datePicker=>datePicker.id===filterId);foundFilter&&(foundFilter.selected=selection,handleChange(filtersValues),setFiltersValues(updatedDatePickers))},[filtersValues,handleChange]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let mountConfig=!0;return mountConfig&&dropdownsConfigRef.current&&setFiltersValues(prev=>{const updatedFilters=[...prev];return updatedFilters.forEach(filter=>{const foundDropdown=dropdownsConfigRef.current.find(dropdown=>dropdown.id===filter.id);if(foundDropdown)if(Array.isArray(filter.selected))filter.selected.forEach(item=>{const foundItem=foundDropdown.list.find(dropdownItem=>dropdownItem.value===item.value);foundItem&&(item.text=foundItem.text)});else if(isFilterItem(filter.selected)){const foundItem=foundDropdown.list.find(item=>null!==filter.selected&&(!!isFilterItem(filter.selected)&&item.value===filter.selected.value));foundItem&&(filter.selected.text=foundItem.text)}}),updatedFilters}),()=>{mountConfig=!1}},[dropdownsConfigRef.current]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$t,Object.assign({},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title$2,null,_filtersTitle),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterInputs,Object.assign({},{hasShowMore:hasShowMore,showMoreText:showMoreText,showLessText:showLessText},{searchFilters:createSearchers(_searchersConfig,filtersValues,_singleFilter,handleSearchers),dropdownFilters:createDropdownFilters(dropdownsConfigRef.current,filtersValues,_singleFilter,handleDropdownsSelected),datePickerFilters:_datePickersConfig?createDatePickers(_datePickersConfig,filtersValues,_singleFilter,handleDatePickers):void 0})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFilterResults,Object.assign({},{resultTextTemplate:resultTextTemplate,clearText:clearText,totalResults:totalResults,resultsDateFormat:resultsDateFormat},{labelLists:createLabelResults(_searchersConfig,dropdownsConfigRef.current,_datePickersConfig,filtersValues),onClearAll:handleOnClear,onRemoveFilter:handleOnRemoveFilter})))};let _t$H,_t2$F,_t3$z,_t4$s,_t5$p,_$H=t=>t;const Container$u=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$H||(_t$H=_$H`
  position: relative;
  display: inline-block;
`)),StatusCounter=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$F||(_t2$F=_$H`
  position: absolute;
  left: 14px;;
  top: -12px;
  border-radius: 50%;
  height: 14px;
  min-width: 14px;
  padding: 2px;
  font-size: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${0}
  background-color: ${0};
`),({theme:{animation:animation}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$z||(_t3$z=_$H`
    transition: background-color ${0} ${0};
  `),animation.speed.slow,animation.easing.primary.easeInOut),({theme:theme,color:color})=>color?theme.colors.status[color]:"hsla(0, 0%, 91.8%, 0)"),StatusDot=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$s||(_t4$s=_$H`
  width: 10px;
  height: 10px;
  border: solid 2px hsl(0, 0%, 100%);
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -9px;
  ${0}
  background-color: ${0};
`),({theme:{animation:animation}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$p||(_t5$p=_$H`
    transition: background-color ${0} ${0};
  `),animation.speed.slow,animation.easing.primary.easeInOut),({theme:theme,color:color})=>color?theme.colors.status[color]:"hsla(0, 0%, 91.8%, 0)"),StatusIcon=({icon:icon,status:status,counter:counter})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$u,null,status&&void 0===counter?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatusDot,{color:status}):void 0===counter?null:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatusCounter,{color:status},counter),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:icon,size:18,color:"dimmed"}));let _t$I,_t2$G,_t3$A,_t4$t,_t5$q,_t6$o,_t7$n,_t8$l,_t9$h,_t10$d,_t11$9,_t12$5,_t13$4,_t14$3,_t15$2,_t16$2,_t17$2,_$I=t=>t;const HandleTouchReactionKeyframes=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.e)(_t$I||(_t$I=_$I`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(3);
 }

 100% {
   transform: scale(1.75);
 }
`)),HandleMouseReactionKeyframes=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.e)(_t2$G||(_t2$G=_$I`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(0);
 }

 100% {
   transform: scale(0.5);
 }
`));styled_components__WEBPACK_IMPORTED_MODULE_2__.d.svg(_t3$A||(_t3$A=_$I`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: ${0};
  appearance: none;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleBase.fill),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t4$t||(_t4$t=_$I`
  fill: none;
  stroke: ${0};
  mask: url(#${0});
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleRingLayer.stroke,props=>props.maskID),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t5$q||(_t5$q=_$I`
  opacity: 0.65;
  cursor: pointer;
  transform: scale(1);

  ${0}

  ${0}

`),props=>props.touchDragging&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$o||(_t6$o=_$I`
    animation: ${0} 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `),HandleTouchReactionKeyframes),props=>props.mouseDragging&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$n||(_t7$n=_$I`
    animation: ${0} 0.25s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `),HandleMouseReactionKeyframes)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t8$l||(_t8$l=_$I`
  mix-blend-mode: multiply;
  fill: ${0};
  stroke: none;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleReactiveFill.fill),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t9$h||(_t9$h=_$I`
  fill: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleReactiveRing.stroke),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t10$d||(_t10$d=_$I`
  overflow: visible;
  mix-blend-mode: multiply;
  fill: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].handleContrastLayer.stroke),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t11$9||(_t11$9=_$I`
    mix-blend-mode: multiply;
    fill: url(#${0});
`),props=>props.fillID),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t12$5||(_t12$5=_$I`
  opacity: 0;
  pointer-events: none;
  ${0};

`),props=>props.showIndex&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t13$4||(_t13$4=_$I`
    opacity: 1;
  `))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.stop(_t14$3||(_t14$3=_$I`
  stop-color: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].stopStart.stopColor),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.stop(_t15$2||(_t15$2=_$I`
  stop-color: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].stopEnd.stopColor),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.text(_t16$2||(_t16$2=_$I`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  stroke: ${0};
  text-align: center;

  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;


`),({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandleText.stroke),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t17$2||(_t17$2=_$I`

`));let _t$J,_t2$H,_t3$B,_t4$u,_t5$r,_t6$p,_t7$o,_t8$m,_t9$i,_t10$e,_t11$a,_t12$6,_$J=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.line(_t$J||(_t$J=_$J`
  pointer-events: none;
  stroke: ${0};
  mix-blend-mode: multiply;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].contrastLine.stroke),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.line(_t2$H||(_t2$H=_$J`
  pointer-events: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].highlightLine.stroke);const GrabHandle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t3$B||(_t3$B=_$J`
  fill: ${0};
  stroke: ${0};
  opacity: 1;
  transition: opacity 250ms ease;
  cursor: grab;

  ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandle.fill,({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandle.stroke,props=>props.hide&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$u||(_t4$u=_$J`
    pointer-events: none;
    opacity: 0;
  `))),GrabHandleContrast=(styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t5$r||(_t5$r=_$J`
  opacity: 0;
  pointer-events: none;
  ${0};

`),props=>props.showIndex&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$p||(_t6$p=_$J`
    opacity: 1;
  `))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.text(_t7$o||(_t7$o=_$J`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  fill: ${0};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandleText.stroke),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.text(_t8$m||(_t8$m=_$J`
  text-align: center;
  fill: ${0};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].label.fill),Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(GrabHandle)(_t9$i||(_t9$i=_$J`
  fill: none;
  stroke: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].grabHandleContrast.stroke));styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t10$e||(_t10$e=_$J`

  ${0}, ${0} {
    transition: r 250ms ease;
  }

  ${0};
`),GrabHandle,GrabHandleContrast,props=>props.showIndex&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t11$a||(_t11$a=_$J`
    ${0}, ${0} {
      pointer-events: none;
      r: ${0};
    }
  `),GrabHandle,GrabHandleContrast,1.75*props.originalRadius)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t12$6||(_t12$6=_$J`
  fill: hsla(203, 100%, 35%, 0.49);
`)),Object(react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});let _t$K,_t2$I,_$K=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.circle(_t$K||(_t$K=_$K`
  fill: ${0};
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].point.fill),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.text(_t2$I||(_t2$I=_$K`
  text-align: center;
  fill: ${0};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`),({theme:theme,styling:styling})=>theme.custom.lines[styling].label.fill);let _t$L,_t2$J,_t3$C,_t4$v,_t5$s,_$L=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$L||(_t$L=_$L`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */

`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$J||(_t2$J=_$L`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.svg(_t3$C||(_t3$C=_$L`
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

`),props=>props.transculent&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$v||(_t4$v=_$L`
    background: hsla(0deg, 0%, 0%, 35%);
  `))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.img(_t5$s||(_t5$s=_$L`
  object-fit: contain;
  width:  100%;
  height: 100%;
`));let _t$M,_t2$K,_t3$D,_t4$w,_t5$t,_$M=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$M||(_t$M=_$M`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.video(_t2$K||(_t2$K=_$M`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$D||(_t3$D=_$M`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.svg(_t4$w||(_t4$w=_$M`
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

`),props=>props.transcalent&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$t||(_t5$t=_$M`
    background: hsla(0deg, 0%, 0%, 35%);
  `)));let _t$N;const Video$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.video(_t$N||(_t$N=(t=>t)`
  /* width: 800px; */
`));let _t$O,_t2$L,_t3$E,_t4$x,_t5$u,_$O=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$O||(_t$O=_$O`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(({id:_id="1",enabled:enabled,peerAddress:peerAddress,maxConnectionAttempts:_maxConnectionAttempts=30,rtcConfiguration:_rtcConfiguration={},setStatus:_setStatus=(()=>{}),setError:_setError=(()=>{}),autoPlay:_autoPlay=!0,muted:_muted=!0,...props})=>{const[connectionAttempts,setConnectionAttempts]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),videoRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),webSocket=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),peerConnection=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);function handleIncomingError(error){_setError(error),closeWebSocket()}const onServerMessage=({data:_data=""})=>{if("HELLO"===_data)console.debug("Received HELLO"),_setStatus("Registered with server, waiting for offer.");else if(_data.startsWith("ERROR"))console.error("Received "+_data),handleIncomingError(_data);else{let msg;try{msg=JSON.parse(_data)}catch(e){return void(e instanceof SyntaxError?handleIncomingError("Error parsing incoming JSON: "+_data):handleIncomingError("Unknown error parsing response: "+_data))}peerConnection.current||function createCall(msg){if(setConnectionAttempts(0),console.debug("Creating RTCPeerConnection"),!msg.sdp)return void console.debug("WARNING: First message wasn't an SDP message!?");const pc=new RTCPeerConnection(_rtcConfiguration);peerConnection.current=pc,pc.addEventListener("track",onRemoteTrack),pc.addEventListener("icecandidate",({candidate:_candidate=null})=>{_candidate?webSocket.current?webSocket.current.send(JSON.stringify({ice:_candidate})):console.debug("no WS found on peer connection 'icecandidate' event... how?"):console.debug("All local ICE Candidates sent.")}),_setStatus("RTCPeerConnection created, waiting for SDP")}(msg),null!=msg.sdp?(console.debug("Received Remote SDP:"+JSON.stringify(msg.sdp)),(async description=>{if(!peerConnection.current||!webSocket.current)return;try{"offer"===description.type&&"stable"!==peerConnection.current.signalingState?await Promise.all([peerConnection.current.setLocalDescription({type:"rollback"}),peerConnection.current.setRemoteDescription(description)]):(description.sdp&&(description.sdp=description.sdp.replace(/profile-level-id=(640028|64001f|64002a);/,"")),await peerConnection.current.setRemoteDescription(new RTCSessionDescription(description)),_setStatus("Remote Description set"))}catch(error){return console.error("Error:",error),void _setError("Error Setting remote description")}if("offer"!==description.type)return;_setStatus("Creating Answer");try{const answer=await peerConnection.current.createAnswer();console.debug("Got local description: "+JSON.stringify(answer)),await peerConnection.current.setLocalDescription(answer)}catch(error){return console.error(error),void(error instanceof Error&&_setError(error.message))}const message={sdp:peerConnection.current.localDescription};_setStatus("Sending Local Description");try{await webSocket.current.send(JSON.stringify(message)),_setStatus("Connected")}catch(error){console.error(error),error instanceof Error&&_setError(error.message)}})(msg.sdp)):null!=msg.ice?(console.debug("Received Remote ICE:"+JSON.stringify(msg.ice)),function onIncomingICE(ice){if(!peerConnection.current)return void console.error("peerConnection.current not found onIncomingICE ");const candidate=new RTCIceCandidate(ice);peerConnection.current.addIceCandidate(candidate).catch(_setError)}(msg.ice)):handleIncomingError("Unknown incoming JSON: "+msg)}};function onServerClose(event){console.debug("serverClose"),webSocket.current&&(_setStatus("Disconnected from server"),closePeerConnection(),null!==event&&1e3!==event.code&&enabled&&window.setTimeout(connectToPeer,3e3))}function onServerError(event){console.debug(event),_setError("Unable to connect to server"),closeWebSocket()}function connectToPeer(){if(console.debug("connectToPeer",connectionAttempts),connectionAttempts>=_maxConnectionAttempts)return void _setError("Too many connection attempts, aborting. Refresh page to try again");_setError(null);const peerId=function getPeerId(id){return"WRP_"+id+"_"+Math.floor(8990*Math.random()+10).toString()}(_id);_setStatus("Connecting to server "+peerAddress);const ws=new WebSocket(peerAddress);webSocket.current=ws,ws.addEventListener("open",()=>{const interval=setInterval(()=>{try{ws.send("HELLO "+peerId),clearInterval(interval),_setStatus("Registering with server (sent HELLO) for peer id: "+peerId)}catch(error){console.debug(error)}},3e3)}),ws.addEventListener("error",onServerError),ws.addEventListener("message",onServerMessage),ws.addEventListener("close",onServerClose),setConnectionAttempts(connectionAttempts+1)}function onRemoteTrack(event){videoRef.current&&videoRef.current.srcObject!==event.streams[0]&&(console.debug("Incoming stream"),videoRef.current.srcObject=event.streams[0],_setStatus("Adding Track"))}const closeWebSocket=async()=>{console.debug("closeWebSocket"),await closePeerConnection(),webSocket.current&&(await webSocket.current.close(),webSocket.current=null)},closePeerConnection=async()=>{console.debug("closePeerConnection"),peerConnection.current&&(await peerConnection.current.close(),peerConnection.current=null)};return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>(!0===enabled?connectToPeer():webSocket.current&&webSocket.current.close(1e3,"WebRTC Disabled"),()=>{console.debug("cleanup"),closeWebSocket()}),[enabled]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Video$1,Object.assign({},props,{autoPlay:_autoPlay,muted:_muted,ref:videoRef}))})(_t2$L||(_t2$L=_$O`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$E||(_t3$E=_$O`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.svg(_t4$x||(_t4$x=_$O`
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

`),props=>props.transcalent&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$u||(_t5$u=_$O`
    background: hsla(0deg, 0%, 0%, 35%);
  `)));const makeTitle=(parts,delimiter="|")=>{let title="";return delimiter=" "+delimiter+" ",parts.forEach((part,key)=>{title+=part,parts.length-1!==key&&(title+=delimiter)}),title};let _t$P,_t2$M,_t3$F,_t4$y,_t5$v,_t6$q,_t7$p,_t8$n,_$P=t=>t;const Container$y=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$P||(_t$P=_$P`
  position: relative;
`)),IconContainer$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$M||(_t2$M=_$P`
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
`)),Title$3=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.h1(_t3$F||(_t3$F=_$P`
  ${0}
  margin: 0 0 20px;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$y||(_t4$y=_$P`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.pageHeader.mainTitle)),AreaTitleCss=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$v||(_t5$v=_$P`
  ${0}
  margin: 0;
  position: absolute;
  top: -18px;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$q||(_t6$q=_$P`
  font-family: ${0};
  ${0};
  `),theme.fontFamily.ui,theme.typography.pageHeader.areaTitle)),AreaTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$p||(_t7$p=_$P`
  ${0}
`),AreaTitleCss),AreaLinkTitle=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t8$n||(_t8$n=_$P`
  ${0}
  &:hover {
    text-decoration: underline;
  }
`),AreaTitleCss),PageTitle=({title:title,icon:icon,areaTitle:areaTitle,areaHref:areaHref,updateDocTitle:_updateDocTitle=!0})=>(((title,area,delimiter,update=!0)=>{const[baseTitle]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(document.title);Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{update&&(document.title=makeTitle([...title?[title]:[],...area?[area]:[],baseTitle],delimiter))},[title,area,baseTitle,delimiter,update])})(title,areaTitle||"",void 0,_updateDocTitle),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$y,null,areaTitle&&areaHref?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AreaLinkTitle,{to:areaHref},areaTitle):areaTitle&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AreaTitle,null,areaTitle),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title$3,null,title),icon?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconContainer$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,Object.assign({size:24,color:"dimmed"},{icon:icon}))):null));let _t$Q,_t2$N,_$Q=t=>t;const Container$z=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.p(_t$Q||(_t$Q=_$Q`
  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$N||(_t2$N=_$Q`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.pageHeader.introduction)),IntroductionText=({children:children})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$z,null,children);let _t$R;const Container$A=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$R||(_t$R=(t=>t)``)),PageHeader=({title:title,icon:icon,introductionText:introductionText,areaHref:areaHref,areaTitle:areaTitle,updateDocTitle:_updateDocTitle=!0})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$A,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageTitle,Object.assign({},{title:title,icon:icon,areaHref:areaHref,areaTitle:areaTitle,updateDocTitle:_updateDocTitle})),introductionText?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IntroductionText,null,introductionText):null);let _t$S;const Container$B=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$S||(_t$S=(t=>t)`
  display: flex;
  flex-direction: column;
`)),MultilineContent=({contentArray:contentArray})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$B,null,contentArray.map((element,index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{key:"element-"+index},element)));let _t$T,_t2$O,_t3$G,_t4$z,_t5$w,_t6$r,_t7$q,_t8$o,_$T=t=>t;const Container$C=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$T||(_t$T=_$T`
  position: relative;
  line-height: 0;
`)),mediaStyle="\n  max-width:  100%;\n  max-height: 100%;\n  border-radius: 3px;\n  background-color: hsla(0deg, 0%, 0%, 35%);\n",LoadingOverlay$3=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$O||(_t2$O=_$T`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`)),Video$3=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.video(_t3$G||(_t3$G=_$T`
  ${0};
  outline: none;

  ${0};
`),mediaStyle,({theme:theme,isLoaded:isLoaded,hasModalLimits:hasModalLimits})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$z||(_t4$z=_$T`
    transition: opacity ${0} ${0};
    opacity: ${0};

    ${0};
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeOut,isLoaded?"1":"0",hasModalLimits&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$w||(_t5$w=_$T`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `)))),StyledImage=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.img(_t6$r||(_t6$r=_$T`
  ${0};

  ${0};
`),mediaStyle,({theme:theme,isLoaded:isLoaded,hasModalLimits:hasModalLimits})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$q||(_t7$q=_$T`
    transition: opacity ${0} ${0};
    opacity: ${0};

    ${0};
  `),theme.animation.speed.slow,theme.animation.easing.primary.easeOut,isLoaded?"1":"0",hasModalLimits&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$o||(_t8$o=_$T`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `)))),MediaBox=({src:src,alt:alt,videoOptions:_videoOptions={},mediaType:mediaType,hasModalLimits:hasModalLimits,onError:_onError=(()=>{}),onMediaLoad:_onMediaLoad=(()=>{})})=>{const{loop:loop=!1,autoPlay:autoPlay=!0,controls:controls=!1,muted:muted=!0,...videoValues}=_videoOptions,[loaded,setLoaded]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),handleLoad=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{_onMediaLoad(),setLoaded(!0)},[_onMediaLoad,setLoaded]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$C,null,"video"===mediaType?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Video$3,Object.assign({},{src:src,loop:loop,autoPlay:autoPlay,controls:controls,muted:muted,onError:_onError,hasModalLimits:hasModalLimits},videoValues,{isLoaded:loaded,preload:"metadata",onCanPlayThrough:handleLoad})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledImage,Object.assign({},{src:src,alt:alt,onError:_onError,hasModalLimits:hasModalLimits},{onLoad:handleLoad,isLoaded:loaded})),!loaded&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingOverlay$3,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spinner,{size:"large",styling:"primary"})))};let _t$U,_t2$P,_t3$H,_t4$A,_t5$x,_t6$s,_$U=t=>t;const Container$D=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$U||(_t$U=_$U`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(202, 33%, 95%, 0.51);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  font-family: ${0};
  z-index: 999;
`),({theme:theme})=>theme.fontFamily.ui),CloseIcon=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(Icon)(_t2$P||(_t2$P=_$U``)),CloseButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t3$H||(_t3$H=_$U`
  ${0};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -30px;
  color: ${0};
  font-size: 14px;
  font-weight: 500;

  ${0} {
    display: flex;
    margin-left: 12px;
  }
  ${0}
  &:focus {
    outline: none;
  }

  &:hover:enabled {
    ${0}
  }

  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`),resetButtonStyles,({theme:theme})=>theme.colors.icons.dimmed,IconWrapper,({selected:_selected=!1})=>_selected&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$A||(_t4$A=_$U`
    border-bottom: 5px solid hsl(207, 80%, 64%);
  `)),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$x||(_t5$x=_$U`
      opacity: .8;
      transition: transform ${0} ${0};
    `),theme.animation.speed.normal,theme.animation.easing.primary.inOut)),LightBox=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$s||(_t6$s=_$U`
  position: relative;
  margin: 27px 0 0;
  box-shadow: 0 10px 15px 0 hsla(205, 42%, 60%, 0.15);
  background-color: hsl(0, 0%, 100%);
  z-index: 9999;
  width: ${0};
  padding: ${0};
  border-radius: 5px;
`),({width:width})=>width||"580px",({padding:padding})=>padding?"30px 40px":"0"),Modal=({isOpen:_isOpen=!1,isCloseEnable:_isCloseEnable=!0,closeText:_closeText="",width:_width="",padding:_padding=!0,customComponent:customComponent,onDismiss:onDismiss,dismissCallback:dismissCallback})=>{const lightBoxRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);useClickOutside(lightBoxRef,()=>{_isCloseEnable&&(dismissCallback&&dismissCallback(),dismiss())});const dismiss=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{dismissCallback&&dismissCallback(),onDismiss()},[onDismiss,dismissCallback]);return _isOpen?react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$D,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LightBox,{ref:lightBoxRef,width:_width,padding:_padding},_isCloseEnable?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CloseButton,{onClick:()=>dismiss()},_closeText||"CLOSE",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CloseIcon,{icon:"CloseCompact",size:15,color:"dimmed",weight:"regular"})):null,customComponent)),document.body):null},defaultContext={modalProps:{isOpen:!1,onDismiss:()=>null},setModalProps:newProps=>{console.log(newProps)}},ModalContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(defaultContext),ModalProvider=({children:children})=>{const[modalProps,setProps]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultContext.modalProps);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalContext.Provider,{value:{modalProps:modalProps,setModalProps:newProps=>{setProps(newProps)}}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Modal,Object.assign({},modalProps)),children)},useModal=()=>{const{modalProps:modalProps,setModalProps:setModalProps}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContext),setModalOpen=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newStatus=>{if(void 0===newStatus)return;const updateProps={...modalProps,isOpen:newStatus};setModalProps(updateProps)},[modalProps,setModalProps]),onDismiss=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setModalOpen(!1)},[setModalOpen]);return{createModal:Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(modal=>{modal||setModalProps({isOpen:!0,onDismiss:onDismiss});const updateProps={isOpen:!0,closeText:null==modal?void 0:modal.closeText,isCloseEnable:null==modal?void 0:modal.isCloseEnable,width:null==modal?void 0:modal.width,padding:null==modal?void 0:modal.padding,dismissCallback:null==modal?void 0:modal.dismissCallback,customComponent:null==modal?void 0:modal.customComponent,onDismiss:onDismiss};setModalProps(updateProps)},[onDismiss,setModalProps]),isModalOpen:modalProps.isOpen,setModalOpen:setModalOpen}},videoDefaultOptions={controls:!0};let _t$V,_t2$Q,_t3$I,_t4$B,_t5$y,_t6$t,_t7$r,_$V=t=>t;const Container$E=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$V||(_t$V=_$V`
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
    ${0};

    ${0}
  }

`),({aspect:aspect})=>"16:9"===aspect&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$Q||(_t2$Q=_$V`
      padding-left: 56.25%;
    `)),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$I||(_t3$I=_$V`
    transition:
      opacity ${0} ${0},
      transform ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.fast,theme.animation.easing.primary.easeOut),({mediaUrl:mediaUrl,hasPreview:hasPreview})=>mediaUrl&&hasPreview&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$B||(_t4$B=_$V`
      cursor: pointer;
    `)),({theme:theme,hoverZoom:hoverZoom,isImageValid:isImageValid})=>theme&&hoverZoom&&isImageValid&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$y||(_t5$y=_$V`
      transform: scale(1.5);
      opacity: 1;
      transition: transform ${0} ${0};
    `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut)),Image$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$t||(_t6$t=_$V`
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
`),p=>p.image,p=>p.image?"block":"none"),PlayableDrop=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$r||(_t7$r=_$V`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: hsla(0, 0%, 0%, .5);
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${0} {
    display: flex;
    svg {
      padding-left: 2px;
    }
  };
`),IconWrapper),TableRowThumbnail=({hoverZoom:_hoverZoom=!0,image:image,mediaUrl:mediaUrl,mediaType:mediaType})=>{const[hasPreview,setHasPreview]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[isImageValid,setIsImageValid]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),{createMediaModal:createMediaModal,isMediaUrlValid:isMediaUrlValid}=(()=>{const{createModal:createModal,isModalOpen:isModalOpen,setModalOpen:setModalOpen}=useModal();return{createMediaModal:Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async mediaModal=>{const{src:src,mediaType:mediaType,alt:alt,videoOptions:videoOptions=videoDefaultOptions,onError:onError,onMediaLoad:onMediaLoad,closeText:closeText,dismissCallback:dismissCallback}=mediaModal;createModal({padding:!1,width:"auto",closeText:closeText,dismissCallback:dismissCallback,customComponent:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MediaBox,Object.assign({},{src:src,mediaType:mediaType,alt:alt,videoOptions:videoOptions,onError:onError,onMediaLoad:onMediaLoad},{hasModalLimits:!0}))})},[createModal]),isMediaUrlValid:async function isMediaUrlValid(src,mediaType){let isValid=!1;if("img"===mediaType){const img=new Image;img.src=src;try{await new Promise((resolve,reject)=>{img.onload=()=>resolve(isValid=!0),img.onerror=reject})}catch(error){isValid=!1,console.log(`[useMediaModal - isMediaUrlValid] Invalid preview url ${src} - image load failed, modal will not be open`,error)}}if("video"===mediaType){const videoElement=document.createElement("video");videoElement.src=src;try{await new Promise((resolve,reject)=>{videoElement.oncanplaythrough=()=>resolve(isValid=!0),videoElement.onerror=reject})}catch(error){isValid=!1,console.log(`[useMediaModal - isMediaUrlValid] Invalid preview url ${src} - video load failed, modal will not be open`,error)}}return isValid},isMediaModalOpen:isModalOpen,setMediaModalOpen:setModalOpen}})(),handleModal=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async()=>{mediaUrl&&mediaType&&hasPreview&&createMediaModal({src:mediaUrl,mediaType:mediaType})},[createMediaModal,mediaType,mediaUrl,hasPreview]),verifyPreview=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async(currentMediaUrl,currentMediaType)=>{const isValidUrl=await isMediaUrlValid(currentMediaUrl,currentMediaType);setHasPreview(prev=>prev===isValidUrl?prev:isValidUrl)},[isMediaUrlValid]);Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{mediaUrl&&mediaType&&verifyPreview(mediaUrl,mediaType)},[mediaUrl,mediaType,verifyPreview]);const validateImage=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async currentImg=>{const isValidUrl=await isMediaUrlValid(currentImg,"img");setIsImageValid(prev=>prev===isValidUrl?prev:isValidUrl)},[isMediaUrlValid]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{image&&validateImage(image)},[image,validateImage]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$E,Object.assign({},{hoverZoom:_hoverZoom,mediaUrl:mediaUrl,isImageValid:isImageValid,hasPreview:hasPreview},{aspect:"16:9",onClick:handleModal}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image$2,Object.assign({},{image:image})),mediaUrl&&"video"===mediaType&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayableDrop,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{size:12,icon:"Play",color:"inverse"})))};let _t$W,_t2$R,_$W=t=>t;const Container$F=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$W||(_t$W=_$W`
  height: 42px;
  width: 4px;
  border-radius: 3px;
  display: block;

  ${0}

`),({status:status,theme:{colors:colors}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$R||(_t2$R=_$W`
    background: ${0};
    content:'${0}';
  `),colors.status[status],status)),TypeTableDeviceStatus=({status:_status="neutral"})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$F,{status:_status});let _t$X,_t2$S,_t3$J,_t4$C,_t5$z,_t6$u,_t7$s,_t8$p,_t9$j,_t10$f,_t11$b,_$X=t=>t;const CopyToClipboard=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t$X||(_t$X=_$X`

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

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$S||(_t2$S=_$X`
    transition: ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.easeOut)),CellContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$J||(_t3$J=_$X`
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
`),p=>p.theme.fontFamily.data,CopyToClipboard,({theme:theme,cellStyle:cellStyle,alignment:alignment})=>"firstColumn"===cellStyle?Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$C||(_t4$C=_$X`
      ${0};
    `),theme.typography.table.columnData[cellStyle]):Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$z||(_t5$z=_$X`
      ${0};
    `),theme.typography.table.columnData[cellStyle][alignment]),({hasCopyButton:hasCopyButton})=>hasCopyButton&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$u||(_t6$u=_$X`
    padding-right: 20px;
  `)),({hideDivider:hideDivider})=>!hideDivider&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$s||(_t7$s=_$X`
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
  `))),UnitText=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.span(_t8$p||(_t8$p=_$X`
  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$j||(_t9$j=_$X`
    ${0};
  `),theme.typography.table.columnData.unit)),StatusBlip=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10$f||(_t10$f=_$X`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  ${0}
`),({status:_status="neutral",theme:{colors:colors}})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t11$b||(_t11$b=_$X`
    background: ${0};
  `),colors.status[_status])),TypeTableCell=({showUnit:_showUnit=!1,showStatus:_showStatus=!1,status:status,unit:_unit="",cellStyle:_cellStyle="normalImportance",alignment:_alignment="left",hideDivider:hideDivider,isLastRow:isLastRow,hasCopyButton:hasCopyButton,href:href,children:children})=>{hideDivider=!!isLastRow||hideDivider;const{copyToClipboard:copyToClipboard}={copyToClipboard:Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(str=>{const el=document.createElement("textarea");el.value=str,el.setAttribute("readonly",""),el.style.position="absolute",el.style.left="-9999px",document.body.appendChild(el);const selection=document.getSelection();if(selection){const selected=selection.rangeCount>0&&selection.getRangeAt(0);el.select();const success=document.execCommand("copy");return document.body.removeChild(el),selected&&(selection.removeAllRanges(),selection.addRange(selected)),success}return!1},[])};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CellContainer,Object.assign({},{cellStyle:_cellStyle,alignment:_alignment,hideDivider:hideDivider,hasCopyButton:hasCopyButton}),_showStatus?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatusBlip,Object.assign({},{status:status})):null,href?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:href},children):children,_showUnit?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UnitText,null,_unit):null,hasCopyButton?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CopyToClipboard,{onClick:()=>"string"==typeof children&&copyToClipboard(children)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Copy",size:16})):null)};let _t$Y,_t2$T,_$Y=t=>t;const RowContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$Y||(_t$Y=_$Y`
  display: table-row;
  ${0};
`),({isEmpty:isEmpty})=>isEmpty&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$T||(_t2$T=_$Y`
    visibility: hidden;
  `))),TypeTableRow=({selectable:_selectable=!1,selectCallback:selectCallback,hasStatus:hasStatus,hasThumbnail:hasThumbnail,hasTypeIcon:hasTypeIcon,rowData:rowData,isLastRow:isLastRow,columnConfig:columnConfig})=>{var _rowData$header,_rowData$header2,_rowData$header3,_rowData$header4,_rowData$header5;const wrappedSelectCallback=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(checked=>{selectCallback&&selectCallback(checked,rowData.id)},[rowData.id,selectCallback]),isEmpty=0===rowData.columns.length;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RowContainer,{isEmpty:isEmpty},_selectable?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeTableCell,{hideDivider:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Checkbox,{checked:rowData._checked,onChangeCallback:wrappedSelectCallback})):null,hasStatus?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeTableCell,{hideDivider:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeTableDeviceStatus,{status:null===(_rowData$header=rowData.header)||void 0===_rowData$header?void 0:_rowData$header.status})):null,hasThumbnail?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeTableCell,{hideDivider:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableRowThumbnail,{image:null===(_rowData$header2=rowData.header)||void 0===_rowData$header2?void 0:_rowData$header2.image,mediaUrl:null===(_rowData$header3=rowData.header)||void 0===_rowData$header3?void 0:_rowData$header3.mediaUrl,mediaType:null===(_rowData$header4=rowData.header)||void 0===_rowData$header4?void 0:_rowData$header4.mediaType})):null,hasTypeIcon?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeTableCell,{hideDivider:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:(null===(_rowData$header5=rowData.header)||void 0===_rowData$header5?void 0:_rowData$header5.icon)||"",color:"dimmed",weight:"regular",size:16})):null,rowData.columns.map((cell,key)=>{const{cellStyle:cellStyle,alignment:alignment,showUnit:showUnit,showStatus:showStatus,hasCopyButton:hasCopyButton}=columnConfig[key],{unit:unit,status:status,text:text,customComponent:customComponent}=cell;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeTableCell,Object.assign({key:key,href:cell.href},{cellStyle:cellStyle,alignment:alignment,showUnit:showUnit,showStatus:showStatus,hasCopyButton:hasCopyButton,unit:unit,status:status,isLastRow:isLastRow}),customComponent||text)}))};let _t$Z,_t2$U,_t3$K,_t4$D,_$Z=t=>t;const HeaderTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$Z||(_t$Z=_$Z`
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0 2px;
  user-select: none;
  z-index: 99;

  ${0} {
    position: absolute;
    top: 0px;
    left: -15px;
    display: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    padding: 3px 1px;

    ${0}
  }

  ${0}

  ${0}
`),IconWrapper,({ascending:ascending})=>ascending&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$U||(_t2$U=_$Z`
      transform: rotate(180deg);
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      top: 0;
    `)),({isSortActive:isSortActive})=>isSortActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$K||(_t3$K=_$Z`
    &:not(hover) {
      ${0} {
        display: inline-flex;
      }
    }
  `),IconWrapper),({sortable:sortable})=>sortable&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$D||(_t4$D=_$Z`
    &:hover {
      background-color: hsl(220, 12%, 95%);
      cursor: pointer;
      ${0} {
        display: inline-flex;
        background-color: hsl(220, 12%, 95%);
      }
    }
  `),IconWrapper)),TableHeaderTitle=({header:header,sortable:sortable,isSortActive:isSortActive,ascending:ascending,columnId:columnId,indexKey:indexKey,toggleSort:toggleSort})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderTitle,{sortable:sortable,isSortActive:isSortActive,ascending:ascending,onClick:()=>{toggleSort(indexKey,columnId)}},sortable&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"FilterSorting",size:14,color:"dimmed"}),header);let _t$_,_t2$V,_t3$L,_t4$E,_t5$A,_t6$v,_t7$t,_t8$q,_t9$k,_t10$g,_t11$c,_t12$7,_t13$5,_t14$4,_t15$3,_$_=t=>t;const HeaderRow=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$_||(_t$_=_$_`
  display: table-row;
  height: 50px;
`)),HeaderItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$V||(_t2$V=_$_`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${0};

  ${0};

  ${0};

  ${0};

  ${0};

  ${0};
`),p=>p.theme.fontFamily.ui,({hasCopyButton:hasCopyButton})=>hasCopyButton&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$L||(_t3$L=_$_`
    padding-right: 20px;
  `)),({theme:theme,alignment:alignment,headerStyle:headerStyle})=>alignment?Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$E||(_t4$E=_$_`
    ${0};
  `),theme.typography.table[headerStyle][alignment]):Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$A||(_t5$A=_$_`
    ${0};
  `),theme.typography.table[headerStyle].left),p=>p.fixedWidth&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$v||(_t6$v=_$_`
    width: ${0}px;
  `),p.fixedWidth),({minWidth:minWidth})=>minWidth&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$t||(_t7$t=_$_`
    min-width:${0}px;
  `),minWidth),({headerStyle:headerStyle,isSortActive:isSortActive})=>"subHeader"===headerStyle&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$q||(_t8$q=_$_`
  padding-bottom: 15px;

  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: hsl(0, 0%, 89%);
    left: ${0};
    right: 0;
    width: ${0};
    bottom: 0px;
    position: absolute;
  }
`),isSortActive?"-15px":"0",isSortActive?"calc(100% + 15px)":"100%")),TitleItems=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t9$k||(_t9$k=_$_`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${0};
`),({alignment:alignment})=>alignment&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$g||(_t10$g=_$_`
      ${0};
      ${0};
  `),"right"===alignment?"align-items: flex-end":null,"center"===alignment?"align-items: center":null)),GroupTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t11$c||(_t11$c=_$_`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 4px;
`)),Title$4=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t12$7||(_t12$7=_$_`
  padding-left: 2px;
  padding-right: 8px;
  color: hsla(210, 2%, 51%, 0.65);
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.3px;
  white-space: nowrap;
`)),EmptyTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t13$5||(_t13$5=_$_`
  height: 20px;
`)),MiddleLine=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t14$4||(_t14$4=_$_`
  height: 1px;
  background: hsl(0, 0%, 93%);
  flex: 1;
  ${0};
`),({isLastOfGroup:isLastOfGroup})=>isLastOfGroup&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t15$3||(_t15$3=_$_`
    margin-right: 15px;
  `))),TypeTableHeader=({selectable:selectable,hasStatus:hasStatus,hasThumbnail:hasThumbnail,hasTypeIcon:hasTypeIcon,allChecked:allChecked,isEmptyTable:isEmptyTable,isLoading:isLoading,hasHeaderGroups:hasHeaderGroups,columnConfig:columnConfig,defaultAscending:defaultAscending,toggleAllCallback:_toggleAllCallback=(()=>{}),sortCallback:_sortCallback=(()=>{})})=>{const[sortSpec,setSortSpec]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(columnConfig),[ascendingState,setAscendingState]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultAscending),toggleAllCallbackWrapper=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(checked=>{_toggleAllCallback(checked)},[_toggleAllCallback]),toggleSort=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((indexKey,columnId)=>{if(void 0===sortSpec[indexKey])return;if(!sortSpec[indexKey].sortable)return;const updatedSort=[...sortSpec];let lastActiveKey=null;updatedSort.forEach((col,key)=>{col.sortActive&&(lastActiveKey=key),col.sortActive=key===indexKey});const newAscending=lastActiveKey===indexKey?!ascendingState:ascendingState;_sortCallback(newAscending,void 0===columnId?"column_"+indexKey:columnId),setSortSpec(updatedSort),setAscendingState(newAscending)},[ascendingState,_sortCallback,sortSpec]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderRow,null,selectable?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderItem,{headerStyle:"header",fixedWidth:30},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Checkbox,{checked:allChecked,disabled:isEmptyTable||isLoading,onChangeCallback:toggleAllCallbackWrapper})):null,hasStatus?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderItem,{headerStyle:"header",fixedWidth:10}):null,hasThumbnail?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderItem,{headerStyle:"header",fixedWidth:70}):null,hasTypeIcon?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderItem,{headerStyle:"header",fixedWidth:35}):null,columnConfig.map((column,key,allColls)=>{const{header:header,alignment:alignment,hasCopyButton:hasCopyButton,sortActive:sortActive,columnId:columnId,sortable:sortable,minWidth:minWidth}=column;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderItem,Object.assign({key:key},{alignment:alignment,hasCopyButton:hasCopyButton,minWidth:minWidth},{headerStyle:hasHeaderGroups?"subHeader":"header",isSortActive:sortActive}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleItems,Object.assign({},{alignment:alignment}),hasHeaderGroups&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GroupTitle,null,hasHeaderGroups&&((columnConfig,index)=>{if(index<0)return null;let isLastOfGroup=!0;return index<columnConfig.length-1&&(isLastOfGroup=columnConfig[index].groupTitle!==columnConfig[index+1].groupTitle),columnConfig[index].groupTitle?0!==index&&columnConfig[index-1].groupTitle===columnConfig[index].groupTitle?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyTitle,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MiddleLine,Object.assign({},{isLastOfGroup:isLastOfGroup}))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title$4,null,columnConfig[index].groupTitle),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MiddleLine,Object.assign({},{isLastOfGroup:isLastOfGroup}))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyTitle,null)})(allColls,key)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableHeaderTitle,{header:header,sortable:sortable,indexKey:key,columnId:columnId,isSortActive:sortActive,ascending:ascendingState,toggleSort:toggleSort})))}))};let _t$$,_t2$W,_t3$M,_t4$F,_t5$B,_$$=t=>t;const Container$G=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$$||(_t$$=_$$``)),TableContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$W||(_t2$W=_$$`
  display: table;
  width: 100%;
  position: relative;
`)),LoadingText$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$M||(_t3$M=_$$`
  color: hsla(195, 10%, 52%, 0.72);
`)),LoadingBox$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$F||(_t4$F=_$$`
  position: absolute;
  left: 0;
  z-index: 99;
  background-color: ${0};
  height: calc(100% - 50px);
  opacity: 85%;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${0} {
    margin-top: 10px;
  }
`),({theme:theme})=>theme.colors.pureBase,LoadingText$1),EmptyTableBox=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$B||(_t5$B=_$$`
  position: absolute;
  left: 0;
  z-index: 99;
  padding: 20px;
  width: 100%;
  min-height: 100px;
  text-align: center;
  h3 {
    font-weight: 500;
    color: hsl(208, 8%, 38%);
  }
  color: hsl(207, 5%, 57%);
`)),isChecked=({_checked:_checked2=!1})=>!0===_checked2,TypeTable=({columnConfig:columnConfig,selectable:selectable,rows:_rows=[],hasStatus:_hasStatus=!1,hasThumbnail:_hasThumbnail=!1,hasTypeIcon:_hasTypeIcon=!1,defaultAscending:_defaultAscending=!1,isLoading:_isLoading=!1,loadingText:_loadingText="Loading Data...",emptyTableTitle:_emptyTableTitle="",emptyTableText:_emptyTableText="",hasHeaderGroups:_hasHeaderGroups=!1,sortCallback:_sortCallback=(()=>{}),selectCallback:_selectCallback=(()=>{}),toggleAllCallback:_toggleAllCallback=(()=>{})})=>{const[allChecked,setAllChecked]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isEmptyTable=1===_rows.length&&0===_rows[0].columns.length&&!_isLoading;return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let areAllChecked=!1;_rows.every(isChecked)&&_rows.length>0&&!isEmptyTable&&(areAllChecked=!0),setAllChecked(areAllChecked)},[isEmptyTable,_rows]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$G,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableContainer,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeTableHeader,Object.assign({},{selectable:selectable,hasStatus:_hasStatus,hasThumbnail:_hasThumbnail,hasTypeIcon:_hasTypeIcon,defaultAscending:_defaultAscending,allChecked:allChecked,isEmptyTable:isEmptyTable,isLoading:_isLoading,hasHeaderGroups:_hasHeaderGroups,columnConfig:columnConfig,toggleAllCallback:_toggleAllCallback,sortCallback:_sortCallback})),_isLoading?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingBox$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spinner,{size:"large",styling:"primary"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingText$1,null,_loadingText)):null,isEmptyTable?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyTableBox,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,_emptyTableTitle),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,_emptyTableText)):null,_rows.map((rowData,key)=>{const isLastRow=_rows.length-1===key;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeTableRow,Object.assign({key:key},{rowData:rowData,isLastRow:isLastRow,selectable:selectable,selectCallback:_selectCallback,columnConfig:columnConfig,hasStatus:_hasStatus,hasThumbnail:_hasThumbnail,hasTypeIcon:_hasTypeIcon}))})))};let _t$10,_t2$X,_t3$N,_t4$G,_t5$C,_t6$w,_t7$u,_t8$r,_t9$l,_t10$h,_$10=t=>t;const Container$H=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$10||(_t$10=_$10`
  position: relative;
  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$X||(_t2$X=_$10`
    font-family: ${0};
  `),theme.fontFamily.ui)),StyledButton$4=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(Button)(_t3$N||(_t3$N=_$10`
  flex-shrink: 0;
`)),StyledLoadingButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(ButtonWithLoading)(_t4$G||(_t4$G=_$10`
  flex-shrink: 0;
`)),StyledLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t5$C||(_t5$C=_$10`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`)),EditContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$w||(_t6$w=_$10`
  min-width: 320px;
  background-color: hsl(0, 0%, 100%);
  z-index: 99;
  position: absolute;
  bottom: -15px;
  left: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${0} {
    margin:0;
    span {
      margin: 0;
    }
  }
  ${0} {
    margin-left: 5px;
  }
  ${0} {
    margin-left: 5px;
  }
`),StyledLabel,StyledButton$4,StyledLoadingButton),StyledIconButton$1=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(IconButton$2)(_t7$u||(_t7$u=_$10``)),TextContainer$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$r||(_t8$r=_$10`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;

  ${0}

  ${0}

  ${0} {
    opacity: 0;
    position: absolute;
    top: 7px;
    right: 0;
  };

  &:hover {
    ${0} {
      opacity: 1;
    };
  }
`),({alignment:alignment})=>"center"===alignment&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$l||(_t9$l=_$10`
    justify-content: center;
  `)),({alignment:alignment})=>"right"===alignment&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$h||(_t10$h=_$10`
    justify-content: flex-end;
`)),StyledIconButton$1,StyledIconButton$1),EditCell=({type:_type="text",placeholder:_placeholder="",defaultValue:defaultValue,rowKey:rowKey,alignment:_alignment="left",toLink:_toLink="",saveCallback:saveCallback,...props})=>{const[isEditMode,setIsEditMode]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[updatedValue,setUpdatedValue]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue),[loading,setLoading]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),handleSave=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async value=>{setLoading(!0),saveCallback&&await saveCallback(value,rowKey),setIsEditMode(!1),setLoading(!1)},[rowKey,saveCallback]),verifyKeyPress=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async eve=>{const code=eve.keyCode|eve.which|parseInt(eve.key,10);13===code&&handleSave&&(await handleSave(updatedValue),setIsEditMode(!1)),27===code&&(setUpdatedValue(defaultValue),setIsEditMode(!1))},[handleSave,updatedValue,defaultValue]),editContainerRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return useClickOutside(editContainerRef,()=>{setUpdatedValue(defaultValue),setIsEditMode(!1)}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$H,null,isEditMode?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EditContainer,{ref:editContainerRef},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallInput,Object.assign({},props,{autoFocus:!0,label:"",disabled:loading,type:_type,placeholder:_placeholder,defaultValue:defaultValue,onKeyUp:eve=>verifyKeyPress(eve),onChange:e=>{setUpdatedValue(e.target.value)}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLoadingButton,{onClick:()=>{handleSave(updatedValue)},size:"small",loading:loading},loading?"Saving":"Save"),!loading&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton$4,{onClick:()=>setIsEditMode(!1),design:"secondary",size:"small"},"Cancel")):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer$2,{alignment:_alignment},_toLink?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink,{to:_toLink},updatedValue):updatedValue,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIconButton$1,{icon:"Edit",weight:"light",size:16,onClick:()=>setIsEditMode(!0)})))};Object(react__WEBPACK_IMPORTED_MODULE_1__.createContext)({state:{},dispatch:()=>{},actions:{}});let _t$11,_t2$Y,_t3$O,_t4$H,_t5$D,_$11=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t$11||(_t$11=_$11`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$Y||(_t2$Y=_$11`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t3$O||(_t3$O=_$11`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$H||(_t4$H=_$11`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t5$D||(_t5$D=_$11`
`));let _t$12,_t2$Z,_t3$P,_t4$I,_t5$E,_t6$x,_$12=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t$12||(_t$12=_$12`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$Z||(_t2$Z=_$12`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t3$P||(_t3$P=_$12`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$I||(_t4$I=_$12`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t5$E||(_t5$E=_$12`
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t6$x||(_t6$x=_$12`

`));let _t$13,_t2$_,_t3$Q,_t4$J,_t5$F,_$13=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t$13||(_t$13=_$13`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$_||(_t2$_=_$13`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t3$Q||(_t3$Q=_$13`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$J||(_t4$J=_$13`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t5$F||(_t5$F=_$13`
`));let _t$14,_t2$$,_t3$R,_t4$K,_t5$G,_$14=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t$14||(_t$14=_$14`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$$||(_t2$$=_$14`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t3$R||(_t3$R=_$14`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$K||(_t4$K=_$14`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t5$G||(_t5$G=_$14`
`));let _t$15,_t2$10,_t3$S,_t4$L,_t5$H,_$15=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t$15||(_t$15=_$15`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$10||(_t2$10=_$15`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t3$S||(_t3$S=_$15`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$L||(_t4$L=_$15`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t5$H||(_t5$H=_$15`
`));let _t$16,_t2$11,_t3$T,_t4$M,_t5$I,_$16=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t$16||(_t$16=_$16`
  opacity: 0;
  ${0}

`),({active:active})=>active&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$11||(_t2$11=_$16`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t3$T||(_t3$T=_$16`
  opacity: 0;
  ${0}
`),({hover:hover})=>hover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$M||(_t4$M=_$16`opacity: 1;`))),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.g(_t5$I||(_t5$I=_$16`
`));let _t$17;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$17||(_t$17=(t=>t)`
  user-select: none;
  display: flex;
  flex-direction: column;
`));let _t$18,_t2$12,_t3$U,_t4$N,_$18=t=>t;const TextContainer$3=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$18||(_t$18=_$18`
  user-select: none;
`)),StyledLink$1=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t2$12||(_t2$12=_$18`
  text-decoration: none;
`)),TagWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$U||(_t3$U=_$18`
  font-family: ${0};
  font-size: ${0}px;
  font-weight: 500;
  color: hsl(200, 3%, 39%);
  padding: 4px 10px;
  border: solid 1px hsl(120, 1%, 85%);
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  height: 26px;

  ${0} {
    [stroke]{
      ${0};
    }
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${0};
`),({theme:theme})=>theme.fontFamily.ui,({size:size})=>size,IconWrapper,({theme:theme})=>theme.colors.icons.dimmed,({theme:theme,hoverColor:hoverColor,enableHover:enableHover})=>enableHover&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$N||(_t4$N=_$18`
    &:hover {
      cursor: pointer;
      border-color: ${0};
      color: ${0};
      ${0} {
        [stroke]{
          stroke: ${0};
        }
      }
    }
  `),theme.colors.icons[hoverColor],theme.colors.icons[hoverColor],IconWrapper,theme.colors.icons[hoverColor])),Tag=({icon:_icon="",size:_size=14,weight:_weight="regular",label:_label="",linkTo:linkTo,...props})=>{const renderTag=()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TagWrapper,{hoverColor:"primary",enableHover:!!linkTo,size:_size},_icon&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,Object.assign({icon:_icon,size:_size,weight:_weight},props)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextContainer$3,null,_label));return linkTo?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink$1,{to:linkTo},renderTag()):renderTag()};let _t$19;const TagListWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$19||(_t$19=(t=>t)`
  display: flex;
  ${0} {
    margin-right: 10px;
    margin-bottom: 6px;
    flex-shrink: 0;
  }
  flex-wrap: wrap;
`),TagWrapper),TagList=({tagsConfig:tagsConfig})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TagListWrapper,null,tagsConfig.map((tagProps,index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag,Object.assign({key:"tag-"+index},tagProps)))),DebouncedSearcher=({onDebouncedChange:_onDebouncedChange=(()=>{}),defaultValue:defaultValue,...props})=>{const[typedValue,setTypedValue]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue||""),debounceChange=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(lodash_debounce__WEBPACK_IMPORTED_MODULE_27___default()(newValue=>updateChange(newValue),600)).current,updateChange=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue=>{_onDebouncedChange(newValue)},[_onDebouncedChange]),updateTyped=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{const newValue=e.currentTarget.value;setTypedValue(newValue),debounceChange(newValue)},[debounceChange]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{defaultValue&&setTypedValue(defaultValue)},[defaultValue]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BasicSearchInput,Object.assign({},props,{onChange:updateTyped,value:typedValue}))};const defaultContext$1={sendNotification:()=>console.log("This is the context initialization should not appear")},NotificationContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(defaultContext$1),notificationList=[],NotificationProvider=({children:children})=>{const[activeNotification,setActiveNotification]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),showNotification=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{const nextNotification=notificationList.shift();if(!nextNotification)return;const displayedNotification={...nextNotification,closeCallback:()=>{nextNotification.closeCallback&&nextNotification.closeCallback(),setActiveNotification(null),showNotification()}};setActiveNotification(displayedNotification)},[]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationContext.Provider,{value:{sendNotification:async newNotification=>{const validNotification={message:newNotification.message,type:newNotification.type};newNotification.actionTextButton&&(validNotification.actionTextButton=newNotification.actionTextButton),newNotification.onTextButtonClick&&(validNotification.onTextButtonClick=newNotification.onTextButtonClick),newNotification.closeCallback&&(validNotification.closeCallback=newNotification.closeCallback),newNotification.isPinned&&(validNotification.isPinned=newNotification.isPinned),notificationList.push(validNotification),1===notificationList.length&&null===activeNotification&&showNotification()}}},activeNotification?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Notification,Object.assign({},activeNotification)):null,children)},useNotification=()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(NotificationContext);function useMediaQuery(query){const[matches,setMatches]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{const mediaQuery=window.matchMedia(query);setMatches(mediaQuery.matches);const handler=event=>setMatches(event.matches);return mediaQuery.addEventListener("change",handler),()=>mediaQuery.removeEventListener("change",handler)},[]),matches}function useBreakpoints(){const breakpoints={isSmall:useMediaQuery(deviceMediaQuery.small),isMedium:useMediaQuery(deviceMediaQuery.medium),isLarge:useMediaQuery(deviceMediaQuery.large),isXLarge:useMediaQuery(deviceMediaQuery.xlarge),isXXLarge:useMediaQuery(deviceMediaQuery.xxlarge),activeScreen:"small"};return breakpoints.isSmall&&(breakpoints.activeScreen="small"),breakpoints.isMedium&&(breakpoints.activeScreen="medium"),breakpoints.isLarge&&(breakpoints.activeScreen="large"),breakpoints.isXLarge&&(breakpoints.activeScreen="xlarge"),breakpoints.isXXLarge&&(breakpoints.activeScreen="xxlarge"),breakpoints}let _t$1a,_t2$13,_t3$V,_t4$O,_t5$J,_$1a=t=>t;const Container$P=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1a||(_t$1a=_$1a``)),Title$5=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$13||(_t2$13=_$1a`
  text-shadow: 0 0 10px hsla(0, 0%, 100%, 0.8);
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: hsl(210, 6%, 47%);
`)),MessageBox$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$V||(_t3$V=_$1a`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  color: hsl(200, 1%, 49%);
  margin: 28px 0;
`)),StyledButton$5=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(Button)(_t4$O||(_t4$O=_$1a`
  margin-left: 10px;
`)),ButtonsGroup$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$J||(_t5$J=_$1a`
  text-align: right;
`)),ConfirmationModal=({title:_title="",message:_message="",leftButtonText:_leftButtonText="submit",leftButtonDesign:_leftButtonDesign="primary",leftButtonCallback:_leftButtonCallback=(()=>{}),rightButtonDesign:_rightButtonDesign="secondary",rightButtonText:_rightButtonText="cancel",rightButtonCallback:_rightButtonCallback=(()=>{})})=>{const{setModalOpen:setModalOpen}=useModal();return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$P,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title$5,null,_title),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MessageBox$1,null,_message),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonsGroup$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton$5,{design:_leftButtonDesign,onClick:()=>{_leftButtonCallback(),setModalOpen(!1)}},_leftButtonText),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton$5,{design:_rightButtonDesign,onClick:()=>{_rightButtonCallback(),setModalOpen(!1)}},_rightButtonText)))};let _t$1b,_t2$14,_t3$W,_t4$P,_t5$K,_t6$y,_$1b=t=>t;const Layout=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1b||(_t$1b=_$1b`
  display: flex;
  flex-direction: row;
  height: 100%;
`)),MobileLayout=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$14||(_t2$14=_$1b``)),MainContainer=(styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$W||(_t3$W=_$1b`
  padding: ${0};
  flex: 1;
  overflow: auto;

  & > div {
    max-width: 1400px;
  }

  ${0}
`),({padBottom:_padBottom=!0})=>_padBottom?"70px 90px":"70px 90px 0",({maxWidth:maxWidth})=>maxWidth&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$P||(_t4$P=_$1b`
      & > div {
        max-width: ${0};
      }
    `),maxWidth)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$K||(_t5$K=_$1b`
  flex: 1;
  display: flex;
  flex-direction: column;
`))),ContentArea=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$y||(_t6$y=_$1b`
  flex: 1;
  width: 100%;
  padding: ${0};
  margin-left: auto;
  margin-right: auto;

  @media ${0} {
    padding: ${0};
  }

  @media ${0} {
    max-width: ${0};
    padding: ${0};
  }
`),({paddingOverride:paddingOverride})=>paddingOverride||"40px 20px",deviceMediaQuery.medium,({paddingOverride:paddingOverride})=>paddingOverride||"40px",deviceMediaQuery.large,({maxWidth:maxWidth})=>maxWidth||"1200px",({paddingOverride:paddingOverride})=>paddingOverride||"70px 90px");let _t$1c,_t2$15,_t3$X,_t4$Q,_t5$L,_t6$z,_t7$v,_t8$s,_t9$m,_t10$i,_t11$d,_t12$8,_t13$6,_t14$5,_t15$4,_t16$3,_t17$3,_t18$2,_t19$2,_t20$2,_t21$2,_$1c=t=>t;const ContextTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1c||(_t$1c=_$1c`
  opacity: 0;

  ${0}

  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$15||(_t2$15=_$1c`
    transition: opacity ${0} ${0};
  `),theme.animation.speed.fast,theme.animation.easing.primary.easeInOut),({compact:compact})=>compact&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$X||(_t3$X=_$1c`
    font-size:14px;
  `))),ContextIcon=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$Q||(_t4$Q=_$1c`
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
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t5$L||(_t5$L=_$1c`
    ${0};
    transition: background ${0} ${0};
  `),theme.styles.global.mainMenu.iconBackground.default,theme.animation.speed.fast,theme.animation.easing.primary.easeInOut)),ContextIndicator=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$z||(_t6$z=_$1c`
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

`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t7$v||(_t7$v=_$1c`
    transition: opacity 0 ${0};
  `),theme.animation.easing.primary.easeInOut)),ContextActionBaseCSS=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$s||(_t8$s=_$1c`
  -webkit-tap-highlight-color: transparent;
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
`)),StyledAnchor=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.a(_t9$m||(_t9$m=_$1c`
  display: flex;
  text-decoration: none;
`)),ExternalIconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10$i||(_t10$i=_$1c`
  margin-left: 15px;
`)),ContextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t11$d||(_t11$d=_$1c`
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
`),ContextActionBaseCSS,({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t12$8||(_t12$8=_$1c`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.menuItem.default),({$menuOpen:$menuOpen})=>$menuOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t13$6||(_t13$6=_$1c`
  ${0}{
    opacity: 1;
  }
`),ContextTitle),ContextIcon,({theme:theme})=>theme.styles.global.mainMenu.iconBackground.hover,IconWrapper,({theme:theme})=>theme.colors.icons.inverse),ContextActionA=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t14$5||(_t14$5=_$1c`
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
`),ContextActionBaseCSS,({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t15$4||(_t15$4=_$1c`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.menuItem.default),({$menuOpen:$menuOpen})=>$menuOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t16$3||(_t16$3=_$1c`
    ${0}{
      opacity: 1;
    }
  `),ContextTitle),ContextIcon,({theme:theme})=>theme.styles.global.mainMenu.iconBackground.hover,IconWrapper,({theme:theme})=>theme.colors.icons.inverse,({$isActive:$isActive})=>$isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t17$3||(_t17$3=_$1c`
    ${0},
    &:hover ${0}{
      ${0};
    }
  `),ContextIcon,ContextIcon,({theme:theme})=>theme.styles.global.mainMenu.iconBackground.active)),ContextActionButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t18$2||(_t18$2=_$1c`
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
`),ContextActionBaseCSS,({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t19$2||(_t19$2=_$1c`
    font-family: ${0};
    ${0};
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.menuItem.default),({menuOpen:menuOpen,theme:theme})=>menuOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t20$2||(_t20$2=_$1c`
    ${0}{
      opacity: 1;
    }

    ${0}{
      opacity: 1;
      transition: opacity ${0} ${0} ${0};
    }
  `),ContextTitle,ContextIndicator,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,theme.animation.speed.fast),ContextIcon,({theme:theme})=>theme.styles.global.mainMenu.iconBackground.hover,IconWrapper,({theme:theme})=>theme.colors.icons.inverse,({isActive:isActive})=>isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t21$2||(_t21$2=_$1c`
    ${0},
    &:hover ${0}{
      ${0};
    }
  `),ContextIcon,ContextIcon,({theme:theme})=>theme.styles.global.mainMenu.iconBackground.active)),ContextItem=({hasSubmenu:_hasSubmenu=!1,contextKey:_contextKey=-1,submenuOpen:submenuOpen,menuOpen:menuOpen,title:title,href:href,icon:icon,compact:compact,isActive:isActive,isExternalLink:isExternalLink,onClickCallback:onClickCallback})=>{const internal=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextIcon,Object.assign({},{compact:compact}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:icon,color:isActive?"inverse":"dimmed",size:20})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextTitle,Object.assign({},{compact:compact}),title),_hasSubmenu?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextIndicator,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:submenuOpen?"Up":"Down",color:"dimmed"})):null);return _hasSubmenu?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextActionButton,{menuOpen:menuOpen,isActive:isActive,onClick:()=>onClickCallback&&onClickCallback(_contextKey)},internal):isExternalLink?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAnchor,{href:href,target:"_blank"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextWrapper,{$menuOpen:menuOpen},internal,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExternalIconWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"ExternalLink",color:"dimmed",size:12})))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextActionA,{$menuOpen:menuOpen,to:href||"#",$isActive:isActive,onClick:()=>onClickCallback&&onClickCallback(_contextKey)},internal)},menuReducer=(state,action)=>{switch(action.type){case"SET_MENU":{const openMenu=localStorage.getItem(window.location.hostname+"_isMenuOpen");let isMenuOpen="true"===openMenu,isMenuPinned="true"===openMenu,canPin=!1;return(action.data.canAlwaysPin||action.data.defaultMenuOpen&&"xlarge"===action.data.desktopSize)&&(canPin=!0),"xxlarge"===action.data.desktopSize&&!1===action.data.canAlwaysPin?(isMenuOpen=!0,isMenuPinned=!0):"xxlarge"===action.data.desktopSize&&(isMenuOpen=action.data.defaultMenuOpen,isMenuPinned=!1),{...state,desktopSize:action.data.desktopSize,isMenuOpen:isMenuOpen,isMenuPinned:isMenuPinned,canPin:canPin}}case"SET_OPEN":return!0===state.isMenuOpen?state:"xxlarge"!==state.desktopSize||state.canPin?{...state,isMenuOpen:!0}:state;case"SET_CLOSE":return!1===state.isMenuOpen?state:"xxlarge"!==state.desktopSize||state.canPin?!0===state.isMenuPinned?state:{...state,isMenuOpen:!1}:state;case"TOGGLE_PIN":{if(!state.canPin)return state;let isMenuOpen=!0;return state.isMenuPinned?(localStorage.setItem(window.location.hostname+"_isMenuOpen","false"),isMenuOpen=!1):localStorage.setItem(window.location.hostname+"_isMenuOpen","true"),{...state,isMenuOpen:isMenuOpen,isMenuPinned:!state.isMenuPinned}}default:return console.error(`Action ${action.type} not registered.`),state}},menuState={desktopSize:"large",isMenuPinned:!1,isMenuOpen:!1,canPin:!1},useMenu=(defaultMenuOpen,canAlwaysPin)=>{const{activeScreen:activeScreen}=useBreakpoints(),[state,dispatch]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(menuReducer,menuState),setMenu=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((defaultMenuOpen,canAlwaysPin,desktopSize)=>{dispatch({type:"SET_MENU",data:{defaultMenuOpen:defaultMenuOpen,desktopSize:desktopSize,canAlwaysPin:canAlwaysPin}})},[]),setMenuOpen=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{dispatch({type:"SET_OPEN"})},[]),setMenuClose=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{dispatch({type:"SET_CLOSE"})},[]),togglePinned=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{dispatch({type:"TOGGLE_PIN"})},[]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{setMenu(defaultMenuOpen,canAlwaysPin,activeScreen)},[activeScreen,defaultMenuOpen,canAlwaysPin,setMenu]),{menuState:state,setMenuOpen:setMenuOpen,setMenuClose:setMenuClose,togglePinned:togglePinned}};let _t$1d,_t2$16,_t3$Y,_t4$R,_t5$M,_t6$A,_t7$w,_t8$t,_t9$n,_t10$j,_t11$e,_t12$9,_t13$7,_t14$6,_t15$5,_$1d=t=>t;const Submenu=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.ul(_t$1d||(_t$1d=_$1d`
  display: block;
  position: relative;
  margin-left: 40px;
  padding: 0;

`)),SubmenuHeader=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$16||(_t2$16=_$1d`
  display: block;
  height: 40px;
  margin-left: 40px;
`)),SubmenuItemTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.span(_t3$Y||(_t3$Y=_$1d`
  display: block;
  ${0};

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$R||(_t4$R=_$1d`
    font-family: ${0};
    ${0}
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.subheader)),SubmenuItemLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t5$M||(_t5$M=_$1d`
  ${0};
  display: block;
`),resetButtonStyles),ExternalIconWrapper$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$A||(_t6$A=_$1d`
  margin-left: 15px;
`)),SubmenuItemAnchor=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.a(_t7$w||(_t7$w=_$1d`
  ${0};
  display: flex;
  align-items: center;
`),resetButtonStyles),SubmenuItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.li(_t8$t||(_t8$t=_$1d`
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

  ${0}, ${0}{

    ${0};



  }
`),({theme:{colors:colors}})=>colors.divider,SubmenuItemLink,SubmenuItemAnchor,({theme:theme,isActive:isActive})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$n||(_t9$n=_$1d`
      font-family: ${0};
      ${0};

      &:hover {
        ${0};
      }

      ${0}

    `),theme.fontFamily.ui,theme.typography.global.mainMenu.subItem.default,theme.typography.global.mainMenu.subItem.hover,isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t10$j||(_t10$j=_$1d`
        &, &:hover {
          ${0};
        }
      `),theme.typography.global.mainMenu.subItem.active))),SubmenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t11$e||(_t11$e=_$1d`
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

`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t12$9||(_t12$9=_$1d`
    transition:
      max-height ${0} ${0},
      opacity ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.fast,theme.animation.easing.primary.easeOut),({theme:{colors:colors}})=>colors.divider),ContextContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t13$7||(_t13$7=_$1d`
  min-height: ${0};
  width: inherit;

  ${0}{
    max-height: 0;
    opacity: 0;
  }
  ${0};

  ${0};

`),({minHeight:minHeight})=>minHeight?minHeight+"px":"70px",SubmenuContainer,({open:open,maxHeight:maxHeight,theme:theme})=>open&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t14$6||(_t14$6=_$1d`
    ${0}{
      transition:
        max-height ${0} ${0},
        opacity ${0} ${0};
      max-height: ${0}px !important;
      opacity: 1;
    }
  `),SubmenuContainer,theme.animation.speed.normal,theme.animation.easing.primary.easeOut,theme.animation.speed.fast,theme.animation.easing.primary.easeOut,maxHeight),({loading:loading})=>"true"===loading&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t15$5||(_t15$5=_$1d`
    ${0}{
      max-height: none !important;
      opacity: 1;
    }
  `),SubmenuContainer)),NavigationItem=({item:item,menuOpen:menuOpen,submenuOpen:submenuOpen,contextKey:contextKey,loading:loading,topLevelPath:topLevelPath,minHeight:minHeight,onClickCallback:onClickCallback,readyCallback:readyCallback})=>{const{icon:icon,title:title,href:href,submenu:submenu,isExternalLink:isExternalLink}=item,isActive=topLevelPath===href,refSubmenu=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[submenuHeight,setSubmenuHeight]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),submenus=generateSubmenus(submenu,onClickCallback)||[],hasSubmenu=submenus.length>0;return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{refSubmenu&&refSubmenu.current&&0!==refSubmenu.current.clientHeight&&setSubmenuHeight(refSubmenu.current.clientHeight),readyCallback&&readyCallback(contextKey)},[refSubmenu,setSubmenuHeight,readyCallback,contextKey]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextContainer,{open:submenuOpen,loading:loading?"true":"false",maxHeight:submenuHeight,minHeight:minHeight},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextItem,Object.assign({},{title:title,href:href,isActive:isActive,icon:icon,hasSubmenu:hasSubmenu,isExternalLink:isExternalLink,submenuOpen:submenuOpen,menuOpen:menuOpen,onClickCallback:onClickCallback,contextKey:contextKey})),hasSubmenu?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmenuContainer,{ref:refSubmenu},submenus):null)},generateSubmenus=(submenu,onClickCallback)=>{if(!submenu)return;let grouping=[],output=[];return grouping.push([]),submenu.forEach((item,key)=>{const{title:title,href:href,isExternalLink:isExternalLink}=item;href?isExternalLink?grouping[grouping.length-1].push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmenuItem,{key:key,isActive:!1},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmenuItemAnchor,{href:href,target:"_blank"},title,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExternalIconWrapper$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"ExternalLink",color:"dimmed",size:10}))))):grouping[grouping.length-1].push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmenuItem,{key:key,isActive:!1},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmenuItemLink,{to:href,onClick:()=>onClickCallback&&onClickCallback(-1)},title))):(grouping[grouping.length-1].length>1&&grouping.push([]),grouping[grouping.length-1].push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmenuHeader,{key:key},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmenuItemTitle,null,title))))}),grouping.forEach((group,key)=>{output.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Submenu,{key:key},group))}),output};let _t$1e,_t2$17,_t3$Z,_t4$S,_t5$N,_t6$B,_t7$x,_t8$u,_t9$o,_t10$k,_t11$f,_t12$a,_t13$8,_t14$7,_t15$6,_$1e=t=>t;const Logo=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t$1e||(_t$1e=_$1e`
  height: 50px;
  margin: 0 20px 55px 15px;
  display: flex;

  object {
    pointer-events: none;
  }
`)),LogoMark=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$17||(_t2$17=_$1e`
  height: 50px;
  flex: 0 0 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

`)),LogoType=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$Z||(_t3$Z=_$1e`
  opacity: 0;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`)),SVGObject=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.object(_t4$S||(_t4$S=_$1e``)),SVGObjectText=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.object(_t5$N||(_t5$N=_$1e`
  max-width: 180px;
`)),NavigationContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$B||(_t6$B=_$1e``)),MenuFooter=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$x||(_t7$x=_$1e`
  ${0};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`),({theme:theme})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$u||(_t8$u=_$1e`
    ${0}
  `),theme.styles.global.mainMenu.footerBackground)),FooterItemContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t9$o||(_t9$o=_$1e`
  min-height: 70px;
`)),PushContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10$k||(_t10$k=_$1e`
  position: relative;
  height: 100%;
  ${0};
`),({theme:theme,isPinned:isPinned})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t11$f||(_t11$f=_$1e`
    width: ${0};
  `),isPinned?theme.dimensions.global.mainMenu.width.open:theme.dimensions.global.mainMenu.width.closed)),Container$Q=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t12$a||(_t12$a=_$1e`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  ${0}

  box-sizing: border-box;
  height: 100%;
  padding: 20px 0 0 0;
  overflow: hidden;
`),({theme:theme,open:open,desktopSize:desktopSize})=>theme&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t13$8||(_t13$8=_$1e`
    ${0}
    ${0};
    width: ${0};
    border-right: 1px solid ${0};

    ${0}{
      transition: opacity ${0} ${0};
      opacity: ${0};
    }
  `),theme.styles.global.mainMenu.background,"xxlarge"===desktopSize?"":Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t14$7||(_t14$7=_$1e`
      transition: width ${0} ${0}
      `),theme.animation.speed.normal,theme.animation.easing.primary.easeOut),open?theme.dimensions.global.mainMenu.width.open:theme.dimensions.global.mainMenu.width.closed,theme.styles.global.mainMenu.lines.backgroundColor,LogoType,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,open?1:0)),ContainerInner=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t15$6||(_t15$6=_$1e`
  width: ${0};
  display: flex;
  flex-direction: column;
  height: 100%;
`),({theme:theme})=>theme.dimensions.global.mainMenu.width.open),MainMenu=({content:content,home:_home="/",logoMark:logoMark,logoText:logoText,keepOpenText:_keepOpenText="Keep Open",autoHideText:_autoHideText="Auto-Hide",supportUrl:supportUrl,defaultMenuOpen:_defaultMenuOpen=!0,canAlwaysPin:_canAlwaysPin=!1})=>{const{menuState:menuState,setMenuOpen:setMenuOpen,setMenuClose:setMenuClose,togglePinned:togglePinned}=useMenu(_defaultMenuOpen,_canAlwaysPin),[focusedContext,setFocusedContext]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),[loading,setLoading]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),location=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_30__.h)();let checkedInItems=0;const autoMenuOpen=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{"touch"!==e.pointerType&&setMenuOpen()},[setMenuOpen]),autoMenuClose=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setMenuClose()},[setMenuClose]),toggleMenuPin=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e=>{"touch"!==e.pointerType&&togglePinned()},[togglePinned]),setFocusedContextCb=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(contextKey=>{-1!==contextKey&&setFocusedContext(focusedContext!==contextKey?contextKey:-1)},[setFocusedContext,focusedContext]),readyCallback=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{checkedInItems++,checkedInItems===content.items.length&&setLoading(!1)},[checkedInItems,content]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PushContainer,{isPinned:menuState.isMenuPinned},react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$Q,{open:menuState.isMenuOpen,desktopSize:menuState.desktopSize,onPointerEnter:menuState.isMenuPinned?()=>{}:autoMenuOpen,onTouchStart:()=>console.log("touch"),onMouseLeave:menuState.isMenuPinned?()=>{}:autoMenuClose},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContainerInner,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo,{to:_home},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoMark,null,logoMark?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SVGObject,{type:"image/svg+xml",data:logoMark}):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgLogoMark,null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoType,null,logoText?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SVGObjectText,{type:"image/svg+xml",data:logoText}):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgLogoText,null))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavigationContainer,null,content.items.map((item,key)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavigationItem,Object.assign({topLevelPath:getTopLevelPath(location.pathname),key:key,contextKey:key,menuOpen:menuState.isMenuOpen,submenuOpen:key===focusedContext&&menuState.isMenuOpen,onClickCallback:setFocusedContextCb},{item:item,loading:loading,focusedContext:focusedContext,readyCallback:readyCallback})))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuFooter,null,supportUrl&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterItemContainer,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextItem,{compact:!0,isActive:!1,icon:"Question",title:"Help & Support",href:supportUrl,menuOpen:menuState.isMenuOpen})),menuState.canPin?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterItemContainer,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextItem,{compact:!0,isActive:!1,icon:menuState.isMenuOpen&&menuState.isMenuPinned?"Left":"Menu",title:menuState.isMenuPinned?_keepOpenText:_autoHideText,onClickCallback:toggleMenuPin,menuOpen:menuState.isMenuOpen})):null))),document.body))};let _t$1f,_t2$18,_t3$_,_t4$T,_t5$O,_t6$C,_t7$y,_t8$v,_t9$p,_t10$l,_t11$g,_t12$b,_t13$9,_t14$8,_t15$7,_t16$4,_$1f=t=>t;const DrawerTop=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1f||(_t$1f=_$1f``)),DrawerBottom=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$18||(_t2$18=_$1f`
  ${0};
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$_||(_t3$_=_$1f`
    width: 100%;
    position: fixed;
    bottom: 50px;

    @media ${0} {
      position: static;
      bottom: 0;
    }
  `),theme.deviceMediaQuery.large)),DrawerHeader=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.h2(_t4$T||(_t4$T=_$1f`
  ${0};
  padding: 0;
  margin: 0 0 5px;
`),({theme:theme})=>theme.typography.global.mainMenu.subheader),CurrentUser=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$O||(_t5$O=_$1f`
  padding: 20px 20px 15px;

  ${0};
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t6$C||(_t6$C=_$1f`
    border-bottom: ${0} 1px solid;
    ${0};
  `),theme.colors.divider,theme.typography.global.mainMenu.identity)),UserOptions=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$y||(_t7$y=_$1f`
  padding: 20px 20px 10px 20px;
  border-bottom: ${0} 1px solid;
`),({theme:{colors:colors}})=>colors.divider),Logout=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$v||(_t8$v=_$1f`
    padding: 0 20px;
`)),LinkMenu=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.ul(_t9$p||(_t9$p=_$1f`
  padding: 0;
  margin: 12px 0 0 0;
  list-style: none;
`)),LinkMenuItem=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.li(_t10$l||(_t10$l=_$1f`
  padding: 10px 0;
`)),IconWrapper$3=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t11$g||(_t11$g=_$1f`
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
`)),LinkMenuItemA=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t12$b||(_t12$b=_$1f`
  ${0};
  display: block;
  width: 100%;

  ${0};

  ${0};
`),resetButtonStyles,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t13$9||(_t13$9=_$1f`
    ${0};

    &:hover {
      ${0};
    }
  `),theme.typography.global.mainMenu.subItem.default,theme.typography.global.mainMenu.subItem.hover),({theme:theme,isActive:isActive})=>isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t14$8||(_t14$8=_$1f`
    &, &:hover {
      ${0};
    }
  `),theme.typography.global.mainMenu.subItem.active)),LanguageMenu=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t15$7||(_t15$7=_$1f`
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
`),resetButtonStyles,({theme:theme})=>theme.fontFamily.ui,({theme:{colors:colors}})=>colors.divider,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t16$4||(_t16$4=_$1f`
    ${0};
    &:hover { ${0}; }
    &:active { ${0}; }
  `),theme.typography.global.mainMenu.subItem.default,theme.typography.global.mainMenu.subItem.hover,theme.typography.global.mainMenu.subItem.active)),UserMenu=({hasLanguage:_hasLanguage=!1,hasLogout:_hasLogout=!0,logoutLink:_logoutLink="/logout",logoutText:_logoutText="Logout",hasCurrentUser:_hasCurrentUser=!0,currentUserText:_currentUserText="Current User",accountOptionText:_accountOptionText="Account Options",userSubmenu:_userSubmenu=[],userDrawerBespoke:userDrawerBespoke,loggedInUser:loggedInUser,onLogout:_onLogout=(()=>{}),onLanguageToggle:_onLanguageToggle=(()=>{}),closeOnClick:closeOnClick})=>{const logoutHandler=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async e=>{e.preventDefault(),await _onLogout(),window.location.assign(_logoutLink),closeOnClick&&closeOnClick()},[closeOnClick,_logoutLink,_onLogout]),handleCloseWhenClick=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{closeOnClick&&closeOnClick()},[closeOnClick]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DrawerTop,null,_hasCurrentUser?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CurrentUser,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DrawerHeader,null,_currentUserText),loggedInUser):null,_userSubmenu.length>0?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserOptions,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DrawerHeader,null,_accountOptionText),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkMenu,null,_userSubmenu.map(({text:text,href:href},index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkMenuItem,{key:index},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkMenuItemA,{to:href,onClick:handleCloseWhenClick},text))))):null,userDrawerBespoke||null,_hasLogout?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logout,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkMenu,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkMenuItem,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkMenuItemA,{onClick:logoutHandler,to:_logoutLink},_logoutText)))):null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DrawerBottom,null,_hasLanguage&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LanguageMenu,{onClick:_onLanguageToggle},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapper$3,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Language",size:18,color:"dimmed"})),"Language / 言語")))};let _t$1g,_t2$19,_t3$$,_t4$U,_t5$P,_t6$D,_t7$z,_t8$w,_$1g=t=>t;const Container$R=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1g||(_t$1g=_$1g`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 20px 12px 20px;
  height: 122px;
`)),ImgWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$19||(_t2$19=_$1g`
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
`)),EmptyImg=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$$||(_t3$$=_$1g`
  background-color: hsl(210, 22%, 91%);
  width: 100%;
  height: 100%;
`)),Image$3=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$U||(_t4$U=_$1g`
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
`),p=>p.image,p=>p.image?"block":"none"),InfoContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$P||(_t5$P=_$1g`
  margin-left: 20px;
`)),Title$6=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$D||(_t6$D=_$1g`
  font-size: 16px;
  font-weight: 500;
  color: hsl(0, 0%, 34%);
`)),Message=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$z||(_t7$z=_$1g`
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  color: hsl(0, 0%, 34%);
  margin: 4px 0;
  height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
`)),TimeMsg=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t8$w||(_t8$w=_$1g`
  font-size: 13px;
  font-weight: 500;
  color: hsl(0, 0%, 67%);
  margin-top: 15px;
`)),NotificationItem=({imgUrl:imgUrl,title:title,message:message,time:time})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$R,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgWrapper,null,imgUrl?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image$3,{image:imgUrl}):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyImg,null)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoContainer,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title$6,null,title),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Message,null,message),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeMsg,null,time)));let _t$1h,_t2$1a,_t3$10,_$1h=t=>t;const Container$S=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1h||(_t$1h=_$1h`
  display: flex;
  flex-direction: column;
`)),StatusContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.h2(_t2$1a||(_t2$1a=_$1h`
    text-transform: uppercase;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: hsl(0, 0%, 34%);
    border-bottom: ${0} 1px solid;
    margin: 0;
`),({theme:theme})=>theme.colors.divider),NotificationWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$10||(_t3$10=_$1h`
  border-bottom: ${0} 1px solid;
`),({theme:{colors:colors}})=>colors.divider),renderNotifications=(items,type)=>items.map((item,index)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationWrapper,{key:`alert-${type}-${index}`},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationItem,Object.assign({},item)))),NotificationsHistory=({read:read,unread:unread,noNotificationsText:_noNotificationsText="No new notifications",readNotificationsText:_readNotificationsText="New",unreadNotificationsText:_unreadNotificationsText="Read"})=>0===read.length&&0===unread.length?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$S,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatusContainer,null,_noNotificationsText)):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$S,null,unread&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatusContainer,null,_readNotificationsText),renderNotifications(unread,"unread")),read&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatusContainer,null,_unreadNotificationsText),renderNotifications(read,"read")));let _t$1i,_t2$1b,_t3$11,_t4$V,_t5$Q,_t6$E,_t7$A,_t8$x,_t9$q,_t10$m,_t11$h,_t12$c,_t13$a,_t14$9,_$1i=t=>t;const Container$T=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1i||(_t$1i=_$1i`
  z-index: 9;
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${0}
`),({theme:theme,theme:{colors:colors}})=>colors&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$1b||(_t2$1b=_$1i`
    border-bottom: ${0} 1px solid;
    box-shadow: 5px 7px 10px 0 hsla(205, 16%, 77%, 0.1);
    background-color:${0};
  `),colors.divider,theme.styles.global.mainMenu.background.backgroundColor)),SearchBar=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$11||(_t3$11=_$1i`
  margin-left: 25px;
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`)),IconWrapper$4=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$V||(_t4$V=_$1i`
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
`)),SearchInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.input(_t5$Q||(_t5$Q=_$1i`
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
`),({theme:theme})=>theme.fontFamily.data,({theme:{typography:typography}})=>typography.global.topBar.search.value,({theme:{typography:typography}})=>typography.global.topBar.search.placeholder),ButtonArea=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$E||(_t6$E=_$1i`
  height: inherit;
  padding-right: 10px;
  display: flex;
`)),DrawerToggle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button.attrs({type:"button"})(_t7$A||(_t7$A=_$1i`
  width: 60px;
  margin: 0 5px;
  height: inherit;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  ${0};

  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t8$x||(_t8$x=_$1i`
    border-bottom: 5px solid ${0};

    &:hover {
      border-bottom-color: ${0};
    }

    transition: border ${0} ${0};
  `),theme.colors.menu.indicator,theme.colors.menu.hover,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut),({isActive:isActive,theme:theme})=>isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t9$q||(_t9$q=_$1i`
    &, &:hover {
      border-bottom-color: ${0};
    }
  `),theme.colors.menu.active)),DrawerPortalWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t10$m||(_t10$m=_$1i``)),Drawer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t11$h||(_t11$h=_$1i`
  font-family: ${0};

  position: fixed;
  right: -10px;
  top: 65px;
  bottom: 0;
  background: ${0};
  border-left: ${0} 1px solid;
  width: ${0};
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${0};

  ${0}
`),({theme:theme})=>theme.fontFamily.ui,({theme:theme})=>theme.styles.global.mainMenu.background,({theme:{colors:colors}})=>colors.divider,({baseWidth:baseWidth})=>baseWidth||"200px",({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t12$c||(_t12$c=_$1i`
    transition:
      opacity ${0} ${0},
      right ${0} ${0};
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,theme.animation.speed.normal,theme.animation.easing.primary.easeInOut),({isOpen:isOpen})=>isOpen&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t13$a||(_t13$a=_$1i`
    right: 0;
    opacity: 1;
    visibility: visible;
  `))),NotificationsContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t14$9||(_t14$9=_$1i`
    overflow-y: scroll;
    margin-right: -17px;
`)),TopBar=({hasNotifications:_hasNotifications=!1,hasLanguage:_hasLanguage=!1,hasLogout:_hasLogout=!0,logoutLink:_logoutLink="/logout",logoutText:_logoutText="Logout",hasSearch:_hasSearch=!1,hasCurrentUser:_hasCurrentUser=!0,currentUserText:_currentUserText="Current User",accountOptionText:_accountOptionText="Account Options",searchPlaceholder:_searchPlaceholder="Search for devices, analysis tasks, etc.",userSubmenu:_userSubmenu=[],userDrawerBespoke:userDrawerBespoke,loggedInUser:loggedInUser,notificationsHistory:notificationsHistory,customDrawer:customDrawer,onLogout:_onLogout=(()=>{}),onLanguageToggle:_onLanguageToggle=(()=>{})})=>{const[openDrawer,setOpenDrawer]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),toggleDrawers=drawerKey=>{setOpenDrawer(prevDrawer=>prevDrawer===drawerKey?null:drawerKey)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$T,null,_hasSearch?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchBar,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapper$4,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Search",size:18,color:"dimmed"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchInput,{placeholder:_searchPlaceholder})):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonArea,null,customDrawer&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DrawerToggle,{isActive:"custom"===openDrawer,onClick:()=>toggleDrawers("custom")},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatusIcon,Object.assign({},customDrawer))),_hasNotifications&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DrawerToggle,{isActive:"notifications"===openDrawer,onClick:()=>toggleDrawers("notifications")},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"Notifications",size:18,color:"dimmed"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DrawerToggle,{isActive:"user"===openDrawer,onClick:()=>toggleDrawers("user")},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"UserProfile",size:18,color:"dimmed"}))),react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DrawerPortalWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Drawer,{isOpen:"user"===openDrawer},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserMenu,Object.assign({},{hasLanguage:_hasLanguage,hasLogout:_hasLogout,logoutLink:_logoutLink,logoutText:_logoutText,hasCurrentUser:_hasCurrentUser,currentUserText:_currentUserText,accountOptionText:_accountOptionText,userSubmenu:_userSubmenu,userDrawerBespoke:userDrawerBespoke,loggedInUser:loggedInUser,onLogout:_onLogout,onLanguageToggle:_onLanguageToggle}))),_hasNotifications?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Drawer,{isOpen:"notifications"===openDrawer,baseWidth:"300px"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationsContainer,null,notificationsHistory?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationsHistory,Object.assign({},notificationsHistory)):null)):null,customDrawer&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Drawer,{isOpen:"custom"===openDrawer,baseWidth:customDrawer.width?customDrawer.width:"200px"},customDrawer.customComponent)),document.body))},TabContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({selected:"",setSelected:()=>{}}),Tabs=({children:children})=>{const[selected,setSelected]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabContext.Provider,{value:{selected:selected,setSelected:setSelected}},children)};let _t$1j;const TabListWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1j||(_t$1j=(t=>t)`
  display: flex;
  flex-direction: row;
`)),TabList=({children:children,defaultTabId:defaultTabId})=>{const{setSelected:setSelected}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabContext);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setSelected(defaultTabId)},[defaultTabId,setSelected]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabListWrapper,null,children)};let _t$1k,_t2$1c,_t3$12,_$1k=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1k||(_t$1k=_$1k`
  margin-right: 39px;
  display: flex;
  align-items: center;
  line-height: 20px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.label(_t2$1c||(_t2$1c=_$1k`
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
  flex-shrink: 0;
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$12||(_t3$12=_$1k`
    font-family: ${0};
  `),theme.fontFamily.ui),({active:active})=>active?"600":"500",({active:active})=>active?"#0097ce":"#787878",({active:active})=>active?"2px solid #0097ce":"2px solid transparent");let _t$1l;const Container$U=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1l||(_t$1l=(t=>t)`
`)),TabContent=({children:children,tabId:tabId,...props})=>{const{selected:selected}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabContext);return selected===tabId?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$U,Object.assign({},props),children):null};let _t$1m,_t2$1d,_t3$13,_t4$W,_$1m=t=>t;const Container$V=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t$1m||(_t$1m=_$1m`
  ${0}
  flex-basis: auto;
  flex-grow: 1;
`),resetButtonStyles),LinkTab=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$1d||(_t2$1d=_$1m`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

  ${0};

  ${0}
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$13||(_t3$13=_$1m`
    transition: border ${0} ${0};
    border-bottom: 5px solid ${0};

    ${0} {
      [stroke]{
        stroke: ${0};
      }
    }

    &:hover {
      border-bottom-color: ${0};
      ${0} {
        [stroke]{
          stroke: ${0};
        }
      }
    }
  `),theme.animation.speed.normal,theme.animation.easing.primary.easeInOut,theme.colors.menu.indicator,IconWrapper,theme.colors.icons.dimmed,theme.colors.menu.hover,IconWrapper,theme.colors.menu.hover),({isActive:isActive,theme:theme})=>isActive&&Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t4$W||(_t4$W=_$1m`
    &, &:hover {
      border-bottom-color: ${0};
      ${0} {
        [stroke]{
          stroke: ${0};
        }
      }
    }
  `),theme.colors.menu.active,IconWrapper,theme.colors.menu.active)),MobileTab=({tabFor:tabFor,icon:icon,closeId:closeId,counter:counter,status:status,...props})=>{const{selected:selected,setSelected:setSelected}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabContext),onChangeTab=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(tabId=>{setSelected(selected===tabId?closeId:tabId)},[closeId,selected,setSelected]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$V,Object.assign({},props,{onClick:()=>onChangeTab(tabFor)}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTab,{isActive:selected===tabFor},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StatusIcon,Object.assign({},{icon:icon,status:status,counter:counter}))))};let _t$1n,_t2$1e,_t3$14,_t4$X,_t5$R,_t6$F,_$1n=t=>t;const Container$W=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1n||(_t$1n=_$1n`
  display: flex;
  align-items: center;
  margin-right: 22px;
  padding-bottom: 7px;
  height: 60px;
  cursor: pointer;

  ${0};
  ${0} {
    margin-left: 2px;
    flex-shrink: 0;
  }
`),({active:active})=>active?Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$1e||(_t2$1e=_$1n`
    border-bottom: 3px solid hsl(196, 100%, 40%);
    `)):Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$14||(_t3$14=_$1n`
    border-bottom: 3px solid transparent;
  `)),IconWrapper),Title$7=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$X||(_t4$X=_$1n`
  font-size: 14px;
  font-family: ${0};
  letter-spacing: 0.09px;
  font-weight: 500;
  color: ${0};
  margin-bottom: 5px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`),({theme:theme})=>theme.fontFamily.ui,({active:active})=>active?"hsl(196, 100%, 40%)":"hsl(0, 0%, 46%)"),SubTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$R||(_t5$R=_$1n`
  font-size: 12px;
  font-family: ${0};
  font-style: italic;
  color: hsla(195, 10%, 52%, 0.72);
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`),({theme:theme})=>theme.fontFamily.data),TextGroup$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$F||(_t6$F=_$1n`
  margin-left: 12px;
  margin-right: 20px;
`)),TabWithIcon=({icon:icon,title:title,subtitle:subtitle,tabFor:tabFor,...props})=>{const{selected:selected,setSelected:setSelected}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabContext),onChangeTab=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(tabId=>{setSelected(tabId)},[setSelected]),active=selected===tabFor;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$W,Object.assign({},{active:active},props,{onClick:()=>onChangeTab(tabFor)}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,Object.assign({},{icon:icon},{weight:"regular",size:15,color:active?"primary":"dimmed"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextGroup$1,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title$7,Object.assign({},{active:active}),title),subtitle&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubTitle,null,subtitle)))};let _t$1o,_t2$1f,_$1o=t=>t;const Container$X=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1o||(_t$1o=_$1o``)),TabListWrapper$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$1f||(_t2$1f=_$1o`
  padding-top: 10px;
  padding-left: ${0};
  box-shadow: 0 -5px 5px 0 hsla(0, 0%, 0%, 0.01);
  border-bottom: 1px solid hsl(0, 0%, 89%);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`),({paddingLeft:paddingLeft})=>paddingLeft||"87px"),TabsWithIconBar=({defaultTabId:defaultTabId,tabList:tabList,paddingLeft:paddingLeft})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$X,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tabs,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabListWrapper$1,Object.assign({},{paddingLeft:paddingLeft}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabList,Object.assign({},{defaultTabId:defaultTabId}),tabList.map(({icon:icon,title:title,subtitle:subtitle,tabFor:tabFor})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabWithIcon,Object.assign({key:"tabWithIcon-"+tabFor},{icon:icon,title:title,subtitle:subtitle,tabFor:tabFor}))))),tabList.map(({tabFor:tabFor,customComponent:customComponent})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabContent,{key:"TabContent-"+tabFor,tabId:tabFor},customComponent))));let _t$1p,_t2$1g,_t3$15,_t4$Y,_$1p=t=>t;const StyledButton$6=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.button(_t$1p||(_t$1p=_$1p`
  ${0}

  ${0};
  
  height: ${0}px;
  position: fixed;
  bottom: 0;
  font-size: 14px;
  outline: none;

  width: 100%;
  text-align: center;
  white-space: nowrap;
  padding: 0 40px;

`),resetButtonStyles,({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t2$1g||(_t2$1g=_$1p`
    font-family: ${0};
    ${0};
    ${0};
    border-top: 1px solid ${0};
  `),theme.fontFamily.ui,theme.typography.global.mainMenu.menuItem.default,theme.styles.global.mainMenu.background,theme.colors.divider),50),IconContainer$2=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$15||(_t3$15=_$1p`
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 20px;

  svg {
    display:block;
  }
`)),TextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$Y||(_t4$Y=_$1p`
  text-transform: uppercase;
`)),CloseButton$1=({closeId:closeId,closeText:_closeText="CLOSE MENU",...props})=>{const{setSelected:setSelected}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabContext);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton$6,Object.assign({onClick:()=>setSelected(closeId)},props),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconContainer$2,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon,{icon:"CloseCompact",color:"dimmed",size:16})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextWrapper,null,_closeText))};let _t$1q,_t2$1h,_$1q=t=>t;const Container$Y=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1q||(_t$1q=_$1q`
  position: relative;
  min-height: calc(100vh - ${0}px);
  width: 100%;
  overflow-y: scroll;
`),118),ContentWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$1h||(_t2$1h=_$1q`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`)),MobileNavbarContent=({closeId:closeId,children:children})=>{const{selected:selected}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabContext);return selected===closeId?null:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$Y,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper,null,children))};let _t$1r,_t2$1i,_t3$16,_$1r=t=>t;const Container$Z=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1r||(_t$1r=_$1r``)),ItemWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$1i||(_t2$1i=_$1r`
  padding: 14px 0;
  ${0};
`),({theme:theme})=>Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(_t3$16||(_t3$16=_$1r`
    border-bottom: 1px solid ${0}
  `),theme.colors.divider)),MobileMenu=({content:content,supportUrl:supportUrl,closeId:closeId})=>{const[loading,setLoading]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),[focusedContext,setFocusedContext]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),location=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_30__.h)();let checkedInItems=0;const{setSelected:setSelected}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabContext),setFocusedContextCb=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(contextKey=>{-1!==contextKey&&content.items[contextKey].submenu||setSelected(closeId),-1!==contextKey&&setFocusedContext(focusedContext!==contextKey?contextKey:-1)},[closeId,content.items,focusedContext,setSelected]),readyCallback=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{checkedInItems++,checkedInItems===content.items.length&&setLoading(!1)},[checkedInItems,content.items.length]),handleCloseMenu=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setSelected(closeId)},[closeId,setSelected]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$Z,null,content.items.map((item,key)=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemWrapper,{key:key,"data-key":key},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavigationItem,Object.assign({minHeight:30,topLevelPath:getTopLevelPath(location.pathname),contextKey:key,menuOpen:!0,submenuOpen:key===focusedContext,onClickCallback:setFocusedContextCb},{item:item,loading:loading,focusedContext:focusedContext,readyCallback:readyCallback})))),supportUrl&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemWrapper,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContextItem,{compact:!0,isActive:!1,icon:"Question",title:"Help & Support",href:supportUrl,menuOpen:!0,onClickCallback:handleCloseMenu})))};let _t$1s,_t2$1j,_t3$17,_$1s=t=>t;const Logo$1=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t$1s||(_t$1s=_$1s`
  ${0};
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  object {
    pointer-events: none;
    height: 25px;
  }
`),resetButtonStyles),LogoMark$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$1j||(_t2$1j=_$1s`
  margin-right: 15px;
`)),SVGObject$1=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.object(_t3$17||(_t3$17=_$1s``)),MobileLogoLink=({home:_home="/",logoMark:logoMark,closeId:closeId})=>{const{setSelected:setSelected}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabContext);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo$1,{to:_home,onClick:()=>setSelected(closeId)},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoMark$1,null,logoMark?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SVGObject$1,{type:"image/svg+xml",data:logoMark}):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgLogoMark,null)))};let _t$1t;const Container$_=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1t||(_t$1t=(t=>t)`
  background: ${0};
  z-index: 100;
  display: flex;
  flex-direction: column;
`),({theme:theme})=>theme.styles.global.mainMenu.background),MobileUserMenu=({closeId:closeId,hasLanguage:hasLanguage,hasLogout:hasLogout,logoutLink:logoutLink,hasCurrentUser:hasCurrentUser,userSubmenu:userSubmenu,userDrawerBespoke:userDrawerBespoke,loggedInUser:loggedInUser,onLogout:onLogout,onLanguageToggle:onLanguageToggle})=>{const{setSelected:setSelected}=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TabContext),handleCloseMenu=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{setSelected(closeId)},[closeId,setSelected]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$_,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserMenu,Object.assign({},{hasLanguage:hasLanguage,hasLogout:hasLogout,logoutLink:logoutLink,hasCurrentUser:hasCurrentUser,userSubmenu:userSubmenu,userDrawerBespoke:userDrawerBespoke,loggedInUser:loggedInUser,onLogout:onLogout,onLanguageToggle:onLanguageToggle},{closeOnClick:handleCloseMenu})))};let _t$1u,_t2$1k,_$1u=t=>t;const CLOSE_ID="closeMenu",Container$$=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.nav(_t$1u||(_t$1u=_$1u`
  background-color: ${0};
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`),({theme:theme})=>theme.styles.global.mainMenu.background.backgroundColor),HeaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$1k||(_t2$1k=_$1u`
  display: flex;
  flex-direction: row;
  height: ${0}px;
  border-bottom: ${0} 1px solid;

  ${0} {
    flex-basis: 0;
    flex-grow: 3;
  }
`),68,({theme:theme})=>theme.colors.divider,TabListWrapper),MobileNavbar=({content:content,home:home,logoMark:logoMark,supportUrl:supportUrl,defaultMenuOpen:_defaultMenuOpen=!0,closeText:closeText,hasLanguage:hasLanguage,hasLogout:hasLogout,logoutLink:logoutLink,hasCurrentUser:hasCurrentUser,hasNotifications:hasNotifications,userSubmenu:userSubmenu,userDrawerBespoke:userDrawerBespoke,loggedInUser:loggedInUser,notificationsHistory:notificationsHistory,customDrawer:customDrawer,onLogout:onLogout,onLanguageToggle:onLanguageToggle})=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container$$,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tabs,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderContainer,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileLogoLink,Object.assign({},{home:home,logoMark:logoMark},{closeId:CLOSE_ID})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabList,{defaultTabId:CLOSE_ID},customDrawer&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileTab,Object.assign({},customDrawer,{tabFor:"custom",closeId:CLOSE_ID})),hasNotifications?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileTab,{tabFor:"notifications",icon:"Notifications",closeId:CLOSE_ID}):null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileTab,{tabFor:"user",icon:"UserProfile",closeId:CLOSE_ID}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileTab,{tabFor:"menu",icon:"Menu",closeId:CLOSE_ID}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileNavbarContent,{closeId:CLOSE_ID},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabContent,{tabId:"custom"},customDrawer&&customDrawer.customComponent),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabContent,{tabId:"notifications"},notificationsHistory&&hasNotifications?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationsHistory,Object.assign({},notificationsHistory)):null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabContent,{tabId:"user"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileUserMenu,Object.assign({},{hasLanguage:hasLanguage,hasLogout:hasLogout,logoutLink:logoutLink,hasCurrentUser:hasCurrentUser,userSubmenu:userSubmenu,userDrawerBespoke:userDrawerBespoke,loggedInUser:loggedInUser,onLogout:onLogout,onLanguageToggle:onLanguageToggle},{closeId:CLOSE_ID}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabContent,{tabId:"menu"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileMenu,Object.assign({},{content:content,supportUrl:supportUrl,defaultMenuOpen:_defaultMenuOpen},{closeId:CLOSE_ID}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CloseButton$1,Object.assign({},{closeText:closeText},{closeId:CLOSE_ID}))))),GlobalUI=({content:content,home:home,openWidth:openWidth,logoMark:logoMark,logoText:logoText,supportUrl:supportUrl,defaultMenuOpen:defaultMenuOpen,canAlwaysPin:canAlwaysPin,paddingOverride:paddingOverride,maxWidth:maxWidth,children:children,...props})=>{const{isLarge:isLarge}=useBreakpoints();return isLarge?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainMenu,Object.assign({},{content:content,home:home,openWidth:openWidth,logoMark:logoMark,logoText:logoText,supportUrl:supportUrl,defaultMenuOpen:defaultMenuOpen,canAlwaysPin:canAlwaysPin})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainContainer,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopBar,Object.assign({},{...props})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentArea,Object.assign({},{maxWidth:maxWidth,paddingOverride:paddingOverride}),children))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileLayout,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileNavbar,Object.assign({},{content:content,home:home,logoMark:logoMark,supportUrl:supportUrl,defaultMenuOpen:defaultMenuOpen,...props})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentArea,null,children))};let _t$1v,_t2$1l,_t3$18,_t4$Z,_t5$S,_t6$G,_t7$B,_t8$y,_t9$r,_$1v=t=>t;styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t$1v||(_t$1v=_$1v`
  width: 286px;
  border-right: 1px solid hsla(0, 0%, 84%, 50%);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t2$1l||(_t2$1l=_$1v`
  height: 84px;
  color: hsl(205, 7%, 35%);
  border-bottom: 1px solid hsla(0, 0%, 84%, 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 15px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t3$18||(_t3$18=_$1v`
  height: 31px;
  font-family: Monorale;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: 4.5px;
  text-align: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t4$Z||(_t4$Z=_$1v`
  height: 19px;
  font-family: Monorale;
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 14.11px;
  text-align: center;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t5$S||(_t5$S=_$1v`
  position: relative;
  border-bottom: 1px solid hsla(0, 0%, 84%, 50%);
  padding: 22px 20px 21px 20px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t6$G||(_t6$G=_$1v`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
  margin-bottom: 18px;
`)),styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_t7$B||(_t7$B=_$1v`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t8$y||(_t8$y=_$1v`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
`)),Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.d)(react_router_dom__WEBPACK_IMPORTED_MODULE_29__.a)(_t9$r||(_t9$r=_$1v`
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
`))},45:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/placeholder.8af7ef66.jpg"},533:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_GlobalUI",(function(){return _GlobalUI}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(45),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(33),_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(264),_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_6__),_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(265),_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_7__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2);__webpack_exports__.default={title:"Global",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.x,decorators:[]};var Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n"]))),Welcome=function Welcome(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Welcome",introductionText:"Thanks for using our UI library."}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"What is Lorem Ipsum?",introductionText:"\n        Lorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n        It has survived not only five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with the release of\n        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n        software like Aldus PageMaker including versions of Lorem Ipsum.\n      "}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Why do we use it?",introductionText:"\n        It is a long established fact that a reader will be distracted by the readable content\n        of a page when looking at its layout. The point of using Lorem Ipsum is that it has\n        a more-or-less normal distribution of letters, as opposed to using 'Content here,\n        content here', making it look like readable English. Many desktop publishing packages\n        and web page editors now use Lorem Ipsum as their default model text, and a search for\n        'lorem ipsum' will uncover many web sites still in their infancy. Various versions have\n        evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)\n      "}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Where does it come from?",introductionText:'\n          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece\n          of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,\n          a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure\n          Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word\n          in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections\n          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by\n          Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during\n          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line\n          in section 1.10.32.\n      '}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Where can I get some?",introductionText:"\n        There are many variations of passages of Lorem Ipsum available, but the majority\n        have suffered alteration in some form, by injected humour, or randomised words which\n        don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,\n        you need to be sure there isn't anything embarrassing hidden in the middle of text. All the\n        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making\n        this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,\n        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks\n        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected\n        humour, or non-characteristic words etc.\n      "}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Example",introductionText:"\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      "}))},About=function About(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"About",introductionText:"We are a team dedicated to create components to make building UI easier."})},Team=function Team(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Team",introductionText:"We are a team dedicated to create components to make building UI easier."})},Contact=function Contact(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Contact",introductionText:"Please leave us a message"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.eb,{name:"message",label:"message",fieldState:"default"}))},Company=function Company(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Company",introductionText:"We are a team dedicated to create components to make building UI easier."})},Accounts=function Accounts(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Accounts",introductionText:"Here is a list of accounts"})},Billing=function Billing(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Billing",introductionText:"Information about your billing"})},Payments=function Payments(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Payments",introductionText:"Information of Payments"})},Service=function Service(route){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Service ".concat(route.match.params.name),introductionText:"Excelling at this service."})},Support=function Support(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Support",introductionText:"Call 00000000"})},columnConfig=[{header:"Start time",groupTitle:"Time",sortable:!1,cellStyle:"normalImportance"},{header:"Job Created At",groupTitle:"Time",sortable:!1,cellStyle:"normalImportance"},{header:"Run Time",groupTitle:"Time",sortable:!1,cellStyle:"normalImportance"},{header:"Status",groupTitle:"Meta",sortable:!1,cellStyle:"normalImportance"},{header:"Details",groupTitle:"Meta",sortable:!1,cellStyle:"normalImportance"}],rows=[{id:"row1",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_3___default.a},columns:[{text:"2020/06/11 - 16:00"},{customComponent:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{fontStyle:"italic"}},"Just Now")},{text:"00:00:12"},{text:"Complete"},{text:"Green"}]},{id:"row2",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_3___default.a},columns:[{text:"2020/06/11 - 13:00"},{text:"2020/06/11 - 17:30"},{text:"00:00:12"},{text:"Complete"},{text:"Black"}]},{id:"row3",header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_3___default.a},columns:[{text:"2020/05/10 - 05:30"},{text:"2020/05/10 - 12:30"},{text:"00:00:12"},{text:"Complete"},{text:"Pink"}]}],TablePage=function TablePage(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.J,{title:"Table Example",introductionText:"This is an example to verify that the sidebar with table"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.hb,{columnConfig:columnConfig,rows:rows,selectable:!0,hasThumbnail:!0,hasHeaderGroups:!0}))},ComponentLinks=function ComponentLinks(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.d,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/welcome",component:Welcome}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/company",component:Company}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/company/about",component:About}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/company/team",component:Team}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/company/contact",component:Contact}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/company/table-example",component:TablePage}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/support",component:Support}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/user/accounts",component:Accounts}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/user/billing",component:Billing}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{exact:!0,path:"/user/payments",component:Payments}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.b,{path:"/services/:name",component:Service}))},allNotifications={unread:[{imgUrl:"",title:"Event Type",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now"},{imgUrl:"",title:"Device is off",message:"The device has correctly turn off",time:"1 min ago"},{imgUrl:"",title:"Device is on",message:"The device has correctly turn on",time:"6 mins ago"},{imgUrl:"",title:"Connection was interrupted",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago"},{imgUrl:"",title:"Device is off",message:"The device has correctly turn off",time:"3 hour ago"}],read:[{imgUrl:"",title:"Device is off",message:"The device has correctly turn off",time:"3 days ago"},{imgUrl:"",title:"Device is on",message:"The device has correctly turn on",time:"3 days ago"},{imgUrl:"",title:"A new device was added",message:"The device has bean correctly added",time:"3 days ago"}],noNotificationsText:"No new notifications",readNotificationsText:"New",unreadNotificationsText:"Read"},customDrawer={customComponent:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"Hello Drawer"),icon:"Add",status:"danger",width:"280px;"},_GlobalUI=function _GlobalUI(){var maxWidth=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Max width","1200px"),paddingOverride=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Padding Override","70px 90px"),loggedInUser=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Logged In User","full.name@example.com"),hasSearch=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.boolean)("Has Search",!0),hasLogout=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.boolean)("Has Logout",!0),hasNotifications=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.boolean)("Has Notifications",!0),hasLanguage=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.boolean)("Has Language",!0),hasCurrentUser=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.boolean)("Has Current User",!0),currentUserText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Current User Text","Current User"),logoutLink=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Logout Url","#"),logoutText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Logout Text","Logout"),accountOptionText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Account Options Text","Account Options"),searchPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Search Placeholder","Search area names, etc."),logoMark=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Logo Mark SVG",_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_6___default.a),logoText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Logo Text SVG",_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_7___default.a),supportUrl=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Support Url","/support"),menuHomeLink=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.text)("Home Link","/welcome"),canAlwaysPin=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.boolean)("Can Always Pin",!0),defaultMenuOpen=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.boolean)("Default menu open",!1),menuConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.object)("Menu Config",{items:[{icon:"Home",title:"Welcome",href:"/welcome"},{icon:"Detection",title:"Company",href:"/company",submenu:[{title:"About us",href:"/company/about"},{title:"Team",href:"/company/team"},{title:"Contact",href:"/company/contact"},{title:"Table Example",href:"/company/table-example"},{icon:"Language",title:"External link",href:"https://www.google.com/",isExternalLink:!0}]},{icon:"Usage",title:"Services",href:"/services",submenu:[{title:"Online Services"},{title:"Service custom",href:"/services/custom"},{title:"Service special",href:"/services/special"},{title:"Service extra special",href:"/services/extra-special"},{title:"On site Services"},{title:"Service special",href:"/services/special"},{title:"Service extra special",href:"/services/extra-special"}]},{icon:"Zone",title:"External link",href:"https://www.google.com/maps",isExternalLink:!0}]}),userSubmenu=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.object)("Submenu",[{text:"Accounts",href:"/user/accounts"},{text:"Billing",href:"/user/billing"},{text:"Payments",href:"/user/payments"}]),notificationsHistory=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.object)("Notifications History",allNotifications);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_2__.x,{content:menuConfig,home:menuHomeLink,defaultMenuOpen:defaultMenuOpen,canAlwaysPin:canAlwaysPin,logoMark:logoMark,logoText:logoText,supportUrl:supportUrl,maxWidth:maxWidth,paddingOverride:paddingOverride,notificationsHistory:notificationsHistory,customDrawer:customDrawer,loggedInUser:loggedInUser,userSubmenu:userSubmenu,hasSearch:hasSearch,hasLogout:hasLogout,hasNotifications:hasNotifications,logoutLink:logoutLink,logoutText:logoutText,searchPlaceholder:searchPlaceholder,hasLanguage:hasLanguage,hasCurrentUser:hasCurrentUser,currentUserText:currentUserText,accountOptionText:accountOptionText},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComponentLinks,null)))};_GlobalUI.__docgenInfo={description:"",methods:[],displayName:"_GlobalUI"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Global/GlobalUI.stories.tsx"]={name:"_GlobalUI",docgenInfo:_GlobalUI.__docgenInfo,path:"src/stories/Global/GlobalUI.stories.tsx"})},534:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_MainMenu",(function(){return _MainMenu}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(264),_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2__),_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(265),_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2);__webpack_exports__.default={title:"Global",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.E,decorators:[]};var _MainMenu=function _MainMenu(){var logoMark=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Logo Mark SVG",_assets_logo_mark_svg__WEBPACK_IMPORTED_MODULE_2___default.a),logoText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Logo Text SVG",_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_3___default.a),canAlwaysPin=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)("Can Always Pin",!1),keepOpenText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Keep Open","Keep Open"),autoHideText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Auto-Hide","Auto-Hide"),supportUrl=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Support Url","#"),menuHomeLink=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Home Link","#"),menuConfig=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)("Menu Config",{items:[{icon:"Invalid",title:"Basic Item",href:"#"},{icon:"Detection",title:"External Link",href:"https://futurestandard.co.jp/",isExternalLink:!0},{icon:"PasswordShow",title:"With Children",href:"/",submenu:[{title:"Child One",href:"/"},{title:"Child Two",href:"#"},{title:"Child Three",href:"#"},{title:"Child with external link",href:"https://www.google.com/",isExternalLink:!0}]},{icon:"Success",title:"Grouped Children",href:"#",submenu:[{title:"Subheader"},{title:"Nested Child One",href:"#"},{title:"Nested Child Two",href:"#"},{title:"Nested Child Three",href:"#"},{title:"Subheader Two"},{title:"Nested Child Four",href:"#"},{title:"Nested Child Five",href:"#"}]}]});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.D,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_1__.E,{content:menuConfig,home:menuHomeLink,logoMark:logoMark,logoText:logoText,supportUrl:supportUrl,canAlwaysPin:canAlwaysPin,keepOpenText:keepOpenText,autoHideText:autoHideText}))};_MainMenu.__docgenInfo={description:"",methods:[],displayName:"_MainMenu"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Global/MainMenu.stories.tsx"]={name:"_MainMenu",docgenInfo:_MainMenu.__docgenInfo,path:"src/stories/Global/MainMenu.stories.tsx"})},535:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_TopBar",(function(){return _TopBar}));var _templateObject,_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(_templateObject||(_templateObject=Object(_Users_isamac_Dev_FS_scorer_ui_kit_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n"])));__webpack_exports__.default={title:"Global",component:scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.gb,decorators:[]};var drawerProps={customComponent:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"Hello Drawer"),icon:"Add",status:"danger",width:"300px;"},allNotifications={unread:[{imgUrl:"",title:"Event Type",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now"},{imgUrl:"",title:"Device is off",message:"The device has correctly turn off",time:"1 min ago"},{imgUrl:"",title:"Device is on",message:"The device has correctly turn on",time:"6 mins ago"},{imgUrl:"",title:"Connection was interrupted",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago"},{imgUrl:"",title:"Device is off",message:"The device has correctly turn off",time:"3 hour ago"}],read:[{imgUrl:"",title:"Device is off",message:"The device has correctly turn off",time:"3 days ago"},{imgUrl:"",title:"Device is on",message:"The device has correctly turn on",time:"3 days ago"},{imgUrl:"",title:"A new device was added",message:"The device has bean correctly added",time:"3 days ago"}],noNotificationsText:"NO NEW NOTIFICATIONS",readNotificationsText:"NEW",unreadNotificationsText:"READ"},_TopBar=function _TopBar(){var loggedInUser=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Logged In User","full.name@example.com"),hasSearch=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has Search",!0),hasLogout=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has Logout",!0),hasNotifications=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has Notifications",!0),hasLanguage=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has Language",!0),hasCurrentUser=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has Current User",!0),logoutLink=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Logout Url","#"),searchPlaceholder=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Search Placeholder","Search area names, etc."),currentUserText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Current User Text","Current User"),logoutText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Logout Text","Logout"),userSubmenu=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Submenu",[{text:"Accounts",href:"#"},{text:"Billing",href:"#"},{text:"Payments",href:"#"}]),notificationsHistory=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Notifications History",allNotifications);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_4__.gb,{loggedInUser:loggedInUser,userSubmenu:userSubmenu,hasSearch:hasSearch,hasLogout:hasLogout,hasNotifications:hasNotifications,logoutLink:logoutLink,searchPlaceholder:searchPlaceholder,hasLanguage:hasLanguage,hasCurrentUser:hasCurrentUser,notificationsHistory:notificationsHistory,currentUserText:currentUserText,logoutText:logoutText,customDrawer:drawerProps}))};_TopBar.__docgenInfo={description:"",methods:[],displayName:"_TopBar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Global/TopBar.stories.tsx"]={name:"_TopBar",docgenInfo:_TopBar.__docgenInfo,path:"src/stories/Global/TopBar.stories.tsx"})},555:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Thin.8a6b4530.ttf"},556:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Light.0f73589a.ttf"},557:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Regular.c5eb5440.ttf"},558:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Lato-Bold.2d15decc.ttf"},559:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Thin.ad1820a1.woff"},560:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ThinItalic.70996eb1.woff"},561:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraLight.70e5cc38.woff"},562:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraLightItalic.311e1eef.woff"},563:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Light.86013ad2.woff"},564:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-LightItalic.71ba3bad.woff"},565:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Regular.fbd50651.woff"},566:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Italic.fe48f5fa.woff"},567:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Medium.91605ea0.woff"},568:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-MediumItalic.62d7429d.woff"},569:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-SemiBold.a914a148.woff"},57:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"g",(function(){return sortDataBy})),__webpack_require__.d(__webpack_exports__,"f",(function(){return rowMaker})),__webpack_require__.d(__webpack_exports__,"e",(function(){return filterByStatus})),__webpack_require__.d(__webpack_exports__,"d",(function(){return filterByPrice})),__webpack_require__.d(__webpack_exports__,"c",(function(){return filterByName})),__webpack_require__.d(__webpack_exports__,"a",(function(){return filterByCreationDate})),__webpack_require__.d(__webpack_exports__,"b",(function(){return filterByCreationDatePicker}));var scorer_ui_kit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(45),_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_1__),sortDataBy=function sortDataBy(unsortedData,columnId,ascending){return unsortedData.sort((function(itemA,itemB){var valueA=itemA[columnId],valueB=itemB[columnId];return valueA&&valueB?valueA>valueB?ascending?1:-1:ascending?-1:1:0}))},rowMaker=function rowMaker(rowData){return rowData.map((function(_ref){var id=_ref.id,deviceName=_ref.deviceName,deviceLink=_ref.deviceLink,status=_ref.status,statusText=_ref.statusText,created=_ref.created,totalTime=_ref.totalTime,usage=_ref.usage,usageUnit=_ref.usageUnit,cost=_ref.cost,yenCost="¥".concat(cost);return{id:id,header:{image:_assets_placeholder_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,icon:"Location",status:status},columns:[{text:deviceName,href:deviceLink},{text:statusText,status:status},{text:created.toDateString()},{text:totalTime},{text:"".concat(usage),unit:usageUnit},{text:yenCost}]}}))},filterByStatus=function filterByStatus(data,filterVal){var newData=[];return Array.isArray(filterVal)?filterVal.forEach((function(_ref2){var value=_ref2.value;data.forEach((function(sample){sample.status===value&&newData.push(sample)}))})):Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_0__.jb)(filterVal)&&data.forEach((function(sample){sample.status===filterVal.value&&newData.push(sample)})),newData},filterByPrice=function filterByPrice(data,filterVal){return Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_0__.jb)(filterVal)?data.filter((function(sample){return sample.cost<=filterVal.value})):data},filterByName=function filterByName(data,filterVal){return Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_0__.jb)(filterVal)?data.filter((function(sample){return sample.deviceName.toLowerCase().includes(filterVal.text.toLocaleLowerCase())})):data},filterByCreationDate=function filterByCreationDate(data,filterVal){return Object(scorer_ui_kit__WEBPACK_IMPORTED_MODULE_0__.jb)(filterVal)?data.filter((function(sample){return sample.created.toDateString().toLowerCase().includes(filterVal.text.toLocaleLowerCase())})):data},filterByCreationDatePicker=function filterByCreationDatePicker(data,filterVal){return filterVal instanceof Date?data.filter((function(sample){return sample.created<filterVal})):data.filter((function(sample){return sample.created>filterVal.start&&sample.created<filterVal.end}))}},570:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-SemiBoldItalic.62a3bd14.woff"},571:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Bold.62804d53.woff"},572:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-BoldItalic.14f46724.woff"},573:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraBold.33432f37.woff"},574:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-ExtraBoldItalic.e652eed8.woff"},575:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-Black.d079d5df.woff"},576:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Monorale-BlackItalic.fab097e0.woff"},581:function(module,exports,__webpack_require__){__webpack_require__(582),__webpack_require__(739),__webpack_require__(740),__webpack_require__(899),__webpack_require__(911),__webpack_require__(913),__webpack_require__(921),__webpack_require__(934),module.exports=__webpack_require__(1188)},649:function(module,exports){},740:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(297)},89:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return sleep})),__webpack_require__.d(__webpack_exports__,"a",(function(){return emptyCallbackForStory}));var sleep=function sleep(delay){return new Promise((function(resolve){return setTimeout(resolve,delay)}))},emptyCallbackForStory=function emptyCallbackForStory(fn){return fn.toString=function(){return"() => {}"},fn}},934:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(96),_clientLogger=__webpack_require__(53),_configFilename=__webpack_require__(1244);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))}},[[581,1,2]]]);
//# sourceMappingURL=main.cddcfd81fa235ef62ab2.bundle.js.map