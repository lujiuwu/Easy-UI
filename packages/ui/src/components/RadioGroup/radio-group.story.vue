<script setup lang="ts">
  import { EyRadioGroup } from './index'
  import { ref } from 'vue'

  const value = ref('1')
  const options = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])

  const value2 = ref('2')
  const options2 = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2', disabled: true },
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
    <Variant title="Disabled">
      <EyRadioGroup v-model="value2" :options="options2" />
    </Variant>
  </Story>
</template>