self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Graph.jsx":
/*!******************************!*\
  !*** ./components/Graph.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import Chart from 'react-apexcharts';


var ApexCharts = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "node_modules_react-apexcharts_dist_react-apexcharts_min_js").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js")];
    },
    modules: ["..\\components\\Graph.jsx -> " + 'react-apexcharts']
  }
});
_c2 = ApexCharts;

var Graph = function Graph() {
  var options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["순발력", "창의력", "노오력", "포용력"]
    },
    series: [{
      data: [100, 50, 70, 60]
    }]
  };
  console.log(_objectSpread({}, options));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "aaa"
  }, void 0, false);
};

_c3 = Graph;
/* harmony default export */ __webpack_exports__["default"] = (Graph); // import React, { Component } from "react";
// // import Chart from "react-apexcharts";
// import dynamic from 'next/dynamic';
// const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
// class Graph extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: ["호구력", "창의력", "예의범절", "순발력"]
//         }
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50]
//         }
//       ]
//     };
//   }
//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <ApexCharts
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Graph;

var _c, _c2, _c3;

$RefreshReg$(_c, "ApexCharts$dynamic");
$RefreshReg$(_c2, "ApexCharts");
$RefreshReg$(_c3, "Graph");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaC5qc3giXSwibmFtZXMiOlsiQXBleENoYXJ0cyIsImR5bmFtaWMiLCJzc3IiLCJHcmFwaCIsIm9wdGlvbnMiLCJjaGFydCIsImlkIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwic2VyaWVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLCtPQUFOO0FBQUEsQ0FBRCxFQUFtQztBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsc0ZBQXFCO0FBQUE7QUFBQSxnREFBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUFuQyxDQUExQjtNQUFNRixVOztBQUdOLElBQU1HLEtBQUssR0FBRSxTQUFQQSxLQUFPLEdBQUk7QUFDVCxNQUFNQyxPQUFPLEdBQUM7QUFDVkMsU0FBSyxFQUFDO0FBQ0ZDLFFBQUUsRUFBQztBQURELEtBREk7QUFJVkMsU0FBSyxFQUFDO0FBQ0ZDLGdCQUFVLEVBQUMsQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLEtBQWIsRUFBbUIsS0FBbkI7QUFEVCxLQUpJO0FBT1ZDLFVBQU0sRUFBQyxDQUNIO0FBQUNDLFVBQUksRUFBQyxDQUFDLEdBQUQsRUFBSyxFQUFMLEVBQVEsRUFBUixFQUFXLEVBQVg7QUFBTixLQURHO0FBUEcsR0FBZDtBQVdKQyxTQUFPLENBQUNDLEdBQVIsbUJBQWdCUixPQUFoQjtBQUNBLHNCQUNJO0FBQUE7QUFBQSxtQkFESjtBQU1ILENBbkJEOztNQUFNRCxLO0FBcUJOLCtEQUFlQSxLQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGViMTZkOWNhMDcxZjY4MjU3YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgQXBleENoYXJ0cyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcblxyXG5jb25zdCBHcmFwaCA9KCk9PntcclxuICAgICAgICBjb25zdCBvcHRpb25zPXtcclxuICAgICAgICAgICAgY2hhcnQ6e1xyXG4gICAgICAgICAgICAgICAgaWQ6XCJiYXNpYy1iYXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczp7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOltcIuyInOuwnOugpVwiLFwi7LC97J2Y66ClXCIsXCLrhbjsmKTroKVcIixcIu2PrOyaqeugpVwiXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJpZXM6W1xyXG4gICAgICAgICAgICAgICAge2RhdGE6WzEwMCw1MCw3MCw2MF19XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh7Li4ub3B0aW9uc30pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgYWFhXHJcbiAgICAgICAgICAgIHsvKiA8QXBleENoYXJ0IHsuLi5vcHRpb25zfS8+ICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaFxyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyAvLyBpbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuLy8gY29uc3QgQXBleENoYXJ0cyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbi8vIGNsYXNzIEdyYXBoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4vLyAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuLy8gICAgIHRoaXMuc3RhdGUgPSB7XHJcbi8vICAgICAgIG9wdGlvbnM6IHtcclxuLy8gICAgICAgICBjaGFydDoge1xyXG4vLyAgICAgICAgICAgaWQ6IFwiYmFzaWMtYmFyXCJcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHhheGlzOiB7XHJcbi8vICAgICAgICAgICBjYXRlZ29yaWVzOiBbXCLtmLjqtazroKVcIiwgXCLssL3snZjroKVcIiwgXCLsmIjsnZjrspTsoIhcIiwgXCLsiJzrsJzroKVcIl1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHNlcmllczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwic2VyaWVzLTFcIixcclxuLy8gICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDQ1LCA1MF1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIF1cclxuLy8gICAgIH07XHJcbi8vICAgfVxyXG5cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1peGVkLWNoYXJ0XCI+XHJcbi8vICAgICAgICAgICAgIDxBcGV4Q2hhcnRzXHJcbi8vICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfVxyXG4vLyAgICAgICAgICAgICAgIHNlcmllcz17dGhpcy5zdGF0ZS5zZXJpZXN9XHJcbi8vICAgICAgICAgICAgICAgdHlwZT1cImJhclwiXHJcbi8vICAgICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxyXG4vLyAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEdyYXBoOyJdLCJzb3VyY2VSb290IjoiIn0=