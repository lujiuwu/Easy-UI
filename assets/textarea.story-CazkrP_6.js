import { ap as defineComponent, aq as createVNode, ax as useVModel, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock } from "./vendor-CeH8jYmj.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const EyTextarea = /* @__PURE__ */ defineComponent({
  name: "EyTextarea",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    }
  },
  emits: {
    "update:modelValue": (_value) => true
  },
  setup(props, {
    emit
  }) {
    const modelValue = useVModel(props, "modelValue", emit);
    return () => {
      return createVNode("div", {
        "class": "ey-textarea"
      }, [createVNode("textarea", {
        "class": "ey-textarea__input",
        "value": modelValue.value,
        "disabled": props.disabled,
        "placeholder": props.placeholder
      }, null)]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "textarea.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref("");
    const __returned__ = { modelValue, get EyTextarea() {
      return EyTextarea;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Textarea",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyTextarea"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Textarea/textarea.story.vue";
const textarea_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Textarea/textarea.story.vue"]]);
export {
  textarea_story as default
};
