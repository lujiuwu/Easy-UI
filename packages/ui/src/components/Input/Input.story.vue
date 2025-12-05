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
      <EyInput variant="underline" />
    </Variant>
    <Variant title="With prefix">
      <EyInput variant="default">
        <template #prefix>
          fdsf
        </template>
        <template #suffix>
          <EyButton text="搜索" />
        </template>
      </EyInput>
    </Variant>
  </Story>
</template>