import { PropType, defineComponent } from "vue";
import { InputProps } from "./types";
import './base.scss';

export const EyInput = defineComponent({
  name: 'EyInput',
  props: {
    value: {
      type: String as PropType<InputProps['value']>,
      default: ''
    },
    placeholder: {
      type: String as PropType<InputProps['placeholder']>,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean as PropType<InputProps['disabled']>,
      default: false
    },
    readonly: {
      type: Boolean as PropType<InputProps['readonly']>,
      default: false
    },
    variant: {
      type: String as PropType<InputProps['variant']>,
      default: 'default'
    }
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class={`ey-input ey-input--${props.variant} flex items-center`}>
          <div class="ey-input__prefix">
            {slots.prefix?.()}
          </div>
          <input
          class={`ey-input__content`}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readonly}
        />
        <div class="ey-input__suffix">
          {slots.suffix?.()}
        </div>
        </div>
      )
    }
  }
})