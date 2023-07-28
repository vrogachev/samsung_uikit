/*! For license information please see components-Textarea-Textarea-stories.41c23338.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksamsung_uikit=self.webpackChunksamsung_uikit||[]).push([[679],{"./src/components/Textarea/Textarea.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/Textarea/Textarea.tsx").Z},Default={args:{defaultValue:"значение",placeholder:"Введите значение",onChange:event=>console.log("onChange",event),onBlur:event=>console.log("onBlur",event),onFocus:event=>console.log("onFocus",event),onFocusChange:status=>console.log("status",status)}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultValue: \"значение\",\n    placeholder: \"Введите значение\",\n    onChange: event => console.log('onChange', event),\n    onBlur: event => console.log('onBlur', event),\n    onFocus: event => console.log('onFocus', event),\n    onFocusChange: status => console.log('status', status)\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Textarea/Textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Textarea_Textarea});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Textarea_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Textarea/Textarea.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Textarea_module.Z,options);const Textarea_Textarea_module=Textarea_module.Z&&Textarea_module.Z.locals?Textarea_module.Z.locals:void 0;var useFocus=__webpack_require__("./src/interactions/focus/useFocus.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea=props=>{const{loading=!1,...otherProps}=props,[isFocused,onFocusChange]=(0,react.useState)(!1),{focusProps}=(0,useFocus.K)({disabled:otherProps.disabled,onFocusChange:v=>{onFocusChange(v),props.onFocusChange?.(v)}});return(0,jsx_runtime.jsx)("textarea",{...otherProps,...focusProps,"data-focused":isFocused,"data-loading":loading,className:Textarea_Textarea_module.Textarea,"data-disabled":otherProps.disabled})};Textarea.displayName="Textarea";const Textarea_Textarea=Textarea;try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onFocusChange:{defaultValue:null,description:"",name:"onFocusChange",required:!1,type:{name:"((isFocused: boolean) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Textarea/Textarea.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"src/components/Textarea/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/interactions/focus/useFocus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useFocus});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useFocus(props){const propsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props);propsRef.current=props;const onFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const{onFocus,onFocusChange}=propsRef.current;event.target===event.currentTarget&&(onFocus?.(event),onFocusChange?.(!0))}),[]),onBlur=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const{onBlur,onFocusChange}=propsRef.current;event.target===event.currentTarget&&(onBlur?.(event),onFocusChange?.(!1))}),[]),focusProps={};return props.disabled||((props.onFocus||props.onFocusChange)&&(focusProps.onFocus=onFocus),(props.onBlur||props.onFocusChange)&&(focusProps.onBlur=onBlur)),{focusProps}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Textarea/Textarea.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Textarea-module__Textarea--w1aBN{resize:vertical;width:100%;outline:none;min-width:100%;min-height:95px;max-height:200px;background:#fff;border-radius:4px;padding:10px 15px;font-size:14px;font-weight:600;border:1px solid var(--color-grey)}.Textarea-module__Textarea--w1aBN::placeholder{font-weight:300;color:var(--color-placeholder)}.Textarea-module__Textarea--w1aBN::-webkit-scrollbar{width:15px}.Textarea-module__Textarea--w1aBN::-webkit-scrollbar-track{box-shadow:inset 0 0 2px rgba(0,0,0,0)}.Textarea-module__Textarea--w1aBN::-webkit-scrollbar-thumb{border:5px solid rgba(0,0,0,0);border-radius:100px;background-clip:content-box;background-color:var(--color-green)}.Textarea-module__Textarea--w1aBN[data-focused=true]{border:1px solid var(--base-blue);box-shadow:0 1px 3px 0 rgba(17,84,204,.3)}.Textarea-module__Textarea--w1aBN[data-disabled=true]{background:var(--color-grey);border:1px solid var(--color-grey)}","",{version:3,sources:["webpack://./src/components/Textarea/Textarea.module.scss"],names:[],mappings:"AAAA,kCACE,eAAA,CACA,UAAA,CACA,YAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CACA,eAAA,CACA,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CACA,kCAAA,CACA,+CACE,eAAA,CACA,8BAAA,CAEF,qDACE,UAAA,CAEF,2DACE,sCAAA,CAGF,2DACE,8BAAA,CACA,mBAAA,CACA,2BAAA,CACA,mCAAA,CAIJ,qDACE,iCAAA,CACA,yCAAA,CAGF,sDACE,4BAAA,CACA,kCAAA",sourcesContent:['.Textarea {\r\n  resize: vertical;\r\n  width: 100%;\r\n  outline: none;\r\n  min-width: 100%;\r\n  min-height: 95px;\r\n  max-height: 200px;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  padding: 10px 15px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  border: 1px solid var(--color-grey);\r\n  &::placeholder {\r\n    font-weight: 300;\r\n    color: var(--color-placeholder);\r\n  }\r\n  &::-webkit-scrollbar {\r\n    width: 15px;\r\n  }\r\n  &::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0);\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb {\r\n    border: 5px solid transparent;\r\n    border-radius: 100px;\r\n    background-clip: content-box;\r\n    background-color: var(--color-green);\r\n  }\r\n}\r\n\r\n.Textarea[data-focused="true"] {\r\n  border: 1px solid var(--base-blue);\r\n  box-shadow: 0 1px 3px 0 rgba(17, 84, 204, 0.3);\r\n}\r\n\r\n.Textarea[data-disabled="true"] {\r\n  background: var(--color-grey);\r\n  border: 1px solid var(--color-grey);\r\n}\r\n\r\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Textarea:"Textarea-module__Textarea--w1aBN"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);