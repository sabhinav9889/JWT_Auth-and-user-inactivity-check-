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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"(app-client)/./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction DashboardLayout(param) {\n    let { children  } = param;\n    _s();\n    const [isSuccess, setIsSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { push  } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const { user , error  } = await getUser();\n            if (error) {\n                push(\"/\");\n                return;\n            }\n            // if the error did not happen, if everything is alright\n            setIsSuccess(true);\n        })();\n    }, [\n        push\n    ]);\n    if (!isSuccess) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, this);\n    }\n    let inactivityTimeout;\n    const handleLogout = ()=>{\n        // Perform logout or other actions (e.g., redirect to the login page)\n        alert(\"User logged out due to inactivity\"); // Pop up\n        localStorage.removeItem(\"OurSiteJWT\");\n        function deleteCookie(name) {\n            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(null, \"OurSiteJWT\", {\n                path: \"/\"\n            });\n        // document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;\n        }\n        // Example: Assume your JWT token is stored in a cookie named 'jwtToken'\n        deleteCookie(\"OurSiteJWT\");\n    };\n    const resetInactivityTimer = ()=>{\n        clearTimeout(inactivityTimeout);\n        inactivityTimeout = setTimeout(handleLogout, 1 * 10 * 1000); // 10 seconds\n    };\n    const handleUserActivity = ()=>{\n        resetInactivityTimer();\n    };\n    // useEffect(() => {\n    //   // Attach event listeners on component mount\n    // }, []); // Empty dependency array ensures that this effect runs once on mount\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/dashboard\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/dashboard/settings\",\n                        children: \"Settings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abhinav Singh\\\\nextjs-latest-auth\\\\app\\\\dashboard\\\\layout.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardLayout, \"NM4hONCp3QMAeovEOi7ptZZWOB0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DashboardLayout;\nasync function getUser() {\n    try {\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/auth/me\");\n        return {\n            user: data,\n            error: null\n        };\n    } catch (e) {\n        const error = e;\n        return {\n            user: null,\n            error\n        };\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"DashboardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2Rhc2hib2FyZC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMEM7QUFDRTtBQUNBO0FBQ2Y7QUFDVztBQU96QixTQUFTTSxnQkFBZ0IsS0FJdkM7UUFKdUMsRUFDdENDLFNBQVEsRUFHVCxHQUp1Qzs7SUFLdEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU0sRUFBRVMsS0FBSSxFQUFFLEdBQUdQLDBEQUFTQTtJQUUxQkQsZ0RBQVNBLENBQUM7UUFDUDtZQUNDLE1BQU0sRUFBRVMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNQztZQUU5QixJQUFJRCxPQUFPO2dCQUNURixLQUFLO2dCQUNMO1lBQ0Y7WUFFQSx3REFBd0Q7WUFDeERELGFBQWE7UUFDZjtJQUNGLEdBQUc7UUFBQ0M7S0FBSztJQUVULElBQUksQ0FBQ0YsV0FBVztRQUNkLHFCQUFPLDhEQUFDTTtzQkFBRTs7Ozs7O0lBQ1o7SUFDQSxJQUFJQztJQUNKLE1BQU1DLGVBQWU7UUFDbkIscUVBQXFFO1FBQ25FQyxNQUFNLHNDQUF1QyxTQUFTO1FBQ3REQyxhQUFhQyxXQUFXO1FBQ3hCLFNBQVNDLGFBQWFDLElBQWlCO1lBQ3JDaEIsc0RBQWFBLENBQUMsTUFBTSxjQUFjO2dCQUFFaUIsTUFBTTtZQUFJO1FBQzlDLGdGQUFnRjtRQUNsRjtRQUNBLHdFQUF3RTtRQUN4RUYsYUFBYTtJQUNqQjtJQUNBLE1BQU1HLHVCQUF1QjtRQUMzQkMsYUFBYVQ7UUFDYkEsb0JBQW9CVSxXQUFXVCxjQUFjLElBQUksS0FBSyxPQUFPLGFBQWE7SUFDNUU7SUFFQSxNQUFNVSxxQkFBcUI7UUFDekJIO0lBQ0Y7SUFFQSxvQkFBb0I7SUFDcEIsaURBQWlEO0lBRWpELGdGQUFnRjtJQUVoRixxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDQzs7a0NBQ0MsOERBQUN4QixrREFBSUE7d0JBQUN5QixNQUFLO2tDQUFhOzs7Ozs7a0NBR3hCLDhEQUFDekIsa0RBQUlBO3dCQUFDeUIsTUFBSztrQ0FBc0I7Ozs7Ozs7Ozs7OztZQUlsQ3RCOzs7Ozs7O0FBR1A7R0FoRXdCRDs7UUFNTEgsc0RBQVNBOzs7S0FOSkc7QUFrRXhCLGVBQWVPO0lBQ2IsSUFBSTtRQUNGLE1BQU0sRUFBRWlCLEtBQUksRUFBRSxHQUFHLE1BQU05Qiw2Q0FBS0EsQ0FBQytCLElBQUk7UUFFakMsT0FBTztZQUNMcEIsTUFBTW1CO1lBQ05sQixPQUFPO1FBQ1Q7SUFDRixFQUFFLE9BQU9vQixHQUFHO1FBQ1YsTUFBTXBCLFFBQVFvQjtRQUVkLE9BQU87WUFDTHJCLE1BQU07WUFDTkM7UUFDRjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9sYXlvdXQudHN4PzcxZTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcyc7XHJcblxyXG5pbnRlcmZhY2UgVXNlclJlc3BvbnNlIHtcclxuICB1c2VyOiBzdHJpbmcgfCBudWxsO1xyXG4gIGVycm9yOiBBeGlvc0Vycm9yIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkTGF5b3V0KHtcclxuICBjaGlsZHJlbixcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn0pIHtcclxuICBjb25zdCBbaXNTdWNjZXNzLCBzZXRJc1N1Y2Nlc3NdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHVzZXIsIGVycm9yIH0gPSBhd2FpdCBnZXRVc2VyKCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBwdXNoKFwiL1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmIHRoZSBlcnJvciBkaWQgbm90IGhhcHBlbiwgaWYgZXZlcnl0aGluZyBpcyBhbHJpZ2h0XHJcbiAgICAgIHNldElzU3VjY2Vzcyh0cnVlKTtcclxuICAgIH0pKCk7XHJcbiAgfSwgW3B1c2hdKTtcclxuXHJcbiAgaWYgKCFpc1N1Y2Nlc3MpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcbiAgbGV0IGluYWN0aXZpdHlUaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAvLyBQZXJmb3JtIGxvZ291dCBvciBvdGhlciBhY3Rpb25zIChlLmcuLCByZWRpcmVjdCB0byB0aGUgbG9naW4gcGFnZSlcclxuICAgICAgYWxlcnQoJ1VzZXIgbG9nZ2VkIG91dCBkdWUgdG8gaW5hY3Rpdml0eScpOyAgLy8gUG9wIHVwXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdPdXJTaXRlSldUJyk7XHJcbiAgICAgIGZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lOidPdXJTaXRlSldUJykgeyAgXHJcbiAgICAgICAgZGVzdHJveUNvb2tpZShudWxsLCAnT3VyU2l0ZUpXVCcsIHsgcGF0aDogJy8nIH0pO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQzsgcGF0aD0vO2A7XHJcbiAgICAgIH1cclxuICAgICAgLy8gRXhhbXBsZTogQXNzdW1lIHlvdXIgSldUIHRva2VuIGlzIHN0b3JlZCBpbiBhIGNvb2tpZSBuYW1lZCAnand0VG9rZW4nXHJcbiAgICAgIGRlbGV0ZUNvb2tpZSgnT3VyU2l0ZUpXVCcpO1xyXG4gIH07XHJcbiAgY29uc3QgcmVzZXRJbmFjdGl2aXR5VGltZXIgPSAoKSA9PiB7ICAgIFxyXG4gICAgY2xlYXJUaW1lb3V0KGluYWN0aXZpdHlUaW1lb3V0KTtcclxuICAgIGluYWN0aXZpdHlUaW1lb3V0ID0gc2V0VGltZW91dChoYW5kbGVMb2dvdXQsIDEgKiAxMCAqIDEwMDApOyAvLyAxMCBzZWNvbmRzXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXNlckFjdGl2aXR5ID0gKCkgPT4ge1xyXG4gICAgcmVzZXRJbmFjdGl2aXR5VGltZXIoKTtcclxuICB9O1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVycyBvbiBjb21wb25lbnQgbW91bnRcclxuICAgIFxyXG4gIC8vIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSBlbnN1cmVzIHRoYXQgdGhpcyBlZmZlY3QgcnVucyBvbmNlIG9uIG1vdW50XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8TGluayBocmVmPScvZGFzaGJvYXJkJz5cclxuICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPScvZGFzaGJvYXJkL3NldHRpbmdzJz5cclxuICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKTogUHJvbWlzZTxVc2VyUmVzcG9uc2U+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2F1dGgvbWVcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogZGF0YSxcclxuICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnN0IGVycm9yID0gZSBhcyBBeGlvc0Vycm9yO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiZGVzdHJveUNvb2tpZSIsIkRhc2hib2FyZExheW91dCIsImNoaWxkcmVuIiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwicHVzaCIsInVzZXIiLCJlcnJvciIsImdldFVzZXIiLCJwIiwiaW5hY3Rpdml0eVRpbWVvdXQiLCJoYW5kbGVMb2dvdXQiLCJhbGVydCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkZWxldGVDb29raWUiLCJuYW1lIiwicGF0aCIsInJlc2V0SW5hY3Rpdml0eVRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZVVzZXJBY3Rpdml0eSIsIm1haW4iLCJoZWFkZXIiLCJocmVmIiwiZGF0YSIsImdldCIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/dashboard/layout.tsx\n"));

/***/ })

});