(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 587:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__uAgJk",
	"headerContent": "styles_headerContent__h9eUe"
};


/***/ }),

/***/ 3746:
/***/ ((module) => {

// Exports
module.exports = {
	"signInButton": "styles_signInButton__byt5_",
	"closeIcon": "styles_closeIcon__yr0aw"
};


/***/ }),

/***/ 7462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var styles_module = __webpack_require__(587);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: ./src/components/SignInButton/styles.module.scss
var SignInButton_styles_module = __webpack_require__(3746);
var SignInButton_styles_module_default = /*#__PURE__*/__webpack_require__.n(SignInButton_styles_module);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/SignInButton/index.tsx






function SignInButton() {
    const [session] = (0,client_.useSession)();
    return session ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: (SignInButton_styles_module_default()).signInButton,
        onClick: ()=>(0,client_.signOut)(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                width: 35,
                height: 35,
                src: session.user?.image,
                alt: "Foto do usuario"
            }),
            "Ol\xe1 ",
            session.user?.name,
            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiX, {
                color: "#737380",
                className: (SignInButton_styles_module_default()).closeIcon
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: (SignInButton_styles_module_default()).signInButton,
        onClick: ()=>(0,client_.signIn)("github"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                color: "#FFB800"
            }),
            "Entrar com github"
        ]
    });
}

;// CONCATENATED MODULE: ./public/images/logo.jpg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.ffb18ade.jpg","height":320,"width":320,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQX/2gAMAwEAAhADEAAAAJ8VH//EABwQAAIBBQEAAAAAAAAAAAAAAAIDBAABBRNBUv/aAAgBAQABPwCU3BWYQqhvIPW4x5X/xAAZEQABBQAAAAAAAAAAAAAAAAACAAERMpH/2gAIAQIBAT8AIYexav/EABYRAAMAAAAAAAAAAAAAAAAAAAACMv/aAAgBAwEBPwB6P//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Header/index.tsx






function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (styles_module_default()).headerContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (styles_module_default()).headerContent,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            alt: "Logo Meu board"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/board",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Meu board"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "",
                            children: "Sobre"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SignInButton, {})
            ]
        })
    });
}

// EXTERNAL MODULE: external "@paypal/react-paypal-js"
var react_paypal_js_ = __webpack_require__(2929);
// EXTERNAL MODULE: ./src/styles/global.scss
var global = __webpack_require__(7439);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





const initialOptions = {
    "client-id": "AW4FyMyfGAhaGrkqlYdbHc5MkkDg4l50kKHPrB4Jti1LuA7ycJCdVQtKyuSu5eqqW6rEXuKsgAO8RXV5",
    currency: "BRL",
    intent: "capture"
};
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(client_.Provider, {
        session: pageProps.session,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_paypal_js_.PayPalScriptProvider, {
            options: initialOptions,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7439:
/***/ (() => {



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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,676,664], () => (__webpack_exec__(7462)));
module.exports = __webpack_exports__;

})();