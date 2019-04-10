exports.ids = [0];
exports.modules = {

/***/ "./components/Airline/AirlineDashboard/Cards/AirlineGraphCard.js":
/*!***********************************************************************!*\
  !*** ./components/Airline/AirlineDashboard/Cards/AirlineGraphCard.js ***!
  \***********************************************************************/
/*! exports provided: AirlineGraphCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineGraphCard", function() { return AirlineGraphCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/style.css */ "./components/Airline/AirlineDashboard/Layout/style.css");
/* harmony import */ var _Layout_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vis */ "react-vis");
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_vis__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Airline/AirlineDashboard/Cards/AirlineGraphCard.js";





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
  value: 'Route'
}, {
  key: 2,
  text: 'Seat',
  value: 'Seat'
}, {
  key: 3,
  text: 'Pax',
  value: 'Pax'
}, // { key: 4, text: 'Load Factor ', value: 'Load Factor' },
// { key: 5, text: 'RPK', value: 'RPK' },
{
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

var AirlineGraphCard = function AirlineGraphCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 2,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 2,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
      lineNumber: 55
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    style: {
      paddingTop: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, props.state.showdefault ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "header-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, props.state.defaultY)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    style: {
      paddingBottom: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, props.state.showdefault ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultBar, {
    data: props.state.defaultGraph,
    xTitle: "Year",
    yTitle: props.defaultY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }) : null)), props.state.showdefault ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    style: {
      paddingTop: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "text-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Year"))) : null));
};



/***/ }),

/***/ "./components/Airline/AirlineDashboard/Cards/AirlineStatisticCard.js":
/*!***************************************************************************!*\
  !*** ./components/Airline/AirlineDashboard/Cards/AirlineStatisticCard.js ***!
  \***************************************************************************/
/*! exports provided: AirlineStatisticCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineStatisticCard", function() { return AirlineStatisticCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Airline/AirlineDashboard/Cards/AirlineStatisticCard.js";


var AirlineStatisticCard = function AirlineStatisticCard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Statistic "));
};



/***/ }),

/***/ "./components/Airline/AirlineDashboard/Cards/index.js":
/*!************************************************************!*\
  !*** ./components/Airline/AirlineDashboard/Cards/index.js ***!
  \************************************************************/
/*! exports provided: AirlineGraphCard, AirlineStatisticCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AirlineGraphCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AirlineGraphCard */ "./components/Airline/AirlineDashboard/Cards/AirlineGraphCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AirlineGraphCard", function() { return _AirlineGraphCard__WEBPACK_IMPORTED_MODULE_0__["AirlineGraphCard"]; });

/* harmony import */ var _AirlineStatisticCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AirlineStatisticCard */ "./components/Airline/AirlineDashboard/Cards/AirlineStatisticCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AirlineStatisticCard", function() { return _AirlineStatisticCard__WEBPACK_IMPORTED_MODULE_1__["AirlineStatisticCard"]; });




/***/ }),

/***/ "./components/Airline/AirlineDashboard/Layout/AirlineDashboardLayout.js":
/*!******************************************************************************!*\
  !*** ./components/Airline/AirlineDashboard/Layout/AirlineDashboardLayout.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cards */ "./components/Airline/AirlineDashboard/Cards/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Airline/AirlineDashboard/Layout/AirlineDashboardLayout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var AirlineDashboardLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(AirlineDashboardLayout, _Component);

  function AirlineDashboardLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AirlineDashboardLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AirlineDashboardLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      y2017: null,
      airline: 'THA',
      defaultY: 'Pax',
      data: null,
      defaultY2017: null,
      defaultGraphX: ['2013', '2014', '2015', '2016', '2017'],
      defaultGraphY: [],
      showdefault: false,
      defaultGraph: [{
        x: '2013',
        y: 0
      }, {
        x: '2014',
        y: 0
      }, {
        x: '2015',
        y: 0
      }, {
        x: '2016',
        y: 0
      }, {
        x: '2017',
        y: 0
      }],
      query: 'Test query',
      load: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.getDataYearPaxByAirline(_this.state.airline);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDropdown", function (e, data) {
      _this.setState(_defineProperty({}, data.name, data.value));

      _this.forceUpdate();

      if (data.name === 'defaultY') {
        _this.filterDefaultGraph(_this.state.airline, data.value);
      }

      if (data.name === 'airline' && _this.state.defaultY !== null) {
        _this.filterDefaultGraph(data.value, _this.state.defaultY);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterDefaultGraph", function (airline, status) {
      _this.state.showdefault = true;
      _this.state.load = true;

      if (status === 'Pax') {
        _this.getDataYearPaxByAirline(airline);
      }

      if (status === 'Frequency') {
        _this.getDataYearFrequencyByAirline(airline);
      }

      if (status === 'Seat') {
        _this.getDataYearSeatByAirline(airline);
      }

      if (status === 'Route') {
        _this.getDataYearRouteByAirline(airline);
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDataYearPaxByAirline", function (airline) {
      console.log('Get Airport!');
      fetch('http://localhost:4000/YearPaxByAirline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          airline: airline
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);

        if (data) {
          _this.loadFinished(data);
        }

        _this.setDefaultGraphData(data.data);

        _this.forceUpdate();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDataYearFrequencyByAirline", function (airline) {
      fetch('http://localhost:4000/YearFrequencyByAirline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          airline: airline
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);

        if (data) {
          _this.loadFinished(data);
        }

        _this.setDefaultGraphData(data.data);

        _this.forceUpdate();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDataYearSeatByAirline", function (airline) {
      fetch('http://localhost:4000/YearSeatByAirline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          airline: airline
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);

        if (data) {
          _this.loadFinished(data);
        }

        _this.setDefaultGraphData(data.data);

        _this.forceUpdate();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDataYearRouteByAirline", function (airline) {
      fetch('http://localhost:4000/YearRouteByAirline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          airline: airline
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);

        if (data) {
          _this.loadFinished(data);
        }

        _this.setDefaultGraphData(data.data);

        _this.forceUpdate();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadFinished", function () {
      _this.setState({
        load: false
      });

      _this.forceUpdate;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setDefaultGraphData", function (data) {
      for (var i = 0; i < data.length; i++) {
        _this.state.defaultGraph[data.length - 1 - i].y = data[i].Results;
        console.log(data[i].Results);
      }

      _this.setState({
        showdefault: true
      });
    });

    return _this;
  }

  _createClass(AirlineDashboardLayout, [{
    key: "render",
    value: function render() {
      console.log(this.state.defaultGraph);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards__WEBPACK_IMPORTED_MODULE_1__["AirlineStatisticCard"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards__WEBPACK_IMPORTED_MODULE_1__["AirlineGraphCard"], {
        handleDropdown: this.handleDropdown,
        state: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
        active: this.state.load,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], {
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Preparing Data")));
    }
  }]);

  return AirlineDashboardLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AirlineDashboardLayout);

/***/ }),

/***/ "./components/Airline/AirlineDashboard/Layout/style.css":
/*!**************************************************************!*\
  !*** ./components/Airline/AirlineDashboard/Layout/style.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=0.js.map