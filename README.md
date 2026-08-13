# bighand3714.github.io

个人作品集网站（React + Vite + TypeScript），通过 GitHub Actions 自动部署到 GitHub Pages。

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

修改后 `git push` 到 main 分支，GitHub Actions 会自动构建并部署，约 1-2 分钟后网站更新。

## 🌐 部署

- 仓库：https://github.com/bighand3714/bighand3714.github.io
- 网站：https://bighand3714.github.io
- 自动化：`.github/workflows/deploy.yml` 在每次 push 到 main 时构建并发布 Pages
