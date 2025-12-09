// packages/ui/src/histoire-setup.tsx
import { defineSetupVue3 } from '@histoire/plugin-vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'       // 再加载 UnoCSS，让原子类覆盖默认样式

export const setupVue3 = defineSetupVue3(({ app }) => {
  // ...
})