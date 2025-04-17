"use strict";(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[2804],{"./stories/elements/Button/Gallery.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Gallery:()=>Gallery,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ui_elements_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/elements/Button/index.ts"),ui_elements_Button_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/elements/Button/constants.ts"),ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/elements/Table/index.ts"),_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/helper-components/TokenBlock/index.tsx");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/Button",component:ui_elements_Button__WEBPACK_IMPORTED_MODULE_1__.Ay,tags:["!autodocs"]};var Gallery=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.Table,{borderAround:!1,borderVertical:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableHead,{highlightHeaders:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableRow,{condensed:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableHeadingCell,{align:"left"},"Variant"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableHeadingCell,{align:"left"},"Color"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableHeadingCell,{align:"left"},"Button"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableBody,null,ui_elements_Button_constants__WEBPACK_IMPORTED_MODULE_2__.qT.map((function(color){return ui_elements_Button__WEBPACK_IMPORTED_MODULE_1__.Ck.map((function(variant){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableRow,{condensed:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableDataCell,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_4__.A,{copy:!0},variant)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableDataCell,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_4__.A,{copy:!0},color)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_3__.A.TableDataCell,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Button__WEBPACK_IMPORTED_MODULE_1__.Ay,_extends({},args,{variant,color,key:variant}),null==args?void 0:args.children)))}))}))))}.bind({});Gallery.args=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},{children:"Click Me",icon:"exclamation-circle",variant:"primary",color:"brand",size:"medium",onClick:function onClick(){}});const __namedExportsOrder=["Gallery"];Gallery.parameters={...Gallery.parameters,docs:{...Gallery.parameters?.docs,source:{originalSource:'(args: ButtonProps) => <Table.Table borderAround={false} borderVertical={false}>\n        <Table.TableHead highlightHeaders={false}>\n            <Table.TableRow condensed>\n                <Table.TableHeadingCell align="left">\n                    Variant\n                </Table.TableHeadingCell>\n                <Table.TableHeadingCell align="left">\n                    Color\n                </Table.TableHeadingCell>\n                <Table.TableHeadingCell align="left">\n                    Button\n                </Table.TableHeadingCell>\n            </Table.TableRow>\n        </Table.TableHead>\n        <Table.TableBody>\n            {BUTTON_COLORS.map(color => {\n      return BUTTON_VARIANTS.map(variant => {\n        return <Table.TableRow condensed>\n                            <Table.TableDataCell>\n                                <TokenBlock copy>{variant}</TokenBlock>\n                            </Table.TableDataCell>\n                            <Table.TableDataCell>\n                                <TokenBlock copy>{color}</TokenBlock>\n                            </Table.TableDataCell>\n                            <Table.TableDataCell>\n                                <Button {...args} variant={variant} color={color} key={variant}>\n                                    {args?.children}\n                                </Button>\n                            </Table.TableDataCell>\n                        </Table.TableRow>;\n      });\n    })}\n        </Table.TableBody>\n    </Table.Table>',...Gallery.parameters?.docs?.source}}}},"./stories/helper-components/TokenBlock/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>helper_components_TokenBlock});var react=__webpack_require__("./node_modules/react/index.js"),ui=__webpack_require__("./ui/index.ts"),ColorRendererSizes={small:"26px",medium:"36px",large:"48px"},ColorRenderer=function ColorRenderer(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"var(--color-primary, #0073e6)":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size;return react.createElement("div",{style:{width:ColorRendererSizes[size],height:ColorRendererSizes[size],minWidth:ColorRendererSizes[size],minHeight:ColorRendererSizes[size],backgroundColor:"".concat(color),border:"1px solid var(--border, #e1e5ea)",borderRadius:"var(--corner-radius-4px, 4px)",boxSizing:"border-box"}})};try{ColorRenderer.displayName="ColorRenderer",ColorRenderer.__docgenInfo={description:"",displayName:"ColorRenderer",props:{color:{defaultValue:{value:"var(--color-primary, #0073e6)"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helper-components/ColorRenderer/index.tsx#ColorRenderer"]={docgenInfo:ColorRenderer.__docgenInfo,name:"ColorRenderer",path:"stories/helper-components/ColorRenderer/index.tsx#ColorRenderer"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    @media print {\n        display: none;\n    }\n"])));var StyledTokenBlock=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n    padding: var(--spacing-8px, 8px) var(--spacing-12px, 12px);\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border-radius: var(--corner-radius-8px, 8px);\n    border: 1px solid var(--border, #e1e5ea);\n    background: ",";\n    color: var(--text-primary, #16191d) !important;\n    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;\n    font-size: var(--font-size-14px, 14px) !important;\n    font-weight: var(--font-weight-semibold, 600) !important;\n    line-height: 120%;\n    width: fit-content;\n    position: relative;\n    overflow: hidden;\n\n    ","\n"])),(function(_ref){return _ref.background||"var(--bg-tertiary, #edeff3)"}),(function(_ref2){return _ref2.interactive&&(0,styled_components_browser_esm.AH)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n            cursor: pointer;\n        "])))})),StyledTokenBlockCopiedContainer=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    background: var(--bg-tertiary, #edeff3);\n    color: var(--text-primary, #16191d) !important;\n    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;\n    font-size: var(--font-size-14px, 14px) !important;\n    font-weight: var(--font-weight-semibold, 600) !important;\n    line-height: 120%;\n    opacity: 0;\n    transition: all 0.3s ease;\n    z-index: -1;\n\n    ","\n"])),(function(_ref3){return _ref3.copied&&(0,styled_components_browser_esm.AH)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n            z-index: 1;\n            opacity: 1;\n        "])))}));function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var TokenBlock=function TokenBlock(_ref){var _ref$copy=_ref.copy,copy=void 0!==_ref$copy&&_ref$copy,_ref$showCopiedOverla=_ref.showCopiedOverlay,showCopiedOverlay=void 0!==_ref$showCopiedOverla&&_ref$showCopiedOverla,_ref$color=_ref.color,color=void 0===_ref$color?null:_ref$color,children=_ref.children,contentToCopy=_ref.contentToCopy,background=_ref.background,_useState2=_slicedToArray((0,react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1],WrapperComponent=copy?function(_ref2){var _children=_ref2.children;return react.createElement(ui.tw,{content:copied?showCopiedOverlay?null:"Copied!":"Click to copy"},_children)}:react.Fragment;return react.createElement(WrapperComponent,null,react.createElement(StyledTokenBlock,{background,interactive:copy,onClick:copy?function handleCopy(){"undefined"!=typeof navigator&&navigator.clipboard?navigator.clipboard.writeText(contentToCopy||children).then((function(){setCopied(!0),setTimeout((function(){setCopied(!1)}),3e3)})).catch((function(err){console.error("Failed to copy token: ",err)})):console.error("Clipboard API not supported")}:null},color&&react.createElement(ColorRenderer,{color,size:"small"}),children,showCopiedOverlay&&react.createElement(StyledTokenBlockCopiedContainer,{copied},react.createElement(ui.$M,{name:"check",color:"var(--text-success)"}),"Copied!")))};const helper_components_TokenBlock=TokenBlock;try{TokenBlock.displayName="TokenBlock",TokenBlock.__docgenInfo={description:"",displayName:"TokenBlock",props:{copy:{defaultValue:{value:"false"},description:"",name:"copy",required:!1,type:{name:"boolean"}},showCopiedOverlay:{defaultValue:{value:"false"},description:"",name:"showCopiedOverlay",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"null"},description:"",name:"color",required:!1,type:{name:"string"}},contentToCopy:{defaultValue:null,description:"",name:"contentToCopy",required:!1,type:{name:"ReactNode"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helper-components/TokenBlock/index.tsx#TokenBlock"]={docgenInfo:TokenBlock.__docgenInfo,name:"TokenBlock",path:"stories/helper-components/TokenBlock/index.tsx#TokenBlock"})}catch(__react_docgen_typescript_loader_error){}}}]);