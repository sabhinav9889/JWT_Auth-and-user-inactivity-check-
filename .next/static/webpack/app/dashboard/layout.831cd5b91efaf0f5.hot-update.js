"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-client)/./app/dashboard/layout.tsx":
/*!**********************************!*\
  !*** ./app/dashboard/layout.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"(app-client)/./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DashboardLayout(param) {\n    let { children  } = param;\n    _s();\n    const [isSuccess, setIsSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { push  } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const { user , error  } = await getUser();\n            if (error) {\n                push(\"/\");\n                return;\n            }\n            // if the error did not happen, if everything is alright\n            setIsSuccess(true);\n        })();\n        document.addEventListener(\"mousemove\", handleUserActivity);\n        document.addEventListener(\"click\", handleUserActivity);\n        document.addEventListener(\"onmouseover\", handleUserActivity);\n        // Initialize the inactivity timer on component mount\n        resetInactivityTimer();\n        // Detach event listeners on component unmount\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleUserActivity);\n            document.removeEventListener(\"click\", handleUserActivity);\n            document.removeEventListener(\"keypress\", handleUserActivity);\n            document.removeEventListener(\"hover\", handleUserActivity);\n        };\n    }, [\n        push\n    ]);\n    if (!isSuccess) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, this);\n    }\n    let inactivityTimeout;\n    const handleLogout = ()=>{\n        // Perform logout or other actions (e.g., redirect to the login page)\n        alert(\"User logged out due to inactivity\"); // Pop up\n        localStorage.removeItem(\"OurSiteJWT\");\n        function deleteCookie(name) {\n            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(null, \"OurSiteJWT\", {\n                path: \"/\"\n            });\n        // document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;\n        }\n        // Example: Assume your JWT token is stored in a cookie named 'jwtToken'\n        deleteCookie(\"OurSiteJWT\");\n    };\n    const resetInactivityTimer = ()=>{\n        clearTimeout(inactivityTimeout);\n        inactivityTimeout = setTimeout(handleLogout, 1 * 10 * 1000); // 10 seconds\n    };\n    const handleUserActivity = ()=>{\n        resetInactivityTimer();\n    };\n    // useEffect(() => {\n    //   // Attach event listeners on component mount\n    // }, []); // Empty dependency array ensures that this effect runs once on mount\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/dashboard\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/dashboard/settings\",\n                        children: \"Settings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardLayout, \"NM4hONCp3QMAeovEOi7ptZZWOB0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DashboardLayout;\nasync function getUser() {\n    try {\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/auth/me\");\n        return {\n            user: data,\n            error: null\n        };\n    } catch (e) {\n        const error = e;\n        return {\n            user: null,\n            error\n        };\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2Rhc2hib2FyZC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMEM7QUFDRTtBQUNBO0FBQ2Y7QUFDVztBQU96QixTQUFTTSxnQkFBZ0IsS0FJdkM7UUFKdUMsRUFDdENDLFNBQVEsRUFHVCxHQUp1Qzs7SUFLdEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU0sRUFBRVMsS0FBSSxFQUFFLEdBQUdQLDBEQUFTQTtJQUUxQkQsZ0RBQVNBLENBQUM7UUFDUDtZQUNDLE1BQU0sRUFBRVMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNQztZQUU5QixJQUFJRCxPQUFPO2dCQUNURixLQUFLO2dCQUNMO1lBQ0Y7WUFFQSx3REFBd0Q7WUFDeERELGFBQWE7UUFDZjtRQUNBSyxTQUFTQyxpQkFBaUIsYUFBYUM7UUFDdkNGLFNBQVNDLGlCQUFpQixTQUFTQztRQUNuQ0YsU0FBU0MsaUJBQWlCLGVBQWVDO1FBRXpDLHFEQUFxRDtRQUNyREM7UUFFQSw4Q0FBOEM7UUFDOUMsT0FBTztZQUNMSCxTQUFTSSxvQkFBb0IsYUFBYUY7WUFDMUNGLFNBQVNJLG9CQUFvQixTQUFTRjtZQUN0Q0YsU0FBU0ksb0JBQW9CLFlBQVlGO1lBQ3pDRixTQUFTSSxvQkFBb0IsU0FBU0Y7UUFDeEM7SUFDRixHQUFHO1FBQUNOO0tBQUs7SUFFVCxJQUFJLENBQUNGLFdBQVc7UUFDZCxxQkFBTyw4REFBQ1c7c0JBQUU7Ozs7OztJQUNaO0lBQ0EsSUFBSUM7SUFDSixNQUFNQyxlQUFlO1FBQ25CLHFFQUFxRTtRQUNuRUMsTUFBTSxzQ0FBdUMsU0FBUztRQUN0REMsYUFBYUMsV0FBVztRQUN4QixTQUFTQyxhQUFhQyxJQUFpQjtZQUNyQ3JCLHNEQUFhQSxDQUFDLE1BQU0sY0FBYztnQkFBRXNCLE1BQU07WUFBSTtRQUM5QyxnRkFBZ0Y7UUFDbEY7UUFDQSx3RUFBd0U7UUFDeEVGLGFBQWE7SUFDakI7SUFDQSxNQUFNUix1QkFBdUI7UUFDM0JXLGFBQWFSO1FBQ2JBLG9CQUFvQlMsV0FBV1IsY0FBYyxJQUFJLEtBQUssT0FBTyxhQUFhO0lBQzVFO0lBRUEsTUFBTUwscUJBQXFCO1FBQ3pCQztJQUNGO0lBRUEsb0JBQW9CO0lBQ3BCLGlEQUFpRDtJQUVqRCxnRkFBZ0Y7SUFFaEYscUJBQ0UsOERBQUNhOzswQkFDQyw4REFBQ0M7O2tDQUNDLDhEQUFDM0Isa0RBQUlBO3dCQUFDNEIsTUFBSztrQ0FBYTs7Ozs7O2tDQUd4Qiw4REFBQzVCLGtEQUFJQTt3QkFBQzRCLE1BQUs7a0NBQXNCOzs7Ozs7Ozs7Ozs7WUFJbEN6Qjs7Ozs7OztBQUdQO0dBOUV3QkQ7O1FBTUxILHNEQUFTQTs7O0tBTkpHO0FBZ0Z4QixlQUFlTztJQUNiLElBQUk7UUFDRixNQUFNLEVBQUVvQixLQUFJLEVBQUUsR0FBRyxNQUFNakMsNkNBQUtBLENBQUNrQyxJQUFJO1FBRWpDLE9BQU87WUFDTHZCLE1BQU1zQjtZQUNOckIsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPdUIsR0FBRztRQUNWLE1BQU12QixRQUFRdUI7UUFFZCxPQUFPO1lBQ0x4QixNQUFNO1lBQ05DO1FBQ0Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvbGF5b3V0LnRzeD83MWU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJSZXNwb25zZSB7XHJcbiAgdXNlcjogc3RyaW5nIHwgbnVsbDtcclxuICBlcnJvcjogQXhpb3NFcnJvciB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZExheW91dCh7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSB7XHJcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0SXNTdWNjZXNzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyB1c2VyLCBlcnJvciB9ID0gYXdhaXQgZ2V0VXNlcigpO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcHVzaChcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiB0aGUgZXJyb3IgZGlkIG5vdCBoYXBwZW4sIGlmIGV2ZXJ5dGhpbmcgaXMgYWxyaWdodFxyXG4gICAgICBzZXRJc1N1Y2Nlc3ModHJ1ZSk7XHJcbiAgICB9KSgpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlVXNlckFjdGl2aXR5KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVXNlckFjdGl2aXR5KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29ubW91c2VvdmVyJywgaGFuZGxlVXNlckFjdGl2aXR5KTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHRoZSBpbmFjdGl2aXR5IHRpbWVyIG9uIGNvbXBvbmVudCBtb3VudFxyXG4gICAgcmVzZXRJbmFjdGl2aXR5VGltZXIoKTtcclxuXHJcbiAgICAvLyBEZXRhY2ggZXZlbnQgbGlzdGVuZXJzIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVVc2VyQWN0aXZpdHkpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVVzZXJBY3Rpdml0eSk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgaGFuZGxlVXNlckFjdGl2aXR5KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaG92ZXInLCBoYW5kbGVVc2VyQWN0aXZpdHkpO1xyXG4gICAgfTtcclxuICB9LCBbcHVzaF0pO1xyXG5cclxuICBpZiAoIWlzU3VjY2Vzcykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuICBsZXQgaW5hY3Rpdml0eVRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIC8vIFBlcmZvcm0gbG9nb3V0IG9yIG90aGVyIGFjdGlvbnMgKGUuZy4sIHJlZGlyZWN0IHRvIHRoZSBsb2dpbiBwYWdlKVxyXG4gICAgICBhbGVydCgnVXNlciBsb2dnZWQgb3V0IGR1ZSB0byBpbmFjdGl2aXR5Jyk7ICAvLyBQb3AgdXBcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ091clNpdGVKV1QnKTtcclxuICAgICAgZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWU6J091clNpdGVKV1QnKSB7ICBcclxuICAgICAgICBkZXN0cm95Q29va2llKG51bGwsICdPdXJTaXRlSldUJywgeyBwYXRoOiAnLycgfSk7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDOyBwYXRoPS87YDtcclxuICAgICAgfVxyXG4gICAgICAvLyBFeGFtcGxlOiBBc3N1bWUgeW91ciBKV1QgdG9rZW4gaXMgc3RvcmVkIGluIGEgY29va2llIG5hbWVkICdqd3RUb2tlbidcclxuICAgICAgZGVsZXRlQ29va2llKCdPdXJTaXRlSldUJyk7XHJcbiAgfTtcclxuICBjb25zdCByZXNldEluYWN0aXZpdHlUaW1lciA9ICgpID0+IHsgICAgXHJcbiAgICBjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVvdXQpO1xyXG4gICAgaW5hY3Rpdml0eVRpbWVvdXQgPSBzZXRUaW1lb3V0KGhhbmRsZUxvZ291dCwgMSAqIDEwICogMTAwMCk7IC8vIDEwIHNlY29uZHNcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVc2VyQWN0aXZpdHkgPSAoKSA9PiB7XHJcbiAgICByZXNldEluYWN0aXZpdHlUaW1lcigpO1xyXG4gIH07XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIG9uIGNvbXBvbmVudCBtb3VudFxyXG4gICAgXHJcbiAgLy8gfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IGVuc3VyZXMgdGhhdCB0aGlzIGVmZmVjdCBydW5zIG9uY2Ugb24gbW91bnRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQnPlxyXG4gICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQvc2V0dGluZ3MnPlxyXG4gICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcigpOiBQcm9taXNlPFVzZXJSZXNwb25zZT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvYXV0aC9tZVwiKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiBkYXRhLFxyXG4gICAgICBlcnJvcjogbnVsbCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBlIGFzIEF4aW9zRXJyb3I7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgZXJyb3IsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJkZXN0cm95Q29va2llIiwiRGFzaGJvYXJkTGF5b3V0IiwiY2hpbGRyZW4iLCJpc1N1Y2Nlc3MiLCJzZXRJc1N1Y2Nlc3MiLCJwdXNoIiwidXNlciIsImVycm9yIiwiZ2V0VXNlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVVzZXJBY3Rpdml0eSIsInJlc2V0SW5hY3Rpdml0eVRpbWVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInAiLCJpbmFjdGl2aXR5VGltZW91dCIsImhhbmRsZUxvZ291dCIsImFsZXJ0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImRlbGV0ZUNvb2tpZSIsIm5hbWUiLCJwYXRoIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm1haW4iLCJoZWFkZXIiLCJocmVmIiwiZGF0YSIsImdldCIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/dashboard/layout.tsx\n"));

/***/ })

});