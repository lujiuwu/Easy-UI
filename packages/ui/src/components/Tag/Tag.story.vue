<script setup lang="ts">
  import { EyTag } from './index'
</script>

<template>
  <Story title="Tag" group="ui">
    <Variant title="Default">
      <div class="flex gap-20px">
        <EyTag text="Default" />
        <EyTag text="Default" closable />
      </div>
    </Variant>
  </Story>
</template>