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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
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
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var manifest_1 = tslib_1.__importDefault(__webpack_require__(/*! ./manifest */ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"));
var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};
function createConsumerApi(manifests, exposureMap) {
    var api = {};
    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });
    Object.defineProperty(api, '@manifest', createReadOnlyValue(manifest_1["default"](manifests)));
    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
}
exports["default"] = createConsumerApi;
//# sourceMappingURL=createConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var createConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"));
exports.createConsumerApi = createConsumerApi_1["default"];
var readFromConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"));
exports.readFromConsumerApi = readFromConsumerApi_1["default"];
var index_1 = __webpack_require__(/*! ./registry/index */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js");
exports.SynchronousRegistry = index_1.SynchronousRegistry;
exports.SynchronousMetaRegistry = index_1.SynchronousMetaRegistry;
exports["default"] = readFromConsumerApi_1["default"]('manifest');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = function (manifests) {
    return function (identifier, options, bootstrap) {
        var _a;
        manifests.push((_a = {}, _a[identifier] = {
            options: options,
            bootstrap: bootstrap
        }, _a));
    };
};
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
function readFromConsumerApi(key) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']["@" + key]) {
            return (_a = window['@Neos:HostPluginAPI'])["@" + key].apply(_a, tslib_1.__spread(args));
        }
        throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
}
exports["default"] = readFromConsumerApi;
//# sourceMappingURL=readFromConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var AbstractRegistry = function () {
    function AbstractRegistry(description) {
        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';
        this.description = description;
    }
    return AbstractRegistry;
}();
exports["default"] = AbstractRegistry;
//# sourceMappingURL=AbstractRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
var SynchronousMetaRegistry = function (_super) {
    tslib_1.__extends(SynchronousMetaRegistry, _super);
    function SynchronousMetaRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SynchronousMetaRegistry.prototype.set = function (key, value) {
        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
            throw new Error('You can only add registries to a meta registry');
        }
        return _super.prototype.set.call(this, key, value);
    };
    return SynchronousMetaRegistry;
}(SynchronousRegistry_1["default"]);
exports["default"] = SynchronousMetaRegistry;
//# sourceMappingURL=SynchronousMetaRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var AbstractRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AbstractRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"));
var positional_array_sorter_1 = tslib_1.__importDefault(__webpack_require__(/*! @neos-project/positional-array-sorter */ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"));
var SynchronousRegistry = function (_super) {
    tslib_1.__extends(SynchronousRegistry, _super);
    function SynchronousRegistry(description) {
        var _this = _super.call(this, description) || this;
        _this._registry = [];
        return _this;
    }
    SynchronousRegistry.prototype.set = function (key, value, position) {
        if (position === void 0) {
            position = 0;
        }
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        if (typeof position !== 'string' && typeof position !== 'number') {
            throw new Error('Position must be a string or a number');
        }
        var entry = { key: key, value: value };
        if (position) {
            entry.position = position;
        }
        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
            return item.key === key;
        });
        if (indexOfItemWithTheSameKey === -1) {
            this._registry.push(entry);
        } else {
            this._registry[indexOfItemWithTheSameKey] = entry;
        }
        return value;
    };
    SynchronousRegistry.prototype.get = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return null;
        }
        var result = this._registry.find(function (item) {
            return item.key === key;
        });
        return result ? result.value : null;
    };
    SynchronousRegistry.prototype._getChildrenWrapped = function (searchKey) {
        var unsortedChildren = this._registry.filter(function (item) {
            return item.key.indexOf(searchKey + '/') === 0;
        });
        return positional_array_sorter_1["default"](unsortedChildren);
    };
    SynchronousRegistry.prototype.getChildrenAsObject = function (searchKey) {
        var result = {};
        this._getChildrenWrapped(searchKey).forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getChildren = function (searchKey) {
        return this._getChildrenWrapped(searchKey).map(function (item) {
            return item.value;
        });
    };
    SynchronousRegistry.prototype.has = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return false;
        }
        return Boolean(this._registry.find(function (item) {
            return item.key === key;
        }));
    };
    SynchronousRegistry.prototype._getAllWrapped = function () {
        return positional_array_sorter_1["default"](this._registry);
    };
    SynchronousRegistry.prototype.getAllAsObject = function () {
        var result = {};
        this._getAllWrapped().forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getAllAsList = function () {
        return this._getAllWrapped().map(function (item) {
            return Object.assign({ id: item.key }, item.value);
        });
    };
    return SynchronousRegistry;
}(AbstractRegistry_1["default"]);
exports["default"] = SynchronousRegistry;
//# sourceMappingURL=SynchronousRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
exports.SynchronousRegistry = SynchronousRegistry_1["default"];
var SynchronousMetaRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousMetaRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"));
exports.SynchronousMetaRegistry = SynchronousMetaRegistry_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),

/***/ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var positionalArraySorter = function positionalArraySorter(subject, position, idKey) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g;
    if (position === void 0) {
        position = 'position';
    }
    if (idKey === void 0) {
        idKey = 'key';
    }
    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    var indexMapping = {};
    var middleKeys = {};
    var startKeys = {};
    var endKeys = {};
    var beforeKeys = {};
    var afterKeys = {};
    subject.forEach(function (item, index) {
        var key = item[idKey] ? item[idKey] : String(index);
        indexMapping[key] = index;
        var positionValue = positionAccessor(item);
        var position = String(positionValue ? positionValue : index);
        var invalid = false;
        if (position.startsWith('start')) {
            var weightMatch = position.match(/start\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!startKeys[weight]) {
                startKeys[weight] = [];
            }
            startKeys[weight].push(key);
        } else if (position.startsWith('end')) {
            var weightMatch = position.match(/end\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!endKeys[weight]) {
                endKeys[weight] = [];
            }
            endKeys[weight].push(key);
        } else if (position.startsWith('before')) {
            var match = position.match(/before\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!beforeKeys[reference]) {
                    beforeKeys[reference] = {};
                }
                if (!beforeKeys[reference][weight]) {
                    beforeKeys[reference][weight] = [];
                }
                beforeKeys[reference][weight].push(key);
            }
        } else if (position.startsWith('after')) {
            var match = position.match(/after\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!afterKeys[reference]) {
                    afterKeys[reference] = {};
                }
                if (!afterKeys[reference][weight]) {
                    afterKeys[reference][weight] = [];
                }
                afterKeys[reference][weight].push(key);
            }
        } else {
            invalid = true;
        }
        if (invalid) {
            var numberPosition = parseFloat(position);
            if (isNaN(numberPosition) || !isFinite(numberPosition)) {
                numberPosition = index;
            }
            if (!middleKeys[numberPosition]) {
                middleKeys[numberPosition] = [];
            }
            middleKeys[numberPosition].push(key);
        }
    });
    var resultStart = [];
    var resultMiddle = [];
    var resultEnd = [];
    var processedKeys = [];
    var sortedWeights = function sortedWeights(dict, asc) {
        var weights = Object.keys(dict).map(function (x) {
            return Number(x);
        }).sort(function (a, b) {
            return a - b;
        });
        return asc ? weights : weights.reverse();
    };
    var addToResults = function addToResults(keys, result) {
        keys.forEach(function (key) {
            var e_8, _a, e_9, _b;
            if (processedKeys.indexOf(key) >= 0) {
                return;
            }
            processedKeys.push(key);
            if (beforeKeys[key]) {
                var beforeWeights = sortedWeights(beforeKeys[key], true);
                try {
                    for (var beforeWeights_1 = tslib_1.__values(beforeWeights), beforeWeights_1_1 = beforeWeights_1.next(); !beforeWeights_1_1.done; beforeWeights_1_1 = beforeWeights_1.next()) {
                        var i = beforeWeights_1_1.value;
                        addToResults(beforeKeys[key][i], result);
                    }
                } catch (e_8_1) {
                    e_8 = { error: e_8_1 };
                } finally {
                    try {
                        if (beforeWeights_1_1 && !beforeWeights_1_1.done && (_a = beforeWeights_1["return"])) _a.call(beforeWeights_1);
                    } finally {
                        if (e_8) throw e_8.error;
                    }
                }
            }
            result.push(key);
            if (afterKeys[key]) {
                var afterWeights = sortedWeights(afterKeys[key], false);
                try {
                    for (var afterWeights_1 = tslib_1.__values(afterWeights), afterWeights_1_1 = afterWeights_1.next(); !afterWeights_1_1.done; afterWeights_1_1 = afterWeights_1.next()) {
                        var i = afterWeights_1_1.value;
                        addToResults(afterKeys[key][i], result);
                    }
                } catch (e_9_1) {
                    e_9 = { error: e_9_1 };
                } finally {
                    try {
                        if (afterWeights_1_1 && !afterWeights_1_1.done && (_b = afterWeights_1["return"])) _b.call(afterWeights_1);
                    } finally {
                        if (e_9) throw e_9.error;
                    }
                }
            }
        });
    };
    try {
        for (var _h = tslib_1.__values(sortedWeights(startKeys, false)), _j = _h.next(); !_j.done; _j = _h.next()) {
            var i = _j.value;
            addToResults(startKeys[i], resultStart);
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (_j && !_j.done && (_a = _h["return"])) _a.call(_h);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    try {
        for (var _k = tslib_1.__values(sortedWeights(middleKeys, true)), _l = _k.next(); !_l.done; _l = _k.next()) {
            var i = _l.value;
            addToResults(middleKeys[i], resultMiddle);
        }
    } catch (e_2_1) {
        e_2 = { error: e_2_1 };
    } finally {
        try {
            if (_l && !_l.done && (_b = _k["return"])) _b.call(_k);
        } finally {
            if (e_2) throw e_2.error;
        }
    }
    try {
        for (var _m = tslib_1.__values(sortedWeights(endKeys, true)), _o = _m.next(); !_o.done; _o = _m.next()) {
            var i = _o.value;
            addToResults(endKeys[i], resultEnd);
        }
    } catch (e_3_1) {
        e_3 = { error: e_3_1 };
    } finally {
        try {
            if (_o && !_o.done && (_c = _m["return"])) _c.call(_m);
        } finally {
            if (e_3) throw e_3.error;
        }
    }
    try {
        for (var _p = tslib_1.__values(Object.keys(beforeKeys)), _q = _p.next(); !_q.done; _q = _p.next()) {
            var key = _q.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _r = (e_5 = void 0, tslib_1.__values(sortedWeights(beforeKeys[key], false))), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var i = _s.value;
                    addToResults(beforeKeys[key][i], resultStart);
                }
            } catch (e_5_1) {
                e_5 = { error: e_5_1 };
            } finally {
                try {
                    if (_s && !_s.done && (_e = _r["return"])) _e.call(_r);
                } finally {
                    if (e_5) throw e_5.error;
                }
            }
        }
    } catch (e_4_1) {
        e_4 = { error: e_4_1 };
    } finally {
        try {
            if (_q && !_q.done && (_d = _p["return"])) _d.call(_p);
        } finally {
            if (e_4) throw e_4.error;
        }
    }
    try {
        for (var _t = tslib_1.__values(Object.keys(afterKeys)), _u = _t.next(); !_u.done; _u = _t.next()) {
            var key = _u.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _v = (e_7 = void 0, tslib_1.__values(sortedWeights(afterKeys[key], false))), _w = _v.next(); !_w.done; _w = _v.next()) {
                    var i = _w.value;
                    addToResults(afterKeys[key][i], resultMiddle);
                }
            } catch (e_7_1) {
                e_7 = { error: e_7_1 };
            } finally {
                try {
                    if (_w && !_w.done && (_g = _v["return"])) _g.call(_v);
                } finally {
                    if (e_7) throw e_7.error;
                }
            }
        }
    } catch (e_6_1) {
        e_6 = { error: e_6_1 };
    } finally {
        try {
            if (_u && !_u.done && (_f = _t["return"])) _f.call(_t);
        } finally {
            if (e_6) throw e_6.error;
        }
    }
    var sortedKeys = tslib_1.__spread(resultStart, resultMiddle, resultEnd);
    return sortedKeys.map(function (key) {
        return indexMapping[key];
    }).map(function (i) {
        return subject[i];
    });
};
exports["default"] = positionalArraySorter;
//# sourceMappingURL=positionalArraySorter.js.map

/***/ }),

/***/ "./node_modules/emoji-mart/data/all.json":
/*!***********************************************!*\
  !*** ./node_modules/emoji-mart/data/all.json ***!
  \***********************************************/
/*! exports provided: compressed, categories, emojis, aliases, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"compressed\":true,\"categories\":[{\"id\":\"people\",\"name\":\"Smileys & People\",\"emojis\":[\"grinning\",\"smiley\",\"smile\",\"grin\",\"laughing\",\"sweat_smile\",\"rolling_on_the_floor_laughing\",\"joy\",\"slightly_smiling_face\",\"upside_down_face\",\"wink\",\"blush\",\"innocent\",\"smiling_face_with_3_hearts\",\"heart_eyes\",\"star-struck\",\"kissing_heart\",\"kissing\",\"relaxed\",\"kissing_closed_eyes\",\"kissing_smiling_eyes\",\"yum\",\"stuck_out_tongue\",\"stuck_out_tongue_winking_eye\",\"zany_face\",\"stuck_out_tongue_closed_eyes\",\"money_mouth_face\",\"hugging_face\",\"face_with_hand_over_mouth\",\"shushing_face\",\"thinking_face\",\"zipper_mouth_face\",\"face_with_raised_eyebrow\",\"neutral_face\",\"expressionless\",\"no_mouth\",\"smirk\",\"unamused\",\"face_with_rolling_eyes\",\"grimacing\",\"lying_face\",\"relieved\",\"pensive\",\"sleepy\",\"drooling_face\",\"sleeping\",\"mask\",\"face_with_thermometer\",\"face_with_head_bandage\",\"nauseated_face\",\"face_vomiting\",\"sneezing_face\",\"hot_face\",\"cold_face\",\"woozy_face\",\"dizzy_face\",\"exploding_head\",\"face_with_cowboy_hat\",\"partying_face\",\"sunglasses\",\"nerd_face\",\"face_with_monocle\",\"confused\",\"worried\",\"slightly_frowning_face\",\"white_frowning_face\",\"open_mouth\",\"hushed\",\"astonished\",\"flushed\",\"pleading_face\",\"frowning\",\"anguished\",\"fearful\",\"cold_sweat\",\"disappointed_relieved\",\"cry\",\"sob\",\"scream\",\"confounded\",\"persevere\",\"disappointed\",\"sweat\",\"weary\",\"tired_face\",\"yawning_face\",\"triumph\",\"rage\",\"angry\",\"face_with_symbols_on_mouth\",\"smiling_imp\",\"imp\",\"skull\",\"skull_and_crossbones\",\"hankey\",\"clown_face\",\"japanese_ogre\",\"japanese_goblin\",\"ghost\",\"alien\",\"space_invader\",\"robot_face\",\"smiley_cat\",\"smile_cat\",\"joy_cat\",\"heart_eyes_cat\",\"smirk_cat\",\"kissing_cat\",\"scream_cat\",\"crying_cat_face\",\"pouting_cat\",\"see_no_evil\",\"hear_no_evil\",\"speak_no_evil\",\"wave\",\"raised_back_of_hand\",\"raised_hand_with_fingers_splayed\",\"hand\",\"spock-hand\",\"ok_hand\",\"pinching_hand\",\"v\",\"crossed_fingers\",\"i_love_you_hand_sign\",\"the_horns\",\"call_me_hand\",\"point_left\",\"point_right\",\"point_up_2\",\"middle_finger\",\"point_down\",\"point_up\",\"+1\",\"-1\",\"fist\",\"facepunch\",\"left-facing_fist\",\"right-facing_fist\",\"clap\",\"raised_hands\",\"open_hands\",\"palms_up_together\",\"handshake\",\"pray\",\"writing_hand\",\"nail_care\",\"selfie\",\"muscle\",\"mechanical_arm\",\"mechanical_leg\",\"leg\",\"foot\",\"ear\",\"ear_with_hearing_aid\",\"nose\",\"brain\",\"tooth\",\"bone\",\"eyes\",\"eye\",\"tongue\",\"lips\",\"baby\",\"child\",\"boy\",\"girl\",\"adult\",\"person_with_blond_hair\",\"man\",\"bearded_person\",\"red_haired_man\",\"curly_haired_man\",\"white_haired_man\",\"bald_man\",\"woman\",\"red_haired_woman\",\"red_haired_person\",\"curly_haired_woman\",\"curly_haired_person\",\"white_haired_woman\",\"white_haired_person\",\"bald_woman\",\"bald_person\",\"blond-haired-woman\",\"blond-haired-man\",\"older_adult\",\"older_man\",\"older_woman\",\"person_frowning\",\"man-frowning\",\"woman-frowning\",\"person_with_pouting_face\",\"man-pouting\",\"woman-pouting\",\"no_good\",\"man-gesturing-no\",\"woman-gesturing-no\",\"ok_woman\",\"man-gesturing-ok\",\"woman-gesturing-ok\",\"information_desk_person\",\"man-tipping-hand\",\"woman-tipping-hand\",\"raising_hand\",\"man-raising-hand\",\"woman-raising-hand\",\"deaf_person\",\"deaf_man\",\"deaf_woman\",\"bow\",\"man-bowing\",\"woman-bowing\",\"face_palm\",\"man-facepalming\",\"woman-facepalming\",\"shrug\",\"man-shrugging\",\"woman-shrugging\",\"health_worker\",\"male-doctor\",\"female-doctor\",\"student\",\"male-student\",\"female-student\",\"teacher\",\"male-teacher\",\"female-teacher\",\"judge\",\"male-judge\",\"female-judge\",\"farmer\",\"male-farmer\",\"female-farmer\",\"cook\",\"male-cook\",\"female-cook\",\"mechanic\",\"male-mechanic\",\"female-mechanic\",\"factory_worker\",\"male-factory-worker\",\"female-factory-worker\",\"office_worker\",\"male-office-worker\",\"female-office-worker\",\"scientist\",\"male-scientist\",\"female-scientist\",\"technologist\",\"male-technologist\",\"female-technologist\",\"singer\",\"male-singer\",\"female-singer\",\"artist\",\"male-artist\",\"female-artist\",\"pilot\",\"male-pilot\",\"female-pilot\",\"astronaut\",\"male-astronaut\",\"female-astronaut\",\"firefighter\",\"male-firefighter\",\"female-firefighter\",\"cop\",\"male-police-officer\",\"female-police-officer\",\"sleuth_or_spy\",\"male-detective\",\"female-detective\",\"guardsman\",\"male-guard\",\"female-guard\",\"construction_worker\",\"male-construction-worker\",\"female-construction-worker\",\"prince\",\"princess\",\"man_with_turban\",\"man-wearing-turban\",\"woman-wearing-turban\",\"man_with_gua_pi_mao\",\"person_with_headscarf\",\"man_in_tuxedo\",\"bride_with_veil\",\"pregnant_woman\",\"breast-feeding\",\"angel\",\"santa\",\"mrs_claus\",\"superhero\",\"male_superhero\",\"female_superhero\",\"supervillain\",\"male_supervillain\",\"female_supervillain\",\"mage\",\"male_mage\",\"female_mage\",\"fairy\",\"male_fairy\",\"female_fairy\",\"vampire\",\"male_vampire\",\"female_vampire\",\"merperson\",\"merman\",\"mermaid\",\"elf\",\"male_elf\",\"female_elf\",\"genie\",\"male_genie\",\"female_genie\",\"zombie\",\"male_zombie\",\"female_zombie\",\"massage\",\"man-getting-massage\",\"woman-getting-massage\",\"haircut\",\"man-getting-haircut\",\"woman-getting-haircut\",\"walking\",\"man-walking\",\"woman-walking\",\"standing_person\",\"man_standing\",\"woman_standing\",\"kneeling_person\",\"man_kneeling\",\"woman_kneeling\",\"person_with_probing_cane\",\"man_with_probing_cane\",\"woman_with_probing_cane\",\"person_in_motorized_wheelchair\",\"man_in_motorized_wheelchair\",\"woman_in_motorized_wheelchair\",\"person_in_manual_wheelchair\",\"man_in_manual_wheelchair\",\"woman_in_manual_wheelchair\",\"runner\",\"man-running\",\"woman-running\",\"dancer\",\"man_dancing\",\"man_in_business_suit_levitating\",\"dancers\",\"man-with-bunny-ears-partying\",\"woman-with-bunny-ears-partying\",\"person_in_steamy_room\",\"man_in_steamy_room\",\"woman_in_steamy_room\",\"person_climbing\",\"man_climbing\",\"woman_climbing\",\"fencer\",\"horse_racing\",\"skier\",\"snowboarder\",\"golfer\",\"man-golfing\",\"woman-golfing\",\"surfer\",\"man-surfing\",\"woman-surfing\",\"rowboat\",\"man-rowing-boat\",\"woman-rowing-boat\",\"swimmer\",\"man-swimming\",\"woman-swimming\",\"person_with_ball\",\"man-bouncing-ball\",\"woman-bouncing-ball\",\"weight_lifter\",\"man-lifting-weights\",\"woman-lifting-weights\",\"bicyclist\",\"man-biking\",\"woman-biking\",\"mountain_bicyclist\",\"man-mountain-biking\",\"woman-mountain-biking\",\"person_doing_cartwheel\",\"man-cartwheeling\",\"woman-cartwheeling\",\"wrestlers\",\"man-wrestling\",\"woman-wrestling\",\"water_polo\",\"man-playing-water-polo\",\"woman-playing-water-polo\",\"handball\",\"man-playing-handball\",\"woman-playing-handball\",\"juggling\",\"man-juggling\",\"woman-juggling\",\"person_in_lotus_position\",\"man_in_lotus_position\",\"woman_in_lotus_position\",\"bath\",\"sleeping_accommodation\",\"people_holding_hands\",\"two_women_holding_hands\",\"couple\",\"two_men_holding_hands\",\"couplekiss\",\"woman-kiss-man\",\"man-kiss-man\",\"woman-kiss-woman\",\"couple_with_heart\",\"woman-heart-man\",\"man-heart-man\",\"woman-heart-woman\",\"family\",\"man-woman-boy\",\"man-woman-girl\",\"man-woman-girl-boy\",\"man-woman-boy-boy\",\"man-woman-girl-girl\",\"man-man-boy\",\"man-man-girl\",\"man-man-girl-boy\",\"man-man-boy-boy\",\"man-man-girl-girl\",\"woman-woman-boy\",\"woman-woman-girl\",\"woman-woman-girl-boy\",\"woman-woman-boy-boy\",\"woman-woman-girl-girl\",\"man-boy\",\"man-boy-boy\",\"man-girl\",\"man-girl-boy\",\"man-girl-girl\",\"woman-boy\",\"woman-boy-boy\",\"woman-girl\",\"woman-girl-boy\",\"woman-girl-girl\",\"speaking_head_in_silhouette\",\"bust_in_silhouette\",\"busts_in_silhouette\",\"footprints\",\"kiss\",\"love_letter\",\"cupid\",\"gift_heart\",\"sparkling_heart\",\"heartpulse\",\"heartbeat\",\"revolving_hearts\",\"two_hearts\",\"heart_decoration\",\"heavy_heart_exclamation_mark_ornament\",\"broken_heart\",\"heart\",\"orange_heart\",\"yellow_heart\",\"green_heart\",\"blue_heart\",\"purple_heart\",\"brown_heart\",\"black_heart\",\"white_heart\",\"100\",\"anger\",\"boom\",\"dizzy\",\"sweat_drops\",\"dash\",\"hole\",\"bomb\",\"speech_balloon\",\"eye-in-speech-bubble\",\"left_speech_bubble\",\"right_anger_bubble\",\"thought_balloon\",\"zzz\"]},{\"id\":\"nature\",\"name\":\"Animals & Nature\",\"emojis\":[\"monkey_face\",\"monkey\",\"gorilla\",\"orangutan\",\"dog\",\"dog2\",\"guide_dog\",\"service_dog\",\"poodle\",\"wolf\",\"fox_face\",\"raccoon\",\"cat\",\"cat2\",\"lion_face\",\"tiger\",\"tiger2\",\"leopard\",\"horse\",\"racehorse\",\"unicorn_face\",\"zebra_face\",\"deer\",\"cow\",\"ox\",\"water_buffalo\",\"cow2\",\"pig\",\"pig2\",\"boar\",\"pig_nose\",\"ram\",\"sheep\",\"goat\",\"dromedary_camel\",\"camel\",\"llama\",\"giraffe_face\",\"elephant\",\"rhinoceros\",\"hippopotamus\",\"mouse\",\"mouse2\",\"rat\",\"hamster\",\"rabbit\",\"rabbit2\",\"chipmunk\",\"hedgehog\",\"bat\",\"bear\",\"koala\",\"panda_face\",\"sloth\",\"otter\",\"skunk\",\"kangaroo\",\"badger\",\"feet\",\"turkey\",\"chicken\",\"rooster\",\"hatching_chick\",\"baby_chick\",\"hatched_chick\",\"bird\",\"penguin\",\"dove_of_peace\",\"eagle\",\"duck\",\"swan\",\"owl\",\"flamingo\",\"peacock\",\"parrot\",\"frog\",\"crocodile\",\"turtle\",\"lizard\",\"snake\",\"dragon_face\",\"dragon\",\"sauropod\",\"t-rex\",\"whale\",\"whale2\",\"dolphin\",\"fish\",\"tropical_fish\",\"blowfish\",\"shark\",\"octopus\",\"shell\",\"snail\",\"butterfly\",\"bug\",\"ant\",\"bee\",\"beetle\",\"cricket\",\"spider\",\"spider_web\",\"scorpion\",\"mosquito\",\"microbe\",\"bouquet\",\"cherry_blossom\",\"white_flower\",\"rosette\",\"rose\",\"wilted_flower\",\"hibiscus\",\"sunflower\",\"blossom\",\"tulip\",\"seedling\",\"evergreen_tree\",\"deciduous_tree\",\"palm_tree\",\"cactus\",\"ear_of_rice\",\"herb\",\"shamrock\",\"four_leaf_clover\",\"maple_leaf\",\"fallen_leaf\",\"leaves\"]},{\"id\":\"foods\",\"name\":\"Food & Drink\",\"emojis\":[\"grapes\",\"melon\",\"watermelon\",\"tangerine\",\"lemon\",\"banana\",\"pineapple\",\"mango\",\"apple\",\"green_apple\",\"pear\",\"peach\",\"cherries\",\"strawberry\",\"kiwifruit\",\"tomato\",\"coconut\",\"avocado\",\"eggplant\",\"potato\",\"carrot\",\"corn\",\"hot_pepper\",\"cucumber\",\"leafy_green\",\"broccoli\",\"garlic\",\"onion\",\"mushroom\",\"peanuts\",\"chestnut\",\"bread\",\"croissant\",\"baguette_bread\",\"pretzel\",\"bagel\",\"pancakes\",\"waffle\",\"cheese_wedge\",\"meat_on_bone\",\"poultry_leg\",\"cut_of_meat\",\"bacon\",\"hamburger\",\"fries\",\"pizza\",\"hotdog\",\"sandwich\",\"taco\",\"burrito\",\"stuffed_flatbread\",\"falafel\",\"egg\",\"fried_egg\",\"shallow_pan_of_food\",\"stew\",\"bowl_with_spoon\",\"green_salad\",\"popcorn\",\"butter\",\"salt\",\"canned_food\",\"bento\",\"rice_cracker\",\"rice_ball\",\"rice\",\"curry\",\"ramen\",\"spaghetti\",\"sweet_potato\",\"oden\",\"sushi\",\"fried_shrimp\",\"fish_cake\",\"moon_cake\",\"dango\",\"dumpling\",\"fortune_cookie\",\"takeout_box\",\"crab\",\"lobster\",\"shrimp\",\"squid\",\"oyster\",\"icecream\",\"shaved_ice\",\"ice_cream\",\"doughnut\",\"cookie\",\"birthday\",\"cake\",\"cupcake\",\"pie\",\"chocolate_bar\",\"candy\",\"lollipop\",\"custard\",\"honey_pot\",\"baby_bottle\",\"glass_of_milk\",\"coffee\",\"tea\",\"sake\",\"champagne\",\"wine_glass\",\"cocktail\",\"tropical_drink\",\"beer\",\"beers\",\"clinking_glasses\",\"tumbler_glass\",\"cup_with_straw\",\"beverage_box\",\"mate_drink\",\"ice_cube\",\"chopsticks\",\"knife_fork_plate\",\"fork_and_knife\",\"spoon\",\"hocho\",\"amphora\"]},{\"id\":\"activity\",\"name\":\"Activities\",\"emojis\":[\"jack_o_lantern\",\"christmas_tree\",\"fireworks\",\"sparkler\",\"firecracker\",\"sparkles\",\"balloon\",\"tada\",\"confetti_ball\",\"tanabata_tree\",\"bamboo\",\"dolls\",\"flags\",\"wind_chime\",\"rice_scene\",\"red_envelope\",\"ribbon\",\"gift\",\"reminder_ribbon\",\"admission_tickets\",\"ticket\",\"medal\",\"trophy\",\"sports_medal\",\"first_place_medal\",\"second_place_medal\",\"third_place_medal\",\"soccer\",\"baseball\",\"softball\",\"basketball\",\"volleyball\",\"football\",\"rugby_football\",\"tennis\",\"flying_disc\",\"bowling\",\"cricket_bat_and_ball\",\"field_hockey_stick_and_ball\",\"ice_hockey_stick_and_puck\",\"lacrosse\",\"table_tennis_paddle_and_ball\",\"badminton_racquet_and_shuttlecock\",\"boxing_glove\",\"martial_arts_uniform\",\"goal_net\",\"golf\",\"ice_skate\",\"fishing_pole_and_fish\",\"diving_mask\",\"running_shirt_with_sash\",\"ski\",\"sled\",\"curling_stone\",\"dart\",\"yo-yo\",\"kite\",\"8ball\",\"crystal_ball\",\"nazar_amulet\",\"video_game\",\"joystick\",\"slot_machine\",\"game_die\",\"jigsaw\",\"teddy_bear\",\"spades\",\"hearts\",\"diamonds\",\"clubs\",\"chess_pawn\",\"black_joker\",\"mahjong\",\"flower_playing_cards\",\"performing_arts\",\"frame_with_picture\",\"art\",\"thread\",\"yarn\"]},{\"id\":\"places\",\"name\":\"Travel & Places\",\"emojis\":[\"earth_africa\",\"earth_americas\",\"earth_asia\",\"globe_with_meridians\",\"world_map\",\"japan\",\"compass\",\"snow_capped_mountain\",\"mountain\",\"volcano\",\"mount_fuji\",\"camping\",\"beach_with_umbrella\",\"desert\",\"desert_island\",\"national_park\",\"stadium\",\"classical_building\",\"building_construction\",\"bricks\",\"house_buildings\",\"derelict_house_building\",\"house\",\"house_with_garden\",\"office\",\"post_office\",\"european_post_office\",\"hospital\",\"bank\",\"hotel\",\"love_hotel\",\"convenience_store\",\"school\",\"department_store\",\"factory\",\"japanese_castle\",\"european_castle\",\"wedding\",\"tokyo_tower\",\"statue_of_liberty\",\"church\",\"mosque\",\"hindu_temple\",\"synagogue\",\"shinto_shrine\",\"kaaba\",\"fountain\",\"tent\",\"foggy\",\"night_with_stars\",\"cityscape\",\"sunrise_over_mountains\",\"sunrise\",\"city_sunset\",\"city_sunrise\",\"bridge_at_night\",\"hotsprings\",\"carousel_horse\",\"ferris_wheel\",\"roller_coaster\",\"barber\",\"circus_tent\",\"steam_locomotive\",\"railway_car\",\"bullettrain_side\",\"bullettrain_front\",\"train2\",\"metro\",\"light_rail\",\"station\",\"tram\",\"monorail\",\"mountain_railway\",\"train\",\"bus\",\"oncoming_bus\",\"trolleybus\",\"minibus\",\"ambulance\",\"fire_engine\",\"police_car\",\"oncoming_police_car\",\"taxi\",\"oncoming_taxi\",\"car\",\"oncoming_automobile\",\"blue_car\",\"truck\",\"articulated_lorry\",\"tractor\",\"racing_car\",\"racing_motorcycle\",\"motor_scooter\",\"manual_wheelchair\",\"motorized_wheelchair\",\"auto_rickshaw\",\"bike\",\"scooter\",\"skateboard\",\"busstop\",\"motorway\",\"railway_track\",\"oil_drum\",\"fuelpump\",\"rotating_light\",\"traffic_light\",\"vertical_traffic_light\",\"octagonal_sign\",\"construction\",\"anchor\",\"boat\",\"canoe\",\"speedboat\",\"passenger_ship\",\"ferry\",\"motor_boat\",\"ship\",\"airplane\",\"small_airplane\",\"airplane_departure\",\"airplane_arriving\",\"parachute\",\"seat\",\"helicopter\",\"suspension_railway\",\"mountain_cableway\",\"aerial_tramway\",\"satellite\",\"rocket\",\"flying_saucer\",\"bellhop_bell\",\"luggage\",\"hourglass\",\"hourglass_flowing_sand\",\"watch\",\"alarm_clock\",\"stopwatch\",\"timer_clock\",\"mantelpiece_clock\",\"clock12\",\"clock1230\",\"clock1\",\"clock130\",\"clock2\",\"clock230\",\"clock3\",\"clock330\",\"clock4\",\"clock430\",\"clock5\",\"clock530\",\"clock6\",\"clock630\",\"clock7\",\"clock730\",\"clock8\",\"clock830\",\"clock9\",\"clock930\",\"clock10\",\"clock1030\",\"clock11\",\"clock1130\",\"new_moon\",\"waxing_crescent_moon\",\"first_quarter_moon\",\"moon\",\"full_moon\",\"waning_gibbous_moon\",\"last_quarter_moon\",\"waning_crescent_moon\",\"crescent_moon\",\"new_moon_with_face\",\"first_quarter_moon_with_face\",\"last_quarter_moon_with_face\",\"thermometer\",\"sunny\",\"full_moon_with_face\",\"sun_with_face\",\"ringed_planet\",\"star\",\"star2\",\"stars\",\"milky_way\",\"cloud\",\"partly_sunny\",\"thunder_cloud_and_rain\",\"mostly_sunny\",\"barely_sunny\",\"partly_sunny_rain\",\"rain_cloud\",\"snow_cloud\",\"lightning\",\"tornado\",\"fog\",\"wind_blowing_face\",\"cyclone\",\"rainbow\",\"closed_umbrella\",\"umbrella\",\"umbrella_with_rain_drops\",\"umbrella_on_ground\",\"zap\",\"snowflake\",\"snowman\",\"snowman_without_snow\",\"comet\",\"fire\",\"droplet\",\"ocean\"]},{\"id\":\"objects\",\"name\":\"Objects\",\"emojis\":[\"eyeglasses\",\"dark_sunglasses\",\"goggles\",\"lab_coat\",\"safety_vest\",\"necktie\",\"shirt\",\"jeans\",\"scarf\",\"gloves\",\"coat\",\"socks\",\"dress\",\"kimono\",\"sari\",\"one-piece_swimsuit\",\"briefs\",\"shorts\",\"bikini\",\"womans_clothes\",\"purse\",\"handbag\",\"pouch\",\"shopping_bags\",\"school_satchel\",\"mans_shoe\",\"athletic_shoe\",\"hiking_boot\",\"womans_flat_shoe\",\"high_heel\",\"sandal\",\"ballet_shoes\",\"boot\",\"crown\",\"womans_hat\",\"tophat\",\"mortar_board\",\"billed_cap\",\"helmet_with_white_cross\",\"prayer_beads\",\"lipstick\",\"ring\",\"gem\",\"mute\",\"speaker\",\"sound\",\"loud_sound\",\"loudspeaker\",\"mega\",\"postal_horn\",\"bell\",\"no_bell\",\"musical_score\",\"musical_note\",\"notes\",\"studio_microphone\",\"level_slider\",\"control_knobs\",\"microphone\",\"headphones\",\"radio\",\"saxophone\",\"guitar\",\"musical_keyboard\",\"trumpet\",\"violin\",\"banjo\",\"drum_with_drumsticks\",\"iphone\",\"calling\",\"phone\",\"telephone_receiver\",\"pager\",\"fax\",\"battery\",\"electric_plug\",\"computer\",\"desktop_computer\",\"printer\",\"keyboard\",\"three_button_mouse\",\"trackball\",\"minidisc\",\"floppy_disk\",\"cd\",\"dvd\",\"abacus\",\"movie_camera\",\"film_frames\",\"film_projector\",\"clapper\",\"tv\",\"camera\",\"camera_with_flash\",\"video_camera\",\"vhs\",\"mag\",\"mag_right\",\"candle\",\"bulb\",\"flashlight\",\"izakaya_lantern\",\"diya_lamp\",\"notebook_with_decorative_cover\",\"closed_book\",\"book\",\"green_book\",\"blue_book\",\"orange_book\",\"books\",\"notebook\",\"ledger\",\"page_with_curl\",\"scroll\",\"page_facing_up\",\"newspaper\",\"rolled_up_newspaper\",\"bookmark_tabs\",\"bookmark\",\"label\",\"moneybag\",\"yen\",\"dollar\",\"euro\",\"pound\",\"money_with_wings\",\"credit_card\",\"receipt\",\"chart\",\"currency_exchange\",\"heavy_dollar_sign\",\"email\",\"e-mail\",\"incoming_envelope\",\"envelope_with_arrow\",\"outbox_tray\",\"inbox_tray\",\"package\",\"mailbox\",\"mailbox_closed\",\"mailbox_with_mail\",\"mailbox_with_no_mail\",\"postbox\",\"ballot_box_with_ballot\",\"pencil2\",\"black_nib\",\"lower_left_fountain_pen\",\"lower_left_ballpoint_pen\",\"lower_left_paintbrush\",\"lower_left_crayon\",\"memo\",\"briefcase\",\"file_folder\",\"open_file_folder\",\"card_index_dividers\",\"date\",\"calendar\",\"spiral_note_pad\",\"spiral_calendar_pad\",\"card_index\",\"chart_with_upwards_trend\",\"chart_with_downwards_trend\",\"bar_chart\",\"clipboard\",\"pushpin\",\"round_pushpin\",\"paperclip\",\"linked_paperclips\",\"straight_ruler\",\"triangular_ruler\",\"scissors\",\"card_file_box\",\"file_cabinet\",\"wastebasket\",\"lock\",\"unlock\",\"lock_with_ink_pen\",\"closed_lock_with_key\",\"key\",\"old_key\",\"hammer\",\"axe\",\"pick\",\"hammer_and_pick\",\"hammer_and_wrench\",\"dagger_knife\",\"crossed_swords\",\"gun\",\"bow_and_arrow\",\"shield\",\"wrench\",\"nut_and_bolt\",\"gear\",\"compression\",\"scales\",\"probing_cane\",\"link\",\"chains\",\"toolbox\",\"magnet\",\"alembic\",\"test_tube\",\"petri_dish\",\"dna\",\"microscope\",\"telescope\",\"satellite_antenna\",\"syringe\",\"drop_of_blood\",\"pill\",\"adhesive_bandage\",\"stethoscope\",\"door\",\"bed\",\"couch_and_lamp\",\"chair\",\"toilet\",\"shower\",\"bathtub\",\"razor\",\"lotion_bottle\",\"safety_pin\",\"broom\",\"basket\",\"roll_of_paper\",\"soap\",\"sponge\",\"fire_extinguisher\",\"shopping_trolley\",\"smoking\",\"coffin\",\"funeral_urn\",\"moyai\"]},{\"id\":\"symbols\",\"name\":\"Symbols\",\"emojis\":[\"atm\",\"put_litter_in_its_place\",\"potable_water\",\"wheelchair\",\"mens\",\"womens\",\"restroom\",\"baby_symbol\",\"wc\",\"passport_control\",\"customs\",\"baggage_claim\",\"left_luggage\",\"warning\",\"children_crossing\",\"no_entry\",\"no_entry_sign\",\"no_bicycles\",\"no_smoking\",\"do_not_litter\",\"non-potable_water\",\"no_pedestrians\",\"no_mobile_phones\",\"underage\",\"radioactive_sign\",\"biohazard_sign\",\"arrow_up\",\"arrow_upper_right\",\"arrow_right\",\"arrow_lower_right\",\"arrow_down\",\"arrow_lower_left\",\"arrow_left\",\"arrow_upper_left\",\"arrow_up_down\",\"left_right_arrow\",\"leftwards_arrow_with_hook\",\"arrow_right_hook\",\"arrow_heading_up\",\"arrow_heading_down\",\"arrows_clockwise\",\"arrows_counterclockwise\",\"back\",\"end\",\"on\",\"soon\",\"top\",\"place_of_worship\",\"atom_symbol\",\"om_symbol\",\"star_of_david\",\"wheel_of_dharma\",\"yin_yang\",\"latin_cross\",\"orthodox_cross\",\"star_and_crescent\",\"peace_symbol\",\"menorah_with_nine_branches\",\"six_pointed_star\",\"aries\",\"taurus\",\"gemini\",\"cancer\",\"leo\",\"virgo\",\"libra\",\"scorpius\",\"sagittarius\",\"capricorn\",\"aquarius\",\"pisces\",\"ophiuchus\",\"twisted_rightwards_arrows\",\"repeat\",\"repeat_one\",\"arrow_forward\",\"fast_forward\",\"black_right_pointing_double_triangle_with_vertical_bar\",\"black_right_pointing_triangle_with_double_vertical_bar\",\"arrow_backward\",\"rewind\",\"black_left_pointing_double_triangle_with_vertical_bar\",\"arrow_up_small\",\"arrow_double_up\",\"arrow_down_small\",\"arrow_double_down\",\"double_vertical_bar\",\"black_square_for_stop\",\"black_circle_for_record\",\"eject\",\"cinema\",\"low_brightness\",\"high_brightness\",\"signal_strength\",\"vibration_mode\",\"mobile_phone_off\",\"female_sign\",\"male_sign\",\"medical_symbol\",\"infinity\",\"recycle\",\"fleur_de_lis\",\"trident\",\"name_badge\",\"beginner\",\"o\",\"white_check_mark\",\"ballot_box_with_check\",\"heavy_check_mark\",\"heavy_multiplication_x\",\"x\",\"negative_squared_cross_mark\",\"heavy_plus_sign\",\"heavy_minus_sign\",\"heavy_division_sign\",\"curly_loop\",\"loop\",\"part_alternation_mark\",\"eight_spoked_asterisk\",\"eight_pointed_black_star\",\"sparkle\",\"bangbang\",\"interrobang\",\"question\",\"grey_question\",\"grey_exclamation\",\"exclamation\",\"wavy_dash\",\"copyright\",\"registered\",\"tm\",\"hash\",\"keycap_star\",\"zero\",\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"keycap_ten\",\"capital_abcd\",\"abcd\",\"1234\",\"symbols\",\"abc\",\"a\",\"ab\",\"b\",\"cl\",\"cool\",\"free\",\"information_source\",\"id\",\"m\",\"new\",\"ng\",\"o2\",\"ok\",\"parking\",\"sos\",\"up\",\"vs\",\"koko\",\"sa\",\"u6708\",\"u6709\",\"u6307\",\"ideograph_advantage\",\"u5272\",\"u7121\",\"u7981\",\"accept\",\"u7533\",\"u5408\",\"u7a7a\",\"congratulations\",\"secret\",\"u55b6\",\"u6e80\",\"red_circle\",\"large_orange_circle\",\"large_yellow_circle\",\"large_green_circle\",\"large_blue_circle\",\"large_purple_circle\",\"large_brown_circle\",\"black_circle\",\"white_circle\",\"large_red_square\",\"large_orange_square\",\"large_yellow_square\",\"large_green_square\",\"large_blue_square\",\"large_purple_square\",\"large_brown_square\",\"black_large_square\",\"white_large_square\",\"black_medium_square\",\"white_medium_square\",\"black_medium_small_square\",\"white_medium_small_square\",\"black_small_square\",\"white_small_square\",\"large_orange_diamond\",\"large_blue_diamond\",\"small_orange_diamond\",\"small_blue_diamond\",\"small_red_triangle\",\"small_red_triangle_down\",\"diamond_shape_with_a_dot_inside\",\"radio_button\",\"white_square_button\",\"black_square_button\"]},{\"id\":\"flags\",\"name\":\"Flags\",\"emojis\":[\"checkered_flag\",\"cn\",\"crossed_flags\",\"de\",\"es\",\"flag-ac\",\"flag-ad\",\"flag-ae\",\"flag-af\",\"flag-ag\",\"flag-ai\",\"flag-al\",\"flag-am\",\"flag-ao\",\"flag-aq\",\"flag-ar\",\"flag-as\",\"flag-at\",\"flag-au\",\"flag-aw\",\"flag-ax\",\"flag-az\",\"flag-ba\",\"flag-bb\",\"flag-bd\",\"flag-be\",\"flag-bf\",\"flag-bg\",\"flag-bh\",\"flag-bi\",\"flag-bj\",\"flag-bl\",\"flag-bm\",\"flag-bn\",\"flag-bo\",\"flag-bq\",\"flag-br\",\"flag-bs\",\"flag-bt\",\"flag-bv\",\"flag-bw\",\"flag-by\",\"flag-bz\",\"flag-ca\",\"flag-cc\",\"flag-cd\",\"flag-cf\",\"flag-cg\",\"flag-ch\",\"flag-ci\",\"flag-ck\",\"flag-cl\",\"flag-cm\",\"flag-co\",\"flag-cp\",\"flag-cr\",\"flag-cu\",\"flag-cv\",\"flag-cw\",\"flag-cx\",\"flag-cy\",\"flag-cz\",\"flag-dg\",\"flag-dj\",\"flag-dk\",\"flag-dm\",\"flag-do\",\"flag-dz\",\"flag-ea\",\"flag-ec\",\"flag-ee\",\"flag-eg\",\"flag-eh\",\"flag-england\",\"flag-er\",\"flag-et\",\"flag-eu\",\"flag-fi\",\"flag-fj\",\"flag-fk\",\"flag-fm\",\"flag-fo\",\"flag-ga\",\"flag-gd\",\"flag-ge\",\"flag-gf\",\"flag-gg\",\"flag-gh\",\"flag-gi\",\"flag-gl\",\"flag-gm\",\"flag-gn\",\"flag-gp\",\"flag-gq\",\"flag-gr\",\"flag-gs\",\"flag-gt\",\"flag-gu\",\"flag-gw\",\"flag-gy\",\"flag-hk\",\"flag-hm\",\"flag-hn\",\"flag-hr\",\"flag-ht\",\"flag-hu\",\"flag-ic\",\"flag-id\",\"flag-ie\",\"flag-il\",\"flag-im\",\"flag-in\",\"flag-io\",\"flag-iq\",\"flag-ir\",\"flag-is\",\"flag-je\",\"flag-jm\",\"flag-jo\",\"flag-ke\",\"flag-kg\",\"flag-kh\",\"flag-ki\",\"flag-km\",\"flag-kn\",\"flag-kp\",\"flag-kw\",\"flag-ky\",\"flag-kz\",\"flag-la\",\"flag-lb\",\"flag-lc\",\"flag-li\",\"flag-lk\",\"flag-lr\",\"flag-ls\",\"flag-lt\",\"flag-lu\",\"flag-lv\",\"flag-ly\",\"flag-ma\",\"flag-mc\",\"flag-md\",\"flag-me\",\"flag-mf\",\"flag-mg\",\"flag-mh\",\"flag-mk\",\"flag-ml\",\"flag-mm\",\"flag-mn\",\"flag-mo\",\"flag-mp\",\"flag-mq\",\"flag-mr\",\"flag-ms\",\"flag-mt\",\"flag-mu\",\"flag-mv\",\"flag-mw\",\"flag-mx\",\"flag-my\",\"flag-mz\",\"flag-na\",\"flag-nc\",\"flag-ne\",\"flag-nf\",\"flag-ng\",\"flag-ni\",\"flag-nl\",\"flag-no\",\"flag-np\",\"flag-nr\",\"flag-nu\",\"flag-nz\",\"flag-om\",\"flag-pa\",\"flag-pe\",\"flag-pf\",\"flag-pg\",\"flag-ph\",\"flag-pk\",\"flag-pl\",\"flag-pm\",\"flag-pn\",\"flag-pr\",\"flag-ps\",\"flag-pt\",\"flag-pw\",\"flag-py\",\"flag-qa\",\"flag-re\",\"flag-ro\",\"flag-rs\",\"flag-rw\",\"flag-sa\",\"flag-sb\",\"flag-sc\",\"flag-scotland\",\"flag-sd\",\"flag-se\",\"flag-sg\",\"flag-sh\",\"flag-si\",\"flag-sj\",\"flag-sk\",\"flag-sl\",\"flag-sm\",\"flag-sn\",\"flag-so\",\"flag-sr\",\"flag-ss\",\"flag-st\",\"flag-sv\",\"flag-sx\",\"flag-sy\",\"flag-sz\",\"flag-ta\",\"flag-tc\",\"flag-td\",\"flag-tf\",\"flag-tg\",\"flag-th\",\"flag-tj\",\"flag-tk\",\"flag-tl\",\"flag-tm\",\"flag-tn\",\"flag-to\",\"flag-tr\",\"flag-tt\",\"flag-tv\",\"flag-tw\",\"flag-tz\",\"flag-ua\",\"flag-ug\",\"flag-um\",\"flag-uy\",\"flag-uz\",\"flag-va\",\"flag-vc\",\"flag-ve\",\"flag-vg\",\"flag-vi\",\"flag-vn\",\"flag-vu\",\"flag-wales\",\"flag-wf\",\"flag-ws\",\"flag-xk\",\"flag-ye\",\"flag-yt\",\"flag-za\",\"flag-zm\",\"flag-zw\",\"fr\",\"gb\",\"it\",\"jp\",\"kr\",\"pirate_flag\",\"rainbow-flag\",\"ru\",\"triangular_flag_on_post\",\"us\",\"waving_black_flag\",\"waving_white_flag\"]}],\"emojis\":{\"100\":{\"a\":\"Hundred Points Symbol\",\"b\":\"1F4AF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"score\",\"perfect\",\"numbers\",\"century\",\"exam\",\"quiz\",\"test\",\"pass\",\"hundred\"],\"k\":[26,5],\"o\":2},\"1234\":{\"a\":\"Input Symbol for Numbers\",\"b\":\"1F522\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"numbers\",\"blue-square\"],\"k\":[28,5],\"o\":2},\"grinning\":{\"a\":\"Grinning Face\",\"b\":\"1F600\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"smile\",\"happy\",\"joy\",\":D\",\"grin\"],\"k\":[30,35],\"m\":\":D\",\"o\":2},\"monkey_face\":{\"a\":\"Monkey Face\",\"b\":\"1F435\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"circus\"],\"k\":[12,25],\"l\":[\":o)\"],\"o\":2},\"grapes\":{\"a\":\"Grapes\",\"b\":\"1F347\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"food\",\"wine\"],\"k\":[6,31],\"o\":2},\"eyeglasses\":{\"a\":\"Eyeglasses\",\"b\":\"1F453\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fashion\",\"accessories\",\"eyesight\",\"nerdy\",\"dork\",\"geek\"],\"k\":[14,7],\"o\":2},\"checkered_flag\":{\"a\":\"Chequered Flag\",\"b\":\"1F3C1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"contest\",\"finishline\",\"race\",\"gokart\"],\"k\":[8,39],\"o\":2},\"jack_o_lantern\":{\"a\":\"Jack-O-Lantern\",\"b\":\"1F383\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"halloween\",\"light\",\"pumpkin\",\"creepy\",\"fall\"],\"k\":[7,34],\"o\":2},\"wave\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44B-1F3FB\",\"non_qualified\":null,\"image\":\"1f44b-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":27,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F44B-1F3FC\",\"non_qualified\":null,\"image\":\"1f44b-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":28,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F44B-1F3FD\",\"non_qualified\":null,\"image\":\"1f44b-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":29,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F44B-1F3FE\",\"non_qualified\":null,\"image\":\"1f44b-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":30,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F44B-1F3FF\",\"non_qualified\":null,\"image\":\"1f44b-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":31,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Waving Hand Sign\",\"b\":\"1F44B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hands\",\"gesture\",\"goodbye\",\"solong\",\"farewell\",\"hello\",\"hi\",\"palm\"],\"k\":[13,26],\"o\":2},\"earth_africa\":{\"a\":\"Earth Globe Europe-Africa\",\"b\":\"1F30D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"globe\",\"world\",\"international\"],\"k\":[5,32],\"o\":2},\"atm\":{\"a\":\"Automated Teller Machine\",\"b\":\"1F3E7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"money\",\"sales\",\"cash\",\"blue-square\",\"payment\",\"bank\"],\"k\":[11,1],\"o\":2},\"melon\":{\"a\":\"Melon\",\"b\":\"1F348\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"nature\",\"food\"],\"k\":[6,32],\"o\":2},\"triangular_flag_on_post\":{\"a\":\"Triangular Flag on Post\",\"b\":\"1F6A9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"mark\",\"milestone\",\"place\"],\"k\":[35,0],\"o\":2},\"put_litter_in_its_place\":{\"a\":\"Put Litter in Its Place Symbol\",\"b\":\"1F6AE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"sign\",\"human\",\"info\"],\"k\":[35,5],\"o\":2},\"christmas_tree\":{\"a\":\"Christmas Tree\",\"b\":\"1F384\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"festival\",\"vacation\",\"december\",\"xmas\",\"celebration\"],\"k\":[7,35],\"o\":2},\"monkey\":{\"a\":\"Monkey\",\"b\":\"1F412\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"banana\",\"circus\"],\"k\":[11,46],\"o\":2},\"earth_americas\":{\"a\":\"Earth Globe Americas\",\"b\":\"1F30E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"globe\",\"world\",\"USA\",\"international\"],\"k\":[5,33],\"o\":2},\"dark_sunglasses\":{\"a\":\"Dark Sunglasses\",\"b\":\"1F576-FE0F\",\"c\":\"1F576\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"cool\",\"accessories\"],\"k\":[29,33],\"o\":2},\"raised_back_of_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91A-1F3FB\",\"non_qualified\":null,\"image\":\"1f91a-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F91A-1F3FC\",\"non_qualified\":null,\"image\":\"1f91a-1f3fc.png\",\"sheet_x\":37,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F91A-1F3FD\",\"non_qualified\":null,\"image\":\"1f91a-1f3fd.png\",\"sheet_x\":37,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F91A-1F3FE\",\"non_qualified\":null,\"image\":\"1f91a-1f3fe.png\",\"sheet_x\":37,\"sheet_y\":47,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F91A-1F3FF\",\"non_qualified\":null,\"image\":\"1f91a-1f3ff.png\",\"sheet_x\":37,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Raised Back of Hand\",\"b\":\"1F91A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fingers\",\"raised\",\"backhand\"],\"k\":[37,43],\"o\":4},\"smiley\":{\"a\":\"Smiling Face with Open Mouth\",\"b\":\"1F603\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"happy\",\"joy\",\"haha\",\":D\",\":)\",\"smile\",\"funny\"],\"k\":[30,38],\"l\":[\"=)\",\"=-)\"],\"m\":\":)\",\"o\":2},\"earth_asia\":{\"a\":\"Earth Globe Asia-Australia\",\"b\":\"1F30F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"globe\",\"world\",\"east\",\"international\"],\"k\":[5,34],\"o\":2},\"crossed_flags\":{\"a\":\"Crossed Flags\",\"b\":\"1F38C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"japanese\",\"nation\",\"country\",\"border\"],\"k\":[7,48],\"o\":2},\"watermelon\":{\"a\":\"Watermelon\",\"b\":\"1F349\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"food\",\"picnic\",\"summer\"],\"k\":[6,33],\"o\":2},\"goggles\":{\"a\":\"Goggles\",\"b\":\"1F97D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,15],\"o\":11},\"raised_hand_with_fingers_splayed\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F590-1F3FB\",\"non_qualified\":null,\"image\":\"1f590-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":49,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F590-1F3FC\",\"non_qualified\":null,\"image\":\"1f590-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":50,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F590-1F3FD\",\"non_qualified\":null,\"image\":\"1f590-1f3fd.png\",\"sheet_x\":29,\"sheet_y\":51,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F590-1F3FE\",\"non_qualified\":null,\"image\":\"1f590-1f3fe.png\",\"sheet_x\":29,\"sheet_y\":52,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F590-1F3FF\",\"non_qualified\":null,\"image\":\"1f590-1f3ff.png\",\"sheet_x\":29,\"sheet_y\":53,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Raised Hand with Fingers Splayed\",\"b\":\"1F590-FE0F\",\"c\":\"1F590\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hand\",\"fingers\",\"palm\"],\"k\":[29,48],\"o\":2},\"smile\":{\"a\":\"Smiling Face with Open Mouth and Smiling Eyes\",\"b\":\"1F604\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"happy\",\"joy\",\"funny\",\"haha\",\"laugh\",\"like\",\":D\",\":)\"],\"k\":[30,39],\"l\":[\"C:\",\"c:\",\":D\",\":-D\"],\"m\":\":)\",\"o\":2},\"potable_water\":{\"a\":\"Potable Water Symbol\",\"b\":\"1F6B0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"liquid\",\"restroom\",\"cleaning\",\"faucet\"],\"k\":[35,7],\"o\":2},\"fireworks\":{\"a\":\"Fireworks\",\"b\":\"1F386\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"festival\",\"carnival\",\"congratulations\"],\"k\":[7,42],\"o\":2},\"gorilla\":{\"a\":\"Gorilla\",\"b\":\"1F98D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"circus\"],\"k\":[42,31],\"o\":4},\"lab_coat\":{\"a\":\"Lab Coat\",\"b\":\"1F97C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,14],\"o\":11},\"tangerine\":{\"a\":\"Tangerine\",\"b\":\"1F34A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"fruit\",\"nature\",\"orange\"],\"k\":[6,34],\"o\":2},\"wheelchair\":{\"a\":\"Wheelchair Symbol\",\"b\":\"267F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"disabled\",\"a11y\",\"accessibility\"],\"k\":[53,40],\"o\":2},\"waving_black_flag\":{\"a\":\"Waving Black Flag\",\"b\":\"1F3F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[11,17],\"o\":2},\"orangutan\":{\"a\":\"Orangutan\",\"b\":\"1F9A7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,55],\"o\":12},\"sparkler\":{\"a\":\"Firework Sparkler\",\"b\":\"1F387\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stars\",\"night\",\"shine\"],\"k\":[7,43],\"o\":2},\"globe_with_meridians\":{\"a\":\"Globe with Meridians\",\"b\":\"1F310\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"earth\",\"international\",\"world\",\"internet\",\"interweb\",\"i18n\"],\"k\":[5,35],\"o\":2},\"grin\":{\"a\":\"Grinning Face with Smiling Eyes\",\"b\":\"1F601\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"happy\",\"smile\",\"joy\",\"kawaii\"],\"k\":[30,36],\"o\":2},\"hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"270B-1F3FB\",\"non_qualified\":null,\"image\":\"270b-1f3fb.png\",\"sheet_x\":54,\"sheet_y\":50,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"270B-1F3FC\",\"non_qualified\":null,\"image\":\"270b-1f3fc.png\",\"sheet_x\":54,\"sheet_y\":51,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"270B-1F3FD\",\"non_qualified\":null,\"image\":\"270b-1f3fd.png\",\"sheet_x\":54,\"sheet_y\":52,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"270B-1F3FE\",\"non_qualified\":null,\"image\":\"270b-1f3fe.png\",\"sheet_x\":54,\"sheet_y\":53,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"270B-1F3FF\",\"non_qualified\":null,\"image\":\"270b-1f3ff.png\",\"sheet_x\":54,\"sheet_y\":54,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Raised Hand\",\"b\":\"270B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[54,49],\"n\":[\"raised_hand\"],\"o\":2},\"firecracker\":{\"a\":\"Firecracker\",\"b\":\"1F9E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,27],\"o\":11},\"lemon\":{\"a\":\"Lemon\",\"b\":\"1F34B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"nature\"],\"k\":[6,35],\"o\":2},\"dog\":{\"a\":\"Dog Face\",\"b\":\"1F436\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"friend\",\"nature\",\"woof\",\"puppy\",\"pet\",\"faithful\"],\"k\":[12,26],\"o\":2},\"mens\":{\"a\":\"Mens Symbol\",\"b\":\"1F6B9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"toilet\",\"restroom\",\"wc\",\"blue-square\",\"gender\",\"male\"],\"k\":[36,10],\"o\":2},\"spock-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F596-1F3FB\",\"non_qualified\":null,\"image\":\"1f596-1f3fb.png\",\"sheet_x\":30,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F596-1F3FC\",\"non_qualified\":null,\"image\":\"1f596-1f3fc.png\",\"sheet_x\":30,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F596-1F3FD\",\"non_qualified\":null,\"image\":\"1f596-1f3fd.png\",\"sheet_x\":30,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F596-1F3FE\",\"non_qualified\":null,\"image\":\"1f596-1f3fe.png\",\"sheet_x\":30,\"sheet_y\":7,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F596-1F3FF\",\"non_qualified\":null,\"image\":\"1f596-1f3ff.png\",\"sheet_x\":30,\"sheet_y\":8,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Raised Hand with Part Between Middle and Ring Fingers\",\"b\":\"1F596\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,3],\"o\":2},\"world_map\":{\"a\":\"World Map\",\"b\":\"1F5FA-FE0F\",\"c\":\"1F5FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"location\",\"direction\"],\"k\":[30,29],\"o\":2},\"laughing\":{\"a\":\"Smiling Face with Open Mouth and Tightly-Closed Eyes\",\"b\":\"1F606\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"happy\",\"joy\",\"lol\",\"satisfied\",\"haha\",\"face\",\"glad\",\"XD\",\"laugh\"],\"k\":[30,41],\"l\":[\":>\",\":->\"],\"n\":[\"satisfied\"],\"o\":2},\"waving_white_flag\":{\"a\":\"Waving White Flag\",\"b\":\"1F3F3-FE0F\",\"c\":\"1F3F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[11,12],\"o\":2},\"safety_vest\":{\"a\":\"Safety Vest\",\"b\":\"1F9BA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,54],\"o\":12},\"sweat_smile\":{\"a\":\"Smiling Face with Open Mouth and Cold Sweat\",\"b\":\"1F605\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"hot\",\"happy\",\"laugh\",\"sweat\",\"smile\",\"relief\"],\"k\":[30,40],\"o\":2},\"sparkles\":{\"a\":\"Sparkles\",\"b\":\"2728\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stars\",\"shine\",\"shiny\",\"cool\",\"awesome\",\"good\",\"magic\"],\"k\":[55,16],\"o\":2},\"banana\":{\"a\":\"Banana\",\"b\":\"1F34C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"food\",\"monkey\"],\"k\":[6,36],\"o\":2},\"rainbow-flag\":{\"a\":\"Rainbow Flag\",\"b\":\"1F3F3-FE0F-200D-1F308\",\"c\":\"1F3F3-200D-1F308\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[11,11],\"o\":4},\"ok_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44C-1F3FB\",\"non_qualified\":null,\"image\":\"1f44c-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":33,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F44C-1F3FC\",\"non_qualified\":null,\"image\":\"1f44c-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":34,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F44C-1F3FD\",\"non_qualified\":null,\"image\":\"1f44c-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":35,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F44C-1F3FE\",\"non_qualified\":null,\"image\":\"1f44c-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":36,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F44C-1F3FF\",\"non_qualified\":null,\"image\":\"1f44c-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":37,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Ok Hand Sign\",\"b\":\"1F44C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fingers\",\"limbs\",\"perfect\",\"ok\",\"okay\"],\"k\":[13,32],\"o\":2},\"japan\":{\"a\":\"Silhouette of Japan\",\"b\":\"1F5FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nation\",\"country\",\"japanese\",\"asia\"],\"k\":[30,33],\"o\":2},\"dog2\":{\"a\":\"Dog\",\"b\":\"1F415\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"friend\",\"doge\",\"pet\",\"faithful\"],\"k\":[11,50],\"o\":2},\"womens\":{\"a\":\"Womens Symbol\",\"b\":\"1F6BA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"purple-square\",\"woman\",\"female\",\"toilet\",\"loo\",\"restroom\",\"gender\"],\"k\":[36,11],\"o\":2},\"necktie\":{\"a\":\"Necktie\",\"b\":\"1F454\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shirt\",\"suitup\",\"formal\",\"fashion\",\"cloth\",\"business\"],\"k\":[14,8],\"o\":2},\"pirate_flag\":{\"a\":\"Pirate Flag\",\"b\":\"1F3F4-200D-2620-FE0F\",\"c\":\"1F3F4-200D-2620\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[11,13],\"o\":11},\"guide_dog\":{\"a\":\"Guide Dog\",\"b\":\"1F9AE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,2],\"o\":12},\"restroom\":{\"a\":\"Restroom\",\"b\":\"1F6BB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"toilet\",\"refresh\",\"wc\",\"gender\"],\"k\":[36,12],\"o\":2},\"compass\":{\"a\":\"Compass\",\"b\":\"1F9ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,32],\"o\":11},\"rolling_on_the_floor_laughing\":{\"a\":\"Rolling on the Floor Laughing\",\"b\":\"1F923\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,20],\"o\":4},\"balloon\":{\"a\":\"Balloon\",\"b\":\"1F388\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"party\",\"celebration\",\"birthday\",\"circus\"],\"k\":[7,44],\"o\":2},\"pinching_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F90F-1F3FB\",\"non_qualified\":null,\"image\":\"1f90f-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":18,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F90F-1F3FC\",\"non_qualified\":null,\"image\":\"1f90f-1f3fc.png\",\"sheet_x\":37,\"sheet_y\":19,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F90F-1F3FD\",\"non_qualified\":null,\"image\":\"1f90f-1f3fd.png\",\"sheet_x\":37,\"sheet_y\":20,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F90F-1F3FE\",\"non_qualified\":null,\"image\":\"1f90f-1f3fe.png\",\"sheet_x\":37,\"sheet_y\":21,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F90F-1F3FF\",\"non_qualified\":null,\"image\":\"1f90f-1f3ff.png\",\"sheet_x\":37,\"sheet_y\":22,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Pinching Hand\",\"b\":\"1F90F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,17],\"o\":12},\"pineapple\":{\"a\":\"Pineapple\",\"b\":\"1F34D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"nature\",\"food\"],\"k\":[6,37],\"o\":2},\"shirt\":{\"a\":\"T-Shirt\",\"b\":\"1F455\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[14,9],\"n\":[\"tshirt\"],\"o\":2},\"service_dog\":{\"a\":\"Service Dog\",\"b\":\"1F415-200D-1F9BA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[11,49],\"o\":12},\"baby_symbol\":{\"a\":\"Baby Symbol\",\"b\":\"1F6BC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"orange-square\",\"child\"],\"k\":[36,13],\"o\":2},\"joy\":{\"a\":\"Face with Tears of Joy\",\"b\":\"1F602\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"cry\",\"tears\",\"weep\",\"happy\",\"happytears\",\"haha\"],\"k\":[30,37],\"o\":2},\"tada\":{\"a\":\"Party Popper\",\"b\":\"1F389\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"party\",\"congratulations\",\"birthday\",\"magic\",\"circus\",\"celebration\"],\"k\":[7,45],\"o\":2},\"mango\":{\"a\":\"Mango\",\"b\":\"1F96D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,3],\"o\":11},\"v\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"270C-1F3FB\",\"non_qualified\":null,\"image\":\"270c-1f3fb.png\",\"sheet_x\":54,\"sheet_y\":56,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"270C-1F3FC\",\"non_qualified\":null,\"image\":\"270c-1f3fc.png\",\"sheet_x\":55,\"sheet_y\":0,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"270C-1F3FD\",\"non_qualified\":null,\"image\":\"270c-1f3fd.png\",\"sheet_x\":55,\"sheet_y\":1,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"270C-1F3FE\",\"non_qualified\":null,\"image\":\"270c-1f3fe.png\",\"sheet_x\":55,\"sheet_y\":2,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"270C-1F3FF\",\"non_qualified\":null,\"image\":\"270c-1f3ff.png\",\"sheet_x\":55,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Victory Hand\",\"b\":\"270C-FE0F\",\"c\":\"270C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fingers\",\"ohyeah\",\"hand\",\"peace\",\"victory\",\"two\"],\"k\":[54,55],\"o\":2},\"snow_capped_mountain\":{\"a\":\"Snow Capped Mountain\",\"b\":\"1F3D4-FE0F\",\"c\":\"1F3D4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[10,39],\"o\":2},\"flag-ac\":{\"a\":\"Ascension Island Flag\",\"b\":\"1F1E6-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,31],\"o\":2},\"jeans\":{\"a\":\"Jeans\",\"b\":\"1F456\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fashion\",\"shopping\"],\"k\":[14,10],\"o\":2},\"poodle\":{\"a\":\"Poodle\",\"b\":\"1F429\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dog\",\"animal\",\"101\",\"nature\",\"pet\"],\"k\":[12,13],\"o\":2},\"crossed_fingers\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91E-1F3FB\",\"non_qualified\":null,\"image\":\"1f91e-1f3fb.png\",\"sheet_x\":38,\"sheet_y\":6,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F91E-1F3FC\",\"non_qualified\":null,\"image\":\"1f91e-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":7,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F91E-1F3FD\",\"non_qualified\":null,\"image\":\"1f91e-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":8,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F91E-1F3FE\",\"non_qualified\":null,\"image\":\"1f91e-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F91E-1F3FF\",\"non_qualified\":null,\"image\":\"1f91e-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Hand with Index and Middle Fingers Crossed\",\"b\":\"1F91E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"good\",\"lucky\"],\"k\":[38,5],\"n\":[\"hand_with_index_and_middle_fingers_crossed\"],\"o\":4},\"flag-ad\":{\"a\":\"Andorra Flag\",\"b\":\"1F1E6-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,32],\"o\":2},\"slightly_smiling_face\":{\"a\":\"Slightly Smiling Face\",\"b\":\"1F642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"smile\"],\"k\":[31,44],\"l\":[\":)\",\"(:\",\":-)\"],\"o\":2},\"apple\":{\"a\":\"Red Apple\",\"b\":\"1F34E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"mac\",\"school\"],\"k\":[6,38],\"o\":2},\"wc\":{\"a\":\"Water Closet\",\"b\":\"1F6BE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"toilet\",\"restroom\",\"blue-square\"],\"k\":[36,15],\"o\":2},\"scarf\":{\"a\":\"Scarf\",\"b\":\"1F9E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,22],\"o\":5},\"mountain\":{\"a\":\"Mountain\",\"b\":\"26F0-FE0F\",\"c\":\"26F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"nature\",\"environment\"],\"k\":[54,11],\"o\":2},\"confetti_ball\":{\"a\":\"Confetti Ball\",\"b\":\"1F38A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"festival\",\"party\",\"birthday\",\"circus\"],\"k\":[7,46],\"o\":2},\"i_love_you_hand_sign\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91F-1F3FB\",\"non_qualified\":null,\"image\":\"1f91f-1f3fb.png\",\"sheet_x\":38,\"sheet_y\":12,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F91F-1F3FC\",\"non_qualified\":null,\"image\":\"1f91f-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":13,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F91F-1F3FD\",\"non_qualified\":null,\"image\":\"1f91f-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":14,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F91F-1F3FE\",\"non_qualified\":null,\"image\":\"1f91f-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":15,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F91F-1F3FF\",\"non_qualified\":null,\"image\":\"1f91f-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":16,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"I Love You Hand Sign\",\"b\":\"1F91F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,11],\"o\":5},\"wolf\":{\"a\":\"Wolf Face\",\"b\":\"1F43A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"wild\"],\"k\":[12,30],\"o\":2},\"gloves\":{\"a\":\"Gloves\",\"b\":\"1F9E4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,23],\"o\":5},\"flag-ae\":{\"a\":\"United Arab Emirates Flag\",\"b\":\"1F1E6-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,33],\"o\":2},\"upside_down_face\":{\"a\":\"Upside-Down Face\",\"b\":\"1F643\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"flipped\",\"silly\",\"smile\"],\"k\":[31,45],\"o\":2},\"green_apple\":{\"a\":\"Green Apple\",\"b\":\"1F34F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"nature\"],\"k\":[6,39],\"o\":2},\"passport_control\":{\"a\":\"Passport Control\",\"b\":\"1F6C2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"custom\",\"blue-square\"],\"k\":[36,24],\"o\":2},\"volcano\":{\"a\":\"Volcano\",\"b\":\"1F30B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"nature\",\"disaster\"],\"k\":[5,30],\"o\":2},\"tanabata_tree\":{\"a\":\"Tanabata Tree\",\"b\":\"1F38B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"plant\",\"nature\",\"branch\",\"summer\"],\"k\":[7,47],\"o\":2},\"customs\":{\"a\":\"Customs\",\"b\":\"1F6C3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"passport\",\"border\",\"blue-square\"],\"k\":[36,25],\"o\":2},\"coat\":{\"a\":\"Coat\",\"b\":\"1F9E5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,24],\"o\":5},\"wink\":{\"a\":\"Winking Face\",\"b\":\"1F609\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"happy\",\"mischievous\",\"secret\",\";)\",\"smile\",\"eye\"],\"k\":[30,44],\"l\":[\";)\",\";-)\"],\"m\":\";)\",\"o\":2},\"bamboo\":{\"a\":\"Pine Decoration\",\"b\":\"1F38D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"plant\",\"nature\",\"vegetable\",\"panda\",\"pine_decoration\"],\"k\":[7,49],\"o\":2},\"flag-af\":{\"a\":\"Afghanistan Flag\",\"b\":\"1F1E6-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,34],\"o\":2},\"fox_face\":{\"a\":\"Fox Face\",\"b\":\"1F98A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"face\"],\"k\":[42,28],\"o\":4},\"pear\":{\"a\":\"Pear\",\"b\":\"1F350\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"nature\",\"food\"],\"k\":[6,40],\"o\":2},\"mount_fuji\":{\"a\":\"Mount Fuji\",\"b\":\"1F5FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"mountain\",\"nature\",\"japanese\"],\"k\":[30,30],\"o\":2},\"the_horns\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F918-1F3FB\",\"non_qualified\":null,\"image\":\"1f918-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":32,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F918-1F3FC\",\"non_qualified\":null,\"image\":\"1f918-1f3fc.png\",\"sheet_x\":37,\"sheet_y\":33,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F918-1F3FD\",\"non_qualified\":null,\"image\":\"1f918-1f3fd.png\",\"sheet_x\":37,\"sheet_y\":34,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F918-1F3FE\",\"non_qualified\":null,\"image\":\"1f918-1f3fe.png\",\"sheet_x\":37,\"sheet_y\":35,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F918-1F3FF\",\"non_qualified\":null,\"image\":\"1f918-1f3ff.png\",\"sheet_x\":37,\"sheet_y\":36,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Sign of the Horns\",\"b\":\"1F918\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,31],\"n\":[\"sign_of_the_horns\"],\"o\":2},\"call_me_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F919-1F3FB\",\"non_qualified\":null,\"image\":\"1f919-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F919-1F3FC\",\"non_qualified\":null,\"image\":\"1f919-1f3fc.png\",\"sheet_x\":37,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F919-1F3FD\",\"non_qualified\":null,\"image\":\"1f919-1f3fd.png\",\"sheet_x\":37,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F919-1F3FE\",\"non_qualified\":null,\"image\":\"1f919-1f3fe.png\",\"sheet_x\":37,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F919-1F3FF\",\"non_qualified\":null,\"image\":\"1f919-1f3ff.png\",\"sheet_x\":37,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Call Me Hand\",\"b\":\"1F919\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hands\",\"gesture\"],\"k\":[37,37],\"o\":4},\"flag-ag\":{\"a\":\"Antigua & Barbuda Flag\",\"b\":\"1F1E6-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,35],\"o\":2},\"raccoon\":{\"a\":\"Raccoon\",\"b\":\"1F99D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,47],\"o\":11},\"dolls\":{\"a\":\"Japanese Dolls\",\"b\":\"1F38E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"japanese\",\"toy\",\"kimono\"],\"k\":[7,50],\"o\":2},\"blush\":{\"a\":\"Smiling Face with Smiling Eyes\",\"b\":\"1F60A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"smile\",\"happy\",\"flushed\",\"crush\",\"embarrassed\",\"shy\",\"joy\"],\"k\":[30,45],\"m\":\":)\",\"o\":2},\"peach\":{\"a\":\"Peach\",\"b\":\"1F351\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"nature\",\"food\"],\"k\":[6,41],\"o\":2},\"baggage_claim\":{\"a\":\"Baggage Claim\",\"b\":\"1F6C4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"airport\",\"transport\"],\"k\":[36,26],\"o\":2},\"socks\":{\"a\":\"Socks\",\"b\":\"1F9E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,25],\"o\":5},\"camping\":{\"a\":\"Camping\",\"b\":\"1F3D5-FE0F\",\"c\":\"1F3D5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"outdoors\",\"tent\"],\"k\":[10,40],\"o\":2},\"dress\":{\"a\":\"Dress\",\"b\":\"1F457\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"clothes\",\"fashion\",\"shopping\"],\"k\":[14,11],\"o\":2},\"beach_with_umbrella\":{\"a\":\"Beach with Umbrella\",\"b\":\"1F3D6-FE0F\",\"c\":\"1F3D6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[10,41],\"o\":2},\"cherries\":{\"a\":\"Cherries\",\"b\":\"1F352\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"fruit\"],\"k\":[6,42],\"o\":2},\"cat\":{\"a\":\"Cat Face\",\"b\":\"1F431\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"meow\",\"nature\",\"pet\",\"kitten\"],\"k\":[12,21],\"o\":2},\"point_left\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F448-1F3FB\",\"non_qualified\":null,\"image\":\"1f448-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":9,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F448-1F3FC\",\"non_qualified\":null,\"image\":\"1f448-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":10,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F448-1F3FD\",\"non_qualified\":null,\"image\":\"1f448-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":11,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F448-1F3FE\",\"non_qualified\":null,\"image\":\"1f448-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":12,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F448-1F3FF\",\"non_qualified\":null,\"image\":\"1f448-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":13,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"White Left Pointing Backhand Index\",\"b\":\"1F448\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"direction\",\"fingers\",\"hand\",\"left\"],\"k\":[13,8],\"o\":2},\"left_luggage\":{\"a\":\"Left Luggage\",\"b\":\"1F6C5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"travel\"],\"k\":[36,27],\"o\":2},\"flag-ai\":{\"a\":\"Anguilla Flag\",\"b\":\"1F1E6-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,36],\"o\":2},\"innocent\":{\"a\":\"Smiling Face with Halo\",\"b\":\"1F607\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"angel\",\"heaven\",\"halo\"],\"k\":[30,42],\"o\":2},\"flags\":{\"a\":\"Carp Streamer\",\"b\":\"1F38F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fish\",\"japanese\",\"koinobori\",\"carp\",\"banner\"],\"k\":[7,51],\"o\":2},\"warning\":{\"a\":\"Warning Sign\",\"b\":\"26A0-FE0F\",\"c\":\"26A0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"exclamation\",\"wip\",\"alert\",\"error\",\"problem\",\"issue\"],\"k\":[53,50],\"o\":2},\"strawberry\":{\"a\":\"Strawberry\",\"b\":\"1F353\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"food\",\"nature\"],\"k\":[6,43],\"o\":2},\"point_right\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F449-1F3FB\",\"non_qualified\":null,\"image\":\"1f449-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":15,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F449-1F3FC\",\"non_qualified\":null,\"image\":\"1f449-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":16,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F449-1F3FD\",\"non_qualified\":null,\"image\":\"1f449-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":17,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F449-1F3FE\",\"non_qualified\":null,\"image\":\"1f449-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":18,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F449-1F3FF\",\"non_qualified\":null,\"image\":\"1f449-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":19,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"White Right Pointing Backhand Index\",\"b\":\"1F449\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fingers\",\"hand\",\"direction\",\"right\"],\"k\":[13,14],\"o\":2},\"desert\":{\"a\":\"Desert\",\"b\":\"1F3DC-FE0F\",\"c\":\"1F3DC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"warm\",\"saharah\"],\"k\":[10,47],\"o\":2},\"kimono\":{\"a\":\"Kimono\",\"b\":\"1F458\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dress\",\"fashion\",\"women\",\"female\",\"japanese\"],\"k\":[14,12],\"o\":2},\"flag-al\":{\"a\":\"Albania Flag\",\"b\":\"1F1E6-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,37],\"o\":2},\"wind_chime\":{\"a\":\"Wind Chime\",\"b\":\"1F390\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"ding\",\"spring\",\"bell\"],\"k\":[7,52],\"o\":2},\"smiling_face_with_3_hearts\":{\"a\":\"Smiling Face with Smiling Eyes and Three Hearts\",\"b\":\"1F970\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,6],\"o\":11},\"cat2\":{\"a\":\"Cat\",\"b\":\"1F408\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"meow\",\"pet\",\"cats\"],\"k\":[11,36],\"o\":2},\"rice_scene\":{\"a\":\"Moon Viewing Ceremony\",\"b\":\"1F391\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"japan\",\"asia\",\"tsukimi\"],\"k\":[7,53],\"o\":2},\"heart_eyes\":{\"a\":\"Smiling Face with Heart-Shaped Eyes\",\"b\":\"1F60D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"crush\",\"heart\"],\"k\":[30,48],\"o\":2},\"sari\":{\"a\":\"Sari\",\"b\":\"1F97B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,13],\"o\":12},\"flag-am\":{\"a\":\"Armenia Flag\",\"b\":\"1F1E6-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,38],\"o\":2},\"lion_face\":{\"a\":\"Lion Face\",\"b\":\"1F981\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,19],\"o\":2},\"desert_island\":{\"a\":\"Desert Island\",\"b\":\"1F3DD-FE0F\",\"c\":\"1F3DD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"tropical\",\"mojito\"],\"k\":[10,48],\"o\":2},\"point_up_2\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F446-1F3FB\",\"non_qualified\":null,\"image\":\"1f446-1f3fb.png\",\"sheet_x\":12,\"sheet_y\":54,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F446-1F3FC\",\"non_qualified\":null,\"image\":\"1f446-1f3fc.png\",\"sheet_x\":12,\"sheet_y\":55,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F446-1F3FD\",\"non_qualified\":null,\"image\":\"1f446-1f3fd.png\",\"sheet_x\":12,\"sheet_y\":56,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F446-1F3FE\",\"non_qualified\":null,\"image\":\"1f446-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":0,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F446-1F3FF\",\"non_qualified\":null,\"image\":\"1f446-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":1,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"White Up Pointing Backhand Index\",\"b\":\"1F446\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fingers\",\"hand\",\"direction\",\"up\"],\"k\":[12,53],\"o\":2},\"kiwifruit\":{\"a\":\"Kiwifruit\",\"b\":\"1F95D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,44],\"o\":4},\"children_crossing\":{\"a\":\"Children Crossing\",\"b\":\"1F6B8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"school\",\"warning\",\"danger\",\"sign\",\"driving\",\"yellow-diamond\"],\"k\":[36,9],\"o\":2},\"national_park\":{\"a\":\"National Park\",\"b\":\"1F3DE-FE0F\",\"c\":\"1F3DE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"environment\",\"nature\"],\"k\":[10,49],\"o\":2},\"no_entry\":{\"a\":\"No Entry\",\"b\":\"26D4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"limit\",\"security\",\"privacy\",\"bad\",\"denied\",\"stop\",\"circle\"],\"k\":[54,8],\"o\":2},\"one-piece_swimsuit\":{\"a\":\"One-Piece Swimsuit\",\"b\":\"1FA71\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,52],\"o\":12},\"tiger\":{\"a\":\"Tiger Face\",\"b\":\"1F42F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cat\",\"danger\",\"wild\",\"nature\",\"roar\"],\"k\":[12,19],\"o\":2},\"red_envelope\":{\"a\":\"Red Gift Envelope\",\"b\":\"1F9E7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,26],\"o\":11},\"star-struck\":{\"a\":\"Grinning Face with Star Eyes\",\"b\":\"1F929\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,43],\"n\":[\"grinning_face_with_star_eyes\"],\"o\":5},\"middle_finger\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F595-1F3FB\",\"non_qualified\":null,\"image\":\"1f595-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":55,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F595-1F3FC\",\"non_qualified\":null,\"image\":\"1f595-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":56,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F595-1F3FD\",\"non_qualified\":null,\"image\":\"1f595-1f3fd.png\",\"sheet_x\":30,\"sheet_y\":0,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F595-1F3FE\",\"non_qualified\":null,\"image\":\"1f595-1f3fe.png\",\"sheet_x\":30,\"sheet_y\":1,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F595-1F3FF\",\"non_qualified\":null,\"image\":\"1f595-1f3ff.png\",\"sheet_x\":30,\"sheet_y\":2,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Reversed Hand with Middle Finger Extended\",\"b\":\"1F595\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[29,54],\"n\":[\"reversed_hand_with_middle_finger_extended\"],\"o\":2},\"flag-ao\":{\"a\":\"Angola Flag\",\"b\":\"1F1E6-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,39],\"o\":2},\"tomato\":{\"a\":\"Tomato\",\"b\":\"1F345\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"vegetable\",\"nature\",\"food\"],\"k\":[6,29],\"o\":2},\"coconut\":{\"a\":\"Coconut\",\"b\":\"1F965\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,52],\"o\":5},\"ribbon\":{\"a\":\"Ribbon\",\"b\":\"1F380\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"decoration\",\"pink\",\"girl\",\"bowtie\"],\"k\":[7,31],\"o\":2},\"no_entry_sign\":{\"a\":\"No Entry Sign\",\"b\":\"1F6AB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"forbid\",\"stop\",\"limit\",\"denied\",\"disallow\",\"circle\"],\"k\":[35,2],\"o\":2},\"point_down\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F447-1F3FB\",\"non_qualified\":null,\"image\":\"1f447-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F447-1F3FC\",\"non_qualified\":null,\"image\":\"1f447-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F447-1F3FD\",\"non_qualified\":null,\"image\":\"1f447-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F447-1F3FE\",\"non_qualified\":null,\"image\":\"1f447-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F447-1F3FF\",\"non_qualified\":null,\"image\":\"1f447-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":7,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"White Down Pointing Backhand Index\",\"b\":\"1F447\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fingers\",\"hand\",\"direction\",\"down\"],\"k\":[13,2],\"o\":2},\"flag-aq\":{\"a\":\"Antarctica Flag\",\"b\":\"1F1E6-1F1F6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,40],\"o\":2},\"briefs\":{\"a\":\"Briefs\",\"b\":\"1FA72\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,53],\"o\":12},\"kissing_heart\":{\"a\":\"Face Throwing a Kiss\",\"b\":\"1F618\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"kiss\"],\"k\":[31,2],\"l\":[\":*\",\":-*\"],\"o\":2},\"tiger2\":{\"a\":\"Tiger\",\"b\":\"1F405\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"roar\"],\"k\":[11,33],\"o\":2},\"stadium\":{\"a\":\"Stadium\",\"b\":\"1F3DF-FE0F\",\"c\":\"1F3DF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"place\",\"sports\",\"concert\",\"venue\"],\"k\":[10,50],\"o\":2},\"leopard\":{\"a\":\"Leopard\",\"b\":\"1F406\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\"],\"k\":[11,34],\"o\":2},\"no_bicycles\":{\"a\":\"No Bicycles\",\"b\":\"1F6B3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"cyclist\",\"prohibited\",\"circle\"],\"k\":[35,10],\"o\":2},\"kissing\":{\"a\":\"Kissing Face\",\"b\":\"1F617\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"face\",\"3\",\"valentines\",\"infatuation\",\"kiss\"],\"k\":[31,1],\"o\":2},\"flag-ar\":{\"a\":\"Argentina Flag\",\"b\":\"1F1E6-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,41],\"o\":2},\"avocado\":{\"a\":\"Avocado\",\"b\":\"1F951\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"food\"],\"k\":[41,32],\"o\":4},\"point_up\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"261D-1F3FB\",\"non_qualified\":null,\"image\":\"261d-1f3fb.png\",\"sheet_x\":53,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"261D-1F3FC\",\"non_qualified\":null,\"image\":\"261d-1f3fc.png\",\"sheet_x\":53,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"261D-1F3FD\",\"non_qualified\":null,\"image\":\"261d-1f3fd.png\",\"sheet_x\":53,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"261D-1F3FE\",\"non_qualified\":null,\"image\":\"261d-1f3fe.png\",\"sheet_x\":53,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"261D-1F3FF\",\"non_qualified\":null,\"image\":\"261d-1f3ff.png\",\"sheet_x\":53,\"sheet_y\":7,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"White Up Pointing Index\",\"b\":\"261D-FE0F\",\"c\":\"261D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hand\",\"fingers\",\"direction\",\"up\"],\"k\":[53,2],\"o\":2},\"gift\":{\"a\":\"Wrapped Present\",\"b\":\"1F381\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"present\",\"birthday\",\"christmas\",\"xmas\"],\"k\":[7,32],\"o\":2},\"classical_building\":{\"a\":\"Classical Building\",\"b\":\"1F3DB-FE0F\",\"c\":\"1F3DB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"art\",\"culture\",\"history\"],\"k\":[10,46],\"o\":2},\"shorts\":{\"a\":\"Shorts\",\"b\":\"1FA73\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,54],\"o\":12},\"+1\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44D-1F3FB\",\"non_qualified\":null,\"image\":\"1f44d-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":39,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F44D-1F3FC\",\"non_qualified\":null,\"image\":\"1f44d-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":40,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F44D-1F3FD\",\"non_qualified\":null,\"image\":\"1f44d-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":41,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F44D-1F3FE\",\"non_qualified\":null,\"image\":\"1f44d-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":42,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F44D-1F3FF\",\"non_qualified\":null,\"image\":\"1f44d-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":43,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Thumbs Up Sign\",\"b\":\"1F44D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"thumbsup\",\"yes\",\"awesome\",\"good\",\"agree\",\"accept\",\"cool\",\"hand\",\"like\"],\"k\":[13,38],\"n\":[\"thumbsup\"],\"o\":2},\"horse\":{\"a\":\"Horse Face\",\"b\":\"1F434\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"brown\",\"nature\"],\"k\":[12,24],\"o\":2},\"bikini\":{\"a\":\"Bikini\",\"b\":\"1F459\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"swimming\",\"female\",\"woman\",\"girl\",\"fashion\",\"beach\",\"summer\"],\"k\":[14,13],\"o\":2},\"no_smoking\":{\"a\":\"No Smoking Symbol\",\"b\":\"1F6AD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"cigarette\",\"blue-square\",\"smell\",\"smoke\"],\"k\":[35,4],\"o\":2},\"eggplant\":{\"a\":\"Aubergine\",\"b\":\"1F346\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vegetable\",\"nature\",\"food\",\"aubergine\"],\"k\":[6,30],\"o\":2},\"flag-as\":{\"a\":\"American Samoa Flag\",\"b\":\"1F1E6-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,42],\"o\":2},\"reminder_ribbon\":{\"a\":\"Reminder Ribbon\",\"b\":\"1F397-FE0F\",\"c\":\"1F397\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"cause\",\"support\",\"awareness\"],\"k\":[8,0],\"o\":2},\"building_construction\":{\"a\":\"Building Construction\",\"b\":\"1F3D7-FE0F\",\"c\":\"1F3D7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"wip\",\"working\",\"progress\"],\"k\":[10,42],\"o\":2},\"relaxed\":{\"a\":\"White Smiling Face\",\"b\":\"263A-FE0F\",\"c\":\"263A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"blush\",\"massage\",\"happiness\"],\"k\":[53,17],\"o\":2},\"kissing_closed_eyes\":{\"a\":\"Kissing Face with Closed Eyes\",\"b\":\"1F61A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"kiss\"],\"k\":[31,4],\"o\":2},\"-1\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44E-1F3FB\",\"non_qualified\":null,\"image\":\"1f44e-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":45,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F44E-1F3FC\",\"non_qualified\":null,\"image\":\"1f44e-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":46,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F44E-1F3FD\",\"non_qualified\":null,\"image\":\"1f44e-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":47,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F44E-1F3FE\",\"non_qualified\":null,\"image\":\"1f44e-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":48,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F44E-1F3FF\",\"non_qualified\":null,\"image\":\"1f44e-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":49,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Thumbs Down Sign\",\"b\":\"1F44E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"thumbsdown\",\"no\",\"dislike\",\"hand\"],\"k\":[13,44],\"n\":[\"thumbsdown\"],\"o\":2},\"admission_tickets\":{\"a\":\"Admission Tickets\",\"b\":\"1F39F-FE0F\",\"c\":\"1F39F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[8,5],\"o\":2},\"flag-at\":{\"a\":\"Austria Flag\",\"b\":\"1F1E6-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,43],\"o\":2},\"womans_clothes\":{\"a\":\"Womans Clothes\",\"b\":\"1F45A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fashion\",\"shopping_bags\",\"female\"],\"k\":[14,14],\"o\":2},\"do_not_litter\":{\"a\":\"Do Not Litter Symbol\",\"b\":\"1F6AF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"trash\",\"bin\",\"garbage\",\"circle\"],\"k\":[35,6],\"o\":2},\"potato\":{\"a\":\"Potato\",\"b\":\"1F954\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"tuber\",\"vegatable\",\"starch\"],\"k\":[41,35],\"o\":4},\"racehorse\":{\"a\":\"Horse\",\"b\":\"1F40E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"gamble\",\"luck\"],\"k\":[11,42],\"o\":2},\"bricks\":{\"a\":\"Brick\",\"b\":\"1F9F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,36],\"o\":11},\"fist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"270A-1F3FB\",\"non_qualified\":null,\"image\":\"270a-1f3fb.png\",\"sheet_x\":54,\"sheet_y\":44,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"270A-1F3FC\",\"non_qualified\":null,\"image\":\"270a-1f3fc.png\",\"sheet_x\":54,\"sheet_y\":45,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"270A-1F3FD\",\"non_qualified\":null,\"image\":\"270a-1f3fd.png\",\"sheet_x\":54,\"sheet_y\":46,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"270A-1F3FE\",\"non_qualified\":null,\"image\":\"270a-1f3fe.png\",\"sheet_x\":54,\"sheet_y\":47,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"270A-1F3FF\",\"non_qualified\":null,\"image\":\"270a-1f3ff.png\",\"sheet_x\":54,\"sheet_y\":48,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Raised Fist\",\"b\":\"270A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fingers\",\"hand\",\"grasp\"],\"k\":[54,43],\"o\":2},\"house_buildings\":{\"a\":\"House Buildings\",\"b\":\"1F3D8-FE0F\",\"c\":\"1F3D8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[10,43],\"o\":2},\"carrot\":{\"a\":\"Carrot\",\"b\":\"1F955\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vegetable\",\"food\",\"orange\"],\"k\":[41,36],\"o\":4},\"ticket\":{\"a\":\"Ticket\",\"b\":\"1F3AB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"event\",\"concert\",\"pass\"],\"k\":[8,17],\"o\":2},\"flag-au\":{\"a\":\"Australia Flag\",\"b\":\"1F1E6-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,44],\"o\":2},\"non-potable_water\":{\"a\":\"Non-Potable Water Symbol\",\"b\":\"1F6B1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"drink\",\"faucet\",\"tap\",\"circle\"],\"k\":[35,8],\"o\":2},\"purse\":{\"a\":\"Purse\",\"b\":\"1F45B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fashion\",\"accessories\",\"money\",\"sales\",\"shopping\"],\"k\":[14,15],\"o\":2},\"unicorn_face\":{\"a\":\"Unicorn Face\",\"b\":\"1F984\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,22],\"o\":2},\"kissing_smiling_eyes\":{\"a\":\"Kissing Face with Smiling Eyes\",\"b\":\"1F619\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"affection\",\"valentines\",\"infatuation\",\"kiss\"],\"k\":[31,3],\"o\":2},\"facepunch\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44A-1F3FB\",\"non_qualified\":null,\"image\":\"1f44a-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":21,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F44A-1F3FC\",\"non_qualified\":null,\"image\":\"1f44a-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":22,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F44A-1F3FD\",\"non_qualified\":null,\"image\":\"1f44a-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":23,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F44A-1F3FE\",\"non_qualified\":null,\"image\":\"1f44a-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":24,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F44A-1F3FF\",\"non_qualified\":null,\"image\":\"1f44a-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":25,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Fisted Hand Sign\",\"b\":\"1F44A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"angry\",\"violence\",\"fist\",\"hit\",\"attack\",\"hand\"],\"k\":[13,20],\"n\":[\"punch\"],\"o\":2},\"medal\":{\"a\":\"Medal\",\"b\":\"1F396-FE0F\",\"c\":\"1F396\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[7,56],\"o\":2},\"zebra_face\":{\"a\":\"Zebra Face\",\"b\":\"1F993\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,37],\"o\":5},\"handbag\":{\"a\":\"Handbag\",\"b\":\"1F45C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fashion\",\"accessory\",\"accessories\",\"shopping\"],\"k\":[14,16],\"o\":2},\"derelict_house_building\":{\"a\":\"Derelict House Building\",\"b\":\"1F3DA-FE0F\",\"c\":\"1F3DA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[10,45],\"o\":2},\"yum\":{\"a\":\"Face Savouring Delicious Food\",\"b\":\"1F60B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"happy\",\"joy\",\"tongue\",\"smile\",\"face\",\"silly\",\"yummy\",\"nom\",\"delicious\",\"savouring\"],\"k\":[30,46],\"o\":2},\"corn\":{\"a\":\"Ear of Maize\",\"b\":\"1F33D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"vegetable\",\"plant\"],\"k\":[6,21],\"o\":2},\"flag-aw\":{\"a\":\"Aruba Flag\",\"b\":\"1F1E6-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,45],\"o\":2},\"no_pedestrians\":{\"a\":\"No Pedestrians\",\"b\":\"1F6B7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"rules\",\"crossing\",\"walking\",\"circle\"],\"k\":[36,8],\"o\":2},\"house\":{\"a\":\"House Building\",\"b\":\"1F3E0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"home\"],\"k\":[10,51],\"o\":2},\"hot_pepper\":{\"a\":\"Hot Pepper\",\"b\":\"1F336-FE0F\",\"c\":\"1F336\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"spicy\",\"chilli\",\"chili\"],\"k\":[6,14],\"o\":2},\"flag-ax\":{\"a\":\"Åland Islands Flag\",\"b\":\"1F1E6-1F1FD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,46],\"o\":2},\"trophy\":{\"a\":\"Trophy\",\"b\":\"1F3C6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"win\",\"award\",\"contest\",\"place\",\"ftw\",\"ceremony\"],\"k\":[9,26],\"o\":2},\"deer\":{\"a\":\"Deer\",\"b\":\"1F98C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"horns\",\"venison\"],\"k\":[42,30],\"o\":4},\"left-facing_fist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91B-1F3FB\",\"non_qualified\":null,\"image\":\"1f91b-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F91B-1F3FC\",\"non_qualified\":null,\"image\":\"1f91b-1f3fc.png\",\"sheet_x\":37,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F91B-1F3FD\",\"non_qualified\":null,\"image\":\"1f91b-1f3fd.png\",\"sheet_x\":37,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F91B-1F3FE\",\"non_qualified\":null,\"image\":\"1f91b-1f3fe.png\",\"sheet_x\":37,\"sheet_y\":53,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F91B-1F3FF\",\"non_qualified\":null,\"image\":\"1f91b-1f3ff.png\",\"sheet_x\":37,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Left-Facing Fist\",\"b\":\"1F91B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,49],\"o\":4},\"stuck_out_tongue\":{\"a\":\"Face with Stuck-out Tongue\",\"b\":\"1F61B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"prank\",\"childish\",\"playful\",\"mischievous\",\"smile\",\"tongue\"],\"k\":[31,5],\"l\":[\":p\",\":-p\",\":P\",\":-P\",\":b\",\":-b\"],\"m\":\":p\",\"o\":2},\"pouch\":{\"a\":\"Pouch\",\"b\":\"1F45D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bag\",\"accessories\",\"shopping\"],\"k\":[14,17],\"o\":2},\"no_mobile_phones\":{\"a\":\"No Mobile Phones\",\"b\":\"1F4F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"iphone\",\"mute\",\"circle\"],\"k\":[27,18],\"o\":2},\"stuck_out_tongue_winking_eye\":{\"a\":\"Face with Stuck-out Tongue and Winking Eye\",\"b\":\"1F61C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"prank\",\"childish\",\"playful\",\"mischievous\",\"smile\",\"wink\",\"tongue\"],\"k\":[31,6],\"l\":[\";p\",\";-p\",\";b\",\";-b\",\";P\",\";-P\"],\"m\":\";p\",\"o\":2},\"sports_medal\":{\"a\":\"Sports Medal\",\"b\":\"1F3C5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[9,25],\"o\":2},\"cucumber\":{\"a\":\"Cucumber\",\"b\":\"1F952\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fruit\",\"food\",\"pickle\"],\"k\":[41,33],\"o\":4},\"cow\":{\"a\":\"Cow Face\",\"b\":\"1F42E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"beef\",\"ox\",\"animal\",\"nature\",\"moo\",\"milk\"],\"k\":[12,18],\"o\":2},\"underage\":{\"a\":\"No One Under Eighteen Symbol\",\"b\":\"1F51E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"18\",\"drink\",\"pub\",\"night\",\"minor\",\"circle\"],\"k\":[28,1],\"o\":2},\"flag-az\":{\"a\":\"Azerbaijan Flag\",\"b\":\"1F1E6-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,47],\"o\":2},\"shopping_bags\":{\"a\":\"Shopping Bags\",\"b\":\"1F6CD-FE0F\",\"c\":\"1F6CD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[36,35],\"o\":2},\"right-facing_fist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F91C-1F3FB\",\"non_qualified\":null,\"image\":\"1f91c-1f3fb.png\",\"sheet_x\":37,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F91C-1F3FC\",\"non_qualified\":null,\"image\":\"1f91c-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F91C-1F3FD\",\"non_qualified\":null,\"image\":\"1f91c-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F91C-1F3FE\",\"non_qualified\":null,\"image\":\"1f91c-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":2,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F91C-1F3FF\",\"non_qualified\":null,\"image\":\"1f91c-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":3,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Right-Facing Fist\",\"b\":\"1F91C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,55],\"o\":4},\"house_with_garden\":{\"a\":\"House with Garden\",\"b\":\"1F3E1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"home\",\"plant\",\"nature\"],\"k\":[10,52],\"o\":2},\"clap\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F44F-1F3FB\",\"non_qualified\":null,\"image\":\"1f44f-1f3fb.png\",\"sheet_x\":13,\"sheet_y\":51,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F44F-1F3FC\",\"non_qualified\":null,\"image\":\"1f44f-1f3fc.png\",\"sheet_x\":13,\"sheet_y\":52,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F44F-1F3FD\",\"non_qualified\":null,\"image\":\"1f44f-1f3fd.png\",\"sheet_x\":13,\"sheet_y\":53,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F44F-1F3FE\",\"non_qualified\":null,\"image\":\"1f44f-1f3fe.png\",\"sheet_x\":13,\"sheet_y\":54,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F44F-1F3FF\",\"non_qualified\":null,\"image\":\"1f44f-1f3ff.png\",\"sheet_x\":13,\"sheet_y\":55,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Clapping Hands Sign\",\"b\":\"1F44F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hands\",\"praise\",\"applause\",\"congrats\",\"yay\"],\"k\":[13,50],\"o\":2},\"leafy_green\":{\"a\":\"Leafy Green\",\"b\":\"1F96C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,2],\"o\":11},\"office\":{\"a\":\"Office Building\",\"b\":\"1F3E2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"bureau\",\"work\"],\"k\":[10,53],\"o\":2},\"flag-ba\":{\"a\":\"Bosnia & Herzegovina Flag\",\"b\":\"1F1E7-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,48],\"o\":2},\"zany_face\":{\"a\":\"Grinning Face with One Large and One Small Eye\",\"b\":\"1F92A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,44],\"n\":[\"grinning_face_with_one_large_and_one_small_eye\"],\"o\":5},\"first_place_medal\":{\"a\":\"First Place Medal\",\"b\":\"1F947\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,22],\"o\":4},\"ox\":{\"a\":\"Ox\",\"b\":\"1F402\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cow\",\"beef\"],\"k\":[11,30],\"o\":2},\"school_satchel\":{\"a\":\"School Satchel\",\"b\":\"1F392\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"student\",\"education\",\"bag\",\"backpack\"],\"k\":[7,54],\"o\":2},\"radioactive_sign\":{\"a\":\"Radioactive Sign\",\"b\":\"2622-FE0F\",\"c\":\"2622\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[53,9],\"o\":2},\"second_place_medal\":{\"a\":\"Second Place Medal\",\"b\":\"1F948\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,23],\"o\":4},\"stuck_out_tongue_closed_eyes\":{\"a\":\"Face with Stuck-out Tongue and Tightly-Closed Eyes\",\"b\":\"1F61D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"prank\",\"playful\",\"mischievous\",\"smile\",\"tongue\"],\"k\":[31,7],\"o\":2},\"broccoli\":{\"a\":\"Broccoli\",\"b\":\"1F966\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,53],\"o\":5},\"biohazard_sign\":{\"a\":\"Biohazard Sign\",\"b\":\"2623-FE0F\",\"c\":\"2623\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[53,10],\"o\":2},\"mans_shoe\":{\"a\":\"Mans Shoe\",\"b\":\"1F45E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fashion\",\"male\"],\"k\":[14,18],\"n\":[\"shoe\"],\"o\":2},\"raised_hands\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64C-1F3FB\",\"non_qualified\":null,\"image\":\"1f64c-1f3fb.png\",\"sheet_x\":33,\"sheet_y\":9,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F64C-1F3FC\",\"non_qualified\":null,\"image\":\"1f64c-1f3fc.png\",\"sheet_x\":33,\"sheet_y\":10,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F64C-1F3FD\",\"non_qualified\":null,\"image\":\"1f64c-1f3fd.png\",\"sheet_x\":33,\"sheet_y\":11,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F64C-1F3FE\",\"non_qualified\":null,\"image\":\"1f64c-1f3fe.png\",\"sheet_x\":33,\"sheet_y\":12,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F64C-1F3FF\",\"non_qualified\":null,\"image\":\"1f64c-1f3ff.png\",\"sheet_x\":33,\"sheet_y\":13,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Person Raising Both Hands in Celebration\",\"b\":\"1F64C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"gesture\",\"hooray\",\"yea\",\"celebration\",\"hands\"],\"k\":[33,8],\"o\":2},\"post_office\":{\"a\":\"Japanese Post Office\",\"b\":\"1F3E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"envelope\",\"communication\"],\"k\":[10,54],\"o\":2},\"flag-bb\":{\"a\":\"Barbados Flag\",\"b\":\"1F1E7-1F1E7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,49],\"o\":2},\"water_buffalo\":{\"a\":\"Water Buffalo\",\"b\":\"1F403\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"ox\",\"cow\"],\"k\":[11,31],\"o\":2},\"third_place_medal\":{\"a\":\"Third Place Medal\",\"b\":\"1F949\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,24],\"o\":4},\"european_post_office\":{\"a\":\"European Post Office\",\"b\":\"1F3E4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"email\"],\"k\":[10,55],\"o\":2},\"athletic_shoe\":{\"a\":\"Athletic Shoe\",\"b\":\"1F45F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shoes\",\"sports\",\"sneakers\"],\"k\":[14,19],\"o\":2},\"arrow_up\":{\"a\":\"Upwards Black Arrow\",\"b\":\"2B06-FE0F\",\"c\":\"2B06\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"continue\",\"top\",\"direction\"],\"k\":[55,38],\"o\":2},\"cow2\":{\"a\":\"Cow\",\"b\":\"1F404\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"beef\",\"ox\",\"animal\",\"nature\",\"moo\",\"milk\"],\"k\":[11,32],\"o\":2},\"open_hands\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F450-1F3FB\",\"non_qualified\":null,\"image\":\"1f450-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":0,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F450-1F3FC\",\"non_qualified\":null,\"image\":\"1f450-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":1,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F450-1F3FD\",\"non_qualified\":null,\"image\":\"1f450-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":2,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F450-1F3FE\",\"non_qualified\":null,\"image\":\"1f450-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F450-1F3FF\",\"non_qualified\":null,\"image\":\"1f450-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Open Hands Sign\",\"b\":\"1F450\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fingers\",\"butterfly\",\"hands\",\"open\"],\"k\":[13,56],\"o\":2},\"garlic\":{\"a\":\"Garlic\",\"b\":\"1F9C4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,12],\"o\":12},\"money_mouth_face\":{\"a\":\"Money-Mouth Face\",\"b\":\"1F911\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"rich\",\"dollar\",\"money\"],\"k\":[37,24],\"o\":2},\"flag-bd\":{\"a\":\"Bangladesh Flag\",\"b\":\"1F1E7-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,50],\"o\":2},\"soccer\":{\"a\":\"Soccer Ball\",\"b\":\"26BD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"football\"],\"k\":[53,56],\"o\":2},\"hugging_face\":{\"a\":\"Hugging Face\",\"b\":\"1F917\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,30],\"o\":2},\"onion\":{\"a\":\"Onion\",\"b\":\"1F9C5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,13],\"o\":12},\"arrow_upper_right\":{\"a\":\"North East Arrow\",\"b\":\"2197-FE0F\",\"c\":\"2197\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"point\",\"direction\",\"diagonal\",\"northeast\"],\"k\":[52,17],\"o\":2},\"palms_up_together\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F932-1F3FB\",\"non_qualified\":null,\"image\":\"1f932-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":6,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F932-1F3FC\",\"non_qualified\":null,\"image\":\"1f932-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":7,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F932-1F3FD\",\"non_qualified\":null,\"image\":\"1f932-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":8,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F932-1F3FE\",\"non_qualified\":null,\"image\":\"1f932-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":9,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F932-1F3FF\",\"non_qualified\":null,\"image\":\"1f932-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":10,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Palms Up Together\",\"b\":\"1F932\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[39,5],\"o\":5},\"pig\":{\"a\":\"Pig Face\",\"b\":\"1F437\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"oink\",\"nature\"],\"k\":[12,27],\"o\":2},\"hospital\":{\"a\":\"Hospital\",\"b\":\"1F3E5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"health\",\"surgery\",\"doctor\"],\"k\":[10,56],\"o\":2},\"hiking_boot\":{\"a\":\"Hiking Boot\",\"b\":\"1F97E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,16],\"o\":11},\"flag-be\":{\"a\":\"Belgium Flag\",\"b\":\"1F1E7-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,51],\"o\":2},\"flag-bf\":{\"a\":\"Burkina Faso Flag\",\"b\":\"1F1E7-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,52],\"o\":2},\"mushroom\":{\"a\":\"Mushroom\",\"b\":\"1F344\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"plant\",\"vegetable\"],\"k\":[6,28],\"o\":2},\"pig2\":{\"a\":\"Pig\",\"b\":\"1F416\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\"],\"k\":[11,51],\"o\":2},\"baseball\":{\"a\":\"Baseball\",\"b\":\"26BE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"balls\"],\"k\":[54,0],\"o\":2},\"face_with_hand_over_mouth\":{\"a\":\"Smiling Face with Smiling Eyes and Hand Covering Mouth\",\"b\":\"1F92D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,47],\"n\":[\"smiling_face_with_smiling_eyes_and_hand_covering_mouth\"],\"o\":5},\"handshake\":{\"a\":\"Handshake\",\"b\":\"1F91D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"agreement\",\"shake\"],\"k\":[38,4],\"o\":4},\"womans_flat_shoe\":{\"a\":\"Flat Shoe\",\"b\":\"1F97F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,17],\"o\":11},\"bank\":{\"a\":\"Bank\",\"b\":\"1F3E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"money\",\"sales\",\"cash\",\"business\",\"enterprise\"],\"k\":[11,0],\"o\":2},\"arrow_right\":{\"a\":\"Black Rightwards Arrow\",\"b\":\"27A1-FE0F\",\"c\":\"27A1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"next\"],\"k\":[55,32],\"o\":2},\"peanuts\":{\"a\":\"Peanuts\",\"b\":\"1F95C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"nut\"],\"k\":[41,43],\"o\":4},\"shushing_face\":{\"a\":\"Face with Finger Covering Closed Lips\",\"b\":\"1F92B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,45],\"n\":[\"face_with_finger_covering_closed_lips\"],\"o\":5},\"pray\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64F-1F3FB\",\"non_qualified\":null,\"image\":\"1f64f-1f3fb.png\",\"sheet_x\":33,\"sheet_y\":51,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F64F-1F3FC\",\"non_qualified\":null,\"image\":\"1f64f-1f3fc.png\",\"sheet_x\":33,\"sheet_y\":52,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F64F-1F3FD\",\"non_qualified\":null,\"image\":\"1f64f-1f3fd.png\",\"sheet_x\":33,\"sheet_y\":53,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F64F-1F3FE\",\"non_qualified\":null,\"image\":\"1f64f-1f3fe.png\",\"sheet_x\":33,\"sheet_y\":54,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F64F-1F3FF\",\"non_qualified\":null,\"image\":\"1f64f-1f3ff.png\",\"sheet_x\":33,\"sheet_y\":55,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Person with Folded Hands\",\"b\":\"1F64F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"please\",\"hope\",\"wish\",\"namaste\",\"highfive\"],\"k\":[33,50],\"o\":2},\"softball\":{\"a\":\"Softball\",\"b\":\"1F94E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,29],\"o\":11},\"high_heel\":{\"a\":\"High-Heeled Shoe\",\"b\":\"1F460\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fashion\",\"shoes\",\"female\",\"pumps\",\"stiletto\"],\"k\":[14,20],\"o\":2},\"flag-bg\":{\"a\":\"Bulgaria Flag\",\"b\":\"1F1E7-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,53],\"o\":2},\"arrow_lower_right\":{\"a\":\"South East Arrow\",\"b\":\"2198-FE0F\",\"c\":\"2198\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"direction\",\"diagonal\",\"southeast\"],\"k\":[52,18],\"o\":2},\"hotel\":{\"a\":\"Hotel\",\"b\":\"1F3E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"accomodation\",\"checkin\"],\"k\":[11,2],\"o\":2},\"boar\":{\"a\":\"Boar\",\"b\":\"1F417\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\"],\"k\":[11,52],\"o\":2},\"sandal\":{\"a\":\"Womans Sandal\",\"b\":\"1F461\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shoes\",\"fashion\",\"flip flops\"],\"k\":[14,21],\"o\":2},\"flag-bh\":{\"a\":\"Bahrain Flag\",\"b\":\"1F1E7-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,54],\"o\":2},\"arrow_down\":{\"a\":\"Downwards Black Arrow\",\"b\":\"2B07-FE0F\",\"c\":\"2B07\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"direction\",\"bottom\"],\"k\":[55,39],\"o\":2},\"thinking_face\":{\"a\":\"Thinking Face\",\"b\":\"1F914\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,27],\"o\":2},\"writing_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"270D-1F3FB\",\"non_qualified\":null,\"image\":\"270d-1f3fb.png\",\"sheet_x\":55,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"270D-1F3FC\",\"non_qualified\":null,\"image\":\"270d-1f3fc.png\",\"sheet_x\":55,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"270D-1F3FD\",\"non_qualified\":null,\"image\":\"270d-1f3fd.png\",\"sheet_x\":55,\"sheet_y\":7,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"270D-1F3FE\",\"non_qualified\":null,\"image\":\"270d-1f3fe.png\",\"sheet_x\":55,\"sheet_y\":8,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"270D-1F3FF\",\"non_qualified\":null,\"image\":\"270d-1f3ff.png\",\"sheet_x\":55,\"sheet_y\":9,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Writing Hand\",\"b\":\"270D-FE0F\",\"c\":\"270D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"lower_left_ballpoint_pen\",\"stationery\",\"write\",\"compose\"],\"k\":[55,4],\"o\":2},\"chestnut\":{\"a\":\"Chestnut\",\"b\":\"1F330\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"squirrel\"],\"k\":[6,8],\"o\":2},\"basketball\":{\"a\":\"Basketball and Hoop\",\"b\":\"1F3C0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"balls\",\"NBA\"],\"k\":[8,38],\"o\":2},\"pig_nose\":{\"a\":\"Pig Nose\",\"b\":\"1F43D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"oink\"],\"k\":[12,33],\"o\":2},\"love_hotel\":{\"a\":\"Love Hotel\",\"b\":\"1F3E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"like\",\"affection\",\"dating\"],\"k\":[11,3],\"o\":2},\"nail_care\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F485-1F3FB\",\"non_qualified\":null,\"image\":\"1f485-1f3fb.png\",\"sheet_x\":24,\"sheet_y\":34,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F485-1F3FC\",\"non_qualified\":null,\"image\":\"1f485-1f3fc.png\",\"sheet_x\":24,\"sheet_y\":35,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F485-1F3FD\",\"non_qualified\":null,\"image\":\"1f485-1f3fd.png\",\"sheet_x\":24,\"sheet_y\":36,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F485-1F3FE\",\"non_qualified\":null,\"image\":\"1f485-1f3fe.png\",\"sheet_x\":24,\"sheet_y\":37,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F485-1F3FF\",\"non_qualified\":null,\"image\":\"1f485-1f3ff.png\",\"sheet_x\":24,\"sheet_y\":38,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Nail Polish\",\"b\":\"1F485\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"beauty\",\"manicure\",\"finger\",\"fashion\",\"nail\"],\"k\":[24,33],\"o\":2},\"volleyball\":{\"a\":\"Volleyball\",\"b\":\"1F3D0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"balls\"],\"k\":[10,35],\"o\":2},\"flag-bi\":{\"a\":\"Burundi Flag\",\"b\":\"1F1E7-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,55],\"o\":2},\"arrow_lower_left\":{\"a\":\"South West Arrow\",\"b\":\"2199-FE0F\",\"c\":\"2199\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"direction\",\"diagonal\",\"southwest\"],\"k\":[52,19],\"o\":2},\"ram\":{\"a\":\"Ram\",\"b\":\"1F40F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"sheep\",\"nature\"],\"k\":[11,43],\"o\":2},\"ballet_shoes\":{\"a\":\"Ballet Shoes\",\"b\":\"1FA70\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,51],\"o\":12},\"zipper_mouth_face\":{\"a\":\"Zipper-Mouth Face\",\"b\":\"1F910\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"sealed\",\"zipper\",\"secret\"],\"k\":[37,23],\"o\":2},\"bread\":{\"a\":\"Bread\",\"b\":\"1F35E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"wheat\",\"breakfast\",\"toast\"],\"k\":[6,54],\"o\":2},\"convenience_store\":{\"a\":\"Convenience Store\",\"b\":\"1F3EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"shopping\",\"groceries\"],\"k\":[11,4],\"o\":2},\"boot\":{\"a\":\"Womans Boots\",\"b\":\"1F462\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shoes\",\"fashion\"],\"k\":[14,22],\"o\":2},\"sheep\":{\"a\":\"Sheep\",\"b\":\"1F411\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"wool\",\"shipit\"],\"k\":[11,45],\"o\":2},\"face_with_raised_eyebrow\":{\"a\":\"Face with One Eyebrow Raised\",\"b\":\"1F928\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,42],\"n\":[\"face_with_one_eyebrow_raised\"],\"o\":5},\"flag-bj\":{\"a\":\"Benin Flag\",\"b\":\"1F1E7-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[0,56],\"o\":2},\"arrow_left\":{\"a\":\"Leftwards Black Arrow\",\"b\":\"2B05-FE0F\",\"c\":\"2B05\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"previous\",\"back\"],\"k\":[55,37],\"o\":2},\"selfie\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F933-1F3FB\",\"non_qualified\":null,\"image\":\"1f933-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F933-1F3FC\",\"non_qualified\":null,\"image\":\"1f933-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F933-1F3FD\",\"non_qualified\":null,\"image\":\"1f933-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":14,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F933-1F3FE\",\"non_qualified\":null,\"image\":\"1f933-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F933-1F3FF\",\"non_qualified\":null,\"image\":\"1f933-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Selfie\",\"b\":\"1F933\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"camera\",\"phone\"],\"k\":[39,11],\"o\":4},\"croissant\":{\"a\":\"Croissant\",\"b\":\"1F950\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"bread\",\"french\"],\"k\":[41,31],\"o\":4},\"school\":{\"a\":\"School\",\"b\":\"1F3EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"student\",\"education\",\"learn\",\"teach\"],\"k\":[11,5],\"o\":2},\"football\":{\"a\":\"American Football\",\"b\":\"1F3C8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"balls\",\"NFL\"],\"k\":[9,33],\"o\":2},\"goat\":{\"a\":\"Goat\",\"b\":\"1F410\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\"],\"k\":[11,44],\"o\":2},\"department_store\":{\"a\":\"Department Store\",\"b\":\"1F3EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"shopping\",\"mall\"],\"k\":[11,6],\"o\":2},\"flag-bl\":{\"a\":\"St. Barthélemy Flag\",\"b\":\"1F1E7-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,0],\"o\":2},\"crown\":{\"a\":\"Crown\",\"b\":\"1F451\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"king\",\"kod\",\"leader\",\"royalty\",\"lord\"],\"k\":[14,5],\"o\":2},\"arrow_upper_left\":{\"a\":\"North West Arrow\",\"b\":\"2196-FE0F\",\"c\":\"2196\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"point\",\"direction\",\"diagonal\",\"northwest\"],\"k\":[52,16],\"o\":2},\"neutral_face\":{\"a\":\"Neutral Face\",\"b\":\"1F610\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"indifference\",\"meh\",\":|\",\"neutral\"],\"k\":[30,51],\"l\":[\":|\",\":-|\"],\"o\":2},\"rugby_football\":{\"a\":\"Rugby Football\",\"b\":\"1F3C9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"team\"],\"k\":[9,34],\"o\":2},\"muscle\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F4AA-1F3FB\",\"non_qualified\":null,\"image\":\"1f4aa-1f3fb.png\",\"sheet_x\":25,\"sheet_y\":53,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F4AA-1F3FC\",\"non_qualified\":null,\"image\":\"1f4aa-1f3fc.png\",\"sheet_x\":25,\"sheet_y\":54,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F4AA-1F3FD\",\"non_qualified\":null,\"image\":\"1f4aa-1f3fd.png\",\"sheet_x\":25,\"sheet_y\":55,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F4AA-1F3FE\",\"non_qualified\":null,\"image\":\"1f4aa-1f3fe.png\",\"sheet_x\":25,\"sheet_y\":56,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F4AA-1F3FF\",\"non_qualified\":null,\"image\":\"1f4aa-1f3ff.png\",\"sheet_x\":26,\"sheet_y\":0,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Flexed Biceps\",\"b\":\"1F4AA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"arm\",\"flex\",\"hand\",\"summer\",\"strong\",\"biceps\"],\"k\":[25,52],\"o\":2},\"baguette_bread\":{\"a\":\"Baguette Bread\",\"b\":\"1F956\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"bread\",\"french\"],\"k\":[41,37],\"o\":4},\"expressionless\":{\"a\":\"Expressionless Face\",\"b\":\"1F611\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"indifferent\",\"-_-\",\"meh\",\"deadpan\"],\"k\":[30,52],\"o\":2},\"womans_hat\":{\"a\":\"Womans Hat\",\"b\":\"1F452\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fashion\",\"accessories\",\"female\",\"lady\",\"spring\"],\"k\":[14,6],\"o\":2},\"pretzel\":{\"a\":\"Pretzel\",\"b\":\"1F968\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,55],\"o\":5},\"mechanical_arm\":{\"a\":\"Mechanical Arm\",\"b\":\"1F9BE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,6],\"o\":12},\"arrow_up_down\":{\"a\":\"Up Down Arrow\",\"b\":\"2195-FE0F\",\"c\":\"2195\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"direction\",\"way\",\"vertical\"],\"k\":[52,15],\"o\":2},\"dromedary_camel\":{\"a\":\"Dromedary Camel\",\"b\":\"1F42A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"hot\",\"desert\",\"hump\"],\"k\":[12,14],\"o\":2},\"tennis\":{\"a\":\"Tennis Racquet and Ball\",\"b\":\"1F3BE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"balls\",\"green\"],\"k\":[8,36],\"o\":2},\"flag-bm\":{\"a\":\"Bermuda Flag\",\"b\":\"1F1E7-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,1],\"o\":2},\"factory\":{\"a\":\"Factory\",\"b\":\"1F3ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"industry\",\"pollution\",\"smoke\"],\"k\":[11,7],\"o\":2},\"japanese_castle\":{\"a\":\"Japanese Castle\",\"b\":\"1F3EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"building\"],\"k\":[11,9],\"o\":2},\"no_mouth\":{\"a\":\"Face Without Mouth\",\"b\":\"1F636\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"hellokitty\"],\"k\":[31,32],\"o\":2},\"mechanical_leg\":{\"a\":\"Mechanical Leg\",\"b\":\"1F9BF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,7],\"o\":12},\"bagel\":{\"a\":\"Bagel\",\"b\":\"1F96F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,5],\"o\":11},\"camel\":{\"a\":\"Bactrian Camel\",\"b\":\"1F42B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"hot\",\"desert\",\"hump\"],\"k\":[12,15],\"o\":2},\"tophat\":{\"a\":\"Top Hat\",\"b\":\"1F3A9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"magic\",\"gentleman\",\"classy\",\"circus\"],\"k\":[8,15],\"o\":2},\"left_right_arrow\":{\"a\":\"Left Right Arrow\",\"b\":\"2194-FE0F\",\"c\":\"2194\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"direction\",\"horizontal\",\"sideways\"],\"k\":[52,14],\"o\":2},\"flag-bn\":{\"a\":\"Brunei Flag\",\"b\":\"1F1E7-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,2],\"o\":2},\"flying_disc\":{\"a\":\"Flying Disc\",\"b\":\"1F94F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,30],\"o\":11},\"smirk\":{\"a\":\"Smirking Face\",\"b\":\"1F60F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"smile\",\"mean\",\"prank\",\"smug\",\"sarcasm\"],\"k\":[30,50],\"o\":2},\"mortar_board\":{\"a\":\"Graduation Cap\",\"b\":\"1F393\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"school\",\"college\",\"degree\",\"university\",\"graduation\",\"cap\",\"hat\",\"legal\",\"learn\",\"education\"],\"k\":[7,55],\"o\":2},\"european_castle\":{\"a\":\"European Castle\",\"b\":\"1F3F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"royalty\",\"history\"],\"k\":[11,10],\"o\":2},\"leg\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9B5-1F3FB\",\"non_qualified\":null,\"image\":\"1f9b5-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":6,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9B5-1F3FC\",\"non_qualified\":null,\"image\":\"1f9b5-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":7,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9B5-1F3FD\",\"non_qualified\":null,\"image\":\"1f9b5-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":8,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9B5-1F3FE\",\"non_qualified\":null,\"image\":\"1f9b5-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":9,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9B5-1F3FF\",\"non_qualified\":null,\"image\":\"1f9b5-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":10,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Leg\",\"b\":\"1F9B5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,5],\"o\":11},\"pancakes\":{\"a\":\"Pancakes\",\"b\":\"1F95E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"breakfast\",\"flapjacks\",\"hotcakes\"],\"k\":[41,45],\"o\":4},\"leftwards_arrow_with_hook\":{\"a\":\"Leftwards Arrow with Hook\",\"b\":\"21A9-FE0F\",\"c\":\"21A9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"back\",\"return\",\"blue-square\",\"undo\",\"enter\"],\"k\":[52,20],\"o\":2},\"flag-bo\":{\"a\":\"Bolivia Flag\",\"b\":\"1F1E7-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,3],\"o\":2},\"bowling\":{\"a\":\"Bowling\",\"b\":\"1F3B3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"fun\",\"play\"],\"k\":[8,25],\"o\":2},\"llama\":{\"a\":\"Llama\",\"b\":\"1F999\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,43],\"o\":11},\"arrow_right_hook\":{\"a\":\"Rightwards Arrow with Hook\",\"b\":\"21AA-FE0F\",\"c\":\"21AA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"return\",\"rotate\",\"direction\"],\"k\":[52,21],\"o\":2},\"wedding\":{\"a\":\"Wedding\",\"b\":\"1F492\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"affection\",\"couple\",\"marriage\",\"bride\",\"groom\"],\"k\":[25,28],\"o\":2},\"flag-bq\":{\"a\":\"Caribbean Netherlands Flag\",\"b\":\"1F1E7-1F1F6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,4],\"o\":2},\"foot\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9B6-1F3FB\",\"non_qualified\":null,\"image\":\"1f9b6-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":12,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9B6-1F3FC\",\"non_qualified\":null,\"image\":\"1f9b6-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":13,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9B6-1F3FD\",\"non_qualified\":null,\"image\":\"1f9b6-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":14,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9B6-1F3FE\",\"non_qualified\":null,\"image\":\"1f9b6-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":15,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9B6-1F3FF\",\"non_qualified\":null,\"image\":\"1f9b6-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":16,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Foot\",\"b\":\"1F9B6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,11],\"o\":11},\"giraffe_face\":{\"a\":\"Giraffe Face\",\"b\":\"1F992\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,36],\"o\":5},\"unamused\":{\"a\":\"Unamused Face\",\"b\":\"1F612\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"indifference\",\"bored\",\"straight face\",\"serious\",\"sarcasm\"],\"k\":[30,53],\"m\":\":(\",\"o\":2},\"billed_cap\":{\"a\":\"Billed Cap\",\"b\":\"1F9E2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,21],\"o\":5},\"waffle\":{\"a\":\"Waffle\",\"b\":\"1F9C7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,15],\"o\":12},\"cricket_bat_and_ball\":{\"a\":\"Cricket Bat and Ball\",\"b\":\"1F3CF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[10,34],\"o\":2},\"helmet_with_white_cross\":{\"a\":\"Helmet with White Cross\",\"b\":\"26D1-FE0F\",\"c\":\"26D1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[54,6],\"o\":2},\"ear\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F442-1F3FB\",\"non_qualified\":null,\"image\":\"1f442-1f3fb.png\",\"sheet_x\":12,\"sheet_y\":40,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F442-1F3FC\",\"non_qualified\":null,\"image\":\"1f442-1f3fc.png\",\"sheet_x\":12,\"sheet_y\":41,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F442-1F3FD\",\"non_qualified\":null,\"image\":\"1f442-1f3fd.png\",\"sheet_x\":12,\"sheet_y\":42,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F442-1F3FE\",\"non_qualified\":null,\"image\":\"1f442-1f3fe.png\",\"sheet_x\":12,\"sheet_y\":43,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F442-1F3FF\",\"non_qualified\":null,\"image\":\"1f442-1f3ff.png\",\"sheet_x\":12,\"sheet_y\":44,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Ear\",\"b\":\"1F442\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"hear\",\"sound\",\"listen\"],\"k\":[12,39],\"o\":2},\"elephant\":{\"a\":\"Elephant\",\"b\":\"1F418\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"nose\",\"th\",\"circus\"],\"k\":[11,53],\"o\":2},\"cheese_wedge\":{\"a\":\"Cheese Wedge\",\"b\":\"1F9C0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,8],\"o\":2},\"tokyo_tower\":{\"a\":\"Tokyo Tower\",\"b\":\"1F5FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"japanese\"],\"k\":[30,31],\"o\":2},\"arrow_heading_up\":{\"a\":\"Arrow Pointing Rightwards Then Curving Upwards\",\"b\":\"2934-FE0F\",\"c\":\"2934\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"direction\",\"top\"],\"k\":[55,35],\"o\":2},\"field_hockey_stick_and_ball\":{\"a\":\"Field Hockey Stick and Ball\",\"b\":\"1F3D1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[10,36],\"o\":2},\"flag-br\":{\"a\":\"Brazil Flag\",\"b\":\"1F1E7-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,5],\"o\":2},\"face_with_rolling_eyes\":{\"a\":\"Face with Rolling Eyes\",\"b\":\"1F644\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[31,46],\"o\":2},\"ear_with_hearing_aid\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9BB-1F3FB\",\"non_qualified\":null,\"image\":\"1f9bb-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":56,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9BB-1F3FC\",\"non_qualified\":null,\"image\":\"1f9bb-1f3fc.png\",\"sheet_x\":44,\"sheet_y\":0,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9BB-1F3FD\",\"non_qualified\":null,\"image\":\"1f9bb-1f3fd.png\",\"sheet_x\":44,\"sheet_y\":1,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9BB-1F3FE\",\"non_qualified\":null,\"image\":\"1f9bb-1f3fe.png\",\"sheet_x\":44,\"sheet_y\":2,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9BB-1F3FF\",\"non_qualified\":null,\"image\":\"1f9bb-1f3ff.png\",\"sheet_x\":44,\"sheet_y\":3,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Ear with Hearing Aid\",\"b\":\"1F9BB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,55],\"o\":12},\"arrow_heading_down\":{\"a\":\"Arrow Pointing Rightwards Then Curving Downwards\",\"b\":\"2935-FE0F\",\"c\":\"2935\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"direction\",\"bottom\"],\"k\":[55,36],\"o\":2},\"ice_hockey_stick_and_puck\":{\"a\":\"Ice Hockey Stick and Puck\",\"b\":\"1F3D2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[10,37],\"o\":2},\"meat_on_bone\":{\"a\":\"Meat on Bone\",\"b\":\"1F356\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"good\",\"food\",\"drumstick\"],\"k\":[6,46],\"o\":2},\"prayer_beads\":{\"a\":\"Prayer Beads\",\"b\":\"1F4FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dhikr\",\"religious\"],\"k\":[27,27],\"o\":2},\"statue_of_liberty\":{\"a\":\"Statue of Liberty\",\"b\":\"1F5FD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"american\",\"newyork\"],\"k\":[30,32],\"o\":2},\"grimacing\":{\"a\":\"Grimacing Face\",\"b\":\"1F62C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"grimace\",\"teeth\"],\"k\":[31,22],\"o\":2},\"flag-bs\":{\"a\":\"Bahamas Flag\",\"b\":\"1F1E7-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,6],\"o\":2},\"rhinoceros\":{\"a\":\"Rhinoceros\",\"b\":\"1F98F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"horn\"],\"k\":[42,33],\"o\":4},\"lacrosse\":{\"a\":\"Lacrosse Stick and Ball\",\"b\":\"1F94D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,28],\"o\":11},\"poultry_leg\":{\"a\":\"Poultry Leg\",\"b\":\"1F357\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"meat\",\"drumstick\",\"bird\",\"chicken\",\"turkey\"],\"k\":[6,47],\"o\":2},\"hippopotamus\":{\"a\":\"Hippopotamus\",\"b\":\"1F99B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,45],\"o\":11},\"nose\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F443-1F3FB\",\"non_qualified\":null,\"image\":\"1f443-1f3fb.png\",\"sheet_x\":12,\"sheet_y\":46,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F443-1F3FC\",\"non_qualified\":null,\"image\":\"1f443-1f3fc.png\",\"sheet_x\":12,\"sheet_y\":47,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F443-1F3FD\",\"non_qualified\":null,\"image\":\"1f443-1f3fd.png\",\"sheet_x\":12,\"sheet_y\":48,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F443-1F3FE\",\"non_qualified\":null,\"image\":\"1f443-1f3fe.png\",\"sheet_x\":12,\"sheet_y\":49,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F443-1F3FF\",\"non_qualified\":null,\"image\":\"1f443-1f3ff.png\",\"sheet_x\":12,\"sheet_y\":50,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Nose\",\"b\":\"1F443\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"smell\",\"sniff\"],\"k\":[12,45],\"o\":2},\"arrows_clockwise\":{\"a\":\"Clockwise Downwards and Upwards Open Circle Arrows\",\"b\":\"1F503\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sync\",\"cycle\",\"round\",\"repeat\"],\"k\":[27,31],\"o\":2},\"flag-bt\":{\"a\":\"Bhutan Flag\",\"b\":\"1F1E7-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,7],\"o\":2},\"church\":{\"a\":\"Church\",\"b\":\"26EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"building\",\"religion\",\"christ\"],\"k\":[54,10],\"o\":2},\"lipstick\":{\"a\":\"Lipstick\",\"b\":\"1F484\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"female\",\"girl\",\"fashion\",\"woman\"],\"k\":[24,32],\"o\":2},\"lying_face\":{\"a\":\"Lying Face\",\"b\":\"1F925\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"lie\",\"pinocchio\"],\"k\":[38,22],\"o\":4},\"arrows_counterclockwise\":{\"a\":\"Anticlockwise Downwards and Upwards Open Circle Arrows\",\"b\":\"1F504\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"sync\",\"cycle\"],\"k\":[27,32],\"o\":2},\"flag-bv\":{\"a\":\"Bouvet Island Flag\",\"b\":\"1F1E7-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,8],\"o\":2},\"cut_of_meat\":{\"a\":\"Cut of Meat\",\"b\":\"1F969\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,56],\"o\":5},\"mosque\":{\"a\":\"Mosque\",\"b\":\"1F54C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"islam\",\"worship\",\"minaret\"],\"k\":[28,36],\"o\":2},\"ring\":{\"a\":\"Ring\",\"b\":\"1F48D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"wedding\",\"propose\",\"marriage\",\"valentines\",\"diamond\",\"fashion\",\"jewelry\",\"gem\",\"engagement\"],\"k\":[25,23],\"o\":2},\"brain\":{\"a\":\"Brain\",\"b\":\"1F9E0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,19],\"o\":5},\"table_tennis_paddle_and_ball\":{\"a\":\"Table Tennis Paddle and Ball\",\"b\":\"1F3D3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[10,38],\"o\":2},\"relieved\":{\"a\":\"Relieved Face\",\"b\":\"1F60C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"relaxed\",\"phew\",\"massage\",\"happiness\"],\"k\":[30,47],\"o\":2},\"mouse\":{\"a\":\"Mouse Face\",\"b\":\"1F42D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"cheese_wedge\",\"rodent\"],\"k\":[12,17],\"o\":2},\"hindu_temple\":{\"a\":\"Hindu Temple\",\"b\":\"1F6D5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[36,41],\"o\":12},\"back\":{\"a\":\"Back with Leftwards Arrow Above\",\"b\":\"1F519\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"arrow\",\"words\",\"return\"],\"k\":[27,53],\"o\":2},\"gem\":{\"a\":\"Gem Stone\",\"b\":\"1F48E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue\",\"ruby\",\"diamond\",\"jewelry\"],\"k\":[25,24],\"o\":2},\"pensive\":{\"a\":\"Pensive Face\",\"b\":\"1F614\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"sad\",\"depressed\",\"upset\"],\"k\":[30,55],\"o\":2},\"flag-bw\":{\"a\":\"Botswana Flag\",\"b\":\"1F1E7-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,9],\"o\":2},\"mouse2\":{\"a\":\"Mouse\",\"b\":\"1F401\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"rodent\"],\"k\":[11,29],\"o\":2},\"bacon\":{\"a\":\"Bacon\",\"b\":\"1F953\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"breakfast\",\"pork\",\"pig\",\"meat\"],\"k\":[41,34],\"o\":4},\"tooth\":{\"a\":\"Tooth\",\"b\":\"1F9B7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,17],\"o\":11},\"badminton_racquet_and_shuttlecock\":{\"a\":\"Badminton Racquet and Shuttlecock\",\"b\":\"1F3F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[11,20],\"o\":2},\"rat\":{\"a\":\"Rat\",\"b\":\"1F400\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"mouse\",\"rodent\"],\"k\":[11,28],\"o\":2},\"synagogue\":{\"a\":\"Synagogue\",\"b\":\"1F54D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"judaism\",\"worship\",\"temple\",\"jewish\"],\"k\":[28,37],\"o\":2},\"end\":{\"a\":\"End with Leftwards Arrow Above\",\"b\":\"1F51A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"words\",\"arrow\"],\"k\":[27,54],\"o\":2},\"bone\":{\"a\":\"Bone\",\"b\":\"1F9B4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,4],\"o\":11},\"boxing_glove\":{\"a\":\"Boxing Glove\",\"b\":\"1F94A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"fighting\"],\"k\":[41,25],\"o\":4},\"mute\":{\"a\":\"Speaker with Cancellation Stroke\",\"b\":\"1F507\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sound\",\"volume\",\"silence\",\"quiet\"],\"k\":[27,35],\"o\":2},\"hamburger\":{\"a\":\"Hamburger\",\"b\":\"1F354\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"meat\",\"fast food\",\"beef\",\"cheeseburger\",\"mcdonalds\",\"burger king\"],\"k\":[6,44],\"o\":2},\"flag-by\":{\"a\":\"Belarus Flag\",\"b\":\"1F1E7-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,10],\"o\":2},\"sleepy\":{\"a\":\"Sleepy Face\",\"b\":\"1F62A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"tired\",\"rest\",\"nap\"],\"k\":[31,20],\"o\":2},\"on\":{\"a\":\"On with Exclamation Mark with Left Right Arrow Above\",\"b\":\"1F51B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"arrow\",\"words\"],\"k\":[27,55],\"o\":2},\"martial_arts_uniform\":{\"a\":\"Martial Arts Uniform\",\"b\":\"1F94B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"judo\",\"karate\",\"taekwondo\"],\"k\":[41,26],\"o\":4},\"speaker\":{\"a\":\"Speaker\",\"b\":\"1F508\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sound\",\"volume\",\"silence\",\"broadcast\"],\"k\":[27,36],\"o\":2},\"drooling_face\":{\"a\":\"Drooling Face\",\"b\":\"1F924\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\"],\"k\":[38,21],\"o\":4},\"eyes\":{\"a\":\"Eyes\",\"b\":\"1F440\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"look\",\"watch\",\"stalk\",\"peek\",\"see\"],\"k\":[12,36],\"o\":2},\"flag-bz\":{\"a\":\"Belize Flag\",\"b\":\"1F1E7-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,11],\"o\":2},\"hamster\":{\"a\":\"Hamster Face\",\"b\":\"1F439\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\"],\"k\":[12,29],\"o\":2},\"shinto_shrine\":{\"a\":\"Shinto Shrine\",\"b\":\"26E9-FE0F\",\"c\":\"26E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"temple\",\"japan\",\"kyoto\"],\"k\":[54,9],\"o\":2},\"fries\":{\"a\":\"French Fries\",\"b\":\"1F35F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"chips\",\"snack\",\"fast food\"],\"k\":[6,55],\"o\":2},\"goal_net\":{\"a\":\"Goal Net\",\"b\":\"1F945\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\"],\"k\":[41,21],\"o\":4},\"kaaba\":{\"a\":\"Kaaba\",\"b\":\"1F54B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"mecca\",\"mosque\",\"islam\"],\"k\":[28,35],\"o\":2},\"soon\":{\"a\":\"Soon with Rightwards Arrow Above\",\"b\":\"1F51C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"arrow\",\"words\"],\"k\":[27,56],\"o\":2},\"flag-ca\":{\"a\":\"Canada Flag\",\"b\":\"1F1E8-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,12],\"o\":2},\"rabbit\":{\"a\":\"Rabbit Face\",\"b\":\"1F430\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"pet\",\"spring\",\"magic\",\"bunny\"],\"k\":[12,20],\"o\":2},\"eye\":{\"a\":\"Eye\",\"b\":\"1F441-FE0F\",\"c\":\"1F441\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"look\",\"see\",\"watch\",\"stare\"],\"k\":[12,38],\"o\":2},\"sleeping\":{\"a\":\"Sleeping Face\",\"b\":\"1F634\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"tired\",\"sleepy\",\"night\",\"zzz\"],\"k\":[31,30],\"o\":2},\"pizza\":{\"a\":\"Slice of Pizza\",\"b\":\"1F355\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"party\"],\"k\":[6,45],\"o\":2},\"sound\":{\"a\":\"Speaker with One Sound Wave\",\"b\":\"1F509\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"volume\",\"speaker\",\"broadcast\"],\"k\":[27,37],\"o\":2},\"rabbit2\":{\"a\":\"Rabbit\",\"b\":\"1F407\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"pet\",\"magic\",\"spring\"],\"k\":[11,35],\"o\":2},\"fountain\":{\"a\":\"Fountain\",\"b\":\"26F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"summer\",\"water\",\"fresh\"],\"k\":[54,13],\"o\":2},\"golf\":{\"a\":\"Flag in Hole\",\"b\":\"26F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"business\",\"flag\",\"hole\",\"summer\"],\"k\":[54,14],\"o\":2},\"top\":{\"a\":\"Top with Upwards Arrow Above\",\"b\":\"1F51D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"words\",\"blue-square\"],\"k\":[28,0],\"o\":2},\"mask\":{\"a\":\"Face with Medical Mask\",\"b\":\"1F637\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"sick\",\"ill\",\"disease\"],\"k\":[31,33],\"o\":2},\"flag-cc\":{\"a\":\"Cocos (keeling) Islands Flag\",\"b\":\"1F1E8-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,13],\"o\":2},\"hotdog\":{\"a\":\"Hot Dog\",\"b\":\"1F32D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"frankfurter\"],\"k\":[6,5],\"o\":2},\"loud_sound\":{\"a\":\"Speaker with Three Sound Waves\",\"b\":\"1F50A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"volume\",\"noise\",\"noisy\",\"speaker\",\"broadcast\"],\"k\":[27,38],\"o\":2},\"tongue\":{\"a\":\"Tongue\",\"b\":\"1F445\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"mouth\",\"playful\"],\"k\":[12,52],\"o\":2},\"place_of_worship\":{\"a\":\"Place of Worship\",\"b\":\"1F6D0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"religion\",\"church\",\"temple\",\"prayer\"],\"k\":[36,38],\"o\":2},\"ice_skate\":{\"a\":\"Ice Skate\",\"b\":\"26F8-FE0F\",\"c\":\"26F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\"],\"k\":[54,18],\"o\":2},\"sandwich\":{\"a\":\"Sandwich\",\"b\":\"1F96A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,0],\"o\":5},\"chipmunk\":{\"a\":\"Chipmunk\",\"b\":\"1F43F-FE0F\",\"c\":\"1F43F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"rodent\",\"squirrel\"],\"k\":[12,35],\"o\":2},\"loudspeaker\":{\"a\":\"Public Address Loudspeaker\",\"b\":\"1F4E2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"volume\",\"sound\"],\"k\":[26,56],\"o\":2},\"lips\":{\"a\":\"Mouth\",\"b\":\"1F444\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"mouth\",\"kiss\"],\"k\":[12,51],\"o\":2},\"flag-cd\":{\"a\":\"Congo - Kinshasa Flag\",\"b\":\"1F1E8-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,14],\"o\":2},\"tent\":{\"a\":\"Tent\",\"b\":\"26FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"camping\",\"outdoors\"],\"k\":[54,37],\"o\":2},\"face_with_thermometer\":{\"a\":\"Face with Thermometer\",\"b\":\"1F912\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sick\",\"temperature\",\"thermometer\",\"cold\",\"fever\"],\"k\":[37,25],\"o\":2},\"taco\":{\"a\":\"Taco\",\"b\":\"1F32E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"mexican\"],\"k\":[6,6],\"o\":2},\"foggy\":{\"a\":\"Foggy\",\"b\":\"1F301\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"mountain\"],\"k\":[5,20],\"o\":2},\"flag-cf\":{\"a\":\"Central African Republic Flag\",\"b\":\"1F1E8-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,15],\"o\":2},\"baby\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F476-1F3FB\",\"non_qualified\":null,\"image\":\"1f476-1f3fb.png\",\"sheet_x\":23,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F476-1F3FC\",\"non_qualified\":null,\"image\":\"1f476-1f3fc.png\",\"sheet_x\":23,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F476-1F3FD\",\"non_qualified\":null,\"image\":\"1f476-1f3fd.png\",\"sheet_x\":23,\"sheet_y\":7,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F476-1F3FE\",\"non_qualified\":null,\"image\":\"1f476-1f3fe.png\",\"sheet_x\":23,\"sheet_y\":8,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F476-1F3FF\",\"non_qualified\":null,\"image\":\"1f476-1f3ff.png\",\"sheet_x\":23,\"sheet_y\":9,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Baby\",\"b\":\"1F476\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"child\",\"boy\",\"girl\",\"toddler\"],\"k\":[23,4],\"o\":2},\"atom_symbol\":{\"a\":\"Atom Symbol\",\"b\":\"269B-FE0F\",\"c\":\"269B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"science\",\"physics\",\"chemistry\"],\"k\":[53,48],\"o\":2},\"fishing_pole_and_fish\":{\"a\":\"Fishing Pole and Fish\",\"b\":\"1F3A3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"hobby\",\"summer\"],\"k\":[8,9],\"o\":2},\"hedgehog\":{\"a\":\"Hedgehog\",\"b\":\"1F994\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,38],\"o\":5},\"face_with_head_bandage\":{\"a\":\"Face with Head-Bandage\",\"b\":\"1F915\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"injured\",\"clumsy\",\"bandage\",\"hurt\"],\"k\":[37,28],\"o\":2},\"mega\":{\"a\":\"Cheering Megaphone\",\"b\":\"1F4E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sound\",\"speaker\",\"volume\"],\"k\":[27,0],\"o\":2},\"nauseated_face\":{\"a\":\"Nauseated Face\",\"b\":\"1F922\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"vomit\",\"gross\",\"green\",\"sick\",\"throw up\",\"ill\"],\"k\":[38,19],\"o\":4},\"child\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D2-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d2-1f3fb.png\",\"sheet_x\":48,\"sheet_y\":17,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9D2-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d2-1f3fc.png\",\"sheet_x\":48,\"sheet_y\":18,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9D2-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d2-1f3fd.png\",\"sheet_x\":48,\"sheet_y\":19,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9D2-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d2-1f3fe.png\",\"sheet_x\":48,\"sheet_y\":20,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9D2-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d2-1f3ff.png\",\"sheet_x\":48,\"sheet_y\":21,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Child\",\"b\":\"1F9D2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[48,16],\"o\":5},\"flag-cg\":{\"a\":\"Congo - Brazzaville Flag\",\"b\":\"1F1E8-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,16],\"o\":2},\"bat\":{\"a\":\"Bat\",\"b\":\"1F987\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"blind\",\"vampire\"],\"k\":[42,25],\"o\":4},\"diving_mask\":{\"a\":\"Diving Mask\",\"b\":\"1F93F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,15],\"o\":12},\"burrito\":{\"a\":\"Burrito\",\"b\":\"1F32F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"mexican\"],\"k\":[6,7],\"o\":2},\"postal_horn\":{\"a\":\"Postal Horn\",\"b\":\"1F4EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"instrument\",\"music\"],\"k\":[27,12],\"o\":2},\"night_with_stars\":{\"a\":\"Night with Stars\",\"b\":\"1F303\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"evening\",\"city\",\"downtown\"],\"k\":[5,22],\"o\":2},\"om_symbol\":{\"a\":\"Om Symbol\",\"b\":\"1F549-FE0F\",\"c\":\"1F549\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[28,33],\"o\":2},\"star_of_david\":{\"a\":\"Star of David\",\"b\":\"2721-FE0F\",\"c\":\"2721\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"judaism\"],\"k\":[55,15],\"o\":2},\"boy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F466-1F3FB\",\"non_qualified\":null,\"image\":\"1f466-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":27,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F466-1F3FC\",\"non_qualified\":null,\"image\":\"1f466-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":28,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F466-1F3FD\",\"non_qualified\":null,\"image\":\"1f466-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":29,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F466-1F3FE\",\"non_qualified\":null,\"image\":\"1f466-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":30,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F466-1F3FF\",\"non_qualified\":null,\"image\":\"1f466-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":31,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Boy\",\"b\":\"1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"man\",\"male\",\"guy\",\"teenager\"],\"k\":[14,26],\"o\":2},\"bell\":{\"a\":\"Bell\",\"b\":\"1F514\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sound\",\"notification\",\"christmas\",\"xmas\",\"chime\"],\"k\":[27,48],\"o\":2},\"flag-ch\":{\"a\":\"Switzerland Flag\",\"b\":\"1F1E8-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,17],\"o\":2},\"running_shirt_with_sash\":{\"a\":\"Running Shirt with Sash\",\"b\":\"1F3BD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"play\",\"pageant\"],\"k\":[8,35],\"o\":2},\"stuffed_flatbread\":{\"a\":\"Stuffed Flatbread\",\"b\":\"1F959\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"flatbread\",\"stuffed\",\"gyro\"],\"k\":[41,40],\"o\":4},\"bear\":{\"a\":\"Bear Face\",\"b\":\"1F43B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"wild\"],\"k\":[12,31],\"o\":2},\"cityscape\":{\"a\":\"Cityscape\",\"b\":\"1F3D9-FE0F\",\"c\":\"1F3D9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"night life\",\"urban\"],\"k\":[10,44],\"o\":2},\"face_vomiting\":{\"a\":\"Face with Open Mouth Vomiting\",\"b\":\"1F92E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,48],\"n\":[\"face_with_open_mouth_vomiting\"],\"o\":5},\"wheel_of_dharma\":{\"a\":\"Wheel of Dharma\",\"b\":\"2638-FE0F\",\"c\":\"2638\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hinduism\",\"buddhism\",\"sikhism\",\"jainism\"],\"k\":[53,15],\"o\":2},\"ski\":{\"a\":\"Ski and Ski Boot\",\"b\":\"1F3BF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"winter\",\"cold\",\"snow\"],\"k\":[8,37],\"o\":2},\"girl\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F467-1F3FB\",\"non_qualified\":null,\"image\":\"1f467-1f3fb.png\",\"sheet_x\":14,\"sheet_y\":33,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F467-1F3FC\",\"non_qualified\":null,\"image\":\"1f467-1f3fc.png\",\"sheet_x\":14,\"sheet_y\":34,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F467-1F3FD\",\"non_qualified\":null,\"image\":\"1f467-1f3fd.png\",\"sheet_x\":14,\"sheet_y\":35,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F467-1F3FE\",\"non_qualified\":null,\"image\":\"1f467-1f3fe.png\",\"sheet_x\":14,\"sheet_y\":36,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F467-1F3FF\",\"non_qualified\":null,\"image\":\"1f467-1f3ff.png\",\"sheet_x\":14,\"sheet_y\":37,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Girl\",\"b\":\"1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"female\",\"woman\",\"teenager\"],\"k\":[14,32],\"o\":2},\"falafel\":{\"a\":\"Falafel\",\"b\":\"1F9C6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,14],\"o\":12},\"sneezing_face\":{\"a\":\"Sneezing Face\",\"b\":\"1F927\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"gesundheit\",\"sneeze\",\"sick\",\"allergy\"],\"k\":[38,41],\"o\":4},\"no_bell\":{\"a\":\"Bell with Cancellation Stroke\",\"b\":\"1F515\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sound\",\"volume\",\"mute\",\"quiet\",\"silent\"],\"k\":[27,49],\"o\":2},\"koala\":{\"a\":\"Koala\",\"b\":\"1F428\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\"],\"k\":[12,12],\"o\":2},\"sunrise_over_mountains\":{\"a\":\"Sunrise over Mountains\",\"b\":\"1F304\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"view\",\"vacation\",\"photo\"],\"k\":[5,23],\"o\":2},\"flag-ci\":{\"a\":\"Côte D’ivoire Flag\",\"b\":\"1F1E8-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,18],\"o\":2},\"sunrise\":{\"a\":\"Sunrise\",\"b\":\"1F305\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"morning\",\"view\",\"vacation\",\"photo\"],\"k\":[5,24],\"o\":2},\"yin_yang\":{\"a\":\"Yin Yang\",\"b\":\"262F-FE0F\",\"c\":\"262F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"balance\"],\"k\":[53,14],\"o\":2},\"adult\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb.png\",\"sheet_x\":48,\"sheet_y\":11,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc.png\",\"sheet_x\":48,\"sheet_y\":12,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd.png\",\"sheet_x\":48,\"sheet_y\":13,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe.png\",\"sheet_x\":48,\"sheet_y\":14,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff.png\",\"sheet_x\":48,\"sheet_y\":15,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Adult\",\"b\":\"1F9D1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[48,10],\"o\":5},\"hot_face\":{\"a\":\"Overheated Face\",\"b\":\"1F975\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,10],\"o\":11},\"musical_score\":{\"a\":\"Musical Score\",\"b\":\"1F3BC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"treble\",\"clef\",\"compose\"],\"k\":[8,34],\"o\":2},\"sled\":{\"a\":\"Sled\",\"b\":\"1F6F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[36,56],\"o\":5},\"egg\":{\"a\":\"Egg\",\"b\":\"1F95A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"chicken\",\"breakfast\"],\"k\":[41,41],\"o\":4},\"panda_face\":{\"a\":\"Panda Face\",\"b\":\"1F43C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"panda\"],\"k\":[12,32],\"o\":2},\"flag-ck\":{\"a\":\"Cook Islands Flag\",\"b\":\"1F1E8-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,19],\"o\":2},\"flag-cl\":{\"a\":\"Chile Flag\",\"b\":\"1F1E8-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,20],\"o\":2},\"person_with_blond_hair\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F471-1F3FB\",\"non_qualified\":null,\"image\":\"1f471-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":20,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F471-1F3FC\",\"non_qualified\":null,\"image\":\"1f471-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":21,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F471-1F3FD\",\"non_qualified\":null,\"image\":\"1f471-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":22,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F471-1F3FE\",\"non_qualified\":null,\"image\":\"1f471-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":23,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F471-1F3FF\",\"non_qualified\":null,\"image\":\"1f471-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":24,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F471-200D-2642-FE0F\",\"a\":\"Person with Blond Hair\",\"b\":\"1F471\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[22,19],\"o\":2},\"sloth\":{\"a\":\"Sloth\",\"b\":\"1F9A5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,53],\"o\":12},\"latin_cross\":{\"a\":\"Latin Cross\",\"b\":\"271D-FE0F\",\"c\":\"271D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"christianity\"],\"k\":[55,14],\"o\":2},\"curling_stone\":{\"a\":\"Curling Stone\",\"b\":\"1F94C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,27],\"o\":5},\"cold_face\":{\"a\":\"Freezing Face\",\"b\":\"1F976\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,11],\"o\":11},\"fried_egg\":{\"a\":\"Cooking\",\"b\":\"1F373\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"breakfast\",\"kitchen\",\"egg\"],\"k\":[7,18],\"n\":[\"cooking\"],\"o\":2},\"city_sunset\":{\"a\":\"Cityscape at Dusk\",\"b\":\"1F306\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"evening\",\"sky\",\"buildings\"],\"k\":[5,25],\"o\":2},\"musical_note\":{\"a\":\"Musical Note\",\"b\":\"1F3B5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"score\",\"tone\",\"sound\"],\"k\":[8,27],\"o\":2},\"flag-cm\":{\"a\":\"Cameroon Flag\",\"b\":\"1F1E8-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,21],\"o\":2},\"notes\":{\"a\":\"Multiple Musical Notes\",\"b\":\"1F3B6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"music\",\"score\"],\"k\":[8,28],\"o\":2},\"woozy_face\":{\"a\":\"Face with Uneven Eyes and Wavy Mouth\",\"b\":\"1F974\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,9],\"o\":11},\"dart\":{\"a\":\"Direct Hit\",\"b\":\"1F3AF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"game\",\"play\",\"bar\"],\"k\":[8,21],\"o\":2},\"orthodox_cross\":{\"a\":\"Orthodox Cross\",\"b\":\"2626-FE0F\",\"c\":\"2626\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"suppedaneum\",\"religion\"],\"k\":[53,11],\"o\":2},\"shallow_pan_of_food\":{\"a\":\"Shallow Pan of Food\",\"b\":\"1F958\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"cooking\",\"casserole\",\"paella\"],\"k\":[41,39],\"o\":4},\"otter\":{\"a\":\"Otter\",\"b\":\"1F9A6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,54],\"o\":12},\"man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f468-1f3fb.png\",\"sheet_x\":17,\"sheet_y\":23,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f468-1f3fc.png\",\"sheet_x\":17,\"sheet_y\":24,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f468-1f3fd.png\",\"sheet_x\":17,\"sheet_y\":25,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f468-1f3fe.png\",\"sheet_x\":17,\"sheet_y\":26,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f468-1f3ff.png\",\"sheet_x\":17,\"sheet_y\":27,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man\",\"b\":\"1F468\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"mustache\",\"father\",\"dad\",\"guy\",\"classy\",\"sir\",\"moustache\"],\"k\":[17,22],\"o\":2},\"city_sunrise\":{\"a\":\"Sunset over Buildings\",\"b\":\"1F307\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"good morning\",\"dawn\"],\"k\":[5,26],\"o\":2},\"bearded_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D4-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d4-1f3fb.png\",\"sheet_x\":48,\"sheet_y\":29,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9D4-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d4-1f3fc.png\",\"sheet_x\":48,\"sheet_y\":30,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9D4-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d4-1f3fd.png\",\"sheet_x\":48,\"sheet_y\":31,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9D4-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d4-1f3fe.png\",\"sheet_x\":48,\"sheet_y\":32,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9D4-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d4-1f3ff.png\",\"sheet_x\":48,\"sheet_y\":33,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Bearded Person\",\"b\":\"1F9D4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[48,28],\"o\":5},\"skunk\":{\"a\":\"Skunk\",\"b\":\"1F9A8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,56],\"o\":12},\"stew\":{\"a\":\"Pot of Food\",\"b\":\"1F372\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"meat\",\"soup\"],\"k\":[7,17],\"o\":2},\"cn\":{\"a\":\"China Flag\",\"b\":\"1F1E8-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"china\",\"chinese\",\"prc\",\"flag\",\"country\",\"nation\",\"banner\"],\"k\":[1,22],\"n\":[\"flag-cn\"],\"o\":2},\"studio_microphone\":{\"a\":\"Studio Microphone\",\"b\":\"1F399-FE0F\",\"c\":\"1F399\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sing\",\"recording\",\"artist\",\"talkshow\"],\"k\":[8,1],\"o\":2},\"star_and_crescent\":{\"a\":\"Star and Crescent\",\"b\":\"262A-FE0F\",\"c\":\"262A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"islam\"],\"k\":[53,12],\"o\":2},\"yo-yo\":{\"a\":\"Yo-Yo\",\"b\":\"1FA80\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,1],\"o\":12},\"bridge_at_night\":{\"a\":\"Bridge at Night\",\"b\":\"1F309\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"sanfrancisco\"],\"k\":[5,28],\"o\":2},\"dizzy_face\":{\"a\":\"Dizzy Face\",\"b\":\"1F635\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"spent\",\"unconscious\",\"xox\",\"dizzy\"],\"k\":[31,31],\"o\":2},\"red_haired_man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f9b0.png\",\"sheet_x\":16,\"sheet_y\":24,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f9b0.png\",\"sheet_x\":16,\"sheet_y\":25,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f9b0.png\",\"sheet_x\":16,\"sheet_y\":26,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f9b0.png\",\"sheet_x\":16,\"sheet_y\":27,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f9b0.png\",\"sheet_x\":16,\"sheet_y\":28,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Red Haired Man\",\"b\":\"1F468-200D-1F9B0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[16,23],\"o\":11},\"kite\":{\"a\":\"Kite\",\"b\":\"1FA81\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,2],\"o\":12},\"bowl_with_spoon\":{\"a\":\"Bowl with Spoon\",\"b\":\"1F963\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,50],\"o\":5},\"flag-co\":{\"a\":\"Colombia Flag\",\"b\":\"1F1E8-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,23],\"o\":2},\"peace_symbol\":{\"a\":\"Peace Symbol\",\"b\":\"262E-FE0F\",\"c\":\"262E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hippie\"],\"k\":[53,13],\"o\":2},\"kangaroo\":{\"a\":\"Kangaroo\",\"b\":\"1F998\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,42],\"o\":11},\"hotsprings\":{\"a\":\"Hot Springs\",\"b\":\"2668-FE0F\",\"c\":\"2668\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bath\",\"warm\",\"relax\"],\"k\":[53,37],\"o\":2},\"exploding_head\":{\"a\":\"Shocked Face with Exploding Head\",\"b\":\"1F92F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,49],\"n\":[\"shocked_face_with_exploding_head\"],\"o\":5},\"level_slider\":{\"a\":\"Level Slider\",\"b\":\"1F39A-FE0F\",\"c\":\"1F39A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"scale\"],\"k\":[8,2],\"o\":2},\"badger\":{\"a\":\"Badger\",\"b\":\"1F9A1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,51],\"o\":11},\"8ball\":{\"a\":\"Billiards\",\"b\":\"1F3B1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"pool\",\"hobby\",\"game\",\"luck\",\"magic\"],\"k\":[8,23],\"o\":2},\"curly_haired_man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f9b1.png\",\"sheet_x\":16,\"sheet_y\":30,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f9b1.png\",\"sheet_x\":16,\"sheet_y\":31,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f9b1.png\",\"sheet_x\":16,\"sheet_y\":32,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f9b1.png\",\"sheet_x\":16,\"sheet_y\":33,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f9b1.png\",\"sheet_x\":16,\"sheet_y\":34,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Curly Haired Man\",\"b\":\"1F468-200D-1F9B1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[16,29],\"o\":11},\"flag-cp\":{\"a\":\"Clipperton Island Flag\",\"b\":\"1F1E8-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,24],\"o\":2},\"carousel_horse\":{\"a\":\"Carousel Horse\",\"b\":\"1F3A0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"carnival\"],\"k\":[8,6],\"o\":2},\"face_with_cowboy_hat\":{\"a\":\"Face with Cowboy Hat\",\"b\":\"1F920\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,17],\"o\":4},\"menorah_with_nine_branches\":{\"a\":\"Menorah with Nine Branches\",\"b\":\"1F54E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[28,38],\"o\":2},\"green_salad\":{\"a\":\"Green Salad\",\"b\":\"1F957\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"healthy\",\"lettuce\"],\"k\":[41,38],\"o\":4},\"control_knobs\":{\"a\":\"Control Knobs\",\"b\":\"1F39B-FE0F\",\"c\":\"1F39B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dial\"],\"k\":[8,3],\"o\":2},\"popcorn\":{\"a\":\"Popcorn\",\"b\":\"1F37F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"movie theater\",\"films\",\"snack\"],\"k\":[7,30],\"o\":2},\"six_pointed_star\":{\"a\":\"Six Pointed Star with Middle Dot\",\"b\":\"1F52F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"purple-square\",\"religion\",\"jewish\",\"hexagram\"],\"k\":[28,18],\"o\":2},\"feet\":{\"a\":\"Paw Prints\",\"b\":\"1F43E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[12,34],\"n\":[\"paw_prints\"],\"o\":2},\"ferris_wheel\":{\"a\":\"Ferris Wheel\",\"b\":\"1F3A1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"carnival\",\"londoneye\"],\"k\":[8,7],\"o\":2},\"microphone\":{\"a\":\"Microphone\",\"b\":\"1F3A4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sound\",\"music\",\"PA\",\"sing\",\"talkshow\"],\"k\":[8,10],\"o\":2},\"crystal_ball\":{\"a\":\"Crystal Ball\",\"b\":\"1F52E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"disco\",\"party\",\"magic\",\"circus\",\"fortune_teller\"],\"k\":[28,17],\"o\":2},\"partying_face\":{\"a\":\"Face with Party Horn and Party Hat\",\"b\":\"1F973\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,8],\"o\":11},\"flag-cr\":{\"a\":\"Costa Rica Flag\",\"b\":\"1F1E8-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,25],\"o\":2},\"white_haired_man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f9b3.png\",\"sheet_x\":16,\"sheet_y\":42,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f9b3.png\",\"sheet_x\":16,\"sheet_y\":43,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f9b3.png\",\"sheet_x\":16,\"sheet_y\":44,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f9b3.png\",\"sheet_x\":16,\"sheet_y\":45,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f9b3.png\",\"sheet_x\":16,\"sheet_y\":46,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"White Haired Man\",\"b\":\"1F468-200D-1F9B3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[16,41],\"o\":11},\"headphones\":{\"a\":\"Headphone\",\"b\":\"1F3A7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"music\",\"score\",\"gadgets\"],\"k\":[8,13],\"o\":2},\"bald_man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f9b2.png\",\"sheet_x\":16,\"sheet_y\":36,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f9b2.png\",\"sheet_x\":16,\"sheet_y\":37,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f9b2.png\",\"sheet_x\":16,\"sheet_y\":38,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f9b2.png\",\"sheet_x\":16,\"sheet_y\":39,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f9b2.png\",\"sheet_x\":16,\"sheet_y\":40,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Bald Man\",\"b\":\"1F468-200D-1F9B2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[16,35],\"o\":11},\"sunglasses\":{\"a\":\"Smiling Face with Sunglasses\",\"b\":\"1F60E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"cool\",\"smile\",\"summer\",\"beach\",\"sunglass\"],\"k\":[30,49],\"l\":[\"8)\"],\"o\":2},\"butter\":{\"a\":\"Butter\",\"b\":\"1F9C8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,16],\"o\":12},\"roller_coaster\":{\"a\":\"Roller Coaster\",\"b\":\"1F3A2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"carnival\",\"playground\",\"photo\",\"fun\"],\"k\":[8,8],\"o\":2},\"turkey\":{\"a\":\"Turkey\",\"b\":\"1F983\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"bird\"],\"k\":[42,21],\"o\":2},\"nazar_amulet\":{\"a\":\"Nazar Amulet\",\"b\":\"1F9FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,50],\"o\":11},\"flag-cu\":{\"a\":\"Cuba Flag\",\"b\":\"1F1E8-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,26],\"o\":2},\"aries\":{\"a\":\"Aries\",\"b\":\"2648\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"k\":[53,20],\"o\":2},\"flag-cv\":{\"a\":\"Cape Verde Flag\",\"b\":\"1F1E8-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,27],\"o\":2},\"barber\":{\"a\":\"Barber Pole\",\"b\":\"1F488\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hair\",\"salon\",\"style\"],\"k\":[25,18],\"o\":2},\"taurus\":{\"a\":\"Taurus\",\"b\":\"2649\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"purple-square\",\"sign\",\"zodiac\",\"astrology\"],\"k\":[53,21],\"o\":2},\"salt\":{\"a\":\"Salt Shaker\",\"b\":\"1F9C2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,10],\"o\":11},\"woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":10,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":11,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":12,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":13,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":14,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman\",\"b\":\"1F469\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"female\",\"girls\",\"lady\"],\"k\":[20,9],\"o\":2},\"video_game\":{\"a\":\"Video Game\",\"b\":\"1F3AE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"play\",\"console\",\"PS4\",\"controller\"],\"k\":[8,20],\"o\":2},\"chicken\":{\"a\":\"Chicken\",\"b\":\"1F414\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cluck\",\"nature\",\"bird\"],\"k\":[11,48],\"o\":2},\"radio\":{\"a\":\"Radio\",\"b\":\"1F4FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"communication\",\"music\",\"podcast\",\"program\"],\"k\":[27,24],\"o\":2},\"nerd_face\":{\"a\":\"Nerd Face\",\"b\":\"1F913\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"nerdy\",\"geek\",\"dork\"],\"k\":[37,26],\"o\":2},\"red_haired_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f9b0.png\",\"sheet_x\":19,\"sheet_y\":9,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f9b0.png\",\"sheet_x\":19,\"sheet_y\":10,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f9b0.png\",\"sheet_x\":19,\"sheet_y\":11,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f9b0.png\",\"sheet_x\":19,\"sheet_y\":12,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f9b0.png\",\"sheet_x\":19,\"sheet_y\":13,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Red Haired Woman\",\"b\":\"1F469-200D-1F9B0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,8],\"o\":11},\"circus_tent\":{\"a\":\"Circus Tent\",\"b\":\"1F3AA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"festival\",\"carnival\",\"party\"],\"k\":[8,16],\"o\":2},\"face_with_monocle\":{\"a\":\"Face with Monocle\",\"b\":\"1F9D0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[45,16],\"o\":5},\"canned_food\":{\"a\":\"Canned Food\",\"b\":\"1F96B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,1],\"o\":5},\"flag-cw\":{\"a\":\"Curaçao Flag\",\"b\":\"1F1E8-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,28],\"o\":2},\"gemini\":{\"a\":\"Gemini\",\"b\":\"264A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[53,22],\"o\":2},\"saxophone\":{\"a\":\"Saxophone\",\"b\":\"1F3B7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"music\",\"instrument\",\"jazz\",\"blues\"],\"k\":[8,29],\"o\":2},\"rooster\":{\"a\":\"Rooster\",\"b\":\"1F413\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"chicken\"],\"k\":[11,47],\"o\":2},\"joystick\":{\"a\":\"Joystick\",\"b\":\"1F579-FE0F\",\"c\":\"1F579\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"game\",\"play\"],\"k\":[29,36],\"o\":2},\"guitar\":{\"a\":\"Guitar\",\"b\":\"1F3B8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"music\",\"instrument\"],\"k\":[8,30],\"o\":2},\"slot_machine\":{\"a\":\"Slot Machine\",\"b\":\"1F3B0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bet\",\"gamble\",\"vegas\",\"fruit machine\",\"luck\",\"casino\"],\"k\":[8,22],\"o\":2},\"bento\":{\"a\":\"Bento Box\",\"b\":\"1F371\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"japanese\",\"box\"],\"k\":[7,16],\"o\":2},\"steam_locomotive\":{\"a\":\"Steam Locomotive\",\"b\":\"1F682\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\",\"train\"],\"k\":[34,1],\"o\":2},\"confused\":{\"a\":\"Confused Face\",\"b\":\"1F615\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"indifference\",\"huh\",\"weird\",\"hmmm\",\":/\"],\"k\":[30,56],\"l\":[\":\\\\\",\":-\\\\\",\":/\",\":-/\"],\"o\":2},\"flag-cx\":{\"a\":\"Christmas Island Flag\",\"b\":\"1F1E8-1F1FD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,29],\"o\":2},\"hatching_chick\":{\"a\":\"Hatching Chick\",\"b\":\"1F423\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"chicken\",\"egg\",\"born\",\"baby\",\"bird\"],\"k\":[12,7],\"o\":2},\"cancer\":{\"a\":\"Cancer\",\"b\":\"264B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[53,23],\"o\":2},\"red_haired_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f9b0.png\",\"sheet_x\":47,\"sheet_y\":14,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f9b0.png\",\"sheet_x\":47,\"sheet_y\":15,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f9b0.png\",\"sheet_x\":47,\"sheet_y\":16,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f9b0.png\",\"sheet_x\":47,\"sheet_y\":17,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F9B0\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f9b0.png\",\"sheet_x\":47,\"sheet_y\":18,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Red Haired Person\",\"b\":\"1F9D1-200D-1F9B0\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[47,13],\"o\":12},\"flag-cy\":{\"a\":\"Cyprus Flag\",\"b\":\"1F1E8-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,30],\"o\":2},\"worried\":{\"a\":\"Worried Face\",\"b\":\"1F61F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"concern\",\"nervous\",\":(\"],\"k\":[31,9],\"o\":2},\"railway_car\":{\"a\":\"Railway Car\",\"b\":\"1F683\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,2],\"o\":2},\"leo\":{\"a\":\"Leo\",\"b\":\"264C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"k\":[53,24],\"o\":2},\"curly_haired_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f9b1.png\",\"sheet_x\":19,\"sheet_y\":15,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f9b1.png\",\"sheet_x\":19,\"sheet_y\":16,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f9b1.png\",\"sheet_x\":19,\"sheet_y\":17,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f9b1.png\",\"sheet_x\":19,\"sheet_y\":18,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f9b1.png\",\"sheet_x\":19,\"sheet_y\":19,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Curly Haired Woman\",\"b\":\"1F469-200D-1F9B1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,14],\"o\":11},\"baby_chick\":{\"a\":\"Baby Chick\",\"b\":\"1F424\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"chicken\",\"bird\"],\"k\":[12,8],\"o\":2},\"musical_keyboard\":{\"a\":\"Musical Keyboard\",\"b\":\"1F3B9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"piano\",\"instrument\",\"compose\"],\"k\":[8,31],\"o\":2},\"game_die\":{\"a\":\"Game Die\",\"b\":\"1F3B2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dice\",\"random\",\"tabletop\",\"play\",\"luck\"],\"k\":[8,24],\"o\":2},\"rice_cracker\":{\"a\":\"Rice Cracker\",\"b\":\"1F358\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"japanese\"],\"k\":[6,48],\"o\":2},\"virgo\":{\"a\":\"Virgo\",\"b\":\"264D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[53,25],\"o\":2},\"flag-cz\":{\"a\":\"Czechia Flag\",\"b\":\"1F1E8-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,31],\"o\":2},\"curly_haired_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f9b1.png\",\"sheet_x\":47,\"sheet_y\":20,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f9b1.png\",\"sheet_x\":47,\"sheet_y\":21,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f9b1.png\",\"sheet_x\":47,\"sheet_y\":22,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f9b1.png\",\"sheet_x\":47,\"sheet_y\":23,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F9B1\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f9b1.png\",\"sheet_x\":47,\"sheet_y\":24,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Curly Haired Person\",\"b\":\"1F9D1-200D-1F9B1\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[47,19],\"o\":12},\"rice_ball\":{\"a\":\"Rice Ball\",\"b\":\"1F359\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"japanese\"],\"k\":[6,49],\"o\":2},\"hatched_chick\":{\"a\":\"Front-Facing Baby Chick\",\"b\":\"1F425\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"chicken\",\"baby\",\"bird\"],\"k\":[12,9],\"o\":2},\"jigsaw\":{\"a\":\"Jigsaw Puzzle Piece\",\"b\":\"1F9E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,28],\"o\":11},\"trumpet\":{\"a\":\"Trumpet\",\"b\":\"1F3BA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"music\",\"brass\"],\"k\":[8,32],\"o\":2},\"slightly_frowning_face\":{\"a\":\"Slightly Frowning Face\",\"b\":\"1F641\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"frowning\",\"disappointed\",\"sad\",\"upset\"],\"k\":[31,43],\"o\":2},\"bullettrain_side\":{\"a\":\"High-Speed Train\",\"b\":\"1F684\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,3],\"o\":2},\"libra\":{\"a\":\"Libra\",\"b\":\"264E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"k\":[53,26],\"o\":2},\"de\":{\"a\":\"Germany Flag\",\"b\":\"1F1E9-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"german\",\"nation\",\"flag\",\"country\",\"banner\"],\"k\":[1,32],\"n\":[\"flag-de\"],\"o\":2},\"rice\":{\"a\":\"Cooked Rice\",\"b\":\"1F35A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"china\",\"asian\"],\"k\":[6,50],\"o\":2},\"violin\":{\"a\":\"Violin\",\"b\":\"1F3BB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"music\",\"instrument\",\"orchestra\",\"symphony\"],\"k\":[8,33],\"o\":2},\"white_haired_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f9b3.png\",\"sheet_x\":19,\"sheet_y\":27,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f9b3.png\",\"sheet_x\":19,\"sheet_y\":28,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f9b3.png\",\"sheet_x\":19,\"sheet_y\":29,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f9b3.png\",\"sheet_x\":19,\"sheet_y\":30,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f9b3.png\",\"sheet_x\":19,\"sheet_y\":31,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"White Haired Woman\",\"b\":\"1F469-200D-1F9B3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,26],\"o\":11},\"bird\":{\"a\":\"Bird\",\"b\":\"1F426\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"fly\",\"tweet\",\"spring\"],\"k\":[12,10],\"o\":2},\"white_frowning_face\":{\"a\":\"White Frowning Face\",\"b\":\"2639-FE0F\",\"c\":\"2639\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[53,16],\"o\":2},\"bullettrain_front\":{\"a\":\"High-Speed Train with Bullet Nose\",\"b\":\"1F685\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\",\"speed\",\"fast\",\"public\",\"travel\"],\"k\":[34,4],\"o\":2},\"teddy_bear\":{\"a\":\"Teddy Bear\",\"b\":\"1F9F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,43],\"o\":11},\"white_haired_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f9b3.png\",\"sheet_x\":47,\"sheet_y\":32,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f9b3.png\",\"sheet_x\":47,\"sheet_y\":33,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f9b3.png\",\"sheet_x\":47,\"sheet_y\":34,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f9b3.png\",\"sheet_x\":47,\"sheet_y\":35,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F9B3\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f9b3.png\",\"sheet_x\":47,\"sheet_y\":36,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"White Haired Person\",\"b\":\"1F9D1-200D-1F9B3\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[47,31],\"o\":12},\"spades\":{\"a\":\"Black Spade Suit\",\"b\":\"2660-FE0F\",\"c\":\"2660\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"poker\",\"cards\",\"suits\",\"magic\"],\"k\":[53,33],\"o\":2},\"banjo\":{\"a\":\"Banjo\",\"b\":\"1FA95\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,9],\"o\":12},\"train2\":{\"a\":\"Train\",\"b\":\"1F686\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,5],\"o\":2},\"scorpius\":{\"a\":\"Scorpius\",\"b\":\"264F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\",\"scorpio\"],\"k\":[53,27],\"o\":2},\"curry\":{\"a\":\"Curry and Rice\",\"b\":\"1F35B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"spicy\",\"hot\",\"indian\"],\"k\":[6,51],\"o\":2},\"open_mouth\":{\"a\":\"Face with Open Mouth\",\"b\":\"1F62E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"surprise\",\"impressed\",\"wow\",\"whoa\",\":O\"],\"k\":[31,24],\"l\":[\":o\",\":-o\",\":O\",\":-O\"],\"o\":2},\"flag-dg\":{\"a\":\"Diego Garcia Flag\",\"b\":\"1F1E9-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,33],\"o\":2},\"penguin\":{\"a\":\"Penguin\",\"b\":\"1F427\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\"],\"k\":[12,11],\"o\":2},\"hearts\":{\"a\":\"Black Heart Suit\",\"b\":\"2665-FE0F\",\"c\":\"2665\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"poker\",\"cards\",\"magic\",\"suits\"],\"k\":[53,35],\"o\":2},\"ramen\":{\"a\":\"Steaming Bowl\",\"b\":\"1F35C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"japanese\",\"noodle\",\"chopsticks\"],\"k\":[6,52],\"o\":2},\"sagittarius\":{\"a\":\"Sagittarius\",\"b\":\"2650\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[53,28],\"o\":2},\"bald_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f9b2.png\",\"sheet_x\":19,\"sheet_y\":21,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f9b2.png\",\"sheet_x\":19,\"sheet_y\":22,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f9b2.png\",\"sheet_x\":19,\"sheet_y\":23,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f9b2.png\",\"sheet_x\":19,\"sheet_y\":24,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f9b2.png\",\"sheet_x\":19,\"sheet_y\":25,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Bald Woman\",\"b\":\"1F469-200D-1F9B2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,20],\"o\":11},\"dove_of_peace\":{\"a\":\"Dove of Peace\",\"b\":\"1F54A-FE0F\",\"c\":\"1F54A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[28,34],\"o\":2},\"hushed\":{\"a\":\"Hushed Face\",\"b\":\"1F62F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"woo\",\"shh\"],\"k\":[31,25],\"o\":2},\"metro\":{\"a\":\"Metro\",\"b\":\"1F687\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"blue-square\",\"mrt\",\"underground\",\"tube\"],\"k\":[34,6],\"o\":2},\"flag-dj\":{\"a\":\"Djibouti Flag\",\"b\":\"1F1E9-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,34],\"o\":2},\"drum_with_drumsticks\":{\"a\":\"Drum with Drumsticks\",\"b\":\"1F941\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,17],\"o\":4},\"spaghetti\":{\"a\":\"Spaghetti\",\"b\":\"1F35D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"italian\",\"noodle\"],\"k\":[6,53],\"o\":2},\"eagle\":{\"a\":\"Eagle\",\"b\":\"1F985\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"bird\"],\"k\":[42,23],\"o\":4},\"astonished\":{\"a\":\"Astonished Face\",\"b\":\"1F632\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"xox\",\"surprised\",\"poisoned\"],\"k\":[31,28],\"o\":2},\"capricorn\":{\"a\":\"Capricorn\",\"b\":\"2651\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"k\":[53,29],\"o\":2},\"light_rail\":{\"a\":\"Light Rail\",\"b\":\"1F688\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,7],\"o\":2},\"flag-dk\":{\"a\":\"Denmark Flag\",\"b\":\"1F1E9-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,35],\"o\":2},\"iphone\":{\"a\":\"Mobile Phone\",\"b\":\"1F4F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"apple\",\"gadgets\",\"dial\"],\"k\":[27,14],\"o\":2},\"bald_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f9b2.png\",\"sheet_x\":47,\"sheet_y\":26,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f9b2.png\",\"sheet_x\":47,\"sheet_y\":27,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f9b2.png\",\"sheet_x\":47,\"sheet_y\":28,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f9b2.png\",\"sheet_x\":47,\"sheet_y\":29,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F9B2\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f9b2.png\",\"sheet_x\":47,\"sheet_y\":30,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Bald Person\",\"b\":\"1F9D1-200D-1F9B2\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[47,25],\"o\":12},\"diamonds\":{\"a\":\"Black Diamond Suit\",\"b\":\"2666-FE0F\",\"c\":\"2666\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"poker\",\"cards\",\"magic\",\"suits\"],\"k\":[53,36],\"o\":2},\"clubs\":{\"a\":\"Black Club Suit\",\"b\":\"2663-FE0F\",\"c\":\"2663\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"poker\",\"cards\",\"magic\",\"suits\"],\"k\":[53,34],\"o\":2},\"aquarius\":{\"a\":\"Aquarius\",\"b\":\"2652\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"k\":[53,30],\"o\":2},\"sweet_potato\":{\"a\":\"Roasted Sweet Potato\",\"b\":\"1F360\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"nature\"],\"k\":[6,56],\"o\":2},\"flag-dm\":{\"a\":\"Dominica Flag\",\"b\":\"1F1E9-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,36],\"o\":2},\"duck\":{\"a\":\"Duck\",\"b\":\"1F986\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"bird\",\"mallard\"],\"k\":[42,24],\"o\":4},\"calling\":{\"a\":\"Mobile Phone with Rightwards Arrow at Left\",\"b\":\"1F4F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"iphone\",\"incoming\"],\"k\":[27,15],\"o\":2},\"station\":{\"a\":\"Station\",\"b\":\"1F689\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\",\"public\"],\"k\":[34,8],\"o\":2},\"blond-haired-woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F471-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FB-200D-2640\",\"image\":\"1f471-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":8,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F471-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FC-200D-2640\",\"image\":\"1f471-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F471-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FD-200D-2640\",\"image\":\"1f471-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F471-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FE-200D-2640\",\"image\":\"1f471-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F471-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F471-1F3FF-200D-2640\",\"image\":\"1f471-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Blond Haired Woman\",\"b\":\"1F471-200D-2640-FE0F\",\"c\":\"1F471-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[22,7],\"o\":4},\"flushed\":{\"a\":\"Flushed Face\",\"b\":\"1F633\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"blush\",\"shy\",\"flattered\"],\"k\":[31,29],\"o\":2},\"pisces\":{\"a\":\"Pisces\",\"b\":\"2653\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"purple-square\",\"sign\",\"zodiac\",\"astrology\"],\"k\":[53,31],\"o\":2},\"chess_pawn\":{\"a\":\"Chess Pawn\",\"b\":\"265F-FE0F\",\"c\":\"265F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[53,32],\"o\":11},\"blond-haired-man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F471-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FB-200D-2642\",\"image\":\"1f471-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":14,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F471-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FC-200D-2642\",\"image\":\"1f471-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F471-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FD-200D-2642\",\"image\":\"1f471-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F471-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FE-200D-2642\",\"image\":\"1f471-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F471-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F471-1F3FF-200D-2642\",\"image\":\"1f471-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F471\",\"a\":\"Blond Haired Man\",\"b\":\"1F471-200D-2642-FE0F\",\"c\":\"1F471-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[22,13],\"o\":4},\"phone\":{\"a\":\"Black Telephone\",\"b\":\"260E-FE0F\",\"c\":\"260E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"communication\",\"dial\",\"telephone\"],\"k\":[52,54],\"n\":[\"telephone\"],\"o\":2},\"oden\":{\"a\":\"Oden\",\"b\":\"1F362\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"japanese\"],\"k\":[7,1],\"o\":2},\"flag-do\":{\"a\":\"Dominican Republic Flag\",\"b\":\"1F1E9-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,37],\"o\":2},\"tram\":{\"a\":\"Tram\",\"b\":\"1F68A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,9],\"o\":2},\"swan\":{\"a\":\"Swan\",\"b\":\"1F9A2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,52],\"o\":11},\"pleading_face\":{\"a\":\"Face with Pleading Eyes\",\"b\":\"1F97A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,12],\"o\":11},\"flag-dz\":{\"a\":\"Algeria Flag\",\"b\":\"1F1E9-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,38],\"o\":2},\"monorail\":{\"a\":\"Monorail\",\"b\":\"1F69D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,28],\"o\":2},\"owl\":{\"a\":\"Owl\",\"b\":\"1F989\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"bird\",\"hoot\"],\"k\":[42,27],\"o\":4},\"sushi\":{\"a\":\"Sushi\",\"b\":\"1F363\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"fish\",\"japanese\",\"rice\"],\"k\":[7,2],\"o\":2},\"telephone_receiver\":{\"a\":\"Telephone Receiver\",\"b\":\"1F4DE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"communication\",\"dial\"],\"k\":[26,52],\"o\":2},\"black_joker\":{\"a\":\"Playing Card Black Joker\",\"b\":\"1F0CF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"poker\",\"cards\",\"game\",\"play\",\"magic\"],\"k\":[0,15],\"o\":2},\"ophiuchus\":{\"a\":\"Ophiuchus\",\"b\":\"26CE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sign\",\"purple-square\",\"constellation\",\"astrology\"],\"k\":[54,4],\"o\":2},\"frowning\":{\"a\":\"Frowning Face with Open Mouth\",\"b\":\"1F626\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"aw\",\"what\"],\"k\":[31,16],\"o\":2},\"older_adult\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D3-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d3-1f3fb.png\",\"sheet_x\":48,\"sheet_y\":23,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9D3-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d3-1f3fc.png\",\"sheet_x\":48,\"sheet_y\":24,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9D3-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d3-1f3fd.png\",\"sheet_x\":48,\"sheet_y\":25,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9D3-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d3-1f3fe.png\",\"sheet_x\":48,\"sheet_y\":26,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9D3-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d3-1f3ff.png\",\"sheet_x\":48,\"sheet_y\":27,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Older Adult\",\"b\":\"1F9D3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[48,22],\"o\":5},\"flag-ea\":{\"a\":\"Ceuta & Melilla Flag\",\"b\":\"1F1EA-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,39],\"o\":2},\"flamingo\":{\"a\":\"Flamingo\",\"b\":\"1F9A9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,0],\"o\":12},\"pager\":{\"a\":\"Pager\",\"b\":\"1F4DF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bbcall\",\"oldschool\",\"90s\"],\"k\":[26,53],\"o\":2},\"mountain_railway\":{\"a\":\"Mountain Railway\",\"b\":\"1F69E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,29],\"o\":2},\"mahjong\":{\"a\":\"Mahjong Tile Red Dragon\",\"b\":\"1F004\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"game\",\"play\",\"chinese\",\"kanji\"],\"k\":[0,14],\"o\":2},\"older_man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F474-1F3FB\",\"non_qualified\":null,\"image\":\"1f474-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":50,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F474-1F3FC\",\"non_qualified\":null,\"image\":\"1f474-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":51,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F474-1F3FD\",\"non_qualified\":null,\"image\":\"1f474-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":52,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F474-1F3FE\",\"non_qualified\":null,\"image\":\"1f474-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":53,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F474-1F3FF\",\"non_qualified\":null,\"image\":\"1f474-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":54,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Older Man\",\"b\":\"1F474\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"human\",\"male\",\"men\",\"old\",\"elder\",\"senior\"],\"k\":[22,49],\"o\":2},\"twisted_rightwards_arrows\":{\"a\":\"Twisted Rightwards Arrows\",\"b\":\"1F500\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"shuffle\",\"music\",\"random\"],\"k\":[27,28],\"o\":2},\"fried_shrimp\":{\"a\":\"Fried Shrimp\",\"b\":\"1F364\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"animal\",\"appetizer\",\"summer\"],\"k\":[7,3],\"o\":2},\"anguished\":{\"a\":\"Anguished Face\",\"b\":\"1F627\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"stunned\",\"nervous\"],\"k\":[31,17],\"l\":[\"D:\"],\"o\":2},\"repeat\":{\"a\":\"Clockwise Rightwards and Leftwards Open Circle Arrows\",\"b\":\"1F501\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"loop\",\"record\"],\"k\":[27,29],\"o\":2},\"fish_cake\":{\"a\":\"Fish Cake with Swirl Design\",\"b\":\"1F365\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"japan\",\"sea\",\"beach\",\"narutomaki\",\"pink\",\"swirl\",\"kamaboko\",\"surimi\",\"ramen\"],\"k\":[7,4],\"o\":2},\"fax\":{\"a\":\"Fax Machine\",\"b\":\"1F4E0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"communication\",\"technology\"],\"k\":[26,54],\"o\":2},\"older_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F475-1F3FB\",\"non_qualified\":null,\"image\":\"1f475-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":56,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F475-1F3FC\",\"non_qualified\":null,\"image\":\"1f475-1f3fc.png\",\"sheet_x\":23,\"sheet_y\":0,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F475-1F3FD\",\"non_qualified\":null,\"image\":\"1f475-1f3fd.png\",\"sheet_x\":23,\"sheet_y\":1,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F475-1F3FE\",\"non_qualified\":null,\"image\":\"1f475-1f3fe.png\",\"sheet_x\":23,\"sheet_y\":2,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F475-1F3FF\",\"non_qualified\":null,\"image\":\"1f475-1f3ff.png\",\"sheet_x\":23,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Older Woman\",\"b\":\"1F475\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"human\",\"female\",\"women\",\"lady\",\"old\",\"elder\",\"senior\"],\"k\":[22,55],\"o\":2},\"flag-ec\":{\"a\":\"Ecuador Flag\",\"b\":\"1F1EA-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,40],\"o\":2},\"peacock\":{\"a\":\"Peacock\",\"b\":\"1F99A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,44],\"o\":11},\"fearful\":{\"a\":\"Fearful Face\",\"b\":\"1F628\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"scared\",\"terrified\",\"nervous\",\"oops\",\"huh\"],\"k\":[31,18],\"o\":2},\"train\":{\"a\":\"Tram Car\",\"b\":\"1F68B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\",\"carriage\",\"public\",\"travel\"],\"k\":[34,10],\"o\":2},\"flower_playing_cards\":{\"a\":\"Flower Playing Cards\",\"b\":\"1F3B4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"game\",\"sunset\",\"red\"],\"k\":[8,26],\"o\":2},\"repeat_one\":{\"a\":\"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay\",\"b\":\"1F502\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"loop\"],\"k\":[27,30],\"o\":2},\"moon_cake\":{\"a\":\"Moon Cake\",\"b\":\"1F96E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,4],\"o\":11},\"performing_arts\":{\"a\":\"Performing Arts\",\"b\":\"1F3AD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"acting\",\"theater\",\"drama\"],\"k\":[8,19],\"o\":2},\"cold_sweat\":{\"a\":\"Face with Open Mouth and Cold Sweat\",\"b\":\"1F630\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"nervous\",\"sweat\"],\"k\":[31,26],\"o\":2},\"person_frowning\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64D-1F3FB\",\"non_qualified\":null,\"image\":\"1f64d-1f3fb.png\",\"sheet_x\":33,\"sheet_y\":27,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F64D-1F3FC\",\"non_qualified\":null,\"image\":\"1f64d-1f3fc.png\",\"sheet_x\":33,\"sheet_y\":28,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F64D-1F3FD\",\"non_qualified\":null,\"image\":\"1f64d-1f3fd.png\",\"sheet_x\":33,\"sheet_y\":29,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F64D-1F3FE\",\"non_qualified\":null,\"image\":\"1f64d-1f3fe.png\",\"sheet_x\":33,\"sheet_y\":30,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F64D-1F3FF\",\"non_qualified\":null,\"image\":\"1f64d-1f3ff.png\",\"sheet_x\":33,\"sheet_y\":31,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F64D-200D-2640-FE0F\",\"a\":\"Person Frowning\",\"b\":\"1F64D\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[33,26],\"o\":2},\"flag-ee\":{\"a\":\"Estonia Flag\",\"b\":\"1F1EA-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,41],\"o\":2},\"battery\":{\"a\":\"Battery\",\"b\":\"1F50B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"power\",\"energy\",\"sustain\"],\"k\":[27,39],\"o\":2},\"parrot\":{\"a\":\"Parrot\",\"b\":\"1F99C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,46],\"o\":11},\"bus\":{\"a\":\"Bus\",\"b\":\"1F68C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"car\",\"vehicle\",\"transportation\"],\"k\":[34,11],\"o\":2},\"flag-eg\":{\"a\":\"Egypt Flag\",\"b\":\"1F1EA-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,42],\"o\":2},\"arrow_forward\":{\"a\":\"Black Right-Pointing Triangle\",\"b\":\"25B6-FE0F\",\"c\":\"25B6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"right\",\"direction\",\"play\"],\"k\":[52,43],\"o\":2},\"man-frowning\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64D-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FB-200D-2642\",\"image\":\"1f64d-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":21,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F64D-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FC-200D-2642\",\"image\":\"1f64d-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":22,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F64D-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FD-200D-2642\",\"image\":\"1f64d-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":23,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F64D-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FE-200D-2642\",\"image\":\"1f64d-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":24,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F64D-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F64D-1F3FF-200D-2642\",\"image\":\"1f64d-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":25,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Frowning\",\"b\":\"1F64D-200D-2642-FE0F\",\"c\":\"1F64D-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[33,20],\"o\":4},\"disappointed_relieved\":{\"a\":\"Disappointed but Relieved Face\",\"b\":\"1F625\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"phew\",\"sweat\",\"nervous\"],\"k\":[31,15],\"o\":2},\"electric_plug\":{\"a\":\"Electric Plug\",\"b\":\"1F50C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"charger\",\"power\"],\"k\":[27,40],\"o\":2},\"frame_with_picture\":{\"a\":\"Frame with Picture\",\"b\":\"1F5BC-FE0F\",\"c\":\"1F5BC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,14],\"o\":2},\"oncoming_bus\":{\"a\":\"Oncoming Bus\",\"b\":\"1F68D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"transportation\"],\"k\":[34,12],\"o\":2},\"dango\":{\"a\":\"Dango\",\"b\":\"1F361\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"dessert\",\"sweet\",\"japanese\",\"barbecue\",\"meat\"],\"k\":[7,0],\"o\":2},\"frog\":{\"a\":\"Frog Face\",\"b\":\"1F438\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"croak\",\"toad\"],\"k\":[12,28],\"o\":2},\"computer\":{\"a\":\"Personal Computer\",\"b\":\"1F4BB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"laptop\",\"screen\",\"display\",\"monitor\"],\"k\":[26,17],\"o\":2},\"art\":{\"a\":\"Artist Palette\",\"b\":\"1F3A8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"design\",\"paint\",\"draw\",\"colors\"],\"k\":[8,14],\"o\":2},\"flag-eh\":{\"a\":\"Western Sahara Flag\",\"b\":\"1F1EA-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,43],\"o\":2},\"fast_forward\":{\"a\":\"Black Right-Pointing Double Triangle\",\"b\":\"23E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"play\",\"speed\",\"continue\"],\"k\":[52,26],\"o\":2},\"cry\":{\"a\":\"Crying Face\",\"b\":\"1F622\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"tears\",\"sad\",\"depressed\",\"upset\",\":'(\"],\"k\":[31,12],\"l\":[\":'(\"],\"m\":\":'(\",\"o\":2},\"woman-frowning\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64D-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FB-200D-2640\",\"image\":\"1f64d-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F64D-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FC-200D-2640\",\"image\":\"1f64d-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F64D-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FD-200D-2640\",\"image\":\"1f64d-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F64D-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FE-200D-2640\",\"image\":\"1f64d-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F64D-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F64D-1F3FF-200D-2640\",\"image\":\"1f64d-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F64D\",\"a\":\"Woman Frowning\",\"b\":\"1F64D-200D-2640-FE0F\",\"c\":\"1F64D-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[33,14],\"o\":4},\"trolleybus\":{\"a\":\"Trolleybus\",\"b\":\"1F68E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bart\",\"transportation\",\"vehicle\"],\"k\":[34,13],\"o\":2},\"crocodile\":{\"a\":\"Crocodile\",\"b\":\"1F40A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"reptile\",\"lizard\",\"alligator\"],\"k\":[11,38],\"o\":2},\"dumpling\":{\"a\":\"Dumpling\",\"b\":\"1F95F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,46],\"o\":5},\"black_right_pointing_double_triangle_with_vertical_bar\":{\"a\":\"Black Right Pointing Double Triangle with Vertical Bar\",\"b\":\"23ED-FE0F\",\"c\":\"23ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,30],\"o\":2},\"desktop_computer\":{\"a\":\"Desktop Computer\",\"b\":\"1F5A5-FE0F\",\"c\":\"1F5A5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"computing\",\"screen\"],\"k\":[30,10],\"o\":2},\"person_with_pouting_face\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64E-1F3FB\",\"non_qualified\":null,\"image\":\"1f64e-1f3fb.png\",\"sheet_x\":33,\"sheet_y\":45,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F64E-1F3FC\",\"non_qualified\":null,\"image\":\"1f64e-1f3fc.png\",\"sheet_x\":33,\"sheet_y\":46,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F64E-1F3FD\",\"non_qualified\":null,\"image\":\"1f64e-1f3fd.png\",\"sheet_x\":33,\"sheet_y\":47,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F64E-1F3FE\",\"non_qualified\":null,\"image\":\"1f64e-1f3fe.png\",\"sheet_x\":33,\"sheet_y\":48,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F64E-1F3FF\",\"non_qualified\":null,\"image\":\"1f64e-1f3ff.png\",\"sheet_x\":33,\"sheet_y\":49,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F64E-200D-2640-FE0F\",\"a\":\"Person with Pouting Face\",\"b\":\"1F64E\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[33,44],\"o\":2},\"turtle\":{\"a\":\"Turtle\",\"b\":\"1F422\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"slow\",\"nature\",\"tortoise\"],\"k\":[12,6],\"o\":2},\"sob\":{\"a\":\"Loudly Crying Face\",\"b\":\"1F62D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"cry\",\"tears\",\"sad\",\"upset\",\"depressed\"],\"k\":[31,23],\"m\":\":'(\",\"o\":2},\"flag-er\":{\"a\":\"Eritrea Flag\",\"b\":\"1F1EA-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,44],\"o\":2},\"thread\":{\"a\":\"Spool of Thread\",\"b\":\"1F9F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,40],\"o\":11},\"minibus\":{\"a\":\"Minibus\",\"b\":\"1F690\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"car\",\"transportation\"],\"k\":[34,15],\"o\":2},\"fortune_cookie\":{\"a\":\"Fortune Cookie\",\"b\":\"1F960\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,47],\"o\":5},\"yarn\":{\"a\":\"Ball of Yarn\",\"b\":\"1F9F6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,41],\"o\":11},\"takeout_box\":{\"a\":\"Takeout Box\",\"b\":\"1F961\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,48],\"o\":5},\"man-pouting\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64E-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FB-200D-2642\",\"image\":\"1f64e-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F64E-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FC-200D-2642\",\"image\":\"1f64e-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F64E-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FD-200D-2642\",\"image\":\"1f64e-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F64E-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FE-200D-2642\",\"image\":\"1f64e-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F64E-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F64E-1F3FF-200D-2642\",\"image\":\"1f64e-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Pouting\",\"b\":\"1F64E-200D-2642-FE0F\",\"c\":\"1F64E-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[33,38],\"o\":4},\"printer\":{\"a\":\"Printer\",\"b\":\"1F5A8-FE0F\",\"c\":\"1F5A8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"paper\",\"ink\"],\"k\":[30,11],\"o\":2},\"scream\":{\"a\":\"Face Screaming in Fear\",\"b\":\"1F631\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"munch\",\"scared\",\"omg\"],\"k\":[31,27],\"o\":2},\"es\":{\"a\":\"Spain Flag\",\"b\":\"1F1EA-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"spain\",\"flag\",\"nation\",\"country\",\"banner\"],\"k\":[1,45],\"n\":[\"flag-es\"],\"o\":2},\"ambulance\":{\"a\":\"Ambulance\",\"b\":\"1F691\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"health\",\"911\",\"hospital\"],\"k\":[34,16],\"o\":2},\"black_right_pointing_triangle_with_double_vertical_bar\":{\"a\":\"Black Right Pointing Triangle with Double Vertical Bar\",\"b\":\"23EF-FE0F\",\"c\":\"23EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,32],\"o\":2},\"lizard\":{\"a\":\"Lizard\",\"b\":\"1F98E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"reptile\"],\"k\":[42,32],\"o\":4},\"flag-et\":{\"a\":\"Ethiopia Flag\",\"b\":\"1F1EA-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,46],\"o\":2},\"keyboard\":{\"a\":\"Keyboard\",\"b\":\"2328-FE0F\",\"c\":\"2328\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"computer\",\"type\",\"input\",\"text\"],\"k\":[52,24],\"o\":2},\"crab\":{\"a\":\"Crab\",\"b\":\"1F980\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"crustacean\"],\"k\":[42,18],\"o\":2},\"confounded\":{\"a\":\"Confounded Face\",\"b\":\"1F616\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"confused\",\"sick\",\"unwell\",\"oops\",\":S\"],\"k\":[31,0],\"o\":2},\"snake\":{\"a\":\"Snake\",\"b\":\"1F40D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"evil\",\"nature\",\"hiss\",\"python\"],\"k\":[11,41],\"o\":2},\"woman-pouting\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64E-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FB-200D-2640\",\"image\":\"1f64e-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":33,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F64E-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FC-200D-2640\",\"image\":\"1f64e-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":34,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F64E-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FD-200D-2640\",\"image\":\"1f64e-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":35,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F64E-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FE-200D-2640\",\"image\":\"1f64e-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F64E-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F64E-1F3FF-200D-2640\",\"image\":\"1f64e-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":33,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F64E\",\"a\":\"Woman Pouting\",\"b\":\"1F64E-200D-2640-FE0F\",\"c\":\"1F64E-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[33,32],\"o\":4},\"arrow_backward\":{\"a\":\"Black Left-Pointing Triangle\",\"b\":\"25C0-FE0F\",\"c\":\"25C0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"left\",\"direction\"],\"k\":[52,44],\"o\":2},\"fire_engine\":{\"a\":\"Fire Engine\",\"b\":\"1F692\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"cars\",\"vehicle\"],\"k\":[34,17],\"o\":2},\"rewind\":{\"a\":\"Black Left-Pointing Double Triangle\",\"b\":\"23EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"play\",\"blue-square\"],\"k\":[52,27],\"o\":2},\"three_button_mouse\":{\"a\":\"Three Button Mouse\",\"b\":\"1F5B1-FE0F\",\"c\":\"1F5B1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,12],\"o\":2},\"no_good\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F645-1F3FB\",\"non_qualified\":null,\"image\":\"1f645-1f3fb.png\",\"sheet_x\":32,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F645-1F3FC\",\"non_qualified\":null,\"image\":\"1f645-1f3fc.png\",\"sheet_x\":32,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F645-1F3FD\",\"non_qualified\":null,\"image\":\"1f645-1f3fd.png\",\"sheet_x\":32,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F645-1F3FE\",\"non_qualified\":null,\"image\":\"1f645-1f3fe.png\",\"sheet_x\":32,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F645-1F3FF\",\"non_qualified\":null,\"image\":\"1f645-1f3ff.png\",\"sheet_x\":32,\"sheet_y\":7,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F645-200D-2640-FE0F\",\"a\":\"Face with No Good Gesture\",\"b\":\"1F645\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[32,2],\"o\":2},\"police_car\":{\"a\":\"Police Car\",\"b\":\"1F693\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"cars\",\"transportation\",\"law\",\"legal\",\"enforcement\"],\"k\":[34,18],\"o\":2},\"dragon_face\":{\"a\":\"Dragon Face\",\"b\":\"1F432\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"myth\",\"nature\",\"chinese\",\"green\"],\"k\":[12,22],\"o\":2},\"persevere\":{\"a\":\"Persevering Face\",\"b\":\"1F623\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"sick\",\"no\",\"upset\",\"oops\"],\"k\":[31,13],\"o\":2},\"lobster\":{\"a\":\"Lobster\",\"b\":\"1F99E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,48],\"o\":11},\"flag-eu\":{\"a\":\"European Union Flag\",\"b\":\"1F1EA-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,47],\"o\":2},\"disappointed\":{\"a\":\"Disappointed Face\",\"b\":\"1F61E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"sad\",\"upset\",\"depressed\",\":(\"],\"k\":[31,8],\"l\":[\"):\",\":(\",\":-(\"],\"m\":\":(\",\"o\":2},\"shrimp\":{\"a\":\"Shrimp\",\"b\":\"1F990\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"ocean\",\"nature\",\"seafood\"],\"k\":[42,34],\"o\":4},\"dragon\":{\"a\":\"Dragon\",\"b\":\"1F409\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"myth\",\"nature\",\"chinese\",\"green\"],\"k\":[11,37],\"o\":2},\"man-gesturing-no\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F645-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FB-200D-2642\",\"image\":\"1f645-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":31,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F645-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FC-200D-2642\",\"image\":\"1f645-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":31,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F645-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FD-200D-2642\",\"image\":\"1f645-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":31,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F645-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FE-200D-2642\",\"image\":\"1f645-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F645-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F645-1F3FF-200D-2642\",\"image\":\"1f645-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Gesturing No\",\"b\":\"1F645-200D-2642-FE0F\",\"c\":\"1F645-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[31,53],\"o\":4},\"flag-fi\":{\"a\":\"Finland Flag\",\"b\":\"1F1EB-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,48],\"o\":2},\"trackball\":{\"a\":\"Trackball\",\"b\":\"1F5B2-FE0F\",\"c\":\"1F5B2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"trackpad\"],\"k\":[30,13],\"o\":2},\"black_left_pointing_double_triangle_with_vertical_bar\":{\"a\":\"Black Left Pointing Double Triangle with Vertical Bar\",\"b\":\"23EE-FE0F\",\"c\":\"23EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,31],\"o\":2},\"oncoming_police_car\":{\"a\":\"Oncoming Police Car\",\"b\":\"1F694\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"law\",\"legal\",\"enforcement\",\"911\"],\"k\":[34,19],\"o\":2},\"minidisc\":{\"a\":\"Minidisc\",\"b\":\"1F4BD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"record\",\"data\",\"disk\",\"90s\"],\"k\":[26,19],\"o\":2},\"sweat\":{\"a\":\"Face with Cold Sweat\",\"b\":\"1F613\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"hot\",\"sad\",\"tired\",\"exercise\"],\"k\":[30,54],\"o\":2},\"squid\":{\"a\":\"Squid\",\"b\":\"1F991\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"ocean\",\"sea\"],\"k\":[42,35],\"o\":4},\"sauropod\":{\"a\":\"Sauropod\",\"b\":\"1F995\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,39],\"o\":5},\"arrow_up_small\":{\"a\":\"Up-Pointing Small Red Triangle\",\"b\":\"1F53C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"triangle\",\"direction\",\"point\",\"forward\",\"top\"],\"k\":[28,31],\"o\":2},\"flag-fj\":{\"a\":\"Fiji Flag\",\"b\":\"1F1EB-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,49],\"o\":2},\"woman-gesturing-no\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F645-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FB-200D-2640\",\"image\":\"1f645-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F645-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FC-200D-2640\",\"image\":\"1f645-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F645-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FD-200D-2640\",\"image\":\"1f645-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F645-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FE-200D-2640\",\"image\":\"1f645-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F645-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F645-1F3FF-200D-2640\",\"image\":\"1f645-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":31,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F645\",\"a\":\"Woman Gesturing No\",\"b\":\"1F645-200D-2640-FE0F\",\"c\":\"1F645-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[31,47],\"o\":4},\"taxi\":{\"a\":\"Taxi\",\"b\":\"1F695\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"uber\",\"vehicle\",\"cars\",\"transportation\"],\"k\":[34,20],\"o\":2},\"flag-fk\":{\"a\":\"Falkland Islands Flag\",\"b\":\"1F1EB-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,50],\"o\":2},\"floppy_disk\":{\"a\":\"Floppy Disk\",\"b\":\"1F4BE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"oldschool\",\"technology\",\"save\",\"90s\",\"80s\"],\"k\":[26,20],\"o\":2},\"t-rex\":{\"a\":\"T-Rex\",\"b\":\"1F996\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,40],\"o\":5},\"oyster\":{\"a\":\"Oyster\",\"b\":\"1F9AA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,1],\"o\":12},\"arrow_double_up\":{\"a\":\"Black Up-Pointing Double Triangle\",\"b\":\"23EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"direction\",\"top\"],\"k\":[52,28],\"o\":2},\"oncoming_taxi\":{\"a\":\"Oncoming Taxi\",\"b\":\"1F696\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"cars\",\"uber\"],\"k\":[34,21],\"o\":2},\"ok_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F646-1F3FB\",\"non_qualified\":null,\"image\":\"1f646-1f3fb.png\",\"sheet_x\":32,\"sheet_y\":21,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F646-1F3FC\",\"non_qualified\":null,\"image\":\"1f646-1f3fc.png\",\"sheet_x\":32,\"sheet_y\":22,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F646-1F3FD\",\"non_qualified\":null,\"image\":\"1f646-1f3fd.png\",\"sheet_x\":32,\"sheet_y\":23,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F646-1F3FE\",\"non_qualified\":null,\"image\":\"1f646-1f3fe.png\",\"sheet_x\":32,\"sheet_y\":24,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F646-1F3FF\",\"non_qualified\":null,\"image\":\"1f646-1f3ff.png\",\"sheet_x\":32,\"sheet_y\":25,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F646-200D-2640-FE0F\",\"a\":\"Face with Ok Gesture\",\"b\":\"1F646\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"women\",\"girl\",\"female\",\"pink\",\"human\",\"woman\"],\"k\":[32,20],\"o\":2},\"weary\":{\"a\":\"Weary Face\",\"b\":\"1F629\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"tired\",\"sleepy\",\"sad\",\"frustrated\",\"upset\"],\"k\":[31,19],\"o\":2},\"man-gesturing-ok\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F646-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FB-200D-2642\",\"image\":\"1f646-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F646-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FC-200D-2642\",\"image\":\"1f646-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F646-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FD-200D-2642\",\"image\":\"1f646-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F646-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FE-200D-2642\",\"image\":\"1f646-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F646-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F646-1F3FF-200D-2642\",\"image\":\"1f646-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Gesturing Ok\",\"b\":\"1F646-200D-2642-FE0F\",\"c\":\"1F646-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[32,14],\"o\":4},\"arrow_down_small\":{\"a\":\"Down-Pointing Small Red Triangle\",\"b\":\"1F53D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"direction\",\"bottom\"],\"k\":[28,32],\"o\":2},\"tired_face\":{\"a\":\"Tired Face\",\"b\":\"1F62B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sick\",\"whine\",\"upset\",\"frustrated\"],\"k\":[31,21],\"o\":2},\"car\":{\"a\":\"Automobile\",\"b\":\"1F697\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[34,22],\"n\":[\"red_car\"],\"o\":2},\"icecream\":{\"a\":\"Soft Ice Cream\",\"b\":\"1F366\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"hot\",\"dessert\",\"summer\"],\"k\":[7,5],\"o\":2},\"cd\":{\"a\":\"Optical Disc\",\"b\":\"1F4BF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"dvd\",\"disk\",\"disc\",\"90s\"],\"k\":[26,21],\"o\":2},\"whale\":{\"a\":\"Spouting Whale\",\"b\":\"1F433\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"sea\",\"ocean\"],\"k\":[12,23],\"o\":2},\"flag-fm\":{\"a\":\"Micronesia Flag\",\"b\":\"1F1EB-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,51],\"o\":2},\"oncoming_automobile\":{\"a\":\"Oncoming Automobile\",\"b\":\"1F698\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"car\",\"vehicle\",\"transportation\"],\"k\":[34,23],\"o\":2},\"arrow_double_down\":{\"a\":\"Black Down-Pointing Double Triangle\",\"b\":\"23EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"direction\",\"bottom\"],\"k\":[52,29],\"o\":2},\"woman-gesturing-ok\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F646-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FB-200D-2640\",\"image\":\"1f646-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F646-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FC-200D-2640\",\"image\":\"1f646-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F646-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FD-200D-2640\",\"image\":\"1f646-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F646-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FE-200D-2640\",\"image\":\"1f646-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F646-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F646-1F3FF-200D-2640\",\"image\":\"1f646-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F646\",\"a\":\"Woman Gesturing Ok\",\"b\":\"1F646-200D-2640-FE0F\",\"c\":\"1F646-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[32,8],\"o\":4},\"yawning_face\":{\"a\":\"Yawning Face\",\"b\":\"1F971\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,7],\"o\":12},\"dvd\":{\"a\":\"Dvd\",\"b\":\"1F4C0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"cd\",\"disk\",\"disc\"],\"k\":[26,22],\"o\":2},\"whale2\":{\"a\":\"Whale\",\"b\":\"1F40B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"sea\",\"ocean\"],\"k\":[11,39],\"o\":2},\"flag-fo\":{\"a\":\"Faroe Islands Flag\",\"b\":\"1F1EB-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,52],\"o\":2},\"shaved_ice\":{\"a\":\"Shaved Ice\",\"b\":\"1F367\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hot\",\"dessert\",\"summer\"],\"k\":[7,6],\"o\":2},\"double_vertical_bar\":{\"a\":\"Double Vertical Bar\",\"b\":\"23F8-FE0F\",\"c\":\"23F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,37],\"o\":2},\"information_desk_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F481-1F3FB\",\"non_qualified\":null,\"image\":\"1f481-1f3fb.png\",\"sheet_x\":24,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F481-1F3FC\",\"non_qualified\":null,\"image\":\"1f481-1f3fc.png\",\"sheet_x\":24,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F481-1F3FD\",\"non_qualified\":null,\"image\":\"1f481-1f3fd.png\",\"sheet_x\":24,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F481-1F3FE\",\"non_qualified\":null,\"image\":\"1f481-1f3fe.png\",\"sheet_x\":24,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F481-1F3FF\",\"non_qualified\":null,\"image\":\"1f481-1f3ff.png\",\"sheet_x\":24,\"sheet_y\":7,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F481-200D-2640-FE0F\",\"a\":\"Information Desk Person\",\"b\":\"1F481\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[24,2],\"o\":2},\"dolphin\":{\"a\":\"Dolphin\",\"b\":\"1F42C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"fish\",\"sea\",\"ocean\",\"flipper\",\"fins\",\"beach\"],\"k\":[12,16],\"n\":[\"flipper\"],\"o\":2},\"blue_car\":{\"a\":\"Recreational Vehicle\",\"b\":\"1F699\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\"],\"k\":[34,24],\"o\":2},\"ice_cream\":{\"a\":\"Ice Cream\",\"b\":\"1F368\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"hot\",\"dessert\"],\"k\":[7,7],\"o\":2},\"fr\":{\"a\":\"France Flag\",\"b\":\"1F1EB-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"banner\",\"flag\",\"nation\",\"france\",\"french\",\"country\"],\"k\":[1,53],\"n\":[\"flag-fr\"],\"o\":2},\"triumph\":{\"a\":\"Face with Look of Triumph\",\"b\":\"1F624\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"gas\",\"phew\",\"proud\",\"pride\"],\"k\":[31,14],\"o\":2},\"abacus\":{\"a\":\"Abacus\",\"b\":\"1F9EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,33],\"o\":11},\"man-tipping-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F481-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FB-200D-2642\",\"image\":\"1f481-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F481-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FC-200D-2642\",\"image\":\"1f481-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F481-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FD-200D-2642\",\"image\":\"1f481-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F481-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FE-200D-2642\",\"image\":\"1f481-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F481-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F481-1F3FF-200D-2642\",\"image\":\"1f481-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Tipping Hand\",\"b\":\"1F481-200D-2642-FE0F\",\"c\":\"1F481-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[23,53],\"o\":4},\"doughnut\":{\"a\":\"Doughnut\",\"b\":\"1F369\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"dessert\",\"snack\",\"sweet\",\"donut\"],\"k\":[7,8],\"o\":2},\"fish\":{\"a\":\"Fish\",\"b\":\"1F41F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"food\",\"nature\"],\"k\":[12,3],\"o\":2},\"truck\":{\"a\":\"Delivery Truck\",\"b\":\"1F69A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"cars\",\"transportation\"],\"k\":[34,25],\"o\":2},\"movie_camera\":{\"a\":\"Movie Camera\",\"b\":\"1F3A5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"film\",\"record\"],\"k\":[8,11],\"o\":2},\"flag-ga\":{\"a\":\"Gabon Flag\",\"b\":\"1F1EC-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,54],\"o\":2},\"rage\":{\"a\":\"Pouting Face\",\"b\":\"1F621\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"angry\",\"mad\",\"hate\",\"despise\"],\"k\":[31,11],\"o\":2},\"black_square_for_stop\":{\"a\":\"Black Square for Stop\",\"b\":\"23F9-FE0F\",\"c\":\"23F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,38],\"o\":2},\"articulated_lorry\":{\"a\":\"Articulated Lorry\",\"b\":\"1F69B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"cars\",\"transportation\",\"express\"],\"k\":[34,26],\"o\":2},\"angry\":{\"a\":\"Angry Face\",\"b\":\"1F620\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"mad\",\"face\",\"annoyed\",\"frustrated\"],\"k\":[31,10],\"l\":[\">:(\",\">:-(\"],\"o\":2},\"cookie\":{\"a\":\"Cookie\",\"b\":\"1F36A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"snack\",\"oreo\",\"chocolate\",\"sweet\",\"dessert\"],\"k\":[7,9],\"o\":2},\"gb\":{\"a\":\"United Kingdom Flag\",\"b\":\"1F1EC-1F1E7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,55],\"n\":[\"uk\",\"flag-gb\"],\"o\":2},\"tropical_fish\":{\"a\":\"Tropical Fish\",\"b\":\"1F420\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"swim\",\"ocean\",\"beach\",\"nemo\"],\"k\":[12,4],\"o\":2},\"woman-tipping-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F481-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FB-200D-2640\",\"image\":\"1f481-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F481-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FC-200D-2640\",\"image\":\"1f481-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F481-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FD-200D-2640\",\"image\":\"1f481-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F481-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FE-200D-2640\",\"image\":\"1f481-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F481-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F481-1F3FF-200D-2640\",\"image\":\"1f481-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F481\",\"a\":\"Woman Tipping Hand\",\"b\":\"1F481-200D-2640-FE0F\",\"c\":\"1F481-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[23,47],\"o\":4},\"black_circle_for_record\":{\"a\":\"Black Circle for Record\",\"b\":\"23FA-FE0F\",\"c\":\"23FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,39],\"o\":2},\"film_frames\":{\"a\":\"Film Frames\",\"b\":\"1F39E-FE0F\",\"c\":\"1F39E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[8,4],\"o\":2},\"film_projector\":{\"a\":\"Film Projector\",\"b\":\"1F4FD-FE0F\",\"c\":\"1F4FD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"video\",\"tape\",\"record\",\"movie\"],\"k\":[27,26],\"o\":2},\"flag-gd\":{\"a\":\"Grenada Flag\",\"b\":\"1F1EC-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[1,56],\"o\":2},\"blowfish\":{\"a\":\"Blowfish\",\"b\":\"1F421\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"food\",\"sea\",\"ocean\"],\"k\":[12,5],\"o\":2},\"face_with_symbols_on_mouth\":{\"a\":\"Serious Face with Symbols Covering Mouth\",\"b\":\"1F92C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,46],\"n\":[\"serious_face_with_symbols_covering_mouth\"],\"o\":5},\"birthday\":{\"a\":\"Birthday Cake\",\"b\":\"1F382\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"dessert\",\"cake\"],\"k\":[7,33],\"o\":2},\"eject\":{\"a\":\"Eject\",\"b\":\"23CF-FE0F\",\"c\":\"23CF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,25],\"o\":2},\"raising_hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64B-1F3FB\",\"non_qualified\":null,\"image\":\"1f64b-1f3fb.png\",\"sheet_x\":33,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F64B-1F3FC\",\"non_qualified\":null,\"image\":\"1f64b-1f3fc.png\",\"sheet_x\":33,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F64B-1F3FD\",\"non_qualified\":null,\"image\":\"1f64b-1f3fd.png\",\"sheet_x\":33,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F64B-1F3FE\",\"non_qualified\":null,\"image\":\"1f64b-1f3fe.png\",\"sheet_x\":33,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F64B-1F3FF\",\"non_qualified\":null,\"image\":\"1f64b-1f3ff.png\",\"sheet_x\":33,\"sheet_y\":7,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F64B-200D-2640-FE0F\",\"a\":\"Happy Person Raising One Hand\",\"b\":\"1F64B\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[33,2],\"o\":2},\"tractor\":{\"a\":\"Tractor\",\"b\":\"1F69C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"car\",\"farming\",\"agriculture\"],\"k\":[34,27],\"o\":2},\"flag-ge\":{\"a\":\"Georgia Flag\",\"b\":\"1F1EC-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,0],\"o\":2},\"smiling_imp\":{\"a\":\"Smiling Face with Horns\",\"b\":\"1F608\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"devil\",\"horns\"],\"k\":[30,43],\"o\":2},\"racing_car\":{\"a\":\"Racing Car\",\"b\":\"1F3CE-FE0F\",\"c\":\"1F3CE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"race\",\"fast\",\"formula\",\"f1\"],\"k\":[10,33],\"o\":2},\"cinema\":{\"a\":\"Cinema\",\"b\":\"1F3A6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"record\",\"film\",\"movie\",\"curtain\",\"stage\",\"theater\"],\"k\":[8,12],\"o\":2},\"clapper\":{\"a\":\"Clapper Board\",\"b\":\"1F3AC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"movie\",\"film\",\"record\"],\"k\":[8,18],\"o\":2},\"shark\":{\"a\":\"Shark\",\"b\":\"1F988\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"nature\",\"fish\",\"sea\",\"ocean\",\"jaws\",\"fins\",\"beach\"],\"k\":[42,26],\"o\":4},\"cake\":{\"a\":\"Shortcake\",\"b\":\"1F370\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"dessert\"],\"k\":[7,15],\"o\":2},\"man-raising-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64B-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FB-200D-2642\",\"image\":\"1f64b-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F64B-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FC-200D-2642\",\"image\":\"1f64b-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F64B-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FD-200D-2642\",\"image\":\"1f64b-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F64B-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FE-200D-2642\",\"image\":\"1f64b-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F64B-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F64B-1F3FF-200D-2642\",\"image\":\"1f64b-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":33,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Raising Hand\",\"b\":\"1F64B-200D-2642-FE0F\",\"c\":\"1F64B-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[32,53],\"o\":4},\"octopus\":{\"a\":\"Octopus\",\"b\":\"1F419\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"creature\",\"ocean\",\"sea\",\"nature\",\"beach\"],\"k\":[11,54],\"o\":2},\"woman-raising-hand\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F64B-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FB-200D-2640\",\"image\":\"1f64b-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F64B-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FC-200D-2640\",\"image\":\"1f64b-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F64B-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FD-200D-2640\",\"image\":\"1f64b-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F64B-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FE-200D-2640\",\"image\":\"1f64b-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F64B-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F64B-1F3FF-200D-2640\",\"image\":\"1f64b-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F64B\",\"a\":\"Woman Raising Hand\",\"b\":\"1F64B-200D-2640-FE0F\",\"c\":\"1F64B-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[32,47],\"o\":4},\"flag-gf\":{\"a\":\"French Guiana Flag\",\"b\":\"1F1EC-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,1],\"o\":2},\"tv\":{\"a\":\"Television\",\"b\":\"1F4FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"technology\",\"program\",\"oldschool\",\"show\",\"television\"],\"k\":[27,23],\"o\":2},\"imp\":{\"a\":\"Imp\",\"b\":\"1F47F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"devil\",\"angry\",\"horns\"],\"k\":[23,45],\"o\":2},\"cupcake\":{\"a\":\"Cupcake\",\"b\":\"1F9C1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,9],\"o\":11},\"racing_motorcycle\":{\"a\":\"Racing Motorcycle\",\"b\":\"1F3CD-FE0F\",\"c\":\"1F3CD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[10,32],\"o\":2},\"low_brightness\":{\"a\":\"Low Brightness Symbol\",\"b\":\"1F505\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sun\",\"afternoon\",\"warm\",\"summer\"],\"k\":[27,33],\"o\":2},\"shell\":{\"a\":\"Spiral Shell\",\"b\":\"1F41A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"sea\",\"beach\"],\"k\":[11,55],\"o\":2},\"flag-gg\":{\"a\":\"Guernsey Flag\",\"b\":\"1F1EC-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,2],\"o\":2},\"high_brightness\":{\"a\":\"High Brightness Symbol\",\"b\":\"1F506\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sun\",\"light\"],\"k\":[27,34],\"o\":2},\"deaf_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9CF-1F3FB\",\"non_qualified\":null,\"image\":\"1f9cf-1f3fb.png\",\"sheet_x\":45,\"sheet_y\":11,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9CF-1F3FC\",\"non_qualified\":null,\"image\":\"1f9cf-1f3fc.png\",\"sheet_x\":45,\"sheet_y\":12,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9CF-1F3FD\",\"non_qualified\":null,\"image\":\"1f9cf-1f3fd.png\",\"sheet_x\":45,\"sheet_y\":13,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9CF-1F3FE\",\"non_qualified\":null,\"image\":\"1f9cf-1f3fe.png\",\"sheet_x\":45,\"sheet_y\":14,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9CF-1F3FF\",\"non_qualified\":null,\"image\":\"1f9cf-1f3ff.png\",\"sheet_x\":45,\"sheet_y\":15,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Deaf Person\",\"b\":\"1F9CF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[45,10],\"o\":12},\"skull\":{\"a\":\"Skull\",\"b\":\"1F480\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dead\",\"skeleton\",\"creepy\",\"death\"],\"k\":[23,46],\"o\":2},\"motor_scooter\":{\"a\":\"Motor Scooter\",\"b\":\"1F6F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"vespa\",\"sasha\"],\"k\":[36,54],\"o\":4},\"camera\":{\"a\":\"Camera\",\"b\":\"1F4F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"gadgets\",\"photography\"],\"k\":[27,20],\"o\":2},\"pie\":{\"a\":\"Pie\",\"b\":\"1F967\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,54],\"o\":5},\"flag-gh\":{\"a\":\"Ghana Flag\",\"b\":\"1F1EC-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,3],\"o\":2},\"deaf_man\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9CF-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9CF-1F3FB-200D-2642\",\"image\":\"1f9cf-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":5,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9CF-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9CF-1F3FC-200D-2642\",\"image\":\"1f9cf-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":6,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9CF-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9CF-1F3FD-200D-2642\",\"image\":\"1f9cf-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":7,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9CF-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9CF-1F3FE-200D-2642\",\"image\":\"1f9cf-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":8,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9CF-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9CF-1F3FF-200D-2642\",\"image\":\"1f9cf-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":45,\"sheet_y\":9,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Deaf Man\",\"b\":\"1F9CF-200D-2642-FE0F\",\"c\":\"1F9CF-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[45,4],\"o\":12},\"skull_and_crossbones\":{\"a\":\"Skull and Crossbones\",\"b\":\"2620-FE0F\",\"c\":\"2620\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"poison\",\"danger\",\"deadly\",\"scary\",\"death\",\"pirate\",\"evil\"],\"k\":[53,8],\"o\":2},\"camera_with_flash\":{\"a\":\"Camera with Flash\",\"b\":\"1F4F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[27,21],\"o\":2},\"signal_strength\":{\"a\":\"Antenna with Bars\",\"b\":\"1F4F6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"reception\",\"phone\",\"internet\",\"connection\",\"wifi\",\"bluetooth\",\"bars\"],\"k\":[27,19],\"o\":2},\"chocolate_bar\":{\"a\":\"Chocolate Bar\",\"b\":\"1F36B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"snack\",\"dessert\",\"sweet\"],\"k\":[7,10],\"o\":2},\"manual_wheelchair\":{\"a\":\"Manual Wheelchair\",\"b\":\"1F9BD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,5],\"o\":12},\"snail\":{\"a\":\"Snail\",\"b\":\"1F40C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"slow\",\"animal\",\"shell\"],\"k\":[11,40],\"o\":2},\"motorized_wheelchair\":{\"a\":\"Motorized Wheelchair\",\"b\":\"1F9BC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,4],\"o\":12},\"flag-gi\":{\"a\":\"Gibraltar Flag\",\"b\":\"1F1EC-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,4],\"o\":2},\"hankey\":{\"a\":\"Pile of Poo\",\"b\":\"1F4A9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[25,51],\"n\":[\"poop\",\"shit\"],\"o\":2},\"vibration_mode\":{\"a\":\"Vibration Mode\",\"b\":\"1F4F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"orange-square\",\"phone\"],\"k\":[27,16],\"o\":2},\"deaf_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9CF-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9CF-1F3FB-200D-2640\",\"image\":\"1f9cf-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":56,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9CF-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9CF-1F3FC-200D-2640\",\"image\":\"1f9cf-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":0,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9CF-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9CF-1F3FD-200D-2640\",\"image\":\"1f9cf-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":1,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9CF-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9CF-1F3FE-200D-2640\",\"image\":\"1f9cf-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":2,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9CF-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9CF-1F3FF-200D-2640\",\"image\":\"1f9cf-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":45,\"sheet_y\":3,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Deaf Woman\",\"b\":\"1F9CF-200D-2640-FE0F\",\"c\":\"1F9CF-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,55],\"o\":12},\"butterfly\":{\"a\":\"Butterfly\",\"b\":\"1F98B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"insect\",\"nature\",\"caterpillar\"],\"k\":[42,29],\"o\":4},\"video_camera\":{\"a\":\"Video Camera\",\"b\":\"1F4F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"film\",\"record\"],\"k\":[27,22],\"o\":2},\"candy\":{\"a\":\"Candy\",\"b\":\"1F36C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"snack\",\"dessert\",\"sweet\",\"lolly\"],\"k\":[7,11],\"o\":2},\"auto_rickshaw\":{\"a\":\"Auto Rickshaw\",\"b\":\"1F6FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,2],\"o\":12},\"bow\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F647-1F3FB\",\"non_qualified\":null,\"image\":\"1f647-1f3fb.png\",\"sheet_x\":32,\"sheet_y\":39,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F647-1F3FC\",\"non_qualified\":null,\"image\":\"1f647-1f3fc.png\",\"sheet_x\":32,\"sheet_y\":40,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F647-1F3FD\",\"non_qualified\":null,\"image\":\"1f647-1f3fd.png\",\"sheet_x\":32,\"sheet_y\":41,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F647-1F3FE\",\"non_qualified\":null,\"image\":\"1f647-1f3fe.png\",\"sheet_x\":32,\"sheet_y\":42,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F647-1F3FF\",\"non_qualified\":null,\"image\":\"1f647-1f3ff.png\",\"sheet_x\":32,\"sheet_y\":43,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F647-200D-2642-FE0F\",\"a\":\"Person Bowing Deeply\",\"b\":\"1F647\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[32,38],\"o\":2},\"mobile_phone_off\":{\"a\":\"Mobile Phone off\",\"b\":\"1F4F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"mute\",\"orange-square\",\"silence\",\"quiet\"],\"k\":[27,17],\"o\":2},\"clown_face\":{\"a\":\"Clown Face\",\"b\":\"1F921\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\"],\"k\":[38,18],\"o\":4},\"lollipop\":{\"a\":\"Lollipop\",\"b\":\"1F36D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"snack\",\"candy\",\"sweet\"],\"k\":[7,12],\"o\":2},\"flag-gl\":{\"a\":\"Greenland Flag\",\"b\":\"1F1EC-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,5],\"o\":2},\"vhs\":{\"a\":\"Videocassette\",\"b\":\"1F4FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"record\",\"video\",\"oldschool\",\"90s\",\"80s\"],\"k\":[27,25],\"o\":2},\"bug\":{\"a\":\"Bug\",\"b\":\"1F41B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"insect\",\"nature\",\"worm\"],\"k\":[11,56],\"o\":2},\"bike\":{\"a\":\"Bicycle\",\"b\":\"1F6B2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"bicycle\",\"exercise\",\"hipster\"],\"k\":[35,9],\"o\":2},\"man-bowing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F647-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FB-200D-2642\",\"image\":\"1f647-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":33,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F647-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FC-200D-2642\",\"image\":\"1f647-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":34,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F647-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FD-200D-2642\",\"image\":\"1f647-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":35,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F647-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FE-200D-2642\",\"image\":\"1f647-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F647-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F647-1F3FF-200D-2642\",\"image\":\"1f647-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":32,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F647\",\"a\":\"Man Bowing\",\"b\":\"1F647-200D-2642-FE0F\",\"c\":\"1F647-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[32,32],\"o\":4},\"female_sign\":{\"a\":\"Female Sign\",\"b\":\"2640-FE0F\",\"c\":\"2640\",\"d\":false,\"e\":true,\"f\":true,\"h\":true,\"k\":[53,18],\"o\":4},\"japanese_ogre\":{\"a\":\"Japanese Ogre\",\"b\":\"1F479\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"monster\",\"red\",\"mask\",\"halloween\",\"scary\",\"creepy\",\"devil\",\"demon\",\"japanese\",\"ogre\"],\"k\":[23,34],\"o\":2},\"custard\":{\"a\":\"Custard\",\"b\":\"1F36E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dessert\",\"food\"],\"k\":[7,13],\"o\":2},\"ant\":{\"a\":\"Ant\",\"b\":\"1F41C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"insect\",\"nature\",\"bug\"],\"k\":[12,0],\"o\":2},\"mag\":{\"a\":\"Left-Pointing Magnifying Glass\",\"b\":\"1F50D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"search\",\"zoom\",\"find\",\"detective\"],\"k\":[27,41],\"o\":2},\"flag-gm\":{\"a\":\"Gambia Flag\",\"b\":\"1F1EC-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,6],\"o\":2},\"honey_pot\":{\"a\":\"Honey Pot\",\"b\":\"1F36F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bees\",\"sweet\",\"kitchen\"],\"k\":[7,14],\"o\":2},\"woman-bowing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F647-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FB-200D-2640\",\"image\":\"1f647-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":27,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F647-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FC-200D-2640\",\"image\":\"1f647-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":28,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F647-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FD-200D-2640\",\"image\":\"1f647-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":29,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F647-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FE-200D-2640\",\"image\":\"1f647-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F647-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F647-1F3FF-200D-2640\",\"image\":\"1f647-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":32,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Bowing\",\"b\":\"1F647-200D-2640-FE0F\",\"c\":\"1F647-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[32,26],\"o\":4},\"male_sign\":{\"a\":\"Male Sign\",\"b\":\"2642-FE0F\",\"c\":\"2642\",\"d\":false,\"e\":true,\"f\":true,\"h\":true,\"k\":[53,19],\"o\":4},\"mag_right\":{\"a\":\"Right-Pointing Magnifying Glass\",\"b\":\"1F50E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"search\",\"zoom\",\"find\",\"detective\"],\"k\":[27,42],\"o\":2},\"japanese_goblin\":{\"a\":\"Japanese Goblin\",\"b\":\"1F47A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"red\",\"evil\",\"mask\",\"monster\",\"scary\",\"creepy\",\"japanese\",\"goblin\"],\"k\":[23,35],\"o\":2},\"scooter\":{\"a\":\"Scooter\",\"b\":\"1F6F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[36,53],\"o\":4},\"bee\":{\"a\":\"Honeybee\",\"b\":\"1F41D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[12,1],\"n\":[\"honeybee\"],\"o\":2},\"flag-gn\":{\"a\":\"Guinea Flag\",\"b\":\"1F1EC-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,7],\"o\":2},\"candle\":{\"a\":\"Candle\",\"b\":\"1F56F-FE0F\",\"c\":\"1F56F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fire\",\"wax\"],\"k\":[29,6],\"o\":2},\"skateboard\":{\"a\":\"Skateboard\",\"b\":\"1F6F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,1],\"o\":11},\"medical_symbol\":{\"a\":\"Medical Symbol\",\"b\":\"2695-FE0F\",\"c\":\"2695\",\"d\":false,\"e\":true,\"f\":true,\"h\":true,\"k\":[53,44],\"n\":[\"staff_of_aesculapius\"],\"o\":4},\"ghost\":{\"a\":\"Ghost\",\"b\":\"1F47B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"halloween\",\"spooky\",\"scary\"],\"k\":[23,36],\"o\":2},\"beetle\":{\"a\":\"Lady Beetle\",\"b\":\"1F41E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"insect\",\"nature\",\"ladybug\"],\"k\":[12,2],\"o\":2},\"face_palm\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F926-1F3FB\",\"non_qualified\":null,\"image\":\"1f926-1f3fb.png\",\"sheet_x\":38,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F926-1F3FC\",\"non_qualified\":null,\"image\":\"1f926-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F926-1F3FD\",\"non_qualified\":null,\"image\":\"1f926-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F926-1F3FE\",\"non_qualified\":null,\"image\":\"1f926-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F926-1F3FF\",\"non_qualified\":null,\"image\":\"1f926-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"a\":\"Face Palm\",\"b\":\"1F926\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[38,35],\"o\":4},\"flag-gp\":{\"a\":\"Guadeloupe Flag\",\"b\":\"1F1EC-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,8],\"o\":2},\"baby_bottle\":{\"a\":\"Baby Bottle\",\"b\":\"1F37C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"food\",\"container\",\"milk\"],\"k\":[7,27],\"o\":2},\"infinity\":{\"a\":\"Infinity\",\"b\":\"267E-FE0F\",\"c\":\"267E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[53,39],\"o\":11},\"glass_of_milk\":{\"a\":\"Glass of Milk\",\"b\":\"1F95B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,42],\"o\":4},\"man-facepalming\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F926-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FB-200D-2642\",\"image\":\"1f926-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F926-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FC-200D-2642\",\"image\":\"1f926-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F926-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FD-200D-2642\",\"image\":\"1f926-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":32,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F926-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FE-200D-2642\",\"image\":\"1f926-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":33,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F926-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F926-1F3FF-200D-2642\",\"image\":\"1f926-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":38,\"sheet_y\":34,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Facepalming\",\"b\":\"1F926-200D-2642-FE0F\",\"c\":\"1F926-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,29],\"o\":4},\"cricket\":{\"a\":\"Cricket\",\"b\":\"1F997\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\"],\"k\":[42,41],\"o\":5},\"busstop\":{\"a\":\"Bus Stop\",\"b\":\"1F68F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"wait\"],\"k\":[34,14],\"o\":2},\"flag-gq\":{\"a\":\"Equatorial Guinea Flag\",\"b\":\"1F1EC-1F1F6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,9],\"o\":2},\"alien\":{\"a\":\"Extraterrestrial Alien\",\"b\":\"1F47D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"UFO\",\"paul\",\"weird\",\"outer_space\"],\"k\":[23,43],\"o\":2},\"bulb\":{\"a\":\"Electric Light Bulb\",\"b\":\"1F4A1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"light\",\"electricity\",\"idea\"],\"k\":[25,43],\"o\":2},\"woman-facepalming\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F926-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FB-200D-2640\",\"image\":\"1f926-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":24,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F926-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FC-200D-2640\",\"image\":\"1f926-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":25,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F926-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FD-200D-2640\",\"image\":\"1f926-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":26,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F926-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FE-200D-2640\",\"image\":\"1f926-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":27,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F926-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F926-1F3FF-200D-2640\",\"image\":\"1f926-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":38,\"sheet_y\":28,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Facepalming\",\"b\":\"1F926-200D-2640-FE0F\",\"c\":\"1F926-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,23],\"o\":4},\"spider\":{\"a\":\"Spider\",\"b\":\"1F577-FE0F\",\"c\":\"1F577\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"arachnid\"],\"k\":[29,34],\"o\":2},\"space_invader\":{\"a\":\"Alien Monster\",\"b\":\"1F47E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"game\",\"arcade\",\"play\"],\"k\":[23,44],\"o\":2},\"motorway\":{\"a\":\"Motorway\",\"b\":\"1F6E3-FE0F\",\"c\":\"1F6E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"road\",\"cupertino\",\"interstate\",\"highway\"],\"k\":[36,45],\"o\":2},\"flag-gr\":{\"a\":\"Greece Flag\",\"b\":\"1F1EC-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,10],\"o\":2},\"recycle\":{\"a\":\"Black Universal Recycling Symbol\",\"b\":\"267B-FE0F\",\"c\":\"267B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"arrow\",\"environment\",\"garbage\",\"trash\"],\"k\":[53,38],\"o\":2},\"coffee\":{\"a\":\"Hot Beverage\",\"b\":\"2615\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"beverage\",\"caffeine\",\"latte\",\"espresso\"],\"k\":[53,0],\"o\":2},\"flashlight\":{\"a\":\"Electric Torch\",\"b\":\"1F526\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dark\",\"camping\",\"sight\",\"night\"],\"k\":[28,9],\"o\":2},\"spider_web\":{\"a\":\"Spider Web\",\"b\":\"1F578-FE0F\",\"c\":\"1F578\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"insect\",\"arachnid\",\"silk\"],\"k\":[29,35],\"o\":2},\"izakaya_lantern\":{\"a\":\"Izakaya Lantern\",\"b\":\"1F3EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"light\",\"paper\",\"halloween\",\"spooky\"],\"k\":[11,8],\"n\":[\"lantern\"],\"o\":2},\"flag-gs\":{\"a\":\"South Georgia & South Sandwich Islands Flag\",\"b\":\"1F1EC-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,11],\"o\":2},\"shrug\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F937-1F3FB\",\"non_qualified\":null,\"image\":\"1f937-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F937-1F3FC\",\"non_qualified\":null,\"image\":\"1f937-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F937-1F3FD\",\"non_qualified\":null,\"image\":\"1f937-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F937-1F3FE\",\"non_qualified\":null,\"image\":\"1f937-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F937-1F3FF\",\"non_qualified\":null,\"image\":\"1f937-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"a\":\"Shrug\",\"b\":\"1F937\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[39,47],\"o\":4},\"fleur_de_lis\":{\"a\":\"Fleur De Lis\",\"b\":\"269C-FE0F\",\"c\":\"269C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"decorative\",\"scout\"],\"k\":[53,49],\"o\":2},\"robot_face\":{\"a\":\"Robot Face\",\"b\":\"1F916\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,29],\"o\":2},\"railway_track\":{\"a\":\"Railway Track\",\"b\":\"1F6E4-FE0F\",\"c\":\"1F6E4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"train\",\"transportation\"],\"k\":[36,46],\"o\":2},\"tea\":{\"a\":\"Teacup Without Handle\",\"b\":\"1F375\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"drink\",\"bowl\",\"breakfast\",\"green\",\"british\"],\"k\":[7,20],\"o\":2},\"flag-gt\":{\"a\":\"Guatemala Flag\",\"b\":\"1F1EC-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,12],\"o\":2},\"oil_drum\":{\"a\":\"Oil Drum\",\"b\":\"1F6E2-FE0F\",\"c\":\"1F6E2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"barrell\"],\"k\":[36,44],\"o\":2},\"diya_lamp\":{\"a\":\"Diya Lamp\",\"b\":\"1FA94\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,8],\"o\":12},\"sake\":{\"a\":\"Sake Bottle and Cup\",\"b\":\"1F376\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"wine\",\"drink\",\"drunk\",\"beverage\",\"japanese\",\"alcohol\",\"booze\"],\"k\":[7,21],\"o\":2},\"trident\":{\"a\":\"Trident Emblem\",\"b\":\"1F531\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weapon\",\"spear\"],\"k\":[28,20],\"o\":2},\"man-shrugging\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F937-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FB-200D-2642\",\"image\":\"1f937-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":39,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F937-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FC-200D-2642\",\"image\":\"1f937-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":39,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F937-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FD-200D-2642\",\"image\":\"1f937-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":39,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F937-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FE-200D-2642\",\"image\":\"1f937-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":39,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F937-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F937-1F3FF-200D-2642\",\"image\":\"1f937-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":39,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Shrugging\",\"b\":\"1F937-200D-2642-FE0F\",\"c\":\"1F937-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[39,41],\"o\":4},\"smiley_cat\":{\"a\":\"Smiling Cat Face with Open Mouth\",\"b\":\"1F63A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cats\",\"happy\",\"smile\"],\"k\":[31,36],\"o\":2},\"scorpion\":{\"a\":\"Scorpion\",\"b\":\"1F982\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"arachnid\"],\"k\":[42,20],\"o\":2},\"woman-shrugging\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F937-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FB-200D-2640\",\"image\":\"1f937-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F937-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FC-200D-2640\",\"image\":\"1f937-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F937-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FD-200D-2640\",\"image\":\"1f937-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F937-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FE-200D-2640\",\"image\":\"1f937-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F937-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F937-1F3FF-200D-2640\",\"image\":\"1f937-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Shrugging\",\"b\":\"1F937-200D-2640-FE0F\",\"c\":\"1F937-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[39,35],\"o\":4},\"notebook_with_decorative_cover\":{\"a\":\"Notebook with Decorative Cover\",\"b\":\"1F4D4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"classroom\",\"notes\",\"record\",\"paper\",\"study\"],\"k\":[26,42],\"o\":2},\"fuelpump\":{\"a\":\"Fuel Pump\",\"b\":\"26FD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"gas station\",\"petroleum\"],\"k\":[54,38],\"o\":2},\"name_badge\":{\"a\":\"Name Badge\",\"b\":\"1F4DB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"fire\",\"forbid\"],\"k\":[26,49],\"o\":2},\"mosquito\":{\"a\":\"Mosquito\",\"b\":\"1F99F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,49],\"o\":11},\"flag-gu\":{\"a\":\"Guam Flag\",\"b\":\"1F1EC-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,13],\"o\":2},\"smile_cat\":{\"a\":\"Grinning Cat Face with Smiling Eyes\",\"b\":\"1F638\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cats\",\"smile\"],\"k\":[31,34],\"o\":2},\"champagne\":{\"a\":\"Bottle with Popping Cork\",\"b\":\"1F37E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"drink\",\"wine\",\"bottle\",\"celebration\"],\"k\":[7,29],\"o\":2},\"joy_cat\":{\"a\":\"Cat Face with Tears of Joy\",\"b\":\"1F639\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cats\",\"haha\",\"happy\",\"tears\"],\"k\":[31,35],\"o\":2},\"closed_book\":{\"a\":\"Closed Book\",\"b\":\"1F4D5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"read\",\"library\",\"knowledge\",\"textbook\",\"learn\"],\"k\":[26,43],\"o\":2},\"health_worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-2695-FE0F\",\"non_qualified\":\"1F9D1-1F3FB-200D-2695\",\"image\":\"1f9d1-1f3fb-200d-2695-fe0f.png\",\"sheet_x\":47,\"sheet_y\":50,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-2695-FE0F\",\"non_qualified\":\"1F9D1-1F3FC-200D-2695\",\"image\":\"1f9d1-1f3fc-200d-2695-fe0f.png\",\"sheet_x\":47,\"sheet_y\":51,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-2695-FE0F\",\"non_qualified\":\"1F9D1-1F3FD-200D-2695\",\"image\":\"1f9d1-1f3fd-200d-2695-fe0f.png\",\"sheet_x\":47,\"sheet_y\":52,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-2695-FE0F\",\"non_qualified\":\"1F9D1-1F3FE-200D-2695\",\"image\":\"1f9d1-1f3fe-200d-2695-fe0f.png\",\"sheet_x\":47,\"sheet_y\":53,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-2695-FE0F\",\"non_qualified\":\"1F9D1-1F3FF-200D-2695\",\"image\":\"1f9d1-1f3ff-200d-2695-fe0f.png\",\"sheet_x\":47,\"sheet_y\":54,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Health Worker\",\"b\":\"1F9D1-200D-2695-FE0F\",\"c\":\"1F9D1-200D-2695\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[47,49],\"o\":12},\"rotating_light\":{\"a\":\"Police Cars Revolving Light\",\"b\":\"1F6A8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"police\",\"ambulance\",\"911\",\"emergency\",\"alert\",\"error\",\"pinged\",\"law\",\"legal\"],\"k\":[34,56],\"o\":2},\"microbe\":{\"a\":\"Microbe\",\"b\":\"1F9A0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[42,50],\"o\":11},\"flag-gw\":{\"a\":\"Guinea-Bissau Flag\",\"b\":\"1F1EC-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,14],\"o\":2},\"wine_glass\":{\"a\":\"Wine Glass\",\"b\":\"1F377\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"drink\",\"beverage\",\"drunk\",\"alcohol\",\"booze\"],\"k\":[7,22],\"o\":2},\"beginner\":{\"a\":\"Japanese Symbol for Beginner\",\"b\":\"1F530\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"badge\",\"shield\"],\"k\":[28,19],\"o\":2},\"bouquet\":{\"a\":\"Bouquet\",\"b\":\"1F490\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"flowers\",\"nature\",\"spring\"],\"k\":[25,26],\"o\":2},\"heart_eyes_cat\":{\"a\":\"Smiling Cat Face with Heart-Shaped Eyes\",\"b\":\"1F63B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"love\",\"like\",\"affection\",\"cats\",\"valentines\",\"heart\"],\"k\":[31,37],\"o\":2},\"male-doctor\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FB-200D-2695\",\"image\":\"1f468-1f3fb-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":3,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FC-200D-2695\",\"image\":\"1f468-1f3fc-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":4,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FD-200D-2695\",\"image\":\"1f468-1f3fd-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":5,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FE-200D-2695\",\"image\":\"1f468-1f3fe-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":6,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-2695-FE0F\",\"non_qualified\":\"1F468-1F3FF-200D-2695\",\"image\":\"1f468-1f3ff-200d-2695-fe0f.png\",\"sheet_x\":17,\"sheet_y\":7,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Doctor\",\"b\":\"1F468-200D-2695-FE0F\",\"c\":\"1F468-200D-2695\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,2],\"o\":4},\"book\":{\"a\":\"Open Book\",\"b\":\"1F4D6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[26,44],\"n\":[\"open_book\"],\"o\":2},\"traffic_light\":{\"a\":\"Horizontal Traffic Light\",\"b\":\"1F6A5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"signal\"],\"k\":[34,53],\"o\":2},\"cocktail\":{\"a\":\"Cocktail Glass\",\"b\":\"1F378\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"drink\",\"drunk\",\"alcohol\",\"beverage\",\"booze\",\"mojito\"],\"k\":[7,23],\"o\":2},\"o\":{\"a\":\"Heavy Large Circle\",\"b\":\"2B55\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"circle\",\"round\"],\"k\":[55,43],\"o\":2},\"flag-gy\":{\"a\":\"Guyana Flag\",\"b\":\"1F1EC-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,15],\"o\":2},\"female-doctor\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FB-200D-2695\",\"image\":\"1f469-1f3fb-200d-2695-fe0f.png\",\"sheet_x\":19,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FC-200D-2695\",\"image\":\"1f469-1f3fc-200d-2695-fe0f.png\",\"sheet_x\":19,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FD-200D-2695\",\"image\":\"1f469-1f3fd-200d-2695-fe0f.png\",\"sheet_x\":19,\"sheet_y\":47,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FE-200D-2695\",\"image\":\"1f469-1f3fe-200d-2695-fe0f.png\",\"sheet_x\":19,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-2695-FE0F\",\"non_qualified\":\"1F469-1F3FF-200D-2695\",\"image\":\"1f469-1f3ff-200d-2695-fe0f.png\",\"sheet_x\":19,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Doctor\",\"b\":\"1F469-200D-2695-FE0F\",\"c\":\"1F469-200D-2695\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,44],\"o\":4},\"smirk_cat\":{\"a\":\"Cat Face with Wry Smile\",\"b\":\"1F63C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cats\",\"smirk\"],\"k\":[31,38],\"o\":2},\"green_book\":{\"a\":\"Green Book\",\"b\":\"1F4D7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"read\",\"library\",\"knowledge\",\"study\"],\"k\":[26,45],\"o\":2},\"cherry_blossom\":{\"a\":\"Cherry Blossom\",\"b\":\"1F338\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"plant\",\"spring\",\"flower\"],\"k\":[6,16],\"o\":2},\"flag-hk\":{\"a\":\"Hong Kong Sar China Flag\",\"b\":\"1F1ED-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,16],\"o\":2},\"vertical_traffic_light\":{\"a\":\"Vertical Traffic Light\",\"b\":\"1F6A6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"driving\"],\"k\":[34,54],\"o\":2},\"white_check_mark\":{\"a\":\"White Heavy Check Mark\",\"b\":\"2705\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"green-square\",\"ok\",\"agree\",\"vote\",\"election\",\"answer\",\"tick\"],\"k\":[54,40],\"o\":2},\"tropical_drink\":{\"a\":\"Tropical Drink\",\"b\":\"1F379\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"beverage\",\"cocktail\",\"summer\",\"beach\",\"alcohol\",\"booze\",\"mojito\"],\"k\":[7,24],\"o\":2},\"kissing_cat\":{\"a\":\"Kissing Cat Face with Closed Eyes\",\"b\":\"1F63D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cats\",\"kiss\"],\"k\":[31,39],\"o\":2},\"flag-hm\":{\"a\":\"Heard & Mcdonald Islands Flag\",\"b\":\"1F1ED-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,17],\"o\":2},\"octagonal_sign\":{\"a\":\"Octagonal Sign\",\"b\":\"1F6D1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[36,39],\"o\":4},\"white_flower\":{\"a\":\"White Flower\",\"b\":\"1F4AE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"japanese\",\"spring\"],\"k\":[26,4],\"o\":2},\"ballot_box_with_check\":{\"a\":\"Ballot Box with Check\",\"b\":\"2611-FE0F\",\"c\":\"2611\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"ok\",\"agree\",\"confirm\",\"black-square\",\"vote\",\"election\",\"yes\",\"tick\"],\"k\":[52,55],\"o\":2},\"student\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F393\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f393.png\",\"sheet_x\":45,\"sheet_y\":30,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F393\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f393.png\",\"sheet_x\":45,\"sheet_y\":31,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F393\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f393.png\",\"sheet_x\":45,\"sheet_y\":32,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F393\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f393.png\",\"sheet_x\":45,\"sheet_y\":33,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F393\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f393.png\",\"sheet_x\":45,\"sheet_y\":34,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Student\",\"b\":\"1F9D1-200D-1F393\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[45,29],\"o\":12},\"blue_book\":{\"a\":\"Blue Book\",\"b\":\"1F4D8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"read\",\"library\",\"knowledge\",\"learn\",\"study\"],\"k\":[26,46],\"o\":2},\"beer\":{\"a\":\"Beer Mug\",\"b\":\"1F37A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"relax\",\"beverage\",\"drink\",\"drunk\",\"party\",\"pub\",\"summer\",\"alcohol\",\"booze\"],\"k\":[7,25],\"o\":2},\"construction\":{\"a\":\"Construction Sign\",\"b\":\"1F6A7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"wip\",\"progress\",\"caution\",\"warning\"],\"k\":[34,55],\"o\":2},\"rosette\":{\"a\":\"Rosette\",\"b\":\"1F3F5-FE0F\",\"c\":\"1F3F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"flower\",\"decoration\",\"military\"],\"k\":[11,18],\"o\":2},\"heavy_check_mark\":{\"a\":\"Heavy Check Mark\",\"b\":\"2714-FE0F\",\"c\":\"2714\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"ok\",\"nike\",\"answer\",\"yes\",\"tick\"],\"k\":[55,12],\"o\":2},\"scream_cat\":{\"a\":\"Weary Cat Face\",\"b\":\"1F640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cats\",\"munch\",\"scared\",\"scream\"],\"k\":[31,42],\"o\":2},\"orange_book\":{\"a\":\"Orange Book\",\"b\":\"1F4D9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"read\",\"library\",\"knowledge\",\"textbook\",\"study\"],\"k\":[26,47],\"o\":2},\"beers\":{\"a\":\"Clinking Beer Mugs\",\"b\":\"1F37B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"relax\",\"beverage\",\"drink\",\"drunk\",\"party\",\"pub\",\"summer\",\"alcohol\",\"booze\"],\"k\":[7,26],\"o\":2},\"male-student\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f393.png\",\"sheet_x\":14,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f393.png\",\"sheet_x\":14,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f393.png\",\"sheet_x\":14,\"sheet_y\":53,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f393.png\",\"sheet_x\":14,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F393\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f393.png\",\"sheet_x\":14,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Student\",\"b\":\"1F468-200D-1F393\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[14,50],\"o\":4},\"flag-hn\":{\"a\":\"Honduras Flag\",\"b\":\"1F1ED-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,18],\"o\":2},\"crying_cat_face\":{\"a\":\"Crying Cat Face\",\"b\":\"1F63F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"tears\",\"weep\",\"sad\",\"cats\",\"upset\",\"cry\"],\"k\":[31,41],\"o\":2},\"anchor\":{\"a\":\"Anchor\",\"b\":\"2693\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"ship\",\"ferry\",\"sea\",\"boat\"],\"k\":[53,42],\"o\":2},\"flag-hr\":{\"a\":\"Croatia Flag\",\"b\":\"1F1ED-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,19],\"o\":2},\"heavy_multiplication_x\":{\"a\":\"Heavy Multiplication X\",\"b\":\"2716-FE0F\",\"c\":\"2716\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"math\",\"calculation\"],\"k\":[55,13],\"o\":2},\"female-student\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f393.png\",\"sheet_x\":17,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f393.png\",\"sheet_x\":17,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f393.png\",\"sheet_x\":17,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f393.png\",\"sheet_x\":17,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F393\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f393.png\",\"sheet_x\":17,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Student\",\"b\":\"1F469-200D-1F393\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,40],\"o\":4},\"rose\":{\"a\":\"Rose\",\"b\":\"1F339\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"flowers\",\"valentines\",\"love\",\"spring\"],\"k\":[6,17],\"o\":2},\"books\":{\"a\":\"Books\",\"b\":\"1F4DA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"literature\",\"library\",\"study\"],\"k\":[26,48],\"o\":2},\"clinking_glasses\":{\"a\":\"Clinking Glasses\",\"b\":\"1F942\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"beverage\",\"drink\",\"party\",\"alcohol\",\"celebrate\",\"cheers\"],\"k\":[41,18],\"o\":4},\"teacher\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f3eb.png\",\"sheet_x\":45,\"sheet_y\":48,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f3eb.png\",\"sheet_x\":45,\"sheet_y\":49,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f3eb.png\",\"sheet_x\":45,\"sheet_y\":50,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f3eb.png\",\"sheet_x\":45,\"sheet_y\":51,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f3eb.png\",\"sheet_x\":45,\"sheet_y\":52,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Teacher\",\"b\":\"1F9D1-200D-1F3EB\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[45,47],\"o\":12},\"x\":{\"a\":\"Cross Mark\",\"b\":\"274C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"no\",\"delete\",\"remove\",\"cancel\"],\"k\":[55,21],\"o\":2},\"pouting_cat\":{\"a\":\"Pouting Cat Face\",\"b\":\"1F63E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"cats\"],\"k\":[31,40],\"o\":2},\"wilted_flower\":{\"a\":\"Wilted Flower\",\"b\":\"1F940\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"plant\",\"nature\",\"flower\"],\"k\":[41,16],\"o\":4},\"boat\":{\"a\":\"Sailboat\",\"b\":\"26F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[54,16],\"n\":[\"sailboat\"],\"o\":2},\"flag-ht\":{\"a\":\"Haiti Flag\",\"b\":\"1F1ED-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,20],\"o\":2},\"tumbler_glass\":{\"a\":\"Tumbler Glass\",\"b\":\"1F943\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"drink\",\"beverage\",\"drunk\",\"alcohol\",\"liquor\",\"booze\",\"bourbon\",\"scotch\",\"whisky\",\"glass\",\"shot\"],\"k\":[41,19],\"o\":4},\"notebook\":{\"a\":\"Notebook\",\"b\":\"1F4D3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stationery\",\"record\",\"notes\",\"paper\",\"study\"],\"k\":[26,41],\"o\":2},\"male-teacher\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f3eb.png\",\"sheet_x\":15,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f3eb.png\",\"sheet_x\":15,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f3eb.png\",\"sheet_x\":15,\"sheet_y\":14,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f3eb.png\",\"sheet_x\":15,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f3eb.png\",\"sheet_x\":15,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Teacher\",\"b\":\"1F468-200D-1F3EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,11],\"o\":4},\"ledger\":{\"a\":\"Ledger\",\"b\":\"1F4D2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"notes\",\"paper\"],\"k\":[26,40],\"o\":2},\"flag-hu\":{\"a\":\"Hungary Flag\",\"b\":\"1F1ED-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,21],\"o\":2},\"cup_with_straw\":{\"a\":\"Cup with Straw\",\"b\":\"1F964\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,51],\"o\":5},\"hibiscus\":{\"a\":\"Hibiscus\",\"b\":\"1F33A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"plant\",\"vegetable\",\"flowers\",\"beach\"],\"k\":[6,18],\"o\":2},\"see_no_evil\":{\"a\":\"See-No-Evil Monkey\",\"b\":\"1F648\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"monkey\",\"animal\",\"nature\",\"haha\"],\"k\":[32,44],\"o\":2},\"canoe\":{\"a\":\"Canoe\",\"b\":\"1F6F6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"boat\",\"paddle\",\"water\",\"ship\"],\"k\":[36,55],\"o\":4},\"negative_squared_cross_mark\":{\"a\":\"Negative Squared Cross Mark\",\"b\":\"274E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"x\",\"green-square\",\"no\",\"deny\"],\"k\":[55,22],\"o\":2},\"flag-ic\":{\"a\":\"Canary Islands Flag\",\"b\":\"1F1EE-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,22],\"o\":2},\"beverage_box\":{\"a\":\"Beverage Box\",\"b\":\"1F9C3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,11],\"o\":12},\"speedboat\":{\"a\":\"Speedboat\",\"b\":\"1F6A4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"ship\",\"transportation\",\"vehicle\",\"summer\"],\"k\":[34,52],\"o\":2},\"heavy_plus_sign\":{\"a\":\"Heavy Plus Sign\",\"b\":\"2795\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"math\",\"calculation\",\"addition\",\"more\",\"increase\"],\"k\":[55,29],\"o\":2},\"sunflower\":{\"a\":\"Sunflower\",\"b\":\"1F33B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"plant\",\"fall\"],\"k\":[6,19],\"o\":2},\"page_with_curl\":{\"a\":\"Page with Curl\",\"b\":\"1F4C3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"documents\",\"office\",\"paper\"],\"k\":[26,25],\"o\":2},\"female-teacher\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f3eb.png\",\"sheet_x\":18,\"sheet_y\":2,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f3eb.png\",\"sheet_x\":18,\"sheet_y\":3,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f3eb.png\",\"sheet_x\":18,\"sheet_y\":4,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f3eb.png\",\"sheet_x\":18,\"sheet_y\":5,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F3EB\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f3eb.png\",\"sheet_x\":18,\"sheet_y\":6,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Teacher\",\"b\":\"1F469-200D-1F3EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,1],\"o\":4},\"hear_no_evil\":{\"a\":\"Hear-No-Evil Monkey\",\"b\":\"1F649\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"monkey\",\"nature\"],\"k\":[32,45],\"o\":2},\"mate_drink\":{\"a\":\"Mate Drink\",\"b\":\"1F9C9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,17],\"o\":12},\"passenger_ship\":{\"a\":\"Passenger Ship\",\"b\":\"1F6F3-FE0F\",\"c\":\"1F6F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"yacht\",\"cruise\",\"ferry\"],\"k\":[36,52],\"o\":2},\"judge\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-2696-FE0F\",\"non_qualified\":\"1F9D1-1F3FB-200D-2696\",\"image\":\"1f9d1-1f3fb-200d-2696-fe0f.png\",\"sheet_x\":47,\"sheet_y\":56,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-2696-FE0F\",\"non_qualified\":\"1F9D1-1F3FC-200D-2696\",\"image\":\"1f9d1-1f3fc-200d-2696-fe0f.png\",\"sheet_x\":48,\"sheet_y\":0,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-2696-FE0F\",\"non_qualified\":\"1F9D1-1F3FD-200D-2696\",\"image\":\"1f9d1-1f3fd-200d-2696-fe0f.png\",\"sheet_x\":48,\"sheet_y\":1,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-2696-FE0F\",\"non_qualified\":\"1F9D1-1F3FE-200D-2696\",\"image\":\"1f9d1-1f3fe-200d-2696-fe0f.png\",\"sheet_x\":48,\"sheet_y\":2,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-2696-FE0F\",\"non_qualified\":\"1F9D1-1F3FF-200D-2696\",\"image\":\"1f9d1-1f3ff-200d-2696-fe0f.png\",\"sheet_x\":48,\"sheet_y\":3,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Judge\",\"b\":\"1F9D1-200D-2696-FE0F\",\"c\":\"1F9D1-200D-2696\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[47,55],\"o\":12},\"scroll\":{\"a\":\"Scroll\",\"b\":\"1F4DC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"documents\",\"ancient\",\"history\",\"paper\"],\"k\":[26,50],\"o\":2},\"blossom\":{\"a\":\"Blossom\",\"b\":\"1F33C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"flowers\",\"yellow\"],\"k\":[6,20],\"o\":2},\"flag-id\":{\"a\":\"Indonesia Flag\",\"b\":\"1F1EE-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,23],\"o\":2},\"speak_no_evil\":{\"a\":\"Speak-No-Evil Monkey\",\"b\":\"1F64A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"monkey\",\"animal\",\"nature\",\"omg\"],\"k\":[32,46],\"o\":2},\"heavy_minus_sign\":{\"a\":\"Heavy Minus Sign\",\"b\":\"2796\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"math\",\"calculation\",\"subtract\",\"less\"],\"k\":[55,30],\"o\":2},\"flag-ie\":{\"a\":\"Ireland Flag\",\"b\":\"1F1EE-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,24],\"o\":2},\"ice_cube\":{\"a\":\"Ice Cube\",\"b\":\"1F9CA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,18],\"o\":12},\"page_facing_up\":{\"a\":\"Page Facing Up\",\"b\":\"1F4C4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"documents\",\"office\",\"paper\",\"information\"],\"k\":[26,26],\"o\":2},\"male-judge\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FB-200D-2696\",\"image\":\"1f468-1f3fb-200d-2696-fe0f.png\",\"sheet_x\":17,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FC-200D-2696\",\"image\":\"1f468-1f3fc-200d-2696-fe0f.png\",\"sheet_x\":17,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FD-200D-2696\",\"image\":\"1f468-1f3fd-200d-2696-fe0f.png\",\"sheet_x\":17,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FE-200D-2696\",\"image\":\"1f468-1f3fe-200d-2696-fe0f.png\",\"sheet_x\":17,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-2696-FE0F\",\"non_qualified\":\"1F468-1F3FF-200D-2696\",\"image\":\"1f468-1f3ff-200d-2696-fe0f.png\",\"sheet_x\":17,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Judge\",\"b\":\"1F468-200D-2696-FE0F\",\"c\":\"1F468-200D-2696\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,8],\"o\":4},\"tulip\":{\"a\":\"Tulip\",\"b\":\"1F337\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"flowers\",\"plant\",\"nature\",\"summer\",\"spring\"],\"k\":[6,15],\"o\":2},\"ferry\":{\"a\":\"Ferry\",\"b\":\"26F4-FE0F\",\"c\":\"26F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"boat\",\"ship\",\"yacht\"],\"k\":[54,15],\"o\":2},\"kiss\":{\"a\":\"Kiss Mark\",\"b\":\"1F48B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"face\",\"lips\",\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,21],\"o\":2},\"heavy_division_sign\":{\"a\":\"Heavy Division Sign\",\"b\":\"2797\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"divide\",\"math\",\"calculation\"],\"k\":[55,31],\"o\":2},\"newspaper\":{\"a\":\"Newspaper\",\"b\":\"1F4F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"press\",\"headline\"],\"k\":[27,13],\"o\":2},\"female-judge\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FB-200D-2696\",\"image\":\"1f469-1f3fb-200d-2696-fe0f.png\",\"sheet_x\":19,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FC-200D-2696\",\"image\":\"1f469-1f3fc-200d-2696-fe0f.png\",\"sheet_x\":19,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FD-200D-2696\",\"image\":\"1f469-1f3fd-200d-2696-fe0f.png\",\"sheet_x\":19,\"sheet_y\":53,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FE-200D-2696\",\"image\":\"1f469-1f3fe-200d-2696-fe0f.png\",\"sheet_x\":19,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-2696-FE0F\",\"non_qualified\":\"1F469-1F3FF-200D-2696\",\"image\":\"1f469-1f3ff-200d-2696-fe0f.png\",\"sheet_x\":19,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Judge\",\"b\":\"1F469-200D-2696-FE0F\",\"c\":\"1F469-200D-2696\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,50],\"o\":4},\"seedling\":{\"a\":\"Seedling\",\"b\":\"1F331\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"plant\",\"nature\",\"grass\",\"lawn\",\"spring\"],\"k\":[6,9],\"o\":2},\"love_letter\":{\"a\":\"Love Letter\",\"b\":\"1F48C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"email\",\"like\",\"affection\",\"envelope\",\"valentines\"],\"k\":[25,22],\"o\":2},\"chopsticks\":{\"a\":\"Chopsticks\",\"b\":\"1F962\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,49],\"o\":5},\"motor_boat\":{\"a\":\"Motor Boat\",\"b\":\"1F6E5-FE0F\",\"c\":\"1F6E5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"ship\"],\"k\":[36,47],\"o\":2},\"flag-il\":{\"a\":\"Israel Flag\",\"b\":\"1F1EE-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,25],\"o\":2},\"curly_loop\":{\"a\":\"Curly Loop\",\"b\":\"27B0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"scribble\",\"draw\",\"shape\",\"squiggle\"],\"k\":[55,33],\"o\":2},\"flag-im\":{\"a\":\"Isle of Man Flag\",\"b\":\"1F1EE-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,26],\"o\":2},\"evergreen_tree\":{\"a\":\"Evergreen Tree\",\"b\":\"1F332\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"plant\",\"nature\"],\"k\":[6,10],\"o\":2},\"cupid\":{\"a\":\"Heart with Arrow\",\"b\":\"1F498\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"heart\",\"affection\",\"valentines\"],\"k\":[25,34],\"o\":2},\"loop\":{\"a\":\"Double Curly Loop\",\"b\":\"27BF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"tape\",\"cassette\"],\"k\":[55,34],\"o\":2},\"ship\":{\"a\":\"Ship\",\"b\":\"1F6A2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"titanic\",\"deploy\"],\"k\":[34,33],\"o\":2},\"farmer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f33e.png\",\"sheet_x\":45,\"sheet_y\":18,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f33e.png\",\"sheet_x\":45,\"sheet_y\":19,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f33e.png\",\"sheet_x\":45,\"sheet_y\":20,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f33e.png\",\"sheet_x\":45,\"sheet_y\":21,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f33e.png\",\"sheet_x\":45,\"sheet_y\":22,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Farmer\",\"b\":\"1F9D1-200D-1F33E\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[45,17],\"o\":12},\"rolled_up_newspaper\":{\"a\":\"Rolled Up Newspaper\",\"b\":\"1F5DE-FE0F\",\"c\":\"1F5DE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,23],\"o\":2},\"knife_fork_plate\":{\"a\":\"Knife Fork Plate\",\"b\":\"1F37D-FE0F\",\"c\":\"1F37D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[7,28],\"o\":2},\"fork_and_knife\":{\"a\":\"Fork and Knife\",\"b\":\"1F374\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"cutlery\",\"kitchen\"],\"k\":[7,19],\"o\":2},\"male-farmer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f33e.png\",\"sheet_x\":14,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f33e.png\",\"sheet_x\":14,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f33e.png\",\"sheet_x\":14,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f33e.png\",\"sheet_x\":14,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f33e.png\",\"sheet_x\":14,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Farmer\",\"b\":\"1F468-200D-1F33E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[14,38],\"o\":4},\"bookmark_tabs\":{\"a\":\"Bookmark Tabs\",\"b\":\"1F4D1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"favorite\",\"save\",\"order\",\"tidy\"],\"k\":[26,39],\"o\":2},\"part_alternation_mark\":{\"a\":\"Part Alternation Mark\",\"b\":\"303D-FE0F\",\"c\":\"303D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"graph\",\"presentation\",\"stats\",\"business\",\"economics\",\"bad\"],\"k\":[55,45],\"o\":2},\"flag-in\":{\"a\":\"India Flag\",\"b\":\"1F1EE-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,27],\"o\":2},\"gift_heart\":{\"a\":\"Heart with Ribbon\",\"b\":\"1F49D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"valentines\"],\"k\":[25,39],\"o\":2},\"airplane\":{\"a\":\"Airplane\",\"b\":\"2708-FE0F\",\"c\":\"2708\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"transportation\",\"flight\",\"fly\"],\"k\":[54,41],\"o\":2},\"deciduous_tree\":{\"a\":\"Deciduous Tree\",\"b\":\"1F333\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"plant\",\"nature\"],\"k\":[6,11],\"o\":2},\"spoon\":{\"a\":\"Spoon\",\"b\":\"1F944\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"cutlery\",\"kitchen\",\"tableware\"],\"k\":[41,20],\"o\":4},\"flag-io\":{\"a\":\"British Indian Ocean Territory Flag\",\"b\":\"1F1EE-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,28],\"o\":2},\"palm_tree\":{\"a\":\"Palm Tree\",\"b\":\"1F334\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"plant\",\"vegetable\",\"nature\",\"summer\",\"beach\",\"mojito\",\"tropical\"],\"k\":[6,12],\"o\":2},\"sparkling_heart\":{\"a\":\"Sparkling Heart\",\"b\":\"1F496\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,32],\"o\":2},\"female-farmer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f33e.png\",\"sheet_x\":17,\"sheet_y\":29,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f33e.png\",\"sheet_x\":17,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f33e.png\",\"sheet_x\":17,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f33e.png\",\"sheet_x\":17,\"sheet_y\":32,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F33E\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f33e.png\",\"sheet_x\":17,\"sheet_y\":33,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Farmer\",\"b\":\"1F469-200D-1F33E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,28],\"o\":4},\"eight_spoked_asterisk\":{\"a\":\"Eight Spoked Asterisk\",\"b\":\"2733-FE0F\",\"c\":\"2733\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"star\",\"sparkle\",\"green-square\"],\"k\":[55,17],\"o\":2},\"small_airplane\":{\"a\":\"Small Airplane\",\"b\":\"1F6E9-FE0F\",\"c\":\"1F6E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"flight\",\"transportation\",\"fly\",\"vehicle\"],\"k\":[36,48],\"o\":2},\"bookmark\":{\"a\":\"Bookmark\",\"b\":\"1F516\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"favorite\",\"label\",\"save\"],\"k\":[27,50],\"o\":2},\"cook\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F373\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f373.png\",\"sheet_x\":45,\"sheet_y\":24,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F373\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f373.png\",\"sheet_x\":45,\"sheet_y\":25,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F373\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f373.png\",\"sheet_x\":45,\"sheet_y\":26,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F373\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f373.png\",\"sheet_x\":45,\"sheet_y\":27,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F373\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f373.png\",\"sheet_x\":45,\"sheet_y\":28,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Cook\",\"b\":\"1F9D1-200D-1F373\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[45,23],\"o\":12},\"eight_pointed_black_star\":{\"a\":\"Eight Pointed Black Star\",\"b\":\"2734-FE0F\",\"c\":\"2734\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"orange-square\",\"shape\",\"polygon\"],\"k\":[55,18],\"o\":2},\"heartpulse\":{\"a\":\"Growing Heart\",\"b\":\"1F497\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"like\",\"love\",\"affection\",\"valentines\",\"pink\"],\"k\":[25,33],\"o\":2},\"label\":{\"a\":\"Label\",\"b\":\"1F3F7-FE0F\",\"c\":\"1F3F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sale\",\"tag\"],\"k\":[11,19],\"o\":2},\"flag-iq\":{\"a\":\"Iraq Flag\",\"b\":\"1F1EE-1F1F6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,29],\"o\":2},\"hocho\":{\"a\":\"Hocho\",\"b\":\"1F52A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"knife\",\"blade\",\"cutlery\",\"kitchen\",\"weapon\"],\"k\":[28,13],\"n\":[\"knife\"],\"o\":2},\"cactus\":{\"a\":\"Cactus\",\"b\":\"1F335\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vegetable\",\"plant\",\"nature\"],\"k\":[6,13],\"o\":2},\"airplane_departure\":{\"a\":\"Airplane Departure\",\"b\":\"1F6EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[36,49],\"o\":2},\"airplane_arriving\":{\"a\":\"Airplane Arriving\",\"b\":\"1F6EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[36,50],\"o\":2},\"ear_of_rice\":{\"a\":\"Ear of Rice\",\"b\":\"1F33E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"plant\"],\"k\":[6,22],\"o\":2},\"flag-ir\":{\"a\":\"Iran Flag\",\"b\":\"1F1EE-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,30],\"o\":2},\"moneybag\":{\"a\":\"Money Bag\",\"b\":\"1F4B0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dollar\",\"payment\",\"coins\",\"sale\"],\"k\":[26,6],\"o\":2},\"male-cook\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f373.png\",\"sheet_x\":14,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f373.png\",\"sheet_x\":14,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f373.png\",\"sheet_x\":14,\"sheet_y\":47,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f373.png\",\"sheet_x\":14,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F373\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f373.png\",\"sheet_x\":14,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Cook\",\"b\":\"1F468-200D-1F373\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[14,44],\"o\":4},\"heartbeat\":{\"a\":\"Beating Heart\",\"b\":\"1F493\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\",\"pink\",\"heart\"],\"k\":[25,29],\"o\":2},\"sparkle\":{\"a\":\"Sparkle\",\"b\":\"2747-FE0F\",\"c\":\"2747\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stars\",\"green-square\",\"awesome\",\"good\",\"fireworks\"],\"k\":[55,20],\"o\":2},\"amphora\":{\"a\":\"Amphora\",\"b\":\"1F3FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vase\",\"jar\"],\"k\":[11,22],\"o\":2},\"yen\":{\"a\":\"Banknote with Yen Sign\",\"b\":\"1F4B4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"money\",\"sales\",\"japanese\",\"dollar\",\"currency\"],\"k\":[26,10],\"o\":2},\"revolving_hearts\":{\"a\":\"Revolving Hearts\",\"b\":\"1F49E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,40],\"o\":2},\"bangbang\":{\"a\":\"Double Exclamation Mark\",\"b\":\"203C-FE0F\",\"c\":\"203C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"exclamation\",\"surprise\"],\"k\":[52,10],\"o\":2},\"parachute\":{\"a\":\"Parachute\",\"b\":\"1FA82\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,3],\"o\":12},\"herb\":{\"a\":\"Herb\",\"b\":\"1F33F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vegetable\",\"plant\",\"medicine\",\"weed\",\"grass\",\"lawn\"],\"k\":[6,23],\"o\":2},\"flag-is\":{\"a\":\"Iceland Flag\",\"b\":\"1F1EE-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,31],\"o\":2},\"female-cook\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f373.png\",\"sheet_x\":17,\"sheet_y\":35,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f373.png\",\"sheet_x\":17,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f373.png\",\"sheet_x\":17,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f373.png\",\"sheet_x\":17,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F373\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f373.png\",\"sheet_x\":17,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Cook\",\"b\":\"1F469-200D-1F373\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,34],\"o\":4},\"mechanic\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F527\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f527.png\",\"sheet_x\":46,\"sheet_y\":15,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F527\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f527.png\",\"sheet_x\":46,\"sheet_y\":16,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F527\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f527.png\",\"sheet_x\":46,\"sheet_y\":17,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F527\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f527.png\",\"sheet_x\":46,\"sheet_y\":18,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F527\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f527.png\",\"sheet_x\":46,\"sheet_y\":19,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Mechanic\",\"b\":\"1F9D1-200D-1F527\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[46,14],\"o\":12},\"interrobang\":{\"a\":\"Exclamation Question Mark\",\"b\":\"2049-FE0F\",\"c\":\"2049\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"wat\",\"punctuation\",\"surprise\"],\"k\":[52,11],\"o\":2},\"seat\":{\"a\":\"Seat\",\"b\":\"1F4BA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sit\",\"airplane\",\"transport\",\"bus\",\"flight\",\"fly\"],\"k\":[26,16],\"o\":2},\"dollar\":{\"a\":\"Banknote with Dollar Sign\",\"b\":\"1F4B5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"money\",\"sales\",\"bill\",\"currency\"],\"k\":[26,11],\"o\":2},\"two_hearts\":{\"a\":\"Two Hearts\",\"b\":\"1F495\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\",\"heart\"],\"k\":[25,31],\"o\":2},\"it\":{\"a\":\"Italy Flag\",\"b\":\"1F1EE-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"italy\",\"flag\",\"nation\",\"country\",\"banner\"],\"k\":[2,32],\"n\":[\"flag-it\"],\"o\":2},\"shamrock\":{\"a\":\"Shamrock\",\"b\":\"2618-FE0F\",\"c\":\"2618\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vegetable\",\"plant\",\"nature\",\"irish\",\"clover\"],\"k\":[53,1],\"o\":2},\"four_leaf_clover\":{\"a\":\"Four Leaf Clover\",\"b\":\"1F340\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vegetable\",\"plant\",\"nature\",\"lucky\",\"irish\"],\"k\":[6,24],\"o\":2},\"euro\":{\"a\":\"Banknote with Euro Sign\",\"b\":\"1F4B6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"money\",\"sales\",\"dollar\",\"currency\"],\"k\":[26,12],\"o\":2},\"question\":{\"a\":\"Black Question Mark Ornament\",\"b\":\"2753\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"doubt\",\"confused\"],\"k\":[55,23],\"o\":2},\"helicopter\":{\"a\":\"Helicopter\",\"b\":\"1F681\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\",\"fly\"],\"k\":[34,0],\"o\":2},\"heart_decoration\":{\"a\":\"Heart Decoration\",\"b\":\"1F49F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"purple-square\",\"love\",\"like\"],\"k\":[25,41],\"o\":2},\"flag-je\":{\"a\":\"Jersey Flag\",\"b\":\"1F1EF-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,33],\"o\":2},\"male-mechanic\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f527.png\",\"sheet_x\":15,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f527.png\",\"sheet_x\":15,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f527.png\",\"sheet_x\":15,\"sheet_y\":53,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f527.png\",\"sheet_x\":15,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F527\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f527.png\",\"sheet_x\":15,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Mechanic\",\"b\":\"1F468-200D-1F527\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,50],\"o\":4},\"suspension_railway\":{\"a\":\"Suspension Railway\",\"b\":\"1F69F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vehicle\",\"transportation\"],\"k\":[34,30],\"o\":2},\"heavy_heart_exclamation_mark_ornament\":{\"a\":\"Heavy Heart Exclamation Mark Ornament\",\"b\":\"2763-FE0F\",\"c\":\"2763\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[55,27],\"o\":2},\"female-mechanic\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f527.png\",\"sheet_x\":18,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f527.png\",\"sheet_x\":18,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f527.png\",\"sheet_x\":18,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f527.png\",\"sheet_x\":18,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F527\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f527.png\",\"sheet_x\":18,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Mechanic\",\"b\":\"1F469-200D-1F527\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,35],\"o\":4},\"flag-jm\":{\"a\":\"Jamaica Flag\",\"b\":\"1F1EF-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,34],\"o\":2},\"grey_question\":{\"a\":\"White Question Mark Ornament\",\"b\":\"2754\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"doubts\",\"gray\",\"huh\",\"confused\"],\"k\":[55,24],\"o\":2},\"maple_leaf\":{\"a\":\"Maple Leaf\",\"b\":\"1F341\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"plant\",\"vegetable\",\"ca\",\"fall\"],\"k\":[6,25],\"o\":2},\"pound\":{\"a\":\"Banknote with Pound Sign\",\"b\":\"1F4B7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"british\",\"sterling\",\"money\",\"sales\",\"bills\",\"uk\",\"england\",\"currency\"],\"k\":[26,13],\"o\":2},\"money_with_wings\":{\"a\":\"Money with Wings\",\"b\":\"1F4B8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dollar\",\"bills\",\"payment\",\"sale\"],\"k\":[26,14],\"o\":2},\"flag-jo\":{\"a\":\"Jordan Flag\",\"b\":\"1F1EF-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,35],\"o\":2},\"fallen_leaf\":{\"a\":\"Fallen Leaf\",\"b\":\"1F342\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"plant\",\"vegetable\",\"leaves\"],\"k\":[6,26],\"o\":2},\"factory_worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f3ed.png\",\"sheet_x\":45,\"sheet_y\":54,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f3ed.png\",\"sheet_x\":45,\"sheet_y\":55,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f3ed.png\",\"sheet_x\":45,\"sheet_y\":56,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f3ed.png\",\"sheet_x\":46,\"sheet_y\":0,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f3ed.png\",\"sheet_x\":46,\"sheet_y\":1,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Factory Worker\",\"b\":\"1F9D1-200D-1F3ED\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[45,53],\"o\":12},\"broken_heart\":{\"a\":\"Broken Heart\",\"b\":\"1F494\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sad\",\"sorry\",\"break\",\"heart\",\"heartbreak\"],\"k\":[25,30],\"l\":[\"</3\"],\"m\":\"</3\",\"o\":2},\"grey_exclamation\":{\"a\":\"White Exclamation Mark Ornament\",\"b\":\"2755\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"surprise\",\"punctuation\",\"gray\",\"wow\",\"warning\"],\"k\":[55,25],\"o\":2},\"mountain_cableway\":{\"a\":\"Mountain Cableway\",\"b\":\"1F6A0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\",\"ski\"],\"k\":[34,31],\"o\":2},\"exclamation\":{\"a\":\"Heavy Exclamation Mark Symbol\",\"b\":\"2757\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"heavy_exclamation_mark\",\"danger\",\"surprise\",\"punctuation\",\"wow\",\"warning\"],\"k\":[55,26],\"n\":[\"heavy_exclamation_mark\"],\"o\":2},\"leaves\":{\"a\":\"Leaf Fluttering in Wind\",\"b\":\"1F343\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"plant\",\"tree\",\"vegetable\",\"grass\",\"lawn\",\"spring\"],\"k\":[6,27],\"o\":2},\"heart\":{\"a\":\"Heavy Black Heart\",\"b\":\"2764-FE0F\",\"c\":\"2764\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"valentines\"],\"k\":[55,28],\"l\":[\"<3\"],\"m\":\"<3\",\"o\":2},\"jp\":{\"a\":\"Japan Flag\",\"b\":\"1F1EF-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"japanese\",\"nation\",\"flag\",\"country\",\"banner\"],\"k\":[2,36],\"n\":[\"flag-jp\"],\"o\":2},\"male-factory-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f3ed.png\",\"sheet_x\":15,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f3ed.png\",\"sheet_x\":15,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f3ed.png\",\"sheet_x\":15,\"sheet_y\":20,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f3ed.png\",\"sheet_x\":15,\"sheet_y\":21,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f3ed.png\",\"sheet_x\":15,\"sheet_y\":22,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Factory Worker\",\"b\":\"1F468-200D-1F3ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,17],\"o\":4},\"credit_card\":{\"a\":\"Credit Card\",\"b\":\"1F4B3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"money\",\"sales\",\"dollar\",\"bill\",\"payment\",\"shopping\"],\"k\":[26,9],\"o\":2},\"aerial_tramway\":{\"a\":\"Aerial Tramway\",\"b\":\"1F6A1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"transportation\",\"vehicle\",\"ski\"],\"k\":[34,32],\"o\":2},\"female-factory-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f3ed.png\",\"sheet_x\":18,\"sheet_y\":8,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f3ed.png\",\"sheet_x\":18,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f3ed.png\",\"sheet_x\":18,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f3ed.png\",\"sheet_x\":18,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F3ED\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f3ed.png\",\"sheet_x\":18,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Factory Worker\",\"b\":\"1F469-200D-1F3ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,7],\"o\":4},\"receipt\":{\"a\":\"Receipt\",\"b\":\"1F9FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,49],\"o\":11},\"wavy_dash\":{\"a\":\"Wavy Dash\",\"b\":\"3030-FE0F\",\"c\":\"3030\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"draw\",\"line\",\"moustache\",\"mustache\",\"squiggle\",\"scribble\"],\"k\":[55,44],\"o\":2},\"flag-ke\":{\"a\":\"Kenya Flag\",\"b\":\"1F1F0-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,37],\"o\":2},\"satellite\":{\"a\":\"Satellite\",\"b\":\"1F6F0-FE0F\",\"c\":\"1F6F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"communication\",\"future\",\"radio\",\"space\"],\"k\":[36,51],\"o\":2},\"orange_heart\":{\"a\":\"Orange Heart\",\"b\":\"1F9E1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,20],\"o\":5},\"yellow_heart\":{\"a\":\"Yellow Heart\",\"b\":\"1F49B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,37],\"m\":\"<3\",\"o\":2},\"copyright\":{\"a\":\"Copyright Sign\",\"b\":\"00A9-FE0F\",\"c\":\"00A9\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"ip\",\"license\",\"circle\",\"law\",\"legal\"],\"k\":[0,12],\"o\":2},\"rocket\":{\"a\":\"Rocket\",\"b\":\"1F680\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"launch\",\"ship\",\"staffmode\",\"NASA\",\"outer space\",\"outer_space\",\"fly\"],\"k\":[33,56],\"o\":2},\"chart\":{\"a\":\"Chart with Upwards Trend and Yen Sign\",\"b\":\"1F4B9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"green-square\",\"graph\",\"presentation\",\"stats\"],\"k\":[26,15],\"o\":2},\"flag-kg\":{\"a\":\"Kyrgyzstan Flag\",\"b\":\"1F1F0-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,38],\"o\":2},\"office_worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f4bc.png\",\"sheet_x\":46,\"sheet_y\":9,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f4bc.png\",\"sheet_x\":46,\"sheet_y\":10,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f4bc.png\",\"sheet_x\":46,\"sheet_y\":11,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f4bc.png\",\"sheet_x\":46,\"sheet_y\":12,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f4bc.png\",\"sheet_x\":46,\"sheet_y\":13,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Office Worker\",\"b\":\"1F9D1-200D-1F4BC\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[46,8],\"o\":12},\"currency_exchange\":{\"a\":\"Currency Exchange\",\"b\":\"1F4B1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"money\",\"sales\",\"dollar\",\"travel\"],\"k\":[26,7],\"o\":2},\"registered\":{\"a\":\"Registered Sign\",\"b\":\"00AE-FE0F\",\"c\":\"00AE\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"alphabet\",\"circle\"],\"k\":[0,13],\"o\":2},\"green_heart\":{\"a\":\"Green Heart\",\"b\":\"1F49A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,36],\"m\":\"<3\",\"o\":2},\"flying_saucer\":{\"a\":\"Flying Saucer\",\"b\":\"1F6F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,0],\"o\":5},\"flag-kh\":{\"a\":\"Cambodia Flag\",\"b\":\"1F1F0-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,39],\"o\":2},\"male-office-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f4bc.png\",\"sheet_x\":15,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f4bc.png\",\"sheet_x\":15,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f4bc.png\",\"sheet_x\":15,\"sheet_y\":47,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f4bc.png\",\"sheet_x\":15,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f4bc.png\",\"sheet_x\":15,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Office Worker\",\"b\":\"1F468-200D-1F4BC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,44],\"o\":4},\"tm\":{\"a\":\"Trade Mark Sign\",\"b\":\"2122-FE0F\",\"c\":\"2122\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"trademark\",\"brand\",\"law\",\"legal\"],\"k\":[52,12],\"o\":2},\"bellhop_bell\":{\"a\":\"Bellhop Bell\",\"b\":\"1F6CE-FE0F\",\"c\":\"1F6CE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"service\"],\"k\":[36,36],\"o\":2},\"blue_heart\":{\"a\":\"Blue Heart\",\"b\":\"1F499\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,35],\"m\":\"<3\",\"o\":2},\"flag-ki\":{\"a\":\"Kiribati Flag\",\"b\":\"1F1F0-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,40],\"o\":2},\"heavy_dollar_sign\":{\"a\":\"Heavy Dollar Sign\",\"b\":\"1F4B2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"money\",\"sales\",\"payment\",\"currency\",\"buck\"],\"k\":[26,8],\"o\":2},\"female-office-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f4bc.png\",\"sheet_x\":18,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f4bc.png\",\"sheet_x\":18,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f4bc.png\",\"sheet_x\":18,\"sheet_y\":32,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f4bc.png\",\"sheet_x\":18,\"sheet_y\":33,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F4BC\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f4bc.png\",\"sheet_x\":18,\"sheet_y\":34,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Office Worker\",\"b\":\"1F469-200D-1F4BC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,29],\"o\":4},\"purple_heart\":{\"a\":\"Purple Heart\",\"b\":\"1F49C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"love\",\"like\",\"affection\",\"valentines\"],\"k\":[25,38],\"m\":\"<3\",\"o\":2},\"scientist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f52c.png\",\"sheet_x\":46,\"sheet_y\":21,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f52c.png\",\"sheet_x\":46,\"sheet_y\":22,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f52c.png\",\"sheet_x\":46,\"sheet_y\":23,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f52c.png\",\"sheet_x\":46,\"sheet_y\":24,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f52c.png\",\"sheet_x\":46,\"sheet_y\":25,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Scientist\",\"b\":\"1F9D1-200D-1F52C\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[46,20],\"o\":12},\"luggage\":{\"a\":\"Luggage\",\"b\":\"1F9F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,38],\"o\":11},\"hash\":{\"a\":\"Hash Key\",\"b\":\"0023-FE0F-20E3\",\"c\":\"0023-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"symbol\",\"blue-square\",\"twitter\"],\"k\":[0,0],\"o\":0},\"flag-km\":{\"a\":\"Comoros Flag\",\"b\":\"1F1F0-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,41],\"o\":2},\"email\":{\"a\":\"Envelope\",\"b\":\"2709-FE0F\",\"c\":\"2709\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"letter\",\"postal\",\"inbox\",\"communication\"],\"k\":[54,42],\"n\":[\"envelope\"],\"o\":2},\"e-mail\":{\"a\":\"E-Mail Symbol\",\"b\":\"1F4E7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"communication\",\"inbox\"],\"k\":[27,4],\"o\":2},\"keycap_star\":{\"a\":\"Keycap Star\",\"b\":\"002A-FE0F-20E3\",\"c\":\"002A-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[0,1],\"o\":0},\"flag-kn\":{\"a\":\"St. Kitts & Nevis Flag\",\"b\":\"1F1F0-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,42],\"o\":2},\"hourglass\":{\"a\":\"Hourglass\",\"b\":\"231B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"clock\",\"oldschool\",\"limit\",\"exam\",\"quiz\",\"test\"],\"k\":[52,23],\"o\":2},\"brown_heart\":{\"a\":\"Brown Heart\",\"b\":\"1F90E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,16],\"o\":12},\"male-scientist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f52c.png\",\"sheet_x\":16,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f52c.png\",\"sheet_x\":16,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f52c.png\",\"sheet_x\":16,\"sheet_y\":2,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f52c.png\",\"sheet_x\":16,\"sheet_y\":3,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f52c.png\",\"sheet_x\":16,\"sheet_y\":4,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Scientist\",\"b\":\"1F468-200D-1F52C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,56],\"o\":4},\"hourglass_flowing_sand\":{\"a\":\"Hourglass with Flowing Sand\",\"b\":\"23F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"oldschool\",\"time\",\"countdown\"],\"k\":[52,36],\"o\":2},\"black_heart\":{\"a\":\"Black Heart\",\"b\":\"1F5A4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"evil\"],\"k\":[30,9],\"o\":4},\"zero\":{\"a\":\"Keycap 0\",\"b\":\"0030-FE0F-20E3\",\"c\":\"0030-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"0\",\"numbers\",\"blue-square\",\"null\"],\"k\":[0,2],\"o\":0},\"incoming_envelope\":{\"a\":\"Incoming Envelope\",\"b\":\"1F4E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"email\",\"inbox\"],\"k\":[27,5],\"o\":2},\"flag-kp\":{\"a\":\"North Korea Flag\",\"b\":\"1F1F0-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,43],\"o\":2},\"female-scientist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f52c.png\",\"sheet_x\":18,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f52c.png\",\"sheet_x\":18,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f52c.png\",\"sheet_x\":18,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f52c.png\",\"sheet_x\":18,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F52C\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f52c.png\",\"sheet_x\":18,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Scientist\",\"b\":\"1F469-200D-1F52C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,41],\"o\":4},\"watch\":{\"a\":\"Watch\",\"b\":\"231A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"accessories\"],\"k\":[52,22],\"o\":2},\"white_heart\":{\"a\":\"White Heart\",\"b\":\"1F90D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,15],\"o\":12},\"one\":{\"a\":\"Keycap 1\",\"b\":\"0031-FE0F-20E3\",\"c\":\"0031-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"blue-square\",\"numbers\",\"1\"],\"k\":[0,3],\"o\":0},\"kr\":{\"a\":\"South Korea Flag\",\"b\":\"1F1F0-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"south\",\"korea\",\"nation\",\"flag\",\"country\",\"banner\"],\"k\":[2,44],\"n\":[\"flag-kr\"],\"o\":2},\"envelope_with_arrow\":{\"a\":\"Envelope with Downwards Arrow Above\",\"b\":\"1F4E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"email\",\"communication\"],\"k\":[27,6],\"o\":2},\"technologist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f4bb.png\",\"sheet_x\":46,\"sheet_y\":3,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f4bb.png\",\"sheet_x\":46,\"sheet_y\":4,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f4bb.png\",\"sheet_x\":46,\"sheet_y\":5,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f4bb.png\",\"sheet_x\":46,\"sheet_y\":6,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f4bb.png\",\"sheet_x\":46,\"sheet_y\":7,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Technologist\",\"b\":\"1F9D1-200D-1F4BB\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[46,2],\"o\":12},\"outbox_tray\":{\"a\":\"Outbox Tray\",\"b\":\"1F4E4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"inbox\",\"email\"],\"k\":[27,1],\"o\":2},\"male-technologist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f4bb.png\",\"sheet_x\":15,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f4bb.png\",\"sheet_x\":15,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f4bb.png\",\"sheet_x\":15,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f4bb.png\",\"sheet_x\":15,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f4bb.png\",\"sheet_x\":15,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Technologist\",\"b\":\"1F468-200D-1F4BB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,38],\"o\":4},\"alarm_clock\":{\"a\":\"Alarm Clock\",\"b\":\"23F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"wake\"],\"k\":[52,33],\"o\":2},\"flag-kw\":{\"a\":\"Kuwait Flag\",\"b\":\"1F1F0-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,45],\"o\":2},\"two\":{\"a\":\"Keycap 2\",\"b\":\"0032-FE0F-20E3\",\"c\":\"0032-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"numbers\",\"2\",\"prime\",\"blue-square\"],\"k\":[0,4],\"o\":0},\"anger\":{\"a\":\"Anger Symbol\",\"b\":\"1F4A2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"angry\",\"mad\"],\"k\":[25,44],\"o\":2},\"inbox_tray\":{\"a\":\"Inbox Tray\",\"b\":\"1F4E5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"email\",\"documents\"],\"k\":[27,2],\"o\":2},\"three\":{\"a\":\"Keycap 3\",\"b\":\"0033-FE0F-20E3\",\"c\":\"0033-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"3\",\"numbers\",\"prime\",\"blue-square\"],\"k\":[0,5],\"o\":0},\"flag-ky\":{\"a\":\"Cayman Islands Flag\",\"b\":\"1F1F0-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,46],\"o\":2},\"stopwatch\":{\"a\":\"Stopwatch\",\"b\":\"23F1-FE0F\",\"c\":\"23F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"deadline\"],\"k\":[52,34],\"o\":2},\"female-technologist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f4bb.png\",\"sheet_x\":18,\"sheet_y\":24,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f4bb.png\",\"sheet_x\":18,\"sheet_y\":25,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f4bb.png\",\"sheet_x\":18,\"sheet_y\":26,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f4bb.png\",\"sheet_x\":18,\"sheet_y\":27,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F4BB\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f4bb.png\",\"sheet_x\":18,\"sheet_y\":28,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Technologist\",\"b\":\"1F469-200D-1F4BB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,23],\"o\":4},\"boom\":{\"a\":\"Collision Symbol\",\"b\":\"1F4A5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bomb\",\"explode\",\"explosion\",\"collision\",\"blown\"],\"k\":[25,47],\"n\":[\"collision\"],\"o\":2},\"flag-kz\":{\"a\":\"Kazakhstan Flag\",\"b\":\"1F1F0-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,47],\"o\":2},\"four\":{\"a\":\"Keycap 4\",\"b\":\"0034-FE0F-20E3\",\"c\":\"0034-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"4\",\"numbers\",\"blue-square\"],\"k\":[0,6],\"o\":0},\"timer_clock\":{\"a\":\"Timer Clock\",\"b\":\"23F2-FE0F\",\"c\":\"23F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"alarm\"],\"k\":[52,35],\"o\":2},\"singer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f3a4.png\",\"sheet_x\":45,\"sheet_y\":36,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f3a4.png\",\"sheet_x\":45,\"sheet_y\":37,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f3a4.png\",\"sheet_x\":45,\"sheet_y\":38,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f3a4.png\",\"sheet_x\":45,\"sheet_y\":39,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f3a4.png\",\"sheet_x\":45,\"sheet_y\":40,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Singer\",\"b\":\"1F9D1-200D-1F3A4\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[45,35],\"o\":12},\"package\":{\"a\":\"Package\",\"b\":\"1F4E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"mail\",\"gift\",\"cardboard\",\"box\",\"moving\"],\"k\":[27,3],\"o\":2},\"mailbox\":{\"a\":\"Closed Mailbox with Raised Flag\",\"b\":\"1F4EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"email\",\"inbox\",\"communication\"],\"k\":[27,8],\"o\":2},\"flag-la\":{\"a\":\"Laos Flag\",\"b\":\"1F1F1-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,48],\"o\":2},\"dizzy\":{\"a\":\"Dizzy Symbol\",\"b\":\"1F4AB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"star\",\"sparkle\",\"shoot\",\"magic\"],\"k\":[26,1],\"o\":2},\"five\":{\"a\":\"Keycap 5\",\"b\":\"0035-FE0F-20E3\",\"c\":\"0035-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"5\",\"numbers\",\"blue-square\",\"prime\"],\"k\":[0,7],\"o\":0},\"male-singer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f3a4.png\",\"sheet_x\":15,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f3a4.png\",\"sheet_x\":15,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f3a4.png\",\"sheet_x\":15,\"sheet_y\":2,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f3a4.png\",\"sheet_x\":15,\"sheet_y\":3,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f3a4.png\",\"sheet_x\":15,\"sheet_y\":4,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Singer\",\"b\":\"1F468-200D-1F3A4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[14,56],\"o\":4},\"mantelpiece_clock\":{\"a\":\"Mantelpiece Clock\",\"b\":\"1F570-FE0F\",\"c\":\"1F570\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\"],\"k\":[29,7],\"o\":2},\"female-singer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f3a4.png\",\"sheet_x\":17,\"sheet_y\":47,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f3a4.png\",\"sheet_x\":17,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f3a4.png\",\"sheet_x\":17,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f3a4.png\",\"sheet_x\":17,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F3A4\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f3a4.png\",\"sheet_x\":17,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Singer\",\"b\":\"1F469-200D-1F3A4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,46],\"o\":4},\"flag-lb\":{\"a\":\"Lebanon Flag\",\"b\":\"1F1F1-1F1E7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,49],\"o\":2},\"six\":{\"a\":\"Keycap 6\",\"b\":\"0036-FE0F-20E3\",\"c\":\"0036-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"6\",\"numbers\",\"blue-square\"],\"k\":[0,8],\"o\":0},\"mailbox_closed\":{\"a\":\"Closed Mailbox with Lowered Flag\",\"b\":\"1F4EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"email\",\"communication\",\"inbox\"],\"k\":[27,7],\"o\":2},\"sweat_drops\":{\"a\":\"Splashing Sweat Symbol\",\"b\":\"1F4A6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"water\",\"drip\",\"oops\"],\"k\":[25,48],\"o\":2},\"clock12\":{\"a\":\"Clock Face Twelve Oclock\",\"b\":\"1F55B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"noon\",\"midnight\",\"midday\",\"late\",\"early\",\"schedule\"],\"k\":[28,50],\"o\":2},\"seven\":{\"a\":\"Keycap 7\",\"b\":\"0037-FE0F-20E3\",\"c\":\"0037-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"7\",\"numbers\",\"blue-square\",\"prime\"],\"k\":[0,9],\"o\":0},\"mailbox_with_mail\":{\"a\":\"Open Mailbox with Raised Flag\",\"b\":\"1F4EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"email\",\"inbox\",\"communication\"],\"k\":[27,9],\"o\":2},\"clock1230\":{\"a\":\"Clock Face Twelve-Thirty\",\"b\":\"1F567\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[29,5],\"o\":2},\"dash\":{\"a\":\"Dash Symbol\",\"b\":\"1F4A8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"wind\",\"air\",\"fast\",\"shoo\",\"fart\",\"smoke\",\"puff\"],\"k\":[25,50],\"o\":2},\"artist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f3a8.png\",\"sheet_x\":45,\"sheet_y\":42,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f3a8.png\",\"sheet_x\":45,\"sheet_y\":43,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f3a8.png\",\"sheet_x\":45,\"sheet_y\":44,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f3a8.png\",\"sheet_x\":45,\"sheet_y\":45,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f3a8.png\",\"sheet_x\":45,\"sheet_y\":46,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Artist\",\"b\":\"1F9D1-200D-1F3A8\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[45,41],\"o\":12},\"flag-lc\":{\"a\":\"St. Lucia Flag\",\"b\":\"1F1F1-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,50],\"o\":2},\"hole\":{\"a\":\"Hole\",\"b\":\"1F573-FE0F\",\"c\":\"1F573\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"embarrassing\"],\"k\":[29,8],\"o\":2},\"male-artist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f3a8.png\",\"sheet_x\":15,\"sheet_y\":6,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f3a8.png\",\"sheet_x\":15,\"sheet_y\":7,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f3a8.png\",\"sheet_x\":15,\"sheet_y\":8,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f3a8.png\",\"sheet_x\":15,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f3a8.png\",\"sheet_x\":15,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Artist\",\"b\":\"1F468-200D-1F3A8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,5],\"o\":4},\"clock1\":{\"a\":\"Clock Face One Oclock\",\"b\":\"1F550\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,39],\"o\":2},\"eight\":{\"a\":\"Keycap 8\",\"b\":\"0038-FE0F-20E3\",\"c\":\"0038-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"8\",\"blue-square\",\"numbers\"],\"k\":[0,10],\"o\":0},\"mailbox_with_no_mail\":{\"a\":\"Open Mailbox with Lowered Flag\",\"b\":\"1F4ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"email\",\"inbox\"],\"k\":[27,10],\"o\":2},\"flag-li\":{\"a\":\"Liechtenstein Flag\",\"b\":\"1F1F1-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,51],\"o\":2},\"bomb\":{\"a\":\"Bomb\",\"b\":\"1F4A3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"boom\",\"explode\",\"explosion\",\"terrorism\"],\"k\":[25,45],\"o\":2},\"nine\":{\"a\":\"Keycap 9\",\"b\":\"0039-FE0F-20E3\",\"c\":\"0039-20E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"blue-square\",\"numbers\",\"9\"],\"k\":[0,11],\"o\":0},\"postbox\":{\"a\":\"Postbox\",\"b\":\"1F4EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"email\",\"letter\",\"envelope\"],\"k\":[27,11],\"o\":2},\"female-artist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f3a8.png\",\"sheet_x\":17,\"sheet_y\":53,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f3a8.png\",\"sheet_x\":17,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f3a8.png\",\"sheet_x\":17,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f3a8.png\",\"sheet_x\":17,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F3A8\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f3a8.png\",\"sheet_x\":18,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Artist\",\"b\":\"1F469-200D-1F3A8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,52],\"o\":4},\"clock130\":{\"a\":\"Clock Face One-Thirty\",\"b\":\"1F55C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,51],\"o\":2},\"flag-lk\":{\"a\":\"Sri Lanka Flag\",\"b\":\"1F1F1-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,52],\"o\":2},\"ballot_box_with_ballot\":{\"a\":\"Ballot Box with Ballot\",\"b\":\"1F5F3-FE0F\",\"c\":\"1F5F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,28],\"o\":2},\"pilot\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-2708-FE0F\",\"non_qualified\":\"1F9D1-1F3FB-200D-2708\",\"image\":\"1f9d1-1f3fb-200d-2708-fe0f.png\",\"sheet_x\":48,\"sheet_y\":5,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-2708-FE0F\",\"non_qualified\":\"1F9D1-1F3FC-200D-2708\",\"image\":\"1f9d1-1f3fc-200d-2708-fe0f.png\",\"sheet_x\":48,\"sheet_y\":6,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-2708-FE0F\",\"non_qualified\":\"1F9D1-1F3FD-200D-2708\",\"image\":\"1f9d1-1f3fd-200d-2708-fe0f.png\",\"sheet_x\":48,\"sheet_y\":7,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-2708-FE0F\",\"non_qualified\":\"1F9D1-1F3FE-200D-2708\",\"image\":\"1f9d1-1f3fe-200d-2708-fe0f.png\",\"sheet_x\":48,\"sheet_y\":8,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-2708-FE0F\",\"non_qualified\":\"1F9D1-1F3FF-200D-2708\",\"image\":\"1f9d1-1f3ff-200d-2708-fe0f.png\",\"sheet_x\":48,\"sheet_y\":9,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Pilot\",\"b\":\"1F9D1-200D-2708-FE0F\",\"c\":\"1F9D1-200D-2708\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[48,4],\"o\":12},\"keycap_ten\":{\"a\":\"Keycap Ten\",\"b\":\"1F51F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"numbers\",\"10\",\"blue-square\"],\"k\":[28,2],\"o\":2},\"clock2\":{\"a\":\"Clock Face Two Oclock\",\"b\":\"1F551\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,40],\"o\":2},\"flag-lr\":{\"a\":\"Liberia Flag\",\"b\":\"1F1F1-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,53],\"o\":2},\"speech_balloon\":{\"a\":\"Speech Balloon\",\"b\":\"1F4AC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bubble\",\"words\",\"message\",\"talk\",\"chatting\"],\"k\":[26,2],\"o\":2},\"eye-in-speech-bubble\":{\"a\":\"Eye in Speech Bubble\",\"b\":\"1F441-FE0F-200D-1F5E8-FE0F\",\"d\":true,\"e\":true,\"f\":false,\"h\":false,\"k\":[12,37],\"o\":2},\"flag-ls\":{\"a\":\"Lesotho Flag\",\"b\":\"1F1F1-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,54],\"o\":2},\"clock230\":{\"a\":\"Clock Face Two-Thirty\",\"b\":\"1F55D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,52],\"o\":2},\"male-pilot\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FB-200D-2708\",\"image\":\"1f468-1f3fb-200d-2708-fe0f.png\",\"sheet_x\":17,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FC-200D-2708\",\"image\":\"1f468-1f3fc-200d-2708-fe0f.png\",\"sheet_x\":17,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FD-200D-2708\",\"image\":\"1f468-1f3fd-200d-2708-fe0f.png\",\"sheet_x\":17,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FE-200D-2708\",\"image\":\"1f468-1f3fe-200d-2708-fe0f.png\",\"sheet_x\":17,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-2708-FE0F\",\"non_qualified\":\"1F468-1F3FF-200D-2708\",\"image\":\"1f468-1f3ff-200d-2708-fe0f.png\",\"sheet_x\":17,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Pilot\",\"b\":\"1F468-200D-2708-FE0F\",\"c\":\"1F468-200D-2708\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,14],\"o\":4},\"capital_abcd\":{\"a\":\"Input Symbol for Latin Capital Letters\",\"b\":\"1F520\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"alphabet\",\"words\",\"blue-square\"],\"k\":[28,3],\"o\":2},\"pencil2\":{\"a\":\"Pencil\",\"b\":\"270F-FE0F\",\"c\":\"270F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stationery\",\"write\",\"paper\",\"writing\",\"school\",\"study\"],\"k\":[55,10],\"o\":2},\"female-pilot\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FB-200D-2708\",\"image\":\"1f469-1f3fb-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FC-200D-2708\",\"image\":\"1f469-1f3fc-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FD-200D-2708\",\"image\":\"1f469-1f3fd-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":2,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FE-200D-2708\",\"image\":\"1f469-1f3fe-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":3,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-2708-FE0F\",\"non_qualified\":\"1F469-1F3FF-200D-2708\",\"image\":\"1f469-1f3ff-200d-2708-fe0f.png\",\"sheet_x\":20,\"sheet_y\":4,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Pilot\",\"b\":\"1F469-200D-2708-FE0F\",\"c\":\"1F469-200D-2708\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,56],\"o\":4},\"black_nib\":{\"a\":\"Black Nib\",\"b\":\"2712-FE0F\",\"c\":\"2712\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"pen\",\"stationery\",\"writing\",\"write\"],\"k\":[55,11],\"o\":2},\"left_speech_bubble\":{\"a\":\"Left Speech Bubble\",\"b\":\"1F5E8-FE0F\",\"c\":\"1F5E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"words\",\"message\",\"talk\",\"chatting\"],\"k\":[30,26],\"o\":2},\"clock3\":{\"a\":\"Clock Face Three Oclock\",\"b\":\"1F552\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,41],\"o\":2},\"abcd\":{\"a\":\"Input Symbol for Latin Small Letters\",\"b\":\"1F521\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"alphabet\"],\"k\":[28,4],\"o\":2},\"flag-lt\":{\"a\":\"Lithuania Flag\",\"b\":\"1F1F1-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,55],\"o\":2},\"clock330\":{\"a\":\"Clock Face Three-Thirty\",\"b\":\"1F55E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,53],\"o\":2},\"astronaut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F680\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f680.png\",\"sheet_x\":46,\"sheet_y\":27,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F680\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f680.png\",\"sheet_x\":46,\"sheet_y\":28,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F680\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f680.png\",\"sheet_x\":46,\"sheet_y\":29,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F680\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f680.png\",\"sheet_x\":46,\"sheet_y\":30,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F680\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f680.png\",\"sheet_x\":46,\"sheet_y\":31,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Astronaut\",\"b\":\"1F9D1-200D-1F680\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[46,26],\"o\":12},\"flag-lu\":{\"a\":\"Luxembourg Flag\",\"b\":\"1F1F1-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[2,56],\"o\":2},\"right_anger_bubble\":{\"a\":\"Right Anger Bubble\",\"b\":\"1F5EF-FE0F\",\"c\":\"1F5EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"caption\",\"speech\",\"thinking\",\"mad\"],\"k\":[30,27],\"o\":2},\"lower_left_fountain_pen\":{\"a\":\"Lower Left Fountain Pen\",\"b\":\"1F58B-FE0F\",\"c\":\"1F58B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[29,45],\"o\":2},\"male-astronaut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f680.png\",\"sheet_x\":16,\"sheet_y\":6,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f680.png\",\"sheet_x\":16,\"sheet_y\":7,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f680.png\",\"sheet_x\":16,\"sheet_y\":8,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f680.png\",\"sheet_x\":16,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F680\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f680.png\",\"sheet_x\":16,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Astronaut\",\"b\":\"1F468-200D-1F680\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[16,5],\"o\":4},\"thought_balloon\":{\"a\":\"Thought Balloon\",\"b\":\"1F4AD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bubble\",\"cloud\",\"speech\",\"thinking\",\"dream\"],\"k\":[26,3],\"o\":2},\"symbols\":{\"a\":\"Input Symbol for Symbols\",\"b\":\"1F523\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"music\",\"note\",\"ampersand\",\"percent\",\"glyphs\",\"characters\"],\"k\":[28,6],\"o\":2},\"clock4\":{\"a\":\"Clock Face Four Oclock\",\"b\":\"1F553\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,42],\"o\":2},\"flag-lv\":{\"a\":\"Latvia Flag\",\"b\":\"1F1F1-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,0],\"o\":2},\"lower_left_ballpoint_pen\":{\"a\":\"Lower Left Ballpoint Pen\",\"b\":\"1F58A-FE0F\",\"c\":\"1F58A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[29,44],\"o\":2},\"abc\":{\"a\":\"Input Symbol for Latin Letters\",\"b\":\"1F524\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"alphabet\"],\"k\":[28,7],\"o\":2},\"zzz\":{\"a\":\"Sleeping Symbol\",\"b\":\"1F4A4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sleepy\",\"tired\",\"dream\"],\"k\":[25,46],\"o\":2},\"lower_left_paintbrush\":{\"a\":\"Lower Left Paintbrush\",\"b\":\"1F58C-FE0F\",\"c\":\"1F58C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[29,46],\"o\":2},\"female-astronaut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f680.png\",\"sheet_x\":18,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f680.png\",\"sheet_x\":18,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f680.png\",\"sheet_x\":18,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f680.png\",\"sheet_x\":18,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F680\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f680.png\",\"sheet_x\":18,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Astronaut\",\"b\":\"1F469-200D-1F680\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,47],\"o\":4},\"flag-ly\":{\"a\":\"Libya Flag\",\"b\":\"1F1F1-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,1],\"o\":2},\"clock430\":{\"a\":\"Clock Face Four-Thirty\",\"b\":\"1F55F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,54],\"o\":2},\"flag-ma\":{\"a\":\"Morocco Flag\",\"b\":\"1F1F2-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,2],\"o\":2},\"a\":{\"a\":\"Negative Squared Latin Capital Letter a\",\"b\":\"1F170-FE0F\",\"c\":\"1F170\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"red-square\",\"alphabet\",\"letter\"],\"k\":[0,16],\"o\":2},\"clock5\":{\"a\":\"Clock Face Five Oclock\",\"b\":\"1F554\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,43],\"o\":2},\"lower_left_crayon\":{\"a\":\"Lower Left Crayon\",\"b\":\"1F58D-FE0F\",\"c\":\"1F58D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[29,47],\"o\":2},\"firefighter\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F692\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f692.png\",\"sheet_x\":46,\"sheet_y\":33,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F692\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f692.png\",\"sheet_x\":46,\"sheet_y\":34,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F692\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f692.png\",\"sheet_x\":46,\"sheet_y\":35,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F692\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f692.png\",\"sheet_x\":46,\"sheet_y\":36,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F692\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f692.png\",\"sheet_x\":46,\"sheet_y\":37,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Firefighter\",\"b\":\"1F9D1-200D-1F692\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[46,32],\"o\":12},\"male-firefighter\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f692.png\",\"sheet_x\":16,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f692.png\",\"sheet_x\":16,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f692.png\",\"sheet_x\":16,\"sheet_y\":14,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f692.png\",\"sheet_x\":16,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F692\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f692.png\",\"sheet_x\":16,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Firefighter\",\"b\":\"1F468-200D-1F692\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[16,11],\"o\":4},\"memo\":{\"a\":\"Memo\",\"b\":\"1F4DD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"write\",\"documents\",\"stationery\",\"pencil\",\"paper\",\"writing\",\"legal\",\"exam\",\"quiz\",\"test\",\"study\",\"compose\"],\"k\":[26,51],\"n\":[\"pencil\"],\"o\":2},\"ab\":{\"a\":\"Negative Squared Ab\",\"b\":\"1F18E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"red-square\",\"alphabet\"],\"k\":[0,20],\"o\":2},\"flag-mc\":{\"a\":\"Monaco Flag\",\"b\":\"1F1F2-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,3],\"o\":2},\"clock530\":{\"a\":\"Clock Face Five-Thirty\",\"b\":\"1F560\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,55],\"o\":2},\"briefcase\":{\"a\":\"Briefcase\",\"b\":\"1F4BC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"business\",\"documents\",\"work\",\"law\",\"legal\",\"job\",\"career\"],\"k\":[26,18],\"o\":2},\"female-firefighter\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f692.png\",\"sheet_x\":18,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f692.png\",\"sheet_x\":18,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f692.png\",\"sheet_x\":18,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f692.png\",\"sheet_x\":19,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F692\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f692.png\",\"sheet_x\":19,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Firefighter\",\"b\":\"1F469-200D-1F692\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,53],\"o\":4},\"clock6\":{\"a\":\"Clock Face Six Oclock\",\"b\":\"1F555\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\",\"dawn\",\"dusk\"],\"k\":[28,44],\"o\":2},\"b\":{\"a\":\"Negative Squared Latin Capital Letter B\",\"b\":\"1F171-FE0F\",\"c\":\"1F171\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"red-square\",\"alphabet\",\"letter\"],\"k\":[0,17],\"o\":2},\"flag-md\":{\"a\":\"Moldova Flag\",\"b\":\"1F1F2-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,4],\"o\":2},\"clock630\":{\"a\":\"Clock Face Six-Thirty\",\"b\":\"1F561\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,56],\"o\":2},\"cl\":{\"a\":\"Squared Cl\",\"b\":\"1F191\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"alphabet\",\"words\",\"red-square\"],\"k\":[0,21],\"o\":2},\"flag-me\":{\"a\":\"Montenegro Flag\",\"b\":\"1F1F2-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,5],\"o\":2},\"file_folder\":{\"a\":\"File Folder\",\"b\":\"1F4C1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"documents\",\"business\",\"office\"],\"k\":[26,23],\"o\":2},\"cop\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F46E-1F3FB\",\"non_qualified\":null,\"image\":\"1f46e-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":50,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F46E-1F3FC\",\"non_qualified\":null,\"image\":\"1f46e-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":51,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F46E-1F3FD\",\"non_qualified\":null,\"image\":\"1f46e-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":52,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F46E-1F3FE\",\"non_qualified\":null,\"image\":\"1f46e-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":53,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F46E-1F3FF\",\"non_qualified\":null,\"image\":\"1f46e-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":54,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F46E-200D-2642-FE0F\",\"a\":\"Police Officer\",\"b\":\"1F46E\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[21,49],\"o\":2},\"male-police-officer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F46E-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FB-200D-2642\",\"image\":\"1f46e-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F46E-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FC-200D-2642\",\"image\":\"1f46e-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F46E-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FD-200D-2642\",\"image\":\"1f46e-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F46E-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FE-200D-2642\",\"image\":\"1f46e-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":47,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F46E-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F46E-1F3FF-200D-2642\",\"image\":\"1f46e-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":21,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F46E\",\"a\":\"Male Police Officer\",\"b\":\"1F46E-200D-2642-FE0F\",\"c\":\"1F46E-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[21,43],\"o\":4},\"cool\":{\"a\":\"Squared Cool\",\"b\":\"1F192\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"words\",\"blue-square\"],\"k\":[0,22],\"o\":2},\"clock7\":{\"a\":\"Clock Face Seven Oclock\",\"b\":\"1F556\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,45],\"o\":2},\"flag-mf\":{\"a\":\"St. Martin Flag\",\"b\":\"1F1F2-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,6],\"o\":2},\"open_file_folder\":{\"a\":\"Open File Folder\",\"b\":\"1F4C2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"documents\",\"load\"],\"k\":[26,24],\"o\":2},\"card_index_dividers\":{\"a\":\"Card Index Dividers\",\"b\":\"1F5C2-FE0F\",\"c\":\"1F5C2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"organizing\",\"business\",\"stationery\"],\"k\":[30,15],\"o\":2},\"flag-mg\":{\"a\":\"Madagascar Flag\",\"b\":\"1F1F2-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,7],\"o\":2},\"free\":{\"a\":\"Squared Free\",\"b\":\"1F193\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"words\"],\"k\":[0,23],\"o\":2},\"female-police-officer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F46E-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FB-200D-2640\",\"image\":\"1f46e-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F46E-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FC-200D-2640\",\"image\":\"1f46e-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F46E-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FD-200D-2640\",\"image\":\"1f46e-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F46E-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FE-200D-2640\",\"image\":\"1f46e-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F46E-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F46E-1F3FF-200D-2640\",\"image\":\"1f46e-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":21,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Police Officer\",\"b\":\"1F46E-200D-2640-FE0F\",\"c\":\"1F46E-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[21,37],\"o\":4},\"clock730\":{\"a\":\"Clock Face Seven-Thirty\",\"b\":\"1F562\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[29,0],\"o\":2},\"date\":{\"a\":\"Calendar\",\"b\":\"1F4C5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"calendar\",\"schedule\"],\"k\":[26,27],\"o\":2},\"clock8\":{\"a\":\"Clock Face Eight Oclock\",\"b\":\"1F557\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,46],\"o\":2},\"information_source\":{\"a\":\"Information Source\",\"b\":\"2139-FE0F\",\"c\":\"2139\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"alphabet\",\"letter\"],\"k\":[52,13],\"o\":2},\"sleuth_or_spy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F575-1F3FB\",\"non_qualified\":null,\"image\":\"1f575-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":28,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F575-1F3FC\",\"non_qualified\":null,\"image\":\"1f575-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":29,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F575-1F3FD\",\"non_qualified\":null,\"image\":\"1f575-1f3fd.png\",\"sheet_x\":29,\"sheet_y\":30,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F575-1F3FE\",\"non_qualified\":null,\"image\":\"1f575-1f3fe.png\",\"sheet_x\":29,\"sheet_y\":31,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F575-1F3FF\",\"non_qualified\":null,\"image\":\"1f575-1f3ff.png\",\"sheet_x\":29,\"sheet_y\":32,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F575-FE0F-200D-2642-FE0F\",\"a\":\"Sleuth or Spy\",\"b\":\"1F575-FE0F\",\"c\":\"1F575\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[29,27],\"o\":2},\"flag-mh\":{\"a\":\"Marshall Islands Flag\",\"b\":\"1F1F2-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,8],\"o\":2},\"clock830\":{\"a\":\"Clock Face Eight-Thirty\",\"b\":\"1F563\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[29,1],\"o\":2},\"calendar\":{\"a\":\"Tear-off Calendar\",\"b\":\"1F4C6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"schedule\",\"date\",\"planning\"],\"k\":[26,28],\"o\":2},\"male-detective\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F575-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FB-200D-2642\",\"image\":\"1f575-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":22,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F575-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FC-200D-2642\",\"image\":\"1f575-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":23,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F575-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FD-200D-2642\",\"image\":\"1f575-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":24,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F575-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FE-200D-2642\",\"image\":\"1f575-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":25,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F575-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F575-1F3FF-200D-2642\",\"image\":\"1f575-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":29,\"sheet_y\":26,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F575-FE0F\",\"a\":\"Male Detective\",\"b\":\"1F575-FE0F-200D-2642-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[29,21],\"o\":4},\"flag-mk\":{\"a\":\"North Macedonia Flag\",\"b\":\"1F1F2-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,9],\"o\":2},\"id\":{\"a\":\"Squared Id\",\"b\":\"1F194\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"purple-square\",\"words\"],\"k\":[0,24],\"o\":2},\"spiral_note_pad\":{\"a\":\"Spiral Note Pad\",\"b\":\"1F5D2-FE0F\",\"c\":\"1F5D2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,19],\"o\":2},\"female-detective\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F575-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FB-200D-2640\",\"image\":\"1f575-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F575-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FC-200D-2640\",\"image\":\"1f575-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F575-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FD-200D-2640\",\"image\":\"1f575-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F575-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FE-200D-2640\",\"image\":\"1f575-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F575-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F575-1F3FF-200D-2640\",\"image\":\"1f575-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":29,\"sheet_y\":20,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Detective\",\"b\":\"1F575-FE0F-200D-2640-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[29,15],\"o\":4},\"clock9\":{\"a\":\"Clock Face Nine Oclock\",\"b\":\"1F558\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,47],\"o\":2},\"flag-ml\":{\"a\":\"Mali Flag\",\"b\":\"1F1F2-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,10],\"o\":2},\"m\":{\"a\":\"Circled Latin Capital Letter M\",\"b\":\"24C2-FE0F\",\"c\":\"24C2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"alphabet\",\"blue-circle\",\"letter\"],\"k\":[52,40],\"o\":2},\"flag-mm\":{\"a\":\"Myanmar (burma) Flag\",\"b\":\"1F1F2-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,11],\"o\":2},\"clock930\":{\"a\":\"Clock Face Nine-Thirty\",\"b\":\"1F564\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[29,2],\"o\":2},\"guardsman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F482-1F3FB\",\"non_qualified\":null,\"image\":\"1f482-1f3fb.png\",\"sheet_x\":24,\"sheet_y\":21,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F482-1F3FC\",\"non_qualified\":null,\"image\":\"1f482-1f3fc.png\",\"sheet_x\":24,\"sheet_y\":22,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F482-1F3FD\",\"non_qualified\":null,\"image\":\"1f482-1f3fd.png\",\"sheet_x\":24,\"sheet_y\":23,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F482-1F3FE\",\"non_qualified\":null,\"image\":\"1f482-1f3fe.png\",\"sheet_x\":24,\"sheet_y\":24,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F482-1F3FF\",\"non_qualified\":null,\"image\":\"1f482-1f3ff.png\",\"sheet_x\":24,\"sheet_y\":25,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F482-200D-2642-FE0F\",\"a\":\"Guardsman\",\"b\":\"1F482\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"uk\",\"gb\",\"british\",\"male\",\"guy\",\"royal\"],\"k\":[24,20],\"o\":2},\"new\":{\"a\":\"Squared New\",\"b\":\"1F195\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"words\",\"start\"],\"k\":[0,25],\"o\":2},\"spiral_calendar_pad\":{\"a\":\"Spiral Calendar Pad\",\"b\":\"1F5D3-FE0F\",\"c\":\"1F5D3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,20],\"o\":2},\"ng\":{\"a\":\"Squared Ng\",\"b\":\"1F196\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"words\",\"shape\",\"icon\"],\"k\":[0,26],\"o\":2},\"card_index\":{\"a\":\"Card Index\",\"b\":\"1F4C7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"business\",\"stationery\"],\"k\":[26,29],\"o\":2},\"clock10\":{\"a\":\"Clock Face Ten Oclock\",\"b\":\"1F559\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,48],\"o\":2},\"flag-mn\":{\"a\":\"Mongolia Flag\",\"b\":\"1F1F2-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,12],\"o\":2},\"male-guard\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F482-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FB-200D-2642\",\"image\":\"1f482-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F482-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FC-200D-2642\",\"image\":\"1f482-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F482-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FD-200D-2642\",\"image\":\"1f482-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F482-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FE-200D-2642\",\"image\":\"1f482-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F482-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F482-1F3FF-200D-2642\",\"image\":\"1f482-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F482\",\"a\":\"Male Guard\",\"b\":\"1F482-200D-2642-FE0F\",\"c\":\"1F482-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[24,14],\"o\":4},\"flag-mo\":{\"a\":\"Macao Sar China Flag\",\"b\":\"1F1F2-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,13],\"o\":2},\"clock1030\":{\"a\":\"Clock Face Ten-Thirty\",\"b\":\"1F565\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[29,3],\"o\":2},\"chart_with_upwards_trend\":{\"a\":\"Chart with Upwards Trend\",\"b\":\"1F4C8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"graph\",\"presentation\",\"stats\",\"recovery\",\"business\",\"economics\",\"money\",\"sales\",\"good\",\"success\"],\"k\":[26,30],\"o\":2},\"o2\":{\"a\":\"Negative Squared Latin Capital Letter O\",\"b\":\"1F17E-FE0F\",\"c\":\"1F17E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"alphabet\",\"red-square\",\"letter\"],\"k\":[0,18],\"o\":2},\"female-guard\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F482-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FB-200D-2640\",\"image\":\"1f482-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F482-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FC-200D-2640\",\"image\":\"1f482-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F482-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FD-200D-2640\",\"image\":\"1f482-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F482-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FE-200D-2640\",\"image\":\"1f482-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F482-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F482-1F3FF-200D-2640\",\"image\":\"1f482-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Guard\",\"b\":\"1F482-200D-2640-FE0F\",\"c\":\"1F482-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[24,8],\"o\":4},\"chart_with_downwards_trend\":{\"a\":\"Chart with Downwards Trend\",\"b\":\"1F4C9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"graph\",\"presentation\",\"stats\",\"recession\",\"business\",\"economics\",\"money\",\"sales\",\"bad\",\"failure\"],\"k\":[26,31],\"o\":2},\"flag-mp\":{\"a\":\"Northern Mariana Islands Flag\",\"b\":\"1F1F2-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,14],\"o\":2},\"ok\":{\"a\":\"Squared Ok\",\"b\":\"1F197\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"good\",\"agree\",\"yes\",\"blue-square\"],\"k\":[0,27],\"o\":2},\"clock11\":{\"a\":\"Clock Face Eleven Oclock\",\"b\":\"1F55A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[28,49],\"o\":2},\"construction_worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F477-1F3FB\",\"non_qualified\":null,\"image\":\"1f477-1f3fb.png\",\"sheet_x\":23,\"sheet_y\":23,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F477-1F3FC\",\"non_qualified\":null,\"image\":\"1f477-1f3fc.png\",\"sheet_x\":23,\"sheet_y\":24,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F477-1F3FD\",\"non_qualified\":null,\"image\":\"1f477-1f3fd.png\",\"sheet_x\":23,\"sheet_y\":25,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F477-1F3FE\",\"non_qualified\":null,\"image\":\"1f477-1f3fe.png\",\"sheet_x\":23,\"sheet_y\":26,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F477-1F3FF\",\"non_qualified\":null,\"image\":\"1f477-1f3ff.png\",\"sheet_x\":23,\"sheet_y\":27,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F477-200D-2642-FE0F\",\"a\":\"Construction Worker\",\"b\":\"1F477\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[23,22],\"o\":2},\"male-construction-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F477-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FB-200D-2642\",\"image\":\"1f477-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F477-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FC-200D-2642\",\"image\":\"1f477-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F477-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FD-200D-2642\",\"image\":\"1f477-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F477-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FE-200D-2642\",\"image\":\"1f477-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":20,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F477-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F477-1F3FF-200D-2642\",\"image\":\"1f477-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":23,\"sheet_y\":21,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F477\",\"a\":\"Male Construction Worker\",\"b\":\"1F477-200D-2642-FE0F\",\"c\":\"1F477-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[23,16],\"o\":4},\"clock1130\":{\"a\":\"Clock Face Eleven-Thirty\",\"b\":\"1F566\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"time\",\"late\",\"early\",\"schedule\"],\"k\":[29,4],\"o\":2},\"flag-mq\":{\"a\":\"Martinique Flag\",\"b\":\"1F1F2-1F1F6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,15],\"o\":2},\"bar_chart\":{\"a\":\"Bar Chart\",\"b\":\"1F4CA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"graph\",\"presentation\",\"stats\"],\"k\":[26,32],\"o\":2},\"parking\":{\"a\":\"Negative Squared Latin Capital Letter P\",\"b\":\"1F17F-FE0F\",\"c\":\"1F17F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"cars\",\"blue-square\",\"alphabet\",\"letter\"],\"k\":[0,19],\"o\":2},\"new_moon\":{\"a\":\"New Moon Symbol\",\"b\":\"1F311\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,36],\"o\":2},\"female-construction-worker\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F477-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FB-200D-2640\",\"image\":\"1f477-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F477-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FC-200D-2640\",\"image\":\"1f477-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F477-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FD-200D-2640\",\"image\":\"1f477-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F477-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FE-200D-2640\",\"image\":\"1f477-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":14,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F477-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F477-1F3FF-200D-2640\",\"image\":\"1f477-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":23,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Construction Worker\",\"b\":\"1F477-200D-2640-FE0F\",\"c\":\"1F477-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[23,10],\"o\":4},\"sos\":{\"a\":\"Squared Sos\",\"b\":\"1F198\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"help\",\"red-square\",\"words\",\"emergency\",\"911\"],\"k\":[0,28],\"o\":2},\"clipboard\":{\"a\":\"Clipboard\",\"b\":\"1F4CB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stationery\",\"documents\"],\"k\":[26,33],\"o\":2},\"flag-mr\":{\"a\":\"Mauritania Flag\",\"b\":\"1F1F2-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,16],\"o\":2},\"prince\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F934-1F3FB\",\"non_qualified\":null,\"image\":\"1f934-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F934-1F3FC\",\"non_qualified\":null,\"image\":\"1f934-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F934-1F3FD\",\"non_qualified\":null,\"image\":\"1f934-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":20,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F934-1F3FE\",\"non_qualified\":null,\"image\":\"1f934-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":21,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F934-1F3FF\",\"non_qualified\":null,\"image\":\"1f934-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":22,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Prince\",\"b\":\"1F934\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"boy\",\"man\",\"male\",\"crown\",\"royal\",\"king\"],\"k\":[39,17],\"o\":4},\"waxing_crescent_moon\":{\"a\":\"Waxing Crescent Moon Symbol\",\"b\":\"1F312\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,37],\"o\":2},\"flag-ms\":{\"a\":\"Montserrat Flag\",\"b\":\"1F1F2-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,17],\"o\":2},\"pushpin\":{\"a\":\"Pushpin\",\"b\":\"1F4CC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stationery\",\"mark\",\"here\"],\"k\":[26,34],\"o\":2},\"up\":{\"a\":\"Squared Up with Exclamation Mark\",\"b\":\"1F199\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"above\",\"high\"],\"k\":[0,29],\"o\":2},\"flag-mt\":{\"a\":\"Malta Flag\",\"b\":\"1F1F2-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,18],\"o\":2},\"princess\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F478-1F3FB\",\"non_qualified\":null,\"image\":\"1f478-1f3fb.png\",\"sheet_x\":23,\"sheet_y\":29,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F478-1F3FC\",\"non_qualified\":null,\"image\":\"1f478-1f3fc.png\",\"sheet_x\":23,\"sheet_y\":30,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F478-1F3FD\",\"non_qualified\":null,\"image\":\"1f478-1f3fd.png\",\"sheet_x\":23,\"sheet_y\":31,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F478-1F3FE\",\"non_qualified\":null,\"image\":\"1f478-1f3fe.png\",\"sheet_x\":23,\"sheet_y\":32,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F478-1F3FF\",\"non_qualified\":null,\"image\":\"1f478-1f3ff.png\",\"sheet_x\":23,\"sheet_y\":33,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Princess\",\"b\":\"1F478\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"girl\",\"woman\",\"female\",\"blond\",\"crown\",\"royal\",\"queen\"],\"k\":[23,28],\"o\":2},\"round_pushpin\":{\"a\":\"Round Pushpin\",\"b\":\"1F4CD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stationery\",\"location\",\"map\",\"here\"],\"k\":[26,35],\"o\":2},\"first_quarter_moon\":{\"a\":\"First Quarter Moon Symbol\",\"b\":\"1F313\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,38],\"o\":2},\"vs\":{\"a\":\"Squared Vs\",\"b\":\"1F19A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"words\",\"orange-square\"],\"k\":[0,30],\"o\":2},\"flag-mu\":{\"a\":\"Mauritius Flag\",\"b\":\"1F1F2-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,19],\"o\":2},\"koko\":{\"a\":\"Squared Katakana Koko\",\"b\":\"1F201\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"blue-square\",\"here\",\"katakana\",\"japanese\",\"destination\"],\"k\":[5,4],\"o\":2},\"man_with_turban\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F473-1F3FB\",\"non_qualified\":null,\"image\":\"1f473-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":44,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F473-1F3FC\",\"non_qualified\":null,\"image\":\"1f473-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":45,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F473-1F3FD\",\"non_qualified\":null,\"image\":\"1f473-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":46,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F473-1F3FE\",\"non_qualified\":null,\"image\":\"1f473-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":47,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F473-1F3FF\",\"non_qualified\":null,\"image\":\"1f473-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":48,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F473-200D-2642-FE0F\",\"a\":\"Man with Turban\",\"b\":\"1F473\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"j\":[\"male\",\"indian\",\"hinduism\",\"arabs\"],\"k\":[22,43],\"o\":2},\"moon\":{\"a\":\"Waxing Gibbous Moon Symbol\",\"b\":\"1F314\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[5,39],\"n\":[\"waxing_gibbous_moon\"],\"o\":2},\"paperclip\":{\"a\":\"Paperclip\",\"b\":\"1F4CE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"documents\",\"stationery\"],\"k\":[26,36],\"o\":2},\"linked_paperclips\":{\"a\":\"Linked Paperclips\",\"b\":\"1F587-FE0F\",\"c\":\"1F587\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[29,43],\"o\":2},\"man-wearing-turban\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F473-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FB-200D-2642\",\"image\":\"1f473-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F473-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FC-200D-2642\",\"image\":\"1f473-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F473-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FD-200D-2642\",\"image\":\"1f473-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F473-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FE-200D-2642\",\"image\":\"1f473-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F473-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F473-1F3FF-200D-2642\",\"image\":\"1f473-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":22,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F473\",\"a\":\"Man Wearing Turban\",\"b\":\"1F473-200D-2642-FE0F\",\"c\":\"1F473-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[22,37],\"o\":4},\"sa\":{\"a\":\"Squared Katakana Sa\",\"b\":\"1F202-FE0F\",\"c\":\"1F202\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"japanese\",\"blue-square\",\"katakana\"],\"k\":[5,5],\"o\":2},\"full_moon\":{\"a\":\"Full Moon Symbol\",\"b\":\"1F315\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"yellow\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,40],\"o\":2},\"flag-mv\":{\"a\":\"Maldives Flag\",\"b\":\"1F1F2-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,20],\"o\":2},\"flag-mw\":{\"a\":\"Malawi Flag\",\"b\":\"1F1F2-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,21],\"o\":2},\"waning_gibbous_moon\":{\"a\":\"Waning Gibbous Moon Symbol\",\"b\":\"1F316\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\",\"waxing_gibbous_moon\"],\"k\":[5,41],\"o\":2},\"woman-wearing-turban\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F473-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FB-200D-2640\",\"image\":\"1f473-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":32,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F473-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FC-200D-2640\",\"image\":\"1f473-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":33,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F473-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FD-200D-2640\",\"image\":\"1f473-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":34,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F473-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FE-200D-2640\",\"image\":\"1f473-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":35,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F473-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F473-1F3FF-200D-2640\",\"image\":\"1f473-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":22,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Wearing Turban\",\"b\":\"1F473-200D-2640-FE0F\",\"c\":\"1F473-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[22,31],\"o\":4},\"u6708\":{\"a\":\"Squared Cjk Unified Ideograph-6708\",\"b\":\"1F237-FE0F\",\"c\":\"1F237\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"chinese\",\"month\",\"moon\",\"japanese\",\"orange-square\",\"kanji\"],\"k\":[5,13],\"o\":2},\"straight_ruler\":{\"a\":\"Straight Ruler\",\"b\":\"1F4CF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stationery\",\"calculate\",\"length\",\"math\",\"school\",\"drawing\",\"architect\",\"sketch\"],\"k\":[26,37],\"o\":2},\"u6709\":{\"a\":\"Squared Cjk Unified Ideograph-6709\",\"b\":\"1F236\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"orange-square\",\"chinese\",\"have\",\"kanji\"],\"k\":[5,12],\"o\":2},\"triangular_ruler\":{\"a\":\"Triangular Ruler\",\"b\":\"1F4D0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stationery\",\"math\",\"architect\",\"sketch\"],\"k\":[26,38],\"o\":2},\"man_with_gua_pi_mao\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F472-1F3FB\",\"non_qualified\":null,\"image\":\"1f472-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":26,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F472-1F3FC\",\"non_qualified\":null,\"image\":\"1f472-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":27,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F472-1F3FD\",\"non_qualified\":null,\"image\":\"1f472-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":28,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F472-1F3FE\",\"non_qualified\":null,\"image\":\"1f472-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":29,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F472-1F3FF\",\"non_qualified\":null,\"image\":\"1f472-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":30,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man with Gua Pi Mao\",\"b\":\"1F472\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"male\",\"boy\",\"chinese\"],\"k\":[22,25],\"o\":2},\"flag-mx\":{\"a\":\"Mexico Flag\",\"b\":\"1F1F2-1F1FD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,22],\"o\":2},\"last_quarter_moon\":{\"a\":\"Last Quarter Moon Symbol\",\"b\":\"1F317\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,42],\"o\":2},\"person_with_headscarf\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D5-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d5-1f3fb.png\",\"sheet_x\":48,\"sheet_y\":35,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9D5-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d5-1f3fc.png\",\"sheet_x\":48,\"sheet_y\":36,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9D5-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d5-1f3fd.png\",\"sheet_x\":48,\"sheet_y\":37,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9D5-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d5-1f3fe.png\",\"sheet_x\":48,\"sheet_y\":38,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9D5-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d5-1f3ff.png\",\"sheet_x\":48,\"sheet_y\":39,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Person with Headscarf\",\"b\":\"1F9D5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[48,34],\"o\":5},\"waning_crescent_moon\":{\"a\":\"Waning Crescent Moon Symbol\",\"b\":\"1F318\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,43],\"o\":2},\"u6307\":{\"a\":\"Squared Cjk Unified Ideograph-6307\",\"b\":\"1F22F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"chinese\",\"point\",\"green-square\",\"kanji\"],\"k\":[5,7],\"o\":2},\"scissors\":{\"a\":\"Black Scissors\",\"b\":\"2702-FE0F\",\"c\":\"2702\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stationery\",\"cut\"],\"k\":[54,39],\"o\":2},\"flag-my\":{\"a\":\"Malaysia Flag\",\"b\":\"1F1F2-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,23],\"o\":2},\"ideograph_advantage\":{\"a\":\"Circled Ideograph Advantage\",\"b\":\"1F250\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"chinese\",\"kanji\",\"obtain\",\"get\",\"circle\"],\"k\":[5,17],\"o\":2},\"man_in_tuxedo\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F935-1F3FB\",\"non_qualified\":null,\"image\":\"1f935-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":24,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F935-1F3FC\",\"non_qualified\":null,\"image\":\"1f935-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":25,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F935-1F3FD\",\"non_qualified\":null,\"image\":\"1f935-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":26,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F935-1F3FE\",\"non_qualified\":null,\"image\":\"1f935-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":27,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F935-1F3FF\",\"non_qualified\":null,\"image\":\"1f935-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":28,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man in Tuxedo\",\"b\":\"1F935\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"couple\",\"marriage\",\"wedding\",\"groom\"],\"k\":[39,23],\"o\":4},\"flag-mz\":{\"a\":\"Mozambique Flag\",\"b\":\"1F1F2-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,24],\"o\":2},\"card_file_box\":{\"a\":\"Card File Box\",\"b\":\"1F5C3-FE0F\",\"c\":\"1F5C3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"business\",\"stationery\"],\"k\":[30,16],\"o\":2},\"crescent_moon\":{\"a\":\"Crescent Moon\",\"b\":\"1F319\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"night\",\"sleep\",\"sky\",\"evening\",\"magic\"],\"k\":[5,44],\"o\":2},\"flag-na\":{\"a\":\"Namibia Flag\",\"b\":\"1F1F3-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,25],\"o\":2},\"bride_with_veil\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F470-1F3FB\",\"non_qualified\":null,\"image\":\"1f470-1f3fb.png\",\"sheet_x\":22,\"sheet_y\":2,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F470-1F3FC\",\"non_qualified\":null,\"image\":\"1f470-1f3fc.png\",\"sheet_x\":22,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F470-1F3FD\",\"non_qualified\":null,\"image\":\"1f470-1f3fd.png\",\"sheet_x\":22,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F470-1F3FE\",\"non_qualified\":null,\"image\":\"1f470-1f3fe.png\",\"sheet_x\":22,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F470-1F3FF\",\"non_qualified\":null,\"image\":\"1f470-1f3ff.png\",\"sheet_x\":22,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Bride with Veil\",\"b\":\"1F470\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"couple\",\"marriage\",\"wedding\",\"woman\",\"bride\"],\"k\":[22,1],\"o\":2},\"new_moon_with_face\":{\"a\":\"New Moon with Face\",\"b\":\"1F31A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,45],\"o\":2},\"file_cabinet\":{\"a\":\"File Cabinet\",\"b\":\"1F5C4-FE0F\",\"c\":\"1F5C4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"filing\",\"organizing\"],\"k\":[30,17],\"o\":2},\"u5272\":{\"a\":\"Squared Cjk Unified Ideograph-5272\",\"b\":\"1F239\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"cut\",\"divide\",\"chinese\",\"kanji\",\"pink-square\"],\"k\":[5,15],\"o\":2},\"wastebasket\":{\"a\":\"Wastebasket\",\"b\":\"1F5D1-FE0F\",\"c\":\"1F5D1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"bin\",\"trash\",\"rubbish\",\"garbage\",\"toss\"],\"k\":[30,18],\"o\":2},\"pregnant_woman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F930-1F3FB\",\"non_qualified\":null,\"image\":\"1f930-1f3fb.png\",\"sheet_x\":38,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F930-1F3FC\",\"non_qualified\":null,\"image\":\"1f930-1f3fc.png\",\"sheet_x\":38,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F930-1F3FD\",\"non_qualified\":null,\"image\":\"1f930-1f3fd.png\",\"sheet_x\":38,\"sheet_y\":53,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F930-1F3FE\",\"non_qualified\":null,\"image\":\"1f930-1f3fe.png\",\"sheet_x\":38,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F930-1F3FF\",\"non_qualified\":null,\"image\":\"1f930-1f3ff.png\",\"sheet_x\":38,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Pregnant Woman\",\"b\":\"1F930\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"baby\"],\"k\":[38,50],\"o\":4},\"first_quarter_moon_with_face\":{\"a\":\"First Quarter Moon with Face\",\"b\":\"1F31B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,46],\"o\":2},\"flag-nc\":{\"a\":\"New Caledonia Flag\",\"b\":\"1F1F3-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,26],\"o\":2},\"u7121\":{\"a\":\"Squared Cjk Unified Ideograph-7121\",\"b\":\"1F21A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nothing\",\"chinese\",\"kanji\",\"japanese\",\"orange-square\"],\"k\":[5,6],\"o\":2},\"lock\":{\"a\":\"Lock\",\"b\":\"1F512\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"security\",\"password\",\"padlock\"],\"k\":[27,46],\"o\":2},\"flag-ne\":{\"a\":\"Niger Flag\",\"b\":\"1F1F3-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,27],\"o\":2},\"last_quarter_moon_with_face\":{\"a\":\"Last Quarter Moon with Face\",\"b\":\"1F31C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,47],\"o\":2},\"breast-feeding\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F931-1F3FB\",\"non_qualified\":null,\"image\":\"1f931-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":0,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F931-1F3FC\",\"non_qualified\":null,\"image\":\"1f931-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":1,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F931-1F3FD\",\"non_qualified\":null,\"image\":\"1f931-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":2,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F931-1F3FE\",\"non_qualified\":null,\"image\":\"1f931-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":3,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F931-1F3FF\",\"non_qualified\":null,\"image\":\"1f931-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":4,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Breast-Feeding\",\"b\":\"1F931\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[38,56],\"o\":5},\"u7981\":{\"a\":\"Squared Cjk Unified Ideograph-7981\",\"b\":\"1F232\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"kanji\",\"japanese\",\"chinese\",\"forbidden\",\"limit\",\"restricted\",\"red-square\"],\"k\":[5,8],\"o\":2},\"accept\":{\"a\":\"Circled Ideograph Accept\",\"b\":\"1F251\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"ok\",\"good\",\"chinese\",\"kanji\",\"agree\",\"yes\",\"orange-circle\"],\"k\":[5,18],\"o\":2},\"angel\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F47C-1F3FB\",\"non_qualified\":null,\"image\":\"1f47c-1f3fb.png\",\"sheet_x\":23,\"sheet_y\":38,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F47C-1F3FC\",\"non_qualified\":null,\"image\":\"1f47c-1f3fc.png\",\"sheet_x\":23,\"sheet_y\":39,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F47C-1F3FD\",\"non_qualified\":null,\"image\":\"1f47c-1f3fd.png\",\"sheet_x\":23,\"sheet_y\":40,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F47C-1F3FE\",\"non_qualified\":null,\"image\":\"1f47c-1f3fe.png\",\"sheet_x\":23,\"sheet_y\":41,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F47C-1F3FF\",\"non_qualified\":null,\"image\":\"1f47c-1f3ff.png\",\"sheet_x\":23,\"sheet_y\":42,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Baby Angel\",\"b\":\"1F47C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"heaven\",\"wings\",\"halo\"],\"k\":[23,37],\"o\":2},\"unlock\":{\"a\":\"Open Lock\",\"b\":\"1F513\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"privacy\",\"security\"],\"k\":[27,47],\"o\":2},\"flag-nf\":{\"a\":\"Norfolk Island Flag\",\"b\":\"1F1F3-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,28],\"o\":2},\"thermometer\":{\"a\":\"Thermometer\",\"b\":\"1F321-FE0F\",\"c\":\"1F321\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weather\",\"temperature\",\"hot\",\"cold\"],\"k\":[5,52],\"o\":2},\"flag-ng\":{\"a\":\"Nigeria Flag\",\"b\":\"1F1F3-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,29],\"o\":2},\"u7533\":{\"a\":\"Squared Cjk Unified Ideograph-7533\",\"b\":\"1F238\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"chinese\",\"japanese\",\"kanji\",\"orange-square\"],\"k\":[5,14],\"o\":2},\"sunny\":{\"a\":\"Black Sun with Rays\",\"b\":\"2600-FE0F\",\"c\":\"2600\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weather\",\"nature\",\"brightness\",\"summer\",\"beach\",\"spring\"],\"k\":[52,49],\"o\":2},\"lock_with_ink_pen\":{\"a\":\"Lock with Ink Pen\",\"b\":\"1F50F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"security\",\"secret\"],\"k\":[27,43],\"o\":2},\"santa\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F385-1F3FB\",\"non_qualified\":null,\"image\":\"1f385-1f3fb.png\",\"sheet_x\":7,\"sheet_y\":37,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F385-1F3FC\",\"non_qualified\":null,\"image\":\"1f385-1f3fc.png\",\"sheet_x\":7,\"sheet_y\":38,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F385-1F3FD\",\"non_qualified\":null,\"image\":\"1f385-1f3fd.png\",\"sheet_x\":7,\"sheet_y\":39,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F385-1F3FE\",\"non_qualified\":null,\"image\":\"1f385-1f3fe.png\",\"sheet_x\":7,\"sheet_y\":40,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F385-1F3FF\",\"non_qualified\":null,\"image\":\"1f385-1f3ff.png\",\"sheet_x\":7,\"sheet_y\":41,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Father Christmas\",\"b\":\"1F385\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"festival\",\"man\",\"male\",\"xmas\",\"father christmas\"],\"k\":[7,36],\"o\":2},\"closed_lock_with_key\":{\"a\":\"Closed Lock with Key\",\"b\":\"1F510\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"security\",\"privacy\"],\"k\":[27,44],\"o\":2},\"u5408\":{\"a\":\"Squared Cjk Unified Ideograph-5408\",\"b\":\"1F234\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"japanese\",\"chinese\",\"join\",\"kanji\",\"red-square\"],\"k\":[5,10],\"o\":2},\"flag-ni\":{\"a\":\"Nicaragua Flag\",\"b\":\"1F1F3-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,30],\"o\":2},\"mrs_claus\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F936-1F3FB\",\"non_qualified\":null,\"image\":\"1f936-1f3fb.png\",\"sheet_x\":39,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F936-1F3FC\",\"non_qualified\":null,\"image\":\"1f936-1f3fc.png\",\"sheet_x\":39,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F936-1F3FD\",\"non_qualified\":null,\"image\":\"1f936-1f3fd.png\",\"sheet_x\":39,\"sheet_y\":32,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F936-1F3FE\",\"non_qualified\":null,\"image\":\"1f936-1f3fe.png\",\"sheet_x\":39,\"sheet_y\":33,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F936-1F3FF\",\"non_qualified\":null,\"image\":\"1f936-1f3ff.png\",\"sheet_x\":39,\"sheet_y\":34,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Mother Christmas\",\"b\":\"1F936\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"woman\",\"female\",\"xmas\",\"mother christmas\"],\"k\":[39,29],\"n\":[\"mother_christmas\"],\"o\":4},\"full_moon_with_face\":{\"a\":\"Full Moon with Face\",\"b\":\"1F31D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"k\":[5,48],\"o\":2},\"key\":{\"a\":\"Key\",\"b\":\"1F511\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"lock\",\"door\",\"password\"],\"k\":[27,45],\"o\":2},\"superhero\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9B8-1F3FB\",\"non_qualified\":null,\"image\":\"1f9b8-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":31,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9B8-1F3FC\",\"non_qualified\":null,\"image\":\"1f9b8-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":32,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9B8-1F3FD\",\"non_qualified\":null,\"image\":\"1f9b8-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":33,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9B8-1F3FE\",\"non_qualified\":null,\"image\":\"1f9b8-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":34,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9B8-1F3FF\",\"non_qualified\":null,\"image\":\"1f9b8-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":35,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Superhero\",\"b\":\"1F9B8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,30],\"o\":11},\"flag-nl\":{\"a\":\"Netherlands Flag\",\"b\":\"1F1F3-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,31],\"o\":2},\"u7a7a\":{\"a\":\"Squared Cjk Unified Ideograph-7a7a\",\"b\":\"1F233\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"kanji\",\"japanese\",\"chinese\",\"empty\",\"sky\",\"blue-square\"],\"k\":[5,9],\"o\":2},\"sun_with_face\":{\"a\":\"Sun with Face\",\"b\":\"1F31E\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"morning\",\"sky\"],\"k\":[5,49],\"o\":2},\"male_superhero\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9B8-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9B8-1F3FB-200D-2642\",\"image\":\"1f9b8-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":25,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9B8-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9B8-1F3FC-200D-2642\",\"image\":\"1f9b8-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":26,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9B8-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9B8-1F3FD-200D-2642\",\"image\":\"1f9b8-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":27,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9B8-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9B8-1F3FE-200D-2642\",\"image\":\"1f9b8-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":28,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9B8-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9B8-1F3FF-200D-2642\",\"image\":\"1f9b8-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":29,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Superhero\",\"b\":\"1F9B8-200D-2642-FE0F\",\"c\":\"1F9B8-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,24],\"o\":11},\"ringed_planet\":{\"a\":\"Ringed Planet\",\"b\":\"1FA90\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,4],\"o\":12},\"old_key\":{\"a\":\"Old Key\",\"b\":\"1F5DD-FE0F\",\"c\":\"1F5DD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"lock\",\"door\",\"password\"],\"k\":[30,22],\"o\":2},\"congratulations\":{\"a\":\"Circled Ideograph Congratulation\",\"b\":\"3297-FE0F\",\"c\":\"3297\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"chinese\",\"kanji\",\"japanese\",\"red-circle\"],\"k\":[55,46],\"o\":2},\"flag-no\":{\"a\":\"Norway Flag\",\"b\":\"1F1F3-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,32],\"o\":2},\"star\":{\"a\":\"White Medium Star\",\"b\":\"2B50\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"night\",\"yellow\"],\"k\":[55,42],\"o\":2},\"secret\":{\"a\":\"Circled Ideograph Secret\",\"b\":\"3299-FE0F\",\"c\":\"3299\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"privacy\",\"chinese\",\"sshh\",\"kanji\",\"red-circle\"],\"k\":[55,47],\"o\":2},\"flag-np\":{\"a\":\"Nepal Flag\",\"b\":\"1F1F3-1F1F5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,33],\"o\":2},\"female_superhero\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9B8-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9B8-1F3FB-200D-2640\",\"image\":\"1f9b8-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":19,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9B8-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9B8-1F3FC-200D-2640\",\"image\":\"1f9b8-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":20,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9B8-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9B8-1F3FD-200D-2640\",\"image\":\"1f9b8-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":21,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9B8-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9B8-1F3FE-200D-2640\",\"image\":\"1f9b8-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":22,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9B8-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9B8-1F3FF-200D-2640\",\"image\":\"1f9b8-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":23,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Superhero\",\"b\":\"1F9B8-200D-2640-FE0F\",\"c\":\"1F9B8-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,18],\"o\":11},\"hammer\":{\"a\":\"Hammer\",\"b\":\"1F528\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"tools\",\"build\",\"create\"],\"k\":[28,11],\"o\":2},\"star2\":{\"a\":\"Glowing Star\",\"b\":\"1F31F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"night\",\"sparkle\",\"awesome\",\"good\",\"magic\"],\"k\":[5,50],\"o\":2},\"flag-nr\":{\"a\":\"Nauru Flag\",\"b\":\"1F1F3-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,34],\"o\":2},\"axe\":{\"a\":\"Axe\",\"b\":\"1FA93\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,7],\"o\":12},\"u55b6\":{\"a\":\"Squared Cjk Unified Ideograph-55b6\",\"b\":\"1F23A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"japanese\",\"opening hours\",\"orange-square\"],\"k\":[5,16],\"o\":2},\"supervillain\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9B9-1F3FB\",\"non_qualified\":null,\"image\":\"1f9b9-1f3fb.png\",\"sheet_x\":43,\"sheet_y\":49,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9B9-1F3FC\",\"non_qualified\":null,\"image\":\"1f9b9-1f3fc.png\",\"sheet_x\":43,\"sheet_y\":50,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9B9-1F3FD\",\"non_qualified\":null,\"image\":\"1f9b9-1f3fd.png\",\"sheet_x\":43,\"sheet_y\":51,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9B9-1F3FE\",\"non_qualified\":null,\"image\":\"1f9b9-1f3fe.png\",\"sheet_x\":43,\"sheet_y\":52,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9B9-1F3FF\",\"non_qualified\":null,\"image\":\"1f9b9-1f3ff.png\",\"sheet_x\":43,\"sheet_y\":53,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Supervillain\",\"b\":\"1F9B9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,48],\"o\":11},\"stars\":{\"a\":\"Shooting Star\",\"b\":\"1F320\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"night\",\"photo\"],\"k\":[5,51],\"o\":2},\"u6e80\":{\"a\":\"Squared Cjk Unified Ideograph-6e80\",\"b\":\"1F235\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"full\",\"chinese\",\"japanese\",\"red-square\",\"kanji\"],\"k\":[5,11],\"o\":2},\"flag-nu\":{\"a\":\"Niue Flag\",\"b\":\"1F1F3-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,35],\"o\":2},\"pick\":{\"a\":\"Pick\",\"b\":\"26CF-FE0F\",\"c\":\"26CF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"tools\",\"dig\"],\"k\":[54,5],\"o\":2},\"male_supervillain\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9B9-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9B9-1F3FB-200D-2642\",\"image\":\"1f9b9-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":43,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9B9-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9B9-1F3FC-200D-2642\",\"image\":\"1f9b9-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":44,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9B9-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9B9-1F3FD-200D-2642\",\"image\":\"1f9b9-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":45,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9B9-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9B9-1F3FE-200D-2642\",\"image\":\"1f9b9-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":46,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9B9-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9B9-1F3FF-200D-2642\",\"image\":\"1f9b9-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":43,\"sheet_y\":47,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Supervillain\",\"b\":\"1F9B9-200D-2642-FE0F\",\"c\":\"1F9B9-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,42],\"o\":11},\"female_supervillain\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9B9-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9B9-1F3FB-200D-2640\",\"image\":\"1f9b9-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":37,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9B9-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9B9-1F3FC-200D-2640\",\"image\":\"1f9b9-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":38,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9B9-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9B9-1F3FD-200D-2640\",\"image\":\"1f9b9-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":39,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9B9-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9B9-1F3FE-200D-2640\",\"image\":\"1f9b9-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":40,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9B9-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9B9-1F3FF-200D-2640\",\"image\":\"1f9b9-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":43,\"sheet_y\":41,\"added_in\":\"11.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Supervillain\",\"b\":\"1F9B9-200D-2640-FE0F\",\"c\":\"1F9B9-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,36],\"o\":11},\"hammer_and_pick\":{\"a\":\"Hammer and Pick\",\"b\":\"2692-FE0F\",\"c\":\"2692\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"tools\",\"build\",\"create\"],\"k\":[53,41],\"o\":2},\"milky_way\":{\"a\":\"Milky Way\",\"b\":\"1F30C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"photo\",\"space\",\"stars\"],\"k\":[5,31],\"o\":2},\"red_circle\":{\"a\":\"Large Red Circle\",\"b\":\"1F534\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"error\",\"danger\"],\"k\":[28,23],\"o\":2},\"flag-nz\":{\"a\":\"New Zealand Flag\",\"b\":\"1F1F3-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,36],\"o\":2},\"large_orange_circle\":{\"a\":\"Large Orange Circle\",\"b\":\"1F7E0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,3],\"o\":12},\"hammer_and_wrench\":{\"a\":\"Hammer and Wrench\",\"b\":\"1F6E0-FE0F\",\"c\":\"1F6E0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"tools\",\"build\",\"create\"],\"k\":[36,42],\"o\":2},\"flag-om\":{\"a\":\"Oman Flag\",\"b\":\"1F1F4-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,37],\"o\":2},\"cloud\":{\"a\":\"Cloud\",\"b\":\"2601-FE0F\",\"c\":\"2601\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weather\",\"sky\"],\"k\":[52,50],\"o\":2},\"mage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D9-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d9-1f3fb.png\",\"sheet_x\":49,\"sheet_y\":50,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D9-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9D9-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d9-1f3fc.png\",\"sheet_x\":49,\"sheet_y\":51,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D9-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9D9-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d9-1f3fd.png\",\"sheet_x\":49,\"sheet_y\":52,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D9-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9D9-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d9-1f3fe.png\",\"sheet_x\":49,\"sheet_y\":53,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D9-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9D9-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d9-1f3ff.png\",\"sheet_x\":49,\"sheet_y\":54,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D9-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9D9-200D-2640-FE0F\",\"a\":\"Mage\",\"b\":\"1F9D9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,49],\"o\":5},\"dagger_knife\":{\"a\":\"Dagger Knife\",\"b\":\"1F5E1-FE0F\",\"c\":\"1F5E1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,24],\"o\":2},\"partly_sunny\":{\"a\":\"Sun Behind Cloud\",\"b\":\"26C5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weather\",\"nature\",\"cloudy\",\"morning\",\"fall\",\"spring\"],\"k\":[54,2],\"o\":2},\"large_yellow_circle\":{\"a\":\"Large Yellow Circle\",\"b\":\"1F7E1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,4],\"o\":12},\"male_mage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D9-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FB-200D-2642\",\"image\":\"1f9d9-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":44,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9D9-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FC-200D-2642\",\"image\":\"1f9d9-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":45,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9D9-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FD-200D-2642\",\"image\":\"1f9d9-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":46,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9D9-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FE-200D-2642\",\"image\":\"1f9d9-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":47,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9D9-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9D9-1F3FF-200D-2642\",\"image\":\"1f9d9-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":48,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Mage\",\"b\":\"1F9D9-200D-2642-FE0F\",\"c\":\"1F9D9-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,43],\"o\":5},\"flag-pa\":{\"a\":\"Panama Flag\",\"b\":\"1F1F5-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,38],\"o\":2},\"thunder_cloud_and_rain\":{\"a\":\"Thunder Cloud and Rain\",\"b\":\"26C8-FE0F\",\"c\":\"26C8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[54,3],\"o\":2},\"large_green_circle\":{\"a\":\"Large Green Circle\",\"b\":\"1F7E2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,5],\"o\":12},\"female_mage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D9-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FB-200D-2640\",\"image\":\"1f9d9-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":38,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D9-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9D9-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FC-200D-2640\",\"image\":\"1f9d9-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":39,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D9-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9D9-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FD-200D-2640\",\"image\":\"1f9d9-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":40,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D9-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9D9-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FE-200D-2640\",\"image\":\"1f9d9-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":41,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D9-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9D9-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9D9-1F3FF-200D-2640\",\"image\":\"1f9d9-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":42,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D9-1F3FF\"}},\"obsoletes\":\"1F9D9\",\"a\":\"Female Mage\",\"b\":\"1F9D9-200D-2640-FE0F\",\"c\":\"1F9D9-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,37],\"o\":5},\"crossed_swords\":{\"a\":\"Crossed Swords\",\"b\":\"2694-FE0F\",\"c\":\"2694\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weapon\"],\"k\":[53,43],\"o\":2},\"flag-pe\":{\"a\":\"Peru Flag\",\"b\":\"1F1F5-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,39],\"o\":2},\"gun\":{\"a\":\"Pistol\",\"b\":\"1F52B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"violence\",\"weapon\",\"pistol\",\"revolver\"],\"k\":[28,14],\"o\":2},\"mostly_sunny\":{\"a\":\"Mostly Sunny\",\"b\":\"1F324-FE0F\",\"c\":\"1F324\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[5,53],\"n\":[\"sun_small_cloud\"],\"o\":2},\"fairy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DA-1F3FB\",\"non_qualified\":null,\"image\":\"1f9da-1f3fb.png\",\"sheet_x\":50,\"sheet_y\":11,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoleted_by\":\"1F9DA-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9DA-1F3FC\",\"non_qualified\":null,\"image\":\"1f9da-1f3fc.png\",\"sheet_x\":50,\"sheet_y\":12,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoleted_by\":\"1F9DA-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9DA-1F3FD\",\"non_qualified\":null,\"image\":\"1f9da-1f3fd.png\",\"sheet_x\":50,\"sheet_y\":13,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoleted_by\":\"1F9DA-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9DA-1F3FE\",\"non_qualified\":null,\"image\":\"1f9da-1f3fe.png\",\"sheet_x\":50,\"sheet_y\":14,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoleted_by\":\"1F9DA-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9DA-1F3FF\",\"non_qualified\":null,\"image\":\"1f9da-1f3ff.png\",\"sheet_x\":50,\"sheet_y\":15,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoleted_by\":\"1F9DA-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9DA-200D-2640-FE0F\",\"a\":\"Fairy\",\"b\":\"1F9DA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[50,10],\"o\":5},\"flag-pf\":{\"a\":\"French Polynesia Flag\",\"b\":\"1F1F5-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,40],\"o\":2},\"large_blue_circle\":{\"a\":\"Large Blue Circle\",\"b\":\"1F535\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"icon\",\"button\"],\"k\":[28,24],\"o\":2},\"large_purple_circle\":{\"a\":\"Large Purple Circle\",\"b\":\"1F7E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,6],\"o\":12},\"bow_and_arrow\":{\"a\":\"Bow and Arrow\",\"b\":\"1F3F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\"],\"k\":[11,21],\"o\":2},\"male_fairy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DA-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FB-200D-2642\",\"image\":\"1f9da-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":5,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9DA-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FC-200D-2642\",\"image\":\"1f9da-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":6,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9DA-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FD-200D-2642\",\"image\":\"1f9da-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":7,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9DA-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FE-200D-2642\",\"image\":\"1f9da-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":8,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9DA-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9DA-1F3FF-200D-2642\",\"image\":\"1f9da-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":9,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"a\":\"Male Fairy\",\"b\":\"1F9DA-200D-2642-FE0F\",\"c\":\"1F9DA-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[50,4],\"o\":5},\"barely_sunny\":{\"a\":\"Barely Sunny\",\"b\":\"1F325-FE0F\",\"c\":\"1F325\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[5,54],\"n\":[\"sun_behind_cloud\"],\"o\":2},\"flag-pg\":{\"a\":\"Papua New Guinea Flag\",\"b\":\"1F1F5-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,41],\"o\":2},\"shield\":{\"a\":\"Shield\",\"b\":\"1F6E1-FE0F\",\"c\":\"1F6E1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"protection\",\"security\"],\"k\":[36,43],\"o\":2},\"partly_sunny_rain\":{\"a\":\"Partly Sunny Rain\",\"b\":\"1F326-FE0F\",\"c\":\"1F326\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[5,55],\"n\":[\"sun_behind_rain_cloud\"],\"o\":2},\"large_brown_circle\":{\"a\":\"Large Brown Circle\",\"b\":\"1F7E4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,7],\"o\":12},\"female_fairy\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DA-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FB-200D-2640\",\"image\":\"1f9da-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":56,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoletes\":\"1F9DA-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9DA-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FC-200D-2640\",\"image\":\"1f9da-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":0,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoletes\":\"1F9DA-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9DA-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FD-200D-2640\",\"image\":\"1f9da-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":1,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoletes\":\"1F9DA-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9DA-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FE-200D-2640\",\"image\":\"1f9da-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":2,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoletes\":\"1F9DA-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9DA-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9DA-1F3FF-200D-2640\",\"image\":\"1f9da-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":3,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false,\"obsoletes\":\"1F9DA-1F3FF\"}},\"obsoletes\":\"1F9DA\",\"a\":\"Female Fairy\",\"b\":\"1F9DA-200D-2640-FE0F\",\"c\":\"1F9DA-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,55],\"o\":5},\"flag-ph\":{\"a\":\"Philippines Flag\",\"b\":\"1F1F5-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,42],\"o\":2},\"flag-pk\":{\"a\":\"Pakistan Flag\",\"b\":\"1F1F5-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,43],\"o\":2},\"black_circle\":{\"a\":\"Medium Black Circle\",\"b\":\"26AB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"button\",\"round\"],\"k\":[53,53],\"o\":2},\"wrench\":{\"a\":\"Wrench\",\"b\":\"1F527\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"tools\",\"diy\",\"ikea\",\"fix\",\"maintainer\"],\"k\":[28,10],\"o\":2},\"vampire\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DB-1F3FB\",\"non_qualified\":null,\"image\":\"1f9db-1f3fb.png\",\"sheet_x\":50,\"sheet_y\":29,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DB-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9DB-1F3FC\",\"non_qualified\":null,\"image\":\"1f9db-1f3fc.png\",\"sheet_x\":50,\"sheet_y\":30,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DB-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9DB-1F3FD\",\"non_qualified\":null,\"image\":\"1f9db-1f3fd.png\",\"sheet_x\":50,\"sheet_y\":31,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DB-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9DB-1F3FE\",\"non_qualified\":null,\"image\":\"1f9db-1f3fe.png\",\"sheet_x\":50,\"sheet_y\":32,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DB-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9DB-1F3FF\",\"non_qualified\":null,\"image\":\"1f9db-1f3ff.png\",\"sheet_x\":50,\"sheet_y\":33,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DB-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9DB-200D-2640-FE0F\",\"a\":\"Vampire\",\"b\":\"1F9DB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[50,28],\"o\":5},\"rain_cloud\":{\"a\":\"Rain Cloud\",\"b\":\"1F327-FE0F\",\"c\":\"1F327\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[5,56],\"o\":2},\"snow_cloud\":{\"a\":\"Snow Cloud\",\"b\":\"1F328-FE0F\",\"c\":\"1F328\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[6,0],\"o\":2},\"flag-pl\":{\"a\":\"Poland Flag\",\"b\":\"1F1F5-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,44],\"o\":2},\"male_vampire\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DB-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FB-200D-2642\",\"image\":\"1f9db-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":23,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9DB-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FC-200D-2642\",\"image\":\"1f9db-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":24,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9DB-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FD-200D-2642\",\"image\":\"1f9db-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":25,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9DB-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FE-200D-2642\",\"image\":\"1f9db-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":26,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9DB-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9DB-1F3FF-200D-2642\",\"image\":\"1f9db-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":27,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Male Vampire\",\"b\":\"1F9DB-200D-2642-FE0F\",\"c\":\"1F9DB-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[50,22],\"o\":5},\"nut_and_bolt\":{\"a\":\"Nut and Bolt\",\"b\":\"1F529\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"handy\",\"tools\",\"fix\"],\"k\":[28,12],\"o\":2},\"white_circle\":{\"a\":\"Medium White Circle\",\"b\":\"26AA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"round\"],\"k\":[53,52],\"o\":2},\"female_vampire\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DB-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FB-200D-2640\",\"image\":\"1f9db-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":17,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DB-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9DB-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FC-200D-2640\",\"image\":\"1f9db-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":18,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DB-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9DB-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FD-200D-2640\",\"image\":\"1f9db-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":19,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DB-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9DB-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FE-200D-2640\",\"image\":\"1f9db-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":20,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DB-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9DB-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9DB-1F3FF-200D-2640\",\"image\":\"1f9db-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":21,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DB-1F3FF\"}},\"obsoletes\":\"1F9DB\",\"a\":\"Female Vampire\",\"b\":\"1F9DB-200D-2640-FE0F\",\"c\":\"1F9DB-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[50,16],\"o\":5},\"flag-pm\":{\"a\":\"St. Pierre & Miquelon Flag\",\"b\":\"1F1F5-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,45],\"o\":2},\"large_red_square\":{\"a\":\"Large Red Square\",\"b\":\"1F7E5\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,8],\"o\":12},\"lightning\":{\"a\":\"Lightning\",\"b\":\"1F329-FE0F\",\"c\":\"1F329\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[6,1],\"n\":[\"lightning_cloud\"],\"o\":2},\"gear\":{\"a\":\"Gear\",\"b\":\"2699-FE0F\",\"c\":\"2699\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"cog\"],\"k\":[53,47],\"o\":2},\"merperson\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DC-1F3FB\",\"non_qualified\":null,\"image\":\"1f9dc-1f3fb.png\",\"sheet_x\":50,\"sheet_y\":47,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DC-1F3FB-200D-2642-FE0F\"},\"1F3FC\":{\"unified\":\"1F9DC-1F3FC\",\"non_qualified\":null,\"image\":\"1f9dc-1f3fc.png\",\"sheet_x\":50,\"sheet_y\":48,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DC-1F3FC-200D-2642-FE0F\"},\"1F3FD\":{\"unified\":\"1F9DC-1F3FD\",\"non_qualified\":null,\"image\":\"1f9dc-1f3fd.png\",\"sheet_x\":50,\"sheet_y\":49,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DC-1F3FD-200D-2642-FE0F\"},\"1F3FE\":{\"unified\":\"1F9DC-1F3FE\",\"non_qualified\":null,\"image\":\"1f9dc-1f3fe.png\",\"sheet_x\":50,\"sheet_y\":50,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DC-1F3FE-200D-2642-FE0F\"},\"1F3FF\":{\"unified\":\"1F9DC-1F3FF\",\"non_qualified\":null,\"image\":\"1f9dc-1f3ff.png\",\"sheet_x\":50,\"sheet_y\":51,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DC-1F3FF-200D-2642-FE0F\"}},\"obsoleted_by\":\"1F9DC-200D-2642-FE0F\",\"a\":\"Merperson\",\"b\":\"1F9DC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[50,46],\"o\":5},\"tornado\":{\"a\":\"Tornado\",\"b\":\"1F32A-FE0F\",\"c\":\"1F32A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weather\",\"cyclone\",\"twister\"],\"k\":[6,2],\"n\":[\"tornado_cloud\"],\"o\":2},\"large_orange_square\":{\"a\":\"Large Orange Square\",\"b\":\"1F7E7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,10],\"o\":12},\"flag-pn\":{\"a\":\"Pitcairn Islands Flag\",\"b\":\"1F1F5-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,46],\"o\":2},\"compression\":{\"a\":\"Compression\",\"b\":\"1F5DC-FE0F\",\"c\":\"1F5DC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,21],\"o\":2},\"merman\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DC-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FB-200D-2642\",\"image\":\"1f9dc-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":41,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DC-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9DC-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FC-200D-2642\",\"image\":\"1f9dc-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":42,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DC-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9DC-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FD-200D-2642\",\"image\":\"1f9dc-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":43,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DC-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9DC-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FE-200D-2642\",\"image\":\"1f9dc-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":44,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DC-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9DC-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9DC-1F3FF-200D-2642\",\"image\":\"1f9dc-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":50,\"sheet_y\":45,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DC-1F3FF\"}},\"obsoletes\":\"1F9DC\",\"a\":\"Merman\",\"b\":\"1F9DC-200D-2642-FE0F\",\"c\":\"1F9DC-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[50,40],\"o\":5},\"large_yellow_square\":{\"a\":\"Large Yellow Square\",\"b\":\"1F7E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,11],\"o\":12},\"fog\":{\"a\":\"Fog\",\"b\":\"1F32B-FE0F\",\"c\":\"1F32B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weather\"],\"k\":[6,3],\"o\":2},\"scales\":{\"a\":\"Scales\",\"b\":\"2696-FE0F\",\"c\":\"2696\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[53,45],\"o\":2},\"flag-pr\":{\"a\":\"Puerto Rico Flag\",\"b\":\"1F1F5-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,47],\"o\":2},\"wind_blowing_face\":{\"a\":\"Wind Blowing Face\",\"b\":\"1F32C-FE0F\",\"c\":\"1F32C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[6,4],\"o\":2},\"flag-ps\":{\"a\":\"Palestinian Territories Flag\",\"b\":\"1F1F5-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,48],\"o\":2},\"mermaid\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DC-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FB-200D-2640\",\"image\":\"1f9dc-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":35,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9DC-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FC-200D-2640\",\"image\":\"1f9dc-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":36,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9DC-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FD-200D-2640\",\"image\":\"1f9dc-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":37,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9DC-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FE-200D-2640\",\"image\":\"1f9dc-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":38,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9DC-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9DC-1F3FF-200D-2640\",\"image\":\"1f9dc-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":39,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Mermaid\",\"b\":\"1F9DC-200D-2640-FE0F\",\"c\":\"1F9DC-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[50,34],\"o\":5},\"probing_cane\":{\"a\":\"Probing Cane\",\"b\":\"1F9AF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[43,3],\"o\":12},\"large_green_square\":{\"a\":\"Large Green Square\",\"b\":\"1F7E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,12],\"o\":12},\"flag-pt\":{\"a\":\"Portugal Flag\",\"b\":\"1F1F5-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,49],\"o\":2},\"link\":{\"a\":\"Link Symbol\",\"b\":\"1F517\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"rings\",\"url\"],\"k\":[27,51],\"o\":2},\"large_blue_square\":{\"a\":\"Large Blue Square\",\"b\":\"1F7E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,9],\"o\":12},\"elf\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DD-1F3FB\",\"non_qualified\":null,\"image\":\"1f9dd-1f3fb.png\",\"sheet_x\":51,\"sheet_y\":8,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DD-1F3FB-200D-2642-FE0F\"},\"1F3FC\":{\"unified\":\"1F9DD-1F3FC\",\"non_qualified\":null,\"image\":\"1f9dd-1f3fc.png\",\"sheet_x\":51,\"sheet_y\":9,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DD-1F3FC-200D-2642-FE0F\"},\"1F3FD\":{\"unified\":\"1F9DD-1F3FD\",\"non_qualified\":null,\"image\":\"1f9dd-1f3fd.png\",\"sheet_x\":51,\"sheet_y\":10,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DD-1F3FD-200D-2642-FE0F\"},\"1F3FE\":{\"unified\":\"1F9DD-1F3FE\",\"non_qualified\":null,\"image\":\"1f9dd-1f3fe.png\",\"sheet_x\":51,\"sheet_y\":11,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DD-1F3FE-200D-2642-FE0F\"},\"1F3FF\":{\"unified\":\"1F9DD-1F3FF\",\"non_qualified\":null,\"image\":\"1f9dd-1f3ff.png\",\"sheet_x\":51,\"sheet_y\":12,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9DD-1F3FF-200D-2642-FE0F\"}},\"obsoleted_by\":\"1F9DD-200D-2642-FE0F\",\"a\":\"Elf\",\"b\":\"1F9DD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,7],\"o\":5},\"cyclone\":{\"a\":\"Cyclone\",\"b\":\"1F300\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weather\",\"swirl\",\"blue\",\"cloud\",\"vortex\",\"spiral\",\"whirlpool\",\"spin\",\"tornado\",\"hurricane\",\"typhoon\"],\"k\":[5,19],\"o\":2},\"rainbow\":{\"a\":\"Rainbow\",\"b\":\"1F308\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"nature\",\"happy\",\"unicorn_face\",\"photo\",\"sky\",\"spring\"],\"k\":[5,27],\"o\":2},\"male_elf\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DD-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FB-200D-2642\",\"image\":\"1f9dd-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":51,\"sheet_y\":2,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DD-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9DD-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FC-200D-2642\",\"image\":\"1f9dd-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":51,\"sheet_y\":3,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DD-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9DD-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FD-200D-2642\",\"image\":\"1f9dd-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":51,\"sheet_y\":4,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DD-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9DD-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FE-200D-2642\",\"image\":\"1f9dd-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":51,\"sheet_y\":5,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DD-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9DD-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9DD-1F3FF-200D-2642\",\"image\":\"1f9dd-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":51,\"sheet_y\":6,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9DD-1F3FF\"}},\"obsoletes\":\"1F9DD\",\"a\":\"Male Elf\",\"b\":\"1F9DD-200D-2642-FE0F\",\"c\":\"1F9DD-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,1],\"o\":5},\"flag-pw\":{\"a\":\"Palau Flag\",\"b\":\"1F1F5-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,50],\"o\":2},\"chains\":{\"a\":\"Chains\",\"b\":\"26D3-FE0F\",\"c\":\"26D3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"lock\",\"arrest\"],\"k\":[54,7],\"o\":2},\"large_purple_square\":{\"a\":\"Large Purple Square\",\"b\":\"1F7EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,13],\"o\":12},\"female_elf\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9DD-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FB-200D-2640\",\"image\":\"1f9dd-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":53,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9DD-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FC-200D-2640\",\"image\":\"1f9dd-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":54,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9DD-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FD-200D-2640\",\"image\":\"1f9dd-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":55,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9DD-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FE-200D-2640\",\"image\":\"1f9dd-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":50,\"sheet_y\":56,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9DD-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9DD-1F3FF-200D-2640\",\"image\":\"1f9dd-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":51,\"sheet_y\":0,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Female Elf\",\"b\":\"1F9DD-200D-2640-FE0F\",\"c\":\"1F9DD-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[50,52],\"o\":5},\"flag-py\":{\"a\":\"Paraguay Flag\",\"b\":\"1F1F5-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,51],\"o\":2},\"closed_umbrella\":{\"a\":\"Closed Umbrella\",\"b\":\"1F302\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"weather\",\"rain\",\"drizzle\"],\"k\":[5,21],\"o\":2},\"toolbox\":{\"a\":\"Toolbox\",\"b\":\"1F9F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,35],\"o\":11},\"large_brown_square\":{\"a\":\"Large Brown Square\",\"b\":\"1F7EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[37,14],\"o\":12},\"magnet\":{\"a\":\"Magnet\",\"b\":\"1F9F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,37],\"o\":11},\"genie\":{\"obsoleted_by\":\"1F9DE-200D-2642-FE0F\",\"a\":\"Genie\",\"b\":\"1F9DE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,15],\"o\":5},\"flag-qa\":{\"a\":\"Qatar Flag\",\"b\":\"1F1F6-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,52],\"o\":2},\"umbrella\":{\"a\":\"Umbrella\",\"b\":\"2602-FE0F\",\"c\":\"2602\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"rainy\",\"weather\",\"spring\"],\"k\":[52,51],\"o\":2},\"black_large_square\":{\"a\":\"Black Large Square\",\"b\":\"2B1B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"icon\",\"button\"],\"k\":[55,40],\"o\":2},\"male_genie\":{\"obsoletes\":\"1F9DE\",\"a\":\"Male Genie\",\"b\":\"1F9DE-200D-2642-FE0F\",\"c\":\"1F9DE-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,14],\"o\":5},\"umbrella_with_rain_drops\":{\"a\":\"Umbrella with Rain Drops\",\"b\":\"2614\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,56],\"o\":2},\"flag-re\":{\"a\":\"Réunion Flag\",\"b\":\"1F1F7-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,53],\"o\":2},\"white_large_square\":{\"a\":\"White Large Square\",\"b\":\"2B1C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"icon\",\"stone\",\"button\"],\"k\":[55,41],\"o\":2},\"alembic\":{\"a\":\"Alembic\",\"b\":\"2697-FE0F\",\"c\":\"2697\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"distilling\",\"science\",\"experiment\",\"chemistry\"],\"k\":[53,46],\"o\":2},\"black_medium_square\":{\"a\":\"Black Medium Square\",\"b\":\"25FC-FE0F\",\"c\":\"25FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"button\",\"icon\"],\"k\":[52,46],\"o\":2},\"test_tube\":{\"a\":\"Test Tube\",\"b\":\"1F9EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,29],\"o\":11},\"flag-ro\":{\"a\":\"Romania Flag\",\"b\":\"1F1F7-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,54],\"o\":2},\"female_genie\":{\"a\":\"Female Genie\",\"b\":\"1F9DE-200D-2640-FE0F\",\"c\":\"1F9DE-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,13],\"o\":5},\"umbrella_on_ground\":{\"a\":\"Umbrella on Ground\",\"b\":\"26F1-FE0F\",\"c\":\"26F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[54,12],\"o\":2},\"zombie\":{\"obsoleted_by\":\"1F9DF-200D-2642-FE0F\",\"a\":\"Zombie\",\"b\":\"1F9DF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,18],\"o\":5},\"zap\":{\"a\":\"High Voltage Sign\",\"b\":\"26A1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"thunder\",\"weather\",\"lightning bolt\",\"fast\"],\"k\":[53,51],\"o\":2},\"white_medium_square\":{\"a\":\"White Medium Square\",\"b\":\"25FB-FE0F\",\"c\":\"25FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"stone\",\"icon\"],\"k\":[52,45],\"o\":2},\"flag-rs\":{\"a\":\"Serbia Flag\",\"b\":\"1F1F7-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[3,55],\"o\":2},\"petri_dish\":{\"a\":\"Petri Dish\",\"b\":\"1F9EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,30],\"o\":11},\"snowflake\":{\"a\":\"Snowflake\",\"b\":\"2744-FE0F\",\"c\":\"2744\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"winter\",\"season\",\"cold\",\"weather\",\"christmas\",\"xmas\"],\"k\":[55,19],\"o\":2},\"dna\":{\"a\":\"Dna Double Helix\",\"b\":\"1F9EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,31],\"o\":11},\"male_zombie\":{\"obsoletes\":\"1F9DF\",\"a\":\"Male Zombie\",\"b\":\"1F9DF-200D-2642-FE0F\",\"c\":\"1F9DF-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,17],\"o\":5},\"black_medium_small_square\":{\"a\":\"Black Medium Small Square\",\"b\":\"25FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"icon\",\"shape\",\"button\"],\"k\":[52,48],\"o\":2},\"ru\":{\"a\":\"Russia Flag\",\"b\":\"1F1F7-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"russian\",\"federation\",\"flag\",\"nation\",\"country\",\"banner\"],\"k\":[3,56],\"n\":[\"flag-ru\"],\"o\":2},\"female_zombie\":{\"a\":\"Female Zombie\",\"b\":\"1F9DF-200D-2640-FE0F\",\"c\":\"1F9DF-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,16],\"o\":5},\"flag-rw\":{\"a\":\"Rwanda Flag\",\"b\":\"1F1F7-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,0],\"o\":2},\"snowman\":{\"a\":\"Snowman\",\"b\":\"2603-FE0F\",\"c\":\"2603\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"winter\",\"season\",\"cold\",\"weather\",\"christmas\",\"xmas\",\"frozen\",\"without_snow\"],\"k\":[52,52],\"o\":2},\"white_medium_small_square\":{\"a\":\"White Medium Small Square\",\"b\":\"25FD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"stone\",\"icon\",\"button\"],\"k\":[52,47],\"o\":2},\"microscope\":{\"a\":\"Microscope\",\"b\":\"1F52C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"laboratory\",\"experiment\",\"zoomin\",\"science\",\"study\"],\"k\":[28,15],\"o\":2},\"snowman_without_snow\":{\"a\":\"Snowman Without Snow\",\"b\":\"26C4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[54,1],\"o\":2},\"telescope\":{\"a\":\"Telescope\",\"b\":\"1F52D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"stars\",\"space\",\"zoom\",\"science\",\"astronomy\"],\"k\":[28,16],\"o\":2},\"massage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F486-1F3FB\",\"non_qualified\":null,\"image\":\"1f486-1f3fb.png\",\"sheet_x\":24,\"sheet_y\":52,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F486-1F3FC\",\"non_qualified\":null,\"image\":\"1f486-1f3fc.png\",\"sheet_x\":24,\"sheet_y\":53,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F486-1F3FD\",\"non_qualified\":null,\"image\":\"1f486-1f3fd.png\",\"sheet_x\":24,\"sheet_y\":54,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F486-1F3FE\",\"non_qualified\":null,\"image\":\"1f486-1f3fe.png\",\"sheet_x\":24,\"sheet_y\":55,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F486-1F3FF\",\"non_qualified\":null,\"image\":\"1f486-1f3ff.png\",\"sheet_x\":24,\"sheet_y\":56,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F486-200D-2640-FE0F\",\"a\":\"Face Massage\",\"b\":\"1F486\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[24,51],\"o\":2},\"black_small_square\":{\"a\":\"Black Small Square\",\"b\":\"25AA-FE0F\",\"c\":\"25AA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"icon\"],\"k\":[52,41],\"o\":2},\"flag-sa\":{\"a\":\"Saudi Arabia Flag\",\"b\":\"1F1F8-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,1],\"o\":2},\"man-getting-massage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F486-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FB-200D-2642\",\"image\":\"1f486-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F486-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FC-200D-2642\",\"image\":\"1f486-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":47,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F486-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FD-200D-2642\",\"image\":\"1f486-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F486-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FE-200D-2642\",\"image\":\"1f486-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F486-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F486-1F3FF-200D-2642\",\"image\":\"1f486-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":24,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Getting Massage\",\"b\":\"1F486-200D-2642-FE0F\",\"c\":\"1F486-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[24,45],\"o\":4},\"comet\":{\"a\":\"Comet\",\"b\":\"2604-FE0F\",\"c\":\"2604\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"space\"],\"k\":[52,53],\"o\":2},\"white_small_square\":{\"a\":\"White Small Square\",\"b\":\"25AB-FE0F\",\"c\":\"25AB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"icon\"],\"k\":[52,42],\"o\":2},\"flag-sb\":{\"a\":\"Solomon Islands Flag\",\"b\":\"1F1F8-1F1E7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,2],\"o\":2},\"satellite_antenna\":{\"a\":\"Satellite Antenna\",\"b\":\"1F4E1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[26,55],\"o\":2},\"large_orange_diamond\":{\"a\":\"Large Orange Diamond\",\"b\":\"1F536\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"jewel\",\"gem\"],\"k\":[28,25],\"o\":2},\"woman-getting-massage\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F486-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FB-200D-2640\",\"image\":\"1f486-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F486-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FC-200D-2640\",\"image\":\"1f486-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F486-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FD-200D-2640\",\"image\":\"1f486-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F486-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FE-200D-2640\",\"image\":\"1f486-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F486-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F486-1F3FF-200D-2640\",\"image\":\"1f486-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":24,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F486\",\"a\":\"Woman Getting Massage\",\"b\":\"1F486-200D-2640-FE0F\",\"c\":\"1F486-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[24,39],\"o\":4},\"fire\":{\"a\":\"Fire\",\"b\":\"1F525\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"hot\",\"cook\",\"flame\"],\"k\":[28,8],\"o\":2},\"syringe\":{\"a\":\"Syringe\",\"b\":\"1F489\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"health\",\"hospital\",\"drugs\",\"blood\",\"medicine\",\"needle\",\"doctor\",\"nurse\"],\"k\":[25,19],\"o\":2},\"flag-sc\":{\"a\":\"Seychelles Flag\",\"b\":\"1F1F8-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,3],\"o\":2},\"large_blue_diamond\":{\"a\":\"Large Blue Diamond\",\"b\":\"1F537\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"jewel\",\"gem\"],\"k\":[28,26],\"o\":2},\"flag-sd\":{\"a\":\"Sudan Flag\",\"b\":\"1F1F8-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,4],\"o\":2},\"droplet\":{\"a\":\"Droplet\",\"b\":\"1F4A7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"water\",\"drip\",\"faucet\",\"spring\"],\"k\":[25,49],\"o\":2},\"drop_of_blood\":{\"a\":\"Drop of Blood\",\"b\":\"1FA78\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,55],\"o\":12},\"haircut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F487-1F3FB\",\"non_qualified\":null,\"image\":\"1f487-1f3fb.png\",\"sheet_x\":25,\"sheet_y\":13,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F487-1F3FC\",\"non_qualified\":null,\"image\":\"1f487-1f3fc.png\",\"sheet_x\":25,\"sheet_y\":14,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F487-1F3FD\",\"non_qualified\":null,\"image\":\"1f487-1f3fd.png\",\"sheet_x\":25,\"sheet_y\":15,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F487-1F3FE\",\"non_qualified\":null,\"image\":\"1f487-1f3fe.png\",\"sheet_x\":25,\"sheet_y\":16,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F487-1F3FF\",\"non_qualified\":null,\"image\":\"1f487-1f3ff.png\",\"sheet_x\":25,\"sheet_y\":17,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F487-200D-2640-FE0F\",\"a\":\"Haircut\",\"b\":\"1F487\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[25,12],\"o\":2},\"ocean\":{\"a\":\"Water Wave\",\"b\":\"1F30A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sea\",\"water\",\"wave\",\"nature\",\"tsunami\",\"disaster\"],\"k\":[5,29],\"o\":2},\"flag-se\":{\"a\":\"Sweden Flag\",\"b\":\"1F1F8-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,5],\"o\":2},\"man-getting-haircut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F487-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FB-200D-2642\",\"image\":\"1f487-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":25,\"sheet_y\":7,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F487-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FC-200D-2642\",\"image\":\"1f487-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":25,\"sheet_y\":8,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F487-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FD-200D-2642\",\"image\":\"1f487-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":25,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F487-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FE-200D-2642\",\"image\":\"1f487-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":25,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F487-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F487-1F3FF-200D-2642\",\"image\":\"1f487-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":25,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Getting Haircut\",\"b\":\"1F487-200D-2642-FE0F\",\"c\":\"1F487-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[25,6],\"o\":4},\"small_orange_diamond\":{\"a\":\"Small Orange Diamond\",\"b\":\"1F538\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"jewel\",\"gem\"],\"k\":[28,27],\"o\":2},\"pill\":{\"a\":\"Pill\",\"b\":\"1F48A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"health\",\"medicine\",\"doctor\",\"pharmacy\",\"drug\"],\"k\":[25,20],\"o\":2},\"woman-getting-haircut\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F487-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FB-200D-2640\",\"image\":\"1f487-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":25,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F487-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FC-200D-2640\",\"image\":\"1f487-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":25,\"sheet_y\":2,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F487-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FD-200D-2640\",\"image\":\"1f487-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":25,\"sheet_y\":3,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F487-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FE-200D-2640\",\"image\":\"1f487-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":25,\"sheet_y\":4,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F487-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F487-1F3FF-200D-2640\",\"image\":\"1f487-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":25,\"sheet_y\":5,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F487\",\"a\":\"Woman Getting Haircut\",\"b\":\"1F487-200D-2640-FE0F\",\"c\":\"1F487-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[25,0],\"o\":4},\"small_blue_diamond\":{\"a\":\"Small Blue Diamond\",\"b\":\"1F539\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"jewel\",\"gem\"],\"k\":[28,28],\"o\":2},\"flag-sg\":{\"a\":\"Singapore Flag\",\"b\":\"1F1F8-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,6],\"o\":2},\"adhesive_bandage\":{\"a\":\"Adhesive Bandage\",\"b\":\"1FA79\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,56],\"o\":12},\"walking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B6-1F3FB\",\"non_qualified\":null,\"image\":\"1f6b6-1f3fb.png\",\"sheet_x\":36,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F6B6-1F3FC\",\"non_qualified\":null,\"image\":\"1f6b6-1f3fc.png\",\"sheet_x\":36,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F6B6-1F3FD\",\"non_qualified\":null,\"image\":\"1f6b6-1f3fd.png\",\"sheet_x\":36,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F6B6-1F3FE\",\"non_qualified\":null,\"image\":\"1f6b6-1f3fe.png\",\"sheet_x\":36,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F6B6-1F3FF\",\"non_qualified\":null,\"image\":\"1f6b6-1f3ff.png\",\"sheet_x\":36,\"sheet_y\":7,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F6B6-200D-2642-FE0F\",\"a\":\"Pedestrian\",\"b\":\"1F6B6\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[36,2],\"o\":2},\"small_red_triangle\":{\"a\":\"Up-Pointing Red Triangle\",\"b\":\"1F53A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"direction\",\"up\",\"top\"],\"k\":[28,29],\"o\":2},\"flag-sh\":{\"a\":\"St. Helena Flag\",\"b\":\"1F1F8-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,7],\"o\":2},\"stethoscope\":{\"a\":\"Stethoscope\",\"b\":\"1FA7A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,0],\"o\":12},\"man-walking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B6-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FB-200D-2642\",\"image\":\"1f6b6-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6B6-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FC-200D-2642\",\"image\":\"1f6b6-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6B6-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FD-200D-2642\",\"image\":\"1f6b6-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6B6-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FE-200D-2642\",\"image\":\"1f6b6-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6B6-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F6B6-1F3FF-200D-2642\",\"image\":\"1f6b6-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":36,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F6B6\",\"a\":\"Man Walking\",\"b\":\"1F6B6-200D-2642-FE0F\",\"c\":\"1F6B6-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[35,53],\"o\":4},\"flag-si\":{\"a\":\"Slovenia Flag\",\"b\":\"1F1F8-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,8],\"o\":2},\"door\":{\"a\":\"Door\",\"b\":\"1F6AA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"house\",\"entry\",\"exit\"],\"k\":[35,1],\"o\":2},\"small_red_triangle_down\":{\"a\":\"Down-Pointing Red Triangle\",\"b\":\"1F53B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"direction\",\"bottom\"],\"k\":[28,30],\"o\":2},\"flag-sj\":{\"a\":\"Svalbard & Jan Mayen Flag\",\"b\":\"1F1F8-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,9],\"o\":2},\"diamond_shape_with_a_dot_inside\":{\"a\":\"Diamond Shape with a Dot Inside\",\"b\":\"1F4A0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"jewel\",\"blue\",\"gem\",\"crystal\",\"fancy\"],\"k\":[25,42],\"o\":2},\"woman-walking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B6-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FB-200D-2640\",\"image\":\"1f6b6-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6B6-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FC-200D-2640\",\"image\":\"1f6b6-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6B6-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FD-200D-2640\",\"image\":\"1f6b6-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6B6-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FE-200D-2640\",\"image\":\"1f6b6-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6B6-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F6B6-1F3FF-200D-2640\",\"image\":\"1f6b6-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Walking\",\"b\":\"1F6B6-200D-2640-FE0F\",\"c\":\"1F6B6-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[35,47],\"o\":4},\"bed\":{\"a\":\"Bed\",\"b\":\"1F6CF-FE0F\",\"c\":\"1F6CF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sleep\",\"rest\"],\"k\":[36,37],\"o\":2},\"radio_button\":{\"a\":\"Radio Button\",\"b\":\"1F518\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"input\",\"old\",\"music\",\"circle\"],\"k\":[27,52],\"o\":2},\"flag-sk\":{\"a\":\"Slovakia Flag\",\"b\":\"1F1F8-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,10],\"o\":2},\"standing_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9CD-1F3FB\",\"non_qualified\":null,\"image\":\"1f9cd-1f3fb.png\",\"sheet_x\":44,\"sheet_y\":32,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9CD-1F3FC\",\"non_qualified\":null,\"image\":\"1f9cd-1f3fc.png\",\"sheet_x\":44,\"sheet_y\":33,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9CD-1F3FD\",\"non_qualified\":null,\"image\":\"1f9cd-1f3fd.png\",\"sheet_x\":44,\"sheet_y\":34,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9CD-1F3FE\",\"non_qualified\":null,\"image\":\"1f9cd-1f3fe.png\",\"sheet_x\":44,\"sheet_y\":35,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9CD-1F3FF\",\"non_qualified\":null,\"image\":\"1f9cd-1f3ff.png\",\"sheet_x\":44,\"sheet_y\":36,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Standing Person\",\"b\":\"1F9CD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,31],\"o\":12},\"couch_and_lamp\":{\"a\":\"Couch and Lamp\",\"b\":\"1F6CB-FE0F\",\"c\":\"1F6CB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"read\",\"chill\"],\"k\":[36,28],\"o\":2},\"man_standing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9CD-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9CD-1F3FB-200D-2642\",\"image\":\"1f9cd-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":26,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9CD-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9CD-1F3FC-200D-2642\",\"image\":\"1f9cd-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":27,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9CD-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9CD-1F3FD-200D-2642\",\"image\":\"1f9cd-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":28,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9CD-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9CD-1F3FE-200D-2642\",\"image\":\"1f9cd-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":29,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9CD-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9CD-1F3FF-200D-2642\",\"image\":\"1f9cd-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":30,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Standing\",\"b\":\"1F9CD-200D-2642-FE0F\",\"c\":\"1F9CD-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,25],\"o\":12},\"white_square_button\":{\"a\":\"White Square Button\",\"b\":\"1F533\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"input\"],\"k\":[28,22],\"o\":2},\"flag-sl\":{\"a\":\"Sierra Leone Flag\",\"b\":\"1F1F8-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,11],\"o\":2},\"chair\":{\"a\":\"Chair\",\"b\":\"1FA91\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,5],\"o\":12},\"toilet\":{\"a\":\"Toilet\",\"b\":\"1F6BD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"restroom\",\"wc\",\"washroom\",\"bathroom\",\"potty\"],\"k\":[36,14],\"o\":2},\"black_square_button\":{\"a\":\"Black Square Button\",\"b\":\"1F532\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"shape\",\"input\",\"frame\"],\"k\":[28,21],\"o\":2},\"flag-sm\":{\"a\":\"San Marino Flag\",\"b\":\"1F1F8-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,12],\"o\":2},\"woman_standing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9CD-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9CD-1F3FB-200D-2640\",\"image\":\"1f9cd-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":20,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9CD-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9CD-1F3FC-200D-2640\",\"image\":\"1f9cd-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":21,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9CD-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9CD-1F3FD-200D-2640\",\"image\":\"1f9cd-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":22,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9CD-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9CD-1F3FE-200D-2640\",\"image\":\"1f9cd-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":23,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9CD-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9CD-1F3FF-200D-2640\",\"image\":\"1f9cd-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":24,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Standing\",\"b\":\"1F9CD-200D-2640-FE0F\",\"c\":\"1F9CD-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,19],\"o\":12},\"kneeling_person\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9CE-1F3FB\",\"non_qualified\":null,\"image\":\"1f9ce-1f3fb.png\",\"sheet_x\":44,\"sheet_y\":50,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9CE-1F3FC\",\"non_qualified\":null,\"image\":\"1f9ce-1f3fc.png\",\"sheet_x\":44,\"sheet_y\":51,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9CE-1F3FD\",\"non_qualified\":null,\"image\":\"1f9ce-1f3fd.png\",\"sheet_x\":44,\"sheet_y\":52,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9CE-1F3FE\",\"non_qualified\":null,\"image\":\"1f9ce-1f3fe.png\",\"sheet_x\":44,\"sheet_y\":53,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9CE-1F3FF\",\"non_qualified\":null,\"image\":\"1f9ce-1f3ff.png\",\"sheet_x\":44,\"sheet_y\":54,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Kneeling Person\",\"b\":\"1F9CE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,49],\"o\":12},\"shower\":{\"a\":\"Shower\",\"b\":\"1F6BF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"clean\",\"water\",\"bathroom\"],\"k\":[36,16],\"o\":2},\"flag-sn\":{\"a\":\"Senegal Flag\",\"b\":\"1F1F8-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,13],\"o\":2},\"bathtub\":{\"a\":\"Bathtub\",\"b\":\"1F6C1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"clean\",\"shower\",\"bathroom\"],\"k\":[36,23],\"o\":2},\"flag-so\":{\"a\":\"Somalia Flag\",\"b\":\"1F1F8-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,14],\"o\":2},\"man_kneeling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9CE-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9CE-1F3FB-200D-2642\",\"image\":\"1f9ce-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":44,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9CE-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9CE-1F3FC-200D-2642\",\"image\":\"1f9ce-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":45,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9CE-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9CE-1F3FD-200D-2642\",\"image\":\"1f9ce-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":46,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9CE-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9CE-1F3FE-200D-2642\",\"image\":\"1f9ce-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":47,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9CE-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9CE-1F3FF-200D-2642\",\"image\":\"1f9ce-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":44,\"sheet_y\":48,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Kneeling\",\"b\":\"1F9CE-200D-2642-FE0F\",\"c\":\"1F9CE-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,43],\"o\":12},\"flag-sr\":{\"a\":\"Suriname Flag\",\"b\":\"1F1F8-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,15],\"o\":2},\"woman_kneeling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9CE-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9CE-1F3FB-200D-2640\",\"image\":\"1f9ce-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":38,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9CE-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9CE-1F3FC-200D-2640\",\"image\":\"1f9ce-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":39,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9CE-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9CE-1F3FD-200D-2640\",\"image\":\"1f9ce-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":40,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9CE-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9CE-1F3FE-200D-2640\",\"image\":\"1f9ce-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":41,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9CE-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9CE-1F3FF-200D-2640\",\"image\":\"1f9ce-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":44,\"sheet_y\":42,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Kneeling\",\"b\":\"1F9CE-200D-2640-FE0F\",\"c\":\"1F9CE-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[44,37],\"o\":12},\"razor\":{\"a\":\"Razor\",\"b\":\"1FA92\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[52,6],\"o\":12},\"person_with_probing_cane\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f9af.png\",\"sheet_x\":47,\"sheet_y\":8,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f9af.png\",\"sheet_x\":47,\"sheet_y\":9,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f9af.png\",\"sheet_x\":47,\"sheet_y\":10,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f9af.png\",\"sheet_x\":47,\"sheet_y\":11,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f9af.png\",\"sheet_x\":47,\"sheet_y\":12,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Person with Probing Cane\",\"b\":\"1F9D1-200D-1F9AF\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[47,7],\"o\":12},\"flag-ss\":{\"a\":\"South Sudan Flag\",\"b\":\"1F1F8-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,16],\"o\":2},\"lotion_bottle\":{\"a\":\"Lotion Bottle\",\"b\":\"1F9F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,39],\"o\":11},\"flag-st\":{\"a\":\"São Tomé & Príncipe Flag\",\"b\":\"1F1F8-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,17],\"o\":2},\"safety_pin\":{\"a\":\"Safety Pin\",\"b\":\"1F9F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,42],\"o\":11},\"man_with_probing_cane\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f9af.png\",\"sheet_x\":16,\"sheet_y\":18,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f9af.png\",\"sheet_x\":16,\"sheet_y\":19,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f9af.png\",\"sheet_x\":16,\"sheet_y\":20,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f9af.png\",\"sheet_x\":16,\"sheet_y\":21,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f9af.png\",\"sheet_x\":16,\"sheet_y\":22,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man with Probing Cane\",\"b\":\"1F468-200D-1F9AF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[16,17],\"o\":12},\"broom\":{\"a\":\"Broom\",\"b\":\"1F9F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,44],\"o\":11},\"woman_with_probing_cane\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f9af.png\",\"sheet_x\":19,\"sheet_y\":3,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f9af.png\",\"sheet_x\":19,\"sheet_y\":4,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f9af.png\",\"sheet_x\":19,\"sheet_y\":5,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f9af.png\",\"sheet_x\":19,\"sheet_y\":6,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F9AF\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f9af.png\",\"sheet_x\":19,\"sheet_y\":7,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman with Probing Cane\",\"b\":\"1F469-200D-1F9AF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,2],\"o\":12},\"flag-sv\":{\"a\":\"El Salvador Flag\",\"b\":\"1F1F8-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,18],\"o\":2},\"flag-sx\":{\"a\":\"Sint Maarten Flag\",\"b\":\"1F1F8-1F1FD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,19],\"o\":2},\"basket\":{\"a\":\"Basket\",\"b\":\"1F9FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,45],\"o\":11},\"person_in_motorized_wheelchair\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f9bc.png\",\"sheet_x\":47,\"sheet_y\":38,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f9bc.png\",\"sheet_x\":47,\"sheet_y\":39,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f9bc.png\",\"sheet_x\":47,\"sheet_y\":40,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f9bc.png\",\"sheet_x\":47,\"sheet_y\":41,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f9bc.png\",\"sheet_x\":47,\"sheet_y\":42,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Person in Motorized Wheelchair\",\"b\":\"1F9D1-200D-1F9BC\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[47,37],\"o\":12},\"man_in_motorized_wheelchair\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f9bc.png\",\"sheet_x\":16,\"sheet_y\":48,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f9bc.png\",\"sheet_x\":16,\"sheet_y\":49,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f9bc.png\",\"sheet_x\":16,\"sheet_y\":50,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f9bc.png\",\"sheet_x\":16,\"sheet_y\":51,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f9bc.png\",\"sheet_x\":16,\"sheet_y\":52,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man in Motorized Wheelchair\",\"b\":\"1F468-200D-1F9BC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[16,47],\"o\":12},\"flag-sy\":{\"a\":\"Syria Flag\",\"b\":\"1F1F8-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,20],\"o\":2},\"roll_of_paper\":{\"a\":\"Roll of Paper\",\"b\":\"1F9FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,46],\"o\":11},\"woman_in_motorized_wheelchair\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f9bc.png\",\"sheet_x\":19,\"sheet_y\":33,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f9bc.png\",\"sheet_x\":19,\"sheet_y\":34,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f9bc.png\",\"sheet_x\":19,\"sheet_y\":35,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f9bc.png\",\"sheet_x\":19,\"sheet_y\":36,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F9BC\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f9bc.png\",\"sheet_x\":19,\"sheet_y\":37,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman in Motorized Wheelchair\",\"b\":\"1F469-200D-1F9BC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,32],\"o\":12},\"flag-sz\":{\"a\":\"Eswatini Flag\",\"b\":\"1F1F8-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,21],\"o\":2},\"soap\":{\"a\":\"Bar of Soap\",\"b\":\"1F9FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,47],\"o\":11},\"flag-ta\":{\"a\":\"Tristan Da Cunha Flag\",\"b\":\"1F1F9-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,22],\"o\":2},\"sponge\":{\"a\":\"Sponge\",\"b\":\"1F9FD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,48],\"o\":11},\"person_in_manual_wheelchair\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f9bd.png\",\"sheet_x\":47,\"sheet_y\":44,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f9bd.png\",\"sheet_x\":47,\"sheet_y\":45,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f9bd.png\",\"sheet_x\":47,\"sheet_y\":46,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f9bd.png\",\"sheet_x\":47,\"sheet_y\":47,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f9bd.png\",\"sheet_x\":47,\"sheet_y\":48,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":false,\"has_img_facebook\":false}},\"a\":\"Person in Manual Wheelchair\",\"b\":\"1F9D1-200D-1F9BD\",\"d\":true,\"e\":false,\"f\":false,\"h\":false,\"k\":[47,43],\"o\":12},\"fire_extinguisher\":{\"a\":\"Fire Extinguisher\",\"b\":\"1F9EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[51,34],\"o\":11},\"man_in_manual_wheelchair\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F468-1F3FB-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f9bd.png\",\"sheet_x\":16,\"sheet_y\":54,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F468-1F3FC-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f9bd.png\",\"sheet_x\":16,\"sheet_y\":55,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F468-1F3FD-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f9bd.png\",\"sheet_x\":16,\"sheet_y\":56,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F468-1F3FE-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f9bd.png\",\"sheet_x\":17,\"sheet_y\":0,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F468-1F3FF-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f9bd.png\",\"sheet_x\":17,\"sheet_y\":1,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man in Manual Wheelchair\",\"b\":\"1F468-200D-1F9BD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[16,53],\"o\":12},\"flag-tc\":{\"a\":\"Turks & Caicos Islands Flag\",\"b\":\"1F1F9-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,23],\"o\":2},\"woman_in_manual_wheelchair\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F469-1F3FB-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f9bd.png\",\"sheet_x\":19,\"sheet_y\":39,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F469-1F3FC-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f9bd.png\",\"sheet_x\":19,\"sheet_y\":40,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F469-1F3FD-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f9bd.png\",\"sheet_x\":19,\"sheet_y\":41,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F469-1F3FE-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f9bd.png\",\"sheet_x\":19,\"sheet_y\":42,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F469-1F3FF-200D-1F9BD\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f9bd.png\",\"sheet_x\":19,\"sheet_y\":43,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman in Manual Wheelchair\",\"b\":\"1F469-200D-1F9BD\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[19,38],\"o\":12},\"flag-td\":{\"a\":\"Chad Flag\",\"b\":\"1F1F9-1F1E9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,24],\"o\":2},\"shopping_trolley\":{\"a\":\"Shopping Trolley\",\"b\":\"1F6D2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[36,40],\"o\":4},\"runner\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C3-1F3FB\",\"non_qualified\":null,\"image\":\"1f3c3-1f3fb.png\",\"sheet_x\":9,\"sheet_y\":2,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F3C3-1F3FC\",\"non_qualified\":null,\"image\":\"1f3c3-1f3fc.png\",\"sheet_x\":9,\"sheet_y\":3,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F3C3-1F3FD\",\"non_qualified\":null,\"image\":\"1f3c3-1f3fd.png\",\"sheet_x\":9,\"sheet_y\":4,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F3C3-1F3FE\",\"non_qualified\":null,\"image\":\"1f3c3-1f3fe.png\",\"sheet_x\":9,\"sheet_y\":5,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F3C3-1F3FF\",\"non_qualified\":null,\"image\":\"1f3c3-1f3ff.png\",\"sheet_x\":9,\"sheet_y\":6,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F3C3-200D-2642-FE0F\",\"a\":\"Runner\",\"b\":\"1F3C3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[9,1],\"n\":[\"running\"],\"o\":2},\"flag-tf\":{\"a\":\"French Southern Territories Flag\",\"b\":\"1F1F9-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,25],\"o\":2},\"smoking\":{\"a\":\"Smoking Symbol\",\"b\":\"1F6AC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"kills\",\"tobacco\",\"cigarette\",\"joint\",\"smoke\"],\"k\":[35,3],\"o\":2},\"coffin\":{\"a\":\"Coffin\",\"b\":\"26B0-FE0F\",\"c\":\"26B0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"vampire\",\"dead\",\"die\",\"death\",\"rip\",\"graveyard\",\"cemetery\",\"casket\",\"funeral\",\"box\"],\"k\":[53,54],\"o\":2},\"man-running\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C3-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FB-200D-2642\",\"image\":\"1f3c3-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":8,\"sheet_y\":53,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3C3-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FC-200D-2642\",\"image\":\"1f3c3-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":8,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3C3-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FD-200D-2642\",\"image\":\"1f3c3-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":8,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3C3-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FE-200D-2642\",\"image\":\"1f3c3-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":8,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3C3-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3C3-1F3FF-200D-2642\",\"image\":\"1f3c3-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F3C3\",\"a\":\"Man Running\",\"b\":\"1F3C3-200D-2642-FE0F\",\"c\":\"1F3C3-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[8,52],\"o\":4},\"flag-tg\":{\"a\":\"Togo Flag\",\"b\":\"1F1F9-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,26],\"o\":2},\"woman-running\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C3-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FB-200D-2640\",\"image\":\"1f3c3-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":8,\"sheet_y\":47,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3C3-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FC-200D-2640\",\"image\":\"1f3c3-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":8,\"sheet_y\":48,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3C3-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FD-200D-2640\",\"image\":\"1f3c3-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":8,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3C3-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FE-200D-2640\",\"image\":\"1f3c3-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":8,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3C3-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3C3-1F3FF-200D-2640\",\"image\":\"1f3c3-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":8,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Running\",\"b\":\"1F3C3-200D-2640-FE0F\",\"c\":\"1F3C3-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[8,46],\"o\":4},\"funeral_urn\":{\"a\":\"Funeral Urn\",\"b\":\"26B1-FE0F\",\"c\":\"26B1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"dead\",\"die\",\"death\",\"rip\",\"ashes\"],\"k\":[53,55],\"o\":2},\"flag-th\":{\"a\":\"Thailand Flag\",\"b\":\"1F1F9-1F1ED\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,27],\"o\":2},\"moyai\":{\"a\":\"Moyai\",\"b\":\"1F5FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"rock\",\"easter island\",\"moai\"],\"k\":[30,34],\"o\":2},\"flag-tj\":{\"a\":\"Tajikistan Flag\",\"b\":\"1F1F9-1F1EF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,28],\"o\":2},\"dancer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F483-1F3FB\",\"non_qualified\":null,\"image\":\"1f483-1f3fb.png\",\"sheet_x\":24,\"sheet_y\":27,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F483-1F3FC\",\"non_qualified\":null,\"image\":\"1f483-1f3fc.png\",\"sheet_x\":24,\"sheet_y\":28,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F483-1F3FD\",\"non_qualified\":null,\"image\":\"1f483-1f3fd.png\",\"sheet_x\":24,\"sheet_y\":29,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F483-1F3FE\",\"non_qualified\":null,\"image\":\"1f483-1f3fe.png\",\"sheet_x\":24,\"sheet_y\":30,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F483-1F3FF\",\"non_qualified\":null,\"image\":\"1f483-1f3ff.png\",\"sheet_x\":24,\"sheet_y\":31,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Dancer\",\"b\":\"1F483\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"female\",\"girl\",\"woman\",\"fun\"],\"k\":[24,26],\"o\":2},\"flag-tk\":{\"a\":\"Tokelau Flag\",\"b\":\"1F1F9-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,29],\"o\":2},\"man_dancing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F57A-1F3FB\",\"non_qualified\":null,\"image\":\"1f57a-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F57A-1F3FC\",\"non_qualified\":null,\"image\":\"1f57a-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F57A-1F3FD\",\"non_qualified\":null,\"image\":\"1f57a-1f3fd.png\",\"sheet_x\":29,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F57A-1F3FE\",\"non_qualified\":null,\"image\":\"1f57a-1f3fe.png\",\"sheet_x\":29,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F57A-1F3FF\",\"non_qualified\":null,\"image\":\"1f57a-1f3ff.png\",\"sheet_x\":29,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Dancing\",\"b\":\"1F57A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"male\",\"boy\",\"fun\",\"dancer\"],\"k\":[29,37],\"o\":4},\"flag-tl\":{\"a\":\"Timor-Leste Flag\",\"b\":\"1F1F9-1F1F1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,30],\"o\":2},\"man_in_business_suit_levitating\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F574-1F3FB\",\"non_qualified\":null,\"image\":\"1f574-1f3fb.png\",\"sheet_x\":29,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F574-1F3FC\",\"non_qualified\":null,\"image\":\"1f574-1f3fc.png\",\"sheet_x\":29,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F574-1F3FD\",\"non_qualified\":null,\"image\":\"1f574-1f3fd.png\",\"sheet_x\":29,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F574-1F3FE\",\"non_qualified\":null,\"image\":\"1f574-1f3fe.png\",\"sheet_x\":29,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F574-1F3FF\",\"non_qualified\":null,\"image\":\"1f574-1f3ff.png\",\"sheet_x\":29,\"sheet_y\":14,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man in Business Suit Levitating\",\"b\":\"1F574-FE0F\",\"c\":\"1F574\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[29,9],\"o\":2},\"flag-tm\":{\"a\":\"Turkmenistan Flag\",\"b\":\"1F1F9-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,31],\"o\":2},\"dancers\":{\"obsoleted_by\":\"1F46F-200D-2640-FE0F\",\"a\":\"Woman with Bunny Ears\",\"b\":\"1F46F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[22,0],\"o\":2},\"man-with-bunny-ears-partying\":{\"a\":\"Man with Bunny Ears Partying\",\"b\":\"1F46F-200D-2642-FE0F\",\"c\":\"1F46F-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[21,56],\"o\":4},\"flag-tn\":{\"a\":\"Tunisia Flag\",\"b\":\"1F1F9-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,32],\"o\":2},\"flag-to\":{\"a\":\"Tonga Flag\",\"b\":\"1F1F9-1F1F4\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,33],\"o\":2},\"woman-with-bunny-ears-partying\":{\"obsoletes\":\"1F46F\",\"a\":\"Woman with Bunny Ears Partying\",\"b\":\"1F46F-200D-2640-FE0F\",\"c\":\"1F46F-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[21,55],\"o\":4},\"flag-tr\":{\"a\":\"Turkey Flag\",\"b\":\"1F1F9-1F1F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,34],\"o\":2},\"person_in_steamy_room\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D6-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d6-1f3fb.png\",\"sheet_x\":48,\"sheet_y\":53,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D6-1F3FB-200D-2642-FE0F\"},\"1F3FC\":{\"unified\":\"1F9D6-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d6-1f3fc.png\",\"sheet_x\":48,\"sheet_y\":54,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D6-1F3FC-200D-2642-FE0F\"},\"1F3FD\":{\"unified\":\"1F9D6-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d6-1f3fd.png\",\"sheet_x\":48,\"sheet_y\":55,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D6-1F3FD-200D-2642-FE0F\"},\"1F3FE\":{\"unified\":\"1F9D6-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d6-1f3fe.png\",\"sheet_x\":48,\"sheet_y\":56,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D6-1F3FE-200D-2642-FE0F\"},\"1F3FF\":{\"unified\":\"1F9D6-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d6-1f3ff.png\",\"sheet_x\":49,\"sheet_y\":0,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D6-1F3FF-200D-2642-FE0F\"}},\"obsoleted_by\":\"1F9D6-200D-2642-FE0F\",\"a\":\"Person in Steamy Room\",\"b\":\"1F9D6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[48,52],\"o\":5},\"man_in_steamy_room\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D6-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FB-200D-2642\",\"image\":\"1f9d6-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":48,\"sheet_y\":47,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D6-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9D6-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FC-200D-2642\",\"image\":\"1f9d6-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":48,\"sheet_y\":48,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D6-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9D6-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FD-200D-2642\",\"image\":\"1f9d6-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":48,\"sheet_y\":49,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D6-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9D6-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FE-200D-2642\",\"image\":\"1f9d6-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":48,\"sheet_y\":50,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D6-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9D6-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9D6-1F3FF-200D-2642\",\"image\":\"1f9d6-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":48,\"sheet_y\":51,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D6-1F3FF\"}},\"obsoletes\":\"1F9D6\",\"a\":\"Man in Steamy Room\",\"b\":\"1F9D6-200D-2642-FE0F\",\"c\":\"1F9D6-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[48,46],\"o\":5},\"flag-tt\":{\"a\":\"Trinidad & Tobago Flag\",\"b\":\"1F1F9-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,35],\"o\":2},\"woman_in_steamy_room\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D6-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FB-200D-2640\",\"image\":\"1f9d6-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":41,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9D6-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FC-200D-2640\",\"image\":\"1f9d6-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":42,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9D6-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FD-200D-2640\",\"image\":\"1f9d6-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":43,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9D6-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FE-200D-2640\",\"image\":\"1f9d6-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":44,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9D6-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9D6-1F3FF-200D-2640\",\"image\":\"1f9d6-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":48,\"sheet_y\":45,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman in Steamy Room\",\"b\":\"1F9D6-200D-2640-FE0F\",\"c\":\"1F9D6-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[48,40],\"o\":5},\"flag-tv\":{\"a\":\"Tuvalu Flag\",\"b\":\"1F1F9-1F1FB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,36],\"o\":2},\"flag-tw\":{\"a\":\"Taiwan Flag\",\"b\":\"1F1F9-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,37],\"o\":2},\"person_climbing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D7-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d7-1f3fb.png\",\"sheet_x\":49,\"sheet_y\":14,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D7-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9D7-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d7-1f3fc.png\",\"sheet_x\":49,\"sheet_y\":15,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D7-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9D7-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d7-1f3fd.png\",\"sheet_x\":49,\"sheet_y\":16,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D7-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9D7-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d7-1f3fe.png\",\"sheet_x\":49,\"sheet_y\":17,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D7-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9D7-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d7-1f3ff.png\",\"sheet_x\":49,\"sheet_y\":18,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D7-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9D7-200D-2640-FE0F\",\"a\":\"Person Climbing\",\"b\":\"1F9D7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,13],\"o\":5},\"man_climbing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D7-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FB-200D-2642\",\"image\":\"1f9d7-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":8,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9D7-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FC-200D-2642\",\"image\":\"1f9d7-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":9,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9D7-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FD-200D-2642\",\"image\":\"1f9d7-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":10,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9D7-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FE-200D-2642\",\"image\":\"1f9d7-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":11,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9D7-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9D7-1F3FF-200D-2642\",\"image\":\"1f9d7-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":12,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Climbing\",\"b\":\"1F9D7-200D-2642-FE0F\",\"c\":\"1F9D7-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,7],\"o\":5},\"flag-tz\":{\"a\":\"Tanzania Flag\",\"b\":\"1F1F9-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,38],\"o\":2},\"flag-ua\":{\"a\":\"Ukraine Flag\",\"b\":\"1F1FA-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,39],\"o\":2},\"woman_climbing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D7-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FB-200D-2640\",\"image\":\"1f9d7-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":2,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D7-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9D7-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FC-200D-2640\",\"image\":\"1f9d7-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":3,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D7-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9D7-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FD-200D-2640\",\"image\":\"1f9d7-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":4,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D7-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9D7-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FE-200D-2640\",\"image\":\"1f9d7-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":5,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D7-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9D7-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9D7-1F3FF-200D-2640\",\"image\":\"1f9d7-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":6,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D7-1F3FF\"}},\"obsoletes\":\"1F9D7\",\"a\":\"Woman Climbing\",\"b\":\"1F9D7-200D-2640-FE0F\",\"c\":\"1F9D7-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,1],\"o\":5},\"flag-ug\":{\"a\":\"Uganda Flag\",\"b\":\"1F1FA-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,40],\"o\":2},\"fencer\":{\"a\":\"Fencer\",\"b\":\"1F93A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,32],\"o\":4},\"flag-um\":{\"a\":\"U.s. Outlying Islands Flag\",\"b\":\"1F1FA-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,41],\"o\":2},\"horse_racing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C7-1F3FB\",\"non_qualified\":null,\"image\":\"1f3c7-1f3fb.png\",\"sheet_x\":9,\"sheet_y\":28,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3C7-1F3FC\",\"non_qualified\":null,\"image\":\"1f3c7-1f3fc.png\",\"sheet_x\":9,\"sheet_y\":29,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3C7-1F3FD\",\"non_qualified\":null,\"image\":\"1f3c7-1f3fd.png\",\"sheet_x\":9,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3C7-1F3FE\",\"non_qualified\":null,\"image\":\"1f3c7-1f3fe.png\",\"sheet_x\":9,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3C7-1F3FF\",\"non_qualified\":null,\"image\":\"1f3c7-1f3ff.png\",\"sheet_x\":9,\"sheet_y\":32,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Horse Racing\",\"b\":\"1F3C7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"animal\",\"betting\",\"competition\",\"gambling\",\"luck\"],\"k\":[9,27],\"o\":2},\"skier\":{\"a\":\"Skier\",\"b\":\"26F7-FE0F\",\"c\":\"26F7\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"winter\",\"snow\"],\"k\":[54,17],\"o\":2},\"flag-un\":{\"a\":\"United Nations Flag\",\"b\":\"1F1FA-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,42],\"o\":4},\"us\":{\"a\":\"United States Flag\",\"b\":\"1F1FA-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"united\",\"states\",\"america\",\"flag\",\"nation\",\"country\",\"banner\"],\"k\":[4,43],\"n\":[\"flag-us\"],\"o\":2},\"snowboarder\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C2-1F3FB\",\"non_qualified\":null,\"image\":\"1f3c2-1f3fb.png\",\"sheet_x\":8,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3C2-1F3FC\",\"non_qualified\":null,\"image\":\"1f3c2-1f3fc.png\",\"sheet_x\":8,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3C2-1F3FD\",\"non_qualified\":null,\"image\":\"1f3c2-1f3fd.png\",\"sheet_x\":8,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3C2-1F3FE\",\"non_qualified\":null,\"image\":\"1f3c2-1f3fe.png\",\"sheet_x\":8,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3C2-1F3FF\",\"non_qualified\":null,\"image\":\"1f3c2-1f3ff.png\",\"sheet_x\":8,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Snowboarder\",\"b\":\"1F3C2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"sports\",\"winter\"],\"k\":[8,40],\"o\":2},\"golfer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CC-1F3FB\",\"non_qualified\":null,\"image\":\"1f3cc-1f3fb.png\",\"sheet_x\":10,\"sheet_y\":27,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F3CC-1F3FC\",\"non_qualified\":null,\"image\":\"1f3cc-1f3fc.png\",\"sheet_x\":10,\"sheet_y\":28,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F3CC-1F3FD\",\"non_qualified\":null,\"image\":\"1f3cc-1f3fd.png\",\"sheet_x\":10,\"sheet_y\":29,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F3CC-1F3FE\",\"non_qualified\":null,\"image\":\"1f3cc-1f3fe.png\",\"sheet_x\":10,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F3CC-1F3FF\",\"non_qualified\":null,\"image\":\"1f3cc-1f3ff.png\",\"sheet_x\":10,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F3CC-FE0F-200D-2642-FE0F\",\"a\":\"Golfer\",\"b\":\"1F3CC-FE0F\",\"c\":\"1F3CC\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[10,26],\"o\":2},\"flag-uy\":{\"a\":\"Uruguay Flag\",\"b\":\"1F1FA-1F1FE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,44],\"o\":2},\"flag-uz\":{\"a\":\"Uzbekistan Flag\",\"b\":\"1F1FA-1F1FF\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,45],\"o\":2},\"man-golfing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CC-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FB-200D-2642\",\"image\":\"1f3cc-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":21,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3CC-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FC-200D-2642\",\"image\":\"1f3cc-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":22,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3CC-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FD-200D-2642\",\"image\":\"1f3cc-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":23,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3CC-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FE-200D-2642\",\"image\":\"1f3cc-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":24,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3CC-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3CC-1F3FF-200D-2642\",\"image\":\"1f3cc-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":25,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F3CC-FE0F\",\"a\":\"Man Golfing\",\"b\":\"1F3CC-FE0F-200D-2642-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[10,20],\"o\":4},\"flag-va\":{\"a\":\"Vatican City Flag\",\"b\":\"1F1FB-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,46],\"o\":2},\"woman-golfing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CC-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FB-200D-2640\",\"image\":\"1f3cc-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3CC-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FC-200D-2640\",\"image\":\"1f3cc-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3CC-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FD-200D-2640\",\"image\":\"1f3cc-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3CC-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FE-200D-2640\",\"image\":\"1f3cc-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3CC-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3CC-1F3FF-200D-2640\",\"image\":\"1f3cc-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Golfing\",\"b\":\"1F3CC-FE0F-200D-2640-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[10,14],\"o\":4},\"flag-vc\":{\"a\":\"St. Vincent & Grenadines Flag\",\"b\":\"1F1FB-1F1E8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,47],\"o\":2},\"surfer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C4-1F3FB\",\"non_qualified\":null,\"image\":\"1f3c4-1f3fb.png\",\"sheet_x\":9,\"sheet_y\":20,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F3C4-1F3FC\",\"non_qualified\":null,\"image\":\"1f3c4-1f3fc.png\",\"sheet_x\":9,\"sheet_y\":21,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F3C4-1F3FD\",\"non_qualified\":null,\"image\":\"1f3c4-1f3fd.png\",\"sheet_x\":9,\"sheet_y\":22,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F3C4-1F3FE\",\"non_qualified\":null,\"image\":\"1f3c4-1f3fe.png\",\"sheet_x\":9,\"sheet_y\":23,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F3C4-1F3FF\",\"non_qualified\":null,\"image\":\"1f3c4-1f3ff.png\",\"sheet_x\":9,\"sheet_y\":24,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F3C4-200D-2642-FE0F\",\"a\":\"Surfer\",\"b\":\"1F3C4\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[9,19],\"o\":2},\"man-surfing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C4-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FB-200D-2642\",\"image\":\"1f3c4-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":14,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3C4-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FC-200D-2642\",\"image\":\"1f3c4-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3C4-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FD-200D-2642\",\"image\":\"1f3c4-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3C4-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FE-200D-2642\",\"image\":\"1f3c4-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3C4-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3C4-1F3FF-200D-2642\",\"image\":\"1f3c4-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F3C4\",\"a\":\"Man Surfing\",\"b\":\"1F3C4-200D-2642-FE0F\",\"c\":\"1F3C4-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[9,13],\"o\":4},\"flag-ve\":{\"a\":\"Venezuela Flag\",\"b\":\"1F1FB-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,48],\"o\":2},\"flag-vg\":{\"a\":\"British Virgin Islands Flag\",\"b\":\"1F1FB-1F1EC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,49],\"o\":2},\"woman-surfing\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3C4-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FB-200D-2640\",\"image\":\"1f3c4-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":8,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3C4-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FC-200D-2640\",\"image\":\"1f3c4-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3C4-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FD-200D-2640\",\"image\":\"1f3c4-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3C4-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FE-200D-2640\",\"image\":\"1f3c4-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3C4-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3C4-1F3FF-200D-2640\",\"image\":\"1f3c4-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Surfing\",\"b\":\"1F3C4-200D-2640-FE0F\",\"c\":\"1F3C4-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[9,7],\"o\":4},\"rowboat\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6A3-1F3FB\",\"non_qualified\":null,\"image\":\"1f6a3-1f3fb.png\",\"sheet_x\":34,\"sheet_y\":47,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F6A3-1F3FC\",\"non_qualified\":null,\"image\":\"1f6a3-1f3fc.png\",\"sheet_x\":34,\"sheet_y\":48,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F6A3-1F3FD\",\"non_qualified\":null,\"image\":\"1f6a3-1f3fd.png\",\"sheet_x\":34,\"sheet_y\":49,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F6A3-1F3FE\",\"non_qualified\":null,\"image\":\"1f6a3-1f3fe.png\",\"sheet_x\":34,\"sheet_y\":50,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F6A3-1F3FF\",\"non_qualified\":null,\"image\":\"1f6a3-1f3ff.png\",\"sheet_x\":34,\"sheet_y\":51,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F6A3-200D-2642-FE0F\",\"a\":\"Rowboat\",\"b\":\"1F6A3\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[34,46],\"o\":2},\"flag-vi\":{\"a\":\"U.s. Virgin Islands Flag\",\"b\":\"1F1FB-1F1EE\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,50],\"o\":2},\"man-rowing-boat\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6A3-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FB-200D-2642\",\"image\":\"1f6a3-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":34,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6A3-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FC-200D-2642\",\"image\":\"1f6a3-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":34,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6A3-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FD-200D-2642\",\"image\":\"1f6a3-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":34,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6A3-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FE-200D-2642\",\"image\":\"1f6a3-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":34,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6A3-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F6A3-1F3FF-200D-2642\",\"image\":\"1f6a3-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":34,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F6A3\",\"a\":\"Man Rowing Boat\",\"b\":\"1F6A3-200D-2642-FE0F\",\"c\":\"1F6A3-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[34,40],\"o\":4},\"flag-vn\":{\"a\":\"Vietnam Flag\",\"b\":\"1F1FB-1F1F3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,51],\"o\":2},\"flag-vu\":{\"a\":\"Vanuatu Flag\",\"b\":\"1F1FB-1F1FA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,52],\"o\":2},\"woman-rowing-boat\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6A3-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FB-200D-2640\",\"image\":\"1f6a3-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":35,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6A3-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FC-200D-2640\",\"image\":\"1f6a3-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6A3-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FD-200D-2640\",\"image\":\"1f6a3-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6A3-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FE-200D-2640\",\"image\":\"1f6a3-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6A3-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F6A3-1F3FF-200D-2640\",\"image\":\"1f6a3-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":34,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Rowing Boat\",\"b\":\"1F6A3-200D-2640-FE0F\",\"c\":\"1F6A3-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[34,34],\"o\":4},\"swimmer\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CA-1F3FB\",\"non_qualified\":null,\"image\":\"1f3ca-1f3fb.png\",\"sheet_x\":9,\"sheet_y\":48,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F3CA-1F3FC\",\"non_qualified\":null,\"image\":\"1f3ca-1f3fc.png\",\"sheet_x\":9,\"sheet_y\":49,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F3CA-1F3FD\",\"non_qualified\":null,\"image\":\"1f3ca-1f3fd.png\",\"sheet_x\":9,\"sheet_y\":50,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F3CA-1F3FE\",\"non_qualified\":null,\"image\":\"1f3ca-1f3fe.png\",\"sheet_x\":9,\"sheet_y\":51,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F3CA-1F3FF\",\"non_qualified\":null,\"image\":\"1f3ca-1f3ff.png\",\"sheet_x\":9,\"sheet_y\":52,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F3CA-200D-2642-FE0F\",\"a\":\"Swimmer\",\"b\":\"1F3CA\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[9,47],\"o\":2},\"flag-wf\":{\"a\":\"Wallis & Futuna Flag\",\"b\":\"1F1FC-1F1EB\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,53],\"o\":2},\"man-swimming\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CA-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FB-200D-2642\",\"image\":\"1f3ca-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":42,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3CA-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FC-200D-2642\",\"image\":\"1f3ca-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3CA-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FD-200D-2642\",\"image\":\"1f3ca-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3CA-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FE-200D-2642\",\"image\":\"1f3ca-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3CA-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3CA-1F3FF-200D-2642\",\"image\":\"1f3ca-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":9,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F3CA\",\"a\":\"Man Swimming\",\"b\":\"1F3CA-200D-2642-FE0F\",\"c\":\"1F3CA-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[9,41],\"o\":4},\"flag-ws\":{\"a\":\"Samoa Flag\",\"b\":\"1F1FC-1F1F8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,54],\"o\":2},\"woman-swimming\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CA-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FB-200D-2640\",\"image\":\"1f3ca-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3CA-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FC-200D-2640\",\"image\":\"1f3ca-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3CA-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FD-200D-2640\",\"image\":\"1f3ca-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3CA-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FE-200D-2640\",\"image\":\"1f3ca-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3CA-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3CA-1F3FF-200D-2640\",\"image\":\"1f3ca-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Swimming\",\"b\":\"1F3CA-200D-2640-FE0F\",\"c\":\"1F3CA-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[9,35],\"o\":4},\"flag-xk\":{\"a\":\"Kosovo Flag\",\"b\":\"1F1FD-1F1F0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,55],\"o\":2},\"person_with_ball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"26F9-1F3FB\",\"non_qualified\":null,\"image\":\"26f9-1f3fb.png\",\"sheet_x\":54,\"sheet_y\":32,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"26F9-1F3FC\",\"non_qualified\":null,\"image\":\"26f9-1f3fc.png\",\"sheet_x\":54,\"sheet_y\":33,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"26F9-1F3FD\",\"non_qualified\":null,\"image\":\"26f9-1f3fd.png\",\"sheet_x\":54,\"sheet_y\":34,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"26F9-1F3FE\",\"non_qualified\":null,\"image\":\"26f9-1f3fe.png\",\"sheet_x\":54,\"sheet_y\":35,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"26F9-1F3FF\",\"non_qualified\":null,\"image\":\"26f9-1f3ff.png\",\"sheet_x\":54,\"sheet_y\":36,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"26F9-FE0F-200D-2642-FE0F\",\"a\":\"Person with Ball\",\"b\":\"26F9-FE0F\",\"c\":\"26F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[54,31],\"o\":2},\"flag-ye\":{\"a\":\"Yemen Flag\",\"b\":\"1F1FE-1F1EA\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[4,56],\"o\":2},\"man-bouncing-ball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"26F9-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FB-200D-2642\",\"image\":\"26f9-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":54,\"sheet_y\":26,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"26F9-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FC-200D-2642\",\"image\":\"26f9-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":54,\"sheet_y\":27,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"26F9-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FD-200D-2642\",\"image\":\"26f9-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":54,\"sheet_y\":28,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"26F9-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FE-200D-2642\",\"image\":\"26f9-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":54,\"sheet_y\":29,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"26F9-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"26F9-1F3FF-200D-2642\",\"image\":\"26f9-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":54,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"26F9-FE0F\",\"a\":\"Man Bouncing Ball\",\"b\":\"26F9-FE0F-200D-2642-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[54,25],\"o\":4},\"flag-yt\":{\"a\":\"Mayotte Flag\",\"b\":\"1F1FE-1F1F9\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[5,0],\"o\":2},\"woman-bouncing-ball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"26F9-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FB-200D-2640\",\"image\":\"26f9-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":54,\"sheet_y\":20,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"26F9-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FC-200D-2640\",\"image\":\"26f9-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":54,\"sheet_y\":21,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"26F9-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FD-200D-2640\",\"image\":\"26f9-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":54,\"sheet_y\":22,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"26F9-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FE-200D-2640\",\"image\":\"26f9-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":54,\"sheet_y\":23,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"26F9-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"26F9-1F3FF-200D-2640\",\"image\":\"26f9-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":54,\"sheet_y\":24,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Bouncing Ball\",\"b\":\"26F9-FE0F-200D-2640-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[54,19],\"o\":4},\"flag-za\":{\"a\":\"South Africa Flag\",\"b\":\"1F1FF-1F1E6\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[5,1],\"o\":2},\"flag-zm\":{\"a\":\"Zambia Flag\",\"b\":\"1F1FF-1F1F2\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[5,2],\"o\":2},\"weight_lifter\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CB-1F3FB\",\"non_qualified\":null,\"image\":\"1f3cb-1f3fb.png\",\"sheet_x\":10,\"sheet_y\":9,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F3CB-1F3FC\",\"non_qualified\":null,\"image\":\"1f3cb-1f3fc.png\",\"sheet_x\":10,\"sheet_y\":10,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F3CB-1F3FD\",\"non_qualified\":null,\"image\":\"1f3cb-1f3fd.png\",\"sheet_x\":10,\"sheet_y\":11,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F3CB-1F3FE\",\"non_qualified\":null,\"image\":\"1f3cb-1f3fe.png\",\"sheet_x\":10,\"sheet_y\":12,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F3CB-1F3FF\",\"non_qualified\":null,\"image\":\"1f3cb-1f3ff.png\",\"sheet_x\":10,\"sheet_y\":13,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F3CB-FE0F-200D-2642-FE0F\",\"a\":\"Weight Lifter\",\"b\":\"1F3CB-FE0F\",\"c\":\"1F3CB\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[10,8],\"o\":2},\"man-lifting-weights\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CB-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FB-200D-2642\",\"image\":\"1f3cb-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":3,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3CB-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FC-200D-2642\",\"image\":\"1f3cb-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":4,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3CB-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FD-200D-2642\",\"image\":\"1f3cb-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":5,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3CB-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FE-200D-2642\",\"image\":\"1f3cb-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":6,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3CB-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F3CB-1F3FF-200D-2642\",\"image\":\"1f3cb-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":10,\"sheet_y\":7,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F3CB-FE0F\",\"a\":\"Man Lifting Weights\",\"b\":\"1F3CB-FE0F-200D-2642-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[10,2],\"o\":4},\"flag-zw\":{\"a\":\"Zimbabwe Flag\",\"b\":\"1F1FF-1F1FC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[5,3],\"o\":2},\"woman-lifting-weights\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F3CB-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FB-200D-2640\",\"image\":\"1f3cb-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F3CB-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FC-200D-2640\",\"image\":\"1f3cb-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F3CB-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FD-200D-2640\",\"image\":\"1f3cb-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":9,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F3CB-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FE-200D-2640\",\"image\":\"1f3cb-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F3CB-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F3CB-1F3FF-200D-2640\",\"image\":\"1f3cb-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":10,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Lifting Weights\",\"b\":\"1F3CB-FE0F-200D-2640-FE0F\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[9,53],\"o\":4},\"flag-england\":{\"a\":\"England Flag\",\"b\":\"1F3F4-E0067-E0062-E0065-E006E-E0067-E007F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[11,14],\"o\":5},\"bicyclist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B4-1F3FB\",\"non_qualified\":null,\"image\":\"1f6b4-1f3fb.png\",\"sheet_x\":35,\"sheet_y\":24,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F6B4-1F3FC\",\"non_qualified\":null,\"image\":\"1f6b4-1f3fc.png\",\"sheet_x\":35,\"sheet_y\":25,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F6B4-1F3FD\",\"non_qualified\":null,\"image\":\"1f6b4-1f3fd.png\",\"sheet_x\":35,\"sheet_y\":26,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F6B4-1F3FE\",\"non_qualified\":null,\"image\":\"1f6b4-1f3fe.png\",\"sheet_x\":35,\"sheet_y\":27,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F6B4-1F3FF\",\"non_qualified\":null,\"image\":\"1f6b4-1f3ff.png\",\"sheet_x\":35,\"sheet_y\":28,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F6B4-200D-2642-FE0F\",\"a\":\"Bicyclist\",\"b\":\"1F6B4\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[35,23],\"o\":2},\"flag-scotland\":{\"a\":\"Scotland Flag\",\"b\":\"1F3F4-E0067-E0062-E0073-E0063-E0074-E007F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[11,15],\"o\":5},\"flag-wales\":{\"a\":\"Wales Flag\",\"b\":\"1F3F4-E0067-E0062-E0077-E006C-E0073-E007F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[11,16],\"o\":5},\"man-biking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B4-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FB-200D-2642\",\"image\":\"1f6b4-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6B4-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FC-200D-2642\",\"image\":\"1f6b4-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6B4-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FD-200D-2642\",\"image\":\"1f6b4-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":20,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6B4-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FE-200D-2642\",\"image\":\"1f6b4-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":21,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6B4-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F6B4-1F3FF-200D-2642\",\"image\":\"1f6b4-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":22,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F6B4\",\"a\":\"Man Biking\",\"b\":\"1F6B4-200D-2642-FE0F\",\"c\":\"1F6B4-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[35,17],\"o\":4},\"woman-biking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B4-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FB-200D-2640\",\"image\":\"1f6b4-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6B4-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FC-200D-2640\",\"image\":\"1f6b4-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6B4-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FD-200D-2640\",\"image\":\"1f6b4-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":14,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6B4-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FE-200D-2640\",\"image\":\"1f6b4-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6B4-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F6B4-1F3FF-200D-2640\",\"image\":\"1f6b4-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Biking\",\"b\":\"1F6B4-200D-2640-FE0F\",\"c\":\"1F6B4-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[35,11],\"o\":4},\"mountain_bicyclist\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B5-1F3FB\",\"non_qualified\":null,\"image\":\"1f6b5-1f3fb.png\",\"sheet_x\":35,\"sheet_y\":42,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F6B5-1F3FC\",\"non_qualified\":null,\"image\":\"1f6b5-1f3fc.png\",\"sheet_x\":35,\"sheet_y\":43,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F6B5-1F3FD\",\"non_qualified\":null,\"image\":\"1f6b5-1f3fd.png\",\"sheet_x\":35,\"sheet_y\":44,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F6B5-1F3FE\",\"non_qualified\":null,\"image\":\"1f6b5-1f3fe.png\",\"sheet_x\":35,\"sheet_y\":45,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F6B5-1F3FF\",\"non_qualified\":null,\"image\":\"1f6b5-1f3ff.png\",\"sheet_x\":35,\"sheet_y\":46,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"obsoleted_by\":\"1F6B5-200D-2642-FE0F\",\"a\":\"Mountain Bicyclist\",\"b\":\"1F6B5\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[35,41],\"o\":2},\"man-mountain-biking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B5-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FB-200D-2642\",\"image\":\"1f6b5-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":36,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6B5-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FC-200D-2642\",\"image\":\"1f6b5-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6B5-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FD-200D-2642\",\"image\":\"1f6b5-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6B5-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FE-200D-2642\",\"image\":\"1f6b5-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6B5-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F6B5-1F3FF-200D-2642\",\"image\":\"1f6b5-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":35,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"obsoletes\":\"1F6B5\",\"a\":\"Man Mountain Biking\",\"b\":\"1F6B5-200D-2642-FE0F\",\"c\":\"1F6B5-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[35,35],\"o\":4},\"woman-mountain-biking\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6B5-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FB-200D-2640\",\"image\":\"1f6b5-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6B5-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FC-200D-2640\",\"image\":\"1f6b5-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6B5-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FD-200D-2640\",\"image\":\"1f6b5-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":32,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6B5-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FE-200D-2640\",\"image\":\"1f6b5-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":33,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6B5-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F6B5-1F3FF-200D-2640\",\"image\":\"1f6b5-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":35,\"sheet_y\":34,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Mountain Biking\",\"b\":\"1F6B5-200D-2640-FE0F\",\"c\":\"1F6B5-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[35,29],\"o\":4},\"person_doing_cartwheel\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F938-1F3FB\",\"non_qualified\":null,\"image\":\"1f938-1f3fb.png\",\"sheet_x\":40,\"sheet_y\":9,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F938-1F3FC\",\"non_qualified\":null,\"image\":\"1f938-1f3fc.png\",\"sheet_x\":40,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F938-1F3FD\",\"non_qualified\":null,\"image\":\"1f938-1f3fd.png\",\"sheet_x\":40,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F938-1F3FE\",\"non_qualified\":null,\"image\":\"1f938-1f3fe.png\",\"sheet_x\":40,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F938-1F3FF\",\"non_qualified\":null,\"image\":\"1f938-1f3ff.png\",\"sheet_x\":40,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"a\":\"Person Doing Cartwheel\",\"b\":\"1F938\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[40,8],\"o\":4},\"man-cartwheeling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F938-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FB-200D-2642\",\"image\":\"1f938-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":3,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F938-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FC-200D-2642\",\"image\":\"1f938-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":4,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F938-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FD-200D-2642\",\"image\":\"1f938-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":5,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F938-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FE-200D-2642\",\"image\":\"1f938-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":6,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F938-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F938-1F3FF-200D-2642\",\"image\":\"1f938-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":7,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Cartwheeling\",\"b\":\"1F938-200D-2642-FE0F\",\"c\":\"1F938-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,2],\"o\":4},\"woman-cartwheeling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F938-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FB-200D-2640\",\"image\":\"1f938-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":54,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F938-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FC-200D-2640\",\"image\":\"1f938-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F938-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FD-200D-2640\",\"image\":\"1f938-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":39,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F938-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FE-200D-2640\",\"image\":\"1f938-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F938-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F938-1F3FF-200D-2640\",\"image\":\"1f938-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Cartwheeling\",\"b\":\"1F938-200D-2640-FE0F\",\"c\":\"1F938-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[39,53],\"o\":4},\"wrestlers\":{\"a\":\"Wrestlers\",\"b\":\"1F93C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,35],\"o\":4},\"man-wrestling\":{\"a\":\"Man Wrestling\",\"b\":\"1F93C-200D-2642-FE0F\",\"c\":\"1F93C-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,34],\"o\":4},\"woman-wrestling\":{\"a\":\"Woman Wrestling\",\"b\":\"1F93C-200D-2640-FE0F\",\"c\":\"1F93C-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,33],\"o\":4},\"water_polo\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93D-1F3FB\",\"non_qualified\":null,\"image\":\"1f93d-1f3fb.png\",\"sheet_x\":40,\"sheet_y\":49,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F93D-1F3FC\",\"non_qualified\":null,\"image\":\"1f93d-1f3fc.png\",\"sheet_x\":40,\"sheet_y\":50,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F93D-1F3FD\",\"non_qualified\":null,\"image\":\"1f93d-1f3fd.png\",\"sheet_x\":40,\"sheet_y\":51,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F93D-1F3FE\",\"non_qualified\":null,\"image\":\"1f93d-1f3fe.png\",\"sheet_x\":40,\"sheet_y\":52,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F93D-1F3FF\",\"non_qualified\":null,\"image\":\"1f93d-1f3ff.png\",\"sheet_x\":40,\"sheet_y\":53,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"a\":\"Water Polo\",\"b\":\"1F93D\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[40,48],\"o\":4},\"man-playing-water-polo\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93D-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FB-200D-2642\",\"image\":\"1f93d-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":43,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F93D-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FC-200D-2642\",\"image\":\"1f93d-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":44,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F93D-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FD-200D-2642\",\"image\":\"1f93d-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":45,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F93D-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FE-200D-2642\",\"image\":\"1f93d-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":46,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F93D-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F93D-1F3FF-200D-2642\",\"image\":\"1f93d-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":47,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Playing Water Polo\",\"b\":\"1F93D-200D-2642-FE0F\",\"c\":\"1F93D-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,42],\"o\":4},\"woman-playing-water-polo\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93D-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FB-200D-2640\",\"image\":\"1f93d-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":37,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F93D-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FC-200D-2640\",\"image\":\"1f93d-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":38,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F93D-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FD-200D-2640\",\"image\":\"1f93d-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":39,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F93D-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FE-200D-2640\",\"image\":\"1f93d-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":40,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F93D-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F93D-1F3FF-200D-2640\",\"image\":\"1f93d-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":41,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Playing Water Polo\",\"b\":\"1F93D-200D-2640-FE0F\",\"c\":\"1F93D-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,36],\"o\":4},\"handball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93E-1F3FB\",\"non_qualified\":null,\"image\":\"1f93e-1f3fb.png\",\"sheet_x\":41,\"sheet_y\":10,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC\":{\"unified\":\"1F93E-1F3FC\",\"non_qualified\":null,\"image\":\"1f93e-1f3fc.png\",\"sheet_x\":41,\"sheet_y\":11,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD\":{\"unified\":\"1F93E-1F3FD\",\"non_qualified\":null,\"image\":\"1f93e-1f3fd.png\",\"sheet_x\":41,\"sheet_y\":12,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE\":{\"unified\":\"1F93E-1F3FE\",\"non_qualified\":null,\"image\":\"1f93e-1f3fe.png\",\"sheet_x\":41,\"sheet_y\":13,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF\":{\"unified\":\"1F93E-1F3FF\",\"non_qualified\":null,\"image\":\"1f93e-1f3ff.png\",\"sheet_x\":41,\"sheet_y\":14,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":false}},\"a\":\"Handball\",\"b\":\"1F93E\",\"d\":true,\"e\":true,\"f\":true,\"h\":false,\"k\":[41,9],\"o\":4},\"man-playing-handball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93E-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FB-200D-2642\",\"image\":\"1f93e-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":4,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F93E-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FC-200D-2642\",\"image\":\"1f93e-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":5,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F93E-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FD-200D-2642\",\"image\":\"1f93e-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":6,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F93E-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FE-200D-2642\",\"image\":\"1f93e-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":7,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F93E-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F93E-1F3FF-200D-2642\",\"image\":\"1f93e-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":41,\"sheet_y\":8,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Playing Handball\",\"b\":\"1F93E-200D-2642-FE0F\",\"c\":\"1F93E-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[41,3],\"o\":4},\"woman-playing-handball\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F93E-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FB-200D-2640\",\"image\":\"1f93e-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":55,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F93E-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FC-200D-2640\",\"image\":\"1f93e-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":56,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F93E-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FD-200D-2640\",\"image\":\"1f93e-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":0,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F93E-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FE-200D-2640\",\"image\":\"1f93e-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":1,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F93E-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F93E-1F3FF-200D-2640\",\"image\":\"1f93e-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":41,\"sheet_y\":2,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Playing Handball\",\"b\":\"1F93E-200D-2640-FE0F\",\"c\":\"1F93E-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,54],\"o\":4},\"juggling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F939-1F3FB\",\"non_qualified\":null,\"image\":\"1f939-1f3fb.png\",\"sheet_x\":40,\"sheet_y\":27,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F939-1F3FC\",\"non_qualified\":null,\"image\":\"1f939-1f3fc.png\",\"sheet_x\":40,\"sheet_y\":28,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F939-1F3FD\",\"non_qualified\":null,\"image\":\"1f939-1f3fd.png\",\"sheet_x\":40,\"sheet_y\":29,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F939-1F3FE\",\"non_qualified\":null,\"image\":\"1f939-1f3fe.png\",\"sheet_x\":40,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F939-1F3FF\",\"non_qualified\":null,\"image\":\"1f939-1f3ff.png\",\"sheet_x\":40,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Juggling\",\"b\":\"1F939\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,26],\"o\":4},\"man-juggling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F939-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FB-200D-2642\",\"image\":\"1f939-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":21,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F939-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FC-200D-2642\",\"image\":\"1f939-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":22,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F939-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FD-200D-2642\",\"image\":\"1f939-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":23,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F939-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FE-200D-2642\",\"image\":\"1f939-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":24,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F939-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F939-1F3FF-200D-2642\",\"image\":\"1f939-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":40,\"sheet_y\":25,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man Juggling\",\"b\":\"1F939-200D-2642-FE0F\",\"c\":\"1F939-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,20],\"o\":4},\"woman-juggling\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F939-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FB-200D-2640\",\"image\":\"1f939-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":15,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F939-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FC-200D-2640\",\"image\":\"1f939-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":16,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F939-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FD-200D-2640\",\"image\":\"1f939-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":17,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F939-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FE-200D-2640\",\"image\":\"1f939-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":18,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F939-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F939-1F3FF-200D-2640\",\"image\":\"1f939-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":40,\"sheet_y\":19,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Woman Juggling\",\"b\":\"1F939-200D-2640-FE0F\",\"c\":\"1F939-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[40,14],\"o\":4},\"person_in_lotus_position\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D8-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d8-1f3fb.png\",\"sheet_x\":49,\"sheet_y\":32,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D8-1F3FB-200D-2640-FE0F\"},\"1F3FC\":{\"unified\":\"1F9D8-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d8-1f3fc.png\",\"sheet_x\":49,\"sheet_y\":33,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D8-1F3FC-200D-2640-FE0F\"},\"1F3FD\":{\"unified\":\"1F9D8-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d8-1f3fd.png\",\"sheet_x\":49,\"sheet_y\":34,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D8-1F3FD-200D-2640-FE0F\"},\"1F3FE\":{\"unified\":\"1F9D8-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d8-1f3fe.png\",\"sheet_x\":49,\"sheet_y\":35,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D8-1F3FE-200D-2640-FE0F\"},\"1F3FF\":{\"unified\":\"1F9D8-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d8-1f3ff.png\",\"sheet_x\":49,\"sheet_y\":36,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoleted_by\":\"1F9D8-1F3FF-200D-2640-FE0F\"}},\"obsoleted_by\":\"1F9D8-200D-2640-FE0F\",\"a\":\"Person in Lotus Position\",\"b\":\"1F9D8\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,31],\"o\":5},\"man_in_lotus_position\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D8-1F3FB-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FB-200D-2642\",\"image\":\"1f9d8-1f3fb-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":26,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F9D8-1F3FC-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FC-200D-2642\",\"image\":\"1f9d8-1f3fc-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":27,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F9D8-1F3FD-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FD-200D-2642\",\"image\":\"1f9d8-1f3fd-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":28,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F9D8-1F3FE-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FE-200D-2642\",\"image\":\"1f9d8-1f3fe-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":29,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F9D8-1F3FF-200D-2642-FE0F\",\"non_qualified\":\"1F9D8-1F3FF-200D-2642\",\"image\":\"1f9d8-1f3ff-200d-2642-fe0f.png\",\"sheet_x\":49,\"sheet_y\":30,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man in Lotus Position\",\"b\":\"1F9D8-200D-2642-FE0F\",\"c\":\"1F9D8-200D-2642\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,25],\"o\":5},\"woman_in_lotus_position\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F9D8-1F3FB-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FB-200D-2640\",\"image\":\"1f9d8-1f3fb-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":20,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D8-1F3FB\"},\"1F3FC\":{\"unified\":\"1F9D8-1F3FC-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FC-200D-2640\",\"image\":\"1f9d8-1f3fc-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":21,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D8-1F3FC\"},\"1F3FD\":{\"unified\":\"1F9D8-1F3FD-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FD-200D-2640\",\"image\":\"1f9d8-1f3fd-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":22,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D8-1F3FD\"},\"1F3FE\":{\"unified\":\"1F9D8-1F3FE-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FE-200D-2640\",\"image\":\"1f9d8-1f3fe-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":23,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D8-1F3FE\"},\"1F3FF\":{\"unified\":\"1F9D8-1F3FF-200D-2640-FE0F\",\"non_qualified\":\"1F9D8-1F3FF-200D-2640\",\"image\":\"1f9d8-1f3ff-200d-2640-fe0f.png\",\"sheet_x\":49,\"sheet_y\":24,\"added_in\":\"5.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true,\"obsoletes\":\"1F9D8-1F3FF\"}},\"obsoletes\":\"1F9D8\",\"a\":\"Woman in Lotus Position\",\"b\":\"1F9D8-200D-2640-FE0F\",\"c\":\"1F9D8-200D-2640\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[49,19],\"o\":5},\"bath\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6C0-1F3FB\",\"non_qualified\":null,\"image\":\"1f6c0-1f3fb.png\",\"sheet_x\":36,\"sheet_y\":18,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6C0-1F3FC\",\"non_qualified\":null,\"image\":\"1f6c0-1f3fc.png\",\"sheet_x\":36,\"sheet_y\":19,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6C0-1F3FD\",\"non_qualified\":null,\"image\":\"1f6c0-1f3fd.png\",\"sheet_x\":36,\"sheet_y\":20,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6C0-1F3FE\",\"non_qualified\":null,\"image\":\"1f6c0-1f3fe.png\",\"sheet_x\":36,\"sheet_y\":21,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6C0-1F3FF\",\"non_qualified\":null,\"image\":\"1f6c0-1f3ff.png\",\"sheet_x\":36,\"sheet_y\":22,\"added_in\":\"2.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Bath\",\"b\":\"1F6C0\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"clean\",\"shower\",\"bathroom\"],\"k\":[36,17],\"o\":2},\"sleeping_accommodation\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F6CC-1F3FB\",\"non_qualified\":null,\"image\":\"1f6cc-1f3fb.png\",\"sheet_x\":36,\"sheet_y\":30,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F6CC-1F3FC\",\"non_qualified\":null,\"image\":\"1f6cc-1f3fc.png\",\"sheet_x\":36,\"sheet_y\":31,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F6CC-1F3FD\",\"non_qualified\":null,\"image\":\"1f6cc-1f3fd.png\",\"sheet_x\":36,\"sheet_y\":32,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F6CC-1F3FE\",\"non_qualified\":null,\"image\":\"1f6cc-1f3fe.png\",\"sheet_x\":36,\"sheet_y\":33,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F6CC-1F3FF\",\"non_qualified\":null,\"image\":\"1f6cc-1f3ff.png\",\"sheet_x\":36,\"sheet_y\":34,\"added_in\":\"4.0\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Sleeping Accommodation\",\"b\":\"1F6CC\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[36,29],\"o\":2},\"people_holding_hands\":{\"skin_variations\":{\"1F3FB-1F3FB\":{\"unified\":\"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb.png\",\"sheet_x\":46,\"sheet_y\":39,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FB-1F3FC\":{\"unified\":\"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc.png\",\"sheet_x\":46,\"sheet_y\":40,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FB-1F3FD\":{\"unified\":\"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd.png\",\"sheet_x\":46,\"sheet_y\":41,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FB-1F3FE\":{\"unified\":\"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe.png\",\"sheet_x\":46,\"sheet_y\":42,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FB-1F3FF\":{\"unified\":\"1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff.png\",\"sheet_x\":46,\"sheet_y\":43,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC-1F3FB\":{\"unified\":\"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb.png\",\"sheet_x\":46,\"sheet_y\":44,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC-1F3FC\":{\"unified\":\"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc.png\",\"sheet_x\":46,\"sheet_y\":45,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC-1F3FD\":{\"unified\":\"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd.png\",\"sheet_x\":46,\"sheet_y\":46,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC-1F3FE\":{\"unified\":\"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe.png\",\"sheet_x\":46,\"sheet_y\":47,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC-1F3FF\":{\"unified\":\"1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff.png\",\"sheet_x\":46,\"sheet_y\":48,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD-1F3FB\":{\"unified\":\"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb.png\",\"sheet_x\":46,\"sheet_y\":49,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FC\":{\"unified\":\"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc.png\",\"sheet_x\":46,\"sheet_y\":50,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FD\":{\"unified\":\"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd.png\",\"sheet_x\":46,\"sheet_y\":51,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FE\":{\"unified\":\"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe.png\",\"sheet_x\":46,\"sheet_y\":52,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD-1F3FF\":{\"unified\":\"1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff.png\",\"sheet_x\":46,\"sheet_y\":53,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE-1F3FB\":{\"unified\":\"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb.png\",\"sheet_x\":46,\"sheet_y\":54,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FC\":{\"unified\":\"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc.png\",\"sheet_x\":46,\"sheet_y\":55,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FD\":{\"unified\":\"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd.png\",\"sheet_x\":46,\"sheet_y\":56,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FE\":{\"unified\":\"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe.png\",\"sheet_x\":47,\"sheet_y\":0,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FF\":{\"unified\":\"1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff.png\",\"sheet_x\":47,\"sheet_y\":1,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF-1F3FB\":{\"unified\":\"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb.png\",\"sheet_x\":47,\"sheet_y\":2,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FC\":{\"unified\":\"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc.png\",\"sheet_x\":47,\"sheet_y\":3,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FD\":{\"unified\":\"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd.png\",\"sheet_x\":47,\"sheet_y\":4,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FE\":{\"unified\":\"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe.png\",\"sheet_x\":47,\"sheet_y\":5,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FF\":{\"unified\":\"1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF\",\"non_qualified\":null,\"image\":\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff.png\",\"sheet_x\":47,\"sheet_y\":6,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"People Holding Hands\",\"b\":\"1F9D1-200D-1F91D-200D-1F9D1\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[46,38],\"o\":12},\"two_women_holding_hands\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F46D-1F3FB\",\"non_qualified\":null,\"image\":\"1f46d-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":12,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F46D-1F3FC\",\"non_qualified\":null,\"image\":\"1f46d-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":13,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F46D-1F3FD\",\"non_qualified\":null,\"image\":\"1f46d-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":14,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F46D-1F3FE\",\"non_qualified\":null,\"image\":\"1f46d-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":15,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F46D-1F3FF\",\"non_qualified\":null,\"image\":\"1f46d-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":16,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FB-1F3FC\":{\"unified\":\"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":17,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FB-1F3FD\":{\"unified\":\"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":18,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FB-1F3FE\":{\"unified\":\"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":19,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FB-1F3FF\":{\"unified\":\"1F469-1F3FB-200D-1F91D-200D-1F469-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":20,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC-1F3FB\":{\"unified\":\"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":21,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC-1F3FD\":{\"unified\":\"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":22,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC-1F3FE\":{\"unified\":\"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":23,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC-1F3FF\":{\"unified\":\"1F469-1F3FC-200D-1F91D-200D-1F469-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":24,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD-1F3FB\":{\"unified\":\"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":25,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FC\":{\"unified\":\"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":26,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FE\":{\"unified\":\"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":27,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD-1F3FF\":{\"unified\":\"1F469-1F3FD-200D-1F91D-200D-1F469-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":28,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE-1F3FB\":{\"unified\":\"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":29,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FC\":{\"unified\":\"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":30,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FD\":{\"unified\":\"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":31,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FF\":{\"unified\":\"1F469-1F3FE-200D-1F91D-200D-1F469-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":32,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF-1F3FB\":{\"unified\":\"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":33,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FC\":{\"unified\":\"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":34,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FD\":{\"unified\":\"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":35,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FE\":{\"unified\":\"1F469-1F3FF-200D-1F91D-200D-1F469-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":36,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Two Women Holding Hands\",\"b\":\"1F46D\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"pair\",\"friendship\",\"couple\",\"love\",\"like\",\"female\",\"people\",\"human\"],\"k\":[21,11],\"n\":[\"women_holding_hands\"],\"o\":2},\"couple\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F46B-1F3FB\",\"non_qualified\":null,\"image\":\"1f46b-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":17,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F46B-1F3FC\",\"non_qualified\":null,\"image\":\"1f46b-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":18,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F46B-1F3FD\",\"non_qualified\":null,\"image\":\"1f46b-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":19,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F46B-1F3FE\",\"non_qualified\":null,\"image\":\"1f46b-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":20,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F46B-1F3FF\",\"non_qualified\":null,\"image\":\"1f46b-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":21,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FB-1F3FC\":{\"unified\":\"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":22,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FB-1F3FD\":{\"unified\":\"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":23,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FB-1F3FE\":{\"unified\":\"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":24,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FB-1F3FF\":{\"unified\":\"1F469-1F3FB-200D-1F91D-200D-1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":25,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC-1F3FB\":{\"unified\":\"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":26,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC-1F3FD\":{\"unified\":\"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":27,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC-1F3FE\":{\"unified\":\"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":28,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC-1F3FF\":{\"unified\":\"1F469-1F3FC-200D-1F91D-200D-1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":29,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FB\":{\"unified\":\"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":30,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FC\":{\"unified\":\"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":31,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FE\":{\"unified\":\"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":32,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FF\":{\"unified\":\"1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":33,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FB\":{\"unified\":\"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":34,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FC\":{\"unified\":\"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":35,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FD\":{\"unified\":\"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":36,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FF\":{\"unified\":\"1F469-1F3FE-200D-1F91D-200D-1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":37,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FB\":{\"unified\":\"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":38,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FC\":{\"unified\":\"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":39,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FD\":{\"unified\":\"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":40,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FE\":{\"unified\":\"1F469-1F3FF-200D-1F91D-200D-1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":41,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Man and Woman Holding Hands\",\"b\":\"1F46B\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"pair\",\"people\",\"human\",\"love\",\"date\",\"dating\",\"like\",\"affection\",\"valentines\",\"marriage\"],\"k\":[20,16],\"n\":[\"man_and_woman_holding_hands\",\"woman_and_man_holding_hands\"],\"o\":2},\"two_men_holding_hands\":{\"skin_variations\":{\"1F3FB\":{\"unified\":\"1F46C-1F3FB\",\"non_qualified\":null,\"image\":\"1f46c-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":43,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC\":{\"unified\":\"1F46C-1F3FC\",\"non_qualified\":null,\"image\":\"1f46c-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":44,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD\":{\"unified\":\"1F46C-1F3FD\",\"non_qualified\":null,\"image\":\"1f46c-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":45,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE\":{\"unified\":\"1F46C-1F3FE\",\"non_qualified\":null,\"image\":\"1f46c-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":46,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF\":{\"unified\":\"1F46C-1F3FF\",\"non_qualified\":null,\"image\":\"1f46c-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":47,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FB-1F3FC\":{\"unified\":\"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc.png\",\"sheet_x\":20,\"sheet_y\":48,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FB-1F3FD\":{\"unified\":\"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":49,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FB-1F3FE\":{\"unified\":\"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":50,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FB-1F3FF\":{\"unified\":\"1F468-1F3FB-200D-1F91D-200D-1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":51,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC-1F3FB\":{\"unified\":\"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":52,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FC-1F3FD\":{\"unified\":\"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd.png\",\"sheet_x\":20,\"sheet_y\":53,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC-1F3FE\":{\"unified\":\"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe.png\",\"sheet_x\":20,\"sheet_y\":54,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FC-1F3FF\":{\"unified\":\"1F468-1F3FC-200D-1F91D-200D-1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff.png\",\"sheet_x\":20,\"sheet_y\":55,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD-1F3FB\":{\"unified\":\"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb.png\",\"sheet_x\":20,\"sheet_y\":56,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FC\":{\"unified\":\"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":0,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FD-1F3FE\":{\"unified\":\"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":1,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FD-1F3FF\":{\"unified\":\"1F468-1F3FD-200D-1F91D-200D-1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":2,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FE-1F3FB\":{\"unified\":\"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":3,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FC\":{\"unified\":\"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":4,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FD\":{\"unified\":\"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":5,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FE-1F3FF\":{\"unified\":\"1F468-1F3FE-200D-1F91D-200D-1F468-1F3FF\",\"non_qualified\":null,\"image\":\"1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff.png\",\"sheet_x\":21,\"sheet_y\":6,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":false,\"has_img_twitter\":true,\"has_img_facebook\":false},\"1F3FF-1F3FB\":{\"unified\":\"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FB\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb.png\",\"sheet_x\":21,\"sheet_y\":7,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FC\":{\"unified\":\"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FC\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc.png\",\"sheet_x\":21,\"sheet_y\":8,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FD\":{\"unified\":\"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FD\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd.png\",\"sheet_x\":21,\"sheet_y\":9,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true},\"1F3FF-1F3FE\":{\"unified\":\"1F468-1F3FF-200D-1F91D-200D-1F468-1F3FE\",\"non_qualified\":null,\"image\":\"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe.png\",\"sheet_x\":21,\"sheet_y\":10,\"added_in\":\"12.1\",\"has_img_apple\":true,\"has_img_google\":true,\"has_img_twitter\":true,\"has_img_facebook\":true}},\"a\":\"Two Men Holding Hands\",\"b\":\"1F46C\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"pair\",\"couple\",\"love\",\"like\",\"bromance\",\"friendship\",\"people\",\"human\"],\"k\":[20,42],\"n\":[\"men_holding_hands\"],\"o\":2},\"couplekiss\":{\"obsoleted_by\":\"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468\",\"a\":\"Kiss\",\"b\":\"1F48F\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[25,25],\"o\":2},\"woman-kiss-man\":{\"obsoletes\":\"1F48F\",\"a\":\"Woman Kiss Man\",\"b\":\"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468\",\"c\":\"1F469-200D-2764-200D-1F48B-200D-1F468\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[20,7],\"o\":2},\"man-kiss-man\":{\"a\":\"Man Kiss Man\",\"b\":\"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468\",\"c\":\"1F468-200D-2764-200D-1F48B-200D-1F468\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,21],\"o\":2},\"woman-kiss-woman\":{\"a\":\"Woman Kiss Woman\",\"b\":\"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469\",\"c\":\"1F469-200D-2764-200D-1F48B-200D-1F469\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[20,8],\"o\":2},\"couple_with_heart\":{\"obsoleted_by\":\"1F469-200D-2764-FE0F-200D-1F468\",\"a\":\"Couple with Heart\",\"b\":\"1F491\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[25,27],\"o\":2},\"woman-heart-man\":{\"obsoletes\":\"1F491\",\"a\":\"Woman Heart Man\",\"b\":\"1F469-200D-2764-FE0F-200D-1F468\",\"c\":\"1F469-200D-2764-200D-1F468\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[20,5],\"o\":2},\"man-heart-man\":{\"a\":\"Man Heart Man\",\"b\":\"1F468-200D-2764-FE0F-200D-1F468\",\"c\":\"1F468-200D-2764-200D-1F468\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[17,20],\"o\":2},\"woman-heart-woman\":{\"a\":\"Woman Heart Woman\",\"b\":\"1F469-200D-2764-FE0F-200D-1F469\",\"c\":\"1F469-200D-2764-200D-1F469\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[20,6],\"o\":2},\"family\":{\"obsoleted_by\":\"1F468-200D-1F469-200D-1F466\",\"a\":\"Family\",\"b\":\"1F46A\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[20,15],\"n\":[\"man-woman-boy\"],\"o\":2},\"man-woman-boy\":{\"obsoletes\":\"1F46A\",\"a\":\"Man Woman Boy\",\"b\":\"1F468-200D-1F469-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,33],\"n\":[\"family\"],\"o\":2},\"man-woman-girl\":{\"a\":\"Man Woman Girl\",\"b\":\"1F468-200D-1F469-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,35],\"o\":2},\"man-woman-girl-boy\":{\"a\":\"Man Woman Girl Boy\",\"b\":\"1F468-200D-1F469-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,36],\"o\":2},\"man-woman-boy-boy\":{\"a\":\"Man Woman Boy Boy\",\"b\":\"1F468-200D-1F469-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,34],\"o\":2},\"man-woman-girl-girl\":{\"a\":\"Man Woman Girl Girl\",\"b\":\"1F468-200D-1F469-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,37],\"o\":2},\"man-man-boy\":{\"a\":\"Man Man Boy\",\"b\":\"1F468-200D-1F468-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,28],\"o\":2},\"man-man-girl\":{\"a\":\"Man Man Girl\",\"b\":\"1F468-200D-1F468-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,30],\"o\":2},\"man-man-girl-boy\":{\"a\":\"Man Man Girl Boy\",\"b\":\"1F468-200D-1F468-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,31],\"o\":2},\"man-man-boy-boy\":{\"a\":\"Man Man Boy Boy\",\"b\":\"1F468-200D-1F468-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,29],\"o\":2},\"man-man-girl-girl\":{\"a\":\"Man Man Girl Girl\",\"b\":\"1F468-200D-1F468-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,32],\"o\":2},\"woman-woman-boy\":{\"a\":\"Woman Woman Boy\",\"b\":\"1F469-200D-1F469-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,18],\"o\":2},\"woman-woman-girl\":{\"a\":\"Woman Woman Girl\",\"b\":\"1F469-200D-1F469-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,20],\"o\":2},\"woman-woman-girl-boy\":{\"a\":\"Woman Woman Girl Boy\",\"b\":\"1F469-200D-1F469-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,21],\"o\":2},\"woman-woman-boy-boy\":{\"a\":\"Woman Woman Boy Boy\",\"b\":\"1F469-200D-1F469-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,19],\"o\":2},\"woman-woman-girl-girl\":{\"a\":\"Woman Woman Girl Girl\",\"b\":\"1F469-200D-1F469-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,22],\"o\":2},\"man-boy\":{\"a\":\"Man Boy\",\"b\":\"1F468-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,24],\"o\":4},\"man-boy-boy\":{\"a\":\"Man Boy Boy\",\"b\":\"1F468-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,23],\"o\":4},\"man-girl\":{\"a\":\"Man Girl\",\"b\":\"1F468-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,27],\"o\":4},\"man-girl-boy\":{\"a\":\"Man Girl Boy\",\"b\":\"1F468-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,25],\"o\":4},\"man-girl-girl\":{\"a\":\"Man Girl Girl\",\"b\":\"1F468-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[15,26],\"o\":4},\"woman-boy\":{\"a\":\"Woman Boy\",\"b\":\"1F469-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,14],\"o\":4},\"woman-boy-boy\":{\"a\":\"Woman Boy Boy\",\"b\":\"1F469-200D-1F466-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,13],\"o\":4},\"woman-girl\":{\"a\":\"Woman Girl\",\"b\":\"1F469-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,17],\"o\":4},\"woman-girl-boy\":{\"a\":\"Woman Girl Boy\",\"b\":\"1F469-200D-1F467-200D-1F466\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,15],\"o\":4},\"woman-girl-girl\":{\"a\":\"Woman Girl Girl\",\"b\":\"1F469-200D-1F467-200D-1F467\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[18,16],\"o\":4},\"speaking_head_in_silhouette\":{\"a\":\"Speaking Head in Silhouette\",\"b\":\"1F5E3-FE0F\",\"c\":\"1F5E3\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"k\":[30,25],\"o\":2},\"bust_in_silhouette\":{\"a\":\"Bust in Silhouette\",\"b\":\"1F464\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"user\",\"person\",\"human\"],\"k\":[14,24],\"o\":2},\"busts_in_silhouette\":{\"a\":\"Busts in Silhouette\",\"b\":\"1F465\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"user\",\"person\",\"human\",\"group\",\"team\"],\"k\":[14,25],\"o\":2},\"footprints\":{\"a\":\"Footprints\",\"b\":\"1F463\",\"d\":true,\"e\":true,\"f\":true,\"h\":true,\"j\":[\"feet\",\"tracking\",\"walking\",\"beach\"],\"k\":[14,23],\"o\":2}},\"aliases\":{\"raised_hand\":\"hand\",\"satisfied\":\"laughing\",\"tshirt\":\"shirt\",\"hand_with_index_and_middle_fingers_crossed\":\"crossed_fingers\",\"sign_of_the_horns\":\"the_horns\",\"grinning_face_with_star_eyes\":\"star-struck\",\"reversed_hand_with_middle_finger_extended\":\"middle_finger\",\"thumbsup\":\"+1\",\"thumbsdown\":\"-1\",\"punch\":\"facepunch\",\"grinning_face_with_one_large_and_one_small_eye\":\"zany_face\",\"shoe\":\"mans_shoe\",\"smiling_face_with_smiling_eyes_and_hand_covering_mouth\":\"face_with_hand_over_mouth\",\"face_with_finger_covering_closed_lips\":\"shushing_face\",\"face_with_one_eyebrow_raised\":\"face_with_raised_eyebrow\",\"face_with_open_mouth_vomiting\":\"face_vomiting\",\"cooking\":\"fried_egg\",\"flag-cn\":\"cn\",\"shocked_face_with_exploding_head\":\"exploding_head\",\"paw_prints\":\"feet\",\"flag-de\":\"de\",\"telephone\":\"phone\",\"flag-es\":\"es\",\"red_car\":\"car\",\"flipper\":\"dolphin\",\"flag-fr\":\"fr\",\"uk\":\"gb\",\"flag-gb\":\"gb\",\"serious_face_with_symbols_covering_mouth\":\"face_with_symbols_on_mouth\",\"poop\":\"hankey\",\"shit\":\"hankey\",\"honeybee\":\"bee\",\"staff_of_aesculapius\":\"medical_symbol\",\"lantern\":\"izakaya_lantern\",\"open_book\":\"book\",\"sailboat\":\"boat\",\"knife\":\"hocho\",\"flag-it\":\"it\",\"heavy_exclamation_mark\":\"exclamation\",\"flag-jp\":\"jp\",\"envelope\":\"email\",\"flag-kr\":\"kr\",\"collision\":\"boom\",\"pencil\":\"memo\",\"waxing_gibbous_moon\":\"moon\",\"mother_christmas\":\"mrs_claus\",\"sun_small_cloud\":\"mostly_sunny\",\"sun_behind_cloud\":\"barely_sunny\",\"sun_behind_rain_cloud\":\"partly_sunny_rain\",\"lightning_cloud\":\"lightning\",\"tornado_cloud\":\"tornado\",\"flag-ru\":\"ru\",\"running\":\"runner\",\"flag-us\":\"us\",\"women_holding_hands\":\"two_women_holding_hands\",\"man_and_woman_holding_hands\":\"couple\",\"woman_and_man_holding_hands\":\"couple\",\"men_holding_hands\":\"two_men_holding_hands\",\"man-woman-boy\":\"family\",\"family\":\"man-woman-boy\"}}");

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/anchors.js":
/*!***************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/anchors.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Anchors; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









var Anchors =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Anchors, _React$PureComponent);

  function Anchors(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Anchors);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Anchors).call(this, props));
    var defaultCategory = props.categories.filter(function (category) {
      return category.first;
    })[0];
    _this.state = {
      selected: defaultCategory.name
    };
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Anchors, [{
    key: "handleClick",
    value: function handleClick(e) {
      var index = e.currentTarget.getAttribute('data-index');
      var _this$props = this.props,
          categories = _this$props.categories,
          onAnchorClick = _this$props.onAnchorClick;
      onAnchorClick(categories[index], index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          categories = _this$props2.categories,
          color = _this$props2.color,
          i18n = _this$props2.i18n,
          icons = _this$props2.icons,
          selected = this.state.selected;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "emoji-mart-anchors",
        "aria-label": i18n.categorieslabel
      }, categories.map(function (category, i) {
        var id = category.id,
            name = category.name,
            anchor = category.anchor,
            isSelected = name == selected;

        if (anchor === false) {
          return null;
        }

        var iconId = id.startsWith('custom-') ? 'custom' : id;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          key: id,
          "aria-label": i18n.categories[id],
          title: i18n.categories[id],
          "data-index": i,
          type: 'button',
          onClick: _this2.handleClick,
          className: "emoji-mart-anchor ".concat(isSelected ? 'emoji-mart-anchor-selected' : ''),
          style: {
            color: isSelected ? color : null
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-anchor-icon"
        }, icons.categories[iconId]()), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "emoji-mart-anchor-bar",
          style: {
            backgroundColor: color
          }
        }));
      }));
    }
  }]);

  return Anchors;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);


Anchors.propTypes
/* remove-proptypes */
= {
  categories: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  onAnchorClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  icons: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
Anchors.defaultProps = {
  categories: [],
  onAnchorClick: function onAnchorClick() {},
  icons: {}
};

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/category.js":
/*!****************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/category.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/frequently */ "./node_modules/emoji-mart/dist-es/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found */ "./node_modules/emoji-mart/dist-es/components/not-found.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Category =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Category, _React$Component);

  function Category(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Category);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Category).call(this, props));
    _this.data = props.data;
    _this.setContainerRef = _this.setContainerRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.setLabelRef = _this.setLabelRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Category, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.margin = 0;
      this.minMargin = 0;
      this.memoizeSize();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$props = this.props,
          name = _this$props.name,
          perLine = _this$props.perLine,
          _native = _this$props["native"],
          hasStickyPosition = _this$props.hasStickyPosition,
          emojis = _this$props.emojis,
          emojiProps = _this$props.emojiProps,
          skin = emojiProps.skin,
          size = emojiProps.size,
          set = emojiProps.set,
          nextPerLine = nextProps.perLine,
          nextNative = nextProps["native"],
          nextHasStickyPosition = nextProps.hasStickyPosition,
          nextEmojis = nextProps.emojis,
          nextEmojiProps = nextProps.emojiProps,
          nextSkin = nextEmojiProps.skin,
          nextSize = nextEmojiProps.size,
          nextSet = nextEmojiProps.set,
          shouldUpdate = false;

      if (name == 'Recent' && perLine != nextPerLine) {
        shouldUpdate = true;
      }

      if (name == 'Search') {
        shouldUpdate = !(emojis == nextEmojis);
      }

      if (skin != nextSkin || size != nextSize || _native != nextNative || set != nextSet || hasStickyPosition != nextHasStickyPosition) {
        shouldUpdate = true;
      }

      return shouldUpdate;
    }
  }, {
    key: "memoizeSize",
    value: function memoizeSize() {
      if (!this.container) {
        // probably this is a test environment, e.g. jest
        this.top = 0;
        this.maxMargin = 0;
        return;
      }

      var parent = this.container.parentElement;

      var _this$container$getBo = this.container.getBoundingClientRect(),
          top = _this$container$getBo.top,
          height = _this$container$getBo.height;

      var _parent$getBoundingCl = parent.getBoundingClientRect(),
          parentTop = _parent$getBoundingCl.top;

      var _this$label$getBoundi = this.label.getBoundingClientRect(),
          labelHeight = _this$label$getBoundi.height;

      this.top = top - parentTop + parent.scrollTop;

      if (height == 0) {
        this.maxMargin = 0;
      } else {
        this.maxMargin = height - labelHeight;
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(scrollTop) {
      var margin = scrollTop - this.top;
      margin = margin < this.minMargin ? this.minMargin : margin;
      margin = margin > this.maxMargin ? this.maxMargin : margin;
      if (margin == this.margin) return;

      if (!this.props.hasStickyPosition) {
        this.label.style.top = "".concat(margin, "px");
      }

      this.margin = margin;
      return true;
    }
  }, {
    key: "getEmojis",
    value: function getEmojis() {
      var _this2 = this;

      var _this$props2 = this.props,
          name = _this$props2.name,
          emojis = _this$props2.emojis,
          recent = _this$props2.recent,
          perLine = _this$props2.perLine;

      if (name == 'Recent') {
        var custom = this.props.custom;
        var frequentlyUsed = recent || _utils_frequently__WEBPACK_IMPORTED_MODULE_9__["default"].get(perLine);

        if (frequentlyUsed.length) {
          emojis = frequentlyUsed.map(function (id) {
            var emoji = custom.filter(function (e) {
              return e.id === id;
            })[0];

            if (emoji) {
              return emoji;
            }

            return id;
          }).filter(function (id) {
            return !!Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getData"])(id, null, null, _this2.data);
          });
        }

        if (emojis.length === 0 && frequentlyUsed.length > 0) {
          return null;
        }
      }

      if (emojis) {
        emojis = emojis.slice(0);
      }

      return emojis;
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay(display) {
      var emojis = this.getEmojis();

      if (!emojis || !this.container) {
        return;
      }

      this.container.style.display = display;
    }
  }, {
    key: "setContainerRef",
    value: function setContainerRef(c) {
      this.container = c;
    }
  }, {
    key: "setLabelRef",
    value: function setLabelRef(c) {
      this.label = c;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          id = _this$props3.id,
          name = _this$props3.name,
          hasStickyPosition = _this$props3.hasStickyPosition,
          emojiProps = _this$props3.emojiProps,
          i18n = _this$props3.i18n,
          notFound = _this$props3.notFound,
          notFoundEmoji = _this$props3.notFoundEmoji,
          emojis = this.getEmojis(),
          labelStyles = {},
          labelSpanStyles = {},
          containerStyles = {};

      if (!emojis) {
        containerStyles = {
          display: 'none'
        };
      }

      if (!hasStickyPosition) {
        labelStyles = {
          height: 28
        };
        labelSpanStyles = {
          position: 'absolute'
        };
      }

      var label = i18n.categories[id] || name;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        ref: this.setContainerRef,
        className: "emoji-mart-category",
        "aria-label": label,
        style: containerStyles
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: labelStyles,
        "data-name": name,
        className: "emoji-mart-category-label"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: labelSpanStyles,
        ref: this.setLabelRef,
        "aria-hidden": true
        /* already labeled by the section aria-label */

      }, label)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "emoji-mart-category-list"
      }, emojis && emojis.map(function (emoji) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: emoji.short_names && emoji.short_names.join('_') || emoji
        }, Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_11__["default"])(_objectSpread({
          emoji: emoji,
          data: _this3.data
        }, emojiProps)));
      })), emojis && !emojis.length && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_not_found__WEBPACK_IMPORTED_MODULE_12__["default"], {
        i18n: i18n,
        notFound: notFound,
        notFoundEmoji: notFoundEmoji,
        data: this.data,
        emojiProps: emojiProps
      }));
    }
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


Category.propTypes
/* remove-proptypes */
= {
  emojis: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
  hasStickyPosition: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  name: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  "native": prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  perLine: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  emojiProps: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  recent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string),
  notFound: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  notFoundEmoji: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
};
Category.defaultProps = {
  emojis: [],
  hasStickyPosition: true
};

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/emoji/emoji.js":
/*!*******************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/emoji/emoji.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json");
var _data_all_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json", 1);
/* harmony import */ var _nimble_emoji__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/shared-props */ "./node_modules/emoji-mart/dist-es/utils/shared-props.js");
/* harmony import */ var _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/shared-default-props */ "./node_modules/emoji-mart/dist-es/utils/shared-default-props.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Emoji = function Emoji(props) {
  for (var k in Emoji.defaultProps) {
    if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
      props[k] = Emoji.defaultProps[k];
    }
  }

  return Object(_nimble_emoji__WEBPACK_IMPORTED_MODULE_3__["default"])(_objectSpread({}, props));
};

Emoji.propTypes
/* remove-proptypes */
= _utils_shared_props__WEBPACK_IMPORTED_MODULE_4__["EmojiPropTypes"];
Emoji.defaultProps = _objectSpread({}, _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_5__["EmojiDefaultProps"], {
  data: _data_all_json__WEBPACK_IMPORTED_MODULE_2__
});
/* harmony default export */ __webpack_exports__["default"] = (Emoji);

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js":
/*!**************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/data */ "./node_modules/emoji-mart/dist-es/utils/data.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/shared-props */ "./node_modules/emoji-mart/dist-es/utils/shared-props.js");
/* harmony import */ var _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/shared-default-props */ "./node_modules/emoji-mart/dist-es/utils/shared-default-props.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var _getData = function _getData(props) {
  var emoji = props.emoji,
      skin = props.skin,
      set = props.set,
      data = props.data;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getData"])(emoji, skin, set, data);
};

var _getPosition = function _getPosition(props) {
  var _getData2 = _getData(props),
      sheet_x = _getData2.sheet_x,
      sheet_y = _getData2.sheet_y,
      multiplyX = 100 / (props.sheetColumns - 1),
      multiplyY = 100 / (props.sheetRows - 1);

  return "".concat(multiplyX * sheet_x, "% ").concat(multiplyY * sheet_y, "%");
};

var _getSanitizedData = function _getSanitizedData(props) {
  var emoji = props.emoji,
      skin = props.skin,
      set = props.set,
      data = props.data;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getSanitizedData"])(emoji, skin, set, data);
};

var _handleClick = function _handleClick(e, props) {
  if (!props.onClick) {
    return;
  }

  var onClick = props.onClick,
      emoji = _getSanitizedData(props);

  onClick(emoji, e);
};

var _handleOver = function _handleOver(e, props) {
  if (!props.onOver) {
    return;
  }

  var onOver = props.onOver,
      emoji = _getSanitizedData(props);

  onOver(emoji, e);
};

var _handleLeave = function _handleLeave(e, props) {
  if (!props.onLeave) {
    return;
  }

  var onLeave = props.onLeave,
      emoji = _getSanitizedData(props);

  onLeave(emoji, e);
};

var _isNumeric = function _isNumeric(value) {
  return !isNaN(value - parseFloat(value));
};

var _convertStyleToCSS = function _convertStyleToCSS(style) {
  var div = document.createElement('div');

  for (var key in style) {
    var value = style[key];

    if (_isNumeric(value)) {
      value += 'px';
    }

    div.style[key] = value;
  }

  return div.getAttribute('style');
};

var NimbleEmoji = function NimbleEmoji(props) {
  if (props.data.compressed) {
    Object(_utils_data__WEBPACK_IMPORTED_MODULE_5__["uncompress"])(props.data);
  }

  for (var k in NimbleEmoji.defaultProps) {
    if (props[k] == undefined && NimbleEmoji.defaultProps[k] != undefined) {
      props[k] = NimbleEmoji.defaultProps[k];
    }
  }

  var data = _getData(props);

  if (!data) {
    if (props.fallback) {
      return props.fallback(null, props);
    } else {
      return null;
    }
  }

  var unified = data.unified,
      custom = data.custom,
      short_names = data.short_names,
      imageUrl = data.imageUrl,
      style = {},
      children = props.children,
      className = 'emoji-mart-emoji',
      nativeEmoji = unified && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["unifiedToNative"])(unified),
      label = [nativeEmoji].concat(short_names).filter(Boolean).join(', '),
      title = null;

  if (!unified && !custom) {
    if (props.fallback) {
      return props.fallback(data, props);
    } else {
      return null;
    }
  }

  if (props.tooltip) {
    title = short_names[0];
  }

  if (props["native"] && unified) {
    className += ' emoji-mart-emoji-native';
    style = {
      fontSize: props.size
    };
    children = nativeEmoji;

    if (props.forceSize) {
      style.display = 'inline-block';
      style.width = props.size;
      style.height = props.size;
      style.wordBreak = 'keep-all';
    }
  } else if (custom) {
    className += ' emoji-mart-emoji-custom';
    style = {
      width: props.size,
      height: props.size,
      display: 'inline-block'
    };

    if (data.spriteUrl) {
      style = _objectSpread({}, style, {
        backgroundImage: "url(".concat(data.spriteUrl, ")"),
        backgroundSize: "".concat(100 * props.sheetColumns, "% ").concat(100 * props.sheetRows, "%"),
        backgroundPosition: _getPosition(props)
      });
    } else {
      style = _objectSpread({}, style, {
        backgroundImage: "url(".concat(imageUrl, ")"),
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      });
    }
  } else {
    var setHasEmoji = data["has_img_".concat(props.set)] == undefined || data["has_img_".concat(props.set)];

    if (!setHasEmoji) {
      if (props.fallback) {
        return props.fallback(data, props);
      } else {
        return null;
      }
    } else {
      style = {
        width: props.size,
        height: props.size,
        display: 'inline-block',
        backgroundImage: "url(".concat(props.backgroundImageFn(props.set, props.sheetSize), ")"),
        backgroundSize: "".concat(100 * props.sheetColumns, "% ").concat(100 * props.sheetRows, "%"),
        backgroundPosition: _getPosition(props)
      };
    }
  }

  var Tag = {
    name: 'span',
    props: {}
  };

  if (props.onClick && props.useButton) {
    Tag.name = 'button';
    Tag.props = {
      type: 'button'
    };
  }

  if (props.html) {
    style = _convertStyleToCSS(style);
    return "<".concat(Tag.name, " style='").concat(style, "' aria-label='").concat(label, "' ").concat(title ? "title='".concat(title, "'") : '', " class='").concat(className, "'>").concat(children || '', "</").concat(Tag.name, ">");
  } else {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag.name, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      onClick: function onClick(e) {
        return _handleClick(e, props);
      },
      onMouseEnter: function onMouseEnter(e) {
        return _handleOver(e, props);
      },
      onMouseLeave: function onMouseLeave(e) {
        return _handleLeave(e, props);
      },
      "aria-label": label,
      title: title,
      className: className
    }, Tag.props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      style: style
    }, children));
  }
};

NimbleEmoji.propTypes
/* remove-proptypes */
= _objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_6__["EmojiPropTypes"], {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
});
NimbleEmoji.defaultProps = _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_7__["EmojiDefaultProps"];
/* harmony default export */ __webpack_exports__["default"] = (NimbleEmoji);

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/not-found.js":
/*!*****************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/not-found.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var NotFound =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(NotFound, _React$PureComponent);

  function NotFound() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, NotFound);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(NotFound).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(NotFound, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          emojiProps = _this$props.emojiProps,
          i18n = _this$props.i18n,
          notFound = _this$props.notFound,
          notFoundEmoji = _this$props.notFoundEmoji;
      var component = notFound && notFound() || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "emoji-mart-no-results"
      }, Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_8__["default"])(_objectSpread({
        data: data
      }, emojiProps, {
        size: 38,
        emoji: notFoundEmoji,
        onOver: null,
        onLeave: null,
        onClick: null
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "emoji-mart-no-results-label"
      }, i18n.notfound));
      return component;
    }
  }]);

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);


NotFound.propTypes
/* remove-proptypes */
= {
  notFound: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  emojiProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js":
/*!****************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NimblePicker; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../svgs */ "./node_modules/emoji-mart/dist-es/svgs/index.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/store */ "./node_modules/emoji-mart/dist-es/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/frequently */ "./node_modules/emoji-mart/dist-es/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/data */ "./node_modules/emoji-mart/dist-es/utils/data.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/shared-props */ "./node_modules/emoji-mart/dist-es/utils/shared-props.js");
/* harmony import */ var _anchors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../anchors */ "./node_modules/emoji-mart/dist-es/components/anchors.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../category */ "./node_modules/emoji-mart/dist-es/components/category.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../preview */ "./node_modules/emoji-mart/dist-es/components/preview.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../search */ "./node_modules/emoji-mart/dist-es/components/search.js");
/* harmony import */ var _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/shared-default-props */ "./node_modules/emoji-mart/dist-es/utils/shared-default-props.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var I18N = {
  search: 'Search',
  clear: 'Clear',
  // Accessible label on "clear" button
  notfound: 'No Emoji Found',
  skintext: 'Choose your default skin tone',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    people: 'Smileys & People',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  },
  categorieslabel: 'Emoji categories',
  // Accessible title for the list of categories
  skintones: {
    1: 'Default Skin Tone',
    2: 'Light Skin Tone',
    3: 'Medium-Light Skin Tone',
    4: 'Medium Skin Tone',
    5: 'Medium-Dark Skin Tone',
    6: 'Dark Skin Tone'
  }
};

var NimblePicker =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(NimblePicker, _React$PureComponent);

  function NimblePicker(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, NimblePicker);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(NimblePicker).call(this, props));
    _this.CUSTOM = [];
    _this.RECENT_CATEGORY = {
      id: 'recent',
      name: 'Recent',
      emojis: null
    };
    _this.SEARCH_CATEGORY = {
      id: 'search',
      name: 'Search',
      emojis: null,
      anchor: false
    };

    if (props.data.compressed) {
      Object(_utils_data__WEBPACK_IMPORTED_MODULE_13__["uncompress"])(props.data);
    }

    _this.data = props.data;
    _this.i18n = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["deepMerge"])(I18N, props.i18n);
    _this.icons = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["deepMerge"])(_svgs__WEBPACK_IMPORTED_MODULE_9__, props.icons);
    _this.state = {
      firstRender: true
    };
    _this.categories = [];
    var allCategories = [].concat(_this.data.categories);

    if (props.custom.length > 0) {
      var customCategories = {};
      var customCategoriesCreated = 0;
      props.custom.forEach(function (emoji) {
        if (!customCategories[emoji.customCategory]) {
          customCategories[emoji.customCategory] = {
            id: emoji.customCategory ? "custom-".concat(emoji.customCategory) : 'custom',
            name: emoji.customCategory || 'Custom',
            emojis: [],
            anchor: customCategoriesCreated === 0
          };
          customCategoriesCreated++;
        }

        var category = customCategories[emoji.customCategory];

        var customEmoji = _objectSpread({}, emoji, {
          // `<Category />` expects emoji to have an `id`.
          id: emoji.short_names[0],
          custom: true
        });

        category.emojis.push(customEmoji);

        _this.CUSTOM.push(customEmoji);
      });
      allCategories = allCategories.concat(Object.keys(customCategories).map(function (key) {
        return customCategories[key];
      }));
    }

    _this.hideRecent = true;

    if (props.include != undefined) {
      allCategories.sort(function (a, b) {
        if (props.include.indexOf(a.id) > props.include.indexOf(b.id)) {
          return 1;
        }

        return -1;
      });
    }

    for (var categoryIndex = 0; categoryIndex < allCategories.length; categoryIndex++) {
      var category = allCategories[categoryIndex];
      var isIncluded = props.include && props.include.length ? props.include.indexOf(category.id) > -1 : true;
      var isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category.id) > -1 : false;

      if (!isIncluded || isExcluded) {
        continue;
      }

      if (props.emojisToShowFilter) {
        var newEmojis = [];
        var emojis = category.emojis;

        for (var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex++) {
          var emoji = emojis[emojiIndex];

          if (props.emojisToShowFilter(_this.data.emojis[emoji] || emoji)) {
            newEmojis.push(emoji);
          }
        }

        if (newEmojis.length) {
          var newCategory = {
            emojis: newEmojis,
            name: category.name,
            id: category.id
          };

          _this.categories.push(newCategory);
        }
      } else {
        _this.categories.push(category);
      }
    }

    var includeRecent = props.include && props.include.length ? props.include.indexOf(_this.RECENT_CATEGORY.id) > -1 : true;
    var excludeRecent = props.exclude && props.exclude.length ? props.exclude.indexOf(_this.RECENT_CATEGORY.id) > -1 : false;

    if (includeRecent && !excludeRecent) {
      _this.hideRecent = false;

      _this.categories.unshift(_this.RECENT_CATEGORY);
    }

    if (_this.categories[0]) {
      _this.categories[0].first = true;
    }

    _this.categories.unshift(_this.SEARCH_CATEGORY);

    _this.setAnchorsRef = _this.setAnchorsRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleAnchorClick = _this.handleAnchorClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.setSearchRef = _this.setSearchRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleSearch = _this.handleSearch.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.setScrollRef = _this.setScrollRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleScroll = _this.handleScroll.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleScrollPaint = _this.handleScrollPaint.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleEmojiOver = _this.handleEmojiOver.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleEmojiLeave = _this.handleEmojiLeave.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleEmojiClick = _this.handleEmojiClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleEmojiSelect = _this.handleEmojiSelect.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.setPreviewRef = _this.setPreviewRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleSkinChange = _this.handleSkinChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleDarkMatchMediaChange = _this.handleDarkMatchMediaChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(NimblePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.firstRender) {
        this.testStickyPosition();
        this.firstRenderTimeout = setTimeout(function () {
          _this2.setState({
            firstRender: false
          });
        }, 60);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateCategoriesSize();
      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.SEARCH_CATEGORY.emojis = null;
      clearTimeout(this.leaveTimeout);
      clearTimeout(this.firstRenderTimeout);

      if (this.darkMatchMedia) {
        this.darkMatchMedia.removeListener(this.handleDarkMatchMediaChange);
      }
    }
  }, {
    key: "testStickyPosition",
    value: function testStickyPosition() {
      var stickyTestElement = document.createElement('div');
      var prefixes = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
      prefixes.forEach(function (prefix) {
        return stickyTestElement.style.position = "".concat(prefix, "sticky");
      });
      this.hasStickyPosition = !!stickyTestElement.style.position.length;
    }
  }, {
    key: "getPreferredTheme",
    value: function getPreferredTheme() {
      if (this.props.theme != 'auto') return this.props.theme;
      if (this.state.theme) return this.state.theme;
      if (typeof matchMedia !== 'function') return _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_19__["PickerDefaultProps"].theme;

      if (!this.darkMatchMedia) {
        this.darkMatchMedia = matchMedia('(prefers-color-scheme: dark)');
        this.darkMatchMedia.addListener(this.handleDarkMatchMediaChange);
      }

      if (this.darkMatchMedia.media.match(/^not/)) return _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_19__["PickerDefaultProps"].theme;
      return this.darkMatchMedia.matches ? 'dark' : 'light';
    }
  }, {
    key: "handleDarkMatchMediaChange",
    value: function handleDarkMatchMediaChange() {
      this.setState({
        theme: this.darkMatchMedia.matches ? 'dark' : 'light'
      });
    }
  }, {
    key: "handleEmojiOver",
    value: function handleEmojiOver(emoji) {
      var preview = this.preview;

      if (!preview) {
        return;
      } // Use Array.prototype.find() when it is more widely supported.


      var emojiData = this.CUSTOM.filter(function (customEmoji) {
        return customEmoji.id === emoji.id;
      })[0];

      for (var key in emojiData) {
        if (emojiData.hasOwnProperty(key)) {
          emoji[key] = emojiData[key];
        }
      }

      preview.setState({
        emoji: emoji
      });
      clearTimeout(this.leaveTimeout);
    }
  }, {
    key: "handleEmojiLeave",
    value: function handleEmojiLeave(emoji) {
      var preview = this.preview;

      if (!preview) {
        return;
      }

      this.leaveTimeout = setTimeout(function () {
        preview.setState({
          emoji: null
        });
      }, 16);
    }
  }, {
    key: "handleEmojiClick",
    value: function handleEmojiClick(emoji, e) {
      this.props.onClick(emoji, e);
      this.handleEmojiSelect(emoji);
    }
  }, {
    key: "handleEmojiSelect",
    value: function handleEmojiSelect(emoji) {
      var _this3 = this;

      this.props.onSelect(emoji);
      if (!this.hideRecent && !this.props.recent) _utils_frequently__WEBPACK_IMPORTED_MODULE_11__["default"].add(emoji);
      var component = this.categoryRefs['category-1'];

      if (component) {
        var maxMargin = component.maxMargin;

        if (this.props.enableFrequentEmojiSort) {
          component.forceUpdate();
        }

        requestAnimationFrame(function () {
          if (!_this3.scroll) return;
          component.memoizeSize();
          if (maxMargin == component.maxMargin) return;

          _this3.updateCategoriesSize();

          _this3.handleScrollPaint();

          if (_this3.SEARCH_CATEGORY.emojis) {
            component.updateDisplay('none');
          }
        });
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (!this.waitingForPaint) {
        this.waitingForPaint = true;
        requestAnimationFrame(this.handleScrollPaint);
      }
    }
  }, {
    key: "handleScrollPaint",
    value: function handleScrollPaint() {
      this.waitingForPaint = false;

      if (!this.scroll) {
        return;
      }

      var activeCategory = null;

      if (this.SEARCH_CATEGORY.emojis) {
        activeCategory = this.SEARCH_CATEGORY;
      } else {
        var target = this.scroll,
            scrollTop = target.scrollTop,
            scrollingDown = scrollTop > (this.scrollTop || 0),
            minTop = 0;

        for (var i = 0, l = this.categories.length; i < l; i++) {
          var ii = scrollingDown ? this.categories.length - 1 - i : i,
              category = this.categories[ii],
              component = this.categoryRefs["category-".concat(ii)];

          if (component) {
            var active = component.handleScroll(scrollTop);

            if (!minTop || component.top < minTop) {
              if (component.top > 0) {
                minTop = component.top;
              }
            }

            if (active && !activeCategory) {
              activeCategory = category;
            }
          }
        }

        if (scrollTop < minTop) {
          activeCategory = this.categories.filter(function (category) {
            return !(category.anchor === false);
          })[0];
        } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
          activeCategory = this.categories[this.categories.length - 1];
        }
      }

      if (activeCategory) {
        var anchors = this.anchors,
            _activeCategory = activeCategory,
            categoryName = _activeCategory.name;

        if (anchors.state.selected != categoryName) {
          anchors.setState({
            selected: categoryName
          });
        }
      }

      this.scrollTop = scrollTop;
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(emojis) {
      this.SEARCH_CATEGORY.emojis = emojis;

      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.categoryRefs["category-".concat(i)];

        if (component && component.props.name != 'Search') {
          var display = emojis ? 'none' : 'inherit';
          component.updateDisplay(display);
        }
      }

      this.forceUpdate();

      if (this.scroll) {
        this.scroll.scrollTop = 0;
      }

      this.handleScroll();
    }
  }, {
    key: "handleAnchorClick",
    value: function handleAnchorClick(category, i) {
      var component = this.categoryRefs["category-".concat(i)],
          scroll = this.scroll,
          anchors = this.anchors,
          scrollToComponent = null;

      scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.top;

          if (category.first) {
            top = 0;
          } else {
            top += 1;
          }

          scroll.scrollTop = top;
        }
      };

      if (this.SEARCH_CATEGORY.emojis) {
        this.handleSearch(null);
        this.search.clear();
        requestAnimationFrame(scrollToComponent);
      } else {
        scrollToComponent();
      }
    }
  }, {
    key: "handleSkinChange",
    value: function handleSkinChange(skin) {
      var newState = {
        skin: skin
      },
          onSkinChange = this.props.onSkinChange;
      this.setState(newState);
      _utils_store__WEBPACK_IMPORTED_MODULE_10__["default"].update(newState);
      onSkinChange(skin);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var handled = false;

      switch (e.keyCode) {
        case 13:
          var emoji;

          if (this.SEARCH_CATEGORY.emojis && this.SEARCH_CATEGORY.emojis.length && (emoji = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getSanitizedData"])(this.SEARCH_CATEGORY.emojis[0], this.state.skin, this.props.set, this.props.data))) {
            this.handleEmojiSelect(emoji);
            handled = true;
          }

          break;
      }

      if (handled) {
        e.preventDefault();
      }
    }
  }, {
    key: "updateCategoriesSize",
    value: function updateCategoriesSize() {
      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.categoryRefs["category-".concat(i)];
        if (component) component.memoizeSize();
      }

      if (this.scroll) {
        var target = this.scroll;
        this.scrollHeight = target.scrollHeight;
        this.clientHeight = target.clientHeight;
      }
    }
  }, {
    key: "getCategories",
    value: function getCategories() {
      return this.state.firstRender ? this.categories.slice(0, 3) : this.categories;
    }
  }, {
    key: "setAnchorsRef",
    value: function setAnchorsRef(c) {
      this.anchors = c;
    }
  }, {
    key: "setSearchRef",
    value: function setSearchRef(c) {
      this.search = c;
    }
  }, {
    key: "setPreviewRef",
    value: function setPreviewRef(c) {
      this.preview = c;
    }
  }, {
    key: "setScrollRef",
    value: function setScrollRef(c) {
      this.scroll = c;
    }
  }, {
    key: "setCategoryRef",
    value: function setCategoryRef(name, c) {
      if (!this.categoryRefs) {
        this.categoryRefs = {};
      }

      this.categoryRefs[name] = c;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          perLine = _this$props.perLine,
          emojiSize = _this$props.emojiSize,
          set = _this$props.set,
          sheetSize = _this$props.sheetSize,
          sheetColumns = _this$props.sheetColumns,
          sheetRows = _this$props.sheetRows,
          style = _this$props.style,
          title = _this$props.title,
          emoji = _this$props.emoji,
          color = _this$props.color,
          _native = _this$props["native"],
          backgroundImageFn = _this$props.backgroundImageFn,
          emojisToShowFilter = _this$props.emojisToShowFilter,
          showPreview = _this$props.showPreview,
          showSkinTones = _this$props.showSkinTones,
          emojiTooltip = _this$props.emojiTooltip,
          useButton = _this$props.useButton,
          include = _this$props.include,
          exclude = _this$props.exclude,
          recent = _this$props.recent,
          autoFocus = _this$props.autoFocus,
          skinEmoji = _this$props.skinEmoji,
          notFound = _this$props.notFound,
          notFoundEmoji = _this$props.notFoundEmoji;
      var width = perLine * (emojiSize + 12) + 12 + 2 + Object(_utils__WEBPACK_IMPORTED_MODULE_12__["measureScrollbar"])();
      var theme = this.getPreferredTheme();
      var skin = this.props.skin || this.state.skin || _utils_store__WEBPACK_IMPORTED_MODULE_10__["default"].get('skin') || this.props.defaultSkin;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        style: _objectSpread({
          width: width
        }, style),
        className: "emoji-mart emoji-mart-".concat(theme),
        "aria-label": title,
        onKeyDown: this.handleKeyDown
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "emoji-mart-bar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_anchors__WEBPACK_IMPORTED_MODULE_15__["default"], {
        ref: this.setAnchorsRef,
        data: this.data,
        i18n: this.i18n,
        color: color,
        categories: this.categories,
        onAnchorClick: this.handleAnchorClick,
        icons: this.icons
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_18__["default"], {
        ref: this.setSearchRef,
        onSearch: this.handleSearch,
        data: this.data,
        i18n: this.i18n,
        emojisToShowFilter: emojisToShowFilter,
        include: include,
        exclude: exclude,
        custom: this.CUSTOM,
        autoFocus: autoFocus
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: this.setScrollRef,
        className: "emoji-mart-scroll",
        onScroll: this.handleScroll
      }, this.getCategories().map(function (category, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_category__WEBPACK_IMPORTED_MODULE_16__["default"], {
          ref: _this4.setCategoryRef.bind(_this4, "category-".concat(i)),
          key: category.name,
          id: category.id,
          name: category.name,
          emojis: category.emojis,
          perLine: perLine,
          "native": _native,
          hasStickyPosition: _this4.hasStickyPosition,
          data: _this4.data,
          i18n: _this4.i18n,
          recent: category.id == _this4.RECENT_CATEGORY.id ? recent : undefined,
          custom: category.id == _this4.RECENT_CATEGORY.id ? _this4.CUSTOM : undefined,
          emojiProps: {
            "native": _native,
            skin: skin,
            size: emojiSize,
            set: set,
            sheetSize: sheetSize,
            sheetColumns: sheetColumns,
            sheetRows: sheetRows,
            forceSize: _native,
            tooltip: emojiTooltip,
            backgroundImageFn: backgroundImageFn,
            useButton: useButton,
            onOver: _this4.handleEmojiOver,
            onLeave: _this4.handleEmojiLeave,
            onClick: _this4.handleEmojiClick
          },
          notFound: notFound,
          notFoundEmoji: notFoundEmoji
        });
      })), (showPreview || showSkinTones) && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "emoji-mart-bar"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_preview__WEBPACK_IMPORTED_MODULE_17__["default"], {
        ref: this.setPreviewRef,
        data: this.data,
        title: title,
        emoji: emoji,
        showSkinTones: showSkinTones,
        showPreview: showPreview,
        emojiProps: {
          "native": _native,
          size: 38,
          skin: skin,
          set: set,
          sheetSize: sheetSize,
          sheetColumns: sheetColumns,
          sheetRows: sheetRows,
          backgroundImageFn: backgroundImageFn
        },
        skinsProps: {
          skin: skin,
          onChange: this.handleSkinChange,
          skinEmoji: skinEmoji
        },
        i18n: this.i18n
      })));
    }
  }]);

  return NimblePicker;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);


NimblePicker.propTypes
/* remove-proptypes */
= _objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_14__["PickerPropTypes"], {
  data: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
});
NimblePicker.defaultProps = _objectSpread({}, _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_19__["PickerDefaultProps"]);

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/picker/picker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/picker/picker.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Picker; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json");
var _data_all_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json", 1);
/* harmony import */ var _nimble_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nimble-picker */ "./node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/shared-props */ "./node_modules/emoji-mart/dist-es/utils/shared-props.js");
/* harmony import */ var _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/shared-default-props */ "./node_modules/emoji-mart/dist-es/utils/shared-default-props.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Picker =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Picker, _React$PureComponent);

  function Picker() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Picker);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Picker).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Picker, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_nimble_picker__WEBPACK_IMPORTED_MODULE_9__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props, this.state));
    }
  }]);

  return Picker;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);


Picker.propTypes
/* remove-proptypes */
= _utils_shared_props__WEBPACK_IMPORTED_MODULE_10__["PickerPropTypes"];
Picker.defaultProps = _objectSpread({}, _utils_shared_default_props__WEBPACK_IMPORTED_MODULE_11__["PickerDefaultProps"], {
  data: _data_all_json__WEBPACK_IMPORTED_MODULE_8__
});

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/preview.js":
/*!***************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/preview.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preview; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony import */ var _skins_emoji__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skins-emoji */ "./node_modules/emoji-mart/dist-es/components/skins-emoji.js");
/* harmony import */ var _skins_dot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skins-dot */ "./node_modules/emoji-mart/dist-es/components/skins-dot.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Preview =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Preview, _React$PureComponent);

  function Preview(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Preview);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Preview).call(this, props));
    _this.data = props.data;
    _this.state = {
      emoji: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Preview, [{
    key: "render",
    value: function render() {
      var emoji = this.state.emoji,
          _this$props = this.props,
          emojiProps = _this$props.emojiProps,
          skinsProps = _this$props.skinsProps,
          showSkinTones = _this$props.showSkinTones,
          title = _this$props.title,
          idleEmoji = _this$props.emoji,
          i18n = _this$props.i18n,
          showPreview = _this$props.showPreview;

      if (emoji && showPreview) {
        var emojiData = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getData"])(emoji, null, null, this.data),
            _emojiData$emoticons = emojiData.emoticons,
            emoticons = _emojiData$emoticons === void 0 ? [] : _emojiData$emoticons,
            knownEmoticons = [],
            listedEmoticons = [];
        emoticons.forEach(function (emoticon) {
          if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
            return;
          }

          knownEmoticons.push(emoticon.toLowerCase());
          listedEmoticons.push(emoticon);
        });
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview-emoji",
          "aria-hidden": "true"
        }, Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_9__["default"])(_objectSpread({
          key: emoji.id,
          emoji: emoji,
          data: this.data
        }, emojiProps))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview-data",
          "aria-hidden": "true"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview-name"
        }, emoji.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview-shortnames"
        }, emojiData.short_names.map(function (short_name) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            key: short_name,
            className: "emoji-mart-preview-shortname"
          }, ":", short_name, ":");
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview-emoticons"
        }, listedEmoticons.map(function (emoticon) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            key: emoticon,
            className: "emoji-mart-preview-emoticon"
          }, emoticon);
        }))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview-emoji",
          "aria-hidden": "true"
        }, idleEmoji && idleEmoji.length && Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_9__["default"])(_objectSpread({
          emoji: idleEmoji,
          data: this.data
        }, emojiProps))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview-data",
          "aria-hidden": "true"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "emoji-mart-title-label"
        }, title)), showSkinTones && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "emoji-mart-preview-skins".concat(skinsProps.skinEmoji ? ' custom' : '')
        }, skinsProps.skinEmoji ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_skins_emoji__WEBPACK_IMPORTED_MODULE_10__["default"], {
          skin: skinsProps.skin,
          emojiProps: emojiProps,
          data: this.data,
          skinEmoji: skinsProps.skinEmoji,
          i18n: i18n,
          onChange: skinsProps.onChange
        }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_skins_dot__WEBPACK_IMPORTED_MODULE_11__["default"], {
          skin: skinsProps.skin,
          i18n: i18n,
          onChange: skinsProps.onChange
        })));
      }
    }
  }]);

  return Preview;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);


Preview.propTypes
/* remove-proptypes */
= {
  showSkinTones: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  emoji: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  emojiProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  skinsProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
Preview.defaultProps = {
  showSkinTones: true,
  onChange: function onChange() {}
};

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/search.js":
/*!**************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/search.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../svgs */ "./node_modules/emoji-mart/dist-es/svgs/index.js");
/* harmony import */ var _utils_emoji_index_nimble_emoji_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/emoji-index/nimble-emoji-index */ "./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/index */ "./node_modules/emoji-mart/dist-es/utils/index.js");











var id = 0;

var Search =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Search, _React$PureComponent);

  function Search(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Search);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Search).call(this, props));
    _this.state = {
      icon: _svgs__WEBPACK_IMPORTED_MODULE_8__["search"].search,
      isSearching: false,
      id: ++id
    };
    _this.data = props.data;
    _this.emojiIndex = new _utils_emoji_index_nimble_emoji_index__WEBPACK_IMPORTED_MODULE_9__["default"](_this.data);
    _this.setRef = _this.setRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.clear = _this.clear.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // throttle keyboard input so that typing isn't delayed

    _this.handleChange = Object(_utils_index__WEBPACK_IMPORTED_MODULE_10__["throttleIdleTask"])(_this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // in some cases (e.g. preact) the input may already be pre-populated
      // this.input is undefined in Jest tests
      if (this.input && this.input.value) {
        this.search(this.input.value);
      }
    }
  }, {
    key: "search",
    value: function search(value) {
      if (value == '') this.setState({
        icon: _svgs__WEBPACK_IMPORTED_MODULE_8__["search"].search,
        isSearching: false
      });else this.setState({
        icon: _svgs__WEBPACK_IMPORTED_MODULE_8__["search"]["delete"],
        isSearching: true
      });
      this.props.onSearch(this.emojiIndex.search(value, {
        emojisToShowFilter: this.props.emojisToShowFilter,
        maxResults: this.props.maxResults,
        include: this.props.include,
        exclude: this.props.exclude,
        custom: this.props.custom
      }));
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.input.value == '') return;
      this.input.value = '';
      this.input.focus();
      this.search('');
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      this.search(this.input.value);
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      if (e.keyCode === 13) {
        this.clear();
      }
    }
  }, {
    key: "setRef",
    value: function setRef(c) {
      this.input = c;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          i18n = _this$props.i18n,
          autoFocus = _this$props.autoFocus;
      var _this$state = this.state,
          icon = _this$state.icon,
          isSearching = _this$state.isSearching,
          id = _this$state.id;
      var inputId = "emoji-mart-search-".concat(id);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "emoji-mart-search",
        "aria-label": i18n.search
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: inputId,
        ref: this.setRef,
        type: "search",
        onChange: this.handleChange,
        placeholder: i18n.search,
        autoFocus: autoFocus
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "emoji-mart-sr-only",
        htmlFor: inputId
      }, i18n.search), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "emoji-mart-search-icon",
        onClick: this.clear,
        onKeyUp: this.handleKeyUp,
        "aria-label": i18n.clear,
        disabled: !isSearching
      }, icon()));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);


Search.propTypes
/* remove-proptypes */
= {
  onSearch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  maxResults: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  emojisToShowFilter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
Search.defaultProps = {
  onSearch: function onSearch() {},
  maxResults: 75,
  emojisToShowFilter: null,
  autoFocus: false
};

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/skins-dot.js":
/*!*****************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/skins-dot.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SkinsDot; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skins */ "./node_modules/emoji-mart/dist-es/components/skins.js");











var SkinsDot =
/*#__PURE__*/
function (_Skins) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SkinsDot, _Skins);

  function SkinsDot(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SkinsDot);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SkinsDot).call(this, props));
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SkinsDot, [{
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      // if either enter or space is pressed, then execute
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        this.handleClick(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          skin = _this$props.skin,
          i18n = _this$props.i18n;
      var opened = this.state.opened;
      var skinToneNodes = [];

      for (var skinTone = 1; skinTone <= 6; skinTone++) {
        var selected = skinTone === skin;
        var visible = opened || selected;
        skinToneNodes.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: "skin-tone-".concat(skinTone),
          className: "emoji-mart-skin-swatch".concat(selected ? ' selected' : ''),
          "aria-label": i18n.skintones[skinTone],
          "aria-hidden": !visible
        }, opened ? {
          role: 'menuitem'
        } : {}), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          role: "button"
        }, selected ? {
          'aria-haspopup': true,
          'aria-expanded': !!opened
        } : {}, opened ? {
          'aria-pressed': !!selected
        } : {}, {
          tabIndex: visible ? '0' : '',
          "aria-label": i18n.skintones[skinTone],
          title: i18n.skintones[skinTone],
          "data-skin": skinTone,
          className: "emoji-mart-skin emoji-mart-skin-tone-".concat(skinTone)
        }))));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "emoji-mart-skin-swatches".concat(opened ? ' opened' : ''),
        "aria-label": i18n.skintext
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", opened ? {
        role: 'menubar'
      } : {}, skinToneNodes));
    }
  }]);

  return SkinsDot;
}(_skins__WEBPACK_IMPORTED_MODULE_9__["default"]);


SkinsDot.propTypes
/* remove-proptypes */
= {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  skin: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
SkinsDot.defaultProps = {
  onChange: function onChange() {}
};

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/skins-emoji.js":
/*!*******************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/skins-emoji.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SkinsEmoji; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skins */ "./node_modules/emoji-mart/dist-es/components/skins.js");











var SkinsEmoji =
/*#__PURE__*/
function (_Skins) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SkinsEmoji, _Skins);

  function SkinsEmoji(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SkinsEmoji);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SkinsEmoji).call(this, props));
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SkinsEmoji, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          skin = _this$props.skin,
          emojiProps = _this$props.emojiProps,
          data = _this$props.data,
          skinEmoji = _this$props.skinEmoji,
          i18n = _this$props.i18n;
      var opened = this.state.opened;
      var skinToneNodes = [];

      for (var skinTone = 1; skinTone <= 6; skinTone++) {
        var selected = skinTone === skin;
        skinToneNodes.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          key: "skin-tone-".concat(skinTone),
          className: "emoji-mart-skin-swatch custom".concat(selected ? ' selected' : '')
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          onClick: this.handleClick,
          "data-skin": skinTone,
          className: "emoji-mart-skin-tone-".concat(skinTone)
        }, Object(_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_8__["default"])({
          emoji: skinEmoji,
          data: data,
          skin: skinTone,
          backgroundImageFn: emojiProps.backgroundImageFn,
          "native": emojiProps["native"],
          set: emojiProps.set,
          sheetSize: emojiProps.sheetSize,
          size: 23
        }))));
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "emoji-mart-skin-swatches custom".concat(opened ? ' opened' : '')
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "emoji-mart-skin-text".concat(opened ? ' opened' : '')
      }, i18n.skintext), skinToneNodes);
    }
  }]);

  return SkinsEmoji;
}(_skins__WEBPACK_IMPORTED_MODULE_9__["default"]);


SkinsEmoji.propTypes
/* remove-proptypes */
= {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  skin: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,
  emojiProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  skinTone: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  skinEmoji: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
SkinsEmoji.defaultProps = {
  onChange: function onChange() {},
  skinTone: null
};

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/components/skins.js":
/*!*************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/components/skins.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skins; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var Skins =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Skins, _React$PureComponent);

  function Skins(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Skins);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Skins).call(this, props));
    _this.state = {
      opened: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Skins, [{
    key: "handleClick",
    value: function handleClick(e) {
      var skin = parseInt(e.currentTarget.getAttribute('data-skin'));
      var onChange = this.props.onChange;

      if (!this.state.opened) {
        this.setState({
          opened: true
        });
      } else {
        this.setState({
          opened: false
        });

        if (skin != this.props.skin) {
          onChange(skin);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Skins;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);


Skins.propTypes
/* remove-proptypes */
= {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  skin: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired
};
Skins.defaultProps = {
  onChange: function onChange() {}
};

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/index.js ***!
  \**************************************************/
/*! exports provided: emojiIndex, NimbleEmojiIndex, store, frequently, getEmojiDataFromNative, Picker, NimblePicker, Emoji, NimbleEmoji, Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emoji_index_emoji_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/emoji-index/emoji-index */ "./node_modules/emoji-mart/dist-es/utils/emoji-index/emoji-index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emojiIndex", function() { return _utils_emoji_index_emoji_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils_emoji_index_nimble_emoji_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/emoji-index/nimble-emoji-index */ "./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimbleEmojiIndex", function() { return _utils_emoji_index_nimble_emoji_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/store */ "./node_modules/emoji-mart/dist-es/utils/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/frequently */ "./node_modules/emoji-mart/dist-es/utils/frequently.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frequently", function() { return _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEmojiDataFromNative", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["getEmojiDataFromNative"]; });

/* harmony import */ var _components_picker_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/picker/picker */ "./node_modules/emoji-mart/dist-es/components/picker/picker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _components_picker_picker__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_picker_nimble_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/picker/nimble-picker */ "./node_modules/emoji-mart/dist-es/components/picker/nimble-picker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimblePicker", function() { return _components_picker_nimble_picker__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_emoji_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/emoji/emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/emoji.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emoji", function() { return _components_emoji_emoji__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/emoji/nimble-emoji */ "./node_modules/emoji-mart/dist-es/components/emoji/nimble-emoji.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NimbleEmoji", function() { return _components_emoji_nimble_emoji__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/category */ "./node_modules/emoji-mart/dist-es/components/category.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _components_category__WEBPACK_IMPORTED_MODULE_9__["default"]; });












/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/polyfills/stringFromCodePoint.js":
/*!**************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/polyfills/stringFromCodePoint.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _String = String;
/* harmony default export */ __webpack_exports__["default"] = (_String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;

  if (!length) {
    return '';
  }

  var result = '';

  while (++index < length) {
    var codePoint = Number(arguments[index]);

    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 || // not a valid Unicode code point
    codePoint > 0x10ffff || // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
        throw RangeError('Invalid code point: ' + codePoint);
      }

    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }

    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }

  return result;
});

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/svgs/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/svgs/index.js ***!
  \*******************************************************/
/*! exports provided: categories, search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var categories = {
  activity: function activity() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
    }));
  },
  custom: function custom() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      transform: "translate(2.000000, 1.000000)"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      id: "Rectangle",
      x: "8",
      y: "0",
      width: "3",
      height: "21",
      rx: "1.5"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      id: "Rectangle",
      transform: "translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) ",
      x: "8.343",
      y: "0.049",
      width: "3",
      height: "21",
      rx: "1.5"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      id: "Rectangle",
      transform: "translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) ",
      x: "8.343",
      y: "0.049",
      width: "3",
      height: "21",
      rx: "1.5"
    })));
  },
  flags: function flags() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
    }));
  },
  foods: function foods() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
    }));
  },
  nature: function nature() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
    }));
  },
  objects: function objects() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
    }));
  },
  people: function people() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
    }));
  },
  places: function places() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
    }));
  },
  recent: function recent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
    }));
  },
  symbols: function symbols() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
    }));
  }
};
var search = {
  search: function search() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 20 20",
      opacity: "0.5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
    }));
  },
  "delete": function _delete() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 20 20",
      opacity: "0.5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
    }));
  }
};


/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/data.js":
/*!*******************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/data.js ***!
  \*******************************************************/
/*! exports provided: buildSearch, compress, uncompress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSearch", function() { return buildSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compress", function() { return compress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncompress", function() { return uncompress; });
var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_facebook: 'h',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};

var buildSearch = function buildSearch(emoji) {
  var search = [];

  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }

    ;
    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();

        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };

  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);
  return search.join(',');
};

var compress = function compress(emoji) {
  emoji.short_names = emoji.short_names.filter(function (short_name) {
    return short_name !== emoji.short_name;
  });
  delete emoji.short_name;
  emoji.sheet = [emoji.sheet_x, emoji.sheet_y];
  delete emoji.sheet_x;
  delete emoji.sheet_y;
  emoji.added_in = parseInt(emoji.added_in);

  if (emoji.added_in === 6) {
    delete emoji.added_in;
  }

  for (var key in mapping) {
    emoji[mapping[key]] = emoji[key];
    delete emoji[key];
  }

  for (var _key in emoji) {
    var value = emoji[_key];

    if (Array.isArray(value) && !value.length) {
      delete emoji[_key];
    } else if (typeof value === 'string' && !value.length) {
      delete emoji[_key];
    } else if (value === null) {
      delete emoji[_key];
    }
  }
};

var uncompress = function uncompress(data) {
  data.compressed = false;

  for (var id in data.emojis) {
    var emoji = data.emojis[id];

    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }

    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);
    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;
    if (!emoji.text) emoji.text = '';
    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);
    emoji.search = buildSearch(emoji);
  }
};



/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/emoji-index/emoji-index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/emoji-index/emoji-index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_all_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json");
var _data_all_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/all.json */ "./node_modules/emoji-mart/data/all.json", 1);
/* harmony import */ var _nimble_emoji_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nimble-emoji-index */ "./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js");


var emojiIndex = new _nimble_emoji_index__WEBPACK_IMPORTED_MODULE_1__["default"](_data_all_json__WEBPACK_IMPORTED_MODULE_0__);
var emojis = emojiIndex.emojis,
    emoticons = emojiIndex.emoticons;

function search() {
  return emojiIndex.search.apply(emojiIndex, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  search: search,
  emojis: emojis,
  emoticons: emoticons
});

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NimbleEmojiIndex; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./node_modules/emoji-mart/dist-es/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ "./node_modules/emoji-mart/dist-es/utils/data.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./node_modules/emoji-mart/dist-es/utils/store.js");






var NimbleEmojiIndex =
/*#__PURE__*/
function () {
  function NimbleEmojiIndex(data, set) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NimbleEmojiIndex);

    if (data.compressed) {
      Object(_data__WEBPACK_IMPORTED_MODULE_3__["uncompress"])(data);
    }

    this.data = data || {};
    this.set = set || null;
    this.originalPool = {};
    this.index = {};
    this.emojis = {};
    this.emoticons = {};
    this.customEmojisList = [];
    this.buildIndex();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NimbleEmojiIndex, [{
    key: "buildIndex",
    value: function buildIndex() {
      var _this = this;

      var _loop = function _loop(emoji) {
        var emojiData = _this.data.emojis[emoji],
            short_names = emojiData.short_names,
            emoticons = emojiData.emoticons,
            skin_variations = emojiData.skin_variations,
            id = short_names[0];

        if (emoticons) {
          emoticons.forEach(function (emoticon) {
            if (_this.emoticons[emoticon]) {
              return;
            }

            _this.emoticons[emoticon] = id;
          });
        } // If skin variations include them


        if (skin_variations) {
          _this.emojis[id] = {};

          for (var skinTone = 1; skinTone <= 6; skinTone++) {
            _this.emojis[id][skinTone] = Object(___WEBPACK_IMPORTED_MODULE_2__["getSanitizedData"])({
              id: id,
              skin: skinTone
            }, skinTone, _this.set, _this.data);
          }
        } else {
          _this.emojis[id] = Object(___WEBPACK_IMPORTED_MODULE_2__["getSanitizedData"])(id, null, _this.set, _this.data);
        }

        _this.originalPool[id] = emojiData;
      };

      for (var emoji in this.data.emojis) {
        _loop(emoji);
      }
    }
  }, {
    key: "clearCustomEmojis",
    value: function clearCustomEmojis(pool) {
      var _this2 = this;

      this.customEmojisList.forEach(function (emoji) {
        var emojiId = emoji.id || emoji.short_names[0];
        delete pool[emojiId];
        delete _this2.emojis[emojiId];
      });
    }
  }, {
    key: "addCustomToPool",
    value: function addCustomToPool(custom, pool) {
      var _this3 = this;

      if (this.customEmojisList.length) this.clearCustomEmojis(pool);
      custom.forEach(function (emoji) {
        var emojiId = emoji.id || emoji.short_names[0];

        if (emojiId && !pool[emojiId]) {
          pool[emojiId] = Object(___WEBPACK_IMPORTED_MODULE_2__["getData"])(emoji, null, null, _this3.data);
          _this3.emojis[emojiId] = Object(___WEBPACK_IMPORTED_MODULE_2__["getSanitizedData"])(emoji, null, null, _this3.data);
        }
      });
      this.customEmojisList = custom;
      this.index = {};
    }
  }, {
    key: "search",
    value: function search(value) {
      var _this4 = this;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          emojisToShowFilter = _ref.emojisToShowFilter,
          maxResults = _ref.maxResults,
          include = _ref.include,
          exclude = _ref.exclude,
          _ref$custom = _ref.custom,
          custom = _ref$custom === void 0 ? [] : _ref$custom;

      if (this.customEmojisList != custom) this.addCustomToPool(custom, this.originalPool);
      var skinTone = _store__WEBPACK_IMPORTED_MODULE_4__["default"].get('skin') || 1;
      maxResults || (maxResults = 75);
      include || (include = []);
      exclude || (exclude = []);
      var results = null,
          pool = this.originalPool;

      if (value.length) {
        if (value == '-' || value == '-1') {
          return [this.emojis['-1'][skinTone]];
        }

        var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
            allResults = [];

        if (values.length > 2) {
          values = [values[0], values[1]];
        }

        if (include.length || exclude.length) {
          pool = {};
          this.data.categories.forEach(function (category) {
            var isIncluded = include && include.length ? include.indexOf(category.id) > -1 : true;
            var isExcluded = exclude && exclude.length ? exclude.indexOf(category.id) > -1 : false;

            if (!isIncluded || isExcluded) {
              return;
            }

            category.emojis.forEach(function (emojiId) {
              return pool[emojiId] = _this4.data.emojis[emojiId];
            });
          });

          if (custom.length) {
            var customIsIncluded = include && include.length ? include.indexOf('custom') > -1 : true;
            var customIsExcluded = exclude && exclude.length ? exclude.indexOf('custom') > -1 : false;

            if (customIsIncluded && !customIsExcluded) {
              this.addCustomToPool(custom, pool);
            }
          }
        }

        allResults = values.map(function (value) {
          var aPool = pool,
              aIndex = _this4.index,
              length = 0;

          for (var charIndex = 0; charIndex < value.length; charIndex++) {
            var _char = value[charIndex];
            length++;
            aIndex[_char] || (aIndex[_char] = {});
            aIndex = aIndex[_char];

            if (!aIndex.results) {
              (function () {
                var scores = {};
                aIndex.results = [];
                aIndex.pool = {};

                for (var id in aPool) {
                  var emoji = aPool[id],
                      search = emoji.search,
                      sub = value.substr(0, length),
                      subIndex = search.indexOf(sub);

                  if (subIndex != -1) {
                    var score = subIndex + 1;
                    if (sub == id) score = 0;

                    if (_this4.emojis[id] && _this4.emojis[id][skinTone]) {
                      aIndex.results.push(_this4.emojis[id][skinTone]);
                    } else {
                      aIndex.results.push(_this4.emojis[id]);
                    }

                    aIndex.pool[id] = emoji;
                    scores[id] = score;
                  }
                }

                aIndex.results.sort(function (a, b) {
                  var aScore = scores[a.id],
                      bScore = scores[b.id];

                  if (aScore == bScore) {
                    return a.id.localeCompare(b.id);
                  } else {
                    return aScore - bScore;
                  }
                });
              })();
            }

            aPool = aIndex.pool;
          }

          return aIndex.results;
        }).filter(function (a) {
          return a;
        });

        if (allResults.length > 1) {
          results = ___WEBPACK_IMPORTED_MODULE_2__["intersect"].apply(null, allResults);
        } else if (allResults.length) {
          results = allResults[0];
        } else {
          results = [];
        }
      }

      if (results) {
        if (emojisToShowFilter) {
          results = results.filter(function (result) {
            return emojisToShowFilter(pool[result.id]);
          });
        }

        if (results && results.length > maxResults) {
          results = results.slice(0, maxResults);
        }
      }

      return results;
    }
  }]);

  return NimbleEmojiIndex;
}();



/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/frequently.js":
/*!*************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/frequently.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./node_modules/emoji-mart/dist-es/utils/store.js");

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];
var frequently, initialized;
var defaults = {};

function init() {
  initialized = true;
  frequently = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('frequently');
}

function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('last', id);
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('frequently', frequently);
}

function get(perLine) {
  if (!initialized) init();

  if (!frequently) {
    defaults = {};
    var result = [];

    for (var i = 0; i < perLine; i++) {
      defaults[DEFAULTS[i]] = perLine - i;
      result.push(DEFAULTS[i]);
    }

    return result;
  }

  var quantity = perLine * 4;
  var frequentlyKeys = [];

  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }

  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);
  var last = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('last');

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }

  return sliced;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  get: get
});

/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/index.js ***!
  \********************************************************/
/*! exports provided: getData, getEmojiDataFromNative, getSanitizedData, uniq, intersect, deepMerge, unifiedToNative, measureScrollbar, throttleIdleTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmojiDataFromNative", function() { return getEmojiDataFromNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSanitizedData", function() { return getSanitizedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMerge", function() { return deepMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unifiedToNative", function() { return unifiedToNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return measureScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleIdleTask", function() { return throttleIdleTask; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./node_modules/emoji-mart/dist-es/utils/data.js");
/* harmony import */ var _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/stringFromCodePoint */ "./node_modules/emoji-mart/dist-es/polyfills/stringFromCodePoint.js");




var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return "0x".concat(u);
  });
  return _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_2__["default"].apply(null, codePoints);
}

function sanitize(emoji) {
  var name = emoji.name,
      short_names = emoji.short_names,
      skin_tone = emoji.skin_tone,
      skin_variations = emoji.skin_variations,
      emoticons = emoji.emoticons,
      unified = emoji.unified,
      custom = emoji.custom,
      customCategory = emoji.customCategory,
      imageUrl = emoji.imageUrl,
      id = emoji.id || short_names[0],
      colons = ":".concat(id, ":");

  if (custom) {
    return {
      id: id,
      name: name,
      short_names: short_names,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      customCategory: customCategory,
      imageUrl: imageUrl
    };
  }

  if (skin_tone) {
    colons += ":skin-tone-".concat(skin_tone, ":");
  }

  return {
    id: id,
    name: name,
    short_names: short_names,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    "native": unifiedToNative(unified)
  };
}

function getSanitizedData() {
  return sanitize(getData.apply(void 0, arguments));
}

function getData(emoji, skin, set, data) {
  var emojiData = {};

  if (typeof emoji == 'string') {
    var matches = emoji.match(COLONS_REGEX);

    if (matches) {
      emoji = matches[1];

      if (matches[2]) {
        skin = parseInt(matches[2], 10);
      }
    }

    if (data.aliases.hasOwnProperty(emoji)) {
      emoji = data.aliases[emoji];
    }

    if (data.emojis.hasOwnProperty(emoji)) {
      emojiData = data.emojis[emoji];
    } else {
      return null;
    }
  } else if (emoji.id) {
    if (data.aliases.hasOwnProperty(emoji.id)) {
      emoji.id = data.aliases[emoji.id];
    }

    if (data.emojis.hasOwnProperty(emoji.id)) {
      emojiData = data.emojis[emoji.id];
      skin || (skin = emoji.skin);
    }
  }

  if (!Object.keys(emojiData).length) {
    emojiData = emoji;
    emojiData.custom = true;

    if (!emojiData.search) {
      emojiData.search = Object(_data__WEBPACK_IMPORTED_MODULE_1__["buildSearch"])(emoji);
    }
  }

  emojiData.emoticons || (emojiData.emoticons = []);
  emojiData.variations || (emojiData.variations = []);

  if (emojiData.skin_variations && skin > 1) {
    emojiData = JSON.parse(JSON.stringify(emojiData));
    var skinKey = SKINS[skin - 1],
        variationData = emojiData.skin_variations[skinKey];

    if (variationData) {
      if (!variationData.variations && emojiData.variations) {
        delete emojiData.variations;
      }

      if (set && (variationData["has_img_".concat(set)] == undefined || variationData["has_img_".concat(set)]) || !set) {
        emojiData.skin_tone = skin;

        for (var k in variationData) {
          var v = variationData[k];
          emojiData[k] = v;
        }
      }
    }
  }

  if (emojiData.variations && emojiData.variations.length) {
    emojiData = JSON.parse(JSON.stringify(emojiData));
    emojiData.unified = emojiData.variations.shift();
  }

  return emojiData;
}

function getEmojiDataFromNative(nativeString, set, data) {
  if (data.compressed) {
    Object(_data__WEBPACK_IMPORTED_MODULE_1__["uncompress"])(data);
  }

  var skinTones = ['🏻', '🏼', '🏽', '🏾', '🏿'];
  var skinCodes = ['1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
  var skin;
  var skinCode;
  var baseNativeString = nativeString;
  skinTones.forEach(function (skinTone, skinToneIndex) {
    if (nativeString.indexOf(skinTone) > 0) {
      skin = skinToneIndex + 2;
      skinCode = skinCodes[skinToneIndex];
    }
  });
  var emojiData;

  for (var id in data.emojis) {
    var emoji = data.emojis[id];
    var emojiUnified = emoji.unified;

    if (emoji.variations && emoji.variations.length) {
      emojiUnified = emoji.variations.shift();
    }

    if (skin && emoji.skin_variations && emoji.skin_variations[skinCode]) {
      emojiUnified = emoji.skin_variations[skinCode].unified;
    }

    if (unifiedToNative(emojiUnified) === baseNativeString) emojiData = emoji;
  }

  if (!emojiData) {
    return null;
  }

  emojiData.id = emojiData.short_names[0];
  return getSanitizedData(emojiData, skin, set, data);
}

function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }

    return acc;
  }, []);
}

function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);
  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}

function deepMerge(a, b) {
  var o = {};

  for (var key in a) {
    var originalValue = a[key],
        value = originalValue;

    if (b.hasOwnProperty(key)) {
      value = b[key];
    }

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
      value = deepMerge(originalValue, value);
    }

    o[key] = value;
  }

  return o;
} // https://github.com/sonicdoe/measure-scrollbar


function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
} // Use requestIdleCallback() if available, else fall back to setTimeout().
// Throttle so as not to run too frequently.


function throttleIdleTask(func) {
  var doIdleTask = typeof requestIdleCallback === 'function' ? requestIdleCallback : setTimeout;
  var running = false;
  return function throttled() {
    if (running) {
      return;
    }

    running = true;
    doIdleTask(function () {
      running = false;
      func();
    });
  };
}



/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/shared-default-props.js":
/*!***********************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/shared-default-props.js ***!
  \***********************************************************************/
/*! exports provided: PickerDefaultProps, EmojiDefaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerDefaultProps", function() { return PickerDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiDefaultProps", function() { return EmojiDefaultProps; });
var EmojiDefaultProps = {
  skin: 1,
  set: 'apple',
  sheetSize: 64,
  sheetColumns: 57,
  sheetRows: 57,
  "native": false,
  forceSize: false,
  tooltip: false,
  useButton: true,
  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
    return "https://unpkg.com/emoji-datasource-".concat(set, "@").concat("5.0.1", "/img/").concat(set, "/sheets-256/").concat(sheetSize, ".png");
  }
};
var PickerDefaultProps = {
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onSkinChange: function onSkinChange() {},
  emojiSize: 24,
  perLine: 9,
  i18n: {},
  style: {},
  title: 'Emoji Mart™',
  emoji: 'department_store',
  color: '#ae65c5',
  set: EmojiDefaultProps.set,
  theme: 'light',
  skin: null,
  defaultSkin: EmojiDefaultProps.skin,
  "native": EmojiDefaultProps["native"],
  sheetSize: EmojiDefaultProps.sheetSize,
  backgroundImageFn: EmojiDefaultProps.backgroundImageFn,
  emojisToShowFilter: null,
  showPreview: true,
  showSkinTones: true,
  emojiTooltip: EmojiDefaultProps.tooltip,
  useButton: EmojiDefaultProps.useButton,
  autoFocus: false,
  enableFrequentEmojiSort: false,
  custom: [],
  skinEmoji: '',
  notFound: function notFound() {},
  notFoundEmoji: 'sleuth_or_spy',
  icons: {}
};


/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/shared-props.js":
/*!***************************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/shared-props.js ***!
  \***************************************************************/
/*! exports provided: EmojiPropTypes, PickerPropTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiPropTypes", function() { return EmojiPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerPropTypes", function() { return PickerPropTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var EmojiPropTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  onOver: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  backgroundImageFn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  "native": prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  forceSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  useButton: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  skin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([1, 2, 3, 4, 5, 6]),
  sheetSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([16, 20, 32, 64]),
  sheetColumns: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  sheetRows: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  set: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['apple', 'google', 'twitter', 'facebook']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  emoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]).isRequired
};
var PickerPropTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSkinChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  perLine: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  emojiSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  emoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  set: EmojiPropTypes.set,
  skin: EmojiPropTypes.skin,
  "native": prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  backgroundImageFn: EmojiPropTypes.backgroundImageFn,
  sheetSize: EmojiPropTypes.sheetSize,
  emojisToShowFilter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  showPreview: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showSkinTones: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  emojiTooltip: EmojiPropTypes.tooltip,
  useButton: EmojiPropTypes.useButton,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['auto', 'light', 'dark']),
  include: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  exclude: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  recent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  enableFrequentEmojiSort: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  custom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    short_names: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
    emoticons: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
    keywords: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
    imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    spriteUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    sheet_x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    sheet_y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    sheetColumns: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    sheetRows: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  })),
  skinEmoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  notFound: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  notFoundEmoji: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  icons: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};


/***/ }),

/***/ "./node_modules/emoji-mart/dist-es/utils/store.js":
/*!********************************************************!*\
  !*** ./node_modules/emoji-mart/dist-es/utils/store.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NAMESPACE = 'emoji-mart';
var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;
var getter;
var setter;

function setHandlers(handlers) {
  handlers || (handlers = {});
  getter = handlers.getter;
  setter = handlers.setter;
}

function setNamespace(namespace) {
  NAMESPACE = namespace;
}

function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}

function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      window.localStorage["".concat(NAMESPACE, ".").concat(key)] = JSON.stringify(value);
    } catch (e) {}
  }
}

function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;

    try {
      var value = window.localStorage["".concat(NAMESPACE, ".").concat(key)];

      if (value) {
        return JSON.parse(value);
      }
    } catch (e) {
      return;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  update: update,
  set: set,
  get: get,
  setNamespace: setNamespace,
  setHandlers: setHandlers
});

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/EmojiEditor.js":
/*!****************************!*\
  !*** ./src/EmojiEditor.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _neosUiDecorators = __webpack_require__(/*! @neos-project/neos-ui-decorators */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js");

var _emojiMart = __webpack_require__(/*! emoji-mart */ "./node_modules/emoji-mart/dist-es/index.js");

__webpack_require__(/*! ./EmojiEditor.vanilla-css */ "./src/EmojiEditor.vanilla-css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmojiEditor = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {
    return {
        i18nRegistry: globalRegistry.get('i18n')
    };
}), _dec(_class = (_temp2 = _class2 = function (_PureComponent) {
    _inherits(EmojiEditor, _PureComponent);

    function EmojiEditor() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EmojiEditor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmojiEditor.__proto__ || Object.getPrototypeOf(EmojiEditor)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (emoji) {
            _this.props.commit(emoji);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EmojiEditor, [{
        key: 'render',
        value: function render() {
            var translatedLabel = {
                search: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:search'),
                clear: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:clear'),
                notfound: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:notfound'),
                skintext: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintext'),
                categories: {
                    search: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.search'),
                    recent: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.recent'),
                    smileys: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.smileys'),
                    people: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.people'),
                    nature: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.nature'),
                    foods: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.foods'),
                    activity: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.activity'),
                    places: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.places'),
                    objects: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.objects'),
                    symbols: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.symbols'),
                    flags: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.flags'),
                    custom: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categories.custom')
                },
                categorieslabel: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:categorieslabel'),
                skintones: {
                    1: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.1'),
                    2: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.2'),
                    3: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.3'),
                    4: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.4'),
                    5: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.5'),
                    6: this.props.i18nRegistry.translate('JvMTECH.Emoji:Main:skintones.6')
                }
            };
            return _react2.default.createElement(_emojiMart.Picker, { emoji: this.props.value && this.props.value.id ? this.props.value.id : '', emojiSize: 18, i18n: translatedLabel, onSelect: this.handleChange, title: '', color: '#00ADEE', theme: 'dark', exclude: ['recent'] });
        }
    }]);

    return EmojiEditor;
}(_react.PureComponent), _class2.propTypes = {
    i18nRegistry: _propTypes2.default.object,
    value: _propTypes2.default.string,
    commit: _propTypes2.default.func.isRequired
}, _temp2)) || _class);
exports.default = EmojiEditor;

/***/ }),

/***/ "./src/EmojiEditor.vanilla-css":
/*!*************************************!*\
  !*** ./src/EmojiEditor.vanilla-css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest */ "./src/manifest.js");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js");

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _EmojiEditor = __webpack_require__(/*! ./EmojiEditor */ "./src/EmojiEditor.js");

var _EmojiEditor2 = _interopRequireDefault(_EmojiEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('JvMTECH.Emoji:EmojiEditor', {}, function (globalRegistry) {
    var editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.set('JvMTECH.Emoji/EmojiEditor', {
        component: _EmojiEditor2.default
    });
});

/***/ })

/******/ });
//# sourceMappingURL=Plugin.js.map