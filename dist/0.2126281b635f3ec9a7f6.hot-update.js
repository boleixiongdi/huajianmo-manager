webpackHotUpdate(0,{

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar constants = __webpack_require__(195);\n\nvar initialState = { viewFlag: flase };\n\nfunction update() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];\n\tvar action = arguments[1];\n\n\tconsole.log(\"action.type是：\" + action.type);\n\tswitch (action.type) {\n\t\tcase constants.RECEIVE_CATEGORY:\n\t\t\treturn Object.assign({}, state, { viewFlag: true });\n\t\tdefault:\n\t\t\treturn state;\n\t}\n}\n\nmodule.exports = update;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL3JvbGUuanM/NmIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge3ZpZXdGbGFnOmZsYXNlfVxuXG5mdW5jdGlvbiB1cGRhdGUoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zb2xlLmxvZyhcImFjdGlvbi50eXBl5piv77yaXCIrYWN0aW9uLnR5cGUpO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBjb25zdGFudHMuUkVDRUlWRV9DQVRFR09SWTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3ZpZXdGbGFnOnRydWV9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHJlZHVjZXJzL3JvbGUuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})