## Easy UI

一个基于 **Vue 3 + TS** 的现代化组件库，提供常用业务场景下的 UI 组件，开箱即用、风格统一，适合作为中小型后台/管理系统的基础组件库。

---

## 📦 安装

使用 **pnpm**（推荐）：

```bash
pnpm add @easy-ui/ui
```

或使用 npm：

```bash
npm install @easy-ui/ui
```

或使用 yarn：

```bash
yarn add @easy-ui/ui
```

---

## 🚀 快速开始

### 全局注册（推荐）

在你的应用入口文件（例如 `main.ts`）中：

```ts
import { createApp } from 'vue'
import App from './App.vue'

import '@easy-ui/ui/style'
import * as EasyUI from '@easy-ui/ui'

const app = createApp(App)

// 简单粗暴的全量注册（根据自己需要可封装更优雅的方式）
Object.entries(EasyUI).forEach(([name, comp]) => {
  if (name.startsWith('Easy')) {
    app.component(name, comp)
  }
})

app.mount('#app')
```

然后你就可以在任意组件中直接使用：

```vue
<template>
  <EasyButton type="primary">主要按钮</EasyButton>
</template>
```

### 按需引入

如果你只想在某个页面/组件中使用部分组件：

```vue
<template>
  <EasyButton type="primary">按钮</EasyButton>
</template>

<script setup lang="ts">
import { EasyButton } from '@easy-ui/ui'
import '@easy-ui/ui/style'
</script>
```

> 暂未内置自动按需导入插件，你可以结合 `unplugin-vue-components` 等生态工具自行配置。

---

## ✨ 特性

- **现代技术栈**：基于 Vue 3 + TypeScript + Vite 构建
- **完整类型支持**：所有组件均提供完善的 TS 类型定义
- **文档即演示**：使用 Histoire 搭建组件文档与交互示例
- **按需组合**：组件设计以组合优先，方便二次封装

---

## 📚 组件一览

以下为当前已内置的组件（持续增加中）：

- **基础**
  - **Button** - 按钮
  - **Icon** - 图标
  - **Badge** - 徽章
  - **Tag** - 标签
  - **Progress** - 进度条

- **表单**
  - **Input** - 输入框
  - **Textarea** - 文本域
  - **Checkbox** - 复选框
  - **RadioGroup** - 单选按钮组
  - **Select** - 下拉选择器
  - **TreeSelection** - 树形选择器
  - **DatePicker** - 日期选择器
  - **ErrorMessage** - 表单错误提示

- **数据展示**
  - **Table** - 表格
  - **Tabs** - 选项卡
  - **Collapse** - 折叠面板
  - **Empty** - 空状态（预留/开发中）

- **反馈**
  - **Modal** - 模态框
  - **Toast** - 全局消息提示
  - **Overlay** - 遮罩层
  - **Popover** - 气泡卡片

- **导航**
  - **Menu** - 导航菜单

> 实际组件名称与用法以 `packages/ui/src/components` 目录与在线文档为准。

---

## 🛠 本地开发

本仓库使用 **pnpm workspace** 管理，组件库位于 `packages/ui`。

### 克隆仓库

```bash
git clone https://github.com/lujiuwu/Easy-UI.git
cd Easy-UI
pnpm install
```

### 启动组件文档（Histoire）

在项目根目录：

```bash
pnpm dev
```

这会进入 `packages/ui` 并启动 Histoire 文档服务器，你可以在浏览器中查看和调试所有组件。

### 构建组件库

```bash
pnpm build:ui
```

或在 `packages/ui` 下单独执行：

```bash
cd packages/ui
pnpm build
```

### 构建 / 预览文档

在 `packages/ui` 下：

```bash
pnpm story:build   # 构建文档
pnpm story:preview # 本地预览已构建文档
```

---

## 🧩 发布 & 使用

`@easy-ui/ui` 通过标准的 ESModule / CommonJS 导出，并携带类型声明：

- **ES 模块**：`dist/easy-ui.es.js`
- **CommonJS**：`dist/easy-ui.cjs.js`
- **类型定义**：`dist/index.d.ts`

你可以像普通 npm 包一样在任意 Vue 3 项目中安装并使用。

---

## 📝 类型支持

Easy UI 完全支持 **TypeScript**：

- 所有组件 props / 事件 / 插槽均有类型约束
- 公共类型在 `src/types` 目录下维护
- 构建时通过 `vite-plugin-dts` 生成 `.d.ts` 声明文件

在 TS 项目中引入时可直接享受完整的 IDE 智能提示与类型校验。

---

## 🤝 参与贡献

欢迎提 Issue 或 Pull Request 帮助完善 Easy UI：

- 提交前请确保本地 `pnpm build:ui` 能正常通过
- 组件/样式命名尽量保持统一、语义化
- 新组件建议同时补充对应的 `.story.vue` 文档示例

---

## 🔗 相关链接

- **GitHub 仓库**：[`https://github.com/lujiuwu/Easy-UI.git`](https://github.com/lujiuwu/Easy-UI.git)

