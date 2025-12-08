<script setup lang="ts">
  import { EyInput } from './index'
  import { EyButton } from '../Button'
</script>

<template>
  <Story title="Input" group="ui">
    <Variant title="Default">
      <EyInput />
    </Variant>
    <Variant title="Underline">
      <EyInput variant="underline" :clearable="true" />
    </Variant>
    <Variant title="With suffix">
      <EyInput variant="default">
        <template #suffix>
          <EyButton text="搜索" />
        </template>
      </EyInput>
    </Variant>
  </Story>
</template>