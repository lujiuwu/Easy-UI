// packages/ui/src/histoire-setup.tsx
import { defineSetupVue3 } from '@histoire/plugin-vue'
import '@unocss/reset/tailwind.css'
import './styles/theme.scss'
import 'uno.css'

// 全局变量，确保只初始化一次
let themeObserver: MutationObserver | null = null
let isSetup = false
let lastTheme: 'light' | 'dark' | null = null
let systemThemeCache: 'light' | 'dark' | null = null

export const setupVue3 = defineSetupVue3(({ app }) => {
  if (typeof window === 'undefined' || isSetup) return

  // 缓存系统主题检测结果
  const getSystemTheme = (): 'light' | 'dark' => {
    if (systemThemeCache === null) {
      systemThemeCache = window.matchMedia?.('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light'
    }
    return systemThemeCache
  }

  // 从 HTML class 提取主题
  const getThemeFromClass = (): 'light' | 'dark' => {
    return document.documentElement.className.includes('htw-dark') ? 'dark' : 'light'
  }

  // 更新主题（只在真正改变时更新）
  const updateTheme = () => {
    const classTheme = getThemeFromClass()
    const theme = classTheme || getSystemTheme()
    
    // 只在主题真正改变时才更新 DOM
    if (lastTheme !== theme) {
      lastTheme = theme
      document.documentElement.setAttribute('data-theme', theme)
    }
  }

  // 初始化主题
  const initTheme = () => {
    const classTheme = getThemeFromClass()
    const theme = classTheme || getSystemTheme()
    lastTheme = theme
    document.documentElement.setAttribute('data-theme', theme)
  }

  // 设置监听器（只设置一次）
  const setupObserver = () => {
    if (themeObserver) return

    themeObserver = new MutationObserver((mutations) => {
      // 使用 requestAnimationFrame 批量处理，避免频繁 DOM 操作
      requestAnimationFrame(() => {
        mutations.forEach((mutation) => {
          if (mutation.target === document.documentElement && 
              mutation.type === 'attributes' && 
              mutation.attributeName === 'class') {
            updateTheme()
          }
        })
      })
    })

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
  }

  // 初始化
  initTheme()
  setupObserver()
  isSetup = true
})