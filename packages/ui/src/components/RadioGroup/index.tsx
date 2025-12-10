/// <reference types="vue/jsx" />
import { PropType, defineComponent } from "vue";
import { RadioGroupProps } from "./type";
import { EyRadio } from "./_components/Radio";
import { useVModel } from "@vueuse/core";
import './base.scss';

let radioGroupCounter = 0

export const EyRadioGroup = defineComponent({
  name: 'EyRadioGroup',
  props: {
    modelValue: {
      type: String as PropType<RadioGroupProps['value']>,
      default: ''
    },
    options: {
      type: Array as PropType<RadioGroupProps['options']>,
      default: () => [],
    },
    direction: {
      type: String as PropType<RadioGroupProps['direction']>,
      default: 'horizontal'
    },
    variant: {
      type: String as PropType<RadioGroupProps['variant']>,
      default: 'default'
    }
  },
  emits: {
    'update:modelValue': (value: string) => true
  },
  setup(props, { emit }) {
    const radioName = `ey-radio-${radioGroupCounter++}`
    const modelValue = useVModel(props, 'modelValue', emit)
    
    const handleRadioSwitch = (value: string) => {
      modelValue.value = value
    }
    
    return () => {
      return (
        <div
          class={[
            'ey-radio-group',
            props.direction === 'horizontal' ? 'ey-radio-group--horizontal' : 'ey-radio-group--vertical',
            `ey-radio-group--${props.variant}`
          ]}
        >
          {props.options.map((option) => (
            <EyRadio
              name={radioName}
              value={option.value}
              checked={modelValue.value === option.value}
              label={option.label}
              disabled={option.disabled}
              onSwitch={handleRadioSwitch}
            />
          ))}
        </div>
      )
    }
  }
})