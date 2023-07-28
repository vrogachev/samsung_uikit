/*! For license information please see components-Button-Button-stories.eed81a48.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksamsung_uikit=self.webpackChunksamsung_uikit||[]).push([[747],{"./src/components/Button/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Accent:()=>Accent,Danger:()=>Danger,Default:()=>Default,Link:()=>Link,Primary:()=>Primary,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/Button/Button.tsx").Z},Default={args:{label:"Default button",theme:"default",size:"large",loading:!0,icon:"category"}},Primary={args:{label:"Primary button",theme:"primary"}},Accent={args:{label:"Accent button",theme:"accent"}},Danger={args:{label:"Danger button",theme:"danger"}},Link={args:{label:"Link button",theme:"link"}},Text={args:{label:"Text button",theme:"text"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Default button',\n    theme: 'default',\n    size: 'large',\n    loading: true,\n    icon: \"category\"\n  }\n}",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Primary button',\n    theme: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Accent.parameters={...Accent.parameters,docs:{...Accent.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Accent button',\n    theme: 'accent'\n  }\n}",...Accent.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Danger button',\n    theme: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Link button',\n    theme: 'link'\n  }\n}",...Link.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Text button',\n    theme: 'text'\n  }\n}",...Text.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Accent","Danger","Link","Text"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var hover=__webpack_require__("./src/interactions/hover/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=props=>{const{icon,label,onClick,size="small",theme="default",...otherProps}=props,buttonRef=(0,react.useRef)(null),{isHovered,hoverProps}=(0,hover.X)(otherProps),buttonIcon=icon&&(0,jsx_runtime.jsx)(Icon.Z,{name:icon,className:Button_Button_module.Icon});return(0,jsx_runtime.jsxs)("button",{...otherProps,...hoverProps,ref:buttonRef,onClick,"data-size":size,"data-theme":theme,"data-hovered":isHovered,className:Button_Button_module.Button,"data-loading":otherProps.loading,"data-disabled":otherProps.disabled,children:[buttonIcon," ",label]})};Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"add"'},{value:'"bell"'},{value:'"time"'},{value:'"empty"'},{value:'"close"'},{value:'"filter"'},{value:'"delete"'},{value:'"setting"'},{value:'"user"'},{value:'"category"'},{value:'"search"'},{value:'"calendar"'},{value:'"check"'},{value:'"fileText"'},{value:'"editCircle"'},{value:'"starRectangle"'},{value:'"smartphonePlus"'},{value:'"arrowDropDown"'},{value:'"arrowLeftCircle"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"link"'},{value:'"danger"'},{value:'"default"'},{value:'"primary"'},{value:'"accent"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Button-module__Button--YQQaO{color:#fff;outline:0;margin:0;cursor:pointer;user-select:none;align-items:center;display:inline-flex;font-size:14px;border-radius:4px;border:1px solid rgba(0,0,0,0)}.Button-module__Button--YQQaO[data-size=small]{height:39px;padding:0 16px}.Button-module__Button--YQQaO[data-size=large]{height:53px;padding:0 34px}.Button-module__Button--YQQaO[data-theme=default]{color:#000;background:#fff;border:1px solid var(--color-grey)}.Button-module__Button--YQQaO[data-theme=primary]{color:#fff;background:var(--base-blue)}.Button-module__Button--YQQaO[data-theme=accent]{color:#fff;background:var(--color-green);box-shadow:0 4px 12px 0 rgba(45,183,123,.5019607843)}.Button-module__Button--YQQaO[data-theme=danger]{color:#fff;background:var(--color-red)}.Button-module__Button--YQQaO[data-theme=text]{color:#000;background:#fff}.Button-module__Button--YQQaO[data-theme=link]{color:#000;background:#fff}.Button-module__Button--YQQaO[data-hovered=true][data-theme=default]{color:var(--base-blue);border:1px solid var(--base-blue)}.Button-module__Button--YQQaO[data-hovered=true][data-theme=primary]{background:var(--base-blue-hoverd)}.Button-module__Button--YQQaO[data-hovered=true][data-theme=accent]{background:var(--color-green-hoverd)}.Button-module__Button--YQQaO[data-hovered=true][data-theme=danger]{background:var(--color-red-hoverd)}.Button-module__Button--YQQaO[data-hovered=true][data-theme=text]{background:var(--color-grey)}.Button-module__Button--YQQaO[data-hovered=true][data-theme=link]{color:var(--base-blue)}.Button-module__Button--YQQaO[data-disabled=true]{cursor:not-allowed;color:#333;border:1px solid rgba(187,187,187,.1215686275);background-color:rgba(187,187,187,.1215686275)}.Button-module__Button--YQQaO[data-pressed=true]{background-color:#233544}.Button-module__Button--YQQaO[data-loading=true]{opacity:.65;cursor:not-allowed}.Button-module__Icon--RMkDw{font-size:1.4em;margin-right:4px}","",{version:3,sources:["webpack://./src/components/Button/Button.module.scss"],names:[],mappings:"AAAA,8BACE,UAAA,CACA,SAAA,CACA,QAAA,CACA,cAAA,CACA,gBAAA,CACA,kBAAA,CACA,mBAAA,CACA,cAAA,CACA,iBAAA,CACA,8BAAA,CAIA,+CACE,WAAA,CACA,cAAA,CAEF,+CACE,WAAA,CACA,cAAA,CAKF,kDACE,UAAA,CACA,eAAA,CACA,kCAAA,CAEF,kDACE,UAAA,CACA,2BAAA,CAEF,iDACE,UAAA,CACA,6BAAA,CACA,oDAAA,CAEF,iDACE,UAAA,CACA,2BAAA,CAEF,+CACE,UAAA,CACA,eAAA,CAEF,+CACE,UAAA,CACA,eAAA,CAKF,qEACE,sBAAA,CACA,iCAAA,CAEF,qEACE,kCAAA,CAEF,oEACE,oCAAA,CAEF,oEACE,kCAAA,CAEF,kEACE,4BAAA,CAEF,kEACE,sBAAA,CAMF,kDACE,kBAAA,CACA,UAAA,CACA,8CAAA,CACA,8CAAA,CAEF,iDACE,wBAAA,CAEF,iDACE,WAAA,CACA,kBAAA,CAIJ,4BACE,eAAA,CACA,gBAAA",sourcesContent:['.Button {\r\n  color: #fff;\r\n  outline: 0;\r\n  margin: 0;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  align-items: center;\r\n  display: inline-flex;\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.Button {\r\n  &[data-size="small"] {\r\n    height: 39px;\r\n    padding: 0 16px;\r\n  }\r\n  &[data-size="large"] {\r\n    height: 53px;\r\n    padding: 0 34px;\r\n  }\r\n}\r\n\r\n.Button {\r\n  &[data-theme="default"] {\r\n    color: #000;\r\n    background: #fff;\r\n    border: 1px solid var(--color-grey)\r\n  }\r\n  &[data-theme="primary"] {\r\n    color: #fff;\r\n    background: var(--base-blue);\r\n  }\r\n  &[data-theme="accent"] {\r\n    color: #fff;\r\n    background: var(--color-green);\r\n    box-shadow: 0 4px 12px 0 #2DB77B80;\r\n  }\r\n  &[data-theme="danger"] {\r\n    color: #fff;\r\n    background: var(--color-red);\r\n  }\r\n  &[data-theme="text"] {\r\n    color: #000;\r\n    background: #fff;\r\n  }\r\n  &[data-theme="link"] {\r\n    color: #000;\r\n    background: #fff;\r\n  }\r\n}\r\n\r\n.Button[data-hovered="true"] {\r\n  &[data-theme="default"] {\r\n    color: var(--base-blue);\r\n    border: 1px solid var(--base-blue)\r\n  }\r\n  &[data-theme="primary"] {\r\n    background: var(--base-blue-hoverd);\r\n  }\r\n  &[data-theme="accent"] {\r\n    background: var(--color-green-hoverd);\r\n  }\r\n  &[data-theme="danger"] {\r\n    background: var(--color-red-hoverd);\r\n  }\r\n  &[data-theme="text"] {\r\n    background: var(--color-grey);\r\n  }\r\n  &[data-theme="link"] {\r\n    color: var(--base-blue);\r\n  }\r\n}\r\n\r\n\r\n.Button {\r\n  &[data-disabled="true"] {\r\n    cursor: not-allowed;\r\n    color: #333;\r\n    border: 1px solid #bbbbbb1f;\r\n    background-color: #bbbbbb1f;\r\n  }\r\n  &[data-pressed="true"] {\r\n    background-color: #233544;\r\n  }\r\n  &[data-loading="true"] {\r\n    opacity: .65;\r\n    cursor: not-allowed;\r\n  }\r\n}\r\n\r\n.Icon {\r\n  font-size: 1.4em;\r\n  margin-right: 4px;\r\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"Button-module__Button--YQQaO",Icon:"Button-module__Icon--RMkDw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);