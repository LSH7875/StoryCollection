self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/reducer.jsx":
/*!***************************!*\
  !*** ./store/reducer.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var reducer = function reducer(state, action) {
  console.log('reducer들어옴');

  switch (action.type) {
    case "SUMSTAT":
      console.log("섬스탯?");
      console.log('페이로드값');
      console.log(action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        stat: _objectSpread({}, action.payload)
      });

    case "TEST":
      console.log('reducer 도착');
      return _objectSpread({}, state);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlci5qc3giXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwic3RhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFDLFNBQVJBLE9BQVEsQ0FBQ0MsS0FBRCxFQUFPQyxNQUFQLEVBQWdCO0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaOztBQUNBLFVBQU9GLE1BQU0sQ0FBQ0csSUFBZDtBQUNJLFNBQUssU0FBTDtBQUNJRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0ksT0FBbkI7QUFDQSw2Q0FBVUwsS0FBVjtBQUFnQk0sWUFBSSxvQkFBS0wsTUFBTSxDQUFDSSxPQUFaO0FBQXBCOztBQUNKLFNBQUssTUFBTDtBQUNJSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsK0JBQ09ILEtBRFA7O0FBR0o7QUFDSSxhQUFPQSxLQUFQO0FBWlI7QUFlSCxDQWpCRDs7QUFtQkEsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NGM3YmVjNjAzNTU3ZWU3MjY3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVkdWNlcj0oc3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ3JlZHVjZXLrk6TslrTsmLQnKVxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFwiU1VNU1RBVFwiIDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLshKzsiqTtg68/XCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCftjpjsnbTroZzrk5zqsJInKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgcmV0dXJuey4uLnN0YXRlLHN0YXQ6ey4uLmFjdGlvbi5wYXlsb2FkfX1cclxuICAgICAgICBjYXNlIFwiVEVTVFwiOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciDrj4TssKknKVxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=