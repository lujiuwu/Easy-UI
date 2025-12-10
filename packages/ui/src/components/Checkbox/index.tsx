import { defineComponent, PropType } from "vue";
import { CheckboxProps } from "./type";
import './base.scss';
import { useVModel } from "@vueuse/core";

export const EyCheckbox = defineComponent({
  name: 'EyCheckbox',
  props: {
    modelValue: {
      type: Array as PropType<CheckboxProps['modelValue']>,
      required: true
    },
    options: {
      type: Array as PropType<CheckboxProps['options']>,
      default: () => [],
    },
    direction: {
      type: String as PropType<CheckboxProps['direction']>,
      default: 'horizontal'
    },
    variant: {
      type: String as PropType<CheckboxProps['variant']>,
      default: 'default'
    },
  },
  emits: {
    'update:modelValue': (value: string) => true
  },
  setup(props, { emit }) {
    
    return () => {
      const modelValue= useVModel(props, 'modelValue', emit);
      const handleCheckboxSwitch = (value: string) => {
        modelValue.value = [...modelValue.value, value]
      }
      return (
        <div class={[
          'ey-checkbox',
          props.direction === 'horizontal' ? 'ey-checkbox--horizontal' : 'ey-checkbox--vertical',
          `ey-checkbox--${props.variant}`
        ]}>
          {
            props.options.map((option, index) => {
              // 生成唯一的 ID，确保 label 和 input 正确关联
              const inputId = `checkbox-${props.modelValue}-${option.value}-${index}`;
              
              return (
                <label class="ey-checkbox__item" for={inputId}>
                  <input
                    id={inputId}
                    onChange={() => handleCheckboxSwitch(option.value)}
                    type="checkbox"
                    value={option.value}
                    checked={modelValue.value.includes(option.value)}
                    style={option.color ? { 'accent-color': option.color } as any : {}}
                    disabled={option.disabled}
                  />
                  <span>{option.label}</span>
                </label>
              );
            })
          }
        </div>
      )
    }
  }
})