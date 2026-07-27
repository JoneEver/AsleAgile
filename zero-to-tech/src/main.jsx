// 入口文件：把 React App 挂载到 HTML 的 #root 节点上，并引入全局样式。
// 该文件在项目启动后最先执行，负责全局初始化。

import { StrictMode } from "react"; // 开发模式下启用额外检查和警告
import { createRoot } from "react-dom/client"; // React 18+ 的挂载 API
import App from "./App.jsx"; // 应用的根组件

// 全局 CSS：直接导入以便由打包工具（Vite）处理并注入到页面中。
// 注意：导入顺序会影响 CSS 的层叠优先级，这里保持与原始 HTML 中 <link> 的顺序一致。
import "./css/reset.css"; // CSS Reset，清除浏览器默认样式
import "./css/variables.css"; // CSS 变量（颜色、间距等全局变量）
import "./css/layout.css"; // 布局相关样式（容器、网格等）
import "./css/hero.css"; // 主页 hero 区域样式
import "./css/nav.css"; // 导航栏样式
import "./css/cards.css"; // 卡片组件样式
import "./css/lab.css"; // 实验/演示页样式
import "./css/responsive.css"; // 响应式样式（媒体查询等）

// 获取页面中的根节点并创建 React 根（createRoot 返回一个 Root 实例）
// 然后渲染整个应用：将 <App /> 挂载在 <StrictMode> 中以启用额外的运行时检查。
// <StrictMode> 不会影响生产构建的行为，它只在开发环境提供警告。
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
