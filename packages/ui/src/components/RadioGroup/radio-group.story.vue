<script setup lang="ts">
  import { EyRadioGroup } from './index'
  import { ref } from 'vue'

  const value = ref('1')
  const options = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])
</script>

<template>
  <Story title="RadioGroup" group="ui">
    <Variant title="Default">
      <EyRadioGroup v-model="value" :options="options" />
    </Variant>
    <Variant title="Outlined">
      <EyRadioGroup v-model="value" :options="options" variant="outlined" />
    </Variant>
    <Variant title="Card">
      <EyRadioGroup v-model="value" :options="options" variant="card" />
    </Variant>
    <Variant title="Tab">
      <EyRadioGroup v-model="value" :options="options" variant="tab" />
    </Variant>
  </Story>
</template>