(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[792],{969:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var esm=__webpack_require__(57169),injectStylesIntoStyleTag=__webpack_require__(74443),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),fonts=__webpack_require__(86530),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(fonts.A,options);fonts.A.locals;var dist_esm=__webpack_require__(50113);const storybookTheme={LIGHT:(0,dist_esm.vt)({base:"light",brandTitle:"gra.UI.ty",brandUrl:"https://github.com/Newton-School/grauity",brandImage:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/383f97fde24e45d18e60ef15f9dc866b-logo_black.svg",brandTarget:"_self",appBg:"#ffffff",appContentBg:"#ffffff",appBorderColor:"#E1E5EA",appBorderRadius:8,fontBase:'"Switzer", sans-serif',fontCode:"monospace",textColor:"#5B6271",textInverseColor:"#8C95A6",barTextColor:"#5B6271",barSelectedColor:"#0673f9",barBg:"#F6F7F9",inputBg:"#ffffff",inputBorder:"1px solid #E1E5EA",inputTextColor:"#5B6271",inputBorderRadius:8}),DARK:(0,dist_esm.vt)({base:"dark",brandTitle:"gra.UI.ty",brandUrl:"https://github.com/Newton-School/grauity",brandImage:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/1d6eb791260241f195bb3d9ea6780dbe-logo_white.svg",brandTarget:"_self",appBg:"#0b0c0e",appContentBg:"#23282f",appBorderColor:"#30363d",appBorderRadius:8,fontBase:'"Switzer", sans-serif',fontCode:"monospace",textColor:"#ffffff",textInverseColor:"#16191D",barTextColor:"#ffffff",barSelectedColor:"#0673f9",barBg:"#16191d",inputBg:"#3b4149",inputBorder:"1px solid #30363d",inputTextColor:"#ffffff",inputBorderRadius:8})};var setTheme=function setTheme(theme){esm.MC.setConfig({theme:storybookTheme[theme]}),localStorage.setItem("storybook-theme",theme)},savedTheme=localStorage.getItem("storybook-theme")||"DARK";setTheme(savedTheme);var manager_button=document.createElement("button");manager_button.innerText="DARK"===savedTheme?"Switch to Light Theme":"Switch to Dark Theme",manager_button.style.position="fixed",manager_button.style.top="10px",manager_button.style.right="10px",manager_button.style.zIndex="9999",manager_button.onclick=function(){var newTheme="DARK"===savedTheme?"LIGHT":"DARK";setTheme(newTheme),manager_button.innerText="DARK"===newTheme?"Switching to Dark Theme...":"Switching to Light Theme...",window.location.reload()},document.body.appendChild(manager_button)},86530:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_manager_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11059),_node_modules_storybook_manager_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_manager_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_manager_webpack5_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32474),_node_modules_storybook_manager_webpack5_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_storybook_manager_webpack5_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__),_Switzer_Variable_ttf__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11855),___CSS_LOADER_EXPORT___=_node_modules_storybook_manager_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i){return i[1]})),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_storybook_manager_webpack5_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Switzer_Variable_ttf__WEBPACK_IMPORTED_MODULE_2__);___CSS_LOADER_EXPORT___.push([module.id,"@font-face {\n    font-family: 'Switzer';\n    font-weight: 100 900;\n    src: url("+___CSS_LOADER_URL_REPLACEMENT_0___+') format("truetype-variations");\n}\n\n.sidebar-container * {\n    font-family: \'Switzer\', sans-serif;\n}\n\n.sidebar-container .sidebar-item:not([data-nodetype="component"]) {\n    padding: 12px 16px;\n    padding-left: 64px;\n    cursor: pointer;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    letter-spacing: 0.2px;\n    color: #8C95A6;\n}\n\n.sidebar-container .sidebar-item:not([data-nodetype="component"]):hover, .sidebar-container .sidebar-item:not([data-nodetype="component"]):focus {\n    background-color: #16191D;\n}\n\n.sidebar-container .sidebar-item:not([data-nodetype="component"])[data-selected="true"] {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    letter-spacing: 0.2px;\n    padding: 12px 16px;\n    padding-left: 64px;\n    cursor: pointer;\n    background:#23282f;\n    color: #0673f9;\n}\n\n.sidebar-container .sidebar-item:not([data-nodetype="component"])[data-selected="true"]:hover, .sidebar-container .sidebar-item:not([data-nodetype="component"])[data-selected="true"]:focus {\n    background: #16191D;\n}\n\n.sidebar-container .sidebar-item[data-nodetype="component"] {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 0.2px;\n    padding: 12px 16px;\n    cursor: pointer;\n    background: none !important;\n}\n\n.sidebar-container .sidebar-item[aria-expanded="true"] {\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 20px;\n    letter-spacing: 0.2px;\n    padding: 12px 16px;\n    cursor: pointer;\n    background: #002452 !important;\n    color: #ffffff !important;\n}\n\n.sidebar-container button.sidebar-item[aria-expanded="true"] ~ div {\n    background: #0b0c0e;\n}\n\n.sidebar-container .sidebar-subheading {\n    background: none !important;\n}\n',""]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},11855:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Switzer-Variable.fa6516b6.ttf"},42634:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[379],(()=>(__webpack_exec__(17835),__webpack_exec__(969),__webpack_exec__(60535),__webpack_exec__(7626),__webpack_exec__(51807),__webpack_exec__(12282),__webpack_exec__(55563),__webpack_exec__(27675),__webpack_exec__(18296),__webpack_exec__(57483),__webpack_exec__(11389),__webpack_exec__(4121),__webpack_exec__(45141),__webpack_exec__(1167))));__webpack_require__.O()}]);