webpackHotUpdate(0,{

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(43);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(40);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(4);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(41);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(178);\n\nvar _redux = __webpack_require__(135);\n\nvar _antd = __webpack_require__(52);\n\nvar _velocityReact = __webpack_require__(325);\n\n__webpack_require__(324);\n\nvar _reactRouter = __webpack_require__(183);\n\n__webpack_require__(768);\n\n__webpack_require__(767);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Header: {\n    displayName: 'Header'\n  }\n};\n\nvar _homeLeijiwenSoftwareWebstormWorkspaceHuajianmoHuajianmoManagerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/home/leijiwen/software/webstorm-workspace/huajianmo/huajianmo-manager/components/Header.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _homeLeijiwenSoftwareWebstormWorkspaceHuajianmoHuajianmoManagerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/home/leijiwen/software/webstorm-workspace/huajianmo/huajianmo-manager/components/Header.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _homeLeijiwenSoftwareWebstormWorkspaceHuajianmoHuajianmoManagerNode_modulesReactTransformHmrLibIndexJs2(_homeLeijiwenSoftwareWebstormWorkspaceHuajianmoHuajianmoManagerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar SubMenu = _antd.Menu.SubMenu;\nvar MenuItemGroup = _antd.Menu.ItemGroup;\n\nvar Header = _wrapComponent('Header')(function (_Component) {\n  _inherits(Header, _Component);\n\n  _createClass(Header, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react3.default.createElement(\n        _antd.Row,\n        { className: 'header' },\n        _react3.default.createElement(\n          _antd.Col,\n          { span: 20, offset: 2 },\n          _react3.default.createElement(\n            'h2',\n            { className: 'logo' },\n            _react3.default.createElement(_antd.Icon, { type: 'appstore' }),\n            ' 花尖墨 / 管理平台'\n          ),\n          _react3.default.createElement(\n            _antd.Menu,\n            {\n              onClick: function onClick(e) {\n                return _this2.setHash(e.key);\n              },\n              id: 'nav',\n              mode: 'horizontal' },\n            _react3.default.createElement(\n              _antd.Menu.Item,\n              { key: 'home' },\n              _react3.default.createElement(\n                _reactRouter.Link,\n                { className: 'tab-item', to: '/home', activeClassName: 'active' },\n                _react3.default.createElement(_antd.Icon, { type: 'home' }),\n                '首页'\n              )\n            ),\n            _react3.default.createElement(\n              _antd.Menu.Item,\n              { key: 'add' },\n              _react3.default.createElement(\n                _reactRouter.Link,\n                { className: 'tab-item', to: '/add', activeClassName: 'active' },\n                _react3.default.createElement(_antd.Icon, { type: 'plus-circle-o' }),\n                '新增用户'\n              )\n            ),\n            _react3.default.createElement(\n              _antd.Menu.Item,\n              { key: 'edit', disabled: true },\n              _react3.default.createElement(\n                _reactRouter.Link,\n                { className: 'tab-item', to: '/edit', activeClassName: 'active' },\n                _react3.default.createElement(_antd.Icon, { type: 'edit' }),\n                '编辑用户'\n              )\n            ),\n            _react3.default.createElement(\n              _antd.Menu.Item,\n              { key: 'list' },\n              _react3.default.createElement(\n                _reactRouter.Link,\n                { className: 'tab-item', to: '/list', activeClassName: 'active' },\n                _react3.default.createElement(_antd.Icon, { type: 'bars' }),\n                '用户列表'\n              )\n            ),\n            _react3.default.createElement(\n              SubMenu,\n              { title: _react3.default.createElement(\n                  'span',\n                  null,\n                  _react3.default.createElement(_antd.Icon, { type: 'setting' }),\n                  '用户中心'\n                ) },\n              _react3.default.createElement(\n                _antd.Menu.Item,\n                { key: 'list' },\n                '修改个人资料'\n              ),\n              _react3.default.createElement(\n                _antd.Menu.Item,\n                { key: 'add' },\n                '退出'\n              )\n            ),\n            _react3.default.createElement(\n              _antd.Menu.Item,\n              { key: 'sysmanager' },\n              _react3.default.createElement(_antd.Icon, { type: 'bars' }),\n              '系统管理'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));\n  }\n\n  _createClass(Header, [{\n    key: 'setHash',\n    value: function setHash(key) {\n      console.log('click ', key);\n      this.setState({\n        current: key\n      });\n    }\n  }]);\n\n  return Header;\n}(_react2.Component));\n\nexports.default = Header;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvSGVhZGVyLmpzPzQ3MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IFJvdywgQ29sLCBNZW51LCBJY29uLCBTcGluIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IFZlbG9jaXR5Q29tcG9uZW50LCBWZWxvY2l0eVRyYW5zaXRpb25Hcm91cCwgdmVsb2NpdHlIZWxwZXJzIH0gZnJvbSAndmVsb2NpdHktcmVhY3QnXG5pbXBvcnQgJ3ZlbG9jaXR5LWFuaW1hdGUvdmVsb2NpdHkudWknXG5jb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51O1xuY29uc3QgTWVudUl0ZW1Hcm91cCA9IE1lbnUuSXRlbUdyb3VwO1xuaW1wb3J0IHsgTGluaywgSW5kZXhMaW5rLCBicm93c2VySGlzdG9yeSAgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCAnLi4vc3R5bGUvaG9tZS5jc3MnXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxDb2wgc3Bhbj17MjB9IG9mZnNldD17Mn0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbG9nbyc+PEljb24gdHlwZT1cImFwcHN0b3JlXCIgLz4g6Iqx5bCW5aKoIC8g566h55CG5bmz5Y+wPC9oMj5cbiAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICBvbkNsaWNrID0ge2UgPT4gdGhpcy5zZXRIYXNoKGUua2V5KX1cbiAgICAgICAgICAgICAgaWQ9J25hdidcbiAgICAgICAgICAgICAgbW9kZT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSAga2V5PVwiaG9tZVwiID5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0YWItaXRlbVwiIHRvPXtgL2hvbWVgfSBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJob21lXCIgLz7pppbpobVcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtICBrZXk9XCJhZGRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0YWItaXRlbVwiIHRvPXtgL2FkZGB9IGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInBsdXMtY2lyY2xlLW9cIiAvPuaWsOWinueUqOaIt1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0gIGtleT0nZWRpdCcgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidGFiLWl0ZW1cIiB0bz17YC9lZGl0YH0gYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZWRpdFwiIC8+57yW6L6R55So5oi3XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSAga2V5PVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInRhYi1pdGVtXCIgdG89e2AvbGlzdGB9IGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImJhcnNcIiAvPueUqOaIt+WIl+ihqFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxTdWJNZW51IHRpdGxlPXs8c3Bhbj48SWNvbiB0eXBlPVwic2V0dGluZ1wiIC8+55So5oi35Lit5b+DPC9zcGFuPn0+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImxpc3RcIj7kv67mlLnkuKrkurrotYTmlpk8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiYWRkXCI+6YCA5Ye6PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSAga2V5PVwic3lzbWFuYWdlclwiPlxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJiYXJzXCIgLz7ns7vnu5/nrqHnkIZcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgc2V0SGFzaChrZXkpIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgJywga2V5KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnQ6IGtleSxcbiAgICB9KTtcblxuICB9XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbXBvbmVudHMvSGVhZGVyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOQTtBQUNBO0FBQ0E7Ozs7OztBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBN0JBO0FBRkE7QUFEQTtBQXVDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})