exports.ids = [1];
exports.modules = {

/***/ "./components/Graph/newdefaultBar.js":
/*!*******************************************!*\
  !*** ./components/Graph/newdefaultBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-vis */ "react-vis");
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vis__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Graph/newdefaultBar.js";

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




var defaultBar =
/*#__PURE__*/
function (_Component) {
  _inherits(defaultBar, _Component);

  function defaultBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, defaultBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(defaultBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      crosshairValues: null
    });

    return _this;
  }

  _createClass(defaultBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state.crosshairValues);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["XYPlot"], {
        height: 550,
        width: 700,
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
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalGridLines"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["HorizontalGridLines"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["XAxis"] // attr="x"
      // attrAxis="y"
      // orientation="bottom"
      // position="end"
      // title="x-axis"
      // title={props.xTitle}
      , {
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
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["YAxis"] // attr="y"
      // attrAxis="x"
      // orientation="left"
      // position="end"
      , {
        title: this.props.yTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["VerticalBarSeries"], {
        data: this.props.data,
        barWidth: 0.6,
        stroke: "white",
        onValueMouseOver: function onValueMouseOver(datapoint, _ref) {
          var index = _ref.index;
          console.log(datapoint); // hint[0] = (
          //   <Hint value={datapoint}>
          //     <div style={{ background: 'white', color: 'black' }}>
          //       <p>{datapoint.y}</p>
          //     </div>
          //   </Hint>
          // )
          // console.log(hint)
        },
        onNearestXY: function onNearestXY(value, _ref2) {
          var index = _ref2.index;
          return _this2.setState({
            selectedPointId: index,
            crosshairValues: [value]
          });
        },
        onValueClick: function onValueClick(datapoint, _ref3) {
          var index = _ref3.index;

          _this2.props.handleYear(datapoint.x);

          _this2.props.getRouteAirline(datapoint.x, _this2.props.airline);

          console.log(datapoint.x);
          console.log(index);
          datapoint.opacity = 0.5378465593937095;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), this.state.crosshairValues && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_1__["Crosshair"], {
        values: this.state.crosshairValues,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
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
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "X: ", this.state.crosshairValues[0].x), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Y: ", this.state.crosshairValues[0].y))));
    }
  }]);

  return defaultBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (defaultBar);

/***/ })

};;
//# sourceMappingURL=1.js.map