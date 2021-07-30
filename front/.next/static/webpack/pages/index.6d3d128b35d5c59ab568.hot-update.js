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




var _jsxFileName = "C:\\Users\\SH\\Desktop\\StoryCollection\\front\\components\\Graph.jsx",
    _this = undefined;

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
  state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["순발력", "창의력", "노오력", "포용력"]
      },
      series: [{
        data: [100, 50, 70, 60]
      }]
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApexCharts, _objectSpread({}, state), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options); // coming from build/babel/plugins/react-loadable-plugin.js

  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return /*#__PURE__*/_react["default"].createElement(resolve(state.loaded), props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Loadable");

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


/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiQXBleENoYXJ0cyIsImR5bmFtaWMiLCJzc3IiLCJHcmFwaCIsInN0YXRlIiwib3B0aW9ucyIsImNoYXJ0IiwiaWQiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJzZXJpZXMiLCJkYXRhIiwiZXhwb3J0cyIsIm5vU1NSIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwibG9hZGFibGVGbiIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJsb2FkYWJsZUdlbmVyYXRlZCIsIkxvYWRhYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsIl91c2VTdWJzY3JpcHRpb24iLCJfbG9hZGFibGVDb250ZXh0IiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwibG9hZCIsInByb21pc2UiLCJsb2FkZWQiLCJ0aGVuIiwiZXJyIiwicmVzb2x2ZSIsImNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50IiwibG9hZEZuIiwib3B0cyIsIk9iamVjdCIsImFzc2lnbiIsImRlbGF5IiwidGltZW91dCIsInN1YnNjcmlwdGlvbiIsImluaXQiLCJzdWIiLCJMb2FkYWJsZVN1YnNjcmlwdGlvbiIsImdldEN1cnJlbnRWYWx1ZSIsImJpbmQiLCJzdWJzY3JpYmUiLCJyZXRyeSIsIm1vZHVsZUlkcyIsInB1c2giLCJpZHMiLCJtb2R1bGVJZCIsImluZGV4T2YiLCJMb2FkYWJsZUNvbXBvbmVudCIsInByb3BzIiwicmVmIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdWJzY3JpcHRpb24iLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm1vZHVsZU5hbWUiLCJ1c2VNZW1vIiwicHJlbG9hZCIsImZvcndhcmRSZWYiLCJfbG9hZEZuIiwiX29wdHMiLCJfY2FsbGJhY2tzIiwiU2V0IiwiX2RlbGF5IiwiX3RpbWVvdXQiLCJfcmVzIiwiX2NsZWFyVGltZW91dHMiLCJfc3RhdGUiLCJyZXMiLCJzZXRUaW1lb3V0IiwiX3VwZGF0ZSIsIl9lcnIiLCJwYXJ0aWFsIiwiY2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJhZGQiLCJMb2FkYWJsZSIsImZsdXNoSW5pdGlhbGl6ZXJzIiwiaW5pdGlhbGl6ZXJzIiwicHJvbWlzZXMiLCJsZW5ndGgiLCJwb3AiLCJhbGwiLCJwcmVsb2FkQWxsIiwicmVzb2x2ZUluaXRpYWxpemVycyIsInJlamVjdCIsInByZWxvYWRSZWFkeSIsInJlc29sdmVQcmVsb2FkIiwid2luZG93IiwiX19ORVhUX1BSRUxPQURSRUFEWSIsIl9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwrT0FBTjtBQUFBLENBQUQsRUFBbUM7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHNGQUFxQjtBQUFBO0FBQUEsZ0RBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBbkMsQ0FBMUI7TUFBTUYsVTs7QUFHTixJQUFNRyxLQUFLLEdBQUUsU0FBUEEsS0FBTyxHQUFJO0FBQ2JDLE9BQUssR0FBQztBQUNGQyxXQUFPLEVBQUM7QUFDSkMsV0FBSyxFQUFDO0FBQ0ZDLFVBQUUsRUFBQztBQURELE9BREY7QUFJSkMsV0FBSyxFQUFDO0FBQ0ZDLGtCQUFVLEVBQUMsQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLEtBQWIsRUFBbUIsS0FBbkI7QUFEVCxPQUpGO0FBT0pDLFlBQU0sRUFBQyxDQUNIO0FBQUNDLFlBQUksRUFBQyxDQUFDLEdBQUQsRUFBSyxFQUFMLEVBQVEsRUFBUixFQUFXLEVBQVg7QUFBTixPQURHO0FBUEg7QUFETixHQUFOO0FBYUEsc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxVQUFELG9CQUFnQlAsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBS0gsQ0FuQkQ7O01BQU1ELEs7QUFxQk4sK0RBQWVBLEtBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQSxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnQ0FBZ0M7O0FBRW5DO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDMUhhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsd0pBQWlFO0FBQ25FIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkM2QxMjhiMzVkNWM1OWFiNTY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgQ2hhcnQgZnJvbSAncmVhY3QtYXBleGNoYXJ0cyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IEFwZXhDaGFydHMgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtYXBleGNoYXJ0cycpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG5cclxuY29uc3QgR3JhcGggPSgpPT57XHJcbiAgICBzdGF0ZT17XHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGNoYXJ0OntcclxuICAgICAgICAgICAgICAgIGlkOlwiYmFzaWMtYmFyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6e1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczpbXCLsiJzrsJzroKVcIixcIuywveydmOugpVwiLFwi64W47Jik66ClXCIsXCLtj6zsmqnroKVcIl1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VyaWVzOltcclxuICAgICAgICAgICAgICAgIHtkYXRhOlsxMDAsNTAsNzAsNjBdfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXBleENoYXJ0cyB7Li4uc3RhdGV9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIC8vIGltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xyXG4vLyBpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG4vLyBjb25zdCBBcGV4Q2hhcnRzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuLy8gY2xhc3MgR3JhcGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4vLyAgICAgdGhpcy5zdGF0ZSA9IHtcclxuLy8gICAgICAgb3B0aW9uczoge1xyXG4vLyAgICAgICAgIGNoYXJ0OiB7XHJcbi8vICAgICAgICAgICBpZDogXCJiYXNpYy1iYXJcIlxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgeGF4aXM6IHtcclxuLy8gICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIu2YuOq1rOugpVwiLCBcIuywveydmOugpVwiLCBcIuyYiOydmOuylOygiFwiLCBcIuyInOuwnOugpVwiXVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgc2VyaWVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJzZXJpZXMtMVwiLFxyXG4vLyAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgNDUsIDUwXVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgXVxyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWl4ZWQtY2hhcnRcIj5cclxuLy8gICAgICAgICAgICAgPEFwZXhDaGFydHNcclxuLy8gICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnN9XHJcbi8vICAgICAgICAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cclxuLy8gICAgICAgICAgICAgICB0eXBlPVwiYmFyXCJcclxuLy8gICAgICAgICAgICAgICB3aWR0aD1cIjUwMFwiXHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgR3JhcGg7IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub1NTUj1ub1NTUjtleHBvcnRzLmRlZmF1bHQ9ZHluYW1pYzt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2xvYWRhYmxlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Y29uc3QgaXNTZXJ2ZXJTaWRlPXR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJztmdW5jdGlvbiBub1NTUihMb2FkYWJsZUluaXRpYWxpemVyLGxvYWRhYmxlT3B0aW9ucyl7Ly8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO2RlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlczsvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbmlmKCFpc1NlcnZlclNpZGUpe3JldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7fWNvbnN0IExvYWRpbmc9bG9hZGFibGVPcHRpb25zLmxvYWRpbmc7Ly8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG5yZXR1cm4oKT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZyx7ZXJyb3I6bnVsbCxpc0xvYWRpbmc6dHJ1ZSxwYXN0RGVsYXk6ZmFsc2UsdGltZWRPdXQ6ZmFsc2V9KTt9Ly8gZnVuY3Rpb24gZHluYW1pYzxQID0ge30sIE8gZXh0ZW5kcyBEeW5hbWljT3B0aW9ucz4ob3B0aW9uczogTyk6XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLG9wdGlvbnMpe2xldCBsb2FkYWJsZUZuPV9sb2FkYWJsZS5kZWZhdWx0O2xldCBsb2FkYWJsZU9wdGlvbnM9ey8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG5sb2FkaW5nOih7ZXJyb3IsaXNMb2FkaW5nLHBhc3REZWxheX0pPT57aWYoIXBhc3REZWxheSlyZXR1cm4gbnVsbDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKGlzTG9hZGluZyl7cmV0dXJuIG51bGw7fWlmKGVycm9yKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIixudWxsLGVycm9yLm1lc3NhZ2UsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGVycm9yLnN0YWNrKTt9fXJldHVybiBudWxsO319Oy8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbi8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuaWYoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKXtsb2FkYWJsZU9wdGlvbnMubG9hZGVyPSgpPT5keW5hbWljT3B0aW9uczsvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbn1lbHNlIGlmKHR5cGVvZiBkeW5hbWljT3B0aW9ucz09PSdmdW5jdGlvbicpe2xvYWRhYmxlT3B0aW9ucy5sb2FkZXI9ZHluYW1pY09wdGlvbnM7Ly8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG59ZWxzZSBpZih0eXBlb2YgZHluYW1pY09wdGlvbnM9PT0nb2JqZWN0Jyl7bG9hZGFibGVPcHRpb25zPXsuLi5sb2FkYWJsZU9wdGlvbnMsLi4uZHluYW1pY09wdGlvbnN9O30vLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG5sb2FkYWJsZU9wdGlvbnM9ey4uLmxvYWRhYmxlT3B0aW9ucywuLi5vcHRpb25zfTsvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuaWYobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKXtsb2FkYWJsZU9wdGlvbnM9ey4uLmxvYWRhYmxlT3B0aW9ucywuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWR9O2RlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7fS8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuaWYodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3I9PT0nYm9vbGVhbicpe2lmKCFsb2FkYWJsZU9wdGlvbnMuc3NyKXtkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtyZXR1cm4gbm9TU1IobG9hZGFibGVGbixsb2FkYWJsZU9wdGlvbnMpO31kZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjt9cmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuTG9hZGFibGVDb250ZXh0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWNvbnN0IExvYWRhYmxlQ29udGV4dD0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dChudWxsKTtleHBvcnRzLkxvYWRhYmxlQ29udGV4dD1Mb2FkYWJsZUNvbnRleHQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe0xvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZT0nTG9hZGFibGVDb250ZXh0Jzt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2FkYWJsZS1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91c2VTdWJzY3JpcHRpb249cmVxdWlyZShcInVzZS1zdWJzY3JpcHRpb25cIik7dmFyIF9sb2FkYWJsZUNvbnRleHQ9cmVxdWlyZShcIi4vbG9hZGFibGUtY29udGV4dFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8qKlxuQGNvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50IEphbWVzIEt5bGUgPG1lQHRoZWphbWVza3lsZS5jb20+XG4gTUlUIExpY2Vuc2VcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG5XSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRVxuKi8gLy8gaHR0cHM6Ly9naXRodWIuY29tL2phbWllYnVpbGRzL3JlYWN0LWxvYWRhYmxlL2Jsb2IvdjUuNS4wL3NyYy9pbmRleC5qc1xuLy8gTW9kaWZpZWQgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHdlYnBhY2sgNCAvIE5leHQuanNcbmNvbnN0IEFMTF9JTklUSUFMSVpFUlM9W107Y29uc3QgUkVBRFlfSU5JVElBTElaRVJTPVtdO2xldCBpbml0aWFsaXplZD1mYWxzZTtmdW5jdGlvbiBsb2FkKGxvYWRlcil7bGV0IHByb21pc2U9bG9hZGVyKCk7bGV0IHN0YXRlPXtsb2FkaW5nOnRydWUsbG9hZGVkOm51bGwsZXJyb3I6bnVsbH07c3RhdGUucHJvbWlzZT1wcm9taXNlLnRoZW4obG9hZGVkPT57c3RhdGUubG9hZGluZz1mYWxzZTtzdGF0ZS5sb2FkZWQ9bG9hZGVkO3JldHVybiBsb2FkZWQ7fSkuY2F0Y2goZXJyPT57c3RhdGUubG9hZGluZz1mYWxzZTtzdGF0ZS5lcnJvcj1lcnI7dGhyb3cgZXJyO30pO3JldHVybiBzdGF0ZTt9ZnVuY3Rpb24gcmVzb2x2ZShvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iai5kZWZhdWx0Om9iajt9ZnVuY3Rpb24gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZEZuLG9wdGlvbnMpe2xldCBvcHRzPU9iamVjdC5hc3NpZ24oe2xvYWRlcjpudWxsLGxvYWRpbmc6bnVsbCxkZWxheToyMDAsdGltZW91dDpudWxsLHdlYnBhY2s6bnVsbCxtb2R1bGVzOm51bGx9LG9wdGlvbnMpO2xldCBzdWJzY3JpcHRpb249bnVsbDtmdW5jdGlvbiBpbml0KCl7aWYoIXN1YnNjcmlwdGlvbil7Y29uc3Qgc3ViPW5ldyBMb2FkYWJsZVN1YnNjcmlwdGlvbihsb2FkRm4sb3B0cyk7c3Vic2NyaXB0aW9uPXtnZXRDdXJyZW50VmFsdWU6c3ViLmdldEN1cnJlbnRWYWx1ZS5iaW5kKHN1Yiksc3Vic2NyaWJlOnN1Yi5zdWJzY3JpYmUuYmluZChzdWIpLHJldHJ5OnN1Yi5yZXRyeS5iaW5kKHN1YikscHJvbWlzZTpzdWIucHJvbWlzZS5iaW5kKHN1Yil9O31yZXR1cm4gc3Vic2NyaXB0aW9uLnByb21pc2UoKTt9Ly8gU2VydmVyIG9ubHlcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7QUxMX0lOSVRJQUxJWkVSUy5wdXNoKGluaXQpO30vLyBDbGllbnQgb25seVxuaWYoIWluaXRpYWxpemVkJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBvcHRzLndlYnBhY2s9PT0nZnVuY3Rpb24nKXtjb25zdCBtb2R1bGVJZHM9b3B0cy53ZWJwYWNrKCk7UkVBRFlfSU5JVElBTElaRVJTLnB1c2goaWRzPT57Zm9yKGNvbnN0IG1vZHVsZUlkIG9mIG1vZHVsZUlkcyl7aWYoaWRzLmluZGV4T2YobW9kdWxlSWQpIT09LTEpe3JldHVybiBpbml0KCk7fX19KTt9Y29uc3QgTG9hZGFibGVDb21wb25lbnQ9KHByb3BzLHJlZik9Pntpbml0KCk7Y29uc3QgY29udGV4dD1fcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9sb2FkYWJsZUNvbnRleHQuTG9hZGFibGVDb250ZXh0KTtjb25zdCBzdGF0ZT0oMCxfdXNlU3Vic2NyaXB0aW9uLnVzZVN1YnNjcmlwdGlvbikoc3Vic2NyaXB0aW9uKTtfcmVhY3QuZGVmYXVsdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwoKT0+KHtyZXRyeTpzdWJzY3JpcHRpb24ucmV0cnl9KSxbXSk7aWYoY29udGV4dCYmQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKXtvcHRzLm1vZHVsZXMuZm9yRWFjaChtb2R1bGVOYW1lPT57Y29udGV4dChtb2R1bGVOYW1lKTt9KTt9cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntpZihzdGF0ZS5sb2FkaW5nfHxzdGF0ZS5lcnJvcil7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQob3B0cy5sb2FkaW5nLHtpc0xvYWRpbmc6c3RhdGUubG9hZGluZyxwYXN0RGVsYXk6c3RhdGUucGFzdERlbGF5LHRpbWVkT3V0OnN0YXRlLnRpbWVkT3V0LGVycm9yOnN0YXRlLmVycm9yLHJldHJ5OnN1YnNjcmlwdGlvbi5yZXRyeX0pO31lbHNlIGlmKHN0YXRlLmxvYWRlZCl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVzb2x2ZShzdGF0ZS5sb2FkZWQpLHByb3BzKTt9ZWxzZXtyZXR1cm4gbnVsbDt9fSxbcHJvcHMsc3RhdGVdKTt9O0xvYWRhYmxlQ29tcG9uZW50LnByZWxvYWQ9KCk9PmluaXQoKTtMb2FkYWJsZUNvbXBvbmVudC5kaXNwbGF5TmFtZT0nTG9hZGFibGVDb21wb25lbnQnO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKExvYWRhYmxlQ29tcG9uZW50KTt9Y2xhc3MgTG9hZGFibGVTdWJzY3JpcHRpb257Y29uc3RydWN0b3IobG9hZEZuLG9wdHMpe3RoaXMuX2xvYWRGbj1sb2FkRm47dGhpcy5fb3B0cz1vcHRzO3RoaXMuX2NhbGxiYWNrcz1uZXcgU2V0KCk7dGhpcy5fZGVsYXk9bnVsbDt0aGlzLl90aW1lb3V0PW51bGw7dGhpcy5yZXRyeSgpO31wcm9taXNlKCl7cmV0dXJuIHRoaXMuX3Jlcy5wcm9taXNlO31yZXRyeSgpe3RoaXMuX2NsZWFyVGltZW91dHMoKTt0aGlzLl9yZXM9dGhpcy5fbG9hZEZuKHRoaXMuX29wdHMubG9hZGVyKTt0aGlzLl9zdGF0ZT17cGFzdERlbGF5OmZhbHNlLHRpbWVkT3V0OmZhbHNlfTtjb25zdHtfcmVzOnJlcyxfb3B0czpvcHRzfT10aGlzO2lmKHJlcy5sb2FkaW5nKXtpZih0eXBlb2Ygb3B0cy5kZWxheT09PSdudW1iZXInKXtpZihvcHRzLmRlbGF5PT09MCl7dGhpcy5fc3RhdGUucGFzdERlbGF5PXRydWU7fWVsc2V7dGhpcy5fZGVsYXk9c2V0VGltZW91dCgoKT0+e3RoaXMuX3VwZGF0ZSh7cGFzdERlbGF5OnRydWV9KTt9LG9wdHMuZGVsYXkpO319aWYodHlwZW9mIG9wdHMudGltZW91dD09PSdudW1iZXInKXt0aGlzLl90aW1lb3V0PXNldFRpbWVvdXQoKCk9Pnt0aGlzLl91cGRhdGUoe3RpbWVkT3V0OnRydWV9KTt9LG9wdHMudGltZW91dCk7fX10aGlzLl9yZXMucHJvbWlzZS50aGVuKCgpPT57dGhpcy5fdXBkYXRlKHt9KTt0aGlzLl9jbGVhclRpbWVvdXRzKCk7fSkuY2F0Y2goX2Vycj0+e3RoaXMuX3VwZGF0ZSh7fSk7dGhpcy5fY2xlYXJUaW1lb3V0cygpO30pO3RoaXMuX3VwZGF0ZSh7fSk7fV91cGRhdGUocGFydGlhbCl7dGhpcy5fc3RhdGU9ey4uLnRoaXMuX3N0YXRlLGVycm9yOnRoaXMuX3Jlcy5lcnJvcixsb2FkZWQ6dGhpcy5fcmVzLmxvYWRlZCxsb2FkaW5nOnRoaXMuX3Jlcy5sb2FkaW5nLC4uLnBhcnRpYWx9O3RoaXMuX2NhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrPT5jYWxsYmFjaygpKTt9X2NsZWFyVGltZW91dHMoKXtjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpO2NsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTt9Z2V0Q3VycmVudFZhbHVlKCl7cmV0dXJuIHRoaXMuX3N0YXRlO31zdWJzY3JpYmUoY2FsbGJhY2spe3RoaXMuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO3JldHVybigpPT57dGhpcy5fY2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFjayk7fTt9fWZ1bmN0aW9uIExvYWRhYmxlKG9wdHMpe3JldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkLG9wdHMpO31mdW5jdGlvbiBmbHVzaEluaXRpYWxpemVycyhpbml0aWFsaXplcnMsaWRzKXtsZXQgcHJvbWlzZXM9W107d2hpbGUoaW5pdGlhbGl6ZXJzLmxlbmd0aCl7bGV0IGluaXQ9aW5pdGlhbGl6ZXJzLnBvcCgpO3Byb21pc2VzLnB1c2goaW5pdChpZHMpKTt9cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpPT57aWYoaW5pdGlhbGl6ZXJzLmxlbmd0aCl7cmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycyxpZHMpO319KTt9TG9hZGFibGUucHJlbG9hZEFsbD0oKT0+e3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZUluaXRpYWxpemVycyxyZWplY3QpPT57Zmx1c2hJbml0aWFsaXplcnMoQUxMX0lOSVRJQUxJWkVSUykudGhlbihyZXNvbHZlSW5pdGlhbGl6ZXJzLHJlamVjdCk7fSk7fTtMb2FkYWJsZS5wcmVsb2FkUmVhZHk9KGlkcz1bXSk9PntyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZVByZWxvYWQ9Pntjb25zdCByZXM9KCk9Pntpbml0aWFsaXplZD10cnVlO3JldHVybiByZXNvbHZlUHJlbG9hZCgpO307Ly8gV2UgYWx3YXlzIHdpbGwgcmVzb2x2ZSwgZXJyb3JzIHNob3VsZCBiZSBoYW5kbGVkIHdpdGhpbiBsb2FkaW5nIFVJcy5cbmZsdXNoSW5pdGlhbGl6ZXJzKFJFQURZX0lOSVRJQUxJWkVSUyxpZHMpLnRoZW4ocmVzLHJlcyk7fSk7fTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3dpbmRvdy5fX05FWFRfUFJFTE9BRFJFQURZPUxvYWRhYmxlLnByZWxvYWRSZWFkeTt9dmFyIF9kZWZhdWx0PUxvYWRhYmxlO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvYWRhYmxlLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9keW5hbWljJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2dW5kZWZpbmVkXG4gKiB1c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vL1xuLy8gSW4gb3JkZXIgdG8gYXZvaWQgcmVtb3ZpbmcgYW5kIHJlLWFkZGluZyBzdWJzY3JpcHRpb25zIGVhY2ggdGltZSB0aGlzIGhvb2sgaXMgY2FsbGVkLFxuLy8gdGhlIHBhcmFtZXRlcnMgcGFzc2VkIHRvIHRoaXMgaG9vayBzaG91bGQgYmUgbWVtb2l6ZWQgaW4gc29tZSB3YXnigJNcbi8vIGVpdGhlciBieSB3cmFwcGluZyB0aGUgZW50aXJlIHBhcmFtcyBvYmplY3Qgd2l0aCB1c2VNZW1vKClcbi8vIG9yIGJ5IHdyYXBwaW5nIHRoZSBpbmRpdmlkdWFsIGNhbGxiYWNrcyB3aXRoIHVzZUNhbGxiYWNrKCkuXG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihfcmVmKSB7XG4gIHZhciBnZXRDdXJyZW50VmFsdWUgPSBfcmVmLmdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZSA9IF9yZWYuc3Vic2NyaWJlO1xuXG4gIC8vIFJlYWQgdGhlIGN1cnJlbnQgdmFsdWUgZnJvbSBvdXIgc3Vic2NyaXB0aW9uLlxuICAvLyBXaGVuIHRoaXMgdmFsdWUgY2hhbmdlcywgd2UnbGwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggUmVhY3QuXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGFsc28gc3RvcmUgdGhlIGhvb2sgcGFyYW1zIHNvIHRoYXQgd2UgY2FuIGNoZWNrIGZvciBzdGFsZW5lc3MuXG4gIC8vIChTZWUgdGhlIGNvbW1lbnQgaW4gY2hlY2tGb3JVcGRhdGVzKCkgYmVsb3cgZm9yIG1vcmUgaW5mby4pXG4gIHZhciBfdXNlU3RhdGUgPSByZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogZ2V0Q3VycmVudFZhbHVlKClcbiAgICB9O1xuICB9KSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHZhbHVlVG9SZXR1cm4gPSBzdGF0ZS52YWx1ZTsgLy8gSWYgcGFyYW1ldGVycyBoYXZlIGNoYW5nZWQgc2luY2Ugb3VyIGxhc3QgcmVuZGVyLCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBpdHMgY3VycmVudCB2YWx1ZS5cblxuICBpZiAoc3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgc3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAvLyBJZiB0aGUgc3Vic2NyaXB0aW9uIGhhcyBiZWVuIHVwZGF0ZWQsIHdlJ2xsIHNjaGVkdWxlIGFub3RoZXIgdXBkYXRlIHdpdGggUmVhY3QuXG4gICAgLy8gUmVhY3Qgd2lsbCBwcm9jZXNzIHRoaXMgdXBkYXRlIGltbWVkaWF0ZWx5LCBzbyB0aGUgb2xkIHN1YnNjcmlwdGlvbiB2YWx1ZSB3b24ndCBiZSBjb21taXR0ZWQuXG4gICAgLy8gSXQgaXMgc3RpbGwgbmljZSB0byBhdm9pZCByZXR1cm5pbmcgYSBtaXNtYXRjaGVkIHZhbHVlIHRob3VnaCwgc28gbGV0J3Mgb3ZlcnJpZGUgdGhlIHJldHVybiB2YWx1ZS5cbiAgICB2YWx1ZVRvUmV0dXJuID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVRvUmV0dXJuXG4gICAgfSk7XG4gIH0gLy8gRGlzcGxheSB0aGUgY3VycmVudCB2YWx1ZSBmb3IgdGhpcyBob29rIGluIFJlYWN0IERldlRvb2xzLlxuXG5cbiAgcmVhY3QudXNlRGVidWdWYWx1ZSh2YWx1ZVRvUmV0dXJuKTsgLy8gSXQgaXMgaW1wb3J0YW50IG5vdCB0byBzdWJzY3JpYmUgd2hpbGUgcmVuZGVyaW5nIGJlY2F1c2UgdGhpcyBjYW4gbGVhZCB0byBtZW1vcnkgbGVha3MuXG4gIC8vIChMZWFybiBtb3JlIGF0IHJlYWN0anMub3JnL2RvY3Mvc3RyaWN0LW1vZGUuaHRtbCNkZXRlY3RpbmctdW5leHBlY3RlZC1zaWRlLWVmZmVjdHMpXG4gIC8vIEluc3RlYWQsIHdlIHdhaXQgdW50aWwgdGhlIGNvbW1pdCBwaGFzZSB0byBhdHRhY2ggb3VyIGhhbmRsZXIuXG4gIC8vXG4gIC8vIFdlIGludGVudGlvbmFsbHkgdXNlIGEgcGFzc2l2ZSBlZmZlY3QgKHVzZUVmZmVjdCkgcmF0aGVyIHRoYW4gYSBzeW5jaHJvbm91cyBvbmUgKHVzZUxheW91dEVmZmVjdClcbiAgLy8gc28gdGhhdCB3ZSBkb24ndCBzdHJldGNoIHRoZSBjb21taXQgcGhhc2UuXG4gIC8vIFRoaXMgYWxzbyBoYXMgYW4gYWRkZWQgYmVuZWZpdCB3aGVuIG11bHRpcGxlIGNvbXBvbmVudHMgYXJlIHN1YnNjcmliZWQgdG8gdGhlIHNhbWUgc291cmNlOlxuICAvLyBJdCBhbGxvd3MgZWFjaCBvZiB0aGUgZXZlbnQgaGFuZGxlcnMgdG8gc2FmZWx5IHNjaGVkdWxlIHdvcmsgd2l0aG91dCBwb3RlbnRpYWxseSByZW1vdmluZyBhbiBhbm90aGVyIGhhbmRsZXIuXG4gIC8vIChMZWFybiBtb3JlIGF0IGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9rMHl2cjU5NzBvKVxuXG4gIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpZFVuc3Vic2NyaWJlID0gZmFsc2U7XG5cbiAgICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGV2ZW4gYWZ0ZXIgYmVpbmcgdW5zdWJzY3JpYmVkLFxuICAgICAgLy8gaWYgaXQncyByZW1vdmVkIGFzIGEgcmVzdWx0IG9mIGEgc3Vic2NyaXB0aW9uIGV2ZW50L3VwZGF0ZS5cbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgUmVhY3Qgd2lsbCBsb2cgYSBERVYgd2FybmluZyBhYm91dCBhbiB1cGRhdGUgZnJvbSBhbiB1bm1vdW50ZWQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgY2FuIGF2b2lkIHRyaWdnZXJpbmcgdGhhdCB3YXJuaW5nIHdpdGggdGhpcyBjaGVjay5cbiAgICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFdlIHVzZSBhIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb24gdG8gYXZvaWQgc2NoZWR1bGluZyB3b3JrIGZvciBhIHN0YWxlIHNvdXJjZS5cbiAgICAgIC8vIEhvd2V2ZXIgaXQncyBpbXBvcnRhbnQgdG8gZWFnZXJseSByZWFkIHRoZSBjdXJyZW50bHkgdmFsdWUsXG4gICAgICAvLyBzbyB0aGF0IGFsbCBzY2hlZHVsZWQgd29yayBzaGFyZXMgdGhlIHNhbWUgdmFsdWUgKGluIHRoZSBldmVudCBvZiBtdWx0aXBsZSBzdWJzY3JpcHRpb25zKS5cbiAgICAgIC8vIFRoaXMgYXZvaWRzIHZpc3VhbCBcInRlYXJpbmdcIiB3aGVuIGEgbXV0YXRpb24gaGFwcGVucyBkdXJpbmcgYSAoY29uY3VycmVudCkgcmVuZGVyLlxuXG5cbiAgICAgIHZhciB2YWx1ZSA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAvLyBJZ25vcmUgdmFsdWVzIGZyb20gc3RhbGUgc291cmNlcyFcbiAgICAgICAgLy8gU2luY2Ugd2Ugc3Vic2NyaWJlIGFuIHVuc3Vic2NyaWJlIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBmb3IgYSBzdGFsZSAocHJldmlvdXMpIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBhdm9pZHMgc2NoZWR1bGluZyBhbiB1cGRhdGUgZm9yIHRoYXQgc3RhbGUgc3Vic2NyaXB0aW9uLlxuICAgICAgICBpZiAocHJldlN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHByZXZTdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH0gLy8gU29tZSBzdWJzY3JpcHRpb25zIHdpbGwgYXV0by1pbnZva2UgdGhlIGhhbmRsZXIsIGV2ZW4gaWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLlxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQsIG5vIHVwZGF0ZSBpcyBuZWVkZWQuXG4gICAgICAgIC8vIFJldHVybiBzdGF0ZSBhcy1pcyBzbyBSZWFjdCBjYW4gYmFpbCBvdXQgYW5kIGF2b2lkIGFuIHVubmVjZXNzYXJ5IHJlbmRlci5cblxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGNoZWNrRm9yVXBkYXRlcyk7IC8vIEJlY2F1c2Ugd2UncmUgc3Vic2NyaWJpbmcgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgYW4gdXBkYXRlIGhhcyBvY2N1cnJlZCBiZXR3ZWVuIHJlbmRlciBhbmQgb3VyIGVmZmVjdCBoYW5kbGVyLlxuICAgIC8vIENoZWNrIGZvciB0aGlzIGFuZCBzY2hlZHVsZSBhbiB1cGRhdGUgaWYgd29yayBoYXMgb2NjdXJyZWQuXG5cbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbZ2V0Q3VycmVudFZhbHVlLCBzdWJzY3JpYmVdKTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGZvciBvdXIgY2FsbGVyIHRvIHVzZSB3aGlsZSByZW5kZXJpbmcuXG5cbiAgcmV0dXJuIHZhbHVlVG9SZXR1cm47XG59XG5cbmV4cG9ydHMudXNlU3Vic2NyaXB0aW9uID0gdXNlU3Vic2NyaXB0aW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==