webpackHotUpdate(0,{

/***/ 195:
/***/ function(module, exports) {

	eval("'use strict';\n\nmodule.exports = {\n  FETCH_PACKAGE: 'FETCH_PACKAGE',\n  RECEIVE_PACKAGE: 'RECEIVE_PACKAGE',\n  FETCH_PACKAGES: 'FETCH_PACKAGES',\n  RECEIVE_PACKAGES: 'RECEIVE_PACKAGES',\n  RECEIVE_CATEGORY: 'RECEIVE_CATEGORY',\n  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',\n  CHANGE_VIEW: 'CHANGE_VIEW'\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3V0aWxzL2NvbnN0YW50cy5qcz84ZTFhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBGRVRDSF9QQUNLQUdFOiAnRkVUQ0hfUEFDS0FHRScsXG4gIFJFQ0VJVkVfUEFDS0FHRTogJ1JFQ0VJVkVfUEFDS0FHRScsXG4gIEZFVENIX1BBQ0tBR0VTOiAnRkVUQ0hfUEFDS0FHRVMnLFxuICBSRUNFSVZFX1BBQ0tBR0VTOiAnUkVDRUlWRV9QQUNLQUdFUycsXG4gIFJFQ0VJVkVfQ0FURUdPUlk6ICdSRUNFSVZFX0NBVEVHT1JZJyxcbiAgUkVDRUlWRV9DQVRFR09SSUVTOiAnUkVDRUlWRV9DQVRFR09SSUVTJyxcbiAgQ0hBTkdFX1ZJRVc6ICdDSEFOR0VfVklFVydcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHV0aWxzL2NvbnN0YW50cy5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar constants = __webpack_require__(195);\n\nvar initialState = {};\n\nfunction update() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];\n\tvar action = arguments[1];\n\n\tconsole.log(\"action.type是：\" + action.type);\n\tswitch (action.type) {\n\t\tcase constants.RECEIVE_CATEGORY:\n\t\t\treturn Object.assign({}, state, action.json.category);\n\t\tdefault:\n\t\t\treturn state;\n\t}\n}\n\nmodule.exports = update;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL21lbnUuanM/Zjc2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuZnVuY3Rpb24gdXBkYXRlKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcblx0Y29uc29sZS5sb2coXCJhY3Rpb24udHlwZeaYr++8mlwiK2FjdGlvbi50eXBlKTtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgY29uc3RhbnRzLlJFQ0VJVkVfQ0FURUdPUlk6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGFjdGlvbi5qc29uLmNhdGVnb3J5KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHJlZHVjZXJzL21lbnUuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar constants = __webpack_require__(195);\n\nvar initialState = { viewFlag: flase };\n\nfunction update() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];\n\tvar action = arguments[1];\n\n\tconsole.log(\"action.type是：\" + action.type);\n\tswitch (action.type) {\n\t\tcase constants.CHANGE_VIEW:\n\t\t\treturn Object.assign({}, state, { viewFlag: true });\n\t\tdefault:\n\t\t\treturn state;\n\t}\n}\n\nmodule.exports = update;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL3JvbGUuanM/NmIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge3ZpZXdGbGFnOmZsYXNlfVxuXG5mdW5jdGlvbiB1cGRhdGUoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXHRjb25zb2xlLmxvZyhcImFjdGlvbi50eXBl5piv77yaXCIrYWN0aW9uLnR5cGUpO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBjb25zdGFudHMuQ0hBTkdFX1ZJRVc6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHt2aWV3RmxhZzp0cnVlfSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiByZWR1Y2Vycy9yb2xlLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar constants = __webpack_require__(195);\n\nvar initialState = {};\n\nfunction update() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];\n\tvar action = arguments[1];\n\n\tconsole.log(\"action.type是：\" + action.type);\n\tswitch (action.type) {\n\t\tcase constants.RECEIVE_CATEGORY:\n\t\t\treturn Object.assign({}, state, action.json.category);\n\t\tdefault:\n\t\t\treturn state;\n\t}\n}\n\nmodule.exports = update;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL3VzZXIuanM/ODYyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuZnVuY3Rpb24gdXBkYXRlKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcblx0Y29uc29sZS5sb2coXCJhY3Rpb24udHlwZeaYr++8mlwiK2FjdGlvbi50eXBlKTtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgY29uc3RhbnRzLlJFQ0VJVkVfQ0FURUdPUlk6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGFjdGlvbi5qc29uLmNhdGVnb3J5KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHJlZHVjZXJzL3VzZXIuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})