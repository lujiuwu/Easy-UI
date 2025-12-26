const __resolved__virtual_storySource_srcComponentsSelectSelectStoryVue = `<script setup lang="ts">
  import { EySelect } from './index'
  import { ref } from 'vue'

  const value = ref('1')
  const options = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])

  const multiple_options = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ])
  const multiple_value = ref([])
<\/script>

<template>
  <Story title="Select" group="ui">
    <Variant title="Default">
      <EySelect :options="options" v-model="value" />
    </Variant>
    <Variant title="Multiple">
      <EySelect :options="multiple_options" v-model="multiple_value" multiple />
    </Variant>
  </Story>
</template>`;
export {
  __resolved__virtual_storySource_srcComponentsSelectSelectStoryVue as default
};
