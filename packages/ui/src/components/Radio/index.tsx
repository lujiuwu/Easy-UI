import { PropType, defineComponent } from "vue";
import { RadioProps } from "./type";

export const EyRadio = defineComponent({
  name: 'EyRadio',
  props: {
    value: {
      type: String as PropType<RadioProps['value']>,
    },
    options: {
      type: Array as PropType<RadioProps['options']>,
      default: () => [],
    },
  },
  setup(props) {
    return () => {
      return (
        <div class="ey-radio-group">
          {props.options.map((option) => (
            <div class="ey-radio-group__item">
              <input type="radio" name="radio" value={option.value} />
              {option.label}
            </div>
          ))}
        </div>
      )
    }
  }
})
