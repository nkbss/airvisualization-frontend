(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/Graph/routeAirlineBar.js":
/*!*********************************************!*\
  !*** ./components/Graph/routeAirlineBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-vis */ "./node_modules/react-vis/es/index.js");
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Graph/routeAirlineBar.js";



var RouteAirlineBar = function RouteAirlineBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["XYPlot"] //   height={600}
  //   width={600}
  //   margin={{ left: 80, top: 10, bottom: 40 }}
  , {
    xType: "ordinal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalGridLines"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["HorizontalGridLines"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    style: {
      text: {
        stroke: 'none',
        fill: '#6b6b76',
        fontWeight: 600
      },
      ticks: {
        stroke: '#ADDDE1' // title: { fontSize: '20px', tranform: 'translate(100px,100px)' }

      }
    },
    position: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
    title: props.yTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalBarSeries"], {
    data: props.data,
    barWidth: 0.6,
    onValueClick: function onValueClick(datapoint, _ref) {
      var index = _ref.index;
      props.handleYear(datapoint.x);
      props.getRouteAirline(datapoint.x, props.airline);
      console.log(datapoint.x);
      console.log(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RouteAirlineBar);

/***/ })

}]);
//# sourceMappingURL=2.js.map