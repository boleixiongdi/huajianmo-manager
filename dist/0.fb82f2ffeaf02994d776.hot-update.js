webpackHotUpdate(0,{

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(484);\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(134);\n\nvar _reactRedux = __webpack_require__(249);\n\nvar _reactRouter = __webpack_require__(182);\n\nvar _reactRouterRedux = __webpack_require__(250);\n\nvar _useStandardScroll = __webpack_require__(1122);\n\nvar _useStandardScroll2 = _interopRequireDefault(_useStandardScroll);\n\nvar _createBrowserHistory = __webpack_require__(357);\n\nvar _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);\n\nvar _store = __webpack_require__(483);\n\nvar _routes = __webpack_require__(482);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initState = {\n\tuserList: [{\n\t\tuId: 0,\n\t\tname: 'zenki',\n\t\tsex: 1,\n\t\tbirthday: new Date(),\n\t\teat: true,\n\t\tsleep: true,\n\t\tbeat: true,\n\t\tphone: 13333333333\n\t}, {\n\t\tuId: 1,\n\t\tname: 'zen',\n\t\tsex: 0,\n\t\tbirthday: new Date('2016-06-03'),\n\t\teat: false,\n\t\tsleep: false,\n\t\tbeat: true,\n\t\tphone: 13333322222\n\t}, {\n\t\tuId: 2,\n\t\tname: 'zk',\n\t\tsex: 1,\n\t\tbirthday: new Date('2016-06-06'),\n\t\teat: true,\n\t\tsleep: true,\n\t\tbeat: false,\n\t\tphone: 11111111111\n\t}, {\n\t\tuId: 3,\n\t\tname: 'ki',\n\t\tsex: 0,\n\t\tbirthday: new Date('2016-06-03'),\n\t\teat: true,\n\t\tsleep: true,\n\t\tbeat: true,\n\t\tphone: 22222222222\n\t}, {\n\t\tuId: 4,\n\t\tname: 'kkk',\n\t\tsex: 1,\n\t\tbirthday: new Date('2016-06-06'),\n\t\teat: false,\n\t\tsleep: false,\n\t\tbeat: false,\n\t\tphone: 33333333333\n\t}]\n};\n//const store = configureStore(initState);\n\nvar state = initState || undefined;\nvar store = (0, _store.configureStore)(_reactRouter.browserHistory, state);\nvar createScrollHistory = (0, _useStandardScroll2.default)(_createBrowserHistory2.default);\nvar appHistory = (0, _reactRouter.useRouterHistory)(createScrollHistory)();\nvar history = (0, _reactRouterRedux.syncHistoryWithStore)(appHistory, store);\n\n//setStore(store);\n\n(0, _reactDom.render)(_react2.default.createElement(\n\t_reactRedux.Provider,\n\t{ store: store },\n\t_react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })\n), document.getElementById('root'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDY5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC5qcz8yMTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUm91dGVyLCBicm93c2VySGlzdG9yeSwgdXNlUm91dGVySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4J1xuaW1wb3J0IHVzZVNjcm9sbCBmcm9tICdzY3JvbGwtYmVoYXZpb3IvbGliL3VzZVN0YW5kYXJkU2Nyb2xsJ1xuaW1wb3J0IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xuXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJy4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGUvcm91dGVzJ1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG5cdHVzZXJMaXN0OiBbXG5cdFx0e1xuXHRcdFx0dUlkOiAwLFxuXHRcdFx0bmFtZTogJ3plbmtpJyxcblx0XHRcdHNleDogMSxcblx0XHRcdGJpcnRoZGF5OiBuZXcgRGF0ZSgpLFxuXHRcdFx0ZWF0OiB0cnVlLFxuXHRcdFx0c2xlZXA6IHRydWUsXG5cdFx0XHRiZWF0OiB0cnVlLFxuXHRcdFx0cGhvbmU6IDEzMzMzMzMzMzMzXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR1SWQ6IDEsXG5cdFx0XHRuYW1lOiAnemVuJyxcblx0XHRcdHNleDogMCxcblx0XHRcdGJpcnRoZGF5OiBuZXcgRGF0ZSgnMjAxNi0wNi0wMycpLFxuXHRcdFx0ZWF0OiBmYWxzZSxcblx0XHRcdHNsZWVwOiBmYWxzZSxcblx0XHRcdGJlYXQ6IHRydWUsXG5cdFx0XHRwaG9uZTogMTMzMzMzMjIyMjJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHVJZDogMixcblx0XHRcdG5hbWU6ICd6aycsXG5cdFx0XHRzZXg6IDEsXG5cdFx0XHRiaXJ0aGRheTogbmV3IERhdGUoJzIwMTYtMDYtMDYnKSxcblx0XHRcdGVhdDogdHJ1ZSxcblx0XHRcdHNsZWVwOiB0cnVlLFxuXHRcdFx0YmVhdDogZmFsc2UsXG5cdFx0XHRwaG9uZTogMTExMTExMTExMTFcblx0XHR9LFxuXHRcdHtcblx0XHRcdHVJZDogMyxcblx0XHRcdG5hbWU6ICdraScsXG5cdFx0XHRzZXg6IDAsXG5cdFx0XHRiaXJ0aGRheTogbmV3IERhdGUoJzIwMTYtMDYtMDMnKSxcblx0XHRcdGVhdDogdHJ1ZSxcblx0XHRcdHNsZWVwOiB0cnVlLFxuXHRcdFx0YmVhdDogdHJ1ZSxcblx0XHRcdHBob25lOiAyMjIyMjIyMjIyMlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dUlkOiA0LFxuXHRcdFx0bmFtZTogJ2traycsXG5cdFx0XHRzZXg6IDEsXG5cdFx0XHRiaXJ0aGRheTogbmV3IERhdGUoJzIwMTYtMDYtMDYnKSxcblx0XHRcdGVhdDogZmFsc2UsXG5cdFx0XHRzbGVlcDogZmFsc2UsXG5cdFx0XHRiZWF0OiBmYWxzZSxcblx0XHRcdHBob25lOiAzMzMzMzMzMzMzM1xuXHRcdH1cblx0XSxcbn1cbi8vY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShpbml0U3RhdGUpO1xuXG5sZXQgc3RhdGUgPSBpbml0U3RhdGUgfHwgdW5kZWZpbmVkXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGJyb3dzZXJIaXN0b3J5LCBzdGF0ZSlcbmNvbnN0IGNyZWF0ZVNjcm9sbEhpc3RvcnkgPSB1c2VTY3JvbGwoY3JlYXRlQnJvd3Nlckhpc3RvcnkpXG5jb25zdCBhcHBIaXN0b3J5ID0gdXNlUm91dGVySGlzdG9yeShjcmVhdGVTY3JvbGxIaXN0b3J5KSgpXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoYXBwSGlzdG9yeSwgc3RvcmUpXG5cbi8vc2V0U3RvcmUoc3RvcmUpO1xuXG5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0gcm91dGVzPXtyb3V0ZXN9IC8+XG4gIDwvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjbGllbnQuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBMUNBOzs7QUF3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})