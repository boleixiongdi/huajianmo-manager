webpackHotUpdate(0,{

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar constants = __webpack_require__(195);\n\nvar initialState = {};\n\nfunction update() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];\n\tvar action = arguments[1];\n\n\tconsole.log(\"action.type是：\" + action.type);\n\tswitch (action.type) {\n\t\tcase constants.CHANGE_VIEW:\n\t\t\treturn Object.assign({}, state, { viewFlag: true });\n\t\tdefault:\n\t\t\treturn state;\n\t}\n}\n\nmodule.exports = update;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL3JvbGUuanM/NmIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuZnVuY3Rpb24gdXBkYXRlKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcblx0Y29uc29sZS5sb2coXCJhY3Rpb24udHlwZeaYr++8mlwiK2FjdGlvbi50eXBlKTtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgY29uc3RhbnRzLkNIQU5HRV9WSUVXOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7dmlld0ZsYWc6dHJ1ZX0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogcmVkdWNlcnMvcm9sZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})