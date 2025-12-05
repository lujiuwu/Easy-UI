import { PropType, defineComponent } from "vue";
import { BadgeProps } from "./type";
import './base.scss';

export const EyBadge = defineComponent({
  name: 'EyBadge',
  props: {
    text: {
      type: String as PropType<BadgeProps['text']>,
    },
    position: {
      type: String as PropType<BadgeProps['position']>,
      default: 'top-left'
    },
    value: {
      type: Boolean as PropType<BadgeProps['value']>,
      default: false
    },
    color: {
      type: String as PropType<BadgeProps['color']>,
      default: 'red'
    }
  },
  setup(props, {slots}) {
    return () => {
      const badgeType = props.text ? 'text' : 'dot'
      return (
        <div class="ey-badge-wrapper">
          {slots.default?.()}
          <div
            class={[
              'ey-badge',
              `ey-badge--${badgeType}`,
              `ey-badge--${badgeType}--${props.position}`,
              {
                'ey-badge--hidden': !props.value
              }
            ]}
            style={{ backgroundColor: props.color }}
          >
            {props.text}
          </div>
        </div>
      )
    }
  }
})