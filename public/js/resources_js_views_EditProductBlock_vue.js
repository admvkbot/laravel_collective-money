(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_EditProductBlock_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VsudTextarea",
  props: {
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      "default": "Your text here..."
    },
    rows: {
      type: Number,
      "default": 5
    }
  },
  emits: ['textareaValue']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTimelineBlock.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTimelineBlock.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VsudTimelineBlock",
  props: {
    id: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      "default": "ni ni-bell-55"
    },
    color: {
      type: String,
      "default": "success"
    },
    timelineContent: {
      type: String,
      "default": "Block"
    },
    date: {
      type: String,
      "default": "22 DEC 7:20 PM"
    },
    text: {
      type: String,
      "default": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sapiente enim omnis corporis perferendis libero dolorum inventore amet veritatis quaerat."
    },
    badges: {
      type: Array,
      "default": ['Badge']
    }
  },
  emits: ["textareaValue"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ModerateProjectsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ModerateProjectsTable */ "./resources/js/views/components/ModerateProjectsTable.vue");
/* harmony import */ var _components_VsudInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/VsudInput.vue */ "./resources/js/components/VsudInput.vue");
/* harmony import */ var _components_VsudTextarea_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/VsudTextarea.vue */ "./resources/js/components/VsudTextarea.vue");
/* harmony import */ var _components_VsudButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/VsudButton.vue */ "./resources/js/components/VsudButton.vue");
/* harmony import */ var _components_VsudTimelineBlock_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/VsudTimelineBlock.vue */ "./resources/js/components/VsudTimelineBlock.vue");
/* harmony import */ var _assets_js_getProjectTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/js/getProjectTypes.js */ "./resources/js/assets/js/getProjectTypes.js");
/* harmony import */ var _assets_js_getProjectBlocks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/js/getProjectBlocks.js */ "./resources/js/assets/js/getProjectBlocks.js");
/* harmony import */ var _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Icon/Twitter */ "./resources/js/components/Icon/Twitter.vue");
/* harmony import */ var _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Icon/Telegram */ "./resources/js/components/Icon/Telegram.vue");
/* harmony import */ var _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Icon/Discord */ "./resources/js/components/Icon/Discord.vue");
/* harmony import */ var _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Icon/Medium */ "./resources/js/components/Icon/Medium.vue");
/* harmony import */ var _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Icon/Youtube */ "./resources/js/components/Icon/Youtube.vue");
/* harmony import */ var _components_modal_confirmModal_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/modal/confirmModal.js */ "./resources/js/components/modal/confirmModal.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "edit-product-block",
  components: {
    ModerateProjectsTable: _components_ModerateProjectsTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    VsudInput: _components_VsudInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VsudButton: _components_VsudButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VsudTextarea: _components_VsudTextarea_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VsudTimelineBlock: _components_VsudTimelineBlock_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    getProjectTypes: _assets_js_getProjectTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    getProjectBlocks: _assets_js_getProjectBlocks_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    TwitterIcon: _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_7__["default"],
    TelegramIcon: _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_8__["default"],
    DiscordIcon: _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_9__["default"],
    MediumIcon: _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_10__["default"],
    YoutubeIcon: _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_11__["default"],
    confirmModal: _components_modal_confirmModal_js__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      project: {
        name: "",
        type: 1,
        keys: "",
        url: "",
        twitter: "",
        discord: "",
        youtube: "",
        telegram: "",
        medium: "",
        description: ""
      }
    };
  },
  setup: function setup() {
    var types = (0,vue__WEBPACK_IMPORTED_MODULE_13__.ref)([]);
    types.value = (0,_assets_js_getProjectTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var blocks = (0,vue__WEBPACK_IMPORTED_MODULE_13__.ref)([]);
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_14__.useRoute)();
    var projectId = route.params.projectId;
    console.log(projectId);
    blocks.value = (0,_assets_js_getProjectBlocks_js__WEBPACK_IMPORTED_MODULE_6__["default"])(projectId);
    return {
      types: types,
      blocks: blocks
    };
  },
  methods: {
    sendData: function sendData() {
      var _this = this;

      axios.get("/sanctum/csrf-cookie").then(function (response) {
        axios.post("/api/add-project", {
          name: _this.project.name,
          type: _this.project.type,
          keys: _this.project.keys,
          url: _this.project.url,
          twitter: _this.project.twitter,
          discord: _this.project.discord,
          youtube: _this.project.youtube,
          telegram: _this.project.telegram,
          medium: _this.project.medium,
          description: _this.description
        }).then(function (r) {
          _this.$router.push({
            name: "Products"
          }); //this.$router.go()
          //this.$emit("socialsReload");

        })["catch"](function (err) {
          console.log(err.response);
          _this.registerError = "Ошибка сохранений проекта";
          alert(_this.registerError);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_VsudProgressPlus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/VsudProgressPlus */ "./resources/js/components/VsudProgressPlus.vue");
/* harmony import */ var _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Icon/Twitter */ "./resources/js/components/Icon/Twitter.vue");
/* harmony import */ var _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Icon/Telegram */ "./resources/js/components/Icon/Telegram.vue");
/* harmony import */ var _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Icon/Discord */ "./resources/js/components/Icon/Discord.vue");
/* harmony import */ var _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Icon/Medium */ "./resources/js/components/Icon/Medium.vue");
/* harmony import */ var _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Icon/Youtube */ "./resources/js/components/Icon/Youtube.vue");
/* harmony import */ var _Cards_PlaceHolderHorisontalCard_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Cards/PlaceHolderHorisontalCard.vue */ "./resources/js/Cards/PlaceHolderHorisontalCard.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "moderate-projects-table",
  components: {
    VsudProgressPlus: _components_VsudProgressPlus__WEBPACK_IMPORTED_MODULE_0__["default"],
    TwitterIcon: _components_Icon_Twitter__WEBPACK_IMPORTED_MODULE_1__["default"],
    TelegramIcon: _components_Icon_Telegram__WEBPACK_IMPORTED_MODULE_2__["default"],
    DiscordIcon: _components_Icon_Discord__WEBPACK_IMPORTED_MODULE_3__["default"],
    MediumIcon: _components_Icon_Medium__WEBPACK_IMPORTED_MODULE_4__["default"],
    YoutubeIcon: _components_Icon_Youtube__WEBPACK_IMPORTED_MODULE_5__["default"],
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon,
    PlaceHolderHorisontalCard: _Cards_PlaceHolderHorisontalCard_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    is_liveSearch: {
      type: Boolean,
      "default": true
    },
    top: {
      type: Number,
      "default": 0
    }
  },
  setup: function setup(props) {
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)(""); // Search text
    // Fake data

    var data = (0,vue__WEBPACK_IMPORTED_MODULE_7__.reactive)({
      rows: []
    });
    /**
     * Get server data request
     */

    var myRequest = function myRequest(keyword) {
      axios.get("/sanctum/csrf-cookie").then(function (response) {
        axios.post("/api/get-projects/" + props.top, {
          filter: keyword
        }).then(function (r) {
          console.log(r.data);
          data.rows = r.data; //this.$emit("accountsReload");
        })["catch"](function (err) {
          console.log("Fetch error", err.response);
          var registerError = "Неизвестная ошибка при полученнии списка проектов";
          alert(registerError);
        });
      });
    };

    var table = (0,vue__WEBPACK_IMPORTED_MODULE_7__.reactive)({
      list: (0,vue__WEBPACK_IMPORTED_MODULE_7__.computed)(function () {
        return data.rows;
      }),
      totalRecordCount: (0,vue__WEBPACK_IMPORTED_MODULE_7__.computed)(function () {
        return data.rows.length;
      })
    });

    if (props.is_liveSearch) {
      (0,vue__WEBPACK_IMPORTED_MODULE_7__.watch)(function () {
        return searchTerm.value;
      }, function (val) {
        myRequest(val);
      });
    } // Get data on first rendering


    myRequest("");
    console.log(table);
    return {
      searchTerm: searchTerm,
      table: table
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "form-group"
};
var _hoisted_2 = ["for"];
var _hoisted_3 = ["id", "rows", "placeholder"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": $props.id
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: $props.id,
    "class": "form-control",
    rows: $props.rows,
    placeholder: $props.placeholder,
    onBlur: _cache[0] || (_cache[0] = function ($event) {
      return _this.$emit('textareaValue', $event.target.value);
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_3)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTimelineBlock.vue?vue&type=template&id=9e328176":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTimelineBlock.vue?vue&type=template&id=9e328176 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "timeline-block mb-3"
};
var _hoisted_2 = {
  "class": "timeline-step bg-dark"
};
var _hoisted_3 = {
  "class": "timeline-content"
};
var _hoisted_4 = {
  "class": "text-white text-sm font-weight-bold mb-0"
};
var _hoisted_5 = {
  "class": "text-secondary font-weight-bold text-xs mt-1 mb-0"
};
var _hoisted_6 = {
  "class": "text-secondary text-sm mt-3 mb-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.icon + 'text-' + $props.color + 'text-gradient')
  }, null, 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.timelineContent), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.date), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.text), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.badges, function (badge) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      "class": "badge badge-sm bg-gradient-success",
      key: badge.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(badge.title), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=template&id=3ef9ddb2&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=template&id=3ef9ddb2&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3ef9ddb2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container-fluid my-3 py-3"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-lg-12 mb-lg-0 mb-4"
};
var _hoisted_4 = {
  "class": "card"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Настройки парсинга проекта")], -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "card-body pt-0"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "col-6"
};
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-12"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label"
  }, "Название", -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  "class": "row"
};
var _hoisted_13 = {
  "class": "col-12"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Ключевые фразы");

var _hoisted_15 = {
  "class": "row"
};
var _hoisted_16 = {
  "class": "col-12"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Комментарий к проекту");

var _hoisted_18 = {
  "class": "row"
};
var _hoisted_19 = {
  "class": "col-12 pb-3"
};

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label"
  }, "Тип проекта", -1
  /* HOISTED */
  );
});

var _hoisted_21 = ["value"];
var _hoisted_22 = {
  "class": "row"
};
var _hoisted_23 = {
  "class": "col-12"
};

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label"
  }, "Официальный вебсайт", -1
  /* HOISTED */
  );
});

var _hoisted_25 = {
  "class": "row"
};
var _hoisted_26 = {
  "class": "col-12"
};
var _hoisted_27 = {
  "class": "form-label d-flex"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Twitter");

var _hoisted_29 = {
  "class": "row"
};
var _hoisted_30 = {
  "class": "col-12"
};
var _hoisted_31 = {
  "class": "form-label d-flex"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Discord");

var _hoisted_33 = {
  "class": "row"
};
var _hoisted_34 = {
  "class": "col-12"
};
var _hoisted_35 = {
  "class": "form-label d-flex"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("YouTube");

var _hoisted_37 = {
  "class": "row"
};
var _hoisted_38 = {
  "class": "col-12"
};
var _hoisted_39 = {
  "class": "form-label d-flex"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Telegram");

var _hoisted_41 = {
  "class": "row"
};
var _hoisted_42 = {
  "class": "col-12"
};
var _hoisted_43 = {
  "class": "form-label d-flex"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Medium");

var _hoisted_45 = {
  "class": "row mt-auto position-sticky top-100 pb-2"
};
var _hoisted_46 = {
  "class": "col-12 d-flex"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Назад ");

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить ");

var _hoisted_49 = {
  "class": "col-lg-6 mt-4 mt-lg-0"
};
var _hoisted_50 = {
  "class": "card bg-gradient-dark"
};

var _hoisted_51 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header bg-transparent pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
    "class": "text-white"
  }, " Настройка стадий развития проекта ")], -1
  /* HOISTED */
  );
});

var _hoisted_52 = {
  "class": "card-body p-3"
};
var _hoisted_53 = {
  "class": "timeline timeline-one-side",
  "data-timeline-axis-style": "dashed"
};
var _hoisted_54 = {
  "class": "timeline-step bg-dark"
};
var _hoisted_55 = {
  "class": "timeline-content"
};
var _hoisted_56 = {
  "class": "text-white text-sm font-weight-bold mb-0"
};
var _hoisted_57 = {
  "class": "float-right"
};
var _hoisted_58 = ["id"];

var _hoisted_59 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-ellipsis-v text-xs",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_60 = [_hoisted_59];
var _hoisted_61 = ["aria-labelledby"];

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Изменить");

var _hoisted_63 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item border-radius-md",
    href: "javascript:;"
  }, "Удалить")], -1
  /* HOISTED */
  );
});

var _hoisted_64 = {
  "class": "text-secondary font-weight-bold text-xs mt-1 mb-0"
};
var _hoisted_65 = {
  "class": "text-secondary text-sm mt-3 mb-2"
};
var _hoisted_66 = {
  "class": "timeline-block mb-3"
};

var _hoisted_67 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "timeline-step bg-dark"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "ni ni-bell-55 text-success text-gradient"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_68 = {
  "class": "timeline-content"
};

var _hoisted_69 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
    "class": "text-white text-sm font-weight-bold mb-0"
  }, " $24000, Design changes ", -1
  /* HOISTED */
  );
});

var _hoisted_70 = {
  "class": "float-right"
};

var _hoisted_71 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-link text-secondary",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "true",
    id: 'project-dropdown' + '1'
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-ellipsis-v text-xs",
    "aria-hidden": "true"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_72 = {
  "class": "dropdown-menu px-2 py-3 ms-sm-n4 ms-n5",
  "aria-labelledby": 'timeline-block-dropdown' + '1',
  style: {}
};

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Изменить");

var _hoisted_74 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-secondary font-weight-bold text-xs mt-1 mb-0"
  }, " 22 DEC 7:20 PM ", -1
  /* HOISTED */
  );
});

var _hoisted_75 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-secondary text-sm mt-3 mb-2"
  }, " People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. ", -1
  /* HOISTED */
  );
});

var _hoisted_76 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "badge badge-sm bg-gradient-success"
  }, "Design", -1
  /* HOISTED */
  );
});

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"timeline-block mb-3\" data-v-3ef9ddb2><span class=\"timeline-step bg-dark\" data-v-3ef9ddb2><i class=\"ni ni-html5 text-danger text-gradient\" data-v-3ef9ddb2></i></span><div class=\"timeline-content\" data-v-3ef9ddb2><h6 class=\"text-white text-sm font-weight-bold mb-0\" data-v-3ef9ddb2> New order #1832412 </h6><p class=\"text-secondary font-weight-bold text-xs mt-1 mb-0\" data-v-3ef9ddb2> 21 DEC 11 PM </p><p class=\"text-secondary text-sm mt-3 mb-2\" data-v-3ef9ddb2> People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. </p><span class=\"badge badge-sm bg-gradient-danger\" data-v-3ef9ddb2>Order</span><span class=\"badge badge-sm bg-gradient-danger\" data-v-3ef9ddb2>#1832412</span></div></div><div class=\"timeline-block mb-3\" data-v-3ef9ddb2><span class=\"timeline-step bg-dark\" data-v-3ef9ddb2><i class=\"ni ni-cart text-info text-gradient\" data-v-3ef9ddb2></i></span><div class=\"timeline-content\" data-v-3ef9ddb2><h6 class=\"text-white text-sm font-weight-bold mb-0\" data-v-3ef9ddb2> Server payments for April </h6><p class=\"text-secondary font-weight-bold text-xs mt-1 mb-0\" data-v-3ef9ddb2> 21 DEC 9:34 PM </p><p class=\"text-secondary text-sm mt-3 mb-2\" data-v-3ef9ddb2> People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. </p><span class=\"badge badge-sm bg-gradient-info\" data-v-3ef9ddb2>Server</span><span class=\"badge badge-sm bg-gradient-info\" data-v-3ef9ddb2>Payments</span></div></div><div class=\"timeline-block mb-3\" data-v-3ef9ddb2><span class=\"timeline-step bg-dark\" data-v-3ef9ddb2><i class=\"ni ni-credit-card text-warning text-gradient\" data-v-3ef9ddb2></i></span><div class=\"timeline-content\" data-v-3ef9ddb2><h6 class=\"text-white text-sm font-weight-bold mb-0\" data-v-3ef9ddb2> New card added for order #4395133 </h6><p class=\"text-secondary font-weight-bold text-xs mt-1 mb-0\" data-v-3ef9ddb2> 20 DEC 2:20 AM </p><p class=\"text-secondary text-sm mt-3 mb-2\" data-v-3ef9ddb2> People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. </p><span class=\"badge badge-sm bg-gradient-warning\" data-v-3ef9ddb2>Card</span><span class=\"badge badge-sm bg-gradient-warning\" data-v-3ef9ddb2>#4395133</span><span class=\"badge badge-sm bg-gradient-warning\" data-v-3ef9ddb2>Priority</span></div></div><div class=\"timeline-block mb-3\" data-v-3ef9ddb2><span class=\"timeline-step bg-dark\" data-v-3ef9ddb2><i class=\"ni ni-key-25 text-primary text-gradient\" data-v-3ef9ddb2></i></span><div class=\"timeline-content\" data-v-3ef9ddb2><h6 class=\"text-white text-sm font-weight-bold mb-0\" data-v-3ef9ddb2> Unlock packages for development </h6><p class=\"text-secondary font-weight-bold text-xs mt-1 mb-0\" data-v-3ef9ddb2> 18 DEC 4:54 AM </p><p class=\"text-secondary text-sm mt-3 mb-2\" data-v-3ef9ddb2> People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. </p><span class=\"badge badge-sm bg-gradient-primary\" data-v-3ef9ddb2>Development</span></div></div><div class=\"timeline-block\" data-v-3ef9ddb2><span class=\"timeline-step bg-dark\" data-v-3ef9ddb2><i class=\"ni ni-archive-2 text-success text-gradient\" data-v-3ef9ddb2></i></span><div class=\"timeline-content\" data-v-3ef9ddb2><h6 class=\"text-white text-sm font-weight-bold mb-0\" data-v-3ef9ddb2> New message unread </h6><p class=\"text-secondary font-weight-bold text-xs mt-1 mb-0\" data-v-3ef9ddb2> 16 DEC </p><p class=\"text-secondary text-sm mt-3 mb-2\" data-v-3ef9ddb2> People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. </p><span class=\"badge badge-sm bg-gradient-success\" data-v-3ef9ddb2>Message</span></div></div><div class=\"timeline-block\" data-v-3ef9ddb2><span class=\"timeline-step bg-dark\" data-v-3ef9ddb2><i class=\"ni ni-check-bold text-info text-gradient\" data-v-3ef9ddb2></i></span><div class=\"timeline-content\" data-v-3ef9ddb2><h6 class=\"text-white text-sm font-weight-bold mb-0\" data-v-3ef9ddb2> Notifications unread </h6><p class=\"text-secondary font-weight-bold text-xs mt-1 mb-0\" data-v-3ef9ddb2> 15 DEC </p><p class=\"text-secondary text-sm mt-3 mb-2\" data-v-3ef9ddb2> People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. </p></div></div><div class=\"timeline-block\" data-v-3ef9ddb2><span class=\"timeline-step bg-dark\" data-v-3ef9ddb2><i class=\"ni ni-box-2 text-warning text-gradient\" data-v-3ef9ddb2></i></span><div class=\"timeline-content\" data-v-3ef9ddb2><h6 class=\"text-white text-sm font-weight-bold mb-0\" data-v-3ef9ddb2> New request </h6><p class=\"text-secondary font-weight-bold text-xs mt-1 mb-0\" data-v-3ef9ddb2> 14 DEC </p><p class=\"text-secondary text-sm mt-3 mb-2\" data-v-3ef9ddb2> People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. </p><span class=\"badge badge-sm bg-gradient-warning\" data-v-3ef9ddb2>Request</span><span class=\"badge badge-sm bg-gradient-warning\" data-v-3ef9ddb2>Priority</span></div></div><div class=\"timeline-block\" data-v-3ef9ddb2><span class=\"timeline-step bg-dark\" data-v-3ef9ddb2><i class=\"ni ni-controller text-white\" data-v-3ef9ddb2></i></span><div class=\"timeline-content\" data-v-3ef9ddb2><h6 class=\"text-white text-sm font-weight-bold mb-0\" data-v-3ef9ddb2> Controller issues </h6><p class=\"text-secondary font-weight-bold text-xs mt-1 mb-0\" data-v-3ef9ddb2> 13 DEC </p><p class=\"text-secondary text-sm mt-3 mb-2\" data-v-3ef9ddb2> People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of. </p><span class=\"badge badge-sm bg-gradient-dark\" data-v-3ef9ddb2>Controller</span></div></div>", 8);

var _hoisted_85 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-md-4"
  })], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_vsud_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-input");

  var _component_vsud_textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-textarea");

  var _component_twitter_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("twitter-icon");

  var _component_discord_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("discord-icon");

  var _component_youtube_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("youtube-icon");

  var _component_telegram_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("telegram-icon");

  var _component_medium_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("medium-icon");

  var _component_vsud_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-button");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-name",
    type: "text",
    placeholder: "Crypto Whitelist Pro",
    "aria-label": "Name",
    isRequired: true,
    active: true,
    value: "",
    disabled: false,
    onInputValue: _cache[0] || (_cache[0] = function (v) {
      return _this.project.name = v;
    })
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_textarea, {
    id: "project-keys",
    onTextareaValue: _cache[1] || (_cache[1] = function (v) {
      return _this.project.keys = v;
    }),
    placeholder: "key1\nkey2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_textarea, {
    id: "project-description",
    placeholder: "Любой текст",
    onInputValue: _cache[2] || (_cache[2] = function (v) {
      return _this.project.description = v;
    }),
    rows: "7"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_17];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    name: "choices-type-button",
    id: "choices-type",
    placeholder: "Выберите тип проекта",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.project.type = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.types.value, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: item.id,
      key: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9
    /* TEXT, PROPS */
    , _hoisted_21);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.project.type]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-site-url",
    type: "text",
    placeholder: "https://project.website/",
    "aria-label": "project-site-url",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[4] || (_cache[4] = function (v) {
      return _this.project.url = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_twitter_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_28]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-twitter",
    type: "text",
    placeholder: "https://twitter.com/xxxx",
    "aria-label": "project-twitter",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[5] || (_cache[5] = function (v) {
      return _this.project.twitter = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_discord_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_32]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-discord",
    type: "text",
    placeholder: "https://discord.com/user/xxxx",
    "aria-label": "project-discord",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[6] || (_cache[6] = function (v) {
      return _this.project.discord = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_youtube_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_36]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-youtube",
    type: "text",
    placeholder: "https://youtube.com/channel/xxxx",
    "aria-label": "project-youtube",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[7] || (_cache[7] = function (v) {
      return _this.project.youtube = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_telegram_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_40]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-telegram",
    type: "text",
    placeholder: "https://t.me/xxxx",
    "aria-label": "project-telegram",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[8] || (_cache[8] = function (v) {
      return _this.project.telegram = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_medium_icon, {
    "class": "mt-1 mr-1"
  }), _hoisted_44]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_input, {
    id: "project-medium",
    type: "text",
    placeholder: "https://medium.com/@xxxx",
    "aria-label": "project-medium",
    isRequired: false,
    active: true,
    value: "",
    onInputValue: _cache[9] || (_cache[9] = function (v) {
      return _this.project.medium = v;
    }),
    disabled: false
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_button, {
    "class": "my-4 mb-2 mr-2",
    variant: "outline",
    color: "active",
    "full-width": "",
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return _ctx.$router.go(-1);
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_47];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_button, {
    "class": "my-4 mb-2 ml-2",
    variant: "gradient",
    color: "success",
    "full-width": "",
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.sendData, ["prevent"])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_48];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.blocks.value, function (block) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "timeline-block mb-3",
      key: block.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(block.icon + 'text-' + block.color + 'text-gradient')
    }, null, 2
    /* CLASS */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.timelineContent), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-link text-secondary",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "true",
      id: 'project-dropdown' + block.id
    }, _hoisted_60, 8
    /* PROPS */
    , _hoisted_58), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
      "class": "dropdown-menu px-2 py-3 ms-sm-n4 ms-n5",
      "aria-labelledby": 'timeline-block-dropdown' + block.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      "class": "dropdown-item border-radius-md",
      to: {
        name: 'Edit Product Block',
        params: {
          blockId: block.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_62];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]), _hoisted_63], 8
    /* PROPS */
    , _hoisted_61)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.date), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.text), 1
    /* TEXT */
    ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(block.badges, function (badge) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        "class": "badge badge-sm bg-gradient-success",
        key: badge.id
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(badge.title), 1
      /* TEXT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "dropdown-item border-radius-md",
    to: {
      name: 'Edit Product'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_73];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item border-radius-md",
    href: "javascript:;",
    onClick: _cache[11] || (_cache[11] = function ($event) {
      return _ctx.confirmModal(_ctx.block.id, 'Вы уверены, что хотите удалить элемент?');
    })
  }, "Удалить")])])])]), _hoisted_74, _hoisted_75, _hoisted_76])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" "), _hoisted_77])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), _hoisted_85], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a9d8c052"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4"
};
var _hoisted_2 = {
  "class": "card mb-4"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header pb-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Криптопроекты")], -1
  /* HOISTED */
  );
});

var _hoisted_4 = {
  "class": "card-body px-0 pt-0 pb-2"
};
var _hoisted_5 = {
  key: 0,
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-6"
};

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "form-label pl-3"
  }, "Поиск проекта", -1
  /* HOISTED */
  );
});

var _hoisted_8 = {
  "class": "input-group pl-3"
};
var _hoisted_9 = {
  "class": "table-responsive p-0"
};
var _hoisted_10 = {
  "class": "table align-items-center justify-content-center mb-0"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
  }, " Проект "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center"
  }, " Рейтинг "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center"
  }, " Пользовательский интерес "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
    "class": "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-center"
  }, " Соцсети "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th")])], -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  "class": "d-flex px-2"
};
var _hoisted_13 = ["src"];
var _hoisted_14 = {
  "class": "my-auto d-flex"
};
var _hoisted_15 = {
  "class": "mb-0 text-sm"
};
var _hoisted_16 = ["href", "title"];
var _hoisted_17 = {
  key: 0,
  "class": "fas fa-link ml-2"
};
var _hoisted_18 = {
  "class": "align-middle text-center"
};
var _hoisted_19 = {
  "class": "d-flex align-items-center justify-content-center"
};
var _hoisted_20 = {
  "class": "me-2 text-xs font-weight-bold"
};
var _hoisted_21 = {
  "class": "align-middle text-center"
};
var _hoisted_22 = {
  "class": "text-sm font-weight-bold mb-0"
};
var _hoisted_23 = {
  "class": "align-middle text-center"
};
var _hoisted_24 = {
  "class": "inline-flex"
};
var _hoisted_25 = ["href"];
var _hoisted_26 = ["href"];
var _hoisted_27 = ["href"];
var _hoisted_28 = ["href"];
var _hoisted_29 = ["href"];
var _hoisted_30 = {
  "class": "align-middle"
};
var _hoisted_31 = ["id"];

var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-ellipsis-v text-xs",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_33 = [_hoisted_32];
var _hoisted_34 = ["aria-labelledby"];

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Настроить");

var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item border-radius-md",
    href: "javascript:;"
  }, "Изменить ключи")], -1
  /* HOISTED */
  );
});

var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-item border-radius-md",
    href: "javascript:;"
  }, "Удалить")], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_place_holder_horisontal_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("place-holder-horisontal-card");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_vsud_progress_plus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vsud-progress-plus");

  var _component_twitter_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("twitter-icon");

  var _component_discord_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("discord-icon");

  var _component_youtube_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("youtube-icon");

  var _component_telegram_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("telegram-icon");

  var _component_medium_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("medium-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'Add Product'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_place_holder_horisontal_card, {
        title: {
          text: 'Добавить проект',
          variant: 'h6'
        }
      })];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$props.is_liveSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "liveSearchReferers",
    name: "liveSearchReferers",
    "class": "form-control",
    type: "text",
    placeholder: "начните что-то писать...",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.searchTerm = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchTerm]])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.table.list, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: item
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [item.logo_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
      key: 0,
      src: item.logo_url,
      "class": "avatar avatar-sm rounded-circle me-2",
      alt: "spotify"
    }, null, 8
    /* PROPS */
    , _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: item.website_url,
      traget: "_blank",
      title: item.website_name
    }, [item.website_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_16)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.rating) + "%", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vsud_progress_plus, {
      variant: "gradient",
      percentage: item.rating
    }, null, 8
    /* PROPS */
    , ["percentage"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.num_tg_users), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [item.twitter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.twitter
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_twitter_icon, {
      size: "18px"
    })], 8
    /* PROPS */
    , _hoisted_25)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.discord ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 1,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.discord
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_discord_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_26)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.youtube ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 2,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.youtube
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_youtube_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_27)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.telegram ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 3,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.telegram
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_telegram_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_28)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.medium ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 4,
      "class": "text-xs font-weight-bold",
      target: "_blank",
      href: item.medium
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_medium_icon, {
      size: "18px",
      "class": "ml-2"
    })], 8
    /* PROPS */
    , _hoisted_29)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, [$props.is_liveSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      "class": "btn btn-link text-secondary mb-0",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "true",
      id: 'project-dropdown' + item.id
    }, _hoisted_33, 8
    /* PROPS */
    , _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
      "class": "dropdown-menu px-2 py-3 ms-sm-n4 ms-n5",
      "aria-labelledby": 'project-dropdown' + item.id,
      style: {}
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      "class": "dropdown-item border-radius-md",
      to: {
        name: 'Edit Product',
        params: {
          productId: item.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_35];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]), _hoisted_36, _hoisted_37], 8
    /* PROPS */
    , _hoisted_34)])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/assets/js/getProjectBlocks.js":
/*!****************************************************!*\
  !*** ./resources/js/assets/js/getProjectBlocks.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProjectBlocks)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
//import { ref, onMounted, watch } from 'vue'

function getProjectBlocks() {
  var blocks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]); //  const getUserRepositories = async () => {
  //    repositories.value = await fetchUserRepositories(user.value)
  //  }

  var connectGetProjectBlocks = function connectGetProjectBlocks() {
    return axios.get("/sanctum/csrf-cookie").then(function (response) {
      axios.get("/api/get-blocks", {}).then(function (r) {
        blocks.value = r.data;
      })["catch"](function (err) {
        console.log(err);
        var registerError = "Ошибка получеения блоков timeline";
        alert(registerError);
      });
    });
  }; //onMounted(connectGetAllAccounts)


  connectGetProjectBlocks(); //watch(user, getUserRepositories)

  return blocks;
}

/***/ }),

/***/ "./resources/js/assets/js/getProjectTypes.js":
/*!***************************************************!*\
  !*** ./resources/js/assets/js/getProjectTypes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProjectTypes)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
//import { ref, onMounted, watch } from 'vue'

function getProjectTypes() {
  var types = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]); //  const getUserRepositories = async () => {
  //    repositories.value = await fetchUserRepositories(user.value)
  //  }

  var connectGetProjectTypes = function connectGetProjectTypes() {
    return axios.get("/sanctum/csrf-cookie").then(function (response) {
      axios.get("/api/get-types", {}).then(function (r) {
        types.value = r.data;
      })["catch"](function (err) {
        console.log(err);
        var registerError = "Ошибка получеения типов проектов";
        alert(registerError);
      });
    });
  }; //onMounted(connectGetAllAccounts)


  connectGetProjectTypes(); //watch(user, getUserRepositories)

  return types;
}

/***/ }),

/***/ "./resources/js/components/modal/confirmModal.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/modal/confirmModal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ confirmModal)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

function confirmModal(id, title, text) {
  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Да',
    cancelButtonText: 'Отменить'
  }).then(function (result) {
    if (result.isConfirmed) {
      return id;
    }
  });
  return false;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropdown-menu[data-v-3ef9ddb2],\n.dropend .dropdown-menu[data-v-3ef9ddb2] {\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\n    0 8px 9px -5px rgb(20 20 20 / 6%);\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/EditProductBlock.vue"],"names":[],"mappings":";AA6tBA;;EAEE;qCACmC;EACnC,eAAe;AACjB","sourcesContent":["<template>\n  <div class=\"container-fluid my-3 py-3\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 mb-lg-0 mb-4\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h5>Настройки парсинга проекта</h5>\n          </div>\n          <div class=\"card-body pt-0\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label class=\"form-label\">Название</label>\n                    <vsud-input\n                      id=\"project-name\"\n                      type=\"text\"\n                      placeholder=\"Crypto Whitelist Pro\"\n                      aria-label=\"Name\"\n                      :isRequired=\"true\"\n                      :active=\"true\"\n                      value=\"\"\n                      :disabled=\"false\"\n                      @input-value=\"(v) => (this.project.name = v)\"\n                    />\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <vsud-textarea\n                      id=\"project-keys\"\n                      @textarea-value=\"(v) => (this.project.keys = v)\"\n                      placeholder=\"key1\nkey2\"\n                      >Ключевые фразы</vsud-textarea\n                    >\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <vsud-textarea\n                      id=\"project-description\"\n                      placeholder=\"Любой текст\"\n                      @input-value=\"(v) => (this.project.description = v)\"\n                      rows=\"7\"\n                      >Комментарий к проекту</vsud-textarea\n                    >\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 pb-3\">\n                    <label class=\"form-label\">Тип проекта</label>\n                    <select\n                      class=\"form-control\"\n                      name=\"choices-type-button\"\n                      id=\"choices-type\"\n                      placeholder=\"Выберите тип проекта\"\n                      v-model=\"project.type\"\n                    >\n                      <option\n                        v-for=\"item in types.value\"\n                        :value=\"item.id\"\n                        :key=\"item.id\"\n                      >\n                        {{ item.name }}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label class=\"form-label\">Официальный вебсайт</label>\n                    <vsud-input\n                      id=\"project-site-url\"\n                      type=\"text\"\n                      placeholder=\"https://project.website/\"\n                      aria-label=\"project-site-url\"\n                      :isRequired=\"false\"\n                      :active=\"true\"\n                      value=\"\"\n                      @input-value=\"(v) => (this.project.url = v)\"\n                      :disabled=\"false\"\n                    />\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label class=\"form-label d-flex\"\n                      ><twitter-icon class=\"mt-1 mr-1\" />Twitter</label\n                    >\n                    <vsud-input\n                      id=\"project-twitter\"\n                      type=\"text\"\n                      placeholder=\"https://twitter.com/xxxx\"\n                      aria-label=\"project-twitter\"\n                      :isRequired=\"false\"\n                      :active=\"true\"\n                      value=\"\"\n                      @input-value=\"(v) => (this.project.twitter = v)\"\n                      :disabled=\"false\"\n                    />\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label class=\"form-label d-flex\"\n                      ><discord-icon class=\"mt-1 mr-1\" />Discord</label\n                    >\n                    <vsud-input\n                      id=\"project-discord\"\n                      type=\"text\"\n                      placeholder=\"https://discord.com/user/xxxx\"\n                      aria-label=\"project-discord\"\n                      :isRequired=\"false\"\n                      :active=\"true\"\n                      value=\"\"\n                      @input-value=\"(v) => (this.project.discord = v)\"\n                      :disabled=\"false\"\n                    />\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label class=\"form-label d-flex\"\n                      ><youtube-icon class=\"mt-1 mr-1\" />YouTube</label\n                    >\n                    <vsud-input\n                      id=\"project-youtube\"\n                      type=\"text\"\n                      placeholder=\"https://youtube.com/channel/xxxx\"\n                      aria-label=\"project-youtube\"\n                      :isRequired=\"false\"\n                      :active=\"true\"\n                      value=\"\"\n                      @input-value=\"(v) => (this.project.youtube = v)\"\n                      :disabled=\"false\"\n                    />\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label class=\"form-label d-flex\"\n                      ><telegram-icon class=\"mt-1 mr-1\" />Telegram</label\n                    >\n                    <vsud-input\n                      id=\"project-telegram\"\n                      type=\"text\"\n                      placeholder=\"https://t.me/xxxx\"\n                      aria-label=\"project-telegram\"\n                      :isRequired=\"false\"\n                      :active=\"true\"\n                      value=\"\"\n                      @input-value=\"(v) => (this.project.telegram = v)\"\n                      :disabled=\"false\"\n                    />\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label class=\"form-label d-flex\"\n                      ><medium-icon class=\"mt-1 mr-1\" />Medium</label\n                    >\n                    <vsud-input\n                      id=\"project-medium\"\n                      type=\"text\"\n                      placeholder=\"https://medium.com/@xxxx\"\n                      aria-label=\"project-medium\"\n                      :isRequired=\"false\"\n                      :active=\"true\"\n                      value=\"\"\n                      @input-value=\"(v) => (this.project.medium = v)\"\n                      :disabled=\"false\"\n                    />\n                  </div>\n                </div>\n\n                <div class=\"row mt-auto position-sticky top-100 pb-2\">\n                  <div class=\"col-12 d-flex\">\n                    <vsud-button\n                      class=\"my-4 mb-2 mr-2\"\n                      variant=\"outline\"\n                      color=\"active\"\n                      full-width\n                      @click=\"$router.go(-1)\"\n                      >Назад\n                    </vsud-button>\n                    <vsud-button\n                      class=\"my-4 mb-2 ml-2\"\n                      variant=\"gradient\"\n                      color=\"success\"\n                      full-width\n                      @click.prevent=\"sendData\"\n                      >Сохранить\n                    </vsud-button>\n                  </div>\n                </div>\n              </div>\n              <!-- -->\n              <div class=\"col-lg-6 mt-4 mt-lg-0\">\n                <div class=\"card bg-gradient-dark\">\n                  <div class=\"card-header bg-transparent pb-0\">\n                    <h6 class=\"text-white\">\n                      Настройка стадий развития проекта\n                    </h6>\n                  </div>\n                  <div class=\"card-body p-3\">\n                    <div\n                      class=\"timeline timeline-one-side\"\n                      data-timeline-axis-style=\"dashed\"\n                    >\n                      <div\n                        class=\"timeline-block mb-3\"\n                        v-for=\"block in blocks.value\"\n                        :key=\"block.id\"\n                      >\n                        <span class=\"timeline-step bg-dark\">\n                          <i\n                            :class=\"\n                              block.icon +\n                              'text-' +\n                              block.color +\n                              'text-gradient'\n                            \"\n                          ></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\n                            {{ block.timelineContent }}\n                          </h6>\n                          <div class=\"float-right\">\n                            <button\n                              class=\"btn btn-link text-secondary\"\n                              data-bs-toggle=\"dropdown\"\n                              aria-expanded=\"true\"\n                              :id=\"'project-dropdown' + block.id\"\n                            >\n                              <i\n                                class=\"fa fa-ellipsis-v text-xs\"\n                                aria-hidden=\"true\"\n                              ></i>\n                            </button>\n                            <ul\n                              class=\"dropdown-menu px-2 py-3 ms-sm-n4 ms-n5\"\n                              :aria-labelledby=\"\n                                'timeline-block-dropdown' + block.id\n                              \"\n                            >\n                              <li>\n                                <router-link\n                                  class=\"dropdown-item border-radius-md\"\n                                  :to=\"{\n                                    name: 'Edit Product Block',\n                                    params: { blockId: block.id },\n                                  }\"\n                                  >Изменить</router-link\n                                >\n                              </li>\n                              <li>\n                                <a\n                                  class=\"dropdown-item border-radius-md\"\n                                  href=\"javascript:;\"\n                                  >Удалить</a\n                                >\n                              </li>\n                            </ul>\n                          </div>\n\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            {{ block.date }}\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            {{ block.text }}\n                          </p>\n                          <span\n                            class=\"badge badge-sm bg-gradient-success\"\n                            v-for=\"badge in block.badges\"\n                            :key=\"badge.id\"\n                            >{{ badge.title }}</span\n                          >\n                        </div>\n                      </div>\n\n                      <div class=\"timeline-block mb-3\">\n                        <span class=\"timeline-step bg-dark\">\n                          <i\n                            class=\"ni ni-bell-55 text-success text-gradient\"\n                          ></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <div>\n                            <h6\n                              class=\"text-white text-sm font-weight-bold mb-0\"\n                            >\n                              $24000, Design changes\n                            </h6>\n                            <div class=\"float-right\">\n                              <button\n                                class=\"btn btn-link text-secondary\"\n                                data-bs-toggle=\"dropdown\"\n                                aria-expanded=\"true\"\n                                :id=\"'project-dropdown' + '1'\"\n                              >\n                                <i\n                                  class=\"fa fa-ellipsis-v text-xs\"\n                                  aria-hidden=\"true\"\n                                ></i>\n                              </button>\n                              <ul\n                                class=\"dropdown-menu px-2 py-3 ms-sm-n4 ms-n5\"\n                                :aria-labelledby=\"\n                                  'timeline-block-dropdown' + '1'\n                                \"\n                                style=\"\"\n                              >\n                                <li>\n                                  <router-link\n                                    class=\"dropdown-item border-radius-md\"\n                                    :to=\"{ name: 'Edit Product' }\"\n                                    >Изменить</router-link\n                                  >\n                                </li>\n                                <li>\n                                  <a\n                                    class=\"dropdown-item border-radius-md\"\n                                    href=\"javascript:;\"\n                                    @click=\"\n                                      confirmModal(\n                                        block.id,\n                                        'Вы уверены, что хотите удалить элемент?'\n                                      )\n                                    \"\n                                    >Удалить</a\n                                  >\n                                </li>\n                              </ul>\n                            </div>\n                          </div>\n\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            22 DEC 7:20 PM\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            People care about how you see the world, how you\n                            think, what motivates you, what you’re struggling\n                            with or afraid of.\n                          </p>\n                          <span class=\"badge badge-sm bg-gradient-success\"\n                            >Design</span\n                          >\n                        </div>\n                      </div>\n\n                      <!-- -->\n\n                      <div class=\"timeline-block mb-3\">\n                        <span class=\"timeline-step bg-dark\">\n                          <i class=\"ni ni-html5 text-danger text-gradient\"></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\n                            New order #1832412\n                          </h6>\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            21 DEC 11 PM\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            People care about how you see the world, how you\n                            think, what motivates you, what you’re struggling\n                            with or afraid of.\n                          </p>\n                          <span class=\"badge badge-sm bg-gradient-danger\"\n                            >Order</span\n                          >\n                          <span class=\"badge badge-sm bg-gradient-danger\"\n                            >#1832412</span\n                          >\n                        </div>\n                      </div>\n                      <div class=\"timeline-block mb-3\">\n                        <span class=\"timeline-step bg-dark\">\n                          <i class=\"ni ni-cart text-info text-gradient\"></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\n                            Server payments for April\n                          </h6>\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            21 DEC 9:34 PM\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            People care about how you see the world, how you\n                            think, what motivates you, what you’re struggling\n                            with or afraid of.\n                          </p>\n                          <span class=\"badge badge-sm bg-gradient-info\"\n                            >Server</span\n                          >\n                          <span class=\"badge badge-sm bg-gradient-info\"\n                            >Payments</span\n                          >\n                        </div>\n                      </div>\n                      <div class=\"timeline-block mb-3\">\n                        <span class=\"timeline-step bg-dark\">\n                          <i\n                            class=\"ni ni-credit-card text-warning text-gradient\"\n                          ></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\n                            New card added for order #4395133\n                          </h6>\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            20 DEC 2:20 AM\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            People care about how you see the world, how you\n                            think, what motivates you, what you’re struggling\n                            with or afraid of.\n                          </p>\n                          <span class=\"badge badge-sm bg-gradient-warning\"\n                            >Card</span\n                          >\n                          <span class=\"badge badge-sm bg-gradient-warning\"\n                            >#4395133</span\n                          >\n                          <span class=\"badge badge-sm bg-gradient-warning\"\n                            >Priority</span\n                          >\n                        </div>\n                      </div>\n                      <div class=\"timeline-block mb-3\">\n                        <span class=\"timeline-step bg-dark\">\n                          <i\n                            class=\"ni ni-key-25 text-primary text-gradient\"\n                          ></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\n                            Unlock packages for development\n                          </h6>\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            18 DEC 4:54 AM\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            People care about how you see the world, how you\n                            think, what motivates you, what you’re struggling\n                            with or afraid of.\n                          </p>\n                          <span class=\"badge badge-sm bg-gradient-primary\"\n                            >Development</span\n                          >\n                        </div>\n                      </div>\n                      <div class=\"timeline-block\">\n                        <span class=\"timeline-step bg-dark\">\n                          <i\n                            class=\"ni ni-archive-2 text-success text-gradient\"\n                          ></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\n                            New message unread\n                          </h6>\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            16 DEC\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            People care about how you see the world, how you\n                            think, what motivates you, what you’re struggling\n                            with or afraid of.\n                          </p>\n                          <span class=\"badge badge-sm bg-gradient-success\"\n                            >Message</span\n                          >\n                        </div>\n                      </div>\n                      <div class=\"timeline-block\">\n                        <span class=\"timeline-step bg-dark\">\n                          <i\n                            class=\"ni ni-check-bold text-info text-gradient\"\n                          ></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\n                            Notifications unread\n                          </h6>\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            15 DEC\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            People care about how you see the world, how you\n                            think, what motivates you, what you’re struggling\n                            with or afraid of.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"timeline-block\">\n                        <span class=\"timeline-step bg-dark\">\n                          <i class=\"ni ni-box-2 text-warning text-gradient\"></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\n                            New request\n                          </h6>\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            14 DEC\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            People care about how you see the world, how you\n                            think, what motivates you, what you’re struggling\n                            with or afraid of.\n                          </p>\n                          <span class=\"badge badge-sm bg-gradient-warning\"\n                            >Request</span\n                          >\n                          <span class=\"badge badge-sm bg-gradient-warning\"\n                            >Priority</span\n                          >\n                        </div>\n                      </div>\n                      <div class=\"timeline-block\">\n                        <span class=\"timeline-step bg-dark\">\n                          <i class=\"ni ni-controller text-white\"></i>\n                        </span>\n                        <div class=\"timeline-content\">\n                          <h6 class=\"text-white text-sm font-weight-bold mb-0\">\n                            Controller issues\n                          </h6>\n                          <p\n                            class=\"\n                              text-secondary\n                              font-weight-bold\n                              text-xs\n                              mt-1\n                              mb-0\n                            \"\n                          >\n                            13 DEC\n                          </p>\n                          <p class=\"text-secondary text-sm mt-3 mb-2\">\n                            People care about how you see the world, how you\n                            think, what motivates you, what you’re struggling\n                            with or afraid of.\n                          </p>\n                          <span class=\"badge badge-sm bg-gradient-dark\"\n                            >Controller</span\n                          >\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Modal -->\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n  </div>\n</template>\n\n<script>\nimport ModerateProjectsTable from \"./components/ModerateProjectsTable\";\nimport VsudInput from \"@/components/VsudInput.vue\";\nimport VsudTextarea from \"@/components/VsudTextarea.vue\";\nimport VsudButton from \"@/components/VsudButton.vue\";\nimport VsudTimelineBlock from \"@/components/VsudTimelineBlock.vue\";\nimport getProjectTypes from \"@/assets/js/getProjectTypes.js\";\nimport getProjectBlocks from \"@/assets/js/getProjectBlocks.js\";\nimport TwitterIcon from \"@/components/Icon/Twitter\";\nimport TelegramIcon from \"@/components/Icon/Telegram\";\nimport DiscordIcon from \"@/components/Icon/Discord\";\nimport MediumIcon from \"@/components/Icon/Medium\";\nimport YoutubeIcon from \"@/components/Icon/Youtube\";\n\nimport confirmModal from \"@/components/modal/confirmModal.js\";\n\nimport { ref } from \"vue\";\nimport { useRoute } from \"vue-router\";\n\nexport default {\n  name: \"edit-product-block\",\n  components: {\n    ModerateProjectsTable,\n    VsudInput,\n    VsudButton,\n    VsudTextarea,\n    VsudTimelineBlock,\n    getProjectTypes,\n    getProjectBlocks,\n    TwitterIcon,\n    TelegramIcon,\n    DiscordIcon,\n    MediumIcon,\n    YoutubeIcon,\n    confirmModal,\n  },\n  data() {\n    return {\n      project: {\n        name: \"\",\n        type: 1,\n        keys: \"\",\n        url: \"\",\n        twitter: \"\",\n        discord: \"\",\n        youtube: \"\",\n        telegram: \"\",\n        medium: \"\",\n        description: \"\",\n      },\n    };\n  },\n\n  setup() {\n    const types = ref([]);\n    types.value = getProjectTypes();\n    const blocks = ref([]);\n    const route = useRoute();\n    const projectId = route.params.projectId;\n    console.log(projectId);\n    blocks.value = getProjectBlocks(projectId);\n    return { types, blocks };\n  },\n  methods: {\n    sendData() {\n      axios.get(\"/sanctum/csrf-cookie\").then((response) => {\n        axios\n          .post(\"/api/add-project\", {\n            name: this.project.name,\n            type: this.project.type,\n            keys: this.project.keys,\n            url: this.project.url,\n            twitter: this.project.twitter,\n            discord: this.project.discord,\n            youtube: this.project.youtube,\n            telegram: this.project.telegram,\n            medium: this.project.medium,\n            description: this.description,\n          })\n          .then((r) => {\n            this.$router.push({ name: \"Products\" });\n            //this.$router.go()\n            //this.$emit(\"socialsReload\");\n          })\n          .catch((err) => {\n            console.log(err.response);\n            this.registerError = \"Ошибка сохранений проекта\";\n            alert(this.registerError);\n          });\n      });\n    },\n  },\n};\n</script>\n<style scoped>\n.dropdown-menu,\n.dropend .dropdown-menu {\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\n    0 8px 9px -5px rgb(20 20 20 / 6%);\n  cursor: pointer;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropdown-menu[data-v-a9d8c052],\n.dropend .dropdown-menu[data-v-a9d8c052] {\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\n    0 8px 9px -5px rgb(20 20 20 / 6%);\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/views/components/ModerateProjectsTable.vue"],"names":[],"mappings":";AAkTA;;EAEE;qCACmC;EACnC,eAAe;AACjB","sourcesContent":["<template>\n  <div class=\"mb-4 col-xl-12 col-md-6 mb-xl-0 pb-4\">\n    <router-link :to=\"{ name: 'Add Product' }\">\n      <place-holder-horisontal-card\n        :title=\"{ text: 'Добавить проект', variant: 'h6' }\"\n      />\n    </router-link>\n  </div>\n\n  <div class=\"card mb-4\">\n    <div class=\"card-header pb-0\">\n      <h6>Криптопроекты</h6>\n    </div>\n    <div class=\"card-body px-0 pt-0 pb-2\">\n      <div class=\"row\" v-if=\"is_liveSearch\">\n        <div class=\"col-6\">\n          <label class=\"form-label pl-3\">Поиск проекта</label>\n          <div class=\"input-group pl-3\">\n            <input\n              id=\"liveSearchReferers\"\n              name=\"liveSearchReferers\"\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"начните что-то писать...\"\n              v-model=\"searchTerm\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"table-responsive p-0\">\n        <table class=\"table align-items-center justify-content-center mb-0\">\n          <thead>\n            <tr>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                \"\n              >\n                Проект\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Рейтинг\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Пользовательский интерес\n              </th>\n              <th\n                class=\"\n                  text-uppercase text-secondary text-xxs\n                  font-weight-bolder\n                  opacity-7\n                  ps-2\n                  text-center\n                \"\n              >\n                Соцсети\n              </th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for=\"item in table.list\" :key=\"item\">\n              <td>\n                <div class=\"d-flex px-2\">\n                  <div>\n                    <img\n                      :src=\"item.logo_url\"\n                      class=\"avatar avatar-sm rounded-circle me-2\"\n                      alt=\"spotify\"\n                      v-if=\"item.logo_url\"\n                    />\n                  </div>\n                  <div class=\"my-auto d-flex\">\n                    <h6 class=\"mb-0 text-sm\">\n                      {{ item.name }}\n                      <a\n                        :href=\"item.website_url\"\n                        traget=\"_blank\"\n                        :title=\"item.website_name\"\n                        ><i class=\"fas fa-link ml-2\" v-if=\"item.website_url\"></i\n                      ></a>\n                    </h6>\n                  </div>\n                </div>\n              </td>\n              <td class=\"align-middle text-center\">\n                <div class=\"d-flex align-items-center justify-content-center\">\n                  <span class=\"me-2 text-xs font-weight-bold\"\n                    >{{ item.rating }}%</span\n                  >\n                  <div>\n                    <vsud-progress-plus\n                      variant=\"gradient\"\n                      :percentage=\"item.rating\"\n                    />\n                  </div>\n                </div>\n              </td>\n              <td class=\"align-middle text-center\">\n                <p class=\"text-sm font-weight-bold mb-0\">\n                  {{ item.num_tg_users }}\n                </p>\n              </td>\n              <td class=\"align-middle text-center\">\n                <div class=\"inline-flex\">\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.twitter\"\n                    v-if=\"item.twitter\"\n                  >\n                    <twitter-icon size=\"18px\"></twitter-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.discord\"\n                    v-if=\"item.discord\"\n                  >\n                    <discord-icon size=\"18px\" class=\"ml-2\"></discord-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.youtube\"\n                    v-if=\"item.youtube\"\n                  >\n                    <youtube-icon size=\"18px\" class=\"ml-2\"></youtube-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.telegram\"\n                    v-if=\"item.telegram\"\n                  >\n                    <telegram-icon size=\"18px\" class=\"ml-2\"></telegram-icon>\n                  </a>\n                  <a\n                    class=\"text-xs font-weight-bold\"\n                    target=\"_blank\"\n                    :href=\"item.medium\"\n                    v-if=\"item.medium\"\n                  >\n                    <medium-icon size=\"18px\" class=\"ml-2\"></medium-icon>\n                  </a>\n                </div>\n              </td>\n              <td class=\"align-middle\">\n                <button\n                  class=\"btn btn-link text-secondary mb-0\"\n                  v-if=\"is_liveSearch\"\n                  data-bs-toggle=\"dropdown\"\n                  aria-expanded=\"true\"\n                  :id=\"'project-dropdown' + item.id\"\n                >\n                  <i class=\"fa fa-ellipsis-v text-xs\" aria-hidden=\"true\"></i>\n                </button>\n                <ul\n                  class=\"dropdown-menu px-2 py-3 ms-sm-n4 ms-n5\"\n                  :aria-labelledby=\"'project-dropdown' + item.id\"\n                  style=\"\"\n                >\n                  <li>\n                    <router-link\n                      class=\"dropdown-item border-radius-md\"\n                      :to=\"{\n                        name: 'Edit Product',\n                        params: { productId: item.id },\n                      }\"\n                      >Настроить</router-link\n                    >\n                  </li>\n                  <li>\n                    <a\n                      class=\"dropdown-item border-radius-md\"\n                      href=\"javascript:;\"\n                      >Изменить ключи</a\n                    >\n                  </li>\n                  <li>\n                    <a\n                      class=\"dropdown-item border-radius-md\"\n                      href=\"javascript:;\"\n                      >Удалить</a\n                    >\n                  </li>\n                </ul>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport VsudProgressPlus from \"../../components/VsudProgressPlus\";\nimport TwitterIcon from \"@/components/Icon/Twitter\";\nimport TelegramIcon from \"@/components/Icon/Telegram\";\nimport DiscordIcon from \"@/components/Icon/Discord\";\nimport MediumIcon from \"@/components/Icon/Medium\";\nimport YoutubeIcon from \"@/components/Icon/Youtube\";\nimport PlaceHolderHorisontalCard from \"@/Cards/PlaceHolderHorisontalCard.vue\";\n\nimport { reactive, ref, computed, watch } from \"vue\";\nimport { FontAwesomeIcon } from \"@fortawesome/vue-fontawesome\";\n\nexport default {\n  name: \"moderate-projects-table\",\n  components: {\n    VsudProgressPlus,\n    TwitterIcon,\n    TelegramIcon,\n    DiscordIcon,\n    MediumIcon,\n    YoutubeIcon,\n    FontAwesomeIcon,\n    PlaceHolderHorisontalCard,\n  },\n  props: {\n    is_liveSearch: {\n      type: Boolean,\n      default: true,\n    },\n    top: {\n      type: Number,\n      default: 0,\n    },\n  },\n  setup(props) {\n    const searchTerm = ref(\"\"); // Search text\n    // Fake data\n\n    const data = reactive({\n      rows: [],\n    });\n    /**\n     * Get server data request\n     */\n    const myRequest = (keyword) => {\n      axios.get(\"/sanctum/csrf-cookie\").then((response) => {\n        axios\n          .post(\"/api/get-projects/\" + props.top, {\n            filter: keyword,\n          })\n          .then((r) => {\n            console.log(r.data);\n            data.rows = r.data;\n            //this.$emit(\"accountsReload\");\n          })\n          .catch((err) => {\n            console.log(\"Fetch error\", err.response);\n            const registerError =\n              \"Неизвестная ошибка при полученнии списка проектов\";\n            alert(registerError);\n          });\n      });\n    };\n\n    const table = reactive({\n      list: computed(() => {\n        return data.rows;\n      }),\n      totalRecordCount: computed(() => {\n        return data.rows.length;\n      }),\n    });\n    if (props.is_liveSearch) {\n      watch(\n        () => searchTerm.value,\n        (val) => {\n          myRequest(val);\n        }\n      );\n    }\n    // Get data on first rendering\n    myRequest(\"\");\n    console.log(table);\n    return {\n      searchTerm,\n      table,\n    };\n  },\n};\n</script>\n<style scoped>\n.dropdown-menu,\n.dropend .dropdown-menu {\n  box-shadow: 0 8px 26px -4px rgb(20 20 20 / 15%),\n    0 8px 9px -5px rgb(20 20 20 / 6%);\n  cursor: pointer;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductBlock_vue_vue_type_style_index_0_id_3ef9ddb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductBlock_vue_vue_type_style_index_0_id_3ef9ddb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductBlock_vue_vue_type_style_index_0_id_3ef9ddb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.4.17
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param {string} str
   * @returns {string}
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * @param {NodeList | HTMLCollection | NamedNodeMap | DOMTokenList} nodeList
   * @returns {array}
   */

  const toArray = nodeList => Array.prototype.slice.call(nodeList);
  /**
   * Standardize console warnings
   * @param {string | array} message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardize console errors
   * @param {string} message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param {string} message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  const isPromise = arg => arg && Promise.resolve(arg) === arg;
  const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {string} paramName
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {string} paramName
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {string} paramName
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };

  const swalPrefix = 'swal2-';
  /**
   * @param {string[]} items
   * @returns {object}
   */

  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'no-war']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */

  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };
  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };
  /**
   * @returns {HTMLElement | null}
   */


  const getPopup = () => elementByClass(swalClasses.popup);
  /**
   * @returns {HTMLElement | null}
   */

  const getIcon = () => elementByClass(swalClasses.icon);
  /**
   * @returns {HTMLElement | null}
   */

  const getTitle = () => elementByClass(swalClasses.title);
  /**
   * @returns {HTMLElement | null}
   */

  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  /**
   * @returns {HTMLElement | null}
   */

  const getImage = () => elementByClass(swalClasses.image);
  /**
   * @returns {HTMLElement | null}
   */

  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  /**
   * @returns {HTMLElement | null}
   */

  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  /**
   * @returns {HTMLElement | null}
   */

  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  /**
   * @returns {HTMLElement | null}
   */

  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  /**
   * @returns {HTMLElement | null}
   */

  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  /**
   * @returns {HTMLElement | null}
   */

  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  /**
   * @returns {HTMLElement | null}
   */

  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  /**
   * @returns {HTMLElement | null}
   */

  const getActions = () => elementByClass(swalClasses.actions);
  /**
   * @returns {HTMLElement | null}
   */

  const getFooter = () => elementByClass(swalClasses.footer);
  /**
   * @returns {HTMLElement | null}
   */

  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  /**
   * @returns {HTMLElement | null}
   */

  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  /**
   * @returns {HTMLElement[]}
   */

  const getFocusableElements = () => {
    const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex'));
      const tabindexB = parseInt(b.getAttribute('tabindex'));

      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  /**
   * @returns {boolean}
   */

  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };
  /**
   * @returns {boolean}
   */

  const isToast = () => {
    return getPopup() && hasClass(getPopup(), swalClasses.toast);
  };
  /**
   * @returns {boolean}
   */

  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */

  const setInnerHtml = (elem, html) => {
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */

  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */

  const removeCustomClasses = (elem, params) => {
    toArray(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */


  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */

  const getInput = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }

    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));

      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */

  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */

  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */

  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */

  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | null}
   */

  const getDirectChildByClass = (elem, className) => {
    const childNodes = toArray(elem.childNodes);

    for (let i = 0; i < childNodes.length; i++) {
      if (hasClass(childNodes[i], className)) {
        return childNodes[i];
      }
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */

  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} display
   */

  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  /**
   * @param {HTMLElement} elem
   */

  const hide = elem => {
    elem.style.display = 'none';
  };
  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */

  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement} */
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */

  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };
  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  /**
   * @returns {boolean}
   */

  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  /**
   * @returns {boolean}
   */

  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);
  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  /**
   * @param {number} timer
   * @param {boolean} reset
   */

  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };
  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise}
   */


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
  /**
   * @returns {boolean}
   */

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    globalState.currentInstance.resetValidationMessage();
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */

    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    /** @type {HTMLOutputElement} */

    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */

    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };
  };
  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */


  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;
  /**
   * @param {SweetAlertOptions} params
   */


  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };
  /**
   * @param {HTMLElement} targetElement
   */


  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
    noWarMessageForRussians(container, params);
  };
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions} params
   */

  const noWarMessageForRussians = (container, params) => {
    if (params.toast) {
      return;
    } // This message is targeted at people who are corrupted by propaganda, everybody else
    // is already against war either silently or actively.
    //
    // The point is to wrap the truth-bomb into a patriotic title so they will actually click it
    // and listen to the uncomfortable truth about the war from the people they love or respect.


    const message = getRandomElement([{
      text: 'ШВАРЦЕНЕГГЕР обратился <br> к РУССКОМУ НАРОДУ о войне',
      // Arnold is loved in Russia by all people including those who are for this war
      // His speech might change the mind of those who are brainwashed by propaganda
      youtubeId: 'fWClXZd9c78'
    }, {
      text: 'РУССКИЙ ПАТРИОТ <br> открыл главную тайну спецоперации',
      // In this video one of the most famous Russian nationalist leaders, Dmitry Demushkin,
      // explains that this war has no sense and produces the exact opposite result of what
      // it was intended to do.
      youtubeId: '_RjBNkn88yA'
    }, {
      text: 'ГЕРОЙ НОВОРОССИИ СТРЕЛКОВ <br> дал оценку ходу спецоперации',
      // In this video Igor Girkin, who played a key role in the annexation of Crimea,
      // explains that this war has failed already and all possible outcomes are bad for Russia.
      youtubeId: 'yUmzQT4C8JY'
    }, {
      text: 'ФИНСКИЙ ДРУГ РОССИИ <br> говорит ПО-РУССКИ о спецоперации',
      youtubeId: 'hkCYb6edUrQ'
    }, {
      text: 'ЮРИЙ ПОДОЛЯКА честно <br> о генералах РУССКОЙ АРМИИ',
      youtubeId: 'w4-_8BJKfpk'
    }, {
      text: 'Полковник ФСБ СТРЕЛКОВ <br> об успехах РОССИИ в спецоперации',
      youtubeId: 'saK5UTKroDA'
    }]); // The message will only be shown to Russian users visiting Russian sites

    if (navigator.language === 'ru' && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
      const noWar = document.createElement('div');
      noWar.className = swalClasses['no-war'];
      setInnerHtml(noWar, "<a href=\"https://www.youtube.com/watch?v=".concat(message.youtubeId, "\" target=\"_blank\">").concat(message.text, "</a>"));
      container.appendChild(noWar);
      container.style.paddingTop = '4em';
    }
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    } // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    } // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };
  /**
   * @param {object} param
   * @param {HTMLElement} target
   */

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    } // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };
  /**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */


  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      // Chrome, Safari and Opera
      animation: 'animationend' // Standard syntax

    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render all the buttons

    renderButtons(actions, loader, params); // Loader

    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };
  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */

  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }
  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */


  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }
  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */


  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */


  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */


  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>
  /** @type {InputClass[]} */

  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]); // set attributes

      setAttributes(inputClass, params.inputAttributes); // set class

      inputContainer.className = swalClasses[inputClass];

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };
  /**
   * @param {HTMLInputElement} input
   */


  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };
  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */


  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput(getPopup(), inputClass);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */


  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };
  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */


  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;

      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }

      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };
  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */


  const getInputContainer = inputType => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };
  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */


  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = "".concat(inputValue);
    } else if (!isPromise(inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof inputValue, "\""));
    }
  };
  /** @type Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input> */


  const renderInputType = {};
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };
  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };
  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */


  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };
  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */


  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };
  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };
  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */


  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    /**
     * @param {HTMLElement} el
     * @returns {number}
     */

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight); // https://github.com/sweetalert2/sweetalert2/issues/2291


    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    } // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    } // No content
    else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      hide(icon);
      return;
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgroundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */

    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  const errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const setContent = (icon, params) => {
    let oldContent = icon.innerHTML;
    let newContent;

    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }

    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };
  /**
   * @param {string} content
   * @returns {string}
   */


  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };
  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };
  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */


  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }

    return lineEl;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170

    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Color

    if (params.color) {
      popup.style.color = params.color;
    } // Background


    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };
  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */


    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */

  const getSwalParams = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        result[paramName] = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalButtons = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    const inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   */


  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */

      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };
  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */


  const showWarningsForAttributes = (el, allowedAttributes) => {
    toArray(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },

    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }
  /**
   * @param {SweetAlertOptions} params
   */


  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups();
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */

  const addBottomPaddingForTallPopups = () => {
    const ua = navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    if (iOSSafari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */


  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylus(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */


  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   * @returns {HTMLElement | null}
   */

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  /**
   * @param {GlobalState} globalState
   */

  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */

  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };
  /**
   * @param {SweetAlertOptions} innerParams
   * @param {number} index
   * @param {number} increment
   */

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {function} dismissWith
   */

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406


    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams);
    } // TAB
    else if (e.key === 'Tab') {
      handleTab(e, innerParams);
    } // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key);
    } // ESC
    else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleEnter = (instance, e, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }

    if (e.target && instance.getInput() && e.target instanceof HTMLElement && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    } // Cycle to the next button


    if (!e.shiftKey) {
      setFocus(innerParams, btnIndex, 1);
    } // Cycle to the prev button
    else {
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };
  /**
   * @param {string} key
   */


  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (document.activeElement instanceof HTMLElement && ![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;

    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];

      if (!buttonToFocus) {
        return;
      }

      if (buttonToFocus instanceof HTMLButtonElement && isVisible(buttonToFocus)) {
        break;
      }
    }

    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   * @param {function} dismissWith
   */


  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }

  const triggerClosePopup = instance => {
    const popup = getPopup();

    if (!popup) {
      return false;
    }

    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: ".concat(param));
      }
    });
    return validUpdatableParams;
  };

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }
  /**
   * @param {SweetAlert2} instance
   */

  const disposeSwal = instance => {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)
    // @ts-ignore

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };
  /**
   * @param {SweetAlert2} instance
   */


  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    // @ts-ignore
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };
  /**
   * @param {object} obj
   * @param {SweetAlert2} instance
   */


  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    handleAwaitingPromise: handleAwaitingPromise,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    update: update,
    _destroy: _destroy
  });

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  const handleConfirmOrDenyWithInput = (instance, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams.input) {
      return error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
    }

    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  const handleInputValidator = (instance, inputValue, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received

      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      instance.closePopup({
        isDenied: true,
        value
      });
    }
  };

  const succeedWith = (instance, value) => {
    instance.closePopup({
      isConfirmed: true,
      value
    });
  };

  const rejectWith = (instance, error$$1) => {
    instance.rejectPromise(error$$1);
  };

  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received

      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      succeedWith(instance, value);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };
  /**
   * @param {*} innerParams
   * @returns {boolean}
   */


  const isAnyButtonShown = innerParams => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  let currentInstance;

  class SweetAlert {
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this; // @ts-ignore

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      }); // @ts-ignore

      const promise = currentInstance._main(currentInstance.params);

      privateProps.promise.set(this, promise);
    }

    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));

      if (globalState.currentInstance) {
        // @ts-ignore
        globalState.currentInstance._destroy();

        if (isModal()) {
          unsetAriaHidden();
        }
      }

      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams); // clear the previous timer

      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      } // clear the restore focus timeout


      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  }

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };
  /**
   * @param {SweetAlert2} instance
   * @returns {DomCache}
   */


  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };
  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {function} dismissWith
   */


  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */


  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */


  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }; // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function () {
      if (currentInstance) {
        return currentInstance[key](...arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.4.17';

  const Swal = SweetAlert; // @ts-ignore

  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-no-war{display:flex;position:fixed;z-index:1061;top:0;left:0;align-items:center;justify-content:center;width:100%;height:3.375em;background:#20232a;color:#fff;text-align:center}.swal2-no-war a{color:#61dafb;text-decoration:none}.swal2-no-war a:hover{text-decoration:underline}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),

/***/ "./resources/js/components/VsudTextarea.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/VsudTextarea.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VsudTextarea_vue_vue_type_template_id_8c6dfb5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VsudTextarea.vue?vue&type=template&id=8c6dfb5e */ "./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e");
/* harmony import */ var _VsudTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VsudTextarea.vue?vue&type=script&lang=js */ "./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VsudTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VsudTextarea_vue_vue_type_template_id_8c6dfb5e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/VsudTextarea.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/VsudTimelineBlock.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/VsudTimelineBlock.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VsudTimelineBlock_vue_vue_type_template_id_9e328176__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VsudTimelineBlock.vue?vue&type=template&id=9e328176 */ "./resources/js/components/VsudTimelineBlock.vue?vue&type=template&id=9e328176");
/* harmony import */ var _VsudTimelineBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VsudTimelineBlock.vue?vue&type=script&lang=js */ "./resources/js/components/VsudTimelineBlock.vue?vue&type=script&lang=js");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VsudTimelineBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VsudTimelineBlock_vue_vue_type_template_id_9e328176__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/VsudTimelineBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/EditProductBlock.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/EditProductBlock.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditProductBlock_vue_vue_type_template_id_3ef9ddb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProductBlock.vue?vue&type=template&id=3ef9ddb2&scoped=true */ "./resources/js/views/EditProductBlock.vue?vue&type=template&id=3ef9ddb2&scoped=true");
/* harmony import */ var _EditProductBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProductBlock.vue?vue&type=script&lang=js */ "./resources/js/views/EditProductBlock.vue?vue&type=script&lang=js");
/* harmony import */ var _EditProductBlock_vue_vue_type_style_index_0_id_3ef9ddb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css */ "./resources/js/views/EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EditProductBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditProductBlock_vue_vue_type_template_id_3ef9ddb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3ef9ddb2"],['__file',"resources/js/views/EditProductBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/components/ModerateProjectsTable.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/components/ModerateProjectsTable.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModerateProjectsTable_vue_vue_type_template_id_a9d8c052_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true */ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true");
/* harmony import */ var _ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModerateProjectsTable.vue?vue&type=script&lang=js */ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js");
/* harmony import */ var _ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css */ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css");
/* harmony import */ var d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,d_projects_laravel_collective_money_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModerateProjectsTable_vue_vue_type_template_id_a9d8c052_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a9d8c052"],['__file',"resources/js/views/components/ModerateProjectsTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTextarea_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudTextarea.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/VsudTimelineBlock.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/VsudTimelineBlock.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTimelineBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTimelineBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudTimelineBlock.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTimelineBlock.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/EditProductBlock.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/views/EditProductBlock.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditProductBlock.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e":
/*!********************************************************************************!*\
  !*** ./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTextarea_vue_vue_type_template_id_8c6dfb5e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTextarea_vue_vue_type_template_id_8c6dfb5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudTextarea.vue?vue&type=template&id=8c6dfb5e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTextarea.vue?vue&type=template&id=8c6dfb5e");


/***/ }),

/***/ "./resources/js/components/VsudTimelineBlock.vue?vue&type=template&id=9e328176":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/VsudTimelineBlock.vue?vue&type=template&id=9e328176 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTimelineBlock_vue_vue_type_template_id_9e328176__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VsudTimelineBlock_vue_vue_type_template_id_9e328176__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VsudTimelineBlock.vue?vue&type=template&id=9e328176 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VsudTimelineBlock.vue?vue&type=template&id=9e328176");


/***/ }),

/***/ "./resources/js/views/EditProductBlock.vue?vue&type=template&id=3ef9ddb2&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/EditProductBlock.vue?vue&type=template&id=3ef9ddb2&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductBlock_vue_vue_type_template_id_3ef9ddb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductBlock_vue_vue_type_template_id_3ef9ddb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditProductBlock.vue?vue&type=template&id=3ef9ddb2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=template&id=3ef9ddb2&scoped=true");


/***/ }),

/***/ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_template_id_a9d8c052_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_template_id_a9d8c052_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=template&id=a9d8c052&scoped=true");


/***/ }),

/***/ "./resources/js/views/EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditProductBlock_vue_vue_type_style_index_0_id_3ef9ddb2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/EditProductBlock.vue?vue&type=style&index=0&id=3ef9ddb2&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModerateProjectsTable_vue_vue_type_style_index_0_id_a9d8c052_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/components/ModerateProjectsTable.vue?vue&type=style&index=0&id=a9d8c052&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_EditProductBlock_vue.js.map