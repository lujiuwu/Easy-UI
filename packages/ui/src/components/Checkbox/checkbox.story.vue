<script setup lang="ts">
  import { EyCheckbox } from './index'
  import { ref } from 'vue'

  const value1 = ref(['1'])
  const options1 = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4', disabled: true },
  ])
  const value2 = ref(['2'])
  const options2 = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])
  const value3 = ref(['3'])
  const options3 = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])
  const value4 = ref(['1', '2'])
  const options4 = ref([
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ])
  const value5 = ref(['1', '3', '4',])
  const options5 = ref([
    { label: '苹果', value: '1', color: 'red' },
    { label: '橘子', value: '2', color: 'orange' },
    { label: '香蕉', value: '3', color: 'yellow' },
    { label: '葡萄', value: '4', color: 'purple' },
    { label: '草莓', value: '5', color: 'pink' },
    { label: '蓝莓', value: '6', color: 'blue' },
  ])
</script>

<template>
  <Story title="Checkbox" group="ui">
    <Variant title="Default">
      <EyCheckbox v-model="value1" :options="options1"/>
    </Variant>
    <Variant title="Outlined">
      <EyCheckbox v-model="value2" :options="options2" variant="outlined"/>
    </Variant>
    <Variant title="Card">
      <EyCheckbox v-model="value3" :options="options3" variant="card"/>
    </Variant>
    <Variant title="Tab">
      <EyCheckbox v-model="value4" :options="options4" variant="tab"/>
    </Variant>
    <Variant title="Custom Color">
      <EyCheckbox v-model="value5" :options="options5" variant="outlined"/>
    </Variant>
  </Story>
</template>