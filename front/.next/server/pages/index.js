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

var _jsxFileName = "C:\\Users\\SH\\Desktop\\StoryCollection\\front\\components\\Graph.jsx";
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
const App = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
    position:relative;
    width:80vw;
    height:43vh;
    left:10vw;
`;
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


var _jsxFileName = "C:\\Users\\SH\\Desktop\\StoryCollection\\front\\pages\\index.jsx";



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvR3JhcGguanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1hcGV4Y2hhcnRzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQXBleENoYXJ0cyIsImR5bmFtaWMiLCJzc3IiLCJBcHAiLCJTdHlsZWQiLCJjb2xvcnMiLCJHcmFwaCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm9wdGlvbnMiLCJjaGFydCIsImlkIiwieGF4aXMiLCJsaW5lcyIsInNob3ciLCJjYXRlZ29yaWVzIiwieWF4aXMiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImdyaWQiLCJib3JkZXJDb2xvciIsInN0cm9rZURhc2hBcnJheSIsInBvc2l0aW9uIiwicm93IiwidW5kZWZpbmVkIiwib3BhY2l0eSIsImNvbHVtbiIsInBhZGRpbmciLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJyZW5kZXIiLCJQIiwiUmVzdWx0SW5mb3JtIiwicmVzdWx0X3BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFF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QUNKO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREksZUFFWjtBQUFNLGFBQUcsRUFBQyxZQUFWO0FBQXVCLGNBQUksRUFBQywyQkFBNUI7QUFBd0QscUJBQVcsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZZLGVBR1o7QUFBTSxjQUFJLEVBQUMsNkVBQVg7QUFBeUYsYUFBRyxFQUFDO0FBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQU9LLDhEQUFDLENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEwsZUFRSTtBQUFLLFdBQUssRUFBRztBQUFDLGlCQUFRLE1BQVQ7QUFBZ0Isc0JBQWE7QUFBN0IsT0FBYjtBQUFBLDZCQUFxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKLGVBVUksOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSixlQVlJLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQSxrQkFESjtBQWlCSCxDQXBCRDs7QUFzQkEsK0RBQWVBLFdBQWYsRTs7Ozs7Ozs7Ozs7QUMzQ0EsMEM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyAvLyBpbXBvcnQgQ2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cyc7XHJcbi8vIGltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbi8vIGNvbnN0IEFwZXhDaGFydHMgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtYXBleGNoYXJ0cycpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG5cclxuLy8gY29uc3QgR3JhcGggPSgpPT57XHJcbi8vICAgICAgICAgY29uc3Qgb3B0aW9ucz17XHJcbi8vICAgICAgICAgICAgIGNoYXJ0OntcclxuLy8gICAgICAgICAgICAgICAgIGlkOlwiYmFzaWMtYmFyXCJcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgeGF4aXM6e1xyXG4vLyAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczpbXCLsiJzrsJzroKVcIixcIuywveydmOugpVwiLFwi64W47Jik66ClXCIsXCLtj6zsmqnroKVcIl1cclxuLy8gICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgY29uc3Qgc2VyaWVzPVtcclxuLy8gICAgICAgICAgICAgICAgIHtkYXRhOlsxMDAsNTAsNzAsNjBdfVxyXG4vLyAgICAgICAgICAgICBdXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4vLyAgICAgY29uc29sZS5sb2coey4uLm9wdGlvbnN9KVxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8PlxyXG4vLyAgICAgICAgIGFhYSdcclxuLy8gICAgICAgICAgICAgPEFwZXhDaGFydHMgey4uLm9wdGlvbnN9IHsuLi5zZXJpZXN9IHR5cGU9XCJiYXJcIiB3aWR0aD1cIjUwMFwiLz5cclxuLy8gICAgICAgICA8Lz5cclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgR3JhcGhcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IENoYXJ0IGZyb20gXCJyZWFjdC1hcGV4Y2hhcnRzXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBBcGV4Q2hhcnRzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuY29uc3QgQXBwID0gU3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6ODB2dztcclxuICAgIGhlaWdodDo0M3ZoO1xyXG4gICAgbGVmdDoxMHZ3O1xyXG5gXHJcbkFwZXhDaGFydHMuY29sb3JzPVsnI0Y0NDMzNicsICcjRTkxRTYzJywgJyM5QzI3QjAnLCdncmVlbiddXHJcblxyXG5jbGFzcyBHcmFwaCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiYmFzaWMtYmFyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOntzaG93OnRydWV9LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1wi7Zi46rWs66ClXCIsIFwi7LC97J2Y66ClXCIsIFwi7JiI7J2Y67KU7KCIXCIsIFwi7Iic67Cc66ClXCJdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lczp7c2hvdzpmYWxzZX1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNlcmllcy0xXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDQwLCA0NSwgNTBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjOTBBNEFFJyxcclxuICAgICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiAwLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JhY2snLFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAgIFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgIHJvdzoge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjVcclxuICAgICAgICAgICAgfSwgIFxyXG4gICAgICAgICAgICBjb2x1bW46IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41XHJcbiAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgICAgIH0sICBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwPlxyXG4gICAgICAgICAgICA8QXBleENoYXJ0c1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJiYXJcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIGdyaWQ9e3RoaXMuc3RhdGUuZ3JpZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0FwcD5cclxuICAgICk7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaDsiLCJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgR3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9HcmFwaCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgUCA9U3R5bGVkLmgxYFxyXG4gICAgbWFyZ2luLXRvcDozcmVtO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6ODAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo1dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjJyZW07XHJcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcblxyXG5gXHJcbmNvbnN0IFJlc3VsdEluZm9ybSA9IFN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDoyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwJTtcclxuYFxyXG5jb25zdCByZXN1bHRfcGFnZT0oKT0+e1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cclxuPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW49XCJ0cnVlXCIvPlxyXG48bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEA5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz48L3N0eWxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgIDxQPvCfjJ/ri7nsi6DsnYAg7Zi46rWs7J6F64uI64ukLvCfjJ88L1A+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGUgPXt7XCJ3aWR0aFwiOlwiMTAwJVwiLFwidGV4dC1hbGlnblwiOlwiY2VudGVyXCJ9fT48aDE+7Zi46rWs66ClIDEwMCU8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyYXBoLz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJlc3VsdEluZm9ybT7slrTsqYzqtawg7KCA7KmM6rWs7ZWcIOuLueyLoOydgCDsp4TsoJXtlZwg7Zi46rWs7J6F64uI64ukLjwvUmVzdWx0SW5mb3JtPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0X3BhZ2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwZXhjaGFydHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=