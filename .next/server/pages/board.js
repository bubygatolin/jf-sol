(() => {
var exports = {};
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 660:
/***/ ((module) => {

// Exports
module.exports = {
	"doanteContainer": "styles_doanteContainer__HBG4R"
};


/***/ }),

/***/ 4609:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__0r8t5",
	"warnText": "styles_warnText__1TfoD",
	"taskList": "styles_taskList__1WMLz",
	"actions": "styles_actions__vdumB",
	"vipContainer": "styles_vipContainer__nv9ZZ"
};


/***/ }),

/***/ 4980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Board),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/pages/board/styles.module.scss
var styles_module = __webpack_require__(4609);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./src/components/SupportButton/styles.module.scss
var SupportButton_styles_module = __webpack_require__(660);
var SupportButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(SupportButton_styles_module);
;// CONCATENATED MODULE: ./src/components/SupportButton/index.tsx



function SupportButton() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (SupportButton_styles_module_default()).doanteContainer,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/donate",
            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                children: "Apoiar"
            })
        })
    });
}

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
;// CONCATENATED MODULE: external "date-fns/locale"
const locale_namespaceObject = require("date-fns/locale");
// EXTERNAL MODULE: ./src/services/firebaseConnection.ts + 2 modules
var firebaseConnection = __webpack_require__(3648);
;// CONCATENATED MODULE: ./src/pages/board/index.tsx











function Board({ user , data  }) {
    const [input, setInput] = (0,external_react_.useState)("");
    const [taskList, setTaskList] = (0,external_react_.useState)(JSON.parse(data));
    const [taskEdit, setTaskEdit] = (0,external_react_.useState)(null);
    async function handleAddTask(e) {
        e.preventDefault();
        if (input === "") {
            alert("Preencha alguma tarefa!");
            return;
        }
        if (taskEdit) {
            await firebaseConnection/* default.firestore */.Z.firestore().collection("tarefas").doc(taskEdit.id).update({
                tarefa: input
            }).then(()=>{
                let data = taskList;
                let taskIndex = taskList.findIndex((item)=>item.id === taskEdit.id);
                data[taskIndex].tarefa = input;
                setTaskList(data);
                setTaskEdit(null);
                setInput("");
            });
            return;
        }
        await firebaseConnection/* default.firestore */.Z.firestore().collection("tarefas").add({
            created: new Date(),
            tarefa: input,
            userId: user.id,
            nome: user.nome
        }).then((doc)=>{
            console.log("CADASTRADO COM SUCESSO!");
            let data = {
                id: doc.id,
                created: new Date(),
                createdFormated: (0,external_date_fns_.format)(new Date(), "dd MMMM yyyy"),
                tarefa: input,
                userId: user.id,
                nome: user.nome
            };
            setTaskList([
                ...taskList,
                data
            ]);
            setInput("");
        }).catch((err)=>{
            console.log("ERRO AO CADASTRAR: ", err);
        });
    }
    async function handleDelete(id) {
        await firebaseConnection/* default.firestore */.Z.firestore().collection("tarefas").doc(id).delete().then(()=>{
            let taskDeleted = taskList.filter((item)=>{
                return item.id != id;
            });
            setTaskList(taskDeleted);
        }).catch((err)=>{
            console.log(err);
        });
    }
    function handleEditTask(task) {
        setTaskEdit(task);
        setInput(task.tarefa);
    }
    function handleCancelEdit() {
        setInput("");
        setTaskEdit(null);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Minhas tarefas - Board"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (styles_module_default()).container,
                children: [
                    taskEdit && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (styles_module_default()).warnText,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: handleCancelEdit,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiX, {
                                    size: 30,
                                    color: "#ff3636"
                                })
                            }),
                            "Voc\xea est\xe1 editando uma tarefa!"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: handleAddTask,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                placeholder: "Digite sua tarefa...",
                                value: input,
                                onChange: (e)=>setInput(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiPlus, {
                                    size: 25,
                                    color: "#17181f"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        children: [
                            "Voc\xea tem ",
                            taskList.length,
                            " ",
                            taskList.length === 1 ? "Tarefa" : "Tarefas",
                            "!"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        children: taskList.map((task)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                className: (styles_module_default()).taskList,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/board/${task.id}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: task.tarefa
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (styles_module_default()).actions,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiCalendar, {
                                                                size: 20,
                                                                color: "#FFB800"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                                children: task.createdFormated
                                                            })
                                                        ]
                                                    }),
                                                    user.vip && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        onClick: ()=>handleEditTask(task),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiEdit2, {
                                                                size: 20,
                                                                color: "#FFF"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Editar"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                onClick: ()=>handleDelete(task.id),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiTrash, {
                                                        size: 20,
                                                        color: "#FF3636"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Excluir"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, task.id))
                    })
                ]
            }),
            user.vip && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).vipContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Obrigado por apoiar esse projeto."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiClock, {
                                size: 28,
                                color: "#FFF"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("time", {
                                children: [
                                    "\xdaltima doa\xe7\xe3o foi ",
                                    (0,external_date_fns_.formatDistance)(new Date(user.lastDonate), new Date(), {
                                        locale: locale_namespaceObject.ptBR
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SupportButton, {})
        ]
    });
}
const getServerSideProps = async ({ req  })=>{
    const session = await (0,client_.getSession)({
        req
    });
    if (!session?.id) {
        //Se o user nao tiver logado vamos redirecionar.
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    const tasks = await firebaseConnection/* default.firestore */.Z.firestore().collection("tarefas").where("userId", "==", session?.id).orderBy("created", "asc").get();
    const data = JSON.stringify(tasks.docs.map((u)=>{
        return {
            id: u.id,
            createdFormated: (0,external_date_fns_.format)(u.data().created.toDate(), "dd MMMM yyyy"),
            ...u.data()
        };
    }));
    const user = {
        nome: session.user?.name,
        id: session?.id,
        vip: session?.vip,
        lastDonate: session?.lastDonate
    };
    return {
        props: {
            user,
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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(4980)));
module.exports = __webpack_exports__;

})();