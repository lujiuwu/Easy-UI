import { defineComponent } from "vue";
import './base.scss';

export const EyOverlay = defineComponent({
  name: 'EyOverlay',
  setup(_, { slots }) {
    return () => {
      return (
        <div class="ey-overlay">
          {slots.default?.()}
        </div>
      )
    };
  },
});