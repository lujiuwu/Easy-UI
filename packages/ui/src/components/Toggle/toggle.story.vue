<script setup lang="ts">
  import { EyToggle } from './index'
  import { ref } from 'vue'

  const value = ref(false)
</script>

<template>
  <Story title="Toggle" group="ui">
    <Variant title="Default">
      <EyToggle v-model="value" />
    </Variant>
  </Story>
</template>