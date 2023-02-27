"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/firebaseConnection */ \"(api)/./src/services/firebaseConnection.ts\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            scope: \"read:user\"\n        })\n    ],\n    callbacks: {\n        async session (session, profile) {\n            try {\n                const lastDonate = await _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].firestore().collection(\"users\").doc(String(profile.sub)).get().then((snapshot)=>{\n                    if (snapshot.exists) {\n                        return snapshot.data().lastDonate.toDate();\n                    } else {\n                        return null;\n                    }\n                });\n                return {\n                    ...session,\n                    id: profile.sub,\n                    vip: lastDonate ? true : false,\n                    lastDonate: lastDonate\n                };\n            } catch  {\n                return {\n                    ...session,\n                    id: null,\n                    vip: false,\n                    lastDonate: null\n                };\n            }\n        },\n        async signIn (user, account, profile) {\n            const { email  } = user;\n            try {\n                return true;\n            } catch (err) {\n                console.log(\"DEU ERRO: \", err);\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDVztBQUVnQjtBQUU1RCxpRUFBZUEsZ0RBQVFBLENBQUM7SUFJdEJHLFdBQVc7UUFDVEYsaUVBQWdCLENBQUM7WUFDZkksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxPQUFPO1FBQ1Q7S0FFRDtJQUNEQyxXQUFVO1FBQ1IsTUFBTUMsU0FBUUEsT0FBTyxFQUFFQyxPQUFPLEVBQUM7WUFFN0IsSUFBRztnQkFFRCxNQUFNQyxhQUFhLE1BQU1iLDhFQUFrQixHQUFHZSxVQUFVLENBQUMsU0FDeERDLEdBQUcsQ0FBQ0MsT0FBT0wsUUFBUU0sR0FBRyxHQUN0QkMsR0FBRyxHQUNIQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtvQkFDbEIsSUFBR0EsU0FBU0MsTUFBTSxFQUFDO3dCQUNqQixPQUFPRCxTQUFTRSxJQUFJLEdBQUdWLFVBQVUsQ0FBQ1csTUFBTTtvQkFDMUMsT0FBSzt3QkFDSCxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtnQkFFQSxPQUFNO29CQUNKLEdBQUdiLE9BQU87b0JBQ1ZjLElBQUliLFFBQVFNLEdBQUc7b0JBQ2ZRLEtBQUtiLGFBQWEsSUFBSSxHQUFHLEtBQUs7b0JBQzlCQSxZQUFZQTtnQkFDZDtZQUNGLEVBQUMsT0FBSztnQkFDSixPQUFNO29CQUNKLEdBQUdGLE9BQU87b0JBQ1ZjLElBQUksSUFBSTtvQkFDUkMsS0FBSyxLQUFLO29CQUNWYixZQUFZLElBQUk7Z0JBQ2xCO1lBQ0Y7UUFFRjtRQUNBLE1BQU1jLFFBQU9DLElBQUksRUFBRUMsT0FBTyxFQUFFakIsT0FBTyxFQUFDO1lBQ2xDLE1BQU0sRUFBRWtCLE1BQUssRUFBRSxHQUFHRjtZQUNsQixJQUFHO2dCQUNELE9BQU8sSUFBSTtZQUNiLEVBQUMsT0FBTUcsS0FBSTtnQkFDVEMsUUFBUUMsR0FBRyxDQUFDLGNBQWNGO2dCQUMxQixPQUFPLEtBQUs7WUFDZDtRQUVGO0lBQ0Y7QUFHRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamYtc29sLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJztcclxuXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9maXJlYmFzZUNvbm5lY3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG5cclxuICBcclxuICBcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgc2NvcGU6ICdyZWFkOnVzZXInXHJcbiAgICB9KSxcclxuICAgXHJcbiAgXSxcclxuICBjYWxsYmFja3M6e1xyXG4gICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uLCBwcm9maWxlKXtcclxuXHJcbiAgICAgIHRyeXtcclxuXHJcbiAgICAgICAgY29uc3QgbGFzdERvbmF0ZSA9IGF3YWl0IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3VzZXJzJylcclxuICAgICAgICAuZG9jKFN0cmluZyhwcm9maWxlLnN1YikpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBpZihzbmFwc2hvdC5leGlzdHMpe1xyXG4gICAgICAgICAgICByZXR1cm4gc25hcHNob3QuZGF0YSgpLmxhc3REb25hdGUudG9EYXRlKCk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zZXNzaW9uLFxyXG4gICAgICAgICAgaWQ6IHByb2ZpbGUuc3ViLFxyXG4gICAgICAgICAgdmlwOiBsYXN0RG9uYXRlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgbGFzdERvbmF0ZTogbGFzdERvbmF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgfWNhdGNoe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgIC4uLnNlc3Npb24sXHJcbiAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgIHZpcDogZmFsc2UsXHJcbiAgICAgICAgICBsYXN0RG9uYXRlOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlKXtcclxuICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlcjtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnREVVIEVSUk86ICcsIGVycik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsImZpcmViYXNlIiwicHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwicHJvZmlsZSIsImxhc3REb25hdGUiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiU3RyaW5nIiwic3ViIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiZXhpc3RzIiwiZGF0YSIsInRvRGF0ZSIsImlkIiwidmlwIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJlbWFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/firebaseConnection.ts":
/*!********************************************!*\
  !*** ./src/services/firebaseConnection.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet firebaseConfig = {\n    apiKey: \"AIzaSyBHfB9adSgkTFsrXbgH_bdtNZW_HM61U2c\",\n    authDomain: \"jf-sol.firebaseapp.com\",\n    projectId: \"jf-sol\",\n    storageBucket: \"jf-sol.appspot.com\",\n    messagingSenderId: \"337441756696\",\n    appId: \"1:337441756696:web:33aa39398047f538c4d56d\",\n    measurementId: \"G-1JPE1SNRWY\"\n};\n// Initialize Firebase\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_app__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmlyZWJhc2VDb25uZWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ1I7QUFFNUIsSUFBSUMsaUJBQWlCO0lBQ2xCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2xCO0FBQ0Esc0JBQXNCO0FBQ3RCLElBQUcsQ0FBQ1IsaUVBQW9CLEVBQUM7SUFDdkJBLGlFQUFzQixDQUFDQztBQUN6QixDQUFDO0FBRUQsaUVBQWVELHFEQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamYtc29sLy4vc3JjL3NlcnZpY2VzL2ZpcmViYXNlQ29ubmVjdGlvbi50cz9iZTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5sZXQgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgIGFwaUtleTogXCJBSXphU3lCSGZCOWFkU2drVEZzclhiZ0hfYmR0TlpXX0hNNjFVMmNcIixcclxuICAgYXV0aERvbWFpbjogXCJqZi1zb2wuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgIHByb2plY3RJZDogXCJqZi1zb2xcIixcclxuICAgc3RvcmFnZUJ1Y2tldDogXCJqZi1zb2wuYXBwc3BvdC5jb21cIixcclxuICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzM3NDQxNzU2Njk2XCIsXHJcbiAgIGFwcElkOiBcIjE6MzM3NDQxNzU2Njk2OndlYjozM2FhMzkzOTgwNDdmNTM4YzRkNTZkXCIsXHJcbiAgIG1lYXN1cmVtZW50SWQ6IFwiRy0xSlBFMVNOUldZXCJcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5pZighZmlyZWJhc2UuYXBwcy5sZW5ndGgpe1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcclxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/services/firebaseConnection.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();