(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("photon-core"));
	else if(typeof define === 'function' && define.amd)
		define(["photon-core"], factory);
	else if(typeof exports === 'object')
		exports["photons"] = factory(require("photon-core"));
	else
		root["photons"] = factory(root["photon-core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** multi photons ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! photon-core */1);
	module.exports = __webpack_require__(/*! ./src/index.js */2);


/***/ },
/* 1 */
/*!******************************!*\
  !*** external "photon-core" ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SkTfu = exports.PhUserAvatar = exports.PhTestTester = exports.PhTest = exports.PhTfu = exports.PhIconSvgImg = exports.PhImage = exports.PhIconBadge = exports.PhIcon = exports.PhCheckbox = exports.PhButton = exports.PhAvatar = undefined;
	
	var _phAvatar = __webpack_require__(/*! ./components/ph-avatar/ph-avatar */ 3);
	
	var _phButton = __webpack_require__(/*! ./components/ph-button/ph-button */ 6);
	
	var _phCheckbox = __webpack_require__(/*! ./components/ph-checkbox/ph-checkbox */ 8);
	
	var _phIcon = __webpack_require__(/*! ./components/ph-icon/ph-icon */ 10);
	
	var _phIconBadge = __webpack_require__(/*! ./components/ph-icon-badge/ph-icon-badge */ 13);
	
	var _phImage = __webpack_require__(/*! ./components/ph-image/ph-image */ 15);
	
	var _phIconSvgImg = __webpack_require__(/*! ./components/ph-icon-svg-img/ph-icon-svg-img */ 17);
	
	var _phTfu = __webpack_require__(/*! ./components/ph-tfu/ph-tfu */ 20);
	
	var _phTest = __webpack_require__(/*! ./components/ph-test/ph-test */ 22);
	
	var _phTestTester = __webpack_require__(/*! ./components/ph-test-tester/ph-test-tester */ 24);
	
	var _phUserAvatar = __webpack_require__(/*! ./components/ph-user-avatar/ph-user-avatar */ 26);
	
	var _skTfu = __webpack_require__(/*! ./tags/sk-tfu/sk-tfu */ 28);
	
	var _skTfu2 = _interopRequireDefault(_skTfu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.PhAvatar = _phAvatar.PhAvatar;
	exports.PhButton = _phButton.PhButton;
	exports.PhCheckbox = _phCheckbox.PhCheckbox;
	exports.PhIcon = _phIcon.PhIcon;
	exports.PhIconBadge = _phIconBadge.PhIconBadge;
	exports.PhImage = _phImage.PhImage;
	exports.PhIconSvgImg = _phIconSvgImg.PhIconSvgImg;
	exports.PhTfu = _phTfu.PhTfu;
	exports.PhTest = _phTest.PhTest;
	exports.PhTestTester = _phTestTester.PhTestTester;
	exports.PhUserAvatar = _phUserAvatar.PhUserAvatar;
	exports.SkTfu = _skTfu2.default;

/***/ },
/* 3 */
/*!***********************************************!*\
  !*** ./src/components/ph-avatar/ph-avatar.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhAvatar = undefined;
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phAvatar = __webpack_require__(/*! ./ph-avatar.css */ 4);
	
	var _phAvatar2 = _interopRequireDefault(_phAvatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhAvatar = exports.PhAvatar = function (_PhotonComponent) {
	    _inherits(PhAvatar, _PhotonComponent);
	
	    function PhAvatar() {
	        _classCallCheck(this, PhAvatar);
	
	        return _possibleConstructorReturn(this, (PhAvatar.__proto__ || Object.getPrototypeOf(PhAvatar)).apply(this, arguments));
	    }
	
	    _createClass(PhAvatar, [{
	        key: 'initialize',
	        value: function initialize() {
	            _get(PhAvatar.prototype.__proto__ || Object.getPrototypeOf(PhAvatar.prototype), 'initialize', this).call(this);
	            this.sizes = {
	                'small': 15,
	                'medium': 25,
	                'large': 35
	            };
	        }
	    }, {
	        key: 'configurePropRules',
	        value: function configurePropRules(propRules) {
	            propRules.size.nullTo('medium');
	        }
	    }, {
	        key: 'getContent',
	        value: function getContent() {
	            var props = this.props;
	            if (props.image) {
	                _photonCore.vdom.elementOpen('ph-image', null, null, 'src', props.image, 'sizing', 'cover');
	
	                return _photonCore.vdom.elementClose('ph-image');
	            } else if (props.icon) {
	                var size = this.sizes[props.size];
	                var styles = {
	                    fontSize: '0'
	                };
	
	                _photonCore.vdom.elementOpen('ph-icon', null, null, 'name', props.icon, 'size', size, 'style', styles);
	
	                return _photonCore.vdom.elementClose('ph-icon');
	            } else if (props.initials) {
	                _photonCore.vdom.elementOpen('span');
	
	                _renderArbitrary(props.initials);
	
	                return _photonCore.vdom.elementClose('span');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            _photonCore.vdom.elementOpen('div', null, null, 'id', 'container');
	
	            _photonCore.vdom.elementOpen('style');
	
	            _renderArbitrary(_phAvatar2.default.toString());
	
	            _photonCore.vdom.elementClose('style');
	
	            _renderArbitrary(self.getContent());
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return 'ph-avatar';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                image: _photonCore.PropTypes.string().nullable().attribute(),
	                initials: _photonCore.PropTypes.string().attribute(),
	                size: _photonCore.PropTypes.string().nullable().attribute().reflect(),
	                icon: _photonCore.PropTypes.string().attribute()
	            };
	        }
	    }]);
	
	    return PhAvatar;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhAvatar);

/***/ },
/* 4 */
/*!************************************************!*\
  !*** ./src/components/ph-avatar/ph-avatar.css ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: inline-block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 50%;\n    font-family: Roboto;\n    background-color: #F5F5F5;\n    color: #333333;\n    cursor: pointer;\n    text-transform: uppercase;\n}\n\n:host #container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n:host([size=\"small\"]) {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #C7C7C7;\n    font-size: 12px;\n}\n\n:host([size=\"medium\"]) {\n    width: 50px;\n    height: 50px;\n    border: 2px solid #C7C7C7;\n    font-size: 20px;\n}\n\n:host([size=\"large\"]) {\n    width: 70px;\n    height: 70px;\n    border: 2px solid #C7C7C7;\n    font-size: 32px;\n}\n\n:host([image][size=\"small\"]) ph-image {\n    width: 30px;\n    height: 30px;\n}\n\n:host([image][size=\"medium\"]) ph-image {\n    width: 50px;\n    height: 50px;\n}\n\n:host([image][size=\"large\"]) ph-image {\n    width: 70px;\n    height: 70px;\n}\n\n\n\n\n\n\nph-avatar {\n    display: inline-block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 50%;\n    font-family: Roboto;\n    background-color: #F5F5F5;\n    color: #333333;\n    cursor: pointer;\n    text-transform: uppercase;\n}\n\nph-avatar #container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nph-avatar[size=\"small\"] {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #C7C7C7;\n    font-size: 12px;\n}\n\nph-avatar[size=\"medium\"] {\n    width: 50px;\n    height: 50px;\n    border: 2px solid #C7C7C7;\n    font-size: 20px;\n}\n\nph-avatar[size=\"large\"] {\n    width: 70px;\n    height: 70px;\n    border: 2px solid #C7C7C7;\n    font-size: 32px;\n}\n", ""]);
	
	// exports


/***/ },
/* 5 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/*!***********************************************!*\
  !*** ./src/components/ph-button/ph-button.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhButton = undefined;
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phButton = __webpack_require__(/*! ./ph-button.jss */ 7);
	
	var _phButton2 = _interopRequireDefault(_phButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhButton = exports.PhButton = function (_PhotonComponent) {
	    _inherits(PhButton, _PhotonComponent);
	
	    _createClass(PhButton, null, [{
	        key: 'is',
	        get: function get() {
	            return 'ph-button';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                value: _photonCore.PropTypes.bool().nullable().attribute().reflect('aria-value'),
	                labels: _photonCore.PropTypes.arrayOf('string').attribute().reflect('debug-labels')
	            };
	        }
	    }]);
	
	    function PhButton() {
	        _classCallCheck(this, PhButton);
	
	        var _this = _possibleConstructorReturn(this, (PhButton.__proto__ || Object.getPrototypeOf(PhButton)).call(this));
	
	        _this.onTrueClick = function (e) {
	            // console.log('onTrueClick', e);
	            e.preventDefault();
	            // this.elem.value = (this.elem.value === true) ? null : true;
	            var newVal = _this.props.value === true ? null : true;
	            _this.emit('change', newVal);
	        };
	
	        _this.onFalseClick = function (e) {
	            // console.log('onFalseClick', e);
	            e.preventDefault();
	            // this.elem.value = (this.elem.value === false) ? null : false;
	            var newVal = _this.props.value === false ? null : false;
	            _this.emit('change', newVal);
	        };
	
	        console.log('PhButton.constructor');
	        // this.useIDom = false;
	        // this.useShadowDom = false;
	        return _this;
	    }
	
	    _createClass(PhButton, [{
	        key: 'configurePropRules',
	        value: function configurePropRules(propRules) {
	            //console.log(this.elem.tagName, 'PhTfu.configurePropRules');
	            propRules.labels.nullTo(['YYYY', 'NNN']);
	        }
	    }, {
	        key: 'getLabel',
	        value: function getLabel(index) {
	            var result = '';
	            // let labels:string[] = this.elem.labels;
	            var labels = this.props.labels;
	            if (labels && labels.length >= 2) {
	                result = labels[index];
	            }
	            //console.log('getLabel', index, result);
	            if (!result) {
	                result = '?labels missing?';
	                //result = index ? 'No' : 'Yes';
	            }
	            return result;
	        }
	    }, {
	        key: 'cycle',
	
	
	        //example of public method
	        value: function cycle(a, b) {
	            console.log('public method cycle', 'a:', a, 'b:', b);
	            if (this.props.value === true) {
	                this.elem.value = false;
	            } else if (this.props.value === false) {
	                this.elem.value = null;
	            } else if (this.props.value === null) {
	                this.elem.value = true;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            var props = self.props;
	            console.log('PhButton.render', props);
	
	            _photonCore.vdom.elementOpen('div', null, null, 'style', _phButton2.default['.container']);
	
	            _photonCore.vdom.elementVoid('slot', null, null, 'name', 'a');
	
	            _photonCore.vdom.elementOpen('span', null, null, 'style', props.value === true ? _phButton2.default['.selected'] : null, 'onclick', self.onTrueClick);
	
	            _renderArbitrary(self.getLabel(0));
	
	            _photonCore.vdom.elementClose('span');
	
	            _photonCore.vdom.elementVoid('slot', null, null, 'name', 'k');
	
	            _photonCore.vdom.elementOpen('span', null, null, 'style', props.value === false ? _phButton2.default['.selected'] : null, 'onclick', self.onFalseClick);
	
	            _renderArbitrary(self.getLabel(1));
	
	            _photonCore.vdom.elementClose('span');
	
	            _photonCore.vdom.elementVoid('slot', null, null, 'name', 'r');
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }]);
	
	    return PhButton;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhButton, HTMLButtonElement, 'button');

/***/ },
/* 7 */
/*!************************************************!*\
  !*** ./src/components/ph-button/ph-button.jss ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = {":host":{"display":"inline-block"},".container":{"display":"inline-block","backgroundColor":"#f7f7f7","border":"1px solid grey"},".selected":{"fontWeight":"bold"}}

/***/ },
/* 8 */
/*!***************************************************!*\
  !*** ./src/components/ph-checkbox/ph-checkbox.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhCheckbox = undefined;
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phCheckbox = __webpack_require__(/*! ./ph-checkbox.css */ 9);
	
	var _phCheckbox2 = _interopRequireDefault(_phCheckbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhCheckbox = exports.PhCheckbox = function (_PhotonComponent) {
	    _inherits(PhCheckbox, _PhotonComponent);
	
	    function PhCheckbox() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, PhCheckbox);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhCheckbox.__proto__ || Object.getPrototypeOf(PhCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.onDisableChange = function (newVal) {
	            //console.log('>>> onDisableChange', newVal, this.elem.tabIndex);
	            if (newVal) {
	                _this.prevTabIndex = _this.elem.tabIndex;
	                _this.elem.removeAttribute('tabindex');
	            } else {
	                _this.elem.tabIndex = _this.prevTabIndex;
	            }
	        }, _this.handleClick = function (e) {
	            //console.log('handleClick', e, e.defaultPrevented);
	            if (_this.props.disabled) {
	                e.stopPropagation();
	                return;
	            }
	            _this.elem.checked = !_this.props.checked;
	        }, _this.handleClickCapture = function (e) {
	            //console.log('handleClickResult', e, e.defaultPrevented);
	            if (!e.defaultPrevented) {
	                window.setTimeout(function () {
	                    _this.elem.dispatchEvent(new Event('change'));
	                });
	            }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(PhCheckbox, [{
	        key: 'configurePropRules',
	        value: function configurePropRules(propRules) {
	            console.log(this.elem.tagName, 'PhCheckbox.configurePropRules');
	            propRules.label.nullTo('check me');
	            propRules.disabled.onChange(this.onDisableChange);
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize() {
	            _get(PhCheckbox.prototype.__proto__ || Object.getPrototypeOf(PhCheckbox.prototype), 'initialize', this).call(this);
	            console.log(this.elem.tagName, 'PhCheckbox.initialize');
	        }
	    }, {
	        key: 'connectedCallback',
	        value: function connectedCallback() {
	            _get(PhCheckbox.prototype.__proto__ || Object.getPrototypeOf(PhCheckbox.prototype), 'connectedCallback', this).call(this);
	            this.elem.addEventListener('click', this.handleClickCapture, true);
	        }
	    }, {
	        key: 'disconnectedCallback',
	        value: function disconnectedCallback() {
	            this.elem.removeEventListener('click', this.handleClickCapture, true);
	            _get(PhCheckbox.prototype.__proto__ || Object.getPrototypeOf(PhCheckbox.prototype), 'disconnectedCallback', this).call(this);
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            var props = self.props;
	
	            _photonCore.vdom.elementOpen('span', null, null, 'onclick', self.handleClick, 'id', 'container');
	
	            _photonCore.vdom.elementOpen('style');
	
	            _renderArbitrary(_phCheckbox2.default.toString());
	
	            _photonCore.vdom.elementClose('style');
	
	            _photonCore.vdom.elementOpen('span', null, null, 'id', 'box');
	
	            _photonCore.vdom.elementOpen('svg', null, null, 'id', 'check', 'width', '16', 'height', '16', 'viewBox', '0 0 16 16');
	
	            _photonCore.vdom.elementVoid('path', null, null, 'd', 'M16,5.72a0.84,0.84,0,0,1-.25.62L8,14.12a0.87,0.87,0,0,1-1.23,0L2.24,9.62a0.87,0.87,0,0,1,0-1.23L3.47,7.15a0.87,0.87,0,0,1,1.23,0L7.36,9.82,13.3,3.88a0.87,0.87,0,0,1,1.23,0l1.23,1.23A0.84,0.84,0,0,1,16,5.72Z');
	
	            _photonCore.vdom.elementClose('svg');
	
	            _photonCore.vdom.elementClose('span');
	
	            _photonCore.vdom.elementOpen('span', null, null, 'id', 'label');
	
	            _renderArbitrary(props.label);
	
	            _photonCore.vdom.elementClose('span');
	
	            return _photonCore.vdom.elementClose('span');
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return 'ph-checkbox';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                label: _photonCore.PropTypes.string().nullable().attribute(),
	                checked: _photonCore.PropTypes.bool().attribute().reflect('aria-checked'),
	                disabled: _photonCore.PropTypes.bool().attribute().reflect('aria-disabled'),
	                reverse: _photonCore.PropTypes.bool().attribute()
	            };
	        }
	    }]);
	
	    return PhCheckbox;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhCheckbox);

/***/ },
/* 9 */
/*!****************************************************!*\
  !*** ./src/components/ph-checkbox/ph-checkbox.css ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host, :host #container {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    outline: none;\n}\n\n:host #box {\n    display: inline-block;\n    box-sizing: border-box;\n    position: relative;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #ddd;\n    cursor: pointer;\n    transition: .3s all;\n}\n\n:host #box > #check {\n    position: absolute;\n    opacity: 0;\n    pointer-events: none;\n    fill: #333;\n    transition: .3s all;\n}\n\n:host #label {\n    padding: 0 0 0 5px;\n    cursor: pointer;\n    transition: .3s all;\n    user-select: none;\n    -webkit-user-select: none;\n}\n\n/**\n/*  hover stuff\n**/\n:host(:hover:not([disabled])) #label {\n    color: #199ad1;\n}\n\n:host(:hover:not([disabled])) #box {\n    border-color: #199ad1;\n}\n\n:host(:hover:not([disabled])) #box > #check {\n    fill: #199ad1;\n}\n\n/**\n/*  checked stuff\n**/\n:host([checked]) #box > #check {\n    opacity: 1;\n}\n\n/**\n/*  disabled stuff\n**/\n:host([disabled]) {\n    opacity: 0.5;\n}\n\n:host([disabled]), :host([disabled]) #box, :host([disabled]) #label {\n    cursor: not-allowed;\n}\n\n/**\n/*  reverse\n**/\n:host([reverse]) > #container {\n    flex-direction: row-reverse;\n}\n\n:host([reverse]) #label {\n    padding: 0 5px 0 0;\n}\n\n\n/**************************************** firefox  ****************************************/\n\nph-checkbox, ph-checkbox #container {\n    /* all: initial; clear all previous styles */\n    contain: content;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    outline: none;\n}\n\nph-checkbox #box {\n    display: inline-block;\n    box-sizing: border-box;\n    position: relative;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #ddd;\n    cursor: pointer;\n    transition: .3s all;\n}\n\nph-checkbox #box > #check {\n    position: absolute;\n    opacity: 0;\n    pointer-events: none;\n    fill: #333;\n    transition: .3s all;\n}\n\nph-checkbox #label {\n    padding: 0 0 0 5px;\n    cursor: pointer;\n    transition: .3s all;\n    user-select: none;\n    -webkit-user-select: none;\n}\n\n/**\n/*  hover stuff\n**/\nph-checkbox:hover:not([disabled]) #label {\n    color: #199ad1;\n}\n\nph-checkbox:hover:not([disabled]) #box {\n    border-color: #199ad1;\n}\n\nph-checkbox:hover:not([disabled]) #box > #check {\n    fill: #199ad1;\n}\n\n/**\n/*  checked stuff\n**/\nph-checkbox[checked] #box > #check {\n    opacity: 1;\n}\n\n/**\n/*  disabled stuff\n**/\nph-checkbox[disabled] {\n    opacity: 0.5;\n}\n\nph-checkbox[disabled], ph-checkbox[disabled] #box, ph-checkbox[disabled] #label {\n    cursor: not-allowed;\n}\n\n/**\n/*  reverse\n**/\nph-checkbox[reverse] #container {\n    flex-direction: row-reverse;\n}\n\nph-checkbox[reverse] #label {\n    padding: 0 5px 0 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/*!*******************************************!*\
  !*** ./src/components/ph-icon/ph-icon.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _iconAssets = __webpack_require__(/*! ./icon-assets.js */ 11);
	
	var icons = _interopRequireWildcard(_iconAssets);
	
	var _phIcon = __webpack_require__(/*! ./ph-icon.css */ 12);
	
	var _phIcon2 = _interopRequireDefault(_phIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhIcon = function (_PhotonComponent) {
	    _inherits(PhIcon, _PhotonComponent);
	
	    function PhIcon() {
	        _classCallCheck(this, PhIcon);
	
	        return _possibleConstructorReturn(this, (PhIcon.__proto__ || Object.getPrototypeOf(PhIcon)).call(this));
	        //this.useIDom = false;
	        //this.useShadowDom = false;
	    }
	
	    _createClass(PhIcon, [{
	        key: 'configurePropRules',
	        value: function configurePropRules(propRules) {
	            propRules.name.nullTo('usd');
	            propRules.size.nullTo(24);
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            //self.elem.innerHTML = '<svg viewbox="0 0 24 24" width="'+self.props.size+'" height="'+self.props.size+'">' + icons[self.props.name] + '</svg>';
	            return self.renderTagDangerously('svg', { viewBox: '0 0 24 24',
	                width: self.props.size,
	                height: self.props.size
	            }, icons[self.props.name]);
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return 'ph-icon';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                name: _photonCore.PropTypes.string().nullable().attribute(),
	                size: _photonCore.PropTypes.number().nullable().attribute()
	            };
	        }
	    }]);
	
	    return PhIcon;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhIcon);

/***/ },
/* 11 */
/*!***********************************************!*\
  !*** ./src/components/ph-icon/icon-assets.js ***!
  \***********************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var usd = exports.usd = "<g><path d=\"M17,15.2c0,1.1-0.4,2.1-1.1,2.9c-0.7,0.8-1.6,1.3-2.8,1.5v2c0,0.1,0,0.2-0.1,0.3C13,22,12.9,22,12.8,22h-1.4\n\tc-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.1-0.2-0.1-0.3v-2c-0.5-0.1-0.9-0.2-1.4-0.3c-0.4-0.2-0.8-0.3-1.1-0.5c-0.3-0.2-0.6-0.3-0.8-0.5\n\tc-0.2-0.2-0.4-0.3-0.5-0.4s-0.2-0.2-0.2-0.2c-0.1-0.2-0.1-0.3,0-0.5l1.1-1.5c0.1-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.3,0.1l0,0\n\tc0.8,0.7,1.7,1.2,2.6,1.4c0.3,0.1,0.5,0.1,0.8,0.1c0.6,0,1.1-0.2,1.5-0.5c0.4-0.3,0.7-0.8,0.7-1.4c0-0.2-0.1-0.4-0.2-0.6\n\tc-0.1-0.2-0.2-0.3-0.4-0.5s-0.3-0.3-0.6-0.4c-0.3-0.2-0.5-0.3-0.7-0.4c-0.2-0.1-0.5-0.2-0.9-0.4c-0.3-0.1-0.5-0.2-0.7-0.3\n\tc-0.2-0.1-0.4-0.2-0.7-0.3c-0.3-0.1-0.5-0.2-0.7-0.3C9.4,12.1,9.2,12,9,11.8c-0.2-0.2-0.4-0.3-0.6-0.5S8.1,11,7.9,10.8\n\ts-0.3-0.4-0.4-0.6C7.5,10,7.4,9.7,7.3,9.4C7.3,9.2,7.2,8.9,7.2,8.6c0-1,0.4-1.9,1.1-2.7C9,5.1,9.9,4.6,11,4.4v-2\n\tc0-0.1,0-0.2,0.1-0.3C11.2,2,11.3,2,11.4,2h1.4c0.1,0,0.2,0,0.2,0.1c0.1,0.1,0.1,0.2,0.1,0.3v2c0.4,0,0.8,0.1,1.2,0.3\n\tC14.7,4.7,15,4.8,15.3,5c0.2,0.1,0.5,0.3,0.7,0.4s0.4,0.3,0.4,0.3s0.1,0.1,0.2,0.2c0.1,0.1,0.1,0.3,0.1,0.4l-0.9,1.6\n\tc-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2,0-0.3-0.1c0,0-0.1-0.1-0.2-0.1s-0.2-0.2-0.4-0.3c-0.2-0.1-0.4-0.2-0.6-0.4\n\tc-0.2-0.1-0.5-0.2-0.8-0.3c-0.3-0.1-0.6-0.1-0.9-0.1c-0.7,0-1.2,0.2-1.7,0.5C10.2,7.6,10,8,10,8.5c0,0.2,0,0.4,0.1,0.5\n\tc0.1,0.2,0.2,0.3,0.3,0.5c0.2,0.1,0.3,0.3,0.4,0.4c0.1,0.1,0.3,0.2,0.6,0.3c0.3,0.1,0.5,0.2,0.6,0.3c0.2,0.1,0.4,0.2,0.8,0.3\n\tc0.4,0.1,0.7,0.3,0.9,0.4s0.5,0.2,0.8,0.4c0.3,0.2,0.6,0.3,0.8,0.5c0.2,0.1,0.4,0.3,0.7,0.6c0.2,0.2,0.4,0.5,0.6,0.7\n\tc0.1,0.2,0.2,0.5,0.3,0.9C17,14.5,17,14.9,17,15.2L17,15.2z\"/></g>";
	
	var user = exports.user = "<g><path d=\"M21,18.6c0,1-0.3,1.9-0.9,2.5c-0.6,0.6-1.4,0.9-2.5,0.9H6.4c-1,0-1.9-0.3-2.5-0.9S3,19.7,3,18.6\n\tc0-0.5,0-0.9,0-1.3c0-0.4,0.1-0.9,0.2-1.4c0.1-0.5,0.2-1,0.3-1.4c0.1-0.4,0.3-0.9,0.5-1.3c0.2-0.4,0.5-0.8,0.8-1.1\n\tc0.3-0.3,0.7-0.5,1.1-0.7c0.4-0.2,0.9-0.3,1.4-0.3c0.1,0,0.3,0.1,0.5,0.3s0.6,0.4,1,0.6c0.4,0.2,0.8,0.4,1.4,0.6\n\tc0.6,0.2,1.1,0.3,1.7,0.3c0.6,0,1.1-0.1,1.7-0.3c0.6-0.2,1-0.4,1.4-0.6c0.4-0.2,0.7-0.4,1-0.6c0.3-0.2,0.5-0.3,0.5-0.3\n\tc0.5,0,1,0.1,1.4,0.3s0.8,0.4,1.1,0.7c0.3,0.3,0.6,0.6,0.8,1.1c0.2,0.4,0.4,0.8,0.5,1.3c0.1,0.4,0.2,0.9,0.3,1.4\n\tc0.1,0.5,0.1,1,0.2,1.4C21,17.7,21,18.2,21,18.6L21,18.6z M16.9,7c0,1.4-0.5,2.6-1.4,3.5S13.4,12,12,12s-2.5-0.5-3.5-1.5\n\tS7.1,8.4,7.1,7c0-1.4,0.5-2.6,1.4-3.5S10.6,2,12,2c1.4,0,2.5,0.5,3.5,1.5S16.9,5.6,16.9,7z\"/></g>";
	
	var wrench = exports.wrench = "<g><path d=\"M6.4,18.4c0-0.2-0.1-0.4-0.2-0.5c-0.2-0.2-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.2,0.3-0.2,0.5\n\tc0,0.2,0.1,0.4,0.2,0.5c0.2,0.2,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2C6.3,18.8,6.4,18.6,6.4,18.4z M14.3,13.2L6,21.5\n\tC5.7,21.8,5.3,22,4.9,22c-0.4,0-0.8-0.2-1.1-0.5l-1.3-1.3C2.2,19.9,2,19.6,2,19.1c0-0.4,0.2-0.8,0.5-1.1l8.3-8.3\n\tc0.3,0.8,0.8,1.5,1.4,2.1S13.5,12.9,14.3,13.2z M22,8c0,0.3-0.1,0.7-0.3,1.3c-0.4,1.1-1.1,2-2,2.6c-1,0.7-2,1-3.2,1\n\tc-1.5,0-2.8-0.5-3.9-1.6c-1.1-1.1-1.6-2.4-1.6-3.9s0.5-2.8,1.6-3.9S15.1,2,16.6,2c0.5,0,1,0.1,1.5,0.2c0.5,0.1,1,0.3,1.3,0.6\n\tc0.1,0.1,0.2,0.2,0.2,0.3c0,0.1-0.1,0.3-0.2,0.3l-3.6,2.1v2.7l2.4,1.3c0,0,0.4-0.2,1-0.6c0.6-0.4,1.2-0.7,1.7-1\n\tc0.5-0.3,0.8-0.4,0.9-0.4c0.1,0,0.2,0,0.3,0.1C22,7.7,22,7.8,22,8L22,8z\"/></g>";
	
	var building = exports.building = "<g><path d=\"M8.36,16.64v0.71a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H7.27A0.35,0.35,0,0,1,7,17.61a0.34,0.34,0,0,1-.11-0.25V16.64A0.34,0.34,0,0,1,7,16.39a0.35,0.35,0,0,1,.26-0.11H8a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,8.36,16.64Zm0-2.86V14.5a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H7.27A0.35,0.35,0,0,1,7,14.75a0.34,0.34,0,0,1-.11-0.25V13.79A0.34,0.34,0,0,1,7,13.53a0.35,0.35,0,0,1,.26-0.11H8a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,8.36,13.79Zm2.91,0V14.5a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H10.18a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V13.79a0.34,0.34,0,0,1,.11-0.25,0.35,0.35,0,0,1,.26-0.11h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,11.27,13.79ZM8.36,10.93v0.71a0.34,0.34,0,0,1-.11.25A0.35,0.35,0,0,1,8,12H7.27A0.35,0.35,0,0,1,7,11.89a0.34,0.34,0,0,1-.11-0.25V10.93A0.34,0.34,0,0,1,7,10.68a0.35,0.35,0,0,1,.26-0.11H8a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,8.36,10.93Zm8.73,5.71v0.71a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H16a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V16.64a0.34,0.34,0,0,1,.11-0.25A0.35,0.35,0,0,1,16,16.29h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,17.09,16.64Zm-2.91-2.86V14.5a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H13.09a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V13.79a0.34,0.34,0,0,1,.11-0.25,0.35,0.35,0,0,1,.26-0.11h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,14.18,13.79Zm-2.91-2.86v0.71a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H10.18a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V10.93a0.34,0.34,0,0,1,.11-0.25,0.35,0.35,0,0,1,.26-0.11h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,11.27,10.93ZM8.36,8.07V8.79A0.34,0.34,0,0,1,8.26,9,0.35,0.35,0,0,1,8,9.14H7.27A0.35,0.35,0,0,1,7,9a0.34,0.34,0,0,1-.11-0.25V8.07A0.34,0.34,0,0,1,7,7.82a0.35,0.35,0,0,1,.26-0.11H8a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,8.36,8.07Zm8.73,5.71V14.5a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H16a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V13.79a0.34,0.34,0,0,1,.11-0.25A0.35,0.35,0,0,1,16,13.43h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,17.09,13.79Zm-2.91-2.86v0.71a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H13.09a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V10.93a0.34,0.34,0,0,1,.11-0.25,0.35,0.35,0,0,1,.26-0.11h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,14.18,10.93ZM11.27,8.07V8.79a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H10.18A0.35,0.35,0,0,1,9.93,9a0.34,0.34,0,0,1-.11-0.25V8.07a0.34,0.34,0,0,1,.11-0.25,0.35,0.35,0,0,1,.26-0.11h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,11.27,8.07ZM8.36,5.21V5.93a0.34,0.34,0,0,1-.11.25A0.35,0.35,0,0,1,8,6.29H7.27A0.35,0.35,0,0,1,7,6.18a0.34,0.34,0,0,1-.11-0.25V5.21A0.34,0.34,0,0,1,7,5a0.35,0.35,0,0,1,.26-0.11H8A0.35,0.35,0,0,1,8.26,5,0.34,0.34,0,0,1,8.36,5.21Zm8.73,5.71v0.71a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H16a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V10.93a0.34,0.34,0,0,1,.11-0.25A0.35,0.35,0,0,1,16,10.57h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,17.09,10.93ZM14.18,8.07V8.79a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H13.09A0.35,0.35,0,0,1,12.83,9a0.34,0.34,0,0,1-.11-0.25V8.07a0.34,0.34,0,0,1,.11-0.25,0.35,0.35,0,0,1,.26-0.11h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,14.18,8.07ZM11.27,5.21V5.93a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H10.18a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V5.21A0.34,0.34,0,0,1,9.93,5a0.35,0.35,0,0,1,.26-0.11h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,11.27,5.21Zm5.82,2.86V8.79A0.34,0.34,0,0,1,17,9a0.35,0.35,0,0,1-.26.11H16A0.35,0.35,0,0,1,15.74,9a0.34,0.34,0,0,1-.11-0.25V8.07a0.34,0.34,0,0,1,.11-0.25A0.35,0.35,0,0,1,16,7.71h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,17.09,8.07ZM14.18,5.21V5.93a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H13.09a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V5.21A0.34,0.34,0,0,1,12.83,5a0.35,0.35,0,0,1,.26-0.11h0.73a0.35,0.35,0,0,1,.26.11A0.34,0.34,0,0,1,14.18,5.21Zm2.91,0V5.93a0.34,0.34,0,0,1-.11.25,0.35,0.35,0,0,1-.26.11H16a0.35,0.35,0,0,1-.26-0.11,0.34,0.34,0,0,1-.11-0.25V5.21A0.34,0.34,0,0,1,15.74,5,0.35,0.35,0,0,1,16,4.86h0.73A0.35,0.35,0,0,1,17,5,0.34,0.34,0,0,1,17.09,5.21ZM14.18,20.57h4.36V3.43H5.45V20.57H9.82v-2.5a0.34,0.34,0,0,1,.11-0.25,0.35,0.35,0,0,1,.26-0.11h3.64a0.35,0.35,0,0,1,.26.11,0.34,0.34,0,0,1,.11.25v2.5h0ZM20,2.71V21.29a0.68,0.68,0,0,1-.22.5,0.7,0.7,0,0,1-.51.21H4.73a0.71,0.71,0,0,1-.51-0.21A0.68,0.68,0,0,1,4,21.29V2.71a0.68,0.68,0,0,1,.22-0.5A0.7,0.7,0,0,1,4.73,2H19.27a0.71,0.71,0,0,1,.51.21A0.68,0.68,0,0,1,20,2.71Z\"/></g>";
	
	var phone = exports.phone = "<path d=\"M21,17.2c0,0.2,0,0.5-0.1,0.9c-0.1,0.4-0.2,0.7-0.3,0.9c-0.2,0.4-0.7,0.9-1.6,1.4c-0.8,0.4-1.6,0.7-2.4,0.7\n\tc-0.2,0-0.5,0-0.7,0c-0.2,0-0.5-0.1-0.7-0.2s-0.5-0.1-0.6-0.2c-0.1,0-0.4-0.1-0.7-0.3c-0.3-0.1-0.5-0.2-0.6-0.2\n\tc-0.8-0.3-1.6-0.7-2.2-1.1c-1.1-0.7-2.2-1.6-3.4-2.8S5.6,14,4.9,12.9c-0.4-0.7-0.8-1.4-1.1-2.2c0-0.1-0.1-0.3-0.2-0.6\n\tC3.5,9.7,3.4,9.5,3.4,9.3S3.3,9,3.2,8.7C3.1,8.5,3.1,8.2,3,8c0-0.2,0-0.4,0-0.7C3,6.5,3.2,5.8,3.7,5C4.1,4.1,4.6,3.6,5,3.4\n\tc0.2-0.1,0.5-0.2,0.9-0.3C6.3,3,6.6,3,6.8,3C6.9,3,7,3,7.1,3c0.2,0.1,0.4,0.4,0.7,1C7.8,4.2,8,4.4,8.1,4.7C8.3,5,8.4,5.3,8.6,5.5\n\tC8.7,5.8,8.8,6,9,6.2c0,0,0.1,0.1,0.2,0.3C9.3,6.7,9.4,6.8,9.5,7s0.1,0.2,0.1,0.4c0,0.2-0.1,0.4-0.4,0.6C8.9,8.2,8.7,8.5,8.4,8.7\n\tC8.1,8.9,7.8,9.1,7.6,9.4C7.4,9.6,7.2,9.8,7.2,9.9c0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.3S7.7,11,7.7,11\n\tc0.6,1.2,1.4,2.2,2.2,3s1.8,1.6,3,2.2c0,0,0.1,0.1,0.2,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.1,0.1,0.3,0.1c0.1,0,0.2,0.1,0.3,0.1\n\tc0.2,0,0.3-0.1,0.6-0.4c0.2-0.2,0.5-0.5,0.7-0.8c0.2-0.3,0.4-0.5,0.7-0.8c0.3-0.2,0.5-0.4,0.6-0.4c0.1,0,0.2,0,0.4,0.1\n\tc0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.3,0.2,0.3,0.2c0.2,0.1,0.4,0.3,0.7,0.4c0.2,0.1,0.5,0.3,0.8,0.4c0.3,0.2,0.5,0.3,0.7,0.4\n\tc0.6,0.3,0.9,0.5,1,0.7C21,17,21,17.1,21,17.2L21,17.2z\"/>";
	
	var storeVisit = exports.storeVisit = "<g>\n\t<g>\n\t\t<g id=\"Body_2_\">\n\t\t\t<g id=\"Body_3_\">\n\t\t\t\t<g>\n\t\t\t\t\t<path fill=\"#231F20\" d=\"M10.6,10.6h4.6c1-0.9,0-2,0-2h-3.9L8.5,5L2.4,6.7C1.8,7,2,7,2,7v4.3c0.9,0.9,1.8,0,1.8,0V8l2.5-0.7\n\t\t\t\t\t\tL2,21.6c1,0.9,1.8,0,1.8,0L7,14l2.1,3v4.6c0.9,0.9,1.8,0,1.8,0v-6.3l-2.5-3.7L9.2,9L10.6,10.6z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t\t<g id=\"Head_2_\">\n\t\t\t<g id=\"Head_3_\">\n\t\t\t\t<g>\n\t\t\t\t\t<ellipse fill=\"#231F20\" cx=\"9.9\" cy=\"3.5\" rx=\"1.6\" ry=\"1.5\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<path fill=\"#231F20\" d=\"M13,18.6v0.9c0,0.3,0.2,0.5,0.5,0.5H19c0,0,3,0,3-2.9l0-10.8c0,0,0-2.9-3-2.9c-2.3,0-4.5,0-5.5,0\n\t\tc-0.3,0-0.5,0.2-0.5,0.5v1c0,0.3,0.2,0.5,0.5,0.5H19c0,0,1,0,1,1s0,10.8,0,10.8s0,1-1,1c-0.8,0-4.1,0-5.5,0\n\t\tC13.2,18.1,13,18.3,13,18.6z\"/>\n</g>";
	
	var calendar = exports.calendar = "<path d=\"M20,4h-2V2.5C18,1.7,17.3,1,16.5,1h-1C14.7,1,14,1.7,14,2.5V4h-4V2.5C10,1.7,9.3,1,8.5,1h-1C6.7,1,6,1.7,6,2.5V4H4\n\tC2.9,4,2,4.9,2,6v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,20H4v-3h4V20z M8,16H4v-4h4V16z M8,11H4V8h4V11z\n\t M8.5,6c0,0.3-0.2,0.5-0.5,0.5C7.7,6.5,7.5,6.3,7.5,6V3c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5V6z M14,20h-4v-3h4V20z M14,16\n\th-4v-4h4V16z M14,11h-4V8h4V11z M15.5,6V3c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5v3c0,0.3-0.2,0.5-0.5,0.5\n\tC15.7,6.5,15.5,6.3,15.5,6z M20,20h-4v-3h4V20z M20,16h-4v-4h4V16z M20,11h-4V8h4V11z\"/>";
	
	var clock = exports.clock = "<path fill=\"#444444\" d=\"M14,7.4v6.2c0,0.1,0,0.2-0.1,0.3C13.8,14,13.7,14,13.6,14l-4.2,0c-0.1,0-0.2,0-0.3-0.1C9,13.8,9,13.7,9,13.6\n\tv-1.2c0-0.1,0-0.2,0.1-0.3C9.2,12,9.3,12,9.4,12l2.6,0V7.4c0-0.1,0-0.2,0.1-0.3C12.2,7,12.3,7,12.4,7h1.2c0.1,0,0.2,0,0.3,0.1\n\tC14,7.2,14,7.3,14,7.4L14,7.4z M19.1,12c0-1.3-0.3-2.5-1-3.6c-0.6-1.1-1.5-1.9-2.6-2.6c-1.1-0.6-2.3-1-3.6-1s-2.5,0.3-3.6,1\n\tS6.5,7.4,5.9,8.4s-1,2.3-1,3.6s0.3,2.5,1,3.6c0.6,1.1,1.5,1.9,2.6,2.6s2.3,1,3.6,1s2.5-0.3,3.6-1s1.9-1.5,2.6-2.6\n\tC18.8,14.5,19.1,13.3,19.1,12z M22,12c0,1.8-0.4,3.5-1.3,5c-0.9,1.5-2.1,2.7-3.6,3.6c-1.5,0.9-3.2,1.3-5,1.3s-3.5-0.4-5-1.3\n\tc-1.5-0.9-2.7-2.1-3.6-3.6S2,13.8,2,12c0-1.8,0.4-3.5,1.3-5S5.4,4.2,7,3.3S10.2,2,12,2c1.8,0,3.5,0.4,5,1.3c1.5,0.9,2.7,2.1,3.6,3.6\n\tC21.6,8.5,22,10.2,22,12z\"/>";

/***/ },
/* 12 */
/*!********************************************!*\
  !*** ./src/components/ph-icon/ph-icon.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    border: 1px solid grey;\n    width: 50px;\n    height: 50px;\n    font-size: 24px;\n}\n\nph-icon {\n    border: 1px solid grey;\n    width: 50px;\n    height: 50px;\n    font-size: 24px;\n}\n\n\n", ""]);
	
	// exports


/***/ },
/* 13 */
/*!*******************************************************!*\
  !*** ./src/components/ph-icon-badge/ph-icon-badge.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhIconBadge = undefined;
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phIconBadge = __webpack_require__(/*! ./ph-icon-badge.css */ 14);
	
	var _phIconBadge2 = _interopRequireDefault(_phIconBadge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhIconBadge = exports.PhIconBadge = function (_PhotonComponent) {
	    _inherits(PhIconBadge, _PhotonComponent);
	
	    function PhIconBadge() {
	        _classCallCheck(this, PhIconBadge);
	
	        return _possibleConstructorReturn(this, (PhIconBadge.__proto__ || Object.getPrototypeOf(PhIconBadge)).apply(this, arguments));
	    }
	
	    _createClass(PhIconBadge, [{
	        key: 'initialize',
	        value: function initialize() {
	            _get(PhIconBadge.prototype.__proto__ || Object.getPrototypeOf(PhIconBadge.prototype), 'initialize', this).call(this);
	            this.sizes = {
	                'small': 10,
	                'medium': 14,
	                'large': 18
	            };
	        }
	    }, {
	        key: 'configurePropRules',
	        value: function configurePropRules(propRules) {
	            propRules.bordered.nullTo('false');
	            propRules.size.nullTo('large');
	            propRules.status.nullTo('primary');
	        }
	    }, {
	        key: 'getContent',
	        value: function getContent() {
	            var props = this.props;
	            var size = this.sizes[props.size];
	            var styles = {
	                fontSize: '0',
	                lineHeight: '0'
	            };
	
	            _photonCore.vdom.elementOpen('ph-icon', null, null, 'name', props.icon, 'size', size, 'style', styles);
	
	            return _photonCore.vdom.elementClose('ph-icon');
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            _photonCore.vdom.elementOpen('div', null, null, 'id', 'container');
	
	            _photonCore.vdom.elementOpen('style');
	
	            _renderArbitrary(_phIconBadge2.default.toString());
	
	            _photonCore.vdom.elementClose('style');
	
	            _renderArbitrary(self.getContent());
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return 'ph-icon-badge';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                bordered: _photonCore.PropTypes.bool().attribute(),
	                icon: _photonCore.PropTypes.string().attribute(),
	                status: _photonCore.PropTypes.string().nullable().attribute().reflect(),
	                size: _photonCore.PropTypes.string().nullable().attribute().reflect()
	            };
	        }
	    }]);
	
	    return PhIconBadge;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhIconBadge);

/***/ },
/* 14 */
/*!********************************************************!*\
  !*** ./src/components/ph-icon-badge/ph-icon-badge.css ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: inline-block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 50%;\n    font-family: Roboto;\n    fill: white;\n    border: 2px solid #1D86B8;\n    background-color: #1D86B8;\n}\n\n:host #container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n:host([size=\"small\"]) {\n    width: 16px;\n    height: 16px;\n}\n\n:host([size=\"medium\"]) {\n    width: 34px;\n    height: 34px;\n}\n\n:host([size=\"large\"]) {\n    width: 44px;\n    height: 44px;\n}\n\n:host([status=\"overdue\"]) {\n    background-color: #CF5C60;\n    border-color:#CF5C60;\n}\n\n:host([status=\"complete\"]) {\n    background-color: #4AB471;\n    border-color: #4AB471;\n}\n\n:host([status=\"open\"]) {\n    background-color: #F3AE4E;\n    border-color: #F3AE4E;\n}\n\n:host([status=\"disabled\"]) {\n    background-color: #C7C7C7;\n    border-color:#C7C7C7;\n}\n\n:host([bordered=\"true\"]) {\n    background-color: white;\n    fill: #898989;\n}\n\n\n\n\n\nph-icon-badge {\n    display: inline-block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 50%;\n    font-family: Roboto;\n    fill: white;\n    border: 2px solid #1D86B8;\n    background-color: #1D86B8;\n}\n\nph-icon-badge #container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nph-icon-badge[size=\"small\"] {\n    width: 16px;\n    height: 16px;\n}\n\nph-icon-badge[size=\"medium\"] {\n    width: 34px;\n    height: 34px;\n}\n\nph-icon-badge[size=\"large\"] {\n    width: 44px;\n    height: 44px;\n}\n\nph-icon-badge[status=\"overdue\"] {\n    background-color: #CF5C60;\n    border-color:#CF5C60;\n}\n\nph-icon-badge[status=\"complete\"] {\n    background-color: #4AB471;\n    border-color: #4AB471;\n}\n\nph-icon-badge[status=\"open\"] {\n    background-color: #F3AE4E;\n    border-color: #F3AE4E;\n}\n\nph-icon-badge[status=\"disabled\"] {\n    background-color: #C7C7C7;\n    border-color:#C7C7C7;\n}\n\nph-icon-badge[bordered=\"true\"] {\n    background-color: white;\n    fill: #898989;\n}\n", ""]);
	
	// exports


/***/ },
/* 15 */
/*!*********************************************!*\
  !*** ./src/components/ph-image/ph-image.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhImage = undefined;
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phImage = __webpack_require__(/*! ./ph-image.css */ 16);
	
	var _phImage2 = _interopRequireDefault(_phImage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhImage = exports.PhImage = function (_PhotonComponent) {
	    _inherits(PhImage, _PhotonComponent);
	
	    function PhImage() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, PhImage);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhImage.__proto__ || Object.getPrototypeOf(PhImage)).call.apply(_ref, [this].concat(args))), _this), _this.onSrcChange = function (newVal) {
	            //console.log('>>> onLabelsChange', newVal);
	            _this.reset();
	            _this.loading = !!newVal;
	        }, _this.onImgLoad = function (e) {
	            console.log('imgOnLoad', e);
	            //if (e.imgTag.src !== this.src) return;
	            _this.loading = false;
	            _this.loaded = true;
	            _this.error = false;
	            _this.mustRender();
	        }, _this.onImgError = function (e) {
	            console.log('imgOnError', e);
	            // if (imgTag.src !== this.src) return;
	            _this.reset();
	            _this.loading = false;
	            _this.loaded = false;
	            _this.error = true;
	            _this.mustRender();
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(PhImage, [{
	        key: 'configurePropRules',
	        value: function configurePropRules(propRules) {
	            //console.log(this.elem.tagName, 'PhImage.configurePropRules');
	            propRules.src.onChange(this.onSrcChange);
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.loading = false;
	            this.loaded = false;
	            this.error = false;
	        }
	    }, {
	        key: 'getSrc',
	        value: function getSrc() {
	            return this.props.preventLoad ? undefined : this.props.src;
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            var props = self.props;
	            // console.log('PhImage.render', props);
	
	            _photonCore.vdom.elementOpen('div');
	
	            _photonCore.vdom.elementOpen('style');
	
	            _renderArbitrary(_phImage2.default.toString());
	
	            _photonCore.vdom.elementClose('style');
	
	            _photonCore.vdom.elementOpen('div', null, null, 'style', { backgroundImage: self.getSrc() ? 'url("' + props.src + '")' : undefined,
	                backgroundSize: props.sizing,
	                backgroundPosition: props.sizing ? props.position : undefined,
	                backgroundRepeat: props.sizing ? 'no-repeat' : undefined
	            }, 'hidden', self.computeImgDivHidden(), 'aria-hidden', self.computeImgDivARIAHidden(), 'aria-label', self.computeImgDivARIALabel(), 'id', 'sizedImgDiv', 'role', 'img');
	
	            _photonCore.vdom.elementClose('div');
	
	            _photonCore.vdom.elementVoid('img', null, null, 'src', self.getSrc(), 'alt', props.alt, 'hidden', self.computeImgHidden(), 'onload', self.onImgLoad, 'onerror', self.onImgError, 'id', 'img');
	
	            _photonCore.vdom.elementOpen('div', null, null, 'hidden', self.computePlaceholderHidden(), 'class', self.computePlaceholderClassName(), 'style', {
	                backgroundImage: self.hasPlaceholder() ? 'url("' + self.getPlaceholder() + '")' : undefined,
	                backgroundSize: props.sizing,
	                backgroundPosition: props.sizing ? props.position : undefined,
	                backgroundRepeat: props.sizing ? 'no-repeat' : undefined
	            }, 'id', 'placeholder');
	
	            _photonCore.vdom.elementClose('div');
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }, {
	        key: 'computePlaceholderHidden',
	        value: function computePlaceholderHidden() {
	            if (!this.props.preload || !this.props.fade && !this.loading && this.loaded) {
	                return true;
	            } else {
	                return undefined;
	            }
	        }
	    }, {
	        key: 'computePlaceholderClassName',
	        value: function computePlaceholderClassName() {
	            return this.props.preload && this.props.fade && !this.loading && this.loaded ? 'faded-out' : '';
	        }
	    }, {
	        key: 'computeImgDivHidden',
	        value: function computeImgDivHidden() {
	            return !this.props.sizing;
	        }
	    }, {
	        key: 'computeImgDivARIAHidden',
	        value: function computeImgDivARIAHidden() {
	            return this.props.alt === '' ? 'true' : undefined;
	        }
	    }, {
	        key: 'computeImgDivARIALabel',
	        value: function computeImgDivARIALabel() {
	            if (this.props.alt !== null) {
	                return this.props.alt;
	            }
	
	            if (this.props.src === '') {
	                return '';
	            }
	            //return something meaningful here.
	        }
	    }, {
	        key: 'computeImgHidden',
	        value: function computeImgHidden() {
	            return !!this.props.sizing;
	        }
	    }, {
	        key: 'hasPlaceholder',
	        value: function hasPlaceholder() {
	            return this.props.placeholder != null;
	        }
	    }, {
	        key: 'getPlaceholder',
	        value: function getPlaceholder() {
	            if (this.props.placeholder) {
	                return this.props.placeholder;
	            }
	            return "data:image/gif;base64,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lxogusTFxoq8wMrLsCLHz9C6yczU1Zgn0dnapdPW3t7D2+Ljht3f58sKD+Ts4+bo8L4G7fTZ7/H4rgOj9f3F9/kCbirgr2AugAITWmpgsKEqhAoj2tngsKIpiBITarDIEVLGj5c6ikQGsqSkASNTljNZkqLKl6tYgmQIUyVGmecI1kx5E6e1fTt5+ow4IqjQoQLVGR3ZE6mycEs7NnXqy1lUkVOpwpp3FavWcwOgduWY9aumAAgkjGVqVlkEAkP/RK09aikGgbt48+odgqCv37+ARRwYTLiwYRAJEitezDjE3MeQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEM1Ro4YUYZqhhgHV06OGHIIYoIocilmiihySeqOKHRaS44ootAvjijDH+N+OLNfp344ouuLijiEn4+COIQco4ZIlF2ngk/5BCLlkHDk0uuUWUR05ppJMfWqkklh5qqSOXHjJB5ZA9jPljmVeCieaWapq5IxBu3ghnmlzOyWadcc4IRp4vysDnin7SiWWgdw76p4poHHpiDoqayKigTj5aaKSNlghFpSKmgGmImkK6ZKeTfropiDCM+mGpnh6JaqiqmuphG652eEOsdcya6pC2soorrU/Q2oKvwN7646/C7qgErUIgq2yxNybL7IxY0LqDtNQ++2IZtHqQ7bbWrqhttypiQCsE45YL7onknmviBLRe0O676pbobrwi1kJviAKCiWKARehLg4BH6HuEgDLoS+h/LehLLIAMBMFlEAwMmAaXaRBYgDcLTrqg04BNONnEgVocqUWCKfwIKoJN9LsiDR8zuAALDpdoAwsLQMiAEjLosEQdS+gghxIRJxgIACH5BAUKAHcALFoA7gAUAYUAAAf/gHeCg4SFhoeIiYqLjI2Oj5CRkpOIDACUmJmam5ydnp+gnxYBDhyhp6ipqqusrYQVdrEoHa61tre4uZ0Xsb0BRhS6wsPExawADr3KChOXxs/Q0dKIJcrWdhsr09vc3bYPCtfXJhbe5ufomRDi4gEiAunx8vODCQHs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";
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return 'ph-image';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                disabled: _photonCore.PropTypes.bool().attribute(),
	                src: _photonCore.PropTypes.string().attribute(),
	                alt: _photonCore.PropTypes.string().attribute(),
	                sizing: _photonCore.PropTypes.string().attribute(),
	                position: _photonCore.PropTypes.string().attribute(),
	                preload: _photonCore.PropTypes.bool().attribute().reflect(),
	                preventLoad: _photonCore.PropTypes.bool().attribute().reflect(),
	                fade: _photonCore.PropTypes.bool().attribute().reflect(),
	                placeholder: _photonCore.PropTypes.string().attribute(),
	                width: _photonCore.PropTypes.number().attribute(),
	                height: _photonCore.PropTypes.number().attribute()
	            };
	        }
	    }]);
	
	    return PhImage;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhImage);

/***/ },
/* 16 */
/*!**********************************************!*\
  !*** ./src/components/ph-image/ph-image.css ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: inline-block;\n    overflow: hidden;\n    position: relative;\n}\n#sizedImgDiv {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: none;\n}\n#img {\n    display: block;\n    width:  auto;\n    height: auto;\n}\n:host([sizing]) #sizedImgDiv {\n    display: block;\n}\n:host([sizing]) #img {\n    display: none;\n}\n#placeholder {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: inherit;\n    opacity: 1;\n}\n#placeholder.faded-out {\n    transition: opacity 0.5s linear;\n    opacity: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 17 */
/*!***********************************************************!*\
  !*** ./src/components/ph-icon-svg-img/ph-icon-svg-img.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _iconAssets = __webpack_require__(/*! ./icon-assets.js */ 18);
	
	var iconset = _interopRequireWildcard(_iconAssets);
	
	var _phIcon = __webpack_require__(/*! ./ph-icon.css */ 19);
	
	var _phIcon2 = _interopRequireDefault(_phIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhIconSvgImg = function (_PhotonComponent) {
	    _inherits(PhIconSvgImg, _PhotonComponent);
	
	    function PhIconSvgImg() {
	        _classCallCheck(this, PhIconSvgImg);
	
	        return _possibleConstructorReturn(this, (PhIconSvgImg.__proto__ || Object.getPrototypeOf(PhIconSvgImg)).call(this));
	    }
	
	    _createClass(PhIconSvgImg, [{
	        key: 'configurePropRules',
	        value: function configurePropRules(propRules) {
	            propRules.size.nullTo(24);
	            this.useShadowDom = false;
	            this.IDom = false;
	            // propRules.icon.onChange(this.onIconChanged);
	            // propRules.src.onChange(this.onSrcChanged);
	        }
	    }, {
	        key: 'getContent',
	        value: function getContent(self) {
	            var props = this.props;
	            if (props.icon) {
	                _photonCore.vdom.elementOpen('svg', null, null, 'width', props.size, 'height', props.size, 'xmlns', 'http://www.w3.org/2000/svg', 'xmlnsXlink', 'http://www.w3.org/1999/xlink', 'viewBox', '0 0 24 24', 'preserveAspectRatio', 'xMidYMid meet');
	
	                _renderArbitrary(self.renderTagDangerously('g', {}, iconset[props.icon]));
	
	                return _photonCore.vdom.elementClose('svg');
	            } else if (props.src) {
	                _photonCore.vdom.elementOpen('img', null, null, 'src', props.src, 'width', props.size, 'height', props.size);
	
	                return _photonCore.vdom.elementClose('img');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            var props = self.props;
	            var style = { width: props.size + 'px', height: props.size + 'px' };
	            self.elem.style = style;
	
	            _photonCore.vdom.elementOpen('div', null, null, 'style', style);
	
	            _photonCore.vdom.elementOpen('style');
	
	            _renderArbitrary(_phIcon2.default.toString());
	
	            _photonCore.vdom.elementClose('style');
	
	            _renderArbitrary(self.getContent(self));
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return 'ph-icon-svg-img';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                icon: _photonCore.PropTypes.string().nullable().attribute(),
	                src: _photonCore.PropTypes.string().nullable().attribute(),
	                size: _photonCore.PropTypes.number().nullable().attribute()
	            };
	        }
	    }]);
	
	    return PhIconSvgImg;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhIconSvgImg);

/***/ },
/* 18 */
/*!*******************************************************!*\
  !*** ./src/components/ph-icon-svg-img/icon-assets.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var usd = exports.usd = '<g><path d="M17,15.2c0,1.1-0.4,2.1-1.1,2.9c-0.7,0.8-1.6,1.3-2.8,1.5v2c0,0.1,0,0.2-0.1,0.3C13,22,12.9,22,12.8,22h-1.4' + 'c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.1-0.2-0.1-0.3v-2c-0.5-0.1-0.9-0.2-1.4-0.3c-0.4-0.2-0.8-0.3-1.1-0.5c-0.3-0.2-0.6-0.3-0.8-0.5' + 'c-0.2-0.2-0.4-0.3-0.5-0.4s-0.2-0.2-0.2-0.2c-0.1-0.2-0.1-0.3,0-0.5l1.1-1.5c0.1-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.3,0.1l0,0' + 'c0.8,0.7,1.7,1.2,2.6,1.4c0.3,0.1,0.5,0.1,0.8,0.1c0.6,0,1.1-0.2,1.5-0.5c0.4-0.3,0.7-0.8,0.7-1.4c0-0.2-0.1-0.4-0.2-0.6' + 'c-0.1-0.2-0.2-0.3-0.4-0.5s-0.3-0.3-0.6-0.4c-0.3-0.2-0.5-0.3-0.7-0.4c-0.2-0.1-0.5-0.2-0.9-0.4c-0.3-0.1-0.5-0.2-0.7-0.3' + 'c-0.2-0.1-0.4-0.2-0.7-0.3c-0.3-0.1-0.5-0.2-0.7-0.3C9.4,12.1,9.2,12,9,11.8c-0.2-0.2-0.4-0.3-0.6-0.5S8.1,11,7.9,10.8' + 's-0.3-0.4-0.4-0.6C7.5,10,7.4,9.7,7.3,9.4C7.3,9.2,7.2,8.9,7.2,8.6c0-1,0.4-1.9,1.1-2.7C9,5.1,9.9,4.6,11,4.4v-2' + 'c0-0.1,0-0.2,0.1-0.3C11.2,2,11.3,2,11.4,2h1.4c0.1,0,0.2,0,0.2,0.1c0.1,0.1,0.1,0.2,0.1,0.3v2c0.4,0,0.8,0.1,1.2,0.3' + 'C14.7,4.7,15,4.8,15.3,5c0.2,0.1,0.5,0.3,0.7,0.4s0.4,0.3,0.4,0.3s0.1,0.1,0.2,0.2c0.1,0.1,0.1,0.3,0.1,0.4l-0.9,1.6' + 'c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2,0-0.3-0.1c0,0-0.1-0.1-0.2-0.1s-0.2-0.2-0.4-0.3c-0.2-0.1-0.4-0.2-0.6-0.4' + 'c-0.2-0.1-0.5-0.2-0.8-0.3c-0.3-0.1-0.6-0.1-0.9-0.1c-0.7,0-1.2,0.2-1.7,0.5C10.2,7.6,10,8,10,8.5c0,0.2,0,0.4,0.1,0.5' + 'c0.1,0.2,0.2,0.3,0.3,0.5c0.2,0.1,0.3,0.3,0.4,0.4c0.1,0.1,0.3,0.2,0.6,0.3c0.3,0.1,0.5,0.2,0.6,0.3c0.2,0.1,0.4,0.2,0.8,0.3' + 'c0.4,0.1,0.7,0.3,0.9,0.4s0.5,0.2,0.8,0.4c0.3,0.2,0.6,0.3,0.8,0.5c0.2,0.1,0.4,0.3,0.7,0.6c0.2,0.2,0.4,0.5,0.6,0.7' + 'c0.1,0.2,0.2,0.5,0.3,0.9C17,14.5,17,14.9,17,15.2L17,15.2z"/></g>';
	
	var user = exports.user = '<g><path d="M21,18.6c0,1-0.3,1.9-0.9,2.5c-0.6,0.6-1.4,0.9-2.5,0.9H6.4c-1,0-1.9-0.3-2.5-0.9S3,19.7,3,18.6\n\tc0-0.5,0-0.9,0-1.3c0-0.4,0.1-0.9,0.2-1.4c0.1-0.5,0.2-1,0.3-1.4c0.1-0.4,0.3-0.9,0.5-1.3c0.2-0.4,0.5-0.8,0.8-1.1\n\tc0.3-0.3,0.7-0.5,1.1-0.7c0.4-0.2,0.9-0.3,1.4-0.3c0.1,0,0.3,0.1,0.5,0.3s0.6,0.4,1,0.6c0.4,0.2,0.8,0.4,1.4,0.6\n\tc0.6,0.2,1.1,0.3,1.7,0.3c0.6,0,1.1-0.1,1.7-0.3c0.6-0.2,1-0.4,1.4-0.6c0.4-0.2,0.7-0.4,1-0.6c0.3-0.2,0.5-0.3,0.5-0.3\n\tc0.5,0,1,0.1,1.4,0.3s0.8,0.4,1.1,0.7c0.3,0.3,0.6,0.6,0.8,1.1c0.2,0.4,0.4,0.8,0.5,1.3c0.1,0.4,0.2,0.9,0.3,1.4\n\tc0.1,0.5,0.1,1,0.2,1.4C21,17.7,21,18.2,21,18.6L21,18.6z M16.9,7c0,1.4-0.5,2.6-1.4,3.5S13.4,12,12,12s-2.5-0.5-3.5-1.5\n\tS7.1,8.4,7.1,7c0-1.4,0.5-2.6,1.4-3.5S10.6,2,12,2c1.4,0,2.5,0.5,3.5,1.5S16.9,5.6,16.9,7z"/></g>';
	
	var wrench = exports.wrench = '<g><path d="M6.4,18.4c0-0.2-0.1-0.4-0.2-0.5c-0.2-0.2-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.2,0.3-0.2,0.5\n\tc0,0.2,0.1,0.4,0.2,0.5c0.2,0.2,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2C6.3,18.8,6.4,18.6,6.4,18.4z M14.3,13.2L6,21.5\n\tC5.7,21.8,5.3,22,4.9,22c-0.4,0-0.8-0.2-1.1-0.5l-1.3-1.3C2.2,19.9,2,19.6,2,19.1c0-0.4,0.2-0.8,0.5-1.1l8.3-8.3\n\tc0.3,0.8,0.8,1.5,1.4,2.1S13.5,12.9,14.3,13.2z M22,8c0,0.3-0.1,0.7-0.3,1.3c-0.4,1.1-1.1,2-2,2.6c-1,0.7-2,1-3.2,1\n\tc-1.5,0-2.8-0.5-3.9-1.6c-1.1-1.1-1.6-2.4-1.6-3.9s0.5-2.8,1.6-3.9S15.1,2,16.6,2c0.5,0,1,0.1,1.5,0.2c0.5,0.1,1,0.3,1.3,0.6\n\tc0.1,0.1,0.2,0.2,0.2,0.3c0,0.1-0.1,0.3-0.2,0.3l-3.6,2.1v2.7l2.4,1.3c0,0,0.4-0.2,1-0.6c0.6-0.4,1.2-0.7,1.7-1\n\tc0.5-0.3,0.8-0.4,0.9-0.4c0.1,0,0.2,0,0.3,0.1C22,7.7,22,7.8,22,8L22,8z"/></g>';

/***/ },
/* 19 */
/*!****************************************************!*\
  !*** ./src/components/ph-icon-svg-img/ph-icon.css ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: -ms-inline-flexbox;\n    display: -webkit-inline-flex;\n    display: inline-flex;\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n    position: relative;\n    vertical-align: middle;\n    fill: #00FF00;\n    stroke:  none;\n}\n\nph-icon-svg-img {\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  position: relative;\n  vertical-align: middle;\n  fill: #00FF00;\n  stroke:  none;\n}\n", ""]);
	
	// exports


/***/ },
/* 20 */
/*!*****************************************!*\
  !*** ./src/components/ph-tfu/ph-tfu.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhTfu = undefined;
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phTfu = __webpack_require__(/*! ./ph-tfu.jss */ 21);
	
	var _phTfu2 = _interopRequireDefault(_phTfu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhTfu = exports.PhTfu = function (_PhotonComponent) {
	    _inherits(PhTfu, _PhotonComponent);
	
	    function PhTfu() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, PhTfu);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhTfu.__proto__ || Object.getPrototypeOf(PhTfu)).call.apply(_ref, [this].concat(args))), _this), _this.onTrueClick = function (e) {
	            // console.log('onTrueClick', e);
	            e.preventDefault();
	            // this.elem.value = (this.elem.value === true) ? null : true;
	            var newVal = _this.props.value === true ? null : true;
	            _this.emit('change', newVal);
	        }, _this.onFalseClick = function (e) {
	            // console.log('onFalseClick', e);
	            e.preventDefault();
	            // this.elem.value = (this.elem.value === false) ? null : false;
	            var newVal = _this.props.value === false ? null : false;
	            _this.emit('change', newVal);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(PhTfu, [{
	        key: 'configurePropRules',
	        value: function configurePropRules(propRules) {
	            //console.log(this.elem.tagName, 'PhTfu.configurePropRules');
	            propRules.labels.nullTo(['YYYY', 'NNN']);
	        }
	    }, {
	        key: 'getLabel',
	        value: function getLabel(index) {
	            var result = '';
	            // let labels:string[] = this.elem.labels;
	            var labels = this.props.labels;
	            if (labels && labels.length >= 2) {
	                result = labels[index];
	            }
	            //console.log('getLabel', index, result);
	            if (!result) {
	                result = '?labels missing?';
	                //result = index ? 'No' : 'Yes';
	            }
	            return result;
	        }
	    }, {
	        key: 'cycle',
	
	
	        //example of public method
	        value: function cycle(a, b) {
	            console.log('public method cycle', 'a:', a, 'b:', b);
	            if (this.props.value === true) {
	                this.elem.value = false;
	            } else if (this.props.value === false) {
	                this.elem.value = null;
	            } else if (this.props.value === null) {
	                this.elem.value = true;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            var props = self.props;
	            // console.log('PhTfu.render', props);
	
	            var a = "<b>InnerHTML</b>";
	
	            _photonCore.vdom.elementOpen('div', null, null, 'style', _phTfu2.default['.container']);
	
	            _photonCore.vdom.elementOpen('span');
	
	            _renderArbitrary(self.renderTagDangerously('div', { aa: 123, bb: 'test' }, a));
	
	            _photonCore.vdom.elementClose('span');
	
	            _photonCore.vdom.elementVoid('slot', null, null, 'name', 'a');
	
	            _photonCore.vdom.elementOpen('span', null, null, 'style', props.value === true ? _phTfu2.default['.selected'] : null, 'onclick', self.onTrueClick);
	
	            _renderArbitrary(self.getLabel(0));
	
	            _photonCore.vdom.elementClose('span');
	
	            _photonCore.vdom.elementVoid('slot', null, null, 'name', 'k');
	
	            _photonCore.vdom.elementOpen('span', null, null, 'style', props.value === false ? _phTfu2.default['.selected'] : null, 'onclick', self.onFalseClick);
	
	            _renderArbitrary(self.getLabel(1));
	
	            _photonCore.vdom.elementClose('span');
	
	            _photonCore.vdom.elementVoid('slot', null, null, 'name', 'r');
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }, {
	        key: 'publicMethods',
	        get: function get() {
	            return ['cycle'];
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return 'ph-tfu';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                value: _photonCore.PropTypes.bool().nullable().attribute().reflect('aria-value'),
	                labels: _photonCore.PropTypes.arrayOf('string').attribute().reflect('debug-labels')
	            };
	        }
	    }]);
	
	    return PhTfu;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhTfu);

/***/ },
/* 21 */
/*!******************************************!*\
  !*** ./src/components/ph-tfu/ph-tfu.jss ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = {":host":{"display":"inline-block"},".container":{"display":"inline-block","backgroundColor":"#f7f7f7","border":"1px solid grey"},".selected":{"fontWeight":"bold"}}

/***/ },
/* 22 */
/*!*******************************************!*\
  !*** ./src/components/ph-test/ph-test.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhTest = undefined;
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phTest = __webpack_require__(/*! ./ph-test.css */ 23);
	
	var _phTest2 = _interopRequireDefault(_phTest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhTest = exports.PhTest = function (_PhotonComponent) {
	    _inherits(PhTest, _PhotonComponent);
	
	    function PhTest() {
	        _classCallCheck(this, PhTest);
	
	        return _possibleConstructorReturn(this, (PhTest.__proto__ || Object.getPrototypeOf(PhTest)).apply(this, arguments));
	    }
	
	    _createClass(PhTest, [{
	        key: 'render',
	        value: function render(self) {
	            var props = self.props;
	            var formatVal = self.formatVal;
	
	            _photonCore.vdom.elementOpen('div');
	
	            _photonCore.vdom.elementOpen('style');
	
	            _renderArbitrary(_phTest2.default.toString());
	
	            _photonCore.vdom.elementClose('style');
	
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary('bool = ' + formatVal(props.bool));
	
	            _photonCore.vdom.elementClose('div');
	
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary('boolA = ' + formatVal(props.boolA));
	
	            _photonCore.vdom.elementClose('div');
	
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary('boolNA = ' + formatVal(props.boolNA));
	
	            _photonCore.vdom.elementClose('div');
	
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary('num = ' + formatVal(props.num));
	
	            _photonCore.vdom.elementClose('div');
	
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary('numA = ' + formatVal(props.numA));
	
	            _photonCore.vdom.elementClose('div');
	
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary('numNA = ' + formatVal(props.numNA));
	
	            _photonCore.vdom.elementClose('div');
	
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary('str = ' + formatVal(props.str));
	
	            _photonCore.vdom.elementClose('div');
	
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary('strA = ' + formatVal(props.strA));
	
	            _photonCore.vdom.elementClose('div');
	
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary('strNA = ' + formatVal(props.strNA));
	
	            _photonCore.vdom.elementClose('div');
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }, {
	        key: 'formatVal',
	        value: function formatVal(val) {
	            switch (typeof val === 'undefined' ? 'undefined' : _typeof(val)) {
	                case "string":
	                    return "'" + val + "'";
	                case "number":
	                case "boolean":
	                    return val.toString();
	                default:
	                    if (val === null) {
	                        return 'null';
	                    }
	                    return typeof val === 'undefined' ? 'undefined' : _typeof(val);
	            }
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return 'ph-test';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                bool: _photonCore.PropTypes.bool(),
	                boolA: _photonCore.PropTypes.bool().attribute().reflect(),
	                boolNA: _photonCore.PropTypes.bool().nullable().attribute().reflect(),
	
	                num: _photonCore.PropTypes.number(),
	                numA: _photonCore.PropTypes.number().attribute().reflect(),
	                numNA: _photonCore.PropTypes.number().nullable().attribute().reflect(),
	
	                str: _photonCore.PropTypes.string(),
	                strA: _photonCore.PropTypes.string().attribute().reflect(),
	                strNA: _photonCore.PropTypes.string().nullable().attribute().reflect()
	            };
	        }
	    }]);
	
	    return PhTest;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhTest);

/***/ },
/* 23 */
/*!********************************************!*\
  !*** ./src/components/ph-test/ph-test.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    /*display: block;*/\n}\n\n.container {\n    display: block;\n    background-color: #f7f7f7;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 24 */
/*!*********************************************************!*\
  !*** ./src/components/ph-test-tester/ph-test-tester.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhTestTester = undefined;
	
	var _jsxWrapper = function _jsxWrapper(func, args) {
	    var wrapper = args ? function wrapper() {
	        return func.apply(this, args);
	    } : func;
	    wrapper.__jsxDOMWrapper = true;
	    return wrapper;
	};
	
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phTestTester = __webpack_require__(/*! ./ph-test-tester.css */ 25);
	
	var _phTestTester2 = _interopRequireDefault(_phTestTester);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _wrapper = function _wrapper(_self$setPropVal$bind, _self$formatVal) {
	    _photonCore.vdom.elementOpen('button', null, null, 'onclick', _self$setPropVal$bind);
	
	    _renderArbitrary(_self$formatVal);
	
	    return _photonCore.vdom.elementClose('button');
	},
	    _wrapper2 = function _wrapper2(_self$setAttrVal$bind, _self$formatVal2) {
	    _photonCore.vdom.elementOpen('button', null, null, 'onclick', _self$setAttrVal$bind);
	
	    _renderArbitrary(_self$formatVal2);
	
	    return _photonCore.vdom.elementClose('button');
	};
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var propValues = [undefined, null, NaN, '', '0', '1', 'false', 'true', 0, 1, false, true];
	var attrValues = [undefined, null, 'NaN', '', '0', '1', 'false', 'true'];
	
	var PhTestTester = exports.PhTestTester = function (_PhotonComponent) {
	    _inherits(PhTestTester, _PhotonComponent);
	
	    _createClass(PhTestTester, null, [{
	        key: 'is',
	        get: function get() {
	            return 'ph-test-tester';
	        }
	    }]);
	
	    function PhTestTester() {
	        _classCallCheck(this, PhTestTester);
	
	        var _this = _possibleConstructorReturn(this, (PhTestTester.__proto__ || Object.getPrototypeOf(PhTestTester)).call(this));
	
	        _this.bool = null;
	        _this.boolA = false;
	        _this.boolNA = null;
	        _this.num = null;
	        _this.numA = -9;
	        _this.numNA = null;
	        _this.str = null;
	        _this.strA = 'Hi';
	        _this.strNA = null;
	        return _this;
	    }
	
	    _createClass(PhTestTester, [{
	        key: 'render',
	        value: function render(self) {
	            _photonCore.vdom.elementOpen('div');
	
	            _photonCore.vdom.elementOpen('style');
	
	            _renderArbitrary(_phTestTester2.default.toString());
	
	            _photonCore.vdom.elementClose('style');
	
	            _photonCore.vdom.elementVoid('br');
	
	            _photonCore.vdom.elementOpen('ph-test', null, null, 'bool', self.bool, 'bool-a', self.boolA, 'bool-n-a', self.boolNA, 'num', self.num, 'num-a', self.numA, 'num-n-a', self.numNA, 'str', self.str, 'str-a', self.strA, 'str-n-a', self.strNA, 'name', 'phTest');
	
	            _photonCore.vdom.elementClose('ph-test');
	
	            _photonCore.vdom.elementVoid('br');
	
	            _renderArbitrary(self.renderTestProp(self, 'bool'));
	
	            _renderArbitrary(self.renderTestProp(self, 'boolA'));
	
	            _renderArbitrary(self.renderTestAttr(self, 'bool-a'));
	
	            _renderArbitrary(self.renderTestProp(self, 'boolNA'));
	
	            _renderArbitrary(self.renderTestAttr(self, 'bool-n-a'));
	
	            _photonCore.vdom.elementVoid('br');
	
	            _renderArbitrary(self.renderTestProp(self, 'num'));
	
	            _renderArbitrary(self.renderTestProp(self, 'numA'));
	
	            _renderArbitrary(self.renderTestAttr(self, 'num-a'));
	
	            _renderArbitrary(self.renderTestProp(self, 'numNA'));
	
	            _renderArbitrary(self.renderTestAttr(self, 'num-n-a'));
	
	            _photonCore.vdom.elementVoid('br');
	
	            _renderArbitrary(self.renderTestProp(self, 'str'));
	
	            _renderArbitrary(self.renderTestProp(self, 'strA'));
	
	            _renderArbitrary(self.renderTestAttr(self, 'str-a'));
	
	            _renderArbitrary(self.renderTestProp(self, 'strNA'));
	
	            _renderArbitrary(self.renderTestAttr(self, 'str-n-a'));
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }, {
	        key: 'renderTestProp',
	        value: function renderTestProp(self, propName) {
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary(propName + ' ');
	
	            _renderArbitrary(propValues.map(function (val) {
	                return _jsxWrapper(_wrapper, [self.setPropVal.bind(self, propName, val), self.formatVal(val)]);
	            }));
	
	            _renderArbitrary(' ' + self.printProp(propName));
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }, {
	        key: 'renderTestAttr',
	        value: function renderTestAttr(self, attrName) {
	            _photonCore.vdom.elementOpen('div');
	
	            _renderArbitrary(attrName + ' ');
	
	            _renderArbitrary(attrValues.map(function (val) {
	                return _jsxWrapper(_wrapper2, [self.setAttrVal.bind(self, attrName, val), self.formatVal(val)]);
	            }));
	
	            _renderArbitrary(' ' + self.printAttr(attrName));
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }, {
	        key: 'setPropVal',
	        value: function setPropVal(propName, val) {
	            var phTest = this.phTest;
	            phTest[propName] = val;
	            this.mustRender();
	        }
	    }, {
	        key: 'setAttrVal',
	        value: function setAttrVal(attrName, val) {
	            var phTest = this.phTest;
	            if ((0, _photonCore.noValue)(val)) {
	                phTest.removeAttribute(attrName);
	            } else {
	                phTest.setAttribute(attrName, val);
	            }
	            this.mustRender();
	        }
	    }, {
	        key: 'printProp',
	        value: function printProp(propName) {
	            var phTest = this.phTest;
	            var val = phTest ? phTest[propName] : undefined;
	            return this.formatVal(val);
	        }
	    }, {
	        key: 'printAttr',
	        value: function printAttr(attrName) {
	            var phTest = this.phTest;
	            var val = phTest ? phTest.getAttribute(attrName) : undefined;
	            return this.formatVal(val);
	        }
	    }, {
	        key: 'formatVal',
	        value: function formatVal(val) {
	            switch (typeof val === 'undefined' ? 'undefined' : _typeof(val)) {
	                case 'string':
	                    return '\'' + val + '\'';
	                case 'number':
	                case 'boolean':
	                    return val.toString();
	                default:
	                    if (val === null) {
	                        return 'null';
	                    }
	                    return typeof val === 'undefined' ? 'undefined' : _typeof(val);
	            }
	        }
	    }, {
	        key: 'phTest',
	        get: function get() {
	            return this.getElementByTagName('ph-test');
	        }
	    }]);
	
	    return PhTestTester;
	}(_photonCore.PhotonComponent);
	
	(0, _photonCore.definePhoton)(PhTestTester);

/***/ },
/* 25 */
/*!**********************************************************!*\
  !*** ./src/components/ph-test-tester/ph-test-tester.css ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    /*display: block;*/\n}\n\n.container {\n    display: block;\n    background-color: #f7f7f7;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 26 */
/*!*********************************************************!*\
  !*** ./src/components/ph-user-avatar/ph-user-avatar.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhUserAvatar = undefined;
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _photonCore.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	};
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phAvatar = __webpack_require__(/*! ./../ph-avatar/ph-avatar */ 3);
	
	var _phUserAvatar = __webpack_require__(/*! ./ph-user-avatar.css */ 27);
	
	var _phUserAvatar2 = _interopRequireDefault(_phUserAvatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @Flow
	
	var PhUserAvatar = exports.PhUserAvatar = function (_PhAvatar) {
	    _inherits(PhUserAvatar, _PhAvatar);
	
	    function PhUserAvatar() {
	        _classCallCheck(this, PhUserAvatar);
	
	        return _possibleConstructorReturn(this, (PhUserAvatar.__proto__ || Object.getPrototypeOf(PhUserAvatar)).apply(this, arguments));
	    }
	
	    _createClass(PhUserAvatar, [{
	        key: 'getContent',
	        value: function getContent() {
	            var props = this.props;
	            if (props.isOrganization) {
	                var size = this.sizes[props.size];
	                var styles = {
	                    fontSize: '0'
	                };
	
	                _photonCore.vdom.elementOpen('ph-icon', null, null, 'size', size, 'style', styles, 'name', 'building');
	
	                return _photonCore.vdom.elementClose('ph-icon');
	            } else if (props.imageUrl) {
	                _photonCore.vdom.elementOpen('ph-image', null, null, 'src', props.imageUrl, 'sizing', 'cover');
	
	                return _photonCore.vdom.elementClose('ph-image');
	            } else if (props.initials) {
	                _photonCore.vdom.elementOpen('span');
	
	                _renderArbitrary(props.initials);
	
	                return _photonCore.vdom.elementClose('span');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render(self) {
	            _photonCore.vdom.elementOpen('div', null, null, 'id', 'container');
	
	            _photonCore.vdom.elementOpen('style');
	
	            _renderArbitrary(_phUserAvatar2.default.toString());
	
	            _photonCore.vdom.elementClose('style');
	
	            _renderArbitrary(self.getContent());
	
	            return _photonCore.vdom.elementClose('div');
	        }
	    }], [{
	        key: 'is',
	        get: function get() {
	            return 'ph-user-avatar';
	        }
	    }, {
	        key: 'propTypes',
	        get: function get() {
	            return {
	                imageUrl: _photonCore.PropTypes.string().nullable().attribute(),
	                initials: _photonCore.PropTypes.string().nullable().attribute(),
	                isOrganization: _photonCore.PropTypes.bool().nullable().attribute(),
	                size: _photonCore.PropTypes.string().nullable().attribute().reflect()
	            };
	        }
	    }]);
	
	    return PhUserAvatar;
	}(_phAvatar.PhAvatar);
	
	(0, _photonCore.definePhoton)(PhUserAvatar);

/***/ },
/* 27 */
/*!**********************************************************!*\
  !*** ./src/components/ph-user-avatar/ph-user-avatar.css ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: inline-block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 50%;\n    font-family: Roboto;\n    background-color: #F5F5F5;\n    color: #333333;\n    cursor: pointer;\n    text-transform: uppercase;\n}\n\n:host #container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n:host([size=\"small\"]) {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #C7C7C7;\n    font-size: 12px;\n}\n\n:host([size=\"medium\"]) {\n    width: 50px;\n    height: 50px;\n    border: 2px solid #C7C7C7;\n    font-size: 20px;\n}\n\n:host([size=\"large\"]) {\n    width: 70px;\n    height: 70px;\n    border: 2px solid #C7C7C7;\n    font-size: 32px;\n}\n\n:host([image-url][size=\"small\"]) ph-image {\n    width: 30px;\n    height: 30px;\n}\n\n:host([image-url][size=\"medium\"]) ph-image {\n    width: 50px;\n    height: 50px;\n}\n\n:host([image-url][size=\"large\"]) ph-image {\n    width: 70px;\n    height: 70px;\n}\n\nph-user-avatar {\n    display: inline-block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 50%;\n    font-family: Roboto;\n    background-color: #F5F5F5;\n    color: #333333;\n    cursor: pointer;\n    text-transform: uppercase;\n}\n\nph-user-avatar #container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nph-user-avatar[size=\"small\"] {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #C7C7C7;\n    font-size: 12px;\n}\n\nph-user-avatar[size=\"medium\"] {\n    width: 50px;\n    height: 50px;\n    border: 2px solid #C7C7C7;\n    font-size: 20px;\n}\n\nph-user-avatar[size=\"large\"] {\n    width: 70px;\n    height: 70px;\n    border: 2px solid #C7C7C7;\n    font-size: 32px;\n}\n", ""]);
	
	// exports


/***/ },
/* 28 */
/*!***********************************!*\
  !*** ./src/tags/sk-tfu/sk-tfu.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	    for (var prop in object) {
	        if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	    }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	    var type = typeof child;
	
	    if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	        _skatejs.vdom.text(child);
	    } else if (type === 'function' && child.__jsxDOMWrapper) {
	        child();
	    } else if (Array.isArray(child)) {
	        child.forEach(_renderArbitrary);
	    } else if (type === 'object' && String(child) === '[object Object]') {
	        _forOwn(child, _renderArbitrary);
	    }
	}; // @Flow
	
	
	var _skatejs = __webpack_require__(/*! skatejs */ 29);
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _skTfu = __webpack_require__(/*! ./sk-tfu.jss */ 32);
	
	var _skTfu2 = _interopRequireDefault(_skTfu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getLabel(elem, index) {
	    var result = '';
	    var labels = elem.labels;
	    if (labels && labels.length >= 2) {
	        result = labels[index];
	    }
	    //console.log('getLabel', index, result);
	    if (!result) {
	        result = '?labels missing?';
	        //result = index ? 'No' : 'Yes';
	    }
	    return result;
	}
	
	function onTrueClick(e) {
	    console.log('onTrueClick', e);
	    e.preventDefault();
	    // this.elem.value = (this.elem.value === true) ? null : true;
	    var newVal = this.value === 'true' ? null : 'true';
	    (0, _photonCore.emitCustomEvent)(this, 'change', { detail: newVal });
	}
	
	function onFalseClick(e) {
	    console.log('onFalseClick', e);
	    e.preventDefault();
	    // this.elem.value = (this.elem.value === false) ? null : false;
	    var newVal = this.value === 'false' ? null : 'false';
	    (0, _photonCore.emitCustomEvent)(this, 'change', { detail: newVal });
	}
	
	// //example of public method
	// cycle(a, b) {
	//     console.log('public method cycle', 'a:', a, 'b:',  b);
	//     if (this.props.value === true) {
	//         this.elem.value = false;
	//     }
	//     else if (this.props.value === false){
	//         this.elem.value = null;
	//     }
	//     else if (this.props.value === null){
	//         this.elem.value = true;
	//     }
	// }
	
	
	exports.default = (0, _skatejs.define)('sk-tfu', {
	    props: {
	        value: _skatejs.prop.string({
	            attribute: true
	        }),
	
	        labels: _skatejs.prop.array({
	            attribute: true,
	            default: ['YYYY', 'NNN']
	
	        })
	    },
	
	    created: function created(elem) {
	        elem.cycle = function (a, b) {
	            console.log('public method cycle', 'a:', a, 'b:', b);
	            if (elem.value === 'true') {
	                elem.value = 'false';
	            } else if (elem.value === 'false') {
	                elem.value = null;
	            } else if (elem.value === null) {
	                elem.value = 'true';
	            }
	        };
	    },
	
	
	    render: function render(elem) {
	        // let a = "<b>InnerHTML</b>";
	        // <span>{self.renderTagDangerously('div', {aa:123, bb:'test'}, a)}</span>
	        _skatejs.vdom.elementOpen('div', null, null, 'style', _skTfu2.default['.container']);
	
	        _skatejs.vdom.elementVoid('slot', null, null, 'name', 'a');
	
	        _skatejs.vdom.elementOpen('span', null, null, 'style', elem.value === 'true' ? _skTfu2.default['.selected'] : null, 'onclick', onTrueClick.bind(elem));
	
	        _renderArbitrary(getLabel(elem, 0));
	
	        _skatejs.vdom.elementClose('span');
	
	        _skatejs.vdom.elementVoid('slot', null, null, 'name', 'k');
	
	        _skatejs.vdom.elementOpen('span', null, null, 'style', elem.value === 'false' ? _skTfu2.default['.selected'] : null, 'onclick', onFalseClick.bind(elem));
	
	        _renderArbitrary(getLabel(elem, 1));
	
	        _skatejs.vdom.elementClose('span');
	
	        _skatejs.vdom.elementVoid('slot', null, null, 'name', 'r');
	
	        return _skatejs.vdom.elementClose('div');
	    }
	
	});
	module.exports = exports['default'];

/***/ },
/* 29 */
/*!*********************************!*\
  !*** ./~/skatejs/dist/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(/*! incremental-dom */ 30), __webpack_require__(/*! window-or-global */ 31)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'incremental-dom', 'window-or-global'], factory) :
	  (factory((global.skate = global.skate || {}),global.IncrementalDOM,global.windowOrGlobal));
	}(this, (function (exports,incrementalDom,root) {
	
	root = 'default' in root ? root['default'] : root;
	
	function keys() {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$enumOnly = _ref.enumOnly,
	      enumOnly = _ref$enumOnly === undefined ? false : _ref$enumOnly;
	
	  var listOfKeys = Object[enumOnly ? 'keys' : 'getOwnPropertyNames'](obj);
	  return typeof Object.getOwnPropertySymbols === 'function' ? listOfKeys.concat(Object.getOwnPropertySymbols(obj)) : listOfKeys;
	}
	
	// We are not using Object.assign if it is defined since it will cause problems when Symbol is polyfilled.
	// Apparently Object.assign (or any polyfill for this method) does not copy non-native Symbols.
	var assign = (function (obj) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  args.forEach(function (arg) {
	    return keys(arg).forEach(function (name) {
	      return obj[name] = arg[name];
	    });
	  }); // eslint-disable-line no-return-assign
	  return obj;
	});
	
	var empty = function (val) {
	  return typeof val === 'undefined' || val === null;
	};
	
	var alwaysUndefinedIfNotANumberOrNumber = function alwaysUndefinedIfNotANumberOrNumber(val) {
	  return isNaN(val) ? undefined : Number(val);
	};
	var alwaysUndefinedIfEmptyOrString = function alwaysUndefinedIfEmptyOrString(val) {
	  return empty(val) ? undefined : String(val);
	};
	
	function create(def) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    args.unshift({}, def);
	    return assign.apply(undefined, args);
	  };
	}
	
	var array = create({
	  coerce: function coerce(val) {
	    return Array.isArray(val) ? val : [val];
	  },
	  default: function _default() {
	    return [];
	  },
	  deserialize: JSON.parse,
	  serialize: JSON.stringify
	});
	
	var boolean = create({
	  coerce: function coerce(value) {
	    return !!value;
	  },
	  default: false,
	  deserialize: function deserialize(value) {
	    return !(value === null);
	  },
	  serialize: function serialize(value) {
	    return value ? '' : undefined;
	  }
	});
	
	var number = create({
	  default: 0,
	  coerce: alwaysUndefinedIfNotANumberOrNumber,
	  deserialize: alwaysUndefinedIfNotANumberOrNumber,
	  serialize: alwaysUndefinedIfNotANumberOrNumber
	});
	
	var string = create({
	  default: '',
	  coerce: alwaysUndefinedIfEmptyOrString,
	  deserialize: alwaysUndefinedIfEmptyOrString,
	  serialize: alwaysUndefinedIfEmptyOrString
	});
	
	var prop = Object.freeze({
		create: create,
		array: array,
		boolean: boolean,
		number: number,
		string: string
	});
	
	var connected = '____skate_connected';
	var created$1 = '____skate_created';
	var name = '____skate_name';
	var props = '____skate_props';
	var ref$1 = '____skate_ref';
	var renderer$1 = '____skate_renderer';
	var rendering = '____skate_rendering';
	var rendererDebounced = '____skate_rendererDebounced';
	var updated$1 = '____skate_updated';
	
	
	
	var symbols$1 = Object.freeze({
		name: name
	});
	
	function enter(object, props) {
	  var saved = {};
	  Object.keys(props).forEach(function (key) {
	    saved[key] = object[key];
	    object[key] = props[key];
	  });
	  return saved;
	}
	
	function exit(object, saved) {
	  assign(object, saved);
	}
	
	// Decorates a function with a side effect that changes the properties of an
	// object during its execution, and restores them after. There is no error
	// handling here, if the wrapped function throws an error, properties are not
	// restored and all bets are off.
	var propContext = function (object, props) {
	  return function (func) {
	    return function () {
	      var saved = enter(object, props);
	      var result = func.apply(undefined, arguments);
	      exit(object, saved);
	      return result;
	    };
	  };
	};
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	var asyncGenerator = function () {
	  function AwaitValue(value) {
	    this.value = value;
	  }
	
	  function AsyncGenerator(gen) {
	    var front, back;
	
	    function send(key, arg) {
	      return new Promise(function (resolve, reject) {
	        var request = {
	          key: key,
	          arg: arg,
	          resolve: resolve,
	          reject: reject,
	          next: null
	        };
	
	        if (back) {
	          back = back.next = request;
	        } else {
	          front = back = request;
	          resume(key, arg);
	        }
	      });
	    }
	
	    function resume(key, arg) {
	      try {
	        var result = gen[key](arg);
	        var value = result.value;
	
	        if (value instanceof AwaitValue) {
	          Promise.resolve(value.value).then(function (arg) {
	            resume("next", arg);
	          }, function (arg) {
	            resume("throw", arg);
	          });
	        } else {
	          settle(result.done ? "return" : "normal", result.value);
	        }
	      } catch (err) {
	        settle("throw", err);
	      }
	    }
	
	    function settle(type, value) {
	      switch (type) {
	        case "return":
	          front.resolve({
	            value: value,
	            done: true
	          });
	          break;
	
	        case "throw":
	          front.reject(value);
	          break;
	
	        default:
	          front.resolve({
	            value: value,
	            done: false
	          });
	          break;
	      }
	
	      front = front.next;
	
	      if (front) {
	        resume(front.key, front.arg);
	      } else {
	        back = null;
	      }
	    }
	
	    this._invoke = send;
	
	    if (typeof gen.return !== "function") {
	      this.return = undefined;
	    }
	  }
	
	  if (typeof Symbol === "function" && Symbol.asyncIterator) {
	    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
	      return this;
	    };
	  }
	
	  AsyncGenerator.prototype.next = function (arg) {
	    return this._invoke("next", arg);
	  };
	
	  AsyncGenerator.prototype.throw = function (arg) {
	    return this._invoke("throw", arg);
	  };
	
	  AsyncGenerator.prototype.return = function (arg) {
	    return this._invoke("return", arg);
	  };
	
	  return {
	    wrap: function (fn) {
	      return function () {
	        return new AsyncGenerator(fn.apply(this, arguments));
	      };
	    },
	    await: function (value) {
	      return new AwaitValue(value);
	    }
	  };
	}();
	
	
	
	
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	var get$1 = function get$1(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = Object.getOwnPropertyDescriptor(object, property);
	
	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get$1(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	
	
	var set$1 = function set$1(object, property, value, receiver) {
	  var desc = Object.getOwnPropertyDescriptor(object, property);
	
	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);
	
	    if (parent !== null) {
	      set$1(parent, property, value, receiver);
	    }
	  } else if ("value" in desc && desc.writable) {
	    desc.value = value;
	  } else {
	    var setter = desc.set;
	
	    if (setter !== undefined) {
	      setter.call(receiver, value);
	    }
	  }
	
	  return value;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};
	
	/* eslint no-plusplus: 0 */
	
	var customElements = root.customElements;
	
	var applyDefault = incrementalDom.attributes[incrementalDom.symbols.default];
	
	// A stack of children that corresponds to the current function helper being
	// executed.
	var stackChren = [];
	
	var $skip = '__skip';
	var $currentEventHandlers = '__events';
	var $stackCurrentHelperProps = '__props';
	
	// The current function helper in the stack.
	var stackCurrentHelper = void 0;
	
	// This is used for the Incremental DOM overrides to keep track of what args
	// to pass the main elementOpen() function.
	var overrideArgs = void 0;
	
	// The number of levels deep after skipping a tree.
	var skips = 0;
	
	var noop = function noop() {};
	
	// Adds or removes an event listener for an element.
	function applyEvent(elem, ename, newFunc) {
	  var events = elem[$currentEventHandlers];
	
	  if (!events) {
	    events = elem[$currentEventHandlers] = {};
	  }
	
	  var oldFunc = events[ename];
	
	  // Remove old listener so they don't double up.
	  if (oldFunc) {
	    elem.removeEventListener(ename, oldFunc);
	  }
	
	  // Bind new listener.
	  if (newFunc) {
	    elem.addEventListener(ename, events[ename] = newFunc);
	  }
	}
	
	var attributesContext = propContext(incrementalDom.attributes, defineProperty({
	  // Attributes that shouldn't be applied to the DOM.
	  key: noop,
	  statics: noop,
	
	  // Attributes that *must* be set via a property on all elements.
	  checked: incrementalDom.applyProp,
	  className: incrementalDom.applyProp,
	  disabled: incrementalDom.applyProp,
	  value: incrementalDom.applyProp,
	
	  // Ref handler.
	  ref: function ref(elem, name$$1, value) {
	    elem[ref$1] = value;
	  },
	
	
	  // Skip handler.
	  skip: function skip(elem, name$$1, value) {
	    if (value) {
	      elem[$skip] = true;
	    } else {
	      delete elem[$skip];
	    }
	  }
	}, incrementalDom.symbols.default, function (elem, name$$1, value) {
	  var _ref = customElements.get(elem.tagName) || {
	    props: {},
	    prototype: {}
	  },
	      props$$1 = _ref.props,
	      prototype = _ref.prototype;
	
	  // TODO when refactoring properties to not have to workaround the old
	  // WebKit bug we can remove the "name in props" check below.
	  //
	  // NOTE: That the "name in elem" check won't work for polyfilled custom
	  // elements that set a property that isn't explicitly specified in "props"
	  // or "prototype" unless it is added to the element explicitly as a
	  // property prior to passing the prop to the vdom function. For example, if
	  // it were added in a lifecycle callback because it wouldn't have been
	  // upgraded yet.
	  //
	  // We prefer setting props, so we do this if there's a property matching
	  // name that was passed. However, certain props on SVG elements are
	  // readonly and error when you try to set them.
	
	
	  if ((name$$1 in props$$1 || name$$1 in elem || name$$1 in prototype) && !('ownerSVGElement' in elem)) {
	    incrementalDom.applyProp(elem, name$$1, value);
	    return;
	  }
	
	  // Explicit false removes the attribute.
	  if (value === false) {
	    applyDefault(elem, name$$1);
	    return;
	  }
	
	  // Handle built-in and custom events.
	  if (name$$1.indexOf('on') === 0) {
	    var firstChar = name$$1[2];
	    var eventName = void 0;
	
	    if (firstChar === '-') {
	      eventName = name$$1.substring(3);
	    } else if (firstChar === firstChar.toUpperCase()) {
	      eventName = firstChar.toLowerCase() + name$$1.substring(3);
	    }
	
	    if (eventName) {
	      applyEvent(elem, eventName, value);
	      return;
	    }
	  }
	
	  applyDefault(elem, name$$1, value);
	}));
	
	function resolveTagName(tname) {
	  // If the tag name is a function, a Skate constructor or a standard function
	  // is supported.
	  //
	  // - If a Skate constructor, the tag name is extracted from that.
	  // - If a standard function, it is used as a helper.
	  if (typeof tname === 'function') {
	    return tname[name] || tname;
	  }
	
	  // All other tag names are just passed through.
	  return tname;
	}
	
	// Incremental DOM's elementOpen is where the hooks in `attributes` are applied,
	// so it's the only function we need to execute in the context of our attributes.
	var elementOpen$1 = attributesContext(incrementalDom.elementOpen);
	
	function elementOpenStart(tag) {
	  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var statics = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	  overrideArgs = [tag, key, statics];
	}
	
	function elementOpenEnd() {
	  var node = newElementOpen.apply(undefined, toConsumableArray(overrideArgs)); // eslint-disable-line no-use-before-define
	  overrideArgs = null;
	  return node;
	}
	
	function wrapIdomFunc(func) {
	  var tnameFuncHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	
	  return function wrap() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    args[0] = resolveTagName(args[0]);
	    stackCurrentHelper = null;
	    if (typeof args[0] === 'function') {
	      // If we've encountered a function, handle it according to the type of
	      // function that is being wrapped.
	      stackCurrentHelper = args[0];
	      return tnameFuncHandler.apply(undefined, args);
	    } else if (stackChren.length) {
	      // We pass the wrap() function in here so that when it's called as
	      // children, it will queue up for the next stack, if there is one.
	      stackChren[stackChren.length - 1].push([wrap, args]);
	    } else {
	      if (func === elementOpen$1) {
	        if (skips) {
	          return ++skips;
	        }
	
	        var elem = func.apply(undefined, args);
	
	        if (elem[$skip]) {
	          ++skips;
	        }
	
	        return elem;
	      }
	
	      if (func === incrementalDom.elementClose) {
	        if (skips === 1) {
	          incrementalDom.skip();
	        }
	
	        // We only want to skip closing if it's not the last closing tag in the
	        // skipped tree because we keep the element that initiated the skpping.
	        if (skips && --skips) {
	          return;
	        }
	
	        var _elem = func.apply(undefined, args);
	        var ref$$1 = _elem[ref$1];
	
	        // We delete so that it isn't called again for the same element. If the
	        // ref changes, or the element changes, this will be defined again.
	        delete _elem[ref$1];
	
	        // Execute the saved ref after esuring we've cleand up after it.
	        if (typeof ref$$1 === 'function') {
	          ref$$1(_elem);
	        }
	
	        return _elem;
	      }
	
	      // We must call elementOpenStart and elementOpenEnd even if we are
	      // skipping because they queue up attributes and then call elementClose.
	      if (!skips || func === elementOpenStart || func === elementOpenEnd) {
	        return func.apply(undefined, args);
	      }
	    }
	  };
	}
	
	function newAttr() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  if (stackCurrentHelper) {
	    stackCurrentHelper[$stackCurrentHelperProps][args[0]] = args[1];
	  } else if (stackChren.length) {
	    stackChren[stackChren.length - 1].push([newAttr, args]);
	  } else {
	    overrideArgs.push(args[0]);
	    overrideArgs.push(args[1]);
	  }
	}
	
	function stackOpen(tname, key, statics) {
	  var props$$1 = { key: key, statics: statics };
	
	  for (var _len3 = arguments.length, attrs = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
	    attrs[_key3 - 3] = arguments[_key3];
	  }
	
	  for (var a = 0; a < attrs.length; a += 2) {
	    props$$1[attrs[a]] = attrs[a + 1];
	  }
	  tname[$stackCurrentHelperProps] = props$$1;
	  stackChren.push([]);
	}
	
	function stackClose(tname) {
	  var chren = stackChren.pop();
	  var props$$1 = tname[$stackCurrentHelperProps];
	  delete tname[$stackCurrentHelperProps];
	  var elemOrFn = tname(props$$1, function () {
	    return chren.forEach(function (args) {
	      return args[0].apply(args, toConsumableArray(args[1]));
	    });
	  });
	  return typeof elemOrFn === 'function' ? elemOrFn() : elemOrFn;
	}
	
	// Incremental DOM overrides
	// -------------------------
	
	// We must override internal functions that call internal Incremental DOM
	// functions because we can't override the internal references. This means
	// we must roughly re-implement their behaviour. Luckily, they're fairly
	// simple.
	var newElementOpenStart = wrapIdomFunc(elementOpenStart, stackOpen);
	var newElementOpenEnd = wrapIdomFunc(elementOpenEnd);
	
	// Standard open / closed overrides don't need to reproduce internal behaviour
	// because they are the ones referenced from *End and *Start.
	var newElementOpen = wrapIdomFunc(elementOpen$1, stackOpen);
	var newElementClose = wrapIdomFunc(incrementalDom.elementClose, stackClose);
	
	// Ensure we call our overridden functions instead of the internal ones.
	function newElementVoid(tag) {
	  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }
	
	  newElementOpen.apply(undefined, [tag].concat(args));
	  return newElementClose(tag);
	}
	
	// Text override ensures their calls can queue if using function helpers.
	var newText = wrapIdomFunc(incrementalDom.text);
	
	// Convenience function for declaring an Incremental DOM element using
	// hyperscript-style syntax.
	function element(tname, attrs) {
	  var atype = typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs);
	
	  // If attributes are a function, then they should be treated as children.
	
	  for (var _len5 = arguments.length, chren = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
	    chren[_key5 - 2] = arguments[_key5];
	  }
	
	  if (atype === 'function' || atype === 'string' || atype === 'number') {
	    chren.unshift(attrs);
	  }
	
	  // Ensure the attributes are an object. Null is considered an object so we
	  // have to test for this explicitly.
	  if (attrs === null || atype !== 'object') {
	    attrs = {};
	  }
	
	  // We open the element so we can set attrs after.
	  newElementOpenStart(tname, attrs.key, attrs.statics);
	
	  // Delete so special attrs don't actually get set.
	  delete attrs.key;
	  delete attrs.statics;
	
	  // Set attributes.
	  Object.keys(attrs).forEach(function (name$$1) {
	    return newAttr(name$$1, attrs[name$$1]);
	  });
	
	  // Close before we render the descendant tree.
	  newElementOpenEnd(tname);
	
	  chren.forEach(function (ch) {
	    var ctype = typeof ch === 'undefined' ? 'undefined' : _typeof(ch);
	    if (ctype === 'function') {
	      ch();
	    } else if (ctype === 'string' || ctype === 'number') {
	      newText(ch);
	    } else if (Array.isArray(ch)) {
	      ch.forEach(function (sch) {
	        return sch();
	      });
	    }
	  });
	
	  return newElementClose(tname);
	}
	
	// Even further convenience for building a DSL out of JavaScript functions or hooking into standard
	// transpiles for JSX (React.createElement() / h).
	function builder() {
	  for (var _len6 = arguments.length, tags = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    tags[_key6] = arguments[_key6];
	  }
	
	  if (tags.length === 0) {
	    return function () {
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	
	      return element.bind.apply(element, [null].concat(args));
	    };
	  }
	  return tags.map(function (tag) {
	    return function () {
	      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
	      }
	
	      return element.bind.apply(element, [null, tag].concat(args));
	    };
	  });
	}
	
	
	
	var vdom = Object.freeze({
		element: element,
		builder: builder,
		attr: newAttr,
		elementClose: newElementClose,
		elementOpen: newElementOpen,
		elementOpenEnd: newElementOpenEnd,
		elementOpenStart: newElementOpenStart,
		elementVoid: newElementVoid,
		text: newText
	});
	
	var data = function (element) {
	  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  var data = element.__SKATE_DATA || (element.__SKATE_DATA = {});
	  return namespace && (data[namespace] || (data[namespace] = {})) || data; // eslint-disable-line no-mixed-operators
	};
	
	var nativeHints = ['native code', '[object MutationObserverConstructor]' // for mobile safari iOS 9.0
	];
	var native = (function (fn) {
	  return nativeHints.map(function (hint) {
	    return (fn || '').toString().indexOf([hint]) > -1;
	  }).reduce(function (a, b) {
	    return a || b;
	  });
	});
	
	var MutationObserver = root.MutationObserver;
	
	
	function microtaskDebounce(cbFunc) {
	  var scheduled = false;
	  var i = 0;
	  var cbArgs = [];
	  var elem = document.createElement('span');
	  var observer = new MutationObserver(function () {
	    cbFunc.apply(undefined, toConsumableArray(cbArgs));
	    scheduled = false;
	    cbArgs = null;
	  });
	
	  observer.observe(elem, { childList: true });
	
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    cbArgs = args;
	    if (!scheduled) {
	      scheduled = true;
	      elem.textContent = '' + i;
	      i += 1;
	    }
	  };
	}
	
	// We have to use setTimeout() for IE9 and 10 because the Mutation Observer
	// polyfill requires that the element be in the document to trigger Mutation
	// Events. Mutation Events are also synchronous and thus wouldn't debounce.
	//
	// The soonest we can set the timeout for in IE is 1 as they have issues when
	// setting to 0.
	function taskDebounce(cbFunc) {
	  var scheduled = false;
	  var cbArgs = [];
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    cbArgs = args;
	    if (!scheduled) {
	      scheduled = true;
	      setTimeout(function () {
	        scheduled = false;
	        cbFunc.apply(undefined, toConsumableArray(cbArgs));
	      }, 1);
	    }
	  };
	}
	var debounce = native(MutationObserver) ? microtaskDebounce : taskDebounce;
	
	var getOwnPropertyDescriptors = function () {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  return keys(obj).reduce(function (prev, curr) {
	    prev[curr] = Object.getOwnPropertyDescriptor(obj, curr);
	    return prev;
	  }, {});
	};
	
	function get$2(elem) {
	  var props$$1 = {};
	  keys(elem.constructor.props).forEach(function (key) {
	    props$$1[key] = elem[key];
	  });
	
	  return props$$1;
	}
	
	function set$2(elem, newProps) {
	  assign(elem, newProps);
	  if (elem.constructor[renderer$1]) {
	    elem.constructor[renderer$1](elem);
	  }
	}
	
	var props$1 = function (elem, newProps) {
	  return typeof newProps === 'undefined' ? get$2(elem) : set$2(elem, newProps);
	};
	
	function getDefaultValue(elem, name, opts) {
	  return typeof opts.default === 'function' ? opts.default(elem, { name: name }) : opts.default;
	}
	
	function getInitialValue(elem, name, opts) {
	  return typeof opts.initial === 'function' ? opts.initial(elem, { name: name }) : opts.initial;
	}
	
	function getPropData(elem, name) {
	  var elemData = data(elem, 'props');
	  return elemData[name] || (elemData[name] = {});
	}
	
	function syncFirstTimeProp(elem, prop, propName, attributeName, propData) {
	  var syncAttrValue = propData.lastAssignedValue;
	  if (empty(syncAttrValue)) {
	    if ('initial' in prop) {
	      syncAttrValue = getInitialValue(elem, propName, prop);
	    } else if ('default' in prop) {
	      syncAttrValue = getDefaultValue(elem, propName, prop);
	    }
	  }
	  if (!empty(syncAttrValue) && prop.serialize) {
	    syncAttrValue = prop.serialize(syncAttrValue);
	  }
	  if (!empty(syncAttrValue)) {
	    propData.syncingAttribute = true;
	    elem.setAttribute(attributeName, syncAttrValue);
	  }
	}
	
	function syncExistingProp(elem, prop, propName, attributeName, propData) {
	  if (attributeName && !propData.settingAttribute) {
	    var internalValue = propData.internalValue;
	
	    var serializedValue = prop.serialize(internalValue);
	    var currentAttrValue = elem.getAttribute(attributeName);
	    var serializedIsEmpty = empty(serializedValue);
	    var attributeChanged = !(serializedIsEmpty && empty(currentAttrValue) || serializedValue === currentAttrValue);
	
	    propData.syncingAttribute = true;
	
	    var shouldRemoveAttribute = empty(propData.lastAssignedValue);
	    if (shouldRemoveAttribute || serializedIsEmpty) {
	      elem.removeAttribute(attributeName);
	    } else {
	      elem.setAttribute(attributeName, serializedValue);
	    }
	
	    if (!attributeChanged && propData.syncingAttribute) {
	      propData.syncingAttribute = false;
	    }
	  }
	
	  // Allow the attribute to be linked again.
	  propData.settingAttribute = false;
	}
	
	function syncPropToAttr(elem, prop, propName, isFirstSync) {
	  var attributeName = data(elem, 'propertyLinks')[propName];
	  var propData = getPropData(elem, propName);
	
	  if (attributeName) {
	    if (isFirstSync) {
	      syncFirstTimeProp(elem, prop, propName, attributeName, propData);
	    } else {
	      syncExistingProp(elem, prop, propName, attributeName, propData);
	    }
	  }
	}
	
	var HTMLElement = root.HTMLElement;
	
	var htmlElementPrototype = HTMLElement ? HTMLElement.prototype : {};
	
	function callConstructor(elem) {
	  var elemData = data(elem);
	  var readyCallbacks = elemData.readyCallbacks;
	  var constructor = elem.constructor;
	
	  // Ensures that this can never be called twice.
	
	  if (elem[created$1]) {
	    return;
	  }
	
	  elem[created$1] = true;
	
	  // Set up a renderer that is debounced for property sets to call directly.
	  elem[rendererDebounced] = debounce(constructor[renderer$1].bind(constructor));
	
	  // Set up property lifecycle.
	  if (constructor.props && constructor[props]) {
	    constructor[props](elem);
	  }
	
	  // Props should be set up before calling this.
	  if (typeof constructor.created === 'function') {
	    constructor.created(elem);
	  }
	
	  // Created should be set before invoking the ready listeners.
	  if (readyCallbacks) {
	    readyCallbacks.forEach(function (cb) {
	      return cb(elem);
	    });
	    delete elemData.readyCallbacks;
	  }
	}
	
	function syncPropsToAttrs(elem) {
	  var props$$1 = elem.constructor.props;
	  Object.keys(props$$1).forEach(function (propName) {
	    var prop = props$$1[propName];
	    syncPropToAttr(elem, prop, propName, true);
	  });
	}
	
	function callConnected(elem) {
	  var constructor = elem.constructor;
	
	
	  syncPropsToAttrs(elem);
	
	  elem[connected] = true;
	  elem[rendererDebounced](elem);
	
	  if (typeof constructor.attached === 'function') {
	    constructor.attached(elem);
	  }
	
	  elem.setAttribute('defined', '');
	}
	
	function callDisconnected(elem) {
	  var constructor = elem.constructor;
	
	
	  elem[connected] = false;
	
	  if (typeof constructor.detached === 'function') {
	    constructor.detached(elem);
	  }
	}
	
	// Custom Elements v1
	function Component() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var elem = (typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === 'object' ? Reflect.construct(HTMLElement, args, this.constructor) : HTMLElement.call(this, args[0]);
	  callConstructor(elem);
	  return elem;
	}
	
	// Custom Elements v1
	Component.observedAttributes = [];
	
	// Skate
	Component.props = {};
	
	// Skate
	Component.extend = function extend() {
	  var definition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
	
	  // Create class for the user.
	  var Ctor = function (_Base) {
	    inherits(Ctor, _Base);
	
	    function Ctor() {
	      classCallCheck(this, Ctor);
	      return possibleConstructorReturn(this, (Ctor.__proto__ || Object.getPrototypeOf(Ctor)).apply(this, arguments));
	    }
	
	    return Ctor;
	  }(Base);
	
	  // Pass on statics from the Base if not supported (IE 9 and 10).
	
	
	  if (!Ctor.observedAttributes) {
	    var staticOpts = getOwnPropertyDescriptors(Base);
	    delete staticOpts.length;
	    delete staticOpts.prototype;
	    Object.defineProperties(Ctor, staticOpts);
	  }
	
	  // For inheriting from the object literal.
	  var opts = getOwnPropertyDescriptors(definition);
	  var prot = getOwnPropertyDescriptors(definition.prototype);
	
	  // Prototype is non configurable (but is writable).
	  delete opts.prototype;
	
	  // Pass on static and instance members from the definition.
	  Object.defineProperties(Ctor, opts);
	  Object.defineProperties(Ctor.prototype, prot);
	
	  return Ctor;
	};
	
	// Skate
	//
	// Incremental DOM renderer.
	Component.renderer = function renderer(_ref) {
	  var elem = _ref.elem,
	      render = _ref.render,
	      shadowRoot = _ref.shadowRoot;
	
	  incrementalDom.patchInner(shadowRoot, function () {
	    var possibleFn = render(elem);
	    if (typeof possibleFn === 'function') {
	      possibleFn();
	    } else if (Array.isArray(possibleFn)) {
	      possibleFn.forEach(function (fn) {
	        if (typeof fn === 'function') {
	          fn();
	        }
	      });
	    }
	  });
	};
	
	// Skate
	//
	// This is a default implementation that does strict equality copmarison on
	// previous props and next props. It synchronously renders on the first prop
	// that is different and returns immediately.
	Component.updated = function updated(elem, prev) {
	  if (!prev) {
	    return true;
	  }
	  // use get all keys so that we check Symbols as well as regular props
	  // using a for loop so we can break early
	  var allKeys = keys(prev);
	  for (var i = 0; i < allKeys.length; i += 1) {
	    if (prev[allKeys[i]] !== elem[allKeys[i]]) {
	      return true;
	    }
	  }
	  return false;
	};
	
	// Skate
	//
	// Calls the user-defined updated() lifecycle callback.
	Component[updated$1] = function _updated(elem) {
	  if (typeof this.updated === 'function') {
	    var prev = elem[props];
	    elem[props] = props$1(elem);
	    return this.updated(elem, prev);
	  }
	  return true;
	};
	
	// Skate
	//
	// Goes through the user-defined render lifecycle.
	Component[renderer$1] = function _renderer(elem) {
	  if (elem[rendering] || !elem[connected]) {
	    return;
	  }
	
	  // Flag as rendering. This prevents anything from trying to render - or
	  // queueing a render - while there is a pending render.
	  elem[rendering] = true;
	
	  var shouldRender = this[updated$1](elem);
	
	  // Even though this would ideally be checked in the updated() callback,
	  // it may not be, so we ensure that there is a point in proceeding.
	  if (!this.render || !this.renderer) {
	    elem[rendering] = false;
	    return;
	  }
	
	  if (shouldRender) {
	    if (!elem.shadowRoot) {
	      elem.attachShadow({ mode: 'open' });
	    }
	
	    this.renderer({
	      elem: elem,
	      render: this.render,
	      shadowRoot: elem.shadowRoot
	    });
	
	    if (typeof this.rendered === 'function') {
	      this.rendered(elem);
	    }
	  }
	
	  elem[rendering] = false;
	};
	
	Component.prototype = Object.create(htmlElementPrototype, {
	  // Custom Elements v1
	  connectedCallback: {
	    configurable: true,
	    value: function value() {
	      callConnected(this);
	    }
	  },
	
	  // Custom Elements v1
	  disconnectedCallback: {
	    configurable: true,
	    value: function value() {
	      callDisconnected(this);
	    }
	  },
	
	  // Custom Elements v1
	  attributeChangedCallback: {
	    configurable: true,
	    value: function value(name$$1, oldValue, newValue) {
	      var attributeChanged = this.constructor.attributeChanged;
	
	      var propertyName = data(this, 'attributeLinks')[name$$1];
	
	      if (propertyName) {
	        var propData = data(this, 'props')[propertyName];
	
	        // This ensures a property set doesn't cause the attribute changed
	        // handler to run again once we set this flag. This only ever has a
	        // chance to run when you set an attribute, it then sets a property and
	        // then that causes the attribute to be set again.
	        if (propData.syncingAttribute) {
	          propData.syncingAttribute = false;
	        } else {
	          // Sync up the property.
	          var propOpts = this.constructor.props[propertyName];
	          propData.settingAttribute = true;
	          var newPropVal = newValue !== null && propOpts.deserialize ? propOpts.deserialize(newValue) : newValue;
	          this[propertyName] = newPropVal;
	        }
	      }
	
	      if (attributeChanged) {
	        attributeChanged(this, { name: name$$1, newValue: newValue, oldValue: oldValue });
	      }
	    }
	  }
	});
	
	var dashCase = function (str) {
	  return str.split(/([A-Z])/).reduce(function (one, two, idx) {
	    var dash = !one || idx % 2 === 0 ? '' : '-';
	    return '' + one + dash + two.toLowerCase();
	  });
	};
	
	function createNativePropertyDefinition(name$$1, opts) {
	  var prop = {
	    configurable: true,
	    enumerable: true
	  };
	
	  prop.created = function created(elem) {
	    var propData = getPropData(elem, name$$1);
	    var attributeName = opts.attribute === true ? dashCase(name$$1) : opts.attribute;
	    var initialValue = elem[name$$1];
	
	    // Store property to attribute link information.
	    data(elem, 'attributeLinks')[attributeName] = name$$1;
	    data(elem, 'propertyLinks')[name$$1] = attributeName;
	
	    // Set up initial value if it wasn't specified.
	    if (empty(initialValue)) {
	      if (attributeName && elem.hasAttribute(attributeName)) {
	        initialValue = opts.deserialize(elem.getAttribute(attributeName));
	      } else if ('initial' in opts) {
	        initialValue = getInitialValue(elem, name$$1, opts);
	      } else if ('default' in opts) {
	        initialValue = getDefaultValue(elem, name$$1, opts);
	      }
	    }
	
	    propData.internalValue = opts.coerce ? opts.coerce(initialValue) : initialValue;
	  };
	
	  prop.get = function get() {
	    var propData = getPropData(this, name$$1);
	    var internalValue = propData.internalValue;
	
	    return typeof opts.get === 'function' ? opts.get(this, { name: name$$1, internalValue: internalValue }) : internalValue;
	  };
	
	  prop.set = function set(newValue) {
	    var propData = getPropData(this, name$$1);
	    propData.lastAssignedValue = newValue;
	    var oldValue = propData.oldValue;
	
	
	    if (empty(oldValue)) {
	      oldValue = null;
	    }
	
	    if (empty(newValue)) {
	      newValue = getDefaultValue(this, name$$1, opts);
	    }
	
	    if (typeof opts.coerce === 'function') {
	      newValue = opts.coerce(newValue);
	    }
	
	    var changeData = { name: name$$1, newValue: newValue, oldValue: oldValue };
	
	    if (typeof opts.set === 'function') {
	      opts.set(this, changeData);
	    }
	
	    // Queue a re-render.
	    this[rendererDebounced](this);
	
	    // Update prop data so we can use it next time.
	    propData.internalValue = propData.oldValue = newValue;
	
	    // Link up the attribute.
	    if (this[connected]) {
	      syncPropToAttr(this, opts, name$$1, false);
	    }
	  };
	
	  return prop;
	}
	
	var initProps = function (opts) {
	  opts = opts || {};
	
	  if (typeof opts === 'function') {
	    opts = { coerce: opts };
	  }
	
	  return function (name$$1) {
	    return createNativePropertyDefinition(name$$1, assign({
	      default: null,
	      deserialize: function deserialize(value) {
	        return value;
	      },
	      serialize: function serialize(value) {
	        return value;
	      }
	    }, opts));
	  };
	};
	
	/* eslint no-bitwise: 0 */
	
	// Ensures that definitions passed as part of the constructor are functions
	// that return property definitions used on the element.
	function ensurePropertyFunctions(Ctor) {
	  var props$$1 = Ctor.props;
	
	  return keys(props$$1).reduce(function (descriptors, descriptorName) {
	    descriptors[descriptorName] = props$$1[descriptorName];
	    if (typeof descriptors[descriptorName] !== 'function') {
	      descriptors[descriptorName] = initProps(descriptors[descriptorName]);
	    }
	    return descriptors;
	  }, {});
	}
	
	// Ensures the property definitions are transformed to objects that can be used
	// to create properties on the element.
	function ensurePropertyDefinitions(Ctor) {
	  var props$$1 = ensurePropertyFunctions(Ctor);
	  return keys(props$$1).reduce(function (descriptors, descriptorName) {
	    descriptors[descriptorName] = props$$1[descriptorName](descriptorName);
	    return descriptors;
	  }, {});
	}
	
	// Ensures linked properties that have linked attributes are pre-formatted to
	// the attribute name in which they are linked.
	function formatLinkedAttributes(Ctor) {
	  var observedAttributes = Ctor.observedAttributes,
	      props$$1 = Ctor.props;
	
	
	  if (!props$$1) {
	    return;
	  }
	
	  keys(props$$1).forEach(function (name$$1) {
	    var prop = props$$1[name$$1];
	    var attr = prop.attribute;
	    if (attr) {
	      // Ensure the property is updated.
	      var linkedAttr = prop.attribute = attr === true ? dashCase(name$$1) : attr;
	
	      // Automatically observe the attribute since they're linked from the
	      // attributeChangedCallback.
	      if (observedAttributes.indexOf(linkedAttr) === -1) {
	        observedAttributes.push(linkedAttr);
	      }
	    }
	  });
	
	  // Merge observed attributes.
	  Object.defineProperty(Ctor, 'observedAttributes', {
	    configurable: true,
	    enumerable: true,
	    get: function get() {
	      return observedAttributes;
	    }
	  });
	}
	
	function createInitProps(Ctor) {
	  var props$$1 = ensurePropertyDefinitions(Ctor);
	
	  return function (elem) {
	    if (!props$$1) {
	      return;
	    }
	
	    keys(props$$1).forEach(function (name$$1) {
	      var prop = props$$1[name$$1];
	      prop.created(elem);
	
	      // We check here before defining to see if the prop was specified prior
	      // to upgrading.
	      var hasPropBeforeUpgrading = name$$1 in elem;
	
	      // This is saved prior to defining so that we can set it after it it was
	      // defined prior to upgrading. We don't want to invoke the getter if we
	      // don't need to, so we only get the value if we need to re-sync.
	      var valueBeforeUpgrading = hasPropBeforeUpgrading && elem[name$$1];
	
	      // https://bugs.webkit.org/show_bug.cgi?id=49739
	      //
	      // When Webkit fixes that bug so that native property accessors can be
	      // retrieved, we can move defining the property to the prototype and away
	      // from having to do if for every instance as all other browsers support
	      // this.
	      Object.defineProperty(elem, name$$1, prop);
	
	      // We re-set the prop if it was specified prior to upgrading because we
	      // need to ensure set() is triggered both in polyfilled environments and
	      // in native where the definition may be registerd after elements it
	      // represents have already been created.
	      if (hasPropBeforeUpgrading) {
	        elem[name$$1] = valueBeforeUpgrading;
	      }
	    });
	  };
	}
	
	function generateUniqueName(name$$1) {
	  // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
	  var rand = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = Math.random() * 16 | 0;
	    var v = c === 'x' ? r : r & 0x3 | 0x8; // eslint-disable-line no-mixed-operators
	    return v.toString(16);
	  });
	
	  return name$$1 + '-' + rand;
	}
	
	function prepareForRegistration(name$$1, Ctor) {
	  Ctor[name] = name$$1;
	  Ctor[props] = createInitProps(Ctor);
	}
	
	var define = function (name$$1, opts) {
	  if (opts === undefined) {
	    throw new Error('You have to define options to register a component ' + name$$1);
	  }
	  var Ctor = (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object' ? Component.extend(opts) : opts;
	  var customElements = root.customElements;
	
	  formatLinkedAttributes(Ctor);
	
	  if (!customElements) {
	    throw new Error('Skate requires native custom element support or a polyfill.');
	  }
	
	  var uniqueName = name$$1;
	  if (customElements.get(name$$1)) {
	    uniqueName = generateUniqueName(name$$1);
	  }
	  prepareForRegistration(uniqueName, Ctor);
	  customElements.define(uniqueName, Ctor, Ctor.extends ? { extends: Ctor.extends } : null);
	  return Ctor;
	};
	
	var Event = function (TheEvent) {
	  if (TheEvent) {
	    try {
	      new TheEvent('emit-init'); // eslint-disable-line no-new
	    } catch (e) {
	      return undefined;
	    }
	  }
	  return TheEvent;
	}(root.Event);
	
	function createCustomEvent(name) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var detail = opts.detail;
	
	  delete opts.detail;
	
	  var e = void 0;
	  if (Event) {
	    e = new Event(name, opts);
	    if (typeof detail !== 'undefined') {
	      Object.defineProperty(e, 'detail', { value: detail });
	    }
	  } else {
	    e = document.createEvent('CustomEvent');
	    e.initCustomEvent(name, opts.bubbles, opts.cancelable, detail);
	  }
	  return e;
	}
	
	var emit = function (elem, name) {
	  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if (opts.bubbles === undefined) {
	    opts.bubbles = true;
	  }
	  if (opts.cancelable === undefined) {
	    opts.cancelable = true;
	  }
	  if (opts.composed === undefined) {
	    opts.composed = true;
	  }
	  return elem.dispatchEvent(createCustomEvent(name, opts));
	};
	
	function getValue(elem) {
	  var type = elem.type;
	  if (type === 'checkbox' || type === 'radio') {
	    return elem.checked ? elem.value || true : false;
	  }
	  return elem.value;
	}
	
	var link = function (elem, target) {
	  return function (e) {
	    var value = getValue(e.target);
	    var localTarget = target || e.target.name || 'value';
	
	    if (localTarget.indexOf('.') > -1) {
	      var parts = localTarget.split('.');
	      var firstPart = parts[0];
	      var propName = parts.pop();
	      var obj = parts.reduce(function (prev, curr) {
	        return prev && prev[curr];
	      }, elem);
	
	      obj[propName || e.target.name] = value;
	      props$1(elem, defineProperty({}, firstPart, elem[firstPart]));
	    } else {
	      props$1(elem, defineProperty({}, localTarget, value));
	    }
	  };
	};
	
	var ready = function (elem, done) {
	  var info = data(elem);
	  if (elem[created$1]) {
	    done(elem);
	  } else if (info.readyCallbacks) {
	    info.readyCallbacks.push(done);
	  } else {
	    info.readyCallbacks = [done];
	  }
	};
	
	var h = builder();
	
	exports.Component = Component;
	exports.define = define;
	exports.emit = emit;
	exports.h = h;
	exports.link = link;
	exports.prop = prop;
	exports.props = props$1;
	exports.ready = ready;
	exports.symbols = symbols$1;
	exports.vdom = vdom;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));
	//# sourceMappingURL=index.js.map


/***/ },
/* 30 */
/*!*******************************************************!*\
  !*** ./~/incremental-dom/dist/incremental-dom-cjs.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @license
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	'use strict';
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/**
	 * A cached reference to the hasOwnProperty function.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * A cached reference to the create function.
	 */
	var create = Object.create;
	
	/**
	 * Used to prevent property collisions between our "map" and its prototype.
	 * @param {!Object<string, *>} map The map to check.
	 * @param {string} property The property to check.
	 * @return {boolean} Whether map has property.
	 */
	var has = function (map, property) {
	  return hasOwnProperty.call(map, property);
	};
	
	/**
	 * Creates an map object without a prototype.
	 * @return {!Object}
	 */
	var createMap = function () {
	  return create(null);
	};
	
	/**
	 * Keeps track of information needed to perform diffs for a given DOM node.
	 * @param {!string} nodeName
	 * @param {?string=} key
	 * @constructor
	 */
	function NodeData(nodeName, key) {
	  /**
	   * The attributes and their values.
	   * @const {!Object<string, *>}
	   */
	  this.attrs = createMap();
	
	  /**
	   * An array of attribute name/value pairs, used for quickly diffing the
	   * incomming attributes to see if the DOM node's attributes need to be
	   * updated.
	   * @const {Array<*>}
	   */
	  this.attrsArr = [];
	
	  /**
	   * The incoming attributes for this Node, before they are updated.
	   * @const {!Object<string, *>}
	   */
	  this.newAttrs = createMap();
	
	  /**
	   * The key used to identify this node, used to preserve DOM nodes when they
	   * move within their parent.
	   * @const
	   */
	  this.key = key;
	
	  /**
	   * Keeps track of children within this node by their key.
	   * {?Object<string, !Element>}
	   */
	  this.keyMap = null;
	
	  /**
	   * Whether or not the keyMap is currently valid.
	   * {boolean}
	   */
	  this.keyMapValid = true;
	
	  /**
	   * The node name for this node.
	   * @const {string}
	   */
	  this.nodeName = nodeName;
	
	  /**
	   * @type {?string}
	   */
	  this.text = null;
	}
	
	/**
	 * Initializes a NodeData object for a Node.
	 *
	 * @param {Node} node The node to initialize data for.
	 * @param {string} nodeName The node name of node.
	 * @param {?string=} key The key that identifies the node.
	 * @return {!NodeData} The newly initialized data object
	 */
	var initData = function (node, nodeName, key) {
	  var data = new NodeData(nodeName, key);
	  node['__incrementalDOMData'] = data;
	  return data;
	};
	
	/**
	 * Retrieves the NodeData object for a Node, creating it if necessary.
	 *
	 * @param {Node} node The node to retrieve the data for.
	 * @return {!NodeData} The NodeData for this Node.
	 */
	var getData = function (node) {
	  var data = node['__incrementalDOMData'];
	
	  if (!data) {
	    var nodeName = node.nodeName.toLowerCase();
	    var key = null;
	
	    if (node instanceof Element) {
	      key = node.getAttribute('key');
	    }
	
	    data = initData(node, nodeName, key);
	  }
	
	  return data;
	};
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/** @const */
	var symbols = {
	  default: '__default',
	
	  placeholder: '__placeholder'
	};
	
	/**
	 * @param {string} name
	 * @return {string|undefined} The namespace to use for the attribute.
	 */
	var getNamespace = function (name) {
	  if (name.lastIndexOf('xml:', 0) === 0) {
	    return 'http://www.w3.org/XML/1998/namespace';
	  }
	
	  if (name.lastIndexOf('xlink:', 0) === 0) {
	    return 'http://www.w3.org/1999/xlink';
	  }
	};
	
	/**
	 * Applies an attribute or property to a given Element. If the value is null
	 * or undefined, it is removed from the Element. Otherwise, the value is set
	 * as an attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {?(boolean|number|string)=} value The attribute's value.
	 */
	var applyAttr = function (el, name, value) {
	  if (value == null) {
	    el.removeAttribute(name);
	  } else {
	    var attrNS = getNamespace(name);
	    if (attrNS) {
	      el.setAttributeNS(attrNS, name, value);
	    } else {
	      el.setAttribute(name, value);
	    }
	  }
	};
	
	/**
	 * Applies a property to a given Element.
	 * @param {!Element} el
	 * @param {string} name The property's name.
	 * @param {*} value The property's value.
	 */
	var applyProp = function (el, name, value) {
	  el[name] = value;
	};
	
	/**
	 * Applies a style to an Element. No vendor prefix expansion is done for
	 * property names/values.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} style The style to set. Either a string of css or an object
	 *     containing property-value pairs.
	 */
	var applyStyle = function (el, name, style) {
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	  } else {
	    el.style.cssText = '';
	    var elStyle = el.style;
	    var obj = /** @type {!Object<string,string>} */style;
	
	    for (var prop in obj) {
	      if (has(obj, prop)) {
	        elStyle[prop] = obj[prop];
	      }
	    }
	  }
	};
	
	/**
	 * Updates a single attribute on an Element.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value. If the value is an object or
	 *     function it is set on the Element, otherwise, it is set as an HTML
	 *     attribute.
	 */
	var applyAttributeTyped = function (el, name, value) {
	  var type = typeof value;
	
	  if (type === 'object' || type === 'function') {
	    applyProp(el, name, value);
	  } else {
	    applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
	  }
	};
	
	/**
	 * Calls the appropriate attribute mutator for this attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value.
	 */
	var updateAttribute = function (el, name, value) {
	  var data = getData(el);
	  var attrs = data.attrs;
	
	  if (attrs[name] === value) {
	    return;
	  }
	
	  var mutator = attributes[name] || attributes[symbols.default];
	  mutator(el, name, value);
	
	  attrs[name] = value;
	};
	
	/**
	 * A publicly mutable object to provide custom mutators for attributes.
	 * @const {!Object<string, function(!Element, string, *)>}
	 */
	var attributes = createMap();
	
	// Special generic mutator that's called for any attribute that does not
	// have a specific mutator.
	attributes[symbols.default] = applyAttributeTyped;
	
	attributes[symbols.placeholder] = function () {};
	
	attributes['style'] = applyStyle;
	
	/**
	 * Gets the namespace to create an element (of a given tag) in.
	 * @param {string} tag The tag to get the namespace for.
	 * @param {?Node} parent
	 * @return {?string} The namespace to create the tag in.
	 */
	var getNamespaceForTag = function (tag, parent) {
	  if (tag === 'svg') {
	    return 'http://www.w3.org/2000/svg';
	  }
	
	  if (getData(parent).nodeName === 'foreignObject') {
	    return null;
	  }
	
	  return parent.namespaceURI;
	};
	
	/**
	 * Creates an Element.
	 * @param {Document} doc The document with which to create the Element.
	 * @param {?Node} parent
	 * @param {string} tag The tag for the Element.
	 * @param {?string=} key A key to identify the Element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element.
	 * @return {!Element}
	 */
	var createElement = function (doc, parent, tag, key, statics) {
	  var namespace = getNamespaceForTag(tag, parent);
	  var el = undefined;
	
	  if (namespace) {
	    el = doc.createElementNS(namespace, tag);
	  } else {
	    el = doc.createElement(tag);
	  }
	
	  initData(el, tag, key);
	
	  if (statics) {
	    for (var i = 0; i < statics.length; i += 2) {
	      updateAttribute(el, /** @type {!string}*/statics[i], statics[i + 1]);
	    }
	  }
	
	  return el;
	};
	
	/**
	 * Creates a Text Node.
	 * @param {Document} doc The document with which to create the Element.
	 * @return {!Text}
	 */
	var createText = function (doc) {
	  var node = doc.createTextNode('');
	  initData(node, '#text', null);
	  return node;
	};
	
	/**
	 * Creates a mapping that can be used to look up children using a key.
	 * @param {?Node} el
	 * @return {!Object<string, !Element>} A mapping of keys to the children of the
	 *     Element.
	 */
	var createKeyMap = function (el) {
	  var map = createMap();
	  var child = el.firstElementChild;
	
	  while (child) {
	    var key = getData(child).key;
	
	    if (key) {
	      map[key] = child;
	    }
	
	    child = child.nextElementSibling;
	  }
	
	  return map;
	};
	
	/**
	 * Retrieves the mapping of key to child node for a given Element, creating it
	 * if necessary.
	 * @param {?Node} el
	 * @return {!Object<string, !Node>} A mapping of keys to child Elements
	 */
	var getKeyMap = function (el) {
	  var data = getData(el);
	
	  if (!data.keyMap) {
	    data.keyMap = createKeyMap(el);
	  }
	
	  return data.keyMap;
	};
	
	/**
	 * Retrieves a child from the parent with the given key.
	 * @param {?Node} parent
	 * @param {?string=} key
	 * @return {?Node} The child corresponding to the key.
	 */
	var getChild = function (parent, key) {
	  return key ? getKeyMap(parent)[key] : null;
	};
	
	/**
	 * Registers an element as being a child. The parent will keep track of the
	 * child using the key. The child can be retrieved using the same key using
	 * getKeyMap. The provided key should be unique within the parent Element.
	 * @param {?Node} parent The parent of child.
	 * @param {string} key A key to identify the child with.
	 * @param {!Node} child The child to register.
	 */
	var registerChild = function (parent, key, child) {
	  getKeyMap(parent)[key] = child;
	};
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/** @const */
	var notifications = {
	  /**
	   * Called after patch has compleated with any Nodes that have been created
	   * and added to the DOM.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesCreated: null,
	
	  /**
	   * Called after patch has compleated with any Nodes that have been removed
	   * from the DOM.
	   * Note it's an applications responsibility to handle any childNodes.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesDeleted: null
	};
	
	/**
	 * Keeps track of the state of a patch.
	 * @constructor
	 */
	function Context() {
	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.created = notifications.nodesCreated && [];
	
	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.deleted = notifications.nodesDeleted && [];
	}
	
	/**
	 * @param {!Node} node
	 */
	Context.prototype.markCreated = function (node) {
	  if (this.created) {
	    this.created.push(node);
	  }
	};
	
	/**
	 * @param {!Node} node
	 */
	Context.prototype.markDeleted = function (node) {
	  if (this.deleted) {
	    this.deleted.push(node);
	  }
	};
	
	/**
	 * Notifies about nodes that were created during the patch opearation.
	 */
	Context.prototype.notifyChanges = function () {
	  if (this.created && this.created.length > 0) {
	    notifications.nodesCreated(this.created);
	  }
	
	  if (this.deleted && this.deleted.length > 0) {
	    notifications.nodesDeleted(this.deleted);
	  }
	};
	
	/**
	* Makes sure that keyed Element matches the tag name provided.
	* @param {!string} nodeName The nodeName of the node that is being matched.
	* @param {string=} tag The tag name of the Element.
	* @param {?string=} key The key of the Element.
	*/
	var assertKeyedTagMatches = function (nodeName, tag, key) {
	  if (nodeName !== tag) {
	    throw new Error('Was expecting node with key "' + key + '" to be a ' + tag + ', not a ' + nodeName + '.');
	  }
	};
	
	/** @type {?Context} */
	var context = null;
	
	/** @type {?Node} */
	var currentNode = null;
	
	/** @type {?Node} */
	var currentParent = null;
	
	/** @type {?Element|?DocumentFragment} */
	var root = null;
	
	/** @type {?Document} */
	var doc = null;
	
	/**
	 * Returns a patcher function that sets up and restores a patch context,
	 * running the run function with the provided data.
	 * @param {function((!Element|!DocumentFragment),!function(T),T=)} run
	 * @return {function((!Element|!DocumentFragment),!function(T),T=)}
	 * @template T
	 */
	var patchFactory = function (run) {
	  /**
	   * TODO(moz): These annotations won't be necessary once we switch to Closure
	   * Compiler's new type inference. Remove these once the switch is done.
	   *
	   * @param {(!Element|!DocumentFragment)} node
	   * @param {!function(T)} fn
	   * @param {T=} data
	   * @template T
	   */
	  var f = function (node, fn, data) {
	    var prevContext = context;
	    var prevRoot = root;
	    var prevDoc = doc;
	    var prevCurrentNode = currentNode;
	    var prevCurrentParent = currentParent;
	    var previousInAttributes = false;
	    var previousInSkip = false;
	
	    context = new Context();
	    root = node;
	    doc = node.ownerDocument;
	    currentParent = node.parentNode;
	
	    if (false) {}
	
	    run(node, fn, data);
	
	    if (false) {}
	
	    context.notifyChanges();
	
	    context = prevContext;
	    root = prevRoot;
	    doc = prevDoc;
	    currentNode = prevCurrentNode;
	    currentParent = prevCurrentParent;
	  };
	  return f;
	};
	
	/**
	 * Patches the document starting at node with the provided function. This
	 * function may be called during an existing patch operation.
	 * @param {!Element|!DocumentFragment} node The Element or Document
	 *     to patch.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @template T
	 */
	var patchInner = patchFactory(function (node, fn, data) {
	  currentNode = node;
	
	  enterNode();
	  fn(data);
	  exitNode();
	
	  if (false) {}
	});
	
	/**
	 * Patches an Element with the the provided function. Exactly one top level
	 * element call should be made corresponding to `node`.
	 * @param {!Element} node The Element where the patch should start.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM. This should have at most one top level
	 *     element call.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @template T
	 */
	var patchOuter = patchFactory(function (node, fn, data) {
	  currentNode = /** @type {!Element} */{ nextSibling: node };
	
	  fn(data);
	
	  if (false) {}
	});
	
	/**
	 * Checks whether or not the current node matches the specified nodeName and
	 * key.
	 *
	 * @param {?string} nodeName The nodeName for this node.
	 * @param {?string=} key An optional key that identifies a node.
	 * @return {boolean} True if the node matches, false otherwise.
	 */
	var matches = function (nodeName, key) {
	  var data = getData(currentNode);
	
	  // Key check is done using double equals as we want to treat a null key the
	  // same as undefined. This should be okay as the only values allowed are
	  // strings, null and undefined so the == semantics are not too weird.
	  return nodeName === data.nodeName && key == data.key;
	};
	
	/**
	 * Aligns the virtual Element definition with the actual DOM, moving the
	 * corresponding DOM node to the correct location or creating it if necessary.
	 * @param {string} nodeName For an Element, this should be a valid tag string.
	 *     For a Text, this should be #text.
	 * @param {?string=} key The key used to identify this element.
	 * @param {?Array<*>=} statics For an Element, this should be an array of
	 *     name-value pairs.
	 */
	var alignWithDOM = function (nodeName, key, statics) {
	  if (currentNode && matches(nodeName, key)) {
	    return;
	  }
	
	  var node = undefined;
	
	  // Check to see if the node has moved within the parent.
	  if (key) {
	    node = getChild(currentParent, key);
	    if (node && 'production' !== 'production') {
	      assertKeyedTagMatches(getData(node).nodeName, nodeName, key);
	    }
	  }
	
	  // Create the node if it doesn't exist.
	  if (!node) {
	    if (nodeName === '#text') {
	      node = createText(doc);
	    } else {
	      node = createElement(doc, currentParent, nodeName, key, statics);
	    }
	
	    if (key) {
	      registerChild(currentParent, key, node);
	    }
	
	    context.markCreated(node);
	  }
	
	  // If the node has a key, remove it from the DOM to prevent a large number
	  // of re-orders in the case that it moved far or was completely removed.
	  // Since we hold on to a reference through the keyMap, we can always add it
	  // back.
	  if (currentNode && getData(currentNode).key) {
	    currentParent.replaceChild(node, currentNode);
	    getData(currentParent).keyMapValid = false;
	  } else {
	    currentParent.insertBefore(node, currentNode);
	  }
	
	  currentNode = node;
	};
	
	/**
	 * Clears out any unvisited Nodes, as the corresponding virtual element
	 * functions were never called for them.
	 */
	var clearUnvisitedDOM = function () {
	  var node = currentParent;
	  var data = getData(node);
	  var keyMap = data.keyMap;
	  var keyMapValid = data.keyMapValid;
	  var child = node.lastChild;
	  var key = undefined;
	
	  if (child === currentNode && keyMapValid) {
	    return;
	  }
	
	  if (data.attrs[symbols.placeholder] && node !== root) {
	    if (false) {}
	    return;
	  }
	
	  while (child !== currentNode) {
	    node.removeChild(child);
	    context.markDeleted( /** @type {!Node}*/child);
	
	    key = getData(child).key;
	    if (key) {
	      delete keyMap[key];
	    }
	    child = node.lastChild;
	  }
	
	  // Clean the keyMap, removing any unusued keys.
	  if (!keyMapValid) {
	    for (key in keyMap) {
	      child = keyMap[key];
	      if (child.parentNode !== node) {
	        context.markDeleted(child);
	        delete keyMap[key];
	      }
	    }
	
	    data.keyMapValid = true;
	  }
	};
	
	/**
	 * Changes to the first child of the current node.
	 */
	var enterNode = function () {
	  currentParent = currentNode;
	  currentNode = null;
	};
	
	/**
	 * Changes to the next sibling of the current node.
	 */
	var nextNode = function () {
	  if (currentNode) {
	    currentNode = currentNode.nextSibling;
	  } else {
	    currentNode = currentParent.firstChild;
	  }
	};
	
	/**
	 * Changes to the parent of the current node, removing any unvisited children.
	 */
	var exitNode = function () {
	  clearUnvisitedDOM();
	
	  currentNode = currentParent;
	  currentParent = currentParent.parentNode;
	};
	
	/**
	 * Makes sure that the current node is an Element with a matching tagName and
	 * key.
	 *
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @return {!Element} The corresponding Element.
	 */
	var coreElementOpen = function (tag, key, statics) {
	  nextNode();
	  alignWithDOM(tag, key, statics);
	  enterNode();
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * Closes the currently open Element, removing any unvisited children if
	 * necessary.
	 *
	 * @return {!Element} The corresponding Element.
	 */
	var coreElementClose = function () {
	  if (false) {}
	
	  exitNode();
	  return (/** @type {!Element} */currentNode
	  );
	};
	
	/**
	 * Makes sure the current node is a Text node and creates a Text node if it is
	 * not.
	 *
	 * @return {!Text} The corresponding Text Node.
	 */
	var coreText = function () {
	  nextNode();
	  alignWithDOM('#text', null, null);
	  return (/** @type {!Text} */currentNode
	  );
	};
	
	/**
	 * Gets the current Element being patched.
	 * @return {!Element}
	 */
	var currentElement = function () {
	  if (false) {}
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * Skips the children in a subtree, allowing an Element to be closed without
	 * clearing out the children.
	 */
	var skip = function () {
	  if (false) {}
	  currentNode = currentParent.lastChild;
	};
	
	/**
	 * The offset in the virtual element declaration where the attributes are
	 * specified.
	 * @const
	 */
	var ATTRIBUTES_OFFSET = 3;
	
	/**
	 * Builds an array of arguments for use with elementOpenStart, attr and
	 * elementOpenEnd.
	 * @const {Array<*>}
	 */
	var argsBuilder = [];
	
	/**
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpen = function (tag, key, statics, const_args) {
	  if (false) {}
	
	  var node = coreElementOpen(tag, key, statics);
	  var data = getData(node);
	
	  /*
	   * Checks to see if one or more attributes have changed for a given Element.
	   * When no attributes have changed, this is much faster than checking each
	   * individual argument. When attributes have changed, the overhead of this is
	   * minimal.
	   */
	  var attrsArr = data.attrsArr;
	  var newAttrs = data.newAttrs;
	  var attrsChanged = false;
	  var i = ATTRIBUTES_OFFSET;
	  var j = 0;
	
	  for (; i < arguments.length; i += 1, j += 1) {
	    if (attrsArr[j] !== arguments[i]) {
	      attrsChanged = true;
	      break;
	    }
	  }
	
	  for (; i < arguments.length; i += 1, j += 1) {
	    attrsArr[j] = arguments[i];
	  }
	
	  if (j < attrsArr.length) {
	    attrsChanged = true;
	    attrsArr.length = j;
	  }
	
	  /*
	   * Actually perform the attribute update.
	   */
	  if (attrsChanged) {
	    for (i = ATTRIBUTES_OFFSET; i < arguments.length; i += 2) {
	      newAttrs[arguments[i]] = arguments[i + 1];
	    }
	
	    for (var _attr in newAttrs) {
	      updateAttribute(node, _attr, newAttrs[_attr]);
	      newAttrs[_attr] = undefined;
	    }
	  }
	
	  return node;
	};
	
	/**
	 * Declares a virtual Element at the current location in the document. This
	 * corresponds to an opening tag and a elementClose tag is required. This is
	 * like elementOpen, but the attributes are defined using the attr function
	 * rather than being passed as arguments. Must be folllowed by 0 or more calls
	 * to attr, then a call to elementOpenEnd.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 */
	var elementOpenStart = function (tag, key, statics) {
	  if (false) {}
	
	  argsBuilder[0] = tag;
	  argsBuilder[1] = key;
	  argsBuilder[2] = statics;
	};
	
	/***
	 * Defines a virtual attribute at this point of the DOM. This is only valid
	 * when called between elementOpenStart and elementOpenEnd.
	 *
	 * @param {string} name
	 * @param {*} value
	 */
	var attr = function (name, value) {
	  if (false) {}
	
	  argsBuilder.push(name, value);
	};
	
	/**
	 * Closes an open tag started with elementOpenStart.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpenEnd = function () {
	  if (false) {}
	
	  var node = elementOpen.apply(null, argsBuilder);
	  argsBuilder.length = 0;
	  return node;
	};
	
	/**
	 * Closes an open virtual Element.
	 *
	 * @param {string} tag The element's tag.
	 * @return {!Element} The corresponding Element.
	 */
	var elementClose = function (tag) {
	  if (false) {}
	
	  var node = coreElementClose();
	
	  if (false) {}
	
	  return node;
	};
	
	/**
	 * Declares a virtual Element at the current location in the document that has
	 * no children.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementVoid = function (tag, key, statics, const_args) {
	  elementOpen.apply(null, arguments);
	  return elementClose(tag);
	};
	
	/**
	 * Declares a virtual Element at the current location in the document that is a
	 * placeholder element. Children of this Element can be manually managed and
	 * will not be cleared by the library.
	 *
	 * A key must be specified to make sure that this node is correctly preserved
	 * across all conditionals.
	 *
	 * @param {string} tag The element's tag.
	 * @param {string} key The key used to identify this element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementPlaceholder = function (tag, key, statics, const_args) {
	  if (false) {}
	
	  elementOpen.apply(null, arguments);
	  skip();
	  return elementClose(tag);
	};
	
	/**
	 * Declares a virtual Text at this point in the document.
	 *
	 * @param {string|number|boolean} value The value of the Text.
	 * @param {...(function((string|number|boolean)):string)} const_args
	 *     Functions to format the value which are called only when the value has
	 *     changed.
	 * @return {!Text} The corresponding text node.
	 */
	var text = function (value, const_args) {
	  if (false) {}
	
	  var node = coreText();
	  var data = getData(node);
	
	  if (data.text !== value) {
	    data.text = /** @type {string} */value;
	
	    var formatted = value;
	    for (var i = 1; i < arguments.length; i += 1) {
	      /*
	       * Call the formatter function directly to prevent leaking arguments.
	       * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
	       */
	      var fn = arguments[i];
	      formatted = fn(formatted);
	    }
	
	    node.data = formatted;
	  }
	
	  return node;
	};
	
	exports.patch = patchInner;
	exports.patchInner = patchInner;
	exports.patchOuter = patchOuter;
	exports.currentElement = currentElement;
	exports.skip = skip;
	exports.elementVoid = elementVoid;
	exports.elementOpenStart = elementOpenStart;
	exports.elementOpenEnd = elementOpenEnd;
	exports.elementOpen = elementOpen;
	exports.elementClose = elementClose;
	exports.elementPlaceholder = elementPlaceholder;
	exports.text = text;
	exports.attr = attr;
	exports.symbols = symbols;
	exports.attributes = attributes;
	exports.applyAttr = applyAttr;
	exports.applyProp = applyProp;
	exports.notifications = notifications;
	
	//# sourceMappingURL=incremental-dom-cjs.js.map

/***/ },
/* 31 */
/*!*****************************************!*\
  !*** ./~/window-or-global/lib/index.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict'
	module.exports = (typeof self === 'object' && self.self === self && self) ||
	  (typeof global === 'object' && global.global === global && global) ||
	  this
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
/*!************************************!*\
  !*** ./src/tags/sk-tfu/sk-tfu.jss ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = {":host":{"display":"inline-block"},".container":{"display":"inline-block","backgroundColor":"#f7f7f7","border":"1px solid grey"},".selected":{"fontWeight":"bold"}}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=photons.js.map