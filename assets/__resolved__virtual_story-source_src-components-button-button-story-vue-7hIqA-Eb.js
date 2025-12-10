const __resolved__virtual_storySource_srcComponentsButtonButtonStoryVue = `<script setup lang="ts">
import { EyButton } from './index'

<\/script>

<template>
  <Story title="Button" group="ui">
    <Variant title="Type">
      <div class="flex gap-20px">
        <EyButton />
        <EyButton type="primary" />
      </div>
    </Variant>
    <Variant title="Variant">
      <div class="flex gap-20px">
        <EyButton type="default" variant="default" />
        <EyButton type="default" variant="plain" />
        <EyButton type="default" variant="text" />
        <EyButton type="primary" variant="default" />
        <EyButton type="primary" variant="outlined" />
        <EyButton type="primary" variant="plain" />
        <EyButton type="primary" variant="text" />
      </div>
    </Variant>
    <Variant title="Size">
      <div class="flex gap-20px items-center">
        <EyButton size="small" />
        <EyButton size="default" />
        <EyButton size="large" />
      </div>
    </Variant>
    <Variant title="Disabled">
      <div class="flex gap-20px">
        <EyButton disabled />
      </div>
    </Variant>
    <Variant title="Prefix Icon And Suffix Icon">
      <div class="flex gap-20px">
        <EyButton prefixIcon="mdi:home" />
        <EyButton suffixIcon="mdi:arrow-right" />
      </div>
    </Variant>
  </Story>
</template>`;
export {
  __resolved__virtual_storySource_srcComponentsButtonButtonStoryVue as default
};
