webpackHotUpdate(1,{

/***/ "./components/Airline/AirlineDashboard/Cards/AirlineDashboardCard.js":
/*!***************************************************************************!*\
  !*** ./components/Airline/AirlineDashboard/Cards/AirlineDashboardCard.js ***!
  \***************************************************************************/
/*! exports provided: AirlineDashboardCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineDashboardCard", function() { return AirlineDashboardCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/style.css */ "./components/Airline/AirlineDashboard/Layout/style.css");
/* harmony import */ var _Layout_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vis */ "./node_modules/react-vis/es/index.js");
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Airline/AirlineDashboard/Cards/AirlineDashboardCard.js";





var airline = [{
  key: 1,
  text: 'THA',
  value: 'THA'
}, {
  key: 2,
  text: 'BKP',
  value: 'BKP'
}, {
  key: 3,
  text: 'THD',
  value: 'THD'
}];
var defaultY = [{
  key: 1,
  text: 'No. of Route ',
  value: 'NoRoute'
}, {
  key: 2,
  text: 'Seat',
  value: 'Seat'
}, {
  key: 3,
  text: 'Pax',
  value: 'Pax'
}, {
  key: 4,
  text: 'Load Factor ',
  value: 'Load Factor'
}, {
  key: 5,
  text: 'RPK',
  value: 'RPK'
}, {
  key: 6,
  text: 'Frequency',
  value: 'Frequency'
}];
var DefaultBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../../Graph/defaultBar */ "./components/Graph/defaultBar.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../../Graph/defaultBar */ "./components/Graph/defaultBar.js")];
    },
    modules: ['../../../Graph/defaultBar']
  }
});

var AirlineDashboardCard = function AirlineDashboardCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 2,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    defaultValue: "THA",
    options: airline,
    name: "airline",
    placeholder: "Airline",
    selection: true,
    fluid: true,
    onChange: props.handleDropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 2,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    defaultValue: "Pax",
    options: defaultY,
    name: "defaultY",
    placeholder: "Yaxis",
    selection: true,
    fluid: true,
    onChange: props.handleDropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    style: {
      paddingTop: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, props.showdefault ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "header-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, props.state.defaultY)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    style: {
      paddingBottom: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, props.state.showdefault ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultBar, {
    data: props.state.defaultGraph,
    xTitle: "Year",
    yTitle: props.defaultY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }) : null)), props.state.showdefault ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    style: {
      paddingTop: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "text-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Year"))) : null));
};



/***/ })

})
//# sourceMappingURL=1.9aee47e43aeabf9ee60c.hot-update.js.map