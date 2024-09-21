"use strict";(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[321],{"./stories/atoms/CornerRadius/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CornerRadiusTokens:()=>CornerRadiusTokens,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/elements/Table/index.ts"),_ui_themes_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/themes/GlobalStyle.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/utils/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Corner Radius",tags:["!autodocs"]};var CornerRadiusTokens=function CornerRadiusTokens(){var rows=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.zR)({type:"visual",globalStyleString:_ui_themes_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__.b,regExp:/--corner-radius-(\d+px|\d+percent): (\d+px|\d+%);/g,render:function render(token,value){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"relative"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100px",height:"100px",color:"var(--text-brand, #0673F9)",borderRadius:token,border:"var(--spacing-3px, 3px) solid var(--border, #e1e5ea)",fontWeight:"var(--font-weight-medium, 500)"}},value),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"100px",height:"100px",borderRadius:token,border:"var(--spacing-3px, 3px) solid var(--bg-action-brand, #0673f9)",position:"absolute",top:"0",left:"0",clipPath:"polygon(70% 0, 100% 0%, 100% 30%, 70% 30%)"}}))}});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Table__WEBPACK_IMPORTED_MODULE_1__.A,{columns:[{key:"token",display:"Token",align:"left"},{key:"value",display:"Value",align:"left"},{key:"visual",display:"Visual Representation",align:"left"}],rows,capitalizeHeaders:!0,borderAround:!1,highlightHeaders:!1,borderVertical:!1,condensed:!1})};const __namedExportsOrder=["CornerRadiusTokens"];CornerRadiusTokens.parameters={...CornerRadiusTokens.parameters,docs:{...CornerRadiusTokens.parameters?.docs,source:{originalSource:"() => {\n  const cornerRadiusTokenRegExp = /--corner-radius-(\\d+px|\\d+percent): (\\d+px|\\d+%);/g;\n  const rows = extractTokensFromGlobalStyles({\n    type: 'visual',\n    globalStyleString: constantGlobalStyle,\n    regExp: cornerRadiusTokenRegExp,\n    render: (token, value) => <div style={{\n      position: 'relative'\n    }}>\n                <div style={{\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center',\n        width: '100px',\n        height: '100px',\n        color: 'var(--text-brand, #0673F9)',\n        borderRadius: token,\n        border: 'var(--spacing-3px, 3px) solid var(--border, #e1e5ea)',\n        fontWeight: 'var(--font-weight-medium, 500)'\n      }}>\n                    {value}\n                </div>\n                <div style={{\n        width: '100px',\n        height: '100px',\n        borderRadius: token,\n        border: 'var(--spacing-3px, 3px) solid var(--bg-action-brand, #0673f9)',\n        position: 'absolute',\n        top: '0',\n        left: '0',\n        clipPath: 'polygon(70% 0, 100% 0%, 100% 30%, 70% 30%)'\n      }} />\n            </div>\n  });\n  return <Table columns={[{\n    key: 'token',\n    display: 'Token',\n    align: 'left'\n  }, {\n    key: 'value',\n    display: 'Value',\n    align: 'left'\n  }, {\n    key: 'visual',\n    display: 'Visual Representation',\n    align: 'left'\n  }]} rows={rows} capitalizeHeaders borderAround={false} highlightHeaders={false} borderVertical={false} condensed={false} />;\n}",...CornerRadiusTokens.parameters?.docs?.source}}}},"./stories/helper-components/TokenBlock/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>helper_components_TokenBlock});var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./ui/elements/Button/index.ts"),ui=__webpack_require__("./ui/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var StyledHideOnPrintWrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    @media print {\n        display: none;\n    }\n"]))),StyledTokenBlock=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    display: flex;\n    padding: var(--spacing-8px, 8px) var(--spacing-12px, 12px);\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    border-radius: var(--corner-radius-8px, 8px);\n    border: var(--spacing-1px, 1px) solid var(--border, #e1e5ea);\n    background: var(--bg-tertiary, #edeff3);\n    color: var(--text-primary, #16191d) !important;\n    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;\n    font-size: var(--font-size-14px, 14px) !important;\n    font-weight: var(--font-weight-semibold, 600) !important;\n    line-height: 120%;\n    width: fit-content;\n    position: relative;\n"]))),StyledTokenBlockCopiedContainer=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    background: var(--bg-tertiary, #edeff3);\n    color: var(--text-primary, #16191d) !important;\n    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;\n    font-size: var(--font-size-14px, 14px) !important;\n    font-weight: var(--font-weight-semibold, 600) !important;\n    line-height: 120%;\n    opacity: 0;\n    transition: all 0.3s ease;\n    z-index: -1;\n\n    ","\n"])),(function(_ref){return _ref.copied&&(0,styled_components_browser_esm.AH)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n            z-index: 1;\n            opacity: 1;\n        "])))}));function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var TokenBlock=function TokenBlock(_ref){var _ref$copy=_ref.copy,copy=void 0!==_ref$copy&&_ref$copy,children=_ref.children,_ref$showCopiedOverla=_ref.showCopiedOverlay,showCopiedOverlay=void 0!==_ref$showCopiedOverla&&_ref$showCopiedOverla,_useState2=_slicedToArray((0,react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1];return react.createElement(StyledTokenBlock,null,children,copy&&react.createElement(StyledHideOnPrintWrapper,null,react.createElement(Button.Ay,{onClick:function handleCopy(){"undefined"!=typeof navigator&&navigator.clipboard?navigator.clipboard.writeText(children).then((function(){setCopied(!0),setTimeout((function(){setCopied(!1)}),3e3)})).catch((function(err){console.error("Failed to copy token: ",err)})):console.error("Clipboard API not supported")},size:"small",variant:"tertiary",icon:copied?"check":"code"},copied?"copied!":"copy")),showCopiedOverlay&&react.createElement(StyledTokenBlockCopiedContainer,{copied},react.createElement(ui.Icon,{name:"check"}),"Copied!"))};const helper_components_TokenBlock=TokenBlock;try{TokenBlock.displayName="TokenBlock",TokenBlock.__docgenInfo={description:"",displayName:"TokenBlock",props:{copy:{defaultValue:{value:"false"},description:"",name:"copy",required:!1,type:{name:"boolean"}},showCopiedOverlay:{defaultValue:{value:"false"},description:"",name:"showCopiedOverlay",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helper-components/TokenBlock/index.tsx#TokenBlock"]={docgenInfo:TokenBlock.__docgenInfo,name:"TokenBlock",path:"stories/helper-components/TokenBlock/index.tsx#TokenBlock"})}catch(__react_docgen_typescript_loader_error){}},"./stories/utils/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bs:()=>extractTokensFromTheme,zR:()=>extractTokensFromGlobalStyles});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_ui_themes_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/themes/constants.ts"),_ui_themes_darkThemeConstants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/themes/darkThemeConstants.ts"),_ui_themes_lightThemeConstants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/themes/lightThemeConstants.ts"),_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./stories/helper-components/TokenBlock/index.tsx");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function getKebabCase(str){var kebabStr=lodash__WEBPACK_IMPORTED_MODULE_0___default().kebabCase(str);return kebabStr=kebabStr.replace(/-(\d)/g,"$1")}var extractTokensFromTheme=function extractTokensFromTheme(_ref2){var category=_ref2.category,_ref2$subcategories=_ref2.subcategories,subcategories=void 0===_ref2$subcategories?[]:_ref2$subcategories,_ref2$theme=_ref2.theme,theme=void 0===_ref2$theme?_ui_themes_constants__WEBPACK_IMPORTED_MODULE_2__.A.LIGHT:_ref2$theme,_ref2$render=_ref2.render,_render=void 0===_ref2$render?function(){return null}:_ref2$render,colorTokens=function createCategoryTokens(_ref){var category=_ref.category,subcategories=_ref.subcategories,_ref$config=_ref.config,config=void 0===_ref$config?{light:_ui_themes_lightThemeConstants__WEBPACK_IMPORTED_MODULE_4__.A,dark:_ui_themes_darkThemeConstants__WEBPACK_IMPORTED_MODULE_3__.A}:_ref$config,lightThemeCategoryTokens=config.light[category],darkThemeCategoryTokens=config.dark[category],tokens=[],addTokens=function addTokens(tokenSubcategory){var lightThemeSubcategoryTokens=lightThemeCategoryTokens[tokenSubcategory],darkThemeSubcategoryTokens=darkThemeCategoryTokens[tokenSubcategory];"string"!=typeof lightThemeSubcategoryTokens&&"string"!=typeof darkThemeSubcategoryTokens&&Object.keys(lightThemeSubcategoryTokens).forEach((function(tokenSubCategory){lightThemeSubcategoryTokens.hasOwnProperty(tokenSubCategory)&&tokens.push({token:"--".concat(getKebabCase(tokenSubCategory)),dark:darkThemeSubcategoryTokens[tokenSubCategory],light:lightThemeSubcategoryTokens[tokenSubCategory]})}))};return null!=subcategories&&subcategories.length?subcategories.forEach((function(subCategory){lightThemeCategoryTokens.hasOwnProperty(subCategory)&&addTokens(subCategory)})):Object.keys(lightThemeCategoryTokens).forEach((function(subCategory){addTokens(subCategory)})),tokens}({category,subcategories});return colorTokens.map((function(token){return _defineProperty({token:{render:function render(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_5__.A,{copy:!0},token.token)}},value:{render:function render(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_5__.A,null,token[theme]," ")}}},category,{render:function render(){return _render(token)}})}))},extractTokensFromGlobalStyles=function extractTokensFromGlobalStyles(_ref4){var type=_ref4.type,globalStyleString=_ref4.globalStyleString,regExp=_ref4.regExp,_render2=_ref4.render;return Array.from(globalStyleString.matchAll(regExp)).map((function(_ref5){var _ref6=_slicedToArray(_ref5,3),tokenWithValue=_ref6[0],value=_ref6[2],token=tokenWithValue.split(":")[0];return _defineProperty({token:{render:function render(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_5__.A,{copy:!0},token)}},value:{render:function render(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_helper_components_TokenBlock__WEBPACK_IMPORTED_MODULE_5__.A,null,value)}}},type,{render:function render(){return _render2("var(".concat(token,")"),value)}})}))};try{getKebabCase.displayName="getKebabCase",getKebabCase.__docgenInfo={description:"Convert a string to kebab case, removing hyphens before numbers",displayName:"getKebabCase",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/utils/index.tsx#getKebabCase"]={docgenInfo:getKebabCase.__docgenInfo,name:"getKebabCase",path:"stories/utils/index.tsx#getKebabCase"})}catch(__react_docgen_typescript_loader_error){}try{extractTokensFromTheme.displayName="extractTokensFromTheme",extractTokensFromTheme.__docgenInfo={description:"Extracts theme tokens in a category (like 'colors') and\nsubcategory (like 'text' or 'background') from the theme object.\n\n\nFor a given category, token objects returned by this function will\nhave the following keys:\n- token: The token name\n- value: The value of the token\n- [category]: For visual representation of the token",displayName:"extractTokensFromTheme",props:{category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}},subcategories:{defaultValue:{value:"[]"},description:"",name:"subcategories",required:!1,type:{name:"string[]"}},theme:{defaultValue:{value:"THEMES.LIGHT"},description:"",name:"theme",required:!1,type:{name:"string"}},render:{defaultValue:{value:"() => null"},description:"",name:"render",required:!1,type:{name:"(token: CategoryToken) => ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/utils/index.tsx#extractTokensFromTheme"]={docgenInfo:extractTokensFromTheme.__docgenInfo,name:"extractTokensFromTheme",path:"stories/utils/index.tsx#extractTokensFromTheme"})}catch(__react_docgen_typescript_loader_error){}try{extractTokensFromGlobalStyles.displayName="extractTokensFromGlobalStyles",extractTokensFromGlobalStyles.__docgenInfo={description:"Extracts tokens from global styles\n\nReturned token objects will have the following keys\n- token: The token name\n- value: The value of the token\n- [type]: For visual representation of the token",displayName:"extractTokensFromGlobalStyles",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},globalStyleString:{defaultValue:null,description:"",name:"globalStyleString",required:!0,type:{name:"string"}},regExp:{defaultValue:null,description:"",name:"regExp",required:!0,type:{name:"RegExp"}},render:{defaultValue:{value:"() => null"},description:"",name:"render",required:!1,type:{name:"(token: string, value: string) => ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/utils/index.tsx#extractTokensFromGlobalStyles"]={docgenInfo:extractTokensFromGlobalStyles.__docgenInfo,name:"extractTokensFromGlobalStyles",path:"stories/utils/index.tsx#extractTokensFromGlobalStyles"})}catch(__react_docgen_typescript_loader_error){}}}]);