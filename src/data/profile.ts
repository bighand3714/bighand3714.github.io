/**
 * 个人信息配置文件 —— 修改这里即可更新网站内容，无需改动组件代码
 */

export interface SocialLink {
  label: string
  url: string
  /** 社交平台名称，用于匹配图标（github | bilibili | email | 其他显示首字母） */
  icon: string
}

export interface Profile {
  /** 显示名称（昵称/名字） */
  name: string
  /** 头像首字母（用于生成圆形头像，可改为图片 URL 用 image 字段） */
  avatarText: string
  /** 头像图片 URL，留空则显示 avatarText 首字母头像 */
  avatarImage?: string
  /** 一句话定位，显示在 Hero 区 */
  tagline: string
  /** 个人简介，显示在「关于我」区域 */
  about: string[]
  /** 社交链接，显示在 Hero 区和「联系我」区域 */
  socials: SocialLink[]
  /** 联系邮箱 */
  email: string
}

export const profile: Profile = {
  name: 'bighand3714',
  avatarText: 'B',
  tagline: '独立游戏开发者 · 主机游戏逆向研究爱好者',
  about: [
    '你好，我是 bighand3714，一名独立游戏开发者，专注用 Godot 引擎制作像素风动作冒险游戏。',
    '同时热衷于经典主机游戏逆向工程研究：参与过《超级马力欧64》《时之笛》等游戏的源码反编译项目，喜欢拆解老游戏的实现原理。',
    '这里汇集了我的作品与研究项目，欢迎交流。',
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/bighand3714', icon: 'github' },
    { label: '邮箱', url: 'mailto:your-email@example.com', icon: 'email' },
  ],
  email: 'your-email@example.com',
}
