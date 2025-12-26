# Easy UI

一个基于 Vue 3 的现代化组件库，提供丰富的 UI 组件和工具函数。

## 📦 安装

```bash
pnpm add @easy-ui/ui
```

或使用 npm:

```bash
npm install @easy-ui/ui
```

或使用 yarn:

```bash
yarn add @easy-ui/ui
```

## 🚀 快速开始

### 引入样式

```javascript
import '@easy-ui/ui/style'
```

### 使用组件

```vue
<template>
  <EasyButton type="primary">按钮</EasyButton>
</template>

<script setup>
import { EasyButton } from '@easy-ui/ui'
</script>
```

## 📚 组件列表

Easy UI 提供了以下组件：

- **Badge** - 徽章
- **Button** - 按钮
- **Checkbox** - 复选框
- **Collapse** - 折叠面板
- **ErrorMessage** - 错误消息
- **Icon** - 图标
- **Input** - 输入框
- **Menu** - 菜单
- **Modal** - 模态框
- **Overlay** - 遮罩层
- **Progress** - 进度条
- **RadioGroup** - 单选按钮组
- **Select** - 选择器
- **Tag** - 标签
- **Toast** - 提示消息
- **TreeSelection** - 树形选择器

## 🛠️ 开发

### 启动开发服务器

```bash
pnpm dev
```

这将启动 Histoire 文档服务器，你可以在浏览器中查看和测试所有组件。

### 构建

```bash
pnpm build
```

### 构建文档

```bash
pnpm story:build
```

### 预览文档

```bash
pnpm story:preview
```

## 📝 类型支持

Easy UI 完全支持 TypeScript，所有组件和工具函数都提供了完整的类型定义。

## 🔗 相关链接

- [GitHub 仓库](https://github.com/lujiuwu/Easy-UI.git)
