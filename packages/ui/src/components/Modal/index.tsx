import { defineComponent, PropType, Teleport } from "vue";
import { ModalProps } from "./type";
import './base.scss';
import { EyOverlay } from "../Overlay";
import { useVModel } from "@vueuse/core";
import { EyButton } from "..";

export const EyModal = defineComponent({
  name: 'EyModal',
  props: {
    title: {
      type: String as PropType<ModalProps['title']>,
    },
    modelValue: {
      type: Boolean as PropType<ModalProps['modelValue']>,
      default: false
    }
  },
  emits: {
    'update:modelValue': (value: boolean) => true
  },
  setup(props, { emit, slots }) {
    const modelValue = useVModel(props, 'modelValue', emit)
    return () => {
      return (
        modelValue.value ? (
          <Teleport to="body">
            <EyOverlay>
            {{
              default: () => (
                <div class="ey-modal">
                  <header>
                    {props.title ?? 'Easy-UI Modal'}
                  </header>
                  <main>
                    {slots.default?.()}
                  </main>
                  <footer>
                    {slots.footer?.() ?? (<EyButton text="关闭" onClick={() => { modelValue.value = false }} />)}
                  </footer>
                </div>
              )
            }}
            </EyOverlay>
          </Teleport>
        ) : null
      )
    }
  }
})