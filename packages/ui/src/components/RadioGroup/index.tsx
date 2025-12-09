/// <reference types="vue/jsx" />
import { PropType, defineComponent, getCurrentInstance } from "vue";
import { RadioGroupProps } from "./type";
import { EyRadio } from "./_components/Radio";
import './base.scss';

let radioGroupCounter = 0

export const EyRadioGroup = defineComponent({
  name: 'EyRadioGroup',
  props: {
    value: {
      type: String as PropType<RadioGroupProps['value']>,
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
  setup(props) {
    const radioName = `ey-radio-${radioGroupCounter++}`
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
              checked={props.value === option.value}
              label={option.label}
            />
          ))}
        </div>
      )
    }
  }
})
