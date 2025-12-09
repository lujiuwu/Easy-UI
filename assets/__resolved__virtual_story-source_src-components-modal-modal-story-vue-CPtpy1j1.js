const __resolved__virtual_storySource_srcComponentsModalModalStoryVue = `<script setup lang="ts">
  import { EyModal } from './index'
  import { EyButton } from '../Button'
  import { ref } from 'vue'

  const modelValue = ref(false)
<\/script>

<template>
  <Story title="Modal" group="ui">
    <Variant title="Default">
      <EyButton text="打开弹窗" @click="modelValue = true" />
      <EyModal v-model="modelValue">
        <template #default>
          <p>自定义弹窗体</p>
        </template>
        <template #footer>
          <EyButton text="关闭" @click="modelValue = false" />
        </template>
      </EyModal>
    </Variant>
  </Story>
</template>`;
export {
  __resolved__virtual_storySource_srcComponentsModalModalStoryVue as default
};
