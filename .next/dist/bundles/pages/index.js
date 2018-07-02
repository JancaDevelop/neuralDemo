module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Examples.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Perceptron__ = __webpack_require__("./src/Perceptron.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_synaptic__ = __webpack_require__("synaptic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_synaptic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_synaptic__);
var _jsxFileName = 'X:\\DP\\neuraldemo\\components\\Examples.tsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    }]);

    return Examples;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Examples);

/***/ }),

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Dialog__ = __webpack_require__("material-ui/Dialog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_withRoot__ = __webpack_require__("./src/withRoot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Examples__ = __webpack_require__("./components/Examples.tsx");
var _jsxFileName = 'X:\\DP\\neuraldemo\\pages\\index.tsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20
    }
  };
};

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.state = {
      open: false
    };
    _this.handleClose = function () {
      _this.setState({
        open: false
      });
    };
    _this.handleClick = function () {
      _this.setState({
        open: true
      });
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var open = this.state.open;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Examples__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1362455275' + ' ' + 'hello',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            {
              className: 'jsx-1362455275',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            'Hello World'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1362455275',
            css: '.hello.jsx-1362455275{font:15px Helvetica,Arial,sans-serif;background:#eee;padding:100px;text-align:center;-webkit-transition:100ms ease-in background;transition:100ms ease-in background;}.hello.jsx-1362455275:hover{background:#ccc;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNrQixBQUdrRCxBQU92QixnQkFDbEIscUJBUGtCLGdCQUNGLGNBQ0ksa0JBQ2tCLGdGQUN0QyIsImZpbGUiOiJwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlUm9vdCI6Ilg6L0RQL25ldXJhbGRlbW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XHJcbmltcG9ydCBEaWFsb2csIHsgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ0NvbnRlbnRUZXh0LCBEaWFsb2dBY3Rpb25zLCB9IGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ21hdGVyaWFsLXVpL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHdpdGhSb290IGZyb20gJy4uL3NyYy93aXRoUm9vdCc7XHJcbmltcG9ydCBFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL0V4YW1wbGVzJztcclxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIwLFxyXG4gICAgfSxcclxufSk7XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICBcbiAgICAgIDxFeGFtcGxlcyAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVsbG8nPlxuICAgICAgPHA+SGVsbG8gV29ybGQ8L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWxsbyB7XG4gICAgICAgICAgZm9udDogMTVweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgcGFkZGluZzogMTAwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4gYmFja2dyb3VuZDtcbiAgICAgICAgfVxuICAgICAgICAuaGVsbG86aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxEaWFsb2cgb3Blbj17b3Blbn0gb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX0+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlPlN1cGVyIFNlY3JldCBQYXNzd29yZDwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+MS0yLTMtNC01PC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXkxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIE1hdGVyaWFsLVVJXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YmhlYWRpbmdcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgZXhhbXBsZSBwcm9qZWN0XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicmFpc2VkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICBTdXBlciBTZWNyZXQgUGFzc3dvcmRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVkdXhcIj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicmFpc2VkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgUmVkdXhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgPC9MaW5rPlxuICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxufVxyXG5JbmRleC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb290KHdpdGhTdHlsZXMoc3R5bGVzKShJbmRleCkpO1xyXG4iXX0= */\n/*@ sourceURL=pages\\index.tsx */'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Dialog___default.a,
          { open: open, onClose: this.handleClose, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_Dialog__["DialogTitle"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            'Super Secret Password'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_Dialog__["DialogContent"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_material_ui_Dialog__["DialogContentText"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              '1-2-3-4-5'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_Dialog__["DialogActions"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
              { color: 'primary', onClick: this.handleClose, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              'OK'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a,
          { variant: 'display1', gutterBottom: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          'Material-UI'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a,
          { variant: 'subheading', gutterBottom: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          },
          'example project'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { variant: 'raised', color: 'secondary', onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          'Super Secret Password'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { href: '/redux', __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
            { variant: 'raised', color: 'primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            'Redux'
          )
        )
      );
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Index.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_8__src_withRoot__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__["withStyles"])(styles)(Index)));

/***/ }),

/***/ "./src/Perceptron.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_synaptic__ = __webpack_require__("synaptic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_synaptic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_synaptic__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Perceptron = function (_Network) {
    _inherits(Perceptron, _Network);

    function Perceptron(input, hidden, output) {
        _classCallCheck(this, Perceptron);

        var _this = _possibleConstructorReturn(this, (Perceptron.__proto__ || Object.getPrototypeOf(Perceptron)).call(this));

        _this.inputLayer = new __WEBPACK_IMPORTED_MODULE_0_synaptic__["Layer"](input);
        _this.hiddenLayer = new __WEBPACK_IMPORTED_MODULE_0_synaptic__["Layer"](hidden);
        _this.outputLayer = new __WEBPACK_IMPORTED_MODULE_0_synaptic__["Layer"](output);
        return _this;
    }

    _createClass(Perceptron, [{
        key: 'connectLayers',
        value: function connectLayers() {
            this.inputLayer.project(this.hiddenLayer);
            this.hiddenLayer.project(this.outputLayer);

            this.set({
                input: this.inputLayer,
                hidden: [this.hiddenLayer],
                output: this.outputLayer
            });
        }
    }]);

    return Perceptron;
}(__WEBPACK_IMPORTED_MODULE_0_synaptic__["Network"]);

/* harmony default export */ __webpack_exports__["a"] = (Perceptron);

/***/ }),

/***/ "./src/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__("jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple__ = __webpack_require__("material-ui/colors/purple");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green__ = __webpack_require__("material-ui/colors/green");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green__);
/* eslint-disable no-underscore-dangle */






// A theme with custom primary and secondary color.
// It's optional.
var theme = Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["createMuiTheme"])({
  palette: {
    primary: {
      light: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_2_material_ui_colors_purple___default.a[700]
    },
    secondary: {
      light: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_green___default.a[700]
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),

/***/ "./src/withRoot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__ = __webpack_require__("material-ui/CssBaseline");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__("./src/getPageContext.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'X:\\DP\\neuraldemo\\src\\withRoot.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







function withRoot(Component) {
  var WithRoot = function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot(props, context) {
      _classCallCheck(this, WithRoot);

      var _this = _possibleConstructorReturn(this, (WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call(this, props, context));

      _this.pageContext = null;


      _this.pageContext = _this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_4__getPageContext__["a" /* default */])();
      return _this;
    }

    _createClass(WithRoot, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["MuiThemeProvider"],
          {
            theme: this.pageContext.theme,
            sheetsManager: this.pageContext.sheetsManager,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_CssBaseline___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }))
        );
      }
    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  WithRoot.propTypes = {
    pageContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

/* harmony default export */ __webpack_exports__["a"] = (withRoot);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "jss":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "material-ui/Button":
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),

/***/ "material-ui/CssBaseline":
/***/ (function(module, exports) {

module.exports = require("material-ui/CssBaseline");

/***/ }),

/***/ "material-ui/Dialog":
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),

/***/ "material-ui/Typography":
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),

/***/ "material-ui/colors/green":
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/green");

/***/ }),

/***/ "material-ui/colors/purple":
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/purple");

/***/ }),

/***/ "material-ui/styles":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "synaptic":
/***/ (function(module, exports) {

module.exports = require("synaptic");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map