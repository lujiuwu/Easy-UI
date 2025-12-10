// Radio/index.tsx
import { PropType, defineComponent } from "vue";
import { RadioProps } from "../../type";
import '../../base.scss';

export const EyRadio = defineComponent({
  name: 'EyRadio',
  props: {
    value: {
      type: String as PropType<RadioProps['value']>,
      required: true
    },
    label: {
      type: String as PropType<RadioProps['label']>,
    },
    name: {
      type: String as PropType<RadioProps['name']>,
    },
    checked: {
      type: Boolean as PropType<RadioProps['checked']>,
      default: false
    },
    disabled: {
      type: Boolean as PropType<RadioProps['disabled']>,
      default: false
    }
  },
  emits: {
    switch: (_value: string) => true
  },
  setup(props, { emit }) {
    const handleChange = () => {
      emit('switch', props.value);
    };
    
    const inputId = `${props.name}-${props.value}`;
    
    return () => {
      return (
        <label class="ey-radio-group__item" for={inputId}>
          <input 
            id={inputId}
            onChange={handleChange} 
            type="radio" 
            value={props.value} 
            name={props.name} 
            checked={props.checked} 
            disabled={props.disabled}
          />
          <span>{props.label}</span>
        </label>
      );
    };
  },
});