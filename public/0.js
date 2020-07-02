(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateProduct.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CreateProduct.vue?vue&type=script&lang=js& ***!
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
      timeout: 6000
    };
  },
  methods: {
    goToBack: function goToBack() {
      this.$router.push('/');
    },
    SaveProduct: function SaveProduct() {
      var _this = this;

      if (!this.name) {
        this.notification = true;
        this.message = 'No has introcido el nombre del producto';
        this.color = 'error';
      } else if (!this.description) {
        this.notification = true;
        this.message = 'No has introcido la descripcion del producto';
        this.color = 'error';
      } else if (!this.img) {
        this.notification = true;
        this.message = 'No has introcido la imagen  del producto';
        this.color = 'error';
      } else if (!this.price) {
        this.notification = true;
        this.message = 'No has introcido el precio del producto';
        this.color = 'error';
      } else {
        var data = {
          name: this.name,
          description: this.description,
          img: this.img,
          price: this.price
        };
        axios.post('/api/products/SaveProduct', data).then(function (response) {
          if (response.data.transaction.status == true) {
            _this.notification = true;
            _this.message = response.data.data[0];
            _this.color = 'success';
            window.location = '/';
          } else {
            _this.notification = true;
            _this.message = 'No se proceso exitosamente el registro';
            _this.color = 'error';
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateProduct.vue?vue&type=template&id=763eab10&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CreateProduct.vue?vue&type=template&id=763eab10& ***!
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
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Descripción" },
                model: {
                  value: _vm.description,
                  callback: function($$v) {
                    _vm.description = $$v
                  },
                  expression: "description"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Imagen" },
                model: {
                  value: _vm.img,
                  callback: function($$v) {
                    _vm.img = $$v
                  },
                  expression: "img"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Precio", type: "number" },
                model: {
                  value: _vm.price,
                  callback: function($$v) {
                    _vm.price = $$v
                  },
                  expression: "price"
                }
              }),
              _vm._v(" "),
              _c("v-btn", { on: { click: _vm.goToBack } }, [_vm._v("Volver")]),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.SaveProduct } },
                [_vm._v("Crear")]
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

/***/ "./resources/js/components/CreateProduct.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/CreateProduct.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateProduct_vue_vue_type_template_id_763eab10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateProduct.vue?vue&type=template&id=763eab10& */ "./resources/js/components/CreateProduct.vue?vue&type=template&id=763eab10&");
/* harmony import */ var _CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/CreateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateProduct_vue_vue_type_template_id_763eab10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateProduct_vue_vue_type_template_id_763eab10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CreateProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CreateProduct.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/CreateProduct.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CreateProduct.vue?vue&type=template&id=763eab10&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/CreateProduct.vue?vue&type=template&id=763eab10& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_763eab10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateProduct.vue?vue&type=template&id=763eab10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateProduct.vue?vue&type=template&id=763eab10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_763eab10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_763eab10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);