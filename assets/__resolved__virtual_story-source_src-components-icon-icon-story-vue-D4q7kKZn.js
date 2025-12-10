const __resolved__virtual_storySource_srcComponentsIconIconStoryVue = `<script setup lang="ts">
  import { EyIcon } from './index'
  import { ref, computed } from 'vue'

  // Material Design Icons 常用图标列表
  const mdiIcons = ref([
    // 基础图标
    { name: 'mdi:home', label: 'Home' },
    { name: 'mdi:account', label: 'Account' },
    { name: 'mdi:settings', label: 'Settings' },
    { name: 'mdi:menu', label: 'Menu' },
    { name: 'mdi:close', label: 'Close' },
    { name: 'mdi:check', label: 'Check' },
    { name: 'mdi:delete', label: 'Delete' },
    { name: 'mdi:edit', label: 'Edit' },
    { name: 'mdi:add', label: 'Add' },
    { name: 'mdi:remove', label: 'Remove' },
    
    // 导航图标
    { name: 'mdi:arrow-left', label: 'Arrow Left' },
    { name: 'mdi:arrow-right', label: 'Arrow Right' },
    { name: 'mdi:arrow-up', label: 'Arrow Up' },
    { name: 'mdi:arrow-down', label: 'Arrow Down' },
    { name: 'mdi:chevron-left', label: 'Chevron Left' },
    { name: 'mdi:chevron-right', label: 'Chevron Right' },
    
    // 操作图标
    { name: 'mdi:search', label: 'Search' },
    { name: 'mdi:filter', label: 'Filter' },
    { name: 'mdi:download', label: 'Download' },
    { name: 'mdi:upload', label: 'Upload' },
    { name: 'mdi:refresh', label: 'Refresh' },
    { name: 'mdi:share', label: 'Share' },
    
    // 状态图标
    { name: 'mdi:information', label: 'Information' },
    { name: 'mdi:alert', label: 'Alert' },
    { name: 'mdi:alert-circle', label: 'Alert Circle' },
    { name: 'mdi:check-circle', label: 'Check Circle' },
    { name: 'mdi:close-circle', label: 'Close Circle' },
    
    // 媒体图标
    { name: 'mdi:play', label: 'Play' },
    { name: 'mdi:pause', label: 'Pause' },
    { name: 'mdi:stop', label: 'Stop' },
    { name: 'mdi:volume-high', label: 'Volume High' },
    { name: 'mdi:volume-off', label: 'Volume Off' },
    
    // 文件图标
    { name: 'mdi:file', label: 'File' },
    { name: 'mdi:folder', label: 'Folder' },
    { name: 'mdi:image', label: 'Image' },
    { name: 'mdi:video', label: 'Video' },
    { name: 'mdi:music', label: 'Music' },
    
    // 通信图标
    { name: 'mdi:email', label: 'Email' },
    { name: 'mdi:phone', label: 'Phone' },
    { name: 'mdi:message', label: 'Message' },
    { name: 'mdi:bell', label: 'Bell' },
    { name: 'mdi:bell-off', label: 'Bell Off' },
    
    // 其他常用图标
    { name: 'mdi:heart', label: 'Heart' },
    { name: 'mdi:star', label: 'Star' },
    { name: 'mdi:bookmark', label: 'Bookmark' },
    { name: 'mdi:lock', label: 'Lock' },
    { name: 'mdi:lock-open', label: 'Lock Open' },
    { name: 'mdi:eye', label: 'Eye' },
    { name: 'mdi:eye-off', label: 'Eye Off' },
    { name: 'mdi:calendar', label: 'Calendar' },
    { name: 'mdi:clock', label: 'Clock' },
    { name: 'mdi:map', label: 'Map' },
  ])

  const searchQuery = ref('')
  
  const filteredIcons = computed(() => {
    if (!searchQuery.value.trim()) {
      return mdiIcons.value
    }
    const query = searchQuery.value.toLowerCase()
    return mdiIcons.value.filter(icon => 
      icon.label.toLowerCase().includes(query) || 
      icon.name.toLowerCase().includes(query)
    )
  })
<\/script>

<template>
  <Story title="Icon" group="icon">
    <Variant title="Material Design Icons">
      <div class="p-4">
        <!-- 图标网格 -->
        <div class="grid grid-cols-6 gap-4">
          <div
            v-for="icon in filteredIcons"
            :key="icon.name"
            class="flex flex-col items-center p-4 border border-gray-200 rounded-md cursor-pointer transition-all"
          >
            <EyIcon 
              :name="icon.name" 
              :size="32"
              color="var(--ey-color-primary)"
            />
            <div class="mt-2 text-sm text-center break-words color-var(--ey-text-color-primary)">
              {{ icon.label }}
            </div>
            <div class="mt-1 text-xs font-mono color-var(--ey-text-color-secondary)">
              {{ icon.name }}
            </div>
          </div>
        </div>
      </div>
    </Variant>
    
    <Variant title="Size Examples">
      <div style="display: flex; align-items: center; gap: 20px; padding: 20px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <EyIcon name="mdi:home" :size="16" />
          <span style="font-size: 12px;">16px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <EyIcon name="mdi:home" :size="24" />
          <span style="font-size: 12px;">24px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <EyIcon name="mdi:home" :size="32" />
          <span style="font-size: 12px;">32px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <EyIcon name="mdi:home" :size="48" />
          <span style="font-size: 12px;">48px</span>
        </div>
      </div>
    </Variant>
    
    <Variant title="Color Examples">
      <div style="display: flex; align-items: center; gap: 20px; padding: 20px;">
        <EyIcon name="mdi:heart" :size="32" color="var(--ey-color-primary)" />
        <EyIcon name="mdi:heart" :size="32" color="var(--ey-color-success)" />
        <EyIcon name="mdi:heart" :size="32" color="var(--ey-color-warning)" />
        <EyIcon name="mdi:heart" :size="32" color="var(--ey-color-danger)" />
        <EyIcon name="mdi:heart" :size="32" color="var(--ey-color-info)" />
      </div>
    </Variant>
  </Story>
</template>

`;
export {
  __resolved__virtual_storySource_srcComponentsIconIconStoryVue as default
};
