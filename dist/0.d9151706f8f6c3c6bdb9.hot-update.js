webpackHotUpdate(0,{

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar constants = __webpack_require__(195);\n\nvar initialState = { viewFlag: flase };\n\nfunction update() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];\n\tvar action = arguments[1];\n\n\tconsole.log(\"action.type是：\" + action.type);\n\tswitch (action.type) {\n\t\tcase constants.RECEIVE_CATEGORY:\n\t\t\treturn Object.assign({}, state, action.json.category);\n\t\tdefault:\n\t\t\treturn state;\n\t}\n}\n\nmodule.exports = update;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL3JvbGUuanM/NmIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge3ZpZXdGbGFnOmZsYXNlfVxuXG5mdW5jdGlvbiB1cGRhdGUoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zb2xlLmxvZyhcImFjdGlvbi50eXBl5piv77yaXCIrYWN0aW9uLnR5cGUpO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBjb25zdGFudHMuUkVDRUlWRV9DQVRFR09SWTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmpzb24uY2F0ZWdvcnkpXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogcmVkdWNlcnMvcm9sZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})