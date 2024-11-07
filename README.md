# 🖼️ 圖片上傳平台

![平台預覽](https://raw.githubusercontent.com/jos556/upload_image/main/public/platform.png)

一個使用 React 和 Vite 建構的現代化、用戶友好的圖片上傳和管理平台。

## ✨ 特色功能

- 🚀 快速且響應式的圖片上傳
- 🎨 現代化 UI 設計
- 📱 移動裝置友好界面
- 🔒 安全的 GitHub 存儲
- 🖼️ 圖片預覽功能
- ⚡ 使用 Vite 實現極速開發

## 🛠️ 技術架構

- ⚛️ React
- 📦 Vite
- 🔷 TypeScript
- 🎨 CSS3
- 🌐 Axios

## 🚀 快速開始

1. **克隆專案**

```bash
git clone https://github.com/jos556/upload_image.git
cd upload_image
```

2. **安裝依賴**

```bash
npm install
```

3. **設置環境變數**
   在根目錄創建 `.env` 文件：

```env
VITE_GITHUB_TOKEN=你的github令牌
```

4. **啟動開發服務器**

```bash
npm run dev
```

## 📝 環境設置

使用此應用程序需要：

1. 創建具有 `repo` 權限的 GitHub 個人訪問令牌
2. 將令牌添加到 `.env` 文件
3. 在 `ImageUploader.jsx` 中配置你的倉庫詳細信息

## 🔧 配置說明

在 `ImageUploader.jsx` 中更新以下變量：

```javascript
const REPO_OWNER = '你的github用戶名';
const REPO_NAME = '你的倉庫名稱';
```

## 📱 響應式設計

平台完全響應式，支持以下設備：

- 💻 桌面端 (1920px 及以下)
- 💻 筆記本 (1400px 及以下)
- 📱 平板 (1200px 及以下)
- 📱 手機 (768px 及以下)

## 🤝 參與貢獻

歡迎提交 Pull Request 來改進這個專案！

## 📄 授權協議

本專案使用 MIT 授權協議 - 詳見 [LICENSE](LICENSE) 文件。

## 👨‍💻 作者

- [@jos556](https://github.com/jos556)

## 🙏 致謝

- React 團隊
- Vite 團隊
- 所有貢獻者

---

<p align="center">由 jos556 用 ❤️ 製作</p>
