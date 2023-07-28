"use strict";(self.webpackChunksamsung_uikit=self.webpackChunksamsung_uikit||[]).push([[311],{"./src/components/Switch/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Switch_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Switch/Switch.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch_module.Z,options);const Switch_Switch_module=Switch_module.Z&&Switch_module.Z.locals?Switch_module.Z.locals:void 0;var useToggle=__webpack_require__("./src/semantic/toggle/useToggle.ts");var Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch=props=>{const inputRef=(0,react.useRef)(null),{rootProps,isPressed,inputProps}=function useSwitch(props,inputRef){const toggle=(0,useToggle.Z)(props,inputRef);return{...toggle,inputProps:{...toggle.inputProps,role:"switch"}}}(props,inputRef);return console.log(inputProps),(0,jsx_runtime.jsxs)("label",{...rootProps,className:(0,clsx.W)(Switch_Switch_module.Label,{[Switch_Switch_module["Label--pressed"]]:isPressed}),children:[(0,jsx_runtime.jsx)("input",{ref:inputRef,...inputProps,className:Switch_Switch_module.Input}),(0,jsx_runtime.jsx)("div",{className:(0,clsx.W)(Switch_Switch_module.Switch,{[Switch_Switch_module["Switch--pressed"]]:props.checked}),children:(0,jsx_runtime.jsx)("div",{className:(0,clsx.W)(Switch_Switch_module.Toggle,{[Switch_Switch_module["Toggle--pressed"]]:props.checked})})}),(0,jsx_runtime.jsx)(Typography.Z,{className:Switch_Switch_module.Text,weight:"500",children:"Верный ответ"})]})};Switch.displayName="Switch";const Switch_Switch=Switch;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}const Switch_stories={component:Switch_Switch},Default={args:{disabled:!1,readOnly:!1,name:"switch",value:"value",checked:!0,defaultChecked:!0,autoFocus:!1,onChange:value=>console.log(value)},render:args=>{const[checked,setChecked]=(0,react.useState)(args.defaultChecked),onChange=(0,react.useCallback)((event=>{setChecked(event.target.checked)}),[]);return(0,jsx_runtime.jsx)(Switch_Switch,{...args,checked,onChange})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: false,\n    readOnly: false,\n    name: 'switch',\n    value: 'value',\n    checked: true,\n    defaultChecked: true,\n    autoFocus: false,\n    onChange: value => console.log(value)\n  },\n  render: args => {\n    const [checked, setChecked] = useState(args.defaultChecked);\n    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {\n      setChecked(event.target.checked);\n    }, []);\n    return <Switch {...args} checked={checked} onChange={onChange} />;\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Switch/Switch.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Switch-module__Label--YOLHy{opacity:1;cursor:pointer;display:inline-flex;align-items:center;position:relative}.Switch-module__Label--pressed--ZFfRK{opacity:.5}.Switch-module__Input--NGWsq{cursor:pointer;position:absolute;width:100%;height:100%;margin:0;opacity:0}.Switch-module__Switch--J8Yft{height:24px;width:40px;padding:2px;cursor:pointer;display:inline-flex;align-items:center;border-radius:30px;background:var(--base-grey)}.Switch-module__Switch--pressed--uJQYW{background:var(--base-blue)}.Switch-module__Toggle--AduuY{width:20px;height:20px;cursor:pointer;background:#fff;border-radius:100%;transform:translateX(0px);transition:transform 200ms ease-out}.Switch-module__Toggle--pressed--SKqAe{transform:translateX(16px);transition:transform 200ms ease-out}.Switch-module__Text--hLWSM{margin-left:8px}","",{version:3,sources:["webpack://./src/components/Switch/Switch.module.scss"],names:[],mappings:"AAAA,6BACE,SAAA,CACA,cAAA,CACA,mBAAA,CACA,kBAAA,CACA,iBAAA,CACA,sCACE,UAAA,CAIJ,6BACE,cAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CAGF,8BACE,WAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,mBAAA,CACA,kBAAA,CACA,kBAAA,CACA,2BAAA,CACA,uCACI,2BAAA,CAIN,8BACE,UAAA,CACA,WAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,yBAAA,CACA,mCAAA,CACA,uCACE,0BAAA,CACA,mCAAA,CAIJ,4BACE,eAAA",sourcesContent:[".Label {\r\n  opacity: 1;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  position: relative;\r\n  &--pressed {\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n.Input {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  opacity: 0;\r\n}\r\n\r\n.Switch {\r\n  height: 24px;\r\n  width: 40px;\r\n  padding: 2px;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  border-radius: 30px;\r\n  background: var(--base-grey);\r\n  &--pressed {\r\n      background: var(--base-blue);\r\n  }\r\n}\r\n\r\n.Toggle {\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: pointer;\r\n  background: #fff;\r\n  border-radius: 100%;\r\n  transform: translateX(0px);\r\n  transition: transform 200ms ease-out;\r\n  &--pressed {\r\n    transform: translateX(16px);\r\n    transition: transform 200ms ease-out;\r\n  }\r\n}\r\n\r\n.Text {\r\n  margin-left: 8px;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Label:"Switch-module__Label--YOLHy","Label--pressed":"Switch-module__Label--pressed--ZFfRK",Input:"Switch-module__Input--NGWsq",Switch:"Switch-module__Switch--J8Yft","Switch--pressed":"Switch-module__Switch--pressed--uJQYW",Toggle:"Switch-module__Toggle--AduuY","Toggle--pressed":"Switch-module__Toggle--pressed--SKqAe",Text:"Switch-module__Text--hLWSM"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);