/// <reference types="vue/jsx" />
import { defineComponent, PropType, computed } from "vue";
import { useVModel } from "@vueuse/core";
import { ToggleProps } from "./type";
import './base.scss';

export const EyToggle = defineComponent({
  name: 'EyToggle',
  props: {
    modelValue: {
      type: Boolean as PropType<ToggleProps['modelValue']>,
      default: false
    },
    disabled: {
      type: Boolean as PropType<ToggleProps['disabled']>,
      default: false
    },
    size: {
      type: String as PropType<ToggleProps['size']>,
      default: 'default'
    },
    activeColor: {
      type: String as PropType<ToggleProps['activeColor']>,
      default: '#409eff'
    },
    inactiveColor: {
      type: String as PropType<ToggleProps['inactiveColor']>,
      default: '#dcdfe6'
    },
    activeText: {
      type: String as PropType<ToggleProps['activeText']>
    },
    inactiveText: {
      type: String as PropType<ToggleProps['inactiveText']>
    }
  },
  emits: {
    'update:modelValue': (value: boolean) => true,
    'change': (value: boolean) => true
  },
  setup(props, { emit }) {
    const modelValue = useVModel(props, 'modelValue', emit);

    const handleClick = () => {
      if (props.disabled) return;
      const newValue = !modelValue.value;
      modelValue.value = newValue;
      emit('change', newValue);
    };

    const switchStyle = computed(() => {
      return {
        backgroundColor: modelValue.value ? props.activeColor : props.inactiveColor
      };
    });

    return () => {
      return (
        <div
          class={[
            'ey-toggle',
            `ey-toggle--${props.size}`,
            {
              'ey-toggle--checked': modelValue.value,
              'ey-toggle--disabled': props.disabled
            }
          ]}
          onClick={handleClick}
        >
          <span class="ey-toggle__core" style={switchStyle.value}></span>
          {props.activeText || props.inactiveText ? (
            <span class="ey-toggle__label">
              {modelValue.value ? props.activeText : props.inactiveText}
            </span>
          ) : null}
        </div>
      );
    };
  }
});

