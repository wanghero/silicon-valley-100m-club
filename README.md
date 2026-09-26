# 硅谷百米会 · Silicon Valley 100M Club

硅谷百米会官方网站。一个纯静态的单页网站，支持中英双语切换。

The official website of the Silicon Valley 100M Club — a static, single-page site with a Chinese / English language switch.

## 文件结构

| 文件 | 说明 |
| --- | --- |
| `index.html` | 页面结构与中文原文 |
| `i18n.js` | 英文译文与语言切换逻辑 |
| `style.css` | 全部样式（含手机端与英文模式的排版调整） |
| `club-logo.png` / `logo.svg` | 俱乐部 Logo |
| `bay.jpg` | 首屏旧金山湾区照片（来源见 `ASSET-CREDITS.md`） |
| `VERSION` | 当前版本号 |
| `.nojekyll` | 让 GitHub Pages 按原样发布静态文件 |

## 本地预览

不需要安装任何依赖，直接用浏览器打开 `index.html` 即可。也可以起一个本地服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 中英双语

- 页面右上角的「中文 / EN」按钮用来切换语言，访客的选择会保存在浏览器本地。
- 在链接后加 `?lang=en` 可以直接打开英文版，例如 `index.html?lang=en`。
- 默认语言是中文。

### 修改文案

- **中文**：直接改 `index.html` 里对应的文字。
- **英文**：改 `i18n.js` 里 `en` 对象中对应的条目。

`index.html` 中需要翻译的元素都带有 `data-i18n="键名"`，与 `i18n.js` 里的键一一对应；属性（如 `aria-label`）用 `data-i18n-attr="属性名:键名"` 标注。

新增一段需要翻译的文字时：

1. 在 `index.html` 里给元素加上 `data-i18n="newKey"`，里面写中文；
2. 在 `i18n.js` 的 `en` 对象里加上 `newKey: 'English text'`。

英文内容可以包含 HTML（如 `<br>`、`<span>`），`&` 需要写成 `&amp;`。

## 版本

发布新版本时同步更新 `VERSION` 文件。

## 素材版权

图片来源与授权见 [`ASSET-CREDITS.md`](ASSET-CREDITS.md)。
