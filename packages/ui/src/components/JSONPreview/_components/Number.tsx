import { PropType, defineComponent } from "vue"

export const NumberComponent = defineComponent({
  name: 'NumberComponent',
  props: {
    obj: {
      type: Object as PropType<Record<string, number>>,
    }
  },
  setup(props) {
    return () => {
      return <div class="flex gap-4px">
        <span class="color-red">{`"${props.obj?.key}"`}</span>
        <span class="color-gray">:</span>
        <span class="color-green">{props.obj?.value}</span>
      </div>
    }
  }
})