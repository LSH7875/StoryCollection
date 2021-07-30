self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _taggedTemplateLiteral; }
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
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
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\SH\\Desktop\\StoryCollection\\front\\components\\Graph.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0,C_Users_SH_Desktop_StoryCollection_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.default)(["\n    position:relative;\n    width:80vw;\n    height:50vh;\n        \n"]);

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
var App = Styled.div(_templateObject());
_c3 = App;

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
      }]
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
          width: "500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaC5qc3giXSwibmFtZXMiOlsiQXBleENoYXJ0cyIsImR5bmFtaWMiLCJzc3IiLCJBcHAiLCJTdHlsZWQiLCJkaXYiLCJHcmFwaCIsInByb3BzIiwic3RhdGUiLCJvcHRpb25zIiwiY2hhcnQiLCJpZCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLCtPQUFOO0FBQUEsQ0FBRCxFQUFtQztBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsc0ZBQXFCO0FBQUE7QUFBQSxnREFBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUFuQyxDQUExQjtNQUFNRixVO0FBRU4sSUFBTUcsR0FBRyxHQUFHQyxNQUFNLENBQUNDLEdBQVYsbUJBQVQ7TUFBTUYsRzs7SUFRQUcsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBQUU7QUFDUEMsYUFBSyxFQUFFO0FBQ0xDLFlBQUUsRUFBRTtBQURDLFNBREE7QUFJUEMsYUFBSyxFQUFFO0FBQ0xDLG9CQUFVLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLE1BQWYsRUFBdUIsS0FBdkI7QUFEUDtBQUpBLE9BREU7QUFTWEMsWUFBTSxFQUFFLENBQ047QUFDRUMsWUFBSSxFQUFFLFVBRFI7QUFFRUMsWUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYjtBQUZSLE9BRE07QUFURyxLQUFiO0FBSGlCO0FBbUJsQjs7Ozs2QkFFUTtBQUNQLDBCQUNJLDhEQUFDLEdBQUQ7QUFBQSwrQkFDSSw4REFBQyxVQUFEO0FBQ0ksaUJBQU8sRUFBRSxLQUFLUixLQUFMLENBQVdDLE9BRHhCO0FBRUksZ0JBQU0sRUFBRSxLQUFLRCxLQUFMLENBQVdNLE1BRnZCO0FBR0ksY0FBSSxFQUFDLEtBSFQ7QUFJSSxlQUFLLEVBQUM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBVUQ7Ozs7RUFqQ2lCRyw0Qzs7QUFvQ3BCLCtEQUFlWCxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVmYTJmZWQyZjYwMzhmNDkxZDliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59IiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gLy8gaW1wb3J0IENoYXJ0IGZyb20gJ3JlYWN0LWFwZXhjaGFydHMnO1xyXG4vLyBpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG4vLyBjb25zdCBBcGV4Q2hhcnRzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuXHJcbi8vIGNvbnN0IEdyYXBoID0oKT0+e1xyXG4vLyAgICAgICAgIGNvbnN0IG9wdGlvbnM9e1xyXG4vLyAgICAgICAgICAgICBjaGFydDp7XHJcbi8vICAgICAgICAgICAgICAgICBpZDpcImJhc2ljLWJhclwiXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHhheGlzOntcclxuLy8gICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6W1wi7Iic67Cc66ClXCIsXCLssL3snZjroKVcIixcIuuFuOyYpOugpVwiLFwi7Y+s7Jqp66ClXCJdXHJcbi8vICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgIGNvbnN0IHNlcmllcz1bXHJcbi8vICAgICAgICAgICAgICAgICB7ZGF0YTpbMTAwLDUwLDcwLDYwXX1cclxuLy8gICAgICAgICAgICAgXVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuLy8gICAgIGNvbnNvbGUubG9nKHsuLi5vcHRpb25zfSlcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPD5cclxuLy8gICAgICAgICBhYWEnXHJcbi8vICAgICAgICAgICAgIDxBcGV4Q2hhcnRzIHsuLi5vcHRpb25zfSB7Li4uc2VyaWVzfSB0eXBlPVwiYmFyXCIgd2lkdGg9XCI1MDBcIi8+XHJcbi8vICAgICAgICAgPC8+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEdyYXBoXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5jb25zdCBBcGV4Q2hhcnRzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuY29uc3QgQXBwID0gU3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6ODB2dztcclxuICAgIGhlaWdodDo1MHZoO1xyXG4gICAgICAgIFxyXG5gXHJcblxyXG5cclxuY2xhc3MgR3JhcGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICBpZDogXCJiYXNpYy1iYXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIu2YuOq1rOugpVwiLCBcIuywveydmOugpVwiLCBcIuyYiOydmOuylOygiFwiLCBcIuyInOuwnOugpVwiXVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJzZXJpZXMtMVwiLFxyXG4gICAgICAgICAgZGF0YTogWzMwLCA0MCwgNDUsIDUwXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcD5cclxuICAgICAgICAgICAgPEFwZXhDaGFydHNcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHNlcmllcz17dGhpcy5zdGF0ZS5zZXJpZXN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYmFyXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNTAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0FwcD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaDsiXSwic291cmNlUm9vdCI6IiJ9