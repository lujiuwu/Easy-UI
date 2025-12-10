import { ap as defineComponent, aq as createVNode } from "./vendor-BgNvZzQm.js";
const EyButton = /* @__PURE__ */ defineComponent({
  name: "EyButton",
  props: {
    text: {
      type: String,
      default: "Easy-UI"
    },
    variant: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    click: () => true
  },
  setup(props, {
    emit,
    attrs
  }) {
    return () => {
      const handleClick = (e) => {
        emit("click");
        if (attrs.onClick && typeof attrs.onClick === "function") {
          attrs.onClick(e);
        }
      };
      return createVNode("button", {
        "class": ["ey-btn", `ey-btn--variant--${props.variant}`, `ey-btn--size--${props.size}`, {
          "ey-btn--disabled": props.disabled
        }],
        "onClick": handleClick,
        "disabled": props.disabled
      }, [props.text]);
    };
  }
});
export {
  EyButton as E
};
