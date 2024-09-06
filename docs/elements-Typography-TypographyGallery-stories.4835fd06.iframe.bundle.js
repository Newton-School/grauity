"use strict";(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[418],{"./stories/elements/Typography/TypographyGallery.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Gallery:()=>Gallery,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/elements/Table/index.ts"),ui_elements_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/elements/Typography/index.ts"),_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/helper-components/TokenBlock/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/Typography",component:ui_elements_Typography__WEBPACK_IMPORTED_MODULE_2__.Ay,tags:["!autodocs"]},defaultArgs={children:"The quick brown fox jumps over the lazy dog!",variant:ui_elements_Typography__WEBPACK_IMPORTED_MODULE_2__.NE.HEADING_SEMIBOLD_H40,color:"var(--text-primary, #16191d)",as:ui_elements_Typography__WEBPACK_IMPORTED_MODULE_2__.FR.AUTO},Gallery=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.Table,{borderAround:!1,borderVertical:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.TableHead,{highlightHeaders:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.TableHeadingCell,{align:"left",width:"400px"},"Variant"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.TableHeadingCell,{align:"left"},"As"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.TableHeadingCell,{align:"left"},"Typography")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.TableBody,null,ui_elements_Typography__WEBPACK_IMPORTED_MODULE_2__.dL.map((variant=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.TableRow,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.TableDataCell,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_3__.A,{copy:!0},variant)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.TableDataCell,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_3__.A,null,ui_elements_Typography__WEBPACK_IMPORTED_MODULE_2__.II[variant])),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A.TableDataCell,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Typography__WEBPACK_IMPORTED_MODULE_2__.Ay,{variant,as:ui_elements_Typography__WEBPACK_IMPORTED_MODULE_2__.FR.AUTO,color:args?.color},args?.children)))))))).bind({});Gallery.args={...defaultArgs};const __namedExportsOrder=["Gallery"];Gallery.parameters={...Gallery.parameters,docs:{...Gallery.parameters?.docs,source:{originalSource:'(args: TypographyProps) => <NSTable.Table borderAround={false} borderVertical={false}>\n        <NSTable.TableHead highlightHeaders={false}>\n            <NSTable.TableHeadingCell align="left" width="400px">\n                Variant\n            </NSTable.TableHeadingCell>\n            <NSTable.TableHeadingCell align="left">As</NSTable.TableHeadingCell>\n            <NSTable.TableHeadingCell align="left">\n                Typography\n            </NSTable.TableHeadingCell>\n        </NSTable.TableHead>\n        <NSTable.TableBody>\n            {TYPOGRAPHY_VARIANTS.map(variant => <NSTable.TableRow>\n                    <NSTable.TableDataCell>\n                        <TokenBlock copy>{variant}</TokenBlock>\n                    </NSTable.TableDataCell>\n                    <NSTable.TableDataCell>\n                        <TokenBlock>\n                            {TYPOGRAPHY_VARIANT_AS_MAPPING[variant]}\n                        </TokenBlock>\n                    </NSTable.TableDataCell>\n                    <NSTable.TableDataCell>\n                        <Typography variant={variant} as={TYPOGRAPHY_AS_ENUM.AUTO} color={args?.color}>\n                            {args?.children}\n                        </Typography>\n                    </NSTable.TableDataCell>\n                </NSTable.TableRow>)}\n        </NSTable.TableBody>\n    </NSTable.Table>',...Gallery.parameters?.docs?.source}}}},"./stories/helper-components/TokenBlock/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>helper_components_TokenBlock});var _templateObject,_templateObject2,_templateObject3,_templateObject4,prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./ui/elements/Button/index.ts"),ui=__webpack_require__("./ui/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var StyledHideOnPrintWrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    @media print {\n        display: none;\n    }\n"]))),StyledTokenBlock=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n    padding: var(--spacing-8px, 8px) var(--spacing-12px, 12px);\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border-radius: var(--corner-radius-8px, 8px);\n    border: var(--spacing-1px, 1px) solid var(--border, #e1e5ea);\n    background: var(--bg-tertiary, #edeff3);\n    color: var(--text-primary, #16191d) !important;\n    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;\n    font-size: var(--font-size-14px, 14px) !important;\n    font-weight: var(--font-weight-semibold, 600) !important;\n    line-height: 120%;\n    width: fit-content;\n    position: relative;\n"]))),StyledTokenBlockCopiedContainer=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    background: var(--bg-tertiary, #edeff3);\n    color: var(--text-primary, #16191d) !important;\n    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;\n    font-size: var(--font-size-14px, 14px) !important;\n    font-weight: var(--font-weight-semibold, 600) !important;\n    line-height: 120%;\n    opacity: 0;\n    transition: all 0.3s ease;\n    z-index: -1;\n\n    ","\n"])),(function(_ref){return _ref.copied&&(0,styled_components_browser_esm.AH)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n            z-index: 1;\n            opacity: 1;\n        "])))}));function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var TokenBlock=function TokenBlock(_ref){var copy=_ref.copy,children=_ref.children,showCopiedOverlay=_ref.showCopiedOverlay,_useState2=_slicedToArray((0,react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1];return react.createElement(StyledTokenBlock,null,children,copy&&react.createElement(StyledHideOnPrintWrapper,null,react.createElement(Button.Ay,{onClick:function handleCopy(){"undefined"!=typeof navigator&&navigator.clipboard?navigator.clipboard.writeText(children).then((function(){setCopied(!0),setTimeout((function(){setCopied(!1)}),3e3)})).catch((function(err){console.error("Failed to copy token: ",err)})):console.error("Clipboard API not supported")},size:"small",variant:"tertiary",icon:copied?"check":"code"},copied?"copied!":"copy")),showCopiedOverlay&&react.createElement(StyledTokenBlockCopiedContainer,{copied},react.createElement(ui.In,{name:"check"}),"Copied!"))};TokenBlock.propTypes={copy:prop_types_default().bool,showCopiedOverlay:prop_types_default().bool,children:prop_types_default().node.isRequired},TokenBlock.defaultProps={copy:!1,showCopiedOverlay:!1};const helper_components_TokenBlock=TokenBlock;try{TokenBlock.displayName="TokenBlock",TokenBlock.__docgenInfo={description:"",displayName:"TokenBlock",props:{copy:{defaultValue:{value:"false"},description:"",name:"copy",required:!1,type:{name:"boolean"}},showCopiedOverlay:{defaultValue:{value:"false"},description:"",name:"showCopiedOverlay",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helper-components/TokenBlock/index.tsx#TokenBlock"]={docgenInfo:TokenBlock.__docgenInfo,name:"TokenBlock",path:"stories/helper-components/TokenBlock/index.tsx#TokenBlock"})}catch(__react_docgen_typescript_loader_error){}}}]);