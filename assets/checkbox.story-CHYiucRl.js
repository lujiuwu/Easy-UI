import { ap as defineComponent, aq as createVNode, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock } from "./vendor-BgNvZzQm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyCheckbox = /* @__PURE__ */ defineComponent({
  name: "EyCheckbox",
  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props) {
    return () => {
      return createVNode("div", {
        "class": ["ey-checkbox", props.direction === "horizontal" ? "ey-checkbox--horizontal" : "ey-checkbox--vertical"]
      }, [props.options.map((option) => createVNode("div", {
        "class": "ey-checkbox__item"
      }, [createVNode("input", {
        "type": "checkbox",
        "value": option.value,
        "checked": props.value === option.value
      }, null), createVNode("label", null, [option.label])]))]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkbox.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const value = ref("1");
    const options = ref([
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]);
    const __returned__ = { value, options, get EyCheckbox() {
      return EyCheckbox;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Checkbox",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyCheckbox"], {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
            options: $setup.options,
            direction: "horizontal"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Vertical" }, {
        default: withCtx(() => [
          createVNode($setup["EyCheckbox"], {
            modelValue: $setup.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value = $event),
            options: $setup.options,
            direction: "vertical"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Checkbox/checkbox.story.vue";
const checkbox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Checkbox/checkbox.story.vue"]]);
export {
  checkbox_story as default
};
