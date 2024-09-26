"use strict";(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[202],{"./stories/elements/Accordion/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./ui/elements/Icon/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var StyledAccordionHeader=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    cursor: pointer;\n    padding: 8px;\n    align-items: center;\n    background-color: var(--bg-secondary, #f6f7f9);\n    font-family: var(--font-family, 'Mona Sans');\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 160%;\n    letter-spacing: 0.1px;\n"]))),StyledAccordionContent=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    overflow: hidden;\n    background-color: var(--bg-secondary, #f6f7f9);\n    padding: 0px 8px;\n    font-size: 12px;\n    max-height: ",";\n    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n"])),(function(_ref){return _ref.expanded?"1000px":"0"})),StyledAccordionWrapper=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    border-radius: 4px;\n    margin: 10px 0;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n"]))),StyledLine=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    height: 1px;\n    background: var(--bg-tertiary, #edeff3);\n"])));function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Accordion=(0,react.forwardRef)((function(_ref,ref){var title=_ref.title,_ref$expanded=_ref.expanded,expanded=void 0!==_ref$expanded&&_ref$expanded,_ref$onToggle=_ref.onToggle,onToggle=void 0===_ref$onToggle?function(){}:_ref$onToggle,children=_ref.children,_useState2=_slicedToArray((0,react.useState)(expanded),2),isExpanded=_useState2[0],setIsExpanded=_useState2[1];return(0,react.useEffect)((function(){setIsExpanded(expanded)}),[expanded]),react.createElement(StyledAccordionWrapper,{ref,expanded:isExpanded},react.createElement(StyledAccordionHeader,{onClick:function handleToggle(){setIsExpanded(!isExpanded),onToggle(!isExpanded)}},title,react.createElement(Icon.I,{color:"var(--text-primary)",name:isExpanded?"chevron-up":"chevron-down",size:"16"})),react.createElement(StyledAccordionContent,{expanded:isExpanded},react.createElement(StyledLine,null),children))}));const Accordion_Accordion=Accordion;try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{title:{defaultValue:null,description:"Title of the accordion.",name:"title",required:!0,type:{name:"ReactNode"}},expanded:{defaultValue:{value:"false"},description:"Flag to determine if the accordion is expanded.",name:"expanded",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:{value:"() => {}"},description:"Callback function to handle toggle events.\n@param expanded - The new expanded state of the accordion.",name:"onToggle",required:!1,type:{name:"(expanded: boolean) => void"}},children:{defaultValue:null,description:"Content to be displayed inside the accordion.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/elements/Accordion/Accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"ui/elements/Accordion/Accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const index_stories={title:"Elements/Accordion",component:Accordion_Accordion,decorators:[function(Story){return react.createElement("div",{style:{width:"500px"}},react.createElement(Story,null))}]};var Component=function Template(args){return react.createElement(react.Fragment,null,react.createElement(Accordion_Accordion,_extends({},args,{title:"Accordion 1"}),react.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},react.createElement("div",null,"Accordion Content"),react.createElement("div",null,"Accordion Content"),react.createElement("div",null,"Accordion Content"),react.createElement("div",null,"Accordion Content"))),react.createElement(Accordion_Accordion,_extends({},args,{title:"Accordion 2"}),react.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},react.createElement("div",null,"Accordion Content"),react.createElement("div",null,"Accordion Content"),react.createElement("div",null,"Accordion Content"),react.createElement("div",null,"Accordion Content"))))}.bind({});Component.args=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},{title:"Accordion",expanded:!1,onToggle:function onToggle(){}});const __namedExportsOrder=["Component"];Component.parameters={...Component.parameters,docs:{...Component.parameters?.docs,source:{originalSource:"(args: AccordionProps) => <>\n        <Accordion {...args} title=\"Accordion 1\">\n            <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '10px'\n    }}>\n                <div>Accordion Content</div>\n                <div>Accordion Content</div>\n                <div>Accordion Content</div>\n                <div>Accordion Content</div>\n            </div>\n        </Accordion>\n        <Accordion {...args} title=\"Accordion 2\">\n            <div style={{\n      display: 'flex',\n      flexDirection: 'column',\n      gap: '10px'\n    }}>\n                <div>Accordion Content</div>\n                <div>Accordion Content</div>\n                <div>Accordion Content</div>\n                <div>Accordion Content</div>\n            </div>\n        </Accordion>\n    </>",...Component.parameters?.docs?.source}}}}}]);