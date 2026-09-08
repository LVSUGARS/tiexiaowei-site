// 标签自动化:扫描 activity 与 resources 的 md,按 frontmatter.tags 聚合
// 给任意 md 加上 tags: [xxx] frontmatter,标签索引页自动归类
import { createContentLoader } from 'vitepress'

export default createContentLoader(['activity/*.md', 'resources/*.md'], {
  includeSrc: false,
  render: false,
  excerpt: false
})
