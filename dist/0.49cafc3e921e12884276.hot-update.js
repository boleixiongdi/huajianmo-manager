webpackHotUpdate(0,{

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(353);\n\nvar _react = __webpack_require__(5);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(93);\n\nvar _reactRedux = __webpack_require__(277);\n\nvar _reactRouter = __webpack_require__(677);\n\nvar _reactRouterRedux = __webpack_require__(658);\n\nvar _useStandardScroll = __webpack_require__(759);\n\nvar _useStandardScroll2 = _interopRequireDefault(_useStandardScroll);\n\nvar _createBrowserHistory = __webpack_require__(248);\n\nvar _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);\n\nvar _routes = __webpack_require__(823);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _App = __webpack_require__(349);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _configureStore = __webpack_require__(351);\n\nvar _configureStore2 = _interopRequireDefault(_configureStore);\n\nvar _route = __webpack_require__(208);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import { configureStore } from './src/store'\n\n\nvar initState = {\n\tuserList: [{\n\t\tuId: 0,\n\t\tname: 'zenki',\n\t\tsex: 1,\n\t\tbirthday: new Date(),\n\t\teat: true,\n\t\tsleep: true,\n\t\tbeat: true,\n\t\tphone: 13333333333\n\t}, {\n\t\tuId: 1,\n\t\tname: 'zen',\n\t\tsex: 0,\n\t\tbirthday: new Date('2016-06-03'),\n\t\teat: false,\n\t\tsleep: false,\n\t\tbeat: true,\n\t\tphone: 13333322222\n\t}, {\n\t\tuId: 2,\n\t\tname: 'zk',\n\t\tsex: 1,\n\t\tbirthday: new Date('2016-06-06'),\n\t\teat: true,\n\t\tsleep: true,\n\t\tbeat: false,\n\t\tphone: 11111111111\n\t}, {\n\t\tuId: 3,\n\t\tname: 'ki',\n\t\tsex: 0,\n\t\tbirthday: new Date('2016-06-03'),\n\t\teat: true,\n\t\tsleep: true,\n\t\tbeat: true,\n\t\tphone: 22222222222\n\t}, {\n\t\tuId: 4,\n\t\tname: 'kkk',\n\t\tsex: 1,\n\t\tbirthday: new Date('2016-06-06'),\n\t\teat: false,\n\t\tsleep: false,\n\t\tbeat: false,\n\t\tphone: 33333333333\n\t}]\n};\nvar store = (0, _configureStore2.default)(initState);\n\n//let state = window.__initialState__ || undefined\n//const store = configureStore(browserHistory, state)\nvar createScrollHistory = (0, _useStandardScroll2.default)(_createBrowserHistory2.default);\nvar appHistory = (0, _reactRouter.useRouterHistory)(createScrollHistory)();\nvar history = (0, _reactRouterRedux.syncHistoryWithStore)(appHistory, store);\n\n//setStore(store);\n\n(0, _reactDom.render)(_react2.default.createElement(\n\t_reactRedux.Provider,\n\t{ store: store },\n\t_react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })\n), document.getElementById('root'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC5qcz8yMTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUm91dGVyLCBicm93c2VySGlzdG9yeSwgdXNlUm91dGVySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4J1xuaW1wb3J0IHVzZVNjcm9sbCBmcm9tICdzY3JvbGwtYmVoYXZpb3IvbGliL3VzZVN0YW5kYXJkU2Nyb2xsJ1xuaW1wb3J0IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xuXG4vL2ltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnLi9zcmMvc3RvcmUnXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGUvcm91dGVzJ1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29udGFpbmVycy9BcHAnXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSdcbmltcG9ydCB7IHNldFN0b3JlfSAgZnJvbSAnLi9yb3V0ZSdcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuXHR1c2VyTGlzdDogW1xuXHRcdHtcblx0XHRcdHVJZDogMCxcblx0XHRcdG5hbWU6ICd6ZW5raScsXG5cdFx0XHRzZXg6IDEsXG5cdFx0XHRiaXJ0aGRheTogbmV3IERhdGUoKSxcblx0XHRcdGVhdDogdHJ1ZSxcblx0XHRcdHNsZWVwOiB0cnVlLFxuXHRcdFx0YmVhdDogdHJ1ZSxcblx0XHRcdHBob25lOiAxMzMzMzMzMzMzM1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dUlkOiAxLFxuXHRcdFx0bmFtZTogJ3plbicsXG5cdFx0XHRzZXg6IDAsXG5cdFx0XHRiaXJ0aGRheTogbmV3IERhdGUoJzIwMTYtMDYtMDMnKSxcblx0XHRcdGVhdDogZmFsc2UsXG5cdFx0XHRzbGVlcDogZmFsc2UsXG5cdFx0XHRiZWF0OiB0cnVlLFxuXHRcdFx0cGhvbmU6IDEzMzMzMzIyMjIyXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR1SWQ6IDIsXG5cdFx0XHRuYW1lOiAnemsnLFxuXHRcdFx0c2V4OiAxLFxuXHRcdFx0YmlydGhkYXk6IG5ldyBEYXRlKCcyMDE2LTA2LTA2JyksXG5cdFx0XHRlYXQ6IHRydWUsXG5cdFx0XHRzbGVlcDogdHJ1ZSxcblx0XHRcdGJlYXQ6IGZhbHNlLFxuXHRcdFx0cGhvbmU6IDExMTExMTExMTExXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR1SWQ6IDMsXG5cdFx0XHRuYW1lOiAna2knLFxuXHRcdFx0c2V4OiAwLFxuXHRcdFx0YmlydGhkYXk6IG5ldyBEYXRlKCcyMDE2LTA2LTAzJyksXG5cdFx0XHRlYXQ6IHRydWUsXG5cdFx0XHRzbGVlcDogdHJ1ZSxcblx0XHRcdGJlYXQ6IHRydWUsXG5cdFx0XHRwaG9uZTogMjIyMjIyMjIyMjJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHVJZDogNCxcblx0XHRcdG5hbWU6ICdra2snLFxuXHRcdFx0c2V4OiAxLFxuXHRcdFx0YmlydGhkYXk6IG5ldyBEYXRlKCcyMDE2LTA2LTA2JyksXG5cdFx0XHRlYXQ6IGZhbHNlLFxuXHRcdFx0c2xlZXA6IGZhbHNlLFxuXHRcdFx0YmVhdDogZmFsc2UsXG5cdFx0XHRwaG9uZTogMzMzMzMzMzMzMzNcblx0XHR9XG5cdF1cbn1cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoaW5pdFN0YXRlKTtcblxuLy9sZXQgc3RhdGUgPSB3aW5kb3cuX19pbml0aWFsU3RhdGVfXyB8fCB1bmRlZmluZWRcbi8vY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShicm93c2VySGlzdG9yeSwgc3RhdGUpXG5jb25zdCBjcmVhdGVTY3JvbGxIaXN0b3J5ID0gdXNlU2Nyb2xsKGNyZWF0ZUJyb3dzZXJIaXN0b3J5KVxuY29uc3QgYXBwSGlzdG9yeSA9IHVzZVJvdXRlckhpc3RvcnkoY3JlYXRlU2Nyb2xsSGlzdG9yeSkoKVxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGFwcEhpc3RvcnksIHN0b3JlKVxuXG4vL3NldFN0b3JlKHN0b3JlKTtcblxucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9IHJvdXRlcz17cm91dGVzfSAvPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xpZW50LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQTFDQTtBQXNEQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(5);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(677);\n\nvar _App = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./containers/App\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./containers/Home/Home\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Package = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./containers/Package/Package\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _Package2 = _interopRequireDefault(_Package);\n\nvar _CategoryRoute = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./containers/Category/CategoryRoute\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _CategoryRoute2 = _interopRequireDefault(_CategoryRoute);\n\nvar _Category = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./containers/Category/Category\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _Category2 = _interopRequireDefault(_Category);\n\nvar _Categories = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./containers/Category/Categories\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _Categories2 = _interopRequireDefault(_Categories);\n\nvar _Cart = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./containers/Cart/Cart\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _Cart2 = _interopRequireDefault(_Cart);\n\nvar _My = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./containers/My/My\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _My2 = _interopRequireDefault(_My);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* container components */\n\n\nvar routes = _react2.default.createElement(\n  _reactRouter.Route,\n  { path: '/', component: _App2.default },\n  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),\n  _react2.default.createElement(_reactRouter.Route, { path: '/package/:id/:name', component: _Package2.default }),\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/category', component: _Categories2.default },\n    _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _Category2.default })\n  ),\n  _react2.default.createElement(_reactRouter.Route, { path: '/cart', component: _Cart2.default }),\n  _react2.default.createElement(_reactRouter.Route, { path: '/my', component: _My2.default })\n);\n\nexports.default = routes;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JvdXRlL3JvdXRlcy5qcz9hMTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlLCBJbmRleFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG4vKiBjb250YWluZXIgY29tcG9uZW50cyAqL1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbnRhaW5lcnMvQXBwJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb250YWluZXJzL0hvbWUvSG9tZSdcbmltcG9ydCBQYWNrYWdlIGZyb20gJy4vY29udGFpbmVycy9QYWNrYWdlL1BhY2thZ2UnXG5pbXBvcnQgQ2F0ZWdvcnlSb3V0ZSBmcm9tICcuL2NvbnRhaW5lcnMvQ2F0ZWdvcnkvQ2F0ZWdvcnlSb3V0ZSdcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NvbnRhaW5lcnMvQ2F0ZWdvcnkvQ2F0ZWdvcnknXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL2NvbnRhaW5lcnMvQ2F0ZWdvcnkvQ2F0ZWdvcmllcydcbmltcG9ydCBDYXJ0IGZyb20gJy4vY29udGFpbmVycy9DYXJ0L0NhcnQnXG5pbXBvcnQgTXkgZnJvbSAnLi9jb250YWluZXJzL015L015J1xuXG5jb25zdCByb3V0ZXMgPSAoXG4gIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICA8Um91dGUgcGF0aD1cIi9wYWNrYWdlLzppZC86bmFtZVwiIGNvbXBvbmVudD17UGFja2FnZX0vPlxuICAgIDxSb3V0ZSBwYXRoPVwiL2NhdGVnb3J5XCIgY29tcG9uZW50PXtDYXRlZ29yaWVzfT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiOmlkXCIgY29tcG9uZW50PXtDYXRlZ29yeX0vPlxuICAgIDwvUm91dGU+XG5cbiAgICA8Um91dGUgcGF0aD1cIi9jYXJ0XCIgY29tcG9uZW50PXtDYXJ0fS8+XG4gICAgPFJvdXRlIHBhdGg9XCIvbXlcIiBjb21wb25lbnQ9e015fS8+XG4gIDwvUm91dGU+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogcm91dGUvcm91dGVzLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFSQTtBQUNBO0FBV0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})