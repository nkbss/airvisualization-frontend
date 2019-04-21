exports.ids = [0];
exports.modules = {

/***/ "./components/Datamaps/DataMaps.js":
/*!*****************************************!*\
  !*** ./components/Datamaps/DataMaps.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Datamap; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datamaps */ "datamaps");
/* harmony import */ var datamaps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datamaps__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kanoktat/Documents/project/airport-visualization/components/Datamaps/DataMaps.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var MAP_CLEARING_PROPS = ['height', 'scope', 'setProjection', 'width'];

var propChangeRequiresMapClear = function propChangeRequiresMapClear(oldProps, newProps) {
  return MAP_CLEARING_PROPS.some(function (key) {
    return oldProps[key] !== newProps[key];
  });
};

var Datamap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Datamap, _React$Component);

  function Datamap(props) {
    var _this;

    _classCallCheck(this, Datamap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Datamap).call(this, props));
    _this.resizeMap = _this.resizeMap.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Datamap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.responsive) {
        window.addEventListener('resize', this.resizeMap);
      }

      this.drawMap();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (propChangeRequiresMapClear(this.props, newProps)) {
        this.clear();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.drawMap();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clear();

      if (this.props.responsive) {
        window.removeEventListener('resize', this.resizeMap);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var container = this.refs.container;

      var _arr = Array.from(container.childNodes);

      for (var _i = 0; _i < _arr.length; _i++) {
        var child = _arr[_i];
        container.removeChild(child);
      }

      delete this.map;
    }
  }, {
    key: "drawMap",
    value: function drawMap() {
      var _this$props = this.props,
          arc = _this$props.arc,
          arcOptions = _this$props.arcOptions,
          bubbles = _this$props.bubbles,
          bubbleOptions = _this$props.bubbleOptions,
          data = _this$props.data,
          graticule = _this$props.graticule,
          labels = _this$props.labels,
          updateChoroplethOptions = _this$props.updateChoroplethOptions,
          props = _objectWithoutProperties(_this$props, ["arc", "arcOptions", "bubbles", "bubbleOptions", "data", "graticule", "labels", "updateChoroplethOptions"]);

      var map = this.map;

      if (!map) {
        map = this.map = new datamaps__WEBPACK_IMPORTED_MODULE_2___default.a(_objectSpread({}, props, {
          data: data,
          element: this.refs.container
        }));
      } else {
        map.updateChoropleth(data, updateChoroplethOptions);
      }

      if (arc) {
        map.arc(arc, arcOptions);
      }

      if (bubbles) {
        map.bubbles(bubbles, bubbleOptions);
      }

      if (graticule) {
        map.graticule();
      }

      if (labels) {
        map.labels();
      }
    }
  }, {
    key: "resizeMap",
    value: function resizeMap() {
      this.map.resize();
    }
  }, {
    key: "render",
    value: function render() {
      var style = _objectSpread({
        height: '100%',
        position: 'relative',
        width: '100%'
      }, this.props.style);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        ref: "container",
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      });
    }
  }]);

  return Datamap;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Datamap, "propTypes", {
  arc: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  arcOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  bubbleOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  bubbles: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  graticule: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  labels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  updateChoroplethOptions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
});



/***/ })

};;
//# sourceMappingURL=0.js.map