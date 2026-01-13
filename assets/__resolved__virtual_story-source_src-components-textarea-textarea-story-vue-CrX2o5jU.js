const __resolved__virtual_storySource_srcComponentsTextareaTextareaStoryVue = `<script setup lang="ts">
  import { EyTextarea } from './index'
  import { ref } from 'vue'

  const modelValue = ref('')
<\/script>

<template>
  <Story title="Textarea" group="ui">
    <Variant title="Default">
      <EyTextarea v-model="modelValue" />
    </Variant>
  </Story>
</template>`;
export {
  __resolved__virtual_storySource_srcComponentsTextareaTextareaStoryVue as default
};
