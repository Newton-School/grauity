"use strict";(self.webpackChunk_newtonschool_grauity=self.webpackChunk_newtonschool_grauity||[]).push([[197],{"./stories/elements/SelectDropdown/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,react=__webpack_require__("./node_modules/react/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),hooks=__webpack_require__("./hooks/index.ts"),Icon=__webpack_require__("./ui/elements/Icon/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./ui/elements/Button/index.ts");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var StyledSelectDropdownWrapper=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    position: relative;\n"]))),StyledSelectDropdownButton=(0,styled_components_browser_esm.Ay)(Button.Ay)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    height: 100%;\n    min-height: 0;\n"]))),StyledSelectDropdownContainer=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    position: absolute;\n    top: calc(100% + var(--spacing-4px, 4px));\n    left: 0;\n    width: max-content;\n    min-width: 100%;\n    max-width: 300px;\n    max-height: 300px;\n    overflow: hidden;\n    padding: var(--spacing-8px, 8px);\n    font-family: var(--font-family, 'Mono Sans');\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-4px, 4px);\n    border-radius: var(--spacing-12px, 12px);\n    border: var(--spacing-1px, 1px) solid var(--border, #e1e5ea);\n    background: var(--bg-primary, #fff);\n    box-shadow: var(--spacing-2px, 2px) var(--spacing-4px, 4px)\n        var(--spacing-8px, 8px) var(--spacing-0px, 0px) rgba(0, 0, 0, 0.06);\n"]))),StyledSelectDropdownList=styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    width: 100%;\n    overflow: auto;\n"]))),StyledSelectDropdownItem=styled_components_browser_esm.Ay.div(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    align-self: stretch;\n    gap: var(--spacing-8px, 8px);\n    padding: var(--spacing-8px, 8px) var(--spacing-4px, 4px);\n    border-radius: var(--spacing-4px, 4px);\n    color: var(--text-secondary, #5b6271);\n    font-size: var(--spacing-14px, 14px);\n    font-style: normal;\n    font-weight: 500;\n    cursor: pointer;\n\n    &:hover {\n        background: var(--bg-secondary, #f6f7f9);\n    }\n\n    ","\n"])),(function(_ref){return _ref.$disabled&&(0,styled_components_browser_esm.AH)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n            color: var(--text-disabled, #8c95a6);\n            cursor: default;\n            &:hover {\n                background: var(--bg-primary, #fff);\n            }\n        "])))})),StyledDropdownSearchContainer=styled_components_browser_esm.Ay.div(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n    width: 100%;\n    height: var(--spacing-36px, 36px);\n    padding: var(--spacing-12px, 12px);\n    display: flex;\n    align-items: center;\n    align-self: stretch;\n    gap: var(--spacing-8px, 8px);\n    border-radius: var(--corner-radius-8px, 8px);\n    border: var(--spacing-1px, 1px) solid var(--border-neutral, #e1e5ea);\n    background: var(--bg-primary, #ffffff);\n"]))),StyledDropdownSearchInput=styled_components_browser_esm.Ay.input(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n    outline: none;\n    border: none;\n    background: var(--bg-primary, #ffffff);\n    color: var(--text-primary, #16191d);\n    font-size: var(--spacing-14px, 14px);\n    font-style: normal;\n    font-weight: 500;\n"])));function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var SelectDropdown_SelectDropdown=(0,react.forwardRef)((function(props,ref){var _props$options=props.options,options=void 0===_props$options?new Set([]):_props$options,iconName=props.iconName,_props$text=props.text,text=void 0===_props$text?"Select":_props$text,_props$shouldEnableSe=props.shouldEnableSearch,shouldEnableSearch=void 0===_props$shouldEnableSe||_props$shouldEnableSe,_props$searchPlacehol=props.searchPlaceholder,searchPlaceholder=void 0===_props$searchPlacehol?"Search":_props$searchPlacehol,_props$onSearchInputC=props.onSearchInputChange,onSearchInputChange=void 0===_props$onSearchInputC?function(){}:_props$onSearchInputC,_props$onChange=props.onChange,onChange=void 0===_props$onChange?function(){}:_props$onChange,_props$noOptionsText=props.noOptionsText,noOptionsText=void 0===_props$noOptionsText?"-- No options available --":_props$noOptionsText,_useState2=_slicedToArray((0,react.useState)(!1),2),isOpened=_useState2[0],setIsOpened=_useState2[1],_useState4=_slicedToArray((0,react.useState)(""),2),searchInput=_useState4[0],setSearchInput=_useState4[1],dropdownRef=(0,react.useRef)(),debouncedSearchCallback=(0,react.useCallback)((0,lodash.debounce)((function(value){onSearchInputChange(value)}),500),[]);return(0,hooks.W3)(dropdownRef,(function(){return setIsOpened(!1)})),react.createElement(StyledSelectDropdownWrapper,{ref,role:"combobox"},react.createElement(StyledSelectDropdownButton,{onClick:function onClick(){return setIsOpened(!0)}},iconName&&react.createElement(Icon.I,{name:iconName,color:"var(--text-action)"}),text),isOpened&&react.createElement(StyledSelectDropdownContainer,{ref:dropdownRef},shouldEnableSearch&&react.createElement(StyledDropdownSearchContainer,null,react.createElement(Icon.I,{name:"search"}),react.createElement(StyledDropdownSearchInput,{role:"searchbox",placeholder:searchPlaceholder,value:searchInput,onChange:function onChange(e){debouncedSearchCallback(e.target.value),setSearchInput(e.target.value)}})),react.createElement(StyledSelectDropdownList,null,0===options.size&&react.createElement(StyledSelectDropdownItem,{$disabled:!0},noOptionsText),Array.from(options).map((function(option){return react.createElement(StyledSelectDropdownItem,{key:option.id,onClick:function onClick(){setIsOpened(!1),onChange(option)},role:"option"},option.label)})))))}));const elements_SelectDropdown_SelectDropdown=SelectDropdown_SelectDropdown;try{SelectDropdown_SelectDropdown.displayName="SelectDropdown",SelectDropdown_SelectDropdown.__docgenInfo={description:"",displayName:"SelectDropdown",props:{options:{defaultValue:{value:"new Set([])"},description:"Set of options available for selection.",name:"options",required:!1,type:{name:"Set<DropdownOption>"}},iconName:{defaultValue:null,description:"Name of the icon to display in the dropdown button.",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"check"'},{value:'"file"'},{value:'"search"'},{value:'"code"'},{value:'"label"'},{value:'"menu"'},{value:'"video"'},{value:'"circle"'},{value:'"filter"'},{value:'"exclamation-circle-filled"'},{value:'"exclamation-circle"'},{value:'"exclamation-triangle-filled"'},{value:'"exclamation-triangle"'},{value:'"info-circle-filled"'},{value:'"info-circle"'},{value:'"question-circle-filled"'},{value:'"question-circle"'},{value:'"code-alt-filled"'},{value:'"code-alt"'},{value:'"code-filled"'},{value:'"project-filled"'},{value:'"project"'},{value:'"terminal-filled"'},{value:'"terminal"'},{value:'"desktop-filled"'},{value:'"desktop"'},{value:'"gamepad-filled"'},{value:'"gamepad"'},{value:'"lamp-filled"'},{value:'"lamp"'},{value:'"laptop-filled"'},{value:'"laptop"'},{value:'"mobile-filled"'},{value:'"mobile"'},{value:'"archive-filled"'},{value:'"archive"'},{value:'"bookmark-filled"'},{value:'"bookmark"'},{value:'"file-alt-filled"'},{value:'"file-alt"'},{value:'"file-filled"'},{value:'"folder-filled"'},{value:'"folder-open-filled"'},{value:'"folder-open"'},{value:'"folder"'},{value:'"label-filled"'},{value:'"note-filled"'},{value:'"note"'},{value:'"pen-filled"'},{value:'"pen"'},{value:'"pin-filled"'},{value:'"pin"'},{value:'"headphone-filled"'},{value:'"headphone-mic-filled"'},{value:'"headphone-mic"'},{value:'"headphone"'},{value:'"mic-filled"'},{value:'"mic"'},{value:'"micmute-filled"'},{value:'"micmute"'},{value:'"pause-circle-filled"'},{value:'"pause-circle"'},{value:'"pause-filled"'},{value:'"pause"'},{value:'"play-circle-filled"'},{value:'"play-circle"'},{value:'"play-filled"'},{value:'"play-rectangle-filled"'},{value:'"play-rectangle"'},{value:'"play"'},{value:'"video-filled"'},{value:'"video-off-filled"'},{value:'"video-off"'},{value:'"volume-maximum-filled"'},{value:'"volume-maximum"'},{value:'"volume-minimum-filled"'},{value:'"volume-minimum"'},{value:'"volume-mute-filled"'},{value:'"volume-mute"'},{value:'"comment-filled"'},{value:'"comment"'},{value:'"connector-filled"'},{value:'"connector"'},{value:'"doubt-alt2-filled"'},{value:'"doubt-alt2"'},{value:'"doubt-filled"'},{value:'"doubt-message-filled"'},{value:'"doubt-message"'},{value:'"doubt"'},{value:'"hearing-filled"'},{value:'"hearing"'},{value:'"heart-filled"'},{value:'"heart"'},{value:'"lock-filled"'},{value:'"lock-open-filled"'},{value:'"lock-open"'},{value:'"lock"'},{value:'"message-filled"'},{value:'"message-info-filled"'},{value:'"message-info"'},{value:'"message"'},{value:'"milestone-filled"'},{value:'"milestone"'},{value:'"scholar-hat-filled"'},{value:'"scholar-hat"'},{value:'"smiley-bad-filled"'},{value:'"smiley-bad"'},{value:'"smiley-filled"'},{value:'"smiley-happy-filled"'},{value:'"smiley-happy"'},{value:'"smiley-neutral-filled"'},{value:'"smiley-neutral"'},{value:'"smiley-sad-filled"'},{value:'"smiley-sad"'},{value:'"smiley-very-bad-filled"'},{value:'"smiley-very-bad"'},{value:'"smiley-very-happy-filled"'},{value:'"smiley-very-happy"'},{value:'"smiley"'},{value:'"spark-filled"'},{value:'"spark"'},{value:'"sparkle-filled"'},{value:'"sparkle"'},{value:'"target-filled"'},{value:'"target"'},{value:'"check-badge-filled"'},{value:'"check-badge"'},{value:'"crown-filled"'},{value:'"crown"'},{value:'"flag-filled"'},{value:'"flag"'},{value:'"gift-filled"'},{value:'"gift"'},{value:'"leaderboard-filled"'},{value:'"leaderboard"'},{value:'"medal-filled"'},{value:'"medal"'},{value:'"star-filled"'},{value:'"star"'},{value:'"trophy-filled"'},{value:'"trophy"'},{value:'"arrow-double-filled"'},{value:'"arrow-double"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-left-filled"'},{value:'"arrow-down-left"'},{value:'"arrow-down-right-filled"'},{value:'"arrow-down-right"'},{value:'"arrow-down"'},{value:'"arrow-left-filled"'},{value:'"arrow-left"'},{value:'"arrow-right-filled"'},{value:'"arrow-right"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-left-filled"'},{value:'"arrow-up-left"'},{value:'"arrow-up-right-filled"'},{value:'"arrow-up-right"'},{value:'"arrow-up"'},{value:'"ban-filled"'},{value:'"ban"'},{value:'"bin-filled"'},{value:'"bin"'},{value:'"book-alt-filled"'},{value:'"book-alt"'},{value:'"book-alt2-filled"'},{value:'"book-alt2"'},{value:'"book-alt3-filled"'},{value:'"book-alt3"'},{value:'"book-filled"'},{value:'"book"'},{value:'"briefcase-alt2-filled"'},{value:'"briefcase-alt2"'},{value:'"briefcase-filled"'},{value:'"briefcase"'},{value:'"broadcast-filled"'},{value:'"broadcast"'},{value:'"bug-filled"'},{value:'"bug"'},{value:'"bulb-filled"'},{value:'"bulb"'},{value:'"call-end-filled"'},{value:'"call-end"'},{value:'"call-start-filled"'},{value:'"call-start"'},{value:'"camera-filled"'},{value:'"camera"'},{value:'"caret-double-filled"'},{value:'"caret-double"'},{value:'"caret-down-filled"'},{value:'"caret-down"'},{value:'"caret-left-filled"'},{value:'"caret-left"'},{value:'"caret-right-filled"'},{value:'"caret-right"'},{value:'"caret-up-filled"'},{value:'"caret-up"'},{value:'"check-circle-filled"'},{value:'"check-circle"'},{value:'"check-filled"'},{value:'"check-square-filled"'},{value:'"check-square"'},{value:'"chevron-down-double-filled"'},{value:'"chevron-down-double"'},{value:'"chevron-down-filled"'},{value:'"chevron-down"'},{value:'"chevron-left-double-filled"'},{value:'"chevron-left-double"'},{value:'"chevron-left-filled"'},{value:'"chevron-left"'},{value:'"chevron-right-double-filled"'},{value:'"chevron-right-double"'},{value:'"chevron-right-filled"'},{value:'"chevron-right"'},{value:'"chevron-up-double-filled"'},{value:'"chevron-up-double"'},{value:'"chevron-up-filled"'},{value:'"chevron-up"'},{value:'"circle-filled"'},{value:'"clock-alarm-filled"'},{value:'"clock-alarm"'},{value:'"close-circle-filled"'},{value:'"close-circle"'},{value:'"close-filled"'},{value:'"close-square-filled"'},{value:'"close-square"'},{value:'"close"'},{value:'"compass-filled"'},{value:'"compass"'},{value:'"diamond-filled"'},{value:'"diamond"'},{value:'"double-check-filled"'},{value:'"double-check"'},{value:'"download-filled"'},{value:'"download"'},{value:'"email-alt-filled"'},{value:'"email-alt"'},{value:'"email-filled"'},{value:'"email"'},{value:'"filter-filled"'},{value:'"floppy-filled"'},{value:'"floppy"'},{value:'"forward-filled"'},{value:'"forward"'},{value:'"gear-filled"'},{value:'"gear"'},{value:'"git-commit-filled"'},{value:'"git-commit"'},{value:'"globe-filled"'},{value:'"globe"'},{value:'"grip-hortizontal-filled"'},{value:'"grip-hortizontal"'},{value:'"grip-vertical-filled"'},{value:'"grip-vertical"'},{value:'"growth-down-filled"'},{value:'"growth-down"'},{value:'"growth-up-filled"'},{value:'"growth-up"'},{value:'"help-filled"'},{value:'"help"'},{value:'"hold-filled"'},{value:'"hold"'},{value:'"home-filled"'},{value:'"home"'},{value:'"hourglass-filled"'},{value:'"hourglass"'},{value:'"kebab-horizontal-filled"'},{value:'"kebab-horizontal"'},{value:'"kebab-vertical-filled"'},{value:'"kebab-vertical"'},{value:'"link-filled"'},{value:'"list-checked-filled"'},{value:'"list-checked"'},{value:'"list-filled"'},{value:'"list"'},{value:'"load-filled"'},{value:'"load"'},{value:'"loudspeaker-filled"'},{value:'"loudspeaker"'},{value:'"map-pin-alt1-filled"'},{value:'"map-pin-alt1"'},{value:'"map-pin-alt2-filled"'},{value:'"map-pin-alt2"'},{value:'"map-pin-filled"'},{value:'"map-pin"'},{value:'"maximize-filled"'},{value:'"maximize"'},{value:'"menu-alt2-filled"'},{value:'"menu-alt2"'},{value:'"menu-filled"'},{value:'"menu-grid-filled"'},{value:'"menu-grid"'},{value:'"microchip-filled"'},{value:'"microchip"'},{value:'"minimize-filled"'},{value:'"minimize"'},{value:'"minus-circle-filled"'},{value:'"minus-circle"'},{value:'"minus-square-filled"'},{value:'"minus-square"'},{value:'"moon-filled"'},{value:'"moon"'},{value:'"new-tab-filled"'},{value:'"new-tab"'},{value:'"paper-clip-filled"'},{value:'"paper-clip"'},{value:'"plus-circle-filled"'},{value:'"plus-circle"'},{value:'"plus-filled"'},{value:'"plus-square-filled"'},{value:'"plus-square"'},{value:'"plus"'},{value:'"printer-filled"'},{value:'"printer"'},{value:'"quiz-filled"'},{value:'"quiz"'},{value:'"refresh-filled"'},{value:'"refresh"'},{value:'"remove-filled"'},{value:'"remove"'},{value:'"reply-filled"'},{value:'"reply"'},{value:'"screenshare-start-filled"'},{value:'"screenshare-start"'},{value:'"screenshare-stop-filled"'},{value:'"screenshare-stop"'},{value:'"search-filled"'},{value:'"share-filled"'},{value:'"share"'},{value:'"shield-alert-filled"'},{value:'"shield-alert"'},{value:'"shield-check-filled"'},{value:'"shield-check"'},{value:'"shield-filled"'},{value:'"shield-lock-filled"'},{value:'"shield-lock"'},{value:'"shield-x-filled"'},{value:'"shield-x"'},{value:'"shield"'},{value:'"sidebar-left-filled"'},{value:'"sidebar-left"'},{value:'"sidebar-right-filled"'},{value:'"sidebar-right"'},{value:'"signin-filled"'},{value:'"signin"'},{value:'"signout-filled"'},{value:'"signout"'},{value:'"slider-filled"'},{value:'"slider"'},{value:'"square-filled"'},{value:'"square"'},{value:'"sticky-note-filled"'},{value:'"sticky-note"'},{value:'"study-plan-filled"'},{value:'"study-plan"'},{value:'"sun-filled"'},{value:'"sun"'},{value:'"thumbs-down-filled"'},{value:'"thumbs-down"'},{value:'"thumbs-up-filled"'},{value:'"thumbs-up"'},{value:'"thunder-filled"'},{value:'"thunder"'},{value:'"upload-filled"'},{value:'"upload"'},{value:'"wrench-filled"'},{value:'"wrench"'},{value:'"bell-filled"'},{value:'"bell"'},{value:'"calender-check-filled"'},{value:'"calender-check"'},{value:'"calender-filled"'},{value:'"calender-plus-filled"'},{value:'"calender-plus"'},{value:'"calender"'},{value:'"clock-filled"'},{value:'"clock"'},{value:'"rewatch-filled"'},{value:'"rewatch"'},{value:'"stopwatch-filled"'},{value:'"stopwatch"'},{value:'"bot-filled"'},{value:'"bot"'},{value:'"person-check-filled"'},{value:'"person-check"'},{value:'"person-filled"'},{value:'"person-plus-filled"'},{value:'"person-plus"'},{value:'"person"'},{value:'"user-speak-filled"'},{value:'"user-speak"'},{value:'"users-filled"'},{value:'"users"'}]}},text:{defaultValue:{value:"Select"},description:"Text to display in the dropdown button.",name:"text",required:!1,type:{name:"string"}},shouldEnableSearch:{defaultValue:{value:"true"},description:"Flag to enable or disable the search functionality.",name:"shouldEnableSearch",required:!1,type:{name:"boolean"}},onSearchInputChange:{defaultValue:null,description:"Callback function triggered when the search input value changes.\n@param value - The current value of the search input.",name:"onSearchInputChange",required:!1,type:{name:"(value: string) => void"}},searchPlaceholder:{defaultValue:{value:"Search"},description:"Placeholder text for the search input field.",name:"searchPlaceholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback function triggered when the option is selected.\n@param option - The selected option.",name:"onChange",required:!1,type:{name:"(option: DropdownOption) => void"}},noOptionsText:{defaultValue:{value:"-- No options available --"},description:"Text to display when no option is available.",name:"noOptionsText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/elements/SelectDropdown/SelectDropdown.tsx#SelectDropdown"]={docgenInfo:SelectDropdown_SelectDropdown.__docgenInfo,name:"SelectDropdown",path:"ui/elements/SelectDropdown/SelectDropdown.tsx#SelectDropdown"})}catch(__react_docgen_typescript_loader_error){}try{SelectDropdown.displayName="SelectDropdown",SelectDropdown.__docgenInfo={description:"",displayName:"SelectDropdown",props:{options:{defaultValue:{value:"new Set([])"},description:"Set of options available for selection.",name:"options",required:!1,type:{name:"Set<DropdownOption>"}},iconName:{defaultValue:null,description:"Name of the icon to display in the dropdown button.",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"check"'},{value:'"file"'},{value:'"search"'},{value:'"code"'},{value:'"label"'},{value:'"menu"'},{value:'"video"'},{value:'"circle"'},{value:'"filter"'},{value:'"exclamation-circle-filled"'},{value:'"exclamation-circle"'},{value:'"exclamation-triangle-filled"'},{value:'"exclamation-triangle"'},{value:'"info-circle-filled"'},{value:'"info-circle"'},{value:'"question-circle-filled"'},{value:'"question-circle"'},{value:'"code-alt-filled"'},{value:'"code-alt"'},{value:'"code-filled"'},{value:'"project-filled"'},{value:'"project"'},{value:'"terminal-filled"'},{value:'"terminal"'},{value:'"desktop-filled"'},{value:'"desktop"'},{value:'"gamepad-filled"'},{value:'"gamepad"'},{value:'"lamp-filled"'},{value:'"lamp"'},{value:'"laptop-filled"'},{value:'"laptop"'},{value:'"mobile-filled"'},{value:'"mobile"'},{value:'"archive-filled"'},{value:'"archive"'},{value:'"bookmark-filled"'},{value:'"bookmark"'},{value:'"file-alt-filled"'},{value:'"file-alt"'},{value:'"file-filled"'},{value:'"folder-filled"'},{value:'"folder-open-filled"'},{value:'"folder-open"'},{value:'"folder"'},{value:'"label-filled"'},{value:'"note-filled"'},{value:'"note"'},{value:'"pen-filled"'},{value:'"pen"'},{value:'"pin-filled"'},{value:'"pin"'},{value:'"headphone-filled"'},{value:'"headphone-mic-filled"'},{value:'"headphone-mic"'},{value:'"headphone"'},{value:'"mic-filled"'},{value:'"mic"'},{value:'"micmute-filled"'},{value:'"micmute"'},{value:'"pause-circle-filled"'},{value:'"pause-circle"'},{value:'"pause-filled"'},{value:'"pause"'},{value:'"play-circle-filled"'},{value:'"play-circle"'},{value:'"play-filled"'},{value:'"play-rectangle-filled"'},{value:'"play-rectangle"'},{value:'"play"'},{value:'"video-filled"'},{value:'"video-off-filled"'},{value:'"video-off"'},{value:'"volume-maximum-filled"'},{value:'"volume-maximum"'},{value:'"volume-minimum-filled"'},{value:'"volume-minimum"'},{value:'"volume-mute-filled"'},{value:'"volume-mute"'},{value:'"comment-filled"'},{value:'"comment"'},{value:'"connector-filled"'},{value:'"connector"'},{value:'"doubt-alt2-filled"'},{value:'"doubt-alt2"'},{value:'"doubt-filled"'},{value:'"doubt-message-filled"'},{value:'"doubt-message"'},{value:'"doubt"'},{value:'"hearing-filled"'},{value:'"hearing"'},{value:'"heart-filled"'},{value:'"heart"'},{value:'"lock-filled"'},{value:'"lock-open-filled"'},{value:'"lock-open"'},{value:'"lock"'},{value:'"message-filled"'},{value:'"message-info-filled"'},{value:'"message-info"'},{value:'"message"'},{value:'"milestone-filled"'},{value:'"milestone"'},{value:'"scholar-hat-filled"'},{value:'"scholar-hat"'},{value:'"smiley-bad-filled"'},{value:'"smiley-bad"'},{value:'"smiley-filled"'},{value:'"smiley-happy-filled"'},{value:'"smiley-happy"'},{value:'"smiley-neutral-filled"'},{value:'"smiley-neutral"'},{value:'"smiley-sad-filled"'},{value:'"smiley-sad"'},{value:'"smiley-very-bad-filled"'},{value:'"smiley-very-bad"'},{value:'"smiley-very-happy-filled"'},{value:'"smiley-very-happy"'},{value:'"smiley"'},{value:'"spark-filled"'},{value:'"spark"'},{value:'"sparkle-filled"'},{value:'"sparkle"'},{value:'"target-filled"'},{value:'"target"'},{value:'"check-badge-filled"'},{value:'"check-badge"'},{value:'"crown-filled"'},{value:'"crown"'},{value:'"flag-filled"'},{value:'"flag"'},{value:'"gift-filled"'},{value:'"gift"'},{value:'"leaderboard-filled"'},{value:'"leaderboard"'},{value:'"medal-filled"'},{value:'"medal"'},{value:'"star-filled"'},{value:'"star"'},{value:'"trophy-filled"'},{value:'"trophy"'},{value:'"arrow-double-filled"'},{value:'"arrow-double"'},{value:'"arrow-down-filled"'},{value:'"arrow-down-left-filled"'},{value:'"arrow-down-left"'},{value:'"arrow-down-right-filled"'},{value:'"arrow-down-right"'},{value:'"arrow-down"'},{value:'"arrow-left-filled"'},{value:'"arrow-left"'},{value:'"arrow-right-filled"'},{value:'"arrow-right"'},{value:'"arrow-up-filled"'},{value:'"arrow-up-left-filled"'},{value:'"arrow-up-left"'},{value:'"arrow-up-right-filled"'},{value:'"arrow-up-right"'},{value:'"arrow-up"'},{value:'"ban-filled"'},{value:'"ban"'},{value:'"bin-filled"'},{value:'"bin"'},{value:'"book-alt-filled"'},{value:'"book-alt"'},{value:'"book-alt2-filled"'},{value:'"book-alt2"'},{value:'"book-alt3-filled"'},{value:'"book-alt3"'},{value:'"book-filled"'},{value:'"book"'},{value:'"briefcase-alt2-filled"'},{value:'"briefcase-alt2"'},{value:'"briefcase-filled"'},{value:'"briefcase"'},{value:'"broadcast-filled"'},{value:'"broadcast"'},{value:'"bug-filled"'},{value:'"bug"'},{value:'"bulb-filled"'},{value:'"bulb"'},{value:'"call-end-filled"'},{value:'"call-end"'},{value:'"call-start-filled"'},{value:'"call-start"'},{value:'"camera-filled"'},{value:'"camera"'},{value:'"caret-double-filled"'},{value:'"caret-double"'},{value:'"caret-down-filled"'},{value:'"caret-down"'},{value:'"caret-left-filled"'},{value:'"caret-left"'},{value:'"caret-right-filled"'},{value:'"caret-right"'},{value:'"caret-up-filled"'},{value:'"caret-up"'},{value:'"check-circle-filled"'},{value:'"check-circle"'},{value:'"check-filled"'},{value:'"check-square-filled"'},{value:'"check-square"'},{value:'"chevron-down-double-filled"'},{value:'"chevron-down-double"'},{value:'"chevron-down-filled"'},{value:'"chevron-down"'},{value:'"chevron-left-double-filled"'},{value:'"chevron-left-double"'},{value:'"chevron-left-filled"'},{value:'"chevron-left"'},{value:'"chevron-right-double-filled"'},{value:'"chevron-right-double"'},{value:'"chevron-right-filled"'},{value:'"chevron-right"'},{value:'"chevron-up-double-filled"'},{value:'"chevron-up-double"'},{value:'"chevron-up-filled"'},{value:'"chevron-up"'},{value:'"circle-filled"'},{value:'"clock-alarm-filled"'},{value:'"clock-alarm"'},{value:'"close-circle-filled"'},{value:'"close-circle"'},{value:'"close-filled"'},{value:'"close-square-filled"'},{value:'"close-square"'},{value:'"close"'},{value:'"compass-filled"'},{value:'"compass"'},{value:'"diamond-filled"'},{value:'"diamond"'},{value:'"double-check-filled"'},{value:'"double-check"'},{value:'"download-filled"'},{value:'"download"'},{value:'"email-alt-filled"'},{value:'"email-alt"'},{value:'"email-filled"'},{value:'"email"'},{value:'"filter-filled"'},{value:'"floppy-filled"'},{value:'"floppy"'},{value:'"forward-filled"'},{value:'"forward"'},{value:'"gear-filled"'},{value:'"gear"'},{value:'"git-commit-filled"'},{value:'"git-commit"'},{value:'"globe-filled"'},{value:'"globe"'},{value:'"grip-hortizontal-filled"'},{value:'"grip-hortizontal"'},{value:'"grip-vertical-filled"'},{value:'"grip-vertical"'},{value:'"growth-down-filled"'},{value:'"growth-down"'},{value:'"growth-up-filled"'},{value:'"growth-up"'},{value:'"help-filled"'},{value:'"help"'},{value:'"hold-filled"'},{value:'"hold"'},{value:'"home-filled"'},{value:'"home"'},{value:'"hourglass-filled"'},{value:'"hourglass"'},{value:'"kebab-horizontal-filled"'},{value:'"kebab-horizontal"'},{value:'"kebab-vertical-filled"'},{value:'"kebab-vertical"'},{value:'"link-filled"'},{value:'"list-checked-filled"'},{value:'"list-checked"'},{value:'"list-filled"'},{value:'"list"'},{value:'"load-filled"'},{value:'"load"'},{value:'"loudspeaker-filled"'},{value:'"loudspeaker"'},{value:'"map-pin-alt1-filled"'},{value:'"map-pin-alt1"'},{value:'"map-pin-alt2-filled"'},{value:'"map-pin-alt2"'},{value:'"map-pin-filled"'},{value:'"map-pin"'},{value:'"maximize-filled"'},{value:'"maximize"'},{value:'"menu-alt2-filled"'},{value:'"menu-alt2"'},{value:'"menu-filled"'},{value:'"menu-grid-filled"'},{value:'"menu-grid"'},{value:'"microchip-filled"'},{value:'"microchip"'},{value:'"minimize-filled"'},{value:'"minimize"'},{value:'"minus-circle-filled"'},{value:'"minus-circle"'},{value:'"minus-square-filled"'},{value:'"minus-square"'},{value:'"moon-filled"'},{value:'"moon"'},{value:'"new-tab-filled"'},{value:'"new-tab"'},{value:'"paper-clip-filled"'},{value:'"paper-clip"'},{value:'"plus-circle-filled"'},{value:'"plus-circle"'},{value:'"plus-filled"'},{value:'"plus-square-filled"'},{value:'"plus-square"'},{value:'"plus"'},{value:'"printer-filled"'},{value:'"printer"'},{value:'"quiz-filled"'},{value:'"quiz"'},{value:'"refresh-filled"'},{value:'"refresh"'},{value:'"remove-filled"'},{value:'"remove"'},{value:'"reply-filled"'},{value:'"reply"'},{value:'"screenshare-start-filled"'},{value:'"screenshare-start"'},{value:'"screenshare-stop-filled"'},{value:'"screenshare-stop"'},{value:'"search-filled"'},{value:'"share-filled"'},{value:'"share"'},{value:'"shield-alert-filled"'},{value:'"shield-alert"'},{value:'"shield-check-filled"'},{value:'"shield-check"'},{value:'"shield-filled"'},{value:'"shield-lock-filled"'},{value:'"shield-lock"'},{value:'"shield-x-filled"'},{value:'"shield-x"'},{value:'"shield"'},{value:'"sidebar-left-filled"'},{value:'"sidebar-left"'},{value:'"sidebar-right-filled"'},{value:'"sidebar-right"'},{value:'"signin-filled"'},{value:'"signin"'},{value:'"signout-filled"'},{value:'"signout"'},{value:'"slider-filled"'},{value:'"slider"'},{value:'"square-filled"'},{value:'"square"'},{value:'"sticky-note-filled"'},{value:'"sticky-note"'},{value:'"study-plan-filled"'},{value:'"study-plan"'},{value:'"sun-filled"'},{value:'"sun"'},{value:'"thumbs-down-filled"'},{value:'"thumbs-down"'},{value:'"thumbs-up-filled"'},{value:'"thumbs-up"'},{value:'"thunder-filled"'},{value:'"thunder"'},{value:'"upload-filled"'},{value:'"upload"'},{value:'"wrench-filled"'},{value:'"wrench"'},{value:'"bell-filled"'},{value:'"bell"'},{value:'"calender-check-filled"'},{value:'"calender-check"'},{value:'"calender-filled"'},{value:'"calender-plus-filled"'},{value:'"calender-plus"'},{value:'"calender"'},{value:'"clock-filled"'},{value:'"clock"'},{value:'"rewatch-filled"'},{value:'"rewatch"'},{value:'"stopwatch-filled"'},{value:'"stopwatch"'},{value:'"bot-filled"'},{value:'"bot"'},{value:'"person-check-filled"'},{value:'"person-check"'},{value:'"person-filled"'},{value:'"person-plus-filled"'},{value:'"person-plus"'},{value:'"person"'},{value:'"user-speak-filled"'},{value:'"user-speak"'},{value:'"users-filled"'},{value:'"users"'}]}},text:{defaultValue:{value:"Select"},description:"Text to display in the dropdown button.",name:"text",required:!1,type:{name:"string"}},shouldEnableSearch:{defaultValue:{value:"true"},description:"Flag to enable or disable the search functionality.",name:"shouldEnableSearch",required:!1,type:{name:"boolean"}},onSearchInputChange:{defaultValue:null,description:"Callback function triggered when the search input value changes.\n@param value - The current value of the search input.",name:"onSearchInputChange",required:!1,type:{name:"(value: string) => void"}},searchPlaceholder:{defaultValue:{value:"Search"},description:"Placeholder text for the search input field.",name:"searchPlaceholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback function triggered when the option is selected.\n@param option - The selected option.",name:"onChange",required:!1,type:{name:"(option: DropdownOption) => void"}},noOptionsText:{defaultValue:{value:"-- No options available --"},description:"Text to display when no option is available.",name:"noOptionsText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/elements/SelectDropdown/index.tsx#SelectDropdown"]={docgenInfo:SelectDropdown.__docgenInfo,name:"SelectDropdown",path:"ui/elements/SelectDropdown/index.tsx#SelectDropdown"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const index_stories={title:"Elements/SelectDropdown",component:elements_SelectDropdown_SelectDropdown,decorators:[function(Story){return react.createElement("div",{style:{width:"150px",height:"40px"}},react.createElement(Story,null))}]};var defaultArgs={iconName:"plus",text:"Select",options:new Set([{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"},{id:"6",label:"Option 6"},{id:"7",label:"Option 7"},{id:"8",label:"Option 8"},{id:"9",label:"Option 9"}]),shouldEnableSearch:!0,onSearchInputChange:function onSearchInputChange(){},searchPlaceholder:"Search",onChange:function onChange(){},noOptionsText:"-- No options available --"},Component=function Template(args){return react.createElement(elements_SelectDropdown_SelectDropdown,args)}.bind({});Component.args=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},defaultArgs);const __namedExportsOrder=["Component"];Component.parameters={...Component.parameters,docs:{...Component.parameters?.docs,source:{originalSource:"(args: SelectDropdownProps) => <SelectDropDown {...args} />",...Component.parameters?.docs?.source}}}}}]);