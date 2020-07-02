(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
      headers: [{
        text: 'Id',
        value: 'id'
      }, {
        text: 'Imagen',
        value: 'img'
      }, {
        text: 'Nombre',
        value: 'name'
      }, {
        text: 'Descripcion',
        value: 'description'
      }, {
        text: 'Precio',
        value: 'price'
      }, {
        text: 'Acciones',
        value: 'action'
      }],
      products: [],
      showModal: false,
      notification: false,
      message: '',
      color: '',
      timeout: 6000,
      fab: false
    };
  },
  mounted: function mounted() {
    this.getProducts();
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
    goToProduct: function goToProduct(item) {
      this.$router.push('/productDetail/' + item.id);
    },
    deleteProduct: function deleteProduct(item) {
      var _this = this;

      axios["delete"]('/api/products/deleteProduct/' + item.id).then(function (res) {
        _this.notification = true;
        _this.message = res.data;
        _this.color = 'success';

        _this.getProducts();
      })["catch"](function (err) {
        _this.notification = true;
        _this.message = 'Ocurrio un error al momento de eliminar el producto.';
        _this.color = 'error';
      });
    },
    goToNewProduct: function goToNewProduct() {
      this.$router.push('/new-product');
    },
    goToEdit: function goToEdit(item) {
      this.$router.push('/editProduct/' + item.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home.vue?vue&type=template&id=fa6affac& ***!
  \*******************************************************************************************************************************************************************************************************/
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
        "v-app",
        [
          _c(
            "v-container",
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "primary" },
                  on: { click: _vm.goToNewProduct }
                },
                [_vm._v("\n                Crear producto\n            ")]
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: { headers: _vm.headers, items: _vm.products },
                scopedSlots: _vm._u([
                  {
                    key: "item.name",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "span",
                          {
                            on: {
                              click: function($event) {
                                return _vm.goToProduct(item)
                              }
                            }
                          },
                          [_vm._v(_vm._s(item.name))]
                        )
                      ]
                    }
                  },
                  {
                    key: "item.img",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("img", {
                          staticStyle: { "max-width": "auto", height: "100px" },
                          attrs: { src: item.img, alt: "" }
                        })
                      ]
                    }
                  },
                  {
                    key: "item.action",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-dialog",
                          {
                            attrs: { persistent: "", "max-width": "100%" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: { color: "primary" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.goToEdit(item)
                                                }
                                              }
                                            },
                                            "v-btn",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_vm._v("editar")]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            ),
                            model: {
                              value: _vm.showModal,
                              callback: function($$v) {
                                _vm.showModal = $$v
                              },
                              expression: "showModal"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [_c("v-cart-title", [_vm._v("Hola ")])],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "blue" },
                            on: {
                              click: function($event) {
                                return _vm.deleteProduct(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                    eliminar\n                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "green" },
                            on: {
                              click: function($event) {
                                return _vm.goToProduct(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                    ver\n                "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              }),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=fa6affac& */ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home.vue?vue&type=template&id=fa6affac&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/home.vue?vue&type=template&id=fa6affac& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=fa6affac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home.vue?vue&type=template&id=fa6affac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_fa6affac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);