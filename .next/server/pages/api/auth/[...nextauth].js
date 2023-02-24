"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 7955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
const providers_namespaceObject = require("next-auth/providers");
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
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

;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts



/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        providers_default().GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: "read:user"
        })
    ],
    callbacks: {
        async session (session, profile) {
            try {
                const lastDonate = await firebaseConnection.firestore().collection("users").doc(String(profile.sub)).get().then((snapshot)=>{
                    if (snapshot.exists) {
                        return snapshot.data().lastDonate.toDate();
                    } else {
                        return null;
                    }
                });
                return {
                    ...session,
                    id: profile.sub,
                    vip: lastDonate ? true : false,
                    lastDonate: lastDonate
                };
            } catch  {
                return {
                    ...session,
                    id: null,
                    vip: false,
                    lastDonate: null
                };
            }
        },
        async signIn (user, account, profile) {
            const { email  } = user;
            try {
                return true;
            } catch (err) {
                console.log("DEU ERRO: ", err);
                return false;
            }
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7955));
module.exports = __webpack_exports__;

})();