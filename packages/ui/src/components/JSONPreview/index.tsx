import { PropType, defineComponent } from "vue";
import { useVModel } from "@vueuse/core";
import JSONPreviewProps from "./type";
import './base.scss';
import { StringComponent } from "./_components/String";

export const EyJSONEditor = defineComponent({
  name: 'EyJSONEditor',
  props: {
    modelValue: {
      type: String as PropType<JSONPreviewProps['modelValue']>,
    }
  },
  emits: {
    'update:modelValue': (value: string) => true
  },
  setup(props, { emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const parsed = JSON.parse(modelValue.value || '{}')
    const entries = Object.entries(parsed)

    const renderStringItem = (item: Record<string, string>) => {
      return <StringComponent obj={item} />
    }

    return () => {
      return <div>
          <div class="json-preview" >
            {
              entries.map(([key, value]) => renderStringItem({ key: key as string, value: value as string }))
            }
          </div>
        </div>
    }
  }
})