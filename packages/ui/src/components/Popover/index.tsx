import { PropType, defineComponent } from "vue";
import { PopoverProps } from "./type";
import { useVModel } from "@vueuse/core";
import './base.scss'
export const EyPopover = defineComponent({
  name: 'EyPopover',
  props: {
    modelValue: {
      type: Boolean as PropType<PopoverProps['modelValue']>,
      default: false
    }
  },
  emits: {
    'update:modelValue': (value: boolean) => true
  },
  setup(props, {slots, emit}) {
    const modelValue = useVModel(props, 'modelValue', emit)
    return () => {
      return (
        <div class="ey-popover-wrapper">
          {
            <div class="ey-popover-trigger" onClick={() => modelValue.value = !modelValue.value}>
              {slots.trigger?.()}
            </div>
          }
          {
            modelValue.value && (
              <div class="ey-popover-content">
                <div class="ey-popover-content__arrow"></div>
                <div class="ey-popover-content__body">
                  {slots.content?.()}
                </div>
              </div>
            )
          }
        </div>
      )
    }
  }
})