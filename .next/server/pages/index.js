(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9325:
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "styles_contentContainer__Wma4i",
	"callToAction": "styles_callToAction__eX3O6",
	"donaters": "styles_donaters__A6z23"
};


/***/ }),

/***/ 9873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/styles/styles.module.scss
var styles_module = __webpack_require__(9325);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./src/services/firebaseConnection.ts + 2 modules
var firebaseConnection = __webpack_require__(3648);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/bord.png
/* harmony default export */ const bord = ({"src":"/_next/static/media/bord.67122989.png","height":475,"width":920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAgklEQVR42mOAAqHp2YGn5sxrNWb4/5/jeG2sfI6NaiMDBNQwuyycbbHixJIWi5ZOb4a26oxTGxbqVlcmHWfQqVCCqGmbWmdRXTvnpwfDpd+Fgv/vlGUvZti4ZmlE/AQthrr2MmaGwiXyob5F4XfULFb+Z2DsuZiW1cWQt0g1K7dHEACcpjBQk+tSFgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./src/pages/index.tsx







function Home({ data  }) {
    const [donaters, setDonaters] = (0,external_react_.useState)(JSON.parse(data));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Board - Organizando suas tarefas."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (styles_module_default()).contentContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: bord,
                        alt: "Ferramenta board"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (styles_module_default()).callToAction,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "INSTITUTO GATOLIN"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "100% Gratuita"
                                    }),
                                    " e online."
                                ]
                            })
                        ]
                    }),
                    donaters.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Apoiadores:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (styles_module_default()).donaters,
                        children: donaters.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 65,
                                height: 65,
                                src: item.image,
                                alt: "Usuarios"
                            }, item.image))
                    })
                ]
            })
        ]
    });
}
const getStaticProps = async ()=>{
    const donaters = await firebaseConnection/* default.firestore */.Z.firestore().collection("users").get();
    const data = JSON.stringify(donaters.docs.map((u)=>{
        return {
            id: u.id,
            ...u.data()
        };
    }));
    return {
        props: {
            data
        },
        revalidate: 60 * 60 // Atualiza a cada 60 minutos.
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

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675], () => (__webpack_exec__(9873)));
module.exports = __webpack_exports__;

})();