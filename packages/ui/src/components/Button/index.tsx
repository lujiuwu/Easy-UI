/// <reference types="vue/jsx" />
import { PropType, defineComponent } from "vue"
import { ButtonProps, ButtonEmits } from "./types"
// 样式统一在 histoire-setup.tsx 中通过 index.css 引入

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
    }
  },
  emits: {
    click: () => true
  },
  setup(props, { attrs, emit }) {
    return () => {
      const externalClass = attrs.class 
        ? (Array.isArray(attrs.class) ? attrs.class.join(' ') : String(attrs.class))
        : ''
      const handleClick = (e: MouseEvent) => {
        emit('click')
        // 同时支持通过 attrs 传递的 onClick
        if (attrs.onClick && typeof attrs.onClick === 'function') {
          attrs.onClick(e)
        }
      }
      return (
        <button 
          class={`ey-btn ey-btn--${props.variant} ${externalClass}`.trim()}
          onClick={handleClick}
        >
          {props.text}
        </button>
      )
    }
  }
})