import { ap as defineComponent, aq as createVNode, ax as useVModel, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock } from "./vendor-CeH8jYmj.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyTabs = /* @__PURE__ */ defineComponent({
  name: "EyTabs",
  props: {
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: "default"
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  emits: {
    "update:modelValue": (_value) => true,
    "change": (_value) => true
  },
  setup(props, {
    emit
  }) {
    const modelValue = useVModel(props, "modelValue", emit);
    const handleChange = (value) => {
      modelValue.value = value;
      emit("change", value);
    };
    return () => {
      return createVNode("div", {
        "class": "ey-tabs-wrapper"
      }, [createVNode("div", {
        "class": ["ey-tabs", `ey-tabs--${props.type}`]
      }, [props.options.map((option) => createVNode("div", {
        "class": ["ey-tabs__item", modelValue.value === option.value ? "ey-tabs__item--active" : ""],
        "key": option.value,
        "onClick": () => handleChange(option.value)
      }, [option.label]))]), props.type === "default" && createVNode("div", {
        "class": "ey-tabs__bottom-line"
      }, [createVNode("div", {
        "style": {
          width: `${100 / props.options.length}%`,
          left: `${props.options.findIndex((opt) => opt.value === modelValue.value) * (100 / props.options.length)}%`
        },
        "class": "ey-tabs__bottom-line__item"
      }, null)]), props.options.find((opt) => opt.value === modelValue.value)?.content && createVNode("div", {
        "class": "ey-tabs__content"
      }, [props.options.find((opt) => opt.value === modelValue.value)?.content])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tabs.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref("1");
    const options = ref([
      { label: "Option 1", value: "1", content: "Content 1" },
      { label: "Option 2", value: "2", content: "Content 2" },
      { label: "Option 3", value: "3", content: "Content 3" }
    ]);
    const __returned__ = { modelValue, options, get EyTabs() {
      return EyTabs;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Tabs",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyTabs"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
            options: $setup.options
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Card" }, {
        default: withCtx(() => [
          createVNode($setup["EyTabs"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.modelValue = $event),
            options: $setup.options,
            type: "card"
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
_sfc_main.__file = "src/components/Tabs/tabs.story.vue";
const tabs_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Tabs/tabs.story.vue"]]);
export {
  tabs_story as default
};
