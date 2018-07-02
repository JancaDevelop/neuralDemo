webpackHotUpdate(4,{

/***/ "./components/Examples.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Perceptron__ = __webpack_require__("./src/Perceptron.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_synaptic__ = __webpack_require__("./node_modules/synaptic/dist/synaptic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_synaptic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_synaptic__);
var _jsxFileName = 'X:\\DP\\neuraldemo\\components\\Examples.tsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Examples = function (_React$Component) {
    _inherits(Examples, _React$Component);

    function Examples(props) {
        _classCallCheck(this, Examples);

        var _this = _possibleConstructorReturn(this, (Examples.__proto__ || Object.getPrototypeOf(Examples)).call(this, props));

        var myPerceptron = new __WEBPACK_IMPORTED_MODULE_1__src_Perceptron__["a" /* default */](2, 2, 1);
        myPerceptron.connectLayers();
        var myTrainer = new __WEBPACK_IMPORTED_MODULE_2_synaptic__["Trainer"](myPerceptron);
        var trainer = myTrainer.XOR();
        _this.state = {
            perceptron: myPerceptron
        };
        return _this;
    }

    _createClass(Examples, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                },
                'Examples',
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    'Synaptic examples'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    this.state.perceptron.activate([0, 0])
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    },
                    this.state.perceptron.activate([1, 0])
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    },
                    this.state.perceptron.activate([0, 1])
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    },
                    this.state.perceptron.activate([1, 1])
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Examples;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Examples;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Examples, 'Examples', 'X:/DP/neuraldemo/components/Examples.tsx');
    reactHotLoader.register(_default, 'default', 'X:/DP/neuraldemo/components/Examples.tsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.f787f0e80f2673cba362.hot-update.js.map