// 资料库列表自动化:扫描 docs/resources/*.md(排除总览与指南),按 frontmatter 聚合
import { createContentLoader } from 'vitepress'

export default createContentLoader('resources/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false
})
