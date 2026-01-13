# AppFlow Landing Page

一个用于移动生产力应用 AppFlow 的现代单页落地页。使用 React 19、TypeScript、Vite 7 和 Tailwind CSS v4 构建。

## 技术栈

- **React 19.2.3** - 最新版本，包含新编译器特性
- **TypeScript 5.9.3** - 严格类型检查
- **Vite 7.3.1** - 快速的开发服务器和构建工具
- **Tailwind CSS 4.1.18** - 实用优先的 CSS 框架

## 项目结构

```
appflow-landing/
├── src/
│   ├── main.tsx          # 应用入口点
│   ├── App.tsx           # 主应用组件，组合所有区块
│   ├── index.css         # 全局样式和 Tailwind 导入
│   └── components/
│       ├── Header.tsx    # 固定导航头部
│       ├── Hero.tsx      # Hero 区块（价值主张）
│       ├── Features.tsx  # 功能网格（6 张功能卡片）
│       ├── AppPreview.tsx # 手机模拟展示
│       ├── CTA.tsx       # 下载行动号召区块
│       └── Footer.tsx    # 页脚（链接和社交媒体）
├── index.html            # HTML 入口点
├── vite.config.ts        # Vite 构建配置
├── tsconfig.json         # TypeScript 配置
├── tailwind.config.js    # Tailwind 配置
└── package.json          # 依赖和脚本
```

## 前置要求

- Node.js 18+ 或兼容运行时（项目使用 Bun）
- npm、yarn、pnpm 或 Bun

## 安装

```bash
npm install
# 或
bun install
```

## 开发

启动开发服务器（默认 http://localhost:5173）：

```bash
npm run dev
# 或
bun run dev
```

## 构建

类型检查并构建生产版本：

```bash
npm run build
# 或
bun run build
```

输出目录：`dist/`

## 预览生产构建

```bash
npm run preview
# 或
bun run preview
```

## 组件架构

所有组件为展示型组件，无状态管理，使用自顶向下的单向数据流：

```
App.tsx (主组件)
├── Header (固定导航)
├── Hero (标题 + 行动按钮)
├── Features (6 张功能卡片)
├── AppPreview (3 个手机模拟)
├── CTA (下载区块)
└── Footer (链接 + 社交媒体)
```

## 样式约定

- **移动优先**的响应式设计
- 使用 Tailwind 实用类
- 一致的颜色方案：蓝色到靛蓝色渐变 (`from-blue-500 to-indigo-600`)
- 统一的间距：4, 6, 8, 16, 20
- 最大宽度容器：`max-w-6xl mx-auto px-6`

## 命名约定

- 组件：PascalCase（`Header.tsx`, `Hero.tsx`）
- 组件导出：`export function ComponentName()`
- HTML 锚点：kebab-case（`#features`, `#preview`）

## 修改内容

- 修改文本：直接编辑组件文件中的内容
- 添加新区块：在 `src/components/` 创建组件，在 `App.tsx` 中导入
- 调整样式：修改组件 JSX 中的 Tailwind 类
- 更改配色：当前硬编码在 Tailwind 类中，可在 `tailwind.config.js` 中添加主题扩展

## 特性

- ✅ TypeScript 严格模式
- ✅ 最新 React 19 和 Vite 7
- ✅ Tailwind CSS v4（JIT 模式）
- ✅ 快速热模块替换 (HMR)
- ✅ 优化的生产构建
- ✅ 完全静态内容（无需客户端状态管理）
- ✅ 平滑滚动动画
- ✅ 玻璃拟态效果
- ✅ 响应式布局

## 可用脚本

| 脚本 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 类型检查并构建生产版本 |
| `npm run preview` | 预览生产构建 |

## 浏览器支持

- Chrome（最新）
- Firefox（最新）
- Safari（最新）
- Edge（最新）

## 许可证

[指定您的许可证]
