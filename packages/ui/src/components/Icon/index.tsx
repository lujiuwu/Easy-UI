import { PropType, defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import { IconProps } from './type'
import './base.scss'
import { resolveIconSize } from '../../utils/resolveIconSize'

export type { IconProps } from './type'

export const EyIcon = defineComponent({
  name: 'EyIcon',
  props: {
    name: {
      type: String as PropType<IconProps['name']>,
      required: true
    },
    size: {
      type: [String, Number] as PropType<IconProps['size']>,
      default: '1em'
    },
    color: {
      type: String as PropType<IconProps['color']>,
      default: 'currentColor'
    },
    class: {
      type: String as PropType<IconProps['class']>,
      default: ''
    }
  },
  setup(props) {
    return () => {
      const size = resolveIconSize(props.size)
      
      return (
        <span 
          class={['ey-icon', props.class]}
          style={{
            fontSize: size,
            color: props.color,
          }}
        >
          <Icon 
            icon={props.name}
            width={size}
            height={size}
          />
        </span>
      )
    }
  }
})

