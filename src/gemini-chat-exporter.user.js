// ==UserScript==
// @name                 Gemini Chat Exporter
// @name:zh-CN           Gemini 对话导出工具
// @description          Export Gemini conversations as Markdown with accurate formatting and timestamps.
// @description:zh-CN    深度优化排版，高保真还原 Gemini 聊天的标题、代码块、表格和公式。
// @namespace            https://github.com/AstridStark25963/gemini-chat-exporter/
// @version              1.0.2
// @author               AstridStark25963
// @license              MIT
// @icon                 data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgNTEyIDE4OCI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJsb2dvc0dvb2dsZUdlbWluaTAiIGN4PSI4NS43MzglIiBjeT0iMjUuMzU0JSIgcj0iMTAzLjE1NCUiIGZ4PSI4NS43MzglIiBmeT0iMjUuMzU0JSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtLjg2ODg3IC40NzkxNSAtLjM5Mjc2IC0uNjY3MjMgMS43MDIgLjAxMikiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM1QkFFRkYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM5Q0JGRkYiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0ibG9nb3NHb29nbGVHZW1pbmkxIiBjeD0iNjEuODc5JSIgY3k9IjI2LjY4MyUiIHI9IjgwLjYxMiUiIGZ4PSI2MS44NzklIiBmeT0iMjYuNjgzJSIgZ3JhZGllbnRUcmFuc2Zvcm09InNjYWxlKC0xIC0uOTE5NSlyb3RhdGUoLTgxLjUyNiAtLjMyMyAuNzA2KSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzQwOURGRiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzY0QjBGRiIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJsb2dvc0dvb2dsZUdlbWluaTIiIGN4PSI1My4xODQlIiBjeT0iMTkuMDIxJSIgcj0iMTEwLjc4OSUiIGZ4PSI1My4xODQlIiBmeT0iMTkuMDIxJSIgZ3JhZGllbnRUcmFuc2Zvcm09InNjYWxlKC0uNjgwMSAtMSlyb3RhdGUoLTc2LjE5NyAtLjM2OCAuODM4KSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzE3N0NGRiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzREQTRGRiIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJsb2dvc0dvb2dsZUdlbWluaTMiIGN4PSItMTgyLjY2NSUiIGN5PSIxMC44NjklIiByPSI1MjEuNDA0JSIgZng9Ii0xODIuNjY1JSIgZnk9IjEwLjg2OSUiIGdyYWRpZW50VHJhbnNmb3JtPSJzY2FsZSgxIC4xNzk2KXJvdGF0ZSg2NS40MTMgLTIuMjEzIC4zNTcpIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMUM3QUZGIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNzZBOUZGIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOEZCOUZGIi8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxvZ29zR29vZ2xlR2VtaW5pNCIgeDE9IjQ4Ljg4NyUiIHgyPSI0OC44ODclIiB5MT0iOC44MDklIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzA3NkVGRiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNFOTNGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsb2dvc0dvb2dsZUdlbWluaTUiIHgxPSIxMy4yMTclIiB4Mj0iNzguNTk4JSIgeTE9IjAlIiB5Mj0iOTQuMjAxJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzA3NkVGRiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzY5QTNGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjbG9nb3NHb29nbGVHZW1pbmkwKSIgZD0iTTEyNS45MzkgMTI2LjY0YzAgMTcuMzk2LTUuMTYgMzEuMjU0LTE1LjQ4MiA0MS41NzVjLTExLjU5NiAxMi4yOTItMjYuODQ2IDE4LjQzOC00NS43NDggMTguNDM4Yy0xOC4wOSAwLTMzLjM5OC02LjI2Mi00NS45MjMtMTguNzg2QzYuMjYyIDE1NS4zNDIgMCAxMzkuOTE5IDAgMTIxLjU5N2MwLTE4LjMyMyA2LjI2Mi0zMy43NDcgMTguNzg2LTQ2LjI3QzMxLjMxMSA2Mi44MDEgNDYuNjE4IDU2LjU0IDY0LjcxIDU2LjU0YzkuMTYxIDAgMTcuOCAxLjYyMyAyNS45MTggNC44N2M4LjExOCAzLjI0NyAxNC43ODYgNy44MjggMjAuMDA0IDEzLjc0MmwtMTEuNDggMTEuNDhjLTMuODI3LTQuNjM4LTguNzg1LTguMjYyLTE0Ljg3My0xMC44NzFjLTYuMDg4LTIuNjEtMTIuNjExLTMuOTE0LTE5LjU3LTMuOTE0Yy0xMy41NjcgMC0yNS4wNDggNC42OTctMzQuNDQxIDE0LjA5Yy05LjI3NyA5LjUxLTEzLjkxNiAyMS4zOTYtMTMuOTE2IDM1LjY2YzAgMTQuMjYzIDQuNjM5IDI2LjE1IDEzLjkxNiAzNS42NTljOS4zOTMgOS4zOTMgMjAuODc0IDE0LjA5IDM0LjQ0MiAxNC4wOWMxMi40MDggMCAyMi43My0zLjQ4IDMwLjk2My0xMC40MzdjOC4yMzMtNi45NTggMTIuOTg4LTE2LjUyNSAxNC4yNjMtMjguNzAySDY0Ljcxdi0xNC45Nmg2MC4zNmMuNTggMy4yNDguODcgNi4zNzkuODcgOS4zOTQiLz48cGF0aCBmaWxsPSJ1cmwoI2xvZ29zR29vZ2xlR2VtaW5pMSkiIGQ9Ik0xNzYuMTcgOTYuMjA1YzEyLjc2OCAwIDIyLjkzIDQuMTMgMzAuNDg1IDEyLjM4N2M3LjU1NiA4LjI1OSAxMS4zMzQgMTkuODI2IDExLjMzNCAzNC43MDNsLS4xNzYgMS43NTdoLTY3LjY0OGMuMjM1IDguNDM0IDMuMDQ2IDE1LjIyOCA4LjQzNCAyMC4zODJjNS4zODkgNS4xNTQgMTEuODMxIDcuNzMgMTkuMzI4IDcuNzNjMTAuMzA4IDAgMTguMzktNS4xNTMgMjQuMjQ4LTE1LjQ2MWwxNC40MDggNy4wMjhjLTMuODY2IDcuMjYzLTkuMjI1IDEyLjk0NC0xNi4wNzcgMTcuMDQ0Yy02Ljg1MyA0LjEtMTQuNjEzIDYuMTUtMjMuMjgyIDYuMTVjLTEyLjY1IDAtMjMuMDc2LTQuMzM1LTMxLjI3Ni0xMy4wMDNzLTEyLjI5OS0xOS42Mi0xMi4yOTktMzIuODU3YzAtMTMuMTIgMy45ODMtMjQuMDQzIDExLjk0OC0zMi43N2M3Ljk2NS04LjcyNyAxOC4xNTctMTMuMDkgMzAuNTczLTEzLjA5bS0uMzUxIDE0Ljc2Yy02LjA5MSAwLTExLjMzMyAxLjg3NC0xNS43MjYgNS42MjJjLTQuMzkzIDMuNzQ5LTcuMjkyIDguNzg1LTguNjk4IDE1LjExaDQ5LjM3NGMtLjQ2OC01Ljk3My0yLjg5OS0xMC45MjItNy4yOTItMTQuODQ2Yy00LjM5Mi0zLjkyNC0xMC4yNzktNS44ODctMTcuNjU4LTUuODg3Ii8+PHBhdGggZmlsbD0idXJsKCNsb2dvc0dvb2dsZUdlbWluaTIpIiBkPSJNMjQ0LjQ5MyAxODQuODQzaC0xNi4xMTZWOTkuMDA4aDE1LjQxNnYxMS45MTJoLjdjMi40NTMtNC4yMDQgNi4yMTktNy43MDggMTEuMjk5LTEwLjUxYzUuMDgtMi44MDQgMTAuMTMtNC4yMDUgMTUuMTUzLTQuMjA1YzYuMzA2IDAgMTEuODUzIDEuNDYgMTYuNjQxIDQuMzhjNC43ODggMi45MTkgOC4yOTIgNi45NDggMTAuNTEgMTIuMDg2YzcuMTI0LTEwLjk3NyAxNi45OTMtMTYuNDY2IDI5LjYwNS0xNi40NjZjOS45MjcgMCAxNy41NzYgMy4wMzYgMjIuOTQ4IDkuMTFjNS4zNzIgNi4wNzIgOC4wNTggMTQuNzE0IDguMDU4IDI1LjkyNXY1My42MDNoLTE2LjExNnYtNTEuMTVjMC04LjA1OS0xLjQ2LTEzLjg2OS00LjM4LTE3LjQzYy0yLjkxOS0zLjU2Mi03LjgyNC01LjM0My0xNC43MTQtNS4zNDNjLTYuMTkgMC0xMS4zODYgMi42MjctMTUuNTkgNy44ODNjLTQuMjA1IDUuMjU1LTYuMzA3IDExLjQ0NC02LjMwNyAxOC41Njh2NDcuNDcyaC0xNi4xMTZ2LTUxLjE1YzAtOC4wNTktMS40Ni0xMy44NjktNC4zOC0xNy40M2MtMi45MTktMy41NjItNy44MjQtNS4zNDMtMTQuNzE0LTUuMzQzYy02LjE5IDAtMTEuMzg2IDIuNjI3LTE1LjU5IDcuODgzYy00LjIwNSA1LjI1NS02LjMwNyAxMS40NDQtNi4zMDcgMTguNTY4eiIvPjxwYXRoIGZpbGw9InVybCgjbG9nb3NHb29nbGVHZW1pbmk0KSIgZD0iTTM5My4yNjMgNjkuMjE2YzAgMy4xNTgtMS4xMTIgNS44NDgtMy4zMzQgOC4wN2MtMi4yMjMgMi4yMjMtNC45MTMgMy4zMzUtOC4wNzEgMy4zMzVjLTMuMTU4IDAtNS44NDktMS4xMTItOC4wNzEtMy4zMzRjLTIuMjIzLTIuMjIzLTMuMzM0LTQuOTEzLTMuMzM0LTguMDcxYzAtMy4xNTggMS4xMTEtNS44NDkgMy4zMzQtOC4wNzFjMi4yMjItMi4yMjMgNC45MTMtMy4zMzQgOC4wNy0zLjMzNGMzLjE2IDAgNS44NSAxLjExMSA4LjA3MiAzLjMzNGMyLjIyMiAyLjIyMiAzLjMzNCA0LjkxMyAzLjMzNCA4LjA3bS0zLjMzNCAyOS42NTJ2ODUuOTc1aC0xNi4xNDJWOTguODY4eiIvPjxwYXRoIGZpbGw9InVybCgjbG9nb3NHb29nbGVHZW1pbmkzKSIgZD0iTTUxMiA2OS4yMTZjMCAzLjE1OC0xLjExMSA1Ljg0OC0zLjMzNCA4LjA3Yy0yLjIyMiAyLjIyMy00LjkxMyAzLjMzNS04LjA3IDMuMzM1Yy0zLjE2IDAtNS44NS0xLjExMi04LjA3Mi0zLjMzNGMtMi4yMjItMi4yMjMtMy4zMzQtNC45MTMtMy4zMzQtOC4wNzFjMC0zLjE1OCAxLjExMi01Ljg0OSAzLjMzNC04LjA3MWMyLjIyMy0yLjIyMyA0LjkxMy0zLjMzNCA4LjA3MS0zLjMzNGMzLjE1OCAwIDUuODQ5IDEuMTExIDguMDcxIDMuMzM0YzIuMjIzIDIuMjIyIDMuMzM0IDQuOTEzIDMuMzM0IDguMDdtLTMuMzM0IDI5LjY1MnY4NS45NzVoLTE2LjE0MlY5OC44Njh6Ii8+PHBhdGggZmlsbD0idXJsKCNsb2dvc0dvb2dsZUdlbWluaTUpIiBkPSJNNDA0LjAwNCA5OS4wMDhoMTUuNDE1djExLjkxMmguN2MyLjQ1My00LjIwNCA2LjIyLTcuNzA4IDExLjMtMTAuNTFjNS4wOC0yLjgwNCAxMC4zNjQtNC4yMDUgMTUuODUzLTQuMjA1YzEwLjUxIDAgMTguNTk3IDMuMDA3IDI0LjI2MSA5LjAyMmM1LjY2NCA2LjAxNCA4LjQ5NiAxNC41NjggOC40OTYgMjUuNjYzdjUzLjk1M2gtMTYuMTE2di01Mi45MDJjLS4zNS0xNC4wMTQtNy40MTYtMjEuMDIxLTIxLjE5Ni0yMS4wMjFjLTYuNDIzIDAtMTEuNzk1IDIuNTk4LTE2LjExNiA3Ljc5NXMtNi40ODEgMTEuNDE1LTYuNDgxIDE4LjY1NnY0Ny40NzJoLTE2LjExNnoiLz48cGF0aCBmaWxsPSIjMDc2RUZGIiBkPSJNMzQ4LjM3NCA3Mi43NmMtMi44NDYtMTguNzg4LTE3LjU5Mi0zMy41MzMtMzYuMzgtMzYuMzhjMTguNzg4LTIuODQ3IDMzLjUzNC0xNy41OTMgMzYuMzgtMzYuMzhjMi44NDcgMTguNzg3IDE3LjU5MyAzMy41MzMgMzYuMzggMzYuMzhjLTE4Ljc4NyAyLjg0Ny0zMy41MzMgMTcuNTkyLTM2LjM4IDM2LjM4Ii8+PC9zdmc+
// @include              *://gemini.google.com/*
// @run-at               document-idle
// @grant                GM_addStyle
// @downloadURL          https://raw.githubusercontent.com/AstridStark25963/gemini-chat-exporter/main/src/gemini-chat-exporter.user.js
// @updateURL            https://raw.githubusercontent.com/AstridStark25963/gemini-chat-exporter/main/src/gemini-chat-exporter.user.js
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        .gemini-export-circle-btn {
            position: fixed; right: 25px; bottom: 80px; z-index: 999999 !important;
            width: 48px; height: 48px; border-radius: 50%;
            background: #1a73e8; color: #fff; border: none;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: all 0.2s ease-in-out;
        }
        .gemini-export-circle-btn:hover { background: #1557b0; transform: scale(1.1); }
        .gemini-export-icon { width: 24px; height: 24px; stroke: currentColor; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
    `);

    const MarkdownParser = {
        parseNode: function(node) {
            if (node.nodeType === 3) return node.nodeValue;

            if (node.nodeType === 1) {
                const text = node.textContent.trim();
                if (text === "Export to Sheets" || text === "Export to Google Sheets" || text === "content_copy") {
                    return "";
                }

                if (node.classList.contains('model-thoughts')) {
                    const contentNode = node.querySelector('[data-test-id="thoughts-content"]');
                    if (contentNode) {
                        const thoughtText = this.parseChildren(contentNode).trim();
                        const formatted = thoughtText.split('\n').map(line => `> ${line}`).join('\n');
                        return `> **🤔 Gemini Thinking:**\n>\n${formatted}\n\n`;
                    } else {
                        return "";
                    }
                }
            }

            switch (node.nodeName) {
                case "H1": case "H2": case "H3":
                    const level = node.nodeName.substring(1);
                    return `\n${"#".repeat(parseInt(level) + 2)} ${this.parseChildren(node).trim()}\n`;
                
                case "P": return `\n${this.parseChildren(node).trim()}\n`;
                
                case "STRONG": case "B": 
                    return `**${this.parseChildren(node).trim()}**`;
                
                case "EM": case "I": 
                    return `*${this.parseChildren(node).trim()}*`;
                
                case "A":
                    const href = node.getAttribute("href");
                    const linkText = this.parseChildren(node).trim();
                    if (!href || href.startsWith('javascript:') || href === "#") {
                         return linkText;
                    }
                    return `[${linkText}](${href})`;

                case "CODE":
                    return node.closest('pre') ? node.textContent : `\`${node.textContent}\``;
                
                case "CODE-BLOCK":
                    const langSpan = node.querySelector('span');
                    const lang = langSpan ? langSpan.textContent.trim() : "";
                    const codeContent = node.querySelector('pre')?.textContent || "";
                    return `\n\`\`\`${lang}\n${codeContent.trim()}\n\`\`\`\n`;

                case "PRE":
                    if (node.closest('code-block')) return "";
                    return `\n\`\`\`\n${node.textContent.trim()}\n\`\`\`\n`;

                case "UL": return `\n${this.parseChildren(node)}\n`;
                
                case "OL":
                    let olText = "\n";
                    Array.from(node.children).forEach((li, i) => {
                        if(li.nodeName === "LI") {
                             olText += `${i+1}. ${this.parseChildren(li).trim()}\n`;
                        }
                    });
                    return olText;
                
                case "LI": return `- ${this.parseChildren(node).trim()}\n`;
                case "BLOCKQUOTE": return `\n> ${node.textContent.trim()}\n`;
                case "TABLE": return `\n${this.parseTable(node)}\n`;
                
                case "ANNOTATION":
                    if (node.getAttribute("encoding") === "application/x-tex") {
                        const tex = node.textContent.trim();
                        return node.closest(".katex-display") ? `\n$$\n${tex}\n$$\n` : `$${tex}$`;
                    }
                    return "";
                
                case "BR": return "\n";
                case "SCRIPT": case "STYLE": return "";
                
                default: return this.parseChildren(node);
            }
        },

        parseChildren: function(node) {
            let res = "";
            node.childNodes.forEach(child => res += this.parseNode(child));
            return res;
        },

        parseTable: function(table) {
            let md = "";
            const rows = Array.from(table.querySelectorAll("tr"));
            rows.forEach((tr, i) => {
                const cells = Array.from(tr.querySelectorAll("th, td")).map(c => c.textContent.trim().replace(/\|/g, "\\|"));
                md += `| ${cells.join(" | ")} |\n`;
                if (i === 0) md += `| ${cells.map(() => "---").join(" | ")} |\n`;
            });
            return md;
        }
    };

    const Manager = {
        getChatTitle: function() {
            const titleEl = document.querySelector('[data-test-id="conversation-title"]');
            return titleEl?.textContent.trim() || "Gemini Chat";
        },

        getFileName: function(title) {
            const now = new Date();
            const ts = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}_${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
            return `${title.replace(/[\/\\?%*:|"<>]/g, '_')}_${ts}.md`;
        },

        run: function() {
            const queries = document.querySelectorAll("user-query-content");
            const responses = document.querySelectorAll("model-response");
            if (!queries.length) return;

            const chatTitle = this.getChatTitle();
            let output = `# ${chatTitle}\n\n---\n\n`;

            for (let i = 0; i < queries.length; i++) {
                const q = MarkdownParser.parseChildren(queries[i]).replace(/You said/g, "").trim();
                output += `## 👤 User\n${q}\n\n`;

                if (responses[i]) {
                    const a = MarkdownParser.parseChildren(responses[i]).replace(/Gemini said/g, "").trim();
                    output += `## 🤖 Gemini\n${a}\n\n---\n\n`;
                }
            }

            const blob = new Blob([output], { type: "text/markdown" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = this.getFileName(chatTitle);
            a.click();
        }
    };

    function init() {
        if (document.getElementById("gemini-export-final")) return;
        const btn = document.createElement("button");
        btn.id = "gemini-export-final";
        btn.className = "gemini-export-circle-btn";
        btn.innerHTML = `<svg class="gemini-export-icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`;
        btn.onclick = () => Manager.run();
        document.documentElement.appendChild(btn);
    }

    if (window.trustedTypes && !window.trustedTypes.defaultPolicy) {
        window.trustedTypes.createPolicy('default', { createHTML: (s) => s });
    }
    setInterval(init, 2000);
})();
