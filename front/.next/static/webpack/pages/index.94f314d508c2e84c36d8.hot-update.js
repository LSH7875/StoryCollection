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
/* harmony import */ var C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\SH\\Desktop\\StoryCollection\\front\\components\\Graph.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.default)(["\n    position:relative;\n    width:80vw;\n    height:43vh;\n    left:10vw;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

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



var ApexCharts = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
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
var App = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div(_templateObject());
_c3 = App;
ApexCharts.colors = ['#F44336', '#E91E63', '#9C27B0', 'green'];

var Graph = /*#__PURE__*/function (_Component) {
  (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Graph, _Component);

  var _super = _createSuper(Graph);

  function Graph(props) {
    var _this;

    (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Graph);

    _this = _super.call(this, props);
    _this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["호구력", "창의력", "예의범절", "순발력"]
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
    return _this;
  }

  (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Graph, [{
    key: "render",
    value: function render() {
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
          lineNumber: 105,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this);
    }
  }]);

  return Graph;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Graph);

var _c, _c2, _c3;

$RefreshReg$(_c, "ApexCharts$dynamic");
$RefreshReg$(_c2, "ApexCharts");
$RefreshReg$(_c3, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaC5qc3giXSwibmFtZXMiOlsiQXBleENoYXJ0cyIsImR5bmFtaWMiLCJzc3IiLCJBcHAiLCJTdHlsZWQiLCJjb2xvcnMiLCJHcmFwaCIsInByb3BzIiwic3RhdGUiLCJvcHRpb25zIiwiY2hhcnQiLCJpZCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiZ3JpZCIsInNob3ciLCJib3JkZXJDb2xvciIsInN0cm9rZURhc2hBcnJheSIsInBvc2l0aW9uIiwibGluZXMiLCJ5YXhpcyIsInJvdyIsInVuZGVmaW5lZCIsIm9wYWNpdHkiLCJjb2x1bW4iLCJwYWRkaW5nIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLCtPQUFOO0FBQUEsQ0FBRCxFQUFtQztBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsc0ZBQXFCO0FBQUE7QUFBQSxnREFBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUFuQyxDQUExQjtNQUFNRixVO0FBRU4sSUFBTUcsR0FBRyxHQUFHQywwREFBSCxtQkFBVDtNQUFNRCxHO0FBTU5ILFVBQVUsQ0FBQ0ssTUFBWCxHQUFrQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWlDLE9BQWpDLENBQWxCOztJQUVNQyxLOzs7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ25CLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGFBQU8sRUFBRTtBQUNMQyxhQUFLLEVBQUU7QUFDSEMsWUFBRSxFQUFFO0FBREQsU0FERjtBQUlMQyxhQUFLLEVBQUU7QUFDSEMsb0JBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsTUFBZixFQUF1QixLQUF2QjtBQURUO0FBSkYsT0FEQTtBQVNMQyxZQUFNLEVBQUUsQ0FDUjtBQUNJQyxZQUFJLEVBQUUsVUFEVjtBQUVJQyxZQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiO0FBRlYsT0FEUSxDQVRIO0FBZVRDLFVBQUksRUFBRTtBQUNGQyxZQUFJLEVBQUUsSUFESjtBQUVGQyxtQkFBVyxFQUFFLFNBRlg7QUFHRkMsdUJBQWUsRUFBRSxDQUhmO0FBSUZDLGdCQUFRLEVBQUUsTUFKUjtBQUtGVCxhQUFLLEVBQUU7QUFDSFUsZUFBSyxFQUFFO0FBQ0hKLGdCQUFJLEVBQUU7QUFESDtBQURKLFNBTEw7QUFVRkssYUFBSyxFQUFFO0FBQ0hELGVBQUssRUFBRTtBQUNISixnQkFBSSxFQUFFO0FBREg7QUFESixTQVZMO0FBZUZNLFdBQUcsRUFBRTtBQUNEbkIsZ0JBQU0sRUFBRW9CLFNBRFA7QUFFREMsaUJBQU8sRUFBRTtBQUZSLFNBZkg7QUFtQkZDLGNBQU0sRUFBRTtBQUNKdEIsZ0JBQU0sRUFBRW9CLFNBREo7QUFFSkMsaUJBQU8sRUFBRTtBQUZMLFNBbkJOO0FBdUJGRSxlQUFPLEVBQUU7QUFDTEMsYUFBRyxFQUFFLENBREE7QUFFTEMsZUFBSyxFQUFFLENBRkY7QUFHTEMsZ0JBQU0sRUFBRSxDQUhIO0FBSUxDLGNBQUksRUFBRTtBQUpEO0FBdkJQO0FBZkcsS0FBYjtBQUhtQjtBQWlEdEI7Ozs7NkJBRVk7QUFDVCwwQkFDSSw4REFBQyxHQUFEO0FBQUEsK0JBQ0ksOERBQUMsVUFBRDtBQUNJLGlCQUFPLEVBQUUsS0FBS3hCLEtBQUwsQ0FBV0MsT0FEeEI7QUFFSSxnQkFBTSxFQUFFLEtBQUtELEtBQUwsQ0FBV00sTUFGdkI7QUFHSSxjQUFJLEVBQUMsS0FIVDtBQUlJLGVBQUssRUFBQyxLQUpWO0FBS0ksZ0JBQU0sRUFBQyxLQUxYO0FBTUksY0FBSSxFQUFFLEtBQUtOLEtBQUwsQ0FBV1M7QUFOckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQVdHOzs7O0VBaEVhZ0IsNEM7O0FBbUVwQiwrREFBZTNCLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTRmMzE0ZDUwOGMyZTg0YzM2ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIC8vIGltcG9ydCBDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJztcclxuLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuLy8gY29uc3QgQXBleENoYXJ0cyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1hcGV4Y2hhcnRzJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcblxyXG4vLyBjb25zdCBHcmFwaCA9KCk9PntcclxuLy8gICAgICAgICBjb25zdCBvcHRpb25zPXtcclxuLy8gICAgICAgICAgICAgY2hhcnQ6e1xyXG4vLyAgICAgICAgICAgICAgICAgaWQ6XCJiYXNpYy1iYXJcIlxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICB4YXhpczp7XHJcbi8vICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOltcIuyInOuwnOugpVwiLFwi7LC97J2Y66ClXCIsXCLrhbjsmKTroKVcIixcIu2PrOyaqeugpVwiXVxyXG4vLyAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICBjb25zdCBzZXJpZXM9W1xyXG4vLyAgICAgICAgICAgICAgICAge2RhdGE6WzEwMCw1MCw3MCw2MF19XHJcbi8vICAgICAgICAgICAgIF1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbi8vICAgICBjb25zb2xlLmxvZyh7Li4ub3B0aW9uc30pXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDw+XHJcbi8vICAgICAgICAgYWFhJ1xyXG4vLyAgICAgICAgICAgICA8QXBleENoYXJ0cyB7Li4ub3B0aW9uc30gey4uLnNlcmllc30gdHlwZT1cImJhclwiIHdpZHRoPVwiNTAwXCIvPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBHcmFwaFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgQ2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEFwZXhDaGFydHMgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtYXBleGNoYXJ0cycpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG5jb25zdCBBcHAgPSBTdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDo4MHZ3O1xyXG4gICAgaGVpZ2h0OjQzdmg7XHJcbiAgICBsZWZ0OjEwdnc7XHJcbmBcclxuQXBleENoYXJ0cy5jb2xvcnM9WycjRjQ0MzM2JywgJyNFOTFFNjMnLCAnIzlDMjdCMCcsJ2dyZWVuJ11cclxuXHJcbmNsYXNzIEdyYXBoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJiYXNpYy1iYXJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1wi7Zi46rWs66ClXCIsIFwi7LC97J2Y66ClXCIsIFwi7JiI7J2Y67KU7KCIXCIsIFwi7Iic67Cc66ClXCJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzZXJpZXMtMVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgNDUsIDUwXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzkwQTRBRScsXHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogMCxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdiYWNrJyxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgICBcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgIFxyXG4gICAgICAgICAgICByb3c6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41XHJcbiAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgY29sdW1uOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNVxyXG4gICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcD5cclxuICAgICAgICAgICAgPEFwZXhDaGFydHNcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHNlcmllcz17dGhpcy5zdGF0ZS5zZXJpZXN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYmFyXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICBncmlkPXt0aGlzLnN0YXRlLmdyaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9BcHA+XHJcbiAgICApO31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7Il0sInNvdXJjZVJvb3QiOiIifQ==