# Gemini Chat Exporter

![License](https://img.shields.io/github/license/AstridStark25963/gemini-chat-exporter)
![Version](https://img.shields.io/badge/version-1.0.2-blue)
![Platform](https://img.shields.io/badge/platform-Gemini-orange)

一个专为 Google Gemini 打造的极简、高保真对话导出工具。只需点击一下，即可将整段对话转换为排版精美的 Markdown 文档。

## ✨ 核心特性

- **🚀 智能解析**：深度还原表格、多级标题、代码块（已修复语言标签重复问题）。
- **🔗 完美超链接**：支持解析嵌套在加粗/斜体中的超链接，准确提取链接地址。
- **🧠 思考过程适配**：智能识别 Gemini 的思考过程。
  - **展开时**：自动格式化为 Markdown 引用块，保留思考细节。
  - **折叠时**：自动过滤无关文本，保持文档清爽。
- **🎨 极简交互**：右下角悬浮圆形蓝色图标，不占用页面空间，不干扰聊天体验。
- **📅 智能命名**：自动提取对话标题并附加当前时间戳（`YYYYMMDD_HHmm`），避免文件名冲突。
- **🧹 纯净输出**：自动过滤网页端隐藏的冗余文本（如 "Export to Sheets"、"Show thinking" 按钮及 "You said" 等提示词）。
- **🛡️ 安全可靠**：完美适配 Gemini 的 `TrustedHTML` 安全策略，无任何脚本报错。

## 📸 效果演示

UI展示：
![UI 展示](https://cdn.jsdelivr.net/gh/AstridStark25963/ImageHosting@main/image/image-20260215161936950.png)

导出效果展示：
![导出效果展示1](https://cdn.jsdelivr.net/gh/AstridStark25963/ImageHosting@main/image/image-20260215162051569.png)
![导出效果展示2](https://cdn.jsdelivr.net/gh/AstridStark25963/ImageHosting@main/image/image-20260215162155997.png)

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
  - `> **🤔 Gemini Thinking:**` (如展开思考过程，则包含此块)
- `---` (每轮对话间的分隔线)

## 🔗 相关链接

- **GitHub 仓库**: [AstridStark25963/gemini-chat-exporter](https://github.com/AstridStark25963/gemini-chat-exporter)
- **问题反馈**: [Issues 页面](https://github.com/AstridStark25963/gemini-chat-exporter/issues)
- **脚本发布页**: [Greasy Fork](https://greasyfork.org/scripts/566340-gemini-chat-exporter)

## ⚖️ 许可证

本项目基于 **MIT License** 协议开源。
