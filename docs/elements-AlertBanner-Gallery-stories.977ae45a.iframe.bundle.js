"use strict";(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[774],{"./stories/elements/AlertBanner/Gallery.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Gallery:()=>Gallery,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ui_elements_AlertBanner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/elements/AlertBanner/index.ts"),ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/elements/Table/index.ts"),ui_elements_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/elements/Typography/index.ts"),_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/helper-components/TokenBlock/index.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/AlertBanner",component:ui_elements_AlertBanner__WEBPACK_IMPORTED_MODULE_1__.Ay,tags:["!autodocs"],argTypes:{children:{options:["Simple example using NSTypography","Simple example with text only"],mapping:{"Simple example using NSTypography":react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Typography__WEBPACK_IMPORTED_MODULE_3__.Ay,{variant:"paragraph-semibold-label",color:"inherit"},"An Alert Banner using NSTypography"),"Simple example with text only":"An Alert Banner using simple text"}}}},Gallery=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.Table,{borderAround:!1,borderVertical:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableHead,{highlightHeaders:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableRow,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableHeadingCell,{align:"left"},"Type"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableHeadingCell,{align:"left"},"Variant"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableHeadingCell,{align:"left"},"AlertBanner"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableBody,null,Object.entries(ui_elements_AlertBanner__WEBPACK_IMPORTED_MODULE_1__.wY).map((([,alertBannerType])=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,Object.entries(ui_elements_AlertBanner__WEBPACK_IMPORTED_MODULE_1__.Vu).map((([,alertBannerVariant])=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableRow,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableDataCell,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_4__.A,{copy:!0},alertBannerType)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableDataCell,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_4__.A,{copy:!0},alertBannerVariant)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_2__.A.TableDataCell,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_AlertBanner__WEBPACK_IMPORTED_MODULE_1__.Ay,_extends({},args,{type:alertBannerType,variant:alertBannerVariant})))))))))))).bind({});Gallery.args={icon:"auto",top:null,bottom:null,left:null,right:null,position:"static",justifyContent:"space-between",onClose:null,showCloseButton:!0,actionButtons:[{children:"Button 1",variant:"tertiary",size:"small"},{children:"Button 2",variant:"secondary",size:"small"},{children:"Disabled Button",variant:"primary",size:"small",disabled:!0}],children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Typography__WEBPACK_IMPORTED_MODULE_3__.Ay,{variant:"paragraph-semibold-label",color:"inherit"},"This is an alert banner with buttons")};const __namedExportsOrder=["Gallery"];Gallery.parameters={...Gallery.parameters,docs:{...Gallery.parameters?.docs,source:{originalSource:'(args: AlertBannerProps) => <NSTable.Table borderAround={false} borderVertical={false}>\n        <NSTable.TableHead highlightHeaders={false}>\n            <NSTable.TableRow>\n                <NSTable.TableHeadingCell align="left">\n                    Type\n                </NSTable.TableHeadingCell>\n                <NSTable.TableHeadingCell align="left">\n                    Variant\n                </NSTable.TableHeadingCell>\n                <NSTable.TableHeadingCell align="left">\n                    AlertBanner\n                </NSTable.TableHeadingCell>\n            </NSTable.TableRow>\n        </NSTable.TableHead>\n        <NSTable.TableBody>\n            {Object.entries(ALERT_BANNER_TYPES_ENUM).map(([, alertBannerType]) => <>\n                        {Object.entries(ALERT_BANNER_VARIANTS_ENUM).map(([, alertBannerVariant]) => <NSTable.TableRow>\n                                    <NSTable.TableDataCell>\n                                        <TokenBlock copy>{alertBannerType}</TokenBlock>\n                                    </NSTable.TableDataCell>\n                                    <NSTable.TableDataCell>\n                                        <TokenBlock copy>\n                                            {alertBannerVariant}\n                                        </TokenBlock>\n                                    </NSTable.TableDataCell>\n                                    <NSTable.TableDataCell>\n                                        <AlertBanner {...args} type={alertBannerType} variant={alertBannerVariant} />\n                                    </NSTable.TableDataCell>\n                                </NSTable.TableRow>)}\n                    </>)}\n        </NSTable.TableBody>\n    </NSTable.Table>',...Gallery.parameters?.docs?.source}}}},"./stories/helper-components/TokenBlock/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>helper_components_TokenBlock});var _templateObject,_templateObject2,_templateObject3,_templateObject4,prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./ui/elements/Button/index.ts"),ui=__webpack_require__("./ui/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var StyledHideOnPrintWrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    @media print {\n        display: none;\n    }\n"]))),StyledTokenBlock=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n    padding: var(--spacing-8px, 8px) var(--spacing-12px, 12px);\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border-radius: var(--corner-radius-8px, 8px);\n    border: var(--spacing-1px, 1px) solid var(--border, #e1e5ea);\n    background: var(--bg-tertiary, #edeff3);\n    color: var(--text-primary, #16191d) !important;\n    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;\n    font-size: var(--font-size-14px, 14px) !important;\n    font-weight: var(--font-weight-semibold, 600) !important;\n    line-height: 120%;\n    width: fit-content;\n    position: relative;\n"]))),StyledTokenBlockCopiedContainer=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    background: var(--bg-tertiary, #edeff3);\n    color: var(--text-primary, #16191d) !important;\n    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;\n    font-size: var(--font-size-14px, 14px) !important;\n    font-weight: var(--font-weight-semibold, 600) !important;\n    line-height: 120%;\n    opacity: 0;\n    transition: all 0.3s ease;\n    z-index: -1;\n\n    ","\n"])),(function(_ref){return _ref.copied&&(0,styled_components_browser_esm.AH)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n            z-index: 1;\n            opacity: 1;\n        "])))}));function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var TokenBlock=function TokenBlock(_ref){var copy=_ref.copy,children=_ref.children,showCopiedOverlay=_ref.showCopiedOverlay,_useState2=_slicedToArray((0,react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1];return react.createElement(StyledTokenBlock,null,children,copy&&react.createElement(StyledHideOnPrintWrapper,null,react.createElement(Button.Ay,{onClick:function handleCopy(){"undefined"!=typeof navigator&&navigator.clipboard?navigator.clipboard.writeText(children).then((function(){setCopied(!0),setTimeout((function(){setCopied(!1)}),3e3)})).catch((function(err){console.error("Failed to copy token: ",err)})):console.error("Clipboard API not supported")},size:"small",variant:"tertiary",icon:copied?"check":"code"},copied?"copied!":"copy")),showCopiedOverlay&&react.createElement(StyledTokenBlockCopiedContainer,{copied},react.createElement(ui.In,{name:"check"}),"Copied!"))};TokenBlock.propTypes={copy:prop_types_default().bool,showCopiedOverlay:prop_types_default().bool,children:prop_types_default().node.isRequired},TokenBlock.defaultProps={copy:!1,showCopiedOverlay:!1};const helper_components_TokenBlock=TokenBlock;try{TokenBlock.displayName="TokenBlock",TokenBlock.__docgenInfo={description:"",displayName:"TokenBlock",props:{copy:{defaultValue:{value:"false"},description:"",name:"copy",required:!1,type:{name:"boolean"}},showCopiedOverlay:{defaultValue:{value:"false"},description:"",name:"showCopiedOverlay",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helper-components/TokenBlock/index.tsx#TokenBlock"]={docgenInfo:TokenBlock.__docgenInfo,name:"TokenBlock",path:"stories/helper-components/TokenBlock/index.tsx#TokenBlock"})}catch(__react_docgen_typescript_loader_error){}},"./ui/elements/AlertBanner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{wY:()=>ALERT_BANNER_TYPES_ENUM,Vu:()=>ALERT_BANNER_VARIANTS_ENUM,Ay:()=>AlertBanner_AlertBanner});var _templateObject,_templateObject2,prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./ui/elements/Button/index.ts"),ButtonGroup=__webpack_require__("./ui/elements/Button/ButtonGroup.tsx"),IconButton=__webpack_require__("./ui/elements/Button/IconButton.tsx"),Icon=__webpack_require__("./ui/elements/Icon/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var StyledAlertBannerContainer=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    display: flex;\n    gap: var(--spacing-12px, 12px);\n    width: 100%;\n    min-height: var(--spacing-40px, 40px);\n    align-items: center;\n    flex-shrink: 0;\n\n    position: ",";\n    top: ",";\n    bottom: ",";\n    left: ",";\n    right: ",";\n    padding: ",";\n    justify-content: ",";\n\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n"])),(function(_ref){return _ref.position}),(function(_ref2){return _ref2.top}),(function(_ref3){return _ref3.bottom}),(function(_ref4){return _ref4.left}),(function(_ref5){return _ref5.right}),(function(_ref6){return _ref6.padding}),(function(_ref7){return _ref7.justifyContent}),(function(_ref8){return _ref8.textColor}),(function(_ref9){return _ref9.backgroundColor}),(function(_ref10){return _ref10.borderColor})),StyledAlertBannerContent=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-8px, 8px);\n    color: ",";\n    font-family: var(--font-family, 'Mona Sans');\n    font-size: var(--font-size-14px, 14px);\n    font-weight: var(--font-weight-semibold, 600);\n    line-height: 120%;\n    letter-spacing: 0.5px;\n"])),(function(_ref11){return _ref11.color}));function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var ALERT_BANNER_TYPES_ENUM=function(ALERT_BANNER_TYPES_ENUM){return ALERT_BANNER_TYPES_ENUM.DEFAULT="default",ALERT_BANNER_TYPES_ENUM.OUTLINED="outlined",ALERT_BANNER_TYPES_ENUM.FILLED="filled",ALERT_BANNER_TYPES_ENUM}({}),ALERT_BANNER_VARIANTS_ENUM=function(ALERT_BANNER_VARIANTS_ENUM){return ALERT_BANNER_VARIANTS_ENUM.PRIMARY="primary",ALERT_BANNER_VARIANTS_ENUM.SUCCESS="success",ALERT_BANNER_VARIANTS_ENUM.WARNING="warning",ALERT_BANNER_VARIANTS_ENUM.ERROR="error",ALERT_BANNER_VARIANTS_ENUM.DEFAULT="default",ALERT_BANNER_VARIANTS_ENUM}({}),ALERT_BANNER_VARIANTS=(ALERT_BANNER_VARIANTS_ENUM.WARNING,ALERT_BANNER_VARIANTS_ENUM.ERROR,[ALERT_BANNER_VARIANTS_ENUM.PRIMARY,ALERT_BANNER_VARIANTS_ENUM.SUCCESS,ALERT_BANNER_VARIANTS_ENUM.WARNING,ALERT_BANNER_VARIANTS_ENUM.ERROR,ALERT_BANNER_VARIANTS_ENUM.DEFAULT]),ALERT_BANNER_TYPES=[ALERT_BANNER_TYPES_ENUM.DEFAULT,ALERT_BANNER_TYPES_ENUM.OUTLINED,ALERT_BANNER_TYPES_ENUM.FILLED],DEFAULT_ALERT_VARIANT_ICON_MAPPING=_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,"info-circle"),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,"check-circle"),ALERT_BANNER_VARIANTS_ENUM.WARNING,"exclamation-triangle"),ALERT_BANNER_VARIANTS_ENUM.ERROR,"exclamation-circle"),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,"info-circle"),ALERT_BANNER_COLOR_MAPPINGS=_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_TYPES_ENUM.DEFAULT,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,{iconColor:"var(--text-brand, #0673F9)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,{iconColor:"var(--text-success, #007A51)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_BANNER_VARIANTS_ENUM.WARNING,{iconColor:"var(--text-warning, #DE5A02)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_BANNER_VARIANTS_ENUM.ERROR,{iconColor:"var(--text-error, #D22D3A)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"}),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,{iconColor:"var(--text-primary, #16191D)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-primary, #FFF)",borderColor:"var(--border, #E1E5EA)"})),ALERT_BANNER_TYPES_ENUM.OUTLINED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,{iconColor:"var(--text-brand, #0673F9)",textColor:"var(--text-brand, #0673F9)",backgroundColor:"var(--bg-brand, #E5F1FF)",borderColor:"var(--border-brand, #94C4FF)"}),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,{iconColor:"var(--text-success, #007A51)",textColor:"var(--text-success, #007A51)",backgroundColor:"var(--bg-success, #D9FCED)",borderColor:"var(--border-success, #ACF7D3)"}),ALERT_BANNER_VARIANTS_ENUM.WARNING,{iconColor:"var(--text-warning, #DE5A02)",textColor:"var(--text-warning, #DE5A02)",backgroundColor:"var(--bg-warning, #FFF1E5)",borderColor:"var(--border-warning, #FFD2BA)"}),ALERT_BANNER_VARIANTS_ENUM.ERROR,{iconColor:"var(--text-error, #D22D3A)",textColor:"var(--text-error, #D22D3A)",backgroundColor:"var(--bg-error, #FFE5E7)",borderColor:"var(--border-error, #FBBBBF)"}),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,{iconColor:"var(--text-primary, #16191D)",textColor:"var(--text-primary, #16191D)",backgroundColor:"var(--bg-secondary, #F6F7F9)",borderColor:"var(--border, #E1E5EA)"})),ALERT_BANNER_TYPES_ENUM.FILLED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-brand, #0673F9)",borderColor:"transparent"}),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-success, #007A51)",borderColor:"transparent"}),ALERT_BANNER_VARIANTS_ENUM.WARNING,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-warning, #DE5A02)",borderColor:"transparent"}),ALERT_BANNER_VARIANTS_ENUM.ERROR,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action-error, #D22D3A)",borderColor:"transparent"}),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,{iconColor:"var(--text-action, #FFF)",textColor:"var(--text-action, #FFF)",backgroundColor:"var(--bg-action, #16191D)",borderColor:"transparent"})),ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_VARIANT_MAPPING=_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_TYPES_ENUM.DEFAULT,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,Button.es.TERTIARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,Button.es.TERTIARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.WARNING,Button.es.TERTIARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.ERROR,Button.es.TERTIARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,Button.es.TERTIARY_OUTLINED)),ALERT_BANNER_TYPES_ENUM.OUTLINED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,Button.es.PRIMARY_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,Button.es.SUCCESS_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.WARNING,Button.es.WARNING_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.ERROR,Button.es.DANGER_OUTLINED),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,Button.es.TERTIARY_OUTLINED)),ALERT_BANNER_TYPES_ENUM.FILLED,_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},ALERT_BANNER_VARIANTS_ENUM.PRIMARY,Button.es.PRIMARY),ALERT_BANNER_VARIANTS_ENUM.SUCCESS,Button.es.SUCCESS),ALERT_BANNER_VARIANTS_ENUM.WARNING,Button.es.WARNING),ALERT_BANNER_VARIANTS_ENUM.ERROR,Button.es.DANGER),ALERT_BANNER_VARIANTS_ENUM.DEFAULT,Button.es.SECONDARY)),getButtonVariantFromAlertBannerTypeVariant=function getButtonVariantFromAlertBannerTypeVariant(variant,type){return ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_VARIANT_MAPPING[type][variant]},AlertBanner=(0,react.forwardRef)((function(props,ref){var type=props.type,variant=props.variant,icon=props.icon,padding=props.padding,top=props.top,bottom=props.bottom,left=props.left,right=props.right,position=props.position,children=props.children,justifyContent=props.justifyContent,onClose=props.onClose,showCloseButton=props.showCloseButton,actionButtons=props.actionButtons,iconName=function getAlertIconName(icon,variant){return"auto"!==icon?icon:DEFAULT_ALERT_VARIANT_ICON_MAPPING[variant]}(icon,variant),_getAlertBannerColors=function getAlertBannerColors(variant,type){return ALERT_BANNER_COLOR_MAPPINGS[type][variant]}(variant,type),iconColor=_getAlertBannerColors.iconColor,textColor=_getAlertBannerColors.textColor,backgroundColor=_getAlertBannerColors.backgroundColor,borderColor=_getAlertBannerColors.borderColor,hasButton=!(null==actionButtons||!actionButtons.length)||showCloseButton;return react.createElement(StyledAlertBannerContainer,{type,variant,padding:padding||hasButton?"var(--spacing-4px, 4px) var(--spacing-8px, 8px)":"var(--spacing-8px, 8px)",top,bottom,left,right,position,ref,textColor,backgroundColor,borderColor,justifyContent},react.createElement(StyledAlertBannerContent,{color:textColor},iconName&&react.createElement(Icon.I,{name:iconName,color:iconColor||"inherit",size:"20"}),children),hasButton&&react.createElement(ButtonGroup.A,null,actionButtons.map((function(button){return react.createElement(Button.Ay,button,button.children)})),showCloseButton&&react.createElement(IconButton.A,{variant:getButtonVariantFromAlertBannerTypeVariant(variant,type),icon:"close",onClick:onClose,size:"small"})))}));AlertBanner.defaultProps={type:"default",variant:"primary",icon:null,padding:"var(--spacing-8px, 8px)",top:null,bottom:null,left:null,right:null,position:"static",children:null,justifyContent:"center",onClose:void 0,showCloseButton:!1,actionButtons:[]},AlertBanner.propTypes={type:prop_types_default().oneOf(ALERT_BANNER_TYPES),variant:prop_types_default().oneOf(ALERT_BANNER_VARIANTS),padding:prop_types_default().string,icon:prop_types_default().any,top:prop_types_default().string,bottom:prop_types_default().string,left:prop_types_default().string,right:prop_types_default().string,position:prop_types_default().string,children:prop_types_default().node,justifyContent:prop_types_default().string,onClose:prop_types_default().func,showCloseButton:prop_types_default().bool,actionButtons:prop_types_default().array};const AlertBanner_AlertBanner=AlertBanner;try{AlertBanner.displayName="AlertBanner",AlertBanner.__docgenInfo={description:"An alert banner is a component that is used to typically display\nimportant messages to the user. It is normally shown at the top of the page.",displayName:"AlertBanner",props:{type:{defaultValue:{value:"default"},description:"Type of the alert banner\n\nAvailable choices: `'default'`, `'outlined'`, `'filled'`\n\nDefault: `'default'`",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"filled"'}]}},variant:{defaultValue:{value:"primary"},description:"Variant of the alert banner\n\nAvailable choices: `'primary'`, `'secondary'`, `'tertiary'`, `'success'`, `'danger'`, `'warning'`\n\nDefault: `'primary'`",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"default"'},{value:'"error"'}]}},padding:{defaultValue:{value:"var(--spacing-8px, 8px)"},description:"Alert banner padding\n\nDefault: `'var(--spacing-8px, 8px)'`",name:"padding",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"null"},description:"Alert banner icon, used to override the default icons used in the alert banner\n\nUse value `auto` to automatically select the icon based on the variant (error vs checkmark icon)\n\nDefault: `null`",name:"icon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"check"'},{value:'"file"'},{value:'"search"'},{value:'"code"'},{value:'"label"'},{value:'"menu"'},{value:'"video"'},{value:'"circle"'},{value:'"exclamation-circle"'},{value:'"exclamation-triangle"'},{value:'"info-circle"'},{value:'"question-circle"'},{value:'"code-alt"'},{value:'"terminal"'},{value:'"desktop"'},{value:'"gamepad"'},{value:'"lamp"'},{value:'"laptop"'},{value:'"mobile"'},{value:'"archive"'},{value:'"bookmark-fill"'},{value:'"bookmark"'},{value:'"file-alt"'},{value:'"folder-open"'},{value:'"folder"'},{value:'"label-fill"'},{value:'"note"'},{value:'"pen"'},{value:'"pin"'},{value:'"mic-off"'},{value:'"mic"'},{value:'"pause-circle-fill"'},{value:'"pause-circle"'},{value:'"pause"'},{value:'"play-circle-fill"'},{value:'"play-circle"'},{value:'"play"'},{value:'"video-off"'},{value:'"volume-maximum"'},{value:'"volume-minimum"'},{value:'"volume-mute"'},{value:'"heart-fill"'},{value:'"heart"'},{value:'"lock-close"'},{value:'"lock-open"'},{value:'"message-circle"'},{value:'"message-double-question"'},{value:'"message-square-info"'},{value:'"message-square"'},{value:'"milestone"'},{value:'"quiz"'},{value:'"smiley"'},{value:'"spark-fill"'},{value:'"spark"'},{value:'"sparkle"'},{value:'"target"'},{value:'"check-badge"'},{value:'"crown"'},{value:'"flag"'},{value:'"gift"'},{value:'"medal"'},{value:'"star-fill"'},{value:'"star-half-fill"'},{value:'"star"'},{value:'"trophy"'},{value:'"arrow-double"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-up"'},{value:'"bin"'},{value:'"call-end"'},{value:'"call-start"'},{value:'"caret-double"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"caret-up"'},{value:'"check-circle-fill"'},{value:'"check-circle"'},{value:'"check-square-fill"'},{value:'"check-square"'},{value:'"chevron-double-down"'},{value:'"chevron-double-left"'},{value:'"chevron-double-right"'},{value:'"chevron-double-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close-circle-fill"'},{value:'"close-circle"'},{value:'"close-square-fill"'},{value:'"close-square"'},{value:'"close"'},{value:'"download"'},{value:'"forward"'},{value:'"grip-hortizontal"'},{value:'"grip-vertical"'},{value:'"growth-down"'},{value:'"growth-up"'},{value:'"home"'},{value:'"kebab-horizontal"'},{value:'"kebab-vertical"'},{value:'"list"'},{value:'"load"'},{value:'"maximize"'},{value:'"menu-grid"'},{value:'"minimize"'},{value:'"minus-circle-fill"'},{value:'"minus-circle"'},{value:'"minus-square-fill"'},{value:'"minus-square"'},{value:'"moon"'},{value:'"new-tab"'},{value:'"plus-circle-fill"'},{value:'"plus-circle"'},{value:'"plus-square-fill"'},{value:'"plus-square"'},{value:'"plus"'},{value:'"refresh"'},{value:'"reply"'},{value:'"screenshare-start"'},{value:'"screenshare-stop"'},{value:'"settings"'},{value:'"signin"'},{value:'"signout"'},{value:'"square"'},{value:'"sun"'},{value:'"upload"'},{value:'"bell"'},{value:'"calender-check"'},{value:'"calender-plus"'},{value:'"calender"'},{value:'"clock"'},{value:'"rewatch"'},{value:'"stopwatch"'},{value:'"bot"'},{value:'"person-check"'},{value:'"person-plus"'},{value:'"person"'},{value:'"users"'},{value:'"auto"'}]}},top:{defaultValue:{value:"null"},description:"Alert banner top position, useful for fixed positioning\n\nDefault: `null`",name:"top",required:!1,type:{name:"string"}},bottom:{defaultValue:{value:"null"},description:"Alert banner bottom position, useful for fixed positioning\n\nDefault: `null`",name:"bottom",required:!1,type:{name:"string"}},left:{defaultValue:{value:"null"},description:"Alert banner left position, useful for fixed positioning\n\nDefault: `null`",name:"left",required:!1,type:{name:"string"}},right:{defaultValue:{value:"null"},description:"Alert banner right position, useful for fixed positioning\n\nDefault: `null`",name:"right",required:!1,type:{name:"string"}},position:{defaultValue:{value:"static"},description:"Alert banner position, useful for fixed positioning\n\nDefault: `'static'`",name:"position",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"Alert banner content",name:"children",required:!1,type:{name:"ReactNode"}},justifyContent:{defaultValue:{value:"center"},description:"Alert banner content justify content\n\nDefault: `'center'`",name:"justifyContent",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"undefined"},description:"Alert banner close button click handler",name:"onClose",required:!1,type:{name:"() => void"}},showCloseButton:{defaultValue:{value:"false"},description:"Show close button\n\nDefault: `false`",name:"showCloseButton",required:!1,type:{name:"boolean"}},actionButtons:{defaultValue:{value:"[]"},description:"Alert banner action buttons",name:"actionButtons",required:!1,type:{name:"ButtonProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/elements/AlertBanner/AlertBanner.tsx#AlertBanner"]={docgenInfo:AlertBanner.__docgenInfo,name:"AlertBanner",path:"ui/elements/AlertBanner/AlertBanner.tsx#AlertBanner"})}catch(__react_docgen_typescript_loader_error){}}}]);