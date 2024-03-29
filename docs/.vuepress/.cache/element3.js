import {
  Fragment,
  Teleport,
  Transition,
  TransitionGroup,
  computed,
  createApp,
  createBlock,
  createCommentVNode,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isRef,
  isVNode,
  mergeProps,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  openBlock,
  provide,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  toRef,
  toRefs,
  unref,
  vModelRadio,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-4GQGKK36.js";
import {
  toDisplayString
} from "./chunk-LPVRJKAB.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-VZ572NU4.js";

// dep:element3
init_define_MZ_ZOOM_OPTIONS();

// node_modules/element3/dist/element3-ui.esm-bundler.js
init_define_MZ_ZOOM_OPTIONS();
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = Number(document.documentMode);
var trim = function(string2) {
  return (string2 || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
var camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, "Moz$1");
};
var on = function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
}();
var off = function() {
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent("on" + event, handler);
      }
    };
  }
}();
var once = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};
function hasClass(el, cls) {
  if (!el || !cls)
    return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
  }
}
function addClass(el, cls) {
  if (!el)
    return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
function removeClass(el, cls) {
  if (!el || !cls)
    return;
  var classes = cls.split(" ");
  var curClass = " " + el.className + " ";
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
var getStyle = ieVersion < 9 ? function(element, styleName) {
  if (!element || !styleName)
    return null;
  styleName = camelCase(styleName);
  if (styleName === "float") {
    styleName = "styleFloat";
  }
  try {
    switch (styleName) {
      case "opacity":
        try {
          return element.filters.item("alpha").opacity / 100;
        } catch (e) {
          return 1;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function(element, styleName) {
  if (!element || !styleName)
    return null;
  styleName = camelCase(styleName);
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    var computed2 = document.defaultView.getComputedStyle(element, "");
    return element.style[styleName] || computed2 ? computed2[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};
var isScroll = (el, vertical) => {
  const determinedDirection = vertical !== null || vertical !== void 0;
  const overflow = determinedDirection ? vertical ? getStyle(el, "overflow-y") : getStyle(el, "overflow-x") : getStyle(el, "overflow");
  return overflow.match(/(scroll|auto)/);
};
var getScrollContainer = (el, vertical) => {
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};
var isInContainer = (el, container) => {
  if (!el || !container)
    return false;
  const elRect = el.getBoundingClientRect();
  let containerRect;
  if ([window, document, document.documentElement, null, void 0].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};
var TransitionFn = class {
  beforeEnter(el) {
    addClass(el, "collapse-transition");
    !el.dataset && (el.dataset = {});
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.style.height = "0";
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  }
  enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + "px";
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = "";
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
    el.style.overflow = "hidden";
  }
  afterEnter(el) {
    removeClass(el, "collapse-transition");
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
  }
  beforeLeave(el) {
    if (!el.dataset)
      el.dataset = {};
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = el.scrollHeight + "px";
    el.style.overflow = "hidden";
  }
  leave(el) {
    if (el.scrollHeight !== 0) {
      addClass(el, "collapse-transition");
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  }
  afterLeave(el) {
    removeClass(el, "collapse-transition");
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
};
var ElCollapseTransition = (props2, context) => {
  const transitions = new TransitionFn();
  const data = {
    onBeforeEnter: transitions.beforeEnter,
    onEnter: transitions.enter,
    onAfterEnter: transitions.afterEnter,
    onBeforeLeave: transitions.beforeLeave,
    onLeave: transitions.leave,
    onAfterLeave: transitions.afterLeave
  };
  return h(Transition, data, context.slots);
};
ElCollapseTransition.install = function(app) {
  app.component("ElCollapseTransition", ElCollapseTransition);
};
var ElRow = {
  name: "ElRow",
  componentName: "ElRow",
  setup(props2) {
    const style = computed(() => {
      const ret = {};
      if (props2.gutter) {
        ret.marginLeft = `-${props2.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    });
    provide("el-row", getCurrentInstance());
    return {
      style
    };
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    gutter: {
      type: Number,
      default: 0
    },
    type: String,
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "top"
    }
  },
  render() {
    return h(this.tag, {
      class: ["el-row", this.justify !== "start" ? `is-justify-${this.justify}` : "", this.align !== "top" ? `is-align-${this.align}` : "", {
        "el-row--flex": this.type === "flex"
      }],
      style: this.style
    }, this.$slots.default && this.$slots.default());
  }
};
ElRow.install = function(app) {
  app.component(ElRow.name, ElRow);
};
var script$1B = {
  name: "ElCol",
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: "div"
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  setup(props2, {
    slots
  }) {
    const {
      tag
    } = toRefs(props2);
    const gutter = computed(() => {
      let {
        parent
      } = getCurrentInstance();
      while (parent && parent.type.componentName !== "ElRow") {
        parent = parent.parent;
      }
      return parent ? parent.props.gutter : 0;
    });
    return () => {
      const classList = [];
      const style = {};
      if (unref(gutter)) {
        style.paddingLeft = unref(gutter) / 2 + "px";
        style.paddingRight = style.paddingLeft;
      }
      ["span", "offset", "pull", "push"].forEach((prop) => {
        if (unref(toRefs(props2)[prop]) || unref(toRefs(props2)[prop]) === 0) {
          classList.push(prop !== "span" ? `el-col-${prop}-${unref(toRefs(props2)[prop])}` : `el-col-${unref(toRefs(props2)[prop])}`);
        }
      });
      ["xs", "sm", "md", "lg", "xl"].forEach((size) => {
        if (typeof unref(toRefs(props2)[size]) === "number") {
          classList.push(`el-col-${size}-${unref(toRefs(props2)[size])}`);
        } else if (typeof unref(toRefs(props2)[size]) === "object") {
          const propsData = unref(toRefs(props2)[size]);
          Object.keys(propsData).forEach((prop) => {
            classList.push(prop !== "span" ? `el-col-${size}-${prop}-${propsData[prop]}` : `el-col-${size}-${propsData[prop]}`);
          });
        }
      });
      return h(unref(tag), {
        class: ["el-col", classList],
        style
      }, slots.default ? slots.default() : "");
    };
  }
};
script$1B.__file = "packages/col/Col.vue";
script$1B.install = function(app) {
  app.component(script$1B.name, script$1B);
};
var script$1A = {
  name: "ElContainer",
  props: {
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props2, {
    slots
  }) {
    const {
      direction
    } = toRefs(props2);
    const isVertical = computed(() => {
      if (direction === "vertical") {
        return true;
      } else if (direction === "horizontal") {
        return false;
      }
      if (slots && slots.default) {
        return slots.default().some((vNode) => {
          const tag = vNode.type && vNode.type.name;
          return tag === "ElHeader" || tag === "ElFooter";
        });
      } else {
        return false;
      }
    });
    return {
      isVertical
    };
  }
};
function render$1q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("section", {
    class: ["el-container", {
      "is-vertical": $setup.isVertical
    }]
  }, [renderSlot(_ctx.$slots, "default")], 2);
}
script$1A.render = render$1q;
script$1A.__file = "src/components/Container/src/Container.vue";
script$1A.install = function(app) {
  app.component(script$1A.name, script$1A);
};
var script$1z = {
  name: "ElHeader",
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
function render$1p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("header", {
    class: "el-header",
    style: {
      height: $props.height
    }
  }, [renderSlot(_ctx.$slots, "default")], 4);
}
script$1z.render = render$1p;
script$1z.__file = "packages/header/Header.vue";
script$1z.install = function(app) {
  app.component(script$1z.name, script$1z);
};
var script$1y = {
  name: "ElFooter",
  componentName: "ElFooter",
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
function render$1o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("footer", {
    class: "el-footer",
    style: {
      height: $props.height
    }
  }, [renderSlot(_ctx.$slots, "default")], 4);
}
script$1y.render = render$1o;
script$1y.__file = "packages/footer/Footer.vue";
script$1y.install = function(app) {
  app.component(script$1y.name, script$1y);
};
var script$1x = {
  name: "ElAside",
  componentName: "ElAside",
  props: {
    width: {
      type: String,
      default: "300px"
    }
  }
};
function render$1n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("aside", {
    class: "el-aside",
    style: {
      width: $props.width
    }
  }, [renderSlot(_ctx.$slots, "default")], 4);
}
script$1x.render = render$1n;
script$1x.__file = "packages/aside/Aside.vue";
script$1x.install = function(app) {
  app.component(script$1x.name, script$1x);
};
var script$1w = {
  name: "ElMain",
  componentName: "ElMain"
};
var _hoisted_1$Y = {
  class: "el-main"
};
function render$1m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("main", _hoisted_1$Y, [renderSlot(_ctx.$slots, "default")]);
}
script$1w.render = render$1m;
script$1w.__file = "packages/main/Main.vue";
script$1w.install = function(app) {
  app.component(script$1w.name, script$1w);
};
var script$1v = {
  name: "ElIcon",
  props: {
    name: String
  }
};
function render$1l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("i", {
    class: `el-icon-${$props.name}`
  }, null, 2);
}
script$1v.render = render$1l;
script$1v.__file = "packages/icon/Icon.vue";
script$1v.install = function(app) {
  app.component(script$1v.name, script$1v);
};
var props$7 = {
  size: {
    type: String,
    validator(val) {
      return ["medium", "small", "mini", ""].includes(val);
    }
  },
  type: {
    type: String,
    validator(val) {
      return [
        "primary",
        "success",
        "warning",
        "danger",
        "info",
        "text"
      ].includes(val);
    }
  },
  nativeType: {
    type: String,
    default: "button"
  },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  icon: String
};
function useGlobalOptions() {
  const instance2 = getCurrentInstance();
  if (!instance2) {
    console.warn("useGlobalOptions must be call in setup function");
    return;
  }
  return instance2.appContext.config.globalProperties.$ELEMENT || {};
}
function setupGlobalOptions(opts = {}) {
  return (app) => {
    app.config.globalProperties.$ELEMENT = {
      size: opts.size || "",
      zIndex: opts.zIndex || 2e3
    };
  };
}
var script$1u = defineComponent({
  name: "ElButton",
  props: props$7,
  setup(props2) {
    const {
      size,
      disabled
    } = toRefs(props2);
    const buttonSize = useButtonSize(size);
    const buttonDisabled = useButtonDisabled(disabled);
    const classes = useClasses$5({
      props: props2,
      size: buttonSize,
      disabled: buttonDisabled
    });
    return {
      buttonDisabled,
      classes
    };
  }
});
var useClasses$5 = ({
  props: props2,
  size,
  disabled
}) => {
  return computed(() => {
    return [size.value ? `el-button--${size.value}` : "", props2.type ? `el-button--${props2.type}` : "", {
      "is-plain": props2.plain,
      "is-round": props2.round,
      "is-circle": props2.circle,
      "is-loading": props2.loading,
      "is-disabled": disabled.value
    }];
  });
};
var useButtonDisabled = (disabled) => {
  return computed(() => {
    const elForm = inject("elForm", null);
    return (disabled === null || disabled === void 0 ? void 0 : disabled.value) || (elForm === null || elForm === void 0 ? void 0 : elForm.disabled);
  });
};
var useButtonSize = (size) => {
  const globalConfig = useGlobalOptions();
  return computed(() => {
    const elFormItem = inject("elFormItem", null);
    return (size === null || size === void 0 ? void 0 : size.value) || (elFormItem === null || elFormItem === void 0 ? void 0 : elFormItem.elFormItemSize) || globalConfig.size;
  });
};
var _hoisted_1$X = {
  key: 0,
  class: "el-icon-loading",
  "data-testid": "loadingIcon"
};
var _hoisted_2$B = {
  key: 2
};
function render$1k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    class: ["el-button", _ctx.classes],
    type: _ctx.nativeType,
    disabled: _ctx.buttonDisabled || _ctx.loading
  }, [_ctx.loading ? (openBlock(), createBlock("i", _hoisted_1$X)) : _ctx.icon ? (openBlock(), createBlock("i", {
    key: 1,
    class: _ctx.icon,
    "data-testid": "icon"
  }, null, 2)) : createCommentVNode("v-if", true), _ctx.$slots.default ? (openBlock(), createBlock("span", _hoisted_2$B, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)], 10, ["type", "disabled"]);
}
script$1u.render = render$1k;
script$1u.__file = "src/components/Button/src/Button.vue";
script$1u.install = function(app) {
  app.component(script$1u.name, script$1u);
};
var script$1t = {
  name: "ElButtonGroup"
};
var _hoisted_1$W = {
  class: "el-button-group"
};
function render$1j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$W, [renderSlot(_ctx.$slots, "default")]);
}
script$1t.render = render$1j;
script$1t.__file = "packages/button-group/ButtonGroup.vue";
script$1t.install = function(app) {
  app.component(script$1t.name, script$1t);
};
var script$1s = {
  name: "ElLink",
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: true
    },
    href: String,
    icon: String
  },
  emits: ["click"],
  setup(props2, {
    emit
  }) {
    const classes = useClasses$4(props2);
    const handleClick = (event) => {
      if (props2.disabled)
        return;
      if (props2.href)
        return;
      emit("click", event);
    };
    return {
      classes,
      handleClick
    };
  }
};
var useClasses$4 = (props2) => {
  return ["el-link", props2.type ? `el-link--${props2.type}` : "", props2.disabled && "is-disabled", props2.underline && !props2.disabled && "is-underline"];
};
var _hoisted_1$V = {
  key: 1,
  class: "el-link--inner"
};
function render$1i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("a", mergeProps({
    class: $setup.classes,
    href: $props.disabled ? null : $props.href
  }, _ctx.$attrs, {
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleClick && $setup.handleClick(...args))
  }), [$props.icon ? (openBlock(), createBlock("i", {
    key: 0,
    class: $props.icon
  }, null, 2)) : createCommentVNode("v-if", true), _ctx.$slots.default ? (openBlock(), createBlock("span", _hoisted_1$V, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)], 16, ["href"]);
}
script$1s.render = render$1i;
script$1s.__file = "src/components/Link/src/Link.vue";
script$1s.install = function(app) {
  app.component(script$1s.name, script$1s);
};
var props$6 = {
  modelValue: {
    type: [String, Number, Symbol, Boolean, Array],
    default: ""
  },
  label: {
    type: [String, Number, Symbol, Boolean, Array],
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  border: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: ""
  }
};
var script$1r = defineComponent({
  name: "ElRadio",
  componentName: "ElRadio",
  props: props$6,
  emits: ["update:modelValue", "update:value", "change"],
  setup(props2, context) {
    const focus = ref(false);
    const {
      elForm,
      elFormItem
    } = useInject();
    const {
      isGroup,
      radioGroup
    } = useCheckGroup$1();
    const radioValue = computed({
      get: () => isGroup ? radioGroup.proxy.modelValue : props2.modelValue,
      set: (value) => {
        changeHandler(value);
      }
    });
    const {
      isDisabled,
      radioSize,
      tabIndex
    } = useStyle$6({
      props: props2,
      isGroup,
      radioGroup,
      elForm,
      elFormItem,
      radioValue
    });
    const labelClass = useLabelClass({
      props: props2,
      radioSize,
      radioValue,
      isDisabled,
      focus
    });
    const changeHandler = (value) => {
      context.emit("update:modelValue", value);
      isGroup && radioGroup.emit("update:modelValue", value);
      context.emit("change", value);
      isGroup && radioGroup.emit("change", value);
    };
    return {
      focus,
      radioValue,
      isDisabled,
      radioSize,
      tabIndex,
      labelClass,
      changeHandler
    };
  }
});
var useInject = () => {
  const elForm = inject("elForm", {});
  const elFormItem = inject("elFormItem", {});
  return {
    elForm,
    elFormItem
  };
};
var useCheckGroup$1 = () => {
  const {
    parent
  } = getCurrentInstance();
  const isGroup = parent.type.name === "ElRadioGroup";
  const radioGroup = isGroup ? parent : null;
  return {
    isGroup,
    radioGroup
  };
};
var useStyle$6 = ({
  props: props2,
  isGroup,
  radioGroup,
  elForm,
  elFormItem,
  radioValue
}) => {
  const {
    proxy,
    parent: {
      proxy: {
        radioGroupSize
      }
    }
  } = getCurrentInstance();
  const elFormDisable = elForm.disabled;
  const isDisabled = computed(() => isGroup ? radioGroup.props.disabled || props2.disabled || elFormDisable : props2.disabled || elFormDisable);
  const radioSize = computed(() => props2.size || radioGroupSize || elForm && elFormItem.elFormItemSize || (proxy.$ELEMENT || {}).size);
  const tabIndex = computed(() => isDisabled.value || isGroup && radioValue.value !== props2.label ? -1 : 0);
  return {
    isDisabled,
    radioSize,
    tabIndex
  };
};
var useLabelClass = ({
  props: props2,
  radioSize,
  radioValue,
  isDisabled,
  focus
}) => computed(() => [props2.border && radioSize.value ? `el-radio--${radioSize.value}` : "", {
  "is-checked": radioValue.value === props2.label
}, {
  "is-disabled": isDisabled.value
}, {
  "is-focus": focus.value
}, {
  "is-bordered": props2.border
}]);
var _hoisted_1$U = createVNode("span", {
  class: "el-radio__inner"
}, null, -1);
function render$1h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("label", {
    role: "radio",
    class: ["el-radio", _ctx.labelClass],
    "aria-checked": _ctx.radioValue === _ctx.label,
    "aria-disabled": _ctx.isDisabled,
    tabindex: _ctx.tabIndex
  }, [createVNode("span", {
    class: ["el-radio__input", {
      "is-disabled": _ctx.isDisabled,
      "is-checked": _ctx.radioValue === _ctx.label
    }]
  }, [_hoisted_1$U, withDirectives(createVNode("input", {
    type: "radio",
    class: "el-radio__original",
    value: _ctx.label,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.radioValue = $event),
    name: _ctx.name,
    "aria-hidden": "true",
    disabled: _ctx.isDisabled,
    onFocus: _cache[2] || (_cache[2] = ($event) => _ctx.focus = true),
    onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focus = false),
    tabindex: "-1"
  }, null, 40, ["value", "name", "disabled"]), [[vModelRadio, _ctx.radioValue]])], 2), createVNode("span", {
    class: "el-radio__label",
    onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {
    }, ["stop"]))
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.label), 1)])], 32)], 10, ["aria-checked", "aria-disabled", "tabindex"]);
}
script$1r.render = render$1h;
script$1r.__file = "src/components/Radio/src/Radio.vue";
script$1r.install = function(app) {
  app.component(script$1r.name, script$1r);
};
var props$5 = {
  label: [String, Number, Symbol, Boolean],
  disabled: Boolean,
  name: String
};
var script$1q = {
  name: "ElRadioButton",
  componentName: "ElRadioButton",
  props: props$5,
  setup(props2) {
    const {
      radioGroup
    } = useCheckGroup();
    const {
      label,
      disabled
    } = toRefs(props2);
    const focus = ref(false);
    let value = useModel$2(radioGroup);
    const handleChange = useChange(radioGroup, value);
    const {
      style,
      size,
      isDisabled
    } = useStyle$5({
      disabled,
      radioGroup
    });
    const {
      classes,
      isChecked,
      tabIndex
    } = useClasses$3({
      size,
      isDisabled,
      value,
      label,
      focus,
      radioGroup
    });
    return {
      value,
      handleChange,
      isDisabled,
      tabIndex,
      classes,
      isChecked,
      style
    };
  }
};
var useCheckGroup = () => {
  const {
    parent
  } = getCurrentInstance();
  const isGroup = parent.type.name === "ElRadioGroup";
  const radioGroup = isGroup ? parent : null;
  return {
    isGroup,
    radioGroup
  };
};
var useModel$2 = (radioGroup) => {
  const value = ref(radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.props.modelValue);
  watch(() => radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.props.modelValue, (val) => {
    value.value = val;
  });
  return value;
};
var useChange = (radioGroup, value) => {
  const handleChange = () => {
    radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.emit("update:modelValue", value.value);
    radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.emit("change", value.value);
  };
  return handleChange;
};
var useStyle$5 = ({
  disabled,
  radioGroup
}) => {
  const globalConfig = useGlobalOptions();
  const isDisabled = computed(() => {
    const elForm = inject("elForm", {});
    return (disabled === null || disabled === void 0 ? void 0 : disabled.value) || (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.props.disabled) || elForm.disabled;
  });
  const size = computed(() => {
    const elFormItem = inject("elFormItem", {});
    return (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.props.size) || (elFormItem === null || elFormItem === void 0 ? void 0 : elFormItem.elFormItemSize) || globalConfig.size;
  });
  const style = computed(() => {
    return {
      backgroundColor: (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.props.fill) || "",
      borderColor: (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.props.fill) || "",
      boxShadow: radioGroup !== null && radioGroup !== void 0 && radioGroup.props.fill ? `-1px 0 0 0 ${radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.props.fill}` : "",
      color: (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.props.textColor) || ""
    };
  });
  return {
    isDisabled,
    size,
    style
  };
};
var useClasses$3 = ({
  size,
  isDisabled,
  focus,
  value,
  label,
  radioGroup
}) => {
  const isChecked = computed(() => {
    return value.value === label.value;
  });
  const tabIndex = computed(() => {
    return isDisabled.value || radioGroup && value.value !== label.value ? -1 : 0;
  });
  const classes = computed(() => {
    return [size.value ? "el-radio-button--" + size.value : "", {
      "is-active": isChecked.value
    }, {
      "is-disabled": isDisabled.value
    }, {
      "is-focus": focus.value
    }];
  });
  return {
    isChecked,
    classes,
    tabIndex
  };
};
function render$1g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("label", {
    class: ["el-radio-button", $setup.classes],
    role: "radio",
    "aria-checked": $setup.isChecked,
    "aria-disabled": $setup.isDisabled,
    tabindex: $setup.tabIndex,
    onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => $setup.value = $setup.isDisabled ? $setup.value : _ctx.label, ["stop", "prevent"]), ["space"]))
  }, [withDirectives(createVNode("input", {
    class: "el-radio-button__orig-radio",
    type: "radio",
    onChange: _cache[1] || (_cache[1] = (...args) => $setup.handleChange && $setup.handleChange(...args)),
    value: _ctx.label,
    name: _ctx.name,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.value = $event),
    disabled: $setup.isDisabled,
    onFocus: _cache[3] || (_cache[3] = ($event) => _ctx.focus = true),
    onBlur: _cache[4] || (_cache[4] = ($event) => _ctx.focus = false),
    tabindex: "-1"
  }, null, 40, ["value", "name", "disabled"]), [[vModelRadio, $setup.value]]), createVNode("span", {
    class: "el-radio-button__inner",
    style: $setup.isChecked ? $setup.style : null,
    onKeydown: _cache[5] || (_cache[5] = withModifiers(() => {
    }, ["stop"]))
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.label), 1)])], 36)], 42, ["aria-checked", "aria-disabled", "tabindex"]);
}
script$1q.render = render$1g;
script$1q.__file = "src/components/RadioButton/src/RadioButton.vue";
script$1q.install = function(app) {
  app.component(script$1q.name, script$1q);
};
var props$4 = {
  modelValue: [String, Number, Symbol, Boolean],
  size: {
    type: String,
    validator(val) {
      return ["medium", "small", "mini", ""].includes(val);
    }
  },
  fill: {
    type: String,
    default: "#409EFF"
  },
  textColor: {
    type: String,
    default: "#ffffff"
  },
  disabled: Boolean
};
function mitt(n) {
  return {
    all: n = n || new Map(),
    on: function(t2, e) {
      var i = n.get(t2);
      i && i.push(e) || n.set(t2, [e]);
    },
    off: function(t2, e) {
      var i = n.get(t2);
      i && i.splice(i.indexOf(e) >>> 0, 1);
    },
    emit: function(t2, e) {
      (n.get(t2) || []).slice().map(function(n2) {
        n2(e);
      }), (n.get("*") || []).slice().map(function(n2) {
        n2(t2, e);
      });
    }
  };
}
var DISPATCH = "dispatch";
var BROADCAST = "broadcast";
var wrapper = Symbol("wrapper");
var emitter = mitt();
function useEmitter() {
  const currentComponentInstance = getCurrentInstance();
  function on2(type2, handler) {
    const handleWrapper = (e) => {
      const {
        value,
        type: type3,
        emitComponentInstance
      } = e;
      if (type3 === BROADCAST) {
        if (isChildComponent(currentComponentInstance, emitComponentInstance)) {
          handler && handler(...value);
        }
      } else if (type3 === DISPATCH) {
        if (isChildComponent(emitComponentInstance, currentComponentInstance)) {
          handler && handler(...value);
        }
      } else {
        handler && handler(...value);
      }
    };
    handler[wrapper] = handleWrapper;
    emitter.on(type2, handleWrapper);
  }
  function broadcast2(type2, ...args) {
    emitter.emit(type2, {
      type: BROADCAST,
      emitComponentInstance: currentComponentInstance,
      value: args
    });
  }
  function dispatch(type2, ...args) {
    emitter.emit(type2, {
      type: DISPATCH,
      emitComponentInstance: currentComponentInstance,
      value: args
    });
  }
  function off2(type2, handler) {
    emitter.off(type2, handler[wrapper]);
  }
  function once2(type2, handler) {
    const handleOn = (...args) => {
      handler && handler(...args);
      off2(type2, handleOn);
    };
    on2(type2, handleOn);
  }
  return {
    on: on2,
    broadcast: broadcast2,
    dispatch,
    off: off2,
    once: once2
  };
}
function isChildComponent(componentChild, componentParent) {
  const parentUId = componentParent.uid;
  while (componentChild && ((_componentChild = componentChild) === null || _componentChild === void 0 ? void 0 : (_componentChild$paren = _componentChild.parent) === null || _componentChild$paren === void 0 ? void 0 : _componentChild$paren.uid) !== parentUId) {
    var _componentChild, _componentChild$paren;
    componentChild = componentChild.parent;
  }
  return Boolean(componentChild);
}
var script$1p = defineComponent({
  name: "ElRadioGroup",
  props: props$4,
  emits: ["update:modelValue", "change"],
  setup(props2) {
    const {
      size,
      modelValue
    } = toRefs(props2);
    const globalConfig = useGlobalOptions();
    const elFormItem = inject("elFormItem", {});
    const {
      dispatch
    } = useEmitter();
    watch(modelValue, (v) => {
      dispatch("el.form.change", v);
    });
    const radioGroupSize = useRadioGroupSize({
      size,
      elFormItem,
      globalConfig
    });
    return {
      radioGroupSize
    };
  }
});
var useRadioGroupSize = ({
  size,
  elFormItem,
  globalConfig
}) => {
  return computed(() => {
    return (size === null || size === void 0 ? void 0 : size.value) || (elFormItem === null || elFormItem === void 0 ? void 0 : elFormItem.elFormItemSize) || globalConfig.size;
  });
};
var _hoisted_1$T = {
  class: "el-radio-group",
  role: "radiogroup"
};
function render$1f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$T, [renderSlot(_ctx.$slots, "default")]);
}
script$1p.render = render$1f;
script$1p.__file = "src/components/RadioGroup/src/RadioGroup.vue";
script$1p.install = function(app) {
  app.component(script$1p.name, script$1p);
};
true ? Object.freeze({}) : {};
true ? Object.freeze([]) : [];
var onRE = /^on[^a-z]/;
var isOn = (key) => onRE.test(key);
var isArray$1 = Array.isArray;
function usePropUtils() {
  return {
    isAfferentProp: isAfferentProp()
  };
}
function isAfferentProp() {
  const {
    vnode
  } = getCurrentInstance();
  return (propKey) => {
    return typeof vnode.props[propKey] !== "undefined";
  };
}
function useModel$1() {
  const {
    emit,
    props: props2
  } = getCurrentInstance();
  const elCheckboxGroup = inject("elCheckboxGroup", {
    props: {}
  });
  const {
    dispatch
  } = useEmitter();
  const state = reactive({
    modelValue: null
  });
  watchEffect(() => {
    state.modelValue = elCheckboxGroup.props.modelValue || props2.modelValue;
  });
  const model = computed({
    get() {
      return state.modelValue;
    },
    set({
      label,
      checked
    }) {
      if (label && isArray$1(model.value)) {
        const modelValue = model.value;
        const labelIndex = modelValue.indexOf(label);
        labelIndex === -1 && checked === true && modelValue.push(label);
        labelIndex !== -1 && checked === false && modelValue.splice(labelIndex, 1);
        state.modelValue = modelValue;
        emit("update:modelValue", modelValue);
        dispatch("update:modelValue", modelValue);
      } else {
        const modelValue = checked ? props2.trueLabel : props2.falseLabel;
        state.modelValue = modelValue;
        emit("update:modelValue", modelValue);
      }
    }
  });
  async function handleChange() {
    await nextTick();
    emit("change", model.value);
    dispatch("change", model.value);
  }
  return {
    model,
    handleChange
  };
}
function useAria() {
  const {
    props: props2,
    vnode
  } = getCurrentInstance();
  onMounted(() => {
    if (props2.indeterminate) {
      vnode.el.setAttribute("aria-controls", props2.controls);
    }
  });
}
function useCheckSelected({
  model
}) {
  const {
    props: props2
  } = getCurrentInstance();
  const {
    isAfferentProp: isAfferentProp2
  } = usePropUtils();
  const checkbox = ref(null);
  onMounted(() => {
    isAfferentProp2("checked") && (model.value = {
      label: props2.label,
      checked: props2.checked
    });
  });
  const isChecked = computed(() => {
    const _isChecked = isArray$1(model.value) ? model.value.indexOf(props2.label) !== -1 : model.value === props2.trueLabel;
    checkbox.value && (checkbox.value.checked = _isChecked);
    return _isChecked;
  });
  return {
    isChecked,
    checkbox
  };
}
function useSize$1() {
  const elCheckboxGroup = inject("elCheckboxGroup", {
    props: {},
    proxy: {}
  });
  const {
    props: props2,
    proxy
  } = getCurrentInstance();
  const checkboxSize = computed(() => {
    return props2.size || elCheckboxGroup.proxy.checkboxGroupSize || (proxy.$ELEMENT || {}).size;
  });
  return checkboxSize;
}
function useLimit({
  model
}) {
  const elCheckboxGroup = inject("elCheckboxGroup", {
    props: {},
    proxy: {}
  });
  const {
    props: props2
  } = getCurrentInstance();
  const isLimit = computed(() => {
    if (elCheckboxGroup.props.modelValue) {
      const modelValueLength = elCheckboxGroup.props.modelValue.length;
      const min = elCheckboxGroup.props.min;
      const max = elCheckboxGroup.props.max;
      return modelValueLength <= min && model.value.indexOf(props2.label) !== -1 || modelValueLength >= max && model.value.indexOf(props2.label) === -1;
    } else {
      return false;
    }
  });
  return isLimit;
}
function useDisabled$1({
  isLimit
}) {
  const elCheckboxGroup = inject("elCheckboxGroup", {
    props: {},
    proxy: {}
  });
  const {
    props: props2
  } = getCurrentInstance();
  const isDisabled = computed(() => {
    return props2.disabled || elCheckboxGroup.proxy.checkboxGroupDisabled || isLimit.value;
  });
  return isDisabled;
}
function useBorder() {
  const elCheckboxGroup = inject("elCheckboxGroup", {
    props: {},
    proxy: {}
  });
  const {
    props: props2
  } = getCurrentInstance();
  const isBorder = computed(() => {
    return props2.border || elCheckboxGroup.props.border;
  });
  return isBorder;
}
function useActiveStyle() {
  const elCheckboxGroup = inject("elCheckboxGroup", {
    props: {},
    proxy: {}
  });
  return {
    backgroundColor: elCheckboxGroup.props.fill || "",
    borderColor: elCheckboxGroup.props.fill || "",
    color: elCheckboxGroup.props.textColor || "",
    "box-shadow": "-1px 0 0 0 " + elCheckboxGroup.props.fill
  };
}
var script$1o = {
  name: "ElCheckbox",
  props: {
    modelValue: [String, Number, Boolean, Symbol, Array],
    label: [String, Number, Boolean, Symbol],
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: {
      type: [String, Number, Boolean],
      default: true
    },
    falseLabel: {
      type: [String, Number, Boolean],
      default: false
    },
    id: String,
    controls: String,
    border: Boolean,
    size: String
  },
  emits: ["update:modelValue", "change"],
  setup() {
    const state = reactive({
      focus: false
    });
    useAria();
    const {
      model,
      handleChange
    } = useModel$1();
    const isLimit = useLimit({
      model
    });
    const {
      isChecked,
      checkbox
    } = useCheckSelected({
      model
    });
    const checkboxSize = useSize$1();
    const isDisabled = useDisabled$1({
      isLimit
    });
    const isBorder = useBorder();
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      checkbox,
      model,
      isDisabled,
      checkboxSize,
      isChecked,
      handleChange,
      isBorder
    });
  }
};
var _hoisted_1$S = createVNode("span", {
  class: "el-checkbox__inner"
}, null, -1);
var _hoisted_2$A = {
  key: 0,
  class: "el-checkbox__label"
};
function render$1e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("label", {
    class: ["el-checkbox", [$setup.isBorder && $setup.checkboxSize ? "el-checkbox--" + $setup.checkboxSize : "", {
      "is-disabled": $setup.isDisabled
    }, {
      "is-bordered": $setup.isBorder
    }, {
      "is-checked": $setup.isChecked
    }]],
    role: "checkbox",
    id: $props.id,
    "aria-checked": $setup.isChecked,
    "aria-disabled": $setup.isDisabled
  }, [createVNode("span", {
    class: ["el-checkbox__input", {
      "is-disabled": $setup.isDisabled,
      "is-checked": $setup.isChecked,
      "is-indeterminate": $props.indeterminate,
      "is-focus": _ctx.focus
    }],
    tabindex: $props.indeterminate ? 0 : false,
    role: $props.indeterminate ? "checkbox" : false,
    "aria-checked": $props.indeterminate ? "mixed" : false
  }, [_hoisted_1$S, createVNode("input", {
    class: "el-checkbox__original",
    type: "checkbox",
    ref: "checkbox",
    "aria-hidden": $props.indeterminate ? "true" : "false",
    name: $props.name,
    disabled: $setup.isDisabled,
    "true-value": $props.trueLabel,
    "false-value": $props.falseLabel,
    value: $props.label,
    onChange: _cache[1] || (_cache[1] = (...args) => $setup.handleChange && $setup.handleChange(...args)),
    onInput: _cache[2] || (_cache[2] = ($event) => $setup.model = {
      label: $props.label,
      checked: $event.target.checked
    }),
    onFocus: _cache[3] || (_cache[3] = ($event) => _ctx.focus = true),
    onBlur: _cache[4] || (_cache[4] = ($event) => _ctx.focus = false)
  }, null, 40, ["aria-hidden", "name", "disabled", "true-value", "false-value", "value"])], 10, ["tabindex", "role", "aria-checked"]), _ctx.$slots.default || $props.label ? (openBlock(), createBlock("span", _hoisted_2$A, [renderSlot(_ctx.$slots, "default"), !_ctx.$slots.default ? (openBlock(), createBlock(Fragment, {
    key: 0
  }, [createTextVNode(toDisplayString($props.label), 1)], 64)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)], 10, ["id", "aria-checked", "aria-disabled"]);
}
script$1o.render = render$1e;
script$1o.__file = "packages/checkbox/Checkbox.vue";
script$1o.install = function(app) {
  app.component(script$1o.name, script$1o);
};
var script$1n = {
  name: "ElCheckboxButton",
  props: {
    modelValue: [String, Number, Boolean, Symbol, Array],
    label: [String, Number, Boolean, Symbol],
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: {
      type: [String, Number, Boolean],
      default: true
    },
    falseLabel: {
      type: [String, Number, Boolean],
      default: false
    },
    id: String,
    controls: String,
    border: Boolean,
    size: String
  },
  emits: ["update:modelValue", "change"],
  setup() {
    const state = reactive({
      focus: false
    });
    useAria();
    const {
      model,
      handleChange
    } = useModel$1();
    const isLimit = useLimit({
      model
    });
    const {
      isChecked,
      checkbox
    } = useCheckSelected({
      model
    });
    const checkboxSize = useSize$1();
    const isDisabled = useDisabled$1({
      isLimit
    });
    const activeStyle = useActiveStyle();
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      checkbox,
      model,
      isDisabled,
      checkboxSize,
      isChecked,
      handleChange,
      activeStyle
    });
  }
};
function render$1d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("label", {
    class: ["el-checkbox-button", [$setup.checkboxSize ? "el-checkbox-button--" + $setup.checkboxSize : "", {
      "is-disabled": $setup.isDisabled
    }, {
      "is-checked": $setup.isChecked
    }, {
      "is-focus": _ctx.focus
    }]],
    role: "checkbox",
    id: $props.id,
    "aria-checked": $setup.isChecked,
    "aria-disabled": $setup.isDisabled
  }, [createVNode("input", {
    class: "el-checkbox-button__original",
    type: "checkbox",
    ref: "checkbox",
    "aria-hidden": $props.indeterminate ? "true" : "false",
    name: $props.name,
    disabled: $setup.isDisabled,
    "true-value": $props.trueLabel,
    "false-value": $props.falseLabel,
    modelValue: $setup.model,
    value: $props.label,
    onChange: _cache[1] || (_cache[1] = (...args) => $setup.handleChange && $setup.handleChange(...args)),
    onInput: _cache[2] || (_cache[2] = ($event) => $setup.model = {
      label: $props.label,
      checked: $event.target.checked
    }),
    onFocus: _cache[3] || (_cache[3] = ($event) => _ctx.focus = true),
    onBlur: _cache[4] || (_cache[4] = ($event) => _ctx.focus = false)
  }, null, 40, ["aria-hidden", "name", "disabled", "true-value", "false-value", "modelValue", "value"]), _ctx.$slots.default || $props.label ? (openBlock(), createBlock("span", {
    key: 0,
    class: "el-checkbox-button__inner",
    style: $setup.isChecked ? $setup.activeStyle : null
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString($props.label), 1)])], 4)) : createCommentVNode("v-if", true)], 10, ["id", "aria-checked", "aria-disabled"]);
}
script$1n.render = render$1d;
script$1n.__file = "packages/checkbox-button/CheckboxButton.vue";
script$1n.install = function(app) {
  app.component(script$1n.name, script$1n);
};
var script$1m = {
  name: "ElCheckboxGroup",
  props: {
    modelValue: Array,
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String,
    border: Boolean
  },
  emits: ["update:modelValue", "change"],
  setup(props2, {
    emit
  }) {
    const elForm = inject("elForm", {
      props: {},
      ctx: {}
    });
    const elFormItem = inject("elFormItem", {});
    provide("elCheckboxGroup", getCurrentInstance());
    const {
      dispatch,
      on: on2
    } = useEmitter();
    const checkboxGroupSize = computed(() => {
      return props2.size || elFormItem.elFormItemSize;
    });
    const checkboxGroupDisabled = computed(() => {
      return props2.disabled || elForm.disabled;
    });
    on2("update:modelValue", (v) => {
      emit("update:modelValue", v);
      dispatch("el.form.change", v);
    });
    on2("change", (v) => {
      emit("change", v);
    });
    return {
      checkboxGroupSize,
      checkboxGroupDisabled
    };
  }
};
var _hoisted_1$R = {
  class: "el-checkbox-group",
  role: "group",
  "aria-label": "checkbox-group"
};
function render$1c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$R, [renderSlot(_ctx.$slots, "default")]);
}
script$1m.render = render$1c;
script$1m.__file = "packages/checkbox-group/CheckboxGroup.vue";
script$1m.install = function(app) {
  app.component(script$1m.name, script$1m);
};
var props$3 = {
  showWordLimit: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: String
  },
  suffixIcon: {
    type: String
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: "text"
  },
  size: {
    type: String,
    validator: function(value) {
      return ["medium", "small", "mini", ""].includes(value);
    }
  },
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  resize: {
    type: String
  }
};
var hiddenTextarea;
var HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;
var CONTEXT_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue("box-sizing");
  const paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  return {
    contextStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows = null) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }
  const {
    paddingSize,
    borderSize,
    boxSizing,
    contextStyle
  } = calculateNodeStyling(targetElement);
  hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  let height = hiddenTextarea.scrollHeight;
  const result = {};
  if (boxSizing === "border-box") {
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    height = height - paddingSize;
  }
  hiddenTextarea.value = "";
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (minRows !== null) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (maxRows !== null) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
}
var useClass$2 = (inputSize, inputExceed, props2, attrs, slots) => {
  return computed(() => {
    const classes = [inputSize.value ? "el-input--" + inputSize.value : "", props2.type === "textarea" ? "el-textarea" : "el-input"];
    if (attrs.disabled) {
      classes.push("is-disabled");
    }
    if (inputExceed.value) {
      classes.push("is-exceed");
    }
    if (slots.prepend || slots.append) {
      classes.push("el-input-group");
    }
    if (slots.append) {
      classes.push("el-input-group--append");
    }
    if (slots.prepend) {
      classes.push("el-input-group--prepend");
    }
    if (slots.prefix || props2.prefixIcon) {
      classes.push("el-input--prefix");
    }
    if (slots.suffix || props2.suffixIcon || slots.suffixIcon || attrs.clearable || attrs.showPassword) {
      classes.push("el-input--suffix");
    }
    return classes;
  });
};
var useInput = (props2, cxt, textarea) => {
  const input = ref(null);
  const elFormItem = inject("elFormItem", {});
  const elFormChange = inject("elForm.change", () => {
  });
  const {
    modelValue,
    size,
    suffixIcon,
    clearable,
    showPassword,
    showWordLimit
  } = toRefs(props2);
  const nativeInputValue = computed(() => {
    return modelValue.value === null || modelValue.value === void 0 ? "" : String(modelValue.value);
  });
  const textLength = computed(() => {
    if (typeof modelValue.value === "number") {
      return String(modelValue.value).length >= Number(cxt.attrs.maxlength) ? Number(cxt.attrs.maxlength) : String(modelValue.value).length;
    }
    return modelValue.value.length >= Number(cxt.attrs.maxlength) ? Number(cxt.attrs.maxlength) : modelValue.value.length;
  });
  const elFormItemSize = computed(() => {
    return elFormItem.elFormItemSize || "";
  });
  const inputSize = computed(() => {
    return (size === null || size === void 0 ? void 0 : size.value) || elFormItemSize.value;
  });
  const inputExceed = computed(() => {
    var _props$modelValue;
    return ((_props$modelValue = props2.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.length) >= Number(cxt.attrs.maxlength) ? true : false;
  });
  const getInput = () => computed({
    get: () => input.value ? input.value : textarea.value,
    set: (value) => {
      if (input !== null && input !== void 0 && input.value) {
        input.value.value = value;
      }
      if (textarea !== null && textarea !== void 0 && textarea.value) {
        textarea.value.value = value;
      }
    }
  });
  const clearValue = () => {
    cxt.emit("update:modelValue", "");
  };
  const setNativeInputValue = () => {
    const input2 = getInput();
    if (!input2)
      return;
    input2.value = nativeInputValue.value;
  };
  const getSuffixVisible = computed(() => {
    return cxt.slots.suffix || (suffixIcon === null || suffixIcon === void 0 ? void 0 : suffixIcon.value) || (clearable === null || clearable === void 0 ? void 0 : clearable.value) || (showPassword === null || showPassword === void 0 ? void 0 : showPassword.value) || (showWordLimit === null || showWordLimit === void 0 ? void 0 : showWordLimit.value);
  });
  onMounted(() => {
    setNativeInputValue(nativeInputValue.value);
  });
  watch(() => props2.modelValue, () => {
    setNativeInputValue();
    if (props2.validateEvent) {
      elFormChange();
    }
  });
  return {
    input,
    getInput,
    nativeInputValue,
    textLength,
    clearValue,
    inputSize,
    getSuffixVisible,
    inputExceed
  };
};
var useInputEvent = (emit) => {
  const handleInput = (event) => {
    emit("update:modelValue", event.target.value);
    emit("input", event.target.value);
  };
  const handleFocus = (event) => {
    emit("focus", event);
  };
  const handleBlur = (event) => emit("blur", event);
  const handleClear = () => {
    emit("update:modelValue", "");
    emit("clear");
  };
  const onChange = (event) => {
    emit("change", event.target.value);
  };
  return {
    handleInput,
    handleFocus,
    handleBlur,
    handleClear,
    onChange
  };
};
var useInputMethod = (element) => {
  const focus = () => {
    element.value.focus();
  };
  const blur = () => {
    element.value.blur();
  };
  const select = () => {
    element.value.select();
  };
  return {
    focus,
    blur,
    select
  };
};
var useTextarea = (props2) => {
  const textarea = ref(null);
  const {
    autosize,
    type: type2,
    resize
  } = toRefs(props2);
  const state = reactive({
    textareaCalcStyle: {}
  });
  const textareaStyle = computed(() => {
    return Object.assign({}, state.textareaCalcStyle, {
      resize: resize === null || resize === void 0 ? void 0 : resize.value
    });
  });
  watch(() => props2.modelValue, () => resizeTextarea());
  const resizeTextarea = () => {
    if (type2.value !== "textarea")
      return;
    if (!autosize.value) {
      state.textareaCalcStyle = {
        minHeight: calcTextareaHeight(textarea.value).minHeight
      };
      return;
    }
    const minRows = autosize.value.minRows;
    const maxRows = autosize.value.maxRows;
    state.textareaCalcStyle = calcTextareaHeight(textarea.value, minRows, maxRows);
  };
  return {
    textarea,
    textareaStyle,
    resizeTextarea
  };
};
var script$1l = defineComponent({
  name: "ElInput",
  inheritAttrs: false,
  props: props$3,
  emits: ["blur", "focus", "change", "input", "clear", "update:modelValue"],
  setup(props2, cxt) {
    const state = reactive({
      isVisiablePassword: false
    });
    const {
      inputSize
    } = useInput(props2, cxt);
    const {
      attrs,
      emit
    } = cxt;
    const {
      textarea,
      textareaStyle
    } = useTextarea(props2);
    const {
      input,
      textLength,
      getSuffixVisible,
      inputExceed,
      getInput
    } = useInput(props2, cxt, textarea);
    const classes = useClass$2(inputSize, inputExceed, props2, cxt.attrs, cxt.slots);
    const {
      handleInput,
      handleFocus,
      handleBlur,
      handleClear,
      onChange
    } = useInputEvent(emit);
    const {
      focus,
      select,
      blur
    } = useInputMethod(getInput());
    const togglePassword = () => state.isVisiablePassword = !state.isVisiablePassword;
    return {
      isVisiablePassword: toRef(state, "isVisiablePassword"),
      focus,
      select,
      blur,
      handleBlur,
      handleInput,
      handleFocus,
      togglePassword,
      onChange,
      getSuffixVisible,
      attrs,
      input,
      textarea,
      handleClear,
      textLength,
      textareaStyle,
      classes
    };
  }
});
var _hoisted_1$Q = {
  key: 0,
  class: "el-input-group__prepend"
};
var _hoisted_2$z = {
  key: 1,
  class: "el-input__prefix"
};
var _hoisted_3$s = {
  key: 2,
  class: "el-input__suffix"
};
var _hoisted_4$h = {
  class: "el-input__suffix-inner"
};
var _hoisted_5$d = {
  key: 3,
  class: "el-input__count"
};
var _hoisted_6$7 = {
  class: "el-input__count-inner"
};
var _hoisted_7$4 = {
  key: 3,
  class: "el-input-group__append"
};
var _hoisted_8$3 = {
  key: 0,
  class: "el-input__count"
};
function render$1b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    style: _ctx.$attrs.style,
    class: _ctx.classes
  }, [_ctx.type !== "textarea" ? (openBlock(), createBlock(Fragment, {
    key: 0
  }, [_ctx.$slots.prepend ? (openBlock(), createBlock("div", _hoisted_1$Q, [renderSlot(_ctx.$slots, "prepend")])) : createCommentVNode("v-if", true), createVNode("input", mergeProps({
    class: "el-input__inner",
    ref: "input"
  }, _ctx.$attrs, {
    onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
    onChange: _cache[3] || (_cache[3] = (...args) => _ctx.onChange && _ctx.onChange(...args)),
    type: _ctx.showPassword ? _ctx.isVisiablePassword ? "text" : "password" : _ctx.type,
    onInput: _cache[4] || (_cache[4] = (...args) => _ctx.handleInput && _ctx.handleInput(...args))
  }), null, 16, ["type"]), _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createBlock("span", _hoisted_2$z, [renderSlot(_ctx.$slots, "prefix"), _ctx.prefixIcon ? (openBlock(), createBlock("i", {
    key: 0,
    class: ["el-input__icon", _ctx.prefixIcon]
  }, null, 2)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), _ctx.getSuffixVisible ? (openBlock(), createBlock("span", _hoisted_3$s, [createVNode("span", _hoisted_4$h, [!_ctx.clearable || !_ctx.showPassword || !_ctx.showWordLimit ? (openBlock(), createBlock(Fragment, {
    key: 0
  }, [renderSlot(_ctx.$slots, "suffix"), _ctx.suffixIcon ? (openBlock(), createBlock("i", {
    key: 0,
    class: ["el-input__icon", _ctx.suffixIcon]
  }, null, 2)) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true), _ctx.clearable ? (openBlock(), createBlock("i", {
    key: 1,
    class: "el-input__icon el-icon-circle-close el-input__clear",
    onMousedown: _cache[5] || (_cache[5] = withModifiers(() => {
    }, ["prevent"])),
    onClick: _cache[6] || (_cache[6] = withModifiers((...args) => _ctx.handleClear && _ctx.handleClear(...args), ["prevent"]))
  }, null, 32)) : createCommentVNode("v-if", true), _ctx.showPassword ? (openBlock(), createBlock("i", {
    key: 2,
    class: "el-input__icon el-icon-view el-input__clear",
    onMousedown: _cache[7] || (_cache[7] = withModifiers(() => {
    }, ["prevent"])),
    onClick: _cache[8] || (_cache[8] = withModifiers((...args) => _ctx.togglePassword && _ctx.togglePassword(...args), ["prevent"]))
  }, null, 32)) : createCommentVNode("v-if", true), _ctx.showWordLimit ? (openBlock(), createBlock("span", _hoisted_5$d, [createVNode("span", _hoisted_6$7, toDisplayString(_ctx.textLength) + "/" + toDisplayString(_ctx.$attrs.maxlength), 1)])) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true), createCommentVNode(" \u540E\u7F6E\u5143\u7D20 "), _ctx.$slots.append ? (openBlock(), createBlock("div", _hoisted_7$4, [renderSlot(_ctx.$slots, "append")])) : createCommentVNode("v-if", true)], 64)) : (openBlock(), createBlock(Fragment, {
    key: 1
  }, [createVNode("textarea", mergeProps({
    class: "el-textarea__inner",
    ref: "textarea",
    style: _ctx.textareaStyle
  }, _ctx.$attrs, {
    onInput: _cache[9] || (_cache[9] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
    onBlur: _cache[10] || (_cache[10] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
    onFocus: _cache[11] || (_cache[11] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
    onChange: _cache[12] || (_cache[12] = (...args) => _ctx.onChange && _ctx.onChange(...args))
  }), null, 16), _ctx.showWordLimit ? (openBlock(), createBlock("span", _hoisted_8$3, toDisplayString(_ctx.modelValue.length) + "/" + toDisplayString(_ctx.$attrs.maxlength), 1)) : createCommentVNode("v-if", true)], 64))], 6);
}
script$1l.render = render$1b;
script$1l.__file = "src/components/Input/src/Input.vue";
script$1l.install = function(app) {
  app.component(script$1l.name, script$1l);
};
function useFocus(ref2) {
  return function focus() {
    if (isRef(ref2)) {
      ref2.value.focus();
    } else {
      const {
        proxy
      } = getCurrentInstance();
      proxy.$refs[ref2].focus();
    }
  };
}
var INTERVAL_TIME = 100;
var RepeatClick = {
  beforeMount(el, binding) {
    let startTime;
    let intervalId;
    const callHandler = () => binding.value && binding.value();
    const clearIntervalHandler = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
    const isMainKey = (e) => {
      return e.button === 0;
    };
    const handleMouseup = () => {
      if (Date.now() - startTime < INTERVAL_TIME) {
        callHandler();
      }
      clearIntervalHandler();
    };
    const handleMousedown = (e) => {
      if (!isMainKey(e))
        return;
      startTime = Date.now();
      once(document, "mouseup", handleMouseup);
      clearIntervalHandler();
      intervalId = setInterval(callHandler, INTERVAL_TIME);
    };
    on(el, "mousedown", handleMousedown);
  }
};
var script$1k = {
  name: "ElInputNumber",
  directives: {
    repeatClick: RepeatClick
  },
  components: {
    ElInput: script$1l
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    modelValue: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    size: {
      default: "",
      type: String
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ""
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      },
      default: void 0
    }
  },
  emits: ["change", "update:modelValue", "blur", "focus"],
  setup(props2, {
    emit
  }) {
    const {
      proxy
    } = getCurrentInstance();
    const {
      step,
      stepStrictly,
      max,
      min,
      modelValue,
      disabled,
      size,
      controls,
      controlsPosition,
      precision
    } = toRefs(props2);
    const state = reactive({
      currentValue: 0,
      userInput: null
    });
    const focus = useFocus("input");
    const getPrecision = (value) => {
      if (value === void 0)
        return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision2 = 0;
      if (dotPosition !== -1) {
        precision2 = valueString.length - dotPosition - 1;
      }
      return precision2;
    };
    const setCurrentValue = (newVal) => {
      const oldVal = state.currentValue;
      if (typeof newVal === "number" && precision.value !== void 0) {
        newVal = toPrecision(newVal, precision.value);
      }
      if (newVal >= max.value)
        newVal = max.value;
      if (newVal <= min.value)
        newVal = min.value;
      if (oldVal === newVal)
        return;
      state.userInput = null;
      emit("update:modelValue", newVal);
      emit("change", newVal, oldVal);
      state.currentValue = newVal;
    };
    const toPrecision = (num, precision2) => {
      if (precision2 === void 0)
        precision2 = numPrecision.value;
      return parseFloat(Math.round(num * Math.pow(10, precision2)) / Math.pow(10, precision2));
    };
    const _decrease = (val, step2) => {
      if (typeof val !== "number" && val !== void 0) {
        return state.currentValue;
      }
      const precisionFactor = Math.pow(10, numPrecision.value);
      return toPrecision((precisionFactor * val - precisionFactor * step2) / precisionFactor);
    };
    const _increase = (val, step2) => {
      if (typeof val !== "number" && val !== void 0) {
        return state.currentValue;
      }
      const precisionFactor = Math.pow(10, numPrecision.value);
      return toPrecision((precisionFactor * val + precisionFactor * step2) / precisionFactor);
    };
    const minDisabled = computed(() => {
      return _decrease(modelValue.value, step.value) < min.value;
    });
    const maxDisabled = computed(() => {
      return _increase(modelValue.value, step.value) > max.value;
    });
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(step.value);
      if (precision.value !== void 0) {
        if (stepPrecision > precision.value) {
          console.warn("[Element Warn][InputNumber]precision should not be less than the decimal places of step");
        }
        return precision.value;
      } else {
        return Math.max(getPrecision(modelValue.value), stepPrecision);
      }
    });
    const controlsAtRight = computed(() => controls.value && controlsPosition.value === "right");
    const _elFormItemSize = computed(() => {
      const elFormItem = inject("elFormItem", {});
      return (elFormItem || {}).elFormItemSize;
    });
    const inputNumberSize = computed(() => {
      return size.value || _elFormItemSize.value || (proxy.$ELEMENT || {}).size;
    });
    const inputNumberDisabled = computed(() => {
      const elForm = inject("elForm", {});
      return disabled.value || !!(elForm || {}).disabled;
    });
    const displayValue = computed({
      get: () => {
        if (state.userInput !== null) {
          return state.userInput;
        }
        let currentValue = state.currentValue;
        if (typeof currentValue === "number") {
          if (stepStrictly.value) {
            const stepPrecision = getPrecision(step.value);
            const precisionFactor = Math.pow(10, stepPrecision);
            currentValue = Math.round(currentValue / step.value) * precisionFactor * step.value / precisionFactor;
          }
          if (precision.value !== void 0) {
            currentValue = currentValue.toFixed(precision.value);
          }
        }
        return currentValue;
      },
      set: () => {
        return state.currentValue;
      }
    });
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value)
        return;
      const value = modelValue.value || 0;
      const newVal = _increase(value, step.value);
      setCurrentValue(newVal);
    };
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value)
        return;
      const value = modelValue.value || 0;
      const newVal = _decrease(value, step.value);
      setCurrentValue(newVal);
    };
    const handleInput = (value) => {
      state.userInput = value;
    };
    const handleInputChange = (value) => {
      const newVal = value === "" ? void 0 : Number(value);
      if (!isNaN(newVal) || value === "") {
        setCurrentValue(newVal);
      }
      state.userInput = null;
    };
    onMounted(() => {
      const {
        refs
      } = getCurrentInstance();
      const innerInput = refs.input.$el && refs.input.$refs.input;
      innerInput.setAttribute("role", "spinbutton");
      innerInput.setAttribute("aria-valuemax", max.value);
      innerInput.setAttribute("aria-valuemin", min.value);
      innerInput.setAttribute("aria-valuenow", state.currentValue);
      innerInput.setAttribute("aria-disabled", inputNumberDisabled.value);
    });
    onUpdated(() => {
      const {
        refs
      } = getCurrentInstance();
      if (!refs || !refs.input.$el)
        return;
      const innerInput = refs.input.$el && refs.input.$refs.input;
      innerInput.setAttribute("aria-valuenow", state.currentValue);
    });
    watch(modelValue, (value) => {
      let newVal = value === void 0 ? value : Number(value);
      if (newVal !== void 0) {
        if (isNaN(newVal)) {
          return;
        }
        if (stepStrictly.value) {
          const stepPrecision = getPrecision(step.value);
          const precisionFactor = Math.pow(10, stepPrecision);
          newVal = Math.round(newVal / step.value) * precisionFactor * step.value / precisionFactor;
        }
        if (precision.value !== void 0) {
          newVal = toPrecision(newVal, precision.value);
        }
      }
      if (newVal >= max.value)
        newVal = max.value;
      if (newVal <= min.value)
        newVal = min.value;
      state.currentValue = newVal;
      state.userInput = null;
      emit("update:modelValue", newVal);
    }, {
      immediate: true
    });
    const handleBlur = (event) => {
      emit("blur", event);
    };
    const handleFocus = (event) => {
      emit("focus", event);
    };
    const select = () => {
    };
    return {
      controlsAtRight,
      inputNumberSize,
      displayValue,
      minDisabled,
      maxDisabled,
      inputNumberDisabled,
      increase,
      decrease,
      handleInputChange,
      handleInput,
      focus,
      setCurrentValue,
      handleBlur,
      handleFocus,
      select
    };
  }
};
function render$1a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _directive_repeat_click = resolveDirective("repeat-click");
  return openBlock(), createBlock("div", {
    class: ["el-input-number", $setup.inputNumberSize ? "el-input-number--" + $setup.inputNumberSize : "", {
      "is-disabled": $setup.inputNumberDisabled
    }, {
      "is-without-controls": !$props.controls
    }, {
      "is-controls-right": $setup.controlsAtRight
    }],
    onDragstart: _cache[4] || (_cache[4] = withModifiers(() => {
    }, ["prevent"]))
  }, [$props.controls ? withDirectives((openBlock(), createBlock("span", {
    key: 0,
    class: [{
      "is-disabled": $setup.minDisabled
    }, "el-input-number__decrease"],
    onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => $setup.decrease && $setup.decrease(...args), ["enter"])),
    role: "button"
  }, [createVNode("i", {
    class: `el-icon-${$setup.controlsAtRight ? "arrow-down" : "minus"}`
  }, null, 2)], 34)), [[_directive_repeat_click, $setup.decrease]]) : createCommentVNode("v-if", true), $props.controls ? withDirectives((openBlock(), createBlock("span", {
    key: 1,
    class: [{
      "is-disabled": $setup.maxDisabled
    }, "el-input-number__increase"],
    onKeydown: _cache[2] || (_cache[2] = withKeys((...args) => $setup.increase && $setup.increase(...args), ["enter"])),
    role: "button"
  }, [createVNode("i", {
    class: `el-icon-${$setup.controlsAtRight ? "arrow-up" : "plus"}`
  }, null, 2)], 34)), [[_directive_repeat_click, $setup.increase]]) : createCommentVNode("v-if", true), createVNode(_component_el_input, {
    disabled: $setup.inputNumberDisabled,
    label: $props.label,
    max: $props.max,
    min: $props.min,
    name: $props.name,
    placeholder: $props.placeholder,
    size: $setup.inputNumberSize,
    onBlur: $setup.handleBlur,
    onChange: $setup.handleInputChange,
    onFocus: $setup.handleFocus,
    onInput: $setup.handleInput,
    onKeydown: [withKeys(withModifiers($setup.decrease, ["prevent"]), ["down"]), withKeys(withModifiers($setup.increase, ["prevent"]), ["up"])],
    ref: "input",
    modelValue: $setup.displayValue,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.displayValue = $event)
  }, null, 8, ["disabled", "label", "max", "min", "name", "placeholder", "size", "onBlur", "onChange", "onFocus", "onInput", "onKeydown", "modelValue"])], 34);
}
script$1k.render = render$1a;
script$1k.__file = "packages/input-number/InputNumber.vue";
script$1k.install = function(app) {
  app.component(script$1k.name, script$1k);
};
function Focus(ref2) {
  return {
    methods: {
      focus() {
        this.$refs[ref2].focus();
      }
    }
  };
}
var defaultLang = {
  el: {
    colorpicker: {
      confirm: "\u786E\u5B9A",
      clear: "\u6E05\u7A7A"
    },
    datepicker: {
      now: "\u6B64\u523B",
      today: "\u4ECA\u5929",
      cancel: "\u53D6\u6D88",
      clear: "\u6E05\u7A7A",
      confirm: "\u786E\u5B9A",
      selectDate: "\u9009\u62E9\u65E5\u671F",
      selectTime: "\u9009\u62E9\u65F6\u95F4",
      startDate: "\u5F00\u59CB\u65E5\u671F",
      startTime: "\u5F00\u59CB\u65F6\u95F4",
      endDate: "\u7ED3\u675F\u65E5\u671F",
      endTime: "\u7ED3\u675F\u65F6\u95F4",
      prevYear: "\u524D\u4E00\u5E74",
      nextYear: "\u540E\u4E00\u5E74",
      prevMonth: "\u4E0A\u4E2A\u6708",
      nextMonth: "\u4E0B\u4E2A\u6708",
      year: "\u5E74",
      month1: "1 \u6708",
      month2: "2 \u6708",
      month3: "3 \u6708",
      month4: "4 \u6708",
      month5: "5 \u6708",
      month6: "6 \u6708",
      month7: "7 \u6708",
      month8: "8 \u6708",
      month9: "9 \u6708",
      month10: "10 \u6708",
      month11: "11 \u6708",
      month12: "12 \u6708",
      weeks: {
        sun: "\u65E5",
        mon: "\u4E00",
        tue: "\u4E8C",
        wed: "\u4E09",
        thu: "\u56DB",
        fri: "\u4E94",
        sat: "\u516D"
      },
      months: {
        jan: "\u4E00\u6708",
        feb: "\u4E8C\u6708",
        mar: "\u4E09\u6708",
        apr: "\u56DB\u6708",
        may: "\u4E94\u6708",
        jun: "\u516D\u6708",
        jul: "\u4E03\u6708",
        aug: "\u516B\u6708",
        sep: "\u4E5D\u6708",
        oct: "\u5341\u6708",
        nov: "\u5341\u4E00\u6708",
        dec: "\u5341\u4E8C\u6708"
      }
    },
    select: {
      loading: "\u52A0\u8F7D\u4E2D",
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      placeholder: "\u8BF7\u9009\u62E9"
    },
    cascader: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      loading: "\u52A0\u8F7D\u4E2D",
      placeholder: "\u8BF7\u9009\u62E9",
      noData: "\u6682\u65E0\u6570\u636E"
    },
    pagination: {
      goto: "\u524D\u5F80",
      pagesize: "\u6761/\u9875",
      total: "\u5171 {total} \u6761",
      pageClassifier: "\u9875"
    },
    messagebox: {
      title: "\u63D0\u793A",
      confirm: "\u786E\u5B9A",
      cancel: "\u53D6\u6D88",
      error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
    },
    upload: {
      deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
      delete: "\u5220\u9664",
      preview: "\u67E5\u770B\u56FE\u7247",
      continue: "\u7EE7\u7EED\u4E0A\u4F20"
    },
    table: {
      emptyText: "\u6682\u65E0\u6570\u636E",
      confirmFilter: "\u7B5B\u9009",
      resetFilter: "\u91CD\u7F6E",
      clearFilter: "\u5168\u90E8",
      sumText: "\u5408\u8BA1"
    },
    tree: {
      emptyText: "\u6682\u65E0\u6570\u636E"
    },
    transfer: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
      filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
      noCheckedFormat: "\u5171 {total} \u9879",
      hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
    },
    image: {
      error: "\u52A0\u8F7D\u5931\u8D25"
    },
    pageHeader: {
      title: "\u8FD4\u56DE"
    },
    popconfirm: {
      confirmButtonText: "\u786E\u5B9A",
      cancelButtonText: "\u53D6\u6D88"
    }
  }
};
function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
}
function isNumber(obj) {
  return Object.prototype.toString.call(obj) === "[object Number]";
}
function isObject$2(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function isArray(value) {
  return value instanceof Array;
}
function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}
var isFunction$1 = (functionToCheck) => {
  var getType2 = {};
  return functionToCheck && getType2.toString.call(functionToCheck) === "[object Function]";
};
var isUndefined = (val) => {
  return val === void 0;
};
var isDefined = (val) => {
  return val !== void 0 && val !== null;
};
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function noop$1() {
}
function hasOwn$1(obj, key) {
  return hasOwnProperty$1.call(obj, key);
}
function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}
function toObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}
var getValueByPath = function(object3, prop) {
  prop = prop || "";
  const paths = prop.split(".");
  let current = object3;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current)
      break;
    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};
function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  const keyArr = path.split(".");
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict)
      break;
    const key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error("please transfer a valid prop path to form item!");
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
}
var generateId = function() {
  return Math.floor(Math.random() * 1e4);
};
var valueEquals = (a, b) => {
  if (a === b)
    return true;
  if (!(a instanceof Array))
    return false;
  if (!(b instanceof Array))
    return false;
  if (a.length !== b.length)
    return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
};
var escapeRegexpString = (value = "") => String(value).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
var arrayFindIndex = function(arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};
var arrayFind = function(arr, pred) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : void 0;
};
var coerceTruthyValueToArray = function(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};
var isIE = function() {
  return !isNaN(Number(document.documentMode));
};
var isEdge = function() {
  return navigator.userAgent.indexOf("Edge") > -1;
};
var isFirefox = function() {
  return !!window.navigator.userAgent.match(/firefox/i);
};
var autoprefixer = function(style) {
  if (typeof style !== "object")
    return style;
  const rules2 = ["transform", "transition", "animation"];
  const prefixes = ["ms-", "webkit-"];
  rules2.forEach((rule) => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach((prefix) => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};
var kebabCase = function(str) {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, "$1-$2").replace(hyphenateRE, "$1-$2").toLowerCase();
};
var capitalize = function(str) {
  if (!isString(str))
    return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var looseEqual = function(a, b) {
  const isObjectA = isObject$2(a);
  const isObjectB = isObject$2(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};
var arrayEquals = function(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }
  return true;
};
var isEqual = function(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};
var isEmpty = function(val) {
  if (val == null)
    return true;
  if (typeof val === "boolean")
    return false;
  if (typeof val === "number")
    return !val;
  if (val instanceof Error)
    return val.message === "";
  switch (Object.prototype.toString.call(val)) {
    case "[object String]":
    case "[object Array]":
      return !val.length;
    case "[object File]":
    case "[object Map]":
    case "[object Set]": {
      return !val.size;
    }
    case "[object Object]": {
      return !Object.keys(val).length;
    }
  }
  return false;
};
function rafThrottle(fn) {
  let locked = false;
  return function(...args) {
    if (locked)
      return;
    locked = true;
    window.requestAnimationFrame(() => {
      fn.apply(this, args);
      locked = false;
    });
  };
}
var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
function Format() {
  function template(string2, ...args) {
    if (args.length === 1 && typeof args[0] === "object") {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return string2.replace(RE_NARGS, (match, prefix, i, index2) => {
      let result;
      if (string2[index2 - 1] === "{" && string2[index2 + match.length] === "}") {
        return i;
      } else {
        result = hasOwn$1(args, i) ? args[i] : null;
        if (result === null || result === void 0) {
          return "";
        }
        return result;
      }
    });
  }
  return template;
}
var format$1 = Format();
var lang = defaultLang;
var i18nHandler = function() {
};
var t = function(path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== void 0)
    return value;
  const array3 = path.split(".");
  let current = lang;
  for (let i = 0, j = array3.length; i < j; i++) {
    const property = array3[i];
    value = current[property];
    if (i === j - 1)
      return format$1(value, options);
    if (!value)
      return "";
    current = value;
  }
  return "";
};
var Locale = {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {};
    for (const prop in source) {
      if (Object.hasOwnProperty.call(source, prop)) {
        const value = source[prop];
        if (value !== void 0) {
          target[prop] = value;
        }
      }
    }
  }
  return target;
}
var hasModal = false;
var hasInitZIndex = false;
var zIndex;
var getModal = function() {
  let modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement("div");
    PopupManager.modalDom = modalDom;
    modalDom.addEventListener("touchmove", function(event) {
      event.preventDefault();
      event.stopPropagation();
    }, {
      passive: true
    });
    modalDom.addEventListener("click", function() {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    });
  }
  return modalDom;
};
var instances = {};
var PopupManager = {
  modalFade: true,
  getInstance: function(id) {
    return instances[id];
  },
  register: function(id, instance2) {
    if (id && instance2) {
      instances[id] = instance2;
    }
  },
  deregister: function(id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },
  nextZIndex: function() {
    return PopupManager.zIndex++;
  },
  modalStack: [],
  doOnModalClick: function() {
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem)
      return;
    const instance2 = PopupManager.getInstance(topItem.id);
    if (instance2 && instance2.closeOnClickModal) {
      instance2.close();
    }
  },
  openModal: function(id, zIndex2, dom, modalClass, modalFade) {
    if (!id || zIndex2 === void 0)
      return;
    this.modalFade = modalFade;
    const modalStack = this.modalStack;
    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }
    const modalDom = getModal();
    if (zIndex2) {
      modalDom.style.zIndex = zIndex2;
    }
    addClass(modalDom, "v-modal");
    if (this.modalFade && !hasModal) {
      addClass(modalDom, "v-modal-enter");
    }
    if (modalClass) {
      const classArr = modalClass.trim().split(/\s+/);
      classArr.forEach((item) => addClass(modalDom, item));
    }
    setTimeout(() => {
      removeClass(modalDom, "v-modal-enter");
    }, 200);
    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }
    modalDom.tabIndex = 0;
    modalDom.style.display = "";
    this.modalStack.push({
      id,
      zIndex: zIndex2,
      modalClass
    });
  },
  closeModal: function(id) {
    const modalStack = this.modalStack;
    const modalDom = getModal();
    if (modalStack.length > 0) {
      const topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        if (topItem.modalClass) {
          const classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach((item) => removeClass(modalDom, item));
        }
        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }
    if (modalStack.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, "v-modal-leave");
      }
      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode)
            modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = "none";
          PopupManager.modalDom = void 0;
        }
        removeClass(modalDom, "v-modal-leave");
      }, 200);
    }
  }
};
Object.defineProperty(PopupManager, "zIndex", {
  configurable: true,
  get() {
    if (!hasInitZIndex) {
      zIndex = zIndex || 2e3;
      hasInitZIndex = true;
    }
    return zIndex;
  },
  set(value) {
    zIndex = value;
  }
});
var getTopPopup = function() {
  if (PopupManager.modalStack.length > 0) {
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup)
      return;
    const instance2 = PopupManager.getInstance(topPopup.id);
    return instance2;
  }
};
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    const topPopup = getTopPopup();
    if (topPopup && topPopup.closeOnPressEscape) {
      topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction("cancel") : topPopup.close();
    }
  }
});
var scrollBarWidth$1;
function getScrollBarWidth() {
  if (scrollBarWidth$1 !== void 0)
    return scrollBarWidth$1;
  const outer = document.createElement("div");
  outer.className = "el-scrollbar__wrap";
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth$1 = widthNoScroll - widthWithScroll;
  return scrollBarWidth$1;
}
var root$1 = window;
var DEFAULTS = {
  placement: "bottom",
  gpuAcceleration: true,
  offset: 0,
  boundariesElement: "viewport",
  boundariesPadding: 5,
  preventOverflowOrder: ["left", "right", "top", "bottom"],
  flipBehavior: "flip",
  arrowElement: "[x-arrow]",
  arrowOffset: 0,
  modifiers: ["shift", "offset", "preventOverflow", "keepTogether", "arrow", "flip", "applyStyle"],
  modifiersIgnored: [],
  forceAbsolute: false
};
function Popper$1(reference, popper, options) {
  this._reference = reference.jquery ? reference[0] : reference;
  this.state = {};
  var isNotDefined = typeof popper === "undefined" || popper === null;
  var isConfig = popper && Object.prototype.toString.call(popper) === "[object Object]";
  if (isNotDefined || isConfig) {
    this._popper = this.parse(isConfig ? popper : {});
  } else {
    this._popper = popper.jquery ? popper[0] : popper;
  }
  this._options = Object.assign({}, DEFAULTS, options);
  this._options.modifiers = this._options.modifiers.map(function(modifier) {
    if (this._options.modifiersIgnored.indexOf(modifier) !== -1)
      return;
    if (modifier === "applyStyle") {
      this._popper.setAttribute("x-placement", this._options.placement);
    }
    return this.modifiers[modifier] || modifier;
  }.bind(this));
  this.state.position = this._getPosition(this._popper, this._reference);
  setStyle(this._popper, {
    position: this.state.position,
    top: 0
  });
  this.update();
  this._setupEventListeners();
  return this;
}
Popper$1.prototype.destroy = function() {
  this._popper.removeAttribute("x-placement");
  this._popper.style.left = "";
  this._popper.style.position = "";
  this._popper.style.top = "";
  this._popper.style[getSupportedPropertyName("transform")] = "";
  this._removeEventListeners();
  if (this._options.removeOnDestroy) {
    this._popper.remove();
  }
  return this;
};
Popper$1.prototype.update = function() {
  var data = {
    instance: this,
    styles: {}
  };
  data.placement = this._options.placement;
  data._originalPlacement = this._options.placement;
  data.offsets = this._getOffsets(this._popper, this._reference, data.placement);
  data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);
  data = this.runModifiers(data, this._options.modifiers);
  if (typeof this.state.updateCallback === "function") {
    this.state.updateCallback(data);
  }
};
Popper$1.prototype.onCreate = function(callback) {
  callback(this);
  return this;
};
Popper$1.prototype.onUpdate = function(callback) {
  this.state.updateCallback = callback;
  return this;
};
Popper$1.prototype.parse = function(config) {
  var defaultConfig = {
    tagName: "div",
    classNames: ["popper"],
    attributes: [],
    parent: root$1.document.body,
    content: "",
    contentType: "text",
    arrowTagName: "div",
    arrowClassNames: ["popper__arrow"],
    arrowAttributes: ["x-arrow"]
  };
  config = Object.assign({}, defaultConfig, config);
  var d = root$1.document;
  var popper = d.createElement(config.tagName);
  addClassNames(popper, config.classNames);
  addAttributes(popper, config.attributes);
  if (config.contentType === "node") {
    popper.appendChild(config.content.jquery ? config.content[0] : config.content);
  } else if (config.contentType === "html") {
    popper.innerHTML = config.content;
  } else {
    popper.textContent = config.content;
  }
  if (config.arrowTagName) {
    var arrow = d.createElement(config.arrowTagName);
    addClassNames(arrow, config.arrowClassNames);
    addAttributes(arrow, config.arrowAttributes);
    popper.appendChild(arrow);
  }
  var parent = config.parent.jquery ? config.parent[0] : config.parent;
  if (typeof parent === "string") {
    parent = d.querySelectorAll(config.parent);
    if (parent.length > 1) {
      console.warn("WARNING: the given `parent` query(" + config.parent + ") matched more than one element, the first one will be used");
    }
    if (parent.length === 0) {
      throw "ERROR: the given `parent` doesn't exists!";
    }
    parent = parent[0];
  }
  if (parent.length > 1 && parent instanceof Element === false) {
    console.warn("WARNING: you have passed as parent a list of elements, the first one will be used");
    parent = parent[0];
  }
  parent.appendChild(popper);
  return popper;
  function addClassNames(element, classNames) {
    classNames.forEach(function(className) {
      element.classList.add(className);
    });
  }
  function addAttributes(element, attributes2) {
    attributes2.forEach(function(attribute) {
      element.setAttribute(attribute.split(":")[0], attribute.split(":")[1] || "");
    });
  }
};
Popper$1.prototype._getPosition = function(popper, reference) {
  getOffsetParent(reference);
  if (this._options.forceAbsolute) {
    return "absolute";
  }
  var isParentFixed = isFixed(reference);
  return isParentFixed ? "fixed" : "absolute";
};
Popper$1.prototype._getOffsets = function(popper, reference, placement) {
  placement = placement.split("-")[0];
  var popperOffsets = {};
  popperOffsets.position = this.state.position;
  var isParentFixed = popperOffsets.position === "fixed";
  var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);
  var popperRect = getOuterSizes(popper);
  if (["right", "left"].indexOf(placement) !== -1) {
    popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
    if (placement === "left") {
      popperOffsets.left = referenceOffsets.left - popperRect.width;
    } else {
      popperOffsets.left = referenceOffsets.right;
    }
  } else {
    popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
    if (placement === "top") {
      popperOffsets.top = referenceOffsets.top - popperRect.height;
    } else {
      popperOffsets.top = referenceOffsets.bottom;
    }
  }
  popperOffsets.width = popperRect.width;
  popperOffsets.height = popperRect.height;
  return {
    popper: popperOffsets,
    reference: referenceOffsets
  };
};
Popper$1.prototype._setupEventListeners = function() {
  this.state.updateBound = this.update.bind(this);
  root$1.addEventListener("resize", this.state.updateBound);
  if (this._options.boundariesElement !== "window") {
    var target = getScrollParent(this._reference);
    if (target === root$1.document.body || target === root$1.document.documentElement) {
      target = root$1;
    }
    target.addEventListener("scroll", this.state.updateBound);
    this.state.scrollTarget = target;
  }
};
Popper$1.prototype._removeEventListeners = function() {
  root$1.removeEventListener("resize", this.state.updateBound);
  if (this._options.boundariesElement !== "window" && this.state.scrollTarget) {
    this.state.scrollTarget.removeEventListener("scroll", this.state.updateBound);
    this.state.scrollTarget = null;
  }
  this.state.updateBound = null;
};
Popper$1.prototype._getBoundaries = function(data, padding, boundariesElement) {
  var boundaries = {};
  var width, height;
  if (boundariesElement === "window") {
    var body = root$1.document.body, html = root$1.document.documentElement;
    height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
    boundaries = {
      top: 0,
      right: width,
      bottom: height,
      left: 0
    };
  } else if (boundariesElement === "viewport") {
    var offsetParent = getOffsetParent(this._popper);
    var scrollParent = getScrollParent(this._popper);
    var offsetParentRect = getOffsetRect(offsetParent);
    var getScrollTopValue = function(element) {
      return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
    };
    var getScrollLeftValue = function(element) {
      return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
    };
    var scrollTop = data.offsets.popper.position === "fixed" ? 0 : getScrollTopValue(scrollParent);
    var scrollLeft = data.offsets.popper.position === "fixed" ? 0 : getScrollLeftValue(scrollParent);
    boundaries = {
      top: 0 - (offsetParentRect.top - scrollTop),
      right: root$1.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
      bottom: root$1.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
      left: 0 - (offsetParentRect.left - scrollLeft)
    };
  } else {
    if (getOffsetParent(this._popper) === boundariesElement) {
      boundaries = {
        top: 0,
        left: 0,
        right: boundariesElement.clientWidth,
        bottom: boundariesElement.clientHeight
      };
    } else {
      boundaries = getOffsetRect(boundariesElement);
    }
  }
  boundaries.left += padding;
  boundaries.right -= padding;
  boundaries.top = boundaries.top + padding;
  boundaries.bottom = boundaries.bottom - padding;
  return boundaries;
};
Popper$1.prototype.runModifiers = function(data, modifiers, ends) {
  var modifiersToRun = modifiers.slice();
  if (ends !== void 0) {
    modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
  }
  modifiersToRun.forEach(function(modifier) {
    if (isFunction(modifier)) {
      data = modifier.call(this, data);
    }
  }.bind(this));
  return data;
};
Popper$1.prototype.isModifierRequired = function(requesting, requested) {
  var index2 = getArrayKeyIndex(this._options.modifiers, requesting);
  return !!this._options.modifiers.slice(0, index2).filter(function(modifier) {
    return modifier === requested;
  }).length;
};
Popper$1.prototype.modifiers = {};
Popper$1.prototype.modifiers.applyStyle = function(data) {
  var styles = {
    position: data.offsets.popper.position
  };
  var left = Math.round(data.offsets.popper.left);
  var top = Math.round(data.offsets.popper.top);
  var prefixedProperty;
  if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName("transform"))) {
    styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
    styles.top = 0;
    styles.left = 0;
  } else {
    styles.left = left;
    styles.top = top;
  }
  Object.assign(styles, data.styles);
  setStyle(this._popper, styles);
  this._popper.setAttribute("x-placement", data.placement);
  if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
    setStyle(data.arrowElement, data.offsets.arrow);
  }
  return data;
};
Popper$1.prototype.modifiers.shift = function(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var shiftVariation = placement.split("-")[1];
  if (shiftVariation) {
    var reference = data.offsets.reference;
    var popper = getPopperClientRect(data.offsets.popper);
    var shiftOffsets = {
      y: {
        start: {
          top: reference.top
        },
        end: {
          top: reference.top + reference.height - popper.height
        }
      },
      x: {
        start: {
          left: reference.left
        },
        end: {
          left: reference.left + reference.width - popper.width
        }
      }
    };
    var axis = ["bottom", "top"].indexOf(basePlacement) !== -1 ? "x" : "y";
    data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
  }
  return data;
};
Popper$1.prototype.modifiers.preventOverflow = function(data) {
  var order = this._options.preventOverflowOrder;
  var popper = getPopperClientRect(data.offsets.popper);
  var check = {
    left: function() {
      var left = popper.left;
      if (popper.left < data.boundaries.left) {
        left = Math.max(popper.left, data.boundaries.left);
      }
      return {
        left
      };
    },
    right: function() {
      var left = popper.left;
      if (popper.right > data.boundaries.right) {
        left = Math.min(popper.left, data.boundaries.right - popper.width);
      }
      return {
        left
      };
    },
    top: function() {
      var top = popper.top;
      if (popper.top < data.boundaries.top) {
        top = Math.max(popper.top, data.boundaries.top);
      }
      return {
        top
      };
    },
    bottom: function() {
      var top = popper.top;
      if (popper.bottom > data.boundaries.bottom) {
        top = Math.min(popper.top, data.boundaries.bottom - popper.height);
      }
      return {
        top
      };
    }
  };
  order.forEach(function(direction) {
    data.offsets.popper = Object.assign(popper, check[direction]());
  });
  return data;
};
Popper$1.prototype.modifiers.keepTogether = function(data) {
  var popper = getPopperClientRect(data.offsets.popper);
  var reference = data.offsets.reference;
  var f = Math.floor;
  if (popper.right < f(reference.left)) {
    data.offsets.popper.left = f(reference.left) - popper.width;
  }
  if (popper.left > f(reference.right)) {
    data.offsets.popper.left = f(reference.right);
  }
  if (popper.bottom < f(reference.top)) {
    data.offsets.popper.top = f(reference.top) - popper.height;
  }
  if (popper.top > f(reference.bottom)) {
    data.offsets.popper.top = f(reference.bottom);
  }
  return data;
};
Popper$1.prototype.modifiers.flip = function(data) {
  if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
    console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!");
    return data;
  }
  if (data.flipped && data.placement === data._originalPlacement) {
    return data;
  }
  var placement = data.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split("-")[1] || "";
  var flipOrder = [];
  if (this._options.flipBehavior === "flip") {
    flipOrder = [placement, placementOpposite];
  } else {
    flipOrder = this._options.flipBehavior;
  }
  flipOrder.forEach(function(step, index2) {
    if (placement !== step || flipOrder.length === index2 + 1) {
      return;
    }
    placement = data.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = getPopperClientRect(data.offsets.popper);
    var a = ["right", "bottom"].indexOf(placement) !== -1;
    if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
      data.flipped = true;
      data.placement = flipOrder[index2 + 1];
      if (variation) {
        data.placement += "-" + variation;
      }
      data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;
      data = this.runModifiers(data, this._options.modifiers, this._flip);
    }
  }.bind(this));
  return data;
};
Popper$1.prototype.modifiers.offset = function(data) {
  var offset = this._options.offset;
  var popper = data.offsets.popper;
  if (data.placement.indexOf("left") !== -1) {
    popper.top -= offset;
  } else if (data.placement.indexOf("right") !== -1) {
    popper.top += offset;
  } else if (data.placement.indexOf("top") !== -1) {
    popper.left -= offset;
  } else if (data.placement.indexOf("bottom") !== -1) {
    popper.left += offset;
  }
  return data;
};
Popper$1.prototype.modifiers.arrow = function(data) {
  var arrow = this._options.arrowElement;
  var arrowOffset = this._options.arrowOffset;
  if (typeof arrow === "string") {
    arrow = this._popper.querySelector(arrow);
  }
  if (!arrow) {
    return data;
  }
  if (!this._popper.contains(arrow)) {
    console.warn("WARNING: `arrowElement` must be child of its popper element!");
    return data;
  }
  if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
    console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!");
    return data;
  }
  var arrowStyle = {};
  var placement = data.placement.split("-")[0];
  var popper = getPopperClientRect(data.offsets.popper);
  var reference = data.offsets.reference;
  var isVertical = ["left", "right"].indexOf(placement) !== -1;
  var len = isVertical ? "height" : "width";
  var side = isVertical ? "top" : "left";
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowSize = getOuterSizes(arrow)[len];
  if (reference[opSide] - arrowSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
  }
  if (reference[side] + arrowSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
  }
  var center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2);
  var sideValue = center - popper[side];
  sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
  arrowStyle[side] = sideValue;
  arrowStyle[altSide] = "";
  data.offsets.arrow = arrowStyle;
  data.arrowElement = arrow;
  return data;
};
function getOuterSizes(element) {
  var _display = element.style.display, _visibility = element.style.visibility;
  element.style.display = "block";
  element.style.visibility = "hidden";
  var styles = root$1.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  element.style.display = _display;
  element.style.visibility = _visibility;
  return result;
}
function getOppositePlacement(placement) {
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
function getPopperClientRect(popperOffsets) {
  var offsets = Object.assign({}, popperOffsets);
  offsets.right = offsets.left + offsets.width;
  offsets.bottom = offsets.top + offsets.height;
  return offsets;
}
function getArrayKeyIndex(arr, keyToFind) {
  var i = 0, key;
  for (key in arr) {
    if (arr[key] === keyToFind) {
      return i;
    }
    i++;
  }
  return null;
}
function getStyleComputedProperty$1(element, property) {
  var css = root$1.getComputedStyle(element, null);
  return css[property];
}
function getOffsetParent(element) {
  var offsetParent = element.offsetParent;
  return offsetParent === root$1.document.body || !offsetParent ? root$1.document.documentElement : offsetParent;
}
function getScrollParent(element) {
  var parent = element.parentNode;
  if (!parent) {
    return element;
  }
  if (parent === root$1.document) {
    if (root$1.document.body.scrollTop || root$1.document.body.scrollLeft) {
      return root$1.document.body;
    } else {
      return root$1.document.documentElement;
    }
  }
  if (["scroll", "auto"].indexOf(getStyleComputedProperty$1(parent, "overflow")) !== -1 || ["scroll", "auto"].indexOf(getStyleComputedProperty$1(parent, "overflow-x")) !== -1 || ["scroll", "auto"].indexOf(getStyleComputedProperty$1(parent, "overflow-y")) !== -1) {
    return parent;
  }
  return getScrollParent(element.parentNode);
}
function isFixed(element) {
  if (element === root$1.document.body) {
    return false;
  }
  if (getStyleComputedProperty$1(element, "position") === "fixed") {
    return true;
  }
  return element.parentNode ? isFixed(element.parentNode) : element;
}
function setStyle(element, styles) {
  function is_numeric(n) {
    return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
  }
  Object.keys(styles).forEach(function(prop) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
      unit = "px";
    }
    element.style[prop] = styles[prop] + unit;
  });
}
function isFunction(functionToCheck) {
  var getType2 = {};
  return functionToCheck && getType2.toString.call(functionToCheck) === "[object Function]";
}
function getOffsetRect(element) {
  var elementRect = {
    width: element.offsetWidth,
    height: element.offsetHeight,
    left: element.offsetLeft,
    top: element.offsetTop
  };
  elementRect.right = elementRect.left + elementRect.width;
  elementRect.bottom = elementRect.top + elementRect.height;
  return elementRect;
}
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  var isIE2 = navigator.userAgent.indexOf("MSIE") != -1;
  var rectTop = isIE2 && element.tagName === "HTML" ? -element.scrollTop : rect.top;
  return {
    left: rect.left,
    top: rectTop,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.right - rect.left,
    height: rect.bottom - rectTop
  };
}
function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
  var elementRect = getBoundingClientRect(element);
  var parentRect = getBoundingClientRect(parent);
  if (fixed) {
    var scrollParent = getScrollParent(parent);
    parentRect.top += scrollParent.scrollTop;
    parentRect.bottom += scrollParent.scrollTop;
    parentRect.left += scrollParent.scrollLeft;
    parentRect.right += scrollParent.scrollLeft;
  }
  var rect = {
    top: elementRect.top - parentRect.top,
    left: elementRect.left - parentRect.left,
    bottom: elementRect.top - parentRect.top + elementRect.height,
    right: elementRect.left - parentRect.left + elementRect.width,
    width: elementRect.width,
    height: elementRect.height
  };
  return rect;
}
function getSupportedPropertyName(property) {
  var prefixes = ["", "ms", "webkit", "moz", "o"];
  for (var i = 0; i < prefixes.length; i++) {
    var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
    if (typeof root$1.document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}
if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      if (target === void 0 || target === null) {
        throw new TypeError("Cannot convert first argument to object");
      }
      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === void 0 || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);
        var keysArray = Object.keys(nextSource);
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}
var stop$2 = (e) => e.stopPropagation();
var popperProps = {
  transformOrigin: {
    type: [Boolean, String],
    default: true
  },
  placement: {
    type: String,
    default: "bottom"
  },
  boundariesPadding: {
    type: Number,
    default: 5
  },
  reference: {},
  popper: {},
  offset: {
    default: 0
  },
  modelValue: Boolean,
  visibleArrow: Boolean,
  arrowOffset: {
    type: Number,
    default: 35
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  popperOptions: {
    type: Object,
    default() {
      return {
        gpuAcceleration: false
      };
    }
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
function usePopper(props2, {
  emit,
  slots
}, {
  referenceElm,
  popperElm
}) {
  const {
    transformOrigin,
    placement,
    reference,
    popper,
    offset,
    modelValue,
    visibleArrow,
    arrowOffset,
    appendToBody: appendToBody2,
    popperOptions,
    disabled
  } = toRefs(props2);
  const showPopper = ref(false);
  const currentPlacement = ref("");
  const popperJS = ref(null);
  const instance2 = getCurrentInstance();
  function createPopper() {
    if (instance2.proxy.$isServer)
      return;
    currentPlacement.value = currentPlacement.value || placement.value;
    if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(currentPlacement.value)) {
      return;
    }
    const options = popperOptions.value;
    const popperRef = popperElm.value = popperElm.value || popper && popper.value || instance2.proxy.$refs.popper;
    let referenceRef = referenceElm.value = referenceElm.value || reference && reference.value || instance2.proxy.$refs.reference;
    if (!referenceRef && slots.reference && slots.reference() && slots.reference()[0]) {
      referenceRef = referenceElm.value = slots.reference()[0].el;
    }
    if (!popperRef || !referenceRef)
      return;
    if (visibleArrow.value)
      appendArrow(popperRef);
    if (appendToBody2.value)
      document.body.appendChild(popperElm.value);
    if (popperJS.value && popperJS.value.destroy) {
      popperJS.value.destroy();
    }
    options.placement = currentPlacement.value;
    options.offset = offset.value;
    options.arrowOffset = arrowOffset.value;
    popperJS.value = new Popper$1(referenceRef, popperRef, options);
    popperJS.value.onCreate(() => {
      emit("created", instance2.proxy);
      resetTransformOrigin();
      nextTick(() => updatePopper());
    });
    if (typeof options.onUpdate === "function") {
      popperJS.value.onUpdate(options.onUpdate);
    }
    popperJS.value._popper.style.zIndex = PopupManager.nextZIndex();
    popperElm.value.addEventListener("click", stop$2);
  }
  function updatePopper() {
    const popperJSRef = popperJS.value;
    if (popperJSRef) {
      popperJSRef.update();
      if (popperJSRef._popper) {
        popperJSRef._popper.style.zIndex = PopupManager.nextZIndex();
      }
    } else {
      createPopper();
    }
  }
  function doDestroy(forceDestroy) {
    if (!popperJS.value || showPopper.value && !forceDestroy)
      return;
    popperJS.value.destroy();
    popperJS.value = null;
  }
  function destroyPopper() {
    if (popperJS.value) {
      resetTransformOrigin();
    }
  }
  function resetTransformOrigin() {
    if (!transformOrigin.value)
      return;
    const placementMap = {
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    };
    const placement2 = popperJS.value._popper.getAttribute("x-placement").split("-")[0];
    const origin = placementMap[placement2];
    popperJS.value._popper.style.transformOrigin = typeof transformOrigin.value === "string" ? transformOrigin.value : ["top", "bottom"].indexOf(placement2) > -1 ? `center ${origin}` : `${origin} center`;
  }
  const appended = ref(false);
  function appendArrow(element) {
    let hash;
    if (appended.value) {
      return;
    }
    appended.value = true;
    for (const item in element.attributes) {
      if (/^_v-/.test(element.attributes[item].name)) {
        hash = element.attributes[item].name;
        break;
      }
    }
    const arrow = document.createElement("div");
    if (hash) {
      arrow.setAttribute(hash, "");
    }
    arrow.setAttribute("x-arrow", "");
    arrow.className = "popper__arrow";
    element.appendChild(arrow);
  }
  watch(modelValue, (val) => {
    showPopper.value = val;
    emit("update:modelValue", val);
  }, {
    immediate: true
  });
  watch(showPopper, (val) => {
    if (disabled.value)
      return;
    val ? updatePopper() : destroyPopper();
    emit("update:modelValue", val);
  });
  onBeforeUnmount(() => {
    doDestroy(true);
    if (popperElm.value && popperElm.value.parentNode === document.body) {
      popperElm.value.removeEventListener("click", stop$2);
      document.body.removeChild(popperElm.value);
    }
  });
  return {
    showPopper,
    currentPlacement,
    referenceElm,
    popperElm,
    popperJS,
    createPopper,
    updatePopper,
    doDestroy,
    destroyPopper,
    resetTransformOrigin,
    appendArrow
  };
}
var script$1j = {
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  props: __spreadProps(__spreadValues({}, popperProps), {
    placement: {
      default: "bottom-start"
    },
    boundariesPadding: {
      default: 0
    },
    popperOptions: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    },
    visibleArrow: {
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  }),
  emits: ["update:blur", "update:modelValue", "created"],
  setup(props2, ctx2) {
    const elSelect = inject("select");
    const elms = usePopperElm(elSelect);
    const popper = usePopper(props2, ctx2, elms);
    usePopperUpdate(() => {
      if (elSelect.visible) {
        popper.updatePopper();
      }
    }, popper.destroyPopper);
    const popperClass = computed(() => {
      return elSelect.popperClass;
    });
    const minWidth = useMinWidth(elSelect);
    return __spreadValues({
      elSelect,
      minWidth,
      popperClass
    }, popper);
  }
};
function usePopperElm(elSelect) {
  const {
    proxy
  } = getCurrentInstance();
  const elms = reactive({
    referenceElm: null,
    popperElm: null
  });
  onMounted(() => {
    elms.referenceElm = elSelect.$refs.reference.$el;
    elSelect.popperElm = elms.popperElm = proxy.$el;
  });
  return __spreadValues({}, toRefs(elms));
}
function usePopperUpdate(updateFn, destroyFn) {
  const {
    on: on2
  } = useEmitter();
  onMounted(() => {
    on2("updatePopper", updateFn);
    on2("destroyPopper", destroyFn);
  });
}
function useMinWidth(elSelect) {
  const minWidth = ref("");
  watch(() => elSelect.inputWidth, () => {
    minWidth.value = elSelect.$el.getBoundingClientRect().width + "px";
  });
  return minWidth;
}
function render$19(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["el-select-dropdown el-popper", [{
      "is-multiple": $setup.elSelect.multiple
    }, $setup.popperClass]],
    style: {
      minWidth: $setup.minWidth
    }
  }, [renderSlot(_ctx.$slots, "default")], 6);
}
script$1j.render = render$19;
script$1j.__file = "packages/select/SelectDropdown.vue";
var script$1i = {
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props2) {
    const {
      on: on2,
      dispatch
    } = useEmitter();
    const select = inject("select");
    const {
      proxy
    } = getCurrentInstance();
    const {
      value,
      label,
      disabled,
      created
    } = toRefs(props2);
    const data = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });
    const isObject2 = computed(() => {
      const v = unref(value);
      return Object.prototype.toString.call(v).toLowerCase() === "[object object]";
    });
    const currentLabel = computed(() => {
      return unref(label) || (unref(isObject2) ? "" : unref(value));
    });
    const currentValue = computed(() => {
      return unref(value) || label.value || "";
    });
    const itemSelected = computed(() => {
      if (!select.multiple) {
        return isEqual2(unref(value), select.modelValue);
      } else {
        return contains(select.modelValue, unref(value));
      }
    });
    const limitReached = computed(() => {
      if (select.multiple) {
        return !unref(itemSelected) && (select.modelValue || []).length >= select.multipleLimit && select.multipleLimit > 0;
      } else {
        return false;
      }
    });
    function isEqual2(a, b) {
      if (!unref(isObject2)) {
        return a === b;
      } else {
        const valueKey = select.valueKey;
        return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
      }
    }
    function contains(arr = [], target) {
      if (!unref(isObject2)) {
        return arr && arr.indexOf(target) > -1;
      } else {
        const valueKey = select.valueKey;
        return arr && arr.some((item) => {
          return getValueByPath(item, valueKey) === getValueByPath(target, valueKey);
        });
      }
    }
    function handleGroupDisabled(val) {
      data.groupDisabled = val;
    }
    function hoverItem() {
      if (!disabled.value && !data.groupDisabled) {
        select.hoverIndex = select.options.indexOf(proxy);
      }
    }
    function selectOptionClick() {
      if (disabled.value !== true && data.groupDisabled !== true) {
        dispatch("handleOptionClick", {
          option: props2,
          byClick: true
        });
      }
    }
    function queryChange(query) {
      data.visible = new RegExp(escapeRegexpString(query), "i").test(unref(currentLabel)) || created.value;
      if (!data.visible) {
        select.filteredOptionsCount--;
      }
    }
    watch(currentLabel, () => {
      if (!created.value && !select.remote)
        dispatch("setSelected");
    });
    watch(value, (val, oldVal) => {
      const {
        remote,
        valueKey
      } = select;
      if (!created.value && !remote) {
        if (valueKey && typeof val === "object" && typeof oldVal === "object" && val[valueKey] === oldVal[valueKey]) {
          return;
        }
        dispatch("setSelected");
      }
    });
    onBeforeMount(() => {
      select.options.push(proxy);
      select.cachedOptions.push(proxy);
      select.optionsCount++;
      select.filteredOptionsCount++;
      on2("queryChange", queryChange);
      on2("handleGroupDisabled", handleGroupDisabled);
    });
    onBeforeUnmount(() => {
      const {
        selected,
        multiple
      } = select;
      const selectedOptions = multiple ? selected : [selected];
      const index2 = select.cachedOptions.indexOf(proxy);
      const selectedIndex = selectedOptions.indexOf(proxy);
      if (index2 > -1 && selectedIndex < 0) {
        select.cachedOptions.splice(index2, 1);
      }
      select.onOptionDestroy(select.options.indexOf(proxy));
    });
    return __spreadProps(__spreadValues({}, toRefs(data)), {
      selectOptionClick,
      itemSelected,
      limitReached,
      currentLabel,
      currentValue,
      hoverItem
    });
  }
};
function render$18(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("li", {
    onMouseenter: _cache[1] || (_cache[1] = (...args) => $setup.hoverItem && $setup.hoverItem(...args)),
    onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $setup.selectOptionClick && $setup.selectOptionClick(...args), ["stop"])),
    class: ["el-select-dropdown__item", {
      selected: $setup.itemSelected,
      "is-disabled": $props.disabled || _ctx.groupDisabled || $setup.limitReached,
      hover: _ctx.hover
    }]
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createVNode("span", null, toDisplayString($setup.currentLabel), 1)])], 34)), [[vShow, _ctx.visible]]);
}
script$1i.render = render$18;
script$1i.__file = "packages/option/Option.vue";
function _isSlot$3(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var useShow$1 = (emit) => {
  const show = ref(true);
  const handleClose = (e) => {
    e.stopPropagation();
    show.value = false;
    emit("close", e);
  };
  return {
    show,
    handleClose
  };
};
var script$1h = {
  name: "ElTag",
  props: {
    type: {
      type: String,
      default: "",
      validator(v) {
        return ["success", "info", "warning", "danger", ""].includes(v);
      }
    },
    closable: Boolean,
    disableTransitions: Boolean,
    hit: Boolean,
    color: String,
    size: {
      type: String,
      validator(v) {
        return ["medium", "small", "mini", ""].includes(v);
      }
    },
    effect: {
      type: String,
      default: "light",
      validator(v) {
        return ["dark", "light", "plain"].includes(v);
      }
    }
  },
  emits: ["close", "click"],
  setup(props2, {
    emit
  }) {
    const $ELEMENT = useGlobalOptions();
    const {
      type: type2,
      hit,
      size,
      effect
    } = toRefs(props2);
    const tagSize = computed(() => {
      return (size === null || size === void 0 ? void 0 : size.value) || $ELEMENT.size;
    });
    const classes = computed(() => ["el-tag", type2.value ? `el-tag--${type2.value}` : "", tagSize.value ? `el-tag--${tagSize.value}` : "", `el-tag--${effect.value}`, hit.value && "is-hit"]);
    const {
      show,
      handleClose
    } = useShow$1(emit);
    return {
      show,
      classes,
      handleClose
    };
  },
  render() {
    var _this$$slots$default, _this$$slots;
    const tagEl = this.show ? createVNode("span", {
      "class": this.classes,
      "style": {
        backgroundColor: this.color
      },
      "onClick": (e) => {
        this.$emit("click", e);
      }
    }, [(_this$$slots$default = (_this$$slots = this.$slots).default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots), this.closable && createVNode("i", {
      "class": "el-tag__close el-icon-close",
      "onClick": this.handleClose
    }, null)]) : "";
    return this.disableTransitions ? tagEl : createVNode(Transition, {
      "appear": true,
      "name": "el-zoom-in-center"
    }, _isSlot$3(tagEl) ? tagEl : {
      default: () => [tagEl]
    });
  }
};
script$1h.__file = "src/components/Tag/src/Tag.vue";
script$1h.install = function(app) {
  app.component(script$1h.name, script$1h);
};
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return function() {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    class_1.prototype.get = function(key) {
      var index2 = getIndex(this.__entries__, key);
      var entry = this.__entries__[index2];
      return entry && entry[1];
    };
    class_1.prototype.set = function(key, value) {
      var index2 = getIndex(this.__entries__, key);
      if (~index2) {
        this.__entries__[index2][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    class_1.prototype.delete = function(key) {
      var entries2 = this.__entries__;
      var index2 = getIndex(entries2, key);
      if (~index2) {
        entries2.splice(index2, 1);
      }
    };
    class_1.prototype.has = function(key) {
      return !!~getIndex(this.__entries__, key);
    };
    class_1.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    class_1.prototype.forEach = function(callback, ctx2) {
      if (ctx2 === void 0) {
        ctx2 = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx2, entry[1], entry[0]);
      }
    };
    return class_1;
  }();
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle$2(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle$2(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    var observers2 = this.observers_;
    var index2 = observers2.indexOf(observer);
    if (~index2) {
      observers2.splice(index2, 1);
    }
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    var activeObservers = this.observers_.filter(function(observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function(observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser || this.connected_) {
      return;
    }
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
    var isReflowProperty = transitionKeys.some(function(key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController2.getInstance = function() {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController2();
    }
    return this.instance_;
  };
  ResizeObserverController2.instance_ = null;
  return ResizeObserverController2;
}();
var defineConfigurable = function(target, props2) {
  for (var _i = 0, _a = Object.keys(props2); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props2[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return {
    x,
    y,
    width,
    height
  };
}
var ResizeObservation = function() {
  function ResizeObservation2(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  ResizeObservation2.prototype.isActive = function() {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation2.prototype.broadcastRect = function() {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation2;
}();
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, {
      target,
      contentRect
    });
  }
  return ResizeObserverEntry2;
}();
var ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function(observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    var ctx2 = this.callbackCtx_;
    var entries2 = this.activeObservations_.map(function(observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx2, entries2, ctx2);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI2;
}();
var observers = typeof WeakMap !== "undefined" ? new WeakMap() : new MapShim();
var ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (!(this instanceof ResizeObserver2)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver2;
}();
["observe", "unobserve", "disconnect"].forEach(function(method3) {
  ResizeObserver.prototype[method3] = function() {
    var _a;
    return (_a = observers.get(this))[method3].apply(_a, arguments);
  };
});
var index = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
var isServer = typeof window === "undefined";
var resizeHandler = function(entries2) {
  for (const entry of entries2) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach((fn) => {
        fn();
      });
    }
  }
};
var useResizeEvent = () => {
  let element = null;
  const addResizeListener2 = (fn) => {
    element.__resizeListeners__.push(fn);
  };
  const removeResizeListener2 = (fn) => {
    if (!element || !element.__resizeListeners__)
      return;
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      element.__ro__.disconnect();
    }
  };
  onMounted(() => {
    element = getCurrentInstance().vnode.el;
    if (isServer)
      return;
    if (!element.__resizeListeners__) {
      element.__resizeListeners__ = [];
      element.__ro__ = new index(resizeHandler);
      element.__ro__.observe(element);
    }
  });
  return {
    addResizeListener: addResizeListener2,
    removeResizeListener: removeResizeListener2
  };
};
var addResizeListener = function(element, fn) {
  if (isServer)
    return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new index(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};
var removeResizeListener = function(element, fn) {
  if (!element || !element.__resizeListeners__)
    return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};
var BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
function renderThumbStyle({
  move,
  size,
  bar
}) {
  const style = {};
  const translate = `translate${bar.value.axis}(${move.value}%)`;
  style[bar.value.size] = size.value;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;
  return style;
}
var useDrag$1 = ({
  bar,
  state,
  thumb,
  cursorDown
}) => {
  const instance2 = getCurrentInstance();
  const {
    proxy
  } = instance2;
  const wrap = computed(() => instance2.parent.proxy.wrap);
  const startDrag = (e) => {
    e.stopImmediatePropagation();
    cursorDown.value = true;
    on(document, "mousemove", mouseMoveDocumentHandler);
    on(document, "mouseup", mouseUpDocumentHandler);
    document.onselectstart = () => false;
  };
  const mouseMoveDocumentHandler = (e) => {
    if (cursorDown.value === false)
      return;
    const prevPage = state[bar.value.axis];
    if (!prevPage)
      return;
    const offset = (proxy.$el.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
    const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
    const thumbPositionPercentage = (offset - thumbClickPosition) * 100 / proxy.$el[bar.value.offset];
    wrap.value[bar.value.scroll] = thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100;
  };
  const mouseUpDocumentHandler = () => {
    cursorDown.value = false;
    state[bar.value.axis] = 0;
    off(document, "mousemove", mouseMoveDocumentHandler);
    document.onselectstart = null;
  };
  const clickThumbHandler = (e) => {
    if (e.ctrlKey || e.button === 2) {
      return;
    }
    startDrag(e);
    state[bar.value.axis] = e.currentTarget[bar.value.offset] - (e[bar.value.client] - e.currentTarget.getBoundingClientRect()[bar.value.direction]);
  };
  const clickTrackHandler = (e) => {
    const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
    const thumbHalf = thumb.value[bar.value.offset] / 2;
    const thumbPositionPercentage = (offset - thumbHalf) * 100 / proxy.$el[bar.value.offset];
    wrap.value[bar.value.scroll] = thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100;
  };
  onUnmounted(() => {
    off(document, "mouseup", mouseUpDocumentHandler);
  });
  return {
    clickThumbHandler,
    clickTrackHandler
  };
};
var Bar = {
  name: "Bar",
  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },
  setup(props2) {
    const {
      size,
      move,
      vertical
    } = toRefs(props2);
    const bar = computed(() => BAR_MAP[vertical.value ? "vertical" : "horizontal"]);
    const state = reactive({});
    const cursorDown = ref(false);
    const thumb = ref(null);
    const {
      clickThumbHandler,
      clickTrackHandler
    } = useDrag$1({
      bar,
      state,
      thumb,
      cursorDown
    });
    return () => createVNode("div", {
      "class": ["el-scrollbar__bar", "is-" + bar.value.key],
      "onMouseDown": clickTrackHandler
    }, [createVNode("div", {
      "ref": thumb,
      "className": "el-scrollbar__thumb",
      "onMouseDown": clickThumbHandler,
      "style": renderThumbStyle({
        size,
        move,
        bar
      })
    }, null)]);
  }
};
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var useScroll = (wrap, native, resize, noresize) => {
  const data = reactive({
    sizeWidth: "0",
    sizeHeight: "0",
    moveX: 0,
    moveY: 0
  });
  const handleScroll2 = () => {
    data.moveY = wrap.value.scrollTop * 100 / wrap.value.clientHeight;
    data.moveX = wrap.value.scrollLeft * 100 / wrap.value.clientWidth;
  };
  const update = () => {
    if (!(wrap !== null && wrap !== void 0 && wrap.value))
      return;
    const heightPercentage = wrap.value.clientHeight * 100 / wrap.value.scrollHeight;
    const widthPercentage = wrap.value.clientWidth * 100 / wrap.value.scrollWidth;
    data.sizeHeight = heightPercentage < 100 ? heightPercentage + "%" : "";
    data.sizeWidth = widthPercentage < 100 ? widthPercentage + "%" : "";
  };
  onMounted(() => {
    if (native.value)
      return;
    nextTick(update);
    !noresize.value && addResizeListener(resize.value, update);
  });
  onUnmounted(() => {
    if (native.value)
      return;
    !noresize.value && removeResizeListener(resize.value, update);
  });
  return {
    data,
    update,
    handleScroll: handleScroll2
  };
};
var ElScrollbar = {
  name: "ElScrollbar",
  components: {
    Bar
  },
  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props2) {
    const wrap = ref(null);
    const resize = ref(null);
    const {
      wrapStyle,
      tag,
      native,
      noresize
    } = toRefs(props2);
    const gutter = getScrollBarWidth();
    let style = wrapStyle === null || wrapStyle === void 0 ? void 0 : wrapStyle.value;
    const ComponentName = tag.value;
    if (gutter) {
      const gutterWith = `-${gutter}px`;
      const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`;
      if (Array.isArray(wrapStyle === null || wrapStyle === void 0 ? void 0 : wrapStyle.value)) {
        style = toObject(wrapStyle === null || wrapStyle === void 0 ? void 0 : wrapStyle.value);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof wrapStyle === "string") {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    const {
      data,
      handleScroll: handleScroll2,
      update
    } = useScroll(wrap, native, resize, noresize);
    return {
      data,
      style,
      native,
      gutter,
      wrap,
      resize,
      ComponentName,
      handleScroll: handleScroll2,
      update
    };
  },
  render() {
    let _slot;
    const ComponentName = this.ComponentName;
    return createVNode("div", {
      "class": "el-scrollbar"
    }, [createVNode("div", {
      "ref": "wrap",
      "class": [this.wrapClass, "el-scrollbar__wrap", {
        "el-scrollbar__wrap--hidden-default": !this.native && !this.gutter
      }],
      "onScroll": () => {
        !this.native && this.handleScroll();
      },
      "style": this.style
    }, [createVNode(ComponentName, {
      "ref": "resize",
      "class": ["el-scrollbar__view", this.viewClass],
      "style": this.viewStyle
    }, _isSlot$2(_slot = this.$slots.default()) ? _slot : {
      default: () => [_slot]
    })]), !this.native.value && [createVNode(Bar, {
      "move": this.data.moveX,
      "size": this.data.sizeWidth
    }, null), createVNode(Bar, {
      "vertical": true,
      "move": this.data.moveY,
      "size": this.data.sizeHeight
    }, null)]]);
  }
};
ElScrollbar.install = function(app) {
  app.component(ElScrollbar.name, ElScrollbar);
};
function throttle$1(delay, noTrailing, callback, debounceMode) {
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  }
  if (typeof noTrailing !== "boolean") {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = void 0;
  }
  function wrapper2() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self2 = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self2, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      exec();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper2.cancel = cancel;
  return wrapper2;
}
function debounce$1(delay, atBegin, callback) {
  return callback === void 0 ? throttle$1(delay, atBegin, false) : throttle$1(delay, callback, atBegin !== false);
}
var nodeList = [];
var ctx = "@@clickoutsideContext";
var startClick;
var seed = 0;
on(document, "mousedown", (e) => startClick = e);
on(document, "mouseup", (e) => {
  nodeList.forEach((node) => node[ctx].documentHandler(e, startClick));
});
function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    if (!vnode || !binding.instance || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || binding.instance.popperElm && (binding.instance.popperElm.contains(mouseup.target) || binding.instance.popperElm.contains(mousedown.target)))
      return;
    if (binding.expression && el[ctx].methodName && binding.instance[el[ctx].methodName]) {
      binding.instance[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}
var Clickoutside = {
  beforeMount(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  updated(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unmounted(el) {
    const len = nodeList.length;
    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};
function scrollIntoView(container, selected) {
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
var NavigationMixin = {
  data() {
    return {
      hoverOption: -1
    };
  },
  computed: {
    optionsAllDisabled() {
      return this.options.filter((option) => option.visible).every((option) => option.disabled);
    }
  },
  watch: {
    hoverIndex(val) {
      if (typeof val === "number" && val > -1) {
        this.hoverOption = this.options[val] || {};
      }
      this.options.forEach((option) => {
        option.hover = this.hoverOption === option;
      });
    }
  },
  methods: {
    navigateOptions(direction) {
      if (!this.visible) {
        this.visible = true;
        return;
      }
      if (this.options.length === 0 || this.filteredOptionsCount === 0)
        return;
      if (!this.optionsAllDisabled) {
        if (direction === "next") {
          this.hoverIndex++;
          if (this.hoverIndex === this.options.length) {
            this.hoverIndex = 0;
          }
        } else if (direction === "prev") {
          this.hoverIndex--;
          if (this.hoverIndex < 0) {
            this.hoverIndex = this.options.length - 1;
          }
        }
        const option = this.options[this.hoverIndex];
        if (option.disabled === true || option.groupDisabled === true || !option.visible) {
          this.navigateOptions(direction);
        }
        this.$nextTick(() => this.scrollToOption(this.hoverOption));
      }
    }
  }
};
function isDef(val) {
  return val !== void 0 && val !== null;
}
function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
var script$1g = {
  mixins: [Locale, Focus("reference"), NavigationMixin],
  name: "ElSelect",
  componentName: "ElSelect",
  inject: {
    elForm: {
      default: ""
    },
    elFormItem: {
      default: ""
    }
  },
  provide() {
    return {
      select: this
    };
  },
  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    readonly() {
      return !this.filterable || this.multiple || !isIE() && !isEdge() && !this.visible;
    },
    showClose() {
      const hasValue = this.multiple ? Array.isArray(this.modelValue) && this.modelValue.length > 0 : this.modelValue !== void 0 && this.modelValue !== null && this.modelValue !== "";
      const criteria = this.clearable && !this.selectDisabled && this.inputHovering && hasValue;
      return criteria;
    },
    iconClass() {
      return this.remote && this.filterable ? "" : this.visible ? "arrow-up is-reverse" : "arrow-up";
    },
    debounce() {
      return this.remote ? 300 : 0;
    },
    emptyText() {
      if (this.loading) {
        return this.loadingText || this.t("el.select.loading");
      } else {
        if (this.remote && this.query === "" && this.options.length === 0)
          return false;
        if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
          return this.noMatchText || this.t("el.select.noMatch");
        }
        if (this.options.length === 0) {
          return this.noDataText || this.t("el.select.noData");
        }
      }
      return null;
    },
    showNewOption() {
      const hasExistingOption = this.options.filter((option) => !option.created).some((option) => option.currentLabel === this.query);
      return this.filterable && this.allowCreate && this.query !== "" && !hasExistingOption;
    },
    selectSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    selectDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    collapseTagSize() {
      return ["small", "mini"].indexOf(this.selectSize) > -1 ? "mini" : "small";
    }
  },
  components: {
    ElInput: script$1l,
    ElSelectMenu: script$1j,
    ElOption: script$1i,
    ElTag: script$1h,
    ElScrollbar
  },
  directives: {
    Clickoutside
  },
  props: {
    name: String,
    id: String,
    modelValue: {
      required: true
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    autoComplete: {
      type: String,
      validator() {
        console.warn("[Element Warn][Select]'auto-complete' property will be deprecated in next major version. please use 'autocomplete' instead.");
        return true;
      }
    },
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default() {
        return t("el.select.placeholder");
      }
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "input", "change", "blur", "focus", "clear", "visible-change", "remove-tag", "setSelected"],
  setup() {
    const {
      dispatch,
      broadcast: broadcast2,
      on: on2
    } = useEmitter();
    return {
      dispatch,
      broadcast: broadcast2,
      on: on2
    };
  },
  data() {
    return {
      options: [],
      cachedOptions: [],
      createdLabel: null,
      createdSelected: false,
      selected: this.multiple ? [] : {},
      inputLength: 20,
      inputWidth: 0,
      initialInputHeight: 0,
      cachedPlaceHolder: "",
      optionsCount: 0,
      filteredOptionsCount: 0,
      visible: false,
      softFocus: false,
      selectedLabel: "",
      hoverIndex: -1,
      query: "",
      previousQuery: null,
      inputHovering: false,
      currentPlaceholder: "",
      menuVisibleOnFocus: false,
      isOnComposition: false,
      isSilentBlur: false
    };
  },
  watch: {
    selectDisabled() {
      this.$nextTick(() => {
        this.resetInputHeight();
      });
    },
    placeholder(val) {
      this.cachedPlaceHolder = this.currentPlaceholder = val;
    },
    modelValue(val, oldVal) {
      if (this.multiple) {
        this.resetInputHeight();
        if (val && val.length > 0 || this.$refs.input && this.query !== "") {
          this.currentPlaceholder = "";
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder;
        }
        if (this.filterable && !this.reserveKeyword) {
          this.query = "";
          this.handleQueryChange(this.query);
        }
      }
      this.setSelected();
      if (this.filterable && !this.multiple) {
        this.inputLength = 20;
      }
      if (!valueEquals(val, oldVal)) {
        this.dispatch("el.form.change", val);
      }
    },
    visible(val) {
      if (!val) {
        this.broadcast("destroyPopper");
        if (this.$refs.input) {
          this.$refs.input.blur();
        }
        this.query = "";
        this.previousQuery = null;
        this.selectedLabel = "";
        this.inputLength = 20;
        this.menuVisibleOnFocus = false;
        this.resetHoverIndex();
        this.$nextTick(() => {
          if (this.$refs.input && this.$refs.input.value === "" && this.selected.length === 0) {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
        });
        if (!this.multiple) {
          if (this.selected) {
            if (this.filterable && this.allowCreate && this.createdSelected && this.createdLabel) {
              this.selectedLabel = this.createdLabel;
            } else {
              this.selectedLabel = this.selected.currentLabel;
            }
            if (this.filterable)
              this.query = this.selectedLabel;
          }
          if (this.filterable) {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
        }
      } else {
        this.broadcast("updatePopper");
        if (this.filterable) {
          this.query = this.remote ? "" : this.selectedLabel;
          this.handleQueryChange(this.query);
          if (this.multiple) {
            this.$refs.input.focus();
          } else {
            if (!this.remote) {
              this.broadcast("queryChange", "");
              this.broadcast("optionGroup.queryChange");
            }
            if (this.selectedLabel) {
              this.currentPlaceholder = this.selectedLabel;
              this.selectedLabel = "";
            }
          }
        }
      }
      this.$emit("visible-change", val);
    },
    options() {
      if (this.$isServer)
        return;
      this.$nextTick(() => {
        this.broadcast("updatePopper");
      });
      if (this.multiple) {
        this.resetInputHeight();
      }
      const inputs = this.$el.querySelectorAll("input");
      if ([].indexOf.call(inputs, document.activeElement) === -1) {
        this.setSelected();
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    }
  },
  methods: {
    handleComposition(event) {
      const text = event.target.value;
      if (event.type === "compositionend") {
        this.isOnComposition = false;
        this.$nextTick(() => this.handleQueryChange(text));
      } else {
        const lastCharacter = text[text.length - 1] || "";
        this.isOnComposition = !isKorean(lastCharacter);
      }
    },
    handleQueryChange(val) {
      if (this.previousQuery === val || this.isOnComposition)
        return;
      if (this.previousQuery === null && (typeof this.filterMethod === "function" || typeof this.remoteMethod === "function")) {
        this.previousQuery = val;
        return;
      }
      this.previousQuery = val;
      this.$nextTick(() => {
        if (this.visible) {
          this.broadcast("updatePopper");
        }
      });
      this.hoverIndex = -1;
      if (this.multiple && this.filterable) {
        this.$nextTick(() => {
          const length = this.$refs.input.value.length * 15 + 20;
          this.inputLength = this.collapseTags ? Math.min(50, length) : length;
          this.managePlaceholder();
          this.resetInputHeight();
        });
      }
      if (this.remote && typeof this.remoteMethod === "function") {
        this.hoverIndex = -1;
        this.remoteMethod(val);
      } else if (typeof this.filterMethod === "function") {
        this.filterMethod(val);
        this.broadcast("optionGroup.queryChange");
      } else {
        this.filteredOptionsCount = this.optionsCount;
        this.broadcast("queryChange", val);
        this.broadcast("optionGroup.queryChange");
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    },
    scrollToOption(option) {
      const target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
      if (this.$refs.popper && target) {
        const menu = this.$refs.popper.$el.querySelector(".el-select-dropdown__wrap");
        scrollIntoView(menu, target);
      }
      this.$refs.scrollbar && this.$refs.scrollbar.handleScroll();
    },
    handleMenuEnter() {
      this.$nextTick(() => this.scrollToOption(this.selected));
    },
    emitChange(val) {
      if (!valueEquals(this.modelValue, val)) {
        this.$emit("change", val);
      }
    },
    getOption(value) {
      let option;
      const isObject2 = Object.prototype.toString.call(value).toLowerCase() === "[object object]";
      const isNull = Object.prototype.toString.call(value).toLowerCase() === "[object null]";
      const isUndefined2 = Object.prototype.toString.call(value).toLowerCase() === "[object undefined]";
      for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
        const cachedOption = this.cachedOptions[i];
        const isEqual2 = isObject2 ? getValueByPath(cachedOption.value, this.valueKey) === getValueByPath(value, this.valueKey) : cachedOption.value === value;
        if (isEqual2) {
          option = cachedOption;
          break;
        }
      }
      if (option)
        return option;
      const label = !isObject2 && !isNull && !isUndefined2 ? value : "";
      const newOption = {
        value,
        currentLabel: label
      };
      if (this.multiple) {
        newOption.hitState = false;
      }
      return newOption;
    },
    setSelected() {
      if (!this.multiple) {
        const option = this.getOption(this.modelValue);
        if (option.created) {
          this.createdLabel = option.currentLabel;
          this.createdSelected = true;
        } else {
          this.createdSelected = false;
        }
        this.selectedLabel = option.currentLabel;
        this.selected = option;
        if (this.filterable)
          this.query = this.selectedLabel;
        return;
      }
      const result = [];
      if (Array.isArray(this.modelValue)) {
        this.modelValue.forEach((value) => {
          result.push(this.getOption(value));
        });
      }
      this.selected = result;
      this.$nextTick(() => {
        this.resetInputHeight();
      });
    },
    handleFocus(event) {
      if (!this.softFocus) {
        if (this.automaticDropdown || this.filterable) {
          this.visible = true;
          if (this.filterable) {
            this.menuVisibleOnFocus = true;
          }
        }
        this.$emit("focus", event);
      } else {
        this.softFocus = false;
      }
    },
    blur() {
      this.visible = false;
      this.$refs.reference.blur();
    },
    handleBlur(event) {
      setTimeout(() => {
        if (this.isSilentBlur) {
          this.isSilentBlur = false;
        } else {
          this.$emit("blur", event);
        }
      }, 50);
      this.softFocus = false;
    },
    handleClearClick(event) {
      this.deleteSelected(event);
    },
    doDestroy() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },
    handleClose() {
      this.visible = false;
    },
    toggleLastOptionHitState(hit) {
      if (!Array.isArray(this.selected))
        return;
      const option = this.selected[this.selected.length - 1];
      if (!option)
        return;
      if (hit === true || hit === false) {
        option.hitState = hit;
        return hit;
      }
      option.hitState = !option.hitState;
      return option.hitState;
    },
    deletePrevTag(e) {
      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
        const value = this.modelValue.slice();
        value.pop();
        this.$emit("update:modelValue", value);
        this.emitChange(value);
      }
    },
    managePlaceholder() {
      if (this.currentPlaceholder !== "") {
        this.currentPlaceholder = this.$refs.input.value ? "" : this.cachedPlaceHolder;
      }
    },
    resetInputState(e) {
      if (e.keyCode !== 8)
        this.toggleLastOptionHitState(false);
      this.inputLength = this.$refs.input.value.length * 15 + 20;
      this.resetInputHeight();
    },
    resetInputHeight() {
      if (this.collapseTags && !this.filterable)
        return;
      this.$nextTick(() => {
        if (!this.$refs.reference)
          return;
        const inputChildNodes = this.$refs.reference.$el.childNodes;
        const input = [].filter.call(inputChildNodes, (item) => item.tagName === "INPUT")[0];
        const tags = this.$refs.tags;
        const sizeInMap = this.initialInputHeight || 40;
        if (input) {
          input.style.height = this.selected.length === 0 ? sizeInMap + "px" : Math.max(tags ? tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap) + "px";
        }
        if (this.visible && this.emptyText !== false) {
          this.broadcast("updatePopper");
        }
      });
    },
    resetHoverIndex() {
      setTimeout(() => {
        if (!this.multiple) {
          this.hoverIndex = this.options.indexOf(this.selected);
        } else {
          if (this.selected.length > 0) {
            this.hoverIndex = Math.min.apply(null, this.selected.map((item) => this.options.indexOf(item)));
          } else {
            this.hoverIndex = -1;
          }
        }
      }, 300);
    },
    handleOptionSelect({
      option,
      byClick
    }) {
      if (this.multiple) {
        const value = (this.modelValue || []).slice();
        const optionIndex = this.getValueIndex(value, option.value);
        if (optionIndex > -1) {
          value.splice(optionIndex, 1);
        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
          value.push(option.value);
        }
        this.$emit("update:modelValue", value);
        this.emitChange(value);
        if (option.created) {
          this.query = "";
          this.handleQueryChange("");
          this.inputLength = 20;
        }
        if (this.filterable)
          this.$refs.input.focus();
      } else {
        this.$emit("update:modelValue", option.value);
        this.emitChange(option.value);
        this.visible = false;
      }
      this.isSilentBlur = byClick;
      this.setSoftFocus();
      if (this.visible)
        return;
      this.$nextTick(() => {
        this.scrollToOption(option);
      });
    },
    setSoftFocus() {
      this.softFocus = true;
      const input = this.$refs.input || this.$refs.reference;
      if (input) {
        input.focus();
      }
    },
    getValueIndex(arr = [], value) {
      const isObject2 = Object.prototype.toString.call(value).toLowerCase() === "[object object]";
      if (!isObject2) {
        return arr.indexOf(value);
      } else {
        const valueKey = this.valueKey;
        let index2 = -1;
        arr.some((item, i) => {
          if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
            index2 = i;
            return true;
          }
          return false;
        });
        return index2;
      }
    },
    toggleMenu() {
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false;
        } else {
          this.visible = !this.visible;
        }
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus();
        }
      }
    },
    selectOption() {
      if (!this.visible) {
        this.toggleMenu();
      } else {
        if (this.options[this.hoverIndex]) {
          this.handleOptionSelect({
            option: this.options[this.hoverIndex]
          });
        }
      }
    },
    deleteSelected(event) {
      event.stopPropagation();
      const value = this.multiple ? [] : "";
      this.$emit("update:modelValue", value);
      this.emitChange(value);
      this.visible = false;
      this.$emit("clear");
    },
    deleteTag(event, tag) {
      const index2 = this.selected.indexOf(tag);
      if (index2 > -1 && !this.selectDisabled) {
        const value = this.modelValue.slice();
        value.splice(index2, 1);
        this.$emit("update:modelValue", value);
        this.emitChange(value);
        this.$emit("remove-tag", tag.value);
      }
      event.stopPropagation();
    },
    onInputChange() {
      if (this.filterable && this.query !== this.selectedLabel) {
        this.query = this.selectedLabel;
        this.handleQueryChange(this.query);
      }
    },
    onOptionDestroy(index2) {
      if (index2 > -1) {
        this.optionsCount--;
        this.filteredOptionsCount--;
        this.options.splice(index2, 1);
      }
    },
    resetInputWidth() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },
    handleResize() {
      this.resetInputWidth();
      if (this.multiple)
        this.resetInputHeight();
    },
    checkDefaultFirstOption() {
      this.hoverIndex = -1;
      let hasCreated = false;
      for (let i = this.options.length - 1; i >= 0; i--) {
        if (this.options[i].created) {
          hasCreated = true;
          this.hoverIndex = i;
          break;
        }
      }
      if (hasCreated)
        return;
      for (let i = 0; i !== this.options.length; ++i) {
        const option = this.options[i];
        if (this.query) {
          if (!option.disabled && !option.groupDisabled && option.visible) {
            this.hoverIndex = i;
            break;
          }
        } else {
          if (option.itemSelected) {
            this.hoverIndex = i;
            break;
          }
        }
      }
    },
    getValueKey(item) {
      if (Object.prototype.toString.call(item.value).toLowerCase() !== "[object object]") {
        return item.value;
      } else {
        return getValueByPath(item.value, this.valueKey);
      }
    }
  },
  created() {
    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
    if (this.multiple && !Array.isArray(this.modelValue)) {
      this.$emit("update:modelValue", []);
    }
    if (!this.multiple && Array.isArray(this.modelValue)) {
      this.$emit("update:modelValue", "");
    }
    this.debouncedOnInputChange = debounce$1(this.debounce, () => {
      this.onInputChange();
    });
    this.debouncedQueryChange = debounce$1(this.debounce, (e) => {
      this.handleQueryChange(e.target.value);
    });
    this.on("handleOptionClick", this.handleOptionSelect);
    this.on("setSelected", this.setSelected);
  },
  mounted() {
    if (this.multiple && Array.isArray(this.modelValue) && this.modelValue.length > 0) {
      this.currentPlaceholder = "";
    }
    addResizeListener(this.$el, this.handleResize);
    const reference = this.$refs.reference;
    if (reference && reference.$el) {
      const sizeMap = {
        medium: 36,
        small: 32,
        mini: 28
      };
      const input = reference.$el.querySelector("input");
      this.initialInputHeight = input.getBoundingClientRect().height || sizeMap[this.selectSize];
    }
    if (this.remote && this.multiple) {
      this.resetInputHeight();
    }
    this.$nextTick(() => {
      if (reference && reference.$el) {
        this.inputWidth = reference.$el.getBoundingClientRect().width;
      }
    });
    this.setSelected();
  },
  beforeUnmount() {
    if (this.$el && this.handleResize)
      removeResizeListener(this.$el, this.handleResize);
  }
};
var _hoisted_1$P = {
  key: 0
};
var _hoisted_2$y = {
  class: "el-select__tags-text"
};
var _hoisted_3$r = {
  class: "el-select__tags-text"
};
var _hoisted_4$g = {
  class: "el-select__tags-text"
};
var _hoisted_5$c = {
  key: 1,
  class: "el-select-dropdown__empty"
};
function render$17(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return withDirectives((openBlock(), createBlock("div", {
    class: ["el-select", [$options.selectSize ? "el-select--" + $options.selectSize : ""]],
    onClick: _cache[23] || (_cache[23] = withModifiers((...args) => $options.toggleMenu && $options.toggleMenu(...args), ["stop"])),
    onMouseenter: _cache[24] || (_cache[24] = ($event) => $data.inputHovering = true),
    onMouseleave: _cache[25] || (_cache[25] = ($event) => $data.inputHovering = false)
  }, [$props.multiple ? (openBlock(), createBlock("div", {
    key: 0,
    class: "el-select__tags",
    ref: "tags",
    style: {
      "max-width": $data.inputWidth - 32 + "px",
      width: "100%"
    }
  }, [$props.collapseTags && $data.selected.length ? (openBlock(), createBlock("span", _hoisted_1$P, [createVNode(_component_el_tag, {
    closable: !$options.selectDisabled,
    size: $options.collapseTagSize,
    hit: $data.selected[0].hitState,
    type: "info",
    onClose: _cache[1] || (_cache[1] = ($event) => $options.deleteTag($event, $data.selected[0])),
    "disable-transitions": ""
  }, {
    default: withCtx(() => [createVNode("span", _hoisted_2$y, toDisplayString($data.selected[0].currentLabel), 1)]),
    _: 1
  }, 8, ["closable", "size", "hit"]), $data.selected.length > 1 ? (openBlock(), createBlock(_component_el_tag, {
    key: 0,
    closable: false,
    size: $options.collapseTagSize,
    type: "info",
    "disable-transitions": ""
  }, {
    default: withCtx(() => [createVNode("span", _hoisted_3$r, "+ " + toDisplayString($data.selected.length - 1), 1)]),
    _: 1
  }, 8, ["size"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), !$props.collapseTags ? (openBlock(), createBlock(TransitionGroup, {
    key: 1,
    onAfterLeave: $options.resetInputHeight
  }, {
    default: withCtx(() => [createVNode("span", null, [(openBlock(true), createBlock(Fragment, null, renderList($data.selected, (item) => {
      return openBlock(), createBlock(_component_el_tag, {
        key: $options.getValueKey(item),
        closable: !$options.selectDisabled,
        size: $options.collapseTagSize,
        hit: item.hitState,
        type: "info",
        onClose: ($event) => $options.deleteTag($event, item),
        "disable-transitions": ""
      }, {
        default: withCtx(() => [createVNode("span", _hoisted_4$g, toDisplayString(item.currentLabel), 1)]),
        _: 2
      }, 1032, ["closable", "size", "hit", "onClose"]);
    }), 128))])]),
    _: 1
  }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true), $props.filterable ? withDirectives((openBlock(), createBlock("input", {
    key: 2,
    type: "text",
    class: ["el-select__input", [$options.selectSize ? `is-${$options.selectSize}` : ""]],
    disabled: $options.selectDisabled,
    autocomplete: $props.autoComplete || $props.autocomplete,
    onFocus: _cache[2] || (_cache[2] = (...args) => $options.handleFocus && $options.handleFocus(...args)),
    onBlur: _cache[3] || (_cache[3] = ($event) => $data.softFocus = false),
    onKeyup: _cache[4] || (_cache[4] = (...args) => $options.managePlaceholder && $options.managePlaceholder(...args)),
    onKeydown: [_cache[5] || (_cache[5] = (...args) => $options.resetInputState && $options.resetInputState(...args)), _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])), _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])), _cache[8] || (_cache[8] = withKeys(withModifiers((...args) => $options.selectOption && $options.selectOption(...args), ["prevent"]), ["enter"])), _cache[9] || (_cache[9] = withKeys(withModifiers(($event) => $data.visible = false, ["stop", "prevent"]), ["esc"])), _cache[10] || (_cache[10] = withKeys((...args) => $options.deletePrevTag && $options.deletePrevTag(...args), ["delete"])), _cache[11] || (_cache[11] = withKeys(($event) => $data.visible = false, ["tab"]))],
    onCompositionstart: _cache[12] || (_cache[12] = (...args) => $options.handleComposition && $options.handleComposition(...args)),
    onCompositionupdate: _cache[13] || (_cache[13] = (...args) => $options.handleComposition && $options.handleComposition(...args)),
    onCompositionend: _cache[14] || (_cache[14] = (...args) => $options.handleComposition && $options.handleComposition(...args)),
    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.query = $event),
    onInput: _cache[16] || (_cache[16] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args)),
    style: {
      "flex-grow": "1",
      width: $data.inputLength / ($data.inputWidth - 32) + "%",
      "max-width": $data.inputWidth - 42 + "px"
    },
    ref: "input"
  }, null, 46, ["disabled", "autocomplete"])), [[vModelText, $data.query]]) : createCommentVNode("v-if", true)], 4)) : createCommentVNode("v-if", true), createVNode(_component_el_input, {
    ref: "reference",
    modelValue: $data.selectedLabel,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $data.selectedLabel = $event),
    type: "text",
    placeholder: $data.currentPlaceholder,
    name: $props.name,
    id: $props.id,
    autocomplete: $props.autoComplete || $props.autocomplete,
    size: $options.selectSize,
    disabled: $options.selectDisabled,
    readonly: $options.readonly,
    "validate-event": false,
    class: {
      "is-focus": $data.visible
    },
    tabindex: $props.multiple && $props.filterable ? "-1" : null,
    onFocus: $options.handleFocus,
    onBlur: $options.handleBlur,
    onKeyup: _ctx.debouncedOnInputChange,
    onKeydown: [_cache[19] || (_cache[19] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])), _cache[20] || (_cache[20] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])), withKeys(withModifiers($options.selectOption, ["prevent"]), ["enter"]), _cache[21] || (_cache[21] = withKeys(withModifiers(($event) => $data.visible = false, ["stop", "prevent"]), ["esc"])), _cache[22] || (_cache[22] = withKeys(($event) => $data.visible = false, ["tab"]))],
    onPaste: _ctx.debouncedOnInputChange
  }, createSlots({
    suffix: withCtx(() => [withDirectives(createVNode("i", {
      class: ["el-select__caret", "el-input__icon", "el-icon-" + $options.iconClass]
    }, null, 2), [[vShow, !$options.showClose]]), $options.showClose ? (openBlock(), createBlock("i", {
      key: 0,
      class: "el-select__caret el-input__icon el-icon-circle-close",
      onClick: _cache[17] || (_cache[17] = (...args) => $options.handleClearClick && $options.handleClearClick(...args))
    })) : createCommentVNode("v-if", true)]),
    _: 2
  }, [_ctx.$slots.prefix ? {
    name: "prefix",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "prefix")])
  } : void 0]), 1032, ["modelValue", "placeholder", "name", "id", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onKeyup", "onKeydown", "onPaste"]), createVNode(Transition, {
    name: "el-zoom-in-top",
    onBeforeEnter: $options.handleMenuEnter,
    onAfterLeave: $options.doDestroy
  }, {
    default: withCtx(() => [withDirectives(createVNode(_component_el_select_menu, {
      ref: "popper",
      "append-to-body": $props.popperAppendToBody
    }, {
      default: withCtx(() => [withDirectives(createVNode(_component_el_scrollbar, {
        tag: "ul",
        "wrap-class": "el-select-dropdown__wrap",
        "view-class": "el-select-dropdown__list",
        ref: "scrollbar",
        class: {
          "is-empty": !$props.allowCreate && $data.query && $data.filteredOptionsCount === 0
        }
      }, {
        default: withCtx(() => [$options.showNewOption ? (openBlock(), createBlock(_component_el_option, {
          key: 0,
          value: $data.query,
          created: ""
        }, null, 8, ["value"])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["class"]), [[vShow, $data.options.length > 0 && !$props.loading]]), $options.emptyText && (!$props.allowCreate || $props.loading || $props.allowCreate && $data.options.length === 0) ? (openBlock(), createBlock(Fragment, {
        key: 0
      }, [_ctx.$slots.empty ? renderSlot(_ctx.$slots, "empty", {
        key: 0
      }) : (openBlock(), createBlock("p", _hoisted_5$c, toDisplayString($options.emptyText), 1))], 64)) : createCommentVNode("v-if", true)]),
      _: 1
    }, 8, ["append-to-body"]), [[vShow, $data.visible && $options.emptyText !== false]])]),
    _: 1
  }, 8, ["onBeforeEnter", "onAfterLeave"])], 34)), [[_directive_clickoutside, $options.handleClose]]);
}
script$1g.render = render$17;
script$1g.__file = "packages/select/Select.vue";
script$1g.install = function(app) {
  app.component(script$1g.name, script$1g);
};
script$1i.install = function(app) {
  app.component(script$1i.name, script$1i);
};
var script$1f = {
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props2) {
    const {
      disabled
    } = toRefs(props2);
    const visible = ref(true);
    const {
      on: on2,
      broadcast: broadcast2
    } = useEmitter();
    const {
      proxy
    } = getCurrentInstance();
    watch(disabled, (val) => {
      broadcast2("handleGroupDisabled", val);
    });
    function queryChange() {
      visible.value = proxy.$children && Array.isArray(proxy.$children) && proxy.$children.some((option) => option.visible === true);
    }
    onBeforeMount(() => {
      on2("optionGroup.queryChange", queryChange);
    });
    onMounted(() => {
      if (unref(disabled)) {
        broadcast2("handleGroupDisabled", unref(disabled));
      }
    });
    return {
      visible
    };
  }
};
var _hoisted_1$O = {
  class: "el-select-group__wrap"
};
var _hoisted_2$x = {
  class: "el-select-group__title"
};
var _hoisted_3$q = {
  class: "el-select-group"
};
function render$16(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("ul", _hoisted_1$O, [createVNode("li", _hoisted_2$x, toDisplayString($props.label), 1), createVNode("li", null, [createVNode("ul", _hoisted_3$q, [renderSlot(_ctx.$slots, "default")])])], 512)), [[vShow, $setup.visible]]);
}
script$1f.render = render$16;
script$1f.__file = "packages/option-group/OptionGroup.vue";
script$1f.install = function(app) {
  app.component(script$1f.name, script$1f);
};
var stop$1 = (e) => e.stopPropagation();
var Popper = {
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: "bottom"
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: {},
    popper: {},
    offset: {
      default: 0
    },
    value: Boolean,
    visibleArrow: Boolean,
    arrowOffset: {
      type: Number,
      default: 35
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default() {
        return {
          gpuAcceleration: false
        };
      }
    }
  },
  data() {
    return {
      showPopper: false,
      currentPlacement: ""
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.showPopper = val;
        this.$emit("input", val);
      }
    },
    showPopper(val) {
      if (this.disabled)
        return;
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit("input", val);
    }
  },
  methods: {
    createPopper() {
      if (this.$isServer)
        return;
      this.currentPlacement = this.currentPlacement || this.placement;
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return;
      }
      const options = this.popperOptions;
      const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
      let reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;
      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (!popper || !reference)
        return;
      if (this.visibleArrow)
        this.appendArrow(popper);
      if (this.appendToBody)
        document.body.appendChild(this.popperElm);
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }
      options.placement = this.currentPlacement;
      options.offset = this.offset;
      options.arrowOffset = this.arrowOffset;
      this.popperJS = new Popper$1(reference, popper, options);
      this.popperJS.onCreate(() => {
        this.$emit("created", this);
        this.resetTransformOrigin();
        this.$nextTick(this.updatePopper);
      });
      if (typeof options.onUpdate === "function") {
        this.popperJS.onUpdate(options.onUpdate);
      }
      this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
      this.popperElm.addEventListener("click", stop$1);
    },
    updatePopper() {
      const popperJS = this.popperJS;
      if (popperJS) {
        popperJS.update();
        if (popperJS._popper) {
          popperJS._popper.style.zIndex = PopupManager.nextZIndex();
        }
      } else {
        this.createPopper();
      }
    },
    doDestroy(forceDestroy) {
      if (!this.popperJS || this.showPopper && !forceDestroy)
        return;
      this.popperJS.destroy();
      this.popperJS = null;
    },
    destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin();
      }
    },
    resetTransformOrigin() {
      if (!this.transformOrigin)
        return;
      const placementMap = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      };
      const placement = this.popperJS._popper.getAttribute("x-placement").split("-")[0];
      const origin = placementMap[placement];
      this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === "string" ? this.transformOrigin : ["top", "bottom"].indexOf(placement) > -1 ? `center ${origin}` : `${origin} center`;
    },
    appendArrow(element) {
      let hash;
      if (this.appended) {
        return;
      }
      this.appended = true;
      for (const item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }
      const arrow = document.createElement("div");
      if (hash) {
        arrow.setAttribute(hash, "");
      }
      arrow.setAttribute("x-arrow", "");
      arrow.className = "popper__arrow";
      element.appendChild(arrow);
    }
  },
  beforeUnmount() {
    this.doDestroy(true);
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener("click", stop$1);
      document.body.removeChild(this.popperElm);
    }
  },
  deactivated() {
    this.$options.beforeUnmount[0].call(this);
  }
};
function migrating(options) {
  onMounted(() => {
    const componentInstance = getCurrentInstance();
    const componentName = componentInstance.type.name || "";
    const attrs = componentInstance.proxy.$attrs;
    for (const key in options) {
      if (attrs[key]) {
        const warn = options[key];
        const type2 = isOn(key) ? "Event" : "Attribute";
        console.warn(`[Element Migrating][${componentName}][${type2}]: ${warn}`);
      }
    }
  });
}
var script$1e = {
  components: {
    ElCheckbox: script$1o,
    ElRadio: script$1r,
    renderHelper(props2) {
      const {
        render: render3,
        node
      } = props2.nodeLabel;
      const vNode = render3 ? render3({
        node: node.value,
        data: node.value.data
      }) : null;
      const res = vNode || node.value.label;
      return h(Fragment, {}, [res]);
    }
  },
  emits: ["created", "expand"],
  props: {
    node: {
      required: true
    },
    nodeId: String
  },
  setup(props2, {
    emit
  }) {
    const {
      node
    } = toRefs(props2);
    const {
      panel,
      config,
      checkedValue,
      inActivePath,
      inCheckedPath
    } = usePanel(node);
    const {
      value,
      loading,
      isLeaf: isLeaf2,
      isDisabled,
      isChecked
    } = useNode(node, checkedValue);
    const nodeLabel = computed(() => ({
      node
    }));
    const disabled = computed(() => !config.value.checkStrictly && isDisabled.value);
    watchEffect(() => {
      if (isEqual(value.value, checkedValue.value))
        value.value = checkedValue.value;
    });
    const handleMultiCheckChange = (checked) => {
      node.value.doCheck(checked);
      panel.calculateMultiCheckedValue();
    };
    const handleExpand = () => {
      if (!config.value.checkStrictly && isDisabled.value || node.value.loading)
        return;
      if (config.value.lazy && !node.value.loaded) {
        panel.lazyLoad(node.value, () => {
          if (!isLeaf2.value)
            handleExpand();
          if (config.value.multiple) {
            const checked = isLeaf2.value ? node.value.checked : false;
            handleMultiCheckChange(checked);
          }
        });
      } else {
        panel.handleExpand(node.value);
      }
    };
    const handleCheckChange = () => {
      panel.handleCheckChange(value);
      panel.handleExpand(node.value);
    };
    const handleClick = () => {
      if (isLeaf2.value && !isDisabled.value && !config.value.checkStrictly && !config.value.multiple) {
        handleCheckChange();
      }
      if (config.value.expandTrigger !== "click")
        return;
      if (config.value.expandTrigger === "click")
        handleExpand();
    };
    const handleMouseenter = (e) => {
      if (config.value.expandTrigger === "click")
        return;
      handleExpand();
      emit("expand", e);
    };
    return {
      nodeLabel,
      disabled,
      value,
      loading,
      isChecked,
      isLeaf: isLeaf2,
      isDisabled,
      config,
      inActivePath,
      checkedValue,
      inCheckedPath,
      strictlyEvent() {
      },
      handleClick,
      handleMouseenter,
      handleCheckChange,
      handleMultiCheckChange,
      handleExpand
    };
  }
};
var useNode = (node, checkedValue) => {
  let value = node.value.getValueByOption();
  watch(node.value, (newValue) => {
    value = newValue.getValueByOption();
  });
  const loading = computed(() => node.value.loading);
  const isLeaf2 = computed(() => node.value.isLeaf);
  const isDisabled = computed(() => node.value.isDisabled);
  const isChecked = computed(() => node.value.isSameNode(checkedValue.value));
  return {
    value,
    loading,
    isLeaf: isLeaf2,
    isDisabled,
    isChecked
  };
};
var usePanel = (node) => {
  const isInPath = (pathNodes) => {
    const selectedPathNode = (pathNodes === null || pathNodes === void 0 ? void 0 : pathNodes[(node === null || node === void 0 ? void 0 : node.value.level) - 1]) || {};
    return selectedPathNode.uid === (node === null || node === void 0 ? void 0 : node.value.uid);
  };
  const panel = inject("panel");
  const config = computed(() => panel.config);
  const checkedValue = computed(() => panel.checkedValue);
  const inActivePath = computed(() => isInPath(panel.activePath));
  const inCheckedPath = computed(() => {
    if (!config.value.checkStrictly)
      return false;
    return panel.checkedNodePaths.some((checkedPath) => isInPath(checkedPath));
  });
  return {
    panel,
    config,
    checkedValue,
    inActivePath,
    inCheckedPath
  };
};
var _hoisted_1$N = createVNode("span", null, null, -1);
var _hoisted_2$w = {
  key: 2,
  class: "el-icon-check el-cascader-node__prefix"
};
var _hoisted_3$p = {
  class: "el-cascader-node__label"
};
var _hoisted_4$f = {
  key: 1,
  class: "el-icon-loading el-cascader-node__postfix"
};
var _hoisted_5$b = {
  key: 2,
  class: "el-icon-arrow-right el-cascader-node__postfix"
};
function render$15(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_render_helper = resolveComponent("render-helper");
  return openBlock(), createBlock("li", {
    role: "menuitem",
    id: $props.nodeId,
    "aria-expanded": $setup.inActivePath,
    tabindex: !$setup.config.checkStrictly && $setup.isDisabled ? null : -1,
    class: {
      "el-cascader-node": true,
      "is-selectable": $setup.config.checkStrictly,
      "in-active-path": $setup.inActivePath,
      "in-checked-path": $setup.inCheckedPath,
      "is-active": $setup.isChecked,
      "is-disabled": $setup.disabled
    },
    onClick: _cache[2] || (_cache[2] = (...args) => $setup.handleClick && $setup.handleClick(...args)),
    onMouseenter: _cache[3] || (_cache[3] = (...args) => $setup.handleMouseenter && $setup.handleMouseenter(...args)),
    onFocus: _cache[4] || (_cache[4] = (...args) => $setup.handleMouseenter && $setup.handleMouseenter(...args))
  }, [$setup.config.multiple || $setup.config.checkStrictly || $setup.isLeaf && $setup.isChecked ? (openBlock(), createBlock(Fragment, {
    key: 0
  }, [$setup.config.multiple ? (openBlock(), createBlock(_component_el_checkbox, {
    key: 0,
    modelValue: $props.node.checked,
    indeterminate: $props.node.indeterminate,
    disabled: $setup.isDisabled,
    "onUpdate:modelValue": $setup.handleMultiCheckChange,
    onClick: _cache[1] || (_cache[1] = withModifiers(() => {
      $setup.config.checkStrictly && $setup.strictlyEvent();
    }, ["stop"]))
  }, null, 8, ["modelValue", "indeterminate", "disabled", "onUpdate:modelValue"])) : $setup.config.checkStrictly ? (openBlock(), createBlock(_component_el_radio, {
    key: 1,
    modelValue: $setup.checkedValue,
    label: $setup.value,
    disabled: $setup.isDisabled,
    onChange: $setup.handleCheckChange,
    onClick: $setup.strictlyEvent
  }, {
    default: withCtx(() => [_hoisted_1$N]),
    _: 1
  }, 8, ["modelValue", "label", "disabled", "onChange", "onClick"])) : $setup.isLeaf && $setup.isChecked ? (openBlock(), createBlock("i", _hoisted_2$w)) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true), createVNode("span", _hoisted_3$p, [createVNode(_component_render_helper, {
    nodeLabel: $setup.nodeLabel
  }, null, 8, ["nodeLabel"])]), $setup.loading ? (openBlock(), createBlock("i", _hoisted_4$f)) : !$setup.isLeaf ? (openBlock(), createBlock("i", _hoisted_5$b)) : createCommentVNode("v-if", true)], 42, ["id", "aria-expanded", "tabindex"]);
}
script$1e.render = render$15;
script$1e.__file = "packages/cascader-panel/CascaderNode.vue";
function useLocale() {
  return function(...args) {
    const instance2 = getCurrentInstance();
    return t.apply(instance2, args);
  };
}
var script$1d = {
  name: "ElCascaderMenu",
  components: {
    ElScrollbar,
    CascaderNode: script$1e
  },
  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: Number
  },
  setup(props2) {
    const instance2 = getCurrentInstance();
    const t2 = useLocale();
    const {
      index: index2,
      nodes
    } = toRefs(props2);
    const {
      proxy
    } = instance2;
    const panel = inject("panel");
    const hoverZone = ref(null);
    const data = {
      activeNode: null,
      hoverTimer: null,
      id: generateId()
    };
    const isEmpty2 = computed(() => !nodes.value.length);
    const menuId = `cascader-menu-${data.id}-${index2.value}`;
    const clearHoverZone = () => {
      if (!hoverZone.value)
        return;
      hoverZone.value.innerHTML = "";
    };
    const handleExpand = (e) => {
      if (!panel.isHoverMenu)
        return;
      data.activeNode = e.target;
    };
    const handleMouseMove = (e) => {
      if (!panel.isHoverMenu)
        return;
      if (!data.activeNode || !hoverZone.value)
        return;
      if (data.activeNode.contains(e.target)) {
        clearTimeout(data.hoverTimer);
        const {
          left
        } = proxy.$el.getBoundingClientRect();
        const startX = e.clientX - left;
        const {
          offsetWidth,
          offsetHeight
        } = proxy.$el;
        const top = data.activeNode.offsetTop;
        const bottom = top + data.activeNode.offsetHeight;
        hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `;
      } else if (!data.hoverTimer) {
        data.hoverTimer = setTimeout(clearHoverZone, panel.config.hoverThreshold);
      }
    };
    return {
      data,
      isEmpty: isEmpty2,
      menuId,
      hoverZone,
      panel,
      t: t2,
      handleExpand,
      handleMouseMove
    };
  }
};
var _hoisted_1$M = {
  key: 0,
  class: "el-cascader-menu__empty-text"
};
var _hoisted_2$v = {
  key: 0,
  ref: "hoverZone",
  class: "el-cascader-menu__hover-zone"
};
function render$14(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cascader_node = resolveComponent("cascader-node");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  return openBlock(), createBlock(_component_el_scrollbar, {
    tag: "ul",
    role: "menu",
    id: $setup.menuId,
    class: "el-cascader-menu",
    "wrap-class": "el-cascader-menu__wrap",
    "view-class": {
      "el-cascader-menu__list": true,
      "is-empty": $setup.isEmpty
    },
    onMousemove: $setup.handleMouseMove
  }, {
    default: withCtx(() => [$setup.isEmpty ? (openBlock(), createBlock("div", _hoisted_1$M, toDisplayString($setup.t("el.cascader.noData")), 1)) : (openBlock(), createBlock(Fragment, {
      key: 1
    }, [(openBlock(true), createBlock(Fragment, null, renderList($props.nodes, (node, index2) => {
      return openBlock(), createBlock(_component_cascader_node, {
        key: node.uid,
        node,
        "node-id": `${$setup.menuId}-${index2}`,
        "aria-haspopup": node.hasChildren,
        "aria-owns": node.hasChildren ? $setup.menuId : null,
        onExpand: $setup.handleExpand
      }, null, 8, ["node", "node-id", "aria-haspopup", "aria-owns", "onExpand"]);
    }), 128)), $setup.panel.isHoverMenu ? (openBlock(), createBlock("svg", _hoisted_2$v, null, 512)) : createCommentVNode("v-if", true)], 64))]),
    _: 1
  }, 8, ["id", "view-class", "onMousemove"]);
}
script$1d.render = render$14;
script$1d.__file = "packages/cascader-panel/CascaderMenu.vue";
var uid = 0;
var Node$1 = class {
  constructor(data, config, parentNode) {
    this.data = data;
    this.config = config;
    this.parent = parentNode || null;
    this.level = !this.parent ? 1 : this.parent.level + 1;
    this.uid = uid++;
    this.initState();
    this.initChildren();
  }
  initState() {
    const {
      value: valueKey,
      label: labelKey
    } = this.config;
    this.value = this.data[valueKey];
    this.label = this.data[labelKey];
    this.pathNodes = this.calculatePathNodes();
    this.path = this.pathNodes.map((node) => node.value);
    this.pathLabels = this.pathNodes.map((node) => node.label);
    this.loading = false;
    this.loaded = false;
  }
  initChildren() {
    const {
      config
    } = this;
    const childrenKey = config.children;
    const childrenData = this.data[childrenKey];
    this.hasChildren = Array.isArray(childrenData);
    this.children = (childrenData || []).map((child) => new Node$1(child, config, this));
  }
  get isDisabled() {
    const {
      data,
      parent,
      config
    } = this;
    const disabledKey = config.disabled;
    const {
      checkStrictly
    } = config;
    return data[disabledKey] || !checkStrictly && parent && parent.isDisabled;
  }
  get isLeaf() {
    const {
      data,
      loaded,
      hasChildren,
      children
    } = this;
    const {
      lazy,
      leaf: leafKey
    } = this.config;
    if (lazy) {
      const isLeaf2 = isDef(data[leafKey]) ? data[leafKey] : loaded ? !children.length : false;
      this.hasChildren = !isLeaf2;
      return isLeaf2;
    }
    return !hasChildren;
  }
  calculatePathNodes() {
    const nodes = [this];
    let parent = this.parent;
    while (parent) {
      nodes.unshift(parent);
      parent = parent.parent;
    }
    return nodes;
  }
  getPath() {
    return this.path;
  }
  getValue() {
    return this.value;
  }
  getValueByOption() {
    return this.config.emitPath ? this.getPath() : this.getValue();
  }
  getText(allLevels, separator) {
    return allLevels ? this.pathLabels.join(separator) : this.label;
  }
  isSameNode(checkedValue) {
    const value = this.getValueByOption();
    return this.config.multiple && Array.isArray(checkedValue) ? checkedValue.some((val) => isEqual(val, value)) : isEqual(checkedValue, value);
  }
  broadcast(event, ...args) {
    const handlerName = `onParent${capitalize(event)}`;
    this.children.forEach((child) => {
      if (child) {
        child.broadcast(event, ...args);
        child[handlerName] && child[handlerName](...args);
      }
    });
  }
  emit(event, ...args) {
    const {
      parent
    } = this;
    const handlerName = `onChild${capitalize(event)}`;
    if (parent) {
      parent[handlerName] && parent[handlerName](...args);
      parent.emit(event, ...args);
    }
  }
  onParentCheck(checked) {
    if (!this.isDisabled) {
      this.setCheckState(checked);
    }
  }
  onChildCheck() {
    const {
      children
    } = this;
    const validChildren = children.filter((child) => !child.isDisabled);
    const checked = validChildren.length ? validChildren.every((child) => child.checked) : false;
    this.setCheckState(checked);
  }
  setCheckState(checked) {
    const totalNum = this.children.length;
    const checkedNum = this.children.reduce((c, p) => {
      const num = p.checked ? 1 : p.indeterminate ? 0.5 : 0;
      return c + num;
    }, 0);
    this.checked = checked;
    this.indeterminate = checkedNum !== totalNum && checkedNum > 0;
  }
  syncCheckState(checkedValue) {
    const value = this.getValueByOption();
    const checked = this.isSameNode(checkedValue, value);
    this.doCheck(checked);
  }
  doCheck(checked) {
    if (this.checked !== checked) {
      if (this.config.checkStrictly) {
        this.checked = checked;
      } else {
        this.broadcast("check", checked);
        this.setCheckState(checked);
        this.emit("check");
      }
    }
  }
};
var flatNodes = (data, leafOnly) => {
  return data.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node);
    } else {
      !leafOnly && res.push(node);
      res = res.concat(flatNodes(node.children, leafOnly));
    }
    return res;
  }, []);
};
var Store = class {
  constructor(data, config) {
    this.config = config;
    this.initNodes(data);
  }
  initNodes(data) {
    data = coerceTruthyValueToArray(data);
    this.nodes = data.map((nodeData) => new Node$1(nodeData, this.config));
    this.flattedNodes = this.getFlattedNodes(false, false);
    this.leafNodes = this.getFlattedNodes(true, false);
  }
  appendNode(nodeData, parentNode) {
    const node = new Node$1(nodeData, this.config, parentNode);
    const children = parentNode ? parentNode.children : this.nodes;
    children.push(node);
  }
  appendNodes(nodeDataList, parentNode) {
    nodeDataList = coerceTruthyValueToArray(nodeDataList);
    nodeDataList.forEach((nodeData) => this.appendNode(nodeData, parentNode));
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(leafOnly, cached = true) {
    const cachedNodes = leafOnly ? this.leafNodes : this.flattedNodes;
    return cached ? cachedNodes : flatNodes(this.nodes, leafOnly);
  }
  getNodeByValue(value) {
    if (value) {
      const nodes = this.getFlattedNodes(false, !this.config.lazy).filter((node) => valueEquals(node.path, value) || node.value === value);
      return nodes && nodes.length ? nodes[0] : null;
    }
    return null;
  }
};
var aria$1 = aria$1 || {};
aria$1.Utils = aria$1.Utils || {};
aria$1.Utils.focusFirstDescendant = function(element) {
  for (var i = 0; i < element.childNodes.length; i++) {
    var child = element.childNodes[i];
    if (aria$1.Utils.attemptFocus(child) || aria$1.Utils.focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
};
aria$1.Utils.focusLastDescendant = function(element) {
  for (var i = element.childNodes.length - 1; i >= 0; i--) {
    var child = element.childNodes[i];
    if (aria$1.Utils.attemptFocus(child) || aria$1.Utils.focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
};
aria$1.Utils.attemptFocus = function(element) {
  if (!aria$1.Utils.isFocusable(element)) {
    return false;
  }
  aria$1.Utils.IgnoreUtilFocusChanges = true;
  if (element && element.focus) {
    element.focus();
  }
  aria$1.Utils.IgnoreUtilFocusChanges = false;
  return document.activeElement === element;
};
aria$1.Utils.isFocusable = function(element) {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.disabled) {
    return false;
  }
  switch (element.nodeName) {
    case "A":
      return !!element.href && element.rel !== "ignore";
    case "INPUT":
      return element.type !== "hidden" && element.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
};
aria$1.Utils.triggerEvent = function(elm, name, ...opts) {
  let eventName;
  if (/^mouse|click/.test(name)) {
    eventName = "MouseEvents";
  } else if (/^key/.test(name)) {
    eventName = "KeyboardEvent";
  } else {
    eventName = "HTMLEvents";
  }
  const evt = document.createEvent(eventName);
  evt.initEvent(name, ...opts);
  elm.dispatchEvent ? elm.dispatchEvent(evt) : elm.fireEvent("on" + name, evt);
  return elm;
};
aria$1.Utils.keys = {
  tab: 9,
  enter: 13,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  esc: 27
};
var Utils = aria$1.Utils;
var {
  keys: KeyCode$1
} = Utils;
var DefaultProps = {
  expandTrigger: "click",
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: noop$1,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
};
var isLeaf = (el) => !el.getAttribute("aria-owns");
var getSibling = (el, distance) => {
  const {
    parentNode
  } = el;
  if (parentNode) {
    const siblings = parentNode.querySelectorAll('.el-cascader-node[tabindex="-1"]');
    const index2 = Array.prototype.indexOf.call(siblings, el);
    return siblings[index2 + distance] || null;
  }
  return null;
};
var getMenuIndex = (el) => {
  if (!el)
    return;
  const pieces = el.id.split("-");
  return Number(pieces[pieces.length - 2]);
};
var focusNode = (el) => {
  if (!el)
    return;
  el.focus();
  !isLeaf(el) && el.click();
};
var checkNode = (el) => {
  if (!el)
    return;
  const input = el.querySelector("input");
  if (input) {
    input.click();
  } else if (isLeaf(el)) {
    el.click();
  }
};
var script$1c = {
  name: "ElCascaderPanel",
  components: {
    CascaderMenu: script$1d
  },
  emits: ["update:modelValue", "change", "close", "active-item-change", "expand-change"],
  props: {
    modelValue: {
      type: Object,
      default: () => {
      }
    },
    options: Array,
    props: Object,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function,
    computePresentText: Function
  },
  provide() {
    return {
      panel: this
    };
  },
  setup(props2, {
    slots,
    emit
  }) {
    const menuRef = ref([]);
    const activePath = ref([]);
    const checkedNodePaths = ref([]);
    const loadCount = ref(0);
    const checkedValue = ref(null);
    const {
      props: realProps,
      options,
      renderLabel,
      modelValue
    } = toRefs(props2);
    const renderLabelFn = computed(() => (renderLabel === null || renderLabel === void 0 ? void 0 : renderLabel.value) || (slots === null || slots === void 0 ? void 0 : slots.default));
    const {
      config,
      multiple,
      checkStrictly,
      leafOnly,
      isHoverMenu
    } = useConfig$1(realProps);
    let state = reactive({
      store: null,
      menus: null
    });
    const lazyLoad = (node, onFulfilled) => {
      if (!node) {
        node = {
          root: true,
          level: 0
        };
        state.store = new Store([], config.value);
        state.menus = [state.store.getNodes()];
      }
      node.loading = true;
      const resolve = (dataList) => {
        const parent = node.root ? null : node;
        dataList && dataList.length && state.store.appendNodes(dataList, parent);
        node.loading = false;
        node.loaded = true;
        if (Array.isArray(checkedValue.value)) {
          const nodeValue = checkedValue.value[loadCount.value++];
          const valueKey = config.value.value;
          const leafKey = config.value.leaf;
          if (Array.isArray(dataList) && dataList.filter((item) => item[valueKey] === nodeValue).length > 0) {
            const checkedNode = state.store.getNodeByValue(nodeValue);
            if (!checkedNode.data[leafKey]) {
              lazyLoad(checkedNode, () => {
                handleExpand(checkedNode);
              });
            }
            if (loadCount.value === checkedValue.value.length) {
              props2.computePresentText();
            }
          }
        }
        onFulfilled && onFulfilled(dataList);
      };
      config.value.lazyLoad(node, resolve);
    };
    const getFlattedNodes = (leafOnly2) => {
      const cached = !config.value.lazy;
      return state.store.getFlattedNodes(leafOnly2, cached);
    };
    const {
      handleExpand,
      expandNodes,
      handleKeyDown
    } = useExpendMethods({
      menuRef,
      activePath,
      state,
      emit
    });
    const syncActivePath = () => {
      if (!isEmpty(activePath.value)) {
        const nodes = activePath.value.map((node) => state.store.getNodeByValue(node.getValue()));
        expandNodes(nodes);
      } else if (!isEmpty(checkedValue.value)) {
        const value = multiple.value ? checkedValue.value[0] : checkedValue.value;
        const checkedNode = state.store.getNodeByValue(value) || {};
        const nodes = (checkedNode.pathNodes || []).slice(0, -1);
        expandNodes(nodes);
      } else {
        activePath.value = [];
        state.menus = [state.store.getNodes()];
      }
    };
    const changedScrollIntoView = () => {
      const menus = menuRef.value || [];
      menus.forEach((menu) => {
        const menuElement = menu.$el;
        if (menuElement) {
          const container = menuElement.querySelector(".el-scrollbar__wrap");
          const activeNode = menuElement.querySelector(".el-cascader-node.is-active") || menuElement.querySelector(".el-cascader-node.in-active-path");
          scrollIntoView(container, activeNode);
        }
      });
    };
    const {
      syncMenuState,
      clearCheckedNodes,
      syncCheckedValue,
      getCheckedNodes,
      calculateCheckedNodePaths,
      calculateMultiCheckedValue
    } = useCheckedMethods({
      state,
      config,
      leafOnly,
      modelValue,
      multiple,
      checkedValue,
      checkedNodePaths,
      syncActivePath,
      scrollIntoView: changedScrollIntoView,
      getFlattedNodes
    });
    const handleCheckChange = (value) => {
      checkedValue.value = value;
    };
    onMounted(() => {
      if (!isEmpty(modelValue === null || modelValue === void 0 ? void 0 : modelValue.value)) {
        syncCheckedValue();
      }
    });
    onBeforeUpdate(() => {
      menuRef.value = [];
    });
    watch(options, () => {
      if (config.value.lazy && isEmpty(options.value)) {
        lazyLoad();
      } else {
        state.store = new Store(options.value, config.value);
        state.menus = [state.store.getNodes()];
        syncMenuState();
      }
    }, {
      immediate: true,
      deep: true
    });
    watch(modelValue, () => {
      syncCheckedValue();
      checkStrictly.value && calculateCheckedNodePaths();
    });
    watch(checkedValue, (val) => {
      if (!isEqual(val, modelValue === null || modelValue === void 0 ? void 0 : modelValue.value)) {
        checkStrictly.value && calculateCheckedNodePaths();
        emit("update:modelValue", val);
        emit("change", val);
      }
    });
    return {
      menuRef,
      checkedValue,
      activePath,
      checkedNodePaths,
      menus: toRefs(state).menus,
      config,
      multiple,
      checkStrictly,
      leafOnly,
      isHoverMenu,
      getNodeByValue(val) {
        return state.store.getNodeByValue(val);
      },
      lazyLoad,
      getCheckedNodes,
      getFlattedNodes,
      handleCheckChange,
      handleExpand,
      renderLabelFn,
      handleKeyDown,
      clearCheckedNodes,
      calculateMultiCheckedValue,
      scrollIntoView: changedScrollIntoView
    };
  }
};
var useConfig$1 = (props2) => {
  const config = computed(() => merge(__spreadValues({}, DefaultProps), props2 === null || props2 === void 0 ? void 0 : props2.value));
  const multiple = computed(() => config.value.multiple);
  const checkStrictly = computed(() => config.value.checkStrictly);
  const leafOnly = computed(() => !checkStrictly.value);
  const isHoverMenu = computed(() => config.value.expandTrigger === "trigger");
  return {
    config,
    multiple,
    checkStrictly,
    leafOnly,
    isHoverMenu
  };
};
var useExpendMethods = ({
  menuRef,
  activePath,
  state,
  emit
}) => {
  const handleExpand = (node, silent) => {
    const activePathValue = activePath.value;
    const {
      level
    } = node;
    const path = activePathValue.slice(0, level - 1);
    const internalMenus = [...state.menus].slice(0, level);
    if (!node.isLeaf) {
      path.push(node);
      internalMenus.push(node.children);
    }
    activePath.value = path;
    state.menus = internalMenus;
    if (!silent) {
      const pathValues = path.map((node2) => node2.getValue());
      const activePathValues = activePath.value.map((node2) => node2.getValue());
      if (!valueEquals(pathValues, activePathValues)) {
        emit("active-item-change", pathValues);
        emit("expand-change", pathValues);
      }
    }
  };
  const expandNodes = (nodes) => {
    nodes.forEach((node) => handleExpand(node, true));
  };
  const handleKeyDown = ({
    target,
    keyCode
  }) => {
    const prev = getSibling(target, -1);
    const next = getSibling(target, 1);
    const preMenu = menuRef.value[getMenuIndex(target) - 1];
    const nextMenu = menuRef.value[getMenuIndex(target) + 1];
    switch (keyCode) {
      case KeyCode$1.up:
        focusNode(prev);
        break;
      case KeyCode$1.down:
        focusNode(next);
        break;
      case KeyCode$1.left:
        if (preMenu) {
          const expandedNode = preMenu.$el.querySelector('.el-cascader-node[aria-expanded="true"]');
          focusNode(expandedNode);
        }
        break;
      case KeyCode$1.right:
        if (nextMenu) {
          const firstNode = nextMenu.$el.querySelector('.el-cascader-node[tabindex="-1"]');
          focusNode(firstNode);
        }
        break;
      case KeyCode$1.enter:
        checkNode(target);
        break;
      case KeyCode$1.esc:
      case KeyCode$1.tab:
        emit("close");
        break;
      default:
        return;
    }
  };
  return {
    handleExpand,
    expandNodes,
    handleKeyDown
  };
};
var useCheckedMethods = ({
  state,
  config,
  leafOnly,
  modelValue,
  checkedValue,
  checkedNodePaths,
  syncActivePath,
  scrollIntoView: scrollIntoView2,
  getFlattedNodes
}) => {
  const syncMultiCheckState = () => {
    const nodes = getFlattedNodes(leafOnly.value);
    nodes.forEach((node) => {
      node.syncCheckState(checkedValue.value);
    });
  };
  const syncMenuState = async () => {
    syncActivePath();
    config.value.multiple && syncMultiCheckState();
    config.value.checkStrictly && calculateCheckedNodePaths();
    await nextTick(scrollIntoView2);
  };
  const syncCheckedValue = () => {
    if (!isEqual(modelValue.value, checkedValue.value)) {
      checkedValue.value = modelValue.value;
      syncMenuState();
    }
  };
  const calculateCheckedNodePaths = () => {
    const checkedValues = config.value.multiple ? coerceTruthyValueToArray(checkedValue.value) : [checkedValue.value];
    checkedNodePaths.value = checkedValues.map((v) => {
      var _state$store$getNodeB;
      return ((_state$store$getNodeB = state.store.getNodeByValue(v)) === null || _state$store$getNodeB === void 0 ? void 0 : _state$store$getNodeB.pathNodes) || [];
    });
  };
  const getCheckedNodes = (leafOnly2) => {
    if (config.value.multiple) {
      const nodes = getFlattedNodes(leafOnly2);
      return nodes.filter((node) => node.checked);
    } else {
      return isEmpty(checkedValue.value) ? [] : [state.store.getNodeByValue(checkedValue.value)];
    }
  };
  const calculateMultiCheckedValue = () => {
    checkedValue.value = getCheckedNodes(leafOnly.value).map((node) => node.getValueByOption());
  };
  const clearCheckedNodes = () => {
    if (config.value.multiple) {
      getCheckedNodes(leafOnly.value).filter((node) => !node.isDisabled).forEach((node) => node.doCheck(false));
      calculateMultiCheckedValue();
    } else {
      checkedValue.value = config.value.emitPath ? [] : null;
    }
  };
  return {
    syncMenuState,
    getCheckedNodes,
    syncCheckedValue,
    clearCheckedNodes,
    calculateCheckedNodePaths,
    calculateMultiCheckedValue
  };
};
function render$13(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cascader_menu = resolveComponent("cascader-menu");
  return openBlock(), createBlock("div", {
    class: ["el-cascader-panel", $props.border && "is-bordered"],
    onKeydown: _cache[1] || (_cache[1] = (...args) => $setup.handleKeyDown && $setup.handleKeyDown(...args))
  }, [(openBlock(true), createBlock(Fragment, null, renderList($setup.menus, (menu, index2) => {
    return openBlock(), createBlock(_component_cascader_menu, {
      ref: (el) => {
        if (el)
          $setup.menuRef[index2] = el;
      },
      index: index2,
      key: index2,
      nodes: menu
    }, null, 8, ["index", "nodes"]);
  }), 128))], 34);
}
script$1c.render = render$13;
script$1c.__file = "packages/cascader-panel/CascaderPanel.vue";
script$1c.install = function(app) {
  app.component(script$1c.name, script$1c);
};
var {
  keys: KeyCode
} = Utils;
var MigratingProps = {
  expandTrigger: {
    newProp: "expandTrigger",
    type: String
  },
  changeOnSelect: {
    newProp: "checkStrictly",
    type: Boolean
  },
  hoverThreshold: {
    newProp: "hoverThreshold",
    type: Number
  }
};
var PopperMixin = {
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    appendToBody: Popper.props.appendToBody,
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: Popper.props.arrowOffset,
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding,
    popperOptions: Popper.props.popperOptions
  },
  methods: Popper.methods,
  data: Popper.data,
  beforeUnmount: Popper.beforeUnmount
};
var InputSizeMap = {
  medium: 36,
  small: 32,
  mini: 28
};
var script$1b = {
  name: "ElCascader",
  directives: {
    Clickoutside
  },
  components: {
    ElInput: script$1l,
    ElTag: script$1h,
    ElScrollbar,
    ElCascaderPanel: script$1c
  },
  mixins: [PopperMixin],
  emits: ["update:modelValue", "change", "expand-change", "active-item-change", "visible-change", "focus", "blur", "created", "remove-tag"],
  props: {
    modelValue: {},
    options: {
      type: Array,
      default: () => []
    },
    props: Object,
    size: String,
    placeholder: {
      type: String,
      default: () => t("el.cascader.placeholder")
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: {
      type: Function,
      default: void 0
    },
    separator: {
      type: String,
      default: " / "
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    collapseTags: Boolean,
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: () => () => {
      }
    },
    popperClass: String
  },
  setup(props2, {
    emit,
    attrs
  }) {
    const instance2 = getCurrentInstance();
    const {
      dispatch
    } = useEmitter();
    const {
      props: realProps,
      modelValue,
      options,
      filterable,
      size,
      disabled,
      clearable,
      filterMethod,
      showAllLevels,
      separator,
      collapseTags,
      debounce: debounceProp,
      beforeFilter
    } = toRefs(props2);
    const t2 = useLocale();
    migrating({
      "expand-trigger": "expand-trigger is removed, use `props.expandTrigger` instead.",
      "change-on-select": "change-on-select is removed, use `props.checkStrictly` instead.",
      "hover-threshold": "hover-threshold is removed, use `props.hoverThreshold` instead",
      "active-item-change": "active-item-change is renamed to expand-change"
    });
    const panel = ref(null);
    const input = ref(null);
    const popper = ref(null);
    const suggestionPanel = ref(null);
    const filterHandler = ref(null);
    const filtering = ref(false);
    const pressDeleteCount = ref(0);
    const inputState = reactive({
      hover: false,
      value: null,
      initialHeight: 0
    });
    const checkedState = reactive({
      value: (modelValue === null || modelValue === void 0 ? void 0 : modelValue.value) || null,
      nodes: []
    });
    const elForm = inject("elForm", {});
    const elFormItem = inject("elFormItem", {});
    const isDisabled = computed(() => disabled.value || (elForm === null || elForm === void 0 ? void 0 : elForm.disabled));
    const {
      dropDownVisible,
      toggleDropDownVisible
    } = useDropdownVisible({
      input,
      panel,
      isDisabled,
      emit
    });
    const {
      config,
      multiple,
      leafOnly,
      readonly,
      checkStrictly
    } = useConfig({
      props: realProps,
      attrs,
      filterable
    });
    const {
      presentState,
      computePresentText,
      computePresentContent
    } = usePresent({
      panel,
      checkedState,
      checkStrictly,
      isDisabled,
      leafOnly,
      showAllLevels,
      separator,
      collapseTags,
      multiple
    });
    const {
      suggestions,
      getSuggestions,
      handleSuggestionClick
    } = useSuggestion({
      panel,
      inputState,
      presentState,
      checkedState,
      filterMethod,
      filtering,
      multiple,
      leafOnly,
      showAllLevels,
      separator,
      toggleDropDownVisible
    });
    const {
      realSize,
      tagSize
    } = useSize({
      size,
      elFormItem
    });
    const internalValue = computed({
      get() {
        return multiple !== null && multiple !== void 0 && multiple.value ? presentState.text : inputState.value;
      },
      set(v) {
        multiple !== null && multiple !== void 0 && multiple.value ? presentState.text = v : inputState.value = v;
      }
    });
    const clearBtnVisible = computed(() => {
      if (!clearable.value || isDisabled.value || filtering.value || !inputState.hover) {
        return false;
      }
      return multiple !== null && multiple !== void 0 && multiple.value ? !!checkedState.nodes.filter((node) => !node.isDisabled).length : !!presentState.text;
    });
    const handleFocus = (e) => {
      emit("focus", e);
    };
    const handleBlur = (e) => {
      emit("blur", e);
    };
    const focusFirstNode = () => {
      nextTick(() => {
        let firstNode = null;
        if (filtering.value && suggestionPanel.value) {
          firstNode = suggestionPanel.value.$el.querySelector(".el-cascader__suggestion-item");
        } else {
          const firstMenu = popper.value.querySelector(".el-cascader-menu");
          firstNode = firstMenu.querySelector('.el-cascader-node[tabindex="-1"]');
        }
        if (firstNode) {
          firstNode.focus();
          !filtering.value && firstNode.click();
        }
      });
    };
    const handleInput = (val, event) => {
      !dropDownVisible.value && toggleDropDownVisible(true);
      if (event && event.isComposing)
        return;
      if (val) {
        var _filterHandler$value;
        (_filterHandler$value = filterHandler.value) === null || _filterHandler$value === void 0 ? void 0 : _filterHandler$value.call(filterHandler);
      } else {
        filtering.value = false;
      }
    };
    const handleDropdownLeave = () => {
      filtering.value = false;
      inputState.value = presentState.text;
    };
    const handleClear = () => {
      presentState.text = "";
      panel.value.clearCheckedNodes();
    };
    const handleDelete = () => {
      const lastIndex = presentState.tags.length - 1;
      const lastTag = presentState.tags[lastIndex];
      pressDeleteCount.value = inputState.value ? 0 : pressDeleteCount.value++;
      if (!lastTag)
        return;
      if (pressDeleteCount.value) {
        if (lastTag.hitState) {
          deleteTag(lastIndex);
        } else {
          lastTag.hitState = true;
        }
      }
    };
    const handleExpandChange = (value) => {
      nextTick(instance2.proxy.updatePopper.bind(instance2.proxy));
      emit("expand-change", value);
      emit("active-item-change", value);
    };
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case KeyCode.enter:
          toggleDropDownVisible();
          break;
        case KeyCode.down:
          toggleDropDownVisible(true);
          focusFirstNode();
          event.preventDefault();
          break;
        case KeyCode.esc:
        case KeyCode.tab:
          toggleDropDownVisible(false);
          break;
      }
    };
    const handleSuggestionKeyDown = (event) => {
      const {
        keyCode,
        target
      } = event;
      const prev = target.previousElementSibling;
      const next = target.nextElementSibling;
      switch (keyCode) {
        case KeyCode.enter:
          target.click();
          break;
        case KeyCode.up:
          prev && prev.focus();
          break;
        case KeyCode.down:
          next && next.focus();
          break;
        case KeyCode.esc:
        case KeyCode.tab:
          toggleDropDownVisible(false);
          break;
      }
    };
    const updateStyle = () => {
      const {
        $el
      } = instance2.proxy;
      if (!$el)
        return;
      const inputInner = $el.querySelector(".el-input__inner");
      if (!inputInner)
        return;
      const tags = $el.querySelector(".el-cascader__tags");
      let suggestionPanelEl = null;
      if (suggestionPanel.value && (suggestionPanelEl = suggestionPanel.value.$el)) {
        const suggestionList = suggestionPanelEl.querySelector(".el-cascader__suggestion-list");
        suggestionList.style.minWidth = inputInner.offsetWidth + "px";
      }
      if (tags) {
        nextTick(() => {
          const {
            offsetHeight
          } = tags;
          inputInner.style.height = Math.max(offsetHeight + 6, inputState.initialHeight) + "px";
          instance2.proxy.updatePopper();
        });
      }
    };
    const deleteTag = (index2) => {
      const val = checkedState.value[index2];
      checkedState.value = checkedState.value.filter((item, i) => i !== index2);
      emit("remove-tag", val);
    };
    onMounted(() => {
      var _input$value;
      if (input !== null && input !== void 0 && (_input$value = input.value) !== null && _input$value !== void 0 && _input$value.$el) {
        inputState.initialHeight = input.value.$el.offsetHeight || InputSizeMap[realSize.value] || 40;
      }
      if (!isEmpty(modelValue === null || modelValue === void 0 ? void 0 : modelValue.value)) {
        computePresentContent();
      }
      filterHandler.value = debounce$1(debounceProp, () => {
        if (!inputState.value) {
          filtering.value = false;
          return;
        }
        const before = beforeFilter.value(inputState.value);
        if (before !== null && before !== void 0 && before.then) {
          before.then(getSuggestions);
        } else if (before !== false) {
          getSuggestions();
        } else {
          filtering.value = false;
        }
      });
      addResizeListener(instance2.proxy.$el, updateStyle);
    });
    onUnmounted(() => {
      removeResizeListener(instance2.proxy.$el, updateStyle);
    });
    watch(disabled, () => {
      computePresentContent();
    });
    if (modelValue) {
      watch(modelValue, (val) => {
        if (!isEqual(val, checkedState.value)) {
          checkedState.value = val;
          computePresentContent();
        }
      });
    }
    watch(() => checkedState.value, (val) => {
      if (!isEqual(val, modelValue === null || modelValue === void 0 ? void 0 : modelValue.value) || (modelValue === null || modelValue === void 0 ? void 0 : modelValue.value) === void 0) {
        computePresentContent();
        if (!(multiple !== null && multiple !== void 0 && multiple.value) && !checkStrictly.value && dropDownVisible.value) {
          toggleDropDownVisible(false);
        }
        emit("update:modelValue", val);
        emit("change", val);
        dispatch("ElFormItem", "el.form.change", [val]);
      }
    });
    watch(options, () => {
      nextTick(computePresentContent);
    }, {
      deep: true
    });
    watch(presentState, (value) => {
      inputState.value = value.text;
      if (multiple !== null && multiple !== void 0 && multiple.value && (value.tags.length || presentState.tags.length)) {
        nextTick(updateStyle);
      }
    });
    watch(filtering, () => {
      nextTick(instance2.proxy.updatePopper);
    });
    return {
      panel,
      input,
      popper,
      suggestionPanel,
      inputState,
      checkedState,
      presentState,
      suggestions,
      filtering,
      dropDownVisible,
      internalValue,
      clearBtnVisible,
      config,
      multiple,
      readonly,
      isDisabled,
      realSize,
      tagSize,
      t: t2,
      deleteTag,
      handleFocus,
      handleBlur,
      handleInput,
      handleDropdownLeave,
      handleClear,
      handleDelete,
      handleExpandChange,
      handleKeyDown,
      handleSuggestionKeyDown,
      handleSuggestionClick,
      computePresentText,
      toggleDropDownVisible,
      getCheckedNodes(leafOnly2) {
        var _panel$value;
        return panel === null || panel === void 0 ? void 0 : (_panel$value = panel.value) === null || _panel$value === void 0 ? void 0 : _panel$value.getCheckedNodes(leafOnly2);
      }
    };
  }
};
var useSize = ({
  size,
  elFormItem
}) => {
  const {
    proxy
  } = getCurrentInstance();
  const realSize = computed(() => {
    var _proxy$$ELEMENT;
    const _elFormItemSize = elFormItem === null || elFormItem === void 0 ? void 0 : elFormItem.elFormItemSize;
    return (size === null || size === void 0 ? void 0 : size.value) || _elFormItemSize || ((_proxy$$ELEMENT = proxy.$ELEMENT) === null || _proxy$$ELEMENT === void 0 ? void 0 : _proxy$$ELEMENT.size);
  });
  const tagSize = computed(() => {
    return ["small", "mini"].indexOf(realSize.value) > -1 ? "mini" : "small";
  });
  return {
    realSize,
    tagSize
  };
};
var useConfig = ({
  props: props2,
  attrs,
  filterable
}) => {
  const config = computed(() => {
    const config2 = (props2 === null || props2 === void 0 ? void 0 : props2.value) || {};
    Object.keys(MigratingProps).forEach((oldProp) => {
      const {
        newProp,
        type: type2
      } = MigratingProps[oldProp];
      let oldValue = attrs[oldProp] || attrs[kebabCase(oldProp)];
      if (isDef(oldProp) && !isDef(config2[newProp])) {
        if (type2 === Boolean && oldValue === "") {
          oldValue = true;
        }
        config2[newProp] = oldValue;
      }
    });
    return config2;
  });
  const multiple = computed(() => config.value.multiple);
  const checkStrictly = computed(() => config.value.checkStrictly);
  const leafOnly = computed(() => !checkStrictly.value);
  const readonly = computed(() => !filterable.value || (multiple === null || multiple === void 0 ? void 0 : multiple.value));
  return {
    config,
    checkStrictly,
    multiple,
    leafOnly,
    readonly
  };
};
var useDropdownVisible = ({
  input,
  panel,
  isDisabled,
  emit
}) => {
  const instance2 = getCurrentInstance();
  const dropDownVisible = ref(false);
  const toggleDropDownVisible = (visible) => {
    if (isDisabled.value)
      return;
    visible = isDef(visible) ? visible : !dropDownVisible.value;
    if (visible !== dropDownVisible.value) {
      dropDownVisible.value = visible;
      if (visible) {
        nextTick(() => {
          instance2.proxy.updatePopper();
          panel.value.scrollIntoView();
        });
      }
      input === null || input === void 0 ? void 0 : input.value.$refs.input.setAttribute("aria-expanded", visible);
      emit("visible-change", visible);
    }
  };
  return {
    dropDownVisible,
    toggleDropDownVisible
  };
};
var useSuggestion = ({
  panel,
  inputState,
  presentState,
  checkedState,
  filterMethod,
  filtering,
  multiple,
  leafOnly,
  showAllLevels,
  separator,
  toggleDropDownVisible
}) => {
  const instance2 = getCurrentInstance();
  const suggestions = ref([]);
  const getSuggestions = () => {
    let internalFilterMethod = filterMethod.value;
    if (!(internalFilterMethod instanceof Function)) {
      internalFilterMethod = (node, keyword) => node.text.includes(keyword);
    }
    const internalSuggestions = panel.value.getFlattedNodes(leafOnly.value).filter((node) => {
      if (node.isDisabled)
        return false;
      node.text = node.getText(showAllLevels.value, separator.value) || "";
      return internalFilterMethod(node, inputState.value);
    });
    if (multiple) {
      presentState.tags.forEach((tag) => {
        tag.hitState = false;
      });
    } else {
      internalSuggestions.forEach((node) => {
        node.checked = isEqual(checkedState.value, node.getValueByOption());
      });
    }
    filtering.value = true;
    suggestions.value = internalSuggestions;
    nextTick(instance2.proxy.updatePopper);
  };
  const handleSuggestionClick = (index2) => {
    const targetNode = suggestions.value[index2];
    if (multiple !== null && multiple !== void 0 && multiple.value) {
      const {
        checked
      } = targetNode;
      targetNode.doCheck(!checked);
      panel.value.calculateMultiCheckedValue();
    } else {
      checkedState.value = targetNode.getValueByOption();
      toggleDropDownVisible(false);
    }
  };
  return {
    suggestions,
    getSuggestions,
    handleSuggestionClick
  };
};
var usePresent = ({
  panel,
  checkedState,
  checkStrictly,
  isDisabled,
  leafOnly,
  showAllLevels,
  separator,
  collapseTags,
  multiple
}) => {
  const presentState = reactive({
    text: null,
    tags: []
  });
  const computePresentTags = () => {
    const checkedNodes = panel.value.getCheckedNodes(leafOnly.value);
    const tags = [];
    const genTag = (node) => ({
      node,
      key: node.uid,
      text: node.getText(showAllLevels.value, separator.value),
      hitState: false,
      closable: !isDisabled.value && !node.isDisabled
    });
    if (checkedNodes.length) {
      const [first, ...rest] = checkedNodes;
      const restCount = rest.length;
      tags.push(genTag(first));
      if (restCount) {
        if (collapseTags.value) {
          tags.push({
            key: -1,
            text: `+ ${restCount}`,
            closable: false
          });
        } else {
          rest.forEach((node) => tags.push(genTag(node)));
        }
      }
    }
    checkedState.nodes = checkedNodes;
    presentState.tags = tags;
  };
  const computePresentText = () => {
    if (!isEmpty(checkedState.value)) {
      const node = panel.value.getNodeByValue(checkedState.value);
      if (node && (checkStrictly.value || node.isLeaf)) {
        presentState.text = node.getText(showAllLevels.value, separator.value);
        return;
      }
    }
    presentState.text = null;
  };
  const computePresentContent = () => {
    nextTick(() => {
      if (multiple !== null && multiple !== void 0 && multiple.value) {
        computePresentTags();
        presentState.text = presentState.tags.length ? " " : null;
      } else {
        computePresentText();
      }
    });
  };
  return {
    presentState,
    computePresentContent,
    computePresentText,
    computePresentTags
  };
};
var _hoisted_1$L = {
  key: 0,
  class: "el-cascader__tags"
};
var _hoisted_2$u = {
  key: 0,
  class: "el-icon-check"
};
var _hoisted_3$o = {
  class: "el-cascader__empty-text"
};
function render$12(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_cascader_panel = resolveComponent("el-cascader-panel");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return withDirectives((openBlock(), createBlock("div", {
    ref: "reference",
    class: ["el-cascader", $setup.realSize && `el-cascader--${$setup.realSize}`, {
      "is-disabled": $setup.isDisabled
    }],
    onMouseenter: _cache[10] || (_cache[10] = ($event) => $setup.inputState.hover = true),
    onMouseleave: _cache[11] || (_cache[11] = ($event) => $setup.inputState.hover = false),
    onClick: _cache[12] || (_cache[12] = () => $setup.toggleDropDownVisible($setup.readonly ? void 0 : true)),
    onKeydown: _cache[13] || (_cache[13] = (...args) => $setup.handleKeyDown && $setup.handleKeyDown(...args))
  }, [createVNode(_component_el_input, {
    ref: "input",
    modelValue: $setup.internalValue,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.internalValue = $event),
    size: $setup.realSize,
    placeholder: $props.placeholder,
    readonly: $setup.readonly,
    disabled: $setup.isDisabled,
    "validate-event": false,
    class: {
      "is-focus": $setup.dropDownVisible
    },
    onFocus: $setup.handleFocus,
    onBlur: $setup.handleBlur,
    onInput: $setup.handleInput
  }, {
    suffix: withCtx(() => [$setup.clearBtnVisible ? (openBlock(), createBlock("i", {
      key: 0,
      class: "el-input__icon el-icon-circle-close",
      onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $setup.handleClear && $setup.handleClear(...args), ["stop"]))
    })) : (openBlock(), createBlock("i", {
      key: 1,
      class: ["el-input__icon", "el-icon-arrow-down", $setup.dropDownVisible && "is-reverse"],
      onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.toggleDropDownVisible(void 0), ["stop"]))
    }, null, 2))]),
    _: 1
  }, 8, ["modelValue", "size", "placeholder", "readonly", "disabled", "class", "onFocus", "onBlur", "onInput"]), $setup.multiple ? (openBlock(), createBlock("div", _hoisted_1$L, [(openBlock(true), createBlock(Fragment, null, renderList($setup.presentState.tags, (tag, index2) => {
    return openBlock(), createBlock(_component_el_tag, {
      key: tag.key,
      type: "info",
      size: $setup.tagSize,
      hit: tag.hitState,
      closable: tag.closable,
      "disable-transitions": "",
      onClose: ($event) => $setup.deleteTag(index2)
    }, {
      default: withCtx(() => [createVNode("span", null, toDisplayString(tag.text), 1)]),
      _: 2
    }, 1032, ["size", "hit", "closable", "onClose"]);
  }), 128)), $props.filterable && !$setup.isDisabled ? withDirectives((openBlock(), createBlock("input", {
    key: 0,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.inputState.value = $event),
    type: "text",
    class: "el-cascader__search-input",
    placeholder: $setup.presentState.tags.length ? "" : $props.placeholder,
    onInput: _cache[5] || (_cache[5] = (e) => $setup.handleInput($setup.inputState.value, e)),
    onClick: _cache[6] || (_cache[6] = withModifiers(($event) => $setup.toggleDropDownVisible(true), ["stop"])),
    onKeydown: _cache[7] || (_cache[7] = withKeys((...args) => $setup.handleDelete && $setup.handleDelete(...args), ["delete"]))
  }, null, 40, ["placeholder"])), [[vModelText, $setup.inputState.value, void 0, {
    trim: true
  }]]) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), createVNode(Transition, {
    name: "el-zoom-in-top",
    onAfterLeave: $setup.handleDropdownLeave
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      ref: "popper",
      class: ["el-popper", "el-cascader__dropdown", $props.popperClass]
    }, [withDirectives(createVNode(_component_el_cascader_panel, {
      ref: "panel",
      modelValue: $setup.checkedState.value,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.checkedState.value = $event),
      options: $props.options,
      props: $setup.config,
      border: false,
      "render-label": _ctx.$slots.default,
      onExpandChange: $setup.handleExpandChange,
      onClose: _cache[9] || (_cache[9] = ($event) => $setup.toggleDropDownVisible(false)),
      computePresentText: $setup.computePresentText
    }, null, 8, ["modelValue", "options", "props", "render-label", "onExpandChange", "computePresentText"]), [[vShow, !$setup.filtering]]), $props.filterable ? withDirectives((openBlock(), createBlock(_component_el_scrollbar, {
      key: 0,
      ref: "suggestionPanel",
      tag: "ul",
      class: "el-cascader__suggestion-panel",
      "view-class": "el-cascader__suggestion-list",
      onKeydown: $setup.handleSuggestionKeyDown
    }, {
      default: withCtx(() => [$setup.suggestions.length ? (openBlock(true), createBlock(Fragment, {
        key: 0
      }, renderList($setup.suggestions, (item, index2) => {
        return openBlock(), createBlock("li", {
          key: item.uid,
          class: ["el-cascader__suggestion-item", item.checked && "is-checked"],
          tabindex: -1,
          onClick: ($event) => $setup.handleSuggestionClick(index2)
        }, [createVNode("span", null, toDisplayString(item.text), 1), item.checked ? (openBlock(), createBlock("i", _hoisted_2$u)) : createCommentVNode("v-if", true)], 10, ["onClick"]);
      }), 128)) : renderSlot(_ctx.$slots, "empty", {
        key: 1
      }, () => [createVNode("li", _hoisted_3$o, toDisplayString($setup.t("el.cascader.noMatch")), 1)])]),
      _: 1
    }, 8, ["onKeydown"])), [[vShow, $setup.filtering]]) : createCommentVNode("v-if", true)], 2), [[vShow, $setup.dropDownVisible]])]),
    _: 1
  }, 8, ["onAfterLeave"])], 34)), [[_directive_clickoutside, () => $setup.toggleDropDownVisible(false)]]);
}
script$1b.render = render$12;
script$1b.__file = "packages/cascader/Cascader.vue";
script$1b.install = function(app) {
  app.component(script$1b.name, script$1b);
};
var script$1a = {
  props: {
    type: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    iconClass: {
      type: String,
      default: ""
    }
  },
  setup(props2) {
    const classes = useClasses$2(props2);
    return {
      classes
    };
  }
};
var useClasses$2 = (props2) => {
  return computed(() => {
    return ["el-switch__label", props2 && props2.type ? `el-switch__label--${props2 && props2.type}` : "", {
      "is-active": props2 && props2.active
    }];
  });
};
var _hoisted_1$K = {
  key: 0
};
function render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.iconClass || $props.text ? (openBlock(), createBlock("span", {
    key: 0,
    class: $setup.classes
  }, [createVNode("i", {
    class: [$props.iconClass]
  }, null, 2), !$props.iconClass ? (openBlock(), createBlock("span", _hoisted_1$K, toDisplayString($props.text), 1)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true);
}
script$1a.render = render$11;
script$1a.__file = "src/components/Switch/src/SwitchLabel.vue";
var script$19 = {
  name: "ElSwitch",
  components: {
    SwitchLabel: script$1a
  },
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    },
    activeIconClass: {
      type: String,
      default: ""
    },
    inactiveIconClass: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props2, {
    emit
  }) {
    const {
      activeValue,
      inactiveValue,
      modelValue,
      disabled,
      activeColor,
      inactiveColor
    } = toRefs(props2);
    useNormalizeModelValue({
      modelValue,
      activeValue,
      inactiveValue,
      emit
    });
    const isChecked = computed(() => {
      return modelValue.value === activeValue.value;
    });
    const backgroundColor = computed(() => {
      return isChecked.value ? activeColor.value : inactiveColor.value;
    });
    const {
      handleClick
    } = useClick({
      isChecked,
      inactiveValue,
      activeValue,
      disabled,
      emit
    });
    const classes = useClasses$1({
      disabled,
      isChecked
    });
    const coreStyle = computed(() => {
      const style = {
        width: "",
        background: "",
        "border-color": ""
      };
      style.width = props2.width + "px";
      style.background = backgroundColor.value;
      style["border-color"] = backgroundColor.value;
      return style;
    });
    return {
      isChecked,
      handleClick,
      classes,
      coreStyle
    };
  }
};
var useClasses$1 = ({
  disabled,
  isChecked
}) => {
  return computed(() => {
    return [{
      "is-disabled": disabled.value,
      "is-checked": isChecked.value
    }];
  });
};
var useNormalizeModelValue = ({
  modelValue,
  activeValue,
  inactiveValue,
  emit
}) => {
  onMounted(() => {
    if (modelValue.value !== activeValue.value && modelValue.value !== inactiveValue.value) {
      emit("update:modelValue", inactiveValue.value);
    }
  });
};
var useClick = ({
  isChecked,
  inactiveValue,
  activeValue,
  disabled,
  emit
}) => {
  const handleClick = () => {
    if (disabled && disabled.value)
      return;
    const newValue = isChecked && isChecked.value ? inactiveValue.value : activeValue.value;
    emit("update:modelValue", newValue);
    emit("change", newValue);
  };
  return {
    handleClick
  };
};
function render$10(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SwitchLabel = resolveComponent("SwitchLabel");
  return openBlock(), createBlock("div", {
    class: ["el-switch", $setup.classes],
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $setup.handleClick && $setup.handleClick(...args), ["prevent"]))
  }, [createVNode(_component_SwitchLabel, {
    active: !$setup.isChecked,
    type: "left",
    text: $props.inactiveText,
    iconClass: $props.inactiveIconClass
  }, null, 8, ["active", "text", "iconClass"]), createVNode("span", {
    class: "el-switch__core",
    ref: "core",
    style: $setup.coreStyle
  }, null, 4), createVNode(_component_SwitchLabel, {
    active: $setup.isChecked,
    type: "right",
    text: $props.activeText,
    iconClass: $props.activeIconClass
  }, null, 8, ["active", "text", "iconClass"])], 2);
}
script$19.render = render$10;
script$19.__file = "src/components/Switch/src/Switch.vue";
script$19.install = function(app) {
  app.component(script$19.name, script$19);
};
var stop = (e) => e.stopPropagation();
var vuePopperProps = {
  transformOrigin: {
    type: [Boolean, String],
    default: true
  },
  placement: {
    type: String,
    default: "bottom"
  },
  boundariesPadding: {
    type: Number,
    default: 5
  },
  reference: {},
  popper: {},
  offset: {
    default: 0
  },
  modelValue: Boolean,
  visibleArrow: Boolean,
  arrowOffset: {
    type: Number,
    default: 35
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  popperOptions: {
    type: Object,
    default() {
      return {
        gpuAcceleration: false
      };
    }
  }
};
function useVuePopper(props2, {
  emit,
  slots,
  referenceEl
}) {
  const {
    transformOrigin,
    placement,
    reference,
    popper,
    offset,
    modelValue,
    visibleArrow,
    arrowOffset,
    appendToBody: appendToBody2,
    popperOptions,
    disabled
  } = toRefs(props2);
  const showPopper = ref(false);
  const currentPlacement = ref("");
  const popperElm = ref(null);
  const popperJS = ref(null);
  const instance2 = getCurrentInstance();
  function createPopper() {
    if (instance2.proxy.$isServer)
      return;
    currentPlacement.value = currentPlacement.value || placement.value;
    if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(currentPlacement.value)) {
      return;
    }
    const options = popperOptions.value;
    const popperRef = popperElm.value = popperElm.value || popper && popper.value || instance2.proxy.$refs.popper;
    let referenceRef = referenceEl.value = referenceEl.value || reference && reference.value || instance2.proxy.$refs.reference;
    if (!referenceRef && slots.reference && slots.reference() && slots.reference()[0]) {
      referenceRef = referenceEl.value = slots.reference()[0].el;
    }
    if (!popperRef || !referenceRef)
      return;
    if (visibleArrow.value)
      appendArrow(popperRef);
    if (appendToBody2.value)
      document.body.appendChild(popperElm.value);
    if (popperJS.value && popperJS.value.destroy) {
      popperJS.value.destroy();
    }
    options.placement = currentPlacement.value;
    options.offset = offset.value;
    options.arrowOffset = arrowOffset.value;
    popperJS.value = new Popper$1(referenceRef, popperRef, options);
    popperJS.value.onCreate(() => {
      emit("created", instance2.proxy);
      resetTransformOrigin();
      nextTick(() => updatePopper());
    });
    if (typeof options.onUpdate === "function") {
      popperJS.value.onUpdate(options.onUpdate);
    }
    popperJS.value._popper.style.zIndex = PopupManager.nextZIndex();
    popperElm.value.addEventListener("click", stop);
  }
  function updatePopper() {
    const popperJSRef = popperJS.value;
    if (popperJSRef) {
      popperJSRef.update();
      if (popperJSRef._popper) {
        popperJSRef._popper.style.zIndex = PopupManager.nextZIndex();
      }
    } else {
      createPopper();
    }
  }
  function doDestroy(forceDestroy) {
    if (!popperJS.value || showPopper.value && !forceDestroy)
      return;
    popperJS.value.destroy();
    popperJS.value = null;
  }
  function destroyPopper() {
    if (popperJS.value) {
      resetTransformOrigin();
    }
  }
  function resetTransformOrigin() {
    if (!transformOrigin.value)
      return;
    const placementMap = {
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    };
    const placement2 = popperJS.value._popper.getAttribute("x-placement").split("-")[0];
    const origin = placementMap[placement2];
    popperJS.value._popper.style.transformOrigin = typeof transformOrigin.value === "string" ? transformOrigin.value : ["top", "bottom"].indexOf(placement2) > -1 ? `center ${origin}` : `${origin} center`;
  }
  const appended = ref(false);
  function appendArrow(element) {
    let hash;
    if (appended.value) {
      return;
    }
    appended.value = true;
    for (const item in element.attributes) {
      if (/^_v-/.test(element.attributes[item].name)) {
        hash = element.attributes[item].name;
        break;
      }
    }
    const arrow = document.createElement("div");
    if (hash) {
      arrow.setAttribute(hash, "");
    }
    arrow.setAttribute("x-arrow", "");
    arrow.className = "popper__arrow";
    element.appendChild(arrow);
  }
  watch(modelValue, (val) => {
    showPopper.value = val;
    emit("update:modelValue", val);
  }, {
    immediate: true
  });
  watch(showPopper, (val) => {
    if (disabled.value)
      return;
    val ? updatePopper() : destroyPopper();
    emit("update:modelValue", val);
  });
  onBeforeUnmount(() => {
    doDestroy(true);
    if (popperElm.value && popperElm.value.parentNode === document.body) {
      popperElm.value.removeEventListener("click", stop);
      document.body.removeChild(popperElm.value);
    }
  });
  return {
    showPopper,
    currentPlacement,
    popperElm,
    popperJS,
    createPopper,
    updatePopper,
    doDestroy,
    destroyPopper,
    resetTransformOrigin,
    appendArrow
  };
}
var ElTooltip = {
  name: "ElTooltip",
  emits: ["input", "update:modelValue", "created"],
  props: __spreadProps(__spreadValues({}, vuePopperProps), {
    openDelay: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    manual: Boolean,
    effect: {
      type: String,
      default: "dark"
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    popperClass: String,
    content: {
      type: String,
      default: "dark"
    },
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: "el-fade-in-linear"
    },
    popperOptions: {
      default() {
        return {
          boundariesPadding: 10,
          gpuAcceleration: false
        };
      }
    },
    enterable: {
      type: Boolean,
      default: true
    },
    hideAfter: {
      type: Number,
      default: 0
    },
    tabindex: {
      type: Number,
      default: 0
    }
  }),
  beforeCreate() {
    if (this.$isServer)
      return;
    this.popperVM = createApp({
      data() {
        return {
          node: ""
        };
      },
      render() {
        return this.node;
      }
    }).mount(document.createElement("div"));
  },
  setup(props2, context) {
    const timeoutPending = ref(null);
    const timeout = ref(null);
    const focusing = ref(false);
    const expectedState = ref(false);
    const referenceElm = ref(null);
    const {
      emit,
      slots
    } = context;
    const {
      modelValue,
      openDelay,
      disabled,
      manual,
      effect,
      popperClass,
      transition,
      enterable,
      hideAfter,
      tabindex
    } = props2;
    const {
      showPopper,
      updatePopper,
      doDestroy
    } = useVuePopper(props2, {
      emit,
      slots,
      referenceEl: referenceElm
    });
    const instance2 = getCurrentInstance();
    const tooltipId = `el-tooltip-${generateId()}`;
    const debounceClose = debounce$1(200, () => handleClosePopper());
    const show = () => {
      setExpectedState(true);
      handleShowPopper();
    };
    const hide = () => {
      setExpectedState(false);
      debounceClose();
    };
    const handleFocus = () => {
      focusing.value = true;
      show();
    };
    const handleBlur = () => {
      focusing.value = false;
      hide();
    };
    const removeFocusing = () => {
      focusing.value = false;
    };
    const addTooltipClass = (prev) => {
      if (!prev) {
        return "el-tooltip";
      } else {
        return "el-tooltip " + prev.replace("el-tooltip", "");
      }
    };
    const handleShowPopper = () => {
      if (!expectedState.value || manual)
        return;
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        showPopper.value = true;
      }, openDelay);
      if (hideAfter > 0) {
        timeoutPending.value = setTimeout(() => {
          showPopper.value = false;
        }, hideAfter);
      }
    };
    const handleClosePopper = () => {
      if (enterable && expectedState.value || manual)
        return;
      clearTimeout(timeout.value);
      if (timeoutPending.value) {
        clearTimeout(timeoutPending.value);
      }
      showPopper.value = false;
      if (disabled) {
        doDestroy();
      }
    };
    const setExpectedState = (state) => {
      if (state === false) {
        clearTimeout(timeoutPending.value);
      }
      expectedState.value = state;
    };
    const getFirstElement = () => {
      const slotsDefault = slots.default();
      if (!Array.isArray(slotsDefault))
        return null;
      let element = null;
      for (let index2 = 0; index2 < slotsDefault.length; index2++) {
        if (slotsDefault[index2] && slotsDefault[index2].type) {
          element = slotsDefault[index2];
        }
      }
      return element;
    };
    watch(focusing, (val) => {
      if (val) {
        addClass(referenceElm.value, "focusing");
      } else {
        removeClass(referenceElm.value, "focusing");
      }
    });
    onMounted(() => {
      referenceElm.value = instance2.proxy.$el;
      if (referenceElm.value.nodeType === 1) {
        referenceElm.value.setAttribute("aria-describedby", tooltipId);
        referenceElm.value.setAttribute("tabindex", tabindex);
        on(referenceElm.value, "mouseenter", show);
        on(referenceElm.value, "mouseleave", hide);
        on(referenceElm.value, "focus", () => {
          if (!slots.default || !slots.default().length) {
            handleFocus();
            return;
          }
          const slotsProps = slots.default()[0].props;
          if (slotsProps && slotsProps.onFocus) {
            slotsProps.onFocus();
          } else {
            handleFocus();
          }
        });
        on(referenceElm.value, "blur", handleBlur);
        on(referenceElm.value, "click", removeFocusing);
      }
      if (modelValue && instance2.proxy.popperVM) {
        instance2.proxy.popperVM.$nextTick(() => {
          if (modelValue) {
            updatePopper();
          }
        });
      }
    });
    onBeforeMount(() => {
      instance2.proxy.updatePopper = updatePopper;
    });
    onUnmounted(() => {
      const reference = referenceElm.value;
      if (reference.nodeType === 1) {
        off(reference, "mouseenter", show);
        off(reference, "mouseleave", hide);
        off(reference, "focus", handleFocus);
        off(reference, "blur", handleBlur);
        off(reference, "click", removeFocusing);
      }
    });
    return () => {
      if (instance2.proxy.popperVM) {
        instance2.proxy.popperVM.node = createVNode(Transition, {
          "name": transition,
          "onAfterLeave": doDestroy
        }, {
          default: () => [withDirectives(createVNode("div", {
            "onMouseleave": () => {
              setExpectedState(false);
              debounceClose();
            },
            "onMouseenter": () => {
              setExpectedState(true);
            },
            "ref": "popper",
            "role": "tooltip",
            "id": tooltipId,
            "aria-hidden": disabled || !showPopper.value ? "true" : "false",
            "class": ["el-tooltip__popper", "is-" + effect, popperClass]
          }, [slots.content ? slots.content() : instance2.proxy.content]), [[vShow, !disabled && showPopper.value]])]
        });
      }
      const firstElement = getFirstElement();
      if (!firstElement)
        return null;
      const firstElementProps = firstElement.props = firstElement.props || {};
      firstElementProps.class = addTooltipClass(firstElementProps.class);
      return firstElement;
    };
  }
};
ElTooltip.install = function(app) {
  app.component(ElTooltip.name, ElTooltip);
};
var script$18 = {
  name: "ElSliderButton",
  components: {
    ElTooltip
  },
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    vertical: {
      type: Boolean,
      default: false
    },
    tooltipClass: String
  },
  emits: ["update:modelValue"],
  setup(props2, {
    emit
  }) {
    const tooltip = ref(null);
    const {
      parent,
      proxy
    } = getCurrentInstance();
    const {
      modelValue,
      vertical
    } = toRefs(props2);
    const {
      displayTooltip,
      hideTooltip
    } = useToolTip(proxy);
    const {
      hovering,
      handleMouseEnter,
      handleMouseLeave
    } = useMouseHover(displayTooltip, hideTooltip);
    const {
      disabled,
      max,
      min,
      step,
      showTooltip,
      precision,
      currentPosition,
      enableFormat,
      formatValue,
      wrapperStyle
    } = useComputed(modelValue, vertical);
    const {
      dragging,
      isClick,
      startX,
      currentX,
      startY,
      currentY,
      startPosition,
      newPosition,
      oldValue,
      onButtonDown,
      onDragStart,
      onDragging,
      onDragEnd,
      onLeftKeyDown,
      onRightKeyDown,
      setPosition
    } = useDragAndKeyDown(parent, proxy, emit, modelValue, vertical, disabled, step, max, min, precision, currentPosition, displayTooltip, hideTooltip);
    return {
      hovering,
      dragging,
      isClick,
      startX,
      currentX,
      startY,
      currentY,
      startPosition,
      newPosition,
      oldValue,
      disabled,
      max,
      min,
      step,
      showTooltip,
      precision,
      currentPosition,
      enableFormat,
      formatValue,
      wrapperStyle,
      setPosition,
      handleMouseEnter,
      handleMouseLeave,
      onButtonDown,
      onDragStart,
      onDragging,
      onDragEnd,
      onLeftKeyDown,
      onRightKeyDown,
      tooltip
    };
  }
};
function useToolTip(proxy) {
  function displayTooltip() {
    proxy.tooltip && (proxy.tooltip.showPopper = true);
  }
  function hideTooltip() {
    proxy.tooltip && (proxy.tooltip.showPopper = false);
  }
  return {
    displayTooltip,
    hideTooltip
  };
}
function useMouseHover(displayTooltip, hideTooltip) {
  const hovering = ref(false);
  function handleMouseEnter() {
    hovering.value = true;
    displayTooltip();
  }
  function handleMouseLeave() {
    hovering.value = false;
    hideTooltip();
  }
  return {
    hovering,
    handleMouseEnter,
    handleMouseLeave
  };
}
function useDragAndKeyDown(parent, proxy, emit, modelValue, vertical, disabled, step, max, min, precision, currentPosition, displayTooltip, hideTooltip) {
  const {
    resetSize,
    emitChange
  } = parent.proxy;
  const dragging = ref(false);
  const isClick = ref(false);
  const startX = ref(0);
  const currentX = ref(0);
  const startY = ref(0);
  const currentY = ref(0);
  const startPosition = ref(0);
  const newPosition = ref(null);
  const oldValue = ref(unref(modelValue));
  watch(dragging, (val) => parent.proxy.dragging = val);
  function onButtonDown(event) {
    if (unref(disabled))
      return;
    event.preventDefault();
    onDragStart(event);
    window.addEventListener("mousemove", onDragging);
    window.addEventListener("touchmove", onDragging);
    window.addEventListener("mouseup", onDragEnd);
    window.addEventListener("touchend", onDragEnd);
    window.addEventListener("contextmenu", onDragEnd);
  }
  function onDragStart(event) {
    dragging.value = true;
    isClick.value = true;
    if (event.type === "touchstart") {
      event.clientY = event.touches[0].clientY;
      event.clientX = event.touches[0].clientX;
    }
    if (unref(vertical)) {
      startY.value = event.clientY;
    } else {
      startX.value = event.clientX;
    }
    startPosition.value = parseFloat(unref(currentPosition));
    newPosition.value = unref(startPosition);
  }
  function onDragging(event) {
    if (unref(dragging)) {
      isClick.value = false;
      displayTooltip();
      resetSize();
      let diff = 0;
      if (event.type === "touchmove") {
        event.clientY = event.touches[0].clientY;
        event.clientX = event.touches[0].clientX;
      }
      if (unref(vertical)) {
        currentY.value = event.clientY;
        diff = (startY.value - currentY.value) / parent.proxy.sliderSize * 100;
      } else {
        currentX.value = event.clientX;
        diff = (currentX.value - startX.value) / parent.proxy.sliderSize * 100;
      }
      newPosition.value = unref(startPosition) + diff;
      setPosition(unref(newPosition));
    }
  }
  function onDragEnd() {
    if (unref(dragging)) {
      setTimeout(() => {
        dragging.value = false;
        hideTooltip();
        if (!isClick.value) {
          setPosition(unref(newPosition));
          emitChange();
        }
      }, 0);
      window.removeEventListener("mousemove", onDragging);
      window.removeEventListener("touchmove", onDragging);
      window.removeEventListener("mouseup", onDragEnd);
      window.removeEventListener("touchend", onDragEnd);
      window.removeEventListener("contextmenu", onDragEnd);
    }
  }
  function onLeftKeyDown() {
    if (unref(disabled))
      return;
    newPosition.value = parseFloat(unref(currentPosition)) - unref(step) / (unref(max) - unref(min)) * 100;
    setPosition(unref(newPosition));
    emitChange();
  }
  function onRightKeyDown() {
    if (unref(disabled))
      return;
    newPosition.value = parseFloat(unref(currentPosition)) + unref(step) / (unref(max) - unref(min)) * 100;
    setPosition(unref(newPosition));
    emitChange();
  }
  function setPosition(newPosition2) {
    if (newPosition2 === null || isNaN(newPosition2))
      return;
    if (newPosition2 < 0) {
      newPosition2 = 0;
    } else if (newPosition2 > 100) {
      newPosition2 = 100;
    }
    const lengthPerStep = 100 / ((max.value - min.value) / step.value);
    const steps = Math.round(newPosition2 / lengthPerStep);
    let value = steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value;
    value = parseFloat(value.toFixed(precision.value));
    emit("update:modelValue", value);
    nextTick(() => {
      proxy.tooltip && proxy.tooltip.updatePopper();
    });
    if (!unref(dragging) && unref(modelValue) !== unref(oldValue)) {
      oldValue.value = value;
    }
  }
  return {
    dragging,
    isClick,
    startX,
    currentX,
    startY,
    currentY,
    startPosition,
    newPosition,
    oldValue,
    setPosition,
    onButtonDown,
    onDragStart,
    onDragging,
    onDragEnd,
    onLeftKeyDown,
    onRightKeyDown
  };
}
function useComputed(modelValue, vertical) {
  const {
    parent
  } = getCurrentInstance();
  const disabled = computed(() => parent.proxy.sliderDisabled);
  const max = computed(() => parent.proxy.max);
  const min = computed(() => parent.proxy.min);
  const step = computed(() => parent.proxy.step);
  const showTooltip = computed(() => parent.proxy.showTooltip);
  const precision = computed(() => parent.proxy.precision);
  const currentPosition = computed(() => `${(unref(modelValue) - unref(min)) / (unref(max) - unref(min)) * 100}%`);
  const enableFormat = computed(() => parent.proxy.formatTooltip instanceof Function);
  const formatValue = computed(() => unref(enableFormat) && parent.proxy.formatTooltip(unref(modelValue)) || unref(modelValue));
  const wrapperStyle = computed(() => unref(vertical) ? {
    bottom: unref(currentPosition)
  } : {
    left: unref(currentPosition)
  });
  return {
    disabled,
    max,
    min,
    step,
    showTooltip,
    precision,
    currentPosition,
    enableFormat,
    formatValue,
    wrapperStyle
  };
}
function render$$(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createBlock("div", {
    class: ["el-slider__button-wrapper", {
      hover: $setup.hovering,
      dragging: $setup.dragging
    }],
    onMouseenter: _cache[1] || (_cache[1] = (...args) => $setup.handleMouseEnter && $setup.handleMouseEnter(...args)),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => $setup.handleMouseLeave && $setup.handleMouseLeave(...args)),
    onMousedown: _cache[3] || (_cache[3] = (...args) => $setup.onButtonDown && $setup.onButtonDown(...args)),
    onTouchstartPassive: _cache[4] || (_cache[4] = (...args) => $setup.onButtonDown && $setup.onButtonDown(...args)),
    style: $setup.wrapperStyle,
    ref: "button",
    tabindex: "0",
    onFocus: _cache[5] || (_cache[5] = (...args) => $setup.handleMouseEnter && $setup.handleMouseEnter(...args)),
    onBlur: _cache[6] || (_cache[6] = (...args) => $setup.handleMouseLeave && $setup.handleMouseLeave(...args)),
    onKeydown: [_cache[7] || (_cache[7] = withKeys((...args) => $setup.onLeftKeyDown && $setup.onLeftKeyDown(...args), ["left"])), _cache[8] || (_cache[8] = withKeys((...args) => $setup.onRightKeyDown && $setup.onRightKeyDown(...args), ["right"])), _cache[9] || (_cache[9] = withKeys(withModifiers((...args) => $setup.onLeftKeyDown && $setup.onLeftKeyDown(...args), ["prevent"]), ["down"])), _cache[10] || (_cache[10] = withKeys(withModifiers((...args) => $setup.onRightKeyDown && $setup.onRightKeyDown(...args), ["prevent"]), ["up"]))]
  }, [createVNode(_component_el_tooltip, {
    placement: "top",
    ref: "tooltip",
    "popper-class": $props.tooltipClass,
    disabled: !$setup.showTooltip
  }, {
    content: withCtx(() => [createVNode("span", null, toDisplayString($setup.formatValue), 1)]),
    default: withCtx(() => [createVNode("div", {
      class: ["el-slider__button", {
        hover: $setup.hovering,
        dragging: $setup.dragging
      }]
    }, null, 2)]),
    _: 1
  }, 8, ["popper-class", "disabled"])], 38);
}
script$18.render = render$$;
script$18.__file = "packages/slider/src/button.vue";
var SliderMarker = {
  name: "ElMarker",
  props: {
    mark: {
      type: [String, Object]
    }
  },
  render() {
    const label = typeof this.mark === "string" ? this.mark : this.mark.label;
    return createVNode("div", {
      "class": "el-slider__marks-text",
      "style": this.mark.style || {}
    }, [label]);
  }
};
var script$17 = {
  name: "ElSlider",
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    },
    showInput: {
      type: Boolean,
      default: false
    },
    showInputControls: {
      type: Boolean,
      default: true
    },
    inputSize: {
      type: String,
      default: "small"
    },
    showStops: {
      type: Boolean,
      default: false
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    formatTooltip: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    height: {
      type: String
    },
    debounce: {
      type: Number,
      default: 300
    },
    label: {
      type: String
    },
    tooltipClass: String,
    marks: Object
  },
  components: {
    ElInputNumber: script$1k,
    SliderButton: script$18,
    SliderMarker
  },
  emits: ["update:modelValue", "change"],
  setup(props2, {
    emit
  }) {
    const {
      proxy
    } = getCurrentInstance();
    const state = reactive({
      firstValue: null,
      secondValue: null,
      oldValue: null,
      dragging: false,
      sliderSize: 1
    });
    const {
      resetSize
    } = useCommon(props2, state, proxy);
    useLifeCycle(props2, state, proxy, resetSize);
    const {
      minValue,
      maxValue,
      valueChanged,
      setValues
    } = useModel(props2, state, emit);
    const {
      stops,
      markList,
      barSize,
      barStart,
      precision,
      runwayStyle,
      barStyle,
      sliderDisabled,
      getStopStyle
    } = useStyle$4(props2, state, minValue, maxValue);
    const {
      onSliderClick,
      emitChange,
      setPosition
    } = useEvent$1(props2, state, proxy, emit, minValue, maxValue, sliderDisabled, resetSize);
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      minValue,
      maxValue,
      stops,
      markList,
      barSize,
      barStart,
      precision,
      runwayStyle,
      barStyle,
      sliderDisabled,
      valueChanged,
      setValues,
      setPosition,
      onSliderClick,
      resetSize,
      emitChange,
      getStopStyle
    });
  }
};
function useCommon(props2, state, proxy) {
  const {
    vertical
  } = toRefs(props2);
  function resetSize() {
    const slider = proxy.$refs.slider;
    if (slider) {
      state.sliderSize = slider[`client${unref(vertical) ? "Height" : "Width"}`];
    }
  }
  return {
    resetSize
  };
}
function useLifeCycle(props2, state, proxy, resetSize) {
  const {
    max,
    min,
    modelValue,
    range: range2,
    label
  } = props2;
  let valuetext;
  if (range2) {
    if (Array.isArray(modelValue)) {
      state.firstValue = Math.max(min, modelValue[0]);
      state.secondValue = Math.min(max, modelValue[1]);
    } else {
      state.firstValue = min;
      state.secondValue = max;
    }
    state.oldValue = [state.firstValue, state.secondValue];
    valuetext = `${state.firstValue}-${state.secondValue}`;
  } else {
    if (typeof modelValue !== "number" || isNaN(modelValue)) {
      state.firstValue = min;
    } else {
      state.firstValue = Math.min(max, Math.max(min, modelValue));
    }
    state.oldValue = state.firstValue;
    valuetext = state.firstValue;
  }
  onMounted(() => {
    proxy.$el.setAttribute("aria-valuetext", valuetext);
    proxy.$el.setAttribute("aria-label", label ? label : `slider between ${min} and ${max}`);
    resetSize();
    window.addEventListener("resize", resetSize);
  });
  onBeforeUnmount(() => window.removeEventListener("resize", resetSize));
}
function useModel(props2, state, emit) {
  const {
    dispatch
  } = useEmitter();
  const {
    max,
    min,
    modelValue,
    range: range2
  } = toRefs(props2);
  const minValue = computed(() => Math.min(state.firstValue, state.secondValue));
  const maxValue = computed(() => Math.max(state.firstValue, state.secondValue));
  watch(modelValue, (val, oldVal) => {
    if (state.dragging || Array.isArray(val) && Array.isArray(oldVal) && val.every((item, index2) => item === oldVal[index2])) {
      return;
    }
    setValues();
  });
  watch(() => state.dragging, (val) => !val && setValues());
  watch(() => state.firstValue, (val) => unref(range2) ? emit("update:modelValue", [unref(minValue), unref(maxValue)]) : emit("update:modelValue", val));
  watch(() => state.secondValue, () => unref(range2) && emit("update:modelValue", [unref(minValue), unref(maxValue)]));
  watch(min, () => setValues());
  watch(max, () => setValues());
  function valueChanged() {
    if (unref(range2)) {
      return ![minValue, maxValue].every((item, index2) => unref(item) === state.oldValue[index2]);
    } else {
      return unref(modelValue) !== state.oldValue;
    }
  }
  function setValues() {
    const _max = unref(max);
    const _min = unref(min);
    if (_min > _max) {
      console.error("[Element Error][Slider]min should not be greater than max.");
      return;
    }
    const val = unref(modelValue);
    if (unref(range2) && Array.isArray(val)) {
      if (val[1] < _min) {
        emit("update:modelValue", [_min, _min]);
      } else if (val[0] > _max) {
        emit("update:modelValue", [_max, _max]);
      } else if (val[0] < _min) {
        emit("update:modelValue", [_min, val[1]]);
      } else if (val[1] > _max) {
        emit("update:modelValue", [val[0], _max]);
      } else {
        state.firstValue = val[0];
        state.secondValue = val[1];
        if (valueChanged()) {
          dispatch("ElFormItem", "el.form.change", [unref(minValue), unref(maxValue)]);
          state.oldValue = val.slice();
        }
      }
    } else if (!unref(range2) && typeof val === "number" && !isNaN(val)) {
      if (val < _min) {
        emit("update:modelValue", _min);
      } else if (val > _max) {
        emit("update:modelValue", _max);
      } else {
        state.firstValue = val;
        if (valueChanged()) {
          dispatch("ElFormItem", "el.form.change", val);
          state.oldValue = val;
        }
      }
    }
  }
  return {
    minValue,
    maxValue,
    valueChanged,
    setValues
  };
}
function useEvent$1(props2, state, proxy, emit, minValue, maxValue, sliderDisabled, resetSize) {
  const {
    modelValue,
    range: range2,
    vertical,
    min,
    max
  } = toRefs(props2);
  function onSliderClick(event) {
    if (unref(sliderDisabled) || state.dragging)
      return;
    resetSize();
    const slider = proxy.$refs.slider;
    if (unref(vertical)) {
      const sliderOffsetBottom = slider.getBoundingClientRect().bottom;
      setPosition((sliderOffsetBottom - event.clientY) / state.sliderSize * 100);
    } else {
      const sliderOffsetLeft = slider.getBoundingClientRect().left;
      setPosition((event.clientX - sliderOffsetLeft) / state.sliderSize * 100);
    }
    emitChange();
  }
  function emitChange() {
    nextTick(() => emit("change", unref(range2) ? [unref(minValue), unref(maxValue)] : unref(modelValue)));
  }
  function setPosition(percent) {
    const targetValue = unref(min) + percent * (unref(max) - unref(min)) / 100;
    if (!unref(range2)) {
      proxy.$refs.button1.setPosition(percent);
      return;
    }
    let button;
    if (Math.abs(unref(minValue) - targetValue) < Math.abs(unref(maxValue) - targetValue)) {
      button = state.firstValue < state.secondValue ? "button1" : "button2";
    } else {
      button = state.firstValue > state.secondValue ? "button1" : "button2";
    }
    proxy.$refs[button].setPosition(percent);
  }
  return {
    onSliderClick,
    emitChange,
    setPosition
  };
}
function useStyle$4(props2, state, minValue, maxValue) {
  const elForm = inject("elFrom", {
    default: ""
  });
  const {
    disabled,
    height,
    showStops,
    min,
    max,
    step,
    range: range2,
    marks,
    vertical
  } = toRefs(props2);
  const stops = computed(() => {
    if (!unref(showStops) || unref(min) > unref(max))
      return [];
    if (unref(step) === 0) {
      console.warn("[Element Warn][Slider]step should not be 0.");
      return [];
    }
    const stopCount = (unref(max) - unref(min)) / unref(step);
    const stepWidth = 100 * unref(step) / (unref(max) - unref(min));
    const result = [];
    for (let i = 1; i < stopCount; i++) {
      result.push(i * stepWidth);
    }
    if (unref(range2)) {
      return result.filter((step2) => {
        return step2 < 100 * (unref(minValue) - unref(min)) / (unref(max) - unref(min)) || step2 > 100 * (unref(maxValue) - unref(min)) / (unref(max) - unref(min));
      });
    } else {
      return result.filter((step2) => step2 > 100 * (state.firstValue - unref(min)) / (unref(max) - unref(min)));
    }
  });
  const markList = computed(() => {
    if (!unref(marks)) {
      return [];
    }
    const marksKeys = Object.keys(unref(marks));
    return marksKeys.map(parseFloat).sort((a, b) => a - b).filter((point) => point <= unref(max) && point >= unref(min)).map((point) => ({
      point,
      position: (point - unref(min)) * 100 / (unref(max) - unref(min)),
      mark: marks.value[point]
    }));
  });
  const barSize = computed(() => {
    return unref(range2) ? `${100 * (unref(maxValue) - unref(minValue)) / (unref(max) - unref(min))}%` : `${100 * (state.firstValue - unref(min)) / (unref(max) - unref(min))}%`;
  });
  const barStart = computed(() => {
    return unref(range2) ? `${100 * (unref(minValue) - unref(min)) / (unref(max) - unref(min))}%` : "0%";
  });
  const precision = computed(() => {
    const precisions = [min, max, step].map((item) => {
      const decimal = ("" + unref(item)).split(".")[1];
      return decimal ? decimal.length : 0;
    });
    return Math.max.apply(null, precisions);
  });
  const runwayStyle = computed(() => {
    if (unref(vertical) && isUndefined(height)) {
      console.warn("[Element Warn][Slider]height must has a value when vertical is true");
      return {};
    }
    return unref(vertical) ? {
      height: unref(height)
    } : {};
  });
  const barStyle = computed(() => {
    return unref(vertical) ? {
      height: unref(barSize),
      bottom: unref(barStart)
    } : {
      width: unref(barSize),
      left: unref(barStart)
    };
  });
  const sliderDisabled = computed(() => {
    return unref(disabled) || (elForm.props || {}).disabled;
  });
  function getStopStyle(position) {
    return unref(vertical) ? {
      bottom: position + "%"
    } : {
      left: position + "%"
    };
  }
  return {
    stops,
    markList,
    barSize,
    barStart,
    precision,
    runwayStyle,
    barStyle,
    sliderDisabled,
    getStopStyle
  };
}
var _hoisted_1$J = {
  class: "el-slider__marks"
};
function render$_(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_slider_button = resolveComponent("slider-button");
  const _component_slider_marker = resolveComponent("slider-marker");
  return openBlock(), createBlock("div", {
    class: ["el-slider", {
      "is-vertical": $props.vertical,
      "el-slider--with-input": $props.showInput
    }],
    role: "slider",
    "aria-valuemin": $props.min,
    "aria-valuemax": $props.max,
    "aria-orientation": $props.vertical ? "vertical" : "horizontal",
    "aria-disabled": $setup.sliderDisabled
  }, [$props.showInput && !$props.range ? (openBlock(), createBlock(_component_el_input_number, {
    key: 0,
    modelValue: _ctx.firstValue,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.firstValue = $event),
    class: "el-slider__input",
    ref: "input",
    onChange: $setup.emitChange,
    step: $props.step,
    disabled: $setup.sliderDisabled,
    controls: $props.showInputControls,
    min: $props.min,
    max: $props.max,
    debounce: $props.debounce,
    size: $props.inputSize
  }, null, 8, ["modelValue", "onChange", "step", "disabled", "controls", "min", "max", "debounce", "size"])) : createCommentVNode("v-if", true), createVNode("div", {
    class: ["el-slider__runway", {
      "show-input": $props.showInput,
      disabled: $setup.sliderDisabled
    }],
    style: $setup.runwayStyle,
    onClick: _cache[4] || (_cache[4] = (...args) => $setup.onSliderClick && $setup.onSliderClick(...args)),
    ref: "slider"
  }, [createVNode("div", {
    class: "el-slider__bar",
    style: $setup.barStyle
  }, null, 4), createVNode(_component_slider_button, {
    modelValue: _ctx.firstValue,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.firstValue = $event),
    vertical: $props.vertical,
    "tooltip-class": $props.tooltipClass,
    ref: "button1"
  }, null, 8, ["modelValue", "vertical", "tooltip-class"]), $props.range ? (openBlock(), createBlock(_component_slider_button, {
    key: 0,
    vertical: $props.vertical,
    modelValue: _ctx.secondValue,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.secondValue = $event),
    "tooltip-class": $props.tooltipClass,
    ref: "button2"
  }, null, 8, ["vertical", "modelValue", "tooltip-class"])) : createCommentVNode("v-if", true), $props.showStops ? (openBlock(true), createBlock(Fragment, {
    key: 1
  }, renderList($setup.stops, (item, key) => {
    return openBlock(), createBlock("div", {
      class: "el-slider__stop",
      key,
      style: $setup.getStopStyle(item)
    }, null, 4);
  }), 128)) : createCommentVNode("v-if", true), $setup.markList.length > 0 ? (openBlock(), createBlock(Fragment, {
    key: 2
  }, [createVNode("div", null, [(openBlock(true), createBlock(Fragment, null, renderList($setup.markList, (item, key) => {
    return openBlock(), createBlock("div", {
      style: $setup.getStopStyle(item.position),
      class: "el-slider__stop el-slider__marks-stop",
      key
    }, null, 4);
  }), 128))]), createVNode("div", _hoisted_1$J, [(openBlock(true), createBlock(Fragment, null, renderList($setup.markList, (item, key) => {
    return openBlock(), createBlock(_component_slider_marker, {
      mark: item.mark,
      key,
      style: $setup.getStopStyle(item.position)
    }, null, 8, ["mark", "style"]);
  }), 128))])], 64)) : createCommentVNode("v-if", true)], 6)], 10, ["aria-valuemin", "aria-valuemax", "aria-orientation", "aria-disabled"]);
}
script$17.render = render$_;
script$17.__file = "packages/slider/Slider.vue";
script$17.install = function(app) {
  app.component(script$17.name, script$17);
};
var DEFAULT_COLOR = "#409EFF";
var STATUS_SETTING = {
  success: {
    color: "#67c23a",
    lineIconClass: "el-icon-circle-check",
    arcIconClass: "el-icon-check"
  },
  warning: {
    color: "#e6a23c",
    lineIconClass: "el-icon-warning",
    arcIconClass: "el-icon-warning"
  },
  exception: {
    color: "#f56c6c",
    lineIconClass: "el-icon-circle-close",
    arcIconClass: "el-icon-close"
  }
};
var STATUSES = Object.keys(STATUS_SETTING);
var TYPES = ["line", "circle", "dashboard"];
var LINECAPS = ["butt", "round", "square"];
var statusValid = (val) => isEmpty(val) || !isEmpty(val) && STATUSES.includes(val);
var percentageValid = (val) => isNumber(val) && val >= 0 && val <= 100;
var typeValid = (val) => TYPES.includes(val);
var linecapValid = (val) => LINECAPS.includes(val);
var FULL_PERCENT = 100;
var DEFAULT_SVG_PX = 126;
var DEFAULT_STROKE_PX = 6;
var SVG_MAX_SIZE = 100;
var SVG_VIEW_BOX = generateViewBox(SVG_MAX_SIZE);
var DEFAULT_FIXED = 1;
var DASHBOARD_RATE = 0.75;
var TRANSITION = "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s";
var props$2 = {
  type: {
    type: String,
    default: "line",
    validator: typeValid
  },
  percentage: {
    type: Number,
    default: 0,
    required: true,
    validator: percentageValid
  },
  format: {
    type: Function
  },
  status: {
    type: String,
    default: "",
    required: false,
    validator: statusValid
  },
  color: {
    type: [String, Function, Array],
    default: ""
  },
  showText: {
    type: Boolean,
    default: true
  },
  strokeWidth: {
    type: Number,
    default: DEFAULT_STROKE_PX
  },
  textInside: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: DEFAULT_SVG_PX
  },
  strokeLinecap: {
    type: String,
    default: "round",
    validator: linecapValid
  }
};
function getColorsIndex(colors, percent) {
  const i = colors.findIndex((c) => percent < c.percentage);
  return i < 0 ? colors.length - 1 : i;
}
function sortByPercentage(pre, next) {
  return pre.percentage - next.percentage;
}
function toPercentageColors(colors) {
  const span = FULL_PERCENT / colors.length;
  return colors.map((color, i) => {
    if (isString(color)) {
      return { color, percentage: span * (i + 1) };
    }
    return color;
  });
}
function autoFixPercentage(percentage) {
  if (percentage < 0) {
    return 0;
  }
  if (percentage > FULL_PERCENT) {
    return FULL_PERCENT;
  }
  return percentage;
}
function generateViewBox(size) {
  return `0 0 ${size} ${size}`;
}
function generateSvgPathD(strokeWidth, type2) {
  const half = SVG_MAX_SIZE / 2;
  const radius = calcSvgRadius(strokeWidth);
  const diameter = radius * 2;
  const isDashboard = type2 === "dashboard";
  const fromTo = isDashboard ? "" : "-";
  const toFrom = isDashboard ? "-" : "";
  const d = `M ${half} ${half} m 0 ${fromTo}${radius} a ${radius} ${radius} 0 1 1 0 ${toFrom}${diameter} a ${radius} ${radius} 0 1 1 0 ${fromTo}${diameter}`;
  return d;
}
function genFnToRelativeSvgSize(width) {
  return (size) => {
    return size / width * SVG_MAX_SIZE;
  };
}
function toFixedStr(f) {
  return f.toFixed(DEFAULT_FIXED);
}
function calcRelativeSvgSize(size, width) {
  return Number.parseFloat(toFixedStr(genFnToRelativeSvgSize(width)(size)));
}
function calcSvgRadius(strokeWidth) {
  return SVG_MAX_SIZE / 2 - strokeWidth / 2;
}
function calcPerimeter(radius) {
  return 2 * Math.PI * radius;
}
function genTrailPathStyle(perimeter, type2 = "circle") {
  const rate = getRate(type2);
  const offset = toFixedStr(getOffset(perimeter, rate));
  const range2 = toFixedStr(perimeter * rate);
  const all = toFixedStr(perimeter);
  const strokeDasharray = `${range2}px, ${all}px`;
  const strokeDashoffset = `${offset}px`;
  return { strokeDasharray, strokeDashoffset };
}
function getRate(type2) {
  return type2 === "dashboard" ? DASHBOARD_RATE : 1;
}
function genArcPathStyle(perimeter, percentage = 0, type2 = "circle") {
  const rate = getRate(type2);
  const offset = toFixedStr(getOffset(perimeter, rate));
  const p = toFixedStr(perimeter * (percentage / FULL_PERCENT) * rate);
  const s = toFixedStr(perimeter);
  const strokeDasharray = `${p}px, ${s}px`;
  const strokeDashoffset = `${offset}px`;
  const transition = TRANSITION;
  return { strokeDasharray, strokeDashoffset, transition };
}
function getSvgStrokeColor(status, color, percentage) {
  if (!isEmpty(color)) {
    return getColorBy(color, percentage);
  }
  if (!isEmpty(status)) {
    return STATUS_SETTING[status].color;
  }
  return DEFAULT_COLOR;
}
function getOffset(perimeter, rate) {
  return -1 * perimeter * (1 - rate) / 2;
}
function getColorBy(color, percentage) {
  if (isArray(color)) {
    const colors = color;
    const cs = toPercentageColors(colors).sort(sortByPercentage);
    const i = getColorsIndex(cs, percentage);
    return cs[i].color;
  }
  if (isFunction$1(color)) {
    const fnColor = color;
    return fnColor(percentage);
  }
  if (isString(color)) {
    return color;
  }
}
var script$16 = defineComponent({
  name: "ElProgress",
  props: props$2,
  setup(props2) {
    const {
      percentage,
      format: format2,
      color,
      strokeWidth,
      type: type2,
      status,
      showText,
      textInside,
      width
    } = toRefs(props2);
    const barStyle = useBarStyle(percentage, color);
    const barOuterStyle = useBarOuterStyle(strokeWidth);
    const content = useContent(format2, percentage);
    const iconClass = useIconClass(status, type2);
    const rootClass = useRootClass(type2, status, showText, textInside);
    const circleStyle = useCircleStyle(width);
    const viewBox = SVG_VIEW_BOX;
    const svgStrokeWidth = useSvgStrokeWidth(strokeWidth, width);
    const svgPathD = useSvgPathD(svgStrokeWidth, type2);
    const trailPathStyle = useTrailPathStyle(svgStrokeWidth, type2);
    const arcPathStyle = useArcPathStyle(svgStrokeWidth, percentage, type2);
    const svgStrokeColor = useSvgStrokeColor(status, color, percentage);
    const textStyle = useTextStyle(type2, width);
    return {
      barStyle,
      barOuterStyle,
      content,
      iconClass,
      rootClass,
      circleStyle,
      viewBox,
      svgPathD,
      svgStrokeWidth,
      trailPathStyle,
      arcPathStyle,
      svgStrokeColor,
      textStyle
    };
  }
});
var useRootClass = (type2, status, showText, textInside) => {
  return computed(() => {
    const valType = unref(type2);
    const valStatus = unref(status);
    const valShowText = unref(showText);
    const valTextInside = unref(textInside);
    const statusClass = valStatus && statusValid(valStatus) ? `is-${valStatus}` : "";
    return ["el-progress", `el-progress--${valType}`, statusClass, {
      "el-progress--without-text": !valShowText,
      "el-progress--text-inside": valTextInside
    }];
  });
};
var useBarStyle = (percentage, color) => {
  return computed(() => {
    const pv = autoFixPercentage(unref(percentage));
    const cv = unref(color);
    const backgroundColor = getColorBy(cv, pv);
    return {
      width: `${pv}%`,
      backgroundColor
    };
  });
};
var useBarOuterStyle = (strokeWidth) => {
  return computed(() => {
    const sw = unref(strokeWidth);
    return {
      height: sw + "px"
    };
  });
};
var useContent = (format2, percentage) => {
  return computed(() => {
    const fv = unref(format2);
    const pv = autoFixPercentage(unref(percentage));
    if (format2) {
      return fv(pv) || "";
    }
    return `${pv}%`;
  });
};
var useIconClass = (status, type2) => {
  return computed(() => {
    const st = unref(status);
    const t2 = unref(type2) === "line" ? "lineIconClass" : "arcIconClass";
    const stat = STATUS_SETTING[st];
    return stat && stat[t2] || "";
  });
};
var useCircleStyle = (width) => {
  return computed(() => {
    const val = unref(width) + "px";
    return {
      width: val,
      height: val
    };
  });
};
var useSvgStrokeWidth = (strokeWidth, width) => {
  return computed(() => {
    const sw = unref(strokeWidth);
    const w = unref(width);
    return calcRelativeSvgSize(sw, w);
  });
};
var useSvgPathD = (svgStrokeWidth, type2) => {
  return computed(() => {
    const ssw = unref(svgStrokeWidth);
    const tv = unref(type2);
    return generateSvgPathD(ssw, tv);
  });
};
var useTrailPathStyle = (svgStrokeWidth, type2) => {
  return computed(() => {
    const ssw = unref(svgStrokeWidth);
    const radius = calcSvgRadius(ssw);
    const perimeter = calcPerimeter(radius);
    const tv = unref(type2);
    return genTrailPathStyle(perimeter, tv);
  });
};
var useArcPathStyle = (svgStrokeWidth, percentage, type2) => {
  return computed(() => {
    const ssw = unref(svgStrokeWidth);
    const radius = calcSvgRadius(ssw);
    const perimeter = calcPerimeter(radius);
    const percent = autoFixPercentage(unref(percentage));
    const tv = unref(type2);
    return genArcPathStyle(perimeter, percent, tv);
  });
};
var useSvgStrokeColor = (status, color, percentage) => {
  return computed(() => {
    const s = unref(status);
    const c = unref(color);
    const p = autoFixPercentage(unref(percentage));
    return getSvgStrokeColor(s, c, p);
  });
};
var useTextStyle = (type2, width) => {
  return computed(() => {
    const t2 = unref(type2);
    const w = unref(width);
    const fontSize = (w * 0.11 + 2).toFixed() + "px";
    return t2 === "line" ? "" : {
      fontSize
    };
  });
};
var _hoisted_1$I = {
  key: 0,
  class: "el-progress-bar"
};
var _hoisted_2$t = {
  key: 0,
  class: "el-progress-bar__innerText"
};
function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: _ctx.rootClass
  }, [_ctx.type === "line" ? (openBlock(), createBlock("div", _hoisted_1$I, [createVNode("div", {
    class: "el-progress-bar__outer",
    style: _ctx.barOuterStyle
  }, [createVNode("div", {
    class: "el-progress-bar__inner",
    style: _ctx.barStyle
  }, [_ctx.showText && _ctx.textInside ? (openBlock(), createBlock("div", _hoisted_2$t, toDisplayString(_ctx.content), 1)) : createCommentVNode("v-if", true)], 4)], 4)])) : (openBlock(), createBlock("div", {
    key: 1,
    class: "el-progress-circle",
    style: _ctx.circleStyle
  }, [(openBlock(), createBlock("svg", {
    viewBox: _ctx.viewBox
  }, [createVNode("path", {
    class: "el-progress-circle__track",
    stroke: "#e5e9f2",
    "stroke-width": _ctx.svgStrokeWidth,
    fill: "none",
    d: _ctx.svgPathD,
    style: _ctx.trailPathStyle
  }, null, 12, ["stroke-width", "d"]), createVNode("path", {
    class: "el-progress-circle__path",
    stroke: _ctx.svgStrokeColor,
    "stroke-width": _ctx.svgStrokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    fill: "none",
    d: _ctx.svgPathD,
    style: _ctx.arcPathStyle
  }, null, 12, ["stroke", "stroke-width", "stroke-linecap", "d"])], 8, ["viewBox"]))], 4)), _ctx.showText && !_ctx.textInside ? (openBlock(), createBlock("div", {
    key: 2,
    class: "el-progress__text",
    style: _ctx.textStyle
  }, [!_ctx.status ? (openBlock(), createBlock(Fragment, {
    key: 0
  }, [createTextVNode(toDisplayString(_ctx.content), 1)], 64)) : (openBlock(), createBlock("i", {
    key: 1,
    class: _ctx.iconClass
  }, null, 2))], 4)) : createCommentVNode("v-if", true)], 2);
}
script$16.render = render$Z;
script$16.__file = "src/components/Progress/src/Progress.vue";
script$16.install = function(app) {
  app.component(script$16.name, script$16);
};
var script$15 = {
  name: "ElUploadList",
  mixins: [Locale],
  components: {
    ElProgress: script$16
  },
  emits: ["remove"],
  props: {
    files: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    handlePreview: Function,
    listType: String
  },
  setup(props2, {
    emit
  }) {
    const focusing = ref(false);
    const parsePercentage = (val) => {
      return parseInt(val, 10);
    };
    const handleClick = (file) => {
      props2.handlePreview && props2.handlePreview(file);
    };
    return {
      focusing,
      parsePercentage,
      handleClick,
      emit
    };
  }
};
var _hoisted_1$H = createVNode("i", {
  class: "el-icon-document"
}, null, -1);
var _hoisted_2$s = {
  class: "el-upload-list__item-status-label"
};
var _hoisted_3$n = {
  key: 2,
  class: "el-icon-close-tip"
};
var _hoisted_4$e = {
  key: 4,
  class: "el-upload-list__item-actions"
};
var _hoisted_5$a = createVNode("i", {
  class: "el-icon-zoom-in"
}, null, -1);
var _hoisted_6$6 = createVNode("i", {
  class: "el-icon-delete"
}, null, -1);
function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_progress = resolveComponent("el-progress");
  return openBlock(), createBlock(TransitionGroup, {
    tag: "ul",
    class: ["el-upload-list", "el-upload-list--" + $props.listType, {
      "is-disabled": $props.disabled
    }],
    name: "el-list"
  }, {
    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($props.files, (file) => {
      return openBlock(), createBlock("li", {
        class: ["el-upload-list__item", "is-" + file.status, $setup.focusing ? "focusing" : ""],
        key: file.uid,
        tabindex: "0",
        onKeydown: withKeys(($event) => !$props.disabled && _ctx.$emit("remove", file), ["delete"]),
        onFocus: _cache[1] || (_cache[1] = ($event) => $setup.focusing = true),
        onBlur: _cache[2] || (_cache[2] = ($event) => $setup.focusing = false),
        onClick: _cache[3] || (_cache[3] = ($event) => $setup.focusing = false)
      }, [renderSlot(_ctx.$slots, "default", {
        file
      }, () => [file.status !== "uploading" && ["picture-card", "picture"].indexOf($props.listType) > -1 ? (openBlock(), createBlock("img", {
        key: 0,
        class: "el-upload-list__item-thumbnail",
        src: file.url,
        alt: ""
      }, null, 8, ["src"])) : createCommentVNode("v-if", true), createVNode("a", {
        class: "el-upload-list__item-name",
        onClick: ($event) => $setup.handleClick(file)
      }, [_hoisted_1$H, createTextVNode(toDisplayString(file.name), 1)], 8, ["onClick"]), createVNode("label", _hoisted_2$s, [createVNode("i", {
        class: {
          "el-icon-upload-success": true,
          "el-icon-circle-check": $props.listType === "text",
          "el-icon-check": ["picture-card", "picture"].indexOf($props.listType) > -1
        }
      }, null, 2)]), !$props.disabled ? (openBlock(), createBlock("i", {
        key: 1,
        class: "el-icon-close",
        onClick: ($event) => _ctx.$emit("remove", file)
      }, null, 8, ["onClick"])) : createCommentVNode("v-if", true), !$props.disabled ? (openBlock(), createBlock("i", _hoisted_3$n, toDisplayString(_ctx.t("el.upload.deleteTip")), 1)) : createCommentVNode("v-if", true), createCommentVNode("\u56E0\u4E3Aclose\u6309\u94AE\u53EA\u5728li:focus\u7684\u65F6\u5019 display, li blur\u540E\u5C31\u4E0D\u5B58\u5728\u4E86\uFF0C\u6240\u4EE5\u952E\u76D8\u5BFC\u822A\u65F6\u6C38\u8FDC\u65E0\u6CD5 focus\u5230 close\u6309\u94AE\u4E0A"), file.status === "uploading" ? (openBlock(), createBlock(_component_el_progress, {
        key: 3,
        type: $props.listType === "picture-card" ? "circle" : "line",
        "stroke-width": $props.listType === "picture-card" ? 6 : 2,
        percentage: $setup.parsePercentage(file.percentage)
      }, null, 8, ["type", "stroke-width", "percentage"])) : createCommentVNode("v-if", true), $props.listType === "picture-card" ? (openBlock(), createBlock("span", _hoisted_4$e, [$props.handlePreview && $props.listType === "picture-card" ? (openBlock(), createBlock("span", {
        key: 0,
        class: "el-upload-list__item-preview",
        onClick: ($event) => $props.handlePreview(file)
      }, [_hoisted_5$a], 8, ["onClick"])) : createCommentVNode("v-if", true), !$props.disabled ? (openBlock(), createBlock("span", {
        key: 1,
        class: "el-upload-list__item-delete",
        onClick: ($event) => _ctx.$emit("remove", file)
      }, [_hoisted_6$6], 8, ["onClick"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)])], 42, ["onKeydown"]);
    }), 128))]),
    _: 1
  }, 8, ["class"]);
}
script$15.render = render$Y;
script$15.__file = "packages/upload/src/upload-list.vue";
function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`;
  } else {
    msg = `fail to post ${action} ${xhr.status}`;
  }
  const err = new Error(msg);
  err.status = xhr.status;
  err.method = "post";
  err.url = action;
  return err;
}
function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
function upload(option) {
  if (typeof XMLHttpRequest === "undefined") {
    return;
  }
  const xhr = new XMLHttpRequest();
  const action = option.action;
  if (xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }
  const formData = new FormData();
  if (option.data) {
    Object.keys(option.data).forEach((key) => {
      formData.append(key, option.data[key]);
    });
  }
  formData.append(option.filename, option.file, option.file.name);
  xhr.onerror = function error(e) {
    option.onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr));
    }
    option.onSuccess(getBody(xhr));
  };
  xhr.open("post", action, true);
  if (option.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }
  const headers = option.headers || {};
  for (const item in headers) {
    if (Object.hasOwnProperty.call(headers, item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  }
  xhr.send(formData);
  return xhr;
}
var script$14 = {
  name: "ElUploadDrag",
  props: {
    disabled: Boolean
  },
  emits: ["file"],
  inject: ["uploader"],
  setup(props2, {
    emit
  }) {
    const uploader = inject("uploader", {});
    const {
      disabled
    } = toRefs(props2);
    const dragover = ref(false);
    const onDragover = () => {
      if (!disabled.value) {
        dragover.value = true;
      }
    };
    const onDrop = (e) => {
      if (disabled.value || !uploader)
        return;
      const accept = uploader.accept;
      dragover.value = false;
      if (!accept) {
        emit("file", e.dataTransfer.files);
        return;
      }
      emit("file", [].slice.call(e.dataTransfer.files).filter((file) => {
        const {
          type: type2,
          name
        } = file;
        const extension = name.indexOf(".") > -1 ? `.${name.split(".").pop()}` : "";
        const baseType = type2.replace(/\/.*$/, "");
        return accept.split(",").map((type3) => type3.trim()).filter((type3) => type3).some((acceptedType) => {
          if (/\..+$/.test(acceptedType)) {
            return extension === acceptedType;
          }
          if (/\/\*$/.test(acceptedType)) {
            return baseType === acceptedType.replace(/\/\*$/, "");
          }
          if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
            return type2 === acceptedType;
          }
          return false;
        });
      }));
    };
    return {
      onDragover,
      onDrop,
      dragover
    };
  }
};
function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["el-upload-dragger", {
      "is-dragover": $setup.dragover
    }],
    onDrop: _cache[1] || (_cache[1] = withModifiers((...args) => $setup.onDrop && $setup.onDrop(...args), ["prevent"])),
    onDragover: _cache[2] || (_cache[2] = withModifiers((...args) => $setup.onDragover && $setup.onDragover(...args), ["prevent"])),
    onDragleave: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.dragover = false, ["prevent"]))
  }, [renderSlot(_ctx.$slots, "default")], 34);
}
script$14.render = render$X;
script$14.__file = "packages/upload/src/upload-dragger.vue";
var script$13 = {
  inject: ["uploader"],
  components: {
    UploadDragger: script$14
  },
  props: {
    type: String,
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: "file"
    },
    data: Object,
    headers: Object,
    withCredentials: Boolean,
    multiple: Boolean,
    accept: String,
    onStart: Function,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeUpload: Function,
    drag: Boolean,
    onPreview: {
      type: Function,
      default: function() {
      }
    },
    onRemove: {
      type: Function,
      default: function() {
      }
    },
    fileList: Array,
    autoUpload: Boolean,
    listType: String,
    httpRequest: {
      type: Function,
      default: upload
    },
    disabled: Boolean,
    limit: Number,
    onExceed: Function
  },
  setup(props2) {
    const {
      limit,
      fileList,
      onExceed,
      multiple,
      autoUpload
    } = toRefs(props2);
    const {
      onStart,
      beforeUpload,
      httpRequest,
      onProgress,
      onSuccess,
      onError,
      disabled,
      onRemove
    } = props2;
    const mouseover = ref(false);
    const reqs = reactive({});
    const input = ref(null);
    const isImage = (str) => {
      return str.indexOf("image") !== -1;
    };
    const handleChange = (ev) => {
      const files = ev.target.files;
      if (!files)
        return;
      uploadFiles(files);
    };
    const uploadFiles = (files) => {
      if (limit.value && fileList.length + files.length > limit.value) {
        onExceed && onExceed(files, fileList);
        return;
      }
      let postFiles = Array.prototype.slice.call(files);
      if (!multiple.value) {
        postFiles = postFiles.slice(0, 1);
      }
      if (postFiles.length === 0) {
        return;
      }
      postFiles.forEach((rawFile) => {
        onStart(rawFile);
        if (autoUpload.value)
          upload2(rawFile);
      });
    };
    const upload2 = (rawFile) => {
      input.value.value = null;
      if (!beforeUpload) {
        return post(rawFile);
      }
      const before = beforeUpload(rawFile);
      if (before && before.then) {
        before.then((processedFile) => {
          const fileType = Object.prototype.toString.call(processedFile);
          if (fileType === "[object File]" || fileType === "[object Blob]") {
            if (fileType === "[object Blob]") {
              processedFile = new File([processedFile], rawFile.name, {
                type: rawFile.type
              });
            }
            for (const p in rawFile) {
              if (Object.hasOwnProperty.call(rawFile, p)) {
                processedFile[p] = rawFile[p];
              }
            }
            post(processedFile);
          } else {
            post(rawFile);
          }
        }, () => {
          onRemove(null, rawFile);
        });
      } else if (before !== false) {
        post(rawFile);
      } else {
        onRemove(null, rawFile);
      }
    };
    const abort = (file) => {
      if (file) {
        let uid2 = file;
        if (file.uid)
          uid2 = file.uid;
        if (reqs[uid2]) {
          reqs[uid2].abort();
        }
      } else {
        Object.keys(reqs).forEach((uid2) => {
          if (reqs[uid2])
            reqs[uid2].abort();
          delete reqs[uid2];
        });
      }
    };
    const post = (rawFile) => {
      const {
        uid: uid2
      } = rawFile;
      const options = {
        headers: props2.headers,
        withCredentials: props2.withCredentials,
        file: rawFile,
        data: props2.data,
        filename: props2.name,
        action: props2.action,
        onProgress: (e) => {
          onProgress(e, rawFile);
        },
        onSuccess: (res) => {
          onSuccess(res, rawFile);
          delete reqs[uid2];
        },
        onError: (err) => {
          onError(err, rawFile);
          delete reqs[uid2];
        }
      };
      const req = httpRequest(options);
      reqs[uid2] = req;
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    };
    const handleClick = () => {
      if (!unref(disabled)) {
        input.value.value = null;
        input.value.click();
      }
    };
    const handleKeydown = (e) => {
      if (e.target !== e.currentTarget)
        return;
      if (e.keyCode === 13 || e.keyCode === 32) {
        handleClick();
      }
    };
    return {
      mouseover,
      isImage,
      handleChange,
      uploadFiles,
      handleClick,
      handleKeydown,
      post,
      upload: upload2,
      input,
      reqs,
      abort
    };
  }
};
function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_upload_dragger = resolveComponent("upload-dragger");
  return openBlock(), createBlock("div", {
    class: ["el-upload", {
      [`el-upload--${$props.listType}`]: true
    }],
    onClick: _cache[2] || (_cache[2] = (...args) => $setup.handleClick && $setup.handleClick(...args)),
    onKeydown: _cache[3] || (_cache[3] = (...args) => $setup.handleKeydown && $setup.handleKeydown(...args)),
    tabindex: "0"
  }, [$props.drag ? (openBlock(), createBlock(_component_upload_dragger, {
    key: 0,
    disabled: $props.disabled,
    onFile: $setup.uploadFiles
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["disabled", "onFile"])) : renderSlot(_ctx.$slots, "default", {
    key: 1
  }), createVNode("input", {
    class: "el-upload__input",
    type: "file",
    ref: "input",
    name: $props.name,
    onChange: _cache[1] || (_cache[1] = (...args) => $setup.handleChange && $setup.handleChange(...args)),
    multiple: $props.multiple,
    accept: $props.accept
  }, null, 40, ["name", "multiple", "accept"])], 34);
}
script$13.render = render$W;
script$13.__file = "packages/upload/src/upload.vue";
var Migrating = {
  mounted() {
    if (false)
      return;
    if (!this.$vnode)
      return;
    const {
      props: props2 = {},
      events = {}
    } = this.getMigratingConfig();
    const {
      data,
      componentOptions
    } = this.$vnode;
    const definedProps = data.attrs || {};
    const definedEvents = componentOptions.listeners || {};
    for (let propName in definedProps) {
      propName = kebabCase(propName);
      if (props2[propName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Attribute]: ${props2[propName]}`);
      }
    }
    for (let eventName in definedEvents) {
      eventName = kebabCase(eventName);
      if (events[eventName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Event]: ${events[eventName]}`);
      }
    }
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {},
        events: {}
      };
    }
  }
};
function noop() {
}
var script$12 = {
  name: "ElUpload",
  mixins: [Migrating],
  components: {
    UploadList: script$15,
    Upload: script$13
  },
  provide() {
    return {
      uploader: this
    };
  },
  inject: {
    elForm: {
      default: ""
    }
  },
  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    data: Object,
    multiple: Boolean,
    name: {
      type: String,
      default: "file"
    },
    drag: Boolean,
    dragger: Boolean,
    withCredentials: Boolean,
    showFileList: {
      type: Boolean,
      default: true
    },
    accept: String,
    type: {
      type: String,
      default: "select"
    },
    beforeUpload: Function,
    beforeRemove: Function,
    onRemove: {
      type: Function,
      default: noop
    },
    onChange: {
      type: Function,
      default: noop
    },
    onPreview: {
      type: Function
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onProgress: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    },
    fileList: {
      type: Array,
      default() {
        return [];
      }
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    listType: {
      type: String,
      default: "text"
    },
    httpRequest: Function,
    disabled: Boolean,
    limit: Number,
    onExceed: {
      type: Function,
      default: noop
    }
  },
  setup(props2) {
    const {
      disabled,
      listType,
      fileList
    } = toRefs(props2);
    const {
      onRemove,
      beforeRemove,
      onProgress,
      onSuccess,
      onError,
      onChange
    } = props2;
    let tempIndex = 1;
    let uploadFiles = reactive(fileList.value.map((item) => {
      item.uid = item.uid || Date.now() + tempIndex++;
      item.status = item.status || "success";
      return item;
    }));
    const dragOver = ref(false);
    const draging = ref(false);
    const uploadInner = ref(null);
    const uploadDisabled = computed(() => {
      const elForm = inject("elForm", {});
      return disabled.value || unref((elForm || {}).disabled);
    });
    watch(listType, (type2) => {
      if (type2 === "picture-card" || type2 === "picture") {
        uploadFiles.forEach((file) => {
          if (!file.url && file.raw) {
            try {
              file.url = URL.createObjectURL(file.raw);
            } catch (err) {
              console.error("[Element Error][Upload]", err);
            }
          }
        });
      }
    });
    onUnmounted(() => {
      uploadFiles.forEach((file) => {
        if (file.url && file.url.indexOf("blob:") === 0) {
          URL.revokeObjectURL(file.url);
        }
      });
    });
    const abort = (file) => {
      uploadInner.value.abort(file);
    };
    const getFile = (rawFile) => {
      const fileList2 = uploadFiles;
      let target;
      fileList2.every((item) => {
        target = rawFile.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    };
    const handleRemove = (file, raw) => {
      if (raw) {
        file = getFile(raw);
      }
      const doRemove = () => {
        abort(file);
        const fileList2 = uploadFiles;
        fileList2.splice(fileList2.indexOf(file), 1);
        onRemove(file, fileList2);
      };
      if (!beforeRemove) {
        doRemove();
      } else if (typeof beforeRemove === "function") {
        const before = beforeRemove(file, uploadFiles);
        if (before && before.then) {
          before.then(() => {
            doRemove();
          }, noop);
        } else if (before !== false) {
          doRemove();
        }
      }
    };
    const handleProgress = (ev, rawFile) => {
      const file = getFile(rawFile);
      onProgress(ev, file, uploadFiles);
      file.status = "uploading";
      file.percentage = ev.percent || 0;
    };
    const handleSuccess = (res, rawFile) => {
      const file = getFile(rawFile);
      if (file) {
        file.status = "success";
        file.response = res;
        onSuccess(res, file, uploadFiles);
        onChange(file, uploadFiles);
      }
    };
    const handleError = (err, rawFile) => {
      const file = getFile(rawFile);
      const fileList2 = uploadFiles;
      file.status = "fail";
      fileList2.splice(fileList2.indexOf(file), 1);
      onError(err, file, uploadFiles);
      onChange(file, uploadFiles);
    };
    const handleStart = (rawFile) => {
      rawFile.uid = Date.now() + tempIndex++;
      const file = {
        status: "ready",
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile
      };
      if (unref(listType) === "picture-card" || unref(listType) === "picture") {
        try {
          file.url = URL.createObjectURL(rawFile);
        } catch (err) {
          console.error("[Element Error][Upload]", err);
          return;
        }
      }
      uploadFiles.push(file);
      onChange(file, uploadFiles);
    };
    const clearFiles = () => {
      uploadFiles = [];
    };
    const submit = () => {
      uploadFiles.filter((file) => file.status === "ready").forEach((file) => {
        uploadInner.value.upload(file.raw);
      });
    };
    const getMigratingConfig = () => {
      return {
        props: {
          "default-file-list": "default-file-list is renamed to file-list.",
          "show-upload-list": "show-upload-list is renamed to show-file-list.",
          "thumbnail-mode": "thumbnail-mode has been deprecated, you can implement the same effect according to this case: http://element.eleme.io/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan"
        }
      };
    };
    return {
      uploadFiles,
      uploadInner,
      dragOver,
      draging,
      uploadDisabled,
      handleRemove,
      abort,
      handleStart,
      handleProgress,
      handleSuccess,
      handleError,
      clearFiles,
      submit,
      getMigratingConfig
    };
  }
};
var _hoisted_1$G = {
  key: 1
};
function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_UploadList = resolveComponent("UploadList");
  const _component_upload = resolveComponent("upload");
  return openBlock(), createBlock("div", null, [$props.listType === "picture-card" && $props.showFileList ? (openBlock(), createBlock(_component_UploadList, {
    key: 0,
    disabled: $setup.uploadDisabled,
    listType: $props.listType,
    files: $setup.uploadFiles,
    onRemove: $setup.handleRemove,
    handlePreview: $props.onPreview
  }, createSlots({
    _: 2
  }, [_ctx.$slots.file ? {
    name: "default",
    fn: withCtx((props2) => [renderSlot(_ctx.$slots, "file", {
      file: props2.file
    })])
  } : void 0]), 1032, ["disabled", "listType", "files", "onRemove", "handlePreview"])) : createCommentVNode("v-if", true), _ctx.$slots.trigger ? (openBlock(), createBlock("div", _hoisted_1$G, [createVNode(_component_upload, {
    type: $props.type,
    drag: $props.drag,
    action: $props.action,
    multiple: $props.multiple,
    "before-upload": $props.beforeUpload,
    "with-credentials": $props.withCredentials,
    headers: $props.headers,
    name: $props.name,
    data: $props.data,
    accept: $props.accept,
    fileList: $setup.uploadFiles,
    autoUpload: $props.autoUpload,
    listType: $props.listType,
    disabled: $setup.uploadDisabled,
    limit: $props.limit,
    onExceed: $props.onExceed,
    onStart: $setup.handleStart,
    onProgress: $setup.handleProgress,
    onSuccess: $setup.handleSuccess,
    onError: $setup.handleError,
    onPreview: $props.onPreview,
    onRemove: $setup.handleRemove,
    "http-request": $props.httpRequest,
    ref: "uploadInner"
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "trigger")]),
    _: 3
  }, 8, ["type", "drag", "action", "multiple", "before-upload", "with-credentials", "headers", "name", "data", "accept", "fileList", "autoUpload", "listType", "disabled", "limit", "onExceed", "onStart", "onProgress", "onSuccess", "onError", "onPreview", "onRemove", "http-request"]), renderSlot(_ctx.$slots, "default")])) : (openBlock(), createBlock(_component_upload, {
    key: 2,
    type: $props.type,
    drag: $props.drag,
    action: $props.action,
    multiple: $props.multiple,
    "before-upload": $props.beforeUpload,
    "with-credentials": $props.withCredentials,
    headers: $props.headers,
    name: $props.name,
    data: $props.data,
    accept: $props.accept,
    fileList: $setup.uploadFiles,
    autoUpload: $props.autoUpload,
    listType: $props.listType,
    disabled: $setup.uploadDisabled,
    limit: $props.limit,
    onExceed: $props.onExceed,
    onStart: $setup.handleStart,
    onProgress: $setup.handleProgress,
    onSuccess: $setup.handleSuccess,
    onError: $setup.handleError,
    onPreview: $props.onPreview,
    onRemove: $setup.handleRemove,
    "http-request": $props.httpRequest,
    ref: "uploadInner"
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "trigger"), renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["type", "drag", "action", "multiple", "before-upload", "with-credentials", "headers", "name", "data", "accept", "fileList", "autoUpload", "listType", "disabled", "limit", "onExceed", "onStart", "onProgress", "onSuccess", "onError", "onPreview", "onRemove", "http-request"])), renderSlot(_ctx.$slots, "tip"), $props.listType !== "picture-card" && $props.showFileList ? (openBlock(), createBlock(_component_UploadList, {
    key: 3,
    disabled: $setup.uploadDisabled,
    listType: $props.listType,
    files: $setup.uploadFiles,
    onRemove: $setup.handleRemove,
    handlePreview: $props.onPreview
  }, createSlots({
    _: 2
  }, [_ctx.$slots.file ? {
    name: "default",
    fn: withCtx((props2) => [renderSlot(_ctx.$slots, "file", {
      file: props2.file
    })])
  } : void 0]), 1032, ["disabled", "listType", "files", "onRemove", "handlePreview"])) : createCommentVNode("v-if", true)]);
}
script$12.render = render$V;
script$12.__file = "packages/upload/src/index.vue";
script$12.install = function(app) {
  app.component(script$12.name, script$12);
};
var script$11 = {
  name: "ElRate",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    lowThreshold: {
      type: Number,
      default: 2
    },
    highThreshold: {
      type: Number,
      default: 4
    },
    max: {
      type: Number,
      default: 5
    },
    colors: {
      type: [Array, Object],
      default() {
        return ["#F7BA2A", "#F7BA2A", "#F7BA2A"];
      }
    },
    voidColor: {
      type: String,
      default: "#C6D1DE"
    },
    disabledVoidColor: {
      type: String,
      default: "#EFF2F7"
    },
    iconClasses: {
      type: [Array, Object],
      default() {
        return ["el-icon-star-on", "el-icon-star-on", "el-icon-star-on"];
      }
    },
    voidIconClass: {
      type: String,
      default: "el-icon-star-off"
    },
    disabledVoidIconClass: {
      type: String,
      default: "el-icon-star-on"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: "#1f2d3d"
    },
    texts: {
      type: Array,
      default() {
        return ["\u6781\u5DEE", "\u5931\u671B", "\u4E00\u822C", "\u6EE1\u610F", "\u60CA\u559C"];
      }
    },
    scoreTemplate: {
      type: String,
      default: "{value}"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props2, {
    emit
  }) {
    const {
      modelValue,
      disabled,
      allowHalf,
      disabledVoidIconClass,
      voidIconClass,
      iconClasses,
      max,
      lowThreshold,
      highThreshold,
      texts,
      colors,
      voidColor,
      disabledVoidColor,
      showScore,
      scoreTemplate,
      showText
    } = toRefs(props2);
    migrating({
      "text-template": "text-template is renamed to score-template."
    });
    modelValue || emit("update:modelValue", 0);
    const elForm = inject("elForm", {});
    const rateDisabled = useDisabled(disabled, elForm);
    const {
      currentValue,
      hoverIndex,
      pointerAtLeftHalf,
      setCurrentValue,
      resetCurrentValue,
      selectValue,
      handleKey
    } = useCurrentValue({
      modelValue,
      allowHalf,
      rateDisabled,
      max
    });
    const {
      classMap,
      colorMap
    } = useMaps({
      colors,
      iconClasses,
      lowThreshold,
      highThreshold,
      max
    });
    const {
      classes,
      decimalIconClass
    } = useClasses({
      currentValue,
      modelValue,
      classMap,
      allowHalf,
      max,
      rateDisabled,
      disabledVoidIconClass,
      voidIconClass
    });
    const {
      activeColor,
      getIconStyle
    } = useColor({
      currentValue,
      colorMap,
      rateDisabled,
      disabledVoidColor,
      voidColorProp: voidColor
    });
    const {
      decimalStyle,
      showDecimalIcon
    } = useDecimal({
      currentValue,
      modelValue,
      allowHalf,
      rateDisabled,
      pointerAtLeftHalf,
      activeColor
    });
    const text = computed(() => {
      let result = "";
      if (showScore.value) {
        result = scoreTemplate.value.replace(/\{\s*value\s*\}/, unref(rateDisabled) ? modelValue.value : currentValue.value);
      } else if (showText.value) {
        result = texts.value[Math.ceil(currentValue.value) - 1];
      }
      return result;
    });
    return {
      rateDisabled,
      classMap,
      classes,
      text,
      hoverIndex,
      decimalStyle,
      decimalIconClass,
      getIconStyle,
      setCurrentValue,
      resetCurrentValue,
      selectValue,
      handleKey,
      showDecimalIcon
    };
  }
};
var getValueFromMap = (value, map) => {
  map = unref(map);
  const matchedKeys = Object.keys(map).filter((key) => {
    const val = map[key];
    const excluded = val instanceof Object ? val.excluded : false;
    return excluded ? value < key : value <= key;
  }).sort((a, b) => a - b);
  const matchedValue = map[matchedKeys[0]];
  return matchedValue instanceof Object ? matchedValue.value : matchedValue || "";
};
var useDisabled = (disabled, elForm) => {
  return computed(() => disabled.value || elForm.disabled);
};
var useMaps = ({
  colors,
  iconClasses,
  lowThreshold,
  highThreshold,
  max
}) => {
  const useMap = (mapData, {
    lowThreshold: lowThreshold2,
    highThreshold: highThreshold2,
    max: max2
  }) => {
    return computed(() => Array.isArray(mapData) ? {
      [lowThreshold2.value]: mapData[0],
      [highThreshold2.value]: {
        value: mapData[1],
        excluded: true
      },
      [max2.value]: mapData[2]
    } : mapData);
  };
  return {
    classMap: useMap(unref(iconClasses), {
      lowThreshold,
      highThreshold,
      max
    }),
    colorMap: useMap(unref(colors), {
      lowThreshold,
      highThreshold,
      max
    })
  };
};
var useClasses = ({
  currentValue,
  modelValue,
  classMap,
  allowHalf,
  max,
  rateDisabled,
  disabledVoidIconClass,
  voidIconClass
}) => {
  const activeClass = computed(() => getValueFromMap(currentValue.value, unref(classMap)));
  const voidClass = computed(() => unref(rateDisabled) ? disabledVoidIconClass.value : voidIconClass.value);
  const decimalIconClass = computed(() => getValueFromMap(modelValue.value, unref(classMap)));
  const classes = computed(() => {
    const result = [];
    let i = 0;
    let threshold = currentValue.value;
    if (allowHalf.value && currentValue.value !== Math.floor(currentValue.value)) {
      threshold--;
    }
    for (; i < threshold; i++) {
      result.push(activeClass.value);
    }
    for (; i < max.value; i++) {
      result.push(voidClass.value);
    }
    return result;
  });
  return {
    classes,
    decimalIconClass
  };
};
var useColor = ({
  currentValue,
  colorMap,
  rateDisabled,
  disabledVoidColor,
  voidColorProp
}) => {
  const activeColor = computed(() => getValueFromMap(currentValue.value, colorMap));
  const getIconStyle = (item) => {
    const voidColor = rateDisabled.value ? disabledVoidColor.value : voidColorProp.value;
    return {
      color: unref(item <= currentValue.value ? activeColor.value : voidColor)
    };
  };
  return {
    activeColor,
    getIconStyle
  };
};
var useDecimal = ({
  currentValue,
  modelValue,
  allowHalf,
  rateDisabled,
  pointerAtLeftHalf,
  activeColor
}) => {
  const valueDecimal = computed(() => modelValue.value * 100 - Math.floor(modelValue.value) * 100);
  const decimalStyle = computed(() => {
    let width = "";
    if (unref(rateDisabled)) {
      width = `${valueDecimal.value}%`;
    } else if (allowHalf.value) {
      width = "50%";
    }
    return {
      color: activeColor.value,
      width
    };
  });
  const showDecimalIcon = (item) => {
    const showWhenDisabled = unref(rateDisabled) && valueDecimal.value > 0 && item - 1 < modelValue.value && item > modelValue.value;
    const showWhenAllowHalf = allowHalf.value && pointerAtLeftHalf && item - 0.5 <= currentValue.value && item > currentValue.value;
    return showWhenDisabled || showWhenAllowHalf;
  };
  return {
    decimalStyle,
    showDecimalIcon
  };
};
var useCurrentValue = ({
  modelValue,
  allowHalf,
  rateDisabled,
  max
}) => {
  const {
    emit
  } = getCurrentInstance();
  const currentValue = ref(modelValue.value);
  const pointerAtLeftHalf = ref(false);
  const hoverIndex = ref(-1);
  watch(modelValue, (v) => {
    currentValue.value = v;
  });
  const setCurrentValue = (value, event) => {
    if (rateDisabled.value) {
      return;
    }
    if (allowHalf.value) {
      let target = event.target;
      if (hasClass(target, "el-rate__item")) {
        target = target.querySelector(".el-rate__icon");
      }
      if (hasClass(target, "el-rate__decimal")) {
        target = target.parentNode;
      }
      pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth;
      currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value;
    } else {
      currentValue.value = value;
    }
    hoverIndex.value = value;
  };
  const resetCurrentValue = () => {
    if (rateDisabled.value) {
      return;
    }
    if (allowHalf.value) {
      pointerAtLeftHalf.value = modelValue.value !== Math.floor(modelValue.value);
    }
    currentValue.value = modelValue.value;
    hoverIndex.value = -1;
  };
  const selectValue = (value) => {
    if (rateDisabled.value) {
      return;
    }
    if (allowHalf.value && pointerAtLeftHalf.value) {
      emit("update:modelValue", currentValue.value);
      emit("change", currentValue.value);
    } else {
      emit("update:modelValue", value);
      emit("change", value);
    }
  };
  const handleKey = (e) => {
    if (rateDisabled.value) {
      return;
    }
    let value = currentValue.value;
    const keyCode = e.keyCode;
    if (keyCode === 38 || keyCode === 39) {
      if (allowHalf.value) {
        value += 0.5;
      } else {
        value += 1;
      }
      e.stopPropagation();
      e.preventDefault();
    } else if (keyCode === 37 || keyCode === 40) {
      if (allowHalf.value) {
        value -= 0.5;
      } else {
        value -= 1;
      }
      e.stopPropagation();
      e.preventDefault();
    }
    value = value < 0 ? 0 : value;
    value = value > max.value ? max.value : value;
    emit("update:modelValue", value);
    emit("change", value);
  };
  return {
    currentValue,
    hoverIndex,
    pointerAtLeftHalf,
    setCurrentValue,
    resetCurrentValue,
    selectValue,
    handleKey
  };
};
function render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: "el-rate",
    onKeydown: _cache[2] || (_cache[2] = (...args) => $setup.handleKey && $setup.handleKey(...args)),
    role: "slider",
    "aria-valuenow": $props.modelValue,
    "aria-valuetext": $setup.text,
    "aria-valuemin": "0",
    "aria-valuemax": $props.max,
    tabindex: "0"
  }, [(openBlock(true), createBlock(Fragment, null, renderList($props.max, (item, key) => {
    return openBlock(), createBlock("span", {
      class: "el-rate__item",
      onMousemove: ($event) => $setup.setCurrentValue(item, $event),
      onMouseleave: _cache[1] || (_cache[1] = (...args) => $setup.resetCurrentValue && $setup.resetCurrentValue(...args)),
      onClick: ($event) => $setup.selectValue(item),
      style: {
        cursor: $setup.rateDisabled ? "auto" : "pointer"
      },
      key
    }, [createVNode("i", {
      class: ["el-rate__icon", [$setup.classes[item - 1], {
        hover: $setup.hoverIndex === item
      }]],
      style: $setup.getIconStyle(item)
    }, [$setup.showDecimalIcon(item) ? (openBlock(), createBlock("i", {
      key: 0,
      class: ["el-rate__decimal", $setup.decimalIconClass],
      style: $setup.decimalStyle
    }, null, 6)) : createCommentVNode("v-if", true)], 6)], 44, ["onMousemove", "onClick"]);
  }), 128)), $props.showText || $props.showScore ? (openBlock(), createBlock("span", {
    key: 0,
    class: "el-rate__text",
    style: {
      color: $props.textColor
    }
  }, toDisplayString($setup.text), 5)) : createCommentVNode("v-if", true)], 40, ["aria-valuenow", "aria-valuetext", "aria-valuemax"]);
}
script$11.render = render$U;
script$11.__file = "packages/rate/Rate.vue";
script$11.install = function(app) {
  app.component(script$11.name, script$11);
};
var hsv2hsl = function(hue, sat, val) {
  return [hue, sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0, hue / 2];
};
var isOnePointZero = function(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
};
var isPercentage = function(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
};
var bound01 = function(value, max) {
  if (isOnePointZero(value))
    value = "100%";
  const processPercent = isPercentage(value);
  value = Math.min(max, Math.max(0, parseFloat(value)));
  if (processPercent) {
    value = parseInt(value * max, 10) / 100;
  }
  if (Math.abs(value - max) < 1e-6) {
    return 1;
  }
  return value % max / parseFloat(max);
};
var INT_HEX_MAP = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
};
var toHex = function({
  r,
  g,
  b
}) {
  const hexOne = function(value) {
    value = Math.min(Math.round(value), 255);
    const high = Math.floor(value / 16);
    const low = value % 16;
    return "" + (INT_HEX_MAP[high] || high) + (INT_HEX_MAP[low] || low);
  };
  if (isNaN(r) || isNaN(g) || isNaN(b))
    return "";
  return "#" + hexOne(r) + hexOne(g) + hexOne(b);
};
var HEX_INT_MAP = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};
var parseHexChannel = function(hex2) {
  if (hex2.length === 2) {
    return (HEX_INT_MAP[hex2[0].toUpperCase()] || +hex2[0]) * 16 + (HEX_INT_MAP[hex2[1].toUpperCase()] || +hex2[1]);
  }
  return HEX_INT_MAP[hex2[1].toUpperCase()] || +hex2[1];
};
var hsl2hsv = function(hue, sat, light) {
  sat = sat / 100;
  light = light / 100;
  let smin = sat;
  const lmin = Math.max(light, 0.01);
  let sv;
  let v;
  light *= 2;
  sat *= light <= 1 ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  v = (light + sat) / 2;
  sv = light === 0 ? 2 * smin / (lmin + smin) : 2 * sat / (light + sat);
  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  };
};
var rgb2hsv = function(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h2, s;
  const v = max;
  const d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return {
    h: h2 * 360,
    s: s * 100,
    v: v * 100
  };
};
var hsv2rgb = function(h2, s, v) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  const i = Math.floor(h2);
  const f = h2 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t2 = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t2, v][mod];
  const g = [t2, v, v, q, p, p][mod];
  const b = [p, p, t2, v, v, q][mod];
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};
var Color = class {
  constructor(options) {
    this._hue = 0;
    this._saturation = 100;
    this._value = 100;
    this._alpha = 100;
    this.enableAlpha = false;
    this.format = "hex";
    this.value = "";
    options = options || {};
    for (const option in options) {
      if (Object.hasOwnProperty.call(options, option)) {
        this[option] = options[option];
      }
    }
    this.doOnChange();
  }
  set(prop, value) {
    if (arguments.length === 1 && typeof prop === "object") {
      for (const p in prop) {
        if (Object.hasOwnProperty.call(prop, p)) {
          this.set(p, prop[p]);
        }
      }
      return;
    }
    this["_" + prop] = value;
    this.doOnChange();
  }
  get(prop) {
    return this["_" + prop];
  }
  toRgb() {
    return hsv2rgb(this._hue, this._saturation, this._value);
  }
  fromString(value) {
    if (!value) {
      this._hue = 0;
      this._saturation = 100;
      this._value = 100;
      this.doOnChange();
      return;
    }
    const fromHSV = (h2, s, v) => {
      this._hue = Math.max(0, Math.min(360, h2));
      this._saturation = Math.max(0, Math.min(100, s));
      this._value = Math.max(0, Math.min(100, v));
      this.doOnChange();
    };
    if (value.indexOf("hsl") !== -1) {
      const parts = value.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((val) => val !== "").map((val, index2) => index2 > 2 ? parseFloat(val) : parseInt(val, 10));
      if (parts.length === 4) {
        this._alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const {
          h: h2,
          s,
          v
        } = hsl2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h2, s, v);
      }
    } else if (value.indexOf("hsv") !== -1) {
      const parts = value.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((val) => val !== "").map((val, index2) => index2 > 2 ? parseFloat(val) : parseInt(val, 10));
      if (parts.length === 4) {
        this._alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        fromHSV(parts[0], parts[1], parts[2]);
      }
    } else if (value.indexOf("rgb") !== -1) {
      const parts = value.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((val) => val !== "").map((val, index2) => index2 > 2 ? parseFloat(val) : parseInt(val, 10));
      if (parts.length === 4) {
        this._alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const {
          h: h2,
          s,
          v
        } = rgb2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h2, s, v);
      }
    } else if (value.indexOf("#") !== -1) {
      const hex2 = value.replace("#", "").trim();
      if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex2))
        return;
      let r, g, b;
      if (hex2.length === 3) {
        r = parseHexChannel(hex2[0] + hex2[0]);
        g = parseHexChannel(hex2[1] + hex2[1]);
        b = parseHexChannel(hex2[2] + hex2[2]);
      } else if (hex2.length === 6 || hex2.length === 8) {
        r = parseHexChannel(hex2.substring(0, 2));
        g = parseHexChannel(hex2.substring(2, 4));
        b = parseHexChannel(hex2.substring(4, 6));
      }
      if (hex2.length === 8) {
        this._alpha = Math.floor(parseHexChannel(hex2.substring(6)) / 255 * 100);
      } else if (hex2.length === 3 || hex2.length === 6) {
        this._alpha = 100;
      }
      const {
        h: h2,
        s,
        v
      } = rgb2hsv(r, g, b);
      fromHSV(h2, s, v);
    }
  }
  compare(color) {
    return Math.abs(color._hue - this._hue) < 2 && Math.abs(color._saturation - this._saturation) < 1 && Math.abs(color._value - this._value) < 1 && Math.abs(color._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const {
      _hue,
      _saturation,
      _value,
      _alpha,
      format: format2
    } = this;
    if (this.enableAlpha) {
      switch (format2) {
        case "hsl":
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsla(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%, ${_alpha / 100})`;
          break;
        case "hsv":
          this.value = `hsva(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%, ${_alpha / 100})`;
          break;
        default:
          const {
            r,
            g,
            b
          } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgba(${r}, ${g}, ${b}, ${_alpha / 100})`;
      }
    } else {
      switch (format2) {
        case "hsl":
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsl(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%)`;
          break;
        case "hsv":
          this.value = `hsv(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%)`;
          break;
        case "rgb":
          const {
            r,
            g,
            b
          } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgb(${r}, ${g}, ${b})`;
          break;
        default:
          this.value = toHex(hsv2rgb(_hue, _saturation, _value));
      }
    }
  }
};
var isDragging = false;
function draggable(element, options) {
  const moveFn = function(event) {
    if (options.drag) {
      options.drag(event);
    }
  };
  const upFn = function(event) {
    document.removeEventListener("mousemove", moveFn);
    document.removeEventListener("mouseup", upFn);
    document.onselectstart = null;
    document.ondragstart = null;
    isDragging = false;
    if (options.end) {
      options.end(event);
    }
  };
  element.addEventListener("mousedown", function(event) {
    if (isDragging)
      return;
    document.onselectstart = function() {
      return false;
    };
    document.ondragstart = function() {
      return false;
    };
    document.addEventListener("mousemove", moveFn);
    document.addEventListener("mouseup", upFn);
    isDragging = true;
    if (options.start) {
      options.start(event);
    }
  });
}
var script$10 = {
  name: "el-sl-panel",
  props: {
    color: {
      required: true
    }
  },
  setup(props2) {
    const state = reactive({
      cursorTop: 0,
      cursorLeft: 0,
      background: "hsl(0, 100%, 50%)"
    });
    const instance2 = getCurrentInstance();
    const colorValue = computed(() => {
      const hue = props2.color.get("hue");
      const value = props2.color.get("value");
      return {
        hue,
        value
      };
    });
    watch(colorValue, update);
    onMounted(() => {
      draggable(instance2.refs.panel, {
        drag: handleDrag,
        end: handleDrag
      });
      update();
    });
    function update() {
      const saturation = props2.color.get("saturation");
      const value = props2.color.get("value");
      const el = instance2.refs.panel;
      const {
        clientWidth: width,
        clientHeight: height
      } = el;
      state.cursorLeft = saturation * width / 100;
      state.cursorTop = (100 - value) * height / 100;
      state.background = "hsl(" + props2.color.get("hue") + ", 100%, 50%)";
    }
    function handleDrag(event) {
      const el = instance2.refs.panel;
      const rect = el.getBoundingClientRect();
      let left = event.clientX - rect.left;
      let top = event.clientY - rect.top;
      left = Math.max(0, left);
      left = Math.min(left, rect.width);
      top = Math.max(0, top);
      top = Math.min(top, rect.height);
      state.cursorLeft = left;
      state.cursorTop = top;
      props2.color.set({
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100
      });
    }
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      handleDrag,
      update
    });
  }
};
var _hoisted_1$F = createVNode("div", {
  class: "el-color-svpanel__white"
}, null, -1);
var _hoisted_2$r = createVNode("div", {
  class: "el-color-svpanel__black"
}, null, -1);
var _hoisted_3$m = createVNode("div", null, null, -1);
function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: "el-color-svpanel",
    ref: "panel",
    style: {
      backgroundColor: _ctx.background
    }
  }, [_hoisted_1$F, _hoisted_2$r, createVNode("div", {
    class: "el-color-svpanel__cursor",
    style: {
      top: _ctx.cursorTop + "px",
      left: _ctx.cursorLeft + "px"
    }
  }, [_hoisted_3$m], 4)], 4);
}
script$10.render = render$T;
script$10.__file = "packages/color-picker/src/components/sv-panel.vue";
var script$$ = {
  name: "el-color-hue-slider",
  props: {
    color: {
      required: true
    },
    vertical: Boolean
  },
  setup(props2) {
    const instance2 = getCurrentInstance();
    const state = reactive({
      thumbLeft: 0,
      thumbTop: 0
    });
    const hueValue = computed(() => {
      return props2.color.get("hue");
    });
    watch(hueValue, update);
    function handleClick(event) {
      const {
        thumb
      } = state;
      const target = event.target;
      if (target !== thumb) {
        handleDrag(event);
      }
    }
    function handleDrag(event) {
      const rect = instance2.proxy.$el.getBoundingClientRect();
      const {
        thumb
      } = instance2.refs;
      let hue;
      if (!props2.vertical) {
        let left = event.clientX - rect.left;
        left = Math.min(left, rect.width - thumb.offsetWidth / 2);
        left = Math.max(thumb.offsetWidth / 2, left);
        hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360);
      } else {
        let top = event.clientY - rect.top;
        top = Math.min(top, rect.height - thumb.offsetHeight / 2);
        top = Math.max(thumb.offsetHeight / 2, top);
        hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360);
      }
      props2.color.set("hue", hue);
    }
    function getThumbLeft() {
      if (props2.vertical)
        return 0;
      const el = instance2.proxy.$el;
      const hue = props2.color.get("hue");
      if (!el)
        return 0;
      const thumb = instance2.refs.thumb;
      return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
    }
    function getThumbTop() {
      if (!props2.vertical)
        return 0;
      const el = instance2.proxy.$el;
      const hue = props2.color.get("hue");
      if (!el)
        return 0;
      const thumb = instance2.refs.thumb;
      return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
    }
    function update() {
      state.thumbLeft = getThumbLeft();
      state.thumbTop = getThumbTop();
    }
    onMounted(() => {
      const {
        bar,
        thumb
      } = instance2.refs;
      const dragConfig = {
        drag: (event) => handleDrag(event),
        end: (event) => handleDrag(event)
      };
      draggable(bar, dragConfig);
      draggable(thumb, dragConfig);
      update();
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      handleClick,
      update
    });
  }
};
function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["el-color-hue-slider", {
      "is-vertical": $props.vertical
    }]
  }, [createVNode("div", {
    class: "el-color-hue-slider__bar",
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleClick && $setup.handleClick(...args)),
    ref: "bar"
  }, null, 512), createVNode("div", {
    class: "el-color-hue-slider__thumb",
    style: {
      left: _ctx.thumbLeft + "px",
      top: _ctx.thumbTop + "px"
    },
    ref: "thumb"
  }, null, 4)], 2);
}
script$$.render = render$S;
script$$.__file = "packages/color-picker/src/components/hue-slider.vue";
var script$_ = {
  name: "el-color-alpha-slider",
  props: {
    color: {
      required: true
    },
    vertical: Boolean
  },
  setup(props2) {
    const state = reactive({
      thumbLeft: 0,
      thumbTop: 0,
      background: null
    });
    const instance2 = getCurrentInstance();
    watch(props2.color, update);
    onMounted(() => {
      const {
        bar,
        thumb
      } = instance2.refs;
      const dragConfig = {
        drag: (event) => {
          handleDrag(event);
        },
        end: (event) => {
          handleDrag(event);
        }
      };
      draggable(bar, dragConfig);
      draggable(thumb, dragConfig);
      update();
    });
    function handleClick(event) {
      const thumb = instance2.refs.thumb;
      const target = event.target;
      if (target !== thumb) {
        handleDrag(event);
      }
    }
    function handleDrag(event) {
      const rect = instance2.proxy.$el.getBoundingClientRect();
      const {
        thumb
      } = instance2.refs;
      if (!props2.vertical) {
        let left = event.clientX - rect.left;
        left = Math.max(thumb.offsetWidth / 2, left);
        left = Math.min(left, rect.width - thumb.offsetWidth / 2);
        props2.color.set("alpha", Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 100));
      } else {
        let top = event.clientY - rect.top;
        top = Math.max(thumb.offsetHeight / 2, top);
        top = Math.min(top, rect.height - thumb.offsetHeight / 2);
        props2.color.set("alpha", Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 100));
      }
    }
    function getThumbLeft() {
      if (props2.vertical)
        return 0;
      const el = instance2.proxy.$el;
      const alpha = props2.color._alpha;
      if (!el)
        return 0;
      const thumb = instance2.refs.thumb;
      return Math.round(alpha * (el.offsetWidth - thumb.offsetWidth / 2) / 100);
    }
    function getThumbTop() {
      if (!props2.vertical)
        return 0;
      const el = instance2.proxy.$el;
      const alpha = props2.color._alpha;
      if (!el)
        return 0;
      const thumb = instance2.refs.thumb;
      return Math.round(alpha * (el.offsetHeight - thumb.offsetHeight / 2) / 100);
    }
    function getBackground() {
      if (props2.color && props2.color.value) {
        const {
          r,
          g,
          b
        } = props2.color.toRgb();
        return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;
      }
      return null;
    }
    function update() {
      state.thumbLeft = getThumbLeft();
      state.thumbTop = getThumbTop();
      state.background = getBackground();
    }
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      handleClick,
      update
    });
  }
};
function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["el-color-alpha-slider", {
      "is-vertical": $props.vertical
    }]
  }, [createVNode("div", {
    class: "el-color-alpha-slider__bar",
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleClick && $setup.handleClick(...args)),
    ref: "bar",
    style: {
      background: _ctx.background
    }
  }, null, 4), createVNode("div", {
    class: "el-color-alpha-slider__thumb",
    ref: "thumb",
    style: {
      left: _ctx.thumbLeft + "px",
      top: _ctx.thumbTop + "px"
    }
  }, null, 4)], 2);
}
script$_.render = render$R;
script$_.__file = "packages/color-picker/src/components/alpha-slider.vue";
var script$Z = {
  props: {
    colors: {
      type: Array,
      required: true
    },
    color: {
      required: true
    }
  },
  setup(props2) {
    const state = reactive({
      rgbaColors: parseColors(props2.colors, props2.color)
    });
    const currentColor = inject("currentColor");
    watch(currentColor, (val) => {
      const color = new Color();
      color.fromString(val);
      state.rgbaColors.forEach((item) => {
        item.selected = color.compare(item);
      });
    });
    watch(props2.colors, (newVal) => {
      state.rgbaColors = parseColors(newVal, props2.color);
    });
    watch(props2.color, (newVal) => {
      state.rgbaColors = parseColors(props2.colors, newVal);
    });
    function handleSelect(index2) {
      props2.color.fromString(props2.colors[index2]);
    }
    function parseColors(colors, color) {
      return colors.map((value) => {
        const c = new Color();
        c.enableAlpha = true;
        c.format = "rgba";
        c.fromString(value);
        c.selected = c.value === color.value;
        return c;
      });
    }
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      handleSelect
    });
  }
};
var _hoisted_1$E = {
  class: "el-color-predefine"
};
var _hoisted_2$q = {
  class: "el-color-predefine__colors"
};
function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$E, [createVNode("div", _hoisted_2$q, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.rgbaColors, (item, index2) => {
    return openBlock(), createBlock("div", {
      class: ["el-color-predefine__color-selector", {
        selected: item.selected,
        "is-alpha": item._alpha < 100
      }],
      key: $props.colors[index2],
      onClick: ($event) => $setup.handleSelect(index2)
    }, [createVNode("div", {
      style: {
        "background-color": item.value
      }
    }, null, 4)], 10, ["onClick"]);
  }), 128))])]);
}
script$Z.render = render$Q;
script$Z.__file = "packages/color-picker/src/components/predefine.vue";
var script$Y = {
  name: "el-color-picker-dropdown",
  components: {
    SvPanel: script$10,
    HueSlider: script$$,
    AlphaSlider: script$_,
    ElInput: script$1l,
    ElButton: script$1u,
    Predefine: script$Z
  },
  emits: ["pick", "clear", "update:modelValue", "created"],
  props: __spreadProps(__spreadValues({}, popperProps), {
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      required: true
    },
    showAlpha: Boolean,
    predefine: Array,
    popperClass: String
  }),
  setup(props2, context) {
    const instance2 = getCurrentInstance();
    const state = reactive({
      customInput: "",
      popperElm: null,
      referenceElm: null,
      alpha: null
    });
    const referenceState = inject("referenceState");
    const popperState = usePopper(props2, context, __spreadValues({}, toRefs(state)));
    const currentColor = computed(() => {
      const parent = instance2.parent;
      return !parent || !parent.proxy.showPanelColor ? "" : parent.proxy.color.value;
    });
    provide("currentColor", currentColor);
    watch(popperState.showPopper, (val) => {
      if (val === true) {
        nextTick(() => {
          const {
            sl,
            hue,
            alpha
          } = instance2.refs;
          sl && sl.update();
          hue && hue.update();
          alpha && alpha.update();
        });
      }
    });
    watch(currentColor, (val) => {
      state.customInput = val;
    }, {
      immediate: true
    });
    onMounted(() => {
      referenceState.popperElm = state.popperElm;
      state.referenceElm = referenceState.referenceElm;
    });
    function confirmValue() {
      context.emit("pick");
    }
    function handleConfirm() {
      props2.color.fromString(state.customInput);
    }
    const t2 = useLocale();
    return __spreadProps(__spreadValues(__spreadValues({}, popperState), toRefs(state)), {
      confirmValue,
      handleConfirm,
      t: t2
    });
  }
};
var _hoisted_1$D = {
  class: "el-color-dropdown__main-wrapper"
};
var _hoisted_2$p = {
  class: "el-color-dropdown__btns"
};
var _hoisted_3$l = {
  class: "el-color-dropdown__value"
};
function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hue_slider = resolveComponent("hue-slider");
  const _component_sv_panel = resolveComponent("sv-panel");
  const _component_alpha_slider = resolveComponent("alpha-slider");
  const _component_predefine = resolveComponent("predefine");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createBlock(Teleport, {
    to: "body"
  }, [createVNode(Transition, {
    name: "el-zoom-in-top",
    onAfterLeaveFrom: _ctx.doDestroy
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: ["el-color-dropdown", ["el-color-picker__panel", $props.popperClass || ""]],
      ref: "popperElm"
    }, [createVNode("div", _hoisted_1$D, [createVNode(_component_hue_slider, {
      ref: "hue",
      color: $props.color,
      vertical: "",
      style: {
        "float": "right"
      }
    }, null, 8, ["color"]), createVNode(_component_sv_panel, {
      ref: "sl",
      color: $props.color
    }, null, 8, ["color"])]), $props.showAlpha ? (openBlock(), createBlock(_component_alpha_slider, {
      key: 0,
      ref: "alpha",
      color: $props.color
    }, null, 8, ["color"])) : createCommentVNode("v-if", true), $props.predefine ? (openBlock(), createBlock(_component_predefine, {
      key: 1,
      color: $props.color,
      colors: $props.predefine
    }, null, 8, ["color", "colors"])) : createCommentVNode("v-if", true), createVNode("div", _hoisted_2$p, [createVNode("span", _hoisted_3$l, [createVNode(_component_el_input, {
      modelValue: _ctx.customInput,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.customInput = $event),
      onKeyup: withKeys($setup.handleConfirm, ["enter"]),
      onBlur: $setup.handleConfirm,
      "validate-event": false,
      size: "mini"
    }, null, 8, ["modelValue", "onKeyup", "onBlur"])]), createVNode(_component_el_button, {
      size: "mini",
      type: "text",
      class: "el-color-dropdown__link-btn",
      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("clear"))
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString($setup.t("el.colorpicker.clear")), 1)]),
      _: 1
    }), createVNode(_component_el_button, {
      plain: "",
      size: "mini",
      class: "el-color-dropdown__btn",
      onClick: $setup.confirmValue
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString($setup.t("el.colorpicker.confirm")), 1)]),
      _: 1
    }, 8, ["onClick"])])], 2), [[vShow, _ctx.showPopper]])]),
    _: 1
  }, 8, ["onAfterLeaveFrom"])]);
}
script$Y.render = render$P;
script$Y.__file = "packages/color-picker/src/components/picker-dropdown.vue";
var script$X = {
  name: "ElColorPicker",
  props: {
    modelValue: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: String,
    popperClass: String,
    predefine: Array
  },
  emits: ["active-change", "input", "change", "update:modelValue"],
  setup(props2, context) {
    const color = new Color({
      enableAlpha: props2.showAlpha,
      format: props2.colorFormat
    });
    const state = reactive({
      color,
      showPicker: false,
      showPanelColor: false,
      popperElm: null,
      referenceElm: null
    });
    provide("referenceState", state);
    inject("elForm", {});
    const {
      dispatch
    } = useEmitter();
    const elFormItem = inject("elFormItem", {});
    const elForm = inject("elForm", {});
    const displayedColor = computed(() => {
      if (!props2.modelValue && !state.showPanelColor) {
        return "transparent";
      }
      return displayedRgb(state.color, props2.showAlpha);
    });
    const _elFormItemSize = computed(() => {
      return (elFormItem || {}).elFormItemSize;
    });
    const colorSize = computed(() => {
      return props2.size || _elFormItemSize.value || (context.$ELEMENT || {}).size;
    });
    const colorDisabled = computed(() => {
      return props2.disabled || (elForm || {}).disabled;
    });
    watch(() => props2.modelValue, (val) => {
      if (!val) {
        state.showPanelColor = false;
      } else if (val && val !== state.color.value) {
        state.color.fromString(val);
      }
    });
    watch(state.color, () => state.showPanelColor = true, {
      deep: true
    });
    watch(displayedColor, (val) => {
      if (!state.showPicker)
        return;
      const currentValueColor = new Color({
        enableAlpha: props2.showAlpha,
        format: props2.colorFormat
      });
      if (val !== currentValueColor) {
        context.emit("active-change", val);
      }
    });
    onMounted(() => {
      const value = props2.modelValue;
      if (value) {
        state.color.fromString(value);
      }
    });
    function displayedRgb(color2, showAlpha) {
      if (!(color2 instanceof Color)) {
        throw Error("color should be instance of Color Class");
      }
      const {
        r,
        g,
        b
      } = color2.toRgb();
      return showAlpha ? `rgba(${r}, ${g}, ${b}, ${color2.get("alpha") / 100})` : `rgb(${r}, ${g}, ${b})`;
    }
    const handleTrigger = () => {
      if (colorDisabled.value)
        return;
      state.showPicker = !state.showPicker;
    };
    const confirmValue = () => {
      const value = state.color.value;
      context.emit("update:modelValue", value);
      context.emit("change", value);
      dispatch("ElFormItem", "el.form.change", value);
      state.showPicker = false;
    };
    const clearValue = () => {
      context.emit("update:modelValue", null);
      context.emit("change", null);
      if (props2.modelValue !== null) {
        dispatch("ElFormItem", "el.form.change", null);
      }
      state.showPanelColor = false;
      state.showPicker = false;
      resetColor();
    };
    const hide = () => {
      state.showPicker = false;
      resetColor();
    };
    const resetColor = () => {
      nextTick(() => {
        if (props2.modelValue) {
          state.color.fromString(props2.modelValue);
        } else {
          state.showPanelColor = false;
        }
      });
    };
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      handleTrigger,
      confirmValue,
      clearValue,
      hide,
      displayedRgb,
      colorSize,
      colorDisabled,
      displayedColor
    });
  },
  directives: {
    Clickoutside
  },
  components: {
    PickerDropdown: script$Y
  }
};
var _hoisted_1$C = {
  key: 0,
  class: "el-color-picker__mask"
};
var _hoisted_2$o = {
  key: 0,
  class: "el-color-picker__empty el-icon-close"
};
var _hoisted_3$k = {
  class: "el-color-picker__icon el-icon-arrow-down"
};
function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker_dropdown = resolveComponent("picker-dropdown");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return withDirectives((openBlock(), createBlock("div", {
    class: ["el-color-picker", $setup.colorDisabled ? "is-disabled" : "", $setup.colorSize ? `el-color-picker--${$setup.colorSize}` : ""],
    ref: "referenceElm"
  }, [$setup.colorDisabled ? (openBlock(), createBlock("div", _hoisted_1$C)) : createCommentVNode("v-if", true), createVNode("div", {
    class: "el-color-picker__trigger",
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleTrigger && $setup.handleTrigger(...args))
  }, [createVNode("span", {
    class: ["el-color-picker__color", {
      "is-alpha": $props.showAlpha
    }]
  }, [createVNode("span", {
    class: "el-color-picker__color-inner",
    style: {
      backgroundColor: $setup.displayedColor
    }
  }, null, 4), !$props.modelValue && !_ctx.showPanelColor ? (openBlock(), createBlock("span", _hoisted_2$o)) : createCommentVNode("v-if", true)], 2), withDirectives(createVNode("span", _hoisted_3$k, null, 512), [[vShow, $props.modelValue || _ctx.showPanelColor]])]), createVNode(_component_picker_dropdown, {
    ref: "dropdown",
    popperClass: $props.popperClass,
    modelValue: _ctx.showPicker,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.showPicker = $event),
    onPick: $setup.confirmValue,
    onClear: $setup.clearValue,
    color: _ctx.color,
    "show-alpha": $props.showAlpha,
    predefine: $props.predefine
  }, null, 8, ["popperClass", "modelValue", "onPick", "onClear", "color", "show-alpha", "predefine"])], 2)), [[_directive_clickoutside, $setup.hide]]);
}
script$X.render = render$O;
script$X.__file = "packages/color-picker/src/main.vue";
script$X.install = function(app) {
  app.component(script$X.name, script$X);
};
var script$W = {
  name: "OptionContent",
  props: {
    option: Object,
    renderContent: Function,
    labelProp: String,
    keyProp: String
  },
  setup() {
    const defaultScopedSlots = inject("defaultScopedSlots");
    return {
      defaultScopedSlots
    };
  },
  render() {
    return this.renderContent ? this.renderContent(h, this.option) : this.defaultScopedSlots ? this.defaultScopedSlots({
      option: this.option
    }) : h("span", this.option[this.labelProp] || this.option[this.keyProp]);
  }
};
script$W.__file = "packages/transfer/src/OptionContent.vue";
var script$V = {
  name: "ElTransferPanel",
  componentName: "ElTransferPanel",
  emits: ["checked-change"],
  components: {
    ElCheckboxGroup: script$1m,
    ElCheckbox: script$1o,
    ElInput: script$1l,
    OptionContent: script$W
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    renderContent: Function,
    placeholder: String,
    title: String,
    filterable: Boolean,
    format: Object,
    filterMethod: Function,
    defaultChecked: Array,
    props: Object
  },
  setup(props2, {
    emit,
    slots
  }) {
    const t2 = useLocale();
    const state = reactive({
      checked: [],
      allChecked: false,
      query: "",
      checkChangeByUser: true
    });
    const {
      filteredData,
      labelProp,
      keyProp,
      checkableData,
      checkedSummary,
      isIndeterminate,
      hasNoMatch,
      disabledProp,
      hasFooter
    } = useTransferPanelData(props2, state, slots, emit);
    const handleAllCheckedChange = (value) => {
      state.checked = value ? checkableData.value.map((item) => item[keyProp.value]) : [];
    };
    return __spreadProps(__spreadValues({
      t: t2
    }, toRefs(state)), {
      filteredData,
      labelProp,
      keyProp,
      checkedSummary,
      isIndeterminate,
      hasNoMatch,
      disabledProp,
      hasFooter,
      handleAllCheckedChange
    });
  }
};
var useTransferPanelData = (props2, state, slots, emit) => {
  const filteredData = computed(() => {
    const {
      data,
      filterMethod
    } = props2;
    return data.filter((item) => {
      if (typeof filterMethod === "function") {
        return filterMethod(state.query, item);
      } else {
        const label = item[labelProp.value] || item[keyProp.value].toString();
        return label.toLowerCase().indexOf(state.query.toLowerCase()) > -1;
      }
    });
  });
  const labelProp = computed(() => {
    const {
      props: p
    } = props2;
    return p.label || "label";
  });
  const keyProp = computed(() => {
    const {
      props: p
    } = props2;
    return p.key || "key";
  });
  const checkableData = computed(() => filteredData.value.filter((item) => !item[disabledProp.value]));
  const checkedSummary = computed(() => {
    const {
      data,
      format: format2
    } = props2;
    const checkedLength = state.checked.length;
    const dataLength = data.length;
    const {
      noChecked,
      hasChecked
    } = format2;
    if (noChecked && hasChecked) {
      return checkedLength > 0 ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength) : noChecked.replace(/\${total}/g, dataLength);
    } else {
      return `${checkedLength}/${dataLength}`;
    }
  });
  const isIndeterminate = computed(() => {
    const checkedLength = state.checked.length;
    return checkedLength > 0 && checkedLength < checkableData.value.length;
  });
  const hasNoMatch = computed(() => state.query.length > 0 && filteredData.value.length === 0);
  const disabledProp = computed(() => props2.props.disabled || "disabled");
  const hasFooter = computed(() => !!slots.default()[0].children.length);
  const updateAllChecked = () => {
    const checkableDataKeys = checkableData.value.map((item) => item[keyProp.value]);
    state.allChecked = checkableDataKeys.length > 0 && checkableDataKeys.every((item) => state.checked.indexOf(item) > -1);
  };
  watch(() => checkableData.value, () => updateAllChecked());
  watch(() => props2.data, () => {
    const checked = [];
    const filteredDataKeys = filteredData.value.map((item) => item[keyProp.value]);
    state.checked.forEach((item) => {
      if (filteredDataKeys.indexOf(item) > -1) {
        checked.push(item);
      }
    });
    state.checkChangeByUser = false;
    state.checked = checked;
  });
  watch(() => state.checked, (val, oldVal) => {
    updateAllChecked();
    if (state.checkChangeByUser) {
      const movedKeys = val.concat(oldVal).filter((v) => val.indexOf(v) === -1 || oldVal.indexOf(v) === -1);
      emit("checked-change", val, movedKeys);
    } else {
      emit("checked-change", val);
      state.checkChangeByUser = true;
    }
  }, {
    deep: true
  });
  watch(() => props2.defaultChecked, (val, oldVal) => {
    if (oldVal && val.length === oldVal.length && val.every((item) => oldVal.indexOf(item) > -1))
      return;
    const checked = [];
    const checkableDataKeys = checkableData.value.map((item) => item[keyProp.value]);
    val.forEach((item) => {
      if (checkableDataKeys.indexOf(item) > -1) {
        checked.push(item);
      }
    });
    state.checkChangeByUser = false;
    state.checked = checked;
  }, {
    immediate: true
  });
  return {
    filteredData,
    labelProp,
    keyProp,
    checkableData,
    checkedSummary,
    isIndeterminate,
    hasNoMatch,
    disabledProp,
    hasFooter,
    updateAllChecked
  };
};
var _hoisted_1$B = {
  class: "el-transfer-panel"
};
var _hoisted_2$n = {
  class: "el-transfer-panel__header"
};
var _hoisted_3$j = {
  class: "el-transfer-panel__filter"
};
var _hoisted_4$d = createVNode("i", {
  class: ["el-input__icon", "el-icon-search"]
}, null, -1);
var _hoisted_5$9 = {
  key: 0,
  class: "el-transfer-panel__footer"
};
function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_input = resolveComponent("el-input");
  const _component_option_content = resolveComponent("option-content");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  return openBlock(), createBlock("div", _hoisted_1$B, [createVNode("p", _hoisted_2$n, [createVNode(_component_el_checkbox, {
    modelValue: _ctx.allChecked,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.allChecked = $event),
    onChange: $setup.handleAllCheckedChange,
    indeterminate: $setup.isIndeterminate
  }, {
    default: withCtx(() => [createTextVNode(toDisplayString($props.title) + " ", 1), createVNode("span", null, toDisplayString($setup.checkedSummary), 1)]),
    _: 1
  }, 8, ["modelValue", "onChange", "indeterminate"])]), createVNode("div", {
    class: ["el-transfer-panel__body", $setup.hasFooter ? "is-with-footer" : ""]
  }, [createVNode("div", _hoisted_3$j, [$props.filterable ? (openBlock(), createBlock(_component_el_input, {
    key: 0,
    modelValue: _ctx.query,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.query = $event),
    size: "small",
    clearable: "",
    placeholder: $props.placeholder
  }, {
    prefix: withCtx(() => [_hoisted_4$d]),
    _: 1
  }, 8, ["modelValue", "placeholder"])) : createCommentVNode("v-if", true)]), withDirectives(createVNode(_component_el_checkbox_group, {
    modelValue: _ctx.checked,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.checked = $event),
    class: [{
      "is-filterable": $props.filterable
    }, "el-transfer-panel__list"]
  }, {
    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($setup.filteredData, (item) => {
      return openBlock(), createBlock(_component_el_checkbox, {
        class: "el-transfer-panel__item",
        label: item[$setup.keyProp],
        disabled: item[$setup.disabledProp],
        key: item[$setup.keyProp]
      }, {
        default: withCtx(() => [createVNode(_component_option_content, {
          option: item,
          "render-content": $props.renderContent,
          "label-prop": $setup.labelProp,
          "key-prop": $setup.keyProp
        }, null, 8, ["option", "render-content", "label-prop", "key-prop"])]),
        _: 2
      }, 1032, ["label", "disabled"]);
    }), 128))]),
    _: 1
  }, 8, ["modelValue", "class"]), [[vShow, !$setup.hasNoMatch && $props.data.length > 0]]), withDirectives(createVNode("p", {
    class: "el-transfer-panel__empty"
  }, toDisplayString($setup.t("el.transfer.noMatch")), 513), [[vShow, $setup.hasNoMatch]]), withDirectives(createVNode("p", {
    class: "el-transfer-panel__empty"
  }, toDisplayString($setup.t("el.transfer.noData")), 513), [[vShow, $props.data.length === 0 && !$setup.hasNoMatch]])], 2), $setup.hasFooter ? (openBlock(), createBlock("p", _hoisted_5$9, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)]);
}
script$V.render = render$N;
script$V.__file = "packages/transfer/src/TransferPanel.vue";
var script$U = {
  name: "ElTransfer",
  emits: ["update:modelValue", "change", "left-check-change", "right-check-change"],
  components: {
    TransferPanel: script$V,
    ElButton: script$1u
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    titles: {
      type: Array,
      default() {
        return [];
      }
    },
    buttonTexts: {
      type: Array,
      default() {
        return [];
      }
    },
    filterPlaceholder: {
      type: String,
      default: ""
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default() {
        return [];
      }
    },
    rightDefaultChecked: {
      type: Array,
      default() {
        return [];
      }
    },
    renderContent: Function,
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    format: {
      type: Object,
      default() {
        return {};
      }
    },
    filterable: Boolean,
    props: {
      type: Object,
      default() {
        return {
          label: "label",
          key: "key",
          disabled: "disabled"
        };
      }
    },
    targetOrder: {
      type: String,
      default: "original"
    }
  },
  setup(props2, {
    emit,
    slots
  }) {
    const t2 = useLocale();
    const leftChecked = ref([]);
    const rightChecked = ref([]);
    const leftPanel = ref(null);
    const rightPanel = ref(null);
    const hasButtonTexts = computed(() => props2.buttonTexts.length === 2);
    const clearQuery = (which) => {
      if (which === "left") {
        leftPanel.value.query = "";
      } else if (which === "right") {
        rightPanel.value.query = "";
      }
    };
    watch(props2.modelValue, (val) => emit("update:modelValue", val));
    provide("defaultScopedSlots", computed(() => slots.default));
    const {
      leftTransferPanelTitle,
      rightTransferPanelTitle,
      panelFilterPlaceholder,
      sourceData,
      targetData
    } = useTransferData(props2, t2);
    const {
      onSourceCheckedChange,
      onTargetCheckedChange,
      addToLeft,
      addToRight
    } = useTransferCheckedChange(props2, emit, leftChecked, rightChecked);
    return {
      leftChecked,
      rightChecked,
      hasButtonTexts,
      sourceData,
      targetData,
      leftTransferPanelTitle,
      rightTransferPanelTitle,
      panelFilterPlaceholder,
      onSourceCheckedChange,
      onTargetCheckedChange,
      addToLeft,
      addToRight,
      clearQuery
    };
  }
};
var useTransferData = (props2, t2) => {
  const leftTransferPanelTitle = computed(() => props2.titles[0] || t2("el.transfer.titles.0"));
  const rightTransferPanelTitle = computed(() => props2.titles[1] || t2("el.transfer.titles.1"));
  const panelFilterPlaceholder = computed(() => props2.filterPlaceholder || t2("el.transfer.filterPlaceholder"));
  const dataObj = computed(() => {
    const {
      props: p,
      data
    } = props2;
    const key = p.key;
    return data.reduce((o, cur) => (o[cur[key]] = cur) && o, {});
  });
  const sourceData = computed(() => {
    const {
      data,
      modelValue,
      props: p
    } = props2;
    return data.filter((item) => modelValue.indexOf(item[p.key]) === -1);
  });
  const targetData = computed(() => {
    const {
      data,
      modelValue,
      props: p,
      targetOrder
    } = props2;
    if (targetOrder === "original") {
      return data.filter((item) => modelValue.indexOf(item[p.key]) > -1);
    } else {
      return modelValue.reduce((arr, cur) => {
        const val = dataObj.value[cur];
        if (val) {
          arr.push(val);
        }
        return arr;
      }, []);
    }
  });
  return {
    dataObj,
    sourceData,
    targetData,
    leftTransferPanelTitle,
    rightTransferPanelTitle,
    panelFilterPlaceholder
  };
};
var useTransferCheckedChange = (props2, emit, leftChecked, rightChecked) => {
  const onSourceCheckedChange = (val, movedKeys) => {
    leftChecked.value = val;
    if (movedKeys === void 0)
      return;
    emit("left-check-change", val, movedKeys);
  };
  const onTargetCheckedChange = (val, movedKeys) => {
    rightChecked.value = val;
    if (movedKeys === void 0)
      return;
    emit("right-check-change", val, movedKeys);
  };
  const addToLeft = () => {
    const currentValue = props2.modelValue.slice();
    rightChecked.value.forEach((item) => {
      const index2 = currentValue.indexOf(item);
      if (index2 > -1) {
        currentValue.splice(index2, 1);
      }
    });
    emit("update:modelValue", currentValue);
    emit("change", currentValue, "left", rightChecked.value);
  };
  const addToRight = () => {
    const {
      modelValue,
      props: p,
      data,
      targetOrder
    } = props2;
    let currentValue = modelValue.slice();
    const itemsToBeMoved = [];
    const key = p.key;
    data.forEach((item) => {
      const itemKey = item[key];
      if (leftChecked.value.indexOf(itemKey) > -1 && modelValue.indexOf(itemKey) === -1) {
        itemsToBeMoved.push(itemKey);
      }
    });
    currentValue = targetOrder === "unshift" ? itemsToBeMoved.concat(currentValue) : currentValue.concat(itemsToBeMoved);
    emit("update:modelValue", currentValue);
    emit("change", currentValue, "right", leftChecked.value);
  };
  return {
    onSourceCheckedChange,
    onTargetCheckedChange,
    addToLeft,
    addToRight
  };
};
var _hoisted_1$A = {
  class: "el-transfer"
};
var _hoisted_2$m = {
  class: "el-transfer__buttons"
};
var _hoisted_3$i = createVNode("i", {
  class: "el-icon-arrow-left"
}, null, -1);
var _hoisted_4$c = {
  key: 0
};
var _hoisted_5$8 = {
  key: 0
};
var _hoisted_6$5 = createVNode("i", {
  class: "el-icon-arrow-right"
}, null, -1);
function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_transfer_panel = resolveComponent("transfer-panel");
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createBlock("div", _hoisted_1$A, [createVNode(_component_transfer_panel, mergeProps(_ctx.$props, {
    ref: "leftPanel",
    data: $setup.sourceData,
    title: $setup.leftTransferPanelTitle,
    "default-checked": $props.leftDefaultChecked,
    placeholder: $setup.panelFilterPlaceholder,
    onCheckedChange: $setup.onSourceCheckedChange
  }), {
    default: withCtx(() => [renderSlot(_ctx.$slots, "left-footer")]),
    _: 1
  }, 16, ["data", "title", "default-checked", "placeholder", "onCheckedChange"]), createVNode("div", _hoisted_2$m, [createVNode(_component_el_button, {
    type: "primary",
    class: ["el-transfer__button", $setup.hasButtonTexts ? "is-with-texts" : ""],
    onClick: $setup.addToLeft,
    disabled: $setup.rightChecked.length === 0
  }, {
    default: withCtx(() => [_hoisted_3$i, $props.buttonTexts[0] !== void 0 ? (openBlock(), createBlock("span", _hoisted_4$c, toDisplayString($props.buttonTexts[0]), 1)) : createCommentVNode("v-if", true)]),
    _: 1
  }, 8, ["class", "onClick", "disabled"]), createVNode(_component_el_button, {
    type: "primary",
    class: ["el-transfer__button", $setup.hasButtonTexts ? "is-with-texts" : ""],
    onClick: $setup.addToRight,
    disabled: $setup.leftChecked.length === 0
  }, {
    default: withCtx(() => [$props.buttonTexts[1] !== void 0 ? (openBlock(), createBlock("span", _hoisted_5$8, toDisplayString($props.buttonTexts[1]), 1)) : createCommentVNode("v-if", true), _hoisted_6$5]),
    _: 1
  }, 8, ["class", "onClick", "disabled"])]), createVNode(_component_transfer_panel, mergeProps(_ctx.$props, {
    ref: "rightPanel",
    data: $setup.targetData,
    title: $setup.rightTransferPanelTitle,
    "default-checked": $props.rightDefaultChecked,
    placeholder: $setup.panelFilterPlaceholder,
    onCheckedChange: $setup.onTargetCheckedChange
  }), {
    default: withCtx(() => [renderSlot(_ctx.$slots, "right-footer")]),
    _: 1
  }, 16, ["data", "title", "default-checked", "placeholder", "onCheckedChange"])]);
}
script$U.render = render$M;
script$U.__file = "packages/transfer/src/Transfer.vue";
script$U.install = function(app) {
  app.component(script$U.name, script$U);
};
var script$T = {
  name: "ElForm",
  componentName: "ElForm",
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ""
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    }
  },
  emits: ["validate"],
  setup(props2, {
    emit
  }) {
    const _a = toRefs(props2), {
      model,
      rules: rules2,
      validateOnRuleChange
    } = _a, rest = __objRest(_a, [
      "model",
      "rules",
      "validateOnRuleChange"
    ]);
    const {
      autoLabelWidth,
      registerLabelWidth,
      deregisterLabelWidth
    } = useLabelWidth$1();
    const {
      fields,
      resetFields
    } = useFileds(model);
    const {
      validateField,
      validate: validate2,
      clearValidate
    } = useValidate$1(rules2, model, fields, validateOnRuleChange);
    provide("elForm", reactive(__spreadProps(__spreadValues({
      name: "ElForm"
    }, rest), {
      model,
      rules: rules2,
      autoLabelWidth,
      registerLabelWidth,
      deregisterLabelWidth,
      resetFields,
      validateField,
      validate: validate2,
      clearValidate,
      emit
    })));
    return {
      validate: validate2,
      validateField,
      resetFields,
      clearValidate
    };
  }
};
var useLabelWidth$1 = () => {
  const potentialLabelWidthArr = reactive([]);
  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.length)
      return 0;
    const max = Math.max(...potentialLabelWidthArr);
    return max ? `${max}px` : "";
  });
  const getLabelWidthIndex = (width) => {
    const index2 = potentialLabelWidthArr.indexOf(width);
    if (index2 === -1) {
      throw new Error("[ElementForm]unpected width ", width);
    }
    return index2;
  };
  const registerLabelWidth = (val, oldVal) => {
    if (val && oldVal) {
      const index2 = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.splice(index2, 1, val);
    } else if (val) {
      potentialLabelWidthArr.push(val);
    }
  };
  const deregisterLabelWidth = (val) => {
    const index2 = getLabelWidthIndex(val);
    potentialLabelWidthArr.splice(index2, 1);
  };
  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
};
var useFileds = (model) => {
  const fields = reactive([]);
  const {
    on: on2
  } = useEmitter();
  on2("el.form.addField", (field) => {
    if (field) {
      fields.push(field);
    }
  });
  on2("el.form.removeField", (field) => {
    if (field.prop) {
      fields.splice(fields.indexOf(field), 1);
    }
  });
  const resetFields = () => {
    if (!unref(model)) {
      console.warn("[Element Warn][Form]model is required for resetFields to work.");
      return;
    }
    fields.forEach((field) => {
      field.resetField();
    });
  };
  return {
    fields,
    resetFields
  };
};
var useValidate$1 = (rules2, model, fields, validateOnRuleChange) => {
  const clearValidate = (props2 = []) => {
    const clearableFiles = props2.length ? typeof props2 === "string" ? fields.filter((field) => props2 === field.prop) : fields.filter((field) => props2.includes(field.prop)) : fields;
    clearableFiles.forEach((field) => {
      field.clearValidate();
    });
  };
  const validate2 = (callback) => {
    if (!model) {
      console.warn("[Element Warn][Form]model is required for validate to work!");
      return;
    }
    let promise;
    if (typeof callback !== "function") {
      promise = new window.Promise((resolve, reject) => {
        callback = function(valid2) {
          valid2 ? resolve(valid2) : reject(valid2);
        };
      });
    }
    let valid = true;
    let count = 0;
    if (fields.length === 0 && callback) {
      callback(valid);
    }
    let invalidFields = {};
    fields.forEach((field) => {
      field.validate("", (message, field2) => {
        if (message) {
          valid = false;
        }
        invalidFields = merge({}, invalidFields, field2);
        if (typeof callback === "function" && ++count === fields.length) {
          callback(valid, invalidFields);
        }
      });
    });
    if (promise) {
      return promise;
    }
  };
  const validateField = (props2, cb) => {
    props2 = [].concat(props2);
    const validateFields = fields.filter((field) => props2.includes(field.prop));
    if (!validateFields.length) {
      console.warn("[Element Warn]please pass correct props!");
      return;
    }
    validateFields.forEach((field) => {
      field.validate("", cb);
    });
  };
  if (rules2) {
    watch(rules2, () => {
      fields.forEach((field) => {
        field.removeValidateEvents();
        field.addValidateEvents();
      });
      if (unref(validateOnRuleChange)) {
        validate2(() => {
        });
      }
    });
  }
  return {
    validateField,
    validate: validate2,
    clearValidate
  };
};
function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("form", {
    class: ["el-form", [$props.labelPosition ? "el-form--label-" + $props.labelPosition : "", {
      "el-form--inline": $props.inline
    }]]
  }, [renderSlot(_ctx.$slots, "default")], 2);
}
script$T.render = render$L;
script$T.__file = "packages/form/Form.vue";
script$T.install = function(app) {
  app.component(script$T.name, script$T);
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance2 = new Constructor();
      if (Class2)
        _setPrototypeOf(instance2, Class2.prototype);
      return instance2;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
  warning = function warning3(type2, errors) {
    if (typeof console !== "undefined" && console.warn) {
      if (errors.every(function(e) {
        return typeof e === "string";
      })) {
        console.warn(type2, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === "function") {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === "string") {
    var str = String(f).replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return f;
}
function isNativeStringType(type2) {
  return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "date" || type2 === "pattern";
}
function isEmptyValue(value, type2) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type2 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type2) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index2 = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index2;
    index2 = index2 + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}
var AsyncValidationError = function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
}(_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve();
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve();
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function(oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = _extends(_extends({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
function required(rule, value, source, errors, options, type2) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type2 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}
var pattern = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === "string" && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern.hex);
  }
};
function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}
function range$1(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}
var ENUM = "enum";
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
  }
}
function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}
var rules = {
  required,
  whitespace,
  type,
  range: range$1,
  "enum": enumerable,
  pattern: pattern$1
};
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}
function method2(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function number2(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function regexp2(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function integer2(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function array2(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function object2(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
var ENUM$1 = "enum";
function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function date$1(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type2 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type2);
  callback(errors);
}
function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function any(rule, value, callback, source, options) {
  var errors = [];
  var validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate2) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
}
var validators = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date$1,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}
Schema.prototype = {
  messages: function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules2) {
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    var z;
    var item;
    for (z in rules2) {
      if (rules2.hasOwnProperty(z)) {
        item = rules2[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }
    function complete(results) {
      var i;
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }
      callback(errors, fields);
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function(z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function(r) {
        var rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function(data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends(_extends({}, schema), {}, {
          fullField: rule.fullField + "." + key
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning("async-validator:", errors);
        }
        if (errors.length && rule.message !== void 0) {
          errors = [].concat(rule.message);
        }
        errors = errors.map(complementError(rule));
        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(errors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends(_extends({}, fieldsSchema), data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function(errs) {
            var finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e) {
          return cb(e);
        });
      }
    }, function(results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf("message");
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};
Schema.register = function register(type2, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type2] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
var script$S = {
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props2, {
    slots
  }) {
    const {
      labelStyle,
      labelRef
    } = useLabelWidth(props2, slots);
    return () => {
      if (!slots.default)
        return null;
      if (props2.isAutoWidth) {
        return createVNode("div", {
          "ref": labelRef,
          "class": "el-form-item__label-wrap",
          "style": labelStyle
        }, [slots.default()]);
      } else {
        return slots.default();
      }
    };
  }
};
function useLabelWidth(props2, slots) {
  const computedWidth = ref(0);
  const labelRef = ref(null);
  const _elForm = inject("elForm");
  const _elFormItem = inject("elFormItem");
  const getLabelWidth = () => {
    const $el = unref(labelRef);
    if ($el && $el.firstElementChild) {
      const {
        width
      } = window.getComputedStyle($el.firstElementChild);
      return Math.ceil(parseFloat(width));
    } else {
      return 0;
    }
  };
  const updateLabelWidth = (action = "update") => {
    const $el = unref(labelRef);
    if (slots.default && props2.isAutoWidth && $el.firstElementChild) {
      if (action === "update") {
        computedWidth.value = getLabelWidth();
      } else if (action === "remove") {
        _elForm.deregisterLabelWidth(unref(computedWidth));
      }
    }
  };
  watch(computedWidth, (val, oldVal) => {
    if (props2.updateAll) {
      _elForm.registerLabelWidth(val, oldVal);
      _elFormItem.updateComputedLabelWidth(val);
    }
  });
  const labelStyle = computed(() => {
    const autoLabelWidth = _elForm.autoLabelWidth;
    const style = {};
    if (autoLabelWidth && autoLabelWidth !== "auto") {
      const marginLeft = parseInt(autoLabelWidth, 10) - unref(computedWidth);
      if (marginLeft) {
        style.marginLeft = marginLeft + "px";
      }
    }
    return style;
  });
  onMounted(() => {
    updateLabelWidth("update");
  });
  onUpdated(() => {
    updateLabelWidth("update");
  });
  onBeforeUnmount(() => {
    updateLabelWidth("remove");
  });
  return {
    labelStyle,
    labelRef
  };
}
script$S.__file = "packages/form-item/LabelWrap.vue";
var script$R = {
  name: "ElFormItem",
  componentName: "ElFormItem",
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: void 0
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ""
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  components: {
    LabelWrap: script$S
  },
  setup(props2) {
    const isNested = ref(false);
    const elForm = inject("elForm", {});
    const elFormItem = inject("elFormItem", null);
    isNested.value = !!elFormItem;
    useDispatchFiled(props2);
    const {
      labelFor,
      labelStyle,
      computedLabelWidth,
      updateComputedLabelWidth
    } = useLabel(props2, elForm);
    const {
      elFormItemSize,
      sizeClass
    } = useFontSize(props2, elForm);
    const {
      getRules,
      getFilteredRule
    } = useRules(props2, elForm);
    const {
      contentStyle
    } = useContentStyle(props2, elForm, isNested, computedLabelWidth);
    const isRequired = useIsRequired(getRules);
    const {
      validateState,
      validateMessage,
      validateDisabled,
      validate: validate2,
      clearValidate,
      resetField
    } = useValidate(props2, elForm, getFilteredRule);
    const {
      removeValidateEvents,
      addValidateEvents
    } = useValidateEvent(props2, validate2, getRules, validateDisabled);
    provide("elFormItem", reactive({
      name: "ElFormItem",
      elFormItemSize,
      updateComputedLabelWidth,
      validateState
    }));
    return {
      labelFor,
      labelStyle,
      sizeClass,
      contentStyle,
      isRequired,
      validate: validate2,
      validateState,
      validateMessage,
      resetField,
      clearValidate,
      removeValidateEvents,
      addValidateEvents,
      elForm
    };
  }
};
function useLabel(props2, elForm) {
  const computedLabelWidth = ref("");
  const labelFor = computed(() => props2.for || props2.prop);
  const labelStyle = computed(() => {
    const ret = {};
    if (elForm.labelPosition === "top")
      return ret;
    const labelWidth = props2.labelWidth || elForm.labelWidth;
    if (labelWidth) {
      ret.width = labelWidth;
    }
    return ret;
  });
  const updateComputedLabelWidth = (width) => {
    computedLabelWidth.value = width ? `${width}px` : "";
  };
  return {
    labelFor,
    labelStyle,
    computedLabelWidth,
    updateComputedLabelWidth
  };
}
function useFontSize(props2, elForm) {
  const _this = getCurrentInstance();
  const elFormItemSize = computed(() => {
    return props2.size || unref(elForm.size);
  });
  const sizeClass = computed(() => {
    return unref(elFormItemSize) || (_this.$ELEMENT || {}).size;
  });
  return {
    elFormItemSize,
    sizeClass
  };
}
function useContentStyle(props2, elForm, isNested, computedLabelWidth) {
  const contentStyle = computed(() => {
    const ret = {};
    const label = props2.label;
    if (elForm.labelPosition === "top" || elForm.inline)
      return ret;
    if (!label && !props2.labelWidth && unref(isNested))
      return ret;
    const labelWidth = props2.labelWidth || elForm.labelWidth;
    if (labelWidth === "auto") {
      if (props2.labelWidth === "auto") {
        ret.marginLeft = unref(computedLabelWidth);
      } else if (elForm.labelWidth === "auto") {
        ret.marginLeft = elForm.autoLabelWidth;
      }
    } else {
      ret.marginLeft = labelWidth;
    }
    return ret;
  });
  return {
    contentStyle
  };
}
function useFieldValue(props2, elForm) {
  const initialValue = ref();
  const fieldValue = computed(() => {
    const model = elForm.model;
    if (!model || !props2.prop) {
      return;
    }
    let path = props2.prop;
    if (path.indexOf(":") !== -1) {
      path = path.replace(/:/, ".");
    }
    return getPropByPath(model, path, true).v;
  });
  onMounted(function() {
    if (props2.prop) {
      initialValue.value = unref(fieldValue);
      if (Array.isArray(initialValue.value)) {
        initialValue.value = initialValue.value.slice();
      }
    }
  });
  return {
    fieldValue,
    initialValue
  };
}
function useDispatchFiled(props2) {
  const {
    dispatch
  } = useEmitter();
  const {
    proxy
  } = getCurrentInstance();
  onMounted(() => {
    if (props2.prop) {
      dispatch("el.form.addField", proxy);
    }
  });
  onBeforeUnmount(() => {
    dispatch("el.form.removeField", proxy);
  });
}
function useValidateEvent(props2, validate2, getRules, validateDisabled) {
  const {
    on: on2,
    off: off2
  } = useEmitter();
  const onFieldBlur = () => {
    validate2("blur");
  };
  const onFieldChange = () => {
    if (unref(validateDisabled)) {
      validateDisabled.value = false;
      return;
    }
    validate2("change");
  };
  const addValidateEvents = () => {
    const rules2 = getRules();
    if (rules2.length || props2.required !== void 0) {
      on2("el.form.blur", onFieldBlur);
      on2("el.form.change", onFieldChange);
    }
  };
  onMounted(() => {
    if (props2.prop) {
      addValidateEvents();
    }
  });
  return {
    removeValidateEvents: off2,
    addValidateEvents
  };
}
var useIsRequired = (getRules) => {
  return computed(() => {
    const rules2 = getRules();
    let isRequired = false;
    if (rules2 && rules2.length) {
      rules2.every((rule) => {
        if (rule.required) {
          isRequired = true;
          return false;
        }
        return true;
      });
    }
    return isRequired;
  });
};
var useRules = (props2, elForm) => {
  const getRules = () => {
    let formRules = elForm.rules;
    const selfRules = props2.rules;
    const requiredRule = props2.required !== void 0 ? {
      required: !!props2.required
    } : [];
    const prop = getPropByPath(formRules, props2.prop || "");
    formRules = formRules ? prop.o[props2.prop || ""] || prop.v : [];
    return [].concat(selfRules || formRules || []).concat(requiredRule);
  };
  const getFilteredRule = (trigger) => {
    const rules2 = getRules();
    return rules2.filter((rule) => {
      if (!rule.trigger || trigger === "")
        return true;
      if (Array.isArray(rule.trigger)) {
        return rule.trigger.indexOf(trigger) > -1;
      } else {
        return rule.trigger === trigger;
      }
    }).map((rule) => merge({}, rule));
  };
  return {
    getRules,
    getFilteredRule
  };
};
function useValidate(props2, elForm, getFilteredRule) {
  const {
    fieldValue,
    initialValue
  } = useFieldValue(props2, elForm);
  const {
    broadcast: broadcast2
  } = useEmitter();
  const validateState = ref("");
  const validateMessage = ref("");
  const validateDisabled = ref(false);
  watch(() => props2.error, (value) => {
    validateMessage.value = value;
    validateState.value = value ? "error" : "";
  }, {
    immediate: true
  });
  watch(() => props2.validateStatus, (value) => validateState.value = value);
  const validate2 = (trigger, callback = noop$1) => {
    validateDisabled.value = false;
    const rules2 = getFilteredRule(trigger);
    validateState.value = "validating";
    if ((!rules2 || rules2.length === 0) && props2.required === void 0) {
      callback();
      return true;
    }
    const descriptor = {};
    if (rules2 && rules2.length > 0) {
      rules2.forEach((rule) => {
        delete rule.trigger;
      });
    }
    descriptor[props2.prop] = rules2;
    const validator = new Schema(descriptor);
    const model = {};
    model[props2.prop] = unref(fieldValue);
    validator.validate(model, {
      firstFields: true
    }, (errors, invalidFields) => {
      validateState.value = !errors ? "success" : "error";
      validateMessage.value = errors ? errors[0].message : "";
      callback(validateMessage.value, invalidFields);
      elForm && elForm.emit("validate", props2.prop, !errors, validateMessage.value || null);
    });
  };
  const clearValidate = () => {
    validateState.value = "";
    validateMessage.value = "";
    validateDisabled.value = false;
  };
  const resetField = () => {
    validateState.value = "";
    validateMessage.value = "";
    const model = elForm.model;
    const value = unref(fieldValue);
    let path = props2.prop;
    if (path.indexOf(":") !== -1) {
      path = path.replace(/:/, ".");
    }
    const prop = getPropByPath(model, path, true);
    validateDisabled.value = true;
    if (Array.isArray(value)) {
      prop.o[prop.k] = [].concat(initialValue.value);
    } else {
      prop.o[prop.k] = initialValue.value;
    }
    nextTick(() => {
      validateDisabled.value = false;
    });
    broadcast2("fieldReset", initialValue.value);
  };
  return {
    validateState,
    validateMessage,
    validateDisabled,
    validate: validate2,
    clearValidate,
    resetField
  };
}
function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_label_wrap = resolveComponent("label-wrap");
  return openBlock(), createBlock("div", {
    class: ["el-form-item", [{
      "el-form-item--feedback": $setup.elForm && $setup.elForm.statusIcon,
      "is-error": $setup.validateState === "error",
      "is-validating": $setup.validateState === "validating",
      "is-success": $setup.validateState === "success",
      "is-required": $setup.isRequired || $props.required,
      "is-no-asterisk": $setup.elForm && $setup.elForm.hideRequiredAsterisk
    }, $setup.sizeClass ? "el-form-item--" + $setup.sizeClass : ""]]
  }, [createVNode(_component_label_wrap, {
    "is-auto-width": $setup.labelStyle && $setup.labelStyle.width === "auto",
    "update-all": $setup.elForm.labelWidth === "auto"
  }, {
    default: withCtx(() => [$props.label || _ctx.$slots.label ? (openBlock(), createBlock("label", {
      key: 0,
      for: $setup.labelFor,
      class: "el-form-item__label",
      style: $setup.labelStyle
    }, [renderSlot(_ctx.$slots, "label", {}, () => [createTextVNode(toDisplayString($props.label + $setup.elForm.labelSuffix), 1)])], 12, ["for"])) : createCommentVNode("v-if", true)]),
    _: 1
  }, 8, ["is-auto-width", "update-all"]), createVNode("div", {
    class: "el-form-item__content",
    style: $setup.contentStyle
  }, [renderSlot(_ctx.$slots, "default"), createVNode(Transition, {
    name: "el-zoom-in-top"
  }, {
    default: withCtx(() => [$setup.validateState === "error" && $props.showMessage && $setup.elForm.showMessage ? renderSlot(_ctx.$slots, "error", {
      key: 0,
      error: $setup.validateMessage
    }, () => [createVNode("div", {
      class: ["el-form-item__error", {
        "el-form-item__error--inline": typeof $props.inlineMessage === "boolean" ? $props.inlineMessage : $setup.elForm && $setup.elForm.inlineMessage || false
      }]
    }, toDisplayString($setup.validateMessage), 3)]) : createCommentVNode("v-if", true)]),
    _: 1
  })], 4)], 2);
}
script$R.render = render$K;
script$R.__file = "packages/form-item/FormItem.vue";
script$R.install = function(app) {
  app.component(script$R.name, script$R);
};
var getCell = function(event) {
  let cell = event.target;
  while (cell && cell.tagName.toUpperCase() !== "HTML") {
    if (cell.tagName.toUpperCase() === "TD") {
      return cell;
    }
    cell = cell.parentNode;
  }
  return null;
};
var isObject$1 = function(obj) {
  return obj !== null && typeof obj === "object";
};
var orderBy = function(array3, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array3;
  }
  if (typeof reverse === "string") {
    reverse = reverse === "descending" ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function(value, index2) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function(by) {
        if (typeof by === "string") {
          return getValueByPath(value, by);
        } else {
          return by(value, index2, array3);
        }
      });
    }
    if (sortKey !== "$key") {
      if (isObject$1(value) && "$value" in value)
        value = value.$value;
    }
    return [isObject$1(value) ? getValueByPath(value, sortKey) : value];
  };
  const compare = function(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array3.map(function(value, index2) {
    return {
      value,
      index: index2,
      key: getKey ? getKey(value, index2) : null
    };
  }).sort(function(a, b) {
    let order = compare(a, b);
    if (!order) {
      order = a.index - b.index;
    }
    return order * reverse;
  }).map((item) => item.value);
};
var getColumnById = function(table, columnId) {
  let column = null;
  table.columns.forEach(function(item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
var getColumnByKey = function(table, columnKey) {
  let column = null;
  for (let i = 0; i < table.columns.length; i++) {
    const item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};
var getColumnByCell = function(table, cell) {
  const matches = (cell.className || "").match(/el-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};
var getRowIdentity = (row, rowKey) => {
  if (!row)
    throw new Error("row is required when get row identity");
  if (typeof rowKey === "string") {
    if (rowKey.indexOf(".") < 0) {
      return row[rowKey];
    }
    const key = rowKey.split(".");
    let current = row;
    for (let i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === "function") {
    return rowKey.call(null, row);
  }
};
var getKeysMap = function(array3, rowKey) {
  const arrayMap = {};
  (array3 || []).forEach((row, index2) => {
    arrayMap[getRowIdentity(row, rowKey)] = {
      row,
      index: index2
    };
  });
  return arrayMap;
};
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function mergeOptions$1(defaults2, config) {
  const options = {};
  let key;
  for (key in defaults2) {
    options[key] = defaults2[key];
  }
  for (key in config) {
    if (hasOwn(config, key)) {
      const value = config[key];
      if (typeof value !== "undefined") {
        options[key] = value;
      }
    }
  }
  return options;
}
function parseWidth(width) {
  if (width !== void 0) {
    width = parseInt(width, 10);
    if (isNaN(width)) {
      width = null;
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (typeof minWidth !== "undefined") {
    minWidth = parseWidth(minWidth);
    if (isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
function parseHeight(height) {
  if (typeof height === "number") {
    return height;
  }
  if (typeof height === "string") {
    if (/^\d+(?:px)?$/.test(height)) {
      return parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function toggleRowStatus(statusArr, row, newVal) {
  let changed = false;
  const index2 = statusArr.indexOf(row);
  const included = index2 !== -1;
  const addRow = () => {
    statusArr.push(row);
    changed = true;
  };
  const removeRow = () => {
    statusArr.splice(index2, 1);
    changed = true;
  };
  if (typeof newVal === "boolean") {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}
function walkTreeNode(root2, cb, childrenKey = "children", lazyKey = "hasChildren") {
  const isNil = (array3) => !(Array.isArray(array3) && array3.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children2 = item[childrenKey];
      if (!isNil(children2)) {
        _walker(item, children2, level + 1);
      }
    });
  }
  root2.forEach((item) => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}
function useExpand$1(watcherData) {
  const instance2 = getCurrentInstance();
  const defaultExpandAll = ref(false);
  const expandRows = ref([]);
  const updateExpandRows = () => {
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    if (defaultExpandAll.value) {
      expandRows.value = data.slice();
    } else if (rowKey) {
      const expandRowsMap = getKeysMap(expandRows.value, rowKey);
      expandRows.value = data.reduce((prev, row) => {
        const rowId = getRowIdentity(row, rowKey);
        const rowInfo = expandRowsMap[rowId];
        if (rowInfo) {
          prev.push(row);
        }
        return prev;
      }, []);
    } else {
      expandRows.value = [];
    }
  };
  const toggleRowExpansion = (row, expanded) => {
    const changed = toggleRowStatus(expandRows.value, row, expanded);
    if (changed) {
      instance2.emit("expand-change", row, expandRows.value.slice());
      instance2.store.scheduleLayout();
    }
  };
  const setExpandRowKeys = (rowKeys) => {
    instance2.store.assertRowKey();
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    const keysMap = getKeysMap(data, rowKey);
    expandRows.value = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur];
      if (info) {
        prev.push(info.row);
      }
      return prev;
    }, []);
  };
  const isRowExpanded = (row) => {
    const rowKey = watcherData.rowKey.value;
    if (rowKey) {
      const expandMap = getKeysMap(expandRows.value, rowKey);
      return !!expandMap[getRowIdentity(row, rowKey)];
    }
    return expandRows.value.indexOf(row) !== -1;
  };
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    states: {
      expandRows,
      defaultExpandAll
    }
  };
}
function useCurrent(watcherData) {
  const instance2 = getCurrentInstance();
  const _currentRowKey = ref(null);
  const currentRow = ref(null);
  const setCurrentRowKey = (key) => {
    instance2.store.assertRowKey();
    _currentRowKey.value = key;
    setCurrentRowByKey(key);
  };
  const restoreCurrentRowKey = () => {
    _currentRowKey.value = null;
  };
  const setCurrentRowByKey = (key) => {
    const {
      data = [],
      rowKey
    } = watcherData;
    let _currentRow = null;
    if (rowKey.value) {
      _currentRow = arrayFind(unref(data), (item) => getRowIdentity(item, rowKey.value) === key);
    }
    currentRow.value = _currentRow;
  };
  const updateCurrentRow = (_currentRow) => {
    const oldCurrentRow = currentRow.value;
    if (_currentRow && _currentRow !== oldCurrentRow) {
      currentRow.value = _currentRow;
      instance2.emit("current-change", currentRow.value, oldCurrentRow);
      return;
    }
    if (!_currentRow && oldCurrentRow) {
      currentRow.value = null;
      instance2.emit("current-change", null, oldCurrentRow);
    }
  };
  const updateCurrentRowData = () => {
    const rowKey = watcherData.rowKey.value;
    const data = watcherData.data.value || [];
    const oldCurrentRow = currentRow.value;
    if (data.indexOf(oldCurrentRow) === -1 && oldCurrentRow) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
        setCurrentRowByKey(currentRowKey);
      } else {
        currentRow.value = null;
      }
      if (currentRow.value === null) {
        instance2.emit("current-change", null, oldCurrentRow);
      }
    } else if (_currentRowKey.value) {
      setCurrentRowByKey(_currentRowKey.value);
      restoreCurrentRowKey();
    }
  };
  return {
    setCurrentRowKey,
    restoreCurrentRowKey,
    setCurrentRowByKey,
    updateCurrentRow,
    updateCurrentRowData,
    states: {
      _currentRowKey,
      currentRow
    }
  };
}
function useTree(watcherData) {
  const expandRowKeys = ref([]);
  const treeData = ref({});
  const indent = ref(16);
  const lazy = ref(false);
  const lazyTreeNodeMap = ref({});
  const lazyColumnIdentifier = ref("hasChildren");
  const childrenColumnName = ref("children");
  const instance2 = getCurrentInstance();
  const normalizedData = computed(() => {
    if (!watcherData.rowKey.value)
      return {};
    const data = watcherData.data.value || [];
    return normalize(data);
  });
  const normalizedLazyNode = computed(() => {
    const rowKey = watcherData.rowKey.value;
    const keys = Object.keys(lazyTreeNodeMap.value);
    const res = {};
    if (!keys.length)
      return res;
    keys.forEach((key) => {
      if (lazyTreeNodeMap.value[key].length) {
        const item = {
          children: []
        };
        lazyTreeNodeMap.value[key].forEach((row) => {
          const currentRowKey = getRowIdentity(row, rowKey);
          item.children.push(currentRowKey);
          if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
            res[currentRowKey] = {
              children: []
            };
          }
        });
        res[key] = item;
      }
    });
    return res;
  });
  const normalize = (data) => {
    const rowKey = watcherData.rowKey.value;
    const res = {};
    walkTreeNode(data, (parent, children, level) => {
      const parentId = getRowIdentity(parent, rowKey);
      if (Array.isArray(children)) {
        res[parentId] = {
          children: children.map((row) => getRowIdentity(row, rowKey)),
          level
        };
      } else if (lazy.value) {
        res[parentId] = {
          children: [],
          lazy: true,
          level
        };
      }
    }, childrenColumnName.value, lazyColumnIdentifier.value);
    return res;
  };
  const updateTreeData = () => {
    var _instance$store2;
    const nested = normalizedData.value;
    const normalizedLazyNode_ = normalizedLazyNode.value;
    const keys = Object.keys(nested);
    const newTreeData = {};
    if (keys.length) {
      var _instance$store;
      const oldTreeData = unref(treeData);
      const defaultExpandAll = (_instance$store = instance2.store) === null || _instance$store === void 0 ? void 0 : _instance$store.states.defaultExpandAll.value;
      const rootLazyRowKeys = [];
      const getExpanded = (oldValue, key) => {
        const included = defaultExpandAll || expandRowKeys.value && expandRowKeys.value.indexOf(key) !== -1;
        return !!(oldValue && oldValue.expanded || included);
      };
      keys.forEach((key) => {
        const oldValue = oldTreeData[key];
        const newValue = __spreadValues({}, nested[key]);
        newValue.expanded = getExpanded(oldValue, key);
        if (newValue.lazy) {
          const {
            loaded = false,
            loading = false
          } = oldValue || {};
          newValue.loaded = !!loaded;
          newValue.loading = !!loading;
          rootLazyRowKeys.push(key);
        }
        newTreeData[key] = newValue;
      });
      const lazyKeys = Object.keys(normalizedLazyNode_);
      if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
        lazyKeys.forEach((key) => {
          const oldValue = oldTreeData[key];
          const lazyNodeChildren = normalizedLazyNode_[key].children;
          if (rootLazyRowKeys.indexOf(key) !== -1) {
            if (newTreeData[key].children.length !== 0) {
              throw new Error("[ElTable]children must be an empty array.");
            }
            newTreeData[key].children = lazyNodeChildren;
          } else {
            const {
              loaded = false,
              loading = false
            } = oldValue || {};
            newTreeData[key] = {
              lazy: true,
              loaded: !!loaded,
              loading: !!loading,
              expanded: getExpanded(oldValue, key),
              children: lazyNodeChildren,
              level: ""
            };
          }
        });
      }
    }
    treeData.value = newTreeData;
    (_instance$store2 = instance2.store) === null || _instance$store2 === void 0 ? void 0 : _instance$store2.updateTableScrollY();
  };
  watch(() => normalizedData.value, updateTreeData);
  watch(() => normalizedLazyNode.value, updateTreeData);
  const updateTreeExpandKeys = (value) => {
    expandRowKeys.value = value;
    updateTreeData();
  };
  const toggleTreeExpansion = (row, expanded) => {
    instance2.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = id && treeData.value[id];
    if (id && data && "expanded" in data) {
      const oldExpanded = data.expanded;
      expanded = typeof expanded === "undefined" ? !data.expanded : expanded;
      treeData.value[id].expanded = expanded;
      if (oldExpanded !== expanded) {
        instance2.emit("expand-change", row, expanded);
      }
      instance2.store.updateTableScrollY();
    }
  };
  const loadOrToggle = (row) => {
    instance2.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = treeData.value[id];
    if (lazy.value && data && "loaded" in data && !data.loaded) {
      loadData(row, id, data);
    } else {
      toggleTreeExpansion(row, void 0);
    }
  };
  const loadData = (row, key, treeNode) => {
    const {
      load
    } = instance2.props;
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true;
      load(row, treeNode, (data) => {
        if (!Array.isArray(data)) {
          throw new Error("[ElTable] data must be an array");
        }
        treeData.value[key].loading = false;
        treeData.value[key].loaded = true;
        treeData.value[key].expanded = true;
        if (data.length) {
          lazyTreeNodeMap.value[key] = data;
        }
        instance2.emit("expand-change", row, true);
      });
    }
  };
  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName
    }
  };
}
var sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === "string") {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
var doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
function useWatcher$1() {
  const instance2 = getCurrentInstance();
  const rowKey = ref(null);
  const data = ref([]);
  const _data = ref([]);
  const isComplex = ref(false);
  const _columns = ref([]);
  const originColumns = ref([]);
  const columns = ref([]);
  const fixedColumns = ref([]);
  const rightFixedColumns = ref([]);
  const leafColumns = ref([]);
  const fixedLeafColumns = ref([]);
  const rightFixedLeafColumns = ref([]);
  const leafColumnsLength = ref(0);
  const fixedLeafColumnsLength = ref(0);
  const rightFixedLeafColumnsLength = ref(0);
  const isAllSelected = ref(false);
  const selection = ref([]);
  const reserveSelection = ref(false);
  const selectOnIndeterminate = ref(false);
  const selectable = ref(null);
  const filters = ref({});
  const filteredData = ref(null);
  const sortingColumn = ref(null);
  const sortProp = ref(null);
  const sortOrder = ref(null);
  const hoverRow = ref(null);
  const assertRowKey = () => {
    if (!rowKey.value)
      throw new Error("[ElTable] prop row-key is required");
  };
  const updateColumns = () => {
    fixedColumns.value = _columns.value.filter((column) => column.fixed === true || column.fixed === "left");
    rightFixedColumns.value = _columns.value.filter((column) => column.fixed === "right");
    if (fixedColumns.value.length > 0 && _columns.value[0] && _columns.value[0].type === "selection" && !_columns.value[0].fixed) {
      _columns.value[0].fixed = true;
      fixedColumns.value.unshift(_columns.value[0]);
    }
    const notFixedColumns = _columns.value.filter((column) => !column.fixed);
    originColumns.value = [].concat(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
    const leafColumns2 = doFlattenColumns(notFixedColumns);
    const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
    const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
    leafColumnsLength.value = leafColumns2.length;
    fixedLeafColumnsLength.value = fixedLeafColumns2.length;
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
    columns.value = [].concat(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
    isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
  };
  const scheduleLayout = (needUpdateColumns, immediate = false) => {
    if (needUpdateColumns) {
      updateColumns();
    }
    if (immediate) {
      instance2.state.doLayout();
    } else {
      instance2.state.debouncedUpdateLayout();
    }
  };
  const isSelected = (row) => {
    return selection.value.indexOf(row) > -1;
  };
  const clearSelection = () => {
    isAllSelected.value = false;
    const oldSelection = selection.value;
    if (oldSelection.length) {
      selection.value = [];
      instance2.emit("selection-change", []);
    }
  };
  const cleanSelection = () => {
    let deleted;
    if (rowKey.value) {
      deleted = [];
      const selectedMap = getKeysMap(selection.value, rowKey.value);
      const dataMap = getKeysMap(data.value, rowKey.value);
      for (const key in selectedMap) {
        if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
          deleted.push(selectedMap[key].row);
        }
      }
    } else {
      deleted = selection.value.filter((item) => data.value.indexOf(item) === -1);
    }
    if (deleted.length) {
      const newSelection = selection.value.filter((item) => deleted.indexOf(item) === -1);
      selection.value = newSelection;
      instance2.emit("selection-change", newSelection.slice());
    }
  };
  const toggleRowSelection = (row, selected, emitChange = true) => {
    const changed = toggleRowStatus(selection.value, row, selected);
    if (changed) {
      const newSelection = (selection.value || []).slice();
      if (emitChange) {
        instance2.emit("select", newSelection, row);
      }
      instance2.emit("selection-change", newSelection);
    }
  };
  const _toggleAllSelection = () => {
    const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
    isAllSelected.value = value;
    let selectionChanged = false;
    data.value.forEach((row, index2) => {
      if (selectable.value) {
        if (selectable.value.call(null, row, index2) && toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true;
        }
      }
    });
    if (selectionChanged) {
      instance2.emit("selection-change", selection.value ? selection.value.slice() : []);
    }
    instance2.emit("select-all", selection.value);
  };
  const updateSelectionByRowKey = () => {
    const selectedMap = getKeysMap(selection.value, rowKey.value);
    data.value.forEach((row) => {
      const rowId = getRowIdentity(row, rowKey.value);
      const rowInfo = selectedMap[rowId];
      if (rowInfo) {
        selection.value[rowInfo.index] = row;
      }
    });
  };
  const updateAllSelected = () => {
    var _data$value;
    if (((_data$value = data.value) === null || _data$value === void 0 ? void 0 : _data$value.length) === 0) {
      isAllSelected.value = false;
      return;
    }
    let selectedMap;
    if (rowKey.value) {
      selectedMap = getKeysMap(selection.value, rowKey.value);
    }
    const isSelected2 = function(row) {
      if (selectedMap) {
        return !!selectedMap[getRowIdentity(row, rowKey.value)];
      } else {
        return selection.value.indexOf(row) !== -1;
      }
    };
    let isAllSelected_ = true;
    let selectedCount = 0;
    for (let i = 0, j = (data.value || []).length; i < j; i++) {
      const item = data.value[i];
      const isRowSelectable = selectable.value && selectable.value.call(null, item, i);
      if (!isSelected2(item)) {
        if (!selectable.value || isRowSelectable) {
          isAllSelected_ = false;
          break;
        }
      } else {
        selectedCount++;
      }
    }
    if (selectedCount === 0)
      isAllSelected_ = false;
    isAllSelected.value = isAllSelected_;
  };
  const updateFilters = (columns2, values) => {
    if (!Array.isArray(columns2)) {
      columns2 = [columns2];
    }
    const filters_ = {};
    columns2.forEach((col) => {
      filters.value[col.id] = values;
      filters_[col.columnKey || col.id] = values;
    });
    return filters_;
  };
  const updateSort = (column, prop, order) => {
    if (sortingColumn.value && sortingColumn.value !== column) {
      sortingColumn.value.order = null;
    }
    sortingColumn.value = column;
    sortProp.value = prop;
    sortOrder.value = order;
  };
  const execFilter = () => {
    let sourceData = unref(_data);
    Object.keys(filters.value).forEach((columnId) => {
      const values = filters.value[columnId];
      if (!values || values.length === 0)
        return;
      const column = getColumnById({
        columns: columns.value
      }, columnId);
      if (column && column.filterMethod) {
        sourceData = sourceData.filter((row) => {
          return values.some((value) => column.filterMethod.call(null, value, row, column));
        });
      }
    });
    filteredData.value = sourceData;
  };
  const execSort = () => {
    data.value = sortData(filteredData.value, {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value
    });
  };
  const execQuery = (ignore) => {
    if (!(ignore && ignore.filter)) {
      execFilter();
    }
    execSort();
  };
  const clearFilter = (columnKeys) => {
    const {
      tableHeader,
      fixedTableHeader,
      rightFixedTableHeader
    } = instance2.refs;
    let panels = {};
    if (tableHeader)
      panels = merge(panels, tableHeader.filterPanels);
    if (fixedTableHeader)
      panels = merge(panels, fixedTableHeader.filterPanels);
    if (rightFixedTableHeader)
      panels = merge(panels, rightFixedTableHeader.filterPanels);
    const keys = Object.keys(panels);
    if (!keys.length)
      return;
    if (typeof columnKeys === "string") {
      columnKeys = [columnKeys];
    }
    if (Array.isArray(columnKeys)) {
      const columns_ = columnKeys.map((key) => getColumnByKey({
        columns: columns.value
      }, key));
      keys.forEach((key) => {
        const column = columns_.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      instance2.store.commit("filterChange", {
        column: columns_,
        values: [],
        silent: true,
        multi: true
      });
    } else {
      keys.forEach((key) => {
        const column = columns.value.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      filters.value = {};
      instance2.store.commit("filterChange", {
        column: {},
        values: [],
        silent: true
      });
    }
  };
  const clearSort = () => {
    if (!sortingColumn.value)
      return;
    updateSort(null, null, null);
    instance2.store.commit("changeSortCondition", {
      silent: true
    });
  };
  const {
    setExpandRowKeys,
    toggleRowExpansion,
    updateExpandRows,
    states: expandStates,
    isRowExpanded
  } = useExpand$1({
    data,
    rowKey
  });
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
    loadOrToggle,
    states: treeStates
  } = useTree({
    data,
    rowKey
  });
  const {
    updateCurrentRowData,
    updateCurrentRow,
    setCurrentRowKey,
    states: currentData
  } = useCurrent({
    data,
    rowKey
  });
  const setExpandRowKeysAdapter = (val) => {
    setExpandRowKeys(val);
    updateTreeExpandKeys(val);
  };
  const toggleRowExpansionAdapter = (row, expanded) => {
    const hasExpandColumn = columns.value.some(({
      type: type2
    }) => type2 === "expand");
    if (hasExpandColumn) {
      toggleRowExpansion(row, expanded);
    } else {
      toggleTreeExpansion(row, expanded);
    }
  };
  return {
    assertRowKey,
    updateColumns,
    scheduleLayout,
    isSelected,
    clearSelection,
    cleanSelection,
    toggleRowSelection,
    _toggleAllSelection,
    updateSelectionByRowKey,
    updateAllSelected,
    updateFilters,
    updateCurrentRow,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    toggleRowExpansion,
    setExpandRowKeysAdapter,
    setCurrentRowKey,
    toggleRowExpansionAdapter,
    isRowExpanded,
    updateExpandRows,
    updateCurrentRowData,
    loadOrToggle,
    states: __spreadValues(__spreadValues(__spreadValues({
      rowKey,
      data,
      _data,
      isComplex,
      _columns,
      originColumns,
      columns,
      fixedColumns,
      rightFixedColumns,
      leafColumns,
      fixedLeafColumns,
      rightFixedLeafColumns,
      leafColumnsLength,
      fixedLeafColumnsLength,
      rightFixedLeafColumnsLength,
      isAllSelected,
      selection,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      filters,
      filteredData,
      sortingColumn,
      sortProp,
      sortOrder,
      hoverRow
    }, expandStates), treeStates), currentData)
  };
}
function replaceColumn(array3, column) {
  return array3.map((item) => {
    var _item$children;
    if (item.id === column.id) {
      return column;
    } else if (((_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.length) > 0) {
      item.children = replaceColumn(item.children, column);
    }
    return item;
  });
}
function useStore() {
  const instance2 = getCurrentInstance();
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states.data) !== data;
      states.data.value = data;
      states._data.value = data;
      instance2.store.execQuery();
      instance2.store.updateCurrentRowData();
      instance2.store.updateExpandRows();
      if (unref(states.reserveSelection)) {
        instance2.store.assertRowKey();
        instance2.store.updateSelectionByRowKey();
      } else {
        if (dataInstanceChanged) {
          instance2.store.clearSelection();
        } else {
          instance2.store.cleanSelection();
        }
      }
      instance2.store.updateAllSelected();
      instance2.store.updateTableScrollY();
    },
    insertColumn(states, column, index2, parent) {
      if (index2 < -1)
        return;
      const array3 = unref(states._columns);
      if (!parent) {
        array3.splice(index2, 0, column);
        states._columns.value = array3;
      } else {
        if (parent && !parent.children) {
          parent.children = [];
        }
        parent.children.push(column);
        const newColumns = replaceColumn(array3, parent);
        states._columns.value = newColumns;
      }
      if (column.type === "selection") {
        states.selectable.value = column.selectable;
        states.reserveSelection.value = column.reserveSelection;
      }
      if (instance2.$ready) {
        instance2.store.updateColumns();
        instance2.store.scheduleLayout();
      }
    },
    removeColumn(states, column, parent) {
      const array3 = unref(states._columns) || [];
      if (parent) {
        parent.children.splice(parent.children.findIndex((item) => item.id === column.id), 1);
        states._columns.value = replaceColumn(array3, parent);
      } else {
        array3.splice(array3.indexOf(column), 1);
        states._columns.value = array3;
      }
      if (instance2.$ready) {
        instance2.store.updateColumns();
        instance2.store.scheduleLayout();
      }
    },
    sort(states, options) {
      const {
        prop,
        order,
        init
      } = options;
      if (prop) {
        const column = arrayFind(unref(states.columns), (column2) => column2.property === prop);
        if (column) {
          column.order = order;
          instance2.store.updateSort(column, prop, order);
          instance2.store.commit("changeSortCondition", {
            init
          });
        }
      }
    },
    changeSortCondition(states, options) {
      const {
        sortingColumn: column,
        sortProp: prop,
        sortOrder: order
      } = states;
      if (unref(order) === null) {
        states.sortingColumn.value = null;
        states.sortProp.value = null;
      }
      const ingore = {
        filter: true
      };
      instance2.store.execQuery(ingore);
      if (!options || !(options.silent || options.init)) {
        instance2.emit("sort-change", {
          column: unref(column),
          prop: unref(prop),
          order: unref(order)
        });
      }
      instance2.store.updateTableScrollY();
    },
    filterChange(states, options) {
      const {
        column,
        values,
        silent
      } = options;
      const newFilters = instance2.store.updateFilters(column, values);
      instance2.store.execQuery();
      if (!silent) {
        instance2.emit("filter-change", newFilters);
      }
      instance2.store.updateTableScrollY();
    },
    toggleAllSelection() {
      instance2.store.toggleAllSelection();
    },
    rowSelectedChanged(states, row) {
      instance2.store.toggleRowSelection(row);
      instance2.store.updateAllSelected();
    },
    setHoverRow(states, row) {
      states.hoverRow.value = row;
    },
    setCurrentRow(states, row) {
      instance2.store.updateCurrentRow(row);
    }
  };
  const commit = function(name, ...args) {
    const mutations2 = instance2.store.mutations;
    if (mutations2[name]) {
      mutations2[name].apply(instance2, [instance2.store.states].concat(args));
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  };
  const updateTableScrollY = function() {
    nextTick(instance2.layout.updateScrollY.apply(instance2.layout));
  };
  const watcher = useWatcher$1();
  return __spreadProps(__spreadValues({}, watcher), {
    mutations,
    commit,
    updateTableScrollY
  });
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string2) {
  var index2 = string2.length;
  while (index2-- && reWhitespace.test(string2.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string2) {
  return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
}
function isObject(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
function createStore(table, initialState = {}) {
  if (!table) {
    throw new Error("Table is required.");
  }
  const store = useStore();
  store.toggleAllSelection = debounce(store._toggleAllSelection, 10);
  Object.keys(initialState).forEach((key) => {
    store.states[key].value = initialState[key];
  });
  return store;
}
var _populated = false;
var _ie;
var _firefox;
var _opera;
var _webkit;
var _chrome;
var _ie_real_version;
var _osx;
var _windows;
var _linux;
var _android;
var _win64;
var _iphone;
var _ipad;
var _native;
var _mobile;
function _populate() {
  if (_populated) {
    return;
  }
  _populated = true;
  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas);
  _win64 = !!/Win64/.exec(uas);
  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN;
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    }
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit = agent[4] ? parseFloat(agent[4]) : NaN;
    if (_webkit) {
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }
  if (os) {
    if (os[1]) {
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
      _osx = ver ? parseFloat(ver[1].replace("_", ".")) : true;
    } else {
      _osx = false;
    }
    _windows = !!os[2];
    _linux = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}
var UserAgent_DEPRECATED = {
  ie: function() {
    return _populate() || _ie;
  },
  ieCompatibilityMode: function() {
    return _populate() || _ie_real_version > _ie;
  },
  ie64: function() {
    return UserAgent_DEPRECATED.ie() && _win64;
  },
  firefox: function() {
    return _populate() || _firefox;
  },
  opera: function() {
    return _populate() || _opera;
  },
  webkit: function() {
    return _populate() || _webkit;
  },
  safari: function() {
    return UserAgent_DEPRECATED.webkit();
  },
  chrome: function() {
    return _populate() || _chrome;
  },
  windows: function() {
    return _populate() || _windows;
  },
  osx: function() {
    return _populate() || _osx;
  },
  linux: function() {
    return _populate() || _linux;
  },
  iphone: function() {
    return _populate() || _iphone;
  },
  mobile: function() {
    return _populate() || _iphone || _ipad || _android || _mobile;
  },
  nativeApp: function() {
    return _populate() || _native;
  },
  android: function() {
    return _populate() || _android;
  },
  ipad: function() {
    return _populate() || _ipad;
  }
};
var UserAgent_DEPRECATED_1 = UserAgent_DEPRECATED;
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var ExecutionEnvironment = {
  canUseDOM,
  canUseWorkers: typeof Worker !== "undefined",
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM
};
var ExecutionEnvironment_1 = ExecutionEnvironment;
var useHasFeature;
if (ExecutionEnvironment_1.canUseDOM) {
  useHasFeature = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true;
}
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment_1.canUseDOM || capture && !("addEventListener" in document)) {
    return false;
  }
  var eventName = "on" + eventNameSuffix;
  var isSupported = eventName in document;
  if (!isSupported) {
    var element = document.createElement("div");
    element.setAttribute(eventName, "return;");
    isSupported = typeof element[eventName] === "function";
  }
  if (!isSupported && useHasFeature && eventNameSuffix === "wheel") {
    isSupported = document.implementation.hasFeature("Events.wheel", "3.0");
  }
  return isSupported;
}
var isEventSupported_1 = isEventSupported;
var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
function normalizeWheel$1(event) {
  var sX = 0, sY = 0, pX = 0, pY = 0;
  if ("detail" in event) {
    sY = event.detail;
  }
  if ("wheelDelta" in event) {
    sY = -event.wheelDelta / 120;
  }
  if ("wheelDeltaY" in event) {
    sY = -event.wheelDeltaY / 120;
  }
  if ("wheelDeltaX" in event) {
    sX = -event.wheelDeltaX / 120;
  }
  if ("axis" in event && event.axis === event.HORIZONTAL_AXIS) {
    sX = sY;
    sY = 0;
  }
  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;
  if ("deltaY" in event) {
    pY = event.deltaY;
  }
  if ("deltaX" in event) {
    pX = event.deltaX;
  }
  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }
  if (pX && !sX) {
    sX = pX < 1 ? -1 : 1;
  }
  if (pY && !sY) {
    sY = pY < 1 ? -1 : 1;
  }
  return {
    spinX: sX,
    spinY: sY,
    pixelX: pX,
    pixelY: pY
  };
}
normalizeWheel$1.getEventType = function() {
  return UserAgent_DEPRECATED_1.firefox() ? "DOMMouseScroll" : isEventSupported_1("wheel") ? "wheel" : "mousewheel";
};
var normalizeWheel_1 = normalizeWheel$1;
var normalizeWheel = normalizeWheel_1;
var mousewheelEventName$1 = isFirefox() ? "DOMMouseScroll" : "mousewheel";
var mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(mousewheelEventName$1, function(event) {
      const normalized = normalizeWheel(event);
      callback && callback(event, normalized);
    }, {
      passive: true
    });
  }
};
var Mousewheel = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value);
  }
};
var TableLayout = class {
  constructor(options) {
    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = [];
    this.fit = true;
    this.showHeader = true;
    this.height = ref(null);
    this.scrollX = ref(false);
    this.scrollY = ref(false);
    this.bodyWidth = ref(null);
    this.fixedWidth = ref(null);
    this.rightFixedWidth = ref(null);
    this.tableHeight = ref(null);
    this.headerHeight = ref(44);
    this.appendHeight = ref(0);
    this.footerHeight = ref(44);
    this.viewportHeight = ref(null);
    this.bodyHeight = ref(null);
    this.fixedBodyHeight = ref(null);
    this.gutterWidth = getScrollBarWidth();
    for (const name in options) {
      if (options.hasOwnProperty(name)) {
        if (isRef(this[name])) {
          this[name].value = options[name];
        } else {
          this[name] = options[name];
        }
      }
    }
    if (!this.table) {
      throw new Error("table is required for Table Layout");
    }
    if (!this.store) {
      throw new Error("store is required for Table Layout");
    }
  }
  updateScrollY() {
    const height = this.height.value;
    if (height === null)
      return false;
    const bodyWrapper = this.table.refs.bodyWrapper;
    if (this.table.vnode.el && bodyWrapper) {
      const body = bodyWrapper.querySelector(".el-table__body");
      const prevScrollY = this.scrollY.value;
      const scrollY = body.offsetHeight > this.bodyHeight.value;
      this.scrollY.value = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  }
  setHeight(value, prop = "height") {
    if (typeof window === void 0)
      return;
    const el = this.table.vnode.el;
    value = parseHeight(value);
    this.height.value = Number(value);
    if (!el && (value || value === 0))
      return nextTick(() => this.setHeight(value, prop));
    if (typeof value === "number") {
      el.style[prop] = value + "px";
      this.updateElsHeight();
    } else if (typeof value === "string") {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  }
  setMaxHeight(value) {
    this.setHeight(value, "max-height");
  }
  getFlattenColumns() {
    const flattenColumns = [];
    const columns = this.table.store.states.columns.value;
    columns.forEach((column) => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });
    return flattenColumns;
  }
  updateElsHeight() {
    if (!this.table.$ready)
      return nextTick(() => this.updateElsHeight());
    const {
      headerWrapper,
      appendWrapper,
      footerWrapper
    } = this.table.refs;
    this.appendHeight.value = appendWrapper ? appendWrapper.offsetHeight : 0;
    if (this.showHeader && !headerWrapper)
      return;
    const headerTrElm = headerWrapper ? headerWrapper.querySelector(".el-table__header tr") : null;
    const noneHeader = this.headerDisplayNone(headerTrElm);
    const headerHeight = this.headerHeight.value = !this.showHeader ? 0 : headerWrapper.offsetHeight;
    if (this.showHeader && !noneHeader && headerWrapper.offsetWidth > 0 && (this.table.store.states.columns.value || []).length > 0 && headerHeight < 2) {
      return nextTick(() => this.updateElsHeight());
    }
    const tableHeight = this.tableHeight.value = this.table.vnode.el.clientHeight;
    const footerHeight = this.footerHeight.value = footerWrapper ? footerWrapper.offsetHeight : 0;
    if (this.height.value !== null) {
      this.bodyHeight.value = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
    }
    this.fixedBodyHeight.value = this.scrollX.value ? this.bodyHeight.value - this.gutterWidth : this.bodyHeight.value;
    const noData = !(this.store.states.data.value && this.store.states.data.value.length);
    this.viewportHeight.value = this.scrollX.value ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight;
    this.updateScrollY();
    this.notifyObservers("scrollable");
  }
  headerDisplayNone(elm) {
    if (!elm)
      return true;
    let headerChild = elm;
    while (headerChild.tagName !== "DIV") {
      if (getComputedStyle(headerChild).display === "none") {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    if (typeof window === void 0)
      return;
    const fit = this.fit;
    const bodyWidth = this.table.vnode.el.clientWidth;
    let bodyMinWidth = 0;
    const flattenColumns = this.getFlattenColumns();
    const flexColumns = flattenColumns.filter((column) => typeof column.width !== "number");
    flattenColumns.forEach((column) => {
      if (typeof column.width === "number" && column.realWidth)
        column.realWidth = null;
    });
    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach((column) => {
        bodyMinWidth += column.width || column.minWidth || 80;
      });
      const scrollYWidth = this.scrollY.value ? this.gutterWidth : 0;
      if (bodyMinWidth <= bodyWidth - scrollYWidth) {
        this.scrollX.value = false;
        const totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;
        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          const allColumnsWidth = flexColumns.reduce((prev, column) => prev + (column.minWidth || 80), 0);
          const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          let noneFirstWidth = 0;
          flexColumns.forEach((column, index2) => {
            if (index2 === 0)
              return;
            const flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = (column.minWidth || 80) + flexWidth;
          });
          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        this.scrollX.value = true;
        flexColumns.forEach(function(column) {
          column.realWidth = column.minWidth;
        });
      }
      this.bodyWidth.value = Math.max(bodyMinWidth, bodyWidth);
      this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else {
      flattenColumns.forEach((column) => {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = column.width || column.minWidth;
        }
        bodyMinWidth += column.realWidth;
      });
      this.scrollX.value = bodyMinWidth > bodyWidth;
      this.bodyWidth.value = bodyMinWidth;
    }
    const fixedColumns = this.store.states.fixedColumns.value;
    if (fixedColumns.length > 0) {
      let fixedWidth = 0;
      fixedColumns.forEach(function(column) {
        fixedWidth += column.realWidth || column.width;
      });
      this.fixedWidth.value = fixedWidth;
    }
    const rightFixedColumns = this.store.states.rightFixedColumns.value;
    if (rightFixedColumns.length > 0) {
      let rightFixedWidth = 0;
      rightFixedColumns.forEach(function(column) {
        rightFixedWidth += column.realWidth || column.width;
      });
      this.rightFixedWidth.value = rightFixedWidth;
    }
    this.notifyObservers("columns");
    this.updateElsHeight();
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index2 = this.observers.indexOf(observer);
    if (index2 !== -1) {
      this.observers.splice(index2, 1);
    }
  }
  notifyObservers(event) {
    const observers2 = this.observers;
    observers2.forEach((observer) => {
      var _observer$state, _observer$state2;
      switch (event) {
        case "columns":
          (_observer$state = observer.state) === null || _observer$state === void 0 ? void 0 : _observer$state.onColumnsChange(this);
          break;
        case "scrollable":
          (_observer$state2 = observer.state) === null || _observer$state2 === void 0 ? void 0 : _observer$state2.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${event}.`);
      }
    });
  }
};
var dropdowns = [];
!(typeof window === "undefined") && document.addEventListener("click", function(event) {
  dropdowns.forEach(function(dropdown) {
    var target = event.target;
    if (!dropdown || !dropdown.$el)
      return;
    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return;
    }
    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
  });
});
var Dropdown = {
  open(instance2) {
    if (instance2) {
      dropdowns.push(instance2);
    }
  },
  close(instance2) {
    var index2 = dropdowns.indexOf(instance2);
    if (index2 !== -1) {
      dropdowns.splice(instance2, 1);
    }
  }
};
var script$Q = {
  name: "ElTableFilterPanel",
  mixins: [Popper, Locale],
  directives: {
    Clickoutside
  },
  components: {
    ElCheckbox: script$1o,
    ElCheckboxGroup: script$1m,
    ElScrollbar
  },
  props: {
    placement: {
      type: String,
      default: "bottom-end"
    }
  },
  methods: {
    isActive(filter) {
      return filter.value === this.filterValue;
    },
    handleOutsideClick() {
      setTimeout(() => {
        this.showPopper = false;
      }, 16);
    },
    handleConfirm() {
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleSelect(filterValue) {
      this.filterValue = filterValue;
      if (typeof filterValue !== "undefined" && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }
      this.handleOutsideClick();
    },
    confirmFilter(filteredValue) {
      this.table.store.commit("filterChange", {
        column: this.column,
        values: filteredValue
      });
      this.table.store.updateAllSelected();
    }
  },
  data() {
    return {
      table: null,
      cell: null,
      column: null
    };
  },
  computed: {
    filters() {
      return this.column && this.column.filters;
    },
    filterValue: {
      get() {
        return (this.column.filteredValue || [])[0];
      },
      set(value) {
        if (this.filteredValue) {
          if (typeof value !== "undefined" && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      }
    },
    filteredValue: {
      get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      }
    },
    multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    }
  },
  mounted() {
    this.popperElm = this.$el;
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener("scroll", () => {
      this.updatePopper();
    });
    this.$watch("showPopper", (value) => {
      if (this.column)
        this.column.filterOpened = value;
      if (value) {
        Dropdown.open(this);
      } else {
        Dropdown.close(this);
      }
    });
  },
  watch: {
    showPopper(val) {
      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < PopupManager.zIndex) {
        this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
      }
    }
  }
};
var _hoisted_1$z = {
  key: 0,
  class: "el-table-filter"
};
var _hoisted_2$l = {
  class: "el-table-filter__content"
};
var _hoisted_3$h = {
  class: "el-table-filter__bottom"
};
var _hoisted_4$b = {
  key: 1,
  class: "el-table-filter"
};
var _hoisted_5$7 = {
  class: "el-table-filter__list"
};
function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(Transition, {
    name: "el-zoom-in-top"
  }, {
    default: withCtx(() => [$options.multiple ? withDirectives((openBlock(), createBlock("div", _hoisted_1$z, [createVNode("div", _hoisted_2$l, [createVNode(_component_el_scrollbar, {
      "wrap-class": "el-table-filter__wrap"
    }, {
      default: withCtx(() => [createVNode(_component_el_checkbox_group, {
        class: "el-table-filter__checkbox-group",
        modelValue: $options.filteredValue,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.filteredValue = $event)
      }, {
        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($options.filters, (filter) => {
          return openBlock(), createBlock(_component_el_checkbox, {
            key: filter.value,
            label: filter.value
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(filter.text), 1)]),
            _: 2
          }, 1032, ["label"]);
        }), 128))]),
        _: 1
      }, 8, ["modelValue"])]),
      _: 1
    })]), createVNode("div", _hoisted_3$h, [createVNode("button", {
      onClick: _cache[2] || (_cache[2] = (...args) => $options.handleConfirm && $options.handleConfirm(...args)),
      class: {
        "is-disabled": $options.filteredValue.length === 0
      },
      disabled: $options.filteredValue.length === 0
    }, toDisplayString(_ctx.t("el.table.confirmFilter")), 11, ["disabled"]), createVNode("button", {
      onClick: _cache[3] || (_cache[3] = (...args) => $options.handleReset && $options.handleReset(...args))
    }, toDisplayString(_ctx.t("el.table.resetFilter")), 1)])], 512)), [[_directive_clickoutside, $options.handleOutsideClick], [vShow, _ctx.showPopper]]) : withDirectives((openBlock(), createBlock("div", _hoisted_4$b, [createVNode("ul", _hoisted_5$7, [createVNode("li", {
      class: ["el-table-filter__list-item", {
        "is-active": $options.filterValue === void 0 || $options.filterValue === null
      }],
      onClick: _cache[4] || (_cache[4] = ($event) => $options.handleSelect(null))
    }, toDisplayString(_ctx.t("el.table.clearFilter")), 3), (openBlock(true), createBlock(Fragment, null, renderList($options.filters, (filter) => {
      return openBlock(), createBlock("li", {
        class: ["el-table-filter__list-item", {
          "is-active": $options.isActive(filter)
        }],
        label: filter.value,
        key: filter.value,
        onClick: ($event) => $options.handleSelect(filter.value)
      }, toDisplayString(filter.text), 11, ["label", "onClick"]);
    }), 128))])], 512)), [[_directive_clickoutside, $options.handleOutsideClick], [vShow, _ctx.showPopper]])]),
    _: 1
  });
}
script$Q.render = render$J;
script$Q.__file = "packages/table/src/filter-panel.vue";
function useLayoutObserver(root2) {
  const instance2 = getCurrentInstance();
  onBeforeMount(() => {
    tableLayout.value.addObserver(instance2);
  });
  onMounted(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUpdated(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUnmounted(() => {
    tableLayout.value.removeObserver(instance2);
  });
  const tableLayout = computed(() => {
    const layout = root2.layout;
    if (!layout) {
      throw new Error("Can not find table layout.");
    }
    return layout;
  });
  const onColumnsChange = (layout) => {
    nextTick(() => {
      var _root$vnode$el;
      const cols = (_root$vnode$el = root2.vnode.el) === null || _root$vnode$el === void 0 ? void 0 : _root$vnode$el.querySelectorAll("colgroup > col");
      if (!cols || !cols.length)
        return;
      const flattenColumns = layout.getFlattenColumns();
      const columnsMap = {};
      flattenColumns.forEach((column) => {
        columnsMap[column.id] = column;
      });
      for (let i = 0, j = cols.length; i < j; i++) {
        const col = cols[i];
        const name = col.getAttribute("name");
        const column = columnsMap[name];
        if (column) {
          col.setAttribute("width", column.realWidth || column.width);
        }
      }
    });
  };
  const onScrollableChange = (layout) => {
    nextTick(() => {
      var _root$vnode$el2;
      const cols = (_root$vnode$el2 = root2.vnode.el) === null || _root$vnode$el2 === void 0 ? void 0 : _root$vnode$el2.querySelectorAll("colgroup > col[name=gutter]");
      for (let i = 0, j = cols.length; i < j; i++) {
        const col = cols[i];
        col.setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
      }
      const ths = root2.vnode.el.querySelectorAll("th.gutter");
      for (let i = 0, j = ths.length; i < j; i++) {
        const th = ths[i];
        th.style.width = layout.scrollY.value ? layout.gutterWidth + "px" : "0";
        th.style.display = layout.scrollY.value ? "" : "none";
      }
    });
  };
  return {
    tableLayout: tableLayout.value,
    onColumnsChange,
    onScrollableChange
  };
}
function useEvent(props2, emit) {
  const instance2 = getCurrentInstance();
  const parent = instance2.parent;
  const handleFilterClick = (event) => {
    event.stopPropagation();
    return;
  };
  const handleHeaderClick = (event, column) => {
    if (!column.filters && column.sortable) {
      handleSortClick(event, column, false);
    } else if (column.filterable && !column.sortable) {
      handleFilterClick(event);
    }
    parent.emit("header-click", column, event);
  };
  const handleHeaderContextMenu = (event, column) => {
    parent.emit("header-contextmenu", column, event);
  };
  const draggingColumn = ref(null);
  const dragging = ref(false);
  const dragState = ref({});
  const handleMouseDown = (event, column) => {
    if (typeof window === void 0)
      return;
    if (column.children && column.children.length > 0)
      return;
    if (draggingColumn.value && props2.border) {
      dragging.value = true;
      const table = parent;
      emit("set-drag-visible", true);
      const tableEl = table.vnode.el;
      const tableLeft = tableEl.getBoundingClientRect().left;
      const columnEl = instance2.vnode.el.querySelector(`th.${column.id}`);
      const columnRect = columnEl.getBoundingClientRect();
      const minLeft = columnRect.left - tableLeft + 30;
      addClass(columnEl, "noclick");
      dragState.value = {
        startMouseLeft: event.clientX,
        startLeft: columnRect.right - tableLeft,
        startColumnLeft: columnRect.left - tableLeft,
        tableLeft
      };
      const resizeProxy = table.refs.resizeProxy;
      resizeProxy.style.left = dragState.value.startLeft + "px";
      document.onselectstart = function() {
        return false;
      };
      document.ondragstart = function() {
        return false;
      };
      const handleMouseMove2 = (event2) => {
        const deltaLeft = event2.clientX - dragState.value.startMouseLeft;
        const proxyLeft = dragState.value.startLeft + deltaLeft;
        resizeProxy.style.left = Math.max(minLeft, proxyLeft) + "px";
      };
      const handleMouseUp = () => {
        if (dragging.value) {
          const {
            startColumnLeft,
            startLeft
          } = dragState.value;
          const finalLeft = parseInt(resizeProxy.style.left, 10);
          const columnWidth = finalLeft - startColumnLeft;
          column.width = column.realWidth = columnWidth;
          table.emit("header-dragend", column.width, startLeft - startColumnLeft, column, event);
          props2.store.scheduleLayout(false, true);
          document.body.style.cursor = "";
          dragging.value = false;
          draggingColumn.value = null;
          dragState.value = {};
          emit("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", handleMouseMove2);
        document.removeEventListener("mouseup", handleMouseUp);
        document.onselectstart = null;
        document.ondragstart = null;
        setTimeout(function() {
          removeClass(columnEl, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", handleMouseMove2);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };
  const handleMouseMove = (event, column) => {
    if (column.children && column.children.length > 0)
      return;
    let target = event.target;
    while (target && target.tagName !== "TH") {
      target = target.parentNode;
    }
    if (!column || !column.resizable)
      return;
    if (!dragging.value && props2.border) {
      const rect = target.getBoundingClientRect();
      const bodyStyle = document.body.style;
      if (rect.width > 12 && rect.right - event.pageX < 8) {
        bodyStyle.cursor = "col-resize";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "col-resize";
        }
        draggingColumn.value = column;
      } else if (!dragging.value) {
        bodyStyle.cursor = "";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "pointer";
        }
        draggingColumn.value = null;
      }
    }
  };
  const handleMouseOut = () => {
    if (typeof window === void 0)
      return;
    document.body.style.cursor = "";
  };
  const toggleOrder = ({
    order,
    sortOrders
  }) => {
    if (order === "")
      return sortOrders[0];
    const index2 = sortOrders.indexOf(order || null);
    return sortOrders[index2 > sortOrders.length - 2 ? 0 : index2 + 1];
  };
  const handleSortClick = (event, column, givenOrder) => {
    event.stopPropagation();
    const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
    let target = event.target;
    while (target && target.tagName !== "TH") {
      target = target.parentNode;
    }
    if (target && target.tagName === "TH") {
      if (hasClass(target, "noclick")) {
        removeClass(target, "noclick");
        return;
      }
    }
    if (!column.sortable)
      return;
    const states = props2.store.states;
    let sortProp = states.sortProp.value;
    let sortOrder;
    const sortingColumn = states.sortingColumn.value;
    if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
      if (sortingColumn) {
        sortingColumn.order = null;
      }
      states.sortingColumn.value = column;
      sortProp = column.property;
    }
    if (!order) {
      sortOrder = column.order = null;
    } else {
      sortOrder = column.order = order;
    }
    states.sortProp.value = sortProp;
    states.sortOrder.value = sortOrder;
    parent.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick
  };
}
function useStyle$3(props2) {
  const instance2 = getCurrentInstance();
  const parent = instance2.parent;
  const storeData = parent.store.states;
  const isCellHidden = (index2, columns) => {
    let start = 0;
    for (let i = 0; i < index2; i++) {
      start += columns[i].colSpan;
    }
    const after = start + columns[index2].colSpan - 1;
    if (props2.fixed === "left") {
      return after >= storeData.fixedLeafColumnsLength.value;
    } else if (props2.fixed === "right") {
      return start < storeData.columns.value.length - storeData.rightFixedLeafColumnsLength.value;
    } else {
      return after < storeData.fixedLeafColumnsLength.value || start >= storeData.columns.value.length - storeData.rightFixedLeafColumnsLength.value;
    }
  };
  const getHeaderRowStyle = (rowIndex) => {
    const headerRowStyle = parent.props.headerRowStyle;
    if (typeof headerRowStyle === "function") {
      return headerRowStyle.call(null, {
        rowIndex
      });
    }
    return headerRowStyle;
  };
  const getHeaderRowClass = (rowIndex) => {
    const classes = [];
    const headerRowClassName = parent.props.headerRowClassName;
    if (typeof headerRowClassName === "string") {
      classes.push(headerRowClassName);
    } else if (typeof headerRowClassName === "function") {
      classes.push(headerRowClassName.call(null, {
        rowIndex
      }));
    }
    return classes.join(" ");
  };
  const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
    const headerCellStyle = parent.props.headerCellStyle;
    if (typeof headerCellStyle === "function") {
      return headerCellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    return headerCellStyle;
  };
  const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
    const classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];
    if (rowIndex === 0 && isCellHidden(columnIndex, row)) {
      classes.push("is-hidden");
    }
    if (!column.children) {
      classes.push("is-leaf");
    }
    if (column.sortable) {
      classes.push("is-sortable");
    }
    const headerCellClassName = parent.props.headerCellClassName;
    if (typeof headerCellClassName === "string") {
      classes.push(headerCellClassName);
    } else if (typeof headerCellClassName === "function") {
      classes.push(headerCellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    return classes.join(" ");
  };
  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass
  };
}
var getAllColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
var convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column, void 0);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function useUtils$1(props2) {
  const instance2 = getCurrentInstance();
  const parent = instance2.parent;
  const columnRows = computed(() => {
    return convertToRows(props2.store.states.originColumns.value);
  });
  const isGroup = computed(() => {
    const result = columnRows.value.length > 1;
    if (result)
      parent.state.isGroup.value = true;
    return result;
  });
  const toggleAllSelection = (event) => {
    event.stopPropagation();
    parent.store.commit("toggleAllSelection");
  };
  return {
    isGroup,
    toggleAllSelection,
    columnRows
  };
}
function hGutter() {
  return h("col", {
    name: "gutter"
  });
}
function hColgroup(columns, hasGutter) {
  return h("colgroup", {}, [...columns.map((column) => h("col", {
    name: column.id,
    key: column.id
  })), hasGutter && hGutter()]);
}
var TableHeader = {
  name: "ElTableHeader",
  components: {
    ElCheckbox: script$1o
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props2, {
    emit
  }) {
    const instance2 = getCurrentInstance();
    const parent = instance2.parent;
    const storeData = parent.store.states;
    const filterPanels = ref({});
    const {
      tableLayout,
      onColumnsChange,
      onScrollableChange
    } = useLayoutObserver(parent);
    const hasGutter = computed(() => {
      return !props2.fixed && tableLayout.gutterWidth;
    });
    onMounted(() => {
      nextTick(() => {
        const {
          prop,
          order
        } = props2.defaultSort;
        const init = true;
        parent.store.commit("sort", {
          prop,
          order,
          init
        });
      });
    });
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick
    } = useEvent(props2, emit);
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass
    } = useStyle$3(props2);
    const {
      isGroup,
      toggleAllSelection,
      columnRows
    } = useUtils$1(props2);
    instance2.state = {
      onColumnsChange,
      onScrollableChange
    };
    instance2.filterPanels = filterPanels;
    return {
      columns: storeData.columns,
      filterPanels,
      hasGutter,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection
    };
  },
  render() {
    return h("table", {
      border: "0",
      cellpadding: "0",
      cellspacing: "0",
      class: "el-table__header"
    }, [hColgroup(this.columns, this.hasGutter), h("thead", {
      class: {
        "is-group": this.isGroup,
        "has-gutter": this.hasGutter
      }
    }, this.columnRows.map((subColumns, rowIndex) => h("tr", {
      class: this.getHeaderRowClass(rowIndex),
      key: rowIndex,
      style: this.getHeaderRowStyle(rowIndex)
    }, subColumns.map((column, cellIndex) => h("th", {
      class: this.getHeaderCellClass(rowIndex, cellIndex, subColumns, column),
      colspan: column.colSpan,
      key: `${column.id}-thead`,
      rowSpan: column.rowSpan,
      style: this.getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
      onClick: ($event) => this.handleHeaderClick($event, column),
      onContextmenu: ($event) => this.handleHeaderContextMenu($event, column),
      onMousedown: ($event) => this.handleMouseDown($event, column),
      onMouseMove: ($event) => this.handleMouseMove($event, column),
      onMouseout: this.handleMouseOut
    }, [h("div", {
      class: ["cell", column.filteredValue && column.filteredValue.length > 0 ? "highlight" : "", column.labelClassName]
    }, [column.renderHeader ? column.renderHeader({
      column,
      index_: cellIndex,
      store: this.store,
      _self: this.$parent
    }) : column.label, column.sortable && h("span", {
      onClick: ($event) => this.handleSortClick($event, column),
      class: "caret-wrapper"
    }, [h("i", {
      onClick: ($event) => this.handleSortClick($event, column, "ascending"),
      class: "sort-caret ascending"
    }), h("i", {
      onClick: ($event) => this.handleSortClick($event, column, "descending"),
      class: "sort-caret descending"
    })]), column.filterable && h(script$Q, {
      table: this.$parent,
      store: this.$parent.store,
      placement: column.filterPlacement || "bottom-start",
      column,
      upDataColumn: (key, value) => {
        column[key] = value;
      }
    })])])))))]);
  }
};
function useEvents(props2) {
  const instance2 = getCurrentInstance();
  const parent = instance2.parent;
  const tooltipVisible = ref(false);
  const tooltipContent = ref("");
  const tooltipTrigger = ref(h("div"));
  const handleEvent = (event, row, name) => {
    const table = parent;
    const cell = getCell(event);
    let column;
    if (cell) {
      column = getColumnByCell({
        columns: props2.store.states.columns.value
      }, cell);
      if (column) {
        table.emit(`cell-${name}`, row, column, cell, event);
      }
    }
    table.emit(`row-${name}`, row, column, event);
  };
  const handleDoubleClick = (event, row) => {
    handleEvent(event, row, "dblclick");
  };
  const handleClick = (event, row) => {
    props2.store.commit("setCurrentRow", row);
    handleEvent(event, row, "click");
  };
  const handleContextMenu = (event, row) => {
    handleEvent(event, row, "contextmenu");
  };
  const handleMouseEnter = debounce(function(index2) {
    props2.store.commit("setHoverRow", index2);
  }, 30);
  const handleMouseLeave = debounce(function() {
    props2.store.commit("setHoverRow", null);
  }, 30);
  const handleCellMouseEnter = (event, row) => {
    const table = parent;
    const cell = getCell(event);
    if (cell) {
      const column = getColumnByCell({
        columns: props2.store.states.columns.value
      }, cell);
      const hoverState = table.hoverState = {
        cell,
        column,
        row
      };
      table.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
    }
    const cellChild = event.target.querySelector(".cell");
    if (!(hasClass(cellChild, "el-tooltip") && cellChild.childNodes.length)) {
      return;
    }
    const range2 = document.createRange();
    range2.setStart(cellChild, 0);
    range2.setEnd(cellChild, cellChild.childNodes.length);
    const rangeWidth = range2.getBoundingClientRect().width;
    const padding = (parseInt(getStyle(cellChild, "paddingLeft"), 10) || 0) + (parseInt(getStyle(cellChild, "paddingRight"), 10) || 0);
    if (rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) {
      tooltipContent.value = cell.innerText || cell.textContent;
      tooltipVisible.value = true;
      tooltipTrigger.value = cell;
    }
  };
  const handleCellMouseLeave = (event) => {
    tooltipVisible.value = false;
    const cell = getCell(event);
    if (!cell)
      return;
    const oldHoverState = parent.hoverState;
    parent.emit("cell-mouse-leave", oldHoverState === null || oldHoverState === void 0 ? void 0 : oldHoverState.row, oldHoverState === null || oldHoverState === void 0 ? void 0 : oldHoverState.column, oldHoverState === null || oldHoverState === void 0 ? void 0 : oldHoverState.cell, event);
  };
  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipVisible,
    tooltipContent,
    tooltipTrigger
  };
}
function useStyles(props2) {
  const instance2 = getCurrentInstance();
  const parent = instance2.parent;
  const isColumnHidden = (index2) => {
    if (props2.fixed === "left") {
      return index2 >= props2.store.states.fixedLeafColumnsLength.value;
    } else if (props2.fixed === "right") {
      return index2 < props2.store.states.columns.value.length - props2.store.states.rightFixedLeafColumnsLength.value;
    } else {
      return index2 < props2.store.states.fixedLeafColumnsLength.value || index2 >= props2.store.states.columns.value.length - props2.store.states.rightFixedLeafColumnsLength.value;
    }
  };
  const getRowStyle = (row, rowIndex) => {
    const rowStyle = parent.props.rowStyle;
    if (typeof rowStyle === "function") {
      return rowStyle.call(null, {
        row,
        rowIndex
      });
    }
    return rowStyle || null;
  };
  const getRowClass = (row, rowIndex) => {
    const classes = ["el-table__row"];
    if (parent.props.highlightCurrentRow && row === props2.store.states.currentRow.value) {
      classes.push("current-row");
    }
    if (props2.stripe && rowIndex % 2 === 1) {
      classes.push("el-table__row--striped");
    }
    const rowClassName = parent.props.rowClassName;
    if (typeof rowClassName === "string") {
      classes.push(rowClassName);
    } else if (typeof rowClassName === "function") {
      classes.push(rowClassName.call(null, {
        row,
        rowIndex
      }));
    }
    if (props2.store.states.expandRows.value.indexOf(row) > -1) {
      classes.push("expanded");
    }
    return classes;
  };
  const getCellStyle = (rowIndex, columnIndex, row, column) => {
    const cellStyle = parent.props.cellStyle;
    if (typeof cellStyle === "function") {
      return cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    return cellStyle;
  };
  const getCellClass = (rowIndex, columnIndex, row, column) => {
    const classes = [column.id, column.align, column.className];
    if (isColumnHidden(columnIndex)) {
      classes.push("is-hidden");
    }
    const cellClassName = parent.props.cellClassName;
    if (typeof cellClassName === "string") {
      classes.push(cellClassName);
    } else if (typeof cellClassName === "function") {
      classes.push(cellClassName.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      }));
    }
    return classes.join(" ");
  };
  const getSpan = (row, column, rowIndex, columnIndex) => {
    let rowspan = 1;
    let colspan = 1;
    const fn = parent.props.spanMethod;
    if (typeof fn === "function") {
      const result = fn({
        row,
        column,
        rowIndex,
        columnIndex
      });
      if (Array.isArray(result)) {
        rowspan = result[0];
        colspan = result[1];
      } else if (typeof result === "object") {
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
    }
    return {
      rowspan,
      colspan
    };
  };
  const getColspanRealWidth = (columns, colspan, index2) => {
    if (colspan < 1) {
      return columns[index2].realWidth;
    }
    const widthArr = columns.map(({
      realWidth
    }) => realWidth).slice(index2, index2 + colspan);
    return widthArr.reduce((acc, width) => acc + width, -1);
  };
  return {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth,
    isColumnHidden
  };
}
function useRender$1(props2) {
  const instance2 = getCurrentInstance();
  const parent = instance2.parent;
  const {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipVisible,
    tooltipContent,
    tooltipTrigger
  } = useEvents(props2);
  const {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  } = useStyles(props2);
  const firstDefaultColumnIndex = computed(() => {
    return arrayFindIndex(props2.store.states.columns.value, ({
      type: type2
    }) => type2 === "default");
  });
  const getKeyOfRow = (row, index2) => {
    const rowKey = parent.props.rowKey;
    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }
    return index2;
  };
  const rowRender = (row, index_, treeRowData) => {
    const {
      indent,
      columns
    } = props2.store.states;
    const rowClasses = getRowClass(row, index_);
    let display = true;
    if (treeRowData) {
      rowClasses.push("el-table__row--level-" + treeRowData.level);
      display = treeRowData.display;
    }
    const displayStyle = display ? null : {
      display: "none"
    };
    return h("tr", {
      style: [displayStyle, getRowStyle(row, index_)],
      class: rowClasses,
      key: getKeyOfRow(row, index_),
      onDblclick: ($event) => handleDoubleClick($event, row),
      onClick: ($event) => handleClick($event, row),
      onContextmenu: ($event) => handleContextMenu($event, row),
      onMouseenter: () => handleMouseEnter(index_),
      onMouseleave: handleMouseLeave
    }, columns.value.map((column, cellIndex) => {
      const {
        rowspan,
        colspan
      } = getSpan(row, column, index_, cellIndex);
      if (!rowspan || !colspan) {
        return null;
      }
      const columnData = __spreadValues({}, column);
      columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex);
      const data = {
        store: props2.store,
        _self: props2.context || parent,
        column: columnData,
        row,
        index_
      };
      if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
        data.treeNode = {
          indent: treeRowData.level * indent.value,
          level: treeRowData.level
        };
        if (typeof treeRowData.expanded === "boolean") {
          data.treeNode.expanded = treeRowData.expanded;
          if ("loading" in treeRowData) {
            data.treeNode.loading = treeRowData.loading;
          }
          if ("noLazyChildren" in treeRowData) {
            data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
          }
        }
      }
      return h("td", {
        style: getCellStyle(index_, cellIndex, row, column),
        class: getCellClass(index_, cellIndex, row, column),
        rowspan,
        colspan,
        onMouseenter: ($event) => handleCellMouseEnter($event, row),
        onMouseleave: handleCellMouseLeave
      }, [column.renderCell(data)]);
    }));
  };
  const wrappedRowRender = (row, index_) => {
    const store = props2.store;
    const {
      isRowExpanded,
      assertRowKey
    } = store;
    const {
      treeData,
      lazyTreeNodeMap,
      childrenColumnName,
      rowKey
    } = store.states;
    const hasExpandColumn = store.states.columns.value.some(({
      type: type2
    }) => type2 === "expand");
    if (hasExpandColumn && isRowExpanded(row)) {
      const renderExpanded = parent.renderExpanded;
      const tr = rowRender(row, index_, void 0);
      if (!renderExpanded) {
        console.error("[Element Error]renderExpanded is required.");
        return tr;
      }
      return [[tr, h("tr", {
        key: "expanded-row__" + tr.key
      }, [h("td", {
        colspan: store.states.columns.value.length,
        class: "el-table__expanded-cell"
      }, [renderExpanded({
        row,
        index_,
        store
      })])])]];
    } else if (Object.keys(treeData.value).length) {
      assertRowKey();
      const key = getRowIdentity(row, rowKey.value);
      let cur = treeData.value[key];
      let treeRowData = null;
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true
        };
        if (typeof cur.lazy === "boolean") {
          if (typeof cur.loaded === "boolean" && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length);
          }
          treeRowData.loading = cur.loading;
        }
      }
      const tmp = [rowRender(row, index_, treeRowData)];
      if (cur) {
        let i = 0;
        const traverse = (children, parent2) => {
          if (!(children && children.length && parent2))
            return;
          children.forEach((node) => {
            const innerTreeRowData = {
              display: parent2.display && parent2.expanded,
              level: parent2.level + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false
            };
            const childKey = getRowIdentity(node, rowKey.value);
            if (childKey === void 0 || childKey === null) {
              throw new Error("for nested data item, row-key is required.");
            }
            cur = __spreadValues({}, treeData.value[childKey]);
            if (cur) {
              innerTreeRowData.expanded = cur.expanded;
              cur.level = cur.level || innerTreeRowData.level;
              cur.display = !!(cur.expanded && innerTreeRowData.display);
              if (typeof cur.lazy === "boolean") {
                if (typeof cur.loaded === "boolean" && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                }
                innerTreeRowData.loading = cur.loading;
              }
            }
            i++;
            tmp.push(rowRender(node, index_ + i, innerTreeRowData));
            if (cur) {
              const nodes2 = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value];
              traverse(nodes2, cur);
            }
          });
        };
        cur.display = true;
        const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value];
        traverse(nodes, cur);
      }
      return tmp;
    } else {
      return rowRender(row, index_, void 0);
    }
  };
  return {
    wrappedRowRender,
    tooltipVisible,
    tooltipContent,
    tooltipTrigger
  };
}
var TableBody = {
  name: "ElTableBody",
  props: {
    store: {
      required: true,
      type: Object
    },
    stripe: Boolean,
    context: {
      default: () => ({}),
      type: Object
    },
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: {
      type: String,
      default: ""
    },
    highlight: Boolean
  },
  setup(props2) {
    const instance2 = getCurrentInstance();
    const parent = instance2.parent;
    const {
      wrappedRowRender,
      tooltipVisible,
      tooltipContent,
      tooltipTrigger
    } = useRender$1(props2);
    const {
      onColumnsChange,
      onScrollableChange
    } = useLayoutObserver(parent);
    watch(props2.store.states.hoverRow, (newVal, oldVal) => {
      if (!props2.store.states.isComplex.value || typeof window === "undefined")
        return;
      let raf = window.requestAnimationFrame;
      if (!raf) {
        raf = (fn) => window.setTimeout(fn, 16);
      }
      raf(() => {
        const rows = instance2.vnode.el.querySelectorAll(".el-table__row");
        const oldRow = rows[oldVal];
        const newRow = rows[newVal];
        if (oldRow) {
          removeClass(oldRow, "hover-row");
        }
        if (newRow) {
          addClass(newRow, "hover-row");
        }
      });
    });
    return {
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipVisible,
      tooltipContent,
      tooltipTrigger
    };
  },
  render() {
    const data = this.store.states.data.value || [];
    return h("table", {
      class: "el-table__body",
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [hColgroup(this.store.states.columns.value), h("tbody", {}, [data.reduce((acc, row) => {
      return acc.concat(this.wrappedRowRender(row, acc.length));
    }, []), h(ElTooltip, {
      modelValue: this.tooltipVisible,
      content: this.tooltipContent,
      manual: true,
      effect: this.$parent.tooltipEffect,
      placement: "top"
    }, {
      default: () => this.tooltipTrigger
    })])]);
  }
};
function useMapState() {
  const instance2 = getCurrentInstance();
  const table = instance2.parent;
  const store = table.store;
  const leftFixedLeafCount = computed(() => {
    return store.states.fixedLeafColumnsLength.value;
  });
  const rightFixedLeafCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  const columnsCount = computed(() => {
    return store.states.columns.value.length;
  });
  const leftFixedCount = computed(() => {
    return store.states.fixedColumns.value.length;
  });
  const rightFixedCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: store.states.columns
  };
}
function useStyle$2(props2) {
  const instance2 = getCurrentInstance();
  const table = instance2.parent;
  const store = table.store;
  const {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns
  } = useMapState();
  const hasGutter = computed(() => {
    return !props2.fixed && table.layout.gutterWidth;
  });
  const isCellHidden = (index2, columns2, column) => {
    if (props2.fixed || props2.fixed === "left") {
      return index2 >= leftFixedLeafCount.value;
    } else if (props2.fixed === "right") {
      let before = 0;
      for (let i = 0; i < index2; i++) {
        before += columns2[i].colSpan;
      }
      return before < columnsCount.value - rightFixedLeafCount.value;
    } else if (!props2.fixed && column.fixed) {
      return true;
    } else {
      return index2 < leftFixedCount.value || index2 >= columnsCount.value - rightFixedCount.value;
    }
  };
  const getRowClasses = (column, cellIndex) => {
    const classes = [column.id, column.align, column.labelClassName];
    if (column.className) {
      classes.push(column.className);
    }
    if (isCellHidden(cellIndex, store.states.columns.value, column)) {
      classes.push("is-hidden");
    }
    if (!column.children) {
      classes.push("is-leaf");
    }
    return classes;
  };
  return {
    hasGutter,
    getRowClasses,
    columns
  };
}
var TableFooter = {
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props2) {
    const {
      hasGutter,
      getRowClasses,
      columns
    } = useStyle$2(props2);
    return {
      getRowClasses,
      hasGutter,
      columns
    };
  },
  render() {
    let sums = [];
    if (this.summaryMethod) {
      sums = this.summaryMethod({
        columns: this.columns,
        data: this.store.states.data.value
      });
    } else {
      this.columns.forEach((column, index2) => {
        if (index2 === 0) {
          sums[index2] = this.sumText;
          return;
        }
        const values = this.store.states.data.value.map((item) => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach((value) => {
          if (!isNaN(value)) {
            notNumber = false;
            const decimal = ("" + value).split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index2] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index2] = "";
        }
      });
    }
    return h("table", {
      class: "el-table__footer",
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [hColgroup(this.columns, this.hasGutter), h("tbody", {
      class: [{
        "has-gutter": this.hasGutter
      }]
    }, [h("tr", {}, [...this.columns.map((column, cellIndex) => h("td", {
      key: cellIndex,
      colspan: column.colSpan,
      rowspan: column.rowSpan,
      class: this.getRowClasses(column, cellIndex)
    }, [h("div", {
      class: ["cell", column.labelClassName]
    }, [sums[cellIndex]])])), this.hasGutter && hGutter()])])]);
  }
};
function useUtils(store, layout, shouldUpdateHeight) {
  const setCurrentRow = (row) => {
    store.commit("setCurrentRow", row);
  };
  const toggleRowSelection = (row, selected) => {
    store.toggleRowSelection(row, selected, false);
    store.updateAllSelected();
  };
  const clearSelection = () => {
    store.clearSelection();
  };
  const clearFilter = (columnKeys) => {
    store.clearFilter(columnKeys);
  };
  const toggleAllSelection = () => {
    store.commit("toggleAllSelection");
  };
  const toggleRowExpansion = (row, expanded) => {
    store.toggleRowExpansionAdapter(row, expanded);
  };
  const clearSort = () => {
    store.clearSort();
  };
  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight();
    }
    layout.updateColumnsWidth();
  };
  const sort = (prop, order) => {
    store.commit("sort", {
      prop,
      order
    });
  };
  return {
    setCurrentRow,
    toggleRowSelection,
    clearSelection,
    clearFilter,
    toggleAllSelection,
    toggleRowExpansion,
    clearSort,
    doLayout,
    sort
  };
}
function useStyle$1(props2, layout, store, table, doLayout) {
  const isHidden = ref(false);
  const renderExpanded = ref(null);
  const resizeProxyVisible = ref(false);
  const setDragVisible = (visible) => {
    resizeProxyVisible.value = visible;
  };
  const resizeState = ref({
    width: null,
    height: null
  });
  const isGroup = ref(false);
  const scrollPosition = ref("left");
  watchEffect(() => {
    layout.setHeight(props2.height);
  });
  watchEffect(() => {
    layout.setMaxHeight(props2.maxHeight);
  });
  watchEffect(() => {
    if (!store.states.rowKey.value)
      return;
    store.setCurrentRowKey(props2.currentRowKey);
  });
  watch(() => props2.data, () => {
    table.store.commit("setData", props2.data);
  }, {
    immediate: true
  });
  watchEffect(() => {
    if (props2.expandRowKeys) {
      store.setExpandRowKeysAdapter(props2.expandRowKeys);
    }
  });
  const handleMouseLeave = () => {
    table.store.commit("setHoverRow", null);
    if (table.hoverState)
      table.hoverState = null;
  };
  const handleHeaderFooterMousewheel = (event, data) => {
    const {
      pixelX,
      pixelY
    } = data;
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
    }
  };
  const shouldUpdateHeight = computed(() => {
    return props2.height || props2.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
  });
  onMounted(() => {
    bindEvents();
    store.updateColumns();
    doLayout();
    resizeState.value = {
      width: table.vnode.el.offsetWidth,
      height: table.vnode.el.offsetHeight
    };
    store.states.columns.value.forEach((column) => {
      if (column.filteredValue && column.filteredValue.length) {
        table.store.commit("filterChange", {
          column,
          values: column.filteredValue,
          silent: true
        });
      }
    });
    table.$ready = true;
  });
  const syncPostion = throttle(function() {
    const {
      scrollLeft,
      scrollTop,
      offsetWidth,
      scrollWidth
    } = table.refs.bodyWrapper;
    const {
      headerWrapper,
      footerWrapper,
      fixedBodyWrapper,
      rightFixedBodyWrapper
    } = table.refs;
    if (headerWrapper)
      headerWrapper.scrollLeft = scrollLeft;
    if (footerWrapper)
      footerWrapper.scrollLeft = scrollLeft;
    if (fixedBodyWrapper)
      fixedBodyWrapper.scrollTop = scrollTop;
    if (rightFixedBodyWrapper)
      rightFixedBodyWrapper.scrollTop = scrollTop;
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
    if (scrollLeft >= maxScrollLeftPosition) {
      scrollPosition.value = "right";
    } else if (scrollLeft === 0) {
      scrollPosition.value = "left";
    } else {
      scrollPosition.value = "middle";
    }
  }, 20);
  const bindEvents = () => {
    table.refs.bodyWrapper.addEventListener("scroll", syncPostion, {
      passive: true
    });
    if (props2.fit) {
      addResizeListener(table.vnode.el, resizeListener);
    }
  };
  onUnmounted(() => {
    unbindEvents();
  });
  const unbindEvents = () => {
    var _table$refs$bodyWrapp;
    (_table$refs$bodyWrapp = table.refs.bodyWrapper) === null || _table$refs$bodyWrapp === void 0 ? void 0 : _table$refs$bodyWrapp.removeEventListener("scroll", syncPostion, true);
    if (props2.fit) {
      removeResizeListener(table.vnode.el, resizeListener);
    }
  };
  const resizeListener = () => {
    if (!table.$ready)
      return;
    let shouldUpdateLayout = false;
    const el = table.vnode.el;
    const {
      width: oldWidth,
      height: oldHeight
    } = resizeState.value;
    const width = el.offsetWidth;
    if (oldWidth !== width) {
      shouldUpdateLayout = true;
    }
    const height = el.offsetHeight;
    if ((props2.height || shouldUpdateHeight.value) && oldHeight !== height) {
      shouldUpdateLayout = true;
    }
    if (shouldUpdateLayout) {
      resizeState.value = {
        width,
        height
      };
      doLayout();
    }
  };
  const tableSize = computed(() => {
    return props2.size;
  });
  const bodyWidth = computed(() => {
    const {
      bodyWidth: bodyWidth_,
      scrollY,
      gutterWidth
    } = layout;
    return bodyWidth_.value ? bodyWidth_.value - (scrollY.value ? gutterWidth : 0) + "px" : "";
  });
  const bodyHeight = computed(() => {
    const headerHeight = layout.headerHeight.value || 0;
    const bodyHeight2 = layout.bodyHeight.value;
    const footerHeight = layout.footerHeight.value || 0;
    if (props2.height) {
      return {
        height: bodyHeight2 ? bodyHeight2 + "px" : ""
      };
    } else if (props2.maxHeight) {
      const maxHeight = parseHeight(props2.maxHeight);
      if (typeof maxHeight === "number") {
        return {
          "max-height": maxHeight - footerHeight - (props2.showHeader ? headerHeight : 0) + "px"
        };
      }
    }
    return {};
  });
  const emptyBlockStyle = computed(() => {
    if (props2.data && props2.data.length)
      return null;
    let height = "100%";
    if (layout.appendHeight.value) {
      height = `calc(100% - ${layout.appendHeight.value}px)`;
    }
    return {
      width: bodyWidth.value,
      height
    };
  });
  const handleFixedMousewheel = (event, data) => {
    const bodyWrapper = table.refs.bodyWrapper;
    if (Math.abs(data.spinY) > 0) {
      const currentScrollTop = bodyWrapper.scrollTop;
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
    } else {
      bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
    }
  };
  const fixedHeight = computed(() => {
    if (props2.maxHeight) {
      if (props2.showSummary) {
        return {
          bottom: 0
        };
      }
      return {
        bottom: layout.scrollX.value && props2.data.length ? layout.gutterWidth + "px" : ""
      };
    } else {
      if (props2.showSummary) {
        return {
          height: layout.tableHeight.value ? layout.tableHeight.value + "px" : ""
        };
      }
      return {
        height: layout.viewportHeight.value ? layout.viewportHeight.value + "px" : ""
      };
    }
  });
  const fixedBodyHeight = computed(() => {
    if (props2.height) {
      return {
        height: layout.fixedBodyHeight.value ? layout.fixedBodyHeight.value + "px" : ""
      };
    } else if (props2.maxHeight) {
      let maxHeight = parseHeight(props2.maxHeight);
      if (typeof maxHeight === "number") {
        maxHeight = layout.scrollX.value ? maxHeight - layout.gutterWidth : maxHeight;
        if (props2.showHeader) {
          maxHeight -= layout.headerHeight.value;
        }
        maxHeight -= layout.footerHeight.value;
        return {
          "max-height": maxHeight + "px"
        };
      }
    }
    return {};
  });
  return {
    isHidden,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    bodyHeight,
    emptyBlockStyle,
    handleFixedMousewheel,
    fixedHeight,
    fixedBodyHeight,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    scrollPosition
  };
}
var tableIdSeed = 1;
var script$P = {
  name: "ElTable",
  mixins: [Locale],
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    size: String,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: {
      type: Boolean,
      default: true
    },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    showHeader: {
      type: Boolean,
      default: true
    },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    spanMethod: Function,
    selectOnIndeterminate: {
      type: Boolean,
      default: true
    },
    indent: {
      type: Number,
      default: 16
    },
    treeProps: {
      type: Object,
      default() {
        return {
          hasChildren: "hasChildren",
          children: "children"
        };
      }
    },
    lazy: Boolean,
    load: Function
  },
  emits: ["select", "select-all", "selection-change", "cell-mouse-enter", "cell-mouse-leave", "cell-click", "cell-dblclick", "row-click", "row-contextmenu", "row-dblclick", "header-click", "header-contextmenu", "sort-change", "filter-change", "current-change", "header-dragend", "expand-change"],
  setup(props2) {
    let table = getCurrentInstance();
    const store = createStore(table, {
      rowKey: props2.rowKey,
      defaultExpandAll: props2.defaultExpandAll,
      selectOnIndeterminate: props2.selectOnIndeterminate,
      indent: props2.indent,
      lazy: props2.lazy,
      lazyColumnIdentifier: props2.treeProps.hasChildren || "hasChildren",
      childrenColumnName: props2.treeProps.children || "children",
      data: props2.data
    });
    table.store = store;
    const layout = new TableLayout({
      store: table.store,
      table,
      fit: props2.fit,
      showHeader: props2.showHeader
    });
    table.layout = layout;
    const shouldUpdateHeight = computed(() => {
      return props2.height || props2.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
    });
    const {
      setCurrentRow,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort
    } = useUtils(store, layout, shouldUpdateHeight);
    const {
      isHidden,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      bodyHeight,
      emptyBlockStyle,
      handleFixedMousewheel,
      fixedHeight,
      fixedBodyHeight,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      scrollPosition
    } = useStyle$1(props2, layout, store, table, doLayout);
    const debouncedUpdateLayout = debounce(() => doLayout(), 50);
    const tableId = "el-table_" + tableIdSeed++;
    table.tableId = tableId;
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    };
    return {
      layout,
      store,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      scrollPosition,
      bodyWidth,
      bodyHeight,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      fixedHeight,
      fixedBodyHeight,
      setCurrentRow,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      setDragVisible,
      context: table
    };
  }
};
var _hoisted_1$y = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
var _hoisted_2$k = {
  key: 0,
  ref: "headerWrapper",
  class: "el-table__header-wrapper"
};
var _hoisted_3$g = {
  class: "el-table__empty-text"
};
var _hoisted_4$a = {
  key: 1,
  ref: "appendWrapper",
  class: "el-table__append-wrapper"
};
var _hoisted_5$6 = {
  key: 1,
  ref: "footerWrapper",
  class: "el-table__footer-wrapper"
};
var _hoisted_6$4 = {
  key: 0,
  ref: "fixedHeaderWrapper",
  class: "el-table__fixed-header-wrapper"
};
var _hoisted_7$3 = {
  key: 1,
  ref: "fixedFooterWrapper",
  class: "el-table__fixed-footer-wrapper"
};
var _hoisted_8$2 = {
  key: 0,
  ref: "rightFixedHeaderWrapper",
  class: "el-table__fixed-header-wrapper"
};
var _hoisted_9$2 = {
  key: 1,
  ref: "rightFixedFooterWrapper",
  class: "el-table__fixed-footer-wrapper"
};
var _hoisted_10 = {
  ref: "resizeProxy",
  class: "el-table__column-resize-proxy"
};
function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");
  const _component_table_footer = resolveComponent("table-footer");
  const _directive_mousewheel = resolveDirective("mousewheel");
  return openBlock(), createBlock("div", {
    class: [[{
      "el-table--fit": $props.fit,
      "el-table--striped": $props.stripe,
      "el-table--border": $props.border || $setup.isGroup,
      "el-table--hidden": $setup.isHidden,
      "el-table--group": $setup.isGroup,
      "el-table--fluid-height": $props.maxHeight,
      "el-table--scrollable-x": $setup.layout.scrollX.value,
      "el-table--scrollable-y": $setup.layout.scrollY.value,
      "el-table--enable-row-hover": !$setup.store.states.isComplex.value,
      "el-table--enable-row-transition": ($setup.store.states.data.value || []).length !== 0 && ($setup.store.states.data.value || []).length < 100
    }, $setup.tableSize ? `el-table--${$setup.tableSize}` : ""], "el-table"],
    onMouseleave: _cache[1] || (_cache[1] = ($event) => $setup.handleMouseLeave())
  }, [createVNode("div", _hoisted_1$y, [renderSlot(_ctx.$slots, "default")], 512), $props.showHeader ? withDirectives((openBlock(), createBlock("div", _hoisted_2$k, [createVNode(_component_table_header, {
    ref: "tableHeader",
    border: $props.border,
    "default-sort": $props.defaultSort,
    store: $setup.store,
    style: {
      width: $setup.layout.bodyWidth.value ? $setup.layout.bodyWidth.value + "px" : ""
    },
    onSetDragVisible: $setup.setDragVisible
  }, null, 8, ["border", "default-sort", "store", "style", "onSetDragVisible"])], 512)), [[_directive_mousewheel, $setup.handleHeaderFooterMousewheel]]) : createCommentVNode("v-if", true), createVNode("div", {
    ref: "bodyWrapper",
    class: [[$setup.layout.scrollX.value ? `is-scrolling-${$setup.scrollPosition}` : "is-scrolling-none"], "el-table__body-wrapper"],
    style: [$setup.bodyHeight]
  }, [createVNode(_component_table_body, {
    context: $setup.context,
    highlight: $props.highlightCurrentRow,
    "row-class-name": $props.rowClassName,
    "row-style": $props.rowStyle,
    store: $setup.store,
    stripe: $props.stripe,
    style: {
      width: $setup.bodyWidth
    }
  }, null, 8, ["context", "highlight", "row-class-name", "row-style", "store", "stripe", "style"]), !$props.data || $props.data.length === 0 ? (openBlock(), createBlock("div", {
    key: 0,
    ref: "emptyBlock",
    style: $setup.emptyBlockStyle,
    class: "el-table__empty-block"
  }, [createVNode("span", _hoisted_3$g, [renderSlot(_ctx.$slots, "empty", {}, () => [createTextVNode(toDisplayString($props.emptyText || _ctx.t("el.table.emptyText")), 1)])])], 4)) : createCommentVNode("v-if", true), _ctx.$slots.append ? (openBlock(), createBlock("div", _hoisted_4$a, [renderSlot(_ctx.$slots, "append")], 512)) : createCommentVNode("v-if", true)], 6), $props.showSummary ? withDirectives((openBlock(), createBlock("div", _hoisted_5$6, [createVNode(_component_table_footer, {
    border: $props.border,
    "default-sort": $props.defaultSort,
    store: $setup.store,
    style: {
      width: $setup.layout.bodyWidth.value ? $setup.layout.bodyWidth.value + "px" : ""
    },
    "sum-text": $props.sumText || _ctx.t("el.table.sumText"),
    "summary-method": $props.summaryMethod
  }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])], 512)), [[vShow, $props.data && $props.data.length > 0], [_directive_mousewheel, $setup.handleHeaderFooterMousewheel]]) : createCommentVNode("v-if", true), $setup.store.states.fixedColumns.value.length > 0 ? withDirectives((openBlock(), createBlock("div", {
    key: 2,
    ref: "fixedWrapper",
    style: [{
      width: $setup.layout.fixedWidth.value ? $setup.layout.fixedWidth.value + "px" : ""
    }, $setup.fixedHeight],
    class: "el-table__fixed"
  }, [$props.showHeader ? (openBlock(), createBlock("div", _hoisted_6$4, [createVNode(_component_table_header, {
    ref: "fixedTableHeader",
    border: $props.border,
    store: $setup.store,
    style: {
      width: $setup.bodyWidth
    },
    fixed: "left",
    onSetDragVisible: $setup.setDragVisible
  }, null, 8, ["border", "store", "style", "onSetDragVisible"])], 512)) : createCommentVNode("v-if", true), createVNode("div", {
    ref: "fixedBodyWrapper",
    style: [{
      top: $setup.layout.headerHeight.value + "px"
    }, $setup.fixedBodyHeight],
    class: "el-table__fixed-body-wrapper"
  }, [createVNode(_component_table_body, {
    highlight: $props.highlightCurrentRow,
    "row-class-name": $props.rowClassName,
    "row-style": $props.rowStyle,
    store: $setup.store,
    stripe: $props.stripe,
    style: {
      width: $setup.bodyWidth
    },
    fixed: "left"
  }, null, 8, ["highlight", "row-class-name", "row-style", "store", "stripe", "style"]), _ctx.$slots.append ? (openBlock(), createBlock("div", {
    key: 0,
    style: {
      height: $setup.layout.appendHeight.value + "px"
    },
    class: "el-table__append-gutter"
  }, null, 4)) : createCommentVNode("v-if", true)], 4), $props.showSummary ? withDirectives((openBlock(), createBlock("div", _hoisted_7$3, [createVNode(_component_table_footer, {
    border: $props.border,
    store: $setup.store,
    style: {
      width: $setup.bodyWidth
    },
    "sum-text": $props.sumText || _ctx.t("el.table.sumText"),
    "summary-method": $props.summaryMethod,
    fixed: "left"
  }, null, 8, ["border", "store", "style", "sum-text", "summary-method"])], 512)), [[vShow, $props.data && $props.data.length > 0]]) : createCommentVNode("v-if", true)], 4)), [[_directive_mousewheel, $setup.handleFixedMousewheel]]) : createCommentVNode("v-if", true), $setup.store.states.rightFixedColumns.value.length > 0 ? withDirectives((openBlock(), createBlock("div", {
    key: 3,
    ref: "rightFixedWrapper",
    style: [{
      width: $setup.layout.rightFixedWidth.value ? $setup.layout.rightFixedWidth.value + "px" : "",
      right: $setup.layout.scrollY.value ? ($props.border ? $setup.layout.gutterWidth : $setup.layout.gutterWidth || 0) + "px" : ""
    }, $setup.fixedHeight],
    class: "el-table__fixed-right"
  }, [$props.showHeader ? (openBlock(), createBlock("div", _hoisted_8$2, [createVNode(_component_table_header, {
    ref: "rightFixedTableHeader",
    border: $props.border,
    store: $setup.store,
    style: {
      width: $setup.bodyWidth
    },
    fixed: "right",
    onSetDragVisible: $setup.setDragVisible
  }, null, 8, ["border", "store", "style", "onSetDragVisible"])], 512)) : createCommentVNode("v-if", true), createVNode("div", {
    ref: "rightFixedBodyWrapper",
    style: [{
      top: $setup.layout.headerHeight.value + "px"
    }, $setup.fixedBodyHeight],
    class: "el-table__fixed-body-wrapper"
  }, [createVNode(_component_table_body, {
    highlight: $props.highlightCurrentRow,
    "row-class-name": $props.rowClassName,
    "row-style": $props.rowStyle,
    store: $setup.store,
    stripe: $props.stripe,
    style: {
      width: $setup.bodyWidth
    },
    fixed: "right"
  }, null, 8, ["highlight", "row-class-name", "row-style", "store", "stripe", "style"]), _ctx.$slots.append ? (openBlock(), createBlock("div", {
    key: 0,
    style: {
      height: $setup.layout.appendHeight.value + "px"
    },
    class: "el-table__append-gutter"
  }, null, 4)) : createCommentVNode("v-if", true)], 4), $props.showSummary ? withDirectives((openBlock(), createBlock("div", _hoisted_9$2, [createVNode(_component_table_footer, {
    border: $props.border,
    store: $setup.store,
    style: {
      width: $setup.bodyWidth
    },
    "sum-text": $props.sumText || _ctx.t("el.table.sumText"),
    "summary-method": $props.summaryMethod,
    fixed: "right"
  }, null, 8, ["border", "store", "style", "sum-text", "summary-method"])], 512)), [[vShow, $props.data && $props.data.length > 0]]) : createCommentVNode("v-if", true)], 4)), [[_directive_mousewheel, $setup.handleFixedMousewheel]]) : createCommentVNode("v-if", true), $setup.store.states.rightFixedColumns.value.length > 0 ? (openBlock(), createBlock("div", {
    key: 4,
    ref: "rightFixedPatch",
    style: {
      width: $setup.layout.scrollY.value ? $setup.layout.gutterWidth + "px" : "0",
      height: $setup.layout.headerHeight.value + "px"
    },
    class: "el-table__fixed-right-patch"
  }, null, 4)) : createCommentVNode("v-if", true), withDirectives(createVNode("div", _hoisted_10, null, 512), [[vShow, $setup.resizeProxyVisible]])], 34);
}
script$P.render = render$I;
script$P.__file = "packages/table/src/table.vue";
script$P.install = function(app) {
  app.component(script$P.name, script$P);
};
var cellStarts = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: "",
    className: "el-table-column--selection"
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
};
var cellForced = {
  selection: {
    renderHeader: function({
      store
    }) {
      return h(script$1o, {
        disabled: store.states.data.value && store.states.data.value.length === 0,
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        onClick: store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value
      });
    },
    renderCell: function({
      row,
      column,
      store,
      index_
    }) {
      return h(script$1o, {
        disabled: column.selectable ? !column.selectable.call(null, row, index_) : false,
        onInput: () => {
          store.commit("rowSelectedChanged", row);
        },
        nativeOnClick: (event) => event.stopPropagation(),
        modelValue: store.isSelected(row)
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function({
      column
    }) {
      return column.label || "#";
    },
    renderCell: function({
      index_,
      column
    }) {
      let i = index_ + 1;
      const index2 = column.index;
      if (typeof index2 === "number") {
        i = index_ + index2;
      } else if (typeof index2 === "function") {
        i = index2(index_);
      }
      return h("div", {}, [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader: function({
      column
    }) {
      return column.label || "";
    },
    renderCell: function({
      row,
      store
    }) {
      const classes = ["el-table__expand-icon"];
      if (store.states.expandRows.value.indexOf(row) > -1) {
        classes.push("el-table__expand-icon--expanded");
      }
      const callback = function(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h("div", {
        class: classes,
        onClick: callback
      }, [h("i", {
        class: "el-icon el-icon-arrow-right"
      })]);
    },
    sortable: false,
    resizable: false,
    className: "el-table__expand-column"
  }
};
function defaultRenderCell({
  row,
  column,
  index_
}) {
  const property = column.property;
  const value = property && getPropByPath(row, property, false).v;
  if (column && column.formatter) {
    return column.formatter(row, column, value, index_);
  }
  return value;
}
function treeCellPrefix({
  row,
  treeNode,
  store
}) {
  if (!treeNode)
    return null;
  const ele = [];
  const callback = function(e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h("span", {
      class: "el-table__indent",
      style: {
        "padding-left": treeNode.indent + "px"
      }
    }));
  }
  if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
    const expandClasses = ["el-table__expand-icon", treeNode.expanded ? "el-table__expand-icon--expanded" : ""];
    let iconClasses = ["el-icon-arrow-right"];
    if (treeNode.loading) {
      iconClasses = ["el-icon-loading"];
    }
    ele.push(h("div", {
      class: expandClasses,
      onClick: callback
    }, [h("i", {
      class: iconClasses
    })]));
  } else {
    ele.push(h("span", {
      class: "el-table__placeholder"
    }));
  }
  return ele;
}
function useWatcher(owner, props_) {
  const instance2 = getCurrentInstance();
  const registerComplexWatchers = () => {
    const props2 = ["fixed"];
    const aliases = {
      realWidth: "width",
      realMinWidth: "minWidth"
    };
    const allAliases = props2.reduce((prev, cur) => {
      prev[cur] = cur;
      return prev;
    }, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (props_.hasOwnProperty(columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          instance2.columnConfig.value[columnKey] = newVal;
          const updateColumns = columnKey === "fixed";
          owner.value.store.scheduleLayout(updateColumns);
        });
      }
    });
  };
  const registerNormalWatchers = () => {
    const props2 = ["label", "property", "filters", "filterMultiple", "sortable", "index", "formatter", "className", "labelClassName", "showOverflowTooltip"];
    const aliases = {
      prop: "property",
      realAlign: "align",
      realHeaderAlign: "headerAlign"
    };
    const allAliases = props2.reduce((prev, cur) => {
      prev[cur] = cur;
      return prev;
    }, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (props_.hasOwnProperty(columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          instance2.columnConfig.value[columnKey] = newVal;
        });
      }
    });
  };
  return {
    registerComplexWatchers,
    registerNormalWatchers
  };
}
function useRender(props2, slots, owner) {
  const instance2 = getCurrentInstance();
  const columnId = ref("");
  const isSubColumn = ref(false);
  const realAlign = ref();
  const realHeaderAlign = ref();
  watchEffect(() => {
    realAlign.value = props2.align ? "is-" + props2.align : null;
    realAlign.value;
  });
  watchEffect(() => {
    realHeaderAlign.value = props2.headerAlign ? "is-" + props2.headerAlign : realAlign.value;
    realHeaderAlign.value;
  });
  const columnOrTableParent = computed(() => {
    let parent = instance2.vnode.vParent || instance2.parent;
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent;
    }
    return parent;
  });
  const realWidth = ref(parseWidth(props2.width));
  const realMinWidth = ref(parseMinWidth(props2.minWidth));
  const setColumnWidth = (column) => {
    if (realWidth.value)
      column.width = realWidth.value;
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value;
    }
    if (!column.minWidth) {
      column.minWidth = 80;
    }
    column.realWidth = column.width === void 0 ? column.minWidth : column.width;
    return column;
  };
  const setColumnForcedProps = (column) => {
    const type2 = column.type;
    const source = cellForced[type2] || {};
    Object.keys(source).forEach((prop) => {
      const value = source[prop];
      if (value !== void 0) {
        column[prop] = prop === "className" ? `${column[prop]} ${value}` : value;
      }
    });
    return column;
  };
  const checkSubColumn = (children) => {
    if (children instanceof Array) {
      children.forEach((child) => check(child));
    } else {
      check(children);
    }
    function check(item) {
      var _item$type;
      if ((item === null || item === void 0 ? void 0 : (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.name) === "ElTableColumn") {
        item.vParent = instance2;
      }
    }
  };
  const setColumnRenders = (column) => {
    if (props2.renderHeader) {
      console.warn("[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.");
    } else if (column.type !== "selection") {
      column.renderHeader = (scope2) => {
        instance2.columnConfig.value["label"];
        const renderHeader = slots.header;
        return renderHeader ? renderHeader(scope2) : column.label;
      };
    }
    let originRenderCell = column.renderCell;
    if (column.type === "expand") {
      column.renderCell = (data) => h("div", {
        class: "cell"
      }, [originRenderCell(data)]);
      owner.value.renderExpanded = (data) => {
        return slots.default ? slots.default(data) : slots.default;
      };
    } else {
      originRenderCell = originRenderCell || defaultRenderCell;
      column.renderCell = (data) => {
        let children = null;
        if (slots.default) {
          children = slots.default(data);
        } else {
          children = originRenderCell(data);
        }
        const prefix = treeCellPrefix(data);
        const props3 = {
          class: "cell",
          style: {}
        };
        if (column.showOverflowTooltip) {
          props3.class += " el-tooltip";
          props3.style = {
            width: (data.column.realWidth || data.column.width) - 1 + "px"
          };
        }
        checkSubColumn(children);
        return h("div", props3, [prefix, children]);
      };
    }
    return column;
  };
  const getPropsData = (...propsKey) => {
    return propsKey.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        cur.forEach((key) => {
          prev[key] = props2[key];
        });
      }
      return prev;
    }, {});
  };
  const getColumnElIndex = (children, child) => {
    return [].indexOf.call(children, child);
  };
  return {
    columnId,
    realAlign,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex
  };
}
var columnIdSeed = 1;
var ElTableColumn = {
  name: "ElTableColumn",
  components: {
    ElCheckbox: script$1o
  },
  props: {
    type: {
      type: String,
      default: "default"
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {
      type: [Object, Number, String],
      default: () => {
        return {};
      }
    },
    minWidth: {
      type: [Object, Number, String],
      default: () => {
        return {};
      }
    },
    renderHeader: Function,
    sortable: {
      type: [Boolean, String],
      default: false
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
      type: Boolean,
      default: true
    },
    columnKey: String,
    align: String,
    headerAlign: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
      type: Boolean,
      default: true
    },
    index: [Number, Function],
    sortOrders: {
      type: Array,
      default() {
        return ["ascending", "descending", null];
      },
      validator(val) {
        return val.every((order) => ["ascending", "descending", null].indexOf(order) > -1);
      }
    }
  },
  setup(props2, {
    slots
  }) {
    const instance2 = getCurrentInstance();
    const columnConfig = ref({});
    const row = ref({});
    const r = ref({});
    const index_ = ref(0);
    const owner = computed(() => {
      let parent2 = instance2.parent;
      while (parent2 && !parent2.tableId) {
        parent2 = parent2.parent;
      }
      return parent2;
    });
    const {
      registerNormalWatchers,
      registerComplexWatchers
    } = useWatcher(owner, props2);
    const {
      columnId,
      isSubColumn,
      realHeaderAlign,
      columnOrTableParent,
      setColumnWidth,
      setColumnForcedProps,
      setColumnRenders,
      getPropsData,
      getColumnElIndex,
      realAlign
    } = useRender(props2, slots, owner);
    const parent = columnOrTableParent.value;
    columnId.value = (parent.tableId || parent.columnId) + "_column_" + columnIdSeed++;
    onBeforeMount(() => {
      isSubColumn.value = owner.value !== parent;
      const type2 = props2.type || "default";
      const sortable = props2.sortable === "" ? true : props2.sortable;
      const defaults2 = __spreadProps(__spreadValues({}, cellStarts[type2]), {
        id: columnId.value,
        type: type2,
        property: props2.prop || props2.property,
        align: realAlign,
        headerAlign: realHeaderAlign,
        showOverflowTooltip: props2.showOverflowTooltip || props2.showTooltipWhenOverflow,
        filterable: props2.filters || props2.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: false,
        filterOpened: false,
        sortable,
        index: props2.index
      });
      const basicProps = ["columnKey", "label", "className", "labelClassName", "type", "renderHeader", "formatter", "fixed", "resizable"];
      const sortProps = ["sortMethod", "sortBy", "sortOrders"];
      const selectProps = ["selectable", "reserveSelection"];
      const filterProps = ["filterMethod", "filters", "filterMultiple", "filterOpened", "filteredValue", "filterPlacement"];
      let column = getPropsData(basicProps, sortProps, selectProps, filterProps);
      column = mergeOptions$1(defaults2, column);
      const chains = compose(setColumnRenders, setColumnWidth, setColumnForcedProps);
      column = chains(column);
      columnConfig.value = column;
      registerNormalWatchers();
      registerComplexWatchers();
    });
    onMounted(() => {
      var _parent$refs$hiddenCo;
      const parent2 = columnOrTableParent.value;
      const children = isSubColumn.value ? parent2.vnode.el.children : (_parent$refs$hiddenCo = parent2.refs.hiddenColumns) === null || _parent$refs$hiddenCo === void 0 ? void 0 : _parent$refs$hiddenCo.children;
      const columnIndex = getColumnElIndex(children || [], instance2.vnode.el);
      owner.value.store.commit("insertColumn", columnConfig.value, columnIndex, isSubColumn.value ? parent2.columnConfig.value : null);
    });
    instance2.columnId = columnId.value;
    instance2.columnConfig = columnConfig;
    return {
      row,
      r,
      index_,
      columnId,
      columnConfig
    };
  },
  render() {
    var _this$$slots$default, _this$$slots;
    return h("div", (_this$$slots$default = (_this$$slots = this.$slots).default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots, {
      store: {},
      _self: {},
      column: {},
      row: {},
      index_: void 0
    }));
  }
};
ElTableColumn.install = function(app) {
  app.component(ElTableColumn.name, ElTableColumn);
};
var script$O = defineComponent({
  name: "ElNewTable",
  props: ["data"],
  setup(props2) {
    const {
      data
    } = toRefs(props2);
    useProvide();
    const {
      columns,
      registryColumn
    } = useColumns();
    const {
      tableHeads
    } = useTableHeads(columns);
    const {
      rows
    } = useRows(data, tableHeads);
    return {
      registryColumn,
      tableHeads,
      rows
    };
  }
});
function useProvide() {
  const instance2 = getCurrentInstance();
  provide("table", instance2.proxy);
}
function useColumns() {
  const columns = ref([]);
  function registryColumn(column) {
    columns.value.push(column);
  }
  return {
    columns,
    registryColumn
  };
}
function useTableHeads(columns) {
  const tableHeads = computed(() => {
    return columns.value.map((columnVM) => {
      const {
        prop,
        label
      } = columnVM.props;
      return {
        prop,
        label
      };
    });
  });
  return {
    tableHeads
  };
}
function useRows(data, tableHeads) {
  const rows = computed(() => {
    return data.value.map((item) => {
      return tableHeads.value.reduce((result, {
        prop: key
      }) => {
        result[key] = item[key];
        return result;
      }, {});
    });
  });
  return {
    rows
  };
}
function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("table", null, [createVNode("thead", null, [createVNode("tr", null, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.tableHeads, (column, index2) => {
    return openBlock(), createBlock("th", {
      key: index2
    }, toDisplayString(column.label), 1);
  }), 128))])]), createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.rows, (row, index2) => {
    return openBlock(), createBlock("tr", {
      key: index2
    }, [(openBlock(true), createBlock(Fragment, null, renderList(row, (val, key) => {
      return openBlock(), createBlock("td", {
        key
      }, toDisplayString(val), 1);
    }), 128))]);
  }), 128))]), renderSlot(_ctx.$slots, "default")]);
}
script$O.render = render$H;
script$O.__file = "src/components/Table/src/Table.vue";
script$O.install = function(app) {
  app.component(script$O.name, script$O);
};
var script$N = defineComponent({
  name: "ElNewTableColumn",
  props: ["prop", "label"],
  setup() {
    registrySelfToParent();
  }
});
function registrySelfToParent() {
  const instance2 = getCurrentInstance();
  const table = inject("table");
  if (table) {
    table.registryColumn(instance2);
  }
}
function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div");
}
script$N.render = render$G;
script$N.__file = "src/components/TableColumn/src/TableColumn.vue";
script$N.install = function(app) {
  app.component(script$N.name, script$N);
};
var typeFlag = Symbol("TREE_NODE");
var TreeNode = class {
  constructor(id, label, childNodes = [], {
    parent = null,
    isAsync = false,
    isVisable = true,
    isChecked = false,
    isIndeterminate = false,
    isExpanded = false,
    isDisabled = false,
    isDraggable = false,
    isLeaf: isLeaf2 = false,
    data = {},
    asyncLoadFn = () => null
  } = {}, {
    insertChild = null,
    appendChild = null,
    removeChild = null
  } = {}) {
    this.id = id || label;
    this.label = label;
    this.parent = parent;
    this.childNodes = childNodes;
    this.isVisable = isVisable;
    this.isChecked = isChecked;
    this.isIndeterminate = isIndeterminate;
    this.isExpanded = isExpanded;
    this.isDisabled = isDisabled;
    this.isDraggable = isDraggable;
    this.isRendered = false;
    this.data = data;
    this.isLeaf = isLeaf2;
    this.isAsync = isAsync;
    this.asyncState = "notload";
    this.asyncLoadFn = asyncLoadFn;
    this.interceptHandler = {
      insertChild,
      appendChild,
      removeChild
    };
    this.updateChildParent();
    this.updateChildChecked();
    this.updateCheckedState();
    this.updateExpandedState();
  }
  get root() {
    let root2 = this;
    this.upwardEach((node) => {
      root2 = node;
    });
    return root2;
  }
  get isLeaf() {
    return this.isAsync ? this.asyncState === "loaded" && this.childNodes.length === 0 : this.childNodes.length === 0;
  }
  set isLeaf(v) {
    if (v)
      this.asyncState = "loaded";
  }
  get isRoot() {
    return this.root === this;
  }
  get level() {
    if (!this.parent)
      return 0;
    return this.parent.level + 1;
  }
  get type() {
    return typeFlag;
  }
  get index() {
    const parent = this.parent;
    if (!parent)
      return -1;
    return parent.findChildIndex(this);
  }
  get checkedNodes() {
    return this.childNodes.filter((treeNode) => treeNode.isChecked && !treeNode.isIndeterminate);
  }
  loadAsync() {
    if (!this.isAsync || this.asyncState !== "notload") {
      return;
    }
    const resolveFn = (childNodes = []) => {
      this.append(...childNodes);
      this.asyncState = "loaded";
    };
    this.asyncState = "loading";
    this.asyncLoadFn(this, resolveFn);
  }
  updateChildParent() {
    this.childNodes.forEach((node) => {
      node.parent = this;
    });
  }
  updateChildChecked() {
    if (this.isChecked) {
      this.setChildChecked(true);
    }
  }
  updateCheckedState() {
    if (this.isLeaf) {
      return;
    }
    const checkedNodeLen = this.getCheckedNode().length;
    const childrenNodeLen = this.childNodes.length;
    if (childrenNodeLen === 0) {
      return;
    }
    if (checkedNodeLen === childrenNodeLen) {
      this.setCheckedState(1);
    } else if (checkedNodeLen === 0) {
      this.setCheckedState(0);
    } else {
      this.setCheckedState(2);
    }
  }
  updateExpandedState() {
    const childNodes = this.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      if (node.isExpanded) {
        this.isExpanded = true;
        return;
      }
    }
  }
  appendChild(node) {
    if (this.interceptHandler.appendChild) {
      const [_node] = this.interceptHandler.appendChild.apply(this, arguments);
      if (typeof _node !== "undefined")
        node = _node;
    }
    if (!TreeNode.isType(node)) {
      return false;
    }
    node.parent = this;
    if (this.isChecked) {
      node.setChecked(true);
    }
    this.childNodes.push(node);
    return true;
  }
  append(...nodes) {
    nodes.forEach((node) => {
      this.appendChild(node);
    });
    return true;
  }
  insertChild(index2, node) {
    if (this.interceptHandler.appendChild) {
      const [_index, _node] = this.interceptHandler.insertChild.apply(this, arguments);
      if (typeof _index !== "undefined")
        index2 = _index;
      if (typeof _node !== "undefined")
        node = _node;
    }
    if (!TreeNode.isType(node)) {
      return false;
    }
    if (this.isChecked) {
      node.setChecked(true);
    }
    node.parent = this;
    this.childNodes.splice(index2, 0, node);
    return true;
  }
  insert() {
    this.insertChild.apply(this, arguments);
  }
  removeChild(index2) {
    if (this.interceptHandler.appendChild) {
      this.interceptHandler.removeChild.apply(this, arguments);
    }
    if (index2 < 0 || index2 >= this.childNodes.length) {
      return false;
    }
    this.childNodes.splice(index2, 1);
    return true;
  }
  remove() {
    if (!this.parent) {
      return false;
    }
    return this.parent.removeChild(this.index);
  }
  setChecked(value, strictly = false) {
    this.isIndeterminate = false;
    let _value = !this.isChecked;
    if (typeof value !== "undefined") {
      _value = value;
    }
    this.isChecked = _value;
    if (!strictly) {
      this.upwardEach((node) => {
        if (!node.isDisabled)
          this.updateCheckedState.call(node);
      });
      this.depthEach((node) => {
        if (!node.isDisabled && node.isVisable)
          node.isChecked = _value;
      });
    }
    return this.isChecked;
  }
  setChildChecked(value) {
    this.childNodes.forEach((node) => node.isChecked = value);
  }
  upwardEach(callback, {
    isSkipSelf = true
  } = {}) {
    let current = isSkipSelf ? this.parent : this;
    while (current) {
      if (callback(current)) {
        return;
      }
      current = current.parent;
    }
  }
  depthEach(upToDownCallBack = () => false, downToUpCallBack = () => false) {
    const dfs = (node, deep) => {
      if (!TreeNode.isType(node)) {
        return;
      }
      for (let i = 0; i < node.childNodes.length; i++) {
        const _node = node.childNodes[i];
        if (upToDownCallBack(_node, node, deep))
          return;
        dfs(_node, deep + 1);
        if (downToUpCallBack(_node, node, deep))
          return;
      }
    };
    upToDownCallBack(this, this.parent, 0);
    dfs(this, 1);
    downToUpCallBack(this, this.parent, 0);
  }
  getCheckedNode() {
    return this.childNodes.filter((item) => item.isChecked);
  }
  setCheckedState(state) {
    const eunmState = [{
      isChecked: false,
      isIndeterminate: false
    }, {
      isChecked: true,
      isIndeterminate: false
    }, {
      isChecked: true,
      isIndeterminate: true
    }];
    if (!eunmState[state]) {
      return false;
    }
    this.isChecked = eunmState[state].isChecked;
    this.isIndeterminate = eunmState[state].isIndeterminate;
    return true;
  }
  findOne(target) {
    let res = null;
    this.depthEach((node) => {
      if (node.id == target || node === target) {
        res = node;
        return true;
      }
    });
    return res;
  }
  findMany(target) {
    const res = [];
    this.depthEach((node, parent, deep) => {
      if (typeof target === "function" && target(node, parent, deep) || typeof target === "string" && node.label.search(target) !== -1) {
        res.push(node);
      }
    });
    return res;
  }
  findChildIndex(target) {
    for (let i = 0; i < this.childNodes.length; i++) {
      const node = this.childNodes[i];
      if (node.id == target || node === target) {
        return i;
      }
    }
    return -1;
  }
  expand(value, ...extraNodes) {
    let _value = this.isExpanded;
    _value = typeof value === "undefined" ? !_value : value;
    this.isExpanded = _value;
    this.upwardEach((node) => {
      node.expand(true);
    });
    this.loadAsync();
    this.append(...extraNodes);
    this.isRendered = true;
  }
  filter(callback = () => true) {
    const arr = [];
    this.setSubTreeVisable(false);
    this.depthEach((node, parentNode, deep) => {
      const isShow = callback(node, parentNode, deep);
      if (isShow) {
        node.setVsiable(true);
        arr.push(node);
      }
    });
    return arr;
  }
  setSubTreeVisable(value) {
    this.depthEach((node) => {
      node.isVisable = value;
    });
  }
  setVsiable(value) {
    this.isVisable = value;
    this.upwardEach((node) => {
      node.isVisable = true;
    });
  }
  separation() {
    const parent = this.parent;
    if (!parent)
      return null;
    parent.removeChild(this.index);
    this.parent = null;
    return this;
  }
  isAllowMove(target) {
    if (target === this) {
      return false;
    }
    if (this.findOne(target)) {
      return false;
    }
    return true;
  }
  move(target, relative) {
    if (!this.isAllowMove(target, relative)) {
      return false;
    }
    this.separation();
    switch (relative) {
      case "top":
        target.parent.insertChild(target.index, this);
        return true;
      case "inner":
        target.expand(true, this);
        return true;
      case "bottom":
        target.parent.insertChild(target.index + 1, this);
        return true;
    }
  }
  collapse() {
    const parent = this.parent;
    if (!parent) {
      return;
    }
    parent.childNodes.forEach((node) => {
      if (node === this) {
        node.expand();
      } else {
        node.expand(false);
      }
    });
  }
  static isType(node) {
    if (typeof node !== "object") {
      return false;
    }
    return node.type === typeFlag;
  }
  static create(_a) {
    var _b = _a, {
      id,
      label,
      childNodes,
      interceptHandler
    } = _b, otherParams = __objRest(_b, [
      "id",
      "label",
      "childNodes",
      "interceptHandler"
    ]);
    return new TreeNode(id, label, childNodes, otherParams, interceptHandler);
  }
};
function nodeMap(target, callback = () => null, {
  childKey = "children",
  mapChildKey = "children"
} = {}) {
  const dfs = (node) => {
    if (isObject$2(node) && !isArray(node[childKey])) {
      const _cloneNode = __spreadValues({}, node);
      return callback(_cloneNode, node, true);
    }
    const cloneNode = __spreadValues({}, node);
    const newNode = callback(cloneNode, node, false);
    if (typeof newNode[childKey] !== "undefined")
      delete newNode[childKey];
    newNode[mapChildKey] = [];
    for (let i = 0; i < node[childKey].length; i++) {
      const _node = node[childKey][i];
      const ret = dfs(_node);
      ret.parent = newNode;
      newNode[mapChildKey].push(ret);
    }
    return newNode;
  };
  return dfs(target);
}
function nodeEach(target, callback = () => false, {
  childKey = "children",
  root: root2 = null
} = {}) {
  const dfs = (node) => {
    if (!isObject$2(node) || isArray(node)) {
      return;
    }
    const child = node[childKey] || [];
    for (let i = 0; i < child.length; i++) {
      const _node = child[i];
      if (callback(_node, node))
        return;
      dfs(_node);
    }
  };
  if (callback(target, root2))
    return;
  return dfs(target);
}
function transitionObjectKey(obj, keyMap = {}) {
  const transitionKeyList = Object.keys(keyMap);
  transitionKeyList.forEach((key) => {
    if (key !== keyMap[key]) {
      obj[key] = obj[keyMap[key]];
      delete obj[keyMap[key]];
    }
  });
  return obj;
}
var extractMethods = (obj, methods) => {
  const methodList = {};
  methods.forEach((method3) => {
    methodList[method3] = obj[method3].bind(obj);
  });
  return methodList;
};
function createAction(tree) {
  const appendChild = function(node) {
    if (TreeNode.isType(node)) {
      tree.appendRawNode(this, node.data.raw);
      return [node];
    }
    tree.appendRawNode(this, node);
    return [tree.rawNodeToTreeNode(node)];
  };
  const removeChild = function(index2) {
    tree.removeChildRawNode(this, index2);
  };
  const insertChild = function(index2, node) {
    if (TreeNode.isType(node)) {
      tree.insertRawNode(this, index2, node.data.raw);
      return [index2, node];
    }
    tree.insertRawNode(this, index2, node);
    return [index2, tree.rawNodeToTreeNode(node)];
  };
  return {
    appendChild,
    removeChild,
    insertChild
  };
}
var Tree = class {
  constructor(list, defaultNodeKey = {}, defaultNodeValue = {}) {
    this.isUpdateRaw = true;
    this.raw = list;
    this.injectAction = createAction(this);
    this.root = new TreeNode(Date.now(), "root", [], defaultNodeValue, this.injectAction);
    this.defaultNodeKey = Object.assign({
      id: "id",
      label: "label",
      childNodes: "childNodes",
      isDisabled: "isDisabled",
      isAsync: "isAsync",
      isChecked: "isChecked",
      isVisable: "isVisable",
      isExpanded: "isExpanded"
    }, defaultNodeKey);
    this.defaultNodeValue = Object.assign({}, defaultNodeValue);
    this.initRoot();
  }
  get isEmpty() {
    for (let i = 0; i < this.root.childNodes.length; i++) {
      const node = this.root.childNodes[i];
      if (node.isVisable) {
        return false;
      }
    }
    return true;
  }
  get checked() {
    const t2 = {};
    this.root.depthEach((node) => {
      node.isChecked && !node.isIndeterminate && (t2[node.id] = true);
    });
    return Object.keys(t2);
  }
  set checked(v) {
    this.setCheckedByIdList(v);
  }
  get expanded() {
    const t2 = {};
    this.root.depthEach((node) => {
      node.isExpanded && (t2[node.id] = true);
    });
    return Object.keys(t2);
  }
  set expanded(v) {
    this.setExpandedByIdList(v, true);
  }
  initRoot() {
    this.isUpdateRaw = false;
    this.root.childNodes = [];
    this.root.append(...this.raw);
    this.isUpdateRaw = true;
  }
  rawNodeToTreeNode(rawNode) {
    const {
      childNodes
    } = this.defaultNodeKey;
    return nodeMap(rawNode, (_node, node) => {
      const handledNode = transitionObjectKey(_node, this.defaultNodeKey);
      const treeNode = TreeNode.create(Object.assign({}, this.defaultNodeValue, {
        data: {
          raw: node
        },
        interceptHandler: this.injectAction
      }, handledNode, {
        childNodes: []
      }));
      return treeNode;
    }, {
      childKey: childNodes,
      mapChildKey: "childNodes"
    });
  }
  update() {
    this.initRoot();
  }
  removeChildRawNode(target, index2) {
    const {
      childNodes
    } = this.defaultNodeKey;
    if (!this.isUpdateRaw) {
      return;
    }
    let rawChild = target.data.raw ? target.data.raw[childNodes] : this.raw;
    if (!rawChild) {
      target.data.raw[childNodes] = [];
      rawChild = target.data.raw[childNodes];
    }
    rawChild.splice(index2, 1);
  }
  appendRawNode(target, rawNode) {
    const {
      childNodes
    } = this.defaultNodeKey;
    if (!this.isUpdateRaw) {
      return;
    }
    let rawChild = target.data.raw ? target.data.raw[childNodes] : this.raw;
    if (!rawChild) {
      target.data.raw[childNodes] = [];
      rawChild = target.data.raw[childNodes];
    }
    rawChild.push(rawNode);
  }
  insertRawNode(target, index2, rawNode) {
    const {
      childNodes
    } = this.defaultNodeKey;
    if (!this.isUpdateRaw) {
      return;
    }
    let rawChild = target.data.raw ? target.data.raw[childNodes] : this.raw;
    if (!rawChild) {
      target.data.raw[childNodes] = [];
      rawChild = target.data.raw[childNodes];
    }
    rawChild.splice(index2, 0, rawNode);
  }
  getParentRawNode(rawNode) {
    let parentNode = null;
    const {
      childNodes
    } = this.defaultNodeKey;
    nodeEach({
      [childNodes]: this.raw
    }, (current, parent) => {
      if (current === rawNode || current.id === rawNode.id) {
        parentNode = parent;
        return true;
      }
    }, {
      childKey: childNodes
    });
    return parentNode;
  }
  showAll() {
    this.root.setSubTreeVisable(true);
  }
  checkedAll() {
    this.root.setChecked(true);
  }
  expandAll() {
    this.root.depthEach((node) => {
      if (node.isLeaf) {
        node.expand(true);
      }
    });
  }
  setCheckedByIdList(idList = []) {
    console.log(idList.toString());
    this.root.depthEach((node) => {
      if (node === this.root) {
        return;
      }
      if (idList.indexOf(node.id) !== -1) {
        node.isChecked = true;
      }
    });
  }
  setExpandedByIdList(idList = [], value = true) {
    this.root.depthEach((node) => {
      if (idList.indexOf(node.id) !== -1) {
        node.expand(value);
      }
    });
  }
};
var script$M = {
  name: "ElNodeContent",
  props: {
    node: {
      required: true,
      type: TreeNode
    }
  },
  render(ctx2) {
    const elTree = inject("elTree");
    if (typeof elTree.slots.default === "function") {
      return elTree.slots.default({
        node: ctx2.node,
        data: ctx2.node.data.raw
      });
    } else if (typeof elTree.props.renderContent === "function") {
      return elTree.props.renderContent({
        node: ctx2.node,
        data: ctx2.node.data.raw
      });
    }
    return h("span", ctx2.node.label);
  }
};
script$M.__file = "packages/tree/NodeContent.vue";
var script$L = {
  name: "ElTreeNode",
  props: {
    node: TreeNode
  },
  components: {
    ElCollapseTransition,
    ElCheckbox: script$1o,
    ElNodeContent: script$M
  },
  setup(props2) {
    const elTree = inject("elTree");
    const onClickNode = (e) => {
      !elTree.props.expandOnClickNode || props2.node.isLeaf || (elTree.props.accordion ? props2.node.collapse() : props2.node.expand());
      !elTree.props.checkOnClickNode || props2.node.setChecked(void 0, elTree.props.checkStrictly);
      elTree.emit("node-click", props2.node, e);
      elTree.emit("current-change", props2.node, e);
      props2.node.isExpanded ? elTree.emit("node-expand", props2.node, e) : elTree.emit("node-collapse", props2.node, e);
    };
    const onRightEvent = (e) => {
      if (!elTree.vnode.props["onNode-contextmenu"])
        return;
      e.preventDefault();
      elTree.emit("node-contextmenu", props2.node, e);
    };
    const onChangeCheckbox = (e) => {
      props2.node.setChecked(void 0, elTree.props.checkStrictly);
      elTree.emit("check-change", props2.node, e);
    };
    return {
      elTree,
      onClickNode,
      onRightEvent,
      onChangeCheckbox
    };
  }
};
var _hoisted_1$x = {
  key: 1,
  class: "el-tree-node__loading-icon el-icon-loading"
};
function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_node_content = resolveComponent("el-node-content");
  const _component_el_tree_node = resolveComponent("el-tree-node");
  const _component_el_collapse_transition = resolveComponent("el-collapse-transition");
  return withDirectives((openBlock(), createBlock("div", {
    class: ["el-tree-node", {
      "is-expanded": $props.node.isExpanded,
      "is-current": $setup.elTree.proxy.dragState.current === $props.node,
      "is-hidden": !$props.node.isVisable,
      "is-focusable": !$props.node.isDisabled,
      "is-checked": $props.node.isChecked,
      "is-drop-inner": $setup.elTree.proxy.dragState.drop === "inner" && $setup.elTree.proxy.dragState.current === $props.node
    }],
    role: "TreeNode",
    tabindex: "-1",
    ref: "TreeNode",
    id: "TreeNode" + $props.node.id,
    "aria-expanded": $props.node.isExpanded,
    "aria-disabled": $props.node.isDisabled,
    "aria-checked": $props.node.isChecked,
    draggable: $setup.elTree.props.draggable || $props.node.isDraggable,
    "data-node-id": $props.node.id,
    onContextmenu: _cache[3] || (_cache[3] = withModifiers((...args) => $setup.onRightEvent && $setup.onRightEvent(...args), ["right", "stop"])),
    onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $setup.onClickNode && $setup.onClickNode(...args), ["stop"])),
    onDragstart: _cache[5] || (_cache[5] = withModifiers(($event) => $setup.elTree.proxy.handleDragStart($props.node, $event), ["stop"])),
    onDragover: _cache[6] || (_cache[6] = withModifiers(($event) => $setup.elTree.proxy.handleDragOver($props.node, $event), ["stop"])),
    onDragend: _cache[7] || (_cache[7] = withModifiers(($event) => $setup.elTree.proxy.handleDragEnd($props.node, $event), ["stop"])),
    onDrop: _cache[8] || (_cache[8] = withModifiers(($event) => $setup.elTree.proxy.handleDrop($props.node, $event), ["stop"]))
  }, [createVNode("div", {
    class: "el-tree-node__content",
    style: {
      "padding-left": ($props.node.level - 1) * $setup.elTree.props.indent + "px"
    }
  }, [createVNode("span", {
    class: [{
      expanded: $props.node.isExpanded,
      "is-leaf": $props.node.isLeaf
    }, "el-tree-node__expand-icon", $setup.elTree.props.iconClass],
    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $props.node.isLeaf || ($setup.elTree.props.accordion ? $props.node.collapse() : $props.node.expand()), ["stop"]))
  }, null, 2), $setup.elTree.props.showCheckbox ? (openBlock(), createBlock(_component_el_checkbox, {
    key: 0,
    modelValue: $props.node.isChecked,
    indeterminate: $props.node.isIndeterminate,
    disabled: $props.node.isDisabled,
    "onUpdate:modelValue": $setup.onChangeCheckbox,
    onClick: _cache[2] || (_cache[2] = ($event) => $setup.elTree.emit("check", $props.node, $props.node.isChecked, $event))
  }, null, 8, ["modelValue", "indeterminate", "disabled", "onUpdate:modelValue"])) : createCommentVNode("v-if", true), $props.node.asyncState === "loading" ? (openBlock(), createBlock("span", _hoisted_1$x)) : createCommentVNode("v-if", true), createVNode(_component_el_node_content, {
    class: "el-tree-node__label",
    node: $props.node
  }, null, 8, ["node"])], 4), createVNode(_component_el_collapse_transition, null, {
    default: withCtx(() => [!$setup.elTree.props.renderAfterExpand || $props.node.isRendered ? withDirectives((openBlock(), createBlock("div", {
      key: 0,
      class: "el-tree-node__children",
      role: "group",
      "aria-expanded": $props.node.isExpanded
    }, [(openBlock(true), createBlock(Fragment, null, renderList($props.node.childNodes, (child) => {
      return openBlock(), createBlock(_component_el_tree_node, {
        key: child.id,
        node: child
      }, null, 8, ["node"]);
    }), 128))], 8, ["aria-expanded"])), [[vShow, $props.node.isExpanded]]) : createCommentVNode("v-if", true)]),
    _: 1
  })], 42, ["id", "aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-node-id"])), [[vShow, $props.node.isVisable]]);
}
script$L.render = render$F;
script$L.__file = "packages/tree/TreeNode.vue";
var script$K = {
  name: "ElTree",
  components: {
    ElTreeNode: script$L
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String,
      default: () => t("el.tree.emptyText")
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false
    },
    checked: Array,
    expanded: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    allowDrag: Function,
    allowDrop: Function,
    defaultNodeKey: {
      type: Object,
      default: () => ({
        id: "id",
        label: "label",
        childNodes: "childNodes",
        isDisabled: "isDisabled",
        isAsync: "isAsync",
        isChecked: "isChecked",
        isVisable: "isVisable",
        isExpanded: "isExpanded",
        isLeaf: "isLeaf"
      })
    },
    highlightCurrent: Boolean,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    iconClass: {
      type: String,
      default: "el-icon-caret-right"
    },
    async: {
      type: Boolean,
      default: false
    },
    asyncLoadFn: Function,
    showRootNode: Boolean
  },
  emits: ["node-click", "node-contextmenu", "check-change", "check", "current-change", "node-expand", "node-collapse", "node-drag-start", "node-drag-enter", "node-drag-leave", "node-drag-over", "node-drag-end", "node-drop", "update:checked", "update:expanded"],
  setup(props2) {
    const instance2 = getCurrentInstance();
    const tree = new Tree(props2.data, props2.defaultNodeKey, {
      asyncLoadFn: props2.asyncLoadFn,
      isAsync: props2.async
    });
    const state = reactive({
      tree
    });
    provide("elTree", instance2);
    useTab();
    useExpand(props2, state);
    useCheckbox(props2, state);
    useFocusNode(props2);
    const {
      handleKeydown
    } = useKeyDown();
    const drag = useDrag(props2);
    return __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, drag), toRefs(state)), extractMethods(state.tree.root, ["append", "remove", "insert", "removeChild", "setChecked", "setChildChecked", "upwardEach", "depthEach", "findOne", "findMany", "findChildIndex", "expand", "setVsiable", "move", "filter"])), extractMethods(state.tree, ["initRoot", "getParentRawNode", "showAll", "checkedAll", "expandAll"])), {
      tree: state.tree,
      root: state.tree.root,
      handleKeydown
    });
  }
};
function useCheckbox(props2, state) {
  const instance2 = getCurrentInstance();
  const {
    emit
  } = instance2;
  watchEffect(() => {
    if (props2.checked)
      state.tree.setCheckedByIdList(props2.checked);
  });
  watchEffect(() => {
    emit("update:checked", state.tree.checked);
  });
}
function useExpand(props2, state) {
  const instance2 = getCurrentInstance();
  const {
    emit
  } = instance2;
  if (props2.defaultExpandAll) {
    state.tree.expandAll();
  }
  watchEffect(() => {
    emit("update:expanded", state.tree.expanded);
  });
  watchEffect(() => {
    state.tree.setExpandedByIdList(props2.expanded, true);
  });
  onMounted(() => {
    state.tree.root.expand(true);
  });
}
function useTab() {
  const instance2 = getCurrentInstance();
  const {
    proxy
  } = instance2;
  const initCheckbox = () => {
    const checkboxItems = proxy.$el.querySelectorAll("input[type=checkbox]");
    Array.prototype.forEach.call(checkboxItems, (checkbox) => {
      checkbox.setAttribute("tabindex", -1);
    });
  };
  const initTabIndex = () => {
    const treeItems = proxy.$el.querySelectorAll(".is-focusable[role=TreeItem]");
    const checkedItem = proxy.$el.querySelectorAll(".is-checked[role=TreeItem]");
    if (checkedItem.length) {
      checkedItem[0].setAttribute("tabindex", 0);
      return;
    }
    treeItems[0] && treeItems[0].setAttribute("tabindex", 0);
  };
  onMounted(initTabIndex);
  onUpdated(initCheckbox);
}
function useKeyDown() {
  const instance2 = getCurrentInstance();
  const {
    proxy
  } = instance2;
  const handleKeydown = (ev) => {
    const currentItem = ev.target;
    if (currentItem.className.indexOf("el-tree-node") === -1)
      return;
    const {
      key
    } = ev;
    const treeItems = proxy.$el.querySelectorAll(".is-focusable[role=TreeNode]");
    const treeItemArray = Array.prototype.slice.call(treeItems);
    const currentIndex = treeItemArray.indexOf(currentItem);
    let nextIndex;
    if (["ArrowUp", "ArrowDown"].indexOf(key) > -1) {
      ev.preventDefault();
      if (key === "ArrowUp") {
        nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
      } else {
        nextIndex = currentIndex < treeItemArray.length - 1 ? currentIndex + 1 : 0;
      }
      treeItemArray[nextIndex].focus();
    }
    if (["ArrowLeft", "ArrowRight"].indexOf(key) > -1) {
      currentItem.click();
      ev.preventDefault();
    }
    const hasInput = currentItem.querySelector('[type="checkbox"]');
    if (["Enter", "Space"].indexOf(key) > -1 && hasInput) {
      hasInput.click();
      ev.preventDefault();
    }
  };
  return {
    handleKeydown
  };
}
function useDrag(props2) {
  const instance2 = getCurrentInstance();
  const {
    emit
  } = instance2;
  const dropIndicator = ref();
  const dragState = reactive({
    start: null,
    current: null,
    last: null,
    drop: ""
  });
  const handleDragStart = (node, e) => {
    if (typeof props2.allowDrag === "function" && !props2.allowDrag(node, e)) {
      e.preventDefault();
      return false;
    }
    dragState.start = node;
    emit("node-drag-start", node, e);
  };
  const handleDragOver = (node, e) => {
    dragState.current = node;
    if (dragState.start === node)
      return;
    const margin = 7;
    const target = e.path.find((item) => item.id === "TreeNode" + node.id);
    const currentBound = target.getBoundingClientRect();
    const mourseY = e.clientY;
    if (currentBound.top + margin > mourseY) {
      dropIndicator.value.style.top = target.offsetTop + "px";
      dropIndicator.value.style.left = node.level * props2.indent + "px";
      dragState.drop = "top";
    } else if (currentBound.top + currentBound.height - margin < mourseY) {
      dropIndicator.value.style.top = target.offsetTop + currentBound.height + "px";
      dropIndicator.value.style.left = node.level * props2.indent + "px";
      dragState.drop = "bottom";
    } else {
      dragState.drop = "inner";
      node.expand(true);
    }
    e && e.dataTransfer && isFunction$1(e.dataTransfer.setData) && e.dataTransfer.setData("text/plain", "");
    e.preventDefault();
    emit("node-drag-enter", dragState.start, node, e);
    emit("node-drag-over", dragState.start, node, e);
    emit("node-drag-leave", dragState.start, dragState.last, e);
    dragState.last = node;
  };
  const handleDragEnd = (node, e) => {
    dragState.current = null;
    emit("node-drag-end", dragState.start, node, e);
  };
  const handleDrop = (node, e) => {
    if (typeof props2.allowDrog === "function" && !props2.allowDrog(dragState.start, node, dragState.drop, e)) {
      e.preventDefault();
      return false;
    }
    dragState.last = node;
    dragState.start.move(node, dragState.drop);
    emit("node-drop", dragState.start, node, e);
  };
  return {
    dragState,
    dropIndicator,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDrop
  };
}
function useFocusNode(props2) {
  onMounted(() => {
    if (props2.currentNodeKey) {
      const node = document.getElementById("TreeNode" + props2.currentNodeKey);
      if (node) {
        node.focus();
      }
    }
  });
}
var _hoisted_1$w = {
  key: 2,
  class: "el-tree__empty-block"
};
var _hoisted_2$j = {
  class: "el-tree__empty-text"
};
var _hoisted_3$f = {
  class: "el-tree__drop-indicator",
  ref: "dropIndicator"
};
function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tree_node = resolveComponent("el-tree-node");
  return openBlock(), createBlock("div", {
    class: ["el-tree", {
      "el-tree--highlight-current": $props.highlightCurrent
    }],
    role: "Tree",
    onKeydown: _cache[1] || (_cache[1] = (...args) => $setup.handleKeydown && $setup.handleKeydown(...args))
  }, [$props.showRootNode ? (openBlock(), createBlock(_component_el_tree_node, {
    node: $setup.tree.root,
    key: $setup.tree.root.id
  }, null, 8, ["node"])) : (openBlock(true), createBlock(Fragment, {
    key: 1
  }, renderList($setup.tree.root.childNodes, (child) => {
    return openBlock(), createBlock(_component_el_tree_node, {
      node: child,
      key: child.id
    }, null, 8, ["node"]);
  }), 128)), $setup.tree.isEmpty ? (openBlock(), createBlock("div", _hoisted_1$w, [createVNode("span", _hoisted_2$j, toDisplayString($props.emptyText), 1)])) : createCommentVNode("v-if", true), withDirectives(createVNode("div", _hoisted_3$f, null, 512), [[vShow, _ctx.dragState.current && (_ctx.dragState.drop === "top" || _ctx.dragState.drop === "bottom")]])], 34);
}
script$K.render = render$E;
script$K.__file = "packages/tree/Tree.vue";
script$K.install = function(app) {
  app.component(script$K.name, script$K);
};
var script$J = {
  name: "ElPager",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 5
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:currentPage"],
  setup(props2, {
    emit
  }) {
    const {
      currentPage,
      pageCount,
      pagerCount,
      disabled
    } = toRefs(props2);
    const {
      quickClass,
      showMore,
      onMouseEnter
    } = useClass$1();
    const {
      pagers,
      onPagerClick
    } = usePager({
      currentPage,
      pageCount,
      pagerCount,
      showMore,
      disabled,
      emit
    });
    return {
      pagers,
      showMore,
      quickClass,
      onMouseEnter,
      onPagerClick
    };
  }
};
var useClass$1 = () => {
  const showMore = reactive({
    left: false,
    right: false
  });
  const quickClass = reactive({
    left: "el-icon-more",
    right: "el-icon-more"
  });
  watch(showMore, (v) => {
    for (const vKey in v) {
      if (!v[vKey])
        quickClass[vKey] = "el-icon-more";
    }
  });
  const onMouseEnter = (direction) => {
    quickClass[direction] = `el-icon-d-arrow-${direction}`;
  };
  return {
    showMore,
    quickClass,
    onMouseEnter
  };
};
var usePager = ({
  currentPage,
  pageCount,
  pagerCount,
  showMore,
  disabled,
  emit
}) => {
  const pagers = computed(() => {
    const pagerValue = pagerCount.value;
    const halfPagerCount = (pagerValue - 1) / 2;
    const currentValue = Number(currentPage.value);
    const pageValue = Number(pageCount.value);
    let showPrevMore = false;
    let showNextMore = false;
    if (pageValue > pagerValue) {
      if (currentValue > pagerValue - halfPagerCount)
        showPrevMore = true;
      if (currentValue < pageValue - halfPagerCount)
        showNextMore = true;
    }
    const array3 = [];
    if (showPrevMore && !showNextMore) {
      const startPage = pageValue - (pagerValue - 2);
      for (let i = startPage; i < pageValue; i++) {
        array3.push(i);
      }
    } else if (!showPrevMore && showNextMore) {
      for (let i = 2; i < pagerValue; i++) {
        array3.push(i);
      }
    } else if (showPrevMore && showNextMore) {
      const offset = Math.floor(pagerValue / 2) - 1;
      for (let i = currentValue - offset; i <= currentValue + offset; i++) {
        array3.push(i);
      }
    } else {
      for (let i = 2; i < pageValue; i++) {
        array3.push(i);
      }
    }
    showMore.left = showPrevMore;
    showMore.right = showNextMore;
    return array3;
  });
  const onPagerClick = (event) => {
    const target = event.target;
    if (target.tagName === "UL" || disabled.value) {
      return;
    }
    let newPage = Number(event.target.textContent);
    const pagerCountOffset = pagerCount.value - 2;
    if (target.className.indexOf("more") !== -1) {
      if (target.className.indexOf("quickprev") !== -1) {
        newPage = currentPage.value - pagerCountOffset;
      } else if (target.className.indexOf("quicknext") !== -1) {
        newPage = +currentPage.value + pagerCountOffset;
      }
    }
    if (!isNaN(newPage)) {
      if (newPage < 1)
        newPage = 1;
      if (newPage > pageCount.value)
        newPage = pageCount.value;
    }
    if (newPage !== currentPage.value)
      emit("update:currentPage", newPage);
  };
  return {
    pagers,
    onPagerClick
  };
};
function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("ul", {
    onClick: _cache[5] || (_cache[5] = (...args) => $setup.onPagerClick && $setup.onPagerClick(...args)),
    class: "el-pager"
  }, [$props.pageCount > 0 ? (openBlock(), createBlock("li", {
    key: 0,
    class: [{
      active: $props.currentPage === 1,
      disabled: $props.disabled
    }, "number"]
  }, " 1 ", 2)) : createCommentVNode("v-if", true), $setup.showMore.left ? (openBlock(), createBlock("li", {
    key: 1,
    class: ["el-icon more btn-quickprev", [$setup.quickClass.left, {
      disabled: $props.disabled
    }]],
    onMouseenter: _cache[1] || (_cache[1] = ($event) => $setup.onMouseEnter("left")),
    onMouseleave: _cache[2] || (_cache[2] = ($event) => $setup.quickClass.left = "el-icon-more")
  }, null, 34)) : createCommentVNode("v-if", true), (openBlock(true), createBlock(Fragment, null, renderList($setup.pagers, (pager) => {
    return openBlock(), createBlock("li", {
      key: pager,
      class: [{
        active: $props.currentPage === pager,
        disabled: $props.disabled
      }, "number"]
    }, toDisplayString(pager), 3);
  }), 128)), $setup.showMore.right ? (openBlock(), createBlock("li", {
    key: 2,
    class: ["el-icon more btn-quicknext", [$setup.quickClass.right, {
      disabled: $props.disabled
    }]],
    onMouseenter: _cache[3] || (_cache[3] = ($event) => $setup.onMouseEnter("right")),
    onMouseleave: _cache[4] || (_cache[4] = ($event) => $setup.quickClass.right = "el-icon-more")
  }, null, 34)) : createCommentVNode("v-if", true), $props.pageCount > 1 ? (openBlock(), createBlock("li", {
    key: 3,
    class: [{
      active: $props.currentPage === $props.pageCount,
      disabled: $props.disabled
    }, "number"]
  }, toDisplayString($props.pageCount), 3)) : createCommentVNode("v-if", true)]);
}
script$J.render = render$D;
script$J.__file = "packages/pagination/components/Pager.vue";
var script$I = {
  name: "Prev",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    prevText: {
      type: String,
      default: ""
    },
    prev: Function
  },
  setup(props2) {
    const isDisabled = computed(() => props2.disabled || props2.currentPage <= 1);
    return __spreadProps(__spreadValues({}, toRefs(props2)), {
      isDisabled
    });
  }
};
var _hoisted_1$v = {
  key: 0
};
var _hoisted_2$i = {
  key: 1,
  class: "el-icon el-icon-arrow-left"
};
function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    type: "button",
    class: "btn-prev",
    disabled: $setup.isDisabled,
    onClick: _cache[1] || (_cache[1] = (...args) => $props.prev && $props.prev(...args))
  }, [$props.prevText ? (openBlock(), createBlock("span", _hoisted_1$v, toDisplayString($props.prevText), 1)) : (openBlock(), createBlock("i", _hoisted_2$i))], 8, ["disabled"]);
}
script$I.render = render$C;
script$I.__file = "packages/pagination/components/Prev.vue";
var script$H = {
  name: "Next",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nextText: {
      type: String,
      default: ""
    },
    next: Function
  },
  setup(props2) {
    const isDisabled = computed(() => props2.disabled || props2.currentPage === props2.pageCount || props2.pageCount === 0);
    return __spreadProps(__spreadValues({}, toRefs(props2)), {
      isDisabled
    });
  }
};
var _hoisted_1$u = {
  key: 0
};
var _hoisted_2$h = {
  key: 1,
  class: "el-icon el-icon-arrow-right"
};
function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", {
    type: "button",
    class: "btn-next",
    disabled: $setup.isDisabled,
    onClick: _cache[1] || (_cache[1] = (...args) => $props.next && $props.next(...args))
  }, [$props.nextText ? (openBlock(), createBlock("span", _hoisted_1$u, toDisplayString($props.nextText), 1)) : (openBlock(), createBlock("i", _hoisted_2$h))], 8, ["disabled"]);
}
script$H.render = render$B;
script$H.__file = "packages/pagination/components/Next.vue";
var script$G = {
  name: "Jumper",
  components: {
    ElInput: script$1l
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change"],
  setup(props2, {
    emit
  }) {
    const userInput = ref(null);
    const {
      currentPage
    } = toRefs(props2);
    const t2 = useLocale();
    const showValue = computed(() => {
      var _userInput$value;
      return (_userInput$value = userInput.value) !== null && _userInput$value !== void 0 ? _userInput$value : currentPage.value;
    });
    const handleInput = (val) => {
      userInput.value = val;
    };
    const handleChange = (val) => {
      emit("change", val);
      userInput.value = null;
    };
    return {
      showValue,
      t: t2,
      handleInput,
      handleChange
    };
  }
};
var _hoisted_1$t = {
  class: "el-pagination__jump"
};
function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  return openBlock(), createBlock("span", _hoisted_1$t, [createTextVNode(toDisplayString($setup.t("el.pagination.goto")) + " ", 1), createVNode(_component_el_input, {
    class: "el-pagination__editor is-in-pagination",
    min: 1,
    max: $props.pageCount,
    modelValue: $setup.showValue,
    type: "number",
    disabled: $props.disabled,
    onInput: $setup.handleInput,
    onChange: $setup.handleChange
  }, null, 8, ["max", "modelValue", "disabled", "onInput", "onChange"]), createTextVNode(" " + toDisplayString($setup.t("el.pagination.pageClassifier")), 1)]);
}
script$G.render = render$A;
script$G.__file = "packages/pagination/components/Jumper.vue";
var Total = (props2) => {
  return typeof props2.total === "number" ? h("span", {
    class: "el-pagination__total"
  }, useLocale()("el.pagination.total", {
    total: props2.total
  })) : "";
};
var script$F = {
  name: "Sizes",
  components: {
    ElSelect: script$1g,
    ElOption: script$1i
  },
  props: {
    pageSizes: Array,
    pageSize: Number,
    popperClass: String,
    handleChange: Function,
    disabled: Boolean,
    watchHandler: Function
  },
  setup(props2) {
    const {
      popperClass,
      pageSizes
    } = toRefs(props2);
    const t2 = useLocale();
    const internalPopperClass = computed(() => (popperClass === null || popperClass === void 0 ? void 0 : popperClass.value) || "");
    watch(pageSizes, props2.watchHandler);
    return __spreadProps(__spreadValues({}, toRefs(props2)), {
      internalPopperClass,
      t: t2
    });
  }
};
var _hoisted_1$s = {
  class: "el-pagination__sizes"
};
function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  return openBlock(), createBlock("span", _hoisted_1$s, [createVNode(_component_el_select, {
    modelValue: $props.pageSize,
    popperClass: $setup.internalPopperClass,
    size: "mini",
    onChange: $props.handleChange,
    disabled: $props.disabled
  }, {
    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($props.pageSizes, (item) => {
      return openBlock(), createBlock(_component_el_option, {
        value: item,
        label: item + $setup.t("el.pagination.pagesize"),
        key: item
      }, null, 8, ["value", "label"]);
    }), 128))]),
    _: 1
  }, 8, ["modelValue", "popperClass", "onChange", "disabled"])]);
}
script$F.render = render$z;
script$F.__file = "packages/pagination/components/Sizes.vue";
var useLayout = (layout) => {
  const template = [];
  const rightWrapper = [];
  const components2 = layout.split(",").map((item) => item.trim());
  const findIndex = components2.findIndex((item) => item === "->");
  for (let i = 0; i < components2.length; i++) {
    if (findIndex >= 0) {
      if (i === findIndex)
        continue;
      if (i < findIndex) {
        template.push(components2[i]);
      } else {
        rightWrapper.push(components2[i]);
      }
    } else {
      template.push(components2[i]);
    }
  }
  return {
    template,
    rightWrapper
  };
};
var getValidCurrentPage = (value, pageCount) => {
  var _resetValue;
  value = parseInt(value, 10);
  const havePageCount = typeof pageCount === "number";
  let resetValue;
  if (!havePageCount) {
    if (isNaN(value) || value < 1)
      resetValue = 1;
  } else {
    if (value < 1) {
      resetValue = 1;
    } else if (value > pageCount) {
      resetValue = pageCount;
    }
  }
  if (resetValue === void 0 && isNaN(value) || resetValue === 0) {
    resetValue = 1;
  }
  return (_resetValue = resetValue) !== null && _resetValue !== void 0 ? _resetValue : value;
};
var useInternalCurrentPage = ({
  currentPage,
  emit,
  emitted
}) => {
  const innerCurrentPage = ref(null);
  return computed({
    get() {
      var _ref, _innerCurrentPage$val;
      return (_ref = (_innerCurrentPage$val = innerCurrentPage.value) !== null && _innerCurrentPage$val !== void 0 ? _innerCurrentPage$val : currentPage === null || currentPage === void 0 ? void 0 : currentPage.value) !== null && _ref !== void 0 ? _ref : 1;
    },
    set(v) {
      emit("update:currentPage", v);
      emit("currentChange", v);
      if (currentPage) {
        watch(currentPage, () => {
          emitted.value = true;
        });
      }
      if (emitted.value)
        innerCurrentPage.value = null;
      else
        innerCurrentPage.value = v;
      emitted.value = false;
    }
  });
};
var userInternalPageSize = ({
  pageSize,
  emit,
  emitted
}) => {
  const innerPageSize = ref(null);
  return computed({
    get() {
      var _innerPageSize$value;
      return (_innerPageSize$value = innerPageSize.value) !== null && _innerPageSize$value !== void 0 ? _innerPageSize$value : pageSize.value;
    },
    set(v) {
      emit("update:pageSize", v);
      emit("sizeChange", v);
      innerPageSize.value = v;
      if (pageSize) {
        watch(pageSize, () => {
          emitted.value = true;
        });
      }
      if (emitted.value)
        innerPageSize.value = null;
      emitted.value = false;
    }
  });
};
var useInternalPageCount = ({
  pageCount,
  total,
  pageSize
}) => {
  const internalPageCount = computed(() => {
    if (!total && !pageCount)
      return 5;
    if (typeof (total === null || total === void 0 ? void 0 : total.value) === "number") {
      return Math.max(1, Math.ceil(total.value / pageSize.value));
    } else if (typeof (pageCount === null || pageCount === void 0 ? void 0 : pageCount.value) === "number") {
      return Math.max(1, pageCount.value);
    } else {
      return 0;
    }
  });
  return {
    internalPageCount
  };
};
var ElPagination = {
  name: "ElPagination",
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    small: Boolean,
    total: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator(value) {
        return (value || 0) === value && value > 4 && value < 22 && value % 2 === 1;
      },
      default: 7
    },
    currentPage: {
      type: Number,
      default: 1
    },
    layout: {
      default: "prev, pager, next, jumper, ->, total"
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },
    popperClass: String,
    prevText: String,
    nextText: String,
    background: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean
  },
  emits: ["update:currentPage", "update:pageSize", "currentChange", "sizeChange", "prevClick", "nextClick"],
  setup(props2, {
    emit
  }) {
    const currentPageEmitted = ref(false);
    const pageSizeEmitted = ref(false);
    const {
      currentPage,
      total,
      pageCount,
      pageSize,
      disabled,
      pageSizes
    } = toRefs(props2);
    const internalCurrentPage = useInternalCurrentPage({
      currentPage,
      emit,
      emitted: currentPageEmitted
    });
    const internalPageSize = userInternalPageSize({
      pageSize,
      pageSizes,
      emit,
      emitted: pageSizeEmitted
    });
    const {
      internalPageCount
    } = useInternalPageCount({
      pageCount,
      total,
      pageSize: internalPageSize
    });
    return {
      internalCurrentPage,
      internalPageCount,
      internalPageSize,
      prev() {
        if (disabled.value)
          return;
        internalCurrentPage.value = getValidCurrentPage(internalCurrentPage.value - 1, internalPageCount.value);
        emit("prevClick", internalCurrentPage.value);
      },
      next() {
        if (disabled.value)
          return;
        internalCurrentPage.value = getValidCurrentPage(internalCurrentPage.value + 1, internalPageCount.value);
        emit("nextClick", internalCurrentPage.value);
      },
      onUpdate(val) {
        internalCurrentPage.value = val;
      },
      handleChange(val) {
        internalCurrentPage.value = getValidCurrentPage(val, internalPageCount.value);
      },
      handleSizeChange(val) {
        if (val !== internalPageSize.value) {
          internalPageSize.value = val = parseInt(val, 10);
        }
      },
      watchHandler(newValue) {
        if (valueEquals(newValue, pageSizes.value))
          return;
        if (Array.isArray(newValue)) {
          internalPageSize.value = newValue.indexOf(internalPageSize.value) > -1 ? internalPageSize.value : pageSizes.value[0];
        }
      }
    };
  },
  render() {
    var _this$$slots$default, _this$$slots;
    if (!this.layout || this.hideOnSinglePage && this.internalPageCount === 1)
      return "";
    const {
      template,
      rightWrapper
    } = useLayout(this.layout);
    const templateComponent = {
      prev: createVNode(script$I, {
        "currentPage": this.internalCurrentPage,
        "disabled": this.disabled,
        "prevText": this.prevText,
        "prev": this.prev
      }, null),
      jumper: createVNode(script$G, {
        "currentPage": this.internalCurrentPage,
        "pageCount": this.internalPageCount,
        "disabled": this.disabled,
        "onChange": this.handleChange
      }, null),
      pager: createVNode(script$J, {
        "currentPage": this.internalCurrentPage,
        "onUpdate:currentPage": ($event) => this.internalCurrentPage = $event,
        "pageCount": this.internalPageCount,
        "disabled": this.disabled
      }, null),
      next: createVNode(script$H, {
        "currentPage": this.internalCurrentPage,
        "pageCount": this.internalPageCount,
        "disabled": this.disabled,
        "nextText": this.nextText,
        "next": this.next
      }, null),
      sizes: createVNode(script$F, {
        "pageSizes": this.pageSizes,
        "pageSize": this.internalPageSize,
        "popperClass": this.popperClass,
        "handleChange": this.handleSizeChange,
        "disabled": this.disabled,
        "watchHandler": this.watchHandler
      }, null),
      slot: createVNode(Fragment, null, [(_this$$slots$default = (_this$$slots = this.$slots).default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots)]),
      total: createVNode(Total, {
        "total": this.total
      }, null)
    };
    return createVNode("div", {
      "class": ["el-pagination", {
        "is-background": this.background,
        "el-pagination--small": this.small
      }]
    }, [rightWrapper.length ? createVNode("div", {
      "className": "el-pagination__rightwrapper"
    }, [rightWrapper.map((item) => {
      const Comp = templateComponent[item];
      return createVNode(Comp, null, null);
    })]) : "", template.map((item) => {
      const Comp = templateComponent[item];
      return createVNode(Comp, null, null);
    })]);
  }
};
ElPagination.install = function(app) {
  app.component(ElPagination.name, ElPagination);
};
var script$E = defineComponent({
  name: "ElBadge",
  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      default: "danger",
      validator(val) {
        return ["primary", "success", "warning", "info", "danger"].includes(val);
      }
    }
  },
  setup(props2) {
    const badgeNumber = useBadgeNumber(props2);
    const isShow = useShow(props2);
    return {
      badgeNumber,
      isShow
    };
  }
});
var useBadgeNumber = (props2) => {
  return computed(() => {
    if (!props2.max || isString(props2.value)) {
      return props2.value;
    }
    if (props2.value <= props2.max) {
      return props2.value;
    }
    return `${props2.max}+`;
  });
};
var useShow = (props2) => {
  return computed(() => {
    if (props2.hidden) {
      return false;
    }
    if (props2.value == 0) {
      return false;
    }
    return true;
  });
};
var _hoisted_1$r = {
  class: "el-badge"
};
function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$r, [renderSlot(_ctx.$slots, "default"), createVNode(Transition, {
    name: "el-zoom-in-center"
  }, {
    default: withCtx(() => [_ctx.isShow ? (openBlock(), createBlock("sup", {
      key: 0,
      class: ["el-badge__content", ["el-badge__content--" + _ctx.type, {
        "is-fixed": _ctx.$slots.default,
        "is-dot": _ctx.isDot
      }]],
      textContent: toDisplayString(_ctx.badgeNumber)
    }, null, 10, ["textContent"])) : createCommentVNode("v-if", true)]),
    _: 1
  })]);
}
script$E.render = render$y;
script$E.__file = "src/components/Badge/src/Badge.vue";
script$E.install = function(app) {
  app.component(script$E.name, script$E);
};
var props$1 = {
  icon: {
    type: String
  },
  size: {
    type: [Number, String],
    default: "large",
    validator(val) {
      if (isString(val)) {
        return ["large", "medium", "small"].includes(val);
      }
      return isNumber(val);
    }
  },
  shape: {
    type: String,
    default: "circle",
    validator(val) {
      return ["circle", "square"].includes(val);
    }
  },
  src: {
    type: String
  },
  alt: {
    type: String
  },
  srcSet: {
    type: String
  },
  fit: {
    type: String,
    default: "cover"
  },
  error: {
    type: Function
  }
};
var script$D = defineComponent({
  name: "ElAvatar",
  props: props$1,
  setup(props2) {
    const {
      size,
      shape,
      icon,
      error
    } = toRefs(props2);
    const style = useStyle(size);
    const isShow = ref(true);
    const classes = useClass(size, shape, icon);
    const handleError = (e) => {
      const ret = error === null || error === void 0 ? void 0 : error.value(e);
      if (ret !== false) {
        isShow.value = false;
      }
    };
    return {
      style,
      isShow,
      classes,
      handleError
    };
  }
});
var useStyle = (size) => {
  if (!isNumber(size.value)) {
    return {};
  }
  return computed(() => {
    return {
      lineHeight: `${size.value}px`,
      height: `${size.value}px`,
      width: `${size.value}px`
    };
  });
};
var useClass = (size, shape, icon) => {
  return computed(() => {
    const classList = ["el-avatar"];
    if (isString(size.value)) {
      classList.push(`el-avatar--${size.value}`);
    }
    if (shape) {
      classList.push(`el-avatar--${shape.value}`);
    }
    if (icon) {
      classList.push("el-avatar--icon");
    }
    return classList;
  });
};
function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", {
    style: _ctx.style,
    class: _ctx.classes
  }, [_ctx.isShow && _ctx.src ? (openBlock(), createBlock("img", {
    key: 0,
    src: _ctx.src,
    alt: _ctx.alt,
    srcSet: _ctx.srcSet,
    onError: _cache[1] || (_cache[1] = (...args) => _ctx.handleError && _ctx.handleError(...args)),
    style: {
      "object-fit": _ctx.fit
    }
  }, null, 44, ["src", "alt", "srcSet"])) : _ctx.icon ? (openBlock(), createBlock("i", {
    key: 1,
    class: _ctx.icon
  }, null, 2)) : renderSlot(_ctx.$slots, "default", {
    key: 2
  })], 6);
}
script$D.render = render$x;
script$D.__file = "src/components/Avatar/src/Avatar.vue";
script$D.install = function(app) {
  app.component(script$D.name, script$D);
};
var TYPE_CLASSES_MAP = {
  success: "el-icon-success",
  warning: "el-icon-warning",
  error: "el-icon-error"
};
var script$C = {
  name: "ElAlert",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ""
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: "light",
      validator: function(value) {
        return ["light", "dark"].indexOf(value) !== -1;
      }
    }
  },
  emits: ["close"],
  setup(props2, {
    emit,
    slots
  }) {
    const {
      description,
      type: type2
    } = toRefs(props2);
    const visible = ref(true);
    const close2 = () => {
      visible.value = false;
      emit("close");
    };
    const typeClass = computed(() => {
      return `el-alert--${type2.value}`;
    });
    const iconClass = computed(() => {
      return TYPE_CLASSES_MAP[type2.value] || "el-icon-info";
    });
    const isBigIcon = computed(() => {
      return description.value || slots.default ? "is-big" : "";
    });
    const isBoldTitle = computed(() => {
      return description.value || slots.default ? "is-bold" : "";
    });
    return {
      visible,
      typeClass,
      iconClass,
      isBigIcon,
      isBoldTitle,
      close: close2
    };
  }
};
var _hoisted_1$q = {
  class: "el-alert__content"
};
var _hoisted_2$g = {
  key: 1,
  class: "el-alert__description"
};
var _hoisted_3$e = {
  key: 2,
  class: "el-alert__description"
};
function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "el-alert-fade"
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: ["el-alert", [$setup.typeClass, $props.center ? "is-center" : "", "is-" + $props.effect]],
      role: "alert"
    }, [$props.showIcon ? (openBlock(), createBlock("i", {
      key: 0,
      class: ["el-alert__icon", [$setup.iconClass, $setup.isBigIcon]]
    }, null, 2)) : createCommentVNode("v-if", true), createVNode("div", _hoisted_1$q, [$props.title || _ctx.$slots.title ? (openBlock(), createBlock("span", {
      key: 0,
      class: ["el-alert__title", [$setup.isBoldTitle]]
    }, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString($props.title), 1)])], 2)) : createCommentVNode("v-if", true), _ctx.$slots.default && !$props.description ? (openBlock(), createBlock("p", _hoisted_2$g, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true), $props.description && !_ctx.$slots.default ? (openBlock(), createBlock("p", _hoisted_3$e, toDisplayString($props.description), 1)) : createCommentVNode("v-if", true), withDirectives(createVNode("i", {
      class: ["el-alert__closebtn", {
        "is-customed": $props.closeText !== "",
        "el-icon-close": $props.closeText === ""
      }],
      onClick: _cache[1] || (_cache[1] = (...args) => $setup.close && $setup.close(...args))
    }, toDisplayString($props.closeText), 3), [[vShow, $props.closable]])])], 2), [[vShow, $setup.visible]])]),
    _: 1
  });
}
script$C.render = render$w;
script$C.__file = "packages/alert/Alert.vue";
script$C.install = function(app) {
  app.component(script$C.name, script$C);
};
var script$B = {
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: null
    },
    spinner: {
      type: String,
      default: null
    },
    background: {
      type: String,
      default: null
    },
    fullscreen: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  setup(props2, {
    emit
  }) {
    const handleAfterLeave = () => {
      emit("afterLeave");
    };
    const internalVisible = ref(props2.visible);
    const internalText = ref(props2.text);
    const show = () => {
      internalVisible.value = true;
    };
    const close2 = () => {
      internalVisible.value = false;
    };
    const setText = (text) => {
      internalText.value = text;
    };
    return {
      internalVisible,
      internalText,
      handleAfterLeave,
      show,
      close: close2,
      setText
    };
  }
};
var _hoisted_1$p = {
  class: "el-loading-spinner"
};
var _hoisted_2$f = {
  key: 0,
  class: "circular",
  viewBox: "25 25 50 50"
};
var _hoisted_3$d = createVNode("circle", {
  class: "path",
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null, -1);
var _hoisted_4$9 = {
  key: 2,
  class: "el-loading-text"
};
function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "el-loading-fade",
    onAfterLeave: $setup.handleAfterLeave
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: ["el-loading-mask", [$props.customClass, {
        "is-fullscreen": $props.fullscreen
      }]],
      style: {
        backgroundColor: $props.background || ""
      }
    }, [createVNode("div", _hoisted_1$p, [!$props.spinner ? (openBlock(), createBlock("svg", _hoisted_2$f, [_hoisted_3$d])) : (openBlock(), createBlock("i", {
      key: 1,
      class: $props.spinner
    }, null, 2)), $props.text ? (openBlock(), createBlock("p", _hoisted_4$9, toDisplayString($setup.internalText), 1)) : createCommentVNode("v-if", true)])], 6), [[vShow, $setup.internalVisible]])]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
script$B.render = render$v;
script$B.__file = "packages/loading/Loading.vue";
var MOUNT_COMPONENT_REF = "el_component";
var COMPONENT_CONTAINER_SYMBOL = Symbol("el_component_container");
function createComponent(Component, props2, children) {
  const vnode = h(Component, __spreadProps(__spreadValues({}, props2), {
    ref: MOUNT_COMPONENT_REF
  }), children);
  const container = document.createElement("div");
  vnode[COMPONENT_CONTAINER_SYMBOL] = container;
  render(vnode, container);
  return vnode.component;
}
function unmountComponent(ComponnetInstance) {
  render(void 0, ComponnetInstance.vnode[COMPONENT_CONTAINER_SYMBOL]);
}
var addStyle = (options, parent, proxy) => {
  const maskStyle = {};
  if (options.fullscreen) {
    addClass(proxy.$el, "is-fullscreen");
    proxy.originalPosition = getStyle(document.body, "position");
    proxy.originalOverflow = getStyle(document.body, "overflow");
    maskStyle.zIndex = PopupManager.nextZIndex();
  } else if (options.body) {
    removeClass(proxy.$el, "is-fullscreen");
    proxy.originalPosition = getStyle(document.body, "position");
    ["top", "left"].forEach((property) => {
      const scroll = property === "top" ? "scrollTop" : "scrollLeft";
      maskStyle[property] = options.target.getBoundingClientRect()[property] + document.documentElement[scroll] + "px";
    });
    ["height", "width"].forEach((property) => {
      maskStyle[property] = options.target.getBoundingClientRect()[property] + "px";
    });
  } else {
    proxy.originalPosition = getStyle(parent, "position");
  }
  Object.keys(maskStyle).forEach((property) => {
    proxy.$el.style[property] = maskStyle[property];
  });
  if (proxy.originalPosition !== "absolute" && proxy.originalPosition !== "fixed") {
    addClass(parent, "el-loading-parent--relative");
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, "el-loading-parent--hidden");
  }
};
var defaults$2 = {
  target: null,
  body: false,
  fullscreen: true,
  lock: false,
  text: null,
  spinner: null,
  background: null,
  customClass: ""
};
var toggleLoading = (el, binding) => {
  if (binding.value) {
    nextTick(() => {
      let parentEl = document.body;
      if (!binding.modifiers.fullscreen) {
        parentEl = el;
      }
      addStyle(el.options, parentEl, el.instance);
      el.instance.show();
      parentEl.appendChild(el.mask);
    });
  } else {
    el.instance.close();
  }
};
var loadingDirective = {
  mounted: function(el, binding, vnode) {
    const textExr = el.getAttribute("element-loading-text");
    const spinnerExr = el.getAttribute("element-loading-spinner");
    const backgroundExr = el.getAttribute("element-loading-background");
    const customClassExr = el.getAttribute("element-loading-custom-class");
    const vm = vnode.context;
    const options = merge({}, defaults$2, {
      text: vm && vm[textExr] || textExr,
      spinner: vm && vm[spinnerExr] || spinnerExr,
      background: vm && vm[backgroundExr] || backgroundExr,
      customClass: vm && vm[customClassExr] || customClassExr,
      fullscreen: !!binding.modifiers.fullscreen
    });
    const mask = createComponent(script$B, __spreadProps(__spreadValues({}, options), {
      onAfterLeave() {
        el.domVisible = false;
        const target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
        removeClass(target, "el-loading-parent--relative");
        removeClass(target, "el-loading-parent--hidden");
      }
    }));
    el.options = options;
    el.instance = mask.proxy;
    el.mask = mask.proxy.$el;
    el.maskStyle = {};
    binding.value && toggleLoading(el, binding);
  },
  updated: function(el, binding) {
    el.instance.setText(el.getAttribute("element-loading-text"));
    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding);
    }
  },
  unmounted: function() {
  }
};
var directive$1 = {
  install(app) {
    app.directive("loading", loadingDirective);
  }
};
var defaults$1 = {
  target: null,
  body: false,
  fullscreen: true,
  lock: false,
  text: null,
  spinner: null,
  background: null,
  customClass: ""
};
var fullscreenLoading;
var Loading = (options = {}) => {
  options = merge({}, defaults$1, options);
  if (typeof options.target === "string") {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;
  if (options.target !== document.body) {
    options.fullscreen = false;
  } else {
    options.body = true;
  }
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading;
  }
  const parent = options.body ? document.body : options.target;
  const instance2 = createComponent(script$B, __spreadProps(__spreadValues({}, options), {
    visible: true,
    onAfterLeave() {
      if (options.fullscreen) {
        fullscreenLoading = void 0;
      }
      const target = options.fullscreen || options.body ? document.body : options.target;
      removeClass(target, "el-loading-parent--relative");
      removeClass(target, "el-loading-parent--hidden");
      unmountComponent(instance2);
    }
  }));
  addStyle(options, parent, instance2.proxy);
  parent.appendChild(instance2.proxy.$el);
  if (options.fullscreen) {
    fullscreenLoading = instance2;
  }
  instance2.close = close;
  return instance2;
};
var close = function() {
  this.proxy.close();
};
var ElLoading = {
  install(app) {
    app.use(directive$1);
  },
  service: Loading,
  directive: directive$1
};
var script$A = {
  props: {
    message: {
      type: [String, Object]
    },
    type: {
      type: String,
      defalut: "info",
      validator(val) {
        return ["success", "warning", "info", "error"].includes(val);
      }
    },
    iconClass: String,
    showClose: Boolean,
    duration: Number,
    center: Boolean,
    customClass: String,
    dangerouslyUseHTMLString: Boolean,
    offset: Number
  },
  emits: ["close"],
  setup(props2, {
    emit
  }) {
    const instance2 = getCurrentInstance();
    const isShow = ref(true);
    const offsetVal = ref(props2.offset);
    const isShowType = computed(() => props2.type && !props2.iconClass);
    const positionStyle = computed(() => ({
      top: `${offsetVal.value}px`
    }));
    let timer;
    function delayClose() {
      if (props2.duration > 0) {
        timer = setTimeout(() => {
          _close();
        }, props2.duration);
      }
    }
    function _close() {
      clearTimeout(timer);
      emit("close", instance2);
      isShow.value = false;
    }
    function handleAfterLeave() {
      var _instance$vnode$el$pa;
      (_instance$vnode$el$pa = instance2.vnode.el.parentElement) === null || _instance$vnode$el$pa === void 0 ? void 0 : _instance$vnode$el$pa.removeChild(instance2.vnode.el);
    }
    function handleClose() {
      _close();
    }
    function handleMouseenter() {
      clearTimeout(timer);
    }
    function handleMouseleave() {
      delayClose();
    }
    function close2() {
      _close();
    }
    delayClose();
    return {
      close: close2,
      isShow,
      isShowType,
      positionStyle,
      offsetVal,
      handleClose,
      handleAfterLeave,
      handleMouseenter,
      handleMouseleave
    };
  }
};
var _hoisted_1$o = {
  key: 1,
  class: "el-message__content"
};
function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "el-message-fade",
    onAfterLeave: $setup.handleAfterLeave,
    appear: ""
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: ["el-message", $setup.isShowType ? `el-message--${$props.type}` : "", $props.showClose ? "is-closable" : "", $props.center ? "is-center" : "", $props.customClass],
      style: [$setup.positionStyle],
      onMouseenter: _cache[2] || (_cache[2] = (...args) => $setup.handleMouseenter && $setup.handleMouseenter(...args)),
      onMouseleave: _cache[3] || (_cache[3] = (...args) => $setup.handleMouseleave && $setup.handleMouseleave(...args))
    }, [$props.iconClass ? (openBlock(), createBlock("i", {
      key: 0,
      class: $props.iconClass
    }, null, 2)) : (openBlock(), createBlock("i", {
      key: 1,
      class: ["el-message__icon", `el-icon-${$props.type}`]
    }, null, 2)), renderSlot(_ctx.$slots, "default", {}, () => [$props.dangerouslyUseHTMLString ? (openBlock(), createBlock("p", {
      key: 0,
      class: "el-message__content",
      innerHTML: $props.message
    }, null, 8, ["innerHTML"])) : (openBlock(), createBlock("p", _hoisted_1$o, toDisplayString($props.message), 1))]), $props.showClose ? (openBlock(), createBlock("i", {
      key: 2,
      class: "el-message__closeBtn el-icon-close",
      onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleClose && $setup.handleClose(...args))
    })) : createCommentVNode("v-if", true)], 38), [[vShow, $setup.isShow]])]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
script$A.render = render$u;
script$A.__file = "src/components/Message/src/Message.vue";
var instanceList$1 = [];
function Message(opts) {
  return createMessage(mergeOptions(opts));
}
Message.closeAll = () => {
  instanceList$1.forEach((instance2) => {
    instance2.proxy.close();
    removeInstance$1(instance2);
  });
};
["info", "success", "warning", "error"].forEach((type2) => {
  Message[type2] = (opts) => {
    return createMessage(mergeOptions(opts, type2));
  };
});
function createMessage(opts) {
  const instance2 = createMessageComponentByOpts(opts);
  setZIndex$1(instance2);
  appendToBody(instance2);
  addInstance$1(instance2);
  return instance2.proxy;
}
function createMessageComponentByOpts(opts) {
  if (isVNode(opts.message)) {
    return createComponent(script$A, opts, () => opts.message);
  }
  return createComponent(script$A, opts);
}
function setZIndex$1(instance2) {
  instance2.vnode.el.style.zIndex = PopupManager.nextZIndex();
}
function mergeOptions(opts, type2 = "info") {
  const defaultOptions = {
    duration: 4500,
    type: type2,
    offset: calculateVerticalOffset$1(opts.offset)
  };
  const userOnClose = opts === null || opts === void 0 ? void 0 : opts.onClose;
  opts === null || opts === void 0 ? true : delete opts.onClose;
  opts === null || opts === void 0 ? true : delete opts.offset;
  defaultOptions.onClose = (instance2) => {
    closeMessage(instance2);
    if (userOnClose)
      userOnClose(instance2.proxy);
  };
  if (typeof opts === "string" || isVNode(opts)) {
    defaultOptions.message = opts;
    return defaultOptions;
  }
  return Object.assign({}, defaultOptions, opts);
}
function calculateVerticalOffset$1(offset = 20) {
  let result = offset;
  instanceList$1.forEach((instance2) => {
    result += getNextElementInterval(instance2);
  });
  return result;
}
function closeMessage(instance2) {
  updatePosition$1(instance2);
  removeInstance$1(instance2);
}
function updatePosition$1(closeInstance) {
  const currentInstanceIndex = getIndexByInstance$1(closeInstance);
  if (currentInstanceIndex < 0)
    return;
  for (let index2 = currentInstanceIndex + 1; index2 < instanceList$1.length; index2++) {
    const instance2 = instanceList$1[index2];
    instance2.proxy.offsetVal -= getNextElementInterval(closeInstance);
  }
}
function getNextElementInterval(instance2) {
  const INTERVAL_HEIGHT2 = 16;
  return instance2.vnode.el.offsetHeight + INTERVAL_HEIGHT2;
}
function addInstance$1(instance2) {
  instanceList$1.push(instance2);
}
function removeInstance$1(instance2) {
  instanceList$1.splice(getIndexByInstance$1(instance2), 1);
}
function getIndexByInstance$1(instance2) {
  return instanceList$1.findIndex((i) => i.uid == instance2.uid);
}
function appendToBody(componentInstance) {
  document.body.append(componentInstance.vnode.el);
}
var idSeed = 1;
var scrollBarWidth;
var popupProps = {
  visible: {
    type: Boolean,
    default: false
  },
  openDelay: {},
  closeDelay: {},
  zIndex: {},
  modal: {
    type: Boolean,
    default: false
  },
  modalFade: {
    type: Boolean,
    default: true
  },
  modalClass: {},
  modalAppendToBody: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: false
  },
  closeOnClickModal: {
    type: Boolean,
    default: false
  }
};
function usePopup(props2) {
  const {
    visible,
    modal,
    modalAppendToBody,
    lockScroll,
    closeDelay
  } = toRefs(props2);
  const opened = ref(false);
  const bodyPaddingRight = ref(null);
  const computedBodyPaddingRight = ref(0);
  const withoutHiddenClass = ref(true);
  const rendered = ref(false);
  const instance2 = getCurrentInstance();
  let _popupId = 0;
  let _closeTimer = 0;
  let _openTimer = 0;
  let _opening = false;
  let _closing = false;
  const open = (options) => {
    if (!rendered.value) {
      rendered.value = true;
    }
    const props3 = merge(instance2.proxy, options);
    if (_closeTimer) {
      clearTimeout(_closeTimer);
      _closeTimer = 0;
    }
    clearTimeout(_openTimer);
    const delay = Number(props3.openDelay) || 0;
    if (delay > 0) {
      _openTimer = setTimeout(() => {
        _openTimer = 0;
        doOpen(props3);
      }, delay);
    } else {
      doOpen(props3);
    }
  };
  const doOpen = (props3) => {
    if (instance2.proxy.$isServer)
      return;
    if (_opening)
      return;
    if (opened.value)
      return;
    _opening = true;
    const dom = instance2.proxy.$el;
    const modal2 = props3.modal;
    const zIndex2 = props3.zIndex;
    if (zIndex2) {
      PopupManager.zIndex = zIndex2.value;
    }
    if (modal2) {
      if (_closing) {
        PopupManager.closeModal(_popupId);
        _closing = false;
      }
      PopupManager.openModal(_popupId, PopupManager.nextZIndex(), modalAppendToBody.value ? void 0 : dom, props3.modalClass, props3.modalFade);
      if (props3.lockScroll) {
        withoutHiddenClass.value = !hasClass(document.body, "el-popup-parent--hidden");
        if (withoutHiddenClass.value) {
          bodyPaddingRight.value = document.body.style.paddingRight;
          computedBodyPaddingRight.value = parseInt(getStyle(document.body, "paddingRight"), 10);
        }
        scrollBarWidth = getScrollBarWidth();
        const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
        const bodyOverflowY = getStyle(document.body, "overflowY");
        if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass.value) {
          document.body.style.paddingRight = computedBodyPaddingRight.value + scrollBarWidth + "px";
        }
        addClass(document.body, "el-popup-parent--hidden");
      }
    }
    if (getComputedStyle(dom).position === "static") {
      dom.style.position = "absolute";
    }
    dom.style.zIndex = PopupManager.nextZIndex();
    opened.value = true;
    instance2.onOpen && instance2.onOpen();
    doAfterOpen();
  };
  const doAfterOpen = () => {
    _opening = false;
  };
  const close2 = () => {
    if (_closing)
      return;
    if (_openTimer) {
      clearTimeout(_openTimer);
      _openTimer = 0;
    }
    clearTimeout(_closeTimer);
    const delay = Number(closeDelay && closeDelay.value);
    if (delay > 0) {
      _closeTimer = setTimeout(() => {
        _closeTimer = 0;
        doClose();
      }, delay);
    } else {
      doClose();
    }
  };
  const doClose = () => {
    _closing = true;
    instance2.onClose && instance2.onClose();
    if (lockScroll.value) {
      setTimeout(restoreBodyStyle, 200);
    }
    opened.value = false;
    doAfterClose();
  };
  const doAfterClose = () => {
    PopupManager.closeModal(_popupId);
    _closing = false;
  };
  const restoreBodyStyle = () => {
    if (modal.value && withoutHiddenClass.value) {
      document.body.style.paddingRight = bodyPaddingRight.value;
      removeClass(document.body, "el-popup-parent--hidden");
    }
    withoutHiddenClass.value = true;
  };
  watch(visible, (val) => {
    if (val) {
      if (_opening)
        return;
      if (!rendered.value) {
        rendered.value = true;
        nextTick(() => {
          open();
        });
      } else {
        open();
      }
    } else {
      close2();
    }
  });
  onBeforeMount(() => {
    _popupId = "popup-" + idSeed++;
    PopupManager.register(_popupId, instance2);
  });
  onBeforeUnmount(() => {
    PopupManager.deregister(_popupId);
    PopupManager.closeModal(_popupId);
    restoreBodyStyle();
  });
  return {
    opened,
    visible,
    open,
    rendered,
    close: close2
  };
}
var aria = aria || {};
var tabEvent;
aria.Dialog = function(dialog, focusAfterClosed, focusFirst) {
  this.dialogNode = dialog;
  if (this.dialogNode === null || this.dialogNode.getAttribute("role") !== "dialog") {
    throw new Error("Dialog() requires a DOM element with ARIA role of dialog.");
  }
  if (typeof focusAfterClosed === "string") {
    this.focusAfterClosed = document.getElementById(focusAfterClosed);
  } else if (typeof focusAfterClosed === "object") {
    this.focusAfterClosed = focusAfterClosed;
  } else {
    this.focusAfterClosed = null;
  }
  if (typeof focusFirst === "string") {
    this.focusFirst = document.getElementById(focusFirst);
  } else if (typeof focusFirst === "object") {
    this.focusFirst = focusFirst;
  } else {
    this.focusFirst = null;
  }
  if (this.focusFirst) {
    this.focusFirst.focus();
  } else {
    Utils.focusFirstDescendant(this.dialogNode);
  }
  this.lastFocus = document.activeElement;
  tabEvent = (e) => {
    this.trapFocus(e);
  };
  this.addListeners();
};
aria.Dialog.prototype.addListeners = function() {
  document.addEventListener("focus", tabEvent, true);
};
aria.Dialog.prototype.removeListeners = function() {
  document.removeEventListener("focus", tabEvent, true);
};
aria.Dialog.prototype.closeDialog = function() {
  this.removeListeners();
  if (this.focusAfterClosed) {
    setTimeout(() => {
      this.focusAfterClosed.focus();
    });
  }
};
aria.Dialog.prototype.trapFocus = function(event) {
  if (Utils.IgnoreUtilFocusChanges) {
    return;
  }
  if (this.dialogNode.contains(event.target)) {
    this.lastFocus = event.target;
  } else {
    Utils.focusFirstDescendant(this.dialogNode);
    if (this.lastFocus === document.activeElement) {
      Utils.focusLastDescendant(this.dialogNode);
    }
    this.lastFocus = document.activeElement;
  }
};
var Dialog = aria.Dialog;
var typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
};
var script$z = {
  mixins: [Locale],
  props: __spreadProps(__spreadValues({}, popupProps), {
    modal: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: null
    },
    message: {
      type: [Object, String],
      default() {
        return {};
      }
    },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "info",
      validator(val) {
        return ["success", "warning", "info", "error"].indexOf(val);
      }
    },
    iconClass: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
    },
    callback: {
      type: Function,
      default: () => {
      }
    },
    showClose: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function,
      default: () => {
      }
    },
    distinguishCancelAndClose: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    cancelButtonClass: {
      type: String,
      default: null
    },
    confirmButtonClass: {
      type: String,
      default: null
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    closeOnHashChange: {
      type: Boolean,
      default: true
    },
    showInput: {
      type: Boolean,
      default: false
    },
    inputPlaceholder: {
      type: String,
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    inputValue: {
      type: String,
      default: ""
    },
    inputPattern: {
      type: RegExp,
      default: null
    },
    inputValidator: {
      type: Function,
      default: () => {
      }
    },
    inputErrorMessage: {
      type: String,
      default: ""
    },
    center: {
      type: Boolean,
      default: false
    },
    roundButton: {
      type: Boolean,
      default: false
    },
    _type: {
      type: String,
      default: ""
    },
    cancelButtonLoading: {
      type: Boolean,
      default: false
    }
  }),
  components: {
    ElInput: script$1l,
    ElButton: script$1u
  },
  setup(props2, {
    attrs
  }) {
    const confirmButtonText = ref(attrs.confirmButtonText || "\u786E\u8BA4");
    const cancelButtonText = ref(attrs.cancelButtonText || "\u53D6\u6D88");
    let messageBox = "";
    const instance2 = getCurrentInstance();
    const {
      closeOnClickModal,
      distinguishCancelAndClose,
      _type,
      beforeClose,
      callback,
      type: type2,
      iconClass,
      message,
      inputType,
      cancelButtonClass,
      confirmButtonClass,
      closeOnHashChange,
      lockScroll,
      inputPattern,
      inputValidator,
      inputValue
    } = toRefs(props2);
    const state = reactive({
      visible: false,
      action: null,
      editorErrorMessage: null,
      uid: 0,
      inputValue: unref(inputValue),
      isVnode: false
    });
    const {
      rendered,
      open,
      close: close2,
      restoreBodyStyle
    } = usePopup(__spreadProps(__spreadValues({}, toRefs(props2)), {
      visible: state.visible
    }));
    const validate2 = () => {
      if (unref(_type) === "prompt") {
        const _inputPattern = unref(inputPattern);
        if (_inputPattern && !_inputPattern.test(state.inputValue || "")) {
          state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
          addClass(getInputElement(), "invalid");
          return false;
        }
        const _inputValidator = unref(inputValidator);
        if (typeof _inputValidator === "function") {
          const validateResult = _inputValidator(state.inputValue);
          if (validateResult === false) {
            state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
            addClass(getInputElement(), "invalid");
            return false;
          }
          if (typeof validateResult === "string") {
            state.editorErrorMessage = validateResult;
            addClass(getInputElement(), "invalid");
            return false;
          }
        }
      }
      state.editorErrorMessage = "";
      removeClass(getInputElement(), "invalid");
      return true;
    };
    const doClose = () => {
      if (!state.visible)
        return;
      state.visible = false;
      rendered.value = false;
      close2();
      messageBox.closeDialog();
      if (lockScroll) {
        setTimeout(restoreBodyStyle, 200);
      }
      nextTick(() => {
        if (state.action) {
          unref(callback)(state.action, instance2.vnode);
        }
      });
    };
    const getSafeClose = () => {
      const currentId = state.uid;
      return () => {
        nextTick(() => {
          if (currentId === state.uid)
            doClose();
        });
      };
    };
    const confirmButtonLoading = ref(false);
    const handleAction = (action) => {
      if (unref(_type) === "prompt" && action === "confirm" && !validate2()) {
        return;
      }
      state.action = action;
      if (typeof unref(beforeClose) === "function") {
        const close3 = getSafeClose();
        unref(beforeClose)(action, instance2.vnode, close3);
      } else {
        doClose();
      }
    };
    const handleWrapperClick = () => {
      if (unref(closeOnClickModal)) {
        handleAction(unref(distinguishCancelAndClose) ? "close" : "cancel");
      }
    };
    const handleKeyup = (element = {}) => {
      if (element.code !== "Escape")
        return;
      if (unref(props2.closeOnPressEscape)) {
        handleAction(unref(distinguishCancelAndClose) ? "close" : "cancel");
      }
    };
    const handleInputEnter = () => {
      if (unref(inputType) !== "textarea") {
        return handleAction("confirm");
      }
    };
    const icon = computed(() => {
      return unref(iconClass) || (unref(type2) && typeMap[unref(type2)] ? `el-icon-${typeMap[unref(type2)]}` : "");
    });
    const cancelButtonClasses = computed(() => {
      return `el-button--primary ${unref(cancelButtonClass)}`;
    });
    const confirmButtonClasses = computed(() => {
      return `el-button--primary ${unref(confirmButtonClass)}`;
    });
    const getFirstFocus = () => {
      const btn = instance2.vnode.el.querySelector(".el-message-box__btns .el-button");
      const title = instance2.vnode.el.querySelector(".el-message-box__btns .el-message-box__title");
      return btn || title;
    };
    const getInputElement = () => {
      const inputRefs = instance2.refs.input.$refs;
      return inputRefs.input || inputRefs.textarea;
    };
    onMounted(() => {
      state.visible = true;
      nextTick(() => {
        state.uid++;
        rendered.value = true;
        open();
      });
      if (unref(_type) === "alert" || unref(_type) === "confirm") {
        nextTick(() => {
          instance2.refs.confirm.$el.focus();
        });
      }
      const focusAfterClosed = document.activeElement;
      messageBox = new Dialog(instance2.vnode.el, focusAfterClosed, getFirstFocus());
      if (unref(closeOnHashChange)) {
        window.addEventListener("hashchange", doClose);
      }
      window.addEventListener("keyup", handleKeyup);
      if (unref(_type) !== "prompt")
        return;
      setTimeout(() => {
        if (instance2.refs.input && instance2.refs.input.$el) {
          getInputElement().focus();
        }
      }, 500);
    });
    onUnmounted(() => {
      if (unref(closeOnHashChange)) {
        window.removeEventListener("hashchange", doClose);
      }
      window.removeEventListener("keyup", handleKeyup);
      setTimeout(() => {
        messageBox.closeDialog();
      });
    });
    const MessageToVNode = (message2) => {
      let v = "";
      if (isVNode(unref(message2))) {
        v = unref(message2);
        render(v, document.createElement("div"));
        state.isVnode = true;
        return v.el.innerHTML;
      } else {
        state.isVnode = false;
        return message2;
      }
    };
    watch(() => state.inputValue, (val) => {
      nextTick(() => {
        if (unref(_type) === "prompt" && val !== null) {
          validate2();
        }
      });
    });
    return __spreadProps(__spreadValues({}, toRefs(props2)), {
      changedMessage: MessageToVNode(message),
      handleInputEnter,
      handleAction,
      state,
      handleWrapperClick,
      icon,
      cancelButtonClasses,
      cancelButtonText,
      t,
      confirmButtonLoading,
      confirmButtonClasses,
      confirmButtonText
    });
  }
};
var _hoisted_1$n = {
  key: 0,
  class: "el-message-box__header"
};
var _hoisted_2$e = {
  class: "el-message-box__title"
};
var _hoisted_3$c = createVNode("i", {
  class: "el-message-box__close el-icon-close"
}, null, -1);
var _hoisted_4$8 = {
  class: "el-message-box__content"
};
var _hoisted_5$5 = {
  class: "el-message-box__container"
};
var _hoisted_6$3 = {
  key: 1,
  class: "el-message-box__message"
};
var _hoisted_7$2 = {
  key: 0
};
var _hoisted_8$1 = {
  class: "el-message-box__input"
};
var _hoisted_9$1 = {
  class: "el-message-box__btns"
};
function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createBlock(Transition, {
    name: "msgbox-fade"
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: "el-message-box__wrapper",
      tabindex: "-1",
      role: "dialog",
      "aria-modal": "true",
      onClick: _cache[8] || (_cache[8] = withModifiers((...args) => $setup.handleWrapperClick && $setup.handleWrapperClick(...args), ["self"])),
      "aria-label": $props.title || "dialog"
    }, [createVNode("div", {
      class: ["el-message-box", [$props.customClass, $props.center && "el-message-box--center"]]
    }, [$props.title !== null ? (openBlock(), createBlock("div", _hoisted_1$n, [createVNode("div", _hoisted_2$e, [$setup.icon && $props.center ? (openBlock(), createBlock("div", {
      key: 0,
      class: ["el-message-box__status", $setup.icon]
    }, null, 2)) : createCommentVNode("v-if", true), createVNode("span", null, toDisplayString($props.title), 1)]), $props.showClose ? (openBlock(), createBlock("button", {
      key: 0,
      type: "button",
      class: "el-message-box__headerbtn",
      "aria-label": "Close",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.handleAction($props.distinguishCancelAndClose ? "close" : "cancel")),
      onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => $setup.handleAction($props.distinguishCancelAndClose ? "close" : "cancel"), ["enter"]))
    }, [_hoisted_3$c], 32)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), createVNode("div", _hoisted_4$8, [createVNode("div", _hoisted_5$5, [$setup.icon && !$props.center && $setup.changedMessage !== "" ? (openBlock(), createBlock("div", {
      key: 0,
      class: ["el-message-box__status", $setup.icon]
    }, null, 2)) : createCommentVNode("v-if", true), $setup.changedMessage !== "" ? (openBlock(), createBlock("div", _hoisted_6$3, [renderSlot(_ctx.$slots, "default", {}, () => [!$props.dangerouslyUseHTMLString && $setup.state.isVnode !== true ? (openBlock(), createBlock("p", _hoisted_7$2, toDisplayString($setup.changedMessage), 1)) : (openBlock(), createBlock("p", {
      key: 1,
      innerHTML: $setup.changedMessage
    }, null, 8, ["innerHTML"]))])])) : createCommentVNode("v-if", true)]), withDirectives(createVNode("div", _hoisted_8$1, [createVNode(_component_el_input, {
      onKeydown: withKeys($setup.handleInputEnter, ["enter"]),
      type: $props.inputType,
      modelValue: $setup.state.inputValue,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.state.inputValue = $event),
      placeholder: $props.inputPlaceholder,
      ref: "input"
    }, null, 8, ["onKeydown", "type", "modelValue", "placeholder"]), createVNode("div", {
      class: "el-message-box__errormsg",
      style: {
        visibility: !!$setup.state.editorErrorMessage ? "visible" : "hidden"
      }
    }, toDisplayString($setup.state.editorErrorMessage), 5)], 512), [[vShow, $props.showInput]])]), createVNode("div", _hoisted_9$1, [$props.showCancelButton ? (openBlock(), createBlock(_component_el_button, {
      key: 0,
      loading: $props.cancelButtonLoading,
      class: [$setup.cancelButtonClasses],
      round: $props.roundButton,
      size: "small",
      onClick: _cache[4] || (_cache[4] = ($event) => $setup.handleAction("cancel")),
      onKeydown: _cache[5] || (_cache[5] = withKeys(($event) => $setup.handleAction("cancel"), ["enter"]))
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString($setup.cancelButtonText || $setup.t("el.messagebox.cancel")), 1)]),
      _: 1
    }, 8, ["loading", "class", "round"])) : createCommentVNode("v-if", true), withDirectives(createVNode(_component_el_button, {
      loading: $setup.confirmButtonLoading,
      ref: "confirm",
      class: [$setup.confirmButtonClasses],
      round: $props.roundButton,
      size: "small",
      onClick: _cache[6] || (_cache[6] = ($event) => $setup.handleAction("confirm")),
      onKeydown: _cache[7] || (_cache[7] = withKeys(($event) => $setup.handleAction("confirm"), ["enter"]))
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString($setup.confirmButtonText || $setup.t("el.messagebox.confirm")), 1)]),
      _: 1
    }, 8, ["loading", "class", "round"]), [[vShow, $props.showConfirmButton]])])], 2)], 8, ["aria-label"]), [[vShow, $setup.state.visible]])]),
    _: 1
  });
}
script$z.render = render$t;
script$z.__file = "packages/message-box/src/MessageBox.vue";
var messageBoxConstructor = defineComponent(script$z);
var defaults = {
  title: null,
  message: "",
  type: "",
  iconClass: "",
  showInput: false,
  showClose: true,
  modalFade: true,
  lockScroll: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  closeOnHashChange: true,
  inputValue: null,
  inputPlaceholder: "",
  inputType: "text",
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: "",
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: "right",
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: "",
  cancelButtonText: "",
  confirmButtonClass: "",
  cancelButtonClass: "",
  customClass: "",
  beforeClose: null,
  dangerouslyUseHTMLString: false,
  center: false,
  roundButton: false,
  distinguishCancelAndClose: false
};
var currentMsg;
var instance;
var msgQueue = [];
var defaultCallback = (action) => {
  if (currentMsg) {
    if (currentMsg.resolve) {
      if (action === "confirm") {
        if (instance.vnode.props.showInput) {
          currentMsg.resolve({
            value: instance.setupState.state.inputValue,
            action
          });
        } else {
          currentMsg.resolve(action);
        }
      } else if (currentMsg.reject && (action === "cancel" || action === "close")) {
        currentMsg.reject(action);
      }
    }
  }
};
var initInstance = (currentMsg2, VNode = null) => {
  defaults.callback = defaultCallback;
  instance = createComponent(messageBoxConstructor, currentMsg2.options, VNode);
};
var showNextMsg = () => {
  if (msgQueue.length > 0) {
    currentMsg = msgQueue.shift();
    const options = currentMsg.options;
    if (options.callback === void 0) {
      options.callback = defaultCallback;
    }
    const oldCb = options.callback;
    options.callback = (action, instance2) => {
      oldCb(action, instance2);
    };
    if (isVNode(currentMsg.message)) {
      initInstance(currentMsg, {
        default: () => currentMsg.message
      });
    }
    initInstance(currentMsg);
    ["modal", "showClose", "closeOnClickModal", "closeOnPressEscape", "closeOnHashChange"].forEach((prop) => {
      if (options[prop] === void 0) {
        options[prop] = true;
      }
    });
    document.body.appendChild(instance.vnode.el);
  }
};
var MessageBox = function(options, callback) {
  if (typeof options === "string" || isVNode(options)) {
    options = {
      message: options
    };
    if (typeof arguments[1] === "string") {
      options.title = arguments[1];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }
  if (typeof Promise !== "undefined") {
    return new Promise((resolve, reject) => {
      msgQueue.push({
        options: merge({}, defaults, MessageBox.defaults, options),
        callback,
        resolve,
        reject
      });
      showNextMsg();
    });
  } else {
    msgQueue.push({
      options: merge({}, defaults, MessageBox.defaults, options),
      callback
    });
    showNextMsg();
  }
};
MessageBox.setDefaults = (defaults2) => {
  MessageBox.defaults = defaults2;
};
MessageBox.alert = (message, title, options) => {
  if (typeof title === "object") {
    options = title;
    title = "";
  } else if (title === void 0) {
    title = "";
  }
  return MessageBox(merge({
    title,
    message,
    _type: "alert",
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};
MessageBox.confirm = (message, title, options) => {
  if (typeof title === "object") {
    options = title;
    title = "";
  } else if (title === void 0) {
    title = "";
  }
  return MessageBox(merge({
    title,
    message,
    _type: "confirm",
    showCancelButton: true
  }, options));
};
MessageBox.prompt = (message, title, options) => {
  if (typeof title === "object") {
    options = title;
    title = "";
  } else if (title === void 0) {
    title = "";
  }
  return MessageBox(merge({
    title,
    message,
    showCancelButton: true,
    showInput: true,
    _type: "prompt"
  }, options));
};
MessageBox.close = () => {
  instance.doClose();
  msgQueue = [];
  currentMsg = null;
};
var notificationProps = {
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 4500
  },
  iconClass: {
    type: String,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  verticalOffset: {
    type: Number,
    default: 0
  },
  message: [String, Object],
  position: {
    type: String,
    default: "top-right"
  },
  onClick: null,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "",
    validator(val) {
      return ["", "success", "warning", "info", "error"].includes(val);
    }
  }
};
var script$y = defineComponent({
  name: "ElNotification",
  props: notificationProps,
  emits: ["close"],
  setup(props2, {
    emit
  }) {
    const instance2 = getCurrentInstance();
    const visible = ref(true);
    const verticalOffsetVal = ref(props2.verticalOffset);
    const typeClass = computed(() => {
      return props2.type ? `el-icon-${props2.type}` : "";
    });
    const horizontalClass = computed(() => {
      return props2.position.endsWith("right") ? "right" : "left";
    });
    const verticalProperty = computed(() => {
      return props2.position.startsWith("top") ? "top" : "bottom";
    });
    const positionStyle = computed(() => {
      return {
        [verticalProperty.value]: `${verticalOffsetVal.value}px`
      };
    });
    function _click() {
      emit("click", instance2);
    }
    function handleClick() {
      _click();
    }
    function click() {
      _click();
    }
    function _close() {
      clearTimeout(timer);
      emit("close", instance2);
      visible.value = false;
    }
    function handleClose() {
      _close();
    }
    function close2() {
      _close();
    }
    let timer;
    function delayClose() {
      if (props2.duration > 0) {
        timer = setTimeout(() => {
          _close();
        }, props2.duration);
      }
    }
    const handleKeydown = (e) => {
      if (e.keyCode === 46 || e.keyCode === 8) {
        clearTimeout(timer);
      } else if (e.keyCode === 27) {
        _close();
      } else {
        delayClose();
      }
    };
    function handleMouseenter() {
      clearTimeout(timer);
    }
    function handleMouseleave() {
      delayClose();
    }
    function handleAfterLeave() {
      var _instance$vnode$el$pa;
      (_instance$vnode$el$pa = instance2.vnode.el.parentElement) === null || _instance$vnode$el$pa === void 0 ? void 0 : _instance$vnode$el$pa.removeChild(instance2.vnode.el);
    }
    delayClose();
    return {
      close: close2,
      click,
      visible,
      typeClass,
      positionStyle,
      horizontalClass,
      verticalProperty,
      verticalOffsetVal,
      handleClose,
      handleClick,
      handleKeydown,
      handleMouseenter,
      handleMouseleave,
      handleAfterLeave
    };
  }
});
var _hoisted_1$m = {
  class: "el-notification__group"
};
var _hoisted_2$d = {
  class: "el-notification__content"
};
var _hoisted_3$b = {
  key: 0
};
function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "el-notification-fade",
    onAfterLeave: _ctx.handleAfterLeave,
    appear: ""
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: ["el-notification", _ctx.customClass, _ctx.horizontalClass],
      style: _ctx.positionStyle,
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
      onKeydown: _cache[3] || (_cache[3] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
      onMouseenter: _cache[4] || (_cache[4] = (...args) => _ctx.handleMouseenter && _ctx.handleMouseenter(...args)),
      onMouseleave: _cache[5] || (_cache[5] = (...args) => _ctx.handleMouseleave && _ctx.handleMouseleave(...args)),
      role: "alert"
    }, [_ctx.type || _ctx.iconClass ? (openBlock(), createBlock("i", {
      key: 0,
      class: ["el-notification__icon", _ctx.typeClass || _ctx.iconClass]
    }, null, 2)) : createCommentVNode("v-if", true), createVNode("div", _hoisted_1$m, [createVNode("h2", {
      class: "el-notification__title",
      textContent: toDisplayString(_ctx.title)
    }, null, 8, ["textContent"]), withDirectives(createVNode("div", _hoisted_2$d, [renderSlot(_ctx.$slots, "default", {}, () => [!_ctx.dangerouslyUseHTMLString ? (openBlock(), createBlock("p", _hoisted_3$b, toDisplayString(_ctx.message), 1)) : (openBlock(), createBlock("p", {
      key: 1,
      innerHTML: _ctx.message
    }, null, 8, ["innerHTML"]))])], 512), [[vShow, _ctx.message]]), _ctx.showClose ? (openBlock(), createBlock("div", {
      key: 0,
      class: "el-notification__closeBtn el-icon-close",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
    })) : createCommentVNode("v-if", true)])], 38), [[vShow, _ctx.visible]])]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
script$y.render = render$s;
script$y.__file = "src/components/Notification/src/Notification.vue";
var instanceList = [];
var INTERVAL_HEIGHT = 16;
function Notification(options) {
  return createNotification(mergeProps2(options));
}
function addInstance(instance2) {
  instanceList.push(instance2);
}
function createNotification(options) {
  const instance2 = createNotificationByOpts(options);
  setZIndex(instance2);
  addInstance(instance2);
  addToBody(instance2);
  return instance2.proxy;
}
function createNotificationByOpts(opts) {
  if (isVNode(opts.message)) {
    return createComponent(script$y, opts, () => opts.message);
  }
  return createComponent(script$y, opts);
}
function setZIndex(instance2) {
  instance2.vnode.el.style.zIndex = PopupManager.nextZIndex();
}
function addToBody(instance2) {
  document.body.append(instance2.vnode.el);
}
function mergeProps2(options) {
  const position = options.position || "top-right";
  const verticalOffset = calculateVerticalOffset(position);
  const defaultOptions = {
    position,
    verticalOffset
  };
  const userOnClose = options === null || options === void 0 ? void 0 : options.onClose;
  options === null || options === void 0 ? true : delete options.onClose;
  defaultOptions.onClose = (instance2) => {
    closeNotification(instance2);
    if (userOnClose)
      userOnClose(instance2.proxy);
  };
  const userOnClick = options === null || options === void 0 ? void 0 : options.onClick;
  options === null || options === void 0 ? true : delete options.onClick;
  defaultOptions.onClick = (instance2) => {
    if (userOnClick)
      userOnClick(instance2.proxy);
  };
  if (typeof options === "string" || isVNode(options)) {
    defaultOptions.message = options;
    return defaultOptions;
  }
  return Object.assign({}, defaultOptions, options);
}
function calculateVerticalOffset(position, offset = 0) {
  let verticalOffset = offset;
  instanceList.filter((instance2) => instance2.props.position === position).forEach((instance2) => {
    verticalOffset += (instance2.vnode.el.offsetHeight || 0) + INTERVAL_HEIGHT;
  });
  verticalOffset += INTERVAL_HEIGHT;
  return verticalOffset;
}
function closeNotification(instance2) {
  updatePosition(instance2);
}
function updatePosition(closeInstance) {
  const currentInstanceIndex = getIndexByInstance(closeInstance);
  if (currentInstanceIndex < 0)
    return;
  const instance2 = instanceList[currentInstanceIndex];
  const len = instanceList.length;
  removeInstance(instance2);
  if (len <= 1)
    return;
  const position = instance2.props.position;
  const removedHeight = instance2.vnode.el.offsetHeight;
  for (let i = currentInstanceIndex; i < len - 1; i++) {
    if (instanceList[i].props.position === position) {
      instanceList[i].vnode.el.style[instance2.props.position.startsWith("top") ? "top" : "bottom"] = parseInt(instanceList[i].vnode.el.style[instance2.props.position.startsWith("top") ? "top" : "bottom"], 10) - removedHeight - INTERVAL_HEIGHT + "px";
    }
  }
}
function removeInstance(instance2) {
  instanceList.splice(getIndexByInstance(instance2), 1);
}
function getIndexByInstance(instance2) {
  return instanceList.findIndex((i) => i.uid == instance2.uid);
}
["success", "warning", "info", "error"].forEach((type2) => {
  Notification[type2] = (options) => {
    if (typeof options === "string" || isVNode(options)) {
      options = {
        message: options
      };
    }
    options.type = type2;
    return Notification(options);
  };
});
Notification.closeAll = () => {
  instanceList.forEach((instance2) => {
    instance2.proxy.close();
    removeInstance(instance2);
  });
};
var SubMenu = function(parent, domNode) {
  this.domNode = domNode;
  this.parent = parent;
  this.subMenuItems = [];
  this.subIndex = 0;
  this.init();
};
SubMenu.prototype.init = function() {
  this.subMenuItems = this.domNode.querySelectorAll("li");
  this.addListeners();
};
SubMenu.prototype.gotoSubIndex = function(idx) {
  if (idx === this.subMenuItems.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = this.subMenuItems.length - 1;
  }
  this.subMenuItems[idx].focus();
  this.subIndex = idx;
};
SubMenu.prototype.addListeners = function() {
  const keys = Utils.keys;
  const parentNode = this.parent.domNode;
  Array.prototype.forEach.call(this.subMenuItems, (el) => {
    el.addEventListener("keydown", (event) => {
      let prevDef = false;
      switch (event.keyCode) {
        case keys.down:
          this.gotoSubIndex(this.subIndex + 1);
          prevDef = true;
          break;
        case keys.up:
          this.gotoSubIndex(this.subIndex - 1);
          prevDef = true;
          break;
        case keys.tab:
          Utils.triggerEvent(parentNode, "mouseleave");
          break;
        case keys.enter:
        case keys.space:
          prevDef = true;
          event.currentTarget.click();
          break;
      }
      if (prevDef) {
        event.preventDefault();
        event.stopPropagation();
      }
      return false;
    });
  });
};
var MenuItem = function(domNode) {
  this.domNode = domNode;
  this.submenu = null;
  this.init();
};
MenuItem.prototype.init = function() {
  this.domNode.setAttribute("tabindex", "0");
  const menuChild = this.domNode.querySelector(".el-menu");
  if (menuChild) {
    this.submenu = new SubMenu(this, menuChild);
  }
  this.addListeners();
};
MenuItem.prototype.addListeners = function() {
  const keys = Utils.keys;
  this.domNode.addEventListener("keydown", (event) => {
    let prevDef = false;
    switch (event.keyCode) {
      case keys.down:
        Utils.triggerEvent(event.currentTarget, "mouseenter");
        this.submenu && this.submenu.gotoSubIndex(0);
        prevDef = true;
        break;
      case keys.up:
        Utils.triggerEvent(event.currentTarget, "mouseenter");
        this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
        prevDef = true;
        break;
      case keys.tab:
        Utils.triggerEvent(event.currentTarget, "mouseleave");
        break;
      case keys.enter:
      case keys.space:
        prevDef = true;
        event.currentTarget.click();
        break;
    }
    if (prevDef) {
      event.preventDefault();
    }
  });
};
var Menu = function(domNode) {
  this.domNode = domNode;
  this.init();
};
Menu.prototype.init = function() {
  const menuChildren = this.domNode.childNodes;
  [].filter.call(menuChildren, (child) => child.nodeType === 1).forEach((child) => {
    new MenuItem(child);
  });
};
function useMenu(index2) {
  const Instance = getCurrentInstance();
  const rootMenu = inject("rootMenu");
  const parent = Instance.parent;
  const indexPath = computed(() => {
    const path = [index2];
    let p = parent;
    while (p.type.name !== "ElMenu") {
      if (p.props.index) {
        path.unshift(p.props.index);
      }
      p = p.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let p = parent;
    while (p && ["ElMenu", "ElSubmenu"].indexOf(p.type.name) === -1) {
      p = p.parent;
    }
    return p;
  });
  const paddingStyle = computed(() => {
    if (rootMenu.props.mode !== "vertical")
      return {};
    let padding = 20;
    let p = parent;
    if (rootMenu.props.collapse) {
      padding = 20;
    } else {
      while (p && p.type.name !== "ElMenu") {
        if (p.type.name === "ElSubmenu") {
          padding += 20;
        }
        p = p.parent;
      }
    }
    return {
      paddingLeft: padding + "px"
    };
  });
  return {
    indexPath,
    parentMenu,
    paddingStyle,
    rootMenu
  };
}
function useItems() {
  const items = reactive({});
  const itemsInstance = {};
  const submenus = reactive({});
  const submenusInstance = {};
  const addItem = (item) => {
    let index2 = item.props.index;
    items[index2] = index2;
    itemsInstance[index2] = item;
  };
  const removeItem = (item) => {
    let index2 = item.props.index;
    delete items[index2];
    delete itemsInstance[index2];
  };
  const addSubmenu = (item) => {
    let index2 = item.props.index;
    submenus[index2] = index2;
    submenusInstance[index2] = item;
  };
  const removeSubmenu = (item) => {
    let index2 = item.props.index;
    delete submenus[index2];
    delete submenusInstance[index2];
  };
  return {
    items,
    itemsInstance,
    submenus,
    submenusInstance,
    addItem,
    removeItem,
    addSubmenu,
    removeSubmenu
  };
}
var script$x = {
  render(proxy) {
    const data = {
      mode: "out-in",
      onBeforeEnter(el) {
        el.style.opacity = 0.2;
      },
      onEnter(el) {
        addClass(el, "el-opacity-transition");
        el.style.opacity = 1;
      },
      onAfterEnter(el) {
        removeClass(el, "el-opacity-transition");
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        if (hasClass(el, "el-menu--collapse")) {
          removeClass(el, "el-menu--collapse");
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth;
          addClass(el, "el-menu--collapse");
        } else {
          addClass(el, "el-menu--collapse");
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth;
          removeClass(el, "el-menu--collapse");
        }
        el.style.width = el.scrollWidth + "px";
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = el.dataset.scrollWidth + "px";
      }
    };
    return h(Transition, data, proxy.$slots);
  }
};
script$x.__file = "packages/menu/MenuCollapseTransition.vue";
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var script$w = {
  name: "ElMenu",
  componentName: "ElMenu",
  render() {
    const component = createVNode("ul", {
      "role": "menubar",
      "key": +this.collapse,
      "style": {
        backgroundColor: this.backgroundColor || ""
      },
      "class": {
        "el-menu--horizontal": this.mode === "horizontal",
        "el-menu--collapse": this.collapse,
        "el-menu": true
      }
    }, [this.$slots.default()]);
    if (this.collapseTransition) {
      return createVNode(resolveComponent("el-menu-collapse-transition"), null, _isSlot$1(component) ? component : {
        default: () => [component]
      });
    } else {
      return component;
    }
  },
  components: {
    "el-menu-collapse-transition": script$x
  },
  props: {
    mode: {
      type: String,
      default: "vertical"
    },
    defaultActive: {
      type: String,
      default: ""
    },
    defaultOpeneds: {
      type: Array,
      default: null
    },
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: {
      type: String,
      default: "hover"
    },
    collapse: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    textColor: String,
    activeTextColor: String,
    collapseTransition: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close", "open", "select", "on"],
  setup(props2, {
    emit
  }) {
    const {
      defaultActive,
      defaultOpeneds,
      collapse,
      uniqueOpened,
      backgroundColor,
      mode,
      router
    } = toRefs(props2);
    const instance2 = getCurrentInstance();
    const {
      broadcast: broadcast2,
      on: on2
    } = useEmitter();
    const activeIndex = ref(defaultActive.value);
    const openedMenus = ref(defaultOpeneds.value && !collapse.value ? defaultOpeneds.value.slice(0) : []);
    const {
      items,
      itemsInstance,
      submenusInstance,
      addItem,
      removeItem,
      addSubmenu,
      removeSubmenu
    } = useItems();
    const updateActiveIndex = (val) => {
      let item = items[val] || items[activeIndex.value] || items[defaultActive.value];
      item = itemsInstance[item];
      if (item) {
        activeIndex.value = item.props.index;
        initOpenedMenu();
      } else {
        activeIndex.value = null;
      }
    };
    const getColorChannels = (color) => {
      color = color.replace("#", "");
      if (/^[0-9a-fA-F]{3}$/.test(color)) {
        color = color.split("");
        for (let i = 2; i >= 0; i--) {
          color.splice(i, 0, color[i]);
        }
        color = color.join("");
      }
      if (/^[0-9a-fA-F]{6}$/.test(color)) {
        return {
          red: parseInt(color.slice(0, 2), 16),
          green: parseInt(color.slice(2, 4), 16),
          blue: parseInt(color.slice(4, 6), 16)
        };
      } else {
        return {
          red: 255,
          green: 255,
          blue: 255
        };
      }
    };
    const mixColor = (color, percent) => {
      let {
        red,
        green,
        blue
      } = getColorChannels(color);
      if (percent > 0) {
        red *= 1 - percent;
        green *= 1 - percent;
        blue *= 1 - percent;
      } else {
        red += (255 - red) * percent;
        green += (255 - green) * percent;
        blue += (255 - blue) * percent;
      }
      return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
    };
    const openMenu = (index2, indexPath) => {
      if (openedMenus.value.indexOf(index2) !== -1)
        return;
      if (uniqueOpened.value) {
        openedMenus.value.splice(0, openedMenus.value.length, ...unref(indexPath));
      } else {
        openedMenus.value.push(index2);
      }
    };
    const closeMenu = (index2) => {
      const i = openedMenus.value.indexOf(index2);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const handleSubmenuClick = (submenu) => {
      const {
        index: index2,
        indexPath
      } = submenu.proxy;
      const isOpened = openedMenus.value.indexOf(index2) !== -1;
      if (isOpened) {
        closeMenu(index2);
        emit("close", index2, indexPath);
      } else {
        openMenu(index2, indexPath);
        emit("open", index2, indexPath);
      }
    };
    const handleItemClick = (item) => {
      const {
        index: index2,
        indexPath
      } = item.proxy;
      const oldActiveIndex = activeIndex.value;
      const hasIndex = index2 !== null;
      if (hasIndex) {
        activeIndex.value = index2;
      }
      emit("select", index2, indexPath, item);
      if (mode.value === "horizontal" || collapse.value) {
        openedMenus.value.length = 0;
      }
      if (router.value && hasIndex) {
        routeToItem(item, (error) => {
          activeIndex.value = oldActiveIndex;
          if (error) {
            if (error.name === "NavigationDuplicated")
              return;
            console.error(error);
          }
        });
      }
    };
    const initOpenedMenu = () => {
      const index2 = activeIndex.value;
      const activeItem = itemsInstance[index2];
      if (!activeItem || mode.value === "horizontal" || collapse.value)
        return;
      const indexPath = activeItem.setupState.indexPath;
      indexPath.forEach((index3) => {
        const submenu = submenusInstance[index3];
        submenu && openMenu(index3, submenu.setupState.indexPath);
      });
    };
    const routeToItem = (item, onError) => {
      const route = item.proxy.route || item.proxy.index;
      try {
        instance2.proxy.$router.push(route, () => {
        }, onError);
      } catch (e) {
        console.error(e);
      }
    };
    const open = (index2) => {
      const {
        indexPath
      } = submenusInstance[index2.toString()];
      indexPath.forEach((i) => openMenu(i, indexPath));
    };
    const close2 = (index2) => {
      closeMenu(index2);
    };
    const hoverBackground = computed(() => {
      return backgroundColor.value ? mixColor(backgroundColor.value, 0.2) : "";
    });
    const isMenuPopup = computed(() => {
      return mode.value === "horizontal" || mode.value === "vertical" && collapse.value;
    });
    watch(defaultActive, (value) => {
      if (!items[value]) {
        activeIndex.value = null;
      }
      updateActiveIndex(value);
    });
    watch(defaultOpeneds, (value) => {
      if (!collapse.value) {
        openedMenus.value = value;
      }
    });
    watch(collapse, (value) => {
      if (value)
        openedMenus.value = [];
      broadcast2("toggle-collapse", value);
    });
    onMounted(() => {
      initOpenedMenu();
      on2("item-click", handleItemClick);
      on2("submenu-click", handleSubmenuClick);
      if (mode.value === "horizontal") {
        new Menu(instance2.vnode.el);
      }
      watch(items, updateActiveIndex);
    });
    provide("rootMenu", instance2);
    return {
      addItem,
      removeItem,
      addSubmenu,
      removeSubmenu,
      openedMenus,
      activeIndex,
      hoverBackground,
      isMenuPopup,
      openMenu,
      closeMenu,
      open,
      close: close2
    };
  }
};
script$w.__file = "packages/menu/Menu.vue";
script$w.install = function(app) {
  app.component(script$w.name, script$w);
};
var script$v = {
  name: "ElMenuItem",
  componentName: "ElMenuItem",
  components: {
    ElTooltip
  },
  props: {
    index: {
      default: null,
      validator: (val) => typeof val === "string" || val === null
    },
    route: [String, Object],
    disabled: Boolean
  },
  emits: ["click"],
  setup(props2, {
    emit
  }) {
    const {
      index: index2,
      disabled
    } = toRefs(props2);
    const {
      parentMenu,
      paddingStyle,
      rootMenu,
      indexPath
    } = useMenu(index2.value);
    const instance2 = getCurrentInstance();
    const {
      dispatch
    } = useEmitter();
    const active = computed(() => {
      return index2.value === rootMenu.proxy.activeIndex;
    });
    const hoverBackground = computed(() => {
      return rootMenu.props.hoverBackground;
    });
    const backgroundColor = computed(() => {
      return rootMenu.props.backgroundColor || "";
    });
    const itemBackgroundColor = ref(backgroundColor.value);
    const activeTextColor = computed(() => {
      return rootMenu.props.activeTextColor || "";
    });
    const textColor = computed(() => {
      return rootMenu.props.textColor || "";
    });
    const mode = computed(() => {
      return rootMenu.props.mode;
    });
    const isNested = computed(() => {
      return parentMenu !== rootMenu;
    });
    const itemStyle = computed(() => {
      const style = {
        color: active.value ? activeTextColor.value : textColor.value
      };
      if (mode.value === "horizontal" && !isNested.value) {
        style.borderBottomColor = active.value ? rootMenu.activeTextColor.value ? activeTextColor.value : "" : "transparent";
      }
      return style;
    });
    const onMouseEnter = () => {
      hoverBackground.value && (itemBackgroundColor.value = hoverBackground.value);
    };
    const onMouseLeave = () => {
      itemBackgroundColor.value = backgroundColor.value;
    };
    const handleClick = () => {
      if (!disabled.value) {
        dispatch("item-click", instance2);
        emit("click", instance2);
      }
    };
    onMounted(() => {
      parentMenu.value.setupState.addItem(instance2);
      rootMenu.setupState.addItem(instance2);
    });
    onBeforeUnmount(() => {
      parentMenu.value.setupState.removeItem(instance2);
      rootMenu.setupState.removeItem(instance2);
    });
    return {
      paddingStyle,
      itemStyle,
      active,
      handleClick,
      onMouseEnter,
      onMouseLeave,
      rootMenu,
      parentMenu,
      indexPath,
      itemBackgroundColor
    };
  }
};
var _hoisted_1$l = {
  style: {
    "position": "absolute",
    "left": "0",
    "top": "0",
    "height": "100%",
    "width": "100%",
    "display": "inline-block",
    "box-sizing": "border-box",
    "padding": "0 20px"
  }
};
function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createBlock("li", {
    class: ["el-menu-item", {
      "is-active": $setup.active,
      "is-disabled": $props.disabled
    }],
    role: "menuitem",
    tabindex: "-1",
    style: [$setup.paddingStyle, $setup.itemStyle, {
      backgroundColor: $setup.itemBackgroundColor
    }],
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleClick && $setup.handleClick(...args)),
    onMouseenter: _cache[2] || (_cache[2] = (...args) => $setup.onMouseEnter && $setup.onMouseEnter(...args)),
    onFocus: _cache[3] || (_cache[3] = (...args) => $setup.onMouseEnter && $setup.onMouseEnter(...args)),
    onBlur: _cache[4] || (_cache[4] = (...args) => $setup.onMouseLeave && $setup.onMouseLeave(...args)),
    onMouseleave: _cache[5] || (_cache[5] = (...args) => $setup.onMouseLeave && $setup.onMouseLeave(...args))
  }, [$setup.parentMenu.type.name === "ElMenu" && $setup.rootMenu.proxy.collapse && _ctx.$slots.title ? (openBlock(), createBlock(_component_el_tooltip, {
    key: 0,
    effect: "dark",
    placement: "right"
  }, {
    content: withCtx(() => [createVNode("div", null, [renderSlot(_ctx.$slots, "title")])]),
    default: withCtx(() => [createVNode("div", _hoisted_1$l, [renderSlot(_ctx.$slots, "default")])]),
    _: 3
  })) : (openBlock(), createBlock(Fragment, {
    key: 1
  }, [renderSlot(_ctx.$slots, "default"), renderSlot(_ctx.$slots, "title")], 64))], 38);
}
script$v.render = render$r;
script$v.__file = "packages/menu/MenuItem.vue";
script$v.install = function(app) {
  app.component(script$v.name, script$v);
};
var script$u = {
  name: "ElSubmenu",
  componentName: "ElSubmenu",
  components: {
    ElCollapseTransition
  },
  props: __spreadProps(__spreadValues({}, popperProps), {
    transformOrigin: {
      type: [Boolean, String],
      default: false
    },
    index: {
      type: String,
      required: true
    },
    showTimeout: {
      type: Number,
      default: 300
    },
    hideTimeout: {
      type: Number,
      default: 300
    },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: void 0
    }
  }),
  emits: ["updatePopper", "visible", "update:modelValue", "created"],
  setup(props2, {
    emit,
    slots
  }) {
    const {
      index: index2,
      disabled,
      showTimeout,
      hideTimeout,
      popperAppendToBody
    } = toRefs(props2);
    const popperElm = ref(null);
    const referenceElm = ref(null);
    const menu = ref(null);
    const {
      doDestroy,
      showPopper,
      currentPlacement,
      updatePopper
    } = usePopper(props2, {
      emit,
      slots
    }, {
      popperElm,
      referenceElm
    });
    const {
      parentMenu,
      paddingStyle,
      rootMenu,
      indexPath
    } = useMenu(index2.value);
    const timeout = ref(null);
    const {
      items,
      itemsInstance,
      submenus,
      submenusInstance,
      addItem,
      removeItem,
      addSubmenu,
      removeSubmenu
    } = useItems();
    const mouseInChild = ref(false);
    const instance2 = getCurrentInstance();
    const {
      dispatch,
      on: on2
    } = useEmitter();
    const handleCollapseToggle = (value) => {
      if (value) {
        initPopper();
      } else {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || disabled.value) {
        return;
      }
      dispatch("submenu-click", instance2);
    };
    const handleMouseenter = (event, delay = showTimeout.value) => {
      if (!("ActiveXObject" in window) && event.type === "focus" && !event.relatedTarget) {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || disabled.value) {
        return;
      }
      dispatch("mouse-enter-child");
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        rootMenu.setupState.openMenu(index2.value, indexPath);
      }, delay);
      if (appendToBody2.value) {
        instance2.parent.vnode.el.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        return;
      }
      dispatch("mouse-leave-child");
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        !mouseInChild.value && rootMenu.setupState.closeMenu(index2.value);
      }, hideTimeout.value);
      if (appendToBody2.value && deepDispatch) {
        if (parentMenu.value && parentMenu.value.type.name === "ElSubmenu") {
          parentMenu.value.setupState.handleMouseleave(true);
        }
      }
    };
    const handleTitleMouseenter = () => {
      hoverBackground.value && (titleBackground.value = hoverBackground.value);
    };
    const handleTitleMouseleave = () => {
      titleBackground.value = backgroundColor.value;
    };
    const isFirstLevel = computed(() => {
      let isFirstLevel2 = true;
      let parent = instance2.parent;
      while (parent && parent !== rootMenu) {
        if (["ElSubmenu", "ElMenuItemGroup"].indexOf(parent.type.name) > -1) {
          isFirstLevel2 = false;
          break;
        } else {
          parent = parent.parent;
        }
      }
      return isFirstLevel2;
    });
    const updatePlacement = () => {
      currentPlacement.value = mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start";
    };
    const initPopper = () => {
      referenceElm.value = instance2.vnode.el;
      popperElm.value = menu.value;
      updatePlacement();
    };
    const appendToBody2 = computed(() => {
      return popperAppendToBody.value === void 0 ? isFirstLevel : popperAppendToBody.value;
    });
    const menuTransitionName = computed(() => {
      return rootMenu.props.collapse ? "el-zoom-in-left" : "el-zoom-in-top";
    });
    watch(rootMenu.setupState.openedMenus, (val) => {
      showPopper.value = val.indexOf(index2.value) > -1;
    });
    const active = computed(() => {
      let isActive = false;
      Object.keys(items).forEach((index3) => {
        if (itemsInstance[index3].proxy.active) {
          isActive = true;
        }
      });
      Object.keys(submenus).forEach((index3) => {
        if (submenusInstance[index3].proxy.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const hoverBackground = computed(() => {
      return rootMenu.setupState.hoverBackground;
    });
    const backgroundColor = computed(() => {
      return rootMenu.props.backgroundColor || "";
    });
    const titleBackground = ref(backgroundColor.value);
    const activeTextColor = computed(() => {
      return rootMenu.props.activeTextColor || "";
    });
    const textColor = computed(() => {
      return rootMenu.props.textColor || "";
    });
    const mode = computed(() => {
      return rootMenu.props.mode;
    });
    const isMenuPopup = computed(() => {
      return rootMenu.setupState.isMenuPopup;
    });
    const titleStyle = computed(() => {
      if (mode.value !== "horizontal") {
        return {
          color: textColor.value
        };
      }
      return {
        borderBottomColor: active.value ? activeTextColor.value ? activeTextColor.value : "" : "transparent",
        color: active.value ? activeTextColor.value : textColor.value
      };
    });
    watch(showPopper, () => {
      if (isMenuPopup.value) {
        nextTick(() => {
          updatePopper();
        });
      }
    });
    on2("toggle-collapse", handleCollapseToggle);
    on2("mouse-enter-child", () => {
      mouseInChild.value = true;
      clearTimeout(timeout.value);
    });
    on2("mouse-leave-child", () => {
      mouseInChild.value = false;
      clearTimeout(timeout.value);
    });
    onMounted(() => {
      parentMenu.value.setupState.addSubmenu(instance2);
      rootMenu.setupState.addSubmenu(instance2);
      initPopper();
      showPopper.value = rootMenu.setupState.openedMenus.indexOf(index2.value) > -1;
    });
    onBeforeUnmount(() => {
      parentMenu.value.setupState.removeSubmenu(instance2);
      rootMenu.setupState.removeSubmenu(instance2);
    });
    return {
      active,
      paddingStyle,
      titleStyle,
      backgroundColor,
      rootMenu,
      currentPlacement,
      menuTransitionName,
      mode,
      isFirstLevel,
      isMenuPopup,
      handleTitleMouseleave,
      handleTitleMouseenter,
      handleClick,
      handleMouseenter,
      addItem,
      removeItem,
      addSubmenu,
      removeSubmenu,
      showPopper,
      handleMouseleave,
      menu,
      titleBackground,
      indexPath
    };
  },
  render() {
    const {
      active,
      showPopper,
      paddingStyle,
      titleStyle,
      backgroundColor,
      rootMenu,
      currentPlacement,
      menuTransitionName,
      mode,
      disabled,
      popperClass,
      $slots,
      isFirstLevel,
      isMenuPopup,
      handleMouseenter,
      handleMouseleave,
      handleClick,
      handleTitleMouseleave,
      handleTitleMouseenter,
      titleBackground
    } = this;
    const popupMenu = createVNode(Transition, {
      "name": menuTransitionName
    }, {
      default: () => [withDirectives(createVNode("div", {
        "ref": "menu",
        "class": [`el-menu--${mode}`, popperClass],
        "onMouseenter": ($event) => handleMouseenter($event, 100),
        "onMouseleave": () => handleMouseleave(true),
        "onFocus": ($event) => handleMouseenter($event, 100)
      }, [createVNode("ul", {
        "role": "menu",
        "class": ["el-menu el-menu--popup", `el-menu--popup-${currentPlacement}`],
        "style": {
          backgroundColor
        }
      }, [$slots.default()])]), [[vShow, showPopper]])]
    });
    const inlineMenu = createVNode(resolveComponent("el-collapse-transition"), null, {
      default: () => [withDirectives(createVNode("ul", {
        "role": "menu",
        "class": "el-menu el-menu--inline",
        "style": {
          backgroundColor
        }
      }, [$slots.default()]), [[vShow, showPopper]])]
    });
    const submenuTitleIcon = rootMenu.props.mode === "horizontal" && isFirstLevel || rootMenu.props.mode === "vertical" && !rootMenu.props.collapse ? "el-icon-arrow-down" : "el-icon-arrow-right";
    return createVNode("li", {
      "class": {
        "el-submenu": true,
        "is-active": active,
        "is-opened": showPopper,
        "is-disabled": disabled
      },
      "role": "menuitem",
      "aria-haspopup": "true",
      "aria-expanded": showPopper,
      "onMouseenter": handleMouseenter,
      "onMouseleave": () => {
        handleMouseleave(false);
      },
      "onFocus": handleMouseenter
    }, [createVNode("div", {
      "class": "el-submenu__title",
      "onClick": handleClick,
      "onMouseenter": handleTitleMouseenter,
      "onMouseleave": handleTitleMouseleave,
      "style": [paddingStyle, titleStyle, {
        backgroundColor: titleBackground
      }]
    }, [$slots.title && $slots.title(), createVNode("i", {
      "class": ["el-submenu__icon-arrow", submenuTitleIcon]
    }, null)]), isMenuPopup ? popupMenu : inlineMenu]);
  }
};
script$u.__file = "packages/menu/Submenu.vue";
script$u.install = function(app) {
  app.component(script$u.name, script$u);
};
var script$t = {
  name: "ElMenuItemGroup",
  componentName: "ElMenuItemGroup",
  props: {
    title: {
      type: String
    }
  },
  setup() {
    const instance2 = getCurrentInstance();
    const rootMenu = inject("rootMenu");
    const levelPadding = computed(() => {
      let padding = 20;
      let parent = instance2.parent;
      if (rootMenu.props.collapse)
        return 20;
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubmenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
      return padding;
    });
    return {
      levelPadding
    };
  }
};
var _hoisted_1$k = {
  class: "el-menu-item-group"
};
function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("li", _hoisted_1$k, [createVNode("div", {
    class: "el-menu-item-group__title",
    style: {
      paddingLeft: $setup.levelPadding + "px"
    }
  }, [!_ctx.$slots.title ? (openBlock(), createBlock(Fragment, {
    key: 0
  }, [createTextVNode(toDisplayString($props.title), 1)], 64)) : renderSlot(_ctx.$slots, "title", {
    key: 1
  })], 4), createVNode("ul", null, [renderSlot(_ctx.$slots, "default")])]);
}
script$t.render = render$q;
script$t.__file = "packages/menu/MenuItemGroup.vue";
script$t.install = function(app) {
  app.component(script$t.name, script$t);
};
var script$s = {
  name: "ElTabs",
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: ""
    },
    closable: Boolean,
    addable: Boolean,
    editable: Boolean,
    tabPosition: {
      type: String,
      default: "top"
    },
    stretch: Boolean,
    beforeLeave: {
      type: Function,
      default: () => () => true
    }
  },
  emits: ["update:modelValue", "tab-click", "tab-remove", "tab-add", "edit"],
  setup: function(props2) {
    const tabList = reactive([]);
    const tabElList = reactive([]);
    const {
      scrollable,
      tabs,
      tabScroll,
      tabNav,
      direction,
      scrollToActive,
      handleClickLeft,
      handleClickRight
    } = useTabScroll({
      tabElList
    });
    const {
      state,
      handleClick,
      handleClose
    } = useTabNav({
      tabElList,
      tabList,
      scrollToActive
    });
    const {
      activeBarStyle
    } = useTabBarStyle({
      tabList,
      state,
      direction
    });
    provide("elTabsInfo", {
      tabList,
      props: props2,
      state
    });
    return {
      activeBarStyle,
      state,
      tabList,
      tabElList,
      scrollable,
      tabScroll,
      tabNav,
      tabs,
      handleClick,
      handleClose,
      handleClickLeft,
      handleClickRight
    };
  }
};
function useTabBarStyle({
  tabList,
  state,
  direction
}) {
  const activeBarStyle = computed(() => {
    const {
      sizeName,
      textSizeName,
      posName,
      dirFlag
    } = direction.value;
    return [`${sizeName}: ${tabList[state.activeIndex] && tabList[state.activeIndex][textSizeName]}px`, `transform: translate${dirFlag}(${tabList[state.activeIndex] && tabList[state.activeIndex][posName]}px)`];
  });
  return {
    activeBarStyle
  };
}
function useTabNav({
  tabList,
  tabElList,
  scrollToActive
}) {
  const instance2 = getCurrentInstance();
  const state = reactive({
    activeName: "",
    activeIndex: -1
  });
  watch(toRefs(instance2.props).modelValue || ref(null), (v) => {
    const tabIndex = tabList.findIndex((item) => item.name === v);
    if (tabIndex === -1)
      return;
    switchTab(tabList[tabIndex], tabIndex);
  });
  onMounted(async () => {
    await nextTick();
    if (!tabList.length)
      return;
    await handleClick(tabList[0], 0);
  });
  onUpdated(async () => {
    await nextTick();
    tabElList.forEach((el, index2) => {
      const style = window.getComputedStyle(el);
      tabList[index2].width = parseFloat(style.width);
      tabList[index2].textWidth = parseFloat(style.width) - (parseFloat(style.paddingLeft) + parseFloat(style.paddingRight));
      tabList[index2].height = parseFloat(style.height);
      tabList[index2].textHeight = parseFloat(style.height) - (parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
      tabList[index2].x = parseFloat(style.paddingLeft) + parseFloat(el.offsetLeft);
      tabList[index2].y = parseFloat(style.paddingTop) + parseFloat(el.offsetTop);
    });
  });
  const switchTab = async (item, index2) => {
    if (index2 === state.activeIndex) {
      return false;
    }
    if (item.disabled) {
      return false;
    }
    const isLeave = await instance2.props.beforeLeave(item.name, state.activeName);
    if (!isLeave) {
      return false;
    }
    item.rendered = true;
    state.activeName = item.name;
    state.activeIndex = index2;
    scrollToActive(item);
    return true;
  };
  const handleClick = async (item, index2, e) => {
    await switchTab(item, index2);
    instance2.emit("update:modelValue", state.activeName);
    instance2.emit("tab-click", tabList[index2], e);
  };
  const handleClose = (item, index2, e) => {
    tabList.splice(index2, 1);
    nextTick(() => {
      tabElList.splice(index2, 1);
    });
    instance2.emit("tab-remove", item.name, index2, item, e);
    instance2.emit("edit", item.name, "remove");
  };
  return {
    state,
    handleClick,
    handleClose
  };
}
function useTabScroll({
  tabElList
}) {
  const instance2 = getCurrentInstance();
  const tabs = ref(null);
  const tabScroll = ref(null);
  const tabNav = ref(null);
  const scrollable = ref(false);
  const scrollSize = ref(0);
  const direction = computed(() => {
    const dirFlag = {
      bottom: true,
      top: true
    }[instance2.props.tabPosition] ? "X" : "Y";
    const sizeName = {
      X: "width",
      Y: "height"
    }[dirFlag];
    const textSizeName = {
      X: "textWidth",
      Y: "textHeight"
    }[dirFlag];
    const offsetName = {
      X: "offsetWidth",
      Y: "offsetHeight"
    }[dirFlag];
    const scrollName = {
      X: "scrollWidth",
      Y: "scrollHeight"
    }[dirFlag];
    const posName = dirFlag.toLocaleLowerCase();
    scrollSize.value = 0;
    if (instance2.props.tabPosition === "bottom") {
      instance2.refs.hander && instance2.refs.hander.before(instance2.refs.content);
    } else {
      instance2.refs.content && instance2.refs.content.before(instance2.refs.hander);
    }
    return {
      dirFlag,
      sizeName,
      textSizeName,
      posName,
      offsetName,
      scrollName
    };
  });
  const viewArea = computed(() => {
    const {
      offsetName
    } = direction.value;
    return {
      start: Math.abs(scrollSize.value),
      end: Math.abs(scrollSize.value) + tabScroll.value[offsetName]
    };
  });
  onUpdated(async () => {
    await nextTick();
    const {
      sizeName,
      offsetName
    } = direction.value;
    let sizeSum = 0;
    tabElList.forEach((el) => {
      const style = window.getComputedStyle(el);
      sizeSum += parseFloat(style[sizeName]);
    });
    scrollable.value = sizeSum > tabScroll.value[offsetName];
  });
  watch(scrollSize, () => {
    const {
      dirFlag,
      offsetName
    } = direction.value;
    scrollSize.value = Math.min(scrollSize.value, 0);
    scrollSize.value = Math.max(scrollSize.value, tabScroll.value[offsetName] - tabNav.value[offsetName]);
    tabNav.value.style.transform = `translate${dirFlag}(${scrollSize.value}px)`;
  });
  const scrollToActive = (item) => {
    if (!scrollable.value) {
      return;
    }
    const {
      sizeName,
      posName,
      offsetName
    } = direction.value;
    scrollSize.value = (item[posName] + item[sizeName] / 2) * -1 + tabScroll.value[offsetName] / 2;
  };
  const handleClickLeft = () => {
    const {
      offsetName
    } = direction.value;
    scrollSize.value += tabScroll.value[offsetName];
  };
  const handleClickRight = () => {
    const {
      offsetName
    } = direction.value;
    scrollSize.value -= tabScroll.value[offsetName];
  };
  return {
    viewArea,
    scrollable,
    tabs,
    tabNav,
    tabScroll,
    direction,
    scrollToActive,
    handleClickLeft,
    handleClickRight
  };
}
var _hoisted_1$j = createVNode("i", {
  class: "el-icon-plus"
}, null, -1);
var _hoisted_2$c = createVNode("i", {
  class: "el-icon-arrow-left"
}, null, -1);
var _hoisted_3$a = createVNode("i", {
  class: "el-icon-arrow-right"
}, null, -1);
var _hoisted_4$7 = {
  class: "el-tabs__nav-scroll",
  ref: "tabScroll"
};
var _hoisted_5$4 = {
  ref: "content",
  class: "el-tabs__content"
};
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["el-tabs", ["el-tabs--" + $props.tabPosition, {
      "el-tabs--card": $props.type === "card",
      "el-tabs--border-card": $props.type === "border-card"
    }]],
    ref: "tabs"
  }, [createVNode("div", {
    ref: "hander",
    class: ["el-tabs__header", ["is-" + $props.tabPosition]]
  }, [$props.addable || $props.editable ? (openBlock(), createBlock("span", {
    key: 0,
    tabindex: "0",
    class: "el-tabs__new-tab",
    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("edit", null, "add"))
  }, [_hoisted_1$j])) : createCommentVNode("v-if", true), createVNode("div", {
    class: ["el-tabs__nav-wrap", ["is-" + $props.tabPosition, {
      "is-scrollable": _ctx.scrollable
    }]]
  }, [_ctx.scrollable ? (openBlock(), createBlock("span", {
    key: 0,
    class: "el-tabs__nav-prev",
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClickLeft && _ctx.handleClickLeft(...args))
  }, [_hoisted_2$c])) : createCommentVNode("v-if", true), _ctx.scrollable ? (openBlock(), createBlock("span", {
    key: 1,
    class: "el-tabs__nav-next",
    onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleClickRight && _ctx.handleClickRight(...args))
  }, [_hoisted_3$a])) : createCommentVNode("v-if", true), createVNode("div", _hoisted_4$7, [createVNode("div", {
    class: ["el-tabs__nav", ["is-" + $props.tabPosition, {
      "is-stretch": $props.stretch && {
        top: true,
        bottom: true
      }[$props.tabPosition]
    }]],
    ref: "tabNav"
  }, [createVNode("div", {
    class: ["el-tabs__active-bar", ["is-" + $props.tabPosition]],
    style: _ctx.activeBarStyle
  }, null, 6), (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tabList, (item, index2) => {
    return openBlock(), createBlock("div", {
      class: ["el-tabs__item is-closable", ["is-" + $props.tabPosition, {
        "is-active": index2 === _ctx.state.activeIndex,
        "is-closable": $props.closable || $props.editable || item.closable,
        "is-disabled": item.disabled
      }]],
      role: "tab",
      tabindex: "-1",
      ref: (el) => _ctx.tabElList[index2] = el,
      key: item.name,
      onClick: ($event) => _ctx.handleClick(item, index2, $event)
    }, [(openBlock(), createBlock(resolveDynamicComponent({
      render: () => item.pane.slots.label && item.pane.slots.label()
    }))), createTextVNode(" " + toDisplayString(item.label) + " ", 1), $props.closable || $props.editable || item.closable ? (openBlock(), createBlock("span", {
      key: 0,
      class: "el-icon-close",
      onClick: withModifiers(($event) => _ctx.handleClose(item, index2, $event), ["stop"])
    }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)], 10, ["onClick"]);
  }), 128))], 2)], 512)], 2)], 2), createVNode("div", _hoisted_5$4, [renderSlot(_ctx.$slots, "default")], 512)], 2);
}
script$s.render = render$p;
script$s.__file = "packages/tabs/Tabs.vue";
script$s.install = function(app) {
  app.component(script$s.name, script$s);
};
var script$r = {
  name: "ElTabPane",
  props: {
    label: [String, Number],
    name: [String, Number],
    disabled: Boolean,
    closable: Boolean,
    lazy: Boolean
  },
  setup(props2) {
    const index2 = ref(0);
    const instance2 = getCurrentInstance();
    const elTabsInfo = inject("elTabsInfo", null);
    const tab = reactive({
      label: props2.label,
      name: props2.name,
      disabled: props2.disabled,
      closable: props2.closable,
      rendered: false,
      pane: instance2
    });
    if (!elTabsInfo) {
      console.error("Element: not find parent ETabs");
      return;
    }
    index2.value = elTabsInfo.tabList.length;
    elTabsInfo.tabList[index2.value] = tab;
    return {
      elTabsInfo,
      tab,
      index: index2
    };
  }
};
var _hoisted_1$i = {
  key: 0
};
function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return ($props.lazy ? $setup.tab.rendered : true) ? withDirectives((openBlock(), createBlock("div", _hoisted_1$i, [renderSlot(_ctx.$slots, "default")], 512)), [[vShow, typeof $setup.elTabsInfo.props.modelValue !== "undefined" ? $setup.elTabsInfo.state.activeName === $props.name : $setup.elTabsInfo.state.activeIndex === $setup.index]]) : createCommentVNode("v-if", true);
}
script$r.render = render$o;
script$r.__file = "packages/tab-pane/TabPane.vue";
script$r.install = function(app) {
  app.component(script$r.name, script$r);
};
var script$q = {
  name: "ElBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/"
    },
    separatorClass: {
      type: String,
      default: ""
    }
  },
  setup(props2) {
    const {
      separator,
      separatorClass
    } = toRefs(props2);
    const root2 = ref(null);
    provide("separator", separator);
    provide("separatorClass", separatorClass);
    onMounted(() => {
      const items = root2.value.querySelectorAll(".el-breadcrumb__item");
      if (items.length) {
        items[items.length - 1].setAttribute("aria-current", "page");
      }
    });
    return {
      root: root2
    };
  }
};
var _hoisted_1$h = {
  ref: "root",
  class: "el-breadcrumb",
  "aria-label": "Breadcrumb",
  role: "navigation"
};
function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$h, [renderSlot(_ctx.$slots, "default")], 512);
}
script$q.render = render$n;
script$q.__file = "packages/breadcrumb/Breadcrumb.vue";
script$q.install = function(app) {
  app.component(script$q.name, script$q);
};
var script$p = {
  name: "ElBreadcrumbItem",
  props: {
    to: {},
    replace: Boolean
  },
  setup(props2) {
    const {
      replace
    } = toRefs(props2);
    const separator = inject("separator");
    const separatorClass = inject("separatorClass");
    const link = ref(null);
    const {
      proxy
    } = getCurrentInstance();
    onMounted(() => {
      link.value.setAttribute("role", "link");
      link.value.addEventListener("click", () => {
        if (!props2.to || !proxy.$router)
          return;
        replace ? proxy.$router.replace(props2.to) : proxy.$router.push(props2.to);
      });
    });
    return {
      separator,
      separatorClass,
      link
    };
  }
};
var _hoisted_1$g = {
  class: "el-breadcrumb__item"
};
var _hoisted_2$b = {
  key: 1,
  class: "el-breadcrumb__separator",
  role: "presentation"
};
function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1$g, [createVNode("span", {
    class: ["el-breadcrumb__inner", $props.to ? "is-link" : ""],
    ref: "link",
    role: "link"
  }, [renderSlot(_ctx.$slots, "default")], 2), $setup.separatorClass ? (openBlock(), createBlock("i", {
    key: 0,
    class: ["el-breadcrumb__separator", $setup.separatorClass]
  }, null, 2)) : (openBlock(), createBlock("span", _hoisted_2$b, toDisplayString($setup.separator), 1))]);
}
script$p.render = render$m;
script$p.__file = "packages/breadcrumb/BreadcrumbItem.vue";
script$p.install = function(app) {
  app.component(script$p.name, script$p);
};
var script$o = {
  name: "ElPageHeader",
  props: {
    title: {
      type: String,
      default() {
        return t("el.pageHeader.title");
      }
    },
    content: String
  },
  emits: ["back"],
  setup(props2, ctx2) {
    const handleClick = (evt) => {
      ctx2.emit("back", evt);
    };
    return {
      handleClick
    };
  }
};
var _hoisted_1$f = {
  class: "el-page-header"
};
var _hoisted_2$a = createVNode("i", {
  class: "el-icon-back"
}, null, -1);
var _hoisted_3$9 = {
  class: "el-page-header__title"
};
var _hoisted_4$6 = {
  class: "el-page-header__content"
};
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$f, [createVNode("div", {
    class: "el-page-header__left",
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleClick && $setup.handleClick(...args))
  }, [_hoisted_2$a, createVNode("div", _hoisted_3$9, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString($props.title), 1)])])]), createVNode("div", _hoisted_4$6, [renderSlot(_ctx.$slots, "content", {}, () => [createTextVNode(toDisplayString($props.content), 1)])])]);
}
script$o.render = render$l;
script$o.__file = "packages/page-header/PageHeader.vue";
script$o.install = function(app) {
  app.component(script$o.name, script$o);
};
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var script$n = {
  name: "ElDropdown",
  componentName: "ElDropdown",
  directives: {
    Clickoutside
  },
  emits: ["menu-item-click", "visible-change", "command"],
  components: {
    ElButton: script$1u,
    ElButtonGroup: script$1t
  },
  provide() {
    return {
      dropdown: this
    };
  },
  props: {
    trigger: {
      type: String,
      default: "hover"
    },
    type: String,
    size: {
      type: String,
      default: ""
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: "bottom-end"
    },
    visibleArrow: {
      default: true
    },
    showTimeout: {
      type: Number,
      default: 250
    },
    hideTimeout: {
      type: Number,
      default: 150
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  setup(props2, {
    emit,
    slots
  }) {
    const instance2 = getCurrentInstance();
    const {
      size,
      trigger,
      showTimeout,
      tabindex,
      hideTimeout,
      hideOnClick,
      splitButton,
      type: type2
    } = toRefs(props2);
    const dropdownSize = computed(() => {
      var _instance$proxy, _instance$proxy$$ELEM;
      return size.value || ((_instance$proxy = instance2.proxy) === null || _instance$proxy === void 0 ? void 0 : (_instance$proxy$$ELEM = _instance$proxy.$ELEMENT) === null || _instance$proxy$$ELEM === void 0 ? void 0 : _instance$proxy$$ELEM.size);
    });
    const timeout = ref(0);
    const visible = ref(false);
    const triggerElm = ref(null);
    const show = () => {
      var _triggerElm$value;
      if ((_triggerElm$value = triggerElm.value) !== null && _triggerElm$value !== void 0 && _triggerElm$value.disabled)
        return;
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        visible.value = true;
      }, trigger.value === "click" ? 0 : showTimeout.value);
    };
    const hide = () => {
      var _triggerElm$value2;
      if ((_triggerElm$value2 = triggerElm.value) !== null && _triggerElm$value2 !== void 0 && _triggerElm$value2.disabled)
        return;
      removeTabindex();
      if (tabindex.value >= 0) {
        resetTabindex(triggerElm.value);
      }
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        visible.value = false;
      }, trigger.value === "click" ? 0 : hideTimeout.value);
    };
    const handleClick = () => {
      var _triggerElm$value3;
      if ((_triggerElm$value3 = triggerElm.value) !== null && _triggerElm$value3 !== void 0 && _triggerElm$value3.disabled)
        return;
      if (visible.value) {
        hide();
      } else {
        show();
      }
    };
    const menuItems = ref(null);
    const handleTriggerKeyDown = (ev) => {
      const _keyCode = ev.keyCode;
      if ([38, 40].indexOf(_keyCode) > -1) {
        removeTabindex();
        resetTabindex(menuItems.value[0]);
        menuItems.value[0].focus();
        ev.preventDefault();
        ev.stopPropagation();
      } else if (_keyCode === 13) {
        handleClick();
      } else if ([9, 27].indexOf(_keyCode) > -1) {
        hide();
      }
    };
    const menuItemsArray = ref(null);
    const handleItemKeyDown = (ev) => {
      const _keyCode = ev.keyCode;
      const _target = ev.target;
      const _currentIndex = menuItemsArray.value.indexOf(_target);
      const _max = menuItemsArray.value.length - 1;
      let _nextIndex;
      if ([38, 40].indexOf(_keyCode) > -1) {
        if (_keyCode === 38) {
          _nextIndex = _currentIndex !== 0 ? _currentIndex - 1 : 0;
        } else {
          _nextIndex = _currentIndex < _max ? _currentIndex + 1 : _max;
        }
        removeTabindex();
        resetTabindex(menuItems.value[_nextIndex]);
        menuItems.value[_nextIndex].focus();
        ev.preventDefault();
        ev.stopPropagation();
      } else if (_keyCode === 13) {
        triggerElmFocus();
        _target.click();
        if (hideOnClick.value) {
          visible.value = false;
        }
      } else if ([9, 27].indexOf(_keyCode) > -1) {
        hide();
        triggerElmFocus();
      }
    };
    const resetTabindex = (ele) => {
      removeTabindex();
      ele.setAttribute("tabindex", "0");
    };
    const removeTabindex = () => {
      triggerElm.value.setAttribute("tabindex", "-1");
      menuItemsArray.value.forEach((item) => {
        item.setAttribute("tabindex", "-1");
      });
    };
    const dropdownElm = ref(null);
    const listId = ref(`dropdown-menu-${generateId()}`);
    const initAria = () => {
      dropdownElm.value.setAttribute("id", listId.value);
      triggerElm.value.setAttribute("aria-haspopup", "list");
      triggerElm.value.setAttribute("aria-controls", listId.value);
      if (!splitButton.value) {
        triggerElm.value.setAttribute("role", "button");
        triggerElm.value.setAttribute("tabindex", tabindex.value);
        triggerElm.value.setAttribute("class", (triggerElm.value.getAttribute("class") || "") + " el-dropdown-selfdefine");
      }
    };
    const focusing = ref(false);
    const initEvent = () => {
      triggerElm.value = splitButton.value ? instance2.proxy.$refs.trigger.$el : instance2.proxy.$el.children[0];
      triggerElm.value.addEventListener("keydown", handleTriggerKeyDown);
      dropdownElm.value.addEventListener("keydown", handleItemKeyDown, true);
      if (!splitButton.value) {
        triggerElm.value.addEventListener("focus", () => {
          focusing.value = true;
        });
        triggerElm.value.addEventListener("blur", () => {
          focusing.value = false;
        });
        triggerElm.value.addEventListener("click", () => {
          focusing.value = false;
        });
      }
      if (trigger.value === "hover") {
        triggerElm.value.addEventListener("mouseenter", show);
        triggerElm.value.addEventListener("mouseleave", hide);
        dropdownElm.value.addEventListener("mouseenter", show);
        dropdownElm.value.addEventListener("mouseleave", hide);
      } else if (trigger.value === "click") {
        triggerElm.value.addEventListener("click", handleClick);
      }
    };
    const handleMenuItemClick = (command, instance3) => {
      if (hideOnClick.value) {
        visible.value = false;
      }
      emit("command", command, instance3);
    };
    const triggerElmFocus = () => {
      triggerElm.value.focus && triggerElm.value.focus();
    };
    const initDomOperation = () => {
      dropdownElm.value = instance2.proxy.popperElm;
      menuItems.value = dropdownElm.value.querySelectorAll("[tabindex='-1']");
      menuItemsArray.value = [].slice.call(menuItems.value);
      initEvent();
      initAria();
    };
    const {
      broadcast: broadcast2,
      on: on2
    } = useEmitter();
    watch(visible, (val) => {
      broadcast2("visible", val);
      emit("visible-change", val);
    });
    on2("menu-item-click", handleMenuItemClick);
    watch(focusing, (val) => {
      const selfDefine = instance2.proxy.$el.querySelector(".el-dropdown-selfdefine");
      if (selfDefine) {
        if (val) {
          selfDefine.className += " focusing";
        } else {
          selfDefine.className = selfDefine.className.replace("focusing", "");
        }
      }
    });
    instance2.proxy.initDomOperation = initDomOperation;
    instance2.proxy.dropdownSize = dropdownSize.value;
    instance2.proxy.visible = visible.value;
    instance2.proxy.broadcast = broadcast2;
    provide("dropdown", instance2);
    const handleMainButtonClick = (event) => {
      emit("click", event);
      hide();
    };
    return () => {
      const defaultNode = slots.default() ? slots.default()[0] : h("span");
      const dropdownNode = slots.default() ? slots.default()[1] : h("ul");
      const triggerElm2 = !splitButton.value ? defaultNode : createVNode(resolveComponent("el-button-group"), null, {
        default: () => [createVNode(resolveComponent("el-button"), {
          "type": type2.value,
          "size": dropdownSize.value,
          "nativeOn-click": handleMainButtonClick
        }, _isSlot(defaultNode) ? defaultNode : {
          default: () => [defaultNode]
        }), createVNode(resolveComponent("el-button"), {
          "ref": "trigger",
          "type": type2.value,
          "size": dropdownSize.value,
          "class": "el-dropdown__caret-button"
        }, {
          default: () => [createVNode("i", {
            "class": "el-dropdown__icon el-icon-arrow-down"
          }, null)]
        })]
      });
      return h("div", {
        class: "el-dropdown"
      }, [triggerElm2, dropdownNode]);
    };
  }
};
script$n.__file = "packages/dropdown/src/dropdown.vue";
script$n.install = function(app) {
  app.component(script$n.name, script$n);
};
var script$m = {
  name: "ElDropdownItem",
  props: {
    command: {},
    disabled: Boolean,
    divided: Boolean,
    icon: String
  },
  setup(props2) {
    const instance2 = getCurrentInstance();
    const {
      dispatch
    } = useEmitter();
    const {
      command
    } = toRefs(props2);
    const handleClick = () => {
      dispatch("menu-item-click", command === null || command === void 0 ? void 0 : command.value, instance2.proxy);
    };
    return {
      handleClick
    };
  }
};
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("li", {
    class: ["el-dropdown-menu__item", {
      "is-disabled": $props.disabled,
      "el-dropdown-menu__item--divided": $props.divided
    }],
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleClick && $setup.handleClick(...args)),
    "aria-disabled": $props.disabled,
    tabindex: $props.disabled ? null : -1
  }, [$props.icon ? (openBlock(), createBlock("i", {
    key: 0,
    class: $props.icon
  }, null, 2)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")], 10, ["aria-disabled", "tabindex"]);
}
script$m.render = render$k;
script$m.__file = "packages/dropdown/src/dropdown-item.vue";
script$m.install = function(app) {
  app.component(script$m.name, script$m);
};
var script$l = {
  name: "ElDropdownMenu",
  componentName: "ElDropdownMenu",
  props: __spreadProps(__spreadValues({}, popperProps), {
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    }
  }),
  emits: ["updatePopper", "visible", "update:modelValue", "created"],
  setup(props2, {
    emit,
    slots
  }) {
    const popperElm = ref(null);
    const referenceElm = ref(null);
    const {
      doDestroy,
      showPopper,
      currentPlacement,
      updatePopper
    } = usePopper(props2, {
      emit,
      slots
    }, {
      popperElm,
      referenceElm
    });
    const dropdown = inject("dropdown");
    const size = dropdown.dropdownSize;
    const instance2 = getCurrentInstance();
    const {
      on: on2
    } = useEmitter();
    on2("updatePopper", () => {
      if (showPopper.value)
        updatePopper();
    });
    on2("visible", (val) => {
      showPopper.value = val;
    });
    onMounted(() => {
      dropdown.popperElm = popperElm.value = instance2.proxy.$el;
      referenceElm.value = dropdown.$el;
      nextTick(() => dropdown.initDomOperation());
    });
    watch(() => dropdown.placement, (val) => {
      currentPlacement.value = val;
    }, {
      immediate: true
    });
    watch(() => dropdown.visible.value, (val) => {
      showPopper.value = val;
    });
    return {
      showPopper,
      size,
      doDestroy
    };
  }
};
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "el-zoom-in-top",
    onAfterLeave: $setup.doDestroy
  }, {
    default: withCtx(() => [withDirectives(createVNode("ul", {
      class: ["el-dropdown-menu el-popper", [$setup.size && `el-dropdown-menu--${$setup.size}`]]
    }, [renderSlot(_ctx.$slots, "default")], 2), [[vShow, $setup.showPopper]])]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
script$l.render = render$j;
script$l.__file = "packages/dropdown/src/dropdown-menu.vue";
script$l.install = function(app) {
  app.component(script$l.name, script$l);
};
var stateSymbol = Symbol("state");
var propsSymbol = Symbol("props");
var script$k = {
  name: "ElSteps",
  props: {
    space: [Number, String],
    active: Number,
    direction: {
      type: String,
      default: "horizontal"
    },
    alignCenter: Boolean,
    simple: Boolean,
    finishStatus: {
      type: String,
      default: "finish"
    },
    processStatus: {
      type: String,
      default: "process"
    }
  },
  emits: ["change"],
  setup(props2, context) {
    const state = reactive({
      steps: [],
      stepOffset: 0
    });
    provide(stateSymbol, state);
    provide(propsSymbol, props2);
    watch(() => props2.active, (newVal, oldVal) => context.emit("change", newVal, oldVal));
    watch(() => state.steps, () => {
      state.steps.forEach((child, index2) => {
        child.state.index = index2;
      });
    }, {
      deep: true
    });
    return __spreadValues({}, toRefs(state));
  }
};
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["el-steps", [!$props.simple && "el-steps--" + $props.direction, $props.simple && "el-steps--simple"]]
  }, [renderSlot(_ctx.$slots, "default")], 2);
}
script$k.render = render$i;
script$k.__file = "packages/steps/src/steps.vue";
script$k.install = function(app) {
  app.component(script$k.name, script$k);
};
var script$j = {
  name: "ElStep",
  props: {
    title: String,
    icon: String,
    description: String,
    status: String
  },
  setup(props2) {
    const parentState = inject(stateSymbol);
    const steps = parentState.steps;
    const stepOffset = parentState.stepOffset;
    const parentProps = inject(propsSymbol);
    const isSimple = parentProps.simple;
    const isCenter = parentProps.alignCenter;
    const state = reactive({
      index: -1,
      lineStyle: {},
      internalStatus: ""
    });
    const currentStatus = computed(() => {
      return props2.status || state.internalStatus;
    });
    const prevStatus = computed(() => {
      const prevStep = steps[state.index - 1];
      return prevStep ? prevStep.currentStatus : "wait";
    });
    const isVertical = computed(() => {
      return parentProps.direction === "vertical";
    });
    const isLast = computed(() => {
      return state.index === steps.length - 1;
    });
    const stepsCount = computed(() => {
      return steps.length;
    });
    const space = computed(() => {
      return isSimple ? "" : parentProps.space;
    });
    const style = computed(() => {
      const style2 = {};
      const len = steps.length;
      const newSpace = typeof space.value === "number" ? space.value + "px" : space.value ? space.value : 100 / (len - (isCenter ? 0 : 1)) + "%";
      style2.flexBasis = newSpace;
      if (isVertical.value)
        return style2;
      if (isLast.value) {
        style2.maxWidth = 100 / stepsCount.value + "%";
      } else {
        style2.marginRight = -stepOffset + "px";
      }
      return style2;
    });
    const updateStatus = (val) => {
      if (state.index < 0)
        return;
      const prevChild = steps[state.index - 1];
      if (val > state.index) {
        state.internalStatus = parentProps.finishStatus;
      } else if (val === state.index && prevStatus.value !== "error") {
        state.internalStatus = parentProps.processStatus;
      } else {
        state.internalStatus = "wait";
      }
      if (prevChild)
        prevChild.calcProgress(state.internalStatus);
    };
    const calcProgress = (status) => {
      let step = 100;
      const style2 = {};
      style2.transitionDelay = 150 * state.index + "ms";
      if (status === parentProps.processStatus) {
        step = state.currentStatus !== "error" ? 0 : 0;
      } else if (status === "wait") {
        step = 0;
        style2.transitionDelay = -150 * state.index + "ms";
      }
      style2.borderWidth = step && !isSimple ? "1px" : 0;
      parentProps.direction === "vertical" ? style2.height = step + "%" : style2.width = step + "%";
      state.lineStyle = style2;
    };
    watch(() => state.index, () => {
      updateStatus(parentProps.active);
    }, {
      immediate: true
    });
    watch(() => parentProps.active, updateStatus, {
      immediate: true
    });
    watch(() => parentProps.processStatus, () => {
      updateStatus(parentProps.active);
    }, {
      immediate: true
    });
    const instance2 = {
      state,
      currentStatus,
      calcProgress,
      updateStatus
    };
    onBeforeMount(() => {
      steps.push(instance2);
    });
    onBeforeUnmount(() => {
      const index2 = steps.indexOf(instance2);
      if (index2 >= 0) {
        steps.splice(index2, 1);
      }
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      currentStatus,
      prevStatus,
      direction: parentProps.direction,
      isSimple,
      isLast,
      isCenter,
      isVertical,
      space,
      style,
      stepOffset
    });
  }
};
var _hoisted_1$e = {
  key: 1,
  class: "el-step__icon-inner"
};
var _hoisted_2$9 = {
  class: "el-step__main"
};
var _hoisted_3$8 = {
  key: 0,
  class: "el-step__arrow"
};
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    ref: "step",
    class: ["el-step", [!$setup.isSimple && `is-${$setup.direction}`, $setup.isSimple && "is-simple", $setup.isLast && !$setup.space && !$setup.isCenter && "is-flex", $setup.isCenter && !$setup.isVertical && !$setup.isSimple && "is-center"]],
    style: $setup.style
  }, [createCommentVNode(" icon & line "), createVNode("div", {
    class: ["el-step__head", `is-${$setup.currentStatus}`]
  }, [createVNode("div", {
    class: "el-step__line",
    style: $setup.isLast ? "" : {
      marginRight: $setup.stepOffset + "px"
    }
  }, [createVNode("i", {
    class: "el-step__line-inner",
    style: _ctx.lineStyle
  }, null, 4)], 4), createVNode("div", {
    class: ["el-step__icon", `is-${$props.icon ? "icon" : "text"}`]
  }, [$setup.currentStatus !== "success" && $setup.currentStatus !== "error" ? renderSlot(_ctx.$slots, "icon", {
    key: 0
  }, () => [$props.icon ? (openBlock(), createBlock("i", {
    key: 0,
    class: ["el-step__icon-inner", [$props.icon]]
  }, null, 2)) : createCommentVNode("v-if", true), !$props.icon && !$setup.isSimple ? (openBlock(), createBlock("div", _hoisted_1$e, toDisplayString(_ctx.index + 1), 1)) : createCommentVNode("v-if", true)]) : (openBlock(), createBlock("i", {
    key: 1,
    class: [["el-icon-" + ($setup.currentStatus === "success" ? "check" : "close")], "el-step__icon-inner is-status"]
  }, null, 2))], 2)], 2), createCommentVNode(" title & description "), createVNode("div", _hoisted_2$9, [createVNode("div", {
    class: ["el-step__title", ["is-" + $setup.currentStatus]],
    ref: "title"
  }, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString($props.title), 1)])], 2), $setup.isSimple ? (openBlock(), createBlock("div", _hoisted_3$8)) : (openBlock(), createBlock("div", {
    key: 1,
    class: ["el-step__description", ["is-" + $setup.currentStatus]]
  }, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString($props.description), 1)])], 2))])], 6);
}
script$j.render = render$h;
script$j.__file = "packages/steps/src/step.vue";
script$j.install = function(app) {
  app.component(script$j.name, script$j);
};
var script$i = {
  name: "ElDialog",
  props: __spreadProps(__spreadValues({}, popupProps), {
    title: {
      type: String,
      default: ""
    },
    modal: {
      type: Boolean,
      default: true
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    width: String,
    fullscreen: Boolean,
    customClass: {
      type: String,
      default: ""
    },
    top: {
      type: String,
      default: "15vh"
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    },
    destroyOnClose: Boolean
  }),
  emits: ["update:visible", "close", "opened", "open", "closed"],
  setup(props2, {
    emit
  }) {
    const {
      visible,
      rendered,
      open
    } = usePopup(props2);
    const {
      appendToBody: appendToBody2,
      fullscreen,
      top,
      width,
      closeOnClickModal,
      destroyOnClose
    } = toRefs(props2);
    const closed = ref(false);
    const key = ref(0);
    const dialog = ref(null);
    const instanc = getCurrentInstance();
    const {
      broadcast: broadcast2
    } = useEmitter();
    const style = computed(() => {
      const style2 = {};
      if (!(fullscreen && fullscreen.value)) {
        style2.marginTop = top.value;
        if (width && width.value) {
          style2.width = width.value;
        }
      }
      return style2;
    });
    const handleWrapperClick = () => {
      if (!closeOnClickModal.value)
        return;
      handleClose();
    };
    const handleClose = () => {
      if (typeof props2.beforeClose === "function") {
        props2.beforeClose(hide);
      } else {
        hide();
      }
    };
    const hide = (cancel) => {
      if (cancel !== false) {
        emit("update:visible", false);
        emit("close");
        closed.value = true;
      }
    };
    const updatePopper = () => {
      broadcast2("updatePopper");
      broadcast2("updatePopper");
    };
    const afterEnter = () => {
      emit("opened");
    };
    const afterLeave = () => {
      emit("closed");
    };
    watch(visible, (val) => {
      const el = instanc.proxy.$el;
      if (val) {
        closed.value = false;
        emit("open");
        el.addEventListener("scroll", updatePopper);
        nextTick(() => {
          dialog.value.scrollTop = 0;
        });
        if (appendToBody2.value) {
          document.body.appendChild(el);
        }
      } else {
        el.removeEventListener("scroll", updatePopper);
        if (!closed.value)
          emit("close");
        if (destroyOnClose && destroyOnClose.value) {
          nextTick(() => {
            key.value++;
          });
        }
      }
    });
    onMounted(() => {
      if (visible.value) {
        rendered.value = true;
        open();
        if (appendToBody2.value) {
          document.body.appendChild(instanc.proxy.$el);
        }
      }
    });
    onUnmounted(() => {
      const el = instanc.proxy.$el;
      if (appendToBody2.value && el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
    return {
      dialog,
      key,
      rendered,
      handleClose,
      style,
      handleWrapperClick,
      afterEnter,
      afterLeave
    };
  }
};
var _hoisted_1$d = {
  class: "el-dialog__header"
};
var _hoisted_2$8 = {
  class: "el-dialog__title"
};
var _hoisted_3$7 = createVNode("i", {
  class: "el-dialog__close el-icon el-icon-close"
}, null, -1);
var _hoisted_4$5 = {
  key: 0,
  class: "el-dialog__body"
};
var _hoisted_5$3 = {
  key: 1,
  class: "el-dialog__footer"
};
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "dialog-fade",
    onAfterEnter: $setup.afterEnter,
    onAfterLeave: $setup.afterLeave
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: "el-dialog__wrapper",
      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $setup.handleWrapperClick && $setup.handleWrapperClick(...args), ["self"]))
    }, [(openBlock(), createBlock("div", {
      role: "dialog",
      key: $setup.key,
      "aria-modal": "true",
      "aria-label": $props.title || "dialog",
      class: ["el-dialog", {
        "is-fullscreen": $props.fullscreen,
        "el-dialog--center": $props.center
      }, $props.customClass],
      ref: "dialog",
      style: $setup.style
    }, [createVNode("div", _hoisted_1$d, [renderSlot(_ctx.$slots, "title", {}, () => [createVNode("span", _hoisted_2$8, toDisplayString($props.title), 1)]), $props.showClose ? (openBlock(), createBlock("button", {
      key: 0,
      type: "button",
      class: "el-dialog__headerbtn",
      "aria-label": "Close",
      onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleClose && $setup.handleClose(...args))
    }, [_hoisted_3$7])) : createCommentVNode("v-if", true)]), $setup.rendered ? (openBlock(), createBlock("div", _hoisted_4$5, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true), _ctx.$slots.footer ? (openBlock(), createBlock("div", _hoisted_5$3, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("v-if", true)], 14, ["aria-label"]))], 512), [[vShow, _ctx.visible]])]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
script$i.render = render$g;
script$i.__file = "packages/dialog/Dialog.vue";
script$i.install = function(app) {
  app.component(script$i.name, script$i);
};
var script$h = {
  name: "ElPopover",
  props: __spreadProps(__spreadValues({}, vuePopperProps), {
    trigger: {
      type: String,
      default: "click",
      validator: (value) => ["click", "focus", "hover", "manual"].indexOf(value) > -1
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 200
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: "fade-in-linear"
    },
    tabindex: {
      type: Number,
      default: 0
    }
  }),
  emits: ["created", "show", "hide", "after-enter", "after-leave", "update:modelValue"],
  setup(props2, {
    emit,
    slots
  }) {
    const {
      disabled,
      trigger,
      reference,
      popper,
      tabindex
    } = toRefs(props2);
    const instance2 = getCurrentInstance();
    const referenceEl = ref(null);
    const {
      showPopper,
      destroyPopper
    } = useVuePopper(props2, {
      instance: instance2,
      emit,
      slots,
      referenceEl
    });
    const tooltipId = computed(() => `el-popover-${generateId()}`);
    watch(showPopper, (val) => {
      if (disabled.value)
        return;
      val ? emit("show") : emit("hide");
    });
    const {
      doToggle,
      doShow,
      doClose,
      handleFocus,
      handleClick,
      handleBlur,
      handleMouseEnter,
      handleKeydown,
      handleMouseLeave,
      handleDocumentClick,
      handleAfterEnter,
      handleAfterLeave,
      cleanup
    } = useInteractive(__spreadValues({
      instance: instance2,
      emit,
      slots,
      referenceEl,
      showPopper,
      destroyPopper
    }, toRefs(props2)));
    onMounted(() => {
      referenceEl.value = reference && reference.value || instance2.proxy.$refs.reference;
      const popperRef = popper && popper.value || instance2.proxy.$refs.popper;
      if (!referenceEl.value && slots.reference && slots.reference()) {
        referenceEl.value = slots.reference()[0].el;
      }
      if (referenceEl.value) {
        addClass(referenceEl.value, "el-popover__reference");
        referenceEl.value.setAttribute("aria-describedby", tooltipId.value);
        referenceEl.value.setAttribute("tabindex", tabindex.value);
        popperRef.setAttribute("tabindex", 0);
        if (trigger.value !== "click") {
          on(referenceEl.value, "focusin", () => {
            handleFocus();
            const instanceRef = referenceEl.value.__vue__;
            if (instanceRef && typeof instanceRef.focus === "function") {
              instanceRef.focus();
            }
          });
          on(popperRef, "focusin", handleFocus);
          on(referenceEl.value, "focusout", handleBlur);
          on(popperRef, "focusout", handleBlur);
        }
        on(referenceEl.value, "keydown", handleKeydown);
        on(referenceEl.value, "click", handleClick);
      }
      if (trigger.value === "click") {
        on(referenceEl.value, "click", doToggle);
        on(document, "click", handleDocumentClick);
      } else if (trigger.value === "hover") {
        on(referenceEl.value, "mouseenter", handleMouseEnter);
        on(popperRef, "mouseenter", handleMouseEnter);
        on(referenceEl.value, "mouseleave", handleMouseLeave);
        on(popperRef, "mouseleave", handleMouseLeave);
      } else if (trigger.value === "focus") {
        if (tabindex < 0) {
          console.warn("[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key");
        }
        if (referenceEl.value.querySelector("input, textarea")) {
          on(referenceEl.value, "focusin", doShow);
          on(referenceEl.value, "focusout", doClose);
        } else {
          on(referenceEl.value, "mousedown", doShow);
          on(referenceEl.value, "mouseup", doClose);
        }
      }
    });
    onBeforeUnmount(() => {
      cleanup();
    });
    onUnmounted(() => {
      off(referenceEl.value, "click", doToggle);
      off(referenceEl.value, "mouseup", doClose);
      off(referenceEl.value, "mousedown", doShow);
      off(referenceEl.value, "focusin", doShow);
      off(referenceEl.value, "focusout", doClose);
      off(referenceEl.value, "mousedown", doShow);
      off(referenceEl.value, "mouseup", doClose);
      off(referenceEl.value, "mouseleave", handleMouseLeave);
      off(referenceEl.value, "mouseenter", handleMouseEnter);
      off(document, "click", handleDocumentClick);
    });
    return {
      showPopper,
      doToggle,
      doShow,
      doClose,
      handleFocus,
      handleClick,
      handleBlur,
      handleMouseEnter,
      handleKeydown,
      handleMouseLeave,
      handleDocumentClick,
      handleAfterEnter,
      handleAfterLeave,
      tooltipId,
      cleanup
    };
  }
};
function useInteractive({
  instance: instance2,
  showPopper,
  referenceEl,
  trigger,
  popper,
  slots,
  emit,
  destroyPopper,
  openDelay,
  closeDelay,
  reference
}) {
  function doToggle() {
    showPopper.value = !showPopper.value;
  }
  function doShow() {
    showPopper.value = true;
  }
  function doClose() {
    showPopper.value = false;
  }
  function handleFocus() {
    addClass(referenceEl.value, "focusing");
    if (trigger.value === "click" || trigger.value === "focus")
      showPopper.value = true;
  }
  function handleClick() {
    removeClass(referenceEl.value, "focusing");
  }
  function handleBlur() {
    removeClass(referenceEl.value, "focusing");
    if (trigger.value === "click" || trigger.value === "focus")
      showPopper.value = false;
  }
  let _timer = null;
  function handleMouseEnter() {
    clearTimeout(_timer);
    if (openDelay.value) {
      _timer = setTimeout(() => {
        showPopper.value = true;
      }, openDelay.value);
    } else {
      showPopper.value = true;
    }
  }
  function handleKeydown(ev) {
    if (ev.keyCode === 27 && trigger.value !== "manual") {
      doClose();
    }
  }
  function handleMouseLeave() {
    clearTimeout(_timer);
    if (closeDelay.value) {
      _timer = setTimeout(() => {
        showPopper.value = false;
      }, closeDelay.value);
    } else {
      showPopper.value = false;
    }
  }
  function handleDocumentClick(e) {
    let referenceRef = reference && reference.value || instance2.proxy.$refs.reference;
    const popperRef = popper && popper.value || instance2.proxy.$refs.popper;
    const $el = instance2.proxy.$el;
    if (!referenceRef && slots.reference && slots.reference() && slots.reference()[0]) {
      referenceRef = referenceEl = slots.reference()[0].el;
    }
    if ($el && referenceRef && !$el.contains(e.target) && !referenceRef.contains(e.target) && popperRef && !popperRef.contains(e.target))
      return showPopper.value = false;
  }
  function handleAfterEnter() {
    nextTick(() => emit("after-enter"));
  }
  function handleAfterLeave() {
    nextTick(() => {
      emit("after-leave");
      destroyPopper();
    });
  }
  function cleanup() {
    if (openDelay.value || closeDelay.value) {
      clearTimeout(_timer);
    }
  }
  return {
    doToggle,
    doShow,
    doClose,
    handleFocus,
    handleClick,
    handleBlur,
    handleMouseEnter,
    handleKeydown,
    handleMouseLeave,
    handleDocumentClick,
    handleAfterEnter,
    handleAfterLeave,
    cleanup
  };
}
var _hoisted_1$c = {
  ref: "reference"
};
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", null, [createVNode(Transition, {
    name: $props.transition,
    onAfterEnter: $setup.handleAfterEnter,
    onAfterLeave: $setup.handleAfterLeave
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: ["el-popover el-popper", [$props.popperClass, $props.content && "el-popover--plain"]],
      ref: "popper",
      style: {
        width: $props.width + "px"
      },
      role: "tooltip",
      id: $setup.tooltipId,
      "aria-hidden": $props.disabled || !$setup.showPopper ? "true" : "false"
    }, [$props.title ? (openBlock(), createBlock("div", {
      key: 0,
      class: "el-popover__title",
      textContent: toDisplayString($props.title)
    }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString($props.content), 1)])], 14, ["id", "aria-hidden"]), [[vShow, !$props.disabled && $setup.showPopper]])]),
    _: 3
  }, 8, ["name", "onAfterEnter", "onAfterLeave"]), createVNode("span", _hoisted_1$c, [renderSlot(_ctx.$slots, "reference")], 512)]);
}
script$h.render = render$f;
script$h.__file = "packages/popover/Popover.vue";
var getReference = (el, binding, vnode) => {
  const _ref = binding.expression ? binding.value : binding.arg;
  const popper = vnode.context.$refs[_ref];
  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el;
    } else {
      popper.$refs.reference = el;
    }
  }
};
var directive = {
  beforeMount(el, binding, vnode) {
    console.log(el, binding);
    getReference(el, binding, vnode);
  },
  mounted(el, binding, vnode) {
    getReference(el, binding, vnode);
  }
};
script$h.install = function(app) {
  app.directive("popover", directive);
  app.component(script$h.name, script$h);
};
var script$g = {
  name: "ElPopconfirm",
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String,
      default: t("el.popconfirm.confirmButtonText")
    },
    cancelButtonText: {
      type: String,
      default: t("el.popconfirm.cancelButtonText")
    },
    confirmButtonType: {
      type: String,
      default: "primary"
    },
    cancelButtonType: {
      type: String,
      default: "text"
    },
    icon: {
      type: String,
      default: "el-icon-question"
    },
    iconColor: {
      type: String,
      default: "#f90"
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ElPopover: script$h,
    ElButton: script$1u
  },
  emits: ["onConfirm", "onCancel"],
  setup(props2, {
    emit
  }) {
    const state = reactive({
      visible: false
    });
    const confirm = () => {
      state.visible = false;
      emit("onConfirm");
    };
    const cancel = () => {
      state.visible = false;
      emit("onCancel");
    };
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      confirm,
      cancel
    });
  }
};
var _hoisted_1$b = {
  class: "el-popconfirm"
};
var _hoisted_2$7 = {
  class: "el-popconfirm__main"
};
var _hoisted_3$6 = {
  class: "el-popconfirm__action"
};
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_popover = resolveComponent("el-popover");
  return openBlock(), createBlock(_component_el_popover, mergeProps(_ctx.$attrs, {
    modelValue: _ctx.visible,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.visible = $event),
    trigger: "click"
  }), {
    reference: withCtx(() => [renderSlot(_ctx.$slots, "reference")]),
    default: withCtx(() => [createVNode("div", _hoisted_1$b, [createVNode("p", _hoisted_2$7, [!$props.hideIcon ? (openBlock(), createBlock("i", {
      key: 0,
      class: [$props.icon, "el-popconfirm__icon"],
      style: {
        color: $props.iconColor
      }
    }, null, 6)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString($props.title), 1)]), createVNode("div", _hoisted_3$6, [createVNode(_component_el_button, {
      size: "mini",
      type: $props.cancelButtonType,
      onClick: $setup.cancel
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString($props.cancelButtonText), 1)]),
      _: 1
    }, 8, ["type", "onClick"]), createVNode(_component_el_button, {
      size: "mini",
      type: $props.confirmButtonType,
      onClick: $setup.confirm
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString($props.confirmButtonText), 1)]),
      _: 1
    }, 8, ["type", "onClick"])])])]),
    _: 1
  }, 16, ["modelValue"]);
}
script$g.render = render$e;
script$g.__file = "packages/popconfirm/Popconfirm.vue";
script$g.install = function(app) {
  app.component(script$g.name, script$g);
};
var props = {
  header: String,
  bodyStyle: {
    type: Object,
    default: () => {
      return {
        padding: "20px"
      };
    }
  },
  shadow: {
    type: String,
    default: "always",
    validator(val) {
      return ["always", "hover", "never"].includes(val);
    }
  }
};
var script$f = defineComponent({
  name: "ElCard",
  props
});
var _hoisted_1$a = {
  key: 0,
  class: "el-card__header"
};
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["el-card", `is-${_ctx.shadow}-shadow`]
  }, [_ctx.$slots.header || _ctx.header ? (openBlock(), createBlock("div", _hoisted_1$a, [renderSlot(_ctx.$slots, "header", {}, () => [createTextVNode(toDisplayString(_ctx.header), 1)])])) : createCommentVNode("v-if", true), createVNode("div", {
    class: "el-card__body",
    style: _ctx.bodyStyle
  }, [renderSlot(_ctx.$slots, "default")], 4)], 2);
}
script$f.render = render$d;
script$f.__file = "src/components/Card/src/Card.vue";
script$f.install = function(app) {
  app.component(script$f.name, script$f);
};
var script$e = {
  name: "ElCarousel",
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    trigger: {
      type: String,
      default: "hover"
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3e3
    },
    indicatorPosition: String,
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: String,
      default: "hover"
    },
    type: String,
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].indexOf(val) !== -1;
      }
    }
  },
  emits: ["change"],
  setup(props2, {
    emit
  }) {
    const initData = reactive({
      items: [],
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false
    });
    const {
      loop,
      arrowDisplay,
      handleButtonEnter,
      handleButtonLeave,
      throttledArrowClick,
      setActiveItem,
      resetItemPosition
    } = useArrowButton(props2, initData);
    const {
      hasLabel,
      indicatorsClasses,
      throttledIndicatorHover,
      handleIndicatorClick
    } = useIndicator(props2, initData);
    const {
      carouselClasses,
      handleMouseEnter,
      handleMouseLeave,
      startTimer
    } = useInitSlide(props2, initData, loop);
    const updateItems = (ElCarouselItem) => {
      initData.items.push(ElCarouselItem);
    };
    const {
      addResizeListener: addResizeListener2,
      removeResizeListener: removeResizeListener2
    } = useResizeEvent();
    onMounted(() => {
      nextTick(() => {
        addResizeListener2(resetItemPosition);
        if (props2.initialIndex < initData.items.length && props2.initialIndex >= 0) {
          initData.activeIndex = props2.initialIndex;
        }
        startTimer();
      });
    });
    onUnmounted(() => {
      removeResizeListener2(resetItemPosition);
    });
    watch(() => initData.items, (val) => {
      if (val.length > 0)
        setActiveItem(props2.initialIndex);
    });
    watch(() => initData.activeIndex, (val, oldVal) => {
      resetItemPosition(oldVal);
      if (oldVal > -1) {
        emit("change", val, oldVal);
      }
    });
    const prev = () => {
      setActiveItem(initData.activeIndex - 1);
    };
    const next = () => {
      setActiveItem(initData.activeIndex + 1);
    };
    const {
      items,
      activeIndex,
      hover
    } = toRefs(initData);
    const computedDirection = computed(() => {
      return props2.direction;
    });
    const computedType = computed(() => {
      return props2.type;
    });
    const computedItems = computed(() => {
      return initData.items;
    });
    const computedItemLength = computed(() => {
      return initData.items.length;
    });
    const computedLoop = computed(() => {
      return props2.loop;
    });
    provide("direction", computedDirection);
    provide("type", computedType);
    provide("items", computedItems);
    provide("itemLength", computedItemLength);
    provide("loop", computedLoop);
    provide("updateItems", updateItems);
    provide("setActiveItem", setActiveItem);
    return {
      items,
      activeIndex,
      hover,
      arrowDisplay,
      handleButtonEnter,
      handleButtonLeave,
      throttledArrowClick,
      hasLabel,
      indicatorsClasses,
      throttledIndicatorHover,
      handleIndicatorClick,
      carouselClasses,
      handleMouseEnter,
      handleMouseLeave,
      prev,
      next,
      setActiveItem
    };
  }
};
var useArrowButton = (props2, initData) => {
  const loop = ref(props2.loop);
  const itemInStage = (item, index2) => {
    const length = initData.items.length;
    if (index2 === length - 1 && item.proxy.inStage && initData.items[0].active || item.proxy.inStage && initData.items[index2 + 1] && initData.items[index2 + 1].active) {
      return "left";
    } else if (index2 === 0 && item.proxy.inStage && initData.items[length - 1].active || item.proxy.inStage && initData.items[index2 - 1] && initData.items[index2 - 1].active) {
      return "right";
    }
    return false;
  };
  const resetItemPosition = (oldIndex) => {
    initData.items.forEach((item, index2) => {
      item.proxy.translateItem(index2, initData.activeIndex, oldIndex);
    });
  };
  const setActiveItem = (index2) => {
    if (typeof index2 === "string") {
      const filteredItems = initData.items.filter((item) => item.proxy.name === index2);
      if (filteredItems.length > 0) {
        index2 = initData.items.indexOf(filteredItems[0]);
      }
    }
    index2 = Number(index2);
    if (isNaN(index2) || index2 !== Math.floor(index2)) {
      console.warn("[Element Warn][Carousel]index must be an integer.");
      return;
    }
    const length = initData.items.length;
    const oldIndex = initData.activeIndex;
    if (index2 < 0) {
      initData.activeIndex = loop.value ? length - 1 : 0;
    } else if (index2 >= length) {
      initData.activeIndex = loop.value ? 0 : length - 1;
    } else {
      initData.activeIndex = index2;
    }
    if (oldIndex === initData.activeIndex) {
      resetItemPosition(oldIndex);
    }
  };
  const throttledArrowClick = throttle$1(300, true, (index2) => {
    setActiveItem(index2);
  });
  const handleButtonEnter = (arrow) => {
    if (props2.direction === "vertical")
      return;
    initData.items.forEach((item, index2) => {
      if (arrow === itemInStage(item, index2)) {
        item.proxy.hover = true;
      }
    });
  };
  const handleButtonLeave = () => {
    if (props2.direction === "vertical")
      return;
    initData.items.forEach((item) => {
      item.proxy.hover = false;
    });
  };
  const arrowDisplay = computed(() => {
    return props2.arrow !== "never" && props2.direction !== "vertical";
  });
  watch(loop, () => {
    setActiveItem(initData.activeIndex);
  });
  return {
    loop,
    arrowDisplay,
    handleButtonEnter,
    handleButtonLeave,
    throttledArrowClick,
    setActiveItem,
    resetItemPosition
  };
};
var useIndicator = (props2, initData) => {
  const handleIndicatorHover = (index2) => {
    if (props2.trigger === "hover" && index2 !== initData.activeIndex) {
      initData.activeIndex = index2;
    }
  };
  const throttledIndicatorHover = throttle$1(300, (index2) => {
    handleIndicatorHover(index2);
  });
  const handleIndicatorClick = (index2) => {
    initData.activeIndex = index2;
  };
  const hasLabel = computed(() => {
    return initData.items.some((item) => item.proxy.label.toString().length > 0);
  });
  const indicatorsClasses = computed(() => {
    const classes = ["el-carousel__indicators", "el-carousel__indicators--" + props2.direction];
    if (hasLabel.value) {
      classes.push("el-carousel__indicators--labels");
    }
    if (props2.indicatorPosition === "outside" || props2.type === "card") {
      classes.push("el-carousel__indicators--outside");
    }
    return classes;
  });
  return {
    throttledIndicatorHover,
    handleIndicatorClick,
    hasLabel,
    indicatorsClasses
  };
};
var useInitSlide = (props2, initData, loop) => {
  const autoplay = ref(props2.autoplay);
  const playSlides = () => {
    if (initData.activeIndex < initData.items.length - 1) {
      initData.activeIndex++;
    } else if (loop.value) {
      initData.activeIndex = 0;
    }
  };
  const startTimer = () => {
    if (props2.interval <= 0 || !autoplay.value || initData.timer)
      return;
    initData.timer = setInterval(playSlides, props2.interval);
  };
  const pauseTimer = () => {
    if (initData.timer) {
      clearInterval(initData.timer);
      initData.timer = null;
    }
  };
  const handleMouseEnter = () => {
    initData.hover = true;
    pauseTimer();
  };
  const handleMouseLeave = () => {
    initData.hover = false;
    startTimer();
  };
  const carouselClasses = computed(() => {
    const classes = ["el-carousel", "el-carousel--" + props2.direction];
    if (initData.type === "card") {
      classes.push("el-carousel--card");
    }
    return classes;
  });
  watch(autoplay, (val) => {
    val ? startTimer() : pauseTimer();
  });
  return {
    carouselClasses,
    playSlides,
    startTimer,
    handleMouseEnter,
    handleMouseLeave
  };
};
var _hoisted_1$9 = createVNode("i", {
  class: "el-icon-arrow-left"
}, null, -1);
var _hoisted_2$6 = createVNode("i", {
  class: "el-icon-arrow-right"
}, null, -1);
var _hoisted_3$5 = {
  class: "el-carousel__button"
};
var _hoisted_4$4 = {
  key: 0
};
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: $setup.carouselClasses,
    onMouseenter: _cache[7] || (_cache[7] = withModifiers((...args) => $setup.handleMouseEnter && $setup.handleMouseEnter(...args), ["stop"])),
    onMouseleave: _cache[8] || (_cache[8] = withModifiers((...args) => $setup.handleMouseLeave && $setup.handleMouseLeave(...args), ["stop"]))
  }, [createVNode("div", {
    class: "el-carousel__container",
    style: {
      height: $props.height
    }
  }, [$setup.arrowDisplay ? (openBlock(), createBlock(Transition, {
    key: 0,
    name: "carousel-arrow-left"
  }, {
    default: withCtx(() => [withDirectives(createVNode("button", {
      type: "button",
      onMouseenter: _cache[1] || (_cache[1] = ($event) => $setup.handleButtonEnter("left")),
      onMouseleave: _cache[2] || (_cache[2] = (...args) => $setup.handleButtonLeave && $setup.handleButtonLeave(...args)),
      onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.throttledArrowClick($setup.activeIndex - 1), ["stop"])),
      class: "el-carousel__arrow el-carousel__arrow--left"
    }, [_hoisted_1$9], 544), [[vShow, ($props.arrow === "always" || $setup.hover) && ($props.loop || $setup.activeIndex > 0)]])]),
    _: 1
  })) : createCommentVNode("v-if", true), $setup.arrowDisplay ? (openBlock(), createBlock(Transition, {
    key: 1,
    name: "carousel-arrow-right"
  }, {
    default: withCtx(() => [withDirectives(createVNode("button", {
      type: "button",
      onMouseenter: _cache[4] || (_cache[4] = ($event) => $setup.handleButtonEnter("right")),
      onMouseleave: _cache[5] || (_cache[5] = (...args) => $setup.handleButtonLeave && $setup.handleButtonLeave(...args)),
      onClick: _cache[6] || (_cache[6] = withModifiers(($event) => $setup.throttledArrowClick($setup.activeIndex + 1), ["stop"])),
      class: "el-carousel__arrow el-carousel__arrow--right"
    }, [_hoisted_2$6], 544), [[vShow, ($props.arrow === "always" || $setup.hover) && ($props.loop || $setup.activeIndex < $setup.items.length - 1)]])]),
    _: 1
  })) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")], 4), $props.indicatorPosition !== "none" ? (openBlock(), createBlock("ul", {
    key: 0,
    class: $setup.indicatorsClasses
  }, [(openBlock(true), createBlock(Fragment, null, renderList($setup.items, (item, index2) => {
    return openBlock(), createBlock("li", {
      key: index2,
      class: ["el-carousel__indicator", "el-carousel__indicator--" + $props.direction, {
        "is-active": index2 === $setup.activeIndex
      }],
      onMouseenter: ($event) => $setup.throttledIndicatorHover(index2),
      onClick: withModifiers(($event) => $setup.handleIndicatorClick(index2), ["stop"])
    }, [createVNode("button", _hoisted_3$5, [$setup.hasLabel ? (openBlock(), createBlock("span", _hoisted_4$4, toDisplayString(item.proxy.label), 1)) : createCommentVNode("v-if", true)])], 42, ["onMouseenter", "onClick"]);
  }), 128))], 2)) : createCommentVNode("v-if", true)], 34);
}
script$e.render = render$c;
script$e.__file = "packages/carousel/Carousel.vue";
script$e.install = function(app) {
  app.component(script$e.name, script$e);
};
var CARD_SCALE = 0.83;
var script$d = {
  name: "ElCarouselItem",
  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ""
    }
  },
  setup() {
    const parentUpdateItems = inject("updateItems");
    const _this = getCurrentInstance();
    onMounted(() => {
      parentUpdateItems(_this);
    });
    const initData = reactive({
      hover: false,
      translate: 0,
      scale: 1,
      active: false,
      ready: false,
      inStage: false,
      animating: false
    });
    const {
      ready,
      active,
      inStage,
      hover,
      animating
    } = toRefs(initData);
    const parentType = inject("type");
    const {
      parentDirection,
      translateItem
    } = useTranslateItem(_this, initData, parentType);
    const {
      handleItemClick
    } = useCardItemClick(_this, parentType);
    const itemStyle = computed(() => {
      const translateType = parentDirection.value === "vertical" ? "translateY" : "translateX";
      const value = `${translateType}(${initData.translate}px) scale(${initData.scale})`;
      const style = {
        transform: value
      };
      return autoprefixer(style);
    });
    onUnmounted(() => {
      parentUpdateItems();
    });
    return {
      ready,
      active,
      inStage,
      hover,
      animating,
      itemStyle,
      handleItemClick,
      translateItem,
      parentType
    };
  }
};
var useTranslateItem = (_this, initData, parentType) => {
  const parentItemLength = inject("itemLength");
  const parentDirection = inject("direction");
  const parentLoop = inject("loop");
  const processIndex = (index2, activeIndex, length) => {
    if (activeIndex === 0 && index2 === length - 1) {
      return -1;
    } else if (activeIndex === length - 1 && index2 === 0) {
      return length;
    } else if (index2 < activeIndex - 1 && activeIndex - index2 >= length / 2) {
      return length + 1;
    } else if (index2 > activeIndex + 1 && index2 - activeIndex >= length / 2) {
      return -2;
    }
    return index2;
  };
  const calcCardTranslate = (index2, activeIndex) => {
    const parentWidth = _this.parent.vnode.el.offsetWidth;
    if (initData.inStage) {
      return parentWidth * ((2 - CARD_SCALE) * (index2 - activeIndex) + 1) / 4;
    } else if (index2 < activeIndex) {
      return -(1 + CARD_SCALE) * parentWidth / 4;
    } else {
      return (3 + CARD_SCALE) * parentWidth / 4;
    }
  };
  const calcTranslate = (index2, activeIndex, isVertical) => {
    const distance = _this.parent.vnode.el[isVertical ? "offsetHeight" : "offsetWidth"];
    return distance * (index2 - activeIndex);
  };
  const translateItem = (index2, activeIndex, oldIndex) => {
    const length = parentItemLength.value;
    if (parentType.value !== "card" && oldIndex !== void 0) {
      initData.animating = index2 === activeIndex || index2 === oldIndex;
    }
    if (index2 !== activeIndex && length > 2 && parentLoop.value) {
      index2 = processIndex(index2, activeIndex, length);
    }
    if (parentType.value === "card") {
      if (parentDirection.value === "vertical") {
        console.warn("[Element Warn][Carousel]vertical direction is not supported in card mode");
      }
      initData.inStage = Math.round(Math.abs(index2 - activeIndex)) <= 1;
      initData.active = index2 === activeIndex;
      initData.translate = calcCardTranslate(index2, activeIndex);
      initData.scale = initData.active ? 1 : CARD_SCALE;
    } else {
      initData.active = index2 === activeIndex;
      const isVertical = parentDirection.value === "vertical";
      initData.translate = calcTranslate(index2, activeIndex, isVertical);
    }
    initData.ready = true;
  };
  return {
    parentDirection,
    translateItem
  };
};
var useCardItemClick = (_this, parentType) => {
  const parentItems = inject("items");
  const setActiveItem = inject("setActiveItem");
  const handleItemClick = () => {
    if (parentType.value === "card") {
      const index2 = parentItems.value.indexOf(_this);
      setActiveItem(index2);
    }
  };
  return {
    handleItemClick
  };
};
var _hoisted_1$8 = {
  key: 0,
  class: "el-carousel__mask"
};
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock("div", {
    class: ["el-carousel__item", {
      "is-active": $setup.active,
      "el-carousel__item--card": $setup.parentType === "card",
      "is-in-stage": $setup.inStage,
      "is-hover": $setup.hover,
      "is-animating": $setup.animating
    }],
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleItemClick && $setup.handleItemClick(...args)),
    style: $setup.itemStyle
  }, [$setup.parentType === "card" ? withDirectives((openBlock(), createBlock("div", _hoisted_1$8, null, 512)), [[vShow, !$setup.active]]) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "default")], 6)), [[vShow, $setup.ready]]);
}
script$d.render = render$b;
script$d.__file = "packages/carousel-item/CarouselItem.vue";
script$d.install = function(app) {
  app.component(script$d.name, script$d);
};
var script$c = {
  name: "ElCollapse",
  componentName: "ElCollapse",
  props: {
    accordion: Boolean,
    modelValue: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props2, context) {
    const instance2 = getCurrentInstance();
    const state = reactive({
      activeNames: [].concat(props2.modelValue)
    });
    provide("collapse", instance2);
    const {
      on: on2
    } = useEmitter();
    watch(() => props2.modelValue, (value) => {
      state.activeNames = [].concat(value);
    });
    onBeforeMount(() => {
      on2("item-click", handleItemClick);
    });
    function setActiveNames(activeNames) {
      activeNames = [].concat(activeNames);
      const value = props2.accordion ? activeNames[0] : activeNames;
      state.activeNames = activeNames;
      context.emit("update:modelValue", value);
      context.emit("change", value);
    }
    function handleItemClick(item) {
      const {
        name
      } = item;
      if (props2.accordion) {
        setActiveNames((state.activeNames[0] || state.activeNames[0] === 0) && state.activeNames[0] === name ? "" : name);
      } else {
        const activeNames = state.activeNames.slice(0);
        const index2 = activeNames.indexOf(name);
        if (index2 > -1) {
          activeNames.splice(index2, 1);
        } else {
          activeNames.push(name);
        }
        setActiveNames(activeNames);
      }
    }
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      setActiveNames,
      handleItemClick
    });
  }
};
var _hoisted_1$7 = {
  class: "el-collapse",
  role: "tablist",
  "aria-multiselectable": "true"
};
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$7, [renderSlot(_ctx.$slots, "default")]);
}
script$c.render = render$a;
script$c.__file = "packages/collapse/src/collapse.vue";
script$c.install = function(app) {
  app.component(script$c.name, script$c);
};
var script$b = {
  name: "ElCollapseItem",
  componentName: "ElCollapseItem",
  components: {
    ElCollapseTransition
  },
  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return "";
      }
    },
    disabled: Boolean
  },
  setup(props2) {
    const state = reactive({
      contentWrapStyle: {
        height: "auto",
        display: "block"
      },
      contentHeight: 0,
      focusing: false,
      isClick: false,
      id: generateId()
    });
    const instance2 = getCurrentInstance();
    const collapse = inject("collapse");
    const {
      dispatch
    } = useEmitter();
    const isActive = computed(() => {
      const name = props2.name || props2.name === 0 ? props2.name : instance2.uid;
      return collapse.proxy.activeNames.indexOf(name) > -1;
    });
    function handleFocus() {
      setTimeout(() => {
        if (!state.isClick) {
          state.focusing = true;
        } else {
          state.isClick = false;
        }
      }, 50);
    }
    function handleHeaderClick() {
      if (props2.disabled)
        return;
      const name = props2.name || props2.name === 0 ? props2.name : instance2.uid;
      dispatch("item-click", {
        name
      });
      state.focusing = false;
      state.isClick = true;
    }
    function handleEnterClick() {
      const name = props2.name || props2.name === 0 ? props2.name : instance2.uid;
      dispatch("item-click", {
        name
      });
    }
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      isActive,
      handleFocus,
      handleHeaderClick,
      handleEnterClick
    });
  }
};
var _hoisted_1$6 = {
  class: "el-collapse-item__content"
};
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_collapse_transition = resolveComponent("el-collapse-transition");
  return openBlock(), createBlock("div", {
    class: ["el-collapse-item", {
      "is-active": $setup.isActive,
      "is-disabled": $props.disabled
    }]
  }, [createVNode("div", {
    role: "tab",
    "aria-expanded": $setup.isActive,
    "aria-controls": `el-collapse-content-${_ctx.id}`,
    "aria-describedby": `el-collapse-content-${_ctx.id}`
  }, [createVNode("div", {
    class: ["el-collapse-item__header", {
      focusing: _ctx.focusing,
      "is-active": $setup.isActive
    }],
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.handleHeaderClick && $setup.handleHeaderClick(...args)),
    role: "button",
    id: `el-collapse-head-${_ctx.id}`,
    tabindex: $props.disabled ? void 0 : 0,
    onKeyup: _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => $setup.handleEnterClick && $setup.handleEnterClick(...args), ["stop"]), ["space", "enter"])),
    onFocus: _cache[3] || (_cache[3] = (...args) => $setup.handleFocus && $setup.handleFocus(...args)),
    onBlur: _cache[4] || (_cache[4] = ($event) => _ctx.focusing = false)
  }, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString($props.title), 1)]), createVNode("i", {
    class: ["el-collapse-item__arrow el-icon-arrow-right", {
      "is-active": $setup.isActive
    }]
  }, null, 2)], 42, ["id", "tabindex"])], 8, ["aria-expanded", "aria-controls", "aria-describedby"]), createVNode(_component_el_collapse_transition, null, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: "el-collapse-item__wrap",
      role: "tabpanel",
      "aria-hidden": !$setup.isActive,
      "aria-labelledby": `el-collapse-head-${_ctx.id}`,
      id: `el-collapse-content-${_ctx.id}`
    }, [createVNode("div", _hoisted_1$6, [renderSlot(_ctx.$slots, "default")])], 8, ["aria-hidden", "aria-labelledby", "id"]), [[vShow, $setup.isActive]])]),
    _: 3
  })], 2);
}
script$b.render = render$9;
script$b.__file = "packages/collapse/src/collapse-item.vue";
script$b.install = function(app) {
  app.component(script$b.name, script$b);
};
var script$a = {
  name: "ElTimeline",
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      timeline: this
    };
  },
  render() {
    const reverse = this.reverse;
    const classes = {
      "el-timeline": true,
      "is-reverse": reverse
    };
    let slots;
    if (this.$slots.default) {
      slots = this.$slots.default();
      let children;
      if (slots.length > 0 && slots[0].type === Fragment) {
        children = slots[0].children;
      } else {
        children = slots;
      }
      if (reverse) {
        children.reverse();
      }
    }
    return createVNode("ul", {
      "class": classes
    }, [slots]);
  }
};
script$a.__file = "packages/timeline/Timeline.vue";
script$a.install = function(app) {
  app.component(script$a.name, script$a);
};
var script$9 = {
  name: "ElTimelineItem",
  inject: ["timeline"],
  props: {
    timestamp: String,
    hideTimestamp: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "bottom"
    },
    type: String,
    color: String,
    size: {
      type: String,
      default: "normal"
    },
    icon: String
  }
};
var _hoisted_1$5 = {
  class: "el-timeline-item"
};
var _hoisted_2$5 = createVNode("div", {
  class: "el-timeline-item__tail"
}, null, -1);
var _hoisted_3$4 = {
  key: 1,
  class: "el-timeline-item__dot"
};
var _hoisted_4$3 = {
  class: "el-timeline-item__wrapper"
};
var _hoisted_5$2 = {
  key: 0,
  class: "el-timeline-item__timestamp is-top"
};
var _hoisted_6$2 = {
  class: "el-timeline-item__content"
};
var _hoisted_7$1 = {
  key: 1,
  class: "el-timeline-item__timestamp is-bottom"
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("li", _hoisted_1$5, [_hoisted_2$5, !_ctx.$slots.dot ? (openBlock(), createBlock("div", {
    key: 0,
    class: ["el-timeline-item__node", [`el-timeline-item__node--${$props.size || ""}`, `el-timeline-item__node--${$props.type || ""}`]],
    style: {
      backgroundColor: $props.color
    }
  }, [$props.icon ? (openBlock(), createBlock("i", {
    key: 0,
    class: ["el-timeline-item__icon", $props.icon]
  }, null, 2)) : createCommentVNode("v-if", true)], 6)) : createCommentVNode("v-if", true), _ctx.$slots.dot ? (openBlock(), createBlock("div", _hoisted_3$4, [renderSlot(_ctx.$slots, "dot")])) : createCommentVNode("v-if", true), createVNode("div", _hoisted_4$3, [!$props.hideTimestamp && $props.placement === "top" ? (openBlock(), createBlock("div", _hoisted_5$2, toDisplayString($props.timestamp), 1)) : createCommentVNode("v-if", true), createVNode("div", _hoisted_6$2, [renderSlot(_ctx.$slots, "default")]), !$props.hideTimestamp && $props.placement === "bottom" ? (openBlock(), createBlock("div", _hoisted_7$1, toDisplayString($props.timestamp), 1)) : createCommentVNode("v-if", true)])]);
}
script$9.render = render$8;
script$9.__file = "packages/timeline-item/TimelineItem.vue";
script$9.install = function(app) {
  app.component(script$9.name, script$9);
};
var script$8 = {
  name: "ElDivider",
  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].includes(val);
      }
    },
    contentPosition: {
      type: String,
      default: "center",
      validator(val) {
        return ["left", "center", "right"].includes(val);
      }
    }
  }
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", mergeProps(_ctx.$attrs, {
    class: ["el-divider", `el-divider--${$props.direction}`]
  }), [_ctx.$slots.default && $props.direction !== "vertical" ? (openBlock(), createBlock("div", {
    key: 0,
    class: ["el-divider__text", `is-${$props.contentPosition}`]
  }, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("v-if", true)], 16);
}
script$8.render = render$7;
script$8.__file = "src/components/Divider/src/Divider.vue";
script$8.install = function(app) {
  app.component(script$8.name, script$8);
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn) {
  var module = { exports: {} };
  return fn(module, module.exports), module.exports;
}
var date2 = createCommonjsModule(function(module) {
  (function(main) {
    var fecha = {};
    var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
    var twoDigits = "\\d\\d?";
    var threeDigits = "\\d{3}";
    var fourDigits = "\\d{4}";
    var word = "[^\\s]+";
    var literal = /\[([^]*?)\]/gm;
    var noop2 = function() {
    };
    function regexEscape(str) {
      return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
    }
    function shorten(arr, sLen) {
      var newArr = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        newArr.push(arr[i].substr(0, sLen));
      }
      return newArr;
    }
    function monthUpdate(arrName) {
      return function(d, v, i18n) {
        var index2 = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
        if (~index2) {
          d.month = index2;
        }
      };
    }
    function pad(val, len) {
      val = String(val);
      len = len || 2;
      while (val.length < len) {
        val = "0" + val;
      }
      return val;
    }
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthNamesShort = shorten(monthNames, 3);
    var dayNamesShort = shorten(dayNames, 3);
    fecha.i18n = {
      dayNamesShort,
      dayNames,
      monthNamesShort,
      monthNames,
      amPm: ["am", "pm"],
      DoFn: function DoFn(D) {
        return D + ["th", "st", "nd", "rd"][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
      }
    };
    var formatFlags = {
      D: function(dateObj) {
        return dateObj.getDay();
      },
      DD: function(dateObj) {
        return pad(dateObj.getDay());
      },
      Do: function(dateObj, i18n) {
        return i18n.DoFn(dateObj.getDate());
      },
      d: function(dateObj) {
        return dateObj.getDate();
      },
      dd: function(dateObj) {
        return pad(dateObj.getDate());
      },
      ddd: function(dateObj, i18n) {
        return i18n.dayNamesShort[dateObj.getDay()];
      },
      dddd: function(dateObj, i18n) {
        return i18n.dayNames[dateObj.getDay()];
      },
      M: function(dateObj) {
        return dateObj.getMonth() + 1;
      },
      MM: function(dateObj) {
        return pad(dateObj.getMonth() + 1);
      },
      MMM: function(dateObj, i18n) {
        return i18n.monthNamesShort[dateObj.getMonth()];
      },
      MMMM: function(dateObj, i18n) {
        return i18n.monthNames[dateObj.getMonth()];
      },
      yy: function(dateObj) {
        return pad(String(dateObj.getFullYear()), 4).substr(2);
      },
      yyyy: function(dateObj) {
        return pad(dateObj.getFullYear(), 4);
      },
      h: function(dateObj) {
        return dateObj.getHours() % 12 || 12;
      },
      hh: function(dateObj) {
        return pad(dateObj.getHours() % 12 || 12);
      },
      H: function(dateObj) {
        return dateObj.getHours();
      },
      HH: function(dateObj) {
        return pad(dateObj.getHours());
      },
      m: function(dateObj) {
        return dateObj.getMinutes();
      },
      mm: function(dateObj) {
        return pad(dateObj.getMinutes());
      },
      s: function(dateObj) {
        return dateObj.getSeconds();
      },
      ss: function(dateObj) {
        return pad(dateObj.getSeconds());
      },
      S: function(dateObj) {
        return Math.round(dateObj.getMilliseconds() / 100);
      },
      SS: function(dateObj) {
        return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
      },
      SSS: function(dateObj) {
        return pad(dateObj.getMilliseconds(), 3);
      },
      a: function(dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
      },
      A: function(dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
      },
      ZZ: function(dateObj) {
        var o = dateObj.getTimezoneOffset();
        return (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
      }
    };
    var parseFlags = {
      d: [twoDigits, function(d, v) {
        d.day = v;
      }],
      Do: [twoDigits + word, function(d, v) {
        d.day = parseInt(v, 10);
      }],
      M: [twoDigits, function(d, v) {
        d.month = v - 1;
      }],
      yy: [twoDigits, function(d, v) {
        var da = new Date(), cent = +("" + da.getFullYear()).substr(0, 2);
        d.year = "" + (v > 68 ? cent - 1 : cent) + v;
      }],
      h: [twoDigits, function(d, v) {
        d.hour = v;
      }],
      m: [twoDigits, function(d, v) {
        d.minute = v;
      }],
      s: [twoDigits, function(d, v) {
        d.second = v;
      }],
      yyyy: [fourDigits, function(d, v) {
        d.year = v;
      }],
      S: ["\\d", function(d, v) {
        d.millisecond = v * 100;
      }],
      SS: ["\\d{2}", function(d, v) {
        d.millisecond = v * 10;
      }],
      SSS: [threeDigits, function(d, v) {
        d.millisecond = v;
      }],
      D: [twoDigits, noop2],
      ddd: [word, noop2],
      MMM: [word, monthUpdate("monthNamesShort")],
      MMMM: [word, monthUpdate("monthNames")],
      a: [word, function(d, v, i18n) {
        var val = v.toLowerCase();
        if (val === i18n.amPm[0]) {
          d.isPm = false;
        } else if (val === i18n.amPm[1]) {
          d.isPm = true;
        }
      }],
      ZZ: ["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z", function(d, v) {
        var parts = (v + "").match(/([+-]|\d\d)/gi), minutes;
        if (parts) {
          minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
          d.timezoneOffset = parts[0] === "+" ? minutes : -minutes;
        }
      }]
    };
    parseFlags.dd = parseFlags.d;
    parseFlags.dddd = parseFlags.ddd;
    parseFlags.DD = parseFlags.D;
    parseFlags.mm = parseFlags.m;
    parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
    parseFlags.MM = parseFlags.M;
    parseFlags.ss = parseFlags.s;
    parseFlags.A = parseFlags.a;
    fecha.masks = {
      default: "ddd MMM dd yyyy HH:mm:ss",
      shortDate: "M/D/yy",
      mediumDate: "MMM d, yyyy",
      longDate: "MMMM d, yyyy",
      fullDate: "dddd, MMMM d, yyyy",
      shortTime: "HH:mm",
      mediumTime: "HH:mm:ss",
      longTime: "HH:mm:ss.SSS"
    };
    fecha.format = function(dateObj, mask, i18nSettings) {
      var i18n = i18nSettings || fecha.i18n;
      if (typeof dateObj === "number") {
        dateObj = new Date(dateObj);
      }
      if (Object.prototype.toString.call(dateObj) !== "[object Date]" || isNaN(dateObj.getTime())) {
        throw new Error("Invalid Date in fecha.format");
      }
      mask = fecha.masks[mask] || mask || fecha.masks["default"];
      var literals = [];
      mask = mask.replace(literal, function($0, $1) {
        literals.push($1);
        return "@@@";
      });
      mask = mask.replace(token, function($0) {
        return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
      });
      return mask.replace(/@@@/g, function() {
        return literals.shift();
      });
    };
    fecha.parse = function(dateStr, format2, i18nSettings) {
      var i18n = i18nSettings || fecha.i18n;
      if (typeof format2 !== "string") {
        throw new Error("Invalid format in fecha.parse");
      }
      format2 = fecha.masks[format2] || format2;
      if (dateStr.length > 1e3) {
        return null;
      }
      var dateInfo = {};
      var parseInfo = [];
      var literals = [];
      format2 = format2.replace(literal, function($0, $1) {
        literals.push($1);
        return "@@@";
      });
      var newFormat = regexEscape(format2).replace(token, function($0) {
        if (parseFlags[$0]) {
          var info = parseFlags[$0];
          parseInfo.push(info[1]);
          return "(" + info[0] + ")";
        }
        return $0;
      });
      newFormat = newFormat.replace(/@@@/g, function() {
        return literals.shift();
      });
      var matches = dateStr.match(new RegExp(newFormat, "i"));
      if (!matches) {
        return null;
      }
      for (var i = 1; i < matches.length; i++) {
        parseInfo[i - 1](dateInfo, matches[i], i18n);
      }
      var today = new Date();
      if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
        dateInfo.hour = +dateInfo.hour + 12;
      } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
        dateInfo.hour = 0;
      }
      var date3;
      if (dateInfo.timezoneOffset != null) {
        dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
        date3 = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
      } else {
        date3 = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
      }
      return date3;
    };
    if (module.exports) {
      module.exports = fecha;
    } else {
      main.fecha = fecha;
    }
  })(commonjsGlobal);
});
var weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
var getI18nSettings = () => {
  return {
    dayNamesShort: weeks.map((week) => t(`el.datepicker.weeks.${week}`)),
    dayNames: weeks.map((week) => t(`el.datepicker.weeks.${week}`)),
    monthNamesShort: months.map((month) => t(`el.datepicker.months.${month}`)),
    monthNames: months.map((month, index2) => t(`el.datepicker.month${index2 + 1}`)),
    amPm: ["am", "pm"]
  };
};
var getFirstDayOfMonth = function(date3) {
  const temp = new Date(date3.getTime());
  temp.setDate(1);
  return temp.getDay();
};
var getPrevMonthLastDays = (date3, amount) => {
  if (amount <= 0)
    return [];
  const temp = new Date(date3.getTime());
  temp.setDate(0);
  const lastDay = temp.getDate();
  return range(amount).map((_, index2) => lastDay - (amount - index2 - 1));
};
var getMonthDays = (date3) => {
  const temp = new Date(date3.getFullYear(), date3.getMonth() + 1, 0);
  const days = temp.getDate();
  return range(days).map((_, index2) => index2 + 1);
};
var range = function(n) {
  return Array.apply(null, {
    length: n
  }).map((_, n2) => n2);
};
var validateRangeInOneMonth = function(start, end) {
  return start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
};
var script$7 = {
  props: {
    selectedDay: String,
    range: {
      type: Array,
      validator(val) {
        if (!(val && val.length))
          return true;
        const [start, end] = val;
        return validateRangeInOneMonth(start, end);
      }
    },
    date: Date,
    hideHeader: Boolean,
    firstDayOfWeek: Number
  },
  setup(props2, {
    emit
  }) {
    const {
      selectedDay,
      date: date$12,
      hideHeader,
      firstDayOfWeek
    } = toRefs(props2);
    const WEEK_DAYS = ref(getI18nSettings().dayNames);
    const elCalendar = inject("elCalendar");
    const toNestedArr = (days) => {
      return range(days.length / 7).map((_, index2) => {
        const start = index2 * 7;
        return days.slice(start, start + 7);
      });
    };
    const getFormateDate = (day, type2) => {
      if (!day || ["prev", "current", "next"].indexOf(type2) === -1) {
        throw new Error("invalid day or type");
      }
      let prefix = curMonthDatePrefix.value;
      if (type2 === "prev") {
        prefix = prevMonthDatePrefix.value;
      } else if (type2 === "next") {
        prefix = nextMonthDatePrefix.value;
      }
      day = `00${day}`.slice(-2);
      return `${prefix}-${day}`;
    };
    const getCellClass = ({
      text,
      type: type2
    }) => {
      const classes = [type2];
      if (type2 === "current") {
        const date3 = getFormateDate(text, type2);
        if (date3 === selectedDay.value) {
          classes.push("is-selected");
        }
        if (date3 === formatedToday.value) {
          classes.push("is-today");
        }
      }
      return classes;
    };
    const pickDay = ({
      text,
      type: type2
    }) => {
      const date3 = getFormateDate(text, type2);
      emit("pick", date3);
    };
    const cellRenderProxy = ({
      text,
      type: type2
    }) => {
      const render3 = elCalendar.slots.default;
      if (!render3)
        return createVNode("span", null, [text]);
      const day = getFormateDate(text, type2);
      const date3 = new Date(day);
      const data = {
        isSelected: selectedDay.value === day,
        type: `${type2}-month`,
        day
      };
      return render3({
        date: date3,
        data
      });
    };
    const prevMonthDatePrefix = computed(() => {
      const temp = new Date(date$12.value.getTime());
      temp.setDate(0);
      return date2.format(temp, "yyyy-MM");
    });
    const curMonthDatePrefix = computed(() => {
      return date2.format(date$12.value, "yyyy-MM");
    });
    const nextMonthDatePrefix = computed(() => {
      const temp = new Date(date$12.value.getFullYear(), date$12.value.getMonth() + 1, 1);
      return date2.format(temp, "yyyy-MM");
    });
    const formatedToday = computed(() => {
      return elCalendar.formatedToday;
    });
    const isInRange = computed(() => {
      return props2.range && props2.range.length;
    });
    const rows = computed(() => {
      let days = [];
      if (isInRange.value) {
        const [start, end] = props2.range;
        const currentMonthRange = range(end.getDate() - start.getDate() + 1).map((_, index2) => ({
          text: start.getDate() + index2,
          type: "current"
        }));
        let remaining = currentMonthRange.length % 7;
        remaining = remaining === 0 ? 0 : 7 - remaining;
        const nextMonthRange = range(remaining).map((_, index2) => ({
          text: index2 + 1,
          type: "next"
        }));
        days = currentMonthRange.concat(nextMonthRange);
      } else {
        let firstDay = getFirstDayOfMonth(date$12.value);
        firstDay = firstDay === 0 ? 7 : firstDay;
        const _firstDayOfWeek = typeof firstDayOfWeek.value === "number" ? firstDayOfWeek.value : 1;
        const prevMonthDays = getPrevMonthLastDays(date$12.value, firstDay - _firstDayOfWeek).map((day) => ({
          text: day,
          type: "prev"
        }));
        const currentMonthDays = getMonthDays(date$12.value).map((day) => ({
          text: day,
          type: "current"
        }));
        days = [...prevMonthDays, ...currentMonthDays];
        const nextMonthDays = range(42 - days.length).map((_, index2) => ({
          text: index2 + 1,
          type: "next"
        }));
        days = days.concat(nextMonthDays);
      }
      return toNestedArr(days);
    });
    const weekDays2 = computed(() => {
      const start = firstDayOfWeek.value;
      if (typeof start !== "number" || start === 0) {
        return WEEK_DAYS.value.slice();
      } else {
        return WEEK_DAYS.value.slice(start).concat(WEEK_DAYS.value.slice(0, start));
      }
    });
    return () => {
      const instance2 = getCurrentInstance();
      const thead = hideHeader.value ? null : createVNode("thead", null, [weekDays2.value.map((day) => createVNode("th", {
        "key": day
      }, [day]))]);
      return createVNode("table", {
        "class": {
          "el-calendar-table": true,
          "is-range": isInRange.value
        },
        "cellspacing": "0",
        "cellpadding": "0"
      }, [thead, createVNode("tbody", null, [rows.value.map((row, index2) => createVNode("tr", {
        "class": {
          "el-calendar-table__row": true,
          "el-calendar-table__row--hide-border": index2 === 0 && hideHeader.value
        },
        "key": index2
      }, [row.map((cell, key) => createVNode("td", {
        "key": key,
        "class": getCellClass(cell),
        "onClick": pickDay.bind(instance2, cell)
      }, [createVNode("div", {
        "class": "el-calendar-day"
      }, [cellRenderProxy(cell)])]))]))])]);
    };
  }
};
script$7.__file = "packages/calendar/DateTable.vue";
var validTypes = ["prev-month", "today", "next-month"];
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var oneDay = 864e5;
var script$6 = {
  name: "ElCalendar",
  components: {
    DateTable: script$7,
    ElButton: script$1u,
    ElButtonGroup: script$1t
  },
  props: {
    modelValue: [Date, String, Number],
    range: {
      type: Array,
      validator(range2) {
        if (Array.isArray(range2)) {
          return range2.length === 2 && range2.every((item) => typeof item === "string" || typeof item === "number" || item instanceof Date);
        } else {
          return true;
        }
      }
    },
    firstDayOfWeek: {
      type: Number,
      default: 1
    }
  },
  emits: ["input", "update:modelValue"],
  setup(props2, {
    emit
  }) {
    const instance2 = getCurrentInstance();
    provide("elCalendar", instance2);
    const state = reactive({
      selectedDay: "",
      now: new Date()
    });
    const t2 = useLocale();
    const prevMonthDatePrefix = computed(() => {
      const temp = new Date(date$12.value.getTime());
      temp.setDate(0);
      return date2.format(temp, "yyyy-MM");
    });
    const curMonthDatePrefix = computed(() => {
      return date2.format(date$12.value, "yyyy-MM");
    });
    const nextMonthDatePrefix = computed(() => {
      const temp = new Date(date$12.value.getFullYear(), date$12.value.getMonth() + 1, 1);
      return date2.format(temp, "yyyy-MM");
    });
    const formatedDate = computed(() => {
      return date2.format(date$12.value, "yyyy-MM-dd");
    });
    const i18nDate = computed(() => {
      const year = date$12.value.getFullYear();
      const month = date$12.value.getMonth() + 1;
      const pickedMonth = "el.datepicker.month" + month;
      return `${year} ${t2("el.datepicker.year")} ${t2(pickedMonth)}`;
    });
    const formatedToday = computed(() => {
      return date2.format(state.now, "yyyy-MM-dd");
    });
    const realSelectedDay = computed({
      get() {
        if (!props2.modelValue)
          return state.selectedDay;
        return formatedDate.value;
      },
      set(val) {
        state.selectedDay = val;
        const date3 = new Date(val);
        emit("input", date3);
        emit("update:modelValue", date3);
      }
    });
    const date$12 = computed(() => {
      if (!props2.modelValue) {
        if (realSelectedDay.value) {
          const d = state.selectedDay.split("-");
          return new Date(d[0], d[1] - 1, d[2]);
        } else if (validatedRange.value.length) {
          return validatedRange.value[0][0];
        }
        return state.now;
      } else {
        return toDate(props2.modelValue);
      }
    });
    const validatedRange = computed(() => {
      let range2 = props2.range;
      if (!range2)
        return [];
      range2 = props2.range && range2.reduce((prev, val, index2) => {
        const date3 = toDate(val);
        if (rangeValidator(date3, index2 === 0)) {
          prev = prev.concat(date3);
        }
        return prev;
      }, []);
      if (range2.length === 2) {
        const [start, end] = range2;
        if (start > end) {
          console.warn("[ElementCalendar]end time should be greater than start time");
          return [];
        }
        if (validateRangeInOneMonth(start, end)) {
          return [[start, end]];
        }
        const data = [];
        let startDay = new Date(start.getFullYear(), start.getMonth() + 1, 1);
        const lastDay = toDate(startDay.getTime() - oneDay);
        if (!validateRangeInOneMonth(startDay, end)) {
          console.warn("[ElementCalendar]start time and end time interval must not exceed two months");
          return [];
        }
        data.push([start, lastDay]);
        const firstDayOfWeek = realFirstDayOfWeek.value;
        const nextMontFirstDay = startDay.getDay();
        let interval = 0;
        if (nextMontFirstDay !== firstDayOfWeek) {
          if (firstDayOfWeek === 0) {
            interval = 7 - nextMontFirstDay;
          } else {
            interval = firstDayOfWeek - nextMontFirstDay;
            interval = interval > 0 ? interval : 7 + interval;
          }
        }
        startDay = toDate(startDay.getTime() + interval * oneDay);
        if (startDay.getDate() < end.getDate()) {
          data.push([startDay, end]);
        }
        return data;
      }
      return [];
    });
    const realFirstDayOfWeek = computed(() => {
      if (props2.firstDayOfWeek < 1 || props2.firstDayOfWeek > 6) {
        return 0;
      }
      return Math.floor(props2.firstDayOfWeek);
    });
    const pickDay = (day) => {
      realSelectedDay.value = day;
    };
    const selectDate = (type2) => {
      if (validTypes.indexOf(type2) === -1) {
        throw new Error(`invalid type ${type2}`);
      }
      let day = "";
      if (type2 === "prev-month") {
        day = `${prevMonthDatePrefix.value}-01`;
      } else if (type2 === "next-month") {
        day = `${nextMonthDatePrefix.value}-01`;
      } else {
        day = formatedToday.value;
      }
      if (day === formatedDate.value)
        return;
      pickDay(day);
    };
    const toDate = (val) => {
      if (!val) {
        throw new Error("invalid val");
      }
      return val instanceof Date ? val : new Date(val);
    };
    const rangeValidator = (date3, isStart) => {
      const firstDayOfWeek = realFirstDayOfWeek.value;
      const expected = isStart ? firstDayOfWeek : firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
      const message = `${isStart ? "start" : "end"} of range should be ${weekDays[expected]}.`;
      if (date3.getDay() !== expected) {
        console.warn("[ElementCalendar]", message, "Invalid range will be ignored.");
        return false;
      }
      return true;
    };
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      prevMonthDatePrefix,
      curMonthDatePrefix,
      nextMonthDatePrefix,
      formatedDate,
      i18nDate,
      formatedToday,
      realSelectedDay,
      date: date$12,
      validatedRange,
      realFirstDayOfWeek,
      pickDay,
      selectDate,
      toDate,
      t: t2,
      rangeValidator
    });
  }
};
var _hoisted_1$4 = {
  class: "el-calendar"
};
var _hoisted_2$4 = {
  class: "el-calendar__header"
};
var _hoisted_3$3 = {
  class: "el-calendar__title"
};
var _hoisted_4$2 = {
  key: 0,
  class: "el-calendar__button-group"
};
var _hoisted_5$1 = {
  key: 0,
  class: "el-calendar__body"
};
var _hoisted_6$1 = {
  key: 1,
  class: "el-calendar__body"
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_button_group = resolveComponent("el-button-group");
  const _component_date_table = resolveComponent("date-table");
  return openBlock(), createBlock("div", _hoisted_1$4, [createVNode("div", _hoisted_2$4, [createVNode("div", _hoisted_3$3, toDisplayString($setup.i18nDate), 1), $setup.validatedRange.length === 0 ? (openBlock(), createBlock("div", _hoisted_4$2, [createVNode(_component_el_button_group, null, {
    default: withCtx(() => [createVNode(_component_el_button, {
      type: "plain",
      size: "mini",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.selectDate("prev-month"))
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString($setup.t("el.datepicker.prevMonth")), 1)]),
      _: 1
    }), createVNode(_component_el_button, {
      type: "plain",
      size: "mini",
      onClick: _cache[2] || (_cache[2] = ($event) => $setup.selectDate("today"))
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString($setup.t("el.datepicker.today")), 1)]),
      _: 1
    }), createVNode(_component_el_button, {
      type: "plain",
      size: "mini",
      onClick: _cache[3] || (_cache[3] = ($event) => $setup.selectDate("next-month"))
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString($setup.t("el.datepicker.nextMonth")), 1)]),
      _: 1
    })]),
    _: 1
  })])) : createCommentVNode("v-if", true)]), $setup.validatedRange.length === 0 ? (openBlock(), createBlock("div", _hoisted_5$1, [createVNode(_component_date_table, {
    date: $setup.date,
    "selected-day": $setup.realSelectedDay,
    "first-day-of-week": $setup.realFirstDayOfWeek,
    onPick: $setup.pickDay
  }, null, 8, ["date", "selected-day", "first-day-of-week", "onPick"])])) : (openBlock(), createBlock("div", _hoisted_6$1, [(openBlock(true), createBlock(Fragment, null, renderList($setup.validatedRange, (range2, index2) => {
    return openBlock(), createBlock(_component_date_table, {
      key: index2,
      date: range2[0],
      "selected-day": $setup.realSelectedDay,
      range: range2,
      "hide-header": index2 !== 0,
      "first-day-of-week": $setup.realFirstDayOfWeek,
      onPick: $setup.pickDay
    }, null, 8, ["date", "selected-day", "range", "hide-header", "first-day-of-week", "onPick"]);
  }), 128))]))]);
}
script$6.render = render$6;
script$6.__file = "packages/calendar/Calendar.vue";
script$6.install = function(app) {
  app.component(script$6.name, script$6);
};
var Mode = {
  CONTAIN: {
    name: "contain",
    icon: "el-icon-full-screen"
  },
  ORIGINAL: {
    name: "original",
    icon: "el-icon-c-scale-to-original"
  }
};
var mousewheelEventName = isFirefox() ? "DOMMouseScroll" : "mousewheel";
var script$5 = {
  name: "elImageViewer",
  props: {
    urlList: {
      type: Array,
      default: () => []
    },
    zIndex: {
      type: Number,
      default: 2e3
    },
    onSwitch: {
      type: Function,
      default: () => {
      }
    },
    onClose: {
      type: Function,
      default: () => {
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  setup(props2) {
    const img = ref(null);
    const imageWrapper = ref(null);
    const state = reactive({
      mode: Mode.CONTAIN,
      transform: {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      }
    });
    const index2 = ref(props2.initialIndex);
    let loading = ref(false);
    const infinite = ref(true);
    const isShow = ref(true);
    const isSingle = computed(() => props2.urlList.length <= 1);
    const isFirst = computed(() => props2.index === 0);
    const isLast = computed(() => props2.index === props2.urlList.length - 1);
    const currentImg = computed(() => props2.urlList[index2.value]);
    const imgStyle = computed(() => {
      const {
        scale,
        deg,
        offsetX,
        offsetY,
        enableTransition
      } = state.transform;
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg)`,
        transition: enableTransition ? "transform .3s" : "",
        "margin-left": `${offsetX}px`,
        "margin-top": `${offsetY}px`
      };
      if (state.mode.name === Mode.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    onMounted(() => {
      deviceSupportInstall();
      imageWrapper.value.focus();
    });
    watch(index2, (val) => {
      reset();
      props2.onSwitch(val);
    });
    watch(currentImg, () => {
      nextTick(() => {
        if (img.value.complete) {
          loading = true;
        }
      });
    });
    const handleActions = (action, options = {}) => {
      if (loading.value)
        return;
      const {
        zoomRate,
        rotateDeg,
        enableTransition
      } = __spreadValues({
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true
      }, options);
      switch (action) {
        case "zoomOut":
          if (state.transform.scale > 0.2) {
            state.transform.scale = parseFloat((state.transform.scale - zoomRate).toFixed(3));
          }
          break;
        case "zoomIn":
          state.transform.scale = parseFloat((state.transform.scale + zoomRate).toFixed(3));
          break;
        case "clocelise":
          state.transform.deg += rotateDeg;
          break;
        case "anticlocelise":
          state.transform.deg -= rotateDeg;
          break;
      }
      state.transform.enableTransition = enableTransition;
    };
    const reset = () => {
      state.transform = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    };
    const toggleMode = () => {
      if (loading.value)
        return;
      const modeNames = Object.keys(Mode);
      const modeValues = Object.values(Mode);
      const index3 = modeValues.findIndex((index4) => index4.name === state.mode.name);
      const nextIndex = (index3 + 1) % modeNames.length;
      state.mode = Mode[modeNames[nextIndex]];
      reset();
    };
    const prev = () => {
      if (isFirst.value && !infinite.value)
        return;
      const len = props2.urlList.length;
      index2.value = (index2.value - 1 + len) % len;
    };
    const next = () => {
      if (isLast.value && !infinite.value)
        return;
      const len = props2.urlList.length;
      index2.value = (index2.value + 1) % len;
    };
    let keyDownHandler = rafThrottle((e) => {
      const keyCode = e.keyCode;
      switch (keyCode) {
        case 27:
          hide();
          break;
        case 32:
          toggleMode();
          break;
        case 37:
          prev();
          break;
        case 38:
          handleActions("zoomIn");
          break;
        case 39:
          next();
          break;
        case 40:
          handleActions("zoomOut");
          break;
      }
    });
    let mouseWheelHandler = rafThrottle((e) => {
      const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
      if (delta > 0) {
        handleActions("zoomIn", {
          zoomRate: 0.015,
          enableTransition: false
        });
      } else {
        handleActions("zoomOut", {
          zoomRate: 0.015,
          enableTransition: false
        });
      }
    });
    const deviceSupportInstall = () => {
      on(document, "keydown", keyDownHandler);
      on(document, mousewheelEventName, mouseWheelHandler);
    };
    const deviceSupportUninstall = () => {
      off(document, "keydown", keyDownHandler);
      off(document, mousewheelEventName, mouseWheelHandler);
      keyDownHandler = null;
      mouseWheelHandler = null;
    };
    const hide = () => {
      deviceSupportUninstall();
      props2.onClose();
    };
    const handleImgLoad = () => {
      loading = false;
    };
    const handleImgError = (e) => {
      loading = false;
      e.target.alt = "\u52A0\u8F7D\u5931\u8D25";
    };
    const handleMouseDown = (e) => {
      if (loading || e.button !== 0)
        return;
      const {
        offsetX,
        offsetY
      } = state.transform;
      const startX = e.pageX;
      const startY = e.pageY;
      const _dragHandler = rafThrottle((ev) => {
        state.transform.offsetX = offsetX + ev.pageX - startX;
        state.transform.offsetY = offsetY + ev.pageY - startY;
      });
      on(document, "mousemove", _dragHandler);
      on(document, "mouseup", () => {
        off(document, "mousemove", _dragHandler);
      });
      e.preventDefault();
    };
    return {
      img,
      imageWrapper,
      loading,
      isShow,
      state,
      infinite,
      index: index2,
      isSingle,
      isFirst,
      isLast,
      currentImg,
      imgStyle,
      reset,
      next,
      prev,
      toggleMode,
      handleActions,
      hide,
      keyDownHandler,
      mouseWheelHandler,
      deviceSupportInstall,
      deviceSupportUninstall,
      handleImgLoad,
      handleImgError,
      handleMouseDown
    };
  }
};
var _hoisted_1$3 = createVNode("div", {
  class: "el-image-viewer__mask"
}, null, -1);
var _hoisted_2$3 = createVNode("i", {
  class: "el-icon-circle-close"
}, null, -1);
var _hoisted_3$2 = createVNode("i", {
  class: "el-icon-arrow-left"
}, null, -1);
var _hoisted_4$1 = createVNode("i", {
  class: "el-icon-arrow-right"
}, null, -1);
var _hoisted_5 = {
  class: "el-image-viewer__btn el-image-viewer__actions"
};
var _hoisted_6 = {
  class: "el-image-viewer__actions__inner"
};
var _hoisted_7 = createVNode("i", {
  class: "el-image-viewer__actions__divider"
}, null, -1);
var _hoisted_8 = createVNode("i", {
  class: "el-image-viewer__actions__divider"
}, null, -1);
var _hoisted_9 = {
  class: "el-image-viewer__canvas"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "viewer-fade"
  }, {
    default: withCtx(() => [createVNode("div", {
      tabindex: "-1",
      ref: "imageWrapper",
      class: "el-image-viewer__wrapper",
      style: {
        "z-index": $props.zIndex
      }
    }, [_hoisted_1$3, createCommentVNode(" CLOSE "), createVNode("span", {
      class: "el-image-viewer__btn el-image-viewer__close",
      onClick: _cache[1] || (_cache[1] = (...args) => $setup.hide && $setup.hide(...args))
    }, [_hoisted_2$3]), createCommentVNode(" ARROW "), !$setup.isSingle ? (openBlock(), createBlock(Fragment, {
      key: 0
    }, [createVNode("span", {
      class: ["el-image-viewer__btn el-image-viewer__prev", {
        "is-disabled": !$setup.infinite && $setup.isFirst
      }],
      onClick: _cache[2] || (_cache[2] = (...args) => $setup.prev && $setup.prev(...args))
    }, [_hoisted_3$2], 2), createVNode("span", {
      class: ["el-image-viewer__btn el-image-viewer__next", {
        "is-disabled": !$setup.infinite && $setup.isLast
      }],
      onClick: _cache[3] || (_cache[3] = (...args) => $setup.next && $setup.next(...args))
    }, [_hoisted_4$1], 2)], 64)) : createCommentVNode("v-if", true), createCommentVNode(" ACTIONS "), createVNode("div", _hoisted_5, [createVNode("div", _hoisted_6, [createVNode("i", {
      class: "el-icon-zoom-out",
      onClick: _cache[4] || (_cache[4] = ($event) => $setup.handleActions("zoomOut"))
    }), createVNode("i", {
      class: "el-icon-zoom-in",
      onClick: _cache[5] || (_cache[5] = ($event) => $setup.handleActions("zoomIn"))
    }), _hoisted_7, createVNode("i", {
      class: $setup.state.mode.icon,
      onClick: _cache[6] || (_cache[6] = (...args) => $setup.toggleMode && $setup.toggleMode(...args))
    }, null, 2), _hoisted_8, createVNode("i", {
      class: "el-icon-refresh-left",
      onClick: _cache[7] || (_cache[7] = ($event) => $setup.handleActions("anticlocelise"))
    }), createVNode("i", {
      class: "el-icon-refresh-right",
      onClick: _cache[8] || (_cache[8] = ($event) => $setup.handleActions("clocelise"))
    })])]), createCommentVNode(" CANVAS "), createVNode("div", _hoisted_9, [createVNode("img", {
      ref: "img",
      class: "el-image-viewer__img",
      src: $setup.currentImg,
      style: $setup.imgStyle,
      onLoad: _cache[9] || (_cache[9] = (...args) => $setup.handleImgLoad && $setup.handleImgLoad(...args)),
      onError: _cache[10] || (_cache[10] = (...args) => $setup.handleImgError && $setup.handleImgError(...args)),
      onMousedown: _cache[11] || (_cache[11] = (...args) => $setup.handleMouseDown && $setup.handleMouseDown(...args))
    }, null, 44, ["src"])])], 4)]),
    _: 1
  });
}
script$5.render = render$5;
script$5.__file = "packages/image/ImageViewer.vue";
var isSupportObjectFit = () => document.documentElement.style.objectFit !== void 0;
var ObjectFit = {
  NONE: "none",
  CONTAIN: "contain",
  COVER: "cover",
  FILL: "fill",
  SCALE_DOWN: "scale-down"
};
var prevOverflow = "";
var script$4 = {
  name: "ElImage",
  inheritAttrs: false,
  components: {
    ImageViewer: script$5
  },
  props: {
    src: String,
    fit: String,
    lazy: Boolean,
    scrollContainer: {},
    previewSrcList: {
      type: Array,
      default: () => []
    },
    zIndex: {
      type: Number,
      default: 2e3
    }
  },
  emits: ["error"],
  setup(props2, ctx2) {
    const instance2 = getCurrentInstance();
    const loading = ref(true);
    const error = ref(false);
    const show = ref(!props2.lazy);
    const showViewer = ref(false);
    const imageWidth = ref(0);
    const imageHeight = ref(0);
    const imageStyle = computed(() => {
      const {
        fit
      } = props2;
      if (fit) {
        return isSupportObjectFit() ? {
          "object-fit": fit
        } : getImageStyle(fit);
      }
      return {};
    });
    const alignCenter = computed(() => {
      return !isSupportObjectFit() && props2.fit !== ObjectFit.FILL;
    });
    const preview = computed(() => {
      const {
        previewSrcList
      } = props2;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = computed(() => {
      let previewIndex = 0;
      const srcIndex = props2.previewSrcList.indexOf(props2.src);
      if (srcIndex >= 0) {
        previewIndex = srcIndex;
      }
      return previewIndex;
    });
    watch(() => props2.src, () => {
      show.value && loadImage();
    });
    watch(show, (val) => {
      val && loadImage();
    });
    onMounted(() => {
      if (props2.lazy) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    onBeforeUnmount(() => {
      props2.lazy && removeLazyLoadListener();
    });
    const loadImage = () => {
      loading.value = true;
      error.value = false;
      const img = new Image();
      img.onload = (e) => handleLoad(e, img);
      img.onerror = handleError.bind(this);
      Object.keys(instance2.proxy.$attrs).forEach((key) => {
        const value = instance2.proxy.$attrs[key];
        img.setAttribute(key, value);
      });
      img.src = props2.src;
    };
    const handleLoad = (e, img) => {
      imageWidth.value = img.width;
      imageHeight.value = img.height;
      loading.value = false;
      error.value = false;
    };
    const handleError = (e) => {
      loading.value = false;
      error.value = true;
      ctx2.emit("error", e);
    };
    const handleLazyLoad = () => {
      if (isInContainer(instance2.proxy.$el, instance2.proxy._scrollContainer)) {
        show.value = true;
        removeLazyLoadListener();
      }
    };
    const addLazyLoadListener = () => {
      const {
        scrollContainer
      } = props2;
      let _scrollContainer = null;
      if (isHtmlElement(scrollContainer)) {
        _scrollContainer = scrollContainer;
      } else if (isString(scrollContainer)) {
        _scrollContainer = document.querySelector(scrollContainer);
      } else {
        _scrollContainer = getScrollContainer(instance2.proxy.$el);
      }
      if (_scrollContainer) {
        instance2.proxy._scrollContainer = _scrollContainer;
        instance2.proxy._lazyLoadHandler = throttle$1(200, handleLazyLoad);
        on(_scrollContainer, "scroll", instance2.proxy._lazyLoadHandler);
        handleLazyLoad();
      }
    };
    const removeLazyLoadListener = () => {
      const {
        _scrollContainer,
        _lazyLoadHandler
      } = instance2.proxy;
      if (!_scrollContainer || !_lazyLoadHandler)
        return;
      off(_scrollContainer, "scroll", _lazyLoadHandler);
      instance2.proxy._scrollContainer = null;
      instance2.proxy._lazyLoadHandler = null;
    };
    const getImageStyle = (fit) => {
      const {
        clientWidth: containerWidth,
        clientHeight: containerHeight
      } = instance2.proxy.$el;
      if (!imageWidth.value || !imageHeight.value || !containerWidth || !containerHeight)
        return {};
      const vertical = imageWidth.value / imageHeight.value < 1;
      if (fit === ObjectFit.SCALE_DOWN) {
        const isSmaller = imageWidth.value < containerWidth && imageHeight.value < containerHeight;
        fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN;
      }
      switch (fit) {
        case ObjectFit.NONE:
          return {
            width: "auto",
            height: "auto"
          };
        case ObjectFit.CONTAIN:
          return vertical ? {
            width: "auto"
          } : {
            height: "auto"
          };
        case ObjectFit.COVER:
          return vertical ? {
            height: "auto"
          } : {
            width: "auto"
          };
        default:
          return {};
      }
    };
    const clickHandler = () => {
      if (!preview.value) {
        return;
      }
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      showViewer.value = true;
    };
    const closeViewer = () => {
      document.body.style.overflow = prevOverflow;
      showViewer.value = false;
    };
    return {
      loading,
      error,
      show,
      showViewer,
      imageWidth,
      imageHeight,
      imageStyle,
      alignCenter,
      preview,
      imageIndex,
      loadImage,
      handleLoad,
      handleError,
      handleLazyLoad,
      getImageStyle,
      addLazyLoadListener,
      removeLazyLoadListener,
      clickHandler,
      closeViewer,
      t
    };
  }
};
var _hoisted_1$2 = {
  class: "el-image"
};
var _hoisted_2$2 = createVNode("div", {
  class: "el-image__placeholder"
}, null, -1);
var _hoisted_3$1 = {
  class: "el-image__error"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_image_viewer = resolveComponent("image-viewer");
  return openBlock(), createBlock("div", _hoisted_1$2, [$setup.loading ? renderSlot(_ctx.$slots, "placeholder", {
    key: 0
  }, () => [_hoisted_2$2]) : $setup.error ? renderSlot(_ctx.$slots, "error", {
    key: 1
  }, () => [createVNode("div", _hoisted_3$1, toDisplayString($setup.t("el.image.error")), 1)]) : (openBlock(), createBlock("img", mergeProps({
    key: 2,
    class: "el-image__inner"
  }, _ctx.$attrs, {
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.clickHandler && $setup.clickHandler(...args)),
    src: $props.src,
    style: $setup.imageStyle,
    class: {
      "el-image__inner--center": $setup.alignCenter,
      "el-image__preview": $setup.preview
    }
  }), null, 16, ["src"])), $setup.preview ? (openBlock(), createBlock(Fragment, {
    key: 3
  }, [$setup.showViewer ? (openBlock(), createBlock(_component_image_viewer, {
    key: 0,
    "z-index": $props.zIndex,
    "initial-index": $setup.imageIndex,
    "on-close": $setup.closeViewer,
    "url-list": $props.previewSrcList
  }, null, 8, ["z-index", "initial-index", "on-close", "url-list"])) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true)]);
}
script$4.render = render$4;
script$4.__file = "packages/image/Image.vue";
script$4.install = function(app) {
  app.component(script$4.name, script$4);
};
var cubic = (value) => Math.pow(value, 3);
var easeInOutCubic = (value) => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
var script$3 = {
  name: "ElBacktop",
  components: {
    ElIcon: script$1v
  },
  props: {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    target: {
      type: String,
      default: null
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
  setup(props2, {
    emit
  }) {
    const el = ref(null);
    const container = ref(null);
    const visible = ref(null);
    let throttledScrollHandler;
    const {
      visibilityHeight,
      target,
      right,
      bottom
    } = toRefs(props2);
    const styleBottom = computed(() => `${bottom.value}px`);
    const styleRight = computed(() => `${right.value}px`);
    const init = () => {
      container.value = document;
      el.value = document.documentElement;
      if (target.value) {
        el.value = document.querySelector(target.value);
        if (!el.value) {
          throw new Error(`target is not existed: ${target.value}`);
        }
        container.value = el.value;
      }
    };
    const onScroll = () => {
      const scrollTop = el.value.scrollTop;
      visible.value = scrollTop >= visibilityHeight.value;
    };
    const handleClick = (e) => {
      scrollToTop();
      emit("click", e);
    };
    const scrollToTop = () => {
      const element = el.value;
      const beginTime = Date.now();
      const beginValue = element.scrollTop;
      const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16));
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
          element.scrollTop = beginValue * (1 - easeInOutCubic(progress));
          rAF(frameFunc);
        } else {
          element.scrollTop = 0;
        }
      };
      rAF(frameFunc);
    };
    onMounted(() => {
      init();
      throttledScrollHandler = throttle$1(300, onScroll);
      container.value.addEventListener("scroll", throttledScrollHandler);
    });
    onUnmounted(() => {
      container.value.removeEventListener("scroll", throttledScrollHandler);
    });
    return {
      visible,
      styleBottom,
      styleRight,
      handleClick
    };
  }
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createBlock(Transition, {
    name: "el-fade-in"
  }, {
    default: withCtx(() => [$setup.visible ? (openBlock(), createBlock("div", {
      key: 0,
      onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $setup.handleClick && $setup.handleClick(...args), ["stop"])),
      style: {
        right: $setup.styleRight,
        bottom: $setup.styleBottom
      },
      class: "el-backtop"
    }, [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(_component_el_icon, {
      name: "caret-top"
    })])], 4)) : createCommentVNode("v-if", true)]),
    _: 1
  });
}
script$3.render = render$3;
script$3.__file = "packages/backtop/Backtop.vue";
script$3.install = function(app) {
  app.component(script$3.name, script$3);
};
var getStyleComputedProperty = (element, property) => {
  if (element === window) {
    element = document.documentElement;
  }
  if (element.nodeType !== 1) {
    return [];
  }
  const css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
};
var entries = (obj) => {
  return Object.keys(obj || {}).map((key) => [key, obj[key]]);
};
var getPositionSize = (el, prop) => {
  return el === window || el === document ? document.documentElement[prop] : el[prop];
};
var getOffsetHeight = (el) => {
  return getPositionSize(el, "offsetHeight");
};
var getClientHeight = (el) => {
  return getPositionSize(el, "clientHeight");
};
var scope = "ElInfiniteScroll";
var attributes = {
  delay: {
    type: Number,
    default: 200
  },
  distance: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  },
  immediate: {
    type: Boolean,
    default: true
  }
};
var getScrollOptions = (el) => {
  if (!isHtmlElement(el))
    return {};
  return entries(attributes).reduce((map, [key, option]) => {
    const {
      type: type2,
      default: defaultValue
    } = option;
    const attributeName = `infinite-scroll-${key}`;
    let value = el.hasAttribute(attributeName) ? el.getAttribute(attributeName) : defaultValue;
    switch (type2) {
      case Number:
        value = Number(value);
        value = Number.isNaN(value) ? defaultValue : value;
        break;
      case Boolean:
        value = isDefined(value) ? value === "false" ? false : Boolean(value) : defaultValue;
        break;
      default:
        value = type2(value);
    }
    map[key] = value;
    return map;
  }, {});
};
var getElementTop = (el) => el.getBoundingClientRect().top;
var handleScroll = function(cb) {
  const {
    el,
    container,
    observer
  } = this[scope];
  const {
    distance,
    disabled
  } = getScrollOptions(el);
  if (disabled)
    return;
  const containerInfo = container.getBoundingClientRect();
  if (!containerInfo.width && !containerInfo.height)
    return;
  let shouldTrigger = false;
  if (container === el) {
    const scrollBottom = container.scrollTop + getClientHeight(container);
    shouldTrigger = container.scrollHeight - scrollBottom <= distance;
  } else {
    const heightBelowTop = getOffsetHeight(el) + getElementTop(el) - getElementTop(container);
    const offsetHeight = getOffsetHeight(container);
    const borderBottom = Number.parseFloat(getStyleComputedProperty(container, "borderBottomWidth"));
    shouldTrigger = heightBelowTop - offsetHeight + borderBottom <= distance;
  }
  if (shouldTrigger && isFunction$1(cb)) {
    cb.call();
  } else if (observer) {
    observer.disconnect();
    this[scope].observer = null;
  }
};
var ElInfiniteScroll = {
  name: "InfiniteScroll",
  mounted(el, binding) {
    const cb = binding.value;
    const container = getScrollContainer(el, true);
    const {
      delay,
      immediate
    } = getScrollOptions(el);
    const onScroll = throttle$1(delay, handleScroll.bind(el, cb));
    el[scope] = {
      el,
      container,
      onScroll
    };
    if (container) {
      container.addEventListener("scroll", onScroll);
      if (immediate) {
        const observer = el[scope].observer = new MutationObserver(onScroll);
        observer.observe(container, {
          childList: true,
          subtree: true
        });
        onScroll();
      }
    }
  },
  unmounted(el) {
    const {
      container,
      onScroll
    } = el[scope];
    if (container) {
      container.removeEventListener("scroll", onScroll);
    }
  }
};
ElInfiniteScroll.install = function(app) {
  app.directive(ElInfiniteScroll.name, ElInfiniteScroll);
};
var script$2 = {
  name: "ElDrawer",
  props: __spreadProps(__spreadValues({}, popupProps), {
    appendToBody: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function
    },
    customClass: {
      type: String,
      default: ""
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "rtl",
      validator(val) {
        return ["ltr", "rtl", "ttb", "btt"].indexOf(val) !== -1;
      }
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "30%"
    },
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean
    },
    wrapperClosable: {
      type: Boolean,
      default: true
    },
    withHeader: {
      type: Boolean,
      default: true
    }
  }),
  emits: ["update:visible", "close", "opened", "open", "closed"],
  setup(props2, {
    emit
  }) {
    const {
      rendered,
      open
    } = usePopup(props2);
    const {
      appendToBody: appendToBody2,
      beforeClose,
      destroyOnClose,
      direction,
      visible,
      wrapperClosable
    } = toRefs(props2);
    const closed = ref(false);
    const prevActiveElement = ref(null);
    const drawer = ref(null);
    const self2 = getCurrentInstance().proxy;
    const isHorizontal = computed(() => {
      return direction.value === "rtl" || direction.value === "ltr";
    });
    watch(visible, (val) => {
      const el = self2.$el;
      if (val) {
        closed.value = false;
        emit("open");
        if (appendToBody2.value) {
          document.body.appendChild(el);
        }
        prevActiveElement.value = document.activeElement;
        nextTick(() => {
          Utils.focusFirstDescendant(drawer.value);
        });
      } else {
        if (!closed.value)
          emit("close");
        nextTick(() => {
          if (prevActiveElement.value) {
            prevActiveElement.value.focus();
          }
        });
      }
    });
    const afterEnter = () => {
      emit("opened");
    };
    const afterLeave = () => {
      emit("closed");
    };
    const handleWrapperClick = () => {
      if (wrapperClosable.value) {
        closeDrawer();
      }
    };
    const closeDrawer = () => {
      if (beforeClose && typeof beforeClose.value === "function") {
        beforeClose.value(hide);
      } else {
        hide();
      }
    };
    const hide = (cancel) => {
      if (cancel !== false) {
        emit("update:visible", false);
        emit("close");
        if (destroyOnClose.value === true) {
          rendered.value = false;
        }
        closed.value = true;
      }
    };
    const handleClose = () => {
      closeDrawer();
    };
    onMounted(() => {
      if (visible.value) {
        rendered.value = true;
        open();
      }
    });
    onUnmounted(() => {
      if (appendToBody2.value && self2.$el && self2.$el.parentNode) {
        self2.$el.parentNode.removeChild(self2.$el);
      }
    });
    return {
      isHorizontal,
      drawer,
      rendered,
      afterEnter,
      afterLeave,
      handleWrapperClick,
      closeDrawer,
      handleClose
    };
  }
};
var _hoisted_1$1 = {
  class: "el-drawer__wrapper",
  tabindex: "-1"
};
var _hoisted_2$1 = {
  key: 0,
  class: "el-drawer__header",
  id: "el-drawer__title"
};
var _hoisted_3 = createVNode("i", {
  class: "el-dialog__close el-icon el-icon-close"
}, null, -1);
var _hoisted_4 = {
  key: 1,
  class: "el-drawer__body"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "el-drawer-fade",
    onAfterEnter: $setup.afterEnter,
    onAfterLeave: $setup.afterLeave
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", _hoisted_1$1, [createVNode("div", {
      class: ["el-drawer__container", $props.visible && "el-drawer__open"],
      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $setup.handleWrapperClick && $setup.handleWrapperClick(...args), ["self"])),
      role: "document",
      tabindex: "-1"
    }, [createVNode("div", {
      "aria-modal": "true",
      "aria-labelledby": "el-drawer__title",
      "aria-label": $props.title,
      class: ["el-drawer", [$props.direction, $props.customClass]],
      style: $setup.isHorizontal ? `width: ${$props.size}` : `height: ${$props.size}`,
      ref: "drawer",
      role: "dialog",
      tabindex: "-1"
    }, [$props.withHeader ? (openBlock(), createBlock("header", _hoisted_2$1, [renderSlot(_ctx.$slots, "title", {}, () => [createVNode("span", {
      role: "heading",
      tabindex: "0",
      title: $props.title
    }, toDisplayString($props.title), 9, ["title"])]), $props.showClose ? (openBlock(), createBlock("button", {
      key: 0,
      "aria-label": `close ${$props.title || "drawer"}`,
      class: "el-drawer__close-btn",
      type: "button",
      onClick: _cache[1] || (_cache[1] = (...args) => $setup.closeDrawer && $setup.closeDrawer(...args))
    }, [_hoisted_3], 8, ["aria-label"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), $setup.rendered ? (openBlock(), createBlock("section", _hoisted_4, [renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)], 14, ["aria-label"])], 2)], 512), [[vShow, $props.visible]])]),
    _: 1
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
script$2.render = render$2;
script$2.__file = "packages/drawer/Drawer.vue";
script$2.install = function(app) {
  app.component(script$2.name, script$2);
};
function broadcast(componentName, eventName, params) {
  this.$children.forEach((child) => {
    var name = child.$options.componentName;
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
var Emitter = {
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
var script$1 = {
  components: {
    ElScrollbar
  },
  mixins: [Popper, Emitter],
  componentName: "ElAutocompleteSuggestions",
  data() {
    return {
      parent: this.$parent,
      dropdownWidth: ""
    };
  },
  props: {
    options: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    },
    id: String
  },
  methods: {
    select(item) {
      this.dispatch("ElAutocomplete", "item-click", item);
    }
  },
  updated() {
    this.$nextTick(() => {
      this.popperJS && this.updatePopper();
    });
  },
  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
    this.referenceList = this.$el.querySelector(".el-autocomplete-suggestion__list");
    this.referenceList.setAttribute("role", "listbox");
    this.referenceList.setAttribute("id", this.id);
  },
  created() {
    this.$on("visible", (val, inputWidth) => {
      this.dropdownWidth = inputWidth + "px";
      this.showPopper = val;
    });
  }
};
var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = createVNode("i", {
  class: "el-icon-loading"
}, null, -1);
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  return openBlock(), createBlock(Transition, {
    name: "el-zoom-in-top",
    onAfterLeave: _ctx.doDestroy
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: ["el-autocomplete-suggestion el-popper", {
        "is-loading": !$data.parent.hideLoading && $data.parent.loading
      }],
      style: {
        width: $data.dropdownWidth
      },
      role: "region"
    }, [createVNode(_component_el_scrollbar, {
      tag: "ul",
      "wrap-class": "el-autocomplete-suggestion__wrap",
      "view-class": "el-autocomplete-suggestion__list"
    }, {
      default: withCtx(() => [!$data.parent.hideLoading && $data.parent.loading ? (openBlock(), createBlock("li", _hoisted_1, [_hoisted_2])) : renderSlot(_ctx.$slots, "default", {
        key: 1
      })]),
      _: 1
    })], 6), [[vShow, _ctx.showPopper]])]),
    _: 1
  }, 8, ["onAfterLeave"]);
}
script$1.render = render$1;
script$1.__file = "packages/autocomplete/src/autocomplete-suggestions.vue";
var script = {
  name: "ElAutocomplete",
  mixins: [Emitter, Focus("input"), Migrating],
  inheritAttrs: false,
  componentName: "ElAutocomplete",
  components: {
    ElInput: script$1l,
    ElAutocompleteSuggestions: script$1
  },
  directives: {
    Clickoutside
  },
  props: {
    valueKey: {
      type: String,
      default: "value"
    },
    popperClass: String,
    popperOptions: Object,
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    name: String,
    size: String,
    value: String,
    maxlength: Number,
    minlength: Number,
    autofocus: Boolean,
    fetchSuggestions: Function,
    triggerOnFocus: {
      type: Boolean,
      default: true
    },
    customItem: String,
    selectWhenUnmatched: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String,
    label: String,
    debounce: {
      type: Number,
      default: 300
    },
    placement: {
      type: String,
      default: "bottom-start"
    },
    hideLoading: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    highlightFirstItem: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activated: false,
      suggestions: [],
      loading: false,
      highlightedIndex: -1,
      suggestionDisabled: false
    };
  },
  computed: {
    suggestionVisible() {
      const suggestions = this.suggestions;
      const isValidData = Array.isArray(suggestions) && suggestions.length > 0;
      return (isValidData || this.loading) && this.activated;
    },
    id() {
      return `el-autocomplete-${generateId()}`;
    }
  },
  watch: {
    suggestionVisible(val) {
      const $input = this.getInput();
      if ($input) {
        this.broadcast("visible", [val, $input.offsetWidth]);
      }
    }
  },
  methods: {
    getMigratingConfig() {
      return {
        props: {
          "custom-item": "custom-item is removed, use scoped slot instead.",
          props: "props is removed, use value-key instead."
        }
      };
    },
    getData(queryString) {
      if (this.suggestionDisabled) {
        return;
      }
      this.loading = true;
      this.fetchSuggestions(queryString, (suggestions) => {
        this.loading = false;
        if (this.suggestionDisabled) {
          return;
        }
        if (Array.isArray(suggestions)) {
          this.suggestions = suggestions;
          this.highlightedIndex = this.highlightFirstItem ? 0 : -1;
        } else {
          console.error("[Element Error][Autocomplete]autocomplete suggestions must be an array");
        }
      });
    },
    handleInput(value) {
      this.$emit("input", value);
      this.suggestionDisabled = false;
      if (!this.triggerOnFocus && !value) {
        this.suggestionDisabled = true;
        this.suggestions = [];
        return;
      }
      this.debouncedGetData(value);
    },
    handleChange(value) {
      this.$emit("change", value);
    },
    handleFocus(event) {
      this.activated = true;
      this.$emit("focus", event);
      if (this.triggerOnFocus) {
        this.debouncedGetData(this.value);
      }
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleClear() {
      this.activated = false;
      this.$emit("clear");
    },
    close() {
      this.activated = false;
    },
    handleKeyEnter(e) {
      if (this.suggestionVisible && this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
        e.preventDefault();
        this.select(this.suggestions[this.highlightedIndex]);
      } else if (this.selectWhenUnmatched) {
        this.$emit("select", {
          value: this.value
        });
        this.$nextTick(() => {
          this.suggestions = [];
          this.highlightedIndex = -1;
        });
      }
    },
    select(item) {
      this.$emit("input", item[this.valueKey]);
      this.$emit("select", item);
      this.$nextTick(() => {
        this.suggestions = [];
        this.highlightedIndex = -1;
      });
    },
    highlight(index2) {
      if (!this.suggestionVisible || this.loading) {
        return;
      }
      if (index2 < 0) {
        this.highlightedIndex = -1;
        return;
      }
      if (index2 >= this.suggestions.length) {
        index2 = this.suggestions.length - 1;
      }
      const suggestion = this.$refs.suggestions.$el.querySelector(".el-autocomplete-suggestion__wrap");
      const suggestionList = suggestion.querySelectorAll(".el-autocomplete-suggestion__list li");
      const highlightItem = suggestionList[index2];
      const scrollTop = suggestion.scrollTop;
      const offsetTop = highlightItem.offsetTop;
      if (offsetTop + highlightItem.scrollHeight > scrollTop + suggestion.clientHeight) {
        suggestion.scrollTop += highlightItem.scrollHeight;
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= highlightItem.scrollHeight;
      }
      this.highlightedIndex = index2;
      const $input = this.getInput();
      $input.setAttribute("aria-activedescendant", `${this.id}-item-${this.highlightedIndex}`);
    },
    getInput() {
      return this.$refs.input.getInput();
    }
  },
  mounted() {
    this.debouncedGetData = debounce$1(this.debounce, this.getData);
    this.$on("item-click", (item) => {
      this.select(item);
    });
    const $input = this.getInput();
    $input.setAttribute("role", "textbox");
    $input.setAttribute("aria-autocomplete", "list");
    $input.setAttribute("aria-controls", "id");
    $input.setAttribute("aria-activedescendant", `${this.id}-item-${this.highlightedIndex}`);
  },
  beforeUnmount() {
    this.$refs.suggestions.$destroy();
  }
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_el_autocomplete_suggestions = resolveComponent("el-autocomplete-suggestions");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return withDirectives((openBlock(), createBlock("div", {
    class: "el-autocomplete",
    "aria-haspopup": "listbox",
    role: "combobox",
    "aria-expanded": $options.suggestionVisible,
    "aria-owns": $options.id
  }, [createVNode(_component_el_input, mergeProps({
    ref: "input"
  }, [_ctx.$props, _ctx.$attrs], {
    onInput: $options.handleInput,
    onChange: $options.handleChange,
    onFocus: $options.handleFocus,
    onBlur: $options.handleBlur,
    onClear: $options.handleClear,
    onKeydown: [_cache[1] || (_cache[1] = withKeys(withModifiers(($event) => $options.highlight($data.highlightedIndex - 1), ["prevent"]), ["up"])), _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => $options.highlight($data.highlightedIndex + 1), ["prevent"]), ["down"])), withKeys($options.handleKeyEnter, ["enter"]), withKeys($options.close, ["tab"])]
  }), createSlots({
    _: 2
  }, [_ctx.$slots.prepend ? {
    name: "prepend",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "prepend")])
  } : void 0, _ctx.$slots.append ? {
    name: "append",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "append")])
  } : void 0, _ctx.$slots.prefix ? {
    name: "prefix",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "prefix")])
  } : void 0, _ctx.$slots.suffix ? {
    name: "suffix",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "suffix")])
  } : void 0]), 1040, ["onInput", "onChange", "onFocus", "onBlur", "onClear", "onKeydown"]), createVNode(_component_el_autocomplete_suggestions, {
    "visible-arrow": "",
    class: [$props.popperClass ? $props.popperClass : ""],
    "popper-options": $props.popperOptions,
    "append-to-body": $props.popperAppendToBody,
    ref: "suggestions",
    placement: $props.placement,
    id: $options.id
  }, {
    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($data.suggestions, (item, index2) => {
      return openBlock(), createBlock("li", {
        key: index2,
        class: {
          highlighted: $data.highlightedIndex === index2
        },
        onClick: ($event) => $options.select(item),
        id: `${$options.id}-item-${index2}`,
        role: "option",
        "aria-selected": $data.highlightedIndex === index2
      }, [renderSlot(_ctx.$slots, "default", {
        item
      }, () => [createTextVNode(toDisplayString(item[$props.valueKey]), 1)])], 10, ["onClick", "id", "aria-selected"]);
    }), 128))]),
    _: 1
  }, 8, ["class", "popper-options", "append-to-body", "placement", "id"])], 8, ["aria-expanded", "aria-owns"])), [[_directive_clickoutside, $options.close]]);
}
script.render = render2;
script.__file = "packages/autocomplete/src/autocomplete.vue";
script.install = function(app) {
  app.component(script.name, script);
};
var version = "0.0.39";
var components = [
  ElRow,
  script$1B,
  script$1z,
  script$1y,
  script$O,
  script$N,
  script$1x,
  script$1w,
  script$C,
  script$1A,
  script$1u,
  script$1t,
  script$19,
  script$16,
  script$1s,
  script$1v,
  script$q,
  script$p,
  script$3,
  script$K,
  script$w,
  script$v,
  script$u,
  script$t,
  ElPagination,
  script$1h,
  script$E,
  script$D,
  script$e,
  script$d,
  script$s,
  script$r,
  script$o,
  script$n,
  script$m,
  script$l,
  script$k,
  script$j,
  ElLoading,
  script$T,
  script$R,
  script$P,
  ElTableColumn,
  script$1r,
  script$1q,
  script$1p,
  script$1o,
  script$1n,
  script$1m,
  script$1l,
  script$1k,
  script$1g,
  script$1b,
  script$1c,
  script$17,
  script$12,
  script$11,
  script$X,
  script$U,
  script$1i,
  script$1f,
  script$i,
  ElTooltip,
  script$h,
  script$g,
  script$f,
  script$c,
  script$b,
  script$a,
  script$9,
  script$8,
  script$6,
  script$4,
  ElInfiniteScroll,
  script$2,
  ElScrollbar,
  script,
  ElCollapseTransition
];
var install = (app, opts = {}) => {
  app.use(setupGlobalOptions(opts));
  components.forEach((component) => {
    app.use(component);
  });
  applyOptions(app);
};
function applyOptions(app) {
  app.config.globalProperties.$loading = ElLoading.service;
  app.config.globalProperties.$msgbox = MessageBox;
  app.config.globalProperties.$alert = MessageBox.alert;
  app.config.globalProperties.$confirm = MessageBox.confirm;
  app.config.globalProperties.$prompt = MessageBox.prompt;
  app.config.globalProperties.$notify = Notification;
  app.config.globalProperties.$message = Message;
}
var element3 = {
  version,
  install
};
var element3_ui_esm_bundler_default = element3;

// dep:element3
var element3_default = element3_ui_esm_bundler_default;
export {
  script$C as ElAlert,
  script$1x as ElAside,
  script as ElAutocomplete,
  script$D as ElAvatar,
  script$3 as ElBacktop,
  script$E as ElBadge,
  script$q as ElBreadcrumb,
  script$p as ElBreadcrumbItem,
  script$1u as ElButton,
  script$1t as ElButtonGroup,
  script$6 as ElCalendar,
  script$f as ElCard,
  script$e as ElCarousel,
  script$d as ElCarouselItem,
  script$1b as ElCascader,
  script$1c as ElCascaderPanel,
  script$1o as ElCheckbox,
  script$1n as ElCheckboxButton,
  script$1m as ElCheckboxGroup,
  script$1B as ElCol,
  script$c as ElCollapse,
  script$b as ElCollapseItem,
  ElCollapseTransition,
  script$X as ElColorPicker,
  script$1A as ElContainer,
  script$i as ElDialog,
  script$8 as ElDivider,
  script$2 as ElDrawer,
  script$n as ElDropdown,
  script$m as ElDropdownItem,
  script$l as ElDropdownMenu,
  script$1y as ElFooter,
  script$T as ElForm,
  script$R as ElFormItem,
  script$1z as ElHeader,
  script$1v as ElIcon,
  script$4 as ElImage,
  ElInfiniteScroll,
  script$1l as ElInput,
  script$1k as ElInputNumber,
  script$1s as ElLink,
  ElLoading,
  script$1w as ElMain,
  script$w as ElMenu,
  script$v as ElMenuItem,
  script$t as ElMenuItemGroup,
  script$O as ElNewTable,
  script$N as ElNewTableColumn,
  script$1i as ElOption,
  script$1f as ElOptionGroup,
  script$o as ElPageHeader,
  ElPagination,
  script$g as ElPopconfirm,
  script$h as ElPopover,
  script$16 as ElProgress,
  script$1r as ElRadio,
  script$1q as ElRadioButton,
  script$1p as ElRadioGroup,
  script$11 as ElRate,
  ElRow,
  ElScrollbar,
  script$1g as ElSelect,
  script$17 as ElSlider,
  script$j as ElStep,
  script$k as ElSteps,
  script$u as ElSubmenu,
  script$19 as ElSwitch,
  script$r as ElTabPane,
  script$P as ElTable,
  ElTableColumn,
  script$s as ElTabs,
  script$1h as ElTag,
  script$a as ElTimeline,
  script$9 as ElTimelineItem,
  ElTooltip,
  script$U as ElTransfer,
  script$K as ElTree,
  script$12 as ElUpload,
  Message,
  MessageBox as Msgbox,
  Notification,
  element3_default as default,
  install,
  setupGlobalOptions,
  version
};
/*!
  * element3 v0.0.39
  * (c) 2021 kkb
  * @license MIT
  */
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
//# sourceMappingURL=element3.js.map
