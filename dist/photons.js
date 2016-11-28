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
	exports.PhVehicleImage = exports.PhUserAvatar = exports.PhTestTester = exports.PhTest = exports.PhTfu = exports.PhPanel = exports.PhMore = exports.PhIconSvgImg = exports.PhImage = exports.PhIconBadge = exports.PhIcon = exports.PhCheckbox = exports.PhCard = exports.PhBanner = exports.PhAvatar = exports.PhActions = undefined;
	
	var _phActions = __webpack_require__(/*! ./components/ph-actions/ph-actions */ 3);
	
	var _phAvatar = __webpack_require__(/*! ./components/ph-avatar/ph-avatar */ 6);
	
	var _phBanner = __webpack_require__(/*! ./components/ph-banner/ph-banner */ 8);
	
	var _phCard = __webpack_require__(/*! ./components/ph-card/ph-card */ 10);
	
	var _phCheckbox = __webpack_require__(/*! ./components/ph-checkbox/ph-checkbox */ 12);
	
	var _phIcon = __webpack_require__(/*! ./components/ph-icon/ph-icon */ 14);
	
	var _phIconBadge = __webpack_require__(/*! ./components/ph-icon-badge/ph-icon-badge */ 16);
	
	var _phImage = __webpack_require__(/*! ./components/ph-image/ph-image */ 18);
	
	var _phIconSvgImg = __webpack_require__(/*! ./components/ph-icon-svg-img/ph-icon-svg-img */ 20);
	
	var _phMore = __webpack_require__(/*! ./components/ph-more/ph-more */ 23);
	
	var _phPanel = __webpack_require__(/*! ./components/ph-panel/ph-panel */ 25);
	
	var _phTfu = __webpack_require__(/*! ./components/ph-tfu/ph-tfu */ 27);
	
	var _phTest = __webpack_require__(/*! ./components/ph-test/ph-test */ 29);
	
	var _phTestTester = __webpack_require__(/*! ./components/ph-test-tester/ph-test-tester */ 31);
	
	var _phUserAvatar = __webpack_require__(/*! ./components/ph-user-avatar/ph-user-avatar */ 33);
	
	var _phVehicleImage = __webpack_require__(/*! ./components/ph-vehicle-image/ph-vehicle-image */ 35);
	
	exports.PhActions = _phActions.PhActions;
	exports.PhAvatar = _phAvatar.PhAvatar;
	exports.PhBanner = _phBanner.PhBanner;
	exports.PhCard = _phCard.PhCard;
	exports.PhCheckbox = _phCheckbox.PhCheckbox;
	exports.PhIcon = _phIcon.PhIcon;
	exports.PhIconBadge = _phIconBadge.PhIconBadge;
	exports.PhImage = _phImage.PhImage;
	exports.PhIconSvgImg = _phIconSvgImg.PhIconSvgImg;
	exports.PhMore = _phMore.PhMore;
	exports.PhPanel = _phPanel.PhPanel;
	exports.PhTfu = _phTfu.PhTfu;
	exports.PhTest = _phTest.PhTest;
	exports.PhTestTester = _phTestTester.PhTestTester;
	exports.PhUserAvatar = _phUserAvatar.PhUserAvatar;
	exports.PhVehicleImage = _phVehicleImage.PhVehicleImage;

/***/ },
/* 3 */
/*!*************************************************!*\
  !*** ./src/components/ph-actions/ph-actions.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhActions = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phActions = __webpack_require__(/*! ./ph-actions.css */ 4);
	
	var _phActions2 = _interopRequireDefault(_phActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhActions = exports.PhActions = function (_Component) {
	    _inherits(PhActions, _Component);
	
	    function PhActions() {
	        _classCallCheck(this, PhActions);
	
	        return _possibleConstructorReturn(this, (PhActions.__proto__ || Object.getPrototypeOf(PhActions)).apply(this, arguments));
	    }
	
	    _createClass(PhActions, [{
	        key: 'renderCallback',
	        value: function renderCallback() {
	            var _this2 = this;
	
	            return (0, _photonCore.h)(
	                'div',
	                null,
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phActions2.default.toString()
	                ),
	                this.actions.map(function (action, index) {
	                    return (0, _photonCore.h)('ph-icon-badge', { key: index, icon: action, size: _this2.size });
	                })
	            );
	        }
	    }], [{
	        key: 'props',
	        get: function get() {
	            return {
	                actions: _photonCore.prop.array({
	                    attribute: true,
	                    default: ['usd', 'wrench', 'building']
	                }),
	                size: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'medium'
	                })
	            };
	        }
	    }]);
	
	    return PhActions;
	}(_photonCore.Component);
	
	customElements.define('ph-actions', PhActions);

/***/ },
/* 4 */
/*!**************************************************!*\
  !*** ./src/components/ph-actions/ph-actions.css ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: inline-flex;\n    justify-content: space-between;\n}\n\nph-icon-badge {\n    margin-right: 5px;\n    display: inline-flex;\n\n}\n\nph-icon-badge:last-child {\n    margin-right: 0;\n}\n", ""]);
	
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
  !*** ./src/components/ph-avatar/ph-avatar.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhAvatar = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phAvatar = __webpack_require__(/*! ./ph-avatar.css */ 7);
	
	var _phAvatar2 = _interopRequireDefault(_phAvatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhAvatar = exports.PhAvatar = function (_Component) {
	    _inherits(PhAvatar, _Component);
	
	    function PhAvatar() {
	        _classCallCheck(this, PhAvatar);
	
	        return _possibleConstructorReturn(this, (PhAvatar.__proto__ || Object.getPrototypeOf(PhAvatar)).apply(this, arguments));
	    }
	
	    _createClass(PhAvatar, [{
	        key: 'getContent',
	
	
	        // constructor(self:PhAvatar) {
	        //     self = super(self);
	        //     console.log(self.tagName, 'constructor');
	        //     return self;
	        // }
	
	        value: function getContent() {
	            if (this.image) {
	                return (0, _photonCore.h)('ph-image', { src: this.image, sizing: 'cover' });
	            } else if (this.icon) {
	                var size = this.constructor.sizes[this.size];
	                var styles = {
	                    fontSize: '0'
	                };
	                return (0, _photonCore.h)('ph-icon', { name: this.icon, size: size, style: styles });
	            } else if (this.initials) {
	                return (0, _photonCore.h)(
	                    'span',
	                    null,
	                    this.initials
	                );
	            }
	        }
	    }, {
	        key: 'renderCallback',
	        value: function renderCallback() {
	            return (0, _photonCore.h)(
	                'div',
	                { id: 'container' },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phAvatar2.default.toString()
	                ),
	                this.getContent()
	            );
	        }
	    }], [{
	        key: 'props',
	        get: function get() {
	            //console.log('PhAvatar.props');
	            return {
	                image: _photonCore.prop.string({
	                    attribute: true
	                }),
	                initials: _photonCore.prop.string({
	                    attribute: true
	                }),
	                size: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'medium'
	                }),
	                icon: _photonCore.prop.string({
	                    attribute: true
	                })
	            };
	        }
	    }]);
	
	    return PhAvatar;
	}(_photonCore.Component);
	
	PhAvatar.sizes = {
	    'small': 15,
	    'medium': 25,
	    'large': 35
	};
	
	
	customElements.define('ph-avatar', PhAvatar);

/***/ },
/* 7 */
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
/* 8 */
/*!***********************************************!*\
  !*** ./src/components/ph-banner/ph-banner.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhBanner = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phBanner = __webpack_require__(/*! ./ph-banner.css */ 9);
	
	var _phBanner2 = _interopRequireDefault(_phBanner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhBanner = exports.PhBanner = function (_Component) {
	    _inherits(PhBanner, _Component);
	
	    function PhBanner() {
	        _classCallCheck(this, PhBanner);
	
	        return _possibleConstructorReturn(this, (PhBanner.__proto__ || Object.getPrototypeOf(PhBanner)).apply(this, arguments));
	    }
	
	    _createClass(PhBanner, [{
	        key: 'renderCallback',
	        value: function renderCallback() {
	            return (0, _photonCore.h)(
	                'span',
	                { id: 'text' },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phBanner2.default.toString()
	                ),
	                this.text
	            );
	        }
	    }], [{
	        key: 'props',
	        get: function get() {
	            return {
	                text: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'Top Choice'
	                }),
	                active: _photonCore.prop.boolean({
	                    attribute: true
	                })
	            };
	        }
	    }]);
	
	    return PhBanner;
	}(_photonCore.Component);
	
	customElements.define('ph-banner', PhBanner);

/***/ },
/* 9 */
/*!************************************************!*\
  !*** ./src/components/ph-banner/ph-banner.css ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    width: 100px;\n    height: 100px;\n    border-top: solid 50px #DDDDDD;\n    border-right: solid 50px #DDDDDD;\n    border-bottom: solid 50px transparent;\n    border-left: solid 50px transparent;\n    box-sizing: border-box;\n    position: absolute;\n    right: 0;\n    top: 0;\n    cursor: pointer;\n}\n\n:host(:hover) {\n    border-top-color:#199AD1;\n    border-right-color:#199AD1;\n    color: #fff;\n}\n\n:host([active=\"true\"]) {\n    border-top: solid 50px #EB0C0C;\n    border-right: solid 50px #EB0C0C;\n    color: #fff;\n}\n\n:host > #text {\n    position: absolute;\n    text-transform: uppercase;\n    right: -50px;\n    top: -38px;\n    font-size: 13px;\n    width: 60px;\n    text-align: center;\n    transform: rotate(45deg);\n}\n\nph-banner {\n    width: 100px;\n    height: 100px;\n    border-top: solid 50px #DDDDDD;\n    border-right: solid 50px #DDDDDD;\n    border-bottom: solid 50px transparent;\n    border-left: solid 50px transparent;\n    box-sizing: border-box;\n    position: absolute;\n    right: 0;\n    top: 0;\n    cursor: pointer;\n}\n\nph-banner:hover {\n    border-top-color:#199AD1;\n    border-right-color:#199AD1;\n    color: #fff;\n}\n\nph-banner[active] {\n    border-top: solid 50px #EB0C0C;\n    border-right: solid 50px #EB0C0C;\n    color: #fff;\n}\n\nph-banner > #text {\n    position: absolute;\n    text-transform: uppercase;\n    right: -50px;\n    top: -38px;\n    font-size: 13px;\n    width: 60px;\n    text-align: center;\n    transform: rotate(45deg);\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/*!*******************************************!*\
  !*** ./src/components/ph-card/ph-card.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhCard = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phCard = __webpack_require__(/*! ./ph-card.css */ 11);
	
	var _phCard2 = _interopRequireDefault(_phCard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhCard = exports.PhCard = function (_Component) {
	    _inherits(PhCard, _Component);
	
	    function PhCard() {
	        _classCallCheck(this, PhCard);
	
	        return _possibleConstructorReturn(this, (PhCard.__proto__ || Object.getPrototypeOf(PhCard)).apply(this, arguments));
	    }
	
	    _createClass(PhCard, [{
	        key: 'getSlot',
	        value: function getSlot(name) {
	            for (var i = 0; i < this.children.length; i++) {
	                if (this.children[i].attributes.getNamedItem('slot').value === name) {
	                    return this.children[i];
	                }
	            }
	            return false;
	        }
	    }, {
	        key: 'renderBanner',
	        value: function renderBanner() {
	            return this.getSlot('banner') ? (0, _photonCore.h)(
	                'div',
	                { id: 'banner' },
	                (0, _photonCore.h)(
	                    'div',
	                    { id: 'banner-text' },
	                    (0, _photonCore.h)('slot', { name: 'banner' })
	                )
	            ) : null;
	        }
	    }, {
	        key: 'renderMedia',
	        value: function renderMedia() {
	            return this.getSlot('media') ? (0, _photonCore.h)(
	                'div',
	                { id: 'media' },
	                (0, _photonCore.h)('slot', { name: 'media' })
	            ) : null;
	        }
	    }, {
	        key: 'renderFooter',
	        value: function renderFooter() {
	            return this.getSlot('footer') ? (0, _photonCore.h)(
	                'div',
	                { id: 'footer' },
	                (0, _photonCore.h)('slot', { name: 'footer' })
	            ) : null;
	        }
	    }, {
	        key: 'renderCallback',
	        value: function renderCallback() {
	            return (0, _photonCore.h)(
	                'div',
	                { id: 'container' },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phCard2.default.toString()
	                ),
	                this.renderBanner(),
	                (0, _photonCore.h)(
	                    'div',
	                    { id: 'inner' },
	                    this.renderMedia(),
	                    (0, _photonCore.h)(
	                        'div',
	                        { id: 'content' },
	                        (0, _photonCore.h)(
	                            'div',
	                            { id: 'header' },
	                            (0, _photonCore.h)(
	                                'div',
	                                { id: 'header-primary' },
	                                (0, _photonCore.h)(
	                                    'div',
	                                    { id: 'title' },
	                                    (0, _photonCore.h)('slot', { name: 'title' })
	                                ),
	                                (0, _photonCore.h)(
	                                    'div',
	                                    { id: 'subtitle' },
	                                    (0, _photonCore.h)('slot', { name: 'subtitle' })
	                                )
	                            ),
	                            (0, _photonCore.h)(
	                                'div',
	                                { id: 'header-secondary' },
	                                (0, _photonCore.h)('slot', { name: 'secondary' })
	                            )
	                        ),
	                        (0, _photonCore.h)(
	                            'div',
	                            { id: 'body' },
	                            (0, _photonCore.h)('slot', { name: 'body' })
	                        )
	                    )
	                ),
	                this.renderFooter()
	            );
	        }
	    }], [{
	        key: 'props',
	        get: function get() {
	            return {
	                status: _photonCore.prop.string({
	                    attribute: true
	                }),
	                highlight: _photonCore.prop.boolean({
	                    attribute: true
	                })
	            };
	        }
	    }]);
	
	    return PhCard;
	}(_photonCore.Component);
	
	customElements.define('ph-card', PhCard);

/***/ },
/* 11 */
/*!********************************************!*\
  !*** ./src/components/ph-card/ph-card.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border: 1px solid #ddd;\n    background-color: #fff;\n    min-height: 40px;\n}\n\n:host(.active) {\n    border-color: #1D86B8;\n    box-shadow: 0 0 10px #5CB2E0;\n    border-width: 1px;\n    border-radius: 2px;\n}\n\n:host([status=\"open\"]) {\n    box-shadow: inset 6px 0 0 0 #F3AE4E;\n}\n\n:host([status=\"complete\"]) {\n    box-shadow: inset 6px 0 0 0 #4AB471;\n}\n\n:host([status=\"overdue\"]) {\n    box-shadow: inset 6px 0 0 0 #CF5C60;\n}\n\n:host([status=\"open\"]) > #container , :host([status=\"complete\"]) > #container , :host([status=\"overdue\"]) > #container  {\n    padding-left: 6px;\n}\n\n:host(.active), :host([highlight]:hover) {\n    border-color: #1D86B8;\n    box-shadow: 0 0 10px #5CB2E0;\n    border-width: 1px;\n    border-radius: 2px;\n}\n\n:host > #container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\nph-card {\n    display: block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border: 1px solid #ddd;\n    background-color: #fff;\n    min-height: 40px;\n}\n\nph-card.active {\n    border-color: #1D86B8;\n    box-shadow: 0 0 10px #5CB2E0;\n    border-width: 1px;\n    border-radius: 2px;\n}\n\nph-card[status=\"open\"] {\n    box-shadow: inset 6px 0 0 0 #F3AE4E;\n    moz-box-shadow: inset 6px 0 0 0 #F3AE4E;\n}\n\nph-card[status=\"complete\"] {\n    box-shadow: inset 6px 0 0 0 #4AB471;\n    moz-box-shadow: inset 6px 0 0 0 #4AB471;\n}\n\nph-card[status=\"overdue\"] {\n    box-shadow: inset 6px 0 0 0 #CF5C60;\n    moz-box-shadow: inset 6px 0 0 0 #CF5C60;\n}\n\nph-card[status=\"open\"] > #container , ph-card[status=\"complete\"] > #container , ph-card[status=\"overdue\"] > #container  {\n    padding-left: 6px;\n}\n\nph-card.active, ph-card[highlight]:hover {\n    border-color: #1D86B8;\n    box-shadow: 0 0 10px #5CB2E0;\n    border-width: 1px;\n    border-radius: 2px;\n}\n\nph-card > #container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n#banner {\n    width: 100px;\n    height: 100px;\n    border-top: solid 50px #DDDDDD;\n    border-right: solid 50px #DDDDDD;\n    border-bottom: solid 50px transparent;\n    border-left: solid 50px transparent;\n    box-sizing: border-box;\n    position: absolute;\n    right: 0;\n    top: 0;\n    cursor: pointer;\n}\n\n#banner-text {\n    position: absolute;\n    right: -50px;\n    top: -38px;\n    font-size: 13px;\n    width: 60px;\n    text-align: center;\n    transform: rotate(45deg);\n}\n\n#banner:hover {\n    border-top-color: blue;\n    border-right-color: blue;\n    color: #fff;\n}   \n\n#media {\n    margin: 5px 15px 0 0;\n}\n\n#title {\n    font-size: 15px;\n    font-weight: 700;\n}\n\n#subtitle {\n    \n}\n\n#inner {\n    display: flex;\n    flex-direction: row;\n    padding: 10px 15px;\n}\n\n#content {\n    flex-grow: 1;\n}\n\n#header {\n    display: flex;\n    flex-direction: row;\n}\n\n#header-primary {\n    flex-grow: 1;\n}\n\n#header-secondary {\n    margin-left: 20px;\n    text-align: right;\n}\n\n#body {\n    margin-top: 5px;\n}\n\n#footer {\n    display: flex;\n    flex-direction: row;\n}\n\ndiv[slot=\"title\"] {\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\ndiv[active=\"true\"] {\n    background-color: red;\n}\n", ""]);
	
	// exports


/***/ },
/* 12 */
/*!***************************************************!*\
  !*** ./src/components/ph-checkbox/ph-checkbox.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhCheckbox = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phCheckbox = __webpack_require__(/*! ./ph-checkbox.css */ 13);
	
	var _phCheckbox2 = _interopRequireDefault(_phCheckbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhCheckbox = exports.PhCheckbox = function (_Component) {
	    _inherits(PhCheckbox, _Component);
	
	    _createClass(PhCheckbox, null, [{
	        key: 'props',
	        get: function get() {
	            return {
	                label: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'check me'
	                }),
	                checked: _photonCore.prop.boolean({
	                    attribute: true
	                }),
	                disabled: _photonCore.prop.boolean({
	                    attribute: true
	                }),
	                reverse: _photonCore.prop.boolean({
	                    attribute: true
	                })
	            };
	        }
	    }]);
	
	    function PhCheckbox(self) {
	        var _this, _ret;
	
	        _classCallCheck(this, PhCheckbox);
	
	        self = (_this = _possibleConstructorReturn(this, (PhCheckbox.__proto__ || Object.getPrototypeOf(PhCheckbox)).call(this, self)), _this);
	        //console.log(self.tagName, 'constructor');
	        bindPrivateMethods(self);
	        return _ret = self, _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(PhCheckbox, [{
	        key: 'connectedCallback',
	        value: function connectedCallback() {
	            _get(PhCheckbox.prototype.__proto__ || Object.getPrototypeOf(PhCheckbox.prototype), 'connectedCallback', this).call(this);
	            this.addEventListener('click', this[priv].handleClickCapture, true);
	        }
	    }, {
	        key: 'disconnectedCallback',
	        value: function disconnectedCallback() {
	            this.removeEventListener('click', this[priv].handleClickCapture, true);
	            _get(PhCheckbox.prototype.__proto__ || Object.getPrototypeOf(PhCheckbox.prototype), 'disconnectedCallback', this).call(this);
	        }
	    }, {
	        key: 'updatedCallback',
	        value: function updatedCallback(prevProps) {
	            //console.log(this.tagName, 'updatedCallback', prevProps);
	            if (!prevProps || prevProps.disabled !== this.disabled) {
	                if (this.disabled) {
	                    this.setAttribute('aria-disabled', 'true');
	                    this[priv].prevTabIndex = this.tabIndex;
	                    this.removeAttribute('tabindex');
	                } else {
	                    this.setAttribute('aria-disabled', 'false');
	                    this.tabIndex = this[priv].prevTabIndex;
	                }
	            }
	
	            if (!prevProps || prevProps.checked !== this.checked) {
	                if (this.checked) {
	                    this.setAttribute('aria-checked', 'true');
	                } else {
	                    this.setAttribute('aria-checked', 'false');
	                }
	            }
	
	            return _get(PhCheckbox.prototype.__proto__ || Object.getPrototypeOf(PhCheckbox.prototype), 'updatedCallback', this).call(this, prevProps);
	        }
	    }, {
	        key: 'renderCallback',
	        value: function renderCallback() {
	            return (0, _photonCore.h)(
	                'span',
	                { id: 'container', onclick: this[priv].handleClick },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phCheckbox2.default.toString()
	                ),
	                (0, _photonCore.h)(
	                    'span',
	                    { id: 'box' },
	                    (0, _photonCore.h)(
	                        'svg',
	                        { id: 'check', width: '16', height: '16', viewBox: '0 0 16 16' },
	                        (0, _photonCore.h)('path', { d: 'M16,5.72a0.84,0.84,0,0,1-.25.62L8,14.12a0.87,0.87,0,0,1-1.23,0L2.24,9.62a0.87,0.87,0,0,1,0-1.23L3.47,7.15a0.87,0.87,0,0,1,1.23,0L7.36,9.82,13.3,3.88a0.87,0.87,0,0,1,1.23,0l1.23,1.23A0.84,0.84,0,0,1,16,5.72Z' })
	                    )
	                ),
	                (0, _photonCore.h)(
	                    'span',
	                    { id: 'label' },
	                    this.label
	                )
	            );
	        }
	    }]);
	
	    return PhCheckbox;
	}(_photonCore.Component);
	
	var priv = Symbol();
	
	function bindPrivateMethods(elem) {
	    elem[priv] = {};
	    elem[priv].tabIndex = undefined;
	    elem[priv].handleClick = handleClick.bind(elem);
	    elem[priv].handleClickCapture = handleClickCapture.bind(elem);
	}
	
	function handleClick(e) {
	    //console.log('handleClick', e, e.defaultPrevented);
	    if (this.disabled) {
	        e.stopPropagation();
	        return;
	    }
	    this.checked = !this.checked;
	}
	
	function handleClickCapture(e) {
	    var _this2 = this;
	
	    // console.log('handleClickResult', e, e.defaultPrevented);
	    if (!e.defaultPrevented) {
	        window.setTimeout(function () {
	            _this2.dispatchEvent(new Event('change'));
	        });
	    }
	}
	
	customElements.define('ph-checkbox', PhCheckbox);

/***/ },
/* 13 */
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
/* 14 */
/*!*******************************************!*\
  !*** ./src/components/ph-icon/ph-icon.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhIcon = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _iconAssets = __webpack_require__(/*! ./icon-assets.js */ 15);
	
	var icons = _interopRequireWildcard(_iconAssets);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhIcon = exports.PhIcon = function (_Component) {
	    _inherits(PhIcon, _Component);
	
	    function PhIcon() {
	        _classCallCheck(this, PhIcon);
	
	        return _possibleConstructorReturn(this, (PhIcon.__proto__ || Object.getPrototypeOf(PhIcon)).apply(this, arguments));
	    }
	
	    _createClass(PhIcon, [{
	        key: 'updatedCallback',
	        value: function updatedCallback(prevProps) {
	            // using idom when rendering a svg fails silently
	            // the output looks good but does not render the paths
	
	            if (!prevProps || prevProps.name !== this.name || prevProps.size !== this.size) {
	                this.innerHTML = '<svg viewBox="0 0 24 24" width="' + this.size + '" height="' + this.size + '">' + icons[this.name] + '</svg>';
	            }
	            return false;
	        }
	    }], [{
	        key: 'props',
	        get: function get() {
	            return {
	                name: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'usd'
	                }),
	                size: _photonCore.prop.number({
	                    attribute: true,
	                    default: 24
	                })
	            };
	        }
	    }]);
	
	    return PhIcon;
	}(_photonCore.Component);
	
	customElements.define('ph-icon', PhIcon);

/***/ },
/* 15 */
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
	
	var up = exports.up = "<path d=\"M22,16.67a1.33,1.33,0,0,1-.37.94,1.16,1.16,0,0,1-.88.4H3.25a1.17,1.17,0,0,1-.88-0.4,1.37,1.37,0,0,1,0-1.88L11.12,6.4a1.18,1.18,0,0,1,1.76,0l8.75,9.33A1.33,1.33,0,0,1,22,16.67Z\"/>";
	
	var down = exports.down = "<path d=\"M22,7.33a1.33,1.33,0,0,1-.37.94L12.88,17.6a1.18,1.18,0,0,1-1.76,0L2.37,8.27a1.37,1.37,0,0,1,0-1.88A1.17,1.17,0,0,1,3.25,6h17.5a1.17,1.17,0,0,1,.88.4A1.32,1.32,0,0,1,22,7.33Z\"/>";

/***/ },
/* 16 */
/*!*******************************************************!*\
  !*** ./src/components/ph-icon-badge/ph-icon-badge.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhIconBadge = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phIconBadge = __webpack_require__(/*! ./ph-icon-badge.css */ 17);
	
	var _phIconBadge2 = _interopRequireDefault(_phIconBadge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var sizes = {
	    'small': 10,
	    'medium': 14,
	    'large': 18
	};
	
	var PhIconBadge = exports.PhIconBadge = function (_Component) {
	    _inherits(PhIconBadge, _Component);
	
	    function PhIconBadge() {
	        _classCallCheck(this, PhIconBadge);
	
	        return _possibleConstructorReturn(this, (PhIconBadge.__proto__ || Object.getPrototypeOf(PhIconBadge)).apply(this, arguments));
	    }
	
	    _createClass(PhIconBadge, [{
	        key: 'renderCallback',
	        value: function renderCallback() {
	            var size = sizes[this.size];
	            var styles = {
	                fontSize: '0',
	                lineHeight: '0'
	            };
	            return (0, _photonCore.h)(
	                'div',
	                { id: 'container' },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phIconBadge2.default.toString()
	                ),
	                (0, _photonCore.h)('ph-icon', { name: this.icon, size: size, style: styles })
	            );
	        }
	    }], [{
	        key: 'props',
	        get: function get() {
	            return {
	                bordered: _photonCore.prop.boolean({
	                    attribute: true
	                }),
	                icon: _photonCore.prop.string({
	                    attribute: true
	                }),
	                status: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'primary'
	                }),
	                size: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'large'
	                })
	            };
	        }
	    }]);
	
	    return PhIconBadge;
	}(_photonCore.Component);
	
	customElements.define('ph-icon-badge', PhIconBadge);

/***/ },
/* 17 */
/*!********************************************************!*\
  !*** ./src/components/ph-icon-badge/ph-icon-badge.css ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: inline-block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 50%;\n    font-family: Roboto;\n    fill: white;\n    border: 2px solid #1D86B8;\n    background-color: #1D86B8;\n}\n\n:host #container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n:host([size=\"small\"]) {\n    width: 16px;\n    height: 16px;\n}\n\n:host([size=\"medium\"]) {\n    width: 34px;\n    height: 34px;\n}\n\n:host([size=\"large\"]) {\n    width: 44px;\n    height: 44px;\n}\n\n:host([status=\"overdue\"]) {\n    background-color: #CF5C60;\n    border-color:#CF5C60;\n}\n\n:host([status=\"complete\"]) {\n    background-color: #4AB471;\n    border-color: #4AB471;\n}\n\n:host([status=\"open\"]) {\n    background-color: #F3AE4E;\n    border-color: #F3AE4E;\n}\n\n:host([status=\"disabled\"]) {\n    background-color: #C7C7C7;\n    border-color:#C7C7C7;\n}\n\n:host([bordered]) {\n    background-color: white;\n    fill: #898989;\n}\n\n\n\n\n\nph-icon-badge {\n    display: inline-block;\n    box-sizing: border-box;\n    overflow: hidden;\n    border-radius: 50%;\n    font-family: Roboto;\n    fill: white;\n    border: 2px solid #1D86B8;\n    background-color: #1D86B8;\n}\n\nph-icon-badge #container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nph-icon-badge[size=\"small\"] {\n    width: 16px;\n    height: 16px;\n}\n\nph-icon-badge[size=\"medium\"] {\n    width: 34px;\n    height: 34px;\n}\n\nph-icon-badge[size=\"large\"] {\n    width: 44px;\n    height: 44px;\n}\n\nph-icon-badge[status=\"overdue\"] {\n    background-color: #CF5C60;\n    border-color:#CF5C60;\n}\n\nph-icon-badge[status=\"complete\"] {\n    background-color: #4AB471;\n    border-color: #4AB471;\n}\n\nph-icon-badge[status=\"open\"] {\n    background-color: #F3AE4E;\n    border-color: #F3AE4E;\n}\n\nph-icon-badge[status=\"disabled\"] {\n    background-color: #C7C7C7;\n    border-color:#C7C7C7;\n}\n\nph-icon-badge[bordered] {\n    background-color: white;\n    fill: #898989;\n}\n", ""]);
	
	// exports


/***/ },
/* 18 */
/*!*********************************************!*\
  !*** ./src/components/ph-image/ph-image.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhImage = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phImage = __webpack_require__(/*! ./ph-image.css */ 19);
	
	var _phImage2 = _interopRequireDefault(_phImage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhImage = exports.PhImage = function (_Component) {
	    _inherits(PhImage, _Component);
	
	    function PhImage() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, PhImage);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhImage.__proto__ || Object.getPrototypeOf(PhImage)).call.apply(_ref, [this].concat(args))), _this), _this.onImgLoad = function (e) {
	            //console.log('imgOnLoad', e);
	            _this.dispatchEvent(new Event('load'));
	            //if (e.imgTag.src !== this.src) return;
	            _this.reset();
	            // this.loading = false;
	            _this.loaded = true;
	            // this.error = false;
	            //this.mustRender();
	            _this.forceRender = !_this.forceRender;
	        }, _this.onImgError = function (e) {
	            console.log('imgOnError', e);
	            _this.dispatchEvent(new Event('error'));
	            // if (imgTag.src !== this.src) return;
	            _this.reset();
	            //this.loaded = false;
	            _this.error = true;
	            //this.mustRender();
	            _this.forceRender = !_this.forceRender;
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(PhImage, [{
	        key: 'updatedCallback',
	        value: function updatedCallback(prevProps) {
	            var prevSrc = prevProps ? prevProps.src : undefined;
	            if (prevSrc !== this.src) {
	                this.reset();
	                this.loading = !!this.src;
	            }
	            return _get(PhImage.prototype.__proto__ || Object.getPrototypeOf(PhImage.prototype), 'updatedCallback', this).call(this, prevProps);
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
	            return this.preventLoad ? undefined : this.src;
	        }
	    }, {
	        key: 'renderCallback',
	        value: function renderCallback() {
	            //console.log(this.tagName, 'renderCallback');
	            return (0, _photonCore.h)(
	                'div',
	                null,
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phImage2.default.toString()
	                ),
	                (0, _photonCore.h)('div', { id: 'sizedImgDiv',
	                    style: { backgroundImage: this.getSrc() ? 'url("' + this.src + '")' : undefined,
	                        backgroundSize: this.sizing,
	                        backgroundPosition: this.sizing ? this.position : undefined,
	                        backgroundRepeat: this.sizing ? 'no-repeat' : undefined
	                    },
	                    role: 'img',
	                    hidden: this.computeImgDivHidden(),
	                    'aria-hidden': this.computeImgDivARIAHidden(),
	                    'aria-label': this.computeImgDivARIALabel() }),
	                (0, _photonCore.h)('img', { id: 'img',
	                    src: this.getSrc(),
	                    alt: this.alt,
	                    hidden: this.computeImgHidden(),
	                    onload: this.onImgLoad.bind(this),
	                    onerror: this.onImgError.bind(this)
	                }),
	                (0, _photonCore.h)('div', { id: 'placeholder',
	                    hidden: this.computePlaceholderHidden(),
	                    'class': this.computePlaceholderClassName(),
	                    style: {
	                        backgroundImage: this.hasPlaceholder() ? 'url("' + this.getPlaceholder() + '")' : undefined,
	                        backgroundSize: this.sizing,
	                        backgroundPosition: this.sizing ? this.position : undefined,
	                        backgroundRepeat: this.sizing ? 'no-repeat' : undefined
	                    }
	                })
	            );
	        }
	    }, {
	        key: 'computePlaceholderHidden',
	        value: function computePlaceholderHidden() {
	            if (!this.preload || !this.fade && !this.loading && this.loaded) {
	                return true;
	            } else {
	                return undefined;
	            }
	        }
	    }, {
	        key: 'computePlaceholderClassName',
	        value: function computePlaceholderClassName() {
	            return this.preload && this.fade && !this.loading && this.loaded ? 'faded-out' : '';
	        }
	    }, {
	        key: 'computeImgDivHidden',
	        value: function computeImgDivHidden() {
	            return !this.sizing;
	        }
	    }, {
	        key: 'computeImgDivARIAHidden',
	        value: function computeImgDivARIAHidden() {
	            return this.alt === '' ? 'true' : undefined;
	        }
	    }, {
	        key: 'computeImgDivARIALabel',
	        value: function computeImgDivARIALabel() {
	            if (this.alt !== null) {
	                return this.alt;
	            }
	
	            if (this.src === '') {
	                return '';
	            }
	            //return something meaningful here.
	        }
	    }, {
	        key: 'computeImgHidden',
	        value: function computeImgHidden() {
	            return !!this.sizing;
	        }
	    }, {
	        key: 'hasPlaceholder',
	        value: function hasPlaceholder() {
	            return this.placeholder != null;
	        }
	    }, {
	        key: 'getPlaceholder',
	        value: function getPlaceholder() {
	            if (this.placeholder) {
	                return this.placeholder;
	            }
	            return "data:image/gif;base64,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lxogusTFxoq8wMrLsCLHz9C6yczU1Zgn0dnapdPW3t7D2+Ljht3f58sKD+Ts4+bo8L4G7fTZ7/H4rgOj9f3F9/kCbirgr2AugAITWmpgsKEqhAoj2tngsKIpiBITarDIEVLGj5c6ikQGsqSkASNTljNZkqLKl6tYgmQIUyVGmecI1kx5E6e1fTt5+ow4IqjQoQLVGR3ZE6mycEs7NnXqy1lUkVOpwpp3FavWcwOgduWY9aumAAgkjGVqVlkEAkP/RK09aikGgbt48+odgqCv37+ARRwYTLiwYRAJEitezDjE3MeQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEM1Ro4YUYZqhhgHV06OGHIIYoIocilmiihySeqOKHRaS44ootAvjijDH+N+OLNfp344ouuLijiEn4+COIQco4ZIlF2ngk/5BCLlkHDk0uuUWUR05ppJMfWqkklh5qqSOXHjJB5ZA9jPljmVeCieaWapq5IxBu3ghnmlzOyWadcc4IRp4vysDnin7SiWWgdw76p4poHHpiDoqayKigTj5aaKSNlghFpSKmgGmImkK6ZKeTfropiDCM+mGpnh6JaqiqmuphG652eEOsdcya6pC2soorrU/Q2oKvwN7646/C7qgErUIgq2yxNybL7IxY0LqDtNQ++2IZtHqQ7bbWrqhttypiQCsE45YL7onknmviBLRe0O676pbobrwi1kJviAKCiWKARehLg4BH6HuEgDLoS+h/LehLLIAMBMFlEAwMmAaXaRBYgDcLTrqg04BNONnEgVocqUWCKfwIKoJN9LsiDR8zuAALDpdoAwsLQMiAEjLosEQdS+gghxIRJxgIACH5BAUKAHcALFoA7gAUAYUAAAf/gHeCg4SFhoeIiYqLjI2Oj5CRkpOIDACUmJmam5ydnp+gnxYBDhyhp6ipqqusrYQVdrEoHa61tre4uZ0Xsb0BRhS6wsPExawADr3KChOXxs/Q0dKIJcrWdhsr09vc3bYPCtfXJhbe5ufomRDi4gEiAunx8vODCQHs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";
	        }
	    }], [{
	        key: 'props',
	        get: function get() {
	            return {
	                /** @private */
	                forceRender: _photonCore.prop.boolean(),
	
	                disabled: _photonCore.prop.boolean({
	                    attribute: true
	                }),
	                src: _photonCore.prop.string({
	                    attribute: true
	                }),
	                alt: _photonCore.prop.string({
	                    attribute: true
	                }),
	                sizing: _photonCore.prop.string({
	                    attribute: true
	                }),
	                position: _photonCore.prop.string({
	                    attribute: true
	                }),
	                preload: _photonCore.prop.boolean({
	                    attribute: true
	                }),
	                preventLoad: _photonCore.prop.boolean({
	                    attribute: true
	                }),
	                fade: _photonCore.prop.boolean({
	                    attribute: true
	                }),
	                placeholder: _photonCore.prop.string({
	                    attribute: true
	                }),
	                width: _photonCore.prop.number({
	                    attribute: true
	                }),
	                height: _photonCore.prop.number({
	                    attribute: true
	                })
	            };
	        }
	    }]);
	
	    return PhImage;
	}(_photonCore.Component);
	
	customElements.define('ph-image', PhImage);

/***/ },
/* 19 */
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
/* 20 */
/*!***********************************************************!*\
  !*** ./src/components/ph-icon-svg-img/ph-icon-svg-img.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhIconSvgImg = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _iconAssets = __webpack_require__(/*! ./icon-assets.js */ 21);
	
	var iconset = _interopRequireWildcard(_iconAssets);
	
	var _phIcon = __webpack_require__(/*! ./ph-icon.css */ 22);
	
	var _phIcon2 = _interopRequireDefault(_phIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhIconSvgImg = exports.PhIconSvgImg = function (_Component) {
	    _inherits(PhIconSvgImg, _Component);
	
	    function PhIconSvgImg() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, PhIconSvgImg);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhIconSvgImg.__proto__ || Object.getPrototypeOf(PhIconSvgImg)).call.apply(_ref, [this].concat(args))), _this), _this._svgRef = function (ref) {
	            _this._svg = ref;
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(PhIconSvgImg, [{
	        key: '_getContent',
	        value: function _getContent() {
	            if (this.icon) {
	                return (0, _photonCore.h)('svg', {
	                    ref: this._svgRef,
	                    width: this.size,
	                    height: this.size,
	                    xmlns: 'http://www.w3.org/2000/svg',
	                    xmlnsXlink: 'http://www.w3.org/1999/xlink',
	                    viewBox: '0 0 24 24',
	                    preserveAspectRatio: 'xMidYMid meet'
	                });
	            } else if (this.src) {
	                return (0, _photonCore.h)('img', { src: this.src,
	                    width: this.size,
	                    height: this.size });
	            }
	        }
	    }, {
	        key: 'renderCallback',
	        value: function renderCallback() {
	            var style = { width: this.size + 'px', height: this.size + 'px' };
	            this.style = style;
	            return (0, _photonCore.h)(
	                'div',
	                { style: style },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phIcon2.default.toString()
	                ),
	                this._getContent()
	            );
	        }
	    }, {
	        key: 'renderedCallback',
	        value: function renderedCallback() {
	            if (this.icon) {
	                var svgContent = iconset[this.icon];
	                var svg = this._svg;
	                if (svg.__innerHTML !== svgContent) {
	                    svg.__innerHTML = svgContent;
	                    svg.innerHTML = svgContent;
	                }
	            }
	        }
	    }], [{
	        key: 'props',
	
	
	        //todo: opt out of ShadowDom?
	        //     this.useShadowDom = false;
	
	        get: function get() {
	            return {
	                icon: _photonCore.prop.string({
	                    attribute: true
	                }),
	                src: _photonCore.prop.string({
	                    attribute: true
	                }),
	                size: _photonCore.prop.number({
	                    attribute: true,
	                    default: 24
	                })
	            };
	        }
	    }]);
	
	    return PhIconSvgImg;
	}(_photonCore.Component);
	
	customElements.define('ph-icon-svg-img', PhIconSvgImg);

/***/ },
/* 21 */
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
/* 22 */
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
/* 23 */
/*!*******************************************!*\
  !*** ./src/components/ph-more/ph-more.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhMore = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phMore = __webpack_require__(/*! ./ph-more.css */ 24);
	
	var _phMore2 = _interopRequireDefault(_phMore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhMore = exports.PhMore = function (_Component) {
	    _inherits(PhMore, _Component);
	
	    function PhMore() {
	        _classCallCheck(this, PhMore);
	
	        return _possibleConstructorReturn(this, (PhMore.__proto__ || Object.getPrototypeOf(PhMore)).apply(this, arguments));
	    }
	
	    _createClass(PhMore, [{
	        key: 'onClick',
	        value: function onClick(e) {
	            this.show = !this.show;
	        }
	    }, {
	        key: 'renderMore',
	        value: function renderMore() {
	            return this.show ? (0, _photonCore.h)(
	                'div',
	                { id: 'more' },
	                (0, _photonCore.h)('slot', { name: 'content' })
	            ) : null;
	        }
	    }, {
	        key: 'renderLabel',
	        value: function renderLabel() {
	            var icon = this.show ? 'up' : 'down';
	            var label = this.show ? this.lessLabel : this.moreLabel;
	            return (0, _photonCore.h)(
	                'div',
	                { id: 'label-wrapper', onclick: this.onClick.bind(this) },
	                (0, _photonCore.h)('ph-icon', { name: icon, size: '10', 'class': 'primary' }),
	                (0, _photonCore.h)(
	                    'span',
	                    { id: 'label' },
	                    label
	                ),
	                (0, _photonCore.h)('ph-icon', { name: icon, size: '10' })
	            );
	        }
	    }, {
	        key: 'renderCallback',
	        value: function renderCallback() {
	            return (0, _photonCore.h)(
	                'div',
	                { id: 'container' },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phMore2.default.toString()
	                ),
	                this.renderMore(),
	                this.renderLabel()
	            );
	        }
	    }], [{
	        key: 'props',
	        get: function get() {
	            return {
	                moreLabel: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'Show More'
	                }),
	                lessLabel: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'Show Less'
	                }),
	                show: _photonCore.prop.boolean({
	                    attribute: true
	                })
	            };
	        }
	    }]);
	
	    return PhMore;
	}(_photonCore.Component);
	
	customElements.define('ph-more', PhMore);

/***/ },
/* 24 */
/*!********************************************!*\
  !*** ./src/components/ph-more/ph-more.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: block;\n    width: 100%;\n}\n\nph-more {\n    display: block;\n    width: 100%;\n}\n\n:host > #container {\n    width: 100%;\n}\n\n#label-wrapper {\n    cursor: pointer;\n    text-align: center;\n    margin-top: 10px;\n    color: #1D86B8;\n    fill: #1D86B8;\n    border-top: 1px solid #ddd;\n    padding: 5px 15px;\n}\n\n#label {\n    padding: 0 5px;\n}\n\n#more {\n    padding: 0 15px;\n}\n\nph-icon {\n    vertical-align: middle;\n}", ""]);
	
	// exports


/***/ },
/* 25 */
/*!*********************************************!*\
  !*** ./src/components/ph-panel/ph-panel.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhPanel = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phPanel = __webpack_require__(/*! ./ph-panel.css */ 26);
	
	var _phPanel2 = _interopRequireDefault(_phPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhPanel = exports.PhPanel = function (_Component) {
	    _inherits(PhPanel, _Component);
	
	    function PhPanel() {
	        _classCallCheck(this, PhPanel);
	
	        return _possibleConstructorReturn(this, (PhPanel.__proto__ || Object.getPrototypeOf(PhPanel)).apply(this, arguments));
	    }
	
	    _createClass(PhPanel, [{
	        key: 'renderCallback',
	        value: function renderCallback() {
	            return (0, _photonCore.h)(
	                'div',
	                { id: 'container' },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phPanel2.default.toString()
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    { id: 'content' },
	                    (0, _photonCore.h)('slot', { name: 'content' })
	                )
	            );
	        }
	    }]);
	
	    return PhPanel;
	}(_photonCore.Component);
	
	customElements.define('ph-panel', PhPanel);

/***/ },
/* 26 */
/*!**********************************************!*\
  !*** ./src/components/ph-panel/ph-panel.css ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: block;\n    box-sizing: border-box;\n    border: 1px solid #ddd;\n    background-color: #fff;\n    padding: 20px;\n}\n\nph-panel {\n    display: block;\n    box-sizing: border-box;\n    border: 1px solid #ddd;\n    background-color: #fff;\n    padding: 20px;\n}\n", ""]);
	
	// exports


/***/ },
/* 27 */
/*!*****************************************!*\
  !*** ./src/components/ph-tfu/ph-tfu.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhTfu = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phTfu = __webpack_require__(/*! ./ph-tfu.jss */ 28);
	
	var _phTfu2 = _interopRequireDefault(_phTfu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var priv = Symbol();
	
	var PhTfu = exports.PhTfu = function (_Component) {
	    _inherits(PhTfu, _Component);
	
	    _createClass(PhTfu, null, [{
	        key: 'props',
	        get: function get() {
	            console.log('PhTfu', 'get props');
	            return {
	                value: _photonCore.prop.string({
	                    attribute: true
	                }),
	                labels: _photonCore.prop.array({
	                    attribute: true,
	                    default: ['YYYY', 'NNN']
	                })
	            };
	        }
	    }]);
	
	    function PhTfu(self) {
	        var _this, _ret;
	
	        _classCallCheck(this, PhTfu);
	
	        self = (_this = _possibleConstructorReturn(this, (PhTfu.__proto__ || Object.getPrototypeOf(PhTfu)).call(this, self)), _this);
	        console.log(self.tagName, 'constructor');
	        bindPrivateMethods(self);
	        return _ret = self, _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(PhTfu, [{
	        key: 'connectedCallback',
	        value: function connectedCallback() {
	            console.log(this.tagName, 'connectedCallback');
	            _get(PhTfu.prototype.__proto__ || Object.getPrototypeOf(PhTfu.prototype), 'connectedCallback', this).call(this);
	        }
	    }, {
	        key: 'disconnectedCallback',
	        value: function disconnectedCallback() {
	            console.log(this.tagName, 'disconnectedCallback');
	            _get(PhTfu.prototype.__proto__ || Object.getPrototypeOf(PhTfu.prototype), 'disconnectedCallback', this).call(this);
	        }
	    }, {
	        key: 'attributeChangedCallback',
	        value: function attributeChangedCallback(attrName, oldVal, newVal) {
	            console.log(this.tagName, 'attributeChangedCallback', attrName, 'from:', oldVal, 'to:', newVal);
	            _get(PhTfu.prototype.__proto__ || Object.getPrototypeOf(PhTfu.prototype), 'attributeChangedCallback', this).call(this, attrName, oldVal, newVal);
	        }
	    }, {
	        key: 'cycle',
	        value: function cycle(a, b) {
	            console.log('public method cycle', 'a:', a, 'b:', b);
	            if (this.value === 'true') {
	                this.value = 'false';
	            } else if (this.value === 'false') {
	                this.value = null;
	            } else {
	                this.value = 'true';
	            }
	        }
	    }, {
	        key: 'updatedCallback',
	        value: function updatedCallback(prevProps) {
	            console.log(this.tagName, 'updatedCallback', prevProps);
	            if (!prevProps || prevProps.value !== this.value) {
	                // console.log('updated from:', prevValue, 'to:', this.value);
	                if (this.value) {
	                    this.setAttribute('aria-value', this.value);
	                } else {
	                    this.removeAttribute('aria-value');
	                }
	            }
	            return _get(PhTfu.prototype.__proto__ || Object.getPrototypeOf(PhTfu.prototype), 'updatedCallback', this).call(this, prevProps);
	        }
	    }, {
	        key: 'renderCallback',
	        value: function renderCallback() {
	            console.log(this.tagName, 'renderCallback');
	
	            // return [
	            //     h('p', 'paragraph 1'),
	            //     h('div', {aa:123, bb:'test'}, (<div>TEST</div>)),
	            //     h('p', 'paragraph 2'),
	
	            //     (<slot name="a"/>),
	            //     (<span
	            //         style={this.value === 'true' ? jss['.selected'] : null}
	            //         onclick={this[priv].onTrueClick}
	            //     >{getLabel(this, 0)}</span>),
	            //     (<slot name="k"/>),
	            //     (<span
	            //         style={this.value === 'false' ? jss['.selected'] : null}
	            //         onclick={this[priv].onFalseClick}
	            //     >{getLabel(this, 1)}</span>),
	            //     (<slot name="r"/>)
	            // ];
	
	            return (0, _photonCore.h)(
	                'div',
	                {
	                    style: _phTfu2.default['.container']
	                },
	                (0, _photonCore.h)('slot', { name: 'a' }),
	                (0, _photonCore.h)(
	                    'span',
	                    {
	                        style: this.value === 'true' ? _phTfu2.default['.selected'] : null,
	                        onclick: this[priv].onTrueClick
	                    },
	                    getLabel(this, 0)
	                ),
	                (0, _photonCore.h)('slot', { name: 'k' }),
	                (0, _photonCore.h)(
	                    'span',
	                    {
	                        style: this.value === 'false' ? _phTfu2.default['.selected'] : null,
	                        onclick: this[priv].onFalseClick
	                    },
	                    getLabel(this, 1)
	                ),
	                (0, _photonCore.h)('slot', { name: 'r' })
	            );
	        }
	    }, {
	        key: 'renderedCallback',
	        value: function renderedCallback() {
	            console.log(this.tagName, 'renderedCallback');
	        }
	    }]);
	
	    return PhTfu;
	}(_photonCore.Component);
	
	function bindPrivateMethods(elem) {
	    elem[priv] = {};
	    elem[priv].onTrueClick = onTrueClick.bind(elem);
	    elem[priv].onFalseClick = onFalseClick.bind(elem);
	}
	
	function onTrueClick(e) {
	    console.log('onTrueClick', e);
	    e.preventDefault();
	    // this.elem.value = (this.elem.value === true) ? null : true;
	    var newVal = this.value === 'true' ? null : 'true';
	    (0, _photonCore.emit)(this, 'change', { detail: newVal });
	}
	
	function onFalseClick(e) {
	    console.log('onFalseClick', e);
	    e.preventDefault();
	    // this.elem.value = (this.elem.value === false) ? null : false;
	    var newVal = this.value === 'false' ? null : 'false';
	    (0, _photonCore.emit)(this, 'change', { detail: newVal });
	}
	
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
	
	customElements.define('ph-tfu', PhTfu, undefined);

/***/ },
/* 28 */
/*!******************************************!*\
  !*** ./src/components/ph-tfu/ph-tfu.jss ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = {":host":{"display":"inline-block"},".container":{"display":"inline-block","backgroundColor":"#f7f7f7","border":"1px solid grey"},".selected":{"fontWeight":"bold"}}

/***/ },
/* 29 */
/*!*******************************************!*\
  !*** ./src/components/ph-test/ph-test.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhTest = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phTest = __webpack_require__(/*! ./ph-test.css */ 30);
	
	var _phTest2 = _interopRequireDefault(_phTest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhTest = exports.PhTest = function (_Component) {
	    _inherits(PhTest, _Component);
	
	    function PhTest() {
	        _classCallCheck(this, PhTest);
	
	        return _possibleConstructorReturn(this, (PhTest.__proto__ || Object.getPrototypeOf(PhTest)).apply(this, arguments));
	    }
	
	    _createClass(PhTest, [{
	        key: 'renderCallback',
	        value: function renderCallback() {
	            var formatVal = this.formatVal;
	            return (0, _photonCore.h)(
	                'div',
	                null,
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phTest2.default.toString()
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    null,
	                    'bool = ' + formatVal(this.bool)
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    null,
	                    'boolA = ' + formatVal(this.boolA)
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    null,
	                    'boolNA = ' + formatVal(this.boolNA)
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    null,
	                    'num = ' + formatVal(this.num)
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    null,
	                    'numA = ' + formatVal(this.numA)
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    null,
	                    'numNA = ' + formatVal(this.numNA)
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    null,
	                    'str = ' + formatVal(this.str)
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    null,
	                    'strA = ' + formatVal(this.strA)
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    null,
	                    'strNA = ' + formatVal(this.strNA)
	                )
	            );
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
	        key: 'props',
	        get: function get() {
	            return {
	                bool: _photonCore.prop.boolean(),
	                boolA: _photonCore.prop.boolean({ attribute: true }),
	                boolNA: _photonCore.prop.boolean({ attribute: true, default: null }),
	
	                num: _photonCore.prop.number(),
	                numA: _photonCore.prop.number({ attribute: true }),
	                numNA: _photonCore.prop.number({ attribute: true, default: null }),
	
	                str: _photonCore.prop.string(),
	                strA: _photonCore.prop.string({ attribute: true }),
	                strNA: _photonCore.prop.string({ attribute: true, default: null })
	            };
	        }
	    }]);
	
	    return PhTest;
	}(_photonCore.Component);
	
	customElements.define('ph-test', PhTest);

/***/ },
/* 30 */
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
/* 31 */
/*!*********************************************************!*\
  !*** ./src/components/ph-test-tester/ph-test-tester.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhTestTester = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phTestTester = __webpack_require__(/*! ./ph-test-tester.css */ 32);
	
	var _phTestTester2 = _interopRequireDefault(_phTestTester);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propValues = [undefined, null, NaN, '', '0', '1', 'false', 'true', 0, 1, false, true];
	var attrValues = [undefined, null, 'NaN', '', '0', '1', 'false', 'true'];
	
	var PhTestTester = exports.PhTestTester = function (_Component) {
	    _inherits(PhTestTester, _Component);
	
	    function PhTestTester() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, PhTestTester);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhTestTester.__proto__ || Object.getPrototypeOf(PhTestTester)).call.apply(_ref, [this].concat(args))), _this), _this.bool = null, _this.boolA = false, _this.boolNA = null, _this.num = null, _this.numA = -9, _this.numNA = null, _this.str = null, _this.strA = 'Hi', _this.strNA = null, _this.phTestRef = function (ref) {
	            _this.phTest = ref;
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(PhTestTester, [{
	        key: 'renderCallback',
	        value: function renderCallback() {
	
	            return (0, _photonCore.h)(
	                'div',
	                null,
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phTestTester2.default.toString()
	                ),
	                (0, _photonCore.h)('br', null),
	                (0, _photonCore.h)('ph-test', { name: 'phTest', ref: this.phTestRef,
	                    bool: this.bool,
	                    'bool-a': this.boolA,
	                    'bool-n-a': this.boolNA,
	
	                    num: this.num,
	                    'num-a': this.numA,
	                    'num-n-a': this.numNA,
	
	                    str: this.str,
	                    'str-a': this.strA,
	                    'str-n-a': this.strNA
	                }),
	                (0, _photonCore.h)('br', null),
	                this.renderTestProp(this, 'bool'),
	                this.renderTestProp(this, 'boolA'),
	                this.renderTestAttr(this, 'bool-a'),
	                this.renderTestProp(this, 'boolNA'),
	                this.renderTestAttr(this, 'bool-n-a'),
	                (0, _photonCore.h)('br', null),
	                this.renderTestProp(this, 'num'),
	                this.renderTestProp(this, 'numA'),
	                this.renderTestAttr(this, 'num-a'),
	                this.renderTestProp(this, 'numNA'),
	                this.renderTestAttr(this, 'num-n-a'),
	                (0, _photonCore.h)('br', null),
	                this.renderTestProp(this, 'str'),
	                this.renderTestProp(this, 'strA'),
	                this.renderTestAttr(this, 'str-a'),
	                this.renderTestProp(this, 'strNA'),
	                this.renderTestAttr(this, 'str-n-a')
	            );
	        }
	    }, {
	        key: 'renderTestProp',
	        value: function renderTestProp(self, propName) {
	            return (0, _photonCore.h)(
	                'div',
	                null,
	                propName + ' ',
	                propValues.map(function (val) {
	                    return (0, _photonCore.h)(
	                        'button',
	                        { onclick: self.setPropVal.bind(self, propName, val) },
	                        self.formatVal(val)
	                    );
	                }),
	                ' ' + self.printProp(propName)
	            );
	        }
	    }, {
	        key: 'renderTestAttr',
	        value: function renderTestAttr(self, attrName) {
	            return (0, _photonCore.h)(
	                'div',
	                null,
	                attrName + ' ',
	                attrValues.map(function (val) {
	                    return (0, _photonCore.h)(
	                        'button',
	                        { onclick: self.setAttrVal.bind(self, attrName, val) },
	                        self.formatVal(val)
	                    );
	                }),
	                ' ' + self.printAttr(attrName)
	            );
	        }
	    }, {
	        key: 'setPropVal',
	        value: function setPropVal(propName, val) {
	            var phTest = this.phTest;
	            phTest[propName] = val;
	            this.forceRender = !this.forceRender;
	        }
	    }, {
	        key: 'setAttrVal',
	        value: function setAttrVal(attrName, val) {
	            var phTest = this.phTest;
	            if (val == null) {
	                phTest.removeAttribute(attrName);
	            } else {
	                phTest.setAttribute(attrName, val);
	            }
	            this.forceRender = !this.forceRender;
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
	    }], [{
	        key: 'props',
	        get: function get() {
	            return {
	                /** @private */
	                forceRender: _photonCore.prop.boolean()
	            };
	        }
	    }]);
	
	    return PhTestTester;
	}(_photonCore.Component);
	
	customElements.define('ph-test-tester', PhTestTester);

/***/ },
/* 32 */
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
/* 33 */
/*!*********************************************************!*\
  !*** ./src/components/ph-user-avatar/ph-user-avatar.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhUserAvatar = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phAvatar = __webpack_require__(/*! ./../ph-avatar/ph-avatar */ 6);
	
	var _phUserAvatar = __webpack_require__(/*! ./ph-user-avatar.css */ 34);
	
	var _phUserAvatar2 = _interopRequireDefault(_phUserAvatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var priv = Symbol();
	
	//todo: extends dosn't work, It only creates props defined in the Super class!
	//export class PhUserAvatar extends PhAvatar {
	
	var PhUserAvatar = exports.PhUserAvatar = function (_Component) {
	    _inherits(PhUserAvatar, _Component);
	
	    _createClass(PhUserAvatar, null, [{
	        key: 'props',
	        get: function get() {
	            //todo: performance issue get props gets called more then ones per instance
	            //console.log('PhUserAvatar.props');
	            return Object.assign({}, _get(PhUserAvatar.__proto__ || Object.getPrototypeOf(PhUserAvatar), 'props', this), {
	                imageUrl: _photonCore.prop.string({
	                    attribute: 'image-url'
	                }),
	                initials: _photonCore.prop.string({
	                    attribute: true
	                }),
	                size: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'medium'
	                }),
	                isOrganization: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'false'
	                })
	            });
	        }
	    }]);
	
	    function PhUserAvatar(self) {
	        var _this, _ret;
	
	        _classCallCheck(this, PhUserAvatar);
	
	        self = (_this = _possibleConstructorReturn(this, (PhUserAvatar.__proto__ || Object.getPrototypeOf(PhUserAvatar)).call(this, self)), _this);
	        // console.log(self.tagName, 'constructor');
	        bindPrivateMethods(self);
	        return _ret = self, _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(PhUserAvatar, [{
	        key: 'getContent',
	        value: function getContent() {
	            if (this.isOrganization == 'true') {
	                var size = this.constructor.sizes[this.size];
	                var styles = {
	                    fontSize: '0'
	                };
	                return (0, _photonCore.h)('ph-icon', { name: 'building', size: size, style: styles });
	            } else if (this.imageUrl) {
	                return (0, _photonCore.h)('ph-image', { src: this.imageUrl,
	                    onerror: this[priv].onImageError,
	                    onload: this[priv].onImageLoad,
	                    sizing: 'cover' });
	            } else if (this.initials) {
	                return (0, _photonCore.h)(
	                    'span',
	                    null,
	                    this.initials
	                );
	            }
	        }
	    }, {
	        key: 'renderCallback',
	        value: function renderCallback() {
	            //console.log(this.tagName, 'renderCallback', this.imageUrl);
	            return (0, _photonCore.h)(
	                'div',
	                { id: 'container' },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phUserAvatar2.default.toString()
	                ),
	                this.getContent()
	            );
	        }
	    }]);
	
	    return PhUserAvatar;
	}(_photonCore.Component);
	
	PhUserAvatar.sizes = {
	    'small': 15,
	    'medium': 25,
	    'large': 35
	};
	
	
	function bindPrivateMethods(elem) {
	    elem[priv] = {};
	    elem[priv].onImageLoad = onImageLoad.bind(elem);
	    elem[priv].onImageError = onImageError.bind(elem);
	}
	
	function onImageLoad() {
	    //console.log('onload');
	}
	
	function onImageError() {
	    console.log('onerror');
	    this.imageUrl = null;
	}
	
	customElements.define('ph-user-avatar', PhUserAvatar);

/***/ },
/* 34 */
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
/* 35 */
/*!*************************************************************!*\
  !*** ./src/components/ph-vehicle-image/ph-vehicle-image.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PhVehicleImage = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _photonCore = __webpack_require__(/*! photon-core */ 1);
	
	var _phVehicleImage = __webpack_require__(/*! ./ph-vehicle-image.css */ 36);
	
	var _phVehicleImage2 = _interopRequireDefault(_phVehicleImage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhVehicleImage = exports.PhVehicleImage = function (_Component) {
	    _inherits(PhVehicleImage, _Component);
	
	    function PhVehicleImage() {
	        _classCallCheck(this, PhVehicleImage);
	
	        return _possibleConstructorReturn(this, (PhVehicleImage.__proto__ || Object.getPrototypeOf(PhVehicleImage)).apply(this, arguments));
	    }
	
	    _createClass(PhVehicleImage, [{
	        key: 'renderCallback',
	        value: function renderCallback() {
	            var size = {
	                width: 80,
	                height: 60
	            };
	            var bottomStyle = {
	                backgroundColor: this.color
	            };
	            return (0, _photonCore.h)(
	                'div',
	                { id: 'container' },
	                (0, _photonCore.h)(
	                    'style',
	                    null,
	                    _phVehicleImage2.default.toString()
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    { id: 'top' },
	                    this.topLabel
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    { id: 'image' },
	                    (0, _photonCore.h)('img', _extends({ src: this.src }, size))
	                ),
	                (0, _photonCore.h)(
	                    'div',
	                    { id: 'bottom', style: bottomStyle },
	                    this.bottomLabel
	                )
	            );
	        }
	    }], [{
	        key: 'props',
	        get: function get() {
	            return {
	                src: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'http://placekitten.com/80/60'
	                }),
	                color: _photonCore.prop.string({
	                    attribute: true,
	                    default: '#4AB471'
	                }),
	                topLabel: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'USED'
	                }),
	                bottomLabel: _photonCore.prop.string({
	                    attribute: true,
	                    default: 'In Stock'
	                })
	            };
	        }
	    }]);
	
	    return PhVehicleImage;
	}(_photonCore.Component);
	
	customElements.define('ph-vehicle-image', PhVehicleImage);

/***/ },
/* 36 */
/*!**************************************************************!*\
  !*** ./src/components/ph-vehicle-image/ph-vehicle-image.css ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 5)();
	// imports
	
	
	// module
	exports.push([module.id, ":host {\n    display: inline-block;\n    border: 1px solid #DDDDDD;\n    box-sizing: border-box;\n}\n\n#top, #bottom {\n    text-align: center;\n}\n\n#top {\n    background-color: #F5F5F5;\n    border-bottom: 1px solid #DDDDDD;\n}\n\n#image {\n    width: 80px;\n    height: 60px;\n}\n\n#bottom {\n    color: #fff;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=photons.js.map