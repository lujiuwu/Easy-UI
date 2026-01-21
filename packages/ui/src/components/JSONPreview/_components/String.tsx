import { PropType, defineComponent } from "vue"

export const StringComponent = defineComponent({
  name: 'StringComponent',
  props: {
    obj: {
      type: Object as PropType<Record<string, string>>,
    }
  },
  setup(props) {
    return () => {
      return <div class="flex gap-4px">
        <span class="color-red">{`"${props.obj?.key}"`}</span>
        <span class="color-gray">:</span>
        <span class="color-blue">{`"${props.obj?.value}"`}</span>
      </div>
    }
  }
})