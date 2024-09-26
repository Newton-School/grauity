"use strict";(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[454],{"./stories/elements/BottomSheet/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),hooks=__webpack_require__("./hooks/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var StyledBottomSheetWrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10;\n    font-family: var(--font-family, 'Mona Sans');\n    width: 100vw;\n    height: 100vh;\n    background: var(--alpha-overlay, rgba(22, 25, 29, 0.8));\n    color: var(--text-primary, #16191d);\n    display: flex;\n    align-items: end;\n    overflow: hidden;\n\n    @keyframes fadeIn {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n    }\n\n    @keyframes fadeOut {\n        from {\n            opacity: 1;\n        }\n        to {\n            opacity: 0;\n        }\n    }\n\n    animation: ","\n        ","ms ease forwards;\n"])),(function(_ref){return _ref.$isOpen?"fadeIn":"fadeOut"}),500),StyledBottomSheet=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    width: 100%;\n    height: ",";\n    background: var(--bg-primary, #fff);\n    border-top-left-radius: var(--spacing-8px, 8px);\n    border-top-right-radius: var(--spacing-8px, 8px);\n    overflow: hidden;\n\n    position: absolute;\n    top: calc(100% + ","px);\n    left: 0;\n\n    @keyframes slideIn {\n        from {\n            transform: translateY(0);\n        }\n        to {\n            transform: translateY(-100%);\n        }\n    }\n\n    @keyframes slideOut {\n        from {\n            transform: translateY(-100%);\n        }\n        to {\n            transform: translateY(0);\n        }\n    }\n\n    animation: ","\n        ","ms ease forwards;\n\n    ",";\n"])),(function(_ref2){return _ref2.$height}),(function(_ref3){return _ref3.$translateY}),(function(_ref4){return _ref4.$isOpen?"slideIn":"slideOut"}),500,(function(_ref5){return _ref5.$fullScreen&&(0,styled_components_browser_esm.AH)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n            height: 100%;\n            border-radius: 0;\n        "])))})),StyledDragHandleContainer=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    width: 100%;\n    height: ","px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n"])),50),StyledDragHandle=styled_components_browser_esm.Ay.div(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    width: 50px;\n    height: 5px;\n    background: var(--bg-invert-tertiary, #23282f);\n    opacity: 0.7;\n    border-radius: 4px;\n"]))),StyledBottomSheetContent=styled_components_browser_esm.Ay.div(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    width: 100%;\n    height: calc(100% - ","px);\n    oveflow-x: hidden;\n    overflow-y: auto;\n\n    ",";\n"])),50,(function(_ref6){var $height=_ref6.$height;return $height&&(0,styled_components_browser_esm.AH)(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n            height: ",";\n        "])),$height)}));function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var BottomSheet=(0,react.forwardRef)((function(props,ref){var children=props.children,_props$isOpen=props.isOpen,isOpen=void 0!==_props$isOpen&&_props$isOpen,_props$onClose=props.onClose,onClose=void 0===_props$onClose?function(){}:_props$onClose,_props$fullScreen=props.fullScreen,fullScreen=void 0!==_props$fullScreen&&_props$fullScreen,_props$closeOnBackdro=props.closeOnBackdropClick,closeOnBackdropClick=void 0===_props$closeOnBackdro||_props$closeOnBackdro,_props$height=props.height,height=void 0===_props$height?"50%":_props$height,_props$showDragHandle=props.showDragHandle,showDragHandle=void 0===_props$showDragHandle||_props$showDragHandle,_props$closeOnPullDow=props.closeOnPullDown,closeOnPullDown=void 0===_props$closeOnPullDow||_props$closeOnPullDow,_useState2=_slicedToArray((0,react.useState)(!1),2),isClosing=_useState2[0],setIsClosing=_useState2[1],_useState4=_slicedToArray((0,react.useState)(isOpen),2),shouldRender=_useState4[0],setShouldRender=_useState4[1],_useState6=_slicedToArray((0,react.useState)(null),2),startY=_useState6[0],setStartY=_useState6[1],_useState8=_slicedToArray((0,react.useState)(0),2),translateY=_useState8[0],setTranslateY=_useState8[1],bottomSheetRef=(0,react.useRef)(null);return(0,hooks.W3)(bottomSheetRef,(function(){closeOnBackdropClick&&onClose()})),(0,hooks.d6)(shouldRender),(0,react.useEffect)((function(){isOpen?setShouldRender(!0):isClosing||function triggerClose(){setIsClosing(!0),setTimeout((function(){setIsClosing(!1),setShouldRender(!1),setStartY(null),setTranslateY(0),onClose()}),500)}()}),[isOpen]),shouldRender?react_dom.createPortal(react.createElement(StyledBottomSheetWrapper,{ref,$isOpen:isOpen,role:"dialog"},react.createElement(StyledBottomSheet,{ref:bottomSheetRef,$isOpen:isOpen,$height:height,$fullScreen:fullScreen,$translateY:translateY},(showDragHandle||closeOnPullDown)&&react.createElement(StyledDragHandleContainer,{onTouchStart:function handleTouchStart(e){closeOnPullDown&&setStartY(e.touches[0].clientY)},onTouchMove:function handleTouchMove(e){if(closeOnPullDown){var translate=e.touches[0].clientY-startY;window.requestAnimationFrame((function(){setTranslateY(translate>=0?translate:0)}))}},onTouchEnd:function handleTouchEnd(){closeOnPullDown&&(null!==startY&&(translateY>100?onClose():setTranslateY(0)),setStartY(null))}},react.createElement(StyledDragHandle,null)),react.createElement(StyledBottomSheetContent,{$height:!(showDragHandle||closeOnPullDown)&&"100%"},children))),document.body):null}));const BottomSheet_BottomSheet=BottomSheet;try{BottomSheet.displayName="BottomSheet",BottomSheet.__docgenInfo={description:"",displayName:"BottomSheet",props:{children:{defaultValue:null,description:"The content to be displayed inside the BottomSheet.",name:"children",required:!1,type:{name:"ReactNode"}},isOpen:{defaultValue:{value:"false"},description:"Determines whether the BottomSheet is open or closed.",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:{value:"() => {}"},description:"Callback function to be called when the BottomSheet is requested to be closed.",name:"onClose",required:!1,type:{name:"() => void"}},fullScreen:{defaultValue:{value:"false"},description:"If true, the BottomSheet will take up the full screen.",name:"fullScreen",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:{value:"true"},description:"If true, the BottomSheet will close when the backdrop is clicked.",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},height:{defaultValue:{value:"'50%'"},description:"The height of the BottomSheet.",name:"height",required:!1,type:{name:"string"}},showDragHandle:{defaultValue:{value:"true"},description:"If true, a drag handle will be shown at the top of the BottomSheet.",name:"showDragHandle",required:!1,type:{name:"boolean"}},closeOnPullDown:{defaultValue:{value:"true"},description:"If true, the BottomSheet will close when pulled down.",name:"closeOnPullDown",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/elements/BottomSheet/BottomSheet.tsx#BottomSheet"]={docgenInfo:BottomSheet.__docgenInfo,name:"BottomSheet",path:"ui/elements/BottomSheet/BottomSheet.tsx#BottomSheet"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./ui/elements/Button/index.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function index_stories_slicedToArray(r,e){return function index_stories_arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function index_stories_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function index_stories_unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return index_stories_arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?index_stories_arrayLikeToArray(r,a):void 0}}(r,e)||function index_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_stories_arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}const index_stories={title:"Elements/BottomSheet",component:BottomSheet_BottomSheet,parameters:{docs:{source:{code:"\n<div>\n    <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>\n    <BottomSheet\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        fullScreen={false}\n        closeOnBackdropClick={true}\n        height={'50%'}\n        showDragHandle={true}\n        closeOnPullDown={true}\n    >\n        Bottom Sheet Content Here!!!\n    </BottomSheet>\n</div>\n            "}}}};var Component=function Template(args){var _useState2=index_stories_slicedToArray((0,react.useState)(!1),2),isOpen=_useState2[0],setIsOpen=_useState2[1];return react.createElement("div",null,react.createElement(Button.Ay,{onClick:function onClick(){return setIsOpen(!0)}},"Open BottomSheet"),react.createElement(BottomSheet_BottomSheet,_extends({},args,{isOpen,onClose:function onClose(){return setIsOpen(!1)}}),react.createElement("div",{style:{padding:"2px 12px"}},react.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},react.createElement("span",null,"These are my tasks for next week:"),react.createElement(Button.K0,{icon:"close",variant:"secondary-outlined",onClick:function onClick(){return setIsOpen(!1)}})),react.createElement("ul",null,Array.from({length:30}).map((function(_,index){return react.createElement("li",{key:index},"Task ",index+1)}))))))}.bind({});Component.args=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},{isOpen:!1,onClose:function onClose(){},fullScreen:!1,closeOnBackdropClick:!0,height:"50%",showDragHandle:!0,closeOnPullDown:!0});const __namedExportsOrder=["Component"];Component.parameters={...Component.parameters,docs:{...Component.parameters?.docs,source:{originalSource:"(args: BottomSheetProps) => {\n  const [isOpen, setIsOpen] = useState(false);\n  return <div>\n            <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>\n            <BottomSheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>\n                <div style={{\n        padding: '2px 12px'\n      }}>\n                    <div style={{\n          display: 'flex',\n          justifyContent: 'space-between',\n          alignItems: 'center'\n        }}>\n                        <span>These are my tasks for next week:</span>\n                        <IconButton icon=\"close\" variant=\"secondary-outlined\" onClick={() => setIsOpen(false)} />\n                    </div>\n                    <ul>\n                        {Array.from({\n            length: 30\n          }).map((_, index) =>\n          // eslint-disable-next-line react/no-array-index-key\n          <li key={index}>Task {index + 1}</li>)}\n                    </ul>\n                </div>\n            </BottomSheet>\n        </div>;\n}",...Component.parameters?.docs?.source}}}}}]);