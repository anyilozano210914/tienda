(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProduct.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditProduct.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
      name: '',
      description: '',
      img: '',
      price: '',
      notification: false,
      message: '',
      color: '',
      timeout: 6000,
      products: []
    };
  },
  mounted: function mounted() {
    this.getProducts();
    this.param = this.$route.params.id;
  },
  computed: {
    product: function product() {
      var _this = this;

      var product = {};
      this.products.map(function (item) {
        if (item.id == _this.param) {
          product = item;
        }
      });
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
      this.$router.push('/');
    },
    EditProduct: function EditProduct() {
      var _this2 = this;

      if (!this.product.name) {
        this.notification = true;
        this.message = 'No has introcido el nombre del producto';
        this.color = 'error';
      } else if (!this.product.description) {
        this.notification = true;
        this.message = 'No has introcido la descripcion del producto';
        this.color = 'error';
      } else if (!this.product.img) {
        this.notification = true;
        this.message = 'No has introcido la imagen  del producto';
        this.color = 'error';
      } else if (!this.product.price) {
        this.notification = true;
        this.message = 'No has introcido el precio del producto';
        this.color = 'error';
      } else {
        var data = {
          id: this.product.id,
          name: this.product.name,
          description: this.product.description,
          img: this.product.img,
          price: this.product.price
        };
        axios.post('/api/products/EditProduct', data).then(function (response) {
          if (response.data.transaction.status == true) {
            _this2.notification = true;
            _this2.message = response.data.data[0];
            _this2.color = 'success';
            window.location = '/';
          } else {
            _this2.notification = true;
            _this2.message = 'No se proceso exitosamente el registro';
            _this2.color = 'error';
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProduct.vue?vue&type=template&id=18e6b02c&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditProduct.vue?vue&type=template&id=18e6b02c& ***!
  \**************************************************************************************************************************************************************************************************************/
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
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": true },
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c("v-text-field", {
                attrs: { label: "Nombre producto" },
                model: {
                  value: _vm.product.name,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "name", $$v)
                  },
                  expression: "product.name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Descripción" },
                model: {
                  value: _vm.product.description,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "description", $$v)
                  },
                  expression: "product.description"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Imagen" },
                model: {
                  value: _vm.product.img,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "img", $$v)
                  },
                  expression: "product.img"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Precio", type: "number" },
                model: {
                  value: _vm.product.price,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "price", $$v)
                  },
                  expression: "product.price"
                }
              }),
              _vm._v(" "),
              _c("v-btn", { on: { click: _vm.goToBack } }, [_vm._v("Volver")]),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.EditProduct } },
                [_vm._v("Editar")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: { timeout: _vm.timeout, top: true, right: true },
              scopedSlots: _vm._u([
                {
                  key: "action",
                  fn: function(ref) {
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._b(
                          {
                            attrs: { color: "blue", text: "" },
                            on: {
                              click: function($event) {
                                _vm.notification = false
                              }
                            }
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        [_vm._v("\n                x\n            ")]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.notification,
                callback: function($$v) {
                  _vm.notification = $$v
                },
                expression: "notification"
              }
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.message) + "\n\n            "
              )
            ]
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

/***/ "./resources/js/components/EditProduct.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/EditProduct.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProduct_vue_vue_type_template_id_18e6b02c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=template&id=18e6b02c& */ "./resources/js/components/EditProduct.vue?vue&type=template&id=18e6b02c&");
/* harmony import */ var _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/EditProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProduct_vue_vue_type_template_id_18e6b02c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProduct_vue_vue_type_template_id_18e6b02c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditProduct.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/EditProduct.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditProduct.vue?vue&type=template&id=18e6b02c&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/EditProduct.vue?vue&type=template&id=18e6b02c& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_18e6b02c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditProduct.vue?vue&type=template&id=18e6b02c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditProduct.vue?vue&type=template&id=18e6b02c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_18e6b02c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_18e6b02c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);