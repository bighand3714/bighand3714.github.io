#!/usr/bin/env bash
# ─────────────────────────────────────────────
# 一键部署脚本：构建网站并发布到 gh-pages 分支
# 用法：在仓库根目录运行  ./deploy.sh
# ─────────────────────────────────────────────
set -euo pipefail
cd "$(dirname "$0")"

# 检查是否有未提交的源码改动（deploy 前应先提交）
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️  检测到未提交的改动，请先提交再部署："
  git status --short
  exit 1
fi

echo "▶ 安装依赖..."
npm ci --silent

echo "▶ 构建..."
npm run build

echo "▶ 推送源码到 main..."
git push origin main

echo "▶ 发布构建产物到 gh-pages..."
WORKTREE="$(mktemp -d)"
if git show-ref --verify --quiet refs/heads/gh-pages; then
  git worktree add "$WORKTREE" gh-pages
else
  git fetch origin gh-pages 2>/dev/null || true
  git worktree add -b gh-pages "$WORKTREE" origin/gh-pages
fi

rm -rf "$WORKTREE"/*
cp -r dist/* "$WORKTREE"/
(
  cd "$WORKTREE"
  git add -A
  git -c user.name=bighand3714 -c user.email=bighand3714@users.noreply.github.com \
    commit -m "deploy: $(date +'%Y-%m-%d %H:%M')" >/dev/null
  git push origin gh-pages
)
git worktree remove --force "$WORKTREE"

echo ""
echo "✅ 部署完成，约 1 分钟后生效：https://bighand3714.github.io"
