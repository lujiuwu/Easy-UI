import { ap as defineComponent, aq as createVNode, ax as useVModel, ar as resolveComponent, as as createBlock, au as withCtx, aw as ref, at as openBlock, av as createBaseVNode } from "./vendor-DftBMx7u.js";
import { E as EyButton } from "./index-DzEy2uc0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css              */
import "./index-BnN7DJTu.js";
const EyPopover = /* @__PURE__ */ defineComponent({
  name: "EyPopover",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, {
    slots,
    emit
  }) {
    const modelValue = useVModel(props, "modelValue", emit);
    return () => {
      return createVNode("div", {
        "class": "ey-popover-wrapper"
      }, [createVNode("div", {
        "class": "ey-popover-trigger",
        "onClick": () => modelValue.value = !modelValue.value
      }, [slots.trigger?.()]), modelValue.value && createVNode("div", {
        "class": "ey-popover-content"
      }, [createVNode("div", {
        "class": "ey-popover-content__arrow"
      }, null), createVNode("div", {
        "class": "ey-popover-content__body"
      }, [slots.content?.()])])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "popover.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref(false);
    const __returned__ = { modelValue, get EyPopover() {
      return EyPopover;
    }, get EyButton() {
      return EyButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Popover",
    group: "ui"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["EyPopover"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event)
          }, {
            trigger: withCtx(() => [
              createVNode($setup["EyButton"], { text: "Open Popover" })
            ]),
            content: withCtx(() => [..._cache[1] || (_cache[1] = [
              createBaseVNode(
                "p",
                null,
                "This is a popover content",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Popover/popover.story.vue";
const popover_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lujiuwu/EasyUI/packages/ui/src/components/Popover/popover.story.vue"]]);
export {
  popover_story as default
};
