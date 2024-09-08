"use strict";(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[753],{"./stories/elements/Modal/MultiStepModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MultiStepModal_stories});var react=__webpack_require__("./node_modules/react/index.js"),MultiStepModal=__webpack_require__("./ui/elements/Modal/MultiStepModal.tsx"),withEnableBodyScroll=__webpack_require__("./stories/decorators/withEnableBodyScroll.tsx"),withInlineContainer=__webpack_require__("./stories/decorators/withInlineContainer.tsx"),Table=__webpack_require__("./ui/elements/Table/index.ts"),Typography=__webpack_require__("./ui/elements/Typography/index.ts"),simpleArgs=__webpack_require__("./stories/elements/Table/simpleArgs.tsx");const Modal_multiStepArgs={modalSteps:[{banner:react.createElement("img",{src:"https://via.placeholder.com/300x100",alt:"Banner"}),title:"Multi-step Modal Step 1",description:"This is a multi-step modal. Description goes here. \n From top to bottom elements of a Modal are Banner, Title, Description, Body, Pagination, Action Buttons. \n This step does not have modal body.",body:null,nextButtonText:"Go to Step 2",showBackButton:!1,buttonVariant:"primary"},{banner:null,title:react.createElement(Typography.Ay,{variant:"heading-semibold-h24"},"Multi-step Modal Step 2 (with custom title)"),description:"This step does not have a banner, and has body as an image. Neat innit?",body:react.createElement("img",{src:"https://via.placeholder.com/300x100",alt:"Banner"}),nextButtonText:"Go to Step 3",showBackButton:!0,buttonVariant:"secondary"},{banner:null,title:"Multi-step Modal Step 3",description:"This step has neither banner nor body. It only has description text.",body:null,nextButtonText:"Go to Step 4",showBackButton:!0,buttonVariant:"success"},{banner:null,title:"Multi-step Modal Step 4",description:null,body:react.createElement("img",{src:"https://via.placeholder.com/300x100",alt:"Banner"}),nextButtonText:"Go to Step 5",showBackButton:!0,buttonVariant:"danger"},{banner:null,title:"Multi-step Modal Step 5",description:"This is the final step. It has a custom body render function.",body:react.createElement(Table.A,{rows:simpleArgs.A.rows,columns:simpleArgs.A.columns,condensed:!0,striped:!0,borderAround:!0,borderWithin:!0,capitalizeHeaders:!0}),nextButtonText:"Awesome, Finish!",showBackButton:!0,buttonVariant:"warning"}],hideOnClickAway:!1,blurBackground:!1,onHide:function onHide(){return console.log("onHide")},onFinalStep:function onFinalStep(){return console.log("onFinalStep")},mobileBottomFullWidth:!1,onStepChange:function onStepChange(){return console.log("onStepChange")},showModalButtons:!0,showHeader:!0,modalPadding:"20px",modalBodyMargin:"20px 0 12px 0",width:"500px",height:"auto",minHeight:"auto",showCloseButton:!0},MultiStepModal_stories={title:"Elements/MultiStepModal",component:MultiStepModal.A,decorators:[withEnableBodyScroll.A,withInlineContainer.A]},Component=(args=>react.createElement(MultiStepModal.A,args)).bind({});Component.args={...Modal_multiStepArgs};const __namedExportsOrder=["Component"];Component.parameters={...Component.parameters,docs:{...Component.parameters?.docs,source:{originalSource:"(args: MultiStepModalProps) => <MultiStepModal {...args} />",...Component.parameters?.docs?.source}}}},"./stories/decorators/withEnableBodyScroll.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),withEnableBodyScroll=function withEnableBodyScroll(Story){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _document;"undefined"!=typeof window&&null!==(_document=document)&&void 0!==_document&&_document.body&&(document.body.style.overflow="auto")}),[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null)};const __WEBPACK_DEFAULT_EXPORT__=withEnableBodyScroll;try{withEnableBodyScroll.displayName="withEnableBodyScroll",withEnableBodyScroll.__docgenInfo={description:"This decorator is used to wrap stories with a container which enables body scroll.\nThis is useful for components using hook `useDisableBodyScroll` that disables body scroll.",displayName:"withEnableBodyScroll",props:{storyName:{defaultValue:null,description:"Override the display name in the UI (CSF v2)",name:"storyName",required:!1,type:{name:"string"}},play:{defaultValue:null,description:"Function that is executed after the story is rendered.",name:"play",required:!1,type:{name:"PlayFunction<ReactRenderer, Args>"}},globals:{defaultValue:null,description:"Override the globals values for this story",name:"globals",required:!1,type:{name:"Globals"}},story:{defaultValue:null,description:"@deprecated",name:"story",required:!1,type:{name:'Omit<StoryAnnotations<ReactRenderer, Args, Partial<Args>>, "story">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/decorators/withEnableBodyScroll.tsx#withEnableBodyScroll"]={docgenInfo:withEnableBodyScroll.__docgenInfo,name:"withEnableBodyScroll",path:"stories/decorators/withEnableBodyScroll.tsx#withEnableBodyScroll"})}catch(__react_docgen_typescript_loader_error){}},"./stories/decorators/withInlineContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),withInlineContainer=function withInlineContainer(Story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{transform:"translateZ(0)",height:"600px",width:"100%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))};const __WEBPACK_DEFAULT_EXPORT__=withInlineContainer;try{withInlineContainer.displayName="withInlineContainer",withInlineContainer.__docgenInfo={description:"This decorator is used to wrap stories with a container which forces the\ncomponent to be rendered inline.\n\nThis is useful for components like Modal whose position is fixed or absolute\nthat need to be rendered inline with a specific height and width\nin the Storybook UI.\n\nIt makes the use of `transform: translateZ(0)` to create a new stacking context\nand prevent the component from being clipped by its parent container.",displayName:"withInlineContainer",props:{storyName:{defaultValue:null,description:"Override the display name in the UI (CSF v2)",name:"storyName",required:!1,type:{name:"string"}},play:{defaultValue:null,description:"Function that is executed after the story is rendered.",name:"play",required:!1,type:{name:"PlayFunction<ReactRenderer, Args>"}},globals:{defaultValue:null,description:"Override the globals values for this story",name:"globals",required:!1,type:{name:"Globals"}},story:{defaultValue:null,description:"@deprecated",name:"story",required:!1,type:{name:'Omit<StoryAnnotations<ReactRenderer, Args, Partial<Args>>, "story">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/decorators/withInlineContainer.tsx#withInlineContainer"]={docgenInfo:withInlineContainer.__docgenInfo,name:"withInlineContainer",path:"stories/decorators/withInlineContainer.tsx#withInlineContainer"})}catch(__react_docgen_typescript_loader_error){}},"./stories/elements/Table/simpleArgs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ui_elements_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/elements/Button/index.ts");const __WEBPACK_DEFAULT_EXPORT__={columns:[{key:"name",display:"Name",align:"left"},{key:"age",display:"Age",align:"center"},{key:"action",display:"Action",align:"left"}],rows:[{name:{display:"John Doe",vAlign:"top"},age:{display:25},action:{render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Button__WEBPACK_IMPORTED_MODULE_1__.Ay,{size:"small",icon:"code"},"Click me")}}},{name:{display:"John Doe"},age:{display:25},action:{render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Button__WEBPACK_IMPORTED_MODULE_1__.Ay,{size:"small",icon:"code"},"Click me")}}},{name:{display:"John Doe"},age:{display:25},action:{render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Button__WEBPACK_IMPORTED_MODULE_1__.Ay,{size:"small",icon:"code"},"Click me")}}},{name:{display:"John Doe"},age:{display:25},action:{render:function render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ui_elements_Button__WEBPACK_IMPORTED_MODULE_1__.Ay,{size:"small",icon:"code"},"Click me")}}}],condensed:!0,striped:!0,borderAround:!0,borderWithin:!0,borderHorizontal:!0,borderVertical:!0,className:"",loading:!1,style:{},capitalizeHeaders:!0}}}]);