(()=>{var __webpack_modules__={"./src/app/app.routing.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glob */ "glob");\n/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(glob__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");\n\n\n\nclass Router {\n    constructor() {\n        this.path = \'/api\';\n        this.router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\n        this.intializeRoutes();\n    }\n    intializeRoutes() {\n        glob__WEBPACK_IMPORTED_MODULE_1__.sync(\'./**/*.routing.ts\', {\n            ignore: \'./app.routing.ts\',\n            cwd: \'./src/app\'\n        })\n            .forEach(async (file) => {\n            const route = (await __webpack_require__("./src/app lazy recursive ^.*$")(`${file}`)).default;\n            const path = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].setUrlRoute(this.path, file);\n            this.router.use(path, route);\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Router().router);\n\n\n//# sourceURL=webpack://typescript-first-app/./src/app/app.routing.ts?')},"./src/bin/www.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_winston_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/winston-logger */ \"./src/utils/winston-logger.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n\n\n\nconst server = http__WEBPACK_IMPORTED_MODULE_0__.createServer(_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconst normalizePort = (val) => {\n    const normolizedPort = (typeof val === 'string') ? parseInt(val, 10) : val;\n    if (isNaN(normolizedPort)) {\n        return val;\n    }\n    if (normolizedPort >= 0) {\n        return normolizedPort;\n    }\n    return false;\n};\nconst port = normalizePort(process.env.PORT || 3000);\n_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set('port', port);\nconst onError = (error) => {\n    if (error.syscall !== 'listen') {\n        throw error;\n    }\n    const bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;\n    switch (error.code) {\n        case 'EACCES':\n            _utils_winston_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(`${bind} requires elevated privileges`);\n            process.exit(1);\n            break;\n        case 'EADDRINUSE':\n            _utils_winston_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(`${bind} is already in use`);\n            process.exit(1);\n            break;\n        default:\n            throw error;\n    }\n};\nconst onListening = () => {\n    const addr = server.address();\n    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr?.port}`;\n    _utils_winston_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info(`Listening on ${bind}`);\n};\nserver.listen(port);\nserver.on('error', onError);\nserver.on('listening', onListening);\n\n\n//# sourceURL=webpack://typescript-first-app/./src/bin/www.ts?")},"./src/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ "body-parser");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.routing */ "./src/app/app.routing.ts");\n\n\n\n// Creates and configures an ExpressJS web server.\nclass App {\n    // Run configuration methods on the Express instance.\n    constructor() {\n        this.express = express__WEBPACK_IMPORTED_MODULE_1__();\n        this.middleware();\n        this.routes();\n    }\n    // Configure Express middleware.\n    middleware() {\n        this.express.use(body_parser__WEBPACK_IMPORTED_MODULE_0__.json());\n        this.express.use(body_parser__WEBPACK_IMPORTED_MODULE_0__.urlencoded({ extended: false }));\n    }\n    // Configure API endpoints.\n    routes() {\n        /* This is just to get up and running, and to make sure what we\'ve got is\n         * working so far. This function will change when we start to add more\n         * API endpoints */\n        // sample route in App\n        this.express.get(\'/\', (req, res, next) => {\n            res.json({\n                message: \'Hello World!\'\n            });\n        });\n        this.express.use(_app_app_routing__WEBPACK_IMPORTED_MODULE_2__["default"]);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App().express);\n\n\n//# sourceURL=webpack://typescript-first-app/./src/index.ts?')},"./src/utils/utils.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Utils {\n    setUrlRoute(basePath, subPath) {\n        // if (!subPath) {\n        //   throw new Error(\'Subpath cannot null!\');\n        // } else {/\n        return `${basePath}${/\\/[^\\/]*.*\\.*\\//.exec(subPath)[0]}`;\n        // }\n    }\n    getLastDirectory(currentDirectory) {\n        return path__WEBPACK_IMPORTED_MODULE_0__.basename(path__WEBPACK_IMPORTED_MODULE_0__.resolve(currentDirectory));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Utils());\n\n\n//# sourceURL=webpack://typescript-first-app/./src/utils/utils.ts?')},"./src/utils/winston-logger.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { createLogger, transports } = __webpack_require__(/*! winston */ \"winston\");\nconst defaultLevel = process.env.LOG_LEVEL || 'info';\nconst options = {\n    exitOnError: false,\n    level: defaultLevel\n};\nconst logger = new createLogger(options);\nif (true) {\n    logger.add(new transports.Console({\n        colorize: true,\n        showLevel: true,\n        timestamp: true,\n        level: 'debug'\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);\n\n\n//# sourceURL=webpack://typescript-first-app/./src/utils/winston-logger.ts?")},"./src/app lazy recursive ^.*$"(module,__unused_webpack_exports,__webpack_require__){eval('var map = {\n	"./app.routing": [\n		"./src/app/app.routing.ts",\n		9\n	],\n	"./app.routing.ts": [\n		"./src/app/app.routing.ts",\n		9\n	],\n	"./products/product.controller": [\n		"./src/app/products/product.controller.ts",\n		9,\n		"src_app_products_product_controller_ts"\n	],\n	"./products/product.controller.spec": [\n		"./src/app/products/product.controller.spec.ts",\n		9,\n		"src_app_products_product_controller_spec_ts"\n	],\n	"./products/product.controller.spec.ts": [\n		"./src/app/products/product.controller.spec.ts",\n		9,\n		"src_app_products_product_controller_spec_ts"\n	],\n	"./products/product.controller.ts": [\n		"./src/app/products/product.controller.ts",\n		9,\n		"src_app_products_product_controller_ts"\n	],\n	"./products/product.routing": [\n		"./src/app/products/product.routing.ts",\n		9,\n		"src_app_products_product_routing_ts"\n	],\n	"./products/product.routing.ts": [\n		"./src/app/products/product.routing.ts",\n		9,\n		"src_app_products_product_routing_ts"\n	],\n	"./products/product.service": [\n		"./src/app/products/product.service.ts",\n		7,\n		"src_app_products_product_service_ts"\n	],\n	"./products/product.service.ts": [\n		"./src/app/products/product.service.ts",\n		7,\n		"src_app_products_product_service_ts"\n	]\n};\nfunction webpackAsyncContext(req) {\n	if(!__webpack_require__.o(map, req)) {\n		return Promise.resolve().then(() => {\n			var e = new Error("Cannot find module \'" + req + "\'");\n			e.code = \'MODULE_NOT_FOUND\';\n			throw e;\n		});\n	}\n\n	var ids = map[req], id = ids[0];\n	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(() => {\n		return __webpack_require__.t(id, ids[1] | 16)\n	});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = "./src/app lazy recursive ^.*$";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://typescript-first-app/./src/app/_lazy_^.*$_namespace_object?')},"body-parser"(a){"use strict";a.exports=require("body-parser")},chai(a){"use strict";a.exports=require("chai")},express(a){"use strict";a.exports=require("express")},glob(a){"use strict";a.exports=require("glob")},mocha(a){"use strict";a.exports=require("mocha")},supertest(a){"use strict";a.exports=require("supertest")},winston(a){"use strict";a.exports=require("winston")},http(a){"use strict";a.exports=require("http")},path(a){"use strict";a.exports=require("path")}},__webpack_module_cache__={};function __webpack_require__(a){var b=__webpack_module_cache__[a];if(void 0!==b)return b.exports;var c=__webpack_module_cache__[a]={exports:{}};return __webpack_modules__[a](c,c.exports,__webpack_require__),c.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=a=>{var b=a&&a.__esModule?()=>a.default:()=>a;return __webpack_require__.d(b,{a:b}),b},(()=>{var a,b=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__;__webpack_require__.t=function(c,d){if(1&d&&(c=this(c)),8&d||"object"==typeof c&&c&&(4&d&&c.__esModule||16&d&&"function"==typeof c.then))return c;var e=Object.create(null);__webpack_require__.r(e);var f={};a=a||[null,b({}),b([]),b(b)];for(var g=2&d&&c;"object"==typeof g&&!~a.indexOf(g);g=b(g))Object.getOwnPropertyNames(g).forEach(a=>f[a]=()=>c[a]);return f.default=()=>c,__webpack_require__.d(e,f),e}})(),__webpack_require__.d=(a,b)=>{for(var c in b)__webpack_require__.o(b,c)&&!__webpack_require__.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:b[c]})},__webpack_require__.f={},__webpack_require__.e=a=>Promise.all(Object.keys(__webpack_require__.f).reduce((b,c)=>(__webpack_require__.f[c](a,b),b),[])),__webpack_require__.u=a=>""+a+".bundle.js",__webpack_require__.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b),__webpack_require__.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},(()=>{var a={main:1},b=b=>{var c=b.modules,d=b.ids,e=b.runtime;for(var f in c)__webpack_require__.o(c,f)&&(__webpack_require__.m[f]=c[f]);e&&e(__webpack_require__);for(var g=0;g<d.length;g++)a[d[g]]=1};__webpack_require__.f.require=(c,d)=>{a[c]||b(require("./"+__webpack_require__.u(c)))}})();var __webpack_exports__=__webpack_require__("./src/bin/www.ts")})()