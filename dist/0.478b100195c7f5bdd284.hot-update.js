webpackHotUpdate(0,{

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _index = __webpack_require__(56);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(53);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(16);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(54);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _SysNav = __webpack_require__(306);\n\nvar _SysNav2 = _interopRequireDefault(_SysNav);\n\nvar _antd = __webpack_require__(81);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n\tSysManager: {\n\t\tdisplayName: 'SysManager'\n\t}\n};\n\nvar _homeLeijiwenSoftwareWebstormWorkspaceHuajianmoReduxReactDirector3Node_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n\tfilename: '/home/leijiwen/software/webstorm-workspace/huajianmo/redux-react-director3/components/SysManager/SysManager.js',\n\tcomponents: _components,\n\tlocals: [module],\n\timports: [_react3.default]\n});\n\nvar _homeLeijiwenSoftwareWebstormWorkspaceHuajianmoReduxReactDirector3Node_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n\tfilename: '/home/leijiwen/software/webstorm-workspace/huajianmo/redux-react-director3/components/SysManager/SysManager.js',\n\tcomponents: _components,\n\tlocals: [],\n\timports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n\treturn function (Component) {\n\t\treturn _homeLeijiwenSoftwareWebstormWorkspaceHuajianmoReduxReactDirector3Node_modulesReactTransformHmrLibIndexJs2(_homeLeijiwenSoftwareWebstormWorkspaceHuajianmoReduxReactDirector3Node_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n\t};\n}\n\nvar SysManager = _wrapComponent('SysManager')(function (_Component) {\n\t_inherits(SysManager, _Component);\n\n\tfunction SysManager() {\n\t\t_classCallCheck(this, SysManager);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(SysManager).apply(this, arguments));\n\t}\n\n\t_createClass(SysManager, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react3.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t_antd.Col,\n\t\t\t\t\t{ offset: 1, span: 5, style: { textAlign: 'left' } },\n\t\t\t\t\t_react3.default.createElement(_SysNav2.default, null)\n\t\t\t\t),\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t_antd.Col,\n\t\t\t\t\t{ span: 17, style: { background: '#fff', borderRadius: '6px' } },\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'h2',\n\t\t\t\t\t\t{ style: { margin: '50px 0' } },\n\t\t\t\t\t\t'一个简单的使用redux-react实现的demo'\n\t\t\t\t\t),\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'h3',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'路由是由redux管理，使用',\n\t\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t{ href: 'https://github.com/flatiron/director', target: '_blank' },\n\t\t\t\t\t\t\t'director.js'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t'实现'\n\t\t\t\t\t),\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'h3',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'异步请求使用redux-thunk方式'\n\t\t\t\t\t),\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'h3',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'组件使用第三方',\n\t\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t{ href: 'http://ant.design', target: '_blank' },\n\t\t\t\t\t\t\t'ant.design'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'h3',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'动画使用',\n\t\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t{ href: 'https://github.com/twitter-fabric/velocity-react', target: '_blank' },\n\t\t\t\t\t\t\t'velocity-react'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn SysManager;\n}(_react2.Component));\n\nexports.default = SysManager;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzA1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvU3lzTWFuYWdlci9TeXNNYW5hZ2VyLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN5c05hdiBmcm9tICcuLi9TeXNOYXYnXG5pbXBvcnQge0NvbH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3lzTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxDb2wgb2Zmc2V0PXsxfSBzcGFuPXs1fSBzdHlsZT17e3RleHRBbGlnbjogJ2xlZnQnfX0+PFN5c05hdiAvPjwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgc3Bhbj17MTd9IHN0eWxlPXt7YmFja2dyb3VuZDogJyNmZmYnLCBib3JkZXJSYWRpdXM6ICc2cHgnfX0+XG5cdFx0XHRcdFx0XHQ8aDIgc3R5bGU9e3ttYXJnaW46JzUwcHggMCd9fT7kuIDkuKrnroDljZXnmoTkvb/nlKhyZWR1eC1yZWFjdOWunueOsOeahGRlbW88L2gyPlxuXHRcdFx0XHRcdFx0PGgzPui3r+eUseaYr+eUsXJlZHV4566h55CG77yM5L2/55SoPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2ZsYXRpcm9uL2RpcmVjdG9yJyB0YXJnZXQ9J19ibGFuayc+ZGlyZWN0b3IuanM8L2E+5a6e546wPC9oMz5cblx0XHRcdFx0XHRcdDxoMz7lvILmraXor7fmsYLkvb/nlKhyZWR1eC10aHVua+aWueW8jzwvaDM+XG5cdFx0XHRcdFx0XHQ8aDM+57uE5Lu25L2/55So56ys5LiJ5pa5PGEgaHJlZj0naHR0cDovL2FudC5kZXNpZ24nIHRhcmdldD0nX2JsYW5rJz5hbnQuZGVzaWduPC9hPjwvaDM+XG5cdFx0XHRcdFx0XHQ8aDM+5Yqo55S75L2/55SoPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3R3aXR0ZXItZmFicmljL3ZlbG9jaXR5LXJlYWN0JyB0YXJnZXQ9J19ibGFuayc+dmVsb2NpdHktcmVhY3Q8L2E+PC9oMz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjb21wb25lbnRzL1N5c01hbmFnZXIvU3lzTWFuYWdlci5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUZBO0FBV0E7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})