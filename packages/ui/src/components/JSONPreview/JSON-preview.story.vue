<template>
  <Story title="JSONPreview" group="ui">
    <Variant title="Default">
      <EyJSONEditor v-model="json" />
    </Variant>
  </Story>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { EyJSONEditor } from './index';
import json from './test.json?raw'

</script>