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
/* harmony import */ var _Graph_RouteAirlineBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Graph/RouteAirlineBar */ "./components/Graph/RouteAirlineBar.js");
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
}); // const RouteAirlineBar = dynamic(
//   () => import('../../../Graph/RouteAirlineBar'),
//   {
//     ssr: false
//   }
// )

var AirlineGraphCard = function AirlineGraphCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 2,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    type: "airline",
    defaultValue: "THA",
    options: airline,
    name: "airline",
    placeholder: "Airline",
    selection: true,
    fluid: true,
    onChange: props.handleDropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 2,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
      lineNumber: 65
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    style: {
      paddingTop: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, props.state.showdefault ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "header-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, props.state.defaultY)) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    style: {
      paddingBottom: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, props.state.showdefault ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultBar, {
    airline: props.state.airline,
    getRouteAirline: props.getRouteAirline,
    handleYear: props.handleYear,
    data: props.state.defaultGraph,
    xTitle: "Year",
    yTitle: props.defaultY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }) : null)), props.state.routestatus ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "header-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Total of route ", props.state.year, " by ", props.state.airline, ' ', "Airline"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Graph_RouteAirlineBar__WEBPACK_IMPORTED_MODULE_5__["RouteAirlineBar"], {
    data: props.state.routeAirlineData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })))) : null));
};



/***/ }),

/***/ "./components/Airline/AirlineDashboard/Cards/index.js":
/*!************************************************************!*\
  !*** ./components/Airline/AirlineDashboard/Cards/index.js ***!
  \************************************************************/
/*! exports provided: AirlineGraphCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AirlineGraphCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AirlineGraphCard */ "./components/Airline/AirlineDashboard/Cards/AirlineGraphCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AirlineGraphCard", function() { return _AirlineGraphCard__WEBPACK_IMPORTED_MODULE_0__["AirlineGraphCard"]; });



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
        y: 0,
        opacity: 1
      }, {
        x: '2014',
        y: 0,
        opacity: 1
      }, {
        x: '2015',
        y: 0,
        opacity: 1
      }, {
        x: '2016',
        y: 0,
        opacity: 1
      }, {
        x: '2017',
        y: 0,
        opacity: 1
      }],
      query: 'Test query',
      load: true,
      year: null,
      routeAirlineData: [{
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: '',
        y: 0
      }, {
        x: 'Other',
        y: 0
      }],
      routestatus: false,
      routeload: false,
      crosshair: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.getPax(_this.state.airline);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleYear", function (year) {
      _this.setState({
        year: year
      });

      _this.setOpacity(_this.state.defaultGraph);

      _this.forceUpdate();
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

      if (data.type === 'airline') {
        if (_this.state.year != null) {
          _this.getRouteAirline(_this.state.year, data.value);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterDefaultGraph", function (airline, status) {
      _this.state.showdefault = true;
      _this.state.load = true;

      if (status === 'Pax') {
        _this.getPax(airline);
      }

      if (status === 'Frequency') {
        _this.getFrequency(airline);
      }

      if (status === 'Seat') {
        _this.getSeat(airline);
      }

      if (status === 'Route') {
        _this.getRoute(airline);
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPax", function (airline) {
      console.log('Get Airport!');
      fetch('http://localhost:4000/getPax', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          airport: '%',
          airline: airline,
          flight: '%',
          aircraft: '%'
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFrequency", function (airline) {
      fetch('http://localhost:4000/getFrequency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          airport: '%',
          airline: airline,
          flight: '%',
          aircraft: '%'
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSeat", function (airline) {
      fetch('http://localhost:4000/getSeat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          airport: '%',
          airline: airline,
          flight: '%',
          aircraft: '%'
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRoute", function (airline) {
      fetch('http://localhost:4000/getRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          airport: '%',
          airline: airline,
          flight: '%',
          aircraft: '%'
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRouteAirline", function (year, airline) {
      _this.setState({
        routestatus: false,
        routeload: true
      });

      fetch('http://localhost:4000/getRouteAirline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          year: year,
          airline: airline
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data); // this.setRouteAirlineGraph(data.data)

        if (data) {
          _this.setRouteAirlineGraph(data.data);

          _this.setState({
            routestatus: true,
            routeload: false
          }); // this.loadFinished(data)

        } // this.setDefaultGraphData(data.data)
        // this.forceUpdate()

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
        _this.state.defaultGraph[i].y = data[i].Results;
        console.log(data[i].Results);
      }

      _this.setState({
        showdefault: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setRouteAirlineGraph", function (data) {
      var sum = 0;

      for (var i = 0; i < data.length; i++) {
        if (i < 20) {
          _this.state.routeAirlineData[i].x = data[i].AIRPORT;
          _this.state.routeAirlineData[i].y = data[i].Results;
        } else {
          sum = sum + data[i].Results;
        }
      }

      _this.state.routeAirlineData[20].y = sum;

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setOpacity", function (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].opacity = 1;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inCrosshair", function (data) {
      _this.state.crosshair = data;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "leaveCrosshair", function () {
      _this.setState({
        crosshair: null
      });
    });

    return _this;
  }

  _createClass(AirlineDashboardLayout, [{
    key: "render",
    value: function render() {
      console.log(this.state.routeAirlineData);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards__WEBPACK_IMPORTED_MODULE_1__["AirlineGraphCard"], {
        handleDropdown: this.handleDropdown,
        handleYear: this.handleYear,
        getRouteAirline: this.getRouteAirline,
        state: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
        active: this.state.load,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], {
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "Preparing Data")), this.state.load ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
        active: this.state.routeload,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], {
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Get Route!")));
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



/***/ }),

/***/ "./components/Graph/RouteAirlineBar.js":
/*!*********************************************!*\
  !*** ./components/Graph/RouteAirlineBar.js ***!
  \*********************************************/
/*! exports provided: RouteAirlineBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAirlineBar", function() { return RouteAirlineBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-vis */ "react-vis");
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vis__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Graph/RouteAirlineBar.js";

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




var RouteAirlineBar =
/*#__PURE__*/
function (_Component) {
  _inherits(RouteAirlineBar, _Component);

  function RouteAirlineBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteAirlineBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteAirlineBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      crosshairValues: null
    });

    return _this;
  }

  _createClass(RouteAirlineBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["XYPlot"], {
        height: 400,
        width: 900,
        margin: {
          left: 80,
          top: 10,
          bottom: 40
        },
        xType: "ordinal",
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            selectedPointId: null,
            crosshairValues: null
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalGridLines"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["HorizontalGridLines"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
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
            stroke: '#ADDDE1'
          }
        },
        position: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalBarSeries"], {
        color: "#28c1b2",
        data: this.props.data,
        onNearestX: function onNearestX(value, _ref) {
          var index = _ref.index;
          return _this2.setState({
            selectedPointId: index,
            crosshairValues: [value]
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), this.state.crosshairValues && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["Crosshair"], {
        values: this.state.crosshairValues,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '80px',
          color: 'grey',
          fontSize: '14px',
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "X: ", this.state.crosshairValues[0].x), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Y: ", this.state.crosshairValues[0].y))));
    }
  }]);

  return RouteAirlineBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // const RouteAirlineBar = props => {
//   return (
//   )
// }




/***/ })

};;
//# sourceMappingURL=0.js.map