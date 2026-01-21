import { PropType, defineComponent } from "vue";
import JSONEditorProps from "./type";
import { useVModel } from "@vueuse/core";

export const EyJSONEditor = defineComponent({
  name: 'EyJSONEditor',
  props: {
    modelValue: {
      type: String as PropType<JSONEditorProps['modelValue']>,
    }
  },
  emits: {
    'update:modelValue': (value: string) => true
  },
  setup(props, { emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    let jsonContent = props.modelValue || '{}'

    try {
      const parsedJson = JSON.parse(jsonContent)
      jsonContent = JSON.stringify(parsedJson, null, 2)
    } catch (error) {
      console.error(error)
    }
    return () => {
      return <div>
          <textarea value={jsonContent} class="color-black h-200px w-300px" />
        </div>
    }
  }
})