webpackHotUpdate(0,{

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar constants = __webpack_require__(195);\n\nvar initialState = { viewFlag: flase };\n\nfunction update() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];\n\tvar action = arguments[1];\n\n\tconsole.log(\"action.type是：\" + action.type);\n\tswitch (action.type) {\n\t\tcase constants.CHANGE_VIEW:\n\t\t\treturn Object.assign({}, state, { viewFlag: true });\n\t\tdefault:\n\t\t\treturn state;\n\t}\n}\n\nmodule.exports = update;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL3JvbGUuanM/NmIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge3ZpZXdGbGFnOmZsYXNlfVxuXG5mdW5jdGlvbiB1cGRhdGUoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zb2xlLmxvZyhcImFjdGlvbi50eXBl5piv77yaXCIrYWN0aW9uLnR5cGUpO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBjb25zdGFudHMuQ0hBTkdFX1ZJRVc6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHt2aWV3RmxhZzp0cnVlfSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiByZWR1Y2Vycy9yb2xlLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})