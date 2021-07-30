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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\eornj\\Desktop\\test\\front\\components\\Graph.jsx";
// import React from 'react';
// // import Chart from 'react-apexcharts';
// import dynamic from 'next/dynamic';
// const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
// const Graph =()=>{
//         const options={
//             chart:{
//                 id:"basic-bar"
//             },
//             xaxis:{
//                 categories:["순발력","창의력","노오력","포용력"]
//             }}
//         const series=[
//                 {data:[100,50,70,60]}
//             ]
//     console.log({...options})
//     return (
//         <>
//         aaa'
//             <ApexCharts {...options} {...series} type="bar" width="500"/>
//         </>
//     )
// }
// export default Graph
 // import Chart from "react-apexcharts";



const ApexCharts = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-apexcharts */ "react-apexcharts", 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ "react-apexcharts")],
    modules: ["..\\components\\Graph.jsx -> " + 'react-apexcharts']
  }
});
const App = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Graph__App",
  componentId: "sc-lextiu-0"
})(["position:relative;width:80vw;height:43vh;left:10vw;"]);
ApexCharts.colors = ['#F44336', '#E91E63', '#9C27B0', 'green'];

class Graph extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          lines: {
            show: true
          },
          categories: ["호구력", "창의력", "예의범절", "순발력"]
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      series: [{
        name: "series-1",
        data: [30, 40, 45, 50]
      }],
      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        row: {
          colors: undefined,
          opacity: 0.5
        },
        column: {
          colors: undefined,
          opacity: 0.5
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApexCharts, {
        options: this.state.options,
        series: this.state.series,
        type: "bar",
        width: "300",
        height: "300",
        grid: this.state.grid
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Graph);

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


var _jsxFileName = "C:\\Users\\eornj\\Desktop\\test\\front\\pages\\index.jsx";



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
          lineNumber: 29,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 1
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 1
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(P, {
      children: "\uD83C\uDF1F\uB2F9\uC2E0\uC740 \uD638\uAD6C\uC785\uB2C8\uB2E4.\uD83C\uDF1F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
        lineNumber: 34,
        columnNumber: 66
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Graph__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResultInform, {
      children: "\uC5B4\uCA4C\uAD6C \uC800\uCA4C\uAD6C\uD55C \uB2F9\uC2E0\uC740 \uC9C4\uC815\uD55C \uD638\uAD6C\uC785\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (result_page);

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

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

/***/ "react-apexcharts":
/*!***********************************!*\
  !*** external "react-apexcharts" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-apexcharts");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvR3JhcGguanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1hcGV4Y2hhcnRzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQXBleENoYXJ0cyIsImR5bmFtaWMiLCJzc3IiLCJBcHAiLCJTdHlsZWQiLCJjb2xvcnMiLCJHcmFwaCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm9wdGlvbnMiLCJjaGFydCIsImlkIiwieGF4aXMiLCJsaW5lcyIsInNob3ciLCJjYXRlZ29yaWVzIiwieWF4aXMiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImdyaWQiLCJib3JkZXJDb2xvciIsInN0cm9rZURhc2hBcnJheSIsInBvc2l0aW9uIiwicm93IiwidW5kZWZpbmVkIiwib3BhY2l0eSIsImNvbHVtbiIsInBhZGRpbmciLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJyZW5kZXIiLCJQIiwiUmVzdWx0SW5mb3JtIiwicmVzdWx0X3BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFF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QUFHLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESSxlQUVaO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDLDJCQUE1QjtBQUF3RCxxQkFBVyxFQUFDO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRlksZUFHWjtBQUFNLGNBQUksRUFBQyw2RUFBWDtBQUF5RixhQUFHLEVBQUM7QUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBT0ssOERBQUMsQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQTCxlQVFJO0FBQUssV0FBSyxFQUFHO0FBQUMsaUJBQVEsTUFBVDtBQUFnQixzQkFBYTtBQUE3QixPQUFiO0FBQUEsNkJBQXFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFVSSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKLGVBWUksOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSjtBQUFBLGtCQURKO0FBaUJILENBcEJEOztBQXNCQSwrREFBZUEsV0FBZixFOzs7Ozs7Ozs7OztBQzNDQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIC8vIGltcG9ydCBDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJztcclxuLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuLy8gY29uc3QgQXBleENoYXJ0cyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcblxyXG4vLyBjb25zdCBHcmFwaCA9KCk9PntcclxuLy8gICAgICAgICBjb25zdCBvcHRpb25zPXtcclxuLy8gICAgICAgICAgICAgY2hhcnQ6e1xyXG4vLyAgICAgICAgICAgICAgICAgaWQ6XCJiYXNpYy1iYXJcIlxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICB4YXhpczp7XHJcbi8vICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOltcIuyInOuwnOugpVwiLFwi7LC97J2Y66ClXCIsXCLrhbjsmKTroKVcIixcIu2PrOyaqeugpVwiXVxyXG4vLyAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICBjb25zdCBzZXJpZXM9W1xyXG4vLyAgICAgICAgICAgICAgICAge2RhdGE6WzEwMCw1MCw3MCw2MF19XHJcbi8vICAgICAgICAgICAgIF1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbi8vICAgICBjb25zb2xlLmxvZyh7Li4ub3B0aW9uc30pXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDw+XHJcbi8vICAgICAgICAgYWFhJ1xyXG4vLyAgICAgICAgICAgICA8QXBleENoYXJ0cyB7Li4ub3B0aW9uc30gey4uLnNlcmllc30gdHlwZT1cImJhclwiIHdpZHRoPVwiNTAwXCIvPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBHcmFwaFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEFwZXhDaGFydHMgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtYXBleGNoYXJ0cycpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG5jb25zdCBBcHAgPSBTdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDo4MHZ3O1xyXG4gICAgaGVpZ2h0OjQzdmg7XHJcbiAgICBsZWZ0OjEwdnc7XHJcbmBcclxuQXBleENoYXJ0cy5jb2xvcnM9WycjRjQ0MzM2JywgJyNFOTFFNjMnLCAnIzlDMjdCMCcsJ2dyZWVuJ11cclxuXHJcbmNsYXNzIEdyYXBoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJiYXNpYy1iYXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6e3Nob3c6dHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXCLtmLjqtazroKVcIiwgXCLssL3snZjroKVcIiwgXCLsmIjsnZjrspTsoIhcIiwgXCLsiJzrsJzroKVcIl1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOntzaG93OmZhbHNlfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2VyaWVzLTFcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDQ1LCA1MF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyM5MEE0QUUnLFxyXG4gICAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IDAsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYmFjaycsXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sICAgXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgcm93OiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNVxyXG4gICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgIGNvbHVtbjoge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjVcclxuICAgICAgICAgICAgfSwgIFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICAgICAgfSwgIFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHA+XHJcbiAgICAgICAgICAgIDxBcGV4Q2hhcnRzXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBzZXJpZXM9e3RoaXMuc3RhdGUuc2VyaWVzfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJhclwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgZ3JpZD17dGhpcy5zdGF0ZS5ncmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQXBwPlxyXG4gICAgKTt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoOyIsImltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBHcmFwaCBmcm9tICcuLi9jb21wb25lbnRzL0dyYXBoJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBQID1TdHlsZWQuaDFgXHJcbiAgICBtYXJnaW4tdG9wOjNyZW07XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDo4MDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjV2aDtcclxuICAgIG1hcmdpbi1ib3R0b206MnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuXHJcbmBcclxuY29uc3QgUmVzdWx0SW5mb3JtID0gU3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjJlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTAlO1xyXG5gXHJcbmNvbnN0IHJlc3VsdF9wYWdlPSgpPT57XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIvPlxyXG48bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc29yaWdpbj1cInRydWVcIi8+XHJcbjxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPjwvc3R5bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgPFA+8J+Mn+uLueyLoOydgCDtmLjqtazsnoXri4jri6Qu8J+MnzwvUD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3tcIndpZHRoXCI6XCIxMDAlXCIsXCJ0ZXh0LWFsaWduXCI6XCJjZW50ZXJcIn19PjxoMT7tmLjqtazroKUgMTAwJTwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JhcGgvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8UmVzdWx0SW5mb3JtPuyWtOypjOq1rCDsoIDsqYzqtaztlZwg64u57Iug7J2AIOynhOygle2VnCDtmLjqtazsnoXri4jri6QuPC9SZXN1bHRJbmZvcm0+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXN1bHRfcGFnZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBleGNoYXJ0c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==