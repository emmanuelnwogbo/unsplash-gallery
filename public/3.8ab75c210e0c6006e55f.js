(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{55:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(24),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(25),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(26),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_redux__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6),_redux_actions__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_scss_components_photo_scss__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(57),_scss_components_photo_scss__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_scss_components_photo_scss__WEBPACK_IMPORTED_MODULE_8__),enterModule;enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Photo=function(_Component){function Photo(_){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Photo),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Photo).call(this,_))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Photo,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Photo,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var _=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"photo",onClick:function(){return _.props.openModal(_.props.openUrl,_.props.fullname,_.props.location)}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"photo__text"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2",null,this.props.fullname),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null,this.props.location)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("figure",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:this.props.url})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Photo}(react__WEBPACK_IMPORTED_MODULE_5__.Component);function mapStateToProps(_){return{state:_.photoView}}var _default=Object(react_redux__WEBPACK_IMPORTED_MODULE_6__.b)(mapStateToProps,{openModal:_redux_actions__WEBPACK_IMPORTED_MODULE_7__.c})(Photo),reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(Photo,"Photo","C:\\Users\\USER\\Desktop\\MY WORK\\unsplash-gallery\\client\\components\\Photo.jsx"),reactHotLoader.register(mapStateToProps,"mapStateToProps","C:\\Users\\USER\\Desktop\\MY WORK\\unsplash-gallery\\client\\components\\Photo.jsx"),reactHotLoader.register(_default,"default","C:\\Users\\USER\\Desktop\\MY WORK\\unsplash-gallery\\client\\components\\Photo.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(4)(module))},57:function(_,e,t){var r=t(58);"string"==typeof r&&(r=[[_.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(15)(r,o);r.locals&&(_.exports=r.locals)},58:function(_,e,t){(_.exports=t(14)(!1)).push([_.i,".photo{position:relative;width:30rem;height:30rem;grid-column:span 2;grid-row:span 2;border-radius:1rem;cursor:pointer;background:#dfe6e9;overflow:hidden}@media only screen and (max-width: 37.5em){.photo{width:100%;height:40rem;margin:1rem 0}}.photo:hover>.photo__text{transform:translateY(0)}.photo:hover figure img{transform:scale(1.2)}@media only screen and (max-width: 77.5em){.photo:nth-child(1){grid-column:span 6;width:94rem;height:62rem;grid-row:span 4}}@media only screen and (max-width: 37.5em){.photo:nth-child(1){width:100%;height:40rem;margin:1rem 0}}.photo:nth-child(2){grid-column:span 6;width:94rem;height:62rem;grid-row:span 4}@media only screen and (max-width: 77.5em){.photo:nth-child(2){width:30rem;height:30rem;grid-column:span 2;grid-row:span 2}}@media only screen and (max-width: 37.5em){.photo:nth-child(2){width:100%;height:40rem;margin:1rem 0}}.photo:nth-child(6){width:62rem;grid-column:span 4;height:62rem;grid-row:span 4}@media only screen and (max-width: 37.5em){.photo:nth-child(6){width:100%;height:40rem;margin:1rem 0}}.photo:nth-child(15){height:61rem;grid-row:span 4}@media only screen and (max-width: 37.5em){.photo:nth-child(15){width:100%;height:40rem;margin:1rem 0}}.photo__text{font-weight:400;font-size:1.2rem;position:absolute;z-index:4;bottom:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.4);display:flex;padding:2rem;justify-content:flex-start;color:#fff;transition:all .2s ease-in;flex-direction:column;transform:translateY(70%)}.photo figure{height:100%;width:100%;overflow:hidden;border-radius:1rem}.photo figure img{width:100%;height:100%;object-fit:cover;display:block;transition:all .2s ease-in}\n",""])}}]);