"use strict";(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[112],{"./ui/elements/Alert/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pg:()=>ALERT_TYPES_ENUM,i:()=>ALERT_VARIANTS_ENUM,Ay:()=>Alert_Alert});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./ui/elements/AlertBanner/utils.ts"),Button=__webpack_require__("./ui/elements/Button/index.ts"),ButtonGroup=__webpack_require__("./ui/elements/Button/ButtonGroup.tsx"),IconButton=__webpack_require__("./ui/elements/Button/IconButton.tsx"),Icon=__webpack_require__("./ui/elements/Icon/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var StyledAlertContainer=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    ","\n    min-height: var(--spacing-48px, 48px);\n    align-items: flex-start;\n    border-radius: var(--spacing-8px, 8px);\n    border: var(--spacing-1px, 1px) solid ",";\n    background: ",";\n    padding: var(--spacing-12px, 12px);\n    gap: var(--spacing-20px, 20px);\n"])),(function(_ref){var maxWidth=_ref.maxWidth;return maxWidth&&"max-width: ".concat(maxWidth,";")}),(function(_ref2){return _ref2.borderColor}),(function(_ref3){return _ref3.backgroundColor})),StyledAlertBody=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: var(--spacing-4px, 4px);\n    margin-right: var(--spacing-4px, 4px);\n    flex: 1 0 0;\n\n    ",";\n"])),(function(_ref4){return _ref4.inlineButtons&&(0,styled_components_browser_esm.AH)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n            flex-direction: row;\n            align-items: flex-start;\n        "])))})),StyledAlertContent=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: var(--spacing-4px, 4px);\n"]))),StyledAlertTitle=styled_components_browser_esm.Ay.h2(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    align-self: stretch;\n    color: ",";\n    font-size: var(--font-size-14px, 14px);\n    font-weight: var(--font-weight-semibold, 600);\n    line-height: 160%;\n    letter-spacing: 0.014px;\n    margin: 0;\n"])),(function(_ref5){return _ref5.textColor})),StyledAlertDescription=styled_components_browser_esm.Ay.div(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    align-self: stretch;\n    color: ",";\n    font-size: var(--font-size-14px, 14px);\n    font-weight: var(--font-weight-medium, 500);\n    line-height: 160%;\n    letter-spacing: 0.1px;\n    margin-bottom: var(--spacing-4px, 4px);\n"])),(function(_ref6){return _ref6.textColor}));function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var ALERT_TYPES_ENUM=function(ALERT_TYPES_ENUM){return ALERT_TYPES_ENUM.DEFAULT="default",ALERT_TYPES_ENUM.OUTLINED="outlined",ALERT_TYPES_ENUM.FILLED="filled",ALERT_TYPES_ENUM}({}),ALERT_VARIANTS_ENUM=function(ALERT_VARIANTS_ENUM){return ALERT_VARIANTS_ENUM.PRIMARY="primary",ALERT_VARIANTS_ENUM.SUCCESS="success",ALERT_VARIANTS_ENUM.WARNING="warning",ALERT_VARIANTS_ENUM.ERROR="error",ALERT_VARIANTS_ENUM.DEFAULT="default",ALERT_VARIANTS_ENUM}({}),ALERT_VARIANTS=(ALERT_VARIANTS_ENUM.WARNING,ALERT_VARIANTS_ENUM.ERROR,[ALERT_VARIANTS_ENUM.PRIMARY,ALERT_VARIANTS_ENUM.SUCCESS,ALERT_VARIANTS_ENUM.WARNING,ALERT_VARIANTS_ENUM.ERROR,ALERT_VARIANTS_ENUM.DEFAULT]),ALERT_TYPES=[ALERT_TYPES_ENUM.DEFAULT,ALERT_TYPES_ENUM.OUTLINED,ALERT_TYPES_ENUM.FILLED];_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_VARIANTS_ENUM.PRIMARY,"info-circle"),ALERT_VARIANTS_ENUM.SUCCESS,"check-circle"),ALERT_VARIANTS_ENUM.WARNING,"exclamation-triangle"),ALERT_VARIANTS_ENUM.ERROR,"exclamation-circle"),ALERT_VARIANTS_ENUM.DEFAULT,"info-circle"),_defineProperty(_defineProperty(_defineProperty({},ALERT_TYPES_ENUM.DEFAULT,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_VARIANTS_ENUM.PRIMARY,{iconColor:"var(--text-brand, #0673F9)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_VARIANTS_ENUM.SUCCESS,{iconColor:"var(--text-success, #007A51)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_VARIANTS_ENUM.WARNING,{iconColor:"var(--text-warning, #DE5A02)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_VARIANTS_ENUM.ERROR,{iconColor:"var(--text-error, #D22D3A)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_VARIANTS_ENUM.DEFAULT,{iconColor:"var(--text-primary, #16191D)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"})),ALERT_TYPES_ENUM.OUTLINED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_VARIANTS_ENUM.PRIMARY,{iconColor:"var(--text-brand, #0673F9)",textColor:"var(--text-brand, #0673F9)",backgroundColor:"var(--bg-brand, #E5F1FF)",borderColor:"var(--border-brand, #94C4FF)"}),ALERT_VARIANTS_ENUM.SUCCESS,{iconColor:"var(--text-success, #007A51)",textColor:"var(--text-success, #007A51)",backgroundColor:"var(--bg-success, #D9FCED)",borderColor:"var(--border-success, #ACF7D3)"}),ALERT_VARIANTS_ENUM.WARNING,{iconColor:"var(--text-warning, #DE5A02)",textColor:"var(--text-warning, #DE5A02)",backgroundColor:"var(--bg-warning, #FFF1E5)",borderColor:"var(--border-warning, #FFD2BA)"}),ALERT_VARIANTS_ENUM.ERROR,{iconColor:"var(--text-error, #D22D3A)",textColor:"var(--text-error, #D22D3A)",backgroundColor:"var(--bg-error, #FFE5E7)",borderColor:"var(--border-error, #FBBBBF)"}),ALERT_VARIANTS_ENUM.DEFAULT,{iconColor:"var(--text-primary, #16191D)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-secondary, #F6F7F9)",borderColor:"var(--border, #E1E5EA)"})),ALERT_TYPES_ENUM.FILLED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_VARIANTS_ENUM.PRIMARY,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-brand, #0673F9)",borderColor:"transparent"}),ALERT_VARIANTS_ENUM.SUCCESS,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-success, #007A51)",borderColor:"transparent"}),ALERT_VARIANTS_ENUM.WARNING,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-warning, #DE5A02)",borderColor:"transparent"}),ALERT_VARIANTS_ENUM.ERROR,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-error, #D22D3A)",borderColor:"transparent"}),ALERT_VARIANTS_ENUM.DEFAULT,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action, #16191D)",borderColor:"transparent"})),_defineProperty(_defineProperty(_defineProperty({},ALERT_TYPES_ENUM.DEFAULT,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_VARIANTS_ENUM.PRIMARY,Button.es.TERTIARY_OUTLINED),ALERT_VARIANTS_ENUM.SUCCESS,Button.es.TERTIARY_OUTLINED),ALERT_VARIANTS_ENUM.WARNING,Button.es.TERTIARY_OUTLINED),ALERT_VARIANTS_ENUM.ERROR,Button.es.TERTIARY_OUTLINED),ALERT_VARIANTS_ENUM.DEFAULT,Button.es.TERTIARY_OUTLINED)),ALERT_TYPES_ENUM.OUTLINED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_VARIANTS_ENUM.PRIMARY,Button.es.PRIMARY_OUTLINED),ALERT_VARIANTS_ENUM.SUCCESS,Button.es.SUCCESS_OUTLINED),ALERT_VARIANTS_ENUM.WARNING,Button.es.WARNING_OUTLINED),ALERT_VARIANTS_ENUM.ERROR,Button.es.DANGER_OUTLINED),ALERT_VARIANTS_ENUM.DEFAULT,Button.es.TERTIARY_OUTLINED)),ALERT_TYPES_ENUM.FILLED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_VARIANTS_ENUM.PRIMARY,Button.es.PRIMARY),ALERT_VARIANTS_ENUM.SUCCESS,Button.es.SUCCESS),ALERT_VARIANTS_ENUM.WARNING,Button.es.WARNING),ALERT_VARIANTS_ENUM.ERROR,Button.es.DANGER),ALERT_VARIANTS_ENUM.DEFAULT,Button.es.SECONDARY));function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Alert=(0,react.forwardRef)((function(props,ref){var type=props.type,variant=props.variant,icon=props.icon,title=props.title,description=props.description,top=props.top,bottom=props.bottom,left=props.left,right=props.right,position=props.position,onClose=props.onClose,showCloseButton=props.showCloseButton,actionButtons=props.actionButtons,maxWidth=props.maxWidth,inlineButtons=props.inlineButtons,id=(0,react.useId)(),iconName=(0,utils.HZ)(icon,variant),_getAlertBannerColors=(0,utils.Ri)(variant,type),iconColor=_getAlertBannerColors.iconColor,textColor=_getAlertBannerColors.textColor,backgroundColor=_getAlertBannerColors.backgroundColor,borderColor=_getAlertBannerColors.borderColor,hasButton=!(null==actionButtons||!actionButtons.length)||showCloseButton;return react.createElement(StyledAlertContainer,{position,top,bottom,left,right,backgroundColor,borderColor,ref,role:"alert","aria-labelledby":"alert-title-".concat(id),"aria-describedby":"alert-description-".concat(id),maxWidth},iconName&&react.createElement(Icon.I,{name:iconName,color:iconColor||"inherit",size:"20"}),react.createElement(StyledAlertBody,{inlineButtons},react.createElement(StyledAlertContent,null,title&&react.createElement(StyledAlertTitle,{textColor,id:"alert-title-".concat(id)},title),description&&react.createElement(StyledAlertDescription,{textColor,id:"alert-description-".concat(id)},description)),hasButton&&react.createElement(ButtonGroup.A,null,null==actionButtons?void 0:actionButtons.map((function(button){return react.createElement(Button.Ay,_extends({},button,{key:button.variant}),button.children)})))),showCloseButton&&react.createElement(IconButton.A,{icon:"close",variant:(0,utils.V8)(variant,type),onClick:onClose,size:"small"}))}));Alert.defaultProps={type:"default",variant:"primary",icon:null,title:"This is an alert",description:"This is a description",top:null,bottom:null,left:null,right:null,position:"static",onClose:void 0,showCloseButton:!1,actionButtons:[],inlineButtons:!1,maxWidth:"440px"},Alert.propTypes={type:prop_types_default().oneOf(ALERT_TYPES),variant:prop_types_default().oneOf(ALERT_VARIANTS),icon:prop_types_default().any,title:prop_types_default().string,description:prop_types_default().string,top:prop_types_default().string,bottom:prop_types_default().string,left:prop_types_default().string,right:prop_types_default().string,position:prop_types_default().oneOf(["static","fixed","absolute","relative"]),onClose:prop_types_default().func,showCloseButton:prop_types_default().bool,actionButtons:prop_types_default().array,inlineButtons:prop_types_default().bool,maxWidth:prop_types_default().string};const Alert_Alert=Alert;try{Alert.displayName="Alert",Alert.__docgenInfo={description:"An alert component is used to display important messages to the user.",displayName:"Alert",props:{type:{defaultValue:{value:"default"},description:"Type of the alert\n\nAvailable choices: `'default'`, `'outlined'`, `'filled'`\n\nDefault: `'default'`",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"filled"'}]}},variant:{defaultValue:{value:"primary"},description:"Variant of the alert\n\nAvailable choices: `'primary'`, `'secondary'`, `'tertiary'`, `'success'`, `'danger'`, `'warning'`\n\nDefault: `'primary'`",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"default"'},{value:'"error"'}]}},icon:{defaultValue:{value:"null"},description:"Alert icon, used to override the default icons used in the alert\n\nUse value `auto` to automatically select the icon based on the variant (error vs checkmark icon)\n\nDefault: `null`",name:"icon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"check"'},{value:'"file"'},{value:'"search"'},{value:'"code"'},{value:'"label"'},{value:'"menu"'},{value:'"video"'},{value:'"circle"'},{value:'"exclamation-circle"'},{value:'"exclamation-triangle"'},{value:'"info-circle"'},{value:'"question-circle"'},{value:'"code-alt"'},{value:'"terminal"'},{value:'"desktop"'},{value:'"gamepad"'},{value:'"lamp"'},{value:'"laptop"'},{value:'"mobile"'},{value:'"archive"'},{value:'"bookmark-fill"'},{value:'"bookmark"'},{value:'"file-alt"'},{value:'"folder-open"'},{value:'"folder"'},{value:'"label-fill"'},{value:'"note"'},{value:'"pen"'},{value:'"pin"'},{value:'"mic-off"'},{value:'"mic"'},{value:'"pause-circle-fill"'},{value:'"pause-circle"'},{value:'"pause"'},{value:'"play-circle-fill"'},{value:'"play-circle"'},{value:'"play"'},{value:'"video-off"'},{value:'"volume-maximum"'},{value:'"volume-minimum"'},{value:'"volume-mute"'},{value:'"heart-fill"'},{value:'"heart"'},{value:'"lock-close"'},{value:'"lock-open"'},{value:'"message-circle"'},{value:'"message-double-question"'},{value:'"message-square-info"'},{value:'"message-square"'},{value:'"milestone"'},{value:'"quiz"'},{value:'"smiley"'},{value:'"spark-fill"'},{value:'"spark"'},{value:'"sparkle"'},{value:'"target"'},{value:'"check-badge"'},{value:'"crown"'},{value:'"flag"'},{value:'"gift"'},{value:'"medal"'},{value:'"star-fill"'},{value:'"star-half-fill"'},{value:'"star"'},{value:'"trophy"'},{value:'"arrow-double"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-up"'},{value:'"bin"'},{value:'"call-end"'},{value:'"call-start"'},{value:'"caret-double"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"caret-up"'},{value:'"check-circle-fill"'},{value:'"check-circle"'},{value:'"check-square-fill"'},{value:'"check-square"'},{value:'"chevron-double-down"'},{value:'"chevron-double-left"'},{value:'"chevron-double-right"'},{value:'"chevron-double-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close-circle-fill"'},{value:'"close-circle"'},{value:'"close-square-fill"'},{value:'"close-square"'},{value:'"close"'},{value:'"download"'},{value:'"forward"'},{value:'"grip-hortizontal"'},{value:'"grip-vertical"'},{value:'"growth-down"'},{value:'"growth-up"'},{value:'"home"'},{value:'"kebab-horizontal"'},{value:'"kebab-vertical"'},{value:'"list"'},{value:'"load"'},{value:'"maximize"'},{value:'"menu-grid"'},{value:'"minimize"'},{value:'"minus-circle-fill"'},{value:'"minus-circle"'},{value:'"minus-square-fill"'},{value:'"minus-square"'},{value:'"moon"'},{value:'"new-tab"'},{value:'"plus-circle-fill"'},{value:'"plus-circle"'},{value:'"plus-square-fill"'},{value:'"plus-square"'},{value:'"plus"'},{value:'"refresh"'},{value:'"reply"'},{value:'"screenshare-start"'},{value:'"screenshare-stop"'},{value:'"settings"'},{value:'"signin"'},{value:'"signout"'},{value:'"square"'},{value:'"sun"'},{value:'"upload"'},{value:'"bell"'},{value:'"calender-check"'},{value:'"calender-plus"'},{value:'"calender"'},{value:'"clock"'},{value:'"rewatch"'},{value:'"stopwatch"'},{value:'"bot"'},{value:'"person-check"'},{value:'"person-plus"'},{value:'"person"'},{value:'"users"'},{value:'"auto"'}]}},title:{defaultValue:{value:"This is an alert"},description:"Alert title",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:{value:"This is a description"},description:"Alert description",name:"description",required:!1,type:{name:"ReactNode"}},top:{defaultValue:{value:"null"},description:"Alert top position, useful for fixed positioning\n\nDefault: `null`",name:"top",required:!1,type:{name:"string"}},bottom:{defaultValue:{value:"null"},description:"Alert bottom position, useful for fixed positioning\n\nDefault: `null`",name:"bottom",required:!1,type:{name:"string"}},left:{defaultValue:{value:"null"},description:"Alert left position, useful for fixed positioning\n\nDefault: `null`",name:"left",required:!1,type:{name:"string"}},right:{defaultValue:{value:"null"},description:"Alert right position, useful for fixed positioning\n\nDefault: `null`",name:"right",required:!1,type:{name:"string"}},position:{defaultValue:{value:"static"},description:"Alert position, useful for fixed positioning\n\nDefault: `'static'`",name:"position",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"static"'},{value:'"absolute"'},{value:'"relative"'}]}},onClose:{defaultValue:{value:"undefined"},description:"Alert close button click handler",name:"onClose",required:!1,type:{name:"() => void"}},showCloseButton:{defaultValue:{value:"false"},description:"Show close button\n\nDefault: `false`",name:"showCloseButton",required:!1,type:{name:"boolean"}},actionButtons:{defaultValue:{value:"[]"},description:"Alert action buttons.\n\nType: ButtonProps[]",name:"actionButtons",required:!1,type:{name:"ButtonProps[]"}},inlineButtons:{defaultValue:{value:"false"},description:"Show action buttons inline\n\nDefault: `false`",name:"inlineButtons",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"440px"},description:"Maximum width of the alert\n\nDefault: `'440px'`",name:"maxWidth",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/elements/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"ui/elements/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"./ui/elements/AlertBanner/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B7:()=>ALERT_BANNER_VARIANTS,EW:()=>ALERT_BANNER_TYPES,Q4:()=>DEFAULT_ALERT_VARIANT_ICON_MAPPING,Vu:()=>ALERT_BANNER_VARIANTS_ENUM,Wj:()=>ALERT_BANNER_COLOR_MAPPINGS,l5:()=>ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_VARIANT_MAPPING,wY:()=>ALERT_BANNER_TYPES_ENUM});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/elements/Button/index.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var ALERT_BANNER_TYPES_ENUM=function(ALERT_BANNER_TYPES_ENUM){return ALERT_BANNER_TYPES_ENUM.DEFAULT="default",ALERT_BANNER_TYPES_ENUM.OUTLINED="outlined",ALERT_BANNER_TYPES_ENUM.FILLED="filled",ALERT_BANNER_TYPES_ENUM}({}),ALERT_BANNER_VARIANTS_ENUM=function(ALERT_BANNER_VARIANTS_ENUM){return ALERT_BANNER_VARIANTS_ENUM.PRIMARY="primary",ALERT_BANNER_VARIANTS_ENUM.SUCCESS="success",ALERT_BANNER_VARIANTS_ENUM.WARNING="warning",ALERT_BANNER_VARIANTS_ENUM.ERROR="error",ALERT_BANNER_VARIANTS_ENUM.DEFAULT="default",ALERT_BANNER_VARIANTS_ENUM}({}),ALERT_BANNER_VARIANTS=(ALERT_BANNER_VARIANTS_ENUM.WARNING,ALERT_BANNER_VARIANTS_ENUM.ERROR,[ALERT_BANNER_VARIANTS_ENUM.PRIMARY,ALERT_BANNER_VARIANTS_ENUM.SUCCESS,ALERT_BANNER_VARIANTS_ENUM.WARNING,ALERT_BANNER_VARIANTS_ENUM.ERROR,ALERT_BANNER_VARIANTS_ENUM.DEFAULT]),ALERT_BANNER_TYPES=[ALERT_BANNER_TYPES_ENUM.DEFAULT,ALERT_BANNER_TYPES_ENUM.OUTLINED,ALERT_BANNER_TYPES_ENUM.FILLED],DEFAULT_ALERT_VARIANT_ICON_MAPPING=_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,"info-circle"),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,"check-circle"),ALERT_BANNER_VARIANTS_ENUM.WARNING,"exclamation-triangle"),ALERT_BANNER_VARIANTS_ENUM.ERROR,"exclamation-circle"),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,"info-circle"),ALERT_BANNER_COLOR_MAPPINGS=_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_TYPES_ENUM.DEFAULT,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,{iconColor:"var(--text-brand, #0673F9)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,{iconColor:"var(--text-success, #007A51)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_BANNER_VARIANTS_ENUM.WARNING,{iconColor:"var(--text-warning, #DE5A02)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_BANNER_VARIANTS_ENUM.ERROR,{iconColor:"var(--text-error, #D22D3A)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,{iconColor:"var(--text-primary, #16191D)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"})),ALERT_BANNER_TYPES_ENUM.OUTLINED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,{iconColor:"var(--text-brand, #0673F9)",textColor:"var(--text-brand, #0673F9)",backgroundColor:"var(--bg-brand, #E5F1FF)",borderColor:"var(--border-brand, #94C4FF)"}),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,{iconColor:"var(--text-success, #007A51)",textColor:"var(--text-success, #007A51)",backgroundColor:"var(--bg-success, #D9FCED)",borderColor:"var(--border-success, #ACF7D3)"}),ALERT_BANNER_VARIANTS_ENUM.WARNING,{iconColor:"var(--text-warning, #DE5A02)",textColor:"var(--text-warning, #DE5A02)",backgroundColor:"var(--bg-warning, #FFF1E5)",borderColor:"var(--border-warning, #FFD2BA)"}),ALERT_BANNER_VARIANTS_ENUM.ERROR,{iconColor:"var(--text-error, #D22D3A)",textColor:"var(--text-error, #D22D3A)",backgroundColor:"var(--bg-error, #FFE5E7)",borderColor:"var(--border-error, #FBBBBF)"}),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,{iconColor:"var(--text-primary, #16191D)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-secondary, #F6F7F9)",borderColor:"var(--border, #E1E5EA)"})),ALERT_BANNER_TYPES_ENUM.FILLED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-brand, #0673F9)",borderColor:"transparent"}),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-success, #007A51)",borderColor:"transparent"}),ALERT_BANNER_VARIANTS_ENUM.WARNING,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-warning, #DE5A02)",borderColor:"transparent"}),ALERT_BANNER_VARIANTS_ENUM.ERROR,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-error, #D22D3A)",borderColor:"transparent"}),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,{iconColor:"var(--text-action2, #FFF)",textColor:"var(--text-action2, #FFF)",backgroundColor:"var(--bg-invert-primary, #16191D)",borderColor:"transparent"})),ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_VARIANT_MAPPING=_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_TYPES_ENUM.DEFAULT,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,_Button__WEBPACK_IMPORTED_MODULE_0__.es.TERTIARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,_Button__WEBPACK_IMPORTED_MODULE_0__.es.TERTIARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.WARNING,_Button__WEBPACK_IMPORTED_MODULE_0__.es.TERTIARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.ERROR,_Button__WEBPACK_IMPORTED_MODULE_0__.es.TERTIARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,_Button__WEBPACK_IMPORTED_MODULE_0__.es.TERTIARY_OUTLINED)),ALERT_BANNER_TYPES_ENUM.OUTLINED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,_Button__WEBPACK_IMPORTED_MODULE_0__.es.PRIMARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,_Button__WEBPACK_IMPORTED_MODULE_0__.es.SUCCESS_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.WARNING,_Button__WEBPACK_IMPORTED_MODULE_0__.es.WARNING_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.ERROR,_Button__WEBPACK_IMPORTED_MODULE_0__.es.DANGER_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,_Button__WEBPACK_IMPORTED_MODULE_0__.es.TERTIARY_OUTLINED)),ALERT_BANNER_TYPES_ENUM.FILLED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,_Button__WEBPACK_IMPORTED_MODULE_0__.es.PRIMARY),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,_Button__WEBPACK_IMPORTED_MODULE_0__.es.SUCCESS),ALERT_BANNER_VARIANTS_ENUM.WARNING,_Button__WEBPACK_IMPORTED_MODULE_0__.es.WARNING),ALERT_BANNER_VARIANTS_ENUM.ERROR,_Button__WEBPACK_IMPORTED_MODULE_0__.es.DANGER),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,_Button__WEBPACK_IMPORTED_MODULE_0__.es.SECONDARY))},"./ui/elements/AlertBanner/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HZ:()=>getAlertIconName,Ri:()=>getAlertBannerColors,V8:()=>getButtonVariantFromAlertBannerTypeVariant});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/elements/AlertBanner/constants.ts"),getAlertIconName=function getAlertIconName(icon,variant){return"auto"!==icon?icon:_constants__WEBPACK_IMPORTED_MODULE_0__.Q4[variant]},getAlertBannerColors=function getAlertBannerColors(variant,type){return _constants__WEBPACK_IMPORTED_MODULE_0__.Wj[type][variant]},getButtonVariantFromAlertBannerTypeVariant=function getButtonVariantFromAlertBannerTypeVariant(variant,type){return _constants__WEBPACK_IMPORTED_MODULE_0__.l5[type][variant]}}}]);