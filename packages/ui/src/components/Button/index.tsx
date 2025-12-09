import { PropType, defineComponent } from "vue"
import { ButtonProps, ButtonEmits } from "./types"
import './base.scss'

export const EyButton = defineComponent({
  name: 'EyButton',
  props: {
    text: {
      type: String as PropType<ButtonProps['text']>,
      default: 'Easy-UI'
    },
    variant: {
      type: String as PropType<ButtonProps['variant']>,
      default: 'default'
    },
    size: {
      type: String as PropType<ButtonProps['size']>,
      default: 'default'
    },
    disabled: {
      type: Boolean as PropType<ButtonProps['disabled']>,
      default: false
    }
  },
  emits: {
    click: () => true
  },
  setup(props, {emit, attrs }) {
    return () => {
      const handleClick = (e: MouseEvent) => {
        emit('click')
        if (attrs.onClick && typeof attrs.onClick === 'function') {
          attrs.onClick(e)
        }
      }
      return (
        <button 
          class={[
            'ey-btn',
            `ey-btn--variant--${props.variant}`,
            `ey-btn--size--${props.size}`,
            {
              'ey-btn--disabled': props.disabled
            }
          ]}
          onClick={handleClick}
          disabled={props.disabled}
        >
          {props.text}
        </button>
      )
    }
  }
})