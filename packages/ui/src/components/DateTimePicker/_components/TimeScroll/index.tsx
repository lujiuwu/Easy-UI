import { defineComponent } from "vue"
import './style.scss'

export const TimeScroll = defineComponent({
  name: 'TimeScroll',
  setup() {
    return () => {
      return (
        <div class="time-scroll">TimeScroll</div>
      )
    }
  }
})