# Gemini Chat Exporter

![License](https://img.shields.io/github/license/AstridStark25963/gemini-chat-exporter)
![Version](https://img.shields.io/badge/version-1.2.0-blue)
![Platform](https://img.shields.io/badge/platform-Gemini-orange)

一个专为 Google Gemini 打造的极简、高保真对话导出工具。只需点击一下，即可将整段对话转换为排版精美的 Markdown 文档。

## ✨ 核心特性

- **🧮 完美数学公式**：直接提取 Gemini 底层公式代码，完美还原矩阵、积分、分段函数等复杂数学结构，支持 Typora/Obsidian 原生渲染。
- **📊 深度表格还原**：不仅支持表格结构，更能精准还原单元格内的代码块、超链接和样式格式。
- **📜 完整历史记录**：智能自动滚动加载技术，确保导出长对话时不再遗漏任何消息。
- **🧠 思考过程适配**：智能识别 Gemini 的思考过程。
  - **展开时**：自动格式化为 Markdown 引用块，保留思考细节。
  - **折叠时**：自动过滤无关文本，保持文档清爽。
- **🗂️ 智能应用卡片**：完美解析 Gemini 生成的 Google 生态扩展卡片（如 Tasks、Keep、Calendar、YouTube Music 等）。
  - **精美排版**：采用专属 Emoji、引用块与层级列表组合，在 Markdown 中重塑卡片的结构美感。
  - **一键直达**：突破前端单页应用限制，智能提取并重组搜索参数，生成直达应用的跳转链接。
- **🎨 极简交互**：右下角悬浮圆形蓝色图标，点击后显示加载动画，防止误触。
- **📅 精准命名**：自动提取对话标题并附加秒级时间戳（`YYYYMMDD_HHmmss`），彻底杜绝文件名冲突。
- **🧹 纯净输出**：自动过滤所有非对话内容的网页端冗余 UI 及文本。
- **🛡️ 安全可靠**：完美适配 Gemini 的 `TrustedHTML` 安全策略，无任何脚本报错。

## 📸 效果演示

UI展示：

![UI 展示](https://cdn.jsdelivr.net/gh/AstridStark25963/ImageHosting@main/image/image-20260215161936950.png)

导出效果展示：

![导出效果展示1](https://cdn.jsdelivr.net/gh/AstridStark25963/ImageHosting@main/image/image-20260215162051569.png)
![导出效果展示2](https://cdn.jsdelivr.net/gh/AstridStark25963/ImageHosting@main/image/image-20260215162155997.png)
![导出效果展示3](https://cdn.jsdelivr.net/gh/AstridStark25963/ImageHosting@main/image/image-20260218130559932.png)
![导出效果展示4](https://cdn.jsdelivr.net/gh/AstridStark25963/ImageHosting@main/image/image-20260220205155684.png)

## 🛠️ 安装说明

### 前置要求
确保你的浏览器已安装以下任意一个用户脚本管理器：
- [Tampermonkey (推荐)](https://www.tampermonkey.net/)
- [Violentmonkey](https://violentmonkey.github.io/)

### 安装链接
点击下方链接进入 Greasy Fork 页面进行一键安装：
👉 **[安装 Gemini Chat Exporter](https://greasyfork.org/scripts/566340-gemini-chat-exporter)**

## 📖 导出规范

导出的 Markdown 文档遵循以下结构：
- `# 对话标题` (文件首行)
- `## 👤 User` (用户输入内容)
- `## 🤖 Gemini` (AI 生成内容)
  - `> 🤔 Gemini Thinking:` (如展开思考过程，则包含此块)
  - `> 🎵 **YouTube Music**` (如触发扩展应用，将以带 Emoji 的专属引用块呈现)
- `---` (每轮对话间的分隔线)

## 🔗 相关链接

- **GitHub 仓库**: [AstridStark25963/gemini-chat-exporter](https://github.com/AstridStark25963/gemini-chat-exporter)
- **问题反馈**: [Issues 页面](https://github.com/AstridStark25963/gemini-chat-exporter/issues)
- **脚本发布页**: [Greasy Fork](https://greasyfork.org/scripts/566340-gemini-chat-exporter)

## ⚖️ 许可证

本项目基于 **MIT License** 协议开源。
