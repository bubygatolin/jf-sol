(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 2341:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "task_container__Krx06",
	"actions": "task_actions__WSXwN"
};


/***/ }),

/***/ 5626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3648);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _task_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2341);
/* harmony import */ var _task_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_task_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);







function Task({ data  }) {
    const task = JSON.parse(data);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Detalhes da Tarefa"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                    className: (_task_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_task_module_scss__WEBPACK_IMPORTED_MODULE_6___default().actions),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiCalendar, {
                                        size: 30,
                                        color: "#fff"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Tarefa criada:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                        children: task.createdFormated
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: task.tarefa
                        })
                    ]
                })
            ]
        })
    });
}
const getServerSideProps = async ({ req , params  })=>{
    const { id  } = params;
    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (!session?.vip) {
        return {
            redirect: {
                destination: "/board",
                permanent: false
            }
        };
    }
    const data = await _services_firebaseConnection__WEBPACK_IMPORTED_MODULE_2__/* ["default"].firestore */ .Z.firestore().collection("tarefas").doc(String(id)).get().then((snapshot)=>{
        const data = {
            id: snapshot.id,
            created: snapshot.data().created,
            createdFormated: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(snapshot.data().created.toDate(), "dd MMMM yyyy"),
            tarefa: snapshot.data().tarefa,
            userId: snapshot.data().userId,
            nome: snapshot.data().nome
        };
        return JSON.stringify(data);
    }).catch(()=>{
        return {};
    });
    if (Object.keys(data).length === 0) {
        return {
            redirect: {
                destination: "/board",
                permanent: false
            }
        };
    }
    return {
        props: {
            data
        }
    };
};


/***/ }),

/***/ 3648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ firebaseConnection)
});

;// CONCATENATED MODULE: external "firebase/app"
const app_namespaceObject = require("firebase/app");
var app_default = /*#__PURE__*/__webpack_require__.n(app_namespaceObject);
;// CONCATENATED MODULE: external "firebase/firestore"
const firestore_namespaceObject = require("firebase/firestore");
;// CONCATENATED MODULE: ./src/services/firebaseConnection.ts


let firebaseConfig = {
    apiKey: "AIzaSyBHfB9adSgkTFsrXbgH_bdtNZW_HM61U2c",
    authDomain: "jf-sol.firebaseapp.com",
    projectId: "jf-sol",
    storageBucket: "jf-sol.appspot.com",
    messagingSenderId: "337441756696",
    appId: "1:337441756696:web:33aa39398047f538c4d56d",
    measurementId: "G-1JPE1SNRWY"
};
// Initialize Firebase
if (!(app_default()).apps.length) {
    app_default().initializeApp(firebaseConfig);
}
/* harmony default export */ const firebaseConnection = ((app_default()));


/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 427:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5626));
module.exports = __webpack_exports__;

})();