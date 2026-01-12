import { defineComponent, watch } from "vue"
import './style.scss'
import { Calendar } from "../Calendar"
import { TimeScroll } from "../TimeScroll"
import dayjs from "dayjs"
import { useVModel } from "@vueuse/core"

export const Panel = defineComponent({
  name: 'Panel',
  props: {
    modelValue: {
      type: String,
      default: dayjs().format('YYYY-MM-DD')
    },
  },
  emits: {
    'update:modelValue': (_value: string) => true
  },
  setup(props, {emit}) {
    const modelValue = useVModel(props, 'modelValue', emit)

    watch(modelValue, (newVal) => {
      console.log(newVal)
    }, {deep: true, immediate: true})

    return () => {
      return (
        <div class="panel"> 
          <Calendar v-model={modelValue.value} />
          <TimeScroll />
        </div>
      )
    }
  }
})