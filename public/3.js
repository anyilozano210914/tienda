(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      params: '',
      products: []
    };
  },
  mounted: function mounted() {
    this.getProducts();
    this.params = this.$route.params.id;
  },
  computed: {
    product: function product() {
      var _this = this;

      var product = {};
      this.products.map(function (item) {
        if (item.id == _this.params) {
          product = item;
        }
      });
      console.log(this.param);
      return product;
    }
  },
  methods: {
    getProducts: function getProducts() {
      axios.get('/api/products/getProducts').then(function (res) {
        if (res.data.transaction.status) {
          this.products = res.data.data;
        } else {}
      }.bind(this))["catch"](function (error) {
        console.log(error);
      });
    },
    goToBack: function goToBack() {
      window.location = '/';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductDetail.vue?vue&type=template&id=ea0da476&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductDetail.vue?vue&type=template&id=ea0da476& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { md: "5" } }, [
                _c("img", {
                  staticStyle: { "max-width": "auto", height: "100%" },
                  attrs: { src: _vm.product.img, alt: "" }
                })
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { md: "7" } },
                [
                  _c("h1", [_vm._v(_vm._s(_vm.product.name))]),
                  _vm._v(" "),
                  _c("h3", [_vm._v(_vm._s(_vm.product.description))]),
                  _vm._v(" "),
                  _c("h3", [_vm._v("$ " + _vm._s(_vm.product.price))]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: { click: _vm.goToBack }
                    },
                    [_vm._v("Volver")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ProductDetail.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ProductDetail.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetail_vue_vue_type_template_id_ea0da476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=template&id=ea0da476& */ "./resources/js/components/ProductDetail.vue?vue&type=template&id=ea0da476&");
/* harmony import */ var _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetail_vue_vue_type_template_id_ea0da476___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetail_vue_vue_type_template_id_ea0da476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ProductDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductDetail.vue?vue&type=template&id=ea0da476&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ProductDetail.vue?vue&type=template&id=ea0da476& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_ea0da476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=template&id=ea0da476& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductDetail.vue?vue&type=template&id=ea0da476&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_ea0da476___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_ea0da476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);