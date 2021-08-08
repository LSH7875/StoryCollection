(function() {
var exports = {};
exports.id = "pages/result/[score]";
exports.ids = ["pages/result/[score]"];
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
const App = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Graph__App",
  componentId: "sc-lextiu-0"
})(["position:relative;width:80vw;height:43vh;left:10vw;"]);
ApexCharts.colors = ['#F44336', '#E91E63', '#9C27B0', 'green'];

class Graph extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    console.log('props.value', props);
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
        data: [props.value[0], props.value[1], props.value[2], props.value[3]]
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

/***/ "./pages/result/[score].jsx":
/*!**********************************!*\
  !*** ./pages/result/[score].jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Graph */ "./components/Graph.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/context */ "./store/context.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\SH\\Desktop\\StoryCollection\\front\\pages\\result\\[score].jsx";






const P = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h1.withConfig({
  displayName: "score__P",
  componentId: "sc-1p7chy2-0"
})(["margin-top:3rem;text-align:center;font-size:1.5rem;font-weight:800;width:100%;height:5vh;margin-bottom:2rem;font-family:'Noto Sans KR',sans-serif;"]);
const ResultInform = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "score__ResultInform",
  componentId: "sc-1p7chy2-1"
})(["position:relative;top:2em;width:100%;padding-left:10%;"]);

const result_page = () => {
  const {
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_5__.default);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(); //주소창으로 받은 값을 점수로 쓰기 위해 배열로 반환하는 과정

  let {
    score
  } = router.query;
  let bb = String(score);
  let query = bb.split('&');
  let query1 = query.slice();
  let arr = query1.sort(function (a, b) {
    return b - a;
  });
  let highscore = arr[0]; //제일 높은 점수
  // console.log(bb);

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    dispatch({
      type: 'TEST',
      data: 'test'
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(P, {
      children: "\uD83C\uDF1F\uB2F9\uC2E0\uC740 \uD638\uAD6C\uC785\uB2C8\uB2E4.\uD83C\uDF1F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 14
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        "width": "100%",
        "textAlign": "center"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: ["\uD638\uAD6C\uB825 ", highscore, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 65
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Graph__WEBPACK_IMPORTED_MODULE_2__.default, {
      value: query
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResultInform, {
      children: "\uC5B4\uCA4C\uAD6C \uC800\uCA4C\uAD6C\uD55C \uB2F9\uC2E0\uC740 \uC9C4\uC815\uD55C \uD638\uAD6C\uC785\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (result_page);

/***/ }),

/***/ "./store/context.jsx":
/*!***************************!*\
  !*** ./store/context.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  List: [],
  stat: {
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0
  }
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);
/* harmony default export */ __webpack_exports__["default"] = (Store);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/result/[score].jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvR3JhcGguanN4Iiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvcmVzdWx0L1tzY29yZV0uanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1hcGV4Y2hhcnRzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQXBleENoYXJ0cyIsImR5bmFtaWMiLCJzc3IiLCJBcHAiLCJTdHlsZWQiLCJjb2xvcnMiLCJHcmFwaCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJvcHRpb25zIiwiY2hhcnQiLCJpZCIsInhheGlzIiwibGluZXMiLCJzaG93IiwiY2F0ZWdvcmllcyIsInlheGlzIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJ2YWx1ZSIsImdyaWQiLCJib3JkZXJDb2xvciIsInN0cm9rZURhc2hBcnJheSIsInBvc2l0aW9uIiwicm93IiwidW5kZWZpbmVkIiwib3BhY2l0eSIsImNvbHVtbiIsInBhZGRpbmciLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJyZW5kZXIiLCJQIiwiUmVzdWx0SW5mb3JtIiwicmVzdWx0X3BhZ2UiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJTdG9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNjb3JlIiwicXVlcnkiLCJiYiIsIlN0cmluZyIsInNwbGl0IiwicXVlcnkxIiwic2xpY2UiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJoaWdoc2NvcmUiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiaW5pdGlhbFN0YXRlIiwiTGlzdCIsInN0YXQiLCJzdGF0MSIsInN0YXQyIiwic3RhdDMiLCJzdGF0NCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLG1EQUFPLENBQUMsTUFBTSxzSUFBUCxFQUFtQztBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUEsd0NBQXJCLDBDQUFxQjtBQUFBLGdEQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQW5DLENBQTFCO0FBRUEsTUFBTUMsR0FBRyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSwyREFBVDtBQU1BSixVQUFVLENBQUNLLE1BQVgsR0FBa0IsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFpQyxPQUFqQyxDQUFsQjs7QUFFQSxNQUFNQyxLQUFOLFNBQW9CQyw0Q0FBcEIsQ0FBOEI7QUFDMUJDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ25CLFVBQU1BLEtBQU47QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEwQkYsS0FBMUI7QUFDQSxTQUFLRyxLQUFMLEdBQWE7QUFDVEMsYUFBTyxFQUFFO0FBQ0xDLGFBQUssRUFBRTtBQUNIQyxZQUFFLEVBQUU7QUFERCxTQURGO0FBSUxDLGFBQUssRUFBRTtBQUNIQyxlQUFLLEVBQUM7QUFBQ0MsZ0JBQUksRUFBQztBQUFOLFdBREg7QUFF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LE1BQUksRUFBQyxFQURrQjtBQUV2QkMsTUFBSSxFQUFDO0FBQUNDLFNBQUssRUFBQyxDQUFQO0FBQVNDLFNBQUssRUFBQyxDQUFmO0FBQWlCQyxTQUFLLEVBQUMsQ0FBdkI7QUFBeUJDLFNBQUssRUFBQztBQUEvQjtBQUZrQixDQUFwQjtBQUtQLE1BQU12QixLQUFLLGdCQUFHd0Isb0RBQWEsQ0FBQ1AsWUFBRCxDQUEzQjtBQUVBLCtEQUFlakIsS0FBZixFOzs7Ozs7Ozs7OztBQ1RBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL3Jlc3VsdC9bc2NvcmVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gLy8gaW1wb3J0IENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnO1xyXG4vLyBpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG4vLyBjb25zdCBBcGV4Q2hhcnRzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuXHJcbi8vIGNvbnN0IEdyYXBoID0oKT0+e1xyXG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbnM9e1xyXG4vLyAgICAgICAgICAgICBjaGFydDp7XHJcbi8vICAgICAgICAgICAgICAgICBpZDpcImJhc2ljLWJhclwiXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHhheGlzOntcclxuLy8gICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6W1wi7Iic67Cc66ClXCIsXCLssL3snZjroKVcIixcIuuFuOyYpOugpVwiLFwi7Y+s7Jqp66ClXCJdXHJcbi8vICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgIGNvbnN0IHNlcmllcz1bXHJcbi8vICAgICAgICAgICAgICAgICB7ZGF0YTpbMTAwLDUwLDcwLDYwXX1cclxuLy8gICAgICAgICAgICAgXVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuLy8gICAgIGNvbnNvbGUubG9nKHsuLi5vcHRpb25zfSlcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPD5cclxuLy8gICAgICAgICBhYWEnXHJcbi8vICAgICAgICAgICAgIDxBcGV4Q2hhcnRzIHsuLi5vcHRpb25zfSB7Li4uc2VyaWVzfSB0eXBlPVwiYmFyXCIgd2lkdGg9XCI1MDBcIi8+XHJcbi8vICAgICAgICAgPC8+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEdyYXBoXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQXBleENoYXJ0cyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbmNvbnN0IEFwcCA9IFN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOjgwdnc7XHJcbiAgICBoZWlnaHQ6NDN2aDtcclxuICAgIGxlZnQ6MTB2dztcclxuYFxyXG5BcGV4Q2hhcnRzLmNvbG9ycz1bJyNGNDQzMzYnLCAnI0U5MUU2MycsICcjOUMyN0IwJywnZ3JlZW4nXVxyXG5cclxuY2xhc3MgR3JhcGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnNvbGUubG9nKCdwcm9wcy52YWx1ZScscHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImJhc2ljLWJhclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lczp7c2hvdzp0cnVlfSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIu2YuOq1rOugpVwiLCBcIuywveydmOugpVwiLCBcIuyYiOydmOuylOygiFwiLCBcIuyInOuwnOugpVwiXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGluZXM6e3Nob3c6ZmFsc2V9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzZXJpZXMtMVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogW3Byb3BzLnZhbHVlWzBdLCBwcm9wcy52YWx1ZVsxXSwgcHJvcHMudmFsdWVbMl0sIHByb3BzLnZhbHVlWzNdXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzkwQTRBRScsXHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogMCxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdiYWNrJyxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgICBcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgIFxyXG4gICAgICAgICAgICByb3c6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41XHJcbiAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgY29sdW1uOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNVxyXG4gICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcD5cclxuICAgICAgICAgICAgPEFwZXhDaGFydHNcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHNlcmllcz17dGhpcy5zdGF0ZS5zZXJpZXN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYmFyXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICBncmlkPXt0aGlzLnN0YXRlLmdyaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9BcHA+XHJcbiAgICApO31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7IiwiaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEdyYXBoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR3JhcGgnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHt1c2VDb250ZXh0LHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9jb250ZXh0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBQID1TdHlsZWQuaDFgXHJcbiAgICBtYXJnaW4tdG9wOjNyZW07XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDo4MDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjV2aDtcclxuICAgIG1hcmdpbi1ib3R0b206MnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuXHJcbmBcclxuY29uc3QgUmVzdWx0SW5mb3JtID0gU3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjJlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTAlO1xyXG5gXHJcbmNvbnN0IHJlc3VsdF9wYWdlPSgpPT57XHJcblxyXG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHVzZUNvbnRleHQoU3RvcmUpO1xyXG4gICAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgLy/so7zshozssL3snLzroZwg67Cb7J2AIOqwkuydhCDsoJDsiJjroZwg7JOw6riwIOychO2VtCDrsLDsl7TroZwg67CY7ZmY7ZWY64qUIOqzvOyglVxyXG4gICAgbGV0IHtzY29yZX09IHJvdXRlci5xdWVyeTtcclxuICAgIGxldCBiYj1TdHJpbmcoc2NvcmUpO1xyXG4gICAgbGV0IHF1ZXJ5PWJiLnNwbGl0KCcmJyk7XHJcbiAgICBcclxuICAgIGxldCBxdWVyeTE9cXVlcnkuc2xpY2UoKTtcclxuICAgIGxldCBhcnIgPSBxdWVyeTEuc29ydChmdW5jdGlvbihhLGIpe1xyXG4gICAgICAgIHJldHVybiBiLWE7XHJcbiAgICB9KVxyXG4gICAgbGV0IGhpZ2hzY29yZT1hcnJbMF07Ly/soJzsnbwg64aS7J2AIOygkOyImFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGJiKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTonVEVTVCcsXHJcbiAgICAgICAgICAgIGRhdGE6J3Rlc3QnXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPjwvc3R5bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgPFA+8J+Mn+uLueyLoOydgCDtmLjqtazsnoXri4jri6Qu8J+MnzwvUD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3tcIndpZHRoXCI6XCIxMDAlXCIsXCJ0ZXh0QWxpZ25cIjpcImNlbnRlclwifX0+PGgxPu2YuOq1rOugpSB7aGlnaHNjb3JlfSU8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyYXBoIHZhbHVlPXtxdWVyeX0vPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8UmVzdWx0SW5mb3JtPuyWtOypjOq1rCDsoIDsqYzqtaztlZwg64u57Iug7J2AIOynhOygle2VnCDtmLjqtazsnoXri4jri6QuPC9SZXN1bHRJbmZvcm0+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXN1bHRfcGFnZSIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID17XHJcbiAgICBMaXN0OltdLFxyXG4gICAgc3RhdDp7c3RhdDE6MCxzdGF0MjowLHN0YXQzOjAsc3RhdDQ6MH1cclxufVxyXG5cclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwZXhjaGFydHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=