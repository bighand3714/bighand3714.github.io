/**
 * 项目列表配置文件
 *
 * ────────────────────────────────────────────────────────────
 * ✏️ 使用方法：按下面的格式添加你的项目即可，页面会自动渲染。
 *    1. 复制一个 { ... } 对象到数组里
 *    2. 修改字段内容
 *    3. 保存后 git push，网站会自动更新
 *
 * 字段说明：
 *   - title      项目名称
 *   - description 项目简介（一两句话）
 *   - tags       技术/类型标签，如 ['Godot', '像素风']
 *   - github     GitHub 仓库链接（可选，没有就删掉这行）
 *   - demo      在线试玩/演示链接（可选，没有就删掉这行）
 *   - image      封面图路径（可选，把图片放到 src/assets/ 下，没有就删掉这行）
 * ────────────────────────────────────────────────────────────
 */

export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
}

export const projects: Project[] = [
  // {
  //   title: '示例项目',
  //   description: '这里写你的项目简介，一两句话说明这个项目是什么、做了什么。',
  //   tags: ['Godot', '像素风'],
  //   github: 'https://github.com/bighand3714/your-repo',
  //   demo: 'https://example.com',
  // },
]
