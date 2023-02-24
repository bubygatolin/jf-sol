(() => {
var exports = {};
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 6257:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "styles_container__koT0C",
	"vip": "styles_vip__CL8lx"
};


/***/ }),

/***/ 3890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Donate),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/pages/donate/styles.module.scss
var styles_module = __webpack_require__(6257);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: ./src/services/firebaseConnection.ts + 2 modules
var firebaseConnection = __webpack_require__(3648);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@paypal/react-paypal-js"
var react_paypal_js_ = __webpack_require__(2929);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/patro.png
/* harmony default export */ const patro = ({"src":"/_next/static/media/patro.04e92d2d.png","height":874,"width":1372,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAX0lEQVR42mMAATNjE18gngjEEVA+I4iGScoCcQsQGwKxMxDrQMWZYAocgdgGiBmB2BiIlWGaYQr4gJgNiIOAWA+IZYBYDIiFgVgepMALiMOhCnyBOBSIw4A4wMzYJAoAdhkZ3/+nijUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/pages/donate/index.tsx









function Donate({ user  }) {
    const [vip, setVip] = (0,external_react_.useState)(false);
    async function handleSaveDonate() {
        await firebaseConnection/* default.firestore */.Z.firestore().collection("users").doc(user.id).set({
            donate: true,
            lastDonate: new Date(),
            image: user.image
        }).then(()=>{
            setVip(true);
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Ajude a plataforma board ficar online!"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (styles_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: patro,
                        alt: "Seja Apoiador"
                    }),
                    vip && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).vip,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 50,
                                height: 50,
                                src: user.image,
                                alt: "Foto de perfil do usuario"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Parab\xe9ns voc\xea \xe9 um novo apoiador!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Seja um apoiador deste projeto \uD83C\uDFC6"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        children: [
                            "Contribua com apenas ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "R$ 1,00"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: "Apare\xe7a na nossa home, tenha funcionalidades exclusivas."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_paypal_js_.PayPalButtons, {
                        createOrder: (data, actions)=>{
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: "1"
                                        }
                                    }
                                ]
                            });
                        },
                        onApprove: async (data, actions)=>{
                            return await actions.order?.capture().then(function(details) {
                                handleSaveDonate();
                            });
                        }
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async ({ req  })=>{
    const session = await (0,client_.getSession)({
        req
    });
    if (!session?.id) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    const user = {
        nome: session.user?.name,
        id: session.id,
        image: session.user?.image
    };
    return {
        props: {
            user
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

/***/ 2929:
/***/ ((module) => {

"use strict";
module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ 427:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675], () => (__webpack_exec__(3890)));
module.exports = __webpack_exports__;

})();