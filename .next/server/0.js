exports.ids = [0];
exports.modules = {

/***/ "./components/Graph/plotly.js":
/*!************************************!*\
  !*** ./components/Graph/plotly.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ "react-plotly.js");
/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Graph/plotly.js";




var Plotly = function Plotly(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.data != null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    data: [{
      type: 'bar',
      x: props.data[0],
      y: props.data[1]
    }],
    layout: {
      width: 500,
      height: 500,
      title: 'AST 2009'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Plotly);

/***/ })

};;
//# sourceMappingURL=0.js.map