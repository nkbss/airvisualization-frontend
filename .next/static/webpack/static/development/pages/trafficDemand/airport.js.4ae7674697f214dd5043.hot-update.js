webpackHotUpdate("static/development/pages/trafficDemand/airport.js",{

/***/ "./components/Airport/Dashboard/layout/DashboardLayout.js":
/*!****************************************************************!*\
  !*** ./components/Airport/Dashboard/layout/DashboardLayout.js ***!
  \****************************************************************/
/*! exports provided: DashboardLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLayout", function() { return DashboardLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards */ "./components/Airport/Dashboard/cards/index.js");
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Airport/Dashboard/layout/DashboardLayout.js";

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




var DashboardLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardLayout, _Component);

  function DashboardLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DashboardLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DashboardLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      statistic: null,
      year: null,
      flightB: false,
      routeB: false,
      airlineB: false,
      aircraftB: false,
      seatB: false,
      frequencyB: false,
      paxB: false,
      loadfactorB: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDropdown", function (e, data) {
      console.log(data.value);

      _this.setState(_defineProperty({}, data.name, data.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getAirport", function (year) {
      console.log('Get Airport!');

      if (year === '2017') {
        fetch('http://localhost:4000/Y2017').then(function (res) {
          return res.json();
        }).then(function (data) {
          console.log(data); // this.setState({ Airline: data.data, totalflight: data.data.length })
          // this.forceUpdate()
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectOption", function (e, data) {
      if (data.name === 'flightB') {
        var status = !_this.state.flightB;

        _this.setState(_defineProperty({}, data.name, status));

        _this.forceUpdate();
      }

      _this.setState(_defineProperty({}, data.name, ![data.name]));

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchResult", function () {
      _this.getAirport(_this.state.year);
    });

    return _this;
  }

  _createClass(DashboardLayout, [{
    key: "render",
    value: function render() {
      console.log(this.state.flightB);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards__WEBPACK_IMPORTED_MODULE_1__["DashboardCard"], {
        handleDropdown: this.handleDropdown,
        searchResult: this.searchResult,
        handleSelectOption: this.handleSelectOption,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }));
    }
  }]);

  return DashboardLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=airport.js.4ae7674697f214dd5043.hot-update.js.map