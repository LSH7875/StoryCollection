(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Graph.jsx":
/*!******************************!*\
  !*** ./components/Graph.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\SH\\Desktop\\StoryCollection\\StoryCollection\\front\\components\\Graph.jsx";



const Vertical = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Graph__Vertical",
  componentId: "sc-lextiu-0"
})(["&>.header>.title{width:100%;text-align:center;}"]);
const Graph = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Graph",
  componentId: "sc-lextiu-1"
})(["& > .bargraph{position:relative;width:80vw;height:40vh;box-sizing:border-box;margin-left:10vw;}"]);
const chartAreaBorder = {
  id: 'chartAreaBorder',

  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: {
        left,
        top,
        width,
        height
      }
    } = chart;
    ctx.save();
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.setLineDash(options.borderDash || []);
    ctx.lineDashOffset = options.borderDashOffset;
    ctx.strokeRect(left, top, width, height);
    ctx.restore();
  }

};
const data = {
  labels: ['순발력', '눈치력', '예절성', '논리력'],
  datasets: [{
    data: [100, 20, 30, 50],
    backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
    borderWidth: 0
  }]
};
const options = {
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
};
const plugins = {
  chartAreaBorder
};

const VerticalBar = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Vertical, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "header"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 7
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Graph, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "hidden"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bargraph",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {
        data: data,
        width: 100,
        height: 100,
        options: options,
        plugin: chartAreaBorder
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 7
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 77,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (VerticalBar);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Graph */ "./components/Graph.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\SH\\Desktop\\StoryCollection\\StoryCollection\\front\\pages\\index.jsx";



const P = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h1.withConfig({
  displayName: "pages__P",
  componentId: "sc-2cp0ao-0"
})(["margin-top:3rem;text-align:center;font-size:1.5rem;font-weight:800;width:100%;height:5vh;margin-bottom:2rem;font-family:'Noto Sans KR',sans-serif;"]);
const ResultInform = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "pages__ResultInform",
  componentId: "sc-2cp0ao-1"
})(["position:relative;top:2em;width:100%;padding-left:10%;"]);

const result_page = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 1
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 1
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(P, {
      children: "\uD83C\uDF1F\uB2F9\uC2E0\uC740 \uD638\uAD6C\uC785\uB2C8\uB2E4.\uD83C\uDF1F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 14
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        "width": "100%",
        "text-align": "center"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "\uD638\uAD6C\uB825 100%"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 66
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Graph__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResultInform, {
      children: "\uC5B4\uCA4C\uAD6C \uC800\uCA4C\uAD6C\uD55C \uB2F9\uC2E0\uC740 \uC9C4\uC815\uD55C \uD638\uAD6C\uC785\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (result_page);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-chartjs-2");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvR3JhcGguanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiVmVydGljYWwiLCJTdHlsZWQiLCJHcmFwaCIsImNoYXJ0QXJlYUJvcmRlciIsImlkIiwiYmVmb3JlRHJhdyIsImNoYXJ0IiwiYXJncyIsIm9wdGlvbnMiLCJjdHgiLCJjaGFydEFyZWEiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJzYXZlIiwic3Ryb2tlU3R5bGUiLCJib3JkZXJDb2xvciIsImxpbmVXaWR0aCIsImJvcmRlcldpZHRoIiwic2V0TGluZURhc2giLCJib3JkZXJEYXNoIiwibGluZURhc2hPZmZzZXQiLCJib3JkZXJEYXNoT2Zmc2V0Iiwic3Ryb2tlUmVjdCIsInJlc3RvcmUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZXMiLCJ4QXhlcyIsImdyaWRMaW5lcyIsImNvbG9yIiwieUF4ZXMiLCJwbHVnaW5zIiwiVmVydGljYWxCYXIiLCJQIiwiUmVzdWx0SW5mb3JtIiwicmVzdWx0X3BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdURBQWQ7QUFLQSxNQUFNQyxLQUFLLEdBQUdELHVFQUFIO0FB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Z0NBQ0o7QUFBTSxhQUFHLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESSxlQUVaO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDLDJCQUE1QjtBQUF3RCxxQkFBVyxFQUFDO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRlksZUFHWjtBQUFNLGNBQUksRUFBQyw2RUFBWDtBQUF5RixhQUFHLEVBQUM7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBT0ssOERBQUMsQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQTCxlQVFJO0FBQUssV0FBSyxFQUFHO0FBQUMsaUJBQVEsTUFBVDtBQUFnQixzQkFBYTtBQUE3QixPQUFiO0FBQUEsNkJBQXFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFVSSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKLGVBWUksOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSjtBQUFBLGtCQURKO0FBaUJILENBcEJEOztBQXNCQSwrREFBZUEsV0FBZixFOzs7Ozs7Ozs7OztBQzFDQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnIFxyXG5cclxuY29uc3QgVmVydGljYWwgPSBTdHlsZWQuZGl2YFxyXG4gICAgJj4uaGVhZGVyPi50aXRsZXtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfWBcclxuY29uc3QgR3JhcGggPSBTdHlsZWQuZGl2YFxyXG4gICAgJiA+IC5iYXJncmFwaHtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDo4MHZ3O1xyXG4gICAgICAgIGhlaWdodDo0MHZoO1xyXG4gICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMHZ3O1xyXG5cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgY2hhcnRBcmVhQm9yZGVyID0ge1xyXG4gICAgaWQ6ICdjaGFydEFyZWFCb3JkZXInLFxyXG4gICAgYmVmb3JlRHJhdyhjaGFydCwgYXJncywgb3B0aW9ucykge1xyXG4gICAgICBjb25zdCB7Y3R4LCBjaGFydEFyZWE6IHtsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHR9fSA9IGNoYXJ0O1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBvcHRpb25zLmJvcmRlckNvbG9yO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy5ib3JkZXJXaWR0aDtcclxuICAgICAgY3R4LnNldExpbmVEYXNoKG9wdGlvbnMuYm9yZGVyRGFzaCB8fCBbXSk7XHJcbiAgICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IG9wdGlvbnMuYm9yZGVyRGFzaE9mZnNldDtcclxuICAgICAgY3R4LnN0cm9rZVJlY3QobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9O1xyXG5jb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbJ+yInOuwnOugpScsICfriIjsuZjroKUnLCAn7JiI7KCI7ISxJywgJ+uFvOumrOugpSddLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAgeyBcclxuICAgICAgICBkYXRhOiBbMTAwLCAyMCwgMzAsIDUwXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknXHJcbiAgICAgICAgXSxcclxuICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAwLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxufTtcclxuICBcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMClcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwKVwiLFxyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5jb25zdCBwbHVnaW5zPXtcclxuICAgIGNoYXJ0QXJlYUJvcmRlclxyXG59XHJcbiAgXHJcbiAgY29uc3QgVmVydGljYWxCYXIgPSAoKSA9PiAoXHJcbiAgICA8VmVydGljYWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEdyYXBoPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW5cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImJhcmdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICA8QmFyIGRhdGE9e2RhdGF9IHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSBvcHRpb25zPXtvcHRpb25zfSBwbHVnaW49e2NoYXJ0QXJlYUJvcmRlcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JhcGg+XHJcbiAgICA8L1ZlcnRpY2FsPlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgVmVydGljYWxCYXI7IiwiaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvR3JhcGgnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgUCA9U3R5bGVkLmgxYFxyXG4gICAgbWFyZ2luLXRvcDozcmVtO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6ODAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo1dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjJyZW07XHJcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcblxyXG5gXHJcbmNvbnN0IFJlc3VsdEluZm9ybSA9IFN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDoyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwJTtcclxuYFxyXG5jb25zdCByZXN1bHRfcGFnZT0oKT0+e1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cclxuPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW49XCJ0cnVlXCIvPlxyXG48bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEA5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz48L3N0eWxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgIDxQPvCfjJ/ri7nsi6DsnYAg7Zi46rWs7J6F64uI64ukLvCfjJ88L1A+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGUgPXt7XCJ3aWR0aFwiOlwiMTAwJVwiLFwidGV4dC1hbGlnblwiOlwiY2VudGVyXCJ9fT48aDE+7Zi46rWs66ClIDEwMCU8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyYXBoLz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJlc3VsdEluZm9ybT7slrTsqYzqtawg7KCA7KmM6rWs7ZWcIOuLueyLoOydgCDsp4TsoJXtlZwg7Zi46rWs7J6F64uI64ukLjwvUmVzdWx0SW5mb3JtPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0X3BhZ2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=