import { defineComponent } from "vue";

export const EyForm = defineComponent({
  name: 'EyForm',
  props: {
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class="ey-form">
          {slots.default?.()}
        </div>
      )
    }
  }
})