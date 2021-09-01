(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("axios"), require("element-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "axios", "element-ui"], factory);
	else if(typeof exports === 'object')
		exports["yian"] = factory(require("vue"), require("axios"), require("element-ui"));
	else
		root["yian"] = factory(root["Vue"], root["Axios"], root["Element-UI"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__197__, __WEBPACK_EXTERNAL_MODULE__529__, __WEBPACK_EXTERNAL_MODULE__142__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 99:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Ya-dialog[data-v-d0bf2cc4]  .el-dialog__headerbtn{right:-22px;top:-4px}.Ya-dialog[data-v-d0bf2cc4]  .el-dialog__headerbtn .el-dialog__close{color:#fff;font-size:18px;font-weight:800}.Ya-dialog[data-v-d0bf2cc4]  .el-dialog__header{text-align:center;padding:40px 0 32px 0}.Ya-dialog[data-v-d0bf2cc4]  .el-dialog__header .el-dialog__title{font-size:20px;font-family:Microsoft YaHei;font-weight:400;color:#000;line-height:20px;opacity:.85}.Ya-dialog[data-v-d0bf2cc4]  .el-dialog__footer{text-align:center}.Ya-dialog[data-v-d0bf2cc4]  .el-dialog{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:16px;background-clip:padding-box;outline:0;box-shadow:0 5px 15px rgba(0,0,0,.5)}.Ya-dialog[data-v-d0bf2cc4]  .el-dialog__body{padding:0;color:#606266;font-size:14px;word-break:break-all}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.svg-icon[data-v-69a58868] {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n.svg-external-icon[data-v-69a58868] {\n  background-color: currentColor;\n  mask-size: cover!important;\n  display: inline-block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 232:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(346)/* .default */ .Z
var update = add("f200c222", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 492:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(766);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(346)/* .default */ .Z
var update = add("7b832898", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ addStylesClient)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 529:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__529__;

/***/ }),

/***/ 142:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__142__;

/***/ }),

/***/ 197:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__197__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ yian)
});

// NAMESPACE OBJECT: ./src/utils/apiextend.js
var apiextend_namespaceObject = {};
__webpack_require__.r(apiextend_namespaceObject);
__webpack_require__.d(apiextend_namespaceObject, {
  "defaulter": () => (defaulter)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icon/index.vue?vue&type=template&id=69a58868&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isExternal
    ? _c(
        "div",
        _vm._g(
          {
            staticClass: "svg-external-icon svg-icon",
            style: _vm.styleExternalIcon
          },
          _vm.$listeners
        )
      )
    : _c(
        "svg",
        _vm._g(
          { class: _vm.svgClass, attrs: { "aria-hidden": "true" } },
          _vm.$listeners
        ),
        [_c("use", { attrs: { "xlink:href": _vm.iconName } })]
      )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/components/icon/index.vue?vue&type=template&id=69a58868&scoped=true&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icon/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ const iconvue_type_script_lang_js_ = ({
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true // 定义该 prop 是否是必填项

    },
    className: {
      type: String,
      "default": ''
    }
  },
  computed: {
    isExternal: function isExternal() {
      return this.$yian.utils.isExternal(this.iconClass);
    },
    iconName: function iconName() {
      return "#icon-".concat(this.iconClass);
    },
    svgClass: function svgClass() {
      if (this.className) {
        return "svg-icon ".concat(this.className);
      }

      return 'svg-icon';
    },
    styleExternalIcon: function styleExternalIcon() {
      return {
        mask: "url(".concat(this.iconClass, ") no-repeat 50% 50%"),
        '-webkit-mask': "url(".concat(this.iconClass, ") no-repeat 50% 50%")
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/components/icon/index.vue?vue&type=script&lang=js&
 /* harmony default export */ const components_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icon/index.vue?vue&type=style&index=0&id=69a58868&scoped=true&lang=css&
var iconvue_type_style_index_0_id_69a58868_scoped_true_lang_css_ = __webpack_require__(492);
;// CONCATENATED MODULE: ./src/components/icon/index.vue?vue&type=style&index=0&id=69a58868&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/icon/index.vue



;


/* normalize component */

var component = normalizeComponent(
  components_iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "69a58868",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/icon/index.vue"
/* harmony default export */ const icon = (component.exports);
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(197);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);
;// CONCATENATED MODULE: ./src/utils/utils.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 深度克隆
 * @param  {[type]} obj [description]
 * @return {[type]}          [description]
 */
function deepClone(obj) {
  if ([null, undefined, NaN, false].includes(obj)) return obj;

  if (_typeof(obj) !== 'object' && typeof obj !== 'function') {
    return obj;
  }

  var o = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = _typeof(obj[i]) === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }

  return o;
}
/**
 *这是Vue源码中的深拷贝
 *考虑到圆形结构,深度复制给定对象。
 *这个函数缓存所有嵌套的对象及其副本。
 *如果检测到循环结构，使用缓存副本避免无限循环。
 * @param  {[type]} obj   [description]
 * @param  {Array}  cache [description]
 * @return {[type]}       [description]
 */


function copyData(obj) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  // 如果obj是不可变值，就返回
  if (obj === null || _typeof(obj) !== 'object') {
    return obj;
  } // 如果obj被击中，则为圆形结构


  var hit = find(cache, function (c) {
    return c.original === obj;
  });

  if (hit) {
    return hit.copy;
  }

  var copy = Array.isArray(obj) ? [] : {}; // 先把副本放到缓存里
  // 因为我们想在copyData递归中引用它

  cache.push({
    original: obj,
    copy: copy
  });
  Object.keys(obj).forEach(function (key) {
    copy[key] = copyData(obj[key], cache);
  });
  return copy;
} // 时间处理


function getDateDiff(timespan) {
  var dateTime = new Date(timespan);
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1 < 10 ? "0".concat(dateTime.getMonth() + 1) : dateTime.getMonth() + 1;
  var day = dateTime.getDate() < 10 ? "0".concat(dateTime.getDate()) : dateTime.getDate();
  var hour = dateTime.getHours() < 10 ? "0".concat(dateTime.getHours()) : dateTime.getHours();
  var minute = dateTime.getMinutes() < 10 ? "0".concat(dateTime.getMinutes()) : dateTime.getMinutes();
  var seconds = dateTime.getSeconds() < 10 ? "0".concat(dateTime.getSeconds()) : dateTime.getSeconds();
  var now = new Date();
  var nowNew = now.getTime();
  var milliseconds = 0;
  var timeSpanStr;
  milliseconds = nowNew - dateTime;

  if (milliseconds <= 1000 * 60 * 1) {
    timeSpanStr = '刚刚';
  } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
    timeSpanStr = "".concat(Math.round(milliseconds / (1000 * 60)), "\u5206\u949F\u524D");
  } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
    timeSpanStr = "".concat(Math.round(milliseconds / (1000 * 60 * 60)), "\u5C0F\u65F6\u524D");
  } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 3) {
    timeSpanStr = "".concat(Math.round(milliseconds / (1000 * 60 * 60 * 24)), "\u5929\u524D");
  } else if (milliseconds > 1000 * 60 * 60 * 24 * 3 && year === now.getFullYear()) {
    timeSpanStr = "".concat(month, "-").concat(day, " ").concat(hour, ":").concat(minute, ":").concat(seconds);
  } else {
    timeSpanStr = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(minute, ":").concat(seconds);
  }

  return timeSpanStr;
}
/**
 * 判断你是否为空
 * @param  {[type]} $obj [description]
 * @return {[type]}      [description]
 */


function empty($obj) {
  // 检验非数组/对象类型  EX：undefined   null  ''  根据自身要求添加其他适合的为空的值  如：0 ,'0','  '  等
  if (!$obj && $obj !== 0 && $obj !== '') return true;

  if (typeof $obj === 'string') {
    // 移除字符串中所有 ''
    $obj = $obj.replace(/\s*/g, '');
    if ($obj === '') return true;
  }

  return Array.isArray($obj) && $obj.length === 0 || Object.prototype.isPrototypeOf($obj) && Object.keys($obj).length === 0;
}
/**
 * 数组，字符串去重
 * @param {[Array,String]} params
 * @returns
 */


function unique(params) {
  if (this.getTypeOf(params) === 'Array') {
    return _toConsumableArray(new Set(params));
  }

  if (this.getTypeOf(params) === 'String') {
    var obj = {};
    var str = '';

    for (var i = 0, len = params.length; i < len; i++) {
      if (obj[params[i]]) {
        str += params[i];
        obj[params[i]] = true;
      }
    }

    return str;
  }
}
/**
 * 手机号校验
 * @param {String} mobile [手机号字符串]
 * @returns true or false
 */


function mobileCheck(mobile) {
  var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  return reg.test(mobile);
}
/**
 * Unix时间戳转化日期时间
 * @param targetTime 目标时间或 null 则为当前时间
 * @param format 日期分隔符，空字符则为中文
 * @param showTime 是否显示时间
 * @param showYear 是否显示年份
 * @param showSecond 是否显示秒
 * @returns {string}
 */


function unixDate() {
  var targetTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? '' : _ref$format,
      _ref$showTime = _ref.showTime,
      showTime = _ref$showTime === void 0 ? false : _ref$showTime,
      _ref$showYear = _ref.showYear,
      showYear = _ref$showYear === void 0 ? true : _ref$showYear,
      _ref$showSecond = _ref.showSecond,
      showSecond = _ref$showSecond === void 0 ? false : _ref$showSecond;

  var time;
  var date = ['0', // 年
  '0', // 月
  '0', // 日
  '0', // 时
  '0' // 分
  ];

  if (targetTime === null) {
    time = new Date();
  } else {
    time = new Date(+targetTime * 1000);
  }

  date[0] = "".concat(time.getFullYear()).padStart(2, '0');
  date[1] = "".concat(time.getMonth() + 1).padStart(2, '0');
  date[2] = "".concat(time.getDate()).padStart(2, '0');
  date[3] = "".concat(time.getHours()).padStart(2, '0');
  date[4] = "".concat(time.getMinutes()).padStart(2, '0');
  date[5] = "".concat(time.getSeconds()).padStart(2, '0');
  var result = '';

  if (showYear) {
    result += date[0] + (format === '' ? '年' : format);
  }

  if (format === '') {
    result += "".concat(date[1], "\u6708").concat(date[2], "\u65E5");
  } else {
    result += [date[1], date[2]].join(format);
  }

  if (showTime && !showSecond) {
    result += " ".concat([date[3], date[4]].join(':'));
  } else if (showTime && showSecond) {
    result += " ".concat([date[3], date[4], date[5]].join(':'));
  }

  return result;
}
/**
 * 是否为外链
 * @param {string} path
 * @returns {Boolean}
 */


function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
/**
 * 事件绑定
 * @param {Object} element  [绑定dom]
 * @param {String} event    [事件类型]
 * @param {Function} listener [方法]
 */


function addEvent(element, event, listener) {
  var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (element.addEventListener) {
    element.addEventListener(event, listener, capture);
  } else if (element.attachEvent) {
    element.attachEvent("on".concat(event), listener);
  } else {
    element["on".concat(event)] = listener;
  }
}
/**
 * 获取第一个对象key值
 * @param  {Object}  data     [description]
 * @return {[type]}           [description]
 */


function getShift(data) {
  if (data) {
    return Object.keys(data).shift();
  }

  return false;
}
/**
 * 创建Vue定制实例，通过new Vue.extend()
 * @param {Function} Component
 * @param {Object} props
 * @param {Object} options
 * @param {Object} options.parent -外壳节点通常是父组件和子组件的关联，用于保存一些父组件传给子组件的数据
 * @param {Object} options.data -选项中的data
 * @param {Object} options.el -选项中的el,实例化时存在这个选项，实例将立即进入编译过程，否则需要显式调用 vm.$mount()手动开启编译
 * @returns {[type]}
 */


function getInstance(Component) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var instance = new Component({
    propsData: props,
    parent: options.parent || null,
    data: function data() {
      return options.data || {};
    },
    el: options.el || document.createElement('div')
  });
  return instance;
}

/* harmony default export */ const utils = ({
  deepClone: deepClone,
  getInstance: getInstance,
  copyData: copyData,
  getDateDiff: getDateDiff,
  empty: empty,
  unique: unique,
  mobileCheck: mobileCheck,
  unixDate: unixDate,
  isExternal: isExternal,
  addEvent: addEvent,
  getShift: getShift
});
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/popups/Modal.vue?vue&type=template&id=d0bf2cc4&scoped=true&
var Modalvue_type_template_id_d0bf2cc4_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-dialog",
    {
      staticClass: "Ya-dialog",
      attrs: {
        title: "title",
        visible: _vm.visible,
        width: _vm.width + "px",
        top: _vm.top,
        center: ""
      },
      on: {
        "update:visible": function($event) {
          _vm.visible = $event
        }
      }
    },
    [
      _c(_vm.content, { ref: "cpo", tag: "component" }),
      _vm._v(" "),
      !_vm.hide_footer
        ? _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              !_vm.hide_cancel
                ? _c("el-button", { on: { click: _vm.handleClosed } }, [
                    _vm._v("取 消")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.handleOk } },
                [_vm._v(_vm._s(_vm.sure_btn))]
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var Modalvue_type_template_id_d0bf2cc4_scoped_true_staticRenderFns = []
Modalvue_type_template_id_d0bf2cc4_scoped_true_render._withStripped = true


;// CONCATENATED MODULE: ./src/popups/Modal.vue?vue&type=template&id=d0bf2cc4&scoped=true&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/popups/Modal.vue?vue&type=script&lang=js&
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const Modalvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      "default": '操作窗口'
    },
    top: {
      type: String,
      "default": '15vh'
    },
    hide_footer: {
      type: Boolean,
      "default": true
    },
    width: {
      type: [String, Number]
    },
    hide_cancel: {
      type: Boolean,
      "default": true
    },
    sure_btn: {
      type: String,
      "default": '确定'
    },
    // ComponentConstructor构造函数
    content: {
      type: [Object, Function]
    },
    value: [Array, Object, Number, String]
  },
  data: function data() {
    return {
      visible: true,
      affirm: false
    };
  },
  methods: {
    handleClosed: function handleClosed() {
      this.visible = false;
    },
    handleOk: function handleOk() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.affirm = true;
                _context.prev = 1;
                _context.next = 4;
                return _this.$refs.cpo.affirm(_this);

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                console.error('affirm事件不存在[Please define affirm event in the component]!', _context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6]]);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/popups/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ const popups_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/popups/Modal.vue?vue&type=style&index=0&id=d0bf2cc4&scoped=true&lang=scss&
var Modalvue_type_style_index_0_id_d0bf2cc4_scoped_true_lang_scss_ = __webpack_require__(232);
;// CONCATENATED MODULE: ./src/popups/Modal.vue?vue&type=style&index=0&id=d0bf2cc4&scoped=true&lang=scss&

;// CONCATENATED MODULE: ./src/popups/Modal.vue



;


/* normalize component */

var Modal_component = normalizeComponent(
  popups_Modalvue_type_script_lang_js_,
  Modalvue_type_template_id_d0bf2cc4_scoped_true_render,
  Modalvue_type_template_id_d0bf2cc4_scoped_true_staticRenderFns,
  false,
  null,
  "d0bf2cc4",
  null
  
)

/* hot reload */
if (false) { var Modal_api; }
Modal_component.options.__file = "src/popups/Modal.vue"
/* harmony default export */ const Modal = (Modal_component.exports);
;// CONCATENATED MODULE: ./src/popups/index.js




var directives = {
  store: {},
  popup: {
    inserted: function inserted(el, binding, vnode) {
      var _binding$value;

      var keys = vnode.elm.id;
      directives.store[keys] = (_binding$value = binding.value) !== null && _binding$value !== void 0 ? _binding$value : {};
      utils.addEvent(el, 'click', function () {
        var _el$getAttribute, _el$getAttribute2, _el$getAttribute3, _el$getAttribute4, _el$getAttribute5, _el$getAttribute6, _el$getAttribute7;

        var value = directives.store[keys];
        var action = (_el$getAttribute = el.getAttribute('action')) !== null && _el$getAttribute !== void 0 ? _el$getAttribute : ''; // 父组件上的回调事件名称

        var title = (_el$getAttribute2 = el.getAttribute('title')) !== null && _el$getAttribute2 !== void 0 ? _el$getAttribute2 : '操作窗口'; // 获取窗口标题

        var hide_footer = (_el$getAttribute3 = el.getAttribute('hide_footer')) !== null && _el$getAttribute3 !== void 0 ? _el$getAttribute3 : false; // 是否取消底部

        var hide_cancel = (_el$getAttribute4 = el.getAttribute('hide_cancel')) !== null && _el$getAttribute4 !== void 0 ? _el$getAttribute4 : false; // 是否取消底部取消按钮

        var sure_btn = (_el$getAttribute5 = el.getAttribute('sure_btn')) !== null && _el$getAttribute5 !== void 0 ? _el$getAttribute5 : '确定'; // 确认按钮文案

        var width = (_el$getAttribute6 = el.getAttribute('width')) !== null && _el$getAttribute6 !== void 0 ? _el$getAttribute6 : 730; // 设置宽度

        var top = (_el$getAttribute7 = el.getAttribute('top')) !== null && _el$getAttribute7 !== void 0 ? _el$getAttribute7 : '15vh'; // 设置距顶高度

        var main_modules = el.getAttribute('module'); // 获取组件隶属主模块名称

        var popup = utils.getShift(binding.modifiers); // 获取指令的修饰符 v-popup.orderShipping中的orderShipping

        var vm = vnode.context; // vnode的父组件，即渲染这个template模板的上下文对象实例
        // Determine whether the main instruction exists

        if (popup && main_modules) {
          var content = yian.component(main_modules, popup); // 这个方法起到取出组件对象的作用（组件已经是一个compiled的对象）
          // Determine whether the subcomponent of the popup component is registered

          if (content) {
            var visible = true;
            content = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default().extend(content);
            var instance = utils.getInstance(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default().extend(Modal), {
              value: value,
              action: action,
              title: title,
              hide_cancel: hide_cancel,
              hide_footer: hide_footer,
              sure_btn: sure_btn,
              width: width,
              top: top,
              content: content,
              // 构造体
              visible: visible
            }, {
              route: vm.$route
            });
            var domDiv = vm.$root.$el.appendChild(instance.$el); // Dom element after successful mounting
            // Monitor Remove Vue.property.$watch

            instance.$watch('visible', function () {
              instance.visible = false;
              vm.$root.$el.removeChild(domDiv);

              if (instance.affirm) {
                vm.reload ? vm.reload() : false; // If the context object routing for rendering template template needs to be overloaded

                vm[action] ? vm[action].apply(vm, [keys, value]) : false;
              }
            });
          } else {
            console.error('component组件不存!');
          }
        } else {
          console.error('main_modules组件隶属主模块名称或popup指令修饰符不能为空!');
        }
      });
    },
    // 需要考虑到vnode更新的情况(这种是vnode更新，但是组件并没有销毁重建的情况，那我们需要去触发这个钩子来对sote中的数据进行重新赋值)
    update: function update(el, binding, vnode) {
      !utils.empty(binding.value) ? directives.store[vnode.elm.id] = binding.value : delete directives.store[vnode.elm.id];
    }
  }
};
/* harmony default export */ const popups = (directives);
;// CONCATENATED MODULE: ./src/install.js


function install(Vue) {
  Vue.directive('popup', popups.popup);
  Vue.component('svg-icon', icon); // icon全局注册移入这个封装入口
}
// EXTERNAL MODULE: external {"root":"Axios","commonjs":"axios","commonjs2":"axios","amd":"axios"}
var external_root_Axios_commonjs_axios_commonjs2_axios_amd_axios_ = __webpack_require__(529);
var external_root_Axios_commonjs_axios_commonjs2_axios_amd_axios_default = /*#__PURE__*/__webpack_require__.n(external_root_Axios_commonjs_axios_commonjs2_axios_amd_axios_);
;// CONCATENATED MODULE: ./src/utils/cache.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function cache_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function cache_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { cache_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { cache_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // Store the requested data

var cache = {
  data: {},
  set: function set(key, data) {
    this.data[key] = data;
  },
  get: function get(key) {
    return this.data[key];
  },
  clear: function clear(key) {
    delete this.data[key];
  }
}; // 建立唯一的urlkey值

var buildUniqueUrl = function buildUniqueUrl(url, method) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var paramStr = function paramStr(obj) {
    if (toString.call(obj) === '[object Object]') {
      return JSON.stringify(Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
      }, {})); // 提供一个初始值空对象作为reduce()方法的第二个参数
    }

    return JSON.stringify(obj);
  };

  url += "?".concat(paramStr(params), "&").concat(paramStr(data), "&").concat(method);
  console.log(url);
  return url;
}; // 防止重复请求


/* harmony default export */ const utils_cache = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/function () {
    var _ref = cache_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(config) {
      var defaultOptions, index, responsePromise;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              defaultOptions = _objectSpread({
                time: 0
              }, options);
              index = buildUniqueUrl(config.url, config.method, config.params, config.data);
              responsePromise = cache.get(index);

              if (!responsePromise) {
                responsePromise = cache_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var response;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return external_root_Axios_commonjs_axios_commonjs2_axios_amd_axios_default().defaults.adapter(config);

                        case 3:
                          response = _context.sent;
                          return _context.abrupt("return", Promise.resolve(response));

                        case 7:
                          _context.prev = 7;
                          _context.t0 = _context["catch"](0);
                          cache.clear(index);
                          return _context.abrupt("return", Promise.reject(_context.t0));

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 7]]);
                }))();
                cache.set(index, responsePromise);

                if (defaultOptions.time !== 0) {
                  setTimeout(function () {
                    cache.clear(index);
                  }, defaultOptions.time);
                }
              }

              return _context2.abrupt("return", responsePromise.then(function (data) {
                return JSON.parse(JSON.stringify(data));
              }));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}); // 这里可能会对config产生疑问，因为在axios中adapter作为适配器允许使用者自定义请求处理，它是一个function见下，且在源代码中执行顺序，此时config已经完成了合并。
// Detail See: https://github.com/axios/axios/blob/master/lib/adapters/README.md
// adapter: function (config) {
//   /* ... */
// }
;// CONCATENATED MODULE: ./src/utils/yonstructor.js
function yonstructor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function yonstructor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { yonstructor_ownKeys(Object(source), true).forEach(function (key) { yonstructor_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { yonstructor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function yonstructor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var youstructor = /*#__PURE__*/function () {
  // Core structure
  function youstructor(config, self) {
    _classCallCheck(this, youstructor);

    this.self = self;
    this.utils = utils;
    this.ElementUILoading = config.ElementUILoading;
    this.interceptor = config.service;
  }

  _createClass(youstructor, [{
    key: "axios",
    value: function axios(options) {
      var _this = this;

      var url = options.url,
          params = options.params,
          method = options.method;
      return new Promise(function (resolve, reject) {
        var data = {};
        if (method.toLowerCase() === 'get') data = {
          params: params
        };
        if (method.toLowerCase() === 'post') data = {
          data: params
        };

        _this.interceptor(yonstructor_objectSpread(yonstructor_objectSpread({
          url: url,
          method: method
        }, data), {}, {
          adapter: utils_cache({
            time: 10000
          })
        })).then(function (res) {
          resolve(res);
        })["catch"](function (err) {
          console.log(err);
          reject(err);
        });
      });
    }
  }]);

  return youstructor;
}();

/* harmony default export */ const yonstructor = (youstructor);
// EXTERNAL MODULE: external {"root":"Element-UI","commonjs":"element-ui","commonjs2":"element-ui","amd":"element-ui"}
var external_root_Element_UI_commonjs_element_ui_commonjs2_element_ui_amd_element_ui_ = __webpack_require__(142);
;// CONCATENATED MODULE: ./src/utils/apiextend.js
var defaulter = {
  // 前置操作

  /**
   *
   * @param {Object} value [Proxy代理的property]
   * @param {Function} resolve
   * @param {Function} reject
   * @param {Object} config
   */
  beforeEach: function beforeEach(value, resolve, reject, config) {
    var url;
    var method;
    var data;
    var options;
    var keys;
    var argument;
    keys = Object.keys(value);
    argument = value[keys[0]]; // 第一个方法中的参数

    url = "/".concat(keys[0], "/").concat(argument[1].behavior);
    method = argument[0].toLowerCase();
    options = {
      loading: config.ElementUILoading
    };

    if (argument[2]) {
      // 当主body对象存在时
      data = argument[2];

      if (keys.length > 1 && keys[1] == 'page') {
        Object.assign(data, value[keys[1]][0]);
      }

      if (keys.length > 2) {
        reject('请检查你的方法!');
      }
    } else {
      // 当主body对象不存在时
      if (keys.length > 1 && keys[1] == 'page') {
        // debugger
        data = value[keys[1]][0];
      }

      if (keys.length > 2) {
        reject('请检查你的方法!');
      }
    }

    resolve({
      url: url,
      method: method,
      data: data,
      options: options
    });
  }
};
;// CONCATENATED MODULE: ./src/utils/api.js
function api_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function api_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_ownKeys(Object(source), true).forEach(function (key) { api_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function api_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function api_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function api_createClass(Constructor, protoProps, staticProps) { if (protoProps) api_defineProperties(Constructor.prototype, protoProps); if (staticProps) api_defineProperties(Constructor, staticProps); return Constructor; }

 // 全局loding圈引入




var api_api = /*#__PURE__*/function () {
  /**
   * @param {*} data [Strip all the methods before then, and the return in the constructor will not be executed when data does not exist]
   * @param {Object} youstructor [Back-injected core structure]
   * @returns
   */
  function api(data, youstructor) {
    api_classCallCheck(this, api);

    this.youstructor = youstructor;

    if (data) {
      return this.send(data);
    }
  }
  /**
   * 前置操作
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */


  api_createClass(api, [{
    key: "beforeEach",
    value: function beforeEach(value) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          _this.basics.beforeEach(value, resolve, reject, _this.youstructor);
        } catch (error) {
          reject(error);
        }
      });
    }
  }, {
    key: "send",
    value: function send(data) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var key = Object.keys(data);
        var action = key[0] || 'defaulter';
        _this2.basics = apiextend_namespaceObject[action] || defaulter; // defaulter是一般请求引入，还有video等需要特殊引入

        _this2.beforeEach(data).then(function (value) {
          if (value) {
            var options = {
              url: value.url,
              params: value.data,
              qc: value.options,
              method: value.method
            };

            _this2.request(options).then(function (res) {
              resolve(res);
            })["catch"](function (err) {
              reject(err);
            });
          } else {
            reject('前置操作错误!');
          }
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
    /**
     * axios外侧第一层封装请求体，设置成实例方法，为了content定制interceptor
     * @param {Object} options [url请求地址, params请求body或者请求主query, qc配置信息{loading加载是否开启}, method请求方式]
     */

  }, {
    key: "request",
    value: function request(options) {
      var _this3 = this;

      var url = options.url,
          params = options.params,
          _options$qc = options.qc,
          qc = _options$qc === void 0 ? {
        loading: false
      } : _options$qc,
          method = options.method;
      var loadingInstance;

      if (qc.loading && method.toLowerCase() === 'get') {
        loadingInstance = external_root_Element_UI_commonjs_element_ui_commonjs2_element_ui_amd_element_ui_.Loading.service({
          fullscreen: true,
          text: '努力加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      }

      return new Promise(function (resolve, reject) {
        var data;
        if (method.toLowerCase() === 'get') data = {
          params: params
        };
        if (method.toLowerCase() === 'post') data = {
          data: params
        };

        _this3.youstructor.interceptor(api_objectSpread(api_objectSpread({
          url: url,
          method: method
        }, data), {}, {
          adapter: utils_cache({
            time: 10000
          })
        })).then(function (res) {
          resolve(res);
        })["catch"](function (err) {
          console.log(err);
          reject(err);
        })["finally"](function () {
          if (method.toLowerCase() === 'get') {
            loadingInstance.close();
          }
        });
      });
    }
  }]);

  return api;
}();


;// CONCATENATED MODULE: ./src/index.js
function src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function src_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); return Constructor; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var yian = /*#__PURE__*/function () {
  function yian() {
    src_classCallCheck(this, yian);
  }

  src_createClass(yian, null, [{
    key: "install",
    value:
    /**
     * 组建列表
     * @type {Object}
     */
    function install() {}
  }, {
    key: "content",
    value: function content() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // After the content method is called, return an instance of the core structure of yourstructor, and then mount it to the Vue instance method
      return this.get_proxy(config);
    } //Proxy Constructor

  }, {
    key: "get_proxy",
    value: function get_proxy(config) {
      var _Proxy = new Proxy(new yonstructor(config, this), {
        _validator: {},
        get: function get(target, property, receiver) {
          if (property in target) {
            //the instance attributes of youstructor, such as utils
            return target[property];
          } else {
            if (property == 'then') {
              //the logic processing of youstructor's request then method
              var data = utils.copyData(this._validator);
              this._validator = {}; //Return the (pre-function) that needs to be processed before the then method

              return /*#__PURE__*/function () {
                var _ref = src_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(argument) {
                  var returned, reverse;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          returned = new Promise(function (reslove, reject) {
                            new api_api(data, target).then(function (value) {
                              reslove(value);
                            })["catch"](function (error) {
                              reject(error);
                            });
                          }); //The pre-data is processed first after the execution of 'then'

                          _context.next = 3;
                          return returned;

                        case 3:
                          reverse = _context.sent;
                          return _context.abrupt("return", argument(reverse));

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }();
            } else if (property == 'file' || property == 'upload' || property == 'video') {
              //这里是youstructor的请求方法逻辑处理
              return false;
            } else {
              var self = this; //此处匿名函数不能使用()=>,会导致内部arguments指向的是上一层

              return function () {
                //This step is the core step of processing all other methods before then, performing a proxy on them, and storing the relevant parameters.
                self._validator[property] = arguments || ''; //As long as the method is executed, a layer of proxy is returned.

                return _Proxy;
              };
            }
          }
        }
      });

      return _Proxy;
    }
    /**
     *
     * @param {String} id [联动组件主模块名称]
     * @param {String} name [联动组件popup指令修饰符名称]
     * @param {Object} component [真实组件选项对象，Vue源码中Vue.component会自动调用 Vue.extend]
     * @returns
     */

  }, {
    key: "component",
    value: function component(id, name, _component) {
      if (id == 'components') {
        external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default().component(name, _component);
      } else {
        var key = id + '_' + name;

        if (id && name && _component) {
          yian.components[key] = _component;
        }

        if (id && name) {
          return yian.components[key] || false;
        }
      }
    }
  }]);

  return yian;
}();

src_defineProperty(yian, "components", {});


yian.install = install;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});