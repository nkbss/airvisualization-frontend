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
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../../Graph/defaultBar */ "./components/Graph/defaultBar.js"));
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
    type: "airline",
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
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "header-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Total of route ", props.state.year, " by ", props.state.airline, ' ', "Airline"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Graph_RouteAirlineBar__WEBPACK_IMPORTED_MODULE_5__["RouteAirlineBar"], {
    data: props.state.routeAirlineData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })))) : null));
};



/***/ }),

/***/ "./components/Airline/AirlineDashboard/Cards/AirlineMapCard.js":
/*!*********************************************************************!*\
  !*** ./components/Airline/AirlineDashboard/Cards/AirlineMapCard.js ***!
  \*********************************************************************/
/*! exports provided: AirlineMapCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineMapCard", function() { return AirlineMapCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Airline/AirlineDashboard/Cards/AirlineMapCard.js";

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




var randomColor = __webpack_require__(/*! randomcolor */ "randomcolor");

var BubbleMap = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../../Datamaps/DataMaps */ "./components/Datamaps/DataMaps.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../../Datamaps/DataMaps */ "./components/Datamaps/DataMaps.js")];
    },
    modules: ['../../../Datamaps/DataMaps']
  }
});

var AirlineMapCard =
/*#__PURE__*/
function (_Component) {
  _inherits(AirlineMapCard, _Component);

  function AirlineMapCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AirlineMapCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AirlineMapCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: null
    });

    return _this;
  }

  _createClass(AirlineMapCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.props.state.mapstatus && this.props.state.routestatus ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: '100%',
          height: '600px',
          paddingTop: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BubbleMap, {
        scope: "world",
        geographyConfig: {
          popupOnHover: false,
          highlightOnHover: false
        },
        fills: {
          defaultFill: '#abdda4',
          f1: '#f24d4d',
          f2: '#f1684d',
          f3: '#f0d84c',
          f4: '#85ef4c',
          f5: '#4cefe6',
          f6: '#4c61ef',
          f7: '#954cef',
          f8: '#ec4cef'
        },
        bubbles: this.props.data,
        bubbleOptions: {
          popupTemplate: function popupTemplate(geo, data) {
            return "<div class=\"hoverinfo\">\n                             <lable>".concat(data.name, "</lable><br> \n                             <lable>Results : ").concat(data.result, "</lable><br> \n                             <lable>Country : ").concat(data.country, "</lable><br> ");
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })) : null);
    }
  }]);

  return AirlineMapCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Airline/AirlineDashboard/Cards/index.js":
/*!************************************************************!*\
  !*** ./components/Airline/AirlineDashboard/Cards/index.js ***!
  \************************************************************/
/*! exports provided: AirlineGraphCard, AirlineMapCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AirlineGraphCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AirlineGraphCard */ "./components/Airline/AirlineDashboard/Cards/AirlineGraphCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AirlineGraphCard", function() { return _AirlineGraphCard__WEBPACK_IMPORTED_MODULE_0__["AirlineGraphCard"]; });

/* harmony import */ var _AirlineMapCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AirlineMapCard */ "./components/Airline/AirlineDashboard/Cards/AirlineMapCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AirlineMapCard", function() { return _AirlineMapCard__WEBPACK_IMPORTED_MODULE_1__["AirlineMapCard"]; });




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
      mapyear: '2017',
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
      bubblemap: [],
      map: false,
      mode: true,
      graph: true,
      mapload: false,
      mapstatus: false,
      type: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.state.type = localStorage.getItem('STATE');

      _this.forceUpdate();

      _this.getPax(_this.state.airline);

      _this.getPaxBubbleMap(_this.state.mapyear, _this.state.airline);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleYear", function (year) {
      _this.setState({
        year: year,
        mapyear: year
      });

      _this.setOpacity(_this.state.defaultGraph);

      if (_this.state.defaultY === 'Pax') {
        _this.getPaxBubbleMap(year, _this.state.airline);
      } else if (_this.state.defaultY === 'Frequency') {
        _this.getFrequencyBubbleMap(year, _this.state.airline);
      } else if (_this.state.defaultY === 'Seat') {
        _this.getSeatBubbleMap(year, _this.state.airline);
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "activeMode", function (type) {
      if (type === 'graph') {
        _this.state.graph = true;
        _this.state.map = false;
      } else if (type === 'map') {
        _this.state.map = true;
        _this.state.graph = false;
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDropdown", function (e, data) {
      _this.setState(_defineProperty({}, data.name, data.value));

      _this.forceUpdate();

      if (data.name === 'defaultY') {
        if (_this.state.year === null) {
          _this.filterDefaultGraph(_this.state.airline, data.value, _this.state.year);
        } else {
          _this.filterDefaultGraph(_this.state.airline, data.value, _this.state.mapyear);
        }
      }

      if (data.name === 'airline' && _this.state.defaultY !== null) {
        _this.filterDefaultGraph(data.value, _this.state.defaultY, _this.state.year);
      }

      if (data.name === 'year') {
        _this.filterDefaultGraph(_this.state.airline, _this.state.defaultY, data.value);

        _this.getRouteAirline(data.value, _this.state.airline);

        _this.handleYear(data.value);
      }

      if (data.type === 'airline') {
        if (_this.state.year != null) {
          _this.getRouteAirline(_this.state.year, data.value);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterDefaultGraph", function (airline, status, year) {
      console.log(status);
      _this.state.showdefault = true;
      _this.state.load = true;

      if (status === 'Pax') {
        _this.getPax(airline);

        _this.getPaxBubbleMap(year, airline);
      }

      if (status === 'Frequency') {
        _this.getFrequency(airline);

        _this.getFrequencyBubbleMap(year, airline);
      }

      if (status === 'Seat') {
        _this.getSeat(airline);

        _this.getSeatBubbleMap(year, airline);
      }

      if (status === 'Route') {
        _this.getRoute(airline);
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPax", function (airline) {
      console.log(_this.state.type);
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
          aircraft: '%',
          type: _this.state.type
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
          aircraft: '%',
          type: _this.state.type
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
          aircraft: '%',
          type: _this.state.type
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
          aircraft: '%',
          type: _this.state.type
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
          airline: airline,
          type: _this.state.type
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);

        if (data) {
          _this.setRouteAirlineGraph(data.data);

          _this.setState({
            routestatus: true,
            routeload: false
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFrequencyBubbleMap", function (year, airline) {
      _this.setState({
        mapstatus: false,
        mapload: true
      });

      console.log('get freq bb');
      fetch('http://localhost:4000/getFrequencyBubbleMap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          year: year,
          airline: airline,
          type: _this.state.type
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);

        if (data) {
          _this.setBubbleMap(data.data); // this.setRouteAirlineGraph(data.data)
          // this.setState({ routestatus: true, routeload: false })
          // this.loadFinished(data)

        } // this.setDefaultGraphData(data.data)
        // this.forceUpdate()

      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPaxBubbleMap", function (year, airline) {
      console.log(_this.state.type);
      console.log('get pax bb');

      _this.setState({
        mapstatus: false,
        mapload: true
      });

      fetch('http://localhost:4000/getPaxBubbleMap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          year: year,
          airline: airline,
          type: _this.state.type
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data); // this.setRouteAirlineGraph(data.data)

        if (data) {
          _this.setBubbleMap(data.data); // this.setRouteAirlineGraph(data.data)
          // this.setState({ routestatus: true, routeload: false })
          // this.loadFinished(data)

        } // this.setDefaultGraphData(data.data)
        // this.forceUpdate()

      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSeatBubbleMap", function (year, airline) {
      console.log('get seat bb');

      _this.setState({
        mapstatus: false,
        mapload: true
      });

      fetch('http://localhost:4000/getSeatBubbleMap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain'
        },
        body: JSON.stringify({
          year: year,
          airline: airline,
          type: _this.state.type
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data); // this.setRouteAirlineGraph(data.data)

        if (data) {
          _this.setBubbleMap(data.data); // this.setRouteAirlineGraph(data.data)
          // this.setState({ routestatus: true, routeload: false })
          // this.loadFinished(data)

        } // this.setDefaultGraphData(data.data)
        // this.forceUpdate()

      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setBubbleMap", function (data) {
      var fill = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'];

      for (var i = 0; i < data.length; i++) {
        var randomfill = Math.floor(Math.random() * fill.length);
        var radius = void 0;

        if (_this.state.type === '5') {
          radius = data[i].Results / data[0].Results * 20;
        } else {
          radius = data[i].Results / data[0].Results * 50;
        }

        _this.state.bubblemap.push({
          name: data[i].AIRPORT,
          result: data[i].Results,
          radius: radius,
          country: data[i].Name,
          latitude: data[i].Latitude,
          longitude: data[i].Longitude,
          fillKey: fill[randomfill]
        });
      }

      _this.setState({
        mapstatus: true,
        mapload: false
      });

      _this.forceUpdate();
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
      // let sum = 0
      // for (let i = 0; i < data.length; i++) {
      //   if (i < 20) {
      //     this.state.routeAirlineData[i].x = data[i].AIRPORT
      //     this.state.routeAirlineData[i].y = data[i].Results
      //   } else {
      //     sum = sum + data[i].Results
      //   }
      // }
      // this.state.routeAirlineData[20].y = sum
      _this.state.routeAirlineData = [];
      console.log(data.length);
      var sum = 0;

      if (data.length > 20) {
        for (var i = 0; i < data.length; i++) {
          if (i < 20) {
            _this.state.routeAirlineData.push({
              x: data[i].AIRPORT,
              y: data[i].Results
            });
          } else if (i === 20) {
            sum = sum + data[i].Results;

            _this.state.routeAirlineData.push({
              x: 'Other',
              y: 0
            });
          } else if (i > 20) {
            sum = sum + data[i].Results;
          }
        }

        _this.state.routeAirlineData[20].y = sum;
      } else {
        for (var _i = 0; _i < data.length; _i++) {
          _this.state.routeAirlineData.push({
            x: data[_i].AIRPORT,
            y: data[_i].Results
          });
        }
      }

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
      var _this2 = this;

      console.log(this.state.type);
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
      var defaultYM = [{
        key: 1,
        text: 'Seat',
        value: 'Seat'
      }, {
        key: 2,
        text: 'Pax',
        value: 'Pax'
      }, {
        key: 3,
        text: 'Frequency',
        value: 'Frequency'
      }];
      var year = [{
        key: 1,
        text: '2013',
        value: '2013'
      }, {
        key: 2,
        text: '2014',
        value: '2014'
      }, {
        key: 3,
        text: '2015',
        value: '2015'
      }, {
        key: 4,
        text: '2016',
        value: '2016'
      }, {
        key: 5,
        text: '2017',
        value: '2017'
      }];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
        columns: 2,
        style: {
          height: '40px',
          paddingTop: '35px',
          paddingBottom: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 8,
        textAlign: "right",
        style: {
          borderRight: '2px solid grey'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: this.state.graph ? 'mode-header-active' : 'mode-header',
        onClick: function onClick() {
          return _this2.activeMode('graph');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, "Graph"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 8,
        textAlign: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: this.state.map ? 'mode-header-active' : 'mode-header',
        onClick: function onClick() {
          return _this2.activeMode('map');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, "Map")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, this.state.graph ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }), this.state.map ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 2,
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"] // defaultValue="2017"
      , {
        value: this.state.mapyear,
        options: year,
        name: "year",
        placeholder: "Year",
        selection: true,
        fluid: true,
        onChange: this.handleDropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 2,
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        type: "airline",
        defaultValue: "THA",
        options: airline,
        name: "airline",
        placeholder: "Airline",
        selection: true,
        fluid: true,
        onChange: this.handleDropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 2,
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        defaultValue: "Pax",
        options: this.state.mapstatus ? defaultYM : defaultY,
        name: "defaultY",
        placeholder: "Yaxis",
        selection: true,
        fluid: true,
        onChange: this.handleDropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      })))), this.state.graph ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards__WEBPACK_IMPORTED_MODULE_1__["AirlineGraphCard"], {
        handleDropdown: this.handleDropdown,
        handleYear: this.handleYear,
        getRouteAirline: this.getRouteAirline,
        state: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }) : null, this.state.map ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards__WEBPACK_IMPORTED_MODULE_1__["AirlineMapCard"], {
        state: this.state,
        data: this.state.bubblemap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
        active: this.state.load,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], {
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        },
        __self: this
      }, "Preparing Data")), this.state.load ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
        active: this.state.routeload,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], {
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        },
        __self: this
      }, "Get Route!")), this.state.load === true || this.state.routeload === true ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dimmer"], {
        active: this.state.mapload,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_modules_semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], {
        size: "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        },
        __self: this
      }, "Get Map!")));
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
        height: 500,
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
        color: this.props.type === 'airport' ? '#15a1cc' : '#28c1b2',
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
          width: '90px',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          backgroundColor: 'black',
          borderRadius: '10px',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "X: ", this.state.crosshairValues[0].x), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
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