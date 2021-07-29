self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _readOnlyError; }
/* harmony export */ });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./components/Graph.jsx":
/*!******************************!*\
  !*** ./components/Graph.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_SH_Desktop_StoryCollection_StoryCollection_front_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\SH\\Desktop\\StoryCollection\\StoryCollection\\front\\components\\Graph.jsx",
    _this = undefined;




var Vertical = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "Graph__Vertical",
  componentId: "sc-lextiu-0"
})(["&>.header>.title{width:100%;text-align:center;}"]);
_c = Vertical;
var Graph = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "Graph",
  componentId: "sc-lextiu-1"
})(["& > .bargraph{position:relative;width:80vw;height:40vh;box-sizing:border-box;margin-left:10vw;}"]);
_c2 = Graph;
var chartAreaBorder = {
  id: 'chartAreaBorder',
  beforeDraw: function beforeDraw(chart, args, options) {
    var ctx = chart.ctx,
        _chart$chartArea = chart.chartArea,
        left = _chart$chartArea.left,
        top = _chart$chartArea.top,
        width = _chart$chartArea.width,
        height = _chart$chartArea.height;
    ctx.save();
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.setLineDash(options.borderDash || []);
    ctx.lineDashOffset = options.borderDashOffset;
    ctx.strokeRect(left, top, width, height);
    ctx.restore();
  }
};
var data = {
  labels: ['순발력', '눈치력', '예절성', '논리력'],
  datasets: [{
    data: [100, 20, 30, 50],
    backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
    borderWidth: 0
  }]
};
var options = {
  label: {
    display: "false"
  },
  plugins: {
    chartAreaBorder: {
      borderColor: 'white',
      borderWidth: 0,
      borderDash: [5, 5],
      borderDashOffset: 2
    }
  },
  scales: options = ((0,C_Users_SH_Desktop_StoryCollection_StoryCollection_front_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("options"), {
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)"
        }
      }]
    }
  })
};
var plugins = {
  chartAreaBorder: chartAreaBorder
};

var VerticalBar = function VerticalBar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Vertical, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Graph, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bargraph",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {
          data: data,
          width: 100,
          height: 100,
          options: options,
          plugin: chartAreaBorder
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, _this);
};

_c3 = VerticalBar;
/* harmony default export */ __webpack_exports__["default"] = (VerticalBar);

var _c, _c2, _c3;

$RefreshReg$(_c, "Vertical");
$RefreshReg$(_c2, "Graph");
$RefreshReg$(_c3, "VerticalBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JhcGguanN4Il0sIm5hbWVzIjpbIlZlcnRpY2FsIiwiU3R5bGVkIiwiR3JhcGgiLCJjaGFydEFyZWFCb3JkZXIiLCJpZCIsImJlZm9yZURyYXciLCJjaGFydCIsImFyZ3MiLCJvcHRpb25zIiwiY3R4IiwiY2hhcnRBcmVhIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0Iiwic2F2ZSIsInN0cm9rZVN0eWxlIiwiYm9yZGVyQ29sb3IiLCJsaW5lV2lkdGgiLCJib3JkZXJXaWR0aCIsInNldExpbmVEYXNoIiwiYm9yZGVyRGFzaCIsImxpbmVEYXNoT2Zmc2V0IiwiYm9yZGVyRGFzaE9mZnNldCIsInN0cm9rZVJlY3QiLCJyZXN0b3JlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWwiLCJkaXNwbGF5IiwicGx1Z2lucyIsInNjYWxlcyIsInhBeGVzIiwiZ3JpZExpbmVzIiwiY29sb3IiLCJ5QXhlcyIsIlZlcnRpY2FsQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1REFBZDtLQUFNRCxRO0FBS04sSUFBTUUsS0FBSyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1R0FBWDtNQUFNQyxLO0FBVU4sSUFBTUMsZUFBZSxHQUFHO0FBQ3BCQyxJQUFFLEVBQUUsaUJBRGdCO0FBRXBCQyxZQUZvQixzQkFFVEMsS0FGUyxFQUVGQyxJQUZFLEVBRUlDLE9BRkosRUFFYTtBQUFBLFFBQ3hCQyxHQUR3QixHQUNzQkgsS0FEdEIsQ0FDeEJHLEdBRHdCO0FBQUEsMkJBQ3NCSCxLQUR0QixDQUNuQkksU0FEbUI7QUFBQSxRQUNQQyxJQURPLG9CQUNQQSxJQURPO0FBQUEsUUFDREMsR0FEQyxvQkFDREEsR0FEQztBQUFBLFFBQ0lDLEtBREosb0JBQ0lBLEtBREo7QUFBQSxRQUNXQyxNQURYLG9CQUNXQSxNQURYO0FBRS9CTCxPQUFHLENBQUNNLElBQUo7QUFDQU4sT0FBRyxDQUFDTyxXQUFKLEdBQWtCUixPQUFPLENBQUNTLFdBQTFCO0FBQ0FSLE9BQUcsQ0FBQ1MsU0FBSixHQUFnQlYsT0FBTyxDQUFDVyxXQUF4QjtBQUNBVixPQUFHLENBQUNXLFdBQUosQ0FBZ0JaLE9BQU8sQ0FBQ2EsVUFBUixJQUFzQixFQUF0QztBQUNBWixPQUFHLENBQUNhLGNBQUosR0FBcUJkLE9BQU8sQ0FBQ2UsZ0JBQTdCO0FBQ0FkLE9BQUcsQ0FBQ2UsVUFBSixDQUFlYixJQUFmLEVBQXFCQyxHQUFyQixFQUEwQkMsS0FBMUIsRUFBaUNDLE1BQWpDO0FBQ0FMLE9BQUcsQ0FBQ2dCLE9BQUo7QUFDRDtBQVhtQixDQUF4QjtBQWFBLElBQU1DLElBQUksR0FBRztBQUNUQyxRQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsQ0FEQztBQUVUQyxVQUFRLEVBQUUsQ0FDUjtBQUNFRixRQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEVBQVYsRUFBYyxFQUFkLENBRFI7QUFFRUcsbUJBQWUsRUFBRSxDQUNmLHVCQURlLEVBRWYsdUJBRmUsRUFHZix1QkFIZSxFQUlmLHVCQUplLENBRm5CO0FBUUVaLGVBQVcsRUFBRSxDQUNYLHVCQURXLEVBRVgsdUJBRlcsRUFHWCx1QkFIVyxFQUlYLHVCQUpXLENBUmY7QUFjRUUsZUFBVyxFQUFFO0FBZGYsR0FEUTtBQUZELENBQWI7QUFzQkUsSUFBTVgsT0FBTyxHQUFHO0FBQ2RzQixPQUFLLEVBQUU7QUFBQ0MsV0FBTyxFQUFDO0FBQVQsR0FETztBQUVkQyxTQUFPLEVBQUU7QUFDTDdCLG1CQUFlLEVBQUU7QUFDZmMsaUJBQVcsRUFBRSxPQURFO0FBRWZFLGlCQUFXLEVBQUUsQ0FGRTtBQUdmRSxnQkFBVSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FIRztBQUlmRSxzQkFBZ0IsRUFBRTtBQUpIO0FBRFosR0FGSztBQVdkVSxRQUFNLEVBQUN6QixPQUFPLHVLQUFHO0FBQ2J5QixVQUFNLEVBQUU7QUFDSkMsV0FBSyxFQUFFLENBQUM7QUFDSkMsaUJBQVMsRUFBRTtBQUNQQyxlQUFLLEVBQUU7QUFEQTtBQURQLE9BQUQsQ0FESDtBQU1KQyxXQUFLLEVBQUUsQ0FBQztBQUNKRixpQkFBUyxFQUFFO0FBQ1BDLGVBQUssRUFBRTtBQURBO0FBRFAsT0FBRDtBQU5IO0FBREssR0FBSDtBQVhBLENBQWhCO0FBMkJGLElBQU1KLE9BQU8sR0FBQztBQUNWN0IsaUJBQWUsRUFBZkE7QUFEVSxDQUFkOztBQUlFLElBQU1tQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHNCQUNsQiw4REFBQyxRQUFEO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSw4REFBQyxLQUFEO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFLFVBQWhCO0FBQUEsK0JBQ00sOERBQUMsZ0RBQUQ7QUFBSyxjQUFJLEVBQUVaLElBQVg7QUFBaUIsZUFBSyxFQUFFLEdBQXhCO0FBQTZCLGdCQUFNLEVBQUUsR0FBckM7QUFBMEMsaUJBQU8sRUFBRWxCLE9BQW5EO0FBQTRELGdCQUFNLEVBQUVMO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQXBCOztNQUFNbUMsVztBQVlOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxNTYyNzQzODE2MDczNDExZDY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJyBcclxuXHJcbmNvbnN0IFZlcnRpY2FsID0gU3R5bGVkLmRpdmBcclxuICAgICY+LmhlYWRlcj4udGl0bGV7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1gXHJcbmNvbnN0IEdyYXBoID0gU3R5bGVkLmRpdmBcclxuICAgICYgPiAuYmFyZ3JhcGh7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6ODB2dztcclxuICAgICAgICBoZWlnaHQ6NDB2aDtcclxuICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTB2dztcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgY2hhcnRBcmVhQm9yZGVyID0ge1xyXG4gICAgaWQ6ICdjaGFydEFyZWFCb3JkZXInLFxyXG4gICAgYmVmb3JlRHJhdyhjaGFydCwgYXJncywgb3B0aW9ucykge1xyXG4gICAgICBjb25zdCB7Y3R4LCBjaGFydEFyZWE6IHtsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHR9fSA9IGNoYXJ0O1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBvcHRpb25zLmJvcmRlckNvbG9yO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy5ib3JkZXJXaWR0aDtcclxuICAgICAgY3R4LnNldExpbmVEYXNoKG9wdGlvbnMuYm9yZGVyRGFzaCB8fCBbXSk7XHJcbiAgICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IG9wdGlvbnMuYm9yZGVyRGFzaE9mZnNldDtcclxuICAgICAgY3R4LnN0cm9rZVJlY3QobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9O1xyXG5jb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbJ+yInOuwnOugpScsICfriIjsuZjroKUnLCAn7JiI7KCI7ISxJywgJ+uFvOumrOugpSddLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAgeyBcclxuICAgICAgICBkYXRhOiBbMTAwLCAyMCwgMzAsIDUwXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknXHJcbiAgICAgICAgXSxcclxuICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAwLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuICBcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbGFiZWw6IHtkaXNwbGF5OlwiZmFsc2VcIn0sXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgY2hhcnRBcmVhQm9yZGVyOiB7XHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaDogWzUsIDVdLFxyXG4gICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMixcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgc2NhbGVzOm9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwKVwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDApXCIsXHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwbHVnaW5zPXtcclxuICAgIGNoYXJ0QXJlYUJvcmRlclxyXG59XHJcbiAgXHJcbiAgY29uc3QgVmVydGljYWxCYXIgPSAoKSA9PiAoXHJcbiAgICA8VmVydGljYWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEdyYXBoPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiYmFyZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIDxCYXIgZGF0YT17ZGF0YX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IG9wdGlvbnM9e29wdGlvbnN9IHBsdWdpbj17Y2hhcnRBcmVhQm9yZGVyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmFwaD5cclxuICAgIDwvVmVydGljYWw+XHJcbiAgKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBWZXJ0aWNhbEJhcjsiXSwic291cmNlUm9vdCI6IiJ9