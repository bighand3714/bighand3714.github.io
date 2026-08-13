# bighand3714.github.io

个人作品集网站（React + Vite + TypeScript），部署在 GitHub Pages。

## 🚀 本地开发

```bash
npm install        # 安装依赖
npm run dev        # 本地预览（http://localhost:5173）
npm run build      # 构建（含类型检查）
npm run preview    # 预览构建产物
```

## ✏️ 修改网站内容

所有内容都集中在 `src/data/` 目录，改数据即可，无需改动组件：

| 文件 | 作用 |
|---|---|
| `src/data/profile.ts` | 名字、简介、社交链接、邮箱 |
| `src/data/projects.ts` | 项目列表（空模板，含填写说明注释） |
| `src/data/skills.ts` | 技能标签 |

## 🌐 发布更新

```bash
./deploy.sh
```

脚本会自动：构建 → 推送源码到 `main` → 发布构建产物到 `gh-pages` 分支。
部署完成后约 1 分钟生效。

（GitHub Pages 已配置为从 `gh-pages` 分支根目录部署，无需任何额外设置）

## 📁 目录结构

- `main` 分支：网站源码
- `gh-pages` 分支：构建产物（`dist/`），由 `deploy.sh` 自动发布

- 仓库：https://github.com/bighand3714/bighand3714.github.io
- 网站：https://bighand3714.github.io
